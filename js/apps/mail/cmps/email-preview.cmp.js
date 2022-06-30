export default {
    props: ['email'],
    template: `
	<section class="mail-preview-container">
		<img class="mail-img" :src="email.img">
		<p>{{email.name}}</p>
		<p>{{email.subject}}</p>
		<p>{{email.body}}</p>
	</section>
  `,
    components: {},
    created() {
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
