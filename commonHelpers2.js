import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();const i=document.querySelector('input[name="delay"]').value,o=document.querySelector('input[name="state"]:checked').value;r(i,o).then(t=>{s.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topRight"})}).catch(t=>{s.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topRight"})})});function r(e,i){return new Promise((o,t)=>{setTimeout(()=>{i==="fulfilled"?o(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map