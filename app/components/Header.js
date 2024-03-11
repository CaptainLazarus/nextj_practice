import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className={styles.nav}>
      {/* Replace with your own navigation items */}
      <div>
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/menu" passHref>
          Menu
        </Link>
        {/* Add other navigation links here */}
      </div>

      <div>
        <Link href="/login" passHref>
          Login
        </Link>
        <Link href="/signup" passHref>
          Create Account
        </Link>
      </div>
    </nav>
  );
}

export default Header
