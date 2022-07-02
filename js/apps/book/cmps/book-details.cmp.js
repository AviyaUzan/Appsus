import longText from '../../../cmps/long-text.cmp.js'
import addReview from './add-review.cmp.js'
import { bookService } from '../services/book-service.js'
import { eventBus } from '../../../services/eventBus-service.js'
export default {
	template: `

    <section v-if="book" class="book-details">
		<div class="title-container">
			<h4>Book Details:</h4>
    	    <strong class="book-title">{{book.title}}</strong>
		</div>
		<div class="img-container">
			<span v-if="book.listPrice.isOnSale" class="sale">-40%</span>
        	<img :src="bookImgUrl" alt="">
		</div>
        <div class="description-container">
			<strong>{{book.subtitle}}</strong>
			<long-text :text="book.description"/>
			
        </div>
        <div class="book-info-container">
            <p>Categories: {{book.categories.join(', ')}}</p>
            <p>page Count: {{book.pageCount }} <span>{{pageCount}}</span></p>
            <p>Authors: {{book.authors.join(', ')}}</p>
            <p>Publish Date: {{book.publishedDate}} <span>{{bookAge}}</span></p>
			<p :class="currencyStyle">Price: {{getCurrency}}</p>
        </div>
		<router-link class="book-btn" :to="'/book'">Back</router-link>
		<router-link class="book-btn prev-next-btns" @click="prevPage" :to="'/book/' + prevBookId">Previous Book</@>
		<router-link class="book-btn prev-next-btns" :to="'/book/' + nextBookId">Next Book</router-link>
    </section>
	<add-review @add-review="addReview" @remove-review="removeReview" :book="book"/>
	`,
	data() {
		return {
			book: null,
			nextBookId: null,
			prevBookId: null
		}
	},
	components: {
		longText,
		addReview
	},
	methods: {
		addReview(review) {
			bookService.addReview(this.book.id, review).then(book => {
				this.book = book
				eventBus.emit('show-msg', {
					txt: `A review on book ${this.book.id} was successfully added`,
					type: 'success'
				})
			})
		},
		removeReview(reviewId) {
			console.log('reviewId', reviewId)

			bookService.removeReview(this.book.id, reviewId).then(book => {
				this.book = book
				eventBus.emit('show-msg', {
					txt: `A review on book ${this.book.id} was successfully removed`,
					type: 'success'
				})
			})
		}
	},
	computed: {
		bookImgUrl() {
			return `${this.book.thumbnail}`
		},
		pageCount() {
			const pageCount = this.book.pageCount
			if (pageCount > 500) return ' Long reading'
			else if (pageCount > 200) return ' Decent reading'
			else if (pageCount < 100) return ' Light reading'
		},
		bookAge() {
			const publishDate = this.book.publishedDate
			const currYear = new Date().getFullYear()
			const diff = currYear - publishDate
			if (diff > 10) return ' Veteran book'
			else if (diff < 1) return ' New book'
		},
		getCurrency() {
			return new Intl.NumberFormat('en-EN', {
				style: 'currency',
				currency: this.book.listPrice.currencyCode
			}).format(this.book.listPrice.amount)
		},
		currencyStyle() {
			if (this.book.listPrice.amount > 150) return 'red'
			else if (this.book.listPrice.amount < 20) return 'green'
		}
	},
	created() {
		const id = this.$route.params.bookId
		bookService.get(id).then(book => (this.book = book))
	},
	watch: {
		'$route.params.bookId': {
			handler() {
				const id = this.$route.params.bookId
				console.log(id)
				if (!id) return
				bookService.get(id).then(book => {
					this.book = book
					bookService
						.getNextBookId(book.id)
						.then(nextBookId => (this.nextBookId = nextBookId))
					bookService
						.getPrevBookId(book.id)
						.then(prevBookId => (this.prevBookId = prevBookId))
				})
			},
			immediate: true
		}
	}
}
