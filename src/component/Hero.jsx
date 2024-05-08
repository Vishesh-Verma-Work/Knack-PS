import React from 'react';

function Hero() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/proxy/2zRSCARPMnKYCmi6DCFfjgJlmvfIg8BB98n_ooF8iIq-gZzuqMzPW-GCt8-_oVFU685f5JRbnoqb2AyWdbSghRnaZ78vzoPlpkEh4shlbg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">IMSEC</h1>
          <p className="mb-5 text-white">Discover the pinnacle of engineering education in Delhi NCR at our college. Renowned for excellence, we offer state-of-the-art facilities, expert faculty, and a dynamic learning environment.</p>
          <button className="btn btn-white bg-white text-black hover:text-black hover:bg-white hover:border-transparent"><a href="http://www.imsec.ac.in/" target='_blank' className="font-bold">Explore It</a></button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
