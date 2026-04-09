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
                        <strong>Lo que aporto:</strong>
                    </p>
                    
                    <p>En el último año he logrado:</p>
                    <ul className={styles.logrosList}>
                        <li><strong>Ingeniería de Datos:</strong> Diseño y orquestación de pipelines ETL automatizados desde ERPs (Odoo) hacia BigQuery, permitiendo análisis críticos para Control de Gestión.</li>
                        <li><strong>Desarrollo Full-Stack:</strong>  Creación de aplicaciones escalables con React y Supabase que resuelven problemas reales del día a día operativo.</li>
                        <li><strong>Automatización: </strong> Implementación de flujos de trabajo eficientes mediante GitHub Actions para garantizar la integridad y disponibilidad de la información.</li>
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