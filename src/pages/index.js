import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
//import Prod from "../products/products.json";
import Footer from "../components/Footer";

export default function Home({ produits }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazone</title>
      </Head>

      {/* Header */}
      <Header/>
      <main className="max-w-screen-2xl mx-auto">
        {/**Banner */}
        <Banner/>
        {/**Product Feed */}
        {/*<ProductFeed products={products}/>*/}
        <ProductFeed products={produits}/>
      </main>
      <Footer/>
    </div>
  );
}

export async function getServerSideProps(context){
  //const session = await getSession(context);

  //Get products from my Firebase backend storage
  const produits = await fetch("https://firebasestorage.googleapis.com/v0/b/new-e-abd00.appspot.com/o/Json%2Fproducts.json?alt=media&token=9459946e-b63b-492a-8136-048aedf65649").then(
    (res) => res.json()
  );

  return {
    props: {
      produits, 
      //session
    }
  }
}