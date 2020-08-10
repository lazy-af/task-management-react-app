import React, { useState } from "react";
import "./TaskModal.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button, TextField } from "@material-ui/core";
import classes from "../../DateTimePicker";



//Actual Component
const TaskModal = (props) => {
  const [work, setWork] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  //Getting Current Date and Time
  let today = new Date();
  let date =
  today.getFullYear() +
  "-" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + today.getDate()).slice(-2);
  let time =
  ("0" + today.getHours()).slice(-2) +
  ":" +
  ("0" + (today.getMinutes())).slice(-2);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const workChangeHandler = (e) => {
    let currentWork = e.target.value;
    setWork(currentWork);
  };

  const dateAndTimeChangeHandler = (e) => {
    let time = e.target.value.slice(11, 16);
    let date = e.target.value.slice(0, 10);
    setCurrentTime(time);
    setCurrentDate(date);
  };
  return (
    <div className="text-modal">
      <div onClick={props.close} className="close">
        <CloseIcon />
      </div>
      <form onSubmit={submitHandler} className={classes.container} noValidate>
        <div className="text-field-work">
          <TextField
            onChange={workChangeHandler}
            id="standard-basic"
            label="Work to be done?"
            value={work}
          />
        </div>
        <div className="date-time-setter">
          <TextField
            id="datetime-local"
            label="Deadline"
            type="datetime-local"
            defaultValue={`${date}T${time}`}
            className={classes.textField}
            onChange={dateAndTimeChangeHandler}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="form-button">
          <Button onClick={() => props.clickedOk(date, currentDate, time, currentTime, work)} type="submit" variant="contained" color="primary">
            OK
          </Button>
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
