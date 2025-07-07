import styles from '../about/About.module.css'
import perfil from '../assets/perfil.png'

const About = () => {
    return (
        <section id='sobremi' className={styles.SobreMi}>
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <p>Con enfoque en análisis de datos, apasionado por transformar información en decisiones estratégicas. 
                    Experiencia en desarrollo web y automatización de procesos. Curioso, autodidacta y siempre en busca de 
                    soluciones innovadoras.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Experiencia</h2>

                <div>
                    <h3>Desarrollador C#</h3>
                    <h4>Escuela de Investigaciones</h4>
                    <h5>Ago 2024 - Jun 2025</h5>
                </div>

                <div>
                    <h3>Analista Programador Junior</h3>
                    <h4>Activa Research</h4>
                    <h5>Abr 2023 - Sep 2023</h5>
                </div>

                <div>
                <h3>Soporte Técnico</h3>
                    <h4>Vector Consultoría TI</h4>
                    <h5>Oct 2022 - Ene 2023</h5>
                </div>

            </div>
        </section>
    )
}

export default About;