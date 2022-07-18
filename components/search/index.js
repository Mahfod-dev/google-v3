import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { XIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import User from '../User/index';
import SearchHeaderOptions from './SearchHeaderOptions';

const SearchHeader = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const searchHandle = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term.trim()) return;
		router.push(`/search?term=${term.trim()}`);
	};

	return (
		<header className='stycky top-0 bg-white'>
			<div className='flex w-full p-6 items-center justify-around'>
				<Image
					onClick={() => router.push('/')}
					width='120'
					objectFit='cover'
					height='40'
					className='cursor-pointer'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
				/>

				<form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 flex-grow mr-5 ml-5 max-w-3xl items-center'>
					<input
						type='text'
						defaultValue={router.query.term}
						ref={searchInputRef}
						className='w-full focus:outline-none'
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = '')}
						className='h-7 hidden sm:inline-flex text-gray-500 cursor-pointer sm:mr-3'
					/>
					<MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2' />
					<SearchIcon className='h-6 text-blue-500' />
					<button onClick={searchHandle} type='submit' hidden></button>
				</form>
				<User className='ml-auto whitespace-nowrap' />
			</div>
			<SearchHeaderOptions />
		</header>
	);
};
export default SearchHeader;
