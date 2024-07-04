import { Link } from "react-router-dom";

export default function ContactListItem({contact}) {
    console.log("contact id", contact.id)
    return (
      <li>
          <p>
            {contact.firstName} {contact.lastName}
          </p>
          <Link to={`/view/${contact.id}`}>View</Link>       
      </li>
    );
}