
import './App.css';


import React, { useState } from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    const [contacts , setContacts] = useState([])

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        
        setContacts(data) 
    
        console.log(data.contacts)
    })

        
    return(

        <div className='app'>

        {contacts.map( (contact,index) => {
         return (
        <ContactCard  key = {index}
        avatarURL = {contact.picture.large}
        name = {contact.first}
        email = {contact.email}
        age = {contact.dob.age} />
            )

         } )}


        </div>
       
    )
}

export default App