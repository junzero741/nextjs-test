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

	return (
		<div>
			<PostTitle>{post.postName}</PostTitle>
			<div className='markdown-body py-4' dangerouslySetInnerHTML={{ __html: html }} />
		</div>
	);
}

type PostTitleProps = {} & JSX.IntrinsicElements['div'];

function PostTitle({ children }: PostTitleProps) {
	return (
		<div className='py-4 border-b-4 font-bold border-black'>
			<h1 className='text-4xl'>{children}</h1>
		</div>
	);
}
