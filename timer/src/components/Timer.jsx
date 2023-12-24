import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
function Timer() {
  const [started, setIsStarted] = useState(false);
  return (
    <>
      <section className={styles["clock-wrapper"]}>
        <article>
          <h1 className={styles.date}>Timer</h1>
        </article>

        <article>
          <h1 className={styles.clock}>00:00:00</h1>
        </article>
        <div className={styles["button-wrapper"]}>
          <button type="button" onClick={() => setIsStarted(!started)}>
            {started ? "Pause" : "Start"}
          </button>
          <button type="button">Stop</button>
          <button type="button">Reset</button>
        </div>
      </section>
    </>
  );
}

export default Timer;
