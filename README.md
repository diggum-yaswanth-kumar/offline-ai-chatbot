**🤖 Offline AI Chatbot (Ollama + FastAPI)**

An offline, full-stack AI chatbot built using local Large Language Models (LLMs) powered by Ollama.
This project provides a ChatGPT-like experience with a modern UI, streaming responses, dark/light mode, and model switching — all without internet access.

**✨ Features**

1.🔒 Fully Offline AI Chatbot

2.🤖 Uses local LLMs via Ollama

3.🔁 Model switching (LLaMA 3.1 / Qwen)

4.💬 Streaming typing effect (ChatGPT-like)

5.🌙 Dark / Light mode toggle

6.⌨️ Keyboard support (Press Enter to send)

7.🎨 Clean, modern, centered UI

8.⚡ FastAPI-based backend

**🛠️ Tech Stack**

1.Backend

Python

FastAPI

Ollama (Local LLM runtime)

2.Frontend

HTML

CSS

JavaScript

**🏗️ Project Architecture**

Frontend (HTML / CSS / JavaScript)
        ↓
FastAPI Backend (Python)
        ↓
Ollama Local LLM (Offline)

**📂 Project Structure**

offline-ai-chatbot/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

▶️ How to Run the Project

1️⃣ Install Ollama

Download and install Ollama from:
👉 https://ollama.com

2️⃣ Download a Model

Run once to download the model:

ollama run llama3.1:8b-instruct-q4_K_M


(Optional: You can also use qwen2.5:7b)

3️⃣ Install Backend Dependencies
cd backend
pip install -r requirements.txt

4️⃣ Start the Backend Server
python -m uvicorn main:app --reload


Backend runs at:

http://127.0.0.1:8000

5️⃣ Run the Frontend

Open frontend/index.html
OR

Use VS Code Live Server


**🎯 Use Cases**

1.Offline AI assistant

2.Privacy-focused chatbot

3.Learning local LLM deployment

4.Full-stack AI project for resume & interviews

**🧑‍💻 Author**

Diggum Yaswanth Kumar (Yashu)
B.E Graduate | AI & Full-Stack Enthusiast

GitHub: https://github.com/diggum-yaswanth-kumar
