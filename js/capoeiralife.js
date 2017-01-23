var token = '3024617218.859f470.96f709da1d73415293c29ab0abb32e84',
    num_photos = 1;
 
$.ajax({
	url: 'https://api.instagram.com/v1/users/self/media/recent',
	dataType: 'jsonp',
	type: 'GET',
	data: {access_token: token, count: num_photos},
	success: function(data){
 		console.log(data);
		for( x in data.data ){
			$('#instagram').append('<img src="'+data.data[x].images.low_resolution.url+'">');
		}
	},
	error: function(data){
		console.log(data);
	}
});
