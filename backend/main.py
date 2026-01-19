from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Store chat history (simple memory)
chat_history = []

class ChatRequest(BaseModel):
    message: str
    model: str

@app.post("/chat")
def chat_with_ollama(req: ChatRequest):
    global chat_history

    chat_history.append({"role": "user", "content": req.message})

    payload = {
        "model": req.model,
        "messages": chat_history,
        "stream": False
    }

    response = requests.post(
        "http://localhost:11434/api/chat",
        json=payload
    )

    result = response.json()
    reply = result["message"]["content"]

    chat_history.append({"role": "assistant", "content": reply})

    return {"reply": reply}
