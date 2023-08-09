import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

export const MeetingCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "a15dd6a7cee544a09b6f300e4bc6f29d",
    channel: "test", // your agora channel
    token: null, // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{ display: "flex", width: "70vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default MeetingCall;
