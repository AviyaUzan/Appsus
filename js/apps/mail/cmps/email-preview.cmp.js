export default {
    props: ['email'],
    template: `
    <router-link :to="'/email/'+email.id">
        <section class="email-preview-container">
            <img class="mail-img" :src="email.img">
            <p>{{email.name}}</p>
            <p>{{email.subject}}</p>
            <p>{{email.body}}</p>
        </section>
    </router-link>
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
