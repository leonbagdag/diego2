import history from "../views/history";

const getState = ({ getStore, getActions, setStore }) => {
	const API_URL = "http://localhost:3000";
	const connect_error_msg = {
		msg: "Error de Conexión, intenta más tarde...",
		bg: "bg-danger",
		status: "Error"
	};
	return {
		store: {
			user: {}, // dentro de user, está el id de la comuna que el usuario estableció en su dirección personal.
			provider: {
				categories: [],
				contracts: [],
				offers: [],
				reviews: [],
				score: 0
			},
			employer: {},
			stats: {
				top_categories: []
			},
			services: [],
			access_token: "",
			logged: false,
			app_data: {
				all_categories: [],
				all_regions: [] // se utiliza la region para hacer fetch y determinar cuales son las comunas de esa region
			},
			comunas: [], // se obtienen comunas solo de la region seleccionada por el usuario.
			toast_news: {},
			form_api_error: {}
		},
		actions: {
			display_toast: body => {
				// permite mostrar mensajes tipo toast desde cualquier vista.
				setStore({
					toast_news: { ...body }
				});
				$("#toast_news").toast("show"); //jquery. bootstrap documentation: https://getbootstrap.com/docs/4.4/components/toasts/
			}, //#toast_news is located in navBar component.

			clear_services: () => {
				setStore({ services: [] });
			},

			clear_form_error: () => {
				//elimina errores en formularios, para evitar que aparezcan en formularios de distintas vistas
				setStore({ form_api_error: {} });
			},

			set_form_error: error => {
				// error a mostrar en formularios en forma de tooltip.
				setStore({
					form_api_error: { ...error }
				});
			},

			get_app_data: () => {
				// recopila los datos iniciales requeridos por la app como las categorias generales y las regiones
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
							getActions().display_toast(connect_error_msg);
						}
					});
			},

			get_stats: () => {
				//obtiene las estadísticas a mostrar en el home de la aplicación.
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
							getActions().display_toast(connect_error_msg);
						}
					});
			},

			get_session: () => {
				// obtiene credenciales guardadas en la session del navegador, al hacer refresh
				const access_token = sessionStorage.getItem("access_token");
				if (access_token === null) {
					//eslint-disable-next-line
					console.log("no access_token_in_session");
					setStore({ access_token: "", logged: true });
				} else {
					setStore({ access_token: access_token, logged: true });
				}
			},

			login: credentials => {
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
						if ("Error" in data) {
							if (data.Error.search("Email") >= 0) {
								getActions().set_form_error({
									msg: data.Error,
									target: "email"
								});
							} else if (data.Error.search("Contraseña") >= 0) {
								getActions().set_form_error({
									msg: data.Error,
									target: "password"
								});
							}
						} else {
							setStore({ user: data.user, access_token: data.access_token, logged: data.logged });
							sessionStorage.setItem("access_token", data.access_token);
							getActions().display_toast({
								msg: data.success, // En json, se devuelve "success": "msg..."
								bg: "bg-success",
								status: "Éxito"
							});
						}
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().display_toast(connect_error_msg);
						}
						history.push("/");
					});
			},

			registro: new_user => {
				fetch(API_URL + "/registro", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					mode: "cors",
					body: JSON.stringify({
						email: new_user.email,
						password: new_user.password,
						f_name: new_user.f_name,
						l_name: new_user.l_name
					})
				})
					.then(response => {
						if (!response.ok && !response.status === "400") {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						if ("Error" in data) {
							if (data.Error.search("Email") >= 0) {
								getActions().set_form_error({
									msg: data.Error,
									target: "email"
								});
							} else if (data.Error.search("Contraseña") >= 0) {
								getActions().set_form_error({
									msg: data.Error,
									target: "password"
								});
							}
						} else {
							getActions().display_toast({
								msg: data.success, //desde API se responde con un json "success": "msg..."
								bg: "bg-success",
								status: "Éxito"
							});
							history.push("/login");
						}
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().display_toast(connect_error_msg);
						}
						history.push("/");
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

						setStore({ provider: provider, services: data.services, user: data.user });
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().display_toast(connect_error_msg);
						}
					});
			},

			create_offer: service => {
				const store = getStore();
				fetch(`${API_URL}/service-request/${service.id}/offer`, {
					method: "POST", //post en esta URL crea una nueva oferta al servicio con ID passed.
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
						getActions().display_toast({
							msg: data.msg,
							bg: "bg-success",
							status: "Éxito"
						});
						history.push("/find/service-request");
					})
					.catch(error => {
						if (error.name === "TypeError") {
							getActions().display_toast(connect_error_msg);
						}
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
