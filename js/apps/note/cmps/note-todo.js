export default {
	props: ['note'],
	template: `
       <article :style="{backgroundColor: note.style.backgroundColor}" class="note flex">
        <span>hi</span>
		<h3>{{note.info.label}}</h3>
        <div v-for="todo in note.info.todo" class="todo-container">
            {{todo.txt}} done at: {{todo.doneAt}}
        </div>
		<img :src="note.info.txt" alt="">
	</article>

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
