import "./App.css";
import Time from "./components/Time";
import Footer from "./components/Footer";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [time, setTime] = useState(true);
  const [timer, setTimer] = useState(false);

  return (
    <>
      <div className="content">
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setTime(!time);
              setTimer(false);
            }}
          >
            Clock
          </button>
          <button
            type="button"
            onClick={() => {
              setTimer(!timer);
              setTime(false);
            }}
          >
            Timer
          </button>
        </div>
        <section>{time && <Time />}</section>
        <section className="timer">{timer && <Timer />}</section>
      </div>
      <Footer />
    </>
  );
}

export default App;
