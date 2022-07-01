import longText from '../../../cmps/long-text.cmp.js';

export default {
    props: ['email'],
    template: `
    <router-link class="preview-router" :to="'/email/'+email.id">
        <section class="email-preview-container">
            <img class="mail-img" :src="email.img">
            <p>{{email.name}}</p>
            <p>{{email.subject}}</p>
            <long-text :text="email.body"></long-text>
            <!-- <p>{{email.body}}</p> -->
        </section>
    </router-link>
  `,
    components: {
        longText,
    },
    created() {
    },
    data() {
        return {};
    },
    methods: {},
    computed: {},
};
