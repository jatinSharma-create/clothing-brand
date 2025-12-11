// app/page.tsx

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-gray-900 to-gray-800">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-white">
          Clothing Store
        </h1>
        <p className="text-xl text-gray-300">
          E-Commerce Admin Dashboard
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a 
            href="/admin" 
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Admin Dashboard
          </a>
          <a 
            href="/store" 
            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition"
          >
            View Store
          </a>
        </div>
      </div>
    </div>
  );
}
