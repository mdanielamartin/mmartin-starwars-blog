const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			mainView: {people:[],planets:[],vehicles:[]},
			singleView:{type:'',details:{}},
			people:[],
			vehicles:[],
			planets:[],
			favorites:[],
			tab:'people'
		},
		actions: {
			getDetails: async(url)=>{
				const store = getStore();
				const urlType = await url.split('/').at(-2);
				try{
					const res = await fetch(url);
					if (!res.ok){
						throw new Error(res.statusText);
					}
					const info = await res.json();
					setStore({...store,singleView:{type:urlType, details: info.result}});
					return true;
				}catch(error){
					console.error('Error loading single view',error);
				}
			},

			saveDetails: ()=>{
				const store = getStore();
				localStorage.setItem('singleView',JSON.stringify(store['singleView']));
			},

			getDetailsLocal: () =>{
				const store = getStore();
				const detailLocal = localStorage.getItem('singleView');
				const detailStore = detailLocal ? JSON.parse(detailLocal) : [];
				setStore({...store,singleView:detailStore})
				return true;
			},

			getDatabank: async (request)=>{
				const store = getStore();
				try{
					const res = await fetch(`https://www.swapi.tech/api/${request}/`);
					if (!res.ok){
						throw new Error(res.statusText);
					}
					const list = await res.json();
					setStore({...store,[request]:list});
					return true;
				}catch(error){
					console.error('Loading databank',error);
				}
			},

			getNext: async (request) => {
				const store = getStore();
				const nextURL = store[request].next;
				const actions = getActions();
				actions.updateStore(nextURL,request)
			},

			getPrev: async (request) => {
				const store = getStore();
				const prevURL = store[request].previous;
				const actions = getActions();
				actions.updateStore(prevURL,request)
			},

			updateStore: async (url,request) => {
				const store = getStore();
				if (url===null){
					return;
				}
				try{
					const res = await fetch(url);
					if (!res.ok){
						throw new Error(res.statusText);
					}
					const list = await res.json();
					setStore({...store,[request]:list});
				}catch(error){
					console.error('Updating store',error);
				}
			},

			addFav: (item)=>{
				const store = getStore();
				setStore({...store,favorites:[...store.favorites,item]})
				const actions = getActions();
				actions.saveFav();
			},

			removeFav: (dato)=>{
				const store = getStore();
				const filtered = store.favorites.filter(item => item.url !== dato.url)
				setStore({...store,favorites:[...filtered]});
				const actions = getActions();
				actions.saveFav();
			},

			saveFav:()=>{
				const store = getStore();
				localStorage.setItem('favorites',JSON.stringify(store['favorites']));
			},

			getFavLocal: ()=>{
				const store = getStore();
				const favLocal = localStorage.getItem('favorites');
				const favStore = favLocal ? JSON.parse(favLocal) : [];
				setStore({...store,favorites:favStore})
			},

			setTab: (request)=>{
				const store = getStore();
				setStore({...store,tab:request})
			},

			getPlanet: async (url)=>{
				const store = getStore();
				try{
					const res = await fetch(url);
					if (!res.ok){
						throw new Error(res.statusText);
					}
					const info = await res.json();
					const planetName = info.result.properties.name;
					setStore({...store,singleView:{...store.singleView,planet:planetName}});
					return true;
				}catch(error){
					console.error('Problem with planet name',error);
				}
			}

		},
	};
};

export default getState;
