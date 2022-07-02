import homePage from './pages/home-page.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import noteApp from './pages/note-app.cmp.js'
import emailDetails from '../js/apps/mail/pages/email-details.cmp.js'
import emailList from '../js/apps/mail/pages/email-list.cmp.js'
import addBook from '../js/apps/book/cmps/add-book.cmp.js'
import bookApp from './pages/book-app.cmp.js'
import bookDetails from '../js/apps/book/cmps/book-details.cmp.js'

const routes = [
	{
		path: '/',
		component: homePage
	},
	{
		path: '/email',
		component: emailApp,
		children: [
			{
				path: 'all',
				component: emailList
			},
			{
				path: ':emailId',
				component: emailDetails,
				props: true
			}
		]
	},
	{
		path: '/note',
		component: noteApp
	},
	{
		path: '/book',
		component: bookApp
	},
	{
		path: '/addBook',
		component: addBook
	},
	{
		path: '/book/:bookId',
		component: bookDetails
	}
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory()
})
