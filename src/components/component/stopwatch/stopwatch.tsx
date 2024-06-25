import React, { useEffect } from "react";
import "./styles.css";

interface Time {
  seconds: number;
  minutes: number;
  hours: number;
}

interface StopwatchProps {
  currentTime: Time;
  setCurrentTime: React.Dispatch<React.SetStateAction<Time>>;
  currentState: string;
  setCurrentState: React.Dispatch<React.SetStateAction<string>>;
}

const Stopwatch: React.FC<StopwatchProps> = ({
  currentTime,
  setCurrentTime,
  currentState,
}) => {
  const intervalRef = React.useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    if (currentState === "START") {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          let newSeconds = prevTime.seconds + 1;
          let newMinutes = prevTime.minutes;
          let newHours = prevTime.hours;

          if (newSeconds === 60) {
            newSeconds = 0;
            newMinutes += 1;
          }

          if (newMinutes === 60) {
            newMinutes = 0;
            newHours += 1;
          }

          return {
            seconds: newSeconds,
            minutes: newMinutes,
            hours: newHours,
          };
        });
      }, 1000);
    } else if (currentState === "RESET") {
      setCurrentTime({
        seconds: 0,
        minutes: 0,
        hours: 0,
      });
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [currentState, setCurrentTime]);

  // const onReset = () => {
  //   setCurrentState("RESET");
  //   setCurrentTime({
  //     seconds: 0,
  //     minutes: 0,
  //     hours: 0,
  //   });
  //   clearInterval(intervalRef.current);
  // };

  return (
    <div className="App d-flex align-items-center gap-2">
      <div className="timer d-flex">
        <span>{String(currentTime.hours).padStart(2, "0")}</span>:
        <span>{String(currentTime.minutes).padStart(2, "0")}</span>:
        <span>{String(currentTime.seconds).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default Stopwatch;

// import React from "react";
// import "./styles.css";
// import { Button } from "antd";

// interface Time {
//   seconds: number;
//   minutes: number;
//   hours: number;
// }

// interface StopwatchProps {
//   currentTime: Time;
//   setCurrentTime: React.Dispatch<React.SetStateAction<Time>>;
//   currentState: string;
//   setCurrentState: React.Dispatch<React.SetStateAction<string>>;
// }

// const Stopwatch: React.FC<StopwatchProps> = ({
//   currentTime,
//   setCurrentTime,
//   currentState,
//   setCurrentState,
// }) => {
//   const intervalRef = React.useRef<NodeJS.Timeout | undefined>();

//   const toggleStartStop = () => {
//     if (currentState === "START") {
//       setCurrentState("STOP");
//       clearInterval(intervalRef.current);
//     } else {
//       setCurrentState("START");
//       intervalRef.current = setInterval(() => {
//         setCurrentTime((prevTime) => {
//           let newSeconds = prevTime.seconds + 1;
//           let newMinutes = prevTime.minutes;
//           let newHours = prevTime.hours;

//           if (newSeconds === 60) {
//             newSeconds = 0;
//             newMinutes += 1;
//           }

//           if (newMinutes === 60) {
//             newMinutes = 0;
//             newHours += 1;
//           }

//           return {
//             seconds: newSeconds,
//             minutes: newMinutes,
//             hours: newHours,
//           };
//         });
//       }, 1000);
//     }
//   };

//   const onReset = () => {
//     setCurrentState("RESET");
//     setCurrentTime({
//       seconds: 0,
//       minutes: 0,
//       hours: 0,
//     });
//     clearInterval(intervalRef.current);
//   };

//   return (
//     <div className="App d-flex align-items-center gap-2">
//       <Button onClick={toggleStartStop}>
//         {currentState === "START" ? "Stop" : "Start"}
//       </Button>
//       <Button onClick={onReset}>Reset</Button>
//       <div className="timer d-flex">
//         <span>{String(currentTime.hours).padStart(2, "0")}</span>:
//         <span>{String(currentTime.minutes).padStart(2, "0")}</span>:
//         <span>{String(currentTime.seconds).padStart(2, "0")}</span>
//       </div>
//     </div>
//   );
// };

// export default Stopwatch;
