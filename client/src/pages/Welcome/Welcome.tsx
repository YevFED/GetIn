import React from "react";
import styles from "./Weclome.module.scss";
import Silk from "../../ui/background/Silk";
import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <>
      <Silk
        speed={3}
        scale={1}
        color="#444444"
        noiseIntensity={1.5}
        rotation={0}
      />
      <div className={styles.wrapper}>
        <div className={styles.overlay}>
          <h1>Welcome to Our Application</h1>
          <p>We are glad to have you here.</p>
          <Link to="/auth" className={styles.link}>
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
