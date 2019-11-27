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
			],
			user: { name: "Luis L.", logged: true }
		},
		actions: {
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			}
		}
	};
};

export default getState;
