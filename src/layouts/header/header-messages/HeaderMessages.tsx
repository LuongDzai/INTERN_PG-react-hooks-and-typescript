import React, { useState } from "react";
import MessageItem from "./MessageItem";

export default function HeaderMessages() {
  const [messages, setMessages] = useState([
    {
      title: "Support Team",
      displayPicture: "dist/img/user2-160x160.jpg",
      content: "Why not buy a new awesome theme?",
      time: "5 mins",
    },
    {
      title: "AdminLTE Design Team",
      displayPicture: "dist/img/user3-128x128.jpg",
      content: "Why not buy a new awesome theme?",
      time: "2 hours",
    },
    {
      title: "Developers",
      displayPicture: "dist/img/user4-128x128.jpg",
      content: "Why not buy a new awesome theme?",
      time: "Today",
    },
    {
      title: "Sales Department",
      displayPicture: "dist/img/user3-128x128.jpg",
      content: "Why not buy a new awesome theme?",
      time: "Yesterday",
    },
    {
      title: "Reviewers",
      displayPicture: "dist/img/user4-128x128.jpg",
      content: "Why not buy a new awesome theme?",
      time: "2 days",
    },
  ]);

  const messageList = messages.map((messageDetails, iterator) => {
    return (
      <MessageItem
        key={iterator}
        title={messageDetails.title}
        displayPicture={messageDetails.displayPicture}
        time={messageDetails.time}
        content={messageDetails.content}
      />
    );
  });

  return (
    <li className="dropdown messages-menu">
      <a href="#" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-envelope-o"></i>
        <span className="label label-success">{messages.length}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {messages.length} messages</li>
        <li>
          {/* inner menu: contains the actual data */}
          <div className="slimScrollDiv">
            <ul className="menu">{messageList}</ul>

            <div className="slimScrollBar"></div>
            <div className="slimScrollRail"></div>
          </div>
        </li>
        <li className="footer">
          <a href="#">See All Messages</a>
        </li>
      </ul>
    </li>
  );
}
