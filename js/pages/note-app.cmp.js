import addNote from '../apps/note/cmps/add-note.js'
import notePreview from '../apps/note/pages/note-preview.js'

export default {
	template: `
 		<h1>notes :)</h1>
		<section class="note-app">

		<label for="search-keep">🔍
            <input type="search"  id="search-keep">
		</label>
		
		<add-note/>
		<note-preview/>

		</section>

`,
	components: {
		addNote,
		notePreview
	}
}
