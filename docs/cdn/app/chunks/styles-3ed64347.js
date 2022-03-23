import{S as Lt,i as Tt,s as At,e as n,t as o,k as $s,c as t,a as e,g as p,d as a,n as qs,b as c,f as jt,I as s,W as hn}from"./vendor-ac126d1d.js";function It(ot){let l,x,S,Bs,E,Fs,cs,Ks,Qs,y,rs,O,Vs,Xs,J,D,Zs,i,us,Y,sa,aa,is,v,na,ks,ta,ea,oa,ds,G,pa,la,N,_,ca,k,ra,hs,ua,ia,gs,ka,da,U,pt=`<code class="language-scss"><span class="token comment">// src/lib/styles/global.scss</span>

<span class="token selector">section.body-text p </span><span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token selector"><span class="token parent important">&amp;</span>.purple </span><span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,ys,ha,u,ga,vs,ya,va,ms,ma,fa,fs,Sa,Ea,W,lt=`<code class="language-scss"><span class="token comment">// src/lib/styles/second.scss</span>
<span class="token selector">body </span><span class="token punctuation">&#123;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,z,ct=`<code class="language-svelte"><span class="token comment">&lt;!-- pages/second-page.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// ...</span>
  <span class="token keyword">import</span> <span class="token string">'@reuters-graphics/style-theme-eisbaer/scss/main.scss'</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">'$lib/styles/global.scss'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,b,_a,Ss,ba,wa,$,rt=`<code class="language-svelte"><span class="token comment">&lt;!-- pages/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
    <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'../src/lib/styles/main.scss'</span><span class="token punctuation">;</span></span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,q,w,Ca,Es,Pa,C,Ha,P,La,Ta,B,H,Aa,L,ja,_s,Ia,Ma,F,ut=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>purple<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Lorem ipsum...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">p.purple</span> <span class="token punctuation">&#123;</span>
      <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,K,d,Ra,bs,xa,Oa,T,Ja,ws,Da,Ya,h,Ga,m,Cs,Na,Ua,Wa,Ps,za,$a,Hs,qa,Q,it=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Some JS that makes elements</span>
  <span class="token keyword">const</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">&lt;p>Hello &lt;span>world&lt;/span>!&lt;/p></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>@html <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div.my-container</span> <span class="token punctuation">&#123;</span>
    <span class="token selector">:global</span> <span class="token punctuation">&#123;</span>
      <span class="token selector">// \u{1F448}
      p</span> <span class="token punctuation">&#123;</span>
        <span class="token property">color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
        <span class="token selector">span</span> <span class="token punctuation">&#123;</span>
          <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,g,Ba,Ls,Fa,Ka,Ts,Qa,Va,As,Xa,V,kt=`<code class="language-css"><span class="token selector">div.my-container.abc123xyz789 p</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>
<span class="token selector">div.my-container.abc123xyz789 p span</span> <span class="token punctuation">&#123;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,X,js,Za,sn,Z,dt=`<code class="language-svelte"><span class="token comment">&lt;!-- svelte-ignore css-unused-selector --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/* ... */</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,ss,A,an,Is,nn,j,tn,I,en,on,as,ht=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> purple <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name"><span class="token namespace">class:</span>purple</span><span class="token punctuation">></span></span>Lorem ipsum...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">p.purple</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,Ms,pn,ns,gt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> colour <span class="token operator">=</span> <span class="token string">'purple'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">style="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>colour<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">;</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>Lorem ipsum...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>`,M,ln,R,cn,rn,ts,yt=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token string">'purple'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">style="--theme-color:</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>color<span class="token punctuation">&#125;</span></span><span class="token attr-name">;"</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>the color is set using a CSS variable<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token selector">p</span> <span class="token punctuation">&#123;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--theme-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`;return{c(){l=n("section"),x=n("h1"),S=n("a"),Bs=o("Writing styles"),E=n("p"),Fs=o("There are two ways to write styles in this kit. The first is to write global styles. The second is to write styles "),cs=n("em"),Ks=o("in"),Qs=o(" your Svelte components."),y=n("ul"),rs=n("li"),O=n("a"),Vs=o("Global styles"),Xs=$s(),J=n("li"),D=n("a"),Zs=o("Component styles"),i=n("ul"),us=n("li"),Y=n("a"),sa=o("SCSS"),aa=$s(),is=n("li"),v=n("a"),na=o("Scoping and the "),ks=n("code"),ta=o(":global"),ea=o(" SCSS operator"),oa=$s(),ds=n("li"),G=n("a"),pa=o("Styles from JavaScript"),la=$s(),N=n("h2"),_=n("a"),ca=o("Global styles"),k=n("p"),ra=o("You can write global styles in the "),hs=n("code"),ua=o("global.scss"),ia=o(" stylesheet located in the "),gs=n("code"),ka=o("src/lib/styles/"),da=o(" directory. Styles you write here will override any defaults in our house style libraries."),U=n("pre"),ys=n("p"),ha=o("The kit already imports this stylesheet in all your pages and embeds."),u=n("p"),ga=o("If you want to create "),vs=n("em"),ya=o("other"),va=o(" global stylesheets \u2013 say to only apply to a particular page \u2013 simply create another "),ms=n("code"),ma=o(".scss"),fa=o(" file and import it in the page that you want to apply it to (probably "),fs=n("em"),Sa=o("after"),Ea=o(" any house lib imports)."),W=n("pre"),z=n("pre"),b=n("p"),_a=o("\u2026and then import it and apply it using the "),Ss=n("code"),ba=o(":global"),wa=o(" SCSS operator:"),$=n("pre"),q=n("h2"),w=n("a"),Ca=o("Component styles"),Es=n("p"),Pa=o("It\u2019s often better to write styles directly in your Svelte components because they will be automatically scoped to just the elements in your component so they don\u2019t conflict with any other global styles. Svelte will also clean up any unused style rules by default, too. It also makes it easy to copy components between projects because the styles travel with the component code."),C=n("p"),Ha=o("Read more "),P=n("a"),La=o("about styling in the Svelte docs"),Ta=o("."),B=n("h3"),H=n("a"),Aa=o("SCSS"),L=n("p"),ja=o("Add a "),_s=n("code"),Ia=o("lang"),Ma=o(" attibute to any style tags in your svelte components to use SCSS syntax."),F=n("pre"),K=n("h3"),d=n("a"),Ra=o("Scoping and the "),bs=n("code"),xa=o(":global"),Oa=o(" SCSS operator"),T=n("p"),Ja=o("Styles you write in your components are scoped to "),ws=n("em"),Da=o("just the elements in your component"),Ya=o(", and Svelte will disregard any rules you write that don\u2019t correspond to an element Svelte can detect."),h=n("p"),Ga=o("So if your component imports another JS library or uses the "),m=n("a"),Cs=n("code"),Na=o("@html"),Ua=o(" tag"),Wa=o(" to create any elements that you want to style, you should use the SCSS "),Ps=n("code"),za=o(":global"),$a=o(" operator to make sure Svelte doesn\u2019t ignore those styles."),Hs=n("p"),qa=o("Here\u2019s an example:"),Q=n("pre"),g=n("p"),Ba=o("Notice we can nest the "),Ls=n("code"),Fa=o(":global"),Ka=o(" operator "),Ts=n("em"),Qa=o("inside"),Va=o(" a containing element, which will scope our global styles so they don\u2019t conflict with any other elements on the page."),As=n("p"),Xa=o("If you inspect the elements from this component in your browser, Svelte will create styles for those rules like this:"),V=n("pre"),X=n("p"),js=n("strong"),Za=o("Pro-tip:"),sn=o(" You\u2019ll likely also want to silence Svelte\u2019s internal warnings for unused styles so they don\u2019t clutter up your terminal. Add this comment directly above your style tag to do it:"),Z=n("pre"),ss=n("h3"),A=n("a"),an=o("Styles from JavaScript"),Is=n("p"),nn=o("If you want to use JavaScript values to style your components, you have a few options."),j=n("p"),tn=o("You can use Svelte\u2019s "),I=n("a"),en=o("class directive"),on=o(" to set a class conditionally:"),as=n("pre"),Ms=n("p"),pn=o("\u2026you can write styles inline:"),ns=n("pre"),M=n("p"),ln=o("\u2026or you can use inline "),R=n("a"),cn=o("CSS variables"),rn=o(" to use JavaScript values in your styles:"),ts=n("pre"),this.h()},l(Rs){l=t(Rs,"SECTION",{class:!0});var r=e(l);x=t(r,"H1",{id:!0});var gn=e(x);S=t(gn,"A",{class:!0,href:!0});var yn=e(S);Bs=p(yn,"Writing styles"),yn.forEach(a),gn.forEach(a),E=t(r,"P",{});var Os=e(E);Fs=p(Os,"There are two ways to write styles in this kit. The first is to write global styles. The second is to write styles "),cs=t(Os,"EM",{});var vn=e(cs);Ks=p(vn,"in"),vn.forEach(a),Qs=p(Os," your Svelte components."),Os.forEach(a),y=t(r,"UL",{});var xs=e(y);rs=t(xs,"LI",{});var mn=e(rs);O=t(mn,"A",{href:!0});var fn=e(O);Vs=p(fn,"Global styles"),fn.forEach(a),mn.forEach(a),Xs=qs(xs),J=t(xs,"LI",{});var un=e(J);D=t(un,"A",{href:!0});var Sn=e(D);Zs=p(Sn,"Component styles"),Sn.forEach(a),i=t(un,"UL",{});var es=e(i);us=t(es,"LI",{});var En=e(us);Y=t(En,"A",{href:!0});var _n=e(Y);sa=p(_n,"SCSS"),_n.forEach(a),En.forEach(a),aa=qs(es),is=t(es,"LI",{});var bn=e(is);v=t(bn,"A",{href:!0});var Js=e(v);na=p(Js,"Scoping and the "),ks=t(Js,"CODE",{});var wn=e(ks);ta=p(wn,":global"),wn.forEach(a),ea=p(Js," SCSS operator"),Js.forEach(a),bn.forEach(a),oa=qs(es),ds=t(es,"LI",{});var Cn=e(ds);G=t(Cn,"A",{href:!0});var Pn=e(G);pa=p(Pn,"Styles from JavaScript"),Pn.forEach(a),Cn.forEach(a),es.forEach(a),un.forEach(a),la=qs(xs),xs.forEach(a),N=t(r,"H2",{id:!0});var Hn=e(N);_=t(Hn,"A",{class:!0,href:!0});var Ln=e(_);ca=p(Ln,"Global styles"),Ln.forEach(a),Hn.forEach(a),k=t(r,"P",{});var os=e(k);ra=p(os,"You can write global styles in the "),hs=t(os,"CODE",{});var Tn=e(hs);ua=p(Tn,"global.scss"),Tn.forEach(a),ia=p(os," stylesheet located in the "),gs=t(os,"CODE",{});var An=e(gs);ka=p(An,"src/lib/styles/"),An.forEach(a),da=p(os," directory. Styles you write here will override any defaults in our house style libraries."),os.forEach(a),U=t(r,"PRE",{class:!0});var vt=e(U);vt.forEach(a),ys=t(r,"P",{});var jn=e(ys);ha=p(jn,"The kit already imports this stylesheet in all your pages and embeds."),jn.forEach(a),u=t(r,"P",{});var f=e(u);ga=p(f,"If you want to create "),vs=t(f,"EM",{});var In=e(vs);ya=p(In,"other"),In.forEach(a),va=p(f," global stylesheets \u2013 say to only apply to a particular page \u2013 simply create another "),ms=t(f,"CODE",{});var Mn=e(ms);ma=p(Mn,".scss"),Mn.forEach(a),fa=p(f," file and import it in the page that you want to apply it to (probably "),fs=t(f,"EM",{});var Rn=e(fs);Sa=p(Rn,"after"),Rn.forEach(a),Ea=p(f," any house lib imports)."),f.forEach(a),W=t(r,"PRE",{class:!0});var mt=e(W);mt.forEach(a),z=t(r,"PRE",{class:!0});var ft=e(z);ft.forEach(a),b=t(r,"P",{});var Ds=e(b);_a=p(Ds,"\u2026and then import it and apply it using the "),Ss=t(Ds,"CODE",{});var xn=e(Ss);ba=p(xn,":global"),xn.forEach(a),wa=p(Ds," SCSS operator:"),Ds.forEach(a),$=t(r,"PRE",{class:!0});var St=e($);St.forEach(a),q=t(r,"H2",{id:!0});var On=e(q);w=t(On,"A",{class:!0,href:!0});var Jn=e(w);Ca=p(Jn,"Component styles"),Jn.forEach(a),On.forEach(a),Es=t(r,"P",{});var Dn=e(Es);Pa=p(Dn,"It\u2019s often better to write styles directly in your Svelte components because they will be automatically scoped to just the elements in your component so they don\u2019t conflict with any other global styles. Svelte will also clean up any unused style rules by default, too. It also makes it easy to copy components between projects because the styles travel with the component code."),Dn.forEach(a),C=t(r,"P",{});var Ys=e(C);Ha=p(Ys,"Read more "),P=t(Ys,"A",{href:!0,rel:!0});var Yn=e(P);La=p(Yn,"about styling in the Svelte docs"),Yn.forEach(a),Ta=p(Ys,"."),Ys.forEach(a),B=t(r,"H3",{id:!0});var Gn=e(B);H=t(Gn,"A",{class:!0,href:!0});var Nn=e(H);Aa=p(Nn,"SCSS"),Nn.forEach(a),Gn.forEach(a),L=t(r,"P",{});var Gs=e(L);ja=p(Gs,"Add a "),_s=t(Gs,"CODE",{});var Un=e(_s);Ia=p(Un,"lang"),Un.forEach(a),Ma=p(Gs," attibute to any style tags in your svelte components to use SCSS syntax."),Gs.forEach(a),F=t(r,"PRE",{class:!0});var Et=e(F);Et.forEach(a),K=t(r,"H3",{id:!0});var Wn=e(K);d=t(Wn,"A",{class:!0,href:!0});var Ns=e(d);Ra=p(Ns,"Scoping and the "),bs=t(Ns,"CODE",{});var zn=e(bs);xa=p(zn,":global"),zn.forEach(a),Oa=p(Ns," SCSS operator"),Ns.forEach(a),Wn.forEach(a),T=t(r,"P",{});var Us=e(T);Ja=p(Us,"Styles you write in your components are scoped to "),ws=t(Us,"EM",{});var $n=e(ws);Da=p($n,"just the elements in your component"),$n.forEach(a),Ya=p(Us,", and Svelte will disregard any rules you write that don\u2019t correspond to an element Svelte can detect."),Us.forEach(a),h=t(r,"P",{});var ps=e(h);Ga=p(ps,"So if your component imports another JS library or uses the "),m=t(ps,"A",{href:!0,rel:!0});var kn=e(m);Cs=t(kn,"CODE",{});var qn=e(Cs);Na=p(qn,"@html"),qn.forEach(a),Ua=p(kn," tag"),kn.forEach(a),Wa=p(ps," to create any elements that you want to style, you should use the SCSS "),Ps=t(ps,"CODE",{});var Bn=e(Ps);za=p(Bn,":global"),Bn.forEach(a),$a=p(ps," operator to make sure Svelte doesn\u2019t ignore those styles."),ps.forEach(a),Hs=t(r,"P",{});var Fn=e(Hs);qa=p(Fn,"Here\u2019s an example:"),Fn.forEach(a),Q=t(r,"PRE",{class:!0});var _t=e(Q);_t.forEach(a),g=t(r,"P",{});var ls=e(g);Ba=p(ls,"Notice we can nest the "),Ls=t(ls,"CODE",{});var Kn=e(Ls);Fa=p(Kn,":global"),Kn.forEach(a),Ka=p(ls," operator "),Ts=t(ls,"EM",{});var Qn=e(Ts);Qa=p(Qn,"inside"),Qn.forEach(a),Va=p(ls," a containing element, which will scope our global styles so they don\u2019t conflict with any other elements on the page."),ls.forEach(a),As=t(r,"P",{});var Vn=e(As);Xa=p(Vn,"If you inspect the elements from this component in your browser, Svelte will create styles for those rules like this:"),Vn.forEach(a),V=t(r,"PRE",{class:!0});var bt=e(V);bt.forEach(a),X=t(r,"P",{});var dn=e(X);js=t(dn,"STRONG",{});var Xn=e(js);Za=p(Xn,"Pro-tip:"),Xn.forEach(a),sn=p(dn," You\u2019ll likely also want to silence Svelte\u2019s internal warnings for unused styles so they don\u2019t clutter up your terminal. Add this comment directly above your style tag to do it:"),dn.forEach(a),Z=t(r,"PRE",{class:!0});var wt=e(Z);wt.forEach(a),ss=t(r,"H3",{id:!0});var Zn=e(ss);A=t(Zn,"A",{class:!0,href:!0});var st=e(A);an=p(st,"Styles from JavaScript"),st.forEach(a),Zn.forEach(a),Is=t(r,"P",{});var at=e(Is);nn=p(at,"If you want to use JavaScript values to style your components, you have a few options."),at.forEach(a),j=t(r,"P",{});var Ws=e(j);tn=p(Ws,"You can use Svelte\u2019s "),I=t(Ws,"A",{href:!0,rel:!0});var nt=e(I);en=p(nt,"class directive"),nt.forEach(a),on=p(Ws," to set a class conditionally:"),Ws.forEach(a),as=t(r,"PRE",{class:!0});var Ct=e(as);Ct.forEach(a),Ms=t(r,"P",{});var tt=e(Ms);pn=p(tt,"\u2026you can write styles inline:"),tt.forEach(a),ns=t(r,"PRE",{class:!0});var Pt=e(ns);Pt.forEach(a),M=t(r,"P",{});var zs=e(M);ln=p(zs,"\u2026or you can use inline "),R=t(zs,"A",{href:!0,rel:!0});var et=e(R);cn=p(et,"CSS variables"),et.forEach(a),rn=p(zs," to use JavaScript values in your styles:"),zs.forEach(a),ts=t(r,"PRE",{class:!0});var Ht=e(ts);Ht.forEach(a),r.forEach(a),this.h()},h(){c(S,"class","heading-link"),c(S,"href","#writing-styles"),c(x,"id","writing-styles"),c(O,"href","#global-styles"),c(D,"href","#component-styles"),c(Y,"href","#scss"),c(v,"href","#scoping-and-the-global-scss-operator"),c(G,"href","#styles-from-javascript"),c(_,"class","heading-link"),c(_,"href","#global-styles"),c(N,"id","global-styles"),c(U,"class","language-scss"),c(W,"class","language-scss"),c(z,"class","language-svelte"),c($,"class","language-svelte"),c(w,"class","heading-link"),c(w,"href","#component-styles"),c(q,"id","component-styles"),c(P,"href","https://svelte.dev/tutorial/styling"),c(P,"rel","nofollow"),c(H,"class","heading-link"),c(H,"href","#scss"),c(B,"id","scss"),c(F,"class","language-svelte"),c(d,"class","heading-link"),c(d,"href","#scoping-and-the-global-scss-operator"),c(K,"id","scoping-and-the-global-scss-operator"),c(m,"href","https://svelte.dev/tutorial/html-tags"),c(m,"rel","nofollow"),c(Q,"class","language-svelte"),c(V,"class","language-css"),c(Z,"class","language-svelte"),c(A,"class","heading-link"),c(A,"href","#styles-from-javascript"),c(ss,"id","styles-from-javascript"),c(I,"href","https://svelte.dev/tutorial/classes"),c(I,"rel","nofollow"),c(as,"class","language-svelte"),c(ns,"class","language-svelte"),c(R,"href","https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"),c(R,"rel","nofollow"),c(ts,"class","language-svelte"),c(l,"class","wide")},m(Rs,r){jt(Rs,l,r),s(l,x),s(x,S),s(S,Bs),s(l,E),s(E,Fs),s(E,cs),s(cs,Ks),s(E,Qs),s(l,y),s(y,rs),s(rs,O),s(O,Vs),s(y,Xs),s(y,J),s(J,D),s(D,Zs),s(J,i),s(i,us),s(us,Y),s(Y,sa),s(i,aa),s(i,is),s(is,v),s(v,na),s(v,ks),s(ks,ta),s(v,ea),s(i,oa),s(i,ds),s(ds,G),s(G,pa),s(y,la),s(l,N),s(N,_),s(_,ca),s(l,k),s(k,ra),s(k,hs),s(hs,ua),s(k,ia),s(k,gs),s(gs,ka),s(k,da),s(l,U),U.innerHTML=pt,s(l,ys),s(ys,ha),s(l,u),s(u,ga),s(u,vs),s(vs,ya),s(u,va),s(u,ms),s(ms,ma),s(u,fa),s(u,fs),s(fs,Sa),s(u,Ea),s(l,W),W.innerHTML=lt,s(l,z),z.innerHTML=ct,s(l,b),s(b,_a),s(b,Ss),s(Ss,ba),s(b,wa),s(l,$),$.innerHTML=rt,s(l,q),s(q,w),s(w,Ca),s(l,Es),s(Es,Pa),s(l,C),s(C,Ha),s(C,P),s(P,La),s(C,Ta),s(l,B),s(B,H),s(H,Aa),s(l,L),s(L,ja),s(L,_s),s(_s,Ia),s(L,Ma),s(l,F),F.innerHTML=ut,s(l,K),s(K,d),s(d,Ra),s(d,bs),s(bs,xa),s(d,Oa),s(l,T),s(T,Ja),s(T,ws),s(ws,Da),s(T,Ya),s(l,h),s(h,Ga),s(h,m),s(m,Cs),s(Cs,Na),s(m,Ua),s(h,Wa),s(h,Ps),s(Ps,za),s(h,$a),s(l,Hs),s(Hs,qa),s(l,Q),Q.innerHTML=it,s(l,g),s(g,Ba),s(g,Ls),s(Ls,Fa),s(g,Ka),s(g,Ts),s(Ts,Qa),s(g,Va),s(l,As),s(As,Xa),s(l,V),V.innerHTML=kt,s(l,X),s(X,js),s(js,Za),s(X,sn),s(l,Z),Z.innerHTML=dt,s(l,ss),s(ss,A),s(A,an),s(l,Is),s(Is,nn),s(l,j),s(j,tn),s(j,I),s(I,en),s(j,on),s(l,as),as.innerHTML=ht,s(l,Ms),s(Ms,pn),s(l,ns),ns.innerHTML=gt,s(l,M),s(M,ln),s(M,R),s(R,cn),s(M,rn),s(l,ts),ts.innerHTML=yt},p:hn,i:hn,o:hn,d(Rs){Rs&&a(l)}}}const Rt={title:"Styling pages",published:!0,order:8};class xt extends Lt{constructor(l){super();Tt(this,l,null,It,At,{})}}export{xt as default,Rt as metadata};
