
class vors extends LivingCreature {
    constructor(x, y) {
        
        this.energy = 30;
        
        
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

    }; mernel() {
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