import React, { useState } from "react";
import Silk from "../../ui/background/Silk";
import styles from "./Auth.module.scss";
import { AnimatePresence, motion } from "framer-motion";

// NOTE: Add const for squeare title , fix Problems !!!

const Auth = () => {
  const [Login, setLogin] = useState<boolean>(false);
  const [Text, setText] = useState<string>("Register ");
  const [Side, setSide] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  //   I know it's dump , but thats my all creativity
  const handleModeChange = () => {
    setTimeout(() => {
      setText("");
    }, 200);
    setTimeout(() => {
      setSide(!Side);
    }, 200);
    setTimeout(() => {
      setLogin(!Login);
    }, 1200);
    setTimeout(() => {
      setText(Login ? "Register" : "Login");
    }, 1200);
  };

  // That's dump too
  const loginInfo = (
    <div className={styles.loginInfo}>
      <h2>{Text}</h2>
    </div>
  );

  const signupInfo = (
    <div className={styles.signupInfo}>
      <h2>{Text}</h2>
    </div>
  );

  return (
    <>
      <Silk
        speed={3}
        scale={1}
        color="#444444"
        noiseIntensity={1.5}
        rotation={0}
      />

      {Login ? (
        // Log in Form

        <div className={styles.wrapper}>
          <div className={styles.overlay}>
            <div className={Side ? styles.squereLeft : styles.squereRight}>
              <motion.div
                initial={{ opacity: 0, y: -300 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className={styles.signupInfo}
              >
                {loginInfo}
              </motion.div>
            </div>
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form className={styles.loginForm}>
                <h2 className={styles.formTitle}>Welcome Back!</h2>
                <div className={styles.formInputs}>
                  <label className={styles.formlabel}>Email :</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label className={styles.formlabel}>Password :</label>
                  <input
                    type="password"
                    className={styles.formInput}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <p className={styles.formChanger} onClick={handleModeChange}>
                  Don't have account?
                </p>
                <button type="submit" className={styles.formButton}>
                  Let's Go!
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      ) : (
        // Register Form
        <AnimatePresence mode="wait">
          <div className={styles.wrapper}>
            <div className={styles.overlay}>
              <div className={!Side ? styles.squereRight : styles.squereLeft}>
                <motion.div
                  initial={{ opacity: 0, y: 300 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className={styles.signupInfo}
                >
                  {signupInfo}
                </motion.div>
              </div>
              <motion.div
                key="register"
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
              >
                <form className={styles.signupForm}>
                  <h2 className={styles.formTitle}>Let's Sign up</h2>
                  <div className={styles.formInputs}>
                    <label className={styles.formlabel}>Username :</label>
                    <input
                      type="email"
                      className={styles.formInput}
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                    <label className={styles.formlabel}>Email :</label>
                    <input
                      type="email"
                      className={styles.formInput}
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <label className={styles.formlabel}>Password :</label>
                    <input
                      type="password"
                      className={styles.formInput}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>

                  <p className={styles.formChanger} onClick={handleModeChange}>
                    Already have an acount ?
                  </p>
                  <button type="submit" className={styles.formButton}>
                    Create!
                  </button>
                </form>
              </motion.div>
            </div>
          </div>{" "}
        </AnimatePresence>
      )}
    </>
  );
};

export default Auth;
