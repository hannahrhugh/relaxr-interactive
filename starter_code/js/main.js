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
$('.readless hide').find('a')

// 

});