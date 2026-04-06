import React from 'react';
import styles from '../about/About.module.css'; // Ajusta la importación de estilos según tu estructura de carpetas

const IlustracionAnimada = () => {
    return (
        <div className={styles.ilustracion}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="200"
                height="200"
                fill="#FFD700"
            >
                <circle cx="256" cy="256" r="200" fill="#FFD700" />
                <circle cx="256" cy="256" r="160" fill="#ffefad" />
                <circle cx="256" cy="256" r="120" fill="#ffcd68" />
                <circle cx="256" cy="256" r="80" fill="#ffaa22" />
                <circle cx="256" cy="256" r="40" fill="#ff8800" />
                <circle cx="256" cy="256" r="20" fill="#ff5500" />
            </svg>
        </div>
    );
};

export default IlustracionAnimada;

