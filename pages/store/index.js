import Layout from "../../components/layout";
import { getItems } from "../../services/items";
import Image from "next/image";
import Products from "../../components/products";
import styles from "../../styles/products.module.css";

export default function Store({ items }) {
    console.log("items", items);
  return (
    <Layout title="Store">
        <h2>Store</h2>
      <div className={styles.container}>
        {items && items.map((item) => (
            
               <Products key={item.id} items={item}/>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
    const response = await getItems()

    return {
        props: {            
            items: response
        }
    }
}
