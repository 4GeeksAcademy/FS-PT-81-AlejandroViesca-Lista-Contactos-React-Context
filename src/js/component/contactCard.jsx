import React, { useContext } from "react";
import "../../styles/contactCard.css";

import profileImage from "../../img/defaultProfile.jpg";
import DeleteModal from "../component/deleteModal.jsx";

import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appContext";

const ContactCard = (props) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleEdit = () =>{
        actions.selectContact(store.contacts.filter(el => el.id === props.id)[0])
        navigate('/single/' + props.id)
    }

    return(
        <div className="containerm border px-5 py-3 contactCard__Card contactCard_border d-flex justify-content-between">

            <div className="d-flex flex-column flex-sm-column flex-md-row">
                <img className="rounded-circle me-5 mb-3 mb-md-0" src={profileImage} alt={props.name} />
                <div>
                    <h6>{props.name}</h6>
                    <div className="contactCard__Card--gray"><i className="fa-solid fa-location-dot"></i><span className="ms-3">{props.address}</span></div>
                    <div className="contactCard__Card--gray"><i className="fa-solid fa-phone-flip"></i><span className="ms-3">{props.phone}</span></div>
                    <div className="contactCard__Card--gray"><i className="fa-solid fa-envelope"></i><span className="ms-3">{props.email}</span></div>
                </div>
            </div>

            <div>
                <span className="me-5">
                    <i 
                    className="fa-solid fa-pencil mb-3 mb-md-0"
                    onClick={handleEdit}
                    ></i>
                </span>
                <span>
                    <i 
                    className="fa-solid fa-trash-can"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    ></i>
                </span>
            </div>

            <DeleteModal key={props.id} id={props.id}/>

        </div>
    );
};

export default ContactCard;