import React, { useContext, useEffect, useState } from "react";
import { OptionContext } from "../../pages/Products/Products";
import styles from "./Options.module.css";

function Options({ options }) {
  const { selectOption, setSelectOption } = useContext(OptionContext);
  useEffect(() => {
    setSelectOption(options[0]);
  }, []);
  return (
    <div className={styles.options}>
      {options.map((option) => {
        return (
          <div
            onClick={() => {
              setSelectOption(option);
            }}
            className={
              option === selectOption
                ? `${styles.selOption}`
                : `${styles.option}`
            }
            key={option}
          >
            {option}
          </div>
        );
      })}
    </div>
  );
}

export default Options;
