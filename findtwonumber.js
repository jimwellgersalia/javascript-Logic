const array = [1,2,3]



const findTwoNum = (array, target) => {
	for (let i= 0; i < array.length; i++){
		for(let i2 = i+1; i2 < array.length; i2++){
			if(array[i] + array[i2] === target){
				return [array[i], array[i2]]
			}
		}
	}
	return "sorry there are no 2 items that are equal to the target"
}

findTwoNum(array, 4);