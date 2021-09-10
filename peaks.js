function deleteMinimalPeaks(numbers) {
    const peaks = new Set()

    while (numbers.length > 0) {
        const tmp = []
        for (let i = 0; i < numbers.length; i++) {
            const p = []
            let m

            for (let j = 0; j < numbers.length; j++) {
                if (
                    (!numbers[j - 1] || numbers[j] > numbers[j - 1]) &&
                    (!numbers[j + 1] || numbers[j] > numbers[j + 1])
                ) {
                    p.push(numbers[j])
                }
            }

            m = Math.min(...p)
            peaks.push(m)
            console.log(peaks)

            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] !== m) tmp.push(numbers[j])
            }
        }
        numbers = tmp
    }

    return peaks
}

console.log(deleteMinimalPeaks([2, 7, 8, 5, 1, 3, 9, 4]))