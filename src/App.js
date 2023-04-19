
import './App.css';


import React from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    return(
        <div className='app'>
        <ContactCard 
        avatarURL = 'https://via.placeholder.com/150'
        name = 'jon doe'
        email = 'arex@gmail.com'
        age = {30}  />

        <ContactCard 
        avatarURL = 'https://via.placeholder.com/150'
        name = 'jenny feis'
        email = 'shis@gmail.com'
        age = {3}  />

        <ContactCard 
        avatarURL = 'https://via.placeholder.com/150'
        name = 'jo anna'
        email = 'aelia@gmail.com'
        age = {120}  />


        </div>
       
    )
}

export default App