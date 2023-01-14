import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/Discussion.css";
import fetchDiscussions from "../utils/discussion/fetchDiscussions.util";
import setDiscussion from "../utils/discussion/setDiscussion.util";

const SendButton = () => {
  return (
    <button className="send-button">
      <div class="svg-wrapper-1">
        <div class="svg-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
            ></path>
          </svg>
        </div>
      </div>
      <span>Send</span>
    </button>
  );
};

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
    <div className="discussion-room">
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
        {/* <button
          type="submit"
          disabled={sendMessage < 1}
          className="discussion-send-message"
        >
          Send
        </button> */}
        <SendButton />
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
