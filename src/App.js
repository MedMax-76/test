import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";

import Menu from "./pages/Menu";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import Page8 from "./pages/Page8";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/Logo1Gold" element={<Page1 />} />
            <Route path="/Logo1Black" element={<Page2 />} />
            <Route path="/Logo1White" element={<Page3 />} />
            <Route path="/Logo2Gold" element={<Page4 />} />
            <Route path="/Logo2Black" element={<Page5 />} />
            <Route path="/Logo2White" element={<Page6 />} />
            <Route path="/HandBlack" element={<Page7 />} />
            <Route path="/HandWhite" element={<Page8 />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
