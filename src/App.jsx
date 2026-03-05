import { useState } from "react";

// Librerias
import { Route, Routes } from "react-router";

// Componentes
import Home from "./page/Home";
import Applications from "./page/Applications";
import Layout from "./UI/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="applications" element={<Applications />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
