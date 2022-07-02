import { emailService } from '../apps/mail/services/email-service.js';
import emailList from '../apps/mail/pages/email-list.cmp.js';
import emailDetails from '../apps/mail/pages/email-details.cmp.js';
import emailSideNav from '../apps/mail/cmps/email-side-nav.cmp.js';

export default {
    template: `
    <section class="email-app">
                <div class="search-email-container" >
                    <div class="centered">
                        <label><input type="text" class="textfield" required><span class="placeholder">Search Email</span></label>
                    </div>
                </div>
                    <div class="email-content">
                        <email-side-nav @addEmail="addNewEmail" @filter="filterByEmailState"/>
                        <router-view @removed="removeEmail" :emails="emailsToShow"/>
                </div>
    </section>
`,
    components: {
        emailList,
        emailSideNav,
        emailDetails,
    },
    data() {
        return {
            emails: null,
            filterBy: 'all',
        };
    },
    created() {
        // const { emailId } = this.$route.params
        emailService.query().then(emails => this.emails = emails)
    },
    methods: {
        filterByEmailState(filterBy) {
            this.filterBy = filterBy;
            console.log('this.filterBy', this.filterBy);
        },
        // @selected="selectEmail"
            addNewEmail(email){
            emailService.createNewEmail(email)
            .then(email => this.emails.unshift(email))
        },
        removeEmail(emailId) {
            emailService.remove(emailId).then(() => {
                const idx = this.emails.findIndex((email) => email.id === emailId);
                this.emails.splice(idx, 1);
            })
        },
    },
    computed: {
        emailsToShow() {
            if (this.filterBy === 'all') return this.emails;
            return this.emails.filter((email) => {
                return email.state === this.filterBy;
            });
        },
    },
}
