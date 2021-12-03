import{S as ga,i as ka,s as ma,e as t,t as n,k as ue,c as a,a as o,g as r,d as s,n as de,b as c,Y as ra,a0 as la,f as va,I as e,W as bt}from"./vendor-ac126d1d.js";function wa(pa){let l,R,we,P,_e,u,ye,Ee,I,d,be,i,W,T,je,f,xe,Pe,G,g,Ie,k,Te,Ae,Ne,K,A,Se,m,Oe,Le,Ce,Y,He,N,jt,S,qe,v,De,M,Fe,w,ze,B,Re,We,Z,Ge,_,Ke,Q,Ye,Me,J,Be,O,xt,V,Ze,L,X,Qe,Je,C,Ve,y,Xe,$,$e,U,Ue,ee,et,te,tt,H,ca=`<code class="language-scss">.<span class="token property">ai2svelte-container</span><span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>#locator_airport<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1250px <span class="token important">!important</span><span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,E,at,ae,st,ot,q,ia='<code class="language-svelte"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Headline</span> <span class="token attr-name">section="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Kicker<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">hed="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Hed<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">dek="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>content<span class="token punctuation">.</span>Dek<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>...</code>',b,nt,se,rt,lt,D,ha=`<code class="language-svelte"><span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">await</span> <span class="token function">fetchComponent</span><span class="token punctuation">(</span><span class="token string">'locator_airport'</span><span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>then component<span class="token punctuation">&#125;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Ai2svelte</span> <span class="token attr-name">AiGraphic="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>component<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>locator_airport<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>body-text<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">:</span>catch error<span class="token punctuation">&#125;</span></span>
  <span class="token language-javascript"><span class="token punctuation">&#123;</span>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Error fetching component: ./ai2svelte/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>block<span class="token punctuation">.</span>ComponentName<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token string">.svelte</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">,</span>
    error
  <span class="token punctuation">)</span><span class="token punctuation">&#125;</span></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">await</span><span class="token punctuation">&#125;</span></span></code>`,oe,pt,ne,ct,h,re,le,it,ht,pe,F,ut,j,dt,ft,ce,ie,gt;return{c(){l=t("section"),R=t("p"),we=n("Let\u2019s try to rebuild an already existing Reuters graphics project in the new rig."),P=t("p"),_e=n("I think a good first one is: "),u=t("a"),ye=n("https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),Ee=t("hr"),I=t("h3"),d=t("a"),be=n("Prequisites"),i=t("ol"),W=t("li"),T=t("p"),je=n("All the ai files for this project are "),f=t("a"),xe=n("here"),Pe=ue(),G=t("li"),g=t("p"),Ie=n("The google doc for my \u201Cnew rig version\u201D of the project is "),k=t("a"),Te=n("here"),Ae=n(". Feel free to tally if you get stuck somewhere."),Ne=ue(),K=t("li"),A=t("p"),Se=n("The repo is "),m=t("a"),Oe=n("here"),Le=ue(),Ce=t("hr"),Y=t("p"),He=n("Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),N=t("img"),S=t("p"),qe=n("First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),v=t("a"),De=n("Quickstart"),M=t("p"),Fe=n("The google doc that was created for me is"),w=t("p"),ze=n("First thing you shouuld do is take a look at "),B=t("code"),Re=n("Page.svelte"),We=n(" in the src/lib folder."),Z=t("p"),Ge=n("Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),_=t("p"),Ke=n("Now run "),Q=t("code"),Ye=n("yarn get-google"),Me=n(" from the terminal to see the updated page with the scroller removed."),J=t("p"),Be=n("Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),O=t("img"),V=t("p"),Ze=n("Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),L=t("p"),X=t("strong"),Qe=n("NOTE"),Je=n(": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),C=t("p"),Ve=n("Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),y=t("a"),Xe=n("ai docs"),$=t("p"),$e=n("Run the ai2svelte script for all other ai files as well."),U=t("p"),Ue=n("Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),ee=t("p"),et=n("Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),te=t("p"),tt=n("So we can do the same in our main.scss:"),H=t("pre"),E=t("p"),at=n("Now, for the header graphic, we\u2019ll have to edit the "),ae=t("code"),st=n("Page.svelte"),ot=n(" (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),q=t("pre"),b=t("p"),nt=n("We\u2019ll have to manually add in an ai2svelte component like so, just above the "),se=t("code"),rt=n("<Headline />"),lt=n(" component:"),D=t("pre"),oe=t("p"),pt=n("And.. that\u2019s it!"),ne=t("p"),ct=n("We\u2019ve successfully migrated an old project to the new rig, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new rig as a newbie:"),h=t("ol"),re=t("li"),le=t("p"),it=n("For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),ht=ue(),pe=t("li"),F=t("p"),ut=n("ai2html settings have to be changed as in the docs "),j=t("a"),dt=n("here"),ft=ue(),ce=t("li"),ie=t("p"),gt=n("The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),this.h()},l(he){l=a(he,"SECTION",{class:!0});var p=o(l);R=a(p,"P",{});var Pt=o(R);we=r(Pt,"Let\u2019s try to rebuild an already existing Reuters graphics project in the new rig."),Pt.forEach(s),P=a(p,"P",{});var kt=o(P);_e=r(kt,"I think a good first one is: "),u=a(kt,"A",{href:!0,rel:!0});var It=o(u);ye=r(It,"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),It.forEach(s),kt.forEach(s),Ee=a(p,"HR",{}),I=a(p,"H3",{id:!0});var Tt=o(I);d=a(Tt,"A",{class:!0,href:!0});var At=o(d);be=r(At,"Prequisites"),At.forEach(s),Tt.forEach(s),i=a(p,"OL",{});var x=o(i);W=a(x,"LI",{});var Nt=o(W);T=a(Nt,"P",{});var mt=o(T);je=r(mt,"All the ai files for this project are "),f=a(mt,"A",{href:!0,rel:!0});var St=o(f);xe=r(St,"here"),St.forEach(s),mt.forEach(s),Nt.forEach(s),Pe=de(x),G=a(x,"LI",{});var Ot=o(G);g=a(Ot,"P",{});var fe=o(g);Ie=r(fe,"The google doc for my \u201Cnew rig version\u201D of the project is "),k=a(fe,"A",{href:!0,rel:!0});var Lt=o(k);Te=r(Lt,"here"),Lt.forEach(s),Ae=r(fe,". Feel free to tally if you get stuck somewhere."),fe.forEach(s),Ot.forEach(s),Ne=de(x),K=a(x,"LI",{});var Ct=o(K);A=a(Ct,"P",{});var vt=o(A);Se=r(vt,"The repo is "),m=a(vt,"A",{href:!0,rel:!0});var Ht=o(m);Oe=r(Ht,"here"),Ht.forEach(s),vt.forEach(s),Ct.forEach(s),Le=de(x),x.forEach(s),Ce=a(p,"HR",{}),Y=a(p,"P",{});var qt=o(Y);He=r(qt,"Before we get into actually writing code, let\u2019s look a the project and \u201Cthink in components\u201D for a bit."),qt.forEach(s),N=a(p,"IMG",{src:!0,alt:!0}),S=a(p,"P",{});var wt=o(S);qe=r(wt,"First we\u2019ll create a new blank project. Select yes for the Google Doc question. If you\u2019re unsure how to do that, check out "),v=a(wt,"A",{href:!0,rel:!0});var Dt=o(v);De=r(Dt,"Quickstart"),Dt.forEach(s),wt.forEach(s),M=a(p,"P",{});var Ft=o(M);Fe=r(Ft,"The google doc that was created for me is"),Ft.forEach(s),w=a(p,"P",{});var ge=o(w);ze=r(ge,"First thing you shouuld do is take a look at "),B=a(ge,"CODE",{});var zt=o(B);Re=r(zt,"Page.svelte"),zt.forEach(s),We=r(ge," in the src/lib folder."),ge.forEach(s),Z=a(p,"P",{});var Rt=o(Z);Ge=r(Rt,"Also simultaneously open the google doc that was created. You\u2019ll see by default a number of blocks are added to the doc like text, photo, ai2svelte, ai-scroller. We will need all of them except \u201Cai-scroller\u201D. So go ahead and delete that whole block from the doc."),Rt.forEach(s),_=a(p,"P",{});var ke=o(_);Ke=r(ke,"Now run "),Q=a(ke,"CODE",{});var Wt=o(Q);Ye=r(Wt,"yarn get-google"),Wt.forEach(s),Me=r(ke," from the terminal to see the updated page with the scroller removed."),ke.forEach(s),J=a(p,"P",{});var Gt=o(J);Be=r(Gt,"Now go to the top of the google doc and change out the Hed, Dek, Kicker etc to be the same as the Kabul page:"),Gt.forEach(s),O=a(p,"IMG",{src:!0,alt:!0}),V=a(p,"P",{});var Kt=o(V);Ze=r(Kt,"Then start to edit the text. I just copy pasted the text from the story and pasted the text till the first graphic of the airport from the satellite."),Kt.forEach(s),L=a(p,"P",{});var _t=o(L);X=a(_t,"STRONG",{});var Yt=o(X);Qe=r(Yt,"NOTE"),Yt.forEach(s),Je=r(_t,": You will face an issue where the text you paste into the doc will show up as not having the paragraphs and appear as one big chunk. To fix that, just hit the enter key after each paragraph."),_t.forEach(s),C=a(p,"P",{});var yt=o(C);Ve=r(yt,"Now we come to the first graphic. Download the file called \u201Cblast_site.ai\u201D from the Dropbox and put it in your project-files folder. Then run the ai2svelte script froom Illustrator. If you\u2019re unsure of how to do that, check the "),y=a(yt,"A",{href:!0,rel:!0});var Mt=o(y);Xe=r(Mt,"ai docs"),Mt.forEach(s),yt.forEach(s),$=a(p,"P",{});var Bt=o($);$e=r(Bt,"Run the ai2svelte script for all other ai files as well."),Bt.forEach(s),U=a(p,"P",{});var Zt=o(U);Ue=r(Zt,"Once you have the story text and ai2html blocks inserted (refer to my google doc for how to do that), we can take a look at how to put the header graphic and also how to limig the size of all the graphics to a sane width."),Zt.forEach(s),ee=a(p,"P",{});var Qt=o(ee);et=r(Qt,"Let\u2019s get the sizing out of the way first: What I\u2019ve done is set a max-width of 1250px on all ai graphics, except the one in the header, which has the id \u201Clocator_airport\u201D."),Qt.forEach(s),te=a(p,"P",{});var Jt=o(te);tt=r(Jt,"So we can do the same in our main.scss:"),Jt.forEach(s),H=a(p,"PRE",{class:!0});var ua=o(H);ua.forEach(s),E=a(p,"P",{});var me=o(E);at=r(me,"Now, for the header graphic, we\u2019ll have to edit the "),ae=a(me,"CODE",{});var Vt=o(ae);st=r(Vt,"Page.svelte"),Vt.forEach(s),ot=r(me," (what we\u2019ve been editing till now!) file in the place where it adds our headline:"),me.forEach(s),q=a(p,"PRE",{class:!0});var da=o(q);da.forEach(s),b=a(p,"P",{});var ve=o(b);nt=r(ve,"We\u2019ll have to manually add in an ai2svelte component like so, just above the "),se=a(ve,"CODE",{});var Xt=o(se);rt=r(Xt,"<Headline />"),Xt.forEach(s),lt=r(ve," component:"),ve.forEach(s),D=a(p,"PRE",{class:!0});var fa=o(D);fa.forEach(s),oe=a(p,"P",{});var $t=o(oe);pt=r($t,"And.. that\u2019s it!"),$t.forEach(s),ne=a(p,"P",{});var Ut=o(ne);ct=r(Ut,"We\u2019ve successfully migrated an old project to the new rig, without too much of a hassle. To sum up, here\u2019s the key things to keep in mind when creating a project in the new rig as a newbie:"),Ut.forEach(s),h=a(p,"OL",{});var z=o(h);re=a(z,"LI",{});var ea=o(re);le=a(ea,"P",{});var ta=o(le);it=r(ta,"For your first few projects, try to draw boxes around what you think the \u201Ccomponents\u201D of the page are. Once you get clarity on that, writing code will be easier. Remember: syntax is useless jargon, hence unimportant. What\u2019s important is that you can \u201Cthink in components\u201D."),ta.forEach(s),ea.forEach(s),ht=de(z),pe=a(z,"LI",{});var aa=o(pe);F=a(aa,"P",{});var Et=o(F);ut=r(Et,"ai2html settings have to be changed as in the docs "),j=a(Et,"A",{href:!0,rel:!0});var sa=o(j);dt=r(sa,"here"),sa.forEach(s),Et.forEach(s),aa.forEach(s),ft=de(z),ce=a(z,"LI",{});var oa=o(ce);ie=a(oa,"P",{});var na=o(ie);gt=r(na,"The default new doc has stuff that you might not need, so feel free to remove things from it. But perhaps move it all below to the end after the \u201C:ignore\u201D tag."),na.forEach(s),oa.forEach(s),z.forEach(s),p.forEach(s),this.h()},h(){c(u,"href","https://graphics.reuters.com/AFGHANISTAN-CONFLICT/zjvqkkdqzvx/"),c(u,"rel","nofollow"),c(d,"class","heading-link"),c(d,"href","#prequisites"),c(I,"id","prequisites"),c(f,"href","https://www.dropbox.com/work/GRAPHICS%20all%20Staff/Scarr%2C%20Simon/Kabul%20blasts/new-rig-version/"),c(f,"rel","nofollow"),c(k,"href","https://docs.google.com/document/d/1V8dr9bO8ZDbePOZDzYNYPwZnmk7oSSlyhwKftJzmwXI/edit"),c(k,"rel","nofollow"),c(m,"href","https://github.com/reuters-graphics/kabul-blast-new-rig"),c(m,"rel","nofollow"),ra(N.src,jt=la("images/illos/kabul-components.jpg"))||c(N,"src",jt),c(N,"alt","Kabul page's components"),c(v,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/quickstart"),c(v,"rel","nofollow"),ra(O.src,xt=la("images/illos/kabul-hed-edit.jpg"))||c(O,"src",xt),c(O,"alt","Edit the google doc for the Kabul page"),c(y,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(y,"rel","nofollow"),c(H,"class","language-scss"),c(q,"class","language-svelte"),c(D,"class","language-svelte"),c(j,"href","https://reuters-graphics.github.io/docs_graphics-kit/for_developers/ai"),c(j,"rel","nofollow"),c(l,"class","wide")},m(he,p){va(he,l,p),e(l,R),e(R,we),e(l,P),e(P,_e),e(P,u),e(u,ye),e(l,Ee),e(l,I),e(I,d),e(d,be),e(l,i),e(i,W),e(W,T),e(T,je),e(T,f),e(f,xe),e(i,Pe),e(i,G),e(G,g),e(g,Ie),e(g,k),e(k,Te),e(g,Ae),e(i,Ne),e(i,K),e(K,A),e(A,Se),e(A,m),e(m,Oe),e(i,Le),e(l,Ce),e(l,Y),e(Y,He),e(l,N),e(l,S),e(S,qe),e(S,v),e(v,De),e(l,M),e(M,Fe),e(l,w),e(w,ze),e(w,B),e(B,Re),e(w,We),e(l,Z),e(Z,Ge),e(l,_),e(_,Ke),e(_,Q),e(Q,Ye),e(_,Me),e(l,J),e(J,Be),e(l,O),e(l,V),e(V,Ze),e(l,L),e(L,X),e(X,Qe),e(L,Je),e(l,C),e(C,Ve),e(C,y),e(y,Xe),e(l,$),e($,$e),e(l,U),e(U,Ue),e(l,ee),e(ee,et),e(l,te),e(te,tt),e(l,H),H.innerHTML=ca,e(l,E),e(E,at),e(E,ae),e(ae,st),e(E,ot),e(l,q),q.innerHTML=ia,e(l,b),e(b,nt),e(b,se),e(se,rt),e(b,lt),e(l,D),D.innerHTML=ha,e(l,oe),e(oe,pt),e(l,ne),e(ne,ct),e(l,h),e(h,re),e(re,le),e(le,it),e(h,ht),e(h,pe),e(pe,F),e(F,ut),e(F,j),e(j,dt),e(h,ft),e(h,ce),e(ce,ie),e(ie,gt)},p:bt,i:bt,o:bt,d(he){he&&s(l)}}}const ya={published:!0,title:"Migrating an old rig project to the new rig",order:8};class Ea extends ga{constructor(l){super();ka(this,l,null,wa,ma,{})}}export{Ea as default,ya as metadata};
