let createBook = (_title, author, pages) => {
    book = {
        _title,
        author,
        pages
    }
    return book;
}

keras = createBook('Learn Keras', 'Vidit', 200)

let getSummary = (book) => {
    return {
        summary: `${book._title}  and Author is  ${book.author}`

    }
    console.log(`Author is : ${book.author} ,Number of Pages  ${book.pages}`)
}
console.log(getSummary(keras))

let getTempConverter = (tempInFahrenheit) => {
    return {
        fahrenheit: tempInFahrenheit,
        kelvin: (tempInFahrenheit + 459.67) * (5 / 9),
        celsius: (tempInFahrenheit - 32) * (5 / 9)
    }
}
let temps = getTempConverter(74)
console.log(temps)