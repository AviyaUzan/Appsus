export default {
    props: ['mail'],
    template: `
	<section class="mail-preview-container">
		<img class="mail-img" :src="mail.img">
		<p>{{mail.name}}</p>
		<p>{{mail.subject}}</p>
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
