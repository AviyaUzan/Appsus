import { emailService } from '../services/email-service.js'

export default {
	name:'email-details',
	template: `
    <section class="email-details" v-if="email">
	<div class="details-routers">
		<div>
		<router-link title="back to inbox" class="details-btn" :to="'/email/all'"><--</router-link>
		</div>
		<div class="next-prev-btns">
			<router-link title="Previous Email" class="details-btn" :to="'/email/' + prevEmailId"><-- Previous</router-link>
			<router-link title="Next Email" class="details-btn" :to="'/email/' + nextEmailId">Next --></router-link>
		</div>	
	</div>
	<div class="email-subject">{{email.subject}}</div>	
	<div class="email-from">
		<img class="mail-img" :src="email.img">
	   {{email.to}}
	</div>
	<div class="email-body">
	{{email.body}}
	</div>
    </section>
    `,
	props:['emailId'],
	components: {
		emailService
	},
	created(){
		console.log('this.emailId',this.emailId)
		emailService.get(this.emailId).then(
			email => this.email = email)
	},
	data() {
		return {
			email: null,
			nextEmailId: null,
			prevEmailId: null,
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
					emailService.getPrevEmailId(id)
					    .then(prevEmailId => this.prevEmailId = prevEmailId)
					emailService.getNextEmailId(id)
					    .then(nextEmailId => this.nextEmailId = nextEmailId)
				})
			},
			immediate: true
		}
	}
}
