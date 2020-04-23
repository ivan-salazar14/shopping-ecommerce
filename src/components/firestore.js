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

let products = [

    {
        "id": 1, "sku": "BUCHANANS_12_AÑOS_BOTELLA"
        , "title": "BUCHANANS 12 AÑOS BOTELLA", "description": "BUCHANANS 12 AÑOS BOTELLA", "availableSizes": ["WHISKY"], "price": 120000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 2, "sku": "BUCHANANS_12_AÑOS_CANECA_"
        , "title": "BUCHANANS 12 AÑOS CANECA ", "description": "BUCHANANS 12 AÑOS CANECA ", "availableSizes": ["WHISKY"], "price": 80000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 3, "sku": "BUCHANANS_18_AÑOS_BOTELLA"
        , "title": "BUCHANANS 18 AÑOS BOTELLA", "description": "BUCHANANS 18 AÑOS BOTELLA", "availableSizes": ["WHISKY"], "price": 225000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 4, "sku": "BUCHANANS_MASTERS_BOTELLA"
        , "title": "BUCHANANS MASTERS BOTELLA", "description": "BUCHANANS MASTERS BOTELLA", "availableSizes": ["WHISKY"], "price": 150000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 5, "sku": "BUCHANANS_BLACK_AND_WHITE_BOTELLA"
        , "title": "BUCHANANS BLACK AND WHITE BOTELLA", "description": "BUCHANANS BLACK AND WHITE BOTELLA", "availableSizes": ["WHISKY"], "price": 46000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 6, "sku": "BUCHANANS_BLACK_AND_WHITE_CANECA_"
        , "title": "BUCHANANS BLACK AND WHITE CANECA ", "description": "BUCHANANS BLACK AND WHITE CANECA ", "availableSizes": ["WHISKY"], "price": 28000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 8, "sku": "CHIVAS_REGAL_12_AÑOS_BOTELLA_"
        , "title": "CHIVAS REGAL 12 AÑOS BOTELLA ", "description": "CHIVAS REGAL 12 AÑOS BOTELLA ", "availableSizes": ["WHISKY"], "price": 110000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 9, "sku": "CHIVAS_REGAL_12_AÑOS_CANECA"
        , "title": "CHIVAS REGAL 12 AÑOS CANECA", "description": "CHIVAS REGAL 12 AÑOS CANECA", "availableSizes": ["WHISKY"], "price": 65000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 10, "sku": "CHIVAS_REGAL_18_AÑOS_BOTELLA"
        , "title": "CHIVAS REGAL 18 AÑOS BOTELLA", "description": "CHIVAS REGAL 18 AÑOS BOTELLA", "availableSizes": ["WHISKY"], "price": 210000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 12, "sku": "OLD_PARD_12_AÑOS_TAPA_DORADA_BOTELLA_"
        , "title": "OLD PARD 12 AÑOS TAPA DORADA BOTELLA ", "description": "OLD PARD 12 AÑOS TAPA DORADA BOTELLA ", "availableSizes": ["WHISKY"], "price": 115000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 13, "sku": "OLD_PARD_12_AÑOS_TAPA_DORADA_CANECA_"
        , "title": "OLD PARD 12 AÑOS TAPA DORADA CANECA ", "description": "OLD PARD 12 AÑOS TAPA DORADA CANECA ", "availableSizes": ["WHISKY"], "price": 80000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 14, "sku": "OLD_PARD_12_AÑOS_TAPA_NEGRA_BOTELLA"
        , "title": "OLD PARD 12 AÑOS TAPA NEGRA BOTELLA", "description": "OLD PARD 12 AÑOS TAPA NEGRA BOTELLA", "availableSizes": ["WHISKY"], "price": 125000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 15, "sku": "OLD_PARD_18_AÑOS_"
        , "title": "OLD PARD 18 AÑOS ", "description": "OLD PARD 18 AÑOS ", "availableSizes": ["WHISKY"], "price": 210000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 17, "sku": "JOHNNIE_WALKER_RED_LABEL_BOTELLA"
        , "title": "JOHNNIE WALKER RED LABEL BOTELLA", "description": "JOHNNIE WALKER RED LABEL BOTELLA", "availableSizes": ["WHISKY"], "price": 55000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 18, "sku": "JOHNNIE_WALKER_RED_LABEL_CANCECA_"
        , "title": "JOHNNIE WALKER RED LABEL CANCECA ", "description": "JOHNNIE WALKER RED LABEL CANCECA ", "availableSizes": ["WHISKY"], "price": 35000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 19, "sku": "JOHNNIE_WALKER_BLACK_LABEL_BOTELLA_"
        , "title": "JOHNNIE WALKER BLACK LABEL BOTELLA ", "description": "JOHNNIE WALKER BLACK LABEL BOTELLA ", "availableSizes": ["WHISKY"], "price": 105000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 20, "sku": "JOHNNIE_WALKER_DOUBLE_BLACK_BOTELLA"
        , "title": "JOHNNIE WALKER DOUBLE BLACK BOTELLA", "description": "JOHNNIE WALKER DOUBLE BLACK BOTELLA", "availableSizes": ["WHISKY"], "price": 125000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 22, "sku": "JACK_DANIELS_TENNESSEE_SOU_MASH_BOTELLA"
        , "title": "JACK DANIELS TENNESSEE SOU MASH BOTELLA", "description": "JACK DANIELS TENNESSEE SOU MASH BOTELLA", "availableSizes": ["WHISKY"], "price": 105000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 23, "sku": "JACK_DANIELS_TENNESSEE_SOU_MASH_CANECA"
        , "title": "JACK DANIELS TENNESSEE SOU MASH CANECA", "description": "JACK DANIELS TENNESSEE SOU MASH CANECA", "availableSizes": ["WHISKY"], "price": 65000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 24, "sku": "JACK_DANIELS_TENNESSEE_HONEY_BOTELLA"
        , "title": "JACK DANIELS TENNESSEE HONEY BOTELLA", "description": "JACK DANIELS TENNESSEE HONEY BOTELLA", "availableSizes": ["WHISKY"], "price": 115000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 26, "sku": "GRANTS_BOTELLA"
        , "title": "GRANTS BOTELLA", "description": "GRANTS BOTELLA", "availableSizes": ["WHISKY"], "price": 50000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 27, "sku": "GRANTS_CANECA"
        , "title": "GRANTS CANECA", "description": "GRANTS CANECA", "availableSizes": ["WHISKY"], "price": 35000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 29, "sku": "SOMETHING_SPECIAL_BOTELLA"
        , "title": "SOMETHING SPECIAL BOTELLA", "description": "SOMETHING SPECIAL BOTELLA", "availableSizes": ["WHISKY"], "price": 60000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 30, "sku": "SOMETHING_SPECIAL_CANECA"
        , "title": "SOMETHING SPECIAL CANECA", "description": "SOMETHING SPECIAL CANECA", "availableSizes": ["WHISKY"], "price": 38000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },

    {
        "id": 32, "sku": "BALLANTINES_FINEST_BOTELLA"
        , "title": "BALLANTINES FINEST BOTELLA", "description": "BALLANTINES FINEST BOTELLA", "availableSizes": ["WHISKY"], "price": 55000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    },
    {
        "id": 33, "sku": "BALLANTINES_FINEST_CANECA"
        , "title": "BALLANTINES FINEST CANECA", "description": "BALLANTINES FINEST CANECA", "availableSizes": ["WHISKY"], "price": 35000, "installments": 0, "currencyId": "USD",
        "currencyFormat": "$",
        "isFreeShipping": true
    }
];

/* const db = firebase.firestore();

var batch = db.batch();
products.forEach((doc) => {

    batch.set(db.collection('products').doc(), doc);
})
batch.commit().then(function () {

});
 */
export default firebase;
