const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon: [],
      favorites: [],
      token: null,
			errorMessage: null,
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction

      getPokemon: () => {
        console.log(getStore().pokemon)
      	const promises = [];
        const old_pokemon = getStore().pokemon;
      	for (let i = old_pokemon.length + 1; i <= Math.min(905, old_pokemon.length + 20); i++) {
      		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      		promises.push(fetch(url).then((res) => res.json()));
          console.log("Fetch request created", i)
      	}
      	Promise.all(promises).then((results) => {
      			 results.forEach((result) => old_pokemon.push({
      			name: result.name,
            // image: result.sprites['front_default'],
      			image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + (result.id)).slice(-3)}.png`, 
      			type: result.types.map((type) => type.type.name).join(', '),
            abilities: result.abilities.map((ability) => ability.ability.name).join(', '),
            stat_names: result.stats.map((stats) => stats.stat.name).join(', '),
            stats: result.stats.map((stats) => stats.base_stat).join(', '),
      			id: result.id
      		}))
          setStore({pokemon:old_pokemon})
      });
      },

      // getPokemon: () => {+
      //   const requests = [];
      //   const pokeman = [];
      //   let ok = 0;
      //   let m_pkmn = 905;

      //   for (let i = 1; i <= m_pkmn; i++) {
      //     const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      //     requests.push(fetch(url));
      //   }
         
      //   Promise.all(requests).then((responses) => {
      //     responses.forEach((response) => {
      //       if (response.ok) {
      //         ok++;
      //       }
      //       response
      //         .json()
      //         .then((data) => {
      //           const api_pkmn = {
      //             name: data.name,
      //             id: data.id,
      //             image: data.sprites["front_default"],
      //             type: data.types.map((type) => type.type.name).join(", "),
      //           };

      //           pokeman.push(api_pkmn);
      //         })
      //         .then(() => {
      //           console.log(pokeman.length);
      //           if (pokeman.length) {
      //             setStore({
      //               pokemon: pokeman,
      //             });
      //           }
      //         });
      //     });
      //   }).then(() => console.log("Final", pokeman.length));
      // },

      // getPokemon: () => {
      // 	return fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
      // 	.then(response => response.json())
      // 	.then(json => setStore({
      // 		pokemon:json.results
      // 	}))
      // 	.catch(error => console.log('error', error));
      // },

      setFavorites: (favorite) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, favorite] });
      },

      deleteFavorites: (favorite) => {
        const store = getStore();
        const del = store.favorites.filter((item) => item != favorite);
        setStore({ favorites: del });
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.status !== 200) {
            alert("There was an error.");
            return false;
          }
          const data = await resp.json();
          console.log("This came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There is an error when logging in.");
        }
      },
      verifyUser: (token) => {
        fetch(
			process.env.BACKEND_URL +"/api/protected",
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        )
          .then((response) => { 
            if (response.status >= 400){
              setStore({errorMessage: "An error has occured. Please Login."})
            }
            console.log(response.status)
           return response.json()
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("There is an error:",error));
      },

      signup: (email, password) => {
        fetch(
			process.env.BACKEND_URL + "/api/signup",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: email, password: password }),
          }
        )
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      },

      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },

      logout: () => {
        sessionStorage.removeItem("token");
        setStore({ token: null });
      },

      login: async (email, password) => {
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };

        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          if (resp.status !== 200) {
            alert("There was an error.");
            return false;
          }
          const data = await resp.json();
          console.log("This came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There is an error when logging in.");
        }
      },

      getPokemon: () => {
        console.log(getStore().pokemon)
      	const promises = [];
        const old_pokemon = getStore().pokemon;
      	for (let i = old_pokemon.length + 1; i <= Math.min(905, old_pokemon.length + 20); i++) {
      		const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      		promises.push(fetch(url).then((res) => res.json()));
          console.log("Fetch request created", i)
      	}
      	Promise.all(promises).then((results) => {
      			 results.forEach((result) => old_pokemon.push({
      			name: result.name,
            // image: result.sprites['front_default'],
      			image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${("00" + (result.id)).slice(-3)}.png`, 
      			type: result.types.map((type) => type.type.name).join(', '),
            abilities: result.abilities.map((ability) => ability.ability.name).join(', '),
            stat_names: result.stats.map((stats) => stats.stat.name).join(', '),
            stats: result.stats.map((stats) => stats.base_stat).join(', '),
      			id: result.id
      		}))
          setStore({pokemon:old_pokemon})
      });
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
			}
			// changeColor: (index, color) => {
			// 	//get the store
			// 	const store = getStore();

			// 	//we have to loop the entire demo array to look for the respective index
			// 	//and change its color
			// 	const demo = store.demo.map((elm, i) => {
			// 		if (i === index) elm.background = color;
			// 		return elm;
			// 	});

			// 	//reset the global store
			// 	setStore({ demo: demo });
			// }
		}
	};
};

export default getState;
