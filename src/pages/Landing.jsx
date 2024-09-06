import React from "react";
import Button from "../components/ButtonDashboard.jsx";
import Phone from "../components/Phone.jsx";

const Landing = () => {
  return (
    <>
      <div
        className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("./imgs/background.svg")',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Contenido principal */}
        <div className="text-center">
          <h1 className="text-7xl font-bold mb-4">Project Manager</h1>
          <h2 className="text-2xl mb-4">Making life easier!</h2>
          <Button />
        </div>
      </div>
      {/* Nueva sección para Earth */}
      <section className="w-full mt-16 sm:mt-32 sm:block hidden">
        <Phone />
      </section>
    </>
  );
};

export default Landing;
