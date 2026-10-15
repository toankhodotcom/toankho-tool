import{a as G,b as nt}from"./factor-engine.C7xMo0mZ.js";const et=[2n,3n,5n,7n],st=[2n,3n,5n,7n,11n,13n],it=[17n,19n,23n,29n,31n],at=[53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n];function O(s){return s[Math.floor(Math.random()*s.length)]}function P(s,i){return Math.floor(Math.random()*(i-s+1))+s}function V(s){const i=[...s];for(let m=i.length-1;m>0;m--){const d=Math.floor(Math.random()*(m+1)),L=i[m];i[m]=i[d],i[d]=L}return i}function ct(s){const i=`practice-pf-${s}-${Date.now()}-${P(100,999)}`;if(s===1){let e=0n,a=[];for(let t=0;t<500;t++){const c=P(1,4),p=V(et),r=p[0],l=p[1],v=p[2];if(c===1?(e=r*l,a=[{prime:r<l?r:l,exponent:1},{prime:r<l?l:r,exponent:1}]):c===2?(e=r*r*l,a=[{prime:r,exponent:2},{prime:l,exponent:1}],a.sort((y,g)=>y.prime<g.prime?-1:1)):c===3?(e=r*l*v,a=[r,l,v].sort((g,f)=>g<f?-1:1).map(g=>({prime:g,exponent:1}))):(e=r*r*r,a=[{prime:r,exponent:3}]),e<=200n&&e>1n)break}(e>200n||e===0n)&&(e=36n,a=[{prime:2n,exponent:2},{prime:3n,exponent:2}]);const $=a.map(t=>t.exponent>1?`${t.prime}^${t.exponent}`:`${t.prime}`).join(" × "),b=a.map(t=>t.exponent>1?`${t.prime}^{${t.exponent}}`:`${t.prime}`).join(" \\times ");return{id:i,level:1,targetNumber:e,n:e,expectedFactors:a,canonicalAnswer:$,expectedCanonical:b,displayLatex:`\\text{Phân tích số: } ${e}`,isPrimeTarget:!1}}if(s===2){let e=0n,a=[];for(let t=0;t<500;t++){const c=P(3,4),p=c===3?P(2,3):P(2,4),r=V(st).slice(0,p),l=new Array(p).fill(1);let v=c-p;for(;v>0;){const f=P(0,p-1);l[f]++,v--}let y=1n;const g=[];for(let f=0;f<p;f++){const E=r[f],N=l[f];let F=1n;for(let T=0;T<N;T++)F*=E;y*=F,g.push({prime:E,exponent:N})}if(y<=5000n&&y>1n){e=y,g.sort((f,E)=>f.prime<E.prime?-1:1),a=g;break}}(e===0n||e>5000n)&&(e=360n,a=[{prime:2n,exponent:3},{prime:3n,exponent:2},{prime:5n,exponent:1}]);const $=a.map(t=>t.exponent>1?`${t.prime}^${t.exponent}`:`${t.prime}`).join(" × "),b=a.map(t=>t.exponent>1?`${t.prime}^{${t.exponent}}`:`${t.prime}`).join(" \\times ");return{id:i,level:2,targetNumber:e,n:e,expectedFactors:a,canonicalAnswer:$,expectedCanonical:b,displayLatex:`\\text{Phân tích số: } ${e}`,isPrimeTarget:!1}}if(Math.random()<.35){const e=O(at);return{id:i,level:3,targetNumber:e,n:e,expectedFactors:[{prime:e,exponent:1}],canonicalAnswer:e.toString(),expectedCanonical:e.toString(),displayLatex:`\\text{Phân tích số: } ${e}`,isPrimeTarget:!0}}let d=0n,L=[];for(let e=0;e<500;e++){const a=P(3,5),$=O(it),b=V([2n,3n,5n,7n]),t=[$,b[0]];a>=4&&Math.random()<.5&&t.push(b[1]);const c=new Array(t.length).fill(1);let p=a-t.length;for(;p>0;){const v=P(1,t.length-1);c[v]++,p--}let r=1n;const l=[];for(let v=0;v<t.length;v++){const y=t[v],g=c[v];let f=1n;for(let E=0;E<g;E++)f*=y;r*=f,l.push({prime:y,exponent:g})}if(r<=100000n&&r>1n){d=r,l.sort((v,y)=>v.prime<y.prime?-1:1),L=l;break}}(d===0n||d>100000n)&&(d=1020n,L=[{prime:2n,exponent:2},{prime:3n,exponent:1},{prime:5n,exponent:1},{prime:17n,exponent:1}]);const h=L.map(e=>e.exponent>1?`${e.prime}^${e.exponent}`:`${e.prime}`).join(" × "),u=L.map(e=>e.exponent>1?`${e.prime}^{${e.exponent}}`:`${e.prime}`).join(" \\times ");return{id:i,level:3,targetNumber:d,n:d,expectedFactors:L,canonicalAnswer:h,expectedCanonical:u,displayLatex:`\\text{Phân tích số: } ${d}`,isPrimeTarget:!1}}function rt(s){if(s<=1n)return!1;if(s<=3n)return!0;if(s%2n===0n||s%3n===0n)return!1;let i=5n,m=2n;for(;i*i<=s;){if(s%i===0n)return!1;i+=m,m=6n-m}return!0}function ot(s,i){if(!i)return{status:"invalid_input",message:'Không tìm thấy bài toán hiện tại. Vui lòng bấm "↻ Đổi bài khác".',isCorrect:!1};const m=(s||"").trim();if(!m)return{status:"invalid_input",message:"Vui lòng nhập đáp án của em trước khi bấm kiểm tra (ví dụ: 2^2 × 3^2 hoặc 2*2*3*3).",isCorrect:!1};const L=m.replace(/[·•.]/g,"×").replace(/[*xX]/g,"×").split("×").map(t=>t.trim()).filter(t=>t.length>0);if(L.length===0)return{status:"invalid_input",message:"Đáp án không hợp lệ. Hãy nhập theo mẫu ví dụ: 2^2 × 3^2 hoặc 2 × 2 × 3 × 3.",isCorrect:!1};const h=[];for(const t of L)if(t.includes("^")){const c=t.split("^").map(l=>l.trim());if(c.length!==2)return{status:"invalid_input",message:`Thừa số "${t}" có cú pháp lũy thừa không hợp lệ. Vui lòng nhập dạng cơ_số^số_mũ (ví dụ: 2^3).`,isCorrect:!1};if(!/^\d+$/.test(c[0])||!/^\d+$/.test(c[1]))return{status:"invalid_input",message:`Thừa số "${t}" chứa ký tự không hợp lệ. Cơ số và số mũ phải là các số nguyên dương.`,isCorrect:!1};const p=BigInt(c[0]),r=parseInt(c[1],10);if(p<=1n||r<=0)return{status:"invalid_input",message:`Thừa số "${t}" có cơ số hoặc số mũ không hợp lệ. Cơ số phải > 1 và số mũ phải ≥ 1.`,isCorrect:!1};h.push({base:p,exponent:r})}else{if(!/^\d+$/.test(t))return{status:"invalid_input",message:`Thừa số "${t}" chứa ký tự không hợp lệ. Vui lòng chỉ nhập số nguyên.`,isCorrect:!1};const c=BigInt(t);if(c<=1n)return{status:"invalid_input",message:`Số ${c} không phải là thừa số nguyên tố hợp lệ (thừa số nguyên tố phải ≥ 2).`,isCorrect:!1};h.push({base:c,exponent:1})}let u=1n;for(const t of h){let c=1n;for(let p=0;p<t.exponent;p++)c*=t.base;u*=c}if(u!==i.targetNumber)return{status:"incorrect_product",message:`Chưa chính xác: Tích các thừa số em nhập nhân lại bằng ${u.toLocaleString("vi-VN")}, trong khi số đề bài yêu cầu là ${i.targetNumber.toLocaleString("vi-VN")}. Em hãy tính toán lại nhé!`,isCorrect:!1,computedProduct:u};if(i.isPrimeTarget&&h.length===1&&h[0].base===i.targetNumber)return{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã nhận biết rất chính xác: ${i.targetNumber} là số nguyên tố nên phân tích ra thừa số nguyên tố là chính nó.`,isCorrect:!0,computedProduct:u};const e=h.filter(t=>!rt(t.base));if(e.length>0){const t=Array.from(new Set(e.map(c=>c.base.toString()))).join(", ");return{status:"composite_factors",message:`Tích các thừa số đã đúng bằng ${i.targetNumber.toLocaleString("vi-VN")}, nhưng trong đáp án vẫn còn thừa số là hợp số (chưa phải là số nguyên tố: ${t}). Em hãy tiếp tục phân tích các số này ra thừa số nguyên tố nhé!`,isCorrect:!1,computedProduct:u}}const a=new Map;for(const t of h)a.set(t.base,(a.get(t.base)||0)+1);const $=Array.from(a.values()).some(t=>t>1),b=h.some(t=>t.exponent===1&&a.get(t.base)>1);return $||b?{status:"correct_expanded",message:"👍 Rất tốt! Em đã tìm đúng tích và toàn bộ các thừa số đều là số nguyên tố. Tuy nhiên, em chưa viết gọn dưới dạng lũy thừa (hãy gộp các thừa số giống nhau thành dạng lũy thừa, ví dụ: thay vì 2×2 hãy viết 2^2) để đạt điểm tối đa nhé!",isCorrect:!1,computedProduct:u}:{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã phân tích đúng ${i.targetNumber.toLocaleString("vi-VN")} ra thừa số nguyên tố và đã gộp lũy thừa hoàn hảo: ${i.canonicalAnswer}.`,isCorrect:!0,computedProduct:u}}function C(s){s&&typeof renderMathInElement<"u"&&renderMathInElement(s,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1})}function U(){const s=document.getElementById("input-number"),i=document.getElementById("btn-factorize"),m=document.getElementById("calc-error-alert"),d=document.getElementById("calc-special-alert"),L=document.querySelectorAll(".preset-chip"),h=document.getElementById("solution-card"),u=document.getElementById("solution-summary-box"),e=document.getElementById("extended-box"),a=document.getElementById("method1-steps-container"),$=document.getElementById("method2-steps-container"),b=document.getElementById("verification-step-container"),t=document.getElementById("btn-copy-solution"),c=document.getElementById("btn-copy-expanded"),p=document.getElementById("btn-toggle-method2"),r=document.getElementById("method2-block"),l=document.getElementById("tab-btn-calc"),v=document.getElementById("tab-btn-practice"),y=document.getElementById("panel-calc"),g=document.getElementById("panel-practice"),f=document.getElementById("practice-lvl-1"),E=document.getElementById("practice-lvl-2"),N=document.getElementById("practice-lvl-3"),F=document.getElementById("practice-problem-latex"),T=document.getElementById("practice-input-answer"),X=document.getElementById("btn-practice-check"),J=document.getElementById("btn-practice-next"),Q=document.getElementById("btn-practice-solution"),M=document.getElementById("practice-feedback-alert"),B=document.getElementById("practice-solution-container");let q=1,H=null,R="",j="";function W(n){m&&(m.textContent=n,m.style.display="block"),d&&(d.style.display="none"),h&&(h.style.display="none")}function z(){m&&(m.textContent="",m.style.display="none")}function Y(n,o){if(z(),d&&(d.innerHTML=`<div class="alert alert-info"><p>ℹ️ ${n}</p></div>`,d.style.display="block"),o&&o.input.isOne&&h){h.style.display="block",u&&(u.className="result-summary-bar alert alert-info",u.innerHTML=`
          <div class="summary-status-row">
            <span class="status-badge badge-blue">Trường hợp đặc biệt</span>
          </div>
          <p class="summary-msg">${o.specialMessage}</p>
        `),e&&(e.innerHTML=`
          <div class="extended-card card">
            <h3 class="extended-title">🔍 Mở rộng & Tính chất các ước</h3>
            <div class="extended-metrics-grid">
              <div class="metric-card">
                <span class="metric-label">Số lượng ước:</span>
                <span class="metric-math">$$d(1) = 1$$</span>
              </div>
              <div class="metric-card">
                <span class="metric-label">Tổng các ước:</span>
                <span class="metric-math">$$\\sigma(1) = 1$$</span>
              </div>
            </div>
            <div class="common-divisors-display">
              <strong>Tập hợp tất cả các ước:</strong>
              <div class="divs-set">$$\\mathcal{U}(1) = \\{ 1 \\}$$</div>
            </div>
          </div>
        `,C(e)),a&&(a.innerHTML='<p class="text-muted">Không áp dụng sơ đồ cột cho số 1.</p>'),r&&(r.style.display="none"),b&&(b.innerHTML="");return}h&&(h.style.display="none")}function A(){z(),d&&(d.style.display="none");const o={n:s?.value??""};try{const x=G(o);if(x.isSpecial){Y(x.specialMessage||"",x);return}Z(x)}catch(x){W(x.message||"Đã xảy ra lỗi trong quá trình phân tích.")}}function Z(n){if(!h)return;h.style.display="block",d&&(d.style.display="none"),R=n.displayResultAscii,j=n.displayExpandedAscii;const o=n.input.originalString,x=n.input.isNegative?'<span class="badge badge-warning" title="Số âm được phân tích theo trị tuyệt đối">Số âm (lấy |n|)</span>':"",D=n.isPrime?'<span class="status-badge badge-green">Số nguyên tố</span>':'<span class="status-badge badge-blue">Hợp số</span>',w=nt(n);if(u){u.className="result-summary-bar alert alert-success";const k=w.mainLatex;u.innerHTML=`
        <div class="summary-status-row">
          ${D}
          <span class="numbers-badge">Số đã xét: $${o}$ ${x}</span>
        </div>
        <div class="summary-values-row">
          <div class="val-box val-box-full">
            <span class="val-label">Kết quả phân tích ra thừa số nguyên tố (dạng lũy thừa):</span>
            <div class="val-math val-math-large">$$${k}$$</div>
          </div>
        </div>
        <p class="summary-caption">
          <strong>Phân loại:</strong> ${n.classificationText}.
          ${n.input.isNegative?"<em>Lưu ý: Số âm được phân tích theo trị tuyệt đối của nó và đặt dấu trừ phía trước kết quả.</em>":""}
        </p>
      `,C(u)}if(e){const k=n.divisorsInfo;let S="";k.isListTruncated?S=`<p class="divs-note">${k.truncationNote}</p>`:S=`
          <div class="common-divisors-display">
            <strong>Tập hợp tất cả các ước nguyên dương:</strong>
            <p>Các ước được sắp xếp tăng dần từ 1 đến ${n.input.absN}:</p>
            <div class="divs-set">$$\\mathcal{U}(${n.input.absN}) = \\{ ${k.divisorsList.join(";\\ ")} \\}$$</div>
            ${n.input.isNegative?'<p class="text-hint"><em>(Với số nguyên âm, tập hợp trên là các ước nguyên dương của |-n|).</em></p>':""}
          </div>
        `;const _=n.specialRemarks.length>0?`
            <div class="special-remarks-box" style="margin-top: 14px; background: #FFF9E6; border: 1px solid #FFE082; padding: 12px 16px; border-radius: 6px;">
              <strong>💡 Nhận xét số học đặc biệt:</strong>
              <ul style="margin: 6px 0 0 16px; padding: 0;">
                ${n.specialRemarks.map(tt=>`<li style="margin-bottom: 4px;">${tt}</li>`).join("")}
              </ul>
            </div>
          `:"";e.innerHTML=`
        <div class="extended-card card">
          <h3 class="extended-title">🔍 Mở rộng & Tính chất các ước</h3>
          <div class="extended-metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Số lượng ước:</span>
              <span class="metric-math">$$d(${n.input.absN}) = ${k.countFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $(k_1 + 1)(k_2 + 1)\\dots$</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Tổng tất cả các ước:</span>
              <span class="metric-math">$$\\sigma(${n.input.absN}) = ${k.sumFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $\\prod (1 + p + \\dots + p^k)$</span>
            </div>
          </div>
          ${S}
          ${_}
        </div>
      `,C(e)}if(a){a.innerHTML="";const S=`
        <div class="column-method-card">
          <p class="step-desc">
            Kẻ đường thẳng đứng, thực hiện phép chia liên tiếp cho số nguyên tố nhỏ nhất có thể (từ $2, 3, 5, 7, \\dots$), viết thương xuống dưới cho tới khi thương bằng $1$:
          </p>

          <div class="column-factor-wrapper">
            <table class="column-factor-table">
              <thead>
                <tr>
                  <th>Số xét & Thương</th>
                  <th>Thừa số nguyên tố</th>
                </tr>
              </thead>
              <tbody>
                ${n.columnSteps.map(_=>`
            <tr>
              <td class="col-dividend">${_.currentDividend}</td>
              <td class="col-divisor">${_.primeDivisor}</td>
            </tr>
          `).join("")}
                <tr class="stop-row">
                  <td class="col-dividend">1</td>
                  <td class="col-divisor stop-mark">— (Dừng)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="method-conclusion-box" style="margin-top: 14px;">
            <p><strong>📖 Đọc kết quả:</strong> Đọc cột bên phải từ trên xuống dưới:</p>
            <div class="step-math">$$${w.method1ExpandedLatex}$$</div>
            <p style="margin-top: 8px;"><strong>Gộp các thừa số giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${w.method1CanonicalLatex}$$</div>
            ${n.input.isNegative?`<p style="margin-top: 6px;"><em>(Lưu ý: Số âm $${o}$ được phân tích theo trị tuyệt đối $|${o}| = ${n.input.absN}$ rồi đặt dấu trừ trước kết quả).</em></p>`:""}
          </div>
        </div>
      `;a.innerHTML=S,C(a)}if(r&&$){r.style.display="block",$.innerHTML="";const k=n.horizontalSteps.map(S=>`<div class="h-step-line">$$${S.expression}$$</div>`).join("");$.innerHTML=`
        <div class="horizontal-method-card">
          <p class="step-desc">
            Tách dần số cần phân tích thành tích của các thừa số, chẻ tiếp các thừa số chưa nguyên tố cho đến khi toàn bộ đều là số nguyên tố:
          </p>
          <div class="h-steps-flow">
            ${k}
          </div>
          <div class="method-conclusion-box" style="margin-top: 12px;">
            <p><strong>Gộp các thừa số nguyên tố giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${w.method2CanonicalLatex}$$</div>
            ${n.input.isNegative?`<p style="margin-top: 6px;"><em>(Lưu ý: Đặt dấu trừ trước tích các thừa số lũy thừa của $|${o}|$).</em></p>`:""}
          </div>
        </div>
      `,C($)}b&&(b.innerHTML=`
        <div class="verification-card card">
          <div class="verification-header">
            <span class="v-icon">✔️</span>
            <h4 style="margin: 0; font-size: 1.05rem; color: #22543D;">Bước Thử lại: Nhân ngược các lũy thừa</h4>
          </div>
          <p class="v-desc" style="margin: 8px 0 4px 0;">${n.verificationExplanation}</p>
          <div class="v-math" style="margin-top: 6px;">$$${n.verificationLatex}$$</div>
        </div>
      `,C(b))}L.forEach(n=>{n.addEventListener("click",()=>{const o=n.getAttribute("data-val")||"";s&&(s.value=o,A(),s.focus())})}),i?.addEventListener("click",A),s?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),A())}),t?.addEventListener("click",()=>{R&&navigator.clipboard?.writeText(R).then(()=>{const n=t.innerHTML;t.innerHTML="✓ Đã sao chép dạng lũy thừa!",setTimeout(()=>{t.innerHTML=n},2e3)})}),c?.addEventListener("click",()=>{j&&navigator.clipboard?.writeText(j).then(()=>{const n=c.innerHTML;c.innerHTML="✓ Đã sao chép dạng mở rộng!",setTimeout(()=>{c.innerHTML=n},2e3)})}),p?.addEventListener("click",()=>{if(!$)return;const n=$.style.display==="none";$.style.display=n?"block":"none",p.textContent=n?"Thu gọn ▲":"Mở rộng ▼"}),l?.addEventListener("click",()=>{l.classList.add("active"),v?.classList.remove("active"),y&&y.classList.remove("hidden"),g&&g.classList.add("hidden")}),v?.addEventListener("click",()=>{v.classList.add("active"),l?.classList.remove("active"),g&&g.classList.remove("hidden"),y&&y.classList.add("hidden"),H||I(1)});function I(n){q=n,H=ct(n),f&&(f.className=n===1?"btn-lvl active":"btn-lvl"),E&&(E.className=n===2?"btn-lvl active":"btn-lvl"),N&&(N.className=n===3?"btn-lvl active":"btn-lvl"),F&&(F.innerHTML=`$$${H.displayLatex}$$`,C(F)),T&&(T.value="",T.focus()),M&&(M.style.display="none",M.innerHTML=""),B&&(B.style.display="none",B.innerHTML="")}f?.addEventListener("click",()=>I(1)),E?.addEventListener("click",()=>I(2)),N?.addEventListener("click",()=>I(3));function K(){const n=T?.value??"",o=ot(n,H);if(M){M.style.display="block";let x="practice-feedback alert ";o.status==="correct_canonical"?x+="alert-success":o.status==="correct_expanded"||o.status==="composite_factors"?x+="alert-warning":x+="alert-error",M.className=x,M.innerHTML=`<p>${o.message}</p>`,C(M)}}X?.addEventListener("click",K),T?.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),K())}),J?.addEventListener("click",()=>{I(q)}),Q?.addEventListener("click",()=>{if(!H)return;const n=H.targetNumber;try{const o=G({n:n.toString()});if(B){B.style.display="block";const x=o.columnSteps.map(w=>`
              <tr>
                <td style="padding: 4px 12px; border-right: 2px solid var(--color-gold); font-weight: 600;">${w.currentDividend}</td>
                <td style="padding: 4px 12px; color: var(--color-navy); font-weight: 700;">${w.primeDivisor}</td>
              </tr>
            `).join(""),D=o.horizontalSteps.map(w=>`<div>$$${w.expression}$$</div>`).join("");B.innerHTML=`
          <div class="practice-sol-card card" style="margin-top: 16px; background: #FAFBFD; border: 1px solid #E2E8F0; padding: 16px;">
            <h4 style="margin-top: 0; color: var(--color-navy);">📖 Lời giải chi tiết bài luyện tập:</h4>
            
            <p><strong>Cách 1: Sơ đồ cột:</strong></p>
            <div style="display: inline-block; background: #FFFFFF; border: 1px solid #CBD5E0; border-radius: 4px; padding: 8px 16px; margin: 6px 0 12px 0;">
              <table style="text-align: right; border-collapse: collapse;">
                <tbody>
                  ${x}
                  <tr style="background: #F0FFF4;">
                    <td style="padding: 4px 12px; border-right: 2px solid var(--color-gold); font-weight: 600;">1</td>
                    <td style="padding: 4px 12px; color: #2E7D32; font-weight: 700;">— (Dừng)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style="margin-top: 10px;"><strong>Cách 2: Tách dần dạng ngang:</strong></p>
            <div style="margin: 4px 0 10px 0;">${D}</div>

            <p class="practice-sol-final" style="margin-top: 14px; font-weight: 600; color: #1B365D;">
              <strong>Đáp số chuẩn:</strong> $$${n} = ${o.canonicalLatex}$$
            </p>
          </div>
        `,C(B)}}catch(o){alert("Không thể tạo lời giải: "+o.message)}}),document.addEventListener("keydown",n=>{g&&!g.classList.contains("hidden")&&document.activeElement!==T&&(n.key==="1"?I(1):n.key==="2"?I(2):n.key==="3"&&I(3))}),s&&s.value&&A()}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U):U());
