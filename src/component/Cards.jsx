import React from 'react';

function Cards() {
  return (
    <div className="flex justify-center p-2 md:p-10">
      <div className="flex flex-wrap justify-center">
        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src="http://imsec.ac.in/images/faculty/1679978004sonali-mathur.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ms. Sonali Mathur</h2>
            <p>Professor and Head in the Department of Computer Science and Engineering at IMS Engineering College</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src="http://imsec.ac.in/images/faculty/1680066614rajan-sir.jpg" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Siddhi Nath</h2>
            <p>Twenty eight years of work experience in academics, industry & research institutions.</p>
            <div className="card-actions justify-end">
       
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src="http://imsec.ac.in/images/faculty/1679978032sonia-juneja.JPG" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ms. Sonia Juneja</h2>
            <p>Professor and Head in the Department of Computer Science at IMS Engineering College</p>
            <div className="card-actions justify-end">
      
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Cards;
