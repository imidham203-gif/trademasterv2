import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js';
import { getFirestore, doc, setDoc, collection, addDoc, deleteDoc, query, onSnapshot, serverTimestamp, getDocs, setLogLevel } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js';

// Konfigurasi API
window.apiKey = "";

// Konfigurasi log level
setLogLevel('error');

// --- FIREBASE SETUP & CONFIG ---
const firebaseConfig = {
    apiKey: "AIzaSyDi_WDMJe4iIjFpkQ76MhBT_qKd_YgXhBQ",
    authDomain: "trademaster-cb1bf.firebaseapp.com",
    projectId: "trademaster-cb1bf",
    storageBucket: "trademaster-cb1bf.firebasestorage.app",
    messagingSenderId: "222478072374",
    appId: "1:222478072374:web:3554fa549dafd51a61f697",
    measurementId: "G-RWHE41XDK0"
};

window.appId = "trademaster-cb1bf";
window.ADMIN_ACCESS_PIN = "1320321969";

window.app = Object.keys(firebaseConfig).length > 0 ? initializeApp(firebaseConfig) : null;
window.auth = window.app ? getAuth(window.app) : null;
window.db = window.app ? getFirestore(window.app) : null;

// --- KONSTANTA PENYIMPANAN ---
window.CHUNK_SIZE = 800000;

// Ekspor fungsi Firebase ke global scope
window.firebase = {
    getAuth, signInAnonymously, onAuthStateChanged,
    getFirestore, doc, setDoc, collection, addDoc, deleteDoc, 
    query, onSnapshot, serverTimestamp, getDocs, setLogLevel
};