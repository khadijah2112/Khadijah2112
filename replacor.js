function digitWordReplace(digit) {
	var word = " ";
	var digitWord = [];
	for (var count = 1; count <= digit; count++) {
		if (([count] % 2 == 0) && ([count] % 3 == 0) && ([count] % 5== 0))  
			{word = "yu-gi-oh";}

		else if ([count] % 2 == 0 && [count] % 5 == 0 && [count] % 3 !== 0) 
			{word = "yu-oh";}

		else if ([count] % 2 == 0 && [count] % 3 == 0 && [count] % 5 !== 0) 
			{word = "yu-gi";}

	 	else if ([count] % 5 == 0 && [count] % 3 == 0 && [count] % 2 !== 0) 
	 		{word = "gi-oh";}

	 	else if (([count] % 2 == 0) && ([count] % 3 !== 0) && ([count] % 5 !== 0)) 
	 		{word = "yu";}
	
		else if (([count] % 3 == 0) && ([count] % 2 !== 0) && ([count] % 5 !== 0)) 
			{word = "gi";}
	
		else if (([count] % 5 == 0) && ([count] % 3 !== 0) && ([count] % 2 !== 0)) 
			{word = "oh";}

		else word = count; 

	digitWord.push(word);
	}
	//console.log(digitWord);
	return digitWord;
}

digitWordReplace(100);
digitWordReplace(35);