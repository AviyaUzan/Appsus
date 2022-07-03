export default {
	template: `
 <section class="main-layout book-filter search-book-container">
                <div class="book-centered">
                     <label for="search-book">
						<input type="search"  id="search-book" v-model="filterBy.title" @input="filter('title')" class="book-textfield" required>
						<span class="placeholder">Search book</span>
					</label>
          		</div>
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
			console.log(filter)
			this.$emit('filtered', this.filterBy)
		}
	},
	computed: {}
}
