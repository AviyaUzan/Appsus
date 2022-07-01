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
<<<<<<< HEAD
    getEmails,
    get,
    query,
    remove,
    save,
    getPrevEmailId,
    getNextEmailId,
};
=======
	getEmails,
	get,
	query,
	remove,
	save
}
>>>>>>> 3727e87ebc92b233f818638a247c00003889f9a1

function query() {
	return storageService.query(EMAILS_KEY)
}

<<<<<<< HEAD
   function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId)
  }
=======
function remove(emailId) {
	return storageService.remove(EMAIL_KEYS, emailId)
}
>>>>>>> 3727e87ebc92b233f818638a247c00003889f9a1

function get(emailId) {
	console.log(emailId)
	console.log(storageService.get(EMAILS_KEY, emailId))
	return storageService.get(EMAILS_KEY, emailId)
}

function save(email) {
<<<<<<< HEAD
    if (email.id) return storageService.put(EMAILS_KEY, email)
    else return storageService.post(EMAILS_KEY, email)
=======
	if (email.id) return storageService.put(EMAIL_KEY, email)
	else return storageService.post(EMAIL_KEY, email)
>>>>>>> 3727e87ebc92b233f818638a247c00003889f9a1
}

function getPrevEmailId(emailId){
    return storageService.query(EMAILS_KEY)
      .then(emails => {
        const idx = emails.findIndex(email => email.id === emailId)
        return (idx > 0)? emails[idx - 1].id : emails[emails.length - 1].id
    })
  }
  
  function getNextEmailId(emailId) {
      return storageService.query(EMAILS_KEY)
      .then(emails => {
        const idx = emails.findIndex(email => email.id === emailId)
        return (idx < emails.length-1)? emails[idx + 1].id : emails[0].id
    })
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
            id: '101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 331133930594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
            state: 'trash',
        },
        {
            name: 'maddy pollak',
            id: '102',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: true,
            sentAt: 15511444334,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '103',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 14444594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'riki mahpud',
            id: '104',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 144555594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '105',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 1446666,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg",
            state: 'inbox',
        },
        {
            name: 'aviya uzan',
            id: '106',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 155550594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
            state: 'trash',
        },
        {
            name: 'maddy pollak',
            id: '107',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: true,
            sentAt: 15511666694,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '108',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 1333394,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '109',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 166594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '110',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 14888894,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://www.taylorherring.com/wp-content/uploads/2015/03/Archetypal-Male-Face-of-Beauty-embargoed-to-00.01hrs-30.03.15.jpg",
            state: 'inbox',
        },
        {
            name: 'aviya uzan',
            id: '111',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 12222930594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
            state: 'trash',
        },
        {
            name: 'maddy pollak',
            id: '112',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: true,
            sentAt: 155555594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '113',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 14222222,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'maddy pollak',
            id: '114',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: true,
            sentAt: 16664440594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
        {
            name: 'roni kuchin',
            id: '115',
            subject: 'YES QUEEN',
            body: 'lets go party',
            isRead: false,
            sentAt: 77594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            state: 'inbox',
        },
    ];
}
