import{S as wa,i as _a,s as ya,e as t,t as n,k as de,c as a,a as o,g as l,d as s,n as fe,b as c,Y as ca,a0 as ia,f as Ea,I as e,W as xt}from"./vendor-ac126d1d.js";function ba(ua){let r,R,_e,W,ye,P,Ee,u,be,je,I,d,xe,i,G,T,Pe,f,Ie,Te,K,g,Ae,k,Ne,Se,Oe,Y,A,Le,m,Ce,He,qe,M,De,N,Pt,S,Fe,v,ze,B,Re,w,We,Z,Ge,Ke,Q,Ye,_,Me,J,Be,Ze,V,Qe,O,It,X,Je,L,$,Ve,Xe,C,$e,y,Ue,U,et,ee,tt,te,at,ae,st,H,da=`<code class="language-scss">.<span class="token property">ai2svelte-container</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>#locator_airport<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1250px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,E,ot,se,nt,lt,q,fa='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span> <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Kicker<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Hed<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Dek<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>...</code>',b,rt,oe,pt,ct,D,ga=`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span><span class="token string">'locator_airport'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>locator_airport<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>body-text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
    error
  <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></code>`,ne,it,le,ht,h,re,pe,ut,dt,ce,F,ft,j,gt,kt,ie,he,mt;return{c(){r=t("section"),R=t("p"),_e=n(ha),W=t("p"),ye=n("Let\u2019s try to rebuild an already existing Reuters graphics project in the new kit."),P=t("p"),Ee=n("I think a good first one is: "),u=t("a"),be=n("https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),je=t("hr"),I=t("h3"),d=t("a"),xe=n("Prequisites"),i=t("ol"),G=t("li"),T=t("p"),Pe=n("All the ai files for this project are "),f=t("a"),Ie=n("here"),Te=de(),K=t("li"),g=t("p"),Ae=n("The google doc for my \u201Cnew kit version\u201D of the project is "),k=t("a"),Ne=n("here"),Se=n(". Feel free to tally if you get stuck somewhere."),Oe=de(),Y=t("li"),A=t("p"),Le=n("The repo is "),m=t("a"),Ce=n("here"),He=de(),qe=t("hr"),M=t("p"),De=n("Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),N=t("img"),S=t("p"),Fe=n("First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),v=t("a"),ze=n("Quickstart"),B=t("p"),Re=n("The google doc that was created for me is"),w=t("p"),We=n("First thing you shouuld do is take a look at "),Z=t("code"),Ge=n("Page.svelte"),Ke=n(" in the src/lib folder."),Q=t("p"),Ye=n("Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),_=t("p"),Me=n("Now run "),J=t("code"),Be=n("yarn get-google"),Ze=n(" from the terminal to see the updated page with the scroller removed."),V=t("p"),Qe=n("Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),O=t("img"),X=t("p"),Je=n("Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),L=t("p"),$=t("strong"),Ve=n("NOTE"),Xe=n(": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),C=t("p"),$e=n("Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),y=t("a"),Ue=n("ai docs"),U=t("p"),et=n("Run the ai2svelte script for all other ai files as well."),ee=t("p"),tt=n("Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),te=t("p"),at=n("Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),ae=t("p"),st=n("So we can do the same in our main.scss:"),H=t("pre"),E=t("p"),ot=n("Now, for the header graphic, we\u2019ll have to edit the "),se=t("code"),nt=n("Page.svelte"),lt=n(" (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),q=t("pre"),b=t("p"),rt=n("We\u2019ll have to manually add in an ai2svelte component like so, just above the "),oe=t("code"),pt=n("<Headline />"),ct=n(" component:"),D=t("pre"),ne=t("p"),it=n("And.. that\u2019s it!"),le=t("p"),ht=n("We\u2019ve successfully migrated an old project to the new kit, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new kit as a newbie:"),h=t("ol"),re=t("li"),pe=t("p"),ut=n("For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),dt=de(),ce=t("li"),F=t("p"),ft=n("ai2html settings have to be changed as in the docs "),j=t("a"),gt=n("here"),kt=de(),ie=t("li"),he=t("p"),mt=n("The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),this.h()},l(ue){r=a(ue,"SECTION",{class:!0});var p=o(r);R=a(p,"P",{});var Tt=o(R);_e=l(Tt,ha),Tt.forEach(s),W=a(p,"P",{});var At=o(W);ye=l(At,"Let\u2019s try to rebuild an already existing Reuters graphics project in the new kit."),At.forEach(s),P=a(p,"P",{});var vt=o(P);Ee=l(vt,"I think a good first one is: "),u=a(vt,"A",{href:!0,rel:!0});var Nt=o(u);be=l(Nt,"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),Nt.forEach(s),vt.forEach(s),je=a(p,"HR",{}),I=a(p,"H3",{id:!0});var St=o(I);d=a(St,"A",{class:!0,href:!0});var Ot=o(d);xe=l(Ot,"Prequisites"),Ot.forEach(s),St.forEach(s),i=a(p,"OL",{});var x=o(i);G=a(x,"LI",{});var Lt=o(G);T=a(Lt,"P",{});var wt=o(T);Pe=l(wt,"All the ai files for this project are "),f=a(wt,"A",{href:!0,rel:!0});var Ct=o(f);Ie=l(Ct,"here"),Ct.forEach(s),wt.forEach(s),Lt.forEach(s),Te=fe(x),K=a(x,"LI",{});var Ht=o(K);g=a(Ht,"P",{});var ge=o(g);Ae=l(ge,"The google doc for my \u201Cnew kit version\u201D of the project is "),k=a(ge,"A",{href:!0,rel:!0});var qt=o(k);Ne=l(qt,"here"),qt.forEach(s),Se=l(ge,". Feel free to tally if you get stuck somewhere."),ge.forEach(s),Ht.forEach(s),Oe=fe(x),Y=a(x,"LI",{});var Dt=o(Y);A=a(Dt,"P",{});var _t=o(A);Le=l(_t,"The repo is "),m=a(_t,"A",{href:!0,rel:!0});var Ft=o(m);Ce=l(Ft,"here"),Ft.forEach(s),_t.forEach(s),Dt.forEach(s),He=fe(x),x.forEach(s),qe=a(p,"HR",{}),M=a(p,"P",{});var zt=o(M);De=l(zt,"Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),zt.forEach(s),N=a(p,"IMG",{src:!0,alt:!0}),S=a(p,"P",{});var yt=o(S);Fe=l(yt,"First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),v=a(yt,"A",{href:!0,rel:!0});var Rt=o(v);ze=l(Rt,"Quickstart"),Rt.forEach(s),yt.forEach(s),B=a(p,"P",{});var Wt=o(B);Re=l(Wt,"The google doc that was created for me is"),Wt.forEach(s),w=a(p,"P",{});var ke=o(w);We=l(ke,"First thing you shouuld do is take a look at "),Z=a(ke,"CODE",{});var Gt=o(Z);Ge=l(Gt,"Page.svelte"),Gt.forEach(s),Ke=l(ke," in the src/lib folder."),ke.forEach(s),Q=a(p,"P",{});var Kt=o(Q);Ye=l(Kt,"Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),Kt.forEach(s),_=a(p,"P",{});var me=o(_);Me=l(me,"Now run "),J=a(me,"CODE",{});var Yt=o(J);Be=l(Yt,"yarn get-google"),Yt.forEach(s),Ze=l(me," from the terminal to see the updated page with the scroller removed."),me.forEach(s),V=a(p,"P",{});var Mt=o(V);Qe=l(Mt,"Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),Mt.forEach(s),O=a(p,"IMG",{src:!0,alt:!0}),X=a(p,"P",{});var Bt=o(X);Je=l(Bt,"Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),Bt.forEach(s),L=a(p,"P",{});var Et=o(L);$=a(Et,"STRONG",{});var Zt=o($);Ve=l(Zt,"NOTE"),Zt.forEach(s),Xe=l(Et,": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),Et.forEach(s),C=a(p,"P",{});var bt=o(C);$e=l(bt,"Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),y=a(bt,"A",{href:!0,rel:!0});var Qt=o(y);Ue=l(Qt,"ai docs"),Qt.forEach(s),bt.forEach(s),U=a(p,"P",{});var Jt=o(U);et=l(Jt,"Run the ai2svelte script for all other ai files as well."),Jt.forEach(s),ee=a(p,"P",{});var Vt=o(ee);tt=l(Vt,"Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),Vt.forEach(s),te=a(p,"P",{});var Xt=o(te);at=l(Xt,"Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),Xt.forEach(s),ae=a(p,"P",{});var $t=o(ae);st=l($t,"So we can do the same in our main.scss:"),$t.forEach(s),H=a(p,"PRE",{class:!0});var ka=o(H);ka.forEach(s),E=a(p,"P",{});var ve=o(E);ot=l(ve,"Now, for the header graphic, we\u2019ll have to edit the "),se=a(ve,"CODE",{});var Ut=o(se);nt=l(Ut,"Page.svelte"),Ut.forEach(s),lt=l(ve," (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),ve.forEach(s),q=a(p,"PRE",{class:!0});var ma=o(q);ma.forEach(s),b=a(p,"P",{});var we=o(b);rt=l(we,"We\u2019ll have to manually add in an ai2svelte component like so, just above the "),oe=a(we,"CODE",{});var ea=o(oe);pt=l(ea,"<Headline />"),ea.forEach(s),ct=l(we," component:"),we.forEach(s),D=a(p,"PRE",{class:!0});var va=o(D);va.forEach(s),ne=a(p,"P",{});var ta=o(ne);it=l(ta,"And.. that\u2019s it!"),ta.forEach(s),le=a(p,"P",{});var aa=o(le);ht=l(aa,"We\u2019ve successfully migrated an old project to the new kit, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new kit as a newbie:"),aa.forEach(s),h=a(p,"OL",{});var z=o(h);re=a(z,"LI",{});var sa=o(re);pe=a(sa,"P",{});var oa=o(pe);ut=l(oa,"For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),oa.forEach(s),sa.forEach(s),dt=fe(z),ce=a(z,"LI",{});var na=o(ce);F=a(na,"P",{});var jt=o(F);ft=l(jt,"ai2html settings have to be changed as in the docs "),j=a(jt,"A",{href:!0,rel:!0});var la=o(j);gt=l(la,"here"),la.forEach(s),jt.forEach(s),na.forEach(s),kt=fe(z),ie=a(z,"LI",{});var ra=o(ie);he=a(ra,"P",{});var pa=o(he);mt=l(pa,"The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),pa.forEach(s),ra.forEach(s),z.forEach(s),p.forEach(s),this.h()},h(){c(u,"href","https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),c(u,"rel","nofollow"),c(d,"class","heading-link"),c(d,"href","#prequisites"),c(I,"id","prequisites"),c(f,"href","https://www.dropbox.com/work/GRAPHICS%20all%20Staff/Scarr%2C%20Simon/Kabul%20blasts/new-rig-version/"),c(f,"rel","nofollow"),c(k,"href","https://docs.google.com/document/d/1V8dr9bO8ZDbePOZDzYNYPwZnmk7oSSlyhwKftJzmwXI/edit"),c(k,"rel","nofollow"),c(m,"href","https://github.com/reuters-graphics/kabul-blast-new-rig"),c(m,"rel","nofollow"),ca(N.src,Pt=ia("images/illos/kabul-components.jpg"))||c(N,"src",Pt),c(N,"alt","Kabul page's components"),c(v,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/quickstart"),c(v,"rel","nofollow"),ca(O.src,It=ia("images/illos/kabul-hed-edit.jpg"))||c(O,"src",It),c(O,"alt","Edit the google doc for the Kabul page"),c(y,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(y,"rel","nofollow"),c(H,"class","language-scss"),c(q,"class","language-svelte"),c(D,"class","language-svelte"),c(j,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(j,"rel","nofollow"),c(r,"class","wide")},m(ue,p){Ea(ue,r,p),e(r,R),e(R,_e),e(r,W),e(W,ye),e(r,P),e(P,Ee),e(P,u),e(u,be),e(r,je),e(r,I),e(I,d),e(d,xe),e(r,i),e(i,G),e(G,T),e(T,Pe),e(T,f),e(f,Ie),e(i,Te),e(i,K),e(K,g),e(g,Ae),e(g,k),e(k,Ne),e(g,Se),e(i,Oe),e(i,Y),e(Y,A),e(A,Le),e(A,m),e(m,Ce),e(i,He),e(r,qe),e(r,M),e(M,De),e(r,N),e(r,S),e(S,Fe),e(S,v),e(v,ze),e(r,B),e(B,Re),e(r,w),e(w,We),e(w,Z),e(Z,Ge),e(w,Ke),e(r,Q),e(Q,Ye),e(r,_),e(_,Me),e(_,J),e(J,Be),e(_,Ze),e(r,V),e(V,Qe),e(r,O),e(r,X),e(X,Je),e(r,L),e(L,$),e($,Ve),e(L,Xe),e(r,C),e(C,$e),e(C,y),e(y,Ue),e(r,U),e(U,et),e(r,ee),e(ee,tt),e(r,te),e(te,at),e(r,ae),e(ae,st),e(r,H),H.innerHTML=da,e(r,E),e(E,ot),e(E,se),e(se,nt),e(E,lt),e(r,q),q.innerHTML=fa,e(r,b),e(b,rt),e(b,oe),e(oe,pt),e(b,ct),e(r,D),D.innerHTML=ga,e(r,ne),e(ne,it),e(r,le),e(le,ht),e(r,h),e(h,re),e(re,pe),e(pe,ut),e(h,dt),e(h,ce),e(ce,F),e(F,ft),e(F,j),e(j,gt),e(h,kt),e(h,ie),e(ie,he),e(he,mt)},p:xt,i:xt,o:xt,d(ue){ue&&s(r)}}}const ja={published:!0,title:"Migrating an old rig project to the new kit",order:8},{published:Pa,title:ha,order:Ia}=ja;class Ta extends wa{constructor(r){super();_a(this,r,null,ba,ya,{})}}export{Ta as default,ja as metadata};
