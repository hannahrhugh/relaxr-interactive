$(document).ready(function() {
  console.log('ready!');

// Prevent form submission
 
// Delay code from executing until all DOM assets have loaded

// if read more is selected <p> expands with a read less link

$('.readmore').find('a').on('click', function(event){
	event.preventDefault();
	$('p').slideDown() ;
	$('#show-this-on-click').show() ;
	$('.readmore').find('a').hide() ;
});
// hide read more

// if read less is selected <p> must slide up and read more must show
$('.readless').find('a').on('click', function(event){
	event.preventDefault();
	$('#show-this-on-click').slideUp() ;
	$('.readmore').show() ;
	$('.readless').hide() ;
})

// If user clicks learn more in the sidebar, span inside p must slide down

$('.learnmore').on('click', function(event){
	event.preventDefault();
	$('#learnmoretext').slideDown();
	$('.learnmore').hide();

})

});