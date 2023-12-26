import styles from "./Timer.module.css";
import { useState, useEffect } from "react";
function Timer() {
  const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };
  const [time, setTime] = useState(initialState);
  const [started, setIsStarted] = useState(false);

  function arrowUpHandler(field) {
    setTime((oldData) => {
      let updatedData = Number(oldData[field]) + 1;
      updatedData = updatedData > 59 ? 0 : updatedData;
      return {
        ...oldData,
        [field]: updatedData,
      };
    });
  }

  const handleInputChange = (field, newValue) => {
    let clampedValue;

    const parsedValue = parseInt(newValue, 10);
    if (!isNaN(parsedValue)) {
      clampedValue = Math.min(Math.max(parsedValue, 0), 59);
      setTime((prevInputValues) => ({
        ...prevInputValues,
        [field]: clampedValue,
      }));
    }
  };

  function inputHandler(field) {
    setTime((prevValues) => ({
      ...prevValues,
      [field]: "",
    }));
  }

  useEffect(() => {
    let timer;

    if (started) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const newTime = { ...prevTime };

          if (
            newTime.hours === 0 &&
            newTime.minutes === 0 &&
            newTime.seconds === 0
          ) {
            clearInterval(timer);
            setIsStarted(false);
          } else {
            if (newTime.seconds > 0) {
              newTime.seconds--;
            } else {
              if (newTime.minutes > 0) {
                newTime.minutes--;
                newTime.seconds = 59;
              } else {
                newTime.hours--;
                newTime.minutes = 59;
                newTime.seconds = 59;
              }
            }
          }

          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [started]);

  function resetHandler() {
    setTime(initialState);
    console.log("test");
  }

  return (
    <>
      <section className={styles["clock-wrapper"]}>
        <article>
          <h1 className={styles.date}>Timer</h1>
        </article>

        <article className={styles["timer-wrapper"]}>
          <div className={styles.hours}>
            <p onClick={() => arrowUpHandler("hours")}>&#9650;</p>
            <input
              type="number"
              value={time.hours}
              onChange={(e) => handleInputChange("hours", e.target.value)}
              onClick={() => inputHandler("hours")}
            />
            <p>&#9660;</p>
          </div>

          <div className={styles.minutes}>
            <p onClick={() => arrowUpHandler("minutes")}>&#9650;</p>
            <input
              type="number"
              value={time.minutes}
              onChange={(e) => handleInputChange("minutes", e.target.value)}
              onClick={() => inputHandler("minutes")}
            />
            <p>&#9660;</p>
          </div>

          <div className={styles.seconds}>
            <p onClick={() => arrowUpHandler("seconds")}>&#9650;</p>
            <input
              type="number"
              value={time.seconds}
              onClick={() => inputHandler("seconds")}
              onChange={(e) => handleInputChange("seconds", e.target.value)}
            />
            <p>&#9660;</p>
          </div>
        </article>
        <div className={styles["button-wrapper"]}>
          <button type="button" onClick={() => setIsStarted(!started)}>
            {started ? "Pause" : "Start"}
          </button>

          <button type="button" onClick={resetHandler}>
            Reset
          </button>
        </div>
      </section>
    </>
  );
}

export default Timer;
