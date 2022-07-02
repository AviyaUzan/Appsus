import { eventBus } from '../../../services/eventBus-service.js'
export default {
	props: ['note'],
	template: `
       <article ref="elNote" class="note-content txt-note flex">
		<h3 contenteditable @input="onTitleChange">{{note.title}}</h3>
        <p contenteditable @input="onTodoChange($event,idx)" v-for="(todo,idx) in note.info" class="todo-container">
          {{todo.txt}} 
			<!-- done at: {{todo.doneAt}} -->
        </p>
	</article>

`,
	data() {
		return { box: null }
	},

	methods: {
		onTitleChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'title',
				box: this.box
			})
		},
		onTodoChange({ target: { innerText } }, idx) {
			eventBus.emit('todo-change', {
				note: this.note,
				txt: innerText,
				idx,
				box: this.box
			})
		}
	},
	mounted() {
		this.box = this.$refs.elNote.getBoundingClientRect()
		this.$emit('setBoundingBox', {
			note: this.note,
			boundingBox: this.box
		})
	}
}
