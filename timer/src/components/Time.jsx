import { useEffect, useState } from "react";
import styles from "./Time.module.css";
const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const currenttime = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(currenttime);
  }, []);

  return (
    <>
      <section className={styles["clock-wrapper"]}>
        <article>
          <h1 className={styles.date}>{time.toLocaleDateString()}</h1>
        </article>

        <article>
          <h1 className={styles.clock}>{time.toLocaleTimeString()}</h1>
        </article>
      </section>
    </>
  );
};

export default Time;
