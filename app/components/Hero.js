import Image from 'next/image'
import styles from '../styles/Hero.module.css' // Make sure to create this CSS module

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <h1>Order Your Best food anytime</h1>
        <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Type your location" />
          <button type="button">Search</button>
        </div>
      </div>
      <div className={styles.heroImage}>
        {/* Here we use the Image component for optimized image delivery */}
        <Image 
          src="/smiling_woman.jpg" // Path to the downloaded image
          alt="Woman smiling" 
          width={500} 
          height={600} 
          layout="responsive" 
        />
      </div>
    </div>
  )
}

export default Hero
