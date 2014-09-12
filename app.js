$(document).ready(function() {
	do {
		var num = +prompt("Give us an integer:");
	}while(isNaN(num) || num % 1 != 0)
	var fizzBuzz = function(num){
		for(var i = 1; i <= num; i ++)
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
	}
	fizzBuzz(num);
})