
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000)
}


const JS = ['for', 'var', 'i < 4', 'callback(+1)', 'var', 'i < 4', 'callback(+1)', 'var', 'i < 4', 'callback(+1)', 'var', 'i < 4', 'callback(+1)', 'setTimeout(..)', 'setTimeout(..)', 'setTimeout(..)', 'setTimeout(..)'] // single threaded
// NODE
const KERNEL = [] // multi-threaded