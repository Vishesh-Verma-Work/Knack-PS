import React from 'react';

function CSE() {
  return (
    <div className="m-10 p-5 md:p-10 bg-blue">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="http://imsec.ac.in/images/event/16161513871.jpg" alt="About Us" className="rounded-lg shadow-lg w-full" />
        </div>
        <div className="md:w-1/2 p-5">
          <h2 className="text-2xl font-bold mb-4 text-white">Sports Clubs</h2>
          <p className="text-base text-white mb-4">
            Sports clubs play a pivotal role in fostering physical well-being, team spirit, and a sense of camaraderie among students within a college campus. At our institution, we pride ourselves on offering a diverse range of sports clubs catering to the varied interests and talents of our student body.
          </p>
          <p className="text-base text-white mb-4">
            Firstly, our sports clubs provide an avenue for students to engage in their favorite athletic activities, whether it's basketball, football, cricket, or badminton. These clubs not only encourage physical fitness but also serve as platforms for honing skills, competing in intercollegiate tournaments, and showcasing talents at regional and national levels.
          </p>
          <p className="text-base text-white">
            Moreover, our sports clubs promote inclusivity and diversity by welcoming students of all skill levels, from beginners to seasoned athletes. Through regular training sessions, friendly matches, and participation in sports events, students have the opportunity to develop teamwork, leadership, and sportsmanship qualities, essential for personal growth and success beyond the college environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CSE;
