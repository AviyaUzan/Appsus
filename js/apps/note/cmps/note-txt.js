export default {
	props: ['note'],
	template: `
       <article :style="getStyle" class="note flex">
		<h3>{{note.title}}</h3>
		<h4>{{note.info}}</h4>
		<!-- <img :src="note.info.txt" alt=""> -->
	</article>
`,
	methods: {},
	computed: {
		getStyle() {
			return {
				backgroundColor: this.note.style.backgroundColor,
				color: this.note.style.color
			}
		}
	}
}
