import { useEffect, useRef } from "react";
import io from "socket.io-client";

export function VideoChat() {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();
  let localStream;

  useEffect(() => {
    const socket = io("/video-chat");

    socket.on("connect", () => {
      console.log("Connected to video chat namespace");
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          localStream = stream;
          localVideoRef.current.srcObject = stream;
          // Emit join-room event to the server
          socket.emit("join-room", socket.id);
        })
        .catch((error) => {
          console.error("Error accessing media devices:", error);
        });
    });

    socket.on("user-connected", (userId) => {
      // Handle remote video stream
      const peerConnection = new RTCPeerConnection();
      localStream.getTracks().forEach((track) => {
        peerConnection.addTrack(track, localStream);
      });
      peerConnection
        .createOffer()
        .then((offer) => peerConnection.setLocalDescription(offer))
        .then(() => {
          socket.emit("offer", userId, peerConnection.localDescription);
        });

      peerConnection.ontrack = (event) => {
        remoteVideoRef.current.srcObject = event.streams[0];
      };
    });
  }, []);

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline />
      <video ref={remoteVideoRef} autoPlay playsInline />
    </div>
  );
}

export default VideoChat;
