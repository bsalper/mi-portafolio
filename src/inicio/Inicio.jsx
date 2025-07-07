import styles from '../inicio/Inicio.module.css'
import Animacion from '../animacion/Animacion.jsx'
import AnimacionFondo from '../inicio/AnimacionFondo.jsx'

const Inicio = () => {
    return(
        <section id='inicio' className={styles.Inicio}>
            <AnimacionFondo/>
            <article className={styles.full}>
                <h1>Hola, soy Ingeniero Informático</h1>
                <p>Me mueven la curiosidad, el universo y la tecnología.  
                    Transformo ideas en soluciones digitales con eficiencia, creatividad y pasión por seguir aprendiendo cada día.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>
            <Animacion/>      
        </section>
    )
}

export default Inicio;