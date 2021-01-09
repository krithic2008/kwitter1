/*var firebaseConfig = {
    apiKey: "AIzaSyCLNU14I6Mve3KPL69f4u81d7vKdq3M8VY",
    authDomain: "kwitter-11461.firebaseapp.com",
    projectId: "kwitter-11461",
    storageBucket: "kwitter-11461.appspot.com",
    messagingSenderId: "236853829730",
    appId: "1:236853829730:web:b62bde6af9a0eeccde313b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);*/
//ADD YOUR FIREBASE LINKS

var user_name;
function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}