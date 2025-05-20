import { Link } from "react-router-dom";

function Error400() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1601597111028-944be9e0084c?auto=format&fit=crop&w=1920&q=80')`,
      }}
    >
      <div className="bg-white/80 p-10 rounded-xl shadow-2xl text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">🚫 400 Unauthorized</h1>
        <p className="text-gray-700 text-base mb-6">
        Oops! Your request couldn’t be understood by the server. Please check the URL or go back to the dashboard.
        </p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default Error400;
