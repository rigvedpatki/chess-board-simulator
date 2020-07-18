import { chessBoard } from './chess-board'
import { table } from 'table'
import chalk from 'chalk'

export const displayEmptyChessBoard = () => {
  console.log(
    table(
      chessBoard.map((row, rowIndex) => {
        if (rowIndex % 2 === 0) {
          return row.map((col, colIndex) => {
            if (colIndex % 2 === 0) {
              return `${chalk.bgWhite(chalk.black(col))}`
            } else {
              return `${chalk.bgBlack(chalk.white(col))}`
            }
          })
        } else {
          return row.map((col, colIndex) => {
            if (colIndex % 2 === 0) {
              return `${chalk.bgBlack(chalk.white(col))}`
            } else {
              return `${chalk.bgWhite(chalk.black(col))}`
            }
          })
        }
      })
    )
  )
}

export const displayChessBoardWithAnswer = (answer: Array<string>) => {
  console.log(
    table(
      chessBoard.map((row, rowIndex) => {
        if (rowIndex % 2 === 0) {
          return row.map((col, colIndex) => {
            if (colIndex % 2 === 0) {
              if (answer.includes(col)) {
                return `${chalk.bgWhite(chalk.redBright(col))}`
              } else {
                return `${chalk.bgWhite(chalk.black(col))}`
              }
            } else {
              if (answer.includes(col)) {
                return `${chalk.bgBlack(chalk.redBright(col))}`
              } else {
                return `${chalk.bgBlack(chalk.white(col))}`
              }
            }
          })
        } else {
          return row.map((col, colIndex) => {
            if (colIndex % 2 === 0) {
              if (answer.includes(col)) {
                return `${chalk.bgBlack(chalk.redBright(col))}`
              } else {
                return `${chalk.bgBlack(chalk.white(col))}`
              }
            } else {
              if (answer.includes(col)) {
                return `${chalk.bgWhite(chalk.redBright(col))}`
              } else {
                return `${chalk.bgWhite(chalk.black(col))}`
              }
            }
          })
        }
      })
    )
  )
}
