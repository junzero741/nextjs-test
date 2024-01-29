import Post from '@/domain/Post';
import PostRepository from './PostRepository';
import awsS3Utils from '@/utils/awsS3';

class PostRepositoryImpl implements PostRepository {
	store = awsS3Utils;
	path = 'posts/';
	postExtension = '.md';

	async getPost(postName: string): Promise<Post> {
		const response = await this.store.getResource(`${this.path}${postName}${this.postExtension}`);
		if (response) {
			const publishedAt = new Date(response.Metadata?.['published-at'] || 0);
			const postContent = await response?.Body?.transformToString();
			return { postName, postContent: postContent || '', publishedAt: publishedAt};
		} else {
			return { postName: `${this.path}${postName}${this.postExtension}`, postContent: 'post not found', publishedAt: new Date(0) };
		}
	}

	async getPosts() {
		const response = await this.store.getResources(this.path);

		if (response?.Contents) {
			return {
				posts: response.Contents.map((resource) => ({
					lastModifed: resource.LastModified!,
					title: this.remainOnlyTitleFromKey(resource.Key!),
				}))
					.filter((post) => !!post.title)
					.sort((a, b) => b.lastModifed.getTime() - a.lastModifed.getTime()),
				/**
				 * posts/ 폴더 자체도 KeyCount 에 포함되므로 폴더를 제외한 숫자
				 */
				totalCount: response.KeyCount! - 1,
			};
		}
	}

	remainOnlyTitleFromKey(key: string): string {
		const pathRegularExpression = new RegExp(this.path);
		const postExensionRegularExpression = new RegExp(this.postExtension);
		const newKey = key.replace(pathRegularExpression, '').replace(postExensionRegularExpression, '');

		return newKey;
	}
}

const instance = new PostRepositoryImpl();
export default instance;
