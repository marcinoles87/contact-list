import React, { useState } from "react";
import './contactcard.css'

const ContactCard = () => {

const [showAge , setShowAge ] = useState(false)

 const handleOnClick = () => {

    setShowAge(
        !showAge
    )

    console.log(showAge)
}

    return(
        <div className='contact-card'>
            <img src='https://via.placeholder.com/150' alt='profil-img'></img>

        <div className='user-details'>
            <h1>user name : </h1>
            <p>user Info</p>
            <p>job : </p>
            <button onClick={handleOnClick}>User Age</button>
            {showAge ? <p>Age :25 : </p> : null}
        </div>
        </div>
    )
}

export default ContactCard