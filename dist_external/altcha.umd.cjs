(function(O,D){typeof exports=="object"&&typeof module<"u"?D(exports):typeof define=="function"&&define.amd?define(["exports"],D):(O=typeof globalThis<"u"?globalThis:O||self,D(O.altcha={}))})(this,function(O){"use strict";var tn=Object.defineProperty;var nn=(O,D,q)=>D in O?tn(O,D,{enumerable:!0,configurable:!0,writable:!0,value:q}):O[D]=q;var U=(O,D,q)=>nn(O,typeof D!="symbol"?D+"":D,q);var D=typeof document<"u"?document.currentScript:null;function q(){}function Se(n){return n()}function $e(){return Object.create(null)}function se(n){n.forEach(Se)}function Te(n){return typeof n=="function"}function ut(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function at(n){return Object.keys(n).length===0}function k(n,e){n.appendChild(e)}function N(n,e,t){n.insertBefore(e,t||null)}function j(n){n.parentNode&&n.parentNode.removeChild(n)}function S(n){return document.createElement(n)}function W(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ht(n){return document.createTextNode(n)}function J(){return ht(" ")}function ke(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function s(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function dt(n){return Array.from(n.childNodes)}function Me(n,e,t){n.classList.toggle(e,!!t)}function gt(n,e,{bubbles:t=!1,cancelable:r=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:r})}function mt(n){const e={};return n.childNodes.forEach(t=>{e[t.slot||"default"]=!0}),e}let fe;function ce(n){fe=n}function pe(){if(!fe)throw new Error("Function called outside component initialization");return fe}function bt(n){pe().$$.on_mount.push(n)}function _t(n){pe().$$.on_destroy.push(n)}function wt(){const n=pe();return(e,t,{cancelable:r=!1}={})=>{const l=n.$$.callbacks[e];if(l){const o=gt(e,t,{cancelable:r});return l.slice().forEach(f=>{f.call(n,o)}),!o.defaultPrevented}return!0}}const re=[],de=[];let oe=[];const je=[],De=Promise.resolve();let Ee=!1;function Ne(){Ee||(Ee=!0,De.then(w))}function yt(){return Ne(),De}function xe(n){oe.push(n)}const Ce=new Set;let le=0;function w(){if(le!==0)return;const n=fe;do{try{for(;le<re.length;){const e=re[le];le++,ce(e),vt(e.$$)}}catch(e){throw re.length=0,le=0,e}for(ce(null),re.length=0,le=0;de.length;)de.pop()();for(let e=0;e<oe.length;e+=1){const t=oe[e];Ce.has(t)||(Ce.add(t),t())}oe.length=0}while(re.length);for(;je.length;)je.pop()();Ee=!1,Ce.clear(),ce(n)}function vt(n){if(n.fragment!==null){n.update(),se(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(xe)}}function kt(n){const e=[],t=[];oe.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),oe=e}const pt=new Set;function Et(n,e){n&&n.i&&(pt.delete(n),n.i(e))}function xt(n,e,t){const{fragment:r,after_update:l}=n.$$;r&&r.m(e,t),xe(()=>{const o=n.$$.on_mount.map(Se).filter(Te);n.$$.on_destroy?n.$$.on_destroy.push(...o):se(o),n.$$.on_mount=[]}),l.forEach(xe)}function Ct(n,e){const t=n.$$;t.fragment!==null&&(kt(t.after_update),se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Lt(n,e){n.$$.dirty[0]===-1&&(re.push(n),Ne(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function It(n,e,t,r,l,o,f=null,c=[-1]){const h=fe;ce(n);const u=n.$$={fragment:null,ctx:[],props:o,update:q,not_equal:l,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:$e(),dirty:c,skip_bound:!1,root:e.target||h.$$.root};f&&f(u.root);let B=!1;if(u.ctx=t?t(n,e.props||{},(T,Z,...H)=>{const p=H.length?H[0]:Z;return u.ctx&&l(u.ctx[T],u.ctx[T]=p)&&(!u.skip_bound&&u.bound[T]&&u.bound[T](p),B&&Lt(n,T)),Z}):[],u.update(),B=!0,se(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const T=dt(e.target);u.fragment&&u.fragment.l(T),T.forEach(j)}else u.fragment&&u.fragment.c();e.intro&&Et(n.$$.fragment),xt(n,e.target,e.anchor),w()}ce(h)}let Ve;typeof HTMLElement=="function"&&(Ve=class extends HTMLElement{constructor(e,t,r){super();U(this,"$$ctor");U(this,"$$s");U(this,"$$c");U(this,"$$cn",!1);U(this,"$$d",{});U(this,"$$r",!1);U(this,"$$p_d",{});U(this,"$$l",{});U(this,"$$l_u",new Map);this.$$ctor=e,this.$$s=t,r&&this.attachShadow({mode:"open"})}addEventListener(e,t,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(t),this.$$c){const l=this.$$c.$on(e,t);this.$$l_u.set(t,l)}super.addEventListener(e,t,r)}removeEventListener(e,t,r){if(super.removeEventListener(e,t,r),this.$$c){const l=this.$$l_u.get(t);l&&(l(),this.$$l_u.delete(t))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return()=>{let f;return{c:function(){f=S("slot"),o!=="default"&&s(f,"name",o)},m:function(u,B){N(u,f,B)},d:function(u){u&&j(f)}}}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const t={},r=mt(this);for(const o of this.$$s)o in r&&(t[o]=[e(o)]);for(const o of this.attributes){const f=this.$$g_p(o.name);f in this.$$d||(this.$$d[f]=ge(f,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=new this.$$ctor({target:this.shadowRoot||this,props:{...this.$$d,$$slots:t,$$scope:{ctx:[]}}});const l=()=>{this.$$r=!0;for(const o in this.$$p_d)if(this.$$d[o]=this.$$c.$$.ctx[this.$$c.$$.props[o]],this.$$p_d[o].reflect){const f=ge(o,this.$$d[o],this.$$p_d,"toAttribute");f==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,f)}this.$$r=!1};this.$$c.$$.after_update.push(l),l();for(const o in this.$$l)for(const f of this.$$l[o]){const c=this.$$c.$on(o,f);this.$$l_u.set(f,c)}this.$$l={}}}attributeChangedCallback(e,t,r){var l;this.$$r||(e=this.$$g_p(e),this.$$d[e]=ge(e,r,this.$$p_d,"toProp"),(l=this.$$c)==null||l.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{this.$$cn||(this.$$c.$destroy(),this.$$c=void 0)})}$$g_p(e){return Object.keys(this.$$p_d).find(t=>this.$$p_d[t].attribute===e||!this.$$p_d[t].attribute&&t.toLowerCase()===e)||e}});function ge(n,e,t,r){var o;const l=(o=t[n])==null?void 0:o.type;if(e=l==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!t[n])return e;if(r==="toAttribute")switch(l){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(l){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function At(n,e,t,r,l,o){let f=class extends Ve{constructor(){super(n,t,l),this.$$p_d=e}static get observedAttributes(){return Object.keys(e).map(c=>(e[c].attribute||c).toLowerCase())}};return Object.keys(e).forEach(c=>{Object.defineProperty(f.prototype,c,{get(){return this.$$c&&c in this.$$c?this.$$c[c]:this.$$d[c]},set(h){var u;h=ge(c,h,e),this.$$d[c]=h,(u=this.$$c)==null||u.$set({[c]:h})}})}),r.forEach(c=>{Object.defineProperty(f.prototype,c,{get(){var h;return(h=this.$$c)==null?void 0:h[c]}})}),o&&(f=o(f)),n.element=f,f}class Rt{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){Ct(this,1),this.$destroy=q}$on(e,t){if(!Te(t))return q;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const l=r.indexOf(t);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const St="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(St);const $t=new TextEncoder;function Tt(n){return[...new Uint8Array(n)].map(e=>e.toString(16).padStart(2,"0")).join("")}async function Mt(n,e="SHA-256",t=1e5){const r=Date.now().toString(16);n||(n=Math.round(Math.random()*t));const l=await Fe(r,n,e);return{algorithm:e,challenge:l,salt:r,signature:""}}async function Fe(n,e,t){return Tt(await crypto.subtle.digest(t.toUpperCase(),$t.encode(n+e)))}function jt(n,e,t="SHA-256",r=1e6,l=0){const o=new AbortController,f=Date.now();return{promise:(async()=>{for(let h=l;h<=r;h+=1){if(o.signal.aborted)return null;if(await Fe(e,h,t)===n)return{number:h,took:Date.now()-f}}return null})(),controller:o}}var m=(n=>(n.ERROR="error",n.VERIFIED="verified",n.VERIFYING="verifying",n.UNVERIFIED="unverified",n.EXPIRED="expired",n))(m||{});function Pe(n){let e,t,r;return{c(){e=W("svg"),t=W("path"),r=W("path"),s(t,"d","M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"),s(t,"fill","currentColor"),s(t,"opacity",".25"),s(r,"d","M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"),s(r,"fill","currentColor"),s(r,"class","altcha-spinner"),s(e,"width","24"),s(e,"height","24"),s(e,"viewBox","0 0 24 24"),s(e,"xmlns","http://www.w3.org/2000/svg")},m(l,o){N(l,e,o),k(e,t),k(e,r)},d(l){l&&j(e)}}}function Dt(n){let e,t=n[11].label+"",r;return{c(){e=S("label"),s(e,"for",r=n[4]+"_checkbox")},m(l,o){N(l,e,o),e.innerHTML=t},p(l,o){o[0]&2048&&t!==(t=l[11].label+"")&&(e.innerHTML=t),o[0]&16&&r!==(r=l[4]+"_checkbox")&&s(e,"for",r)},d(l){l&&j(e)}}}function Nt(n){let e,t=n[11].verifying+"";return{c(){e=S("span")},m(r,l){N(r,e,l),e.innerHTML=t},p(r,l){l[0]&2048&&t!==(t=r[11].verifying+"")&&(e.innerHTML=t)},d(r){r&&j(e)}}}function Vt(n){let e,t=n[11].verified+"",r,l;return{c(){e=S("span"),r=J(),l=S("input"),s(l,"type","hidden"),s(l,"name",n[4]),l.value=n[5]},m(o,f){N(o,e,f),e.innerHTML=t,N(o,r,f),N(o,l,f)},p(o,f){f[0]&2048&&t!==(t=o[11].verified+"")&&(e.innerHTML=t),f[0]&16&&s(l,"name",o[4]),f[0]&32&&(l.value=o[5])},d(o){o&&(j(e),j(r),j(l))}}}function He(n){let e,t,r,l,o,f,c;return{c(){e=S("div"),t=S("a"),r=W("svg"),l=W("path"),o=W("path"),f=W("path"),s(l,"d","M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z"),s(l,"fill","currentColor"),s(o,"d","M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z"),s(o,"fill","currentColor"),s(f,"d","M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z"),s(f,"fill","currentColor"),s(r,"width","22"),s(r,"height","22"),s(r,"viewBox","0 0 20 20"),s(r,"fill","none"),s(r,"xmlns","http://www.w3.org/2000/svg"),s(t,"href",Ze),s(t,"target","_blank"),s(t,"class","altcha-logo"),s(t,"aria-label",c=n[11].ariaLinkLabel)},m(h,u){N(h,e,u),k(e,t),k(t,r),k(r,l),k(r,o),k(r,f)},p(h,u){u[0]&2048&&c!==(c=h[11].ariaLinkLabel)&&s(t,"aria-label",c)},d(h){h&&j(e)}}}function Oe(n){let e,t,r,l;function o(h,u){return h[6]===m.EXPIRED?Pt:Ft}let f=o(n),c=f(n);return{c(){e=S("div"),t=W("svg"),r=W("path"),l=J(),c.c(),s(r,"stroke-linecap","round"),s(r,"stroke-linejoin","round"),s(r,"d","M6 18L18 6M6 6l12 12"),s(t,"width","14"),s(t,"height","14"),s(t,"xmlns","http://www.w3.org/2000/svg"),s(t,"fill","none"),s(t,"viewBox","0 0 24 24"),s(t,"stroke-width","1.5"),s(t,"stroke","currentColor"),s(e,"class","altcha-error")},m(h,u){N(h,e,u),k(e,t),k(t,r),k(e,l),c.m(e,null)},p(h,u){f===(f=o(h))&&c?c.p(h,u):(c.d(1),c=f(h),c&&(c.c(),c.m(e,null)))},d(h){h&&j(e),c.d()}}}function Ft(n){let e,t=n[11].error+"";return{c(){e=S("div"),s(e,"title",n[10])},m(r,l){N(r,e,l),e.innerHTML=t},p(r,l){l[0]&2048&&t!==(t=r[11].error+"")&&(e.innerHTML=t),l[0]&1024&&s(e,"title",r[10])},d(r){r&&j(e)}}}function Pt(n){let e,t=n[11].expired+"";return{c(){e=S("div"),s(e,"title",n[10])},m(r,l){N(r,e,l),e.innerHTML=t},p(r,l){l[0]&2048&&t!==(t=r[11].expired+"")&&(e.innerHTML=t),l[0]&1024&&s(e,"title",r[10])},d(r){r&&j(e)}}}function Be(n){let e,t,r=n[11].footer+"";return{c(){e=S("div"),t=S("div"),s(e,"class","altcha-footer")},m(l,o){N(l,e,o),k(e,t),t.innerHTML=r},p(l,o){o[0]&2048&&r!==(r=l[11].footer+"")&&(t.innerHTML=r)},d(l){l&&j(e)}}}function Ue(n){let e;return{c(){e=S("div"),s(e,"class","altcha-anchor-arrow")},m(t,r){N(t,e,r),n[37](e)},p:q,d(t){t&&j(e),n[37](null)}}}function Ht(n){let e,t,r,l,o,f,c,h,u,B,T,Z,H,p,z,$=n[6]===m.VERIFYING&&Pe();function Q(d,_){return d[6]===m.VERIFIED?Vt:d[6]===m.VERIFYING?Nt:Dt}let X=Q(n),V=X(n),x=(n[3]!==!0||n[12])&&He(n),I=(n[10]||n[6]===m.EXPIRED)&&Oe(n),A=n[11].footer&&(n[2]!==!0||n[12])&&Be(n),y=n[1]&&Ue(n);return{c(){e=S("div"),t=S("div"),$&&$.c(),r=J(),l=S("div"),o=S("input"),h=J(),u=S("div"),V.c(),B=J(),x&&x.c(),T=J(),I&&I.c(),Z=J(),A&&A.c(),H=J(),y&&y.c(),s(o,"type","checkbox"),s(o,"id",f=n[4]+"_checkbox"),o.required=c=n[0]!=="onsubmit",s(l,"class","altcha-checkbox"),Me(l,"altcha-hidden",n[6]===m.VERIFYING),s(u,"class","altcha-label"),s(t,"class","altcha-main"),s(e,"class","altcha"),s(e,"data-state",n[6]),s(e,"data-floating",n[1])},m(d,_){N(d,e,_),k(e,t),$&&$.m(t,null),k(t,r),k(t,l),k(l,o),o.checked=n[7],k(t,h),k(t,u),V.m(u,null),k(t,B),x&&x.m(t,null),k(e,T),I&&I.m(e,null),k(e,Z),A&&A.m(e,null),k(e,H),y&&y.m(e,null),n[38](e),p||(z=[ke(o,"change",n[36]),ke(o,"change",n[13]),ke(o,"invalid",n[14])],p=!0)},p(d,_){d[6]===m.VERIFYING?$||($=Pe(),$.c(),$.m(t,r)):$&&($.d(1),$=null),_[0]&16&&f!==(f=d[4]+"_checkbox")&&s(o,"id",f),_[0]&1&&c!==(c=d[0]!=="onsubmit")&&(o.required=c),_[0]&128&&(o.checked=d[7]),_[0]&64&&Me(l,"altcha-hidden",d[6]===m.VERIFYING),X===(X=Q(d))&&V?V.p(d,_):(V.d(1),V=X(d),V&&(V.c(),V.m(u,null))),d[3]!==!0||d[12]?x?x.p(d,_):(x=He(d),x.c(),x.m(t,null)):x&&(x.d(1),x=null),d[10]||d[6]===m.EXPIRED?I?I.p(d,_):(I=Oe(d),I.c(),I.m(e,Z)):I&&(I.d(1),I=null),d[11].footer&&(d[2]!==!0||d[12])?A?A.p(d,_):(A=Be(d),A.c(),A.m(e,H)):A&&(A.d(1),A=null),d[1]?y?y.p(d,_):(y=Ue(d),y.c(),y.m(e,null)):y&&(y.d(1),y=null),_[0]&64&&s(e,"data-state",d[6]),_[0]&2&&s(e,"data-floating",d[1])},i:q,o:q,d(d){d&&j(e),$&&$.d(),V.d(),x&&x.d(),I&&I.d(),A&&A.d(),y&&y.d(),n[38](null),p=!1,se(z)}}}const qe="Visit Altcha.org",Ze="https://altcha.org/";function Ye(n){return JSON.parse(n)}function Ot(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function Bt(n,e,t){var ft,ct;let r,l,o,f,{auto:c=void 0}=e,{blockspam:h=void 0}=e,{challengeurl:u=void 0}=e,{challengejson:B=void 0}=e,{debug:T=!1}=e,{delay:Z=0}=e,{expire:H=void 0}=e,{floating:p=void 0}=e,{floatinganchor:z=void 0}=e,{floatingoffset:$=void 0}=e,{hidefooter:Q=!1}=e,{hidelogo:X=!1}=e,{name:V="altcha"}=e,{maxnumber:x=1e6}=e,{mockerror:I=!1}=e,{refetchonexpire:A=!0}=e,{spamfilter:y=!1}=e,{strings:d=void 0}=e,{test:_=!1}=e,{verifyurl:ee=void 0}=e,{workers:ue=Math.min(16,navigator.hardwareConcurrency||8)}=e,{workerurl:me=void 0}=e;const Le=wt(),We=["SHA-256","SHA-384","SHA-512"],Xe=(ct=(ft=document.documentElement.lang)==null?void 0:ft.split("-"))==null?void 0:ct[0];let K=!1,C,te=null,be=null,b=null,Ie=null,ne=null,F=m.UNVERIFIED,Y=null;_t(()=>{b&&(b.removeEventListener("submit",ze),b.removeEventListener("reset",Ke),b.removeEventListener("focusin",Je),b=null),Y&&(clearTimeout(Y),Y=null),document.removeEventListener("click",nt),document.removeEventListener("scroll",it),window.removeEventListener("resize",ot)}),bt(()=>{E("mounted","0.6.4"),E("workers",ue),_&&E("using test mode"),H&&_e(H),c!==void 0&&E("auto",c),p!==void 0&&lt(p),b=C.closest("form"),b&&(b.addEventListener("submit",ze,{capture:!0}),b.addEventListener("reset",Ke),c==="onfocus"&&b.addEventListener("focusin",Je)),c==="onload"&&ie(),r&&(Q||X)&&E("Attributes hidefooter and hidelogo ignored because usage with free API Keys require attribution.")});function E(...i){(T||i.some(a=>a instanceof Error))&&console[i[0]instanceof Error?"error":"log"]("ALTCHA",...i)}function Je(i){F===m.UNVERIFIED&&ie()}function ze(i){b&&c==="onsubmit"&&(F===m.UNVERIFIED?(i.preventDefault(),i.stopPropagation(),ie().then(()=>{b==null||b.requestSubmit()})):F!==m.VERIFIED&&(i.preventDefault(),i.stopPropagation(),F===m.VERIFYING&&rt()))}function Ke(){we()}function Qe(i,a){return btoa(JSON.stringify({algorithm:i.algorithm,challenge:i.challenge,number:a.number,salt:i.salt,signature:i.signature,test:_?!0:void 0,took:a.took}))}function et(i){if(!i.algorithm)throw new Error("Invalid challenge. Property algorithm is missing.");if(i.signature===void 0)throw new Error("Invalid challenge. Property signature is missing.");if(!We.includes(i.algorithm.toUpperCase()))throw new Error(`Unknown algorithm value. Allowed values: ${We.join(", ")}`);if(!i.challenge||i.challenge.length<40)throw new Error("Challenge is too short. Min. 40 chars.");if(!i.salt||i.salt.length<10)throw new Error("Salt is too short. Min. 10 chars.")}async function Ut(){var i;if(I)throw E("mocking error"),new Error("Mocked error.");if(l)return E("using provided json data"),l;if(_)return E("generating test challenge",{test:_}),Mt(typeof _!="boolean"?+_:void 0);{if(!u)throw new Error("Attribute challengeurl not set.");E("fetching challenge from",u);const a=await fetch(u,{headers:{"x-altcha-spam-filter":y?"1":"0"}});if(a.status!==200)throw new Error(`Server responded with ${a.status}.`);const g=a.headers.get("Expires"),R=a.headers.get("X-Altcha-Config"),P=await a.json(),M=new URLSearchParams((i=P.salt.split("?"))==null?void 0:i[1]),G=M.get("expires")||M.get("expire");if(G){const v=new Date(+G*1e3),L=isNaN(v.getTime())?0:v.getTime()-Date.now();L>0&&_e(L)}if(R)try{const v=JSON.parse(R);v&&typeof v=="object"&&(v.verifyurl&&(v.verifyurl=new URL(v.verifyurl,new URL(u)).toString()),st(v))}catch(v){E("unable to configure from X-Altcha-Config",v)}if(!H&&(g!=null&&g.length)){const v=Date.parse(g);if(v){const L=v-Date.now();L>0&&_e(L)}}return P}}function tt(){u&&A&&F===m.VERIFIED?ie():we(m.EXPIRED,f.expired)}async function qt(i){let a=null;if("Worker"in window){try{a=await Zt(i.challenge,i.salt,i.algorithm,i.maxnumber)}catch(g){E(g)}if((a==null?void 0:a.number)!==void 0)return{data:i,solution:a}}return{data:i,solution:await jt(i.challenge,i.salt,i.algorithm,i.maxnumber||x).promise}}async function Zt(i,a,g,R=typeof _=="number"?_:x,P=Math.ceil(ue)){const M=[];P=Math.min(16,Math.max(1,P));for(let L=0;L<P;L++)M.push(createAltchaWorker(me));const G=Math.ceil(R/P),v=await Promise.all(M.map((L,Re)=>{const ae=Re*G;return new Promise(ye=>{L.addEventListener("message",ve=>{if(ve.data)for(const he of M)he!==L&&he.postMessage({type:"abort"});ye(ve.data)}),L.postMessage({payload:{alg:g,challenge:i,max:ae+G,salt:a,start:ae},type:"work"})})}));for(const L of M)L.terminate();return v.find(L=>!!L)||null}function Yt(){[m.UNVERIFIED,m.ERROR,m.EXPIRED].includes(F)?y&&(b==null?void 0:b.reportValidity())===!1?t(7,K=!1):ie():t(7,K=!0)}function nt(i){const a=i.target;p&&a&&!C.contains(a)&&F===m.VERIFIED&&t(8,C.style.display="none",C)}function it(){p&&Ae()}function rt(){F===m.VERIFYING&&f.waitAlert&&alert(f.waitAlert)}function Gt(i){p&&F!==m.UNVERIFIED&&requestAnimationFrame(()=>{Ae()})}function ot(){p&&Ae()}function _e(i){E("expire",i),Y&&(clearTimeout(Y),Y=null),i<1?tt():Y=setTimeout(tt,i)}function lt(i){E("floating",i),p!==i&&(t(8,C.style.left="",C),t(8,C.style.top="",C)),t(1,p=i===!0||i===""?"auto":i===!1||i==="false"?void 0:p),p?(c||t(0,c="onsubmit"),document.addEventListener("scroll",it),document.addEventListener("click",nt),window.addEventListener("resize",ot)):c==="onsubmit"&&t(0,c=void 0)}function Wt(i){var g;const a=b==null?void 0:b.querySelector(typeof i=="string"?`input[name="${i}"]`:'input[type="email"]:not([data-no-spamfilter])');return((g=a==null?void 0:a.value)==null?void 0:g.slice(a.value.indexOf("@")))||void 0}function Xt(i){return[...(b==null?void 0:b.querySelectorAll(i!=null&&i.length?i.map(g=>`input[name="${g}"]`).join(", "):'input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])'))||[]].reduce((g,R)=>{const P=R.name,M=R.value;return P&&M&&(g[P]=/\n/.test(M)?M.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):M),g},{})}async function Jt(i){if(!ee)throw new Error("Attribute verifyurl not set.");E("requesting server verification from",ee);const a={payload:i};if(y){const{blockedCountries:P,classifier:M,disableRules:G,email:v,expectedLanguages:L,expectedCountries:Re,fields:ae,ipAddress:ye,text:ve,timeZone:he}=zt();a.blockedCountries=P,a.classifier=M,a.disableRules=G,a.email=v===!1?void 0:Wt(v),a.expectedCountries=Re,a.expectedLanguages=L||(Xe?[Xe]:void 0),a.fields=ae===!1?void 0:Xt(ae),a.ipAddress=ye===!1?void 0:ye||"auto",a.text=ve,a.timeZone=he===!1?void 0:he||Ot()}const g=await fetch(ee,{body:JSON.stringify(a),headers:{"content-type":"application/json"},method:"POST"});if(g.status!==200)throw new Error(`Server responded with ${g.status}.`);const R=await g.json();if(R!=null&&R.payload&&t(5,ne=R.payload),Le("serververification",R),h&&R.classification==="BAD")throw new Error("SpamFilter returned negative classification.")}function zt(){return y==="ipAddress"?{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:!1,expectedCountries:void 0,expectedLanguages:void 0,fields:!1,ipAddress:void 0,text:void 0,timeZone:void 0}:typeof y=="object"?y:{blockedCountries:void 0,classifier:void 0,disableRules:void 0,email:void 0,expectedCountries:void 0,expectedLanguages:void 0,fields:void 0,ipAddress:void 0,text:void 0,timeZone:void 0}}function Ae(i=20){if(C)if(be||(be=(z?document.querySelector(z):b==null?void 0:b.querySelector('input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])'))||b),be){const a=parseInt($,10)||12,g=be.getBoundingClientRect(),R=C.getBoundingClientRect(),P=document.documentElement.clientHeight,M=document.documentElement.clientWidth,G=p==="auto"?g.bottom+R.height+a+i>P:p==="top",v=Math.max(i,Math.min(M-i-R.width,g.left+g.width/2-R.width/2));if(G?t(8,C.style.top=`${g.top-(R.height+a)}px`,C):t(8,C.style.top=`${g.bottom+a}px`,C),t(8,C.style.left=`${v}px`,C),C.setAttribute("data-floating",G?"top":"bottom"),te){const L=te.getBoundingClientRect();t(9,te.style.left=g.left-v+g.width/2-L.width/2+"px",te)}}else E("unable to find floating anchor element")}function st(i){i.auto!==void 0&&(t(0,c=i.auto),c==="onload"&&ie()),i.floatinganchor!==void 0&&t(19,z=i.floatinganchor),i.delay!==void 0&&t(17,Z=i.delay),i.floatingoffset!==void 0&&t(20,$=i.floatingoffset),i.floating!==void 0&&lt(i.floating),i.expire!==void 0&&(_e(i.expire),t(18,H=i.expire)),i.challenge&&(et(i.challenge),l=i.challenge),i.challengeurl!==void 0&&t(15,u=i.challengeurl),i.debug!==void 0&&t(16,T=!!i.debug),i.hidefooter!==void 0&&t(2,Q=!!i.hidefooter),i.hidelogo!==void 0&&t(3,X=!!i.hidelogo),i.maxnumber!==void 0&&t(21,x=+i.maxnumber),i.mockerror!==void 0&&t(22,I=!!i.mockerror),i.name!==void 0&&t(4,V=i.name),i.refetchonexpire!==void 0&&t(23,A=!!i.refetchonexpire),i.spamfilter!==void 0&&t(24,y=typeof i.spamfilter=="object"?i.spamfilter:!!i.spamfilter),i.strings&&t(35,o=i.strings),i.test!==void 0&&t(25,_=typeof i.test=="number"?i.test:!!i.test),i.verifyurl!==void 0&&t(26,ee=i.verifyurl),i.workers!==void 0&&t(27,ue=+i.workers),i.workerurl!==void 0&&t(28,me=i.workerurl)}function we(i=m.UNVERIFIED,a=null){Y&&(clearTimeout(Y),Y=null),t(7,K=!1),t(10,Ie=a),t(5,ne=null),t(6,F=i)}async function ie(){return we(m.VERIFYING),await new Promise(i=>setTimeout(i,Z||0)),Ut().then(i=>(et(i),E("challenge",i),qt(i))).then(({data:i,solution:a})=>{if(E("solution",a),(a==null?void 0:a.number)!==void 0){if(ee)return Jt(Qe(i,a));t(5,ne=Qe(i,a)),E("payload",ne)}else throw E("Unable to find a solution. Ensure that the 'maxnumber' attribute is greater than the randomly generated number."),new Error("Unexpected result returned.")}).then(()=>{yt().then(()=>{t(6,F=m.VERIFIED),t(7,K=!0),E("verified"),Le("verified",{payload:ne})})}).catch(i=>{E(i),t(6,F=m.ERROR),t(7,K=!1),t(10,Ie=i.message)})}function Kt(){K=this.checked,t(7,K)}function Qt(i){de[i?"unshift":"push"](()=>{te=i,t(9,te)})}function en(i){de[i?"unshift":"push"](()=>{C=i,t(8,C)})}return n.$$set=i=>{"auto"in i&&t(0,c=i.auto),"blockspam"in i&&t(29,h=i.blockspam),"challengeurl"in i&&t(15,u=i.challengeurl),"challengejson"in i&&t(30,B=i.challengejson),"debug"in i&&t(16,T=i.debug),"delay"in i&&t(17,Z=i.delay),"expire"in i&&t(18,H=i.expire),"floating"in i&&t(1,p=i.floating),"floatinganchor"in i&&t(19,z=i.floatinganchor),"floatingoffset"in i&&t(20,$=i.floatingoffset),"hidefooter"in i&&t(2,Q=i.hidefooter),"hidelogo"in i&&t(3,X=i.hidelogo),"name"in i&&t(4,V=i.name),"maxnumber"in i&&t(21,x=i.maxnumber),"mockerror"in i&&t(22,I=i.mockerror),"refetchonexpire"in i&&t(23,A=i.refetchonexpire),"spamfilter"in i&&t(24,y=i.spamfilter),"strings"in i&&t(31,d=i.strings),"test"in i&&t(25,_=i.test),"verifyurl"in i&&t(26,ee=i.verifyurl),"workers"in i&&t(27,ue=i.workers),"workerurl"in i&&t(28,me=i.workerurl)},n.$$.update=()=>{n.$$.dirty[0]&32768&&t(12,r=!!(u!=null&&u.includes(".altcha.org"))&&!!(u!=null&&u.includes("apiKey=ckey_"))),n.$$.dirty[0]&1073741824&&(l=B?Ye(B):void 0),n.$$.dirty[1]&1&&t(35,o=d?Ye(d):{}),n.$$.dirty[1]&16&&t(11,f={ariaLinkLabel:qe,error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:`Protected by <a href="${Ze}" target="_blank" aria-label="${o.ariaLinkLabel||qe}">ALTCHA</a>`,label:"I'm not a robot",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait.",...o}),n.$$.dirty[0]&96&&Le("statechange",{payload:ne,state:F}),n.$$.dirty[0]&64&&Gt()},[c,p,Q,X,V,ne,F,K,C,te,Ie,f,r,Yt,rt,u,T,Z,H,z,$,x,I,A,y,_,ee,ue,me,h,B,d,st,we,ie,o,Kt,Qt,en]}class Ge extends Rt{constructor(e){super(),It(this,e,Bt,Ht,ut,{auto:0,blockspam:29,challengeurl:15,challengejson:30,debug:16,delay:17,expire:18,floating:1,floatinganchor:19,floatingoffset:20,hidefooter:2,hidelogo:3,name:4,maxnumber:21,mockerror:22,refetchonexpire:23,spamfilter:24,strings:31,test:25,verifyurl:26,workers:27,workerurl:28,configure:32,reset:33,verify:34},null,[-1,-1,-1])}get auto(){return this.$$.ctx[0]}set auto(e){this.$$set({auto:e}),w()}get blockspam(){return this.$$.ctx[29]}set blockspam(e){this.$$set({blockspam:e}),w()}get challengeurl(){return this.$$.ctx[15]}set challengeurl(e){this.$$set({challengeurl:e}),w()}get challengejson(){return this.$$.ctx[30]}set challengejson(e){this.$$set({challengejson:e}),w()}get debug(){return this.$$.ctx[16]}set debug(e){this.$$set({debug:e}),w()}get delay(){return this.$$.ctx[17]}set delay(e){this.$$set({delay:e}),w()}get expire(){return this.$$.ctx[18]}set expire(e){this.$$set({expire:e}),w()}get floating(){return this.$$.ctx[1]}set floating(e){this.$$set({floating:e}),w()}get floatinganchor(){return this.$$.ctx[19]}set floatinganchor(e){this.$$set({floatinganchor:e}),w()}get floatingoffset(){return this.$$.ctx[20]}set floatingoffset(e){this.$$set({floatingoffset:e}),w()}get hidefooter(){return this.$$.ctx[2]}set hidefooter(e){this.$$set({hidefooter:e}),w()}get hidelogo(){return this.$$.ctx[3]}set hidelogo(e){this.$$set({hidelogo:e}),w()}get name(){return this.$$.ctx[4]}set name(e){this.$$set({name:e}),w()}get maxnumber(){return this.$$.ctx[21]}set maxnumber(e){this.$$set({maxnumber:e}),w()}get mockerror(){return this.$$.ctx[22]}set mockerror(e){this.$$set({mockerror:e}),w()}get refetchonexpire(){return this.$$.ctx[23]}set refetchonexpire(e){this.$$set({refetchonexpire:e}),w()}get spamfilter(){return this.$$.ctx[24]}set spamfilter(e){this.$$set({spamfilter:e}),w()}get strings(){return this.$$.ctx[31]}set strings(e){this.$$set({strings:e}),w()}get test(){return this.$$.ctx[25]}set test(e){this.$$set({test:e}),w()}get verifyurl(){return this.$$.ctx[26]}set verifyurl(e){this.$$set({verifyurl:e}),w()}get workers(){return this.$$.ctx[27]}set workers(e){this.$$set({workers:e}),w()}get workerurl(){return this.$$.ctx[28]}set workerurl(e){this.$$set({workerurl:e}),w()}get configure(){return this.$$.ctx[32]}get reset(){return this.$$.ctx[33]}get verify(){return this.$$.ctx[34]}}customElements.define("altcha-widget",At(Ge,{auto:{},blockspam:{},challengeurl:{},challengejson:{},debug:{type:"Boolean"},delay:{},expire:{},floating:{},floatinganchor:{},floatingoffset:{},hidefooter:{type:"Boolean"},hidelogo:{type:"Boolean"},name:{},maxnumber:{},mockerror:{type:"Boolean"},refetchonexpire:{type:"Boolean"},spamfilter:{type:"Boolean"},strings:{},test:{type:"Boolean"},verifyurl:{},workers:{},workerurl:{}},[],["configure","reset","verify"],!1)),globalThis.createAltchaWorker=n=>new Worker(new URL(n||"./worker.js",typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:D&&D.src||new URL("altcha.umd.cjs",document.baseURI).href)),O.Altcha=Ge,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
