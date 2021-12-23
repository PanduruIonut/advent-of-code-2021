let horizontal = 0;
let vertical = 0;
for (let i = 0; i < elements.length; i++) {
    const { groups: { instruction, value } } = /(?<instruction>\w+) (?<value>\d)/.exec(elements[i]);
    switch (instruction) {
        case 'forward':
            horizontal += parseInt(value);
            break;
        case 'up':
            vertical -= parseInt(value);
            break;
        case 'down':
            vertical += parseInt(value);
            break;

        default:
            break;
    }
}

console.log('Result: ', horizontal * vertical);