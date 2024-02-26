const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
		},
		actions: {
			fetchRegister: (data2) => {
				const storage = getStore()
				fetch("http://localhost:3001/signup", {
					method: "POST",
					body: JSON.stringify(data2),
					headers: {
						"content-type": "application/json",
						Authorization: `Bearer ${storage.token}`
					},
				}).then((response) => {
					console.log("response", response)
					return response.json()
				}).then((data2) => {
					console.log("data", data2)
				})
			},
		}
	};
};

export default getState;
