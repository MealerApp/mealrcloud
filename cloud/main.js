Parse.Cloud.afterSave(Parse.User, function(request, response) {
	var user = request.object;
	if (user.get('water_count') === 8) {
		console.log('reached 8');
		// reward badge
		
	// TODO: create a post where the type is badge, the text says "user xyz earned the water badge for drinking 8 cups of water today"
	}
});