// PyTorch - Глубокое погружение
var pytorchToc = [
    { id: 'ref-pytorch-tensors', title: 'Тензоры: Основа PyTorch (deep)' },
    { id: 'ref-pytorch-autograd', title: 'Autograd: Вычисление градиентов (deep)' },
    { id: 'ref-pytorch-nn', title: 'Нейросети: torch.nn и модули (deep)' },
    { id: 'ref-pytorch-optim', title: 'Обучение: Optimizers & Schedulers (deep)' },
    { id: 'ref-pytorch-data', title: 'Данные: Dataset & DataLoader (deep)' },
    { id: 'ref-pytorch-dist', title: 'Продвинутое: GPU, DDP, TorchScript (deep)' }
];

var pytorchTheory = refToc(pytorchToc) +
    '<h3 id="ref-pytorch-tensors" class="ref-section">Тензоры: Основы и операции под капотом</h3>' + 
    '<p class="ref-details">Тензор в PyTorch — это многомерный массив, похожий на NumPy, но с поддержкой аппаратного ускорения (GPU) и автоматического дифференцирования. Память выделяется непрерывно, но операции изменения формы (view, transpose) меняют лишь метаданные (stride), что делает их невероятно быстрыми.</p>' +
    entry(
        'import torch\n\n# Разные способы создания и хранения в памяти\nx = torch.randn(3, 4)\nprint(x.is_contiguous())  # True\n\n# transpose меняет только strides (шаги памяти), не перемещая данные!\ny = x.transpose(0, 1)\nprint(y.is_contiguous())  # False\n\n# Если для операции нужна непрерывная память (например, view):\nz = y.contiguous().view(12)',
        '<strong>Создание и память (Contiguous vs Non-contiguous)</strong><br><br>' + 
        'Многие новички сталкиваются с ошибками вида <code>RuntimeError: input is not contiguous</code> при попытке использовать <code>view()</code> после транспонирования (<code>t()</code>, <code>transpose()</code>).<br><br>' + 
        '<strong>Суть:</strong> Память тензора (data() pointer) представляет собой одномерный массив в RAM/VRAM. Как мы видим этот тензор как 2D-матрицу, зависит от <code>strides</code> (шагов по памяти). У транспонированного тензора шаг не совпадает с физическим расположением. <br><br>' + 
        '<strong>Решение:</strong> вызовите <code>.contiguous()</code>, которая создаст копию тензора с правильным расположением памяти, или используйте <code>.reshape()</code> (которая сама вызовет contiguous под капотом, если нужно).', 
        PT + 'tensors.html', true) +
    
    entry(
        'import torch\n\n# Транслирование (Broadcasting) в PyTorch\na = torch.ones(4, 3)\nb = torch.tensor([1, 2, 3])  # Форма (3,)\n\n# Формы выравниваются с конца:\n# a: (4, 3)\n# b: (1, 3) -> виртуально дублируется до (4, 3)\nres = a + b',
        '<strong>Автоматическое выравнивание форм (Broadcasting)</strong><br><br>' +
        'Broadcasting позволяет выполнять операции между тензорами разной формы без явного копирования данных. Правило: формы выравниваются по правому краю. Если размерность равна 1 или отсутствует, она виртуально растягивается до размера другой переменной.<br><br>' +
        '<strong>Частая ошибка:</strong> При сложении тензора формы <code>(batch_size, 1)</code> и <code>(batch_size,)</code>, PyTorch сделает broadcast до <code>(batch_size, batch_size)</code>, что приведет к переполнению памяти или скрытым багам! Всегда проверяйте форму через <code>x.shape</code> и используйте <code>unsqueeze()</code> для явного добавления размерностей.',
        PT + 'notes/broadcasting.html', true) +
        
    '<h3 id="ref-pytorch-autograd" class="ref-section">Autograd: Автоматическое дифференцирование</h3>' +
    '<p class="ref-details">Autograd — сердце PyTorch. Он динамически строит граф вычислений на каждом прямом проходе (forward pass), запоминая историю операций для вычисления градиентов по правилу производной сложной функции (chain rule).</p>' +
    entry(
        'import torch\n\nx = torch.tensor([2.0, 3.0], requires_grad=True)\ny = x ** 2\nz = y.mean()\n\n# Запуск обратного прохода\nz.backward()\n\n# Градиенты dz/dx\nprint(x.grad)  # tensor([1.0000, 1.5000])\n\n# Отключение графа для Inference:\nwith torch.no_grad():\n    predictions = model(inputs)',
        '<strong>Механика backward() и графы вычислений</strong><br><br>' +
        'Любой тензор, созданный с <code>requires_grad=True</code>, начинает отслеживать операции над ним. Каждая операция (сложение, умножение, слой сети) добавляет узел (Function) в граф (например, <code>PowBackward</code>, <code>MeanBackward</code>).<br><br>' +
        'При вызове <code>loss.backward()</code>, PyTorch проходит по этому направленному ациклическому графу от конца к началу (backpropagation). Градиенты суммируются (накапливаются) в атрибуте <code>.grad</code> каждого листового тензора.<br><br>' +
        '<strong>Особенности:</strong><br>' +
        '1. Граф строится динамически (define-by-run). На каждой итерации можно использовать новые if/else условия, циклы; граф подстроится.<br>' +
        '2. После вызова <code>backward()</code> граф уничтожается (для экономии памяти). Если нужно сделать backward дважды, используйте <code>backward(retain_graph=True)</code>.<br>' +
        '3. Оборачивайте валидацию (Inference) в <code>with torch.no_grad():</code>. Это отключит слежение за операциями, сократив потребление памяти VRAM в 2-3 раза!',
        PT + 'autograd.html', true) +

    '<h3 id="ref-pytorch-nn" class="ref-section">Модули torch.nn: От слоёв до архитектур</h3>' +
    entry(
        'import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass CustomModel(nn.Module):\n    def __init__(self):\n        super().__init__()\n        # Параметры автоматически регистрируются\n        self.conv1 = nn.Conv2d(in_channels=3, out_channels=32, kernel_size=3)\n        self.bn1 = nn.BatchNorm2d(32)\n        self.fc = nn.Linear(32 * 26 * 26, 10)\n        self.dropout = nn.Dropout(p=0.5)\n        \n    def forward(self, x):\n        # x: (Batch, 3, 28, 28)\n        x = self.conv1(x)\n        x = self.bn1(x)  # BatchNorm до или после ReLU - предмет дебатов\n        x = F.relu(x)\n        x = torch.flatten(x, start_dim=1)\n        x = self.dropout(x)\n        x = self.fc(x)\n        return x',
        '<strong>Анатомия nn.Module</strong><br><br>' +
        'Все нейросети в PyTorch наследуются от <code>nn.Module</code>. <br><br>' +
        '<strong>Метод __init__:</strong> Здесь ВЫ ОБЯЗАНЫ определить слои, имеющие обучаемые веса (параметры) или внутренние состояния (как running mean в BatchNorm). При присваивании <code>self.layer = ...</code> PyTorch через метапрограммирование видит этот слой и добавляет его параметры во внутренний словарь. Вызов <code>model.parameters()</code> вернет веса именно отсюда.<br><br>' +
        '<strong>Прямой проход (forward):</strong> Описывает путь градиента. Внутри вы можете комбинировать слои из init, операции над тензорами (сложение, срезы), и функции из <code>torch.nn.functional</code> (как <code>F.relu</code>). Важно: слои без параметров (Dropout, ReLU) можно (и часто нужно) использовать через <code>F.*</code>, так как они не требуют инициализации в <code>__init__</code>.<br><br>' +
        'Не забывайте про <code>model.train()</code> и <code>model.eval()</code>! Эти методы не запускают сеть, а лишь переключают флаги для Dropout и BatchNorm (чтобы Dropout выключался на инференсе, а BN использовал накопленную среднюю, а не среднюю по батчу).',
        PT + 'nn.html', true) +

    '<h3 id="ref-pytorch-optim" class="ref-section">Оптимизаторы и планировщики (Schedulers)</h3>' +
    entry(
        'import torch.optim as optim\nfrom torch.optim.lr_scheduler import CosineAnnealingWarmRestarts\n\noptimizer = optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-2)\n# Планировщик Learning Rate\nscheduler = CosineAnnealingWarmRestarts(optimizer, T_0=10, T_mult=2)\n\nfor epoch in range(100):\n    for x, y in dataloader:\n        optimizer.zero_grad()\n        loss = criterion(model(x), y)\n        loss.backward()\n        \n        # Gradient Clipping (стабилизация)\n        torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)\n        \n        optimizer.step()\n    \n    # Вызов scheduler только ПОСЛЕ эпохи (или батча, зависит от scheduler)\n    scheduler.step()',
        '<strong>Секреты стабильного обучения (AdamW, Clipping, Warmup)</strong><br><br>' +
        'Классический SGD часто сходится медленно, поэтому индустриальный стандарт — <code>AdamW</code> (Adam с правильной реализацией Weight Decay для L2-регуляризации).<br><br>' +
        '<strong>Gradient Clipping:</strong> Резко возрастающие градиенты (особенно в RNN и глубоких CNN) могут сломать веса за 1 шаг, выдав <code>NaN</code>. Функция <code>clip_grad_norm_</code> ограничивает суммарную длину вектора градиентов безопасным значением до шага оптимизатора.<br><br>' +
        '<strong>Планировщики кривой обучения (Learning Rate Schedulers):</strong> Обучение с фиксированным LR почти всегда дает субоптимальный результат. <code>CosineAnnealingWarmRestarts</code> плавно снижает LR по кривой косинуса, а затем делает резкий "рестарт" (отскок вверх), помогая модели выскочить из локальных минимумов.',
        PT + 'optim.html', true) +

    '<h3 id="ref-pytorch-dist" class="ref-section">Продвинутое: Развертывание и Распределенное обучение (DDP)</h3>' +
    entry(
        'import torch\nimport torch.distributed as dist\nfrom torch.nn.parallel import DistributedDataParallel as DDP\n\n# В скрипте (инициируется через torchrun):\n# dist.init_process_group("nccl")\n# rank = dist.get_rank()\n# device_id = rank % torch.cuda.device_count()\n# torch.cuda.set_device(device_id)\n\n# model = model.to(device_id)\n# ddp_model = DDP(model, device_ids=[device_id])\n\n# Синхронизация градиентов происходит автоматически в backward!\nprint("DDP обучает модель на множестве GPU в 2-10 раз быстрее DataParallel")',
        '<strong>DistributedDataParallel (DDP) vs DataParallel (DP)</strong><br><br>' +
        'Если вы обучаете на 2+ GPU, забудьте про <code>nn.DataParallel</code>! DP раскидывает батч по картам, а потом каждый шаг *собирает* веса обратно на Master GPU. Это создает колоссальное бутылочное горлышко (bottleneck).<br><br>' +
        '<strong>DDP (DistributedDataParallel)</strong> использует мультипроцессорность: на каждый GPU запускается свой независимый процесс Python с собственной копией модели и оптимизатора. В конце каждого <code>backward()</code>, процессы обмениваются *только градиентами* через сверхбыструю шину NCCL (All-Reduce operation). Это обеспечивает практически линейное ускорение (Scale-up) при добавлении видеокарт.',
        PT + 'distributed.html', true) +
        
    entry(
        'import torch\n\n# TorchScript: экспорт модели из Python\n# Подход 1: Трассировка (Tracing) — работает если нет if/else\ntraced_model = torch.jit.trace(model, example_inputs=torch.randn(1, 3, 224, 224))\n\n# Подход 2: Скриптование (Scripting) — компилирует логику Python (циклы, if)\nscripted_model = torch.jit.script(model)\n\nscripted_model.save("model_prod.pt")\n\n# В C++ (libtorch) можно просто вызвать: \n# torch::jit::load("model_prod.pt");',
        '<strong>TorchScript: Как унести PyTorch в production (С++)</strong><br><br>' +
        'PyTorch изначально — динамический фреймворк, привязанный к Python (с его GIL и медлительностью). Но что, если модель нужно запустить на мобильном телефоне, сервере на C++ или микроконтроллере?<br><br>' +
        'Для этого существует <strong>TorchScript</strong> — промежуточное представление (IR), которое не зависит от Python.<br><br>' +
        '<strong>Выбор пути:</strong><br>' +
        '<code>torch.jit.trace</code> "прогоняет" пример входа через сеть и записывает все математические операции. Но он не сможет записать динамические ветвления (<code>if x.sum() &gt; 0:</code>).<br>' +
        '<code>torch.jit.script</code> анализирует абстрактное синтаксическое дерево (AST) вашего Python кода и компилирует его вместе с логическими ветвлениями! Это сложнее заставить работать (тип аргументов должен быть аннотирован), но это самый мощный метод развертывания.',
        PT + 'jit.html', true)
;