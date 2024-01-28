'use client';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import '@/styles/post.scss';
import Post from '@/domain/Post';

const marked = new Marked(
	markedHighlight({
		langPrefix: 'hljs language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext';
			return hljs.highlight(code, { language }).value;
		},
	})
);

export default function PostComp({ post }: { post: Post }) {
	const html = marked.parse(post.postContent || '');
	const title = post.postName.replaceAll('-', ' ');

	return (
		<div>
			<div className='py-4 mb-10 border-b-4 border-gray-900'>
				<PostTitle>{title}</PostTitle>
				<div className='text-sm text-gray-500'>작성일: {post.publishedAt.toLocaleDateString()}</div>
			</div>
			<div className='markdown-body py-4' dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
}

type PostTitleProps = {} & JSX.IntrinsicElements['div'];

function PostTitle({ children }: PostTitleProps) {
	return (
		<h1 className='text-4xl font-bold'>{children}</h1>
	);
}
