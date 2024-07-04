import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ContactDetails({allContacts}) {
    const [contact, setContact] = useState(null);
    const params = useParams();

    useEffect(() => {
        const selectedContact = allContacts.find((contact) => contact.id === Number(params.id));
        setContact(selectedContact)
    }, [allContacts, params.id]);

    console.log("contact", contact)

      if (!contact) return <p>Loading...</p>;


    return (
        <section>
            <h2> 
                {contact.firstName} {contact.lastName}
            </h2>
            <p>
                {contact.street} {contact.city}
            </p>
        </section>
    )
}