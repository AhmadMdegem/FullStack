/* Write your code below */
const Matrix = require('./Matrix');

class EmployeeMatrix extends Matrix {

    constructor(row, col) {
        super(row, col)
        this.matrix = []
    }
    loadData(salaryData) {
        let row = 0
        for (let item of salaryData) {
            let col = 0
            this.matrix.push([])
            for (let key in item) {
                this.alter(row, col, item[key])
                col += 1
            }
            row += 1
        }
    }
    getEmployees(department) {
        let employees = []
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.get(r, 2) === department)
                employees.push(this.get(r, 1))
        }
        return employees
    }
    getTotalSalary(department) {
        let sum = 0
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.get(r, 2) === department)
                sum += this.get(r, 3)
        }
        return sum
    }
    findRichest() {
        let max = -Infinity
        let nameRichest = ''
        for (let r = 0; r < this.matrix.length; r++) {
            if (this.get(r, 3) > max) {
                max = this.get(r, 3)
                nameRichest = this.get(r, 1)
            }

        }
        return nameRichest
    }
}
/* Do not remove the exports below */
module.exports = EmployeeMatrix