class parent{
    constructor(){
        this.fatherName="Mike";
    }
}
class child extends parent{
    constructor(name){
        super();
        this.name=name
    }
    getFullName(){
        return this.name+" "+this.fatherName;
    }
}
const baby=new child("jack");
const baby2=new child("tom");
console.log(baby.getFullName());
console.log(baby2);