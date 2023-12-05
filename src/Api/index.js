var socket = new WebSocket('ws://localhost:3000/ws')

let connect = (cb) => {
    console.log("Connecting")

    socket.onopen = () =>{
        console.log("Successfully connected")
    }

    socket.onmessage = (msg) => {
        console.log("Message from websocket:", msg)
    }

    socket.onclose = (event) =>{
        console.log("socket closed connection", event)
    }

    socket.onerror = (error) => {
        console.log("socket was not working", error)
    }


}

let sendMsg = (msg) => {
    console.log("sending msg:", msg);
    socket.send(msg);
}

export {connect, sendMsg};