import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const EMAILS_KEY = 'emails'

const criteria = {
	status: 'inbox/sent/trash/draft',
	txt: 'puki', // no need to support complex text search
	isRead: true, // (optional property, if missing: show all)
	isStared: true, // (optional property, if missing: show all)
	lables: ['important', 'romantic'] // has any of the labels
}

const loggedinUser = {
	email: 'user@appsus.com',
	fullname: 'Mahatma Appsus'
}

_creatEmails()

export const emailService = {
	getEmails,
	get,
	query,
	remove,
	save
}

function query() {
	return storageService.query(EMAILS_KEY)
}

function remove(emailId) {
	return storageService.remove(EMAIL_KEYS, emailId)
}

function get(emailId) {
	console.log(emailId)
	console.log(storageService.get(EMAILS_KEY, emailId))
	return storageService.get(EMAILS_KEY, emailId)
}

function save(email) {
	if (email.id) return storageService.put(EMAIL_KEY, email)
	else return storageService.post(EMAIL_KEY, email)
}

function _creatEmails() {
	// let emails = emailService.query().then(mails => this.mails = mails)
	let emails = utilService.loadFromStorage(EMAILS_KEY)
	if (!emails || !emails.length) {
		emails = getEmails()
		utilService.saveToStorage(EMAILS_KEY, emails)
	}
	return emails
}

function getEmails() {
	return [
		{
			name: 'aviya uzan',
			id: '1',
			subject: 'Miss you!',
			body: 'Would love to catch up sometimes',
			isRead: false,
			sentAt: 1551133930594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',
			state: 'trash'
		},
		{
			name: 'maddy pollak',
			id: storageService.makeId(),
			subject: 'Hello Mama',
			body: 'I love you',
			isRead: true,
			sentAt: 155114440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg',
			state: 'inbox'
		},
		{
			name: 'aviya uzan',
			id: storageService.makeId(),
			subject: 'Miss you!',
			body: 'Would love to catch up sometimes',
			isRead: false,
			sentAt: 1551133930594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',
			state: 'trash'
		},
		{
			name: 'maddy pollak',
			id: storageService.makeId(),
			subject: 'Hello Mama',
			body: 'I love you',
			isRead: true,
			sentAt: 155114440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg',
			state: 'inbox'
		},
		{
			name: 'aviya uzan',
			id: storageService.makeId(),
			subject: 'Miss you!',
			body: 'Would love to catch up sometimes',
			isRead: false,
			sentAt: 1551133930594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',
			state: 'trash'
		},
		{
			name: 'maddy pollak',
			id: storageService.makeId(),
			subject: 'Hello Mama',
			body: 'I love you',
			isRead: true,
			sentAt: 155114440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'maddy pollak',
			id: storageService.makeId(),
			subject: 'Hello Mama',
			body: 'I love you',
			isRead: true,
			sentAt: 155114440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		},
		{
			name: 'roni kuchin',
			id: storageService.makeId(),
			subject: 'YES QUEEN',
			body: 'lets go party',
			isRead: false,
			sentAt: 14440594,
			to: 'momo@momo.com',
			isStarred: false,
			img: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
			state: 'inbox'
		}
	]
}
