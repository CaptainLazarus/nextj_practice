import Image from 'next/image';
import styles from '../styles/HottestDish.module.css'; // Ensure this CSS module exists

const HottestDish = () => {
  const dishes = [
    { name: 'Pizza', description: 'A classic Neapolitan pizza with fresh mozzarella and basil.', rating: 4.5, price: '$5' },
    { name: 'Burger', description: 'Juicy beef patty with cheese, lettuce, and our special sauce.', rating: 4.2, price: '$5' },
    { name: 'Chicken', description: 'Tender grilled chicken breast with a side of steamed vegetables.', rating: 4.7, price: '$5' }
  ];

  return (
    <section className={styles.hottestDish}>
      <h2>Our New Hottest Dish</h2>
      <div className={styles.dishes}>
        {dishes.map((dish, index) => (
          <div key={index} className={styles.dish}>
            <div className={styles.imageWrapper}>
              <Image
                src="/pizza.jpg" // Path to the placeholder image
                alt={dish.name}
                width={150}
                height={150}
                layout="responsive"
              />
              <div className={styles.priceTag}>{dish.price}</div>
            </div>
            <h3>{dish.name}</h3>
            <p className={styles.description}>{dish.description}</p>
            <div className={styles.rating}>
              {'★'.repeat(Math.floor(dish.rating))}
              {'☆'.repeat(5 - Math.floor(dish.rating))}
              <span>({dish.rating})</span>
            </div>
            <button className={styles.orderButton}>Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HottestDish;
