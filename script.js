const WEBHOOK_URL = 'https://jessicakacz.app.n8n.cloud/webhook/chatbot-teste';

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

const input = document.getElementById('chatInput');
const messages = document.getElementById('chatMessages');
const sendBtn = document.getElementById('sendBtn');
const suggestions = document.getElementById('suggestions');

input.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

input.addEventListener('input', () => {
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 80) + 'px';
});

function getTime() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function appendMessage(text, type) {
  const div = document.createElement('div');
  div.className = `msg ${type}`;
  div.innerHTML = `<div class="msg-bubble">${text}</div><span class="msg-time">${getTime()}</span>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function showTyping() {
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing';
  div.innerHTML = `<div class="typing-bubble"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function removeTyping() {
  const t = document.getElementById('typing');
  if (t) t.remove();
}

function sendSuggestion(text) {
  input.value = text;
  sendMessage();
}

async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  suggestions.style.display = 'none';
  input.value = '';
  input.style.height = 'auto';
  sendBtn.disabled = true;

  appendMessage(text, 'user');
  showTyping();

  try {
    const url = `${WEBHOOK_URL}?pergunta=${encodeURIComponent(text)}`;
    const res = await fetch(url, { method: 'GET' });
    const data = await res.json();
    removeTyping();

    const resposta = data.resposta || data.message || 'Não consegui processar sua pergunta. Tente novamente.';
    appendMessage(resposta, 'bot');
  } catch (err) {
    removeTyping();
    appendMessage('Ops, não consegui me conectar ao servidor.', 'bot');
    console.error(err);
  }

  sendBtn.disabled = false;
  input.focus();
}