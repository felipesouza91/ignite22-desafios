import React, { createContext, useState } from 'react';

interface Coffee {
  id: string;
  imgUrl: string;
  type: string[];
  name: string;
  description: string;
  price: number;
}

export interface Item {
  coffee: Coffee;
  quantity: number;
}

interface CarContextData {
  carItens: Item[];
  addItemToCar: (data: Item) => void;
}

interface CarContextProviderProps {
  children?: React.ReactNode;
}

export const CarContext = createContext<CarContextData>({} as CarContextData);

const CarContextProvider: React.FC<CarContextProviderProps> = ({
  children,
}) => {
  const [carItens, setCarItens] = useState<Item[]>([]);

  function addItemToCar(data: Item) {
    const cofferExists = carItens.findIndex(
      (item) => item.coffee.id === data.coffee.id
    );
    if (cofferExists >= 0) {
      const newData = carItens.map((item) => {
        if (item.coffee.id === data.coffee.id) {
          return {
            ...item,
            quantity: item.quantity + data.quantity,
          };
        }
        return item;
      });
      setCarItens([...newData]);
    } else {
      setCarItens([...carItens, data]);
    }
  }
  console.log(carItens);
  function updatePlusQuantity() {}
  function updateMinusQuantity() {}

  return (
    <CarContext.Provider value={{ carItens, addItemToCar }}>
      {children}
    </CarContext.Provider>
  );
};

export { CarContextProvider };
