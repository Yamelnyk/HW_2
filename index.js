'use strict';
// задача 1

function addThemAll (...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    };

    return sum;
}

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));

// задача 2

function multiply(a) {
  return function (b) {
    return a*b;
  }
}

console.log(multiply(5)(5))		
console.log(multiply(2)(-2))	       
console.log(multiply(4)(3))

// задача 3

const movies = [
  {
  movieName: 'The Thing',
  releaseYear: 1982,
  directedBy: 'Carpenter',
  runningTimeInMinutes: 109,
  },
  {
  movieName: 'Aliens',
  releaseYear: 1986,
  directedBy: 'Cameron',
  runningTimeInMinutes: 137,
  },
  {
  movieName: 'Men in Black',
  releaseYear: 1997,
  directedBy: 'Sonnenfeld',
  runningTimeInMinutes: 98,
  },
  {
  movieName: 'Predator',
  releaseYear: 1987,
  directedBy: 'McTiernan',
  runningTimeInMinutes: 107,
  },
  ];
  
 
  function byProperty(property, direction) {
    return (a,b) => {
        if (direction === '>'){
            return a[property] > b[property] ? 1 : -1;
        }
        else {
            return a[property] < b[property] ? 1 : -1
        }
    };
}

 console.log(movies.sort(byProperty('releaseYear', '>'))); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
  console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
  console.log(movies.sort(byProperty('movieName', '>'))); // виведе масив фільмів посортованих по назві, в алфавітному порядку*


  //  задача 4

  function detonatorTimer(delay) {
    let current = delay;
    setTimeout(function go() {
     
      if (current !== 0) {
        console.log(current);
        setTimeout(go, 1000);
      }
     if (current == 0) {
        console.log("BOOM!")
      };
      current--;
    }, 1000);
  }
  console.log(detonatorTimer(3))

  
// ***************

function detonatorTimer(delay) {
let current = delay;

let timerId = setInterval(function(){
  if (current !== 0) {
  console.log(current);
}
  if (current == 0) {
        console.log("BOOM!");  
    clearInterval(timerId);
  }
  current--;
}, 1000);
}

console.log(detonatorTimer(3))



// задача 5

let me = {
  name: 'Yana',
  'last name': 'Melnyk',
  residency: 'Ukraine',
  age: 32,
  hobby: 'communicate',

  introduce() {
  console.log(`My name is ${this.name} ${this["last name"]}`);
  },
  describeMyself() {
    console.log(`I like ${this.hobby} with different people`);
    },
  home(){
  console.log(`My home is ${this.residency}`);
  }
  }
  
  me.introduce();
  me.describeMyself();
  me.home();


  // задача 6

  let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfDescribeMyself = me.describeMyself.bind(me);
let securedSelfHome = me.home.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfDescribeMyself, 2000);
setTimeout(securedSelfHome, 3000);


// задача 7

   function someFunction() {
    console.log('Hello');
    } 

  function slower(func, seconds) {
    return function() {
      setTimeout(func, 5000);
      }
  }

let slowedSomeFunction = slower(someFunction, 5000); // обгортаєте свою довільну функцію 'someFunction' в декоратор*

console.log(slowedSomeFunction())


