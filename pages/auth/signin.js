import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

const Signin = ({ providers }) => {
	console.log(providers);
	return (
		<>
			<div className='text-center'>
				{Object.values(providers).map((provider, index) => {
					return (
						<>
							<div className='mt-10' key={index}>
								<Image
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
									width={450}
									height={154}
									layout='intrinsic'
								/>

								<p className='text-green-700 text-sm mt-3'>Just to learn 😜</p>
								<button
									className='mt-10 bg-orange-600 px-1 py-2 rounded capitalize font-light text-white hover:scale-95 hover:bg-orange-400 text-lg'
									onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
									Sign in with {provider.name}
								</button>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
};
export default Signin;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
