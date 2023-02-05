import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '@/styles';


const Document: React.FC = () => {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
