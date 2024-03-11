import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          GoodFood
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" passHref>Home</Link>
        <Link href="/menu" passHref>Menu</Link>
        <Link href="/services" passHref>Services</Link>
        <Link href="/about-us" passHref>About Us</Link>
        <Link href="/gallery" passHref>Gallery</Link>
        {/* <div className={styles.cart}>
          <Link href="/cart" passHref>
            <Image
              src="/pizza.jpg" // Path to your cart icon image
              alt="Cart"
              width={24}
              height={24}
            />
            <span className={styles.badge}>3</span>
          </Link>
        </div> */}
      </nav>
      <div className={styles.auth}>
        <Link href="/login" passHref>Login</Link>
        <Link href="/signup" passHref className={styles.signup}>Create Account</Link>
      </div>
    </header>
  );
}

export default Header
