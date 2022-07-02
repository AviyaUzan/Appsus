import { bookService } from '../services/book-service.js'

export default {
	props: ['book'],
	template: `
		<div class="review-container">
			<form @submit.prevent="addReview" class="review-container">
			<p><label for="name">Enter Full Name:</label></p>
			<input ref="input" v-model="review.readerName" id="name" type="text" >
			<p><select v-model="review.rate">
				<option disabled hidden>Select a rating</option>
				<option v-for="n in 5" :value="n">{{n}}</option>
			</select>
		</p>
		<input v-model="review.date" type="date">
			<p><label for="review">Add a review:</label></p>
			<textarea id="review" v-model="review.bookReview" rows="4" cols="50"></textarea>
			<button class="book-btn" type="submit">Submit</button>
		</form>
		<div class="reviews">
			<p>reviews:</p>
			<hr/>
		<div v-for="review in book?.reviews">
			<p>Name: {{review.readerName}}</p>
			<p>Rate: {{review.rate}}</p>
			<p>Date: {{review.date}}</p>
			<p>Review: {{review.bookReview}}</p>
			<button class="book-btn" @click="removeReview(review.id)">X</button>
			<hr/>
		</div>
		</div>
	</div>
`,
	data() {
		return {
			review: {
				readerName: 'Books Reader',
				rate: 'Select a rating',
				date: new Date().toLocaleDateString('en-ca'),
				bookReview: ''
			}
		}
	},
	mounted() {
		this.$refs.input.focus()
	},
	methods: {
		addReview() {
			this.$emit('addReview', this.review)
			this.review = bookService.getEmptyReview()
		},
		removeReview(revId) {
			this.$emit('removeReview', revId)
		}
	}
}
