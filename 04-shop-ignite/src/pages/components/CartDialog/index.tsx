import React, { useCallback, useContext, useMemo } from 'react';
import { CartContext } from '@/context/CartContext';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import Image from 'next/image';
import {
  Close,
  Content,
  Overlay,
  Title,
  CartContainer,
  CartItensContainer,
  CartItem,
  CartImageContainer,
  CartItemInfo,
  CartValueContainer,
  QuantityContainer,
  ValueContainer,
  SubmitButton,
} from './styles';
import { roboto } from '@/pages/_app';

const CartDialog: React.FC = () => {
  const { cartItens, removeItem, finishBuy } = useContext(CartContext);

  const total = useMemo(() => {
    return cartItens.reduce((total, item) => (total += item.price), 0);
  }, [cartItens]);

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const handleSubmit = async () => {
    const checkoutUrl = await finishBuy();
    window.location.href = checkoutUrl;
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <CartContainer className={roboto.className}>
          <Title>Sacola de compras</Title>
          <CartItensContainer>
            {cartItens &&
              cartItens.map((cartItem) => (
                <CartItem key={cartItem.id}>
                  <CartImageContainer>
                    <Image
                      src={cartItem.imageUrl}
                      alt=""
                      width={94}
                      height={94}
                    />
                  </CartImageContainer>
                  <CartItemInfo>
                    <span>{cartItem.name}</span>
                    <strong>{cartItem.formatedPrice}</strong>
                    <button onClick={() => handleRemove(cartItem.id)}>
                      Remover
                    </button>
                  </CartItemInfo>
                </CartItem>
              ))}
          </CartItensContainer>

          <CartValueContainer>
            <QuantityContainer>
              <span>Quantidade</span>
              <span>{cartItens.length} itens</span>
            </QuantityContainer>
            <ValueContainer>
              <span>Valor Total</span>
              <strong>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total)}
              </strong>
            </ValueContainer>
          </CartValueContainer>
          <SubmitButton onClick={handleSubmit}>Finalizar compra</SubmitButton>
        </CartContainer>
      </Content>
    </Dialog.Portal>
  );
};

export default CartDialog;
