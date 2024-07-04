import ContactListItem from './ContactListItem'

export default function ContactList({allContacts, setAllContacts}) {
  return (
    <section className="contact-list-section"> 
      <h2>Contacts</h2>
      <ul className='contacts-ul'>
        {allContacts.map((contact, index) => (
          <ContactListItem key={index} contact={contact} />
        ))}
      </ul>
    </section>
  );
}
