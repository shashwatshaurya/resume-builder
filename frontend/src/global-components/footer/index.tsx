import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.copyright}>
            © 2024 Resume Builder. All rights reserved.
          </div>
          <div className={styles.links}>
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              Terms of Service
            </a>
            <a href="#" className={styles.link}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
