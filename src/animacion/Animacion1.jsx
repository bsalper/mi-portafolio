import styles from './Animacion1.module.css';

const Animacion1 = () => {
  return (
    <div className={styles.spinnerBox}>
      <div className={styles.solarSystem}>
        <div className={`${styles.earthOrbit} ${styles.orbit}`}>
          <div className={`${styles.planet} ${styles.earth}`}></div>
          <div className={`${styles.venusOrbit} ${styles.orbit}`}>
            <div className={`${styles.planet} ${styles.venus}`}></div>
            <div className={`${styles.mercuryOrbit} ${styles.orbit}`}>
              <div className={`${styles.planet} ${styles.mercury}`}></div>
              <div className={styles.sun}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animacion1;
