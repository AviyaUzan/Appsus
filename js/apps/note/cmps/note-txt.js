export default {
	props: ['note'],
	template: `
       <article :style="{backgroundColor: note.style.backgroundColor}" class="note flex">
		<h3>{{note.info.txt}}</h3>
		<!-- <img :src="note.info.txt" alt=""> -->
	</article>
`,

	data() {
		return {}
	},
	created() {},
	methods: {},
	computed: {},
	unmounted() {},
	created() {}
}
