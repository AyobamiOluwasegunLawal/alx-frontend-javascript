interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Director extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName:string, lastName: string):string;
}

class StudentClass {
	constructor (firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework() => "Currently working";
	displayName() {
		return `${firstName} ${lastName}`;
	}

function printTeacher({ firstName, lastName }:{ firstName:string; lastName:string }): string {
	const firstName = firstName.charAt(0).toUpperCase();
	return `${firstName}. ${lastName}`;
}

printTeacher("ayobami", "lawal");

