import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("uppercase cliked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Uppercase","success");
    }

    const handleLoClick = () => {
        // console.log("uppercase cliked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        // console.log("uppercase cliked" + text);
        let newText = '';
        setText(newText);
    }

    const handleWhitespaceClick = () => {
        let newText = text.replace(/\s/g, '')
        setText(newText)
    }

    const handleOnChange = (event) => {
        // console.log("On changed");
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter your text");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }} onChange={handleOnChange} value={text} id="mybox" cols="30" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-info mx-2" onClick={handleWhitespaceClick}>Remove Whitespace</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear All</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview Text</h2>
                <p>{text.length > 0 ? text : "Please enter text for preview"}</p>
            </div>
        </>
    )
}
