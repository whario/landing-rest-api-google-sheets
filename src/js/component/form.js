import React, { useState } from "react";
import { Redirect } from "react-router";
import axios from "axios";

export const Inscripcion = () => {
	const [inputs, setInputs] = useState({
		nombre: "",
		apellidos: "",
		movil: "",
		email: ""
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = e => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};
	console.log(inputs, "inputs despues de setear");

	const handelSubmit = event => {
		event.preventDefault();
		axios.post("https://sheet.best/api/sheets/e36f762a-fce1-4f1b-80f1-41722a8ff073", inputs).then(response => {
			setSubmitted(true);
			console.log(response);
		});
	};
	if (submitted) {
		return (
			<Redirect
				push
				to={{
					pathname: "/gracias"
				}}
			/>
		);
	}
	return (
		<form onChange={handleChange} onSubmit={handelSubmit}>
			<label className="form-label etiquetas">Nombre</label>
			<input type="text" name="nombre" placeholder="nombre" src={inputs.nombre} />
			<label className="form-label etiquetas">Apellidos</label>
			<input type="text" name="apellidos" placeholder="apellidos" src={inputs.apellidos} />
			<label className="form-label etiquetas">Móvil</label>
			<input type="text" name="movil" placeholder="móvil" src={inputs.movil} />
			<label className="form-label etiquetas">Email</label>
			<input type="text" name="email" placeholder="email" src={inputs.email} />
			<div className="row">
				<div className="col align-items-center">
					<button type="submit" className="btn btn-primary">
						Enviar
					</button>
				</div>
			</div>
		</form>
	);
};
