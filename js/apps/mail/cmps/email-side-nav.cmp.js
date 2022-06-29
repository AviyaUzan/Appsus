export default {
    props: ['emails'],
    template: `
	<section>
        <h1>MADDYYY</h1>
            <button @click="filterBy('inbox')">inbox</button>
            <button @click="filterBy('starred')">starred</button>
            <button @click="filterBy('sent')">sent</button>
            <button @click="filterBy('trash')">trash</button>
            <button @click="filterBy('drafts')">drafts</button>
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
            this.$emit("filtered", input);
          },
    },
    computed: {},
};
