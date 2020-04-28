import firebase from "firebase";
const config = {
    apiKey: "AIzaSyBsDAo7ely8Kaw6sM0Kvlb7lbraLRRx-L0",
    authDomain: "think14.firebaseapp.com",
    databaseURL: "https://think14.firebaseio.com",
    projectId: "think14",
    storageBucket: "think14.appspot.com",
    messagingSenderId: "302274465556",
    appId: "1:302274465556:web:158c38e7a23a01fae3bc01",
    measurementId: "G-YP9YRLE43H"
};
firebase.initializeApp(config);

/* 
var db = firebase.firestore();
var batch = db.batch();
let products = [
    {
        "id": 139,
        "sku": "SMIRNOFF_LULO",
        "title": "SMIRNOFF LULO",
        "description": "SMIRNOFF_LULO",
        "availableSizes": [
            "PASABOCAS"
        ],
        "price": 36000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    }
]; */
/* 
products.forEach((doc) => {
    batch.set(db.collection('products').doc(), doc);
})

batch.commit().then(function () {
});
 */
export default firebase;
