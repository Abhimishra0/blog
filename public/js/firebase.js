let firebaseConfig = {
    apiKey: "AIzaSyC5WPADtrzaw2ZLsCDvUlpb9QcTEvfzvHQ",
    authDomain: "blogging-website-18307.firebaseapp.com",
    projectId: "blogging-website-18307",
    storageBucket: "blogging-website-18307.appspot.com",
    messagingSenderId: "255860770945",
    appId: "1:255860770945:web:e2535850fc5564da48e580"
};


firebase.initializeApp(firebaseConfig);

let db=firebase.firestore();