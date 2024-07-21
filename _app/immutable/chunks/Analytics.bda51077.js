import{s as f,f as p,J as m,g,r as u,d as r,G as _,j as w,v as h,A as i,z as y}from"./scheduler.98dcdc08.js";import{S as v,i as C}from"./index.bc2cb9f6.js";import{p as x}from"./stores.d906ece6.js";const T=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{document:c}=T;function b(n){let t,s="",a,e,d=`window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'MEASUREMENT_ID')`;return{c(){t=p("script"),t.innerHTML=s,e=p("script"),e.textContent=d,this.h()},l(l){const o=m("svelte-rsrcxc",c.head);t=g(o,"SCRIPT",{src:!0,"data-svelte-h":!0}),u(t)!=="svelte-12yypdl"&&(t.innerHTML=s),e=g(o,"SCRIPT",{"data-svelte-h":!0}),u(e)!=="svelte-utc6kp"&&(e.textContent=d),o.forEach(r),this.h()},h(){t.async=!0,_(t.src,a="https://www.googletagmanager.com/gtag/js?id=G-3F2CHBZGN1")||w(t,"src",a)},m(l,o){h(c.head,t),h(c.head,e)},p:i,i,o:i,d(l){r(t),r(e)}}}function G(n,t,s){let a;return y(n,x,e=>s(0,a=e)),n.$$.update=()=>{n.$$.dirty&1&&typeof gtag<"u"&&gtag("config","G-3F2CHBZGN1",{page_title:document.title,page_path:a.url.pathname})},[a]}class E extends v{constructor(t){super(),C(this,t,G,b,f,{})}}export{E as A};
