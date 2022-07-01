import { eventBus } from '../../../services/eventBus-service.js'
export default {
	props: ['note'],
	template: `
    <article class="flex vid-note note-content">
		<h3 contenteditable  @input="onTitleChange">{{note.title}}</h3>
		<iframe width="250" height="187.5" :src="getIframeSrc" 
			frameborder="0" allowfullscreen></iframe>
	</article>
`,
	computed: {
		getIframeSrc() {
			const src = `//www.youtube.com/embed/${this.note.info}`
			//  no cookie prevents error
			return src
		}
	},
	methods: {
		onTitleChange({ target: { innerText } }) {
			eventBus.emit('content-change', {
				note: this.note,
				txt: innerText,
				type: 'title'
			})
		}
	}
}
