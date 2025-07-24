import type { NextPage } from 'next';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

const LoginPage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white px-6 py-8">
      
      <div className="mx-auto mb-10 h-20 w-40 ">
        <img src="/hospital.png" alt="can't display" />
      </div>

      
      <div className="mb-8">
        <p className="text-gray-600">
          Hi there welcome to{' '}
          <Link href="#" className="font-semibold text-cyan-500">
            Shedula
          </Link>
        </p>
        <h1 className="text-4xl font-bold text-black">Login</h1>
      </div>

      
      <form className="flex flex-col space-y-5">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
            Enter email id <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email id"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-cyan-500 focus:ring-cyan-500 text-gray-500"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Enter password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-cyan-500 focus:ring-cyan-500 text-gray-500"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
              defaultChecked
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember Me
            </label>
          </div>
          <div className="text-sm">
            <Link href="#" className="font-medium text-red-500 hover:text-red-600">
              Forgot Password
            </Link>
          </div>
        </div>
<Link href="/doctors" className="mt-4">
        <button
          type="button"
          className="w-full rounded-lg bg-cyan-500 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-600" 
        >
          Login
        </button>
        </Link>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 flex-shrink text-sm text-gray-500">Or login With</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Social Login */}
      <button
        type="button"
        className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        <FcGoogle className="mr-2 h-5 w-5" />
        Continue with Google
      </button>

      {/* Sign Up Link */}
      <div className="mt-auto pt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-cyan-500 hover:text-cyan-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;