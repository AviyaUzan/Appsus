import { eventBus } from '../../../services/eventBus-service.js'
export default {
	template: `
    <form @submit="onAddEmail"  v-if="isNewEmailShow" class="new-email">
                <div class="new-email-header">
                <p>New Message</p>
                <button @click="isNewEmailShow = !isNewEmailShow" class="close-new-email email-action">x</button>
            </div>
                    <input v-model="email.to" ref="whoToSent" class="new-email-to" type="email" placeholder="To" required>
                    <input v-model="email.subject" class="new-email-title" type="text" placeholder="Subject">
                    <textarea :keyup.enter="onAddEmail" v-model="email.body" class="new-email-text" name="" id="" rows="10"></textarea>
                    <div class="new-email-btns">
                        <button required @click="closeEmail" type="submit" class="send email-action" ><img class="send-btn" src="assest/icons/send.svg"></button>
                        <button @click="isNewEmailShow = !isNewEmailShow" @click.stop="sendToDrafts" class="email-action" ><img src="assest/icons/delete.svg" alt=""></button>
                    </div>
</form>
    `,
	components: {
		eventBus
	},
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
		closeEmail(){
			var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
			if(!this.email.to.match(mailformat)) return
			setTimeout(()=>
			this.isNewEmailShow = false),100
		},
		sendToDrafts() {
			eventBus.emit('send-to-drafts', this.email)
		},
		onAddEmail() {
			this.$emit('addEmail', this.email)
		}
	},
	computed: {}
}
