// this is functional component
import React from "react";


// this is a defualt value to pass props
const ContactList = (props) => {
    console.log(props);

    const renderConatctList = props.contacts.map((contact) => {
        return (
            <div className ="item">
                <div className ="content">
                    <div className="header">
                        {contact.name}
                    </div>
                    <div>{contact.email}</div>
                    </div>
                <i className="trash alternate outline icon"></i>   

            </div>
        )
    })

    // this return renderConatctList means rendering using reference variable
    return (
        <div className = "ui celled list">
      {renderConatctList}
        </div>
    );
}

export default ContactList;