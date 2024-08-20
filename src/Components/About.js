import React from 'react'

export default function About(props) {

    return (
        <>
            <div className="container-fluid">
                <div className="accordion " id="accordionExample" style={props.stylee}>
                    <div className="accordion-item" style={props.stylee}>
                        <h2 className="accoirdian-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-controls="collapseOne" style={props.stylee}>
                                About
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" style={props.stylee}>
                            <div className="accordion-body" style={props.stylee}>
                                Text Utils is a simple yet powerful text manipulation tool built using React. This app was designed to provide users with various utilities to enhance their text processing capabilities. Whether you need to quickly convert text cases, count words, or clean up your content, Text Utils has got you covered. 
                                <br /> Connect me on LinkedIn : <a href="https://www.linkedin.com/in/nofal-hassaan-421354296" target='blank'>My Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
