export default {
	props: ['note'],
	template: `
       <article :style="getStyle" class="note-content txt-note flex">
		<h3>{{note.title}}</h3>
		<p>{{note.info}}</p>
	</article>
`,
	computed: {
		getStyle() {
			return {
				backgroundColor: this.note.style.backgroundColor,
				color: this.note.style.color
			}
		}
	}
}
