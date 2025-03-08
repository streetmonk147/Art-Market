import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Sign Up | Artistry',
  description: 'Create an account on Artistry to buy or sell artwork from around the world.',
};

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-netflix-black text-white flex flex-col">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-16">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2145&auto=format&fit=crop"
            alt="Art background"
            fill
            priority
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-netflix-black/90 to-netflix-black/70" />
        </div>

        {/* Signup Container */}
        <div className="relative z-10 w-full max-w-md px-6 py-12 bg-netflix-dark-gray/90 backdrop-blur-sm rounded-lg shadow-2xl mx-4 animate-fade-in">
          {/* Logo or Brand */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-block">
              <h1 className="text-4xl font-bold text-netflix-red-500">
                Artistry
              </h1>
            </Link>
            <p className="mt-2 text-white/70">Create your account</p>
          </div>

          {/* Account Type Selection */}
          <div className="mb-8">
            <p className="text-sm font-medium mb-3 text-center">I want to:</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-md bg-black/20 hover:bg-black/30 transition-colors group focus:outline-none focus:ring-2 focus:ring-netflix-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-white/70 group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span className="text-sm font-medium">Buy Art</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-md bg-black/20 hover:bg-black/30 transition-colors group focus:outline-none focus:ring-2 focus:ring-netflix-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2 text-white/70 group-hover:text-white transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                </svg>
                <span className="text-sm font-medium">Sell Art</span>
              </button>
            </div>
          </div>

          {/* Signup Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="first-name" className="block text-sm font-medium">
                  First Name
                </label>
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                placeholder="123-456-7890"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium">
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                placeholder="123 Main St, City, Country"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                placeholder="••••••••"
              />
              <p className="text-xs text-white/50">
                Must be at least 8 characters with 1 uppercase, 1 number, and 1 special character.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm font-medium">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                className="w-full px-4 py-3 bg-black/40 border border-white/10 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red-500"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 bg-black/40 border border-white/10 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-white/70">
                I agree to the{' '}
                <Link href="/terms" className="text-netflix-red-500 hover:text-netflix-red-600 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-netflix-red-500 hover:text-netflix-red-600 transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 bg-netflix-red-500 hover:bg-netflix-red-600 text-white rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-netflix-red-500 focus:ring-offset-2 focus:ring-offset-netflix-black"
              >
                Create Account
              </button>
            </div>
          </form>

          {/* Social Signup Options */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-netflix-dark-gray text-white/70">
                  Or sign up with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-md shadow-sm text-sm font-medium text-white bg-black/20 hover:bg-black/30 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              <button
                className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-md shadow-sm text-sm font-medium text-white bg-black/20 hover:bg-black/30 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Email
              </button>
              <button
                className="w-full flex items-center justify-center px-4 py-2 border border-white/10 rounded-md shadow-sm text-sm font-medium text-white bg-black/20 hover:bg-black/30 transition-colors"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
                Apple ID
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/70">
              Already have an account?{' '}
              <Link
                href="/login"
                className="font-medium text-netflix-red-500 hover:text-netflix-red-600 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 