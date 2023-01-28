const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      pokemon_species: [],
      pokemon: [],
      favorites: [],
      token: null,
      errorMessage: null,
      message: null,
    },
    actions: {
      // Use getActions to call a function within a fuction

      dehydrate: () => {
        for (const key in getStore()) {
          sessionStorage.setItem(key, JSON.stringify(getStore()[key]));
        }
      },

      rehydrate: () => {
        for (const key in getStore()) {
          if (sessionStorage.getItem(key)) {
            let update = {};
            update[key] = JSON.parse(sessionStorage.getItem(key));
            setStore(update);
          }
        }
      },

      getPokemonDesc: ({ id }) => {
        if (!id) {
          return;
        }
        return fetch(`https://3001-bennyno-pt41pokedexfina-l70dx2cgwgi.ws-us84.gitpod.io/api/pokemon/${id}/desc`)
          .then((resp) => resp.json())
          .then((data) => data);
      },

      getPokemon: () => {
        console.log(getStore().pokemon);
        const promises = [];
        const old_pokemon = getStore().pokemon;
        for (
          let i = old_pokemon.length + 1;
          i <= Math.min(905, old_pokemon.length + 20);
          i++
        ) {
          const url = `https://3001-bennyno-pt41pokedexfina-l70dx2cgwgi.ws-us84.gitpod.io/api/pokemon/${i}`;
          promises.push(fetch(url).then((res) => res.json()));
          console.log("Fetch request created", i);
        }
        Promise.all(promises).then((results) => {
          results.forEach((result) =>
            old_pokemon.push({
              name: result.name,
              // image: result.sprites['front_default'],
              image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
                "00" + result.id
              ).slice(-3)}.png`,
              type: result.types.map((type) => type.type.name).join(", "),
              height: result.height,
              weight: result.weight,
              id: result.id,
              abilities: result.abilities
                .map((ability) => ability.ability.name)
                .join(", "),
              stat_names: result.stats
                .map((stats) => stats.stat.name)
                .join(", "),
              stats: result.stats.map((stats) => stats.base_stat).join(", "),
            })
          );
          setStore({ pokemon: old_pokemon });
          getActions().dehydrate();
        });
      },
      setFavorites: (favorite) => {
        const store = getStore();
        if (!store.favorites.map((item) => item.name).includes(favorite.name)) {
          setStore({ favorites: [...store.favorites, favorite] });
        } else {
          console.log("Already added!");
        }
        getActions().dehydrate();
      },

      deleteFavorites: (favorite) => {
        const store = getStore();
        const del = store.favorites.filter((item) => item != favorite);
        setStore({ favorites: del });
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
            `https://3001-bennyno-pt41pokedexfina-l70dx2cgwgi.ws-us84.gitpod.io/api/login`,
            opts
          );
          if (resp.status !== 200) {
            alert("There was an error with the email or password.");
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
        fetch(`https://3001-bennyno-pt41pokedexfina-l70dx2cgwgi.ws-us84.gitpod.io/api/protected`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            if (response.status >= 400) {
              setStore({ errorMessage: "An error has occured. Please Login." });
            }
            console.log(response.status);
            return response.json();
          })
          .then((result) => console.log(result))
          .catch((error) => console.log("There is an error:", error));
      },

      signup: (email, password) => {
        fetch(`https://3001-bennyno-pt41pokedexfina-l70dx2cgwgi.ws-us84.gitpod.io/api/signup`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email, password: password }),
        })
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
        window.location.reload()
      },
    },
  };
};

export default getState;
