export default {
	template: `
			<form @submit.prevent="onAddTxt" class="add-keep-input flex">
				<input v-model="title" type="text" placeholder="title" />
				<!-- add this later -->
        		<textarea  v-model="txt" placeholder="text" rows = "3" cols = "60" name = "description"></textarea>
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
	created() {},
	methods: {
		onAddTxt() {
			this.$emit('addNote', {
				title: this.title,
				txt: this.txt,
				type: note - txt
			})
		}
	},
	computed: {},
	unmounted() {}
}
