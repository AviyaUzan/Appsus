export default {
	props: ['text'],
	template: `
    <p>{{formatedText}}<span v-if="!isMore && longText">...</span> <span :style="readStyle" v-if="longText" @click="isMore=!isMore"></span></p>
`,
	data() {
		return {
			isMore: false,
			longText: this.text.length > 40,
		}
	},
	methods: {},
	computed: {
		formatedText() {
			return this.isMore ? this.text : this.text.slice(0, 40)
		},
		// readText() {
		// 	return this.isMore ? ' Read Less' : ' Read more'
		// },
		readStyle() {
			return {
				color: this.isMore ? 'red' : 'blue',
				cursor: 'pointer',
				'text-decoration': 'underline',
				// textDecoration: 'underline',
			}
		},
	},
}