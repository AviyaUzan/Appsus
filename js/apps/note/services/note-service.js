export const noteService = {
	getNotes
}

function getNotes() {
	return notes
}

var notes = [
	{
		id: 'n101',
		type: 'note-txt',
		isPinned: true,
		info: {
			txt: 'Fullstack Me Baby!'
		},
		style: {
			backgroundColor: '#00d'
		}
	},
	{
		id: 'n102',
		type: 'note-img',
		info: {
			url: 'https://images.unsplash.com/photo-1656185925303-7e9c9f49e18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
			title: 'Bobi and Me'
		},
		style: {
			backgroundColor: '#00d'
		}
	},
	{
		id: 'n103',
		type: 'note-todo',
		info: {
			label: 'Get my stuff together',
			todo: [
				{ txt: 'Driving liscence', doneAt: null },
				{ txt: 'Coding power', doneAt: 187111111 }
			]
		},
		style: {
			backgroundColor: '#00d'
		}
	}
]
