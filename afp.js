const codeListInput = [
    ['apple', 'apple'],
    ['banana', 'anything', 'banana']
]

RegExp

const shoppingCartInput = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana', 'rasberry']

function foo(codeList, shoppingCart) {
    // handle edge cases:
    if (codeList.length === 0) {
        return 1
    }
    
    // copy list:
    const tempList = Array.from(codeList)

    // loop:
    shoppingCart.forEach((fruit) => {
        // handle edge cases:
        if (tempList.length === 0) {
            return 1
        }

        if (fruit === tempList[0][0] || (fruit && tempList[0][0] === 'anything' && typeof fruit === 'string')) {
            tempList[0].shift()
        } else {
            // reset:
            tempList[0] = codeList[codeList.length - tempList.length]
        }

        if (tempList[0].length === 0) {
            tempList.shift()
        }
    })

    if (tempList.length === 0) {
        return 1
    }

    return 0
}

console.log(foo(codeListInput, shoppingCartInput))