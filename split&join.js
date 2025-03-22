//split function
const sentence = "Vaibhavi Kapile";
const words = sentence.split(" "); 
console.log(words);


//join function
const joinedSentence = words.join(", "); 
console.log(joinedSentence); 

//split reverse and join function
const str = 'Full stack developer with GenAI';
const reversedStr = str.split('').reverse().join('');
console.log(reversedStr);
