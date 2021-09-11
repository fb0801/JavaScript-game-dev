import Brick from 'JS/brick';


export function buildLevel(game, level) {
    let bricks = [];


    level.forEach((row, rowindex) => {
        row.forEach((brick, brickIndex) => {
            if(brick ===1 ){
                let position ={
                    x: 80 * brickIndex,
                    y:75 * 24 * rowindex
                };
                bricks.push(new Brick(game, position))//adds the brick
            }
        
    });
});

return bricks;

}


export const level1 =[
    // 1 to represent where the bricks will be
    [0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]

];