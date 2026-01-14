// ========================================
// TASK 1: Teacher Interface
// ========================================

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;

    fullTimeEmployee: boolean;
    location: string;

    yearsOfExperience?: number;

    [key: string]: any;
}

// Example of use (task 1)
const teacher1: Teacher = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'Paris',
    yearsOfExperience: 5,  // ← test
    subject: 'Mathematics',  // ← test
    salary: 50000  // ← test
};

const teacher2: Teacher = {
    firstName: 'Bob',
    lastName: 'Martin',
    fullTimeEmployee: false,
    location: 'New York'
    // yearsOfExperience unspecified (optional)
};

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,  // ← test
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);


// ========================================
// TASK 2: Directors Interface (extends Teacher)
// ========================================

interface Directors extends Teacher {
    numberOfReports: number;
}

// Example of use (Task 2)
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// ========================================
// TASK 3: printTeacher Function
// ========================================

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Example of use (Task 3)
console.log(printTeacher('John', 'Doe'));  // Output: J. Doe
console.log(printTeacher('Jane', 'Smith'));  // Output: J. Smith

// ========================================
// TASK 4: Student Class
// ========================================

interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example of use (Task 4)
const student1 = new StudentClass("John", "Doe");
console.log(student1.displayName());        // John
console.log(student1.workOnHomework());     // Currently working

const student2 = new StudentClass("Alice", "Smith");
console.log(student2.displayName());        // Alice
console.log(student2.workOnHomework());     // Currently working
