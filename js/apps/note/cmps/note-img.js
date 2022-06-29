export default {
	props: ['note'],
	template: `
    <article :style="{backgroundColor: note.style.backgroundColor}" class="flex note">
		<h3>title: {{note.info.title}}</h3>
		<img :src="note.info.url" alt="">
	</article>
`,
	data() {
		return {}
	},
	created() {
		console.log('img', this.note)
	},
	methods: {},
	computed: {},
	unmounted() {}
}
