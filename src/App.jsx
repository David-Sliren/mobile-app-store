import { useState } from "react";
import { Route, Routes } from "react-router";

import Home from "./page/Home";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Applications from "./page/Applications";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-zinc-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-400 text-zinc-200 grid grid-rows-[auto_1fr_auto]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="applications" element={<Applications />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
