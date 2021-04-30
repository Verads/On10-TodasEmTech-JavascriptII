let books = [
    {
        isbn: "9781593275846",
        title: "Eloquent JavaScript, Second Edition",
        subtitle: "A Modern Introduction to Programming",
        author: "Marijn Haverbeke",
        published: "2014-12-14T00:00:00.000Z",
    },
    {
        isbn: "9781449331818",
        title: "Learning JavaScript Design Patterns",
        subtitle: "A JavaScript and jQuery Developer's Guide",
        author: "Addy Osmani",
        published: "2012-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781449365035",
        title: "Speaking JavaScript",
        subtitle: "An In-Depth Guide for Programmers",
        author: "Axel Rauschmayer",
        published: "2014-02-01T00:00:00.000Z",
    },
    {
        isbn: "9781491950296",
        title: "Programming JavaScript Applications",
        subtitle: "Robust Web Architecture with Node, HTML5, and Modern JS Libraries",
        author: "Eric Elliott",
        published: "2014-07-01T00:00:00.000Z",
    },
    {
        isbn: "9781593277574",
        title: "Understanding ECMAScript 6",
        subtitle: "The Definitive Guide for JavaScript Developers",
        author: "Nicholas C. Zakas",
        published: "2016-09-03T00:00:00.000Z",
    },
    {
        isbn: "9781491904244",
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        published: "2015-12-27T00:00:00.000Z",
    },
    {
        isbn: "9781449325862",
        title: "Git Pocket Guide",
        author: "Richard E. Silverman",
        published: "2013-08-02T00:00:00.000Z",
    },
    {
        isbn: "9781449337711",
        title: "Designing Evolvable Web APIs with ASP.NET",
        author: "Glenn Block, et al.",
        published: "2014-04-07T00:00:00.000Z",
    },     
]

document.querySelector('#enviar').addEventListener('click', function verificarCampos(event){
    event.preventDefault();
    let titulo = document.getElementById('titulo');
    let autor = document.getElementById('autor');
    let isbn = document.getElementById('isbn');
    let dataDePublicacao = document.getElementById('data-de-publicacao');
    let aviso = document.getElementById('texto-de-erro');

    titulo.value === '' || autor.value === '' || isbn.value === '' || dataDePublicacao.value === '' ? aviso.innerText = 'Existem campos obrigatórios em branco.' : aviso.innerText = 'Dados salvos com sucesso.';

    limparCampos();
});

function limparCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('isbn').value = '';
    document.getElementById('data-de-publicacao').value = '';
}

// a conversão de strings com o construtor de Date (Date.parse é equivalente ao contrutor) é fortemente desencorajada devido às inconsistências e diferenças dos navegadores


function mostrarLivros() {
    let data = new Date(books.published);
    console.log(data);
    let mostraLivro = books.map(book => `<li><div id='livro'><strong>ISBN:</strong> ${book.isbn} <strong>Título:</strong>${book.title} <strong>Autor:</strong> ${book.author} <strong>Publicação:</strong>  ${book.published} <button class="deletar">Deletar livro</button></div> </li>`).join('\n');
    document.querySelector('ul').innerHTML = mostraLivro;
}

mostrarLivros();

document.querySelector('ul').addEventListener('click', function apagarLivro(event){
    if (event.target.className === "deletar"){
        let btn = event.target.parentElement;
        btn.parentElement.remove();
    };
})

function salvarLivros() {

    let pegaTitulo = document.getElementById('titulo').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaIsbn = document.getElementById('isbn').value;
    let pegaData = document.getElementById('data-de-publicacao').value;

    books.push({"isbn": pegaIsbn, "title": pegaTitulo, "author": pegaAutor, "published": pegaData});    
    mostrarLivros();
}