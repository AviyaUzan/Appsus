import emailPreview from '../cmps/email-preview.cmp.js'
// import emailDetails from './email-details.cmp.js'

export default {
	name: 'email-list',
	props: ['emails'],
	template: `

	 <section class="email-app-list email-list-container">
		<div class="email-list-hover" v-for="(email,idx) in emails" :key="email.id">
			<div v-if="!emailShow" @click="email.isRead = !email.isRead" :class="{read: email.isRead}" class="email-list">
			<div class="email-actions-1">
 					<button class="action-left btn email-action" @click="email.state = 'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="!email.isStarred" ><img class="star-icon" src="assest/icons/empty-star.png"></button>
 					<button class="action-left email-action" @click="email.state = !'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="email.isStarred" ><img class="star-icon" src="assest/icons/filled-star.png"></button>
 				</div>
					 <email-preview :class="{read: email.isRead}" :email="email"/>
 				<div class="email-actions-2">
				 <button class="email-action action-right delete-email" @click="removeEmail(email.id)" ><img src="assest/icons/delete.svg"></button>
				<button class="email-action action-right">{{email.isRead? '💌' : '📧'}}</button>
 				</div>
			</div>
		</div>
 	</section>
  `,
	components: {
		emailPreview
		// emailDetails,
	},
	created() {
		console.log('hi')
	},
	data() {
		return {
			mail: null,
			isRead: false,
			emailShow: false
		}
	},
	methods: {
		isEmailRead() {},
		emailIsRead(mailId) {
			let email = this.emails.find(email => email.id === mailId)
			console.log('email', email)
		},
		removeEmail(emailId) {
			this.$emit("removed", emailId);
		  },
		//   select(mail) {
		// 	this.$emit("selected", mail);
		//   },
	},
	computed: {}
}
