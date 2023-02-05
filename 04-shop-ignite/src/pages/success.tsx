import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SuccessContainer, ImageBox, ImageList } from '@/styles/pages/success';
import { GetServerSideProps } from 'next';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import Head from 'next/head';

interface SuccessProps {
  data: {
    name: string;
    productsImages: string[];
  };
}

const Success: React.FC<SuccessProps> = ({ data }) => {
  if (!data) {
    return <h1>Carregando</h1>;
  }
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robost" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImageList>
          {data.productsImages.map((image) => (
            <ImageBox key={image}>
              <Image src={image} alt="" width={115} height={106} />
            </ImageBox>
          ))}
        </ImageList>
        <h1> Compra efetuada!</h1>
        <p>
          Uhuul<strong>{` ${data.name} `}</strong>, sua compra de
          {` ${data.productsImages.length}`} camisetas já está a caminho da sua
          casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SuccessProps> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;

  if (!sessionId) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });
  console.log(session);
  const productsImages = session.line_items!.data.map(
    (item) => (item.price?.product as Stripe.Product).images[0]
  );

  return {
    props: {
      data: {
        name: session.customer_details!.name!,
        productsImages,
      },
    },
  };
};

export default Success;
