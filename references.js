window.REFERENCES = [
  {
    "id": "numpy-np-array-0",
    "library": "NumPy",
    "title": "np.array()",
    "shortDesc": "Создаёт массив ndarray из списка Python. Параметры: object (обязательный — список или вложенные спис...",
    "theory": "<p>Создаёт массив ndarray из списка Python. Параметры: object (обязательный — список или вложенные списки), dtype=None (тип элементов — подбирается автоматически), copy=True, order='K', ndmin=0. Возвращает ndarray. Для 2D передаёте список списков; если в данных есть float — dtype станет float64. Нюанс: вложенные списки должны иметь одинаковую длину по каждому уровню.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-array-0-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.array.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.array([1, 2, 3])\nprint(np.array([[1,2],[3,4]]))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-array-0-code"
      }
    ]
  },
  {
    "id": "numpy-np-zeros-1",
    "library": "NumPy",
    "title": "np.zeros()",
    "shortDesc": "Массив из нулей заданной формы. Форма — кортеж: (3, 4) значит 3 строки, 4 столбца. Параметры: shape ...",
    "theory": "<p>Массив из нулей заданной формы. Форма — кортеж: (3, 4) значит 3 строки, 4 столбца. Параметры: shape (обязательный), dtype=float64, order='C'. Возвращает ndarray. По умолчанию тип float64 — для целых укажите dtype=np.int32. Вызов всегда через np.zeros(...), не от массива.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-zeros-1-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.zeros.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.zeros((3, 4)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-zeros-1-code"
      }
    ]
  },
  {
    "id": "numpy-np-ones-2",
    "library": "NumPy",
    "title": "np.ones()",
    "shortDesc": "Массив из единиц. Аналогично zeros: shape — кортеж размеров, dtype по умолчанию float64. Удобно для ...",
    "theory": "<p>Массив из единиц. Аналогично zeros: shape — кортеж размеров, dtype по умолчанию float64. Удобно для инициализации весов или масок перед заполнением.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-ones-2-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ones.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.ones((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-ones-2-code"
      }
    ]
  },
  {
    "id": "numpy-np-full-3",
    "library": "NumPy",
    "title": "np.full()",
    "shortDesc": "Массив заданной формы, все элементы равны fill_value (здесь 7). Параметры: shape, fill_value, dtype=...",
    "theory": "<p>Массив заданной формы, все элементы равны fill_value (здесь 7). Параметры: shape, fill_value, dtype=None. Если fill_value — целое и dtype не указан, тип будет int. Полезно для константных матриц или заполнения \"пустышкой\".</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-full-3-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.full.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.full((2, 2), 7))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-full-3-code"
      }
    ]
  },
  {
    "id": "numpy-np-eye-4",
    "library": "NumPy",
    "title": "np.eye()",
    "shortDesc": "Единичная матрица: на главной диагонали 1, остальное 0. Параметры: N (размер), M=None (если задать —...",
    "theory": "<p>Единичная матрица: на главной диагонали 1, остальное 0. Параметры: N (размер), M=None (если задать — прямоугольная матрица), k=0 (сдвиг диагонали: k>0 — выше главной, k<0 — ниже). Возвращает 2D массив. Используется в линейной алгебре (обратная, системы).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-eye-4-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.eye.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.eye(3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-eye-4-code"
      }
    ]
  },
  {
    "id": "numpy-np-arange-5",
    "library": "NumPy",
    "title": "np.arange()",
    "shortDesc": "Аналог range(), но возвращает массив: [0, 2, 4, 6, 8]. Параметры: start (по умолчанию 0), stop (обяз...",
    "theory": "<p>Аналог range(), но возвращает массив: [0, 2, 4, 6, 8]. Параметры: start (по умолчанию 0), stop (обязательный, не входит в результат!), step=1, dtype=None. Из-за погрешности float лучше для дробных шагов использовать np.linspace.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-arange-5-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.arange.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.arange(0, 10, 2))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-arange-5-code"
      }
    ]
  },
  {
    "id": "numpy-np-linspace-6",
    "library": "NumPy",
    "title": "np.linspace()",
    "shortDesc": "Равномерно распределённые числа от start до stop включительно (если endpoint=True). Здесь 5 точек: [...",
    "theory": "<p>Равномерно распределённые числа от start до stop включительно (если endpoint=True). Здесь 5 точек: [0., 0.25, 0.5, 0.75, 1.]. Параметры: start, stop, num=50 (число точек), endpoint=True, retstep=False, dtype=None. Идеально для сеток по оси (графики, выборка).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-linspace-6-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linspace.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linspace(0, 1, 5))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linspace-6-code"
      }
    ]
  },
  {
    "id": "numpy-np-empty-7",
    "library": "NumPy",
    "title": "np.empty()",
    "shortDesc": "Массив заданной формы без инициализации ячеек — в памяти остаётся \"мусор\". Быстрее zeros/ones, но зн...",
    "theory": "<p>Массив заданной формы без инициализации ячеек — в памяти остаётся \"мусор\". Быстрее zeros/ones, но значения непредсказуемы до записи. Используйте, когда сразу заполняете массив целиком (избегая лишнего обнуления).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-empty-7-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.empty.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.empty((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-empty-7-code"
      }
    ]
  },
  {
    "id": "numpy-np-copy-8",
    "library": "NumPy",
    "title": "np.copy()",
    "shortDesc": "Создаёт копию массива a. Изменения в копии не затрагивают исходный массив. Параметр order='K'. Если ...",
    "theory": "<p>Создаёт копию массива a. Изменения в копии не затрагивают исходный массив. Параметр order='K'. Если нужна копия с другой раскладкой в памяти — order='C' или 'F'.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-copy-8-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.copy.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.copy(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-copy-8-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-rand-9",
    "library": "NumPy",
    "title": "np.random.rand()",
    "shortDesc": "Случайные числа из равномерного распределения на [0, 1). Форма задаётся отдельными аргументами: rand...",
    "theory": "<p>Случайные числа из равномерного распределения на [0, 1). Форма задаётся отдельными аргументами: rand(d0, d1, d2, ...). Возвращает массив формы (2, 3). Не передавайте кортеж: rand((2,3)) даст ошибку интерпретации. Для воспроизводимости перед этим вызовите np.random.seed(42).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-rand-9-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.rand.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.rand(2, 3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-rand-9-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-randn-10",
    "library": "NumPy",
    "title": "np.random.randn()",
    "shortDesc": "Стандартное нормальное распределение (среднее 0, дисперсия 1). Форма — отдельные аргументы, как у ra...",
    "theory": "<p>Стандартное нормальное распределение (среднее 0, дисперсия 1). Форма — отдельные аргументы, как у rand. Используется для инициализации весов нейросетей, генерации шума.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-randn-10-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.randn.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.randn(2, 3))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randn-10-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-randint-11",
    "library": "NumPy",
    "title": "np.random.randint()",
    "shortDesc": "Случайные целые числа. low (включительно), high (не входит!) — диапазон; size — число или кортеж фор...",
    "theory": "<p>Случайные целые числа. low (включительно), high (не входит!) — диапазон; size — число или кортеж формы. Здесь числа от 0 до 9, массив 3×4. Если передать только high — low считается 0. Возвращает int по умолчанию (платформозависимо).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-randint-11-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.randint.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.random.randint(0, 10, size=(3, 4))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-randint-11-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-random-12",
    "library": "NumPy",
    "title": "np.random.random()",
    "shortDesc": "Равномерное [0, 1). В отличие от rand, размер задаётся одним числом или кортежем: random((2, 3)) или...",
    "theory": "<p>Равномерное [0, 1). В отличие от rand, размер задаётся одним числом или кортежем: random((2, 3)) или random(6). Удобно когда форма в переменной: random(shape).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-random-12-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.random.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.random((2, 3)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-random-12-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-choice-13",
    "library": "NumPy",
    "title": "np.random.choice()",
    "shortDesc": "Случайная выборка из массива или из range(int). Параметры: a (массив или int), size=None (число или ...",
    "theory": "<p>Случайная выборка из массива или из range(int). Параметры: a (массив или int), size=None (число или форма), replace=True (с возвратом или без), p=None (вероятности элементов). Возвращает массив размера size. Для replace=False размер не может быть больше длины a.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-choice-13-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.choice.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.random.choice([1, 2, 3], size=5)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-choice-13-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-shuffle-14",
    "library": "NumPy",
    "title": "np.random.shuffle()",
    "shortDesc": "Перемешивает массив x по первой оси на месте (исходный массив меняется). Возвращает None. Для 1D пер...",
    "theory": "<p>Перемешивает массив x по первой оси на месте (исходный массив меняется). Возвращает None. Для 1D перемешиваются элементы; для 2D — порядок строк. Чтобы не портить исходный массив, используйте np.random.permutation(x) — он возвращает новую перемешанную копию.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-shuffle-14-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.shuffle.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.shuffle(x))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-shuffle-14-code"
      }
    ]
  },
  {
    "id": "numpy-np-random-seed-15",
    "library": "NumPy",
    "title": "np.random.seed()",
    "shortDesc": "Устанавливает начальное состояние генератора случайных чисел. Один и тот же seed даёт одну и ту же п...",
    "theory": "<p>Устанавливает начальное состояние генератора случайных чисел. Один и тот же seed даёт одну и ту же последовательность. Вызывайте один раз в начале скрипта (или в начале цикла экспериментов) для воспроизводимости результатов. Число 42 — произвольное, любое фиксированное подойдёт.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-random-seed-15-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.random.Generator.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.random.seed(42))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-random-seed-15-code"
      }
    ]
  },
  {
    "id": "numpy-a-shape-16",
    "library": "NumPy",
    "title": "a.shape",
    "shortDesc": "Кортеж размеров по осям. Для матрицы 3×4 вернёт (3, 4). Это атрибут — вызывается без скобок: a.shape...",
    "theory": "<p>Кортеж размеров по осям. Для матрицы 3×4 вернёт (3, 4). Это атрибут — вызывается без скобок: a.shape, не a.shape(). Для 1D массив из n элементов даст (n,). Удобно проверять размерности перед операциями.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-shape-16-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.shape.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.shape)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-shape-16-code"
      }
    ]
  },
  {
    "id": "numpy-a-ndim-17",
    "library": "NumPy",
    "title": "a.ndim",
    "shortDesc": "Число измерений (осей). 1 — вектор, 2 — матрица, 3 — тензор и т.д. Атрибут, без скобок. len(a.shape)...",
    "theory": "<p>Число измерений (осей). 1 — вектор, 2 — матрица, 3 — тензор и т.д. Атрибут, без скобок. len(a.shape) даёт то же значение.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-ndim-17-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.ndim)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-ndim-17-code"
      }
    ]
  },
  {
    "id": "numpy-a-size-18",
    "library": "NumPy",
    "title": "a.size",
    "shortDesc": "Общее число элементов в массиве (произведение всех размеров shape). Атрибут. Эквивалентно np.prod(a....",
    "theory": "<p>Общее число элементов в массиве (произведение всех размеров shape). Атрибут. Эквивалентно np.prod(a.shape).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-size-18-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.size)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-size-18-code"
      }
    ]
  },
  {
    "id": "numpy-a-dtype-19",
    "library": "NumPy",
    "title": "a.dtype",
    "shortDesc": "Тип данных элементов: np.float64, np.int32, np.bool_ и т.д. Только чтение. Важно при смешивании с др...",
    "theory": "<p>Тип данных элементов: np.float64, np.int32, np.bool_ и т.д. Только чтение. Важно при смешивании с другими типами или при сохранении в файл.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-dtype-19-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.dtype.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.dtype)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-dtype-19-code"
      }
    ]
  },
  {
    "id": "numpy-a-astype-20",
    "library": "NumPy",
    "title": "a.astype()",
    "shortDesc": "Метод: возвращает новый массив с приведением к типу dtype. Исходный массив не меняется. Параметры: d...",
    "theory": "<p>Метод: возвращает новый массив с приведением к типу dtype. Исходный массив не меняется. Параметры: dtype (обязательный), copy=True. При приведении float → int дробная часть отбрасывается (не округление!).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-astype-20-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.astype.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.astype(np.float32))",
        "solution": "",
        "hints": [],
        "id": "numpy-a-astype-20-code"
      }
    ]
  },
  {
    "id": "numpy-a-t-21",
    "library": "NumPy",
    "title": "a.T",
    "shortDesc": "Транспонирование: строки и столбцы меняются местами. Для 2D (матрица) — атрибут, без скобок. Возвращ...",
    "theory": "<p>Транспонирование: строки и столбцы меняются местами. Для 2D (матрица) — атрибут, без скобок. Возвращает вид (view), где возможно — без копии данных. Для 1D массив не меняется (тот же вид).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-t-21-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.T.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.T)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-t-21-code"
      }
    ]
  },
  {
    "id": "numpy-a-0-na-i-j-2d-22",
    "library": "NumPy",
    "title": "a[0]\\na[i, j]  # 2D",
    "shortDesc": "Один элемент: a[0] — первый (индексы с нуля); для 2D a[i, j] — элемент в строке i, столбце j. Отрица...",
    "theory": "<p>Один элемент: a[0] — первый (индексы с нуля); для 2D a[i, j] — элемент в строке i, столбце j. Отрицательный индекс: a[-1] — последний элемент. Возвращает скаляр (тип np — int64, float64 и т.д.).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-0-na-i-j-2d-22-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\na[0]\nprint(a[i, j]  # 2D)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-na-i-j-2d-22-code"
      }
    ]
  },
  {
    "id": "numpy-a-1-4-na-0-3-1-4-2d-23",
    "library": "NumPy",
    "title": "a[1:4]\\na[0:3, 1:4]  # 2D срезы",
    "shortDesc": "Срезы: start:stop:step. stop не входит! a[1:4] — индексы 1, 2, 3. Для 2D a[0:3, 1:4] — подматрица: с...",
    "theory": "<p>Срезы: start:stop:step. stop не входит! a[1:4] — индексы 1, 2, 3. Для 2D a[0:3, 1:4] — подматрица: строки 0,1,2 и столбцы 1,2,3. Пропуск start/stop: a[:4] — с начала, a[2:] — до конца. step: a[::2] — каждый второй. Срез возвращает вид (view), изменения влияют на исходный массив.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-1-4-na-0-3-1-4-2d-23-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\na[1:4]\nprint(a[0:3, 1:4]  # 2D срезы)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-1-4-na-0-3-1-4-2d-23-code"
      }
    ]
  },
  {
    "id": "numpy-a-a-0-24",
    "library": "NumPy",
    "title": "a[a > 0]",
    "shortDesc": "Булева маска: в скобках выражение, дающее массив булевых той же формы (a > 0, a == 5 и т.д.). Возвра...",
    "theory": "<p>Булева маска: в скобках выражение, дающее массив булевых той же формы (a > 0, a == 5 и т.д.). Возвращается 1D массив из элементов, где условие True. Удобно фильтровать данные. Результат — копия, не вид.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-a-0-24-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a[a > 0])",
        "solution": "",
        "hints": [],
        "id": "numpy-a-a-0-24-code"
      }
    ]
  },
  {
    "id": "numpy-a-0-2-4-25",
    "library": "NumPy",
    "title": "a[[0, 2, 4]]",
    "shortDesc": "Fancy indexing: передаёте список или массив индексов — получаете массив из выбранных элементов (в 1D...",
    "theory": "<p>Fancy indexing: передаёте список или массив индексов — получаете массив из выбранных элементов (в 1D) или строк (в 2D). a[[0, 2, 4]] — элементы с индексами 0, 2, 4. Результат — копия. Порядок в списке может быть любым, повторения допустимы.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-0-2-4-25-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/basics.indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a[[0, 2, 4]])",
        "solution": "",
        "hints": [],
        "id": "numpy-a-0-2-4-25-code"
      }
    ]
  },
  {
    "id": "numpy-a-reshape-26",
    "library": "NumPy",
    "title": "a.reshape()",
    "shortDesc": "Метод: придаёт массиву новую форму. Общее число элементов должно совпадать (например 3×4 = 12 и 6×2 ...",
    "theory": "<p>Метод: придаёт массиву новую форму. Общее число элементов должно совпадать (например 3×4 = 12 и 6×2 = 12). Параметр shape можно передать отдельными аргументами или кортежем. reshape(-1) — \"развернуть\" в 1D (одна строка). reshape(-1, 2) — неизвестное число строк, 2 столбца. Возвращает вид, если память непрерывна; иначе копию.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-reshape-26-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.reshape.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.reshape(6, 2))",
        "solution": "",
        "hints": [],
        "id": "numpy-a-reshape-26-code"
      }
    ]
  },
  {
    "id": "numpy-a-flatten-27",
    "library": "NumPy",
    "title": "a.flatten()",
    "shortDesc": "Метод: возвращает копию массива, сведённую к одному измерению (все элементы подряд, порядок C — по с...",
    "theory": "<p>Метод: возвращает копию массива, сведённую к одному измерению (все элементы подряд, порядок C — по строкам). Всегда копия. Для вида используйте ravel() (но ravel может вернуть вид или копию).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-flatten-27-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.ndarray.flatten.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(a.flatten())",
        "solution": "",
        "hints": [],
        "id": "numpy-a-flatten-27-code"
      }
    ]
  },
  {
    "id": "numpy-np-concatenate-28",
    "library": "NumPy",
    "title": "np.concatenate()",
    "shortDesc": "Склеивает массивы вдоль заданной оси. Первый аргумент — последовательность массивов (кортеж или спис...",
    "theory": "<p>Склеивает массивы вдоль заданной оси. Первый аргумент — последовательность массивов (кортеж или список). axis=0 — добавлять по строкам (вертикально); axis=1 — по столбцам (горизонтально). Размеры по остальным осям должны совпадать. Возвращает новый массив.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-concatenate-28-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.concatenate((a, b), axis=0)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-concatenate-28-code"
      }
    ]
  },
  {
    "id": "numpy-np-vstack-29",
    "library": "NumPy",
    "title": "np.vstack()",
    "shortDesc": "vstack — вертикальное объединение (по оси 0): массивы ставятся друг под другом. hstack — горизонталь...",
    "theory": "<p>vstack — вертикальное объединение (по оси 0): массивы ставятся друг под другом. hstack — горизонтальное (по оси 1): друг рядом. Удобные обёртки над concatenate. Для 1D массивов vstack сделает из них строки матрицы.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-vstack-29-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.vstack.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.vstack((a, b))\nprint(np.hstack((a, b)))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-vstack-29-code"
      }
    ]
  },
  {
    "id": "numpy-a-b-na-b-30",
    "library": "NumPy",
    "title": "a + b\\na * b",
    "shortDesc": "Операторы +, -, *, /, ** применяются поэлементно (element-wise). Для a * b каждый элемент умножается...",
    "theory": "<p>Операторы +, -, *, /, ** применяются поэлементно (element-wise). Для a * b каждый элемент умножается с соответствующим. Формы массивов должны быть совместимы: одинаковые или по правилам broadcasting (например массив (3,4) + массив (4,) — столбец повторяется по строкам). Результат — массив.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-a-b-na-b-30-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/basics.broadcasting.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\na + b\nprint(a * b)",
        "solution": "",
        "hints": [],
        "id": "numpy-a-b-na-b-30-code"
      }
    ]
  },
  {
    "id": "numpy-np-sqrt-31",
    "library": "NumPy",
    "title": "np.sqrt()",
    "shortDesc": "Универсальные функции (ufunc): один массив на вход, массив той же формы на выход. np.sqrt(a) — корен...",
    "theory": "<p>Универсальные функции (ufunc): один массив на вход, массив той же формы на выход. np.sqrt(a) — корень из каждого элемента (для отрицательных — nan). np.abs(a) — модуль. Вызов через np., не через точку от массива. Другие: np.exp, np.log, np.sin, np.round.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-sqrt-31-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sqrt.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.sqrt(a)\nprint(np.abs(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sqrt-31-code"
      }
    ]
  },
  {
    "id": "numpy-np-dot-32",
    "library": "NumPy",
    "title": "np.dot()",
    "shortDesc": "Матричное умножение. Для 2D массивов: (A @ B)[i,j] = сумма по k A[i,k]*B[k,j]. Размеры: (n, k) @ (k,...",
    "theory": "<p>Матричное умножение. Для 2D массивов: (A @ B)[i,j] = сумма по k A[i,k]*B[k,j]. Размеры: (n, k) @ (k, m) = (n, m). Оператор @ — то же для матриц. np.dot для 1D — скалярное произведение; для 2D — произведение матриц. Не путать с поэлементным умножением *.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-dot-32-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.dot.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.dot(A, B)\nprint(A @ B  # Python 3.5+)",
        "solution": "",
        "hints": [],
        "id": "numpy-np-dot-32-code"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-inv-33",
    "library": "NumPy",
    "title": "np.linalg.inv()",
    "shortDesc": "Обратная матрица A⁻¹ такая, что A @ inv(A) ≈ I. A должна быть квадратной и невырожденной (определите...",
    "theory": "<p>Обратная матрица A⁻¹ такая, что A @ inv(A) ≈ I. A должна быть квадратной и невырожденной (определитель ≠ 0). При плохой обусловленности возможны численные ошибки. Для решения систем лучше использовать solve.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-linalg-inv-33-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.inv.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linalg.inv(A))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-inv-33-code"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-solve-34",
    "library": "NumPy",
    "title": "np.linalg.solve()",
    "shortDesc": "Решает систему линейных уравнений Ax = b. Возвращает x. Параметры: A (матрица коэффициентов), b (век...",
    "theory": "<p>Решает систему линейных уравнений Ax = b. Возвращает x. Параметры: A (матрица коэффициентов), b (вектор или матрица правых частей). Численно устойчивее, чем x = inv(A) @ b. Если b 2D, решается несколько систем с разными правыми частями.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-linalg-solve-34-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.solve.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linalg.solve(A, b))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-solve-34-code"
      }
    ]
  },
  {
    "id": "numpy-np-linalg-norm-35",
    "library": "NumPy",
    "title": "np.linalg.norm()",
    "shortDesc": "Норма вектора или матрицы. По умолчанию ord=None — L2-норма (евклидова). Параметры: x, ord (например...",
    "theory": "<p>Норма вектора или матрицы. По умолчанию ord=None — L2-норма (евклидова). Параметры: x, ord (например 2, 1, np.inf), axis (по какой оси считать). Для вектора norm(x) — длина. Для матрицы — норма Фробениуса.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-linalg-norm-35-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linalg.norm.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.linalg.norm(x))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-linalg-norm-35-code"
      }
    ]
  },
  {
    "id": "numpy-np-sum-36",
    "library": "NumPy",
    "title": "np.sum()",
    "shortDesc": "Сумма и среднее арифметическое по всем элементам (или по оси). Параметры: a, axis=None (None — по вс...",
    "theory": "<p>Сумма и среднее арифметическое по всем элементам (или по оси). Параметры: a, axis=None (None — по всем элементам), dtype, keepdims. axis=0 — по столбцам (результат по строкам); axis=1 — по строкам. Вызов через np.sum(a), не a.sum() (хотя метод тоже есть).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-sum-36-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sum.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.sum(a)\nprint(np.mean(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sum-36-code"
      }
    ]
  },
  {
    "id": "numpy-np-min-37",
    "library": "NumPy",
    "title": "np.min()",
    "shortDesc": "min/max — минимальное и максимальное значение; с axis — по оси. argmin/argmax — индекс первого миним...",
    "theory": "<p>min/max — минимальное и максимальное значение; с axis — по оси. argmin/argmax — индекс первого минимума/максимума (в плоском виде, если axis не задан). Для 2D с axis=1 argmax по строкам даёт индекс максимума в каждой строке. Полезно для классификации (индекс класса).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-min-37-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.min.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.min(a)\nnp.max(a)\nnp.argmin(a)\nprint(np.argmax(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-min-37-code"
      }
    ]
  },
  {
    "id": "numpy-np-std-38",
    "library": "NumPy",
    "title": "np.std()",
    "shortDesc": "Стандартное отклонение и дисперсия. Параметр ddof: ddof=0 (по умолчанию) — деление на N; ddof=1 — на...",
    "theory": "<p>Стандартное отклонение и дисперсия. Параметр ddof: ddof=0 (по умолчанию) — деление на N; ddof=1 — на N−1 (несмещённая оценка для выборки). axis — по какой оси считать. Для выборки из генеральной совокупности обычно ddof=1.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-std-38-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.std.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.std(a)\nprint(np.var(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-std-38-code"
      }
    ]
  },
  {
    "id": "numpy-import-numpy-as-np-e-39",
    "library": "NumPy",
    "title": "import numpy as np",
    "shortDesc": "Стандартный импорт: все функции вызываются через префикс np. (np.array, np.zeros и т.д.). NumPy — эт...",
    "theory": "<p>Стандартный импорт: все функции вызываются через префикс np. (np.array, np.zeros и т.д.). NumPy — это модуль, не класс: не создаёте объект, а вызываете функции модуля. Сокращение \"np\" принято во всей документации и примерах.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-import-numpy-as-np-e-39-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/user/absolute_beginners.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np",
        "solution": "",
        "hints": [],
        "id": "numpy-import-numpy-as-np-e-39-code"
      }
    ]
  },
  {
    "id": "numpy-np-sort-e-40",
    "library": "NumPy",
    "title": "np.sort()",
    "shortDesc": "np.sort(a) — возвращает отсортированную копию массива; исходный массив не меняется. a.sort() — сорти...",
    "theory": "<p>np.sort(a) — возвращает отсортированную копию массива; исходный массив не меняется. a.sort() — сортировка на месте (исходный массив перезаписывается), возвращает None. Параметр axis: по умолчанию -1 (последняя ось). Для 2D axis=0 сортирует каждую колонку, axis=1 — каждую строку. Порядок по возрастанию.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-sort-e-40-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.sort.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nnp.sort(a)\nprint(a.sort())",
        "solution": "",
        "hints": [],
        "id": "numpy-np-sort-e-40-code"
      }
    ]
  },
  {
    "id": "numpy-np-argsort-e-41",
    "library": "NumPy",
    "title": "np.argsort()",
    "shortDesc": "Возвращает массив индексов, задающих порядок сортировки по возрастанию. То есть a[np.argsort(a)] даё...",
    "theory": "<p>Возвращает массив индексов, задающих порядок сортировки по возрастанию. То есть a[np.argsort(a)] даёт отсортированный массив. Используется для сортировки по одному массиву и перестановки другого (например сортировка меток по оценкам). axis — по какой оси.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-argsort-e-41-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.argsort.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.argsort(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-argsort-e-41-code"
      }
    ]
  },
  {
    "id": "numpy-np-where-e-42",
    "library": "NumPy",
    "title": "np.where()",
    "shortDesc": "Возвращает кортеж массивов индексов, где condition истинно. Для 1D один массив: np.where(a > 0) — ин...",
    "theory": "<p>Возвращает кортеж массивов индексов, где condition истинно. Для 1D один массив: np.where(a > 0) — индексы положительных элементов. Для 2D два массива (индексы строк и столбцов). Трёхаргументная форма: np.where(cond, x, y) — где cond истинно взять x, иначе y (поэлементно).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-where-e-42-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.where.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.where(condition))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-where-e-42-code"
      }
    ]
  },
  {
    "id": "numpy-np-unique-e-43",
    "library": "NumPy",
    "title": "np.unique()",
    "shortDesc": "Возвращает отсортированный массив уникальных значений. Параметры: return_index (индексы первого вхож...",
    "theory": "<p>Возвращает отсортированный массив уникальных значений. Параметры: return_index (индексы первого вхождения), return_inverse (обратные индексы для восстановления), return_counts (сколько раз каждый элемент). Полезно для категориальных признаков и подсчёта уникальных меток.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-numpy-np-unique-e-43-code'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.unique.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nprint(np.unique(a))",
        "solution": "",
        "hints": [],
        "id": "numpy-np-unique-e-43-code"
      }
    ]
  },
  {
    "id": "pandas-import-pandas-as-pd-e-44",
    "library": "Pandas",
    "title": "import pandas as pd",
    "shortDesc": "Стандартный импорт: все классы и функции вызываются через pd. (pd.DataFrame, pd.read_csv, pd.Series ...",
    "theory": "<p>Стандартный импорт: все классы и функции вызываются через pd. (pd.DataFrame, pd.read_csv, pd.Series и т.д.). Сокращение \"pd\" принято во всей документации.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-import-pandas-as-pd-e-44-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://pandas.pydata.org/docs/getting_started/index.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd",
        "solution": "",
        "hints": [],
        "id": "pandas-import-pandas-as-pd-e-44-code"
      }
    ]
  },
  {
    "id": "pandas-pd-dataframe-e-45",
    "library": "Pandas",
    "title": "pd.DataFrame()",
    "shortDesc": "DataFrame — таблица с именованными столбцами и индексом строк. Создание: из словаря (ключи — имена с...",
    "theory": "<p>DataFrame — таблица с именованными столбцами и индексом строк. Создание: из словаря (ключи — имена столбцов, значения — списки/массивы данных), из списка списков с указанием columns, из ndarray. index — метки строк (по умолчанию 0, 1, 2, ...). columns задаёт порядок и набор столбцов. Возвращает DataFrame.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-pd-dataframe-e-45-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.DataFrame({\"A\": [1, 2], \"B\": [3, 4]})\ndf = pd.DataFrame(data, columns=[\"x\", \"y\"], index=[0, 1])",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-dataframe-e-45-code"
      }
    ]
  },
  {
    "id": "pandas-pd-series-e-46",
    "library": "Pandas",
    "title": "pd.Series()",
    "shortDesc": "Series — одномерная структура с метками (индексом). data — список или массив; index — метки (по умол...",
    "theory": "<p>Series — одномерная структура с метками (индексом). data — список или массив; index — метки (по умолчанию 0, 1, 2, ...). Один столбец DataFrame по сути Series. Используется для одной переменной или для результата выборки одного столбца.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-pd-series-e-46-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.Series.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.Series([1, 2, 3], index=[\"a\", \"b\", \"c\"])",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-series-e-46-code"
      }
    ]
  },
  {
    "id": "pandas-pd-read-csv-e-47",
    "library": "Pandas",
    "title": "pd.read_csv()",
    "shortDesc": "Читает CSV в DataFrame. Параметры: filepath_or_buffer (путь или URL), sep=\",\" (разделитель), header=...",
    "theory": "<p>Читает CSV в DataFrame. Параметры: filepath_or_buffer (путь или URL), sep=\",\" (разделитель), header=0 (какая строка — заголовки; None если заголовков нет), encoding=\"utf-8\" (для кириллицы часто utf-8 или cp1251), usecols (какие столбцы читать), na_values (что считать пропуском). Возвращает DataFrame. Для больших файлов: chunksize — читать по кускам.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-pd-read-csv-e-47-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.read_csv.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.read_csv(\"file.csv\", sep=\",\", header=0, encoding=\"utf-8\")",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-csv-e-47-code"
      }
    ]
  },
  {
    "id": "pandas-pd-read-excel-e-48",
    "library": "Pandas",
    "title": "pd.read_excel()",
    "shortDesc": "Читает лист Excel. sheet_name — номер листа (0, 1, ...) или имя листа (строка). Требует установленны...",
    "theory": "<p>Читает лист Excel. sheet_name — номер листа (0, 1, ...) или имя листа (строка). Требует установленный openpyxl (для .xlsx) или xlrd (для .xls). Возвращает DataFrame. Несколько листов: sheet_name=None возвращает словарь {имя_листа: DataFrame}.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-pd-read-excel-e-48-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.read_excel.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\npd.read_excel(\"file.xlsx\", sheet_name=0)",
        "solution": "",
        "hints": [],
        "id": "pandas-pd-read-excel-e-48-code"
      }
    ]
  },
  {
    "id": "pandas-df-to-csv-e-49",
    "library": "Pandas",
    "title": "df.to_csv()",
    "shortDesc": "Методы DataFrame: сохраняют таблицу в файл. to_csv: sep=\",\", index=True (писать ли индекс), encoding...",
    "theory": "<p>Методы DataFrame: сохраняют таблицу в файл. to_csv: sep=\",\", index=True (писать ли индекс), encoding. to_excel: нужен openpyxl. Возвращают None. Для больших данных to_csv быстрее и компактнее.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-to-csv-e-49-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.to_csv.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.to_csv(\"out.csv\")\nprint(df.to_excel(\"out.xlsx\"))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-to-csv-e-49-code"
      }
    ]
  },
  {
    "id": "pandas-df-head-e-50",
    "library": "Pandas",
    "title": "df.head()",
    "shortDesc": "Методы: первые или последние n строк таблицы. head(n=5), tail(n=5). Удобно для быстрого просмотра бе...",
    "theory": "<p>Методы: первые или последние n строк таблицы. head(n=5), tail(n=5). Удобно для быстрого просмотра без вывода всего датасета. Возвращают DataFrame.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-head-e-50-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.head(5)\nprint(df.tail(5))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-head-e-50-code"
      }
    ]
  },
  {
    "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51",
    "library": "Pandas",
    "title": "df.shape\\ndf.columns\\ndf.dtypes",
    "shortDesc": "Атрибуты (без скобок). shape — кортеж (число строк, число столбцов). columns — индекс с именами стол...",
    "theory": "<p>Атрибуты (без скобок). shape — кортеж (число строк, число столбцов). columns — индекс с именами столбцов (можно перебирать или df.columns = [\"a\",\"b\"]). dtypes — тип каждого столбца (int64, float64, object и т.д.).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.shape\ndf.columns\nprint(df.dtypes)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-shape-ndf-columns-ndf-dtypes-e-51-code"
      }
    ]
  },
  {
    "id": "pandas-df-info-e-52",
    "library": "Pandas",
    "title": "df.info()",
    "shortDesc": "info() — краткая сводка: число строк, список столбцов, типы, число непустых значений, использование ...",
    "theory": "<p>info() — краткая сводка: число строк, список столбцов, типы, число непустых значений, использование памяти. describe() — статистика по числовым столбцам (count, mean, std, min, квантили, max). Для категориальных describe(include=\"object\"). Вызов: df.info(), df.describe().</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-info-e-52-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.info()\nprint(df.describe())",
        "solution": "",
        "hints": [],
        "id": "pandas-df-info-e-52-code"
      }
    ]
  },
  {
    "id": "pandas-df-col-ndf-col-e-53",
    "library": "Pandas",
    "title": "df[\"col\"]\\ndf.col",
    "shortDesc": "Один столбец: возвращает Series. Синтаксис df[\"col\"] работает всегда (в т.ч. если имя с пробелами). ...",
    "theory": "<p>Один столбец: возвращает Series. Синтаксис df[\"col\"] работает всегда (в т.ч. если имя с пробелами). df.col — только если имя столбца без пробелов и не конфликтует с методом. Результат — ссылка на данные; изменение может изменить исходный df (осторожно с присваиванием).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-col-ndf-col-e-53-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://pandas.pydata.org/docs/user_guide/indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf[\"col\"]\nprint(df.col)",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col-ndf-col-e-53-code"
      }
    ]
  },
  {
    "id": "pandas-df-col1-col2-e-54",
    "library": "Pandas",
    "title": "df[[\"col1\", \"col2\"]]",
    "shortDesc": "Несколько столбцов: передаёте список имён — возвращается DataFrame с этими столбцами в указанном пор...",
    "theory": "<p>Несколько столбцов: передаёте список имён — возвращается DataFrame с этими столбцами в указанном порядке. Удобно для подмножества признаков или перестановки столбцов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-col1-col2-e-54-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://pandas.pydata.org/docs/user_guide/indexing.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\nprint(df[[\"col1\", \"col2\"]])",
        "solution": "",
        "hints": [],
        "id": "pandas-df-col1-col2-e-54-code"
      }
    ]
  },
  {
    "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55",
    "library": "Pandas",
    "title": "df.loc[0, \"A\"]\\ndf.loc[df[\"x\"] > 0]",
    "shortDesc": "Доступ по меткам (labels): loc[индекс_строки, индекс_столбца]. Одна метка — скаляр; срез — подтаблиц...",
    "theory": "<p>Доступ по меткам (labels): loc[индекс_строки, индекс_столбца]. Одна метка — скаляр; срез — подтаблица. df.loc[df[\"x\"] > 0] — фильтр строк: оставить только те, где в столбце \"x\" значение больше 0. Можно передать список меток, срез меток или булев Series (длина как у индекса).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.loc.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.loc[0, \"A\"]\nprint(df.loc[df[\"x\"] > 0])",
        "solution": "",
        "hints": [],
        "id": "pandas-df-loc-0-a-ndf-loc-df-x-0-e-55-code"
      }
    ]
  },
  {
    "id": "pandas-df-iloc-0-5-1-4-e-56",
    "library": "Pandas",
    "title": "df.iloc[0:5, 1:4]",
    "shortDesc": "Доступ по целочисленным позициям: iloc[позиция_строки, позиция_столбца]. Работает как срезы в NumPy:...",
    "theory": "<p>Доступ по целочисленным позициям: iloc[позиция_строки, позиция_столбца]. Работает как срезы в NumPy: 0:5 — строки 0,1,2,3,4. Удобно когда не важно имя столбца/индекса, важна только позиция. Отрицательные индексы — с конца.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-iloc-0-5-1-4-e-56-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.iloc.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\nprint(df.iloc[0:5, 1:4])",
        "solution": "",
        "hints": [],
        "id": "pandas-df-iloc-0-5-1-4-e-56-code"
      }
    ]
  },
  {
    "id": "pandas-df-isna-e-57",
    "library": "Pandas",
    "title": "df.isna()",
    "shortDesc": "isna() — DataFrame той же формы с True там, где пропуск (NaN, None). dropna() — удаляет строки (axis...",
    "theory": "<p>isna() — DataFrame той же формы с True там, где пропуск (NaN, None). dropna() — удаляет строки (axis=0) или столбцы (axis=1) с пропусками. how=\"any\" — удалить если есть хотя бы один пропуск; how=\"all\" — только если все значения в строке/столбце пропуски. inplace=False — по умолчанию возвращает новый DataFrame.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-isna-e-57-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.dropna.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.isna()\ndf.dropna(axis=0, how=\"any\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-isna-e-57-code"
      }
    ]
  },
  {
    "id": "pandas-df-fillna-e-58",
    "library": "Pandas",
    "title": "df.fillna()",
    "shortDesc": "Заполняет пропуски. fillna(0) — константой 0. fillna(method=\"ffill\") — forward fill: предыдущее изве...",
    "theory": "<p>Заполняет пропуски. fillna(0) — константой 0. fillna(method=\"ffill\") — forward fill: предыдущее известное значение (по столбцу). method=\"bfill\" — backward fill. limit — максимум подряд заполняемых пропусков. Возвращает новый DataFrame (или меняет inplace=True).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-fillna-e-58-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.fillna.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.fillna(0)\ndf.fillna(method=\"ffill\")",
        "solution": "",
        "hints": [],
        "id": "pandas-df-fillna-e-58-code"
      }
    ]
  },
  {
    "id": "pandas-df-drop-e-59",
    "library": "Pandas",
    "title": "df.drop()",
    "shortDesc": "drop(columns=[\"col\"]) — удалить столбец (столбцы). drop(index=[...]) — удалить строки по меткам. dro...",
    "theory": "<p>drop(columns=[\"col\"]) — удалить столбец (столбцы). drop(index=[...]) — удалить строки по меткам. drop_duplicates() — оставить уникальные строки (по всем столбцам или по subset=[\"col\"]). keep=\"first\" — какую дублирующую строку оставить. Возвращает новый DataFrame.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-drop-e-59-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.drop.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.drop(columns=[\"col\"])\nprint(df.drop_duplicates())",
        "solution": "",
        "hints": [],
        "id": "pandas-df-drop-e-59-code"
      }
    ]
  },
  {
    "id": "pandas-df-groupby-e-60",
    "library": "Pandas",
    "title": "df.groupby()",
    "shortDesc": "groupby(\"col\") — разбивает DataFrame на группы по значениям столбца \"col\". Дальше вызывают агрегаты:...",
    "theory": "<p>groupby(\"col\") — разбивает DataFrame на группы по значениям столбца \"col\". Дальше вызывают агрегаты: .sum(), .mean(), .agg({\"other\": \"mean\", \"x\": \"sum\"}) — для каждого столбца своя функция. Результат — DataFrame с индексом по уникальным значениям \"col\". Несколько столбцов группировки: groupby([\"col1\", \"col2\"]).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-groupby-e-60-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.groupby(\"col\")\nprint(df.groupby(\"col\").agg({\"other\": \"mean\", \"x\": \"sum\"}))",
        "solution": "",
        "hints": [],
        "id": "pandas-df-groupby-e-60-code"
      }
    ]
  },
  {
    "id": "pandas-df-mean-e-61",
    "library": "Pandas",
    "title": "df.mean()",
    "shortDesc": "Методы по умолчанию считают по столбцам (axis=0): каждая строка результата — одно число по столбцу. ...",
    "theory": "<p>Методы по умолчанию считают по столбцам (axis=0): каждая строка результата — одно число по столбцу. mean(), sum() — среднее и сумма; пропуски пропускаются. corr() — корреляционная матрица между числовыми столбцами. axis=1 — считать по строкам. Возвращают Series или DataFrame.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pandas-df-mean-e-61-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.mean.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\nimport numpy as np\ndf.mean()\ndf.sum()\nprint(df.corr())",
        "solution": "",
        "hints": [],
        "id": "pandas-df-mean-e-61-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62",
    "library": "scikit-learn",
    "title": "from sklearn.model_selection import trai",
    "shortDesc": "Функция разбивает данные на обучающую и тестовую выборки. Параметры: X, y — признаки и целевая перем...",
    "theory": "<p>Функция разбивает данные на обучающую и тестовую выборки. Параметры: X, y — признаки и целевая переменная (массивы или DataFrame); test_size — доля теста (0.2 = 20%) или целое число примеров; random_state — фиксирует разбиение для воспроизводимости; shuffle=True по умолчанию. Возвращает четыре массива: X_train, X_test, y_train, y_test. На обучающей выборке вызываете fit модели, на тестовой — только predict (никогда не обучать на тесте).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-model-selection-import-trai-e-62-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-model-selection-import-trai-e-62-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63",
    "library": "scikit-learn",
    "title": "from sklearn.preprocessing import Standa",
    "shortDesc": "StandardScaler приводит признаки к нулевому среднему и единичной дисперсии (z-score). Создаёте экзем...",
    "theory": "<p>StandardScaler приводит признаки к нулевому среднему и единичной дисперсии (z-score). Создаёте экземпляр scaler; fit(X_train) считает среднее и std по обучающей выборке; transform(X_train) применяет формулу (x - mean) / std. На тестовых данных вызывайте только transform(X_test) — с параметрами, полученными на train (иначе утечка информации). fit_transform(X_train) — объединяет fit и transform в одном вызове для train.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nscaler.fit(X_train)\nX_train_scaled = scaler.transform(X_train)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-preprocessing-import-standa-e-63-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64",
    "library": "scikit-learn",
    "title": "from sklearn.pipeline import Pipeline\\np",
    "shortDesc": "Pipeline объединяет несколько шагов (препроцессинг + модель) в один объект. Каждый шаг — кортеж (имя...",
    "theory": "<p>Pipeline объединяет несколько шагов (препроцессинг + модель) в один объект. Каждый шаг — кортеж (имя, объект). При pipe.fit(X_train, y_train) сначала вызывается fit/transform у scaler, затем fit у модели на уже преобразованных данных. При pipe.predict(X_test) — transform у scaler и predict у модели. Удобно для кросс-валидации и избежания утечки: препроцессинг всегда подгоняется только по train.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.pipeline.Pipeline.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.pipeline import Pipeline\npipe = Pipeline([(\"scaler\", StandardScaler()), (\"model\", LinearRegression())])\npipe.fit(X_train, y_train)\ny_pred = pipe.predict(X_test)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-pipeline-import-pipeline-np-e-64-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65",
    "library": "scikit-learn",
    "title": "from sklearn.linear_model import LinearR",
    "shortDesc": "Линейная регрессия: предсказание непрерывной цели. Конструктор без аргументов или с параметрами (fit...",
    "theory": "<p>Линейная регрессия: предсказание непрерывной цели. Конструктор без аргументов или с параметрами (fit_intercept=True и т.д.). fit(X_train, y_train) — подгоняет веса по МНК. predict(X_test) — возвращает предсказания. После fit: model.coef_ — веса признаков (массив), model.intercept_ — свободный член. X — 2D массив формы (n_samples, n_features).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-linearr-e-65-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66",
    "library": "scikit-learn",
    "title": "from sklearn.linear_model import Logisti",
    "shortDesc": "Логистическая регрессия: бинарная или многоклассовая классификация. fit(X_train, y_train) — обучает;...",
    "theory": "<p>Логистическая регрессия: бинарная или многоклассовая классификация. fit(X_train, y_train) — обучает; y — метки классов (0, 1, 2, ...). predict(X_test) — предсказанный класс. predict_proba(X_test) — вероятности по классам (форма [n_samples, n_classes]). Параметры: C (регуляризация), max_iter, solver. После fit: coef_, intercept_.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\nmodel.predict(X_test)\nprint(model.predict_proba(X_test))",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-linear-model-import-logisti-e-66-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67",
    "library": "scikit-learn",
    "title": "from sklearn.ensemble import RandomFores",
    "shortDesc": "Случайный лес: ансамбль решающих деревьев. n_estimators — число деревьев (больше — стабильнее, но до...",
    "theory": "<p>Случайный лес: ансамбль решающих деревьев. n_estimators — число деревьев (больше — стабильнее, но дольше). fit(X_train, y_train) — обучение. predict(X_test), predict_proba(X_test) — предсказания. После fit: model.feature_importances_ — важность признаков (массив). Параметры: max_depth, min_samples_split, random_state для воспроизводимости. Хорошо работает \"из коробки\", устойчив к переобучению.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nprint(model.fit(X_train, y_train))",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-ensemble-import-randomfores-e-67-code"
      }
    ]
  },
  {
    "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68",
    "library": "scikit-learn",
    "title": "from sklearn.metrics import mean_squared",
    "shortDesc": "Метрики — функции, принимают y_true и y_pred (массивы одинаковой длины). mean_squared_error — для ре...",
    "theory": "<p>Метрики — функции, принимают y_true и y_pred (массивы одинаковой длины). mean_squared_error — для регрессии (средний квадрат ошибки). accuracy_score — доля правильных ответов для классификации. classification_report(y_true, y_pred) — precision, recall, F1 по классам. confusion_matrix(y_true, y_pred) — матрица: строки — истинный класс, столбцы — предсказанный. Вызов: mean_squared_error(y_true, y_pred), не от объекта модели.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.metrics.mean_squared_error.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.metrics import mean_squared_error, accuracy_score, classification_report, confusion_matrix\nmse = mean_squared_error(y_true, y_pred)\nacc = accuracy_score(y_true, y_pred)",
        "solution": "",
        "hints": [],
        "id": "scikit-learn-from-sklearn-metrics-import-mean-squared-e-68-code"
      }
    ]
  },
  {
    "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69",
    "library": "OpenCV",
    "title": "import cv2\\nimg = cv2.imread(\"path.jpg\",",
    "shortDesc": "Читает изображение из файла. Возвращает NumPy-массив (ndarray) или None, если файл не найден. Второй...",
    "theory": "<p>Читает изображение из файла. Возвращает NumPy-массив (ndarray) или None, если файл не найден. Второй аргумент: cv2.IMREAD_COLOR (по умолчанию) — 3 канала BGR; cv2.IMREAD_GRAYSCALE — один канал; cv2.IMREAD_UNCHANGED — с альфа-каналом. Важно: OpenCV хранит цвета в порядке BGR, а не RGB — при отображении через matplotlib или сохранении в другие форматы часто делают cv2.cvtColor(img, cv2.COLOR_BGR2RGB). Форма массива: (высота, ширина, 3) для цветного.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html#ga288b8b3da0892bd6519ce98888a17668\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimg = cv2.imread(\"path.jpg\", cv2.IMREAD_COLOR)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-cv2-nimg-cv2-imread-path-jpg-e-69-code"
      }
    ]
  },
  {
    "id": "opencv-cv2-imshow-e-70",
    "library": "OpenCV",
    "title": "cv2.imshow()",
    "shortDesc": "imshow(имя_окна, массив) — показывает изображение в окне с заданным именем. waitKey(0) — ждёт нажати...",
    "theory": "<p>imshow(имя_окна, массив) — показывает изображение в окне с заданным именем. waitKey(0) — ждёт нажатия клавиши; аргумент — задержка в мс (0 — бесконечно). destroyAllWindows() — закрывает все окна. В средах без GUI (например сервер) imshow может не работать — тогда сохраняйте через imwrite и смотрите файл. После imshow обязательно нужен waitKey, иначе окно не обновится.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-cv2-imshow-e-70-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/d9e/tutorial_py_highgui.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncv2.imshow(\"window\", img)\ncv2.waitKey(0)\nprint(cv2.destroyAllWindows())",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imshow-e-70-code"
      }
    ]
  },
  {
    "id": "opencv-cv2-imwrite-e-71",
    "library": "OpenCV",
    "title": "cv2.imwrite()",
    "shortDesc": "Сохраняет массив как изображение. Параметры: путь к файлу (строка), массив (обычно uint8, BGR). Расш...",
    "theory": "<p>Сохраняет массив как изображение. Параметры: путь к файлу (строка), массив (обычно uint8, BGR). Расширение файла задаёт формат (.jpg, .png и т.д.). Возвращает True при успехе, False при ошибке. Качество JPEG: cv2.imwrite(\"out.jpg\", img, [cv2.IMWRITE_JPEG_QUALITY, 95]).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-cv2-imwrite-e-71-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html#gabbc7ef1aa2edf6623730eb5eba4a2e4c\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(cv2.imwrite(\"out.jpg\", img))",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-imwrite-e-71-code"
      }
    ]
  },
  {
    "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72",
    "library": "OpenCV",
    "title": "img.shape\\nimg.size\\nimg.dtype",
    "shortDesc": "Изображение в OpenCV — это ndarray NumPy. shape — кортеж: для цветного (высота, ширина, 3), для gray...",
    "theory": "<p>Изображение в OpenCV — это ndarray NumPy. shape — кортеж: для цветного (высота, ширина, 3), для grayscale (высота, ширина). Порядок: сначала строки (высота), потом столбцы (ширина). size — общее число элементов (H*W*3 или H*W). dtype — обычно np.uint8 (0–255). Обращение к пикселю: img[y, x] (сначала строка y, потом столбец x).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-img-shape-nimg-size-nimg-dtype-e-72-code'></div><p style=\"margin-top:20px;\"><a href=\"'https://numpy.org/doc/stable/reference/generated/numpy.ndarray.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nimg.shape\nimg.size\nprint(img.dtype)",
        "solution": "",
        "hints": [],
        "id": "opencv-img-shape-nimg-size-nimg-dtype-e-72-code"
      }
    ]
  },
  {
    "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73",
    "library": "OpenCV",
    "title": "gray = cv2.cvtColor(img, cv2.COLOR_BGR2G",
    "shortDesc": "Преобразует изображение из одного цветового пространства в другое. Первый аргумент — массив изображе...",
    "theory": "<p>Преобразует изображение из одного цветового пространства в другое. Первый аргумент — массив изображения, второй — код преобразования: cv2.COLOR_BGR2GRAY (в оттенки серого), cv2.COLOR_BGR2RGB (для matplotlib), cv2.COLOR_BGR2HSV (для сегментации по цвету) и т.д. Возвращает новый массив. Размер не меняется (кроме числа каналов).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)",
        "solution": "",
        "hints": [],
        "id": "opencv-gray-cv2-cvtcolor-img-cv2-color-bgr2g-e-73-code"
      }
    ]
  },
  {
    "id": "opencv-resized-cv2-resize-img-width-height-e-74",
    "library": "OpenCV",
    "title": "resized = cv2.resize(img, (width, height",
    "shortDesc": "Изменяет размер изображения. Второй аргумент: (width, height) — целевой размер в пикселях (обратите ...",
    "theory": "<p>Изменяет размер изображения. Второй аргумент: (width, height) — целевой размер в пикселях (обратите внимание: width идёт первым, в shape — наоборот height, width). Либо None и тогда fx, fy — масштаб по осям (0.5 — в два раза меньше). Интерполяция по умолчанию — cv2.INTER_LINEAR; для уменьшения часто используют cv2.INTER_AREA.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-resized-cv2-resize-img-width-height-e-74-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html#ga47a974309e9102f5f08231edc7e7529d\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nresized = cv2.resize(img, (width, height))\nresized = cv2.resize(img, None, fx=0.5, fy=0.5)",
        "solution": "",
        "hints": [],
        "id": "opencv-resized-cv2-resize-img-width-height-e-74-code"
      }
    ]
  },
  {
    "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75",
    "library": "OpenCV",
    "title": "blurred = cv2.GaussianBlur(img, (5, 5), ",
    "shortDesc": "Гауссово размытие: сглаживает изображение, уменьшает шум. Параметры: изображение, размер ядра (корте...",
    "theory": "<p>Гауссово размытие: сглаживает изображение, уменьшает шум. Параметры: изображение, размер ядра (кортеж (kwidth, kheight); оба числа нечётные), sigmaX (0 — считается по размеру ядра). Возвращает новый массив той же формы. Большое ядро — сильнее размытие. Часто применяют перед Canny для уменьшения шума на границах.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html#gaabe8c836e97159a9193eff0bccac43a3\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nblurred = cv2.GaussianBlur(img, (5, 5), 0)",
        "solution": "",
        "hints": [],
        "id": "opencv-blurred-cv2-gaussianblur-img-5-5-e-75-code"
      }
    ]
  },
  {
    "id": "opencv-edges-cv2-canny-img-100-200-e-76",
    "library": "OpenCV",
    "title": "edges = cv2.Canny(img, 100, 200)",
    "shortDesc": "Детектор границ Кэнни: находит границы по градиенту. Параметры: изображение (лучше одноканальное, ин...",
    "theory": "<p>Детектор границ Кэнни: находит границы по градиенту. Параметры: изображение (лучше одноканальное, иначе обрабатывается каждый канал), threshold1, threshold2 — два порога гистерезиса (пиксели сильнее threshold2 — граница; между threshold1 и threshold2 — граница, если связаны с сильной). Результат — одноканальное бинарное изображение (0 или 255). Пороги подбирают под контраст сцены.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-edges-cv2-canny-img-100-200-e-76-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html#ga04723e007ed888d43411ea5a0a94b8bf\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nedges = cv2.Canny(img, 100, 200)",
        "solution": "",
        "hints": [],
        "id": "opencv-edges-cv2-canny-img-100-200-e-76-code"
      }
    ]
  },
  {
    "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77",
    "library": "OpenCV",
    "title": "contours, hierarchy = cv2.findContours(b",
    "shortDesc": "findContours находит контуры на бинарном изображении (обычно после threshold или Canny). Параметры: ...",
    "theory": "<p>findContours находит контуры на бинарном изображении (обычно после threshold или Canny). Параметры: изображение (8-bit, один канал), mode (cv2.RETR_TREE — все контуры с иерархией; RETR_EXTERNAL — только внешние), method (cv2.CHAIN_APPROX_SIMPLE — сжимает отрезки). Возвращает contours (список массивов точек) и hierarchy. drawContours рисует контуры на изображении: img (изменяется!), contours, индекс контура (-1 — все), цвет (BGR), толщина (линия; -1 — заливка).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-contours-hierarchy-cv2-findcontours-b-e-77-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html#gadf1ad6a0b82947fa1fe3c3d497f260e0\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncontours, hierarchy = cv2.findContours(binary, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)\nprint(cv2.drawContours(img, contours, -1, (0, 255, 0), 2))",
        "solution": "",
        "hints": [],
        "id": "opencv-contours-hierarchy-cv2-findcontours-b-e-77-code"
      }
    ]
  },
  {
    "id": "opencv-cv2-rectangle-e-78",
    "library": "OpenCV",
    "title": "cv2.rectangle()",
    "shortDesc": "rectangle — рисует прямоугольник: угловые точки (x1,y1) и (x2,y2), цвет (BGR), толщина линии (-1 — з...",
    "theory": "<p>rectangle — рисует прямоугольник: угловые точки (x1,y1) и (x2,y2), цвет (BGR), толщина линии (-1 — заливка). circle — центр (cx, cy), радиус, цвет, толщина. putText — текст, левый нижний угол (x, y), шрифт (cv2.FONT_HERSHEY_SIMPLEX и др.), масштаб шрифта, цвет. Все функции изменяют img на месте и возвращают None. Координаты — целые числа; цвет — кортеж (B, G, R).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-cv2-rectangle-e-78-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d6/d6e/group__imgproc__draw.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\ncv2.rectangle(img, (x1, y1), (x2, y2), (0, 255, 0), 2)\ncv2.circle(img, (cx, cy), radius, (0, 0, 255), -1)\nprint(cv2.putText(img, \"text\", (x, y), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255)))",
        "solution": "",
        "hints": [],
        "id": "opencv-cv2-rectangle-e-78-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "erode — эрозия (съедает белые пиксели с краев). dilate — дилатация (наращивает белые пиксели). getSt...",
    "theory": "<p>erode — эрозия (съедает белые пиксели с краев). dilate — дилатация (наращивает белые пиксели). getStructuringElement — создаёт ядро (MORPH_RECT, MORPH_ELLIPSE, MORPH_CROSS). Для удаления шума и склеивания компонентов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.zeros((100, 100), dtype=np.uint8)\ncv2.rectangle(img, (20, 20), (80, 80), 255, -1)\nkernel = cv2.getStructuringElement(cv2.MORPH_RECT, (5, 5))\neros = cv2.erode(img, kernel, iterations=1)\ndilat = cv2.dilate(img, kernel, iterations=1)\nprint(\"Erode/Dilate:\", eros.shape, dilat.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-79-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "morphologyEx: MORPH_OPEN (эрозия -> дилатация, убирает белый шум), MORPH_CLOSE (дилатация -> эрозия,...",
    "theory": "<p>morphologyEx: MORPH_OPEN (эрозия -> дилатация, убирает белый шум), MORPH_CLOSE (дилатация -> эрозия, закрывает черные дыры), MORPH_GRADIENT (разница между дилатацией и эрозией, выделяет контур).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\nkernel = np.ones((5, 5), np.uint8)\nclosing = cv2.morphologyEx(img, cv2.MORPH_CLOSE, kernel)\nopening = cv2.morphologyEx(img, cv2.MORPH_OPEN, kernel)\nprint(\"MorphologyEx:\", closing.shape, opening.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-80-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "threshold — глобальный порог. THRESH_BINARY (если > thresh, то maxval, иначе 0). THRESH_OTSU — автом...",
    "theory": "<p>threshold — глобальный порог. THRESH_BINARY (если > thresh, то maxval, иначе 0). THRESH_OTSU — автоматический поиск оптимального порога по бимодальной гистограмме. adaptiveThreshold — локальный порог (для неравномерного освещения).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\n_, thresh1 = cv2.threshold(img, 127, 255, cv2.THRESH_BINARY)\n_, thresh2 = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)\nprint(\"Thresholded shapes:\", thresh1.shape, thresh2.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-81-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "calcHist — вычисление гистограммы цвета/интенсивности. Аргументы: изображения, каналы, маска, кол-во...",
    "theory": "<p>calcHist — вычисление гистограммы цвета/интенсивности. Аргументы: изображения, каналы, маска, кол-во корзин (histSize), диапазоны. Для анализа экспозиции и поиска похожих изображений (compareHist).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100, 3), dtype=np.uint8)\nhist = cv2.calcHist([img], [0], None, [256], [0, 256])\nprint(\"calcHist shape:\", hist.shape)\n# cv2.normalize(hist, hist, 0, 255, cv2.NORM_MINMAX)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-82-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "equalizeHist — глобальное выравнивание гистограммы (повышает контраст, но может пересветить). CLAHE ...",
    "theory": "<p>equalizeHist — глобальное выравнивание гистограммы (повышает контраст, но может пересветить). CLAHE (Contrast Limited Adaptive Histogram Equalization) — локальное выравнивание по блокам, предотвращает усиление шума.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d6/dc7/group__imgproc__hist.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\ngray = np.random.randint(0, 256, (50, 50), dtype=np.uint8)\neq = cv2.equalizeHist(gray)\nclahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8,8))\nclahe_img = clahe.apply(gray)\nprint(\"Equalize:\", eq.shape, \"CLAHE:\", clahe_img.shape)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-83-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "matchTemplate — поиск точного фрагмента на изображении. Двигает шаблон скользящим окном и считает ме...",
    "theory": "<p>matchTemplate — поиск точного фрагмента на изображении. Двигает шаблон скользящим окном и считает метрику (TM_SQDIFF, TM_CCORR_NORMED, TM_CCOEFF_NORMED). minMaxLoc находит координаты экстремумов результатов. Не устойчив к масштабу и повороту.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/df/dfb/group__imgproc__object.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100), dtype=np.uint8)\ntemplate = img[20:40, 20:40]\nres = cv2.matchTemplate(img, template, cv2.TM_CCOEFF_NORMED)\nmin_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)\nprint(\"Best match at:\", max_loc, \"val:\", round(max_val, 2))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-84-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "cornerHarris — детектор углов Харриса. Работает с float32. Результат — карта уверенности, где углы и...",
    "theory": "<p>cornerHarris — детектор углов Харриса. Работает с float32. Результат — карта уверенности, где углы имеют большие значения. Устойчив к повороту, но НЕ устойчив к масштабу.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\ngray = np.float32(np.random.randint(0, 256, (50, 50), dtype=np.uint8))\ndst = cv2.cornerHarris(gray, 2, 3, 0.04)\nprint(\"cornerHarris:\", dst.shape)\n# result[dst > 0.01 * dst.max()] = [0, 0, 255]",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-85-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# net = ",
    "shortDesc": "blobFromImage — предобработка изображения для сети (масштабирование, ресайз, swapRB=True (BGR->RGB))...",
    "theory": "<p>blobFromImage — предобработка изображения для сети (масштабирование, ресайз, swapRB=True (BGR->RGB)). Метод forward(out_names) возвращает выходы конкретных слоёв (например, слоёв детекции YOLO).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# net = cv2.dnn.readNetFromDarknet(\"yolov3.cfg\", \"yolov3.weights\")\n# blob = cv2.dnn.blobFromImage(img, 1/255.0, (416, 416), swapRB=True, crop=False)\n# net.setInput(blob)\n# out_names = net.getUnconnectedOutLayersNames()\n# outs = net.forward(out_names)\nprint(\"dnn: blobFromImage, setInput, forward, getUnconnectedOutLayersNames\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-net-e-86-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# cap = ",
    "shortDesc": "cap.get(propId) и cap.set(propId, value) — доступ к метаданным видео и настройкам камеры. Можно меня...",
    "theory": "<p>cap.get(propId) и cap.set(propId, value) — доступ к метаданным видео и настройкам камеры. Можно менять разрешение, перематывать (POS_MSEC, POS_FRAMES), узнавать общее число кадров (FRAME_COUNT).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/d15/group__videoio__flags__base.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# cap = cv2.VideoCapture(0)  # или \"video.mp4\"\n# width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))\n# height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))\n# fps = cap.get(cv2.CAP_PROP_FPS)\n# cap.set(cv2.CAP_PROP_POS_MSEC, 5000) # перемотка на 5с\nprint(\"VideoCapture get/set properties: PROP_FRAME_WIDTH, PROP_FPS, PROP_POS_FRAMES\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-cap-e-87-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# fourcc",
    "shortDesc": "VideoWriter_fourcc — кодек (в Windows часто *\\\"DIVX\\\" -> .avi, *\\\"mp4v\\\" -> .mp4). VideoWriter(filen...",
    "theory": "<p>VideoWriter_fourcc — кодек (в Windows часто *\\\"DIVX\\\" -> .avi, *\\\"mp4v\\\" -> .mp4). VideoWriter(filename, fourcc, fps, (width, height)). Для сохранения обработанных кадров в видеофайл.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dd/d9e/classcv_1_1VideoWriter.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# fourcc = cv2.VideoWriter_fourcc(*\"mp4v\")\n# out = cv2.VideoWriter(\"output.mp4\", fourcc, 30.0, (640, 480))\n# out.write(frame)\n# out.release()\nprint(\"VideoWriter: cv2.VideoWriter_fourcc(*XVID), write, release\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-fourcc-e-88-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "HoughLinesP — вероятностное преобразование Хафа для линий. rho — точность в пикселях. theta — углова...",
    "theory": "<p>HoughLinesP — вероятностное преобразование Хафа для линий. rho — точность в пикселях. theta — угловая точность. threshold — порог голосов. minLineLength, maxLineGap. Для детекции дорожной разметки, границ. HoughLines — классический (бесконечные линии).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\ngray = np.zeros((100, 100), dtype=np.uint8)\ncv2.line(gray, (10, 50), (90, 50), 255, 2)\nedges = cv2.Canny(gray, 50, 150)\nlines = cv2.HoughLinesP(edges, 1, np.pi/180, threshold=20, minLineLength=20, maxLineGap=5)\nprint(\"HoughLinesP: найдено\", len(lines) if lines is not None else 0, \"линий\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-89-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\ngray = n",
    "shortDesc": "HoughCircles — преобразование Хафа для окружностей. dp — разрешение аккумулятора. minDist — мин. рас...",
    "theory": "<p>HoughCircles — преобразование Хафа для окружностей. dp — разрешение аккумулятора. minDist — мин. расстояние между центрами. param1, param2 — пороги Canny и аккумулятора. Для детекции монет, глаз, круглых объектов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dd/d1a/group__imgproc__feature.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\ngray = np.zeros((100, 100), dtype=np.uint8)\ncv2.circle(gray, (50, 50), 20, 255, 2)\ncircles = cv2.HoughCircles(gray, cv2.HOUGH_GRADIENT, dp=1, minDist=30, param1=50, param2=15, minRadius=10, maxRadius=30)\nprint(\"HoughCircles:\", \"найдено\" if circles is not None else \"не найдено\", \"окружностей\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-ngray-n-e-90-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Perspe",
    "shortDesc": "getPerspectiveTransform(src, dst) — матрица 3×3 из 4 пар точек. warpPerspective(img, M, size) — прим...",
    "theory": "<p>getPerspectiveTransform(src, dst) — матрица 3×3 из 4 пар точек. warpPerspective(img, M, size) — применяет. Для коррекции перспективы (документы, дорожные знаки). getAffineTransform — для 3 точек (без перспективы).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# Perspective Transform: 4 точки -> 4 точки\nsrc = np.float32([[0,0],[100,0],[100,100],[0,100]])\ndst = np.float32([[10,10],[90,5],[85,95],[15,90]])\nM = cv2.getPerspectiveTransform(src, dst)\nprint(\"perspective matrix shape:\", M.shape)\n# result = cv2.warpPerspective(img, M, (width, height))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-perspe-e-91-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Affine",
    "shortDesc": "getRotationMatrix2D(center, angle, scale) — матрица 2×3 для поворота. warpAffine(img, M, size) — при...",
    "theory": "<p>getRotationMatrix2D(center, angle, scale) — матрица 2×3 для поворота. warpAffine(img, M, size) — применяет аффинное преобразование. Для поворота, сдвига, масштабирования изображений. Аугментация данных.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# Affine Transform: масштаб + поворот + сдвиг\ncenter = (50, 50)\nangle = 45\nscale = 1.0\nM = cv2.getRotationMatrix2D(center, angle, scale)\nprint(\"rotation matrix:\", M.shape)\n# result = cv2.warpAffine(img, M, (w, h))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-affine-e-92-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg1 = n",
    "shortDesc": "add(a, b) — насыщающее сложение (макс 255). subtract — вычитание. addWeighted(a, alpha, b, beta, gam...",
    "theory": "<p>add(a, b) — насыщающее сложение (макс 255). subtract — вычитание. addWeighted(a, alpha, b, beta, gamma) — взвешенная сумма (бленд). Отличие от a+b: numpy обрезает по модулю 256, cv2.add насыщает.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg1 = np.zeros((50,50,3), dtype=np.uint8); img1[:] = 100\nimg2 = np.zeros((50,50,3), dtype=np.uint8); img2[:] = 200\nresult = cv2.add(img1, img2)\nprint(\"add (saturated):\", result[0,0])\nresult2 = cv2.addWeighted(img1, 0.7, img2, 0.3, 0)\nprint(\"addWeighted:\", result2[0,0])",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg1-n-e-93-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "bitwise_and/or/xor/not — побитовые операции. mask — маска (где 0 — не обрабатывать). Для наложения л...",
    "theory": "<p>bitwise_and/or/xor/not — побитовые операции. mask — маска (где 0 — не обрабатывать). Для наложения логотипов, ROI (Region of Interest), сложных масок. Типичный паттерн: создать маску → bitwise_and с изображением.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.zeros((50,50), dtype=np.uint8); img[10:40, 10:40] = 255\nmask = np.zeros_like(img); mask[20:30, 20:30] = 255\nresult_and = cv2.bitwise_and(img, img, mask=mask)\nresult_or = cv2.bitwise_or(img, mask)\nresult_not = cv2.bitwise_not(img)\nprint(\"and sum:\", result_and.sum(), \"or sum:\", result_or.sum())",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-94-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\nimg = np",
    "shortDesc": "inRange(src, lower, upper) — бинарная маска: 255 где значения в диапазоне. Для цветовой сегментации ...",
    "theory": "<p>inRange(src, lower, upper) — бинарная маска: 255 где значения в диапазоне. Для цветовой сегментации в HSV. H: 0-180 (в OpenCV!), S: 0-255, V: 0-255. Красный: H=0-10 или 170-180. Синий: H=100-130.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/d1b/group__imgproc__misc.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\nimg = np.random.randint(0, 256, (100, 100, 3), dtype=np.uint8)\nhsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)\n# Пример: выделить красный цвет\nlower = np.array([0, 120, 70])\nupper = np.array([10, 255, 255])\nmask = cv2.inRange(hsv, lower, upper)\nprint(\"inRange mask shape:\", mask.shape)\nprint(\"pixels in range:\", mask.sum() // 255)",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-nimg-np-e-95-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Каскад",
    "shortDesc": "CascadeClassifier — классический детектор объектов (лица, глаза). detectMultiScale(gray, scaleFactor...",
    "theory": "<p>CascadeClassifier — классический детектор объектов (лица, глаза). detectMultiScale(gray, scaleFactor, minNeighbors). scaleFactor=1.1 — масштаб пирамиды. minNeighbors=5 — уверенность. cv2.data.haarcascades — путь к XML-файлам. Быстрый, но менее точный чем DNN.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-e-96-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# Каскад Хаара для детекции лиц:\n# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + \"haarcascade_frontalface_default.xml\")\n# gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\n# faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))\n# for (x, y, w, h) in faces:\n#     cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)\nprint(\"CascadeClassifier: haarcascade для лиц, глаз, тела\")\nprint(\"detectMultiScale: scaleFactor, minNeighbors\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-e-96-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Backgr",
    "shortDesc": "createBackgroundSubtractorMOG2/KNN — выделение переднего плана (движущихся объектов) из видео. apply...",
    "theory": "<p>createBackgroundSubtractorMOG2/KNN — выделение переднего плана (движущихся объектов) из видео. apply(frame) → маска. history — число кадров для модели фона. Для видеонаблюдения, трекинга движения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/dc/d6b/group__video__track.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# Background Subtraction (фоновое вычитание)\n# fgbg = cv2.createBackgroundSubtractorMOG2(history=500, varThreshold=16)\n# fgbg = cv2.createBackgroundSubtractorKNN()\n# while cap.isOpened():\n#     ret, frame = cap.read()\n#     fgmask = fgbg.apply(frame)\n#     # fgmask — бинарная маска переднего плана\nprint(\"BackgroundSubtractorMOG2: history, varThreshold\")\nprint(\"BackgroundSubtractorKNN: альтернатива\")",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-backgr-e-97-code"
      }
    ]
  },
  {
    "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98",
    "library": "OpenCV",
    "title": "import numpy as np\\nimport cv2\\n# Contou",
    "shortDesc": "contourArea — площадь контура. arcLength — периметр (closed=True). convexHull — выпуклая оболочка. m...",
    "theory": "<p>contourArea — площадь контура. arcLength — периметр (closed=True). convexHull — выпуклая оболочка. moments — моменты (m10/m00, m01/m00 — центр масс). boundingRect — вписанный прямоугольник. minEnclosingCircle — вписанная окружность. approxPolyDP — аппроксимация полигоном.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d3/dc0/group__imgproc__shape.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\nimport cv2\n# Contour analysis: площадь, периметр, выпуклая оболочка\nbinary = np.zeros((100, 100), dtype=np.uint8)\ncv2.circle(binary, (50, 50), 30, 255, -1)\ncontours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)\nc = contours[0]\nprint(\"area:\", cv2.contourArea(c))\nprint(\"perimeter:\", round(cv2.arcLength(c, True), 2))\nhull = cv2.convexHull(c)\nprint(\"convexHull points:\", len(hull))\nM = cv2.moments(c)\nprint(\"center:\", int(M[\"m10\"]/M[\"m00\"]), int(M[\"m01\"]/M[\"m00\"]))",
        "solution": "",
        "hints": [],
        "id": "opencv-import-numpy-as-np-nimport-cv2-n-contou-e-98-code"
      }
    ]
  },
  {
    "id": "opencv-core-core-functionality-e-99",
    "library": "OpenCV",
    "title": "core — Core functionality",
    "shortDesc": "Ядро OpenCV: базовые структуры данных (Mat, Scalar, Point, Rect, Size), операции с матрицами и масси...",
    "theory": "<p>Ядро OpenCV: базовые структуры данных (Mat, Scalar, Point, Rect, Size), операции с матрицами и массивами, типы данных, управление памятью, XML/YAML I/O, оптимизация (SSE, OpenCL). Здесь же — рисование примитивов низкого уровня и утилиты. Почти все остальные модули опираются на core. Новичку важно: изображение в OpenCV — это Mat (в Python это ndarray NumPy); координаты и размеры задаются через кортежи (x, y) или (width, height).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-core-core-functionality-e-99-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/db/dda/group__core.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(core — Core functionality)",
        "solution": "",
        "hints": [],
        "id": "opencv-core-core-functionality-e-99-code"
      }
    ]
  },
  {
    "id": "opencv-imgproc-image-processing-e-100",
    "library": "OpenCV",
    "title": "imgproc — Image Processing",
    "shortDesc": "Обработка изображений: фильтры (размытие, морфология, производные), геометрические преобразования (r...",
    "theory": "<p>Обработка изображений: фильтры (размытие, морфология, производные), геометрические преобразования (resize, warp, rotate), цветовые пространства (cvtColor), пороговая обработка (threshold, adaptiveThreshold), контуры (findContours, drawContours), гистограммы, сегментация. Это основной модуль для предобработки кадров перед детекцией или классификацией. Функции: GaussianBlur, Canny, Sobel, morphologyEx, getStructuringElement и многие другие.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-imgproc-image-processing-e-100-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/dbd/group__imgproc.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(imgproc — Image Processing)",
        "solution": "",
        "hints": [],
        "id": "opencv-imgproc-image-processing-e-100-code"
      }
    ]
  },
  {
    "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101",
    "library": "OpenCV",
    "title": "imgcodecs — Image file reading and writi",
    "shortDesc": "Чтение и запись изображений в файлы. Функции: imread() — загрузка из файла (поддержка JPEG, PNG, BMP...",
    "theory": "<p>Чтение и запись изображений в файлы. Функции: imread() — загрузка из файла (поддержка JPEG, PNG, BMP, TIFF и др.); imwrite() — сохранение; imdecode()/imencode() — работа с памятью (буфер байтов). Параметры: флаги загрузки (IMREAD_COLOR, IMREAD_GRAYSCALE, IMREAD_UNCHANGED), параметры сохранения (качество JPEG, сжатие PNG). В Python доступны как cv2.imread, cv2.imwrite.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-imgcodecs-image-file-reading-and-writi-e-101-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(imgcodecs — Image file reading and writing)",
        "solution": "",
        "hints": [],
        "id": "opencv-imgcodecs-image-file-reading-and-writi-e-101-code"
      }
    ]
  },
  {
    "id": "opencv-videoio-video-i-o-e-102",
    "library": "OpenCV",
    "title": "videoio — Video I/O",
    "shortDesc": "Захват и запись видео. VideoCapture — открытие видеофайла или камеры (индекс 0 — веб-камера), read()...",
    "theory": "<p>Захват и запись видео. VideoCapture — открытие видеофайла или камеры (индекс 0 — веб-камера), read() — следующий кадр, get()/set() — свойства (ширина, высота, FPS). VideoWriter — запись видео (кодек, размер, FPS). Удобно для обработки видео по кадрам и сохранения результата. В коде: cap = cv2.VideoCapture(0); ret, frame = cap.read(); cap.release().</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-videoio-video-i-o-e-102-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d8/dfe/group__videoio.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(videoio — Video I/O)",
        "solution": "",
        "hints": [],
        "id": "opencv-videoio-video-i-o-e-102-code"
      }
    ]
  },
  {
    "id": "opencv-highgui-high-level-gui-e-103",
    "library": "OpenCV",
    "title": "highgui — High-level GUI",
    "shortDesc": "Высокоуровневый GUI: окна, отображение изображений, обработка мыши и клавиатуры. Функции: namedWindo...",
    "theory": "<p>Высокоуровневый GUI: окна, отображение изображений, обработка мыши и клавиатуры. Функции: namedWindow(), imshow(), waitKey(), destroyAllWindows(), createTrackbar() (слайдеры для параметров). Основа для интерактивных демо и отладки. В средах без дисплея (сервер, SSH) highgui может быть недоступен — тогда используют только imwrite и просмотр файлов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-highgui-high-level-gui-e-103-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/d9e/group__highgui.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(highgui — High-level GUI)",
        "solution": "",
        "hints": [],
        "id": "opencv-highgui-high-level-gui-e-103-code"
      }
    ]
  },
  {
    "id": "opencv-video-video-analysis-e-104",
    "library": "OpenCV",
    "title": "video — Video Analysis",
    "shortDesc": "Анализ видео: оценка движения (optical flow — calcOpticalFlowFarneback, calcOpticalFlowPyrLK), треки...",
    "theory": "<p>Анализ видео: оценка движения (optical flow — calcOpticalFlowFarneback, calcOpticalFlowPyrLK), трекинг объектов (TrackerKCF, TrackerMOSSE и др.), фоновое вычитание (BackgroundSubtractorMOG2, BackgroundSubtractorKNN). Используется для отслеживания объектов между кадрами и выделения переднего плана. Документация по каждому алгоритму: параметры, когда какой выбирать.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-video-video-analysis-e-104-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d7/d9b/group__video.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(video — Video Analysis)",
        "solution": "",
        "hints": [],
        "id": "opencv-video-video-analysis-e-104-code"
      }
    ]
  },
  {
    "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105",
    "library": "OpenCV",
    "title": "calib3d — Camera Calibration and 3D Reco",
    "shortDesc": "Калибровка камеры и 3D-реконструкция. Калибровка: findChessboardCorners(), calibrateCamera() — получ...",
    "theory": "<p>Калибровка камеры и 3D-реконструкция. Калибровка: findChessboardCorners(), calibrateCamera() — получение матрицы камеры и коэффициентов искажений; undistort() — исправление искажений. Стереозрение: stereoCalibrate(), stereoRectify(), reprojectImageTo3D(). Оценка позы: solvePnP(), solvePnPRansac(). Нужно для AR, робототехники, измерений по изображению. Требует калибровочный паттерн (шахматная доска).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-calib3d-camera-calibration-and-3d-reco-e-105-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d9/d0c/group__calib3d.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(calib3d — Camera Calibration and 3D Reconstruction)",
        "solution": "",
        "hints": [],
        "id": "opencv-calib3d-camera-calibration-and-3d-reco-e-105-code"
      }
    ]
  },
  {
    "id": "opencv-features2d-2d-features-framework-e-106",
    "library": "OpenCV",
    "title": "features2d — 2D Features Framework",
    "shortDesc": "Детекция и описание 2D-признаков: ключевые точки и дескрипторы. Детекторы: SIFT, ORB, BRISK, AKAZE и...",
    "theory": "<p>Детекция и описание 2D-признаков: ключевые точки и дескрипторы. Детекторы: SIFT, ORB, BRISK, AKAZE и др. (в Python: cv2.SIFT_create(), cv2.ORB_create()). Описание: compute() — дескрипторы по ключевым точкам. Сопоставление: BFMatcher, FlannBasedMatcher; match(), knnMatch(). Используется для стыковки изображений (stitching), навигации по картинке, трекинга по признакам. drawKeypoints(), drawMatches() — визуализация.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-features2d-2d-features-framework-e-106-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d0/d13/group__features2d.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(features2d — 2D Features Framework)",
        "solution": "",
        "hints": [],
        "id": "opencv-features2d-2d-features-framework-e-106-code"
      }
    ]
  },
  {
    "id": "opencv-objdetect-object-detection-e-107",
    "library": "OpenCV",
    "title": "objdetect — Object Detection",
    "shortDesc": "Детекция объектов: каскады Хаара (CascadeClassifier — лица, глаза), HOG + SVM, детекция по шаблону. ...",
    "theory": "<p>Детекция объектов: каскады Хаара (CascadeClassifier — лица, глаза), HOG + SVM, детекция по шаблону. Функции: detectMultiScale() — поиск объектов заданного класса (лицо и т.д.) в разных масштабах. Рисование: rectangle() по найденным боксам. Классические методы; для современной детекции (YOLO, Faster R-CNN) чаще используют модуль dnn с загруженными моделями. В OpenCV 4.x сюда перенесена часть функциональности aruco.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-objdetect-object-detection-e-107-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dc6/group__objdetect.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(objdetect — Object Detection)",
        "solution": "",
        "hints": [],
        "id": "opencv-objdetect-object-detection-e-107-code"
      }
    ]
  },
  {
    "id": "opencv-dnn-deep-neural-network-module-e-108",
    "library": "OpenCV",
    "title": "dnn — Deep Neural Network module",
    "shortDesc": "Загрузка и запуск нейросетей из внешних фреймворков. Backends: OpenCV, OpenVINO, CUDA, TensorRT и др...",
    "theory": "<p>Загрузка и запуск нейросетей из внешних фреймворков. Backends: OpenCV, OpenVINO, CUDA, TensorRT и др. Функции: readNetFromCaffe(), readNetFromTensorflow(), readNetFromONNX(), readNet() — загрузка модели; setInput(), forward() — прямой проход. Удобно для быстрого инференса детекторов (YOLO, SSD) и классификаторов без PyTorch/TensorFlow в рантайме. Документация: поддерживаемые форматы, примеры для разных моделей.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-dnn-deep-neural-network-module-e-108-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(dnn — Deep Neural Network module)",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-deep-neural-network-module-e-108-code"
      }
    ]
  },
  {
    "id": "opencv-ml-machine-learning-e-109",
    "library": "OpenCV",
    "title": "ml — Machine Learning",
    "shortDesc": "Классическое машинное обучение внутри OpenCV: SVM (cv2.ml.SVM_create()), KNN, деревья решений, бусти...",
    "theory": "<p>Классическое машинное обучение внутри OpenCV: SVM (cv2.ml.SVM_create()), KNN, деревья решений, бустинг, нейросети (старый API). Методы: train(), predict(), predictProb(). Используется когда нужна простая модель без scikit-learn/PyTorch (например встроенная в C++ приложение). В Python чаще используют sklearn; ml полезен для совместимости с C++ кодом и готовых примеров OpenCV.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-ml-machine-learning-e-109-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__ml.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(ml — Machine Learning)",
        "solution": "",
        "hints": [],
        "id": "opencv-ml-machine-learning-e-109-code"
      }
    ]
  },
  {
    "id": "opencv-flann-clustering-and-search-in-multi-d-e-110",
    "library": "OpenCV",
    "title": "flann — Clustering and Search in Multi-D",
    "shortDesc": "Быстрый поиск ближайших соседей в многомерных пространствах. FLANN (Fast Library for Approximate Nea...",
    "theory": "<p>Быстрый поиск ближайших соседей в многомерных пространствах. FLANN (Fast Library for Approximate Nearest Neighbors): построение индекса по набору векторов (дескрипторов), поиск k ближайших или радиуса. Используется внутри features2d для матчинга дескрипторов и в любых задачах поиска по множеству точек. Index_create(), index.knnSearch(), index.radiusSearch().</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-flann-clustering-and-search-in-multi-d-e-110-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d2/d75/group__flann.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(flann — Clustering and Search in Multi-Dimensional Spaces)",
        "solution": "",
        "hints": [],
        "id": "opencv-flann-clustering-and-search-in-multi-d-e-110-code"
      }
    ]
  },
  {
    "id": "opencv-photo-computational-photography-e-111",
    "library": "OpenCV",
    "title": "photo — Computational Photography",
    "shortDesc": "Вычислительная фотография: устранение шума (fastNlMeansDenoising, denoise_TVL1), inpainting (восстан...",
    "theory": "<p>Вычислительная фотография: устранение шума (fastNlMeansDenoising, denoise_TVL1), inpainting (восстановление повреждённых областей), HDR (mergeExposures), декомпозиция (seamlessClone). Удобно для улучшения снимков и ретуши. Функции работают с целым изображением или маской.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-photo-computational-photography-e-111-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__photo.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(photo — Computational Photography)",
        "solution": "",
        "hints": [],
        "id": "opencv-photo-computational-photography-e-111-code"
      }
    ]
  },
  {
    "id": "opencv-stitching-images-stitching-e-112",
    "library": "OpenCV",
    "title": "stitching — Images stitching",
    "shortDesc": "Сшивание изображений в панораму: Stitcher создаёт панораму из нескольких перекрывающихся кадров. Вну...",
    "theory": "<p>Сшивание изображений в панораму: Stitcher создаёт панораму из нескольких перекрывающихся кадров. Внутри: детекция признаков, матчинг, оценка гомографии, блендинг. Используется для панорамных снимков и склейки видео. Stitcher.create(), stitcher.stitch(images). Параметры режима (панорама, сканер и т.д.).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-stitching-images-stitching-e-112-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d8/d19/group__stitching.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(stitching — Images stitching)",
        "solution": "",
        "hints": [],
        "id": "opencv-stitching-images-stitching-e-112-code"
      }
    ]
  },
  {
    "id": "opencv-gapi-graph-api-e-113",
    "library": "OpenCV",
    "title": "gapi — Graph API",
    "shortDesc": "Graph API: построение графа операций обработки изображений с автоматической оптимизацией и выполнени...",
    "theory": "<p>Graph API: построение графа операций обработки изображений с автоматической оптимизацией и выполнением на CPU/GPU. Позволяет описать пайплайн один раз и выполнять его эффективно. Используется в продвинутых сценариях и встроенных системах. В Python доступность ограничена; в основном C++ API.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-gapi-graph-api-e-113-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__gapi.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(gapi — Graph API)",
        "solution": "",
        "hints": [],
        "id": "opencv-gapi-graph-api-e-113-code"
      }
    ]
  },
  {
    "id": "opencv-alphamat-alpha-matting-e-114",
    "library": "OpenCV",
    "title": "alphamat — Alpha Matting",
    "shortDesc": "Выделение полупрозрачных границ объекта (alpha matting): по тримапу и изображению уточняется альфа-к...",
    "theory": "<p>Выделение полупрозрачных границ объекта (alpha matting): по тримапу и изображению уточняется альфа-канал на границах. Нужно для качественного вырезания объектов и композитинга.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-alphamat-alpha-matting-e-114-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__alphamat.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(alphamat — Alpha Matting)",
        "solution": "",
        "hints": [],
        "id": "opencv-alphamat-alpha-matting-e-114-code"
      }
    ]
  },
  {
    "id": "opencv-aruco-aruco-markers-e-115",
    "library": "OpenCV",
    "title": "aruco — ArUco markers",
    "shortDesc": "Маркеры ArUco для дополненной реальности и калибровки: детекция маркеров, оценка позы. В OpenCV 4.x ...",
    "theory": "<p>Маркеры ArUco для дополненной реальности и калибровки: детекция маркеров, оценка позы. В OpenCV 4.x часть функциональности перенесена в objdetect. Используется для AR, робототехники, калибровки камер.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-aruco-aruco-markers-e-115-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__aruco.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(aruco — ArUco markers)",
        "solution": "",
        "hints": [],
        "id": "opencv-aruco-aruco-markers-e-115-code"
      }
    ]
  },
  {
    "id": "opencv-bgsegm-background-foreground-segmentat-e-116",
    "library": "OpenCV",
    "title": "bgsegm — Background-Foreground Segmentat",
    "shortDesc": "Улучшенные методы выделения переднего плана: дополнительные алгоритмы фонового вычитания (сверх MOG2...",
    "theory": "<p>Улучшенные методы выделения переднего плана: дополнительные алгоритмы фонового вычитания (сверх MOG2/KNN из video). Для видеонаблюдения и сегментации движущихся объектов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-bgsegm-background-foreground-segmentat-e-116-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__bgsegm.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(bgsegm — Background-Foreground Segmentation)",
        "solution": "",
        "hints": [],
        "id": "opencv-bgsegm-background-foreground-segmentat-e-116-code"
      }
    ]
  },
  {
    "id": "opencv-bioinspired-biologically-inspired-visi-e-117",
    "library": "OpenCV",
    "title": "bioinspired — Biologically inspired visi",
    "shortDesc": "Биологически мотивированные модели зрения: сетчатка, адаптация к освещению. Исследовательские и спец...",
    "theory": "<p>Биологически мотивированные модели зрения: сетчатка, адаптация к освещению. Исследовательские и специализированные задачи.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-bioinspired-biologically-inspired-visi-e-117-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__bioinspired.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(bioinspired — Biologically inspired vision)",
        "solution": "",
        "hints": [],
        "id": "opencv-bioinspired-biologically-inspired-visi-e-117-code"
      }
    ]
  },
  {
    "id": "opencv-cuda-cuda-e-118",
    "library": "OpenCV",
    "title": "cuda* — CUDA-ускоренные модули",
    "shortDesc": "Модули с суффиксом cuda: cudaarithm (матричные операции), cudabgsegm (фоновое вычитание), cudacodec ...",
    "theory": "<p>Модули с суффиксом cuda: cudaarithm (матричные операции), cudabgsegm (фоновое вычитание), cudacodec (кодеки), cudafeatures2d (признаки), cudafilters (фильтры), cudaimgproc (обработка), cudaobjdetect, cudaoptflow (optical flow), cudastereo (стерео), cudawarping (геометрия), cudev (устройство). Требуют сборку OpenCV с CUDA и совместимый GPU. Значительно ускоряют пайплайн на NVIDIA.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-cuda-cuda-e-118-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(cuda* — CUDA-ускоренные модули)",
        "solution": "",
        "hints": [],
        "id": "opencv-cuda-cuda-e-118-code"
      }
    ]
  },
  {
    "id": "opencv-dnn-objdetect-dnn-superres-e-119",
    "library": "OpenCV",
    "title": "dnn_objdetect / dnn_superres",
    "shortDesc": "dnn_objdetect — готовые DNN-модели для детекции объектов (в т.ч. специфичные форматы). dnn_superres ...",
    "theory": "<p>dnn_objdetect — готовые DNN-модели для детекции объектов (в т.ч. специфичные форматы). dnn_superres — супер-разрешение на основе нейросетей (увеличение разрешения изображения). Требуют загрузки весов; удобны для быстрого прототипа.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-dnn-objdetect-dnn-superres-e-119-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d2/d58/group__dnn.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(dnn_objdetect / dnn_superres)",
        "solution": "",
        "hints": [],
        "id": "opencv-dnn-objdetect-dnn-superres-e-119-code"
      }
    ]
  },
  {
    "id": "opencv-face-face-analysis-e-120",
    "library": "OpenCV",
    "title": "face — Face Analysis",
    "shortDesc": "Анализ лиц: распознавание (LBPH, Eigenfaces, Fisherfaces), детекция ориентира (landmarks). Функции д...",
    "theory": "<p>Анализ лиц: распознавание (LBPH, Eigenfaces, Fisherfaces), детекция ориентира (landmarks). Функции для построения пайплайна распознавания лиц. Дополняет objdetect (детекция лица) и dnn (современные сети).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-face-face-analysis-e-120-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__face.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(face — Face Analysis)",
        "solution": "",
        "hints": [],
        "id": "opencv-face-face-analysis-e-120-code"
      }
    ]
  },
  {
    "id": "opencv-freetype-drawing-utf-8-strings-e-121",
    "library": "OpenCV",
    "title": "freetype — Drawing UTF-8 strings",
    "shortDesc": "Отрисовка текста в UTF-8 с помощью FreeType/Harfbuzz: поддержка разных языков и шрифтов. Расширяет б...",
    "theory": "<p>Отрисовка текста в UTF-8 с помощью FreeType/Harfbuzz: поддержка разных языков и шрифтов. Расширяет базовый putText для нелатинских символов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-freetype-drawing-utf-8-strings-e-121-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__freetype.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(freetype — Drawing UTF-8 strings)",
        "solution": "",
        "hints": [],
        "id": "opencv-freetype-drawing-utf-8-strings-e-121-code"
      }
    ]
  },
  {
    "id": "opencv-img-hash-image-hashing-e-122",
    "library": "OpenCV",
    "title": "img_hash — Image hashing",
    "shortDesc": "Алгоритмы хеширования изображений (pHash, aHash и др.): компактное представление для быстрого сравне...",
    "theory": "<p>Алгоритмы хеширования изображений (pHash, aHash и др.): компактное представление для быстрого сравнения «похожести» картинок. Поиск дубликатов, похожих изображений.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-img-hash-image-hashing-e-122-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__img__hash.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(img_hash — Image hashing)",
        "solution": "",
        "hints": [],
        "id": "opencv-img-hash-image-hashing-e-122-code"
      }
    ]
  },
  {
    "id": "opencv-intensity-transform-intensity-transfor-e-123",
    "library": "OpenCV",
    "title": "intensity_transform — Intensity transfor",
    "shortDesc": "Преобразования яркости/контраста: коррекция гистограммы, адаптация контраста. Удобно для предобработ...",
    "theory": "<p>Преобразования яркости/контраста: коррекция гистограммы, адаптация контраста. Удобно для предобработки перед детекцией или для улучшения визуализации.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-intensity-transform-intensity-transfor-e-123-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__intensity__transform.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(intensity_transform — Intensity transformation)",
        "solution": "",
        "hints": [],
        "id": "opencv-intensity-transform-intensity-transfor-e-123-code"
      }
    ]
  },
  {
    "id": "opencv-optflow-optical-flow-algorithms-e-124",
    "library": "OpenCV",
    "title": "optflow — Optical Flow Algorithms",
    "shortDesc": "Расширенные алгоритмы оптического потока (помимо video): плотный и разрежённый поток, различные мето...",
    "theory": "<p>Расширенные алгоритмы оптического потока (помимо video): плотный и разрежённый поток, различные методы. Для трекинга и оценки движения между кадрами.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-optflow-optical-flow-algorithms-e-124-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__optflow.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(optflow — Optical Flow Algorithms)",
        "solution": "",
        "hints": [],
        "id": "opencv-optflow-optical-flow-algorithms-e-124-code"
      }
    ]
  },
  {
    "id": "opencv-plot-plot-for-mat-data-e-125",
    "library": "OpenCV",
    "title": "plot — Plot for Mat data",
    "shortDesc": "Визуализация данных Mat: построение графиков (гистограммы, кривые) в окне OpenCV. Альтернатива matpl...",
    "theory": "<p>Визуализация данных Mat: построение графиков (гистограммы, кривые) в окне OpenCV. Альтернатива matplotlib для простых графиков внутри OpenCV-приложения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-plot-plot-for-mat-data-e-125-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__plot.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(plot — Plot for Mat data)",
        "solution": "",
        "hints": [],
        "id": "opencv-plot-plot-for-mat-data-e-125-code"
      }
    ]
  },
  {
    "id": "opencv-quality-image-quality-analysis-iqa-e-126",
    "library": "OpenCV",
    "title": "quality — Image Quality Analysis (IQA)",
    "shortDesc": "Оценка качества изображения: метрики резкости, шума, артефактов. Полезно для автоматической оценки с...",
    "theory": "<p>Оценка качества изображения: метрики резкости, шума, артефактов. Полезно для автоматической оценки снимков и выбора лучшего кадра.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-quality-image-quality-analysis-iqa-e-126-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__quality.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(quality — Image Quality Analysis (IQA))",
        "solution": "",
        "hints": [],
        "id": "opencv-quality-image-quality-analysis-iqa-e-126-code"
      }
    ]
  },
  {
    "id": "opencv-reg-image-registration-e-127",
    "library": "OpenCV",
    "title": "reg — Image Registration",
    "shortDesc": "Регистрация изображений: выравнивание двух изображений одной сцены (сдвиг, поворот, нелинейные дефор...",
    "theory": "<p>Регистрация изображений: выравнивание двух изображений одной сцены (сдвиг, поворот, нелинейные деформации). Медицинская визуализация, мультиспектральные данные.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-reg-image-registration-e-127-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__reg.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(reg — Image Registration)",
        "solution": "",
        "hints": [],
        "id": "opencv-reg-image-registration-e-127-code"
      }
    ]
  },
  {
    "id": "opencv-rgbd-rgb-depth-processing-e-128",
    "library": "OpenCV",
    "title": "rgbd — RGB-Depth Processing",
    "shortDesc": "Обработка RGB-D камер (Kinect, RealSense и др.): работа с глубиной, выравнивание глубины и цвета, но...",
    "theory": "<p>Обработка RGB-D камер (Kinect, RealSense и др.): работа с глубиной, выравнивание глубины и цвета, нормали, сегментация по глубине.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-rgbd-rgb-depth-processing-e-128-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__rgbd.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(rgbd — RGB-Depth Processing)",
        "solution": "",
        "hints": [],
        "id": "opencv-rgbd-rgb-depth-processing-e-128-code"
      }
    ]
  },
  {
    "id": "opencv-saliency-saliency-api-e-129",
    "library": "OpenCV",
    "title": "saliency — Saliency API",
    "shortDesc": "Выделение заметных (salient) областей изображения: статическая и динамическая салиентность. Использу...",
    "theory": "<p>Выделение заметных (salient) областей изображения: статическая и динамическая салиентность. Используется для привлечения внимания модели к важным регионам.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-saliency-saliency-api-e-129-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__saliency.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(saliency — Saliency API)",
        "solution": "",
        "hints": [],
        "id": "opencv-saliency-saliency-api-e-129-code"
      }
    ]
  },
  {
    "id": "opencv-sfm-structure-from-motion-e-130",
    "library": "OpenCV",
    "title": "sfm — Structure From Motion",
    "shortDesc": "Восстановление 3D структуры и движения камеры по нескольким кадрам. Классические методы SfM; для бол...",
    "theory": "<p>Восстановление 3D структуры и движения камеры по нескольким кадрам. Классические методы SfM; для больших сцен часто используют внешние библиотеки (COLMAP и др.).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-sfm-structure-from-motion-e-130-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__sfm.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(sfm — Structure From Motion)",
        "solution": "",
        "hints": [],
        "id": "opencv-sfm-structure-from-motion-e-130-code"
      }
    ]
  },
  {
    "id": "opencv-shape-shape-distance-and-matching-e-131",
    "library": "OpenCV",
    "title": "shape — Shape Distance and Matching",
    "shortDesc": "Сравнение и сопоставление форм контуров: расстояния между формами, матчинг. Для распознавания по фор...",
    "theory": "<p>Сравнение и сопоставление форм контуров: расстояния между формами, матчинг. Для распознавания по форме объекта.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-shape-shape-distance-and-matching-e-131-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__shape.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(shape — Shape Distance and Matching)",
        "solution": "",
        "hints": [],
        "id": "opencv-shape-shape-distance-and-matching-e-131-code"
      }
    ]
  },
  {
    "id": "opencv-stereo-stereo-correspondence-e-132",
    "library": "OpenCV",
    "title": "stereo — Stereo Correspondence",
    "shortDesc": "Стереосоответствие: построение карты глубины из стереопары. Алгоритмы блочного матчинга и др. Дополн...",
    "theory": "<p>Стереосоответствие: построение карты глубины из стереопары. Алгоритмы блочного матчинга и др. Дополняет calib3d для полного стереопайплайна.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-stereo-stereo-correspondence-e-132-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__stereo.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(stereo — Stereo Correspondence)",
        "solution": "",
        "hints": [],
        "id": "opencv-stereo-stereo-correspondence-e-132-code"
      }
    ]
  },
  {
    "id": "opencv-structured-light-structured-light-api-e-133",
    "library": "OpenCV",
    "title": "structured_light — Structured Light API",
    "shortDesc": "Структурированный свет: 3D-сканирование с помощью проектора и камеры. Специализированные приложения ...",
    "theory": "<p>Структурированный свет: 3D-сканирование с помощью проектора и камеры. Специализированные приложения для реконструкции поверхности.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-structured-light-structured-light-api-e-133-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__structured__light.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(structured_light — Structured Light API)",
        "solution": "",
        "hints": [],
        "id": "opencv-structured-light-structured-light-api-e-133-code"
      }
    ]
  },
  {
    "id": "opencv-superres-super-resolution-e-134",
    "library": "OpenCV",
    "title": "superres — Super Resolution",
    "shortDesc": "Супер-разрешение классическими методами (без DNN): увеличение разрешения изображения. dnn_superres д...",
    "theory": "<p>Супер-разрешение классическими методами (без DNN): увеличение разрешения изображения. dnn_superres даёт более качественный результат при наличии модели.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-superres-super-resolution-e-134-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__superres.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(superres — Super Resolution)",
        "solution": "",
        "hints": [],
        "id": "opencv-superres-super-resolution-e-134-code"
      }
    ]
  },
  {
    "id": "opencv-surface-matching-surface-matching-e-135",
    "library": "OpenCV",
    "title": "surface_matching — Surface Matching",
    "shortDesc": "Сопоставление 3D поверхностей: обнаружение объектов по 3D модели. Для робототехники и промышленной и...",
    "theory": "<p>Сопоставление 3D поверхностей: обнаружение объектов по 3D модели. Для робототехники и промышленной инспекции.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-surface-matching-surface-matching-e-135-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__surface__matching.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(surface_matching — Surface Matching)",
        "solution": "",
        "hints": [],
        "id": "opencv-surface-matching-surface-matching-e-135-code"
      }
    ]
  },
  {
    "id": "opencv-text-scene-text-detection-and-recognit-e-136",
    "library": "OpenCV",
    "title": "text — Scene Text Detection and Recognit",
    "shortDesc": "Детекция и распознавание текста на сцене (OCR): детектор областей с текстом, распознавание символов....",
    "theory": "<p>Детекция и распознавание текста на сцене (OCR): детектор областей с текстом, распознавание символов. Классические и нейросетевые компоненты; для production часто используют Tesseract или специализированные сети.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-text-scene-text-detection-and-recognit-e-136-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__text.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(text — Scene Text Detection and Recognition)",
        "solution": "",
        "hints": [],
        "id": "opencv-text-scene-text-detection-and-recognit-e-136-code"
      }
    ]
  },
  {
    "id": "opencv-tracking-tracking-api-e-137",
    "library": "OpenCV",
    "title": "tracking — Tracking API",
    "shortDesc": "API трекинга объектов: трекеры по bounding box (KCF, CSRT, MedianFlow и др.), обновление положения о...",
    "theory": "<p>API трекинга объектов: трекеры по bounding box (KCF, CSRT, MedianFlow и др.), обновление положения объекта в следующих кадрах. Используется после детектора для стабильного слежения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-tracking-tracking-api-e-137-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__tracking.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(tracking — Tracking API)",
        "solution": "",
        "hints": [],
        "id": "opencv-tracking-tracking-api-e-137-code"
      }
    ]
  },
  {
    "id": "opencv-videostab-video-stabilization-e-138",
    "library": "OpenCV",
    "title": "videostab — Video Stabilization",
    "shortDesc": "Стабилизация видео: устранение дрожания камеры, выравнивание кадров. Улучшает качество съёмки с рук....",
    "theory": "<p>Стабилизация видео: устранение дрожания камеры, выравнивание кадров. Улучшает качество съёмки с рук.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-videostab-video-stabilization-e-138-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__videostab.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(videostab — Video Stabilization)",
        "solution": "",
        "hints": [],
        "id": "opencv-videostab-video-stabilization-e-138-code"
      }
    ]
  },
  {
    "id": "opencv-viz-3d-visualizer-e-139",
    "library": "OpenCV",
    "title": "viz — 3D Visualizer",
    "shortDesc": "3D визуализация: отображение облаков точек, координатных систем, мешей. Требует VTK. Для отладки 3D-...",
    "theory": "<p>3D визуализация: отображение облаков точек, координатных систем, мешей. Требует VTK. Для отладки 3D-реконструкции и калибровки.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-viz-3d-visualizer-e-139-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__viz.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(viz — 3D Visualizer)",
        "solution": "",
        "hints": [],
        "id": "opencv-viz-3d-visualizer-e-139-code"
      }
    ]
  },
  {
    "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140",
    "library": "OpenCV",
    "title": "wechat_qrcode — WeChat QR code detector",
    "shortDesc": "Детектор и декодер QR-кодов от WeChat: обнаружение и распознавание QR в кадре. Альтернатива встроенн...",
    "theory": "<p>Детектор и декодер QR-кодов от WeChat: обнаружение и распознавание QR в кадре. Альтернатива встроенному QR-детектору OpenCV (если доступен в сборке).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__wechat__qrcode.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(wechat_qrcode — WeChat QR code detector)",
        "solution": "",
        "hints": [],
        "id": "opencv-wechat-qrcode-wechat-qr-code-detector-e-140-code"
      }
    ]
  },
  {
    "id": "opencv-xfeatures2d-extra-2d-features-e-141",
    "library": "OpenCV",
    "title": "xfeatures2d — Extra 2D Features",
    "shortDesc": "Дополнительные 2D-признаки: SIFT, SURF (в non-free части), BRIEF, FREAK и др. Расширяет features2d; ...",
    "theory": "<p>Дополнительные 2D-признаки: SIFT, SURF (в non-free части), BRIEF, FREAK и др. Расширяет features2d; часть алгоритмов может требовать отдельной сборки (contrib).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-xfeatures2d-extra-2d-features-e-141-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__xfeatures2d.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(xfeatures2d — Extra 2D Features)",
        "solution": "",
        "hints": [],
        "id": "opencv-xfeatures2d-extra-2d-features-e-141-code"
      }
    ]
  },
  {
    "id": "opencv-ximgproc-extended-image-processing-e-142",
    "library": "OpenCV",
    "title": "ximgproc — Extended Image Processing",
    "shortDesc": "Расширенная обработка изображений: селективное размытие, детекция границ (структурированные леса), с...",
    "theory": "<p>Расширенная обработка изображений: селективное размытие, детекция границ (структурированные леса), сегментация, фильтры. Дополняет imgproc для более сложных алгоритмов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-ximgproc-extended-image-processing-e-142-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__ximgproc.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(ximgproc — Extended Image Processing)",
        "solution": "",
        "hints": [],
        "id": "opencv-ximgproc-extended-image-processing-e-142-code"
      }
    ]
  },
  {
    "id": "opencv-xphoto-additional-photo-processing-e-143",
    "library": "OpenCV",
    "title": "xphoto — Additional photo processing",
    "shortDesc": "Дополнительные алгоритмы обработки фото: коррекция баланса белого, инпейнтинг, тонирование. Расширяе...",
    "theory": "<p>Дополнительные алгоритмы обработки фото: коррекция баланса белого, инпейнтинг, тонирование. Расширяет модуль photo.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-opencv-xphoto-additional-photo-processing-e-143-code'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d1/dd9/group__xphoto.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\nprint(xphoto — Additional photo processing)",
        "solution": "",
        "hints": [],
        "id": "opencv-xphoto-additional-photo-processing-e-143-code"
      }
    ]
  },
  {
    "id": "pytorch-batch-gradient-descent-e-144",
    "library": "PyTorch",
    "title": "# Batch gradient descent — градиент по В",
    "shortDesc": "Batch (полный батч): за один вызов optimizer.step() используется вся обучающая выборка. Градиент счи...",
    "theory": "<p>Batch (полный батч): за один вызов optimizer.step() используется вся обучающая выборка. Градиент считается по всем примерам сразу — он стабильный, но один шаг очень тяжёлый по памяти и времени. Подходит только для маленьких датасетов. В коде: передаёте в model(X_full) весь X целиком.<br><br><strong>Когда использовать:</strong> маленькие данные (сотни–тысячи примеров), когда всё помещается в память. В глубоком обучении почти не используется.<br><strong>Минусы:</strong> не масштабируется; локальные минимумы застревают легче.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-batch-gradient-descent-e-144-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/optim.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Batch gradient descent — градиент по ВСЕМ данным за один шаг\nfor epoch in range(epochs):\n    optimizer.zero_grad()\n    out = model(X_full)  # весь датасет\n    loss = criterion(out, y_full)\n    loss.backward()\nprint(    optimizer.step())",
        "solution": "",
        "hints": [],
        "id": "pytorch-batch-gradient-descent-e-144-code"
      }
    ]
  },
  {
    "id": "pytorch-stochastic-gradient-descent-sgd-e-145",
    "library": "PyTorch",
    "title": "# Stochastic gradient descent (SGD) — од",
    "shortDesc": "Stochastic (стохастический): один шаг = один пример. На каждой итерации считаете loss по одному объе...",
    "theory": "<p>Stochastic (стохастический): один шаг = один пример. На каждой итерации считаете loss по одному объекту (X[i:i+1] даёт форму [1, ...]). Градиент очень шумный — это может помочь выходить из плоских минимумов, но обучение нестабильное. В чистом виде редко используют: слишком много шагов за эпоху и сильный шум.<br><br><strong>Когда использовать:</strong> онлайн-обучение, потоковые данные; иногда для мелких датасетов.<br><strong>Нюанс:</strong> X[i:i+1] важен — срез сохраняет размерность (1, features), а X[i] дала бы (features,) и сломала бы батч.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-stochastic-gradient-descent-sgd-e-145-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/generated/torch.optim.SGD.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Stochastic gradient descent (SGD) — один пример за шаг\nfor epoch in range(epochs):\n    for i in range(len(X)):\n        optimizer.zero_grad()\n        out = model(X[i:i+1])  # один пример\n        loss = criterion(out, y[i:i+1])\n        loss.backward()\nprint(        optimizer.step())",
        "solution": "",
        "hints": [],
        "id": "pytorch-stochastic-gradient-descent-sgd-e-145-code"
      }
    ]
  },
  {
    "id": "pytorch-mini-batch-gradient-descent-e-146",
    "library": "PyTorch",
    "title": "# Mini-batch gradient descent — батч за ",
    "shortDesc": "Mini-batch (мини-батч): один шаг = один батч из N примеров (типично 32, 64, 128). Баланс между стаби...",
    "theory": "<p>Mini-batch (мини-батч): один шаг = один батч из N примеров (типично 32, 64, 128). Баланс между стабильностью градиента и скоростью: градиент усредняется по батчу, шум меньше чем в SGD, память и время — меньше чем в batch. В PyTorch это стандарт: создаёте DataLoader с batch_size и shuffle=True, в цикле for x, y in loader получаете тензоры формы (batch_size, ...).<br><br><strong>Параметры DataLoader:</strong> batch_size — сколько примеров в батче; shuffle=True — перемешивать данные каждую эпоху (для обучения обязательно). num_workers — загрузка в фоне (0 = в основном процессе).<br><strong>Когда использовать:</strong> почти всегда в нейросетях; размер батча подбирают по памяти GPU и стабильности обучения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-mini-batch-gradient-descent-e-146-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Mini-batch gradient descent — батч за шаг (стандарт в PyTorch)\nloader = DataLoader(dataset, batch_size=32, shuffle=True)\nfor epoch in range(epochs):\n    for x, y in loader:  # x, y — батчи по 32 примера\n        optimizer.zero_grad()\n        out = model(x)\n        loss = criterion(out, y)\n        loss.backward()\nprint(        optimizer.step())",
        "solution": "",
        "hints": [],
        "id": "pytorch-mini-batch-gradient-descent-e-146-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-l1loss-e-147",
    "library": "PyTorch",
    "title": "nn.L1Loss()",
    "shortDesc": "Mean Absolute Error (MAE): среднее от |output − target|. Используется в регрессии, когда выбросы не ...",
    "theory": "<p>Mean Absolute Error (MAE): среднее от |output − target|. Используется в регрессии, когда выбросы не должны сильно влиять (в отличие от MSE). Вход и target — одна форма (например оба [N] или [N, 1]). Параметры: reduction=\"mean\".<br><strong>Пример:</strong> предсказание числа (цена, возраст).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-l1loss-e-147-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.L1Loss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.L1Loss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-l1loss-e-147-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-mseloss-e-148",
    "library": "PyTorch",
    "title": "nn.MSELoss()",
    "shortDesc": "Mean Squared Error: среднее от (output − target)². Самый частый loss для регрессии. Сильно штрафует ...",
    "theory": "<p>Mean Squared Error: среднее от (output − target)². Самый частый loss для регрессии. Сильно штрафует большие ошибки — чувствителен к выбросам. Вход и target — одна форма. Параметры: reduction=\"mean\".<br><strong>Когда использовать:</strong> регрессия, когда ошибки распределены нормально и выбросов мало.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-mseloss-e-148-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.MSELoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.MSELoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-mseloss-e-148-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-crossentropyloss-e-149",
    "library": "PyTorch",
    "title": "nn.CrossEntropyLoss()",
    "shortDesc": "Для многоклассовой классификации (один класс на объект). Вход — логиты модели, форма [N, C] (N — бат...",
    "theory": "<p>Для многоклассовой классификации (один класс на объект). Вход — логиты модели, форма [N, C] (N — батч, C — число классов); target — индексы классов, форма [N], тип long, значения от 0 до C−1. Внутри применяется log_softmax к выходу и NLL. Не нужно вручную делать softmax перед передачей. Параметры: weight (веса классов), ignore_index, label_smoothing, reduction.<br><strong>Пример:</strong> классификация изображений (собака/кошка/птица).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-crossentropyloss-e-149-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.CrossEntropyLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.CrossEntropyLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-crossentropyloss-e-149-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-ctcloss-e-150",
    "library": "PyTorch",
    "title": "nn.CTCLoss()",
    "shortDesc": "Connectionist Temporal Classification — для задач, где выход — последовательность, а целевых меток м...",
    "theory": "<p>Connectionist Temporal Classification — для задач, где выход — последовательность, а целевых меток меньше (например распознавание речи: аудио кадры → текст). Параметры: blank (индекс пустого символа), zero_infinity. Сложнее в использовании: нужны длины входов и целей.<br><strong>Когда использовать:</strong> speech-to-text, распознавание рукописного ввода.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-ctcloss-e-150-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.CTCLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.CTCLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-ctcloss-e-150-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-nllloss-e-151",
    "library": "PyTorch",
    "title": "nn.NLLLoss()",
    "shortDesc": "Negative Log Likelihood: принимает логиты после log_softmax (не после обычного softmax). Target — ин...",
    "theory": "<p>Negative Log Likelihood: принимает логиты после log_softmax (не после обычного softmax). Target — индексы классов [N]. Часто используют вместе: выход модели → log_softmax → NLLLoss. CrossEntropyLoss по сути объединяет log_softmax + NLLLoss в одном классе.<br><strong>Когда использовать:</strong> если вы сами делаете log_softmax (например в кастомной голове).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-nllloss-e-151-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.NLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.NLLLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-nllloss-e-151-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-poissonnllloss-e-152",
    "library": "PyTorch",
    "title": "nn.PoissonNLLLoss()",
    "shortDesc": "NLL при предположении, что цель распределена по Пуассону. Параметры: log_input (True — вход уже лога...",
    "theory": "<p>NLL при предположении, что цель распределена по Пуассону. Параметры: log_input (True — вход уже логарифм), full (учитывать ли приближение Стирлинга). Редко используется в типичных задачах.<br><strong>Когда использовать:</strong> подсчёт событий (счётчики).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-poissonnllloss-e-152-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.PoissonNLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.PoissonNLLLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-poissonnllloss-e-152-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-gaussiannllloss-e-153",
    "library": "PyTorch",
    "title": "nn.GaussianNLLLoss()",
    "shortDesc": "Регрессия с предсказанием не только среднего, но и дисперсии. Вход: предсказание и дисперсия (или ло...",
    "theory": "<p>Регрессия с предсказанием не только среднего, но и дисперсии. Вход: предсказание и дисперсия (или лог-дисперсия); target — истинное значение. Полезно для оценки неопределённости.<br><strong>Когда использовать:</strong> когда нужна уверенность модели (uncertainty).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-gaussiannllloss-e-153-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.GaussianNLLLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.GaussianNLLLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-gaussiannllloss-e-153-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-kldivloss-e-154",
    "library": "PyTorch",
    "title": "nn.KLDivLoss()",
    "shortDesc": "Kullback–Leibler divergence между двумя распределениями. Вход — логарифмы вероятностей (логиты после...",
    "theory": "<p>Kullback–Leibler divergence между двумя распределениями. Вход — логарифмы вероятностей (логиты после log_softmax), target — вероятности. Reduction: \"batchmean\" для совместимости с формулой. Используется в VAE, дистилляции, когда нужно приблизить одно распределение к другому.<br><strong>Когда использовать:</strong> дистилляция моделей, VAE.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-kldivloss-e-154-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.KLDivLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.KLDivLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-kldivloss-e-154-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-bceloss-e-155",
    "library": "PyTorch",
    "title": "nn.BCELoss()",
    "shortDesc": "Binary Cross Entropy: бинарная классификация. Вход — вероятности (после sigmoid), форма [N, 1] или [...",
    "theory": "<p>Binary Cross Entropy: бинарная классификация. Вход — вероятности (после sigmoid), форма [N, 1] или [N]; target — 0 или 1, та же форма. Значения входа должны быть в (0, 1), иначе градиенты нестабильны. Параметры: weight, reduction.<br><strong>Нюанс:</strong> чаще используют BCEWithLogitsLoss — он объединяет sigmoid и BCE и численно стабильнее.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-bceloss-e-155-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.BCELoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.BCELoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bceloss-e-155-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-bcewithlogitsloss-e-156",
    "library": "PyTorch",
    "title": "nn.BCEWithLogitsLoss()",
    "shortDesc": "BCE + Sigmoid в одном классе. Вход — сырые логиты (без sigmoid), target — 0 или 1. Внутри применяетс...",
    "theory": "<p>BCE + Sigmoid в одном классе. Вход — сырые логиты (без sigmoid), target — 0 или 1. Внутри применяется sigmoid; реализация устойчива к переполнению. Рекомендуется вместо ручного sigmoid + BCELoss. Параметры: pos_weight (для несбалансированных классов), reduction.<br><strong>Пример:</strong> бинарная классификация (да/нет, есть объект/нет).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-bcewithlogitsloss-e-156-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.BCEWithLogitsLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.BCEWithLogitsLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-bcewithlogitsloss-e-156-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-marginrankingloss-e-157",
    "library": "PyTorch",
    "title": "nn.MarginRankingLoss()",
    "shortDesc": "Ranking: на входе два тензора x1, x2 и метки target (1 или −1). Loss поощряет: если target=1, то x1 ...",
    "theory": "<p>Ranking: на входе два тензора x1, x2 и метки target (1 или −1). Loss поощряет: если target=1, то x1 > x2; если −1, то x1 < x2. Используется в рекомендациях, ранжировании.<br><strong>Когда использовать:</strong> learning to rank, рекомендации.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-marginrankingloss-e-157-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.MarginRankingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.MarginRankingLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-marginrankingloss-e-157-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-hingeembeddingloss-e-158",
    "library": "PyTorch",
    "title": "nn.HingeEmbeddingLoss()",
    "shortDesc": "Для меток ±1: если target=1, loss = max(0, margin − x); если −1, loss = max(0, x). Параметр margin п...",
    "theory": "<p>Для меток ±1: если target=1, loss = max(0, margin − x); если −1, loss = max(0, x). Параметр margin по умолчанию 1. Используется в метрическом обучении, эмбеддингах.<br><strong>Когда использовать:</strong> когда нужны эмбеддинги с большим отступом между классами.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-hingeembeddingloss-e-158-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.HingeEmbeddingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.HingeEmbeddingLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-hingeembeddingloss-e-158-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-multilabelmarginloss-e-159",
    "library": "PyTorch",
    "title": "nn.MultiLabelMarginLoss()",
    "shortDesc": "Multi-label классификация с margin: у одного объекта может быть несколько правильных классов. Вход —...",
    "theory": "<p>Multi-label классификация с margin: у одного объекта может быть несколько правильных классов. Вход — 2D тензор, target — индексы правильных классов (не one-hot). Специфичный формат target; см. документацию.<br><strong>Когда использовать:</strong> несколько меток на объект (теги, категории).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-multilabelmarginloss-e-159-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.MultiLabelMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.MultiLabelMarginLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelmarginloss-e-159-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-huberloss-e-160",
    "library": "PyTorch",
    "title": "nn.HuberLoss()",
    "shortDesc": "Гибрид L2 и L1: при малой ошибке ведёт себя как квадрат (гладко), при большой — как модуль (устойчив...",
    "theory": "<p>Гибрид L2 и L1: при малой ошибке ведёт себя как квадрат (гладко), при большой — как модуль (устойчиво к выбросам). Параметр delta задаёт порог перехода. Регрессия. Хорош когда в данных есть выбросы.<br><strong>Когда использовать:</strong> регрессия с зашумлёнными или выбросными данными.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-huberloss-e-160-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.HuberLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.HuberLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-huberloss-e-160-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-smoothl1loss-e-161",
    "library": "PyTorch",
    "title": "nn.SmoothL1Loss()",
    "shortDesc": "Похож на Huber: при |error| < beta — квадратичная часть, иначе линейная. Регрессия, устойчивость к в...",
    "theory": "<p>Похож на Huber: при |error| < beta — квадратичная часть, иначе линейная. Регрессия, устойчивость к выбросам. Параметр beta (по умолчанию 1). Часто используется в детекции объектов (bounding box regression).<br><strong>Когда использовать:</strong> регрессия координат, боксов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-smoothl1loss-e-161-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.SmoothL1Loss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.SmoothL1Loss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-smoothl1loss-e-161-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-softmarginloss-e-162",
    "library": "PyTorch",
    "title": "nn.SoftMarginLoss()",
    "shortDesc": "Двухклассовый логистический loss. Метки target: +1 или −1. Вход — один тензор (разность или оценка)....",
    "theory": "<p>Двухклассовый логистический loss. Метки target: +1 или −1. Вход — один тензор (разность или оценка). Реже используется чем BCEWithLogitsLoss.<br><strong>Когда использовать:</strong> бинарная классификация с метками ±1.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-softmarginloss-e-162-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.SoftMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.SoftMarginLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-softmarginloss-e-162-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-multilabelsoftmarginloss-e-163",
    "library": "PyTorch",
    "title": "nn.MultiLabelSoftMarginLoss()",
    "shortDesc": "Multi-label классификация: для каждого класса своя бинарная задача (one-vs-rest). Вход — логиты [N, ...",
    "theory": "<p>Multi-label классификация: для каждого класса своя бинарная задача (one-vs-rest). Вход — логиты [N, C], target — бинарная матрица [N, C] (0 или 1). Параметры: weight, reduction.<br><strong>Когда использовать:</strong> несколько независимых меток на объект.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-multilabelsoftmarginloss-e-163-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.MultiLabelSoftMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.MultiLabelSoftMarginLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multilabelsoftmarginloss-e-163-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-cosineembeddingloss-e-164",
    "library": "PyTorch",
    "title": "nn.CosineEmbeddingLoss()",
    "shortDesc": "Измеряет косинусное сходство между векторами x1 и x2. Target: 1 — векторы должны быть похожи, −1 — р...",
    "theory": "<p>Измеряет косинусное сходство между векторами x1 и x2. Target: 1 — векторы должны быть похожи, −1 — различаться. Параметр margin. Используется в эмбеддингах, сравнении пар.<br><strong>Когда использовать:</strong> сходство текстов/изображений, siamese сети.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-cosineembeddingloss-e-164-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.CosineEmbeddingLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.CosineEmbeddingLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-cosineembeddingloss-e-164-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-multimarginloss-e-165",
    "library": "PyTorch",
    "title": "nn.MultiMarginLoss()",
    "shortDesc": "Multi-class hinge (margin) loss. Вход — сырые оценки [N, C], target — индексы классов [N]. Штрафует ...",
    "theory": "<p>Multi-class hinge (margin) loss. Вход — сырые оценки [N, C], target — индексы классов [N]. Штрафует правильный класс, если его оценка не больше остальных на margin. Параметры: p (норма), margin, weight.<br><strong>Когда использовать:</strong> многоклассовая классификация с margin (альтернатива CrossEntropy).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-multimarginloss-e-165-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.MultiMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.MultiMarginLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-multimarginloss-e-165-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-tripletmarginloss-e-166",
    "library": "PyTorch",
    "title": "nn.TripletMarginLoss()",
    "shortDesc": "Triplet loss: на входе anchor, positive (того же класса), negative (другого класса). Цель — чтобы ра...",
    "theory": "<p>Triplet loss: на входе anchor, positive (того же класса), negative (другого класса). Цель — чтобы расстояние(anchor, positive) + margin < distance(anchor, negative). Используется в face recognition, метрическом обучении. Параметры: margin, p (норма), swap.<br><strong>Когда использовать:</strong> эмбеддинги лиц, поиск похожих объектов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginloss-e-166-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.TripletMarginLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.TripletMarginLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginloss-e-166-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167",
    "library": "PyTorch",
    "title": "nn.TripletMarginWithDistanceLoss()",
    "shortDesc": "Тот же triplet, но функцию расстояния можно задать своей (distance_function). По умолчанию — Lp. Гиб...",
    "theory": "<p>Тот же triplet, но функцию расстояния можно задать своей (distance_function). По умолчанию — Lp. Гибкость для кастомных метрик.<br><strong>Когда использовать:</strong> когда нужно своё расстояние в triplet loss.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-tripletmarginwithdistanceloss-e-167-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.TripletMarginWithDistanceLoss.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(nn.TripletMarginWithDistanceLoss())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-tripletmarginwithdistanceloss-e-167-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-sgd-e-168",
    "library": "PyTorch",
    "title": "torch.optim.SGD()",
    "shortDesc": "Stochastic Gradient Descent: классическое правило обновления весов. Параметры: params (model.paramet...",
    "theory": "<p>Stochastic Gradient Descent: классическое правило обновления весов. Параметры: params (model.parameters()), lr (обязательный, типично 0.01–0.1), momentum (0–1 — сглаживание градиента, часто 0.9), weight_decay (L2-регуляризация). С momentum=0.9 очень часто используется для обучения свёрточных сетей; без momentum — базовый вариант, иногда нестабильный.<br><strong>Когда использовать:</strong> когда нужен простой и предсказуемый оптимизатор; для многих архитектур с momentum даёт хороший результат.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-sgd-e-168-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.SGD.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.SGD(params, lr, momentum=0, weight_decay=0)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sgd-e-168-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adam-e-169",
    "library": "PyTorch",
    "title": "torch.optim.Adam()",
    "shortDesc": "Adam: адаптивный learning rate для каждого параметра (момент первого и второго порядка). Параметры: ...",
    "theory": "<p>Adam: адаптивный learning rate для каждого параметра (момент первого и второго порядка). Параметры: lr (часто 1e-3), betas — коэффициенты для моментов, eps — для численной стабильности. Обычно хорошо работает \"из коробки\", не требует тонкой настройки lr. Минус: часто хуже обобщает чем SGD+momentum при долгом обучении.<br><strong>Когда использовать:</strong> по умолчанию для многих задач (NLP, GAN, быстрый прототип).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adam-e-169-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Adam.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Adam(params, lr=1e-3, betas=(0.9, 0.999))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adam-e-169-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adamw-e-170",
    "library": "PyTorch",
    "title": "torch.optim.AdamW()",
    "shortDesc": "Adam с decoupled weight decay: weight decay применяется к весам отдельно от градиента (как в оригина...",
    "theory": "<p>Adam с decoupled weight decay: weight decay применяется к весам отдельно от градиента (как в оригинальной статье), а не через L2 в градиенте. Параметры: lr, betas, eps, weight_decay. Рекомендуется вместо Adam + L2-регуляризации.<br><strong>Когда использовать:</strong> трансформеры, когда нужна сильная регуляризация весов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adamw-e-170-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.AdamW.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.AdamW(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamw-e-170-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adagrad-e-171",
    "library": "PyTorch",
    "title": "torch.optim.Adagrad()",
    "shortDesc": "Adagrad: уменьшает lr для параметров с большей историей градиентов. Параметры: lr, lr_decay, eps. По...",
    "theory": "<p>Adagrad: уменьшает lr для параметров с большей историей градиентов. Параметры: lr, lr_decay, eps. Подходит для разрежённых данных (NLP); для плотных данных часто lr падает слишком сильно.<br><strong>Когда использовать:</strong> разрежённые градиенты, рекомендации.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adagrad-e-171-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Adagrad.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Adagrad(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adagrad-e-171-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adadelta-e-172",
    "library": "PyTorch",
    "title": "torch.optim.Adadelta()",
    "shortDesc": "Adadelta: адаптивный lr без явного задания learning rate (используется скользящее среднее градиентов...",
    "theory": "<p>Adadelta: адаптивный lr без явного задания learning rate (используется скользящее среднее градиентов и обновлений). Параметры: rho, eps. Редко используется в глубоком обучении.<br><strong>Когда использовать:</strong> когда не хотите задавать lr вручную (но на практике lr всё равно подбирают).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adadelta-e-172-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Adadelta.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Adadelta(params, lr=1.0, rho=0.9)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adadelta-e-172-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-rmsprop-e-173",
    "library": "PyTorch",
    "title": "torch.optim.RMSprop()",
    "shortDesc": "RMSprop: скользящее среднее квадратов градиентов; lr делится на корень из этого среднего. Параметры:...",
    "theory": "<p>RMSprop: скользящее среднее квадратов градиентов; lr делится на корень из этого среднего. Параметры: lr, alpha (затухание), eps. Популярен в reinforcement learning; основа для Adam.<br><strong>Когда использовать:</strong> RL, RNN; иногда как замена Adam.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-rmsprop-e-173-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.RMSprop.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.RMSprop(params, lr=1e-2, alpha=0.99)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rmsprop-e-173-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-rprop-e-174",
    "library": "PyTorch",
    "title": "torch.optim.Rprop()",
    "shortDesc": "Rprop: обновление только по знаку градиента; размер шага адаптируется отдельно. Работает только с ба...",
    "theory": "<p>Rprop: обновление только по знаку градиента; размер шага адаптируется отдельно. Работает только с батчем (не мини-батчем). В PyTorch редко используется.<br><strong>Когда использовать:</strong> полный батч, маленькие сети.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-rprop-e-174-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Rprop.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Rprop(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-rprop-e-174-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adamax-e-175",
    "library": "PyTorch",
    "title": "torch.optim.Adamax()",
    "shortDesc": "Adamax: вариант Adam на основе бесконечной нормы (max) вместо L2. Параметры: lr, betas, eps. Иногда ...",
    "theory": "<p>Adamax: вариант Adam на основе бесконечной нормы (max) вместо L2. Параметры: lr, betas, eps. Иногда более стабилен при очень длинных последовательностях.<br><strong>Когда использовать:</strong> длинные последовательности, когда Adam нестабилен.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adamax-e-175-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Adamax.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Adamax(params, lr=2e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adamax-e-175-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-asgd-e-176",
    "library": "PyTorch",
    "title": "torch.optim.ASGD()",
    "shortDesc": "Averaged SGD: усредняет параметры за последние итерации (скользящее среднее). Параметры: lr, lambd, ...",
    "theory": "<p>Averaged SGD: усредняет параметры за последние итерации (скользящее среднее). Параметры: lr, lambd, alpha. Может улучшить обобщение.<br><strong>Когда использовать:</strong> когда SGD сходится, но хочется более гладкого решения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-asgd-e-176-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.ASGD.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.ASGD(params, lr=1e-2)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-asgd-e-176-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-lbfgs-e-177",
    "library": "PyTorch",
    "title": "torch.optim.LBFGS()",
    "shortDesc": "L-BFGS: квази-Ньютоновский метод. Требует многократного пересчёта loss в одном step — вы передаёте c...",
    "theory": "<p>L-BFGS: квази-Ньютоновский метод. Требует многократного пересчёта loss в одном step — вы передаёте closure: step(closure), где closure() считает loss и backward(). Память растёт с числом итераций. Подходит для маленьких батчей и маленьких моделей.<br><strong>Когда использовать:</strong> стиль-трансфер, малые задачи; не для больших нейросетей.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-lbfgs-e-177-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.LBFGS.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.LBFGS(params, lr=1)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-lbfgs-e-177-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-nadam-e-178",
    "library": "PyTorch",
    "title": "torch.optim.NAdam()",
    "shortDesc": "NAdam: Adam + Nesterov momentum (look-ahead). Параметры: lr, betas, eps. Часто чуть быстрее сходится...",
    "theory": "<p>NAdam: Adam + Nesterov momentum (look-ahead). Параметры: lr, betas, eps. Часто чуть быстрее сходится чем Adam.<br><strong>Когда использовать:</strong> альтернатива Adam с Nesterov.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-nadam-e-178-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.NAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.NAdam(params, lr=2e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-nadam-e-178-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-radam-e-179",
    "library": "PyTorch",
    "title": "torch.optim.RAdam()",
    "shortDesc": "Rectified Adam: корректирует дисперсию в начале обучения (warmup по сути встроен). Параметры: lr, be...",
    "theory": "<p>Rectified Adam: корректирует дисперсию в начале обучения (warmup по сути встроен). Параметры: lr, betas, eps. Уменьшает необходимость в ручном warmup.<br><strong>Когда использовать:</strong> когда не хотите настраивать warmup вручную.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-radam-e-179-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.RAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.RAdam(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-radam-e-179-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-sparseadam-e-180",
    "library": "PyTorch",
    "title": "torch.optim.SparseAdam()",
    "shortDesc": "Adam для разрежённых градиентов: обновляет только те параметры, у которых градиент ненулевой. Эконом...",
    "theory": "<p>Adam для разрежённых градиентов: обновляет только те параметры, у которых градиент ненулевой. Экономит память и время при очень разрежённых обновлениях.<br><strong>Когда использовать:</strong> эмбеддинги с огромным словарём, разрежённые обновления.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-sparseadam-e-180-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.SparseAdam.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.SparseAdam(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-sparseadam-e-180-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-adafactor-e-181",
    "library": "PyTorch",
    "title": "torch.optim.Adafactor()",
    "shortDesc": "Adafactor: адаптивный метод с меньшим числом гиперпараметров и меньшим потреблением памяти (моменты ...",
    "theory": "<p>Adafactor: адаптивный метод с меньшим числом гиперпараметров и меньшим потреблением памяти (моменты хранятся в факторизованном виде). Подходит для очень больших моделей.<br><strong>Когда использовать:</strong> большие трансформеры, нехватка памяти.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-adafactor-e-181-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Adafactor.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.optim.Adafactor(params))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-adafactor-e-181-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-optim-muon-e-182",
    "library": "PyTorch",
    "title": "torch.optim.Muon()",
    "shortDesc": "Muon: новый оптимизатор из PyTorch (на основе теории динамики). Параметры: lr, momentum и др. Экспер...",
    "theory": "<p>Muon: новый оптимизатор из PyTorch (на основе теории динамики). Параметры: lr, momentum и др. Экспериментальный; см. актуальную документацию.<br><strong>Когда использовать:</strong> эксперименты, сравнение с Adam/SGD.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-optim-muon-e-182-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.optim.Muon.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\ntorch.optim.Muon(params, lr=1e-3)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-optim-muon-e-182-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183",
    "library": "PyTorch",
    "title": "import torch\\nx = torch.tensor([1, 2, 3]",
    "shortDesc": "Тензоры — многомерные массивы PyTorch (аналог ndarray в NumPy, но с поддержкой авто-градиента). torc...",
    "theory": "<p>Тензоры — многомерные массивы PyTorch (аналог ndarray в NumPy, но с поддержкой авто-градиента). torch.tensor(data) создаёт тензор из списка/массива; dtype и device задаются опционально. Атрибуты: .shape — размеры по осям; .dtype — тип; .device — cpu или cuda. Метод .to(\"cuda\") или .to(device) переносит тензор на GPU; для обучения модель и данные должны быть на одном device. Тензоры участвуют в графе вычислений — при вызове .backward() градиенты считаются по всем операциям.<br><strong>Нюанс:</strong> создание тензора из списка копирует данные; из NumPy — torch.from_numpy(arr) делит память (без копии).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nx = torch.tensor([1, 2, 3])\nx.shape  # размерности\nprint(x.to(\"cuda\")  # на GPU)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nx-torch-tensor-1-2-3-e-183-code"
      }
    ]
  },
  {
    "id": "pytorch-class-net-nn-module-n-def-init-e-184",
    "library": "PyTorch",
    "title": "class Net(nn.Module):\\n    def __init__(",
    "shortDesc": "Любая модель наследуется от nn.Module. В __init__ создаются слои (они автоматически регистрируются и...",
    "theory": "<p>Любая модель наследуется от nn.Module. В __init__ создаются слои (они автоматически регистрируются и их параметры попадут в model.parameters()). forward(x) — прямой проход: вы описываете, как из входа x получить выход. Вызов model(x) внутри вызывает forward(x). Не вызывайте forward вручную — только model(x). Параметры модели: model.parameters() передаётся в оптимизатор.<br><strong>Нюанс:</strong> в forward только прямой проход, без side effects; обратный проход делается через loss.backward().</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-class-net-nn-module-n-def-init-e-184-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.nn.Module.html'\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nclass Net(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(10, 5)\n    def forward(self, x):\nprint(        return self.fc(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-class-net-nn-module-n-def-init-e-184-code"
      }
    ]
  },
  {
    "id": "pytorch-nn-linear-e-185",
    "library": "PyTorch",
    "title": "nn.Linear()",
    "shortDesc": "nn.Linear(in_f, out_f): полносвязный слой, выход = x @ W + b; in_f/out_f — размер входа и выхода. nn...",
    "theory": "<p>nn.Linear(in_f, out_f): полносвязный слой, выход = x @ W + b; in_f/out_f — размер входа и выхода. nn.Conv2d(in_c, out_c, k): свёртка 2D; in_c/out_c — число каналов, k — размер ядра (число или (h,w)). nn.ReLU(): активация max(0, x), без параметров. Другие слои: nn.BatchNorm2d, nn.MaxPool2d, nn.Dropout. Полный список — в документации torch.nn.<br><strong>Пример:</strong> после свёрток форма (N, C, H, W); перед Linear нужно flatten: x.view(N, -1).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-nn-linear-e-185-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nnn.Linear(in_features, out_features)\nnn.Conv2d(in_channels, out_channels, kernel_size)\nprint(nn.ReLU())",
        "solution": "",
        "hints": [],
        "id": "pytorch-nn-linear-e-185-code"
      }
    ]
  },
  {
    "id": "pytorch-optimizer-zero-grad-e-186",
    "library": "PyTorch",
    "title": "optimizer.zero_grad()",
    "shortDesc": "Три шага на каждый батч. zero_grad(): градиенты в PyTorch накапливаются (суммируются), поэтому перед...",
    "theory": "<p>Три шага на каждый батч. zero_grad(): градиенты в PyTorch накапливаются (суммируются), поэтому перед новым backward их обнуляют — иначе градиенты добавятся к старым. loss.backward(): по графу вычислений считаются градиенты loss по всем параметрам (requires_grad=True). step(): оптимизатор по заложенному правилу (SGD, Adam и т.д.) обновляет веса, используя накопленные градиенты. Порядок обязателен: zero_grad → backward → step.<br><strong>Нюанс:</strong> если забыть zero_grad(), градиенты будут расти от батча к батчу и обучение \"взорвётся\".</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-optimizer-zero-grad-e-186-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/optim.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\noptimizer.zero_grad()  # обнулить градиенты\nloss.backward()          # посчитать градиенты\nprint(optimizer.step()        # обновить веса)",
        "solution": "",
        "hints": [],
        "id": "pytorch-optimizer-zero-grad-e-186-code"
      }
    ]
  },
  {
    "id": "pytorch-from-torch-utils-data-import-dataloader-e-187",
    "library": "PyTorch",
    "title": "from torch.utils.data import DataLoader\\",
    "shortDesc": "DataLoader оборачивает Dataset и отдаёт батчи. dataset — объект с __len__ и __getitem__(idx), возвра...",
    "theory": "<p>DataLoader оборачивает Dataset и отдаёт батчи. dataset — объект с __len__ и __getitem__(idx), возвращающий один пример (тензоры x, y). batch_size — сколько примеров в одном батче (типично 32, 64, 128). shuffle=True — перемешивать индексы каждую эпоху (для обучения обязательно). num_workers — число процессов загрузки (0 = в основном процессе; больше 0 — фоновые воркеры). Каждая итерация for x, y in loader даёт тензоры формы (batch_size, ...).<br><strong>Когда использовать:</strong> всегда при обучении на мини-батчах; без DataLoader пришлось бы вручную нарезать батчи.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-from-torch-utils-data-import-dataloader-e-187-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nfrom torch.utils.data import DataLoader\nloader = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=0)",
        "solution": "",
        "hints": [],
        "id": "pytorch-from-torch-utils-data-import-dataloader-e-187-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Базовые активации. ReLU(x) = max(0, x) — стандартная, но страдает от \"умирающих\" нейронов. LeakyReLU...",
    "theory": "<p>Базовые активации. ReLU(x) = max(0, x) — стандартная, но страдает от \"умирающих\" нейронов. LeakyReLU — пропускает небольшой градиент для x<0. ELU — сглаживает излом в нуле (улучшает сходимость, но чуть медленнее вычисляется).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nx = torch.randn(2)\nprint(\"ReLU:\", nn.ReLU()(x))\nprint(\"LeakyReLU:\", nn.LeakyReLU(0.1)(x))\nprint(\"ELU:\", nn.ELU()(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-188-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Современные гладкие активации (стандарт для трансформеров и глубоких CNN). SiLU (Swish): x * sigmoid...",
    "theory": "<p>Современные гладкие активации (стандарт для трансформеров и глубоких CNN). SiLU (Swish): x * sigmoid(x), используется в YOLOv5/v8, EfficientNet. GELU: x * Phi(x), стандарт в BERT, GPT, ViT. Mish: x * tanh(softplus(x)), показывает отличные результаты в комп. зрении.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nx = torch.randn(2)\nprint(\"SiLU (Swish):\", nn.SiLU()(x))\nprint(\"GELU:\", nn.GELU()(x))\nprint(\"Mish:\", nn.Mish()(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-189-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nx =",
    "shortDesc": "Ограничивающие активации. Sigmoid -> [0, 1] — для бинарной классификации (выходного слоя) или шлюзов...",
    "theory": "<p>Ограничивающие активации. Sigmoid -> [0, 1] — для бинарной классификации (выходного слоя) или шлюзов (LSTM). Tanh -> [-1, 1] — центрирует данные, лучше сигмоиды для скрытых слоев. Softmax -> сумма=1 (распределение вероятностей по классам).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html#non-linear-activations-weighted-sum-nonlinearity, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nx = torch.randn(1, 3)\nprint(\"Sigmoid:\", nn.Sigmoid()(x))\nprint(\"Tanh:\", nn.Tanh()(x))\nprint(\"Softmax:\", nn.Softmax(dim=1)(x))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nx-e-190-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# m",
    "shortDesc": "Стандартный цикл обучения в PyTorch. Обязательно model.train() перед эпохой (важно для Dropout/Batch...",
    "theory": "<p>Стандартный цикл обучения в PyTorch. Обязательно model.train() перед эпохой (важно для Dropout/BatchNorm). Сначала zero_grad(), иначе градиенты будут накапливаться с предыдущего шага.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/optim.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# model.train()  # Включает Dropout и BatchNorm\n# for X_batch, y_batch in train_loader:\n#     optimizer.zero_grad()       # 1. Обнуляем градиенты\n#     y_pred = model(X_batch)     # 2. Прямой проход (forward pass)\n#     loss = criterion(y_pred, y_batch) # 3. Считаем ошибку\n#     loss.backward()             # 4. Обратный проход (вычисляем градиенты)\n#     optimizer.step()            # 5. Обновляем веса\nprint(\"training: zero_grad, forward, backward, step\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-m-e-191-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-model-eval-e-192",
    "library": "PyTorch",
    "title": "import torch\\n# model.eval()   # Отключа",
    "shortDesc": "Стандартный цикл валидации или инференса. Обязательно torch.no_grad() — чтобы не тратить память на с...",
    "theory": "<p>Стандартный цикл валидации или инференса. Обязательно torch.no_grad() — чтобы не тратить память на сохранение вычислительного графа. model.eval() переводит слои в режим тестирования.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-n-model-eval-e-192-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/autograd.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\n# model.eval()   # Отключает Dropout, замораживает статистику BatchNorm\n# val_loss, val_acc = 0, 0\n# with torch.no_grad(): # Отключает вычисление градиентов (экономит память и время)\n#     for X_batch, y_batch in val_loader:\n#         y_pred = model(X_batch)\n#         loss = criterion(y_pred, y_batch)\n#         val_loss += loss.item()\n#         val_acc += (y_pred.argmax(dim=1) == y_batch).sum().item()\nprint(\"validation: model.eval(), torch.no_grad()\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-model-eval-e-192-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193",
    "library": "PyTorch",
    "title": "import torch\\nfrom torch.utils.data impo",
    "shortDesc": "Свой класс Dataset. Нужно реализовать __len__ (сколько всего элементов) и __getitem__ (как получить ...",
    "theory": "<p>Свой класс Dataset. Нужно реализовать __len__ (сколько всего элементов) и __getitem__ (как получить элемент по индексу). Можно в __getitem__ читать картинки с диска, чтобы не грузить всё в ОЗУ.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nfrom torch.utils.data import Dataset\nclass CustomDataset(Dataset):\n    def __init__(self, data, labels): # загрузка путей/данных\n        self.data = data; self.labels = labels\n    def __len__(self): return len(self.data)  # длина датасета\n    def __getitem__(self, idx):       # как получить 1 элемент\n        return self.data[idx], self.labels[idx]\nprint(\"Dataset: __init__, __len__, __getitem__\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-193-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194",
    "library": "PyTorch",
    "title": "import torch\\nfrom torch.utils.data impo",
    "shortDesc": "DataLoader — оборачивает Dataset и разбивает на батчи (куски данных). shuffle=True — перемешивание (...",
    "theory": "<p>DataLoader — оборачивает Dataset и разбивает на батчи (куски данных). shuffle=True — перемешивание (для train). num_workers — загрузка данных в несколько потоков (параллельно).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nfrom torch.utils.data import DataLoader, TensorDataset\nX = torch.randn(100, 10); y = torch.randint(0, 2, (100,))\ndataset = TensorDataset(X, y)\nloader = DataLoader(dataset, batch_size=32, shuffle=True, num_workers=2)\n# for batch_x, batch_y in loader: ...\nprint(\"DataLoader: batch_size, shuffle, num_workers\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nfrom-torch-utils-data-impo-e-194-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195",
    "library": "PyTorch",
    "title": "import torchvision.transforms as T\\n# tr",
    "shortDesc": "Предобработка картинок (torchvision). Аугментации (Flip, Crop, Rotation) только для train! ToTensor ...",
    "theory": "<p>Предобработка картинок (torchvision). Аугментации (Flip, Crop, Rotation) только для train! ToTensor конвертирует PIL Image/numpy (H, W, C) [0..255] в тензор (C, H, W) [0..1]. Normalize вычитает среднее и делит на std.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torchvision.transforms as T\n# transform = T.Compose([\n#     T.Resize((224, 224)),       # Изменение размера\n#     T.RandomHorizontalFlip(),   # Аугментация (вероятность 0.5)\n#     T.ToTensor(),               # Пиксели в тензор [0..1] (C, H, W)\n#     T.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])\n# ])\nprint(\"Transforms: Resize, ToTensor, Normalize, Flip, Crop\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torchvision-transforms-as-t-n-tr-e-195-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\ncla",
    "shortDesc": "Простая свёрточная сеть (CNN). Conv2d(входы, выходы, ядро). MaxPool2d(2,2) уменьшает картинку в 2 ра...",
    "theory": "<p>Простая свёрточная сеть (CNN). Conv2d(входы, выходы, ядро). MaxPool2d(2,2) уменьшает картинку в 2 раза по осям H,W. Перед Linear нужно сплющить (flatten) тензор с помощью .view(B, -1) или nn.Flatten.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nclass SimpleCNN(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = nn.Conv2d(1, 16, 3, padding=1) # 1 канал (ч/б) -> 16\n        self.pool = nn.MaxPool2d(2, 2)\n        self.fc = nn.Linear(16 * 14 * 14, 10)\n    def forward(self, x):\n        x = self.pool(torch.relu(self.conv1(x)))\nprint(        return self.fc(x.view(x.size(0), -1)) # flatten)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-ncla-e-196-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# L",
    "shortDesc": "Рекуррентные сети (RNN/GRU/LSTM). input_size — размер одного слова/шага. hidden_size — скрытое состо...",
    "theory": "<p>Рекуррентные сети (RNN/GRU/LSTM). input_size — размер одного слова/шага. hidden_size — скрытое состояние. batch_first=True означает, что батч идёт первой осью (по умолчанию он второй!).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# LSTM для последовательностей (текст, временные ряды)\nrnn = nn.LSTM(input_size=10, hidden_size=20, num_layers=2, batch_first=True)\n# input: (batch, seq_len, features)\nx = torch.randn(3, 5, 10)\noutput, (hn, cn) = rnn(x)\nprint(\"LSTM output:\", output.shape) # (3, 5, 20)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-l-e-197-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n# T",
    "shortDesc": "Базовый трансформер (как в BERT). d_model — размер эмбеддинга. nhead — кол-во голов внимания. Работа...",
    "theory": "<p>Базовый трансформер (как в BERT). d_model — размер эмбеддинга. nhead — кол-во голов внимания. Работает с последовательностями параллельно (без рекуррентности), но требует Positional Encoding.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n# Transformer для обработки последовательностей\nencoder_layer = nn.TransformerEncoderLayer(d_model=512, nhead=8)\nencoder = nn.TransformerEncoder(encoder_layer, num_layers=6)\n# input: (seq_len, batch, d_model)\nsrc = torch.rand(10, 32, 512)\nout = encoder(src)\nprint(\"TransformerEncoder out:\", out.shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-t-e-198-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\nimp",
    "shortDesc": "Использование предобученных сетей через torchvision. Загружаем веса ImageNet, замораживаем слои (при...",
    "theory": "<p>Использование предобученных сетей через torchvision. Загружаем веса ImageNet, замораживаем слои (при необходимости), меняем последний Linear/classifier слой под кол-во классов в датасете.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/hub.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nimport torchvision.models as models\n# --- Предобученные модели + Fine-tuning ---\n# Установка весов ResNet18:\nweights = models.ResNet18_Weights.DEFAULT\nmodel = models.resnet18(weights=weights)\n# Заменяем последний слой под нашу задачу (на 10 классов)\nnum_ftrs = model.fc.in_features\nmodel.fc = nn.Linear(num_ftrs, 10)\nprint(\"models.resnet18(weights=DEFAULT), fine-tuning\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-nimp-e-199-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-device-torch-device-c-e-200",
    "library": "PyTorch",
    "title": "import torch\\n# device = torch.device(\"c",
    "shortDesc": "Перенос вычислений на видеокарту. И модель, и данные должны быть на одном устройстве. is_available()...",
    "theory": "<p>Перенос вычислений на видеокарту. И модель, и данные должны быть на одном устройстве. is_available() проверяет наличие драйверов NVIDIA (CUDA).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-n-device-torch-device-c-e-200-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensor_attributes.html#torch.torch.device, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\n# device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\")\n# model.to(device)\n# Для каждого батча: X, y = X.to(device), y.to(device)\nprint(\"CUDA (GPU): to(device)\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-device-torch-device-c-e-200-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201",
    "library": "PyTorch",
    "title": "import torch\\n# torch.save(model.state_d",
    "shortDesc": "Сохранение только весов (state_dict_). Не сохраняйте саму модель (torch.save(model)), так как это пр...",
    "theory": "<p>Сохранение только весов (state_dict_). Не сохраняйте саму модель (torch.save(model)), так как это привяжет сохранение к структуре директорий и импортам. Перед инференсом обязательно model.eval().</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-n-torch-save-model-state-d-e-201-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/notes/serialization.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\n# torch.save(model.state_dict(), \"model.pth\")\n# \n# Восстановление:\n# model = MyModel()\n# model.load_state_dict(torch.load(\"model.pth\"))\n# model.eval()\nprint(\"save/load: state_dict(), model.pth\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-n-torch-save-model-state-d-e-201-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([[1,2],[3",
    "shortDesc": "torch.cat — конкатенация по существующей оси. torch.stack — создаёт новую ось. cat по dim=0 — по стр...",
    "theory": "<p>torch.cat — конкатенация по существующей оси. torch.stack — создаёт новую ось. cat по dim=0 — по строкам (как np.vstack). cat по dim=1 — по столбцам. stack — добавляет измерение.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.cat.html', true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\na = torch.tensor([[1,2],[3,4]])\nb = torch.tensor([[5,6],[7,8]])\nprint(\"cat dim=0:\", torch.cat([a,b], dim=0).shape)\nprint(\"cat dim=1:\", torch.cat([a,b], dim=1).shape)\nprint(\"stack:\", torch.stack([a,b]).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-e-202-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([1,2,3,4,",
    "shortDesc": "view — изменение формы (требует непрерывную память). reshape — как view, но может копировать. unsque...",
    "theory": "<p>view — изменение формы (требует непрерывную память). reshape — как view, но может копировать. unsqueeze(dim) — добавить ось. squeeze(dim) — убрать ось размера 1. permute — переставить оси. transpose — обменять 2 оси.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.Tensor.view.html', true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\na = torch.tensor([1,2,3,4,5,6])\nprint(\"view:\", a.view(2,3).shape)\nprint(\"reshape:\", a.reshape(3,2).shape)\nprint(\"unsqueeze:\", a.unsqueeze(0).shape)\nprint(\"squeeze:\", a.unsqueeze(0).squeeze(0).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-2-3-4-e-203-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204",
    "library": "PyTorch",
    "title": "import torch\\na = torch.randn(3, 3)\\npri",
    "shortDesc": "max/min — максимум/минимум. argmax/argmin — индекс. topk(k) — k наибольших. clamp(min, max) — обрезк...",
    "theory": "<p>max/min — максимум/минимум. argmax/argmin — индекс. topk(k) — k наибольших. clamp(min, max) — обрезка (как np.clip). abs, ceil, floor, round — привычные математические.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.max.html', true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\na = torch.randn(3, 3)\nprint(\"max:\", a.max())\nprint(\"argmax:\", a.argmax())\nprint(\"topk:\", a.flatten().topk(3))\nprint(\"clamp:\", torch.clamp(a, min=-0.5, max=0.5))",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-randn-3-3-npri-e-204-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205",
    "library": "PyTorch",
    "title": "import torch\\na = torch.tensor([1.0, 2.0",
    "shortDesc": "dot — скалярное произведение (1D). matmul / @ — матричное умножение (как np.dot). mm — строго 2D×2D....",
    "theory": "<p>dot — скалярное произведение (1D). matmul / @ — матричное умножение (как np.dot). mm — строго 2D×2D. bmm — батч матричное (3D). einsum — обобщённая запись Эйнштейна.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.matmul.html', true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\na = torch.tensor([1.0, 2.0, 3.0])\nb = torch.tensor([4.0, 5.0, 6.0])\nprint(\"dot:\", torch.dot(a, b))\nA = torch.randn(2, 3)\nB = torch.randn(3, 4)\nprint(\"matmul:\", torch.matmul(A, B).shape)\nprint(\"@ operator:\", (A @ B).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-na-torch-tensor-1-0-2-0-e-205-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206",
    "library": "PyTorch",
    "title": "import torch\\nprint(\"zeros:\", torch.zero",
    "shortDesc": "Создание тензоров: zeros, ones, randn (нормальное), rand (равномерное [0,1]), arange, linspace, eye ...",
    "theory": "<p>Создание тензоров: zeros, ones, randn (нормальное), rand (равномерное [0,1]), arange, linspace, eye (единичная матрица), full(size, val), empty (без инициализации). _like — как другой тензор (zeros_like, randn_like).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nprint-zeros-torch-zero-e-206-code'></div><p style=\"margin-top:20px;\"><a href=\"PT_G + 'torch.zeros.html', true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nprint(\"zeros:\", torch.zeros(2, 3).shape)\nprint(\"ones:\", torch.ones(2, 3).shape)\nprint(\"randn:\", torch.randn(2, 3).shape)\nprint(\"arange:\", torch.arange(0, 10, 2))\nprint(\"linspace:\", torch.linspace(0, 1, 5))\nprint(\"eye:\", torch.eye(3).shape)",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nprint-zeros-torch-zero-e-206-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Инициализация весов: xavier_uniform_ — для tanh/sigmoid. kaiming_normal_ — для ReLU. zeros_ — для bi...",
    "theory": "<p>Инициализация весов: xavier_uniform_ — для tanh/sigmoid. kaiming_normal_ — для ReLU. zeros_ — для bias. model.apply(fn) — применяет функцию рекурсивно ко всем подмодулям. Правильная инициализация ускоряет обучение.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.init.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# --- Инициализация весов ---\ndef init_weights(m):\n    if isinstance(m, nn.Linear):\n        nn.init.xavier_uniform_(m.weight)\n        nn.init.zeros_(m.bias)\n    elif isinstance(m, nn.Conv2d):\n        nn.init.kaiming_normal_(m.weight, mode=\"fan_out\")\n\n# model.apply(init_weights)\nprint(\"xavier_uniform_, kaiming_normal_, zeros_\")\nprint(\"model.apply(fn) — рекурсивно ко всем модулям\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-207-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Mixed Precision Training — FP16 для прямого прохода (быстрее на GPU), FP32 для градиентов (точнее). ...",
    "theory": "<p>Mixed Precision Training — FP16 для прямого прохода (быстрее на GPU), FP32 для градиентов (точнее). autocast — автоматически выбирает точность. GradScaler — масштабирует loss для предотвращения underflow. Ускорение 2-3× на NVIDIA Tensor Cores.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/amp.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# --- Mixed Precision (ускорение на GPU) ---\n# scaler = torch.cuda.amp.GradScaler()\n# for X, y in loader:\n#     with torch.cuda.amp.autocast():\n#         output = model(X)\n#         loss = criterion(output, y)\n#     scaler.scale(loss).backward()\n#     scaler.step(optimizer)\n#     scaler.update()\n#     optimizer.zero_grad()\nprint(\"Mixed Precision: autocast + GradScaler\")\nprint(\"FP16 для forward, FP32 для backward\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-208-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Замораживание параметров: requires_grad = False — параметр не обновляется. named_parameters() — итер...",
    "theory": "<p>Замораживание параметров: requires_grad = False — параметр не обновляется. named_parameters() — итерация с именами. Передавайте в optimizer только обучаемые. Для fine-tuning: заморозить всё кроме последних слоёв.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/autograd.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# --- Замораживание слоёв ---\n# for name, param in model.named_parameters():\n#     if \"layer4\" not in name:\n#         param.requires_grad = False\n#\n# # Проверить что заморожено:\n# for name, param in model.named_parameters():\n#     print(name, param.requires_grad)\n#\n# # В optimizer только обучаемые:\n# optimizer = torch.optim.Adam(filter(lambda p: p.requires_grad, model.parameters()), lr=1e-4)\nprint(\"requires_grad = False -> заморожен\")\nprint(\"filter(requires_grad) в optimizer\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-209-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "Early Stopping — останавливаем обучение если val_loss не улучшается patience эпох. Сохраняем лучшую ...",
    "theory": "<p>Early Stopping — останавливаем обучение если val_loss не улучшается patience эпох. Сохраняем лучшую модель. Предотвращает переобучение. В sklearn — через callbacks или вручную. В PyTorch — реализуется вручную (нет встроенного).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# --- Early Stopping (ранняя остановка) ---\n# best_loss = float(\"inf\")\n# patience, counter = 5, 0\n# for epoch in range(1000):\n#     val_loss = validate()\n#     if val_loss < best_loss:\n#         best_loss = val_loss\n#         counter = 0\n#         torch.save(model.state_dict(), \"best_model.pkg\")\n#     else:\n#         counter += 1\n#         if counter >= patience:\n#             print(\"Early stopping at epoch\", epoch)\n#             break\nprint(\"Early Stopping: patience, best_loss, save best\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-210-code"
      }
    ]
  },
  {
    "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211",
    "library": "PyTorch",
    "title": "import torch\\nimport torch.nn as nn\\n\\n#",
    "shortDesc": "nn.Sequential — контейнер, вызывает слои по порядку. Для простых сетей. nn.ModuleList — список модул...",
    "theory": "<p>nn.Sequential — контейнер, вызывает слои по порядку. Для простых сетей. nn.ModuleList — список модулей (регистрирует параметры), но forward пишете сами. Для сложных архитектур (skip connections, разветвления). nn.ModuleDict — по именам.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html#containers, true\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\n# --- nn.Sequential vs nn.ModuleList ---\n# Sequential — вызывает по порядку:\nseq = nn.Sequential(\n    nn.Linear(10, 20),\n    nn.ReLU(),\n    nn.Linear(20, 5)\n)\nprint(\"Sequential:\", seq)\n\n# ModuleList — ручной forward:\n# class Net(nn.Module):\n#     def __init__(self):\n#         super().__init__()\n#         self.layers = nn.ModuleList([nn.Linear(10, 10) for _ in range(3)])\n#     def forward(self, x):\n#         for layer in self.layers:\n#             x = F.relu(layer(x))\n#         return x\nprint(\"ModuleList: ручное управление в forward\")",
        "solution": "",
        "hints": [],
        "id": "pytorch-import-torch-nimport-torch-nn-as-nn-n-n-e-211-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-e-212",
    "library": "PyTorch",
    "title": "torch.nn",
    "shortDesc": "Модуль нейронных сетей: классы слоёв (Linear, Conv2d, LSTM, Transformer и т.д.), функции потерь (MSE...",
    "theory": "<p>Модуль нейронных сетей: классы слоёв (Linear, Conv2d, LSTM, Transformer и т.д.), функции потерь (MSELoss, CrossEntropyLoss и др.), контейнеры (ModuleList, Sequential). Вы создаёте модель из nn.Module и вложенных nn-модулей; у каждого слоя есть параметры (weights, bias), которые обучаются через backward. Здесь же: нормализация (BatchNorm, LayerNorm), пулинг (MaxPool2d, AdaptiveAvgPool2d), дропаут, эмбеддинги. Это основной модуль для построения архитектуры модели. Документация по каждому классу содержит сигнатуры, параметры и примеры.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nn-e-212-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-e-212-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-functional-f-e-213",
    "library": "PyTorch",
    "title": "torch.nn.functional (F)",
    "shortDesc": "Функциональный аналог torch.nn: те же операции, но как функции, без хранения состояния. Например F.r...",
    "theory": "<p>Функциональный аналог torch.nn: те же операции, но как функции, без хранения состояния. Например F.relu(x), F.conv2d(x, weight), F.cross_entropy(logits, target). Удобно для разовых вызовов, кастомных forward (когда не нужен отдельный слой с параметрами) и когда параметры передаёте вручную. Не путать: nn.ReLU() — слой с параметрами (их нет у ReLU); F.relu() — просто функция. В forward часто пишут F.relu(self.fc(x)) вместо создания nn.ReLU() в __init__. Полный список функций: активации, свёртки, пулинг, loss, утилиты (pad, interpolate и т.д.).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nn-functional-f-e-213-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.functional.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.functional (F))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-functional-f-e-213-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-tensor-e-214",
    "library": "PyTorch",
    "title": "torch.Tensor",
    "shortDesc": "Класс тензора — многомерный массив с поддержкой autograd. Создание: torch.tensor(data), torch.zeros(...",
    "theory": "<p>Класс тензора — многомерный массив с поддержкой autograd. Создание: torch.tensor(data), torch.zeros(), torch.ones(), torch.randn(). Атрибуты: .shape, .dtype, .device, .requires_grad. Методы: .backward(), .item(), .numpy(), .to(device), .view(), .reshape(), .detach(). Тензор участвует в графе вычислений; при .backward() градиенты распространяются по графу. Документация Tensor описывает все операции и методы. Для новичка важно: тензоры бывают на CPU и CUDA; данные и модель должны быть на одном device; .detach() отключает градиент для части графа.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-tensor-e-214-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Tensor)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-tensor-e-214-code"
      }
    ]
  },
  {
    "id": "pytorch-tensor-attributes-tensor-views-e-215",
    "library": "PyTorch",
    "title": "Tensor Attributes / Tensor Views",
    "shortDesc": "Атрибуты тензора: shape, stride, dtype, device, requires_grad, grad, is_leaf, grad_fn. Shape — разме...",
    "theory": "<p>Атрибуты тензора: shape, stride, dtype, device, requires_grad, grad, is_leaf, grad_fn. Shape — размеры по осям; stride — шаги в памяти при движении по индексам. Views (виды) — тензоры, разделяющие память с исходным: view(), reshape() (иногда копия), transpose(), expand(), narrow(). Изменение view меняет исходный тензор. Для копии используйте .clone(). Документация по атрибутам и view-операциям помогает отлаживать форму и избегать лишних копий.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-tensor-attributes-tensor-views-e-215-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensor_view.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Tensor Attributes / Tensor Views)",
        "solution": "",
        "hints": [],
        "id": "pytorch-tensor-attributes-tensor-views-e-215-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-amp-automatic-mixed-precision-e-216",
    "library": "PyTorch",
    "title": "torch.amp (Automatic Mixed Precision)",
    "shortDesc": "Смешанная точность: часть вычислений в float16 (половинная точность) для ускорения на GPU, критичные...",
    "theory": "<p>Смешанная точность: часть вычислений в float16 (половинная точность) для ускорения на GPU, критичные участки — в float32. Используется autocast (контекст, в котором операции автоматически выбирают dtype) и GradScaler (масштабирование градиентов, чтобы не терять малые значения при float16). Значительно ускоряет обучение на современных GPU (Volta, Ampere и новее) и уменьшает память. В коде: with torch.amp.autocast(device_type=\"cuda\"): out = model(x); scaler.scale(loss).backward(); scaler.step(optimizer). Подробно: когда включать, какие слои исключать, настройка scaler.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-amp-automatic-mixed-precision-e-216-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/amp.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.amp (Automatic Mixed Precision))",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-amp-automatic-mixed-precision-e-216-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-autograd-e-217",
    "library": "PyTorch",
    "title": "torch.autograd",
    "shortDesc": "Автоматическое дифференцирование: механизм, который строит граф операций и по вызову .backward() счи...",
    "theory": "<p>Автоматическое дифференцирование: механизм, который строит граф операций и по вызову .backward() считает градиенты. Функции: torch.autograd.backward(loss), torch.autograd.grad(outputs, inputs) — градиенты без вызова backward на loss. Контексты: torch.no_grad() — отключить запись графа (инференс, экономим память); torch.inference_mode() — ещё быстрее. Переменная requires_grad=True включается у параметров модели и у тензоров, от которых нужен градиент. Документация объясняет граф, детекцию градиентов и тонкости (retain_graph, create_graph для вторых производных).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-autograd-e-217-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/autograd.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.autograd)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-autograd-e-217-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-library-e-218",
    "library": "PyTorch",
    "title": "torch.library",
    "shortDesc": "Низкоуровневый API для регистрации пользовательских операторов (операций) в C++ и привязки их к PyTo...",
    "theory": "<p>Низкоуровневый API для регистрации пользовательских операторов (операций) в C++ и привязки их к PyTorch. Нужен для кастомных ядер, интеграции с другими библиотеками или оптимизации под железо. Новичку обычно не требуется; используется при расширении PyTorch или написании своих CUDA-операций.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-library-e-218-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/library.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.library)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-library-e-218-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-accelerator-e-219",
    "library": "PyTorch",
    "title": "torch.accelerator",
    "shortDesc": "Унифицированный API для выбора устройства (CPU, CUDA, MPS и т.д.): определение доступного устройства...",
    "theory": "<p>Унифицированный API для выбора устройства (CPU, CUDA, MPS и т.д.): определение доступного устройства, перенос тензоров и моделей. Упрощает код, который должен работать на разных бэкендах без явных if cuda else cpu.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-accelerator-e-219-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/accelerator.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.accelerator)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-accelerator-e-219-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220",
    "library": "PyTorch",
    "title": "torch.cpu / torch.cuda / torch.mps / tor",
    "shortDesc": "Бэкенды устройств. torch.cpu — операции на процессоре. torch.cuda — NVIDIA GPU: перенос тензоров и м...",
    "theory": "<p>Бэкенды устройств. torch.cpu — операции на процессоре. torch.cuda — NVIDIA GPU: перенос тензоров и моделей на GPU, синхронизация (torch.cuda.synchronize()), управление памятью (empty_cache(), memory_allocated()). torch.mps — Apple Silicon (M1/M2) GPU. torch.xpu — Intel GPU. torch.mtia — Meta Training Inference Accelerator. Обычно используют device = torch.device(\"cuda\" if torch.cuda.is_available() else \"cpu\") и .to(device). Документация по каждому бэкенду: специфичные функции, лимиты, лучшие практики.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.cpu / torch.cuda / torch.mps / torch.xpu / torch.mtia)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cpu-torch-cuda-torch-mps-tor-e-220-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221",
    "library": "PyTorch",
    "title": "torch.cuda.memory / torch.mtia.memory",
    "shortDesc": "Управление памятью GPU: память выделяется под тензоры автоматически; при нехватке — OOM. Функции: to...",
    "theory": "<p>Управление памятью GPU: память выделяется под тензоры автоматически; при нехватке — OOM. Функции: torch.cuda.empty_cache() — освободить кэш неиспользуемой памяти; memory_allocated(), max_memory_allocated() — статистика; set_per_process_memory_fraction() — лимит. Полезно при отладке OOM и при многопроцессном обучении. torch.mtia.memory — аналогично для MTIA.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/cuda.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.cuda.memory / torch.mtia.memory)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-cuda-memory-torch-mtia-memory-e-221-code"
      }
    ]
  },
  {
    "id": "pytorch-meta-device-e-222",
    "library": "PyTorch",
    "title": "Meta device",
    "shortDesc": "«Мета»-устройство: тензоры без реальных данных, только форма и dtype. Нужно для быстрой проверки фор...",
    "theory": "<p>«Мета»-устройство: тензоры без реальных данных, только форма и dtype. Нужно для быстрой проверки формы модели и подсчёта параметров без выделения памяти на GPU/CPU. Используется в больших моделях и при распределённой инициализации.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-meta-device-e-222-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/meta.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Meta device)",
        "solution": "",
        "hints": [],
        "id": "pytorch-meta-device-e-222-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-backends-e-223",
    "library": "PyTorch",
    "title": "torch.backends",
    "shortDesc": "Бэкенды для низкоуровневых библиотек: cuDNN (torch.backends.cudnn), CUDA (cuda), MPS, MKL и т.д. Нас...",
    "theory": "<p>Бэкенды для низкоуровневых библиотек: cuDNN (torch.backends.cudnn), CUDA (cuda), MPS, MKL и т.д. Настройки: cudnn.benchmark = True — авто-подбор быстрых алгоритмов свёртки (рекомендуется при фиксированном размере входа); cudnn.deterministic — воспроизводимость в ущерб скорости. Меняют глобальное поведение PyTorch на выбранном устройстве.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-backends-e-223-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/backends.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.backends)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-backends-e-223-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-export-e-224",
    "library": "PyTorch",
    "title": "torch.export",
    "shortDesc": "Экспорт модели в формат вне PyTorch: ONNX, TorchScript, другие графы. export() строит граф из модели...",
    "theory": "<p>Экспорт модели в формат вне PyTorch: ONNX, TorchScript, другие графы. export() строит граф из модели и примера входа; затем граф можно сохранить и запускать без Python (деплой на сервер, мобильные устройства). Связано с torch.onnx и torch.jit; документация описывает ограничения и поддерживаемые конструкции.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-export-e-224-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/export.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.export)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-export-e-224-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-e-225",
    "library": "PyTorch",
    "title": "torch.distributed",
    "shortDesc": "Распределённое обучение на нескольких GPU или узлах. Основные компоненты: инициализация (init_proces...",
    "theory": "<p>Распределённое обучение на нескольких GPU или узлах. Основные компоненты: инициализация (init_process_group), обёртка модели (DistributedDataParallel — DDP), распределённый DataLoader (DistributedSampler). Каждый процесс работает со своей частью данных; градиенты синхронизируются при backward. Подмодули: tensor (distributed тензоры), algorithms (например join для неравномерных данных), elastic (перезапуск при падении узлов), fsdp (полное шардирование параметров для очень больших моделей), checkpoint, pipelining. Нужно при обучении на кластере или многопроцессном обучении на одной машине.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-distributed-e-225-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/distributed.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributed)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-e-225-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226",
    "library": "PyTorch",
    "title": "torch.distributed.fsdp / fully_shard",
    "shortDesc": "FSDP (Fully Sharded Data Parallel): параметры модели разбиваются между процессами; каждый процесс хр...",
    "theory": "<p>FSDP (Fully Sharded Data Parallel): параметры модели разбиваются между процессами; каждый процесс хранит только свою часть. Позволяет обучать модели, не помещающиеся в память одного GPU. Альтернатива классическому DDP при огромном числе параметров. Требует понимания распределённого обучения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-distributed-fsdp-fully-shard-e-226-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/fsdp.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributed.fsdp / fully_shard)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-fsdp-fully-shard-e-226-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227",
    "library": "PyTorch",
    "title": "torch.distributed.tensor.parallel / opti",
    "shortDesc": "Tensor parallel — разбиение вычислений слоёв между устройствами (например большая матрица умножается...",
    "theory": "<p>Tensor parallel — разбиение вычислений слоёв между устройствами (например большая матрица умножается по частям). distributed.optim — оптимизаторы для распределённого сценария. checkpoint — сохранение/загрузка распределённого состояния. pipelining — pipeline parallelism: слои модели на разных устройствах, батчи проходят по конвейеру. Используется в очень больших моделях (сотни миллиардов параметров).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-distributed-tensor-parallel-opti-e-227-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/distributed.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributed.tensor.parallel / optim / checkpoint / pipelining)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributed-tensor-parallel-opti-e-227-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-distributions-e-228",
    "library": "PyTorch",
    "title": "torch.distributions",
    "shortDesc": "Распределения вероятностей: Normal, Bernoulli, Categorical, Uniform, MultivariateNormal и многие дру...",
    "theory": "<p>Распределения вероятностей: Normal, Bernoulli, Categorical, Uniform, MultivariateNormal и многие другие. Методы: .sample(), .log_prob(x), .entropy(). Нужны для VAE, reinforcement learning (политики), байесовских моделей и любого кода, где явно работают с распределениями. Интеграция с autograd: градиенты по параметрам распределения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-distributions-e-228-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/distributions.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.distributions)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-distributions-e-228-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-compiler-e-229",
    "library": "PyTorch",
    "title": "torch.compiler",
    "shortDesc": "Компилятор PyTorch 2: torch.compile(model) — JIT-компиляция модели в оптимизированный граф (TorchDyn...",
    "theory": "<p>Компилятор PyTorch 2: torch.compile(model) — JIT-компиляция модели в оптимизированный граф (TorchDynamo + индуктор). Значительно ускоряет обучение и инференс без изменения кода модели. Параметры: mode (\"default\", \"reduce-overhead\", \"max-autotune\"), backend. Рекомендуется включать для новых проектов; некоторые конструкции пока не поддерживаются — смотреть предупреждения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-compiler-e-229-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/compiler.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.compiler)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-compiler-e-229-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-fft-e-230",
    "library": "PyTorch",
    "title": "torch.fft",
    "shortDesc": "Быстрое преобразование Фурье: fft.fft(), fft.ifft(), fft.rfft() (для вещественных сигналов), fft.fft...",
    "theory": "<p>Быстрое преобразование Фурье: fft.fft(), fft.ifft(), fft.rfft() (для вещественных сигналов), fft.fft2() для 2D (изображения). Используется в обработке сигналов, спектральном анализе, некоторых слоях в нейросетях. Возвращает комплексные тензоры; для вещественного входа rfft экономит память.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-fft-e-230-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/fft.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.fft)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fft-e-230-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-func-e-231",
    "library": "PyTorch",
    "title": "torch.func",
    "shortDesc": "Функциональные трансформации: vmap (векторизация по дополнительному измерению), grad, jacrev/jacfwd ...",
    "theory": "<p>Функциональные трансформации: vmap (векторизация по дополнительному измерению), grad, jacrev/jacfwd (якобианы), hessian, checkpoint (экономия памяти). Удобно для кастомной логики с градиентами без явного цикла по батчу или для вторых производных. Замена части устаревшего torch.autograd.functional.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-func-e-231-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/func.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.func)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-func-e-231-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-futures-e-232",
    "library": "PyTorch",
    "title": "torch.futures",
    "shortDesc": "Асинхронные будущие результаты (Future): отложенное выполнение и получение результата позже. Использ...",
    "theory": "<p>Асинхронные будущие результаты (Future): отложенное выполнение и получение результата позже. Используется внутри распределённого обучения и при асинхронных операциях. Новичку редко нужен.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-futures-e-232-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/future.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.futures)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-futures-e-232-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-fx-e-233",
    "library": "PyTorch",
    "title": "torch.fx",
    "shortDesc": "Framework для трансформации графов моделей: трассировка nn.Module в граф (symbolic trace), замена/вс...",
    "theory": "<p>Framework для трансформации графов моделей: трассировка nn.Module в граф (symbolic trace), замена/вставка узлов, вывод оптимизированного кода. Нужен для квантизации, кастомных компиляторов, анализа графа. Продвинутый инструмент; обычно не требуется на старте.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-fx-e-233-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/fx.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.fx)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-fx-e-233-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-hub-e-234",
    "library": "PyTorch",
    "title": "torch.hub",
    "shortDesc": "Загрузка предобученных моделей и скриптов с репозитория (GitHub). torch.hub.load(\"pytorch/vision\", \"...",
    "theory": "<p>Загрузка предобученных моделей и скриптов с репозитория (GitHub). torch.hub.load(\"pytorch/vision\", \"resnet18\", pretrained=True) — пример. Удобно для воспроизведения чужих моделей и быстрого прототипирования. Документация: список моделей, кэш, свои репозитории.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-hub-e-234-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/hub.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.hub)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-hub-e-234-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-jit-e-235",
    "library": "PyTorch",
    "title": "torch.jit",
    "shortDesc": "TorchScript: компиляция моделей в граф, независимый от Python, для деплоя (C++, мобильные устройства...",
    "theory": "<p>TorchScript: компиляция моделей в граф, независимый от Python, для деплоя (C++, мобильные устройства) и оптимизации. trace — запись графа по примеру входа; script — разбор кода с аннотациями. Ограничения: не весь Python поддерживается. Используется при экспорте в production.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-jit-e-235-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/jit.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.jit)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-jit-e-235-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-linalg-e-236",
    "library": "PyTorch",
    "title": "torch.linalg",
    "shortDesc": "Линейная алгебра: решения систем (solve, lstsq), разложения (cholesky, svd, qr), нормы (norm), опред...",
    "theory": "<p>Линейная алгебра: решения систем (solve, lstsq), разложения (cholesky, svd, qr), нормы (norm), определитель, собственные значения. Аналог numpy.linalg с поддержкой GPU и autograd. Используется в моделях с матричными операциями и в научных расчётах.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-linalg-e-236-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/linalg.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.linalg)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-linalg-e-236-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-monitor-e-237",
    "library": "PyTorch",
    "title": "torch.monitor",
    "shortDesc": "Мониторинг событий обучения (логирование, метрики) через подписки. Для интеграции с внешними система...",
    "theory": "<p>Мониторинг событий обучения (логирование, метрики) через подписки. Для интеграции с внешними системами мониторинга.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-monitor-e-237-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/monitor.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.monitor)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-monitor-e-237-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-signal-e-238",
    "library": "PyTorch",
    "title": "torch.signal",
    "shortDesc": "Обработка сигналов: оконные функции, свёртки для сигналов, спектрограммы. Дополнение к torch.fft для...",
    "theory": "<p>Обработка сигналов: оконные функции, свёртки для сигналов, спектрограммы. Дополнение к torch.fft для задач аудио и одномерных сигналов.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-signal-e-238-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/signal.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.signal)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-signal-e-238-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-special-e-239",
    "library": "PyTorch",
    "title": "torch.special",
    "shortDesc": "Специальные математические функции: гамма, бета, эрфи, логическая сумма (logsumexp) и т.д. Нужны в в...",
    "theory": "<p>Специальные математические функции: гамма, бета, эрфи, логическая сумма (logsumexp) и т.д. Нужны в вероятностных моделях и некоторых формулах потерь.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-special-e-239-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/special.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.special)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-special-e-239-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-overrides-e-240",
    "library": "PyTorch",
    "title": "torch.overrides",
    "shortDesc": "Переопределение поведения встроенных функций PyTorch для своих типов тензоров (кастомные классы с __...",
    "theory": "<p>Переопределение поведения встроенных функций PyTorch для своих типов тензоров (кастомные классы с __torch_function__). Продвинутое использование при разработке библиотек поверх PyTorch.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-overrides-e-240-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/overrides.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.overrides)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-overrides-e-240-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nativert-e-241",
    "library": "PyTorch",
    "title": "torch.nativert",
    "shortDesc": "Нативный рантайм для скомпилированных моделей (деплой без Python). Специфичная тема деплоя....",
    "theory": "<p>Нативный рантайм для скомпилированных моделей (деплой без Python). Специфичная тема деплоя.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nativert-e-241-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nativert.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nativert)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nativert-e-241-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-package-e-242",
    "library": "PyTorch",
    "title": "torch.package",
    "shortDesc": "Упаковка модели и зависимостей в один файл для переноса и деплоя. Альтернатива/дополнение к torch.sa...",
    "theory": "<p>Упаковка модели и зависимостей в один файл для переноса и деплоя. Альтернатива/дополнение к torch.save и TorchScript.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-package-e-242-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/package.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.package)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-package-e-242-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-profiler-e-243",
    "library": "PyTorch",
    "title": "torch.profiler",
    "shortDesc": "Профилирование: замер времени выполнения операций, использование памяти, узкие места. Контекст torch...",
    "theory": "<p>Профилирование: замер времени выполнения операций, использование памяти, узкие места. Контекст torch.profiler.profile() с schedule и on_trace_ready; экспорт в Chrome trace. Необходим при оптимизации скорости и памяти.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-profiler-e-243-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/profiler.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.profiler)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-profiler-e-243-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-init-e-244",
    "library": "PyTorch",
    "title": "torch.nn.init",
    "shortDesc": "Инициализация весов слоёв: init.xavier_uniform_(), init.kaiming_normal_(), init.orthogonal_() и др. ...",
    "theory": "<p>Инициализация весов слоёв: init.xavier_uniform_(), init.kaiming_normal_(), init.orthogonal_() и др. Применяются к параметрам модели после создания; влияют на сходимость. По умолчанию многие слои уже имеют разумную инициализацию; кастомная нужна для нестандартных архитектур.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nn-init-e-244-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.init.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.init)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-init-e-244-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nn-attention-e-245",
    "library": "PyTorch",
    "title": "torch.nn.attention",
    "shortDesc": "Слои и утилиты для механизма внимания (attention): scaled dot-product, multihead и т.д. Используется...",
    "theory": "<p>Слои и утилиты для механизма внимания (attention): scaled dot-product, multihead и т.д. Используется в трансформерах. В документации — форматы входа/выхода и параметры (num_heads, dropout).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nn-attention-e-245-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nn.attention.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nn.attention)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nn-attention-e-245-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-onnx-e-246",
    "library": "PyTorch",
    "title": "torch.onnx",
    "shortDesc": "Экспорт модели в формат ONNX для запуска в других фреймворках (ONNX Runtime, TensorRT и т.д.). torch...",
    "theory": "<p>Экспорт модели в формат ONNX для запуска в других фреймворках (ONNX Runtime, TensorRT и т.д.). torch.onnx.export(model, example_input, \"model.onnx\") — базовый вызов. Нужны при деплое вне PyTorch; некоторые операции требуют обходных путей или неподдерживаются.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-onnx-e-246-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/onnx.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.onnx)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-onnx-e-246-code"
      }
    ]
  },
  {
    "id": "pytorch-complex-numbers-e-247",
    "library": "PyTorch",
    "title": "Complex Numbers",
    "shortDesc": "Поддержка комплексных тензоров (dtype complex64, complex128): арифметика, fft, linalg. Нужно в физик...",
    "theory": "<p>Поддержка комплексных тензоров (dtype complex64, complex128): арифметика, fft, linalg. Нужно в физике, обработке сигналов и части моделей.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-complex-numbers-e-247-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/complex_numbers.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Complex Numbers)",
        "solution": "",
        "hints": [],
        "id": "pytorch-complex-numbers-e-247-code"
      }
    ]
  },
  {
    "id": "pytorch-ddp-communication-hooks-e-248",
    "library": "PyTorch",
    "title": "DDP Communication Hooks",
    "shortDesc": "Хуки для кастомной логики синхронизации градиентов в DistributedDataParallel (сжатие, асинхронность ...",
    "theory": "<p>Хуки для кастомной логики синхронизации градиентов в DistributedDataParallel (сжатие, асинхронность и т.д.). Для продвинутой настройки распределённого обучения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-ddp-communication-hooks-e-248-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/ddp.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(DDP Communication Hooks)",
        "solution": "",
        "hints": [],
        "id": "pytorch-ddp-communication-hooks-e-248-code"
      }
    ]
  },
  {
    "id": "pytorch-quantization-e-249",
    "library": "PyTorch",
    "title": "Quantization",
    "shortDesc": "Квантизация весов и активаций (int8, float16 и др.) для ускорения и уменьшения размера модели на CPU...",
    "theory": "<p>Квантизация весов и активаций (int8, float16 и др.) для ускорения и уменьшения размера модели на CPU/GPU. Динамическая, статическая и QAT (quantization-aware training). Важно для деплоя на edge и серверах; требует калибровки или дообучения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-quantization-e-249-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/quantization.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Quantization)",
        "solution": "",
        "hints": [],
        "id": "pytorch-quantization-e-249-code"
      }
    ]
  },
  {
    "id": "pytorch-distributed-rpc-framework-e-250",
    "library": "PyTorch",
    "title": "Distributed RPC Framework",
    "shortDesc": "Удалённый вызов процедур (RPC) между процессами: запуск функций на других узлах, передача тензоров. ...",
    "theory": "<p>Удалённый вызов процедур (RPC) между процессами: запуск функций на других узлах, передача тензоров. Используется в сложных распределённых сценариях (например части модели на разных машинах).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-distributed-rpc-framework-e-250-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/rpc.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Distributed RPC Framework)",
        "solution": "",
        "hints": [],
        "id": "pytorch-distributed-rpc-framework-e-250-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-random-e-251",
    "library": "PyTorch",
    "title": "torch.random",
    "shortDesc": "Генерация случайных чисел: torch.manual_seed(), torch.randn(), torch.randint() и т.д.; генераторы дл...",
    "theory": "<p>Генерация случайных чисел: torch.manual_seed(), torch.randn(), torch.randint() и т.д.; генераторы для воспроизводимости (torch.Generator). Документация по всем случайным функциям и лучшим практикам (установка seed на каждом процессе при DDP).</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-random-e-251-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/random.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.random)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-random-e-251-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-masked-e-252",
    "library": "PyTorch",
    "title": "torch.masked",
    "shortDesc": "Операции с масками: masked tensor (тензор с маской пропущенных/невалидных элементов). Для неравномер...",
    "theory": "<p>Операции с масками: masked tensor (тензор с маской пропущенных/невалидных элементов). Для неравномерных последовательностей и пропусков без заполнения нулями.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-masked-e-252-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/masked.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.masked)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-masked-e-252-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-nested-e-253",
    "library": "PyTorch",
    "title": "torch.nested",
    "shortDesc": "Вложенные тензоры (nested tensor): последовательности переменной длины в одном тензоре без паддинга....",
    "theory": "<p>Вложенные тензоры (nested tensor): последовательности переменной длины в одном тензоре без паддинга. Экономия памяти и упрощение кода для NLP и аудио.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-nested-e-253-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/nested.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.nested)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-nested-e-253-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-size-e-254",
    "library": "PyTorch",
    "title": "torch.Size",
    "shortDesc": "Класс размера тензора: результат .shape, поддерживает индексацию и арифметику (например size[0] * si...",
    "theory": "<p>Класс размера тензора: результат .shape, поддерживает индексацию и арифметику (например size[0] * size[1]). Используется при проверке форм и динамическом построении слоёв.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-size-e-254-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensors.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Size)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-size-e-254-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-sparse-e-255",
    "library": "PyTorch",
    "title": "torch.sparse",
    "shortDesc": "Разрежённые тензоры: хранение только ненулевых элементов. Экономия памяти для графов, эмбеддингов с ...",
    "theory": "<p>Разрежённые тензоры: хранение только ненулевых элементов. Экономия памяти для графов, эмбеддингов с очень большим числом нулей. Операции: sparse_coo_tensor(), to_dense(); не все операции поддерживают sparse.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-sparse-e-255-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/sparse.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.sparse)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-sparse-e-255-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-storage-e-256",
    "library": "PyTorch",
    "title": "torch.Storage",
    "shortDesc": "Низкоуровневое хранилище данных тензора (1D непрерывный буфер). Обычно не используется напрямую; нуж...",
    "theory": "<p>Низкоуровневое хранилище данных тензора (1D непрерывный буфер). Обычно не используется напрямую; нужно при работе с .data_ptr() или при написании своих расширений.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-storage-e-256-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/storage.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.Storage)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-storage-e-256-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-testing-e-257",
    "library": "PyTorch",
    "title": "torch.testing",
    "shortDesc": "Утилиты для тестирования: сравнение тензоров (assert_close), проверка градиентов. Удобно в unit-тест...",
    "theory": "<p>Утилиты для тестирования: сравнение тензоров (assert_close), проверка градиентов. Удобно в unit-тестах моделей и слоёв.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-testing-e-257-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/testing.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.testing)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-testing-e-257-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-data-e-258",
    "library": "PyTorch",
    "title": "torch.utils.data",
    "shortDesc": "Dataset, DataLoader, Sampler и подклассы. Dataset — абстракция датасета (__len__, __getitem__); Data...",
    "theory": "<p>Dataset, DataLoader, Sampler и подклассы. Dataset — абстракция датасета (__len__, __getitem__); DataLoader — батчи, shuffle, num_workers; IterableDataset для потоковых данных. Документация по кастомным датасетам, коллайтам (обработка батча) и многопроцессной загрузке.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-utils-data-e-258-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/data.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.data)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-data-e-258-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-checkpoint-e-259",
    "library": "PyTorch",
    "title": "torch.utils.checkpoint",
    "shortDesc": "Gradient checkpointing: пересчёт активаций при backward вместо хранения. Сильно экономит память при ...",
    "theory": "<p>Gradient checkpointing: пересчёт активаций при backward вместо хранения. Сильно экономит память при обучении глубоких сетей; время обучения увеличивается. Используется когда модель не влезает в GPU.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-utils-checkpoint-e-259-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/checkpoint.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.checkpoint)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-checkpoint-e-259-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-tensorboard-e-260",
    "library": "PyTorch",
    "title": "torch.utils.tensorboard",
    "shortDesc": "Интеграция с TensorBoard: логирование скаляров, графиков, изображений, гистограмм весов. Writer.add_...",
    "theory": "<p>Интеграция с TensorBoard: логирование скаляров, графиков, изображений, гистограмм весов. Writer.add_scalar(), add_histogram() и т.д. Стандартный способ визуализации обучения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-utils-tensorboard-e-260-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/tensorboard.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.tensorboard)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-tensorboard-e-260-code"
      }
    ]
  },
  {
    "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261",
    "library": "PyTorch",
    "title": "torch.utils.benchmark / collect_env / fl",
    "shortDesc": "benchmark — точный замер времени операций (Timer); collect_env — вывод информации о системе и версия...",
    "theory": "<p>benchmark — точный замер времени операций (Timer); collect_env — вывод информации о системе и версиях для отчётов об ошибках; flop_counter — подсчёт FLOP; cpp_extension — компиляция своих C++/CUDA расширений; deterministic — включение детерминированных алгоритмов для воспроизводимости. Утилиты для отладки, бенчмарков и расширения PyTorch.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-torch-utils-benchmark-collect-env-fl-e-261-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/utils.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(torch.utils.benchmark / collect_env / flop_counter / cpp_extension / deterministic)",
        "solution": "",
        "hints": [],
        "id": "pytorch-torch-utils-benchmark-collect-env-fl-e-261-code"
      }
    ]
  },
  {
    "id": "pytorch-named-tensors-e-262",
    "library": "PyTorch",
    "title": "Named Tensors",
    "shortDesc": "Тензоры с именованными осями: например tensor(\"batch\", \"channel\", \"height\", \"width\"). Удобно для чит...",
    "theory": "<p>Тензоры с именованными осями: например tensor(\"batch\", \"channel\", \"height\", \"width\"). Удобно для читаемости и уменьшения ошибок с порядком размерностей. Поддержка в операциях и постепенное расширение покрытия.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-named-tensors-e-262-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/named_tensor.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Named Tensors)",
        "solution": "",
        "hints": [],
        "id": "pytorch-named-tensors-e-262-code"
      }
    ]
  },
  {
    "id": "pytorch-type-info-torch-config-environme-e-263",
    "library": "PyTorch",
    "title": "Type Info / torch.__config__ / Environme",
    "shortDesc": "Type Info — аннотации типов для статической проверки. __config__ — информация о сборке PyTorch. Пере...",
    "theory": "<p>Type Info — аннотации типов для статической проверки. __config__ — информация о сборке PyTorch. Переменные окружения управляют поведением (CUDA_VISIBLE_DEVICES, TORCH_*, и т.д.). Документация по конфигурации и отладке окружения.</p><h4 style='margin-top:20px;'>Пример использования:</h4><div class='code-block-container' id='code-block-pytorch-type-info-torch-config-environme-e-263-code'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/index.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\nprint(Type Info / torch.__config__ / Environment Variables)",
        "solution": "",
        "hints": [],
        "id": "pytorch-type-info-torch-config-environme-e-263-code"
      }
    ]
  }
];
