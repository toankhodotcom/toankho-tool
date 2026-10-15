function it(e){if(e.n===void 0||e.n===null)throw new Error("Vui lòng nhập một số nguyên để phân tích.");const t=String(e.n).trim();if(t==="")throw new Error("Vui lòng nhập một số nguyên để phân tích.");if(t.includes(",")||t.includes(".")||t.includes("/"))throw new Error("Vui lòng nhập một số nguyên. Không chấp nhận số thập phân hoặc phân số.");if(!/^-?\d+$/.test(t))throw new Error("Vui lòng nhập một số nguyên hợp lệ.");if((t.startsWith("-")?t.slice(1):t).length>12)throw new Error("Số nhập vào vượt quá giới hạn 12 chữ số (tối đa 1.000.000.000.000).");let c;try{c=BigInt(t)}catch{throw new Error("Vui lòng nhập một số nguyên hợp lệ.")}const h=c===0n,l=c<0n,p=l?-c:c;return{originalString:t,originalSign:h?0:l?-1:1,absN:p,isNegative:l,isZero:h,isOne:p===1n}}function st(e){if(e<=1n)return[];const t=[];let i=e;for(const p of[2n,3n,5n])if(i%p===0n){let s=0;for(;i%p===0n;)s++,i/=p;t.push({prime:p,exponent:s})}const c=[4n,2n,4n,2n,4n,6n,2n,6n];let h=7n,l=0;for(;h*h<=i;){if(i%h===0n){let p=0;for(;i%h===0n;)p++,i/=h;t.push({prime:h,exponent:p})}h+=c[l],l=l+1&7}return i>1n&&t.push({prime:i,exponent:1}),t}function K(e,t){if(t===0n)return{count:0n,countFormulaLatex:"0",sum:0n,sumFormulaLatex:"0",divisorsList:[],divisors:[],isListTruncated:!1,isTruncated:!1};if(t===1n)return{count:1n,countFormulaLatex:"1",sum:1n,sumFormulaLatex:"1",divisorsList:[1n],divisors:[1n],isListTruncated:!1,isTruncated:!1};let i=1n;const c=[];for(const d of e)i*=BigInt(d.exponent+1),c.push(`(${d.exponent} + 1)`);const h=`${c.join(" \\times ")} = ${i}`;let l=1n;const p=[];for(const d of e){let n=0n,r=1n;const u=[];for(let m=0;m<=d.exponent;m++)n+=r,u.push(r.toString()),m<d.exponent&&(r*=d.prime);l*=n,p.push(`(${u.join(" + ")})`)}const s=`${p.join(" \\times ")} = ${l}`;let o=[1n];for(const d of e){const n=[];let r=1n;for(let m=0;m<=d.exponent;m++)n.push(r),m<d.exponent&&(r*=d.prime);const u=[];for(const m of o)for(const f of n)u.push(m*f);o=u}o.sort((d,n)=>d<n?-1:d>n?1:0);const g=i>100n;return{count:i,countFormulaLatex:h,sum:l,sumFormulaLatex:s,divisorsList:g?[]:o,divisors:g?[]:o,isListTruncated:g,isTruncated:g,truncationNote:g?`Số này có tới ${i.toLocaleString("vi-VN")} ước nên trang chỉ nêu số lượng, không liệt kê hết.`:void 0}}function at(e){const t={0:"⁰",1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"};return e.toString().split("").map(i=>t[i]||i).join("")}function J(e,t){const i=[];let c=t;for(const h of e)for(let l=0;l<h.exponent;l++){const p=c/h.prime;i.push({currentDividend:c,primeDivisor:h.prime,nextQuotient:p,quotient:p}),c=p}return i}function ct(e,t,i,c,h){const l=[];if(i)l.push({stepIndex:1,expression:`${t} = ${t}`,latex:`${t}`});else{const p=h||J(e,t);let s=t;const o=[];let g=1;for(let n=0;n<p.length-1;n++){const r=p[n];o.push(r.primeDivisor),s=r.nextQuotient;const u=[...o,s].join(" \\times ");l.push({stepIndex:g++,expression:`${t} = ${u}`,latex:u})}const d=e.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");l.push({stepIndex:g++,expression:`${t} = ${c}`,latex:d})}return l}function ot(e,t,i){const c=[],h=e.length>0&&e.every(d=>d.exponent%2===0);let l;if(h){let d=1n;for(const n of e){let r=1n;for(let u=0;u<n.exponent/2;u++)r*=n.prime;d*=r}l=d,c.push(`✨ <strong>Số chính phương:</strong> Vì tất cả các số mũ trong dạng phân tích đều là số chẵn nên $${t}$ là số chính phương ($${t} = ${l}^2$). Do đó số lượng ước của $${t}$ luôn là một số lẻ ($${i}$ ước).`)}const p=e.length>0&&e.every(d=>d.exponent%3===0);let s;if(p){let d=1n;for(const n of e){let r=1n;for(let u=0;u<n.exponent/3;u++)r*=n.prime;d*=r}s=d,c.push(`🧊 <strong>Số lập phương:</strong> Vì tất cả các số mũ đều chia hết cho 3 nên $${t}$ là số lập phương ($${t} = ${s}^3$).`)}const o=e.length===1&&e[0].prime===2n&&e[0].exponent>1,g=o?e[0].exponent:void 0;return o&&c.push(`⚡ <strong>Lũy thừa của 2:</strong> $${t}$ là một lũy thừa thuần túy của 2 ($${t} = 2^{${g}}$).`),{messages:c,isSquare:h,squareRoot:l,isCube:p,cubeRoot:s,isPowerOfTwo:o,powerOfTwoExp:g}}function X(e){const t=it(e);if(t.isZero){const $=[];return $.isSquare=!1,$.isCube=!1,$.isPowerOfTwo=!1,{input:t,isNegative:t.isNegative,isPrime:!1,isComposite:!1,isSpecial:!0,isSpecialOne:!1,specialMessage:"Số 0 không phân tích ra thừa số nguyên tố được. Hãy nhập một số nguyên khác 0.",factors:[],canonicalLatex:"",expandedLatex:"",displayResultString:"0",displayResultAscii:"0",displayExpandedAscii:"0",classificationText:"Số 0 (không phải số nguyên tố, không phải hợp số)",columnSteps:[],horizontalSteps:[],verificationLatex:"",verificationStep:"",verificationExplanation:"Số 0 không phân tích ra thừa số nguyên tố.",divisorsInfo:K([],0n),specialRemarks:$}}if(t.isOne){const $=t.isNegative?"-1":"1",k=[];return k.isSquare=!0,k.squareRoot=1n,k.isCube=!0,k.cubeRoot=1n,k.isPowerOfTwo=!1,{input:t,isNegative:t.isNegative,isPrime:!1,isComposite:!1,isSpecial:!0,isSpecialOne:!0,specialMessage:"1 không phải là số nguyên tố cũng không phải là hợp số. Số 1 không có thừa số nguyên tố nào.",factors:[],canonicalLatex:"",expandedLatex:"",displayResultString:`${$}`,displayResultAscii:`${$}`,displayExpandedAscii:`${$}`,classificationText:`${$} (không phải số nguyên tố, không phải hợp số)`,columnSteps:[],horizontalSteps:[],verificationLatex:"",verificationStep:"",verificationExplanation:"1 không có thừa số nguyên tố.",divisorsInfo:K([],1n),specialRemarks:k}}const i=t.absN,c=st(i),h=c.length===1&&c[0].exponent===1,l=!h,p=c.map($=>$.exponent>1?`${$.prime}^{${$.exponent}}`:`${$.prime}`);let s=p.join(" \\times ");const o=[];c.forEach($=>{for(let k=0;k<$.exponent;k++)o.push($.prime.toString())});let g=o.join(" \\times ");t.isNegative&&(s=`-(${s})`,g=`-(${g})`);const n=c.map($=>$.exponent>1?`${$.prime}${at($.exponent)}`:`${$.prime}`).join(" × "),r=t.isNegative?`−${i} = −(${n})`:`${i} = ${n}`,u=c.map($=>$.exponent>1?`${$.prime}^${$.exponent}`:`${$.prime}`),m=t.isNegative?`-${i} = -${u.join(" × ")}`:`${i} = ${u.join(" × ")}`,f=t.isNegative?`-${i} = -${o.join(" × ")}`:`${i} = ${o.join(" × ")}`,b=h?`${i} là số nguyên tố`:`${i} là hợp số`,L=J(c,i),y=ct(c,i,h,t.isNegative?o.join(" \\times "):g,L);let v="",S="",C="";if(h)v=`${i} = ${i} \\quad (\\text{Chính xác 100\\%})`,S=`${i} = ${i}`,C=`Vì ${i} là số nguyên tố nên kết quả phân tích là chính nó.`;else{const $=[];for(const N of c){let V=1n;for(let B=0;B<N.exponent;B++)V*=N.prime;$.push(V.toString())}const k=$.join(" \\times "),T=p.join(" \\times ");t.isNegative?(v=`-(${T}) = -(${k}) = -${i} \\quad (\\text{Chính xác 100\\%})`,S=`-(${T}) = -(${k}) = -${i}`,C=`Nhân ngược các lũy thừa để kiểm tra lại: lấy tích các lũy thừa rồi đặt dấu trừ phía trước, kết quả bằng đúng số ban đầu $-${i}$.`):(v=`${T} = ${k} = ${i} \\quad (\\text{Chính xác 100\\%})`,S=`${T} = ${k} = ${i}`,C=`Nhân ngược các lũy thừa để kiểm tra lại: ${T} = ${k} = ${i}, kết quả bằng đúng số ban đầu.`)}const I=K(c,i),E=ot(c,i,I.count),M=[...E.messages];return M.isSquare=E.isSquare,M.squareRoot=E.squareRoot,M.isCube=E.isCube,M.cubeRoot=E.cubeRoot,M.isPowerOfTwo=E.isPowerOfTwo,M.powerOfTwoExp=E.powerOfTwoExp,{input:t,isNegative:t.isNegative,isPrime:h,isComposite:l,isSpecial:!1,isSpecialOne:!1,factors:c,canonicalLatex:s,expandedLatex:g,displayResultString:r,displayResultAscii:m,displayExpandedAscii:f,classificationText:b,columnSteps:L,horizontalSteps:y,verificationLatex:v,verificationStep:S,verificationExplanation:C,divisorsInfo:I,specialRemarks:M}}function rt(e){const t=e.input.isNegative?`-${e.input.absN}`:`${e.input.absN}`;return{signedN:t,mainLatex:`${t} = ${e.canonicalLatex}`,method1ExpandedLatex:`${t} = ${e.expandedLatex}`,method1CanonicalLatex:`${t} = ${e.canonicalLatex}`,method2CanonicalLatex:`${t} = ${e.canonicalLatex}`,verificationLatex:e.verificationLatex,displayResultString:e.displayResultString,copyAscii:e.displayResultAscii,copyExpandedAscii:e.displayExpandedAscii}}const lt=[2n,3n,5n,7n],pt=[2n,3n,5n,7n,11n,13n],dt=[17n,19n,23n,29n,31n],mt=[53n,59n,61n,67n,71n,73n,79n,83n,89n,97n,101n,103n,107n,109n,113n,127n,131n,137n,139n,149n,151n,157n,163n,167n,173n,179n,181n,191n,193n,197n,199n,211n,223n,227n,229n,233n,239n,241n,251n,257n,263n,269n,271n,277n,281n,283n,293n,307n,311n,313n,317n,331n,337n,347n,349n,353n,359n,367n,373n,379n,383n,389n,397n,401n,409n,419n,421n,431n,433n,439n,443n,449n,457n,461n,463n,467n,479n,487n,491n,499n];function W(e){return e[Math.floor(Math.random()*e.length)]}function j(e,t){return Math.floor(Math.random()*(t-e+1))+e}function G(e){const t=[...e];for(let i=t.length-1;i>0;i--){const c=Math.floor(Math.random()*(i+1)),h=t[i];t[i]=t[c],t[c]=h}return t}function ht(e){const t=`practice-pf-${e}-${Date.now()}-${j(100,999)}`;if(e===1){let s=0n,o=[];for(let n=0;n<500;n++){const r=j(1,4),u=G(lt),m=u[0],f=u[1],b=u[2];if(r===1?(s=m*f,o=[{prime:m<f?m:f,exponent:1},{prime:m<f?f:m,exponent:1}]):r===2?(s=m*m*f,o=[{prime:m,exponent:2},{prime:f,exponent:1}],o.sort((L,y)=>L.prime<y.prime?-1:1)):r===3?(s=m*f*b,o=[m,f,b].sort((y,v)=>y<v?-1:1).map(y=>({prime:y,exponent:1}))):(s=m*m*m,o=[{prime:m,exponent:3}]),s<=200n&&s>1n)break}(s>200n||s===0n)&&(s=36n,o=[{prime:2n,exponent:2},{prime:3n,exponent:2}]);const g=o.map(n=>n.exponent>1?`${n.prime}^${n.exponent}`:`${n.prime}`).join(" × "),d=o.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");return{id:t,level:1,targetNumber:s,n:s,expectedFactors:o,canonicalAnswer:g,expectedCanonical:d,displayLatex:`\\text{Phân tích số: } ${s}`,isPrimeTarget:!1}}if(e===2){let s=0n,o=[];for(let n=0;n<500;n++){const r=j(3,4),u=r===3?j(2,3):j(2,4),m=G(pt).slice(0,u),f=new Array(u).fill(1);let b=r-u;for(;b>0;){const v=j(0,u-1);f[v]++,b--}let L=1n;const y=[];for(let v=0;v<u;v++){const S=m[v],C=f[v];let I=1n;for(let E=0;E<C;E++)I*=S;L*=I,y.push({prime:S,exponent:C})}if(L<=5000n&&L>1n){s=L,y.sort((v,S)=>v.prime<S.prime?-1:1),o=y;break}}(s===0n||s>5000n)&&(s=360n,o=[{prime:2n,exponent:3},{prime:3n,exponent:2},{prime:5n,exponent:1}]);const g=o.map(n=>n.exponent>1?`${n.prime}^${n.exponent}`:`${n.prime}`).join(" × "),d=o.map(n=>n.exponent>1?`${n.prime}^{${n.exponent}}`:`${n.prime}`).join(" \\times ");return{id:t,level:2,targetNumber:s,n:s,expectedFactors:o,canonicalAnswer:g,expectedCanonical:d,displayLatex:`\\text{Phân tích số: } ${s}`,isPrimeTarget:!1}}if(Math.random()<.35){const s=W(mt);return{id:t,level:3,targetNumber:s,n:s,expectedFactors:[{prime:s,exponent:1}],canonicalAnswer:s.toString(),expectedCanonical:s.toString(),displayLatex:`\\text{Phân tích số: } ${s}`,isPrimeTarget:!0}}let c=0n,h=[];for(let s=0;s<500;s++){const o=j(3,5),g=W(dt),d=G([2n,3n,5n,7n]),n=[g,d[0]];o>=4&&Math.random()<.5&&n.push(d[1]);const r=new Array(n.length).fill(1);let u=o-n.length;for(;u>0;){const b=j(1,n.length-1);r[b]++,u--}let m=1n;const f=[];for(let b=0;b<n.length;b++){const L=n[b],y=r[b];let v=1n;for(let S=0;S<y;S++)v*=L;m*=v,f.push({prime:L,exponent:y})}if(m<=100000n&&m>1n){c=m,f.sort((b,L)=>b.prime<L.prime?-1:1),h=f;break}}(c===0n||c>100000n)&&(c=1020n,h=[{prime:2n,exponent:2},{prime:3n,exponent:1},{prime:5n,exponent:1},{prime:17n,exponent:1}]);const l=h.map(s=>s.exponent>1?`${s.prime}^${s.exponent}`:`${s.prime}`).join(" × "),p=h.map(s=>s.exponent>1?`${s.prime}^{${s.exponent}}`:`${s.prime}`).join(" \\times ");return{id:t,level:3,targetNumber:c,n:c,expectedFactors:h,canonicalAnswer:l,expectedCanonical:p,displayLatex:`\\text{Phân tích số: } ${c}`,isPrimeTarget:!1}}function ut(e){if(e<=1n)return!1;if(e<=3n)return!0;if(e%2n===0n||e%3n===0n)return!1;let t=5n,i=2n;for(;t*t<=e;){if(e%t===0n)return!1;t+=i,i=6n-i}return!0}function gt(e,t){if(!t)return{status:"invalid_input",message:'Không tìm thấy bài toán hiện tại. Vui lòng bấm "↻ Đổi bài khác".',isCorrect:!1};const i=(e||"").trim();if(!i)return{status:"invalid_input",message:"Vui lòng nhập đáp án của em trước khi bấm kiểm tra (ví dụ: 2^2 × 3^2 hoặc 2*2*3*3).",isCorrect:!1};const h=i.replace(/[·•.]/g,"×").replace(/[*xX]/g,"×").split("×").map(n=>n.trim()).filter(n=>n.length>0);if(h.length===0)return{status:"invalid_input",message:"Đáp án không hợp lệ. Hãy nhập theo mẫu ví dụ: 2^2 × 3^2 hoặc 2 × 2 × 3 × 3.",isCorrect:!1};const l=[];for(const n of h)if(n.includes("^")){const r=n.split("^").map(f=>f.trim());if(r.length!==2)return{status:"invalid_input",message:`Thừa số "${n}" có cú pháp lũy thừa không hợp lệ. Vui lòng nhập dạng cơ_số^số_mũ (ví dụ: 2^3).`,isCorrect:!1};if(!/^\d+$/.test(r[0])||!/^\d+$/.test(r[1]))return{status:"invalid_input",message:`Thừa số "${n}" chứa ký tự không hợp lệ. Cơ số và số mũ phải là các số nguyên dương.`,isCorrect:!1};const u=BigInt(r[0]),m=parseInt(r[1],10);if(u<=1n||m<=0)return{status:"invalid_input",message:`Thừa số "${n}" có cơ số hoặc số mũ không hợp lệ. Cơ số phải > 1 và số mũ phải ≥ 1.`,isCorrect:!1};l.push({base:u,exponent:m})}else{if(!/^\d+$/.test(n))return{status:"invalid_input",message:`Thừa số "${n}" chứa ký tự không hợp lệ. Vui lòng chỉ nhập số nguyên.`,isCorrect:!1};const r=BigInt(n);if(r<=1n)return{status:"invalid_input",message:`Số ${r} không phải là thừa số nguyên tố hợp lệ (thừa số nguyên tố phải ≥ 2).`,isCorrect:!1};l.push({base:r,exponent:1})}let p=1n;for(const n of l){let r=1n;for(let u=0;u<n.exponent;u++)r*=n.base;p*=r}if(p!==t.targetNumber)return{status:"incorrect_product",message:`Chưa chính xác: Tích các thừa số em nhập nhân lại bằng ${p.toLocaleString("vi-VN")}, trong khi số đề bài yêu cầu là ${t.targetNumber.toLocaleString("vi-VN")}. Em hãy tính toán lại nhé!`,isCorrect:!1,computedProduct:p};if(t.isPrimeTarget&&l.length===1&&l[0].base===t.targetNumber)return{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã nhận biết rất chính xác: ${t.targetNumber} là số nguyên tố nên phân tích ra thừa số nguyên tố là chính nó.`,isCorrect:!0,computedProduct:p};const s=l.filter(n=>!ut(n.base));if(s.length>0){const n=Array.from(new Set(s.map(r=>r.base.toString()))).join(", ");return{status:"composite_factors",message:`Tích các thừa số đã đúng bằng ${t.targetNumber.toLocaleString("vi-VN")}, nhưng trong đáp án vẫn còn thừa số là hợp số (chưa phải là số nguyên tố: ${n}). Em hãy tiếp tục phân tích các số này ra thừa số nguyên tố nhé!`,isCorrect:!1,computedProduct:p}}const o=new Map;for(const n of l)o.set(n.base,(o.get(n.base)||0)+1);const g=Array.from(o.values()).some(n=>n>1),d=l.some(n=>n.exponent===1&&o.get(n.base)>1);return g||d?{status:"correct_expanded",message:"👍 Rất tốt! Em đã tìm đúng tích và toàn bộ các thừa số đều là số nguyên tố. Tuy nhiên, em chưa viết gọn dưới dạng lũy thừa (hãy gộp các thừa số giống nhau thành dạng lũy thừa, ví dụ: thay vì 2×2 hãy viết 2^2) để đạt điểm tối đa nhé!",isCorrect:!1,computedProduct:p}:{status:"correct_canonical",message:`🎉 Xuất sắc! Em đã phân tích đúng ${t.targetNumber.toLocaleString("vi-VN")} ra thừa số nguyên tố và đã gộp lũy thừa hoàn hảo: ${t.canonicalAnswer}.`,isCorrect:!0,computedProduct:p}}function R(e){e&&typeof renderMathInElement<"u"&&renderMathInElement(e,{delimiters:[{left:"$$",right:"$$",display:!0},{left:"$",right:"$",display:!1}],throwOnError:!1})}function Z(){const e=document.getElementById("input-number"),t=document.getElementById("btn-factorize"),i=document.getElementById("calc-error-alert"),c=document.getElementById("calc-special-alert"),h=document.querySelectorAll(".preset-chip"),l=document.getElementById("solution-card"),p=document.getElementById("solution-summary-box"),s=document.getElementById("extended-box"),o=document.getElementById("method1-steps-container"),g=document.getElementById("method2-steps-container"),d=document.getElementById("verification-step-container"),n=document.getElementById("btn-copy-solution"),r=document.getElementById("btn-copy-expanded"),u=document.getElementById("btn-toggle-method2"),m=document.getElementById("method2-block"),f=document.getElementById("tab-btn-calc"),b=document.getElementById("tab-btn-practice"),L=document.getElementById("panel-calc"),y=document.getElementById("panel-practice"),v=document.getElementById("practice-lvl-1"),S=document.getElementById("practice-lvl-2"),C=document.getElementById("practice-lvl-3"),I=document.getElementById("practice-problem-latex"),E=document.getElementById("practice-input-answer"),M=document.getElementById("btn-practice-check"),$=document.getElementById("btn-practice-next"),k=document.getElementById("btn-practice-solution"),T=document.getElementById("practice-feedback-alert"),N=document.getElementById("practice-solution-container");let V=1,B=null,_="",O="";function Y(a){i&&(i.textContent=a,i.style.display="block"),c&&(c.style.display="none"),l&&(l.style.display="none")}function Q(){i&&(i.textContent="",i.style.display="none")}function tt(a,x){if(Q(),c&&(c.innerHTML=`<div class="alert alert-info"><p>ℹ️ ${a}</p></div>`,c.style.display="block"),x&&x.input.isOne&&l){l.style.display="block",p&&(p.className="result-summary-bar alert alert-info",p.innerHTML=`
          <div class="summary-status-row">
            <span class="status-badge badge-blue">Trường hợp đặc biệt</span>
          </div>
          <p class="summary-msg">${x.specialMessage}</p>
        `),s&&(s.innerHTML=`
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
        `,R(s)),o&&(o.innerHTML='<p class="text-muted">Không áp dụng sơ đồ cột cho số 1.</p>'),m&&(m.style.display="none"),d&&(d.innerHTML="");return}l&&(l.style.display="none")}function q(){Q(),c&&(c.style.display="none");const x={n:e?.value??""};try{const w=X(x);if(w.isSpecial){tt(w.specialMessage||"",w);return}nt(w)}catch(w){Y(w.message||"Đã xảy ra lỗi trong quá trình phân tích.")}}function nt(a){if(!l)return;l.style.display="block",c&&(c.style.display="none"),_=a.displayResultAscii,O=a.displayExpandedAscii;const x=a.input.originalString,w=a.input.isNegative?'<span class="badge badge-warning" title="Số âm được phân tích theo trị tuyệt đối">Số âm (lấy |n|)</span>':"",z=a.isPrime?'<span class="status-badge badge-green">Số nguyên tố</span>':'<span class="status-badge badge-blue">Hợp số</span>',F=rt(a);if(p){p.className="result-summary-bar alert alert-success";const P=F.mainLatex;p.innerHTML=`
        <div class="summary-status-row">
          ${z}
          <span class="numbers-badge">Số đã xét: $${x}$ ${w}</span>
        </div>
        <div class="summary-values-row">
          <div class="val-box val-box-full">
            <span class="val-label">Kết quả phân tích ra thừa số nguyên tố (dạng lũy thừa):</span>
            <div class="val-math val-math-large">$$${P}$$</div>
          </div>
        </div>
        <p class="summary-caption">
          <strong>Phân loại:</strong> ${a.classificationText}.
          ${a.input.isNegative?"<em>Lưu ý: Số âm được phân tích theo trị tuyệt đối của nó và đặt dấu trừ phía trước kết quả.</em>":""}
        </p>
      `,R(p)}if(s){const P=a.divisorsInfo;let H="";P.isListTruncated?H=`<p class="divs-note">${P.truncationNote}</p>`:H=`
          <div class="common-divisors-display">
            <strong>Tập hợp tất cả các ước nguyên dương:</strong>
            <p>Các ước được sắp xếp tăng dần từ 1 đến ${a.input.absN}:</p>
            <div class="divs-set">$$\\mathcal{U}(${a.input.absN}) = \\{ ${P.divisorsList.join(";\\ ")} \\}$$</div>
            ${a.input.isNegative?'<p class="text-hint"><em>(Với số nguyên âm, tập hợp trên là các ước nguyên dương của |-n|).</em></p>':""}
          </div>
        `;const D=a.specialRemarks.length>0?`
            <div class="special-remarks-box" style="margin-top: 14px; background: #FFF9E6; border: 1px solid #FFE082; padding: 12px 16px; border-radius: 6px;">
              <strong>💡 Nhận xét số học đặc biệt:</strong>
              <ul style="margin: 6px 0 0 16px; padding: 0;">
                ${a.specialRemarks.map(et=>`<li style="margin-bottom: 4px;">${et}</li>`).join("")}
              </ul>
            </div>
          `:"";s.innerHTML=`
        <div class="extended-card card">
          <h3 class="extended-title">🔍 Mở rộng & Tính chất các ước</h3>
          <div class="extended-metrics-grid">
            <div class="metric-card">
              <span class="metric-label">Số lượng ước:</span>
              <span class="metric-math">$$d(${a.input.absN}) = ${P.countFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $(k_1 + 1)(k_2 + 1)\\dots$</span>
            </div>
            <div class="metric-card">
              <span class="metric-label">Tổng tất cả các ước:</span>
              <span class="metric-math">$$\\sigma(${a.input.absN}) = ${P.sumFormulaLatex}$$</span>
              <span class="metric-desc">Công thức: $\\prod (1 + p + \\dots + p^k)$</span>
            </div>
          </div>
          ${H}
          ${D}
        </div>
      `,R(s)}if(o){o.innerHTML="";const H=`
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
                ${a.columnSteps.map(D=>`
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
            <div class="step-math">$$${F.method1ExpandedLatex}$$</div>
            <p style="margin-top: 8px;"><strong>Gộp các thừa số giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${F.method1CanonicalLatex}$$</div>
            ${a.input.isNegative?`<p style="margin-top: 6px;"><em>(Lưu ý: Số âm $${x}$ được phân tích theo trị tuyệt đối $|${x}| = ${a.input.absN}$ rồi đặt dấu trừ trước kết quả).</em></p>`:""}
          </div>
        </div>
      `;o.innerHTML=H,R(o)}if(m&&g){m.style.display="block",g.innerHTML="";const P=a.horizontalSteps.map(H=>`<div class="h-step-line">$$${H.expression}$$</div>`).join("");g.innerHTML=`
        <div class="horizontal-method-card">
          <p class="step-desc">
            Tách dần số cần phân tích thành tích của các thừa số, chẻ tiếp các thừa số chưa nguyên tố cho đến khi toàn bộ đều là số nguyên tố:
          </p>
          <div class="h-steps-flow">
            ${P}
          </div>
          <div class="method-conclusion-box" style="margin-top: 12px;">
            <p><strong>Gộp các thừa số nguyên tố giống nhau thành lũy thừa:</strong></p>
            <div class="step-math">$$${F.method2CanonicalLatex}$$</div>
            ${a.input.isNegative?`<p style="margin-top: 6px;"><em>(Lưu ý: Đặt dấu trừ trước tích các thừa số lũy thừa của $|${x}|$).</em></p>`:""}
          </div>
        </div>
      `,R(g)}d&&(d.innerHTML=`
        <div class="verification-card card">
          <div class="verification-header">
            <span class="v-icon">✔️</span>
            <h4 style="margin: 0; font-size: 1.05rem; color: #22543D;">Bước Thử lại: Nhân ngược các lũy thừa</h4>
          </div>
          <p class="v-desc" style="margin: 8px 0 4px 0;">${a.verificationExplanation}</p>
          <div class="v-math" style="margin-top: 6px;">$$${a.verificationLatex}$$</div>
        </div>
      `,R(d))}h.forEach(a=>{a.addEventListener("click",()=>{const x=a.getAttribute("data-val")||"";e&&(e.value=x,q(),e.focus())})}),t?.addEventListener("click",q),e?.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),q())}),n?.addEventListener("click",()=>{_&&navigator.clipboard?.writeText(_).then(()=>{const a=n.innerHTML;n.innerHTML="✓ Đã sao chép dạng lũy thừa!",setTimeout(()=>{n.innerHTML=a},2e3)})}),r?.addEventListener("click",()=>{O&&navigator.clipboard?.writeText(O).then(()=>{const a=r.innerHTML;r.innerHTML="✓ Đã sao chép dạng mở rộng!",setTimeout(()=>{r.innerHTML=a},2e3)})}),u?.addEventListener("click",()=>{if(!g)return;const a=g.style.display==="none";g.style.display=a?"block":"none",u.textContent=a?"Thu gọn ▲":"Mở rộng ▼"}),f?.addEventListener("click",()=>{f.classList.add("active"),b?.classList.remove("active"),L&&L.classList.remove("hidden"),y&&y.classList.add("hidden")}),b?.addEventListener("click",()=>{b.classList.add("active"),f?.classList.remove("active"),y&&y.classList.remove("hidden"),L&&L.classList.add("hidden"),B||A(1)});function A(a){V=a,B=ht(a),v&&(v.className=a===1?"btn-lvl active":"btn-lvl"),S&&(S.className=a===2?"btn-lvl active":"btn-lvl"),C&&(C.className=a===3?"btn-lvl active":"btn-lvl"),I&&(I.innerHTML=`$$${B.displayLatex}$$`,R(I)),E&&(E.value="",E.focus()),T&&(T.style.display="none",T.innerHTML=""),N&&(N.style.display="none",N.innerHTML="")}v?.addEventListener("click",()=>A(1)),S?.addEventListener("click",()=>A(2)),C?.addEventListener("click",()=>A(3));function U(){const a=E?.value??"",x=gt(a,B);if(T){T.style.display="block";let w="practice-feedback alert ";x.status==="correct_canonical"?w+="alert-success":x.status==="correct_expanded"||x.status==="composite_factors"?w+="alert-warning":w+="alert-error",T.className=w,T.innerHTML=`<p>${x.message}</p>`,R(T)}}M?.addEventListener("click",U),E?.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),U())}),$?.addEventListener("click",()=>{A(V)}),k?.addEventListener("click",()=>{if(!B)return;const a=B.targetNumber;try{const x=X({n:a.toString()});if(N){N.style.display="block";const w=x.columnSteps.map(F=>`
              <tr>
                <td style="padding: 4px 12px; border-right: 2px solid var(--color-gold); font-weight: 600;">${F.currentDividend}</td>
                <td style="padding: 4px 12px; color: var(--color-navy); font-weight: 700;">${F.primeDivisor}</td>
              </tr>
            `).join(""),z=x.horizontalSteps.map(F=>`<div>$$${F.expression}$$</div>`).join("");N.innerHTML=`
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
            <div style="margin: 4px 0 10px 0;">${z}</div>

            <p class="practice-sol-final" style="margin-top: 14px; font-weight: 600; color: #1B365D;">
              <strong>Đáp số chuẩn:</strong> $$${a} = ${x.canonicalLatex}$$
            </p>
          </div>
        `,R(N)}}catch(x){alert("Không thể tạo lời giải: "+x.message)}}),document.addEventListener("keydown",a=>{y&&!y.classList.contains("hidden")&&document.activeElement!==E&&(a.key==="1"?A(1):a.key==="2"?A(2):a.key==="3"&&A(3))}),e&&e.value&&q()}typeof document<"u"&&(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Z):Z());
