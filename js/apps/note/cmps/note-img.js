export default {
	props: ['note'],
	template: `
    <article :style="{backgroundColor: note.style.backgroundColor}" class="note">
		<h3>title: {{note.info.title}}</h3>
		<img :src="note.info.url" alt="">
	</article>
`,
	data() {
		return {}
	},
	created() {},
	methods: {},
	computed: {},
	unmounted() {}
}
