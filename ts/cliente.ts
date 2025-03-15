namespace empresa{
    export class Cliente extends Pessoa{

        private_codigo: number;
        private_saldo: number;

        constructor (codigo:number){
            super();
            this._codigo = codigo
        }

        get codigo(){
            return this.private_codigo;
        }

        get saldo(){
            return this.private_saldo;
        }

        set saldo (saldo:number){
            this.saldo = saldo;
        }
    }




}