var firebaseConfig = {
    apiKey: "AIzaSyDYww_8HiKsYTN8QW4AQ2NZ6L1zv2T3qpk",
    authDomain: "kwitter-a07f3.firebaseapp.com",
    databaseURL: "https://kwitter-a07f3-default-rtdb.firebaseio.com",
    projectId: "kwitter-a07f3",
    storageBucket: "kwitter-a07f3.appspot.com",
    messagingSenderId: "247745955537",
    appId: "1:247745955537:web:2fab2dc398610d894e27f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
username=localStorage.getItem("username");
document.getElementById("username").innerHTML=" Welcome "+username+" ! ";

function addroom(){
    roomname=document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding roomname"
    });
    localStorage.setItem("roomname",roomname);
    window.location="kwitter_page.html";
}

  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("roomname- "+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+ Room_names +"</div></hr>";
document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("roomname",name);
    window.location="kwitter_page.html";
}

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location="index.html"
}