import styles from '../inicio/Inicio.module.css'
import Animacion from '../animacion/Animacion.jsx'
import AnimacionFondo from '../inicio/AnimacionFondo.jsx'

const Inicio = () => {
    return(
        <section id='inicio' className={styles.Inicio}>
            <AnimacionFondo/>
            <article className={styles.full}>
                <h1>Hola! Soy Bastian, Ingeniero Informático</h1>
                <p>Apasionado por transformar datos brutos en decisiones estratégicas y digitalizar procesos operativos para
                    maximizar la eficiencia. Mi enfoque combina el desarrollo de software robusto con la ingeniería de datos a escala.</p>
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