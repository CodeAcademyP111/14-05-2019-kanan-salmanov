class Car {
    constructor(_marka, _model, _year, _tank, _yanma) {
        this.marka = _marka;
        this.model = _model;
        this.year = _year;
        this.tank = _tank;
        this.yanma = _yanma;
        this.initialFuelLevel = 0;
    }
    result(km) {
        var res = this.initialFuelLevel - (this.yanma * km / 100);
        if (res >= 0) {
            this.initialFuelLevel = res;
        } else {
            return "Benzin yoxdur";
        }
        return res;
    }

    Petrol(petrol) {
        if ((this.tank - this.initialFuelLevel) > petrol) {
            this.initialFuelLevel += petrol;
            return this.initialFuelLevel;
        } else if (this.initialFuelLevel + petrol == this.tank) {
            return "bak fulldur";
        } else {
            return "Bakin hecmini asirsiniz" + " - " + (petrol - (this.tank - this.initialFuelLevel)) + " " + "litr ashirsiniz";
        }
    }
}
var BMW = new Car("BMW", "X5", "2010", 50, 12);
var Mersedes = new Car("Mersedes", "Benz", "2006", 45, 11);
var Xonda = new Car("Xonda", "CRV", "2012", 50, 12);

BMW.initialFuelLevel = 40; //qalan benzin
console.log(BMW.result(300));
console.log(BMW.Petrol(47));