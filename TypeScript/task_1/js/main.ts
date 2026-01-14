interface Teacher {
    readonly firstName: string;
    readonly lastName: string;

    fullTimeEmployee: boolean;
    location: string;

    yearsOfExperience?: number;

    [key: string]: any;
}

// Example of use
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
