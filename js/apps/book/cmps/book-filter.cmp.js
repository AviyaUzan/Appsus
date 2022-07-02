export default {
	template: `
 <section class="main-layout book-filter">
	<p>Filter By:</p>
 	<label for="title"> Title: </label>
    <input id="title" type="text" v-model="filterBy.title" @change="filter('title')">
	<label for="price"> Price: </label>
    <input id="price" type="range" v-model="filterBy.price" min="0" max="200" @change="filter('price')" >
	<router-link class="book-btn" to='/addBook'>add book</router-link>
 </section>
`,
	data() {
		return {
			filterBy: {
				title: '',
				price: 0
			}
		}
	},
	methods: {
		filter(filter) {
			this.$emit('filtered', this.filterBy)
		}
	},
	computed: {}
}
