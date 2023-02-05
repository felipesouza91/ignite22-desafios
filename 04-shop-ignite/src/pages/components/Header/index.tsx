import React, { useContext } from 'react';
import Logo from '../../../assets/Logo.svg';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import CartDialog from '../CartDialog';
import { CartContext } from '@/context/CartContext';
import { ContainerHeader } from './styles';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const { cartItens } = useContext(CartContext);
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <ContainerHeader
      justifyContent={pathname !== '/success' ?  'spaceBetween': 'center' }
    >
      <Image src={Logo} alt="" />
      {pathname !== '/success' && (
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} />
              {cartItens?.length > 0 && (
                <div>
                  <span>{cartItens.length}</span>
                </div>
              )}
            </button>
          </Dialog.Trigger>
          <CartDialog />
        </Dialog.Root>
      )}
    </ContainerHeader>
  );
};

export default Header;
