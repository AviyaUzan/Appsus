export default {
	props: ['note'],
	template: `
    <article :style="getStyle" class="flex img-note note-content">
		<h3>{{note.title}}</h3>
		<img :src="note.info" alt="img">
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
