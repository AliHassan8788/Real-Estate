import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLocationArrow, FaAward } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const TopNav = () => {
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    <div className="col d-flex justify-content-start">
                        <div className="d-flex">
                            <p className="mx-2"><FaAward /> alihassan@gmail.com</p>
                            <p className="mx-2"><FaLocationArrow /> 15/A, Nest Tower, NYC</p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className="d-flex">
                            <p className="mx-2"><FaTwitter /></p>
                            <p className="mx-2"><FaFacebook /></p>
                            <p className="mx-2"><FaInstagram /></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopNav;