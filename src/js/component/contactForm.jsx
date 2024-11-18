import React from "react";
import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
        <div className="container-fluid my-5">
            <h1 className="text-center mb-3">Add a new contact</h1>
            <form>

                <div className="mb-3">
                    <label for="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control w-100" id="name" aria-describedby="input name" placeholder="Enter your full name"/>
                </div>

                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control w-100" id="email" aria-describedby="input email" placeholder="Enter you email"/>
                </div>

                <div className="mb-3">
                    <label for="phone" className="form-label">Phone</label>
                    <input type="number" className="form-control w-100" id="phone" aria-describedby="input phone" placeholder="Enter your phone"/>
                </div>

                <div className="mb-3">
                    <label for="address" className="form-label">Address</label>
                    <input type="text" className="form-control w-100" id="address" aria-describedby="input address" placeholder="Enter your address"/>
                </div>

                <button type="button" className="btn btn-primary w-100">save</button>

                <Link to="/">
                    <div>or get back to contacts</div>
			    </Link>

            </form>
        </div>
    );
};

export default ContactForm;