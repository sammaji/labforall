import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/Discussion.css";
import fetchDiscussions from "../utils/discussion/fetchDiscussions.util";
import setDiscussion from "../utils/discussion/setDiscussion.util";

const Message = ({ message, own }) => {
  const { displayName: name, text } = message;

  return (
    <li
      className={["discussion-message", own && "discussion-own-message"].join(
        " "
      )}
    >
      <h4 className="discussion-sender">{own ? "You" : name}</h4>
      <div>{text}</div>
    </li>
  );
};

const DiscussionRoom = () => {
  const { room } = useParams();
  const uid = window.localStorage.getItem("uid");

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const mssgs = fetchDiscussions(room, (mssg) => {
      setMessages(mssg);
    });
  }, []);

  const discussionContainerRef = React.useRef(null);

  const [sendMessage, setSendMessage] = React.useState("");

  React.useLayoutEffect(() => {
    if (discussionContainerRef.current)
      discussionContainerRef.current.scrollTop =
        discussionContainerRef.current.scrollHeight;
  });

  const handleNewMessage = (event) => {
    setSendMessage(event.target.value);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();

    setDiscussion(room, uid, sendMessage);
    setSendMessage("");
  };

  return (
    <div className="discussion">
      <form onSubmit={handleSendMessage} className="discussion-input-container">
        <input
          type="text"
          placeholder="Enter a thread"
          value={sendMessage}
          onChange={handleNewMessage}
          className="discussion-input"
          required
          minLength={1}
        />
        <button
          type="submit"
          disabled={sendMessage < 1}
          className="discussion-send-message"
        >
          Send
        </button>
      </form>
      <div className="discussion-list-container" ref={discussionContainerRef}>
        <ul className="discussion-list">
          {messages &&
            messages.map((x) => (
              <Message key={x.id} message={x} own={x.uid === uid} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscussionRoom;
