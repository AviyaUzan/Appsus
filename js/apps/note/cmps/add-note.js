import addTxt from './add-txt-form.js'
import addTodo from './add-todo-form.js'
import addImg from './add-img-form.js'
import addVid from './add-vid-form.js'
import addAudio from './add-audio-form.js'
import { noteService } from '../services/note-service.js'

export default {
	template: `
  <section class="add-keep">
        <component @add-note="addNote" :is="formType"/>
		<!-- <add-txt/> -->
        <div class="add-keep-btn-container">
         <button><input type="color"></button>
		 <button @click ="onChangeInput" value="txt" >Add text</button>
		 <button @click ="onChangeInput" value="todo">task list</button>
		 <button @click ="onChangeInput" value="img" >Add image</button>
		 <button @click ="onChangeInput" value="vid">add video</button>
		 <button @click ="onChangeInput" value="audio">add audio</button>
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
		return { formType: 'add-txt' }
	},
	methods: {
		onChangeInput({ target: { value } }) {
			this.formType = 'add-' + value
		},
		addNote(note) {
			noteService.addNote(note)
			this.$router.go()
		}
	}
}
