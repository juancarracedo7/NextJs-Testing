import Link from "next/link";
import styles from "../styles/menu.module.css";
import Cart from "./cart";
import { useAppContext } from "./stateWrapper";

export default function Menu() {

  const cart = useAppContext();

  const handleClickOpen = (e) => {
    e.preventDefault();
    cart.openCart();
  };

  return (
    <nav className={styles.container}>
    <div>
      <Link className={styles.links} href="/">Home</Link>
      <Link className={styles.links} href="/faq">Faq</Link>
      <Link className={styles.links} href="/store">Store</Link>
      </div>
      <div>
      <Link className={styles.links} href="#" onClick={handleClickOpen}>Cart({cart.getNumberOfItems()})</Link>
      </div>
    </nav>
  );
}
