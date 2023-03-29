import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./pages";
import { Footer, Navbar } from "./layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" index element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
