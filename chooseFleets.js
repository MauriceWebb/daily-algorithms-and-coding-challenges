function chooseFleets(wheels) {
    // handle constraints:
    if (!Array.isArray(wheels) || !(wheels.length >= 1 && wheels.length <= Math.pow(10, 5))) {
        throw new Error(`Argument wheels must be an array of between 1 and ${Math.pow(10, 5)} numbers.`)
    }

    return wheels.map(num => {
        // handle constraints:
        if (num < 1 || num > Math.pow(10, 6)) {
            throw new Error(`Each number must be between 1 and ${Math.pow(10, 6)}`)
        }

        // handle odd numbers:
        if (num % 2 !== 0) {
            return 0
        }

        let ways = 0

        let n2 = num
        while (n2 >= 0) {
            const x = n2 - 2
            if (x >= 0) {
                ways++
            }
            n2 = x
        }

        let n4 = num
        while (n4 >= 0) {
            const x = n4 - 4
            if (x >= 0) {
                ways++
            }
            n4 = x
        }

        console.log('ways:', ways)

        if (ways % 2 !== 0 && ways < 4) {
            return Math.ceil(ways / 2)
        }

        return Math.floor(ways / 2)
    })
}

console.log(chooseFleets(
    // [4, 5, 6]
    // [6, 3, 2]
    // [10, 4, 11]
    [8, 6, 9]
))

