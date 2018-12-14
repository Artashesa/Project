var matrix = [
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3,],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3,],
    [0, 0, 1, 4, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3,],
    [0, 2, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 3, 2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3,],    
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 8, 3, 0, 0, 1, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3,],
    [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 1, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 0, 4, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3,],
    [0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 0, 3,],
    [4, 0, 1, 0, 0, 0, 3, 0, 0, 0, 3, 0, 2, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 3,],
    
];


var side = 120;
var arrGrass = [];
var arrXotaker = [];
var arrMsaker=[];
var arrVors=[];
var arrLic=[];
var arrXeno=[]


function setup() {
    frameRate(10);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                arrGrass.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ar = new Xotaker(x, y);
                arrXotaker.push(ar);
            }
            else if (matrix[y][x] == 3) {
                var ms = new Msaker(x, y);
                arrMsaker.push(ms);

            }
        else if (matrix[y][x] == 4) {
            var vo = new vors(x, y);
            arrVors.push(vo);

        }
        else if (matrix[y][x] == 8) {
            var licex = new Licexvat(x, y);
            arrLic.push(licex);

        }
        else if (matrix[y][x] == 9) {
            var xeno = new Xenomorf(x, y);
            arrXeno.push(xeno);

        }
    }
    
}
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 8) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 9) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in arrGrass) {
        arrGrass[i].bazmanal();
    }
    for (var i in arrXotaker) {
        arrXotaker[i].utel();
        arrXotaker[i].bazmanal();
        arrXotaker[i].mernel();
    }
    for(var i in arrMsaker ){
        arrMsaker[i].utel();
        arrMsaker[i].bazmanal();
        arrMsaker[i].mernel();
    }
    for(var i in arrVors ){
        arrVors[i].sharjvel();
        arrVors[i].krakel();
       arrVors[i].mernel();
        
    }
    for(var i in arrLic ){
        arrLic[i].utel();
        arrLic[i].bazmanal();
        arrLic[i].mernel();
    }
    for(var i in arrXeno ){
        
        arrXeno[i].utel();

}

}





