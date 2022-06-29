import homePage from './pages/home-page.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import noteApp from './pages/note-app.cmp.js'
import bookApp from './pages/books-app.cmp.js'

const routes = [
	{
		path: '/',
		component: homePage
	},
	{
		path: '/email',
		component: emailApp
	},
	{
		path: '/note',
		component: noteApp
	},
	{
		path: '/book',
		component: bookApp
	}
	// {
	//     path: '/book/:bookId',
	//     component: bookDetails
	// },
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory()
})
