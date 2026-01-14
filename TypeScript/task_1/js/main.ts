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
