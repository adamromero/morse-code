import React, { useState, useEffect } from "react";
import {
   AppBar,
   TextField,
   Grid,
   Button,
   Typography,
   makeStyles
} from "@material-ui/core";

import { PlayArrow, Stop } from "@material-ui/icons";

import morseCode from "./morseCode";
import dot from "./audio/dot.mp3";
import dash from "./audio/dash.mp3";

const useStyles = makeStyles(theme => ({
   header: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2)
   },
   container: {
      textAlign: "center",
      overflow: "hidden"
   },
   content: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
   },
   button: {
      maxWidth: "8rem",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2)
   },
   form: {
      display: "flex",
      justifyContent: "center"
   },
   input: {}
}));

function App() {
   const [input, setInput] = useState("");
   const [message, setMessage] = useState("");
   const [code, setCode] = useState("");
   const dotSound = new Audio(dot);
   const dashSound = new Audio(dash);

   useEffect(() => {
      decode();
   });

   const decode = () => {
      let codeStr = "";
      for (let letter of message) {
         codeStr += morseCode[letter] ? `${morseCode[letter]} ` : " ";
      }
      setCode(codeStr);
   };

   const handleSubmit = e => {
      e.preventDefault();
      setMessage(input);
   };

   const handlePlay = () => {
      let i = 0;
      window.interval = setInterval(function() {
         const letter = code.charAt(i++);
         if (letter === ".") {
            dotSound.play();
         } else if (letter === "-") {
            dashSound.play();
         }
         if (i > code.length) {
            clearInterval(window.interval);
         }
      }, 1000);
   };

   const handleStop = () => {
      clearInterval(window.interval);
   };

   const classes = useStyles();

   return (
      <div className={classes.container}>
         <AppBar color="primary" position="static" className={classes.header}>
            <Typography variant="h6" component="h1">
               Morse Code
            </Typography>
         </AppBar>
         <Grid container spacing={3} className={classes.content}>
            <Grid item xs={12} spacing={0}>
               <form
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                  className={classes.form}
               >
                  <TextField
                     className={classes.input}
                     variant="outlined"
                     placeholder="Enter Message"
                     onChange={e => setInput(e.target.value)}
                  />

                  <Button
                     className={classes.button}
                     style={{ marginBottom: "0" }}
                     fullWidth={true}
                     type="submit"
                     variant="contained"
                     color="default"
                     onClick={handleSubmit}
                  >
                     Submit
                  </Button>
               </form>
            </Grid>
            <Grid item xs={12} spacing={10}>
               <Typography>Translate:</Typography>
            </Grid>
            <Grid item xs={12} spacing={10}>
               <Typography>{code}</Typography>
            </Grid>
            <Grid item xs={12} spacing={10}>
               <Button
                  className={classes.button}
                  fullWidth={true}
                  onClick={handlePlay}
                  variant="contained"
                  color="primary"
               >
                  <PlayArrow />
                  Play
               </Button>
               <Button
                  className={classes.button}
                  fullWidth={true}
                  onClick={handleStop}
                  variant="contained"
                  color="secondary"
               >
                  <Stop />
                  Stop
               </Button>
            </Grid>
         </Grid>
      </div>
   );
}

export default App;
