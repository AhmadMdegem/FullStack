const Matrix = require('./Matrix')
const SIZE_MATRIX = 3
class TicTacToe extends Matrix {

    constructor() {
        super(SIZE_MATRIX, SIZE_MATRIX)
    }
    loadBoard() {
        for (let r = 0; r < SIZE_MATRIX; r++) {
            for (let c = 0; c < SIZE_MATRIX; c++) {
                super.alter(r, c, '.')
            }
        }
    }
    play(rowNum, colNum, playerNum) {
        if (playerNum === 1)
            super.alter(rowNum, colNum, 'X')
        else {
            super.alter(rowNum, colNum, 'O')
        }
        if (this._checkColX(colNum) && playerNum === 1)
            console.log('Congratulations Player 1');
        else if (this._checkColO(colNum)) {
            console.log('Congratulations Player 2');
        }
        else if (this._checkRowX(rowNum) && playerNum === 1)
            console.log('Congratulations Player 1');
        else if (this._checkRowO(rowNum))
            console.log('Congratulations Player 2');
        else if (this._alhsonX() && playerNum === 1) 
            console.log('Congratulations Player 1');
        else if (this._alhsonO()) 
            console.log('Congratulations Player 2');

    }
    _checkColX(numCol) {
        let count = 0
        for (let r = 0; r < SIZE_MATRIX; r++)
            if (super.get(r, numCol) === 'X')
                count += 1
        return count === SIZE_MATRIX
    }
    _checkRowX(numRow) {
        let count = 0
        for (let c = 0; c < SIZE_MATRIX; c++)
            if (super.get(numRow, c) === 'X')
                count += 1
        return count === SIZE_MATRIX
    }
    _checkRowO(numRow) {
        let count = 0
        for (let c = 0; c < SIZE_MATRIX; c++)
            if (super.get(numRow, c) === 'O')
                count += 1
        return count === SIZE_MATRIX
    }
    _checkColO(numCol) {
        let count = 0
        for (let r = 0; r < SIZE_MATRIX; r++)
            if (super.get(r, numCol) === 'O')
                count += 1
        return count === SIZE_MATRIX
    }
    _alhsonX() {
        let count = 0
        for (let i = 0; i < SIZE_MATRIX; i++) {
            if (super.get(i, i) === 'X')
                count += 1
        }
        if (count === SIZE_MATRIX)
            return true
        count = 0
        let j = SIZE_MATRIX - 1
        for (let i = 0; i < SIZE_MATRIX; i++) {
            if (super.get(i, j) === 'X')
                count += 1
            j -= 1
        }
        if (count === SIZE_MATRIX)
            return true
        return false
    }
    _alhsonO() {
        let count = 0
        for (let i = 0; i < SIZE_MATRIX; i++) {
            if (super.get(i, i) === 'O')
                count += 1
        }
        if (count === SIZE_MATRIX)
            return true
        count = 0
        let j = SIZE_MATRIX - 1
        for (let i = 0; i < SIZE_MATRIX; i++) {
            if (super.get(i, j) === 'O')
                count += 1
            j -= 1
        }
        if (count === SIZE_MATRIX)
            return true
        return false
    }
}

let board = new TicTacToe()
board.loadBoard()

// board.play(0, 2, 1)
// board.play(1, 1, 1)
// board.play(2, 0, 1)
board.play(2, 2, 1)
board.play(2, 1, 1)
board.play(2, 0, 1)
board.print()