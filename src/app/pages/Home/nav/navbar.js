import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import TopNav from './topNav';

const Navbar = () => {
  return (
    <>
      <TopNav />
      <hr className='m-0 p-0' />
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <div className="col d-flex justify-content-start">
          <div className="navbar-brand">
            RealEstate
          </div>
        </div>

        {/* <div className="collapse navbar-collapse d-flex" id="navbarNav">*/}
        <div className="col d-flex justify-content-end">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link to="/#" className="nav-link mx-2">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link  mx-2">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link mx-2">
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#" className="nav-link mx-2">
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
    </>

  );
};

export default Navbar;
