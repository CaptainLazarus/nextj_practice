import styles from '../styles/Footer.module.css' // Import the styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Footer content goes here */}
      <div className={styles.footerSection}>
        <h3>Our Services</h3>
        {/* List services here */}
      </div>
      <div className={styles.footerSection}>
        <h3>Our Company</h3>
        {/* List company info here */}
      </div>
      <div className={styles.footerSection}>
        <h3>Address</h3>
        {/* Add address here */}
      </div>
      {/* Add any other footer sections as needed */}
    </footer>
  )
}

export default Footer
