# ML и Computer Vision — интерактивное обучение

Платформа для самостоятельного изучения машинного обучения и компьютерного зрения (PyTorch, NumPy, scikit-learn, Python).

## Как запустить

1. Открой папку `ML-CV-Learning` на рабочем столе.
2. Дважды щёлкни по файлу **index.html** — откроется в браузере.
3. Сервер не нужен: всё работает локально.

## Что внутри

- **Главная** — карточки тем (NumPy, градиентный спуск, регрессия, scikit-learn, PyTorch и т.д.).
- **Уроки** — интерактивные задания с расширенной теорией:
  - теория (подробно);
  - код с пропусками (нужно вписать ответ);
  - подсказки (подчёркнуты пунктиром — нажми, чтобы прочитать);
  - кнопка «Проверить ответы».
- **Песочница нейросети** — выбор параметров (слои, оптимизатор, lr). Генерируется готовый код на PyTorch; можно скопировать и запустить в Jupyter или Google Colab.
- **AI помощник** (кнопка 💬 справа внизу) — задай вопрос по уроку или попроси подготовить к следующему заданию. Нужен API-ключ (OpenAI или совместимый): нажми ⚙ в панели помощника и введи ключ. Ключ хранится только в браузере.

## Уроки

1. **NumPy: основы** — массивы, форма, индексация, операции, транспонирование, mean.
2. **Градиентный спуск** — формула обновления весов, learning rate, batch / SGD / mini-batch.
3. **Линейная регрессия на NumPy** — MSE, градиенты, нормальное уравнение.
4. **scikit-learn: основы** — fit/predict, train_test_split, метрики (MSE).
5. **scikit-learn: Pipeline и препроцессинг** — StandardScaler, Pipeline, кросс-валидация.
6. **Простая нейросеть на PyTorch** — nn.Module, forward, оптимизатор и loss.
7. **Исправь ошибки** — типичные опечатки в PyTorch и NumPy.

## Справочники команд (advisory board)

В разделе **Справочники** — полные шпаргалки по командам с кратким описанием каждой:

- **NumPy** — создание массивов, random, shape/reshape, индексация, математика, линейная алгебра, статистика, сортировка.
- **Pandas** — DataFrame/Series, read_csv/read_excel, выборка (loc/iloc), пропуски, группировка, агрегаты, merge/concat.
- **scikit-learn** — train_test_split, StandardScaler, Pipeline, регрессия (LinearRegression, Ridge, Lasso), классификация (LogisticRegression, RandomForest, KNN), кластеризация (KMeans), метрики (MSE, accuracy, confusion_matrix).
- **OpenCV (cv2)** — imread/imshow/imwrite, resize, cvtColor, фильтры (GaussianBlur, Canny), контуры, рисование.
- **PyTorch** — тензоры (torch.tensor, shape, to(device)), nn.Module, nn.Linear, оптимизаторы (SGD, Adam), loss, DataLoader. Ссылки на [официальную документацию PyTorch](https://pytorch.org/docs/stable/).

## Флеш-карточки

Раздел **Флеш-карточки**: готовые колоды по NumPy, Pandas, scikit-learn, OpenCV, PyTorch и основам ML. Можно создавать свои карточки (сохраняются в браузере) или нажать **«Сгенерировать через AI»** — откроется панель AI, где можно попросить сгенерировать карточки по теме.

## Уроки по библиотекам (начальный → продвинутый)

- **NumPy**: начальный (массивы, форма), средний (broadcasting, индексация), линейная регрессия (MSE, градиентный спуск).
- **Pandas**: начальный (DataFrame, read_csv, head, columns).
- **scikit-learn**: начальный (fit/predict, train_test_split), средний (Pipeline, StandardScaler).
- **OpenCV**: начальный (imread, imshow, waitKey), средний (cvtColor, resize, GaussianBlur, Canny).
- **PyTorch**: начальный (тензоры), средний (nn.Module, цикл обучения), DataLoader и батчи.
- **Исправь ошибки** — типичные опечатки в PyTorch и NumPy.

---

## Публикация на GitHub Pages

Чтобы выложить сайт на GitHub Pages (бесплатный хостинг):

1. **Создай репозиторий на GitHub**
   - Зайди на [github.com](https://github.com), нажми **New repository**.
   - Имя репозитория, например: `ML-CV-Learning`.
   - Public, без README (или с — потом добавишь файлы).

2. **Залей файлы проекта**
   - В корень репозитория должны лежать: `index.html`, `styles.css`, `lessons.js`, `references.js`, `flashcards.js`, `app.js`, `ai.js`.
   - Через веб-интерфейс: **Add file → Upload files** — перетащи папку с этими файлами или выбери их.
   - Либо через Git в терминале:
     ```bash
     cd путь/к/ML-CV-Learning
     git init
     git add index.html styles.css lessons.js references.js flashcards.js app.js ai.js README.md
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/ТВОЙ_ЛОГИН/ML-CV-Learning.git
     git push -u origin main
     ```

3. **Включи GitHub Pages**
   - В репозитории: **Settings → Pages** (слева).
   - В блоке **Source** выбери **Deploy from a branch**.
   - **Branch**: `main` (или `master`), папка **/ (root)**.
   - Сохрани (**Save**).

4. **Открой сайт**
   - Через 1–2 минуты сайт будет доступен по адресу:
     **`https://ТВОЙ_ЛОГИН.github.io/ML-CV-Learning/`**

Все данные (API-ключ, чат, флеш-карточки) хранятся в браузере пользователя (localStorage), поэтому на GitHub загружаются только статические файлы — ключи никуда не уходят.

Удачи в обучении.
