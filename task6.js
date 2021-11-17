class FastDataStructure {
  #data = []; // Here we'll store initial elements
  #hashmap = {}; // A hashmap that maps indices to elements

  constructor(data) {
    this.#data = data; // Initialize the array
  }

  #calcSize() {
    return this.#data.length; // Private method to return current length of the array.
  }

  myPush(element) {
    this.#data.push(element); // Save element in the array
    this.#hashmap[this.#calcSize() - 1] = element; // Map the index for that element
  }

  getAll() {
    return this.#data;
  }

  //Swap the last element with the element designated for deletion, then pop the designated element.
  myPop(idx) {
    const lastIdx = this.#calcSize() - 1;
    let temp = this.#data[lastIdx];
    this.#data[idx] = temp;
    this.#data[lastIdx] = this.#hashmap[idx];

    return this.#data.pop();
  }
}

let someArray = ["bruh", 15, "A", 36];
let myDS = new FastDataStructure(someArray);

console.log(myDS.getAll());

myDS.myPush("HELLO");
console.log(myDS.getAll());

myDS.myPop(2);
console.log(myDS.getAll());

console.log("\nTrying for larger dataset.\n");
someArray = [];
for (let i = 0; i < Math.floor(Math.random() * 10000000 + 1); ++i) {
  someArray.push(i);
}

console.log(
  "\nLarger dataset generated, re-invoking DS methods in 3 seconds...\n"
);
setTimeout(() => {
  console.log("------STARTING-------");
  let myDS2 = new FastDataStructure(someArray);

  console.log(myDS2.getAll());

  myDS2.myPush("HELLO");
  console.log(myDS2.getAll());

  myDS2.myPop(2);
  console.log(myDS2.getAll());
}, 3000);
