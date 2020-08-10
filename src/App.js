import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import EmptyTaskPage from "./components/EmptyTaskPage/EmptyTaskPage";
import NonEmptyTaskPage from "./components/NonEmptyTaskPage/NonEmptyTaskPage";
import TaskModal from "./components/TaskModal/TaskModal";
import AboutModal from "./components/AboutModal/AboutModal";

function format(inputDate) {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    // Months use 0 index.
    return (
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      ("0" + date.getDate()).slice(-2) +
      "/" +
      date.getFullYear()
    );
  }
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [addClicked, setAddClicked] = useState(false);
  const [about, setAbout] = useState(false);
  let body = null;
  const modalClickHandler = () => {
    setAddClicked(true);
  };

  const closeModalHandler = () => {
    setAddClicked(false);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const userClickHandler = () => {
    setAbout(true);
  };

  const closeAboutModalHandler = () => {
    setAbout(false);
  };

  const dateAndTimeHandler = (curDate, entDate, curTime, entTime, work) => {
    let dateAdded = new Date(
      format(entDate).toString() + " " + entTime.toString()
    );
    let seconds = Math.abs(dateAdded.getTime() - new Date().getTime()) / 1000;
    setTasks((prevValues) => {
      return [
        ...prevValues,
        {
          id: Math.random(),
          dateNow: curDate,
          dateEntered: format(entDate),
          timeNow: curTime,
          timeEntered: entTime,
          workTitle: work,
          seconds: seconds,
        },
      ];
    });
    setAddClicked(false);
  };

  if (tasks.length === 0) {
    body = addClicked ? (
      <TaskModal close={closeModalHandler} clickedOk={dateAndTimeHandler} />
    ) : (
      <EmptyTaskPage clicked={modalClickHandler} />
    );
  } else {
    body = addClicked ? (
      <TaskModal close={closeModalHandler} clickedOk={dateAndTimeHandler} />
    ) : (
      <NonEmptyTaskPage clickedDelete={deleteTask} tasks={tasks} />
    );
  }
  return !about ? (
    <div className="App" style={{ overflow: "hidden" }}>
      <Navbar addClicked={modalClickHandler} userClicked={userClickHandler} />
      <div
        style={
          addClicked || tasks.length === 0
            ? {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }
            : {}
        }
      >
        {body}
      </div>

      <Footer />
    </div>
  ) : (
    <AboutModal closeAboutModal={closeAboutModalHandler} />
  );
}

export default App;
