import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useActionData } from "react-router-dom";

const ContactForm = () => {

    const {store, actions} = useContext(Context);

    const [contactData, setContactData] = useState({
        name: '', 
        email: '', 
        phone: '', 
        address: ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setContactData({...contactData, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(contactData);
        actions.createContact(contactData)
        setContactData({name: '', email: '', phone: '', address: ''});
    };

    return (
        <div className="container-fluid my-5">

            <h1 className="text-center mb-3">Add a new contact</h1>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input 
                        type="text" id="name" name="name" aria-describedby="input name" className="form-control w-100" placeholder="Enter your full name" required
                        value={contactData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" id="email" name="email" aria-describedby="input email" className="form-control w-100" placeholder="Enter you email" required
                        value={contactData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                        type="number" id="phone" name="phone" aria-describedby="input phone" className="form-control w-100" placeholder="Enter your phone" required                    
                        value={contactData.phone}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input 
                        type="text" id="address" name="address" aria-describedby="input address" className="form-control w-100" placeholder="Enter your address" required
                        value={contactData.address}
                        onChange={handleChange}
                    />
                </div>

                <input type="submit" className="btn btn-primary w-100" value={'save'}/> 

                <Link to="/cardView">
                    <div>or get back to contacts</div>
			    </Link>

            </form>
        </div>
    );
};

export default ContactForm;