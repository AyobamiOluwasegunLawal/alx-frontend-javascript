namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Jave extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingJava) {
                return 'No available teacher';
            } else {
                return `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}`;
            }
        }
    }
}