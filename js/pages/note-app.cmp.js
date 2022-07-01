import addNote from '../apps/note/cmps/add-note.js'
import notePreview from '../apps/note/pages/note-preview.js'
import { noteService } from '../apps/note/services/note-service.js'
import { eventBus } from '../services/eventBus-service.js'

export default {
	template: `
 		<h1>notes :)</h1>
		<section class="note-app flex">

		<label for="search-note">🔍
            <input type="search"  id="search-note">
		</label>
		
		<add-note @add-note="addNote"/>
		<note-preview @bgColor=changeBgColor @pin="pinNote" @remove="removeNote" :notes="notes"/>

		</section>

`,
	components: {
		addNote,
		notePreview
	},
	data() {
		return {
			// unsubscribe: null,
			notes: null
		}
	},
	created() {
		noteService.query().then(notes => (this.notes = notes))
		// this.unsubscribe = eventBus.on('addNote', this.addNote(note))
	},
	methods: {
		addNote(note) {
			noteService.addNote(note).then(() => {
				this.notes.unshift(note)
			})
		},
		removeNote(id) {
			noteService.removeNote(id).then(() => {
				const idx = this.notes.findIndex(note => note.id === id)
				this.notes.splice(idx, 1)
			})
		},
		pinNote(id) {
			noteService.pinNote(id).then(notes => (this.notes = notes))
			// this.$router.go()
		},
		changeBgColor(note) {
			noteService.updateNote(note).then(notes => (this.notes = notes))
		}
	}
	// unmounted() {
	// 	this.unsubscribe()
	// }
}
