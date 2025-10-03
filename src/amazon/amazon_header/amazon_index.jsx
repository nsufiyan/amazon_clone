
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Amazon_Home } from "./amazon_home";
import { Amazon_SingIn } from "./amazon_sing_up";


export function  Amazon_Index(){


    return(
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Amazon_Home/>} />
          <Route path="home" element={<Amazon_Home/>} />
          <Route path="singin" element={<Amazon_SingIn/>}/>
      </Routes>
      
      </BrowserRouter>    
    </div>
    )
}