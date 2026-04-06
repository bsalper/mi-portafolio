import styles from '../footer/Footer.module.css'

const Footer = () => {
  return (
    <section className={styles.footer}>
      <a>&copy; {new Date().getFullYear()} Bastian Salazar | Todos los derechos reservados.</a>
    </section>
  );
}

export default Footer;