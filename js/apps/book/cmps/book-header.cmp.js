export default {
	template: `
 <header  class="book-header main-layout">
    <div class="logo">
                <h3>B<img src="./../../assets/icons/glasses.png" alt="">k!</h3>
                
            </div>
            <nav class="nav-bar">
                <router-link to="/"><img src="./../../assets/icons/home.svg" alt=""></router-link>
                <router-link to="/book"><img src="./../../assets/icons/book.svg" alt=""></router-link>
                <router-link to="/about"><img class ='about-img' src="./../../assets/icons/about.svg" alt=""></router-link>
            </nav>
        </header>
`
}
