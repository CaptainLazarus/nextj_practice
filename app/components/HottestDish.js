import styles from '../styles/HottestDish.module.css'

const HottestDish = () => {
    return (
      <div className="hottest-dish">
        <h2>Our New Hottest Dish</h2>
        {/* Map through your dish items here, using placeholders for images */}
        <div>
          <img src="path_to_placeholder_image" alt="Pizza" />
          <p>Pizza</p>
        </div>
        {/* Repeat for other dishes */}
      </div>
    )
  }
  
  export default HottestDish
  