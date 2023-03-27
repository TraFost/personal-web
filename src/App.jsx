import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Footer, Navbar } from "./layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" index element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
