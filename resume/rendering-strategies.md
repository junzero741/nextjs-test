---
title: 'SEO 최적화를 위한 렌더링 전략 (번역)'
date: '2022-03-18'
---

[원문](https://nextjs.org/learn/seo/rendering-and-ranking/rendering-strategies)

<br/>
<br/>

## 정적 사이트 생성 Static Site Generation (SSG)

정적 사이트 생성 방법인 [Static site generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended)(이하 SSG) 는 **HTML이 빌드 타임에 생성**되는 방식이며, 이 때 생성된 HTML은 유저의 요청이 있을 때마다 사용됩니다.
<br/>

SSG는 [pre-rendered](https://nextjs.org/docs/basic-features/pages#pre-rendering) 방식이기 때문에 SEO 최적화에 있어서 사실상 가장 최선의 방법이라고 알려져 있습니다. (역: pre-rendered 에 대한 아티클은 추후 따로 정리해두겠습니다)

뿐만 아니라 이 pre-rendered 방식 덕분에 페이지 퍼포먼스가 향상되는 효과도 누릴 수 있습니다. 이 때 향상된 페이지 퍼포먼스 역시 SEO 에 긍정적인 영향을 주기도 하구요.

<br/>
<br/>

## 서버 사이드 렌더링 Server-Side Rendering (SSR)

위에서 소개한 SSG와 비슷하게, [서버 사이드 렌더링](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (이하 SSR) 역시 pre-rendered 방식을 사용합니다. 때문에 SSR 도 SEO 최적화에 있어서 좋은 옵션이구요.
<br/>

SSG와 구별되는 SSR만의 특징은 **HTML이 유저의 요청이 있을 때 생성**된다는 점입니다. 매우 동적인 페이지를 개발해야 할 때 좋겠죠?

<br/>
<br/>

## 점진적 정적 페이지 재생성 Incremental Static Regeneration (ISR)

(역: Incremnetal Static Regeneration 에 대한 번역을 어떻게 해야할지 어렵더라구요. 괜찮은 한글 네이밍이 있으시다면 추천해주세요!)
<br/>

만약 자신의 서비스가 매우 많은 양의 페이지를 갖고 있는데 이를 빌드 타임에 한번에 생성해야 한다면 그다지 생산적인 프로세스가 아니겠죠? Next.js 는 페이지 빌드 이후에도 정적인 페이지를 생성하거나 업데이트 할 수 있는 방법을 제공합니다.
<br/>

[점진적 정적 페이지 재생성](https://nextjs.org/docs/basic-features/data-fetching/overview#incremental-static-regeneration) (이하 ISR) 은 개발자들과 콘텐츠 에디터들이 페이지 단위로 정적 페이지를 생성할 수 있는 방식입니다.
<br/>

놀라운 점은, 이렇게 하고도 전체 페이지를 리빌드할 필요가 없다는 점인데요. ISR을 활용하면 점점 많은 페이지를 만들면서도 정적인 페이지 생성 방식의 이점을 가져갈 수 있습니다.

<br/>
<br/>

## 클라이언트 사이드 렌더링 Client Side Rendering (CSR)

[클라이언트 사이드 렌더링](https://nextjs.org/docs/basic-features/data-fetching/client-side) (이하 CSR) 은 브라우저 내 자바스크립트에 의해 사이트가 렌더링되는 방식입니다. 사이트 첫 진입시에 자바스크립트가 로드되고 브라우저가 이를 컴파일하기 전까지는 콘텐츠가 거의, 혹은 전혀 없는 단 하나의 HTML 파일만이 로드됩니다.
<br/>

위에서 언급한 것처럼, 일반적인 **CSR은 SEO최적화를 위해서는 추천하지 않습니다.**
<br/>

CSR은 데이터가 많은 대시보드, 계정 페이지, 혹은 검색 엔진에 의해 인덱싱될 필요가 없는 페이지들에 적용하길 권장합니다.

<br/>
<br/>

## 요약

**SEO에 있어서 가장 중요한 것은 페이지 데이터와 메타데이터가 자바스크립트 없이도 페이지 내에 존재해야 한다는 것입니다.** SSG와 SSR을 추천하는 이유겠죠?
<br/>

Next.js 의 주요 강점 중 하나는 위에서 설명한 렌더링 방법들을 페이지 단위로 각각 다르게 적용할 수 있다는 점입니다. 예를 들면, 블로그 포스트는 SSG 방식으로, 고객 계정 대시보드는 CSR, 뉴스피드는 SSR 방식으로 말이죠.
