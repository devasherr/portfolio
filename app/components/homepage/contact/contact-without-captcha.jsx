"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import emailjs from "@emailjs/browser";

function ContactWithoutCaptcha() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = () => {
    const { name, email, message } = userInput;
    let errorObj = { name: "", email: "", message: "" };

    if (!name) {
      errorObj.name = "Name is required";
    }
    if (!email) {
      errorObj.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errorObj.email = "Invalid email format";
    }
    if (!message) {
      errorObj.message = "Message is required";
    }

    setError(errorObj);

    return !errorObj.name && !errorObj.email && !errorObj.message;
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Validate user input before proceeding
    if (!validateInput()) {
      return;
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const options = { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY };

    try {
      const res = await emailjs.send(serviceID, templateID, userInput, options);
      if (res.status === 200) {
        setUserInput({
          name: "",
          email: "",
          message: "",
        });
        setMessageSent(true);
        setErrorMessage(""); // clear errors if message is successfully sent
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              value={userInput.name}
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={validateInput}
            />
            {error.name && <p className="text-red-500 text-sm">{error.name}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              value={userInput.email}
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={validateInput}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              rows="4"
              value={userInput.message}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={validateInput}
            />
            {error.message && (
              <p className="text-red-500 text-sm">{error.message}</p>
            )}
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-white bg-red-700 px-2 py-1 rounded-lg font-bold flex items-center gap-2">
              <span className="text-md">⚠️</span>
              {errorMessage}
            </p>
          )}

          {/* Send Button */}
          <div className="flex flex-col items-center gap-2">
            {!messageSent ? (
              <button
                className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                onClick={handleSendMail}
              >
                <span>Send Message</span>
                <TbMailForward className="mt-1" size={18} />
              </button>
            ) : (
              <button className="flex items-center gap-1 md:gap-2 hover:gap-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-700 md:font-semibold">
                <span>Message Sent</span>✔️
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWithoutCaptcha;
