const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			charactersFetch: [],
			planetsFetch: [],
			vehiclesFetch: [], 
			favorites: [],
	  },
	  actions: {
	
		fetchCharacters: async () => {
			const store = getStore();
			for (let index = 1; index <= 11; index++) {
			  try {
				const response = await fetch(`https://www.swapi.tech/api/people/${index}`);
				if (response.ok) {  
				 const data = await response.json();  
				 setStore({ ...store, charactersFetch: [...store.charactersFetch, data.result] });
				}
			  } catch (error) {
				console.log(error);
			  }
			}
		  },
		fetchPlanets: async () => {
		  const store = getStore();
		  for (let index = 2; index <= 11; index++) {
			try {
			  const response = await fetch(`https://www.swapi.tech/api/planets/${index}`);
			  if (response.ok) {  
			   const data = await response.json();  
			   setStore({ ...store, planetsFetch: [...store.planetsFetch, data.result] });
			  }
			} catch (error) {
			  console.log(error);
			}
		  }
		},
		
		fetchVehicles: async () => {
			const store = getStore();
			for (let index = 2; index <= 20; index++) {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${index}`);
					if (response.ok) {
						const data = await response.json();
						setStore({ ...store, vehiclesFetch: [...store.vehiclesFetch, data.result] });
					}
				} catch (error) {
					console.log(error);
				}
			}
		},		
  
		addFavorite: (item) => {
		  const store = getStore();
		  const favorites = store.favorites;
		  const exists = favorites.find((favourite) => favourite === item);
		  if (exists) {
			const filteredFavorites = favorites.filter(
			  (favourite) => item !== favourite
			);
			setStore({ ...store, favorites: filteredFavorites });
			return;
		  }
		  const newFavorites = [...favorites, item];
		  setStore({ ...store, favorites: newFavorites });
		  console.log(newFavorites);
		},
  
	  },
	};
  };
  
  
  export default getState;
  