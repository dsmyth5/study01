/*
class Students
	parm1 = studentID
	parm2 = firstName
	parm3 = lastName
	parm4 = qualification
	parm5 = studentList
	parm6 = elementID
*/
class StudentList {
	constructor(studentList, elementID){
		/*this.studentID = studentID;
		this.firstName = firstName;
		this.lastName = lastName;
		this.qualification = qualification;*/
		this.currentStudentlist = studentList;
		this.elementID = elementID;
		this.refresh();
	}

	add(studentID, firstName, lastName, qualification){
		this.currentStudentlist.push({
			studentID: studentID,
			firstName: firstName,
			lastName: lastName,
			qualification: qualification
		})
		this.refresh()
	 }

	search(searchParm) {
		let list = [];
		let count = 0;
		for (let stu of this.currentStudentlist) {
			if (stu.studentID.includes(searchParm)) {
				list.push(stu);
				count +=1;
			}
		}
		if (count){
			this.clearDOMList()
			this.addListToDOM(list);
		}
		return count;
	}

	clearDOMList(){
		let docSection = document.getElementById(this.elementID)
		let childArray = docSection.children;
		let chldCount = childArray.length-1;
		for(let i = chldCount; i>=0; i--)
		{
			docSection.removeChild(childArray[i]);
		}
	}

	localAddStudentCol(parString){
		let col;	
		col = document.createElement('div');
		col.textContent = parString;
		col.classList.add('student-col');
		return col
	}
	 
	addListToDOM(arrayLlist){
		let docSection = document.getElementById(this.elementID)	
		let childLen = arrayLlist.length;
		let parDiv;
		//add each record element
		for (let stu of arrayLlist){
		//for (let i = 0; i < childLen; i++) {
			//create 1 new row
			parDiv = document.createElement('div');
			parDiv.classList.add('student-row');
			// insert columns
			parDiv.appendChild(this.localAddStudentCol(stu.studentID));
			parDiv.appendChild(this.localAddStudentCol(stu.firstName));
			parDiv.appendChild(this.localAddStudentCol(stu.lastName));
			parDiv.appendChild(this.localAddStudentCol(stu.qualification));
			//add row+columns
			docSection.appendChild(parDiv);
		}	
	}

	refresh(){
		this.clearDOMList();
		this.addListToDOM(this.currentStudentlist);
	}
}
//end class


//////////////////////
// define student data
const staticStudentList = [
	{studentID: 'abc001', firstName: 'john', lastName: 'smith', qualification: 'None'},
	{studentID: 'abc002', firstName: 'sam', lastName: 'roberts', qualification: 'IT Tech'},
	{studentID: 'abc003', firstName: 'faith', lastName: 'mcphee', qualification: 'Teacher'},
	{studentID: 'abc004', firstName: 'nicole', lastName: 'williams', qualification: 'MD'},
	{studentID: 'abc005', firstName: 'tom', lastName: 'jones', qualification: 'Artist'}
]
let studentList = new StudentList(staticStudentList, 'student_table');


/*
html functions
*/
function addClicked(){
	let form = document.getElementById("form_add")
	let in1 =  form.elements['add_id'].value;
	let in2 =  form.elements['add_name1'].value;
	let in3 =  form.elements['add_name2'].value;
	let in4 =  form.elements['add_qual'].value;
	if (in1 && in2 &&in3 && in4)
	{
		studentList.add(in1, in2, in3, in4);

		/* remove existing data */
		form.elements['add_id'].value = ""
		form.elements['add_name1'].value = ""
		form.elements['add_name2'].value = ""
		form.elements['add_qual'].value = ""
	}
	else
	{
		window.alert("field incomplete");
	}
}

function searchClicked(){
	let form = document.getElementById("form_search");
	let in1 =  form.elements['search_id'].value;
	if (in1)
	{
		let num = studentList.search(in1);
		if (num)
		{
			/* remove existing data */
			form.elements['search_id'].value = ""
		}
		else{
			window.alert("Student not found");
			
		}
	}
	else
	{
		window.alert("field incomplete");
	}	
}

function refreshClicked() {
	studentList.refresh();
}		

//refreshClicked()

function setInputType(param1) {
	//buttons
	let btn1 = document.getElementById("btn_add_panel");
	let btn2 = document.getElementById("btn_search_panel");
	//forms
	let in1 = document.getElementById("form_add");
	let in2 = document.getElementById("form_search");

	in1.style.display = 'none';
	in2.style.display = 'none';	

	//in1.setAttribute("display", 'none');
	//in2.setAttribute("display", 'none');	
	
	if (param1 == 0) //add
	{
		in1.style.display = 'block';
	}
	else if (param1 == 1) //search
	{
		in2.style.display = 'block';	

	}
	
}
