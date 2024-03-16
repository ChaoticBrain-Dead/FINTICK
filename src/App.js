import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import Home  from "./components/Home";
import { Banner } from "./components/Banner";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { AuthProvider } from "./context/authProvider";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
          <NavBar />
          
          <Routes>
            <Route path='/' element={
              <>
                <Banner />
                <Home />
                <Projects />

              </>
            } />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;