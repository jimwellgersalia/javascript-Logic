// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types.
// i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]
// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove)
// should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const myArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
const myArray2 = [1, "2", "3", 2];

const groupDuplicates = (arr) => {
    const itemCount = {}; //we use object to store how many occurence items in the array. it also does the auto sort
    const stringArray = []


    for (const item of arr) {
    	if (typeof item === 'number'){
        itemCount[item] = (itemCount[item] || 0) + 1; 
        // If the item has never been encountered before, itemCount[item] starts at 0 and is incremented to 1.
		//If the item has been encountered, its count is incremented by 1
    	} else {
    		stringArray.push(item) //push the string to its own arrays
    	}
    }
    // console.log(Object.entries(itemCount))

    //converting object to array and filling up the items based on their count
    const groupNumbers = Object.entries(itemCount).map(([item, count]) =>
    	 //  method in JavaScript used to create a new array of a specified length (count) and fill it with a given value.
        count > 1 ? Array(count).fill(Number(item)) : Number(item)
    );

    return [groupNumbers, stringArray]
   }


groupDuplicates(myArray);
groupDuplicates(myArray2);