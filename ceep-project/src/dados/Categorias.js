export default class Categorias{
    constructor(){
        this.categorias = [];
        this._inscritos = [];
    }

    inscrever(func){
        this._inscritos.push(func);
    }

    desincrever(func) {
        console.log(this._inscritos.length)
        this._inscritos = this._inscritos.filter(f => f !== func)
        console.log(this._inscritos.length)
    }

    notificar(){
        this._inscritos.forEach(func =>{
            func(this.categorias);
        } );
    }
    
    adicionarCategoriaFuncao(novaCaegoria){
        this.categorias.push(novaCaegoria);
        this.notificar()
    }
}