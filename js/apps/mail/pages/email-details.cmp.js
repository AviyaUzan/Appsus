import { emailService } from '../services/email-service.js'

export default {
	name:'email-details',
	template: `
    <section v-if="email">
        EMAIL {{email.name}}
    </section>
    `,
	props:['emailId'],
	components: {
		emailService
	},
	created(){
		console.log('this.emailId',this.emailId)
		emailService.get(this.emailId).then(
			email => this.email = email
		)
	},
	data() {
		return {
			email: null
		}
	},
	methods: {},
	computed: {},
	// watch: {
	// 	'$route.params.emailId': {
	// 		handler() {
	// 			const id = this.$route.params.emailId
	// 			emailService.get(id).then(email => {
	// 				this.email = email

					// emailService.getPrevBookId(book.id)
					//     .then(prevBookId => this.prevBookId = prevBookId)
					// emailService.getNextBookId(book.id)
					//     .then(nextBookId => this.nextBookId = nextBookId)
				// })
			// },
			// immediate: true
		// }
	// }
}
