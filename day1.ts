const pre = document.getElementsByTagName('pre')[0];
const elements = pre.textContent.split('\n');

// remove empty string from end
elements.pop();

const numbers = elements.map(item => parseInt(item, 10));

let count = 0;

for (let i = 0; i <= numbers.length - 2; i++) {
    if (elements[i+1] > elements[i]) count++;
}

console.log('Result: ', count);
