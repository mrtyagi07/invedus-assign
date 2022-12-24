import React, { useRef, useEffect } from "react";

import { MdContactPage } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { StateContext, useStateContext } from "../context/StateContext";

const EditContact = () => {
  const {
    contacts,
    setContacts,
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    handleUpdate,
    handleEdit,
    index,
  } = useStateContext();

  console.log(contacts[index]);

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const typeRef = useRef(null);
  const whatsappRef = useRef(null);

  useEffect(() => {
    // set the value of the form input fields to the contact's values
    nameRef.current.value = contacts[index]?.name;
    phoneRef.current.value = contacts[index]?.phone;
    typeRef.current.value = contacts[index]?.type;
    whatsappRef.current.checked = contacts[index]?.whatsapp;
  }, [contacts[index]]);

  return (
    <>
      {" "}
      <div>
        <div>
          {" "}
          <div className="h-screen w-full bg-violet-300 text-black">
            <h1 className="flex items-center justify-center p-8 text-lg font-extrabold">
              {`Here You can add contact! `}
            </h1>

            <div className="flex min-h-screen items-center justify-center bg-violet-200 py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-md overflow-hidden rounded-lg  bg-violet-100 p-5 shadow-xl">
                <form className="space-y-4" onSubmit={handleUpdate}>
                  <div className="rounded-md shadow-sm">
                    <div className="grid gap-6">
                      <div className="col-span-12">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-violet-700"
                          name="name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          className="mt-1 block w-full rounded-md border-violet-400 shadow-sm focus:border-violet-500 focus:ring-violet-500 "
                          name="name"
                          ref={nameRef}
                        />
                      </div>

                      <div className="col-span-12">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-violet-700"
                        >
                          Phone number
                        </label>
                        <input
                          type="number"
                          className="mt-1 block w-full rounded-md border-violet-400 shadow-sm focus:border-violet-500 focus:ring-violet-500 "
                          name="phone"
                          ref={phoneRef}
                        />
                      </div>

                      <div className="col-span-12">
                        <label
                          htmlFor="type"
                          className="block text-sm font-medium text-violet-700"
                        >
                          Select your country
                        </label>
                        <select
                          className="mt-1 block w-full rounded-md border-violet-400 shadow-sm focus:border-violet-500 focus:ring-violet-500 "
                          name="type"
                          ref={typeRef}
                        >
                          <option value="office">Office</option>
                          <option value="personal">Personal</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="whatsapp"
                        ref={whatsappRef}
                        className="h-4 w-4 rounded border-violet-300 bg-white text-violet-600 focus:ring-violet-500"
                      />
                      <label
                        htmlFor="whatsapp"
                        className="ml-2 block text-sm text-violet-500"
                      >
                        Do you have Whatsapp?
                      </label>
                    </div>
                  </div>

                  <label
                    className="mb-2 block text-sm font-medium text-violet-700"
                    htmlFor="profile"
                  >
                    Upload your picture
                  </label>
                  <input
                    className="mt-1 block w-full cursor-pointer rounded-md border border-violet-400 bg-violet-300 shadow-lg focus:border-violet-500 focus:ring-violet-500"
                    type="file"
                    name="profile"
                    required
                  />

                  <div>
                    <button
                      type="submit"
                      className="relative flex w-full justify-center rounded-md border  bg-violet-600 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <MdContactPage size={30} className="text-violet-100" />
                      </span>
                      Add contact
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditContact;
