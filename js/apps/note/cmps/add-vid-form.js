export default {
	props: ['colors'],
	template: `
    		<form @submit.prevent="onAddNote" class="add-keep-input flex">
				<input :style="getColors" v-model="title" type="text" placeholder="Title" />
				<input :style="getColors" v-model="info" type="text" placeholder="Enter image URL..." />
				<button type="submit">submit</button>
			</form>
`,
	data() {
		return {
			title: null,
			info: null,
			videoId: null
		}
	},
	methods: {
		onAddNote() {
			this.$emit('addNote', {
				title: this.title,
				info: this.getId(this.info),
				type: 'note-vid',
				style: {
					color: this.colors.txt,
					backgroundColor: this.colors.bg
				}
			})
		},
		getId(url) {
			const regExp =
				/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
			const match = url.match(regExp)
			return match && match[2].length === 11 ? match[2] : null
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
