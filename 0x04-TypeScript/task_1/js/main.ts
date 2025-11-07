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

function printTeacher (firstName: string, lastName: string):string {
	const firstLetter = firstName[0];
	const result = `${firstLetter}. ${lastName}`;
	return result;
}

