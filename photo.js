function solution(S) {
    const strings = S.split('\n')
    const regExp = /(\w+).(png|jpg|jpeg), (\w+), (\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})/g

    const photos = {}

    strings = strings.map(str => {
        const [,name, ext, city, date, time] = new RegExp(regExp).exec(str)
        return { name, ext, city, date, time }
    })

    return strings.forEach(photo => {

    })
}

console.log(solution(`photo.jpg, Warsaw, 2013-09-05 14:08:15
john.png, London, 2015-06-20 15:13:22
myFriends.png, Warsaw, 2013-09-05 14:07:13
Eiffel.jpg, Paris, 2015-07-23 08:03:02
pisatower.jpg, Paris, 2015-07-22 23:59:59
BOB.jpg, London, 2015-08-05 00:02:03
notredame.png, Paris, 2015-09-01 12:00:00
me.jpg, Warsaw, 2013-09-06 15:40:22
a.png, Warsaw, 2016-02-13 13:33:50
b.jpg, Warsaw, 2016-01-02 15:12:22
c.jpg, Warsaw, 2016-01-02 14:34:30
d.jpg, Warsaw, 2016-01-02 15:15:01
e.png, Warsaw, 2016-01-02 09:49:09
f.png, Warsaw, 2016-01-02 10:55:32
g.jpg, Warsaw, 2016-02-29 22:13:11`))