import{S as et,i as at,s as st,e as s,t,c as o,a as p,h as e,d as a,b as i,g as ot,L as n,Z as Rn}from"./vendor-a9517919.js";function pt(Un){let l,b,h,V,E,k,W,c,Z,A,U,X,j,$,nn,f,tn,T,en,an,u,sn,L,on,pn,x,ln,rn,d,cn,v,C,un,dn,D,hn,kn,_,Xn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Svelteless <span class="token keyword">from</span> <span class="token string">'svelteless'</span><span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Svelteless<span class="token punctuation">.</span><span class="token function">makeHtmlIn</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,N,fn,M,$n=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> d3 <span class="token keyword">from</span> <span class="token string">'d3'</span><span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,O,vn,P,m,mn,g,gn,q,yn,wn,J,Sn,y,bn,K,En,_n,w,Mn,S,Pn,Hn,Y,In;return{c(){l=s("section"),b=s("h1"),h=s("a"),V=t("FAQs"),E=s("h3"),k=s("a"),W=t("How do I use non-Svelte stuff in Svelte?"),c=s("p"),Z=t("Svelte, like all modern JS frameworks, can seem pretty greedy, as though you need to do "),A=s("em"),U=t("everything"),X=t(" in Svelte. And while there are big advantages to doing "),j=s("em"),$=t("as much as you can"),nn=t(" in Svelte \u2013 including site performance, code organization and lots more \u2013 there\u2019s also always a simple pattern you can use as an escape hatch to work with non-Svelte libraries and APIs."),f=s("p"),tn=t("The general idea is to let Svelte create a "),T=s("em"),en=t("container"),an=t(" and then hook into that container after it\u2019s mounted with your third party library and fill it in."),u=s("p"),sn=t("Let\u2019s say we have a library "),L=s("code"),on=t("svelteless"),pn=t(" that has a "),x=s("code"),ln=t("makeHtmlIn"),rn=t(" function that gets passed a div and then puts some HTML in it."),d=s("p"),cn=t("We\u2019ll make a container for our svelteless library in Svelte, and then use that component\u2019s "),v=s("a"),C=s("code"),un=t("onMount"),dn=t(" function to ensure the div has \u201Cmounted\u201D \u2013 i.e., that Svelte has put it on the page \u2013 and pass that to "),D=s("code"),hn=t("makeHtmlIn"),kn=t("."),_=s("pre"),N=s("p"),fn=t("This same pattern is how we work with libraries like d3.js:"),M=s("pre"),O=s("p"),vn=t("You can follow this pattern for most non-Svelte libs or to use standard JavaScript APIs like canvas and more within Svelte components pretty seemlessly."),P=s("h3"),m=s("a"),mn=t("Getting a lot of \u201C\u2026is not a valid SSR component\u201D 500 errors in SvelteKit"),g=s("p"),gn=t("SSR, or server-side rendering, is the process of running your Svelte code in Node "),q=s("em"),yn=t("before"),wn=t(" it\u2019s sent to the browser, which let\u2019s your page initially load with all the markup that should be created by your code without needing to wait for that code to run."),J=s("p"),Sn=t("SSR is still an experimental feature in Vite and isn\u2019t strictly necessary for us because we serve our code as static files instead of from a live server."),y=s("p"),bn=t("If you\u2019re getting lots of 500 errors about such and such not being a \u201Cvalid SSR component,\u201D which can be cleared with a browser refresh, you "),K=s("em"),En=t("may"),_n=t(" want to disable SSR so that it doesn\u2019t keep triggering that error (often due to older dependencies like pre-7.0 d3.js in dependencies)."),w=s("p"),Mn=t("You can disable it in the svelte.config.js by uncommenting "),S=s("a"),Pn=t("this line"),Hn=t("."),Y=s("p"),In=t("That said, your code still needs to be able to run in a Node context to be able to \u201Cprerender\u201D your markup when we build out the HTML from your project. Disabling SSR may mask problems with your code you may then only find when you try to build your project for preview or to upload to the graphics server. Keep that in mind if you do disable SSR."),this.h()},l(F){l=o(F,"SECTION",{class:!0});var r=p(l);b=o(r,"H1",{id:!0});var An=p(b);h=o(An,"A",{class:!0,href:!0});var jn=p(h);V=e(jn,"FAQs"),jn.forEach(a),An.forEach(a),E=o(r,"H3",{id:!0});var Tn=p(E);k=o(Tn,"A",{class:!0,href:!0});var Ln=p(k);W=e(Ln,"How do I use non-Svelte stuff in Svelte?"),Ln.forEach(a),Tn.forEach(a),c=o(r,"P",{});var H=p(c);Z=e(H,"Svelte, like all modern JS frameworks, can seem pretty greedy, as though you need to do "),A=o(H,"EM",{});var xn=p(A);U=e(xn,"everything"),xn.forEach(a),X=e(H," in Svelte. And while there are big advantages to doing "),j=o(H,"EM",{});var Cn=p(j);$=e(Cn,"as much as you can"),Cn.forEach(a),nn=e(H," in Svelte \u2013 including site performance, code organization and lots more \u2013 there\u2019s also always a simple pattern you can use as an escape hatch to work with non-Svelte libraries and APIs."),H.forEach(a),f=o(r,"P",{});var Q=p(f);tn=e(Q,"The general idea is to let Svelte create a "),T=o(Q,"EM",{});var Dn=p(T);en=e(Dn,"container"),Dn.forEach(a),an=e(Q," and then hook into that container after it\u2019s mounted with your third party library and fill it in."),Q.forEach(a),u=o(r,"P",{});var I=p(u);sn=e(I,"Let\u2019s say we have a library "),L=o(I,"CODE",{});var Nn=p(L);on=e(Nn,"svelteless"),Nn.forEach(a),pn=e(I," that has a "),x=o(I,"CODE",{});var On=p(x);ln=e(On,"makeHtmlIn"),On.forEach(a),rn=e(I," function that gets passed a div and then puts some HTML in it."),I.forEach(a),d=o(r,"P",{});var R=p(d);cn=e(R,"We\u2019ll make a container for our svelteless library in Svelte, and then use that component\u2019s "),v=o(R,"A",{href:!0,rel:!0});var qn=p(v);C=o(qn,"CODE",{});var Jn=p(C);un=e(Jn,"onMount"),Jn.forEach(a),qn.forEach(a),dn=e(R," function to ensure the div has \u201Cmounted\u201D \u2013 i.e., that Svelte has put it on the page \u2013 and pass that to "),D=o(R,"CODE",{});var Kn=p(D);hn=e(Kn,"makeHtmlIn"),Kn.forEach(a),kn=e(R,"."),R.forEach(a),_=o(r,"PRE",{class:!0});var nt=p(_);nt.forEach(a),N=o(r,"P",{});var Yn=p(N);fn=e(Yn,"This same pattern is how we work with libraries like d3.js:"),Yn.forEach(a),M=o(r,"PRE",{class:!0});var tt=p(M);tt.forEach(a),O=o(r,"P",{});var Fn=p(O);vn=e(Fn,"You can follow this pattern for most non-Svelte libs or to use standard JavaScript APIs like canvas and more within Svelte components pretty seemlessly."),Fn.forEach(a),P=o(r,"H3",{id:!0});var Qn=p(P);m=o(Qn,"A",{class:!0,href:!0});var zn=p(m);mn=e(zn,"Getting a lot of \u201C\u2026is not a valid SSR component\u201D 500 errors in SvelteKit"),zn.forEach(a),Qn.forEach(a),g=o(r,"P",{});var z=p(g);gn=e(z,"SSR, or server-side rendering, is the process of running your Svelte code in Node "),q=o(z,"EM",{});var Bn=p(q);yn=e(Bn,"before"),Bn.forEach(a),wn=e(z," it\u2019s sent to the browser, which let\u2019s your page initially load with all the markup that should be created by your code without needing to wait for that code to run."),z.forEach(a),J=o(r,"P",{});var Gn=p(J);Sn=e(Gn,"SSR is still an experimental feature in Vite and isn\u2019t strictly necessary for us because we serve our code as static files instead of from a live server."),Gn.forEach(a),y=o(r,"P",{});var B=p(y);bn=e(B,"If you\u2019re getting lots of 500 errors about such and such not being a \u201Cvalid SSR component,\u201D which can be cleared with a browser refresh, you "),K=o(B,"EM",{});var Vn=p(K);En=e(Vn,"may"),Vn.forEach(a),_n=e(B," want to disable SSR so that it doesn\u2019t keep triggering that error (often due to older dependencies like pre-7.0 d3.js in dependencies)."),B.forEach(a),w=o(r,"P",{});var G=p(w);Mn=e(G,"You can disable it in the svelte.config.js by uncommenting "),S=o(G,"A",{href:!0,rel:!0});var Wn=p(S);Pn=e(Wn,"this line"),Wn.forEach(a),Hn=e(G,"."),G.forEach(a),Y=o(r,"P",{});var Zn=p(Y);In=e(Zn,"That said, your code still needs to be able to run in a Node context to be able to \u201Cprerender\u201D your markup when we build out the HTML from your project. Disabling SSR may mask problems with your code you may then only find when you try to build your project for preview or to upload to the graphics server. Keep that in mind if you do disable SSR."),Zn.forEach(a),r.forEach(a),this.h()},h(){i(h,"class","heading-link"),i(h,"href","#faqs"),i(b,"id","faqs"),i(k,"class","heading-link"),i(k,"href","#how-do-i-use-non-svelte-stuff-in-svelte"),i(E,"id","how-do-i-use-non-svelte-stuff-in-svelte"),i(v,"href","https://svelte.dev/tutorial/onmount"),i(v,"rel","nofollow"),i(_,"class","language-svelte"),i(M,"class","language-svelte"),i(m,"class","heading-link"),i(m,"href","#getting-a-lot-of-is-not-a-valid-ssr-component-500-errors-in-sveltekit"),i(P,"id","getting-a-lot-of-is-not-a-valid-ssr-component-500-errors-in-sveltekit"),i(S,"href","https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/svelte.config.js#L42"),i(S,"rel","nofollow"),i(l,"class","wide")},m(F,r){ot(F,l,r),n(l,b),n(b,h),n(h,V),n(l,E),n(E,k),n(k,W),n(l,c),n(c,Z),n(c,A),n(A,U),n(c,X),n(c,j),n(j,$),n(c,nn),n(l,f),n(f,tn),n(f,T),n(T,en),n(f,an),n(l,u),n(u,sn),n(u,L),n(L,on),n(u,pn),n(u,x),n(x,ln),n(u,rn),n(l,d),n(d,cn),n(d,v),n(v,C),n(C,un),n(d,dn),n(d,D),n(D,hn),n(d,kn),n(l,_),_.innerHTML=Xn,n(l,N),n(N,fn),n(l,M),M.innerHTML=$n,n(l,O),n(O,vn),n(l,P),n(P,m),n(m,mn),n(l,g),n(g,gn),n(g,q),n(q,yn),n(g,wn),n(l,J),n(J,Sn),n(l,y),n(y,bn),n(y,K),n(K,En),n(y,_n),n(l,w),n(w,Mn),n(w,S),n(S,Pn),n(w,Hn),n(l,Y),n(Y,In)},p:Rn,i:Rn,o:Rn,d(F){F&&a(l)}}}const rt={title:"Svelte FAQs",published:!0,order:16};class it extends et{constructor(l){super();at(this,l,null,pt,st,{})}}export{it as default,rt as metadata};
