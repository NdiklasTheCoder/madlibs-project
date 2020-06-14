$(document).ready(()=> {
    $("#blanks form").submit((event) => {
       event.preventDefault();
    	let blanks = ['person1','person2','animal','exclamation','verb','noun'];
    	blanks.forEach((blank)=>{
        $("."+blank).text($("input#"+blank).val());
    	});
      $("#story").show();
    });
});
