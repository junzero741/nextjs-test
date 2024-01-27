import Balls from '@/components/three/Balls';
import PostRepositoryImpl from '@/repository/PostRepositoryImpl';

export default async function Home() {
	const { totalCount = 0 } = (await PostRepositoryImpl.getPosts()) || {};

	return (
		<div className='w-full h-full absolute left-0 top-0'>
			<Balls count={totalCount} />
		</div>
	);
}
