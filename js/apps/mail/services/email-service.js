import { storageService } from '../../../services/async-storage-service.js';
import { utilService } from '../../../services/util-service.js';

const MAILS_KEY = 'emails';
_creatEmails()

export const emailService = {
    getEmails,
    get,
    query,
};

function query() {
    return storageService.query(MAILS_KEY)
  }

console.log('getEmails()',getEmails())

function _creatEmails() {
    // let emails = emailService.query().then(mails => this.mails = mails) 
    let emails = utilService.loadFromStorage(MAILS_KEY)
    if (!emails || !emails.length) {
        emails = getEmails()
        utilService.saveToStorage(MAILS_KEY, emails)
    }
    return emails;
}

function getEmails() {
    return [
        {
            name: 'aviya uzan',
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
        },
        {
            name: 'maddy pollak',
            id: 'e102',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: true,
            sentAt: 155114440594,
            to: 'momo@momo.com',
            isStarred: false,
            img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
        },
    ];
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
   }

function get(emailId) {
    return storageService.get(MAILS_KEY, emailId)
}

//   function _createMails() {
//     if (!mails || !mails.length) {
//         mails = getMails()
//         utilService.saveToStorage(MAILS_KEY, mails);
//     }
//     return mails;
//   }
