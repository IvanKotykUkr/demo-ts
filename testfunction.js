/*let num:number=0;
while (num<3){

    console.log('Number num: '+ num);
    num++;

Finish: for (num = 0;num<2;num++){
    for (let size:number=0;size<3;size++ ){
        if (size==2) break Finish;
        console.log(size);
    }
}
if (){

} else {

}}
let message:string='Привет ';


let messageAnd:string = (5>9)?'vasya':'olya';
message+=messageAnd;
console.log(message)

if(0){
    console.log('Fake')
} else {
    console.log('True')
}

function calcSum(numOne:number,numTwo:number) {
    let result:number=1;
    for (let i:number=0;i<numTwo;i++){
        result *= numOne;

    }

    return result;

console.log(result);
}

calcSum(2,3)


let showNumber = (num:number) => {
    console.log(num);
    let timeId:number = setTimeout(showNumber,1000,++num)
    if (num>=10){
        clearTimeout(timeId)
    }


}
setTimeout(showNumber,1000,1)
let MessSage:any=ShowMessage();
if(2>1) {
    function ShowMessage() {
        console.log('Message');

    }

}

MessSage();


let userInfo:{name:string,age:number,'likesw':boolean} = {
    name:"vasya",
    age: 30,
    "likesw":true,
};

let key:string = 'name';




let userid:{name:string,age:number,adress:{city:string,streat:string}}= {
    name:'vasya',
    age:33,
    adress:{
        city:'lviv',
        streat:"central",
    }

};


function makeUserId(name:string,age:number){
    return{
        name:name,
        age:age,
    };
}
let user=makeUserId('Vasya',44)

let userAdd:{name?:string,age?:number,adress?:{city:string,streat:string}}={
    name:"ihor",
};


userAdd.age=44;


userAdd.adress = {
    city:'dfwsd',
    streat:"dsfds",
}
var userid = {
    name: 'vasya',
    age: 33,
    adress: {
        city: 'lviv',
        streat: "central"
    },
    showinfo: function () {
        console.log((this.name), (this.age), 'містою ', (this.adress));
    }
};
userid.showinfo();
*/