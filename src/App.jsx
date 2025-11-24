import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/home"
import Notfound from "./Pages/Notfound"


function App() {


  return (
    <>
      <div>
         <BrowserRouter>
         <Routes>
          <Route index element ={<Home></Home>}/>
          <Route path="*" element ={<Notfound></Notfound>}/>
         </Routes>
         </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
