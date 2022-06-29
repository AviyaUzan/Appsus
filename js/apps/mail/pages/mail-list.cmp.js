import mailPreview from '../cmps/mail-preview.cmp.js'

export default {
	props: ["mails"],
	template: `
	<h1>aviya queen hello</h1>
	<section class="mail-list-container">
		<ul class="mail-list">
			<li v-for="(mail,idx) in mails" :key="mail.id" class="mail-">
				<mail-preview :mail="mail"/>
				<div class="mail-actions">
					<input type="checkbox" name="" id="">
					<button>⭐</button>
				</div>
			</li>
		</ul>
	</section>
  `,
	components: {
		mailPreview
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