import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './navhero.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLocationArrow, FaAward, FaHome} from 'react-icons/fa';


const NavHero = () => {
  return (
    <>
      {/* THIS IS THE TOP NAVBAR */}
      <div className="container pt-3">
        <div className="row">
          <div className="col d-flex justify-content-start">
            <div className="d-flex">
              <p className="mx-2  text-light"><FaAward /> alihassan@gmail.com</p>
              <p className="mx-2  text-light"><FaLocationArrow /> 15/A, Nest Tower, NYC</p>
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="d-flex">
              <p className="mx-2  text-light"><FaTwitter /></p>
              <p className="mx-2  text-light"><FaFacebook /></p>
              <p className="mx-2  text-light"><FaInstagram /></p>
            </div>
          </div>
        </div>
      </div>
      <hr className='p-0 m-0'/>






      {/* THIS IS THE Main NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light  mt-2 container">
        <div className="col d-flex justify-content-start">
          <div className="navbar-brand text-light fs-3 fw-bolder">
            RealEstate
          </div>
        </div>
        <div className="col d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/#" className="nav-link mx-2 text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link  mx-2  text-light">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link mx-2  text-light">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link mx-2  text-light">
                Contact
              </Link>
            </li>
            <li className="nav-item ">
              <Button variant="primary" className='mx-2'>
                Add Listing
              </Button>
            </li>
          </ul>
        </div>
      </nav>





      {/* THIS IS HERO SECTION */}
      <div className='conatiner p-4 mt-5 '>
        <div className='d-flex justify-content-center text-center text-light fw-bold'>
          <p><FaHome /> REAL ESTATE AGENCY</p>
        </div>
        <div className='d-flex justify-content-center text-center text-light fw-bolder'>
          <h1 id='hero-h1'>Find Your Dream <br />Land By Us</h1>
        </div>
        <div className='d-flex justify-content-center text-center text-light pt-4'>
          <p id='hero-p'>Lorem is simply dummy text of the printing and typesetting industry. Lorem Ipsum has <br/>been the industry's standard dummy text ever since the 1500s</p>
        </div>
        <div className='d-flex justify-content-center '>
          <Button variant="primary" className='mx-2 fs-4 m-3'>
            Make An Equity
          </Button>
        </div>
      </div>
    </>

  );
};

export default NavHero;
