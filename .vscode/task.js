// let students = ['Alice', 'Charlie', 'Bob', 'David', 'Eve', 'Frank'];
// let filtersed = students.filter(strartFunc);
 
// function strartFunc (students){
//     return students[0] === "A";

// };

// console.log(filtersed);
// // console.log(students);


// let sorted = students.sort();
// // console.log(students);

// let sliced = students.slice(0,3);
// console.log(sliced);


// let reversed = sliced.reverse();
// console.log(reversed);


// let a = ["nadeem", "zaid"];

// let concateted = reversed.concat(a);
// console.log(concateted);


// let filled = students.fill("Incomplete" , 2,5);
// console.log(filled);


// https://docs.google.com/document/d/1RZeoiwGbYk3jD-BZfqOrlGiFLpEbGL7xYQqu_C7UZ9Y/edit?tab=t.0#heading=h.pwvw5338oefa
// Aisha Imtiyaz
// 4:15 PM
// https://docs.google.com/document/d/1RZeoiwGbYk3jD-BZfqOrlGiFLpEbGL7xYQqu_C7UZ9Y/edit?tab=t.0













// Here's a JavaScript program that manages a to-do list using recursion, a stack, and implements the requested features:


// Task class
class Task {
  constructor(taskName, isCompleted, dueDate) {
    this.taskName = taskName;
    this.isCompleted = isCompleted;
    this.dueDate = dueDate;
    this.password = this.generatePassword();
  }

  generatePassword() {
    // Generate a strong password
    const randomNum = Math.floor(Math.random() * 1000);
    return this.taskName.slice(0, 3) + randomNum.toString().padStart(3, '0');
  }
}

// Stack class
class Stack {
  constructor() {
    this.items = [];
  }

  // Add task to stack
  push(task) {
    this.items.push(task);
  }

  // Remove most recent task
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  // View current task
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  // Check if stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Initialize stack and tasks
const stack = new Stack();
const tasks = [
  { taskName: 'Complete JavaScript assignment', isCompleted: false, dueDate: '2024-10-22' },
  { taskName: 'Prepare for ReactJS lecture', isCompleted: true, dueDate: '2024-10-21' },
  { taskName: 'Revise CSS concepts', isCompleted: false, dueDate: '2024-10-25' },
  { taskName: 'Submit project proposal', isCompleted: false, dueDate: '2024-10-26' },
  { taskName: 'Fix bugs in the to-do list app', isCompleted: true, dueDate: '2024-10-20' },
];

// Create Task objects and push to stack
tasks.forEach((task) => {
  const newTask = new Task(task.taskName, task.isCompleted, task.dueDate);
  stack.push(newTask);
});

// Age calculator function
function calculateAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

// Head recursion to print tasks
function printTasks(tasks, index = 0) {
  if (index >= tasks.length) {
    return;
  }
  console.log(`Task ${index + 1}: ${tasks[index].taskName}`);
  printTasks(tasks, index + 1);
}

// Tail recursion to reverse tasks
function reverseTasks(tasks, reversed = []) {
  if (tasks.length === 0) {
    return reversed;
  }
  reversed.push(tasks.pop());
  return reverseTasks(tasks, reversed);
}

// Print tasks using head recursion
console.log('Tasks:');
printTasks(stack.items);

// Reverse tasks using tail recursion
const reversedTasks = reverseTasks([...stack.items]);
console.log('\nReversed Tasks:');
reversedTasks.forEach((task, index) => {
  console.log(`Task ${index + 1}: ${task.taskName}`);
});

// Add new task
const newTask = new Task('Implement stack operations', false, '2024-10-28');
stack.push(newTask);
console.log('\nAdded new task:');
console.log(`Task: ${newTask.taskName}`);

// Remove most recent task
const removedTask = stack.pop();
console.log('\nRemoved task:');
console.log(`Task: ${removedTask.taskName}`);

// View current task
const currentTask = stack.peek();
console.log('\nCurrent task:');
console.log(`Task: ${currentTask.taskName}`);

// Calculate age
const yearOfBirth = 1995;
console.log(`\nAge: ${calculateAge(yearOfBirth)}`);



// This program defines a Task class to represent individual tasks, a Stack class to manage tasks, and implements the requested features.

// Key Features:

// - Task class with properties for task name, completion status, due date, and password
// - Stack class with methods for adding, removing, and viewing tasks
// - Head recursion to print tasks
// - Tail recursion to reverse tasks
// - Age calculator function
// - Password generation for each task

// Output:


// Tasks:
// Task 1: Complete JavaScript assignment
// Task 2: Prepare for ReactJS lecture
// Task 3: Revise CSS concepts
// Task 4: Submit project proposal
// Task 5: Fix bugs in the to-do list app

// Reversed Tasks:
// Task 1: Fix bugs in the to-do list app
// Task 2: Submit project proposal
// Task 3: Revise CSS concepts
// Task 4: Prepare for ReactJS lecture
// Task 5: Complete JavaScript assignment

// Added new task:
// Task: Implement
