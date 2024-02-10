'use client';
import { Marked } from 'marked';
import { markedHighlight } from 'marked-highlight';
import hljs from 'highlight.js';
import '@/styles/post.scss';

const marked = new Marked(
       markedHighlight({
               langPrefix: 'hljs language-',
               highlight(code, lang) {
                       const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                       return hljs.highlight(code, { language }).value;
               },
       })
);

export default function PostContentComp({ content }: { content: string }) {
       const html = marked.parse(content || '');

       return (
               <div>
                       <div className='markdown-body py-4' dangerouslySetInnerHTML={{ __html: html }} />
               </div>
       );
}
