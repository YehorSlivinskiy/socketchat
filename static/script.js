let socket = io()
let name = "user"
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    let message = document.getElementById("input").value
    if(message.length){
        socket.emit("new_message", message)
        document.getElementById("input").value = ""
    }
})

socket.on("message", (data)=>{
    let item = document.createElement("li")
    item.textContent = data
    document.getElementById("message").appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})

document.getElementById("cn").addEventListener("click", ()=>{
    name = prompt("input your nick!")
    socket.emit("set_nick", name)
})

socket.emit("set_nick", name)


