import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header"
import ContactList from "./ContactList/ContactList"
import AddContact from "./AddContacts/AddContact"
import ContactDetail from "./ContactDetails/ContactDetail"
import "./app.css"
import uuid from 'react-uuid';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const addContactHandler = (contact) => {
    const existingContact = contacts.find(c => c.email === contact.email);
    if (existingContact) {
      alert("Email Already Exists")
      contact.preventDefault();
      return
    }
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }
  const removeContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    })
    setContacts(newContacts);
  }
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact).join("").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts)
    }
  }
  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) { setContacts(retrieveContacts) };
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler} searchTerm={searchTerm} searchKeyword={searchHandler} />} />
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" element={<ContactDetail contacts={contacts} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
