import { FC } from "react";

import styles from "./balance.module.scss";

export const Balance: FC = () => {
  return (
    <section className={styles.container}>
      <span>2137</span>
      <span>/</span>
      <span>6500</span>
    </section>
  );
};
