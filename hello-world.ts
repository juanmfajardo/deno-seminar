const capitalize = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
  
const hello = (name: string): string => {
    return "Hello " + capitalize(name);
}
  
console.log(hello("juanma"));
