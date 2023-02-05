import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { useKeenSlider } from 'keen-slider/react';
import { GetStaticProps } from 'next';
import { HomeContainer, Product } from '@/styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { Handbag } from 'phosphor-react';
import { CartContext } from '@/context/CartContext';
interface ProductDTO {
  id: string;
  name: string;
  formatedPrice: string;
  price: number;
  priceId: string;
  imageUrl: string;
  description: string | null;
}

interface HomeProps {
  products: ProductDTO[];
}

const Home: React.FC<HomeProps> = ({ products }) => {
  const { addItem } = useContext(CartContext);
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddItem(product: ProductDTO) {
    addItem(product);
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product className="keen-slider__slide" key={product.id}>
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} alt="" width={520} height={480} />
            </Link>
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.formatedPrice}</span>
              </div>
              <button onClick={() => handleAddItem(product)}>
                <Handbag size={32} />
              </button>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });
  const products = response.data.map(
    ({ id, name, description, images, default_price }) => ({
      id,
      name,
      description,
      imageUrl: images[0],
      priceId: (default_price as Stripe.Price).id,
      price: (default_price as Stripe.Price).unit_amount! / 100,
      formatedPrice: Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((default_price as Stripe.Price).unit_amount! / 100),
    })
  );
  return {
    props: { products },
    revalidate: 60 * 60 * 2, //2 hours
  };
};

export default Home;
