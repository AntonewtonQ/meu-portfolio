import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/header/Header";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Loja from "./components/Loja/Loja";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="max-w-7xl mx-auto pt-10 px-6">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
