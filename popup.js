$(function() {
	$('#name').keyup(function() {
		//change text of the html element
		$('#greet').text('Hello ' + $('#name').val());
	});
});