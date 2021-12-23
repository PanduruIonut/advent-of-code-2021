let threeMeasurementCount = 0;

for (let i = 2; i <= numbers.length - 2; i++) {
    const currentSum = numbers[i-2] + numbers[i - 1] + numbers[i];
    const nextSum = numbers[i-1] + numbers[i] + numbers[i + 1];
    if (nextSum > currentSum) threeMeasurementCount++;
}

console.log('Result: ', threeMeasurementCount);
