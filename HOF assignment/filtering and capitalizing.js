const books = [
    {title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
    {title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
    {title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813},
    {title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008},
    {title: 'The Road', author: 'Cormac McCarthy', year: 2006},
  ];
  
  const filteredBooks = books
    .filter(book => book.year >= 2010)
    .map(book => ({...book, author: book.author.toUpperCase()}));
  
  console.log(filteredBooks);
  