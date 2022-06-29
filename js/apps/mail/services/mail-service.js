// import { storageService } from '../../../services/async-storage-service.js';

const MAILS_KEY = 'mails';

export const mailService = {
    getMails
    // query,
};

// function query() {
//     return storageService.query(MAILS_KEY);
// }

console.log('getMails()',getMails())

function getMails() {
    return [
        {
            name: 'aviya uzan',
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com',
            img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
        },
        {
            name: 'maddy pollak',
            id: 'e102',
            subject: 'Hello Mama',
            body: 'I love you',
            isRead: false,
            sentAt: 155114440594,
            to: 'momo@momo.com',
            img: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=2000"
        },
    ];
}



//   function _createMails() {
//     if (!mails || !mails.length) {
//         mails = getMails()
//         utilService.saveToStorage(MAILS_KEY, mails);
//     }
//     return mails;
//   }
