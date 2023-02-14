// From the base FC Human, implement inheritance for FC Teacher and FC Student

function Human(info) {
  this.name = info.name;
  this.surname = info.surname;
  this.age = info.age;
}

let fullName = "";
Human.prototype.getFullName = function () {
  fullName = `${this.name} ${this.surname}`;
  return fullName;
};

Human.prototype.setFullName = function (fullName) {
  return fullName.match(/[A-Z][a-z]+/g);
};

let human = new Human({ name: "Ilon", surname: "Mask", age: 45 });
console.log(human);
console.log(human.getFullName());
console.log(human.setFullName(fullName));

function Student({ name, surname, age, marks }) {
  Human.call(this, { name, surname, age });
  this.marks = marks;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.getAverageMark = function () {
  let summaOfMarks = 0;
  for (let i = 0; i < this.marks.length; i++) {
    summaOfMarks += this.marks[i];
  }
  return summaOfMarks / this.marks.length;
};

Student.prototype.getMinMark = function () {
  return Math.min(...this.marks);
};

Student.prototype.getMaxMark = function () {
  return Math.max(...this.marks);
};

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

function Teacher({ name, surname, age, group }) {
  Human.call(this, { name, surname, age });
  this.group = group;
}

Teacher.prototype = Object.create(Human.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.getListOfNamesByAverageMark = function () {
  this.group.sort((a, b) => b.getAverageMark() - a.getAverageMark());
  const sortArrayOfNames = this.group.map((elem) => {
    return elem.name;
  });
  return sortArrayOfNames;
};

Teacher.prototype.getStudentByName = function (name) {
  for (const i in this.group) {
    if (this.group[i].name === name) return this.group[i];
  }
};

Teacher.prototype.removeStudentByName = function (name) {
  const index = this.group.findIndex((elem) => elem.name === name);
  this.group.splice(index, 1);
  return this.group;
};

Teacher.prototype.updateStudentByName = function (oldname, name, surname, age) {
  for (const i in this.group) {
    if (this.group[i].name === oldname)
      return (this.group[i] = new Student({
        name: name,
        surname: surname,
        age: age,
        marks: getArrayOfMarks(5, 1, 10),
      }));
  }
};

let teacher = new Teacher({
  name: "Vika",
  surname: "Kucheruk",
  age: 24,
  group: [student1, student2, student3, student4, student5],
});
console.log(teacher);
console.log(
  "List of names by average mark ",
  teacher.getListOfNamesByAverageMark()
);
console.log(teacher.getStudentByName("Michael"));
console.log(teacher.removeStudentByName("Tom"));
console.log(teacher);
console.log(teacher.updateStudentByName("Michael", "Ann", "Bill", 25));
console.log(teacher);
