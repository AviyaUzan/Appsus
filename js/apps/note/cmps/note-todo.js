export default {
	props: ['note'],
	template: `
       <article class="note-content txt-note flex">
		<h3>{{note.title}}</h3>
        <p v-for="(todo,idx) in note.info" class="todo-container">
           {{idx}}.{{todo.txt}} 
			<!-- done at: {{todo.doneAt}} -->
        </p>
	</article>

`
}
