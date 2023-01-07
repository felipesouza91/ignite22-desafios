import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type PaymentType = 'CREDIT_CARD' | 'DEBIT_CARD' | 'MONEY';

interface Coffee {
  id: string;
  imgUrl: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

interface CheckoutData {
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
  paymentMethod: PaymentType;
}

export interface Item {
  coffee: Coffee;
  quantity: number;
}

interface CarContextData {
  carItens: Item[];
  checkoutInfo: CheckoutData;
  addItemToCar: (data: Item) => void;
  finishCheckout: (value: CheckoutData) => void;
}

interface CarContextProviderProps {
  children?: React.ReactNode;
}

export const CarContext = createContext<CarContextData>({} as CarContextData);

const CarContextProvider: React.FC<CarContextProviderProps> = ({
  children,
}) => {
  const [carItens, setCarItens] = useState<Item[]>([]);
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutData>(
    {} as CheckoutData
  );

  function addItemToCar(data: Item) {
    const cofferExists = carItens.findIndex(
      (item) => item.coffee.id === data.coffee.id
    );
    if (cofferExists >= 0) {
      const newData = carItens.map((item) => {
        if (item.coffee.id === data.coffee.id && item.quantity != 0) {
          return {
            ...item,
            quantity: item.quantity + data.quantity,
          };
        }
        return item;
      });
      setCarItens([...newData]);
      localStorage.setItem('@app:cartItens', JSON.stringify(newData));
    } else {
      setCarItens([...carItens, data]);
      localStorage.setItem(
        '@app:cartItens',
        JSON.stringify([...carItens, data])
      );
    }
  }
  function finishCheckout(value: CheckoutData) {
    setCheckoutInfo(value);
    setCarItens([]);
    localStorage.removeItem('@app:cartItens');
  }

  useEffect(() => {
    const isCartInLocalStorage = localStorage.getItem('@app:cartItens');
    if (isCartInLocalStorage) {
      setCarItens(JSON.parse(isCartInLocalStorage));
    }
  }, []);
  return (
    <CarContext.Provider
      value={{ carItens, addItemToCar, checkoutInfo, finishCheckout }}
    >
      {children}
    </CarContext.Provider>
  );
};

export { CarContextProvider };
