import styles from "../Styles/card.module.css";

const CertificationComponent = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default CertificationComponent;
