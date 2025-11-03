class rectangulo {

    constructor(width, height) {
        if(width>0) {
            this.width=width;
        }else {
            this.width=1;
        }
        
        if(height>0) {
            this.height=height;
        }else {
            this.height=1;
        }
    }

    cambiarDimensiones(width=this.width, height=this.height) {
        if(width>0) {
            this.width=width;
        }else {
            this.width=1;
        }
        
        if(height>0) {
            this.height=height;
        }else {
            this.height=1;
        }
        
    }

    calcularArea() {
        return this.width*this.height;
    }

    copia() {
        return new rectangulo(this.width, this.height);
    }

    comparar(rect) {
        let areaA=this.calcularArea();
        let areaB=rect.calcularArea();
        if(areaA>areaB) {
            return 'Mayor';
        }else if(areaA<areaB) {
            return 'Menor';
        }else if(areaA=areaB) {
            return 'Igual';
        }
        return 'Error';
    }
}

const info=document.getElementById('rectangulo');
let rect=new rectangulo(25, 50)
info.innerHTML+=rect.calcularArea()+'<br>';
rect.cambiarDimensiones(5, 10)
info.innerHTML+=rect.calcularArea()+'<br>';
let rectC=rect.copia();
info.innerHTML+=rectC.calcularArea()+'<br>';
rectC.cambiarDimensiones(2, 5)
info.innerHTML+=rect.comparar(rectC);
