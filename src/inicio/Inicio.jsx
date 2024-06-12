import styles from '../inicio/Inicio.module.css'
import Animacion from '../animacion/Animacion.jsx'
import AnimacionFondo from '../inicio/AnimacionFondo.jsx'

const Inicio = () => {
    return(
        <section id='inicio' className={styles.Inicio}>
            <AnimacionFondo/>
            <article className={styles.full}>
                <h1>Ingeniero Informático</h1>
                <p>Apasionado por el universo y las tecnologias. Me cautiva cómo la tecnología puede transformar nuestras vidas
                    y resolver problemas de manera innovadora, es por ello que siempre estoy aprendiendo.
                    Además de buscar nuevas técnicas para mejorar mi rapidez y eficiencia.</p>
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