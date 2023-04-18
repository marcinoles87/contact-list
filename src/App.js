
import './App.css';


import React from 'react'
import ContactCard from './components/ContactCard';

const App = () => {

    return(
        <div className='app'>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>
        <ContactCard></ContactCard>

        </div>
       
    )
}

export default App