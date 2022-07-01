import addNote from '../apps/note/cmps/add-note.js'
import notePreview from '../apps/note/pages/note-preview.js'
import { noteService } from '../apps/note/services/note-service.js'
import { eventBus } from '../services/eventBus-service.js'

export default {
	template: `
 		<h1>notes :)</h1>
		<section class="note-app flex">
		<label for="search-note">🔍
            <input type="search"  id="search-note" v-model="filterBy.search" placeholder="Search..." >
		</label>
			<select v-model="filterBy.type">
				<option value="" selected disabled hidden>Filter By Type</option>
				<option value="">All</option>
				<option value="note-txt">Text</option>
				<option value="note-todo">Task List</option>
				<option value="note-img">Image</option>
				<option value="note-vid">Video</option>
			</select>
		
		<add-note @add-note="addNote"/>
		<note-preview @duplicate="duplicateNote" @colorChange="changeColor" @pin="pinNote" @remove="removeNote" :notes="notesToShow"/>

		</section>

`,
	components: {
		addNote,
		notePreview
	},
	data() {
		return {
			// unsubscribe: null,
			notes: null,
			filterBy: {
				type: '',
				search: null
			}
		}
	},
	created() {
		noteService.query().then(notes => console.log(notes))
		noteService.query().then(notes => (this.notes = notes))

		eventBus.on('content-change', this.changeContent)
		eventBus.on('todo-change', this.changeTodo)
	},
	methods: {
		addNote(note) {
			noteService.addNote(note).then(() => this.notes.unshift(note))
		},
		removeNote(id) {
			noteService.removeNote(id).then(() => {
				const idx = this.notes.findIndex(note => note.id === id)
				this.notes.splice(idx, 1)
			})
		},
		pinNote(id) {
			noteService.pinNote(id).then(notes => (this.notes = notes))
		},
		duplicateNote(id) {
			noteService.duplicateNote(id).then(note => this.notes.unshift(note))
		},
		changeColor(note) {
			noteService.updateNote(note).then(notes => (this.notes = notes))
		},
		changeContent({ txt, note, type }) {
			note[type] = txt
			noteService.updateNote(note)
		},
		changeTodo({ txt, note, idx }) {
			console.log(note)
			console.log(idx)
			note.info[idx].txt = txt
			note.info[idx].doneAt = null
			noteService.updateNote(note)
		}
	},
	computed: {
		notesToShow() {
			let notes = this.notes
			if (this.filterBy.search) {
				const regex = new RegExp(this.filterBy.search, 'i')
				notes = notes.filter(
					note => regex.test(note.info) || regex.test(note.title)
					//todo add a test for todo list items
					// (note.type === 'note-todo')? regex.test() : false
				)
			}

			if (!this.filterBy.type) return notes
			return notes.filter(note => note.type === this.filterBy.type)
		}
	}
}
