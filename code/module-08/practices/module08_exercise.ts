namespace AllGreetings {
  export namespace Greetings {
    export function returnGreeting(greeting: string): void {
      console.log(`The message from namespace Greeting is ${greeting}`);
    }
  }
  export namespace GreetingsWithLength {
    export function returnGreeting(greeting: string): void {
      let greetingLength: number = getLength(greeting);
      console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
      return message.length
    }
  }
}

// returnGreeting('Hello');                                  // Returns error
// Greetings.returnGreeting('Hello');                        // Returns error
// AllGreetings.Greetings.returnGreeting('Bonjour');         // OK
// AllGreetings.GreetingsWithLength.returnGreeting('Hola');  // OK

import greet = AllGreetings.Greetings;
greet.returnGreeting('Bonjour');