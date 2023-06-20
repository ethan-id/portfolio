'use client';

import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OffCanvas = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-link text-white' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                     className="bi bi-list"
                     viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Body as='ul' className='d-flex flex-column justify-content-around m-5'>
                    <a className='h1 fw-light pb-4'>Home</a>
                    <a className='h1 fw-light pb-4' href='#projects'>Projects</a>
                    <a className='h1 fw-light pb-4'>Contact</a>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default OffCanvas;
