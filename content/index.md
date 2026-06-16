---
title: APCOS — Asia Pacific Coffee Supply
enableToc: false
---

<style>
  :root{
    --bg:#1A1511; --bg2:#221B15; --bg3:#2A2118; --cream:#ECE3D4; --muted:#A99C88; --fog:#8E8474;
    --gold:#D8B488; --accent:#C2613A; --moss:#8FA985; --line:rgba(236,227,212,.12); --line2:rgba(236,227,212,.2);
    --ease:cubic-bezier(.16,1,.3,1);
  }
  *{margin:0;padding:0;box-sizing:border-box}
  html{scroll-behavior:smooth;scroll-padding-top:5rem;-webkit-text-size-adjust:100%}
  body{font-family:"Inter",system-ui,sans-serif;background:var(--bg);color:var(--cream);line-height:1.75;
    -webkit-font-smoothing:antialiased;overflow-x:hidden}
  ::selection{background:var(--gold);color:var(--bg)}
  a{color:inherit;text-decoration:none}
  svg{display:block}

  .progress{position:fixed;top:0;left:0;height:2px;width:0;background:var(--gold);z-index:100;transition:width .1s linear}
  .nav{position:fixed;inset:0 0 auto 0;z-index:90;display:flex;align-items:center;justify-content:space-between;
    padding:1.15rem clamp(1.25rem,4vw,2.75rem);transition:background .4s var(--ease),padding .4s var(--ease)}
  .nav.scrolled{background:rgba(26,21,17,.78);backdrop-filter:saturate(160%) blur(14px);
    -webkit-backdrop-filter:saturate(160%) blur(14px);border-bottom:1px solid var(--line);padding-block:.8rem}
  .brand{display:flex;align-items:center;gap:.55rem;color:var(--cream)}
  .brand svg{width:24px;height:24px;overflow:visible}
  .brand b{font-family:"Fraunces",serif;font-weight:500;font-size:1.35rem;letter-spacing:.08em;color:var(--gold)}
  .nav-links{display:flex;align-items:center;gap:clamp(1rem,2.6vw,2.2rem);
    font-family:"JetBrains Mono",monospace;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase}
  .nav-links a{color:var(--muted);transition:color .25s}
  .nav-links a:hover{color:var(--gold)}
  @media(max-width:680px){.nav-links a:not(.nav-contact){display:none}}

  .wrap{width:min(1140px,100% - 2.75rem);margin-inline:auto;position:relative;z-index:2}
  .section{padding-block:clamp(4.5rem,9vw,8rem);position:relative;border-top:1px solid var(--line)}

  .eyebrow{font-family:"JetBrains Mono",monospace;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold)}
  .sec-head{font-family:"Fraunces",serif;font-weight:500;font-size:clamp(1.7rem,3.4vw,2.6rem);line-height:1.12;
    letter-spacing:-.01em;margin-top:.6rem}
  .sec-head .en{font-family:"JetBrains Mono",monospace;font-size:.8rem;letter-spacing:.1em;color:var(--fog);
    text-transform:lowercase;margin-left:.8rem;font-weight:400}

  .hero{position:relative;min-height:100svh;display:flex;flex-direction:column;justify-content:center;
    align-items:center;text-align:center;padding:7rem 1.5rem 3rem;overflow:hidden}
  .hero-art{position:absolute;inset:auto 0 0 0;width:100%;height:66%;z-index:0}
  .hero-fade{position:absolute;inset:0;z-index:1;pointer-events:none;
    background:linear-gradient(180deg,var(--bg) 18%,rgba(26,21,17,.3) 46%,rgba(26,21,17,.1) 70%,var(--bg) 100%)}
  .hero-inner{position:relative;z-index:2;max-width:780px}
  .hero .eyebrow{display:inline-block;margin-bottom:2rem;opacity:0;transform:translateY(8px);transition:.8s var(--ease) .2s}
  .hero h1{font-family:"Fraunces",serif;font-weight:500;font-size:clamp(5rem,17vw,10rem);line-height:.9;
    letter-spacing:.04em;color:var(--gold);margin-bottom:1.8rem;opacity:0;transform:translateY(14px);transition:1s var(--ease) .35s}
  .hero .lede{font-family:"Fraunces",serif;font-size:clamp(1.3rem,2.4vw,1.75rem);line-height:1.6;margin-bottom:1.4rem;
    opacity:0;transform:translateY(12px);transition:.9s var(--ease) .55s}
  .hero .lede strong{font-weight:500}
  .hero .sub{color:var(--muted);font-size:1rem;line-height:1.9;opacity:0;transform:translateY(12px);transition:.9s var(--ease) .75s}
  .hero .cue{position:absolute;bottom:1.8rem;left:50%;transform:translateX(-50%);z-index:2;
    font-family:"JetBrains Mono",monospace;font-size:.64rem;letter-spacing:.2em;text-transform:uppercase;color:var(--fog);
    display:flex;flex-direction:column;align-items:center;gap:.5rem;opacity:0;transition:opacity 1s ease 1.1s}
  .cue .rail{width:1px;height:34px;background:linear-gradient(var(--fog),transparent);position:relative;overflow:hidden}
  .cue .rail::after{content:"";position:absolute;top:-34px;left:0;width:1px;height:34px;background:var(--gold);animation:cue 2.4s var(--ease) infinite}
  @keyframes cue{0%{transform:translateY(0)}60%,100%{transform:translateY(68px)}}
  body.loaded .hero .eyebrow,body.loaded .hero h1,body.loaded .hero .lede,body.loaded .hero .sub,body.loaded .hero .cue{opacity:1;transform:none}

  .tabs{display:flex;gap:.5rem;margin:2rem 0 2.4rem;flex-wrap:wrap}
  .tab{font-family:"JetBrains Mono",monospace;font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;
    padding:.5rem 1.1rem;border-radius:100px;border:1px solid var(--line);background:transparent;color:var(--muted);
    cursor:pointer;transition:.25s var(--ease)}
  .tab:hover{color:var(--cream);border-color:var(--line2)}
  .tab.on{background:var(--gold);color:var(--bg);border-color:var(--gold)}

  .grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--line);
    border:1px solid var(--line);border-radius:16px;overflow:hidden}
  @media(max-width:720px){.grid{grid-template-columns:1fr}}
  .card{background:var(--bg);transition:background .45s var(--ease);overflow:hidden}
  .card.hide{display:none}
  .card:hover{background:var(--bg2)}
  .card-art{width:100%;height:118px;position:relative;overflow:hidden;background:var(--bg2)}
  .card-art svg{width:100%;height:100%}
  .card-body{padding:1.5rem 1.6rem 1.8rem}
  .card .pc-num{font-family:"JetBrains Mono",monospace;color:var(--gold);font-size:.82rem}
  .card .pc-en{font-family:"JetBrains Mono",monospace;font-size:.66rem;letter-spacing:.12em;text-transform:uppercase;
    color:var(--fog);margin:.5rem 0 .35rem}
  .card .pc-jp{font-family:"Fraunces",serif;font-weight:500;font-size:1.55rem;line-height:1.1;color:var(--cream)}
  .card .pc-note{color:var(--muted);font-size:.88rem;margin-top:.5rem}
  .card .pc-spec{font-family:"JetBrains Mono",monospace;font-size:.64rem;letter-spacing:.08em;text-transform:uppercase;
    color:var(--moss);margin-top:.9rem}

  .beliefs{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(1.5rem,3.5vw,3rem);margin-top:2.6rem}
  @media(max-width:760px){.beliefs{grid-template-columns:1fr;gap:2rem}}
  .belief{border-top:1px solid var(--line);padding-top:1.3rem}
  .belief .bi{font-family:"JetBrains Mono",monospace;color:var(--gold);font-size:.85rem}
  .belief h3{font-family:"Fraunces",serif;font-weight:500;font-size:1.4rem;margin:.6rem 0 .7rem;line-height:1.2}
  .belief h3 .be{display:block;font-family:"JetBrains Mono",monospace;font-size:.62rem;letter-spacing:.12em;
    text-transform:uppercase;color:var(--fog);margin-top:.3rem}
  .belief p{color:var(--muted);font-size:.95rem;line-height:1.8}

  .origins{margin-top:2.4rem}
  .origin{display:grid;grid-template-columns:64px 9rem 1fr auto;align-items:center;gap:1.5rem;
    padding:1.4rem 0;border-top:1px solid var(--line);transition:.35s var(--ease)}
  .origin:last-child{border-bottom:1px solid var(--line)}
  .origin:hover{padding-left:.6rem}
  .origin .o-art{width:64px;height:44px;border-radius:7px;overflow:hidden;background:var(--bg2)}
  .origin .o-art svg{width:100%;height:100%}
  .origin .o-place{font-family:"Fraunces",serif;font-size:1.3rem;color:var(--cream)}
  .origin .o-alt{font-family:"JetBrains Mono",monospace;font-size:.7rem;color:var(--accent);letter-spacing:.06em;margin-top:.15rem}
  .origin .o-desc{color:var(--muted);font-size:.92rem}
  .origin .o-bean{font-family:"Fraunces",serif;font-style:italic;font-size:1rem;color:var(--gold);white-space:nowrap}
  @media(max-width:760px){
    .origin{grid-template-columns:48px 1fr;gap:.4rem 1rem}
    .origin .o-art{width:48px;height:40px;grid-row:1/3}
    .origin .o-desc{grid-column:2}
    .origin .o-bean{grid-column:2;text-align:left}
  }

  .shop{display:grid;grid-template-columns:1fr 1fr;gap:clamp(1.5rem,4vw,3.5rem);margin-top:2.4rem}
  @media(max-width:680px){.shop{grid-template-columns:1fr;gap:2rem}}
  .shop-col h3{font-family:"Fraunces",serif;font-weight:500;font-size:1.4rem;margin-bottom:.7rem}
  .shop-col p{color:var(--muted);font-size:.95rem;line-height:1.8;margin-bottom:1.1rem}
  .link-btn{font-family:"JetBrains Mono",monospace;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;
    color:var(--gold);display:inline-flex;align-items:center;gap:.5rem;border-bottom:1px solid var(--gold);
    padding-bottom:.25rem;background:none;border-top:none;border-left:none;border-right:none;cursor:pointer;transition:gap .3s}
  .link-btn:hover{gap:.8rem}

  .contact-grid{display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(2rem,5vw,4rem);margin-top:2.6rem;align-items:start}
  @media(max-width:760px){.contact-grid{grid-template-columns:1fr;gap:2rem}}
  .contact-intro p{color:var(--muted);font-size:.98rem;line-height:1.85;margin-bottom:1.4rem;max-width:36ch}
  .contact-direct{font-family:"JetBrains Mono",monospace;font-size:.72rem;letter-spacing:.06em;color:var(--fog);line-height:2}
  .contact-direct a{color:var(--gold);border-bottom:1px solid var(--line2)}
  .form{display:flex;flex-direction:column;gap:1rem}
  .field{display:flex;flex-direction:column;gap:.4rem}
  .field label{font-family:"JetBrains Mono",monospace;font-size:.66rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted)}
  .field input,.field select,.field textarea{font-family:"Inter",sans-serif;font-size:.95rem;color:var(--cream);
    background:var(--bg2);border:1px solid var(--line);border-radius:9px;padding:.75rem .9rem;transition:border-color .25s, background .25s}
  .field input:focus,.field select:focus,.field textarea:focus{outline:none;border-color:var(--gold);background:var(--bg3)}
  .field textarea{resize:vertical;min-height:96px;line-height:1.6}
  .field select{appearance:none;-webkit-appearance:none;cursor:pointer;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23A99C88' stroke-width='1.5'/%3E%3C/svg%3E");
    background-repeat:no-repeat;background-position:right .9rem center}
  .field-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
  @media(max-width:520px){.field-row{grid-template-columns:1fr}}
  .submit{font-family:"Inter",sans-serif;font-weight:500;font-size:.95rem;background:var(--gold);color:var(--bg);
    border:none;border-radius:100px;padding:.9rem 1.6rem;cursor:pointer;display:inline-flex;align-items:center;gap:.55rem;
    align-self:flex-start;margin-top:.4rem;transition:.3s var(--ease)}
  .submit:hover{background:var(--cream)}
  .submit .arr{transition:transform .3s var(--ease)}
  .submit:hover .arr{transform:translateX(4px)}
  .form-note{font-size:.78rem;color:var(--fog);line-height:1.7;margin-top:.3rem}

  .footer{border-top:1px solid var(--line);padding:clamp(3.5rem,7vw,5.5rem) 0 2.5rem;text-align:center;position:relative;overflow:hidden}
  .foot-art{position:absolute;inset:auto 0 0 0;height:60%;width:100%;opacity:.5;z-index:0;pointer-events:none}
  .footer .wrap{position:relative;z-index:2}
  .foot-big{font-family:"Fraunces",serif;font-weight:500;font-size:clamp(3rem,11vw,7rem);letter-spacing:.06em;color:var(--gold);line-height:1}
  .foot-tag{font-family:"Fraunces",serif;font-style:italic;color:var(--muted);font-size:1.05rem;margin-top:.6rem}
  .foot-links{display:flex;justify-content:center;flex-wrap:wrap;gap:1.4rem;margin-top:2rem;
    font-family:"JetBrains Mono",monospace;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase}
  .foot-links a{color:var(--muted);transition:color .25s}
  .foot-links a:hover{color:var(--gold)}
  .colophon{margin-top:2.2rem;font-family:"JetBrains Mono",monospace;font-size:.64rem;letter-spacing:.08em;color:var(--fog)}

  .reveal{opacity:0;transform:translateY(22px);transition:opacity .9s var(--ease),transform .9s var(--ease)}
  .reveal.in{opacity:1;transform:none}

  @media(prefers-reduced-motion:reduce){
    *{animation:none!important;transition-duration:.01ms!important;scroll-behavior:auto}
    .reveal,.hero .eyebrow,.hero h1,.hero .lede,.hero .sub,.hero .cue{opacity:1!important;transform:none!important}
  }
</style>
</head>
<body>
<div class="progress" id="progress"></div>

<nav class="nav" id="nav">
  <a class="brand" href="#top" aria-label="TÁN">
    <svg viewBox="0 0 32 32" aria-hidden="true"><g fill="none" stroke-width="1.5">
      <circle cx="16" cy="16" r="3.5" stroke="var(--gold)"/><circle cx="16" cy="16" r="8" stroke="var(--moss)"/><circle cx="16" cy="16" r="12.5" stroke="var(--muted)"/>
    </g></svg><b>TÁN</b>
  </a>
  <div class="nav-links">
    <a href="#philosophy">About</a>
    <a href="#origins">Sourcing</a>
    <a href="#collection">Shop</a>
    <a href="#contact" class="nav-contact">Contact</a>
  </div>
</nav>

<header class="hero" id="top">
  <svg class="hero-art" id="heroArt" preserveAspectRatio="xMidYMax slice" aria-hidden="true"></svg>
  <div class="hero-fade"></div>
  <div class="hero-inner">
    <span class="eyebrow">Vietnam Specialty Coffee · since 2026</span>
    <h1>TÁN</h1>
    <p class="lede"><strong>木陰から、一杯の物語を。</strong><br>Sourced in the highlands of Vietnam.<br>Roasted with care in Japan.</p>
    <p class="sub">ベトナムの高地で、農家ひとりひとりと向き合って選んだ豆だけを。<br>まだ知られていない、ベトナムコーヒーの本当の顔をお届けします。</p>
  </div>
  <a href="#collection" class="cue" aria-label="scroll"><span>Scroll</span><span class="rail"></span></a>
</header>

<section class="section" id="collection">
  <div class="wrap">
    <span class="eyebrow reveal">§ 01 / Collection</span>
    <h2 class="sec-head reveal">取り扱いコーヒー<span class="en">selected origins</span></h2>
    <div class="tabs reveal">
      <button class="tab on" data-filter="all">All</button>
      <button class="tab" data-filter="single">Single Origin</button>
      <button class="tab" data-filter="blend">Blend</button>
    </div>
    <div class="grid reveal" id="grid">
      <a class="card" data-cat="single" data-art="dawn">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">i.</div><div class="pc-en">Dalat Arabica · Washed</div><div class="pc-jp">Highland Dawn</div><div class="pc-note">オレンジ / ジャスミン / ハチミツ</div><div class="pc-spec">▲ 1,500m · Medium-Light</div></div>
      </a>
      <a class="card" data-cat="single" data-art="forest">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">ii.</div><div class="pc-en">Fine Robusta · Honey</div><div class="pc-jp">Forest Whisper</div><div class="pc-note">カカオ / 黒糖 / ナッツ</div><div class="pc-spec">▲ 800m · Light-Medium</div></div>
      </a>
      <a class="card" data-cat="single" data-art="ember">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">iii.</div><div class="pc-en">Buon Ma Thuot · Dark</div><div class="pc-jp">Sunset Ember</div><div class="pc-note">ビターチョコ / キャラメル</div><div class="pc-spec">▲ 600m · Dark</div></div>
      </a>
      <a class="card" data-cat="single" data-art="misty">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">iv.</div><div class="pc-en">Dien Bien Arabica · Washed</div><div class="pc-jp">Misty Peak</div><div class="pc-note">アプリコット / アーモンド</div><div class="pc-spec">▲ 1,200m · Medium</div></div>
      </a>
      <a class="card" data-cat="blend" data-art="split">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">v.</div><div class="pc-en">Signature Blend</div><div class="pc-jp">Two Halves Blend</div><div class="pc-note">チョコレート / オレンジ</div><div class="pc-spec">Arabica × Robusta · Medium</div></div>
      </a>
      <a class="card" data-cat="blend" data-art="neutral">
        <div class="card-art"></div>
        <div class="card-body"><div class="pc-num">vi.</div><div class="pc-en">Drip Bag</div><div class="pc-jp">Daily Dripbag</div><div class="pc-note">いつでも、どこでも</div><div class="pc-spec">Two Halves · Medium</div></div>
      </a>
    </div>
  </div>
</section>

<section class="section" id="philosophy">
  <div class="wrap">
    <span class="eyebrow reveal">§ 02 / Philosophy</span>
    <h2 class="sec-head reveal">惹かれるもの<span class="en">what we believe</span></h2>
    <div class="beliefs">
      <div class="belief reveal"><div class="bi">i.</div><h3>顔の見える調達<span class="be">Traceable Sourcing</span></h3><p>産地を自分の足で訪ね、農家と直接話して選んだ豆だけを扱います。どこの・誰の・どんな豆か。それを必ず把握したうえで仕入れます。</p></div>
      <div class="belief reveal"><div class="bi">ii.</div><h3>ロブスタの再発見<span class="be">Rediscovering Robusta</span></h3><p>「安い豆」という偏見を、静かにくつがえす。完熟チェリーを丁寧に精製したファインロブスタには、カカオやナッツのような奥行きがあります。</p></div>
      <div class="belief reveal"><div class="bi">iii.</div><h3>鮮度という誠実さ<span class="be">Freshness as Honesty</span></h3><p>日本国内で焙煎し、焙煎日を明記。いちばん美味しい状態でお届けします。ベストは焙煎後2週間目から。</p></div>
    </div>
  </div>
</section>

<section class="section" id="origins">
  <div class="wrap">
    <span class="eyebrow reveal">§ 03 / Origins</span>
    <h2 class="sec-head reveal">産地<span class="en">the highlands</span></h2>
    <div class="origins reveal">
      <div class="origin"><div class="o-art" data-art="dawn"></div><div><div class="o-place">Đà Lạt</div><div class="o-alt">▲ 1,500 m · Lâm Đồng</div></div><div class="o-desc">火山性土壌と冷たい朝霧の高原。明るく華やかなアラビカ。</div><div class="o-bean">Highland Dawn</div></div>
      <div class="origin"><div class="o-art" data-art="misty"></div><div><div class="o-place">Điện Biên</div><div class="o-alt">▲ 1,200 m · Northwest</div></div><div class="o-desc">霧深い山岳地。手摘みで育つ、まだ知られざるアラビカ。</div><div class="o-bean">Misty Peak</div></div>
      <div class="origin"><div class="o-art" data-art="forest"></div><div><div class="o-place">Cư M'gar</div><div class="o-alt">▲ 800 m · Đắk Lắk</div></div><div class="o-desc">ファインロブスタの最前線。カカオのような甘み。</div><div class="o-bean">Forest Whisper</div></div>
      <div class="origin"><div class="o-art" data-art="ember"></div><div><div class="o-place">Buôn Ma Thuột</div><div class="o-alt">▲ 600 m · Đắk Lắk</div></div><div class="o-desc">「コーヒーの首都」。力強く濃厚な味の中心地。</div><div class="o-bean">Sunset Ember</div></div>
    </div>
  </div>
</section>

<section class="section" id="shop">
  <div class="wrap">
    <span class="eyebrow reveal">§ 04 / Shop</span>
    <h2 class="sec-head reveal">ご購入<span class="en">how to buy</span></h2>
    <div class="shop">
      <div class="shop-col reveal"><h3>個人のお客様</h3><p>オンラインストア（BASE）にて販売予定です。公開までは、Instagram またはメールでお問い合わせください。</p><button class="link-btn" data-mailto="personal">メールで問い合わせる →</button></div>
      <div class="shop-col reveal"><h3>飲食店・カフェの皆様</h3><p>生豆・焙煎豆・ドリップバッグを卸売しております。業務店様には無料サンプルをお送りします。</p><button class="link-btn" data-mailto="wholesale">卸売を問い合わせる →</button></div>
    </div>
  </div>
</section>

<section class="section" id="contact">
  <div class="wrap">
    <span class="eyebrow reveal">§ 05 / Contact</span>
    <h2 class="sec-head reveal">お問い合わせ<span class="en">get in touch</span></h2>
    <div class="contact-grid">
      <div class="contact-intro reveal">
        <p>下のフォームに記入して「メールを作成」を押すと、内容が記入済みのメールが立ち上がります。あとは送信するだけ。業務店の方には無料サンプルをお送りします。</p>
        <div class="contact-direct">直接でも受け付けています<br><a href="mailto:hello@tan-coffee.example">hello@tan-coffee.example</a><br>Instagram: @tan.coffee</div>
      </div>
      <form class="form reveal" id="contactForm">
        <div class="field-row">
          <div class="field"><label for="cf-name">お名前 / 店舗名</label><input id="cf-name" type="text" placeholder="山田 太郎 / ○○珈琲店" required></div>
          <div class="field"><label for="cf-email">返信先メール（任意）</label><input id="cf-email" type="email" placeholder="you@example.com"></div>
        </div>
        <div class="field-row">
          <div class="field"><label for="cf-type">お客様の種別</label>
            <select id="cf-type">
              <option>個人のお客様</option>
              <option>カフェ・自家焙煎店</option>
              <option>レストラン・飲食店</option>
              <option>小売・その他</option>
            </select>
          </div>
          <div class="field"><label for="cf-prod">ご興味のある商品</label>
            <select id="cf-prod">
              <option>まだ決めていない / 相談したい</option>
              <option>生豆（グリーン）</option>
              <option>焙煎豆</option>
              <option>ドリップバッグ</option>
            </select>
          </div>
        </div>
        <div class="field"><label for="cf-qty">ご希望の数量・頻度（任意）</label><input id="cf-qty" type="text" placeholder="例：焙煎豆 月5kg / まずはサンプル希望"></div>
        <div class="field"><label for="cf-msg">メッセージ</label><textarea id="cf-msg" placeholder="ご質問やご要望をご自由にどうぞ。"></textarea></div>
        <button type="submit" class="submit">メールを作成 <span class="arr">→</span></button>
        <p class="form-note">※ 送信ボタンを押すと、お使いのメールアプリが起動し本文が記入済みで開きます。サーバーにデータは送られません。</p>
      </form>
    </div>
  </div>
</section>

<footer class="footer">
  <svg class="foot-art" id="footArt" preserveAspectRatio="xMidYMax slice" aria-hidden="true"></svg>
  <div class="wrap">
    <div class="foot-big">TÁN</div>
    <div class="foot-tag">Sourced in Vietnam. Roasted in Japan.</div>
    <div class="foot-links">
      <a href="#philosophy">About</a><a href="#origins">Sourcing</a><a href="#collection">Shop</a><a href="#contact">Contact</a><a href="#">Instagram</a>
    </div>
    <div class="colophon">© 2026 TÁN COFFEE · SET IN FRAUNCES · INTER · JETBRAINS MONO</div>
  </div>
</footer>

<script>
(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var NS = "http://www.w3.org/2000/svg";

  var PALETTES = {
    dawn:    { sun:"#F2C079", sunOp:.55, sky:"#2A1E15", ridges:["#9A6B3F","#73492B","#462F1F"] },
    forest:  { sun:"#CFE0A0", sunOp:.32, sky:"#1C261A", ridges:["#5E7A57","#41573D","#293826"] },
    ember:   { sun:"#E68A55", sunOp:.50, sky:"#2A1712", ridges:["#A24A2E","#6E2F1E","#3E1F16"] },
    misty:   { sun:"#C2D6D0", sunOp:.30, sky:"#1A2421", ridges:["#7E9A93","#536E68","#35463F"] },
    split:   { sun:"#E2B98C", sunOp:.40, sky:"#241E16", ridges:["#9A6B3F","#5E7A57","#3A3528"] },
    neutral: { sun:"#CBBCA2", sunOp:.32, sky:"#221C15", ridges:["#9A8C76","#6E6253","#403A30"] }
  };
  function lcg(seed){ var s=seed||1; return function(){ s=(s*1664525+1013904223)%4294967296; return s/4294967296; }; }
  function ridgePath(w,h,baseY,amp,rnd,steps){
    steps=steps||6;
    var pts=[];
    for(var i=0;i<=steps;i++){ pts.push([w*i/steps, baseY - amp*(0.35+0.65*rnd())]); }
    var d="M "+pts[0][0].toFixed(1)+" "+pts[0][1].toFixed(1);
    for(var j=0;j<pts.length-1;j++){
      var p0=pts[j-1]||pts[j], p1=pts[j], p2=pts[j+1], p3=pts[j+2]||pts[j+1];
      var c1x=p1[0]+(p2[0]-p0[0])/6, c1y=p1[1]+(p2[1]-p0[1])/6;
      var c2x=p2[0]-(p3[0]-p1[0])/6, c2y=p2[1]-(p3[1]-p1[1])/6;
      d+=" C "+c1x.toFixed(1)+" "+c1y.toFixed(1)+" "+c2x.toFixed(1)+" "+c2y.toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1);
    }
    return d+" L "+w+" "+(h+2)+" L 0 "+(h+2)+" Z";
  }
  function rect(svg,w,h,fill){ var r=document.createElementNS(NS,"rect"); r.setAttribute("x",0);r.setAttribute("y",0);r.setAttribute("width",w);r.setAttribute("height",h);r.setAttribute("fill",fill); svg.appendChild(r); }
  function buildScene(svg, key, opts){
    opts=opts||{};
    var p=PALETTES[key]||PALETTES.neutral;
    var w=opts.w||400, h=opts.h||130, seed=opts.seed||(key.length*37+7);
    while(svg.firstChild) svg.removeChild(svg.firstChild);
    svg.setAttribute("viewBox","0 0 "+w+" "+h);
    if(opts.sky!==false) rect(svg,w,h,p.sky);
    var sun=document.createElementNS(NS,"circle");
    sun.setAttribute("cx", w*(opts.sunX||0.68)); sun.setAttribute("cy", h*(opts.sunY||0.46));
    sun.setAttribute("r", h*(opts.sunR||0.40)); sun.setAttribute("fill", p.sun); sun.setAttribute("opacity", p.sunOp);
    svg.appendChild(sun);
    var rnd=lcg(seed), n=p.ridges.length;
    for(var i=0;i<n;i++){
      var t=i/(n-1||1);
      var baseY=h*(0.40+0.46*t), amp=h*(0.16+0.20*(1-t));
      var path=document.createElementNS(NS,"path");
      path.setAttribute("d", ridgePath(w,h,baseY,amp,rnd, opts.steps||6));
      path.setAttribute("fill", p.ridges[i]);
      svg.appendChild(path);
    }
    if(opts.mist){
      for(var m=0;m<3;m++){
        var line=document.createElementNS(NS,"rect");
        line.setAttribute("x",0); line.setAttribute("y", h*(0.5+m*0.12)); line.setAttribute("width",w); line.setAttribute("height",1.4);
        line.setAttribute("fill", p.sun); line.setAttribute("opacity",0.10); svg.appendChild(line);
      }
    }
  }
  function buildArt(){
    var hero=document.getElementById("heroArt");
    if(hero) buildScene(hero, "dawn", {w:1200,h:420,seed:91,sunX:0.5,sunY:0.5,sunR:0.34,steps:9,mist:true});
    var foot=document.getElementById("footArt");
    if(foot) buildScene(foot, "neutral", {w:1200,h:240,seed:23,sunX:0.5,sunY:0.7,sunR:0.3,steps:9,sky:false});
    document.querySelectorAll(".card-art").forEach(function(el){
      if(el.dataset.built) return; el.dataset.built="1";
      var key=el.parentElement.getAttribute("data-art")||"neutral";
      var svg=document.createElementNS(NS,"svg"); svg.setAttribute("preserveAspectRatio","xMidYMid slice"); el.appendChild(svg);
      buildScene(svg, key, {w:400,h:130,seed:key.length*53+11,steps:6});
    });
    document.querySelectorAll(".o-art").forEach(function(el){
      if(el.dataset.built) return; el.dataset.built="1";
      var key=el.getAttribute("data-art")||"neutral";
      var svg=document.createElementNS(NS,"svg"); svg.setAttribute("preserveAspectRatio","xMidYMid slice"); el.appendChild(svg);
      buildScene(svg, key, {w:120,h:80,seed:key.length*29+5,steps:5,sunR:0.5});
    });
  }

  window.addEventListener("load",function(){ requestAnimationFrame(function(){ document.body.classList.add("loaded"); }); });
  if(document.readyState==="complete") document.body.classList.add("loaded");

  var nav=document.getElementById("nav"), prog=document.getElementById("progress"), ticking=false;
  function onScroll(){
    var y=window.pageYOffset, h=document.documentElement.scrollHeight-window.innerHeight;
    if(y>24) nav.classList.add("scrolled"); else nav.classList.remove("scrolled");
    prog.style.width=(h>0?(y/h*100):0)+"%";
    ticking=false;
  }
  window.addEventListener("scroll",function(){ if(!ticking){ requestAnimationFrame(onScroll); ticking=true; } },{passive:true});

  var revs=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    var ro=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){
        var sibs=Array.prototype.filter.call(e.target.parentNode.children,function(c){return c.classList.contains("reveal");});
        e.target.style.transitionDelay=(Math.min(sibs.indexOf(e.target),6)*0.07)+"s";
        e.target.classList.add("in"); ro.unobserve(e.target);
      }});
    },{threshold:0.12,rootMargin:"0px 0px -8% 0px"});
    revs.forEach(function(el){ ro.observe(el); });
  } else { revs.forEach(function(el){ el.classList.add("in"); }); }

  document.querySelectorAll(".tab").forEach(function(tab){
    tab.addEventListener("click",function(){
      document.querySelectorAll(".tab").forEach(function(t){ t.classList.remove("on"); });
      tab.classList.add("on");
      var f=tab.getAttribute("data-filter");
      document.querySelectorAll("#grid .card").forEach(function(card){
        var show = (f==="all") || (card.getAttribute("data-cat")===f);
        card.classList.toggle("hide", !show);
      });
    });
  });

  var RECIPIENT = "hello@tan-coffee.example"; // ← あなたのメールアドレスに変更してください
  function val(id){ var el=document.getElementById(id); return el?el.value.trim():""; }
  function openMail(subject, body){
    window.location.href = "mailto:"+RECIPIENT+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  }
  var form=document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit",function(e){
      e.preventDefault();
      var name=val("cf-name")||"（お名前未記入）";
      var type=val("cf-type"), prod=val("cf-prod");
      var qty=val("cf-qty")||"（未記入）", email=val("cf-email")||"（未記入）", msg=val("cf-msg")||"（未記入）";
      var subject="TÁN お問い合わせ｜"+type;
      var body=
"TÁN Coffee へのお問い合わせ\n"+
"──────────────\n"+
"お名前 / 店舗名: "+name+"\n"+
"返信先メール: "+email+"\n"+
"お客様の種別: "+type+"\n"+
"ご興味のある商品: "+prod+"\n"+
"ご希望の数量・頻度: "+qty+"\n\n"+
"メッセージ:\n"+msg+"\n\n"+
"──────────────\n"+
"（tan-coffee.pages.dev のフォームより）";
      openMail(subject, body);
    });
  }
  document.querySelectorAll("[data-mailto]").forEach(function(btn){
    btn.addEventListener("click",function(){
      var kind=btn.getAttribute("data-mailto");
      if(kind==="wholesale"){
        openMail("TÁN 卸売のお問い合わせ",
"TÁN Coffee 卸売のお問い合わせ\n──────────────\n店舗・事業者名: \nご希望の豆（生豆 / 焙煎豆 / ドリップバッグ）: \nおおよその月間必要量: \nご希望（サンプル希望など）: \n\n──────────────\n（tan-coffee.pages.dev より）");
      } else {
        openMail("TÁN お問い合わせ",
"TÁN Coffee へのお問い合わせ\n──────────────\nお名前: \nご興味のある商品: \nメッセージ: \n\n──────────────\n（tan-coffee.pages.dev より）");
        var c=document.getElementById("contact"); if(c) c.scrollIntoView();
      }
    });
  });

  buildArt();
  onScroll();
})();
</script>
