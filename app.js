$(document).ready(function() {
	for(var i = 1; i < 101; i ++)
	{
		var str = "";
		if (i % 3 === 0) {
			str += "fizz";
		}
		if (i % 5 === 0){
			str += "buzz";
		}
		if (!str){
			str = i;
		}
		$("body").append("<p>" + str + "</p>")
	}
})