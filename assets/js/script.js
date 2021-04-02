// !java script file
// $(document).ready(function(){
//     $('.scrollspy').scrollSpy();
//   });

// !sidenav
function open_nav(){
    var nav=document.getElementById("side_nav");
    nav.style.transform = "translateX(0vw)";
}

function close_nav(){
    var nav=document.getElementById("side_nav");
    nav.style.transform = "translateX(-50vw)";
}

// !stories for mobile
var img=["/assets/images/story1.jpg","/assets/images/story2.jpg","/assets/images/story3.jpeg","/assets/images/story4.jpg","/assets/images/story5.jpg","/assets/images/story6.jpg",];
var story=["Things that i enjoyed the most were the spectaular views.They were breathtaking.",
            "The pool they were talking about is really very good.Its  so relaxing that even an eternity inside it feels like moments.",
            "Man i wiil be honest when they pass the INOVA supernova the feeling you get inside is undescriable.",
            "Rides they have up on their moon station is really fun.",
            "I have travelled in all of their ships and i will be honest, all the ships are awesome.",
            "The personal cabins that they give you in their cruice ship is ver comfortable and relaxing."]

var i=0;
 
// var m=window.setInterval(story,1000)    
var storyfun=setInterval(function(){
    var x=document.getElementById("story_img");
    x.style.backgroundImage="url("+img[i]+")";
    
    var st=document.getElementById("t");
    st.innerHTML=story[i];
    i++;
    if(i==6){
        i=0;
    }
},3000)         
var flg=true
function stop(){
  var msg=document.getElementById("stopstory")
  
    if(flg){
        clearInterval(storyfun)
        msg.innerHTML="Start";
        flg=false
    }else{
        storyfun=setInterval(function(){
            var x=document.getElementById("story_img");
            x.style.backgroundImage="url("+img[i]+")";
            
            var st=document.getElementById("t");
            st.innerHTML=story[i];
            i++;
            if(i==6){
                i=0;
            }
        },3000)
        msg.innerHTML="Stop";
        flg=true
    }
}   

var pilot=0,nopilot=0,oneway=0,twoway=0;
var planet={"moon":100,"mars":300,"titan":500,"jupyter":700}
var ship={"raptor":200,"light_cruiser":400,"cruiser":250,"falcon":300,"off_roader":600,"hover_craft":350}
function fun(x){
    if(x=="pilot")
    pilot=true
    else if(x=="nopilot")
    nopilot=true
    else if(x=="oneway")
    oneway=true
    else if(x=="twoway")
    twoway=true

    // console.log(x)
}
function calculate(){
    var pl=document.getElementById("1").value
    var p=planet[pl]
    
    var sh=document.getElementById("2").value
    var s=ship[sh]
    var cost=(p*s)+pilot*1000+nopilot*20+oneway*600+twoway*1200
    // console.log(cost)
    document.getElementById("result").innerHTML="Estimated cost="+cost+" $"
    document.getElementById("result2").innerHTML="Estimated cost="+cost+" $"
    // alert("done")
}

var login=true,signup=false
function show_signup(){
    if(login){
        login=false
        document.getElementById("login_div").style.display="none"
        signup=true
        document.getElementById("signup").style.display="block"
    }
}
function show_login(){
    if(signup){
        login=true
        document.getElementById("signup").style.display="none"
        signup=false
        document.getElementById("login_div").style.display="block"
    }
}
