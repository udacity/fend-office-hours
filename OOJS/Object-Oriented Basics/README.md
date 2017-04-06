# Object Oriented Topics in JavaScript

Link to office hours: [Office hours link](https://plus.google.com/events/cvrejvitte5a37k1vfli1veler8?authkey=CIistZK2pbbqYA)

1. Objects in JS and Encapsulation
2. `this` in JavaScript
3. Prototypal chains
4. Object decoration
5. Functional Classes
6. Prototypal classes
7. Pseudoclassical Classes

## Objects in JS and Encapsulation

Functions in JS can be encapsulated inside objects (objects are collections of information), in which case they become properties of these objects.

 ```js
//Creating an object
var bio = {
    "name": "John Doe",
    "role": "Front End Developer"
};

//Encapsulating a function
bio.printToLog = function printToLog() {
    console.log(bio.name);
};

//Calling the function
bio.printToLog();
```

But there’s a lot more that you can do than just defining individual objects and then adding functions to them. You can make classes that will create objects for you, and you can have methods encapsulated in these classes as well.

## The `this` Keyword

A special keyword that can be used inside functions. When these functions are called from within an object, the `this` keyword normally refers to these objects.

 ```js
// Define two objects
var obj1 = {
    "name": "John"
};

var obj2 = {
    "name": "Jane"
};


//Define a function in the global scope, and use this inside the function:

var printName = function() {
    console.log(this.name);
};

//Add reference to this function in obj1 and in obj2
obj1.my_method = printName;
obj2.my_method = printName;

//Call the function from within obj1 and obj2
obj1.my_method(); //logs "John", because this gets bound to “obj1”
obj2.my_method(); //logs "Jane”, because this gets bound to “obj2”
```

**Can we override what `this` refers to? Yes!**
We can use `call` when calling our function (`functionName.call()`) and specify in the first parameter what we want `this` to be bound to.

## Prototypal Chains (Can I Borrow Some of your Properties?)
Allows to reuse objects we already have. Allows for an object to "get" some of its properties from another object. The properties are not copied onto the new object we create that way, but instead we tell JS to look for properties not found in the new object in the old one.

 ```js
var person = {
    "p_name": "John"
};

//Create a new object, student, by “reusing” person.
var student = Object.create(person);

//Add some new properties to student (person remains unchanged)
student.school = "UPenn";
console.log(student.school); //will log “UPenn”
```

When we refer to a property that is defined and passed on from `person` to `student`, since that property is not found in `student`, we go up the chain and see if it’s found on `person`. If we find it in `person` then that’s the value we go for.

```js
console.log(student.p_name); //will log “John”
```

When we look for `p_name`, on `student`, since we can’t find `p_name` on `student` we go up the chain and look for it in `person`, and since we find it there, and it’s set to "John", that’s what will be printed out in the log.

Note that if we change person, we change student as well.

All JS objects delegate to the Object Prototype

## Object Decoration Pattern
This is another way to re-use a pre-existing object, this time by directly adding properties to it. This is different from prototypal chains because it modifies the original object, rather than creating a new one.

```js
//this is an object decorator function as it adds properties to a person to make it into
//a student object
var studentlike = function(person, school) {
    person.school = school;
    return person;
};

var mary = studentlike({"p_name": "Mary"}, "UCLA");
console.log(mary.school); //Logs “UCLA”
console.log(mary.p_name); //Logs “Mary”
```

## Functional Classes
These really are just functions, and are very similar to Object Decorators, except that instead of receiving the object as an input, they create it. The function that creates the objects is called the constructor function

```js
//Let's define a new function on the global scope first
var printGreeting = function(greeting) {
    console.log(greeting + " " + this.name );
};

//Define a class named Human
var Human = function (a_name) {
    var human = {name: a_name};
    human.printGreeting = printGreeting;
    return human;
};

//make an instance of the Human class
var david = Human("David");

david.printGreeting("Good afternoon"); //logs “Good afternoon David”
```

**Class Methods**
One disadvantage of the above way of defining a class method is that we had to refer to a function in the global scope: perhaps we would not want to have to define this function on the global scope (if for example we want the method to only be available from within instances of our class).

What we can do is instead define our `printGreeting` inside the Human class: that way it will only be accessible from within this class.

```js
var Human2 = function (a_name) {
    var human = {name: a_name};
    human.printGreeting2 = function(greeting) {
        console.log(greeting + " " + this.name );
    };
    return human;
};
```

A disadvantage of this definition is that now a new instance of the `printGreeting2` will be created for every new instance of the `Human2` class. If we create a lot of instances of `Human2`, then we also create a lot of copies of the `printGreeting2` method. What we would really like is to have the `printGreeting2` method somehow only in the scope of the `Human2` class, but we don’t want to create a new such function for every instance of this class. That’s where *Prototypal Classes* come in.

## Prototypal Classes (Have your cake and eat it)
We can use the prototype object (an object that JS creates for us and attaches to each function) to store all the methods we would like associated with our class. For this to work we need to delegate all failed look-ups to our class.prototype using `Object.create()`:

```js
var Human3 = function (a_name) {
    //delegate failed lookups of Human3 objects to Human3.prototype
    var human = Object.create(Human3.prototype);
    human.name = a_name;
    return human;
};

//Define printGreeting3 under Human3.prototype
Human3.prototype.printGreeting3 = function(greeting) {
    console.log(greeting + " " + this.name );
};
```

That way we have only one instance of the `printGreeting3` method associated with the class, it is stored under ClassName.prototype, and it’s accessible to all instances of the class.

## The `new` Keyword (Pseudo Classical Classes)
Pseudo classical classes are just a convenient way for us to make JavaScript classes resemble classes on other languages (and hence the name “Pseudo Classical”). You can think of this as a “nice wrapper”.

If you’ve coded in another object oriented language (Java or C++) you might notice that JS classes look a little different, as unlike in other languages we need to create our objects in the class function and also return them. We can make JS classes look like classes in other languages, by using the `new` keyword:

```js
//In constructor mode JS automatically does the first and third line for us, so we
//can comment them out
var Human4 = function (a_name) {
    //var human = Object.create(Human4.prototype);
    this.name = a_name;
    //return human;
};

Human4.prototype.printGreeting = function(greeting) {
    console.log(greeting + " " + this.name );
};

//Importantly we need to use "new" keyword when creating new objects
//When we do that the interpreter adds the two lines we commented out

var mike = new Human4("Mike");
```
