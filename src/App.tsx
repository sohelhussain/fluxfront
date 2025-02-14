import { Route, Routes } from "react-router-dom"
import Landing from "./page/Landing";
import Identify from "./page/Identify";

function App() {


  return (
    <div className="w-full h-screen relative bg-gradient-to-r from-purple-500 to-pink-500 flex justify-center items-center">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/identify' element={<Identify />} />
      </Routes>

    </div>
  )
}

export default App
