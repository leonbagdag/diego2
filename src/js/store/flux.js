const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "http://localhost:3000";
	return {
		store: {
			user: {},
			provider: {
				categories: [],
				contracts: [],
				offers: [],
				reviews: [],
				score: 0
			},
			employer: {},
			all_categories: {},
			stats: {},
			services: {},
			access_token: "",
			logged: false
		},
		actions: {
			get_session: () => {
				const store = getStore();
				const access_token = sessionStorage.getItem("access_token");
				if (access_token === null) {
					//eslint-disable-next-line
					console.log("no access_token_in_session");
					getActions().login(); //mientras no hay login endpoint
				} else {
					setStore({ access_token: access_token, logged: true });
				}
			},
			login: () => {
				const store = getStore();
				fetch(API_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "cors",
					body: JSON.stringify({ email: "luis.lucena89@gmail.com", password: "luis1953" })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						setStore({ user: data.user, access_token: data.access_token, logged: data.logged });
						sessionStorage.setItem("access_token", data.access_token);
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
					});
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			find_services: () => {
				const store = getStore();
				fetch(API_URL + "/find/service-request/?comuna=1", {
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.access_token
					},
					mode: "cors"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.status);
						}
						return response.json();
					})
					.then(data => {
						const categories = data.provider.categories.map(element => {
							return Object.assign(element, { filter: true });
						});
						let provider = data.provider;
						provider.categories = categories;
						const services = data.services;
						setStore({ provider: provider, services: services });
					})
					.catch(error => {
						//eslint-disable-next-line
						console.log(error);
					});
			},
			toggle_cat_filter: cat => {
				const store = getStore();
				const categories = store.provider.categories.map(element => {
					if (element.id === cat.id) {
						return Object.assign(element, { filter: !element.filter });
					} else {
						return element;
					}
				});
				let provider = store.provider;
				provider.categories = categories;
				setStore({ provider: provider });
			}
		}
	};
};

export default getState;
