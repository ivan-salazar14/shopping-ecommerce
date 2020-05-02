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

var db = firebase.firestore();
var batch = db.batch();
let products = [
    {
        "id": 141,
        "sku": "BRANDY_DOMECQ_BOTELLA",
        "title": "BRANDY DOMECQ BOTELLA",
        "description": "BRANDY_DOMECQ_BOTELLA",
        "availableSizes": [
            "BRANDY"
        ],
        "price": 45000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 142,
        "sku": "BRANDY_DOMECQ_CANECA",
        "title": "BRANDY DOMECQ CANECA",
        "description": "BRANDY_DOMECQ_CANECA",
        "availableSizes": [
            "BRANDY"
        ],
        "price": 25000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 143,
        "sku": "BAILEYS_BOTELLA",
        "title": "BAILEYS BOTELLA",
        "description": "BAILEYS_BOTELLA",
        "availableSizes": [
            "WHISKY"
        ],
        "price": 58000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 144,
        "sku": "BAILEYS_CANECA",
        "title": "BAILEYS CANECA",
        "description": "BAILEYS_CANECA",
        "availableSizes": [
            "WHISKY"
        ],
        "price": 35000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 148,
        "sku": "piña_colada",
        "title": "PIÑA COLADA TAHITI BOTELLA",
        "description": "PIÑA COLADA TAHITI BOTELLA",
        "availableSizes": [
            "OTROS"
        ],
        "price": 30000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 145,
        "sku": "jonnyky_1",
        "title": "PIÑA COLADA JONNYKY BOTELLA",
        "description": "PIÑA COLADA JONNYKY BOTELLA",
        "availableSizes": [
            "OTROS"
        ],
        "price": 28000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 146,
        "sku": "smirnoff_ice",
        "title": "SMIRNOFF ICE",
        "description": "SMIRNOFF ICE",
        "availableSizes": [
            "VODKA"
        ],
        "price": 7000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 147,
        "sku": "smirnoff_ice_red",
        "title": "SMIRNOFF RED",
        "description": "SMIRNOFF RED",
        "availableSizes": [
            "VODKA"
        ],
        "price": 7000,
        "installments": 0,
        "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    }
];
/* 
products.forEach((doc) => {
    batch.set(db.collection('products').doc(), doc);
})

batch.commit().then(function () {
});
 */
export default firebase;
