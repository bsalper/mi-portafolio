import styles from '../proyectos/Proyectos.module.css'
import img2 from '../assets/CRUD.png'
import img3 from '../assets/Figure_3.png'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import python from '../assets/python.svg'
import js from '../assets/js.svg'
import php from '../assets/php.svg'
import css from '../assets/css.svg'
import csharp from '../assets/csharp.svg'
import img from '../assets/ManejoPresupuesto.png'

const Proyectos = () => {
    const tarjetas = [
        {
          image:[img2],
          name:'CRUD con PHP',
          descrip:'Este proyecto es una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada en PHP que permite el registro de usuarios.',
          tecno:[php,html,js],
          url:'https://github.com/bsalper/crudphp.git',
        },
  
        {
          image:[img3],
          name:'Análisis y visualización con Python',
          descrip:'Este proyecto realiza un análisis y visualización de datos de ventas de una tiendita utilizando datos ficticios.',
          tecno:[python],
          url:'https://github.com/bsalper/AnalisisPython.git',
        },

        {
          image:[img],
          name:'Manejo de Presupuesto',
          descrip:'Esta aplicación permite a los usuarios registrar sus ingresos y gastos, y generar reportes financieros para tener un mejor control de sus finanzas personales.',
          tecno:[csharp,html,js,css],
          url:'https://github.com/bsalper/ManejoPresupuesto.git',
        }
      ]

      return (
        <section id='proyectos' className={styles.Proyectos}>
            <h2>Proyectos</h2>
            <div className={styles.cards}>

                {
                  tarjetas.map((card,index) => {
                    return(
                      <div key={index} className={styles.card}>
                        <div className={styles.img}>
                          <img width='100%' height='250px' src={card.image} alt="" />
                        </div>

                        <h3>{card.name}</h3>

                        <p>{card.descrip}</p>

                        <div className={styles.tecno}>
                          <img width='30px' src={card.tecno[0]} alt="" />
                          <img width='30px' src={card.tecno[1]} alt="" />
                          <img width='30px' src={card.tecno[2]} alt="" />
                          <img width='30px' src={card.tecno[3]} alt="" />
                        </div>

                        <div className={styles.github}>
                          <a href={card.url}>
                            <img width='30px' src={github} alt="" />
                          </a>
                        </div>
                      </div>
                    )
                  })
                }

            </div>
        </section>
    )
}

export default Proyectos;