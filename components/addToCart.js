import styles from "../styles/addToCart.module.css";
import { useAppContext } from "./stateWrapper";

export default function AddToCart({ item }) {
    const cart = useAppContext();

    
    const handleClick = (e) => {
        e.preventDefault();
        console.log("addToCart", item);
        cart.addItem(item);
    };

  return (
    <button className={styles.button} onClick={handleClick}>
        Add to Cart
    </button>
  )
}