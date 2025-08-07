# 🤖 AI Chatbot — JavaScript, Express & n8n
A lightweight, AI-powered chatbot using vanilla JS for the frontend, an Express.js server for routing, and n8n + OpenAI as the AI engine 

---

# ✨ Features
🔹 Minimal UI — Clean and responsive chat interface with HTML, CSS, and JS
🔹 Express Backend — Handles message routing and API calls
🔹 AI-Powered by OpenAI — Via n8n workflows
🔹 Real-Time Replies — Interactive, dynamic chat experience
🔹 Fully Customizable — Modify workflow, backend, or frontend easily

---

## 🧠 How It Works
1. User types a message in the browser chat.
2. JavaScript sends it to the Express server via a POST request.
3. Server forwards it to your n8n webhook.
4. n8n processes the input with OpenAI.
5. AI’s reply is sent back to the Express backend.
6. Chat UI displays the response in real-time.

---

## 🛠️ Tech Stack
| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | HTML, CSS, JavaScript              |
| Backend   | Node.js, Express, dotenv           |
| AI Engine | n8n Cloud + OpenAI API             |

---

💬 n8n Workflow Setup
1. Create a new Webhook node in n8n (POST method).
2. Connect it to OpenAI (or any other AI node).
3. Set Webhook response mode to "Last node".
4. Use the active workflow link: https://ahmedmhjoob.app.n8n.cloud/webhook/chatbot

---

🚀 Get Started

1️⃣ Clone the Repo
git clone https://github.com/ahmedmhjoob/AgentTalk-n8n-powered-

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
node server.js
# or with nodemon
npx nodemon server.js

4️⃣ Serve the Frontend
Option A: Use the Live Server extension in VS Code
Option B: Use an HTTP server:
npx http-server



