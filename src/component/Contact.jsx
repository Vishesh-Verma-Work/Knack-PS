import React from "react";

function ContactUs() {
  return (
    <>
      <div className="mt-10 sm:mx-auto sm:w-4/5 sm:max-w-screen-md m-10">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white">
              Your Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-white placeholder-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:leading-5 bg-blue px-4"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-white placeholder-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:leading-5 bg-blue px-4"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium leading-6 text-white">
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm py-2 text-white placeholder-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm sm:leading-5 bg-blue px-4"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex justify-center w-full rounded-md bg-indigo-600 text-white py-3 text-sm font-semibold shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-100 focus:outline-none focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      
      <br /><br /><br /><br />
    </>
  );
}

export default ContactUs;
