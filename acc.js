class account{
    constructor(name, accno, balance)
    {
        this.name=name;
        this.accno=accno;
        this.balance=balance;
    }
    getBalance(){
        return "The Balance is :"+this.balance
    }
    withdraw(amount){
        if(amount<=this.balance)
        {
            this.balance=this.balance-amount
            return this.getBalance()
        }else{
            return "The Invalid amount.the balance is:"+this.getBalance()
        }
    }
    deposit(amount){
        this.balance=this.balance+amount
        return this.getBalance()
    }
}
const Mano=new account("Mano",5746,234579)
const Radha=new account("Radha",2314,342560)
const Veera=new account("Veera",3245,343500)
console.log(Radha.getBalance());
console.log(Mano.deposit(500000));
console.log(Veera.withdraw(50000));
