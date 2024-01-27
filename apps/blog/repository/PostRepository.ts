import Post from '@/domain/Post';
import PostMeta from '@/domain/PostMeta';
import { AwsS3Utils } from '@/utils/awsS3Utils';

export default interface PostRepository {
	store: AwsS3Utils;
	getPost: (postName: string) => Promise<Post | undefined>;
	getPosts: () => Promise<{ posts: PostMeta[]; totalCount: number } | undefined>;
}
