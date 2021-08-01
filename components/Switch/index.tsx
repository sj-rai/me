import React from "react";
import styles from "./switch.module.css";

const Switch = () => {
  return (
    <>
      <input
        className={styles.reactSwitchCheckbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label className={styles.reactSwitchLabel} htmlFor={`react-switch-new`}>
        <span className={styles.reactSwitchButton} />
      </label>
    </>
  );
};

export default Switch;
