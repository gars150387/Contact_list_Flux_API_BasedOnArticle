const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore, getActiosn }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/gars_1503")
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			},
			addContact(name, phone, email, address){
				fetch( url,{
					method: "POST",
					headers: {"Content-type": "application/json"},
					body: JSON.stringigy({
						full_name: name,
						phone: phone,
						address: address,
						agenda_slug: "gars_1503"
					})
				}).then(() =>{
					fetch(url + "agenda/gars_1503")
					.then(response => response.json())
					.then( result => {
						console.log("result", result),
						setStore({
							contacts: result
						});
					})
					.catch(e=> console.error(e));
				})
			}
		}
	};
};

export default getState;
