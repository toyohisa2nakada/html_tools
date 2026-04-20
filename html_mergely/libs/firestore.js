// Firebase configuration (YOUR CONFIG HERE)
const firebaseConfig = {
    apiKey: "AIzaSyC39GR4yzRJnIFSveVpyg6QnxmSj2lDJ3A",
    authDomain: "webrtc-connection-a16c9.firebaseapp.com",
    projectId: "webrtc-connection-a16c9",
    storageBucket: "webrtc-connection-a16c9.firebasestorage.app",
    messagingSenderId: "962691839124",
    appId: "1:962691839124:web:8eb5e41c693a99398ff081",
    measurementId: "G-BQ6S9V5F2G"
};

// Firebase SDKs のインポート (HTMLの<script type="module">でインポートしてください)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, setDoc, updateDoc, deleteDoc, onSnapshot, arrayUnion } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase と Firestore の初期化
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Firestore Collection and Document names
const collectionName = 'progress_board_for_mergely';

// ログ出力関数
function log(message) {
    console.log(message);
}

/**
 * 配列の追加
 */
export async function push(docname, data) {
    try {
        await updateDoc(doc(db, collectionName, docname),
            Object.fromEntries(Object.entries(data).map(([k, v]) => [k, arrayUnion(v)]))
        );
    } catch (e) {
        log('Error pushing data to array ' + e.message);
    }
}

/**
 * document のすべてのフィールドを上書き
 */
export async function save(docname, data) {
    try {
        await setDoc(doc(db, collectionName, docname), {
            ...data,
            created_date: Date.now()
        });
        log(`saved to Firestore ${JSON.stringify(data)}`);
    } catch (e) {
        log('Error saving Offer to Firestore: ' + e.message);
        console.error('Error saving Offer to Firestore:', e);
    }
}

/**
 * documentの特定のフィールドを更新
 */
export async function update(docname, data) {
    try {
        await updateDoc(doc(db, collectionName, docname), {
            ...data,
            created_date: Date.now()
        });
        log(`updated to Firestore. ${JSON.stringify(data)}`);
    } catch (e) {
        log('Error saving Answer to Firestore: ' + e.message);
        console.error('Error saving Answer to Firestore:', e);
    }
}

/**
 * Firestore を監視し、SDP (Offer/Answer) と ICE Candidate を受信する関数
 * 受信したデータはコールバック関数を通じて呼び出し元に渡されます。
 *
 * @param {function} onOfferReceived - Offer SDP受信時に呼び出されるコールバック (sdpData) => {}
 * @param {function} onAnswerReceived - Answer SDP受信時に呼び出されるコールバック (sdpData) => {}
 * @param {function} onIceCandidateReceived - ICE Candidate受信時に呼び出されるコールバック (candidateData) => {}
 */
export function listen(docname, listener) {
    log(`Listening for ${docname}...`);

    // メインのSDPドキュメントを監視
    onSnapshot(doc(db, collectionName, docname), (snapshot) => {
        const data = snapshot.data();
        log(`Firestore snapshot received. Data: ${JSON.stringify(data)}`);

        if (!data) {
            log('Firestore document is empty or deleted.');
            return;
        }
        listener(data);
    }, (error) => {
        log(`Firestore listener error: ${error.message}`);
        console.error('Firestore listener error:', error);
    });
}

/**
 * Firestore のセッションデータをクリアする関数
 */
export async function clear(docname) {
    log('Clearing Firestore session data initiated.');
    try {
        // メインのセッションドキュメントを削除
        await deleteDoc(doc(db, collectionName, docname));
        log('Main Firestore session document deleted.');

    } catch (e) {
        log('Error clearing Firestore data: ' + e.message);
        console.error('Error clearing Firestore data:', e);
    }
}
