const c = require("./consts")
let complaint1 = {
    text: "I'm not getting enough money",
    type: c.complaints.FINANCE
}
let complaint2 = {
    text: "My salary hasn't come in yet",
    type: c.complaints.FINANCE
}
let complaint3 = {
    text: "I'm always full of energy",
    type: c.complaints.EMOTIONS
}
const constHandleC = require("./complaintsHandler")
constHandleC.handleComplaint(complaint1) 
constHandleC.handleComplaint(complaint2) 
constHandleC.handleComplaint(complaint3) 