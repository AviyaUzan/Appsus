import { noteService } from '../services/note-service.js'
import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'
import noteVid from '../cmps/note-vid.js'
import noteAudio from '../cmps/note-audio.js'

export default {
	template: `
	<section class="note-preview-container grid">
		<div v-for="note in notes" >
			<component :is="note.type" :note='note'></component>
		</div>
	</section>
	`,
	components: {
		noteTodo,
		noteImg,
		noteTxt,
		noteVid
	},
	data() {
		return {
			notes: null
		}
	},
	created() {
		this.notes = noteService.getNotes()

	},
	methods: {},
	computed: {},
	unmounted() {}
}
