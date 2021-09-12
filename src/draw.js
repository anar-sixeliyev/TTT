//not used
export function calculateDraw(squares) {
    var i = 0;
    squares.map(e => {
        if (e !== null) {
            /* console.log('Filled'); */
            i++;
            if (i === 9) {
                /* console.log("Draw!!"); */
                return true;
            }
        } else {
            /* console.log("not filled"); */
        }
    });
    /* return false; */
}