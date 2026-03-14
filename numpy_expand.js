  // ---- NumPy: содержание и разделы по темам ----
  var numpyToc = [
    { id: 'ref-numpy-import', title: 'Импорт и инициализация' },
    { id: 'ref-numpy-creation', title: 'Создание массивов' },
    { id: 'ref-numpy-random', title: 'Случайные числа (random)' },
    { id: 'ref-numpy-props', title: 'Свойства и изменение формы' },
    { id: 'ref-numpy-math', title: 'Арифметика и агрегация' },
    { id: 'ref-numpy-index', title: 'Индексация и срезы' },
    { id: 'ref-numpy-sort', title: 'Сортировка и поиск' },
    { id: 'ref-numpy-reshape', title: 'Reshape и перестройка' },
    { id: 'ref-numpy-combine', title: 'Объединение и разделение' },
    { id: 'ref-numpy-clip', title: 'Clip, pad, nan-обработка' },
    { id: 'ref-numpy-io', title: 'Сохранение и загрузка' },
    { id: 'ref-numpy-advanced', title: 'Продвинутые функции' },
    { id: 'ref-numpy-logic', title: 'Логические операции' },
    { id: 'ref-numpy-mathext', title: 'Математика: exp, log, тригонометрия' },
    { id: 'ref-numpy-set', title: 'Множества' },
    { id: 'ref-numpy-statsext', title: 'Статистика: percentile, corrcoef' },
    { id: 'ref-numpy-string', title: 'Форматирование и вывод' }
  ];

  var numpyTheory =
    sectionWithId('ref-numpy-import', 'Импорт библиотеки', NP_R, [
      { code: 'import numpy as np\nprint(np.__version__)', details: 'Базовая конвенция для всей экосистемы Python Data Science.\n\n• Всегда импортируйте как `np` — это абсолютный стандарт индустрии.\n• Библиотека написана на C (и частично Fortran) — поэтому она работает в десятки раз быстрее обычных списков (list) за счёт непрерывного выделения памяти и векторизации циклов.\n• Все операции в дальнейшем производятся над объектом типа `ndarray` (n-dimensional array).', link: NP_R }
    ]) +
    sectionWithId('ref-numpy-creation', 'Создание массивов (ndarray)', NP_R + '#array-creation-routines', [
      { code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([[1, 2], [3, 4]], dtype=np.float32)', details: 'np.array(object, dtype=None, copy=True)\n\nГлавная функция создания массивов.\n\n• object — любой массив-подобный объект (список, кортеж, другой массив).\n• dtype — явно задаёт тип данных (например, np.float32 для экономии памяти в нейросетях). По умолчанию тип выводится автоматически (np.int32/64 или np.float64).\n• В отличие от списков Python (где элементы — разрозненные объекты в памяти), ndarray хранит типизированные данные цельным блоком.', link: NP + 'numpy.array.html' },
      { code: 'import numpy as np\nd0 = np.zeros(5)\nd1 = np.ones((2, 3))\ndx = np.full((2, 2), 7.5)', details: 'Быстрое создание массивов с одинаковыми значениями.\n\n• np.zeros(shape) — массив, заполненный нулями. Часто используется для инициализации масок (masks) в CV.\n• np.ones(shape) — массив единиц. Удобен для создания смещений (bias) или умножения.\n• np.full(shape, fill_value) — массив, заполненный любым числом fill_value.\n• shape всегда передаётся как кортеж, например (H, W) или (Batch, Channels, H, W).', link: NP + 'numpy.zeros.html' },
      { code: 'import numpy as np\narr1 = np.arange(0, 10, 2)\narr2 = np.linspace(0, 1, 5)', details: 'Создание числовых последовательностей.\n\n• np.arange(start, stop, step) — аналог range() в Python, но возвращает ndarray. Включает start, но НЕ включает stop. Допускает вещественные шаги, но из-за точности flat-point может вести себя непредсказуемо.\n• np.linspace(start, stop, num) — равномерно разбивает отрезок от start до stop на num точек. Всегда включает ОБА конца (если не указано endpoint=False). Гарантирует точное количество элементов, идеально для графиков и осей координат.', link: NP + 'numpy.arange.html' }
    ]) +
    sectionWithId('ref-numpy-random', 'Модуль random', NP_R + '#random-sampling-numpy-random', [
      { code: 'import numpy as np\nnp.random.seed(42)\nprint(np.random.rand(2, 2))\nprint(np.random.randn(3))', details: 'Генерация псевдослучайных чисел.\n\n• np.random.seed(seed) — фиксирует генератор. Обязательно для воспроизводимости экспериментов (чтобы коллеги/кагглер получили те же числа).\n• np.random.rand(d0, d1, ...) — равномерное распределение [0, 1). Полезно для Dropout масок.\n• np.random.randn(d0, d1, ...) — нормальное распределение (μ=0, σ=1). Стандарт для инициализации весов в простых нейросетях.\n• Современный подход numpy: rng = np.random.default_rng(seed).', link: NP + 'numpy.random.rand.html' },
      { code: 'import numpy as np\nprint(np.random.randint(0, 10, size=(2, 2)))\narr = np.array([1, 2, 3, 4])\nnp.random.shuffle(arr)\nprint(arr)', details: 'Целые числа и перестановки.\n\n• np.random.randint(low, high, size) — случайные целые числа в диапазоне [low, high). Можно имитировать броски кубиков или случайные индексы.\n• np.random.shuffle(x) — перемешивает массив на месте. Если массив многомерный — перемешивает только по ПЕРВОЙ оси (по строкам). Очень важно для перетасовки датасета перед эпохой обучения (train/test split).', link: NP + 'numpy.random.randint.html' }
    ]) +
    sectionWithId('ref-numpy-props', 'Свойства и размерности массива', NP_R + '#array-manipulation-routines', [
      { code: 'import numpy as np\na = np.array([[1, 2], [3, 4], [5, 6]])\nprint("shape:", a.shape)\nprint("ndim:", a.ndim)\nprint("size:", a.size)\nprint("dtype:", a.dtype)', details: 'Атрибуты массива (без круглых скобок, это свойства класса).\n\n• .shape — кортеж размерностей (строки, столбцы и т.д.). Главный атрибут при дебаггинге матриц (shape mismatch — самая частая ошибка в ML).\n• .ndim — количество измерений (длина кортежа shape). 1 = вектор, 2 = матрица, 3 = тензор (картинка).\n• .size — общее количество элементов (произведение всех чисел из shape).\n• .dtype — тип данных (np.float32, np.int64, np.uint8 для картинок).', link: NP + 'numpy.ndarray.shape.html' },
      { code: 'import numpy as np\na = np.arange(6)\nb = a.reshape(2, 3)\nprint(b)', details: 'Изменение формы.\n\n• np.reshape(a, newshape) или a.reshape(newshape) — меняет размерности БЕЗ ИЗМЕНЕНИЯ ДАННЫХ. Количество элементов должно строго совпадать (a.size == b.size).\n• Важно: reshape возвращает view (представление) на старые данные памяти. Если поменять элемент в b — он поменяется и в a.\n• Одно из измерений может быть -1 (например a.reshape(-1, 3)). Numpy сам высчитает эту размерность как (size / 3).', link: NP + 'numpy.reshape.html' }
    ]) +
    sectionWithId('ref-numpy-math', 'Арифметика, broadcasting и агрегация', NP_R + '#mathematical-functions', [
      { code: 'import numpy as np\na = np.array([1, 2, 3])\nb = np.array([10, 20, 30])\nprint(a + b)\nprint(a * 2)\nprint(a ** 2)', details: 'Векторизованная арифметика.\n\n• Операции (+, -, *, /, **, ==) применяются ПОЭЛЕМЕНТНО.\n• Выполняются на уровне C-кода, циклы for в Python писать не нужно (это антипаттерн в numpy).\n• Broadcasting (транслирование): если складывать матрицу (3, 3) и вектор (3,), вектор "растянется" на все строки матрицы автоматически без дублирования в памяти.', link: NP_R + '#math-operations' },
      { code: 'import numpy as np\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\nprint("Поэлементное умножение:", a * b)\nprint("Матричное умножение:", np.dot(a, b))\nprint("Оператор @:", a @ b)', details: 'Умножение матриц.\n\n• a * b — умножает элементы с одинаковыми индексами. Требует одинакового shape (или broadcasting-совместимого).\n• np.dot(a, b) — скалярное или матричное произведение.\n• a @ b — оператор матричного умножения (введен в Python 3.5). Для 2D матриц работает как классическое "строка на столбец". Это основа forward-pass в нейросетях (Y = X @ W + b).', link: NP + 'numpy.dot.html' },
      { code: 'import numpy as np\na = np.array([[1, 2], [3, 4], [5, 6]])\nprint("sum_all:", a.sum())\nprint("sum_cols (axis=0):", a.sum(axis=0))\nprint("sum_rows (axis=1):", a.sum(axis=1))', details: 'Агрегирующие функции: sum, mean, min, max, std, var.\n\n• Без указания axis функция "сплющит" матрицу и посчитает статистику по ВСЕМ элементам.\n• axis=0 — схлопывает нулевую ось (строки), то есть суммирует/усредняет ВДОЛЬ столбцов (получим вектор из сумм каждого столбца).\n• axis=1 — схлопывает столбцы, суммирует СТРОКИ. Управление параметром axis критически важно для работы с батчами данных в ML (получение mean_loss_per_batch).', link: NP + 'numpy.sum.html' }
    ]);
