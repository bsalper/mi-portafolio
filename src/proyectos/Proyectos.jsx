import styles from '../proyectos/Proyectos.module.css'
import img3 from '../assets/Figure_3.png'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import python from '../assets/python.svg'
import js from '../assets/js.svg'
import css from '../assets/css.svg'
import csharp from '../assets/csharp.svg'
import img2 from '../assets/Pipeline.jpeg' // Asegúrate de tener esta imagen en assets
import img from '../assets/ManejoPresupuesto.png'

const Proyectos = () => {
    // 1. Datos de las tarjetas (Centralizados)
    const tarjetas = [
        {
          image: img3,
          name: 'Análisis y visualización con Python',
          descrip: 'Este proyecto realiza un análisis y visualización de datos de ventas de una tiendita utilizando datos ficticios.',
          tecno: [python],
          url: 'https://github.com/bsalper/AnalisisPython.git',
        },
        {
          image: img,
          name: 'Manejo de Presupuesto',
          descrip: 'Esta aplicación permite a los usuarios registrar sus ingresos y gastos, y generar reportes financieros para tener un mejor control de sus finanzas personales.',
          tecno: [csharp, html, js, css],
          url: 'https://github.com/bsalper/ManejoPresupuesto.git',
        },
        {
          image: img2,
          name: 'Pipeline de Datos',
          descrip: 'Este proyecto implementa un pipeline de datos (ETL) que extrae información comercial desde Odoo ERP, la procesa mediante Python y la carga automáticamente en Google BigQuery para su visualización en BI.',
          tecno: [python],
          url: 'https://github.com/bsalper/odoo_analytics.git',
        }
    ];

    // 2. Función auxiliar para nombres de tooltips limpios
    const getTechName = (path) => {
        if (!path) return "Tecnología";
        
        // Convertimos a minúsculas para comparar fácil
        const lowerPath = path.toLowerCase();

        if (lowerPath.includes('python')) return 'Python';
        if (lowerPath.includes('csharp')) return 'C#';
        if (lowerPath.includes('js')) return 'JavaScript';
        if (lowerPath.includes('html')) return 'HTML5';
        if (lowerPath.includes('css')) return 'CSS3';
        
        // Si no encuentra ninguna de las anteriores, intenta limpiar lo que haya
        return "Tecnología";
    };

    // 3. Renderizado de la sección
    return (
        <section id='proyectos' className={styles.Proyectos}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>
                {
                  tarjetas.map((card, index) => (
                    <div key={index} className={styles.card}>
                      {/* Imagen de portada */}
                      <div className={styles.img}>
                        <img width='100%' height='250px' src={card.image} alt={card.name} />
                      </div>

                      {/* Bloque de Texto (Título y Descrip) */}
                      <div className={styles.cardText}>
                          <h3>{card.name}</h3>
                          <p>{card.descrip}</p>
                      </div>

                      {/* Bloque de Pie (Tecnologías y GitHub) */}
                      <div className={styles.cardFooter}>
                          <div className={styles.tecno}>
                            {card.tecno.map((icono, i) => (
                              // AQUÍ ES DONDE VA EL TOOLTIP, DENTRO DEL MAP
                              <div key={i} className={styles.tooltipContainer}>
                                <img width='30px' src={icono} alt="tecnología" />
                                <span className={styles.tooltipText}>{getTechName(icono)}</span>
                              </div>
                            ))}
                          </div>

                          <div className={styles.github}>
                            <div className={styles.tooltipContainer}>
                              <a href={card.url} target="_blank" rel="noopener noreferrer">
                                <img width='30px' src={github} alt="GitHub" />
                              </a>
                              <span className={styles.tooltipText}>Ir al repositorio</span>
                            </div>
                          </div>
                      </div>
                    </div>
                  ))
                }
            </div>
        </section>
    );
};

export default Proyectos;