import homePage from './pages/home-page.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import noteApp from './pages/note-app.cmp.js'
import bookApp from './pages/books-app.cmp.js'
import emailDetails from '../js/apps/mail/pages/email-details.cmp.js'


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
	},
	{
	    path: '/email/:emailId',
	    component: emailDetails
	},
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory()
})
