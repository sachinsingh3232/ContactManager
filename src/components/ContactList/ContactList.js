import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactCard from '../ContactCard/ContactCard';
import "./contactlist.css"
const ContactList = (props) => {
  // console.log(props)
  const inputEl = useRef("")
  const deleteContactHandler = (id) => {
    // console.log(id)
    props.getContactId(id);
  }
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)
  }
  const renderContactList = props.contacts.map((x) => {
    return (
      <ContactCard name={x.name} email={x.email} phoneNumber={x.phoneNumber} clickHandler={deleteContactHandler} id={x.id} />
    );
  });

  return (
    <div className='contactlist'>
      <h2 className='h2'>ContactList
        <Link to="/add">
          <button className="ui button blue right">Add Contacts</button>
        </Link>
      </h2>
      <div className=" SearchBar ui search ">
        <div className='ui icon input'>
          <input ref={inputEl} type="text" placeholder='Search Contacts' className='prompt' value={props.searchTerm} onChange={getSearchTerm} />
          <i className='search icon' />
        </div>
      </div>
      <div className='ui celled list'>{renderContactList.length > 0 ? renderContactList : <div className='NoContacts'> No Contatcs Available </div>}</div>
    </div>);

}

export default ContactList;