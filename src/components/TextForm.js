import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>
    {
      console.log("Uppercase clciked" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = ()=>
      {
        console.log("Uppercase clciked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
      }
      const handleClearClick = ()=>
        {
          let newText =' ';
          setText(newText);
          props.showAlert("text cleared","success");
        }
        const handleReverseText = ()=>
          {
            console.log("Uppercase clciked" + text);
            let newText = text.split("").reverse().join("");
            setText(newText);
            props.showAlert("text reversed","success");
          }
          const handleCopyText = ()=>
            {
            //   console.log("I am copied");
            //  var text = document.getElementById("myBox");
            //  text.select();
              navigator.clipboard.writeText(text);
              // document.getSelection().removeAllRanges();
              props.showAlert("Text copied","success");
            }
            const handleRemoveExtraSpaces = ()=>
              {
                let newText = text.split(/\s+/).join(" ");
               setText(newText)
               props.showAlert("Removed extra spaces","success");
              }
            
    const handleOnChange = (event)=>
      {
        console.log("Uppercase clciked");
        setText(event.target.value);
      }
      
  const [text,setText] = useState('');


  return (
    <>
    <div>
<div className="mb-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading}  </h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"  style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to upperecase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>cleartext</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleReverseText}>Reverse Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopyText}>Copy Text</button>
<button  disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
   <div className="container"></div>
     </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}  characters</p>
   <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
   <h2>Preview</h2>
   <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}