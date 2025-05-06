import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("")
	const [listaTareas, setListaTareas] = useState([])


	function handleOnSubmit(event) {
		event.preventDefault()
		setListaTareas([...listaTareas, tarea])
		setTarea("")
	}

	return (
		<>
			<form onSubmit={(event) => handleOnSubmit(event)}>
				<input placeholder="Introduce tu tarea" value={tarea} onChange={(event) => setTarea(event.target.value)}/>
			</form>
			<ol>
				{(listaTareas.length == 1) ?
				listaTareas.map((elemento_a_mostrar, posicion_en_la_lista) => (
					<li key={posicion_en_la_lista}>
						{elemento_a_mostrar}
					</li>
				))
				:
				<h1>No hay tareas!</h1>}
			</ol>
		</>
	);
};

export default Home;