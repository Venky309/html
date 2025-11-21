class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  work(): void {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  }
}

const employee = new Employee('Charlie', 28, 'Developer');
employee.greet();
employee.work(); 