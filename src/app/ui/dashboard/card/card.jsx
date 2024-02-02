import styles from './card.module.css';

const Card = ({ id, tags, title, description, details }) => {
  return (
    <div className={styles.container}>
      <div className={styles['card-text']}>
        {tags.map((tag, index) => (
          <div key={index} className={styles['element-text']}>
            {tag}
          </div>
        ))}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.detail}>{details}</div>
    </div>
  );
};

export default Card;

