import React from 'react';
import './Signup.css';
import mapImage from './mapImg.png';

export default function Singup() {
    return (
        <div id='signup-landing-page'>
            <h1>Sample Text with one line message</h1>
            <div id='signup-box'>
                <p id="heading">Partner  Registration</p>
                <hr />
                <div id='partner-registraion'>
                    <div id='left'>
                        <p>Partner Details</p>
                        <p>Owner Details</p>
                        <p>Food Safety Licence</p>
                        <p>Bank Details</p>
                    </div >
                    <div id='registration-details'>
                        <div id='middle'>
                            <p>Name<span>*</span></p>
                            <input type='text' placeholder='Enter your Name'></input>
                            <p>Profile Partner<span>*</span></p>
                            <input type='file'></input>
                            <p>Description<span>*</span></p>
                            <input type='text-' placeholder='Enter your Name'></input>
                            <p>city<span>*</span></p>
                            <input type='text-' placeholder='Enter your Name'></input>
                            <p>Cooking Time <span>*</span></p>
                            <input type='text-' placeholder='Enter your Name'></input>
                            <p>Search Location<span>*</span></p>
                            <input type='text-' placeholder='Enter your Name'></input>
                            <img src={mapImage} alt='/' />
                        </div>
                        <div id="right">
                            <p>Type<span>*</span></p>
                            <input type='text-' placeholder='Enter your Name'></input>
                            <div id='working-days'>
                                <div id='day'><p >sunday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Monday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Tuesday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Wednesday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Thursday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Friday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>
                            <div id='working-days'>
                                <div id='day'><p >Saturday</p></div><hr />
                                <p>-:-</p><hr />
                                <p>to</p><hr />
                                <p>-:-</p><hr />
                                <input type='checkbox' />
                                <p>Open</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
