import { noteService } from '../services/note-service.js'
import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'

export default {
	template: `
	<section class="note-preview-container">
		<div v-for="note in notes" >
			<component :is="note.type" :note='note'></component>
		</div>
	</section>
	`,
	components: {
		noteTodo,
		noteImg,
		noteTxt
	},
	data() {
		return {
			notes: null
		}
	},
	created() {
		// console.log(noteService.getNotes())
		this.notes = noteService.getNotes()
	},
	methods: {},
	computed: {},
	unmounted() {}
}
