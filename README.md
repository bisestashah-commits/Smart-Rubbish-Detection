# Smart Rubbish Detection System - Sydney

A comprehensive web application designed to empower Sydney residents to actively participate in keeping our city clean through community engagement and innovative technology.

![Smart Rubbish Detection System](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18.3.1-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-Latest-3178c6)

## 🌟 Features

### Core Functionality
- **Dual Authentication System**: Support for community members and 4 fixed admin accounts (admin1-admin4@sydney.gov.au)
- **Report Rubbish**: Two-column layout with comprehensive form and interactive heat map
- **GPS Auto-Detection**: Browser permission handling with manual pinpoint functionality
- **Real-time Reverse Geocoding**: Automatic address detection from coordinates
- **Interactive Heat Map**: Centered on Sydney CBD with 12 pre-loaded sample data points across iconic locations
- **Eco Points Reward System**: Users earn $1 AUD credit for every 100 eco points collected (+10 points per report)
- **Cloud-Based Storage**: All data stored in Supabase KV Store, accessible from anywhere

### Additional Features
- **Real-time Notifications**: In-app notification bell with live updates
- **Admin Dashboard**: Manage reports, update status, and export weekly reports
- **User Dashboard**: Track eco points, credits, and report history
- **Mobile-Optimized**: Fully responsive with hamburger menu and touch-friendly interfaces
- **Input Validation**: Comprehensive sanitization and error handling
- **Duplicate Prevention**: Smart duplicate detection system
- **Awareness Page**: Educational content about waste management and NSW environmental laws
- **About Us Page**: Team information and project details

## 👥 Team

This project is developed and maintained by:

- **Nazmus Sakib** - Project Leader (s8116515@live.vu.edu.au)
- **Md Abudozana Niloy** - Full Stack Developer (s8138202@live.vu.edu.au)
- **Suvekshya Shrestha** - UI/UX Designer & Developer (s8103527@live.vu.edu.au)
- **Bisesta Shah** - Backend Developer (s8103504@live.vu.edu.au)

## 🚀 Live Demo

Visit the live application: [https://1sakib1.github.io/Smart-Rubbish-Detection](https://smart-rubbish-detection-steel.vercel.app/)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Maps**: Leaflet & React Leaflet
- **Animations**: Motion (Framer Motion)
- **Form Handling**: React Hook Form
- **UI Components**: Radix UI, shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Backend**: Supabase Edge Functions (Hono.js)
- **Data Storage**: Supabase KV Store (Cloud)
- **Authentication**: Supabase Auth

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm package manager
- Supabase account (for cloud storage)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/1Sakib1/Smart-Rubbish-Detection.git
   cd Smart-Rubbish-Detection
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Configure Supabase**
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Update `/utils/supabase/info.tsx` with your project credentials:
     - `projectId`: Your Supabase project ID
     - `publicAnonKey`: Your Supabase anon/public key

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
pnpm build
```

The production-ready files will be in the `dist` folder.

## 🌐 Deployment

### GitHub Pages Deployment

This project uses GitHub Actions for automatic deployment to GitHub Pages.

**Setup Steps:**

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push your code to the `main` branch
4. The workflow will automatically build and deploy your site
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (if gh-pages is configured)
npm run deploy
```

## 🔑 Admin Accounts

The system includes 4 pre-configured admin accounts:

- **Email**: admin1@sydney.gov.au - **Password**: admin1pass
- **Email**: admin2@sydney.gov.au - **Password**: admin2pass
- **Email**: admin3@sydney.gov.au - **Password**: admin3pass
- **Email**: admin4@sydney.gov.au - **Password**: admin4pass

## 💰 Eco Points System

- **+10 eco points** for every rubbish report submitted
- **$1 AUD credit** for every 100 eco points earned
- Credits can be redeemed for:
  - Vouchers at local businesses
  - Discounts at eco-friendly stores
  - Donations to environmental causes

## 📊 Sample Data

The application comes pre-loaded with 12 sample rubbish reports across iconic Sydney locations:

- Sydney Opera House
- Bondi Beach
- The Rocks
- Darling Harbour
- Circular Quay
- Royal Botanic Gardens
- Hyde Park
- Chinatown
- Pyrmont
- Barangaroo Reserve
- Sydney Tower Eye
- And more...

## 🗂️ Project Structure

```
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── components/        # Reusable React components
│   │   │   ├── ui/           # shadcn/ui components
│   │   │   ├── Header.tsx    # Navigation header
│   │   │   ├── HeatMap.tsx   # Interactive map
│   │   │   └── ...
│   │   ├── context/          # React Context (Auth)
│   │   ├── pages/            # Page components
│   │   │   ├── Landing.tsx   # Landing page
│   │   │   ├── Auth.tsx      # Login/Register
│   │   │   ├── Dashboard.tsx # User dashboard
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── ReportRubbish.tsx
│   │   │   └── ...
│   │   ├── utils/            # Utility functions
│   │   │   ├── cloudStorage.ts
│   │   │   ├── geocoding.ts
│   │   │   ├── storage.ts
│   │   │   └── ...
│   │   ├── App.tsx           # Main app component
│   │   └── routes.tsx        # Route definitions
│   └── styles/               # CSS and Tailwind styles
├── supabase/
│   └── functions/
│       └── server/           # Edge function server
│           ├── index.tsx     # API endpoints
│           ├── auth.tsx      # Auth logic
│           └── kv_store.tsx  # KV Store utilities
├── utils/
│   └── supabase/
│       └── info.tsx          # Supabase config
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow
├── package.json
├── vite.config.ts
└── README.md
```

## 🎨 Design System

The application uses a modern, eco-friendly design palette:

- **Primary Green**: #16a34a - Sustainability theme
- **Whites & Soft Grays**: Clean, professional look
- **Accent Colors**: Strategic use for CTAs and alerts
- **Typography**: System font stack for optimal readability
- **Spacing**: Consistent 8px grid system

## 📱 Mobile Optimization

- Hamburger menu for navigation
- Touch-friendly interfaces (minimum 44x44px touch targets)
- Responsive layouts that stack properly on mobile
- Mobile-optimized forms and heat map
- Proper touch feedback throughout

## 🔒 Data & Privacy

### Cloud Storage Architecture
- All data stored in **Supabase KV Store** (cloud-based key-value storage)
- Accessible from any device with proper authentication
- Real-time synchronization across all devices
- Data persists indefinitely with automatic backups

### Security Features
- User authentication via Supabase Auth
- Secure API endpoints with bearer token authentication
- Password validation and sanitization
- Input validation and XSS protection
- Users can only access their own data
- Admins have elevated permissions to manage all reports

### Data Flow
```
Frontend → Server API → KV Store (Cloud) → Server API → Frontend
```

All reports, user data, and eco points are stored in the cloud and accessible via secure API endpoints.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or feedback, please contact the team:

- **Project Leader**: Nazmus Sakib - s8116515@live.vu.edu.au
- **GitHub Issues**: [Create an issue](https://github.com/1Sakib1/Smart-Rubbish-Detection/issues)

## 🙏 Acknowledgments

- NSW Environment Protection Authority
- City of Sydney Council
- Planet Ark Recycling Near You
- OpenStreetMap contributors
- Supabase for cloud infrastructure
- All open-source libraries used in this project

---

**Built with ❤️ for a cleaner, greener Sydney**
