import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

interface CartProviderProps {
  children: React.ReactNode;
}

interface ProductDTO {
  id: string;
  name: string;
  formatedPrice: string;
  price: number;
  priceId: string;
  imageUrl: string;
}

interface CartContextData {
  cartItens: ProductDTO[];
  addItem: (product: ProductDTO) => void;
  removeItem: (priceId: string) => void;
  finishBuy: () => Promise<string>;
}

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItens, setCartItens] = useState<ProductDTO[]>([]);

  const addItem = useCallback(
    (product: ProductDTO) => {
      const isExists = cartItens.find((item) => item.id === product.id);
      if (!isExists) {
        setCartItens((cartItens) => [...cartItens, product]);
      }
    },
    [cartItens]
  );

  const removeItem = useCallback((id: string) => {
    setCartItens((cartItens) => cartItens.filter((item) => item.id !== id));
  }, []);

  const finishBuy = useCallback(async (): Promise<string> => {
    const lineItems = cartItens.map((cart) => ({
      price: cart.priceId,
      quantity: 1,
    }));
    const response = await axios.post('/api/checkout', { lineItems });
    const { checkoutUrl } = response.data;
    return checkoutUrl;
  }, [cartItens]);

  return (
    <CartContext.Provider value={{ cartItens, addItem, removeItem, finishBuy }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
