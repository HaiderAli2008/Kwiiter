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
  // Initialize Firebase
username=localStorage.getItem("username");
room_name=localStorage.getItem("roomname");


function send(){
    msg=document.getElementById("msg").value ;
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span></button><hr>";
row=namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updatelike(message_id){
    console.log("likebutton- "+message_id);
buttonid=message_id;
likes=document.getElementById(buttonid).value;
updatedlikes=Number(likes)+1;
console.log(updatedlikes);
firebase.database().ref(room_name).child(message_id).update({
    like:updatedlikes
});
}
function logout(){
localStorage.removeItem("username");
localStorage.removeItem("roomname");
window.location.replace("index.html");
}