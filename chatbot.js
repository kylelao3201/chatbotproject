var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes()

function enter(event) {
  var x = event.keyCode;
  console.log(x);
  if (x == 13){
    speak();
  }

}


var response = {
  "hi": "hello",
  "how old are you": "I don't understand the question.",
  "what is your name": "my name is unknown specimen",
  "what time is it" : "its currently" + " " + [hour] + ":" + [minute]
}



function speak(){
  var userInput = $("#userInput").val();
  userInput = userInput.toLowerCase();
  $("#chat-area").prepend("Me: " + userInput + "<br>")
  var answer = response[userInput]

if  (answer == undefined) {
  var fallBack = ["thats not what you asked before", "my creator doesnt allow me to answer that question", "what", "Sorry I dont know you or what you are saying", "I do not answer stupid questions"];

    var rand = Math.floor((Math.random() * fallBack.length));
    $("#chat-area").prepend("Bot: " + fallBack[rand] + "<br>");
     }
      else {
      $("#chat-area").prepend("Bot:" + answer + "<br>");
     }
   }
