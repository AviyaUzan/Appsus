import { storageService } from '../../../services/async-storage-service.js'
import { booksDB } from './../db/books.js'
const BOOKS_KEY = 'books'

export const bookService = {
	query,
	remove,
	save,
	getEmptyBook,
	get,
	addReview,
	getEmptyReview,
	removeReview,
	askSearchResults,
	addGoogleBook,
	getNextBookId,
	getPrevBookId
}
function query() {
	let books = storageService.query(BOOKS_KEY)
	return books.then(books => {
		if (!books || books.length === 0) books = getBooks()
		return books
	})
}
function get(bookId) {
	return storageService.get(BOOKS_KEY, bookId)
}

function remove(bookId) {
	return storageService.remove(BOOKS_KEY, bookId)
}

function save(book) {
	if (book.id) return storageService.put(BOOKS_KEY, book)
	else return storageService.post(BOOKS_KEY, book)
}

function getBooks() {
	storageService.postMany(BOOKS_KEY, booksDB)
	return booksDB
}

function getEmptyReview() {
	return {
		readerName: '',
		rate: '',
		readingDate: '',
		bookReview: ''
	}
}

function addReview(bookId, review) {
	review.id = storageService.makeId()
	return get(bookId).then(book => {
		if (!book.reviews) book.reviews = []
		book.reviews.push(review)
		return storageService.put(BOOKS_KEY, book)
	})
}

function removeReview(bookId, reviewId) {
	return get(bookId).then(book => {
		const idx = book.reviews.findIndex(review => review.id === reviewId)
		book.reviews.splice(idx, 1)
		return storageService.put(BOOKS_KEY, book)
	})
}

function getEmptyBook() {
	return {
		id: storageService.makeId(),
		title: '',
		subtitle: '',
		authors: [''],
		publishedDate: '',
		description: '',
		pageCount: '',
		categories: [''],
		thumbnail: '',
		language: '',
		listPrice: {
			amount: 0,
			currencyCode: 'EUR',
			isOnSale: false
		}
	}
}

function askSearchResults(value) {
	return axios
		.get(
			`https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`
		)
		.then(({ data: { items } }) => items)
}

function addGoogleBook(book) {
	const {
		volumeInfo: {
			title,
			subtitle,
			pageCount,
			authors,
			publishedDate,
			description,
			language,
			imageLinks: { thumbnail }
		}
	} = book
	const listPrice = {
		amount: 10,
		currencyCode: 'EUR',
		isOnSale: false
	}
	const newBook = {
		title,
		subtitle,
		pageCount,
		authors,
		publishedDate,
		description,
		language,
		thumbnail,
		listPrice
	}
	save(newBook)
}

function getNextBookId(bookId) {
	return storageService.query(BOOKS_KEY).then(books => {
		const idx = books.findIndex(book => book.id === bookId)
		return idx < books.length - 1 ? books[idx + 1].id : books[0].id
	})
}

function getPrevBookId(bookId) {
	return storageService.query(BOOKS_KEY).then(books => {
		const idx = books.findIndex(book => book.id === bookId)
		return idx >= 0 ? books[idx - 1].id : books[books.length - 1].id
	})
}
