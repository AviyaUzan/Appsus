import homePage from './pages/home-page.cmp.js'
import mailApp from "./pages/mail-app.cmp.js";
import noteApp from "./pages/notes-app.cmp.js";
import bookApp from "./pages/books-app.cmp.js";

const routes = [
	{
		path: '/',
		component: homePage
	},
	{
        path: '/mail',
        component: mailApp,
	},
	{
        path: '/note',
        component: noteApp
    },
	{
        path: '/book',
        component: bookApp
    },
    // {
    //     path: '/book/:bookId',
    //     component: bookDetails
    // },
]

export const router = VueRouter.createRouter({
	routes,
	history: VueRouter.createWebHashHistory()
})
