
import './App.css';


import React, { useEffect, useState } from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    let [contacts , setContacts] = useState([])

    
    useEffect(() => {
         fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        setContacts(data.results) 
    
    })
    },[])
   
    
        
    return(

        <div className='app'>

            <h1>Contact Form React</h1>

        {contacts.map( (contact,index) => {
         return (
        <ContactCard  key = {index}
        avatarURL = {contact.picture.large}
        name = {contact.name.first}
        email = {contact.email}
        age = {contact.dob.age} 
        login = {contact.login.username}>
        </ContactCard>
            )

         } )}


        </div>
       
    )
}

export default App