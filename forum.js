// Import Firebase (module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCWfYn3ipDWCn30jx68iz47YLnTmRdeZ_8",
    authDomain: "afar-site.firebaseapp.com",
    projectId: "afar-site",
    storageBucket: "afar-site.firebasestorage.app",
    messagingSenderId: "933404504042",
    appId: "1:933404504042:web:c1667f6ff1a5049952cc93",
    measurementId: "G-5L2ZWDJR8K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const postsCollection = collection(db, "posts");
const analytics = getAnalytics(app);
// Charger les posts au démarrage
window.addEventListener("load", async function () {
    const snapshot = await getDocs(postsCollection);
    const posts = [];
    snapshot.forEach(docSnap => {
        posts.push({ id: docSnap.id, ...docSnap.data() });
    });

    // Trier par date (plus récent en premier)
    posts.sort((a, b) => b.timestamp - a.timestamp);

    posts.forEach(post => renderPost(post));
});

document.getElementById("submit-post").addEventListener("click", async function () {

    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    const category = document.getElementById("post-category").value;
    const author = document.getElementById("post-author")?.value || "Anonyme";
    const contact = document.getElementById("post-contact")?.value || "";

    if (title.trim() === "" || content.trim() === "") {
        alert("Veuillez remplir le titre et le contenu.");
        return;
    }

    const now = Date.now();

    const postData = {
        title,
        content,
        category,
        author,
        contact,
        timestamp: now,
        replies: []
    };

    const docRef = await addDoc(postsCollection, postData);
    postData.id = docRef.id;

    renderPost(postData);

    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
    if (document.getElementById("post-author")) document.getElementById("post-author").value = "";
    if (document.getElementById("post-contact")) document.getElementById("post-contact").value = "";
});

function formatDate(timestamp) {
    const d = new Date(timestamp);
    const dateString = d.toLocaleDateString("fr-FR");
    const timeString = d.toLocaleTimeString("fr-FR");
    return `${dateString} à ${timeString}`;
}

function renderPost(postData) {
    const postContainer = document.getElementById("posts-container");

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.dataset.id = postData.id;

    postDiv.innerHTML = `
        <div class="post-header">
            <div>
                <div class="post-category">${postData.category}</div>
                <div class="post-title">${postData.title}</div>
                <small class="post-meta">
                    Par ${postData.author} ${postData.contact ? "• " + postData.contact : ""}<br>
                    ${formatDate(postData.timestamp)}
                </small>
            </div>
            <div class="post-actions">
                <button class="edit-btn">Modifier</button>
                <button class="delete-btn">Supprimer</button>
            </div>
        </div>

        <div class="post-content">${postData.content}</div>

        <div class="reply-box">
            <textarea class="reply-input" placeholder="Répondre..."></textarea>
            <button class="reply-btn">Envoyer</button>
            <div class="replies"></div>
        </div>
    `;

    const repliesDiv = postDiv.querySelector(".replies");
    if (postData.replies && postData.replies.length > 0) {
        postData.replies.forEach(reply => {
            const replyDiv = document.createElement("div");
            replyDiv.classList.add("reply");
            replyDiv.textContent = reply;
            repliesDiv.appendChild(replyDiv);
        });
    }

    postContainer.prepend(postDiv);

    // Réponse
    postDiv.querySelector(".reply-btn").addEventListener("click", async function () {
        const replyInput = postDiv.querySelector(".reply-input");
        const replyText = replyInput.value.trim();
        if (replyText === "") return;

        const replyDiv = document.createElement("div");
        replyDiv.classList.add("reply");
        replyDiv.textContent = replyText;
        repliesDiv.appendChild(replyDiv);
        replyInput.value = "";

        const docRef = doc(db, "posts", postData.id);
        const newReplies = [...(postData.replies || []), replyText];
        postData.replies = newReplies;
        await updateDoc(docRef, { replies: newReplies });
    });

    // Suppression
    postDiv.querySelector(".delete-btn").addEventListener("click", async function () {
        if (!confirm("Supprimer ce post ?")) return;
        const docRef = doc(db, "posts", postData.id);
        await deleteDoc(docRef);
        postDiv.remove();
    });

    // Modification
    postDiv.querySelector(".edit-btn").addEventListener("click", async function () {
        const newContent = prompt("Modifier le contenu :", postData.content);
        if (newContent === null || newContent.trim() === "") return;

        postData.content = newContent;
        postDiv.querySelector(".post-content").textContent = newContent;

        const docRef = doc(db, "posts", postData.id);
        await updateDoc(docRef, { content: newContent });
    });
}
