// // // // // // sets to anything
// // // // // // function square(num) {
// // // // // //   return num * num;
// // // // // // }


// // // // // // const encourageSt = (name: string) => {
// // // // // //   return `Hi, ${name}`;
// // // // // // }
// // // // // // encourageSt('vee')

// // // // // // function greet(person: string) {
// // // // // //   return `Hi, ${person}`;
// // // // // // }
// // // // // // greet('Gee');




// // // // // // function square(num: number) {
// // // // // //   // num.toUpperCase();
// // // // // //   // num();
// // // // // //   return num * num;
// // // // // // }

// // // // // // square(3);
// // // // // // // square('asd');
// // // // // // // square(true);



// // // // // // const doSmthn = (person: string, age: number, funny: boolean) => {};//

// // // // // // doSmthn('hi', 13, false);


// // // // // //      Setting defalt values in params
// // // // // function greet(person: string = 'vee') {
// // // // //   return `Hi, ${person}`
// // // // // }
// // // // // greet();
// // // // // greet('gee');






// // // // //=========================================================
// // // // //==========================================================

// // // // // Function return types
// // // // // we can specify the type returned by a func. Even though TS can oftern infer this
// // // // // Add the type annotation after the func para list
// // // // // basically its for the return like its suppose to return a number (x:num):num <-this

// // // // // creating a function with return type ():number <-this
// // // // const addNums = (x: number, y: number): number => {
// // // //   return x + y;
// // // // };
// // // // addNums(5, 5);

// // // // const rando = (num: number) => {
// // // //   if (Math.random() < 0.5) {
// // // //     return num.toString();
// // // //   }
// // // //   return num;
// // // // }

// // // // const add = (x: number, y: number): number => {
// // // //   return x + y;
// // // // }










// // // //===============================================================
// // // //===============================================================
// // // //       Anon Func
// // // // When TS can infer how can unamed func is going to be called
// // // // it can auto iner its params types

// // // // const numbers = [1, 2, 3];
// // // // // contextual typing on an arrow func
// // // // numbers.forEach(num => {
// // // //   return num.toUppercase(); //Error!
// // // //   // .toUpperCase() dosn work for numbers
// // // // })


// // // const colors = ['r', 'g', 'b'];
// // // // adds num in methods loops
// // // colors.map(color => {
// // //   // return color;
// // // })









// // //=========================================================
// // //=========================================================

// // //             VOID
// // // void is a return type func that dont return anything.
// // // TS can infer this type fairly well but sometimes
// // // it may want you to annotate a func with a void return

// // // a func that does return anything
// // // const annoy = (num: number): void => {
// // //   for (let i = 0; i < num; i++) {
// // //     alert('Hiiiiii');
// // //   }
// // // }

// // // this func isnt suppose to return anything so VOID
// // function printTwice(msg: string): void {
// //   console.log(msg);
// //   console.log(msg);
// // }










// //=============================================================
// //=============================================================
// //       NEVER
// // The never type rep values that NEVER occur, we might use it
// // to annotate a func that always throws an exception or a
// // function that never finishes executing

// // Dont confuse with void - void returns undefined or null, which is techn still
// // a type of value, with NEVER a func doesnt finish executing.

// // A function that doesnt finish running
// // const neverStop = ():never => {
// //   while(true){
// //     console.log('im still going!');

// //   }
// // }

// // A function that throws an execption
// // const giveError = (msg: string) => {
// //   throw new Error(msg)
// // }

// function makeError(msg: string): never {
//   // return (msg) <- cant do that because it should never return anything
//   throw new Error(msg);
// }
// function gameLoop():never {
//   while(true){
//     console.log('game still running never return');
    
//   }
// }












