var Employee = /** @class */ (function () {
    function Employee(employeeCode, employeeName) {
        this.employeeCode = employeeCode;
        this.employeeName = employeeName;
    }
    Employee.prototype.getSalary = function () {
        return 15000000;
    };
    return Employee;
}());
