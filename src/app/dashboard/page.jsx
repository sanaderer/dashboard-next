import Card from "../ui/dashboard/card/card";
import styles from "../ui/dashboard/dashboard.module.css";
import cardsData from "/public/cardsData.json";

const DashboardPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
