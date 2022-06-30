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
		info: note.info,
		title: note.title,
		style: {
			...note.style
		}
	}
	storageService.post(NOTES_KEY, newNote)
}

function getNotes() {
	return notes
}

const notes = [
	{
		id: storageService.makeId(),
		type: 'note-vid',
		isPinned: false,
		title: 'Why I HATE JavaScript',
		info: 'qvFG8J7SUDE',
		style: {
			color: '#FF9F29',
			backgroundColor: '#000000'
		}
	},
	{
		id: storageService.makeId(),
		type: 'note-txt',
		isPinned: false,
		title: 'hello!',
		info: 'Fullstack Me Baby!',
		style: {
			color: '#54BAB9',
			backgroundColor: '#F7ECDE'
		}
	},
	{
		id: storageService.makeId(),
		type: 'note-img',
		isPinned: false,
		title: 'Cute cat',
		info: 'https://images.unsplash.com/photo-1656185925303-7e9c9f49e18d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80',
		style: {
			color: '#F0EBE3',
			backgroundColor: '#576F72'
		}
	},
	{
		id: storageService.makeId(),
		type: 'note-todo',
		isPinned: false,
		title: 'Get my stuff together',
		info: [
			{ txt: 'Driving license', doneAt: null },
			{ txt: 'Coding power', doneAt: 187111111 }
		],
		style: {
			color: '#576f72',
			backgroundColor: '#FFDCAE'
		}
	},
	{
		id: storageService.makeId(),
		type: 'note-vid',
		isPinned: false,
		title: 'embed a vid',
		info: '9YffrCViTVk',
		style: {
			color: '#76BA99',
			backgroundColor: '#FFDCAE'
		}
	}
]
