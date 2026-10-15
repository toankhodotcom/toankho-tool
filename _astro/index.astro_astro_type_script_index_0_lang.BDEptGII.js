function en(a){if(a.n===void 0||a.n===null)throw new Error("Vui lòng nhập một số nguyên để phân tích.");const t=String(a.n).trim();if(t==="")throw new Error("Vui lòng nhập một số nguyên để phân tích.");if(t.includes(",")||t.includes(".")||t.includes("/"))throw new Error("Vui lòng nhập một số nguyên. Không chấp nhận số thập phân hoặc phân số.");if(!/^-?\d+$/.test(t))throw new Error("Vui lòng nhập một số nguyên hợp lệ.");if((t.startsWith("-")?t.slice(1):t).length>12)throw new Error("Số nhập vào vượt quá giới hạn 12 chữ số (tối đa 1.000.000.000.000).");let c;try{c=BigInt(t)}catch{throw new Error("Vui lòng nhập một số nguyên hợp lệ.")}const h=c===0n,l=c<0n,p=l?-c:c;return{originalString:t,originalSign:h?0:l?-1:1,absN:p,isNegative:l,isZero:h,isOne:p===1n}}function sn(a){if(a<=1n)return[];const t=[];let e=a;for(const p of[2n,3n,5n])if(e%p===0n){let i=0;for(;e%p===0n;)i++,e/=p;t.push({prime:p,exponent:i})}const c=[4n,2n,4n,2n,4n,6n,2n,6n];let h=7n,l=0;for(;h*h<=e;){if(e%h===0n){let p=0;for(;e%h===0n;)p++,e/=h;t.push({prime:h,exponent:p})}h+=c[l],l=l+1&7}return e>1n&&t.push({prime:e,exponent:1}),t}function z(a,t){if(t===0n)return{count:0n,countFormulaLatex:"0",sum:0n,sumFormulaLatex:"0",divisorsList:[],divisors:[],isListTruncated:!1,isTruncated:!1};if(t===1n)return{count:1n,countFormulaLatex:"1",sum:1n,sumFormulaLatex:"1",divisorsList:[1n],divisors:[1n],isListTruncated:!1,isTruncated:!1};let e=1n;const c=[];for(const d of a)e*=BigInt(d.exponent+1),c.push(`(${d.exponent} + 1)`);const h=`${c.join(" \\times ")} = ${e}`;let l=1n;const p=[];for(const d of a){let n=0n,r=1n;const u=[];for(let m=0;m<=d.exponent;m++)n+=r,u.push(r.toString()),m<d.exponent&&(r*=d.prime);l*=n,p.push(`(${u.join(" + ")})`)}const i=`${p.join(" \\times ")} = ${l}`;let o=[1n];for(const d of a){const n=[];let r=1n;for(let m=0;m<=d.exponent;m++)n.push(r),m<d.exponent&&(r*=d.prime);const u=[];for(const m of o)for(const f of n)u.push(m*f);o=u}o.sort((d,n)=>d<n?-1:d>n?1:0);const g=e>100n;return{count:e,countFormulaLatex:h,sum:l,sumFormulaLatex:i,divisorsList:g?[]:o,divisors:g?[]:o,isListTruncated:g,isTruncated:g,truncationNote:g?`Số này có tới ${e.toLocaleString("vi-VN")} ước nên trang chỉ nêu số lượng, không liệt kê hết.`:void 0}}function an(a){const t={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return a.toString().split("").map(e=>t[e]||e).join("")}function Z(a,t){const e=[];let c=t;for(const h of a)for(let l=0;l<h.exponent;l++){const p=c/h.prime;e.push({currentDividend:c,primeDivisor:h.prime,nextQuotient:p,quotient:p}),c=p}return e}function cn(a,t,e,c,h){const l=[];if(e)l.push({stepIndex:1,expression:`${t} = ${t}`,latex:`${t}`});else{const p=h||Z(a,t);let i=t;const o=[];let g=1;for(let n=0;n<p.length-1;n++){const r=p[n];o.push(r.primeDivisor),i=r.nextQuotient;const u=[...o,i].join(" \\times ");l.push({stepIndex:g++,expression:`${t} = ${u}`,latex:u})}const d=a.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");l.push({stepIndex:g++,expression:`${t} = ${c}`,latex:d})}return l}function on(a,t,e){const c=[],h=a.length>0&&a.every(d=>d.exponent%2===0);let l;if(h){let d=1n;for(const n of a){let r=1n;for(let u=0;u<n.exponent/2;u++)r*=n.prime;d*=r}l=d,c.push(`✨ <strong>Số chính phương:</strong> Vì tất cả các số mũ trong dạng phân tích đều là số chẵn nên $${t}$ là số chính phương ($${t} = ${l}^2$). Do đó số lượng ước của $${t}$ luôn là một số lẻ ($${e}$ ước).`)}const p=a.length>0&&a.every(d=>d.exponent%3===0);let i;if(p){let d=1n;for(const n of a){let r=1n;for(let u=0;u<n.exponent/3;u++)r*=n.prime;d*=r}i=d,c.push(`🧊 <strong>Số lập phương:</strong> Vì tất cả các số mũ đều chia hết cho 3 nên $${t}$ là số lập phương ($${t} = ${i}^3$).`)}const o=a.length===1&&a[0].prime===2n&&a[0].exponent>1,g=o?a[0].exponent:void 0;return o&&c.push(`⚡ <strong>Lũy thừa của 2:</strong> $${t}$ là một lũy thừa thuần túy của 2 ($${t} = 2^{${g}}$).`),{messages:c,isSquare:h,squareRoot:l,isCube:p,cubeRoot:i,isPowerOfTwo:o,powerOfTwoExp:g}}function U(a){const t=en(a);if(t.isZero){const $=[];return $.isSquare=!1,$.isCube=!1,$.isPowerOfTwo=!1,{input:t,isNegative:t.isNegative,isPrime:!1,isComposite:!1,isSpecial:!0,isSpecialOne:!1,specialMessage:"Số 0 không phân tích ra thừa số nguyên tố được. Hãy nhập một số nguyên khác 0.",factors:[],canonicalLatex:"",expandedLatex:"",displayResultString:"0",displayResultAscii:"0",displayExpandedAscii:"0",classificationText:"Số 0 (không phải số nguyên tố, không phải hợp số)",columnSteps:[],horizontalSteps:[],verificationLatex:"",verificationStep:"",verificationExplanation:"Số 0 không phân tích ra thừa số nguyên tố.",divisorsInfo:z([],0n),specialRemarks:$}}if(t.isOne){const $=t.isNegative?"-1":"1",k=[];return k.isSquare=!0,k.squareRoot=1n,k.isCube=!0,k.cubeRoot=1n,k.isPowerOfTwo=!1,{input:t,isNegative:t.isNegative,isPrime:!1,isComposite:!1,isSpecial:!0,isSpecialOne:!0,specialMessage:"1 không phải là số nguyên tố cũng không phải là hợp số. Số 1 không có thừa số nguyên tố nào.",factors:[],canonicalLatex:"",expandedLatex:"",displayResultString:`${$}`,displayResultAscii:`${$}`,displayExpandedAscii:`${$}`,classificationText:`${$} (không phải số nguyên tố, không phải hợp số)`,columnSteps:[],horizontalSteps:[],verificationLatex:"",verificationStep:"",verificationExplanation:"1 không có thừa số nguyên tố.",divisorsInfo:z([],1n),specialRemarks:k}}const e=t.absN,c=sn(e),h=c.length===1&&c[0].exponent===1,l=!h,p=c.map($=>$.exponent>1?`${$.prime}^{${$.exponent}}`:`${$.prime}`);let i=p.join(" \\times ");const o=[];c.forEach($=>{for(let k=0;k<$.exponent;k++)o.push($.prime.toString())});let g=o.join(" \\times ");t.isNegative&&(i=`-(${i})`,g=`-(${g})`);const n=c.map($=>$.exponent>1?`${$.prime}${an($.exponent)}`:`${$.prime}`).join(" × "),r=t.isNegative?`−${e} = −(${n})`:`${e} = ${n}`,u=c.map($=>$.exponent>1?`${$.prime}^${$.exponent}`:`${$.prime}`),m=t.isNegative?`-${e} = -(${u.join(" × ")})`:`${e} = ${u.join(" × ")}`,f=t.isNegative?`-${e} = -(${o.join(" × ")})`:`${e} = ${o.join(" × ")}`,b=h?`${e} là số nguyên tố`:`${e} là hợp số`,L=Z(c,e),v=cn(c,e,h,t.isNegative?o.join(" \\times "):g,L);let x="",S="",P="";if(h)x=`${e} = ${e} \\quad (\\text{Chính xác 100\\%})`,S=`${e} = ${e}`,P=`Vì ${e} là số nguyên tố nên kết quả phân tích là chính nó.`;else{const $=[];for(const C of c){let H=1n;for(let B=0;B<C.exponent;B++)H*=C.prime;$.push(H.toString())}const k=$.join(" \\times "),N=p.join(" \\times ");t.isNegative?(x=`-(${N}) = -(${k}) = -${e} \\quad (\\text{Chính xác 100\\%})`,S=`-(${N}) = -(${k}) = -${e}`,P=`Nhân ngược các lũy thừa để kiểm tra lại: lấy tích các lũy thừa rồi đặt dấu trừ phía trước, kết quả bằng đúng số ban đầu $-${e}$.`):(x=`${N} = ${k} = ${e} \\quad (\\text{Chính xác 100\\%})`,S=`${N} = ${k} = ${e}`,P=`Nhân ngược các lũy thừa để kiểm tra lại: ${N} = ${k} = ${e}, kết quả bằng đúng số ban đầu.`)}const I=z(c,e),E=on(c,e,I.count),M=[...E.messages];return M.isSquare=E.isSquare,M.squareRoot=E.squareRoot,M.isCube=E.isCube,M.cubeRoot=E.cubeRoot,M.isPowerOfTwo=E.isPowerOfTwo,M.powerOfTwoExp=E.powerOfTwoExp,{input:t,isNegative:t.isNegative,isPrime:h,isComposite:l,isSpecial:!1,isSpecialOne:!1,factors:c,canonicalLatex:i,expandedLatex:g,displayResultString:r,displayResultAscii:m,displayExpandedAscii:f,classificationText:b,columnSteps:L,horizontalSteps:v,verificationLatex:x,verificationStep:S,verificationExplanation:P,divisorsInfo:I,specialRemarks:M}}const rn=[2n,3n,5n,7n],ln=[2n,3n,5n,7n,11n,13n],pn=[17n,19n,23n,29n,31n],dn=[53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n];function X(a){return a[Math.floor(Math.random()*a.length)]}function j(a,t){return Math.floor(Math.random()*(t-a+1))+a}function K(a){const t=[...a];for(let e=t.length-1;e>0;e--){const c=Math.floor(Math.random()*(e+1)),h=t[e];t[e]=t[c],t[c]=h}return t}function mn(a){const t=`practice-pf-${a}-${Date.now()}-${j(100,999)}`;if(a===1){let i=0n,o=[];for(let n=0;n<500;n++){const r=j(1,4),u=K(rn),m=u[0],f=u[1],b=u[2];if(r===1?(i=m*f,o=[{prime:m<f?m:f,exponent:1},{prime:m<f?f:m,exponent:1}]):r===2?(i=m*m*f,o=[{prime:m,exponent:2},{prime:f,exponent:1}],o.sort((L,v)=>L.prime<v.prime?-1:1)):r===3?(i=m*f*b,o=[m,f,b].sort((v,x)=>v<x?-1:1).map(v=>({prime:v,exponent:1}))):(i=m*m*m,o=[{prime:m,exponent:3}]),i<=200n&&i>1n)break}(i>200n||i===0n)&&(i=36n,o=[{prime:2n,exponent:2},{prime:3n,exponent:2}]);const g=o.map(n=>n.exponent>1?`${n.prime}^${n.exponent}`:`${n.prime}`).join(" × "),d=o.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");return{id:t,level:1,targetNumber:i,n:i,expectedFactors:o,canonicalAnswer:g,expectedCanonical:d,displayLatex:`\\text{Phân tích số: } ${i}`,isPrimeTarget:!1}}if(a===2){let i=0n,o=[];for(let n=0;n<500;n++){const r=j(3,4),u=r===3?j(2,3):j(2,4),m=K(ln).slice(0,u),f=new Array(u).fill(1);let b=r-u;for(;b>0;){const x=j(0,u-1);f[x]++,b--}let L=1n;const v=[];for(let x=0;x<u;x++){const S=m[x],P=f[x];let I=1n;for(let E=0;E<P;E++)I*=S;L*=I,v.push({prime:S,exponent:P})}if(L<=5000n&&L>1n){i=L,v.sort((x,S)=>x.prime<S.prime?-1:1),o=v;break}}(i===0n||i>5000n)&&(i=360n,o=[{prime:2n,exponent:3},{prime:3n,exponent:2},{prime:5n,exponent:1}]);const g=o.map(n=>n.exponent>1?`${n.prime}^${n.exponent}`:`${n.prime}`).join(" × "),d=o.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");return{id:t,level:2,targetNumber:i,n:i,expectedFactors:o,canonicalAnswer:g,expectedCanonical:d,displayLatex:`\\text{Phân tích số: } ${i}`,isPrimeTarget:!1}}if(Math.random()<.35){const i=X(dn);return{id:t,level:3,targetNumber:i,n:i,expectedFactors:[{prime:i,exponent:1}],canonicalAnswer:i.toString(),expectedCanonical:i.toString(),displayLatex:`\\text{Phân tích số: } ${i}`,isPrimeTarget:!0}}let c=0n,h=[];for(let i=0;i<500;i++){const o=j(3,5),g=X(pn),d=K([2n,3n,5n,7n]),n=[g,d[0]];o>=4&&Math.random()<.5&&n.push(d[1]);const r=new Array(n.length).fill(1);let u=o-n.length;for(;u>0;){const b=j(1,n.length-1);r[b]++,u--}let m=1n;const f=[];for(let b=0;b<n.length;b++){const L=n[b],v=r[b];let x=1n;for(let S=0;S<v;S++)x*=L;m*=x,f.push({prime:L,exponent:v})}if(m<=100000n&&m>1n){c=m,f.sort((b,L)=>b.prime<L.prime?-1:1),h=f;break}}(c===0n||c>100000n)&&(c=1020n,h=[{prime:2n,exponent:2},{prime:3n,exponent:1},{prime:5n,exponent:1},{prime:17n,exponent:1}]);const l=h.map(i=>i.exponent>1?`${i.prime}^${i.exponent}`:`${i.prime}`).join(" × "),p=h.map(i=>i.exponent>1?`${i.prime}^{${i.exponent}}`:`${i.prime}`).join(" \\times ");return{id:t,level:3,targetNumber:c,n:c,expectedFactors:h,canonicalAnswer:l,expectedCanonical:p,displayLatex:`\\text{Phân tích số: } ${c}`,isPrimeTarget:!1}}function hn(a){if(a<=1n)return!1;if(a<=3n)return!0;if(a%2n===0n||a%3n===0n)return!1;let t=5n,e=2n;for(;t*t<=a;){if(a%t===0n)return!1;t+=e,e=6n-e}return!0}function un(a,t){if(!t)return{status:"invalid_input",message:'Không tìm thấy bài toán hiện tại. Vui lòng bấm "↻ Đổi bài khác".',isCorrect:!1};const e=(a||"").trim();if(!e)return{status:"invalid_input",message:"Vui lòng nhập đáp án của em trước khi bấm kiểm tra (ví dụ: 2^2 × 3^2 hoặc 2*2*3*3).",isCorrect:!1};const h=e.replace(/[·•.]/g,"×").replace(/[*xX]/g,"×").split("×").map(n=>n.trim()).filter(n=>n.length>0);if(h.length===0)return{status:"invalid_input",message:"Đáp án không hợp lệ. Hãy nhập theo mẫu ví dụ: 2^2 × 3^2 hoặc 2 × 2 × 3 × 3.",isCorrect:!1};const l=[];for(const n of h)if(n.includes("^")){const r=n.split("^").map(f=>f.trim());if(r.length!==2)return{status:"invalid_input",message:`Thừa số "${n}" có cú pháp lũy thừa không hợp lệ. Vui lòng nhập dạng cơ_số^số_mũ (ví dụ: 2^3).`,isCorrect:!1};if(!/^\d+$/.test(r[0])||!/^\d+$/.test(r[1]))return{status:"invalid_input",message:`Thừa số "${n}" chứa ký tự không hợp lệ. Cơ số và số mũ phải là các số nguyên dương.`,isCorrect:!1};const u=BigInt(r[0]),m=parseInt(r[1],10);if(u<=1n||m<=0)return{status:"invalid_input",message:`Thừa số "${n}" có cơ số hoặc số mũ không hợp lệ. Cơ số phải > 1 và số mũ phải ≥ 1.`,isCorrect:!1};l.push({base:u,exponent:m})}else{if(!/^\d+$/.test(n))return{status:"invalid_input",message:`Thừa số "${n}" chứa ký tự không hợp lệ. Vui lòng chỉ nhập số nguyên.`,isCorrect:!1};const r=BigInt(n);if(r<=1n)return{status:"invalid_input",message:`Số ${r} không phải là thừa số nguyên tố hợp lệ (thừa số nguyên tố phải ≥ 2).`,isCorrect:!1};l.push({base:r,exponent:1})}let p=1n;for(const n of l){let r=1n;for(let u=0;u<n.exponent;u++)r*=n.base;p*=r}if(p!==t.targetNumber)return{status:"incorrect_product",message:`Chưa chính xác: Tích các thừa số em nhập nhân lại bằng ${p.toLocaleString("vi-VN")}, trong khi số đề bài yêu cầu là ${t.targetNumber.toLocaleString("vi-VN")}. Em hãy tính toán lại nhé!`,isCorrect:!1,computedProduct:p};if(t.isPrimeTarget&&l.length===1&&l[0].base===t.targetNumber)return{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã nhận biết rất chính xác: ${t.targetNumber} là số nguyên tố nên phân tích ra thừa số nguyên tố là chính nó.`,isCorrect:!0,computedProduct:p};const i=l.filter(n=>!hn(n.base));if(i.length>0){const n=Array.from(new Set(i.map(r=>r.base.toString()))).join(", ");return{status:"composite_factors",message:`Tích các thừa số đã đúng bằng ${t.targetNumber.toLocaleString("vi-VN")}, nhưng trong đáp án vẫn còn thừa số là hợp số (chưa phải là số nguyên tố: ${n}). Em hãy tiếp tục phân tích các số này ra thừa số nguyên tố nhé!`,isCorrect:!1,computedProduct:p}}const o=new Map;for(const n of l)o.set(n.base,(o.get(n.base)||0)+1);const g=Array.from(o.values()).some(n=>n>1),d=l.some(n=>n.exponent===1&&o.get(n.base)>1);return g||d?{status:"correct_expanded",message:"👍 Rất tốt! Em đã tìm đúng tích và toàn bộ các thừa số đều là số nguyên tố. Tuy nhiên, em chưa viết gọn dưới dạng lũy thừa (hãy gộp các thừa số giống nhau thành dạng lũy thừa, ví dụ: thay vì 2×2 hãy viết 2^2) để đạt điểm tối đa nhé!",isCorrect:!1,computedProduct:p}:{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã phân tích đúng ${t.targetNumber.toLocaleString("vi-VN")} ra thừa số nguyên tố và đã gộp lũy thừa hoàn hảo: ${t.canonicalAnswer}.`,isCorrect:!0,computedProduct:p}}function F(a){a&&typeof renderMathInElement<"u"&&renderMathInElement(a,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1})}function W(){const a=document.getElementById("input-number"),t=document.getElementById("btn-factorize"),e=document.getElementById("calc-error-alert"),c=document.getElementById("calc-special-alert"),h=document.querySelectorAll(".preset-chip"),l=document.getElementById("solution-card"),p=document.getElementById("solution-summary-box"),i=document.getElementById("extended-box"),o=document.getElementById("method1-steps-container"),g=document.getElementById("method2-steps-container"),d=document.getElementById("verification-step-container"),n=document.getElementById("btn-copy-solution"),r=document.getElementById("btn-copy-expanded"),u=document.getElementById("btn-toggle-method2"),m=document.getElementById("method2-block"),f=document.getElementById("tab-btn-calc"),b=document.getElementById("tab-btn-practice"),L=document.getElementById("panel-calc"),v=document.getElementById("panel-practice"),x=document.getElementById("practice-lvl-1"),S=document.getElementById("practice-lvl-2"),P=document.getElementById("practice-lvl-3"),I=document.getElementById("practice-problem-latex"),E=document.getElementById("practice-input-answer"),M=document.getElementById("btn-practice-check"),$=document.getElementById("btn-practice-next"),k=document.getElementById("btn-practice-solution"),N=document.getElementById("practice-feedback-alert"),C=document.getElementById("practice-solution-container");let H=1,B=null,_="",q="";function J(s){e&&(e.textContent=s,e.style.display="block"),c&&(c.style.display="none"),l&&(l.style.display="none")}function G(){e&&(e.textContent="",e.style.display="none")}function Y(s,y){if(G(),c&&(c.innerHTML=`<div class="alert alert-info"><p>ℹ️ ${s}</p></div>`,c.style.display="block"),y&&y.input.isOne&&l){l.style.display="block",p&&(p.className="result-summary-bar alert alert-info",p.innerHTML=`
          <div class="summary-status-row">
            <span class="status-badge badge-blue">Trường hợp đặc biệt</span>
          </div>
          <p class="summary-msg">${y.specialMessage}</p>
        `),i&&(i.innerHTML=`
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
        `,F(i)),o&&(o.innerHTML='<p class="text-muted">Không áp dụng sơ đồ cột cho số 1.</p>'),m&&(m.style.display="none"),d&&(d.innerHTML="");return}l&&(l.style.display="none")}function V(){G(),c&&(c.style.display="none");const y={n:a?.value??""};try{const w=U(y);if(w.isSpecial){Y(w.specialMessage||"",w);return}nn(w)}catch(w){J(w.message||"Đã xảy ra lỗi trong quá trình phân tích.")}}function nn(s){if(!l)return;l.style.display="block",c&&(c.style.display="none"),_=s.displayResultAscii,q=s.displayExpandedAscii;const y=s.input.originalString,w=s.input.isNegative?'<span class="badge badge-warning" title="Số âm được phân tích theo trị tuyệt đối">Số âm (lấy |n|)</span>':"",O=s.isPrime?'<span class="status-badge badge-green">Số nguyên tố</span>':'<span class="status-badge badge-blue">Hợp số</span>';if(p){p.className="result-summary-bar alert alert-success";const T=s.input.isNegative?`-${s.input.absN} = -(${s.canonicalLatex})`:`${s.input.absN} = ${s.canonicalLatex}`;p.innerHTML=`
        <div class="summary-status-row">
          ${O}
          <span class="numbers-badge">Số đã xét: $${y}$ ${w}</span>
        </div>
        <div class="summary-values-row">
          <div class="val-box val-box-full">
            <span class="val-label">Kết quả phân tích ra thừa số nguyên tố (dạng lũy thừa):</span>
            <div class="val-math val-math-large">$$${T}$$</div>
          </div>
        </div>
        <p class="summary-caption">
          <strong>Phân loại:</strong> ${s.classificationText}.
          ${s.input.isNegative?"<em>Lưu ý: Số âm được phân tích theo trị tuyệt đối của nó và đặt dấu trừ phía trước kết quả.</em>":""}
        </p>
      `,F(p)}if(i){const T=s.divisorsInfo;let A="";T.isListTruncated?A=`<p class="divs-note">${T.truncationNote}</p>`:A=`
          <div class="common-divisors-display">
            <strong>Tập hợp tất cả các ước nguyên dương:</strong>
            <p>Các ước được sắp xếp tăng dần từ 1 đến ${s.input.absN}:</p>
            <div class="divs-set">$$\\mathcal{U}(${s.input.absN}) = \\{ ${T.divisorsList.join(";\\ ")} \\}$$</div>
            ${s.input.isNegative?'<p class="text-hint"><em>(Với số nguyên âm, tập hợp trên là các ước nguyên dương của |-n|).</em></p>':""}
          </div>
        `;const D=s.specialRemarks.length>0?`
            <div class="special-remarks-box" style="margin-top: 14px; background: #FFF9E6; border: 1px solid #FFE082; padding: 12px 16px; border-radius: 6px;">
              <strong>💡 Nhận xét số học đặc biệt:</strong>
              <ul style="margin: 6px 0 0 16px; padding: 0;">
                ${s.specialRemarks.map(tn=>`<li style="margin-bottom: 4px;">${tn}</li>`).join("")}
              </ul>
            </div>
          `:"";i.innerHTML=`
        <div class="extended-card card">
          <h3 class="extended-title">🔍 Mở rộng & Tính chất các ước</h3>
          <div class="extended-metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Số lượng ước:</span>
              <span class="metric-math">$$d(${s.input.absN}) = ${T.countFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $(k_1 + 1)(k_2 + 1)\\dots$</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Tổng tất cả các ước:</span>
              <span class="metric-math">$$\\sigma(${s.input.absN}) = ${T.sumFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $\\prod (1 + p + \\dots + p^k)$</span>
            </div>
          </div>
          ${A}
          ${D}
        </div>
      `,F(i)}if(o){o.innerHTML="";const A=`
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
                ${s.columnSteps.map(D=>`
            <tr>
              <td class="col-dividend">${D.currentDividend}</td>
              <td class="col-divisor">${D.primeDivisor}</td>
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
            <div class="step-math">$$${s.input.absN} = ${s.expandedLatex}$$</div>
            <p style="margin-top: 8px;"><strong>Gộp các thừa số giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${s.input.absN} = ${s.canonicalLatex}$$</div>
            ${s.input.isNegative?`<p style="margin-top: 6px;"><em>Do số ban đầu là số âm nên: $${y} = -(${s.canonicalLatex})$.</em></p>`:""}
          </div>
        </div>
      `;o.innerHTML=A,F(o)}if(m&&g){m.style.display="block",g.innerHTML="";const T=s.horizontalSteps.map(A=>`<div class="h-step-line">$$${A.expression}$$</div>`).join("");g.innerHTML=`
        <div class="horizontal-method-card">
          <p class="step-desc">
            Tách dần số cần phân tích thành tích của các thừa số, chẻ tiếp các thừa số chưa nguyên tố cho đến khi toàn bộ đều là số nguyên tố:
          </p>
          <div class="h-steps-flow">
            ${T}
          </div>
          <div class="method-conclusion-box" style="margin-top: 12px;">
            <p><strong>Gộp các thừa số nguyên tố giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${s.input.absN} = ${s.canonicalLatex}$$</div>
          </div>
        </div>
      `,F(g)}d&&(d.innerHTML=`
        <div class="verification-card card">
          <div class="verification-header">
            <span class="v-icon">✔️</span>
            <h4 style="margin: 0; font-size: 1.05rem; color: #22543D;">Bước Thử lại: Nhân ngược các lũy thừa</h4>
          </div>
          <p class="v-desc" style="margin: 8px 0 4px 0;">${s.verificationExplanation}</p>
          <div class="v-math" style="margin-top: 6px;">$$${s.verificationLatex}$$</div>
        </div>
      `,F(d))}h.forEach(s=>{s.addEventListener("click",()=>{const y=s.getAttribute("data-val")||"";a&&(a.value=y,V(),a.focus())})}),t?.addEventListener("click",V),a?.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),V())}),n?.addEventListener("click",()=>{_&&navigator.clipboard?.writeText(_).then(()=>{const s=n.innerHTML;n.innerHTML="✓ Đã sao chép dạng lũy thừa!",setTimeout(()=>{n.innerHTML=s},2e3)})}),r?.addEventListener("click",()=>{q&&navigator.clipboard?.writeText(q).then(()=>{const s=r.innerHTML;r.innerHTML="✓ Đã sao chép dạng mở rộng!",setTimeout(()=>{r.innerHTML=s},2e3)})}),u?.addEventListener("click",()=>{if(!g)return;const s=g.style.display==="none";g.style.display=s?"block":"none",u.textContent=s?"Thu gọn ▲":"Mở rộng ▼"}),f?.addEventListener("click",()=>{f.classList.add("active"),b?.classList.remove("active"),L&&L.classList.remove("hidden"),v&&v.classList.add("hidden")}),b?.addEventListener("click",()=>{b.classList.add("active"),f?.classList.remove("active"),v&&v.classList.remove("hidden"),L&&L.classList.add("hidden"),B||R(1)});function R(s){H=s,B=mn(s),x&&(x.className=s===1?"btn-lvl active":"btn-lvl"),S&&(S.className=s===2?"btn-lvl active":"btn-lvl"),P&&(P.className=s===3?"btn-lvl active":"btn-lvl"),I&&(I.innerHTML=`$$${B.displayLatex}$$`,F(I)),E&&(E.value="",E.focus()),N&&(N.style.display="none",N.innerHTML=""),C&&(C.style.display="none",C.innerHTML="")}x?.addEventListener("click",()=>R(1)),S?.addEventListener("click",()=>R(2)),P?.addEventListener("click",()=>R(3));function Q(){const s=E?.value??"",y=un(s,B);if(N){N.style.display="block";let w="practice-feedback alert ";y.status==="correct_canonical"?w+="alert-success":y.status==="correct_expanded"||y.status==="composite_factors"?w+="alert-warning":w+="alert-error",N.className=w,N.innerHTML=`<p>${y.message}</p>`,F(N)}}M?.addEventListener("click",Q),E?.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),Q())}),$?.addEventListener("click",()=>{R(H)}),k?.addEventListener("click",()=>{if(!B)return;const s=B.targetNumber;try{const y=U({n:s.toString()});if(C){C.style.display="block";const w=y.columnSteps.map(T=>`
              <tr>
                <td style="padding: 4px 12px; border-right: 2px solid var(--color-gold); font-weight: 600;">${T.currentDividend}</td>
                <td style="padding: 4px 12px; color: var(--color-navy); font-weight: 700;">${T.primeDivisor}</td>
              </tr>
            `).join(""),O=y.horizontalSteps.map(T=>`<div>$$${T.expression}$$</div>`).join("");C.innerHTML=`
          <div class="practice-sol-card card" style="margin-top: 16px; background: #FAFBFD; border: 1px solid #E2E8F0; padding: 16px;">
            <h4 style="margin-top: 0; color: var(--color-navy);">📖 Lời giải chi tiết bài luyện tập:</h4>
            
            <p><strong>Cách 1: Sơ đồ cột:</strong></p>
            <div style="display: inline-block; background: #FFFFFF; border: 1px solid #CBD5E0; border-radius: 4px; padding: 8px 16px; margin: 6px 0 12px 0;">
              <table style="text-align: right; border-collapse: collapse;">
                <tbody>
                  ${w}
                  <tr style="background: #F0FFF4;">
                    <td style="padding: 4px 12px; border-right: 2px solid var(--color-gold); font-weight: 600;">1</td>
                    <td style="padding: 4px 12px; color: #2E7D32; font-weight: 700;">— (Dừng)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style="margin-top: 10px;"><strong>Cách 2: Tách dần dạng ngang:</strong></p>
            <div style="margin: 4px 0 10px 0;">${O}</div>

            <p class="practice-sol-final" style="margin-top: 14px; font-weight: 600; color: #1B365D;">
              <strong>Đáp số chuẩn:</strong> $$${s} = ${y.canonicalLatex}$$
            </p>
          </div>
        `,F(C)}}catch(y){alert("Không thể tạo lời giải: "+y.message)}}),document.addEventListener("keydown",s=>{v&&!v.classList.contains("hidden")&&document.activeElement!==E&&(s.key==="1"?R(1):s.key==="2"?R(2):s.key==="3"&&R(3))}),a&&a.value&&V()}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",W):W());
