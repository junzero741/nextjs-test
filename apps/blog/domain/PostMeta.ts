type PostMeta = {
	title: string;
};

export type PostMetaV2 = {
	id: number,
	title: string,
	created_at: string,
	resource_path: string,
	legacy_resource_path: string,
}

export default PostMeta;
