import React from "react";
import "../../styles/home.css";
import ContactForm from "../component/contactForm.jsx";
import ContactCard from "../component/contactCard.jsx";

export const Home = () => (
	<div className="container">		
		<ContactForm />
		<ContactCard />
	</div>
);
