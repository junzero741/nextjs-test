---
title: 'Pre-rendering의 두 가지 형태(번역)'
date: '2022-03-22'
---

[원문](https://nextjs.org/learn/basics/data-fetching/two-forms)

Next.js 는 두 가지 형태의 pre-rendering을 지원합니다. **Static Generation**(이하 SSG) 와 **Server-side Rendering**(이하 SSR)이 바로 그것인데요.
<br/>

이 둘의 차이는 웹 페이지를 그리고자 할 때 **언제 HTML을 생성하냐** 입니다.

<br/>

- **[SSG](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)** 는 **빌드 타임에 HTML을 생성**하는 pre-rendering 방식입니다. 이 때 생성된 HTML은 유저의 리퀘스트가 있을 때마다 _재사용_ 됩니다.
- **[SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering)** 는 유저의 **리퀘스트가 있을 때 마다 HTML을 생성**하는 방식입니다.

<br/>
<br/>

중요한 것은, Next.js 를 사용하면 위에서 소개한 pre-rendering의 방식 중 하나를 페이지 단위로 선택할 수 있다는 겁니다. 대부분의 정적인 페이지는 기본적으로 SSG 방식을 사용하고, 몇몇 페이지에는 SSR를 적용하는 식으로요.

<br/>
<br/>

> `npm run dev` 등으로 구동한 개발 서버에서는 SSG 방식을 사용한 컴포넌트, 혹은 페이지라고 해도 매 리퀘스트가 있을 때마다 페이지가 pre-rendering 됩니다.