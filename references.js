window.REFERENCES = [
  {
    "id": "np-array",
    "library": "NumPy",
    "title": "np.array()",
    "shortDesc": "Создание массива",
    "theory": "<p><code>np.array(object, dtype=None, copy=True, order='K', subok=False, ndmin=0)</code></p><p>Функция <code>np.array</code> является основной для создания массивов (объектов <code>ndarray</code>) в NumPy. Она принимает любой итерируемый объект Python (списки, кортежи, вложенные списки) и конвертирует его в оптимизированный C-массив.</p><h4 style='margin-top:20px;'>Пример 1: Создание простого 1D массива</h4><div class='code-block-container' id='code-block-np-array-code-0'></div><h4 style='margin-top:20px;'>Пример 2: Создание 2D массива (матрицы)</h4><div class='code-block-container' id='code-block-np-array-code-1'></div><h4 style='margin-top:20px;'>Пример 3: Явное указание типа данных (dtype)</h4><div class='code-block-container' id='code-block-np-array-code-2'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.array.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\narr = np.array([1, 2, 3, 4])\nprint('Массив:', arr)\nprint('Тип:', type(arr))\nprint('Форма:', arr.shape)",
        "solution": "",
        "hints": [],
        "id": "np-array-code-0"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nmatrix = np.array([[1, 2], [3, 4], [5, 6]])\nprint(matrix)\nprint('Форма:', matrix.shape)",
        "solution": "",
        "hints": [],
        "id": "np-array-code-1"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\n# Принудительно делаем массив вещественных чисел\narr_float = np.array([1, 2, 3], dtype=np.float32)\nprint(arr_float)\nprint(arr_float.dtype)",
        "solution": "",
        "hints": [],
        "id": "np-array-code-2"
      }
    ]
  },
  {
    "id": "np-zeros-ones",
    "library": "NumPy",
    "title": "np.zeros() / np.ones()",
    "shortDesc": "Массивы из нулей или единиц",
    "theory": "<p>Создаёт массив указанной формы, заполненный нулями (<code>np.zeros</code>) или единицами (<code>np.ones</code>).</p><h4 style='margin-top:20px;'>Пример 1: 1D массив нулей</h4><div class='code-block-container' id='code-block-np-zeros-ones-code-0'></div><h4 style='margin-top:20px;'>Пример 2: Матрица единиц заданного типа</h4><div class='code-block-container' id='code-block-np-zeros-ones-code-1'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.zeros.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nz = np.zeros(5)\nprint(z)",
        "solution": "",
        "hints": [],
        "id": "np-zeros-ones-code-0"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nmatrix = np.ones((3, 3), dtype=np.int32)\nprint(matrix)",
        "solution": "",
        "hints": [],
        "id": "np-zeros-ones-code-1"
      }
    ]
  },
  {
    "id": "np-arange",
    "library": "NumPy",
    "title": "np.arange()",
    "shortDesc": "Массив-прогрессия",
    "theory": "<p><code>np.arange([start, ]stop, [step, ])</code></p><p>Аналог встроенной функции <code>range()</code> в Python, возвращает <code>ndarray</code>.</p><h4 style='margin-top:20px;'>Пример 1: От 0 до N</h4><div class='code-block-container' id='code-block-np-arange-code-0'></div><h4 style='margin-top:20px;'>Пример 2: Шаг</h4><div class='code-block-container' id='code-block-np-arange-code-1'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.arange.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nprint(np.arange(10))",
        "solution": "",
        "hints": [],
        "id": "np-arange-code-0"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nprint(np.arange(10, 30, 5))",
        "solution": "",
        "hints": [],
        "id": "np-arange-code-1"
      }
    ]
  },
  {
    "id": "np-linspace",
    "library": "NumPy",
    "title": "np.linspace()",
    "shortDesc": "Равномерно распределенные точки",
    "theory": "<p><code>np.linspace(start, stop, num=50)</code></p><p>Генерирует N равномерно распределенных чисел между start и stop. Незаменимо для графиков.</p><h4 style='margin-top:20px;'>Пример 1: 5 точек от 0 до 1</h4><div class='code-block-container' id='code-block-np-linspace-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.linspace.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nprint(np.linspace(0, 1, 5))",
        "solution": "",
        "hints": [],
        "id": "np-linspace-code-0"
      }
    ]
  },
  {
    "id": "np-reshape",
    "library": "NumPy",
    "title": "np.reshape()",
    "shortDesc": "Изменение формы массива",
    "theory": "<p>Позволяет перегруппировать элементы массива. Количество элементов должно совпадать.</p><h4 style='margin-top:20px;'>Пример 1: 1D в 2D</h4><div class='code-block-container' id='code-block-np-reshape-code-0'></div><h4 style='margin-top:20px;'>Пример 2: Использование -1</h4><div class='code-block-container' id='code-block-np-reshape-code-1'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.reshape.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\narr = np.arange(12)\nmatrix = arr.reshape((3, 4))\nprint(matrix)",
        "solution": "",
        "hints": [],
        "id": "np-reshape-code-0"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\narr = np.arange(10)\nmatrix = arr.reshape((2, -1))\nprint(matrix)",
        "solution": "",
        "hints": [],
        "id": "np-reshape-code-1"
      }
    ]
  },
  {
    "id": "np-random",
    "library": "NumPy",
    "title": "np.random.rand()",
    "shortDesc": "Случайные числа",
    "theory": "<p>Генерация случайных чисел от 0 до 1.</p><h4 style='margin-top:20px;'>Пример 1: Матрица случайных чисел</h4><div class='code-block-container' id='code-block-np-random-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/random/generated/numpy.random.rand.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\n\nprint(np.random.rand(2, 2))",
        "solution": "",
        "hints": [],
        "id": "np-random-code-0"
      }
    ]
  },
  {
    "id": "np-stats",
    "library": "NumPy",
    "title": "arr.max(), arr.min(), arr.mean()",
    "shortDesc": "Статистика",
    "theory": "<p>Быстрое вычисление статистических агрегатов. Можно указать <code>axis</code> для вычисления по строкам или столбцам.</p><h4 style='margin-top:20px;'>Пример 1: Общая статистика</h4><div class='code-block-container' id='code-block-np-stats-code-0'></div><h4 style='margin-top:20px;'>Пример 2: По осям (axis)</h4><div class='code-block-container' id='code-block-np-stats-code-1'></div><p style=\"margin-top:20px;\"><a href=\"https://numpy.org/doc/stable/reference/generated/numpy.mean.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint('Max:', arr.max())\nprint('Mean:', arr.mean())",
        "solution": "",
        "hints": [],
        "id": "np-stats-code-0"
      },
      {
        "type": "runnable",
        "initialCode": "import numpy as np\narr = np.array([[1, 2], [3, 4]])\nprint('Сумма столбцов:', arr.sum(axis=0))\nprint('Сумма строк:', arr.sum(axis=1))",
        "solution": "",
        "hints": [],
        "id": "np-stats-code-1"
      }
    ]
  },
  {
    "id": "pd-dataframe",
    "library": "Pandas",
    "title": "pd.DataFrame()",
    "shortDesc": "Таблица данных",
    "theory": "<p>DataFrame — это двумерная структура данных в Pandas.</p><h4 style='margin-top:20px;'>Пример 1: Из словаря</h4><div class='code-block-container' id='code-block-pd-dataframe-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\n\ndata = {'Имя': ['Анна', 'Иван'], 'Возраст': [25, 30]}\ndf = pd.DataFrame(data)\nprint(df)",
        "solution": "",
        "hints": [],
        "id": "pd-dataframe-code-0"
      }
    ]
  },
  {
    "id": "pd-series",
    "library": "Pandas",
    "title": "pd.Series()",
    "shortDesc": "Одномерный массив с индексами",
    "theory": "<p>Колонка в DataFrame. Поддерживает математические операции.</p><h4 style='margin-top:20px;'>Пример 1: Создание Series</h4><div class='code-block-container' id='code-block-pd-series-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.Series.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\n\ns = pd.Series([10, 20, 30], index=['A', 'B', 'C'])\nprint(s)",
        "solution": "",
        "hints": [],
        "id": "pd-series-code-0"
      }
    ]
  },
  {
    "id": "pd-head",
    "library": "Pandas",
    "title": "df.head() / df.tail()",
    "shortDesc": "Просмотр начала/конца данных",
    "theory": "<p>Возвращает первые (или последние) 5 строк таблицы.</p><h4 style='margin-top:20px;'>Пример 1: Первые 2 строки</h4><div class='code-block-container' id='code-block-pd-head-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.head.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\ndata = {'A': [1,2,3,4,5], 'B': [5,4,3,2,1]}\ndf = pd.DataFrame(data)\nprint(df.head(2))",
        "solution": "",
        "hints": [],
        "id": "pd-head-code-0"
      }
    ]
  },
  {
    "id": "pd-info",
    "library": "Pandas",
    "title": "df.info() / df.describe()",
    "shortDesc": "Сводная информация",
    "theory": "<p><code>info()</code> показывает типы колонок и пустые значения. <code>describe()</code> выводит статистику.</p><h4 style='margin-top:20px;'>Пример 1: Статистика числовых колонок</h4><div class='code-block-container' id='code-block-pd-info-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.info.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\ndf = pd.DataFrame({'Возраст': [20, 30, 40], 'Зарплата': [50, 60, 70]})\nprint(df.describe())",
        "solution": "",
        "hints": [],
        "id": "pd-info-code-0"
      }
    ]
  },
  {
    "id": "pd-groupby",
    "library": "Pandas",
    "title": "df.groupby()",
    "shortDesc": "Группировка",
    "theory": "<p>Группирует данные по уникальным значениям в одном или нескольких столбцах.</p><h4 style='margin-top:20px;'>Пример 1: Среднее по группам</h4><div class='code-block-container' id='code-block-pd-groupby-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import pandas as pd\n\ndata = {'Отдел': ['IT', 'HR', 'IT'], 'Зарплата': [100, 80, 150]}\ndf = pd.DataFrame(data)\nprint(df.groupby('Отдел').mean())",
        "solution": "",
        "hints": [],
        "id": "pd-groupby-code-0"
      }
    ]
  },
  {
    "id": "sk-train-test-split",
    "library": "scikit-learn",
    "title": "train_test_split()",
    "shortDesc": "Разбиение выборки",
    "theory": "<p>Разделяет массивы на случайные обучающие и тестовые подмножества.</p><h4 style='margin-top:20px;'>Пример 1: Разбиение массивов</h4><div class='code-block-container' id='code-block-sk-train-test-split-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.arange(10).reshape((5, 2))\ny = np.array([0, 1, 0, 1, 0])\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nprint('X_train length:', len(X_train))",
        "solution": "",
        "hints": [],
        "id": "sk-train-test-split-code-0"
      }
    ]
  },
  {
    "id": "sk-rf",
    "library": "scikit-learn",
    "title": "RandomForestClassifier",
    "shortDesc": "Случайный лес",
    "theory": "<p>Ансамблевая модель для классификации.</p><h4 style='margin-top:20px;'>Пример 1: Обучение</h4><div class='code-block-container' id='code-block-sk-rf-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.datasets import make_classification\n\nX, y = make_classification(n_samples=100, n_features=4, random_state=0)\nclf = RandomForestClassifier(n_estimators=10)\nclf.fit(X, y)\nprint('Предсказание:', clf.predict([X[0]]))",
        "solution": "",
        "hints": [],
        "id": "sk-rf-code-0"
      }
    ]
  },
  {
    "id": "sk-scaler",
    "library": "scikit-learn",
    "title": "StandardScaler",
    "shortDesc": "Стандартизация",
    "theory": "<p>Приводит признаки к стандартному нормальному распределению (среднее 0, дисперсия 1).</p><h4 style='margin-top:20px;'>Пример 1: Масштабирование данных</h4><div class='code-block-container' id='code-block-sk-scaler-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "from sklearn.preprocessing import StandardScaler\nimport numpy as np\n\ndata = np.array([[1000], [2000], [3000]])\nscaler = StandardScaler()\nscaled = scaler.fit_transform(data)\nprint(scaled)",
        "solution": "",
        "hints": [],
        "id": "sk-scaler-code-0"
      }
    ]
  },
  {
    "id": "cv-imread",
    "library": "OpenCV",
    "title": "cv2.imread()",
    "shortDesc": "Чтение изображения",
    "theory": "<p>Считывает изображение из файла в формате BGR.</p><h4 style='margin-top:20px;'>Пример 1: Загрузка изображения (теория, нужен файл)</h4><div class='code-block-container' id='code-block-cv-imread-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/da8/group__imgcodecs.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\n# img = cv2.imread('image.jpg')\nprint('Чтение изображения: cv2.imread(путь)')",
        "solution": "",
        "hints": [],
        "id": "cv-imread-code-0"
      }
    ]
  },
  {
    "id": "cv-cvtcolor",
    "library": "OpenCV",
    "title": "cv2.cvtColor()",
    "shortDesc": "Цветовое преобразование",
    "theory": "<p>Конвертирует изображение из одного цветового пространства в другое.</p><h4 style='margin-top:20px;'>Пример 1: BGR в Grayscale</h4><div class='code-block-container' id='code-block-cv-cvtcolor-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d8/d01/group__imgproc__color__conversions.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\nimage_bgr = np.array([[[255, 0, 0]]], dtype=np.uint8)\ngray = cv2.cvtColor(image_bgr, cv2.COLOR_BGR2GRAY)\nprint('Серый пиксель:', gray)",
        "solution": "",
        "hints": [],
        "id": "cv-cvtcolor-code-0"
      }
    ]
  },
  {
    "id": "cv-blur",
    "library": "OpenCV",
    "title": "cv2.GaussianBlur()",
    "shortDesc": "Размытие по Гауссу",
    "theory": "<p>Сглаживает изображение, убирает шум.</p><h4 style='margin-top:20px;'>Пример 1: Применение фильтра Гаусса</h4><div class='code-block-container' id='code-block-cv-blur-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import cv2\nimport numpy as np\n\nimage = np.ones((5,5), dtype=np.uint8) * 255\nblurred = cv2.GaussianBlur(image, (3,3), 0)\nprint('Ок!')",
        "solution": "",
        "hints": [],
        "id": "cv-blur-code-0"
      }
    ]
  },
  {
    "id": "pt-tensor",
    "library": "PyTorch",
    "title": "torch.tensor()",
    "shortDesc": "Создание тензора",
    "theory": "<p>Создаёт тензор (многомерный массив, поддерживающий GPU).</p><h4 style='margin-top:20px;'>Пример 1: Базовый тензор</h4><div class='code-block-container' id='code-block-pt-tensor-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/generated/torch.tensor.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\n\nt = torch.tensor([[1.0, 2.0], [3.0, 4.0]])\nprint(t)\nprint('Размер:', t.size())",
        "solution": "",
        "hints": [],
        "id": "pt-tensor-code-0"
      }
    ]
  },
  {
    "id": "pt-linear",
    "library": "PyTorch",
    "title": "nn.Linear()",
    "shortDesc": "Линейный слой",
    "theory": "<p>Применяет линейное преобразование к входящим данным.</p><h4 style='margin-top:20px;'>Пример 1: Пропуск данных</h4><div class='code-block-container' id='code-block-pt-linear-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/generated/torch.nn.Linear.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\nlayer = nn.Linear(in_features=3, out_features=2)\nx = torch.tensor([[1.0, 2.0, 3.0]])\nprint(layer(x))",
        "solution": "",
        "hints": [],
        "id": "pt-linear-code-0"
      }
    ]
  },
  {
    "id": "pt-adam",
    "library": "PyTorch",
    "title": "torch.optim.Adam",
    "shortDesc": "Оптимизатор",
    "theory": "<p>Обновляет веса нейронной сети в процессе обучения.</p><h4 style='margin-top:20px;'>Пример 1: Инициализация</h4><div class='code-block-container' id='code-block-pt-adam-code-0'></div><p style=\"margin-top:20px;\"><a href=\"https://pytorch.org/docs/stable/generated/torch.optim.Adam.html\" target=\"_blank\" class=\"ref-link\" style=\"color: #60a5fa; text-decoration: none; border-bottom: 1px dotted #60a5fa;\">Официальная документация →</a></p>",
    "codeBlocks": [
      {
        "type": "runnable",
        "initialCode": "import torch\nimport torch.nn as nn\n\nmodel = nn.Linear(2, 1)\noptimizer = torch.optim.Adam(model.parameters(), lr=0.01)\nprint('Оптимизатор готов')",
        "solution": "",
        "hints": [],
        "id": "pt-adam-code-0"
      }
    ]
  }
];
