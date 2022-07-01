export default {
	props: ['note'],
	template: `
    <article :style="getStyle" class="flex note-content">
		<h3>{{note.title}}</h3>
		<iframe width="315" height="236.25" :src="getIframeSrc" 
			frameborder="0" allowfullscreen></iframe>
	</article>
`,
	computed: {
		getStyle() {
			return {
				backgroundColor: this.note.style.backgroundColor,
				color: this.note.style.color
			}
		},
		getIframeSrc() {
			const src = `//www.youtube.com/embed/${this.note.info}`
			//  no cookie prevents error
			return src
		}
	}
}
