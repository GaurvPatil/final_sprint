export default function adminRegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          College Admin Registration
        </h2>

        <div className="mb-4">
          <label
            htmlFor="collegeName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            College Name
          </label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Additional Fields */}
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="state"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Register
        </button>
      </form>
    </div>
  );
}
