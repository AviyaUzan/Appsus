import emailPreview from '../cmps/email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
	props: ["emails"],
	template: `

	<section class="table" v-for="(email,idx) in emails" :key="email.id">
		<div class="row" v-if="!emailShow" @click="email.isRead = !email.isRead" :class="{read: email.isRead}">
			<div class="td">
			<button class="btn starred-email" @click="email.state = 'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="!email.isStarred" ><img class="star-icon" src="assest/icons/emptie-star.png"></button>
			</div>
			<div class="td">
			<button class="btn starred-email" @click="email.state = !'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="email.isStarred" ><img class="star-icon" src="assest/icons/filled-star.png"></button>
			</div>
			<div class="td">
			<email-preview :email="email"/>
			</div>
			<div class="td">
			<button class="delete-email" @click="moveToTrash(email.id)" >❌</button>
			</div>
			<div class="td">
			<button v-if="!email.isRead" >📧</button>
			<button v-if="email.isRead">💌</button>
			</div>
		</div>
	</section>

	<!-- <section class="mail-list-container">
	
		<ul v-for="(email,idx) in emails" :key="email.id">
			<li v-if="!emailShow" @click="email.isRead = !email.isRead" :class="{read: email.isRead}" class="mail-list flex">
				<div class="mail-actions-1">
					<input type="checkbox" name="" id="">
					not good change these buttons
					<button @click="email.state = 'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="!email.isStarred" >✰</button>
					<button @click="email.state = !'starred'" @click.stop="email.isStarred = !email.isStarred" v-if="email.isStarred" >⭐</button>
				</div>
				<router-link :to="'/email/'+email.id">lip</router-link>
				<email-preview :email="email"/>
				<div class="mail-actions-2">
					<button class="delete-email" @click="moveToTrash(email.id)" >❌</button>
					not good change these buttons
					<button v-if="!email.isRead" >📧</button>
					<button v-if="email.isRead">💌</button>
				</div>
			</li>
		</ul>
	</section> -->
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
		emailIsRead(mailId){
			let email = this.emails.find((email) => email.id === mailId);
                console.log('email',email)
		},
	  remove(mailId) {
		this.$emit("removed", mailId);
	  },
	  select(mail) {
		this.$emit("selected", mail);
	  },
	},
	computed: {
	},
  };