import React, { Component } from "react";
import "../../styles/index.scss";
import "../../styles/login.scss";
import wizardImageUrl from "../../img/wizard-big.png";
import varitaImageUrl from "../../img/varita.png";
import { Button } from "./button";

export const Login = () => {
	const [email, setEmail] = userState("");
	const [password, setPassword] = userState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch(process.env.BACKEND_URL + "/api/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((res = res.json()))
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="container">
			<div className="form-container">
				<form>
					<div className="text-center">
						<img src={varitaImageUrl} />
					</div>

					<h1 className="text-center mt-2">Login</h1>
					<label className="sr-only">Email </label>
					<input
						type="email"
						id="emailAddress"
						className="form-control mt-5"
						placeholder="Email Address"
						required
						autoFocus
					/>
					<label className="sr-only">Password </label>
					<input
						type="password"
						id="passwords"
						className="form-control mt-4"
						placeholder="Password"
						required
						autoFocus
					/>
					<div className="text-center checkbox mt-3">
						<label>
							<input type="checkbox" value="remember-me" /> Remember me
						</label>
					</div>
					<div className=" text-center  mt-3">
						<button className="btn btn-lg btn-card btn-block" type="submit">
							Lets Do This! ⭐
						</button>
						<p className="text-center mt-3">
							<a href="/register">sign up here</a> or <a href="/forgot">forgot password?</a>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};
