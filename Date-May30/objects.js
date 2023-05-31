let user = {
    name:'Tony',
    age:80,
    superType:'Ironman',
    speciality:'money',
    power:'Ironsute',
    home:'Stark Tower',
};

for (const key in user) {
    // console.log(user[key]);
    // console.log(user.key);   //undefine
    // console.log(key);
}

// console.log(user.name);
// console.log(user.home);

let clone = {};

//Cloning and merging, object

// for(const key in user){
//     clone[key] = user[key];
// }
// clone.name = 'Thor';

// console.log(user);
// console.log(clone);

Object.assign(clone,user);
console.log(clone);