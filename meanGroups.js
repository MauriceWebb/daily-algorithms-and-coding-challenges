function meanGroups(a) {
    let memo = {},
        set = new Set()

    for (let i in a) { // *a
        const subA = a[i]
        const median = subA.reduce((total, num) => total += num, 0) / subA.length // *b

        if (median in memo) memo[median].push(i)
        else memo[median] = [i]

        set.add(median)
    }

    console.log(set)
    return Array.from(set).map(m => memo[m]) // *c
}

// TIME COMPLEXITY: O(a*b*c)
// SPACE COMPLEXITY: O(n + ab)

console.log(meanGroups([
    [3, 3, 4, 2],
    [4, 4],
    [4, 0, 3, 3],
    [2, 3],
    [3, 3, 3]
]))

console.log(meanGroups([
    [-5, 2, 3],
    [0, 0],
    [0],
    [-100, 100]
]))

console.log(meanGroups([
    [1],
    [-2, 3],
    [0],
    [0, -1, -1, -5, 4, -4, 7, 0, 0, 0, 0],
    [8]
]))
