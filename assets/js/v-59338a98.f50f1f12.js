"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4041],{8862:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-59338a98",path:"/feature/donate.html",title:"赞赏",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[{level:3,title:"扫码支付",slug:"扫码支付",children:[]},{level:3,title:"商品",slug:"商品",children:[]},{level:3,title:"赞赏列表",slug:"赞赏列表",children:[]},{level:3,title:"在线支付",slug:"在线支付",children:[]},{level:3,title:"全部配置",slug:"全部配置",children:[]}]},{level:2,title:"组件代码",slug:"组件代码",children:[]},{level:2,title:"组件使用",slug:"组件使用",children:[]},{level:2,title:"顶部图片配置",slug:"顶部图片配置",children:[]}],git:{}}},1800:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var p=a(6252);const e=(0,p._)("h1",{id:"赞赏",tabindex:"-1"},[(0,p._)("a",{class:"header-anchor",href:"#赞赏","aria-hidden":"true"},"#"),(0,p.Uk)(" 赞赏")],-1),t=(0,p._)("p",null,[(0,p.Uk)("该组件 是一个全局组件，位置"),(0,p._)("code",null,"docs/.vuepress/theme/lib/client/components/global/Donate.vue")],-1),l=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831164021528",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831164021528.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),c=(0,p.uE)('<img src="http://ooszy.cco.vin/img/blog-note/image-20210831164036678.png?x-oss-process=style/pictureProcess1" alt="image-20210831164036678" style="zoom:50%;"><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="扫码支付" tabindex="-1"><a class="header-anchor" href="#扫码支付" aria-hidden="true">#</a> 扫码支付</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164324595.png?x-oss-process=style/pictureProcess1" style="zoom:50%;"><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">donate</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">donateImg</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wxpay.png&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/zfbpay.jpg&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>推荐传入两张二维码图片，支付宝或者位置</p><h3 id="商品" tabindex="-1"><a class="header-anchor" href="#商品" aria-hidden="true">#</a> 商品</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164526261.png?x-oss-process=style/pictureProcess1" alt="image-20210831164526261" style="zoom:50%;"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>\n\n    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            <span class="token key atrule">donateProduct</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    //名字\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;奶茶&quot;</span><span class="token punctuation">,</span>\n\n                    //图片地址\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n\n                    //价格\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>\n\n                    //前缀\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;全味奶茶&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h3 id="赞赏列表" tabindex="-1"><a class="header-anchor" href="#赞赏列表" aria-hidden="true">#</a> 赞赏列表</h3><img src="http://ooszy.cco.vin/img/blog-note/image-20210831164718349.png?x-oss-process=style/pictureProcess1" alt="image-20210831164718349" style="zoom:50%;"><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>\n\n    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            //用户赞赏列表数组\n            <span class="token key atrule">donateList</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    //用户名\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;qsyyke&quot;</span><span class="token punctuation">,</span>\n\n                    //赞赏信息\n                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;文章写的非常好&quot;</span><span class="token punctuation">,</span>\n\n                    //用户头像\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n\n                    //打赏金额\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n\n                    //金额前缀\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;初尘&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;主题太棒了&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h3 id="在线支付" tabindex="-1"><a class="header-anchor" href="#在线支付" aria-hidden="true">#</a> 在线支付</h3>',13),o=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831164942581",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831164942581.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),u=(0,p.uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">donate</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">onlineList</span><span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>对于在线支付，请自行写支付接口，我并没有提供，只是提供一个布局，组件位置docs/.vuepress/theme/lib/client/components/global/Donate.vue</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://pay.cco.vin/pay/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="全部配置" tabindex="-1"><a class="header-anchor" href="#全部配置" aria-hidden="true">#</a> 全部配置</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code>module.exports = <span class="token punctuation">{</span>\n\n    <span class="token key atrule">themeConfig</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token key atrule">donate</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\n            //赞赏页面，支付二维码，推荐放置两张图片链接\n            <span class="token key atrule">donateImg</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/wxpay.png&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/zfbpay.jpg&quot;</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n            //是否在文章页面显示赞赏 默认显示\n            <span class="token key atrule">articlePage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>\n\n            //是否在关于页面显示 默认显示\n            <span class="token key atrule">aboutPage</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>\n\n            //显示在赞赏页面的信息\n            <span class="token key atrule">donateProduct</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    //名字\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;奶茶&quot;</span><span class="token punctuation">,</span>\n\n                    //图片地址\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n\n                    //价格\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">18</span><span class="token punctuation">,</span>\n\n                    //前缀\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;$&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;全味奶茶&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-note/image-20210911233612031.png?&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n\n            //是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭\n            <span class="token key atrule">onlineList</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>\n\n            //用户赞赏列表数组\n            <span class="token key atrule">donateList</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    //用户名\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;qsyyke&quot;</span><span class="token punctuation">,</span>\n\n                    //赞赏信息\n                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;文章写的非常好&quot;</span><span class="token punctuation">,</span>\n\n                    //用户头像\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n\n                    //打赏金额\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>\n\n                    //金额前缀\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;初尘&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;主题太棒了&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">img</span><span class="token punctuation">:</span> <span class="token string">&quot;https://ooszy.cco.vin/img/blog-public/nc.jpeg&quot;</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">price</span><span class="token punctuation">:</span> <span class="token number">7</span><span class="token punctuation">,</span>\n                    <span class="token key atrule">prefix</span><span class="token punctuation">:</span> <span class="token string">&quot;￥&quot;</span><span class="token punctuation">,</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br></div></div><h2 id="组件代码" tabindex="-1"><a class="header-anchor" href="#组件代码" aria-hidden="true">#</a> 组件代码</h2><p>https://github.com/vuepress-aurora/vuepress-theme-aurora/blob/master/Aurora-theme/lib/client/components/global/Donate.vue</p><h2 id="组件使用" tabindex="-1"><a class="header-anchor" href="#组件使用" aria-hidden="true">#</a> 组件使用</h2><p>此组件是一个全局组件，可以直接使用</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Donate</span><span class="token punctuation">/&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="顶部图片配置" tabindex="-1"><a class="header-anchor" href="#顶部图片配置" aria-hidden="true">#</a> 顶部图片配置</h2>',11),r=(0,p.Uk)("顶部图片配置"),i={},b=(0,a(3744).Z)(i,[["render",function(n,s){const a=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[e,t,l,c,o,u,(0,p._)("p",null,[(0,p.Wm)(a,{to:"/feature/image.html"},{default:(0,p.w5)((()=>[r])),_:1})])],64)}]])}}]);