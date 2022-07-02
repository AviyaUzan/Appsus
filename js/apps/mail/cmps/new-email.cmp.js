export default {
	template: `
    <form  v-if="isNewEmailShow" class="new-email">
                <div class="new-email-header">
                <p>New Message</p>
                <button @click="isNewEmailShow = !isNewEmailShow" class="close-new-email email-action">x</button>
            </div>
            <input v-model="email.to" ref="whoToSent" class="new-email-to" type="email" required placeholder="To">
            <input v-model="email.subject" class="new-email-title" type="text" placeholder="Subject">
            <textarea v-model="email.body" class="new-email-text" name="" id="" rows="10"></textarea>
            <div class="new-email-btns">
                <button class="email-action" ><img src="assest/icons/delete.svg" alt=""></button>
            </div>
            <button @submit.prevent="onAddEmail" type="submit" class="send email-action" ><img src="assest/icons/send.svg" alt=""></button>
</form>
    `,
	data() {
		return {
			isNewEmailShow: true,
			email: {
				subject: '',
				body: '',
				isRead: false,
				to: '',
				isStarred: false,
				state: 'sent'
			}
		}
	},
	mounted() {
		this.$refs.whoToSent.focus()
	},
	methods: {
		onAddEmail() {
			console.log('hi')
			this.$emit('addEmail', this.email)
		}
	},
	computed: {}
}
