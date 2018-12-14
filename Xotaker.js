
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
