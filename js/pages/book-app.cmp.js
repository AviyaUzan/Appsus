import { bookService } from '../apps/book/services/book-service.js'
import bookList from '../apps/book/cmps/book-list.cmp.js'
import bookFilter from '../apps/book/cmps/book-filter.cmp.js'

export default {
	template: `
    <book-filter @filtered="setFilter" />
    <book-list @removed="removeBook" :books="booksToShow"  />
	`,
	components: {
		bookList,
		bookFilter
	},
	data() {
		return {
			books: bookService.query(),
			filterBy: null
		}
	},
	created() {
		bookService.query().then(books => (this.books = books))
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy
		},
		removeBook(bookId) {
			console.log(bookId)
		}
	},
	computed: {
		booksToShow() {
			if (!this.filterBy) return this.books
			const regex = new RegExp(this.filterBy.title, 'i')
			return this.books.filter(
				book =>
					regex.test(book.title) && book.listPrice.amount >= this.filterBy.price
			)
		}
	}
}
