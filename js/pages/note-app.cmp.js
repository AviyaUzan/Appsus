import addNote from '../apps/note/cmps/add-note.js'
import notePreview from '../apps/note/pages/note-preview.js'
import { noteService } from '../apps/note/services/note-service.js'

export default {
	template: `
 		<h1>notes :)</h1>
		<section class="note-app">

		<label for="search-keep">🔍
            <input type="search"  id="search-keep">
		</label>
		
		<add-note @add-note="addNote"/>
		<note-preview/>

		</section>

`,
	components: {
		addNote,
		notePreview
	},
	methods: {
		addNote(note) {
			noteService.addNote(note)
			console.log('note', note)
			this.$forceUpdate()
		}
	}
}
