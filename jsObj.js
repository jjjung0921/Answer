const horse = {
    name: "적토마",
    age: 3,
    rider: null
};

const person = {
    name: "아기사자",
    age: 13
};

horse.rider = person;
horse.introduction = function (){
    console.log("Hello my name is " + this.name + ". I'm " + this.age + " years old");
}
horse.introduction();

person.introduction = function (){
    console.log("Hello my name is " + this.name + ". I'm " + this.age + " years old");
}
horse.rider.introduction();