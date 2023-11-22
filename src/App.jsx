import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Receiver } from "./components";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="547298638903-foqcnfs3j87e3gjfi03p2m90tusq52of.apps.googleusercontent.com">
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <div className="relative z-0">
            <Receiver />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </GoogleOAuthProvider>
  )
}

export default App
