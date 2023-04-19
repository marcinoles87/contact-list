
import './App.css';


import React, { useState } from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    const [contacts , setContacts] = useState([])

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(data)})

        setContacts = (data) => {

        }

    

    return(

        <div className='app'>

        {contacts.map( (contact , index) => {
        <ContactCard 
        avatarURL = {contact.picture}
        name = {contact.name}
        email = {contact.email}
        age = {contact.age} />

         } )}


        </div>
       
    )
}

export default App