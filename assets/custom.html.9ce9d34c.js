import{r as o,o as c,c as l,a as e,b as t,F as r,d as s,e as a}from"./app.2d01ef46.js";import{_ as i,a as p,b as d,c as u,d as h}from"./customQueryCalendar.5ab3658e.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const m={},b=e("h1",{id:"common-custom-calendar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#common-custom-calendar","aria-hidden":"true"},"#"),s(" Common custom calendar")],-1),k=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"Common custom calendar is a calendar that collects events based on query and displays them on the calendar.")],-1),g=e("p",null,"When we create a custom calendar, the behavior is the same as the default journal calendar, but the search scope is the page specified by the custom calendar ID.",-1),f=e("blockquote",null,[e("p",null,"The query of all calendars is open and modifiable, and you can customize it according to your needs.")],-1),y=e("p",null,"So how to create a custom calendar?",-1),q=s("Click the add calendar button, and fill in the calendar name, and edit "),v={href:"https://logseq.github.io/#/page/Queries",target:"_blank",rel:"noopener noreferrer"},w=s("query"),x=s("."),Q=s("The plugin will call "),T={href:"https://logseq.github.io/plugins/interfaces/IDBProxy.html#datascriptQuery",target:"_blank",rel:"noopener noreferrer"},I=s("logseq.DB.datascriptQuery"),B=s(" or "),D={href:"https://logseq.github.io/plugins/interfaces/IDBProxy.html#q",target:"_blank",rel:"noopener noreferrer"},C=s("logseq.DB.q"),A=s(" API with the query you specified. and the result will be displayed in the calendar."),S=e("p",null,"Let me explain what the configuration items are:",-1),j=e("li",null,[e("code",null,"script"),s(": As a parameter to datascriptQuery, query all block that meets the requirements.")],-1),E=e("code",null,"query type",-1),N=s(": The type of query, can be "),P={href:"https://logseq.github.io/#/page/Queries",target:"_blank",rel:"noopener noreferrer"},V=s("Simple Query"),L=s(" or "),U={href:"https://logseq.github.io/#/page/AdvancedQueries",target:"_blank",rel:"noopener noreferrer"},W=s("Advanced Query"),F=s("."),z=e("li",null,[e("code",null,"schedule start"),s(": Take the field specified by "),e("code",null,"schedule start"),s(" from the block of the datascriptQuery query as the event start time.")],-1),G=e("li",null,[e("code",null,"schedule end"),s(": Take the field specified by "),e("code",null,"schedule end"),s(" from the block of the datascriptQuery query as the event end time.")],-1),H=e("code",null,"date formatter",-1),J=s(": The date formatter. Use this as "),K={href:"https://date-fns.org/v2.28.0/docs/parse",target:"_blank",rel:"noopener noreferrer"},M=s("date-fns"),O=s(" parameter to convert "),R=e("code",null,"schedule start",-1),X=s(),Y=e("code",null,"schedule end",-1),Z=s(" to an available date."),$=e("li",null,[e("code",null,"is milestone"),s(": Whether the block is a milestone. If it is, the block will be displayed in the calendar as a milestone.")],-1),ee=a('<p>If you don&#39;t konw how to fill <code>schedule start</code> <code>schedule end</code>, you can open DevTools and click the play button:</p><p><img src="'+p+'" alt="queryDebug"></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example:</h2><p>Currently we have a test-agenda note:</p><p>where the custom calendar demo has the <code>start</code> <code>end</code> attribute, we want it to be displayed in the calendar and the common text is not.</p><p><img src="'+d+'" alt="test-agenda"></p>',6),se={id:"use-simple-query",tabindex:"-1"},ne=e("a",{class:"header-anchor",href:"#use-simple-query","aria-hidden":"true"},"#",-1),te=s(" Use "),ae={href:"https://logseq.github.io/#/page/Queries",target:"_blank",rel:"noopener noreferrer"},oe=s("Simple Query"),ce=e("p",null,"We use the following query script to query the block located in the test-agenda page:",-1),le=e("p",null,[e("code",null,'(and (page "test-agenda") (property end) (property start))')],-1),re=e("p",null,[e("img",{src:i,alt:"customQuerySimple"})],-1),ie={id:"use-advanced-query",tabindex:"-1"},pe=e("a",{class:"header-anchor",href:"#use-advanced-query","aria-hidden":"true"},"#",-1),de=s(" Use "),ue={href:"https://logseq.github.io/#/page/advanced%20queries",target:"_blank",rel:"noopener noreferrer"},he=s("Advanced Query"),_e=a(`<p>If you want to use the advanced query, you can use the following script:</p><div class="language-clojure ext-clojure line-numbers-mode"><pre class="language-clojure"><code><span class="token punctuation">[</span><span class="token symbol">:find</span> <span class="token punctuation">(</span><span class="token function">pull</span> ?block <span class="token punctuation">[</span>*<span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token symbol">:where</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/properties</span> ?p<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">get</span> ?p <span class="token symbol">:start</span><span class="token punctuation">)</span> ?s<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">get</span> ?p <span class="token symbol">:end</span><span class="token punctuation">)</span> ?e<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?page <span class="token symbol">:block/name</span> ?pname<span class="token punctuation">]</span>
  <span class="token punctuation">[</span>?block <span class="token symbol">:block/page</span> ?page<span class="token punctuation">]</span>
  <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">contains?</span> <span class="token operator">#</span><span class="token punctuation">{</span><span class="token string">&quot;test-agenda&quot;</span><span class="token punctuation">}</span> ?pname<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The complete configuration is as follows:</p><p><img src="`+u+'" alt="customQuery"></p><p>The above two methods are equivalent .The following will appear:</p><p><img src="'+h+'" alt="customCalendar"></p>',6);function me(be,ke){const n=o("ExternalLinkIcon");return c(),l(r,null,[b,k,g,f,y,e("p",null,[q,e("a",v,[w,t(n)]),x]),e("p",null,[Q,e("a",T,[I,t(n)]),B,e("a",D,[C,t(n)]),A]),S,e("ol",null,[j,e("li",null,[E,N,e("a",P,[V,t(n)]),L,e("a",U,[W,t(n)]),F]),z,G,e("li",null,[H,J,e("a",K,[M,t(n)]),O,R,X,Y,Z]),$]),ee,e("h3",se,[ne,te,e("a",ae,[oe,t(n)])]),ce,le,re,e("h3",ie,[pe,de,e("a",ue,[he,t(n)])]),_e],64)}var qe=_(m,[["render",me]]);export{qe as default};
