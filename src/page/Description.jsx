// constantes
import { dataOfApps } from "../constants/dataOfApps";

// Librerias
import { Link, useParams } from "react-router";
import { ArrowLeft } from "lucide-react";

// componentes
import InfoTech from "../components/Description/InfoTech";
import Mockup from "../components/Description/Mockup";
import ActionButtons from "../components/Description/ActionButtons";
import PresentationApp from "../components/Description/PresentationApp";
import IconButton from "../components/Buttons/IconButton";

const Description = () => {
  const { app } = useParams();

  return (
    <main className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      <div className="absolute top-0 right-0 w-full h-80 blur-[80px]  bg-linear-to-b from-emerald-500/40 to-transparent rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 xl:px-0 py-20 xl:py-15 flex flex-col xl:flex-row items-center gap-8 ">
        <Link
          to="/applications"
          className="absolute top-10 xl:top-5 left-2 sm:left-10  px-4 py-2 flex justify-center items-center"
        >
          <IconButton icon={ArrowLeft} className="size-full cursor-pointer" />
        </Link>

        <Mockup />

        <section className="flex-1 space-y-8 xl:-translate-x-20">
          <PresentationApp {...(dataOfApps.get(app) ?? {})} />

          <ActionButtons {...(dataOfApps.get(app) ?? {})} />

          <InfoTech vertion="1.0.1" size="56 MB" />
        </section>
      </div>
    </main>
  );
};

export default Description;
