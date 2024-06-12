import styles from '../menu/Redes.module.css'
import Linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

const Redes = () => {
    return(
        <div className={styles.Redes}>
            <a href="https://www.linkedin.com/in/bastian-salazar-pérez-a1046822a/">
                <img width='25px' src={Linkedin} alt=""/>
            </a>
            <a href="https://github.com/bsalper">
                <img width='25px' src={github} alt=""/>
            </a>
        </div>
    )
}

export default Redes;