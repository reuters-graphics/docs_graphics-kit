var k=(o,r,a)=>new Promise((s,n)=>{var _=e=>{try{c(a.next(e))}catch(i){n(i)}},p=e=>{try{c(a.throw(e))}catch(i){n(i)}},c=e=>e.done?s(e.value):Promise.resolve(e.value).then(_,p);c((a=a.apply(o,r)).next())});import{_ as t}from"../chunks/preload-helper-58936509.js";import{_ as T,S as b,i as I,s as O,X as A,j as u,k as L,l as j,m as E,n as R,o as d,f as v,u as f,w as V,x as l,v as h,d as D,r as $}from"../chunks/vendor-ac126d1d.js";var P=o=>{const r=o.replace("./../../pages/","").replace(/\.md$/i,"").replace(/^\//,"");return T(r,{remove:/[*+~.()'"!:@]/g,lower:!0})};function q(o){let r,a,s,n,_;r=new A({props:{seoTitle:o[1].title,seoDescription:o[1].description,shareTitle:o[1].title,shareDescription:o[1].description,shareImgPath:o[1].image||"images/reuters-graphics.jpg",lang:o[1].lang||"en"}});var p=o[0];function c(e){return{}}return p&&(s=new p(c())),{c(){u(r.$$.fragment),a=L(),s&&u(s.$$.fragment),n=j()},l(e){E(r.$$.fragment,e),a=R(e),s&&E(s.$$.fragment,e),n=j()},m(e,i){d(r,e,i),v(e,a,i),s&&d(s,e,i),v(e,n,i),_=!0},p(e,[i]){const m={};if(i&2&&(m.seoTitle=e[1].title),i&2&&(m.seoDescription=e[1].description),i&2&&(m.shareTitle=e[1].title),i&2&&(m.shareDescription=e[1].description),i&2&&(m.shareImgPath=e[1].image||"images/reuters-graphics.jpg"),i&2&&(m.lang=e[1].lang||"en"),r.$set(m),p!==(p=e[0])){if(s){$();const g=s;f(g.$$.fragment,1,0,()=>{h(g,1)}),V()}p?(s=new p(c()),u(s.$$.fragment),l(s.$$.fragment,1),d(s,n.parentNode,n)):s=null}},i(e){_||(l(r.$$.fragment,e),s&&l(s.$$.fragment,e),_=!0)},o(e){f(r.$$.fragment,e),s&&f(s.$$.fragment,e),_=!1},d(e){h(r,e),e&&D(a),e&&D(n),s&&h(s,e)}}}function z(r){return k(this,arguments,function*({page:o}){const a={"./../../pages/home.md":()=>t(()=>import("../chunks/home-c8036c1d.js"),["chunks/home-c8036c1d.js","assets/home-a2c427ac.css","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/contributing/docs.md":()=>t(()=>import("../chunks/docs-3847b483.js"),["chunks/docs-3847b483.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/contributing/kit.md":()=>t(()=>import("../chunks/kit-cbdf7a4f.js"),["chunks/kit-cbdf7a4f.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_clients/using-the-kit.md":()=>t(()=>import("../chunks/using-the-kit-8d728fce.js"),["chunks/using-the-kit-8d728fce.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/ai.md":()=>t(()=>import("../chunks/ai-e71cc9bc.js"),["chunks/ai-e71cc9bc.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/automated-publishing.md":()=>t(()=>import("../chunks/automated-publishing-aa096767.js"),["chunks/automated-publishing-aa096767.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/commands.md":()=>t(()=>import("../chunks/commands-09b95d7f.js"),["chunks/commands-09b95d7f.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/components.md":()=>t(()=>import("../chunks/components-c39d46cd.js"),["chunks/components-c39d46cd.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css","chunks/index-4f07e12c.js","assets/index-12a2e941.css"]),"./../../pages/for_developers/data.md":()=>t(()=>import("../chunks/data-9dfd7f27.js"),["chunks/data-9dfd7f27.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/directory.md":()=>t(()=>import("../chunks/directory-1ccdaecd.js"),["chunks/directory-1ccdaecd.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css","chunks/index-4f07e12c.js","assets/index-12a2e941.css"]),"./../../pages/for_developers/ejs-to-svelte.md":()=>t(()=>import("../chunks/ejs-to-svelte-05af11fd.js"),["chunks/ejs-to-svelte-05af11fd.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/google-docs-and-sheets.md":()=>t(()=>import("../chunks/google-docs-and-sheets-87e0b91b.js"),["chunks/google-docs-and-sheets-87e0b91b.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/graphics-components.md":()=>t(()=>import("../chunks/graphics-components-52ce5ed6.js"),["chunks/graphics-components-52ce5ed6.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css","chunks/index-4f07e12c.js","assets/index-12a2e941.css"]),"./../../pages/for_developers/media.md":()=>t(()=>import("../chunks/media-b9765912.js"),["chunks/media-b9765912.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/metadata.md":()=>t(()=>import("../chunks/metadata-975cdde3.js"),["chunks/metadata-975cdde3.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/pages.md":()=>t(()=>import("../chunks/pages-1906824e.js"),["chunks/pages-1906824e.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/prerequisites.md":()=>t(()=>import("../chunks/prerequisites-127f3367.js"),["chunks/prerequisites-127f3367.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/quickstart.md":()=>t(()=>import("../chunks/quickstart-8ae53676.js"),["chunks/quickstart-8ae53676.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css","chunks/index-4f07e12c.js","assets/index-12a2e941.css"]),"./../../pages/for_developers/sample-project.md":()=>t(()=>import("../chunks/sample-project-2329e9d0.js"),["chunks/sample-project-2329e9d0.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/snippets.md":()=>t(()=>import("../chunks/snippets-48511df4.js"),["chunks/snippets-48511df4.js","assets/snippets-01f0b465.css","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/statics.md":()=>t(()=>import("../chunks/statics-d8336869.js"),["chunks/statics-d8336869.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/styles.md":()=>t(()=>import("../chunks/styles-bd25c2a5.js"),["chunks/styles-bd25c2a5.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css","chunks/index-4f07e12c.js","assets/index-12a2e941.css"]),"./../../pages/for_developers/svelte-faqs.md":()=>t(()=>import("../chunks/svelte-faqs-f3090ea9.js"),["chunks/svelte-faqs-f3090ea9.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"]),"./../../pages/for_developers/translation.md":()=>t(()=>import("../chunks/translation-fd15bc2b.js"),["chunks/translation-fd15bc2b.js","chunks/vendor-ac126d1d.js","assets/vendor-0825bdaf.css"])};let s;for(const[_,p]of Object.entries(a))if(P(_)===P(o.path)){s={path:_,resolver:p};break}if(!s)return{status:404};const n=yield s.resolver();return{props:{Component:n.default,metadata:n.metadata}}})}function w(o,r,a){let{Component:s}=r,{metadata:n}=r;return o.$$set=_=>{"Component"in _&&a(0,s=_.Component),"metadata"in _&&a(1,n=_.metadata)},[s,n]}class B extends b{constructor(r){super();I(this,r,w,q,O,{Component:0,metadata:1})}}export{B as default,z as load};
