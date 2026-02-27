import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import * as auth from "./auth.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-3e3b490b/health", (c) => {
  return c.json({ status: "ok" });
});

// Debug endpoint - check if user exists
app.post("/make-server-3e3b490b/auth/check-user", async (c) => {
  try {
    const { email } = await c.req.json();
    console.log('🔍 Check user request:', { email });
    
    const sanitizedEmail = email.toLowerCase().trim();
    const userKey = `user:${sanitizedEmail}`;
    const user = await kv.get(userKey);
    
    return c.json({ 
      exists: !!user,
      email: sanitizedEmail,
      userKey: userKey
    }, 200);
  } catch (error) {
    console.error('Check user error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Debug endpoint - list all users in KV store
app.get("/make-server-3e3b490b/auth/list-users", async (c) => {
  try {
    console.log('📋 Listing all users from KV store');
    
    // Get all keys with user: prefix
    const userKeys = await kv.getByPrefix('user:');
    console.log('Found user keys:', userKeys?.length || 0);
    
    return c.json({ 
      count: userKeys?.length || 0,
      users: userKeys || []
    }, 200);
  } catch (error) {
    console.error('List users error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

// Report endpoints
app.post("/make-server-3e3b490b/reports/submit", async (c) => {
  try {
    const { userId, type, description, photo, location } = await c.req.json();
    console.log('📝 Submit report request:', { userId, type, location });

    // Validate required fields
    if (!userId || !type || !description || !location) {
      return c.json({ error: 'Missing required fields' }, 400);
    }

    // Generate report ID
    const reportId = `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();

    const report = {
      id: reportId,
      userId,
      type,
      description,
      photo: photo || null,
      location: {
        lat: location.lat,
        lng: location.lng,
        address: location.address || '',
      },
      timestamp: now,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };

    // Save report to KV store
    const reportKey = `report:${reportId}`;
    await kv.set(reportKey, report);

    // Award eco points to user - find user by ID
    // The userId is the actual user ID, so we need to find the user by searching all users
    const allUsers = await kv.getByPrefix('user:');
    const userToUpdate = allUsers?.find((u: any) => u.id === userId);
    
    if (userToUpdate && userToUpdate.email) {
      const userKey = `user:${userToUpdate.email}`;
      const updatedUser = {
        ...userToUpdate,
        ecoPoints: (userToUpdate.ecoPoints || 0) + 10,
        credits: Math.floor(((userToUpdate.ecoPoints || 0) + 10) / 100),
        updatedAt: now,
      };
      await kv.set(userKey, updatedUser);
      console.log('✅ Awarded 10 eco points to user:', userToUpdate.email);
    } else {
      console.warn('⚠️ User not found for eco points:', userId);
    }

    console.log('✅ Report saved successfully:', reportId);
    return c.json({ report }, 200);
  } catch (error) {
    console.error('Submit report error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

app.get("/make-server-3e3b490b/reports/list", async (c) => {
  try {
    console.log('📋 Listing all reports from KV store');
    
    const reports = await kv.getByPrefix('report:');
    console.log('Found reports:', reports?.length || 0);
    
    return c.json({ 
      count: reports?.length || 0,
      reports: reports || []
    }, 200);
  } catch (error) {
    console.error('List reports error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

app.get("/make-server-3e3b490b/reports/user/:userId", async (c) => {
  try {
    const userId = c.req.param('userId');
    console.log('📋 Listing reports for user:', userId);
    
    const allReports = await kv.getByPrefix('report:');
    const userReports = allReports?.filter((report: any) => report.userId === userId) || [];
    
    console.log('Found user reports:', userReports.length);
    
    return c.json({ 
      count: userReports.length,
      reports: userReports
    }, 200);
  } catch (error) {
    console.error('List user reports error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

// Get user data by ID
app.get("/make-server-3e3b490b/users/:userId", async (c) => {
  try {
    const userId = c.req.param('userId');
    console.log('👤 Getting user data:', userId);
    
    // Find user by ID across all users
    const allUsers = await kv.getByPrefix('user:');
    const user = allUsers?.find((u: any) => u.id === userId);
    
    if (!user) {
      return c.json({ error: 'User not found' }, 404);
    }
    
    // Remove password from response
    const { password, ...userWithoutPassword } = user;
    
    console.log('✅ User data retrieved:', userWithoutPassword.email);
    return c.json({ user: userWithoutPassword }, 200);
  } catch (error) {
    console.error('Get user error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

// Update report status
app.put("/make-server-3e3b490b/reports/:reportId/status", async (c) => {
  try {
    const reportId = c.req.param('reportId');
    const { status } = await c.req.json();
    console.log('🔄 Updating report status:', { reportId, status });
    
    // Validate status
    if (!['pending', 'reviewed', 'resolved'].includes(status)) {
      return c.json({ error: 'Invalid status' }, 400);
    }

    // Get the report
    const reportKey = `report:${reportId}`;
    const report = await kv.get(reportKey);
    
    if (!report) {
      return c.json({ error: 'Report not found' }, 404);
    }

    // Update status
    const updatedReport = {
      ...report,
      status,
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(reportKey, updatedReport);
    console.log('✅ Report status updated:', reportId);
    
    return c.json({ report: updatedReport }, 200);
  } catch (error) {
    console.error('Update report status error:', error);
    return c.json({ error: 'Internal server error', details: String(error) }, 500);
  }
});

// Authentication endpoints
app.post("/make-server-3e3b490b/auth/register", async (c) => {
  try {
    const { email, password, name } = await c.req.json();
    console.log('📝 Registration request:', { email, name });
    
    const result = await auth.registerUser(email, password, name);
    
    if (result.error) {
      return c.json({ error: result.error }, 400);
    }
    
    return c.json({ user: result.user }, 200);
  } catch (error) {
    console.error('Registration endpoint error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

app.post("/make-server-3e3b490b/auth/login", async (c) => {
  try {
    const { email, password } = await c.req.json();
    console.log('🔐 Login request:', { email });
    
    const result = await auth.loginUser(email, password);
    
    if (result.error) {
      return c.json({ error: result.error }, 400);
    }
    
    return c.json({ user: result.user }, 200);
  } catch (error) {
    console.error('Login endpoint error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

app.post("/make-server-3e3b490b/auth/admin-login", async (c) => {
  try {
    const { email, password } = await c.req.json();
    console.log('👑 Admin login request:', { email });
    
    const result = await auth.loginAdmin(email, password);
    
    if (result.error) {
      return c.json({ error: result.error }, 400);
    }
    
    return c.json({ user: result.user }, 200);
  } catch (error) {
    console.error('Admin login endpoint error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

Deno.serve(app.fetch);