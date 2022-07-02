import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'
import noteVid from '../cmps/note-vid.js'
import noteAudio from '../cmps/note-audio.js'

export default {
	props: ['notes'],
	template: `
	<section  class="note-preview-container flex">
		<div class="note" v-for="note in notes" >
			<component @dragover.prevent="onDragOver" @dragend.prevent="onDragEnd" @dragstart="onDragStart"
			 draggable="true" :style="note.style" :is="note.type" :note='note' @setBoundingBox="onSetBoundingBox"></component>
			<div  :style="note.style" class="flex note-btn-container">
				
				<button @click="onRemoveNote(note.id)"> <img src="assest/icons/delete.svg" alt="delete"> </button>
				<button @click="onPinNote(note.id)"> <img src="assest/icons/pin.svg" alt="pin"> </button>
				<button @click="onDuplicateNote(note.id)"> <img src="assest/icons/duplicate.svg" alt="duplicate"> </button>
				
				<!-- <label :data-id="note.id" for="note-bg-color"><img src="assest/icons/background-color.svg" alt="img"></label> -->
				<input @input="onSetBgColor($event,note)" :value="note.style.backgroundColor"  id="note-bg-color"  type="color">


		 		<!-- <label for="note-color"><img src="assest/icons/txt-color.svg" alt="img"></label> -->
         		<input @input="onSetColor($event,note)" id=note-color  :value="note.style.color" type="color">


				
			</div>
		</div>
	</section>
	`,
	data() {
		return {
			id: null,
			bgColor: null
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
			this.$emit('pin', id)
		},
		onDuplicateNote(id) {
			this.$emit('duplicate', id)
		},
		onSetBgColor({ target: { value } }, note) {
			note.style.backgroundColor = value
			this.$emit('colorChange', note)
		},
		onSetColor({ target: { value } }, note) {
			note.style.color = value
			this.$emit('colorChange', note)
		},
		onDragStart() {
			console.log('start')
		},
		onDragEnd() {
			// console.log('dragged')
		},
		onDragOver({ clientX, clientY }) {
			// console.log(clientX, clientY)
			const afterElement = this.getDragAfterElement(clientX, clientY)
		},
		onSetBoundingBox({ note, boundingBox }) {
			note.boundingBox = boundingBox
			this.$emit('updateBoundingBox', note)
		},
		getDragAfterElement(x, y) {
			this.notes.forEach(note => {
				console.log(note)
			})
		}
	},
	computed: {}
}

// 		const offset = y - note.boundingBox.top - note.boundingBox.height / 2
// 		console.log(offset)
// if (offset < 0 && offset > closest.offset) {
// 	return { offset: offset, element: child }
// } else {
// 	return note
// }
