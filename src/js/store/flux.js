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
            user: { name: "Luis L.", logged: true },
            region: [
                {
                    name: "Aisén del G. Carlos Ibáñez del Campo",
                    id: 1
                },
                {
                    name: "Antofagasta",
                    id: 2
                },
                {
                    name: "Arica y Parinacota",
                    id: 3
                },
                {
                    name: "Atacama",
                    id: 4
                },
                {
                    name: "Biobío",
                    id: 5
                },
                {
                    name: "Coquimbo",
                    id: 6
                },
                {
                    name: "La Araucanía",
                    id: 7
                },
                {
                    name: "Libertador General Bernardo O’Higgins",
                    id: 8
                },
                {
                    name: "Los Lagos",
                    id: 9
                },
                {
                    name: "Los Ríos",
                    id: 10
                },
                {
                    name: "Magallanes y de la Antártica Chilena",
                    id: 11
                },
                {
                    name: "Maule",
                    id: 12
                },
                {
                    name: "Metropolitana de Santiago",
                    id: 13
                },
                {
                    name: "Ñuble",
                    id: 14
                },
                {
                    name: "Tarapacá",
                    id: 15
                },
                {
                    name: "Valparaíso",
                    id: 16
                }
            ]
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
