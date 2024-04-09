export const tetrominoShapes = {
    'T': {
        shape: [
            [1, 0, 0],
            [1, 1, 0],
            [1, 0, 0]
        ],
        color: 'purple'
    },
    'L': {
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0]
        ],
        color: 'orange'
    },
    'I': {
        shape: [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        color: 'cyan'
    },
    'O': {
        shape: [
            [1, 1],
            [1, 1]
        ],
        color: 'yellow'
    },
    'S': {
        shape: [
            [0, 1, 1],
            [1, 1, 0],
            [0, 0, 0]
        ],
        color: 'green'
    },
    'J': {
        shape: [
            [0, 1, 0],
            [0, 1, 0],
            [1, 1, 0]
        ],
        color: 'blue'
    },
    'Z': {
        shape: [
            [1, 1, 0],
            [0, 1, 1],
            [0, 0, 0]
        ],
        color: 'red'
    }
};


export function getRandomTetrominoShape() {
    const shapes = Object.keys(tetrominoShapes);
    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    return tetrominoShapes[randomShape];
}
