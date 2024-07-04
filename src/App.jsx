import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import AddNewContact from "./components/AddNewContact";

function App() {
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/zainabch123/contact")
      .then((res) => res.json())
      .then((data) => setAllContacts(data));
  }, []);

  console.log("all contact", allContacts);

  return (
    <>
      <aside className="dashboard-layout">
        <h2>Menu</h2>
        <ul className="aside-ul">
          <li>
            <Link to="/contacts-list">Contacts List</Link>
          </li>
          <li>
            <Link to="/add-new-contact">Add New Contact</Link>
          </li>
        </ul>
      </aside>
      <Routes>
        <Route
          path="/contacts-list"
          element={
            <ContactList
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
        <Route
          path="/view/:id"
          element={<ContactDetails allContacts={allContacts} />}
        />
        <Route
          path="/add-new-contact"
          element={
            <AddNewContact
              allContacts={allContacts}
              setAllContacts={setAllContacts}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
