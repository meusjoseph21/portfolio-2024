"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-[10rem] md:my-[20rem] py-8 gap-4 relative"
    >

      <div className="z-10">
        <h5 className="text-xl font-bold text-slate-200 my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-slate-200 mb-4 max-w-md">
          {" "}
          I&apos;m always looking to learn about new opportunities, my inbox is
          always open. Whether you have a question or just want to say hi,
          I&apos;ll get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <a href="https://github.com/meusjoseph21" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} color="#F3FCF0" /> {/* Set size and color as needed */}
          </a>
          <a href="https://www.linkedin.com/in/joseph-meus/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} color="#F3FCF0" /> {/* Set size and color as needed */}
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-slate-200 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-slate-200 block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-slate-200 block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-slate-200 block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#540D6E] text-slate-200 font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
