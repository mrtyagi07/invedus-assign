import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Link } from "react-router-dom";
import EditContact from "./EditContact";
import { StateContext, useStateContext } from "../context/StateContext";

const ContactList = ({ contact, index }) => {
  const { handleDelete, handleEdit } = useStateContext();

  return (
    <div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex h-screen w-full items-center justify-center  bg-violet-200 p-4 text-black">
          <div className="flex min-h-screen items-center justify-center bg-violet-200 py-12 px-4 ">
            <div className="flex items-center justify-center rounded-lg  border  border-violet-400 bg-violet-400 p-4 shadow-md">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={contact.profile}
                  alt="user-image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                  {contact.name}
                </h5>
                <span className="font-mono text-lg font-bold text-gray-700 ">
                  {contact.phone && `Phone numer is ${contact.phone}`}
                </span>
                <span className="text-sm text-gray-700 ">
                  {contact.whatsapp && `${contact.name} has a whtasapp account`}
                </span>

                <div className="mt-4 flex space-x-3 md:mt-6">
                  <button
                    onClick={() => handleDelete(index)}
                    className="inline-flex items-center rounded-lg bg-pink-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300"
                  >
                    Delete the contact
                  </button>
                  <Link to={"/editcontact"}>
                    <button
                      onClick={() => handleEdit(index)}
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 "
                    >
                      Edit Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
