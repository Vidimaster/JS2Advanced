// Задание 1

// Представьте, что у вас есть класс для управления библиотекой. В этом классе будет приватное свойство для хранения списка книг, а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books = [];
    constructor(arr) {
        try {
            if (new Set(arr).size != Object.keys(arr).length) throw "Input has duplicates";
            this.#books = arr;
        }
        catch (err) {
            console.log(err);
        }
    }

    getallBooks() {
        return this.#books;
    }

    addBook(title) {
        try {
            if (this.hasBook(title)) throw "Library already has this book";
            this.#books.push(title);
        }
        catch (err) {
            console.log(err);
        }
    }

    removeBook(title) {
        try {
            if (this.hasBook(title)) throw "Library doesn't have this book";
            this.#books.splice(this.#books.indexOf(title), 1)
        }
        catch (err) {
            console.log(err);
        }
    }

    hasBook(title) {
        return this.#books.includes(title);
    }
}

Library1 = new Library("title1", "title2", "title3");

console.log(Library1.hasBook("title2"));
console.log(Library1.hasBook("title4"));

Library1.removeBook("title2");
Library1.removeBook("title20");

Library1.addBook("title1");
Library1.addBook("title4");

console.log(Library1.getallBooks());

Library2 = new Library(["title1", "title2", "title2", "title3"]);
console.log(Library2.getallBooks());

// Задание 2

// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

initialData.forEach(element => {
    document.getElementById('frm').innerHTML += `<p><b> ${element.product}</b></p>`;
    element.reviews.forEach(elementArr => {
        document.getElementById('frm').innerHTML += `<q> ${elementArr.text}</q><br>`;
    });

});

document.getElementById('frm').innerHTML += `        <br><br><p id="sendRev"><b>Send Review</b></p>
<textarea id="review" name="reviewname" rows="4"
    cols="50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, fuga aliquam! Asperiores dicta quo dolore quod facilis, alias aliquam cum modi amet odit quaerat debitis ea optio quasi ad incidunt?</textarea>
<br>`;

function create() {
    let rev = document.getElementById("review").value;
    try {
        if (rev.length > 500 || rev.length < 50) throw new Error("Incorrect text lenght");
        document.getElementById('frm').innerHTML += `<br><p><b>Product</b></p>`;
        document.getElementById('review').style.display = 'none';
        document.getElementById('btn').style.display = 'none';
        document.getElementById('sendRev').style.display = 'none';
        document.getElementById('frm').innerHTML += `<q> ${rev}</q><br>`;
    }
    catch (err) {
        console.log(err.message);
    }

}

