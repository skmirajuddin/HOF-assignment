const regex = /^https?:\/\/[\w\d\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

const url1 = "https://www.google.com";
const url2 = "http://example.com/path/to/resource.html";
const url3 = "https://example.org/?q=regex#frag";
const url4 = "ftp://example.com";

console.log(regex.test(url1)); 
console.log(regex.test(url2)); 
console.log(regex.test(url3)); 
console.log(regex.test(url4)); 
