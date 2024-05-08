import React from 'react';
import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpeg'


function Cards() {
  return (
    <div className="flex justify-center p-2 md:p-10">
      <div className="flex flex-wrap justify-center">
        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src={card1} alt="xyz" /></figure>
          <div className="card-body">
            <h2 className="card-title">Ms. Sonali Mathur</h2>
            <p>Professor and Head in the Department of Computer Science and Engineering at IMS Engineering College</p>
            <div className="card-actions justify-end">
              
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src={card2} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">Dr. Siddhi Nath</h2>
            <p>Twenty eight years of work experience in academics, industry & research institutions.</p>
            <div className="card-actions justify-end">
       
            </div>
          </div>
        </div>

        <div className="card w-full sm:w-1/2 md:w-1/4 lg:w-1/4 bg-base-100 shadow-xl m-2">
          <figure><img src={card3} alt="Shoes" /></figure>
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
