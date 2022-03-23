import{S as ya,i as Ea,s as ba,e as t,t as n,k as fe,c as a,a as o,h as l,d as s,m as ge,b as c,$ as ha,a2 as ua,g as ja,L as e,Z as Pt}from"./vendor-a9517919.js";function xa(fa){let r,I,u,ye,W,Ee,T,be,d,je,xe,A,f,Pe,i,K,N,Ie,g,Te,Ae,M,k,Ne,m,Se,Le,Oe,Y,S,He,v,Ce,qe,De,B,Fe,L,It,O,ze,w,Re,Z,Ge,_,We,Q,Ke,Me,$,Ye,y,Be,J,Ze,Qe,V,$e,H,Tt,X,Je,C,U,Ve,Xe,q,Ue,E,et,ee,tt,te,at,ae,st,se,ot,D,ga=`<code class="language-scss">.<span class="token property">ai2svelte-container</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>#locator_airport<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1250px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,b,nt,oe,lt,rt,F,ka='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span> <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Kicker<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Hed<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Dek<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>...</code>',j,pt,ne,ct,it,z,ma=`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span><span class="token string">'locator_airport'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>locator_airport<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>body-text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
    error
  <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></code>`,le,ht,re,ut,h,pe,ce,dt,ft,ie,R,gt,x,kt,mt,he,ue,vt;return{c(){r=t("section"),I=t("h1"),u=t("a"),ye=n(da),W=t("p"),Ee=n("Let\u2019s try to rebuild an already existing Reuters graphics project in the new kit."),T=t("p"),be=n("I think a good first one is: "),d=t("a"),je=n("https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),xe=t("hr"),A=t("h3"),f=t("a"),Pe=n("Prequisites"),i=t("ol"),K=t("li"),N=t("p"),Ie=n("All the ai files for this project are "),g=t("a"),Te=n("here"),Ae=fe(),M=t("li"),k=t("p"),Ne=n("The google doc for my \u201Cnew kit version\u201D of the project is "),m=t("a"),Se=n("here"),Le=n(". Feel free to tally if you get stuck somewhere."),Oe=fe(),Y=t("li"),S=t("p"),He=n("The repo is "),v=t("a"),Ce=n("here"),qe=fe(),De=t("hr"),B=t("p"),Fe=n("Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),L=t("img"),O=t("p"),ze=n("First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),w=t("a"),Re=n("Quickstart"),Z=t("p"),Ge=n("The google doc that was created for me is"),_=t("p"),We=n("First thing you shouuld do is take a look at "),Q=t("code"),Ke=n("Page.svelte"),Me=n(" in the src/lib folder."),$=t("p"),Ye=n("Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),y=t("p"),Be=n("Now run "),J=t("code"),Ze=n("yarn get-google"),Qe=n(" from the terminal to see the updated page with the scroller removed."),V=t("p"),$e=n("Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),H=t("img"),X=t("p"),Je=n("Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),C=t("p"),U=t("strong"),Ve=n("NOTE"),Xe=n(": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),q=t("p"),Ue=n("Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),E=t("a"),et=n("ai docs"),ee=t("p"),tt=n("Run the ai2svelte script for all other ai files as well."),te=t("p"),at=n("Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),ae=t("p"),st=n("Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),se=t("p"),ot=n("So we can do the same in our main.scss:"),D=t("pre"),b=t("p"),nt=n("Now, for the header graphic, we\u2019ll have to edit the "),oe=t("code"),lt=n("Page.svelte"),rt=n(" (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),F=t("pre"),j=t("p"),pt=n("We\u2019ll have to manually add in an ai2svelte component like so, just above the "),ne=t("code"),ct=n("<Headline />"),it=n(" component:"),z=t("pre"),le=t("p"),ht=n("And.. that\u2019s it!"),re=t("p"),ut=n("We\u2019ve successfully migrated an old project to the new kit, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new kit as a newbie:"),h=t("ol"),pe=t("li"),ce=t("p"),dt=n("For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),ft=fe(),ie=t("li"),R=t("p"),gt=n("ai2html settings have to be changed as in the docs "),x=t("a"),kt=n("here"),mt=fe(),he=t("li"),ue=t("p"),vt=n("The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),this.h()},l(de){r=a(de,"SECTION",{class:!0});var p=o(r);I=a(p,"H1",{id:!0});var At=o(I);u=a(At,"A",{class:!0,href:!0});var Nt=o(u);ye=l(Nt,da),Nt.forEach(s),At.forEach(s),W=a(p,"P",{});var St=o(W);Ee=l(St,"Let\u2019s try to rebuild an already existing Reuters graphics project in the new kit."),St.forEach(s),T=a(p,"P",{});var wt=o(T);be=l(wt,"I think a good first one is: "),d=a(wt,"A",{href:!0,rel:!0});var Lt=o(d);je=l(Lt,"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),Lt.forEach(s),wt.forEach(s),xe=a(p,"HR",{}),A=a(p,"H3",{id:!0});var Ot=o(A);f=a(Ot,"A",{class:!0,href:!0});var Ht=o(f);Pe=l(Ht,"Prequisites"),Ht.forEach(s),Ot.forEach(s),i=a(p,"OL",{});var P=o(i);K=a(P,"LI",{});var Ct=o(K);N=a(Ct,"P",{});var _t=o(N);Ie=l(_t,"All the ai files for this project are "),g=a(_t,"A",{href:!0,rel:!0});var qt=o(g);Te=l(qt,"here"),qt.forEach(s),_t.forEach(s),Ct.forEach(s),Ae=ge(P),M=a(P,"LI",{});var Dt=o(M);k=a(Dt,"P",{});var ke=o(k);Ne=l(ke,"The google doc for my \u201Cnew kit version\u201D of the project is "),m=a(ke,"A",{href:!0,rel:!0});var Ft=o(m);Se=l(Ft,"here"),Ft.forEach(s),Le=l(ke,". Feel free to tally if you get stuck somewhere."),ke.forEach(s),Dt.forEach(s),Oe=ge(P),Y=a(P,"LI",{});var zt=o(Y);S=a(zt,"P",{});var yt=o(S);He=l(yt,"The repo is "),v=a(yt,"A",{href:!0,rel:!0});var Rt=o(v);Ce=l(Rt,"here"),Rt.forEach(s),yt.forEach(s),zt.forEach(s),qe=ge(P),P.forEach(s),De=a(p,"HR",{}),B=a(p,"P",{});var Gt=o(B);Fe=l(Gt,"Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),Gt.forEach(s),L=a(p,"IMG",{src:!0,alt:!0}),O=a(p,"P",{});var Et=o(O);ze=l(Et,"First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),w=a(Et,"A",{href:!0,rel:!0});var Wt=o(w);Re=l(Wt,"Quickstart"),Wt.forEach(s),Et.forEach(s),Z=a(p,"P",{});var Kt=o(Z);Ge=l(Kt,"The google doc that was created for me is"),Kt.forEach(s),_=a(p,"P",{});var me=o(_);We=l(me,"First thing you shouuld do is take a look at "),Q=a(me,"CODE",{});var Mt=o(Q);Ke=l(Mt,"Page.svelte"),Mt.forEach(s),Me=l(me," in the src/lib folder."),me.forEach(s),$=a(p,"P",{});var Yt=o($);Ye=l(Yt,"Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),Yt.forEach(s),y=a(p,"P",{});var ve=o(y);Be=l(ve,"Now run "),J=a(ve,"CODE",{});var Bt=o(J);Ze=l(Bt,"yarn get-google"),Bt.forEach(s),Qe=l(ve," from the terminal to see the updated page with the scroller removed."),ve.forEach(s),V=a(p,"P",{});var Zt=o(V);$e=l(Zt,"Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),Zt.forEach(s),H=a(p,"IMG",{src:!0,alt:!0}),X=a(p,"P",{});var Qt=o(X);Je=l(Qt,"Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),Qt.forEach(s),C=a(p,"P",{});var bt=o(C);U=a(bt,"STRONG",{});var $t=o(U);Ve=l($t,"NOTE"),$t.forEach(s),Xe=l(bt,": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),bt.forEach(s),q=a(p,"P",{});var jt=o(q);Ue=l(jt,"Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),E=a(jt,"A",{href:!0,rel:!0});var Jt=o(E);et=l(Jt,"ai docs"),Jt.forEach(s),jt.forEach(s),ee=a(p,"P",{});var Vt=o(ee);tt=l(Vt,"Run the ai2svelte script for all other ai files as well."),Vt.forEach(s),te=a(p,"P",{});var Xt=o(te);at=l(Xt,"Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),Xt.forEach(s),ae=a(p,"P",{});var Ut=o(ae);st=l(Ut,"Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),Ut.forEach(s),se=a(p,"P",{});var ea=o(se);ot=l(ea,"So we can do the same in our main.scss:"),ea.forEach(s),D=a(p,"PRE",{class:!0});var va=o(D);va.forEach(s),b=a(p,"P",{});var we=o(b);nt=l(we,"Now, for the header graphic, we\u2019ll have to edit the "),oe=a(we,"CODE",{});var ta=o(oe);lt=l(ta,"Page.svelte"),ta.forEach(s),rt=l(we," (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),we.forEach(s),F=a(p,"PRE",{class:!0});var wa=o(F);wa.forEach(s),j=a(p,"P",{});var _e=o(j);pt=l(_e,"We\u2019ll have to manually add in an ai2svelte component like so, just above the "),ne=a(_e,"CODE",{});var aa=o(ne);ct=l(aa,"<Headline />"),aa.forEach(s),it=l(_e," component:"),_e.forEach(s),z=a(p,"PRE",{class:!0});var _a=o(z);_a.forEach(s),le=a(p,"P",{});var sa=o(le);ht=l(sa,"And.. that\u2019s it!"),sa.forEach(s),re=a(p,"P",{});var oa=o(re);ut=l(oa,"We\u2019ve successfully migrated an old project to the new kit, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new kit as a newbie:"),oa.forEach(s),h=a(p,"OL",{});var G=o(h);pe=a(G,"LI",{});var na=o(pe);ce=a(na,"P",{});var la=o(ce);dt=l(la,"For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),la.forEach(s),na.forEach(s),ft=ge(G),ie=a(G,"LI",{});var ra=o(ie);R=a(ra,"P",{});var xt=o(R);gt=l(xt,"ai2html settings have to be changed as in the docs "),x=a(xt,"A",{href:!0,rel:!0});var pa=o(x);kt=l(pa,"here"),pa.forEach(s),xt.forEach(s),ra.forEach(s),mt=ge(G),he=a(G,"LI",{});var ca=o(he);ue=a(ca,"P",{});var ia=o(ue);vt=l(ia,"The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),ia.forEach(s),ca.forEach(s),G.forEach(s),p.forEach(s),this.h()},h(){c(u,"class","heading-link"),c(u,"href","#title"),c(I,"id","title"),c(d,"href","https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),c(d,"rel","nofollow"),c(f,"class","heading-link"),c(f,"href","#prequisites"),c(A,"id","prequisites"),c(g,"href","https://www.dropbox.com/work/GRAPHICS%20all%20Staff/Scarr%2C%20Simon/Kabul%20blasts/new-rig-version/"),c(g,"rel","nofollow"),c(m,"href","https://docs.google.com/document/d/1V8dr9bO8ZDbePOZDzYNYPwZnmk7oSSlyhwKftJzmwXI/edit"),c(m,"rel","nofollow"),c(v,"href","https://github.com/reuters-graphics/kabul-blast-new-rig"),c(v,"rel","nofollow"),ha(L.src,It=ua("images/illos/kabul-components.jpg"))||c(L,"src",It),c(L,"alt","Kabul page's components"),c(w,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/quickstart"),c(w,"rel","nofollow"),ha(H.src,Tt=ua("images/illos/kabul-hed-edit.jpg"))||c(H,"src",Tt),c(H,"alt","Edit the google doc for the Kabul page"),c(E,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(E,"rel","nofollow"),c(D,"class","language-scss"),c(F,"class","language-svelte"),c(z,"class","language-svelte"),c(x,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(x,"rel","nofollow"),c(r,"class","wide")},m(de,p){ja(de,r,p),e(r,I),e(I,u),e(u,ye),e(r,W),e(W,Ee),e(r,T),e(T,be),e(T,d),e(d,je),e(r,xe),e(r,A),e(A,f),e(f,Pe),e(r,i),e(i,K),e(K,N),e(N,Ie),e(N,g),e(g,Te),e(i,Ae),e(i,M),e(M,k),e(k,Ne),e(k,m),e(m,Se),e(k,Le),e(i,Oe),e(i,Y),e(Y,S),e(S,He),e(S,v),e(v,Ce),e(i,qe),e(r,De),e(r,B),e(B,Fe),e(r,L),e(r,O),e(O,ze),e(O,w),e(w,Re),e(r,Z),e(Z,Ge),e(r,_),e(_,We),e(_,Q),e(Q,Ke),e(_,Me),e(r,$),e($,Ye),e(r,y),e(y,Be),e(y,J),e(J,Ze),e(y,Qe),e(r,V),e(V,$e),e(r,H),e(r,X),e(X,Je),e(r,C),e(C,U),e(U,Ve),e(C,Xe),e(r,q),e(q,Ue),e(q,E),e(E,et),e(r,ee),e(ee,tt),e(r,te),e(te,at),e(r,ae),e(ae,st),e(r,se),e(se,ot),e(r,D),D.innerHTML=ga,e(r,b),e(b,nt),e(b,oe),e(oe,lt),e(b,rt),e(r,F),F.innerHTML=ka,e(r,j),e(j,pt),e(j,ne),e(ne,ct),e(j,it),e(r,z),z.innerHTML=ma,e(r,le),e(le,ht),e(r,re),e(re,ut),e(r,h),e(h,pe),e(pe,ce),e(ce,dt),e(h,ft),e(h,ie),e(ie,R),e(R,gt),e(R,x),e(x,kt),e(h,mt),e(h,he),e(he,ue),e(ue,vt)},p:Pt,i:Pt,o:Pt,d(de){de&&s(r)}}}const Pa={published:!0,title:"Migrating an old rig project to the new kit",order:8},{published:Ta,title:da,order:Aa}=Pa;class Na extends ya{constructor(r){super();Ea(this,r,null,xa,ba,{})}}export{Na as default,Pa as metadata};
