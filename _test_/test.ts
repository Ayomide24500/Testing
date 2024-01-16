import {
  createTodo,
  viewAlltodo,
  viewOneTodo,
  updateOneTodo,
} from ".././controller/todoController";
import {
  createStudent,
  updateOneStudent,
  viewAllstudent,
  viewOneStudent,
} from "../controller/studentController";
const todos = [
  { id: 1, task: "Task 1", completed: false },
  { id: 2, task: "Task 2", completed: true },
  { id: 3, task: "Task 3", completed: false },
  { id: 4, task: "Task 4", completed: true },
  { id: 5, task: "Task 5", completed: false },
];

const goods = [
  { id: 1, name: "Item 1", price: 10, quantity: 50 },
  { id: 2, name: "Item 2", price: 15, quantity: 30 },
  { id: 3, name: "Item 3", price: 8, quantity: 70 },
  { id: 4, name: "Item 4", price: 25, quantity: 20 },
  { id: 5, name: "Item 5", price: 12, quantity: 40 },
];

describe("checking all todo List function", () => {
  test("check our create todo function", () => {
    let todoList = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        task: Math.ceil(Math.random() * 1000).toString(),
        completed: false,
      };
    });

    let newTodo = {
      id: Math.floor(Math.random() * 100),
      task: Math.ceil(Math.random() * 1000).toString(),
      completed: Math.random() < 0.5,
    };

    expect(createTodo(todoList, newTodo)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        task: expect.any(String),
        completed: expect.any(Boolean),
      })
    );
  });

  test("view All todo", () => {
    expect(viewAlltodo(todos)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          task: expect.any(String),
          completed: expect.any(Boolean),
        },
      ])
    );
  });

  test("view One todo", () => {
    let set = 0;
    let todo = Array.from(todos, () => {
      set++;

      return {
        id: Math.floor(Math.random() * 100),
        task: Math.floor(Math.random() * 1000).toString(),
        completed: false,
      };
    });
    expect(viewOneTodo(todos, 3)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        task: expect.any(String),
        completed: expect.any(Boolean),
      })
    );
  });

  test("check our update one todo List", () => {
    let count = 0;
    let data = Array.from(todos, () => {
      count++;

      return {
        id: count,
        task: Math.floor(Math.random() * 1000).toString(),
        completed: true,
      };
    });

    expect(updateOneTodo(data, 1)).toEqual({
      id: expect.any(Number),
      task: expect.any(String),
      completed: expect.any(Boolean),
    });
  });
});

import { createGood, viewAllGoods, viewOneGood, updateOneGood } from "../index";

const students = [
  { id: 1, name: "Student 1", age: 18, grade: "B" },
  { id: 2, name: "Student 2", age: 20, grade: "A" },
  { id: 3, name: "Student 3", age: 19, grade: "C" },
  { id: 4, name: "Student 4", age: 22, grade: "A+" },
  { id: 5, name: "Student 5", age: 21, grade: "B+" },
];

describe("checking our expenses", () => {
  test("check our create good function", () => {
    let goodsList = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        price: Math.floor(Math.random() * 1000),
        quantity: Math.floor(Math.random() * 1000),
      };
    });

    let newGood = {
      id: goodsList.length + 1,
      name: `Item ${goodsList.length + 1}`,
      price: Math.floor(Math.random() * 100),
      quantity: Math.floor(Math.random() * 100),
    };

    expect(createGood(goodsList, newGood)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        price: expect.any(Number),
        quantity: expect.any(Number),
      })
    );
  });

  test("check view all goods function", () => {
    let goodsList = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        price: Math.floor(Math.random() * 1000),
        quantity: Math.floor(Math.random() * 1000),
      };
    });
    console.log(goodsList);
    expect(viewAllGoods(goodsList)).toEqual(
      expect.arrayContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          price: expect.any(Number),
          quantity: expect.any(Number),
        },
      ])
    );
  });

  test("check view one good function", () => {
    let count = 0;
    let good = Array.from({ length: 6 }, () => {
      count++;

      return {
        id: count,
        name: Math.ceil(Math.random() * 1000).toString(),
        price: Math.ceil(Math.random() * 1000),
        quantity: Math.ceil(Math.random() * 1000),
      };
    });
    expect(viewOneGood(good, 1)).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(Number),
      quantity: expect.any(Number),
    });
  });

  test("check our update one good", () => {
    let count = 0;
    let data = Array.from(goods, () => {
      count++;

      return {
        id: count,
        name: Math.ceil(Math.random() * 1000).toString(),
        price: Math.floor(Math.random() * 1000),
        quantity: Math.floor(Math.random() * 1000),
      };
    });

    expect(updateOneGood(data, 1)).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      price: expect.any(Number),
      quantity: expect.any(Number),
    });
  });

  //   test("check and delete one goods", () => {
  //     let count = 0;
  //     let get = Array.from(goods, () => {
  //       count++;

  //       return {
  //         id: count,
  //         name: Math.ceil(Math.random() * 1000).toString(),
  //         price: Math.floor(Math.random() * 1000),
  //         quantity: Math.floor(Math.random() * 1000),
  //       };
  //     });
  //     expect(deleteGood(get, 3)).toEqual(
  //       expect.objectContaining({
  //         id: expect.any(Number),
  //         name: expect.any(String),
  //         price: expect.any(Number),
  //         quantity: expect.any(Number),
  //       })
  //     );
  //   });
});

describe("checking all student function", () => {
  test("check our create student function", () => {
    let studentList = Array.from({ length: 6 }, () => {
      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        age: Math.floor(Math.random() * 100),
        grade: Math.ceil(Math.random() * 1000).toString(),
      };
    });

    let newT = {
      id: Math.floor(Math.random() * 100),
      name: Math.ceil(Math.random() * 1000).toString(),
      age: Math.floor(Math.random() * 100),
    };

    expect(createStudent(studentList, newT)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  test("view All student", () => {
    expect(viewAllstudent(students)).toEqual(
      expect.objectContaining([
        {
          id: expect.any(Number),
          name: expect.any(String),
          age: expect.any(Number),
          grade: expect.any(String),
        },
      ])
    );
  });

  test("view One student", () => {
    let set = 0;
    let todo = Array.from({ length: 6 }, () => {
      set++;

      return {
        id: Math.floor(Math.random() * 100),
        name: Math.ceil(Math.random() * 1000).toString(),
        age: Math.floor(Math.random() * 100),
      };
    });
    expect(viewOneStudent(students, 3)).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  test("check and update one student Logic", () => {
    let count = 0;
    let data = Array.from(students, () => {
      count++;

      return {
        id: count,
        name: Math.ceil(Math.random() * 1000).toString(),
        age: Math.ceil(Math.random() * 1000),
        grade: Math.floor(Math.random() * 100).toString(),
      };
    });

    expect(updateOneStudent(data, 1)).toEqual({
      id: expect.any(Number),
      name: expect.any(String),
      age: expect.any(Number),
      grade: expect.any(String),
    });
  });

  //   test("check and delete one student", () => {
  //     let count = 0;
  //     let student = Array.from(students, () => {
  //       count++;

  //       return {
  //         id: count,
  //         name: Math.ceil(Math.random() * 1000).toString(),
  //         age: Math.ceil(Math.random() * 1000),
  //         grade: Math.floor(Math.random() * 100).toString(),
  //       };
  //     });
  //     expect(deleteStudent(student, 2)).toEqual({
  //       id: expect.any(Number),
  //       name: expect.any(String),
  //       age: expect.any(Number),
  //       grade: expect.any(String),
  //     });
  //   });
});
