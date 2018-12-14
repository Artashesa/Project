class  Msaker extends LivingCreature {
    constructor(x, y) {
      
        this.energy = 5;
        
       
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
     };
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