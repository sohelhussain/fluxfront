import { Routes, useNavigate } from 'react-router-dom'

function Landing() {
    const nevigate = useNavigate();
  return (
    <div className="w-full h-screen relative bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
<Routes />
    <div className="w-96 bg-clip-padding p-8 backdrop-filter backdrop-blur-3xl bg-white/10 rounded-md">
      <input type="email" placeholder="email" className="w-full h-12 mb-5 px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <input type="number" placeholder="number" className="w-full h-12 px-4 mb-5 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <button onClick={() => nevigate("/identify")} className="w-full h-12 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Identify Response</button>
    </div>
</div>
  )
}

export default Landing