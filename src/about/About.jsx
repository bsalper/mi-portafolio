import styles from '../about/About.module.css'
import perfil from '../assets/perfil.jpeg'

const About = () => {
    return (
        <section id='sobremi' className={styles.SobreMi}>
           <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="" />
                </div>
                <p>Con experiencia en análisis de datos, soporte técnico y desarrollo de sitios web.
                    Amplios conocimientos en lenguajes de programación. Experiencia con SQL para consultas y
                    manipulación de bases de datos relacionales. Habilidades en el desarrollo de sitios web utilizando Vite,
                    React y CSS.</p>
                <div className={styles.adornos}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </article>

            <div className={styles.edu}>

                <h2>Experiencia</h2>

                <div>
                    <h3>Desarrollador Programador</h3>
                    <h4>Escuela de Investigaciones</h4>
                    <h5>Ago 2024 - Al Presente</h5>
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