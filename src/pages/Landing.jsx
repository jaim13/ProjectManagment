import React, { useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Button from "../components/ButtonDashboard.jsx";
import Card from "../components/CardLanding.jsx";
import Navbar from '../components/Header';

const Landing = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getSplineContainerStyle = () => {
    const aspectRatio = dimensions.width / dimensions.height;
    let width = "100%";
    let height = "100vh";

    if (aspectRatio > 1) {
      // Landscape
      width = `${Math.min(dimensions.height * 0.9, dimensions.width * 0.8)}px`;
      height = "90vh";
    } else {
      // Portrait
      width = "90vw";
      height = `${Math.min(dimensions.width * 1.2, dimensions.height * 0.7)}px`;
    }

    return { width, height };
  };
  return (
    <div className="overflow-x-hidden">
       <Navbar/>
      <section
        className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage: 'url("./imgs/background.svg")',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">GymWorld</h1>

          {/* Centrado del H2 con animación de typewriter */}
          <h2 className="relative text-2xl md:text-3xl font-semibold mx-auto text-center w-[max-content] overflow-hidden whitespace-nowrap before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-white before:animate-typewriter after:absolute after:left-full after:top-0 after:w-[0.125em] after:h-full after:animate-caret after:bg-black">
            Improving your life!
          </h2>

          <Button />
        </div>
      </section>

      <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div style={getSplineContainerStyle()}>
          <Spline
            scene="https://prod.spline.design/B8UtJMaQs4ftqNJe/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>

      <section
        className="min-h-screen flex justify-center items-center p-4"
        style={{
          backgroundImage: 'url("./imgs/background2.svg")',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        {/* Cards */}
        <div className="flex justify-center items-center min-h-screen p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card
              title="Improving"
              description="Improve in your day to day basis."
              icon={<svg />}
              number="01"
            />
            <Card
              title="Choosing"
              description="Choose the best option for you."
              icon={<svg />}
              number="02"
            />
            <Card
              title="Chasing"
              description="Chase your dreams with us."
              icon={<svg />}
              number="03"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
