import React, { useState } from 'react';
import './Ejercicio1.css';

const Ejercicio1 = () => {
    const [visibleButton, setbotonvisible] = useState(0);
    const buttons = ["Izquierda", "Centro", "Derecha"];

    const handleClick = () => {
        setbotonvisible((prevBotonVisible) => (prevBotonVisible + 1) % buttons.length);
    };

    return (
        <div className="container">
            {visibleButton === 0 && (
                <button className="button left" onClick={handleClick}>
                    Izquierda
                </button>
            )}
            {visibleButton === 1 && (
                <button className="button center" onClick={handleClick}>
                    Centro
                </button>
            )}
            {visibleButton === 2 && (
                <button className="button right" onClick={handleClick}>
                    Derecha
                </button>
            )}
        </div>
    );
};

export default Ejercicio1;
