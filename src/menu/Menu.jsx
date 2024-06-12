import styles from '../menu/Menu.module.css'
import Redes from './Redes.jsx'
import home from '../assets/Inicio.svg';
import proyec from '../assets/proyectos.svg';
import sobre from '../assets/sobremi.svg';
import logo from '../assets/logo.svg';


const Menu = () => {
    return(
        <header className={styles.header}>
            <a href='#inicio'>
                <img width='80px' src={logo} alt=""/>
            </a>

            <nav className={styles.nav}>
                <a href='#sobremi'><span>S</span>obre Mí</a>
                <a href='#proyectos'><span>P</span>royectos</a>
                <a href='#contacto'><span>C</span>ontacto</a>
            </nav>

            <nav className={styles.navMobile}>
                <a href='#sobremi'>
                    <img width='40px' src={home} alt="" />
                </a>


                <a href='#proyectos'>
                <img width='40px' src={proyec} alt="" />
                </a>


                <a href='#contacto'>
                <img width='40px' src={sobre} alt="" />
                </a>
            </nav>

            <Redes/>
        </header>
    )
}

export default Menu;