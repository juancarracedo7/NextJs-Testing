import Products from "./products";
import { useAppContext } from "./stateWrapper";
import styles from "../styles/cart.module.css";

export default function Cart() {
  const cart = useAppContext();

  const handleClickClose = (e) => {
    cart.closeCart();
  };
  return (
    <div
      className={styles.cart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button onClick={handleClickClose} className={styles.closeButton}>Close</button>
      {
        cart.items.length === 0 ? <div className={styles.empty}>Cart is empty</div> :  <><h3>Your Items</h3>
      <div className={styles.total}>
        {cart.items.map((item) => (
          <Products
            key={item.id}
            item={item}
            view="CartItem"
            qty={item.qty}
          />
        ))}
      </div> 
      </> 
      }
     

    
    </div>
  );
}
