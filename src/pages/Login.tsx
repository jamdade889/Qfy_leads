const Login: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Please login to continue to your dashboard
        </p>

        {/* Login Form */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="mt-2">
            <a href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;