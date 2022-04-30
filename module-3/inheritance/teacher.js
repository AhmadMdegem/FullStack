class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        this.courses = {}
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade)
    }
    addCourse(course) {
        let courseNames = Object.keys(this.courses)
        for (let courseName of courseNames) {
            if (course === courseName) {
                this.courses[course] += 1
                return
            }
        }
        this.courses[course] = 1
    }
}