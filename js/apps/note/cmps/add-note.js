export default {
	template: `
        <section class="add-keep">
			<form class="add-keep-input flex">
				<input type="text" placeholder="title" />
        		<textarea rows = "5" cols = "60" name = "description"></textarea>
      		</form>
		 <!-- make amount of rows dynamic -->
         	<div class="add-keep-btn-container">
             <button><input type="color"></button>
			 <button>Add image</button>
			 <button>task list</button>
			 <button>add video</button>

            </div>
        </section> 
    `
}
