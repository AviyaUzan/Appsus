import newEmail from './new-email.cmp.js'

export default {
	props: ['emails'],
	template: `
	<section class="email-side-nav flex">
            <img @click="isNewEmailShow = !isNewEmailShow" class="btn-side-nave email-action compose compose-img" src="https://support.virtru.com/hc/article_attachments/360045048294/mceclip0.png">

            <new-email v-if="isNewEmailShow" @addEmail="onAddEmail" ></new-email>
            
            <button class="btn-side-nave email-action" @click="filterBy('all')">All</button>
            <button class="btn-side-nave email-action" @click="filterBy('inbox')">inbox</button>
            <button class="btn-side-nave email-action" @click="filterBy('starred')">starred</button>
            <button class="btn-side-nave email-action" @click="filterBy('sent')">sent</button>
            <button class="btn-side-nave email-action" @click="filterBy('trash')">trash</button>
            <button class="btn-side-nave email-action" @click="filterBy('drafts')">drafts</button>
            <!-- connect notes -->
	</section>
  `,
	components: {
		newEmail
	},
	created() {},
	data() {
		return {
			isNewEmailShow: false,
		}
	},
	methods: {
		filterBy(input) {
			this.$emit('filter', input)
		},
        onAddEmail(email){
            this.$emit("addEmail", email)
        }
	},
	computed: {}
}
