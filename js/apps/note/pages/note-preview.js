import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'
import noteVid from '../cmps/note-vid.js'
import noteAudio from '../cmps/note-audio.js'

export default {
	props: ['notes'],
	template: `
	<section class="note-preview-container grid">
		<div v-for="note in notes" >
			<component :is="note.type" :note='note'></component>
			<button :value="note.id" @click="onRemoveNote">remove</button>
			<button :value="note.id" @click="onPinNote">Pin</button>
		</div>
	</section>
	`,
	components: {
		noteTodo,
		noteImg,
		noteTxt,
		noteVid
	},
	methods: {
		onRemoveNote({ target: { value } }) {
			this.$emit('remove', value)
		},
		onPinNote({ target: { value } }) {
			this.$emit('pin', value)
		}
	}
}
