import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    let a = document.querySelectorAll('.textButton');
    a.forEach((e) => {
        e.onclick = () => {
            if (!text) props.showAlert('Please Enter Text', 'danger');
        }
    })
    let toUpperCase = () => {
        if (text) {
            setText(text.toUpperCase())
            props.showAlert('converted to Upper Case', 'success');
        }

    }
    let toLowerCase = () => {
        if (text) {
            setText(text.toLowerCase())
            props.showAlert('converted to Lower Case', 'success');
        }
    }
    let clearText = () => {
        if (text) {
            setText("")
            props.showAlert('Text Cleared', 'success');
        }
    }
    let copyText = () => {
        if (text) {
            let text = document.querySelector("#box");
            text.select();
            // navigator.clipboard.writeText(text.value)
            document.execCommand('copy')
            props.showAlert('Text Copied to Clipboard', 'success');
        }
    }
    let extraSapce = () => {
        if (text) {
            let Text = document.querySelector("#box");
            let space = []
            for (let i = 0; i < Text.value.length; i++) {
                let newText = Text.value.charAt(i);
                if (!(newText === ' ')) {
                    space.push(Text.value.charAt(i))
                } else if (newText === ' ' && Text.value.charAt(i + 1) !== ' ') {
                    space.push(' ')
                }
            }
            setText(space.join(''))
            props.showAlert('Extra Spaces Removed', 'success');
        }
    }

    let change = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className='container-fluid' style={props.stylee}>
                <div className="container" style={props.stylee}>
                    <div className="mb-3">
                        <h1> {props.heading}</h1>
                        <textarea className="form-control mb-3" onChange={change} value={text} rows="3" id='box' placeholder='Enter Text Here' style={props.stylee}></textarea>
                        <div className="container-fluid">
                            <button className={`textButton btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={toUpperCase}>Convert To Upper Case </button>
                            <button className={`textButton btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={toLowerCase}>Convert To Lower Case </button>
                            <button className={`textButton btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={extraSapce}>Remove Extra Space </button>
                            <button className={`textButton btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={copyText}>Copy Text </button>
                            <button className={`textButton btn btn-${props.mode === 'dark' ? 'light' : 'dark'} mx-3 my-3`} onClick={clearText}>Clear Text </button>
                        </div>
                        <br /><br />
                    </div>
                </div>
                <div className="container" style={props.stylee}>
                    <h3 className='my-3'>Your Text Summary</h3>
                    <p>{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
                    </p>
                    <p>{text.split(' ').length === 1 ? 0 : 0.008 * text.split(" ").length} Minutes to read </p>
                    <h4>Preview</h4>
                    <div className="container">
                        <p id='prev' className='container ' style={props.stylee}>{text} </p>
                    </div>
                </div>
            </div>
        </>

    )
}
