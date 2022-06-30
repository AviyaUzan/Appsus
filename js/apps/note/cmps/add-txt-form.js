export default {
	props: ['colors'],
	template: `
			<form @submit.prevent="onAddNote" class="add-keep-input flex">
				<input  :style="getColors" v-model="title" type="text" placeholder="Title" />
        		<textarea :style="getColors" v-model="info" placeholder="text" rows = "3" cols = "60" name = "description"></textarea>
				<button type="submit">submit</button>
			</form>
		 <!-- make amount of rows dynamic -->
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
				type: 'note-txt',
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
