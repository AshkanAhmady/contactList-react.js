import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import { FaTrashAlt, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="single_contact">
      <div className="details">
        <div className="avatar">
          {contact.gender == "male" ? (
            <FcBusinessman className="icon" />
          ) : (
            <FcBusinesswoman className="icon" />
          )}
        </div>
        <div className="name_email">
          <h3>{contact.name}</h3>
          <span>{contact.email}</span>
        </div>
      </div>
      <div className="options">
        <Link
          className="singleContactLink"
          to={{
            pathname: `/contact/${contact.id}`,
            state: { contact: contact },
          }}
        >
          <FaEllipsisV className="moreIcon" />
        </Link>
        <FaTrashAlt onClick={onDelete} className="icon" />
      </div>
    </div>
  );
};

export default Contact;
