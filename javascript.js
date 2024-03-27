
        function add7(num) {
             return num + 7
        }

        console.log(add7(1));

        function multiply(num) {
            return num * 2
        }

        console.log(multiply(4))

        function capitalize(string) {
           return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        }

        console.log(capitalize("upppppperCCase"))
        
        function lastletter(str) {
            return str.charAt(str.length - 1);
        }

            console.log(lastletter("upper"))

// Start of TOP - Understanding Errors //

        // const a = "Hello";
       // const b = "World";

        console.log(c);

// 2nd 

        const a = 5;
        const b = 10;

        function add() {
            return c;
        }

        function print() {
            add();
        }

        print();

// 3rd

 //       function helloWorld() {
 //           console.log "Hello World";
 //       }

// 4th

        const str1 = "Hello";
        const str2 = "World!";
        const message = str1.push(str2);