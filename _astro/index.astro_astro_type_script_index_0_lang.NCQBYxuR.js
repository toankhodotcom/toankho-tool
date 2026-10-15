import{f as ne}from"./factor-engine.C7xMo0mZ.js";let R=null;function se(e){if(e<2)return[];if(!R){const r=new Uint8Array(5e5);r.fill(1),r[0]=0;for(let n=1;(2*n+1)*(2*n+1)<=1e6;n++)if(r[n]){const d=2*n+1;for(let h=d*d>>1;h<5e5;h+=d)r[h]=0}const i=[2];for(let n=1;n<5e5;n++)r[n]&&i.push(2*n+1);R=i}if(e>=1e6)return R;let t=0,s=R.length-1,o=-1;for(;t<=s;){const a=t+s>>1;R[a]<=e?(o=a,t=a+1):s=a-1}return o>=0?R.slice(0,o+1):[]}function ie(e){const t=e?.n??"",s=String(t).trim();if(!s)throw new Error("Vui lòng nhập một số nguyên.");if(s.includes(",")||s.includes(".")||s.includes("/")||/[a-zA-Z]/.test(s))throw new Error("Công cụ này chỉ nhận số nguyên. Vui lòng nhập lại.");let o;try{o=BigInt(s)}catch{throw new Error("Công cụ này chỉ nhận số nguyên. Vui lòng nhập lại.")}const a=o===0n,p=o<0n,r=p?-o:o,i=r===1n;if(r.toString().length>12)throw new Error("Vui lòng nhập số nguyên có tối đa 12 chữ số.");return{originalString:s,originalSign:a?0:p?-1:1,absN:r,rawBigInt:o,isNegative:p,isZero:a,isOne:i}}function U(e){if(e<0n)throw new Error("Căn bậc hai của số âm không xác định trong tập số thực");if(e===0n)return 0n;if(e<=3n)return 1n;let t=e/2n,s=(t+e/t)/2n;for(;s<t;)t=s,s=(t+e/t)/2n;return t}function _(e){if(e<2)return!1;if(e===2||e===3)return!0;if(e%2===0||e%3===0)return!1;for(let t=5;t*t<=e;t+=6)if(e%t===0||e%(t+2)===0)return!1;return!0}function ce(e){if(e<2n||e>10000000n)return{prev:null,next:null};const t=Number(e);let s=null;for(let a=t-1;a>=2;a--)if(_(a)){s=BigInt(a);break}let o=null;for(let a=t+1;;a++)if(_(a)){o=BigInt(a);break}return{prev:s,next:o,note:"(chỉ áp dụng cho số tới 10.000.000)"}}function ae(e,t,s){if(e===0n)return{isPrime:!1,isComposite:!1,isSpecial:!0,specialNote:"0 không phải là số nguyên tố cũng không phải là hợp số.",sqrtApproximation:"0",sqrtInteger:0n,testedCount:0,totalPrimesToSqrt:0,isTruncated:!1,visibleTrials:[],conclusionText:"0 không phải là số nguyên tố cũng không phải là hợp số.",verificationStep:"Theo quy ước toán học, số 0 chia hết cho mọi số nguyên khác 0 nên không phải số nguyên tố."};if(e===1n)return{isPrime:!1,isComposite:!1,isSpecial:!0,specialNote:"1 không phải là số nguyên tố cũng không phải là hợp số.",sqrtApproximation:"1",sqrtInteger:1n,testedCount:0,totalPrimesToSqrt:0,isTruncated:!1,visibleTrials:[],conclusionText:"1 không phải là số nguyên tố cũng không phải là hợp số.",verificationStep:"Số 1 chỉ có 1 ước duy nhất là chính nó (số nguyên tố cần đúng 2 ước phân biệt)."};if(e===2n)return{isPrime:!0,isComposite:!1,isSpecial:!1,specialNote:t?"Số nguyên tố chỉ xét với số tự nhiên nên công cụ kiểm tra theo trị tuyệt đối của số đã nhập.":void 0,sqrtApproximation:"1,4",sqrtInteger:1n,testedCount:0,totalPrimesToSqrt:0,isTruncated:!1,visibleTrials:[],conclusionText:"2 là số nguyên tố.",verificationStep:"√2 ≈ 1,4; không có số nguyên tố nào ≤ 1 để thử chia. Vậy 2 là số nguyên tố (và là số nguyên tố chẵn duy nhất)."};const o=U(e),p=Math.sqrt(Number(e)).toLocaleString("vi-VN",{maximumFractionDigits:1,minimumFractionDigits:1}),r=se(Number(o)),i=r.length;let n,d;const h=[];let u=0;for(const q of r){u++;const g=BigInt(q),b=e/g,y=e%g,B=y===0n,D=`${e} : ${g} = ${b} dư ${y}`,F=`${e} : ${g} = ${b} \\quad (\\text{dư } ${y})`;if(h.push({prime:g,quotient:b,remainder:y,isExact:B,text:D,latex:F}),B){n=g,d=b;break}}const $=!n,P=!!n,v=h.length>200;let x=[];if(!v)x=h;else if(x=h.slice(0,10),n&&h.length>10){const q=h[h.length-1];x.includes(q)||x.push(q)}const T=$?`${e} là số nguyên tố.`:`${e} = ${n} × ${d} nên ${e} là hợp số.`,I=$?`Đã thử tất cả ${u.toLocaleString("vi-VN")} số nguyên tố tới √${e} (≈ ${p}), không có phép thử nào chia hết. Vậy ${e} là số nguyên tố.`:`${n} \\times ${d} = ${e} \\quad (\\text{Chính xác 100\\%})`;return{isPrime:$,isComposite:P,isSpecial:!1,specialNote:t?"Số nguyên tố chỉ xét với số tự nhiên nên công cụ kiểm tra theo trị tuyệt đối của số đã nhập.":void 0,sqrtApproximation:p,sqrtInteger:o,testedCount:u,totalPrimesToSqrt:i,isTruncated:v,visibleTrials:x,firstDivisor:n,quotientAtDivisor:d,conclusionText:T,verificationStep:I}}function re(e,t,s,o){if(t)return{isSquare:!1,isNegative:!0,specialNote:"Số chính phương là bình phương của một số nguyên nên không bao giờ âm.",s:0n,sSquared:0n,nextS:0n,nextSSquared:0n,squeezeInequalityLatex:"-\\text{(số âm)} < 0",conclusionMethod1:"Số chính phương là bình phương của một số nguyên nên không bao giờ âm.",conclusionMethod2:"Không áp dụng phân tích cho số âm.",clampPercentage:0,verificationStep:"Số âm không thể là số chính phương."};if(e===0n)return{isSquare:!0,isNegative:!1,s:0n,sSquared:0n,nextS:1n,nextSSquared:1n,squeezeInequalityLatex:"0 = 0^2",conclusionMethod1:"0 = 0² nên 0 là số chính phương.",conclusionMethod2:"0 = 0² nên 0 là số chính phương.",clampPercentage:0,verificationStep:"0 \\times 0 = 0 \\quad (\\text{Chính xác 100\\%})"};if(e===1n)return{isSquare:!0,isNegative:!1,s:1n,sSquared:1n,nextS:2n,nextSSquared:4n,squeezeInequalityLatex:"1 = 1^2",conclusionMethod1:"1 = 1² nên 1 là số chính phương.",conclusionMethod2:"1 = 1² nên 1 là số chính phương.",clampPercentage:0,verificationStep:"1 \\times 1 = 1 \\quad (\\text{Chính xác 100\\%})"};const a=U(e),p=a*a,r=a+1n,i=r*r,n=p===e,d=Number(e%10n),h=[2,3,7,8].includes(d)?`💡 Nhận xét nhanh: Số này tận cùng bằng ${d}. Một số chính phương chỉ có thể tận cùng bằng 0, 1, 4, 5, 6 hoặc 9 nên kết luận ngay không phải là số chính phương.`:void 0;let u="",$="",P="",v=0;if(n)u=`${e} = ${a}^2`,$=`${e} = ${a}² nên ${e} là số chính phương.`,P=`${a} \\times ${a} = ${e} \\quad (\\text{Chính xác 100\\%})`,v=0;else{u=`${a}^2 = ${p} < ${e} < ${r}^2 = ${i}`,$=`${e} nằm giữa hai số chính phương liên tiếp ${a}² và ${r}² nên không phải là số chính phương.`,P=`${a}^2 = ${p} < ${e} < ${i} = ${r}^2`;const q=i-p;if(q>0n){const g=Number((e-p)*100n/q);v=Math.max(5,Math.min(95,g))}else v=50}let x="",T="";const I=[];if(s)x=`${e} = ${e}`,T=`Vì ${e} là số nguyên tố nên phân tích là chính nó với số mũ 1 (số lẻ), do đó ${e} không phải là số chính phương.`,I.push(e);else{const q=o.map(g=>g.exponent>1?`${g.prime}^{${g.exponent}}`:`${g.prime}`);x=`${e} = ${q.join(" \\times ")}`;for(const g of o)g.exponent%2!==0&&I.push(g.prime);if(I.length===0&&o.length>0){const g=o.map(b=>b.exponent).join(", ");T=`Phân tích $${x}$: Mọi số mũ (${g}) đều là số chẵn nên ${e} là số chính phương (${e} = ${a}²).`}else{const g=I.join(", "),b=o.filter(y=>y.exponent%2!==0).map(y=>`${y.prime}${y.exponent>1?`^{${y.exponent}}`:""}`).join(", ");T=`Phân tích $${x}$: Thừa số nguyên tố ${g} có số mũ lẻ (${b}) nên ${e} không phải là số chính phương.`}}return{isSquare:n,isNegative:!1,s:a,sSquared:p,nextS:r,nextSSquared:i,squeezeInequalityLatex:u,conclusionMethod1:$,factorizationLatex:x,conclusionMethod2:T,oddExponentPrimes:I.length>0?I:void 0,clampPercentage:v,verificationStep:P,lastDigitNote:h}}function j(e){const t=ie(e),s=t.absN,o=t.isZero||t.isOne?[]:ne(s),a=ae(s,t.isNegative,t.originalString),p=re(s,t.isNegative,a.isPrime,o);let r;if(!t.isZero&&!t.isOne&&a.isComposite){const P=o.map(v=>v.exponent>1?`${v.prime}^{${v.exponent}}`:`${v.prime}`);r=t.isNegative?`-${s} = -(${P.join(" \\times ")})`:`${s} = ${P.join(" \\times ")}`}const i=s>=2n&&s<=10000000n&&!t.isNegative,n=i?ce(s):{prev:null,next:null},d={factorizationLine:r,hasPrimeNeighbors:i,prevPrime:n.prev,nextPrime:n.next,primeNeighborsNote:i?"(chỉ áp dụng cho số tới 10.000.000)":void 0};let h="";t.isZero?h="Không (số 0)":t.isOne?h="Không (số 1)":t.isNegative?h=a.isPrime?"Có (|−n|)":"Không":h=a.isPrime?"Có":"Không";let u="";t.isNegative?u="Không (số âm)":p.isSquare?u=`Có (${s} = ${p.s}^2)`:u="Không";const $=`${t.originalString} — Nguyên tố: ${h} | Chính phương: ${u}`;return{input:t,primeResult:a,squareResult:p,extendedInfo:d,copyTextSummary:$}}const le=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],oe=[6,8,10,12,14,15,18,20,21,22,24,26,27,28,30,32,33,34,35,38,39,40,42,44,45,46,48,50,51,52,54,55,56,57,58,60,62,63,65,66,68,69,70,72,74,75,76,77,78,80,82,84,85,86,87,88,90,91,92,93,94,95,96,98,99];function N(e){return e[Math.floor(Math.random()*e.length)]}function E(e,t){return Math.floor(Math.random()*(t-e+1))+e}function he(e){let t=97n,s="";if(e===1){const r=E(1,3);if(r===1)t=BigInt(N(le)),s="Số nguyên tố chỉ chia hết cho 1 và chính nó.";else if(r===2){const i=E(2,10);t=BigInt(i*i),s=`Số này là bình phương của ${i} (${i}² = ${i*i}).`}else t=BigInt(N(oe)),s="Hợp số thường, không phải bình phương của số nào."}else if(e===2){const r=E(1,5);if(r===1){let i=101,n=!1;for(let d=0;d<100;d++){const h=E(101,9999)|1;if(_(h)){i=h,n=!0;break}}t=BigInt(n?i:997),s="Số nguyên tố 3-4 chữ số."}else if(r===2){const i=E(11,100);t=BigInt(i*i),s=`Số chính phương (${i}²).`}else if(r===3){const n=N([11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]);t=BigInt(n*n),s=`Dạng bẫy p² (${n}²): hợp số nhưng là số chính phương!`}else if(r===4){const n=N([[7,13],[11,13],[13,17],[17,19],[19,23],[23,29],[29,31],[31,37],[37,41],[41,43]]);t=BigInt(n[0]*n[1]),s=`Dạng bẫy tích hai số nguyên tố (${n[0]} × ${n[1]}): trông giống nguyên tố nhưng là hợp số!`}else{const i=E(10,99),n=Math.random()<.5?1:-1;t=BigInt(i*i+n),s=`Dạng bẫy ${i}² ${n>0?"+ 1":"- 1"}.`}}else{const r=E(1,5);if(r===1){let i=999983,n=!1;for(let d=0;d<200;d++){const h=E(1e5,999999)|1;if(_(h)){i=h,n=!0;break}}t=BigInt(n?i:999983),s="Số nguyên tố lớn gần 1 triệu."}else if(r===2){const i=E(101,1e3);t=BigInt(i*i),s=`Số chính phương lớn (${i}²).`}else if(r===3){const n=N([101,103,107,109,113,127,131,137,139,149,199,251,313,509,701,997]);t=BigInt(n*n),s=`Dạng bẫy p² lớn (${n}² = ${n*n}).`}else if(r===4){const i=N([101,103,107,109,113,127]),n=N([131,137,139,149,151,157]);t=BigInt(i*n),s=`Dạng bẫy tích hai số nguyên tố 3 chữ số (${i} × ${n}).`}else{const i=[1,4,9];let n=1241;for(let d=0;d<100;d++){const h=N(i),u=E(1e3,99999)*10+h,$=U(BigInt(u));if($*$!==BigInt(u)){n=u;break}}t=BigInt(n),s=`Số tận cùng bằng ${t%10n} nhưng không phải số chính phương.`}}const o=j({n:t.toString()}),a=o.primeResult.isPrime,p=o.squareResult.isSquare;return{id:`practice-${e}-${t}`,level:e,targetNumber:t,isPrime:a,isSquare:p,displayLatex:`${t.toLocaleString("vi-VN")}`,hintExplanation:s}}function de(e,t){let s=!1,o=!1,a=0n;if(typeof t=="object"&&"targetNumber"in t)a=t.targetNumber,s=t.isPrime,o=t.isSquare;else{a=BigInt(t);const $=j({n:a.toString()});s=$.primeResult.isPrime,o=$.squareResult.isSquare}const p=e.userIsPrime===s,r=e.userIsSquare===o;let i="both_incorrect",n=!1,d="";const h=s?"CÓ (là số nguyên tố)":"KHÔNG (không phải số nguyên tố)",u=o?"CÓ (là số chính phương)":"KHÔNG (không phải số chính phương)";return p&&r?(i="both_correct",n=!0,d=`🎉 <strong>Chính xác tuyệt đối!</strong> Số ${a.toLocaleString("vi-VN")} ${s?"là số nguyên tố":"không phải số nguyên tố"} và ${o?"là số chính phương":"không phải số chính phương"}. Bạn nắm rất chắc kiến thức!`):p&&!r?(i="prime_correct_only",n=!1,d=`⚠️ <strong>Đúng phần số nguyên tố, nhưng sai phần số chính phương!</strong> Số ${a.toLocaleString("vi-VN")} ${u}. Hãy kiểm tra lại cách kẹp căn bậc hai.`):!p&&r?(i="square_correct_only",n=!1,d=`⚠️ <strong>Đúng phần số chính phương, nhưng sai phần số nguyên tố!</strong> Số ${a.toLocaleString("vi-VN")} ${h}. Hãy thử chia các số nguyên tố tới căn bậc hai.`):(i="both_incorrect",n=!1,d=`❌ <strong>Chưa chính xác ở cả hai tính chất!</strong> Đáp án đúng: Nguyên tố: <strong>${s?"Có":"Không"}</strong> | Chính phương: <strong>${o?"Có":"Không"}</strong>. Bấm nút <em>"Xem lời giải từng bước"</em> bên dưới để xem chi tiết!`),{status:i,isFullCorrect:n,feedbackMessage:d,correctAnswers:{isPrime:s,isSquare:o}}}function V(e){e&&typeof renderMathInElement<"u"&&renderMathInElement(e,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1})}function Y(){const e=document.getElementById("input-number"),t=document.getElementById("btn-check"),s=document.getElementById("calc-error-alert"),o=document.querySelectorAll(".preset-chip"),a=document.getElementById("solution-card"),p=document.getElementById("hero-prime-card"),r=document.getElementById("hero-square-card"),i=document.getElementById("btn-copy-summary"),n=document.getElementById("prime-section-container"),d=document.getElementById("square-section-container"),h=document.getElementById("extended-container"),u=document.getElementById("tab-btn-calc"),$=document.getElementById("tab-btn-practice"),P=document.getElementById("panel-calc"),v=document.getElementById("panel-practice"),x=document.getElementById("practice-lvl-1"),T=document.getElementById("practice-lvl-2"),I=document.getElementById("practice-lvl-3"),q=document.getElementById("practice-problem-latex"),g=document.getElementById("choice-prime-yes"),b=document.getElementById("choice-prime-no"),y=document.getElementById("choice-square-yes"),B=document.getElementById("choice-square-no"),D=document.getElementById("btn-practice-check"),F=document.getElementById("btn-practice-next"),Q=document.getElementById("btn-practice-solution"),C=document.getElementById("practice-feedback-alert"),w=document.getElementById("practice-solution-container");let O=1,M=null,K={userIsPrime:!1,userIsSquare:!1},Z="";function W(l){s&&(s.textContent=l,s.style.display="block"),a&&(a.style.display="none")}function J(){s&&(s.textContent="",s.style.display="none")}function z(){J();const l=e?.value??"";try{const m=j({n:l});ee(m)}catch(m){W(m.message||"Công cụ này chỉ nhận số nguyên. Vui lòng nhập lại.")}}function ee(l){if(!a)return;a.style.display="block",Z=l.copyTextSummary;const m=l.input.absN;l.input.originalString;const H=l.input.isNegative;if(p){const c=l.primeResult;let f="badge-blue",S="Hợp số",k="Nguyên tố: KHÔNG";c.isSpecial?(f="badge-warning",S="Đặc biệt",k="Nguyên tố: KHÔNG"):c.isPrime&&(f="badge-green",S="Số nguyên tố",k="Nguyên tố: CÓ"),p.className=`hero-card card ${c.isPrime?"hero-card-success":""}`,p.innerHTML=`
        <div class="hero-card-header">
          <span class="status-badge ${f}">${S}</span>
          <span class="card-icon">🔢</span>
        </div>
        <h3 class="hero-card-title">${k}</h3>
        <p class="hero-card-desc">${c.conclusionText}</p>
        ${H?`<p class="hero-card-note"><em>${c.specialNote}</em></p>`:""}
      `}if(r){const c=l.squareResult;let f="badge-neutral",S="Không chính phương",k="Chính phương: KHÔNG";c.isSquare&&(f="badge-green",S="Số chính phương",k=`Chính phương: CÓ (= ${c.s}²)`),r.className=`hero-card card ${c.isSquare?"hero-card-success":""}`,r.innerHTML=`
        <div class="hero-card-header">
          <span class="status-badge ${f}">${S}</span>
          <span class="card-icon">📐</span>
        </div>
        <h3 class="hero-card-title">${k}</h3>
        <p class="hero-card-desc">${c.conclusionMethod1}</p>
      `}if(n){const c=l.primeResult;let f="";if(c.isSpecial||c.visibleTrials.length===0)f=`
          <div class="special-note-box alert alert-info">
            <p>ℹ️ <strong>Nhận xét:</strong> ${c.conclusionText}</p>
            <p class="mt-1">${c.verificationStep}</p>
          </div>
        `;else{const S=c.visibleTrials.map(L=>`
            <div class="trial-row ${L.isExact?"trial-exact":""}">
              <span class="trial-math">$$${L.latex}$$</span>
              <span class="trial-badge ${L.isExact?"badge-exact":"badge-rem"}">
                ${L.isExact?"✓ Chia hết (Hợp số)":`dư ${L.remainder}`}
              </span>
            </div>
          `).join(""),k=c.isTruncated?`
            <div class="trial-ellipsis">
              <span class="ellipsis-dots">⋮</span>
              <span class="ellipsis-text">… (Đã ẩn ${c.testedCount-c.visibleTrials.length} phép thử không chia hết) …</span>
            </div>
          `:"";f=`
          <div class="trials-wrapper">
            <div class="trials-threshold-banner">
              <span class="threshold-pill">Ngưỡng căn bậc hai</span>
              <span>$$\\sqrt{${m}} \\approx ${c.sqrtApproximation}$$ — Chỉ cần thử các số nguyên tố không vượt quá $\\lfloor\\sqrt{${m}}\\rfloor = ${c.sqrtInteger}$.</span>
            </div>
            <div class="trials-list">
              ${S}
              ${k}
            </div>
            <div class="trials-summary-bar">
              <strong>Tổng kết phép thử:</strong> Đã thử tất cả <strong>${c.testedCount.toLocaleString("vi-VN")}</strong> số nguyên tố tới $\\sqrt{${m}}$.
            </div>
          </div>
        `}n.innerHTML=`
        <div class="detail-section-card card">
          <div class="section-title-row">
            <span class="section-badge badge-primary">Phần 1</span>
            <h3 class="section-heading">Kiểm tra tính nguyên tố (Phép thử chia liên tiếp)</h3>
          </div>
          ${f}
          <div class="conclusion-box alert alert-success mt-3">
            <strong>📖 Kết luận:</strong> ${c.conclusionText}
          </div>
          <div class="verification-box mt-2">
            <strong>✔️ Thử lại & Đối chiếu:</strong> ${c.verificationStep}
          </div>
        </div>
      `,V(n)}if(d){const c=l.squareResult;let f="";if(H)f=`
          <div class="alert alert-warning">
            <p><strong>Lưu ý số âm:</strong> ${c.specialNote}</p>
          </div>
        `;else if(l.input.isZero||l.input.isOne)f=`
          <div class="alert alert-success">
            <p><strong>Kết luận:</strong> ${c.conclusionMethod1}</p>
            <p class="mt-1">Thử lại: $$${c.verificationStep}$$</p>
          </div>
        `;else{const L=`
          <div class="clamp-component">
            <div class="clamp-label-row">
              <span>Đầu dưới: <strong>${c.s}² = ${c.sSquared}</strong></span>
              <span>Đầu trên: <strong>${c.nextS}² = ${c.nextSSquared}</strong></span>
            </div>
            <div class="clamp-track-wrapper">
              <div class="clamp-track ${c.isSquare?"track-matched":""}">
                <div class="clamp-pin clamp-pin-start">
                  <span class="pin-tick"></span>
                  <span class="pin-text">${c.s}²</span>
                </div>
                <div class="clamp-marker-n ${c.isSquare?"marker-matched":""}" style="left: ${c.clampPercentage}%;">
                  <span class="marker-arrow">▼</span>
                  <span class="marker-dot"></span>
                  <span class="marker-tag">${m} ${c.isSquare?"(Khớp)":""}</span>
                </div>
                <div class="clamp-pin clamp-pin-end">
                  <span class="pin-tick"></span>
                  <span class="pin-text">${c.nextS}²</span>
                </div>
              </div>
            </div>
            <div class="clamp-caption">
              ${c.isSquare?`<span class="text-green font-bold">✓ Điểm ${m} khớp hoàn toàn vào vị trí chính phương ${c.s}² (${c.s} × ${c.s} = ${m}).</span>`:`<span>Số ${m} nằm lọt giữa hai số chính phương liên tiếp ${c.sSquared} và ${c.nextSSquared}.</span>`}
            </div>
          </div>
        `;f=`
          ${c.lastDigitNote?`<div class="last-digit-box alert alert-info mb-3">${c.lastDigitNote}</div>`:""}
          <!-- Cách 1: Kẹp căn bậc hai -->
          <div class="method-subcard">
            <h4 class="method-subtitle">Cách 1 (Chính): Kẹp giữa hai số chính phương liên tiếp</h4>
            <p class="method-desc">
              Lấy phần nguyên của căn bậc hai $s = \\lfloor\\sqrt{${m}}\\rfloor = ${c.s}$, bình phương hai số nguyên liên tiếp $s$ và $s + 1$:
            </p>
            <div class="inequality-math-box">
              $$${c.squeezeInequalityLatex}$$
            </div>
            ${L}
            <div class="conclusion-box alert alert-success mt-2">
              <strong>📖 Kết luận Cách 1:</strong> ${c.conclusionMethod1}
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
                $$${c.factorizationLatex}$$
              </div>
              <p class="mt-2">${c.conclusionMethod2}</p>
            </div>
          </div>

          <!-- Bước Thử lại -->
          <div class="verification-box mt-3">
            <strong>✔️ Thử lại phép tính:</strong> ${c.verificationStep}
          </div>
        `}d.innerHTML=`
        <div class="detail-section-card card">
          <div class="section-title-row">
            <span class="section-badge badge-primary">Phần 2</span>
            <h3 class="section-heading">Kiểm tra tính chính phương (Kẹp căn & Phân tích thừa số)</h3>
          </div>
          ${f}
        </div>
      `,V(d);const S=document.getElementById("btn-toggle-square-m2"),k=document.getElementById("square-method2-content");S?.addEventListener("click",()=>{if(!k)return;const L=k.style.display==="none";k.style.display=L?"block":"none";const X=S.querySelector(".toggle-indicator");X&&(X.textContent=L?"Thu gọn ▲":"Mở rộng ▼")})}if(h){const c=l.extendedInfo;let f="";c.factorizationLine&&(f=`
          <div class="ext-item">
            <span class="ext-label">Phân tích đầy đủ ra thừa số nguyên tố:</span>
            <div class="ext-math">$$${c.factorizationLine}$$</div>
          </div>
        `);let S="";if(c.hasPrimeNeighbors){const k=c.prevPrime?`<strong>${c.prevPrime}</strong>`:"<em>(Không có vì 2 là số nguyên tố nhỏ nhất)</em>",L=c.nextPrime?`<strong>${c.nextPrime}</strong>`:"—";S=`
          <div class="ext-item mt-2">
            <span class="ext-label">Số nguyên tố liền kề ${c.primeNeighborsNote||""}:</span>
            <div class="neighbors-grid">
              <div class="neighbor-card">
                <span class="n-sub">Liền trước:</span>
                <span class="n-val">${k}</span>
              </div>
              <div class="neighbor-card neighbor-card-center">
                <span class="n-sub">Số hiện tại:</span>
                <span class="n-val font-bold">${m}</span>
              </div>
              <div class="neighbor-card">
                <span class="n-sub">Liền sau:</span>
                <span class="n-val">${L}</span>
              </div>
            </div>
          </div>
        `}f||S?(h.innerHTML=`
          <div class="extended-card card">
            <h3 class="extended-title">🔍 Mở rộng & Tính chất lân cận</h3>
            ${f}
            ${S}
          </div>
        `,V(h)):h.innerHTML=""}}o.forEach(l=>{l.addEventListener("click",()=>{const m=l.getAttribute("data-val")||"";e&&(e.value=m,z(),e.focus())})}),t?.addEventListener("click",z),e?.addEventListener("keydown",l=>{l.key==="Enter"&&(l.preventDefault(),z())}),i?.addEventListener("click",()=>{Z&&navigator.clipboard?.writeText(Z).then(()=>{const l=i.innerHTML;i.innerHTML="✓ Đã sao chép kết quả!",i.classList.add("btn-copied"),setTimeout(()=>{i.innerHTML=l,i.classList.remove("btn-copied")},2e3)})}),u?.addEventListener("click",()=>{u.classList.add("active"),$?.classList.remove("active"),P?.classList.remove("hidden"),v?.classList.add("hidden")}),$?.addEventListener("click",()=>{$.classList.add("active"),u?.classList.remove("active"),v?.classList.remove("hidden"),P?.classList.add("hidden"),M||G(O)});function A(l){O=l,[x,T,I].forEach((m,H)=>{H+1===l?m?.classList.add("active"):m?.classList.remove("active")}),G(l)}x?.addEventListener("click",()=>A(1)),T?.addEventListener("click",()=>A(2)),I?.addEventListener("click",()=>A(3));function te(){K={userIsPrime:!1,userIsSquare:!1},g?.classList.remove("selected"),b?.classList.remove("selected"),y?.classList.remove("selected"),B?.classList.remove("selected"),C&&(C.style.display="none",C.innerHTML=""),w&&(w.style.display="none",w.innerHTML="")}function G(l){te(),M=he(l),q&&(q.innerHTML=`$$n = ${M.targetNumber}$$`,V(q))}g?.addEventListener("click",()=>{K.userIsPrime=!0,g.classList.add("selected"),b?.classList.remove("selected")}),b?.addEventListener("click",()=>{K.userIsPrime=!1,b.classList.add("selected"),g?.classList.remove("selected")}),y?.addEventListener("click",()=>{K.userIsSquare=!0,y.classList.add("selected"),B?.classList.remove("selected")}),B?.addEventListener("click",()=>{K.userIsSquare=!1,B.classList.add("selected"),y?.classList.remove("selected")}),D?.addEventListener("click",()=>{if(!M||!C)return;const l=g?.classList.contains("selected")||b?.classList.contains("selected"),m=y?.classList.contains("selected")||B?.classList.contains("selected");if(!l||!m){C.className="practice-feedback alert alert-warning",C.innerHTML="⚠️ Vui lòng chọn cả hai câu trả lời (Nguyên tố: Có/Không VÀ Chính phương: Có/Không) trước khi bấm kiểm tra.",C.style.display="block";return}const H=de(K,M);C.style.display="block",H.isFullCorrect?C.className="practice-feedback alert alert-success":C.className="practice-feedback alert alert-error",C.innerHTML=H.feedbackMessage}),F?.addEventListener("click",()=>{G(O)}),Q?.addEventListener("click",()=>{if(!M||!w)return;const l=j({n:M.targetNumber.toString()});w.style.display="block",w.innerHTML=`
      <div class="practice-sol-card card mt-3">
        <h4 class="sol-title">📖 Lời giải chi tiết cho số ${M.targetNumber}:</h4>
        <div class="sol-body">
          <p><strong>1. Phần kiểm tra nguyên tố:</strong> ${l.primeResult.conclusionText}</p>
          <p class="text-hint">${l.primeResult.verificationStep}</p>
          <p class="mt-2"><strong>2. Phần kiểm tra chính phương:</strong> ${l.squareResult.conclusionMethod1}</p>
          <p class="text-hint">Cách 2: ${l.squareResult.conclusionMethod2}</p>
        </div>
      </div>
    `,V(w)}),document.addEventListener("keydown",l=>{v&&!v.classList.contains("hidden")&&(l.key==="1"?A(1):l.key==="2"?A(2):l.key==="3"?A(3):l.key==="Enter"&&(l.preventDefault(),D?.click()))}),z()}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Y):Y());
