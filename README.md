# vue-smarttek-dogs-test

- [DEMO LINK](https://leonbohdan.github.io/vue-smarttek-dogs-test/)

- [CODE](https://github.com/leonbohdan/vue-smarttek-dogs-test)

## SPA-приложение с использованием Vue + Vuex + Vue router.
Приложение получает данные из API и выводит их в клиентскую часть.

    API: https://dog.ceo/dog-api

    Макет-пример: https://www.figma.com/file/qikieeE86iZxUzdj4TpwJM/frontend_test
 
## Главная страница
    - Отображает список изображений всех собак (по умолчанию в рандомном порядке).
    - Сверху находится переключатель с рандомного порядка фото на алфавитный.
    - По стандарту отображается 20 изображений и реализован бесконечный скролл с подгрузкой следующих 20 изображений.
 
## Страницы пород

    - В шапке располагается селект со списком всех доступных пород.
    - При выборе определенной породы происходит роутинг на app.ru/{breed}, например app.ru/husky.
    - При переходе по таким урлам должны загружаться изображения только выбранной породы.
 
## Избранное

    - Каждое изображение можно лайкнуть (иконка сердца), после чего эти изображения можно будет увидеть на странице app.test/favourites. 
    - Информация о лайкнутых фото находится в хранилище браузера.
    - При перезагрузке страницы лайкнутые фото не пропадают.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
