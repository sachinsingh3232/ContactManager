import user from "./user.png"
import { Link } from "react-router-dom";
import "./contactcard.css"
const ContactCard = (props) => {
    // const { id, name, email } = props.contact;
    return (
        <div className="item" >
            <img className="ui avatar image" src={user} alt="user"></img>
            <div className="content">
                <Link to={{ pathname: `/contact/${props.id}` }} >
                    <div className="name">{props.name}</div>
                    {/* <div className="PhoneNumber">{props.phoneNumber}</div> */}
                    <div className="email">{props.email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon "
                style={{ color: "red", float: "right", cursor: "pointer" }}
                onClick={() => props.clickHandler(props.id)}
            ></i>
        </div>
    )
}
export default ContactCard; 