import styles from '../inicio/Inicio.module.css'
import Animacion from '../animacion/Animacion.jsx'
import AnimacionFondo from '../inicio/AnimacionFondo.jsx'

const Inicio = () => {
    return(
        <section id='inicio' className={styles.Inicio}>
            <AnimacionFondo/>
            <article className={styles.full}>
                <h1>Hola! Soy Bastian, Ingeniero Informático</h1>
                <p>Me apasiona la tecnología, la creatividad y descubrir nuevas formas de innovar. 
                    Transformo ideas en soluciones digitales con eficiencia, curiosidad y un enfoque humano.</p>
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