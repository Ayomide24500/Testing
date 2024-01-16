const students = [
  { id: 1, name: "Student 1", age: 18, grade: "B" },
  { id: 2, name: "Student 2", age: 20, grade: "A" },
  { id: 3, name: "Student 3", age: 19, grade: "C" },
  { id: 4, name: "Student 4", age: 22, grade: "A+" },
  { id: 5, name: "Student 5", age: 21, grade: "B+" },
];

const valAdd = { id: 6, name: "Student 6", age: 21, grade: "c+" };

export const createStudent = (
  studentList: Array<{ id: number; name: string; age: number }>,
  newTodo: { id: number; name: string; age: number }
): { id: number; name: string; age: number } => {
  studentList.push(newTodo);

  return newTodo;
};

export const viewAllstudent = (
  studentList: Array<{ id: number; name: string; age: number }>
): Array<{ id: number; name: string; age: number }> => {
  return studentList;
};

export const viewOneStudent = (
  studentList: Array<{ id: number; name: string; age: number }>,
  id: number
): { id: number; name: string; age: number } => {
  let getStudent = studentList.find((el: any) => {
    return el.id === id;
  })!;

  return getStudent;
};

export const updateOneStudent = (
  studentList: Array<{ id: number; name: string; age: number }>,
  id: number
): { id: number; name: string; age: number } => {
  let getStudent = studentList?.find((el: any) => {
    return el.id === id;
  })!;

  return getStudent;
};

export const deleteStudent = (
  studentList: Array<{ id: number; name: string; age: number }>,
  id: number
): boolean => {
  const initialLength = studentList.length;
  studentList = studentList.filter((student) => student.id !== id);
  return studentList.length !== initialLength;
};

console.log("Updated student List:", updateOneStudent(students, 2));

console.log("deleted student List:", deleteStudent(students, 2));

createStudent(students, valAdd);
console.log(createStudent(students, valAdd));
console.log(viewAllstudent(students));
console.log(viewOneStudent(students, 3));
