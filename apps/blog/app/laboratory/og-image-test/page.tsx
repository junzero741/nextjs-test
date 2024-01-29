import { DOMAIN } from "@/utils/constants";

export default async function OgImageTest() {
  const title = '브라우저에서 이미지를 자를때 고려할것들';
  const description = '설명입니다.';

  const image = await fetch(`${DOMAIN.origin}/api/og?title=${title}&description=${description}`);

	return (
		<div>
			<img src={image.url} />
		</div>
	);
}
