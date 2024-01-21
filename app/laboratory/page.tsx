import Link from 'next/link';

export default async function Laboratory() {
	return (
		<div>
			<ul>
				<li>
					<Link href='/laboratory/todo'>투두리스트</Link>
				</li>
			</ul>
		</div>
	);
}
