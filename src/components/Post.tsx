"use client";
import { marked } from 'marked';
import 'github-markdown-css';

export default function Post({markdownString}: {markdownString?: string}) {

  const html = marked.parse(markdownString || '');

  return (
    <div className='markdown-body' dangerouslySetInnerHTML={{__html: html}} />
  )
}
