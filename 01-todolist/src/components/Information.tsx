import styles from './Information.module.css';

type InformationProps = {
  label: string;
  badgeText: string;
  type?: 'primary' | 'secondary';
};

const Information: React.FC<InformationProps> = ({
  badgeText,
  label,
  type = 'primary',
}) => {
  return (
    <div className={styles.contaioner}>
      <span
        className={type === 'primary' ? styles.text : styles.text_secondary}
      >
        {label}
      </span>
      <div className={styles.badge}>
        <span>{badgeText}</span>
      </div>
    </div>
  );
};

export default Information;
