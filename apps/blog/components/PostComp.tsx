'use client';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import '@/styles/post.scss';
import Post from '@/domain/Post';
import {twMerge} from 'tailwind-merge';

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

	const goToTop = () => {
		scrollTo(0, 0)
	}

	return (
		<div>
			<div className='py-4 mb-10 border-b-4 border-gray-900'>
				<PostTitle>{title}</PostTitle>
				<div className='text-sm text-gray-500'>작성일: {post.publishedAt.toDateString()}</div>
			</div>
			<div className='markdown-body py-4 h-[2000px]' dangerouslySetInnerHTML={{ __html: html }} />
			<button onClick={goToTop} className={'fixed bottom-4 flex justify-center items-center rounded-full w-10 h-10 drop-shadow-lg bg-black text-white text-2xl'}>
				<ArrowIconComp />
			</button>
		</div>
	);
}

type PostTitleProps = {} & JSX.IntrinsicElements['div'];

function PostTitle({ children }: PostTitleProps) {
	return (
		<h1 className='text-4xl font-bold'>{children}</h1>
	);
}

type ArrowIconCompProps = {
} & JSX.IntrinsicElements['svg']

function ArrowIconComp(props:ArrowIconCompProps) {
	const {className, ...rest} = props;

	return (
		<svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={twMerge('rotate-180', className)} {...rest}>
			<path fillRule="evenodd" clipRule="evenodd" d="M5.77405 10.8123C6.15388 10.4113 6.78681 10.3942 7.18775 10.774L16 19.1225L24.8123 10.774C25.2132 10.3942 25.8461 10.4113 26.226 10.8123C26.6058 11.2132 26.5887 11.8461 26.1877 12.226L17.0316 20.9002C16.4531 21.4483 15.5469 21.4483 14.9684 20.9002L5.81226 12.226C5.41133 11.8461 5.39422 11.2132 5.77405 10.8123Z" fill="white"/>
		</svg>
	);
}