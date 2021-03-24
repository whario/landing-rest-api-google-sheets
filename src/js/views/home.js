import React from "react";
import "../../styles/home.scss";
import { Inscripcion } from "../component/form.js";

//include images into your bundle
import banner from "../../img/curso_incorporacion_empresa_agraria.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<img src={banner} className="banner" />
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="alert alert-dark centradosuperior" role="alert">
						Homologado por la Consejería de Agricultura, Medio Ambiente y Desarrollo Rural de la Junta de
						Castilla y León.
					</div>
					<div className="alert alert-danger centrado" role="alert">
						Esta formación es válida para acreditar la capacitación profesional mínima necesaria exigida en
						la normativa vigente para la incorporación a la empresa agraria o la solicitud de ayudas
						destinadas a la modernización de las explotaciones (Orden 71/2018, 15 de mayo).
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="alert alert-dark text-center" role="alert">
						Temario
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 sm-12">
					<div className="card temario">
						Tema 1: La empresa agraria (8 horas)
						<br />
						Tema 2: Gestión fiscal de las explotaciones agrarias (6 horas)
						<br />
						Tema 3: Gestión técnico-económica de las explotaciones agraria (16 horas)
						<br />
						Tema 4: Contratos agrarios y arrendamientos rústicos (4 horas)
						<br />
						Tema 5: La mujer en la empresa agraria (2 horas)
						<br />
						Tema 6: Seguridad social en el ámbito agrario (4 horas)
						<br />
						Tema 7: Prevención de riesgos laborales y protección laboral (4 horas)
						<br />
						Tema 8: Seguros agrarios (4 horas)
						<br />
						Tema 9: Unión Europea, Política Agrícola Común, ayudas al sector y Ley Agraria de Castilla y
						León (18 horas)
						<br />
						Tema 10: Actividad agraria y medioambiental (10 horas)
						<br />
						Tema 11: Técnicas de producción y necesidades agronómicas de los cultivos (20 horas)
						<br />
						Tema 12: Fitosanitarios: normativa, manejo y aplicación (6 horas)
						<br />
						Tema 13: Aplicación de abonos (4 horas)
						<br />
					</div>
				</div>
				<div className="col-md-6 sm-12">
					<div className="card temario">
						Tema 14: Las producciones ganaderas. Especies y razas (8 horas)
						<br />
						Tema 15: Técnicas de producción y manejo de especies ganaderas (18 horas)
						<br />
						Tema 16: Manejo y producción de pastos y forrajes (2 horas)
						<br />
						Tema 17: Buenas prácticas, eliminación de residuos (4 horas)
						<br />
						Tema 19: Producción ecológica e integrada (4 horas)
						<br />
						Tema 20: Forestación, erosión, quemas agrícolas (2 horas)
						<br />
						Tema 21: Maquinaria e instalaciones agrarias. Normativa básica. Relación con las ayudas (10
						horas)
						<br />
						Tema 22: Registros y cuadernos obligatorios en la explotación (6 horas)
						<br />
						Tema 23: Comercialización de la producción. Nuevas tendencias. Trazabilidad (4 horas)
						<br />
						Tema 24: Las nuevas tecnologías y las posibilidades de la gestión de las explotaciones online
						(10 horas)
						<br />
						Tema 25: Desarrollo, estudio y viabilidad económica de una explotación agraria. Subvenciones.
						Registros y cuadernos obligatorios en la explotación (20 horas)
						<br />
					</div>
				</div>
			</div>
			<div className="row inscripcion">
				<div className="col-12">
					<div className="alert alert-dark text-center" role="alert">
						<h3>Formulario de inscripción</h3>
						<hr />
						<Inscripcion />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12 info">
					Más información <i className="fas fa-phone-square" />
					&nbsp;979 10 83 03&nbsp; <i className="fab fa-whatsapp-square" />
					&nbsp;659 33 61 89
				</div>
			</div>
			<div className="row">
				<div className="col-12 info">
					<hr />
					Ver más cursos <a href="https://www.itagraformacion.com">Itagra Formación</a>
				</div>
			</div>
		</div>
	);
}
