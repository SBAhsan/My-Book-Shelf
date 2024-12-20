const BookData = ({bookData}) => {

    const { title, author, publishedYear, rating, category, availability, status } = bookData;

    return (
        <div className="border-2 flex gap-40 pl-20">
            <div className="w-40">
                <h1>{title}</h1>
                <div className="flex gap-2 text-sm">
                    <p>{author},</p>
                    <p>{publishedYear}</p>
                </div>
            </div>
            <p>{rating}</p>
            <p>{category}</p>
            <p>{availability}</p>
            <p>{status}</p>
        </div>
    );
};

export default BookData;