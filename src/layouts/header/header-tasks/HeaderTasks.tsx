import React, { useState } from "react";
import TaskItem from "./TaskItem";

export default function HeaderTasks() {
  const [tasks, setTasks] = useState([
    {
      subject: "Design some buttons",
      percentage: 20,
    },
    {
      subject: "Create a nice theme",
      percentage: 40,
    },
    {
      subject: "Some task I need to do",
      percentage: 60,
    },
    {
      subject: "Make beautiful transitions",
      percentage: 80,
    },
  ]);

  let progressBarColor: string;
  let taskList = tasks.map((taskDetails, iterator) => {
    if (taskDetails.percentage < 21) {
      progressBarColor = "progress-bar-red";
    } else if (taskDetails.percentage > 20 && taskDetails.percentage < 41) {
      progressBarColor = "progress-bar-yellow";
    } else if (taskDetails.percentage > 40 && taskDetails.percentage < 61) {
      progressBarColor = "progress-bar-green";
    } else if (taskDetails.percentage > 60) {
      progressBarColor = "progress-bar-aqua";
    }
    return (
      <TaskItem
        key={iterator}
        percentage={taskDetails.percentage}
        content={taskDetails.subject}
        theme={progressBarColor}
      />
    );
  });

  return (
    <li className="dropdown tasks-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-flag-o"></i>
        <span className="label label-danger">{tasks.length}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {tasks.length} tasks</li>
        <li>
          {/* inner menu: contains the actual data */}
          <div className="slimScrollDiv">
            <ul className="menu">{taskList}</ul>

            <div className="slimScrollBar"></div>
            <div className="slimScrollRail"></div>
          </div>
        </li>
        <li className="footer">
          <a href="#">View all tasks</a>
        </li>
      </ul>
    </li>
  );
}
