import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'
import noteVid from '../cmps/note-vid.js'
import noteAudio from '../cmps/note-audio.js'

export default {
	props: ['notes'],
	template: `
	<section class="note-preview-container flex">
		<div class="note" v-for="note in notes" >
			<component :style="note.style" :is="note.type" :note='note'></component>
			<div  :style="note.style" class="flex note-btn-container">
				
				<button @click="onRemoveNote(note.id)"> <img src="assest/icons/delete.svg" alt="delete"> </button>
				<button @click="onPinNote(note.id)"> <img src="assest/icons/pin.svg" alt="pin"> </button>
				
				<label :data-color="note.id" for="note-bg-color"><img src="assest/icons/background-color.svg" alt="img">
				<input @input="onSetColor($event)" :value="note.style.backgroundColor" v-show="false" id="note-bg-color"  type="color"></label>


		 		<!-- <label for="note-color"><img src="assest/icons/txt-color.svg" alt="img"></label>
         		<input @change="onSetColor($event,note)" v-show="false" id=note-color  type="color"> -->


				
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
			console.log(id)
			this.$emit('remove', id)
		},
		onPinNote(id) {
			console.log(id)
			this.$emit('pin', id)
		},
		onSetColor({ target }) {
			console.log(target.parentNode.dataset)

			// console.log(this.bgColor)
			// { target: { value } }, note
			// console.log('new color', value)
			// console.log(id)
			// console.log('curr color', note.style.backgroundColor)
			// note.style.backgroundColor = this.style
			// this.$emit('bgColor', note)
		}
	},
	computed: {}
}
