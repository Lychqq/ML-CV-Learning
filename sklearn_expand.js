  // ---- scikit-learn: содержание и разделы по темам ----
  var sklearnToc = [
    { id: 'ref-sklearn-import', title: 'Основы и импорт' },
    { id: 'ref-sklearn-preprocess', title: 'Предобработка: скейлинг и кодирование' },
    { id: 'ref-sklearn-linear', title: 'Линейные модели: Регрессия и ЛогРег' },
    { id: 'ref-sklearn-svm-tree-knn', title: 'SVM, Деревья, KNN' },
    { id: 'ref-sklearn-ensemble', title: 'Ансамбли: Лес, Градиентный бустинг' },
    { id: 'ref-sklearn-metrics', title: 'Метрики качества' },
    { id: 'ref-sklearn-split', title: 'Разбиение данных и Validation' },
    { id: 'ref-sklearn-cluster-decomp', title: 'Кластеризация и Разложение (PCA)' },
    { id: 'ref-sklearn-feature-impute', title: 'Отбор признаков и Импутация' },
    { id: 'ref-sklearn-naive-mlp', title: 'Наивный Байес и Нейросети (MLP)' },
    { id: 'ref-sklearn-datasets', title: 'Генерация датасетов (make)' }
  ];

  var sklearnTheory =
    sectionWithId('ref-sklearn-import', 'Основы библиотеки', SK + 'sklearn.linear_model.LinearRegression.html', [
      { code: 'import sklearn\nprint(sklearn.__version__)\n\n# Типичный пайплайн:\n# 1. model = Estimator()\n# 2. model.fit(X_train, y_train)\n# 3. preds = model.predict(X_test)', details: 'Философия Scikit-Learn (API Design).\n\n• Самая популярная библиотека классического ML (до нейросетей).\n• Все модели называются Эстиматорами (Estimators) и имеют абсолютно единообразный интерфейс.\n• fit(X, y) — Обучение (запоминание связей). Матрица X всегда должна быть 2D (samples, features).\n• predict(X) — Предсказание.\n• transform(X) — Предобработка данных (только для скейлеров и энкодеров).', link: 'https://scikit-learn.org/stable/getting_started.html' },
      { code: 'import numpy as np\nfrom sklearn.linear_model import LinearRegression\n\n# Если данных мало (1D), нужно делать reshape(-1, 1)\nX = np.array([1, 2, 3]).reshape(-1, 1)\ny = np.array([2, 4, 6])\n\nmodel = LinearRegression().fit(X, y)\nprint("Predict:", model.predict([[4]]))\nprint("Coef:", model.coef_)', details: 'Требования к формату данных (2D Arrays).\n\n• Извечная ошибка новичков: sklearn НЕ ПРИНИМАЕТ 1D массивы в качестве X.\n• Вектор `[1, 2, 3]` это 3 объекта с 0 признаков. Нужно сделать `[[1], [2], [3]]` (3 объекта с 1 признаком).\n• Для этого всегда делайте X.reshape(-1, 1).\n• После .fit() все обученные веса модели сохраняются в атрибутах с нижним подчеркиванием в конце (coef_, intercept_, classes_).', link: SK + 'sklearn.linear_model.LinearRegression.html' }
    ]) +
    sectionWithId('ref-sklearn-preprocess', 'Предобработка: скейлинг и кодирование', SK + 'sklearn.preprocessing.StandardScaler.html', [
      { code: 'from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\n# КРАЙНЕ ВАЖНО: для теста только transform!\nX_test_scaled = scaler.transform(X_test)', details: 'StandardScaler (Z-Score нормализация).\n\n• Вычитает среднее (mean) и делит на стандартное отклонение (std).\n• Превращает масштаб фичи в нормальное распределение $N(0, 1)$.\n• Критически важно для всех линейных моделей, Логистической регрессии, SVM, KNN и нейросетей (градиентного спуска).\n• Золотое правило ML: мы НЕ ДОЛЖНЫ ВЫЗЫВАТЬ `fit()` на тестовых данных, иначе произойдет "Data Leakage" (утечка данных из будущего в прошлое). Тест мы шкалируем (transform) статистикой с трейна.', link: SK + 'sklearn.preprocessing.StandardScaler.html' },
      { code: 'from sklearn.preprocessing import MinMaxScaler\n\nscaler = MinMaxScaler(feature_range=(0, 1))\nX_scaled = scaler.fit_transform(X_train)\nprint("Min:", X_scaled.min(), "Max:", X_scaled.max())', details: 'MinMaxScaler.\n\n• Жестко сплющивает все значения в диапазон [0, 1] (или любой другой, заданный в feature_range).\n• Формула: $(x - x_{min}) / (x_{max} - x_{min})$.\n• Сохраняет точную структуру исходного распределения (не искажает форму), но ОЧЕНЬ ЧУВСТВИТЕЛЕН к выбросам. Если есть одно дикое значение 10000, все остальные скукожатся в ноль.', link: SK + 'sklearn.preprocessing.MinMaxScaler.html' },
      { code: 'from sklearn.preprocessing import OneHotEncoder\nimport pandas as pd\n\nenc = OneHotEncoder(sparse_output=False, drop="first")\ndf = pd.DataFrame({"color": ["R", "B", "R"]})\nencoded = enc.fit_transform(df[["color"]])\nprint("OHE:\\n", encoded)', details: 'OneHotEncoder (С категорий в цифры).\n\n• Аналог pd.get_dummies, но мощнее — он ЗАПОМИНАЕТ категории словаря, и если в test_set придет неизвестная категория, он не упадет (если поставить handle_unknown="ignore").\n• drop="first" нужен для линейных моделей (защита от дамми-ловушки).\n• sparse_output=False (в новых версиях вместо sparse) заставляет вернуть обычный numpy массив (dense), а не разреженную (sparse) SciPy матрицу.', link: SK + 'sklearn.preprocessing.OneHotEncoder.html' }
    ]);
