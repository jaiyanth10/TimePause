import { useState, useRef } from "react";
import Resultmodal from "./Resultmodal";

export function Challenge({ difficulty, time }) {
  const x = useRef();
  const xx = useRef();
  const [remainingTime, setRemainingTime] = useState(time * 1000);

  const timeStarted = remainingTime>=0 && remainingTime < time * 1000;
 
  function reset(){
    setRemainingTime(time * 1000);
  }

  if (remainingTime <= 0) {
    clearInterval(x.current);
    xx.current.show();
  }

  function timerStart() {
    x.current = setInterval(() => {
      setRemainingTime(prev => prev - 10);
    }, 10);
  }

  function timeStop() {
    clearInterval(x.current);
    xx.current.show();
  }

  return (
    <>
      <Resultmodal reset={reset} timeLeft={remainingTime} time={time} ref={xx} />
      <section className="challenge">
        <h2>{difficulty}</h2>
        <p className="challenge-time ">{time}{time > 1 ? " seconds" : " second"}</p>
        <p>
          <button onClick={timeStarted ? timeStop : timerStart}>
            {timeStarted ? "Stop Challenge" : "Start Challenge"}
          </button>
        </p>
        <p className={timeStarted ? "active" : undefined}>
          {timeStarted ? "Time is Running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
