/** @format */

import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { TbMessageCircle2Filled } from "react-icons/tb";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [enableButton, setEnableButton] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!enableButton) return;

    let isValid = true;

    if (!name) {
      isValid = false;
    }
    if (!email || !validateEmail(email)) {
      isValid = false;
    }
    if (!message) {
      isValid = false;
    }

    if (!isValid) {
      setTouched({
        name: true,
        email: true,
        message: true,
      });
      setEnableButton(true);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus("Message sent, talk soon!");
      setName("");
      setEmail("");
      setMessage("");
      setTouched({
        name: false,
        email: false,
        message: false,
      });
    } else {
      setStatus("Message didn't send, hope I coded this right!");
    }
  };

  const handleBlur = (field: string) => {
    setTouched({
      ...touched,
      [field]: true,
    });
  };

  const getEmailError = () => {
    if (!email && touched.email) {
      return "Email is required.";
    }
    if (email && !validateEmail(email) && touched.email) {
      return "Invalid email format.";
    }
    return "";
  };

  useEffect(() => {
    const isValid: boolean =
      name && email && validateEmail(email) && message ? true : false;
    setEnableButton(isValid);
  }, [name, email, message]);

  // className={`h-full py-10 text-center transition-opacity duration-500 ease-in-out md:flex-col ${
  //         loaded ? "opacity-100" : "opacity-0"
  //       }`}
  return (
    <div
      className={`container mx-auto flex flex-col items-center justify-center px-5 py-10 tracking-widest transition-opacity duration-500 ease-in-out md:flex-col ${
        loaded ? "opacity-100" : "opacity-0"
      } `}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 rounded-none border-2 border-slate-500 bg-slate-100 p-8"
      >
        <div className="mb-6">
          <div className="relative flex items-center text-slate-400 focus-within:text-slate-600">
            <IoPersonSharp className="pointer-events-none absolute ml-3 h-5 w-5" />
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
              required
              className="peer block w-full rounded-none border-b-2 border-transparent p-2.5 pl-10 text-sm text-slate-600 placeholder-slate-400 outline-none transition-all duration-700 ease-in-out focus:border-b-2 focus:border-l-0 focus:border-slate-500"
            />
          </div>
          {touched.name && !name && (
            <p className="mt-2 text-sm font-medium italic text-slate-600 transition-all duration-700 ease-in-out">
              Name is required.
            </p>
          )}
        </div>
        <div className="mb-6">
          <div className="relative flex items-center text-slate-400 focus-within:text-slate-600">
            <AiOutlineMail className="pointer-events-none absolute ml-3 h-5 w-5" />
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur("email")}
              required
              className="peer block w-full rounded-none border-b-2 border-transparent p-2.5 pl-10 text-sm text-slate-600 placeholder-slate-400 outline-none transition-all duration-700 ease-in-out focus:border-b-2 focus:border-l-0 focus:border-slate-500"
            />
          </div>
          {touched.email && getEmailError() && (
            <p className="mt-2 text-sm font-medium italic text-slate-600 transition-all duration-700 ease-in-out">
              {getEmailError()}
            </p>
          )}
        </div>
        <div className="mb-6">
          <div className="relative flex items-center text-slate-400 focus-within:text-slate-600">
            <TbMessageCircle2Filled className="pointer-events-none absolute ml-3 h-5 w-5" />
            <input
              type="text"
              id="message"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => handleBlur("message")}
              required
              className="peer block w-full rounded-none border-b-2 border-transparent p-2.5 pl-10 text-sm text-slate-600 placeholder-slate-400 outline-none transition-all duration-700 ease-in-out focus:border-b-2 focus:border-l-0 focus:border-slate-500"
            />
          </div>
          {touched.message && !message && (
            <p className="mt-2 text-sm font-medium italic text-slate-600 transition-all duration-700 ease-in-out">
              Message is required.
            </p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className={`rounded-none border-2 border-slate-100 bg-slate-600 px-4 py-2 font-bold text-white transition-all duration-700 ease-in-out ${
              !enableButton
                ? "cursor-not-allowed opacity-50"
                : "hover:border-slate-900 hover:bg-white hover:text-slate-900"
            }`}
            disabled={!enableButton}
          >
            Send
          </button>
        </div>

        {status && (
          <p className="mt-4 text-center text-sm transition-all duration-700 ease-in-out">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
