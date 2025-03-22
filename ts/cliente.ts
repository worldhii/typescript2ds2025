namespace empresa{
    export class Cliente extends Pessoa{

        private _codigo: number;
        private _saldo: number = 0;

        constructor (codigo:number){
            super();
            this._codigo = codigo
        }

        get codigo(){
            return this._codigo;
        }

       // set codigo (codigo:number){
          //  this._codigo = codigo;//
        

        get saldo(){
            return this._saldo;
        }

        set saldo (saldo:number){
            this.saldo = saldo;
        }
   
        public deposita(valor:number){
            this._saldo += valor;
        }

        public comprar(valorCompra:number){
            if(this._saldo >= valorCompra){
               this._saldo = this._saldo - valorCompra;
               return true;
             }else{

                return false;
             }
            
        }
 
    }

}