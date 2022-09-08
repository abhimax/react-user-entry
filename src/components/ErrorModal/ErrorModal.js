import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <Card>
      <div>
        <div className={styles.backdrop} onClick={onConfirm} />
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{title}</h2>
          </header>
          <div className={styles.content}>
            <p>{message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={onConfirm} type="button">
              Okay
            </Button>
          </footer>
        </Card>
      </div>
    </Card>
  );
};
export default ErrorModal;
