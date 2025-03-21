# Completed work calculator

Приложение создано для удобного и информативного подсчета внутренних выплат сотрудникам. Также целью проекта было
выполнение на ванильных технологиях.

## Оглавление

- [Основной функционал](#основной-функционал)
- [Использование приложения](#использование-приложения)
- [Пример вывода приложения](#пример-вывода-приложения)
- [Запуск приложения](#запуск-приложения)
- [Использованные решения](#использованные-решения)
- [История релизов](#история-релизов)

### Основной функционал

- Добавление информации о выполненных работах, таких как:
    - Сборка ПК
    - Установка ОС Windows
    - Выбор способа активации Windows
    - Установка MS Office
    - Копирование информации
    - Свое значение для нестандартных выполненных работ
    - Добавление заметки о проделанной работе
- Копирование в буфер обмена с форматированием текста для удобного восприятия и отправки работадателю
- Управление сохраненной информацией с помощью Local storage (добавление, удаление выбранного, очистка)
- Автоматический подсчет общей суммы за все выполненные работы

### Использование приложения

1. Ввести краткое название работы
2. Выбрать в выпадающих меню необходимые выполненные работы
3. Нажать кнопку "Добавить в список" (информация будет сохранена и скопирована в буфер обмена)
4. Отправить удобным способом информацию из буфера обмена

### Пример вывода приложения

```text
Работа 01.03.2025
----------------------------------
GitHub example 2
Установлена ОС: Windows 10. Ключ подцепился - 1250
Установлен MS Office. Ключ покупал - 1150
Бонус сотрудника - 1500
Итого: 3900 ₽
----------------------------------
GitHub example
Сборка ПК. Игровой - 2500
Установлена ОС: Windows 10. Ключ подцепился - 1250
Копирование информации - 750
Пример заметки
Итого: 4500 ₽
----------------------------------
Общий итог: 8400 ₽
```

# Запуск приложения

1. Клонируйте репозиторий `git clone https://github.com/mlxgang/cwc.git`
2. Запустите файл `start.bat`

# Использованные решения

- HTML
- CSS
- JavaScript
- LocalStorageHandler
- Файл constants для всех постоянных значений
- Множество небольших утилитарных функций
- SVG sprites (использование в html и css)

# История релизов

- 0.6.2
    - Поле допольнительной информации помечается в конечном результате
- 0.6.1
    - Разделение файлов на модули и утилиты. Добавлены уведомления о выполненных действиях. В связи с этим добавлена
      проверка на уникальность названия
      работы. (Кроме случаев, где зарезервированное название "-")
- 0.6
    - Редизайн приложения
- 0.5
    - Изменение алгоритма оформления цен и выполненых услуг
- 0.4
    - Изменение рендера опций.
    - Небольшие изменения в дизайне
- 0.3.1
    - Для удобства восприятия новые элементы добавляются в начало списка.
    - Для актуализации информации в начало добавлены даты выполнения
- 0.3
    - Сохранение информации в local storage.
    - История выполненных работ, удаление выбранных.
    - Разделение информации для рендера и копирования информации для отчетности и выставления счета.

  К сожалению, из-за длительного переноса репозитория на выделенный сервер все последующие изменения, включая версию 0.6
  будут выполнены в одном коммите
- 0.2.1 Фикс бага с отображнием информации об MS Office
- 0.2 Рефакторинг приложения, разделение файлов на базовые модули
- 0.1 MVP приложения
