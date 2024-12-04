import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import profileImage from "../../img/defaultProfile.jpg";

const EditCard = props => {
    const {store, actions} = useContext(Context);
    const navigate = useNavigate();

    const [contactData, setContactData] = useState({
        id: store.selected?.id || '',
        name: store.selected.name || '', 
        email: store.selected?.email || '', 
        phone: store.selected?.phone || '', 
        address: store.selected?.address || ''
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setContactData({...contactData, [name]: value})
    };

    const handleSubmit = e => {
        e.preventDefault();
        //console.log(contactData);
        actions.editContact(contactData)
        handleNavigate()
    };

    const handleNavigate = () => {navigate('/cardView/')}

    return (
        <div className="containerm border rounded px-5 py-3">

            <form className="contactCard__Card d-flex justify-content-between flex-column flex-sm-column flex-md-row" onSubmit={handleSubmit}>

                <div className="d-flex flex-column flex-sm-column flex-md-row">
                    <img className="rounded-circle me-0 me-lg-5 mb-3 mb-md-0 align-self-center" src={profileImage} alt={props.name} />

                    <div>
                        <div className="input-group mb-2">
                            <span className="input-group-text py-0" id="name">Name</span>
                            <input 
                                type="text" className="form-control form-control-sm" aria-label="Username" aria-describedby="name"
                                name="name"
                                value={contactData.name}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text" id="address"><i className="fa-solid fa-location-dot"></i></span>
                            <input 
                                type="text" className="form-control form-control-sm" aria-label="Address" aria-describedby="address"
                                name="address"
                                value={contactData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text" id="phone"><i className="fa-solid fa-phone-flip"></i></span>
                            <input 
                                type="text" className="form-control form-control-sm" aria-label="Phone" aria-describedby="phone"
                                name="phone"
                                value={contactData.phone}
                                onChange={handleChange}
                        />
                        </div>

                        <div className="input-group mb-2">
                            <span className="input-group-text" id="email"><i className="fa-solid fa-envelope"></i></span>
                            <input 
                                type="text" className="form-control form-control-sm" aria-label="Email" aria-describedby="email"
                                name="email"
                                value={contactData.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="">
                    <input type="submit" className="btn btn-primary w-100 mb-2" value={'save'}/> 

                    <input type="button" className="btn btn-danger w-100" value={'cancel'} onClick={handleNavigate}/> 
                </div>

            </form>
        </div>
    );
};

export default EditCard;