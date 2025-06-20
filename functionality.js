let lion_tiger=[{
    "lion":"Brooo 🐯",
    "tiger":"Oye king 😂",
    "date":"10:00am"
},
{
    "lion":" Still scared of me? 😎",
    "tiger": "Scared? I sneeze louder than your roar 😤",
    "date":"1030am"

   
},
{
    "lion":"Chill bro, don’t pull a muscle 😆",
    "tiger":" Don’t worry, I stretch before roasting 🐅🔥",
    "date":"11:00am"

    
},
{
    "lion":"Wanna race",
    "tiger":"Sure. You run. I nap. I win. 😴",
    "date":"11:10am"

}
,
{
    "lion":"Lazy legend 😑",
    "tiger":"Smart survival, bro 😎",
    "date":"11:30am",

},{
    "lion":"Next hunt is on you",
    "tiger":"Cool. I’ll order online",
    "date":"12:00pm"
},
{
    "lion":"Wild Eats",
    "tiger":"30 mins or antelope free 🛵💨",
    "date":"12:05pm",

},];
const hold_card=document.querySelectorAll('.uniquekey');
hold_card.forEach((element)=>{
    element.addEventListener('click',()=>{
        dothing(element.dataset.value);
    });
});
function dothing(value){
    let val='.person'+value+'0';
    console.log(val);
    let animalname=document.querySelector(val).innerHTML;
    document.querySelector('.header').innerHTML='';
    document.querySelector('.messagesec').innerHTML='';
    document.querySelector('.outerdiv').innerHTML=`
        <div class="forhide"></div>
        <div class="profilefield">
           <div class="profilesec">
              <i style="margin-left:10px" class="bi bi-arrow-left backfunction"></i>
              <div style="width:66px;" class="person${value}img"></div>
              <div>${animalname}</div>
           </div>
           <div class="callsec">
              <i style="width:30px" class="bi bi-camera-video-fill"></i>
              <i style="width:30px" class="bi bi-telephone-outbound-fill"></i>
           </div>
        </div>
        <div class="messagefield">
           <div class="sticker"><i class="bi bi-filetype-gif"></i></div>
           <input class="inputmesg" type="text" placeholder="send message">
           <div class="attachfile"><i class="bi bi-paperclip"></i></div>
           <div class="pay"><i class="bi bi-currency-rupee"></i></div>
           <div class="camara"><i class="bi bi-camera"></i></div>
        </div>
    `
    let holdconvo=document.createElement("div");
    holdconvo.classList.add("forconversation");
    lion_tiger.forEach((element)=>{
        holdconvo.innerHTML+=`
            <div class="datadiv"><div class="forcenter">${element.date}</div></div>
            <div class="firstperson"><div class="forbackground">${element.lion}</div></div>
            <div class="secoundperson"><div class="forbackground">${element.tiger}</div></div>
        `;
    });
    document.querySelector('.outerdiv').appendChild(holdconvo);
    document.querySelector('.backfunction').addEventListener('click',()=>{
         window.location.href='chattemplate.html';
    });
}
