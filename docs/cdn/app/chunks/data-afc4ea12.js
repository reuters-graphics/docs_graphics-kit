import{S as ie,i as ue,s as de,e as n,t as o,k as la,c as s,a as e,g as p,d as t,n as ia,b as l,f as he,I as a,V as Mn}from"./vendor-32a43119.js";function ke(Vs){let c,D,A,et,ua,ot,i,da,I,pt,ct,ha,x,rt,lt,T,N,it,ka,fa,O,ut,dt,ya,H,ht,kt,ma,R,ft,yt,L,W,mt,d,gt,ga,vt,wt,va,bt,Et,wa,_t,M,ba,jt,Pt,Ea,St,f,_a,Dt,At,ja,It,xt,y,Tt,m,Nt,Ot,Pa,Ht,C,h,Rt,Sa,Lt,Wt,g,Mt,Ct,Gt,G,q,qt,Da,Jt,Aa,Bt,J,B,Ft,Ia,Ut,xa,Ta,Yt,Na,Vt,Oa,$t,Ha,zt,F,$s=`<code class="language-undefined">src/
  lib/
    my-chart/
      index.svelte
      data.json \u{1F448}
    Page.svelte</code>`,Ra,Kt,U,zs=`<code class="language-svelte"><span class="token comment">&lt;!-- mychart/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> data <span class="token keyword">from</span> <span class="token string">'./data.json'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">data </span><span class="token keyword">as</span> <span class="token language-javascript">d<span class="token punctuation">&#125;</span></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name"><span class="token namespace">style="width:</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>d<span class="token punctuation">.</span>value<span class="token punctuation">&#125;</span></span><span class="token attr-name">%;</span> <span class="token attr-name"><span class="token namespace">background:</span></span> <span class="token language-javascript"><span class="token punctuation">&#123;</span>d<span class="token punctuation">.</span>colour<span class="token punctuation">&#125;</span></span><span class="token attr-name">;"</span><span class="token punctuation">></span></span><span class="token language-javascript"><span class="token punctuation">&#123;</span>d<span class="token punctuation">.</span>name<span class="token punctuation">&#125;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span></code>`,Y,V,Qt,v,Xt,w,Zt,an,b,tn,La,nn,sn,$,Ks=`<code class="language-svelte"><span class="token comment">&lt;!-- \u{1F447} Add this script tag. Note the context="module"! --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">context</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Export an async load function</span>
  <span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">&#123;</span> fetch <span class="token punctuation">&#125;</span></span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">https://graphics.reuters.com/path/to/my.json</span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
        props<span class="token operator">:</span> <span class="token punctuation">&#123;</span>
          myData<span class="token operator">:</span> <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span>

    <span class="token comment">// Oops!</span>
    <span class="token keyword">return</span> <span class="token punctuation">&#123;</span>
      status<span class="token operator">:</span> res<span class="token punctuation">.</span>status<span class="token punctuation">,</span>
      error<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">&#96;</span><span class="token string">Could not load </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$&#123;</span>url<span class="token interpolation-punctuation punctuation">&#125;</span></span><span class="token template-punctuation string">&#96;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- pages/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Page <span class="token keyword">from</span> <span class="token string">'$lib/Page.svelte'</span><span class="token punctuation">;</span>
  <span class="token comment">// ...</span>

  <span class="token comment">// \u{1F447} Define a prop for this data</span>
  <span class="token keyword">export</span> <span class="token keyword">let</span> myData<span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- \u{1F447} Pass our data to the Page component, which can in turn pass it
to any other components that need this data! --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Page</span> <span class="token attr-name">myData="</span><span class="token language-javascript"><span class="token punctuation">&#123;</span>myData<span class="token punctuation">&#125;</span></span><span class="token attr-name">"</span> <span class="token punctuation">/></span></span></code>`,z,K,en,E,on,_,pn,cn,Wa,rn,Q,Qs=`<code class="language-svelte"><span class="token comment">&lt;!-- mychart/index.svelte --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Create a variable for your data...</span>
  <span class="token keyword">let</span> myData<span class="token punctuation">;</span>

  <span class="token comment">// ... and an async function to get it...</span>
  <span class="token keyword">const</span> <span class="token function-variable function">fetchMyData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
      <span class="token string">'http://graphics.thomsonreuters.com/data/2021/biden-approval-tracker/approval.json'</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myData <span class="token operator">=</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

  <span class="token comment">// ... then call that function!</span>
  <span class="token function">fetchMyData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token language-javascript"><span class="token punctuation">&#123;</span>#<span class="token keyword">if</span> myData<span class="token punctuation">&#125;</span></span>
  <span class="token comment">&lt;!-- Do something with your data once it's been fetched! --></span>
<span class="token language-javascript"><span class="token punctuation">&#123;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token punctuation">&#125;</span></span></code>`,X,Ma,ln,un,Z,aa,dn,j,hn,Ca,kn,fn,Ga,yn,P,mn,qa,gn,vn,S,wn,Ja,bn,En,ta,Xs=`<code class="language-bash">bin/
  scrapeData.cjs</code>`,Ba,_n,na,Zs=`<code class="language-javascript"><span class="token keyword">const</span> axios <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'axios'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetchData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'https://some.api'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> resp<span class="token punctuation">.</span>data<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">filterData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> data<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=></span> d<span class="token punctuation">.</span>active<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">writeData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> outputPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'src/lib/mychart/data.json'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>outputPath<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringfy</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">getData</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> rawData <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> filteredData <span class="token operator">=</span> <span class="token function">filterData</span><span class="token punctuation">(</span>rawData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">writeData</span><span class="token punctuation">(</span>filteredData<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">;</span></code>`,Fa,jn,sa,ae='<code class="language-bash">node ./bin/scrapeData.cjs</code>',ea,Ua,Pn,Sn,k,Dn,Ya,An,In,Va,xn,Tn,oa,te=`<code class="language-json"><span class="token punctuation">&#123;</span>
  <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token property">"upload"</span><span class="token operator">:</span> <span class="token string">"node ./bin/scrapeData.cjs &amp;&amp; npm-run-all publish:upload"</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,$a,Nn;return{c(){c=n("section"),D=n("h1"),A=n("a"),et=o("Working with data"),ua=n("p"),ot=o("Data drives pages. This guide outlines how to work with different types of data, depending on the role your data plays in your project."),i=n("ul"),da=n("li"),I=n("a"),pt=o("Static vs. dynamic data"),ct=la(),ha=n("li"),x=n("a"),rt=o("Data file types"),lt=la(),T=n("li"),N=n("a"),it=o("Where to put your static data"),ka=n("ul"),fa=n("li"),O=n("a"),ut=o("Remote static data"),dt=la(),ya=n("li"),H=n("a"),ht=o("Fetching dynamic data"),kt=la(),ma=n("li"),R=n("a"),ft=o("Preparing static data"),yt=la(),L=n("h2"),W=n("a"),mt=o("Static vs. dynamic data"),d=n("p"),gt=o("The first question you should ask about your data is: Is my data "),ga=n("em"),vt=o("static"),wt=o(" or "),va=n("em"),bt=o("dynamic"),Et=o("?"),wa=n("p"),_t=o("What do we mean?"),M=n("p"),ba=n("strong"),jt=o("Static data"),Pt=o(" is data that isn\u2019t going to change beyond the point you publish your project. The text you pull into your project from a Google doc is an example of this kind of data. That text may change while you\u2019re developing the project (getting it edited, etc.), but once you publish, it\u2019s locked in, and any changes to the data from there will mean you need to republish the project."),Ea=n("p"),St=o("This is the main type of data we\u2019ll talk about working with."),f=n("p"),_a=n("strong"),Dt=o("Dynamic data"),At=o(" is data that you expect "),ja=n("em"),It=o("will change"),xt=o(" after you publish your project. Tracking projects often use this type of data and fetch it on page load to make sure readers see the latest data on the page."),y=n("p"),Tt=o("In general, dynamic data often is published separately from the project you\u2019re working on. See our "),m=n("a"),Nt=o("GitHub scraper bluprint"),Ot=o(" for an example of setting up a scraper that can independently publish data on a timer that your project can then fetch."),Pa=n("p"),Ht=o("We won\u2019t talk as much about this type of data."),C=n("blockquote"),h=n("p"),Rt=o("It\u2019s worth noting one alternative pattern we "),Sa=n("em"),Lt=o("do"),Wt=o(" use for tracking projects using dynamic data. We can setup a project to re-publish from GitHub on a schedule or through an API as data updates. That lets us treat dynamic data as though it were static. Read more about that setup in the "),g=n("a"),Mt=o("Automated publishing"),Ct=o(" doc."),Gt=la(),G=n("h2"),q=n("a"),qt=o("Data file types"),Da=n("p"),Jt=o("A quick note on data file types. We\u2019re not going to cover using data in delimited file formats, e.g., TSV, CSV, or the like."),Aa=n("p"),Bt=o("In general, we recommend converting your data to JSON, we\u2019ll talk more about why and how to convert it if your source data comes in one of those formats."),J=n("h2"),B=n("a"),Ft=o("Where to put your static data"),Ia=n("p"),Ut=o("You might be tempted to put static data with other media files like images or fonts and then fetch them in your code\u2026"),xa=n("p"),Ta=n("strong"),Yt=o("But don\u2019t!"),Na=n("p"),Vt=o("If your data is indeed static, then it\u2019s actually far better to import your data directly into your components because the content that data makes can then be baked out into the page when we build it, which means faster load times and better for accessibility and SEO."),Oa=n("p"),$t=o("Because we\u2019re going to import our data just like a component, we can treat it like code and put it right next to the component that uses it."),Ha=n("p"),zt=o("Say we have data for a chart, we might have a directly structure like this:"),F=n("pre"),Ra=n("p"),Kt=o("Now you can import your data just like a regular module in the component that uses it:"),U=n("pre"),Y=n("h3"),V=n("a"),Qt=o("What if my static data lives somewhere else?"),v=n("p"),Xt=o("If your static data lives somewhere other than in your project, then you can use Sveltekit\u2019s built-in "),w=n("a"),Zt=o("load"),an=o(" function to import your data and then pass it to the components that need it through props."),b=n("p"),tn=o("To do that, we\u2019re going to go to the component in the "),La=n("code"),nn=o("pages/"),sn=o(" directory that defines the page that needs the data and export a load function that returns the data in a props object we can then pass to any components that need it:"),$=n("pre"),z=n("h2"),K=n("a"),en=o("Fetching dynamic data"),E=n("p"),on=o("If your data is dynamic, you can use the "),_=n("a"),pn=o("fetch API"),cn=o(" to get it."),Wa=n("p"),rn=o("Here\u2019s an example:"),Q=n("pre"),X=n("p"),Ma=n("strong"),ln=o("Remember"),un=o(", because we have to wait for the async function to fetch your data, any content made from this data won\u2019t be baked out into the page. That means your component will be slower to load and not as accessible or SEO friendly. If your data is static, use one of the patterns above. If not, then that slowness is the cost of keeping your page up-to-date."),Z=n("h2"),aa=n("a"),dn=o("Preparing static data"),j=n("p"),hn=o("So what if you need to "),Ca=n("em"),kn=o("prepare"),fn=o(" your static data? Say, you need to fetch it from an API or filter it down to just the data you need on the page or otherwise convert it from another format to JSON."),Ga=n("p"),yn=o("Your best bet is to write a simple script in Node to do what you need and save the resulting JSON in your project."),P=n("p"),mn=o("A good place to put such scripts is the "),qa=n("code"),gn=o("bin/"),vn=o(" folder in your project."),S=n("p"),wn=o("So let\u2019s go through an example. Make a "),Ja=n("code"),bn=o(".cjs"),En=o(" file (for CommonJS Node script) in your bin directory:"),ta=n("pre"),Ba=n("p"),_n=o("\u2026 And let\u2019s say that script calls a simple API and parses the data."),na=n("pre"),Fa=n("p"),jn=o("Now you can call that file from the command line with:"),sa=n("pre"),ea=n("p"),Ua=n("strong"),Pn=o("BONUS"),Sn=o(": Let\u2019s say you want your script to run and refresh your data everytime before you publish."),k=n("p"),Dn=o("You can add it to the front of the "),Ya=n("code"),An=o("upload"),In=o(" script in "),Va=n("code"),xn=o("package.json"),Tn=o(" like this:"),oa=n("pre"),$a=n("p"),Nn=o("Now your script will refresh your data everytime before you upload your page to the RNGS server."),this.h()},l(za){c=s(za,"SECTION",{class:!0});var r=e(c);D=s(r,"H1",{id:!0});var Cn=e(D);A=s(Cn,"A",{href:!0});var Gn=e(A);et=p(Gn,"Working with data"),Gn.forEach(t),Cn.forEach(t),ua=s(r,"P",{});var qn=e(ua);ot=p(qn,"Data drives pages. This guide outlines how to work with different types of data, depending on the role your data plays in your project."),qn.forEach(t),i=s(r,"UL",{});var u=e(i);da=s(u,"LI",{});var Jn=e(da);I=s(Jn,"A",{href:!0});var Bn=e(I);pt=p(Bn,"Static vs. dynamic data"),Bn.forEach(t),Jn.forEach(t),ct=ia(u),ha=s(u,"LI",{});var Fn=e(ha);x=s(Fn,"A",{href:!0});var Un=e(x);rt=p(Un,"Data file types"),Un.forEach(t),Fn.forEach(t),lt=ia(u),T=s(u,"LI",{});var On=e(T);N=s(On,"A",{href:!0});var Yn=e(N);it=p(Yn,"Where to put your static data"),Yn.forEach(t),ka=s(On,"UL",{});var Vn=e(ka);fa=s(Vn,"LI",{});var $n=e(fa);O=s($n,"A",{href:!0});var zn=e(O);ut=p(zn,"Remote static data"),zn.forEach(t),$n.forEach(t),Vn.forEach(t),On.forEach(t),dt=ia(u),ya=s(u,"LI",{});var Kn=e(ya);H=s(Kn,"A",{href:!0});var Qn=e(H);ht=p(Qn,"Fetching dynamic data"),Qn.forEach(t),Kn.forEach(t),kt=ia(u),ma=s(u,"LI",{});var Xn=e(ma);R=s(Xn,"A",{href:!0});var Zn=e(R);ft=p(Zn,"Preparing static data"),Zn.forEach(t),Xn.forEach(t),yt=ia(u),u.forEach(t),L=s(r,"H2",{id:!0});var as=e(L);W=s(as,"A",{href:!0});var ts=e(W);mt=p(ts,"Static vs. dynamic data"),ts.forEach(t),as.forEach(t),d=s(r,"P",{});var pa=e(d);gt=p(pa,"The first question you should ask about your data is: Is my data "),ga=s(pa,"EM",{});var ns=e(ga);vt=p(ns,"static"),ns.forEach(t),wt=p(pa," or "),va=s(pa,"EM",{});var ss=e(va);bt=p(ss,"dynamic"),ss.forEach(t),Et=p(pa,"?"),pa.forEach(t),wa=s(r,"P",{});var es=e(wa);_t=p(es,"What do we mean?"),es.forEach(t),M=s(r,"P",{});var Hn=e(M);ba=s(Hn,"STRONG",{});var os=e(ba);jt=p(os,"Static data"),os.forEach(t),Pt=p(Hn," is data that isn\u2019t going to change beyond the point you publish your project. The text you pull into your project from a Google doc is an example of this kind of data. That text may change while you\u2019re developing the project (getting it edited, etc.), but once you publish, it\u2019s locked in, and any changes to the data from there will mean you need to republish the project."),Hn.forEach(t),Ea=s(r,"P",{});var ps=e(Ea);St=p(ps,"This is the main type of data we\u2019ll talk about working with."),ps.forEach(t),f=s(r,"P",{});var Ka=e(f);_a=s(Ka,"STRONG",{});var cs=e(_a);Dt=p(cs,"Dynamic data"),cs.forEach(t),At=p(Ka," is data that you expect "),ja=s(Ka,"EM",{});var rs=e(ja);It=p(rs,"will change"),rs.forEach(t),xt=p(Ka," after you publish your project. Tracking projects often use this type of data and fetch it on page load to make sure readers see the latest data on the page."),Ka.forEach(t),y=s(r,"P",{});var Qa=e(y);Tt=p(Qa,"In general, dynamic data often is published separately from the project you\u2019re working on. See our "),m=s(Qa,"A",{href:!0,rel:!0});var ls=e(m);Nt=p(ls,"GitHub scraper bluprint"),ls.forEach(t),Ot=p(Qa," for an example of setting up a scraper that can independently publish data on a timer that your project can then fetch."),Qa.forEach(t),Pa=s(r,"P",{});var is=e(Pa);Ht=p(is,"We won\u2019t talk as much about this type of data."),is.forEach(t),C=s(r,"BLOCKQUOTE",{});var Rn=e(C);h=s(Rn,"P",{});var ca=e(h);Rt=p(ca,"It\u2019s worth noting one alternative pattern we "),Sa=s(ca,"EM",{});var us=e(Sa);Lt=p(us,"do"),us.forEach(t),Wt=p(ca," use for tracking projects using dynamic data. We can setup a project to re-publish from GitHub on a schedule or through an API as data updates. That lets us treat dynamic data as though it were static. Read more about that setup in the "),g=s(ca,"A",{href:!0,rel:!0});var ds=e(g);Mt=p(ds,"Automated publishing"),ds.forEach(t),Ct=p(ca," doc."),ca.forEach(t),Gt=ia(Rn),Rn.forEach(t),G=s(r,"H2",{id:!0});var hs=e(G);q=s(hs,"A",{href:!0});var ks=e(q);qt=p(ks,"Data file types"),ks.forEach(t),hs.forEach(t),Da=s(r,"P",{});var fs=e(Da);Jt=p(fs,"A quick note on data file types. We\u2019re not going to cover using data in delimited file formats, e.g., TSV, CSV, or the like."),fs.forEach(t),Aa=s(r,"P",{});var ys=e(Aa);Bt=p(ys,"In general, we recommend converting your data to JSON, we\u2019ll talk more about why and how to convert it if your source data comes in one of those formats."),ys.forEach(t),J=s(r,"H2",{id:!0});var ms=e(J);B=s(ms,"A",{href:!0});var gs=e(B);Ft=p(gs,"Where to put your static data"),gs.forEach(t),ms.forEach(t),Ia=s(r,"P",{});var vs=e(Ia);Ut=p(vs,"You might be tempted to put static data with other media files like images or fonts and then fetch them in your code\u2026"),vs.forEach(t),xa=s(r,"P",{});var ws=e(xa);Ta=s(ws,"STRONG",{});var bs=e(Ta);Yt=p(bs,"But don\u2019t!"),bs.forEach(t),ws.forEach(t),Na=s(r,"P",{});var Es=e(Na);Vt=p(Es,"If your data is indeed static, then it\u2019s actually far better to import your data directly into your components because the content that data makes can then be baked out into the page when we build it, which means faster load times and better for accessibility and SEO."),Es.forEach(t),Oa=s(r,"P",{});var _s=e(Oa);$t=p(_s,"Because we\u2019re going to import our data just like a component, we can treat it like code and put it right next to the component that uses it."),_s.forEach(t),Ha=s(r,"P",{});var js=e(Ha);zt=p(js,"Say we have data for a chart, we might have a directly structure like this:"),js.forEach(t),F=s(r,"PRE",{class:!0});var ne=e(F);ne.forEach(t),Ra=s(r,"P",{});var Ps=e(Ra);Kt=p(Ps,"Now you can import your data just like a regular module in the component that uses it:"),Ps.forEach(t),U=s(r,"PRE",{class:!0});var se=e(U);se.forEach(t),Y=s(r,"H3",{id:!0});var Ss=e(Y);V=s(Ss,"A",{href:!0});var Ds=e(V);Qt=p(Ds,"What if my static data lives somewhere else?"),Ds.forEach(t),Ss.forEach(t),v=s(r,"P",{});var Xa=e(v);Xt=p(Xa,"If your static data lives somewhere other than in your project, then you can use Sveltekit\u2019s built-in "),w=s(Xa,"A",{href:!0,rel:!0});var As=e(w);Zt=p(As,"load"),As.forEach(t),an=p(Xa," function to import your data and then pass it to the components that need it through props."),Xa.forEach(t),b=s(r,"P",{});var Za=e(b);tn=p(Za,"To do that, we\u2019re going to go to the component in the "),La=s(Za,"CODE",{});var Is=e(La);nn=p(Is,"pages/"),Is.forEach(t),sn=p(Za," directory that defines the page that needs the data and export a load function that returns the data in a props object we can then pass to any components that need it:"),Za.forEach(t),$=s(r,"PRE",{class:!0});var ee=e($);ee.forEach(t),z=s(r,"H2",{id:!0});var xs=e(z);K=s(xs,"A",{href:!0});var Ts=e(K);en=p(Ts,"Fetching dynamic data"),Ts.forEach(t),xs.forEach(t),E=s(r,"P",{});var at=e(E);on=p(at,"If your data is dynamic, you can use the "),_=s(at,"A",{href:!0,rel:!0});var Ns=e(_);pn=p(Ns,"fetch API"),Ns.forEach(t),cn=p(at," to get it."),at.forEach(t),Wa=s(r,"P",{});var Os=e(Wa);rn=p(Os,"Here\u2019s an example:"),Os.forEach(t),Q=s(r,"PRE",{class:!0});var oe=e(Q);oe.forEach(t),X=s(r,"P",{});var Ln=e(X);Ma=s(Ln,"STRONG",{});var Hs=e(Ma);ln=p(Hs,"Remember"),Hs.forEach(t),un=p(Ln,", because we have to wait for the async function to fetch your data, any content made from this data won\u2019t be baked out into the page. That means your component will be slower to load and not as accessible or SEO friendly. If your data is static, use one of the patterns above. If not, then that slowness is the cost of keeping your page up-to-date."),Ln.forEach(t),Z=s(r,"H2",{id:!0});var Rs=e(Z);aa=s(Rs,"A",{href:!0});var Ls=e(aa);dn=p(Ls,"Preparing static data"),Ls.forEach(t),Rs.forEach(t),j=s(r,"P",{});var tt=e(j);hn=p(tt,"So what if you need to "),Ca=s(tt,"EM",{});var Ws=e(Ca);kn=p(Ws,"prepare"),Ws.forEach(t),fn=p(tt," your static data? Say, you need to fetch it from an API or filter it down to just the data you need on the page or otherwise convert it from another format to JSON."),tt.forEach(t),Ga=s(r,"P",{});var Ms=e(Ga);yn=p(Ms,"Your best bet is to write a simple script in Node to do what you need and save the resulting JSON in your project."),Ms.forEach(t),P=s(r,"P",{});var nt=e(P);mn=p(nt,"A good place to put such scripts is the "),qa=s(nt,"CODE",{});var Cs=e(qa);gn=p(Cs,"bin/"),Cs.forEach(t),vn=p(nt," folder in your project."),nt.forEach(t),S=s(r,"P",{});var st=e(S);wn=p(st,"So let\u2019s go through an example. Make a "),Ja=s(st,"CODE",{});var Gs=e(Ja);bn=p(Gs,".cjs"),Gs.forEach(t),En=p(st," file (for CommonJS Node script) in your bin directory:"),st.forEach(t),ta=s(r,"PRE",{class:!0});var pe=e(ta);pe.forEach(t),Ba=s(r,"P",{});var qs=e(Ba);_n=p(qs,"\u2026 And let\u2019s say that script calls a simple API and parses the data."),qs.forEach(t),na=s(r,"PRE",{class:!0});var ce=e(na);ce.forEach(t),Fa=s(r,"P",{});var Js=e(Fa);jn=p(Js,"Now you can call that file from the command line with:"),Js.forEach(t),sa=s(r,"PRE",{class:!0});var re=e(sa);re.forEach(t),ea=s(r,"P",{});var Wn=e(ea);Ua=s(Wn,"STRONG",{});var Bs=e(Ua);Pn=p(Bs,"BONUS"),Bs.forEach(t),Sn=p(Wn,": Let\u2019s say you want your script to run and refresh your data everytime before you publish."),Wn.forEach(t),k=s(r,"P",{});var ra=e(k);Dn=p(ra,"You can add it to the front of the "),Ya=s(ra,"CODE",{});var Fs=e(Ya);An=p(Fs,"upload"),Fs.forEach(t),In=p(ra," script in "),Va=s(ra,"CODE",{});var Us=e(Va);xn=p(Us,"package.json"),Us.forEach(t),Tn=p(ra," like this:"),ra.forEach(t),oa=s(r,"PRE",{class:!0});var le=e(oa);le.forEach(t),$a=s(r,"P",{});var Ys=e($a);Nn=p(Ys,"Now your script will refresh your data everytime before you upload your page to the RNGS server."),Ys.forEach(t),r.forEach(t),this.h()},h(){l(A,"href","#working-with-data"),l(D,"id","working-with-data"),l(I,"href","#static-vs-dynamic-data"),l(x,"href","#data-file-types"),l(N,"href","#where-to-put-your-static-data"),l(O,"href","#what-if-my-static-data-lives-somewhere-else"),l(H,"href","#fetching-dynamic-data"),l(R,"href","#preparing-static-data"),l(W,"href","#static-vs-dynamic-data"),l(L,"id","static-vs-dynamic-data"),l(m,"href","https://github.com/reuters-graphics/bluprint_github-action-scraper"),l(m,"rel","nofollow"),l(g,"href","https://github.com/reuters-graphics/bluprint_graphics-kit/blob/master/docs/developers/automated-publishing.md"),l(g,"rel","nofollow"),l(q,"href","#data-file-types"),l(G,"id","data-file-types"),l(B,"href","#where-to-put-your-static-data"),l(J,"id","where-to-put-your-static-data"),l(F,"class","language-undefined"),l(U,"class","language-svelte"),l(V,"href","#what-if-my-static-data-lives-somewhere-else"),l(Y,"id","what-if-my-static-data-lives-somewhere-else"),l(w,"href","https://kit.svelte.dev/docs#loading"),l(w,"rel","nofollow"),l($,"class","language-svelte"),l(K,"href","#fetching-dynamic-data"),l(z,"id","fetching-dynamic-data"),l(_,"href","https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"),l(_,"rel","nofollow"),l(Q,"class","language-svelte"),l(aa,"href","#preparing-static-data"),l(Z,"id","preparing-static-data"),l(ta,"class","language-bash"),l(na,"class","language-javascript"),l(sa,"class","language-bash"),l(oa,"class","language-json"),l(c,"class","wide")},m(za,r){he(za,c,r),a(c,D),a(D,A),a(A,et),a(c,ua),a(ua,ot),a(c,i),a(i,da),a(da,I),a(I,pt),a(i,ct),a(i,ha),a(ha,x),a(x,rt),a(i,lt),a(i,T),a(T,N),a(N,it),a(T,ka),a(ka,fa),a(fa,O),a(O,ut),a(i,dt),a(i,ya),a(ya,H),a(H,ht),a(i,kt),a(i,ma),a(ma,R),a(R,ft),a(i,yt),a(c,L),a(L,W),a(W,mt),a(c,d),a(d,gt),a(d,ga),a(ga,vt),a(d,wt),a(d,va),a(va,bt),a(d,Et),a(c,wa),a(wa,_t),a(c,M),a(M,ba),a(ba,jt),a(M,Pt),a(c,Ea),a(Ea,St),a(c,f),a(f,_a),a(_a,Dt),a(f,At),a(f,ja),a(ja,It),a(f,xt),a(c,y),a(y,Tt),a(y,m),a(m,Nt),a(y,Ot),a(c,Pa),a(Pa,Ht),a(c,C),a(C,h),a(h,Rt),a(h,Sa),a(Sa,Lt),a(h,Wt),a(h,g),a(g,Mt),a(h,Ct),a(C,Gt),a(c,G),a(G,q),a(q,qt),a(c,Da),a(Da,Jt),a(c,Aa),a(Aa,Bt),a(c,J),a(J,B),a(B,Ft),a(c,Ia),a(Ia,Ut),a(c,xa),a(xa,Ta),a(Ta,Yt),a(c,Na),a(Na,Vt),a(c,Oa),a(Oa,$t),a(c,Ha),a(Ha,zt),a(c,F),F.innerHTML=$s,a(c,Ra),a(Ra,Kt),a(c,U),U.innerHTML=zs,a(c,Y),a(Y,V),a(V,Qt),a(c,v),a(v,Xt),a(v,w),a(w,Zt),a(v,an),a(c,b),a(b,tn),a(b,La),a(La,nn),a(b,sn),a(c,$),$.innerHTML=Ks,a(c,z),a(z,K),a(K,en),a(c,E),a(E,on),a(E,_),a(_,pn),a(E,cn),a(c,Wa),a(Wa,rn),a(c,Q),Q.innerHTML=Qs,a(c,X),a(X,Ma),a(Ma,ln),a(X,un),a(c,Z),a(Z,aa),a(aa,dn),a(c,j),a(j,hn),a(j,Ca),a(Ca,kn),a(j,fn),a(c,Ga),a(Ga,yn),a(c,P),a(P,mn),a(P,qa),a(qa,gn),a(P,vn),a(c,S),a(S,wn),a(S,Ja),a(Ja,bn),a(S,En),a(c,ta),ta.innerHTML=Xs,a(c,Ba),a(Ba,_n),a(c,na),na.innerHTML=Zs,a(c,Fa),a(Fa,jn),a(c,sa),sa.innerHTML=ae,a(c,ea),a(ea,Ua),a(Ua,Pn),a(ea,Sn),a(c,k),a(k,Dn),a(k,Ya),a(Ya,An),a(k,In),a(k,Va),a(Va,xn),a(k,Tn),a(c,oa),oa.innerHTML=te,a(c,$a),a($a,Nn)},p:Mn,i:Mn,o:Mn,d(za){za&&t(c)}}}const ye={title:"Working with data",published:!0,order:10};class me extends ie{constructor(c){super();ue(this,c,null,ke,de,{})}}export{me as default,ye as metadata};
