export default {
	props: ['note'],
	template: `
       <article :style="getStyle" class="note flex">
		<h3>{{note.title}}</h3>
        <div v-for="(todo,idx) in note.info" class="todo-container">
           {{idx}}.{{todo.txt}} 
			<!-- done at: {{todo.doneAt}} -->
        </div>
	</article>

`,
	data() {
		return {}
	},
	methods: {},
	computed: {
		getStyle() {
			return {
				backgroundColor: this.note.style.backgroundColor,
				color: this.note.style.color
			}
		}
	},
	unmounted() {},
	created() {}
}
