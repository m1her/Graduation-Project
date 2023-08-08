import React, { useEffect, useState } from "react";

export const Room = () => {
  const [activeMemberContainer, setActiveMemberContainer] = useState(false);
  const [activeChatContainer, setActiveChatContainer] = useState(false);

  useEffect(() => {
    const memberContainer = document.getElementById("members__container");
    const memberButton = document.getElementById("members__button");

    const chatContainer = document.getElementById("messages__container");
    const chatButton = document.getElementById("chat__button");

    const handleMemberButtonClick = () => {
      if (activeMemberContainer) {
        memberContainer.style.display = "none";
      } else {
        memberContainer.style.display = "block";
      }

      setActiveMemberContainer(!activeMemberContainer);
    };

    const handleChatButtonClick = () => {
      if (activeChatContainer) {
        chatContainer.style.display = "none";
      } else {
        chatContainer.style.display = "block";
      }

      setActiveChatContainer(!activeChatContainer);
    };

    memberButton.addEventListener("click", handleMemberButtonClick);
    chatButton.addEventListener("click", handleChatButtonClick);

    // return () => {
    //   memberButton.removeEventListener("click", handleMemberButtonClick);
    //   chatButton.removeEventListener("click", handleChatButtonClick);
    // };
  }, [activeMemberContainer, activeChatContainer]);

  return (
    <div>
      {/* Head */}
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Room</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="styles/main.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="styles/lobby.css"
        />
      </head>
      {/* Body */}
      <body>
        <header id="nav">
          <div class="nav--list">
            <a href="lobby.html">
              <h3 id="logo">
                <img src="./images/logo.png" alt="Site Logo" />
                <span>Mumble</span>
              </h3>
            </a>
          </div>

          <div id="nav__links">
            <a class="nav__link" href="/">
              Lobby
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ede0e0"
                viewBox="0 0 24 24"
              >
                <path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" />
              </svg>
            </a>
            <a class="nav__link" id="create__room__btn" href="lobby.html">
              Create Room
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#ede0e0"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
              </svg>
            </a>
          </div>
        </header>

        <main id="room__lobby__container">
          <div id="form__container">
            <div id="form__container__header">
              <p>👋 Create or Join Room</p>
            </div>

            <form id="lobby__form">
              <div class="form__field__wrapper">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your display name..."
                />
              </div>

              <div class="form__field__wrapper">
                <label>Room Name</label>
                <input
                  type="text"
                  name="room"
                  required
                  placeholder="Enter room name..."
                />
              </div>

              <div class="form__field__wrapper">
                <button type="submit">
                  Go to Room
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </main>
      </body>
      <script type="text/javascript" src="js/lobby.js"></script>
    </div>
  );
};

export default Room;
