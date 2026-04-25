// Уроки по библиотекам: от начального уровня до уверенного владения
const LESSONS = [
  // ---- NumPy: начальный → продвинутый ----
  {
    id: 'numpy-basics',
    title: 'NumPy: начальный уровень — массивы и форма',
    shortDesc: 'Массивы, форма, индексация, операции и линейная алгебра',
    theory: `
      <p><strong>NumPy</strong> — библиотека для работы с многомерными массивами и матричными операциями. Почти весь ML-код использует NumPy или строит на нём (PyTorch, TensorFlow).</p>
      <p><strong>Массив</strong> создаётся из списка: <code>np.array([1, 2, 3])</code>. Форма — <code>.shape</code>, число элементов — <code>.size</code>, тип — <code>.dtype</code>.</p>
      <p><strong>Индексация:</strong> <code>a[0]</code>, срез <code>a[1:4]</code>, для матрицы <code>a[i, j]</code> или <code>a[i][j]</code>. Отрицательные индексы с конца.</p>
      <p><strong>Операции</strong> поэлементные: <code>a + b</code>, <code>a * b</code>. Матричное умножение: <code>A @ B</code> или <code>np.dot(A, B)</code>. Транспонирование: <code>A.T</code>.</p>
      <p><strong>Полезные функции:</strong> <code>np.zeros(shape)</code>, <code>np.ones(shape)</code>, <code>np.random.randn(m, n)</code>, <code>np.linspace(0, 1, 10)</code>, <code>np.mean(a)</code>, <code>np.sum(a)</code>.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: '' },
          { type: 'fill', content: 'a = np.', placeholder: '???', correct: 'array' },
          { type: 'text', content: '([1, 2, 3, 4, 5])  # одномерный массив' },
          { type: 'hint', content: 'print(a.shape)   # (5,) — форма', hint: 'shape возвращает кортеж размеров по каждой оси' },
          { type: 'fill', content: 'b = np.', placeholder: '???', correct: 'zeros' },
          { type: 'text', content: '((3, 4))  # матрица 3×4 из нулей' },
          { type: 'text', content: '' },
          { type: 'text', content: 'M = np.random.randn(2, 3)  # случайная матрица 2×3' },
          { type: 'fill', content: 'MT = M.', placeholder: '???', correct: 'T' },
          { type: 'text', content: '  # транспонирование → форма (3, 2)' },
          { type: 'text', content: '' },
          { type: 'text', content: 'x = np.array([1.0, 2.0, 3.0])' },
          { type: 'fill', content: 's = np.', placeholder: '???', correct: 'mean' },
          { type: 'text', content: '(x)  # среднее значение' },
        ],
      },
    ],
  },
  {
    id: 'gradient-descent',
    title: 'Градиентный спуск',
    shortDesc: 'Оптимизация: шаг обновления весов, learning rate, градиент',
    theory: `
      <p><strong>Градиентный спуск</strong> — основной метод минимизации функции потерь в ML. Идея: двигать параметры в направлении, противоположном градиенту, чтобы уменьшить потери.</p>
      <p><strong>Формула:</strong> <code>w_new = w_old - learning_rate * gradient</code>. Градиент — вектор частных производных по каждому параметру; он указывает направление наибольшего роста функции.</p>
      <p><strong>Learning rate (η)</strong> — размер шага. Слишком большой → колебания или расхождение; слишком маленький → медленная сходимость. Часто подбирают по сетке или используют расписания (например, уменьшение со временем).</p>
      <p><strong>Варианты:</strong> (1) <em>Batch</em> — градиент по всем данным за раз. (2) <em>Stochastic (SGD)</em> — по одному примеру. (3) <em>Mini-batch</em> — по небольшой подвыборке; чаще всего используется в нейросетях.</p>
      <p>Для линейной регрессии с MSE градиент по весам: <code>∇w = (2/n) * X^T * (Xw - y)</code>. Подставь это в формулу обновления и заполни пропуски в коде.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: '' },
          { type: 'text', content: 'def gradient_descent(X, y, lr=0.01, epochs=100):' },
          { type: 'hint', content: '    w = np.zeros(X.shape[1])  # веса (инициализация нулями)', hint: 'Инициализация весов: начинаем с нулей, размер = число признаков в X' },
          { type: 'text', content: '    for _ in range(epochs):' },
          { type: 'hint', content: '        pred = X @ w  # предсказание: X * w', hint: 'Предсказание: матричное умножение X на вектор весов w' },
          { type: 'hint', content: '        error = pred - y  # ошибка (разница с целевой переменной)', hint: 'Вектор ошибок: предсказание минус истинные значения y' },
          { type: 'fill', content: '        grad = ', placeholder: '???', correct: 'X.T @ error / len(y)' },
          { type: 'fill', content: '        w = w - ', placeholder: '???', correct: 'lr * grad' },
          { type: 'text', content: '    return w' },
        ],
      },
    ],
  },
  {
    id: 'numpy-intermediate',
    title: 'NumPy: средний уровень — broadcasting и индексация',
    shortDesc: 'Broadcasting, булева маска, fancy indexing',
    theory: `
      <p><strong>Broadcasting</strong> — правила, по которым NumPy расширяет массивы разной формы при операциях. Например, массив (3,) + скаляр даёт поэлементное сложение; (3, 4) + (4,) — строка добавляется к каждой строке матрицы.</p>
      <p><strong>Булева маска:</strong> <code>a[a > 0]</code> возвращает одномерный массив из элементов, где условие True. Условие — массив булев той же формы.</p>
      <p><strong>Fancy indexing:</strong> <code>a[[0, 2, 4]]</code> — выбор по списку индексов. Для 2D: <code>a[rows, cols]</code> с массивами индексов.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: 'a = np.array([1, 2, 3, 4, 5])' },
          { type: 'fill', content: 'mask = a ', placeholder: '???', correct: '> 2' },
          { type: 'text', content: '  # булев массив' },
          { type: 'fill', content: 'selected = a[', placeholder: '???', correct: 'mask' },
          { type: 'text', content: ']  # элементы, где True' },
          { type: 'text', content: '# Или короче: a[a > 2]' },
        ],
      },
    ],
  },
  {
    id: 'numpy-linear',
    title: 'NumPy: линейная регрессия (MSE и градиентный спуск)',
    shortDesc: 'MSE, градиенты и один цикл обучения',
    theory: `
      <p><strong>Линейная регрессия</strong> моделирует зависимость: <code>y ≈ Xw + b</code>. Часто b включают в w (добавляют столбец единиц в X). Цель — найти веса w, минимизирующие ошибку предсказания.</p>
      <p><strong>MSE</strong> (Mean Squared Error): <code>L = (1/n) * Σ(y_true - y_pred)²</code>. Это среднеквадратичная ошибка; дифференцируема и удобна для градиентного спуска.</p>
      <p><strong>Градиент MSE по w:</strong> при предсказании <code>y_pred = Xw</code> получается <code>∇w = (2/n) * X^T * (y_pred - y)</code>. Знак зависит от определения (pred-y или y-pred); в коде ниже используется <code>y_pred - y</code> и обновление <code>w -= lr * grad_w</code>.</p>
      <p>Альтернатива — <strong>нормальное уравнение</strong> <code>w = (X^T X)^(-1) X^T y</code>: решение в один шаг без итераций, но при больших n или многих признаках градиентный спуск масштабируется лучше.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'def mse(y_true, y_pred):' },
          { type: 'fill', content: '    return np.mean((', placeholder: '???', correct: 'y_true - y_pred' },
          { type: 'text', content: ') ** 2)' },
          { type: 'text', content: '' },
          { type: 'text', content: 'def train_linear(X, y, lr=0.01, epochs=500):' },
          { type: 'text', content: '    w = np.random.randn(X.shape[1]) * 0.01' },
          { type: 'text', content: '    for epoch in range(epochs):' },
          { type: 'text', content: '        y_pred = X @ w' },
          { type: 'fill', content: '        loss = mse(y, ', placeholder: '???', correct: 'y_pred' },
          { type: 'text', content: ')' },
          { type: 'hint', content: '        grad_w = (2 / len(y)) * X.T @ (y_pred - y)  # градиент MSE по w', hint: 'Градиент MSE: (2/n)*X^T*(y_pred-y)' },
          { type: 'fill', content: '        w -= ', placeholder: '???', correct: 'lr * grad_w' },
          { type: 'text', content: '    return w' },
        ],
      },
    ],
  },
  // ---- Pandas: начальный → продвинутый ----
  {
    id: 'pandas-basics',
    title: 'Pandas: начальный уровень — DataFrame и загрузка',
    shortDesc: 'DataFrame, read_csv, head, columns',
    theory: `
      <p><strong>Pandas</strong> — библиотека для табличных данных. Основные объекты: <code>DataFrame</code> (таблица) и <code>Series</code> (столбец с индексами).</p>
      <p><strong>Загрузка:</strong> <code>pd.read_csv("file.csv")</code> возвращает DataFrame. Параметры: sep, header, encoding.</p>
      <p><strong>Просмотр:</strong> <code>df.head(n)</code>, <code>df.shape</code>, <code>df.columns</code>, <code>df.dtypes</code>.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import pandas as pd' },
          { type: 'fill', content: 'df = pd.', placeholder: '???', correct: 'read_csv' },
          { type: 'text', content: '("data.csv")' },
          { type: 'hint', content: 'print(df.head(5))  # первые 5 строк', hint: 'head(n) — первые n строк' },
          { type: 'fill', content: 'print(df.', placeholder: '???', correct: 'columns' },
          { type: 'text', content: ')  # имена столбцов' },
        ],
      },
    ],
  },
  {
    id: 'sklearn-basics',
    title: 'scikit-learn: начальный уровень — fit и predict',
    shortDesc: 'fit/predict, train_test_split, метрики, Pipeline',
    theory: `
      <p><strong>scikit-learn</strong> — основная библиотека для классического ML в Python. Единый интерфейс: модель создаётся, затем <code>model.fit(X, y)</code> для обучения, <code>model.predict(X)</code> для предсказаний.</p>
      <p><strong>Разделение данных:</strong> <code>train_test_split(X, y, test_size=0.2, random_state=42)</code> — случайно делит на обучающую и тестовую выборки. Обучаем только на train, оцениваем на test.</p>
      <p><strong>Регрессия:</strong> <code>from sklearn.linear_model import LinearRegression</code>. После <code>fit</code> веса в <code>model.coef_</code> и <code>model.intercept_</code>.</p>
      <p><strong>Метрики:</strong> <code>mean_squared_error(y_true, y_pred)</code>, <code>mean_absolute_error</code>, <code>r2_score</code>. Для классификации: <code>accuracy_score</code>, <code>classification_report</code>, <code>confusion_matrix</code>.</p>
      <p><strong>Pipeline</strong> объединяет шаги (например, масштабирование + модель): <code>Pipeline([("scaler", StandardScaler()), ("model", LinearRegression())])</code>. Вызов <code>fit</code> применяет все шаги по порядку.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from sklearn.linear_model import LinearRegression' },
          { type: 'text', content: 'from sklearn.model_selection import train_test_split' },
          { type: 'text', content: 'from sklearn.metrics import mean_squared_error' },
          { type: 'text', content: '' },
          { type: 'text', content: 'X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)' },
          { type: 'text', content: 'model = LinearRegression()' },
          { type: 'fill', content: 'model.', placeholder: '???', correct: 'fit' },
          { type: 'text', content: '(X_train, y_train)  # обучение' },
          { type: 'fill', content: 'y_pred = model.', placeholder: '???', correct: 'predict' },
          { type: 'text', content: '(X_test)' },
          { type: 'fill', content: 'mse = mean_squared_error(', placeholder: '???', correct: 'y_test, y_pred' },
          { type: 'text', content: ')' },
        ],
      },
    ],
  },
  {
    id: 'sklearn-pipeline',
    title: 'scikit-learn: средний уровень — Pipeline и препроцессинг',
    shortDesc: 'StandardScaler, Pipeline, кросс-валидация',
    theory: `
      <p><strong>Препроцессинг</strong> важен: многие алгоритмы чувствительны к масштабу признаков. <code>StandardScaler</code> приводит каждый признак к среднему 0 и дисперсии 1: <code>scaler.fit(X_train)</code>, затем <code>scaler.transform(X_train)</code> и <code>scaler.transform(X_test)</code>. На тесте используем те же параметры (среднее/дисперсию с train), чтобы не было утечки информации.</p>
      <p><strong>Pipeline</strong> связывает шаги: при <code>pipe.fit(X_train, y_train)</code> сначала применяется scaler к X_train, затем модель обучается на масштабированных данных. При <code>pipe.predict(X_test)</code> X_test масштабируется тем же scaler, затем идёт предсказание.</p>
      <p><strong>Кросс-валидация:</strong> <code>cross_val_score(model, X, y, cv=5)</code> разбивает данные на 5 частей, по очереди одна — валидация, остальные — обучение; возвращает массив оценок. Так получаем более устойчивую оценку качества.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from sklearn.pipeline import Pipeline' },
          { type: 'text', content: 'from sklearn.preprocessing import StandardScaler' },
          { type: 'text', content: '' },
          { type: 'fill', content: 'pipe = Pipeline([("scaler", ', placeholder: '???', correct: 'StandardScaler' },
          { type: 'text', content: '()), ("model", LinearRegression())])' },
          { type: 'text', content: 'pipe.fit(X_train, y_train)' },
          { type: 'fill', content: 'score = pipe.', placeholder: '???', correct: 'score' },
          { type: 'text', content: '(X_test, y_test)  # R² на тесте' },
        ],
      },
    ],
  },
  // ---- OpenCV: начальный → продвинутый ----
  {
    id: 'opencv-basics',
    title: 'OpenCV: начальный уровень — загрузка и отображение',
    shortDesc: 'imread, imshow, waitKey, BGR',
    theory: `
      <p><strong>OpenCV (cv2)</strong> — библиотека для работы с изображениями и видео. Изображение в памяти — это ndarray (высота × ширина × каналы).</p>
      <p><strong>Цвета:</strong> по умолчанию BGR (не RGB!). Для отображения в matplotlib конвертируют: <code>cv2.cvtColor(img, cv2.COLOR_BGR2RGB)</code>.</p>
      <p><strong>Загрузка:</strong> <code>cv2.imread("path.jpg")</code>. Показ: <code>cv2.imshow("window", img)</code>, <code>cv2.waitKey(0)</code>, <code>cv2.destroyAllWindows()</code>.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import cv2' },
          { type: 'fill', content: 'img = cv2.', placeholder: '???', correct: 'imread' },
          { type: 'text', content: '("image.jpg")' },
          { type: 'text', content: 'cv2.imshow("window", img)' },
          { type: 'fill', content: 'cv2.', placeholder: '???', correct: 'waitKey' },
          { type: 'text', content: '(0)' },
          { type: 'text', content: 'cv2.destroyAllWindows()' },
        ],
      },
    ],
  },
  {
    id: 'opencv-filters',
    title: 'OpenCV: средний уровень — фильтры и границы',
    shortDesc: 'cvtColor, resize, GaussianBlur, Canny',
    theory: `
      <p><strong>Преобразования:</strong> <code>cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)</code> — в оттенки серого. <code>cv2.resize(img, (width, height))</code> — изменить размер.</p>
      <p><strong>Размытие:</strong> <code>cv2.GaussianBlur(img, (5, 5), 0)</code> — размытие по Гауссу (ядро нечётное).</p>
      <p><strong>Границы:</strong> <code>cv2.Canny(img, threshold1, threshold2)</code> — детектор границ Кэнни.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)' },
          { type: 'fill', content: 'blurred = cv2.', placeholder: '???', correct: 'GaussianBlur' },
          { type: 'text', content: '(img, (5, 5), 0)' },
          { type: 'fill', content: 'edges = cv2.', placeholder: '???', correct: 'Canny' },
          { type: 'text', content: '(gray, 100, 200)' },
        ],
      },
    ],
  },
  // ---- PyTorch: начальный → продвинутый ----
  {
    id: 'pytorch-tensors',
    title: 'PyTorch: начальный уровень — тензоры',
    shortDesc: 'torch.tensor, shape, to(device)',
    theory: `
      <p><strong>PyTorch</strong> — библиотека для глубокого обучения. Основной объект — <code>torch.Tensor</code> (аналог ndarray с поддержкой автоградиента).</p>
      <p><strong>Создание:</strong> <code>torch.tensor([1, 2, 3])</code>, <code>torch.zeros(2, 3)</code>, <code>torch.randn(2, 3)</code>. Свойства: <code>x.shape</code>, <code>x.dtype</code>.</p>
      <p><strong>Устройство:</strong> <code>x.to("cuda")</code> или <code>x.cuda()</code> — перенос на GPU; <code>x.to("cpu")</code> — на CPU.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import torch' },
          { type: 'fill', content: 'x = torch.', placeholder: '???', correct: 'tensor' },
          { type: 'text', content: '([1, 2, 3])' },
          { type: 'text', content: 'print(x.shape)' },
          { type: 'fill', content: 'x = x.', placeholder: '???', correct: 'to' },
          { type: 'text', content: '("cuda")  # если есть GPU' },
        ],
      },
    ],
  },
  {
    id: 'pytorch-nn',
    title: 'PyTorch: средний уровень — nn.Module и цикл обучения',
    shortDesc: 'nn.Module, forward, оптимизатор и loss',
    theory: `
      <p><strong>PyTorch</strong> — библиотека для глубокого обучения. Модель задаётся классом, наследующим <code>nn.Module</code>. В <code>__init__</code> создаются слои (например, <code>nn.Linear(in_features, out_features)</code>), в <code>forward(self, x)</code> описывается проход от входа к выходу.</p>
      <p><strong>Слои:</strong> <code>nn.Linear</code> — полносвязный слой (матрица + смещение). <code>nn.Conv2d</code> — свёртка для изображений. <code>nn.ReLU()</code>, <code>nn.Sigmoid()</code> — функции активации (часто вызывают <code>torch.relu(x)</code> в forward).</p>
      <p><strong>Цикл обучения:</strong> для каждого батча (x, y): (1) <code>optimizer.zero_grad()</code> — обнулить градиенты; (2) <code>out = model(x)</code>, <code>loss = criterion(out, y)</code>; (3) <code>loss.backward()</code> — посчитать градиенты; (4) <code>optimizer.step()</code> — обновить веса.</p>
      <p><strong>Loss:</strong> для регрессии — <code>nn.MSELoss()</code>; для классификации по классам — <code>nn.CrossEntropyLoss()</code> (вход — логиты, цель — индексы классов).</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import torch' },
          { type: 'text', content: 'import torch.nn as nn' },
          { type: 'text', content: '' },
          { type: 'text', content: 'class Net(nn.Module):' },
          { type: 'text', content: '    def __init__(self, in_dim, hidden, out_dim):' },
          { type: 'text', content: '        super().__init__()' },
          { type: 'hint', content: '        self.fc1 = nn.Linear(in_dim, hidden)', hint: 'Linear(in, out): преобразует in_dim признаков в hidden нейронов' },
          { type: 'fill', content: '        self.fc2 = nn.Linear(', placeholder: '???', correct: 'hidden, out_dim' },
          { type: 'text', content: ')' },
          { type: 'text', content: '    def forward(self, x):' },
          { type: 'text', content: '        x = torch.relu(self.fc1(x))' },
          { type: 'fill', content: '        x = self.', placeholder: '???', correct: 'fc2' },
          { type: 'text', content: '(x)' },
          { type: 'text', content: '        return x' },
          { type: 'text', content: '' },
          { type: 'text', content: 'model = Net(10, 64, 2)' },
          { type: 'fill', content: 'optimizer = torch.optim.', placeholder: '???', correct: 'SGD' },
          { type: 'text', content: '(model.parameters(), lr=0.01)' },
          { type: 'text', content: 'for x, y in loader:' },
          { type: 'fill', content: '    optimizer.', placeholder: '???', correct: 'zero_grad' },
          { type: 'text', content: '()' },
          { type: 'text', content: '    out = model(x); loss = criterion(out, y)' },
          { type: 'text', content: '    loss.backward()' },
          { type: 'fill', content: '    optimizer.', placeholder: '???', correct: 'step' },
          { type: 'text', content: '()' },
        ],
      },
    ],
  },
  {
    id: 'pytorch-dataloader',
    title: 'PyTorch: DataLoader и батчи',
    shortDesc: 'Dataset, DataLoader, цикл по батчам',
    theory: `
      <p><strong>DataLoader</strong> оборачивает Dataset и отдаёт батчи. Параметры: <code>batch_size</code>, <code>shuffle=True</code> для обучения.</p>
      <p>Цикл: <code>for x, y in loader:</code> — x и y уже тензоры нужного размера (batch_size × ...).</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from torch.utils.data import DataLoader' },
          { type: 'fill', content: 'loader = DataLoader(dataset, batch_size=32, ', placeholder: '???', correct: 'shuffle' },
          { type: 'text', content: '=True)' },
          { type: 'text', content: 'for x, y in loader:' },
          { type: 'text', content: '    out = model(x)' },
          { type: 'text', content: '    loss = criterion(out, y)' },
        ],
      },
    ],
  },
  {
    id: 'fix-errors',
    title: 'Исправь ошибки в коде (PyTorch и NumPy)',
    shortDesc: 'Типичные опечатки в PyTorch и NumPy',
    theory: `
      <p>В коде ниже пропущены имена функций или методов. Впиши правильные варианты для PyTorch и NumPy.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import torch' },
          { type: 'fill', content: '# Тензор из списка: torch.', placeholder: '???', correct: 'tensor' },
          { type: 'text', content: '([1, 2, 3])' },
          { type: 'fill', content: '# Размер тензора: x.', placeholder: '???', correct: 'shape' },
          { type: 'text', content: ' или x.size()' },
          { type: 'text', content: '# Переместить на GPU: x.' },
          { type: 'fill', content: '', placeholder: '???', correct: 'cuda' },
          { type: 'text', content: '() или x.to("cuda")' },
          { type: 'text', content: 'import numpy as np' },
          { type: 'fill', content: '# Создать массив: np.', placeholder: '???', correct: 'array' },
          { type: 'text', content: '([1, 2, 3])' },
        ],
      },
    ],
  },
  {
    id: 'game-train-loop',
    title: 'Игра: Цикл обучения PyTorch',
    shortDesc: 'Собери цикл обучения шаг за шагом (zero_grad, backward, step)',
    theory: `
      <p><strong>Цикл обучения (Train Loop)</strong> — сердце любой нейросети на PyTorch. В нем происходит магия градиентного спуска.</p>
      <p>Основные шаги:</p>
      <ol>
        <li><code>optimizer.zero_grad()</code> — очистить градиенты с прошлого шага (иначе они будут накапливаться).</li>
        <li><code>out = model(x)</code> — пропустить данные через сеть (forward pass).</li>
        <li><code>loss = criterion(out, y)</code> — посчитать ошибку.</li>
        <li><code>loss.backward()</code> — вычислить градиенты для каждого веса (обратное распространение).</li>
        <li><code>optimizer.step()</code> — обновить веса сети, используя вычисленные градиенты.</li>
      </ol>
      <p>Собери этот пазл в правильном порядке!</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'for epoch in range(epochs):' },
          { type: 'text', content: '    for batch_x, batch_y in dataloader:' },
          { type: 'text', content: '        # 1. Очищаем старые градиенты' },
          { type: 'fill', content: '        optimizer.', placeholder: '???', correct: 'zero_grad()' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 2. Делаем предсказание' },
          { type: 'fill', content: '        predictions = ', placeholder: '???', correct: 'model(batch_x)' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 3. Считаем ошибку (Loss)' },
          { type: 'text', content: '        loss = criterion(predictions, batch_y)' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 4. Считаем градиенты (насколько нужно изменить веса)' },
          { type: 'fill', content: '        loss.', placeholder: '???', correct: 'backward()' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 5. Делаем шаг оптимизации (обновляем веса)' },
          { type: 'fill', content: '        optimizer.', placeholder: '???', correct: 'step()' },
        ],
      },
    ],
  },
  {
    id: 'game-pandas-cleaning',
    title: 'Игра: Очистка данных в Pandas',
    shortDesc: 'Подготовь датасет к обучению: пропуски, дубликаты',
    theory: `
      <p><strong>Очистка данных (Data Cleaning)</strong> — первый и самый важный этап перед построением модели. Мусор на входе = мусор на выходе (Garbage In, Garbage Out).</p>
      <p>Частые операции:</p>
      <ul>
        <li><code>df.head()</code> — посмотреть первые строки (убедиться, что загрузилось нормально).</li>
        <li><code>df.drop_duplicates()</code> — удалить повторяющиеся строки.</li>
        <li><code>df.fillna(value)</code> — заполнить пустые значения (NaN), например, средним или нулем. Можно использовать <code>inplace=True</code>.</li>
        <li><code>df.dropna()</code> — удалить строки с пустыми значениями.</li>
      </ul>
      <p>Очисти датасет перед подачей в алгоритм!</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import pandas as pd' },
          { type: 'text', content: 'df = pd.read_csv("dirty_data.csv")' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Смотрим первые 5 строк датасета' },
          { type: 'fill', content: 'print(df.', placeholder: '???', correct: 'head())' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Удаляем полные дубликаты строк' },
          { type: 'fill', content: 'df = df.', placeholder: '???', correct: 'drop_duplicates()' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Заполняем пропуски в колонке "age" медианным значением' },
          { type: 'text', content: 'median_age = df["age"].median()' },
          { type: 'fill', content: 'df["age"].', placeholder: '???', correct: 'fillna(median_age, inplace=True)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Удаляем остальные строки, где всё еще есть NaN' },
          { type: 'fill', content: 'df = df.', placeholder: '???', correct: 'dropna()' },
        ],
      },
    ],
  },
  {
    id: 'game-numpy-shapes',
    title: 'Игра: Битва с размерностями в NumPy',
    shortDesc: 'Исправь shape mismatch, используя T, reshape и squeeze',
    theory: `
      <p><strong>Shape Mismatch</strong> (несовпадение размерностей) — самая частая ошибка новичков. Матрицы нельзя умножить, если их размеры не согласованы.</p>
      <ul>
        <li><code>A.T</code> — транспонирование матрицы (переворот: строки становятся столбцами). Если A была (10, 5), A.T будет (5, 10).</li>
        <li><code>A.reshape(new_shape)</code> — изменение формы без изменения данных. <code>reshape(-1, 1)</code> делает из вектора-строки столбец.</li>
        <li><code>A.squeeze()</code> — удаляет измерения равные 1 (например, из (10, 1) делает (10,)).</li>
      </ul>
      <p>Для матричного умножения <code>A @ B</code> внутренние размерности должны совпадать: (M, <strong>K</strong>) @ (<strong>K</strong>, N) = (M, N).</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: '' },
          { type: 'text', content: 'X = np.random.randn(100, 5)  # 100 примеров, 5 признаков' },
          { type: 'text', content: 'W = np.random.randn(5, 10)   # Веса: 5 входов, 10 выходов' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Матричное умножение (forward pass линейного слоя)' },
          { type: 'text', content: '# Размер результата будет (100, 10)' },
          { type: 'fill', content: 'Z = X ', placeholder: '???', correct: '@ W' },
          { type: 'text', content: '  # Используй оператор матричного умножения' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Теперь у нас вектор Y_pred формы (100,)' },
          { type: 'text', content: 'Y_pred = np.random.randn(100)' },
          { type: 'text', content: '# Нам нужно сделать его столбцом формы (100, 1)' },
          { type: 'fill', content: 'Y_col = Y_pred.', placeholder: '???', correct: 'reshape(-1, 1)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Транспонирование: матрица A размера (3, 4)' },
          { type: 'text', content: 'A = np.ones((3, 4))' },
          { type: 'text', content: '# Делаем её размера (4, 3)' },
          { type: 'fill', content: 'A_t = A.', placeholder: '???', correct: 'T' },
        ],
      },
    ],
  },
  {
    id: 'game-sklearn-predict',
    title: 'Игра: Обучение и предсказание в scikit-learn',
    shortDesc: 'Пройди полный цикл: fit, predict и оценка качества (accuracy)',
    theory: `
      <p><strong>Основы scikit-learn:</strong> Все модели (оценщики) имеют единый интерфейс.</p>
      <ol>
        <li><code>model.fit(X, y)</code> — обучить алгоритм на признаках X и целевой переменной y.</li>
        <li><code>model.predict(X_new)</code> — сделать предсказание для новых данных.</li>
        <li><code>accuracy_score(y_true, y_pred)</code> — посчитать долю правильных ответов (для классификации).</li>
      </ol>
      <p>Собери классический пайплайн обучения модели!</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from sklearn.ensemble import RandomForestClassifier' },
          { type: 'text', content: 'from sklearn.metrics import accuracy_score' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Создаем модель' },
          { type: 'text', content: 'model = RandomForestClassifier()' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Обучаем модель на тренировочных данных' },
          { type: 'fill', content: 'model.', placeholder: '???', correct: 'fit(X_train, y_train)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Делаем предсказания на тестовой выборке' },
          { type: 'fill', content: 'predictions = model.', placeholder: '???', correct: 'predict(X_test)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 4. Оцениваем качество (Accuracy)' },
          { type: 'fill', content: 'score = ', placeholder: '???', correct: 'accuracy_score(y_test, predictions)' },
          { type: 'text', content: 'print(f"Точность: {score:.2f}")' },
        ],
      },
    ],
  },
  {
    id: 'game-opencv-drawing',
    title: 'Игра: Рисование в OpenCV',
    shortDesc: 'Нарисуй прямоугольник, круг и добавь текст на изображение',
    theory: `
      <p><strong>Рисование (OpenCV):</strong> OpenCV позволяет изменять пиксели напрямую, рисуя примитивы.</p>
      <ul>
        <li><code>cv2.rectangle(img, pt1, pt2, color, thickness)</code> — рисует прямоугольник. pt1 — верхний левый угол, pt2 — нижний правый.</li>
        <li><code>cv2.circle(img, center, radius, color, thickness)</code> — рисует круг. Заливка: thickness=-1.</li>
        <li><code>cv2.putText(img, text, org, fontFace, fontScale, color, thickness)</code> — добавляет текст.</li>
      </ul>
      <p>Цвета задаются в формате <strong>BGR</strong> (Blue, Green, Red). Пример: (0, 255, 0) — зеленый.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import cv2' },
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: '' },
          { type: 'text', content: '# Создаем черный холст' },
          { type: 'text', content: 'img = np.zeros((500, 500, 3), dtype=np.uint8)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Рисуем ЗЕЛЕНЫЙ прямоугольник' },
          { type: 'fill', content: 'cv2.', placeholder: '???', correct: 'rectangle(img, (50, 50), (200, 200), (0, 255, 0), 2)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Рисуем КРАСНЫЙ закрашенный круг' },
          { type: 'fill', content: 'cv2.', placeholder: '???', correct: 'circle(img, (350, 350), 50, (0, 0, 255), -1)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Пишем БЕЛЫЙ текст' },
          { type: 'fill', content: 'cv2.', placeholder: '???', correct: 'putText(img, "OpenCV", (100, 450), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2)' },
        ],
      },
    ],
  },
  {
    id: 'game-pytorch-cnn',
    title: 'Игра: Сборка сверточной нейросети (CNN)',
    shortDesc: 'Построй forward pass: Conv2d, ReLU, MaxPool2d и Linear',
    theory: `
      <p><strong>Сверточные сети (CNN)</strong> отлично подходят для картинок. Классическая архитектура состоит из блоков:</p>
      <ol>
        <li><code>nn.Conv2d()</code> — свертка, извлекает признаки (границы, текстуры).</li>
        <li>Активация (например, <code>torch.relu()</code>) — добавляет нелинейность.</li>
        <li><code>nn.MaxPool2d()</code> — пулинг, уменьшает размер картинки в 2 раза, оставляя главные признаки.</li>
        <li><code>torch.flatten()</code> — вытягивает трехмерный тензор (каналы, H, W) в одномерный вектор перед полносвязным слоем.</li>
        <li><code>nn.Linear()</code> — полносвязный слой для итоговой классификации.</li>
      </ol>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import torch' },
          { type: 'text', content: 'import torch.nn as nn' },
          { type: 'text', content: 'import torch.nn.functional as F' },
          { type: 'text', content: '' },
          { type: 'text', content: 'class SimpleCNN(nn.Module):' },
          { type: 'text', content: '    def __init__(self):' },
          { type: 'text', content: '        super().__init__()' },
          { type: 'text', content: '        self.conv1 = nn.Conv2d(in_channels=1, out_channels=16, kernel_size=3)' },
          { type: 'text', content: '        self.pool = nn.MaxPool2d(kernel_size=2)' },
          { type: 'text', content: '        self.fc = nn.Linear(16 * 13 * 13, 10)' },
          { type: 'text', content: '' },
          { type: 'text', content: '    def forward(self, x):' },
          { type: 'text', content: '        # 1. Свертка + активация' },
          { type: 'fill', content: '        x = F.', placeholder: '???', correct: 'relu(self.conv1(x))' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 2. Пулинг (уменьшение размерности)' },
          { type: 'fill', content: '        x = self.', placeholder: '???', correct: 'pool(x)' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 3. Вытягиваем в вектор' },
          { type: 'fill', content: '        x = torch.', placeholder: '???', correct: 'flatten(x, 1)' },
          { type: 'text', content: '' },
          { type: 'text', content: '        # 4. Классификация (полносвязный слой)' },
          { type: 'fill', content: '        x = self.', placeholder: '???', correct: 'fc(x)' },
          { type: 'text', content: '        return x' },
        ],
      },
    ],
  },
  {
    id: 'game-pandas-groupby',
    title: 'Игра: Группировка и агрегация в Pandas',
    shortDesc: 'Посчитай среднюю зарплату по отделам: groupby, agg',
    theory: `
      <p><strong>Группировка (Groupby):</strong> Метод <code>df.groupby("колонка")</code> разбивает данные на группы по уникальным значениям в колонке. После этого нужно применить <strong>агрегирующую функцию</strong> (sum, mean, count, max).</p>
      <ul>
        <li><code>df.groupby("department")["salary"].mean()</code> — средняя зарплата в каждом отделе. Возвращает Series.</li>
        <li><code>df.groupby("department").agg({"salary": "mean", "age": "max"})</code> — более сложная агрегация: средняя ЗП и максимальный возраст.</li>
        <li><code>.reset_index()</code> часто используется в конце, чтобы превратить результат обратно в красивый DataFrame.</li>
      </ul>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import pandas as pd' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Группируем по отделу и считаем СРЕДНЮЮ зарплату' },
          { type: 'fill', content: 'avg_salary = df.', placeholder: '???', correct: 'groupby("department")["salary"].mean()' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Группируем и считаем КОЛИЧЕСТВО сотрудников в отделе' },
          { type: 'fill', content: 'emp_count = df.', placeholder: '???', correct: 'groupby("department")["id"].count()' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Считаем среднюю ЗП и делаем из результата DataFrame' },
          { type: 'fill', content: 'result_df = df.groupby("department")["salary"].mean().', placeholder: '???', correct: 'reset_index()' },
        ],
      },
    ],
  },
  {
    id: 'game-matplotlib-plot',
    title: 'Игра: Базовые графики в Matplotlib',
    shortDesc: 'Построй свой первый график: plot, scatter, show',
    theory: `
      <p><strong>Matplotlib</strong> — базовая библиотека для визуализации данных.</p>
      <ul>
        <li><code>plt.plot(x, y)</code> — рисует линейный график по точкам x и y.</li>
        <li><code>plt.scatter(x, y)</code> — рисует диаграмму рассеяния (набор точек без линий).</li>
        <li><code>plt.title("Название")</code>, <code>plt.xlabel("X")</code>, <code>plt.ylabel("Y")</code> — подписи к графику.</li>
        <li><code>plt.show()</code> — отображает график на экране (обязательно в конце!).</li>
      </ul>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import matplotlib.pyplot as plt' },
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: '' },
          { type: 'text', content: 'x = np.array([1, 2, 3, 4])' },
          { type: 'text', content: 'y = np.array([10, 20, 25, 30])' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Построй линейный график' },
          { type: 'fill', content: 'plt.', placeholder: '???', correct: 'plot(x, y)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Добавь заголовок графика "Мой первый график"' },
          { type: 'fill', content: 'plt.', placeholder: '???', correct: 'title("Мой первый график")' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Отобрази график на экране' },
          { type: 'fill', content: 'plt.', placeholder: '???', correct: 'show()' },
        ],
      },
    ],
  },
  {
    id: 'game-numpy-indexing',
    title: 'Игра: Индексация и срезы в NumPy',
    shortDesc: 'Достань нужные элементы из матрицы: индексы, срезы, маски',
    theory: `
      <p><strong>Индексация в NumPy</strong> очень мощная.</p>
      <ul>
        <li><code>A[0, 0]</code> — элемент в первой строке и первом столбце.</li>
        <li><code>A[:, 0]</code> — весь первый столбец. Символ <code>:</code> означает "все элементы по этой оси".</li>
        <li><code>A[1:3, :]</code> — строки со второй (индекс 1) по третью (индекс 2, так как 3 не включается).</li>
        <li><code>A[A > 5]</code> — маскирование (булева индексация). Выбирает все элементы больше 5.</li>
      </ul>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import numpy as np' },
          { type: 'text', content: 'A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Получи весь ПЕРВЫЙ столбец матрицы A' },
          { type: 'fill', content: 'col1 = A[', placeholder: '???', correct: ':, 0' },
          { type: 'text', content: ']' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Получи элемент в 3-й строке, 3-м столбце (значение 9)' },
          { type: 'fill', content: 'val = A[', placeholder: '???', correct: '2, 2' },
          { type: 'text', content: ']' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Выбери все элементы матрицы A, которые больше 5' },
          { type: 'fill', content: 'gt_5 = A[', placeholder: '???', correct: 'A > 5' },
          { type: 'text', content: ']' },
        ],
      },
    ],
  },
  {
    id: 'game-pandas-merge',
    title: 'Игра: Объединение таблиц в Pandas',
    shortDesc: 'Склей таблицы вместе: merge, concat',
    theory: `
      <p>Часто данные лежат в разных таблицах. Pandas умеет их объединять.</p>
      <ul>
        <li><code>pd.merge(df1, df2, on="column")</code> — соединяет таблицы по общему столбцу (аналог JOIN в SQL).</li>
        <li><code>pd.concat([df1, df2])</code> — "склеивает" таблицы друг под другом (по вертикали) или рядом (по горизонтали, если axis=1).</li>
      </ul>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'import pandas as pd' },
          { type: 'text', content: 'users = pd.DataFrame({"id": [1, 2], "name": ["Alice", "Bob"]})' },
          { type: 'text', content: 'orders = pd.DataFrame({"user_id": [1, 2], "amount": [100, 250]})' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Объедини users и orders (в users колонка id, в orders - user_id)' },
          { type: 'fill', content: 'merged_df = pd.', placeholder: '???', correct: 'merge(users, orders, left_on="id", right_on="user_id")' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. У нас появилась новая таблица с юзерами, приклей её СНИЗУ к первой' },
          { type: 'text', content: 'new_users = pd.DataFrame({"id": [3], "name": ["Charlie"]})' },
          { type: 'fill', content: 'all_users = pd.', placeholder: '???', correct: 'concat([users, new_users])' },
        ],
      },
    ],
  },
  {
    id: 'game-sklearn-metrics',
    title: 'Игра: Метрики качества в scikit-learn',
    shortDesc: 'Оцени модель правильно: precision, recall, f1-score',
    theory: `
      <p>Одной Accuracy (доли правильных ответов) бывает недостаточно, особенно если классы несбалансированы (например, больных 1%, здоровых 99%).</p>
      <ul>
        <li><code>precision_score(y_true, y_pred)</code> — Точность: сколько из предсказанных положительных реально положительные.</li>
        <li><code>recall_score(y_true, y_pred)</code> — Полнота: сколько из реальных положительных мы нашли.</li>
        <li><code>f1_score(y_true, y_pred)</code> — Гармоническое среднее между Precision и Recall.</li>
      </ul>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from sklearn.metrics import precision_score, recall_score, f1_score' },
          { type: 'text', content: '' },
          { type: 'text', content: 'y_true = [0, 1, 1, 0, 1]' },
          { type: 'text', content: 'y_pred = [0, 1, 0, 0, 1]' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Посчитай Точность (Precision)' },
          { type: 'fill', content: 'p = ', placeholder: '???', correct: 'precision_score(y_true, y_pred)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Посчитай Полноту (Recall)' },
          { type: 'fill', content: 'r = ', placeholder: '???', correct: 'recall_score(y_true, y_pred)' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 3. Посчитай F1-меру' },
          { type: 'fill', content: 'f1 = ', placeholder: '???', correct: 'f1_score(y_true, y_pred)' },
        ],
      },
    ],
  },
  {
    id: 'game-sklearn-pipeline',
    title: 'Игра: Pipeline в scikit-learn',
    shortDesc: 'Собери конвейер: StandardScaler + LogisticRegression',
    theory: `
      <p><strong>Pipeline</strong> позволяет объединить несколько шагов обработки данных и обучение модели в один объект.</p>
      <p>Это спасает от утечек данных (data leakage) и делает код чище. В Pipeline передается список кортежей: <code>[("имя_шага", ОбъектШага()), ...]</code>.</p>
    `,
    codeBlocks: [
      {
        lines: [
          { type: 'text', content: 'from sklearn.pipeline import Pipeline' },
          { type: 'text', content: 'from sklearn.preprocessing import StandardScaler' },
          { type: 'text', content: 'from sklearn.linear_model import LogisticRegression' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 1. Собери Pipeline из двух шагов: ' },
          { type: 'text', content: '# шаг "scaler" (StandardScaler) и шаг "model" (LogisticRegression)' },
          { type: 'fill', content: 'pipe = Pipeline([', placeholder: '???', correct: '("scaler", StandardScaler()), ("model", LogisticRegression())' },
          { type: 'text', content: '])' },
          { type: 'text', content: '' },
          { type: 'text', content: '# 2. Теперь обучи весь пайплайн одной командой!' },
          { type: 'fill', content: 'pipe.', placeholder: '???', correct: 'fit(X_train, y_train)' },
        ],
      },
    ],
  },
];

const SANDBOX_DEFAULTS = {
  inputSize: 784,
  hidden1: 128,
  hidden2: 64,
  outputSize: 10,
  optimizer: 'Adam',
  lr: 0.001,
  loss: 'CrossEntropyLoss',
};
