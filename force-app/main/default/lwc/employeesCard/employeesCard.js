import { LightningElement } from 'lwc';

export default class EmployeesCard extends LightningElement {

    employee = {
        name: '',
        age: '',
        email: ''
    };

    employees = [];

    employeeCounter = 1;

    handleChange(event) {

        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        this.employee = {
            ...this.employee,
            [fieldName]: fieldValue
        };
    }

    addEmployee() {

        const newEmployee = {
            id: this.employeeCounter++,
            ...this.employee
        };

        // this.employees = [
        //     ...this.employees,
        //     newEmployee
        // ];
        this.employees.push(newEmployee);
        console.log('Employees array size: '+this.employees.length);

        this.employee = {
            name: '',
            age: '',
            email: ''
        };
    }

    get hasEmployees() {
        return this.employees.length > 0;
    }
    deleteEmployee(event) {

        const employeeId =
            Number(event.target.dataset.id);

        this.employees =
            this.employees.filter(
                emp => emp.id !== employeeId
            );
    }
}