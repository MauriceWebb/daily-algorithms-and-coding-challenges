function mostFrequentDigits(a) {
    const digits = Array(10).fill(0) // t += 10, s += 1
    let mostF = null // t += 1, s += 1
    const nums = a.reduce((str, num) => str += num, "") // t += 1n, s += 1

    for (let char of nums) { // t += 1n
        digits[char] += 1
        if (!mostF || digits[char] > mostF) mostF = digits[char]
    }

    return digits.reduce((d, n, i) => { // t += 10, 
        if (n === mostF) d.push(i)
        return d
    }, [])
}

// TIME COMPLEXITY: O(10 + 1n + 1n + 10) –> O(20 + 2n) –> O(2n) => O(n)
// SPACE COMPLEXITY: O(1 + 1 + 1) –> O(3) –> O(1)

console.log(mostFrequentDigits([25, 2, 3, 57, 38, 41]))