import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { Header } from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { loginUserFixed, loginAdminFixed, registerUserFixed } from '../utils/authFix';
import { Shield, User, Mail, Lock, UserPlus, LogIn } from 'lucide-react';
import { toast } from 'sonner';

export const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(
    (searchParams.get('tab') as 'login' | 'register') || 'login'
  );
  const [loginType, setLoginType] = useState<'user' | 'admin'>('user');
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 handleLogin called', { email, loginType });
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    console.log('✅ Form validation passed, setting isSubmitting=true');
    setIsSubmitting(true);
    
    try {
      if (loginType === 'admin') {
        console.log('👑 Calling loginAdminFixed...');
        const result = await loginAdminFixed(email, password);
        console.log('👑 loginAdminFixed returned:', result);
        
        const { user, error } = result;
        if (error) {
          console.error('❌ Admin login error:', error);
          toast.error(error.message);
          setIsSubmitting(false);
        } else if (user) {
          console.log('✅ Admin login successful, user:', user);
          login(user);
          toast.success('Welcome back, Admin!');
          navigate('/admin');
        } else {
          console.error('⚠️ No user and no error returned');
          toast.error('Login failed - no response');
          setIsSubmitting(false);
        }
      } else {
        console.log('👤 Calling loginUserFixed...');
        const result = await loginUserFixed(email, password);
        console.log('👤 loginUserFixed returned:', result);
        
        const { user, error } = result;
        if (error) {
          console.error('❌ User login error:', error);
          toast.error(error.message);
          setIsSubmitting(false);
        } else if (user) {
          console.log('✅ User login successful, user:', user);
          login(user);
          toast.success('Welcome back!');
          navigate('/dashboard');
        } else {
          console.error('⚠️ No user and no error returned');
          toast.error('Login failed - no response');
          setIsSubmitting(false);
        }
      }
    } catch (error) {
      console.error('💥 Login exception in Auth component:', error);
      toast.error('An unexpected error occurred');
      setIsSubmitting(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 handleRegister called', { email, name });
    
    if (!email || !password || !name || !confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    
    console.log('✅ Form validation passed, setting isSubmitting=true');
    setIsSubmitting(true);
    
    try {
      console.log('📝 Calling registerUserFixed...');
      const result = await registerUserFixed(email, password, name);
      console.log('📝 registerUserFixed returned:', result);
      
      const { user, error } = result;
      if (error) {
        console.error('❌ Registration error:', error);
        toast.error(error.message);
        setIsSubmitting(false);
      } else if (user) {
        console.log('✅ Registration successful, user:', user);
        login(user);
        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        console.error('⚠️ No user and no error returned');
        toast.error('Registration failed - no response');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('💥 Registration exception in Auth component:', error);
      toast.error('An unexpected error occurred');
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header variant="landing" />
      
      <div className="max-w-md mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-4 px-4 text-sm sm:text-base font-medium transition-colors min-h-[52px] ${
                activeTab === 'login'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <LogIn className="w-5 h-5" />
                <span>Sign In</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-4 px-4 text-sm sm:text-base font-medium transition-colors min-h-[52px] ${
                activeTab === 'register'
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                <UserPlus className="w-5 h-5" />
                <span>Register</span>
              </div>
            </button>
          </div>
          
          {/* Form Container with proper padding */}
          <div className="p-6 sm:p-8">
            {activeTab === 'login' ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>
                
                {/* Login Type Selector */}
                <div className="flex gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setLoginType('user')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      loginType === 'user'
                        ? 'border-green-600 bg-green-50 text-green-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">User</span>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoginType('admin')}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 transition-all ${
                      loginType === 'admin'
                        ? 'border-gray-700 bg-gray-50 text-gray-900'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Admin</span>
                    </div>
                  </button>
                </div>
                
                <form onSubmit={handleLogin} className="space-y-5">
                  {/* Admin Login Helper */}
                  {loginType === 'admin' && (
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
                      <p className="font-medium text-gray-900 mb-1">Admin Login Details:</p>
                      <p className="text-gray-600 mb-2">
                        Use any admin email: <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-200">admin1@sydney.gov.au</span>
                      </p>
                      <p className="text-gray-600">
                        Password: <span className="font-mono text-xs bg-white px-2 py-1 rounded border border-gray-200">Admin@123</span>
                      </p>
                    </div>
                  )}
                  
                  {/* User Login Helper */}
                  {loginType === 'user' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                      <p className="font-medium text-blue-900 mb-1">🌟 New User?</p>
                      <p className="text-blue-700">
                        Click the <strong>"Register"</strong> tab above to create your account first!
                      </p>
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="login-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={loginType === 'admin' ? 'admin1@sydney.gov.au' : 'your@email.com'}
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="login-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        minLength={6}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <a href="/forgot-password" className="text-sm text-green-600 hover:text-green-700 hover:underline">
                      Forgot Password?
                    </a>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                      loginType === 'user'
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-200'
                        : 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-300'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Signing In...
                      </span>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Account</h2>
                
                <form onSubmit={handleRegister} className="space-y-5">
                  <div>
                    <label htmlFor="register-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="register-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        minLength={2}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="register-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="register-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Minimum 6 characters"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        minLength={6}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="register-confirm" className="block text-sm font-medium text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="register-confirm"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Re-enter password"
                        className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        required
                        minLength={6}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </span>
                    ) : (
                      'Create Account'
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-center text-sm text-gray-600 mt-6">
          {activeTab === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                onClick={() => setActiveTab('register')}
                className="text-green-600 font-medium hover:text-green-700 hover:underline"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                onClick={() => setActiveTab('login')}
                className="text-green-600 font-medium hover:text-green-700 hover:underline"
              >
                Sign in
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};