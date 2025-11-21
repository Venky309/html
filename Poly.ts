class Animal {
  makeSound(): void {
    console.log('Some generic animal sound');
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof woof!');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow!');
  }
}

const animals: Animal[] = [new Animal(), new Dog(), new Cat()];
animals.forEach(animal => animal.makeSound());
