import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Landing() {
    const navigate = useNavigate();  
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const handleIdentify = async () => {
        if (!email && !phone) {
            alert("Please enter at least an email or phone number!");
            return;
        }
        try {
           const response = await axios.post("http://localhost:3000/identify", {
                email: email,
                phone: phone
            });

            navigate("/identify", { state: { data: response.data } });  
        } catch (error) {
            console.error("Error identifying:", error);
        }
    };

    return (
        <div className="w-full h-screen relative bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
            <div className="w-96 bg-clip-padding p-8 backdrop-filter backdrop-blur-3xl bg-white/10 rounded-md">
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="email" 
                    className="w-full h-12 mb-5 px-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
                <input 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    type="number" 
                    placeholder="number" 
                    className="w-full h-12 px-4 mb-5 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                />
                <button 
                    onClick={handleIdentify} 
                    className="w-full h-12 px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Identify Response
                </button>
            </div>
        </div>
    );
}

export default Landing;