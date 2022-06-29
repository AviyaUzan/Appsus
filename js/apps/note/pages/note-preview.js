// import { noteService } from '../services/note-service.js'
import noteTxt from '../cmps/note-txt.js'
import noteImg from '../cmps/note-img.js'
import noteTodo from '../cmps/note-todo.js'

export default {
	template: `
	<section class="book-preview-container">
		<div v-for="note in notes" >
			<component :is="note.type" :info="note.type"></component>
			note.type: {{note.type}}
			<!-- <component is="h1" > Hola </component> -->
		</div>
	</section>
	`,
	componetns: {
		noteTodo,
		noteImg,
		noteTxt
	},
	data() {
		return {
			notes: [
				{
					id: 'n101',
					type: 'note-txt',
					isPinned: true,
					info: {
						txt: 'Fullstack Me Baby!'
					}
				},
				{
					id: 'n102',
					type: 'note-img',
					info: {
						url: 'http://some-img/me',
						title: 'Bobi and Me'
					},
					style: {
						backgroundColor: '#00d'
					}
				},
				{
					id: 'n103',
					type: 'note-todo',
					info: {
						label: 'Get my stuff together',
						todo: [
							{ txt: 'Driving liscence', doneAt: null },
							{ txt: 'Coding power', doneAt: 187111111 }
						]
					}
				}
			]
		}
	},
	methods: {},
	computed: {},
	unmounted() {}
}
