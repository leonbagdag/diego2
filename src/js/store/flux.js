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
			stats: {
				top_categories: []
			},
			services: [],
			access_token: "",
			logged: false,
			app_data: {
				all_categories: [],
				all_regions: []
			},
			comunas: [],
			offer_made: false,
			toast_news: {},
			login_form_error: {}
		},
		actions: {
			connect_error: () => {
				setStore({
					toast_news: {
						msg: "Error de Conexión... Intenta más tarde.",
						bg: "bg-danger",
						status: "Error"
					}
				});
				$("#toast_news").toast("show");
			},

			clean_services: () => {
				setStore({ services: [] });
				//eslint-disable-next-line
				console.log("services clean");
			},

			clean_loginForm: () => {
				setStore({ login_form_error: {} });
			},

			get_app_data: () => {
				fetch(API_URL + "/app-data", {
					headers: { "Content-Type": "application/json" },
					mode: "cors"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ app_data: data.app_data });
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().connect_error();
						}
						//eslint-disable-next-line
						console.log(error);
					});
			},

			get_stats: () => {
				fetch(API_URL + "/", {
					headers: { "Content-Type": "application/json" },
					mode: "cors"
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						setStore({ stats: data.stats });
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().connect_error();
						}
						//eslint-disable-next-line
						console.log(error);
					});
			},

			get_session: () => {
				const access_token = sessionStorage.getItem("access_token");
				if (access_token === null) {
					//eslint-disable-next-line
					console.log("no access_token_in_session");
					setStore({ access_token: "", logged: false });
				} else {
					setStore({ access_token: access_token, logged: true });
				}
			},

			login: credentials => {
				const store = getStore();
				fetch(API_URL + "/login", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "cors",
					body: JSON.stringify({ email: credentials.email, password: credentials.password })
				})
					.then(response => {
						if (!response.ok && !response.status === "400" && !response.status === "404") {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						let error = { msg: "", target: "" };
						if ("Error" in data) {
							if (data.Error.search("Email") >= 0) {
								error = { msg: data.Error, target: "email" };
							} else if (data.Error.search("Contraseña") >= 0) {
								error = { msg: data.Error, target: "password" };
							}
							setStore({
								toast_news: {
									msg: data.Error,
									bg: "bg-danger",
									status: "Error"
								},
								login_form_error: error
							});
							$("#toast_news").toast("show");
						} else {
							setStore({ user: data.user, access_token: data.access_token, logged: data.logged });
							sessionStorage.setItem("access_token", data.access_token);
							setStore({
								toast_news: {
									msg: "Conexión Exitosa, Bienvenido",
									bg: "bg-success",
									status: "Éxito"
								}
							});
							$("#toast_news").toast("show");
						}
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().connect_error();
						}
						//eslint-disable-next-line
						console.log(error);
					});
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
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						const categories = data.provider.categories.map(element => {
							return Object.assign(element, { filter: true });
						});
						let provider = data.provider;
						provider.categories = categories;

						setStore({ provider: provider, services: data.services, user: data.user, offer_made: false });
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().connect_error();
						}
						//eslint-disable-next-line
						console.log(error);
					});
			},

			create_offer: service => {
				const store = getStore();
				fetch(`${API_URL}/service-request/${service.id}/offer`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + store.access_token
					},
					mode: "cors",
					body: JSON.stringify({ create: "offer" })
				})
					.then(response => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						//eslint-disable-next-line
						console.log(data.msg);
						setStore({
							offer_made: true,
							toast_news: {
								msg: "Oferta creada con éxtito.",
								bg: "bg-success",
								status: "Éxito"
							}
						});
						$("#toast_news").toast("show");
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().connect_error();
						}
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
