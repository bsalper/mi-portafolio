import styles from '../about/About.module.css'
import perfil from '../assets/perfil.png'

const About = () => {
    return (
        <section id='sobremi' className={styles.SobreMi}>
            <article className={styles.intro}>
                <div className={styles.img}>
                    <img src={perfil} alt="Bastián Salazar" />
                </div>
                
                <div className={styles.textoSobreMi}>
                    <p>
                        A lo largo de mi trayectoria, he pasado de desarrollar portales institucionales a orquestar ecosistemas de datos complejos. Mi enfoque se centra en <strong>identificar ineficiencias operativas y transformarlas en soluciones digitales rentables.</strong>
                    </p>
                    
                    <p>En el último año he logrado:</p>
                    <ul className={styles.logrosList}>
                        <li><strong>Optimización de costos:</strong> Migré sistemas limitados hacia arquitecturas propias en React, eliminando gastos de licencias externas.</li>
                        <li><strong>Automatización al 100%:</strong> Implementé pipelines de datos comerciales que eliminan la carga manual y garantizan reportes en tiempo real.</li>
                        <li><strong>Digitalización en terreno:</strong> Desarrollé herramientas que redujeron drásticamente el tiempo de respuesta en ventas y operaciones.</li>
                    </ul>
                </div>

                <div className={styles.adornos}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </article>

            <div className={styles.edu}>
                <h2>Experiencia</h2>

                <div className={styles.experienciaItem}>
                    <h3>Analista de Soporte Corporativo</h3>
                    <h4>Moving Food</h4>
                    <h5>Oct 2025 - Actualidad</h5>
                </div>

                <div className={styles.experienciaItem}>
                    <h3>Desarrollador C#</h3>
                    <h4>Escuela de Investigaciones</h4>
                    <h5>Jul 2024 - Jun 2025</h5>
                </div>

                <div className={styles.experienciaItem}>
                    <h3>Analista Programador Junior</h3>
                    <h4>Activa Research</h4>
                    <h5>Abr 2023 - Nov 2023</h5>
                </div>
            </div>
        </section>
    )
}

export default About;