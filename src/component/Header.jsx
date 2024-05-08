import React from 'react';

function Header() {
  return (
    <>
      <div className="navbar bg-white-700 p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="font-bold text-white" href='http://imsec.ac.in/placements/placement-records' target='_blank'>Placements</a></li>
              <li>
                <a className="font-bold text-white">Campus</a>
                <ul className="p-2">
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/life-at-imsec' target='_blank'>Life@IMSEC</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/events' target='_blank'>Events</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/library' target='_blank'>Library</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/students-club' target='_blank'>Student Clubs</a></li>
                </ul>
              </li>
              <li><a className="font-bold text-white" href='http://imsec.ac.in/admissions/admission-procedure' target='_blank'>Admission</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold text-white">IMSEC</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a className="font-bold text-white" href='http://imsec.ac.in/placements/placement-records' target='_blank'>Placements</a></li>
            <li>
              <details>
                <summary className="font-bold text-white">Campus</summary>
                <ul className="p-2">
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/life-at-imsec' target='_blank'>Life@IMSEC</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/events' target='_blank'>Events</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/library' target='_blank'>Library</a></li>
                  <li><a className="font-bold text-white" href='http://imsec.ac.in/campus/students-club' target='_blank'>Student Clubs</a></li>
                </ul>
              </details>
            </li>
            <li><a className="font-bold text-white" href='http://imsec.ac.in/admissions/admission-procedure' target='_blank'>Admission</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-bold text-white" href='http://imsec.ac.in/about/contact-us' target='_blank'>Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Header;
