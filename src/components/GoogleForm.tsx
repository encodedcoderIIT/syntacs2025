import styles from "./GoogleForm.module.css";

interface GoogleFormProps {
  formUrl: string;
}

const GoogleForm = ({ formUrl }: GoogleFormProps) => {
  return (
    <div className={styles.googleFormContainer}>
      <iframe
        className={styles.googleFormIframe}
        src={formUrl}
        width="640"
        height="1100"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
