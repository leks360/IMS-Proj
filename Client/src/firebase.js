import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyADBJM8ZXgUHl4nm3xc8NhCwPiHbO9sqXY",
  authDomain: "dgm-ims.firebaseapp.com",
  projectId: "dgm-ims",
  storageBucket: "dgm-ims.appspot.com",
  messagingSenderId: "442704804696",
  appId: "1:442704804696:web:34b66e42dd9f842e11032d"
};

const app = initializeApp(firebaseConfig);

export default app;