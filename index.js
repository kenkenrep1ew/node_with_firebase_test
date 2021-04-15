var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://chatapp-1cc84-default-rtdb.firebaseio.com"
});

// Use the shorthand notation to retrieve the default app's services
var defaultAuth = admin.auth();
var defaultDatabase = admin.database();

defaultDatabase.ref("room1").push({
    username: "Ken_from_Server",
    a_text: "TEST from SERVER " + Date.now(),
    trans: "Translation",
})
// console.log(defaultAuth);
defaultDatabase.ref("room1").on('child_added', (data) => {
    const d = data.val();
    console.log(d.a_text);
});