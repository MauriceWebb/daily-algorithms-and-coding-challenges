function boundedRatio(a, l, r) {
    return a.map((num, i) => { // t += 1n, s += 2
        const y = i + 1
        const x = num / y
        return x % 1 === 0 && x >= l && x <= r
    })
}

// TIME COMPLEXITY: O(1n) => O(n)
// SPACE COMPLEXITY: O(2) => O(1)

console.log(boundedRatio([8, 5, 6, 16, 5], 1, 3))