class Human {
  constructor(info) {
    this.name = info.name;
    this.surname = info.surname;
    this.age = info.age;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  setFullName(fullName) {
    [this.name, this.surname] = fullName.split(" ");
  }
}

let human = new Human({ name: "Elon", surname: "Mask", age: 51 });

console.log(human);
const getName = human.getFullName();
human.setFullName("Tom Cruise");

console.log(`Get full name: ${getName}`);
console.log(`Setted name: ${human.name} \nSetted surname: ${human.surname}`);
console.log(human);

class Student extends Human {
  constructor({ name, surname, age, marks }) {
    super({ name, surname, age });
    this.marks = marks;
  }

  getAverageMark() {
    let summaOfMarks = 0;
    this.marks.forEach((item) => {
      summaOfMarks += item;
    });
    return summaOfMarks / this.marks.length;
  }

  getMinMark() {
    return Math.min(...this.marks);
  }

  getMaxMark() {
    return Math.max(...this.marks);
  }
}

function getArrayOfMarks(count, minMark, maxMark) {
  const arrayOfMarks = [];
  while (arrayOfMarks.length < count) {
    const randomMark =
      Math.floor(Math.random() * (maxMark - minMark)) + minMark;
    arrayOfMarks.push(randomMark);
  }
  return arrayOfMarks;
}

let student1 = new Student({
  name: "Michael",
  surname: "Brink",
  age: 18,
  marks: getArrayOfMarks(5, 1, 10),
});
let student2 = new Student({
  name: "Mark",
  surname: "Huber",
  age: 20,
  marks: getArrayOfMarks(5, 1, 10),
});
let student3 = new Student({
  name: "Tom",
  surname: "Vinston",
  age: 25,
  marks: getArrayOfMarks(5, 1, 10),
});
let student4 = new Student({
  name: "Den",
  surname: "Gruber",
  age: 22,
  marks: getArrayOfMarks(5, 1, 10),
});
let student5 = new Student({
  name: "Jonh",
  surname: "Brown",
  age: 19,
  marks: getArrayOfMarks(5, 1, 10),
});

console.log(student1);
console.log("Michael's average mark " + student1.getAverageMark());
console.log("Mark's average mark " + student2.getAverageMark());
console.log("Tom's average mark " + student3.getAverageMark());
console.log("Den's average mark " + student4.getAverageMark());
console.log("Jonh's average mark " + student5.getAverageMark());
console.log("Michael's min mark " + student1.getMinMark());
console.log("Michael's max mark " + student1.getMaxMark());

class FakeStudent extends Student {
  #chetedMarks = [];
  constructor({ name, surname, age, marks }) {
    super({ name, surname, age, marks });
    this.#cheat();
  }

  #cheat() {
    for (let key of this.marks) {
      const twicer = key * 2;
      if (twicer > 10) {
        this.#chetedMarks.push(10);
      } else {
        this.#chetedMarks.push(twicer);
      }
    }
    return this.#chetedMarks;
  }

  getCheat() {
    return this.#chetedMarks;
  }

  getAverageMark() {
    let summaOfMarks = 0;
    this.#chetedMarks.forEach((item) => {
      summaOfMarks += item;
    });
    return summaOfMarks / this.#chetedMarks.length;
  }

  getMinMark() {
    return Math.min(...this.#chetedMarks);
  }

  getMaxMark() {
    return Math.max(...this.#chetedMarks);
  }
}

let fakeStudent = new FakeStudent({
  name: "Leonardo",
  surname: "DiCaprio",
  age: 55,
  marks: getArrayOfMarks(5, 1, 10),
});
let fakeStudent2 = new FakeStudent({
  name: "Ledi",
  surname: "Di",
  age: 30,
  marks: getArrayOfMarks(5, 1, 10),
});

console.log(fakeStudent);
console.log("Array of cheted marks", fakeStudent.getCheat());
console.log("Leonardo's average mark " + fakeStudent.getAverageMark());
console.log("Leonardo's min mark " + fakeStudent.getMinMark());
console.log("Leonardo's max mark " + fakeStudent.getMaxMark());

class Teacher extends Student {
  constructor({ name, surname, age, group }) {
    super({ name, surname, age });
    this.group = group;
  }

  getListOfNamesByAverageMark() {
    this.group.sort((a, b) => b.getAverageMark() - a.getAverageMark());
    const sortArrayOfNames = this.group.map((elem) => {
      return elem.name;
    });
    return sortArrayOfNames;
  }

  getStudentByName(name) {
    for (const i in this.group) {
      if (this.group[i].name === name) return this.group[i];
    }
  }

  removeStudentByName(name) {
    const index = this.group.findIndex((elem) => elem.name === name);
    this.group.splice(index, 1);
    return this.group;
  }
  updateStudentByName(oldname, name, surname, age) {
    for (const i in this.group) {
      if (this.group[i].name === oldname)
        return (this.group[i] = new Student({
          name: name,
          surname: surname,
          age: age,
          marks: getArrayOfMarks(5, 1, 10),
        }));
    }
  }

  findFakeStudent() {
    let str = "";
    for (const i in this.group) {
      if (this.group[i] instanceof FakeStudent) {
        str += `${this.group[i].name}, real marks: ${this.group[i].marks.join(
          ", "
        )} \n`;
      }
    }
    return str;
  }
}

let teacher = new Teacher({
  name: "Victoria",
  surname: "Smith",
  age: 24,
  group: [
    student1,
    student2,
    student3,
    student4,
    student5,
    fakeStudent,
    fakeStudent2,
  ],
});

console.log(teacher);
console.log(
  "List of names by average mark ",
  teacher.getListOfNamesByAverageMark()
);
console.log(teacher.getStudentByName("Leonardo"));
console.log(teacher.removeStudentByName("Tom"));
console.log(teacher);
console.log(teacher.updateStudentByName("Michael", "Ann", "Bill", 25));
console.log(teacher);
console.log(teacher.findFakeStudent());
