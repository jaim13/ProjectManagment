import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Button from "../components/ButtonDashboard.jsx";
import Card from "../components/CardLanding.jsx";

const Landing = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call once to set initial dimensions

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getSplineContainerStyle = () => {
    const aspectRatio = dimensions.width / dimensions.height;
    let width = '100%';
    let height = '100vh';

    if (aspectRatio > 1) { // Landscape
      width = `${Math.min(dimensions.height * 0.9, dimensions.width * 0.8)}px`;
      height = '90vh';
    } else { // Portrait
      width = '90vw';
      height = `${Math.min(dimensions.width * 1.2, dimensions.height * 0.7)}px`;
    }

    return { width, height };
  };
  return (
    <div className="overflow-x-hidden">
      <section
        className="min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center p-4"
        style={{
          backgroundImage: 'url("./imgs/background.svg")',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-4">Project Manager</h1>
          <h2 className="text-xl md:text-2xl mb-4">Making life easier!</h2>
          <Button />
        </div>
      </section>

      <section className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div style={getSplineContainerStyle()}>
          <Spline 
            scene="https://prod.spline.design/B8UtJMaQs4ftqNJe/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>

      <section
        className="min-h-screen flex justify-center items-center p-4"
        style={{
          backgroundImage: 'url("./imgs/background2.svg")',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        }}
      >
         {/* Cards */}
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card 
            title="Website SEO" 
            description="Optimize your site for search engines." 
            icon={<svg /* SVG icon aquí */ />}
            number="01"
          />
          <Card 
            title="Analytics" 
            description="Get insights from your data." 
            icon={<svg /* Otro SVG icon aquí */ />}
            number="02"
          />
          <Card 
            title="Marketing" 
            description="Grow your business with marketing strategies." 
            icon={<svg /* Otro SVG icon aquí */ />}
            number="03"
          />
        </div>
      </div>
      </section>
    </div>
  );
};

export default Landing;