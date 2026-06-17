---
title: "Asia Pacific Coffee Supply"
enableToc: false
---
<div class="ap">
<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@300;400&display=swap');
.ap{--bg:#17130E;--b2:#1E1913;--b3:#262019;--cr:#EDE5D6;--mu:#A99C88;--fo:#8E8474;--gd:#D8B488;--ac:#C2613A;--ms:#8FA985;--ln:rgba(237,229,214,.1);--ln2:rgba(237,229,214,.2);--ez:cubic-bezier(.16,1,.3,1);background:var(--bg);color:var(--cr);font-family:'Inter',sans-serif;font-weight:300;line-height:1.75;-webkit-font-smoothing:antialiased}
.ap *,.ap *::before,.ap *::after{margin:0;padding:0;box-sizing:border-box}
.ap ::selection{background:var(--gd);color:var(--bg)}
.ap a{color:inherit;text-decoration:none}
.ap svg{display:block}
.ap h1,.ap h2,.ap h3{font-weight:400}
.ap-bar{position:fixed;top:0;left:0;height:1.5px;width:0;background:var(--gd);z-index:100;transition:width .1s linear}
.ap-nav{position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:1rem clamp(1.2rem,4vw,2.5rem);background:rgba(23,19,14,.84);backdrop-filter:saturate(160%) blur(14px);-webkit-backdrop-filter:saturate(160%) blur(14px);border-bottom:1px solid var(--ln)}
.ap-brand{font-family:'Fraunces',serif;font-weight:400;font-size:.92rem;letter-spacing:.05em;color:var(--gd)}
.ap-lk{display:flex;gap:clamp(.8rem,2.4vw,2rem);font-size:.68rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase}
.ap-lk a{color:var(--mu);transition:color .25s}
.ap-lk a:hover{color:var(--gd)}
@media(max-width:600px){.ap-lk a:not(.ap-ct){display:none}}
.w{width:min(1060px,100% - 2.5rem);margin-inline:auto;position:relative;z-index:2}
.s{padding-block:clamp(4.5rem,10vw,8rem);border-top:1px solid var(--ln);position:relative;overflow:hidden}
.lb{font-family:'JetBrains Mono',monospace;font-size:.66rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gd);display:inline-flex;align-items:center;gap:.5rem}
.lb::before{content:"";width:20px;height:1px;background:var(--gd);opacity:.5}
.h2{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(1.6rem,3.4vw,2.4rem);line-height:1.1;letter-spacing:-.005em;margin-top:.5rem}
.h2 em{color:var(--gd);font-style:italic}
.hero{position:relative;min-height:100svh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:7rem 1.5rem 3rem;overflow:hidden}
.hero-art{position:absolute;inset:auto 0 0 0;width:100%;height:58%;z-index:0}
.hero-fade{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,var(--bg) 22%,rgba(23,19,14,.2) 52%,rgba(23,19,14,.06) 74%,var(--bg) 100%)}
.hero-in{position:relative;z-index:2;max-width:640px}
.hero .lb{margin-bottom:1.8rem}
.hero h1{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(2.4rem,6.2vw,4.4rem);line-height:1.06;letter-spacing:-.01em;margin-bottom:.6rem}
.hero h1 em{color:var(--gd);font-style:italic}
.hero .rl{width:40px;height:1px;background:var(--gd);margin:1.6rem auto}
.hero .s1{font-family:'Fraunces',serif;font-size:clamp(1.05rem,1.8vw,1.35rem);line-height:1.7;color:var(--mu);max-width:420px;margin:0 auto}
.hero .s2{font-size:.88rem;color:var(--fo);margin-top:.7rem;line-height:1.9;max-width:440px;margin-inline:auto}
.hero .cue{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);z-index:2;font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.25em;text-transform:uppercase;color:var(--fo)}
.tabs{display:flex;gap:.4rem;margin:1.6rem 0 2rem;flex-wrap:wrap}
.tab{font-family:'JetBrains Mono',monospace;font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;padding:.42rem .95rem;border:1px solid var(--ln);background:transparent;color:var(--mu);cursor:pointer;transition:.25s var(--ez)}
.tab:hover{color:var(--cr);border-color:var(--ln2)}
.tab.on{background:var(--gd);color:var(--bg);border-color:var(--gd)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--ln);border:1px solid var(--ln);border-radius:12px;overflow:hidden}
@media(max-width:640px){.grid{grid-template-columns:1fr}}
.cd{background:var(--bg);transition:background .4s var(--ez);cursor:default;overflow:hidden}
.cd.hide{display:none}
.cd:hover{background:var(--b2)}
.cd-art{width:100%;height:100px;background:var(--b2);overflow:hidden}
.cd-art svg{width:100%;height:100%}
.cd-b{padding:1.2rem 1.4rem 1.5rem}
.pn{font-family:'JetBrains Mono',monospace;color:var(--gd);font-size:.78rem}
.pe{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--fo);margin:.35rem 0 .25rem}
.pj{font-family:'Fraunces',serif;font-weight:500;font-size:1.4rem;line-height:1.1}
.pnote{color:var(--mu);font-size:.84rem;margin-top:.4rem}
.pspec{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.08em;text-transform:uppercase;color:var(--ms);margin-top:.75rem}
.beliefs{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(1.4rem,3.5vw,2.8rem);margin-top:2.6rem}
@media(max-width:680px){.beliefs{grid-template-columns:1fr;gap:2rem}}
.bl{border-top:1px solid var(--ln);padding-top:1.2rem}
.bl .bi{font-family:'JetBrains Mono',monospace;font-size:.64rem;letter-spacing:.18em;text-transform:uppercase;color:var(--gd);margin-bottom:.8rem}
.bl h3{font-family:'Fraunces',serif;font-size:1.25rem;margin-bottom:.6rem;line-height:1.25}
.bl h3 .be{display:block;font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.1em;text-transform:uppercase;color:var(--fo);margin-top:.2rem;font-weight:400}
.bl p{color:var(--mu);font-size:.9rem;line-height:1.85}
.origins{margin-top:2.4rem}
.ori{display:grid;grid-template-columns:52px 8rem 1fr auto;align-items:center;gap:1.2rem;padding:1.15rem 0;border-top:1px solid var(--ln);transition:.3s var(--ez);cursor:default}
.ori:last-child{border-bottom:1px solid var(--ln)}
.ori:hover{padding-left:.4rem}
.ori .oa{width:52px;height:36px;border-radius:5px;overflow:hidden;background:var(--b2)}
.ori .oa svg{width:100%;height:100%}
.ori .op{font-family:'Fraunces',serif;font-size:1.15rem}
.ori .oal{font-family:'JetBrains Mono',monospace;font-size:.64rem;color:var(--ac);letter-spacing:.06em;margin-top:.1rem}
.ori .od{color:var(--mu);font-size:.88rem}
.ori .ob{font-family:'Fraunces',serif;font-style:italic;font-size:.92rem;color:var(--gd);white-space:nowrap}
@media(max-width:680px){.ori{grid-template-columns:44px 1fr;gap:.3rem .8rem}.ori .oa{width:44px;height:32px;grid-row:1/3}.ori .od{grid-column:2}.ori .ob{grid-column:2}}
.shop{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3rem);margin-top:2.4rem}
@media(max-width:600px){.shop{grid-template-columns:1fr;gap:1.8rem}}
.shop h3{font-family:'Fraunces',serif;font-size:1.2rem;margin-bottom:.6rem}
.shop p{color:var(--mu);font-size:.9rem;line-height:1.85;margin-bottom:.9rem}
.lbtn{font-family:'JetBrains Mono',monospace;font-size:.64rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gd);background:none;border:none;border-bottom:1px solid var(--gd);padding-bottom:.2rem;cursor:pointer;transition:gap .3s;display:inline-flex;align-items:center;gap:.4rem}
.lbtn:hover{gap:.7rem}
.cgrid{display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(2rem,5vw,3.5rem);margin-top:2.4rem;align-items:start}
@media(max-width:680px){.cgrid{grid-template-columns:1fr;gap:1.8rem}}
.ci p{color:var(--mu);font-size:.92rem;line-height:1.85;margin-bottom:1.1rem;max-width:32ch}
.cdr{font-family:'JetBrains Mono',monospace;font-size:.66rem;letter-spacing:.06em;color:var(--fo);line-height:2.2}
.cdr a{color:var(--gd);border-bottom:1px solid var(--ln2)}
.fm{display:flex;flex-direction:column;gap:.9rem}
.fd{display:flex;flex-direction:column;gap:.3rem}
.fd label{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mu)}
.fd input,.fd select,.fd textarea{font-family:'Inter',sans-serif;font-weight:300;font-size:.9rem;color:var(--cr);background:var(--b2);border:1px solid var(--ln);border-radius:7px;padding:.65rem .8rem;outline:none;transition:border-color .25s,background .25s}
.fd input:focus,.fd select:focus,.fd textarea:focus{border-color:var(--gd);background:var(--b3)}
.fd textarea{resize:vertical;min-height:84px;line-height:1.6}
.fd select{-webkit-appearance:none;appearance:none;cursor:pointer;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23A99C88' stroke-width='1.5'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right .8rem center}
.fr2{display:grid;grid-template-columns:1fr 1fr;gap:.9rem}
@media(max-width:480px){.fr2{grid-template-columns:1fr}}
.submit{font-family:'Inter',sans-serif;font-weight:400;font-size:.88rem;background:var(--gd);color:var(--bg);border:none;border-radius:100px;padding:.8rem 1.4rem;cursor:pointer;display:inline-flex;align-items:center;gap:.45rem;align-self:flex-start;margin-top:.3rem;transition:.3s var(--ez)}
.submit:hover{background:var(--cr)}
.fnote{font-size:.72rem;color:var(--fo);margin-top:.3rem}
.footer{border-top:1px solid var(--ln);padding:clamp(3.5rem,8vw,6rem) 0 2.2rem;text-align:center;position:relative;overflow:hidden}
.foot-art{position:absolute;inset:auto 0 0 0;height:50%;width:100%;opacity:.4;z-index:0;pointer-events:none}
.footer .w{position:relative;z-index:2}
.ftitle{font-family:'Fraunces',serif;font-weight:400;font-size:clamp(1.5rem,4vw,2.4rem);letter-spacing:.03em;color:var(--gd);line-height:1.1}
.ftag{font-family:'Fraunces',serif;font-style:italic;font-weight:300;color:var(--mu);font-size:.95rem;margin-top:.45rem}
.flinks{display:flex;justify-content:center;flex-wrap:wrap;gap:1.3rem;margin-top:1.8rem;font-family:'JetBrains Mono',monospace;font-size:.64rem;letter-spacing:.12em;text-transform:uppercase}
.flinks a{color:var(--mu);transition:color .25s}
.flinks a:hover{color:var(--gd)}
.colophon{margin-top:2rem;font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.08em;color:var(--fo)}
.rv{opacity:0;transform:translateY(18px);transition:opacity .9s var(--ez),transform .9s var(--ez)}
.rv.in{opacity:1;transform:none}
.hero .lb,.hero h1,.hero .rl,.hero .s1,.hero .s2,.hero .cue{opacity:0;transform:translateY(8px);transition:.9s var(--ez)}
.hero .lb{transition-delay:.15s}.hero h1{transition-delay:.35s}.hero .rl{transition-delay:.5s}.hero .s1{transition-delay:.6s}.hero .s2{transition-delay:.75s}.hero .cue{transition-delay:1s}
@media(prefers-reduced-motion:reduce){.rv,.hero .lb,.hero h1,.hero .rl,.hero .s1,.hero .s2,.hero .cue{opacity:1!important;transform:none!important;transition:none!important}}

.map-wrap{margin-top:2.8rem;position:relative}
.map-label{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--fo);margin-bottom:.8rem}
.map-container{position:relative;background:var(--b2);border:1px solid var(--ln);border-radius:12px;overflow:hidden;padding:1rem}
.map-container svg{width:100%;height:auto}
.map-country{fill:rgba(237,229,214,.06);stroke:rgba(237,229,214,.12);stroke-width:.5;transition:fill .3s}
.map-country:hover{fill:rgba(237,229,214,.1)}
.map-country.vn{fill:rgba(216,180,136,.1);stroke:rgba(216,180,136,.2)}
.map-country.vn:hover{fill:rgba(216,180,136,.16)}
.map-water{fill:transparent}
.map-pin{cursor:pointer;transition:transform .25s var(--ez)}
.map-pin:hover{transform:scale(1.3)}
.map-pin circle.outer{fill:var(--gd);opacity:.25}
.map-pin circle.mid{fill:var(--gd);opacity:.5}
.map-pin circle.inner{fill:var(--gd)}
.map-pin.future circle.outer{fill:var(--mu);opacity:.15}
.map-pin.future circle.mid{fill:var(--mu);opacity:.3}
.map-pin.future circle.inner{fill:var(--mu)}
.map-tip{position:absolute;background:var(--bg);border:1px solid var(--ln2);border-radius:8px;padding:.7rem .9rem;pointer-events:none;opacity:0;transition:opacity .25s;z-index:10;min-width:160px;max-width:220px}
.map-tip.show{opacity:1}
.map-tip .tip-name{font-family:'Fraunces',serif;font-size:1rem;margin-bottom:.15rem}
.map-tip .tip-origin{font-family:'Fraunces',serif;font-style:italic;font-size:.82rem;color:var(--gd);margin-bottom:.4rem}
.map-tip .tip-alt{font-family:'JetBrains Mono',monospace;font-size:.6rem;letter-spacing:.08em;color:var(--ac)}
.map-tip .tip-desc{font-size:.78rem;color:var(--mu);line-height:1.6;margin-top:.35rem}
.map-tip .tip-future{font-family:'JetBrains Mono',monospace;font-size:.58rem;letter-spacing:.12em;text-transform:uppercase;color:var(--mu);margin-top:.3rem}
.map-legend{display:flex;gap:1.4rem;margin-top:.8rem;font-size:.65rem;color:var(--fo)}
.map-legend span{display:inline-flex;align-items:center;gap:.35rem}
.map-legend .dot-active{width:6px;height:6px;border-radius:50%;background:var(--gd)}
.map-legend .dot-future{width:6px;height:6px;border-radius:50%;background:var(--mu);opacity:.5}
</style>
<div class="ap-bar" id="apBar"></div>
<nav class="ap-nav"><span class="ap-brand">Asia Pacific Coffee Supply</span><div class="ap-lk"><a href="#ph">About</a><a href="#or">Sourcing</a><a href="#col">Shop</a><a href="#ct" class="ap-ct">Contact</a></div></nav>
<header class="hero" id="top">
<svg class="hero-art" id="heroArt" preserveAspectRatio="xMidYMax slice" aria-hidden="true"></svg>
<div class="hero-fade"></div>
<div class="hero-in">
<span class="lb">Vietnam Specialty Coffee · Est. 2026</span>
<h1>Asia Pacific<br><em>Coffee Supply</em></h1>
<div class="rl"></div>
<p class="s1">産地から届ける、一杯の真実。<br>Sourced in the highlands of Vietnam.<br>Roasted with care in Japan.</p>
<p class="s2">ベトナムの高地で、農家ひとりひとりと向き合って選んだ豆だけを。<br>まだ知られていない、ベトナムコーヒーの本当の顔をお届けします。</p>
</div>
<span class="cue">Scroll</span>
</header>
<section class="s" id="col"><div class="w">
<span class="lb rv">§ 01 — Collection</span>
<h2 class="h2 rv">Selected <em>Origins</em></h2>
<div class="tabs rv"><button class="tab on" data-f="all">All</button><button class="tab" data-f="single">Single Origin</button><button class="tab" data-f="blend">Blend</button></div>
<div class="grid rv" id="gd">
<div class="cd" data-cat="single" data-art="dawn"><div class="cd-art"></div><div class="cd-b"><div class="pn">i.</div><div class="pe">Dalat Arabica · Washed</div><div class="pj">Highland Dawn</div><div class="pnote">オレンジ / ジャスミン / ハチミツ</div><div class="pspec">▲ 1,500m · Medium-Light</div></div></div>
<div class="cd" data-cat="single" data-art="forest"><div class="cd-art"></div><div class="cd-b"><div class="pn">ii.</div><div class="pe">Fine Robusta · Honey</div><div class="pj">Forest Whisper</div><div class="pnote">カカオ / 黒糖 / ナッツ</div><div class="pspec">▲ 800m · Light-Medium</div></div></div>
<div class="cd" data-cat="single" data-art="ember"><div class="cd-art"></div><div class="cd-b"><div class="pn">iii.</div><div class="pe">Buon Ma Thuot · Dark</div><div class="pj">Sunset Ember</div><div class="pnote">ビターチョコ / キャラメル</div><div class="pspec">▲ 600m · Dark</div></div></div>
<div class="cd" data-cat="single" data-art="misty"><div class="cd-art"></div><div class="cd-b"><div class="pn">iv.</div><div class="pe">Dien Bien Arabica · Washed</div><div class="pj">Misty Peak</div><div class="pnote">アプリコット / アーモンド</div><div class="pspec">▲ 1,200m · Medium</div></div></div>
<div class="cd" data-cat="blend" data-art="blend"><div class="cd-art"></div><div class="cd-b"><div class="pn">v.</div><div class="pe">Signature Blend</div><div class="pj">Two Halves Blend</div><div class="pnote">チョコレート / オレンジ</div><div class="pspec">Arabica × Robusta · Medium</div></div></div>
<div class="cd" data-cat="blend" data-art="neutral"><div class="cd-art"></div><div class="cd-b"><div class="pn">vi.</div><div class="pe">Drip Bag</div><div class="pj">Daily Dripbag</div><div class="pnote">いつでも、どこでも</div><div class="pspec">Two Halves · Medium</div></div></div>
</div>
</div></section>
<section class="s" id="ph"><div class="w">
<span class="lb rv">§ 02 — Philosophy</span>
<h2 class="h2 rv">What We <em>Believe</em></h2>
<div class="beliefs">
<div class="bl rv"><div class="bi">Traceable</div><h3>顔の見える調達<span class="be">Traceable Sourcing</span></h3><p>産地を自分の足で訪ね、農家と直接話して選んだ豆だけを扱います。どこの・誰の・どんな豆か。それを必ず把握したうえで仕入れます。</p></div>
<div class="bl rv"><div class="bi">Rediscovery</div><h3>ロブスタの再発見<span class="be">Rediscovering Robusta</span></h3><p>「安い豆」という偏見を、静かにくつがえす。完熟チェリーを丁寧に精製したファインロブスタには、カカオやナッツのような奥行きがあります。</p></div>
<div class="bl rv"><div class="bi">Freshness</div><h3>鮮度という誠実さ<span class="be">Freshness as Honesty</span></h3><p>日本国内で焙煎し、焙煎日を明記。いちばん美味しい状態でお届けします。ベストは焙煎後2週間目から。</p></div>
</div>
</div></section>
<section class="s" id="or"><div class="w">
<span class="lb rv">§ 03 — Origins</span>
<h2 class="h2 rv">The <em>Highlands</em></h2>
<div class="origins rv">
<div class="ori"><div class="oa" data-art="dawn"></div><div><div class="op">Đà Lạt</div><div class="oal">▲ 1,500 m · Lâm Đồng</div></div><div class="od">火山性土壌と冷たい朝霧の高原。明るく華やかなアラビカ。</div><div class="ob">Highland Dawn</div></div>
<div class="ori"><div class="oa" data-art="misty"></div><div><div class="op">Điện Biên</div><div class="oal">▲ 1,200 m · Northwest</div></div><div class="od">霧深い山岳地。手摘みで育つ、まだ知られざるアラビカ。</div><div class="ob">Misty Peak</div></div>
<div class="ori"><div class="oa" data-art="forest"></div><div><div class="op">Cư M'gar</div><div class="oal">▲ 800 m · Đắk Lắk</div></div><div class="od">ファインロブスタの最前線。カカオのような甘み。</div><div class="ob">Forest Whisper</div></div>
<div class="ori"><div class="oa" data-art="ember"></div><div><div class="op">Buôn Ma Thuột</div><div class="oal">▲ 600 m · Đắk Lắk</div></div><div class="od">「コーヒーの首都」。力強く濃厚な味の中心地。</div><div class="ob">Sunset Ember</div></div>
</div>

<div class="map-wrap rv">
<div class="map-label">Sourcing map — Southeast Asia</div>
<div class="map-container" id="mapBox">
<svg id="seaMap" viewBox="0 0 600 480" aria-label="Southeast Asia coffee origins map"></svg>
<div class="map-tip" id="mapTip"></div>
</div>
<div class="map-legend">
<span><span class="dot-active"></span> Current origins</span>
<span><span class="dot-future"></span> Future sourcing</span>
</div>
</div>
</div></section>
<section class="s" id="sh"><div class="w">
<span class="lb rv">§ 04 — Shop</span>
<h2 class="h2 rv">How to <em>Buy</em></h2>
<div class="shop">
<div class="rv"><h3>個人のお客様</h3><p>オンラインストア（BASE）にて販売予定です。公開までは、Instagram またはメールでお問い合わせください。</p><button class="lbtn" data-mailto="personal">メールで問い合わせる →</button></div>
<div class="rv"><h3>飲食店・カフェの皆様</h3><p>生豆・焙煎豆・ドリップバッグを卸売しております。業務店様には無料サンプルをお送りします。</p><button class="lbtn" data-mailto="wholesale">卸売を問い合わせる →</button></div>
</div>
</div></section>
<section class="s" id="ct"><div class="w">
<span class="lb rv">§ 05 — Contact</span>
<h2 class="h2 rv">Get in <em>Touch</em></h2>
<div class="cgrid">
<div class="ci rv"><p>下のフォームに記入して「メールを作成」を押すと、内容が記入済みのメールが立ち上がります。あとは送信するだけ。業務店の方には無料サンプルをお送りします。</p><div class="cdr">直接でも受け付けています<br><a href="mailto:hello@apcoffee.example">hello@apcoffee.example</a><br>Instagram: @asiapacificcoffee</div></div>
<form class="fm rv" id="apF">
<div class="fr2"><div class="fd"><label for="cf-n">お名前 / 店舗名</label><input id="cf-n" type="text" placeholder="山田 太郎 / ○○珈琲店" required></div><div class="fd"><label for="cf-e">返信先メール</label><input id="cf-e" type="email" placeholder="you@example.com"></div></div>
<div class="fr2"><div class="fd"><label for="cf-t">お客様の種別</label><select id="cf-t"><option>個人のお客様</option><option>カフェ・自家焙煎店</option><option>レストラン・飲食店</option><option>小売・その他</option></select></div><div class="fd"><label for="cf-p">ご興味のある商品</label><select id="cf-p"><option>まだ決めていない / 相談したい</option><option>生豆（グリーン）</option><option>焙煎豆</option><option>ドリップバッグ</option></select></div></div>
<div class="fd"><label for="cf-q">ご希望の数量・頻度（任意）</label><input id="cf-q" type="text" placeholder="例：焙煎豆 月5kg / まずはサンプル希望"></div>
<div class="fd"><label for="cf-m">メッセージ</label><textarea id="cf-m" placeholder="ご質問やご要望をご自由にどうぞ。"></textarea></div>
<button type="submit" class="submit">メールを作成 →</button>
<p class="fnote">※ メールアプリが起動し本文が記入済みで開きます。サーバーにデータは送られません。</p>
</form>
</div>
</div></section>
<footer class="footer"><svg class="foot-art" id="footArt" preserveAspectRatio="xMidYMax slice" aria-hidden="true"></svg><div class="w">
<div class="ftitle">Asia Pacific Coffee Supply</div>
<div class="ftag">Sourced in Vietnam. Roasted in Japan.</div>
<div class="flinks"><a href="#ph">About</a><a href="#or">Sourcing</a><a href="#col">Shop</a><a href="#ct">Contact</a><a href="#">Instagram</a></div>
<div class="colophon">© 2026 ASIA PACIFIC COFFEE SUPPLY</div>
</div></footer>
<script src="/static/site.js"></script>
</div>
