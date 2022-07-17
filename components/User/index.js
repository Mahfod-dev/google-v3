import { useSession, signIn, signOut } from 'next-auth/react';

const User = () => {
	const { data: session } = useSession();

	if (session) {
		console.log(session);
		return (
			<>
				<img
					className='cursor-pointer h-10 w-10 rounded-full'
					onClick={() => signOut()}
					src={session.user.image}
					alt='image-logo'
				/>
			</>
		);
	}

	return (
		<>
			<button
				className='px-2 py-2 text-white bg-blue-500 rounded-sm font-medium hover:bg-blue-400 hover:shadow-md'
				onClick={signIn}>
				Sign in
			</button>
		</>
	);
};
export default User;
