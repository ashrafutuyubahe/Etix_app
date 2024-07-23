(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function la(a,b){a.raw=b;return a}
function w(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ma(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function na(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var pa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)na(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||pa});
var qa=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ra=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=qa(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),sa;
if(typeof Object.setPrototypeOf=="function")sa=Object.setPrototypeOf;else{var ta;a:{var ua={a:!0},va={};try{va.__proto__=ua;ta=va.a;break a}catch(a){}ta=!1}sa=ta?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var wa=sa;
function y(a,b){a.prototype=qa(b.prototype);a.prototype.constructor=a;if(wa)wa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ca=b.prototype}
function xa(){this.v=!1;this.o=null;this.i=void 0;this.h=1;this.B=this.m=0;this.K=this.j=null}
function ya(a){if(a.v)throw new TypeError("Generator is already running");a.v=!0}
xa.prototype.F=function(a){this.i=a};
function za(a,b){a.j={exception:b,bd:!0};a.h=a.m||a.B}
xa.prototype.return=function(a){this.j={return:a};this.h=this.B};
xa.prototype.yield=function(a,b){this.h=b;return{value:a}};
xa.prototype.D=function(a){this.h=a};
function Aa(a,b,c){a.m=b;c!=void 0&&(a.B=c)}
function Ba(a){a.m=0;var b=a.j.exception;a.j=null;return b}
function Da(a){var b=a.K.splice(0)[0];(b=a.j=a.j||b)?b.bd?a.h=a.m||a.B:b.D!=void 0&&a.B<b.D?(a.h=b.D,a.j=null):a.h=a.B:a.h=0}
function Ea(a){this.h=new xa;this.i=a}
function Fa(a,b){ya(a.h);var c=a.h.o;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.v=!1,e;var f=e.value}catch(g){return a.h.o=null,za(a.h,g),Ha(a)}a.h.o=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.v=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,za(a.h,c)}a.h.v=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.bd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){ya(a.h);a.h.o?b=Ga(a,a.h.o.next,b,a.h.F):(a.h.F(b),b=Ha(a));return b};
this.throw=function(b){ya(a.h);a.h.o?b=Ga(a,a.h.o["throw"],b,a.h.F):(za(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ja(new Ia(new Ea(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return ra});
v("Reflect.setPrototypeOf",function(a){return a?a:wa?function(b,c){try{return wa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.v=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.B()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.B=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.m(l)}}}this.h=null};
c.prototype.m=function(g){this.j(function(){throw g;})};
b.prototype.m=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.X),reject:g(this.B)}};
b.prototype.X=function(g){if(g===this)this.B(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.W(g):this.o(g)}};
b.prototype.W=function(g){var h=void 0;try{h=g.then}catch(k){this.B(k);return}typeof h=="function"?this.qa(h,g):this.o(g)};
b.prototype.B=function(g){this.F(2,g)};
b.prototype.o=function(g){this.F(1,g)};
b.prototype.F=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.K()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=fa.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.v)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.K=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.m();g.Wb(h.resolve,h.reject)};
b.prototype.qa=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(u){try{l(p(u))}catch(z){m(z)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.Wb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.v=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).Wb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(z){p[u]=z;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).Wb(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||wa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!na(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!na(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&na(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&na(k,g)&&na(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&na(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)na(b,d)&&c.push([d,b[d]]);return c}});
v("globalThis",function(a){return a||fa});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Oa(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return a!=null?a:b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Pa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Ra(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Za(){return Date.now()}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.Ca=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var eb;function fb(){if(eb===void 0){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){C.console&&C.console.error(c.message)}eb=a}else eb=a}return eb}
;function gb(a,b){this.h=a===hb&&b||""}
gb.prototype.toString=function(){return this.h};
function ib(a){return new gb(hb,a)}
var hb={};ib("");function jb(a){this.h=a}
jb.prototype.toString=function(){return this.h+""};
function kb(a){if(a instanceof jb&&a.constructor===jb)return a.h;Pa(a);return"type_error:TrustedResourceUrl"}
var lb={};function mb(a){var b=fb();a=b?b.createScriptURL(a):a;return new jb(a,lb)}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
var nb=ka([""]),ob=la(["\x00"],["\\0"]),pb=la(["\n"],["\\n"]),qb=la(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.de=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};var Cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Db=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Eb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Fb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Gb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Db(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Hb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Ib(a,b){b=Cb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Lb(a){var b=Mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Nb(a){for(var b in a)return!1;return!0}
function Ob(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function Pb(a){return a!==null&&"privembed"in a?a.privembed:!1}
function Qb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Rb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Sb(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Sb(a[c]);return b}
var Tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Tb.length;f++)c=Tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Vb(a){this.h=a}
Vb.prototype.toString=function(){return this.h.toString()};function Wb(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Xb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Yb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Zb(a,b){if(b instanceof jb)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Yb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function $b(a){var b,c;return(a=(c=(b=a.document).querySelector)==null?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function ac(a){this.h=a}
ac.prototype.toString=function(){return this.h.toString()};function bc(a){var b=$b(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function cc(a,b){if(b instanceof ac)b=b.h;else throw Error("");a.textContent=b;bc(a)}
function dc(a,b){a.src=kb(b);bc(a)}
;function ec(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function fc(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=hc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ic[c])c=ic[c];else{c=String(c);if(!ic[c]){var f=/function\s+([^\(]+)/m.exec(c);ic[c]=f?f[1]:"[Anonymous]"}c=ic[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function hc(a,b){b||(b={});b[jc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[jc(a)]&&(c+="\nCaused by: ",a.stack&&a.stack.indexOf(a.toString())==0||(c+=typeof a==="string"?a:a.message+"\n"),c+=hc(a,b));return c}
function jc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var ic={};function kc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(a){return a?decodeURI(a):a}
function nc(a,b){return b.match(lc)[a]||null}
function oc(a){return mc(nc(3,a))}
function pc(a){var b=a.match(lc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function qc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function rc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)rc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function sc(a){var b=[],c;for(c in a)rc(c,a[c],b);return b.join("&")}
function tc(a,b){b=sc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function uc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var vc=/#|$/,wc=/[?&]($|#)/;function xc(a,b){for(var c=a.search(vc),d=0,e,f=[];(e=uc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(wc,"$1")}
;function yc(a){this.h=a}
;function zc(a,b,c){this.m=a;this.j=b;this.fields=c||[];this.h=new Map}
r=zc.prototype;r.Cd=function(a){var b=B.apply(1,arguments),c=this.uc(b);c?c.push(new yc(a)):this.od(a,b)};
r.od=function(a){var b=this.Mc(B.apply(1,arguments));this.h.set(b,[new yc(a)])};
r.uc=function(){var a=this.Mc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.Sd=function(){var a=this.uc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.Mc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ac(a,b){zc.call(this,a,3,b)}
y(Ac,zc);Ac.prototype.i=function(a){var b=B.apply(1,arguments),c=0,d=this.Sd(b);d&&(c=d.h);this.od(c+a,b)};function Bc(a,b){zc.call(this,a,2,b)}
y(Bc,zc);Bc.prototype.record=function(a){this.Cd(a,B.apply(1,arguments))};function Cc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Dc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?Dc.apply(null,d):Cc(d)}}
;function F(){this.ja=this.ja;this.B=this.B}
F.prototype.ja=!1;F.prototype.dispose=function(){this.ja||(this.ja=!0,this.da())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function Ec(a,b){a.addOnDisposeCallback(Ya(Cc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.ja?b!==void 0?a.call(b):a():(this.B||(this.B=[]),this.B.push(b!==void 0?Xa(a,b):a))};
F.prototype.da=function(){if(this.B)for(;this.B.length;)this.B.shift()()};function Fc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Fc.prototype.stopPropagation=function(){this.j=!0};
Fc.prototype.preventDefault=function(){this.defaultPrevented=!0};var Gc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();var Hc=Oa(610401301,!1),Ic=Oa(188588736,!0),Jc=Oa(645172343,Oa(1,!0));function Kc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Lc,Mc=C.navigator;Lc=Mc?Mc.userAgentData||null:null;function Nc(a){return Hc?Lc?Lc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function I(a){return Kc().indexOf(a)!=-1}
;function Oc(){return Hc?!!Lc&&Lc.brands.length>0:!1}
function Pc(){return Oc()?!1:I("Opera")}
function Qc(){return I("Firefox")||I("FxiOS")}
function Rc(){return Oc()?Nc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Oc()?0:I("Edge"))||I("Silk")}
;function Sc(){return Hc?!!Lc&&!!Lc.platform:!1}
function Tc(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function Uc(a){Uc[" "](a);return a}
Uc[" "]=function(){};var Vc=Pc(),Wc=Oc()?!1:I("Trident")||I("MSIE"),Xc=I("Edge"),Yc=I("Gecko")&&!(Kc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Zc=Kc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");Zc&&I("Mobile");Sc()||I("Macintosh");Sc()||I("Windows");(Sc()?Lc.platform==="Linux":I("Linux"))||Sc()||I("CrOS");var $c=Sc()?Lc.platform==="Android":I("Android");Tc();I("iPad");I("iPod");Tc()||I("iPad")||I("iPod");Kc().toLowerCase().indexOf("kaios");function ad(a,b){Fc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(ad,Fc);var bd={2:"touch",3:"pen",4:"mouse"};
ad.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Yc){a:{try{Uc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=typeof a.pointerType==="string"?a.pointerType:bd[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ad.Ca.preventDefault.call(this)};
ad.prototype.stopPropagation=function(){ad.Ca.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ad.prototype.preventDefault=function(){ad.Ca.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var cd="closure_listenable_"+(Math.random()*1E6|0);var dd=0;function ed(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.cc=e;this.key=++dd;this.Mb=this.Vb=!1}
function fd(a){a.Mb=!0;a.listener=null;a.proxy=null;a.src=null;a.cc=null}
;function gd(a){this.src=a;this.listeners={};this.h=0}
gd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=hd(a,b,d,e);g>-1?(b=a[g],c||(b.Vb=!1)):(b=new ed(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
gd.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=hd(e,b,c,d);return b>-1?(fd(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function id(a,b){var c=b.type;c in a.listeners&&Ib(a.listeners[c],b)&&(fd(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function hd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Mb&&f.listener==b&&f.capture==!!c&&f.cc==d)return e}return-1}
;var jd="closure_lm_"+(Math.random()*1E6|0),kd={},ld=0;function md(a,b,c,d,e){if(d&&d.once)nd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)md(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.listen(b,c,Ra(d)?!!d.capture:!!d,e):pd(a,b,c,!1,d,e)}
function pd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=qd(a);h||(a[jd]=h=new gd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Gc||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");ld++}}
function rd(){function a(c){return b.call(a.src,a.listener,c)}
var b=td;return a}
function nd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nd(a,b[f],c,d,e);else c=od(c),a&&a[cd]?a.h.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):pd(a,b,c,!0,d,e)}
function ud(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ud(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=od(c),a&&a[cd])?a.h.remove(String(b),c,d,e):a&&(a=qd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=hd(b,c,d,e)),(c=a>-1?b[a]:null)&&vd(c))}
function vd(a){if(typeof a!=="number"&&a&&!a.Mb){var b=a.src;if(b&&b[cd])id(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);ld--;(c=qd(b))?(id(c,a),c.h==0&&(c.src=null,b[jd]=null)):fd(a)}}}
function sd(a){return a in kd?kd[a]:kd[a]="on"+a}
function td(a,b){if(a.Mb)a=!0;else{b=new ad(b,this);var c=a.listener,d=a.cc||a.src;a.Vb&&vd(a);a=c.call(d,b)}return a}
function qd(a){a=a[jd];return a instanceof gd?a:null}
var wd="__closure_events_fn_"+(Math.random()*1E9>>>0);function od(a){if(typeof a==="function")return a;a[wd]||(a[wd]=function(b){return a.handleEvent(b)});
return a[wd]}
;function xd(){F.call(this);this.h=new gd(this);this.Ka=this;this.ga=null}
$a(xd,F);xd.prototype[cd]=!0;r=xd.prototype;r.addEventListener=function(a,b,c,d){md(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){ud(this,a,b,c,d)};
function yd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Ka;c=b.type||b;typeof b==="string"?b=new Fc(b,a):b instanceof Fc?b.target=b.target||a:(e=b,b=new Fc(c,a),Ub(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=zd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=zd(g,c,!0,b)&&e,b.j||(e=zd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=zd(g,c,!1,b)&&e}
r.da=function(){xd.Ca.da.call(this);this.removeAllListeners();this.ga=null};
r.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
r.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,fd(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function zd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Mb&&g.capture==c){var h=g.listener,k=g.cc||g.src;g.Vb&&id(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Ad(a,b){this.j=a;this.m=b;this.i=0;this.h=null}
Ad.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Bd(a,b){a.m(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Cd(){}
function Dd(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Ed(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=Ed.prototype;r.clone=function(){return new Ed(this.x,this.y)};
r.equals=function(a){return a instanceof Ed&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function Fd(a,b){this.width=a;this.height=b}
r=Fd.prototype;r.clone=function(){return new Fd(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function Gd(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Hd(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Id(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Jd;function Kd(){var a=C.MessageChannel;typeof a==="undefined"&&typeof window!=="undefined"&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=Hd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h=f.location.protocol=="file:"?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if((h=="*"||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if(typeof a!=="undefined"){var b=new a,c={},d=c;b.port1.onmessage=function(){if(c.next!==void 0){c=c.next;var e=c.Qc;c.Qc=null;e()}};
return function(e){d.next={Qc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Ld(a){C.setTimeout(function(){throw a;},0)}
;function Md(){this.i=this.h=null}
Md.prototype.add=function(a,b){var c=Nd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Md.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Nd=new Ad(function(){return new Od},function(a){return a.reset()});
function Od(){this.next=this.scope=this.h=null}
Od.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Od.prototype.reset=function(){this.next=this.scope=this.h=null};var Pd,Qd=!1,Rd=new Md;function Sd(a,b){Pd||Td();Qd||(Pd(),Qd=!0);Rd.add(a,b)}
function Td(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Pd=function(){a.then(Ud)}}else Pd=function(){var b=Ud;
typeof C.setImmediate!=="function"||C.Window&&C.Window.prototype&&C.Window.prototype.setImmediate==C.setImmediate?(Jd||(Jd=Kd()),Jd(b)):C.setImmediate(b)}}
function Ud(){for(var a;a=Rd.remove();){try{a.h.call(a.scope)}catch(b){Ld(b)}Bd(Nd,a)}Qd=!1}
;function Vd(a){this.h=0;this.v=void 0;this.m=this.i=this.j=null;this.B=this.o=!1;if(a!=Cd)try{var b=this;a.call(void 0,function(c){Wd(b,2,c)},function(c){Wd(b,3,c)})}catch(c){Wd(this,3,c)}}
function Xd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Xd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Yd=new Ad(function(){return new Xd},function(a){a.reset()});
function Zd(a,b,c){var d=Yd.get();d.i=a;d.h=b;d.context=c;return d}
function $d(a){return new Vd(function(b,c){c(a)})}
Vd.prototype.then=function(a,b,c){return ae(this,typeof a==="function"?a:null,typeof b==="function"?b:null,c)};
Vd.prototype.$goog_Thenable=!0;r=Vd.prototype;r.mc=function(a,b){return ae(this,null,a,b)};
r.catch=Vd.prototype.mc;r.cancel=function(a){if(this.h==0){var b=new be(a);Sd(function(){ce(this,b)},this)}};
function ce(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?ce(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):de(c),ee(c,e,3,b)))}a.j=null}else Wd(a,3,b)}
function fe(a,b){a.i||a.h!=2&&a.h!=3||ge(a);a.m?a.m.next=b:a.i=b;a.m=b}
function ae(a,b,c,d){var e=Zd(null,null,null);e.child=new Vd(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof be?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;fe(a,e);return e.child}
r.Ve=function(a){this.h=0;Wd(this,2,a)};
r.We=function(a){this.h=0;Wd(this,3,a)};
function Wd(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.Ve,f=a.We;if(d instanceof Vd){fe(d,Zd(e||Cd,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if(typeof k==="function"){he(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.v=c,a.h=b,a.j=null,ge(a),b!=3||c instanceof be||ie(a,c))}}
function he(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ge(a){a.o||(a.o=!0,Sd(a.Nd,a))}
function de(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.m=null);return b}
r.Nd=function(){for(var a;a=de(this);)ee(this,a,this.h,this.v);this.o=!1};
function ee(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.B;a=a.j)a.B=!1;if(b.child)b.child.j=null,je(b,c,d);else try{b.j?b.i.call(b.context):je(b,c,d)}catch(e){ke.call(null,e)}Bd(Yd,b)}
function je(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function ie(a,b){a.B=!0;Sd(function(){a.B&&ke.call(null,b)})}
var ke=Ld;function be(a){bb.call(this,a)}
$a(be,bb);be.prototype.name="cancel";function le(a,b){xd.call(this);this.j=a||1;this.i=b||C;this.m=Xa(this.Se,this);this.o=Za()}
$a(le,xd);r=le.prototype;r.enabled=!1;r.Ga=null;r.setInterval=function(a){this.j=a;this.Ga&&this.enabled?(this.stop(),this.start()):this.Ga&&this.stop()};
r.Se=function(){if(this.enabled){var a=Za()-this.o;a>0&&a<this.j*.8?this.Ga=this.i.setTimeout(this.m,this.j-a):(this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null),yd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ga||(this.Ga=this.i.setTimeout(this.m,this.j),this.o=Za())};
r.stop=function(){this.enabled=!1;this.Ga&&(this.i.clearTimeout(this.Ga),this.Ga=null)};
r.da=function(){le.Ca.da.call(this);this.stop();delete this.i};
function me(a,b,c){if(typeof a==="function")c&&(a=Xa(a,c));else if(a&&typeof a.handleEvent=="function")a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(b)>2147483647?-1:C.setTimeout(a,b||0)}
;function ne(a){F.call(this);this.F=a;this.j=0;this.m=100;this.o=!1;this.i=new Map;this.v=new Set;this.flushInterval=3E4;this.h=new le(this.flushInterval);this.h.listen("tick",this.nc,!1,this);Ec(this,this.h)}
y(ne,F);r=ne.prototype;r.sendIsolatedPayload=function(a){this.o=a;this.m=1};
function oe(a){a.h.enabled||a.h.start();a.j++;a.j>=a.m&&a.nc()}
r.nc=function(){var a=this.i.values();a=[].concat(ma(a)).filter(function(b){return b.h.size});
a.length&&this.F.flush(a,this.o);pe(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Sa=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ac(a,b))};
r.Cb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bc(a,b))};
function qe(a,b){return a.v.has(b)?void 0:a.i.get(b)}
r.zb=function(a){this.Ad(a,1,B.apply(1,arguments))};
r.Ad=function(a,b){var c=B.apply(2,arguments),d=qe(this,a);d&&d instanceof Ac&&(d.i(b,c),oe(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=qe(this,a);d&&d instanceof Bc&&(d.record(b,c),oe(this))};
function pe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function re(a){this.h=a;this.h.Sa("/client_streamz/bg/fic",{I:3,H:"ke"})}
function se(a){this.h=a;this.h.Sa("/client_streamz/bg/fiec",{I:3,H:"rk"},{I:3,H:"ke"},{I:2,H:"ec"})}
function te(a){this.h=a;this.h.Cb("/client_streamz/bg/fil",{I:3,H:"rk"},{I:3,H:"ke"})}
te.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ue(a){this.h=a;this.h.Sa("/client_streamz/bg/fcc",{I:2,H:"ph"},{I:3,H:"ke"})}
function ve(a){this.h=a;this.h.Cb("/client_streamz/bg/fcd",{I:2,H:"ph"},{I:3,H:"ke"})}
ve.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function we(a){this.h=a;this.h.Sa("/client_streamz/bg/fsc",{I:3,H:"rk"},{I:3,H:"ke"})}
function xe(a){this.h=a;this.h.Cb("/client_streamz/bg/fsl",{I:3,H:"rk"},{I:3,H:"ke"})}
xe.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};
function ye(a){this.h=a;this.h.Cb("/client_streamz/bg/wrl",{I:3,H:"mn"},{I:2,H:"ac"},{I:2,H:"sc"},{I:3,H:"rk"},{I:3,H:"mk"})}
ye.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function ze(a){this.h=a;this.h.Cb("/client_streamz/bg/el",{I:3,H:"en"},{I:3,H:"bk"},{I:3,H:"rk"},{I:3,H:"mk"})}
ze.prototype.record=function(a,b,c,d,e){this.h.record("/client_streamz/bg/el",a,b,c,d,e)};
function Ae(a){this.h=a;this.h.Sa("/client_streamz/bg/cec",{I:2,H:"ec"},{I:3,H:"bk"},{I:3,H:"rk"},{I:3,H:"mk"})}
function Be(a){this.h=a;this.h.Sa("/client_streamz/bg/po/csc",{I:2,H:"cs"},{I:3,H:"rk"},{I:3,H:"mk"})}
function Ce(a){this.h=a;this.h.Sa("/client_streamz/bg/po/ctav",{I:3,H:"av"},{I:3,H:"rk"},{I:3,H:"mk"})}
function De(a){this.h=a;this.h.Sa("/client_streamz/bg/po/cwsc",{I:3,H:"su"},{I:3,H:"rk"},{I:3,H:"mk"})}
;Qc();var Ee=Tc()||I("iPod"),Fe=I("iPad");!I("Android")||Rc()||Qc()||Pc()||I("Silk");Rc();var Ge=I("Safari")&&!(Rc()||(Oc()?0:I("Coast"))||Pc()||(Oc()?0:I("Edge"))||(Oc()?Nc("Microsoft Edge"):I("Edg/"))||(Oc()?Nc("Opera"):I("OPR"))||Qc()||I("Silk")||I("Android"))&&!(Tc()||I("iPad")||I("iPod"));var He={},Ie=null;function Je(a,b){Qa(a);b===void 0&&(b=0);Ke();b=He[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function Le(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;Me(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Me(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=Ie[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
Ke();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function Ke(){if(!Ie){Ie={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));He[c]=d;for(var e=0;e<d.length;e++){var f=d[e];Ie[f]===void 0&&(Ie[f]=e)}}}}
;var Ne=typeof Uint8Array!=="undefined",Oe=!Wc&&typeof btoa==="function";function Pe(a){if(!Oe)return Je(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Qe=/[-_.]/g,Re={"-":"+",_:"/",".":"="};function Se(a){return Re[a]||""}
function Te(a){return Ne&&a!=null&&a instanceof Uint8Array}
var Ue={};var Ve;function We(a){if(a!==Ue)throw Error("illegal external caller");}
function Xe(a,b){We(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
Xe.prototype.sizeBytes=function(){We(Ue);var a=this.h;if(a!=null&&!Te(a))if(typeof a==="string")if(Oe){Qe.test(a)&&(a=a.replace(Qe,Se));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=Le(a);else Pa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};function Ye(){return typeof BigInt==="function"}
;var Ze=0,$e=0;function af(a){var b=a>>>0;Ze=b;$e=(a-b)/4294967296>>>0}
function bf(a){if(a<0){af(0-a);var b=w(cf(Ze,$e));a=b.next().value;b=b.next().value;Ze=a>>>0;$e=b>>>0}else af(a)}
function df(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Ye()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ef(c)+ef(a));return c}
function ef(a){a=String(a);return"0000000".slice(a.length)+a}
function ff(){var a=Ze,b=$e;b&2147483648?Ye()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(cf(a,b)),a=b.next().value,b=b.next().value,a="-"+df(a,b)):a=df(a,b);return a}
function cf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function gf(a){return Array.prototype.slice.call(a)}
;var hf=typeof Symbol==="function"&&typeof Symbol()==="symbol";function jf(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var kf=jf(),lf=jf("2ex"),mf=jf("1oa");Math.max.apply(Math,ma(Object.values({vg:1,tg:2,sg:4,yg:8,xg:16,wg:32,mf:64,Ag:128,rg:256,qg:512,ug:1024,sf:2048,zg:4096,tf:8192})));var nf=hf?function(a,b){a[kf]|=b}:function(a,b){a.Va!==void 0?a.Va|=b:Object.defineProperties(a,{Va:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},of=hf?function(a){return a[kf]|0}:function(a){return a.Va|0},pf=hf?function(a){return a[kf]}:function(a){return a.Va},qf=hf?function(a,b){a[kf]=b}:function(a,b){a.Va!==void 0?a.Va=b:Object.defineProperties(a,{Va:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function rf(a,b){qf(b,(a|0)&-14591)}
function sf(a,b){qf(b,(a|34)&-14557)}
;var tf={},uf={};function vf(a){return!(!a||typeof a!=="object"||a.h!==uf)}
function wf(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function xf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=of(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;qf(a,d|1);return!0}
var yf,zf=[];qf(zf,55);yf=Object.freeze(zf);function Af(a){if(a&2)throw Error();}
Object.freeze({});Object.freeze({});var Bf=Object.freeze({});var Cf;function Df(){var a=Error();ec(a,"incident");Ld(a)}
function Ef(a){a=Error(a);ec(a,"warning");return a}
;function Ff(a){return a.displayName||a.name||"unknown type name"}
function Gf(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Pa(a)+": "+a);return a}
var Hf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function If(a){var b=typeof a;return b==="number"?Number.isFinite(a):b!=="string"?!1:Hf.test(a)}
function Jf(a){if(typeof a!=="number")throw Ef("int32");if(!Number.isFinite(a))throw Ef("int32");return a|0}
function Kf(a){return a==null?a:Jf(a)}
function Lf(a){if(a==null)return a;if(typeof a==="string"){if(!a)return;a=+a}if(typeof a==="number")return Number.isFinite(a)?a|0:void 0}
function Mf(a){if(a!=null){var b=!!b;if(!If(a))throw Ef("int64");a=typeof a==="string"?Nf(a):b?Of(a):Pf(a)}return a}
function Qf(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function Pf(a){If(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){bf(a);var b=Ze,c=$e;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function Of(a){If(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Qf(b)?a=b:(bf(a),a=ff())}return a}
function Nf(a){If(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));a.indexOf(".");if(!Qf(a)){if(a.length<16)bf(Number(a));else if(Ye())a=BigInt(a),Ze=Number(a&BigInt(4294967295))>>>0,$e=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+(a[0]==="-");$e=Ze=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),$e*=1E6,Ze=Ze*1E6+d,Ze>=4294967296&&($e+=Math.trunc(Ze/4294967296),$e>>>=0,Ze>>>=0);b&&(b=w(cf(Ze,$e)),
a=b.next().value,b=b.next().value,Ze=a,$e=b)}a=ff()}return a}
function Rf(a){if(typeof a!=="string")throw Error();return a}
function Sf(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Tf(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ff(b)+" but got "+(a&&Ff(a.constructor)));}
function Uf(a,b,c){if(a!=null&&typeof a==="object"&&a.Ac===tf)return a;if(Array.isArray(a)){var d=of(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&qf(a,e);return new b(a)}}
;var Vf;function Wf(a,b){of(b);Vf=b;a=new a(b);Vf=void 0;return a}
function J(a,b,c){a==null&&(a=Vf);Vf=void 0;if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error("narr");d=of(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(wf(c[f])){d|=256;b=f-(+!!(d&512)-1);if(b>=1024)throw Error("pvtlmt");d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(b>1024)throw Error("spvt");d=d&-16760833|(b&1023)<<
14}}}qf(a,d);return a}
;function Xf(a){if(typeof Proxy!=="function")return a;var b=Yf(a);if(b)return b;b=new Proxy(a,{set:function(c,d,e){Zf();c[d]=e;return!0}});
$f(a,b);return b}
function Zf(){Df()}
var ag=void 0,bg=void 0;function Yf(a){var b;return(b=ag)==null?void 0:b.get(a)}
function cg(a){var b;return((b=bg)==null?void 0:b.get(a))||a}
function $f(a,b){(ag||(ag=new WeakMap)).set(a,b);(bg||(bg=new WeakMap)).set(b,a)}
;function dg(a,b){return eg(b)}
function eg(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(xf(a,void 0,0))return}else{if(Te(a))return Pe(a);if(a instanceof Xe){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=Pe(b)}}}return a}
;function fg(a,b,c){a=gf(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function gg(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=xf(a,void 0,0)?void 0:e&&of(a)&2?a:hg(a,b,c,d!==void 0,e);else if(wf(a)){var f={},g;for(g in a)f[g]=gg(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function hg(a,b,c,d,e){var f=d||c?of(a):0;d=d?!!(f&32):void 0;a=gf(a);for(var g=0;g<a.length;g++)a[g]=gg(a[g],b,c,d,e);c&&c(f,a);return a}
function ig(a){return a.Ac===tf?a.toJSON():eg(a)}
;function jg(a,b,c){c=c===void 0?sf:c;if(a!=null){if(Ne&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=of(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(qf(a,(d|34)&-12293),a):hg(a,jg,d&4?sf:c,!0,!0)}a.Ac===tf&&(c=a.G,d=pf(c),a=d&2?a:Wf(a.constructor,kg(c,d,!0)));return a}}
function kg(a,b,c){var d=c||b&2?sf:rf,e=!!(b&32);a=fg(a,b,function(f){return jg(f,e,d)});
nf(a,32|(c?2:0));return a}
function lg(a){var b=a.G,c=pf(b);return c&2?Wf(a.constructor,kg(b,c,!1)):a}
;function mg(a,b){a=a.G;return ng(a,pf(a),b)}
function og(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function ng(a,b,c,d){if(c===-1)return null;var e=b>>14&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(og(a,b,e,c)&&lf!=null){var g;a=(g=Cf)!=null?g:Cf={};g=a[lf]||0;g>=4||(a[lf]=g+1,Df())}return d}return og(a,b,e,c)}}
function K(a,b,c){var d=a.G,e=pf(d);Af(e);pg(d,e,b,c);return a}
function pg(a,b,c,d,e){wf(d);var f=b>>14&1023||536870912;if(c>=f||e&&!Jc){var g=b;if(b&256)e=a[a.length-1];else{if(d==null)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&qf(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function qg(a){return rg(a,sg,11,!1)!==void 0}
function tg(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function ug(a,b,c){var d=a.G,e=pf(d);Af(e);if(b==null)return pg(d,e,3),a;b=cg(b);if(!Array.isArray(b))throw Ef();var f=of(b),g=f,h=!!(2&f)||Object.isFrozen(b),k=!h&&(void 0===Bf||!1);if(!(4&f))for(f=21,h&&(b=gf(b),g=0,f=vg(f,e),f=wg(f,e,!0)),h=0;h<b.length;h++)b[h]=c(b[h]);k&&(b=gf(b),g=0,f=vg(f,e),f=wg(f,e,!0));f!==g&&qf(b,f);pg(d,e,3,b);return a}
function xg(a,b,c,d){a=a.G;var e=pf(a);Af(e);if(d==null){var f=yg(a);if(zg(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=yg(a);var g=zg(f,a,e,c);g!==b&&(g&&(e=pg(a,e,g)),f.set(c,b))}pg(a,e,b,d)}
function yg(a){if(hf){var b;return(b=a[mf])!=null?b:a[mf]=new Map}if(mf in a)return a[mf];b=new Map;Object.defineProperty(a,mf,{value:b});return b}
function zg(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];ng(b,c,g)!=null&&(e!==0&&(c=pg(b,c,e)),e=g)}a.set(d,e);return e}
function rg(a,b,c,d){a=a.G;var e=pf(a),f=ng(a,e,c,d);b=Uf(f,b,e);b!==f&&b!=null&&pg(a,e,c,b,d);return b}
function Ag(a,b,c,d){d=d===void 0?!1:d;b=rg(a,b,c,d);if(b==null)return b;a=a.G;var e=pf(a);if(!(e&2)){var f=lg(b);f!==b&&(b=f,pg(a,e,c,b,d))}return b}
function Bg(a,b,c,d){d!=null?Tf(d,b):d=void 0;return K(a,c,d)}
function Cg(a,b,c,d){var e=a.G,f=pf(e);Af(f);if(d==null)return pg(e,f,c),a;d=cg(d);if(!Array.isArray(d))throw Ef();for(var g=of(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),m=!l&&(void 0===Bf||!1),n=!0,p=!0,t=0;t<d.length;t++){var u=d[t];Tf(u,b);k||(u=!!(of(u.G)&2),n&&(n=!u),p&&(p=u))}k||(g|=5,g=n?g|8:g&-9,g=p?g|16:g&-17);if(m||l&&g!==h)d=gf(d),h=0,g=vg(g,f),g=wg(g,f,!0);g!==h&&qf(d,g);pg(e,f,c,d);return a}
function vg(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function wg(a,b,c){32&b&&c||(a&=-33);return a}
function Dg(a,b){a=mg(a,b);var c;a==null?c=a:If(a)?typeof a==="number"?c=Pf(a):c=Nf(a):c=void 0;return c}
function Eg(a){a=mg(a,1);var b=b===void 0?!1:b;b=a==null?a:If(a)?typeof a==="string"?Nf(a):b?Of(a):Pf(a):void 0;return b}
function Fg(a,b){return a!=null?a:b}
function Gg(a,b){var c=c===void 0?"":c;a=mg(a,b);return Fg(a==null||typeof a==="string"?a:void 0,c)}
function Hg(a){var b=0;b=b===void 0?0:b;a=mg(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return Fg(a,b)}
function Ig(a,b,c){return K(a,b,Sf(c))}
function Jg(a,b,c){if(c!=null){if(!Number.isFinite(c))throw Ef("enum");c|=0}return K(a,b,c)}
;function Kg(a){return a}
function Lg(a){return a}
function Mg(a,b,c,d){return Ng(a,b,c,d,Og,Pg)}
function Sg(a,b,c,d){return Ng(a,b,c,d,Tg,Ug)}
function Ng(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Vg(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var u=m,z=c.length-1;z>=0;z--){var x=c[z];if(!(x==null||d&&z===c.length-1&&x===d)){x=z-b;var H=e(x,t)+f(n,p,u);H<l&&(a=1+x,l=H);n++;t--;u+=Vg(x);p=Math.max(p,x)}}b=e(0,0)+f(n,p,u);b<l&&(a=0,l=b);if(d){n=h;p=g;u=m;t=k;for(var G in d)d=+G,isNaN(d)||d>=
1024||(n--,t++,u-=G.length,g=e(d,t)+f(n,p,u),g<l&&(a=1+d,l=g))}return a}
function Ug(a,b,c){return c+a*3+(a>1?a-1:0)}
function Tg(a,b){return(a>1?a-1:0)+(a-b)*4}
function Pg(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Og(a){return 40+4*a}
function Vg(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Wg,Xg;function L(a,b,c){this.G=J(a,b,c)}
r=L.prototype;r.toJSON=function(){return Yg(this)};
r.serialize=function(a){try{return Xg=!0,a&&(Wg=a===Lg||a!==Kg&&a!==Mg&&a!==Sg?Lg:a),JSON.stringify(Yg(this),dg)}finally{a&&(Wg=void 0),Xg=!1}};
function Zg(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");nf(b,32);return Wf(a,b)}
r.clone=function(){var a=this.G,b=pf(a);return Wf(this.constructor,kg(a,b,!1))};
r.Ac=tf;r.toString=function(){try{return Xg=!0,Yg(this).toString()}finally{Xg=!1}};
function Yg(a){var b;Xg?b=a.G:b=hg(a.G,ig,void 0,void 0,!1);var c=!Xg;var d=Ic?void 0:a.constructor.Ra;var e=pf(c?a.G:b);if(a=b.length){var f=b[a-1],g=wf(f);g?a--:f=void 0;var h=+!!(e&512)-1,k=a-h,l=!!Wg&&Jc&&!(e&512),m;e=(m=Wg)!=null?m:Lg;e=l?e(k,h,b,f):k;k=(m=l&&k!==e)?Array.prototype.slice.call(b,0,a):b;if(g||m){b:{var n=k;var p=f;g={};l=!1;if(m)for(var t=Math.max(0,e+h);t<n.length;t++){var u=n[t],z=t-h;u==null||xf(u,d,z)||vf(u)&&u.size===0||(n[t]=void 0,g[z]=u,l=!0)}if(p)for(var x in p)if(t=+x,
isNaN(t))g[x]=p[x];else if(u=p[x],Array.isArray(u)&&(xf(u,d,+x)||vf(u)&&u.size===0)&&(u=null),u==null&&(l=!0),m&&t<e){l=!0;u=t+h;for(z=n.length;z<=u;z++)n.push(void 0);n[u]=p[t]}else u!=null&&(g[x]=u);if(l){for(var H in g){p=g;break b}p=null}}n=p==null?f!=null:p!==f}m&&(a=k.length);for(;a>0;a--){H=a-1;x=k[H];H-=h;if(!(x==null||xf(x,d,H)||vf(x)&&x.size===0))break;var G=!0}if(k!==b||n||G){if(!m&&!c)k=Array.prototype.slice.call(k,0,a);else if(G||n||p)k.length=a;p&&k.push(p)}G=k}else G=b;return G}
;function $g(a){a.Kg=!0;return a}
;function ah(a){this.G=J(a)}
y(ah,L);ah.Ra=[1,2,3,4];var bh={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);a>0;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function ch(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=dh(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;g>=12;g-=12,h+=12)c+=eh(a,h),d+=eh(a,h+4),e+=eh(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return bh.toString(e)}
function dh(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function eh(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function fh(a){this.G=J(a)}
y(fh,L);var gh=[1,2,3];function hh(a){this.G=J(a)}
y(hh,L);var ih=[1,2,3];function jh(a){this.G=J(a)}
y(jh,L);jh.Ra=[1];function kh(a){this.G=J(a)}
y(kh,L);kh.Ra=[3,6,4];function lh(a){this.G=J(a)}
y(lh,L);lh.Ra=[1];function mh(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function nh(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],z=e[2],x=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var G=x^u&(z^x);var R=1518500249}else G=u^z^x,R=1859775393;else t<60?(G=u&z|x&(u|z),R=2400959708):(G=u^z^x,R=3395469782);G=((n<<5|n>>>27)&4294967295)+G+H+R+p[t]&4294967295;H=x;x=z;z=(u<<30|u>>>2)&4294967295;u=n;n=G}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+x&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],u=0,z=n.length;u<z;++u)t.push(n.charCodeAt(u));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var u=24;u>=0;u-=8)n[p++]=e[t]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Jd:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function oh(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,ph(mh(d),a,c||null)].join(" "):null}
function ph(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Db(d,function(h){e.push(h)}),qh(e.join(" "));
var f=[],g=[];Db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Db(d,function(h){e.push(h)});
a=qh(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function qh(a){var b=nh();b.update(a);return b.Jd().toLowerCase()}
;function rh(a){this.h=a||{cookie:""}}
r=rh.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Kb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.ze;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Kb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Kb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var sh=new rh(typeof document=="undefined"?null:document);function th(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new rh(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function uh(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new rh(document)).get(b));return a?oh(a,c,d):null}
function vh(a){var b=mh(String(C.location.href)),c=[];if(th()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new rh(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?oh(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=uh("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=uh("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function wh(a){this.G=J(a)}
y(wh,L);wh.Ra=[2];function xh(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Za()};
this.i=this.h()}
xh.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
xh.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
xh.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
xh.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function yh(a){this.G=J(a)}
y(yh,L);function zh(a){this.G=J(a)}
y(zh,L);function Ah(a){this.h=this.i=this.j=a}
Ah.prototype.reset=function(){this.h=this.i=this.j};
Ah.prototype.getValue=function(){return this.i};function Bh(a){this.G=J(a)}
y(Bh,L);Bh.prototype.ac=function(){return Hg(this)};function Ch(a){this.G=J(a)}
y(Ch,L);function Dh(a){this.G=J(a)}
y(Dh,L);function Eh(a,b){Cg(a,Ch,1,b)}
Dh.Ra=[1];function sg(a){this.G=J(a)}
y(sg,L);var Fh=["platform","platformVersion","architecture","model","uaFullVersion"],Gh=new Dh,Hh=null;function Ih(a,b){b=b===void 0?Fh:b;if(!Hh){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Ch;f=Ig(f,1,e.brand);return Ig(f,2,e.version)});
Eh(K(Gh,2,Gf(a.mobile)),c);Hh=a.getHighEntropyValues(b)}var d=new Set(b);return Hh.then(function(e){var f=Gh.clone();d.has("platform")&&Ig(f,3,e.platform);d.has("platformVersion")&&Ig(f,4,e.platformVersion);d.has("architecture")&&Ig(f,5,e.architecture);d.has("model")&&Ig(f,6,e.model);d.has("uaFullVersion")&&Ig(f,7,e.uaFullVersion);return f}).catch(function(){return Gh.clone()})}
;function Jh(a){this.G=J(a)}
y(Jh,L);function Kh(a){this.G=J(a,4)}
y(Kh,L);function Lh(a){this.G=J(a,35)}
y(Lh,L);Lh.Ra=[3,20,27];function Mh(a){this.G=J(a,19)}
y(Mh,L);Mh.prototype.Nb=function(a){return Jg(this,2,a)};
Mh.Ra=[3,5];function Nh(a){this.G=J(a,8)}
y(Nh,L);var Oh=function(a){return function(b){return Zg(a,b)}}(Nh);
Nh.Ra=[5,6,7];function Ph(a){this.G=J(a)}
y(Ph,L);var Qh=new function(){this.ctor=Ph;this.isRepeated=0;this.h=Ag;this.defaultValue=void 0};function Rh(a){F.call(this);var b=this;this.componentId="";this.j=[];this.X="";this.pageId=null;this.ga=this.U=-1;this.experimentIds=null;this.K=this.o=0;this.ia=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Hb=a.Hb||function(){};
this.i=new Sh(a.logSource,a.cb);this.network=a.network;this.xb=a.xb||null;this.bufferSize=1E3;this.v=a.Xe||null;this.sessionIndex=a.sessionIndex||null;this.Fb=a.Fb||!1;this.logger=null;this.withCredentials=!a.Tc;this.cb=a.cb||!1;this.F=typeof URLSearchParams!=="undefined"&&!!(new URL(Th())).searchParams&&!!(new URL(Th())).searchParams.set;var c=Jg(new Jh,1,1);Uh(this.i,c);this.m=new Ah(1E4);a=Vh(this,a.Nc);this.h=new xh(this.m.getValue(),a);this.W=new xh(6E5,a);this.Fb||this.W.start();this.cb||(document.addEventListener("visibilitychange",
function(){document.visibilityState==="hidden"&&b.sc()}),document.addEventListener("pagehide",this.sc.bind(this)))}
y(Rh,F);function Vh(a,b){return a.F?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=Rh.prototype;r.da=function(){this.sc();this.h.stop();this.W.stop();F.prototype.da.call(this)};
r.log=function(a){if(this.F){a=a.clone();var b=this.ia++;a=K(a,21,Mf(b));this.componentId&&Ig(a,26,this.componentId);if(Eg(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";K(b,1,Mf(c))}Dg(a,15)==null&&K(a,15,Mf((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Bg(b,wh,16,c));b=this.j.length-this.bufferSize+1;b>0&&(this.j.splice(0,b),this.o+=b);this.j.push(a);this.Fb||this.h.enabled||this.h.start()}};
r.flush=function(a,b){var c=this;if(this.j.length===0)a&&a();else{var d=Date.now();if(this.ga>d&&this.U<d)b&&b("throttled");else{this.network&&(typeof this.network.ac==="function"?Wh(this.i,this.network.ac()):Wh(this.i,0));var e=Xh(this.i,this.j,this.o,this.K,this.xb);d={};var f=this.Hb();f&&(d.Authorization=f);this.v||(this.v=Th());try{var g=(new URL(this.v)).toString()}catch(k){g=(new URL(this.v,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.X===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.o=0;var h=e.serialize();d={url:g.toString(),body:h,Dg:1,ld:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.m.reset();c.h.setInterval(c.m.getValue());if(k){var l=null;try{var m=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=Oh(m)}catch(n){}l&&(k=Number,m="-1",m=m===void 0?"0":m,m=Fg(Eg(l),m),k=k(m),k>0&&(c.U=Date.now(),c.ga=c.U+k),l=Qh.ctor?Qh.h(l,Qh.ctor,175237375,!0):Qh.h(l,175237375,null,!0),l=l===null?void 0:l)&&(k=-1,k=k===void 0?0:k,l=Fg(Lf(mg(l,1)),k),l!==-1&&(c.m=new Ah(l<1?1:l),c.h.setInterval(c.m.getValue())))}a&&a();c.K=0};
h=function(k,l){var m,n=e.G,p=pf(n),t=p,u=!(2&p),z=(p=!!(2&t))?1:2;u&&(u=!p);p=ng(n,t,3);p=Array.isArray(p)?p:yf;var x=of(p),H=!!(4&x);if(!H){var G=x;G===0&&(G=vg(G,t));x=p;G|=1;var R=t,O=!!(2&G);O&&(R|=2);for(var da=!O,Ca=!0,P=0,ea=0;P<x.length;P++){var ja=Uf(x[P],Lh,R);if(ja instanceof Lh){if(!O){var oa=!!(of(ja.G)&2);da&&(da=!oa);Ca&&(Ca=oa)}x[ea++]=ja}}ea<P&&(x.length=ea);G|=4;G=Ca?G|16:G&-17;G=da?G|8:G&-9;qf(x,G);O&&Object.freeze(x);x=G}if(u&&!(8&x||!p.length&&(z===1||z===4&&32&x))){tg(x)&&(p=
gf(p),x=vg(x,t),t=pg(n,t,3,p));u=p;for(G=0;G<u.length;G++)R=u[G],O=lg(R),R!==O&&(u[G]=O);x|=8;x=u.length?x&-17:x|16;qf(u,x)}z===1||z===4&&32&x?tg(x)||(t=x,n=!!(32&x),x|=!p.length||16&x&&(!H||n)?2:2048,x!==t&&qf(p,x),Object.freeze(p)):(H=z!==5?!1:!!(32&x)||tg(x)||!!Yf(p),(z===2||H)&&tg(x)&&(p=gf(p),x=vg(x,t),x=wg(x,t,!1),qf(p,x),t=pg(n,t,3,p)),tg(x)||(n=x,x=wg(x,t,!1),x!==n&&qf(p,x)),H&&(m=Xf(p)));m=m||p;t=Dg(e,14);n=c.m;n.h=Math.min(3E5,n.h*2);n.i=Math.min(3E5,n.h+Math.round((Math.random()-.5)*.2*
n.h));c.h.setInterval(c.m.getValue());k===401&&f&&(c.X=f);t&&(c.o+=t);l===void 0&&(l=c.isRetryable(k));l&&(c.j=m.concat(c.j),c.Fb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.K};
c.network&&c.network.send(d,g,h)}}}};
r.sc=function(){Yh(this.i,!0);this.flush();Yh(this.i,!1)};
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Th(){return"https://play.google.com/log?format=json&hasfast=true"}
function Sh(a,b){this.cb=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Mh;Number.isInteger(a)&&this.h.Nb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Uh(this,new Jh)}
Sh.prototype.Nb=function(a){this.h.Nb(a);return this};
function Uh(a,b){Bg(a.h,Jh,1,b);Hg(b)||Jg(b,1,1);a.cb||(b=Zh(a),Gg(b,5)||Ig(b,5,a.locale));a.i&&(b=Zh(a),Ag(b,Dh,9)||Bg(b,Dh,9,a.i))}
function Wh(a,b){qg($h(a))&&(a=ai(a),Jg(a,1,b))}
function Yh(a,b){qg($h(a))&&(a=ai(a),K(a,2,Gf(b)))}
function $h(a){return Ag(a.h,Jh,1)}
function bi(a){var b=b===void 0?Fh:b;var c=a.cb?void 0:window;c?Ih(c,b).then(function(d){a.i=d;d=Zh(a);Bg(d,Dh,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Zh(a){a=$h(a);var b=Ag(a,sg,11);b||(b=new sg,Bg(a,sg,11,b));return b}
function ai(a){a=Zh(a);var b=Ag(a,Bh,10);b||(b=new Bh,K(b,2,Gf(!1)),Bg(a,Bh,10,b));return b}
function Xh(a,b,c,d,e){var f=0,g=0;c=c===void 0?0:c;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(qg($h(a))){var h=ai(a);K(h,3,Kf(d))}qg($h(a))&&(d=ai(a),K(d,4,Kf(f)));qg($h(a))&&(f=ai(a),K(f,5,Kf(g)));a=a.h.clone();g=Date.now().toString();a=K(a,4,Mf(g));b=b.slice();b=Cg(a,Lh,3,b);e&&(a=new yh,e=K(a,13,Kf(e)),a=new zh,e=Bg(a,yh,2,e),a=new Kh,e=Bg(a,zh,1,e),e=Jg(e,2,9),Bg(b,Kh,18,e));c&&K(b,14,Mf(c));return b}
;function ci(){this.Bd=typeof AbortController!=="undefined"}
ci.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:return f=(e=d.Bd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,Aa(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.ld)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.D(3);break}if((l=b)==null){u.D(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.K=[u.j];u.m=0;u.B=0;clearTimeout(f);Da(u);break;case 2:m=Ba(u);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}u.D(3)}})};
ci.prototype.ac=function(){return 4};function di(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.j="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.m=!1;this.network=null;this.componentId="";this.pageId=this.i=this.xb=null}
y(di,F);di.prototype.Tc=function(){this.o=!0;return this};
function ei(a){a.network||(a.network=new ci);var b=new Rh({logSource:a.logSource,Hb:a.Hb?a.Hb:vh,sessionIndex:a.sessionIndex,Xe:a.j,cb:a.m,Fb:!1,Tc:a.o,Nc:a.Nc,network:a.network});Ec(a,b);if(a.h){var c=a.h,d=Zh(b.i);Ig(d,7,c)}a.componentId&&(b.componentId=a.componentId);a.xb&&(b.xb=a.xb);a.pageId&&(b.pageId=a.pageId);a.i&&((d=a.i)?(b.experimentIds||(b.experimentIds=new wh),c=b.experimentIds,d=d.serialize(),Ig(c,4,d)):b.experimentIds&&K(b.experimentIds,4));bi(b.i);a.network.Nb&&a.network.Nb(a.logSource);
a.network.Ke&&a.network.Ke(b);return b}
;function fi(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new di(a,"0"),a.componentId=b,Ec(this,a),c!==""&&(a.j=c),d&&(a.m=!0),e&&(a.h=e),g&&(a.network=g),b=ei(a));this.h=b}
y(fi,F);
fi.prototype.flush=function(a){var b=a||[];if(b.length){a=new lh;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new kh;f=Ig(f,1,e.m);for(var g=[],h=0;h<e.fields.length;h++)g.push(e.fields[h].H);f=ug(f,g,Rf);g=[];h=[];for(var k=w(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.j;for(var n=e.uc(l)||[],p=[],t=0;t<n.length;t++){var u=n[t],z=u&&u.h;u=new hh;switch(m){case 3:z=Number(z);Number.isFinite(z)&&xg(u,1,ih,Mf(z));break;case 2:z=Number(z);
if(z!=null&&typeof z!=="number")throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);xg(u,2,ih,z)}p.push(u)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new jh;p=Bg(t,hh,2,p);t=l;u=[];z=[];for(var x=0;x<e.fields.length;x++)z.push(e.fields[x].I);for(x=0;x<z.length;x++){var H=z[x],G=t[x],R=new fh;switch(H){case 3:xg(R,1,gh,Sf(String(G)));break;case 2:H=Number(G);Number.isFinite(H)&&xg(R,2,gh,Kf(H));break;case 1:xg(R,3,gh,Gf(G==="true"))}u.push(R)}Cg(p,fh,1,u);g.push(p)}}Cg(f,
jh,4,g);c.push(f);e.clear()}Cg(a,kh,1,c);b=this.h;b.F&&(a instanceof Lh?b.log(a):(c=new Lh,a=a.serialize(),a=Ig(c,8,a),b.log(a)));this.h.flush()}};function gi(){}
gi.prototype.serialize=function(a){var b=[];hi(this,a,b);return b.join("")};
function hi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),hi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),ii(d,c),c.push(":"),hi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ii(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var ji={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},ki=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function ii(a,b){b.push('"',a.replace(ki,function(c){var d=ji[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),ji[c]=d);return d}),'"')}
;function li(){}
li.prototype.h=null;li.prototype.getOptions=function(){var a;(a=this.h)||(a=this.h={});return a};var mi;function ni(){}
$a(ni,li);mi=new ni;function oi(a){xd.call(this);this.headers=new Map;this.za=a||null;this.i=!1;this.K=this.V=null;this.m=this.X="";this.j=this.W=this.o=this.U=!1;this.F=0;this.v=null;this.qa="";this.ia=!1}
$a(oi,xd);var pi=/^https?$/i,qi=["POST","PUT"],ri=[];function si(a,b,c,d,e,f,g){var h=new oi;ri.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Hd,!0,void 0,void 0);f&&(h.F=Math.max(0,f));g&&(h.ia=g);h.send(a,c,d,e)}
r=oi.prototype;r.Hd=function(){this.dispose();Ib(ri,this)};
r.send=function(a,b,c,d){if(this.V)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.m="";this.U=!1;this.i=!0;this.V=new XMLHttpRequest;this.K=this.za?this.za.getOptions():mi.getOptions();this.V.onreadystatechange=Xa(this.ed,this);try{this.getStatus(),this.W=!0,this.V.open(b,String(a),!0),this.W=!1}catch(g){this.getStatus();ti(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,
d[e]);else if(typeof d.keys==="function"&&typeof d.get==="function"){e=w(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Cb(qi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=w(c);for(d=b.next();!d.done;d=b.next())c=w(d.value),d=c.next().value,c=c.next().value,this.V.setRequestHeader(d,c);this.qa&&(this.V.responseType=this.qa);"withCredentials"in this.V&&this.V.withCredentials!==this.ia&&(this.V.withCredentials=this.ia);try{ui(this),this.F>0&&(this.getStatus(),this.v=me(this.Ue,this.F,this)),this.getStatus(),this.o=!0,this.V.send(a),this.o=
!1}catch(g){this.getStatus(),ti(this,g)}};
r.Ue=function(){typeof Na!="undefined"&&this.V&&(this.m="Timed out after "+this.F+"ms, aborting",this.getStatus(),yd(this,"timeout"),this.abort(8))};
function ti(a,b){a.i=!1;a.V&&(a.j=!0,a.V.abort(),a.j=!1);a.m=b;vi(a);wi(a)}
function vi(a){a.U||(a.U=!0,yd(a,"complete"),yd(a,"error"))}
r.abort=function(){this.V&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.V.abort(),this.j=!1,yd(this,"complete"),yd(this,"abort"),wi(this))};
r.da=function(){this.V&&(this.i&&(this.i=!1,this.j=!0,this.V.abort(),this.j=!1),wi(this,!0));oi.Ca.da.call(this)};
r.ed=function(){this.ja||(this.W||this.o||this.j?xi(this):this.ne())};
r.ne=function(){xi(this)};
function xi(a){if(a.i&&typeof Na!="undefined")if(a.K[1]&&yi(a)==4&&a.getStatus()==2)a.getStatus();else if(a.o&&yi(a)==4)me(a.ed,0,a);else if(yd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(zi(a))yd(a,"complete"),yd(a,"success");else{try{var b=yi(a)>2?a.V.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";vi(a)}}finally{wi(a)}}}
function wi(a,b){if(a.V){ui(a);var c=a.V,d=a.K[0]?function(){}:null;
a.V=null;a.K=null;b||yd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function ui(a){a.v&&(C.clearTimeout(a.v),a.v=null)}
r.isActive=function(){return!!this.V};
r.isComplete=function(){return yi(this)==4};
function zi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=nc(1,String(a.X)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!pi.test(a?a.toLowerCase():"");c=b}return c}
function yi(a){return a.V?a.V.readyState:0}
r.getStatus=function(){try{return yi(this)>2?this.V.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.m==="string"?this.m:String(this.m)};function Ai(){}
Ai.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
si(a.url,function(d){d=d.target;if(zi(d)){try{var e=d.V?d.V.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.ld,a.timeoutMillis,a.withCredentials)};
Ai.prototype.ac=function(){return 1};function Bi(a,b,c){this.logger=a;this.event=b;if(c===void 0||c)this.h=Ci()}
Bi.prototype.start=function(){this.h=Ci()};
Bi.prototype.done=function(){this.h!=null&&this.logger.m(this.event,Ci()-this.h)};
function Di(){F.apply(this,arguments)}
y(Di,F);function Ei(a,b){var c=Ci();b=b();a.m("n",Ci()-c);return b}
function Fi(){Di.apply(this,arguments)}
y(Fi,Di);Fi.prototype.F=function(){};
Fi.prototype.m=function(){};
Fi.prototype.Ha=function(){};
Fi.prototype.i=function(){};
function Gi(a,b,c,d){c=c===void 0?"":c;Di.call(this);this.Fa=b;this.U=c;this.v=new Map;this.j=new Map;b=new di(1828,"0");b.h="22";b.network=new Ai;d&&(c=new ah,d=ug(c,d,Jf),b.i=d);this.K=new fi(1828,"","",!1,"",ei(b));this.h=new ne(this.K);this.h.m=1E5;d=this.h;d.flushInterval=3E4;d.h.setInterval(3E4);this.qa=new te(this.h);this.za=new we(this.h);this.Ka=new xe(this.h);this.ia=new se(this.h);this.W=new ue(this.h);this.X=new ve(this.h);this.errorCount=new Ae(this.h);this.ga=new ze(this.h);new ye(this.h);
new Be(this.h);new Ce(this.h);new De(this.h);this.o=a?ch(a):"";a=new re(this.h);this.v.set("h",1);this.v.set("u",2);this.v.set("k",3);this.j.set(25,1);this.j.set(26,2);this.j.set(27,3);this.j.set(28,4);a.h.zb("/client_streamz/bg/fic",this.Fa);Ec(this,this.K);Ec(this,this.h)}
y(Gi,Di);Gi.prototype.F=function(){this.za.h.zb("/client_streamz/bg/fsc",this.o,this.Fa)};
Gi.prototype.m=function(a,b){if(a==="t")this.qa.record(b,this.o,this.Fa);else if(a==="n")this.Ka.record(b,this.o,this.Fa);else if(a==="h"||a==="u"||a==="k"){if(a=this.v.get(a))this.W.h.zb("/client_streamz/bg/fcc",a,this.Fa),this.X.record(b,a,this.Fa)}else this.ga.record(b,a,"",this.U,this.Fa)};
Gi.prototype.Ha=function(a){var b=this.j.get(a);b?this.ia.h.zb("/client_streamz/bg/fiec",this.o,this.Fa,b):this.errorCount.h.zb("/client_streamz/bg/cec",a,"",this.U,this.Fa)};
Gi.prototype.i=function(){this.h.nc()};
function Ci(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function Hi(a){this.G=J(a,0,"bfkj")}
y(Hi,L);var Ii=function(a){return $g(function(b){return b instanceof a&&!(of(b.G)&2)})}(Hi);function Ji(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Ki(a){function b(n,p,t){Promise.resolve().then(function(){l.done();d.ba.i();k.resolve({Ed:n,Ne:p,Qg:t})})}
function c(n,p,t,u){var z="k";p?z="h":t&&(z="u");z!=="k"?u!==0&&d.ba.m(z,n):d.h<=0?(d.ba.m(z,n),d.h=Math.floor(Math.random()*200)):d.h--}
F.call(this);var d=this;this.h=Math.floor(Math.random()*200);if("challenge"in a&&Ii(a.challenge)){var e=Gg(a.challenge,4);var f=Gg(a.challenge,5)}else e=a.program,f=a.Ud;var g=new F;this.addOnDisposeCallback(function(){d.i.then(function(n){n=n.Ne;d.ba.i();n==null||n();g.dispose()})});
if(a.se!==!1)if(a.ba)this.ba=a.ba;else{var h;Ec(g,this.ba=new Gi(f,(h=a.Fa)!=null?h:"_"))}else Ec(g,this.ba=new Fi);var k=new Ji;this.i=k.promise;var l=new Bi(this.ba,"t",!1);if(!C[f])throw this.ba.Ha(25),this.ba.i(),Error("EGOU");if(!C[f].a)throw this.ba.Ha(26),this.ba.i(),Error("ELIU");try{var m=C[f].a;l.start();this.j=w(m(e,b,!0,a.ah,c)).next().value;this.Me=k.promise.then(function(){})}catch(n){throw this.ba.Ha(28),this.ba.i(),n;
}}
y(Ki,F);Ki.prototype.snapshot=function(a){var b=this;if(this.ja)throw Error("Already disposed");this.ba.F();return this.i.then(function(c){var d=c.Ed;return new Promise(function(e){var f=new Bi(b.ba,"n");d(function(g){f.done();b.ba.i();e(g)},[a.Sc,
a.Oe,a.Ze,a.Pe])})})};
Ki.prototype.qd=function(a){var b=this;if(this.ja)throw Error("Already disposed");this.ba.F();var c=Ei(this.ba,function(){return b.j([a.Sc,a.Oe,a.Ze,a.Pe])});
this.ba.i();return c};
Ki.prototype.getLogger=function(){return this.ba};var Li=window;ib("csi.gstatic.com");ib("googleads.g.doubleclick.net");ib("partner.googleadservices.com");ib("pubads.g.doubleclick.net");ib("securepubads.g.doubleclick.net");ib("tpc.googlesyndication.com");function Mi(a){var b=Ni;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Oi(){var a=[];Mi(function(b){a.push(b)});
return a}
var Ni={af:"allow-forms",bf:"allow-modals",cf:"allow-orientation-lock",df:"allow-pointer-lock",ef:"allow-popups",ff:"allow-popups-to-escape-sandbox",gf:"allow-presentation",hf:"allow-same-origin",jf:"allow-scripts",kf:"allow-top-navigation",lf:"allow-top-navigation-by-user-activation"},Pi=Dd(function(){return Oi()});
function Qi(){var a=Ri(),b={};Db(Pi(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ri(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Si(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Ti=(new Date).getTime();function Ui(){var a=Vi;return $g(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
;function Wi(a){xd.call(this);var b=this;this.v=this.j=0;this.Ea=a!=null?a:{ra:function(e,f){return setTimeout(e,f)},
sa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.m=function(){return A(function(e){return e.yield(Xi(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.v||Yi(this)}
y(Wi,xd);function Zi(){var a=$i;Wi.h||(Wi.h=new Wi(a));return Wi.h}
Wi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.Ea.sa(this.v);delete Wi.h};
Wi.prototype.xa=function(){return this.i};
function Yi(a){a.v=a.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.D(3):c.yield(Xi(a),3):c.yield(Xi(a),3);Yi(a);c.h=0})},3E4)}
function Xi(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,Aa(h,2,3),d&&(a.j=a.Ea.ra(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.K=[h.j];h.m=0;h.B=0;a.o=void 0;a.j&&(a.Ea.sa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?yd(a,"networkstatus-online"):yd(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.D(3)}})})}
;function aj(){this.data=[];this.h=-1}
aj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
aj.prototype.get=function(a){return!!this.data[a]};
function bj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function cj(){this.blockSize=-1}
;function dj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.B=[];this.o=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.m=this.i=0;this.reset()}
$a(dj,cj);dj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.m=this.i=0};
function ej(a,b,c){c||(c=0);var d=a.o;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;e<80;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;e<80;e++){if(e<40)if(e<20){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else e<60?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
dj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.B,f=this.i;d<b;){if(f==0)for(;d<=c;)ej(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ej(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ej(this,e);f=0;break}}this.i=f;this.m+=b}};
dj.prototype.digest=function(){var a=[],b=this.m*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.B[c]=b&255,b/=256;ej(this,this.B);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function fj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function gj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function hj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:fj(a).match(/\S+/g)||[],b=Cb(a,b)>=0);return b}
function ij(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):hj(a,"inverted-hdpi")&&gj(a,Array.prototype.filter.call(a.classList?a.classList:fj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function jj(){}
jj.prototype.next=function(){return kj};
var kj={done:!0,value:void 0};jj.prototype.lb=function(){return this};function lj(a){if(a instanceof mj||a instanceof nj||a instanceof oj)return a;if(typeof a.next=="function")return new mj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new mj(function(){return a[Symbol.iterator]()});
if(typeof a.lb=="function")return new mj(function(){return a.lb()});
throw Error("Not an iterator or iterable.");}
function mj(a){this.h=a}
mj.prototype.lb=function(){return new nj(this.h())};
mj.prototype[Symbol.iterator]=function(){return new oj(this.h())};
mj.prototype.i=function(){return new oj(this.h())};
function nj(a){this.h=a}
y(nj,jj);nj.prototype.next=function(){return this.h.next()};
nj.prototype[Symbol.iterator]=function(){return new oj(this.h)};
nj.prototype.i=function(){return new oj(this.h)};
function oj(a){mj.call(this,function(){return a});
this.j=a}
y(oj,mj);oj.prototype.next=function(){return this.j.next()};function M(a){F.call(this);this.o=1;this.j=[];this.m=0;this.h=[];this.i={};this.v=!!a}
$a(M,F);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.o;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.o=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Qb(a)}return!1};
r.Qb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.m!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Ib(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.kb=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];pj(this.h[g+1],this.h[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.ja;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.m--,this.j.length>0&&this.m==0)for(;c=this.j.pop();)this.Qb(c)}}return e!=0}return!1};
function pj(a,b,c){Sd(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Qb,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.da=function(){M.Ca.da.call(this);this.clear();this.j.length=0};function qj(a){this.h=a}
qj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new gi).serialize(b))};
qj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
qj.prototype.remove=function(a){this.h.remove(a)};function rj(a){this.h=a}
$a(rj,qj);function sj(a){this.data=a}
function tj(a){return a===void 0||a instanceof sj?a:new sj(a)}
rj.prototype.set=function(a,b){rj.Ca.set.call(this,a,tj(b))};
rj.prototype.i=function(a){a=rj.Ca.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
rj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function uj(a){this.h=a}
$a(uj,rj);uj.prototype.set=function(a,b,c){if(b=tj(b)){if(c){if(c<Za()){uj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Za()}uj.Ca.set.call(this,a,b)};
uj.prototype.i=function(a){var b=uj.Ca.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Za()||c&&c>Za())uj.prototype.remove.call(this,a);else return b}};function vj(){}
;function wj(){}
$a(wj,vj);wj.prototype[Symbol.iterator]=function(){return lj(this.lb(!0)).i()};
wj.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function xj(a){this.h=a;this.i=null}
$a(xj,wj);r=xj.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){yj(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){yj(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){yj(this);this.h.removeItem(a)};
r.lb=function(a){yj(this);var b=0,c=this.h,d=new jj;d.next=function(){if(b>=c.length)return kj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){yj(this);this.h.clear()};
r.key=function(a){yj(this);return this.h.key(a)};
function yj(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ld(Error("Storage mechanism: Storage unavailable"))}
;function zj(){var a=null;try{a=C.localStorage||null}catch(b){}xj.call(this,a)}
$a(zj,xj);function Aj(a,b){this.i=a;this.h=b+"::"}
$a(Aj,wj);Aj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
Aj.prototype.get=function(a){return this.i.get(this.h+a)};
Aj.prototype.remove=function(a){this.i.remove(this.h+a)};
Aj.prototype.lb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new jj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Bj=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Ic=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Cj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Vc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Dj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Vc:function(a){return[].concat.apply([],a)}};
N.Le=function(){Bj?(N.jb=Uint8Array,N.Ja=Uint16Array,N.zd=Int32Array,N.assign(N,Cj)):(N.jb=Array,N.Ja=Array,N.zd=Array,N.assign(N,Dj))};
N.Le();var Ej=!0;try{new Uint8Array(1)}catch(a){Ej=!1}
function Fj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Gj={};Gj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Hj={},Ij,Jj=[],Kj=0;Kj<256;Kj++){Ij=Kj;for(var Lj=0;Lj<8;Lj++)Ij=Ij&1?3988292384^Ij>>>1:Ij>>>1;Jj[Kj]=Ij}Hj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Jj[(a^b[d])&255];return a^-1};var Mj={};Mj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Nj(a){for(var b=a.length;--b>=0;)a[b]=0}
var Oj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Pj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Qj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Rj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Sj=Array(576);Nj(Sj);var Tj=Array(60);Nj(Tj);var Uj=Array(512);Nj(Uj);var Vj=Array(256);Nj(Vj);var Wj=Array(29);Nj(Wj);var Xj=Array(30);Nj(Xj);function Yj(a,b,c,d,e){this.rd=a;this.Qd=b;this.Pd=c;this.Kd=d;this.ke=e;this.Yc=a&&a.length}
var Zj,ak,bk;function ck(a,b){this.Uc=a;this.ub=0;this.Xa=b}
function dk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function ek(a,b,c){a.ka>16-c?(a.pa|=b<<a.ka&65535,dk(a,a.pa),a.pa=b>>16-a.ka,a.ka+=c-16):(a.pa|=b<<a.ka&65535,a.ka+=c)}
function fk(a,b,c){ek(a,c[b*2],c[b*2+1])}
function gk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function hk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=gk(d[e]++,e))}
function ik(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.ab[b*2]=0;for(b=0;b<19;b++)a.la[b*2]=0;a.ta[512]=1;a.Qa=a.yb=0;a.Aa=a.matches=0}
function jk(a){a.ka>8?dk(a,a.pa):a.ka>0&&(a.aa[a.pending++]=a.pa);a.pa=0;a.ka=0}
function kk(a,b,c){jk(a);dk(a,c);dk(a,~c);N.mb(a.aa,a.window,b,c,a.pending);a.pending+=c}
function lk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function mk(a,b,c){for(var d=a.ea[c],e=c<<1;e<=a.Oa;){e<a.Oa&&lk(b,a.ea[e+1],a.ea[e],a.depth)&&e++;if(lk(b,d,a.ea[e],a.depth))break;a.ea[c]=a.ea[e];c=e;e<<=1}a.ea[c]=d}
function nk(a,b,c){var d=0;if(a.Aa!==0){do{var e=a.aa[a.Eb+d*2]<<8|a.aa[a.Eb+d*2+1];var f=a.aa[a.xc+d];d++;if(e===0)fk(a,f,b);else{var g=Vj[f];fk(a,g+256+1,b);var h=Oj[g];h!==0&&(f-=Wj[g],ek(a,f,h));e--;g=e<256?Uj[e]:Uj[256+(e>>>7)];fk(a,g,c);h=Pj[g];h!==0&&(e-=Xj[g],ek(a,e,h))}}while(d<a.Aa)}fk(a,256,b)}
function ok(a,b){var c=b.Uc,d=b.Xa.rd,e=b.Xa.Yc,f=b.Xa.Kd,g,h=-1;a.Oa=0;a.pb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ea[++a.Oa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Oa<2;){var k=a.ea[++a.Oa]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Qa--;e&&(a.yb-=d[k*2+1])}b.ub=h;for(g=a.Oa>>1;g>=1;g--)mk(a,c,g);k=f;do g=a.ea[1],a.ea[1]=a.ea[a.Oa--],mk(a,c,1),d=a.ea[1],a.ea[--a.pb]=g,a.ea[--a.pb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ea[1]=k++,mk(a,c,1);while(a.Oa>=
2);a.ea[--a.pb]=a.ea[1];g=b.Uc;k=b.ub;d=b.Xa.rd;e=b.Xa.Yc;f=b.Xa.Qd;var l=b.Xa.Pd,m=b.Xa.ke,n,p=0;for(n=0;n<=15;n++)a.La[n]=0;g[a.ea[a.pb]*2+1]=0;for(b=a.pb+1;b<573;b++){var t=a.ea[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.La[n]++;var u=0;t>=l&&(u=f[t-l]);var z=g[t*2];a.Qa+=z*(n+u);e&&(a.yb+=z*(d[t*2+1]+u))}}if(p!==0){do{for(n=m-1;a.La[n]===0;)n--;a.La[n]--;a.La[n+1]+=2;a.La[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.La[n];t!==0;)d=a.ea[--b],d>k||(g[d*2+1]!==n&&(a.Qa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}hk(c,h,a.La)}
function pk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.la[l*2]+=g:l!==0?(l!==e&&a.la[l*2]++,a.la[32]++):g<=10?a.la[34]++:a.la[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function qk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do fk(a,l,a.la);while(--g!==0)}else l!==0?(l!==e&&(fk(a,l,a.la),g--),fk(a,16,a.la),ek(a,g-3,2)):g<=10?(fk(a,17,a.la),ek(a,g-3,3)):(fk(a,18,a.la),ek(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function rk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var sk=!1;function tk(a,b,c){a.aa[a.Eb+a.Aa*2]=b>>>8&255;a.aa[a.Eb+a.Aa*2+1]=b&255;a.aa[a.xc+a.Aa]=c&255;a.Aa++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Vj[c]+256+1)*2]++,a.ab[(b<256?Uj[b]:Uj[256+(b>>>7)])*2]++);return a.Aa===a.Jb-1}
;function uk(a,b){a.msg=Mj[b];return b}
function vk(a){for(var b=a.length;--b>=0;)a[b]=0}
function wk(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.mb(a.output,b.aa,b.Lb,c,a.vb),a.vb+=c,b.Lb+=c,a.Jc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Lb=0))}
function xk(a,b){var c=a.wa>=0?a.wa:-1,d=a.u-a.wa,e=0;if(a.level>0){a.P.qc===2&&(a.P.qc=rk(a));ok(a,a.ec);ok(a,a.Yb);pk(a,a.ta,a.ec.ub);pk(a,a.ab,a.Yb.ub);ok(a,a.Oc);for(e=18;e>=3&&a.la[Rj[e]*2+1]===0;e--);a.Qa+=3*(e+1)+14;var f=a.Qa+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)ek(a,b?1:0,3),kk(a,c,d);else if(a.strategy===4||g===f)ek(a,2+(b?1:0),3),nk(a,Sj,Tj);else{ek(a,4+(b?1:0),3);c=a.ec.ub+1;d=a.Yb.ub+1;e+=1;ek(a,c-257,5);ek(a,d-1,5);ek(a,e-4,4);for(f=0;f<e;f++)ek(a,a.la[Rj[f]*
2+1],3);qk(a,a.ta,c-1);qk(a,a.ab,d-1);nk(a,a.ta,a.ab)}ik(a);b&&jk(a);a.wa=a.u;wk(a.P)}
function S(a,b){a.aa[a.pending++]=b}
function yk(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function zk(a,b){var c=a.cd,d=a.u,e=a.ya,f=a.dd,g=a.u>a.na-262?a.u-(a.na-262):0,h=a.window,k=a.Ya,l=a.Ia,m=a.u+258,n=h[d+e-1],p=h[d+e];a.ya>=a.Xc&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.tb=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function Ak(a){var b=a.na,c;do{var d=a.xd-a.A-a.u;if(a.u>=b+(b-262)){N.mb(a.window,a.window,b,b,0);a.tb-=b;a.u-=b;a.wa-=b;var e=c=a.dc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.P.oa===0)break;e=a.P;c=a.window;f=a.u+a.A;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,N.mb(c,e.input,e.gb,g,f),e.state.wrap===1?e.M=Gj(e.M,c,g,f):e.state.wrap===2&&(e.M=Hj(e.M,c,g,f)),e.gb+=g,e.ib+=g,c=g);a.A+=c;if(a.A+a.va>=3)for(d=a.u-a.va,a.R=a.window[d],
a.R=(a.R<<a.Na^a.window[d+1])&a.Ma;a.va&&!(a.R=(a.R<<a.Na^a.window[d+3-1])&a.Ma,a.Ia[d&a.Ya]=a.head[a.R],a.head[a.R]=d,d++,a.va--,a.A+a.va<3););}while(a.A<262&&a.P.oa!==0)}
function Bk(a,b){for(var c;;){if(a.A<262){Ak(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,c=a.Ia[a.u&a.Ya]=a.head[a.R],a.head[a.R]=a.u);c!==0&&a.u-c<=a.na-262&&(a.T=zk(a,c));if(a.T>=3)if(c=tk(a,a.u-a.tb,a.T-3),a.A-=a.T,a.T<=a.yc&&a.A>=3){a.T--;do a.u++,a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,a.Ia[a.u&a.Ya]=a.head[a.R],a.head[a.R]=a.u;while(--a.T!==0);a.u++}else a.u+=a.T,a.T=0,a.R=a.window[a.u],a.R=(a.R<<a.Na^a.window[a.u+1])&a.Ma;else c=tk(a,0,
a.window[a.u]),a.A--,a.u++;if(c&&(xk(a,!1),a.P.S===0))return 1}a.va=a.u<2?a.u:2;return b===4?(xk(a,!0),a.P.S===0?3:4):a.Aa&&(xk(a,!1),a.P.S===0)?1:2}
function Ck(a,b){for(var c,d;;){if(a.A<262){Ak(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,c=a.Ia[a.u&a.Ya]=a.head[a.R],a.head[a.R]=a.u);a.ya=a.T;a.hd=a.tb;a.T=2;c!==0&&a.ya<a.yc&&a.u-c<=a.na-262&&(a.T=zk(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.u-a.tb>4096)&&(a.T=2));if(a.ya>=3&&a.T<=a.ya){d=a.u+a.A-3;c=tk(a,a.u-1-a.hd,a.ya-3);a.A-=a.ya-1;a.ya-=2;do++a.u<=d&&(a.R=(a.R<<a.Na^a.window[a.u+3-1])&a.Ma,a.Ia[a.u&a.Ya]=a.head[a.R],a.head[a.R]=a.u);
while(--a.ya!==0);a.eb=0;a.T=2;a.u++;if(c&&(xk(a,!1),a.P.S===0))return 1}else if(a.eb){if((c=tk(a,0,a.window[a.u-1]))&&xk(a,!1),a.u++,a.A--,a.P.S===0)return 1}else a.eb=1,a.u++,a.A--}a.eb&&(tk(a,0,a.window[a.u-1]),a.eb=0);a.va=a.u<2?a.u:2;return b===4?(xk(a,!0),a.P.S===0?3:4):a.Aa&&(xk(a,!1),a.P.S===0)?1:2}
function Dk(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){Ak(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.u>0&&(d=a.u-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.u+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=tk(a,1,a.T-3),a.A-=a.T,a.u+=a.T,a.T=0):(c=tk(a,0,a.window[a.u]),a.A--,a.u++);if(c&&(xk(a,!1),a.P.S===0))return 1}a.va=0;return b===4?(xk(a,!0),a.P.S===0?3:4):
a.Aa&&(xk(a,!1),a.P.S===0)?1:2}
function Ek(a,b){for(var c;;){if(a.A===0&&(Ak(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=tk(a,0,a.window[a.u]);a.A--;a.u++;if(c&&(xk(a,!1),a.P.S===0))return 1}a.va=0;return b===4?(xk(a,!0),a.P.S===0?3:4):a.Aa&&(xk(a,!1),a.P.S===0)?1:2}
function Fk(a,b,c,d,e){this.Vd=a;this.je=b;this.me=c;this.he=d;this.Rd=e}
var Gk;Gk=[new Fk(0,0,0,0,function(a,b){var c=65535;for(c>a.Ba-5&&(c=a.Ba-5);;){if(a.A<=1){Ak(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.u+=a.A;a.A=0;var d=a.wa+c;if(a.u===0||a.u>=d)if(a.A=a.u-d,a.u=d,xk(a,!1),a.P.S===0)return 1;if(a.u-a.wa>=a.na-262&&(xk(a,!1),a.P.S===0))return 1}a.va=0;if(b===4)return xk(a,!0),a.P.S===0?3:4;a.u>a.wa&&xk(a,!1);return 1}),
new Fk(4,4,8,4,Bk),new Fk(4,5,16,8,Bk),new Fk(4,6,32,32,Bk),new Fk(4,4,16,16,Ck),new Fk(8,16,32,32,Ck),new Fk(8,16,128,128,Ck),new Fk(8,32,128,256,Ck),new Fk(32,128,258,1024,Ck),new Fk(32,258,258,4096,Ck)];
function Hk(){this.P=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Lb=this.Ba=0;this.J=null;this.Da=0;this.method=8;this.rb=-1;this.Ya=this.Lc=this.na=0;this.window=null;this.xd=0;this.head=this.Ia=null;this.dd=this.Xc=this.strategy=this.level=this.yc=this.cd=this.ya=this.A=this.tb=this.u=this.eb=this.hd=this.T=this.wa=this.Na=this.Ma=this.vc=this.dc=this.R=0;this.ta=new N.Ja(1146);this.ab=new N.Ja(122);this.la=new N.Ja(78);vk(this.ta);vk(this.ab);vk(this.la);this.Oc=this.Yb=this.ec=
null;this.La=new N.Ja(16);this.ea=new N.Ja(573);vk(this.ea);this.pb=this.Oa=0;this.depth=new N.Ja(573);vk(this.depth);this.ka=this.pa=this.va=this.matches=this.yb=this.Qa=this.Eb=this.Aa=this.Jb=this.xc=0}
function Ik(a,b){if(!a||!a.state||b>5||b<0)return a?uk(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return uk(a,a.S===0?-5:-2);c.P=a;var d=c.rb;c.rb=b;if(c.status===42)if(c.wrap===2)a.M=0,S(c,31),S(c,139),S(c,8),c.J?(S(c,(c.J.text?1:0)+(c.J.Ua?2:0)+(c.J.extra?4:0)+(c.J.name?8:0)+(c.J.comment?16:0)),S(c,c.J.time&255),S(c,c.J.time>>8&255),S(c,c.J.time>>16&255),S(c,c.J.time>>24&255),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,c.J.os&255),c.J.extra&&c.J.extra.length&&
(S(c,c.J.extra.length&255),S(c,c.J.extra.length>>8&255)),c.J.Ua&&(a.M=Hj(a.M,c.aa,c.pending,0)),c.Da=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),S(c,3),c.status=113);else{var e=8+(c.Lc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.u!==0&&(e|=32);c.status=113;yk(c,e+(31-e%31));c.u!==0&&(yk(c,a.M>>>16),yk(c,a.M&65535));a.M=1}if(c.status===69)if(c.J.extra){for(e=c.pending;c.Da<(c.J.extra.length&65535)&&(c.pending!==c.Ba||
(c.J.Ua&&c.pending>e&&(a.M=Hj(a.M,c.aa,c.pending-e,e)),wk(a),e=c.pending,c.pending!==c.Ba));)S(c,c.J.extra[c.Da]&255),c.Da++;c.J.Ua&&c.pending>e&&(a.M=Hj(a.M,c.aa,c.pending-e,e));c.Da===c.J.extra.length&&(c.Da=0,c.status=73)}else c.status=73;if(c.status===73)if(c.J.name){e=c.pending;do{if(c.pending===c.Ba&&(c.J.Ua&&c.pending>e&&(a.M=Hj(a.M,c.aa,c.pending-e,e)),wk(a),e=c.pending,c.pending===c.Ba)){var f=1;break}f=c.Da<c.J.name.length?c.J.name.charCodeAt(c.Da++)&255:0;S(c,f)}while(f!==0);c.J.Ua&&c.pending>
e&&(a.M=Hj(a.M,c.aa,c.pending-e,e));f===0&&(c.Da=0,c.status=91)}else c.status=91;if(c.status===91)if(c.J.comment){e=c.pending;do{if(c.pending===c.Ba&&(c.J.Ua&&c.pending>e&&(a.M=Hj(a.M,c.aa,c.pending-e,e)),wk(a),e=c.pending,c.pending===c.Ba)){f=1;break}f=c.Da<c.J.comment.length?c.J.comment.charCodeAt(c.Da++)&255:0;S(c,f)}while(f!==0);c.J.Ua&&c.pending>e&&(a.M=Hj(a.M,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.J.Ua?(c.pending+2>c.Ba&&wk(a),c.pending+2<=c.Ba&&(S(c,
a.M&255),S(c,a.M>>8&255),a.M=0,c.status=113)):c.status=113);if(c.pending!==0){if(wk(a),a.S===0)return c.rb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return uk(a,-5);if(c.status===666&&a.oa!==0)return uk(a,-5);if(a.oa!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?Ek(c,b):c.strategy===3?Dk(c,b):Gk[c.level].Rd(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.rb=-1),0;if(d===2&&(b===1?(ek(c,2,3),fk(c,256,Sj),c.ka===16?(dk(c,c.pa),c.pa=0,c.ka=0):c.ka>=
8&&(c.aa[c.pending++]=c.pa&255,c.pa>>=8,c.ka-=8)):b!==5&&(ek(c,0,3),kk(c,0,0),b===3&&(vk(c.head),c.A===0&&(c.u=0,c.wa=0,c.va=0))),wk(a),a.S===0))return c.rb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(S(c,a.M&255),S(c,a.M>>8&255),S(c,a.M>>16&255),S(c,a.M>>24&255),S(c,a.ib&255),S(c,a.ib>>8&255),S(c,a.ib>>16&255),S(c,a.ib>>24&255)):(yk(c,a.M>>>16),yk(c,a.M&65535));wk(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Jk={};Jk=function(){this.input=null;this.ib=this.oa=this.gb=0;this.output=null;this.Jc=this.S=this.vb=0;this.msg="";this.state=null;this.qc=2;this.M=0};var Kk=Object.prototype.toString;
function Lk(a){if(!(this instanceof Lk))return new Lk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.P=new Jk;this.P.S=0;var b=this.P;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=uk(b,-2);else{e===8&&(e=9);var k=new Hk;b.state=k;k.P=b;k.wrap=h;k.J=null;k.Lc=e;k.na=1<<k.Lc;k.Ya=k.na-1;k.vc=f+7;k.dc=1<<k.vc;k.Ma=k.dc-1;k.Na=~~((k.vc+3-1)/3);k.window=new N.jb(k.na*2);k.head=new N.Ja(k.dc);k.Ia=new N.Ja(k.na);k.Jb=1<<f+6;k.Ba=k.Jb*4;k.aa=new N.jb(k.Ba);k.Eb=1*k.Jb;k.xc=3*k.Jb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.Jc=0;b.qc=2;c=b.state;c.pending=0;c.Lb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.M=c.wrap===2?
0:1;c.rb=0;if(!sk){d=Array(16);for(f=g=0;f<28;f++)for(Wj[f]=g,e=0;e<1<<Oj[f];e++)Vj[g++]=f;Vj[g-1]=f;for(f=g=0;f<16;f++)for(Xj[f]=g,e=0;e<1<<Pj[f];e++)Uj[g++]=f;for(g>>=7;f<30;f++)for(Xj[f]=g<<7,e=0;e<1<<Pj[f]-7;e++)Uj[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Sj[e*2+1]=8,e++,d[8]++;for(;e<=255;)Sj[e*2+1]=9,e++,d[9]++;for(;e<=279;)Sj[e*2+1]=7,e++,d[7]++;for(;e<=287;)Sj[e*2+1]=8,e++,d[8]++;hk(Sj,287,d);for(e=0;e<30;e++)Tj[e*2+1]=5,Tj[e*2]=gk(e,5);Zj=new Yj(Sj,Oj,257,286,15);ak=new Yj(Tj,
Pj,0,30,15);bk=new Yj([],Qj,0,19,7);sk=!0}c.ec=new ck(c.ta,Zj);c.Yb=new ck(c.ab,ak);c.Oc=new ck(c.la,bk);c.pa=0;c.ka=0;ik(c);c=0}else c=uk(b,-2);c===0&&(b=b.state,b.xd=2*b.na,vk(b.head),b.yc=Gk[b.level].je,b.Xc=Gk[b.level].Vd,b.dd=Gk[b.level].me,b.cd=Gk[b.level].he,b.u=0,b.wa=0,b.A=0,b.va=0,b.T=b.ya=2,b.eb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Mj[b]);a.header&&(b=this.P)&&b.state&&b.state.wrap===2&&(b.state.J=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Fj(a.dictionary):
Kk.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.P;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.M=Gj(a.M,f,g,0));l.wrap=0;g>=l.na&&(b===0&&(vk(l.head),l.u=0,l.wa=0,l.va=0),c=new N.jb(l.na),N.mb(c,f,g-l.na,l.na,0),f=c,g=l.na);c=a.oa;d=a.gb;e=a.input;a.oa=g;a.gb=0;a.input=f;for(Ak(l);l.A>=3;){f=l.u;g=l.A-2;do l.R=(l.R<<l.Na^l.window[f+3-1])&l.Ma,l.Ia[f&l.Ya]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.u=f;l.A=2;Ak(l)}l.u+=l.A;l.wa=l.u;l.va=l.A;l.A=0;l.T=l.ya=2;l.eb=0;a.gb=d;a.input=e;a.oa=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Mj[b]);this.Bg=!0}}
Lk.prototype.push=function(a,b){var c=this.P,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Fj(a):Kk.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.gb=0;c.oa=c.input.length;do{c.S===0&&(c.output=new N.jb(d),c.vb=0,c.S=d);a=Ik(c,e);if(a!==1&&a!==0)return Mk(this,a),this.ended=!0,!1;if(c.S===0||c.oa===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Ic(c.output,c.vb);b=f;f=f.length;if(f<65537&&(b.subarray&&Ej||!b.subarray))b=
String.fromCharCode.apply(null,N.Ic(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Ic(c.output,c.vb),this.chunks.push(b)}while((c.oa>0||c.S===0)&&a!==1);if(e===4)return(c=this.P)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=uk(c,-2):(c.state=null,a=d===113?uk(c,-3):0)):a=-2,Mk(this,a),this.ended=!0,a===0;e===2&&(Mk(this,0),c.S=0);return!0};
function Mk(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.Vc(a.chunks));a.chunks=[];a.err=b;a.msg=a.P.msg}
function Nk(a,b){b=b||{};b.gzip=!0;b=new Lk(b);b.push(a,!0);if(b.err)throw b.msg||Mj[b.err];return b.result}
;function Ok(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=mb(a):b=null;return b}
;function Pk(a){return mb(a===null?"null":a===void 0?"undefined":a)}
;function Qk(a){this.name=a}
;var Rk=new Qk("rawColdConfigGroup");var Sk=new Qk("rawHotConfigGroup");function Tk(a){this.G=J(a)}
y(Tk,L);var Uk=new Qk("continuationCommand");var Vk=new Qk("webCommandMetadata");var Wk=new Qk("signalServiceEndpoint");var Xk={rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",nf:"EMBEDDED_PLAYER_MODE_DEFAULT",qf:"EMBEDDED_PLAYER_MODE_PFP",pf:"EMBEDDED_PLAYER_MODE_PFL"};var Yk=new Qk("feedbackEndpoint");function Zk(a){this.G=J(a)}
y(Zk,L);Zk.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new Xe(a,Ue):Ve||(Ve=new Xe(null,Ue));else if(a.constructor!==Xe)if(Te(a))a=a.length?new Xe(new Uint8Array(a),Ue):Ve||(Ve=new Xe(null,Ue));else throw Error();return K(this,1,a)};var Vi={gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",Ff:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Cf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Df:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Ef:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",Gf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",If:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",Hf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",Jf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Bf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Af:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED"};var $k=new Qk("shareEndpoint"),al=new Qk("shareEntityEndpoint"),bl=new Qk("shareEntityServiceEndpoint"),cl=new Qk("webPlayerShareEntityServiceEndpoint");var dl=new Qk("playlistEditEndpoint");var el=new Qk("modifyChannelNotificationPreferenceEndpoint");var fl=new Qk("unsubscribeEndpoint");var gl=new Qk("subscribeEndpoint");function hl(){var a=il;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function jl(a){D("yt.ads.biscotti.lastId_",a)}
;function kl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var ll=C.window,ml,nl,ol=(ll==null?void 0:(ml=ll.yt)==null?void 0:ml.config_)||(ll==null?void 0:(nl=ll.ytcfg)==null?void 0:nl.data_)||{};D("yt.config_",ol);function pl(){kl(ol,arguments)}
function T(a,b){return a in ol?ol[a]:b}
function ql(a){var b=ol.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var rl=[];function sl(a){rl.forEach(function(b){return b(a)})}
function tl(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ul(b)}}:a}
function ul(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),pl("ERRORS",b));sl(a)}
function vl(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),pl("ERRORS",f))}
;var wl=/^[\w.]*$/,xl={q:!0,search_query:!0};function yl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=zl(f[0]||""),h=zl(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Jb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(yl);l.args=[{key:m,value:f[1],query:a,method:Al===n?"unchanged":n}];xl.hasOwnProperty(m)||vl(l)}}return c}
var Al=String(yl);function Bl(a){var b=[];Kb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Db(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Cl(a){a.charAt(0)==="?"&&(a=a.substring(1));return yl(a,"&")}
function Dl(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Cl(a.length>1?a[1]:a[0])):{}}
function El(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Cl(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return tc(a,e)+d}
function Fl(a){if(!b)var b=window.location.href;var c=nc(1,a),d=oc(a);c&&d?(a=a.match(lc),b=b.match(lc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?oc(b)===d&&(Number(nc(4,b))||null)===(Number(nc(4,a))||null):!0;return a}
function zl(a){return a&&a.match(wl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Gl(a){var b=Hl;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ti;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Li:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=Li.screen)==null?void 0:k.height;var l;e.u_w=(l=Li.screen)==null?void 0:l.width;var m;e.u_ah=(m=Li.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Li.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=Li.screen)==null?void 0:p.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Ma){}try{var z=h.outerWidth;var x=h.outerHeight}catch(Ma){}try{var H=h.innerWidth;var G=h.innerHeight}catch(Ma){}try{var R=h.screenLeft;var O=h.screenTop}catch(Ma){}try{H=h.innerWidth,G=h.innerHeight}catch(Ma){}try{var da=h.screen.availWidth;var Ca=h.screen.availTop}catch(Ma){}t=[R,O,t,u,da,Ca,z,x,H,G];try{var P=(b.h.top||window).document,ea=P.compatMode==
"CSS1Compat"?P.documentElement:P.body;var ja=(new Fd(ea.clientWidth,ea.clientHeight)).round()}catch(Ma){ja=new Fd(-12245933,-12245933)}P=ja;ja={};var oa=oa===void 0?C:oa;ea=new aj;"SVGElement"in oa&&"createElementNS"in oa.document&&ea.set(0);u=Qi();u["allow-top-navigation-by-user-activation"]&&ea.set(1);u["allow-popups-to-escape-sandbox"]&&ea.set(2);oa.crypto&&oa.crypto.subtle&&ea.set(3);"TextDecoder"in oa&&"TextEncoder"in oa&&ea.set(4);oa=bj(ea);ja.bc=oa;ja.bih=P.height;ja.biw=P.width;ja.brdim=t.join();
b=b.i;b=(ja.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ja.wgl=!!Li.WebGLRenderingContext,ja);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Hl=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Bl(Gl(a))});Za();navigator.userAgent.indexOf(" (CrKey ");var Il="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Jl(){if(!Il)return null;var a=Il();return"open"in a?a:null}
function Kl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Ll(a,b){typeof a==="function"&&(a=tl(a));return window.setTimeout(a,b)}
;var Ml="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ma(Ml),["client_dev_set_cookie"]);function U(a){a=Nl(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Ol(a,b){a=Nl(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Nl(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Pl(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Ql={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Rl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ma(Ml)),Sl=!1;
function Tl(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&tl(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Jl();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Ul(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Vl(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){vl(n)}}l.send(d);return l}
function Vl(a,b){b=b===void 0?{}:b;var c=Fl(a),d=T("INNERTUBE_CLIENT_NAME"),e=U("web_ajax_ignore_global_headers_if_set"),f;for(f in Ql){var g=T(Ql[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=T("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(oc(a)?!1:!0))){k=a;var l;if(l=U("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=oc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=mc(nc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!oc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!oc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&oc(a)||(b["X-YouTube-Ad-Signals"]=Bl(Gl()));return b}
function Wl(a,b){b.method="POST";b.postParams||(b.postParams={});return Xl(a,b)}
function Xl(a,b){var c=b.format||"JSON";a=Yl(a,b);var d=Zl(a,b),e=!1,f=$l(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Kl(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=am(a,c,k,b.convertToSafeHtml);l&&(l=bm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Ll(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Yl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=El(a,b||{},!0);return a}
function Zl(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||oc(a)&&!b.withCredentials&&oc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Cl(e),Ub(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):sc(e));f=e||f&&!Nb(f);!Sl&&f&&b.method!=="POST"&&(Sl=!0,ul(Error("AJAX request with postData should use POST")));return e}
function am(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,vl(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?cm(a):null)e={},Db(a.getElementsByTagName("*"),function(g){e[g.tagName]=dm(g)})}d&&em(e);
return e}
function em(a){if(Ra(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=fb();d=e?e.createHTML(d):d;a[c]=new Vb(d)}else em(a[b])}}
function bm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function cm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function dm(a){var b="";Db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ul(a){var b=window.location.search,c=oc(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Fl(a)&&(c=document.location.hostname);var d=mc(nc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Cl(b),f={};Db(Rl,function(g){e[g]&&(f[g]=e[g])});
return El(a,f||{},!1)}
var $l=Tl;var fm=[{zc:function(a){return"Cannot read property '"+a.key+"'"},
fc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{zc:function(a){return"Cannot call '"+a.key+"'"},
fc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{zc:function(a){return a.key+" is not defined"},
fc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var hm={Wa:[],Ta:[{callback:gm,weight:500}]};function gm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function im(){this.Ta=[];this.Wa=[]}
var jm;function km(){if(!jm){var a=jm=new im;a.Wa.length=0;a.Ta.length=0;hm.Wa&&a.Wa.push.apply(a.Wa,hm.Wa);hm.Ta&&a.Ta.push.apply(a.Ta,hm.Ta)}return jm}
;var lm=new M;function mm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=nm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=nm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=nm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function nm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function om(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=pm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=mm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?pm(f+".ve",g,h,k):0;d+=f;d+=pm(e,a[e],b,c);if(d>500)break}}else c[b]=qm(a),d+=c[b].length;else c[b]=qm(a),d+=c[b].length;return d}
function pm(a,b,c,d){c+="."+a;a=qm(b);d[c]=a;return c.length+a.length}
function qm(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function rm(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function sm(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function tm(){this.Qe=!0}
function um(){tm.h||(tm.h=new tm);return tm.h}
function wm(a,b){a={};var c=[];"SESSION_ID"in ol&&c.push({key:"u",value:T("SESSION_ID")});if(c=vh(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in ol||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in ol&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));return a}
;var xm={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ym(a,b,c,d,e){sh.set(""+a,b,{Kb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function zm(a){return sh.get(""+a,void 0)}
function Am(a,b,c){sh.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Bm(){if(U("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!sh.isEnabled())return!1;if(sh.h.cookie)return!0;U("embeds_web_enable_cookie_detection_fix")?sh.set("TESTCOOKIESENABLED","1",{Kb:60,ze:"none",secure:!0}):sh.set("TESTCOOKIESENABLED","1",{Kb:60});if(sh.get("TESTCOOKIESENABLED")!=="1")return!1;sh.remove("TESTCOOKIESENABLED");return!0}
;var Cm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Cm);function Dm(){this.h=T("ALT_PREF_COOKIE_NAME","PREF");this.i=T("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=zm(this.h);a&&this.parse(a)}
var Em;function Fm(){Em||(Em=new Dm);return Em}
r=Dm.prototype;r.get=function(a,b){Gm(a);Hm(a);a=Cm[a]!==void 0?Cm[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){Gm(a);Hm(a);if(b==null)throw Error("ExpectedNotNull");Cm[a]=b.toString()};
function Im(a){return!!((Jm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){Gm(a);Hm(a);delete Cm[a]};
r.clear=function(){for(var a in Cm)delete Cm[a]};
function Hm(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Jm(a){a=Cm[a]!==void 0?Cm[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Cm[d]=c.toString())}};var Km={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Lm={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Mm(){var a=C.navigator;return a?a.connection:void 0}
function Nm(){var a=Mm();if(a){var b=Km[a.type||"unknown"]||"CONN_UNKNOWN";a=Km[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Om(){var a=Mm();if(a!=null&&a.effectiveType)return Lm.hasOwnProperty(a.effectiveType)?Lm[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ma(b))}
y(V,Error);function Pm(){try{return Qm(),!0}catch(a){return!1}}
function Qm(a){if(T("DATASYNC_ID")!==void 0)return T("DATASYNC_ID");throw new V("Datasync ID not set",a===void 0?"unknown":a);}
;function Rm(){}
function Sm(a,b){return $i.Za(a,0,b)}
Rm.prototype.ra=function(a,b){return this.Za(a,1,b)};
Rm.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Tm=Ol("web_emulated_idle_callback_delay",300),Um=1E3/60-3,Vm=[8,5,4,3,2,1,0];
function Wm(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.X=this.h=0;this.W=this.o=!1;this.K=[];this.U=this.ga=!1;for(var b=w(Vm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.m=0;this.pc=a.timeout||1;this.F=Um;this.v=0;this.qa=this.oe.bind(this);this.oc=this.Te.bind(this);this.Ka=this.Dd.bind(this);this.Ab=this.Wd.bind(this);this.Rb=this.re.bind(this);this.za=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.qa)}
y(Wm,F);r=Wm.prototype;r.Bb=function(a){var b=Za();Xm(this,a);a=Za()-b;this.o||(this.F-=a)};
r.Za=function(a,b,c){++this.X;if(b===10)return this.Bb(a),this.X;var d=this.X;this.j[d]=a;this.o&&!c?this.K.push({id:d,priority:b}):(this.i[b].push(d),this.W||this.o||(this.h!==0&&Ym(this)!==this.v&&this.stop(),this.start()));return d};
r.sa=function(a){delete this.j[a]};
function Zm(a){a.K.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function $m(a){return!a.isHidden()&&a.ia}
function Ym(a){if(a.i[8].length){if(a.U)return 4;if($m(a))return 3}for(var b=5;b>=a.m;b--)if(a.i[b].length>0)return b>0?$m(a)?3:2:1;return 0}
r.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Xm(a,b){try{b()}catch(c){a.Ha(c)}}
function an(a){for(var b=w(Vm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Wd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;bn(this,b);this.ga=!1};
r.Te=function(){bn(this)};
r.Dd=function(){cn(this)};
r.re=function(a){this.U=!0;var b=Ym(this);b===4&&b!==this.v&&(this.stop(),this.start());bn(this,void 0,a);this.U=!1};
r.oe=function(){this.isHidden()||cn(this);this.h&&(this.stop(),this.start())};
function cn(a){a.stop();a.o=!0;for(var b=Za(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Xm(a,e)}dn(a);a.o=!1;an(a)&&a.start();b=Za()-b;a.F-=b}
function dn(a){for(var b=0,c=a.K.length;b<c;b++){var d=a.K[b];a.i[d.priority].push(d.id)}a.K.length=0}
function bn(a,b,c){a.U&&a.v===4&&a.h||a.stop();a.o=!0;b=Za()+(b||a.F);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Xm(a,f);d=a.ga?0:1;d=a.m>d?a.m:d;if(!(Za()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Xm(a,c)}while(c&&Za()<b)}a.o=!1;dn(a);a.F=Um;an(a)&&a.start()}
r.start=function(){this.W=!1;if(this.h===0)switch(this.v=Ym(this),this.v){case 1:var a=this.Ab;this.h=this.za?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Tm);break;case 2:this.h=window.setTimeout(this.oc,this.pc);break;case 3:this.h=window.requestAnimationFrame(this.Rb);break;case 4:this.h=window.setTimeout(this.Ka,0)}};
r.pause=function(){this.stop();this.W=!0};
r.stop=function(){if(this.h){switch(this.v){case 1:var a=this.h;this.za?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.da=function(){Zm(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.qa);F.prototype.da.call(this)};var en=E("yt.scheduler.instance.timerIdMap_")||{},fn=Ol("kevlar_tuner_scheduler_soft_state_timer_ms",800),gn=0,hn=0;function jn(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ja)a=new Wm(T("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function kn(){ln();var a=E("ytglobal.schedulerInstanceInstance_");a&&(Cc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function ln(){Zm(jn());for(var a in en)en.hasOwnProperty(a)&&delete en[Number(a)]}
function mn(a,b,c){if(!c)return c=c===void 0,-jn().Za(a,b,c);var d=window.setTimeout(function(){var e=jn().Za(a,b);en[d]=e},c);
return d}
function nn(a){jn().Bb(a)}
function on(a){var b=jn();if(a<0)b.sa(-a);else{var c=en[a];c?(b.sa(c),delete en[a]):window.clearTimeout(a)}}
function pn(){qn()}
function qn(){window.clearTimeout(gn);jn().start()}
function rn(){jn().pause();window.clearTimeout(gn);gn=window.setTimeout(pn,fn)}
function sn(){window.clearTimeout(hn);hn=window.setTimeout(function(){tn(0)},fn)}
function tn(a){sn();var b=jn();b.m=a;b.start()}
function un(a){sn();var b=jn();b.m>a&&(b.m=a,b.start())}
function vn(){window.clearTimeout(hn);var a=jn();a.m=0;a.start()}
;function wn(){Rm.apply(this,arguments)}
y(wn,Rm);function xn(){wn.h||(wn.h=new wn);return wn.h}
wn.prototype.Za=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Ll(a,c||0)};
wn.prototype.sa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wn.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
wn.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var $i=xn();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",kn),D("yt.scheduler.instance.addJob",mn),D("yt.scheduler.instance.addImmediateJob",nn),D("yt.scheduler.instance.cancelJob",on),D("yt.scheduler.instance.cancelAllJobs",ln),D("yt.scheduler.instance.start",qn),D("yt.scheduler.instance.pause",rn),D("yt.scheduler.instance.setPriorityThreshold",tn),D("yt.scheduler.instance.enablePriorityThreshold",un),D("yt.scheduler.instance.clearPriorityThreshold",vn),D("yt.scheduler.initialized",
!0));function yn(a){var b=new zj;this.h=(a=b.isAvailable()?a?new Aj(b,a):b:null)?new uj(a):null;this.i=document.domain||window.location.hostname}
yn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new gi).serialize(b))}catch(f){return}else e=escape(b);ym(a,e,c,this.i)};
yn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=zm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yn.prototype.remove=function(a){this.h&&this.h.remove(a);Am(a,"/",this.i)};var zn=function(){var a;return function(){a||(a=new yn("ytidb"));return a}}();
function An(){var a;return(a=zn())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bn=[],Cn,Dn=!1;function En(){var a={};for(Cn=new Fn(a.handleError===void 0?Gn:a.handleError,a.logEvent===void 0?Hn:a.logEvent);Bn.length>0;)switch(a=Bn.shift(),a.type){case "ERROR":Cn.Ha(a.payload);break;case "EVENT":Cn.logEvent(a.eventType,a.payload)}}
function In(a){Dn||(Cn?Cn.Ha(a):(Bn.push({type:"ERROR",payload:a}),Bn.length>10&&Bn.shift()))}
function Jn(a,b){Dn||(Cn?Cn.logEvent(a,b):(Bn.push({type:"EVENT",eventType:a,payload:b}),Bn.length>10&&Bn.shift()))}
;function Kn(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Ln(a){return a.substr(0,a.indexOf(":"))||a}
;var Mn=Ee||Fe;function Nn(a){var b=Kc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var On={},Pn=(On.AUTH_INVALID="No user identifier specified.",On.EXPLICIT_ABORT="Transaction was explicitly aborted.",On.IDB_NOT_SUPPORTED="IndexedDB is not supported.",On.MISSING_INDEX="Index not created.",On.MISSING_OBJECT_STORES="Object stores not created.",On.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",On.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",On.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
On.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",On.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",On.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",On.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",On),Qn={},Rn=(Qn.AUTH_INVALID="ERROR",Qn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Qn.EXPLICIT_ABORT="IGNORED",Qn.IDB_NOT_SUPPORTED="ERROR",Qn.MISSING_INDEX=
"WARNING",Qn.MISSING_OBJECT_STORES="ERROR",Qn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Qn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Qn.QUOTA_EXCEEDED="WARNING",Qn.QUOTA_MAYBE_EXCEEDED="WARNING",Qn.UNKNOWN_ABORT="WARNING",Qn.INCOMPATIBLE_DB_VERSION="WARNING",Qn),Sn={},Tn=(Sn.AUTH_INVALID=!1,Sn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Sn.EXPLICIT_ABORT=!1,Sn.IDB_NOT_SUPPORTED=!1,Sn.MISSING_INDEX=!1,Sn.MISSING_OBJECT_STORES=!1,Sn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Sn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Sn.QUOTA_EXCEEDED=!1,Sn.QUOTA_MAYBE_EXCEEDED=!0,Sn.UNKNOWN_ABORT=!0,Sn.INCOMPATIBLE_DB_VERSION=!1,Sn);function Un(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Pn[a]:c;d=d===void 0?Rn[a]:d;e=e===void 0?Tn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Un.prototype)}
y(Un,V);function Vn(a,b){Un.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Pn.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Vn.prototype)}
y(Vn,Un);function Wn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Wn.prototype)}
y(Wn,Error);var Xn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Yn(a,b,c,d){b=Ln(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Un)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Un("QUOTA_EXCEEDED",a);if(Ge&&e.name==="UnknownError")return new Un("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Wn)return new Un("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Xn.some(function(f){return e.message.includes(f)}))return new Un("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Un("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",gd:e.name})];e.level="WARNING";return e}
function Zn(a,b,c){var d=An();return new Un("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function $n(a){if(!a)throw Error();throw a;}
function ao(a){return a}
function bo(a){this.h=a}
function co(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=w(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
co.all=function(a){return new co(new bo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={qb:0};f.qb<a.length;f={qb:f.qb},++f.qb)co.resolve(a[f.qb]).then(function(g){return function(h){d[g.qb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
co.resolve=function(a){return new co(new bo(function(b,c){a instanceof co?a.then(b,c):b(a)}))};
co.reject=function(a){return new co(new bo(function(b,c){c(a)}))};
co.prototype.then=function(a,b){var c=this,d=a!=null?a:ao,e=b!=null?b:$n;return new co(new bo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){eo(c,c,d,f,g)}),c.i.push(function(){fo(c,c,e,f,g)})):c.state.status==="FULFILLED"?eo(c,c,d,f,g):c.state.status==="REJECTED"&&fo(c,c,e,f,g)}))};
co.prototype.catch=function(a){return this.then(void 0,a)};
function eo(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof co?go(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof co?go(a,b,f,d,e):d(f)}catch(g){e(g)}}
function go(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof co?go(a,b,f,d,e):d(f)},function(f){e(f)})}
;function ho(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function io(a){return new Promise(function(b,c){ho(a,b,c)})}
function jo(a){return new co(new bo(function(b,c){ho(a,b,c)}))}
;function ko(a,b){return new co(new bo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var lo=window,W=lo.ytcsi&&lo.ytcsi.now?lo.ytcsi.now:lo.performance&&lo.performance.timing&&lo.performance.now&&lo.performance.timing.navigationStart?function(){return lo.performance.timing.navigationStart+lo.performance.now()}:function(){return(new Date).getTime()};function mo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
r=mo.prototype;r.add=function(a,b,c){return no(this,[a],{mode:"readwrite",ma:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return no(this,[a],{mode:"readwrite",ma:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return no(this,[a],{mode:"readonly",ma:!0},function(c){return c.objectStore(a).count(b)})};
function oo(a,b,c){a=a.h.createObjectStore(b,c);return new po(a)}
r.delete=function(a,b){return no(this,[a],{mode:"readwrite",ma:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return no(this,[a],{mode:"readonly",ma:!0},function(c){return c.objectStore(a).get(b)})};
function qo(a,b,c){return no(a,[b],{mode:"readwrite",ma:!0},function(d){d=d.objectStore(b);return jo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function no(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,u,z;return A(function(x){switch(x.h){case 1:var H={mode:"readonly",ma:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ma?3:1;g=0;case 2:if(h){x.D(4);break}g++;k=Math.round(W());Aa(x,5);l=a.h.transaction(b,e.mode);H=x.yield;var G=new ro(l);G=so(G,d);return H.call(x,G,7);case 7:return m=x.i,n=Math.round(W()),to(a,k,n,g,void 0,b.join(),e),x.return(m);case 5:p=Ba(x);t=Math.round(W());u=Yn(p,
a.h.name,b.join(),a.h.version);if((z=u instanceof Un&&!u.h)||g>=f)to(a,k,t,g,u,b.join(),e),h=u;x.D(2);break;case 4:return x.return(Promise.reject(h))}})}
function to(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Un&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Jn("QUOTA_EXCEEDED",{dbName:Ln(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Un&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=Math.pow(2,31)&&(c=0),Jn("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),uo(a,!1,d,f,b,g.tag),In(e)):uo(a,!0,d,f,b,g.tag)}
function uo(a,b,c,d,e,f){Jn("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function po(a){this.h=a}
r=po.prototype;r.add=function(a,b){return jo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return jo(this.h.clear()).then(function(){})};
function vo(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return jo(this.h.count(a))};
function wo(a,b){return xo(a,{query:b},function(c){return c.delete().then(function(){return yo(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?wo(this,a):jo(this.h.delete(a))};
r.get=function(a){return jo(this.h.get(a))};
r.index=function(a){try{return new zo(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Wn(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function xo(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ao(a).then(function(d){return ko(d,c)})}
function ro(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Un;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function so(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
ro.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Un("EXPLICIT_ABORT");};
ro.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new po(a),this.i.set(a,b));return b};
function zo(a){this.h=a}
r=zo.prototype;r.count=function(a){return jo(this.h.count(a))};
r.delete=function(a){return Bo(this,{query:a},function(b){return b.delete().then(function(){return yo(b)})})};
r.get=function(a){return jo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function Bo(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return Ao(a).then(function(d){return ko(d,c)})}
function Co(a,b){this.request=a;this.cursor=b}
function Ao(a){return jo(a).then(function(b){return b?new Co(a,b):null})}
function yo(a){a.cursor.continue(void 0);return Ao(a.request)}
Co.prototype.delete=function(){return jo(this.cursor.delete()).then(function(){})};
Co.prototype.getValue=function(){return this.cursor.value};
Co.prototype.update=function(a){return jo(this.cursor.update(a))};function Do(a,b,c){return new Promise(function(d,e){function f(){p||(p=new mo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Fd,k=c.blocking,l=c.Re,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Jn("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ln(a)});var u=f(),z=new ro(g.transaction);
m&&m(u,function(x){return t.oldVersion<x&&t.newVersion>=x},z);
z.done.catch(function(x){e(x)})}catch(x){e(x)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Jn("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ln(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Eo(a,b,c){c=c===void 0?{}:c;return Do(a,b,c)}
function Fo(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return Aa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Fd)&&c.addEventListener("blocked",function(){e()}),g.yield(io(c),4);
if(g.h!=2)g.h=0,g.m=0;else throw f=Ba(g),Yn(f,a,"",-1);})}
;function Go(a,b){this.name=a;this.options=b;this.j=!0;this.B=this.m=0}
Go.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Eo(a,b,c)};
Go.prototype.delete=function(a){a=a===void 0?{}:a;return Fo(this.name,a)};
function Ho(a,b){return new Un("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Io(a,b){if(!b)throw Zn("openWithToken",Ln(a.name));return a.open()}
Go.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,u;return A(function(z){switch(z.h){case 1:return g=(f=Error().stack)!=null?f:"",Aa(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var x=h=z.i,H=c.options,G=[],R=w(Object.keys(H.wb)),O=R.next();!O.done;O=R.next()){O=O.value;var da=H.wb[O],Ca=da.te===void 0?Number.MAX_VALUE:da.te;!(x.h.version>=da.Db)||x.h.version>=Ca||x.h.objectStoreNames.contains(O)||G.push(O)}k=G;if(k.length===0){z.D(5);break}l=Object.keys(c.options.wb);
m=h.objectStoreNames();if(c.B<Ol("ytidb_reopen_db_retries",0))return c.B++,h.close(),In(new Un("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());if(!(c.m<Ol("ytidb_remake_db_retries",1))){z.D(6);break}c.m++;return z.yield(c.delete(),7);case 7:return In(new Un("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),z.return(a());case 6:throw new Vn(m,l);case 5:return z.return(h);case 2:n=Ba(z);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){z.D(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=z.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,Ho(c,t);return z.return(p);case 8:throw b(),n instanceof
Error&&!U("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Yn(n,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Ho(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,Re:b,upgrade:this.options.upgrade};return this.h=d=a()};var Jo=new Go("YtIdbMeta",{wb:{databases:{Db:1}},upgrade:function(a,b){b(1)&&oo(a,"databases",{keyPath:"actualName"})}});
function Ko(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Io(Jo,b),2);c=d.i;return d.return(no(c,["databases"],{ma:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return jo(f.h.put(a,void 0)).then(function(){})})}))})}
function Lo(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Io(Jo,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Mo(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Io(Jo,b),2)):e.h!=3?(d=e.i,e.yield(no(d,["databases"],{ma:!0,mode:"readonly"},function(f){c.length=0;return xo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return yo(g)})}),3)):e.return(c)})}
function No(a){return Mo(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Oo(a,b,c){return Mo(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Po(a){var b,c;return A(function(d){if(d.h==1)return b=Qm("YtIdbMeta hasAnyMeta other"),d.yield(Mo(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Qo,Ro=new function(){}(new function(){});
function So(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=An();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Mn)f=/WebKit\/([0-9]+)/.exec(Kc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Kc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Xc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Aa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Ko(d,Ro),4);case 4:return e.yield(Lo("yt-idb-test-do-not-use",Ro),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function To(){if(Qo!==void 0)return Qo;Dn=!0;return Qo=So().then(function(a){Dn=!1;var b;if((b=zn())!=null&&b.h){var c;b={hasSucceededOnce:((c=An())==null?void 0:c.hasSucceededOnce)||a};var d;(d=zn())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Uo(){return E("ytglobal.idbToken_")||void 0}
function Vo(){var a=Uo();return a?Promise.resolve(a):To().then(function(b){(b=b?Ro:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Wo=0;function Xo(a,b){Wo||(Wo=$i.ra(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Vo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Aa(h,3);return h.yield(Oo(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.D(6);break}f=e[0];return h.yield(Fo(f.actualName),7);case 7:return h.yield(Lo(f.actualName,c),6);case 6:h.h=4;h.m=0;break;case 3:g=Ba(h),In(g),d=!1;case 4:$i.sa(Wo),Wo=0,d&&Xo(a,b),h.h=0}})}))}
function Yo(){var a;return A(function(b){return b.h==1?b.yield(Vo(),2):(a=b.i)?b.return(Po(a)):b.return(!1)})}
new Ji;function Zo(a){if(!Pm())throw a=new Un("AUTH_INVALID",{dbName:a}),In(a),a;var b=Qm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function $o(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Vo(),2);case 2:g=m.i;if(!g)throw h=Zn("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),In(h),h;Kn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Zo(a);Aa(m,3);return m.yield(Ko(k,g),5);case 5:return m.yield(Eo(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),Aa(m,7),m.yield(Lo(k.actualName,
g),9);case 9:m.h=8;m.m=0;break;case 7:Ba(m);case 8:throw l;}})}
function ap(a,b,c){c=c===void 0?{}:c;return $o(a,b,!1,c)}
function bp(a,b,c){c=c===void 0?{}:c;return $o(a,b,!0,c)}
function cp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Vo(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Kn(a);d=Zo(a);return e.yield(Fo(d.actualName,b),3)}return e.yield(Lo(d.actualName,c),0)})}
function dp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Fo(d.actualName,b),2):e.yield(Lo(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ep(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Vo(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Kn("LogsDatabaseV2");return d.yield(No(b),3)}c=d.i;return d.yield(dp(c,a,b),0)})}
function fp(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Vo(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Kn(a);return d.yield(Fo(a,b),3)}return d.yield(Lo(a,c),0)})}
;function gp(a,b){Go.call(this,a,b);this.options=b;Kn(a)}
y(gp,Go);function hp(a,b){var c;return function(){c||(c=new gp(a,b));return c}}
gp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?bp:ap)(a,b,Object.assign({},c))};
gp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?fp:cp)(this.name,a)};
function ip(a,b){return hp(a,b)}
;var jp={},kp=ip("ytGcfConfig",{wb:(jp.coldConfigStore={Db:1},jp.hotConfigStore={Db:1},jp),shared:!1,upgrade:function(a,b){b(1)&&(vo(oo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),vo(oo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function lp(a){return Io(kp(),a)}
function mp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(lp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(qo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function np(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(lp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(qo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function op(a){var b,c;return A(function(d){return d.h==1?d.yield(lp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(no(b,["coldConfigStore"],{mode:"readwrite",ma:!0},function(e){return Bo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function pp(a){var b,c;return A(function(d){return d.h==1?d.yield(lp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(no(b,["hotConfigStore"],{mode:"readwrite",ma:!0},function(e){return Bo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function qp(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ma(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
y(qp,F);qp.prototype.da=function(){for(var a=w(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.da.call(this)};function rp(){this.h=0;this.i=new qp}
function sp(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:T("RAW_HOT_CONFIG_GROUP")}
function tp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!U("start_client_gcf")){g.D(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.m(b);d=Uo();if(!d){g.D(3);break}if(c){g.D(4);break}return g.yield(pp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(mp(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function up(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!U("start_client_gcf"))return h.D(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Uo())?c?h.D(4):h.yield(op(d),5):h.D(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.D(0);g=c.configData;return h.yield(np(c,b,g,d),0)})}
function vp(){if(!rp.h){var a=new rp;rp.h=a}a=rp.h;var b=W()-a.h;if(!(a.h!==0&&b<Ol("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
rp.prototype.m=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function wp(){return"INNERTUBE_API_KEY"in ol&&"INNERTUBE_API_VERSION"in ol}
function xp(){return{innertubeApiKey:T("INNERTUBE_API_KEY"),innertubeApiVersion:T("INNERTUBE_API_VERSION"),Xd:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Zc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Jg:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),Zd:T("INNERTUBE_CONTEXT_HL"),Yd:T("INNERTUBE_CONTEXT_GL"),ae:T("INNERTUBE_HOST_OVERRIDE")||"",ce:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),be:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function yp(a){var b={client:{hl:a.Zd,gl:a.Yd,clientName:a.Zc,clientVersion:a.innertubeContextClientVersion,configInfo:a.Xd}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Pl();c.length>0&&(b.request={internalExperimentFlags:c});c=a.Zc;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=sm()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(U("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Nm())&&b&&(b.client.connectionType=a);U("web_log_effective_connection_type")&&
(a=Om())&&b&&(b.client.effectiveConnectionType=a);U("start_client_gcf")&&(e=vp())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=w(Object.entries(Cl(T("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=w(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?d.deviceMake=h:g==="cmodel"?d.deviceModel=h:g==="cbr"?d.browserName=h:g==="cbrver"?d.browserVersion=h:g==="cos"?d.osName=h:g==="cosver"?d.osVersion=h:g==="cplatform"&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function zp(a,b,c){c=c===void 0?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||T("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Cg:(a=wm(um()),U("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var Ap=typeof TextEncoder!=="undefined"?new TextEncoder:null,Bp=Ap?function(a){return Ap.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function Cp(a,b){this.version=a;this.args=b}
Cp.prototype.serialize=function(){return{version:this.version,args:this.args}};function Dp(a,b){this.topic=a;this.h=b}
Dp.prototype.toString=function(){return this.topic};var Ep=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Qb;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",Ep);var Fp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Fp);var Gp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Gp);var Hp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Hp);
D("ytPubsub2Pubsub2SkipSubKey",null);function Ip(a,b){var c=Jp();c&&c.publish.call(c,a.toString(),a,b)}
function Kp(a){var b=Lp,c=Jp();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fp[d])try{if(f&&b instanceof Dp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.vd){var l=new h;h.vd=l.version}var m=h.vd}catch(x){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=p[k];var z=u}else z=[];f=n.call(m,h,z)}catch(x){throw x.message="yt.pubsub2.Data.deserialize(): "+x.message,x;}}catch(x){throw x.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+x.message,x;}a.call(window,f)}catch(x){ul(x)}},Hp[b.toString()]?E("yt.scheduler.instance")?$i.ra(g):Ll(g,0):g())});
Fp[d]=!0;Gp[b.toString()]||(Gp[b.toString()]=[]);Gp[b.toString()].push(d);return d}
function Mp(){var a=Np,b=Kp(function(c){a.apply(void 0,arguments);Op(b)});
return b}
function Op(a){var b=Jp();b&&(typeof a==="number"&&(a=[a]),Db(a,function(c){b.unsubscribeByKey(c);delete Fp[c]}))}
function Jp(){return E("ytPubsub2Pubsub2Instance")}
;function Pp(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Ip("meta_logging_csi_event",{timerName:a,Zg:b})}
;var Qp=void 0,Rp=void 0;function Sp(){Rp||(Rp=Ok(T("WORKER_SERIALIZATION_URL")));return Rp||void 0}
function Tp(){var a=Sp();Qp||a===void 0||(Qp=new Worker(kb(a),void 0));return Qp}
;var Up=Ol("max_body_size_to_compress",5E5),Vp=Ol("min_body_size_to_compress",500),Wp=!0,Xp=0,Yp=0,Zp=Ol("compression_performance_threshold_lr",250),$p=Ol("slow_compressions_before_abandon_count",4),aq=!1,bq=new Map,cq=1,dq=!0;function eq(){if(typeof Worker==="function"&&Sp()&&!aq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=bq.get(c.key);d&&(fq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),bq.delete(c.key))}},b=Tp();
b&&(b.addEventListener("message",a),b.onerror=function(){bq.clear()},aq=!0)}}
function gq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Wp)try{var g=hq(b);if(g!=null&&(g>Up||g<Vp))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!dq||!U("initial_gzip_use_main_thread"))){aq||eq();var h=Tp();if(h&&!e){bq.set(cq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:cq});cq++;return}}var k=Nk(Bp(b));fq(k,f,a,c,d)}}catch(l){vl(l),d(a,c)}else d(a,c)}
function fq(a,b,c,d,e){dq=!1;var f=W();b.ticks.gelc=f;Yp++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Zp&&(Xp++,U("abandon_compression_after_N_slow_zips")?Yp===Ol("compression_disable_point")&&Xp>$p&&(Wp=!1):Wp=!1);iq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function jq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Wp&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=hq(g);if(h!=null&&(h>Up||h<Vp))return a;c=b?{level:1}:void 0;f=Nk(Bp(g),c);var k=W();e.ticks.gelc=k;if(b){Yp++;if((U("disable_compression_due_to_performance_degredation")||U("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Zp)if(Xp++,U("abandon_compression_after_N_slow_zips")||U("abandon_compression_after_N_slow_zips_lr")){b=Xp/Yp;var l=$p/Ol("compression_disable_point");Yp>0&&Yp%Ol("compression_disable_point")===0&&b>=l&&(Wp=!1)}else Wp=!1;iq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return vl(m),a}}else return a}
function hq(a){try{return(new Blob(a.split(""))).size}catch(b){return vl(b),null}}
function iq(a){U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Pp("gel_compression",a,{sampleRate:.1})}
;function kq(a){a=Object.assign({},a);delete a.Authorization;var b=vh();if(b){var c=new dj;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Je(c.digest(),3)}return a}
;var lq;function mq(){lq||(lq=new yn("yt.innertube"));return lq}
function nq(a,b,c,d){if(d)return null;d=mq().get("nextId",!0)||1;var e=mq().get("requests",!0)||{};e[d]={method:a,request:b,authState:kq(c),requestTime:Math.round(W())};mq().set("nextId",d+1,86400,!0);mq().set("requests",e,86400,!0);return d}
function oq(a){var b=mq().get("requests",!0)||{};delete b[a];mq().set("requests",b,86400,!0)}
function pq(a){var b=mq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(W())-d.requestTime<6E4)){var e=d.authState,f=kq(zp(!1));Qb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),qq(a,d.method,e,{}));delete b[c]}}mq().set("requests",b,86400,!0)}}
;function rq(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ob=function(){};
this.now=Date.now;this.Gb=!1;var b;this.sd=(b=a.sd)!=null?b:100;var c;this.nd=(c=a.nd)!=null?c:1;var d;this.kd=(d=a.kd)!=null?d:2592E6;var e;this.jd=(e=a.jd)!=null?e:12E4;var f;this.md=(f=a.md)!=null?f:5E3;var g;this.Y=(g=a.Y)!=null?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=(h=a.Xb)!=null?h:.1;var k;this.ic=(k=a.ic)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.ob&&(this.ob=a.ob);a.Gb&&(this.Gb=a.Gb);a.Ub&&(this.Ub=a.Ub);this.Z=a.Z;this.Ea=a.Ea;this.ha=a.ha;this.fa=a.fa;this.sendFn=a.sendFn;
this.Fc=a.Fc;this.Cc=a.Cc;sq(this)&&(!this.Z||this.Z("networkless_logging"))&&tq(this)}
function tq(a){sq(a)&&!a.Gb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.ha.Gd(a.Y),uq(a),a.fa.xa()&&a.Pb(),a.fa.listen(a.Fc,a.Pb.bind(a)),a.fa.listen(a.Cc,a.Pc.bind(a)))}
r=rq.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(sq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ha.set(d,this.Y).then(function(e){d.id=e;c.fa.xa()&&vq(c,d)}).catch(function(e){vq(c,d);
wq(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(sq(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Z&&this.Z("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.xa()||this.Z&&this.Z("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ha.set(e,d.Y).catch(function(l){wq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ha.set(e,this.Y).catch(function(g){d.sendFn(a,b,e.skipRetry);
wq(d,g)})}else this.sendFn(a,b,this.Z&&this.Z("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(sq(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ha.nb(d.id,c.Y):e=!0;c.fa.fb&&c.Z&&c.Z("vss_network_hint")&&c.fa.fb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ha.set(d,this.Y).then(function(g){d.id=g;e&&c.ha.nb(d.id,c.Y)}).catch(function(g){wq(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.Pb=function(){var a=this;if(!sq(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ea.ra(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ha.Wc("NEW",a.Y),2);if(c.h!=3)return b=c.i,b?c.yield(vq(a,b),3):(a.Pc(),c.return());a.i&&(a.i=0,a.Pb());c.h=0})},this.sd))};
r.Pc=function(){this.Ea.sa(this.i);this.i=0};
function vq(a,b){var c;return A(function(d){switch(d.h){case 1:if(!sq(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.D(2);break}return d.yield(a.ha.ge(b.id,a.Y),3);case 3:(c=d.i)||a.ob(Error("The request cannot be found in the database."));case 2:if(xq(a,b,a.kd)){d.D(4);break}a.ob(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.D(5);break}return d.yield(a.ha.nb(b.id,a.Y),5);case 5:return d.return();case 4:b.skipRetry||(b=yq(a,
b));if(!b){d.D(0);break}if(!b.skipRetry||b.id===void 0){d.D(8);break}return d.yield(a.ha.nb(b.id,a.Y),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function yq(a,b){if(!sq(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=zq(f);(h=Aq(f))&&a.Z&&a.Z("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.Z&&a.Z("nwl_consider_error_code")&&g||a.Z&&!a.Z("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ic)){m.D(2);break}if(!a.fa.lc){m.D(3);break}return m.yield(a.fa.lc(),3);case 3:if(a.fa.xa()){m.D(2);break}c(e,f);if(!a.Z||!a.Z("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.D(6);
break}return m.yield(a.ha.Gc(b.id,a.Y,!1),6);case 6:return m.return();case 2:if(a.Z&&a.Z("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.ic)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.D(8);break}return b.sendCount<a.nd?m.yield(a.ha.Gc(b.id,a.Y,!0,h?!1:void 0),12):m.yield(a.ha.nb(b.id,a.Y),8);case 12:a.Ea.ra(function(){a.fa.xa()&&a.Pb()},a.md);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.D(2):h.yield(a.ha.nb(b.id,a.Y),2);a.fa.fb&&a.Z&&a.Z("vss_network_hint")&&a.fa.fb(!0);d(e,f);h.h=0})};
return b}
function xq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function uq(a){if(!sq(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ha.Wc("QUEUED",a.Y).then(function(b){b&&!xq(a,b,a.jd)?a.Ea.ra(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.D(2):c.yield(a.ha.Gc(b.id,a.Y),2);uq(a);c.h=0})}):a.fa.xa()&&a.Pb()})}
function wq(a,b){a.yd&&!a.fa.xa()?a.yd(b):a.handleError(b)}
function sq(a){return!!a.Y||a.Ub}
function zq(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Aq(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Bq;
function Cq(){if(Bq)return Bq();var a={};Bq=ip("LogsDatabaseV2",{wb:(a.LogsRequestsStore={Db:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&oo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),vo(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Bq()}
;function Dq(a){return Io(Cq(),a)}
function Eq(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Dq(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(qo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();Fq(c);return g.return(f)})}
function Gq(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Dq(b),2);if(m.h!=3)return d=m.i,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k="prev",U("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(no(d,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(n){return Bo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=W();Fq(c);return m.return(l)})}
function Hq(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Dq(b),2);c=d.i;return d.return(no(c,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",jo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Iq(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Dq(b),2);e=f.i;return f.return(no(e,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),jo(h.h.put(k,void 0)).then(function(){return k})):co.resolve(void 0)})}))})}
function Jq(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Dq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Kq(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Dq(a),2);b=d.i;c=W()-2592E6;return d.yield(no(b,["LogsRequestsStore"],{mode:"readwrite",ma:!0},function(e){return xo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return yo(f)})})}),0)})}
function Lq(){A(function(a){return a.yield(ep(),0)})}
function Fq(a){U("nwl_csi_killswitch")||Pp("networkless_performance",a,{sampleRate:1})}
;var Mq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503};var Nq={},Oq=ip("ServiceWorkerLogsDatabase",{wb:(Nq.SWHealthLog={Db:1},Nq),shared:!0,upgrade:function(a,b){b(1)&&vo(oo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Pq(a){return Io(Oq(),a)}
function Qq(a){var b,c;A(function(d){if(d.h==1)return d.yield(Pq(a),2);b=d.i;c=W()-2592E6;return d.yield(no(b,["SWHealthLog"],{mode:"readwrite",ma:!0},function(e){return xo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return yo(f)})})}),0)})}
function Rq(a){var b;return A(function(c){if(c.h==1)return c.yield(Pq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Sq={},Tq=0;function Uq(a){var b=new Image,c=""+Tq++;Sq[c]=b;b.onload=b.onerror=function(){delete Sq[c]};
b.src=a}
;var Vq;function Wq(){Vq||(Vq=new yn("yt.offline"));return Vq}
function Xq(a){if(U("offline_error_handling")){var b=Wq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Wq().set("errors",b,2592E3,!0)}}
;function Yq(){this.h=new Map;this.i=!1}
function Zq(){if(!Yq.h){var a=E("yt.networkRequestMonitor.instance")||new Yq;D("yt.networkRequestMonitor.instance",a);Yq.h=a}return Yq.h}
Yq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Yq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Yq.prototype.removeParams=function(a){return a.split("?")[0]};
Yq.prototype.removeParams=Yq.prototype.removeParams;Yq.prototype.isEndpointCFR=Yq.prototype.isEndpointCFR;Yq.prototype.requestComplete=Yq.prototype.requestComplete;Yq.getInstance=Zq;function $q(){xd.call(this);var a=this;this.j=!1;this.i=Zi();this.i.listen("networkstatus-online",function(){if(a.j&&U("offline_error_handling")){var b=Wq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ul(d)}Wq().set("errors",{},2592E3,!0)}}})}
y($q,xd);function ar(){if(!$q.h){var a=E("yt.networkStatusManager.instance")||new $q;D("yt.networkStatusManager.instance",a);$q.h=a}return $q.h}
r=$q.prototype;r.xa=function(){return this.i.xa()};
r.fb=function(a){this.i.i=a};
r.Td=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.Ld=function(){this.j=!0};
r.listen=function(a,b){return this.i.listen(a,b)};
r.lc=function(a){a=Xi(this.i,a);a.then(function(b){U("use_cfr_monitor")&&Zq().requestComplete("generate_204",b)});
return a};
$q.prototype.sendNetworkCheckRequest=$q.prototype.lc;$q.prototype.listen=$q.prototype.listen;$q.prototype.enableErrorFlushing=$q.prototype.Ld;$q.prototype.getWindowStatus=$q.prototype.Td;$q.prototype.networkStatusHint=$q.prototype.fb;$q.prototype.isNetworkAvailable=$q.prototype.xa;$q.getInstance=ar;function br(a){a=a===void 0?{}:a;xd.call(this);var b=this;this.i=this.o=0;this.j=ar();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){cr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){cr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yd(b,"publicytnetworkstatus-offline")})))}
y(br,xd);br.prototype.xa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
br.prototype.fb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
br.prototype.lc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return U("skip_network_check_if_cfr")&&Zq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.fb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.xa())})):c?d.return(c(a)):d.return(!0)})};
function cr(a,b){a.rateLimit?a.i?($i.sa(a.o),a.o=$i.ra(function(){a.m!==b&&(yd(a,b),a.m=b,a.i=W())},a.rateLimit-(W()-a.i))):(yd(a,b),a.m=b,a.i=W()):yd(a,b)}
;var dr;function er(){var a=rq.call;dr||(dr=new br({Og:!0,Hg:!0}));a.call(rq,this,{ha:{Gd:Kq,nb:Jq,Wc:Gq,ge:Hq,Gc:Iq,set:Eq},fa:dr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;vl(new V(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else ul(b)},
ob:vl,sendFn:fr,now:W,yd:Xq,Ea:xn(),Fc:"publicytnetworkstatus-online",Cc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,ic:Ol("potential_esf_error_limit",10),Z:U,Gb:!(Pm()&&gr())});this.j=new Ji;U("networkless_immediately_drop_all_requests")&&Lq();fp("LogsDatabaseV2")}
y(er,rq);function hr(){var a=E("yt.networklessRequestController.instance");a||(a=new er,D("yt.networklessRequestController.instance",a),U("networkless_logging")&&Vo().then(function(b){a.Y=b;tq(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.Y&&Qq(a.Y);U("networkless_immediately_drop_sw_health_store")&&ir(a)}));
return a}
er.prototype.writeThenSend=function(a,b){b||(b={});b=jr(a,b);Pm()||(this.h=!1);rq.prototype.writeThenSend.call(this,a,b)};
er.prototype.sendThenWrite=function(a,b,c){b||(b={});b=jr(a,b);Pm()||(this.h=!1);rq.prototype.sendThenWrite.call(this,a,b,c)};
er.prototype.sendAndWrite=function(a,b){b||(b={});b=jr(a,b);Pm()||(this.h=!1);rq.prototype.sendAndWrite.call(this,a,b)};
er.prototype.awaitInitialization=function(){return this.j.promise};
function ir(a){var b;A(function(c){if(!a.Y)throw b=Zn("clearSWHealthLogsDb"),b;return c.return(Rq(a.Y).catch(function(d){a.handleError(d)}))})}
function fr(a,b,c,d){d=d===void 0?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&kr(a,b);if(U("use_request_time_ms_header"))b.headers&&Fl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Tl(a,void 0,"POST",f,void 0);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Tl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new cb({url:a});if(k.j&&k.i||k.m){var l=mc(nc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(vc),p=uc(a,0,"ri",n);if(p<0)var t=null;else{var u=a.indexOf("&",p);if(u<0||u>n)u=n;t=decodeURIComponent(a.slice(p+3,u!==-1?u:0).replace(/\+/g," "))}m=t!=="1"}var z=!m;break b}}catch(H){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var x=!0;break b}}catch(H){}x=!1}c=x?!0:!1}else c=
!1;c||Uq(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),gq(a,b.postBody,b,Xl,d)):gq(a,JSON.stringify(b.postParams),b,Wl,d):Xl(a,b)}
function jr(a,b){U("use_event_time_ms_header")&&Fl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function kr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Zq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Zq().requestComplete(a,!0);d(e,f)}}
function gr(){return oc(document.location.toString())!=="www.youtube-nocookie.com"}
;var lr=!1,mr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:lr};D("ytNetworklessLoggingInitializationOptions",mr);function nr(){var a;A(function(b){if(b.h==1)return b.yield(Vo(),2);a=b.i;if(!a||!Pm()&&!U("nwl_init_require_datasync_id_killswitch")||!gr())return b.D(0);lr=!0;mr.isNwlInitialized=lr;return b.yield(hr().awaitInitialization(),0)})}
;function or(a){var b=this;this.config_=null;a?this.config_=a:wp()&&(this.config_=xp());Sm(function(){pq(b)},5E3)}
or.prototype.isReady=function(){!this.config_&&wp()&&(this.config_=xp());return!!this.config_};
function qq(a,b,c,d){function e(u){u=u===void 0?!1:u;var z;if(d.retry&&h!="www.youtube-nocookie.com"&&(u||U("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(z=nq(b,c,l,k)),z)){var x=g.onSuccess,H=g.onFetchSuccess;g.onSuccess=function(O,da){oq(z);x(O,da)};
c.onFetchSuccess=function(O,da){oq(z);H(O,da)}}try{if(u&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?hr().writeThenSend(t,g):hr().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var R=g.postBody;typeof R!=="string"&&(R=JSON.stringify(g.postBody));gq(t,R,g,Xl,G)}else gq(t,JSON.stringify(g.postParams),g,Wl,G)}else U("web_all_payloads_via_jspb")?Xl(t,g):Wl(t,g)}catch(O){if(O.name==="InvalidAccessError")z&&(oq(z),z=0),vl(Error("An extension is blocking network request."));else throw O;}z&&Sm(function(){pq(a)},5E3)}
!T("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&vl(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);ul(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(u,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,z){if(d.onError)d.onError(z)},
onFetchError:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ae)&&(h=f);var k=a.config_.ce||!1,l=zp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,n={alt:"json"},p=a.config_.be&&f;p=p&&f.startsWith("Bearer");p||(n.key=a.config_.innertubeApiKey);var t=El(""+h+m,n||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
mr.isNwlInitialized:lr)?To().then(function(u){e(u)}):e(!1)}
;var pr=0,qr=Zc?"webkit":Yc?"moz":Wc?"ms":Vc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++pr});var ur={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function vr(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ur||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function wr(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
vr.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
vr.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
vr.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Mb=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",Mb);var xr=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",xr);
function yr(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Lb(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&Qb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function zr(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=yr(a,b,c,d);if(e)return e;e=++xr.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new vr(h);if(!Id(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new vr(h);
h.currentTarget=a;return c.call(a,h)};
g=tl(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ar()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Mb[e]=[a,b,c,g,d];return e}
function Br(a){a&&(typeof a=="string"&&(a=[a]),Db(a,function(b){if(b in Mb){var c=Mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ar()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Mb[b]}}))}
var Ar=Dd(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Cr(a){this.F=a;this.h=null;this.m=0;this.v=null;this.o=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=zr(window,"mousemove",Xa(this.W,this));a=Xa(this.K,this);typeof a==="function"&&(a=tl(a));this.X=window.setInterval(a,25)}
$a(Cr,F);Cr.prototype.W=function(a){a.h===void 0&&wr(a);var b=a.h;a.i===void 0&&wr(a);this.h=new Ed(b,a.i)};
Cr.prototype.K=function(){if(this.h){var a=W();if(this.m!=0){var b=this.v,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.i[this.j]=Math.abs((d-this.o)/this.o)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.F();this.o=d}this.m=a;this.v=this.h;this.j=(this.j+1)%4}};
Cr.prototype.da=function(){window.clearInterval(this.X);Br(this.U)};var Dr={};
function Er(a){var b=a===void 0?{}:a;a=b.qe===void 0?!1:b.qe;b=b.Md===void 0?!0:b.Md;if(E("_lact",window)==null){var c=parseInt(T("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Fr();zr(document,"keydown",Fr);zr(document,"keyup",Fr);zr(document,"mousedown",Fr);zr(document,"mouseup",Fr);a?zr(window,"touchmove",function(){Gr("touchmove",200)},{passive:!0}):(zr(window,"resize",function(){Gr("resize",200)}),b&&zr(window,"scroll",function(){Gr("scroll",200)}));
new Cr(function(){Gr("mouse",100)});
zr(document,"touchstart",Fr,{passive:!0});zr(document,"touchend",Fr,{passive:!0})}}
function Gr(a,b){Dr[a]||(Dr[a]=!0,$i.ra(function(){Fr();Dr[a]=!1},b))}
function Fr(){E("_lact",window)==null&&Er();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Hr(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Ir=C.ytPubsubPubsubInstance||new M,Jr=C.ytPubsubPubsubSubscribedKeys||{},Kr=C.ytPubsubPubsubTopicToKeys||{},Lr=C.ytPubsubPubsubIsSynchronous||{};function Mr(a,b){var c=Nr();if(c&&b){var d=c.subscribe(a,function(){function e(){Jr[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Lr[a]?e():Ll(e,0)}catch(g){ul(g)}},void 0);
Jr[d]=!0;Kr[a]||(Kr[a]=[]);Kr[a].push(d);return d}return 0}
function Or(a){var b=Nr();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Db(a,function(c){b.unsubscribeByKey(c);delete Jr[c]}))}
function Pr(a,b){var c=Nr();c&&c.publish.apply(c,arguments)}
function Qr(a){var b=Nr();if(b)if(b.clear(a),a)Rr(a);else for(var c in Kr)Rr(c)}
function Nr(){return C.ytPubsubPubsubInstance}
function Rr(a){Kr[a]&&(a=Kr[a],Db(a,function(b){Jr[b]&&delete Jr[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Qb;M.prototype.publish=M.prototype.kb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Ir);D("ytPubsubPubsubTopicToKeys",Kr);D("ytPubsubPubsubIsSynchronous",Lr);D("ytPubsubPubsubSubscribedKeys",Jr);var Sr=Symbol("injectionDeps");function Tr(a){this.name=a}
Tr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ur(a){this.key=a}
function Vr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Wr(a,b){a.i.set(b.kc,b);var c=a.j.get(b.kc);if(c)try{c.Vg(a.resolve(b.kc))}catch(d){c.Tg(d)}}
Vr.prototype.resolve=function(a){return a instanceof Ur?Xr(this,a.key,[],!0):Xr(this,a,[])};
function Xr(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.ud!==void 0)var e=d.ud;else if(d.Ye)e=d[Sr]?Yr(a,d[Sr],c):[],e=d.Ye.apply(d,ma(e));else if(d.td){e=d.td;var f=e[Sr]?Yr(a,e[Sr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ma(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Yg||a.h.set(b,e);return e}
function Yr(a,b,c){return b?b.map(function(d){return d instanceof Ur?Xr(a,d.key,c,!0):Xr(a,d,c)}):[]}
;var Zr;function $r(){Zr||(Zr=new Vr);return Zr}
;var as=window;function bs(){var a,b;return"h5vcc"in as&&((a=as.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=as.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in as&&as.performance.mark&&as.performance.measure?2:0}
function cs(a){var b=bs();switch(b){case 1:as.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:as.performance.mark(a+"-start");break;case 0:break;default:Xb(b,"unknown trace type")}}
function ds(a){var b=bs();switch(b){case 1:as.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";as.performance.mark(c);as.performance.measure(a,b,c);break;case 0:break;default:Xb(b,"unknown trace type")}}
;var es=U("web_enable_lifecycle_monitoring")&&bs()!==0,gs=U("web_enable_lifecycle_monitoring");function hs(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?xn():d;this.j=c;this.scheduler=d;this.i=new Ji;this.h=a;for(a={bb:0};a.bb<this.h.length;a={hc:void 0,bb:a.bb},a.bb++)a.hc=this.h[a.bb],c=function(e){return function(){e.hc.wc();b.h[e.bb].jc=!0;b.h.every(function(f){return f.jc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.hc),d=this.scheduler.Za(c,d),this.h[a.bb]=Object.assign({},a.hc,{wc:c,
jobId:d})}
function is(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.jc||(a.scheduler.sa(c.jobId),a.scheduler.Za(c.wc,10))}
hs.prototype.cancel=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.jc||this.scheduler.sa(b.jobId),b.jc=!0;this.i.resolve()};
hs.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function js(a){this.state=a;this.plugins=[];this.m=void 0;this.v={};es&&cs(this.state)}
r=js.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;es&&ds(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(is(this.j),this.j=void 0);ks(this,a,b);this.state=a;es&&cs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ls(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ls(a,b){var c=b.filter(function(e){return ms(a,e)===10}),d=b.filter(function(e){return ms(a,e)!==10});
return a.v.Xg?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.xe.apply(a,[c].concat(ma(e))),2);a.pd.apply(a,[d].concat(ma(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.ye.apply(a,[c].concat(ma(e)));a.pd.apply(a,[d].concat(ma(e)))}}
r.ye=function(a){for(var b=B.apply(1,arguments),c=xn(),d=w(a),e=d.next(),f={};!e.done;f={Ib:void 0},e=d.next())f.Ib=e.value,c.Bb(function(g){return function(){ns(g.Ib.name);g.Ib.callback.apply(g.Ib,ma(b));ps(g.Ib.name)}}(f))};
r.xe=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=xn(),d=w(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.D(0);f.sb=e.value;f.Sb=void 0;g=function(k){return function(){ns(k.sb.name);var l=k.sb.callback.apply(k.sb,ma(b));typeof(l==null?void 0:l.then)==="function"?k.Sb=l.then(function(){ps(k.sb.name)}):ps(k.sb.name)}}(f);
c.Bb(g);return f.Sb?h.yield(f.Sb,3):h.D(3)}f={sb:void 0,Sb:void 0};e=d.next();return h.D(2)})};
r.pd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{wc:function(){ns(e.name);e.callback.apply(e,ma(b));ps(e.name)},
priority:ms(c,e)}});
d.length&&(this.j=new hs(d))};
function ms(a,b){var c,d;return(d=(c=a.m)!=null?c:b.priority)!=null?d:0}
function ns(a){es&&a&&cs(a)}
function ps(a){es&&a&&ds(a)}
function ks(a,b,c){gs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(js.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function qs(a){js.call(this,a===void 0?"none":a);this.h=null;this.m=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.B},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var rs;y(qs,js);qs.prototype.i=function(a,b){var c=this;this.h=Sm(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
qs.prototype.B=function(a,b){this.h&&($i.sa(this.h),this.h=null);a(b==null?void 0:b.event)};
function ss(){rs||(rs=new qs);return rs}
;var ts=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return ts});function us(){this.store={};this.h={}}
us.prototype.storePayload=function(a,b){a=vs(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
us.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ws(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ma(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ma(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ma(this.smartExtractMatchingEntries(a))));return c};
us.prototype.extractMatchingEntries=function(a){a=ws(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ma(this.store[a[c]])),delete this.store[a[c]]);return b};
us.prototype.getSequenceCount=function(a){a=ws(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ws(a,b){var c=vs(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&vs(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(xs(b.auth,g[0])){var h=b.isJspb;xs(h===void 0?"undefined":h?"true":"false",g[1])&&xs(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),xs(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function xs(a,b){return a===void 0||a==="undefined"?!0:a===b}
us.prototype.getSequenceCount=us.prototype.getSequenceCount;us.prototype.extractMatchingEntries=us.prototype.extractMatchingEntries;us.prototype.smartExtractMatchingEntries=us.prototype.smartExtractMatchingEntries;us.prototype.storePayload=us.prototype.storePayload;function vs(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function ys(a,b){if(a)return a[b.name]}
;var zs=Ol("initial_gel_batch_timeout",2E3),As=Ol("gel_queue_timeout_max_ms",6E4),Bs=Math.pow(2,16)-1,Cs=Ol("gel_min_batch_size",5),Ds=void 0;function Es(){this.m=this.h=this.i=0;this.j=!1}
var Fs=new Es,Gs=new Es,Hs=new Es,Is=new Es,Js,Ks=!0,Ls=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Ls);var Ms={};function Ns(){var a=E("yt.logging.ims");a||(a=new us,D("yt.logging.ims",a));return a}
function Os(a,b){if(a.endpoint==="log_event"){Ps();var c=Qs(a),d=Rs(a.payload)||"";a:{if(U("enable_web_tiered_gel")){var e=Mq[d||""];var f,g,h,k=$r().resolve(new Ur(rp))==null?void 0:(f=sp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!U("web_payload_policy_disabled_killswitch"))return;k=Ss(e.tier);if(k===400){Ts(a,b);return}}Ms[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};Ns().storePayload(e,a.payload);Us(b,c,e,d==="gelDebuggingEvent")}}
function Us(a,b,c,d){function e(){Vs({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Ds=new a);a=Ol("tvhtml5_logging_max_batch_ads_fork")||Ol("web_logging_max_batch")||100;var g=W(),h=Ws(f,c.tier),k=h.m;d&&(h.j=!0);d=0;c&&(d=Ns().getSequenceCount(c));d>=1E3?e():d>=a?Js||(Js=Xs(function(){e();Js=void 0},0)):g-k>=10&&(Ys(f,c.tier),h.m=g)}
function Ts(a,b){if(a.endpoint==="log_event"){Ps();var c=Qs(a),d=new Map;d.set(c,[a.payload]);var e=Rs(a.payload)||"";b&&(Ds=new b);return new Vd(function(f,g){Ds&&Ds.isReady()?Zs(d,Ds,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Qs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Ls[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Vs(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new Vd(function(e,f){var g=Ws(c,d),h=g.j;g.j=!1;$s(g.i);$s(g.h);g.h=0;Ds&&Ds.isReady()?d===void 0&&U("enable_web_tiered_gel")?at(e,f,a,b,c,300,h):at(e,f,a,b,c,d,h):(Ys(c,d),e())})}
function at(a,b,c,d,e,f,g){var h=Ds;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=U("enable_web_tiered_gel")?Ns().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Ns().extractMatchingEntries(e),k.set(d,f);else for(d=w(Object.keys(Ms)),l=d.next();!l.done;l=d.next())l=l.value,e=U("enable_web_tiered_gel")?Ns().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Ns().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Ms[l];Zs(k,h,a,b,c,!1,g)}
function Ys(a,b){function c(){Vs({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Ws(a,b),e=d===Is||d===Hs?5E3:As;U("web_gel_timeout_cap")&&!d.h&&(e=Xs(function(){c()},e),d.h=e);
$s(d.i);e=T("LOGGING_BATCH_TIMEOUT",Ol("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Ks&&(e=zs);e=Xs(function(){Ol("gel_min_batch_size")>0?Ns().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Cs&&c():c()},e);
d.i=e}
function Zs(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(W()),k=a.size,l=(g===void 0?0:g)&&U("vss_through_gel_video_stats")?"video_stats":"log_event";a=w(a);var m=a.next();for(g={};!m.done;g={Bc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Ec:void 0,Dc:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Sb({context:yp(b.config_||xp())});if(!Qa(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Ls[m])&&
bt(g.batchRequest,m,n);delete Ls[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";ct(g.batchRequest,h,g.dangerousLogToVisitorSession);U("always_send_and_write")&&(e.writeThenSend=!1);g.Ec=function(p){U("start_client_gcf")&&$i.ra(function(){return A(function(t){return t.yield(dt(p),0)})});
k--;k||c()};
g.Bc=0;g.Dc=function(p){return function(){p.Bc++;if(e.bypassNetworkless&&p.Bc===1)try{qq(b,l,p.batchRequest,et({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Ec,p.Dc,f)),Ks=!1}catch(t){ul(t),d()}k--;k||c()}}(g);
try{qq(b,l,g.batchRequest,et(e,g.dangerousLogToVisitorSession,g.Ec,g.Dc,f)),Ks=!1}catch(p){ul(p),d()}}}
function et(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Eg:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};ft()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function ct(a,b,c){ft()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&((c=T("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*Bs/2)),c++,c>Bs&&(c=1),pl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function bt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ps(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Nl("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(ts=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",ts),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function ft(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Xs(a,b){return U("transport_use_scheduler")===!1?Ll(a,b):U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Sm(function(){if(ss().currentState==="none")a();else{var c={};ss().install((c.none={callback:a},c))}},b):Sm(a,b)}
function $s(a){U("transport_use_scheduler")?$i.sa(a):window.clearTimeout(a)}
function dt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=ys(d,Sk),g=(f=d)==null?void 0:f.hotHashData,h=ys(d,Rk),l=(k=d)==null?void 0:k.coldHashData,(m=$r().resolve(new Ur(rp)))?g?e?n.yield(tp(m,g,e),2):n.yield(tp(m,g),2):n.D(2):n.return()):l?h?n.yield(up(m,l,h),0):n.yield(up(m,l),0):n.D(0)})}
function Ws(a,b){b=b===void 0?200:b;return a?b===300?Is:Gs:b===300?Hs:Fs}
function Rs(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Mq[b])return b}
function Ss(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var gt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",gt);
function ht(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Hr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,gt[b]=b in gt?gt[b]+1:0,a.sequence={index:gt[b],groupKey:b},d.endOfSequence&&delete gt[d.sequenceGroup]);(d.sendIsolatedPayload?Ts:Os)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Hn(a,b,c){c=c===void 0?{}:c;var d=or;T("ytLoggingEventsDefaultDisabled",!1)&&or===or&&(d=null);U("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=Hr(),c.timestamp=W());ht(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var jt=new Set,kt=0,lt=0,mt=0,nt=[],ot=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Gn(a){pt(a)}
function qt(a){pt(a,"WARNING")}
function rt(a){a instanceof Error?pt(a):(a=Ra(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",qt(a))}
function pt(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||T("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||T("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),U("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(kt>=5))){d=nt;var k=fc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=om(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var u="params."+p,z=qm(t[p]);c[u]=z;n+=u.length+z.length;if(n>500)break}}else c.params=qm(t)}if(d.length)for(p=0;p<d.length&&!(n=om(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=km();c=w(a.Wa);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Pg)){a=d.weight;break a}a=w(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=w(fm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.fc[p.name])for(e=w(c.fc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.zc(f);break}p.params||(p.params={});a=km();p.params["params.errorServiceSignature"]="msg="+a.Wa.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ib("sample").constructor!==gb&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);
if(p.sampleWeight!==0&&!jt.has(p.message)){if(g&&U("web_enable_error_204"))st(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(lm.kb("handleError",p),U("record_app_crashed_web")&&mt===0&&p.sampleWeight===1&&(mt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},U("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),Hn("appCrashed",g)),lt++):b==="WARNING"&&lm.kb("handleWarning",p);if(U("kevlar_gel_error_routing")){g=b;h=h===
void 0?{}:h;b:{a=w(ot);for(c=a.next();!c.done;c=a.next())if(Nn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];T("FEXP_EXPERIMENTS")&&(h.experimentIds=T("FEXP_EXPERIMENTS"));d=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!ql("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=w(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=w(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME");e=T("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Hn("clientError",h),(g==="ERROR"||U("errors_flush_gel_always_killswitch"))&&Vs(void 0,void 0,!1))}U("suppress_error_204_logging")||st(b,p)}try{jt.add(p.message)}catch(x){}kt++}}}
function st(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Xl(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function tt(){this.register=new Map}
function ut(a){a=w(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Sg("ABORTED")}
tt.prototype.clear=function(){ut(this);this.register.clear()};
var vt=new tt;var wt=Date.now().toString();
function xt(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(wt)for(a=1,b=0;b<wt.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^wt.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var zt,At=C.ytLoggingDocDocumentNonce_;At||(At=xt(),D("ytLoggingDocDocumentNonce_",At));zt=At;function Bt(a){this.h=a}
r=Bt.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Zk;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&K(a,2,Kf(this.h.veType)),this.h.veCounter!==void 0&&K(a,6,Kf(this.h.veCounter)),this.h.elementIndex!==void 0&&K(a,3,Kf(this.h.elementIndex)),this.h.isCounterfactual&&K(a,5,Gf(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();Bg(a,Zk,7,b)}this.h.youtubeData!==void 0&&Bg(a,Tk,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function Ct(a){return T("client-screen-nonce-store",{})[a===void 0?0:a]}
function Dt(a,b){b=b===void 0?0:b;var c=T("client-screen-nonce-store");c||(c={},pl("client-screen-nonce-store",c));c[b]=a}
function Et(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ft(a){return T(Et(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Ft);function Gt(){var a=T("csn-to-ctt-auth-info");a||(a={},pl("csn-to-ctt-auth-info",a));return a}
function Ht(){return Object.values(T("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function It(a){a=Ct(a===void 0?0:a);if(!a&&!T("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",It);function Jt(a,b,c){var d=Gt();(c=It(c))&&delete d[c];b&&(d[a]=b)}
function Kt(a){return Gt()[a]}
D("yt_logging_screen.getCttAuthInfo",Kt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Ct(c)||b!==T(Et(c)))if(Jt(a,d,c),Dt(a,c),pl(Et(c),b),b=function(){setTimeout(function(){a&&Hn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:zt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Lt(){var a=Rb(Mt),b;return(new Vd(function(c,d){a.onSuccess=function(e){Kl(e)?c(new Nt(e)):d(new Ot("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ot("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ot("Request timed out","net.timeout",e))};
b=Xl("//googleads.g.doubleclick.net/pagead/id",a)})).mc(function(c){if(c instanceof be){var d;
(d=b)==null||d.abort()}return $d(c)})}
function Ot(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
y(Ot,bb);function Nt(a){this.xhr=a}
;function Pt(){this.h=0;this.i=null}
Pt.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Qt(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Rt(a):this};
Pt.prototype.getValue=function(){return this.i};
Pt.prototype.isRejected=function(){return this.h==2};
Pt.prototype.$goog_Thenable=!0;function Rt(a){var b=new Pt;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Qt(a){var b=new Pt;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function St(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Fl(a)?"same-origin":"cors",credentials:Fl(a)?"same-origin":"include"};b={};for(var d=w(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Tt(){return th()||(Ee||Fe)&&Nn("applewebkit")&&!Nn("version")&&(!Nn("safari")||Nn("gsa/"))||$c&&Nn("version/")?!0:T("EOM_VISITOR_DATA")?!1:!0}
;function Ut(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Xk)if(Xk[d]==c.embeddedPlayerMode){b=Xk[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Vt(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Wt;this.isTimeout=a instanceof Ot&&a.errorCode=="net.timeout";this.isCanceled=a instanceof be}
y(Vt,bb);Vt.prototype.name="BiscottiError";function Wt(){bb.call(this,"Biscotti ID is missing from server")}
y(Wt,bb);Wt.prototype.name="BiscottiMissingError";var Mt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Xt=null;function Yt(){if(U("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Tt())return Error("User has not consented - not fetching biscotti id.");var a=T("PLAYER_VARS",{});if(Pb(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Ut(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function il(){var a=Yt();if(a!==void 0)return $d(a);Xt||(Xt=Lt().then(Zt).mc(function(b){return $t(2,b)}));
return Xt}
function Zt(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Wt;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Wt;a=a.id;jl(a);Xt=Qt(a);au(18E5,2);return a}
function $t(a,b){b=new Vt(b);jl("");Xt=Rt(b);a>0&&au(12E4,a-1);throw b;}
function au(a,b){Ll(function(){Lt().then(Zt,function(c){return $t(b,c)}).mc(Cd)},a)}
function bu(){try{var a=E("yt.ads.biscotti.getId_");return a?a():il()}catch(b){return $d(b)}}
;var Bb=ka(["data-"]);function cu(a){a&&(a.dataset?a.dataset[du()]="true":Wb(a))}
function eu(a){return a?a.dataset?a.dataset[du()]:a.getAttribute("data-loaded"):null}
var fu={};function du(){return fu.loaded||(fu.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function gu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||Rb(b);this.assets=a.assets||{};this.attrs=a.attrs||Rb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
gu.prototype.clone=function(){var a=new gu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Pa(c)=="object"?a[b]=Rb(c):a[b]=c}return a};var hu=["share/get_share_panel"],iu=["share/get_web_player_share_panel"],ju=["feedback"],ku=["notification/modify_channel_preference"],lu=["browse/edit_playlist"],mu=["subscription/subscribe"],nu=["subscription/unsubscribe"];var ou=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",ou);function pu(a){kl(ou,arguments)}
;function qu(a,b,c){ru(a,b,c===void 0?null:c)}
function su(a){a=tu(a);var b=document.getElementById(a);b&&(Qr(a),b.parentNode.removeChild(b))}
function uu(a,b){a&&b&&(a=""+Sa(b),(a=vu[a])&&Or(a))}
function ru(a,b,c){c=c===void 0?null:c;var d=tu(a),e=document.getElementById(d),f=e&&eu(e),g=e&&!f;f?b&&b():(b&&(f=Mr(d,b),b=""+Sa(b),vu[b]=f),g||(e=wu(a,d,function(){eu(e)||(cu(e),Pr(d),Ll(function(){Qr(d)},0))},c)))}
function wu(a,b,c,d){d=d===void 0?null:d;var e=Hd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);dc(e,Pk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function tu(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+kc(a)}
var vu={};function xu(a){var b=yu(a),c=document.getElementById(b),d=c&&eu(c);d||c&&!d||(c=zu(a,b,function(){if(!eu(c)){cu(c);Pr(b);var e=Ya(Qr,b);Ll(e,0)}}))}
function zu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Pk(a);Zb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function yu(a){var b=Hd("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+kc(a)}
;function Au(a){var b=B.apply(1,arguments);if(!Bu(a)||b.some(function(d){return!Bu(d)}))throw Error("Only objects may be merged.");
b=w(b);for(var c=b.next();!c.done;c=b.next())Cu(a,c.value)}
function Cu(a,b){for(var c in b)if(Bu(b[c])){if(c in a&&!Bu(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Cu(a[c],b[c])}else if(Du(b[c])){if(c in a&&!Du(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Eu(a[c],b[c])}else a[c]=b[c];return a}
function Eu(a,b){b=w(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Bu(c)?a.push(Cu({},c)):Du(c)?a.push(Eu([],c)):a.push(c);return a}
function Bu(a){return typeof a==="object"&&!Array.isArray(a)}
function Du(a){return typeof a==="object"&&Array.isArray(a)}
;var Fu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Gu(a,b){var c=c===void 0?!0:c;var d=T("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=oc(window.location.href);e&&d.push(e);e=oc(a);if(Cb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=pc(a),a=qc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:It()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Hu(a,b,f)}else Hu(a,b)}
function Hu(a,b,c){a=Iu(a);b=b?sc(b):"";c=c||5;Tt()&&ym(a,b,c)}
function Iu(a){for(var b=w(Fu),c=b.next();!c.done;c=b.next())a=xc(a,c.value);return"ST-"+kc(a).toString(36)}
;function Ju(a){Cp.call(this,1,arguments);this.csn=a}
y(Ju,Cp);var Lp=new Dp("screen-created",Ju),Ku=[],Lu=0,Mu=new Map,Nu=new Map,Ou=new Map;
function Pu(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Qu({cttAuthInfo:Kt(b)||void 0},b),g=w(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(Nb(k)||!k.trackingParams&&!k.veType)&&qt(Error("Child VE logged with no data"));if(U("no_client_ve_attach_unless_shown")){var l=Ru(h,b);if(k.veType&&!Nu.has(l)&&!Ou.has(l)&&!e){if(!U("il_attach_cache_limit")||Mu.size<1E3){Mu.set(l,[a,b,c,h]);return}U("il_attach_cache_limit")&&Mu.size>1E3&&qt(new V("IL Attach cache exceeded limit"))}h=Ru(c,b);Mu.has(h)?
Su(c,b):Ou.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Fb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Tu("visualElementAttached",f,c):a?ht("visualElementAttached",c,a,f):Hn("visualElementAttached",c,f)}
function Tu(a,b,c){Ku.push({pe:a,payload:c,Lg:void 0,options:b});Lu||(Lu=Mp())}
function Np(a){if(Ku){for(var b=w(Ku),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Hn(c.pe,c.payload,c.options));Ku.length=0}Lu=0}
function Ru(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Su(a,b){a=Ru(a,b);Mu.has(a)&&(b=Mu.get(a)||[],Pu(b[0],b[1],b[2],[b[3]],!0),Mu.delete(a))}
function Qu(a,b){U("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Uu(){try{return!!self.localStorage}catch(a){return!1}}
;function Vu(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Wu(a){if(Uu()){var b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Vu(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Xu(){if(!Uu())return!1;var a=Qm(),b=Object.keys(window.localStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Vu(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Yu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(T("INNERTUBE_CLIENT_NAME")==="WEB"||T("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Zu(a){if(T("LOGGED_IN",!0)&&Yu()){var b=T("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=oc(window.location.href);c&&b.push(c);c=oc(a);Cb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=pc(a),(b=qc(b))?(b=Iu(b),b=(b=zm(b)||null)?Cl(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Yu()?(d||(d=T("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Gu(a,b)}}
;function $u(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=T("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Gu(a,b);if(c)return!1;Zu(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=tc(a,e);Zu(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.de(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function av(a){if(Pb(T("PLAYER_VARS",{}))!="1"){a&&hl();try{bu().then(function(){},function(){}),Ll(av,18E5)}catch(b){ul(b)}}}
;var bv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function cv(){var a=a===void 0?window.location.href:a;if(U("kevlar_disable_theme_param"))return null;mc(nc(5,a));try{var b=Dl(a).theme;return bv.get(b)||null}catch(c){}return null}
;function dv(){this.h={};if(this.i=Bm()){var a=zm("CONSISTENCY");a&&ev(this,{encryptedTokenJarContents:a})}}
dv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Pa.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=w(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];ev(this,a)}};
function ev(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&ym("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var fv=window.location.hostname.split(".").slice(-2).join(".");function gv(){this.j=-1;var a=T("LOCATION_PLAYABILITY_TOKEN");T("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=hv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var iv;function jv(){iv=E("yt.clientLocationService.instance");iv||(iv=new gv,D("yt.clientLocationService.instance",iv));return iv}
r=gv.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.m||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.m||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,T("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=hv(this))&&this.h.set("yt-location-playability-token",a,15552E3):ym("YT_CL",JSON.stringify({loctok:a}),15552E3,fv,!0))};
function hv(a){return a.h===void 0?new yn("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=hv(this))&&this.h.remove("yt-location-playability-token"):Am("YT_CL");this.m=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;T("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function kv(a){var b={"Content-Type":"application/json"};T("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=T("EOM_VISITOR_DATA"):T("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=T("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=T("LOGGED_IN",!1);T("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=T("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=T("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=T("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=T("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=T("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;function lv(){this.h={}}
lv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
lv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
lv.prototype.set=function(a,b){this.h[a]=b};
lv.prototype.remove=function(a){delete this.h[a]};function mv(){this.mappings=new lv}
mv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
mv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Xb(b)}}return a};
new mv;function nv(a){return function(){return new a}}
;var ov={},pv=(ov.WEB_UNPLUGGED="^unplugged/",ov.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ov.WEB_UNPLUGGED_OPS="^unplugged/",ov.WEB_UNPLUGGED_PUBLIC="^unplugged/",ov.WEB_CREATOR="^creator/",ov.WEB_KIDS="^kids/",ov.WEB_EXPERIMENTS="^experiments/",ov.WEB_MUSIC="^music/",ov.WEB_REMIX="^music/",ov.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ov.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ov);
function qv(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=pv[b];if(c){c=new RegExp(c);for(var d=w(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(pv).forEach(function(g){var h=w(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=w(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function rv(){}
rv.prototype.B=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?xm:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=T("INNERTUBE_CONTEXT");if(g){g=Sb(g);U("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=T("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;Fm();var l="USER_INTERFACE_THEME_LIGHT";Im(165)?l="USER_INTERFACE_THEME_DARK":Im(174)?l="USER_INTERFACE_THEME_LIGHT":!U("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:cv()||l;h.userInterfaceTheme=k;if(!f){if(k=Nm())h.connectionType=k;U("web_log_effective_connection_type")&&(k=Om())&&(g.client.effectiveConnectionType=k)}var m;if(U("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}U("web_gcf_hashes_innertube")&&(k=vp())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=Dl(C.location.href);!U("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},U("kevlar_woffle")&&rm.h&&(n=rm.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=sm(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!U("web_lr_app_quality_killswitch")&&(n=T("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=T("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!U("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var p=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(ea){}p=
void 0}p&&(h.timeZone=p)}(p=T("EXPERIMENTS_TOKEN",""))?h.experimentsToken=p:delete h.experimentsToken;p=Pl();dv.h||(dv.h=new dv);h=dv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:p,consistencyTokenJars:n});!U("web_prequest_context_killswitch")&&(t=T("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);p=Fm();t=Im(58);p=p.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);p&&(g.user.lockedSafetyMode=
!0);U("warm_op_csn_cleanup")?e&&(f=It())&&(g.clientScreenNonce=f):!f&&(f=It())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;jv().setLocationOnInnerTubeContext(g);try{var u=Gl(),z=u.bid;delete u.bid;g.adSignalsInfo={params:[],bid:z};var x=w(Object.entries(u));for(var H=x.next();!H.done;H=x.next()){var G=w(H.value),R=G.next().value,O=G.next().value;u=R;z=O;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:u,value:""+
z})}var da;if(U("add_ifa_to_tvh5_requests")&&((da=g.client)==null?void 0:da.clientName)==="TVHTML5"){var Ca=T("INNERTUBE_CONTEXT");Ca.adSignalsInfo&&(g.adSignalsInfo.advertisingId=Ca.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=Ca.adSignalsInfo.limitAdTracking)}}catch(ea){pt(ea)}x=g}else pt(Error("Error: No InnerTubeContext shell provided in ytconfig.")),x={};x={context:x};if(H=this.i(a)){this.h(x,H,b);var P;
b="/youtubei/v1/"+qv(this.j());(H=(P=ys(a.commandMetadata,Vk))==null?void 0:P.apiUrl)&&(b=H);P=b;(b=T("INNERTUBE_HOST_OVERRIDE"))&&(P=String(b)+String(pc(P)));b={};U("web_api_key_killswitch")&&(b.key=T("INNERTUBE_API_KEY"));U("json_condensed_response")&&(b.prettyPrint="false");P=El(P,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:P,hb:St(P),Pa:x,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}pt(new V("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(rv.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function sv(){}
y(sv,rv);function tv(){}
y(tv,sv);tv.prototype.B=function(){return{input:"/getDatasyncIdsEndpoint",hb:St("/getDatasyncIdsEndpoint","GET"),Pa:{}}};
tv.prototype.j=function(){return[]};
tv.prototype.i=function(){};
tv.prototype.h=function(){};var uv={},vv=(uv.GET_DATASYNC_IDS=nv(tv),uv);function wv(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function xv(){var a=wv();a.info||(a.info={});return a.info}
function yv(a){a=wv(a);a.metadata||(a.metadata={});return a.metadata}
function zv(a){a=wv(a);a.tick||(a.tick={});return a.tick}
function Av(a){a=wv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Bv(a){a=Av(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Cv(a){var b=wv(a).nonce;b||(b=xt(),wv(a).nonce=b);return b}
;function Dv(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Ev(a){a=a||"";var b=E("ytcsi.reference");b||(Dv(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Dv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Fv=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",
X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",
X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",
X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",
X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]=
"LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",
X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]=
"LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]=
"LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",
X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function Gv(a,b){Cp.call(this,1,arguments);this.timer=b}
y(Gv,Cp);var Hv=new Dp("aft-recorded",Gv);var Iv=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Iv);function Jv(){this.h=0}
function Kv(){Jv.h||(Jv.h=new Jv);return Jv.h}
Jv.prototype.tick=function(a,b,c,d){Lv(this,"tick_"+a+"_"+b)||Hn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Jv.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Lv(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Hn("latencyActionInfo",a,{cttAuthInfo:c}))};
Jv.prototype.jspbInfo=function(){};
Jv.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Lv(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Hn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Lv(a,b){Iv[b]=Iv[b]||{count:0};var c=Iv[b];c.count++;c.time=W();a.h||(a.h=Sm(function(){var d=W(),e;for(e in Iv)Iv[e]&&d-Iv[e].time>6E4&&delete Iv[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||qt(c)),!0):!1}
;var Mv=window;function Nv(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ov(){var a;if(U("csi_use_performance_navigation_timing")||U("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Pv(e.requestStart),e.responseEnd=Pv(e.responseEnd),e.redirectStart=Pv(e.redirectStart),e.redirectEnd=Pv(e.redirectEnd),e.domainLookupEnd=Pv(e.domainLookupEnd),e.connectStart=Pv(e.connectStart),e.connectEnd=
Pv(e.connectEnd),e.responseStart=Pv(e.responseStart),e.secureConnectionStart=Pv(e.secureConnectionStart),e.domainLookupStart=Pv(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=U("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Pv(a){return Math.round(Qv()+a)}
function Qv(){return(U("csi_use_time_origin")||U("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Mv.performance||Mv.mozPerformance||Mv.msPerformance||Mv.webkitPerformance||new Nv;var Rv=!1,Sv=!1,Tv={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||Cd,Y);function Uv(a,b){if(!U("web_csi_action_sampling_enabled")||!wv(b).actionDisabled){var c=Ev(b||"");Au(c.info,a);a.loadType&&(c=a.loadType,yv(b).loadType=c);Au(Bv(b),a);c=Cv(b);b=wv(b).cttAuthInfo;Kv().info(a,c,b)}}
function Vv(){var a,b,c,d;return((d=$r().resolve(new Ur(rp))==null?void 0:(a=sp())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!U("web_csi_action_sampling_enabled")||!wv(c).actionDisabled){var d=Cv(c),e;if(e=U("web_csi_debug_sample_enabled")&&d){($r().resolve(new Ur(rp))==null?0:sp())&&!Sv&&(Sv=!0,Z("gcfl",W(),c));var f,g,h;e=($r().resolve(new Ur(rp))==null?void 0:(f=sp())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Vv();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=f%1E5%e!==0;wv(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Uv(f,c));wv(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||U("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f-=Y.timeOrigin||Y.timing.navigationStart;try{Y.mark(e,{startTime:f})}catch(k){}}e=Ev(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=w(e.callback[a]),f=e.next();!f.done;f=
e.next())f=f.value,f();e=Av(c);e.gelTicks&&(e.gelTicks[a]=!0);f=zv(c);e=b||W();U("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=wv(c).cttAuthInfo;a==="_start"?(a=Kv(),Lv(a,"baseline_"+d)||Hn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Kv().tick(a,d,b,f);Wv(c);return e}}}
function Xv(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=qr+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Yv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=w(Object.entries(T("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=w(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Zv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);$b(window)&&a.setAttribute("nonce",$b(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Qv(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function $v(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Eb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Gb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Pv(b.startTime)),Z("wffe",Pv(b.responseEnd)))}
function aw(a){var b=bw("aft",a);if(b)return b;b=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=bw(b[d],a);if(e)return e}return NaN}
function bw(a,b){if(a=zv(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Wv(a){var b=bw("_start",a),c=aw(a),d=U("enable_cow_info_csi")||!Rv;b&&c&&d&&(Ip(Hv,new Gv(Math.round(c-b),a)),Rv=!0)}
function cw(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Hb(a,function(b){return b.name==="first-paint"}))return Pv(a.startTime)}a=Y.timing;
return a.le?Math.max(0,a.le):0}
;function dw(a,b){tl(function(){Ev("").info.actionType=a;b&&pl("TIMING_AFT_KEYS",b);pl("TIMING_ACTION",a);var c=Yv();Object.keys(c).length>0&&Uv(c);c={isNavigation:!0,actionType:Fv[T("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=T("PREVIOUS_ACTION");d&&(c.previousAction=Fv[d]||"LATENCY_ACTION_UNKNOWN");if(d=T("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=T("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=It())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Xv();if(d===1||d===-1)c.isVisible=!0;yv();xv();
c.loadType="cold";d=xv();var e=Ov(),f=Qv(),g=T("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!U("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=cw();d>0&&Z("fpt",d);d=Ov();d.isPerformanceNavigationTiming&&Uv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Qv()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&$v();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Tv)Tv.hasOwnProperty(h)&&(e=Tv[h],
Zv(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=w(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Uv(c);c=Av();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Bv();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(yv().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=zv();e=Av();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,bw(k));else if(U("log_repeated_ytcsi_ticks"))for(f=
w(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=w(h);for(e=h.next();!e.done;e=h.next())d=e.value,Au(c,d),Au(k,d),d=!0;d&&Uv(k)}D("ytglobal.timingready_",!0);k=T("TIMING_ACTION");E("ytglobal.timingready_")&&k&&ew()&&aw()&&Wv()})()}
function ew(){return tl(function(){return fw()})()}
function gw(a,b,c){tl(Uv)(a,b,c===void 0?!1:c)}
function hw(a,b,c){return tl(Z)(a,b,c)}
function fw(){return tl(function(){return"_start"in zv()})()}
function iw(){tl(function(){var a=Cv();requestAnimationFrame(function(){setTimeout(function(){a===Cv()&&hw("ol",void 0,void 0)},0)})})()}
var jw=window;jw.ytcsi&&(jw.ytcsi.infoGel=gw,jw.ytcsi.tick=hw);var kw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),lw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function mw(a,b,c,d){this.B=a;this.fa=b;this.m=c;this.j=d;this.i=void 0;this.h=new Map;a.Ob||(a.Ob={});a.Ob=Object.assign({},vv,a.Ob)}
function nw(a,b,c,d){if(mw.h!==void 0){if(d=mw.h,a=[a!==d.B,b!==d.fa,c!==d.m,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else mw.h=new mw(a,b,c,d)}
function ow(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?xm:c;var d=pw(a,b);return d?new Vd(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.B(b,void 0,c);if(!h){f(new V("Error: Failed to build request for command.",b));n.D(0);break}Zu(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.m.Qe){var p=h.config,t;p=p==null?void 0:(t=p.Tb)==null?void 0:t.sessionIndex;t=wm(0,{sessionIndex:p});m=Object.assign({},
kv(l),t);n.D(4);break}return n.yield(qw(h.config,l),5);case 5:m=n.i;case 4:e(rw(a,h,m)),n.h=0}})}):$d(new V("Error: No request builder found for command.",b))}
function sw(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=w(kw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function rw(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,u,z,x,H,G,R,O,da,Ca,P,ea,ja,oa,Ma,Qg,Rg,rr,sr,tr;return A(function(ha){switch(ha.h){case 1:ha.D(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Pa)==null?0:g.context)){ha.D(4);break}h=b.Pa.context;ha.D(5);break;case 5:k=w([]),l=k.next();case 8:if(l.done){ha.D(4);break}m=l.value;return ha.yield(m.Rg(h),9);case 9:l=k.next();ha.D(8);break;case 4:if((n=a.i)==null||!n.Wg(b.input,b.Pa)){ha.D(12);break}return ha.yield(a.i.Ng(b.input,
b.Pa),13);case 13:return p=ha.i,U("kevlar_process_local_innertube_responses_killswitch")||sw(a,p,b),ha.return(p);case 12:return(z=(u=b.config)==null?void 0:u.Ug)&&a.h.has(z)?t=a.h.get(z):(x=JSON.stringify(b.Pa),R=(G=(H=b.hb)==null?void 0:H.headers)!=null?G:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},R,c)}),O=Object.assign({},b.hb),b.hb.method==="POST"&&(O=Object.assign({},O,{body:x})),((da=b.config)==null?0:da.ue)&&hw(b.config.ue),Ca=function(){return a.fa.fetch(b.input,O,b.config)},t=
Ca(),z&&a.h.set(z,t)),ha.yield(t,14);
case 14:if((P=ha.i)&&"error"in P&&((ea=P)==null?0:(ja=ea.error)==null?0:ja.details))for(oa=P.error.details,Ma=w(oa),Qg=Ma.next();!Qg.done;Qg=Ma.next())Rg=Qg.value,(rr=Rg["@type"])&&lw.indexOf(rr)>-1&&(delete Rg["@type"],P=Rg);z&&a.h.has(z)&&a.h.delete(z);((sr=b.config)==null?0:sr.we)&&hw(b.config.we);if(P||(tr=a.i)==null||!tr.Fg(b.input,b.Pa)){ha.D(15);break}return ha.yield(a.i.Mg(b.input,b.Pa),16);case 16:P=ha.i;case 15:return sw(a,P,b),d(),ha.return(P||void 0)}})}
function pw(a,b){a:{a=a.B;var c,d=(c=ys(b,Wk))==null?void 0:c.signal;if(d&&a.Ob&&(c=a.Ob[d])){var e=c();break a}var f;if((c=(f=ys(b,Uk))==null?void 0:f.request)&&a.Id&&(f=a.Id[c])){e=f();break a}for(e in b)if(a.Rc[e]&&(b=a.Rc[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function qw(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Tb)==null?void 0:d.sessionIndex;var h=g.yield;var k=wm(0,{sessionIndex:e});if(!(k instanceof Vd)){var l=new Vd(Cd);Wd(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},kv(b),f)))})}
;var tw=new Tr("INNERTUBE_TRANSPORT_TOKEN");function uw(){}
y(uw,sv);uw.prototype.j=function(){return mu};
uw.prototype.i=function(a){return ys(a,gl)||void 0};
uw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(uw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function vw(){}
y(vw,sv);vw.prototype.j=function(){return nu};
vw.prototype.i=function(a){return ys(a,fl)||void 0};
vw.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(vw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});var ww=new Tr("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function xw(a){this.o=a}
y(xw,sv);xw.prototype.j=function(){return hu};
xw.prototype.i=function(a){return ys(a,al)||ys(a,bl)||ys(a,$k)};
xw.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.o)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.o.i(b.clientParamIdentifier)}};
xw[Sr]=[ww];function yw(){}
y(yw,sv);yw.prototype.j=function(){return ju};
yw.prototype.i=function(a){return ys(a,Yk)||void 0};
yw.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(yw.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zw(){}
y(zw,sv);zw.prototype.j=function(){return ku};
zw.prototype.i=function(a){return ys(a,el)||void 0};
zw.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Aw(){}
y(Aw,sv);Aw.prototype.j=function(){return lu};
Aw.prototype.i=function(a){return ys(a,dl)||void 0};
Aw.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Bw(){}
y(Bw,sv);Bw.prototype.j=function(){return iu};
Bw.prototype.i=function(a){return ys(a,cl)};
Bw.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};function Cw(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;V.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
y(Cw,V);var Dw=new Tr("NETWORK_SLI_TOKEN");function Ew(a){this.h=a}
Ew.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=Fw(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){qt(g);
if((c==null?0:c.Od)&&g instanceof Cw&&g.errorType===1)return Promise.reject(g)}))})};
function Fw(a,b,c){if(a.h){var d=mc(nc(5,xc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;U("wug_networking_gzip_request")&&(a=jq(c));return new window.Request(b,a)}
Ew.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){if((b==null?0:b.ee)&&a.ok)return Zg(b.ee,d);d=d.replace(")]}'","");if((b==null?0:b.Od)&&d)try{var e=JSON.parse(d)}catch(g){throw new Cw(1,"JSON parsing failed after fetch");}var f;return(f=e)!=null?f:JSON.parse(d)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ig(),c=c.then(function(d){qt(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Ew[Sr]=[new Ur(Dw)];var Gw=new Tr("NETWORK_MANAGER_TOKEN");var Hw;function Iw(){var a,b,c;return A(function(d){if(d.h==1)return a=$r().resolve(tw),a?d.yield(ow(a),2):(qt(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return qt(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Gg;return d.return(c)}qt(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function Jw(){var a;return(a=T("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var Kw=C.caches,Lw;function Mw(a){var b=a.indexOf(":");return b===-1?{gd:a}:{gd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Nw(){return A(function(a){if(Lw!==void 0)return a.return(Lw);Lw=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Aa(d,2),d.yield(Kw.open("test-only"),4);case 4:return d.yield(Kw.delete("test-only"),5);case 5:d.h=3;d.m=0;break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Lw)})}
function Ow(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Nw(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(Kw.keys(),3)}c=k.i;d=w(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Mw(f),h=g.datasyncId,!h||a.includes(h)||b.push(Kw.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Pw(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Nw(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Qm("cache contains other");return h.yield(Kw.keys(),3)}b=h.i;c=w(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Mw(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Qw(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Rw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Sw(a){if(Qw()){var b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Rw(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Tw(){if(!Qw())return!1;var a=Qm(),b=Object.keys(window.sessionStorage);b=w(b);for(var c=b.next();!c.done;c=b.next())if(c=Rw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Uw(){Iw().then(function(a){a&&(Xo(a),Ow(a),Wu(a),Sw(a))})}
function Vw(){var a=new br;$i.ra(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(U("ytidb_clear_optimizations_killswitch")){g.D(2);break}b=Qm("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Xo(h);Ow(h);Wu(h);Sw(h);return g.return()}c=Xu();d=Tw();return g.yield(Pw(),3);case 3:return e=g.i,g.yield(Yo(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.xa()?Uw():a.h.add("publicytnetworkstatus-online",Uw,!0,void 0,void 0),g.h=0}})})}
;function Ww(){this.state=1;this.h=null}
r=Ww.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=fb(),f=new ac(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=Ok(a.interpreterSafeUrl).toString());Xw(this,d,e,a.program,b,c)}else qt(Error("Cannot initialize botguard without program"))};
function Xw(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,qu(c,function(){window[g]?Yw(a,d,g,e):(a.state=3,su(c),qt(new V("Unable to load Botguard","from "+c)))},f)):b?(f=Hd("SCRIPT"),b instanceof ac?cc(f,b):f.textContent=b,f.nonce=$b(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Yw(a,d,g,e):(a.state=4,qt(new V("Unable to load Botguard from JS")))):qt(new V("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Yw(a,b,c,d){a.state=5;try{var e=new Ki({program:b,Ud:c,se:U("att_web_record_metrics"),Fa:"aGIf"});e.Me.then(function(){a.state=6;d&&d(b)});
a.Hc(e)}catch(f){a.state=7,f instanceof Error&&qt(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.Kc()?this.wd({Sc:a}):null};
r.dispose=function(){this.Hc(null);this.state=8};
r.Kc=function(){return!!this.h};
r.wd=function(a){return this.h.qd(a)};
r.Hc=function(a){Cc(this.h);this.h=a};var Zw=[],$w=!1;function ax(){if(!U("disable_biscotti_fetch_for_ad_blocker_detection")&&!U("disable_biscotti_fetch_entirely_for_all_web_clients")&&Tt()){var a=T("PLAYER_VARS",{});if(Pb(a)!="1"&&!Ut(a)){var b=function(){$w=!0;"google_ad_status"in window?pl("DCLKSTAT",1):pl("DCLKSTAT",2)};
try{qu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Zw.push($i.ra(function(){if(!($w||"google_ad_status"in window)){try{uu("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}$w=!0;pl("DCLKSTAT",3)}},5E3))}}}
function bx(){var a=Number(T("DCLKSTAT",0));return isNaN(a)?0:a}
;function cx(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function dx(){Ww.apply(this,arguments)}
y(dx,Ww);dx.prototype.Hc=function(a){var b;(b=cx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.qd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
dx.prototype.Kc=function(){return!!cx()};
dx.prototype.wd=function(a){return cx().bgvmc(a)};function ex(a){js.call(this,a===void 0?"document_active":a);var b=this;this.m=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.F},{from:"document_active",to:"document_disposed",action:this.B},{from:"document_disposed_preventable",to:"document_disposed",action:this.B},{from:"document_disposed_preventable",to:"flush_logs",action:this.o},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.o},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
y(ex,js);ex.prototype.F=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
ex.prototype.B=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
ex.prototype.o=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
ex.prototype.i=function(){this.h=new Map};function fx(a){js.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.o},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.B},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.o},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.o},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.B},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.B},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
U("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
y(fx,js);fx.prototype.i=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
fx.prototype.h=function(a,b){a(b==null?void 0:b.event);U("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
fx.prototype.B=function(a,b){a(b==null?void 0:b.event)};
fx.prototype.o=function(a,b){a(b==null?void 0:b.event)};function gx(){this.m=new ex;this.B=new fx}
gx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.m.install(c)});
a.forEach(function(c){b.B.install(c)})};function hx(){this.m=[];this.i=new Map;this.h=new Map;this.j=new Set}
hx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=It(c===void 0?0:c)){a=this.client;d=new Bt({trackingParams:d});var e=void 0;if(U("no_client_ve_attach_unless_shown")){var f=Ru(d,c);Nu.set(f,!0);Su(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Qu({cttAuthInfo:Kt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Tu("visualElementGestured",f,d):a?ht("visualElementGestured",d,a,f):Hn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
hx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Bt({trackingParams:a}),b,c===void 0?0:c)};
hx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.m.push([a,b]);else{var d=c;d=d===void 0?0:d;c=It(d);a||(a=(a=Ft(d===void 0?0:d))?new Bt({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Qu({cttAuthInfo:Kt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Tu("visualElementStateChanged",d,b):a?ht("visualElementStateChanged",b,a,d):Hn("visualElementStateChanged",b,d))}};
function ix(a,b){if(b===void 0)for(var c=Ht(),d=0;d<c.length;d++)c[d]!==void 0&&ix(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Pu(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function jx(){gx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));U("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));U("web_log_cfg_cee_ks")||Sm(kx)}
y(jx,gx);jx.prototype.j=function(){Hn("finalPayload",{csn:It()})};
jx.prototype.h=function(){ut(vt)};
jx.prototype.i=function(){var a=ix;hx.h||(hx.h=new hx);a(hx.h)};
function kx(){var a=T("CLIENT_EXPERIMENT_EVENTS");if(a){var b=Ui();a=w(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Hn("genericClientExperimentEvent",{eventType:c});delete ol.CLIENT_EXPERIMENT_EVENTS}}
;function lx(){}
function mx(){var a=E("ytglobal.storage_");a||(a=new lx,D("ytglobal.storage_",a));return a}
lx.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(nx()):d.return()})};
function nx(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",lx);function Fn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Fn.prototype.Ha=function(a){this.handleError(a)};
Fn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":U("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":U("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":ox(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function ox(a,b){mx().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:px(c==null?void 0:c.usage),deviceStorageQuotaMbytes:px(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function px(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var qx={},rx=(qx["api.invalidparam"]=2,qx.auth=150,qx["drm.auth"]=150,qx["heartbeat.net"]=150,qx["heartbeat.servererror"]=150,qx["heartbeat.stop"]=150,qx["html5.unsupportedads"]=5,qx["fmt.noneavailable"]=5,qx["fmt.decode"]=5,qx["fmt.unplayable"]=5,qx["html5.missingapi"]=5,qx["html5.unsupportedlive"]=5,qx["drm.unavailable"]=5,qx["mrm.blocked"]=151,qx["embedder.identity.denied"]=152,qx);var sx=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function tx(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function ux(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=w(sx);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function vx(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function wx(a){F.call(this);var b=this;this.api=a;this.W=this.o=!1;this.v=[];this.K={};this.j=[];this.i=[];this.X=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=U("web_player_split_event_bus_iframe");this.m=T("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.F=function(c){a:if(!(b.m!=="*"&&c.origin!==b.m||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.m=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.o){b.W=!0;b.o=!1;b.sendMessage("initialDelivery",xx(b));b.sendMessage("onReady");e=w(b.v);for(d=e.next();!d.done;d=e.next())yx(b,d.value);b.v=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.X&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.K[e]||e==="onReady"||
(c=zx(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.K[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&tx(e)){var f=d;if(Ra(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=ux(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=ux(g);break;case "loadPlaylist":case "cuePlaylist":g=vx(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);tx(e)&&Ax(b,xx(b))}}}};
Bx.addEventListener("message",this.F);if(a=T("WIDGET_ID"))this.sessionId=a;Cx(this,"onReady",function(){b.o=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.X=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?rx[c]||d:d;b.sendMessage("onError",b.errorCode.toString())}});
Cx(this,"onVideoProgress",this.He.bind(this));Cx(this,"onVolumeChange",this.Ie.bind(this));Cx(this,"onApiChange",this.Ae.bind(this));Cx(this,"onPlaybackQualityChange",this.Ee.bind(this));Cx(this,"onPlaybackRateChange",this.Fe.bind(this));Cx(this,"onStateChange",this.Ge.bind(this));Cx(this,"onWebglSettingsChanged",this.Je.bind(this));Cx(this,"onCaptionsTrackListChanged",this.Be.bind(this));Cx(this,"captionssettingschanged",this.Ce.bind(this))}
y(wx,F);function Ax(a,b){a.sendMessage("infoDelivery",b)}
r=wx.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.W?yx(this,a):this.v.push(a)};
function zx(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function Cx(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function xx(a){if(!a.api)return null;var b=a.api.getApiInterface();Ib(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.Ge=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ax(this,a)};
r.Ee=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());Ax(this,a)};
r.Fe=function(a){Ax(this,{playbackRate:a})};
r.Ae=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.Ie=function(){Ax(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.He=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ax(this,a)};
r.Je=function(){Ax(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.Be=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};Ax(this,a)}};
r.Ce=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};Ax(this,a)}};
function yx(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){qt(d)}}}
r.da=function(){F.prototype.da.call(this);Bx.removeEventListener("message",this.F);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var Bx=window;function Dx(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=U("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ja){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=Ex(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=Fx(g,f))&&Gx(d,g,f))}}}}}};
Hx.addEventListener("message",this.i);Gx(this,"RECEIVING")}
y(Dx,F);r=Dx.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.De.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.De=function(a,b){this.ja||Gx(this,a,Ix(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function Ex(a,b){switch(a){case "loadVideoById":return[ux(b)];case "cueVideoById":return[ux(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[vx(b)];case "cuePlaylist":return[vx(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Fx(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function Ix(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function Gx(a,b,c){a.ja||(b={id:a.id,command:b},c&&(b.data=c),Jx.postMessage(JSON.stringify(b),a.origin))}
r.da=function(){Hx.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.da.call(this)};
var Hx=window,Jx=window.parent;var Kx=new dx;function Lx(){return Kx.Kc()}
function Mx(a){a=a===void 0?{}:a;return Kx.invoke(a)}
;function Nx(a,b,c,d,e){F.call(this);var f=this;this.v=b;this.webPlayerContextConfig=d;this.oc=e;this.Ka=!1;this.api={};this.ia=this.o=null;this.U=new M;this.h={};this.X=this.qa=this.elementId=this.Ab=this.config=null;this.W=!1;this.j=this.F=null;this.za={};this.pc=["onReady"];this.lastError=null;this.Rb=NaN;this.K={};this.ga=0;this.i=this.m=a;Ec(this,this.U);Ox(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Px(this),Qx(this))}
y(Nx,F);r=Nx.prototype;r.getId=function(){return this.v};
r.loadNewVideoConfig=function(a){if(!this.ja){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof gu||(b=new gu(b));this.config=b;this.setConfig(a);Qx(this);this.isReady()&&Rx(this)}};
function Px(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.v,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.v:a.config.attrs.id=a.v);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Ab=a;this.config=Sx(a);Px(this);if(!this.qa){var b;this.qa=Tx(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Si(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Si(Number(a)||a))};
function Rx(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Ux(a){var b=!0,c=Vx(a);c&&a.config&&(b=c.dataset.version===Wx(a));return b&&!!E("yt.player.Application.create")}
function Qx(a){if(!a.ja&&!a.W){var b=Ux(a);if(b&&(Vx(a)?"html5":null)==="html5")a.X="html5",a.isReady()||Xx(a);else if(Yx(a),a.X="html5",b&&a.j&&a.m)a.m.appendChild(a.j),Xx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.F=function(){c=!0;var d=Zx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?Sx(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.oc);Xx(a)};
a.W=!0;b?a.F():(qu(Wx(a),a.F),(b=$x(a))&&xu(b||""),ay(a)&&!c&&D("yt.player.Application.create",null))}}}
function Vx(a){var b=Gd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Xx(a){if(!a.ja){var b=Vx(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.W=!1;if(!Zx(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}by(a)}else a.Rb=setTimeout(function(){Xx(a)},50)}}
function by(a){Ox(a);a.Ka=!0;var b=Vx(a);if(b){a.o=cy(a,b,"addEventListener");a.ia=cy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=cy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.o&&a.o(g,a.h[g]);Rx(a);a.qa&&a.qa(a.api);a.U.kb("onReady",a.api)}
function cy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.v}),e.level="WARNING",e;}}}
function Ox(a){a.Ka=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.K)a.K.hasOwnProperty(c)&&clearTimeout(Number(c));a.K={};a.o=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ab};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Ka};
r.addEventListener=function(a,b){var c=this,d=Tx(this,b);d&&(Cb(this.pc,a)>=0||this.h[a]||(b=dy(this,a),this.o&&this.o(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ja||(b=Tx(this,b))&&this.U.unsubscribe(a,b)};
function Tx(a,b){var c=b;if(typeof b==="string"){if(a.za[b])return a.za[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.za[b]=c}return c?c:null}
function dy(a,b){function c(d){var e=setTimeout(function(){if(!a.ja){try{a.U.kb(b,d!=null?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.v,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.K;var g=String(e);g in f&&delete f[g]}},0);
Ob(a.K,String(e))}
return a.h[b]=c}
r.getPlayerType=function(){return this.X||(Vx(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Yx(a){a.cancel();Ox(a);a.X=null;a.config&&(a.config.loaded=!1);var b=Vx(a);b&&(Ux(a)||!ay(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.F&&uu(Wx(this),this.F);clearTimeout(this.Rb);this.W=!1};
r.da=function(){Yx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.za=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Ab=this.config=this.api=null;delete this.m;delete this.i;F.prototype.da.call(this)};
function ay(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Wx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function $x(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Zx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Sx(a){for(var b={},c=w(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?Rb(e):e}return b}
;var ey={},fy="player_uid_"+(Math.random()*1E9>>>0);function gy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Gd(c):c;var e=fy+"_"+Sa(c),f=ey[e];if(f&&d)return hy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Nx(c,e,a,b,void 0);ey[e]=f;f.addOnDisposeCallback(function(){delete ey[f.getId()]});
return f.api}
function hy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var iy=null,jy=null;
function ky(){iw();var a=Fm(),b=Im(119),c=window.devicePixelRatio>1;if(document.body&&hj(document.body,"exp-invert-logo"))if(c&&!hj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!hj(d,"inverted-hdpi")){var e=fj(d);gj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&hj(document.body,"inverted-hdpi")&&ij();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Jm(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Cm[b]:(c=d.toString(16),Cm[b]=c.toString());
c=!0;U("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Cm)Cm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Cm[f])));var f=d.join("&");ym(b,f,63072E3,a.i,c)}}
function ly(){my()}
function ny(){hw("ep_init_pr");my()}
function my(){var a=iy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function oy(){iy&&iy.sendAbandonmentPing&&iy.sendAbandonmentPing();T("PL_ATT")&&Kx.dispose();for(var a=$i,b=0,c=Zw.length;b<c;b++)a.sa(Zw[b]);Zw.length=0;su("//static.doubleclick.net/instream/ad_status.js");$w=!1;pl("DCLKSTAT",0);Dc(jy);iy&&(iy.removeEventListener("onVideoDataChange",ly),iy.destroy())}
;D("yt.setConfig",pl);D("yt.config.set",pl);D("yt.setMsg",pu);D("yt.msgs.set",pu);D("yt.logging.errors.log",pt);
D("writeEmbed",function(){var a=T("PLAYER_CONFIG");if(!a){var b=T("PLAYER_VARS");b&&(a={args:b})}av(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=T("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);dw("embed",["ol"]);c=Jw();if(!c.serializedForcedExperimentIds){var d=Dl(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&dw("watch",["pbs","pbu","pbp"]);iy=gy(a,c);iy.addEventListener("onVideoDataChange",ly);iy.addEventListener("onReady",ny);a=T("POST_MESSAGE_ID","player");T("ENABLE_JS_API")?jy=new wx(iy):T("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(jy=new Dx(iy,a,b));ax();U("ytidb_create_logger_embed_killswitch")||En();a={};jx.h||(jx.h=new jx);jx.h.install((a.flush_logs={callback:function(){Vs()}},a));
nr();U("ytidb_clear_embedded_player")&&$i.ra(function(){var f,g;if(!Hw){var h=$r();Wr(h,{kc:Gw,td:Ew});var k={Rc:{feedbackEndpoint:nv(yw),modifyChannelNotificationPreferenceEndpoint:nv(zw),playlistEditEndpoint:nv(Aw),shareEntityEndpoint:nv(xw),subscribeEndpoint:nv(uw),unsubscribeEndpoint:nv(vw),webPlayerShareEntityServiceEndpoint:nv(Bw)}},l=jv(),m={};l&&(m.client_location=l);f===void 0&&(f=um());g===void 0&&(g=h.resolve(Gw));nw(k,g,f,m);Wr(h,{kc:tw,ud:mw.h});Hw=h.resolve(tw)}Vw()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Lx);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||Mx);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||bx);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||$u);D("yt.util.activity.init",E("yt.util.activity.init")||Er);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Hr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Fr);window.addEventListener("load",tl(function(){ky()}));
window.addEventListener("pageshow",tl(function(a){a.persisted||ky()}));
window.addEventListener("pagehide",tl(function(a){U("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?oy():a.persisted||oy()}));
window.onerror=function(a,b,c,d,e){b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var f=!1,g=ql("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(g[h].src.indexOf("/debug-")>0){f=!0;break}}f&&(f=!1,e?f=!0:(typeof a==="string"?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?pt(e):qt(e))};
ke=rt;window.addEventListener("unhandledrejection",function(a){rt(a.reason)});
Db(T("ERRORS")||[],function(a){pt.apply(null,a)});
pl("ERRORS",[]);}).call(this);
