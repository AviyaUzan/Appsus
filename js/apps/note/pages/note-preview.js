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
		onSetBgColor({ target: { value } }, note) {
			note.style.backgroundColor = value
			this.$emit('colorChange', note)
		},
		onSetColor({ target: { value } }, note) {
			note.style.color = value
			this.$emit('colorChange', note)
		}
	},
	computed: {}
}
