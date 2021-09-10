function digitAnagrams(a) {
    let count = 0

    while (a.length > 0) {
        const num = ("" + a[a.length - 1]).split("")

        for (let i = 0; i < Math.max(1, a.length - 2); i++) {
            if (a[a.length - 1] === a[i]) {
                count++
                console.log("num:", num.join(""))
            } else {
                const check = ("" + a[i]).split("")
                if (num.length === check.length) {
                    if (num.every(n => check.includes(n))) {
                        count++
                        console.log("num:", num.join(""))
                    }
                }
            }
            a.pop()
        }
    }
    return count
}

console.log(digitAnagrams([25, 35, 872, 228, 53, 278, 872]))