import Link from 'next/link';

export default async function Laboratory() {
	return (
		<div>
			<ul>
				<li>
					<Link href='/laboratory/monorepo'>사이트 모노레포전환</Link>
				</li>
			</ul>
		</div>
	);
}
