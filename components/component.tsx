export default function TsComponent({ stri }: { stri: string }) {
  console.log("typescript doodoo");
  return (
    <>
      <h1>This is a test</h1>
    </>
  );
}

interface Person {
  firstName: string;
  middleName?: string;
  lastName: string;
  readonly id: string;
  isActive: boolean;
  address?: string;
}

interface Course {
  title: string;
  department: string;
  readonly id: string;
  courseLevel: number;
  credits: number;
  studentRoster: string[]; // student ids
  isAvailable: boolean;
  // if not avalable, it may not have the following info
  professor?: string[]; // faculty ids
  building?: string;
  room?: string;
}

interface Building {
  name: string;
  readonly id: string;
  address: string;
  isOpen: boolean;
}

interface Department {
  name: string;
  mainBuilding: Building;
  courses: string[]; // ids
}

interface Faculty extends Person {
  tenure: number;
  // if not a professor, they may not have the following info
  department?: string;
  courses?: Course[]; // ids of courses
  office?: { location: Building; number_: string | number };
}

interface Student extends Person {
  courses: string[]; // ids of courses
  GPA: number;
}

const defaultBuilding: Building = {
  name: "a",
  id: "0",
  address: "123 a street",
  isOpen: true,
};

export class College {
  name: string;
  buildings: Building[];
  departments: Department[];
  courses: Course[];
  faculty: Faculty[];
  students: Student[];

  constructor(n: string) {
    this.name = n;
    this.courses = require("../data/courses.json") as Course[];
    this.departments = require("../data/departments.json") as Department[];
    this.faculty = require("../data/faculty.json") as Faculty[];
    this.students = require("../data/students.json") as Student[];
  }
  setName(n: string) {
    this.name = n;
  }
  getName(): string {
    return this.name;
  }
  addBuilding(
    name_: string,
    id_: string,
    address: string,
    isOpen_: string
  ): void {
    let temp: Building = defaultBuilding;
    this.buildings.push(temp);
  }
  addDepartment(
    name_: string,
    building: Building,
    facultyList: Faculty[],
    courseList: string[]
  ): void {
    let temp: Department = {
      name: "",
      mainBuilding: defaultBuilding,
      courses: [],
    };
    this.departments.push(temp);
  }
}

export type { Person, Faculty, Student, Department, Course, Building };
