let horizontal2 = 0;
let vertical2 = 0;
let aim = 0;

for (let i = 0; i < elements.length; i++) {
    const { groups: { instruction, value } } = /(?<instruction>\w+) (?<value>\d)/.exec(elements[i]);
    switch (instruction) {
        case 'forward':
            horizontal2 += parseInt(value);
            vertical2 += aim * parseInt(value);
            break;
        case 'up':
            aim -= parseInt(value);
            break;
        case 'down':
            aim += parseInt(value);
            break;

        default:
            break;
    }
}

console.log('Result: ', horizontal2 * vertical2);