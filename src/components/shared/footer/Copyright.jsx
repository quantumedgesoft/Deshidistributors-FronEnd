import React from 'react';
import { Link } from 'react-router';

const Copyright = () => {
  return (
    <footer>
      <div className="container-fluid copyright py-4" style={{backgroundColor: "#000"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="text-light">
                <a href="/">
                  <i className="fas fa-copyright text-light me-2"></i>Deshidistributors
                </a>, All rights reserved.
              </span>
            </div>
            <div className="col-md-6 my-auto text-center text-md-end text-white">
              Designed By <Link className="border-bottom" target='blank' to="https://quantumedgesoftware.com/">QuantumEdge Software INC</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Copyright;