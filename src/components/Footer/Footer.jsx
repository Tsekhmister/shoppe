import React from "react";
import styles from "./style.module.scss";
import linkedin from "../../assets/in.png";
import facebook from "../../assets/facebook.png";
import insta from "../../assets/insta.png";
import twiter from "../../assets/twiter.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__leftSection}>
        <div className={styles.titles}>
          <h5>CONTACT</h5>
          <h5>TERMS OF SERVICES</h5>
          <h5>SHIPPING AND RETURNS</h5>
        </div>
        <div className={styles.copyright}>
          <p>
            <span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy
            policy.
          </p>
        </div>
      </div>
      <div className={styles.footer__rightSection}>
        <input type="email" placeholder="Give an email, get the newsletter." />
        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/" target="_blank">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} alt="facebook icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={insta} alt="instagram icon" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twiter} alt="twiter icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
