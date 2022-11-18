import Link from "next/link";
import Image from "next/image";
import styles from "../styles/products.module.css";
import AddToCart from "./addToCart";
import { useAppContext } from "./stateWrapper";
export default function Products({ items, view }) {

  const cart = useAppContext();

  console.log("items22", items?.name);
  if (view === "Detail") {
    console.log("items", items?.name);
    return (
      <div className={styles.page}>
        <div className={styles.image}>
          <Image
            src={items?.image}
            alt={items?.name}
            width={400}
            height={400}
          />
        </div>
        <div className={styles.info}>
          <div>
            <h1>{items?.name}</h1>
          </div>
          <div className={styles.price}>${items?.price}</div>
          <div>{items?.description}</div>
          <div>
            <AddToCart item={items} />
          </div>
        </div>
      </div>
    );
  }

  if (view === "CartItem") {
    return (
      <div>
        <div>
          <Image
            src={items?.image}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <div>
          <div>{items?.name}</div>
          <div>${items?.price}</div>
          <div>Qty: {items?.qty}</div>
          <div>Total: {items?.qty * items?.price}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.item}>
      <div>
        <Link href={`/store/${items?.id}`}>
          <Image src={items?.image} width={200} height={200} alt="NOT FOUND" />
        </Link>
      </div>
      <div>
        <Link href={`/store/${items?.id}`}>
          <h3>{items?.name}</h3>
        </Link>
      </div>
      <div>${items?.price}</div>
      <div>
        <AddToCart item={items} />{" "}
        {/*button addToCart para agregar al carrito */}
      </div>
    </div>
  );
}
