import { useLocation } from 'react-router-dom';

function Identify() {
    const location = useLocation();
    const responseData = location.state?.data || "No data received";  // Handle empty state

    return (
        <div className="w-full min-h-screen relative bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
            <div className="w-96 bg-clip-padding p-8 backdrop-filter backdrop-blur-3xl bg-white/10 rounded-md">
                <h2 className="text-lg text-white font-bold mb-4">API Response:</h2>
                <pre className="text-sm text-white bg-gray-800 p-4 rounded-md overflow-auto">
                    {JSON.stringify(responseData, null, 2)}
                </pre>
            </div>
        </div>
    );
}

export default Identify;