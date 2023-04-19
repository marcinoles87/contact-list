
import './App.css';


import React, { useState } from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    let [contacts , setContacts] = useState([])

    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        setContacts(data.results) 
    
        console.log(data.contacts)
    })

        console.log(contacts)
    return(

        <div className='app'>

        {contacts.map( (contact,index) => {
         return (
        <ContactCard  key = {index}
        avatarURL = {contact.picture.large}
        name = {contact.first}
        email = {contact.email}
        age = {contact.dob.age} ></ContactCard>
            )

         } )}


        </div>
       
    )
}

export default App