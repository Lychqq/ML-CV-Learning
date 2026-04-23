(function () {
  const main = document.querySelector('.main');
  const views = {
    home: document.getElementById('view-home'),
    lessons: document.getElementById('view-lessons'),
    references: document.getElementById('view-references'),
    flashcards: document.getElementById('view-flashcards'),
    lesson: document.getElementById('view-lesson'),
    sandbox: document.getElementById('view-sandbox'),
  };
  const topicCards = document.getElementById('topic-cards');
  const lessonsList = document.getElementById('lessons-list');
  const referencesList = document.getElementById('references-list');
  const lessonContent = document.getElementById('lesson-content');
  const sandboxControls = document.getElementById('sandbox-controls');
  const sandboxCode = document.getElementById('sandbox-code');
  const copySandboxBtn = document.getElementById('copy-sandbox-code');
  const backFromLesson = document.getElementById('back-from-lesson');

  let currentLessonId = null;
  let currentIsReference = false;
  let fillInInputs = [];

  function showView(name) {
    Object.keys(views).forEach(function (key) {
      views[key].classList.toggle('active', key === name);
    });
    document.querySelectorAll('.nav-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.view === name);
    });
  }

  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      showView(btn.dataset.view);
      if (btn.dataset.view === 'lessons') renderLessonsList();
      if (btn.dataset.view === 'references') renderReferencesList();
      if (btn.dataset.view === 'flashcards' && typeof window.renderFlashcards === 'function') window.renderFlashcards();
      if (btn.dataset.view === 'sandbox') renderSandbox();
      if (btn.dataset.view === 'home') renderTopicCards();
    });
  });

  function renderTopicCards() {
    var cardsHtml = LESSONS.map(function (l) {
      return (
        '<div class="topic-card" data-lesson-id="' + l.id + '">' +
        '<h3>' + escapeHtml(l.title) + '</h3>' +
        '<p>' + escapeHtml(l.shortDesc) + '</p>' +
        '</div>'
      );
    }).join('');
    if (typeof REFERENCES !== 'undefined' && REFERENCES.length) {
      cardsHtml += '<h3 class="topic-section-title">Справочники команд</h3>';
      cardsHtml += REFERENCES.map(function (r) {
        return (
          '<div class="topic-card topic-card-ref" data-ref-id="' + r.id + '">' +
          '<h3>' + escapeHtml(r.title) + '</h3>' +
          '<p>' + escapeHtml(r.shortDesc) + '</p>' +
          '</div>'
        );
      }).join('');
    }
    topicCards.innerHTML = cardsHtml;
    topicCards.querySelectorAll('.topic-card[data-lesson-id]').forEach(function (card) {
      card.addEventListener('click', function () {
        showView('lessons');
        renderLessonsList();
        openLesson(card.dataset.lessonId);
      });
    });
    topicCards.querySelectorAll('.topic-card-ref').forEach(function (card) {
      card.addEventListener('click', function () {
        showView('references');
        renderReferencesList();
        openReference(card.dataset.refId);
      });
    });
  }

  function renderLessonsList() {
    lessonsList.innerHTML = LESSONS.map(function (l) {
      return (
        '<div class="lesson-item" data-lesson-id="' +
        l.id +
        '">' +
        '<h3>' +
        escapeHtml(l.title) +
        '</h3>' +
        '<span>' +
        escapeHtml(l.shortDesc) +
        '</span>' +
        '</div>'
      );
    }).join('');
    lessonsList.querySelectorAll('.lesson-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openLesson(item.dataset.lessonId);
      });
    });
  }

  function renderReferencesList() {
    if (typeof REFERENCES === 'undefined' || !referencesList) return;
    referencesList.innerHTML = REFERENCES.map(function (r) {
      return (
        '<div class="lesson-item ref-item" data-ref-id="' +
        r.id +
        '">' +
        '<h3>' +
        escapeHtml(r.title) +
        '</h3>' +
        '<span>' +
        escapeHtml(r.shortDesc) +
        '</span>' +
        '</div>'
      );
    }).join('');
    referencesList.querySelectorAll('.ref-item').forEach(function (item) {
      item.addEventListener('click', function () {
        openReference(item.dataset.refId);
      });
    });
  }

  function openReference(id) {
    currentIsReference = true;
    currentLessonId = id;
    window.currentLessonForAI = id;
    showView('lesson');
    const ref = typeof REFERENCES !== 'undefined' && REFERENCES.find(function (r) { return r.id === id; });
    if (!ref) return;

    // Populate sidebar with Table of Contents
    const sidebar = document.getElementById('lesson-sidebar');
    if (sidebar) {
      const headings = Array.from(new DOMParser().parseFromString(ref.theory, 'text/html').querySelectorAll('h3, h4'));
      if (headings.length > 0) {
        let tocHtml = '<h3>Содержание</h3><ul>';
        headings.forEach(function(h, index) {
          const idStr = 'ref-heading-' + index;
          // Note: we can't easily modify the parsed HTML back into ref.theory string safely without regex
          // We'll inject IDs during rendering below
          tocHtml += '<li><a href="#' + idStr + '">' + escapeHtml(h.textContent) + '</a></li>';
        });
        tocHtml += '</ul>';
        sidebar.innerHTML = tocHtml;
        sidebar.style.display = 'block';
      } else {
        sidebar.innerHTML = '';
        sidebar.style.display = 'none';
      }
    }

    // Inject IDs into headings for TOC linking
    let modifiedTheory = ref.theory;
    let headingIndex = 0;
    modifiedTheory = modifiedTheory.replace(/<(h[34])(.*?)>/g, function(match, tag, rest) {
      if (rest.includes('id=')) return match;
      return '<' + tag + ' id="ref-heading-' + (headingIndex++) + '"' + rest + '>';
    });

    let html = '<h2>' + escapeHtml(ref.title) + '</h2>';
    html += '<div class="lesson-theory reference-content">' + modifiedTheory.trim() + '</div>';
    lessonContent.innerHTML = html;

    // Setup smooth scroll for sidebar links
    if (sidebar) {
      sidebar.querySelectorAll('a').forEach(function(link) {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }

    if (typeof window.initRefRunButtons === 'function') window.initRefRunButtons(lessonContent);
    document.getElementById('back-from-lesson').textContent = '← Назад к справочникам';

    // Re-trigger MathJax rendering if it's available
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise([lessonContent]).catch(function (err) {
        console.error('MathJax typeset failed: ' + err.message);
      });
    }
  }

  function openLesson(id) {
    currentLessonId = id;
    window.currentLessonForAI = id;
    var ref = typeof REFERENCES !== 'undefined' && REFERENCES.find(function (r) { return r.id === id; });
    if (ref) {
      openReference(id);
      return;
    }
    currentIsReference = false;
    showView('lesson');
    document.getElementById('back-from-lesson').textContent = '← Назад к урокам';
    const lesson = LESSONS.find(function (l) {
      return l.id === id;
    });
    if (!lesson) return;

    let html = '<h2>' + escapeHtml(lesson.title) + '</h2>';
    html += '<div class="lesson-theory">' + lesson.theory.trim() + '</div>';

    fillInInputs = [];
    let fillIndex = 0;

    (lesson.codeBlocks || []).forEach(function (block) {
      html += '<div class="code-block">';
      block.lines.forEach(function (line) {
        if (line.type === 'text') {
          html += '<div class="code-line">' + escapeHtml(line.content) + '</div>';
        } else if (line.type === 'hint') {
          html +=
            '<div class="code-line"><span class="hint-trigger" title="' +
            escapeAttr(line.hint) +
            '">' +
            escapeHtml(line.content) +
            '</span></div>';
        } else if (line.type === 'fill') {
          const inputId = 'fill-' + fillIndex;
          fillInInputs.push({
            id: inputId,
            correct: normalizeAnswer(line.correct),
          });
          html +=
            '<div class="code-line">' +
            escapeHtml(line.content) +
            '<input type="text" class="fill-in" id="' +
            inputId +
            '" placeholder="' +
            escapeAttr(line.placeholder || '???') +
            '" data-correct="' +
            escapeAttr(line.correct) +
            '">' +
            '</div>';
          fillIndex++;
        }
      });
      html += '</div>';
    });

    html +=
      '<div class="check-section">' +
      '<button type="button" class="check-btn" id="check-answers">Проверить ответы</button>' +
      '<div class="check-result" id="check-result" style="display:none"></div>' +
      '</div>';

    lessonContent.innerHTML = html;

    lessonContent.querySelectorAll('.hint-trigger').forEach(function (el) {
      el.addEventListener('click', function (e) {
        showTooltip(e.target, e.target.getAttribute('title'));
      });
    });

    document.getElementById('check-answers').addEventListener('click', checkAnswers);
  }

  function normalizeAnswer(s) {
    if (!s) return '';
    return s
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/\s*\(\s*\)\s*$/, '')
      .toLowerCase();
  }

  function checkAnswers() {
    const resultEl = document.getElementById('check-result');
    let allOk = true;
    fillInInputs.forEach(function (f) {
      const input = document.getElementById(f.id);
      if (!input) return;
      const value = normalizeAnswer(input.value);
      const ok = value === f.correct;
      input.classList.remove('correct', 'wrong');
      input.classList.add(ok ? 'correct' : 'wrong');
      if (!ok) allOk = false;
    });
    resultEl.style.display = 'block';
    resultEl.className = 'check-result ' + (allOk ? 'success' : 'fail');
    resultEl.textContent = allOk
      ? 'Всё верно! Можешь переходить к следующему уроку.'
      : 'Есть ошибки. Посмотри подсказки (подчёркнутые пунктиром) и исправь ввод.';
  }

  let tooltipEl = null;
  function showTooltip(anchor, text) {
    if (tooltipEl) {
      tooltipEl.remove();
      tooltipEl = null;
    }
    if (!text) return;
    tooltipEl = document.createElement('div');
    tooltipEl.className = 'tooltip';
    tooltipEl.textContent = text;
    document.body.appendChild(tooltipEl);
    const rect = anchor.getBoundingClientRect();
    tooltipEl.style.left = rect.left + 'px';
    tooltipEl.style.top = rect.bottom + 6 + 'px';
    setTimeout(function () {
      if (tooltipEl) {
        tooltipEl.remove();
        tooltipEl = null;
      }
    }, 5000);
  }

  backFromLesson.addEventListener('click', function () {
    window.currentLessonForAI = null;
    if (currentIsReference) {
      showView('references');
      renderReferencesList();
    } else {
      showView('lessons');
      renderLessonsList();
    }
  });

  function renderSandbox() {
    const d = SANDBOX_DEFAULTS;
    sandboxControls.innerHTML =
      '<div class="sandbox-control">' +
      '<label>Входной размер (признаков)</label>' +
      '<input type="number" id="sb-input" value="' +
      d.inputSize +
      '">' +
      '</div>' +
      '<div class="sandbox-control">' +
      '<label>Скрытый слой 1</label>' +
      '<input type="number" id="sb-h1" value="' +
      d.hidden1 +
      '">' +
      '</div>' +
      '<div class="sandbox-control">' +
      '<label>Скрытый слой 2</label>' +
      '<input type="number" id="sb-h2" value="' +
      d.hidden2 +
      '">' +
      '</div>' +
      '<div class="sandbox-control">' +
      '<label>Выходов (классов)</label>' +
      '<input type="number" id="sb-out" value="' +
      d.outputSize +
      '">' +
      '</div>' +
      '<div class="sandbox-control">' +
      '<label>Оптимизатор</label>' +
      '<select id="sb-optim">' +
      '<option value="SGD">SGD</option>' +
      '<option value="Adam" selected>Adam</option>' +
      '<option value="AdamW">AdamW</option>' +
      '</select>' +
      '</div>' +
      '<div class="sandbox-control">' +
      '<label>Learning rate</label>' +
      '<input type="number" id="sb-lr" step="0.001" value="' +
      d.lr +
      '">' +
      '</div>';
    updateSandboxCode();
    sandboxControls.querySelectorAll('input, select').forEach(function (el) {
      el.addEventListener('input', updateSandboxCode);
      el.addEventListener('change', updateSandboxCode);
    });
  }

  function updateSandboxCode() {
    const input = parseInt(document.getElementById('sb-input')?.value || SANDBOX_DEFAULTS.inputSize, 10);
    const h1 = parseInt(document.getElementById('sb-h1')?.value || SANDBOX_DEFAULTS.hidden1, 10);
    const h2 = parseInt(document.getElementById('sb-h2')?.value || SANDBOX_DEFAULTS.hidden2, 10);
    const out = parseInt(document.getElementById('sb-out')?.value || SANDBOX_DEFAULTS.outputSize, 10);
    const optim = document.getElementById('sb-optim')?.value || 'Adam';
    const lr = document.getElementById('sb-lr')?.value || '0.001';

    const code =
      'import torch\n' +
      'import torch.nn as nn\n\n' +
      'class MyNet(nn.Module):\n' +
      '    def __init__(self):\n' +
      '        super().__init__()\n' +
      '        self.fc1 = nn.Linear(' +
      input +
      ', ' +
      h1 +
      ')\n' +
      '        self.fc2 = nn.Linear(' +
      h1 +
      ', ' +
      h2 +
      ')\n' +
      '        self.fc3 = nn.Linear(' +
      h2 +
      ', ' +
      out +
      ')\n\n' +
      '    def forward(self, x):\n' +
      '        x = torch.relu(self.fc1(x))\n' +
      '        x = torch.relu(self.fc2(x))\n' +
      '        x = self.fc3(x)\n' +
      '        return x\n\n' +
      'model = MyNet()\n' +
      'optimizer = torch.optim.' +
      optim +
      '(model.parameters(), lr=' +
      lr +
      ')\n' +
      'criterion = nn.CrossEntropyLoss()\n' +
      '# Дальше: цикл по батчам, loss.backward(), optimizer.step()\n';
    sandboxCode.textContent = code;
  }

  copySandboxBtn.addEventListener('click', function () {
    const text = sandboxCode.textContent;
    navigator.clipboard.writeText(text).then(
      function () {
        copySandboxBtn.textContent = 'Скопировано!';
        copySandboxBtn.classList.add('copied');
        setTimeout(function () {
          copySandboxBtn.textContent = 'Копировать код';
          copySandboxBtn.classList.remove('copied');
        }, 2000);
      },
      function () {
        copySandboxBtn.textContent = 'Ошибка';
      }
    );
  });

  function escapeHtml(s) {
    if (!s) return '';
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }
  function escapeAttr(s) {
    if (!s) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  (function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    function toggleVisible() {
      btn.classList.toggle('visible', window.scrollY > 300);
    }
    window.addEventListener('scroll', toggleVisible);
    toggleVisible();
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();

  renderTopicCards();
})();
