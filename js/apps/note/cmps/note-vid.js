export default {
	template: `
       <article :style="{backgroundColor: note.style.backgroundColor}" class="note flex">
		    <h3>{{note.info.txt}}</h3>
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
