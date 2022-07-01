export default {
	props: ['note'],
	template: `
       <article :style="getStyle" class="note-content flex">
		<h3>{{note.title}}</h3>
		<h4>{{note.info}}</h4>
	</article>
`,
	computed: {
		getStyle() {
			return {
				backgroundColor: this.note.style.backgroundColor,
				color: this.note.style.color,
				'padding-left': '20px'
			}
		}
	}
}
