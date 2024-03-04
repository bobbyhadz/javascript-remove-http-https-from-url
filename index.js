// EXAMPLE 1 - Remove 'http://' or 'https://' from a URL in JavaScript

function removeHttp(url) {
  return url.replace(/^https?:\/\//, '');
}

// 👇️ "bobbyhadz.com"
console.log(removeHttp('https://bobbyhadz.com'));

// 👇️ "bobbyhadz.com"
console.log(removeHttp('http://bobbyhadz.com'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove 'http://' or 'https://' from a URL using startsWith

// function removeHttp(url) {
//   if (url.startsWith('https://')) {
//     const https = 'https://';
//     return url.slice(https.length);
//   }

//   if (url.startsWith('http://')) {
//     const http = 'http://';
//     return url.slice(http.length);
//   }

//   return url;
// }

// // 👇️ "bobbyhadz.com/books"
// console.log(removeHttp('https://bobbyhadz.com/books'));

// // 👇️ "bobbyhadz.com"
// console.log(removeHttp('http://bobbyhadz.com'));
