import Layout from "../../components/layout";
import Products from "../../components/products";
import { getIds, getItemsData} from "../../lib/utils";

export default function ProductDetail( { productInfo }) {
  return (
    <Layout>
      <Products items={productInfo.data} view="Detail" />
    </Layout>
  );
}

export async function getStaticPaths() {
  const id = await getIds(); // obtengo todos los ids de los productos

  return {
    paths: id,
    fallback: false, // nos manda a una 404 si no existe el id
  };
}

export async function getStaticProps({ params }) {
  const id = params.id; // obtengo el id del producto
  const product = await getItemsData(id); // veo si coincide el id con el producto

  return {
    props: {
      productInfo : product
    },
  };
}
