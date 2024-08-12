const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A" }
];

function addStudent(id, firstName, lastName, age, grade) {
    students.push({ id, firstName, lastName, age, grade });
}

function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
    }
}

function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        students.splice(index, 1);
    }
}

function listAllStudents() {
    console.log("Student List:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

addStudent(4, "Alice", "Green", 21, "B");
updateStudent(2, { age: 23, grade: "A" });
deleteStudent(3);
listAllStudents();
console.log("Students with grade 'A':", findStudentsByGrade('A'));
console.log("Average Age:", calculateAverageAge());
