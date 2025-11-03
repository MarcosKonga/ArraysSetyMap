class ordenador {

    constructor(marca, modelo, ram=4, capacidad=512, pulgadas=17) {
        this.marca=marca;
        this.modelo=modelo;
        this.ram=ram;
        this.capacidad=capacidad;
        this.pulgadas=pulgadas;
    }

    toString() {
        return 'Marca: '+this.marca+' | Modelo: '+this.modelo+' | RAM: '+this.ram+' | Capacidad: '+this.capacidad+' | Pulgadas: '+this.pulgadas;
    }
}

class portatil extends ordenador {

    constructor(marca, modelo, ram, capacidad, pulgadas, autonomia=4) {
        super(marca, modelo, ram=4, capacidad=256, pulgadas=12)
        this.autonomia=autonomia;
    }

    toString() {
        return 'Marca: '+this.marca+' | Modelo: '+this.modelo+' | RAM: '+this.ram+' | Capacidad: '+this.capacidad+' | Pulgadas: '+this.pulgadas+' | Autonomia: '+this.autonomia;
    }
}

const info=document.getElementById('ordenador');
let orde=new ordenador('Apple', 'Max Plus');
info.innerHTML=orde.toString()+'<br>';

const porta=document.getElementById('portatil');
let port=new portatil('Lenovo', '11.5');
porta.innerHTML=port.toString()+'<br>';