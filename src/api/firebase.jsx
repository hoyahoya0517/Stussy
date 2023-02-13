import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { get, getDatabase, ref, remove, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBnygPHG4ql_UPu6LTCgdbp61vq3-IDvAc",
  authDomain: "stussyclone.firebaseapp.com",
  databaseURL:
    "https://stussyclone-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "stussyclone",
  storageBucket: "stussyclone.appspot.com",
  messagingSenderId: "953870645029",
  appId: "1:953870645029:web:9ef8c5f5330863de6c8ccc",
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth(app);
const db = getDatabase();

export function login() {
  signInWithPopup(auth, provider).then(() => {
    console.log("login ok");
  });
}

export function logout() {
  signOut(auth).then(() => {
    console.log("logout ok");
  });
}

export function userState(callback) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
    }
  });
}

export async function getProducts() {
  const dbRef = ref(db, "products");
  return get(dbRef).then((snapshot) => {
    return Object.values(snapshot.val());
  });
}

export async function getProduct(id) {
  const dbRef = ref(db, `products/${id}`);
  return get(dbRef).then((snapshot) => {
    return snapshot.val();
  });
}

export async function getCart(uid) {
  if (!uid) {
    return [];
  }
  const dbRef = ref(db, `carts/${uid}`);
  return get(dbRef).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    } else {
      return [];
    }
  });
}

export function changeCart(uid, id, cart, selectOption) {
  if (!uid) {
    return;
  }
  const dbRef = ref(db, `carts/${uid}/${id}(${selectOption})`);
  set(dbRef, cart);
}

export function removeCart(uid, id, selectOption) {
  if (!uid) {
    return;
  }
  const dbRef = ref(db, `carts/${uid}/${id}(${selectOption})`);
  remove(dbRef);
}
