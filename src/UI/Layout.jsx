// Librerias
import { Outlet } from "react-router";

// Componentes
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-emerald-500/30 selection:text-emerald-400 text-zinc-200 grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
