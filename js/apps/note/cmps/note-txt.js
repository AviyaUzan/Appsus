export default {
	props: ['note'],
	template: `
       <article  class="note-content txt-note flex">
		<h3>{{note.title}}</h3>
		<p>{{note.info}}</p>
	</article>
`,
	created() {
		this.$emit('style', this.note.style)
	}
}
