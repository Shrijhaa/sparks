//google

function onSignIn(googleUser)
{
    var profile = googleUser.getBasicProfile();
    var Name =  profile.getName();
    var pic= profile.getImageUrl();
    var Email= profile.getEmail(); // This is null if the 'email' scope is not present.
    document.getElementById("uname").innerHTML=Name;
    document.getElementById("mail").innerHTML=Email;
    document.getElementById("user").src=pic;
    document.getElementById("gout").style.display="block";
    document.getElementById("bo").style.animationPlayState="running";
    document.getElementById("content").style.animationPlayState="running";
        

}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();

    
    auth2.signOut().then(function () {
       console.log('User signed out.');
       auth2.disconnect();
       //document.location.reload();
    });

    
  }


  function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  }
  function onFailure(error) {
    console.log(error);
  }
  function renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      
      'theme': 'dark',
      'onsuccess': onSuccess,
      'onfailure': onFailure
    });
  }