import { useState } from "react";

// Librerias
import { Route, Routes } from "react-router";

// Componentes
import Home from "./page/Home";
import Applications from "./page/Applications";
import Layout from "./UI/Layout";
import Description from "./page/Description";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="applications" element={<Applications />} />
        </Route>
        <Route path="applications/:app" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
