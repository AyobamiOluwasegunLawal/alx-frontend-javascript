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

const printTeacher:printTeacherFunction = function ({ firstName, lastName }:{firstName:string; lastName:string}):string {
	const firstName = firstName.charAt(0).toUpperCase();
	return `${firstName}. ${lastName}`;
}

printTeacher("ayobami", "lawal");

