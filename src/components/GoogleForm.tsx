import styles from "./GoogleForm.module.css";

const GoogleForm = () => {
  return (
    <div className={styles.googleFormContainer}>
      <iframe
        className={styles.googleFormIframe}
        src="https://docs.google.com/forms/d/e/1FAIpQLSfKxHY9nVM-lcNQCmRWsp7BIVyuJemSlnWK1gZc--zj_PlpMw/viewform?embedded=true"
        width="640"
        height="1100"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default GoogleForm;
