import{S as Ia,i as Na,s as La,e as a,t as n,j as Fa,c as t,a as o,g as r,d as s,m as Ja,b as l,f as Ka,I as e,o as Wa,W as qa,x as Ua,u as za,v as Ba}from"./vendor-ac126d1d.js";import{Y as Qa}from"./index-4f07e12c.js";function Va(Aa){let c,H,u,He,f,G,xa=`<code class="language-bash">locales/
media-assets/
pages/
src/
  lib/
  statics/
  utils/
  template.html
CLIENT_README.txt
google.json
svelte.config.js</code>`,M,g,re,Ge,d,Me,Y,Ye,Ie,I,Ne,Le,m,Fe,le,Je,Ke,N,Da=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> enContent <span class="token keyword">from</span> <span class="token string">'$locales/en/content'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,L,v,ce,We,E,qe,F,Ue,ze,J,k,ie,Be,_,Qe,K,Ve,Xe,W,y,de,Ze,pe,es,q,w,he,ss,ue,as,b,ts,fe,os,ns,U,Sa=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'$lib/MyComponent/index.svelte'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token punctuation">/></span></span></code>`,p,rs,ge,ls,cs,me,is,ds,z,Oa=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>scss<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
  <span class="token atrule"><span class="token rule">@import</span> <span class="token string">'../styles.scss'</span><span class="token punctuation">;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,B,T,ve,ps,C,hs,Q,us,fs,V,P,Ee,gs,j,ms,ke,vs,Es,X,Ra=`<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">&#123;</span> getPath <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">'$utils/statics'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code>`,Z,A,_e,ks,ye,_s,ee,x,we,ys,be,ws,se,D,Te,bs,S,Ts,ae,Cs,Ps,te,O,Ce,js,R,As,$,xs,Ds,Pe;return f=new Qa({props:{id:"tUhs2mc8iow"}}),{c(){c=a("section"),H=a("h1"),u=a("a"),He=n("Directory structure"),Fa(f.$$.fragment),G=a("pre"),M=a("h3"),g=a("a"),re=a("code"),Ge=n("locales/"),d=a("p"),Me=n("The locales directory includes language-specific data for your project. This is often where you\u2019ll download data from Google docs and sheets. Read more in the "),Y=a("a"),Ye=n("metadata"),Ie=n(" and "),I=a("a"),Ne=n("Google docs and sheets"),Le=n(" docs."),m=a("p"),Fe=n("You can import JSON files from this directory using the "),le=a("code"),Je=n("$locales"),Ke=n(" alias. For example:"),N=a("pre"),L=a("h3"),v=a("a"),ce=a("code"),We=n("media-assets/"),E=a("p"),qe=n("This directory is where you can put assets for media clients like EPS and JPG flat graphics. Read more about structuring media assets to upload to the graphics server in the "),F=a("a"),Ue=n("flats"),ze=n(" docs."),J=a("h3"),k=a("a"),ie=a("code"),Be=n("pages/"),_=a("p"),Qe=n("This directory allows you to define what pages and embeds will be published in your project. Read more in the "),K=a("a"),Ve=n("pages"),Xe=n(" docs."),W=a("h3"),y=a("a"),de=a("code"),Ze=n("src/"),pe=a("p"),es=n("This is the directory where you\u2019ll write most of your code."),q=a("h4"),w=a("a"),he=a("code"),ss=n("src/lib/"),ue=a("p"),as=n("Write Svelte components for your pages in this directory."),b=a("p"),ts=n("You can import components onto pages using the "),fe=a("code"),os=n("$lib"),ns=n(" alias. For example:"),U=a("pre"),p=a("p"),rs=n("Note: The "),ge=a("code"),ls=n("$lib"),cs=n(" alias "),me=a("strong"),is=n("does not work"),ds=n(" in SCSS, so you\u2019ll still need to reference files using relative paths:"),z=a("pre"),B=a("h4"),T=a("a"),ve=a("code"),ps=n("src/statics/"),C=a("p"),hs=n("Put media assets like images, fonts and other data in this directory. Read more in the "),Q=a("a"),us=n("media"),fs=n(" docs."),V=a("h4"),P=a("a"),Ee=a("code"),gs=n("src/utils/"),j=a("p"),ms=n("This directory contains a few utility functions. You can import modules from this directory using the "),ke=a("code"),vs=n("$utils"),Es=n(" alias. For example:"),X=a("pre"),Z=a("h4"),A=a("a"),_e=a("code"),ks=n("src/template.html"),ye=a("p"),_s=n("This is the root file with basic markup for all pages and embeds created by the kit. In general, you shouldn\u2019t modify this file."),ee=a("h3"),x=a("a"),we=a("code"),ys=n("CLIENT_README.txt"),be=a("p"),ws=n("You should write specific instructions to clients using embeds from your project in this text file."),se=a("h3"),D=a("a"),Te=a("code"),bs=n("google.json"),S=a("p"),Ts=n("This file configures Google docs and sheets connected to your project. Read more in "),ae=a("a"),Cs=n("Google docs and sheets"),Ps=n("."),te=a("h3"),O=a("a"),Ce=a("code"),js=n("svelte.config.js"),R=a("p"),As=n("The SvelteKit configuration file. In general, you shouldn\u2019t need to alter this file, but you can read more in the "),$=a("a"),xs=n("SvelteKit docs"),Ds=n(" if you do."),this.h()},l(h){c=t(h,"SECTION",{class:!0});var i=o(c);H=t(i,"H1",{id:!0});var Ss=o(H);u=t(Ss,"A",{class:!0,href:!0});var Os=o(u);He=r(Os,"Directory structure"),Os.forEach(s),Ss.forEach(s),Ja(f.$$.fragment,i),G=t(i,"PRE",{class:!0});var $a=o(G);$a.forEach(s),M=t(i,"H3",{id:!0});var Rs=o(M);g=t(Rs,"A",{class:!0,href:!0});var $s=o(g);re=t($s,"CODE",{});var Hs=o(re);Ge=r(Hs,"locales/"),Hs.forEach(s),$s.forEach(s),Rs.forEach(s),d=t(i,"P",{});var oe=o(d);Me=r(oe,"The locales directory includes language-specific data for your project. This is often where you\u2019ll download data from Google docs and sheets. Read more in the "),Y=t(oe,"A",{href:!0});var Gs=o(Y);Ye=r(Gs,"metadata"),Gs.forEach(s),Ie=r(oe," and "),I=t(oe,"A",{href:!0});var Ms=o(I);Ne=r(Ms,"Google docs and sheets"),Ms.forEach(s),Le=r(oe," docs."),oe.forEach(s),m=t(i,"P",{});var je=o(m);Fe=r(je,"You can import JSON files from this directory using the "),le=t(je,"CODE",{});var Ys=o(le);Je=r(Ys,"$locales"),Ys.forEach(s),Ke=r(je," alias. For example:"),je.forEach(s),N=t(i,"PRE",{class:!0});var Ha=o(N);Ha.forEach(s),L=t(i,"H3",{id:!0});var Is=o(L);v=t(Is,"A",{class:!0,href:!0});var Ns=o(v);ce=t(Ns,"CODE",{});var Ls=o(ce);We=r(Ls,"media-assets/"),Ls.forEach(s),Ns.forEach(s),Is.forEach(s),E=t(i,"P",{});var Ae=o(E);qe=r(Ae,"This directory is where you can put assets for media clients like EPS and JPG flat graphics. Read more about structuring media assets to upload to the graphics server in the "),F=t(Ae,"A",{href:!0});var Fs=o(F);Ue=r(Fs,"flats"),Fs.forEach(s),ze=r(Ae," docs."),Ae.forEach(s),J=t(i,"H3",{id:!0});var Js=o(J);k=t(Js,"A",{class:!0,href:!0});var Ks=o(k);ie=t(Ks,"CODE",{});var Ws=o(ie);Be=r(Ws,"pages/"),Ws.forEach(s),Ks.forEach(s),Js.forEach(s),_=t(i,"P",{});var xe=o(_);Qe=r(xe,"This directory allows you to define what pages and embeds will be published in your project. Read more in the "),K=t(xe,"A",{href:!0});var qs=o(K);Ve=r(qs,"pages"),qs.forEach(s),Xe=r(xe," docs."),xe.forEach(s),W=t(i,"H3",{id:!0});var Us=o(W);y=t(Us,"A",{class:!0,href:!0});var zs=o(y);de=t(zs,"CODE",{});var Bs=o(de);Ze=r(Bs,"src/"),Bs.forEach(s),zs.forEach(s),Us.forEach(s),pe=t(i,"P",{});var Qs=o(pe);es=r(Qs,"This is the directory where you\u2019ll write most of your code."),Qs.forEach(s),q=t(i,"H4",{id:!0});var Vs=o(q);w=t(Vs,"A",{class:!0,href:!0});var Xs=o(w);he=t(Xs,"CODE",{});var Zs=o(he);ss=r(Zs,"src/lib/"),Zs.forEach(s),Xs.forEach(s),Vs.forEach(s),ue=t(i,"P",{});var ea=o(ue);as=r(ea,"Write Svelte components for your pages in this directory."),ea.forEach(s),b=t(i,"P",{});var De=o(b);ts=r(De,"You can import components onto pages using the "),fe=t(De,"CODE",{});var sa=o(fe);os=r(sa,"$lib"),sa.forEach(s),ns=r(De," alias. For example:"),De.forEach(s),U=t(i,"PRE",{class:!0});var Ga=o(U);Ga.forEach(s),p=t(i,"P",{});var ne=o(p);rs=r(ne,"Note: The "),ge=t(ne,"CODE",{});var aa=o(ge);ls=r(aa,"$lib"),aa.forEach(s),cs=r(ne," alias "),me=t(ne,"STRONG",{});var ta=o(me);is=r(ta,"does not work"),ta.forEach(s),ds=r(ne," in SCSS, so you\u2019ll still need to reference files using relative paths:"),ne.forEach(s),z=t(i,"PRE",{class:!0});var Ma=o(z);Ma.forEach(s),B=t(i,"H4",{id:!0});var oa=o(B);T=t(oa,"A",{class:!0,href:!0});var na=o(T);ve=t(na,"CODE",{});var ra=o(ve);ps=r(ra,"src/statics/"),ra.forEach(s),na.forEach(s),oa.forEach(s),C=t(i,"P",{});var Se=o(C);hs=r(Se,"Put media assets like images, fonts and other data in this directory. Read more in the "),Q=t(Se,"A",{href:!0});var la=o(Q);us=r(la,"media"),la.forEach(s),fs=r(Se," docs."),Se.forEach(s),V=t(i,"H4",{id:!0});var ca=o(V);P=t(ca,"A",{class:!0,href:!0});var ia=o(P);Ee=t(ia,"CODE",{});var da=o(Ee);gs=r(da,"src/utils/"),da.forEach(s),ia.forEach(s),ca.forEach(s),j=t(i,"P",{});var Oe=o(j);ms=r(Oe,"This directory contains a few utility functions. You can import modules from this directory using the "),ke=t(Oe,"CODE",{});var pa=o(ke);vs=r(pa,"$utils"),pa.forEach(s),Es=r(Oe," alias. For example:"),Oe.forEach(s),X=t(i,"PRE",{class:!0});var Ya=o(X);Ya.forEach(s),Z=t(i,"H4",{id:!0});var ha=o(Z);A=t(ha,"A",{class:!0,href:!0});var ua=o(A);_e=t(ua,"CODE",{});var fa=o(_e);ks=r(fa,"src/template.html"),fa.forEach(s),ua.forEach(s),ha.forEach(s),ye=t(i,"P",{});var ga=o(ye);_s=r(ga,"This is the root file with basic markup for all pages and embeds created by the kit. In general, you shouldn\u2019t modify this file."),ga.forEach(s),ee=t(i,"H3",{id:!0});var ma=o(ee);x=t(ma,"A",{class:!0,href:!0});var va=o(x);we=t(va,"CODE",{});var Ea=o(we);ys=r(Ea,"CLIENT_README.txt"),Ea.forEach(s),va.forEach(s),ma.forEach(s),be=t(i,"P",{});var ka=o(be);ws=r(ka,"You should write specific instructions to clients using embeds from your project in this text file."),ka.forEach(s),se=t(i,"H3",{id:!0});var _a=o(se);D=t(_a,"A",{class:!0,href:!0});var ya=o(D);Te=t(ya,"CODE",{});var wa=o(Te);bs=r(wa,"google.json"),wa.forEach(s),ya.forEach(s),_a.forEach(s),S=t(i,"P",{});var Re=o(S);Ts=r(Re,"This file configures Google docs and sheets connected to your project. Read more in "),ae=t(Re,"A",{href:!0});var ba=o(ae);Cs=r(ba,"Google docs and sheets"),ba.forEach(s),Ps=r(Re,"."),Re.forEach(s),te=t(i,"H3",{id:!0});var Ta=o(te);O=t(Ta,"A",{class:!0,href:!0});var Ca=o(O);Ce=t(Ca,"CODE",{});var Pa=o(Ce);js=r(Pa,"svelte.config.js"),Pa.forEach(s),Ca.forEach(s),Ta.forEach(s),R=t(i,"P",{});var $e=o(R);As=r($e,"The SvelteKit configuration file. In general, you shouldn\u2019t need to alter this file, but you can read more in the "),$=t($e,"A",{href:!0,rel:!0});var ja=o($);xs=r(ja,"SvelteKit docs"),ja.forEach(s),Ds=r($e," if you do."),$e.forEach(s),i.forEach(s),this.h()},h(){l(u,"class","heading-link"),l(u,"href","#directory-structure"),l(H,"id","directory-structure"),l(G,"class","language-bash"),l(g,"class","heading-link"),l(g,"href","#locales"),l(M,"id","locales"),l(Y,"href","./metadata.md"),l(I,"href","./google-docs-and-sheets.md"),l(N,"class","language-svelte"),l(v,"class","heading-link"),l(v,"href","#media-assets"),l(L,"id","media-assets"),l(F,"href","./flats.md"),l(k,"class","heading-link"),l(k,"href","#pages"),l(J,"id","pages"),l(K,"href","./pages.md"),l(y,"class","heading-link"),l(y,"href","#src"),l(W,"id","src"),l(w,"class","heading-link"),l(w,"href","#srclib"),l(q,"id","srclib"),l(U,"class","language-svelte"),l(z,"class","language-svelte"),l(T,"class","heading-link"),l(T,"href","#srcstatics"),l(B,"id","srcstatics"),l(Q,"href","./media.md"),l(P,"class","heading-link"),l(P,"href","#srcutils"),l(V,"id","srcutils"),l(X,"class","language-svelte"),l(A,"class","heading-link"),l(A,"href","#srctemplatehtml"),l(Z,"id","srctemplatehtml"),l(x,"class","heading-link"),l(x,"href","#client_readmetxt"),l(ee,"id","client_readmetxt"),l(D,"class","heading-link"),l(D,"href","#googlejson"),l(se,"id","googlejson"),l(ae,"href","./google-docs-and-sheets.md"),l(O,"class","heading-link"),l(O,"href","#svelteconfigjs"),l(te,"id","svelteconfigjs"),l($,"href","https://kit.svelte.dev/docs#configuration"),l($,"rel","nofollow"),l(c,"class","wide")},m(h,i){Ka(h,c,i),e(c,H),e(H,u),e(u,He),Wa(f,c,null),e(c,G),G.innerHTML=xa,e(c,M),e(M,g),e(g,re),e(re,Ge),e(c,d),e(d,Me),e(d,Y),e(Y,Ye),e(d,Ie),e(d,I),e(I,Ne),e(d,Le),e(c,m),e(m,Fe),e(m,le),e(le,Je),e(m,Ke),e(c,N),N.innerHTML=Da,e(c,L),e(L,v),e(v,ce),e(ce,We),e(c,E),e(E,qe),e(E,F),e(F,Ue),e(E,ze),e(c,J),e(J,k),e(k,ie),e(ie,Be),e(c,_),e(_,Qe),e(_,K),e(K,Ve),e(_,Xe),e(c,W),e(W,y),e(y,de),e(de,Ze),e(c,pe),e(pe,es),e(c,q),e(q,w),e(w,he),e(he,ss),e(c,ue),e(ue,as),e(c,b),e(b,ts),e(b,fe),e(fe,os),e(b,ns),e(c,U),U.innerHTML=Sa,e(c,p),e(p,rs),e(p,ge),e(ge,ls),e(p,cs),e(p,me),e(me,is),e(p,ds),e(c,z),z.innerHTML=Oa,e(c,B),e(B,T),e(T,ve),e(ve,ps),e(c,C),e(C,hs),e(C,Q),e(Q,us),e(C,fs),e(c,V),e(V,P),e(P,Ee),e(Ee,gs),e(c,j),e(j,ms),e(j,ke),e(ke,vs),e(j,Es),e(c,X),X.innerHTML=Ra,e(c,Z),e(Z,A),e(A,_e),e(_e,ks),e(c,ye),e(ye,_s),e(c,ee),e(ee,x),e(x,we),e(we,ys),e(c,be),e(be,ws),e(c,se),e(se,D),e(D,Te),e(Te,bs),e(c,S),e(S,Ts),e(S,ae),e(ae,Cs),e(S,Ps),e(c,te),e(te,O),e(O,Ce),e(Ce,js),e(c,R),e(R,As),e(R,$),e($,xs),e(R,Ds),Pe=!0},p:qa,i(h){Pe||(Ua(f.$$.fragment,h),Pe=!0)},o(h){za(f.$$.fragment,h),Pe=!1},d(h){h&&s(c),Ba(f)}}}const et={title:"What's in it",published:!0,order:5};class st extends Ia{constructor(c){super();Na(this,c,null,Va,La,{})}}export{st as default,et as metadata};