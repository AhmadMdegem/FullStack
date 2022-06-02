/* Write your code below */

class Matrix {

    constructor(row, col) {
        this.matrix = this.generateMatrix(row, col)

    }

    generateMatrix(row, col) {

        let counter = 1
        let matrix = []
        for (let r = 0; r < row; r++) {
            matrix.push([])
            for (let c = 0; c < col; c++) {
                matrix[r][c] = counter++

            }
        }
        return matrix
    }
    print(){
       for (let r = 0; r < this.matrix.length; r++) {
           let line = ''
           for (let c = 0; c < this.matrix[r].length; c++) {
            line += (this.matrix[r][c] + "\t")
           }
           console.log(line);
       }
    }
    printRow(rowNum) {
        let line = ''
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            line += (this.matrix[rowNum][i] + '\t')
        }
        console.log(line);
    }
    printColumn(colNum) {
        let col = ''
        for (let i = 0; i < this.matrix.length; i++) {
            col += (this.matrix[i][colNum]+ '\t')
        }
        console.log(col);
    }
    get(r,c){
        return this.matrix[r][c]
    }
    alter(r, c, v) {
        this.matrix[r][c] = v
    }
    findCoordinate(v){
        for (let r = 0; r < this.matrix.length; r++) {
            for (let c = 0; c < this.matrix[r].length; c++) {
             if(this.matrix[r][c] === v)
             return {x: c, y: r}
            }
        }
    }
}


module.exports = Matrix