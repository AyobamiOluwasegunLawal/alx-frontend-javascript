interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne:Student = {
	firstName: 'Ayobami',
	lastName: 'Lawal',
	age: 20,
	location: 'Mcpherson University'
}

const studentTwo:Student = {
	firstName: 'Oluwasegun',
	lastName: 'Motunrayo',
	age: 15,
	location: 'Lagos Nigeria'
}

const studentsList:Student[] = [studentOne, studentTwo];
const displayedColumns = ['firstName', 'location'];

const table:HTMLTableElement = document.createElement('table');
table.border = '1';

const headerRow:HTMLTableRowElement = document.createElement('tr');

displayedColumns.forEach(key => {
	const th = document.createElement('th');
	th.textContent = key.toUpperCase();
	headerRow.appendChild(th);
});

table.appendChild(headerRow);

studentsList.forEach(student => {
	const row:HTMLTableRowElement = document.createElement('tr');
	displayedColumns.forEach(key => {
		const td:HTMLTableCellElement = document.createElement('td');
		td.textContent = String(student[key as keyof Student]);
		row.appendChild(td);
	});
	table.appendChild(row);
});

document.body.appendChild(table);
		

