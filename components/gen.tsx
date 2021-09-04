import { Person, Faculty, Student, Course, Building } from "./component";

let fname = [
  "Roxann",
  "Angelia",
  "Trinh",
  "Christian",
  "Jenine",
  "Adriane",
  "Lillie",
  "Jalisa",
  "Tierra",
  "Bethann",
  "Crystal",
  "Reid",
  "Cornelius",
  "Pasquale",
  "Maude",
  "Cheryl",
  "Stepanie",
  "Ivana",
  "Lakesha",
  "Octavio",
];

let lname = [
  "Holt",
  "Fryer",
  "Damon",
  "Priolo",
  "Hajduk",
  "Sentell",
  "Logan",
  "Northup",
  "Horowitz",
  "Montero",
  "Burwell",
  "Wallach",
  "Seaton",
  "Donelan",
  "Devin",
  "Mohammed",
  "Fain",
  "Eskew",
  "Ekstrom",
  "Amaya",
  "Mardis",
  "Pietz",
  "Spann",
  "Jean-Carlo",
  "Kenny",
  "Kennedy",
  "Jefferson",
  "Garcia",
  "Martinez",
  "Castillo",
  "Cuevas",
];
export function printPerson(p: Person) {
  console.log([p.firstName, p.lastName].join[", "]);
}

export function genFaculty(count: number = 10) {
  var facultyArray: Faculty[] = [];

  // loop $count times
  for (let i = 0; i < count; i++) {
    var person: Faculty = {
      //grab random from list of first names
      firstName: fname[Math.floor(Math.random() * fname.length - 1)],
      //grab random from list of last names
      lastName: lname[Math.floor(Math.random() * lname.length - 1)],

      //gen random id (hex) ///TODOTODOTODO
      id: genRanHex(10),
      //set isactive=true
      isActive: true,
      //generate random street address
      //grab random department
      //gen random number and get courses from list of courses with department in mind
      //gen random number for tenure
      tenure: Math.floor(Math.random() * 50), //0~49 years
      //grab random building for office and gen random room number; assume 3 floors max
    };
    facultyArray.push(person);
  }
  return facultyArray;
}
export function genStudent(count: number = 10) {
  var studentArray: Student[] = [];

  // loop $count times
  for (let i = 0; i < count; i++) {
    var person: Student = {
      //grab random from list of first names
      firstName: fname[Math.floor(Math.random() * fname.length - 1)],
      //grab random from list of last names
      lastName: lname[Math.floor(Math.random() * lname.length - 1)],

      //gen random id (hex) ///TODOTODOTODO
      id: genRanHex(10),
      //set isactive=true
      isActive: true,
      //generate random street address
      //grab random department
      //gen random number and get courses from list of courses with department in mind
      courses: ["ENGL101, BIO101, MATH101, ART101, HIST101"],
      GPA: 4.0,
    };
    studentArray.push(person);
  }
  return studentArray;
}

function generateHex(seed?: number) {}

export function genRanHex(size: number) {
  return [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");
}

console.log("from gen.tsx:");
const getFaculty = async () => {
  let a = await genFaculty(10);
  console.log(JSON.stringify(a));
  return a;
};
const getStudents = async () => {
  let a = await genStudent(50);
  console.log(JSON.stringify(a));
  return a;
};

// let faculties = getFaculty();

// console.log(JSON.stringify(faculties));

// let stud = getStudents();

// console.log(JSON.stringify(stud));

// console.log("faculty:");
// let faculties = getFaculty();
// console.log(faculties);
// var jsonFac = JSON.stringify(faculties);
// fs.writeFile("./data/faculty.json", jsonFac, "utf8", function (err) {
//   if (err) {
//     console.log("error has occured");
//     console.log(err);
//     return;
//   }
//   console.log("JSON successfully wrote faculty");
// });

// console.log("students:");
// let studentss = getStudents();
// console.log(studentss);
// var jsonStu = JSON.stringify(studentss);
// fs.writeFile("./data/students.json", jsonStu, "utf8", function (err) {
//   if (err) {
//     console.log("error has occured");
//     console.log(err);
//     return;
//   }
//   console.log("JSON successfully wrote student");
// });

console.log("--end gen.tsx");
