import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../img/logo-nav.png";
import "../../styles/index.scss";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark blue-gradient-bg collapse-dark-bg">
			<div className="container">
				<a href="/" className="navbar-brand">
					<img src={mainLogo} className="d-inline-block align-top" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#toggleMobileMenu"
					aria-controls="toggleMobileMenu"
					aria-expanded="false"
					aria-lable="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="toggleMobileMenu">
					<ul className="navbar-nav text-center ms-auto nav-pills">
						<li>
							<Link to="/">
								<button className="nav-link active">Home</button>
							</Link>
						</li>
						<li>
							<Link to="/learningPath">
								<button className="nav-link">Career Path</button>
							</Link>
						</li>
						<li>
							<Link to="/login">
								<button className="nav-link">Login</button>
							</Link>
						</li>
						<li>
							<Link to="/register">
								<button className="nav-link">Sign Up</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
