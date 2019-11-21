const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			habilidades: [
				{
					name: "Trámites Bancarios",
					habilidad: true,
					id: 1
				},
				{
					name: "Cuidado de Mascotas",
					habilidad: false,
					id: 2
				},
				{
					name: "Planchado de Ropa",
					habilidad: true,
					id: 3
				},
				{
					name: "Electricidad",
					habilidad: true,
					id: 4
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
