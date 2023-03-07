alert(`Welcome to Anny's Telephone Package`);

// CREATE A TELEPHONE CLASS EXPOSING THREE METHODS
class telephone {
  constructor() {
    this.observers = [];
    this.phoneNumber = [];
  }

  addPhoneNumber(number) {
    this.phoneNumber.push(number);
  }

  removePhoneNumber(number) {
    this.phoneNumber.delete(number);
  }

  dialPhoneNumber(number) {
    if (this.phoneNumber.includes(number)) {
      this.notifyObservers(number);
    }
  }

  // UPDATE USING THE OBSERVER PATTERN
  add(observer) {
    this.observers.push(observer);
  }
  remove(observer) {
    this.observers.delete(observer);
  }
  notifyObservers(number) {
    for (const observer of this.observers) {
      observer.update(number);
    }
  }
}

// CREATE A CLASS FOR THE OBSERVER, WITH A METHOD THAT CAN CALL THE TELEPHONE CLASS TO NOTIFY IT.
class Observer {
  update(number) {
    console.log(`Now Dialing ${number}`);
  }
}

// HAVE THE TELEPHONE CLASS NOTIFY THE OBSERVERS ANY TIME A NUMBER IS DIALED
// CREATE A CLASS FOR THE OBSERVER, WITH A METHOD THAT CAN CALL THE TELEPHONE CLASS TO NOTIFY IT.
// ADD TWO OBSERVERS TO THE TELEPHONE CLASS
const number = new telephone();
const observer = new Observer();
const observer1 = new Observer();

while (true) {
  let action = prompt(
    `Would you like to "ADD, REMOVE, OR DIAL" a phone number?`
  ).toLowerCase();
  if (action === `add`) {
    let add = prompt(`Enter a phone number`);
    alert(`Succefully added "${add}"`);
  } else if (action === `remove`) {
    let remove = prompt(`Input digits`);
    alert(`Successfully deleted "${remove}"`);
  } else if (action === `dial`) {
    let dial = prompt(`Enter phone number`);
    alert(`Request successfull`);
    alert(`Now Dialing "${dial}"`);
    console.log(`have a nice chat!`);
  } else {
    console.log("Invalid action.");
  }
}
