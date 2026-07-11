const toggleChat=document.getElementById("toggleChat");
const closeChat=document.getElementById("closeChat");
const chatBox=document.getElementById("chatBox");

const sendBtn=document.getElementById("sendBtn");
const messageInput=document.getElementById("messageInput");
const messages=document.getElementById("messages");

const emojiBtn=document.getElementById("emojiBtn");
const emojiPicker=document.getElementById("emojiPicker");

const uploadBtn=document.getElementById("uploadBtn");
const fileInput=document.getElementById("fileInput");

const typing=document.getElementById("typing");

/* Open Chat */
toggleChat.onclick=function(){

    chatBox.style.display="flex";
    toggleChat.style.display="none";

}

/* Close Chat */
closeChat.onclick=function(){

    chatBox.style.display="none";
    toggleChat.style.display="block";

}

/* Time */
function time(){

    return new Date().toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
    });

}

/* Add Message */
function addMessage(content,type){

    const div=document.createElement("div");

    div.className="message "+type;

    div.innerHTML=`
        <div>
            <div class="bubble">${content}</div>
            <div class="time">${time()}</div>
        </div>
    `;

    messages.insertBefore(div,typing);

    messages.scrollTop=messages.scrollHeight;

}

/* Send */
function sendMessage(){

    const text=messageInput.value.trim();

    if(text=="") return;

    addMessage(text,"user");

    messageInput.value="";

    fakeReply(text);

}

sendBtn.onclick=sendMessage;

messageInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});

/* Fake Reply */
function fakeReply(userText){

    typing.style.display="block";

    messages.scrollTop=messages.scrollHeight;
    
    setTimeout(async function(){

        typing.style.display="none";
        //Call API to generate bot reply
        response = await fetch('/bot-response', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userText})
        });
        jsonreponse = await response.json();
        botReply = jsonreponse.reply;
        addMessage(
            botReply,
            "bot"
        );

    },1200);

}

/* Emoji */
emojiBtn.onclick=function(){

    emojiPicker.style.display=
    emojiPicker.style.display==="block"
    ?"none":"block";

}

document.querySelectorAll("#emojiPicker span").forEach(function(emoji){

    emoji.onclick=function(){

        messageInput.value+=emoji.innerText;

        messageInput.focus();

    }

});

/* Upload */
uploadBtn.onclick=function(){

    fileInput.click();

}

fileInput.onchange=function(){

    const file=this.files[0];

    if(!file) return;

    if(file.type.startsWith("image/")){

        const reader=new FileReader();

        reader.onload=function(e){

            addMessage(
                `<img src="${e.target.result}" class="img-fluid rounded" style="max-width:220px;">`,
                "user"
            );

        }

        reader.readAsDataURL(file);

    }

    else{

        addMessage(
            `<i class="bi bi-file-earmark"></i> ${file.name}`,
            "user"
        );

    }

    this.value="";

}
