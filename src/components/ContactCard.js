import React, { useState } from "react";
import './contactcard.css'

const ContactCard = (props) => {

    console.log(props)

const [showAge , setShowAge ] = useState(false)

 const handleOnClick = () => {

    setShowAge(
        !showAge
    )

    console.log(showAge)
}

    return(
        <div className='contact-card'>
            <img src={props.avatarURL} alt='profil-img'></img>

        <div className='user-details'>
            <h1>user name :{props.name} </h1>
            <p>user email : {props.email}</p>
            <p>username: {props.username} </p>
            <button onClick={handleOnClick}>User Age</button>
            {showAge ? <p>Age :{props.age}</p> : null}
        </div>
        </div>
    )
}

export default ContactCard