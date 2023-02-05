import React, { useCallback, useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { stripe } from '@/lib/stripe';
import {
  ProductContainer,
  ProductImageContainer,
  ProductInfoContainer,
} from '@/styles/pages/product';
import Stripe from 'stripe';
import { getConstantValue } from 'typescript';
import Head from 'next/head';
import { CartContext } from '@/context/CartContext';

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    imageUrl: string;
    formatedPrice: string;
    defaultPriceId: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const { isFallback } = useRouter();
  const { addItem, cartItens } = useContext(CartContext);
  if (isFallback) {
    return <p>Carregando...</p>;
  }

  const handleAddItem = () => {
    const { id, imageUrl, name, price, defaultPriceId, formatedPrice } =
      product;
    addItem({
      id,
      imageUrl,
      name,
      price,
      priceId: defaultPriceId,
      formatedPrice,
    });
  };
  console.log(cartItens);
  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ProductImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ProductImageContainer>
        <ProductInfoContainer>
          <h1>{product.name}</h1>
          <span>{product.formatedPrice}</span>
          <p>{product.description}</p>
          <button onClick={handleAddItem}>Colocar na sacola</button>
        </ProductInfoContainer>
      </ProductContainer>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await stripe.products.list();
  console.log(products);
  const paths = products.data.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ProductProps> = async ({
  params,
}) => {
  const productId = params!.id as string;
  const productStripe = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  return {
    revalidate: 60 * 60 * 1, // 1 hour

    props: {
      product: {
        id: productStripe.id,
        description: productStripe.description,
        name: productStripe.name,
        imageUrl: productStripe.images[0],
        price: (productStripe.default_price as Stripe.Price).unit_amount! / 100,
        formatedPrice: Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(
          (productStripe.default_price as Stripe.Price).unit_amount! / 100
        ),
        defaultPriceId: (productStripe.default_price as Stripe.Price).id,
      },
    },
  };
};

export default Product;
