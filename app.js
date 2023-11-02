const books = require('./data/books.json');
const express = require('express');
const app = express();
const port = 3000;


app.get("/all", (req, res) => {
  res.status(200).json(books);
});


//1. devuelve todos (json)
app.get("/all", (req, res) => {
    res.status(200).json(books);
  });

//2. devuelve el primer libro (json)
app.get('/first', (req, res)=> {
    const first = books[0];
    res.status(200).json(first)
})

//3. devuelve el último (json)
app.get('/last', (req, res)=> {
    const last = books[99];
    res.status(200).json(last)
})

//4.
app.get('/middle', (req, res)=> {
    const middle = books[50];
    res.status(200).json(middle)
})

//5. devuelve título (json)
app.get("/author/dante-alighieri", (req, res) => {

    const book = books.find(book => book.author === "Dante Alighieri");
    res.status(200).json(book.title);
});

//6. devuelve país del libro de Dickens (json)
app.get("/country/charles-dickens", (req, res) => {

    const book = books.find(book => book.author === "Charles Dickens");
    res.status(200).json(book.country);
});


//7. devuelve páginas y año de libro de Miguel de Cervantes
app.get("/year&pages/cervantes", (req, res) => {

    const book = books.find(book => book.author === "Miguel de Cervantes");
    const data = {
        pages: book.pages,
        year : book.year
    }
    res.status(200).json(data);
});

//8. devuelve número de libros cuyo país es España
app.get("/country/count/spain", (req, res) => {
    let count = 0;
    
    for (i = 0; i< books.length; i++){
        if(books[i].country === 'Spain'){
            count++
           
        }
    
    }
 res.status(200).json(count);
});


// //9. devuelve true o false si el libro es de Alemania
app.get("/country/at-least/germany", (req, res) => {
    for (i = 0; i< books.length; i++){
        if(books[i].country === 'Germany'){
            res.status(200).json(false);
                      
        }else{
            res.status(200).json(true);
        }
    
    }
 
    
});


// //10. devuelve true or false si todos los libros tienen más de 200pag.
// app.get("/pages/all-greater/200", (req, res) => {
//     if(){

//     }
   
 
//     res.status(200).json(count);
// });



app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })


