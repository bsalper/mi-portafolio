import React, { useEffect } from 'react';
import styles from '../inicio/Inicio.module.css';

const EstrellasAnimadas = () => {
    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.querySelector(`.${styles.starsContainer}`);
            const starsNumber = 100; // Número de estrellas
            for (let i = 0; i < starsNumber; i++) {
                const star = document.createElement('div');
                star.classList.add(styles.star);
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
                starsContainer.appendChild(star);
            }
        };

        createStars();

        // Eliminar las estrellas al desmontar el componente para evitar fugas de memoria
        return () => {
            const starsContainer = document.querySelector(`.${styles.starsContainer}`);
            starsContainer.innerHTML = '';
        };
    }, []);

    return <div className={styles.starsContainer}></div>;
};

export default EstrellasAnimadas;
