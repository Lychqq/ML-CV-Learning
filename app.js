
/* Responsive Master-Detail layout for mobile */
const style2 = document.createElement('style');
style2.innerHTML = `
  @media (max-width: 768px) {
    #view-references > div {
      flex-direction: column !important;
      height: auto !important;
    }
    .ref-sidebar {
      width: 100% !important;
      height: auto !important;
      border-right: none !important;
      padding-right: 0 !important;
      border-bottom: 2px solid #334155;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      max-height: 40vh;
    }
    #ref-detail-area {
      height: auto !important;
      padding-left: 0 !important;
    }
  }
`;
document.head.appendChild(style2);

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


  // Render a code block for references (plain code, runnable via pyodide)
  function renderCodeBlock(block, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'ref-entry'; // runcode.js expects this
    wrapper.style.marginBottom = '2rem';

    wrapper.innerHTML = `
      <pre class="ref-code" style="background: #1e293b; padding: 1rem; border-radius: 6px; overflow-x: auto; color: #e2e8f0; font-family: monospace;"><code>${escapeHtml(block.initialCode)}</code></pre>
      <button class="ref-run-btn" style="margin-top: 0.5rem; background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: bold;">▶ Запустить код</button>
      <div class="ref-output" style="display: none; background: #0f172a; color: #a7f3d0; padding: 1rem; border-radius: 6px; margin-top: 0.5rem; font-family: monospace; white-space: pre-wrap;"></div>
    `;

    container.appendChild(wrapper);

    if (window.initRefRunButtons) {
      window.initRefRunButtons(wrapper);
    }
  }

  function renderReferencesList() {

    if (typeof REFERENCES === 'undefined' || !referencesList) return;

    // Group references by library
    var libs = {};
    REFERENCES.forEach(function(r) {
      if (!libs[r.library]) libs[r.library] = [];
      libs[r.library].push(r);
    });

    // Create Master-Detail layout
    let html = '<div style="display: flex; gap: 2rem; align-items: flex-start; height: calc(100vh - 150px);">';

    // LEFT SIDEBAR (Menu for libraries and their functions)
    html += '<div class="ref-sidebar" style="width: 320px; flex-shrink: 0; overflow-y: auto; height: 100%; border-right: 1px solid #334155; padding-right: 1rem;">';
    html += '<h3 style="margin-top: 0; color: #e2e8f0; border-bottom: 2px solid #334155; padding-bottom: 0.5rem; margin-bottom: 1rem;">Справочник команд</h3>';

    Object.keys(libs).forEach(function(libName) {
      html += '<div class="ref-lib-section" style="margin-bottom: 0.5rem;">';
      html += '<button class="ref-lib-btn" data-lib="' + escapeHtml(libName) + '" style="width: 100%; text-align: left; background: #1e293b; border: 1px solid #334155; padding: 0.75rem 1rem; border-radius: 6px; color: white; cursor: pointer; transition: background 0.2s; font-weight: bold; display: flex; justify-content: space-between;">';
      html += '<span>' + escapeHtml(libName) + '</span><span class="chevron">▼</span></button>';

      // List of functions (hidden by default)
      html += '<ul class="ref-func-list" id="ref-list-' + escapeHtml(libName).replace(/[^a-zA-Z]/g, '') + '" style="list-style: none; padding: 0.5rem 0 0 0.5rem; margin: 0; display: none;">';
      libs[libName].forEach(function(r) {
        html += '<li style="margin-bottom: 0.2rem;">';
        html += '<button class="ref-func-item" data-ref-id="' + r.id + '" style="width: 100%; text-align: left; background: transparent; border: none; padding: 0.5rem 0.5rem; border-radius: 4px; color: #94a3b8; cursor: pointer; transition: all 0.2s; font-size: 0.95rem; font-family: monospace; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + escapeHtml(r.title) + '</button>';
        html += '</li>';
      });
      html += '</ul>';
      html += '</div>';
    });
    html += '</div>';

    // RIGHT CONTENT (Detail view)
    html += '<div id="ref-detail-area" style="flex-grow: 1; overflow-y: auto; height: 100%; padding-left: 1rem;">';
    html += '<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #64748b; text-align: center;">';
    html += '<svg style="width: 64px; height: 64px; margin-bottom: 1rem; opacity: 0.5;" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>';
    html += '<h3>Выберите команду слева</h3><p>Нажмите на категорию библиотеки, чтобы раскрыть список функций и методов, затем выберите нужную для просмотра деталей и примеров кода.</p>';
    html += '</div>';
    html += '</div></div>';

    referencesList.innerHTML = html;

    // Logic to render function details directly into the right area (no view switching)
    const renderFuncDetail = function(refId) {
      const area = document.getElementById('ref-detail-area');
      const ref = typeof REFERENCES !== 'undefined' && REFERENCES.find(function (r) { return r.id === refId; });
      if (!ref) return;

      let content = '<h2 style="margin-top: 0; margin-bottom: 5px; font-size: 2rem;">' + escapeHtml(ref.title) + ' <span style="font-size: 0.5em; color: #64748b; font-weight: normal; vertical-align: middle; background: #1e293b; padding: 2px 8px; border-radius: 12px;">' + escapeHtml(ref.library) + '</span></h2>';
      content += '<p style="color: #94a3b8; font-style: italic; margin-bottom: 30px;">' + escapeHtml(ref.shortDesc) + '</p>';
      content += ref.theory;

      area.innerHTML = content;
      area.scrollTo(0, 0);

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
        window.MathJax.typesetPromise([area]).catch(console.error);
      }
    };

    // Bind Accordion Clicks
    referencesList.querySelectorAll('.ref-lib-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        const list = btn.nextElementSibling;
        const chevron = btn.querySelector('.chevron');
        if (list.style.display === 'none') {
          list.style.display = 'block';
          btn.style.background = '#334155';
          chevron.textContent = '▲';
        } else {
          list.style.display = 'none';
          btn.style.background = '#1e293b';
          chevron.textContent = '▼';
        }
      });
    });

    // Bind Function Clicks
    referencesList.querySelectorAll('.ref-func-item').forEach(function(btn) {
      btn.addEventListener('click', function() {
        referencesList.querySelectorAll('.ref-func-item').forEach(b => {
            b.style.color = '#94a3b8';
            b.style.background = 'transparent';
        });
        btn.style.color = '#ffffff';
        btn.style.background = '#2563eb';
        renderFuncDetail(btn.dataset.refId);

        // On mobile, optionally scroll to content
        if (window.innerWidth <= 768) {
           document.getElementById('ref-detail-area').scrollIntoView({behavior: 'smooth'});
        }
      });
    });

    // Open first library accordion by default
    const firstLibBtn = referencesList.querySelector('.ref-lib-btn');
    if(firstLibBtn) firstLibBtn.click();
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
