import React from 'react';
import logo from '../img/logo.webp'
function Stats() {
  return (
    <div className="flex justify-center items-center h-full overflow-x-hidden">
      <div className="stats flex flex-wrap justify-center">
  
        <div className="stat mb-6">
          <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
          </div>
          <div className="stat-title">Total Placements</div>
          <div className="stat-value text-primary">21,700+</div>
          <div className="stat-desc">and many more to place...</div>
        </div>
        
        <div className="stat mb-6">
          <div className="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <div className="stat-title">College Rank</div>
          <div className="stat-value text-white">110-140</div>
          <div className="stat-desc">By NAAC considration</div>
        </div>
        
        <div className="stat mb-6">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={logo} alt="Avatar" />
              </div>
            </div>
          </div>
          <div className="stat-value text-white"><a href="">86%</a></div>
          <div className="stat-title">Placement Rate</div>
          <div className="stat-desc ">Best faculty and Infrastruture</div>
        </div>
        
      </div>
    </div>
  );
}

export default Stats;
