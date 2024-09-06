import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-6 border border-teal-500 rounded-lg shadow-lg max-w-4xl mx-auto'>
        <div className="flex-1 flex flex-col items-center text-center sm:text-left">
            <h2 className='text-3xl font-bold mb-4 text-teal-600'>
               Play 2048 Game
            </h2>
            <p className='text-gray-700 mb-6 dark:text-white text-center'>
                The 2048 Puzzle Game is an addictive and challenging game that tests your strategic skills.
            </p>
            <Button gradientDuoTone='purpleToPink' className='px-6 py-1 rounded-lg text-white font-semibold text-lg transition-transform transform hover:scale-105 focus:outline-none '>
                <a href="https://manish-shivhare-2048.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    Play Now!
                </a>
            </Button>
        </div>
        <div className="flex-1 flex items-center justify-center p-6">
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ0kjnyMMmDvtS6oiZYbOo6pdiRh2h52EfA&s" 
                alt="2048 game screenshot"
                className='w-full max-w-xs rounded-lg shadow-md'
            />
        </div>
    </div>
  );
}
