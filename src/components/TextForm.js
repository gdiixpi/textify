import React, {useState} from "react";
import { FaClipboard } from "react-icons/fa";
import ReactTooltip from 'react-tooltip';



export default function TextForm(props){

    const handleBtnUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleBtnLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleBtnClearClick = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleBtnFlClick = ()=>{
        let re = /(^|[.!?]\s+)([a-z])/g;
        let newText = text.replace(re, function(m, $1, $2){
            return $1+ $2.toUpperCase();
        });
        setText(newText);
    }

    const handleBtnReClick = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (Event)=>{
        setText(Event.target.value);
    }

    const handleCopy = ()=>{
        try {
            navigator.clipboard.writeText(text);

          } catch (err) {
            console.error('Failed to copy: ', err);
          }
    }

    const [text, setText] = useState('Enter text here...');

    let theme = (props.mode).toString();

    return(
        <>
        <div className={`text-container ${theme}`}>
            <textarea className="input" id="my-box" value={text} onChange={handleOnChange} rows="12" cols="150"></textarea>
            <div className="clip">
                <button disabled={text.length===0} className="copy-btn" onClick={handleCopy} data-tip="Copy Text" ><FaClipboard /></button>
                <ReactTooltip place="bottom" type="dark" effect="solid" />
            </div>
            <div className="btns">
                <button disabled={text.length===0} className="convert-btn" onClick={handleBtnUpClick}>Covert to Uppercase</button>
                <button disabled={text.length===0} className="convert-btn" onClick={handleBtnLoClick}>Covert to Lowercase</button>
                <button disabled={text.length===0} className="convert-btn" onClick={handleBtnFlClick}>Capitalization</button> 
                <button disabled={text.length===0} className="convert-btn" onClick={handleBtnReClick}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="convert-btn" onClick={handleBtnClearClick}>Clear Text</button>
            </div>
        </div>
        <div className={`text-container ${theme}`}>
            <h1>Your text summary</h1>
            <div className={`summary-container ${theme}`}>
                <h3>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</h3>
                <h3>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read</h3>
            </div>
        </div>
        <div className={`text-container ${theme}`}>
            <h1>Preview</h1>
            <div className={`preview-container ${theme}`}>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </div>
        </>
    )

}