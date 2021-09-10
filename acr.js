const repo = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
const input = 'mouse'

function search(repository, query) {
    if (query.length < 2) {
        return
    }

    for (let i = 1; i < query.length; i++) {
        const terms = []
        const term = query.substr(0, i + 1)

        repository.forEach(word => {
            if (word.startsWith(term)) {
                terms.push(word)
            }
        })

        if (terms.length >= 3) {
            console.log(terms.sort().slice(0, 3))
        } else {
            console.log(terms.sort())
        }
    }
}

search(repo, input)