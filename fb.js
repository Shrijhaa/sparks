

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this webpage.';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1242824256205697',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v11.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me',{fields: 'name, email, picture'}, function(response) {
        console.log(response);
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';

        var name=response.name;
        var eid=response.email;
        
        document.getElementById("uname").innerHTML=name;
        document.getElementById("mail").innerHTML=eid;
       
  //var img="http://graph.facebook.com/" + response.id + "/picture?type=normal";
   //document.getElementById("user").src=img;
  //var img="https://graph.facebook.com/response.authResponse.userI?fields=picture&redirect=false";
  //document.getElementById("user").src=img;
    });

     document.getElementById("bo").style.animationPlayState="running";
    document.getElementById("content").style.animationPlayState="running";
   
  }


