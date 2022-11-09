import user from "./user.png"
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./contactdetails.css"
// import { useLocation } from "react-router-dom";
const ContactDetail = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    useEffect(() => {
        // console.log(id);
        // console.log(props.contacts.length);
        for (let i = 0; i < props.contacts.length; i++) {
            console.log(props.contacts[i].id);
            if (props.contacts[i].id === id) {
                console.log("hello");
                setName(props.contacts[i].name);
                setEmail(props.contacts[i].email);
                setphoneNumber(props.contacts[i].phoneNumber);
                break;
            }
        }
    }, [props.contacts, id])
    // console.log(email);
    return (
        <div className="contactdetails">
            <div className="ui card centered ">
                <div className="image">
                    <img src={user} alt="User" />
                </div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="discription" >{email}</div>
                    <div className="discription" > MobileNumber: {phoneNumber}</div>
                </div>
            </div>
            <Link to={"/"}>
                <div className="ui button red center">Back to ContactList</div>
            </Link>
        </div>
    )
}
export default ContactDetail; 