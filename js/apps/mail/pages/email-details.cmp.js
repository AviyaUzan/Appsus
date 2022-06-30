import { emailService } from '../services/email-service.js'

export default {
	template: `
    <section v-if="email">
        EMAIL {{email.name}}
    </section>
    `,
	components: {
		emailService
	},
	data() {
		return {
			email: null
		}
	},
	methods: {},
	computed: {},
	watch: {
		'$route.params.emailId': {
			handler() {
				const id = this.$route.params.emailId
				emailService.get(id).then(email => {
					this.email = email

					// emailService.getPrevBookId(book.id)
					//     .then(prevBookId => this.prevBookId = prevBookId)
					// emailService.getNextBookId(book.id)
					//     .then(nextBookId => this.nextBookId = nextBookId)
				})
			},
			immediate: true
		}
	}
}
