# 🤖 AI Chatbot — HTML, CSS, JavaScript + Express + n8n + OpenAI
An interactive AI-powered chatbot built with a simple HTML/CSS/JavaScript frontend, a Node.js + Express backend, and an n8n cloud workflow as the AI engine using OpenAI.
---

## ✨ Features
- 🔹 **Clean & Responsive UI** — Simple, elegant frontend built with vanilla HTML, CSS, and JS
- 🔹 **Express Backend** — Handles messages and routes them to n8n via REST
- 🔹 **n8n AI Integration** — Cloud workflow for processing messages using OpenAI
- 🔹 **Fully Customizable** — Easily adapt workflows or swap out AI tools
- 🔹 **Real-time Conversations** — Send and receive messages dynamically

---

## 🧠 How It Works
1. User types a message in the browser.
2. Message is sent via `fetch()` to an Express server.
3. Express server forwards the message to an **n8n webhook**.
4. n8n workflow processes the message using OpenAI.
5. Response is sent back to the frontend and displayed in the chat UI.

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
3. Add a Set/Return node to structure the reply.
4. Set Webhook response mode to "Last node".
5. Use the active workflow link:
https:https://ahmedmhjoob.app.n8n.cloud/webhook-test/chatbot




