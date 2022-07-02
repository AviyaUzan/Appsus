import bookPreview from './book-preview.cmp.js'
export default {
	props: ['books'],
	template: `
   <section class="main-layout book-list">
          <ul>
              <li  v-for="(book,idx) in books" :key="book.id" class="book-preview-container">
                  <book-preview :book="book"/>
                  <div class="actions">
                      <button class="book-btn" @click="remove(book.id)">X</button>
					  <router-link class="book-btn" :to="'/book/'+book.id">Details</router-link>
                  </div>
              </li>
          </ul>
      </section>
  `,
	components: {
		bookPreview
	},

	data() {
		return {
			isSelected: false
		}
	},
	methods: {
		remove(bookId) {
			this.$emit('removed', bookId)
		}
	}
}
