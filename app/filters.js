yogaApp.filter('durations', function() 
{
	return function(duration) {
		switch (duration) {
			case 1:
				return "1 hour";
			case 2:
				return "2 hours";
			case 3:
				return "Half day";
			case 4:
				return "Full day";
		}
	}
})