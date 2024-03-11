import Image from 'next/image';
import styles from '../styles/Menu.module.css'; // Ensure this CSS module exists

const Menu = () => {
  const menuItems = [
    { name: 'Fried Chicken', img: '/pizza.jpg' },
    { name: 'Pizza', img: '/pizza.jpg' },
    { name: 'Burger', img: '/pizza.jpg' },
    { name: 'Coffee', img: '/pizza.jpg' },
    { name: 'Salad', img: '/pizza.jpg' }
  ];

  return (
    <section className={styles.menu}>
      <h2>Our Menu</h2>
      <div className={styles.menuItems}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.menuItem}>
            <div className={styles.imageContainer}>
              <Image
                src={item.img} // Path to the placeholder image
                alt={item.name}
                width={100}
                height={100}
                layout="responsive"
              />
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
