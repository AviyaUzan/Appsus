import newEmailCmp from './new-email.cmp.js'

export default {
	props: ['emails'],
	template: `
	<section class="email-side-nav flex">
            <img @click="isNewEmailShow = !isNewEmailShow" class="btn-side-nave email-action compose compose-img" src="https://support.virtru.com/hc/article_attachments/360045048294/mceclip0.png">
            <div v-if="isNewEmailShow" class="new-email">
                <div class="new-email-header">
                <p>New Message</p>
                <button class="close-new-email email-action">x</button>
            </div>
                <input class="new-email-to" type="email" pattern=".+@globex\.com" required placeholder="To">
                <input class="new-email-title" type="text" placeholder="Subject">
                <textarea class="new-email-text" name="" id="" rows="10"></textarea>
                <div class="new-email-btns">
                    <button ><img src="assest/icons/send.svg" alt=""></button>
                    <button class="email-action" ><img src="assest/icons/delete.svg" alt=""></button>
                </div>
            </div>
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
		newEmailCmp
	},
	created() {},
	data() {
		return {
			isNewEmailShow: true
		}
	},
	methods: {
		filterBy(input) {
			this.$emit('filter', input)
		}
	},
	computed: {}
}
