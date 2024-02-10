import { DOMAIN } from '@/utils/constants';

import {fetchAs} from '@repo/my-utils'
import {PostMetaV2} from '@/domain/PostMeta';
import PostMetaListCompV2 from '@/components/PostMetaListCompV2';

export default async function Posts() {
  const posts = await fetchAs<PostMetaV2[]>(`${DOMAIN.origin}/api/posts`);

  return <div>{posts ? <PostMetaListCompV2 posts={posts} /> : <>Loading...</>}</div>;
}