import React from 'react'

function Campus() {
  return (
    <div className="m-10 p-5 md:p-10 bg-blue">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 p-5">
          <h2 className="text-2xl font-bold mb-4 text-white">Sports Clubs</h2>
          <p className="text-base text-white mb-4">
          Life @ IMSEC is hectic but full of fun and learning. It is a training ground for students which prepares them to handle the difficult and complex schedules of the corporate with ease.
          </p>
          <p className="text-base text-white mb-4">
          IMSEC believes and strives towards an all-round development of its students. There are strict and rigorous academic schedules and activities on one end of the continuum whereas fun and frolic, enjoyment and amusement form the other end of the continuum of activities in the college.
          </p>
          
        </div>
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="http://imsec.ac.in/assets/images/lifeimsec/new/celebrities/6.jpg" alt="About Us" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  )
}

export default Campus