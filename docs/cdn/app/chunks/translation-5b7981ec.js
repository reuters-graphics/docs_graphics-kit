import{S as La,i as Sa,s as Oa,e,t as p,c as t,a as o,g as l,d as n,b as r,f as Ra,I as a,V as ta}from"./vendor-32a43119.js";function Ca(fa){let s,h,m,D,i,G,M,N,F,v,Y,q,T,V,H,z,f,ya=`<code class="language-bash">locales/
  en/
    content.json
  de/
    content.json</code>`,A,B,y,_a=`<code class="language-javascript"><span class="token comment">// en/content.json</span>
<span class="token punctuation">&#123;</span>
  <span class="token string">"greeting"</span><span class="token operator">:</span> <span class="token string">"Hello!"</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">// de/content.json</span>
<span class="token punctuation">&#123;</span>
  <span class="token string">"greeting"</span><span class="token operator">:</span> <span class="token string">"Guten Tag!"</span>
<span class="token punctuation">&#125;</span></code>`,u,J,L,K,Q,_,Ea=`<code class="language-bash">pages/
  de/
    index.svelte \u{1F1E9}\u{1F1EA}
  embeds/
    en/
      page.svelte \u{1F1EC}\u{1F1E7}
    de/
      page.svelte \u{1F1E9}\u{1F1EA}
  index.svelte \u{1F1EC}\u{1F1E7}
</code>`,S,U,E,wa=`<code class="language-svelte"><span class="token comment">&lt;!-- \u{1F1EC}\u{1F1E7} pages/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/en/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">'$lib/MyPage/index.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyPage</span> <span class="token attr-name">content="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,w,ba=`<code class="language-svelte"><span class="token comment">&lt;!-- \u{1F1E9}\u{1F1EA} pages/de/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> content <span class="token keyword">from</span> <span class="token string">'$locales/de/content.json'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> MyPage <span class="token keyword">from</span> <span class="token string">'$lib/MyPage/index.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyPage</span> <span class="token attr-name">content="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,d,W,O,X,Z,b,xa=`<code class="language-svelte"><span class="token comment">&lt;!-- src/lib/MyPage/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">let</span> content<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>greeting<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></code>`,x,P,aa,g,na,k,sa,ea;return{c(){s=e("section"),h=e("h1"),m=e("a"),D=p("Translation"),i=e("p"),G=p("This kit does not include any built-in translation utilities like "),M=e("code"),N=p("gettext"),F=p(". Instead, we recommend creating different "),v=e("a"),Y=p("pages or embeds"),q=p(" for each language you\u2019re building and passing the translated content to common Svelte components."),T=e("p"),V=p("Let\u2019s use a simple example."),H=e("p"),z=p("Say you have translated content in your locales folder:"),f=e("pre"),A=e("p"),B=p("\u2026 with text like:"),y=e("pre"),u=e("p"),J=p("And let\u2019s say you wanted to publish a page and embed in both English \u{1F1EC}\u{1F1E7} and German \u{1F1E9}\u{1F1EA}. You might have a "),L=e("code"),K=p("pages/"),Q=p(" directory like:"),_=e("pre"),S=e("p"),U=p("Now each page can import the correct content for its translation and pass it to a common component:"),E=e("pre"),w=e("pre"),d=e("p"),W=p("And the common component "),O=e("code"),X=p("MyPage"),Z=p(" can use the correct translated text passed to it:"),b=e("pre"),x=e("h2"),P=e("a"),aa=p("Other options"),g=e("p"),na=p("For more complex handling, you can use something like "),k=e("a"),sa=p("svelte-i18n"),ea=p("."),this.h()},l(R){s=t(R,"SECTION",{class:!0});var c=o(s);h=t(c,"H1",{id:!0});var oa=o(h);m=t(oa,"A",{href:!0});var pa=o(m);D=l(pa,"Translation"),pa.forEach(n),oa.forEach(n),i=t(c,"P",{});var j=o(i);G=l(j,"This kit does not include any built-in translation utilities like "),M=t(j,"CODE",{});var la=o(M);N=l(la,"gettext"),la.forEach(n),F=l(j,". Instead, we recommend creating different "),v=t(j,"A",{href:!0});var ca=o(v);Y=l(ca,"pages or embeds"),ca.forEach(n),q=l(j," for each language you\u2019re building and passing the translated content to common Svelte components."),j.forEach(n),T=t(c,"P",{});var ra=o(T);V=l(ra,"Let\u2019s use a simple example."),ra.forEach(n),H=t(c,"P",{});var ia=o(H);z=l(ia,"Say you have translated content in your locales folder:"),ia.forEach(n),f=t(c,"PRE",{class:!0});var Pa=o(f);Pa.forEach(n),A=t(c,"P",{});var ua=o(A);B=l(ua,"\u2026 with text like:"),ua.forEach(n),y=t(c,"PRE",{class:!0});var ja=o(y);ja.forEach(n),u=t(c,"P",{});var C=o(u);J=l(C,"And let\u2019s say you wanted to publish a page and embed in both English \u{1F1EC}\u{1F1E7} and German \u{1F1E9}\u{1F1EA}. You might have a "),L=t(C,"CODE",{});var da=o(L);K=l(da,"pages/"),da.forEach(n),Q=l(C," directory like:"),C.forEach(n),_=t(c,"PRE",{class:!0});var Ma=o(_);Ma.forEach(n),S=t(c,"P",{});var ga=o(S);U=l(ga,"Now each page can import the correct content for its translation and pass it to a common component:"),ga.forEach(n),E=t(c,"PRE",{class:!0});var Ta=o(E);Ta.forEach(n),w=t(c,"PRE",{class:!0});var Ha=o(w);Ha.forEach(n),d=t(c,"P",{});var I=o(d);W=l(I,"And the common component "),O=t(I,"CODE",{});var ka=o(O);X=l(ka,"MyPage"),ka.forEach(n),Z=l(I," can use the correct translated text passed to it:"),I.forEach(n),b=t(c,"PRE",{class:!0});var Aa=o(b);Aa.forEach(n),x=t(c,"H2",{id:!0});var ha=o(x);P=t(ha,"A",{href:!0});var ma=o(P);aa=l(ma,"Other options"),ma.forEach(n),ha.forEach(n),g=t(c,"P",{});var $=o(g);na=l($,"For more complex handling, you can use something like "),k=t($,"A",{href:!0,rel:!0});var va=o(k);sa=l(va,"svelte-i18n"),va.forEach(n),ea=l($,"."),$.forEach(n),c.forEach(n),this.h()},h(){r(m,"href","#translation"),r(h,"id","translation"),r(v,"href","./pages.md"),r(f,"class","language-bash"),r(y,"class","language-javascript"),r(_,"class","language-bash"),r(E,"class","language-svelte"),r(w,"class","language-svelte"),r(b,"class","language-svelte"),r(P,"href","#other-options"),r(x,"id","other-options"),r(k,"href","https://github.com/kaisermann/svelte-i18n"),r(k,"rel","nofollow"),r(s,"class","wide")},m(R,c){Ra(R,s,c),a(s,h),a(h,m),a(m,D),a(s,i),a(i,G),a(i,M),a(M,N),a(i,F),a(i,v),a(v,Y),a(i,q),a(s,T),a(T,V),a(s,H),a(H,z),a(s,f),f.innerHTML=ya,a(s,A),a(A,B),a(s,y),y.innerHTML=_a,a(s,u),a(u,J),a(u,L),a(L,K),a(u,Q),a(s,_),_.innerHTML=Ea,a(s,S),a(S,U),a(s,E),E.innerHTML=wa,a(s,w),w.innerHTML=ba,a(s,d),a(d,W),a(d,O),a(O,X),a(d,Z),a(s,b),b.innerHTML=xa,a(s,x),a(x,P),a(P,aa),a(s,g),a(g,na),a(g,k),a(k,sa),a(g,ea)},p:ta,i:ta,o:ta,d(R){R&&n(s)}}}const $a={title:"Translation",published:!0,order:12};class Da extends La{constructor(s){super();Sa(this,s,null,Ca,Oa,{})}}export{Da as default,$a as metadata};
