interface DirectorInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workDirectorTasks(): string;
}

interface TeacherInterface {
        workFromHome(): string;
        getCoffeeBreak(): string;
        workTeacherTasks(): string;
}

class Director implements DirectorInterface {
        workFromHome() {
                return "Working from home";
        };

        getCoffeeBreak() {
                return "Getting a coffee break";
        };

        workDirectorTasks() {
                return "Getting to director tasks";
        };
}

class Teacher implements TeacherInterface {
        workFromHome() {
                return "Cannot work from home";
        };

        getCoffeeBreak() {
                return "Cannot have a break";
        };

        workTeacherTasks() {
                return "Getting to work";
        }
}

function createEmployee (salary:string | number): Director | Teacher {
	const salary = Number(salary);
	if (salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}


const Subjects = "Math" | "History";
function teachClass(todayClass: Subjects) {
	if (todayClass === "Math")
		return "Teaching Math";
	if (todayClass === "History")
		return "Teaching History";
}


