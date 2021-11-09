import{S as et,i as at,s as st,e as s,t,c as o,a as p,g as e,d as a,b as i,f as ot,I as n,V as Rn}from"./vendor-32a43119.js";function pt(Xn){let l,y,w,G,S,b,W,c,U,j,X,Z,A,$,nn,h,tn,T,en,an,u,sn,x,on,pn,L,ln,rn,d,cn,k,C,un,dn,D,hn,kn,E,Zn=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Svelteless <span class="token keyword">from</span> <span class="token string">'svelteless'</span><span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Svelteless<span class="token punctuation">.</span><span class="token function">makeHtmlIn</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,N,fn,_,$n=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> onMount <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'svelte'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> d3 <span class="token keyword">from</span> <span class="token string">'d3'</span><span class="token punctuation">;</span>

  <span class="token function">onMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'my-container'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'svg'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,O,vn,I,M,mn,f,gn,q,yn,wn,J,Sn,v,bn,K,En,_n,m,In,g,Mn,Pn,Y,Hn;return{c(){l=s("section"),y=s("h1"),w=s("a"),G=t("FAQs"),S=s("h3"),b=s("a"),W=t("How do I use non-Svelte stuff in Svelte?"),c=s("p"),U=t("Svelte, like all modern JS frameworks, can seem pretty greedy, as though you need to do "),j=s("em"),X=t("everything"),Z=t(" in Svelte. And while there are big advantages to doing "),A=s("em"),$=t("as much as you can"),nn=t(" in Svelte \u2013 including site performance, code organization and lots more \u2013 there\u2019s also always a simple pattern you can use as an escape hatch to work with non-Svelte libraries and APIs."),h=s("p"),tn=t("The general idea is to let Svelte create a "),T=s("em"),en=t("container"),an=t(" and then hook into that container after it\u2019s mounted with your third party library and fill it in."),u=s("p"),sn=t("Let\u2019s say we have a library "),x=s("code"),on=t("svelteless"),pn=t(" that has a "),L=s("code"),ln=t("makeHtmlIn"),rn=t(" function that gets passed a div and then puts some HTML in it."),d=s("p"),cn=t("We\u2019ll make a container for our svelteless library in Svelte, and then use that component\u2019s "),k=s("a"),C=s("code"),un=t("onMount"),dn=t(" function to ensure the div has \u201Cmounted\u201D \u2013 i.e., that Svelte has put it on the page \u2013 and pass that to "),D=s("code"),hn=t("makeHtmlIn"),kn=t("."),E=s("pre"),N=s("p"),fn=t("This same pattern is how we work with libraries like d3.js:"),_=s("pre"),O=s("p"),vn=t("You can follow this pattern for most non-Svelte libs or to use standard JavaScript APIs like canvas and more within Svelte components pretty seemlessly."),I=s("h3"),M=s("a"),mn=t("Getting a lot of \u201C\u2026is not a valid SSR component\u201D 500 errors in SvelteKit"),f=s("p"),gn=t("SSR, or server-side rendering, is the process of running your Svelte code in Node "),q=s("em"),yn=t("before"),wn=t(" it\u2019s sent to the browser, which let\u2019s your page initially load with all the markup that should be created by your code without needing to wait for that code to run."),J=s("p"),Sn=t("SSR is still an experimental feature in Vite and isn\u2019t strictly necessary for us because we serve our code as static files instead of from a live server."),v=s("p"),bn=t("If you\u2019re getting lots of 500 errors about such and such not being a \u201Cvalid SSR component,\u201D which can be cleared with a browser refresh, you "),K=s("em"),En=t("may"),_n=t(" want to disable SSR so that it doesn\u2019t keep triggering that error (often due to older dependencies like pre-7.0 d3.js in dependencies)."),m=s("p"),In=t("You can disable it in the svelte.config.js by uncommenting "),g=s("a"),Mn=t("this line"),Pn=t("."),Y=s("p"),Hn=t("That said, your code still needs to be able to run in a Node context to be able to \u201Cprerender\u201D your markup when we build out the HTML from your project. Disabling SSR may mask problems with your code you may then only find when you try to build your project for preview or to upload to the graphics server. Keep that in mind if you do disable SSR."),this.h()},l(F){l=o(F,"SECTION",{class:!0});var r=p(l);y=o(r,"H1",{id:!0});var jn=p(y);w=o(jn,"A",{href:!0});var An=p(w);G=e(An,"FAQs"),An.forEach(a),jn.forEach(a),S=o(r,"H3",{id:!0});var Tn=p(S);b=o(Tn,"A",{href:!0});var xn=p(b);W=e(xn,"How do I use non-Svelte stuff in Svelte?"),xn.forEach(a),Tn.forEach(a),c=o(r,"P",{});var P=p(c);U=e(P,"Svelte, like all modern JS frameworks, can seem pretty greedy, as though you need to do "),j=o(P,"EM",{});var Ln=p(j);X=e(Ln,"everything"),Ln.forEach(a),Z=e(P," in Svelte. And while there are big advantages to doing "),A=o(P,"EM",{});var Cn=p(A);$=e(Cn,"as much as you can"),Cn.forEach(a),nn=e(P," in Svelte \u2013 including site performance, code organization and lots more \u2013 there\u2019s also always a simple pattern you can use as an escape hatch to work with non-Svelte libraries and APIs."),P.forEach(a),h=o(r,"P",{});var Q=p(h);tn=e(Q,"The general idea is to let Svelte create a "),T=o(Q,"EM",{});var Dn=p(T);en=e(Dn,"container"),Dn.forEach(a),an=e(Q," and then hook into that container after it\u2019s mounted with your third party library and fill it in."),Q.forEach(a),u=o(r,"P",{});var H=p(u);sn=e(H,"Let\u2019s say we have a library "),x=o(H,"CODE",{});var Nn=p(x);on=e(Nn,"svelteless"),Nn.forEach(a),pn=e(H," that has a "),L=o(H,"CODE",{});var On=p(L);ln=e(On,"makeHtmlIn"),On.forEach(a),rn=e(H," function that gets passed a div and then puts some HTML in it."),H.forEach(a),d=o(r,"P",{});var R=p(d);cn=e(R,"We\u2019ll make a container for our svelteless library in Svelte, and then use that component\u2019s "),k=o(R,"A",{href:!0,rel:!0});var qn=p(k);C=o(qn,"CODE",{});var Jn=p(C);un=e(Jn,"onMount"),Jn.forEach(a),qn.forEach(a),dn=e(R," function to ensure the div has \u201Cmounted\u201D \u2013 i.e., that Svelte has put it on the page \u2013 and pass that to "),D=o(R,"CODE",{});var Kn=p(D);hn=e(Kn,"makeHtmlIn"),Kn.forEach(a),kn=e(R,"."),R.forEach(a),E=o(r,"PRE",{class:!0});var nt=p(E);nt.forEach(a),N=o(r,"P",{});var Yn=p(N);fn=e(Yn,"This same pattern is how we work with libraries like d3.js:"),Yn.forEach(a),_=o(r,"PRE",{class:!0});var tt=p(_);tt.forEach(a),O=o(r,"P",{});var Fn=p(O);vn=e(Fn,"You can follow this pattern for most non-Svelte libs or to use standard JavaScript APIs like canvas and more within Svelte components pretty seemlessly."),Fn.forEach(a),I=o(r,"H3",{id:!0});var Qn=p(I);M=o(Qn,"A",{href:!0});var Vn=p(M);mn=e(Vn,"Getting a lot of \u201C\u2026is not a valid SSR component\u201D 500 errors in SvelteKit"),Vn.forEach(a),Qn.forEach(a),f=o(r,"P",{});var V=p(f);gn=e(V,"SSR, or server-side rendering, is the process of running your Svelte code in Node "),q=o(V,"EM",{});var zn=p(q);yn=e(zn,"before"),zn.forEach(a),wn=e(V," it\u2019s sent to the browser, which let\u2019s your page initially load with all the markup that should be created by your code without needing to wait for that code to run."),V.forEach(a),J=o(r,"P",{});var Bn=p(J);Sn=e(Bn,"SSR is still an experimental feature in Vite and isn\u2019t strictly necessary for us because we serve our code as static files instead of from a live server."),Bn.forEach(a),v=o(r,"P",{});var z=p(v);bn=e(z,"If you\u2019re getting lots of 500 errors about such and such not being a \u201Cvalid SSR component,\u201D which can be cleared with a browser refresh, you "),K=o(z,"EM",{});var Gn=p(K);En=e(Gn,"may"),Gn.forEach(a),_n=e(z," want to disable SSR so that it doesn\u2019t keep triggering that error (often due to older dependencies like pre-7.0 d3.js in dependencies)."),z.forEach(a),m=o(r,"P",{});var B=p(m);In=e(B,"You can disable it in the svelte.config.js by uncommenting "),g=o(B,"A",{href:!0,rel:!0});var Wn=p(g);Mn=e(Wn,"this line"),Wn.forEach(a),Pn=e(B,"."),B.forEach(a),Y=o(r,"P",{});var Un=p(Y);Hn=e(Un,"That said, your code still needs to be able to run in a Node context to be able to \u201Cprerender\u201D your markup when we build out the HTML from your project. Disabling SSR may mask problems with your code you may then only find when you try to build your project for preview or to upload to the graphics server. Keep that in mind if you do disable SSR."),Un.forEach(a),r.forEach(a),this.h()},h(){i(w,"href","#faqs"),i(y,"id","faqs"),i(b,"href","#how-do-i-use-non-svelte-stuff-in-svelte"),i(S,"id","how-do-i-use-non-svelte-stuff-in-svelte"),i(k,"href","https://svelte.dev/tutorial/onmount"),i(k,"rel","nofollow"),i(E,"class","language-svelte"),i(_,"class","language-svelte"),i(M,"href","#getting-a-lot-of-is-not-a-valid-ssr-component-500-errors-in-sveltekit"),i(I,"id","getting-a-lot-of-is-not-a-valid-ssr-component-500-errors-in-sveltekit"),i(g,"href","https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/svelte.config.js#L42"),i(g,"rel","nofollow"),i(l,"class","wide")},m(F,r){ot(F,l,r),n(l,y),n(y,w),n(w,G),n(l,S),n(S,b),n(b,W),n(l,c),n(c,U),n(c,j),n(j,X),n(c,Z),n(c,A),n(A,$),n(c,nn),n(l,h),n(h,tn),n(h,T),n(T,en),n(h,an),n(l,u),n(u,sn),n(u,x),n(x,on),n(u,pn),n(u,L),n(L,ln),n(u,rn),n(l,d),n(d,cn),n(d,k),n(k,C),n(C,un),n(d,dn),n(d,D),n(D,hn),n(d,kn),n(l,E),E.innerHTML=Zn,n(l,N),n(N,fn),n(l,_),_.innerHTML=$n,n(l,O),n(O,vn),n(l,I),n(I,M),n(M,mn),n(l,f),n(f,gn),n(f,q),n(q,yn),n(f,wn),n(l,J),n(J,Sn),n(l,v),n(v,bn),n(v,K),n(K,En),n(v,_n),n(l,m),n(m,In),n(m,g),n(g,Mn),n(m,Pn),n(l,Y),n(Y,Hn)},p:Rn,i:Rn,o:Rn,d(F){F&&a(l)}}}const rt={title:"Svelte FAQs",published:!0,order:16};class it extends et{constructor(l){super();at(this,l,null,pt,st,{})}}export{it as default,rt as metadata};
