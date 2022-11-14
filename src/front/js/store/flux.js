const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			pokemon: [],
			favorites: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			// getPokemon: () => {
			// 	const promises = [];
			// 	for (let i = 1; i <= 905; i++) {
			// 		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			// 		promises.push(fetch(url).then((res) => res.json()));
			// 	}
			// 	Promise.all(promises).then((results) => setStore({
			// 			pokemon: results.map((result) => ({
			// 			name: result.name,
			// 			image: result.sprites['front_default'],
			// 			type: result.types.map((type) => type.type.name).join(', '),
			// 			id: result.id
			// 		}))
			// 	}));
			// },

			// getPokemon: () => {
			// 	for (let i = 1; i <= 905; i++) {
			// const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
			// fetch(url)
			// .then((response) => {
			// 	return response.json()
			// })
			// .then((data) => {
			// 	console.log(data);
			// 	const pokemon = {};
			// 	pokemon['name'] = data.name,
			// 	pokemon['id'] = data.id,
			// 	pokemon['image'] = data.sprites["front_dafault"],
			// 	pokemon['type'] = data.types
			// 	.map((type) => type.type.name)
			// 	.join(", ");
			// })}},


			getPokemon: () => {
				return fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
				.then(response => response.json())
				.then(json => setStore({
					pokemon:json.results
				}))
				.catch(error => console.log('error', error));
			},

			setFavorites: (favorite) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, favorite]});
			},

			deleteFavorites: (favorite) => {
				const store = getStore();
				const del = store.favorites.filter(item=>item != favorite);
				setStore({ favorites: del})
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
