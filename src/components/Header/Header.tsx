import Link from "next/link"
import { TbGridDots } from 'react-icons/tb';

export const Header = () => {
  return (
		<header className='flex justify-end p-2 text-sm'>
			<nav>
				<ul className='flex space-x-3 items-center'>
					<Link
						href='https://mail.google.com'
						className='hover:underline'
					>
						Gmail
					</Link>
					<Link
						href='https://image.google.com'
						className='hover:underline'
					>
						Images
					</Link>

					<TbGridDots className='bg-transparent hover:bg-red-200 rounded-full text-4xl p-2' />
					<button className=' bg-blue-600 rounded-lg p-2 text-white capitalize font-medium hover:bg-blue-800 hover:brightness-105 hover:shadow-md transition-shadow active:translate-y-1'>
						sign in
					</button>
				</ul>
			</nav>
		</header>
  );
}