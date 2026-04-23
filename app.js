
/* Inject responsive styling dynamically to avoid changing styles.css */
const style = document.createElement('style');
style.innerHTML = `
  @media (max-width: 768px) {
    #view-references > div {
      flex-direction: column !important;
    }
    .ref-sidebar {
      width: 100% !important;
      display: flex;
      flex-direction: column;
    }
    .ref-sidebar ul {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .ref-sidebar li {
      margin-bottom: 0 !important;
      flex: 1 1 calc(50% - 0.5rem);
    }
    .ref-lib-btn {
      text-align: center !important;
    }
  }
`;
document.head.appendChild(style);
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

    topicCards.innerHTML = cardsHtml;
    topicCards.querySelectorAll('.topic-card[data-lesson-id]').forEach(function (card) {
      card.addEventListener('click', function () {
        showView('lessons');
        renderLessonsList();
        openLesson(card.dataset.lessonId);
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

    // Group references by library
    var libs = {};
    REFERENCES.forEach(function(r) {
      if (!libs[r.library]) libs[r.library] = [];
      libs[r.library].push(r);
    });

    // Create a 2-column layout for the references view
    let html = '<div style="display: flex; gap: 2rem;">';

    // LEFT SIDEBAR (Menu for libraries)
    html += '<div style="width: 250px; flex-shrink: 0;" class="ref-sidebar">';
    html += '<h3 style="margin-top: 0;">Библиотеки</h3>';
    html += '<ul style="list-style: none; padding: 0;">';
    Object.keys(libs).forEach(function(libName) {
      html += '<li style="margin-bottom: 0.5rem;"><button class="ref-lib-btn" data-lib="' + escapeHtml(libName) + '" style="width: 100%; text-align: left; background: #334155; border: none; padding: 0.75rem 1rem; border-radius: 6px; color: white; cursor: pointer; transition: background 0.2s;">' + escapeHtml(libName) + ' (' + libs[libName].length + ')</button></li>';
    });
    html += '</ul></div>';

    // RIGHT CONTENT (List of functions for selected library)
    html += '<div id="ref-content-area" style="flex-grow: 1;">';
    html += '<p style="color: #94a3b8;">Выберите библиотеку в меню слева.</p>';
    html += '</div></div>';

    referencesList.innerHTML = html;

    // Logic to render functions when clicking a library
    const renderFuncsForLib = function(libName) {
      const area = document.getElementById('ref-content-area');
      let funcsHtml = '<h2 style="margin-top: 0; color: #60a5fa; border-bottom: 1px solid #334155; padding-bottom: 0.5rem;">' + escapeHtml(libName) + '</h2>';
      funcsHtml += '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem; margin-top: 1rem;">';

      libs[libName].forEach(function(r) {
        funcsHtml += '<div class="lesson-item ref-item" data-ref-id="' + r.id + '" style="margin-bottom: 0;">';
        funcsHtml += '<h3 style="margin-top:0; color: #e2e8f0; font-size: 1.1rem; word-break: break-all;">' + escapeHtml(r.title) + '</h3>';
        funcsHtml += '<span style="font-size: 0.9rem; color: #94a3b8; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">' + escapeHtml(r.shortDesc) + '</span>';
        funcsHtml += '</div>';
      });
      funcsHtml += '</div>';
      area.innerHTML = funcsHtml;

      // Bind clicks to individual functions
      area.querySelectorAll('.ref-item').forEach(function (item) {
        item.addEventListener('click', function () {
          openReference(item.dataset.refId);
        });
      });
    };

    // Bind clicks to library sidebar buttons
    referencesList.querySelectorAll('.ref-lib-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        referencesList.querySelectorAll('.ref-lib-btn').forEach(b => b.style.background = '#334155');
        btn.style.background = '#60a5fa'; // Active color
        renderFuncsForLib(btn.dataset.lib);
      });
    });

    // Default open the first library (NumPy)
    if (Object.keys(libs).length > 0) {
      const firstLibBtn = referencesList.querySelector('.ref-lib-btn');
      if(firstLibBtn) firstLibBtn.click();
    }
  }

  function openReference(id) {
    currentIsReference = true;
    currentLessonId = id;
    window.currentLessonForAI = id;
    showView('lesson');
    const ref = typeof REFERENCES !== 'undefined' && REFERENCES.find(function (r) { return r.id === id; });
    if (!ref) return;

    // Remove sidebar for individual function references
    const sidebar = document.getElementById('lesson-sidebar');
    if (sidebar) {
      sidebar.innerHTML = '';
      sidebar.style.display = 'none';
    }

    lessonContent.innerHTML = '<h2>' + escapeHtml(ref.title) + ' <span style="font-size: 0.6em; color: #94a3b8; font-weight: normal;">(' + escapeHtml(ref.library) + ')</span></h2>' + ref.theory;

    // Render code blocks
    if (ref.codeBlocks && ref.codeBlocks.length > 0) {
      ref.codeBlocks.forEach(function (block) {
        const container = document.getElementById('code-block-' + block.id);
        if (container) {
          container.innerHTML = '';
          renderCodeBlock(block, container);
        }
      });
    }

    if (window.MathJax) {
      window.MathJax.typesetPromise([lessonContent]).catch(function (err) {
        console.error('MathJax error:', err);
      });
    }

    window.scrollTo(0, 0);
  }

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
