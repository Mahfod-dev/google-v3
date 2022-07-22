import SearchHeader from '../components/search';
import axios from 'axios';

const Search = ({ results }) => {
	console.log(results);
	return (
		<>
			<SearchHeader />
		</>
	);
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import Response from '../Response.js';

export const getServerSideProps = async (ctx) => {
	const mockData = true;
	const data = mockData
		? Response
		: await axios(
				`https://www.googleapis.com/customsearch/v1?key=${
					process.env.API_KEY
				}&cx=${process.env.CONTEXT_KEY}&q=${ctx.query.term}${
					ctx.query.searchType && 'searchType=image'
				}`
		  );

	return {
		props: {
			results: data,
		},
	};
};

export default Search;
