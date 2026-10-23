import{b as ee,c as w,i as Y}from"./checker-engine.25TpFkxw.js";import"./factor-engine.CH02YN6p.js";const te=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],ne=[6,8,10,12,14,15,18,20,21,22,24,26,27,28,30,32,33,34,35,38,39,40,42,44,45,46,48,50,51,52,54,55,56,57,58,60,62,63,65,66,68,69,70,72,74,75,76,77,78,80,82,84,85,86,87,88,90,91,92,93,94,95,96,98,99];function k(a){return a[Math.floor(Math.random()*a.length)]}function y(a,i){return Math.floor(Math.random()*(i-a+1))+a}function se(a){let i=97n,c="";if(a===1){const r=y(1,3);if(r===1)i=BigInt(k(te)),c="Số nguyên tố chỉ chia hết cho 1 và chính nó.";else if(r===2){const t=y(2,10);i=BigInt(t*t),c=`Số này là bình phương của ${t} (${t}² = ${t*t}).`}else i=BigInt(k(ne)),c="Hợp số thường, không phải bình phương của số nào."}else if(a===2){const r=y(1,5);if(r===1){let t=101,s=!1;for(let d=0;d<100;d++){const p=y(101,9999)|1;if(Y(p)){t=p,s=!0;break}}i=BigInt(s?t:997),c="Số nguyên tố 3-4 chữ số."}else if(r===2){const t=y(11,100);i=BigInt(t*t),c=`Số chính phương (${t}²).`}else if(r===3){const s=k([11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);i=BigInt(s*s),c=`Dạng bẫy p² (${s}²): hợp số nhưng là số chính phương!`}else if(r===4){const s=k([[7,13],[11,13],[13,17],[17,19],[19,23],[23,29],[29,31],[31,37],[37,41],[41,43]]);i=BigInt(s[0]*s[1]),c=`Dạng bẫy tích hai số nguyên tố (${s[0]} × ${s[1]}): trông giống nguyên tố nhưng là hợp số!`}else{const t=y(10,99),s=Math.random()<.5?1:-1;i=BigInt(t*t+s),c=`Dạng bẫy ${t}² ${s>0?"+ 1":"- 1"}.`}}else{const r=y(1,5);if(r===1){let t=999983,s=!1;for(let d=0;d<200;d++){const p=y(1e5,999999)|1;if(Y(p)){t=p,s=!0;break}}i=BigInt(s?t:999983),c="Số nguyên tố lớn gần 1 triệu."}else if(r===2){const t=y(101,1e3);i=BigInt(t*t),c=`Số chính phương lớn (${t}²).`}else if(r===3){const s=k([101,103,107,109,113,127,131,137,139,149,199,251,313,509,701,997]);i=BigInt(s*s),c=`Dạng bẫy p² lớn (${s}² = ${s*s}).`}else if(r===4){const t=k([101,103,107,109,113,127]),s=k([131,137,139,149,151,157]);i=BigInt(t*s),c=`Dạng bẫy tích hai số nguyên tố 3 chữ số (${t} × ${s}).`}else{const t=[1,4,9];let s=1241;for(let d=0;d<100;d++){const p=k(t),f=y(1e3,99999)*10+p,L=ee(BigInt(f));if(L*L!==BigInt(f)){s=f;break}}i=BigInt(s),c=`Số tận cùng bằng ${i%10n} nhưng không phải số chính phương.`}}const m=w({n:i.toString()}),u=m.primeResult.isPrime,b=m.squareResult.isSquare;return{id:`practice-${a}-${i}`,level:a,targetNumber:i,isPrime:u,isSquare:b,displayLatex:`${i.toLocaleString("vi-VN")}`,hintExplanation:c}}function ie(a,i){let c=!1,m=!1,u=0n;if(typeof i=="object"&&"targetNumber"in i)u=i.targetNumber,c=i.isPrime,m=i.isSquare;else{u=BigInt(i);const L=w({n:u.toString()});c=L.primeResult.isPrime,m=L.squareResult.isSquare}const b=a.userIsPrime===c,r=a.userIsSquare===m;let t="both_incorrect",s=!1,d="";const p=c?"CÓ (là số nguyên tố)":"KHÔNG (không phải số nguyên tố)",f=m?"CÓ (là số chính phương)":"KHÔNG (không phải số chính phương)";return b&&r?(t="both_correct",s=!0,d=`🎉 <strong>Chính xác tuyệt đối!</strong> Số ${u.toLocaleString("vi-VN")} ${c?"là số nguyên tố":"không phải số nguyên tố"} và ${m?"là số chính phương":"không phải số chính phương"}. Bạn nắm rất chắc kiến thức!`):b&&!r?(t="prime_correct_only",s=!1,d=`⚠️ <strong>Đúng phần số nguyên tố, nhưng sai phần số chính phương!</strong> Số ${u.toLocaleString("vi-VN")} ${f}. Hãy kiểm tra lại cách kẹp căn bậc hai.`):!b&&r?(t="square_correct_only",s=!1,d=`⚠️ <strong>Đúng phần số chính phương, nhưng sai phần số nguyên tố!</strong> Số ${u.toLocaleString("vi-VN")} ${p}. Hãy thử chia các số nguyên tố tới căn bậc hai.`):(t="both_incorrect",s=!1,d=`❌ <strong>Chưa chính xác ở cả hai tính chất!</strong> Đáp án đúng: Nguyên tố: <strong>${c?"Có":"Không"}</strong> | Chính phương: <strong>${m?"Có":"Không"}</strong>. Bấm nút <em>"Xem lời giải từng bước"</em> bên dưới để xem chi tiết!`),{status:t,isFullCorrect:s,feedbackMessage:d,correctAnswers:{isPrime:c,isSquare:m}}}function N(a){a&&typeof renderMathInElement<"u"&&renderMathInElement(a,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1})}function O(){const a=document.getElementById("input-number"),i=document.getElementById("btn-check"),c=document.getElementById("calc-error-alert"),m=document.querySelectorAll(".preset-chip"),u=document.getElementById("solution-card"),b=document.getElementById("hero-prime-card"),r=document.getElementById("hero-square-card"),t=document.getElementById("btn-copy-summary"),s=document.getElementById("prime-section-container"),d=document.getElementById("square-section-container"),p=document.getElementById("extended-container"),f=document.getElementById("tab-btn-calc"),L=document.getElementById("tab-btn-practice"),V=document.getElementById("panel-calc"),M=document.getElementById("panel-practice"),G=document.getElementById("practice-lvl-1"),z=document.getElementById("practice-lvl-2"),F=document.getElementById("practice-lvl-3"),R=document.getElementById("practice-problem-latex"),C=document.getElementById("choice-prime-yes"),P=document.getElementById("choice-prime-no"),B=document.getElementById("choice-square-yes"),T=document.getElementById("choice-square-no"),j=document.getElementById("btn-practice-check"),Q=document.getElementById("btn-practice-next"),U=document.getElementById("btn-practice-solution"),$=document.getElementById("practice-feedback-alert"),x=document.getElementById("practice-solution-container");let K=1,S=null,I={userIsPrime:!1,userIsSquare:!1},A="";function X(n){c&&(c.textContent=n,c.style.display="block"),u&&(u.style.display="none")}function Z(){c&&(c.textContent="",c.style.display="none")}function H(){Z();const n=a?.value??"";try{const l=w({n});J(l)}catch(l){X(l.message||"Công cụ này chỉ nhận số nguyên. Vui lòng nhập lại.")}}function J(n){if(!u)return;u.style.display="block",A=n.copyTextSummary;const l=n.input.absN;n.input.originalString;const E=n.input.isNegative;if(b){const e=n.primeResult;let o="badge-blue",h="Hợp số",g="Nguyên tố: KHÔNG";e.isSpecial?(o="badge-warning",h="Đặc biệt",g="Nguyên tố: KHÔNG"):e.isPrime&&(o="badge-green",h="Số nguyên tố",g="Nguyên tố: CÓ"),b.className=`hero-card card ${e.isPrime?"hero-card-success":""}`,b.innerHTML=`
        <div class="hero-card-header">
          <span class="status-badge ${o}">${h}</span>
          <span class="card-icon">🔢</span>
        </div>
        <h3 class="hero-card-title">${g}</h3>
        <p class="hero-card-desc">${e.conclusionText}</p>
        ${E?`<p class="hero-card-note"><em>${e.specialNote}</em></p>`:""}
      `}if(r){const e=n.squareResult;let o="badge-neutral",h="Không chính phương",g="Chính phương: KHÔNG";e.isSquare&&(o="badge-green",h="Số chính phương",g=`Chính phương: CÓ (= ${e.s}²)`),r.className=`hero-card card ${e.isSquare?"hero-card-success":""}`,r.innerHTML=`
        <div class="hero-card-header">
          <span class="status-badge ${o}">${h}</span>
          <span class="card-icon">📐</span>
        </div>
        <h3 class="hero-card-title">${g}</h3>
        <p class="hero-card-desc">${e.conclusionMethod1}</p>
      `}if(s){const e=n.primeResult;let o="";if(e.isSpecial||e.visibleTrials.length===0)o=`
          <div class="special-note-box alert alert-info">
            <p>ℹ️ <strong>Nhận xét:</strong> ${e.conclusionText}</p>
            <p class="mt-1">${e.verificationStep}</p>
          </div>
        `;else{const h=e.visibleTrials.map(v=>`
            <div class="trial-row ${v.isExact?"trial-exact":""}">
              <span class="trial-math">$$${v.latex}$$</span>
              <span class="trial-badge ${v.isExact?"badge-exact":"badge-rem"}">
                ${v.isExact?"✓ Chia hết (Hợp số)":`dư ${v.remainder}`}
              </span>
            </div>
          `).join(""),g=e.isTruncated?`
            <div class="trial-ellipsis">
              <span class="ellipsis-dots">⋮</span>
              <span class="ellipsis-text">… (Đã ẩn ${e.testedCount-e.visibleTrials.length} phép thử không chia hết) …</span>
            </div>
          `:"";o=`
          <div class="trials-wrapper">
            <div class="trials-threshold-banner">
              <span class="threshold-pill">Ngưỡng căn bậc hai</span>
              <span>$$\\sqrt{${l}} \\approx ${e.sqrtApproximation}$$ — Chỉ cần thử các số nguyên tố không vượt quá $\\lfloor\\sqrt{${l}}\\rfloor = ${e.sqrtInteger}$.</span>
            </div>
            <div class="trials-list">
              ${h}
              ${g}
            </div>
            <div class="trials-summary-bar">
              <strong>Tổng kết phép thử:</strong> Đã thử tất cả <strong>${e.testedCount.toLocaleString("vi-VN")}</strong> số nguyên tố tới $\\sqrt{${l}}$.
            </div>
          </div>
        `}s.innerHTML=`
        <div class="detail-section-card card">
          <div class="section-title-row">
            <span class="section-badge badge-primary">Phần 1</span>
            <h3 class="section-heading">Kiểm tra tính nguyên tố (Phép thử chia liên tiếp)</h3>
          </div>
          ${o}
          <div class="conclusion-box alert alert-success mt-3">
            <strong>📖 Kết luận:</strong> ${e.conclusionText}
          </div>
          <div class="verification-box mt-2">
            <strong>✔️ Thử lại & Đối chiếu:</strong> ${e.verificationStep}
          </div>
        </div>
      `,N(s)}if(d){const e=n.squareResult;let o="";if(E)o=`
          <div class="alert alert-warning">
            <p><strong>Lưu ý số âm:</strong> ${e.specialNote}</p>
          </div>
        `;else if(n.input.isZero||n.input.isOne)o=`
          <div class="alert alert-success">
            <p><strong>Kết luận:</strong> ${e.conclusionMethod1}</p>
            <p class="mt-1">Thử lại: $$${e.verificationStep}$$</p>
          </div>
        `;else{const v=`
          <div class="clamp-component">
            <div class="clamp-label-row">
              <span>Đầu dưới: <strong>${e.s}² = ${e.sSquared}</strong></span>
              <span>Đầu trên: <strong>${e.nextS}² = ${e.nextSSquared}</strong></span>
            </div>
            <div class="clamp-track-wrapper">
              <div class="clamp-track ${e.isSquare?"track-matched":""}">
                <div class="clamp-pin clamp-pin-start">
                  <span class="pin-tick"></span>
                  <span class="pin-text">${e.s}²</span>
                </div>
                <div class="clamp-marker-n ${e.isSquare?"marker-matched":""}" style="left: ${e.clampPercentage}%;">
                  <span class="marker-arrow">▼</span>
                  <span class="marker-dot"></span>
                  <span class="marker-tag">${l} ${e.isSquare?"(Khớp)":""}</span>
                </div>
                <div class="clamp-pin clamp-pin-end">
                  <span class="pin-tick"></span>
                  <span class="pin-text">${e.nextS}²</span>
                </div>
              </div>
            </div>
            <div class="clamp-caption">
              ${e.isSquare?`<span class="text-green font-bold">✓ Điểm ${l} khớp hoàn toàn vào vị trí chính phương ${e.s}² (${e.s} × ${e.s} = ${l}).</span>`:`<span>Số ${l} nằm lọt giữa hai số chính phương liên tiếp ${e.sSquared} và ${e.nextSSquared}.</span>`}
            </div>
          </div>
        `;o=`
          ${e.lastDigitNote?`<div class="last-digit-box alert alert-info mb-3">${e.lastDigitNote}</div>`:""}
          <!-- Cách 1: Kẹp căn bậc hai -->
          <div class="method-subcard">
            <h4 class="method-subtitle">Cách 1 (Chính): Kẹp giữa hai số chính phương liên tiếp</h4>
            <p class="method-desc">
              Lấy phần nguyên của căn bậc hai $s = \\lfloor\\sqrt{${l}}\\rfloor = ${e.s}$, bình phương hai số nguyên liên tiếp $s$ và $s + 1$:
            </p>
            <div class="inequality-math-box">
              $$${e.squeezeInequalityLatex}$$
            </div>
            ${v}
            <div class="conclusion-box alert alert-success mt-2">
              <strong>📖 Kết luận Cách 1:</strong> ${e.conclusionMethod1}
            </div>
          </div>

          <!-- Cách 2: Phân tích ra thừa số nguyên tố (Collapsible) -->
          <div class="method-subcard method-collapsible-box mt-3">
            <div class="collapsible-header" id="btn-toggle-square-m2">
              <h4 class="method-subtitle" style="margin: 0;">Cách 2: Phân tích ra thừa số nguyên tố (Kiểm tra số mũ)</h4>
              <button type="button" class="btn btn-outline btn-sm toggle-indicator">Thu gọn ▲</button>
            </div>
            <div id="square-method2-content" class="collapsible-body" style="display: block;">
              <p class="method-desc mt-2">
                Một số tự nhiên là số chính phương khi và chỉ khi mọi thừa số nguyên tố trong phân tích của nó đều có <strong>số mũ chẵn</strong>:
              </p>
              <div class="factor-exp-box">
                $$${e.factorizationLatex}$$
              </div>
              <p class="mt-2">${e.conclusionMethod2}</p>
            </div>
          </div>

          <!-- Bước Thử lại -->
          <div class="verification-box mt-3">
            <strong>✔️ Thử lại phép tính:</strong> ${e.verificationStep}
          </div>
        `}d.innerHTML=`
        <div class="detail-section-card card">
          <div class="section-title-row">
            <span class="section-badge badge-primary">Phần 2</span>
            <h3 class="section-heading">Kiểm tra tính chính phương (Kẹp căn & Phân tích thừa số)</h3>
          </div>
          ${o}
        </div>
      `,N(d);const h=document.getElementById("btn-toggle-square-m2"),g=document.getElementById("square-method2-content");h?.addEventListener("click",()=>{if(!g)return;const v=g.style.display==="none";g.style.display=v?"block":"none";const _=h.querySelector(".toggle-indicator");_&&(_.textContent=v?"Thu gọn ▲":"Mở rộng ▼")})}if(p){const e=n.extendedInfo;let o="";e.factorizationLine&&(o=`
          <div class="ext-item">
            <span class="ext-label">Phân tích đầy đủ ra thừa số nguyên tố:</span>
            <div class="ext-math">$$${e.factorizationLine}$$</div>
          </div>
        `);let h="";if(e.hasPrimeNeighbors){const g=e.prevPrime?`<strong>${e.prevPrime}</strong>`:"<em>(Không có vì 2 là số nguyên tố nhỏ nhất)</em>",v=e.nextPrime?`<strong>${e.nextPrime}</strong>`:"—";h=`
          <div class="ext-item mt-2">
            <span class="ext-label">Số nguyên tố liền kề ${e.primeNeighborsNote||""}:</span>
            <div class="neighbors-grid">
              <div class="neighbor-card">
                <span class="n-sub">Liền trước:</span>
                <span class="n-val">${g}</span>
              </div>
              <div class="neighbor-card neighbor-card-center">
                <span class="n-sub">Số hiện tại:</span>
                <span class="n-val font-bold">${l}</span>
              </div>
              <div class="neighbor-card">
                <span class="n-sub">Liền sau:</span>
                <span class="n-val">${v}</span>
              </div>
            </div>
          </div>
        `}o||h?(p.innerHTML=`
          <div class="extended-card card">
            <h3 class="extended-title">🔍 Mở rộng & Tính chất lân cận</h3>
            ${o}
            ${h}
          </div>
        `,N(p)):p.innerHTML=""}}m.forEach(n=>{n.addEventListener("click",()=>{const l=n.getAttribute("data-val")||"";a&&(a.value=l,H(),a.focus())})}),i?.addEventListener("click",H),a?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),H())}),t?.addEventListener("click",()=>{A&&navigator.clipboard?.writeText(A).then(()=>{const n=t.innerHTML;t.innerHTML="✓ Đã sao chép kết quả!",t.classList.add("btn-copied"),setTimeout(()=>{t.innerHTML=n,t.classList.remove("btn-copied")},2e3)})}),f?.addEventListener("click",()=>{f.classList.add("active"),L?.classList.remove("active"),V?.classList.remove("hidden"),M?.classList.add("hidden")}),L?.addEventListener("click",()=>{L.classList.add("active"),f?.classList.remove("active"),M?.classList.remove("hidden"),V?.classList.add("hidden"),S||D(K)});function q(n){K=n,[G,z,F].forEach((l,E)=>{E+1===n?l?.classList.add("active"):l?.classList.remove("active")}),D(n)}G?.addEventListener("click",()=>q(1)),z?.addEventListener("click",()=>q(2)),F?.addEventListener("click",()=>q(3));function W(){I={userIsPrime:!1,userIsSquare:!1},C?.classList.remove("selected"),P?.classList.remove("selected"),B?.classList.remove("selected"),T?.classList.remove("selected"),$&&($.style.display="none",$.innerHTML=""),x&&(x.style.display="none",x.innerHTML="")}function D(n){W(),S=se(n),R&&(R.innerHTML=`$$n = ${S.targetNumber}$$`,N(R))}C?.addEventListener("click",()=>{I.userIsPrime=!0,C.classList.add("selected"),P?.classList.remove("selected")}),P?.addEventListener("click",()=>{I.userIsPrime=!1,P.classList.add("selected"),C?.classList.remove("selected")}),B?.addEventListener("click",()=>{I.userIsSquare=!0,B.classList.add("selected"),T?.classList.remove("selected")}),T?.addEventListener("click",()=>{I.userIsSquare=!1,T.classList.add("selected"),B?.classList.remove("selected")}),j?.addEventListener("click",()=>{if(!S||!$)return;const n=C?.classList.contains("selected")||P?.classList.contains("selected"),l=B?.classList.contains("selected")||T?.classList.contains("selected");if(!n||!l){$.className="practice-feedback alert alert-warning",$.innerHTML="⚠️ Vui lòng chọn cả hai câu trả lời (Nguyên tố: Có/Không VÀ Chính phương: Có/Không) trước khi bấm kiểm tra.",$.style.display="block";return}const E=ie(I,S);$.style.display="block",E.isFullCorrect?$.className="practice-feedback alert alert-success":$.className="practice-feedback alert alert-error",$.innerHTML=E.feedbackMessage}),Q?.addEventListener("click",()=>{D(K)}),U?.addEventListener("click",()=>{if(!S||!x)return;const n=w({n:S.targetNumber.toString()});x.style.display="block",x.innerHTML=`
      <div class="practice-sol-card card mt-3">
        <h4 class="sol-title">📖 Lời giải chi tiết cho số ${S.targetNumber}:</h4>
        <div class="sol-body">
          <p><strong>1. Phần kiểm tra nguyên tố:</strong> ${n.primeResult.conclusionText}</p>
          <p class="text-hint">${n.primeResult.verificationStep}</p>
          <p class="mt-2"><strong>2. Phần kiểm tra chính phương:</strong> ${n.squareResult.conclusionMethod1}</p>
          <p class="text-hint">Cách 2: ${n.squareResult.conclusionMethod2}</p>
        </div>
      </div>
    `,N(x)}),document.addEventListener("keydown",n=>{M&&!M.classList.contains("hidden")&&(n.key==="1"?q(1):n.key==="2"?q(2):n.key==="3"?q(3):n.key==="Enter"&&(n.preventDefault(),j?.click()))}),H()}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",O):O());
