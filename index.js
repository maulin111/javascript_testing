       // declare variable using let keyword
       let name1 = 'Max';
       console.log(name1);

       //cannot be a reserved keyword
       //should be meaningful
       //cannot start with number
       //cannot contains a space or hypen
       //Are case-sensitive

      // declare constant value using const keyword
       const interestRate = 0.3
      //    interestRate = 1
       console.log(interestRate)

       let name = 'Maulin Desai';
       let age = 30;
       let isApproved = false;
       let firstName = undefined;
    //    let selectedColor = null;

       let person = {
        name: 'Maulin Desai',
        age: 30
       };

       //Dot Notation
       person.name = 'Max Desai';

       //Bracket Notation
       let selection = 'name';
       person[selection]='Mary';

       console.log(person[selection])

       //how to declare and access Arrays
       let selectedColor = ['red','blue'];
       selectedColor[2] = 'green';
       console.log(selectedColor);

       //how to declare function and access the arguments - Performing a task
       function greet(name, lastName){
        console.log('Hello ' +name + " " +lastName);     
       }
       greet('john','smith');

       //function calculate value
       function calculate(a,b) {
           return a + b;
       }
       let result = calculate(13,12);
       console.log(result);

       //Arithmetic operators
       let x = 4;
       let y = 4;

       console.log(x + y);
       console.log(x - y);
       console.log(x * y);
       console.log(x / y);
       console.log(x % y)
       console.log(x ** y);
       console.log(x++);
       console.log(x);
       console.log(--x);

       //Ternary operators
       let points = 110;
       let type = points > 100 ? 'Gold' : 'silver';
       console.log(type)
       

       let a = 'red';
       let b = 'blue';

    // using third variable
    //    let temp;
    //    temp = a;
    //    a = b;
    //    b = temp;

    // //using destructructing assignment 
    //     [a,b] = [b,a];

       console.log(a);
       console.log(b);

       let address = {
         street: 'a',
         city: 'b',
         zipcode: 'c'
       };

       function showAddress(address){
         for (let key in address)
         console.log(key, address[key])
       }

       showAddress(address);

