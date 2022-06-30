export default {
	props: ['colors'],
	template: `
    		<form @submit.prevent="onAddNote" class="add-note-input flex">
				<input :style="getColors" v-model="title" type="text" placeholder="Title" />
				<input :style="getColors" v-model="info" type="text" placeholder="Enter image URL..." />
				<button type="submit">submit</button>
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
				info: this.info,
				type: 'note-img',
				style: {
					color: this.colors.txt,
					backgroundColor: this.colors.bg
				}
			})
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
