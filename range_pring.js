var start = -2;
var end = -10;
var skip = 2;

function printRange(start, end, skip){
    if (end > 0){
    for (var i = start; i < end; i += skip){
        console.log(i);
        }
    }
    else{
        for (var i = start; i > end; i -= skip){
            console.log(i);
        }
    }   
}

printRange(start, end, skip);