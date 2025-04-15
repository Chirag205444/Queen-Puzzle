let button=document.querySelectorAll(".inner button");
let rbut=document.querySelector(".butt");
let msg=document.querySelector(".msg");

 let arraylist=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

 let blocklist1=[0,1,2,3,4,5,8,10,12,15];
 let blocklist2=  [0,1,2,3,4,5,6,9,11,13];
 let blocklist3= [0,1,2,3,5,6,7,8,10,14];
 let blocklist4=  [0,1,2,3,6,7,9,11,12,15];
 let blocklist5= [4,5,6,7,0,1,8,9,12,14];
 let blocklist6=  [4,5,6,7,0,1,2,8,9,10,13,15];
 let blocklist7= [4,5,6,7,1,2,3,10,10,11,12,14];
 let blocklist8= [4,5,6,7,2,3,10,11,13,15];
 let blocklist9= [8,9,10,11,0,2,4,5,12,13];
 let blocklist10= [8,9,10,11,1,3,4,5,6,12,13,14];
 let blocklist11=  [8,9,10,11,0,2,5,6,7,13,14,15];
 let blocklist12= [8,9,10,11,1,3,6,7,14,15];
 let blocklist13= [12,13,14,15,0,3,4,6,8,9];
 let blocklist14= [12,13,14,15,1,5,7,8,9,10];
 let blocklist15=  [12,13,14,15,2,4,6,9,10,11];
 let blocklist16= [12,13,14,15,0,3,5,7,10,11];

 let count=0;


for( let but of button){
    but.addEventListener("click",()=>{{
        let id=but.getAttribute("id");
        but.innerHTML='<i class="fa-solid fa-chess-queen"></i>'
       count= block(id);
        checkwinner(count);
    }})
}

function block(ele){
    if(ele==="1"){
        for(i=0;i<blocklist1.length;i++){
           button[blocklist1[i]].disabled=true;
           button[blocklist1[i]].style.border="1.25px solid black";
        //    button[blocklist1[i]].style.backgroundColor="lightgray";
        }
    }else
    if(ele==="2"){
        for(i=0;i<blocklist2.length;i++){
            button[blocklist2[i]].disabled=true;
            button[blocklist2[i]].style.border="1.25px solid black";
            // button[blocklist2[i]].style.backgroundColor="lightgray";
    }
    }
    else
    if(ele==="3"){
        for(i=0;i<blocklist3.length;i++){
            button[blocklist3[i]].disabled=true;
            button[blocklist3[i]].style.border="1.25px solid black";
            // button[blocklist3[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="4"){
        for(i=0;i<blocklist4.length;i++){
            button[blocklist4[i]].disabled=true;
            button[blocklist4[i]].style.border="1.25px solid black";
            // button[blocklist4[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="5"){
        for(i=0;i<blocklist5.length;i++){
            button[blocklist5[i]].disabled=true;
            button[blocklist5[i]].style.border="1.25px solid black";
            // button[blocklist5[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="6"){
        for(i=0;i<blocklist6.length;i++){
            button[blocklist6[i]].disabled=true;
            button[blocklist6[i]].style.border="1.25px solid black";
            // button[blocklist6[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="7"){
        for(i=0;i<blocklist7.length;i++){
            button[blocklist7[i]].disabled=true;
            button[blocklist7[i]].style.border="1.25px solid black";
            // button[blocklist7[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="8"){
        for(i=0;i<blocklist8.length;i++){
            button[blocklist8[i]].disabled=true;
            button[blocklist8[i]].style.border="1.25px solid black";
            // button[blocklist8[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="9"){
        for(i=0;i<blocklist9.length;i++){
            button[blocklist9[i]].disabled=true;
            button[blocklist9[i]].style.border="1.25px solid black";
            // button[blocklist9[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="10"){
        for(i=0;i<blocklist10.length;i++){
            button[blocklist10[i]].disabled=true;
            button[blocklist10[i]].style.border="1.25px solid black";
            // button[blocklist10[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="11"){
        for(i=0;i<blocklist11.length;i++){
            button[blocklist11[i]].disabled=true;
            button[blocklist11[i]].style.border="1.25px solid black";
            // button[blocklist11[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="12"){
        for(i=0;i<blocklist12.length;i++){
            button[blocklist12[i]].disabled=true;
            button[blocklist12[i]].style.border="1.25px solid black";
            // button[blocklist12[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="13"){
        for(i=0;i<blocklist13.length;i++){
            button[blocklist13[i]].disabled=true;
            button[blocklist13[i]].style.border="1.25px solid black";
            // button[blocklist13[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="14"){
        for(i=0;i<blocklist14.length;i++){
            button[blocklist14[i]].disabled=true;
            button[blocklist14[i]].style.border="1.25px solid black";
            // button[blocklist14[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="15"){
        for(i=0;i<blocklist15.length;i++){
            button[blocklist15[i]].disabled=true;
            button[blocklist15[i]].style.border="1.25px solid black";
            // button[blocklist15[i]].style.backgroundColor="lightgray";
    }
   }
    else
    if(ele==="16"){
        for(i=0;i<blocklist16.length;i++){
            button[blocklist16[i]].disabled=true;
            button[blocklist16[i]].style.border="1.25px solid black";
            // button[blocklist16[i]].style.backgroundColor="lightgray";
    }
   }
    
count=count+1;
return count;
}

function checkwinner(count){
    console.log(count);
   if(count===4){
    msg.innerText="Congragulation You Found...!"
   }
   else
   { const alldis=Array.from(button).every(but => but.disabled);
    {
        if(alldis){
            msg.innerText="No more Moves,Try Again..!"
        }
    }
}
} 
   


rbut.addEventListener("click",()=>{
    for(let but of button){
        but.disabled=false;
        but.innerText="";
        count=0;
        msg.innerText="";
        but.style.border="";
    }
})
