import emailPreview from '../cmps/email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
	props: ["emails"],
	template: `

	 <section class="email-list-container">
		<div v-for="(email,idx) in emails" :key="email.id">
			<div v-if="!emailShow" @click="email.isRead = !email.isRead" :class="{read: email.isRead}" class="email-list">
			<div class="email-actions-1">
 					<input type="checkbox" name="" id="">
 					<button class="btn email-action" @click="email.state = 'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="!email.isStarred" ><img class="star-icon" src="assest/icons/emptie-star.png"></button>
 					<button class="btn email-action" @click="email.state = !'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="email.isStarred" ><img class="star-icon" src="assest/icons/filled-star.png"></button>
 				</div>
 				<router-link class="email-preview-router" :to="'/email/'+email.id">
					 <email-preview :class="{read: email.isRead}" :email="email"/>
				</router-link>
 				<div class="email-actions-2">
				 <button class="email-action action-right delete-email" @click="moveToTrash(email.id)" >❌</button>
				 <button class="email-action action-right" v-if="!email.isRead" >📧</button>
				<button class="email-action action-right" v-if="email.isRead">💌</button>
 				</div>
			</div>
		</div>
 	</section>
  `,
	components: {
		emailPreview,
		emailDetails,
	},
	created(){
	},
	data() {
	  return {
		mail: null,
		isRead: false,
		emailShow: false,
};
	},
	methods: {
	isEmailRead() {
		
	},
	emailIsRead(mailId){
		let email = this.emails.find((email) => email.id === mailId);
            console.log('email',email)
	},
	//   remove(mailId) {
	// 	this.$emit("removed", mailId);
	//   },
	//   select(mail) {
	// 	this.$emit("selected", mail);
	//   },
	},
	computed: {
	},
  };