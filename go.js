//google

function onSignIn(googleUser) {
    
    var profile = googleUser.getBasicProfile();
    
   var Name =  profile.getName();
    var pic= profile.getImageUrl();
    var Email= profile.getEmail(); // This is null if the 'email' scope is not present.
    
    document.getElementById("uname").innerHTML=Name;
    document.getElementById("mail").innerHTML=Email;
    document.getElementById("user").src=pic;

    document.getElementById("bo").style.animationPlayState="running";
    document.getElementById("content").style.animationPlayState="running";
   
    

}


