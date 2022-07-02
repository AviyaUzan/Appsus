import { eventBus } from '../../../services/eventBus-service.js'
export default {
	props: ['note'],
	template: `
    <article ref="elNote" class="flex img-note note-content">
		<h3 contenteditable @input="onTitleChange" >{{note.title}}</h3>
		<img :src="note.info" alt="img">
	</article>
`,
	methods: {
		onTitleChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'title'
			})
		}
	},
	mounted() {
		this.$emit('setBoundingBox', {
			note: this.note,
			boundingBox: this.$refs.elNote.getBoundingClientRect()
		})
	}
}
