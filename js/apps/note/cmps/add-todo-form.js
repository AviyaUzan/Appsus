export default {
	props: ['colors'],
	template: `
 		<form @submit.prevent="onAddNote" class="add-note-input flex">
			 <input v-model="title" :style="getColors" type="text"  placeholder="Title" />
			 <input v-model="info" :style="getColors" type="text" placeholder="Enter comma separated list..." />
			 <button class="submit-note-btn" type="submit">submit</button>
			</form>
`,
	data() {
		return {
			title: null,
			info: null
		}
	},
	methods: {
		onAddNote() {
			this.$emit('addNote', {
				title: this.title,
				info: this.getTodos(this.info),
				type: 'note-todo',
				style: {
					color: this.colors.txt,
					backgroundColor: this.colors.bg
				}
			})
		},
		getTodos(info) {
			if (!info) return null
			return info.split(',').map(todo => ({ txt: todo, doneAt: null }))
		}
	},
	computed: {
		getColors() {
			return {
				color: this.colors.txt,
				'background-color': this.colors.bg
			}
		}
	}
}
