import React, { useRef, useState } from "react";
import { Container, Layout } from "./style";
import SadGirl from "../../assets/SadGirl.svg";
import Footer from '../../Components/Frontend/Footer/Footer'
import HeaderCreator from "../../Components/Frontend/Header/HeaderCreator";
import Peer from "peerjs";
// const peer =() =>{(undefined, {
//   host: "localhost",
//   secure: false,
//   port: 5000,
//   path: "peerjs/kingaspx",
// });}
const peer = new window.Peer(undefined, {
  host: "localhost",
  secure: false,
  port: 5000,
  path: "peerjs/kingaspx",
});

//  const peer = new Peer(undefined,{
//   host: "localhost",
//   secure: false,
//   port: 5000,
//   path: "/peerjs/kingaspx",
// });


const createEmptyAudioTrack = () => {
  const ctx = new AudioContext();
  const oscillator = ctx.createOscillator();
  const dst = oscillator.connect(ctx.createMediaStreamDestination());
  oscillator.start();
  const track = dst.stream.getAudioTracks()[0];
  return Object.assign(track, { enabled: false });
};

const createEmptyVideoTrack = ({ width, height }) => {
  const canvas = Object.assign(document.createElement("canvas"), {
    width,
    height,
  });
  canvas.getContext("2d").fillRect(0, 0, width, height);

  const stream = canvas.captureStream();
  const track = stream.getVideoTracks()[0];

  return Object.assign(track, { enabled: false });
};

const audioTrack = createEmptyAudioTrack();
const videoTrack = createEmptyVideoTrack({ width: 640, height: 480 });
const mediaStream = new MediaStream([audioTrack, videoTrack]);

function Home() {
  const [isStreaming, setIsStreaming] = useState(false);
  const [isStreamer, setIsStreamer] = useState(false);
  const [streamerCode, setStreamerCode] = useState(null);
  const [globalStream, setGlobalStream] = useState(null);
  const [id, setId] = useState(null);
  const videoGrid = useRef(null);
  const myVideo = document.createElement("video");
  myVideo.muted = true;

  peer.on("open", (id) => {
    console.log(id);
    setId(id);
  });

  async function addVideoStream(video, stream) {
    try {
      let div = document.getElementById("video-grid");
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
    } catch (error) {}

    video.srcObject = stream;
    video.addEventListener("loadedmetadata", () => {
      video.play();
    });

    try {
      videoGrid.append(video);
    } catch (error) {
      videoGrid.current.append(video);
    }
  }

  async function startStream() {
    window.navigator.getMedia =
      window.navigator.getUserMedia ||
      window.navigator.webkitGetUserMedia ||
      window.navigator.mozGetUserMedia ||
      window.navigator.msGetUserMedia;

    window.navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((stream) => {
        addVideoStream(myVideo, stream);
        setGlobalStream(stream);
        setIsStreaming(true);
        setIsStreamer(true);

        peer.on("call", (call) => {
          call.answer(stream);
        });
      });
    }

    async function stopStream() {
      globalStream.getTracks().forEach(function (track) {
        if (track.readyState === "live") {
          console.log("Entrou no if");
          track.stop();
        }
      });
  
      setIsStreaming(false);
      setIsStreamer(false);
      // window.navigator.mediaDevices.destroy;
  
  
      let div = document.getElementById("video-grid");
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }
    }
  
    async function receiveStream() {
        const call = peer.call(streamerCode, mediaStream);
  
      const video = document.createElement("video");
      call.on("stream", (userVideoStream) => {
        addVideoStream(video, userVideoStream);
        setIsStreaming(true);
      });
    }
  
    return (
      <>
        <HeaderCreator/>
      <Layout>
       
        <Container>
          <div style={{ display: "flex" }}>
            {!isStreaming ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  receiveStream();
                }}
              >
                <input
                  id="textarea"
                  autoComplete={'off'}
                  textAlign="center"
                  placeholder="Enter the streamer code here and press ENTER"
                  value={streamerCode}
                  onChange={(e) => setStreamerCode(e.target.value)}
                />
              </form>
            ) : null}
          </div>
  
          
           
  
            <div></div>
         
  
          {!isStreaming ? (
            <div
              className="offlineLive"
              style={{
                
              
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
               
              }}
            >
              <img src={SadGirl} draggable={"false"} center />
              {/* <h1>There are no active feeds at the moment...</h1>
              <h3>
              Start a broadcast or join one by typing in the field above.
              </h3> */}
            </div>
          ) : null}
  
          <div id="video-grid" ref={videoGrid} />
  
          <div className="streamer-data">
            <div>
              <h1>{id}</h1>
              <h3>Streaming ID </h3>
            </div>
  
            <div></div>
          </div>
  
          <div className="bottom-section">
            {!isStreaming ? (
              <button id="start-stream" onClick={() => startStream()}>
                
                 Start streaming
              </button>
            ) : isStreamer ? (
              <button id="start-stream" onClick={() => stopStream()}>
                Stop streaming
              </button>
            ) : null}
          </div>
        </Container>
      </Layout>
      <Footer/>
      </>
    );
  }
  
  export default Home;