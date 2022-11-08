class Employee {
  employeeCode: number;
  employeeName: string;

  constructor (employeeCode: number, employeeName: string) {
    this.employeeCode = employeeCode
    this.employeeName = employeeName
  }

  getSalary(): number {
    return 15000000
  }
}