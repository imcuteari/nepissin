import React, { createContext, useContext, useState, useEffect } from 'react';

interface MouseContextType {
  mousePosition: { x: number; y: number };
}

const MouseContext = createContext<MouseContextType>({
  mousePosition: { x: 0, y: 0 },
});

export const useMousePosition = () => useContext(MouseContext);

export const MouseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mousePosition }}>
      {children}
    </MouseContext.Provider>
  );
};

export default MouseContext; 