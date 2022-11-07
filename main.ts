function drawGrid () {
    gridSprites = []
    currentY = 0
    for (let row of grid) {
        currentX = 0
        for (let gridSpace of row) {
            if (gridSpace == 1) {
                gridSprite = sprites.create(img`
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 7 7 f f 7 7 7 7 
                    7 7 f f f f f f 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 f f 7 7 f f 7 7 
                    7 7 7 7 7 7 7 7 7 7 
                    `, SpriteKind.Player)
                gridSprite.setPosition(0, 0)
                gridSprites.push(gridSprite)
            }
            currentX += 10
        }
        currentY += 10
    }
}
let gridSprite: Sprite = null
let currentX: number = null
let currentY: number = null
let gridSprites: Sprite[] = []
let grid: number[][] = []
let rowTemplte = [
0,
1,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
grid = []
for (let index = 0; index < 12; index++) {
    grid.push(rowTemplte)
}
game.onUpdate(function () {
    drawGrid()
})
