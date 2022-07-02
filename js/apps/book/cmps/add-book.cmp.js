import { bookService } from '../services/book-service.js'

export default {
	template: `
		<section class="add-book-container">
			<h2>search for a book:</h2>
			<input v-model="value" @input="onSetSearch" type="text" list="books" placeholder="Search a book">
			<div>
              <ul :key="book.id" v-for="book in books">
                  <!-- <li @click="onAddBook(book)">{{book.volumeInfo.title}}</li> -->
				  <li  ><p>{{book.volumeInfo.title}}</p>
                  	<router-link to="/book" class="book-btn" @click="onAddBook(book)">+</router-link>
				  </li>
              </ul>
			  </div>
        </section>

`,
	data() {
		return {
			value: null,
			books: null
		}
	},
	created() {},
	methods: {
		onSetSearch() {
			bookService.askSearchResults(this.value).then(res => {
				this.books = res
				console.log(this.books)
			})
		},
		onAddBook(book) {
			bookService.addGoogleBook(book)
			// save(book)
		}
	},
	computed: {},
	unmounted() {}
}
