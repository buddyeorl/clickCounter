  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1i8HHdQga429ktObHm2erCfBMk8QD5YI",
    authDomain: "clickcountdown-dd2be.firebaseapp.com",
    databaseURL: "https://clickcountdown-dd2be.firebaseio.com",
    projectId: "clickcountdown-dd2be",
    storageBucket: "clickcountdown-dd2be.appspot.com",
    messagingSenderId: "1093626039480"
  };
  firebase.initializeApp(config);
  var count =100;
firebase.database().ref().on('value', function(snapShot) {
  console.log(snapShot.val());
  count = snapShot.val().clicks;
  $("#clickValue").html(count)
})

$("#clickButton").on("click", function(){
  count--;
  firebase.database().ref().set({
    clicks:count
  });
})

$("#restartButton").on("click", function(){
  firebase.database().ref().set({
    clicks:100
  });
})

