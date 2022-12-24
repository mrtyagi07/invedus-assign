import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactList from "./ContactList";
import { StateContext, useStateContext } from "../context/StateContext";

const Home = () => {
  const { contacts, setContacts } = useStateContext();
  return (
    <div>
      <h1 className="flex items-center justify-center bg-violet-300 p-8 text-lg font-extrabold text-gray-600">
        Here is your saved contacts!
      </h1>
      <div className="flex items-center justify-center bg-violet-300">
        {" "}
        <Link to="/addcontact">
          <button className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 dark:text-white dark:focus:ring-blue-800">
            <span className="relative rounded-md  px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
              Add contacts
            </span>
          </button>
        </Link>
      </div>
      {contacts.length > 0 ? (
        contacts.map((contact, index) => (
          <div
            key={contact.id}
            className="flex flex-shrink flex-col bg-violet-200"
          >
            <ContactList contact={contact} index={index} />
          </div>
        ))
      ) : (
        <div className="flex h-screen w-full items-center justify-center bg-violet-200 p-10">
          <h1>No Contacts! 😔</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
