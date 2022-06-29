import emailPreview from '../cmps/email-preview.cmp.js'

export default {
	props: ["emails"],
	template: `
	<h1>aviya queen hello</h1>
	<section class="mail-list-container">
		<ul>
			<li class="mail-list flex" v-for="(email,idx) in emails" :key="email.id">
				<div class="mail-actions-1">
					<input type="checkbox" name="" id="">
					<button>⭐</button>
				</div>
				<email-preview :email="email"/>
				<div class="mail-actions-2">
					<button class="delete-email" @click="moveToTrash(eemail.id)" >❌</button>
					<button>📧</button>
				</div>
			</li>
		</ul>
	</section>
  `,
	components: {
		emailPreview
	},
	created(){
	},
	data() {
	  return {};
	},
	methods: {
	  remove(mailId) {
		this.$emit("removed", mailId);
	  },
	  select(mail) {
		this.$emit("selected", mail);
	  },
	},
	computed: {},
  };