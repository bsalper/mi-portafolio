import styles from '../inicio/Inicio.module.css'
import Animacion1 from '../animacion/Animacion1.jsx'

const Contacto = () => {
    return(
        <section id='contacto' className={styles.Inicio}>
            <Animacion1/>

            <div className={styles.botones}>
                <h2>Bastian Ignacio Salazar Pérez</h2>
                <div>
                    <a href='mailto:ignaciosalazar1314@gmail.com'>GMAIL</a>
                    <a href='/Bastian.pdf' target="_blank" rel="noopener noreferrer">CV</a>
                </div>
            </div>
            
        </section>
    )
}

export default Contacto;