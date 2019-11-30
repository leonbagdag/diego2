const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			categorias: [
				{
					name: "Trámites Bancarios",
					icon: "fas fa-money-check-alt",
					filter: true,
					id: 1
				},
				{
					name: "Trámites Legales",
					icon: "fas fa-balance-scale",
					filter: false,
					id: 2
				},
				{
					name: "Cuidado de Mascotas",
					icon: "fas fa-paw",
					filter: true,
					id: 3
				},
				{
					name: "Electricidad",
					icon: "fa fa-bolt",
					filter: true,
					id: 4
				},
				{
					name: "Climatización",
					icon: "fas fa-snowflake",
					filter: false,
					id: 5
				},
				{
					name: "Climatización",
					icon: "fas fa-snowflake",
					filter: true,
					id: 6
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
