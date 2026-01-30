(function () {
  const STORAGE_KEY = 'ml-learning-api-key';
  const STORAGE_URL = 'ml-learning-api-url';
  const STORAGE_MODEL = 'ml-learning-api-model';
  const STORAGE_CHAT = 'ml-learning-ai-chat';

  const panel = document.getElementById('ai-panel');
  const fab = document.getElementById('ai-fab');
  const closeBtn = document.getElementById('ai-panel-close');
  const fullscreenBtn = document.getElementById('ai-panel-fullscreen');
  const clearChatBtn = document.getElementById('ai-panel-clear-chat');
  const settingsBtn = document.getElementById('ai-settings-btn');
  const messagesEl = document.getElementById('ai-messages');
  const inputEl = document.getElementById('ai-input');
  const sendBtn = document.getElementById('ai-send');
  const settingsOverlay = document.getElementById('ai-settings');
  const apiKeyInput = document.getElementById('ai-api-key');
  const apiUrlInput = document.getElementById('ai-api-url');
  const apiModelInput = document.getElementById('ai-api-model');
  const saveSettingsBtn = document.getElementById('ai-save-settings');
  const closeSettingsBtn = document.getElementById('ai-close-settings');

  let messages = [];

  function saveChat() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_CHAT, JSON.stringify(messages));
      }
    } catch (e) {}
  }

  function loadChat() {
    try {
      if (typeof localStorage !== 'undefined') {
        var s = localStorage.getItem(STORAGE_CHAT);
        if (s) {
          var arr = JSON.parse(s);
          if (Array.isArray(arr)) messages = arr;
        }
      }
    } catch (e) {}
  }

  function getApiKey() {
    return (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_KEY)) || '';
  }
  function getApiUrl() {
    return (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_URL)) || 'https://api.openai.com/v1';
  }
  function getApiModel() {
    return (typeof localStorage !== 'undefined' && localStorage.getItem(STORAGE_MODEL)) || '';
  }
  function isOpenRouter() {
    var url = getApiUrl().toLowerCase();
    return url.indexOf('openrouter.ai') !== -1;
  }

  function getCurrentLesson() {
    const id = typeof window.currentLessonForAI !== 'undefined' ? window.currentLessonForAI : null;
    if (!id || typeof LESSONS === 'undefined') return null;
    return LESSONS.find(function (l) { return l.id === id; }) || null;
  }

  function buildSystemPrompt() {
    const lesson = getCurrentLesson();
    const list = typeof LESSONS !== 'undefined'
      ? LESSONS.map(function (l) { return l.id + ': ' + l.title + ' — ' + l.shortDesc; }).join('\n')
      : 'Уроки: NumPy, градиентный спуск, линейная регрессия, scikit-learn, PyTorch, исправление ошибок.';
    let context = 'Ты — AI-помощник платформы для изучения машинного обучения и компьютерного зрения (Python, NumPy, scikit-learn, PyTorch). Отвечай на русском языке.';
    context += '\n\nДоступные уроки на платформе:\n' + list;
    if (lesson) {
      context += '\n\nПользователь сейчас на уроке: «' + lesson.title + '». Краткое описание: ' + lesson.shortDesc + '.';
    }
    context += '\n\nЕсли пользователь просит подготовить к новому уроку или к следующему заданию — предложи конкретный урок из списка и дай краткий план: что повторить и на что обратить внимание. Если задают вопрос по теме — объясняй кратко и по делу, с примерами кода при необходимости.';
    return context;
  }

  function addMessage(role, content, isError, reasoningDetails) {
    messages.push({ role: role, content: content, error: !!isError, reasoning_details: reasoningDetails || null });
    renderMessages();
    saveChat();
  }

  function renderMessages() {
    if (messages.length === 0) {
      messagesEl.innerHTML = '<div class="ai-msg placeholder">Задай вопрос или напиши «подготовь меня к следующему уроку».</div>';
      return;
    }
    messagesEl.innerHTML = messages.map(function (m) {
      var cls = 'ai-msg ' + (m.role === 'user' ? 'user' : 'assistant');
      if (m.error) cls += ' error';
      var contentHtml = m.role === 'user' ? escapeHtml(m.content) : formatAiContent(m.content);
      var html = '<div class="' + cls + '">' + contentHtml;
      if (m.reasoning_details && m.role === 'assistant') {
        var rd = m.reasoning_details;
        var reasoningText = '';
        if (typeof rd === 'string') reasoningText = rd;
        else if (rd.reasoning_content && rd.reasoning_content.length) {
          reasoningText = rd.reasoning_content.map(function (c) { return c.text || (typeof c === 'string' ? c : ''); }).join('');
        } else if (rd.text) reasoningText = rd.text;
        if (reasoningText.trim()) {
          html += '<details class="ai-reasoning"><summary>Рассуждение модели</summary><div class="ai-reasoning-body">' + formatAiContent(reasoningText) + '</div></details>';
        }
      }
      html += '</div>';
      return html;
    }).join('');
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function escapeHtml(s) {
    if (!s) return '';
    var div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML.replace(/\n/g, '<br>');
  }

  function formatAiContent(raw) {
    if (!raw) return '';
    var escaped = escapeHtml(raw);
    escaped = escaped.replace(/\\\(/g, '').replace(/\\\)/g, '').replace(/\\\[/g, '').replace(/\\\]/g, '');
    escaped = escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    escaped = escaped.replace(/`([^`]+)`/g, '<code class="ai-inline-code">$1</code>');
    var lines = escaped.split('<br>');
    var i = 0;
    var out = [];
    while (i < lines.length) {
      var line = lines[i];
      var trimmed = line.trim();
      var isTableRow = /^\|.+\|$/.test(trimmed) && (trimmed.match(/\|/g) || []).length >= 2;
      if (!isTableRow) {
        out.push(line + (i < lines.length - 1 ? '<br>' : ''));
        i++;
        continue;
      }
      var tableLines = [];
      while (i < lines.length && /^\|.+\|$/.test(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i++;
      }
      if (tableLines.length < 2) {
        out.push(tableLines.join('<br>') + (i < lines.length ? '<br>' : ''));
        continue;
      }
      var cells = function (row) {
        return row.split('|').slice(1, -1).map(function (c) { return c.trim(); });
      };
      var sepIndex = -1;
      for (var k = 0; k < tableLines.length; k++) {
        var cellList = cells(tableLines[k]);
        var allDashes = cellList.length > 0 && cellList.every(function (c) { return /^[\s\-:]*$/.test(c); });
        if (allDashes) {
          sepIndex = k;
          break;
        }
      }
      var headerRow = tableLines[0];
      var dataStart = sepIndex >= 0 ? sepIndex + 1 : 1;
      var tableHtml = '<table class="ai-table"><thead><tr>';
      cells(headerRow).forEach(function (c) {
        tableHtml += '<th>' + c + '</th>';
      });
      tableHtml += '</tr></thead><tbody>';
      for (var j = dataStart; j < tableLines.length; j++) {
        tableHtml += '<tr>';
        cells(tableLines[j]).forEach(function (c) {
          tableHtml += '<td>' + c + '</td>';
        });
        tableHtml += '</tr>';
      }
      tableHtml += '</tbody></table>';
      out.push(tableHtml + (i < lines.length ? '<br>' : ''));
    }
    return out.join('');
  }

  function openPanel() {
    panel.classList.add('open');
  }
  function closePanel() {
    panel.classList.remove('open');
  }

  fab.addEventListener('click', openPanel);
  closeBtn.addEventListener('click', closePanel);

  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', function () {
      messages = [];
      saveChat();
      renderMessages();
    });
  }

  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', function () {
      panel.classList.toggle('ai-panel-fullscreen');
      fullscreenBtn.title = panel.classList.contains('ai-panel-fullscreen') ? 'Свернуть' : 'На весь экран';
      fullscreenBtn.setAttribute('aria-label', panel.classList.contains('ai-panel-fullscreen') ? 'Свернуть' : 'На весь экран');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      if (panel.classList.contains('ai-panel-fullscreen')) {
        panel.classList.remove('ai-panel-fullscreen');
        if (fullscreenBtn) {
          fullscreenBtn.title = 'На весь экран';
          fullscreenBtn.setAttribute('aria-label', 'На весь экран');
        }
      } else {
        closePanel();
      }
    }
  });

  settingsBtn.addEventListener('click', function () {
    apiKeyInput.value = getApiKey();
    apiUrlInput.value = getApiUrl();
    if (apiModelInput) apiModelInput.value = getApiModel();
    settingsOverlay.classList.add('open');
  });
  closeSettingsBtn.addEventListener('click', function () {
    settingsOverlay.classList.remove('open');
  });
  saveSettingsBtn.addEventListener('click', function () {
    var key = apiKeyInput.value.trim();
    var url = apiUrlInput.value.trim() || 'https://api.openai.com/v1';
    var model = apiModelInput ? apiModelInput.value.trim() : '';
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, key);
      localStorage.setItem(STORAGE_URL, url);
      localStorage.setItem(STORAGE_MODEL, model);
    }
    settingsOverlay.classList.remove('open');
  });

  function sendToApi(userText) {
    var apiKey = getApiKey();
    var baseUrl = getApiUrl().replace(/\/?$/, '');
    var apiUrl = baseUrl + '/chat/completions';
    if (!apiKey) {
      addMessage('assistant', 'Сначала укажи API-ключ: нажми ⚙ в шапке панели и введи ключ (OpenAI, OpenRouter или совместимый). Ключ хранится только в твоём браузере.', false);
      return;
    }

    var modelName = getApiModel();
    if (!modelName) {
      modelName = isOpenRouter() ? 'nvidia/nemotron-3-nano-30b-a3b:free' : 'gpt-4o-mini';
    }

    var history = messages.slice(0, -1).filter(function (m) { return m.role === 'user' || m.role === 'assistant'; }).map(function (m) { return { role: m.role, content: m.content }; });
    history.unshift({ role: 'system', content: buildSystemPrompt() });

    var body = {
      model: modelName,
      messages: history,
      max_tokens: 1024,
      temperature: 0.7
    };
    if (isOpenRouter()) {
      body.reasoning = { enabled: true };
    }

    sendBtn.disabled = true;
    addMessage('assistant', 'Думаю…', false);
    var loadingIdx = messages.length - 1;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify(body)
    })
      .then(function (res) {
        messages.pop();
        if (!res.ok) {
          return res.json().then(function (j) {
            throw new Error(j.error && j.error.message ? j.error.message : 'HTTP ' + res.status);
          }).catch(function () {
            throw new Error('HTTP ' + res.status);
          });
        }
        return res.json();
      })
      .then(function (data) {
        var msg = data.choices && data.choices[0] ? data.choices[0].message : null;
        var reply = msg && msg.content ? msg.content : 'Нет ответа от модели.';
        var reasoningDetails = msg && msg.reasoning_details ? msg.reasoning_details : null;
        addMessage('assistant', reply, false, reasoningDetails);
      })
      .catch(function (err) {
        messages.pop();
        addMessage('assistant', 'Ошибка: ' + (err.message || String(err)) + '. Проверь ключ, URL и модель API.', true);
      })
      .then(function () {
        sendBtn.disabled = false;
      });
  }

  function sendMessage() {
    var text = (inputEl.value || '').trim();
    if (!text) return;
    addMessage('user', text, false);
    inputEl.value = '';
    sendToApi(text);
  }

  sendBtn.addEventListener('click', sendMessage);
  inputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  loadChat();
  renderMessages();
})();
