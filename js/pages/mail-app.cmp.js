import mailList from '../apps/mail/pages/mail-list.cmp.js'
import { mailService } from '../apps/mail/services/mail-service.js';

export default {
	template: `
    <section>
        <h1>mails :)</h1>
        		<input type="text" placeholder="Search email">
                <mail-list :mails="mails"/>
    </section>
`,
    components: {
    mailList,
    },
    created(){
        // mailService.query().then(mails => this.mails = mails) 
        this.mails = mailService.getMails()
    },
    data() {
        return {
            mails: null
        }
    }
}