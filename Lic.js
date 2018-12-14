class Licexvat extends LivingCreature {
    constructor(x, y) {
       
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
    } yntrelVandak() {
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

    };