import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'
import noteVid from '../cmps/note-vid.js'
import noteAudio from '../cmps/note-audio.js'

export default {
	props: ['notes'],
	template: `
	<section class="note-preview-container grid">
		<div class="note" v-for="note in notes" >
			<component :is="note.type" :note='note'></component>
			<div :style="note.style" class="note-btn-container">
				<button @click="onRemoveNote(note.id)"> <img src="assest/icons/delete.svg" alt="delete"> </button>
				<button @click="onPinNote(note.id)"> <img src="assest/icons/pin.svg" alt="pin"> </button>
			</div>
		</div>
	</section>
	`,
	data() {
		return {
			id: null
		}
	},
	components: {
		noteTodo,
		noteImg,
		noteTxt,
		noteVid
	},
	methods: {
		onRemoveNote(id) {
			this.$emit('remove', id)
		},
		onPinNote(id) {
			// console.log(this.id)
			this.$emit('pin', id)
		}
	}
}
