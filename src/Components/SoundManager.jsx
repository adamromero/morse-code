import React, { useState, useEffect } from "react";
import morseCode from "../morseCode";
import dot from "../audio/dot.mp3";
import dash from "../audio/dash.mp3";

const useAudio = url => {
   const [audio] = useState(new Audio(url));
   const [playing, setPlaying] = useState(false);

   const toggle = () => setPlaying(!playing);

   useEffect(() => {
      playing ? audio.play() : audio.pause();
   }, [playing]);

   useEffect(() => {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
         audio.removeEventListener("ended", () => setPlaying(false));
      };
   }, []);

   return [playing, toggle];
};

function SoundManager({ message }) {
   const [playingDot, toggleDot] = useAudio(dot);
   const [playingDash, toggleDash] = useAudio(dash);

   const handlePlay = () => {
      console.log("play");
   };

   const handlePause = () => {
      console.log("pause");
   };

   const handleStop = () => {
      console.log("stop");
   };

   return (
      <div>
         <button onClick={handlePlay}>Play</button>
      </div>
   );
}

export default SoundManager;
