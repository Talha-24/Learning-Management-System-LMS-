let userQuery = document.querySelector("#chatinput");
let chatDataContainer = document.querySelector(".chat-container");
let addImageBtn = document.querySelector("#image");
let imageInput = document.querySelector("#image input");
let displayImage = document.querySelector("#image img");
console.log(displayImage);

//4. Object for String APi Data

/*
1. User Data event listener input..
3. Inputdata pass function(create dynamic data for ai as well as user)  */
let user = {
    message: null,
    file: {
        mime_type: null,
        data: null,
    }
}

//3.  handling the Gemini Response
let GeminiURL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD4tyHIpupNFkGmY_7QN_DSswV9KwSQH6Y";
async function generateResponse(div) {
    let text = div.querySelector(".ai-response-area");
    console.log(text);
    console.log("Fetching Data ...")

    let postreqestHandler = {
        method: "POST",
        header: { 'content-type': 'application/json' },
        body: JSON.stringify(
            {
                "contents": [{ "parts": [{ "text": user.message }, (user.file.data ? [{ "inline_data": user.file }] : []),] }]
            }


        )

    }
    try {
        let response = await fetch(GeminiURL, postreqestHandler);
        console.log("Succeeded!")
        console.log("Converting Data to JSON");
        let Jsonresponse = await response.json();
        let textResponse = Jsonresponse.candidates[0].content.parts[0].text
        console.log(textResponse);
        chatDataContainer.scrollTo({ top: chatDataContainer.scrollHeight, behavior: "smooth" })
        text.innerHTML = textResponse;

   displayImage.id='picture';

    } catch (error) {
        console.log(error);
   displayImage.id='picture';

    }
    finally {
   displayImage.src='/Images/picture.png';
   displayImage.id='picture';
   user.file={};

    }


}






function handleChatData(message) {
    user.message = message;
    //Making User Chat Box Dynamically...
    let html = `<img id="humanimage" src="/Images/human.png" alt="">
            <div class="user-input-area">
               ${message}
               ${user.file.data ? `<img src="data:${user.file.mime_type};base64,${user.file.data}" class="chooseimage" alt="" />` : ''}
            </div>`
    let div = document.createElement("div");
    div.setAttribute("class", "user-chat-box");
    div.innerHTML = html;
    chatDataContainer.scrollTo({ top: chatDataContainer.scrollHeight, behavior: "smooth" })
    userQuery.value = '';
    chatDataContainer.appendChild(div);
    //Making Aichat Data Dynamically
    setTimeout(() => {
        let html = `<img id="aiimage" src="favicon.svg" alt="">
            <div class="ai-response-area">
            <img id="loadingImage" src="/Images//Loading.gif" alt="">


            </div>`

        let div = document.createElement("div");
        div.setAttribute("class", "ai-chat-box");
        div.innerHTML = html;
        chatDataContainer.scrollTo({ top: chatDataContainer.scrollHeight, behavior: "smooth" });
        chatDataContainer.appendChild(div);

        generateResponse(div);
    }, 600)

}









userQuery.addEventListener("keydown", function (evt) {
    if (evt.key == "Enter") {
        handleChatData(userQuery.value);
    }
})

//6.
imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    //File:type input always returns an objec having the details about that particular files...
    let reader = new FileReader();
    //FileReader is a class which always ,,,classes sy object bna rahy hotyhain...reader is an object ..which has all the methods and properties wit key and values...

    reader.readAsDataURL(file);
    reader.onload = (e) => {
        console.log(e.target.result.split(","));
        let base64data = e.target.result.split(",")[1];
        user.file = {
            mime_type: file.type,
            data: base64data,
        }
        displayImage.src=`data:${user.file.mime_type};base64,${user.file.data}`;
        displayImage.id=('choose');
        console.log(displayImage);


    }


})



//5.Handling Data by File
addImageBtn.addEventListener("click", () => {
    addImageBtn.querySelector("input").click();
})