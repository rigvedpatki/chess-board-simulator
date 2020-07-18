import { chessBoard, mapChessBoardPositionToCordinates } from './chess-board'

interface IChessPieces {
  [key: string]: {
    getPossiblePositions: (currentPosition: string) => Array<string>
  }
}

export const chessPieces: IChessPieces = {
  KING: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const { i, j } = mapChessBoardPositionToCordinates(currentPosition)

      const possiblePositionsToMove: Array<string> = []

      for (let row = -1; row < 2; row++) {
        if (chessBoard[i + row]) {
          for (let col = -1; col < 2; col++) {
            if (row === 0 && col === 0) {
              continue
            } else {
              possiblePositionsToMove.push(chessBoard[i + row][j + col])
            }
          }
        }
      }
      return possiblePositionsToMove.filter(el => el !== undefined).sort()
    }
  },
  QUEEN: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const bishopPositions: Array<string> = chessPieces.BISHOP.getPossiblePositions(
        currentPosition
      )
      const rookPositions: Array<string> = chessPieces.ROOK.getPossiblePositions(
        currentPosition
      )

      return [...bishopPositions, ...rookPositions].sort()
    }
  },
  BISHOP: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const { i, j } = mapChessBoardPositionToCordinates(currentPosition)
      const possiblePositionsToMove: Array<string> = []

      for (const row of [-1, 1]) {
        for (const col of [-1, 1]) {
          if (row === -1 && col === -1) {
            for (
              let rowIndex = i + row, colIndex = j + col;
              rowIndex >= 0 && colIndex >= 0;
              rowIndex--, colIndex--
            ) {
              if (chessBoard[rowIndex][colIndex]) {
                possiblePositionsToMove.push(chessBoard[rowIndex][colIndex])
              }
            }
          } else if (row === -1 && col === 1) {
            for (
              let rowIndex = i + row, colIndex = j + col;
              rowIndex >= 0 && colIndex < 8;
              rowIndex--, colIndex++
            ) {
              if (chessBoard[rowIndex][colIndex]) {
                possiblePositionsToMove.push(chessBoard[rowIndex][colIndex])
              }
            }
          } else if (row === 1 && col === -1) {
            for (
              let rowIndex = i + row, colIndex = j + col;
              rowIndex < 8 && colIndex >= 0;
              rowIndex++, colIndex--
            ) {
              if (chessBoard[rowIndex][colIndex]) {
                possiblePositionsToMove.push(chessBoard[rowIndex][colIndex])
              }
            }
          } else if (row === 1 && col === 1) {
            for (
              let rowIndex = i + row, colIndex = j + col;
              rowIndex < 8 && colIndex < 8;
              rowIndex++, colIndex++
            ) {
              if (chessBoard[rowIndex][colIndex]) {
                possiblePositionsToMove.push(chessBoard[rowIndex][colIndex])
              }
            }
          }
        }
      }

      return possiblePositionsToMove.sort()
    }
  },
  KNIGHT: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const { i, j } = mapChessBoardPositionToCordinates(currentPosition)
      const possiblePositions: Array<string> = []

      for (const row of [-2, -1, 1, 2]) {
        if (chessBoard[i + row]) {
          if (row === -2 || row === 2) {
            for (const col of [-1, 1]) {
              possiblePositions.push(chessBoard[i + row][j + col])
            }
          } else if (row === -1 || row === 1) {
            for (const col of [-2, 2]) {
              possiblePositions.push(chessBoard[i + row][j + col])
            }
          }
        }
      }
      return possiblePositions.filter(el => el !== undefined).sort()
    }
  },
  ROOK: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const { i, j } = mapChessBoardPositionToCordinates(currentPosition)

      const horizontalPossiblePositions = chessBoard[i].filter(
        el => el !== currentPosition
      )
      const verticalPossiblepossitions = chessBoard
        .map(r => r[j])
        .filter(el => el !== currentPosition)

      return [
        ...horizontalPossiblePositions,
        ...verticalPossiblepossitions
      ].sort()
    }
  },
  PAWN: {
    getPossiblePositions: (currentPosition: string): Array<string> => {
      const { i, j } = mapChessBoardPositionToCordinates(currentPosition)

      if (chessBoard[i - 1]) {
        return [chessBoard[i - 1][j]]
      } else {
        return ['No further moves possible']
      }
    }
  }
}
