import Link from 'next/link';

export default async function Laboratory() {
	return (
		<div>
			<ul>
				<li>
					<Link href='/laboratory/og-image-test'>OG이미지 테스트</Link>
				</li>
				<li>
					<Link href='/laboratory/posts'>새로운 게시글 목록</Link>
				</li>
			</ul>
		</div>
	);
}
