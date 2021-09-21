function countPrimeNumbers () {
let total = 0;

    for (let counter = 0; counter <= 100; counter++) {
        let notPrime = false;
        for (let i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            total += 1;
        }
    }

    return total;
}

const startTime = window.performance.now();
countPrimeNumbers();
const endTime = window.performance.now();
console.log('Execution time of printing countPrimeNumbers was ' + (endTime - startTime) + ' milliseconds.');
