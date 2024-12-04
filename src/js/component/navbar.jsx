import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">

				<button
					className="navbar-toggler text-white" type="button"
					data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"
				>
					<i className="fa-solid fa-bars text-white"></i>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center w-100">

						<Link to="/" className="text-decoration-none">
							<span className="navbar-brand text-white mt-1 mt-lg-0 ms-2" href="#">New Contact</span>
						</Link>

						<Link to="cardView">
							<button className="btn btn btn-success align-self-start align-self-lg-center mt-1 mt-lg-0 me-2 text-white" type="submit">View Contact</button>
						</Link>
					</div>
						
				</div>
			</div>
		</nav>
	);
};
