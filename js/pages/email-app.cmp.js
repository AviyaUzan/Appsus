import { emailService } from '../apps/mail/services/email-service.js'
import emailList from '../apps/mail/pages/email-list.cmp.js'
import emailDetails from '../apps/mail/pages/email-details.cmp.js'
import emailSideNav from '../apps/mail/cmps/email-side-nav.cmp.js'

export default {
	template: `
    <section class="email-app">
        		<input type="text" placeholder="Search email">
                <div class="email-content">
                    <email-side-nav @filter="filterByEmailState"/>
                    <!-- <router-link to="/email/all">all</router-link> |
                    <router-link to="'/email/'+email.id">email</router-link>
                    <router-link to="/about/service">Services</router-link> -->
                    <router-view :emails="emailsToShow" />
                    <!-- <email-list class="email-app-list" :emails="emailsToShow"/> -->
					<!-- <email-list/> -->
                </div>
    </section>
`,
	components: {
		emailList,
		emailSideNav,
		emailDetails
	},
	data() {
		return {
			emails: null,
			filterBy: 'all'
		}
	},
	created() {
		// const { emailId } = this.$route.params
		// emailService.query().then(mails => this.mails = mails)
		this.emails = emailService.getEmails()
	},
	methods: {
		filterByEmailState(filterBy) {
			this.filterBy = filterBy
			console.log('this.filterBy', this.filterBy)
		}
		// @selected="selectEmail"
		// selectEmail(emailId){
		//     this.router.push(`/email/${emailId}`)
		// }
	},
	computed: {
		emailsToShow() {
			if (this.filterBy === 'all') return this.emails
			return this.emails.filter(email => {
				return email.state === this.filterBy
			})
		}
	}
}
