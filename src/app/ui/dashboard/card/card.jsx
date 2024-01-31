import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles['card-text']}>
        <div className={styles['element-text']}>Deep</div>
        <div className={styles['element-text']}>Minimal</div>
      </div>
      <div className={styles.title}>Cologne</div>
      <div className={styles.description}>When you enter into any new area of science, you almost always find.</div>
      <div className={styles.detail}>Details</div>
    </div>
  );
};

export default Card;
