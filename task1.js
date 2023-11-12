//assigment task2
//by david smyth
//date 16/10/2023

//generate a 1D array
const arrayTask1 = [11, 5, 8, 3, 25, 16, 31, 45, 14, 20 ]; //build number array
console.log(arrayTask1); //print

/////////////////////
//function sort array
//paramater1: input array
//return: new sorted array
function fn_SortArrayAscending(inArray)
{
	let outArraySorted = new Array(); //create a new array for output data
	let lastVal = -9999999999; //sets last value found. so next lookup must be larger

	for (let i = 0; i < inArray.length; i++) 
	{
		let bestVal = 9999999999; //sets best value found. serach for lowest value
		let bestIdx = 0; //best match/index(lowest value) to put into array		
		for (let j = 0; j < inArray.length; j++) 
		{
			if (inArray[j] > lastVal && inArray[j] < bestVal )
			{
				bestVal = inArray[j];				
				bestIdx = j;
			}	
		}
		lastVal = inArray[bestIdx];
		outArraySorted[i] = inArray[bestIdx];
	}
	return outArraySorted; //return new array
}

//apply sort
const newArray2 = fn_SortArrayAscending(arrayTask1); //output array
console.log(newArray2); //print

////////////////////////////
//insert numbers into array
//paramater1: input array
//paramater2: insert data/array
//return: new sorted array with paramater2 data
function fn_InsertArrayAndSort(inArray, newDataArray)
{
	//add new data to array
	for (let i = 0; i < newDataArray.length; i++) 
	{
		inArray[inArray.length] = newDataArray[i];		
	}
	//sort data, return new array;
	return fn_SortArrayAscending(inArray);
}
const newArray3 = fn_InsertArrayAndSort(newArray2, [19,23,30]); //output array
console.log(newArray3); //print


////////////////////////////
//remove elements from array
//paramater1: input array
//paramater2: remove item/s. array. 
//return: new array
function fn_RemoveFromArray(inArray, newDataArray) 
{
	let outArray = new Array(); //create a new array for output data
	let curIndex = 0; //current write index to output arrar
	let j; //2nd paramater index

	//remove data to array
	for (let i = 0; i < inArray.length; i++) 
	{
		for (j = 0; j < newDataArray.length; j++) 
		{
			if (inArray[i] == newDataArray[j])
				break;			
		}		
		//no match. so add to outAarray
		if (j == newDataArray.length)
		{
			outArray[curIndex] = inArray[i];
			curIndex++;	
		}	
	}
	return outArray; //return array
}
const newArray4 = fn_RemoveFromArray(newArray3, [8,31]); //output array
console.log(newArray4); //print

/////////////////////////
//search array for match.
//paramater1: input array
//paramater2: value to find
//return: index (-1 when failed)
function fn_sequentialSearch(inArray, value)
{
	for (let i = 0; i < inArray.length; i++) 
	{
		if (inArray[i] == value)
			return i;		
	}
	return -1;	
}
const index5 = fn_sequentialSearch(newArray4, 23); //output index
console.log("found at index: " +index5); //print
const index51 = fn_sequentialSearch(newArray4, 31); //output index
console.log("found at index: " +index51); //print


//binary search
//paramater1: input array
//paramater2: value to find
//return: index (-1 when failed)
function fn_binarySearch(inArray, value) 
{
	let startIdx = 0; //array start index
	let endIdx = inArray.length -1; //array end index(length)
	let midIdx; //get array middle (between start/end)

	while (startIdx <= endIdx) 
	{
		midIdx = Math.floor((startIdx + endIdx)/2);
		if (inArray[midIdx] == value) 
			return midIdx;
		else if (inArray[midIdx] < value) 
			startIdx = midIdx + 1;
		else 
			endIdx = midIdx - 1;		
	}
	return -1;
}
const index6 = fn_binarySearch(newArray4, 25); //output index
console.log("found at index:" +index6); //print
const index61 = fn_binarySearch(newArray4, 55); //output index
console.log("found at index:" +index61); //print


