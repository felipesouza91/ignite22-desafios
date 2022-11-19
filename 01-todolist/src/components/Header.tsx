import styles from './Header.module.css';
import Logo from '../assets/Logo.svg';
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" />
    </header>
  );
};

export { Header };
