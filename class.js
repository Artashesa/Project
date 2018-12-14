class Grass extends LivingCreature{

    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        /*    console.log(norVandak, this.multiply);*/

        if (this.multiply >= 4 && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            arrGrass.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }


}
class Xotaker extends LivingCreature{
    constructor(x, y) {
        super(x,y);
        this.energy = 3;

    }

    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
     }
     
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharvel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }

    utel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            console.log(norVandak)
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in arrGrass) {
                if (arrGrass[i].x == this.x && arrGrass[i].y == this.y) {
                    arrGrass.splice(i, 1);
                }
            }
            this.energy++;
        }
        else {
            this.sharvel();
        }
    }

    mernel() {
        for (var i in arrXotaker) {
            if (this.energy < 0) {
                if (arrXotaker[i].x == this.x && arrXotaker[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    arrXotaker.splice(i, 1);
                }
            }
        }
    }




    bazmanal() {

        if (this.energy > 5) {

            var norVandak = random(this.yntrelVandak(0));

            if (norVandak) {
                var norXot = new Xotaker(norVandak[0], norVandak[1]);
                arrXotaker.push(norXot);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.energy = 2;
            }
        }
    }
}

class Msaker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 5;
        this.multiply = round(random(0, 8));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ar) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ar) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    utel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            console.log(norVandak)
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in arrXotaker) {
                if (arrXotaker[i].x == this.x && arrXotaker[i].y == this.y) {
                    arrXotaker.splice(i, 1);
                }
            }
            this.energy++;
        }
        else {
            this.sharjvel();
        }
    }
    mernel() {
        for (var i in arrMsaker) {
            if (this.energy < 0) {
                if (arrMsaker[i].x == this.x && arrMsaker[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    arrMsaker.splice(i, 1);
                }
            }
        }
    }
    bazmanal() {

        if (this.energy > 5) {

            var norVandak = random(this.yntrelVandak(0));

            if (norVandak) {
                var norMsaker = new Msaker(norVandak[0], norVandak[1]);
                arrMsaker.push(norMsaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
                this.energy = 2;
            }
        }
    }
}



class vors {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 30;
        this.multiply = round(random(0, 8));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
        this.directions1 = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 3],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x + 3, this.y - 3],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 3, this.y],
            [this.x + 2, this.y],
            [this.x + 1, this.y],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 3],
            [this.x, this.y + 2],
            [this.x, this.y + 1],
            [this.x + 3, this.y + 3],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 1]
        ];

    }

    yntrelVandak(ur) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ur) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    sharjvel() {
        this.stanalNorKordinatner1();

        var norVandak = random(this.yntrelVandak1(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }

    stanalNorKordinatner1() {
        this.directions = [
            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 3],
            [this.x, this.y - 2],
            [this.x, this.y - 1],
            [this.x + 3, this.y - 3],
            [this.x + 2, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 3, this.y],
            [this.x + 2, this.y],
            [this.x + 1, this.y],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 3],
            [this.x, this.y + 2],
            [this.x, this.y + 1],
            [this.x + 3, this.y + 3],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak1(vo) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == vo) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    krakel() {
        this.stanalNorKordinatner1();

        var norVandak = random(this.yntrelVandak1(3));
        if (norVandak) {
            console.log(norVandak)
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 4;
            this.x = norVandak[0];
            this.y = norVandak[1];

            for (var i in arrMsaker) {
                if (arrMsaker[i].x == this.x && arrMsaker[i].y == this.y) {
                    arrMsaker.splice(i, 1);
                }
            }
            this.energy++;
        }
        else {
            this.sharjvel();
        }

    } mernel() {
        for (var i in arrVors) {
            if (this.energy < 0) {
                if (arrVors[i].x == this.x && arrVors[i].y == this.y) {
                    matrix[this.y][this.x] = 0;
                    arrVors.splice(i, 1);
                }
            }
        }
    }
}
class Xenomorf {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = round(random(0, 8));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    yntrelVandak(ar) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ar) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
   
    sharjvel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak(0));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 9;
            this.x = norVandak[0];
            this.y = norVandak[1];
            this.energy--;
        }
    }
    yntrelVandak1() {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    utel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak1());
        if (norVandak) {
            console.log(norVandak)
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 9;
            this.x = norVandak[0];
            this.y = norVandak[1];
if (matrix[norVandak[1]][norVandak[0]] == 2){
            for (var i in arrXotaker) {
                if (arrXotaker[i].x == this.x && arrXotaker[i].y == this.y) {
                    arrXotaker.splice(i, 1);
                }
            }
        }
        if (matrix[norVandak[1]][norVandak[0]] == 3){
            for (var i in arrMsaker) {
                if (arrMsaker[i].x == this.x && arrMsaker[i].y == this.y) {
                    arrMsaker.splice(i, 1);
                }
            }
        }
        if (matrix[norVandak[1]][norVandak[0]] == 4){
            for (var i in arrVors) {
                if (arrVors[i].x == this.x && arrVors[i].y == this.y) {
                    arrVors.splice(i, 1);
                }
            }
        }
       
        }
        else{
            this.sharjvel();
        }
       this.energy++;
    }
    
}


class Licexvat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 2;
        this.multiply = round(random(0, 8));
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak() {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    utel() {
        this.stanalNorKordinatner();

        var norVandak = random(this.yntrelVandak());
        if (norVandak) {
            console.log(norVandak)
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 8;
            this.x = norVandak[0];
            this.y = norVandak[1];
if (matrix[norVandak[1]][norVandak[0]] == 2){
            for (var i in arrXotaker) {
                if (arrXotaker[i].x == this.x && arrXotaker[i].y == this.y) {
                    arrXotaker.splice(i, 1);
                }
            }
        }
        if (matrix[norVandak[1]][norVandak[0]] == 3){
            for (var i in arrMsaker) {
                if (arrMsaker[i].x == this.x && arrMsaker[i].y == this.y) {
                    arrMsaker.splice(i, 1);
                }
            }
        }
        if (matrix[norVandak[1]][norVandak[0]] == 4){
            for (var i in arrVors) {
                if (arrVors[i].x == this.x && arrVors[i].y == this.y) {
                    arrVors.splice(i, 1);
                }
            }
        }
       
        }
       this.energy++;
    }
    yntrelVandak1(mv) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == mv) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    bazmanal() {
        if(this.energy>2){
                    var norVandak = random(this.yntrelVandak1(0));
                    if (norVandak) {
                        var norXenomorf = new Xenomorf(norVandak[0], norVandak[1]);
                        arrXeno.push(norXenomorf);
                        matrix[norVandak[1]][norVandak[0]] = 9;
                        
                    }
                    this.energy=0;
                }
            }
                mernel() {
                    if(this.energy<=0){
                    for (var i in arrLic) {
                        
                            if (arrLic[i].x == this.x && arrLic[i].y == this.y) {
                                matrix[this.y][this.x] = 0;
                                arrLic.splice(i, 1);
                            }
                        }
                    }
                }

    }
                
            
        


