# 렌더링 전략 (번역)

[번역 원문](https://nextjs.org/learn/seo/rendering-and-ranking/rendering-strategies)

<br/>

## 정적 사이트 생성 Static Site Generation (SSG)

[Static site generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) is where your HTML is generated at **build time.** This HTML is then used for each request. Static site generation is probably the best type of rendering strategy for SEO as not only do you have all the HTML on page load because it's [pre-rendered](https://nextjs.org/docs/basic-features/pages#pre-rendering), but it also helps with page performance – now another ranking factor when it comes to SEO.


<br/>

## 서버 사이드 렌더링 Server-Side Rendering (SSR)

Like SSG, [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (SSR) is pre-rendered, which also makes it great for SEO. Instead of being generated at build time, as in SSG, SSR's HTML is generated at request time. This is great for when you have pages that are very dynamic.

<br/>

## Incremental Static Regeneration (ISR)

If you have a very large amount of pages, generating them all at build time may not be feasible. Next.js allows you to create or update static pages after you have built your site.

[Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/overview#incremental-static-regeneration) enables developers and content editors to use static generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages.

<br/>

## 클라이언트 사이드 렌더링 Client Side Rendering (CSR)

[Client-Side Rendering](https://nextjs.org/docs/basic-features/data-fetching/client-side) allows developers to make their websites entirely rendered in the browser with JavaScript. On initial page load a single HTML file is generally served with little to no content until you fetch the JavaScript and the browser compiles everything.

As we commented above, in general Client-Side Rendering is not recommended for optimal SEO.

CSR is perfect for data heavy dashboards, account pages or any page that you do not require to be in any search engine index.

<br/>

## Summary
**The most important thing for SEO is that page data and metadata is available on page load without JavaScript.** In this case SSG or SSR are going to be your best options.


One of the major strengths of Next.js is that each one of the above rendering methods can be done on a per-page basis. You might want your blog posts statically generated, your customers account dashboard client side rendered and then perhaps you have a news feed you want to server-side render.