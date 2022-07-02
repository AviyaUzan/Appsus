import { eventBus } from '../../../services/eventBus-service.js'

export default {
	props: ['note'],
	template: `
       <article  class="note-content txt-note flex">
		<h3 contenteditable @input="onTitleChange" >{{note.title}}</h3>
		<p contenteditable  @input="onInfoChange" >{{note.info}}</p>
	</article>
`,
	methods: {
		onTitleChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'title'
			})
		},
		onInfoChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'info'
			})
		}
	},
	created() {
		this.$emit('style', this.note.style)
	}
}
