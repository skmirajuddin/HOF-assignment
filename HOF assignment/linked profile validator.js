const regex = /^https?:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

const profileUrl1 = "https://www.linkedin.com/in/john-doe-123abc";
const profileUrl2 = "https://www.linkedin.com/in/jane_doe_456";
const profileUrl3 = "https://www.linkedin.com/in/jim.brown";
const profileUrl4 = "https://www.linkedin.com/in/samantha_long_long_long_long_long_long_long";

console.log(regex.test(profileUrl1)); 
console.log(regex.test(profileUrl2)); 
console.log(regex.test(profileUrl3)); 
console.log(regex.test(profileUrl4)); 
