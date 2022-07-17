import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from '@heroicons/react/solid';
import { useRef } from 'react';
import { useRouter } from 'next/router';

const MainLayout = () => {
	const searchInput = useRef(null);
	const router = useRouter();

	const handleSearch = (e) => {
		const term = searchInput.current.value;
		if (!term.trim()) return;
		router.push(`/search?/term=${term.trim()}`);
	};

	return (
		<>
			<form className='flex flex-col items-center mt-40'>
				<Image
					width='300'
					objectFit='cover'
					height='100'
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
				/>
				<div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gary-200 hover:shadow-md focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl'>
					<SearchIcon className='h-5 text-gray-500 mr-3' />
					<input
						ref={searchInput}
						type='text'
						className='flex-grow focus:outline-none'
					/>
					<MicrophoneIcon className='h-5' />
				</div>
				<div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
					<button onClick={handleSearch} className='btn'>
						Google Search
					</button>
					<button className='btn'>I&apos;m Feeling Lucky</button>
				</div>
			</form>
		</>
	);
};
export default MainLayout;
