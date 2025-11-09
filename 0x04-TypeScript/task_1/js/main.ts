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

interface Student {
	firstName:string;
	lastName:string;
	workOnHomework(): string;
	displayName(): string
}

class StudentClass {
	firstName:string;
	lastName:string;

	constructor (firstName:string, lastName:string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework():string {
		return "Currently working"
	};

	displayName():string {
		return `${this.firstName} ${this.lastName}`;
	}
}

function printTeacher({ firstName, lastName }:{ firstName:string; lastName:string }): string {
	const firstName = firstName.charAt(0).toUpperCase();
	return `${firstName}. ${lastName}`;
}

printTeacher("ayobami", "lawal");

