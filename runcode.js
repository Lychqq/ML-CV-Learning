// Запуск примеров кода из справочников в браузере через Pyodide (Python в WebAssembly)
(function () {
  var PYODIDE_VERSION = '0.27.4';
  var PYODIDE_BASE = 'https://cdn.jsdelivr.net/pyodide/v' + PYODIDE_VERSION + '/full/';
  var pyodideInstance = null;
  var pyodideLoadPromise = null;

  function getCodeAndOutput(btn) {
    var entry = btn.closest('.ref-entry');
    if (!entry) return null;
    var codeEl = entry.querySelector('.ref-code code');
    var outputEl = entry.querySelector('.ref-output');
    if (!codeEl || !outputEl) return null;
    return { code: codeEl.textContent.trim(), outputEl: outputEl };
  }

  function showOutput(el, text, isError) {
    el.style.display = 'block';
    el.textContent = text;
    el.className = 'ref-output' + (isError ? ' ref-output-error' : '');
  }

  function loadPyodideScript() {
    return new Promise(function (resolve, reject) {
      if (window.loadPyodide) {
        resolve();
        return;
      }
      var s = document.createElement('script');
      s.src = PYODIDE_BASE + 'pyodide.js';
      s.async = true;
      s.onload = resolve;
      s.onerror = function () { reject(new Error('Не удалось загрузить Pyodide')); };
      document.head.appendChild(s);
    });
  }

  function ensurePyodide() {
    if (pyodideLoadPromise) return pyodideLoadPromise;
    pyodideLoadPromise = loadPyodideScript().then(function () {
      return window.loadPyodide({ indexURL: PYODIDE_BASE });
    }).then(function (pyodide) {
      return pyodide.loadPackage(['numpy', 'pandas', 'scipy', 'matplotlib']).then(function () { return pyodide; });
    });
    return pyodideLoadPromise;
  }

  function buildPreamble(code) {
    var lines = [];
    if (!/import\s+numpy\b/.test(code) && !/from\s+numpy\b/.test(code)) {
      lines.push('import numpy as np');
    }
    if (!/import\s+pandas\b/.test(code) && !/from\s+pandas\b/.test(code)) {
      lines.push('import pandas as pd');
    }
    return lines.length ? lines.join('\n') + '\n' : '';
  }

  function runCode(code, outputEl, btn) {
    if (!code) {
      showOutput(outputEl, 'Нет кода для запуска.', true);
      return;
    }
    var wasDisabled = btn.disabled;
    btn.disabled = true;
    showOutput(outputEl, 'Загрузка Python (Pyodide)… При первом запуске может занять 10–30 сек.');

    ensurePyodide().then(function (pyodide) {
      pyodideInstance = pyodide;
      var needsSklearn = /sklearn|from\s+sklearn|import\s+sklearn/.test(code);
      if (needsSklearn) showOutput(outputEl, 'Загрузка scikit-learn… (первый раз ~30 сек)');
      var installSklearn = needsSklearn ? pyodide.loadPackage('scikit-learn').then(function () { return pyodide; }).catch(function (e) {
        return pyodide;
      }) : Promise.resolve(pyodide);
      return installSklearn;
    }).then(function (pyodide) {
      showOutput(outputEl, 'Выполнение…');
      var out = [];
      try {
        pyodide.setStdout({ batched: function (s) { out.push(s); } });
        pyodide.setStderr({ batched: function (s) { out.push(s); } });
      } catch (e) {}
      var preamble = buildPreamble(code);
      var fullCode = preamble + code;
      return pyodide.runPythonAsync(fullCode).then(function (result) {
        var text = out.join('').trim();
        if (result !== undefined && result !== null) {
          try {
            var repr = result.toString();
            if (repr && repr !== 'undefined' && repr !== 'None') text += (text ? '\n' : '') + repr;
          } catch (e) {}
        }
        showOutput(outputEl, text || '(вывод пуст)');
      }).catch(function (err) {
        var captured = out.join('').trim();
        var msg = (err && err.message) ? err.message : (err ? String(err) : 'Неизвестная ошибка');
        if (captured) msg = captured + (msg ? '\n\n' + msg : '');
        if (/No module named 'torch'/.test(msg) || (/name 'nn' is not defined|name 'torch' is not defined/.test(msg) && /torch|\.nn\.|nn\./.test(code))) msg = 'Этот пример нужно запускать в Python (Jupyter/IDE) с установленным PyTorch:\npip install torch';
        else if (/No module named 'cv2'/.test(msg)) msg = 'Этот пример нужно запускать в Python (Jupyter/IDE) с установленным OpenCV:\npip install opencv-python';
        else if (/No module named 'sklearn'|ModuleNotFoundError.*scikit-learn/.test(msg)) msg = 'Нажмите «Запустить» ещё раз (загрузка scikit-learn). Или: pip install scikit-learn';
        else if (/ImportError|ModuleNotFoundError/.test(msg) && /cannot import name/.test(msg)) msg = 'Функция/класс не найден в текущей версии scikit-learn.\nВозможно, требуется sklearn ≥ 1.4.\n\n' + msg;
        else if (/Failed to fetch|NetworkError|Load failed|Ошибка загрузки/.test(msg)) msg = 'Не удалось загрузить Pyodide. Проверьте интернет и откройте страницу по HTTP/HTTPS (не file://). Попробуйте ещё раз.';
        showOutput(outputEl, msg, true);
      }).then(function () {
        btn.disabled = wasDisabled;
      }, function () {
        btn.disabled = wasDisabled;
      });
    }).catch(function (err) {
      var msg = (err && err.message) ? err.message : String(err);
      if (/Failed to fetch|NetworkError|Load failed/.test(msg)) msg = 'Не удалось загрузить Pyodide. Проверьте интернет. Запускайте страницу через сервер (не file://).';
      showOutput(outputEl, 'Ошибка загрузки: ' + msg, true);
      btn.disabled = wasDisabled;
    });
  }

  function initRefRunButtons(container) {
    var root = container || document;
    root.querySelectorAll('.ref-run-btn').forEach(function (btn) {
      if (btn.dataset.runcodeBound) return;
      btn.dataset.runcodeBound = '1';
      btn.addEventListener('click', function () {
        var data = getCodeAndOutput(btn);
        if (data) runCode(data.code, data.outputEl, btn);
      });
    });
  }

  window.initRefRunButtons = initRefRunButtons;
})();
