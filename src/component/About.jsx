import React from 'react';

function About() {
  return (
    <div className="m-5 md:m-10 p-5 md:p-10 bg-blue">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-4 text-white">About Us</h2>
          <p className="text-base text-white mb-4">
            Located in the industrial city of Ghaziabad, IMS Engineering College is known for quality technical and management education, centres of excellence, innovative teaching pedagogy, discipline, and other creative efforts.
          </p>
          <p className="text-base text-white mb-4">
            IMSEC Ghaziabad stands as a premier institution among Engineering colleges in North India, distinguished for its commitment to delivering high-quality technical and management education and ensuring 100% employability for its students. The Institution's stellar achievements underscore its dedication to academic and research excellence.
          </p>
          <p className="text-base text-white">
            IMSEC is NAAC Accredited for maintaining world-class quality in Education & Infrastructure and one of its courses, B.Tech. (Information Technology) is NBA accredited up to 2024.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="http://imsec.ac.in/assets/images/lifeimsec/new/Teaching-And-Learning/3.jpg" alt="About Us" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>
    </div>
  );
}

export default About;
