
//assigment task2
//by david smyth
//date 16/10/2023


/////////////////////
//constructor students
//paramater1: student ID
//paramater2: first name
//paramater3: last name
//paramater4: qualifications
class Student {
	constructor(studentID, firstName, lastName, qualification) {
		this.StudentID = studentID;
		this.FirstName = firstName;
		this.LastName = lastName;
		this.Qualification = qualification;
	}
}

const studentList = [
	//https://mockaroo.com/
	//StudentID","First_name","Last_name","Qualification
	new Student(3, "Hailey", "Revington", "Software Test Engineer IV"),
	new Student(1, "Jeddy", "Coggen", "Design Engineer"),
	new Student(2, "Puff", "De Carteret", "Marketing Assistant"),
	new Student(6, "Lela", "Gert", "Food Chemist"),
	new Student(4, "Josy", "Spriggin", "Sales Representative"),
	new Student(10, "John", "Smithn", "mechanic"),
	new Student(9, "Sam", "Faith", "cyber security"),	
	new Student(5, "Maurine", "Seyers", "Librarian"),
	new Student(8, "Marne", "Helin", "Statistician III"),
	new Student(7, "Kenny", "Dillamore", "Social Worker")
];

console.log(studentList);

/////////////////////
//function sort array
//paramater1: input array
//return: new sorted array
function fn_SortAscending_class(inArray)
{
	let outArraySorted = new Array(); //create a new array for output data
	let lastVal = -9999999999; //sets last value found. so next lookup must be larger

	for (let i = 0; i < inArray.length; i++) 
	{
		let bestVal = 9999999999; //sets best value found. serach for lowest value
		let bestIdx = 0; //best match/index(lowest value) to put into array		
		for (let j = 0; j < inArray.length; j++) 
		{
			if (inArray[j].StudentID > lastVal && inArray[j].StudentID < bestVal )
			{
				bestVal = inArray[j].StudentID;				
				bestIdx = j;
			}	
		}
		lastVal = inArray[bestIdx].StudentID;
		outArraySorted[i] = inArray[bestIdx];
	}
	return outArraySorted; //return new array
}

//apply sort
const studentList3 = fn_SortAscending_class(studentList); //output array
console.log(studentList3); //print


/////////////////////////
//search array for match.
//paramater1: input array
//paramater2: value to find
//return: index (-1 when failed)
function fn_sequentialSearch_class(inArray, value)
{
	for (let i = 0; i < inArray.length; i++) 
	{
		if (inArray[i].StudentID == value)
			return inArray[i];		
	}
	return null;	
}
const object4 = fn_sequentialSearch_class(studentList3, 5); //output index
console.log(`found student: ${object4.FirstName}`); //print
const object42 = fn_sequentialSearch_class(studentList3, 55); //output index
console.log("found student: " +object42); //print