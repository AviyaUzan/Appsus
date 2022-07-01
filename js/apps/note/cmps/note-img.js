export default {
	props: ['note'],
	template: `
    <article class="flex img-note note-content">
		<h3>{{note.title}}</h3>
		<img :src="note.info" alt="img">
	</article>
`
}
