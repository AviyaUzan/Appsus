import { emailService } from '../apps/mail/services/email-service.js';
import emailList from '../apps/mail/pages/email-list.cmp.js'
import emailSideNav from '../apps/mail/cmps/email-side-nav.cmp.js'

export default {
	template: `
    <section class="email-app">
        		<input type="text" placeholder="Search email">
                <div class="email-content">
                    <email-side-nav @filter="filterByEmailState"/>
                    <email-list class="email-app-list":emails="emailsToShow"/>
                </div>
    </section>
`,
    components: {
        emailList,
        emailSideNav,
    },
    data() {
        return {
            emails: null,
            filterBy: 'all',
        }
    },
    created(){
        // emailService.query().then(mails => this.mails = mails) 
        this.emails = emailService.getEmails()
    },
    methods: {
        filterByEmailState(filterBy){
            this.filterBy = filterBy
            console.log('this.filterBy',this.filterBy)
        }
    },
    computed: {
        emailsToShow() {
            if(this.filterBy === 'all') return this.emails
            return this.emails.filter((email) => {
                return email.state === this.filterBy
            });
        }
    }
}