import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import "./addcontact.css"
const AddContact = (props) => {
    const navigate = useNavigate();
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    // const [state, setState] = useState({ name: "", email: "" });
    const add = async (e) => {
        e.preventDefault();
        if (Name === "" || Email === "" || PhoneNumber === "") {
            alert("All the fields are mandatory!");
            return;
        }
        const contact = {
            name: Name,
            email: Email,
            phoneNumber: PhoneNumber
        }
        props.addContactHandler(contact);
        navigate('/');
    };
    return (
        <div className="addcontact" >
            <h2>Add Contacts</h2>
            <form className="ui form" onSubmit={add}>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label>PhoneNumber</label>
                    <input type="text" name="PhoneNumber" placeholder="PhoneNumber" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="buttonContainer">
                    <button className="ui button blue ">Add</button>
                    <Link to="/">
                        <div className="ui button black">Back</div>
                    </Link>
                </div>
            </form>
        </div>
    );
}
export default AddContact; 