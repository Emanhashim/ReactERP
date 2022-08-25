
import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
function App() {
const contacts =[
  {
    id:"1",
    name:"eman",
    email:"eman@gmail.com",
  },
  {
    id:"2",
    name:"robel",
    email:"robel@gmail.com",
  },
  {
    id:"1",
    name:"rosi",
    email:"rosi@gmail.com",
  },
]

  return (
    <div className="ui container">
   <Header />
   <AddContact />
   {/* for the contact we use props to pass the list of data in contact ist */}
   <ContactList  contacts = {contacts}/>
   </div>
  );
}

export default App;
