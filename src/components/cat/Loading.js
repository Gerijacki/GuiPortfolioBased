import React, { useState, useEffect } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import './LoadingAnimation.css'; // Archivo de estilos CSS para la animación

const LoadingAnimation = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulación de carga finalizada después de 3 segundos (reemplaza esto con tu lógica real de carga)
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-wrapper ${loading ? 'visible' : ''}`}>
      <div className="loading-overlay" />
      <div className="loading-content">
        <ThreeCircles
          visible={true}
          height={100}
          width={100}
          color="#f85c9e"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default LoadingAnimation;
