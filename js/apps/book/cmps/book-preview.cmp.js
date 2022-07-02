export default {
	props: ['book'],
	template: `
      <p>{{book.title}}</p>
      <img :src="book.thumbnail" alt="">
      <p>{{getCurrency}}</p>
  `,
	data() {
		return {}
	},
	methods: {},
	computed: {
		getCurrency() {
			return new Intl.NumberFormat('en-EN', {
				style: 'currency',
				currency: this.book.listPrice.currencyCode
			}).format(this.book.listPrice.amount)
		}
	}
}
