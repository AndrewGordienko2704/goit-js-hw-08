var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,i="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,u=i||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return u.Date.now()};function m(e,t,o){var n,r,a,i,f,u,c=0,m=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var o=n,a=r;return n=r=void 0,c=t,i=e.apply(a,o)}function S(e){return c=e,f=setTimeout(j,t),m?y(e):i}function O(e){var o=e-u;return void 0===u||o>=t||o<0||g&&e-c>=a}function j(){var e=d();if(O(e))return N(e);f=setTimeout(j,function(e){var o=t-(e-u);return g?s(o,a-(e-c)):o}(e))}function N(e){return f=void 0,b&&n?y(e):(n=r=void 0,i)}function h(){var e=d(),o=O(e);if(n=arguments,r=this,u=e,o){if(void 0===f)return S(u);if(g)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),i}return t=p(t)||0,v(o)&&(m=!!o.leading,a=(g="maxWait"in o)?l(p(o.maxWait)||0,t):a,b="trailing"in o?!!o.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=u=r=f=void 0},h.flush=function(){return void 0===f?i:N(d())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var i="function"==typeof e.valueOf?e.valueOf():e;e=v(i)?i+"":i}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=n.test(e);return f||r.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}const g=document.querySelector(".feedback-form"),b=document.querySelector("input"),y=document.querySelector("textarea");let S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S);g.addEventListener("input",(function(){S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S),console.log(O),localStorage.setItem("feedback-form-state",JSON.stringify({email:b.value,message:y.value}))})),g.addEventListener("submit",(function(e){e.preventDefault(),S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S),console.log(O),localStorage.clear(),b.value="",y.value=""})),S=localStorage.getItem("feedback-form-state"),O=JSON.parse(S),console.log(O),O&&(b.value=O.email||"",y.value=O.message||""),console.log(O);
//# sourceMappingURL=03-feedback.81dd6600.js.map
