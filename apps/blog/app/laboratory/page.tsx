import Link from 'next/link';

export default async function Laboratory() {
	return (
		<div>
			<ul>
				<li>
					<Link href='/laboratory/og-image-test'>OG이미지 테스트</Link>
				</li>
			</ul>
		</div>
	);
}
