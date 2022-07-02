export default {
	template: `
 <section class="main-layout book-filter">
 	<label for="title"> Title:
    	<input id="title" type="text" v-model="filterBy.title" @change="filter('title')">
	</label>
	<label for="price"> Price: 
    	<input id="price" type="range" v-model="filterBy.price" min="0" max="200" @change="filter('price')" >
	</label>
	<router-link class="book-btn add-book-btn" to='/addBook'>add book</router-link>
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
