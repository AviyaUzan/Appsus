import { emailService } from '../apps/mail/services/email-service.js';
import emailList from '../apps/mail/pages/email-list.cmp.js'
import emailSideNav from '../apps/mail/cmps/email-side-nav.cmp.js'

export default {
	template: `
    <section>
        <h1>mails :)</h1>
        		<input type="text" placeholder="Search email">
                <email-side-nav :emails="emails"/>
                <email-list :emails="emails"/>
    </section>
`,
    components: {
        emailList,
        emailSideNav,
    },
    data() {
        return {
            emails: null
        }
    },
    created(){
        // emailService.query().then(mails => this.mails = mails) 
        this.emails = emailService.getEmails()
    },
}