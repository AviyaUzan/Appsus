import emailList from '../apps/mail/pages/email-list.cmp.js'
import { emailService } from '../apps/mail/services/email-service.js';

export default {
	template: `
    <section>
        <h1>mails :)</h1>
        		<input type="text" placeholder="Search email">
                <email-list :emails="emails"/>
    </section>
`,
    components: {
        emailList,
    },
    created(){
        // mailService.query().then(mails => this.mails = mails) 
        this.emails = emailService.getEmails()
    },
    data() {
        return {
            emails: null
        }
    }
}