# Forum App (fullstack mern project)

## Реалізований функціонал
**Авторизація/Реєстрація**
- Авторизація/реєстрація відбувається в одній формі за допомогою логіна (e-mail) та пароля
- Хешування пароля за допомогою бібліотеки bcrypt
- Збереження сесії  в куках (діє впродовж 24 годин)
- JWT token


![sign-in](https://github.com/naz-olegovich/forum-mern-project/blob/main/doc/img/sign-in.png)


![sign-up](https://github.com/naz-olegovich/forum-mern-project/blob/main/doc/img/sign-up.png)


**Перший вигляд**</br>
Список тем, який відсортований за датою/часом останнього коментаря.
На кожній темі розміщено:
- Назва теми
- Короткий опис (не обов'зяково)
- Автор
- Дата створення теми
- Два рядки останього коментаря з датою/часом та автором

Реалізовано навігацію за сторінками (на кожній сторінці 10 тем) та можливість створення нових тем.
Для створення нових тем — форма з `Jodit rich text editor` для зручного форматування тексту.


![new-topic](https://github.com/naz-olegovich/forum-mern-project/blob/main/doc/img/new-topic.png)

Власні теми (теми активного користувача) виділяються зеленим + з'являється кнопка "Видалити тему"
![topics-list](https://github.com/naz-olegovich/forum-mern-project/blob/main/doc/img/topics-list.png)


**Другий вигляд**</br>
Тема з детальним описом та можливістю додати коментарі.
Навігація: по 20 коментарів
![topic-details](https://github.com/naz-olegovich/forum-mern-project/blob/main/doc/img/topic-details.png)



# Контактна інформація
|**Gmail**|**Telegram**|
-------------------------------|-----------|
|*nazar.chopyk@gmail.com*|*https://t.me/naz_olegovich*|



