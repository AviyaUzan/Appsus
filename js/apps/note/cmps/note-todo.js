export default {
	props: ['note'],
	template: `
 <div>this is a todo cmp</div>
`,
	data() {
		return {}
	},
	created() {},
	methods: {},
	computed: {},
	unmounted() {},
	created() {
		console.log('todo', this.note)
	}
}
