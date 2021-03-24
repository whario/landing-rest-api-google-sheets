import React from "react";
import Logo from "../../img/logo_form.jpg";

import "../../styles/home.scss";

export const Thanks = () => {
	return (
		<div className="text-center mt-5">
			<p>
				<img src={Logo} />
			</p>
			<h4>
				Gracias por escribirnos. Nos pondremos en contacto contigo lo más rápido posible para finalizar la
				inscripción en el curso{" "}
			</h4>
			<p>
				<a href="http://itagraformacion.com/">Ver más cursos online</a>
			</p>
		</div>
	);
};
