import addTxt from './add-txt-form.js'
import addTodo from './add-todo-form.js'
import addImg from './add-img-form.js'
import addVid from './add-vid-form.js'
import addAudio from './add-audio-form.js'

export default {
	template: `
  <section class="add-note">
        <component @add-note="addNote" :is="formType"  :colors="colors"/>
		<!-- <add-txt/> -->
        <div class="add-note-btn-container">

		 <label for="note-color-input"><img src="../../../../assest/icons/txt-color.svg" alt="img"></label>
         <input v-show="false" id=note-color-input v-model="colors.txt" type="color">

		 <label for="note-bg-color-input"><img src="../../../../assest/icons/background-color.svg" alt="img"></label>
		 <input v-show="false" id="note-bg-color-input" v-model="colors.bg" type="color">

		 <button @click ="onChangeInput" value="txt" ><img src="assest/icons/text.svg" alt="img"></button>
		 <button @click ="onChangeInput" value="todo"><img src="assest/icons/todo.svg" alt="todo"></button>
		 <button @click ="onChangeInput" value="img" ><img src="assest/icons/img.svg" alt="img"></button>
		 <button @click ="onChangeInput" value="vid"><img src="assest/icons/video.svg" alt="img"></button>
		 <button @click ="onChangeInput" value="audio"><img src="../../../../assest/icons/audio.svg" alt="img"></button>
		 

        </div>
		</section> 
    `,
	components: {
		addTxt,
		addTodo,
		addImg,
		addVid,
		addAudio
	},
	data() {
		return {
			formType: 'add-txt',
			colors: {
				txt: '#202124',
				bg: '#ffffff'
			}
		}
	},
	methods: {
		onChangeInput({ target: { value } }) {
			this.formType = 'add-' + value
		},
		addNote(note) {
			this.$emit('addNote', note)
		}
	}
}
