// @ts-nocheck
import { ArrowForward, ArrowForwardIosSharp, ArrowForwardOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import Terminal from './src/Terminal';


import hljs from "highlight.js";
import "highlight.js/styles/xt256.css";
import json from "highlight.js/lib/languages/json";
import { createRef, useEffect, useRef } from "react";
hljs.registerLanguage("json", json);
hljs.initHighlightingOnLoad();

const useStyles = makeStyles(theme=>({
  terminal: {
    display: "grid",
    width: "90vw",
    height: "78vh",
    placeContent: 'stretch',
    borderRadius:theme.shape.borderRadius,
    overflow:'hidden'
  },
  '@global':
  {
   
    '*::-webkit-scrollbar': {
        width: '0.4em'
      },
      '*::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,.1)',
        outline: '1px solid slategrey'
      }
  }
}));

const createMessageValue=(value)=>hljs.highlightAuto(value,['json']).value
const createMessageStatus=(value)=>hljs.highlightAuto('// '+value,['json']).value
const createError=(value)=> value.split('\n').map(s=>`<div><font color="red"> | ${s}</font></div>`).join("")
const createMessageError=(mes,color='red') => mes.split('\n').map(s=>s.match('error: .*')?.[0]||"").filter(s=>!!s.trim()).map(s=>`<div><font color="${color}">| ${s}</font></div>`).join("")


export default function TTerminal() {
  const classes = useStyles();
  const termref= useRef()
  var terminal;
  useEffect(()=>{
    terminal=termref.current;
    // var k=terminal.handleInput.bind(terminal)
    // terminal.handleInput=(event)=>{
    //   if(['Enter','ArrowUp','ArrowDown'].includes(event.key))return k(event)
    //   else{
    //       event.target.value=event.target.value//hljs.highlightAuto(JSON.stringify(event.target.value),['cpp']).value
    //       console.log(23)
    //   }
  // }
  })
 const commander=async (arg) =>{
    if (arg.result!==null)
      return
      try{
        // var terminal=termref.current
          var result=await (fetch('/run',
              {method:'post',
              headers:{'content-type':'application/json'},
              body:JSON.stringify({code:arg.rawInput})}));
              result=await result.json();
    
             if(typeof result=='string')
                result= createError(result)
            else if (result?.value !=undefined)
                result=createMessageValue(result.value)
            else if (result?.stderr !=undefined)
                result=createMessageError(result.stderr,'red')
            else if(result?.class !=undefined)
                result = createMessageStatus(result.class)
            else
                result=hljs.highlightAuto(JSON.stringify(result),['json']).value
      }catch(e)
      {
         result=`<font color="red">x ${e.message}</font>`
      }
    terminal.state.stdout.pop()
    terminal.pushToStdout(result)

}

  return (
    <div className={classes.terminal}>
      <Terminal
        noDefault
        dangerMode
        ref={termref}
        // terminalInput={a=>console.log(a)}
        commandCallback={commander}
        noAutomaticStdout
        // handleInput={inputHandler}
        styleEchoBack='textonly'
        welcomeMessage={"C++ Interpreter v1.1"}
        promptLabel={<ArrowForwardIosSharp></ArrowForwardIosSharp>}
        style={{backgroundColor:'rgba(0,0,0,0.8)'}}
        errorText="..executing"
      />
    </div>
  );
}
