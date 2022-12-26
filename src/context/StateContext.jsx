import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const initialFormData = {
  name: "",
  phone: "",
  type: "",
  whatsapp: false,
  profile: "",
};

const Context = createContext();

export const StateContext = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [contacts, setContacts] = useState([]);
  const [index, setIndex] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "profile") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new contact to the contact list and save to localstorage
    const contacts = JSON.parse(localStorage.getItem("contacts") || "[]");
    contacts.push({
      id: Date.now(), // unique ID for the contact
      ...formData,
    });

    //! Store the form data in localStorage

    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Navigate back to the homepage
    window.location.href = "/";

    //! Clear the form fields
    setFormData({
      name: "",
      phone: "",
      type: "",
      whatsapp: false,
      profile: {},
    });

    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src={formData.profile}
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {formData.name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Your contact has been added! 😁
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };

  function updateContact(id, newData) {
    // Get the contacts array from local storage
    const contacts = JSON.parse(localStorage.getItem("contacts"));

    // Find the index of the contact with the specified id
    const index = contacts.findIndex((contact) => contact.id === id);

    // Update the contact at the specified index with the new data
    contacts[index] = { ...contacts[index], ...newData };

    // Save the updated contacts array back to local storage
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }

  const handleUpdate = (e) => {
    console.log(contacts[index]);
    e.preventDefault();
    // Get the form data
    const form = e.target;
    const data = new FormData(form);
    const formData = {};
    data.forEach((value, key) => {
      formData[key] = value;
    });

    // Update the contact in the array
    updateContact(contacts[index].id, formData);

    // Navigate back to the homepage
    window.history.back();
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  const handleDelete = (index = 1) => {
    let response = confirm("Do you want to delete?");
    if (response) {
      // Splice the contact from the array
      contacts.splice(index, 1);
      // Update the contacts in local storage
      localStorage.setItem("contacts", JSON.stringify(contacts));
      // Update the contacts in the component's state
      setContacts([...contacts]);
      toast.success("Successfully Deleted!");
    }
  };

  const handleEdit = (index = 1) => {
    setIndex(index);
  };

  return (
    <Context.Provider
      value={{
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        contacts,
        setContacts,
        handleDelete,
        index,
        setIndex,
        handleEdit,
        handleUpdate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
