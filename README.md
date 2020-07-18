# Chess Board Simulator
Simple command line based application to simulate the movement of various chess pieces on chess board

## Problem Statement
Create a program, which simulates a chessboard and the movements of various types of pieces on the chessboard.

### Chess Board
The chessboard is an 8 x 8 grid with 64 cells in it. With 8 rows (A, B, C.... H) and 8 columns (1, 2, 3.... 8), each cell can be uniquely identified with its cell number.

### Chess pieces and their movements
The game of chess has 6 unique types of pieces, with their own unique types of movements. These are:
1. **King** – Can move only 1 step at a time in all 8 directions (horizontal, vertical and diagonal)
2. **Queen** – Can move across the board in all 8 directions
3. **Bishop** – Can move across the board only diagonally
4. **Knight** – Can move across the board only in 2.5 steps (2 vertical steps and 1 horizontal step)
5. **Rook** – Can move across the board only vertically and horizontally
6. **Pawn** – Can move only 1 step at a time, in the forward direction, vertically. Can also move 1 step forward diagonally, in order to eliminate an opposing piece.

### Prerequisite
- NodeJS version 12.15 or higher  - [Install Link](https://nodejs.org/en/)
- NPM Version 6.14.6 or higher - (Comes bundle with NodeJS)

### Implementation details
- The solution for this problem is developed using NodeJS with [Typescript](https://www.typescriptlang.org/).
- Additional libraries / npm packages used are : 
  - [Prompt-Sync](https://www.npmjs.com/package/prompt-sync) : To get input from the user.
  - [Chalk](https://www.npmjs.com/package/chalk) : For better visual representation of the output.
  - [Table](https://www.npmjs.com/package/table): For displaying chessboard on console.
- Development dependencies
  - Typescript
  - ts-node
  - Eslint
  - Prettier

### NPM Scripts
To run this programme clone this repository then execute the following commands

To install all the dependencies.

`npm install`

To transpile the typcript code to javascript.

`npm run build` 

To start the programme.

`npm start` 

