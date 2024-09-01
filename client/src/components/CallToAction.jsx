import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
               Play 2048 game
            </h2>
            <p className='text-gray-500 my-2'>
            2048 Puzzle Game is an addictive and challenging
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://manish-shivhare-2048.netlify.app/" target='_blank' rel='noopener noreferrer'>
                    Play now!
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJ0kjnyMMmDvtS6oiZYbOo6pdiRh2h52EfA&s" />
        </div>
    </div>
  )
}