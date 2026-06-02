window.REFERENCES = [
  {
    "id": "numpy-np-array-0",
    "library": "NumPy",
    "title": "np.array()",
    "shortDesc": "Создаёт массив ndarray из списка Python.",
    "theory": "<div style='background-color: #064e3b; border-left: 4px solid #10b981; padding: 15px; margin: 0 0 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #34d399;'>🧠 Объяснение для чайников:</h4><p style='margin: 0; font-size: 1rem; color: #ecfdf5;'>Аналогия: Представьте, что вы упаковываете рыхлый песок (обычный список Python) в твёрдый кирпич (массив NumPy). С кирпичом гораздо проще и быстрее строить (проводить вычисления).</p></div><div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Создаёт массив ndarray из списка Python.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: object (обязательный — список или вложенные списки), dtype=None (тип элементов — подбирается автоматически), copy=True, order='K', ndmin=0. Возвращает ndarray. Для 2D передаёте список списков; если в данных есть float — dtype станет float64. Нюанс: вложенные списки должны иметь одинаковую длину по каждому уровню.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-array-0-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-array-0-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-array-0-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.array.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.array([1, 2, 3])\nprint(np.array([[1,2],[3,4]]))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-array-0-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.array([[1,2],[3,4]])\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-array-0-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.array([[1,2],[3,4]])\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-array-0-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-zeros-1",
    "library": "NumPy",
    "title": "np.zeros()",
    "shortDesc": "Массив из нулей заданной формы.",
    "theory": "<div style='background-color: #064e3b; border-left: 4px solid #10b981; padding: 15px; margin: 0 0 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #34d399;'>🧠 Объяснение для чайников:</h4><p style='margin: 0; font-size: 1rem; color: #ecfdf5;'>Аналогия: Как чистый лист бумаги в клетку, который вы заготовили заранее, чтобы потом быстро вписывать в него результаты вычислений.</p></div><div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Массив из нулей заданной формы. Форма — кортеж: (3, 4) значит 3 строки, 4 столбца.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: shape (обязательный), dtype=float64, order='C'. Возвращает ndarray. По умолчанию тип float64 — для целых укажите dtype=np.int32. Вызов всегда через np.zeros(...), не от массива.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-zeros-1-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-zeros-1-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-zeros-1-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.zeros.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.zeros((3, 4)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-zeros-1-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.zeros((3, 4))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-zeros-1-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.zeros((3, 4))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-zeros-1-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-ones-2",
    "library": "NumPy",
    "title": "np.ones()",
    "shortDesc": "Массив из единиц.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Массив из единиц. Аналогично zeros: shape — кортеж размеров, dtype по умолчанию float64. Удобно для инициализации весов или масок перед заполнением.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-ones-2-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-ones-2-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-ones-2-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ones.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.ones((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-ones-2-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.ones((2, 3))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-ones-2-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.ones((2, 3))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-ones-2-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-full-3",
    "library": "NumPy",
    "title": "np.full()",
    "shortDesc": "Массив заданной формы, все элементы равны fill_value (здесь 7).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Массив заданной формы, все элементы равны fill_value (здесь 7).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: shape, fill_value, dtype=None. Если fill_value — целое и dtype не указан, тип будет int. Полезно для константных матриц или заполнения \"пустышкой\".</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-full-3-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-full-3-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-full-3-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.full.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.full((2, 2), 7))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-full-3-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.full((2, 2), 7)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-full-3-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.full((2, 2), 7)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-full-3-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-eye-4",
    "library": "NumPy",
    "title": "np.eye()",
    "shortDesc": "Единичная матрица: на главной диагонали 1, остальное 0.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Единичная матрица: на главной диагонали 1, остальное 0.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: N (размер), M=None (если задать — прямоугольная матрица), k=0 (сдвиг диагонали: k>0 — выше главной, k<0 — ниже). Возвращает 2D массив. Используется в линейной алгебре (обратная, системы).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-eye-4-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-eye-4-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-eye-4-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.eye.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.eye(3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-eye-4-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.eye(3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-eye-4-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.eye(3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-eye-4-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-arange-5",
    "library": "NumPy",
    "title": "np.arange()",
    "shortDesc": "Аналог range(), но возвращает массив: [0, 2, 4, 6, 8].",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Аналог range(), но возвращает массив: [0, 2, 4, 6, 8].</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: start (по умолчанию 0), stop (обязательный, не входит в результат!), step=1, dtype=None. Из-за погрешности float лучше для дробных шагов использовать np.linspace.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-arange-5-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-arange-5-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-arange-5-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.arange.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.arange(0, 10, 2))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-arange-5-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.arange(0, 10, 2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-arange-5-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.arange(0, 10, 2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-arange-5-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-linspace-6",
    "library": "NumPy",
    "title": "np.linspace()",
    "shortDesc": "Равномерно распределённые числа от start до stop включительно (если endpoint=True).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Равномерно распределённые числа от start до stop включительно (если endpoint=True). Здесь 5 точек: [0., 0.25, 0.5, 0.75, 1.].</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: start, stop, num=50 (число точек), endpoint=True, retstep=False, dtype=None. Идеально для сеток по оси (графики, выборка).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-linspace-6-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-linspace-6-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-linspace-6-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linspace.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linspace(0, 1, 5))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linspace-6-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.linspace(0, 1, 5)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linspace-6-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.linspace(0, 1, 5)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linspace-6-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-empty-7",
    "library": "NumPy",
    "title": "np.empty()",
    "shortDesc": "Массив заданной формы без инициализации ячеек — в памяти остаётся \"мусор\".",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Массив заданной формы без инициализации ячеек — в памяти остаётся \"мусор\". Быстрее zeros/ones, но значения непредсказуемы до записи. Используйте, когда сразу заполняете массив целиком (избегая лишнего обнуления).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-empty-7-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-empty-7-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-empty-7-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.empty.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.empty((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-empty-7-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.empty((2, 3))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-empty-7-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.empty((2, 3))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-empty-7-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-copy-8",
    "library": "NumPy",
    "title": "np.copy()",
    "shortDesc": "Создаёт копию массива a.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Создаёт копию массива a. Изменения в копии не затрагивают исходный массив. Параметр order='K'. Если нужна копия с другой раскладкой в памяти — order='C' или 'F'.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-copy-8-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-copy-8-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-copy-8-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.copy.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(np.copy(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-copy-8-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.copy(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-copy-8-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.copy(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-copy-8-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-rand-9",
    "library": "NumPy",
    "title": "np.random.rand()",
    "shortDesc": "Случайные числа из равномерного распределения на [0, 1).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Случайные числа из равномерного распределения на [0, 1). Форма задаётся отдельными аргументами: rand(d0, d1, d2, ...). Возвращает массив формы (2, 3). Не передавайте кортеж: rand((2,3)) даст ошибку интерпретации. Для воспроизводимости перед этим вызовите np.random.seed(42).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-rand-9-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-rand-9-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-rand-9-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.rand.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.rand(2, 3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-rand-9-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.rand(2, 3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-rand-9-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.rand(2, 3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-rand-9-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-randn-10",
    "library": "NumPy",
    "title": "np.random.randn()",
    "shortDesc": "Стандартное нормальное распределение (среднее 0, дисперсия 1).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартное нормальное распределение (среднее 0, дисперсия 1). Форма — отдельные аргументы, как у rand. Используется для инициализации весов нейросетей, генерации шума.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-randn-10-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-randn-10-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-randn-10-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.randn.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.randn(2, 3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randn-10-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.randn(2, 3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randn-10-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.randn(2, 3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randn-10-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-randint-11",
    "library": "NumPy",
    "title": "np.random.randint()",
    "shortDesc": "Случайные целые числа.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Случайные целые числа. low (включительно), high (не входит!) — диапазон; size — число или кортеж формы. Здесь числа от 0 до 9, массив 3×4. Если передать только high — low считается 0. Возвращает int по умолчанию (платформозависимо).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-randint-11-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-randint-11-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-randint-11-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.randint.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.random.randint(0, 10, size=(3, 4))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randint-11-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.randint(0, 10, size=(3, 4))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randint-11-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.randint(0, 10, size=(3, 4))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randint-11-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-random-12",
    "library": "NumPy",
    "title": "np.random.random()",
    "shortDesc": "Равномерное [0, 1).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Равномерное [0, 1). В отличие от rand, размер задаётся одним числом или кортежем: random((2, 3)) или random(6). Удобно когда форма в переменной: random(shape).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-random-12-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-random-12-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-random-12-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.random.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.random((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-random-12-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.random((2, 3))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-random-12-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.random((2, 3))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-random-12-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-choice-13",
    "library": "NumPy",
    "title": "np.random.choice()",
    "shortDesc": "Случайная выборка из массива или из range(int).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Случайная выборка из массива или из range(int).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: a (массив или int), size=None (число или форма), replace=True (с возвратом или без), p=None (вероятности элементов). Возвращает массив размера size. Для replace=False размер не может быть больше длины a.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-choice-13-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-choice-13-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-choice-13-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.choice.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.random.choice([1, 2, 3], size=5)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-choice-13-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.choice([1, 2, 3], size=5)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-choice-13-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.choice([1, 2, 3], size=5)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-choice-13-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-shuffle-14",
    "library": "NumPy",
    "title": "np.random.shuffle()",
    "shortDesc": "Перемешивает массив x по первой оси на месте (исходный массив меняется).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Перемешивает массив x по первой оси на месте (исходный массив меняется). Возвращает None. Для 1D перемешиваются элементы; для 2D — порядок строк. Чтобы не портить исходный массив, используйте np.random.permutation(x) — он возвращает новую перемешанную копию.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-shuffle-14-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-shuffle-14-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-shuffle-14-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.shuffle.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\nprint(np.random.shuffle(x))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-shuffle-14-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.shuffle(x)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-shuffle-14-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.shuffle(x)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-shuffle-14-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-random-seed-15",
    "library": "NumPy",
    "title": "np.random.seed()",
    "shortDesc": "Устанавливает начальное состояние генератора случайных чисел.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Устанавливает начальное состояние генератора случайных чисел. Один и тот же seed даёт одну и ту же последовательность. Вызывайте один раз в начале скрипта (или в начале цикла экспериментов) для воспроизводимости результатов. Число 42 — произвольное, любое фиксированное подойдёт.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-random-seed-15-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-random-seed-15-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-random-seed-15-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.Generator.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.seed(42))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-seed-15-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.random.seed(42)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-seed-15-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.random.seed(42)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-seed-15-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-shape-16",
    "library": "NumPy",
    "title": "a.shape",
    "shortDesc": "Кортеж размеров по осям.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Кортеж размеров по осям. Для матрицы 3×4 вернёт (3, 4). Это атрибут — вызывается без скобок: a.shape, не a.shape(). Для 1D массив из n элементов даст (n,). Удобно проверять размерности перед операциями.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-shape-16-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-shape-16-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-shape-16-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-shape-16-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.shape\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-shape-16-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.shape\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-shape-16-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-ndim-17",
    "library": "NumPy",
    "title": "a.ndim",
    "shortDesc": "Число измерений (осей).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Число измерений (осей). 1 — вектор, 2 — матрица, 3 — тензор и т.д. Атрибут, без скобок. len(a.shape) даёт то же значение.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-ndim-17-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-ndim-17-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-ndim-17-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.ndim)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-ndim-17-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.ndim\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-ndim-17-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.ndim\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-ndim-17-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-size-18",
    "library": "NumPy",
    "title": "a.size",
    "shortDesc": "Общее число элементов в массиве (произведение всех размеров shape).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Общее число элементов в массиве (произведение всех размеров shape). Атрибут. Эквивалентно np.prod(a.shape).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-size-18-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-size-18-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-size-18-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.size)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-size-18-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.size\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-size-18-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.size\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-size-18-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-dtype-19",
    "library": "NumPy",
    "title": "a.dtype",
    "shortDesc": "Тип данных элементов: np.float64, np.int32, np.bool_ и т.д.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Тип данных элементов: np.float64, np.int32, np.bool_ и т.д. Только чтение. Важно при смешивании с другими типами или при сохранении в файл.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-dtype-19-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-dtype-19-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-dtype-19-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.dtype)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-dtype-19-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.dtype\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-dtype-19-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.dtype\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-dtype-19-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-astype-20",
    "library": "NumPy",
    "title": "a.astype()",
    "shortDesc": "Метод: возвращает новый массив с приведением к типу dtype.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Метод: возвращает новый массив с приведением к типу dtype. Исходный массив не меняется.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: dtype (обязательный), copy=True. При приведении float → int дробная часть отбрасывается (не округление!).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-astype-20-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-astype-20-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-astype-20-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.astype.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.astype(np.float32))",
        "solution": "",
        "hints": [],
        "id": "numpy-a-astype-20-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.astype(np.float32)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-astype-20-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.astype(np.float32)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-astype-20-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-t-21",
    "library": "NumPy",
    "title": "a.T",
    "shortDesc": "Транспонирование: строки и столбцы меняются местами.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Транспонирование: строки и столбцы меняются местами. Для 2D (матрица) — атрибут, без скобок. Возвращает вид (view), где возможно — без копии данных. Для 1D массив не меняется (тот же вид).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-t-21-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-t-21-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-t-21-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.T.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(a.T)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-t-21-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.T\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-t-21-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.T\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-t-21-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-0-na-i-j-2d-22",
    "library": "NumPy",
    "title": "a[0]\\na[i, j]  # 2D",
    "shortDesc": "Один элемент: a[0] — первый (индексы с нуля); для 2D a[i, j] — элемент в строке i, столбце j.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Один элемент: a[0] — первый (индексы с нуля); для 2D a[i, j] — элемент в строке i, столбце j. Отрицательный индекс: a[-1] — последний элемент. Возвращает скаляр (тип np — int64, float64 и т.д.).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-0-na-i-j-2d-22-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-0-na-i-j-2d-22-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-0-na-i-j-2d-22-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\na[0]\nprint(\"a[i, j]  # 2D\")",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-na-i-j-2d-22-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'[i, j]  # 2D\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-na-i-j-2d-22-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'[i, j]  # 2D\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-na-i-j-2d-22-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-1-4-na-0-3-1-4-2d-23",
    "library": "NumPy",
    "title": "a[1:4]\\na[0:3, 1:4]  # 2D срезы",
    "shortDesc": "Срезы: start:stop:step.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Срезы: start:stop:step. stop не входит! a[1:4] — индексы 1, 2, 3. Для 2D a[0:3, 1:4] — подматрица: строки 0,1,2 и столбцы 1,2,3. Пропуск start/stop: a[:4] — с начала, a[2:] — до конца. step: a[::2] — каждый второй. Срез возвращает вид (view), изменения влияют на исходный массив.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-1-4-na-0-3-1-4-2d-23-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-1-4-na-0-3-1-4-2d-23-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-1-4-na-0-3-1-4-2d-23-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\na[1:4]\nprint(\"a[0:3, 1:4]  # 2D срезы\")",
        "solution": "",
        "hints": [],
        "id": "numpy-a-1-4-na-0-3-1-4-2d-23-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'[0:3, 1:4]  # 2D срезы\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-1-4-na-0-3-1-4-2d-23-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'[0:3, 1:4]  # 2D срезы\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-1-4-na-0-3-1-4-2d-23-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-a-0-24",
    "library": "NumPy",
    "title": "a[a > 0]",
    "shortDesc": "Булева маска: в скобках выражение, дающее массив булевых той же формы (a > 0, a == 5 и т.д.).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Булева маска: в скобках выражение, дающее массив булевых той же формы (a > 0, a == 5 и т.д.). Возвращается 1D массив из элементов, где условие True. Удобно фильтровать данные. Результат — копия, не вид.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-a-0-24-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-a-0-24-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-a-0-24-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(\"a[a > 0]\")",
        "solution": "",
        "hints": [],
        "id": "numpy-a-a-0-24-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'[a > 0]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-a-0-24-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'[a > 0]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-a-0-24-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-0-2-4-25",
    "library": "NumPy",
    "title": "a[[0, 2, 4]]",
    "shortDesc": "Fancy indexing: передаёте список или массив индексов — получаете массив из выбранных элементов (в 1D) или строк (в 2D).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Fancy indexing: передаёте список или массив индексов — получаете массив из выбранных элементов (в 1D) или строк (в 2D). a[[0, 2, 4]] — элементы с индексами 0, 2, 4. Результат — копия. Порядок в списке может быть любым, повторения допустимы.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-0-2-4-25-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-0-2-4-25-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-0-2-4-25-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(\"a[[0, 2, 4]]\")",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-2-4-25-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'[[0, 2, 4]]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-2-4-25-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'[[0, 2, 4]]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-2-4-25-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-reshape-26",
    "library": "NumPy",
    "title": "a.reshape()",
    "shortDesc": "Метод: придаёт массиву новую форму.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Метод: придаёт массиву новую форму. Общее число элементов должно совпадать (например 3×4 = 12 и 6×2 = 12). Параметр shape можно передать отдельными аргументами или кортежем. reshape(-1) — \"развернуть\" в 1D (одна строка). reshape(-1, 2) — неизвестное число строк, 2 столбца. Возвращает вид, если память непрерывна; иначе копию.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-reshape-26-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-reshape-26-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-reshape-26-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.reshape.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(\"a.reshape(6, 2\"))",
        "solution": "",
        "hints": [],
        "id": "numpy-a-reshape-26-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.reshape(6, 2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-reshape-26-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.reshape(6, 2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-reshape-26-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-flatten-27",
    "library": "NumPy",
    "title": "a.flatten()",
    "shortDesc": "Метод: возвращает копию массива, сведённую к одному измерению (все элементы подряд, порядок C — по строкам).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Метод: возвращает копию массива, сведённую к одному измерению (все элементы подряд, порядок C — по строкам). Всегда копия. Для вида используйте ravel() (но ravel может вернуть вид или копию).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-flatten-27-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-flatten-27-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-flatten-27-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.flatten.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(\"a.flatten(\"))",
        "solution": "",
        "hints": [],
        "id": "numpy-a-flatten-27-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.flatten()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-flatten-27-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.flatten()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-flatten-27-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-concatenate-28",
    "library": "NumPy",
    "title": "np.concatenate()",
    "shortDesc": "Склеивает массивы вдоль заданной оси.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Склеивает массивы вдоль заданной оси. Первый аргумент — последовательность массивов (кортеж или список). axis=0 — добавлять по строкам (вертикально); axis=1 — по столбцам (горизонтально). Размеры по остальным осям должны совпадать. Возвращает новый массив.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-concatenate-28-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-concatenate-28-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-concatenate-28-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.concatenate((a, b), axis=0)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-concatenate-28-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.concatenate((a, b), axis=0)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-concatenate-28-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.concatenate((a, b), axis=0)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-concatenate-28-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-vstack-29",
    "library": "NumPy",
    "title": "np.vstack()",
    "shortDesc": "vstack — вертикальное объединение (по оси 0): массивы ставятся друг под другом.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>vstack — вертикальное объединение (по оси 0): массивы ставятся друг под другом. hstack — горизонтальное (по оси 1): друг рядом. Удобные обёртки над concatenate. Для 1D массивов vstack сделает из них строки матрицы.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-vstack-29-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-vstack-29-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-vstack-29-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.vstack.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.vstack((a, b))\nprint(np.hstack((a, b)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-vstack-29-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.hstack((a, b))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-vstack-29-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.hstack((a, b))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-vstack-29-code-3"
      }
    ]
  },
  {
    "id": "numpy-a-b-na-b-30",
    "library": "NumPy",
    "title": "a + b\\na * b",
    "shortDesc": "Операторы +, -, *, /, ** применяются поэлементно (element-wise).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Операторы +, -, *, /, ** применяются поэлементно (element-wise). Для a * b каждый элемент умножается с соответствующим. Формы массивов должны быть совместимы: одинаковые или по правилам broadcasting (например массив (3,4) + массив (4,) — столбец повторяется по строкам). Результат — массив.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-a-b-na-b-30-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-a-b-na-b-30-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-a-b-na-b-30-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/basics.broadcasting.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\na + b\nprint(\"a * b\")",
        "solution": "",
        "hints": [],
        "id": "numpy-a-b-na-b-30-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a' * b\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-b-na-b-30-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\na = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a' * b\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-a-b-na-b-30-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-sqrt-31",
    "library": "NumPy",
    "title": "np.sqrt()",
    "shortDesc": "Универсальные функции (ufunc): один массив на вход, массив той же формы на выход.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Универсальные функции (ufunc): один массив на вход, массив той же формы на выход. np.sqrt(a) — корень из каждого элемента (для отрицательных — nan). np.abs(a) — модуль. Вызов через np., не через точку от массива. Другие: np.exp, np.log, np.sin, np.round.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-sqrt-31-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-sqrt-31-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-sqrt-31-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.sqrt(a)\nprint(np.abs(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sqrt-31-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.abs(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sqrt-31-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.abs(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sqrt-31-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-dot-32",
    "library": "NumPy",
    "title": "np.dot()",
    "shortDesc": "Матричное умножение.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Матричное умножение. Для 2D массивов: (A @ B)[i,j] = сумма по k A[i,k]*B[k,j]. Размеры: (n, k) @ (k, m) = (n, m). Оператор @ — то же для матриц. np.dot для 1D — скалярное произведение; для 2D — произведение матриц. Не путать с поэлементным умножением *.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-dot-32-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-dot-32-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-dot-32-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.dot.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.dot(A, B)\nprint(\"A @ B  # Python 3.5+\")",
        "solution": "",
        "hints": [],
        "id": "numpy-np-dot-32-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = A @ B  # Python 3.5+\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-dot-32-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = A @ B  # Python 3.5+\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-dot-32-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-inv-33",
    "library": "NumPy",
    "title": "np.linalg.inv()",
    "shortDesc": "Обратная матрица A⁻¹ такая, что A @ inv(A) ≈ I.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Обратная матрица A⁻¹ такая, что A @ inv(A) ≈ I. A должна быть квадратной и невырожденной (определитель ≠ 0). При плохой обусловленности возможны численные ошибки. Для решения систем лучше использовать solve.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-linalg-inv-33-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-linalg-inv-33-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-linalg-inv-33-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linalg.inv(A))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-inv-33-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.linalg.inv(A)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-inv-33-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.linalg.inv(A)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-inv-33-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-solve-34",
    "library": "NumPy",
    "title": "np.linalg.solve()",
    "shortDesc": "Решает систему линейных уравнений Ax = b.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Решает систему линейных уравнений Ax = b. Возвращает x.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: A (матрица коэффициентов), b (вектор или матрица правых частей). Численно устойчивее, чем x = inv(A) @ b. Если b 2D, решается несколько систем с разными правыми частями.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-linalg-solve-34-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-linalg-solve-34-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-linalg-solve-34-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.solve.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\nimport numpy as np\nprint(np.linalg.solve(A, b))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-solve-34-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.linalg.solve(A, b)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-solve-34-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "b = np.array([[5, 6], [7, 8]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.linalg.solve(A, b)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-solve-34-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-norm-35",
    "library": "NumPy",
    "title": "np.linalg.norm()",
    "shortDesc": "Норма вектора или матрицы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Норма вектора или матрицы. По умолчанию ord=None — L2-норма (евклидова).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: x, ord (например 2, 1, np.inf), axis (по какой оси считать). Для вектора norm(x) — длина. Для матрицы — норма Фробениуса.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-linalg-norm-35-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-linalg-norm-35-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-linalg-norm-35-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\nprint(np.linalg.norm(x))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-norm-35-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.linalg.norm(x)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-norm-35-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "x = np.array([1, 2, 3])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.linalg.norm(x)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-norm-35-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-sum-36",
    "library": "NumPy",
    "title": "np.sum()",
    "shortDesc": "Сумма и среднее арифметическое по всем элементам (или по оси).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сумма и среднее арифметическое по всем элементам (или по оси).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: a, axis=None (None — по всем элементам), dtype, keepdims. axis=0 — по столбцам (результат по строкам); axis=1 — по строкам. Вызов через np.sum(a), не a.sum() (хотя метод тоже есть).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-sum-36-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-sum-36-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-sum-36-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sum.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.sum(a)\nprint(np.mean(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sum-36-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.mean(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sum-36-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.mean(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sum-36-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-min-37",
    "library": "NumPy",
    "title": "np.min()",
    "shortDesc": "min/max — минимальное и максимальное значение; с axis — по оси.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>min/max — минимальное и максимальное значение; с axis — по оси. argmin/argmax — индекс первого минимума/максимума (в плоском виде, если axis не задан). Для 2D с axis=1 argmax по строкам даёт индекс максимума в каждой строке. Полезно для классификации (индекс класса).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-min-37-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-min-37-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-min-37-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.min.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.min(a)\nnp.max(a)\nnp.argmin(a)\nprint(np.argmax(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-min-37-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.argmax(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-min-37-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.argmax(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-min-37-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-std-38",
    "library": "NumPy",
    "title": "np.std()",
    "shortDesc": "Стандартное отклонение и дисперсия.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартное отклонение и дисперсия. Параметр ddof: ddof=0 (по умолчанию) — деление на N; ddof=1 — на N−1 (несмещённая оценка для выборки). axis — по какой оси считать. Для выборки из генеральной совокупности обычно ddof=1.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-std-38-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-std-38-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-std-38-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.std.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.std(a)\nprint(np.var(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-std-38-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.var(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-std-38-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.var(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-std-38-code-3"
      }
    ]
  },
  {
    "id": "numpy-import-numpy-as-np-e-39",
    "library": "NumPy",
    "title": "import numpy as np",
    "shortDesc": "Стандартный импорт: все функции вызываются через префикс np.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартный импорт: все функции вызываются через префикс np. (np.array, np.zeros и т.д.). NumPy — это модуль, не класс: не создаёте объект, а вызываете функции модуля. Сокращение \"np\" принято во всей документации и примерах.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-import-numpy-as-np-e-39-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-import-numpy-as-np-e-39-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-import-numpy-as-np-e-39-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/user/absolute_beginners.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport numpy as np",
        "solution": "",
        "hints": [],
        "id": "numpy-import-numpy-as-np-e-39-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = import numpy as np\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-import-numpy-as-np-e-39-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = import numpy as np\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-import-numpy-as-np-e-39-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-sort-e-40",
    "library": "NumPy",
    "title": "np.sort()",
    "shortDesc": "np.sort(a) — возвращает отсортированную копию массива; исходный массив не меняется.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>np.sort(a) — возвращает отсортированную копию массива; исходный массив не меняется. a.sort() — сортировка на месте (исходный массив перезаписывается), возвращает None. Параметр axis: по умолчанию -1 (последняя ось). Для 2D axis=0 сортирует каждую колонку, axis=1 — каждую строку. Порядок по возрастанию.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-sort-e-40-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-sort-e-40-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-sort-e-40-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sort.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nnp.sort(a)\nprint(\"a.sort(\"))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sort-e-40-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'a'.sort()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sort-e-40-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'a'.sort()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sort-e-40-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-argsort-e-41",
    "library": "NumPy",
    "title": "np.argsort()",
    "shortDesc": "Возвращает массив индексов, задающих порядок сортировки по возрастанию.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Возвращает массив индексов, задающих порядок сортировки по возрастанию. То есть a[np.argsort(a)] даёт отсортированный массив. Используется для сортировки по одному массиву и перестановки другого (например сортировка меток по оценкам). axis — по какой оси.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-argsort-e-41-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-argsort-e-41-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-argsort-e-41-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.argsort.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(np.argsort(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-argsort-e-41-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.argsort(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-argsort-e-41-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.argsort(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-argsort-e-41-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-where-e-42",
    "library": "NumPy",
    "title": "np.where()",
    "shortDesc": "Возвращает кортеж массивов индексов, где condition истинно.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Возвращает кортеж массивов индексов, где condition истинно. Для 1D один массив: np.where(a > 0) — индексы положительных элементов. Для 2D два массива (индексы строк и столбцов). Трёхаргументная форма: np.where(cond, x, y) — где cond истинно взять x, иначе y (поэлементно).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-where-e-42-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-where-e-42-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-where-e-42-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.where.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.where(condition))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-where-e-42-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.where(condition)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-where-e-42-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.where(condition)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-where-e-42-code-3"
      }
    ]
  },
  {
    "id": "numpy-np-unique-e-43",
    "library": "NumPy",
    "title": "np.unique()",
    "shortDesc": "Возвращает отсортированный массив уникальных значений.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Возвращает отсортированный массив уникальных значений.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: return_index (индексы первого вхождения), return_inverse (обратные индексы для восстановления), return_counts (сколько раз каждый элемент). Полезно для категориальных признаков и подсчёта уникальных меток.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-numpy-np-unique-e-43-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-numpy-np-unique-e-43-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-numpy-np-unique-e-43-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.unique.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\nprint(np.unique(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-unique-e-43-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = np.unique(a)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-unique-e-43-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "a = np.array([[1, 2], [3, 4]])\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = np.unique(a)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "numpy-np-unique-e-43-code-3"
      }
    ]
  },
  {
    "id": "pandas-import-pandas-as-pd-e-44",
    "library": "Pandas",
    "title": "import pandas as pd",
    "shortDesc": "Стандартный импорт: все классы и функции вызываются через pd.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартный импорт: все классы и функции вызываются через pd. (pd.DataFrame, pd.read_csv, pd.Series и т.д.). Сокращение \"pd\" принято во всей документации.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-import-pandas-as-pd-e-44-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-import-pandas-as-pd-e-44-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-import-pandas-as-pd-e-44-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://pandas.pydata.org/docs/getting_started/index.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\nimport pandas as pd",
        "solution": "",
        "hints": [],
        "id": "pandas-import-pandas-as-pd-e-44-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = import pandas as pd\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-import-pandas-as-pd-e-44-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = import pandas as pd\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-import-pandas-as-pd-e-44-code-3"
      }
    ]
  },
  {
    "id": "pandas-pd-dataframe-e-45",
    "library": "Pandas",
    "title": "pd.DataFrame()",
    "shortDesc": "DataFrame — таблица с именованными столбцами и индексом строк.",
    "theory": "<div style='background-color: #064e3b; border-left: 4px solid #10b981; padding: 15px; margin: 0 0 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #34d399;'>🧠 Объяснение для чайников:</h4><p style='margin: 0; font-size: 1rem; color: #ecfdf5;'>Аналогия: Это таблица Excel внутри Python. Строки - это записи, столбцы - это признаки (имя, возраст). Идеально для работы с любыми данными.</p></div><div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>DataFrame — таблица с именованными столбцами и индексом строк. Создание: из словаря (ключи — имена столбцов, значения — списки/массивы данных), из списка списков с указанием columns, из ndarray. index — метки строк (по умолчанию 0, 1, 2, ...). columns задаёт порядок и набор столбцов. Возвращает DataFrame.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-pd-dataframe-e-45-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-pd-dataframe-e-45-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-pd-dataframe-e-45-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.DataFrame({\"A\": [1, 2], \"B\": [3, 4]})\ndf = pd.DataFrame(data, columns=[\"x\", \"y\"], index=[0, 1])",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-dataframe-e-45-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df' = pd.DataFrame(data, columns=[\"x\", \"y\"], index=[0, 1])\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-dataframe-e-45-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df' = pd.DataFrame(data, columns=[\"x\", \"y\"], index=[0, 1])\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-dataframe-e-45-code-3"
      }
    ]
  },
  {
    "id": "pandas-pd-series-e-46",
    "library": "Pandas",
    "title": "pd.Series()",
    "shortDesc": "Series — одномерная структура с метками (индексом).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Series — одномерная структура с метками (индексом). data — список или массив; index — метки (по умолчанию 0, 1, 2, ...). Один столбец DataFrame по сути Series. Используется для одной переменной или для результата выборки одного столбца.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-pd-series-e-46-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-pd-series-e-46-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-pd-series-e-46-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.Series.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.Series([1, 2, 3], index=[\"a\", \"b\", \"c\"])",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-series-e-46-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = pd.Series([1, 2, 3], index=[\"a\", \"b\", \"c\"])\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-series-e-46-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = pd.Series([1, 2, 3], index=[\"a\", \"b\", \"c\"])\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-series-e-46-code-3"
      }
    ]
  },
  {
    "id": "pandas-pd-read-csv-e-47",
    "library": "Pandas",
    "title": "pd.read_csv()",
    "shortDesc": "Читает CSV в DataFrame.",
    "theory": "<div style='background-color: #064e3b; border-left: 4px solid #10b981; padding: 15px; margin: 0 0 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #34d399;'>🧠 Объяснение для чайников:</h4><p style='margin: 0; font-size: 1rem; color: #ecfdf5;'>Аналогия: Открывашка для консервов. Она берёт сырой текстовый файл с данными, разделёнными запятыми, и элегантно выкладывает его на тарелку в виде таблицы DataFrame.</p></div><div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Читает CSV в DataFrame.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: filepath_or_buffer (путь или URL), sep=\",\" (разделитель), header=0 (какая строка — заголовки; None если заголовков нет), encoding=\"utf-8\" (для кириллицы часто utf-8 или cp1251), usecols (какие столбцы читать), na_values (что считать пропуском). Возвращает DataFrame. Для больших файлов: chunksize — читать по кускам.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-pd-read-csv-e-47-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-pd-read-csv-e-47-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-pd-read-csv-e-47-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.read_csv(\"file.csv\", sep=\",\", header=0, encoding=\"utf-8\")",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-csv-e-47-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = pd.read_csv(\"file.csv\", sep=\",\", header=0, encoding=\"utf-8\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-csv-e-47-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = pd.read_csv(\"file.csv\", sep=\",\", header=0, encoding=\"utf-8\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-csv-e-47-code-3"
      }
    ]
  },
  {
    "id": "pandas-pd-read-excel-e-48",
    "library": "Pandas",
    "title": "pd.read_excel()",
    "shortDesc": "Читает лист Excel.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Читает лист Excel. sheet_name — номер листа (0, 1, ...) или имя листа (строка). Требует установленный openpyxl (для .xlsx) или xlrd (для .xls). Возвращает DataFrame. Несколько листов: sheet_name=None возвращает словарь {имя_листа: DataFrame}.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-pd-read-excel-e-48-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-pd-read-excel-e-48-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-pd-read-excel-e-48-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.read_excel(\"file.xlsx\", sheet_name=0)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-excel-e-48-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = pd.read_excel(\"file.xlsx\", sheet_name=0)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-excel-e-48-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = pd.read_excel(\"file.xlsx\", sheet_name=0)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-excel-e-48-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-to-csv-e-49",
    "library": "Pandas",
    "title": "df.to_csv()",
    "shortDesc": "Методы DataFrame: сохраняют таблицу в файл.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Методы DataFrame: сохраняют таблицу в файл. to_csv: sep=\",\", index=True (писать ли индекс), encoding. to_excel: нужен openpyxl. Возвращают None. Для больших данных to_csv быстрее и компактнее.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-to-csv-e-49-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-to-csv-e-49-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-to-csv-e-49-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_csv.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "out = torch.tensor([1.0, 2.0])\nimport pandas as pd\nimport numpy as np\ndf.to_csv(\"out.csv\")\nprint(df.to_excel(\"out.xlsx\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-to-csv-e-49-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "out = torch.tensor([1.0, 2.0])\nimport pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.to_excel(\"out.xlsx\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-to-csv-e-49-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.to_excel(\"out.xlsx\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-to-csv-e-49-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-head-e-50",
    "library": "Pandas",
    "title": "df.head()",
    "shortDesc": "Методы: первые или последние n строк таблицы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Методы: первые или последние n строк таблицы. head(n=5), tail(n=5). Удобно для быстрого просмотра без вывода всего датасета. Возвращают DataFrame.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-head-e-50-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-head-e-50-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-head-e-50-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.head(5)\nprint(\"df.tail(5\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-head-e-50-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.tail(5)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-head-e-50-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.tail(5)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-head-e-50-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51",
    "library": "Pandas",
    "title": "df.shape\\ndf.columns\\ndf.dtypes",
    "shortDesc": "Атрибуты (без скобок).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Атрибуты (без скобок). shape — кортеж (число строк, число столбцов). columns — индекс с именами столбцов (можно перебирать или df.columns = [\"a\",\"b\"]). dtypes — тип каждого столбца (int64, float64, object и т.д.).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.shape\ndf.columns\nprint(df.dtypes)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.dtypes\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.dtypes\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-info-e-52",
    "library": "Pandas",
    "title": "df.info()",
    "shortDesc": "info() — краткая сводка: число строк, список столбцов, типы, число непустых значений, использование памяти.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>info() — краткая сводка: число строк, список столбцов, типы, число непустых значений, использование памяти. describe() — статистика по числовым столбцам (count, mean, std, min, квантили, max). Для категориальных describe(include=\"object\"). Вызов: df.info(), df.describe().</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-info-e-52-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-info-e-52-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-info-e-52-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.info()\nprint(\"df.describe(\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-info-e-52-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.describe()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-info-e-52-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.describe()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-info-e-52-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-col-ndf-col-e-53",
    "library": "Pandas",
    "title": "df[\"col\"]\\ndf.col",
    "shortDesc": "Один столбец: возвращает Series.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Один столбец: возвращает Series. Синтаксис df[\"col\"] работает всегда (в т.ч. если имя с пробелами). df.col — только если имя столбца без пробелов и не конфликтует с методом. Результат — ссылка на данные; изменение может изменить исходный df (осторожно с присваиванием).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-col-ndf-col-e-53-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-col-ndf-col-e-53-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-col-ndf-col-e-53-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://pandas.pydata.org/docs/user_guide/indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf[\"col\"]\nprint(\"df.col\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col-ndf-col-e-53-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.col\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col-ndf-col-e-53-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.col\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col-ndf-col-e-53-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-col1-col2-e-54",
    "library": "Pandas",
    "title": "df[[\"col1\", \"col2\"]]",
    "shortDesc": "Несколько столбцов: передаёте список имён — возвращается DataFrame с этими столбцами в указанном порядке.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Несколько столбцов: передаёте список имён — возвращается DataFrame с этими столбцами в указанном порядке. Удобно для подмножества признаков или перестановки столбцов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-col1-col2-e-54-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-col1-col2-e-54-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-col1-col2-e-54-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://pandas.pydata.org/docs/user_guide/indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\nprint(df[[\"col1\", \"col2\"]])",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col1-col2-e-54-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'[[\"col1\", \"col2\"]]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col1-col2-e-54-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'[[\"col1\", \"col2\"]]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col1-col2-e-54-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55",
    "library": "Pandas",
    "title": "df.loc[0, \"A\"]\\ndf.loc[df[\"x\"] > 0]",
    "shortDesc": "Доступ по меткам (labels): loc[индекс_строки, индекс_столбца].",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Доступ по меткам (labels): loc[индекс_строки, индекс_столбца]. Одна метка — скаляр; срез — подтаблица. df.loc[df[\"x\"] > 0] — фильтр строк: оставить только те, где в столбце \"x\" значение больше 0. Можно передать список меток, срез меток или булев Series (длина как у индекса).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.loc[0, \"A\"]\nprint(df.loc[df[\"x\"] > 0])",
        "solution": "",
        "hints": [],
        "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.loc[df[\"x\"] > 0]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.loc[df[\"x\"] > 0]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-iloc-0-5-1-4-e-56",
    "library": "Pandas",
    "title": "df.iloc[0:5, 1:4]",
    "shortDesc": "Доступ по целочисленным позициям: iloc[позиция_строки, позиция_столбца].",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Доступ по целочисленным позициям: iloc[позиция_строки, позиция_столбца]. Работает как срезы в NumPy: 0:5 — строки 0,1,2,3,4. Удобно когда не важно имя столбца/индекса, важна только позиция. Отрицательные индексы — с конца.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-iloc-0-5-1-4-e-56-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-iloc-0-5-1-4-e-56-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-iloc-0-5-1-4-e-56-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\nprint(\"df.iloc[0:5, 1:4]\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-iloc-0-5-1-4-e-56-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.iloc[0:5, 1:4]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-iloc-0-5-1-4-e-56-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.iloc[0:5, 1:4]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-iloc-0-5-1-4-e-56-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-isna-e-57",
    "library": "Pandas",
    "title": "df.isna()",
    "shortDesc": "isna() — DataFrame той же формы с True там, где пропуск (NaN, None).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>isna() — DataFrame той же формы с True там, где пропуск (NaN, None). dropna() — удаляет строки (axis=0) или столбцы (axis=1) с пропусками. how=\"any\" — удалить если есть хотя бы один пропуск; how=\"all\" — только если все значения в строке/столбце пропуски. inplace=False — по умолчанию возвращает новый DataFrame.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-isna-e-57-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-isna-e-57-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-isna-e-57-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.isna()\ndf.dropna(axis=0, how=\"any\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-isna-e-57-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.dropna(axis=0, how=\"any\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-isna-e-57-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.dropna(axis=0, how=\"any\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-isna-e-57-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-fillna-e-58",
    "library": "Pandas",
    "title": "df.fillna()",
    "shortDesc": "Заполняет пропуски.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Заполняет пропуски. fillna(0) — константой 0. fillna(method=\"ffill\") — forward fill: предыдущее известное значение (по столбцу). method=\"bfill\" — backward fill. limit — максимум подряд заполняемых пропусков. Возвращает новый DataFrame (или меняет inplace=True).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-fillna-e-58-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-fillna-e-58-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-fillna-e-58-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.fillna.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.fillna(0)\ndf.fillna(method=\"ffill\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-fillna-e-58-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.fillna(method=\"ffill\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-fillna-e-58-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.fillna(method=\"ffill\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-fillna-e-58-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-drop-e-59",
    "library": "Pandas",
    "title": "df.drop()",
    "shortDesc": "drop(columns=[\"col\"]) — удалить столбец (столбцы).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>drop(columns=[\"col\"]) — удалить столбец (столбцы). drop(index=[...]) — удалить строки по меткам. drop_duplicates() — оставить уникальные строки (по всем столбцам или по subset=[\"col\"]). keep=\"first\" — какую дублирующую строку оставить. Возвращает новый DataFrame.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-drop-e-59-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-drop-e-59-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-drop-e-59-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.drop(columns=[\"col\"])\nprint(\"df.drop_duplicates(\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-drop-e-59-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.drop_duplicates()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-drop-e-59-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.drop_duplicates()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-drop-e-59-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-groupby-e-60",
    "library": "Pandas",
    "title": "df.groupby()",
    "shortDesc": "groupby(\"col\") — разбивает DataFrame на группы по значениям столбца \"col\".",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>groupby(\"col\") — разбивает DataFrame на группы по значениям столбца \"col\". Дальше вызывают агрегаты: .sum(), .mean(), .agg({\"other\": \"mean\", \"x\": \"sum\"}) — для каждого столбца своя функция. Результат — DataFrame с индексом по уникальным значениям \"col\". Несколько столбцов группировки: groupby([\"col1\", \"col2\"]).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-groupby-e-60-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-groupby-e-60-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-groupby-e-60-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.groupby(\"col\")\nprint(df.groupby(\"col\").agg({\"other\": \"mean\", \"x\": \"sum\"}))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-groupby-e-60-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.groupby(\"col\").agg({\"other\": \"mean\", \"x\": \"sum\"})\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-groupby-e-60-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.groupby(\"col\").agg({\"other\": \"mean\", \"x\": \"sum\"})\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-groupby-e-60-code-3"
      }
    ]
  },
  {
    "id": "pandas-df-mean-e-61",
    "library": "Pandas",
    "title": "df.mean()",
    "shortDesc": "Методы по умолчанию считают по столбцам (axis=0): каждая строка результата — одно число по столбцу.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Методы по умолчанию считают по столбцам (axis=0): каждая строка результата — одно число по столбцу. mean(), sum() — среднее и сумма; пропуски пропускаются. corr() — корреляционная матрица между числовыми столбцами. axis=1 — считать по строкам. Возвращают Series или DataFrame.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pandas-df-mean-e-61-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pandas-df-mean-e-61-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pandas-df-mean-e-61-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.mean.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.mean()\ndf.sum()\nprint(\"df.corr(\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-mean-e-61-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'df'.corr()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-mean-e-61-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'df'.corr()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pandas-df-mean-e-61-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62",
    "library": "scikit-learn",
    "title": "from sklearn.model_selection import trai",
    "shortDesc": "Функция разбивает данные на обучающую и тестовую выборки.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Функция разбивает данные на обучающую и тестовую выборки.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: X, y — признаки и целевая переменная (массивы или DataFrame); test_size — доля теста (0.2 = 20%) или целое число примеров; random_state — фиксирует разбиение для воспроизводимости; shuffle=True по умолчанию. Возвращает четыре массива: X_train, X_test, y_train, y_test. На обучающей выборке вызываете fit модели, на тестовой — только predict (никогда не обучать на тесте).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63",
    "library": "scikit-learn",
    "title": "from sklearn.preprocessing import Standa",
    "shortDesc": "StandardScaler приводит признаки к нулевому среднему и единичной дисперсии (z-score).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>StandardScaler приводит признаки к нулевому среднему и единичной дисперсии (z-score). Создаёте экземпляр scaler; fit(X_train) считает среднее и std по обучающей выборке; transform(X_train) применяет формулу (x - mean) / std. На тестовых данных вызывайте только transform(X_test) — с параметрами, полученными на train (иначе утечка информации). fit_transform(X_train) — объединяет fit и transform в одном вызове для train.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nscaler.fit(X_train)\nX_train_scaled = scaler.transform(X_train)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = X_train_scaled = scaler.transform(X_train)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = X_train_scaled = scaler.transform(X_train)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64",
    "library": "scikit-learn",
    "title": "from sklearn.pipeline import Pipeline\\np",
    "shortDesc": "Pipeline объединяет несколько шагов (препроцессинг + модель) в один объект.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Pipeline объединяет несколько шагов (препроцессинг + модель) в один объект. Каждый шаг — кортеж (имя, объект). При pipe.fit(X_train, y_train) сначала вызывается fit/transform у scaler, затем fit у модели на уже преобразованных данных. При pipe.predict(X_test) — transform у scaler и predict у модели. Удобно для кросс-валидации и избежания утечки: препроцессинг всегда подгоняется только по train.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.pipeline import Pipeline\npipe = Pipeline([(\"scaler\", StandardScaler()), (\"model\", LinearRegression())])\npipe.fit(X_train, y_train)\ny_pred = pipe.predict(X_test)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = y_pred = pipe.predict(X_test)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = y_pred = pipe.predict(X_test)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65",
    "library": "scikit-learn",
    "title": "from sklearn.linear_model import LinearR",
    "shortDesc": "Линейная регрессия: предсказание непрерывной цели.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Линейная регрессия: предсказание непрерывной цели. Конструктор без аргументов или с параметрами (fit_intercept=True и т.д.). fit(X_train, y_train) — подгоняет веса по МНК. predict(X_test) — возвращает предсказания. После fit: model.coef_ — веса признаков (массив), model.intercept_ — свободный член. X — 2D массив формы (n_samples, n_features).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = y_pred = model.predict(X_test)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = y_pred = model.predict(X_test)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66",
    "library": "scikit-learn",
    "title": "from sklearn.linear_model import Logisti",
    "shortDesc": "Логистическая регрессия: бинарная или многоклассовая классификация.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Логистическая регрессия: бинарная или многоклассовая классификация. fit(X_train, y_train) — обучает; y — метки классов (0, 1, 2, ...). predict(X_test) — предсказанный класс. predict_proba(X_test) — вероятности по классам (форма [n_samples, n_classes]).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: C (регуляризация), max_iter, solver. После fit: coef_, intercept_.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nmodel.predict(X_test)\nprint(model.predict_proba(X_test))",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = model.predict_proba(X_test)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = model.predict_proba(X_test)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67",
    "library": "scikit-learn",
    "title": "from sklearn.ensemble import RandomFores",
    "shortDesc": "Случайный лес: ансамбль решающих деревьев.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Случайный лес: ансамбль решающих деревьев. n_estimators — число деревьев (больше — стабильнее, но дольше). fit(X_train, y_train) — обучение. predict(X_test), predict_proba(X_test) — предсказания. После fit: model.feature_importances_ — важность признаков (массив).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: max_depth, min_samples_split, random_state для воспроизводимости. Хорошо работает \"из коробки\", устойчив к переобучению.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nprint(model.fit(X_train, y_train))",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = model.fit(X_train, y_train)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = model.fit(X_train, y_train)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code-3"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68",
    "library": "scikit-learn",
    "title": "from sklearn.metrics import mean_squared",
    "shortDesc": "Метрики — функции, принимают y_true и y_pred (массивы одинаковой длины).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Метрики — функции, принимают y_true и y_pred (массивы одинаковой длины). mean_squared_error — для регрессии (средний квадрат ошибки). accuracy_score — доля правильных ответов для классификации. classification_report(y_true, y_pred) — precision, recall, F1 по классам. confusion_matrix(y_true, y_pred) — матрица: строки — истинный класс, столбцы — предсказанный. Вызов: mean_squared_error(y_true, y_pred), не от объекта модели.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.metrics import mean_squared_error, accuracy_score, classification_report, confusion_matrix\nmse = mean_squared_error(y_true, y_pred)\nacc = accuracy_score(y_true, y_pred)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Исследование объекта, который возвращает функция\nresult = 'acc' = accuracy_score(y_true, y_pred)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'acc' = accuracy_score(y_true, y_pred)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69",
    "library": "OpenCV",
    "title": "import cv2\\nimg = cv2.imread(\"path.jpg\",",
    "shortDesc": "Читает изображение из файла.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Читает изображение из файла. Возвращает NumPy-массив (ndarray) или None, если файл не найден. Второй аргумент: cv2.IMREAD_COLOR (по умолчанию) — 3 канала BGR; cv2.IMREAD_GRAYSCALE — один канал; cv2.IMREAD_UNCHANGED — с альфа-каналом. Важно: OpenCV хранит цвета в порядке BGR, а не RGB — при отображении через matplotlib или сохранении в другие форматы часто делают cv2.cvtColor(img, cv2.COLOR_BGR2RGB). Форма массива: (высота, ширина, 3) для цветного.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd6519ce98888a17668\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport cv2\nimg = cv2.imread(\"path.jpg\", cv2.IMREAD_COLOR)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = img = cv2.imread(\"path.jpg\", cv2.IMREAD_COLOR)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = img = cv2.imread(\"path.jpg\", cv2.IMREAD_COLOR)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code-3"
      }
    ]
  },
  {
    "id": "opencv-cv2-imshow-e-70",
    "library": "OpenCV",
    "title": "cv2.imshow()",
    "shortDesc": "imshow(имя_окна, массив) — показывает изображение в окне с заданным именем.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>imshow(имя_окна, массив) — показывает изображение в окне с заданным именем. waitKey(0) — ждёт нажатия клавиши; аргумент — задержка в мс (0 — бесконечно). destroyAllWindows() — закрывает все окна. В средах без GUI (например сервер) imshow может не работать — тогда сохраняйте через imwrite и смотрите файл. После imshow обязательно нужен waitKey, иначе окно не обновится.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-cv2-imshow-e-70-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-cv2-imshow-e-70-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-cv2-imshow-e-70-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/d9e/tutorial_py_highgui.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncv2.imshow(\"window\", img)\ncv2.waitKey(0)\nprint(cv2.destroyAllWindows())",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imshow-e-70-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'cv'2.destroyAllWindows()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imshow-e-70-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'cv'2.destroyAllWindows()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imshow-e-70-code-3"
      }
    ]
  },
  {
    "id": "opencv-cv2-imwrite-e-71",
    "library": "OpenCV",
    "title": "cv2.imwrite()",
    "shortDesc": "Сохраняет массив как изображение.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сохраняет массив как изображение.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: путь к файлу (строка), массив (обычно uint8, BGR). Расширение файла задаёт формат (.jpg, .png и т.д.). Возвращает True при успехе, False при ошибке. Качество JPEG: cv2.imwrite(\"out.jpg\", img, [cv2.IMWRITE_JPEG_QUALITY, 95]).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-cv2-imwrite-e-71-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-cv2-imwrite-e-71-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-cv2-imwrite-e-71-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html#gabbc7ef1aa2edf6623730eb5eba4a2e4c\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "out = torch.tensor([1.0, 2.0])\nimport cv2\nimport numpy as np\nprint(cv2.imwrite(\"out.jpg\", img))",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imwrite-e-71-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "out = torch.tensor([1.0, 2.0])\nimport cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'cv'2.imwrite(\"out.jpg\", img)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imwrite-e-71-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'cv'2.imwrite(\"out.jpg\", img)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imwrite-e-71-code-3"
      }
    ]
  },
  {
    "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72",
    "library": "OpenCV",
    "title": "img.shape\\nimg.size\\nimg.dtype",
    "shortDesc": "Изображение в OpenCV — это ndarray NumPy.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Изображение в OpenCV — это ndarray NumPy. shape — кортеж: для цветного (высота, ширина, 3), для grayscale (высота, ширина). Порядок: сначала строки (высота), потом столбцы (ширина). size — общее число элементов (H*W*3 или H*W). dtype — обычно np.uint8 (0–255). Обращение к пикселю: img[y, x] (сначала строка y, потом столбец x).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-img-shape-nimg-size-nimg-dtype-e-72-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-img-shape-nimg-size-nimg-dtype-e-72-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-img-shape-nimg-size-nimg-dtype-e-72-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimg.shape\nimg.size\nprint(img.dtype)",
        "solution": "",
        "hints": [],
        "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = img.dtype\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = img.dtype\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72-code-3"
      }
    ]
  },
  {
    "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73",
    "library": "OpenCV",
    "title": "gray = cv2.cvtColor(img, cv2.COLOR_BGR2G",
    "shortDesc": "Преобразует изображение из одного цветового пространства в другое.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Преобразует изображение из одного цветового пространства в другое. Первый аргумент — массив изображения, второй — код преобразования: cv2.COLOR_BGR2GRAY (в оттенки серого), cv2.COLOR_BGR2RGB (для matplotlib), cv2.COLOR_BGR2HSV (для сегментации по цвету) и т.д. Возвращает новый массив. Размер не меняется (кроме числа каналов).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)",
        "solution": "",
        "hints": [],
        "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code-3"
      }
    ]
  },
  {
    "id": "opencv-resized-cv2-resize-img-width-height-e-74",
    "library": "OpenCV",
    "title": "resized = cv2.resize(img, (width, height",
    "shortDesc": "Изменяет размер изображения.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Изменяет размер изображения. Второй аргумент: (width, height) — целевой размер в пикселях (обратите внимание: width идёт первым, в shape — наоборот height, width). Либо None и тогда fx, fy — масштаб по осям (0.5 — в два раза меньше). Интерполяция по умолчанию — cv2.INTER_LINEAR; для уменьшения часто используют cv2.INTER_AREA.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-resized-cv2-resize-img-width-height-e-74-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-resized-cv2-resize-img-width-height-e-74-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-resized-cv2-resize-img-width-height-e-74-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html#ga47a974309e9102f5f08231edc7e7529d\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nresized = cv2.resize(img, (width, height))\nresized = cv2.resize(img, None, fx=0.5, fy=0.5)",
        "solution": "",
        "hints": [],
        "id": "opencv-resized-cv2-resize-img-width-height-e-74-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'resized' = cv2.resize(img, None, fx=0.5, fy=0.5)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-resized-cv2-resize-img-width-height-e-74-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'resized' = cv2.resize(img, None, fx=0.5, fy=0.5)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-resized-cv2-resize-img-width-height-e-74-code-3"
      }
    ]
  },
  {
    "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75",
    "library": "OpenCV",
    "title": "blurred = cv2.GaussianBlur(img, (5, 5), ",
    "shortDesc": "Гауссово размытие: сглаживает изображение, уменьшает шум.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Гауссово размытие: сглаживает изображение, уменьшает шум.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: изображение, размер ядра (кортеж (kwidth, kheight); оба числа нечётные), sigmaX (0 — считается по размеру ядра). Возвращает новый массив той же формы. Большое ядро — сильнее размытие. Часто применяют перед Canny для уменьшения шума на границах.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193eff0bccac43a3\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nblurred = cv2.GaussianBlur(img, (5, 5), 0)",
        "solution": "",
        "hints": [],
        "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'blurred' = cv2.GaussianBlur(img, (5, 5), 0)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'blurred' = cv2.GaussianBlur(img, (5, 5), 0)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code-3"
      }
    ]
  },
  {
    "id": "opencv-edges-cv2-canny-img-100-200-e-76",
    "library": "OpenCV",
    "title": "edges = cv2.Canny(img, 100, 200)",
    "shortDesc": "Детектор границ Кэнни: находит границы по градиенту.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Детектор границ Кэнни: находит границы по градиенту.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: изображение (лучше одноканальное, иначе обрабатывается каждый канал), threshold1, threshold2 — два порога гистерезиса (пиксели сильнее threshold2 — граница; между threshold1 и threshold2 — граница, если связаны с сильной). Результат — одноканальное бинарное изображение (0 или 255). Пороги подбирают под контраст сцены.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-edges-cv2-canny-img-100-200-e-76-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-edges-cv2-canny-img-100-200-e-76-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-edges-cv2-canny-img-100-200-e-76-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html#ga04723e007ed888d43411ea5a0a94b8bf\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nedges = cv2.Canny(img, 100, 200)",
        "solution": "",
        "hints": [],
        "id": "opencv-edges-cv2-canny-img-100-200-e-76-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'edges' = cv2.Canny(img, 100, 200)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-edges-cv2-canny-img-100-200-e-76-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'edges' = cv2.Canny(img, 100, 200)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-edges-cv2-canny-img-100-200-e-76-code-3"
      }
    ]
  },
  {
    "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77",
    "library": "OpenCV",
    "title": "contours, hierarchy = cv2.findContours(b",
    "shortDesc": "findContours находит контуры на бинарном изображении (обычно после threshold или Canny).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>findContours находит контуры на бинарном изображении (обычно после threshold или Canny).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: изображение (8-bit, один канал), mode (cv2.RETR_TREE — все контуры с иерархией; RETR_EXTERNAL — только внешние), method (cv2.CHAIN_APPROX_SIMPLE — сжимает отрезки). Возвращает contours (список массивов точек) и hierarchy. drawContours рисует контуры на изображении: img (изменяется!), contours, индекс контура (-1 — все), цвет (BGR), толщина (линия; -1 — заливка).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html#gadf1ad6a0b82947fa1fe3c3d497f260e0\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncontours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\nprint(cv2.drawContours(img, contours, -1, (0, 255, 0), 2))",
        "solution": "",
        "hints": [],
        "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'cv'2.drawContours(img, contours, -1, (0, 255, 0), 2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'cv'2.drawContours(img, contours, -1, (0, 255, 0), 2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77-code-3"
      }
    ]
  },
  {
    "id": "opencv-cv2-rectangle-e-78",
    "library": "OpenCV",
    "title": "cv2.rectangle()",
    "shortDesc": "rectangle — рисует прямоугольник: угловые точки (x1,y1) и (x2,y2), цвет (BGR), толщина линии (-1 — заливка).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>rectangle — рисует прямоугольник: угловые точки (x1,y1) и (x2,y2), цвет (BGR), толщина линии (-1 — заливка). circle — центр (cx, cy), радиус, цвет, толщина. putText — текст, левый нижний угол (x, y), шрифт (cv2.FONT_HERSHEY_SIMPLEX и др.), масштаб шрифта, цвет. Все функции изменяют img на месте и возвращают None. Координаты — целые числа; цвет — кортеж (B, G, R).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-cv2-rectangle-e-78-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-cv2-rectangle-e-78-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-cv2-rectangle-e-78-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)\ncv2.circle(img, (cx, cy), radius, (0, 0, 255), -1)\nprint(cv2.putText(img, \"text\", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255)))",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-rectangle-e-78-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'cv'2.putText(img, \"text\", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-rectangle-e-78-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'cv'2.putText(img, \"text\", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-rectangle-e-78-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "erode — эрозия (съедает белые пиксели с краев).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>erode — эрозия (съедает белые пиксели с краев). dilate — дилатация (наращивает белые пиксели). getStructuringElement — создаёт ядро (MORPH_RECT, MORPH_ELLIPSE, MORPH_CROSS). Для удаления шума и склеивания компонентов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.zeros((100, 100), dtype=np.uint8)\ncv2.rectangle(img, (20, 20), (80, 80), 255, -1)\nkernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))\neros = cv2.erode(img, kernel, iterations=1)\ndilat = cv2.dilate(img, kernel, iterations=1)\nprint(\"Erode/Dilate:\", eros.shape, dilat.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Erode/Dilate:\", eros.shape, dilat.shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Erode/Dilate:\", eros.shape, dilat.shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "morphologyEx: MORPH_OPEN (эрозия -> дилатация, убирает белый шум), MORPH_CLOSE (дилатация -> эрозия, закрывает черные дыры), MORPH_GRADIENT (разница между дилатацией и эрозией, выделяет контур).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>morphologyEx: MORPH_OPEN (эрозия -> дилатация, убирает белый шум), MORPH_CLOSE (дилатация -> эрозия, закрывает черные дыры), MORPH_GRADIENT (разница между дилатацией и эрозией, выделяет контур).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\nkernel = np.ones((5, 5), np.uint8)\nclosing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)\nopening = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)\nprint(\"MorphologyEx:\", closing.shape, opening.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"MorphologyEx:\", closing.shape, opening.shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"MorphologyEx:\", closing.shape, opening.shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "threshold — глобальный порог.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>threshold — глобальный порог. THRESH_BINARY (если > thresh, то maxval, иначе 0). THRESH_OTSU — автоматический поиск оптимального порога по бимодальной гистограмме. adaptiveThreshold — локальный порог (для неравномерного освещения).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\n_, thresh1 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)\n_, thresh2 = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nprint(\"Thresholded shapes:\", thresh1.shape, thresh2.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Thresholded shapes:\", thresh1.shape, thresh2.shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Thresholded shapes:\", thresh1.shape, thresh2.shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "calcHist — вычисление гистограммы цвета/интенсивности.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>calcHist — вычисление гистограммы цвета/интенсивности. Аргументы: изображения, каналы, маска, кол-во корзин (histSize), диапазоны. Для анализа экспозиции и поиска похожих изображений (compareHist).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100, 3), dtype=np.uint8)\nhist = cv2.calcHist([img], [0], None, [256], [0, 256])\nprint(\"calcHist shape:\", hist.shape)\n# cv2.normalize(hist, hist, 0, 255, cv2.NORM_MINMAX)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = # cv2.normalize(hist, hist, 0, 255, cv2.NORM_MINMAX)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = # cv2.normalize(hist, hist, 0, 255, cv2.NORM_MINMAX)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "equalizeHist — глобальное выравнивание гистограммы (повышает контраст, но может пересветить).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>equalizeHist — глобальное выравнивание гистограммы (повышает контраст, но может пересветить). CLAHE (Contrast Limited Adaptive Histogram Equalization) — локальное выравнивание по блокам, предотвращает усиление шума.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\ngray = np.random.randint(0, 256, (50, 50), dtype=np.uint8)\neq = cv2.equalizeHist(gray)\nclahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))\nclahe_img = clahe.apply(gray)\nprint(\"Equalize:\", eq.shape, \"CLAHE:\", clahe_img.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Equalize:\", eq.shape, \"CLAHE:\", clahe_img.shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Equalize:\", eq.shape, \"CLAHE:\", clahe_img.shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "matchTemplate — поиск точного фрагмента на изображении.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>matchTemplate — поиск точного фрагмента на изображении. Двигает шаблон скользящим окном и считает метрику (TM_SQDIFF, TM_CCORR_NORMED, TM_CCOEFF_NORMED). minMaxLoc находит координаты экстремумов результатов. Не устойчив к масштабу и повороту.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/df/dfb/group__imgproc__object.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\ntemplate = img[20:40, 20:40]\nres = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)\nmin_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)\nprint(\"Best match at:\", max_loc, \"val:\", round(max_val, 2))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Best match at:\", max_loc, \"val:\", round(max_val, 2))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Best match at:\", max_loc, \"val:\", round(max_val, 2))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "cornerHarris — детектор углов Харриса.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>cornerHarris — детектор углов Харриса. Работает с float32. Результат — карта уверенности, где углы имеют большие значения. Устойчив к повороту, но НЕ устойчив к масштабу.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\ngray = np.float32(np.random.randint(0, 256, (50, 50), dtype=np.uint8))\ndst = cv2.cornerHarris(gray, 2, 3, 0.04)\nprint(\"cornerHarris:\", dst.shape)\n# result[dst > 0.01 * dst.max()] = [0, 0, 255]",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = # result[dst > 0.01 * dst.max()] = [0, 0, 255]\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = # result[dst > 0.01 * dst.max()] = [0, 0, 255]\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# net = ",
    "shortDesc": "blobFromImage — предобработка изображения для сети (масштабирование, ресайз, swapRB=True (BGR->RGB)).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>blobFromImage — предобработка изображения для сети (масштабирование, ресайз, swapRB=True (BGR->RGB)). Метод forward(out_names) возвращает выходы конкретных слоёв (например, слоёв детекции YOLO).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "out = torch.tensor([1.0, 2.0])\nimport cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# net = cv2.dnn.readNetFromDarknet(\"yolov3.cfg\", \"yolov3.weights\")\n# blob = cv2.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)\n# net.setInput(blob)\n# out_names = net.getUnconnectedOutLayersNames()\n# outs = net.forward(out_names)\nprint(\"dnn: blobFromImage, setInput, forward, getUnconnectedOutLayersNames\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"dnn: blobFromImage, setInput, forward, getUnconnectedOutLayersNames\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"dnn: blobFromImage, setInput, forward, getUnconnectedOutLayersNames\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# cap = ",
    "shortDesc": "cap.get(propId) и cap.set(propId, value) — доступ к метаданным видео и настройкам камеры.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>cap.get(propId) и cap.set(propId, value) — доступ к метаданным видео и настройкам камеры. Можно менять разрешение, перематывать (POS_MSEC, POS_FRAMES), узнавать общее число кадров (FRAME_COUNT).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/d15/group__videoio__flags__base.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# cap = cv2.VideoCapture(0)  # или \"video.mp4\"\n# width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))\n# height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))\n# fps = cap.get(cv2.CAP_PROP_FPS)\n# cap.set(cv2.CAP_PROP_POS_MSEC, 5000) # перемотка на 5с\nprint(\"VideoCapture get/set properties: PROP_FRAME_WIDTH, PROP_FPS, PROP_POS_FRAMES\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"VideoCapture get/set properties: PROP_FRAME_WIDTH, PROP_FPS, PROP_POS_FRAMES\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"VideoCapture get/set properties: PROP_FRAME_WIDTH, PROP_FPS, PROP_POS_FRAMES\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# fourcc",
    "shortDesc": "VideoWriter_fourcc — кодек (в Windows часто *\\\"DIVX\\\" -> .avi, *\\\"mp4v\\\" -> .mp4).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>VideoWriter_fourcc — кодек (в Windows часто *\\\"DIVX\\\" -> .avi, *\\\"mp4v\\\" -> .mp4). VideoWriter(filename, fourcc, fps, (width, height)). Для сохранения обработанных кадров в видеофайл.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dd/d9e/classcv_1_1VideoWriter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "output = torch.tensor([1.0, 2.0])\nimport cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# fourcc = cv2.VideoWriter_fourcc(*\"mp4v\")\n# out = 'cv'2.VideoWriter(\"output.mp4\", fourcc, 30.0, (640, 480))\n# out.write(frame)\n# out.release()\nprint(\"VideoWriter: cv2.VideoWriter_fourcc(*XVID), write, release\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"VideoWriter: cv2.VideoWriter_fourcc(*XVID), write, release\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"VideoWriter: cv2.VideoWriter_fourcc(*XVID), write, release\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "HoughLinesP — вероятностное преобразование Хафа для линий.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>HoughLinesP — вероятностное преобразование Хафа для линий. rho — точность в пикселях. theta — угловая точность. threshold — порог голосов. minLineLength, maxLineGap. Для детекции дорожной разметки, границ. HoughLines — классический (бесконечные линии).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\ngray = np.zeros((100, 100), dtype=np.uint8)\ncv2.line(gray, (10, 50), (90, 50), 255, 2)\nedges = cv2.Canny(gray, 50, 150)\nlines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=20, minLineLength=20, maxLineGap=5)\nprint(\"HoughLinesP: найдено\", len(lines) if lines is not None else 0, \"линий\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"HoughLinesP: найдено\", len(lines) if lines is not None else 0, \"линий\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"HoughLinesP: найдено\", len(lines) if lines is not None else 0, \"линий\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "HoughCircles — преобразование Хафа для окружностей.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>HoughCircles — преобразование Хафа для окружностей. dp — разрешение аккумулятора. minDist — мин. расстояние между центрами. param1, param2 — пороги Canny и аккумулятора. Для детекции монет, глаз, круглых объектов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\ngray = np.zeros((100, 100), dtype=np.uint8)\ncv2.circle(gray, (50, 50), 20, 255, 2)\ncircles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, dp=1, minDist=30, param1=50, param2=15, minRadius=10, maxRadius=30)\nprint(\"HoughCircles:\", \"найдено\" if circles is not None else \"не найдено\", \"окружностей\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"HoughCircles:\", \"найдено\" if circles is not None else \"не найдено\", \"окружностей\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"HoughCircles:\", \"найдено\" if circles is not None else \"не найдено\", \"окружностей\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Perspe",
    "shortDesc": "getPerspectiveTransform(src, dst) — матрица 3×3 из 4 пар точек.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>getPerspectiveTransform(src, dst) — матрица 3×3 из 4 пар точек. warpPerspective(img, M, size) — применяет. Для коррекции перспективы (документы, дорожные знаки). getAffineTransform — для 3 точек (без перспективы).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# Perspective Transform: 4 точки -> 4 точки\nsrc = np.float32([[0,0],[100,0],[100,100],[0,100]])\ndst = np.float32([[10,10],[90,5],[85,95],[15,90]])\nM = cv2.getPerspectiveTransform(src, dst)\nprint(\"perspective matrix shape:\", M.shape)\n# result = 'cv'2.warpPerspective(img, M, (width, height))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = # result = 'cv'2.warpPerspective(img, M, (width, height))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = # result = 'cv'2.warpPerspective(img, M, (width, height))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Affine",
    "shortDesc": "getRotationMatrix2D(center, angle, scale) — матрица 2×3 для поворота.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>getRotationMatrix2D(center, angle, scale) — матрица 2×3 для поворота. warpAffine(img, M, size) — применяет аффинное преобразование. Для поворота, сдвига, масштабирования изображений. Аугментация данных.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# Affine Transform: масштаб + поворот + сдвиг\ncenter = (50, 50)\nangle = 45\nscale = 1.0\nM = cv2.getRotationMatrix2D(center, angle, scale)\nprint(\"rotation matrix:\", M.shape)\n# result = 'cv'2.warpAffine(img, M, (w, h))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = # result = 'cv'2.warpAffine(img, M, (w, h))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = # result = 'cv'2.warpAffine(img, M, (w, h))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg1 = n",
    "shortDesc": "add(a, b) — насыщающее сложение (макс 255).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>add(a, b) — насыщающее сложение (макс 255). subtract — вычитание. addWeighted(a, alpha, b, beta, gamma) — взвешенная сумма (бленд). Отличие от a+b: numpy обрезает по модулю 256, cv2.add насыщает.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg1 = np.zeros((50,50,3), dtype=np.uint8); img1[:] = 100\nimg2 = np.zeros((50,50,3), dtype=np.uint8); img2[:] = 200\nresult = 'cv'2.add(img1, img2)\nprint(\"add (saturated):\", result[0,0])\nresult2 = cv2.addWeighted(img1, 0.7, img2, 0.3, 0)\nprint(\"addWeighted:\", result2[0,0])",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"addWeighted:\", result2[0,0])\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"addWeighted:\", result2[0,0])\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "bitwise_and/or/xor/not — побитовые операции.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>bitwise_and/or/xor/not — побитовые операции. mask — маска (где 0 — не обрабатывать). Для наложения логотипов, ROI (Region of Interest), сложных масок. Типичный паттерн: создать маску → bitwise_and с изображением.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.zeros((50,50), dtype=np.uint8); img[10:40, 10:40] = 255\nmask = np.zeros_like(img); mask[20:30, 20:30] = 255\nresult_and = cv2.bitwise_and(img, img, mask=mask)\nresult_or = cv2.bitwise_or(img, mask)\nresult_not = cv2.bitwise_not(img)\nprint(\"and sum:\", result_and.sum(), \"or sum:\", result_or.sum())",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"and sum:\", result_and.sum(), \"or sum:\", result_or.sum())\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"and sum:\", result_and.sum(), \"or sum:\", result_or.sum())\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "inRange(src, lower, upper) — бинарная маска: 255 где значения в диапазоне.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>inRange(src, lower, upper) — бинарная маска: 255 где значения в диапазоне. Для цветовой сегментации в HSV. H: 0-180 (в OpenCV!), S: 0-255, V: 0-255. Красный: H=0-10 или 170-180. Синий: H=100-130.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100, 3), dtype=np.uint8)\nhsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)\n# Пример: выделить красный цвет\nlower = np.array([0, 120, 70])\nupper = np.array([10, 255, 255])\nmask = cv2.inRange(hsv, lower, upper)\nprint(\"inRange mask shape:\", mask.shape)\nprint(\"pixels in range:\", mask.sum() // 255)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"pixels in range:\", mask.sum() // 255)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"pixels in range:\", mask.sum() // 255)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Каскад",
    "shortDesc": "CascadeClassifier — классический детектор объектов (лица, глаза).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>CascadeClassifier — классический детектор объектов (лица, глаза). detectMultiScale(gray, scaleFactor, minNeighbors). scaleFactor=1.1 — масштаб пирамиды. minNeighbors=5 — уверенность. cv2.data.haarcascades — путь к XML-файлам. Быстрый, но менее точный чем DNN.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# Каскад Хаара для детекции лиц:\n# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + \"haarcascade_frontalface_default.xml\")\n# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n# faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))\n# for (x, y, w, h) in faces:\n#     cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)\nprint(\"CascadeClassifier: haarcascade для лиц, глаз, тела\")\nprint(\"detectMultiScale: scaleFactor, minNeighbors\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"detectMultiScale: scaleFactor, minNeighbors\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"detectMultiScale: scaleFactor, minNeighbors\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Backgr",
    "shortDesc": "createBackgroundSubtractorMOG2/KNN — выделение переднего плана (движущихся объектов) из видео.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>createBackgroundSubtractorMOG2/KNN — выделение переднего плана (движущихся объектов) из видео. apply(frame) → маска. history — число кадров для модели фона. Для видеонаблюдения, трекинга движения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/dc/d6b/group__video__track.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# Background Subtraction (фоновое вычитание)\n# fgbg = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=16)\n# fgbg = cv2.createBackgroundSubtractorKNN()\n# while cap.isOpened():\n#     ret, frame = cap.read()\n#     fgmask = fgbg.apply(frame)\n#     # fgmask - бинарная маска переднего плана\nprint(\"BackgroundSubtractorMOG2: history, varThreshold\")\nprint(\"BackgroundSubtractorKNN: альтернатива\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"BackgroundSubtractorKNN: альтернатива\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"BackgroundSubtractorKNN: альтернатива\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code-3"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Contou",
    "shortDesc": "contourArea — площадь контура.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>contourArea — площадь контура. arcLength — периметр (closed=True). convexHull — выпуклая оболочка. moments — моменты (m10/m00, m01/m00 — центр масс). boundingRect — вписанный прямоугольник. minEnclosingCircle — вписанная окружность. approxPolyDP — аппроксимация полигоном.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimport numpy as np\nimport cv2\n# Contour analysis: площадь, периметр, выпуклая оболочка\nbinary = np.zeros((100, 100), dtype=np.uint8)\ncv2.circle(binary, (50, 50), 30, 255, -1)\ncontours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\nc = contours[0]\nprint(\"area:\", cv2.contourArea(c))\nprint(\"perimeter:\", round(cv2.arcLength(c, True), 2))\nhull = cv2.convexHull(c)\nprint(\"convexHull points:\", len(hull))\nM = cv2.moments(c)\nprint(\"center:\", int(M[\"m10\"]/M[\"m00\"]), int(M[\"m01\"]/M[\"m00\"]))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"center:\", int(M[\"m10\"]/M[\"m00\"]), int(M[\"m01\"]/M[\"m00\"]))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"center:\", int(M[\"m10\"]/M[\"m00\"]), int(M[\"m01\"]/M[\"m00\"]))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code-3"
      }
    ]
  },
  {
    "id": "opencv-core-core-functionality-e-99",
    "library": "OpenCV",
    "title": "core — Core functionality",
    "shortDesc": "Ядро OpenCV: базовые структуры данных (Mat, Scalar, Point, Rect, Size), операции с матрицами и массивами, типы данных, управление памятью, XML/YAML I/O, оптимизация (SSE, OpenCL).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Ядро OpenCV: базовые структуры данных (Mat, Scalar, Point, Rect, Size), операции с матрицами и массивами, типы данных, управление памятью, XML/YAML I/O, оптимизация (SSE, OpenCL). Здесь же — рисование примитивов низкого уровня и утилиты. Почти все остальные модули опираются на core. Новичку важно: изображение в OpenCV — это Mat (в Python это ndarray NumPy); координаты и размеры задаются через кортежи (x, y) или (width, height).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-core-core-functionality-e-99-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-core-core-functionality-e-99-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-core-core-functionality-e-99-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"core - Core functionality\")",
        "solution": "",
        "hints": [],
        "id": "opencv-core-core-functionality-e-99-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = core - Core functionality\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-core-core-functionality-e-99-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = core - Core functionality\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-core-core-functionality-e-99-code-3"
      }
    ]
  },
  {
    "id": "opencv-imgproc-image-processing-e-100",
    "library": "OpenCV",
    "title": "imgproc — Image Processing",
    "shortDesc": "Обработка изображений: фильтры (размытие, морфология, производные), геометрические преобразования (resize, warp, rotate), цветовые пространства (cvtColor), пороговая обработка (threshold, adaptiveThreshold), контуры (findContours, drawContours), гистограммы, сегментация.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Обработка изображений: фильтры (размытие, морфология, производные), геометрические преобразования (resize, warp, rotate), цветовые пространства (cvtColor), пороговая обработка (threshold, adaptiveThreshold), контуры (findContours, drawContours), гистограммы, сегментация. Это основной модуль для предобработки кадров перед детекцией или классификацией. Функции: GaussianBlur, Canny, Sobel, morphologyEx, getStructuringElement и многие другие.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-imgproc-image-processing-e-100-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-imgproc-image-processing-e-100-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-imgproc-image-processing-e-100-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/dbd/group__imgproc.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"imgproc - Image Processing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-imgproc-image-processing-e-100-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = imgproc - Image Processing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-imgproc-image-processing-e-100-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = imgproc - Image Processing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-imgproc-image-processing-e-100-code-3"
      }
    ]
  },
  {
    "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101",
    "library": "OpenCV",
    "title": "imgcodecs — Image file reading and writi",
    "shortDesc": "Чтение и запись изображений в файлы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Чтение и запись изображений в файлы. Функции: imread() — загрузка из файла (поддержка JPEG, PNG, BMP, TIFF и др.); imwrite() — сохранение; imdecode()/imencode() — работа с памятью (буфер байтов).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: флаги загрузки (IMREAD_COLOR, IMREAD_GRAYSCALE, IMREAD_UNCHANGED), параметры сохранения (качество JPEG, сжатие PNG). В Python доступны как cv2.imread, cv2.imwrite.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-imgcodecs-image-file-reading-and-writi-e-101-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-imgcodecs-image-file-reading-and-writi-e-101-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-imgcodecs-image-file-reading-and-writi-e-101-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"imgcodecs - Image file reading and writing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = imgcodecs - Image file reading and writing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = imgcodecs - Image file reading and writing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101-code-3"
      }
    ]
  },
  {
    "id": "opencv-videoio-video-i-o-e-102",
    "library": "OpenCV",
    "title": "videoio — Video I/O",
    "shortDesc": "Захват и запись видео.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Захват и запись видео. VideoCapture — открытие видеофайла или камеры (индекс 0 — веб-камера), read() — следующий кадр, get()/set() — свойства (ширина, высота, FPS). VideoWriter — запись видео (кодек, размер, FPS). Удобно для обработки видео по кадрам и сохранения результата. В коде: cap = cv2.VideoCapture(0); ret, frame = cap.read(); cap.release().</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-videoio-video-i-o-e-102-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-videoio-video-i-o-e-102-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-videoio-video-i-o-e-102-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d8/dfe/group__videoio.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"videoio - Video I/O\")",
        "solution": "",
        "hints": [],
        "id": "opencv-videoio-video-i-o-e-102-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'videoio - Video I'/O\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-videoio-video-i-o-e-102-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'videoio - Video I'/O\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-videoio-video-i-o-e-102-code-3"
      }
    ]
  },
  {
    "id": "opencv-highgui-high-level-gui-e-103",
    "library": "OpenCV",
    "title": "highgui — High-level GUI",
    "shortDesc": "Высокоуровневый GUI: окна, отображение изображений, обработка мыши и клавиатуры.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Высокоуровневый GUI: окна, отображение изображений, обработка мыши и клавиатуры. Функции: namedWindow(), imshow(), waitKey(), destroyAllWindows(), createTrackbar() (слайдеры для параметров). Основа для интерактивных демо и отладки. В средах без дисплея (сервер, SSH) highgui может быть недоступен — тогда используют только imwrite и просмотр файлов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-highgui-high-level-gui-e-103-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-highgui-high-level-gui-e-103-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-highgui-high-level-gui-e-103-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/d9e/group__highgui.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"highgui - High-level GUI\")",
        "solution": "",
        "hints": [],
        "id": "opencv-highgui-high-level-gui-e-103-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'highgui - High-level GUI\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-highgui-high-level-gui-e-103-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'highgui - High-level GUI\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-highgui-high-level-gui-e-103-code-3"
      }
    ]
  },
  {
    "id": "opencv-video-video-analysis-e-104",
    "library": "OpenCV",
    "title": "video — Video Analysis",
    "shortDesc": "Анализ видео: оценка движения (optical flow — calcOpticalFlowFarneback, calcOpticalFlowPyrLK), трекинг объектов (TrackerKCF, TrackerMOSSE и др.), фоновое вычитание (BackgroundSubtractorMOG2, BackgroundSubtractorKNN).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Анализ видео: оценка движения (optical flow — calcOpticalFlowFarneback, calcOpticalFlowPyrLK), трекинг объектов (TrackerKCF, TrackerMOSSE и др.), фоновое вычитание (BackgroundSubtractorMOG2, BackgroundSubtractorKNN). Используется для отслеживания объектов между кадрами и выделения переднего плана. Документация по каждому алгоритму: параметры, когда какой выбирать.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-video-video-analysis-e-104-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-video-video-analysis-e-104-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-video-video-analysis-e-104-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d7/d9b/group__video.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"video - Video Analysis\")",
        "solution": "",
        "hints": [],
        "id": "opencv-video-video-analysis-e-104-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = video - Video Analysis\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-video-video-analysis-e-104-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = video - Video Analysis\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-video-video-analysis-e-104-code-3"
      }
    ]
  },
  {
    "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105",
    "library": "OpenCV",
    "title": "calib3d — Camera Calibration and 3D Reco",
    "shortDesc": "Калибровка камеры и 3D-реконструкция.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Калибровка камеры и 3D-реконструкция. Калибровка: findChessboardCorners(), calibrateCamera() — получение матрицы камеры и коэффициентов искажений; undistort() — исправление искажений. Стереозрение: stereoCalibrate(), stereoRectify(), reprojectImageTo3D(). Оценка позы: solvePnP(), solvePnPRansac(). Нужно для AR, робототехники, измерений по изображению. Требует калибровочный паттерн (шахматная доска).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"calib3d - Camera Calibration and 3D Reconstruction\")",
        "solution": "",
        "hints": [],
        "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'calib'3d - Camera Calibration and 3D Reconstruction\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'calib'3d - Camera Calibration and 3D Reconstruction\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105-code-3"
      }
    ]
  },
  {
    "id": "opencv-features2d-2d-features-framework-e-106",
    "library": "OpenCV",
    "title": "features2d — 2D Features Framework",
    "shortDesc": "Детекция и описание 2D-признаков: ключевые точки и дескрипторы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Детекция и описание 2D-признаков: ключевые точки и дескрипторы. Детекторы: SIFT, ORB, BRISK, AKAZE и др. (в Python: cv2.SIFT_create(), cv2.ORB_create()). Описание: compute() — дескрипторы по ключевым точкам. Сопоставление: BFMatcher, FlannBasedMatcher; match(), knnMatch(). Используется для стыковки изображений (stitching), навигации по картинке, трекинга по признакам. drawKeypoints(), drawMatches() — визуализация.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-features2d-2d-features-framework-e-106-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-features2d-2d-features-framework-e-106-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-features2d-2d-features-framework-e-106-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d0/d13/group__features2d.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"features2d - 2D Features Framework\")",
        "solution": "",
        "hints": [],
        "id": "opencv-features2d-2d-features-framework-e-106-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'features'2d - 2D Features Framework\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-features2d-2d-features-framework-e-106-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'features'2d - 2D Features Framework\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-features2d-2d-features-framework-e-106-code-3"
      }
    ]
  },
  {
    "id": "opencv-objdetect-object-detection-e-107",
    "library": "OpenCV",
    "title": "objdetect — Object Detection",
    "shortDesc": "Детекция объектов: каскады Хаара (CascadeClassifier — лица, глаза), HOG + SVM, детекция по шаблону.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Детекция объектов: каскады Хаара (CascadeClassifier — лица, глаза), HOG + SVM, детекция по шаблону. Функции: detectMultiScale() — поиск объектов заданного класса (лицо и т.д.) в разных масштабах. Рисование: rectangle() по найденным боксам. Классические методы; для современной детекции (YOLO, Faster R-CNN) чаще используют модуль dnn с загруженными моделями. В OpenCV 4.x сюда перенесена часть функциональности aruco.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-objdetect-object-detection-e-107-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-objdetect-object-detection-e-107-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-objdetect-object-detection-e-107-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dc6/group__objdetect.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"objdetect - Object Detection\")",
        "solution": "",
        "hints": [],
        "id": "opencv-objdetect-object-detection-e-107-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'objdetect - Object Detection\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-objdetect-object-detection-e-107-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'objdetect - Object Detection\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-objdetect-object-detection-e-107-code-3"
      }
    ]
  },
  {
    "id": "opencv-dnn-deep-neural-network-module-e-108",
    "library": "OpenCV",
    "title": "dnn — Deep Neural Network module",
    "shortDesc": "Загрузка и запуск нейросетей из внешних фреймворков.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Загрузка и запуск нейросетей из внешних фреймворков. Backends: OpenCV, OpenVINO, CUDA, TensorRT и др. Функции: readNetFromCaffe(), readNetFromTensorflow(), readNetFromONNX(), readNet() — загрузка модели; setInput(), forward() — прямой проход. Удобно для быстрого инференса детекторов (YOLO, SSD) и классификаторов без PyTorch/TensorFlow в рантайме. Документация: поддерживаемые форматы, примеры для разных моделей.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-dnn-deep-neural-network-module-e-108-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-dnn-deep-neural-network-module-e-108-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-dnn-deep-neural-network-module-e-108-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"dnn - Deep Neural Network module\")",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-deep-neural-network-module-e-108-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'dnn - Deep Neural Network module\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-deep-neural-network-module-e-108-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'dnn - Deep Neural Network module\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-deep-neural-network-module-e-108-code-3"
      }
    ]
  },
  {
    "id": "opencv-ml-machine-learning-e-109",
    "library": "OpenCV",
    "title": "ml — Machine Learning",
    "shortDesc": "Классическое машинное обучение внутри OpenCV: SVM (cv2.ml.SVM_create()), KNN, деревья решений, бустинг, нейросети (старый API).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Классическое машинное обучение внутри OpenCV: SVM (cv2.ml.SVM_create()), KNN, деревья решений, бустинг, нейросети (старый API). Методы: train(), predict(), predictProb(). Используется когда нужна простая модель без scikit-learn/PyTorch (например встроенная в C++ приложение). В Python чаще используют sklearn; ml полезен для совместимости с C++ кодом и готовых примеров OpenCV.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-ml-machine-learning-e-109-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-ml-machine-learning-e-109-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-ml-machine-learning-e-109-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__ml.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"ml - Machine Learning\")",
        "solution": "",
        "hints": [],
        "id": "opencv-ml-machine-learning-e-109-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'ml - Machine Learning\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-ml-machine-learning-e-109-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'ml - Machine Learning\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-ml-machine-learning-e-109-code-3"
      }
    ]
  },
  {
    "id": "opencv-flann-clustering-and-search-in-multi-d-e-110",
    "library": "OpenCV",
    "title": "flann — Clustering and Search in Multi-D",
    "shortDesc": "Быстрый поиск ближайших соседей в многомерных пространствах.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Быстрый поиск ближайших соседей в многомерных пространствах. FLANN (Fast Library for Approximate Nearest Neighbors): построение индекса по набору векторов (дескрипторов), поиск k ближайших или радиуса. Используется внутри features2d для матчинга дескрипторов и в любых задачах поиска по множеству точек. Index_create(), index.knnSearch(), index.radiusSearch().</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-flann-clustering-and-search-in-multi-d-e-110-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-flann-clustering-and-search-in-multi-d-e-110-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-flann-clustering-and-search-in-multi-d-e-110-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d2/d75/group__flann.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"flann - Clustering and Search in Multi-Dimensional Spaces\")",
        "solution": "",
        "hints": [],
        "id": "opencv-flann-clustering-and-search-in-multi-d-e-110-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'flann - Clustering and Search in Multi-Dimensional Spaces\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-flann-clustering-and-search-in-multi-d-e-110-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'flann - Clustering and Search in Multi-Dimensional Spaces\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-flann-clustering-and-search-in-multi-d-e-110-code-3"
      }
    ]
  },
  {
    "id": "opencv-photo-computational-photography-e-111",
    "library": "OpenCV",
    "title": "photo — Computational Photography",
    "shortDesc": "Вычислительная фотография: устранение шума (fastNlMeansDenoising, denoise_TVL1), inpainting (восстановление повреждённых областей), HDR (mergeExposures), декомпозиция (seamlessClone).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Вычислительная фотография: устранение шума (fastNlMeansDenoising, denoise_TVL1), inpainting (восстановление повреждённых областей), HDR (mergeExposures), декомпозиция (seamlessClone). Удобно для улучшения снимков и ретуши. Функции работают с целым изображением или маской.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-photo-computational-photography-e-111-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-photo-computational-photography-e-111-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-photo-computational-photography-e-111-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__photo.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"photo - Computational Photography\")",
        "solution": "",
        "hints": [],
        "id": "opencv-photo-computational-photography-e-111-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = photo - Computational Photography\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-photo-computational-photography-e-111-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = photo - Computational Photography\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-photo-computational-photography-e-111-code-3"
      }
    ]
  },
  {
    "id": "opencv-stitching-images-stitching-e-112",
    "library": "OpenCV",
    "title": "stitching — Images stitching",
    "shortDesc": "Сшивание изображений в панораму: Stitcher создаёт панораму из нескольких перекрывающихся кадров.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сшивание изображений в панораму: Stitcher создаёт панораму из нескольких перекрывающихся кадров. Внутри: детекция признаков, матчинг, оценка гомографии, блендинг. Используется для панорамных снимков и склейки видео. Stitcher.create(), stitcher.stitch(images). Параметры режима (панорама, сканер и т.д.).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-stitching-images-stitching-e-112-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-stitching-images-stitching-e-112-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-stitching-images-stitching-e-112-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d8/d19/group__stitching.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"stitching - Images stitching\")",
        "solution": "",
        "hints": [],
        "id": "opencv-stitching-images-stitching-e-112-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'stitching - Images stitching\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-stitching-images-stitching-e-112-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'stitching - Images stitching\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-stitching-images-stitching-e-112-code-3"
      }
    ]
  },
  {
    "id": "opencv-gapi-graph-api-e-113",
    "library": "OpenCV",
    "title": "gapi — Graph API",
    "shortDesc": "Graph API: построение графа операций обработки изображений с автоматической оптимизацией и выполнением на CPU/GPU.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Graph API: построение графа операций обработки изображений с автоматической оптимизацией и выполнением на CPU/GPU. Позволяет описать пайплайн один раз и выполнять его эффективно. Используется в продвинутых сценариях и встроенных системах. В Python доступность ограничена; в основном C++ API.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-gapi-graph-api-e-113-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-gapi-graph-api-e-113-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-gapi-graph-api-e-113-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__gapi.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"gapi - Graph API\")",
        "solution": "",
        "hints": [],
        "id": "opencv-gapi-graph-api-e-113-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = gapi - Graph API\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-gapi-graph-api-e-113-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = gapi - Graph API\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-gapi-graph-api-e-113-code-3"
      }
    ]
  },
  {
    "id": "opencv-alphamat-alpha-matting-e-114",
    "library": "OpenCV",
    "title": "alphamat — Alpha Matting",
    "shortDesc": "Выделение полупрозрачных границ объекта (alpha matting): по тримапу и изображению уточняется альфа-канал на границах.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Выделение полупрозрачных границ объекта (alpha matting): по тримапу и изображению уточняется альфа-канал на границах. Нужно для качественного вырезания объектов и композитинга.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-alphamat-alpha-matting-e-114-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-alphamat-alpha-matting-e-114-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-alphamat-alpha-matting-e-114-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__alphamat.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"alphamat - Alpha Matting\")",
        "solution": "",
        "hints": [],
        "id": "opencv-alphamat-alpha-matting-e-114-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = alphamat - Alpha Matting\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-alphamat-alpha-matting-e-114-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = alphamat - Alpha Matting\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-alphamat-alpha-matting-e-114-code-3"
      }
    ]
  },
  {
    "id": "opencv-aruco-aruco-markers-e-115",
    "library": "OpenCV",
    "title": "aruco — ArUco markers",
    "shortDesc": "Маркеры ArUco для дополненной реальности и калибровки: детекция маркеров, оценка позы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Маркеры ArUco для дополненной реальности и калибровки: детекция маркеров, оценка позы. В OpenCV 4.x часть функциональности перенесена в objdetect. Используется для AR, робототехники, калибровки камер.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-aruco-aruco-markers-e-115-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-aruco-aruco-markers-e-115-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-aruco-aruco-markers-e-115-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__aruco.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"aruco - ArUco markers\")",
        "solution": "",
        "hints": [],
        "id": "opencv-aruco-aruco-markers-e-115-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = aruco - ArUco markers\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-aruco-aruco-markers-e-115-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = aruco - ArUco markers\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-aruco-aruco-markers-e-115-code-3"
      }
    ]
  },
  {
    "id": "opencv-bgsegm-background-foreground-segmentat-e-116",
    "library": "OpenCV",
    "title": "bgsegm — Background-Foreground Segmentat",
    "shortDesc": "Улучшенные методы выделения переднего плана: дополнительные алгоритмы фонового вычитания (сверх MOG2/KNN из video).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Улучшенные методы выделения переднего плана: дополнительные алгоритмы фонового вычитания (сверх MOG2/KNN из video). Для видеонаблюдения и сегментации движущихся объектов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-bgsegm-background-foreground-segmentat-e-116-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-bgsegm-background-foreground-segmentat-e-116-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-bgsegm-background-foreground-segmentat-e-116-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__bgsegm.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"bgsegm - Background-Foreground Segmentation\")",
        "solution": "",
        "hints": [],
        "id": "opencv-bgsegm-background-foreground-segmentat-e-116-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'bgsegm - Background-Foreground Segmentation\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-bgsegm-background-foreground-segmentat-e-116-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'bgsegm - Background-Foreground Segmentation\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-bgsegm-background-foreground-segmentat-e-116-code-3"
      }
    ]
  },
  {
    "id": "opencv-bioinspired-biologically-inspired-visi-e-117",
    "library": "OpenCV",
    "title": "bioinspired — Biologically inspired visi",
    "shortDesc": "Биологически мотивированные модели зрения: сетчатка, адаптация к освещению.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Биологически мотивированные модели зрения: сетчатка, адаптация к освещению. Исследовательские и специализированные задачи.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-bioinspired-biologically-inspired-visi-e-117-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-bioinspired-biologically-inspired-visi-e-117-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-bioinspired-biologically-inspired-visi-e-117-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__bioinspired.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"bioinspired - Biologically inspired vision\")",
        "solution": "",
        "hints": [],
        "id": "opencv-bioinspired-biologically-inspired-visi-e-117-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = bioinspired - Biologically inspired vision\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-bioinspired-biologically-inspired-visi-e-117-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = bioinspired - Biologically inspired vision\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-bioinspired-biologically-inspired-visi-e-117-code-3"
      }
    ]
  },
  {
    "id": "opencv-cuda-cuda-e-118",
    "library": "OpenCV",
    "title": "cuda* — CUDA-ускоренные модули",
    "shortDesc": "Модули с суффиксом cuda: cudaarithm (матричные операции), cudabgsegm (фоновое вычитание), cudacodec (кодеки), cudafeatures2d (признаки), cudafilters (фильтры), cudaimgproc (обработка), cudaobjdetect, cudaoptflow (optical flow), cudastereo (стерео), cudawarping (геометрия), cudev (устройство).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Модули с суффиксом cuda: cudaarithm (матричные операции), cudabgsegm (фоновое вычитание), cudacodec (кодеки), cudafeatures2d (признаки), cudafilters (фильтры), cudaimgproc (обработка), cudaobjdetect, cudaoptflow (optical flow), cudastereo (стерео), cudawarping (геометрия), cudev (устройство). Требуют сборку OpenCV с CUDA и совместимый GPU. Значительно ускоряют пайплайн на NVIDIA.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-cuda-cuda-e-118-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-cuda-cuda-e-118-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-cuda-cuda-e-118-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"cuda* - CUDA-ускоренные модули\")",
        "solution": "",
        "hints": [],
        "id": "opencv-cuda-cuda-e-118-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'cuda'* - CUDA-ускоренные модули\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-cuda-cuda-e-118-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'cuda'* - CUDA-ускоренные модули\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-cuda-cuda-e-118-code-3"
      }
    ]
  },
  {
    "id": "opencv-dnn-objdetect-dnn-superres-e-119",
    "library": "OpenCV",
    "title": "dnn_objdetect / dnn_superres",
    "shortDesc": "dnn_objdetect — готовые DNN-модели для детекции объектов (в т.ч.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>dnn_objdetect — готовые DNN-модели для детекции объектов (в т.ч. специфичные форматы). dnn_superres — супер-разрешение на основе нейросетей (увеличение разрешения изображения). Требуют загрузки весов; удобны для быстрого прототипа.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-dnn-objdetect-dnn-superres-e-119-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-dnn-objdetect-dnn-superres-e-119-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-dnn-objdetect-dnn-superres-e-119-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"dnn_objdetect / dnn_superres\")",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-objdetect-dnn-superres-e-119-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = \"dnn_objdetect / dnn_superres\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-objdetect-dnn-superres-e-119-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'dnn'_objdetect / dnn_superres\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-objdetect-dnn-superres-e-119-code-3"
      }
    ]
  },
  {
    "id": "opencv-face-face-analysis-e-120",
    "library": "OpenCV",
    "title": "face — Face Analysis",
    "shortDesc": "Анализ лиц: распознавание (LBPH, Eigenfaces, Fisherfaces), детекция ориентира (landmarks).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Анализ лиц: распознавание (LBPH, Eigenfaces, Fisherfaces), детекция ориентира (landmarks). Функции для построения пайплайна распознавания лиц. Дополняет objdetect (детекция лица) и dnn (современные сети).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-face-face-analysis-e-120-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-face-face-analysis-e-120-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-face-face-analysis-e-120-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__face.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"face - Face Analysis\")",
        "solution": "",
        "hints": [],
        "id": "opencv-face-face-analysis-e-120-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = face - Face Analysis\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-face-face-analysis-e-120-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = face - Face Analysis\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-face-face-analysis-e-120-code-3"
      }
    ]
  },
  {
    "id": "opencv-freetype-drawing-utf-8-strings-e-121",
    "library": "OpenCV",
    "title": "freetype — Drawing UTF-8 strings",
    "shortDesc": "Отрисовка текста в UTF-8 с помощью FreeType/Harfbuzz: поддержка разных языков и шрифтов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Отрисовка текста в UTF-8 с помощью FreeType/Harfbuzz: поддержка разных языков и шрифтов. Расширяет базовый putText для нелатинских символов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-freetype-drawing-utf-8-strings-e-121-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-freetype-drawing-utf-8-strings-e-121-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-freetype-drawing-utf-8-strings-e-121-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__freetype.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"freetype - Drawing UTF-8 strings\")",
        "solution": "",
        "hints": [],
        "id": "opencv-freetype-drawing-utf-8-strings-e-121-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = freetype - Drawing UTF-8 strings\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-freetype-drawing-utf-8-strings-e-121-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = freetype - Drawing UTF-8 strings\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-freetype-drawing-utf-8-strings-e-121-code-3"
      }
    ]
  },
  {
    "id": "opencv-img-hash-image-hashing-e-122",
    "library": "OpenCV",
    "title": "img_hash — Image hashing",
    "shortDesc": "Алгоритмы хеширования изображений (pHash, aHash и др.): компактное представление для быстрого сравнения «похожести» картинок.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Алгоритмы хеширования изображений (pHash, aHash и др.): компактное представление для быстрого сравнения «похожести» картинок. Поиск дубликатов, похожих изображений.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-img-hash-image-hashing-e-122-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-img-hash-image-hashing-e-122-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-img-hash-image-hashing-e-122-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__img__hash.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"img_hash - Image hashing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-img-hash-image-hashing-e-122-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = img_hash - Image hashing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-img-hash-image-hashing-e-122-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = img_hash - Image hashing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-img-hash-image-hashing-e-122-code-3"
      }
    ]
  },
  {
    "id": "opencv-intensity-transform-intensity-transfor-e-123",
    "library": "OpenCV",
    "title": "intensity_transform — Intensity transfor",
    "shortDesc": "Преобразования яркости/контраста: коррекция гистограммы, адаптация контраста.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Преобразования яркости/контраста: коррекция гистограммы, адаптация контраста. Удобно для предобработки перед детекцией или для улучшения визуализации.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-intensity-transform-intensity-transfor-e-123-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-intensity-transform-intensity-transfor-e-123-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-intensity-transform-intensity-transfor-e-123-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__intensity__transform.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"intensity_transform - Intensity transformation\")",
        "solution": "",
        "hints": [],
        "id": "opencv-intensity-transform-intensity-transfor-e-123-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = intensity_transform - Intensity transformation\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-intensity-transform-intensity-transfor-e-123-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = intensity_transform - Intensity transformation\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-intensity-transform-intensity-transfor-e-123-code-3"
      }
    ]
  },
  {
    "id": "opencv-optflow-optical-flow-algorithms-e-124",
    "library": "OpenCV",
    "title": "optflow — Optical Flow Algorithms",
    "shortDesc": "Расширенные алгоритмы оптического потока (помимо video): плотный и разрежённый поток, различные методы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Расширенные алгоритмы оптического потока (помимо video): плотный и разрежённый поток, различные методы. Для трекинга и оценки движения между кадрами.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-optflow-optical-flow-algorithms-e-124-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-optflow-optical-flow-algorithms-e-124-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-optflow-optical-flow-algorithms-e-124-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__optflow.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"optflow - Optical Flow Algorithms\")",
        "solution": "",
        "hints": [],
        "id": "opencv-optflow-optical-flow-algorithms-e-124-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = optflow - Optical Flow Algorithms\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-optflow-optical-flow-algorithms-e-124-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = optflow - Optical Flow Algorithms\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-optflow-optical-flow-algorithms-e-124-code-3"
      }
    ]
  },
  {
    "id": "opencv-plot-plot-for-mat-data-e-125",
    "library": "OpenCV",
    "title": "plot — Plot for Mat data",
    "shortDesc": "Визуализация данных Mat: построение графиков (гистограммы, кривые) в окне OpenCV.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Визуализация данных Mat: построение графиков (гистограммы, кривые) в окне OpenCV. Альтернатива matplotlib для простых графиков внутри OpenCV-приложения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-plot-plot-for-mat-data-e-125-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-plot-plot-for-mat-data-e-125-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-plot-plot-for-mat-data-e-125-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__plot.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"plot - Plot for Mat data\")",
        "solution": "",
        "hints": [],
        "id": "opencv-plot-plot-for-mat-data-e-125-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'plot - Plot for Mat data\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-plot-plot-for-mat-data-e-125-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'plot - Plot for Mat data\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-plot-plot-for-mat-data-e-125-code-3"
      }
    ]
  },
  {
    "id": "opencv-quality-image-quality-analysis-iqa-e-126",
    "library": "OpenCV",
    "title": "quality — Image Quality Analysis (IQA)",
    "shortDesc": "Оценка качества изображения: метрики резкости, шума, артефактов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Оценка качества изображения: метрики резкости, шума, артефактов. Полезно для автоматической оценки снимков и выбора лучшего кадра.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-quality-image-quality-analysis-iqa-e-126-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-quality-image-quality-analysis-iqa-e-126-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-quality-image-quality-analysis-iqa-e-126-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__quality.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"quality - Image Quality Analysis (IQA\"))",
        "solution": "",
        "hints": [],
        "id": "opencv-quality-image-quality-analysis-iqa-e-126-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = quality - Image Quality Analysis (IQA)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-quality-image-quality-analysis-iqa-e-126-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = quality - Image Quality Analysis (IQA)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-quality-image-quality-analysis-iqa-e-126-code-3"
      }
    ]
  },
  {
    "id": "opencv-reg-image-registration-e-127",
    "library": "OpenCV",
    "title": "reg — Image Registration",
    "shortDesc": "Регистрация изображений: выравнивание двух изображений одной сцены (сдвиг, поворот, нелинейные деформации).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Регистрация изображений: выравнивание двух изображений одной сцены (сдвиг, поворот, нелинейные деформации). Медицинская визуализация, мультиспектральные данные.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-reg-image-registration-e-127-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-reg-image-registration-e-127-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-reg-image-registration-e-127-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__reg.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"reg - Image Registration\")",
        "solution": "",
        "hints": [],
        "id": "opencv-reg-image-registration-e-127-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'reg - Image Registration\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-reg-image-registration-e-127-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'reg - Image Registration\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-reg-image-registration-e-127-code-3"
      }
    ]
  },
  {
    "id": "opencv-rgbd-rgb-depth-processing-e-128",
    "library": "OpenCV",
    "title": "rgbd — RGB-Depth Processing",
    "shortDesc": "Обработка RGB-D камер (Kinect, RealSense и др.): работа с глубиной, выравнивание глубины и цвета, нормали, сегментация по глубине.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Обработка RGB-D камер (Kinect, RealSense и др.): работа с глубиной, выравнивание глубины и цвета, нормали, сегментация по глубине.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-rgbd-rgb-depth-processing-e-128-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-rgbd-rgb-depth-processing-e-128-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-rgbd-rgb-depth-processing-e-128-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__rgbd.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"rgbd - RGB-Depth Processing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-rgbd-rgb-depth-processing-e-128-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'rgbd - RGB-Depth Processing\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-rgbd-rgb-depth-processing-e-128-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'rgbd - RGB-Depth Processing\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-rgbd-rgb-depth-processing-e-128-code-3"
      }
    ]
  },
  {
    "id": "opencv-saliency-saliency-api-e-129",
    "library": "OpenCV",
    "title": "saliency — Saliency API",
    "shortDesc": "Выделение заметных (salient) областей изображения: статическая и динамическая салиентность.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Выделение заметных (salient) областей изображения: статическая и динамическая салиентность. Используется для привлечения внимания модели к важным регионам.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-saliency-saliency-api-e-129-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-saliency-saliency-api-e-129-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-saliency-saliency-api-e-129-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__saliency.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"saliency - Saliency API\")",
        "solution": "",
        "hints": [],
        "id": "opencv-saliency-saliency-api-e-129-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = saliency - Saliency API\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-saliency-saliency-api-e-129-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = saliency - Saliency API\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-saliency-saliency-api-e-129-code-3"
      }
    ]
  },
  {
    "id": "opencv-sfm-structure-from-motion-e-130",
    "library": "OpenCV",
    "title": "sfm — Structure From Motion",
    "shortDesc": "Восстановление 3D структуры и движения камеры по нескольким кадрам.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Восстановление 3D структуры и движения камеры по нескольким кадрам. Классические методы SfM; для больших сцен часто используют внешние библиотеки (COLMAP и др.).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-sfm-structure-from-motion-e-130-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-sfm-structure-from-motion-e-130-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-sfm-structure-from-motion-e-130-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__sfm.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"sfm - Structure From Motion\")",
        "solution": "",
        "hints": [],
        "id": "opencv-sfm-structure-from-motion-e-130-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'sfm - Structure From Motion\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-sfm-structure-from-motion-e-130-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'sfm - Structure From Motion\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-sfm-structure-from-motion-e-130-code-3"
      }
    ]
  },
  {
    "id": "opencv-shape-shape-distance-and-matching-e-131",
    "library": "OpenCV",
    "title": "shape — Shape Distance and Matching",
    "shortDesc": "Сравнение и сопоставление форм контуров: расстояния между формами, матчинг.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сравнение и сопоставление форм контуров: расстояния между формами, матчинг. Для распознавания по форме объекта.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-shape-shape-distance-and-matching-e-131-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-shape-shape-distance-and-matching-e-131-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-shape-shape-distance-and-matching-e-131-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__shape.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"shape - Shape Distance and Matching\")",
        "solution": "",
        "hints": [],
        "id": "opencv-shape-shape-distance-and-matching-e-131-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'shape - Shape Distance and Matching\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-shape-shape-distance-and-matching-e-131-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'shape - Shape Distance and Matching\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-shape-shape-distance-and-matching-e-131-code-3"
      }
    ]
  },
  {
    "id": "opencv-stereo-stereo-correspondence-e-132",
    "library": "OpenCV",
    "title": "stereo — Stereo Correspondence",
    "shortDesc": "Стереосоответствие: построение карты глубины из стереопары.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стереосоответствие: построение карты глубины из стереопары. Алгоритмы блочного матчинга и др. Дополняет calib3d для полного стереопайплайна.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-stereo-stereo-correspondence-e-132-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-stereo-stereo-correspondence-e-132-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-stereo-stereo-correspondence-e-132-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__stereo.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"stereo - Stereo Correspondence\")",
        "solution": "",
        "hints": [],
        "id": "opencv-stereo-stereo-correspondence-e-132-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'stereo - Stereo Correspondence\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-stereo-stereo-correspondence-e-132-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'stereo - Stereo Correspondence\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-stereo-stereo-correspondence-e-132-code-3"
      }
    ]
  },
  {
    "id": "opencv-structured-light-structured-light-api-e-133",
    "library": "OpenCV",
    "title": "structured_light — Structured Light API",
    "shortDesc": "Структурированный свет: 3D-сканирование с помощью проектора и камеры.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Структурированный свет: 3D-сканирование с помощью проектора и камеры. Специализированные приложения для реконструкции поверхности.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-structured-light-structured-light-api-e-133-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-structured-light-structured-light-api-e-133-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-structured-light-structured-light-api-e-133-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__structured__light.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"structured_light - Structured Light API\")",
        "solution": "",
        "hints": [],
        "id": "opencv-structured-light-structured-light-api-e-133-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'structured'_light - Structured Light API\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-structured-light-structured-light-api-e-133-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'structured'_light - Structured Light API\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-structured-light-structured-light-api-e-133-code-3"
      }
    ]
  },
  {
    "id": "opencv-superres-super-resolution-e-134",
    "library": "OpenCV",
    "title": "superres — Super Resolution",
    "shortDesc": "Супер-разрешение классическими методами (без DNN): увеличение разрешения изображения.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Супер-разрешение классическими методами (без DNN): увеличение разрешения изображения. dnn_superres даёт более качественный результат при наличии модели.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-superres-super-resolution-e-134-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-superres-super-resolution-e-134-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-superres-super-resolution-e-134-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__superres.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"superres - Super Resolution\")",
        "solution": "",
        "hints": [],
        "id": "opencv-superres-super-resolution-e-134-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'superres - Super Resolution\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-superres-super-resolution-e-134-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'superres - Super Resolution\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-superres-super-resolution-e-134-code-3"
      }
    ]
  },
  {
    "id": "opencv-surface-matching-surface-matching-e-135",
    "library": "OpenCV",
    "title": "surface_matching — Surface Matching",
    "shortDesc": "Сопоставление 3D поверхностей: обнаружение объектов по 3D модели.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сопоставление 3D поверхностей: обнаружение объектов по 3D модели. Для робототехники и промышленной инспекции.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-surface-matching-surface-matching-e-135-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-surface-matching-surface-matching-e-135-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-surface-matching-surface-matching-e-135-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__surface__matching.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"surface_matching - Surface Matching\")",
        "solution": "",
        "hints": [],
        "id": "opencv-surface-matching-surface-matching-e-135-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'surface'_matching - Surface Matching\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-surface-matching-surface-matching-e-135-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'surface'_matching - Surface Matching\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-surface-matching-surface-matching-e-135-code-3"
      }
    ]
  },
  {
    "id": "opencv-text-scene-text-detection-and-recognit-e-136",
    "library": "OpenCV",
    "title": "text — Scene Text Detection and Recognit",
    "shortDesc": "Детекция и распознавание текста на сцене (OCR): детектор областей с текстом, распознавание символов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Детекция и распознавание текста на сцене (OCR): детектор областей с текстом, распознавание символов. Классические и нейросетевые компоненты; для production часто используют Tesseract или специализированные сети.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-text-scene-text-detection-and-recognit-e-136-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-text-scene-text-detection-and-recognit-e-136-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-text-scene-text-detection-and-recognit-e-136-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__text.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"text - Scene Text Detection and Recognition\")",
        "solution": "",
        "hints": [],
        "id": "opencv-text-scene-text-detection-and-recognit-e-136-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'text - Scene Text Detection and Recognition\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-text-scene-text-detection-and-recognit-e-136-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'text - Scene Text Detection and Recognition\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-text-scene-text-detection-and-recognit-e-136-code-3"
      }
    ]
  },
  {
    "id": "opencv-tracking-tracking-api-e-137",
    "library": "OpenCV",
    "title": "tracking — Tracking API",
    "shortDesc": "API трекинга объектов: трекеры по bounding box (KCF, CSRT, MedianFlow и др.), обновление положения объекта в следующих кадрах.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>API трекинга объектов: трекеры по bounding box (KCF, CSRT, MedianFlow и др.), обновление положения объекта в следующих кадрах. Используется после детектора для стабильного слежения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-tracking-tracking-api-e-137-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-tracking-tracking-api-e-137-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-tracking-tracking-api-e-137-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__tracking.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"tracking - Tracking API\")",
        "solution": "",
        "hints": [],
        "id": "opencv-tracking-tracking-api-e-137-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = tracking - Tracking API\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-tracking-tracking-api-e-137-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = tracking - Tracking API\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-tracking-tracking-api-e-137-code-3"
      }
    ]
  },
  {
    "id": "opencv-videostab-video-stabilization-e-138",
    "library": "OpenCV",
    "title": "videostab — Video Stabilization",
    "shortDesc": "Стабилизация видео: устранение дрожания камеры, выравнивание кадров.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стабилизация видео: устранение дрожания камеры, выравнивание кадров. Улучшает качество съёмки с рук.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-videostab-video-stabilization-e-138-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-videostab-video-stabilization-e-138-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-videostab-video-stabilization-e-138-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__videostab.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"videostab - Video Stabilization\")",
        "solution": "",
        "hints": [],
        "id": "opencv-videostab-video-stabilization-e-138-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'videostab - Video Stabilization\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-videostab-video-stabilization-e-138-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'videostab - Video Stabilization\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-videostab-video-stabilization-e-138-code-3"
      }
    ]
  },
  {
    "id": "opencv-viz-3d-visualizer-e-139",
    "library": "OpenCV",
    "title": "viz — 3D Visualizer",
    "shortDesc": "3D визуализация: отображение облаков точек, координатных систем, мешей.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>3D визуализация: отображение облаков точек, координатных систем, мешей. Требует VTK. Для отладки 3D-реконструкции и калибровки.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-viz-3d-visualizer-e-139-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-viz-3d-visualizer-e-139-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-viz-3d-visualizer-e-139-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__viz.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"viz - 3D Visualizer\")",
        "solution": "",
        "hints": [],
        "id": "opencv-viz-3d-visualizer-e-139-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'viz -' 3D Visualizer\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-viz-3d-visualizer-e-139-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'viz -' 3D Visualizer\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-viz-3d-visualizer-e-139-code-3"
      }
    ]
  },
  {
    "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140",
    "library": "OpenCV",
    "title": "wechat_qrcode — WeChat QR code detector",
    "shortDesc": "Детектор и декодер QR-кодов от WeChat: обнаружение и распознавание QR в кадре.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Детектор и декодер QR-кодов от WeChat: обнаружение и распознавание QR в кадре. Альтернатива встроенному QR-детектору OpenCV (если доступен в сборке).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__wechat__qrcode.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"wechat_qrcode - WeChat QR code detector\")",
        "solution": "",
        "hints": [],
        "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'wechat'_qrcode - WeChat QR code detector\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'wechat'_qrcode - WeChat QR code detector\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code-3"
      }
    ]
  },
  {
    "id": "opencv-xfeatures2d-extra-2d-features-e-141",
    "library": "OpenCV",
    "title": "xfeatures2d — Extra 2D Features",
    "shortDesc": "Дополнительные 2D-признаки: SIFT, SURF (в non-free части), BRIEF, FREAK и др.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Дополнительные 2D-признаки: SIFT, SURF (в non-free части), BRIEF, FREAK и др. Расширяет features2d; часть алгоритмов может требовать отдельной сборки (contrib).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-xfeatures2d-extra-2d-features-e-141-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-xfeatures2d-extra-2d-features-e-141-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-xfeatures2d-extra-2d-features-e-141-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__xfeatures2d.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"xfeatures2d - Extra 2D Features\")",
        "solution": "",
        "hints": [],
        "id": "opencv-xfeatures2d-extra-2d-features-e-141-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = 'xfeatures'2d - Extra 2D Features\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-xfeatures2d-extra-2d-features-e-141-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'xfeatures'2d - Extra 2D Features\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-xfeatures2d-extra-2d-features-e-141-code-3"
      }
    ]
  },
  {
    "id": "opencv-ximgproc-extended-image-processing-e-142",
    "library": "OpenCV",
    "title": "ximgproc — Extended Image Processing",
    "shortDesc": "Расширенная обработка изображений: селективное размытие, детекция границ (структурированные леса), сегментация, фильтры.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Расширенная обработка изображений: селективное размытие, детекция границ (структурированные леса), сегментация, фильтры. Дополняет imgproc для более сложных алгоритмов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-ximgproc-extended-image-processing-e-142-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-ximgproc-extended-image-processing-e-142-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-ximgproc-extended-image-processing-e-142-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__ximgproc.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"ximgproc - Extended Image Processing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-ximgproc-extended-image-processing-e-142-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = ximgproc - Extended Image Processing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-ximgproc-extended-image-processing-e-142-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = ximgproc - Extended Image Processing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-ximgproc-extended-image-processing-e-142-code-3"
      }
    ]
  },
  {
    "id": "opencv-xphoto-additional-photo-processing-e-143",
    "library": "OpenCV",
    "title": "xphoto — Additional photo processing",
    "shortDesc": "Дополнительные алгоритмы обработки фото: коррекция баланса белого, инпейнтинг, тонирование.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Дополнительные алгоритмы обработки фото: коррекция баланса белого, инпейнтинг, тонирование. Расширяет модуль photo.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-opencv-xphoto-additional-photo-processing-e-143-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-opencv-xphoto-additional-photo-processing-e-143-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-opencv-xphoto-additional-photo-processing-e-143-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__xphoto.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(\"xphoto - Additional photo processing\")",
        "solution": "",
        "hints": [],
        "id": "opencv-xphoto-additional-photo-processing-e-143-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Исследование объекта, который возвращает функция\nresult = xphoto - Additional photo processing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-xphoto-additional-photo-processing-e-143-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = xphoto - Additional photo processing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "opencv-xphoto-additional-photo-processing-e-143-code-3"
      }
    ]
  },
  {
    "id": "pytorch-batch-gradient-descent-e-144",
    "library": "PyTorch",
    "title": "# Batch gradient descent — градиент по В",
    "shortDesc": "Batch (полный батч): за один вызов optimizer.step() используется вся обучающая выборка.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Batch (полный батч): за один вызов optimizer.step() используется вся обучающая выборка. Градиент считается по всем примерам сразу — он стабильный, но один шаг очень тяжёлый по памяти и времени. Подходит только для маленьких датасетов. В коде: передаёте в model(X_full) весь X целиком.<br><br><strong>Когда использовать:</strong> маленькие данные (сотни–тысячи примеров), когда всё помещается в память. В глубоком обучении почти не используется.<br><strong>Минусы:</strong> не масштабируется; локальные минимумы застревают легче.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-batch-gradient-descent-e-144-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-batch-gradient-descent-e-144-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-batch-gradient-descent-e-144-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/optim.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Batch gradient descent - градиент по ВСЕМ данным за один шаг\nfor epoch in range(epochs):\n    optimizer.zero_grad()\n    out = model(X_full)  # весь датасет\n    loss = criterion(out, y_full)\n    loss.backward()\nprint(\"    optimizer.step(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-batch-gradient-descent-e-144-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult =     optimizer.step()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-batch-gradient-descent-e-144-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out =     optimizer.step()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-batch-gradient-descent-e-144-code-3"
      }
    ]
  },
  {
    "id": "pytorch-stochastic-gradient-descent-sgd-e-145",
    "library": "PyTorch",
    "title": "# Stochastic gradient descent (SGD) — од",
    "shortDesc": "Stochastic (стохастический): один шаг = один пример.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Stochastic (стохастический): один шаг = один пример. На каждой итерации считаете loss по одному объекту (X[i:i+1] даёт форму [1, ...]). Градиент очень шумный — это может помочь выходить из плоских минимумов, но обучение нестабильное. В чистом виде редко используют: слишком много шагов за эпоху и сильный шум.<br><br><strong>Когда использовать:</strong> онлайн-обучение, потоковые данные; иногда для мелких датасетов.<br><strong></div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Нюанс: </strong> X[i:i+1] важен — срез сохраняет размерность (1, features), а X[i] дала бы (features,) и сломала бы батч.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-stochastic-gradient-descent-sgd-e-145-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-stochastic-gradient-descent-sgd-e-145-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-stochastic-gradient-descent-sgd-e-145-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/generated/torch.optim.SGD.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Stochastic gradient descent (SGD) - один пример за шаг\nfor epoch in range(epochs):\n    for i in range(len(X)):\n        optimizer.zero_grad()\n        out = model(X[i:i+1])  # один пример\n        loss = criterion(out, y[i:i+1])\n        loss.backward()\nprint(\"        optimizer.step(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-stochastic-gradient-descent-sgd-e-145-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult =         optimizer.step()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-stochastic-gradient-descent-sgd-e-145-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out =         optimizer.step()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-stochastic-gradient-descent-sgd-e-145-code-3"
      }
    ]
  },
  {
    "id": "pytorch-mini-batch-gradient-descent-e-146",
    "library": "PyTorch",
    "title": "# Mini-batch gradient descent — батч за ",
    "shortDesc": "Mini-batch (мини-батч): один шаг = один батч из N примеров (типично 32, 64, 128).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Mini-batch (мини-батч): один шаг = один батч из N примеров (типично 32, 64, 128). Баланс между стабильностью градиента и скоростью: градиент усредняется по батчу, шум меньше чем в SGD, память и время — меньше чем в batch. В PyTorch это стандарт: создаёте DataLoader с batch_size и shuffle=True, в цикле for x, y in loader получаете тензоры формы (batch_size, ...).<br><br><strong>Параметры DataLoader:</strong> batch_size — сколько примеров в батче; shuffle=True — перемешивать данные каждую эпоху (для обучения обязательно). num_workers — загрузка в фоне (0 = в основном процессе).<br><strong>Когда использовать:</strong> почти всегда в нейросетях; размер батча подбирают по памяти GPU и стабильности обучения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-mini-batch-gradient-descent-e-146-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-mini-batch-gradient-descent-e-146-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-mini-batch-gradient-descent-e-146-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Mini-batch gradient descent - батч за шаг (стандарт в PyTorch)\nloader = DataLoader(dataset, batch_size=32, shuffle=True)\nfor epoch in range(epochs):\n    for x, y in loader:  # x, y - батчи по 32 примера\n        optimizer.zero_grad()\n        out = model(x)\n        loss = criterion(out, y)\n        loss.backward()\nprint(\"        optimizer.step(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-mini-batch-gradient-descent-e-146-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult =         optimizer.step()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-mini-batch-gradient-descent-e-146-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out =         optimizer.step()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-mini-batch-gradient-descent-e-146-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-l1loss-e-147",
    "library": "PyTorch",
    "title": "nn.L1Loss()",
    "shortDesc": "Mean Absolute Error (MAE): среднее от |output − target|.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Mean Absolute Error (MAE): среднее от |output − target|. Используется в регрессии, когда выбросы не должны сильно влиять (в отличие от MSE). Вход и target — одна форма (например оба [N] или [N, 1]).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: reduction=\"mean\".<br><strong>Пример:</strong> предсказание числа (цена, возраст).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-l1loss-e-147-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-l1loss-e-147-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-l1loss-e-147-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.L1Loss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.L1Loss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-l1loss-e-147-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.L1Loss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-l1loss-e-147-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.L1Loss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-l1loss-e-147-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-mseloss-e-148",
    "library": "PyTorch",
    "title": "nn.MSELoss()",
    "shortDesc": "Mean Squared Error: среднее от (output − target)².",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Mean Squared Error: среднее от (output − target)². Самый частый loss для регрессии. Сильно штрафует большие ошибки — чувствителен к выбросам. Вход и target — одна форма.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: reduction=\"mean\".<br><strong>Когда использовать:</strong> регрессия, когда ошибки распределены нормально и выбросов мало.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-mseloss-e-148-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-mseloss-e-148-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-mseloss-e-148-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.MSELoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.MSELoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-mseloss-e-148-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.MSELoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-mseloss-e-148-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.MSELoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-mseloss-e-148-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-crossentropyloss-e-149",
    "library": "PyTorch",
    "title": "nn.CrossEntropyLoss()",
    "shortDesc": "Для многоклассовой классификации (один класс на объект).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Для многоклассовой классификации (один класс на объект). Вход — логиты модели, форма [N, C] (N — батч, C — число классов); target — индексы классов, форма [N], тип long, значения от 0 до C−1. Внутри применяется log_softmax к выходу и NLL. Не нужно вручную делать softmax перед передачей.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: weight (веса классов), ignore_index, label_smoothing, reduction.<br><strong>Пример:</strong> классификация изображений (собака/кошка/птица).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-crossentropyloss-e-149-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-crossentropyloss-e-149-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-crossentropyloss-e-149-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.CrossEntropyLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.CrossEntropyLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-crossentropyloss-e-149-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.CrossEntropyLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-crossentropyloss-e-149-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.CrossEntropyLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-crossentropyloss-e-149-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-ctcloss-e-150",
    "library": "PyTorch",
    "title": "nn.CTCLoss()",
    "shortDesc": "Connectionist Temporal Classification — для задач, где выход — последовательность, а целевых меток меньше (например распознавание речи: аудио кадры → текст).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Connectionist Temporal Classification — для задач, где выход — последовательность, а целевых меток меньше (например распознавание речи: аудио кадры → текст).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: blank (индекс пустого символа), zero_infinity. Сложнее в использовании: нужны длины входов и целей.<br><strong>Когда использовать:</strong> speech-to-text, распознавание рукописного ввода.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-ctcloss-e-150-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-ctcloss-e-150-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-ctcloss-e-150-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.CTCLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.CTCLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-ctcloss-e-150-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.CTCLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-ctcloss-e-150-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.CTCLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-ctcloss-e-150-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-nllloss-e-151",
    "library": "PyTorch",
    "title": "nn.NLLLoss()",
    "shortDesc": "Negative Log Likelihood: принимает логиты после log_softmax (не после обычного softmax).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Negative Log Likelihood: принимает логиты после log_softmax (не после обычного softmax). Target — индексы классов [N]. Часто используют вместе: выход модели → log_softmax → NLLLoss. CrossEntropyLoss по сути объединяет log_softmax + NLLLoss в одном классе.<br><strong>Когда использовать:</strong> если вы сами делаете log_softmax (например в кастомной голове).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-nllloss-e-151-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-nllloss-e-151-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-nllloss-e-151-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.NLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.NLLLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-nllloss-e-151-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.NLLLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-nllloss-e-151-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.NLLLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-nllloss-e-151-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-poissonnllloss-e-152",
    "library": "PyTorch",
    "title": "nn.PoissonNLLLoss()",
    "shortDesc": "NLL при предположении, что цель распределена по Пуассону.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>NLL при предположении, что цель распределена по Пуассону.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: log_input (True — вход уже логарифм), full (учитывать ли приближение Стирлинга). Редко используется в типичных задачах.<br><strong>Когда использовать:</strong> подсчёт событий (счётчики).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-poissonnllloss-e-152-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-poissonnllloss-e-152-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-poissonnllloss-e-152-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.PoissonNLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.PoissonNLLLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-poissonnllloss-e-152-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.PoissonNLLLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-poissonnllloss-e-152-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.PoissonNLLLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-poissonnllloss-e-152-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-gaussiannllloss-e-153",
    "library": "PyTorch",
    "title": "nn.GaussianNLLLoss()",
    "shortDesc": "Регрессия с предсказанием не только среднего, но и дисперсии.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Регрессия с предсказанием не только среднего, но и дисперсии. Вход: предсказание и дисперсия (или лог-дисперсия); target — истинное значение. Полезно для оценки неопределённости.<br><strong>Когда использовать:</strong> когда нужна уверенность модели (uncertainty).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-gaussiannllloss-e-153-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-gaussiannllloss-e-153-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-gaussiannllloss-e-153-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.GaussianNLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.GaussianNLLLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-gaussiannllloss-e-153-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.GaussianNLLLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-gaussiannllloss-e-153-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.GaussianNLLLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-gaussiannllloss-e-153-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-kldivloss-e-154",
    "library": "PyTorch",
    "title": "nn.KLDivLoss()",
    "shortDesc": "Kullback–Leibler divergence между двумя распределениями.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Kullback–Leibler divergence между двумя распределениями. Вход — логарифмы вероятностей (логиты после log_softmax), target — вероятности. Reduction: \"batchmean\" для совместимости с формулой. Используется в VAE, дистилляции, когда нужно приблизить одно распределение к другому.<br><strong>Когда использовать:</strong> дистилляция моделей, VAE.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-kldivloss-e-154-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-kldivloss-e-154-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-kldivloss-e-154-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.KLDivLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.KLDivLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-kldivloss-e-154-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.KLDivLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-kldivloss-e-154-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.KLDivLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-kldivloss-e-154-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-bceloss-e-155",
    "library": "PyTorch",
    "title": "nn.BCELoss()",
    "shortDesc": "Binary Cross Entropy: бинарная классификация.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Binary Cross Entropy: бинарная классификация. Вход — вероятности (после sigmoid), форма [N, 1] или [N]; target — 0 или 1, та же форма. Значения входа должны быть в (0, 1), иначе градиенты нестабильны.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: weight, reduction.<br><strong>Нюанс:</strong> чаще используют BCEWithLogitsLoss — он объединяет sigmoid и BCE и численно стабильнее.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-bceloss-e-155-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-bceloss-e-155-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-bceloss-e-155-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.BCELoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.BCELoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bceloss-e-155-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.BCELoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bceloss-e-155-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.BCELoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bceloss-e-155-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-bcewithlogitsloss-e-156",
    "library": "PyTorch",
    "title": "nn.BCEWithLogitsLoss()",
    "shortDesc": "BCE + Sigmoid в одном классе.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>BCE + Sigmoid в одном классе. Вход — сырые логиты (без sigmoid), target — 0 или 1. Внутри применяется sigmoid; реализация устойчива к переполнению. Рекомендуется вместо ручного sigmoid + BCELoss.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: pos_weight (для несбалансированных классов), reduction.<br><strong>Пример:</strong> бинарная классификация (да/нет, есть объект/нет).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-bcewithlogitsloss-e-156-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-bcewithlogitsloss-e-156-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-bcewithlogitsloss-e-156-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.BCEWithLogitsLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.BCEWithLogitsLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bcewithlogitsloss-e-156-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.BCEWithLogitsLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bcewithlogitsloss-e-156-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.BCEWithLogitsLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bcewithlogitsloss-e-156-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-marginrankingloss-e-157",
    "library": "PyTorch",
    "title": "nn.MarginRankingLoss()",
    "shortDesc": "Ranking: на входе два тензора x1, x2 и метки target (1 или −1).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Ranking: на входе два тензора x1, x2 и метки target (1 или −1). Loss поощряет: если target=1, то x1 > x2; если −1, то x1 < x2. Используется в рекомендациях, ранжировании.<br><strong>Когда использовать:</strong> learning to rank, рекомендации.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-marginrankingloss-e-157-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-marginrankingloss-e-157-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-marginrankingloss-e-157-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.MarginRankingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.MarginRankingLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-marginrankingloss-e-157-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.MarginRankingLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-marginrankingloss-e-157-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.MarginRankingLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-marginrankingloss-e-157-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-hingeembeddingloss-e-158",
    "library": "PyTorch",
    "title": "nn.HingeEmbeddingLoss()",
    "shortDesc": "Для меток ±1: если target=1, loss = max(0, margin − x); если −1, loss = max(0, x).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Для меток ±1: если target=1, loss = max(0, margin − x); если −1, loss = max(0, x). Параметр margin по умолчанию 1. Используется в метрическом обучении, эмбеддингах.<br><strong>Когда использовать:</strong> когда нужны эмбеддинги с большим отступом между классами.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-hingeembeddingloss-e-158-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-hingeembeddingloss-e-158-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-hingeembeddingloss-e-158-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.HingeEmbeddingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.HingeEmbeddingLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-hingeembeddingloss-e-158-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.HingeEmbeddingLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-hingeembeddingloss-e-158-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.HingeEmbeddingLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-hingeembeddingloss-e-158-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-multilabelmarginloss-e-159",
    "library": "PyTorch",
    "title": "nn.MultiLabelMarginLoss()",
    "shortDesc": "Multi-label классификация с margin: у одного объекта может быть несколько правильных классов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Multi-label классификация с margin: у одного объекта может быть несколько правильных классов. Вход — 2D тензор, target — индексы правильных классов (не one-hot). Специфичный формат target; см. документацию.<br><strong>Когда использовать:</strong> несколько меток на объект (теги, категории).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelmarginloss-e-159-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelmarginloss-e-159-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelmarginloss-e-159-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.MultiLabelMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.MultiLabelMarginLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelmarginloss-e-159-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.MultiLabelMarginLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelmarginloss-e-159-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.MultiLabelMarginLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelmarginloss-e-159-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-huberloss-e-160",
    "library": "PyTorch",
    "title": "nn.HuberLoss()",
    "shortDesc": "Гибрид L2 и L1: при малой ошибке ведёт себя как квадрат (гладко), при большой — как модуль (устойчиво к выбросам).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Гибрид L2 и L1: при малой ошибке ведёт себя как квадрат (гладко), при большой — как модуль (устойчиво к выбросам). Параметр delta задаёт порог перехода. Регрессия. Хорош когда в данных есть выбросы.<br><strong>Когда использовать:</strong> регрессия с зашумлёнными или выбросными данными.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-huberloss-e-160-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-huberloss-e-160-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-huberloss-e-160-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.HuberLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.HuberLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-huberloss-e-160-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.HuberLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-huberloss-e-160-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.HuberLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-huberloss-e-160-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-smoothl1loss-e-161",
    "library": "PyTorch",
    "title": "nn.SmoothL1Loss()",
    "shortDesc": "Похож на Huber: при |error| Когда использовать: регрессия координат, боксов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Похож на Huber: при |error| < beta — квадратичная часть, иначе линейная. Регрессия, устойчивость к выбросам. Параметр beta (по умолчанию 1). Часто используется в детекции объектов (bounding box regression).<br><strong>Когда использовать:</strong> регрессия координат, боксов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-smoothl1loss-e-161-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-smoothl1loss-e-161-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-smoothl1loss-e-161-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.SmoothL1Loss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.SmoothL1Loss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-smoothl1loss-e-161-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.SmoothL1Loss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-smoothl1loss-e-161-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.SmoothL1Loss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-smoothl1loss-e-161-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-softmarginloss-e-162",
    "library": "PyTorch",
    "title": "nn.SoftMarginLoss()",
    "shortDesc": "Двухклассовый логистический loss.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Двухклассовый логистический loss. Метки target: +1 или −1. Вход — один тензор (разность или оценка). Реже используется чем BCEWithLogitsLoss.<br><strong>Когда использовать:</strong> бинарная классификация с метками ±1.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-softmarginloss-e-162-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-softmarginloss-e-162-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-softmarginloss-e-162-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.SoftMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.SoftMarginLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-softmarginloss-e-162-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.SoftMarginLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-softmarginloss-e-162-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.SoftMarginLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-softmarginloss-e-162-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-multilabelsoftmarginloss-e-163",
    "library": "PyTorch",
    "title": "nn.MultiLabelSoftMarginLoss()",
    "shortDesc": "Multi-label классификация: для каждого класса своя бинарная задача (one-vs-rest).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Multi-label классификация: для каждого класса своя бинарная задача (one-vs-rest). Вход — логиты [N, C], target — бинарная матрица [N, C] (0 или 1).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: weight, reduction.<br><strong>Когда использовать:</strong> несколько независимых меток на объект.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelsoftmarginloss-e-163-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelsoftmarginloss-e-163-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-multilabelsoftmarginloss-e-163-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.MultiLabelSoftMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.MultiLabelSoftMarginLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelsoftmarginloss-e-163-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.MultiLabelSoftMarginLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelsoftmarginloss-e-163-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.MultiLabelSoftMarginLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelsoftmarginloss-e-163-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-cosineembeddingloss-e-164",
    "library": "PyTorch",
    "title": "nn.CosineEmbeddingLoss()",
    "shortDesc": "Измеряет косинусное сходство между векторами x1 и x2.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Измеряет косинусное сходство между векторами x1 и x2. Target: 1 — векторы должны быть похожи, −1 — различаться. Параметр margin. Используется в эмбеддингах, сравнении пар.<br><strong>Когда использовать:</strong> сходство текстов/изображений, siamese сети.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-cosineembeddingloss-e-164-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-cosineembeddingloss-e-164-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-cosineembeddingloss-e-164-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.CosineEmbeddingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.CosineEmbeddingLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-cosineembeddingloss-e-164-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.CosineEmbeddingLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-cosineembeddingloss-e-164-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.CosineEmbeddingLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-cosineembeddingloss-e-164-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-multimarginloss-e-165",
    "library": "PyTorch",
    "title": "nn.MultiMarginLoss()",
    "shortDesc": "Multi-class hinge (margin) loss.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Multi-class hinge (margin) loss. Вход — сырые оценки [N, C], target — индексы классов [N]. Штрафует правильный класс, если его оценка не больше остальных на margin.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: p (норма), margin, weight.<br><strong>Когда использовать:</strong> многоклассовая классификация с margin (альтернатива CrossEntropy).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-multimarginloss-e-165-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-multimarginloss-e-165-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-multimarginloss-e-165-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.MultiMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.MultiMarginLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multimarginloss-e-165-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.MultiMarginLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multimarginloss-e-165-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.MultiMarginLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multimarginloss-e-165-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-tripletmarginloss-e-166",
    "library": "PyTorch",
    "title": "nn.TripletMarginLoss()",
    "shortDesc": "Triplet loss: на входе anchor, positive (того же класса), negative (другого класса).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Triplet loss: на входе anchor, positive (того же класса), negative (другого класса). Цель — чтобы расстояние(anchor, positive) + margin < distance(anchor, negative). Используется в face recognition, метрическом обучении.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: margin, p (норма), swap.<br><strong>Когда использовать:</strong> эмбеддинги лиц, поиск похожих объектов.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginloss-e-166-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginloss-e-166-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginloss-e-166-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.TripletMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.TripletMarginLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginloss-e-166-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.TripletMarginLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginloss-e-166-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.TripletMarginLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginloss-e-166-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167",
    "library": "PyTorch",
    "title": "nn.TripletMarginWithDistanceLoss()",
    "shortDesc": "Тот же triplet, но функцию расстояния можно задать своей (distance_function).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Тот же triplet, но функцию расстояния можно задать своей (distance_function). По умолчанию — Lp. Гибкость для кастомных метрик.<br><strong>Когда использовать:</strong> когда нужно своё расстояние в triplet loss.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginwithdistanceloss-e-167-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginwithdistanceloss-e-167-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginwithdistanceloss-e-167-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.TripletMarginWithDistanceLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"nn.TripletMarginWithDistanceLoss(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.TripletMarginWithDistanceLoss()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.TripletMarginWithDistanceLoss()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-sgd-e-168",
    "library": "PyTorch",
    "title": "torch.optim.SGD()",
    "shortDesc": "Stochastic Gradient Descent: классическое правило обновления весов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Stochastic Gradient Descent: классическое правило обновления весов.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: params (model.parameters()), lr (обязательный, типично 0.01–0.1), momentum (0–1 — сглаживание градиента, часто 0.9), weight_decay (L2-регуляризация). С momentum=0.9 очень часто используется для обучения свёрточных сетей; без momentum — базовый вариант, иногда нестабильный.<br><strong>Когда использовать:</strong> когда нужен простой и предсказуемый оптимизатор; для многих архитектур с momentum даёт хороший результат.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sgd-e-168-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sgd-e-168-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sgd-e-168-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.SGD.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.SGD(params, lr, momentum=0, weight_decay=0)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sgd-e-168-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.SGD(params, lr, momentum=0, weight_decay=0)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sgd-e-168-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.SGD(params, lr, momentum=0, weight_decay=0)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sgd-e-168-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adam-e-169",
    "library": "PyTorch",
    "title": "torch.optim.Adam()",
    "shortDesc": "Adam: адаптивный learning rate для каждого параметра (момент первого и второго порядка).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adam: адаптивный learning rate для каждого параметра (момент первого и второго порядка).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr (часто 1e-3), betas — коэффициенты для моментов, eps — для численной стабильности. Обычно хорошо работает \"из коробки\", не требует тонкой настройки lr. Минус: часто хуже обобщает чем SGD+momentum при долгом обучении.<br><strong>Когда использовать:</strong> по умолчанию для многих задач (NLP, GAN, быстрый прототип).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adam-e-169-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adam-e-169-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adam-e-169-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Adam.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Adam(params, lr=1e-3, betas=(0.9, 0.999))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adam-e-169-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Adam(params, lr=1e-3, betas=(0.9, 0.999))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adam-e-169-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Adam(params, lr=1e-3, betas=(0.9, 0.999))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adam-e-169-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adamw-e-170",
    "library": "PyTorch",
    "title": "torch.optim.AdamW()",
    "shortDesc": "Adam с decoupled weight decay: weight decay применяется к весам отдельно от градиента (как в оригинальной статье), а не через L2 в градиенте.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adam с decoupled weight decay: weight decay применяется к весам отдельно от градиента (как в оригинальной статье), а не через L2 в градиенте.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, betas, eps, weight_decay. Рекомендуется вместо Adam + L2-регуляризации.<br><strong>Когда использовать:</strong> трансформеры, когда нужна сильная регуляризация весов.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamw-e-170-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamw-e-170-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamw-e-170-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.AdamW.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.AdamW(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamw-e-170-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.AdamW(params, lr=1e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamw-e-170-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.AdamW(params, lr=1e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamw-e-170-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adagrad-e-171",
    "library": "PyTorch",
    "title": "torch.optim.Adagrad()",
    "shortDesc": "Adagrad: уменьшает lr для параметров с большей историей градиентов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adagrad: уменьшает lr для параметров с большей историей градиентов.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, lr_decay, eps. Подходит для разрежённых данных (NLP); для плотных данных часто lr падает слишком сильно.<br><strong>Когда использовать:</strong> разрежённые градиенты, рекомендации.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adagrad-e-171-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adagrad-e-171-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adagrad-e-171-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Adagrad.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Adagrad(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adagrad-e-171-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Adagrad(params, lr=1e-2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adagrad-e-171-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Adagrad(params, lr=1e-2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adagrad-e-171-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adadelta-e-172",
    "library": "PyTorch",
    "title": "torch.optim.Adadelta()",
    "shortDesc": "Adadelta: адаптивный lr без явного задания learning rate (используется скользящее среднее градиентов и обновлений).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adadelta: адаптивный lr без явного задания learning rate (используется скользящее среднее градиентов и обновлений).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: rho, eps. Редко используется в глубоком обучении.<br><strong>Когда использовать:</strong> когда не хотите задавать lr вручную (но на практике lr всё равно подбирают).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adadelta-e-172-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adadelta-e-172-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adadelta-e-172-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Adadelta.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Adadelta(params, lr=1.0, rho=0.9)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adadelta-e-172-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Adadelta(params, lr=1.0, rho=0.9)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adadelta-e-172-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Adadelta(params, lr=1.0, rho=0.9)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adadelta-e-172-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-rmsprop-e-173",
    "library": "PyTorch",
    "title": "torch.optim.RMSprop()",
    "shortDesc": "RMSprop: скользящее среднее квадратов градиентов; lr делится на корень из этого среднего.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>RMSprop: скользящее среднее квадратов градиентов; lr делится на корень из этого среднего.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, alpha (затухание), eps. Популярен в reinforcement learning; основа для Adam.<br><strong>Когда использовать:</strong> RL, RNN; иногда как замена Adam.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rmsprop-e-173-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rmsprop-e-173-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rmsprop-e-173-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.RMSprop.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.RMSprop(params, lr=1e-2, alpha=0.99)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rmsprop-e-173-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.RMSprop(params, lr=1e-2, alpha=0.99)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rmsprop-e-173-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.RMSprop(params, lr=1e-2, alpha=0.99)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rmsprop-e-173-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-rprop-e-174",
    "library": "PyTorch",
    "title": "torch.optim.Rprop()",
    "shortDesc": "Rprop: обновление только по знаку градиента; размер шага адаптируется отдельно.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Rprop: обновление только по знаку градиента; размер шага адаптируется отдельно. Работает только с батчем (не мини-батчем). В PyTorch редко используется.<br><strong>Когда использовать:</strong> полный батч, маленькие сети.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rprop-e-174-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rprop-e-174-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-rprop-e-174-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Rprop.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Rprop(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rprop-e-174-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Rprop(params, lr=1e-2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rprop-e-174-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Rprop(params, lr=1e-2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rprop-e-174-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adamax-e-175",
    "library": "PyTorch",
    "title": "torch.optim.Adamax()",
    "shortDesc": "Adamax: вариант Adam на основе бесконечной нормы (max) вместо L2.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adamax: вариант Adam на основе бесконечной нормы (max) вместо L2.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, betas, eps. Иногда более стабилен при очень длинных последовательностях.<br><strong>Когда использовать:</strong> длинные последовательности, когда Adam нестабилен.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamax-e-175-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamax-e-175-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adamax-e-175-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Adamax.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Adamax(params, lr=2e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamax-e-175-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Adamax(params, lr=2e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamax-e-175-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Adamax(params, lr=2e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamax-e-175-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-asgd-e-176",
    "library": "PyTorch",
    "title": "torch.optim.ASGD()",
    "shortDesc": "Averaged SGD: усредняет параметры за последние итерации (скользящее среднее).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Averaged SGD: усредняет параметры за последние итерации (скользящее среднее).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, lambd, alpha. Может улучшить обобщение.<br><strong>Когда использовать:</strong> когда SGD сходится, но хочется более гладкого решения.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-asgd-e-176-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-asgd-e-176-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-asgd-e-176-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.ASGD.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.ASGD(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-asgd-e-176-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.ASGD(params, lr=1e-2)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-asgd-e-176-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.ASGD(params, lr=1e-2)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-asgd-e-176-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-lbfgs-e-177",
    "library": "PyTorch",
    "title": "torch.optim.LBFGS()",
    "shortDesc": "L-BFGS: квази-Ньютоновский метод.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>L-BFGS: квази-Ньютоновский метод. Требует многократного пересчёта loss в одном step — вы передаёте closure: step(closure), где closure() считает loss и backward(). Память растёт с числом итераций. Подходит для маленьких батчей и маленьких моделей.<br><strong>Когда использовать:</strong> стиль-трансфер, малые задачи; не для больших нейросетей.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-lbfgs-e-177-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-lbfgs-e-177-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-lbfgs-e-177-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.LBFGS.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.LBFGS(params, lr=1)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-lbfgs-e-177-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.LBFGS(params, lr=1)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-lbfgs-e-177-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.LBFGS(params, lr=1)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-lbfgs-e-177-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-nadam-e-178",
    "library": "PyTorch",
    "title": "torch.optim.NAdam()",
    "shortDesc": "NAdam: Adam + Nesterov momentum (look-ahead).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>NAdam: Adam + Nesterov momentum (look-ahead).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, betas, eps. Часто чуть быстрее сходится чем Adam.<br><strong>Когда использовать:</strong> альтернатива Adam с Nesterov.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-nadam-e-178-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-nadam-e-178-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-nadam-e-178-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.NAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.NAdam(params, lr=2e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-nadam-e-178-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.NAdam(params, lr=2e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-nadam-e-178-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.NAdam(params, lr=2e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-nadam-e-178-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-radam-e-179",
    "library": "PyTorch",
    "title": "torch.optim.RAdam()",
    "shortDesc": "Rectified Adam: корректирует дисперсию в начале обучения (warmup по сути встроен).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Rectified Adam: корректирует дисперсию в начале обучения (warmup по сути встроен).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, betas, eps. Уменьшает необходимость в ручном warmup.<br><strong>Когда использовать:</strong> когда не хотите настраивать warmup вручную.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-radam-e-179-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-radam-e-179-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-radam-e-179-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.RAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.RAdam(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-radam-e-179-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.RAdam(params, lr=1e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-radam-e-179-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.RAdam(params, lr=1e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-radam-e-179-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-sparseadam-e-180",
    "library": "PyTorch",
    "title": "torch.optim.SparseAdam()",
    "shortDesc": "Adam для разрежённых градиентов: обновляет только те параметры, у которых градиент ненулевой.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adam для разрежённых градиентов: обновляет только те параметры, у которых градиент ненулевой. Экономит память и время при очень разрежённых обновлениях.<br><strong>Когда использовать:</strong> эмбеддинги с огромным словарём, разрежённые обновления.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sparseadam-e-180-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sparseadam-e-180-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-sparseadam-e-180-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.SparseAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.SparseAdam(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sparseadam-e-180-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.SparseAdam(params, lr=1e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sparseadam-e-180-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.SparseAdam(params, lr=1e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sparseadam-e-180-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adafactor-e-181",
    "library": "PyTorch",
    "title": "torch.optim.Adafactor()",
    "shortDesc": "Adafactor: адаптивный метод с меньшим числом гиперпараметров и меньшим потреблением памяти (моменты хранятся в факторизованном виде).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Adafactor: адаптивный метод с меньшим числом гиперпараметров и меньшим потреблением памяти (моменты хранятся в факторизованном виде). Подходит для очень больших моделей.<br><strong>Когда использовать:</strong> большие трансформеры, нехватка памяти.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adafactor-e-181-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adafactor-e-181-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-adafactor-e-181-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Adafactor.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\nprint(torch.optim.Adafactor(params))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adafactor-e-181-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Adafactor(params)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adafactor-e-181-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Adafactor(params)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adafactor-e-181-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-muon-e-182",
    "library": "PyTorch",
    "title": "torch.optim.Muon()",
    "shortDesc": "Muon: новый оптимизатор из PyTorch (на основе теории динамики).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Muon: новый оптимизатор из PyTorch (на основе теории динамики).</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: lr, momentum и др. Экспериментальный; см. актуальную документацию.<br><strong>Когда использовать:</strong> эксперименты, сравнение с Adam/SGD.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-muon-e-182-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-muon-e-182-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-optim-muon-e-182-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.optim.Muon.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\ntorch.optim.Muon(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-muon-e-182-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.optim.Muon(params, lr=1e-3)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-muon-e-182-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nparams = [torch.tensor([1.0], requires_grad=True)]\nimport torch\nparams = [torch.tensor([1.0], requires_grad=True)].nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.optim.Muon(params, lr=1e-3)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-muon-e-182-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183",
    "library": "PyTorch",
    "title": "import torch\\nx = torch.tensor([1, 2, 3]",
    "shortDesc": "Тензоры — многомерные массивы PyTorch (аналог ndarray в NumPy, но с поддержкой авто-градиента).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Тензоры — многомерные массивы PyTorch (аналог ndarray в NumPy, но с поддержкой авто-градиента). torch.tensor(data) создаёт тензор из списка/массива; dtype и device задаются опционально. Атрибуты: .shape — размеры по осям; .dtype — тип; .device — cpu или cuda. Метод .to(\"cuda\") или .to(device) переносит тензор на GPU; для обучения модель и данные должны быть на одном device. Тензоры участвуют в графе вычислений — при вызове .backward() градиенты считаются по всем операциям.<br><strong></div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Нюанс: </strong> создание тензора из списка копирует данные; из NumPy — torch.from_numpy(arr) делит память (без копии).</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nx = torch.tensor([1, 2, 3])\nx.shape  # размерности\nprint(torch.tensor(x).to(\"cuda\")  # на GPU)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.tensor(x).to(\"cuda\")  # на GPU\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.tensor(x).to(\"cuda\")  # на GPU\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code-3"
      }
    ]
  },
  {
    "id": "pytorch-class-net-nn-module-n-def-init-e-184",
    "library": "PyTorch",
    "title": "class Net(nn.Module):\\n    def __init__(",
    "shortDesc": "Любая модель наследуется от nn.Module.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Любая модель наследуется от nn.Module. В __init__ создаются слои (они автоматически регистрируются и их параметры попадут в model.parameters()). forward(x) — прямой проход: вы описываете, как из входа x получить выход. Вызов model(x) внутри вызывает forward(x). Не вызывайте forward вручную — только model(x). Параметры модели: model.parameters() передаётся в оптимизатор.<br><strong></div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Нюанс: </strong> в forward только прямой проход, без side effects; обратный проход делается через loss.backward().</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-class-net-nn-module-n-def-init-e-184-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-class-net-nn-module-n-def-init-e-184-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-class-net-nn-module-n-def-init-e-184-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.nn.Module.html'\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nclass Net(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(10, 5)\n    def forward(self, x):\nprint(\"        return self.fc(x\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-class-net-nn-module-n-def-init-e-184-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult =         return self.fc(x)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-class-net-nn-module-n-def-init-e-184-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out =         return self.fc(x)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-class-net-nn-module-n-def-init-e-184-code-3"
      }
    ]
  },
  {
    "id": "pytorch-nn-linear-e-185",
    "library": "PyTorch",
    "title": "nn.Linear()",
    "shortDesc": "nn.Linear(in_f, out_f): полносвязный слой, выход = x @ W + b; in_f/out_f — размер входа и выхода.",
    "theory": "<div style='background-color: #064e3b; border-left: 4px solid #10b981; padding: 15px; margin: 0 0 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #34d399;'>🧠 Объяснение для чайников:</h4><p style='margin: 0; font-size: 1rem; color: #ecfdf5;'>Аналогия: Это классический синапс в мозге. Каждому входящему сигналу присваивается свой вес (значимость). Этот слой просто умножает входы на веса и складывает результат.</p></div><div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>nn.Linear(in_f, out_f): полносвязный слой, выход = x @ W + b; in_f/out_f — размер входа и выхода. nn.Conv2d(in_c, out_c, k): свёртка 2D; in_c/out_c — число каналов, k — размер ядра (число или (h,w)). nn.ReLU(): активация max(0, x), без параметров. Другие слои: nn.BatchNorm2d, nn.MaxPool2d, nn.Dropout. Полный список — в документации torch.nn.<br><strong>Пример:</strong> после свёрток форма (N, C, H, W); перед Linear нужно flatten: x.view(N, -1).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-nn-linear-e-185-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-nn-linear-e-185-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-nn-linear-e-185-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nnn.Linear(in_features, out_features)\nnn.Conv2d(in_channels, out_channels, kernel_size)\nprint(\"nn.ReLU(\"))",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-linear-e-185-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'nn'.ReLU()\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-linear-e-185-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'nn'.ReLU()\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-linear-e-185-code-3"
      }
    ]
  },
  {
    "id": "pytorch-optimizer-zero-grad-e-186",
    "library": "PyTorch",
    "title": "optimizer.zero_grad()",
    "shortDesc": "Три шага на каждый батч.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Три шага на каждый батч. zero_grad(): градиенты в PyTorch накапливаются (суммируются), поэтому перед новым backward их обнуляют — иначе градиенты добавятся к старым. loss.backward(): по графу вычислений считаются градиенты loss по всем параметрам (requires_grad=True). step(): оптимизатор по заложенному правилу (SGD, Adam и т.д.) обновляет веса, используя накопленные градиенты. Порядок обязателен: zero_grad → backward → step.<br><strong></div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Нюанс: </strong> если забыть zero_grad(), градиенты будут расти от батча к батчу и обучение \"взорвётся\".</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-optimizer-zero-grad-e-186-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-optimizer-zero-grad-e-186-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-optimizer-zero-grad-e-186-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/optim.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\noptimizer.zero_grad()  # обнулить градиенты\nloss.backward()          # посчитать градиенты\nprint(\"optimizer.step()        # обновить веса\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-optimizer-zero-grad-e-186-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'optimizer'.step()        # обновить веса\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-optimizer-zero-grad-e-186-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'optimizer'.step()        # обновить веса\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-optimizer-zero-grad-e-186-code-3"
      }
    ]
  },
  {
    "id": "pytorch-from-torch-utils-data-import-dataloader-e-187",
    "library": "PyTorch",
    "title": "from torch.utils.data import DataLoader\\",
    "shortDesc": "DataLoader оборачивает Dataset и отдаёт батчи.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>DataLoader оборачивает Dataset и отдаёт батчи. dataset — объект с __len__ и __getitem__(idx), возвращающий один пример (тензоры x, y). batch_size — сколько примеров в одном батче (типично 32, 64, 128). shuffle=True — перемешивать индексы каждую эпоху (для обучения обязательно). num_workers — число процессов загрузки (0 = в основном процессе; больше 0 — фоновые воркеры). Каждая итерация for x, y in loader даёт тензоры формы (batch_size, ...).<br><strong>Когда использовать:</strong> всегда при обучении на мини-батчах; без DataLoader пришлось бы вручную нарезать батчи.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-from-torch-utils-data-import-dataloader-e-187-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-from-torch-utils-data-import-dataloader-e-187-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-from-torch-utils-data-import-dataloader-e-187-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nloader = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=0)",
        "solution": "",
        "hints": [],
        "id": "pytorch-from-torch-utils-data-import-dataloader-e-187-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'loader' = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=0)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-from-torch-utils-data-import-dataloader-e-187-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'loader' = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=0)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-from-torch-utils-data-import-dataloader-e-187-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Базовые активации.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Базовые активации. ReLU(x) = max(0, x) — стандартная, но страдает от \"умирающих\" нейронов. LeakyReLU — пропускает небольшой градиент для x<0. ELU — сглаживает излом в нуле (улучшает сходимость, но чуть медленнее вычисляется).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\nx = torch.randn(2)\nprint(\"ReLU:\", nn.ReLU()(x))\nprint(\"LeakyReLU:\", nn.LeakyReLU(0.1)(x))\nprint(\"ELU:\", nn.ELU()(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"ELU:\", nn.ELU()(x))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"ELU:\", nn.ELU()(x))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Современные гладкие активации (стандарт для трансформеров и глубоких CNN).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Современные гладкие активации (стандарт для трансформеров и глубоких CNN). SiLU (Swish): x * sigmoid(x), используется в YOLOv5/v8, EfficientNet. GELU: x * Phi(x), стандарт в BERT, GPT, ViT. Mish: x * tanh(softplus(x)), показывает отличные результаты в комп. зрении.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\nx = torch.randn(2)\nprint(\"SiLU (Swish):\", nn.SiLU()(x))\nprint(\"GELU:\", nn.GELU()(x))\nprint(\"Mish:\", nn.Mish()(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Mish:\", nn.Mish()(x))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Mish:\", nn.Mish()(x))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Ограничивающие активации.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Ограничивающие активации. Sigmoid -> [0, 1] — для бинарной классификации (выходного слоя) или шлюзов (LSTM). Tanh -> [-1, 1] — центрирует данные, лучше сигмоиды для скрытых слоев. Softmax -> сумма=1 (распределение вероятностей по классам).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\nx = torch.randn(1, 3)\nprint(\"Sigmoid:\", nn.Sigmoid()(x))\nprint(\"Tanh:\", nn.Tanh()(x))\nprint(\"Softmax:\", nn.Softmax(dim=1)(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Softmax:\", nn.Softmax(dim=1)(x))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Softmax:\", nn.Softmax(dim=1)(x))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# m",
    "shortDesc": "Стандартный цикл обучения в PyTorch.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартный цикл обучения в PyTorch. Обязательно model.train() перед эпохой (важно для Dropout/BatchNorm). Сначала zero_grad(), иначе градиенты будут накапливаться с предыдущего шага.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/optim.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n# model.train()  # Включает Dropout и BatchNorm\n# for X_batch, y_batch in train_loader:\n#     optimizer.zero_grad()       # 1. Обнуляем градиенты\n#     y_pred = model(X_batch)     # 2. Прямой проход (forward pass)\n#     loss = criterion(y_pred, y_batch) # 3. Считаем ошибку\n#     loss.backward()             # 4. Обратный проход (вычисляем градиенты)\n#     optimizer.step()            # 5. Обновляем веса\nprint(\"training: zero_grad, forward, backward, step\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"training: zero_grad, forward, backward, step\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"training: zero_grad, forward, backward, step\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-model-eval-e-192",
    "library": "PyTorch",
    "title": "import torch\\n# model.eval()   # Отключа",
    "shortDesc": "Стандартный цикл валидации или инференса.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Стандартный цикл валидации или инференса. Обязательно torch.no_grad() — чтобы не тратить память на сохранение вычислительного графа. model.eval() переводит слои в режим тестирования.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-model-eval-e-192-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-model-eval-e-192-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-model-eval-e-192-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/autograd.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\n# model.eval()   # Отключает Dropout, замораживает статистику BatchNorm\n# val_loss, val_acc = 0, 0\n# with torch.no_grad(): # Отключает вычисление градиентов (экономит память и время)\n#     for X_batch, y_batch in val_loader:\n#         y_pred = model(X_batch)\n#         loss = criterion(y_pred, y_batch)\n#         val_loss += loss.item()\n#         val_acc += (y_pred.argmax(dim=1) == y_batch).sum().item()\nprint(\"validation: model.eval(), torch.no_grad()\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-model-eval-e-192-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"validation: model.eval(), torch.no_grad()\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-model-eval-e-192-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"validation: model.eval(), torch.no_grad()\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-model-eval-e-192-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193",
    "library": "PyTorch",
    "title": "import torch\\nfrom torch.utils.data impo",
    "shortDesc": "Свой класс Dataset.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Свой класс Dataset. Нужно реализовать __len__ (сколько всего элементов) и __getitem__ (как получить элемент по индексу). Можно в __getitem__ читать картинки с диска, чтобы не грузить всё в ОЗУ.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nfrom torch.utils.data import Dataset\nclass CustomDataset(Dataset):\n    def __init__(self, data, labels): # загрузка путей/данных\n        self.data = data; self.labels = labels\n    def __len__(self): return len(self.data)  # длина датасета\n    def __getitem__(self, idx):       # как получить 1 элемент\n        return self.data[idx], self.labels[idx]\nprint(\"Dataset: __init__, __len__, __getitem__\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Dataset: __init__, __len__, __getitem__\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Dataset: __init__, __len__, __getitem__\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194",
    "library": "PyTorch",
    "title": "import torch\\nfrom torch.utils.data impo",
    "shortDesc": "DataLoader — оборачивает Dataset и разбивает на батчи (куски данных).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>DataLoader — оборачивает Dataset и разбивает на батчи (куски данных). shuffle=True — перемешивание (для train). num_workers — загрузка данных в несколько потоков (параллельно).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nfrom torch.utils.data import DataLoader, TensorDataset\nX = torch.randn(100, 10); y = torch.randint(0, 2, (100,))\ndataset = TensorDataset(X, y)\nloader = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=2)\n# for batch_x, batch_y in loader: ...\nprint(\"DataLoader: batch_size, shuffle, num_workers\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"DataLoader: batch_size, shuffle, num_workers\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"DataLoader: batch_size, shuffle, num_workers\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195",
    "library": "PyTorch",
    "title": "import torchvision.transforms as T\\n# tr",
    "shortDesc": "Предобработка картинок (torchvision).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Предобработка картинок (torchvision). Аугментации (Flip, Crop, Rotation) только для train! ToTensor конвертирует PIL Image/numpy (H, W, C) [0..255] в тензор (C, H, W) [0..1]. Normalize вычитает среднее и делит на std.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# import torchvision.transforms as T\n# transform = T.Compose([\n#     T.Resize((224, 224)),       # Изменение размера\n#     T.RandomHorizontalFlip(),   # Аугментация (вероятность 0.5)\n#     T.ToTensor(),               # Пиксели в тензор [0..1] (C, H, W)\n#     T.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])\n# ])\nprint(\"Transforms: Resize, ToTensor, Normalize, Flip, Crop\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Transforms: Resize, ToTensor, Normalize, Flip, Crop\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Transforms: Resize, ToTensor, Normalize, Flip, Crop\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\ncla",
    "shortDesc": "Простая свёрточная сеть (CNN).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Простая свёрточная сеть (CNN). Conv2d(входы, выходы, ядро). MaxPool2d(2,2) уменьшает картинку в 2 раза по осям H,W. Перед Linear нужно сплющить (flatten) тензор с помощью .view(B, -1) или nn.Flatten.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\nclass SimpleCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 16, 3, padding=1) # 1 канал (ч/б) -> 16\n        self.pool = nn.MaxPool2d(2, 2)\n        self.fc = nn.Linear(16 * 14 * 14, 10)\n    def forward(self, x):\n        x = self.pool(torch.relu(self.conv1(x)))\nprint(\"        return self.fc(x.view(x.size(0\"), -1)) # flatten)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult =         return self.fc(x.view(x.size(0), -1)) # flatten\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out =         return self.fc(x.view(x.size(0), -1)) # flatten\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# L",
    "shortDesc": "Рекуррентные сети (RNN/GRU/LSTM).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Рекуррентные сети (RNN/GRU/LSTM). input_size — размер одного слова/шага. hidden_size — скрытое состояние. batch_first=True означает, что батч идёт первой осью (по умолчанию он второй!).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\noutput = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n# LSTM для последовательностей (текст, временные ряды)\nrnn = nn.LSTM(input_size=10, hidden_size=20, num_layers=2, batch_first=True)\n# input: (batch, seq_len, features)\nx = torch.randn(3, 5, 10)\noutput, (hn, cn) = rnn(x)\nprint(\"LSTM output:\", output.shape) # (3, 5, 20)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\noutput = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"LSTM output:\", output.shape) # (3, 5, 20)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\noutput = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"LSTM output:\", output.shape) # (3, 5, 20)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# T",
    "shortDesc": "Базовый трансформер (как в BERT).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Базовый трансформер (как в BERT). d_model — размер эмбеддинга. nhead — кол-во голов внимания. Работает с последовательностями параллельно (без рекуррентности), но требует Positional Encoding.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n# Transformer для обработки последовательностей\nencoder_layer = nn.TransformerEncoderLayer(d_model=512, nhead=8)\nencoder = nn.TransformerEncoder(encoder_layer, num_layers=6)\n# input: (seq_len, batch, d_model)\nsrc = torch.rand(10, 32, 512)\nout = 'encoder'(src)\nprint(\"TransformerEncoder out:\", out.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"TransformerEncoder out:\", out.shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"TransformerEncoder out:\", out.shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nimp",
    "shortDesc": "Использование предобученных сетей через torchvision.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Использование предобученных сетей через torchvision. Загружаем веса ImageNet, замораживаем слои (при необходимости), меняем последний Linear/classifier слой под кол-во классов в датасете.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/hub.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n# import torchvision.models as models\n# --- Предобученные модели + Fine-tuning ---\n# Установка весов ResNet18:\nweights = models.ResNet18_Weights.DEFAULT\nmodel = models.resnet18(weights=weights)\n# Заменяем последний слой под нашу задачу (на 10 классов)\nnum_ftrs = model.fc.in_features\nmodel.fc = nn.Linear(num_ftrs, 10)\nprint(\"models.resnet18(weights=DEFAULT), fine-tuning\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torchvision.models as models\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"models.resnet18(weights=DEFAULT), fine-tuning\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torchvision.models as models\nimport torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"models.resnet18(weights=DEFAULT), fine-tuning\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-device-torch-device-c-e-200",
    "library": "PyTorch",
    "title": "import torch\\n# device = torch.device(\"c",
    "shortDesc": "Перенос вычислений на видеокарту.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Перенос вычислений на видеокарту. И модель, и данные должны быть на одном устройстве. is_available() проверяет наличие драйверов NVIDIA (CUDA).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-device-torch-device-c-e-200-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-device-torch-device-c-e-200-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-device-torch-device-c-e-200-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensor_attributes.html#torch.torch.device, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\n# device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\n# model.to(device)\n# Для каждого батча: X, y = X.to(device), y.to(device)\nprint(\"CUDA (GPU): to(device)\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-device-torch-device-c-e-200-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"CUDA (GPU): to(device)\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-device-torch-device-c-e-200-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"CUDA (GPU): to(device)\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-device-torch-device-c-e-200-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201",
    "library": "PyTorch",
    "title": "import torch\\n# torch.save(model.state_d",
    "shortDesc": "Сохранение только весов (state_dict_).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Сохранение только весов (state_dict_). Не сохраняйте саму модель (torch.save(model)), так как это привяжет сохранение к структуре директорий и импортам. Перед инференсом обязательно model.eval().</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-torch-save-model-state-d-e-201-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-torch-save-model-state-d-e-201-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-n-torch-save-model-state-d-e-201-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/notes/serialization.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\n# torch.save(model.state_dict(), \"model.pth\")\n# \n# Восстановление:\n# model = MyModel()\n# model.load_state_dict(torch.load(\"model.pth\"))\n# model.eval()\nprint(\"save/load: state_dict(), model.pth\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"save/load: state_dict(), model.pth\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"save/load: state_dict(), model.pth\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([[1,2],[3",
    "shortDesc": "torch.cat — конкатенация по существующей оси.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>torch.cat — конкатенация по существующей оси. torch.stack — создаёт новую ось. cat по dim=0 — по строкам (как np.vstack). cat по dim=1 — по столбцам. stack — добавляет измерение.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.cat.html', true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\na = torch.tensor([[1,2],[3,4]])\nb = torch.tensor([[5,6],[7,8]])\nprint(\"cat dim=0:\", torch.cat([a,b], dim=0).shape)\nprint(\"cat dim=1:\", torch.cat([a,b], dim=1).shape)\nprint(\"stack:\", torch.stack([a,b]).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"stack:\", torch.stack([a,b]).shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"stack:\", torch.stack([a,b]).shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([1,2,3,4,",
    "shortDesc": "view — изменение формы (требует непрерывную память).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>view — изменение формы (требует непрерывную память). reshape — как view, но может копировать. unsqueeze(dim) — добавить ось. squeeze(dim) — убрать ось размера 1. permute — переставить оси. transpose — обменять 2 оси.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.Tensor.view.html', true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\na = torch.tensor([1,2,3,4,5,6])\nprint(\"view:\", a.view(2,3).shape)\nprint(\"reshape:\", a.reshape(3,2).shape)\nprint(\"unsqueeze:\", a.unsqueeze(0).shape)\nprint(\"squeeze:\", a.unsqueeze(0).squeeze(0).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"squeeze:\", a.unsqueeze(0).squeeze(0).shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"squeeze:\", a.unsqueeze(0).squeeze(0).shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204",
    "library": "PyTorch",
    "title": "import torch\\na = torch.randn(3, 3)\\npri",
    "shortDesc": "max/min — максимум/минимум.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>max/min — максимум/минимум. argmax/argmin — индекс. topk(k) — k наибольших. clamp(min, max) — обрезка (как np.clip). abs, ceil, floor, round — привычные математические.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.max.html', true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\na = torch.randn(3, 3)\nprint(\"max:\", a.max())\nprint(\"argmax:\", a.argmax())\nprint(\"topk:\", a.flatten().topk(3))\nprint(\"clamp:\", torch.clamp(torch.tensor(a, dtype=torch.float32), min=-0.5, max=0.5))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"clamp:\", torch.clamp(torch.tensor(a, dtype=torch.float32), min=-0.5, max=0.5))\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"clamp:\", torch.clamp(torch.tensor(a, dtype=torch.float32), min=-0.5, max=0.5))\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([1.0, 2.0",
    "shortDesc": "dot — скалярное произведение (1D).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>dot — скалярное произведение (1D). matmul / @ — матричное умножение (как np.dot). mm — строго 2D×2D. bmm — батч матричное (3D). einsum — обобщённая запись Эйнштейна.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.matmul.html', true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\na = torch.tensor([1.0, 2.0, 3.0])\nb = torch.tensor([4.0, 5.0, 6.0])\nprint(\"dot:\", torch.dot(a, b))\nA = torch.randn(2, 3)\nB = torch.randn(3, 4)\nprint(\"matmul:\", torch.matmul(A, B).shape)\nprint(\"@ operator:\", (A @ B).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"@ operator:\", (A @ B).shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"@ operator:\", (A @ B).shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206",
    "library": "PyTorch",
    "title": "import torch\\nprint(\"zeros:\", torch.zero",
    "shortDesc": "Создание тензоров: zeros, ones, randn (нормальное), rand (равномерное [0,1]), arange, linspace, eye (единичная матрица), full(size, val), empty (без инициализации).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Создание тензоров: zeros, ones, randn (нормальное), rand (равномерное [0,1]), arange, linspace, eye (единичная матрица), full(size, val), empty (без инициализации). _like — как другой тензор (zeros_like, randn_like).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"PT_G + 'torch.zeros.html', true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nprint(\"zeros:\", torch.zeros(2, 3).shape)\nprint(\"ones:\", torch.ones(2, 3).shape)\nprint(\"randn:\", torch.randn(2, 3).shape)\nprint(\"arange:\", torch.arange(0, 10, 2))\nprint(\"linspace:\", torch.linspace(0, 1, 5))\nprint(\"eye:\", torch.eye(3).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"eye:\", torch.eye(3).shape)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"eye:\", torch.eye(3).shape)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Инициализация весов: xavier_uniform_ — для tanh/sigmoid.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Инициализация весов: xavier_uniform_ — для tanh/sigmoid. kaiming_normal_ — для ReLU. zeros_ — для bias. model.apply(fn) — применяет функцию рекурсивно ко всем подмодулям. Правильная инициализация ускоряет обучение.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.init.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n\n# --- Инициализация весов ---\ndef init_weights(m):\n    if isinstance(m, nn.Linear):\n        nn.init.xavier_uniform_(m.weight)\n        nn.init.zeros_(m.bias)\n    elif isinstance(m, nn.Conv2d):\n        nn.init.kaiming_normal_(m.weight, mode=\"fan_out\")\n\n# model.apply(init_weights)\nprint(\"xavier_uniform_, kaiming_normal_, zeros_\")\nprint(\"model.apply(fn) - рекурсивно ко всем модулям\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"model.apply(fn) - рекурсивно ко всем модулям\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"model.apply(fn) - рекурсивно ко всем модулям\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Mixed Precision Training — FP16 для прямого прохода (быстрее на GPU), FP32 для градиентов (точнее).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Mixed Precision Training — FP16 для прямого прохода (быстрее на GPU), FP32 для градиентов (точнее). autocast — автоматически выбирает точность. GradScaler — масштабирует loss для предотвращения underflow. Ускорение 2-3× на NVIDIA Tensor Cores.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/amp.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nout = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n\n# --- Mixed Precision (ускорение на GPU) ---\n# scaler = torch.cuda.amp.GradScaler()\n# for X, y in loader:\n#     with torch.cuda.amp.autocast():\n#         output = model(X)\n#         loss = criterion(output, y)\n#     scaler.scale(loss).backward()\n#     scaler.step(optimizer)\n#     scaler.update()\n#     optimizer.zero_grad()\nprint(\"Mixed Precision: autocast + GradScaler\")\nprint(\"FP16 для forward, FP32 для backward\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"FP16 для forward, FP32 для backward\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"FP16 для forward, FP32 для backward\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Замораживание параметров: requires_grad = False — параметр не обновляется.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Замораживание параметров: requires_grad = False — параметр не обновляется. named_parameters() — итерация с именами. Передавайте в optimizer только обучаемые. Для fine-tuning: заморозить всё кроме последних слоёв.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/autograd.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n\n# --- Замораживание слоёв ---\n# for name, param in model.named_parameters():\n#     if \"layer4\" not in name:\n#         param.requires_grad = False\n#\n# # Проверить что заморожено:\n# for name, param in model.named_parameters():\n#     print(\"name, param.requires_grad\")\n#\n# # В optimizer только обучаемые:\n# optimizer = torch.optim.Adam(filter(lambda p: p.requires_grad, model.parameters()), lr=1e-4)\nprint(\"requires_grad = False -> заморожен\")\nprint(\"filter(requires_grad) в optimizer\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"filter(requires_grad) в optimizer\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"filter(requires_grad) в optimizer\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Early Stopping — останавливаем обучение если val_loss не улучшается patience эпох.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Early Stopping — останавливаем обучение если val_loss не улучшается patience эпох. Сохраняем лучшую модель. Предотвращает переобучение. В sklearn — через callbacks или вручную. В PyTorch — реализуется вручную (нет встроенного).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n\n# --- Early Stopping (ранняя остановка) ---\n# best_loss = float(\"inf\")\n# patience, counter = 5, 0\n# for epoch in range(1000):\n#     val_loss = validate()\n#     if val_loss < best_loss:\n#         best_loss = val_loss\n#         counter = 0\n#         torch.save(model.state_dict(), \"best_model.pkg\")\n#     else:\n#         counter += 1\n#         if counter >= patience:\n#             print(\"Early stopping at epoch\", epoch)\n#             break\nprint(\"Early Stopping: patience, best_loss, save best\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"Early Stopping: patience, best_loss, save best\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"Early Stopping: patience, best_loss, save best\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code-3"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "nn.Sequential — контейнер, вызывает слои по порядку.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>nn.Sequential — контейнер, вызывает слои по порядку. Для простых сетей. nn.ModuleList — список модулей (регистрирует параметры), но forward пишете сами. Для сложных архитектур (skip connections, разветвления). nn.ModuleDict — по именам.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html#containers, true\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torch\nimport torch.nn as nn\n\n# --- nn.Sequential vs nn.ModuleList ---\n# Sequential - вызывает по порядку:\nseq = nn.Sequential(\n    nn.Linear(10, 20),\n    nn.ReLU(),\n    nn.Linear(20, 5)\n)\nprint(\"Sequential:\", seq)\n\n# ModuleList - ручной forward:\n# class Net(nn.Module):\n#     def __init__(self):\n#         super().__init__()\n#         self.layers = nn.ModuleList([nn.Linear(10, 10) for _ in range(3)])\n#     def forward(self, x):\n#         for layer in self.layers:\n#             x = F.relu(layer(x))\n#         return x\nprint(\"ModuleList: ручное управление в forward\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'print'(\"ModuleList: ручное управление в forward\")\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'print'(\"ModuleList: ручное управление в forward\")\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-e-212",
    "library": "PyTorch",
    "title": "torch.nn",
    "shortDesc": "Модуль нейронных сетей: классы слоёв (Linear, Conv2d, LSTM, Transformer и т.д.), функции потерь (MSELoss, CrossEntropyLoss и др.), контейнеры (ModuleList, Sequential).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Модуль нейронных сетей: классы слоёв (Linear, Conv2d, LSTM, Transformer и т.д.), функции потерь (MSELoss, CrossEntropyLoss и др.), контейнеры (ModuleList, Sequential). Вы создаёте модель из nn.Module и вложенных nn-модулей; у каждого слоя есть параметры (weights, bias), которые обучаются через backward. Здесь же: нормализация (BatchNorm, LayerNorm), пулинг (MaxPool2d, AdaptiveAvgPool2d), дропаут, эмбеддинги. Это основной модуль для построения архитектуры модели. Документация по каждому классу содержит сигнатуры, параметры и примеры.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-e-212-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-e-212-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-e-212-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-e-212-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.nn\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-e-212-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.nn\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-e-212-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-functional-f-e-213",
    "library": "PyTorch",
    "title": "torch.nn.functional (F)",
    "shortDesc": "Функциональный аналог torch.nn: те же операции, но как функции, без хранения состояния.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Функциональный аналог torch.nn: те же операции, но как функции, без хранения состояния. Например F.relu(x), F.conv2d(x, weight), F.cross_entropy(logits, target). Удобно для разовых вызовов, кастомных forward (когда не нужен отдельный слой с параметрами) и когда параметры передаёте вручную. Не путать: nn.ReLU() — слой с параметрами (их нет у ReLU); F.relu() — просто функция. В forward часто пишут F.relu(self.fc(x)) вместо создания nn.ReLU() в __init__. Полный список функций: активации, свёртки, пулинг, loss, утилиты (pad, interpolate и т.д.).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-functional-f-e-213-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-functional-f-e-213-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-functional-f-e-213-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.functional.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.functional (F))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-functional-f-e-213-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.nn.functional (F)\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-functional-f-e-213-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.nn.functional (F)\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-functional-f-e-213-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-tensor-e-214",
    "library": "PyTorch",
    "title": "torch.Tensor",
    "shortDesc": "Класс тензора — многомерный массив с поддержкой autograd.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Класс тензора — многомерный массив с поддержкой autograd. Создание: torch.tensor(data), torch.zeros(), torch.ones(), torch.randn(). Атрибуты: .shape, .dtype, .device, .requires_grad. Методы: .backward(), .item(), .numpy(), .to(device), .view(), .reshape(), .detach(). Тензор участвует в графе вычислений; при .backward() градиенты распространяются по графу. Документация Tensor описывает все операции и методы. Для новичка важно: тензоры бывают на CPU и CUDA; данные и модель должны быть на одном device; .detach() отключает градиент для части графа.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-tensor-e-214-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-tensor-e-214-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-tensor-e-214-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Tensor)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-tensor-e-214-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.Tensor\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-tensor-e-214-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.Tensor\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-tensor-e-214-code-3"
      }
    ]
  },
  {
    "id": "pytorch-tensor-attributes-tensor-views-e-215",
    "library": "PyTorch",
    "title": "Tensor Attributes / Tensor Views",
    "shortDesc": "Атрибуты тензора: shape, stride, dtype, device, requires_grad, grad, is_leaf, grad_fn.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Атрибуты тензора: shape, stride, dtype, device, requires_grad, grad, is_leaf, grad_fn. Shape — размеры по осям; stride — шаги в памяти при движении по индексам. Views (виды) — тензоры, разделяющие память с исходным: view(), reshape() (иногда копия), transpose(), expand(), narrow(). Изменение view меняет исходный тензор. Для копии используйте .clone(). Документация по атрибутам и view-операциям помогает отлаживать форму и избегать лишних копий.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-tensor-attributes-tensor-views-e-215-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-tensor-attributes-tensor-views-e-215-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-tensor-attributes-tensor-views-e-215-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensor_view.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Tensor Attributes / Tensor Views\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-tensor-attributes-tensor-views-e-215-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Tensor Attributes / Tensor Views\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-tensor-attributes-tensor-views-e-215-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = Tensor Attributes / Tensor Views\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-tensor-attributes-tensor-views-e-215-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-amp-automatic-mixed-precision-e-216",
    "library": "PyTorch",
    "title": "torch.amp (Automatic Mixed Precision)",
    "shortDesc": "Смешанная точность: часть вычислений в float16 (половинная точность) для ускорения на GPU, критичные участки — в float32.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Смешанная точность: часть вычислений в float16 (половинная точность) для ускорения на GPU, критичные участки — в float32. Используется autocast (контекст, в котором операции автоматически выбирают dtype) и GradScaler (масштабирование градиентов, чтобы не терять малые значения при float16). Значительно ускоряет обучение на современных GPU (Volta, Ampere и новее) и уменьшает память. В коде: with torch.amp.autocast(device_type=\"cuda\"): out = model(x); scaler.scale(loss).backward(); scaler.step(optimizer). Подробно: когда включать, какие слои исключать, настройка scaler.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-amp-automatic-mixed-precision-e-216-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-amp-automatic-mixed-precision-e-216-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-amp-automatic-mixed-precision-e-216-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/amp.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.amp (Automatic Mixed Precision)\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-amp-automatic-mixed-precision-e-216-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.amp (Automatic Mixed Precision)\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-amp-automatic-mixed-precision-e-216-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.amp (Automatic Mixed Precision)\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-amp-automatic-mixed-precision-e-216-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-autograd-e-217",
    "library": "PyTorch",
    "title": "torch.autograd",
    "shortDesc": "Автоматическое дифференцирование: механизм, который строит граф операций и по вызову .backward() считает градиенты.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Автоматическое дифференцирование: механизм, который строит граф операций и по вызову .backward() считает градиенты. Функции: torch.autograd.backward(loss), torch.autograd.grad(outputs, inputs) — градиенты без вызова backward на loss. Контексты: torch.no_grad() — отключить запись графа (инференс, экономим память); torch.inference_mode() — ещё быстрее. Переменная requires_grad=True включается у параметров модели и у тензоров, от которых нужен градиент. Документация объясняет граф, детекцию градиентов и тонкости (retain_graph, create_graph для вторых производных).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-autograd-e-217-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-autograd-e-217-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-autograd-e-217-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/autograd.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.autograd)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-autograd-e-217-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.autograd\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-autograd-e-217-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.autograd\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-autograd-e-217-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-library-e-218",
    "library": "PyTorch",
    "title": "torch.library",
    "shortDesc": "Низкоуровневый API для регистрации пользовательских операторов (операций) в C++ и привязки их к PyTorch.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Низкоуровневый API для регистрации пользовательских операторов (операций) в C++ и привязки их к PyTorch. Нужен для кастомных ядер, интеграции с другими библиотеками или оптимизации под железо. Новичку обычно не требуется; используется при расширении PyTorch или написании своих CUDA-операций.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-library-e-218-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-library-e-218-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-library-e-218-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/library.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.library)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-library-e-218-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.library\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-library-e-218-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.library\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-library-e-218-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-accelerator-e-219",
    "library": "PyTorch",
    "title": "torch.accelerator",
    "shortDesc": "Унифицированный API для выбора устройства (CPU, CUDA, MPS и т.д.): определение доступного устройства, перенос тензоров и моделей.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Унифицированный API для выбора устройства (CPU, CUDA, MPS и т.д.): определение доступного устройства, перенос тензоров и моделей. Упрощает код, который должен работать на разных бэкендах без явных if cuda else cpu.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-accelerator-e-219-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-accelerator-e-219-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-accelerator-e-219-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/accelerator.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.accelerator)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-accelerator-e-219-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.accelerator\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-accelerator-e-219-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.accelerator\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-accelerator-e-219-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220",
    "library": "PyTorch",
    "title": "torch.cpu / torch.cuda / torch.mps / tor",
    "shortDesc": "Бэкенды устройств.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Бэкенды устройств. torch.cpu — операции на процессоре. torch.cuda — NVIDIA GPU: перенос тензоров и моделей на GPU, синхронизация (torch.cuda.synchronize()), управление памятью (empty_cache(), memory_allocated()). torch.mps — Apple Silicon (M1/M2) GPU. torch.xpu — Intel GPU. torch.mtia — Meta Training Inference Accelerator. Обычно используют device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\") и .to(device). Документация по каждому бэкенду: специфичные функции, лимиты, лучшие практики.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"\"torch.cpu / torch.cuda / torch.mps / torch.xpu\" / torch.mtia\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"\"torch.cpu / torch.cuda / torch.mps / torch.xpu\"\" / torch.mtia\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"\"torch.cpu / torch.cuda / torch.mps / torch.xpu\"\" / torch.mtia\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221",
    "library": "PyTorch",
    "title": "torch.cuda.memory / torch.mtia.memory",
    "shortDesc": "Управление памятью GPU: память выделяется под тензоры автоматически; при нехватке — OOM.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Управление памятью GPU: память выделяется под тензоры автоматически; при нехватке — OOM. Функции: torch.cuda.empty_cache() — освободить кэш неиспользуемой памяти; memory_allocated(), max_memory_allocated() — статистика; set_per_process_memory_fraction() — лимит. Полезно при отладке OOM и при многопроцессном обучении. torch.mtia.memory — аналогично для MTIA.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.cuda.memory / torch.mtia.memory\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.cuda.memory / torch.mtia.memory\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.cuda.memory / torch.mtia.memory\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code-3"
      }
    ]
  },
  {
    "id": "pytorch-meta-device-e-222",
    "library": "PyTorch",
    "title": "Meta device",
    "shortDesc": "«Мета»-устройство: тензоры без реальных данных, только форма и dtype.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>«Мета»-устройство: тензоры без реальных данных, только форма и dtype. Нужно для быстрой проверки формы модели и подсчёта параметров без выделения памяти на GPU/CPU. Используется в больших моделях и при распределённой инициализации.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-meta-device-e-222-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-meta-device-e-222-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-meta-device-e-222-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/meta.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Meta device\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-meta-device-e-222-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = 'Meta device\n\nprint'('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-meta-device-e-222-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = 'Meta device\n        print'('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-meta-device-e-222-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-backends-e-223",
    "library": "PyTorch",
    "title": "torch.backends",
    "shortDesc": "Бэкенды для низкоуровневых библиотек: cuDNN (torch.backends.cudnn), CUDA (cuda), MPS, MKL и т.д.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Бэкенды для низкоуровневых библиотек: cuDNN (torch.backends.cudnn), CUDA (cuda), MPS, MKL и т.д. Настройки: cudnn.benchmark = True — авто-подбор быстрых алгоритмов свёртки (рекомендуется при фиксированном размере входа); cudnn.deterministic — воспроизводимость в ущерб скорости. Меняют глобальное поведение PyTorch на выбранном устройстве.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-backends-e-223-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-backends-e-223-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-backends-e-223-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/backends.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.backends)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-backends-e-223-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.backends\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-backends-e-223-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.backends\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-backends-e-223-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-export-e-224",
    "library": "PyTorch",
    "title": "torch.export",
    "shortDesc": "Экспорт модели в формат вне PyTorch: ONNX, TorchScript, другие графы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Экспорт модели в формат вне PyTorch: ONNX, TorchScript, другие графы. export() строит граф из модели и примера входа; затем граф можно сохранить и запускать без Python (деплой на сервер, мобильные устройства). Связано с torch.onnx и torch.jit; документация описывает ограничения и поддерживаемые конструкции.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-export-e-224-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-export-e-224-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-export-e-224-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/export.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.export)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-export-e-224-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.export\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-export-e-224-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.export\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-export-e-224-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-e-225",
    "library": "PyTorch",
    "title": "torch.distributed",
    "shortDesc": "Распределённое обучение на нескольких GPU или узлах.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Распределённое обучение на нескольких GPU или узлах. Основные компоненты: инициализация (init_process_group), обёртка модели (DistributedDataParallel — DDP), распределённый DataLoader (DistributedSampler). Каждый процесс работает со своей частью данных; градиенты синхронизируются при backward. Подмодули: tensor (distributed тензоры), algorithms (например join для неравномерных данных), elastic (перезапуск при падении узлов), fsdp (полное шардирование параметров для очень больших моделей), checkpoint, pipelining. Нужно при обучении на кластере или многопроцессном обучении на одной машине.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-e-225-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-e-225-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-e-225-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/distributed.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributed)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-e-225-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.distributed\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-e-225-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.distributed\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-e-225-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226",
    "library": "PyTorch",
    "title": "torch.distributed.fsdp / fully_shard",
    "shortDesc": "FSDP (Fully Sharded Data Parallel): параметры модели разбиваются между процессами; каждый процесс хранит только свою часть.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>FSDP (Fully Sharded Data Parallel): параметры модели разбиваются между процессами; каждый процесс хранит только свою часть. Позволяет обучать модели, не помещающиеся в память одного GPU. Альтернатива классическому DDP при огромном числе параметров. Требует понимания распределённого обучения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-fsdp-fully-shard-e-226-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-fsdp-fully-shard-e-226-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-fsdp-fully-shard-e-226-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/fsdp.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.distributed.fsdp / fully_shard\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.distributed.fsdp\" / fully_shard\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.distributed.fsdp\" / fully_shard\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227",
    "library": "PyTorch",
    "title": "torch.distributed.tensor.parallel / opti",
    "shortDesc": "Tensor parallel — разбиение вычислений слоёв между устройствами (например большая матрица умножается по частям).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Tensor parallel — разбиение вычислений слоёв между устройствами (например большая матрица умножается по частям). distributed.optim — оптимизаторы для распределённого сценария. checkpoint — сохранение/загрузка распределённого состояния. pipelining — pipeline parallelism: слои модели на разных устройствах, батчи проходят по конвейеру. Используется в очень больших моделях (сотни миллиардов параметров).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-tensor-parallel-opti-e-227-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-tensor-parallel-opti-e-227-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-distributed-tensor-parallel-opti-e-227-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/distributed.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\nprint(\"torch.distributed.tensor.parallel / optim / checkpoint / pipelining\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.distributed.tensor.parallel\" / optim / checkpoint / pipelining\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "tensor = torch.tensor([1.0, 2.0])\nimport torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.distributed.tensor.parallel\" / optim / checkpoint / pipelining\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributions-e-228",
    "library": "PyTorch",
    "title": "torch.distributions",
    "shortDesc": "Распределения вероятностей: Normal, Bernoulli, Categorical, Uniform, MultivariateNormal и многие другие.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Распределения вероятностей: Normal, Bernoulli, Categorical, Uniform, MultivariateNormal и многие другие. Методы: .sample(), .log_prob(x), .entropy(). Нужны для VAE, reinforcement learning (политики), байесовских моделей и любого кода, где явно работают с распределениями. Интеграция с autograd: градиенты по параметрам распределения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-distributions-e-228-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-distributions-e-228-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-distributions-e-228-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/distributions.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributions)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributions-e-228-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.distributions\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributions-e-228-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.distributions\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributions-e-228-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-compiler-e-229",
    "library": "PyTorch",
    "title": "torch.compiler",
    "shortDesc": "Компилятор PyTorch 2: torch.compile(model) — JIT-компиляция модели в оптимизированный граф (TorchDynamo + индуктор).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Компилятор PyTorch 2: torch.compile(model) — JIT-компиляция модели в оптимизированный граф (TorchDynamo + индуктор). Значительно ускоряет обучение и инференс без изменения кода модели.</div><div style='background-color: #1e293b; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;'><h4 style='margin: 0 0 10px 0; color: #fcd34d;'>💡 Нюансы и параметры:</h4><p style='margin: 0; font-size: 0.95rem; color: #cbd5e1;'>Параметры: mode (\"default\", \"reduce-overhead\", \"max-autotune\"), backend. Рекомендуется включать для новых проектов; некоторые конструкции пока не поддерживаются — смотреть предупреждения.</p></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-compiler-e-229-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-compiler-e-229-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-compiler-e-229-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/compiler.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.compiler)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-compiler-e-229-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.compiler\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-compiler-e-229-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.compiler\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-compiler-e-229-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-fft-e-230",
    "library": "PyTorch",
    "title": "torch.fft",
    "shortDesc": "Быстрое преобразование Фурье: fft.fft(), fft.ifft(), fft.rfft() (для вещественных сигналов), fft.fft2() для 2D (изображения).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Быстрое преобразование Фурье: fft.fft(), fft.ifft(), fft.rfft() (для вещественных сигналов), fft.fft2() для 2D (изображения). Используется в обработке сигналов, спектральном анализе, некоторых слоях в нейросетях. Возвращает комплексные тензоры; для вещественного входа rfft экономит память.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-fft-e-230-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-fft-e-230-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-fft-e-230-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/fft.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.fft)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fft-e-230-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.fft\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fft-e-230-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.fft\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fft-e-230-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-func-e-231",
    "library": "PyTorch",
    "title": "torch.func",
    "shortDesc": "Функциональные трансформации: vmap (векторизация по дополнительному измерению), grad, jacrev/jacfwd (якобианы), hessian, checkpoint (экономия памяти).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Функциональные трансформации: vmap (векторизация по дополнительному измерению), grad, jacrev/jacfwd (якобианы), hessian, checkpoint (экономия памяти). Удобно для кастомной логики с градиентами без явного цикла по батчу или для вторых производных. Замена части устаревшего torch.autograd.functional.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-func-e-231-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-func-e-231-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-func-e-231-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/func.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.func)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-func-e-231-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.func\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-func-e-231-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.func\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-func-e-231-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-futures-e-232",
    "library": "PyTorch",
    "title": "torch.futures",
    "shortDesc": "Асинхронные будущие результаты (Future): отложенное выполнение и получение результата позже.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Асинхронные будущие результаты (Future): отложенное выполнение и получение результата позже. Используется внутри распределённого обучения и при асинхронных операциях. Новичку редко нужен.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-futures-e-232-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-futures-e-232-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-futures-e-232-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/future.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.futures)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-futures-e-232-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.futures\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-futures-e-232-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.futures\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-futures-e-232-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-fx-e-233",
    "library": "PyTorch",
    "title": "torch.fx",
    "shortDesc": "Framework для трансформации графов моделей: трассировка nn.Module в граф (symbolic trace), замена/вставка узлов, вывод оптимизированного кода.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Framework для трансформации графов моделей: трассировка nn.Module в граф (symbolic trace), замена/вставка узлов, вывод оптимизированного кода. Нужен для квантизации, кастомных компиляторов, анализа графа. Продвинутый инструмент; обычно не требуется на старте.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-fx-e-233-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-fx-e-233-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-fx-e-233-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/fx.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.fx)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fx-e-233-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.fx\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fx-e-233-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.fx\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fx-e-233-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-hub-e-234",
    "library": "PyTorch",
    "title": "torch.hub",
    "shortDesc": "Загрузка предобученных моделей и скриптов с репозитория (GitHub).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Загрузка предобученных моделей и скриптов с репозитория (GitHub). torch.hub.load(\"pytorch/vision\", \"resnet18\", pretrained=True) — пример. Удобно для воспроизведения чужих моделей и быстрого прототипирования. Документация: список моделей, кэш, свои репозитории.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-hub-e-234-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-hub-e-234-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-hub-e-234-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/hub.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.hub)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-hub-e-234-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.hub\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-hub-e-234-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.hub\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-hub-e-234-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-jit-e-235",
    "library": "PyTorch",
    "title": "torch.jit",
    "shortDesc": "TorchScript: компиляция моделей в граф, независимый от Python, для деплоя (C++, мобильные устройства) и оптимизации.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>TorchScript: компиляция моделей в граф, независимый от Python, для деплоя (C++, мобильные устройства) и оптимизации. trace — запись графа по примеру входа; script — разбор кода с аннотациями. Ограничения: не весь Python поддерживается. Используется при экспорте в production.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-jit-e-235-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-jit-e-235-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-jit-e-235-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/jit.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.jit)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-jit-e-235-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.jit\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-jit-e-235-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.jit\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-jit-e-235-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-linalg-e-236",
    "library": "PyTorch",
    "title": "torch.linalg",
    "shortDesc": "Линейная алгебра: решения систем (solve, lstsq), разложения (cholesky, svd, qr), нормы (norm), определитель, собственные значения.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Линейная алгебра: решения систем (solve, lstsq), разложения (cholesky, svd, qr), нормы (norm), определитель, собственные значения. Аналог numpy.linalg с поддержкой GPU и autograd. Используется в моделях с матричными операциями и в научных расчётах.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-linalg-e-236-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-linalg-e-236-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-linalg-e-236-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/linalg.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.linalg)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-linalg-e-236-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.linalg\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-linalg-e-236-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.linalg\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-linalg-e-236-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-monitor-e-237",
    "library": "PyTorch",
    "title": "torch.monitor",
    "shortDesc": "Мониторинг событий обучения (логирование, метрики) через подписки.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Мониторинг событий обучения (логирование, метрики) через подписки. Для интеграции с внешними системами мониторинга.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-monitor-e-237-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-monitor-e-237-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-monitor-e-237-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/monitor.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.monitor)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-monitor-e-237-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.monitor\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-monitor-e-237-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.monitor\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-monitor-e-237-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-signal-e-238",
    "library": "PyTorch",
    "title": "torch.signal",
    "shortDesc": "Обработка сигналов: оконные функции, свёртки для сигналов, спектрограммы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Обработка сигналов: оконные функции, свёртки для сигналов, спектрограммы. Дополнение к torch.fft для задач аудио и одномерных сигналов.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-signal-e-238-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-signal-e-238-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-signal-e-238-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/signal.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.signal)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-signal-e-238-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.signal\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-signal-e-238-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.signal\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-signal-e-238-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-special-e-239",
    "library": "PyTorch",
    "title": "torch.special",
    "shortDesc": "Специальные математические функции: гамма, бета, эрфи, логическая сумма (logsumexp) и т.д.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Специальные математические функции: гамма, бета, эрфи, логическая сумма (logsumexp) и т.д. Нужны в вероятностных моделях и некоторых формулах потерь.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-special-e-239-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-special-e-239-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-special-e-239-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/special.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.special)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-special-e-239-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.special\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-special-e-239-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.special\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-special-e-239-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-overrides-e-240",
    "library": "PyTorch",
    "title": "torch.overrides",
    "shortDesc": "Переопределение поведения встроенных функций PyTorch для своих типов тензоров (кастомные классы с __torch_function__).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Переопределение поведения встроенных функций PyTorch для своих типов тензоров (кастомные классы с __torch_function__). Продвинутое использование при разработке библиотек поверх PyTorch.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-overrides-e-240-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-overrides-e-240-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-overrides-e-240-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/overrides.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.overrides)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-overrides-e-240-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.overrides\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-overrides-e-240-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.overrides\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-overrides-e-240-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nativert-e-241",
    "library": "PyTorch",
    "title": "torch.nativert",
    "shortDesc": "Нативный рантайм для скомпилированных моделей (деплой без Python).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Нативный рантайм для скомпилированных моделей (деплой без Python). Специфичная тема деплоя.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nativert-e-241-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nativert-e-241-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nativert-e-241-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nativert.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.nativert\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nativert-e-241-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.nativert\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nativert-e-241-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.nativert\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nativert-e-241-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-package-e-242",
    "library": "PyTorch",
    "title": "torch.package",
    "shortDesc": "Упаковка модели и зависимостей в один файл для переноса и деплоя.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Упаковка модели и зависимостей в один файл для переноса и деплоя. Альтернатива/дополнение к torch.save и TorchScript.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-package-e-242-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-package-e-242-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-package-e-242-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/package.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.package)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-package-e-242-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.package\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-package-e-242-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.package\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-package-e-242-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-profiler-e-243",
    "library": "PyTorch",
    "title": "torch.profiler",
    "shortDesc": "Профилирование: замер времени выполнения операций, использование памяти, узкие места.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Профилирование: замер времени выполнения операций, использование памяти, узкие места. Контекст torch.profiler.profile() с schedule и on_trace_ready; экспорт в Chrome trace. Необходим при оптимизации скорости и памяти.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-profiler-e-243-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-profiler-e-243-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-profiler-e-243-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/profiler.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.profiler)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-profiler-e-243-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.profiler\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-profiler-e-243-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.profiler\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-profiler-e-243-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-init-e-244",
    "library": "PyTorch",
    "title": "torch.nn.init",
    "shortDesc": "Инициализация весов слоёв: init.xavier_uniform_(), init.kaiming_normal_(), init.orthogonal_() и др.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Инициализация весов слоёв: init.xavier_uniform_(), init.kaiming_normal_(), init.orthogonal_() и др. Применяются к параметрам модели после создания; влияют на сходимость. По умолчанию многие слои уже имеют разумную инициализацию; кастомная нужна для нестандартных архитектур.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-init-e-244-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-init-e-244-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-init-e-244-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.init.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.init)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-init-e-244-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.nn.init\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-init-e-244-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.nn.init\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-init-e-244-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-attention-e-245",
    "library": "PyTorch",
    "title": "torch.nn.attention",
    "shortDesc": "Слои и утилиты для механизма внимания (attention): scaled dot-product, multihead и т.д.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Слои и утилиты для механизма внимания (attention): scaled dot-product, multihead и т.д. Используется в трансформерах. В документации — форматы входа/выхода и параметры (num_heads, dropout).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-attention-e-245-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-attention-e-245-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nn-attention-e-245-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nn.attention.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.attention)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-attention-e-245-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.nn.attention\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-attention-e-245-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.nn.attention\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-attention-e-245-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-onnx-e-246",
    "library": "PyTorch",
    "title": "torch.onnx",
    "shortDesc": "Экспорт модели в формат ONNX для запуска в других фреймворках (ONNX Runtime, TensorRT и т.д.).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Экспорт модели в формат ONNX для запуска в других фреймворках (ONNX Runtime, TensorRT и т.д.). torch.onnx.export(model, example_input, \"model.onnx\") — базовый вызов. Нужны при деплое вне PyTorch; некоторые операции требуют обходных путей или неподдерживаются.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-onnx-e-246-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-onnx-e-246-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-onnx-e-246-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/onnx.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.onnx)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-onnx-e-246-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.onnx\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-onnx-e-246-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.onnx\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-onnx-e-246-code-3"
      }
    ]
  },
  {
    "id": "pytorch-complex-numbers-e-247",
    "library": "PyTorch",
    "title": "Complex Numbers",
    "shortDesc": "Поддержка комплексных тензоров (dtype complex64, complex128): арифметика, fft, linalg.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Поддержка комплексных тензоров (dtype complex64, complex128): арифметика, fft, linalg. Нужно в физике, обработке сигналов и части моделей.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-complex-numbers-e-247-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-complex-numbers-e-247-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-complex-numbers-e-247-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/complex_numbers.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Complex Numbers\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-complex-numbers-e-247-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Complex Numbers\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-complex-numbers-e-247-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"Complex Numbers\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-complex-numbers-e-247-code-3"
      }
    ]
  },
  {
    "id": "pytorch-ddp-communication-hooks-e-248",
    "library": "PyTorch",
    "title": "DDP Communication Hooks",
    "shortDesc": "Хуки для кастомной логики синхронизации градиентов в DistributedDataParallel (сжатие, асинхронность и т.д.).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Хуки для кастомной логики синхронизации градиентов в DistributedDataParallel (сжатие, асинхронность и т.д.). Для продвинутой настройки распределённого обучения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-ddp-communication-hooks-e-248-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-ddp-communication-hooks-e-248-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-ddp-communication-hooks-e-248-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/ddp.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"DDP Communication Hooks\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-ddp-communication-hooks-e-248-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"DDP Communication Hooks\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-ddp-communication-hooks-e-248-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"DDP Communication Hooks\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-ddp-communication-hooks-e-248-code-3"
      }
    ]
  },
  {
    "id": "pytorch-quantization-e-249",
    "library": "PyTorch",
    "title": "Quantization",
    "shortDesc": "Квантизация весов и активаций (int8, float16 и др.) для ускорения и уменьшения размера модели на CPU/GPU.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Квантизация весов и активаций (int8, float16 и др.) для ускорения и уменьшения размера модели на CPU/GPU. Динамическая, статическая и QAT (quantization-aware training). Важно для деплоя на edge и серверах; требует калибровки или дообучения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-quantization-e-249-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-quantization-e-249-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-quantization-e-249-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/quantization.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Quantization\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-quantization-e-249-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Quantization\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-quantization-e-249-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"Quantization\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-quantization-e-249-code-3"
      }
    ]
  },
  {
    "id": "pytorch-distributed-rpc-framework-e-250",
    "library": "PyTorch",
    "title": "Distributed RPC Framework",
    "shortDesc": "Удалённый вызов процедур (RPC) между процессами: запуск функций на других узлах, передача тензоров.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Удалённый вызов процедур (RPC) между процессами: запуск функций на других узлах, передача тензоров. Используется в сложных распределённых сценариях (например части модели на разных машинах).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-distributed-rpc-framework-e-250-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-distributed-rpc-framework-e-250-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-distributed-rpc-framework-e-250-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/rpc.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Distributed RPC Framework\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-distributed-rpc-framework-e-250-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Distributed RPC Framework\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-distributed-rpc-framework-e-250-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"Distributed RPC Framework\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-distributed-rpc-framework-e-250-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-random-e-251",
    "library": "PyTorch",
    "title": "torch.random",
    "shortDesc": "Генерация случайных чисел: torch.manual_seed(), torch.randn(), torch.randint() и т.д.; генераторы для воспроизводимости (torch.Generator).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Генерация случайных чисел: torch.manual_seed(), torch.randn(), torch.randint() и т.д.; генераторы для воспроизводимости (torch.Generator). Документация по всем случайным функциям и лучшим практикам (установка seed на каждом процессе при DDP).</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-random-e-251-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-random-e-251-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-random-e-251-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/random.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.random)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-random-e-251-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.random\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-random-e-251-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.random\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-random-e-251-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-masked-e-252",
    "library": "PyTorch",
    "title": "torch.masked",
    "shortDesc": "Операции с масками: masked tensor (тензор с маской пропущенных/невалидных элементов).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Операции с масками: masked tensor (тензор с маской пропущенных/невалидных элементов). Для неравномерных последовательностей и пропусков без заполнения нулями.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-masked-e-252-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-masked-e-252-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-masked-e-252-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/masked.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.masked)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-masked-e-252-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.masked\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-masked-e-252-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.masked\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-masked-e-252-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-nested-e-253",
    "library": "PyTorch",
    "title": "torch.nested",
    "shortDesc": "Вложенные тензоры (nested tensor): последовательности переменной длины в одном тензоре без паддинга.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Вложенные тензоры (nested tensor): последовательности переменной длины в одном тензоре без паддинга. Экономия памяти и упрощение кода для NLP и аудио.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-nested-e-253-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-nested-e-253-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-nested-e-253-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/nested.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nested)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nested-e-253-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.nested\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nested-e-253-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.nested\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nested-e-253-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-size-e-254",
    "library": "PyTorch",
    "title": "torch.Size",
    "shortDesc": "Класс размера тензора: результат .shape, поддерживает индексацию и арифметику (например size[0] * size[1]).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Класс размера тензора: результат .shape, поддерживает индексацию и арифметику (например size[0] * size[1]). Используется при проверке форм и динамическом построении слоёв.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-size-e-254-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-size-e-254-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-size-e-254-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Size)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-size-e-254-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.Size\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-size-e-254-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.Size\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-size-e-254-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-sparse-e-255",
    "library": "PyTorch",
    "title": "torch.sparse",
    "shortDesc": "Разрежённые тензоры: хранение только ненулевых элементов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Разрежённые тензоры: хранение только ненулевых элементов. Экономия памяти для графов, эмбеддингов с очень большим числом нулей. Операции: sparse_coo_tensor(), to_dense(); не все операции поддерживают sparse.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-sparse-e-255-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-sparse-e-255-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-sparse-e-255-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/sparse.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.sparse)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-sparse-e-255-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.sparse\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-sparse-e-255-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.sparse\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-sparse-e-255-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-storage-e-256",
    "library": "PyTorch",
    "title": "torch.Storage",
    "shortDesc": "Низкоуровневое хранилище данных тензора (1D непрерывный буфер).",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Низкоуровневое хранилище данных тензора (1D непрерывный буфер). Обычно не используется напрямую; нужно при работе с .data_ptr() или при написании своих расширений.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-storage-e-256-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-storage-e-256-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-storage-e-256-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/storage.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Storage)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-storage-e-256-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.Storage\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-storage-e-256-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.Storage\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-storage-e-256-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-testing-e-257",
    "library": "PyTorch",
    "title": "torch.testing",
    "shortDesc": "Утилиты для тестирования: сравнение тензоров (assert_close), проверка градиентов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Утилиты для тестирования: сравнение тензоров (assert_close), проверка градиентов. Удобно в unit-тестах моделей и слоёв.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-testing-e-257-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-testing-e-257-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-testing-e-257-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/testing.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.testing)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-testing-e-257-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.testing\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-testing-e-257-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.testing\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-testing-e-257-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-data-e-258",
    "library": "PyTorch",
    "title": "torch.utils.data",
    "shortDesc": "Dataset, DataLoader, Sampler и подклассы.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Dataset, DataLoader, Sampler и подклассы. Dataset — абстракция датасета (__len__, __getitem__); DataLoader — батчи, shuffle, num_workers; IterableDataset для потоковых данных. Документация по кастомным датасетам, коллайтам (обработка батча) и многопроцессной загрузке.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-data-e-258-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-data-e-258-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-data-e-258-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.data)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-data-e-258-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.utils.data\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-data-e-258-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.utils.data\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-data-e-258-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-checkpoint-e-259",
    "library": "PyTorch",
    "title": "torch.utils.checkpoint",
    "shortDesc": "Gradient checkpointing: пересчёт активаций при backward вместо хранения.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Gradient checkpointing: пересчёт активаций при backward вместо хранения. Сильно экономит память при обучении глубоких сетей; время обучения увеличивается. Используется когда модель не влезает в GPU.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-checkpoint-e-259-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-checkpoint-e-259-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-checkpoint-e-259-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/checkpoint.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.checkpoint)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-checkpoint-e-259-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = torch.utils.checkpoint\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-checkpoint-e-259-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = torch.utils.checkpoint\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-checkpoint-e-259-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-tensorboard-e-260",
    "library": "PyTorch",
    "title": "torch.utils.tensorboard",
    "shortDesc": "Интеграция с TensorBoard: логирование скаляров, графиков, изображений, гистограмм весов.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Интеграция с TensorBoard: логирование скаляров, графиков, изображений, гистограмм весов. Writer.add_scalar(), add_histogram() и т.д. Стандартный способ визуализации обучения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-tensorboard-e-260-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-tensorboard-e-260-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-tensorboard-e-260-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/tensorboard.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.utils.tensorboard\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-tensorboard-e-260-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.utils.tensorboard\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-tensorboard-e-260-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.utils.tensorboard\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-tensorboard-e-260-code-3"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261",
    "library": "PyTorch",
    "title": "torch.utils.benchmark / collect_env / fl",
    "shortDesc": "benchmark — точный замер времени операций (Timer); collect_env — вывод информации о системе и версиях для отчётов об ошибках; flop_counter — подсчёт FLOP; cpp_extension — компиляция своих C++/CUDA расширений; deterministic — включение детерминированных алгоритмов для воспроизводимости.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>benchmark — точный замер времени операций (Timer); collect_env — вывод информации о системе и версиях для отчётов об ошибках; flop_counter — подсчёт FLOP; cpp_extension — компиляция своих C++/CUDA расширений; deterministic — включение детерминированных алгоритмов для воспроизводимости. Утилиты для отладки, бенчмарков и расширения PyTorch.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/utils.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"torch.utils.benchmark / collect_env / flop_counter / cpp_extension / deterministic\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"torch.utils.benchmark / collect_env / flop_counter / cpp_extension / deterministic\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"torch.utils.benchmark / collect_env / flop_counter / cpp_extension / deterministic\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261-code-3"
      }
    ]
  },
  {
    "id": "pytorch-named-tensors-e-262",
    "library": "PyTorch",
    "title": "Named Tensors",
    "shortDesc": "Тензоры с именованными осями: например tensor(\"batch\", \"channel\", \"height\", \"width\").",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Тензоры с именованными осями: например tensor(\"batch\", \"channel\", \"height\", \"width\"). Удобно для читаемости и уменьшения ошибок с порядком размерностей. Поддержка в операциях и постепенное расширение покрытия.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-named-tensors-e-262-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-named-tensors-e-262-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-named-tensors-e-262-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/named_tensor.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Named Tensors\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-named-tensors-e-262-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Named Tensors\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-named-tensors-e-262-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"Named Tensors\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-named-tensors-e-262-code-3"
      }
    ]
  },
  {
    "id": "pytorch-type-info-torch-config-environme-e-263",
    "library": "PyTorch",
    "title": "Type Info / torch.__config__ / Environme",
    "shortDesc": "Type Info — аннотации типов для статической проверки.",
    "theory": "<div style='font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;'>Type Info — аннотации типов для статической проверки. __config__ — информация о сборке PyTorch. Переменные окружения управляют поведением (CUDA_VISIBLE_DEVICES, TORCH_*, и т.д.). Документация по конфигурации и отладке окружения.</div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 1: Базовое использование</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Простейший пример того, как вызвать эту команду.</p><div class='code-block-container' id='code-block-pytorch-type-info-torch-config-environme-e-263-code-1'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 2: Свойства результата (shape, type)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Всегда полезно понимать, какой именно объект возвращает функция.</p><div class='code-block-container' id='code-block-pytorch-type-info-torch-config-environme-e-263-code-2'></div><h4 style='margin-top:30px; border-bottom: 1px solid #334155; padding-bottom: 5px; color: #e2e8f0;'>Пример 3: Безопасное выполнение (try/except)</h4><p style='font-size: 0.9rem; color: #94a3b8; margin-bottom: 10px;'>Как вызывать метод в реальном скрипте, обрабатывая потенциальные ошибки.</p><div class='code-block-container' id='code-block-pytorch-type-info-torch-config-environme-e-263-code-3'></div><div style=\"margin-top:40px; padding-top: 20px; border-top: 2px solid #334155; text-align: center;\"><a href=\"https://pytorch.org/docs/stable/index.html\" target=\"_blank\" class=\"ref-link\" style=\"display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: background 0.2s; font-size: 1.1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\">📖 Открыть официальную документацию</a></div>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(\"Type Info / torch.__config__ / Environment Variables\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-type-info-torch-config-environme-e-263-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Исследование объекта, который возвращает функция\nresult = \"Type Info / torch.__config__ / Environment Variables\"\n\nprint('Тип результата:', type(result))\nif hasattr(result, 'shape'):\n    print('Размерность (shape):', result.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-type-info-torch-config-environme-e-263-code-2"
      },
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# Использование внутри функции-обертки\ndef run_pipeline():\n    try:\n        # Выполняем основное действие\n        out = \"Type Info / torch.__config__ / Environment Variables\"\n        print('Успешно выполнено в пайплайне!')\n        return True\n    except Exception as e:\n        print('Возникла ошибка:', e)\n        return False\n\nrun_pipeline()",
        "solution": "",
        "hints": [],
        "id": "pytorch-type-info-torch-config-environme-e-263-code-3"
      }
    ]
  }
];
