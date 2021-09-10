function solution(A, D) {
    const trans = { bal: 0, mnthlyFeeCt: 12, mnthsPaid: {} } // s += 1
    A.forEach((num, i) => { // t += 1n
        const mnth = D[i].split('-')[1] // s += 1

        if (!trans.mnthsPaid[mnth]) {
            trans.mnthsPaid[mnth] = {
                pCount: 0,
                feeWaived: false,
                pAmount: 0
            }
        }

        trans.bal += num

        if (num < 0) {
            trans.mnthsPaid[mnth].pCount += 1
            trans.mnthsPaid[mnth].pAmount += num
        }

        if (trans.mnthsPaid[mnth].pCount >= 3 && trans.mnthsPaid[mnth].feeWaived === false && trans.mnthsPaid[mnth].pAmount <= -100) {
            trans.mnthsPaid[mnth].feeWaived = true
            trans.mnthlyFeeCt -= 1
        }
    })

    console.log(JSON.stringify(trans, null, 2))

    return trans.bal - (5 * trans.mnthlyFeeCt)
}

// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

// function solution(A, D) {
//     const trans = { bal: 0, hist: {} }

//     A.forEach((amount, i) => {
//         const [YYYY, MM, DD] = D[i].split('-')

//         // add year and month to hist:
//         if (!trans.hist[YYYY]) {
//             trans.hist[YYYY] = {
//                 [MM]: [amount]
//             }
//         } else {
//             if (!trans.hist[YYYY][MM]) {
//                 trans.hist[YYYY][MM] = [amount]
//             } else {
//                 trans.hist[YYYY][MM].push(amount)
//             }
//         }
//     })

//     return trans
// }

console.log(solution(
    // [100, 100, 100],
    // ['2020-12-31', '2020-12-22', '2020-12-03']
    // [180, -50, -25, -25],
    // ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31']
    // [1, -1, 0, -105, 1],
    // ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']
    [100, 100, -10, -20, -30],
    ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']
))