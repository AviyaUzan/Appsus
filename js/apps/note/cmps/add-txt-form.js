export default {
	props: ['colors'],
	template: `
			<form @submit.prevent="onAddTxt" class="add-keep-input flex">
				<input  :style="getColors" v-model="title" type="text" placeholder="title" />
        		<textarea :style="getColors" v-model="txt" placeholder="text" rows = "3" cols = "60" name = "description"></textarea>
				<button type="submit">submit</button>
			</form>
		 <!-- make amount of rows dynamic -->
`,
	data() {
		return {
			title: null,
			txt: null
		}
	},
	created() {
		console.log(this.colors.txt)
	},
	methods: {
		onAddTxt() {
			this.$emit('addNote', {
				title: this.title,
				txt: this.txt,
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
	},
	unmounted() {}
}
