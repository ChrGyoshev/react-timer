import "./App.css";
import Time from "./components/Time";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(false);

  return (
    <>
      <div className="content">
        <div className="buttons">
          <button type="button" onClick={() => setTime(!time)}>
            Clock
          </button>
          <button type="button">Timer</button>
        </div>
        <section>{time && <Time />}</section>
      </div>
      <Footer />
    </>
  );
}

export default App;
