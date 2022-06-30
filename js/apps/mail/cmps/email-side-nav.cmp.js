export default {
    props: ['emails'],
    template: `
	<section class="email-side-nav flex">
            <button class="btn" @click="filterBy('all')">All</button>
            <button class="btn" @click="filterBy('inbox')">inbox</button>
            <button class="btn" @click="filterBy('starred')">starred</button>
            <button class="btn" @click="filterBy('sent')">sent</button>
            <button class="btn" @click="filterBy('trash')">trash</button>
            <button class="btn" @click="filterBy('drafts')">drafts</button>
            <!-- connect notes -->
	</section>
  `,
    components: {},
    created() {
    },
    data() {
        return {};
    },
    methods: {
        filterBy(input){
            this.$emit("filter", input)
          },
    },
    computed: {},
};
