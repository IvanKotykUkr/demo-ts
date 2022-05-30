enum x{
    inst ='jdcsnofndsjo',
    vk = 'sakdmkasmnd',
    fcb = 'dsfdsf'

}

const createPasword = (name:string, age:number|string) => '$(name)$(age)';
type Person = { name: string, age: number, nickName?: string, getPass?:number };

let user : Person={
    name: 'misha',
    age: 22,
    nickName: 'fghvhgnvghj',
};
let admin : Person={
    name: 'misha',
    age: 22,
    getPass: 324234,
};
let castomer : Person={
    name: 'misha',
    age: 22,
    nickName: 'fghvhgnvghj',
};

class User{


    constructor(
        public name: string,
        public age: number,
        public nickName : string,
    ) {
    }
}

const ihor = new User('ihor',44,'csvs');


console.log(ihor)
