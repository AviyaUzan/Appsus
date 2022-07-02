import { eventBus } from '../../../services/eventBus-service.js'

export default {
	props: ['note'],
	template: `
       <article ref="elNote" class="note-content txt-note flex">
		<h3 contenteditable @input="onTitleChange" >{{note.title}}</h3>
		<p contenteditable  @input="onInfoChange" >{{note.info}}</p>
		<p>{{}}</p>
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
		onInfoChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'info',
				box: this.box
			})
		}
	},
	created() {
		this.$emit('style', this.note.style)
	},
	mounted() {
		this.box = this.$refs.elNote.getBoundingClientRect()
		this.box = this.$emit('setBoundingBox', {
			note: this.note,
			boundingBox: this.box
		})
	}
}
