function Carro0(marca) {
    this.carro = marca;
    
}

function Carro (marca, modelo, valor) {
    this.modelo = modelo;
    let _valor = valor;


    this.getValor = function() {
        return _valor;
    }

    this.setValor = function(valor) {
        if (typeof valor === 'number'){
            _valor = valor;
        }
    }

    this.aumento = function(){
        const novoValor = _valor * 1.20;
        _valor = novoValor;
    }

    Carro0.call(this,marca);
}

function Fiesta(marca) {
    Carro.call(this,marca,"fiesta", 55000);
    
    this.aumento = function(){
        const novoValor = this.getValor() * 1.10;
        this.setValor(novoValor);
    }
}

function Ka(marca) {
    Carro.call(this,marca,"ka", 35000);
    
    this.aumento = function(){
        const novoValor = this.getValor() * 1.15;
        this.setValor(novoValor);
    }
}

function Fusion(marca) {
    Carro.call(this,marca,"fusion", 95000);
    
    this.aumento = function(){
        const novoValor = this.getValor() * 1.20;
        this.setValor(novoValor);
    }
}

const carro0 = new Carro("Ford ");

const carro1 = new Fiesta ("Ford ", "fiesta", "55000");
const carro2 = new Ka ("ka");
const carro3 = new Fusion ("fusion");

carro1.aumento();
console.log(carro1.getValor())
carro2.aumento();
console.log(carro2.getValor())
carro3.aumento();
console.log(carro3.getValor())