import React, { useState } from 'react';

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
//for button
    const [btnText, setBtntext] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if(mystyle.color === 'black') {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border:'1px solid white'
            })
            setBtntext("Enable Light Mode")
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtntext("Enable Dark Mode")

        }
    }


    return (
        <div className='container' style={mystyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div>
        </div>
    )
}
