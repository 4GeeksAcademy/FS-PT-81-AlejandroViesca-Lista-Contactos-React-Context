const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		},
		actions: {
			selectContact: (contact) =>setStore({selected:  contact}),

			getUser: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/viesk/contacts');
					// Si el usuario no esta creado llama a la funcion de crear usuairos
					if (resp.status == 404) { 
						await getActions().createUser();
						return
					}
					if (!resp.ok) throw new Error('ALGO A SALIDO MAL RECIBIENDO LOS DATOS');
					const data = await resp.json();
					//console.log(data);
					setStore({contacts: data.contacts});
				} catch (error) {
					console.error(error);
				}
			},

			createUser: async () => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/viesk', {
						method: 'POST',
						headers: {'Content-Type': 'application/json'}
					});
					if (!resp.ok) throw new Error('ALGO A SALIDO MAL CREANDO EL USUARIO');
					const data = await resp.json();
					//console.log('Usuario creado con éxito:', data);
				} catch (error) {
					console.error(error);
				} 
			},

			createContact: async (data) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/viesk/contacts',{
						method: 'POST',
						headers: {'Content-Type': 'application/json'}, 
						body: JSON.stringify(data),
					});
					if (!resp.ok) throw new Error('ALGO A SALIDO MAL CREANDO LA AGENDA');
						return getActions().getUser()
				} catch (error) {
					console.error(error);
				}
			},	

			editContact: async (data) => {
				try {
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/viesk/contacts/' + data.id,{
						method: 'PUT',
						headers: {'Content-Type': 'application/json'}, 
						body: JSON.stringify(data),
					});
					if (!resp.ok) throw new Error('ALGO A SALIDO MAL EDITANDO EL CONTACTO');
					return getActions().getUser()
				} catch (error) {
					console.error(error);
				}
			},

			deleteContact: async (id) => {
				try {
					//console.log('Id de contacto que se quiere borrar:', id);
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/viesk/contacts/' + id,{
						method: 'DELETE',
					});
					if (!resp.ok) throw new Error('ALGO A SALIDO MAL BORRANDO EL CONTACTO');
					return getActions().getUser()
				} catch (error) {
					console.error(error);
				}
			},
		}
	};
};

export default getState;
