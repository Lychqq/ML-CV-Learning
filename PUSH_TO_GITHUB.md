# Как залить проект на GitHub

Локально уже всё готово: репозиторий создан, файлы закоммичены.

## Что сделать самому

### 1. Создать репозиторий на GitHub

1. Зайди на [github.com](https://github.com) и войди в аккаунт.
2. Нажми **New** (или **+** → **New repository**).
3. **Repository name:** `ML-CV-Learning` (или любое другое).
4. **Public**, галочку **Add a README file** не ставь (README уже есть в проекте).
5. Нажми **Create repository**.

### 2. Привязать папку к репозиторию и отправить код

В терминале (PowerShell или cmd) выполни:

```bash
cd C:\Users\Lenovo\Desktop\ML-CV-Learning
git remote add origin https://github.com/ТВОЙ_ЛОГИН_GITHUB/ML-CV-Learning.git
git push -u origin main
```

Замени **ТВОЙ_ЛОГИН_GITHUB** на свой логин GitHub (как в адресе профиля).

Git попросит авторизацию: логин и **Personal Access Token** (пароль от аккаунта для Git сейчас не подойдёт). Токен создаётся так: GitHub → Settings → Developer settings → Personal access tokens → Generate new token. Поставь право **repo** и скопируй токен — его вводишь вместо пароля при `git push`.

### 3. Включить GitHub Pages

В репозитории на GitHub: **Settings** → слева **Pages** → **Source**: Deploy from a branch → ветка **main**, папка **/ (root)** → **Save**.

Через 1–2 минуты сайт будет доступен по адресу:

**https://ТВОЙ_ЛОГИН_GITHUB.github.io/ML-CV-Learning/**
