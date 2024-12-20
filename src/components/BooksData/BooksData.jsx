import BookData from "../BookData/BookData";

const BooksData = () => {

    const booksData = [
        { 
          id: 1, 
          title: 'The Catcher in the Rye', 
          author: 'J.D. Salinger', 
          description: 'A story about a disillusioned teenager, Holden Caulfield.', 
          rating: 4, 
          category: 'Fiction', 
          availability: true,
          status: 'Available',
          publishedYear: 1951
        },
        { 
          id: 2, 
          title: 'To Kill a Mockingbird', 
          author: 'Harper Lee', 
          description: 'A novel about the racial injustices in the American South.', 
          rating: 5, 
          category: 'Classic', 
          availability: false,
          status: 'Checked Out',
          publishedYear: 1960
        },
        { 
          id: 3, 
          title: '1984', 
          author: 'George Orwell', 
          description: 'A dystopian novel that explores the dangers of totalitarianism.', 
          rating: 4, 
          category: 'Dystopian', 
          availability: true,
          status: 'Available',
          publishedYear: 1949
        },
        { 
          id: 4, 
          title: 'Moby-Dick', 
          author: 'Herman Melville', 
          description: 'The story of Captain Ahab’s obsession with hunting a giant white whale.', 
          rating: 3, 
          category: 'Adventure', 
          availability: true,
          status: 'Available',
          publishedYear: 1851
        },
        { 
          id: 5, 
          title: 'Pride and Prejudice', 
          author: 'Jane Austen', 
          description: 'A romantic novel set in the early 19th century England.', 
          rating: 5, 
          category: 'Romance', 
          availability: false,
          status: 'Reserved',
          publishedYear: 1813
        },
      ];


    return (
        <div>
            <h1>Books Data</h1>
            {
                booksData.map(bookData => <BookData id={bookData.id} bookData={bookData}></BookData>)
            }
        </div>
    );
};

export default BooksData;