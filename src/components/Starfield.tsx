// src/components/Starfield.tsx
import React from 'react';

const Starfield: React.FC = () => {
    // Estilos base para el campo de estrellas
    const starStyles: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5, // Detrás del contenido (z-10)
        pointerEvents: 'none',
        overflow: 'hidden',
        // Aseguramos el fondo principal (para que las estrellas se vean sobre el negro)
        backgroundColor: '#05040a', 
    };

    // Función para generar los puntos de la sombra (simula estrellas)
    const generateStars = (count: number) => {
        let stars = '';
        for (let i = 0; i < count; i++) {
            // Posicionamiento aleatorio en la pantalla
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            // Pequeña variación de profundidad (simulada con el tercer valor)
            const z = Math.random() * 100; 
            stars += `${x}vw ${y}vh ${z}px #fff,`;
        }
        return stars.slice(0, -1);
    };

    // Generamos las estrellas para tres capas (tamaños/densidades diferentes)
    const stars1 = generateStars(700); // Muchas, pequeñas, rápidas
    const stars2 = generateStars(200); // Medias
    const stars3 = generateStars(50);  // Pocas, grandes, lentas

    // Definición de Keyframes CSS para el movimiento sutil hacia arriba
    const keyframes = `
        @keyframes move-stars {
            from { transform: translateY(0px); }
            to { transform: translateY(-50px); } /* Mueve ligeramente hacia arriba */
        }
    `;

    // Estilos comunes para las capas de estrellas
    const commonStarLayer: React.CSSProperties = {
        position: 'absolute',
        width: '1px',
        height: '1px',
        background: 'transparent',
        animationName: 'move-stars',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    };

    return (
        <div style={starStyles}>
            {/* Insertamos los Keyframes */}
            <style>{keyframes}</style> 
            
            {/* Capa 1: Rápida y densa */}
            <div style={{
                ...commonStarLayer,
                boxShadow: stars1,
                animationDuration: '100s',
                transform: 'scale(0.8)',
                opacity: 0.8,
            }} />
            
            {/* Capa 2: Media */}
            <div style={{
                ...commonStarLayer,
                boxShadow: stars2,
                animationDuration: '150s',
                transform: 'scale(1.2)',
                opacity: 0.7,
            }} />
            
            {/* Capa 3: Lenta y grande */}
            <div style={{
                ...commonStarLayer,
                boxShadow: stars3,
                animationDuration: '200s',
                transform: 'scale(1.5)',
                opacity: 0.6,
            }} />
        </div>
    );
};

export default Starfield;