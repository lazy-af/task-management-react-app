import React, { useState } from "react";
import "./TaskBlock.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import AlertDialog from "../AlertBox/AlertBox";
import CongratsModal from './../CongratsModal/CongratsModal';

const TaskBlock = (props) => {
  const [done, setDone] = useState(false);
  //clock functionality
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    }

    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  const doneHandler = () => { 
    setDone(true);
  };


  return (
    <div className="task-block">
      <div className="timer-clock">
        <div className="timer-wrapper">
          <CountdownCircleTimer
            size="150"
            isPlaying = {!done}
            duration={props.seconds}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [false, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <div className="task-info">
        <div className="info">
          <h1
            style={{
              marginBottom: 12,
            }}
          >
            {props.workTitle}
          </h1>
          <hr className="seperator"></hr>
          <h4
            style={{
              marginTop: 12,
            }}
          >
            To Be Completed Before :
            <span style={{ fontSize: 24 }}>
              {" "}
              {props.dateEntered} {props.timeEntered}
            </span>
          </h4>
        </div>
        <div className="done">
          <CongratsModal size="small" color="primary" variant="contained" clickedDone={doneHandler}>
            DONE
          </CongratsModal>
        </div>
        <div className="delete">
          <AlertDialog
            size="small"
            clickedDelete={props.clickedDelete}
            variant="contained"
          >
            DELETE
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default TaskBlock;
