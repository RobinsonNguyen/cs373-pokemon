$(document).ready(function(){
	
	$('#pokemon-models').on('click-row.bs.table', function(row, e) {
		location.href = '/pokemon/' + e[1].trim();
	});

}); 