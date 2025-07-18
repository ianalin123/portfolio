import { ExternalLink, BookOpen } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  author: string;
  rating?: number;
  status: 'currently-reading' | 'read' | 'to-read';
  cover?: string;
  goodreadsLink?: string;
}

// Sample books - in real implementation, this would come from Goodreads API
const currentlyReading: Book[] = [
  {
    id: '1',
    title: 'Gödel, Escher, Bach',
    author: 'Douglas R. Hofstadter',
    status: 'currently-reading',
    goodreadsLink: 'https://www.goodreads.com/book/show/24113.G_del_Escher_Bach'
  },
  {
    id: '2',
    title: 'Being Mortal',
    author: 'Atul Gawande',
    status: 'currently-reading',
    goodreadsLink: 'https://www.goodreads.com/book/show/20696006-being-mortal'
  }
];

const recentlyRead: Book[] = [
  {
    id: '3',
    title: 'An Immense World',
    author: 'Ed Yong',
    status: 'read',
    rating: 4,
    goodreadsLink: 'https://www.goodreads.com/book/show/59575939-an-immense-world'
  },
  {
    id: '4',
    title: 'When Breath Becomes Air',
    author: 'Paul Kalanithi',
    status: 'read',
    rating: 4,
    goodreadsLink: 'https://www.goodreads.com/book/show/25899336-when-breath-becomes-air'
  }
];

export default function ReadingSection() {
  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex text-neural-500 text-xs">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-neural-600' : 'text-gray-300'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const BookCard = ({ book }: { book: Book }) => (
    <div className="vintage-border glassmorphism rounded-lg p-4 hover:scale-105 transition-transform duration-200">
      <div className="flex items-start justify-between mb-2">
        <BookOpen className="text-neural-500 flex-shrink-0 mt-1" size={16} />
        {book.goodreadsLink && (
          <a
            href={book.goodreadsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neural-500 hover:text-neural-700 transition-colors duration-200"
          >
            <ExternalLink size={12} />
          </a>
        )}
      </div>
      <h4 className="font-serif text-sm font-semibold mb-1 leading-tight">{book.title}</h4>
      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{book.author}</p>
      {book.rating && renderStars(book.rating)}
    </div>
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-mono text-sm font-medium mb-3 flex items-center">
          <span className="mr-2"></span>
          Currently Reading
        </h3>
        <div className="grid gap-3">
          {currentlyReading.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-mono text-sm font-medium mb-3 flex items-center">
          <span className="mr-2">✓</span>
          Recently Finished
        </h3>
        <div className="grid gap-3">
          {recentlyRead.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <a
          href="https://www.goodreads.com/user/show/145074354-iana"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-mono text-gray-500 hover:text-neural-600 transition-colors duration-200"
        >
          <span>More on Goodreads</span>
          <ExternalLink className="ml-1" size={10} />
        </a>
      </div>
    </div>
  );
}