
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Amazon_Home } from "./amazon_home";
import { Amazon_SingIn } from "./amazon_sing_up";
import { AmazonCreateAccount } from "../../container/Login/login";
import { PageNotFound } from "./amazon_pageNotFound";
import { ServerErrorPage } from "./serverError";


export function Amazon_Index() {



  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/singin" element={<Amazon_SingIn />} />
          <Route path="/" element={<Amazon_Home />} />
          <Route path="/login" element={<AmazonCreateAccount />} />
          <Route path="home" element={<Amazon_Home />} />
          <Route path="/server-error" element={<ServerErrorPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </BrowserRouter>
    </div >
  )
}