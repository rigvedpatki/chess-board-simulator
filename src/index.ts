import prompt from 'prompt-sync'

import {
  displayEmptyChessBoard,
  displayChessBoardWithAnswer
} from './display-chess-board'

import { chessPieces } from './chess-pieces'

import { allBoardPositions } from './chess-board'

let interruptFlag = 'Y'
const input = prompt({
  sigint: true
})

while (interruptFlag === 'Y') {
  try {
    displayEmptyChessBoard()

    const userInput = input(
      'Enter Chess Piece (King/Queen/Bishop/Knight/Rook/Pawn) and board position, For Ex: King D5 => '
    )

    const [chessPiece, boardPosition] = userInput.split(' ')

    if (Object.keys(chessPieces).includes(chessPiece.toUpperCase())) {
      if (allBoardPositions.includes(boardPosition.toUpperCase())) {
        const answer: Array<string> = chessPieces[
          chessPiece.toUpperCase()
        ].getPossiblePositions(boardPosition.toUpperCase())

        if (answer[0] === 'No further moves possible') {
          console.log(`${answer.join(',')}`)
        } else {
          console.log(
            `Possible positions for ${chessPiece} on ${boardPosition} are as follows : \n${answer.join(
              ','
            )}\n`
          )
        }

        displayChessBoardWithAnswer(answer)

        const choice = input('Do you want to try again ? (Y/N) => ')

        if (choice.toUpperCase() === 'Y') {
          interruptFlag = 'Y'
        } else if (choice.toUpperCase() === 'N') {
          interruptFlag = 'N'
        } else {
          console.log(`Invalid input ${choice}`)
        }
      } else {
        console.log(`Invalid chess board position ${boardPosition}`)
      }
    } else {
      console.log(`Invalid chess piece ${chessPiece}`)
    }
  } catch (error) {
    console.log(error)
  }
}

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)')
  // some other closing procedures go here
  process.exit(1)
})
