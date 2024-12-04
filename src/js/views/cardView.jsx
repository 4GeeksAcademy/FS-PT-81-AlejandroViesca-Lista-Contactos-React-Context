import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import ContactCard from "../component/contactCard.jsx";
import DeleteModal from "../component/deleteModal.jsx";


export const CardView = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="container my-5">
				<div className="contactCard__container">
					{
						store.contacts?.map(contact => 
							<ContactCard 
								key={contact.id}
								name={contact.name}
								address={contact.address}
								phone={contact.phone}
								email={contact.email}
								id={contact.id}
							/>
						)
					}
				</div>

				<Link to="/">
					<button className="btn btn-primary mt-3">Back to create contact</button>
				</Link>
			</div>
		</>
	);
};
