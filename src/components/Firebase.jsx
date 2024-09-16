// firebaseConfig.js
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC5qEiN7Be1zvKzvjLVZouw2C9ZY24L8yY",
//   authDomain: "car-rental-2f4df.firebaseapp.com",
//   projectId: "car-rental-2f4df",
//   storageBucket: "car-rental-2f4df.appspot.com",
//   messagingSenderId: "689458569149",
//   appId: "1:689458569149:web:f565c52bd4266174353cd4"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5qEiN7Be1zvKzvjLVZouw2C9ZY24L8yY",
  authDomain: "car-rental-2f4df.firebaseapp.com",
  projectId: "car-rental-2f4df",
  storageBucket: "car-rental-2f4df.appspot.com",
  messagingSenderId: "689458569149",
  appId: "1:689458569149:web:f565c52bd4266174353cd4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
