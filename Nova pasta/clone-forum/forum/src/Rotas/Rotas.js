import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignUp from "../pages/Signup/Signup"
import Login from "../pages/Login/Login"


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
              
                <Route index elemnet={<Home/>}/>
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<SignUp/>}/>
                <Route />
            
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas