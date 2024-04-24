console.log('Start');

setTimeout(() => {
  console.log('setTimeout Callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise1 Resolved');
}).then(() => {
  console.log('Promise2 Resolved');
});

console.log('End');


//Execution order of Timeout and Promise functions(Main Tasks and Micro Tasks)
