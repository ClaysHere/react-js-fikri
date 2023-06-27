import React from "react";

const Form = () => {
  return (
    <div
      className={
        "w-full flex justify-center items-center bg-slate-800 lg:mt-8 mt-8"
      }>
      <div
        className={
          "container bg-slate-800 md:w-2/3 lg:w-2/3 text-white grid grid-cols-1 lg:grid-cols-6 lg:gap-4 px-4 py-4"
        }>
        <h1
          className={
            "lg:col-span-6 self-center text-center font-semibold text-lg"
          }>
          Contact Me
        </h1>
        <label
          className={"self-center mt-4 lg:mt-0 lg:row-start-2 lg:col-start-1"}
          htmlFor="f-name">
          First Name
        </label>
        <input
          className={
            "rounded-lg mt-2 px-4 py-2 lg:row-start-2 lg:col-start-2 lg:col-span-2"
          }
          type="text"
          id="f-name"
          placeholder="Enter your first-name"
        />
        <label
          className={"self-center mt-4 lg:mt-0 lg:row-start-2 lg:col-start-4"}
          htmlFor="l-name">
          Last Name
        </label>
        <input
          className={
            "rounded-lg mt-2 px-4 py-2 lg:row-start-2 lg:col-start-5 lg:col-span-2"
          }
          type="text"
          id="l-name"
          placeholder="Enter your last-name"
        />
        <label
          className={"self-center mt-4 lg:mt-0 lg:row-start-3 lg:col-start-1"}
          htmlFor="email">
          Email
        </label>
        <input
          className={
            "rounded-lg mt-2 px-4 py-2 lg:row-start-3 lg:col-start-2 lg:col-span-2"
          }
          type="text"
          id="email"
          placeholder="Enter your email"
        />
        <label
          className={"self-center mt-4 lg:mt-0 lg:row-start-3 lg:col-start-4"}
          htmlFor="phone">
          Phone
        </label>
        <input
          className={
            "rounded-lg mt-2 px-4 py-2 lg:row-start-3 lg:col-start-5 lg:col-span-2"
          }
          type="text"
          id="phone"
          placeholder="Enter your phone number"
        />
        <label
          className={"self-center mt-4 lg:mt-0 lg:row-start-4 lg:col-start-1"}
          htmlFor="Message">
          Message
        </label>
        <textarea
          className={"lg:col-span-5 h-32 mt-2 rounded-lg py-2 px-4"}
          id="message"
          cols="30"
          rows="10"
          placeholder="What do you want to say?"></textarea>
      </div>
    </div>
  );
};

export default Form;
