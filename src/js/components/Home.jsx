import React, { useEffect, useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("")
	const [listaTareas, setListaTareas] = useState([])
	// Para pasarlo a API leer la documentación
	// https://playground.4geeks.com/todo/docs


	function handleOnSubmit(event) {
		event.preventDefault()
		setListaTareas([...listaTareas, tarea]) // Cuando tu vas a guardar algo -> POST
		setTarea("")
	}
	
	function borrar(i) {
        const newList = [...listaTareas];
        newList.splice(i, 1);
        setListaTareas(newList); // Cuando tu vas a borrar algo -> DELETE
	}

	// useEffect y dentro el get 👀 

	return (
		<>
			<form onSubmit={(event) => handleOnSubmit(event)}> {/* Cuando tu vas a guardar algo -> POST */}
				<input placeholder="Introduce tu tarea" value={tarea} onChange={(event) => setTarea(event.target.value)}/>
			</form>
			<ol>
				{(listaTareas.length == 1) ? // Cuando obtienes algo -> GET
				listaTareas.map((elemento_a_mostrar, posicion_en_la_lista) => (
					<li key={posicion_en_la_lista}>
						{elemento_a_mostrar}
						<i onClick={(posicion_en_la_lista) => borrar(posicion_en_la_lista)}>basura</i>
					</li>
				))
				:
				<h1>No hay tareas!</h1>}
			</ol>
		</>
	);
};

export default Home;