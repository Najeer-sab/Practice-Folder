// const arr=[2,4,2,6,78,5,42,2,4]
// const res=arr.filter((value,index)=>arr.indexOf(value)!==index)
// console.log(res)


// let st="hello nazeer"
// let str=st.split(" ")

// function hello(){
//     return str[str.length-1].length
// }
// console.log(hello())



// let  arr=[2,4,5,6]
// const result=arr.map((a)=>a*2)
// console.log(result)


// let arr=[
//     {
// name:"najeer",
// age:24
// },
//     {
// name:"vazeer",
// age:22
// },
//     {
// name:"farooq",
// age:17
// },
//     {
// name:"asphak",
// age:23
// },
// ]

// const res=arr.filter((a)=> a.age>18).map((el)=>el.name)
// console.log(res)




// str="hello world" o/p "Dleow Olleh"
// function reverse_string(str){
//         let new_str=str.split(" ")


//         // for(let i= str.length-1;i>=0;i--){
//         // new_str+=str[i]    
//         // }
//         return new_str
        
//     }
// console.log(reverse_string("hello world"))




//name in ascending 

const persons = [
    {id:101, name:'zbc', location:'hyderabad'},
    {id:102, name:'dbc', location:'chennai'},
    {id:103, name:'fbc', location:'bangalore'},
    {id:104, name:'hbc', location:'ahmadabad'},
    {id:105, name:'ibc', location:'delhi'},
    {id:106, name:'jbc', location:'Noida'},
];

persons.sort((a, b) => a.name.localeCompare(b.name));
// persons.sort((a, b) => b.name.localeCompare(a.name));   decending 

console.log(persons);


// const sortedNames = persons
//   .map(person => person.name)
//   .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// console.log(sortedNames);




// Input Sample1: data= [2, 4, 6, 2, 5], since we pick 2, 6, and 5

// output: 13


const data = [2, 4, 6, 2, 5];

// Sum every alternate element starting from the first one
const sum = data.filter((_, index) => index % 2 === 0).reduce((acc, value) => acc + value, 0);

console.log(sum); // Output: 13


// Input Sample2: data= [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Output; 10
// const data = [5, 1, 1, 5];

// // Sum occurrences of the value 5
// const sum = data.filter(value => value === 5).reduce((acc, value) => acc + value, 0);

// console.log(sum); // Output: 10




// Scenario based question 2:
//           dictionary [ ]= {“abc”, “abcd”, “cbe”, “jkkk”, “rtyu”};

//           query [ ]= {“abc”, “ced”, “hfg4er”};
// const dictionary = ["abc", "abcd", "cbe", "jkkk", "rtyu"];
// const query = ["abc", "ced", "hfg4er"];

// const results = query.map(queryStrzxdcfv  => {
//     // Check if query string is a substring of any dictionary string
//     const isSubstring = dictionary.some(dictStr => dictStr.includes(queryStr));
//     return isSubstring;
// });

// console.log(results);






// Scenario : Use the exi cocept: 
// Input :

//  {"abc","abcd","cba","acb","cde","jkkk","rtyu"}

//  {"abc","ced","hfg4er"}

//  Output :

//  abc:3

// ced:1

// hfg4er:0

const dictionary = ["abc", "abcd", "cba", "acb", "cde", "jkkk", "rtyu"];
const query = ["abc", "ced", "hfg4er"];

const results = query.reduce((acc, queryStr) => {
    // Count occurrences of the query string as a substring
    const count = dictionary.reduce((subCount, dictStr) => (dictStr.includes(queryStr) ? subCount + 1 : subCount), 0);
    acc[queryStr] = count;
    return acc;
}, {});

console.log(results);


let num=123456
let str= num.toString()
let rev_str=str.split("").reverse().join("")
let result=parseInt(rev_str)
console.log(result)



function rev_num(num){
    let str= num.toString()
    return rev_str=parseInt(str.split("").reverse().join(""))

    

}
console.log(rev_num(12345))









function countOccurrences(str) {
    const occurrences = {};
    for (let char of str) {
      occurrences[char] = (occurrences[char] || 0) + 1;
    }
    return occurrences;
  }
  console.log(countOccurrences("hello")); 












