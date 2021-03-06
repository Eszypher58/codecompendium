function onSignIn(googleUser) {
  // Useful data for your client-side scripts:
  var googleprofile = googleUser.getBasicProfile();
  /*var id = db.checkForUser(googleprofile.getId());
  if (id) {
    //go to main dashboard
  } else {
    //go to sign up page
  }*/
  //console.log("ID: " + googleprofile.getId()); // Don't send this directly to your server!
  //console.log('Full Name: ' + googleprofile.getName());
  //console.log('Given Name: ' + googleprofile.getGivenName());
  //console.log('Family Name: ' + googleprofile.getFamilyName());
  //console.log("Image URL: " + googleprofile.getImageUrl());
  //console.log("Email: " + googleprofile.getEmail());


  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  //console.log("ID Token: " + id_token);

  var myUserEntity = {};
  myUserEntity.Id = googleprofile.getId();
  myUserEntity.Name = googleprofile.getName();
  myUserEntity.Email = googleprofile.getEmail();
  myUserEntity.Photo = googleprofile.getImageUrl();
  sessionStorage.setItem('myUserEntity',JSON.stringify(myUserEntity));

  //$.post("/api/check/" + googleprofile.getId())

  $.get("/", function() {
    window.location.href = "/" + googleprofile.getId() + "/mycollection";
  });
};


function signOut() {
  console.log("signOut ran");
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}


function onLoad() {
  console.log("onload ran", gapi);
  gapi.load('auth2', function() {
    gapi.auth2.init();
    console.log('auth2 initialized');
  });
}

