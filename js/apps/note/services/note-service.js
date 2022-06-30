import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notes'

export const noteService = {
	addNote,
	query,
	save
}

function query() {
	let notes = storageService.query(NOTES_KEY)
	return notes.then(notes => {
		if (!notes || notes.length === 0) {
			notes = getNotes()
			storageService.postMany(NOTES_KEY, notes)
		}
		return notes
	})
}
function get(noteId) {
	return storageService.get(NOTES_KEY, noteId)
}

function remove(noteId) {
	return storageService.remove(NOTES_KEY, noteId)
}

function save(note) {
	if (note.id) {
		return storageService.put(NOTES_KEY, note)
	} else return storageService.post(NOTES_KEY, note)
}

function addNote(note) {
	const newNote = {
		id: storageService.makeId(),
		type: note.type,
		info: {
			txt: note.txt
		},
		style: {
			...note.style
		}
	}
	storageService.post(NOTES_KEY, newNote)
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
	},
	{
		id: 'rmqj5COD',
		type: 'note-txt',
		info: {
			txt: 'nulasdasdsal'
		},
		style: {
			backgroundColor: 'red'
		}
	}
]
