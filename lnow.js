function solution(S) {
    const strings = S.replace(/\s\s+/g, '').split(/[\?\.]/gi).map(str => str.trim().split(' ').length).sort((a, b) => a - b)
    return strings[strings.length - 1]
}

console.log(solution("Forget  CVs..Sa ve tim e . x . . . x"))