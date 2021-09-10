// const net = require('net')
// The port number and hostname of the server.
const Net = require('net');
const port = 1337
const host = 'code-challenge.starry.com'

// connect to TCP server code-challenge.starry.com on port 1337:
// send LIST_DIRECTORY message to server for content dir:
// split the FILE_LIST response into an array:
// for each file, send a GET_FILE message to request the contents:
// write each file to a directory on machine (downloads dir):

const client = new Net.Socket()

client.connect({ port, host }, async () => {
    console.log(`Connected to ${host}:${port} 🚀!`)
    const msg1 = Buffer.from('9' + "MESSAGE/0/content")
    client.write(msg1, () => console.log('SENT:', msg1))
    // client.write("8 0 co")
    // client.write("ntent")
    // client.write("content")
    // client.write("0")
    // client.write("content")
    // client.write("0'content'")
    // client.write('9')
    // client.write('0/content')
    // client.write('content')
    // const msg_listDir = `7 MESSAGE`
    // client.write(msg_listDir, () => console.log('The following message was sent: %s', msg_listDir))
})

client.on('data', chunk => console.log('data:', chunk.toString()))
client.on('error', chunk => console.log('error:', chunk.toString()))



/**
 * Sends a request for all files within the contend dir on starry's TCP server
 */
// function toTheMoon() {
//     const client = new Net.Socket()

//     client.connect({ port, host }, async () => {
//         console.log(`Connected to ${host}:${port} 🚀!`)

//         // const fileList = await andBack(client, 'MESSAGE 7 LIST_DIRECTORY ')
//         const msgs = await Promise.all([
//             andBack(client, 'MESSAGE 0'),
//             // andBack(client, 'LIST_DIRECTORY'),
//             // andBack(client, 'MESSAGE 7 LIST_DIRECTORY ')
//         ])

//         // msgs.map(m => console.log('Server response:', Buffer.from(m).toString()))
//         // console.log('Server response:', Buffer.from(fileList).toString())

//         // client.destroy()
//     })

    // let buffer = Buffer.alloc(0)
    // client.on('data', (data) => {
    //     buffer = Buffer.concat([buffer, data])
    //     if (buffer.length < 4) return

    //     let length = buffer.readUInt32LE()
    //     console.log(length)
    //     // console.log('Server response:', Buffer.from(data).toString())
    //     client.destroy()
    // })
// }

// /**
//  * Handles reception of all packets in intended order
//  */
// async function andBack(client, message) {
//     client.write(message, () => console.log('The following message was sent: %s', message))
//     // let res
//     await (new Promise((resolve, reject) => {
//         //     client.on('data', (data) => {
//         //         res = data
//         //         resolve()
//         //     })
//         let buffer = Buffer.alloc(0)
//         client.on('data', (data) => {
//             buffer = Buffer.concat([buffer, data])
//             if (buffer.length < 4) return

//             let length = buffer.readUInt32LE()
//             console.log(length)
//             while (buffer.length >= length + 4) {
//                 if (length > 0) {
//                     client.read({ data: buffer.slice(4, 4 + legnth), offset: 0 })
//                 }

//                 buffer = buffer.slice(4 + length);
//                 if (buffer.length < 4) {
//                     break;
//                 }
//                 length = buffer.readInt32BE();
//             }

//             console.log(buffer.toString())
//             // console.log('Server response:', Buffer.from(data).toString())
//             client.destroy()
//             resolve()
//         })
//     }))
//     // return res
// }

// toTheMoon()