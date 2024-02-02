import styles from './card.module.css';

const predefinedColors = ['#FFE5D3', '#DAD7F', '#E2FBD7', '#FFE5D3', '#FFF5CC', '#CCF8FE'];

const shuffleArray = (array) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Card = ({ id, tags, title, description, details, image }) => {
  const shuffledColors = shuffleArray(predefinedColors);
  return (
    <div className={styles.container}>
      <div className={styles['card-text']}>
        {tags.map((tag, index) => (
          <div 
            key={index} 
            className={styles['element-text']}
            style={{background: shuffledColors.pop()}}>
            {tag}
          </div>
        ))}
      </div>
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={`Image for ${title}`} className={styles.image} />
        </div>
      )}
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.detail}>{details}</div>
    </div>
  );
};

export default Card;
