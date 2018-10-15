class Helpers {
	static convertString(string)  {
        var regex = /-/g;
        var stringResult = string.replace(regex,' ');
		// if(position === "left"){
		// 	return currencyUnit + " " + value;
		// }else if(position === "right"){
		// 	return value + " " + currencyUnit;
		// }
	}
}

export default Helpers;