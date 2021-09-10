function hashMap(queryType, query) {
    const toNum = n => +n // t += O(1), s += O(1)
    let hash = {} // s += O(1)
    let sum = 0 // s += O(1)
    let fns = { // s += O(1)
        insert: ([x, y]) => { // t += O(1)
            hash[toNum(x)] = toNum(y)
        },
        get: (x) => { // t += O(1)
            if (toNum(x) in hash) {
                sum += toNum(hash[toNum(x)])
            }
            return toNum(hash[toNum(x)])
        },
        addToKey: (x) => { // t += O(a)
            hash = Object.keys(hash).reduce((h, k) => {
                h[toNum(k) + toNum(x)] = hash[toNum(k)]
                return h
            }, {})
        },
        addToValue: (y) => { // t += O(a)
            hash = Object.keys(hash).reduce((h, k) => {
                h[k] = hash[toNum(k)] + toNum(y)
                return h
            }, {})
        },
    }

    for (let i = 0; i < queryType.length; i++) { // t += O(n)
        fns[queryType[i]](query[i])
    }

    return sum
}

// TIME COMPLEXITY: O(n*a)
// SPACE COMPLEXITY: O(1)

console.log(hashMap(["insert", "insert", "addToValue", "addToKey", "get"], [[1, 2], [2, 3], [2], [1], [3]])) // 5
console.log(hashMap(
    ["insert", "addToValue", "get", "insert", "addToKey", "addToValue", "get"],
    [[1, 2], [2], [1], [2, 3], [1], [-1], [3]]
)) // 6