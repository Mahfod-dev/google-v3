"use client";

import { MouseEventHandler, useReducer } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { toast, ToastContainer } from 'react-toastify';




interface Props {
    value: string;
    loading: boolean;
}

export const HeaderSearch = () => {

   const router = useRouter();

   const [{value,loading}, setValue] = useReducer((state:Props, newState:Partial<Props>) => ({ ...state, ...newState }),{value:'',loading:false})



const onSubmit = (
	e: React.FormEvent<HTMLFormElement | HTMLButtonElement> 
) => {
	e.preventDefault();
	if (!value) return toast.error('Please enter a search term');

	router.push(`/search/web?searchTerm=${value}`);

    setValue({value:''})
};



const onRandomSearch = async () => {

    setValue({loading:true})

    try {
         const res = await fetch(
				'https://random-word-api.herokuapp.com/word'
			);
			const data: string[] = await res.json();

           
			router.push(`/search/web?searchTerm=${data[0]}`); 
             setValue({ loading: false });
    } catch (error) {
        setValue({loading:false})
        toast.error(`Something went wrong ${error}`)
    }
  
};



	return (
		<>
			<form
				onSubmit={onSubmit}
				className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'
			>
				<AiOutlineSearch className='text-xl text-gray-500 mr-3' />
				<input
					type='text'
					className='flex-grow focus:outline-none'
					value={value}
					onChange={(e) => setValue({ value: e.target.value })}
				/>
				<BsFillMicFill className='text-lg' />
			</form>

			<div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8 '>
				<button type='submit' onClick={onSubmit} className='btn'>
					Google Search
				</button>
				<button
					onClick={onRandomSearch}
					disabled={loading}
					className='btn flex items-center justify-center disabled:opacity-80'
				>
					{loading ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src='spinner.svg'
							alt='loading...'
							className='h-6 text-center'
						/>
					) : (
						'I am Feeling Lucky'
					)}
				</button>
			</div>

			<ToastContainer />
		</>
	);
};


