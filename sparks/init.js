
FB.getLoginStatus(function(response) {
  statusChangeCallback(response);
  
   
});

/*

{
  status: 'connected',
  authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  }
}

*/