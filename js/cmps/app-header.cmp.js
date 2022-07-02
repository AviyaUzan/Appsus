export default {
 template:`
 <header class="app-header">
 <button hidden @click="isOpen = !isOpen" :class="{headeropen: isOpen}">☰</button>
   <nav :class="{headeropen: isOpen}" class="header-nav">
     <router-link to="/">Home</router-link> 
     <router-link to="/email/all">Mail</router-link> 
     <router-link to="/note">note</router-link>
     <router-link to="/book">book</router-link>
    </nav>
    <div><img class="header-logo" src="assest/icons/header-logo.png"></div>
 </header>
`,
  data() {
    return {
      isOpen: false
    }
  },
  methods:{},
computed:{}
}