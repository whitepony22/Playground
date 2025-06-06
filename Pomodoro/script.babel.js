const { useState, useEffect, useRef } = React;

function App() {
  const [breakLen, setBreakLen] = useState(5);
  const [sessionLen, setSessionLen] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [running, setRunning] = useState(false);
  const [onBreak, setOnBreak] = useState(false);
  const timer = useRef(null);
  const beep = useRef(null);

  useEffect(() => {
    if (timeLeft === 0) {
      beep.current.play();
      setTimeout(() => {
        setOnBreak(prev => !prev);
        setTimeLeft((onBreak ? sessionLen : breakLen) * 60);
      }, 1000);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (!running) return clearInterval(timer.current);
    timer.current = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer.current);
  }, [running]);

  const format = s => `${String(Math.floor(s/60)).padStart(2,0)}:${String(s%60).padStart(2,0)}`;

  const reset = () => {
    setBreakLen(5); setSessionLen(25); setTimeLeft(1500);
    setRunning(false); setOnBreak(false);
    clearInterval(timer.current);
    beep.current.pause();
    beep.current.currentTime = 0;
  };

  const changeTime = (amount, type) => {
    if (running) return;
    if (type === 'break') {
      const newVal = breakLen + amount;
      if (newVal > 0 && newVal <= 60) setBreakLen(newVal);
    } else {
      const newVal = sessionLen + amount;
      if (newVal > 0 && newVal <= 60) {
        setSessionLen(newVal);
        setTimeLeft(newVal * 60);
      }
    }
  };

  return (
    <div style={{textAlign:"center", maxWidth:"300px", margin:"2em auto", fontFamily:"sans-serif"}}>
      <h1>Pomodoro Clock</h1>
      <div>
        <div id="break-label">Break Length
          <div>
            <button id="break-decrement" onClick={()=>changeTime(-1, 'break')}>-</button>
            <span id="break-length">{breakLen}</span>
            <button id="break-increment" onClick={()=>changeTime(1, 'break')}>+</button>
          </div>
        </div>
        <div id="session-label">Session Length
          <div>
            <button id="session-decrement" onClick={()=>changeTime(-1, 'session')}>-</button>
            <span id="session-length">{sessionLen}</span>
            <button id="session-increment" onClick={()=>changeTime(1, 'session')}>+</button>
          </div>
        </div>
      </div>
      <div id="timer">
        <h2 id="timer-label">{onBreak ? "Break" : "Session"}</h2>
        <div id="time-left" style={{fontSize:"2em"}}>{format(timeLeft)}</div>
      </div>
      <div>
        <button id="start_stop" onClick={()=>setRunning(r=>!r)}>{running ? "Pause" : "Start"}</button>
        <button id="reset" onClick={reset}>Reset</button>
      </div>
      <audio id="beep" ref={beep} src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
