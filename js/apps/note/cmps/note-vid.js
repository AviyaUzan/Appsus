export default {
	props: ['note'],
	template: `
    <article :style="getStyle" class="flex note">
		<h3>{{note.title}}</h3>
		<iframe width="210" height="157.5" :src="getIframeSrc" 
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
			const src = `//www.youtube-nocookie.com/embed/${this.note.info}`
			// no cookie prevents error
			return src
		}
	}
}
