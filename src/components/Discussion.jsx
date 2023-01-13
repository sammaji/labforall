import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../assets/css/Discussion.css";

const rooms = [
  { id: "general", title: "💬 General 💬" },
  { id: "biology", title: "🦠 Biology 🦠" },
  { id: "chemistry", title: "🧪 Chemistry 🧪" },
  { id: "physics", title: "🚀 Physics 🚀" },
];

const Discussion = () => {
  const navigate = useNavigate();

  return (
    <div className="discussion">
      <h2>Choose a Room</h2>
      <ul className="room-list">
        {rooms.map((room) => (
          <li
            key={room.id}
            onClick={() => {
              navigate(room.id);
            }}
          >
            <span to={`/discussion/${room.id}`}>{room.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discussion;
