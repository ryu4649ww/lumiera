/*! 蒼天のリュミエラ v1.3.0 — uses three.js (MIT License, Copyright © 2010-2026 three.js authors). See THIRD_PARTY_LICENSES.txt */
(()=>{var qd=0,kh=1,Xd=2;var Ra=1,bl=2,mr=3,Hn=0,je=1,Ie=2,Di=0,Gn=1,ii=2,Bh=3,Oh=4,Yd=5;var ds=100,$d=101,Zd=102,jd=103,Jd=104,Kd=200,Qd=201,tf=202,ef=203,Hh=204,Gh=205,nf=206,sf=207,rf=208,af=209,of=210,lf=211,cf=212,hf=213,uf=214,ko=0,Bo=1,Oo=2,Js=3,Ho=4,Go=5,Vo=6,Wo=7,Ml=0,df=1,ff=2,Hi=0,Ca=1,Pa=2,Ia=3,fs=4,La=5,Da=6,Na=7;var Vh=300,Vn=301,ps=302,Sl=303,wl=304,Fa=306,Ks=1e3,Yi=1001,qo=1002,ke=1003,pf=1004;var za=1005;var ei=1006,El=1007;var Wn=1008;var xi=1009,Wh=1010,qh=1011,gr=1012,Tl=1013,Gi=1014,vi=1015,Ve=1016,Al=1017,Rl=1018,xr=1020,Xh=35902,Yh=35899,$h=1021,Zh=1022,yi=1023,ji=1026,qn=1027,vr=1028,Cl=1029,Xn=1030,Pl=1031;var Il=1033,Ua=33776,ka=33777,Ba=33778,Oa=33779,Ll=35840,Dl=35841,Nl=35842,Fl=35843,zl=36196,Ul=37492,kl=37496,Bl=37488,Ol=37489,Ha=37490,Hl=37491,Gl=37808,Vl=37809,Wl=37810,ql=37811,Xl=37812,Yl=37813,$l=37814,Zl=37815,jl=37816,Jl=37817,Kl=37818,Ql=37819,tc=37820,ec=37821,ic=36492,nc=36494,sc=36495,rc=36283,ac=36284,Ga=36285,oc=36286;var Yr=2300,Xo=2301,Fo=2302,Ah=2303,Rh=2400,Ch=2401,Ph=2402;var mf=3200;var yr=0,gf=1,Ni="",Fe="srgb",$r="srgb-linear",Zr="linear",de="srgb";var zo=7680;var xf=519,vf=512,yf=513,_f=514,lc=515,bf=516,Mf=517,cc=518,Sf=519,jh=35044;var Jh="300 es",Oi=2e3,Qs=2001;function v0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function y0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function tr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wf(){let s=tr("canvas");return s.style.display="block",s}var ld={},er=null;function jr(...s){let t="THREE."+s.shift();er?er("log",t,...s):console.log(t,...s)}function Ef(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Ot(...s){s=Ef(s);let t="THREE."+s.shift();if(er)er("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Wt(...s){s=Ef(s);let t="THREE."+s.shift();if(er)er("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function is(...s){let t=s.join(" ");t in ld||(ld[t]=!0,Ot(...s))}function Tf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Af={[ko]:Bo,[Oo]:Vo,[Ho]:Wo,[Js]:Go,[Bo]:ko,[Vo]:Oo,[Wo]:Ho,[Go]:Js},Ji=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cd=1234567,Vr=Math.PI/180,ir=180/Math.PI;function Zi(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function Kh(s,t){return(s%t+t)%t}function _0(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function b0(s,t,e){return s!==t?(e-s)/(t-s):0}function Wr(s,t,e){return(1-e)*s+e*t}function M0(s,t,e,i){return Wr(s,t,1-Math.exp(-e*i))}function S0(s,t=1){return t-Math.abs(Kh(s,t*2)-t)}function w0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function E0(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function T0(s,t){return s+Math.floor(Math.random()*(t-s+1))}function A0(s,t){return s+Math.random()*(t-s)}function R0(s){return s*(.5-Math.random())}function C0(s){s!==void 0&&(cd=s);let t=cd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function P0(s){return s*Vr}function I0(s){return s*ir}function L0(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function D0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function N0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function F0(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),u=r((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*f,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*f,o*c);break;case"ZXZ":s.set(l*f,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*u,o*c);break;case"YXY":s.set(l*u,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*u,o*h,o*c);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Bi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Va={DEG2RAD:Vr,RAD2DEG:ir,generateUUID:Zi,clamp:ie,euclideanModulo:Kh,mapLinear:_0,inverseLerp:b0,lerp:Wr,damp:M0,pingpong:S0,smoothstep:w0,smootherstep:E0,randInt:T0,randFloat:A0,randFloatSpread:R0,seededRandom:C0,degToRad:P0,radToDeg:I0,isPowerOfTwo:L0,ceilPowerOfTwo:D0,floorPowerOfTwo:N0,setQuaternionFromProperEuler:F0,normalize:be,denormalize:Bi},su=class su{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var Q=su,fi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],f=i[n+3],d=r[a+0],u=r[a+1],p=r[a+2],x=r[a+3];if(f!==x||l!==d||c!==u||h!==p){let m=l*d+c*u+h*p+f*x;m<0&&(d=-d,u=-u,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+d*o,c=c*g+u*o,h=h*g+p*o,f=f*g+x*o}else{l=l*g+d*o,c=c*g+u*o,h=h*g+p*o,f=f*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=v,c*=v,h*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],f=r[a],d=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*u-c*d,t[e+1]=l*p+h*d+c*f-o*u,t[e+2]=c*p+h*u+o*d-l*f,t[e+3]=h*p-o*f-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),f=o(r/2),d=l(i/2),u=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"YXZ":this._x=d*h*f+c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"ZXY":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f-d*u*p;break;case"ZYX":this._x=d*h*f-c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f+d*u*p;break;case"YZX":this._x=d*h*f+c*u*p,this._y=c*u*f+d*h*p,this._z=c*h*p-d*u*f,this._w=c*h*f-d*u*p;break;case"XZY":this._x=d*h*f-c*u*p,this._y=c*u*f-d*h*p,this._z=c*h*p+d*u*f,this._w=c*h*f+d*u*p;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-n)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(n+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-c)/u,this._x=(n+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-n)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=n+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return eh.copy(this).projectOnVector(t),this.sub(eh)}reflect(t){return this.sub(eh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var R=ru,eh=new R,hd=new fi,au=class au{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],b=n[4],y=n[7],M=n[2],w=n[5],A=n[8];return r[0]=a*x+o*v+l*M,r[3]=a*m+o*b+l*w,r[6]=a*g+o*y+l*A,r[1]=c*x+h*v+f*M,r[4]=c*m+h*b+f*w,r[7]=c*g+h*y+f*A,r[2]=d*x+u*v+p*M,r[5]=d*m+u*b+p*w,r[8]=d*g+u*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,p=e*f+i*d+n*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=f*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=u*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return is("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ih.makeScale(t,e)),this}rotate(t){return is("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ih.makeRotation(-t)),this}translate(t,e){return is("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ih.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var Zt=au,ih=new Zt,ud=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){let s={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(n.r=xn(n.r),n.g=xn(n.g),n.b=xn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?Zr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return is("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return is("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[$r]:{primaries:t,whitePoint:i,transfer:Zr,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:i,transfer:de,toXYZ:ud,fromXYZ:dd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),s}var ne=z0();function xn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Is,Yo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Is===void 0&&(Is=tr("canvas")),Is.width=t.width,Is.height=t.height;let n=Is.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=tr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xn(e[i]/255)*255):e[i]=xn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},U0=0,nr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(nh(n[a].image)):r.push(nh(n[a]))}else r=nh(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function nh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var k0=0,sh=new R,ai=class s extends Ji{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=Yi,n=Yi,r=ei,a=Wn,o=yi,l=xi,c=s.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k0++}),this.uuid=Zi(),this.name="",this.source=new nr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ks:t.x=t.x-Math.floor(t.x);break;case Yi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ks:t.y=t.y-Math.floor(t.y);break;case Yi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=Vh;ai.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(u+1)/2,M=(g+1)/2,w=(h+d)/4,A=(f+x)/4,_=(p+m)/4;return b>y&&b>M?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=w/i,r=A/i):y>M?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=w/n,r=_/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=A/r,n=_/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((c+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var we=ou,$o=class extends Ji{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new ai(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new nr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pe=class extends $o{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Jr=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends ai{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _l=class _l{constructor(t,e,i,n,r,a,o,l,c,h,f,d,u,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,f,d,u,p,x,m)}set(t,e,i,n,r,a,o,l,c,h,f,d,u,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _l().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),a=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=u+p*c,e[5]=d-x*c,e[9]=-o*l,e[2]=x-d*c,e[6]=p+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,u=l*f,p=c*h,x=c*f;e[0]=d+x*o,e[4]=p*o-u,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-p,e[6]=x+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,u=l*f,p=c*h,x=c*f;e[0]=d-x*o,e[4]=-a*f,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*h,e[9]=x-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,u=a*f,p=o*h,x=o*f;e[0]=l*h,e[4]=p*c-u,e[8]=d*c+x,e[1]=l*f,e[5]=x*c+d,e[9]=u*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-d*f,e[8]=p*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=u*f+p,e[10]=d-x*f}else if(t.order==="XZY"){let d=a*l,u=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=d*f+x,e[5]=a*h,e[9]=u*f-p,e[2]=p*f-u,e[6]=o*h,e[10]=x*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B0,t,O0)}lookAt(t,e,i){let n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Pn.crossVectors(i,_i),Pn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Pn.crossVectors(i,_i)),Pn.normalize(),ro.crossVectors(_i,Pn),n[0]=Pn.x,n[4]=ro.x,n[8]=_i.x,n[1]=Pn.y,n[5]=ro.y,n[9]=_i.y,n[2]=Pn.z,n[6]=ro.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],b=i[7],y=i[11],M=i[15],w=n[0],A=n[4],_=n[8],T=n[12],P=n[1],I=n[5],N=n[9],U=n[13],D=n[2],B=n[6],q=n[10],X=n[14],st=n[3],G=n[7],Y=n[11],$=n[15];return r[0]=a*w+o*P+l*D+c*st,r[4]=a*A+o*I+l*B+c*G,r[8]=a*_+o*N+l*q+c*Y,r[12]=a*T+o*U+l*X+c*$,r[1]=h*w+f*P+d*D+u*st,r[5]=h*A+f*I+d*B+u*G,r[9]=h*_+f*N+d*q+u*Y,r[13]=h*T+f*U+d*X+u*$,r[2]=p*w+x*P+m*D+g*st,r[6]=p*A+x*I+m*B+g*G,r[10]=p*_+x*N+m*q+g*Y,r[14]=p*T+x*U+m*X+g*$,r[3]=v*w+b*P+y*D+M*st,r[7]=v*A+b*I+y*B+M*G,r[11]=v*_+b*N+y*q+M*Y,r[15]=v*T+b*U+y*X+M*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],d=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*u-c*d,b=o*u-c*f,y=o*d-l*f,M=a*u-c*h,w=a*d-l*h,A=a*f-o*h;return e*(x*v-m*b+g*y)-i*(p*v-m*M+g*w)+n*(p*b-x*M+g*A)-r*(p*y-x*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],d=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*o-i*a,b=e*l-n*a,y=e*c-r*a,M=i*l-n*o,w=i*c-r*o,A=n*c-r*l,_=h*x-f*p,T=h*m-d*p,P=h*g-u*p,I=f*m-d*x,N=f*g-u*x,U=d*g-u*m,D=v*U-b*N+y*I+M*P-w*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/D;return t[0]=(o*U-l*N+c*I)*B,t[1]=(n*N-i*U-r*I)*B,t[2]=(x*A-m*w+g*M)*B,t[3]=(d*w-f*A-u*M)*B,t[4]=(l*P-a*U-c*T)*B,t[5]=(e*U-n*P+r*T)*B,t[6]=(m*y-p*A-g*b)*B,t[7]=(h*A-d*y+u*b)*B,t[8]=(a*N-o*P+c*_)*B,t[9]=(i*P-e*N-r*_)*B,t[10]=(p*w-x*y+g*v)*B,t[11]=(f*y-h*w-u*v)*B,t[12]=(o*T-a*I-l*_)*B,t[13]=(e*I-i*T+n*_)*B,t[14]=(x*b-p*M-m*v)*B,t[15]=(h*M-f*b+d*v)*B,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,p=r*f,x=a*h,m=a*f,g=o*f,v=l*c,b=l*h,y=l*f,M=i.x,w=i.y,A=i.z;return n[0]=(1-(x+g))*M,n[1]=(u+y)*M,n[2]=(p-b)*M,n[3]=0,n[4]=(u-y)*w,n[5]=(1-(d+g))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(p+b)*A,n[9]=(m-v)*A,n[10]=(1-(d+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Ls.set(n[0],n[1],n[2]).length(),o=Ls.set(n[4],n[5],n[6]).length(),l=Ls.set(n[8],n[9],n[10]).length();r<0&&(a=-a),zi.copy(this);let c=1/a,h=1/o,f=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=f,zi.elements[9]*=f,zi.elements[10]*=f,e.setFromRotationMatrix(zi),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Oi,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-n),d=(e+t)/(e-t),u=(i+n)/(i-n),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Oi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Oi,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-n),d=-(e+t)/(e-t),u=-(i+n)/(i-n),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Oi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===Qs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};_l.prototype.isMatrix4=!0;var he=_l,Ls=new R,zi=new he,B0=new R(0,0,0),O0=new R(1,1,1),Pn=new R,ro=new R,_i=new R,fd=new he,pd=new fi,mi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],f=n[2],d=n[6],u=n[10];switch(e){case"XYZ":this._y=Math.asin(ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pd.setFromEuler(this),this.setFromQuaternion(pd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mi.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},H0=0,md=new R,Ds=new fi,un=new he,ao=new R,Lr=new R,G0=new R,V0=new fi,gd=new R(1,0,0),xd=new R(0,1,0),vd=new R(0,0,1),yd={type:"added"},W0={type:"removed"},Ns={type:"childadded",child:null},rh={type:"childremoved",child:null},He=class s extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new mi,i=new fi,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new Zt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(gd,t)}rotateY(t){return this.rotateOnAxis(xd,t)}rotateZ(t){return this.rotateOnAxis(vd,t)}translateOnAxis(t,e){return md.copy(t).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gd,t)}translateY(t){return this.translateOnAxis(xd,t)}translateZ(t){return this.translateOnAxis(vd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ao.copy(t):ao.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Lr,ao,this.up):un.lookAt(ao,Lr,this.up),this.quaternion.setFromRotationMatrix(un),n&&(un.extractRotation(n.matrixWorld),Ds.setFromRotationMatrix(un),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yd),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(W0),rh.child=t,this.dispatchEvent(rh),rh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),un.multiply(t.parent.matrixWorld)),t.applyMatrix4(un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yd),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,t,G0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,V0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};He.DEFAULT_UP=new R(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var pe=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},q0={type:"move"},sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,p=.005;c.inputState.pinching&&d>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new pe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},In={h:0,s:0,l:0},oo={h:0,s:0,l:0};function ah(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ct=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ne.workingColorSpace){if(t=Kh(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ah(a,r,t+1/3),this.g=ah(a,r,t),this.b=ah(a,r,t-1/3)}return ne.colorSpaceToWorking(this,n),this}setStyle(t,e=Fe){function i(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let i=Rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return ne.workingToColorSpace(ri.copy(this),t),Math.round(ie(ri.r*255,0,255))*65536+Math.round(ie(ri.g*255,0,255))*256+Math.round(ie(ri.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(ri.copy(this),e);let i=ri.r,n=ri.g,r=ri.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(n-r)/f+(n<r?6:0);break;case n:l=(r-i)/f+2;break;case r:l=(i-n)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=Fe){ne.workingToColorSpace(ri.copy(this),t);let e=ri.r,i=ri.g,n=ri.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(In),this.setHSL(In.h+t,In.s+e,In.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(In),t.getHSL(oo);let i=Wr(In.h,oo.h,e),n=Wr(In.s,oo.s,e),r=Wr(In.l,oo.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new ct;ct.NAMES=Rf;var Qr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ct(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ns=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ui=new R,dn=new R,oh=new R,fn=new R,Fs=new R,zs=new R,_d=new R,lh=new R,ch=new R,hh=new R,uh=new we,dh=new we,fh=new we,gn=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Ui.subVectors(t,e),n.cross(Ui);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Ui.subVectors(n,e),dn.subVectors(i,e),oh.subVectors(t,e);let a=Ui.dot(Ui),o=Ui.dot(dn),l=Ui.dot(oh),c=dn.dot(dn),h=dn.dot(oh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,p=(a*h-o*l)*d;return r.set(1-u-p,p,u)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(t,e),dh.fromBufferAttribute(t,i),fh.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(uh,r.x),a.addScaledVector(dh,r.y),a.addScaledVector(fh,r.z),a}static isFrontFacing(t,e,i,n){return Ui.subVectors(i,e),dn.subVectors(t,e),Ui.cross(dn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ui.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Fs.subVectors(n,i),zs.subVectors(r,i),lh.subVectors(t,i);let l=Fs.dot(lh),c=zs.dot(lh);if(l<=0&&c<=0)return e.copy(i);ch.subVectors(t,n);let h=Fs.dot(ch),f=zs.dot(ch);if(h>=0&&f<=h)return e.copy(n);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Fs,a);hh.subVectors(t,r);let u=Fs.dot(hh),p=zs.dot(hh);if(p>=0&&u<=p)return e.copy(r);let x=u*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(zs,o);let m=h*p-u*f;if(m<=0&&f-h>=0&&u-p>=0)return _d.subVectors(r,n),o=(f-h)/(f-h+(u-p)),e.copy(n).addScaledVector(_d,o);let g=1/(m+x+d);return a=x*g,o=d*g,e.copy(i).addScaledVector(Fs,a).addScaledVector(zs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ki=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dr),co.subVectors(this.max,Dr),Us.subVectors(t.a,Dr),ks.subVectors(t.b,Dr),Bs.subVectors(t.c,Dr),Ln.subVectors(ks,Us),Dn.subVectors(Bs,ks),Kn.subVectors(Us,Bs);let e=[0,-Ln.z,Ln.y,0,-Dn.z,Dn.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,Dn.z,0,-Dn.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-Dn.y,Dn.x,0,-Kn.y,Kn.x,0];return!ph(e,Us,ks,Bs,co)||(e=[1,0,0,0,1,0,0,0,1],!ph(e,Us,ks,Bs,co))?!1:(ho.crossVectors(Ln,Dn),e=[ho.x,ho.y,ho.z],ph(e,Us,ks,Bs,co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},pn=[new R,new R,new R,new R,new R,new R,new R,new R],ki=new R,lo=new Ki,Us=new R,ks=new R,Bs=new R,Ln=new R,Dn=new R,Kn=new R,Dr=new R,co=new R,ho=new R,Qn=new R;function ph(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Qn.fromArray(s,r);let o=n.x*Math.abs(Qn.x)+n.y*Math.abs(Qn.y)+n.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=i.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Xe=new R,uo=new Q,X0=0,fe=class extends Ji{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=jh,this.updateRanges=[],this.gpuType=vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ta=class extends fe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ea=class extends fe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Lt=class extends fe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Y0=new Ki,Nr=new R,mh=new R,Li=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Y0.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);let e=Nr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Nr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(mh)),this.expandByPoint(Nr.copy(t.center).sub(mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$0=0,Ii=new he,gh=new He,Os=new R,bi=new Ki,Fr=new Ki,Qe=new R,Qt=class s extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(v0(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,i){return Ii.makeTranslation(t,e,i),this.applyMatrix4(Ii),this}scale(t,e,i){return Ii.makeScale(t,e,i),this.applyMatrix4(Ii),this}lookAt(t){return gh.lookAt(t),gh.updateMatrix(),this.applyMatrix4(gh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ki);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Qe.addVectors(bi.min,Fr.min),bi.expandByPoint(Qe),Qe.addVectors(bi.max,Fr.max),bi.expandByPoint(Qe)):(bi.expandByPoint(Fr.min),bi.expandByPoint(Fr.max))}bi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)Qe.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Qe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Qe.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(t,c),Qe.add(Os)),n=Math.max(n,i.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new fe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,f=new R,d=new Q,u=new Q,p=new Q,x=new R,m=new R;function g(_,T,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,P),d.fromBufferAttribute(r,_),u.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),h.sub(c),f.sub(c),u.sub(d),p.sub(d);let I=1/(u.x*p.y-p.x*u.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(f,-u.y).multiplyScalar(I),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(I),o[_].add(x),o[T].add(x),o[P].add(x),l[_].add(m),l[T].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,N=P.count;for(let U=I,D=I+N;U<D;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let b=new R,y=new R,M=new R,w=new R;function A(_){M.fromBufferAttribute(n,_),w.copy(M);let T=o[_];b.copy(T),b.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(w,T);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,I)}for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,N=P.count;for(let U=I,D=I+N;U<D;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let n=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,f=new R;if(t)for(let d=0,u=t.count;d<u;d+=3){let p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(n,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?u=l[x]*o.data.stride+o.offset:u=l[x]*h;for(let g=0;g<h;g++)d[p++]=c[u++]}return new fe(d,h,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=t(d,i);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ia=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jh,this.updateRanges=[],this.version=0,this.uuid=Zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},di=new R,rr=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Bi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),n=be(n,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xh=new R,Z0=new R,j0=new Zt,Mi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=xh.subVectors(i,e).cross(Z0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(xh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||j0.getNormalMatrix(t),n=this.coplanarPoint(xh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},J0=0,Si=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=Gn,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Gh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Mi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Q().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Q().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vn=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hs,zr=new R,Gs=new R,Vs=new R,Ws=new Q,Ur=new Q,Cf=new he,fo=new R,kr=new R,po=new R,bd=new Q,vh=new Q,Md=new Q,Fn=class extends He{constructor(t=new vn){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new Qt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ia(e,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new rr(i,3,0,!1)),Hs.setAttribute("uv",new rr(i,2,3,!1))}this.geometry=Hs,this.material=t,this.center=new Q(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gs.setFromMatrixScale(this.matrixWorld),Cf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gs.multiplyScalar(-Vs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;mo(fo.set(-.5,-.5,0),Vs,a,Gs,n,r),mo(kr.set(.5,-.5,0),Vs,a,Gs,n,r),mo(po.set(.5,.5,0),Vs,a,Gs,n,r),bd.set(0,0),vh.set(1,0),Md.set(1,1);let o=t.ray.intersectTriangle(fo,kr,po,!1,zr);if(o===null&&(mo(kr.set(-.5,.5,0),Vs,a,Gs,n,r),vh.set(0,1),o=t.ray.intersectTriangle(fo,po,kr,!1,zr),o===null))return;let l=t.ray.origin.distanceTo(zr);l<t.near||l>t.far||e.push({distance:l,point:zr.clone(),uv:gn.getInterpolation(zr,fo,kr,po,bd,vh,Md,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(s,t,e,i,n,r){Ws.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Ur.x=r*Ws.x-n*Ws.y,Ur.y=n*Ws.x+r*Ws.y):Ur.copy(Ws),s.copy(t),s.x+=Ur.x,s.y+=Ur.y,s.applyMatrix4(Cf)}var mn=new R,yh=new R,go=new R,xo=new R,ar=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){yh.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(yh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(go),o=xo.dot(this.direction),l=-xo.dot(go),c=xo.lengthSq(),h=Math.abs(1-a*a),f,d,u,p;if(h>0)if(f=a*l-o,d=a*o-l,p=r*h,f>=0)if(d>=-p)if(d<=p){let x=1/h;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-p?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=p?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),n&&n.copy(yh).addScaledVector(go,d),u}intersectSphere(t,e){if(t.radius<0)return null;mn.subVectors(t.center,this.origin);let i=mn.dot(this.direction),n=mn.dot(mn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,v=i.y-a.y,b=i.z-a.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(h),A,_,T,P,I,N,U,D,B,q,X,st;if(y>=M&&y>=w?(T=l,N=f,B=p,st=g,l>=0?(A=c,_=h,P=d,I=u,U=x,D=m,q=v,X=b):(A=h,_=c,P=u,I=d,U=m,D=x,q=b,X=v)):M>=w?(T=c,N=d,B=x,st=v,c>=0?(A=h,_=l,P=u,I=f,U=m,D=p,q=b,X=g):(A=l,_=h,P=f,I=u,U=p,D=m,q=g,X=b)):(T=h,N=u,B=m,st=b,h>=0?(A=l,_=c,P=f,I=d,U=p,D=x,q=g,X=v):(A=c,_=l,P=d,I=f,U=x,D=p,q=v,X=g)),T===0)return null;let G=A/T,Y=_/T,$=1/T,At=P-G*N,pt=I-Y*N,Xt=U-G*B,Bt=D-Y*B,ce=q-G*st,J=X-Y*st,et=ce*Bt-J*Xt,bt=At*J-pt*ce,qt=Xt*pt-Bt*At;if(n){if(et<0||bt<0||qt<0)return null}else if((et<0||bt<0||qt<0)&&(et>0||bt>0||qt>0))return null;let Et=et+bt+qt;if(Et===0)return null;let Yt=$*(et*N+bt*B+qt*st);return(Et>0?Yt<0:Yt>0)?null:this.at(Yt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sd=new he,ts=new ar,vo=new Li,wd=new R,yo=new R,_o=new R,bo=new R,_h=new R,Mo=new R,Ed=new R,So=new R,nt=class extends He{constructor(t=new Qt,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(_h.fromBufferAttribute(f,t),a?Mo.addScaledVector(_h,h):Mo.addScaledVector(_h.sub(e),h))}e.add(Mo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(vo.containsPoint(ts.origin)===!1&&(ts.intersectSphere(vo,wd)===null||ts.origin.distanceToSquared(wd)>(t.far-t.near)**2))&&(Sd.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,M=b;y<M;y+=3){let w=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);n=wo(this,g,t,i,c,h,f,w,A,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);n=wo(this,a,t,i,c,h,f,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=d.length;p<x;p++){let m=d[p],g=a[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,M=b;y<M;y+=3){let w=y,A=y+1,_=y+2;n=wo(this,g,t,i,c,h,f,w,A,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){let v=m,b=m+1,y=m+2;n=wo(this,a,t,i,c,h,f,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function K0(s,t,e,i,n,r,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Hn,o),l===null)return null;So.copy(o),So.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(So);return c<e.near||c>e.far?null:{distance:c,point:So.clone(),object:s}}function wo(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,yo),s.getVertexPosition(l,_o),s.getVertexPosition(c,bo);let h=K0(s,t,e,i,yo,_o,bo,Ed);if(h){let f=new R;gn.getBarycoord(Ed,yo,_o,bo,f),n&&(h.uv=gn.getInterpolatedAttribute(n,o,l,c,f,new Q)),r&&(h.uv1=gn.getInterpolatedAttribute(r,o,l,c,f,new Q)),a&&(h.normal=gn.getInterpolatedAttribute(a,o,l,c,f,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new R,materialIndex:0};gn.getNormal(yo,_o,bo,d.normal),h.face=d,h.barycoord=f}return h}var yn=class extends ai{constructor(t=null,e=1,i=1,n,r,a,o,l,c=ke,h=ke,f,d){super(null,a,o,l,c,h,n,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class extends fe{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qs=new he,Td=new he,Eo=[],Ad=new Ki,Q0=new he,Br=new nt,Or=new Li,ss=class extends nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _n(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Q0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ki),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qs),Ad.copy(t.boundingBox).applyMatrix4(qs),this.boundingBox.union(Ad)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,qs),Or.copy(t.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Br.geometry=this.geometry,Br.material=this.material,Br.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),t.ray.intersectsSphere(Or)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,qs),Td.multiplyMatrices(i,qs),Br.matrixWorld=Td,Br.raycast(t,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new _n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new yn(new Float32Array(n*this.count),n,this.count,vr,vi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new Li,tm=new Q(.5,.5),To=new R,or=class{constructor(t=new Mi,e=new Mi,i=new Mi,n=new Mi,r=new Mi,a=new Mi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Oi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],b=r[13],y=r[14],M=r[15];if(n[0].setComponents(c-a,u-h,g-p,M-v).normalize(),n[1].setComponents(c+a,u+h,g+p,M+v).normalize(),n[2].setComponents(c+o,u+f,g+x,M+b).normalize(),n[3].setComponents(c-o,u-f,g-x,M-b).normalize(),i)n[4].setComponents(l,d,m,y).normalize(),n[5].setComponents(c-l,u-d,g-m,M-y).normalize();else if(n[4].setComponents(c-l,u-d,g-m,M-y).normalize(),e===Oi)n[5].setComponents(c+l,u+d,g+m,M+y).normalize();else if(e===Qs)n[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=tm.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(To.x=n.normal.x>0?t.max.x:t.min.x,To.y=n.normal.y>0?t.max.y:t.min.y,To.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var lr=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},jo=new R,Jo=new R,Rd=new he,Hr=new ar,Ao=new Li,bh=new R,Cd=new R,na=class extends He{constructor(t=new Qt,e=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)jo.fromBufferAttribute(e,n-1),Jo.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=jo.distanceTo(Jo);t.setAttribute("lineDistance",new Lt(i,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(n),Ao.radius+=r,t.ray.intersectsSphere(Ao)===!1)return;Rd.copy(n).invert(),Hr.copy(t.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),b=Ro(this,t,Hr,l,g,v,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(u),g=Ro(this,t,Hr,l,x,m,p-1);g&&e.push(g)}}else{let u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let x=u,m=p-1;x<m;x+=c){let g=Ro(this,t,Hr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=Ro(this,t,Hr,l,p-1,u,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ro(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(jo.fromBufferAttribute(o,n),Jo.fromBufferAttribute(o,r),e.distanceSqToSegment(jo,Jo,bh,Cd)>i)return;bh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(bh);if(!(c<t.near||c>t.far))return{distance:c,point:Cd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Ko=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Pd=new he,Ih=new ar,Co=new Li,Po=new R,sa=class extends He{constructor(t=new Qt,e=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(n),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;Pd.copy(n).invert(),Ih.copy(t.ray).applyMatrix4(Pd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let p=d,x=u;p<x;p++){let m=c.getX(p);Po.fromBufferAttribute(f,m),Id(Po,m,l,n,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let p=d,x=u;p<x;p++)Po.fromBufferAttribute(f,p),Id(Po,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Id(s,t,e,i,n,r,a){let o=Ih.distanceSqToPoint(s);if(o<e){let l=new R;Ih.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var ra=class extends ai{constructor(t=[],e=Vn,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rs=class extends ai{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class extends ai{constructor(t,e,i=Gi,n,r,a,o=ke,l=ke,c,h=ji,f=1){if(h!==ji&&h!==qn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new nr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qo=class extends zn{constructor(t,e=Gi,i=Vn,n,r,a=ke,o=ke,l,c=ji){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},aa=class extends ai{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ze=class s extends Qt{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2));function p(x,m,g,v,b,y,M,w,A,_,T){let P=y/A,I=M/_,N=y/2,U=M/2,D=w/2,B=A+1,q=_+1,X=0,st=0,G=new R;for(let Y=0;Y<q;Y++){let $=Y*I-U;for(let At=0;At<B;At++){let pt=At*P-N;G[x]=pt*v,G[m]=$*b,G[g]=D,c.push(G.x,G.y,G.z),G[x]=0,G[m]=0,G[g]=w>0?1:-1,h.push(G.x,G.y,G.z),f.push(At/A),f.push(1-Y/_),X+=1}}for(let Y=0;Y<_;Y++)for(let $=0;$<A;$++){let At=d+$+B*Y,pt=d+$+B*(Y+1),Xt=d+($+1)+B*(Y+1),Bt=d+($+1)+B*Y;l.push(At,pt,Bt),l.push(pt,Xt,Bt),st+=6}o.addGroup(u,st,T),u+=st,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},as=class s extends Qt{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,f=Math.PI/2*t,d=e,u=2*f+d,p=i*2+r,x=n+1,m=new R,g=new R;for(let v=0;v<=p;v++){let b=0,y=0,M=0,w=0;if(v<=i){let T=v/i,P=T*Math.PI/2;y=-h-t*Math.cos(P),M=t*Math.sin(P),w=-t*Math.cos(P),b=T*f}else if(v<=i+r){let T=(v-i)/r;y=-h+T*e,M=t,w=0,b=f+T*d}else{let T=(v-i-r)/i,P=T*Math.PI/2;y=h+t*Math.sin(P),M=t*Math.cos(P),w=t*Math.sin(P),b=f+d+T*f}let A=Math.max(0,Math.min(1,b/u)),_=0;v===0?_=.5/n:v===p&&(_=-.5/n);for(let T=0;T<=n;T++){let P=T/n,I=P*Math.PI*2,N=Math.sin(I),U=Math.cos(I);g.x=-M*U,g.y=y,g.z=M*N,o.push(g.x,g.y,g.z),m.set(-M*U,w,M*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,A)}if(v>0){let T=(v-1)*x;for(let P=0;P<n;P++){let I=T+P,N=T+P+1,U=v*x+P,D=v*x+P+1;a.push(I,N,U),a.push(N,D,U)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},oa=class s extends Qt{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new Q;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=i+f/e*n;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vt=class s extends Qt{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],f=[],d=[],u=[],p=0,x=[],m=i/2,g=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(u,2));function v(){let y=new R,M=new R,w=0,A=(e-t)/i;for(let _=0;_<=r;_++){let T=[],P=_/r,I=P*(e-t)+t;for(let N=0;N<=n;N++){let U=N/n,D=U*l+o,B=Math.sin(D),q=Math.cos(D);M.x=I*B,M.y=-P*i+m,M.z=I*q,f.push(M.x,M.y,M.z),y.set(B,A,q).normalize(),d.push(y.x,y.y,y.z),u.push(U,1-P),T.push(p++)}x.push(T)}for(let _=0;_<n;_++)for(let T=0;T<r;T++){let P=x[T][_],I=x[T+1][_],N=x[T+1][_+1],U=x[T][_+1];(t>0||T!==0)&&(h.push(P,I,U),w+=3),(e>0||T!==r-1)&&(h.push(I,N,U),w+=3)}c.addGroup(g,w,0),g+=w}function b(y){let M=p,w=new Q,A=new R,_=0,T=y===!0?t:e,P=y===!0?1:-1;for(let N=1;N<=n;N++)f.push(0,m*P,0),d.push(0,P,0),u.push(.5,.5),p++;let I=p;for(let N=0;N<=n;N++){let D=N/n*l+o,B=Math.cos(D),q=Math.sin(D);A.x=T*q,A.y=m*P,A.z=T*B,f.push(A.x,A.y,A.z),d.push(0,P,0),w.x=B*.5+.5,w.y=q*.5*P+.5,u.push(w.x,w.y),p++}for(let N=0;N<n;N++){let U=M+N,D=I+N;y===!0?h.push(D,D+1,U):h.push(D+1,D,U),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ge=class s extends Vt{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},cr=class s extends Qt{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new R,y=new R,M=new R;for(let w=0;w<e.length;w+=3)u(e[w+0],b),u(e[w+1],y),u(e[w+2],M),l(b,y,M,v)}function l(v,b,y,M){let w=M+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=v.clone().lerp(y,_/w),P=b.clone().lerp(y,_/w),I=w-_;for(let N=0;N<=I;N++)N===0&&_===w?A[_][N]=T:A[_][N]=T.clone().lerp(P,N/I)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let P=Math.floor(T/2);T%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function c(v){let b=new R;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let v=new R;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=m(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;a.push(y,1-M)}p(),f()}function f(){for(let v=0;v<a.length;v+=6){let b=a[v+0],y=a[v+2],M=a[v+4],w=Math.max(b,y,M),A=Math.min(b,y,M);w>.9&&A<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function u(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new R,b=new R,y=new R,M=new R,w=new Q,A=new Q,_=new Q;for(let T=0,P=0;T<r.length;T+=9,P+=6){v.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),w.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),M.copy(v).add(b).add(y).divideScalar(3);let I=m(M);x(w,P+0,v,I),x(A,P+2,b,I),x(_,P+4,y,I)}}function x(v,b,y,M){M<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},la=class s extends cr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ot("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,u=(a-h)/d;return(n+u)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new Q:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new R,n=[],r=[],a=[],o=new R,l=new he;for(let u=0;u<=t;u++){let p=u/t;n[u]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),f=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(n[u-1],n[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ie(n[u-1].dot(n[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,p))}a[u].crossVectors(n[u],r[u])}if(e===!0){let u=Math.acos(ie(r[0].dot(r[t]),-1,1));u/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],u*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends wi{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Q){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},tl=class extends hr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,n(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var Ld=new R,Dd=new R,Mh=new Qh,Sh=new Qh,wh=new Qh,ur=class extends wi{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(Dd.subVectors(n[0],n[1]).add(n[0]),c=Dd);let f=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Ld.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Ld),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Mh.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,p,x,m),Sh.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,p,x,m),wh.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Mh.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),Sh.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),wh.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(Mh.calc(l),Sh.calc(l),wh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Nd(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function em(s,t){let e=1-s;return e*e*t}function im(s,t){return 2*(1-s)*s*t}function nm(s,t){return s*s*t}function qr(s,t,e,i){return em(s,t)+im(s,e)+nm(s,i)}function sm(s,t){let e=1-s;return e*e*e*t}function rm(s,t){let e=1-s;return 3*e*e*s*t}function am(s,t){return 3*(1-s)*s*s*t}function om(s,t){return s*s*s*t}function Xr(s,t,e,i,n){return sm(s,t)+rm(s,e)+am(s,i)+om(s,n)}var ca=class extends wi{constructor(t=new Q,e=new Q,i=new Q,n=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new Q){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xr(t,n.x,r.x,a.x,o.x),Xr(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},el=class extends wi{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Xr(t,n.x,r.x,a.x,o.x),Xr(t,n.y,r.y,a.y,o.y),Xr(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ha=class extends wi{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends wi{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ua=class extends wi{constructor(t=new Q,e=new Q,i=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Q){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(qr(t,n.x,r.x,a.x),qr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},os=class extends wi{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(qr(t,n.x,r.x,a.x),qr(t,n.y,r.y,a.y),qr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],f=n[a>n.length-3?n.length-1:a+2];return i.set(Nd(o,l.x,c.x,h.x,f.x),Nd(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new Q().fromArray(n))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:tl,CatmullRomCurve3:ur,CubicBezierCurve:ca,CubicBezierCurve3:el,EllipseCurve:hr,LineCurve:ha,LineCurve3:il,QuadraticBezierCurve:ua,QuadraticBezierCurve3:os,SplineCurve:da}),sl=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new nl[n.type]().fromJSON(n))}return this}},fa=class extends sl{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ha(this.currentPoint.clone(),new Q(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new ua(this.currentPoint.clone(),new Q(t,e),new Q(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new ca(this.currentPoint.clone(),new Q(t,e),new Q(i,n),new Q(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new da(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new hr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},bn=class extends fa{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new fa().fromJSON(n))}return this}};function lm(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=Pf(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=fm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,f=l;for(let d=e;d<n;d+=e){let u=s[d],p=s[d+1];u<o&&(o=u),p<l&&(l=p),u>h&&(h=u),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return pa(r,a,e,o,l,c,0),a}function Pf(s,t,e,i,n){let r;if(n===wm(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=Fd(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Fd(a/i|0,s[a],s[a+1],r);return r&&dr(r,r.next)&&(ga(r),r=r.next),r}function ls(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(dr(e,e.next)||Ue(e.prev,e,e.next)===0)){if(ga(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function pa(s,t,e,i,n,r,a){if(!s)return;!a&&r&&vm(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?hm(s,i,n,r):cm(s)){t.push(l.i,s.i,c.i),ga(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=um(ls(s),t),pa(s,t,e,i,n,r,2)):a===2&&dm(s,t,e,i,n,r):pa(ls(s),t,e,i,n,r,1);break}}}function cm(s){let t=s.prev,e=s,i=s.next;if(Ue(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),f=Math.min(o,l,c),d=Math.max(n,r,a),u=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=d&&p.y>=f&&p.y<=u&&Gr(n,o,r,l,a,c,p.x,p.y)&&Ue(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function hm(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Ue(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,f=r.y,d=a.y,u=Math.min(o,l,c),p=Math.min(h,f,d),x=Math.max(o,l,c),m=Math.max(h,f,d),g=Lh(u,p,t,e,i),v=Lh(x,m,t,e,i),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&Gr(o,h,l,f,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Gr(o,h,l,f,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=u&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&Gr(o,h,l,f,c,d,b.x,b.y)&&Ue(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Gr(o,h,l,f,c,d,y.x,y.y)&&Ue(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function um(s,t){let e=s;do{let i=e.prev,n=e.next.next;!dr(i,n)&&Lf(i,e,e.next,n)&&ma(i,n)&&ma(n,i)&&(t.push(i.i,e.i,n.i),ga(e),ga(e.next),e=s=n),e=e.next}while(e!==s);return ls(e)}function dm(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bm(a,o)){let l=Df(a,o);a=ls(a,a.next),l=ls(l,l.next),pa(a,t,e,i,n,r,0),pa(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function fm(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=Pf(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(_m(c))}n.sort(pm);for(let r=0;r<n.length;r++)e=mm(n[r],e);return e}function pm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function mm(s,t){let e=gm(s,t);if(!e)return t;let i=Df(e,s);return ls(i,i.next),ls(e,e.next)}function gm(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(dr(s,e))return e;do{if(dr(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let f=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&If(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let f=Math.abs(n-e.y)/(i-e.x);ma(e,s)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&xm(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function xm(s,t){return Ue(s.prev,s,t.prev)<0&&Ue(t.next,s,s.next)<0}function vm(s,t,e,i){let n=s;do n.z===0&&(n.z=Lh(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,ym(n)}function ym(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function Lh(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function _m(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function If(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Gr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&If(s,t,e,i,n,r,a,o)}function bm(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Mm(s,t)&&(ma(s,t)&&ma(t,s)&&Sm(s,t)&&(Ue(s.prev,s,t.prev)||Ue(s,t.prev,t))||dr(s,t)&&Ue(s.prev,s,s.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function dr(s,t){return s.x===t.x&&s.y===t.y}function Lf(s,t,e,i){let n=Lo(Ue(s,t,e)),r=Lo(Ue(s,t,i)),a=Lo(Ue(e,i,s)),o=Lo(Ue(e,i,t));return!!(n!==r&&a!==o||n===0&&Io(s,e,t)||r===0&&Io(s,i,t)||a===0&&Io(e,s,i)||o===0&&Io(e,t,i))}function Io(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Lo(s){return s>0?1:s<0?-1:0}function Mm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Lf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ma(s,t){return Ue(s.prev,s,s.next)<0?Ue(s,t,s.next)>=0&&Ue(s,s.prev,t)>=0:Ue(s,t,s.prev)<0||Ue(s,s.next,t)<0}function Sm(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function Df(s,t){let e=Dh(s.i,s.x,s.y),i=Dh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Fd(s,t,e,i){let n=Dh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ga(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function wm(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Nh=class{static triangulate(t,e,i=2){return lm(t,e,i)}},$i=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];zd(t),Ud(i,t);let a=t.length;e.forEach(zd);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,Ud(i,e[l]);let o=Nh.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zd(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ud(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var xa=class s extends Qt{constructor(t=new bn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Lt(n,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Em,b,y=!1,M,w,A,_;if(g){b=g.getSpacedPoints(h),y=!0,d=!1;let it=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,it),w=new R,A=new R,_=new R}d||(m=0,u=0,p=0,x=0);let T=o.extractPoints(c),P=T.shape,I=T.holes;if(!$i.isClockWise(P)){P=P.reverse();for(let it=0,at=I.length;it<at;it++){let ot=I[it];$i.isClockWise(ot)&&(I[it]=ot.reverse())}}function U(it){let ot=10000000000000001e-36,lt=it[0];for(let ft=1;ft<=it.length;ft++){let Ht=ft%it.length,kt=it[Ht],$t=kt.x-lt.x,jt=kt.y-lt.y,L=$t*$t+jt*jt,me=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(lt.x),Math.abs(lt.y)),re=ot*me*me;if(L<=re){it.splice(Ht,1),ft--;continue}lt=kt}}U(P),I.forEach(U);let D=I.length,B=P;for(let it=0;it<D;it++){let at=I[it];P=P.concat(at)}function q(it,at,ot){return at||Wt("ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(at,ot)}let X=P.length;function st(it,at,ot){let lt,ft,Ht,kt=it.x-at.x,$t=it.y-at.y,jt=ot.x-it.x,L=ot.y-it.y,me=kt*kt+$t*$t,re=kt*L-$t*jt;if(Math.abs(re)>Number.EPSILON){let C=Math.sqrt(me),S=Math.sqrt(jt*jt+L*L),k=at.x-$t/C,V=at.y+kt/C,Z=ot.x-L/S,ut=ot.y+jt/S,dt=((Z-k)*L-(ut-V)*jt)/(kt*L-$t*jt);lt=k+kt*dt-it.x,ft=V+$t*dt-it.y;let j=lt*lt+ft*ft;if(j<=2)return new Q(lt,ft);Ht=Math.sqrt(j/2)}else{let C=!1;kt>Number.EPSILON?jt>Number.EPSILON&&(C=!0):kt<-Number.EPSILON?jt<-Number.EPSILON&&(C=!0):Math.sign($t)===Math.sign(L)&&(C=!0),C?(lt=-$t,ft=kt,Ht=Math.sqrt(me)):(lt=kt,ft=$t,Ht=Math.sqrt(me/2))}return new Q(lt/Ht,ft/Ht)}let G=[];for(let it=0,at=B.length,ot=at-1,lt=it+1;it<at;it++,ot++,lt++)ot===at&&(ot=0),lt===at&&(lt=0),G[it]=st(B[it],B[ot],B[lt]);let Y=[],$,At=G.concat();for(let it=0,at=D;it<at;it++){let ot=I[it];$=[];for(let lt=0,ft=ot.length,Ht=ft-1,kt=lt+1;lt<ft;lt++,Ht++,kt++)Ht===ft&&(Ht=0),kt===ft&&(kt=0),$[lt]=st(ot[lt],ot[Ht],ot[kt]);Y.push($),At=At.concat($)}let pt;if(m===0)pt=$i.triangulateShape(B,I);else{let it=[],at=[];for(let ot=0;ot<m;ot++){let lt=ot/m,ft=u*Math.cos(lt*Math.PI/2),Ht=p*Math.sin(lt*Math.PI/2)+x;for(let kt=0,$t=B.length;kt<$t;kt++){let jt=q(B[kt],G[kt],Ht);bt(jt.x,jt.y,-ft),lt===0&&it.push(jt)}for(let kt=0,$t=D;kt<$t;kt++){let jt=I[kt];$=Y[kt];let L=[];for(let me=0,re=jt.length;me<re;me++){let C=q(jt[me],$[me],Ht);bt(C.x,C.y,-ft),lt===0&&L.push(C)}lt===0&&at.push(L)}}pt=$i.triangulateShape(it,at)}let Xt=pt.length,Bt=p+x;for(let it=0;it<X;it++){let at=d?q(P[it],At[it],Bt):P[it];y?(A.copy(M.normals[0]).multiplyScalar(at.x),w.copy(M.binormals[0]).multiplyScalar(at.y),_.copy(b[0]).add(A).add(w),bt(_.x,_.y,_.z)):bt(at.x,at.y,0)}for(let it=1;it<=h;it++)for(let at=0;at<X;at++){let ot=d?q(P[at],At[at],Bt):P[at];y?(A.copy(M.normals[it]).multiplyScalar(ot.x),w.copy(M.binormals[it]).multiplyScalar(ot.y),_.copy(b[it]).add(A).add(w),bt(_.x,_.y,_.z)):bt(ot.x,ot.y,f/h*it)}for(let it=m-1;it>=0;it--){let at=it/m,ot=u*Math.cos(at*Math.PI/2),lt=p*Math.sin(at*Math.PI/2)+x;for(let ft=0,Ht=B.length;ft<Ht;ft++){let kt=q(B[ft],G[ft],lt);bt(kt.x,kt.y,f+ot)}for(let ft=0,Ht=I.length;ft<Ht;ft++){let kt=I[ft];$=Y[ft];for(let $t=0,jt=kt.length;$t<jt;$t++){let L=q(kt[$t],$[$t],lt);y?bt(L.x,L.y+b[h-1].y,b[h-1].x+ot):bt(L.x,L.y,f+ot)}}}ce(),J();function ce(){let it=n.length/3;if(d){let at=0,ot=X*at;for(let lt=0;lt<Xt;lt++){let ft=pt[lt];qt(ft[2]+ot,ft[1]+ot,ft[0]+ot)}at=h+m*2,ot=X*at;for(let lt=0;lt<Xt;lt++){let ft=pt[lt];qt(ft[0]+ot,ft[1]+ot,ft[2]+ot)}}else{for(let at=0;at<Xt;at++){let ot=pt[at];qt(ot[2],ot[1],ot[0])}for(let at=0;at<Xt;at++){let ot=pt[at];qt(ot[0]+X*h,ot[1]+X*h,ot[2]+X*h)}}i.addGroup(it,n.length/3-it,0)}function J(){let it=n.length/3,at=0;et(B,at),at+=B.length;for(let ot=0,lt=I.length;ot<lt;ot++){let ft=I[ot];et(ft,at),at+=ft.length}i.addGroup(it,n.length/3-it,1)}function et(it,at){let ot=it.length;for(;--ot>=0;){let lt=ot,ft=ot-1;ft<0&&(ft=it.length-1);for(let Ht=0,kt=h+m*2;Ht<kt;Ht++){let $t=X*Ht,jt=X*(Ht+1),L=at+lt+$t,me=at+ft+$t,re=at+ft+jt,C=at+lt+jt;Et(L,me,re,C)}}}function bt(it,at,ot){l.push(it),l.push(at),l.push(ot)}function qt(it,at,ot){Yt(it),Yt(at),Yt(ot);let lt=n.length/3,ft=v.generateTopUV(i,n,lt-3,lt-2,lt-1);_e(ft[0]),_e(ft[1]),_e(ft[2])}function Et(it,at,ot,lt){Yt(it),Yt(at),Yt(lt),Yt(at),Yt(ot),Yt(lt);let ft=n.length/3,Ht=v.generateSideWallUV(i,n,ft-6,ft-3,ft-2,ft-1);_e(Ht[0]),_e(Ht[1]),_e(Ht[3]),_e(Ht[1]),_e(Ht[2]),_e(Ht[3])}function Yt(it){n.push(l[it*3+0]),n.push(l[it*3+1]),n.push(l[it*3+2])}function _e(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Tm(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new nl[n.type]().fromJSON(n)),new s(i,t.options)}},Em={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new Q(r,a),new Q(o,l),new Q(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],d=t[n*3],u=t[n*3+1],p=t[n*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Q(a,1-l),new Q(c,1-f),new Q(d,1-p),new Q(x,1-g)]:[new Q(o,1-l),new Q(h,1-f),new Q(u,1-p),new Q(m,1-g)]}};function Tm(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Qi=class s extends cr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},va=class s extends Qt{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=ie(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new R,d=new Q,u=new R,p=new R,x=new R,m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,u.x=g*1,u.y=-m,u.z=g*0,x.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,u.x=g*1,u.y=-m,u.z=g*0,p.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),l.push(u.x,u.y,u.z),x.copy(p)}for(let v=0;v<=e;v++){let b=i+v*h*n,y=Math.sin(b),M=Math.cos(b);for(let w=0;w<=t.length-1;w++){f.x=t[w].x*y,f.y=t[w].y,f.z=t[w].x*M,a.push(f.x,f.y,f.z),d.x=v/e,d.y=w/(t.length-1),o.push(d.x,d.y);let A=l[3*w+0]*y,_=l[3*w+1],T=l[3*w+0]*M;c.push(A,_,T)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){let y=b+v*t.length,M=y,w=y+t.length,A=y+t.length+1,_=y+1;r.push(M,w,_),r.push(A,_,w)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Ze=class s extends cr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},gi=class s extends Qt{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,f=t/o,d=e/l,u=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*d-a;for(let b=0;b<c;b++){let y=b*f-r;p.push(y,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let b=v+c*g,y=v+c*(g+1),M=v+1+c*(g+1),w=v+1+c*g;u.push(b,y,w),u.push(y,M,w)}this.setIndex(u),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},cs=class s extends Qt{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],f=t,d=(e-t)/n,u=new R,p=new Q;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=r+m/i*a;u.x=f*Math.cos(g),u.y=f*Math.sin(g),l.push(u.x,u.y,u.z),c.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}f+=d}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let v=g+m,b=v,y=v+i+1,M=v+i+2,w=v+1;o.push(b,y,w),o.push(y,M,w)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ya=class s extends Qt{constructor(t=new bn([new Q(0,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Lt(n,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function c(h){let f=n.length/3,d=h.extractPoints(e),u=d.shape,p=d.holes;$i.isClockWise(u)===!1&&(u=u.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];$i.isClockWise(v)===!0&&(p[m]=v.reverse())}let x=$i.triangulateShape(u,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];u=u.concat(v)}for(let m=0,g=u.length;m<g;m++){let v=u[m];n.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],b=v[0]+f,y=v[1]+f,M=v[2]+f;i.push(b,y,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Am(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let a=e[t.shapes[n]];i.push(a)}return new s(i,t.curveSegments)}};function Am(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Jt=class s extends Qt{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new R,d=new R,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,y=a+b*o,M=t*Math.cos(y),w=Math.sqrt(t*t-M*M),A=0;g===0&&a===0?A=.5/e:g===i&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,P=n+T*r;f.x=-w*Math.cos(P),f.y=M,f.z=w*Math.sin(P),p.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(T+A,1-b),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let b=h[g][v+1],y=h[g][v],M=h[g+1][v],w=h[g+1][v+1];(g!==0||a>0)&&u.push(b,y,w),(g!==i-1||l<Math.PI)&&u.push(y,M,w)}this.setIndex(u),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ee=class s extends Qt{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],f=[],d=new R,u=new R,p=new R;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=n;g++){let v=g/n*r;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),c.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),p.subVectors(u,d).normalize(),h.push(p.x,p.y,p.z),f.push(g/n),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,b=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var _a=class s extends Qt{constructor(t=new os(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new Q,h=new R,f=[],d=[],u=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Lt(f,3)),this.setAttribute("normal",new Lt(d,3)),this.setAttribute("uv",new Lt(u,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),v(),g()}function m(b){h=t.getPointAt(b/e,h);let y=a.normals[b],M=a.binormals[b];for(let w=0;w<=n;w++){let A=w/n*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+_*M.x,l.y=T*y.y+_*M.y,l.z=T*y.z+_*M.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=n;y++){let M=(n+1)*(b-1)+(y-1),w=(n+1)*b+(y-1),A=(n+1)*b+y,_=(n+1)*(b-1)+y;p.push(M,w,_),p.push(w,A,_)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=n;y++)c.x=b/e,c.y=y/n,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new nl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ms(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(kd(n))n.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(kd(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function oi(s){let t={};for(let e=0;e<s.length;e++){let i=ms(s[e]);for(let n in i)t[n]=i[n]}return t}function kd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Rm(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Vi={clone:ms,merge:oi},Cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Me=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cm,this.fragmentShader=Pm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ct().setHex(n.value);break;case"v2":this.uniforms[i].value=new Q().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new we().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new he().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fr=class extends Me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mn=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pi=class extends Si{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ct(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ba=class extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Ml,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},rl=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},al=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xs(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Eh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Un=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ol=class extends Un{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rh,endingEnd:Rh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ch:r=t,o=2*e-i;break;case Ph:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ch:a=t,l=2*i-e;break;case Ph:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-d*m+2*d*x-d*p,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*p+1,b=(-1-u)*m+(1.5+u)*x+.5*p,y=u*m-u*x;for(let M=0;M!==o;++M)r[M]=g*a[h+M]+v*a[c+M]+b*a[l+M]+y*a[f+M];return r}},ll=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},cl=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},hl=class extends Un{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let d=o*2,u=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=u*d+p*2,v=f[g],b=f[g+1],y=t*d+p*2,M=h[y],w=h[y+1],A=Lm(i,e,v,M,n);r[p]=Nf(A,x,b,w,m)}return r}};function Nf(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function Im(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function Lm(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=Nf(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=Im(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ei=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xs(e,this.TimeBufferType),this.values=Xs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Xs(t.times,Array),values:Xs(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Eh(t.settings)&&(i.settings={inTangents:Xs(t.settings.inTangents,Array),outTangents:Xs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new hl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Yr:e=this.InterpolantFactoryMethodDiscrete;break;case Xo:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break;case Ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ot("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return Ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Eh(this.settings)&&(Bd(this.settings.inTangents,t),Bd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&y0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let f=o*i,d=f-i,u=f+i;for(let p=0;p!==i;++p){let x=e[f+p];if(x!==e[d+p]||x!==e[u+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Eh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Bd(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Xo;var kn=class extends Ei{constructor(t,e,i){super(t,e,i)}};kn.prototype.ValueTypeName="bool";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=Yr;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var ul=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};ul.prototype.ValueTypeName="color";var dl=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};dl.prototype.ValueTypeName="number";var fl=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ma=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new fl(this.times,this.values,this.getValueSize(),t)}};Ma.prototype.ValueTypeName="quaternion";Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Bn=class extends Ei{constructor(t,e,i){super(t,e,i)}};Bn.prototype.ValueTypeName="string";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=Yr;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends Ei{constructor(t,e,i,n){super(t,e,i,n)}};pl.prototype.ValueTypeName="vector";var Uo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(Od(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!Od(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Od(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ml=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],p=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ff=new ml,pr=class{constructor(t){this.manager=t!==void 0?t:Ff,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};pr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ys=new WeakMap,gl=class extends pr{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Uo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=Ys.get(a);f===void 0&&(f=[],Ys.set(a,f)),f.push({onLoad:e,onError:n})}return a}let o=tr("img");function l(){h(),e&&e(this);let f=Ys.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}Ys.delete(this),r.manager.itemEnd(t)}function c(f){h(),n&&n(f),Uo.remove(`image:${t}`);let d=Ys.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(f)}Ys.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Uo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Sa=class extends pr{constructor(t){super(t)}load(t,e,i,n){let r=new ai,a=new gl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},wa=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},hs=class extends wa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Th=new he,Hd=new R,Gd=new R,xl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new or,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hd),Gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Th.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Th,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Qs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Th)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Do=new R,No=new fi,Xi=new R,Ea=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Do,No,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,Xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Do,No,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Nn=new R,Vd=new Q,Wd=new Q,ti=class extends Ea{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ir*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Vd,Wd),e.subVectors(Wd,Vd)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var On=class extends Ea{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fh=class extends xl{constructor(){super(new On(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends wa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Fh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ta=class extends Qt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var $s=-90,Zs=1,vl=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ti($s,Zs,t,e);n.layers=this.layers,this.add(n);let r=new ti($s,Zs,t,e);r.layers=this.layers,this.add(r);let a=new ti($s,Zs,t,e);a.layers=this.layers,this.add(a);let o=new ti($s,Zs,t,e);o.layers=this.layers,this.add(o);let l=new ti($s,Zs,t,e);l.layers=this.layers,this.add(l);let c=new ti($s,Zs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Oi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},yl=class extends ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Aa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Dm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Dm(){this._document.hidden===!1&&this.reset()}var eu="\\[\\]\\.:\\/",Nm=new RegExp("["+eu+"]","g"),iu="[^"+eu+"]",Fm="[^"+eu.replace("\\.","")+"]",zm=/((?:WC+[\/:])*)/.source.replace("WC",iu),Um=/(WCOD+)?/.source.replace("WCOD",Fm),km=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Bm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Om=new RegExp("^"+zm+Um+km+Bm+"$"),Hm=["material","materials","bones","map"],zh=class{constructor(t,e,i){let n=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Nm,"")}static parseTrackName(t){let e=Om.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Hm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=zh;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var T1=new Float32Array(1);var lu=class lu{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};lu.prototype.isMatrix2=!0;var Uh=lu;function nu(s,t,e,i){let n=Gm(i);switch(e){case $h:return s*t;case vr:return s*t/n.components*n.byteLength;case Cl:return s*t/n.components*n.byteLength;case Xn:return s*t*2/n.components*n.byteLength;case Pl:return s*t*2/n.components*n.byteLength;case Zh:return s*t*3/n.components*n.byteLength;case yi:return s*t*4/n.components*n.byteLength;case Il:return s*t*4/n.components*n.byteLength;case Ua:case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Oa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Fl:return Math.max(s,16)*Math.max(t,8)/4;case Ll:case Nl:return Math.max(s,8)*Math.max(t,8)/2;case zl:case Ul:case Bl:case Ol:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kl:case Ha:case Hl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ic:case nc:case sc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case rc:case ac:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ga:case oc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gm(s){switch(s){case xi:case Wh:return{byteLength:1,components:1};case gr:case qh:case Ve:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Gi:case Tl:case vi:return{byteLength:4,components:1};case Xh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function np(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ym(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(s.bindBuffer(c,o),f.length===0)s.bufferSubData(c,0,h);else{f.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<f.length;u++){let p=f[d],x=f[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,p=f.length;u<p;u++){let x=f[u];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var $m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Km=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ig=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ng=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ag=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,og=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ag=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Og=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$g=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ix=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ax=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ix=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ux=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ev=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_v=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Av=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ee={alphahash_fragment:$m,alphahash_pars_fragment:Zm,alphamap_fragment:jm,alphamap_pars_fragment:Jm,alphatest_fragment:Km,alphatest_pars_fragment:Qm,aomap_fragment:tg,aomap_pars_fragment:eg,batching_pars_vertex:ig,batching_vertex:ng,begin_vertex:sg,beginnormal_vertex:rg,bsdfs:ag,iridescence_fragment:og,bumpmap_pars_fragment:lg,clipping_planes_fragment:cg,clipping_planes_pars_fragment:hg,clipping_planes_pars_vertex:ug,clipping_planes_vertex:dg,color_fragment:fg,color_pars_fragment:pg,color_pars_vertex:mg,color_vertex:gg,common:xg,cube_uv_reflection_fragment:vg,defaultnormal_vertex:yg,displacementmap_pars_vertex:_g,displacementmap_vertex:bg,emissivemap_fragment:Mg,emissivemap_pars_fragment:Sg,colorspace_fragment:wg,colorspace_pars_fragment:Eg,envmap_fragment:Tg,envmap_common_pars_fragment:Ag,envmap_pars_fragment:Rg,envmap_pars_vertex:Cg,envmap_physical_pars_fragment:Og,envmap_vertex:Pg,fog_vertex:Ig,fog_pars_vertex:Lg,fog_fragment:Dg,fog_pars_fragment:Ng,gradientmap_pars_fragment:Fg,lightmap_pars_fragment:zg,lights_lambert_fragment:Ug,lights_lambert_pars_fragment:kg,lights_pars_begin:Bg,lights_toon_fragment:Hg,lights_toon_pars_fragment:Gg,lights_phong_fragment:Vg,lights_phong_pars_fragment:Wg,lights_physical_fragment:qg,lights_physical_pars_fragment:Xg,lights_fragment_begin:Yg,lights_fragment_maps:$g,lights_fragment_end:Zg,lightprobes_pars_fragment:jg,logdepthbuf_fragment:Jg,logdepthbuf_pars_fragment:Kg,logdepthbuf_pars_vertex:Qg,logdepthbuf_vertex:tx,map_fragment:ex,map_pars_fragment:ix,map_particle_fragment:nx,map_particle_pars_fragment:sx,metalnessmap_fragment:rx,metalnessmap_pars_fragment:ax,morphinstance_vertex:ox,morphcolor_vertex:lx,morphnormal_vertex:cx,morphtarget_pars_vertex:hx,morphtarget_vertex:ux,normal_fragment_begin:dx,normal_fragment_maps:fx,normal_pars_fragment:px,normal_pars_vertex:mx,normal_vertex:gx,normalmap_pars_fragment:xx,clearcoat_normal_fragment_begin:vx,clearcoat_normal_fragment_maps:yx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:bx,opaque_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:wx,project_vertex:Ex,dithering_fragment:Tx,dithering_pars_fragment:Ax,roughnessmap_fragment:Rx,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Ix,shadowmap_vertex:Lx,shadowmask_pars_fragment:Dx,skinbase_vertex:Nx,skinning_pars_vertex:Fx,skinning_vertex:zx,skinnormal_vertex:Ux,specularmap_fragment:kx,specularmap_pars_fragment:Bx,tonemapping_fragment:Ox,tonemapping_pars_fragment:Hx,transmission_fragment:Gx,transmission_pars_fragment:Vx,uv_pars_fragment:Wx,uv_pars_vertex:qx,uv_vertex:Xx,worldpos_vertex:Yx,background_vert:$x,background_frag:Zx,backgroundCube_vert:jx,backgroundCube_frag:Jx,cube_vert:Kx,cube_frag:Qx,depth_vert:tv,depth_frag:ev,distance_vert:iv,distance_frag:nv,equirect_vert:sv,equirect_frag:rv,linedashed_vert:av,linedashed_frag:ov,meshbasic_vert:lv,meshbasic_frag:cv,meshlambert_vert:hv,meshlambert_frag:uv,meshmatcap_vert:dv,meshmatcap_frag:fv,meshnormal_vert:pv,meshnormal_frag:mv,meshphong_vert:gv,meshphong_frag:xv,meshphysical_vert:vv,meshphysical_frag:yv,meshtoon_vert:_v,meshtoon_frag:bv,points_vert:Mv,points_frag:Sv,shadow_vert:wv,shadow_frag:Ev,sprite_vert:Tv,sprite_frag:Av},yt={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},en={basic:{uniforms:oi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:oi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:oi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:oi([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:oi([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ct(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:oi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:oi([yt.points,yt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:oi([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:oi([yt.common,yt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:oi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:oi([yt.sprite,yt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:oi([yt.common,yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:oi([yt.lights,yt.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};en.physical={uniforms:oi([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var hc={r:0,b:0,g:0},Rv=new he,sp=new Zt;sp.set(-1,0,0,0,1,0,0,0,1);function Cv(s,t,e,i,n,r){let a=new ct(0),o=n===!0?0:1,l,c,h=null,f=0,d=null;function u(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=u(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,b){let y=u(b);y&&(y.isCubeTexture||y.mapping===Fa)?(c===void 0&&(c=new nt(new ze(1,1,1),new Me({name:"BackgroundCubeMaterial",uniforms:ms(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sp),c.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,(h!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new nt(new gi(2,2),new Me({name:"BackgroundMaterial",uniforms:ms(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ne.getTransfer(y.colorSpace)!==de,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(hc,tu(s)),e.buffers.color.setClear(hc.r,hc.g,hc.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function Pv(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(I,N,U,D,B){let q=!1,X=f(I,D,U,N);r!==X&&(r=X,c(r.object)),q=u(I,D,U,B),q&&p(I,D,U,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(I,N,U,D),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function f(I,N,U,D){let B=D.wireframe===!0,q=i[N.id];q===void 0&&(q={},i[N.id]=q);let X=I.isInstancedMesh===!0?I.id:0,st=q[X];st===void 0&&(st={},q[X]=st);let G=st[U.id];G===void 0&&(G={},st[U.id]=G);let Y=G[B];return Y===void 0&&(Y=d(l()),G[B]=Y),Y}function d(I){let N=[],U=[],D=[];for(let B=0;B<e;B++)N[B]=0,U[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:D,object:I,attributes:{},index:null}}function u(I,N,U,D){let B=r.attributes,q=N.attributes,X=0,st=U.getAttributes();for(let G in st)if(st[G].location>=0){let $=B[G],At=q[G];if(At===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(At=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(At=I.instanceColor)),$===void 0||$.attribute!==At||At&&$.data!==At.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function p(I,N,U,D){let B={},q=N.attributes,X=0,st=U.getAttributes();for(let G in st)if(st[G].location>=0){let $=q[G];$===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let At={};At.attribute=$,$&&$.data&&(At.data=$.data),B[G]=At,X++}r.attributes=B,r.attributesNum=X,r.index=D}function x(){let I=r.newAttributes;for(let N=0,U=I.length;N<U;N++)I[N]=0}function m(I){g(I,0)}function g(I,N){let U=r.newAttributes,D=r.enabledAttributes,B=r.attributeDivisors;U[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),B[I]!==N&&(s.vertexAttribDivisor(I,N),B[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let U=0,D=N.length;U<D;U++)N[U]!==I[U]&&(s.disableVertexAttribArray(U),N[U]=0)}function b(I,N,U,D,B,q,X){X===!0?s.vertexAttribIPointer(I,N,U,B,q):s.vertexAttribPointer(I,N,U,D,B,q)}function y(I,N,U,D){x();let B=D.attributes,q=U.getAttributes(),X=N.defaultAttributeValues;for(let st in q){let G=q[st];if(G.location>=0){let Y=B[st];if(Y===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor)),Y!==void 0){let $=Y.normalized,At=Y.itemSize,pt=t.get(Y);if(pt===void 0)continue;let Xt=pt.buffer,Bt=pt.type,ce=pt.bytesPerElement,J=Bt===s.INT||Bt===s.UNSIGNED_INT||Y.gpuType===Tl;if(Y.isInterleavedBufferAttribute){let et=Y.data,bt=et.stride,qt=Y.offset;if(et.isInstancedInterleavedBuffer){for(let Et=0;Et<G.locationSize;Et++)g(G.location+Et,et.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Et=0;Et<G.locationSize;Et++)m(G.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let Et=0;Et<G.locationSize;Et++)b(G.location+Et,At/G.locationSize,Bt,$,bt*ce,(qt+At/G.locationSize*Et)*ce,J)}else{if(Y.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)g(G.location+et,Y.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let et=0;et<G.locationSize;et++)m(G.location+et);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let et=0;et<G.locationSize;et++)b(G.location+et,At/G.locationSize,Bt,$,At*ce,At/G.locationSize*et*ce,J)}}else if(X!==void 0){let $=X[st];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(G.location,$);break;case 3:s.vertexAttrib3fv(G.location,$);break;case 4:s.vertexAttrib4fv(G.location,$);break;default:s.vertexAttrib1fv(G.location,$)}}}}v()}function M(){T();for(let I in i){let N=i[I];for(let U in N){let D=N[U];for(let B in D){let q=D[B];for(let X in q)h(q[X].object),delete q[X];delete D[B]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let U in N){let D=N[U];for(let B in D){let q=D[B];for(let X in q)h(q[X].object),delete q[X];delete D[B]}}delete i[I.id]}function A(I){for(let N in i){let U=i[N];for(let D in U){let B=U[D];if(B[I.id]===void 0)continue;let q=B[I.id];for(let X in q)h(q[X].object),delete q[X];delete B[I.id]}}}function _(I){for(let N in i){let U=i[N],D=I.isInstancedMesh===!0?I.id:0,B=U[D];if(B!==void 0){for(let q in B){let X=B[q];for(let st in X)h(X[st].object),delete X[st];delete B[q]}delete U[D],Object.keys(U).length===0&&delete i[N]}}}function T(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Iv(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];e.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Lv(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==yi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Ve&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==xi&&A!==vi&&!_&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ot("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:w}}function Dv(s){let t=this,e=null,i=0,n=!1,r=!1,a=new Mi,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||n;return n=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let p=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,g=s.get(f);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,d,b,u);for(let M=0;M!==b;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,u,p){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=u+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=u;b!==x;++b,y+=4)a.copy(f[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var br=4,Nv=6,Fv=20,zv=256,Wa=new On,zf=new ct,cu=null,hu=0,uu=0,du=!1,Uv=new R,gs=new R,dc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=Uv}=r;cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cu,hu,uu),this._renderer.xr.enabled=du,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vn||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cu=this._renderer.getRenderTarget(),hu=this._renderer.getActiveCubeFace(),uu=this._renderer.getActiveMipmapLevel(),du=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ve,format:yi,colorSpace:$r,depthBuffer:!1},n=Uf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kv(r)),this._blurMaterial=Ov(r,t,e),this._ggxMaterial=Bv(r,t,e)}return n}_compileMaterial(t){let e=new nt(new Qt,t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,i,n,r){let l=new ti(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(zf),f.toneMapping=Hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(n),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nt(new ze,new se({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(zf),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;_r(n,y*M,b>2?M:0,M,M),f.setRenderTarget(n),g&&f.render(x,l),f.render(t,l)}f.toneMapping=u,f.autoClear=d,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Vn||t.mapping===ps;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;_r(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Wa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),d=c*1.25,u=f*d,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-br?i-p+br:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=p-e,_r(r,m,g,3*x,2*x),n.setRenderTarget(r),n.render(o,Wa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,_r(t,m,g,3*x,2*x),n.setRenderTarget(t),n.render(o,Wa)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],f=3*h*(n>this._lodMax-br?n-this._lodMax+br:0),d=4*(this._cubeSize-h);_r(e,f,d,3*h,2*h),a.setRenderTarget(e),a.render(l,Wa)}};function kv(s){let t=[],e=[],i=s,n=s-br+1+Nv;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,u=3,p=new Float32Array(u*d*f),x=new Float32Array(u*d*f);for(let g=0;g<f;g++){let v=g%3*2/3-1,b=g>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];p.set(y,u*d*g);for(let M=0;M<d;M++){let w=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?gs.set(1,A,w):g===1?gs.set(-w,1,-A):g===2?gs.set(-w,A,1):g===3?gs.set(-1,A,-w):g===4?gs.set(-w,-1,A):gs.set(w,A,-1),gs.toArray(x,(g*d+M)*u)}}let m=new Qt;m.setAttribute("position",new fe(p,u)),m.setAttribute("outputDirection",new fe(x,u)),e.push(new nt(m,null)),i>br&&i--}return{lodMeshes:e,sizeLods:t}}function Uf(s,t,e){let i=new Pe(s,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _r(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Bv(s,t,e){return new Me({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Ov(s,t,e){return new Me({name:"SphericalGaussianBlur",defines:{SAMPLES:Fv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:mc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function kf(){return new Me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function Bf(){return new Me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function mc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fc=class extends Pe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new ra(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ze(5,5,5),r=new Me({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:Di});r.uniforms.tEquirect.value=e;let a=new nt(n,r),o=e.minFilter;return e.minFilter===Wn&&(e.minFilter=ei),new vl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function Hv(s){let t=new WeakMap,e=new WeakMap,i=null;function n(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Sl||u===wl)if(t.has(d)){let p=t.get(d).texture;return o(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let x=new fc(p.height);return x.fromEquirectangularTexture(s,d),t.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,p=u===Sl||u===wl,x=u===Vn||u===ps;if(p||x){let m=e.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return i===null&&(i=new dc(s)),m=p?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new dc(s)),m=p?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,u){return u===Sl?d.mapping=Vn:u===wl&&(d.mapping=ps),d}function l(d){let u=0,p=6;for(let x=0;x<p;x++)d[x]!==void 0&&u++;return u===p}function c(d){let u=d.target;u.removeEventListener("dispose",c);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:f}}function Gv(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&is("WebGLRenderer: "+i+" extension not supported."),n}}}function Vv(s,t,e,i){let n={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let p in d.attributes)t.remove(d.attributes[p]);d.removeEventListener("dispose",a),delete n[d.id];let u=r.get(d);u&&(t.remove(u),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let u in d)t.update(d[u],s.ARRAY_BUFFER)}function c(f){let d=[],u=f.index,p=f.attributes.position,x=0;if(p===void 0)return;if(u!==null){let v=u.array;x=u.version;for(let b=0,y=v.length;b<y;b+=3){let M=v[b+0],w=v[b+1],A=v[b+2];d.push(M,w,w,A,A,M)}}else{let v=p.array;x=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let M=b+0,w=b+1,A=b+2;d.push(M,w,w,A,A,M)}}let m=new(p.count>=65535?ea:ta)(d,1);m.version=x;let g=r.get(f);g&&t.remove(g),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Wv(s,t,e){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),e.update(d,i,1)}function c(f,d,u){u!==0&&(s.drawElementsInstanced(i,d,r,f*a,u),e.update(d,i,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let x=0;for(let m=0;m<u;m++)x+=d[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qv(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Xv(s,t,e){let i=new WeakMap,n=new we;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;u===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*f),A=new Jr(w,y,M,f);A.type=vi,A.needsUpdate=!0;let _=b*4;for(let P=0;P<f;P++){let I=m[P],N=g[P],U=v[P],D=y*M*4*P;for(let B=0;B<I.count;B++){let q=B*_;u===!0&&(n.fromBufferAttribute(I,B),w[D+q+0]=n.x,w[D+q+1]=n.y,w[D+q+2]=n.z,w[D+q+3]=0),p===!0&&(n.fromBufferAttribute(N,B),w[D+q+4]=n.x,w[D+q+5]=n.y,w[D+q+6]=n.z,w[D+q+7]=0),x===!0&&(n.fromBufferAttribute(U,B),w[D+q+8]=n.x,w[D+q+9]=n.y,w[D+q+10]=n.z,w[D+q+11]=U.itemSize===4?n.w:1)}}d={count:f,texture:A,size:new Q(y,M)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let x=0;x<c.length;x++)u+=c[x];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Yv(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,f=c.geometry,d=t.get(c,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var $v={[Ca]:"LINEAR_TONE_MAPPING",[Pa]:"REINHARD_TONE_MAPPING",[Ia]:"CINEON_TONE_MAPPING",[fs]:"ACES_FILMIC_TONE_MAPPING",[Da]:"AGX_TONE_MAPPING",[Na]:"NEUTRAL_TONE_MAPPING",[La]:"CUSTOM_TONE_MAPPING"};function Zv(s,t,e,i,n,r){let a=new Pe(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qt;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new nt(c,h),d=new On(-1,1,1,-1,0,1),u=null,p=null,x=!1,m,g=null,v=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<v.length;w++){let A=v[w];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let M=a.width,w=a.height;v.length>0&&o===null&&(o=new Pe(M,w,{type:Ve,depthBuffer:!1,stencilBuffer:!1}),l=new Pe(M,w,{type:Ve,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(M,w)}},this.begin=function(y,M){if(x||y.toneMapping===Hi&&v.length===0)return!1;if(g=M,M!==null){let w=M.width,A=M.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return b===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Hi,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=m,x=!0;let w=a,A=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(y,A,w,M),T.needsSwap!==!1&&(w=A,A=A===o?l:o))}if(u!==y.outputColorSpace||p!==y.toneMapping){u=y.outputColorSpace,p=y.toneMapping,h.defines={},ne.getTransfer(u)===de&&(h.defines.SRGB_TRANSFER="");let _=$v[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(f,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var rp=new ai,mu=new zn(1,1),ap=new Jr,op=new Zo,lp=new ra,Of=[],Hf=[],Gf=new Float32Array(16),Vf=new Float32Array(9),Wf=new Float32Array(4);function Sr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Of[n];if(r===void 0&&(r=new Float32Array(n),Of[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Je(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ke(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function gc(s,t){let e=Hf[t];e===void 0&&(e=new Int32Array(t),Hf[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function jv(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2fv(this.addr,t),Ke(e,t)}}function Kv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;s.uniform3fv(this.addr,t),Ke(e,t)}}function Qv(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4fv(this.addr,t),Ke(e,t)}}function ty(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;Wf.set(i),s.uniformMatrix2fv(this.addr,!1,Wf),Ke(e,i)}}function ey(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;Vf.set(i),s.uniformMatrix3fv(this.addr,!1,Vf),Ke(e,i)}}function iy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(Je(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,i))return;Gf.set(i),s.uniformMatrix4fv(this.addr,!1,Gf),Ke(e,i)}}function ny(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2iv(this.addr,t),Ke(e,t)}}function ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;s.uniform3iv(this.addr,t),Ke(e,t)}}function ay(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4iv(this.addr,t),Ke(e,t)}}function oy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ly(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;s.uniform2uiv(this.addr,t),Ke(e,t)}}function cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;s.uniform3uiv(this.addr,t),Ke(e,t)}}function hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;s.uniform4uiv(this.addr,t),Ke(e,t)}}function uy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(mu.compareFunction=e.isReversedDepthBuffer()?cc:lc,r=mu):r=rp,e.setTexture2D(t||r,n)}function dy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||op,n)}function fy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||lp,n)}function py(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||ap,n)}function my(s){switch(s){case 5126:return jv;case 35664:return Jv;case 35665:return Kv;case 35666:return Qv;case 35674:return ty;case 35675:return ey;case 35676:return iy;case 5124:case 35670:return ny;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return ay;case 5125:return oy;case 36294:return ly;case 36295:return cy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return uy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return fy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(s,t){s.uniform1fv(this.addr,t)}function xy(s,t){let e=Sr(t,this.size,2);s.uniform2fv(this.addr,e)}function vy(s,t){let e=Sr(t,this.size,3);s.uniform3fv(this.addr,e)}function yy(s,t){let e=Sr(t,this.size,4);s.uniform4fv(this.addr,e)}function _y(s,t){let e=Sr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function by(s,t){let e=Sr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function My(s,t){let e=Sr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Sy(s,t){s.uniform1iv(this.addr,t)}function wy(s,t){s.uniform2iv(this.addr,t)}function Ey(s,t){s.uniform3iv(this.addr,t)}function Ty(s,t){s.uniform4iv(this.addr,t)}function Ay(s,t){s.uniform1uiv(this.addr,t)}function Ry(s,t){s.uniform2uiv(this.addr,t)}function Cy(s,t){s.uniform3uiv(this.addr,t)}function Py(s,t){s.uniform4uiv(this.addr,t)}function Iy(s,t,e){let i=this.cache,n=t.length,r=gc(e,n);Je(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=mu:a=rp;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function Ly(s,t,e){let i=this.cache,n=t.length,r=gc(e,n);Je(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||op,r[a])}function Dy(s,t,e){let i=this.cache,n=t.length,r=gc(e,n);Je(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||lp,r[a])}function Ny(s,t,e){let i=this.cache,n=t.length,r=gc(e,n);Je(i,r)||(s.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||ap,r[a])}function Fy(s){switch(s){case 5126:return gy;case 35664:return xy;case 35665:return vy;case 35666:return yy;case 35674:return _y;case 35675:return by;case 35676:return My;case 5124:case 35670:return Sy;case 35667:case 35671:return wy;case 35668:case 35672:return Ey;case 35669:case 35673:return Ty;case 5125:return Ay;case 36294:return Ry;case 36295:return Cy;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Ly;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ny}}var gu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=my(e.type)}},xu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fy(e.type)}},vu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},fu=/(\w+)(\])?(\[|\.)?/g;function qf(s,t){s.seq.push(t),s.map[t.id]=t}function zy(s,t,e){let i=s.name,n=i.length;for(fu.lastIndex=0;;){let r=fu.exec(i),a=fu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){qf(e,c===void 0?new gu(o,s,t):new xu(o,s,t));break}else{let f=e.map[o];f===void 0&&(f=new vu(o),qf(e,f)),e=f}}}var Mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);zy(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function Xf(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Uy=37297,ky=0;function By(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Yf=new Zt;function Oy(s){ne._getMatrix(Yf,ne.workingColorSpace,s);let t=`mat3( ${Yf.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Zr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function $f(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+By(s.getShaderSource(t),o)}else return r}function Hy(s,t){let e=Oy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Gy={[Ca]:"Linear",[Pa]:"Reinhard",[Ia]:"Cineon",[fs]:"ACESFilmic",[Da]:"AgX",[Na]:"Neutral",[La]:"Custom"};function Vy(s,t){let e=Gy[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new R;function Wy(){ne.getLuminanceCoefficients(uc);let s=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function Xy(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yy(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xa(s){return s!==""}function Zf(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jf(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $y=/^[ \t]*#include +<([\w\d./]+)>/gm;function yu(s){return s.replace($y,jy)}var Zy=new Map;function jy(s,t){let e=ee[t];if(e===void 0){let i=Zy.get(t);if(i!==void 0)e=ee[i],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return yu(e)}var Jy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(s){return s.replace(Jy,Ky)}function Ky(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Kf(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Qy={[Ra]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function t_(s){return Qy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[Vn]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[Fa]:"ENVMAP_TYPE_CUBE_UV"};function i_(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":e_[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var n_={[ps]:"ENVMAP_MODE_REFRACTION"};function s_(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var r_={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[df]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function a_(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":r_[s.combine]||"ENVMAP_BLENDING_NONE"}function o_(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function l_(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=t_(e),c=i_(e),h=s_(e),f=a_(e),d=o_(e),u=qy(e),p=Xy(r),x=n.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Xa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Xa).join(`
`),g.length>0&&(g+=`
`)):(m=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),g=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Hi?Vy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,Hy("linearToOutputTexel",e.outputColorSpace),Wy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xa).join(`
`)),a=yu(a),a=Zf(a,e),a=jf(a,e),o=yu(o),o=Zf(o,e),o=jf(o,e),a=Jf(a),o=Jf(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+m+a,y=v+g+o,M=Xf(n,n.VERTEX_SHADER,b),w=Xf(n,n.FRAGMENT_SHADER,y);n.attachShader(x,M),n.attachShader(x,w),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x)||"",U=n.getShaderInfoLog(M)||"",D=n.getShaderInfoLog(w)||"",B=N.trim(),q=U.trim(),X=D.trim(),st=!0,G=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,M,w);else{let Y=$f(n,M,"vertex"),$=$f(n,w,"fragment");Wt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+Y+`
`+$)}else B!==""?Ot("WebGLProgram: Program Info Log:",B):(q===""||X==="")&&(G=!1);G&&(I.diagnostics={runnable:st,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:g}})}n.deleteShader(M),n.deleteShader(w),_=new Mr(n,x),T=Yy(n,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,Uy)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ky++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var c_=0,_u=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new bu(t),e.set(t,i)),i}},bu=class{constructor(t){this.id=c_++,this.code=t,this.usedTimes=0}};function h_(s){return s===Xn||s===Ha||s===Ga}function u_(s,t,e,i,n,r){let a=new Kr,o=new _u,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,I,N,U){let D=I.fog,B=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||q,X),G=st&&st.mapping===Fa?st.image.height:null,Y=u[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Ot("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,At=$!==void 0?$.length:0,pt=0;B.morphAttributes.position!==void 0&&(pt=1),B.morphAttributes.normal!==void 0&&(pt=2),B.morphAttributes.color!==void 0&&(pt=3);let Xt,Bt,ce,J;if(Y){let Re=en[Y];Xt=Re.vertexShader,Bt=Re.fragmentShader}else{Xt=_.vertexShader,Bt=_.fragmentShader;let Re=o.getVertexShaderStage(_),ge=o.getFragmentShaderStage(_);o.update(_,Re,ge),ce=Re.id,J=ge.id}let et=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),qt=N.isInstancedMesh===!0,Et=N.isBatchedMesh===!0,Yt=!!_.map,_e=!!_.matcap,it=!!st,at=!!_.aoMap,ot=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,ft=!!_.normalMap,Ht=!!_.displacementMap,kt=!!_.emissiveMap,$t=!!_.metalnessMap,jt=!!_.roughnessMap,L=_.anisotropy>0,me=_.clearcoat>0,re=_.dispersion>0,C=_.retroreflectivity>0,S=_.iridescence>0,k=_.sheen>0,V=_.transmission>0,Z=L&&!!_.anisotropyMap,ut=me&&!!_.clearcoatMap,dt=me&&!!_.clearcoatNormalMap,j=me&&!!_.clearcoatRoughnessMap,tt=S&&!!_.iridescenceMap,mt=S&&!!_.iridescenceThicknessMap,Nt=k&&!!_.sheenColorMap,_t=k&&!!_.sheenRoughnessMap,gt=!!_.specularMap,Ft=!!_.specularColorMap,Gt=!!_.specularIntensityMap,Kt=V&&!!_.transmissionMap,z=V&&!!_.thicknessMap,xt=!!_.gradientMap,K=!!_.alphaMap,vt=_.alphaTest>0,wt=!!_.alphaHash,rt=!!_.extensions,Ut=Hi;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ut=s.toneMapping);let It={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:Bt,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Et,batchingColor:Et&&N._colorsTexture!==null,instancing:qt,instancingColor:qt&&N.instanceColor!==null,instancingMorph:qt&&N.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:_e,envMap:it,envMapMode:it&&st.mapping,envMapCubeUVHeight:G,aoMap:at,lightMap:ot,bumpMap:lt,normalMap:ft,displacementMap:Ht,emissiveMap:kt,normalMapObjectSpace:ft&&_.normalMapType===gf,normalMapTangentSpace:ft&&_.normalMapType===yr,packedNormalMap:ft&&_.normalMapType===yr&&h_(_.normalMap.format),metalnessMap:$t,roughnessMap:jt,anisotropy:L,anisotropyMap:Z,clearcoat:me,clearcoatMap:ut,clearcoatNormalMap:dt,clearcoatRoughnessMap:j,dispersion:re,retroreflection:C,iridescence:S,iridescenceMap:tt,iridescenceThicknessMap:mt,sheen:k,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:gt,specularColorMap:Ft,specularIntensityMap:Gt,transmission:V,transmissionMap:Kt,thicknessMap:z,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Gn&&_.alphaToCoverage===!1,alphaMap:K,alphaTest:vt,alphaHash:wt,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:ot&&p(_.lightMap.channel),bumpMapUv:lt&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:Ht&&p(_.displacementMap.channel),emissiveMapUv:kt&&p(_.emissiveMap.channel),metalnessMapUv:$t&&p(_.metalnessMap.channel),roughnessMapUv:jt&&p(_.roughnessMap.channel),anisotropyMapUv:Z&&p(_.anisotropyMap.channel),clearcoatMapUv:ut&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:dt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:_t&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:Ft&&p(_.specularColorMap.channel),specularIntensityMapUv:Gt&&p(_.specularIntensityMap.channel),transmissionMapUv:Kt&&p(_.transmissionMap.channel),thicknessMapUv:z&&p(_.thicknessMap.channel),alphaMapUv:K&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ft||L),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Yt||K),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:pt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:kt&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ie,flipSided:_.side===je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(T,_),v(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let T=u[_.type],P;if(T){let I=en[T];P=Vi.clone(I.uniforms)}else P=_.uniforms;return P}function y(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new l_(s,T,_,n),c.push(P),h.set(T,P)),P}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function d_(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function f_(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tp(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,p,x,m,g){let v=s[t];return v===void 0?(v={id:d.id,object:d,geometry:u,material:p,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:g},s[t]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=p,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=g),t++,v}function l(d,u,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let b=o(d,u,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(d,u,p,x,m,g){let v=o(d,u,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(d,u){e.length>1&&e.sort(d||f_),i.length>1&&i.sort(u||Qf),n.length>1&&n.sort(u||Qf)}function f(){for(let d=t,u=s.length;d<u;d++){let p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:f,sort:h}}function p_(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new tp,s.set(i,[a])):n>=r.length?(a=new tp,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function m_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ct};break;case"SpotLight":e={position:new R,direction:new R,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":e={color:new ct,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function g_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var x_=0;function v_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function y_(s){let t=new m_,e=g_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,r=new he,a=new he;function o(c){let h=0,f=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,v=0,b=0,y=0,M=0,w=0,A=0,_=0,T=0,P=0;c.sort(v_);for(let N=0,U=c.length;N<U;N++){let D=c[N],B=D.color,q=D.intensity,X=D.distance,st=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xn?st=D.shadow.map.texture:st=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*q,f+=B.g*q,d+=B.b*q;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],q);P++}else if(D.isSunLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,$=e.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=st;let At=Y.getViewportCount();for(let pt=0;pt<At;pt++)i.sunShadowMatrix[x+pt]=Y.getMatrix(pt),i.sunShadowCascade[x+pt]=Y._cascadeData[pt];x+=At,p++}i.sun[u]=G,u++}else if(D.isDirectionalLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Y=D.shadow,$=e.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=G,m++}else if(D.isSpotLight){let G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(B).multiplyScalar(q),G.distance=X,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[v]=G;let Y=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,Y.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=Y.matrix,D.castShadow){let $=e.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=st,A++}v++}else if(D.isRectAreaLight){let G=t.get(D);G.color.copy(B).multiplyScalar(q),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=G,b++}else if(D.isPointLight){let G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){let Y=D.shadow,$=e.get(D);$.shadowIntensity=Y.intensity,$.shadowBias=Y.bias,$.shadowNormalBias=Y.normalBias,$.shadowRadius=Y.radius,$.shadowMapSize=Y.mapSize,$.shadowCameraNear=Y.camera.near,$.shadowCameraFar=Y.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=D.shadow.matrix,w++}i.point[g]=G,g++}else if(D.isHemisphereLight){let G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(q),G.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[y]=G,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let I=i.hash;(I.sunLength!==u||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==P)&&(i.sun.length=u,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,I.sunLength=u,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=P,i.version=x_++)}function l(c,h){let f=0,d=0,u=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let M=i.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),f++}else if(y.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),d++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=i.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function ep(s){let t=new y_(s),e=[],i=[],n=[];function r(d){f.camera=d,e.length=0,i.length=0,n.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){n.push(d)}function c(){t.setup(e)}function h(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function __(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new ep(s),t.set(n,[o])):r>=a.length?(o=new ep(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var b_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,S_=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],w_=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],ip=new he,qa=new R,pu=new R;function E_(s,t,e){let i=new or,n=new Q,r=new Q,a=new we,o=new rl,l=new al,c={},h=e.maxTextureSize,f={[Hn]:je,[je]:Hn,[Ie]:Ie},d=new Me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:b_,fragmentShader:M_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let p=new Qt;p.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new nt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let g=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===bl&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ra);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Di),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let U=g!==this.type;U&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=w.length;D<B;D++){let q=w[D],X=q.shadow;if(X===void 0){Ot("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let st=X.getFrameExtents();n.multiply(st),r.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/st.x),n.x=r.x*st.x,X.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/st.y),n.y=r.y*st.y,X.mapSize.y=r.y));let G=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=G,X.map===null||U===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===mr){if(q.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Pe(n.x,n.y,{format:Xn,type:Ve,minFilter:ei,magFilter:ei,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new zn(n.x,n.y,vi),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=ji,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke}else q.isPointLight?(X.map=new fc(n.x),X.map.depthTexture=new Qo(n.x,Gi)):(X.map=new Pe(n.x,n.y),X.map.depthTexture=new zn(n.x,n.y,Gi)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=ji,this.type===Ra?(X.map.depthTexture.compareFunction=G?cc:lc,X.map.depthTexture.minFilter=ei,X.map.depthTexture.magFilter=ei):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ke,X.map.depthTexture.magFilter=ke);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);let Y=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,_);for(let $=0;$<Y;$++){let At=X.getCamera($);if(q.isPointLight){let pt=X.camera,Xt=X.matrix,Bt=q.distance||pt.far;Bt!==pt.far&&(pt.far=Bt,pt.updateProjectionMatrix()),qa.setFromMatrixPosition(q.matrixWorld),pt.position.copy(qa),pu.copy(pt.position),pu.add(S_[$]),pt.up.copy(w_[$]),pt.lookAt(pu),pt.updateMatrixWorld(),Xt.makeTranslation(-qa.x,-qa.y,-qa.z),ip.multiplyMatrices(pt.projectionMatrix,pt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ip,pt.coordinateSystem,pt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,$),s.clear();else{$===0&&(s.setRenderTarget(X.map),s.clear());let pt=X.getViewport($);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),N.viewport(a)}i=X.getFrustum($),y(A,_,At,q,this.type)}X.isPointLightShadow!==!0&&this.type===mr&&v(X,_),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,I)};function v(w,A){let _=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pe(n.x,n.y,{format:Xn,type:Ve}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,x,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,_,u,x,null)}function b(w,A,_,T){let P=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=P.uuid,U=A.uuid,D=c[N];D===void 0&&(D={},c[N]=D);let B=D[U];B===void 0&&(B=P.clone(),D[U]=B,A.addEventListener("dispose",M)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,T===mr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=s.properties.get(P);N.light=_}return P}function y(w,A,_,T,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===mr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let U=t.update(w),D=w.material;if(Array.isArray(D)){let B=U.groups;for(let q=0,X=B.length;q<X;q++){let st=B[q],G=D[st.materialIndex];if(G&&G.visible){let Y=b(w,G,T,P);w.onBeforeShadow(s,w,A,_,U,Y,st),s.renderBufferDirect(_,null,U,Y,w,st),w.onAfterShadow(s,w,A,_,U,Y,st)}}}else if(D.visible){let B=b(w,D,T,P);w.onBeforeShadow(s,w,A,_,U,B,null),s.renderBufferDirect(_,null,U,B,w,null),w.onAfterShadow(s,w,A,_,U,B,null)}}let N=w.children;for(let U=0,D=N.length;U<D;U++)y(N[U],A,_,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function T_(s,t){function e(){let z=!1,xt=new we,K=null,vt=new we(0,0,0,0);return{setMask:function(wt){K!==wt&&!z&&(s.colorMask(wt,wt,wt,wt),K=wt)},setLocked:function(wt){z=wt},setClear:function(wt,rt,Ut,It,Re){Re===!0&&(wt*=It,rt*=It,Ut*=It),xt.set(wt,rt,Ut,It),vt.equals(xt)===!1&&(s.clearColor(wt,rt,Ut,It),vt.copy(xt))},reset:function(){z=!1,K=null,vt.set(-1,0,0,0)}}}function i(){let z=!1,xt=!1,K=null,vt=null,wt=null;return{setReversed:function(rt){if(xt!==rt){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let It=wt;wt=null,this.setClear(It)}},getReversed:function(){return xt},setTest:function(rt){rt?et(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(rt){K!==rt&&!z&&(s.depthMask(rt),K=rt)},setFunc:function(rt){if(xt&&(rt=Af[rt]),vt!==rt){switch(rt){case ko:s.depthFunc(s.NEVER);break;case Bo:s.depthFunc(s.ALWAYS);break;case Oo:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Ho:s.depthFunc(s.EQUAL);break;case Go:s.depthFunc(s.GEQUAL);break;case Vo:s.depthFunc(s.GREATER);break;case Wo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){wt!==rt&&(wt=rt,xt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){z=!1,K=null,vt=null,wt=null,xt=!1}}}function n(){let z=!1,xt=null,K=null,vt=null,wt=null,rt=null,Ut=null,It=null,Re=null;return{setTest:function(ge){z||(ge?et(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(ge){xt!==ge&&!z&&(s.stencilMask(ge),xt=ge)},setFunc:function(ge,Fi,Wi){(K!==ge||vt!==Fi||wt!==Wi)&&(s.stencilFunc(ge,Fi,Wi),K=ge,vt=Fi,wt=Wi)},setOp:function(ge,Fi,Wi){(rt!==ge||Ut!==Fi||It!==Wi)&&(s.stencilOp(ge,Fi,Wi),rt=ge,Ut=Fi,It=Wi)},setLocked:function(ge){z=ge},setClear:function(ge){Re!==ge&&(s.clearStencil(ge),Re=ge)},reset:function(){z=!1,xt=null,K=null,vt=null,wt=null,rt=null,Ut=null,It=null,Re=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},f={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,M=null,w=null,A=null,_=new ct(0,0,0),T=0,P=!1,I=null,N=null,U=null,D=null,B=null,q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(G)[1]),X=st>=1):G.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),X=st>=2);let Y=null,$={},At=s.getParameter(s.SCISSOR_BOX),pt=s.getParameter(s.VIEWPORT),Xt=new we().fromArray(At),Bt=new we().fromArray(pt);function ce(z,xt,K,vt){let wt=new Uint8Array(4),rt=s.createTexture();s.bindTexture(z,rt),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<K;Ut++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,wt):s.texImage2D(xt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,wt);return rt}let J={};J[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(s.DEPTH_TEST),a.setFunc(Js),lt(!1),ft(kh),et(s.CULL_FACE),at(Di);function et(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function bt(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function qt(z,xt){return d[z]!==xt?(s.bindFramebuffer(z,xt),d[z]=xt,z===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=xt),z===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Et(z,xt){let K=p,vt=!1;if(z){K=u.get(xt),K===void 0&&(K=[],u.set(xt,K));let wt=z.textures;if(K.length!==wt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Ut=wt.length;rt<Ut;rt++)K[rt]=s.COLOR_ATTACHMENT0+rt;K.length=wt.length,vt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,vt=!0);vt&&s.drawBuffers(K)}function Yt(z){return x!==z?(s.useProgram(z),x=z,!0):!1}let _e={[ds]:s.FUNC_ADD,[$d]:s.FUNC_SUBTRACT,[Zd]:s.FUNC_REVERSE_SUBTRACT};_e[jd]=s.MIN,_e[Jd]=s.MAX;let it={[Kd]:s.ZERO,[Qd]:s.ONE,[tf]:s.SRC_COLOR,[Hh]:s.SRC_ALPHA,[of]:s.SRC_ALPHA_SATURATE,[rf]:s.DST_COLOR,[nf]:s.DST_ALPHA,[ef]:s.ONE_MINUS_SRC_COLOR,[Gh]:s.ONE_MINUS_SRC_ALPHA,[af]:s.ONE_MINUS_DST_COLOR,[sf]:s.ONE_MINUS_DST_ALPHA,[lf]:s.CONSTANT_COLOR,[cf]:s.ONE_MINUS_CONSTANT_COLOR,[hf]:s.CONSTANT_ALPHA,[uf]:s.ONE_MINUS_CONSTANT_ALPHA};function at(z,xt,K,vt,wt,rt,Ut,It,Re,ge){if(z===Di){m===!0&&(bt(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),z!==Yd){if(z!==g||ge!==P){if((v!==ds||M!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,M=ds),ge)switch(z){case Gn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ii:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Wt("WebGLState: Invalid blending: ",z);break}else switch(z){case Gn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",z);break}b=null,y=null,w=null,A=null,_.set(0,0,0),T=0,g=z,P=ge}return}wt=wt||xt,rt=rt||K,Ut=Ut||vt,(xt!==v||wt!==M)&&(s.blendEquationSeparate(_e[xt],_e[wt]),v=xt,M=wt),(K!==b||vt!==y||rt!==w||Ut!==A)&&(s.blendFuncSeparate(it[K],it[vt],it[rt],it[Ut]),b=K,y=vt,w=rt,A=Ut),(It.equals(_)===!1||Re!==T)&&(s.blendColor(It.r,It.g,It.b,Re),_.copy(It),T=Re),g=z,P=!1}function ot(z,xt){z.side===Ie?bt(s.CULL_FACE):et(s.CULL_FACE);let K=z.side===je;xt&&(K=!K),lt(K),z.blending===Gn&&z.transparent===!1?at(Di):at(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),r.setMask(z.colorWrite);let vt=z.stencilWrite;o.setTest(vt),vt&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(z){I!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),I=z)}function ft(z){z!==qd?(et(s.CULL_FACE),z!==N&&(z===kh?s.cullFace(s.BACK):z===Xd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),N=z}function Ht(z){z!==U&&(X&&s.lineWidth(z),U=z)}function kt(z,xt,K){z?(et(s.POLYGON_OFFSET_FILL),(D!==xt||B!==K)&&(D=xt,B=K,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,K))):bt(s.POLYGON_OFFSET_FILL)}function $t(z){z?et(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function jt(z){z===void 0&&(z=s.TEXTURE0+q-1),Y!==z&&(s.activeTexture(z),Y=z)}function L(z,xt,K){K===void 0&&(Y===null?K=s.TEXTURE0+q-1:K=Y);let vt=$[K];vt===void 0&&(vt={type:void 0,texture:void 0},$[K]=vt),(vt.type!==z||vt.texture!==xt)&&(Y!==K&&(s.activeTexture(K),Y=K),s.bindTexture(z,xt||J[z]),vt.type=z,vt.texture=xt)}function me(){let z=$[Y];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{s.compressedTexImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function S(){try{s.texSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function k(){try{s.texSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function ut(){try{s.texStorage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function dt(){try{s.texStorage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function j(){try{s.texImage2D(...arguments)}catch(z){Wt("WebGLState:",z)}}function tt(){try{s.texImage3D(...arguments)}catch(z){Wt("WebGLState:",z)}}function mt(z){return f[z]!==void 0?f[z]:s.getParameter(z)}function Nt(z,xt){f[z]!==xt&&(s.pixelStorei(z,xt),f[z]=xt)}function _t(z){Xt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Xt.copy(z))}function gt(z){Bt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Bt.copy(z))}function Ft(z,xt){let K=c.get(xt);K===void 0&&(K=new WeakMap,c.set(xt,K));let vt=K.get(z);vt===void 0&&(vt=s.getUniformBlockIndex(xt,z.name),K.set(z,vt))}function Gt(z,xt){let vt=c.get(xt).get(z);l.get(xt)!==vt&&(s.uniformBlockBinding(xt,vt,z.__bindingPointIndex),l.set(xt,vt))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,$={},d={},u=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,M=null,w=null,A=null,_=new ct(0,0,0),T=0,P=!1,I=null,N=null,U=null,D=null,B=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:bt,bindFramebuffer:qt,drawBuffers:Et,useProgram:Yt,setBlending:at,setMaterial:ot,setFlipSided:lt,setCullFace:ft,setLineWidth:Ht,setPolygonOffset:kt,setScissorTest:$t,activeTexture:jt,bindTexture:L,unbindTexture:me,compressedTexImage2D:re,compressedTexImage3D:C,texImage2D:j,texImage3D:tt,pixelStorei:Nt,getParameter:mt,updateUBOMapping:Ft,uniformBlockBinding:Gt,texStorage2D:ut,texStorage3D:dt,texSubImage2D:S,texSubImage3D:k,compressedTexSubImage2D:V,compressedTexSubImage3D:Z,scissor:_t,viewport:gt,reset:Kt}}function A_(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Q,h=new WeakMap,f=new Set,d,u=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,S){return p?new OffscreenCanvas(C,S):tr("canvas")}function m(C,S,k){let V=1,Z=re(C);if((Z.width>k||Z.height>k)&&(V=k/Math.max(Z.width,Z.height)),V<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(V*Z.width),dt=Math.floor(V*Z.height);d===void 0&&(d=x(ut,dt));let j=S?x(ut,dt):d;return j.width=ut,j.height=dt,j.getContext("2d").drawImage(C,0,0,ut,dt),Ot("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ut+"x"+dt+")."),j}else return"data"in C&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function g(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,S,k,V,Z,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let dt;V&&(dt=t.get("EXT_texture_norm16"),dt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===s.RED&&(k===s.FLOAT&&(j=s.R32F),k===s.HALF_FLOAT&&(j=s.R16F),k===s.UNSIGNED_BYTE&&(j=s.R8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.R16_EXT),k===s.SHORT&&dt&&(j=dt.R16_SNORM_EXT)),S===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.R8UI),k===s.UNSIGNED_SHORT&&(j=s.R16UI),k===s.UNSIGNED_INT&&(j=s.R32UI),k===s.BYTE&&(j=s.R8I),k===s.SHORT&&(j=s.R16I),k===s.INT&&(j=s.R32I)),S===s.RG&&(k===s.FLOAT&&(j=s.RG32F),k===s.HALF_FLOAT&&(j=s.RG16F),k===s.UNSIGNED_BYTE&&(j=s.RG8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.RG16_EXT),k===s.SHORT&&dt&&(j=dt.RG16_SNORM_EXT)),S===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RG8UI),k===s.UNSIGNED_SHORT&&(j=s.RG16UI),k===s.UNSIGNED_INT&&(j=s.RG32UI),k===s.BYTE&&(j=s.RG8I),k===s.SHORT&&(j=s.RG16I),k===s.INT&&(j=s.RG32I)),S===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGB8UI),k===s.UNSIGNED_SHORT&&(j=s.RGB16UI),k===s.UNSIGNED_INT&&(j=s.RGB32UI),k===s.BYTE&&(j=s.RGB8I),k===s.SHORT&&(j=s.RGB16I),k===s.INT&&(j=s.RGB32I)),S===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),k===s.UNSIGNED_INT&&(j=s.RGBA32UI),k===s.BYTE&&(j=s.RGBA8I),k===s.SHORT&&(j=s.RGBA16I),k===s.INT&&(j=s.RGBA32I)),S===s.RGB&&(k===s.UNSIGNED_SHORT&&dt&&(j=dt.RGB16_EXT),k===s.SHORT&&dt&&(j=dt.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(j=s.R11F_G11F_B10F)),S===s.RGBA){let tt=ut?Zr:ne.getTransfer(Z);k===s.FLOAT&&(j=s.RGBA32F),k===s.HALF_FLOAT&&(j=s.RGBA16F),k===s.UNSIGNED_BYTE&&(j=tt===de?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&dt&&(j=dt.RGBA16_EXT),k===s.SHORT&&dt&&(j=dt.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function M(C,S){let k;return C?S===null||S===Gi||S===xr?k=s.DEPTH24_STENCIL8:S===vi?k=s.DEPTH32F_STENCIL8:S===gr&&(k=s.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===xr?k=s.DEPTH_COMPONENT24:S===vi?k=s.DEPTH_COMPONENT32F:S===gr&&(k=s.DEPTH_COMPONENT16),k}function w(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==ei?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function A(C){let S=C.target;S.removeEventListener("dispose",A),T(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&f.delete(S)}function _(C){let S=C.target;S.removeEventListener("dispose",_),I(S)}function T(C){let S=i.get(C);if(S.__webglInit===void 0)return;let k=C.source,V=u.get(k);if(V){let Z=V[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&P(C),Object.keys(V).length===0&&u.delete(k)}i.remove(C)}function P(C){let S=i.get(C);s.deleteTexture(S.__webglTexture);let k=C.source,V=u.get(k);delete V[S.__cacheKey],a.memory.textures--}function I(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let Z=0;Z<S.__webglFramebuffer[V].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[V][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)s.deleteFramebuffer(S.__webglFramebuffer[V]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let k=C.textures;for(let V=0,Z=k.length;V<Z;V++){let ut=i.get(k[V]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(k[V])}i.remove(C)}let N=0;function U(){N=0}function D(){return N}function B(C){N=C}function q(){let C=N;return C>=n.maxTextures&&Ot("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),N+=1,C}function X(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function st(C,S){let k=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let V=C.image;if(V===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(k,C,S);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+S)}function G(C,S){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){bt(k,C,S);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+S)}function Y(C,S){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){bt(k,C,S);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+S)}function $(C,S){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){qt(k,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+S)}let At={[Ks]:s.REPEAT,[Yi]:s.CLAMP_TO_EDGE,[qo]:s.MIRRORED_REPEAT},pt={[ke]:s.NEAREST,[pf]:s.NEAREST_MIPMAP_NEAREST,[za]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[El]:s.LINEAR_MIPMAP_NEAREST,[Wn]:s.LINEAR_MIPMAP_LINEAR},Xt={[vf]:s.NEVER,[Sf]:s.ALWAYS,[yf]:s.LESS,[lc]:s.LEQUAL,[_f]:s.EQUAL,[cc]:s.GEQUAL,[bf]:s.GREATER,[Mf]:s.NOTEQUAL};function Bt(C,S){if(S.type===vi&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ei||S.magFilter===El||S.magFilter===za||S.magFilter===Wn||S.minFilter===ei||S.minFilter===El||S.minFilter===za||S.minFilter===Wn)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,At[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,At[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,At[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,pt[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,pt[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Xt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ke||S.minFilter!==za&&S.minFilter!==Wn||S.type===vi&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ce(C,S){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",A));let V=S.source,Z=u.get(V);Z===void 0&&(Z={},u.set(V,Z));let ut=X(S);if(ut!==C.__cacheKey){Z[ut]===void 0&&(Z[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[ut].usedTimes++;let dt=Z[C.__cacheKey];dt!==void 0&&(Z[C.__cacheKey].usedTimes--,dt.usedTimes===0&&P(S)),C.__cacheKey=ut,C.__webglTexture=Z[ut].texture}return k}function J(C,S,k){return Math.floor(Math.floor(C/k)/S)}function et(C,S,k,V){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,k,V,S.data);else{ut.sort((Nt,_t)=>Nt.start-_t.start);let dt=0;for(let Nt=1;Nt<ut.length;Nt++){let _t=ut[dt],gt=ut[Nt],Ft=_t.start+_t.count,Gt=J(gt.start,S.width,4),Kt=J(_t.start,S.width,4);gt.start<=Ft+1&&Gt===Kt&&J(gt.start+gt.count-1,S.width,4)===Gt?_t.count=Math.max(_t.count,gt.start+gt.count-_t.start):(++dt,ut[dt]=gt)}ut.length=dt+1;let j=e.getParameter(s.UNPACK_ROW_LENGTH),tt=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,S.width);for(let Nt=0,_t=ut.length;Nt<_t;Nt++){let gt=ut[Nt],Ft=Math.floor(gt.start/4),Gt=Math.ceil(gt.count/4),Kt=Ft%S.width,z=Math.floor(Ft/S.width),xt=Gt,K=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Kt,z,xt,K,k,V,S.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,j),e.pixelStorei(s.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function bt(C,S,k){let V=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=s.TEXTURE_3D);let Z=ce(C,S),ut=S.source;e.bindTexture(V,C.__webglTexture,s.TEXTURE0+k);let dt=i.get(ut);if(ut.version!==dt.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let K=ne.getPrimaries(ne.workingColorSpace),vt=S.colorSpace===Ni?null:ne.getPrimaries(S.colorSpace),wt=S.colorSpace===Ni||K===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment);let tt=m(S.image,!1,n.maxTextureSize);tt=me(S,tt);let mt=r.convert(S.format,S.colorSpace),Nt=r.convert(S.type),_t=y(S.internalFormat,mt,Nt,S.normalized,S.colorSpace,S.isVideoTexture);Bt(V,S);let gt,Ft=S.mipmaps,Gt=S.isVideoTexture!==!0,Kt=dt.__version===void 0||Z===!0,z=ut.dataReady,xt=w(S,tt);if(S.isDepthTexture)_t=M(S.format===qn,S.type),Kt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,_t,tt.width,tt.height):e.texImage2D(s.TEXTURE_2D,0,_t,tt.width,tt.height,0,mt,Nt,null));else if(S.isDataTexture)if(Ft.length>0){Gt&&Kt&&e.texStorage2D(s.TEXTURE_2D,xt,_t,Ft[0].width,Ft[0].height);for(let K=0,vt=Ft.length;K<vt;K++)gt=Ft[K],Gt?z&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(s.TEXTURE_2D,K,_t,gt.width,gt.height,0,mt,Nt,gt.data);S.generateMipmaps=!1}else Gt?(Kt&&e.texStorage2D(s.TEXTURE_2D,xt,_t,tt.width,tt.height),z&&et(S,tt,mt,Nt)):e.texImage2D(s.TEXTURE_2D,0,_t,tt.width,tt.height,0,mt,Nt,tt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,_t,Ft[0].width,Ft[0].height,tt.depth);for(let K=0,vt=Ft.length;K<vt;K++)if(gt=Ft[K],S.format!==yi)if(mt!==null)if(Gt){if(z)if(S.layerUpdates.size>0){let wt=nu(gt.width,gt.height,S.format,S.type);for(let rt of S.layerUpdates){let Ut=gt.data.subarray(rt*wt/gt.data.BYTES_PER_ELEMENT,(rt+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,rt,gt.width,gt.height,1,mt,Ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,tt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,_t,gt.width,gt.height,tt.depth,0,gt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?z&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,gt.width,gt.height,tt.depth,mt,Nt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,_t,gt.width,gt.height,tt.depth,0,mt,Nt,gt.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Gt&&Kt&&e.texStorage2D(s.TEXTURE_2D,xt,_t,Ft[0].width,Ft[0].height);for(let K=0,vt=Ft.length;K<vt;K++)gt=Ft[K],S.format!==yi?mt!==null?Gt?z&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,_t,gt.width,gt.height,0,gt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?z&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(s.TEXTURE_2D,K,_t,gt.width,gt.height,0,mt,Nt,gt.data)}else if(S.isDataArrayTexture)if(Gt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,_t,tt.width,tt.height,tt.depth),z)if(S.layerUpdates.size>0){let K=nu(tt.width,tt.height,S.format,S.type);for(let vt of S.layerUpdates){let wt=tt.data.subarray(vt*K/tt.data.BYTES_PER_ELEMENT,(vt+1)*K/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,tt.width,tt.height,1,mt,Nt,wt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,mt,Nt,tt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,_t,tt.width,tt.height,tt.depth,0,mt,Nt,tt.data);else if(S.isData3DTexture)Gt?(Kt&&e.texStorage3D(s.TEXTURE_3D,xt,_t,tt.width,tt.height,tt.depth),z&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,mt,Nt,tt.data)):e.texImage3D(s.TEXTURE_3D,0,_t,tt.width,tt.height,tt.depth,0,mt,Nt,tt.data);else if(S.isFramebufferTexture){if(Kt)if(Gt)e.texStorage2D(s.TEXTURE_2D,xt,_t,tt.width,tt.height);else{let K=tt.width,vt=tt.height;for(let wt=0;wt<xt;wt++)e.texImage2D(s.TEXTURE_2D,wt,_t,K,vt,0,mt,Nt,null),K>>=1,vt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in s){let K=s.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),tt.parentNode!==K){K.appendChild(tt),f.add(S),K.onpaint=vt=>{let wt=vt.changedElements;for(let rt of f)wt.includes(rt.image)&&(rt.needsUpdate=!0)},K.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,tt);else{let wt=s.RGBA,rt=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,wt,rt,Ut,tt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Gt&&Kt){let K=re(Ft[0]);e.texStorage2D(s.TEXTURE_2D,xt,_t,K.width,K.height)}for(let K=0,vt=Ft.length;K<vt;K++)gt=Ft[K],Gt?z&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,mt,Nt,gt):e.texImage2D(s.TEXTURE_2D,K,_t,mt,Nt,gt);S.generateMipmaps=!1}else if(Gt){if(Kt){let K=re(tt);e.texStorage2D(s.TEXTURE_2D,xt,_t,K.width,K.height)}z&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Nt,tt)}else e.texImage2D(s.TEXTURE_2D,0,_t,mt,Nt,tt);g(S)&&v(V),dt.__version=ut.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function qt(C,S,k){if(S.image.length!==6)return;let V=ce(C,S),Z=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);let ut=i.get(Z);if(Z.version!==ut.__version||V===!0){e.activeTexture(s.TEXTURE0+k);let dt=ne.getPrimaries(ne.workingColorSpace),j=S.colorSpace===Ni?null:ne.getPrimaries(S.colorSpace),tt=S.colorSpace===Ni||dt===j?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let mt=S.isCompressedTexture||S.image[0].isCompressedTexture,Nt=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let rt=0;rt<6;rt++)!mt&&!Nt?_t[rt]=m(S.image[rt],!0,n.maxCubemapSize):_t[rt]=Nt?S.image[rt].image:S.image[rt],_t[rt]=me(S,_t[rt]);let gt=_t[0],Ft=r.convert(S.format,S.colorSpace),Gt=r.convert(S.type),Kt=y(S.internalFormat,Ft,Gt,S.normalized,S.colorSpace),z=S.isVideoTexture!==!0,xt=ut.__version===void 0||V===!0,K=Z.dataReady,vt=w(S,gt);Bt(s.TEXTURE_CUBE_MAP,S);let wt;if(mt){z&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Kt,gt.width,gt.height);for(let rt=0;rt<6;rt++){wt=_t[rt].mipmaps;for(let Ut=0;Ut<wt.length;Ut++){let It=wt[Ut];S.format!==yi?Ft!==null?z?K&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,It.width,It.height,Ft,It.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,Kt,It.width,It.height,0,It.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,It.width,It.height,Ft,Gt,It.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,Kt,It.width,It.height,0,Ft,Gt,It.data)}}}else{if(wt=S.mipmaps,z&&xt){wt.length>0&&vt++;let rt=re(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){z?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t[rt].width,_t[rt].height,Ft,Gt,_t[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,_t[rt].width,_t[rt].height,0,Ft,Gt,_t[rt].data);for(let Ut=0;Ut<wt.length;Ut++){let Re=wt[Ut].image[rt].image;z?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Re.width,Re.height,Ft,Gt,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,Kt,Re.width,Re.height,0,Ft,Gt,Re.data)}}else{z?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Gt,_t[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Ft,Gt,_t[rt]);for(let Ut=0;Ut<wt.length;Ut++){let It=wt[Ut];z?K&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Ft,Gt,It.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,Kt,Ft,Gt,It.image[rt])}}}g(S)&&v(s.TEXTURE_CUBE_MAP),ut.__version=Z.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Et(C,S,k,V,Z,ut){let dt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),tt=y(k.internalFormat,dt,j,k.normalized,k.colorSpace),mt=i.get(S),Nt=i.get(k);if(Nt.__renderTarget=S,!mt.__hasExternalTextures){let _t=Math.max(1,S.width>>ut),gt=Math.max(1,S.height>>ut);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ut,tt,_t,gt,S.depth,0,dt,j,null):e.texImage2D(Z,ut,tt,_t,gt,0,dt,j,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),jt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Z,Nt.__webglTexture,0,$t(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Z,Nt.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(C,S,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let V=S.depthTexture,Z=V&&V.isDepthTexture?V.type:null,ut=M(S.stencilBuffer,Z),dt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(S),ut,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(S),ut,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ut,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,C)}else{let V=S.textures;for(let Z=0;Z<V.length;Z++){let ut=V[Z],dt=r.convert(ut.format,ut.colorSpace),j=r.convert(ut.type),tt=y(ut.internalFormat,dt,j,ut.normalized,ut.colorSpace);jt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(S),tt,S.width,S.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(S),tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function _e(C,S,k){let V=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,S.depthTexture);let mt=r.convert(S.depthTexture.format),Nt=r.convert(S.depthTexture.type),_t;S.depthTexture.format===ji?_t=s.DEPTH_COMPONENT24:S.depthTexture.format===qn&&(_t=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,_t,S.width,S.height,0,mt,Nt,null)}}else st(S.depthTexture,0);let ut=Z.__webglTexture,dt=$t(S),j=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,tt=S.depthTexture.format===qn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)jt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,ut,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,ut,0);else if(S.depthTexture.format===qn)jt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,j,ut,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,tt,j,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function it(C){let S=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let V=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",Z)};V.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=V}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(k)for(let V=0;V<6;V++)_e(S.__webglFramebuffer[V],C,V);else{let V=C.texture.mipmaps;V&&V.length>0?_e(S.__webglFramebuffer[0],C,0):_e(S.__webglFramebuffer,C,0)}else if(k){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=s.createRenderbuffer(),Yt(S.__webglDepthbuffer[V],C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ut)}}else{let V=C.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),Yt(S.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,S,k){let V=i.get(C);S!==void 0&&Et(V.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&it(C)}function ot(C){let S=C.texture,k=i.get(C),V=i.get(S);C.addEventListener("dispose",_);let Z=C.textures,ut=C.isWebGLCubeRenderTarget===!0,dt=Z.length>1;if(dt||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=S.version,a.memory.textures++),ut){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let tt=0;tt<S.mipmaps.length;tt++)k.__webglFramebuffer[j][tt]=s.createFramebuffer()}else k.__webglFramebuffer[j]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)k.__webglFramebuffer[j]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(dt)for(let j=0,tt=Z.length;j<tt;j++){let mt=i.get(Z[j]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&jt(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){let tt=Z[j];k.__webglColorRenderbuffer[j]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let mt=r.convert(tt.format,tt.colorSpace),Nt=r.convert(tt.type),_t=y(tt.internalFormat,mt,Nt,tt.normalized,tt.colorSpace,C.isXRRenderTarget===!0),gt=$t(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,_t,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+j,s.RENDERBUFFER,k.__webglColorRenderbuffer[j])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Et(k.__webglFramebuffer[j][tt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else Et(k.__webglFramebuffer[j],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(S)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(dt){for(let j=0,tt=Z.length;j<tt;j++){let mt=Z[j],Nt=i.get(mt),_t=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,Nt.__webglTexture),Bt(_t,mt),Et(k.__webglFramebuffer,C,mt,s.COLOR_ATTACHMENT0+j,_t,0),g(mt)&&v(_t)}e.unbindTexture()}else{let j=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(j=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,V.__webglTexture),Bt(j,S),S.mipmaps&&S.mipmaps.length>0)for(let tt=0;tt<S.mipmaps.length;tt++)Et(k.__webglFramebuffer[tt],C,S,s.COLOR_ATTACHMENT0,j,tt);else Et(k.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,j,0);g(S)&&v(j),e.unbindTexture()}C.depthBuffer&&it(C)}function lt(C){let S=C.textures;for(let k=0,V=S.length;k<V;k++){let Z=S[k];if(g(Z)){let ut=b(C),dt=i.get(Z).__webglTexture;e.bindTexture(ut,dt),v(ut),e.unbindTexture()}}}let ft=[],Ht=[];function kt(C){if(C.samples>0){if(jt(C)===!1){let S=C.textures,k=C.width,V=C.height,Z=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=i.get(C),j=S.length>1;if(j)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,dt.__webglMultisampledFramebuffer);let tt=C.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),j){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Nt=i.get(S[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,k,V,0,0,k,V,Z,s.NEAREST),l===!0&&(ft.length=0,Ht.length=0,ft.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ft.push(ut),Ht.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),j)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,dt.__webglColorRenderbuffer[mt]);let Nt=i.get(S[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,dt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function $t(C){return Math.min(n.maxSamples,C.samples)}function jt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function L(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function me(C,S){let k=C.colorSpace,V=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==$r&&k!==Ni&&(ne.getTransfer(k)===de?(V!==yi||Z!==xi)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",k)),S}function re(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=U,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=$,this.rebindTextures=at,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function R_(s,t){function e(i,n=Ni){let r,a=ne.getTransfer(n);if(i===xi)return s.UNSIGNED_BYTE;if(i===Al)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wh)return s.BYTE;if(i===qh)return s.SHORT;if(i===gr)return s.UNSIGNED_SHORT;if(i===Tl)return s.INT;if(i===Gi)return s.UNSIGNED_INT;if(i===vi)return s.FLOAT;if(i===Ve)return s.HALF_FLOAT;if(i===$h)return s.ALPHA;if(i===Zh)return s.RGB;if(i===yi)return s.RGBA;if(i===ji)return s.DEPTH_COMPONENT;if(i===qn)return s.DEPTH_STENCIL;if(i===vr)return s.RED;if(i===Cl)return s.RED_INTEGER;if(i===Xn)return s.RG;if(i===Pl)return s.RG_INTEGER;if(i===Il)return s.RGBA_INTEGER;if(i===Ua||i===ka||i===Ba||i===Oa)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ua)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ka)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Dl||i===Nl||i===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zl||i===Ul||i===kl||i===Bl||i===Ol||i===Ha||i===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===zl||i===Ul)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===kl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bl)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ha)return r.COMPRESSED_RG11_EAC;if(i===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Vl||i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===Zl||i===jl||i===Jl||i===Kl||i===Ql||i===tc||i===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ql)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tc)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ec)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===nc||i===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rc||i===ac||i===Ga||i===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new aa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Me({vertexShader:C_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new nt(new gi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Su=class extends Ji{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,p=null,x=typeof XRWebGLBinding<"u",m=new Mu,g={},v=e.getContextAttributes(),b=null,y=null,M=[],w=[],A=new Q,_=null,T=null,P=new ti;P.viewport=new we;let I=new ti;I.viewport=new we;let N=[P,I],U=new yl,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=M[J];return et===void 0&&(et=new sr,M[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=M[J];return et===void 0&&(et=new sr,M[J]=et),et.getGripSpace()},this.getHand=function(J){let et=M[J];return et===void 0&&(et=new sr,M[J]=et),et.getHandSpace()};function q(J){let et=w.indexOf(J.inputSource);if(et===-1)return;let bt=M[et];bt!==void 0&&(bt.update(J.inputSource,J.frame,c||a),bt.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){n.removeEventListener("select",q),n.removeEventListener("selectstart",q),n.removeEventListener("selectend",q),n.removeEventListener("squeeze",q),n.removeEventListener("squeezestart",q),n.removeEventListener("squeezeend",q),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",st);for(let J=0;J<M.length;J++){let et=w[J];et!==null&&(w[J]=null,M[J].disconnect(et))}D=null,B=null,m.reset();for(let J in g)delete g[J];if(t.setRenderTarget(b),u=null,d=null,f=null,n=null,y=null,ce.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(n,e)),f},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",q),n.addEventListener("selectstart",q),n.addEventListener("selectend",q),n.addEventListener("squeeze",q),n.addEventListener("squeezestart",q),n.addEventListener("squeezeend",q),n.addEventListener("end",X),n.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,qt=null,Et=null;v.depth&&(Et=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?qn:ji,qt=v.stencil?xr:Gi);let Yt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Yt),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Pe(d.textureWidth,d.textureHeight,{format:yi,type:xi,depthTexture:new zn(d.textureWidth,d.textureHeight,qt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(n,e,bt),n.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Pe(u.framebufferWidth,u.framebufferHeight,{format:yi,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ce.setContext(n),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(J){for(let et=0;et<J.removed.length;et++){let bt=J.removed[et],qt=w.indexOf(bt);qt>=0&&(w[qt]=null,M[qt].disconnect(bt))}for(let et=0;et<J.added.length;et++){let bt=J.added[et],qt=w.indexOf(bt);if(qt===-1){for(let Yt=0;Yt<M.length;Yt++)if(Yt>=w.length){w.push(bt),qt=Yt;break}else if(w[Yt]===null){w[Yt]=bt,qt=Yt;break}if(qt===-1)break}let Et=M[qt];Et&&Et.connect(bt)}}let G=new R,Y=new R;function $(J,et,bt){G.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(bt.matrixWorld);let qt=G.distanceTo(Y),Et=et.projectionMatrix.elements,Yt=bt.projectionMatrix.elements,_e=Et[14]/(Et[10]-1),it=Et[14]/(Et[10]+1),at=(Et[9]+1)/Et[5],ot=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ft=(Yt[8]+1)/Yt[0],Ht=_e*lt,kt=_e*ft,$t=qt/(-lt+ft),jt=$t*-lt;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(jt),J.translateZ($t),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Et[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let L=_e+$t,me=it+$t,re=Ht-jt,C=kt+(qt-jt),S=at*it/me*L,k=ot*it/me*L;J.projectionMatrix.makePerspective(re,C,S,k,L,me),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function At(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let et=J.near,bt=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),U.near=I.near=P.near=et,U.far=I.far=P.far=bt,(D!==U.near||B!==U.far)&&(n.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,B=U.far),U.layers.mask=J.layers.mask|6,P.layers.mask=U.layers.mask&-5,I.layers.mask=U.layers.mask&-3;let qt=J.parent,Et=U.cameras;At(U,qt);for(let Yt=0;Yt<Et.length;Yt++)At(Et[Yt],qt);Et.length===2?$(U,P,I):U.projectionMatrix.copy(P.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),pt(J,U,qt)};function pt(J,et,bt){bt===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(bt.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ir*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return g[J]};let Xt=null;function Bt(J,et){if(h=et.getViewerPose(c||a),p=et,h!==null){let bt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let qt=!1;bt.length!==U.cameras.length&&(U.cameras.length=0,qt=!0);for(let it=0;it<bt.length;it++){let at=bt[it],ot=null;if(u!==null)ot=u.getViewport(at);else{let ft=f.getViewSubImage(d,at);ot=ft.viewport,it===0&&(t.setRenderTargetTextures(y,ft.colorTexture,ft.depthStencilTexture),t.setRenderTarget(y))}let lt=N[it];lt===void 0&&(lt=new ti,lt.layers.enable(it),lt.viewport=new we,N[it]=lt),lt.matrix.fromArray(at.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(at.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ot.x,ot.y,ot.width,ot.height),it===0&&(U.matrix.copy(lt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),qt===!0&&U.cameras.push(lt)}let Et=n.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){f=i.getBinding();let it=f.getDepthInformation(bt[0]);it&&it.isValid&&it.texture&&m.init(it,n.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),f=i.getBinding();for(let it=0;it<bt.length;it++){let at=bt[it].camera;if(at){let ot=g[at];ot||(ot=new aa,g[at]=ot);let lt=f.getCameraImage(at);ot.sourceTexture=lt}}}}for(let bt=0;bt<M.length;bt++){let qt=w[bt],Et=M[bt];qt!==null&&Et!==void 0&&Et.update(qt,et,c||a)}Xt&&Xt(J,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),p=null}let ce=new np;ce.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Xt=J},this.dispose=function(){}}},I_=new he,cp=new Zt;cp.set(-1,0,0,0,1,0,0,0,1);function L_(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,tu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===je&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===je&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(I_.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===je&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function D_(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;i.uniformBlockBinding(y,w)}function c(y,M){let w=n[y.id];w===void 0&&(m(y),w=h(y),n[y.id]=w,y.addEventListener("dispose",v));let A=M.program;i.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(d(y),r[y.id]=_)}function h(y){let M=f();y.__bindingPointIndex=M;let w=s.createBuffer(),A=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=n[y.id],w=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,T=w.length;_<T;_++){let P=w[_];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)u(P[I],_,I,A);else u(P,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(y,M,w,A){if(x(y,M,w,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let N=T[I],U=g(N);p(N,y.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function x(y,M,w,A){let _=y.value,T=M+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let P=A[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){let M=y.uniforms,w=0,A=16;for(let T=0,P=M.length;T<P;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,U=I.length;N<U;N++){let D=I[N],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,X=B.length;q<X;q++){let st=B[q],G=g(st),Y=w%A,$=Y%G.boundary,At=Y+$;w+=$,At!==0&&A-At<G.storage&&(w+=A-At),D.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=G.storage}}}let _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function b(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:b}}var N_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tn=null;function F_(){return tn===null&&(tn=new yn(N_,16,16,Xn,Ve),tn.name="DFG_LUT",tn.minFilter=ei,tn.magFilter=ei,tn.wrapS=Yi,tn.wrapT=Yi,tn.generateMipmaps=!1,tn.needsUpdate=!0),tn}var pc=class{constructor(t={}){let{canvas:e=wf(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=xi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=u,m=new Set([Il,Pl,Cl]),g=new Set([xi,Gi,gr,xr,Al,Rl]),v=new Uint32Array(4),b=new Int32Array(4),y=new R,M=null,w=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,U=null,D=null,B=null;this._outputColorSpace=Fe;let q=0,X=0,st=null,G=-1,Y=null,$=new we,At=new we,pt=null,Xt=new ct(0),Bt=0,ce=e.width,J=e.height,et=1,bt=null,qt=null,Et=new we(0,0,ce,J),Yt=new we(0,0,ce,J),_e=!1,it=new or,at=!1,ot=!1,lt=new he,ft=new R,Ht=new we,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function jt(){return st===null?et:1}let L=i;function me(E,F){return e.getContext(E,F)}let re,C,S,k,V,Z,ut,dt,j,tt,mt,Nt,_t,gt,Ft,Gt,Kt,z,xt,K,vt,wt,rt;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Fi,!1),L===null){let F="webgl2";if(L=me(F,E),L===null)throw me(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(E){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Fi,!1),Wt("WebGLRenderer: "+E.message),E}function Ut(){re=new Gv(L),re.init(),vt=new R_(L,re),C=new Lv(L,re,t,vt),S=new T_(L,re),C.reversedDepthBuffer&&d&&S.buffers.depth.setReversed(!0),U=L.createFramebuffer(),D=L.createFramebuffer(),B=L.createFramebuffer(),k=new qv(L),V=new d_,Z=new A_(L,re,S,V,C,vt,k),ut=new Hv(P),dt=new Ym(L),wt=new Pv(L,dt),j=new Vv(L,dt,k,wt),tt=new Yv(L,j,dt,wt,k),z=new Xv(L,C,Z),Ft=new Dv(V),mt=new u_(P,ut,re,C,wt,Ft),Nt=new L_(P,V),_t=new p_,gt=new __(re),Kt=new Cv(P,ut,S,tt,p,l),Gt=new E_(P,tt,C),rt=new D_(L,k,C,S),xt=new Iv(L,re,k),K=new Wv(L,re,k),k.programs=mt.programs,P.capabilities=C,P.extensions=re,P.properties=V,P.renderLists=_t,P.shadowMap=Gt,P.state=S,P.info=k}x!==xi&&(T=new Zv(x,e.width,e.height,o,n,r));let It=new Su(P,L);this.xr=It,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(ce,J,!1))},this.getSize=function(E){return E.set(ce,J)},this.setSize=function(E,F,W=!0){if(It.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=E,J=F,e.width=Math.floor(E*et),e.height=Math.floor(F*et),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(ce*et,J*et).floor()},this.setDrawingBufferSize=function(E,F,W){ce=E,J=F,et=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===xi){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,F,W,O){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,F,W,O),S.viewport($.copy(Et).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,F,W,O){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,F,W,O),S.scissor(At.copy(Yt).multiplyScalar(et).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){S.setScissorTest(_e=E)},this.setOpaqueSort=function(E){bt=E},this.setTransparentSort=function(E){qt=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let O=0;if(E){let H=!1;if(st!==null){let St=st.texture.format;H=m.has(St)}if(H){let St=st.texture.type,Rt=g.has(St),Mt=Kt.getClearColor(),Ct=Kt.getClearAlpha(),Dt=Mt.r,te=Mt.g,ae=Mt.b;Rt?(v[0]=Dt,v[1]=te,v[2]=ae,v[3]=Ct,L.clearBufferuiv(L.COLOR,0,v)):(b[0]=Dt,b[1]=te,b[2]=ae,b[3]=Ct,L.clearBufferiv(L.COLOR,0,b))}else O|=L.COLOR_BUFFER_BIT}F&&(O|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Fi,!1),Kt.dispose(),_t.dispose(),gt.dispose(),V.dispose(),ut.dispose(),tt.dispose(),wt.dispose(),rt.dispose(),mt.dispose(),It.dispose(),It.removeEventListener("sessionstart",Qu),It.removeEventListener("sessionend",td),Jn.stop()};function Re(E){E.preventDefault(),jr("WebGLRenderer: Context Lost."),I=!0}function ge(){jr("WebGLRenderer: Context Restored."),I=!1;let E=k.autoReset,F=Gt.enabled,W=Gt.autoUpdate,O=Gt.needsUpdate,H=Gt.type;Ut(),k.autoReset=E,Gt.enabled=F,Gt.autoUpdate=W,Gt.needsUpdate=O,Gt.type=H}function Fi(E){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wi(E){let F=E.target;F.removeEventListener("dispose",Wi),u0(F)}function u0(E){d0(E),V.remove(E)}function d0(E){let F=V.get(E).programs;F!==void 0&&(F.forEach(function(W){mt.releaseProgram(W)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,O,H,St){F===null&&(F=kt);let Rt=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=m0(E,F,W,O,H);S.setMaterial(O,Rt);let Ct=W.index,Dt=1;if(O.wireframe===!0){if(Ct=j.getWireframeAttribute(W),Ct===void 0)return;Dt=2}let te=W.drawRange,ae=W.attributes.position,Pt=te.start*Dt,xe=(te.start+te.count)*Dt;St!==null&&(Pt=Math.max(Pt,St.start*Dt),xe=Math.min(xe,(St.start+St.count)*Dt)),Ct!==null?(Pt=Math.max(Pt,0),xe=Math.min(xe,Ct.count)):ae!=null&&(Pt=Math.max(Pt,0),xe=Math.min(xe,ae.count));let qe=xe-Pt;if(qe<0||qe===1/0)return;wt.setup(H,O,Mt,W,Ct);let De,Te=xt;if(Ct!==null&&(De=dt.get(Ct),Te=K,Te.setIndex(De)),H.isMesh)O.wireframe===!0?(S.setLineWidth(O.wireframeLinewidth*jt()),Te.setMode(L.LINES)):Te.setMode(L.TRIANGLES);else if(H.isLine){let ni=O.linewidth;ni===void 0&&(ni=1),S.setLineWidth(ni*jt()),H.isLineSegments?Te.setMode(L.LINES):H.isLineLoop?Te.setMode(L.LINE_LOOP):Te.setMode(L.LINE_STRIP)}else H.isPoints?Te.setMode(L.POINTS):H.isSprite&&Te.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ni=H._multiDrawStarts,Tt=H._multiDrawCounts,ui=H._multiDrawCount,ue=Ct?dt.get(Ct).bytesPerElement:1,Pi=V.get(O).currentProgram.getUniforms();for(let qi=0;qi<ui;qi++)Pi.setValue(L,"_gl_DrawID",qi),Te.render(ni[qi]/ue,Tt[qi])}else if(H.isInstancedMesh)Te.renderInstances(Pt,qe,H.count);else if(W.isInstancedBufferGeometry){let ni=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Tt=Math.min(W.instanceCount,ni);Te.renderInstances(Pt,qe,Tt)}else Te.render(Pt,qe)};function Ku(E,F,W,O){N!==null&&E.isNodeMaterial&&N.setObject(O,E),at===!0&&Ft.setState(E,W,!1),E.transparent===!0&&E.side===Ie&&E.forceSinglePass===!1?(E.side=je,E.needsUpdate=!0,so(E,F,O),E.side=Hn,E.needsUpdate=!0,so(E,F,O),E.side=Ie):so(E,F,O)}this.compile=function(E,F,W=null){W===null&&(W=E),N!==null&&N.renderStart(E,F,W),w=gt.get(W),w.init(F),_.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ot=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,ot),at===!0&&Ft.setGlobalState(this.clippingPlanes,F),N!==null&&Gt.render(w.state.shadowsArray,W,F);let O=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let St=H.material;if(St)if(Array.isArray(St))for(let Rt=0;Rt<St.length;Rt++){let Mt=St[Rt];Ku(Mt,W,F,H),O.add(Mt)}else Ku(St,W,F,H),O.add(St)}),w=_.pop(),N!==null&&N.renderEnd(),O},this.compileAsync=function(E,F,W=null){let O=this.compile(E,F,W);return new Promise(H=>{function St(){if(O.forEach(function(Rt){let Ct=V.get(Rt).currentProgram;(Ct===void 0||Ct.isReady())&&O.delete(Rt)}),O.size===0){H(E);return}setTimeout(St,10)}re.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Qc=null;function f0(E){Qc&&Qc(E)}function Qu(){Jn.stop()}function td(){Jn.start()}let Jn=new np;Jn.setAnimationLoop(f0),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(E){Qc=E,It.setAnimationLoop(E),E===null?Jn.stop():Jn.start()},It.addEventListener("sessionstart",Qu),It.addEventListener("sessionend",td),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,F);let W=It.enabled===!0&&It.isPresenting===!0,O=T!==null&&(st===null||W)&&T.begin(P,st);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(F),F=It.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,st),w=gt.get(E,_.length),w.init(F),w.state.textureUnits=Z.getTextureUnits(),_.push(w),lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),it.setFromProjectionMatrix(lt,Oi,F.reversedDepth),ot=this.localClippingEnabled,at=Ft.init(this.clippingPlanes,ot),M=_t.get(E,A.length),M.init(),A.push(M),It.enabled===!0&&It.isPresenting===!0){let Rt=P.xr.getDepthSensingMesh();Rt!==null&&th(Rt,F,-1/0,P.sortObjects)}th(E,F,0,P.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),P.sortObjects===!0&&M.sort(bt,qt),$t=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,$t&&Kt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ft.beginShadows();let H=w.state.shadowsArray;if(Gt.render(H,E,F),at===!0&&Ft.endShadows(),(O&&T.hasRenderPass())===!1){let Rt=M.opaque,Mt=M.transmissive;if(w.setupLights(),F.isArrayCamera){let Ct=F.cameras;if(Mt.length>0)for(let Dt=0,te=Ct.length;Dt<te;Dt++){let ae=Ct[Dt];id(Rt,Mt,E,ae)}$t&&Kt.render(E);for(let Dt=0,te=Ct.length;Dt<te;Dt++){let ae=Ct[Dt];ed(M,E,ae,ae.viewport)}}else Mt.length>0&&id(Rt,Mt,E,F),$t&&Kt.render(E),ed(M,E,F)}st!==null&&X===0&&(Z.updateMultisampleRenderTarget(st),Z.updateRenderTargetMipmap(st)),O&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),wt.resetDefaultState(),G=-1,Y=null,_.pop(),_.length>0?(w=_[_.length-1],Z.setTextureUnits(w.state.textureUnits),at===!0&&Ft.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function th(E,F,W,O){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(it)){O&&Ht.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);let Rt=tt.update(E),Mt=E.material;Mt.visible&&M.push(E,Rt,Mt,W,Ht.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(it))){let Rt=tt.update(E),Mt=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ht.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Ht.copy(Rt.boundingSphere.center)),Ht.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){let Ct=Rt.groups;for(let Dt=0,te=Ct.length;Dt<te;Dt++){let ae=Ct[Dt],Pt=Mt[ae.materialIndex];Pt&&Pt.visible&&M.push(E,Rt,Pt,W,Ht.z,ae,F)}}else Mt.visible&&M.push(E,Rt,Mt,W,Ht.z,null,F)}}let St=E.children;for(let Rt=0,Mt=St.length;Rt<Mt;Rt++)th(St[Rt],F,W,O)}function ed(E,F,W,O){let{opaque:H,transmissive:St,transparent:Rt}=E;w.setupLightsView(W),at===!0&&Ft.setGlobalState(P.clippingPlanes,W),O&&S.viewport($.copy(O)),H.length>0&&no(H,F,W),St.length>0&&no(St,F,W),Rt.length>0&&no(Rt,F,W),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function id(E,F,W,O){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let Pt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new Pe(1,1,{generateMipmaps:!0,type:Pt?Ve:xi,minFilter:Wn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let St=w.state.transmissionRenderTarget[O.id],Rt=O.viewport||$;St.setSize(Rt.z*P.transmissionResolutionScale,Rt.w*P.transmissionResolutionScale);let Mt=P.getRenderTarget(),Ct=P.getActiveCubeFace(),Dt=P.getActiveMipmapLevel();P.setRenderTarget(St),P.getClearColor(Xt),Bt=P.getClearAlpha(),Bt<1&&P.setClearColor(16777215,.5),P.clear(),$t&&Kt.render(W);let te=P.toneMapping;P.toneMapping=Hi;let ae=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),at===!0&&Ft.setGlobalState(P.clippingPlanes,O),no(E,W,O),Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St),re.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let xe=0,qe=F.length;xe<qe;xe++){let De=F[xe],{object:Te,geometry:ni,material:Tt,group:ui}=De;if(Tt.side===Ie&&Te.layers.test(O.layers)){let ue=Tt.side;Tt.side=je,Tt.needsUpdate=!0,nd(Te,W,O,ni,Tt,ui),Tt.side=ue,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(Z.updateMultisampleRenderTarget(St),Z.updateRenderTargetMipmap(St))}P.setRenderTarget(Mt,Ct,Dt),P.setClearColor(Xt,Bt),ae!==void 0&&(O.viewport=ae),P.toneMapping=te}function no(E,F,W){let O=F.isScene===!0?F.overrideMaterial:null;for(let H=0,St=E.length;H<St;H++){let Rt=E[H],{object:Mt,geometry:Ct,group:Dt}=Rt,te=Rt.material;te.allowOverride===!0&&O!==null&&(te=O),Mt.layers.test(W.layers)&&nd(Mt,F,W,Ct,te,Dt)}}function nd(E,F,W,O,H,St){N!==null&&H.isNodeMaterial&&N.setObject(E,H),E.onBeforeRender(P,F,W,O,H,St),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,F,W,O,E,St),H.transparent===!0&&H.side===Ie&&H.forceSinglePass===!1?(H.side=je,H.needsUpdate=!0,P.renderBufferDirect(W,F,O,H,E,St),H.side=Hn,H.needsUpdate=!0,P.renderBufferDirect(W,F,O,H,E,St),H.side=Ie):P.renderBufferDirect(W,F,O,H,E,St),E.onAfterRender(P,F,W,O,H,St)}function so(E,F,W){F.isScene!==!0&&(F=kt);let O=V.get(E),H=w.state.lights,St=w.state.shadowsArray,Rt=H.state.version,Mt=mt.getParameters(E,H.state,St,F,W,w.state.lightProbeGridArray),Ct=mt.getProgramCacheKey(Mt),Dt=O.programs;O.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,O.fog=F.fog;let te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;O.envMap=ut.get(E.envMap||O.environment,te),O.envMapRotation=O.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Wi),Dt=new Map,O.programs=Dt);let ae=Dt.get(Ct);if(ae!==void 0){if(O.currentProgram===ae&&O.lightsStateVersion===Rt)return rd(E,Mt),ae}else Mt.uniforms=mt.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,W,Mt),E.onBeforeCompile(Mt,P),ae=mt.acquireProgram(Mt,Ct),Dt.set(Ct,ae),O.uniforms=Mt.uniforms;let Pt=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),rd(E,Mt),O.needsLights=x0(E),O.lightsStateVersion=Rt,O.needsLights&&(Pt.ambientLightColor.value=H.state.ambient,Pt.lightProbe.value=H.state.probe,Pt.sunLights.value=H.state.sun,Pt.sunLightShadows.value=H.state.sunShadow,Pt.directionalLights.value=H.state.directional,Pt.directionalLightShadows.value=H.state.directionalShadow,Pt.spotLights.value=H.state.spot,Pt.spotLightShadows.value=H.state.spotShadow,Pt.rectAreaLights.value=H.state.rectArea,Pt.ltc_1.value=H.state.rectAreaLTC1,Pt.ltc_2.value=H.state.rectAreaLTC2,Pt.pointLights.value=H.state.point,Pt.pointLightShadows.value=H.state.pointShadow,Pt.hemisphereLights.value=H.state.hemi,Pt.sunShadowMatrix.value=H.state.sunShadowMatrix,Pt.sunShadowCascade.value=H.state.sunShadowCascade,Pt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Pt.spotLightMatrix.value=H.state.spotLightMatrix,Pt.spotLightMap.value=H.state.spotLightMap,Pt.pointShadowMatrix.value=H.state.pointShadowMatrix),O.lightProbeGrid=w.state.lightProbeGridArray.length>0,O.currentProgram=ae,O.uniformsList=null,ae}function sd(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Mr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function rd(E,F){let W=V.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function p0(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let W=0,O=E.length;W<O;W++){let H=E[W];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function m0(E,F,W,O,H){F.isScene!==!0&&(F=kt),Z.resetTextureUnits();let St=F.fog,Rt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?F.environment:null,Mt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ne.workingColorSpace,Ct=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Dt=ut.get(O.envMap||Rt,Ct),te=O.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ae=!!W.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Pt=!!W.morphAttributes.position,xe=!!W.morphAttributes.normal,qe=!!W.morphAttributes.color,De=Hi;O.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(De=P.toneMapping);let Te=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ni=Te!==void 0?Te.length:0,Tt=V.get(O),ui=w.state.lights;if(at===!0&&(ot===!0||E!==Y)){let Ce=E===Y&&O.id===G;Ft.setState(O,E,Ce)}let ue=!1;O.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ui.state.version||Tt.outputColorSpace!==Mt||H.isBatchedMesh&&Tt.batching===!1||!H.isBatchedMesh&&Tt.batching===!0||H.isBatchedMesh&&Tt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Tt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Tt.instancing===!1||!H.isInstancedMesh&&Tt.instancing===!0||H.isSkinnedMesh&&Tt.skinning===!1||!H.isSkinnedMesh&&Tt.skinning===!0||H.isInstancedMesh&&Tt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Tt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Tt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Tt.instancingMorph===!1&&H.morphTexture!==null||Tt.envMap!==Dt||O.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==te||Tt.vertexTangents!==ae||Tt.morphTargets!==Pt||Tt.morphNormals!==xe||Tt.morphColors!==qe||Tt.toneMapping!==De||Tt.morphTargetsCount!==ni||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ue=!0):(ue=!0,Tt.__version=O.version);let Pi=Tt.currentProgram;ue===!0&&(Pi=so(O,F,H),N&&O.isNodeMaterial&&N.onUpdateProgram(O,Pi,Tt));let qi=!1,An=!1,Cs=!1,Se=Pi.getUniforms(),Oe=Tt.uniforms;if(S.useProgram(Pi.program)&&(qi=!0,An=!0,Cs=!0),O.id!==G&&(G=O.id,An=!0),Tt.needsLights){let Ce=p0(w.state.lightProbeGridArray,H);Tt.lightProbeGrid!==Ce&&(Tt.lightProbeGrid=Ce,An=!0)}if(qi||Y!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Se.setValue(L,"projectionMatrix",E.projectionMatrix),Se.setValue(L,"viewMatrix",E.matrixWorldInverse);let Cn=Se.map.cameraPosition;Cn!==void 0&&Cn.setValue(L,ft.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Se.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,An=!0,Cs=!0)}if(Tt.needsLights&&(ui.state.sunShadowMap.length>0&&Se.setValue(L,"sunShadowMap",ui.state.sunShadowMap,Z),ui.state.directionalShadowMap.length>0&&Se.setValue(L,"directionalShadowMap",ui.state.directionalShadowMap,Z),ui.state.spotShadowMap.length>0&&Se.setValue(L,"spotShadowMap",ui.state.spotShadowMap,Z),ui.state.pointShadowMap.length>0&&Se.setValue(L,"pointShadowMap",ui.state.pointShadowMap,Z)),H.isSkinnedMesh){Se.setOptional(L,H,"bindMatrix"),Se.setOptional(L,H,"bindMatrixInverse");let Ce=H.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Se.setValue(L,"boneTexture",Ce.boneTexture,Z))}H.isBatchedMesh&&(Se.setOptional(L,H,"batchingTexture"),Se.setValue(L,"batchingTexture",H._matricesTexture,Z),Se.setOptional(L,H,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",H._indirectTexture,Z),Se.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",H._colorsTexture,Z));let Rn=W.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&z.update(H,W,Pi),(An||Tt.receiveShadow!==H.receiveShadow)&&(Tt.receiveShadow=H.receiveShadow,Se.setValue(L,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&F.environment!==null&&(Oe.envMapIntensity.value=F.environmentIntensity),Oe.dfgLUT!==void 0&&(Oe.dfgLUT.value=F_()),An){if(Se.setValue(L,"toneMappingExposure",P.toneMappingExposure),Tt.needsLights&&g0(Oe,Cs),St&&O.fog===!0&&Nt.refreshFogUniforms(Oe,St),Nt.refreshMaterialUniforms(Oe,O,et,J,w.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){let Ce=Tt.lightProbeGrid;Oe.probesSH.value=Ce.texture,Oe.probesMin.value.copy(Ce.boundingBox.min),Oe.probesMax.value.copy(Ce.boundingBox.max),Oe.probesResolution.value.copy(Ce.resolution)}Mr.upload(L,sd(Tt),Oe,Z)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Mr.upload(L,sd(Tt),Oe,Z),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Se.setValue(L,"center",H.center),Se.setValue(L,"modelViewMatrix",H.modelViewMatrix),Se.setValue(L,"normalMatrix",H.normalMatrix),Se.setValue(L,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){let Ce=O.uniformsGroups;for(let Cn=0,Ps=Ce.length;Cn<Ps;Cn++){let od=Ce[Cn];rt.update(od,Pi),rt.bind(od,Pi)}}return Pi}function g0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function x0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(E,F,W){let O=V.get(E);O.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=F,V.get(E.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:W,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let W=V.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){st=E,q=F,X=W;let O=null,H=!1,St=!1;if(E){let Mt=V.get(E);if(Mt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(L.FRAMEBUFFER,Mt.__webglFramebuffer),$.copy(E.viewport),At.copy(E.scissor),pt=E.scissorTest,S.viewport($),S.scissor(At),S.setScissorTest(pt),G=-1;return}else if(Mt.__webglFramebuffer===void 0)Z.setupRenderTarget(E);else if(Mt.__hasExternalTextures)Z.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let te=E.depthTexture;if(Mt.__boundDepthTexture!==te){if(te!==null&&V.has(te)&&(E.width!==te.image.width||E.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(E)}}let Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);let Dt=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?O=Dt[F][W]:O=Dt[F],H=!0):E.samples>0&&Z.useMultisampledRTT(E)===!1?O=V.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?O=Dt[W]:O=Dt,$.copy(E.viewport),At.copy(E.scissor),pt=E.scissorTest}else $.copy(Et).multiplyScalar(et).floor(),At.copy(Yt).multiplyScalar(et).floor(),pt=_e;if(W!==0&&(O=U),S.bindFramebuffer(L.FRAMEBUFFER,O)&&S.drawBuffers(E,O),S.viewport($),S.scissor(At),S.setScissorTest(pt),H){let Mt=V.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,W)}else if(St){let Mt=F;for(let Ct=0;Ct<E.textures.length;Ct++){let Dt=V.get(E.textures[Ct]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ct,Dt.__webglTexture,W,Mt)}}else if(E!==null&&W!==0){let Mt=V.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,W)}G=-1};function ad(E){let F=V.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=C.textureFormatReadable(E.format),F.__typeReadable=C.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,W,O,H,St,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct){S.bindFramebuffer(L.FRAMEBUFFER,Ct);try{let Dt=E.textures[Mt],te=Dt.format,ae=Dt.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Pt=ad(Dt);if(Pt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-O&&W>=0&&W<=E.height-H&&L.readPixels(F,W,O,H,vt.convert(te),vt.convert(ae),St)}finally{let Dt=st!==null?V.get(st).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,O,H,St,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ct=Ct[Rt]),Ct)if(F>=0&&F<=E.width-O&&W>=0&&W<=E.height-H){S.bindFramebuffer(L.FRAMEBUFFER,Ct);let Dt=E.textures[Mt],te=Dt.format,ae=Dt.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Mt);let Pt=ad(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.bufferData(L.PIXEL_PACK_BUFFER,St.byteLength,L.STREAM_READ),L.readPixels(F,W,O,H,vt.convert(te),vt.convert(ae),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let qe=st!==null?V.get(st).__webglFramebuffer:null;S.bindFramebuffer(L.FRAMEBUFFER,qe);let De=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Tf(L,De,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,xe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,St),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(xe),L.deleteSync(De),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){let O=Math.pow(2,-W),H=Math.floor(E.image.width*O),St=Math.floor(E.image.height*O),Rt=F!==null?F.x:0,Mt=F!==null?F.y:0;Z.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Rt,Mt,H,St),S.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,O=null,H=0,St=0){let Rt,Mt,Ct,Dt,te,ae,Pt,xe,qe,De=E.isCompressedTexture?E.mipmaps[St]:E.image;if(W!==null)Rt=W.max.x-W.min.x,Mt=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,te=W.min.y,ae=W.isBox3?W.min.z:0;else{let Oe=Math.pow(2,-H);Rt=Math.floor(De.width*Oe),Mt=Math.floor(De.height*Oe),E.isDataArrayTexture?Ct=De.depth:E.isData3DTexture?Ct=Math.floor(De.depth*Oe):Ct=1,Dt=0,te=0,ae=0}O!==null?(Pt=O.x,xe=O.y,qe=O.z):(Pt=0,xe=0,qe=0);let Te=vt.convert(F.format),ni=vt.convert(F.type),Tt;F.isData3DTexture?(Z.setTexture3D(F,0),Tt=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Tt=L.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Tt=L.TEXTURE_2D),S.activeTexture(L.TEXTURE0),S.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let ui=S.getParameter(L.UNPACK_ROW_LENGTH),ue=S.getParameter(L.UNPACK_IMAGE_HEIGHT),Pi=S.getParameter(L.UNPACK_SKIP_PIXELS),qi=S.getParameter(L.UNPACK_SKIP_ROWS),An=S.getParameter(L.UNPACK_SKIP_IMAGES);S.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),S.pixelStorei(L.UNPACK_SKIP_PIXELS,Dt),S.pixelStorei(L.UNPACK_SKIP_ROWS,te),S.pixelStorei(L.UNPACK_SKIP_IMAGES,ae);let Cs=E.isDataArrayTexture||E.isData3DTexture,Se=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Oe=V.get(E),Rn=V.get(F),Ce=V.get(Oe.__renderTarget),Cn=V.get(Rn.__renderTarget);S.bindFramebuffer(L.READ_FRAMEBUFFER,Ce.__webglFramebuffer),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Ps=0;Ps<Ct;Ps++)Cs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(E).__webglTexture,H,ae+Ps),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(F).__webglTexture,St,qe+Ps)),L.blitFramebuffer(Dt,te,Rt,Mt,Pt,xe,Rt,Mt,L.DEPTH_BUFFER_BIT,L.NEAREST);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||V.has(E)){let Oe=V.get(E),Rn=V.get(F);S.bindFramebuffer(L.READ_FRAMEBUFFER,D),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,B);for(let Ce=0;Ce<Ct;Ce++)Cs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Oe.__webglTexture,H,ae+Ce):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Oe.__webglTexture,H),Se?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,St,qe+Ce):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,St),H!==0?L.blitFramebuffer(Dt,te,Rt,Mt,Pt,xe,Rt,Mt,L.COLOR_BUFFER_BIT,L.NEAREST):Se?L.copyTexSubImage3D(Tt,St,Pt,xe,qe+Ce,Dt,te,Rt,Mt):L.copyTexSubImage2D(Tt,St,Pt,xe,Dt,te,Rt,Mt);S.bindFramebuffer(L.READ_FRAMEBUFFER,null),S.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Tt,St,Pt,xe,qe,Rt,Mt,Ct,Te,ni,De.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Tt,St,Pt,xe,qe,Rt,Mt,Ct,Te,De.data):L.texSubImage3D(Tt,St,Pt,xe,qe,Rt,Mt,Ct,Te,ni,De):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,St,Pt,xe,Rt,Mt,Te,ni,De.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,St,Pt,xe,De.width,De.height,Te,De.data):L.texSubImage2D(L.TEXTURE_2D,St,Pt,xe,Rt,Mt,Te,ni,De);S.pixelStorei(L.UNPACK_ROW_LENGTH,ui),S.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),S.pixelStorei(L.UNPACK_SKIP_PIXELS,Pi),S.pixelStorei(L.UNPACK_SKIP_ROWS,qi),S.pixelStorei(L.UNPACK_SKIP_IMAGES,An),St===0&&F.generateMipmaps&&L.generateMipmap(Tt),S.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&Z.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Z.setTextureCube(E,0):E.isData3DTexture?Z.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Z.setTexture2DArray(E,0):Z.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){q=0,X=0,st=null,S.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var hp=`html, body { margin: 0; height: 100%; overflow: hidden; background: #0d1426; touch-action: none; -webkit-user-select: none; user-select: none; }\r
#app { position: fixed; inset: 0; }\r
#app canvas { display: block; width: 100%; height: 100%; }\r
#ui { position: absolute; inset: 0; pointer-events: none; font-family: 'Zen Maru Gothic', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif; color: #fff; }\r
#ui * { box-sizing: border-box; }\r
.loading { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 12vh; gap: 18px; background: linear-gradient(180deg, rgba(8,14,30,.15), rgba(8,14,30,.75)), url(kv.jpg) center / cover, #16233f; pointer-events: auto; }\r
.lt { font-family: 'Shippori Mincho B1', serif; font-size: clamp(28px, 6vw, 56px); letter-spacing: .2em; text-shadow: 0 0 24px #9fe6ff; }\r
.lbar { width: min(60vw, 420px); height: 4px; background: rgba(255,255,255,.18); border-radius: 2px; overflow: hidden; }\r
.lbar i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, #9fe6ff, #fff6c8); transition: width .3s; }\r
.lmsg { font-size: 14px; opacity: .8; }\r
`;var up=`/* ---- HUD ---- */
.hud { position: absolute; inset: 0; pointer-events: none; text-shadow: 0 1px 2px rgba(0,0,0,.55); }
.hud button { font-family: inherit; }
.mini { position: absolute; left: max(14px, env(safe-area-inset-left)); top: 14px; width: 150px; height: 150px; pointer-events: auto; cursor: pointer; }
.mini canvas { width: 100%; height: 100%; border-radius: 50%; display: block; }
.mini-ring { position: absolute; inset: -4px; border-radius: 50%; border: 3px solid rgba(255,250,235,.85); box-shadow: 0 0 0 1px rgba(60,50,30,.5), inset 0 0 18px rgba(0,0,0,.25); }
.mini-n { position: absolute; left: 50%; top: 50%; width: 18px; height: 18px; margin: -9px; font-size: 11px; font-weight: 900; color: #ffe9a8; text-align: center; line-height: 18px; background: rgba(40,34,24,.75); border-radius: 50%; }
.mini-me { position: absolute; left: 50%; top: 50%; width: 0; height: 0; margin-left: -8px; margin-top: -10px; border-left: 8px solid transparent; border-right: 8px solid transparent; border-bottom: 20px solid #ffe78a; filter: drop-shadow(0 0 2px #000); transform-origin: 8px 12px; }
.quest { position: absolute; left: max(14px, env(safe-area-inset-left)); top: 176px; max-width: 260px; pointer-events: auto; cursor: pointer; padding: 6px 10px 6px 12px; border-left: 3px solid #ffd24a; background: linear-gradient(90deg, rgba(20,24,36,.55), rgba(20,24,36,0)); }
.quest .qt { font-weight: 900; font-size: 15px; color: #ffe39a; }
.quest .qo { font-size: 13px; margin-top: 2px; }
.quest .qd { font-size: 12px; opacity: .8; margin-top: 2px; }
.topbtn { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 12px; display: flex; gap: 8px; pointer-events: auto; }
.tb { width: 42px; height: 42px; border-radius: 50%; border: 2px solid rgba(255,255,255,.6); background: rgba(20,26,40,.45); color: #fff; padding: 9px; cursor: pointer; }
.tb svg { width: 100%; height: 100%; }
.party { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 50%; transform: translateY(-58%); display: flex; flex-direction: column; gap: 10px; pointer-events: auto; }
.pm { display: flex; align-items: center; gap: 8px; cursor: pointer; opacity: .92; transition: transform .2s; }
.pm .pn { text-align: right; }
.pm .nm { font-size: 14px; font-weight: 700; }
.pm .pb { width: 76px; height: 4px; background: rgba(0,0,0,.4); border-radius: 2px; overflow: hidden; margin-top: 3px; margin-left: auto; }
.pm .pb i { display: block; height: 100%; background: #8be38a; }
.pm .pf { position: relative; width: 52px; height: 52px; border-radius: 50%; background: radial-gradient(circle at 50% 35%, #fff8, #0004), var(--ec); border: 2px solid rgba(255,255,255,.85); }
.pm .pf img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }
.pm .pe { position: absolute; left: -6px; top: -6px; width: 20px; height: 20px; color: var(--ec); filter: drop-shadow(0 0 2px #000); }
.pm .pe svg { width: 100%; height: 100%; }
.pm .pk { width: 22px; height: 22px; border-radius: 4px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.5); font-size: 12px; font-weight: 900; text-align: center; line-height: 20px; }
.pm.active { transform: translateX(-10px); opacity: 1; }
.pm.active .pf { box-shadow: 0 0 0 3px #fff5c8, 0 0 16px #fff8; }
.pm.active .nm { color: #ffe9a8; }
.pm.down { filter: grayscale(1) brightness(.6); }
.touch .pm .pk { display: none; }
.hpbox { position: absolute; left: 50%; bottom: max(26px, env(safe-area-inset-bottom)); transform: translateX(-50%); width: min(340px, 44vw); text-align: center; }
.hpbox .lv { position: absolute; left: 0; top: -18px; font-size: 13px; font-weight: 700; }
.hpbox .bar { height: 9px; border-radius: 5px; background: rgba(0,0,0,.45); border: 1px solid rgba(255,255,255,.35); overflow: hidden; position: relative; }
.hpbox .fill { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#a8f08a, #5fc45a); transition: width .15s; }
.hpbox.low .fill { background: linear-gradient(#ff9a7a, #e24a3a); }
.hpbox .num { font-size: 12px; margin-top: 2px; opacity: .9; }
.skills { position: absolute; right: max(28px, env(safe-area-inset-right)); bottom: max(26px, env(safe-area-inset-bottom)); display: flex; align-items: flex-end; gap: 14px; pointer-events: auto; }
.sk { position: relative; width: 62px; height: 62px; border-radius: 50%; border: none; background: radial-gradient(circle at 50% 40%, rgba(255,255,255,.22), rgba(10,14,26,.7)); color: var(--ec); padding: 0; cursor: pointer; touch-action: none; }
.sk .ic { position: absolute; inset: 15px; filter: drop-shadow(0 0 6px var(--ec)); }
.sk .ic svg { width: 100%; height: 100%; }
.sk b { position: absolute; right: -4px; bottom: -4px; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,0,0,.6); color: #fff; font-size: 12px; line-height: 22px; text-align: center; }
.touch .sk b { display: none; }
.sk svg.cd, .sk svg.en { position: absolute; inset: 0; transform: rotate(-90deg); }
.sk svg.cd circle { fill: none; stroke: rgba(255,255,255,.85); stroke-width: 3; stroke-dasharray: 113; }
.sk.cool .ic { opacity: .35; }
.sk .t { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 900; color: #fff; }
.sk.q { width: 78px; height: 78px; }
.sk.q .ic { inset: 19px; }
.sk svg.en .bg { fill: none; stroke: rgba(255,255,255,.18); stroke-width: 3.5; }
.sk svg.en .fg { fill: none; stroke: var(--ec); stroke-width: 3.5; stroke-dasharray: 113; stroke-linecap: round; }
.sk.q.ready { animation: qready 1.2s infinite; }
@keyframes qready { 50% { box-shadow: 0 0 24px var(--ec), inset 0 0 18px var(--ec); } }
.stam { position: absolute; left: 0; top: 0; width: 34px; height: 34px; margin: -17px; opacity: 0; }
.stam svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.stam .bg { fill: none; stroke: rgba(0,0,0,.35); stroke-width: 5; }
.stam .fg { fill: none; stroke: #ffd84a; stroke-width: 5; stroke-dasharray: 94.2; stroke-linecap: round; }
.stam.low .fg { stroke: #ff6a4a; }
.ebars { position: absolute; inset: 0; }
.ebar { position: absolute; left: 0; top: 0; width: 84px; margin-left: -42px; }
.ebar .eb { height: 6px; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.3); border-radius: 3px; overflow: hidden; }
.ebar .eb i { display: block; height: 100%; background: linear-gradient(#ff8a7a, #d8423a); }
.ebar .lvn { font-size: 10px; text-align: left; opacity: .9; }
.ebar .el { position: absolute; left: 50%; top: -24px; width: 20px; height: 20px; margin-left: -10px; filter: drop-shadow(0 0 3px #000); }
.ebar .el svg { width: 100%; height: 100%; }
.ebar.frozen .eb { border-color: #a8eeff; box-shadow: 0 0 6px #a8eeff; }
.nums { position: absolute; inset: 0; overflow: hidden; }
.dmg { position: absolute; transform: translate(-50%,-50%); font-weight: 900; font-size: 20px; -webkit-text-stroke: 1px rgba(0,0,0,.6); animation: dmg .9s ease-out forwards; }
.dmg.crit { font-size: 30px; }
.dmg.small { font-size: 16px; }
@keyframes dmg { 0% { transform: translate(-50%,-20%) scale(.6); opacity: 0; } 15% { transform: translate(-50%,-60%) scale(1.15); opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(-50%,-140%) scale(.9); opacity: 0; } }
.react { position: absolute; transform: translate(-50%,-50%); font-weight: 900; font-size: 22px; -webkit-text-stroke: 1px rgba(0,0,0,.5); animation: react 1.1s ease-out forwards; }
@keyframes react { 0% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; } 20% { transform: translate(-50%,-50%) scale(1); opacity: 1; } 80% { opacity: 1; } 100% { transform: translate(-50%,-110%); opacity: 0; } }
.toasts { position: absolute; left: 50%; top: 22%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; }
.toast { padding: 6px 18px; background: linear-gradient(90deg, transparent, rgba(16,20,34,.72) 15%, rgba(16,20,34,.72) 85%, transparent); border-top: 1px solid rgba(255,230,160,.5); border-bottom: 1px solid rgba(255,230,160,.5); font-size: 14px; white-space: nowrap; animation: tin .3s; transition: opacity .5s; }
.toast.out { opacity: 0; }
@keyframes tin { from { opacity: 0; transform: translateY(8px); } }
.banner { position: absolute; left: 0; right: 0; top: 30%; text-align: center; opacity: 0; transition: opacity .8s; }
.banner.show { opacity: 1; }
.banner .b1 { font-family: 'Shippori Mincho B1', serif; font-size: clamp(26px, 5vw, 44px); font-weight: 800; letter-spacing: .15em; color: #fff7e0; text-shadow: 0 0 18px rgba(255,220,140,.8), 0 2px 4px #000; }
.banner .b2 { font-size: 15px; margin-top: 8px; letter-spacing: .3em; opacity: .9; }
.banner::before, .banner::after { content: ""; display: block; height: 1px; width: min(520px, 70vw); margin: 10px auto; background: linear-gradient(90deg, transparent, #ffe2a0, transparent); }
.prompt { position: absolute; left: 58%; top: 52%; display: flex; align-items: center; gap: 10px; padding: 6px 16px 6px 6px; background: linear-gradient(90deg, rgba(20,24,36,.8), rgba(20,24,36,.3)); border-radius: 22px; font-size: 15px; opacity: 0; transform: translateX(10px); transition: all .2s; }
.prompt.show { opacity: 1; transform: none; }
.prompt .key { width: 30px; height: 30px; border-radius: 50%; background: #fff; color: #222; font-weight: 900; display: flex; align-items: center; justify-content: center; text-shadow: none; padding: 5px; }
.prompt .key svg { width: 100%; height: 100%; }
.dialog { position: absolute; left: 50%; bottom: 11%; transform: translateX(-50%); width: min(820px, 92vw); padding: 14px 24px 26px; background: linear-gradient(transparent, rgba(10,14,24,.78) 25%); opacity: 0; pointer-events: none; transition: opacity .25s; text-align: center; }
.dialog.show { opacity: 1; pointer-events: auto; cursor: pointer; }
.dialog .dn { font-size: 15px; font-weight: 900; color: #ffd98a; margin-bottom: 6px; }
.dialog .dt { font-size: clamp(15px, 2.2vw, 18px); line-height: 1.7; white-space: pre-wrap; }
.dialog .dnext { position: absolute; left: 50%; bottom: 4px; font-size: 12px; animation: nx 1s infinite; }
.dialog.choosing .dnext { display: none; }
@keyframes nx { 50% { transform: translateY(3px); } }
.dialog .dc { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; margin-top: 10px; }
.dialog .ch { pointer-events: auto; min-width: 240px; padding: 9px 18px; border-radius: 22px; border: 1px solid rgba(255,230,170,.6); background: rgba(30,36,56,.85); color: #fff; font-size: 15px; text-align: left; cursor: pointer; }
.dialog .ch:hover { background: rgba(80,90,130,.9); }
.bossbar { position: absolute; left: 50%; top: 18px; transform: translateX(-50%); width: min(560px, 60vw); opacity: 0; transition: opacity .5s; text-align: center; }
.bossbar.show { opacity: 1; }
.bossbar .bn { font-size: 15px; font-weight: 900; letter-spacing: .1em; margin-bottom: 4px; }
.bossbar .bb { height: 10px; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.4); border-radius: 5px; overflow: hidden; }
.bossbar .bb i { display: block; height: 100%; background: linear-gradient(#ff9a8a, #c8302a); transition: width .2s; }
.hurt { position: absolute; inset: 0; box-shadow: inset 0 0 120px 30px rgba(200,20,20,.9); opacity: 0; }
.burstfx { position: absolute; inset: 0; opacity: 0; background: radial-gradient(ellipse at center, transparent 40%, var(--ec) 140%); }
.burstfx.go { animation: bfx 1s ease-out; }
@keyframes bfx { 0% { opacity: 0; } 20% { opacity: .9; } 100% { opacity: 0; } }
.lockhint { position: absolute; left: 50%; bottom: 96px; transform: translateX(-50%); font-size: 12px; opacity: .75; white-space: nowrap; }
/* \u30BF\u30C3\u30C1 */
.tpad { position: absolute; left: max(36px, env(safe-area-inset-left)); bottom: max(40px, env(safe-area-inset-bottom)); width: 140px; height: 140px; border-radius: 50%; background: rgba(255,255,255,.08); border: 2px solid rgba(255,255,255,.25); pointer-events: auto; touch-action: none; }
.tpad .knob { position: absolute; left: 50%; top: 50%; width: 56px; height: 56px; margin: -28px; border-radius: 50%; background: rgba(255,255,255,.4); border: 2px solid rgba(255,255,255,.7); }
.tbtns { position: absolute; right: max(120px, calc(env(safe-area-inset-right) + 110px)); bottom: max(34px, env(safe-area-inset-bottom)); width: 190px; height: 190px; pointer-events: none; }
.tbn { position: absolute; width: 58px; height: 58px; border-radius: 50%; background: rgba(20,26,40,.45); border: 2px solid rgba(255,255,255,.55); color: #fff; padding: 14px; pointer-events: auto; touch-action: none; }
.tbn svg { width: 100%; height: 100%; }
.tbn.on { background: rgba(255,255,255,.35); }
.tbn.atk { width: 84px; height: 84px; right: -100px; bottom: 96px; padding: 20px; }
.tbn.jmp { right: -88px; bottom: 6px; }
.tbn.dsh { right: 2px; bottom: 60px; }
.tbn.int { right: 46%; bottom: 46%; display: none; }
.tbn.int.show { display: block; }
.touch .skills { right: max(196px, calc(env(safe-area-inset-right) + 186px)); bottom: max(150px, env(safe-area-inset-bottom)); flex-direction: column-reverse; align-items: center; gap: 10px; }
.touch .sk { width: 54px; height: 54px; }
.touch .sk.q { width: 64px; height: 64px; }
.touch .hpbox { bottom: max(14px, env(safe-area-inset-bottom)); width: min(260px, 40vw); }
.touch .party { top: auto; bottom: max(250px, env(safe-area-inset-bottom)); transform: none; gap: 6px; }
.touch .pm .pf { width: 44px; height: 44px; }
.touch .pm .nm { font-size: 12px; }
.touch .pm .pb { width: 56px; }
@media (max-width: 600px) {
  .mini { width: 108px; height: 108px; }
  .quest { top: 128px; max-width: 200px; }
  .quest .qt { font-size: 13px; } .quest .qo { font-size: 12px; }
  .touch .party { bottom: 400px; }
  .tb { width: 36px; height: 36px; padding: 7px; }
  .touch .skills { right: 14px; bottom: 236px; flex-direction: column-reverse; gap: 8px; }
}
@media (max-height: 460px) {
  .mini { width: 96px; height: 96px; top: 8px; }
  .quest { top: 112px; max-width: 220px; padding: 3px 8px; }
  .quest .qt { font-size: 12px; } .quest .qo { font-size: 11px; } .quest .qd { display: none; }
  .touch .party { top: 56px; bottom: auto; right: max(10px, env(safe-area-inset-right)); flex-direction: row; }
  .touch .pm .pn { display: none; }
  .touch .pm .pf { width: 38px; height: 38px; }
  .tpad { width: 116px; height: 116px; bottom: 18px; left: max(24px, env(safe-area-inset-left)); }
  .tbtns { bottom: 10px; transform: scale(.85); transform-origin: right bottom; }
  .touch .skills { bottom: 112px; right: max(170px, calc(env(safe-area-inset-right) + 160px)); flex-direction: row; }
  .touch .hpbox { bottom: 6px; }
  .banner { top: 20%; }
}

/* ---- \u5168\u753B\u9762 ---- */
.scr { position: absolute; inset: 0; display: none; pointer-events: auto; background: radial-gradient(ellipse at 50% 30%, rgba(30,44,74,.92), rgba(8,12,24,.96)); z-index: 20; }
.scr.show { display: flex; align-items: center; justify-content: center; animation: tin .25s; }
.sbox { width: min(980px, 94vw); max-height: 92vh; overflow: auto; padding: 18px; }
.sclose { position: absolute; right: 16px; top: 12px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid rgba(255,255,255,.6); background: rgba(255,255,255,.08); color: #fff; font-size: 20px; cursor: pointer; }
.mtitle { font-family: 'Shippori Mincho B1', serif; font-size: 26px; letter-spacing: .2em; text-align: center; margin-bottom: 12px; color: #ffefc4; }
.mhelp { text-align: center; font-size: 13px; opacity: .75; margin-top: 10px; }
.mwrap { display: flex; justify-content: center; }
.mcv { width: min(80vh, 88vw); height: min(80vh, 88vw); border-radius: 14px; box-shadow: 0 0 0 2px rgba(255,240,200,.5), 0 10px 40px #000; cursor: pointer; }
.scr.map .mtitle { margin-bottom: 6px; } .scr.map .sbox { padding: 6px; }
.ql { display: flex; flex-direction: column; gap: 10px; }
.qi { padding: 12px 16px; border-radius: 10px; background: rgba(255,255,255,.07); border-left: 4px solid #8a9ab0; cursor: pointer; }
.qi.main { border-left-color: #ffd24a; }
.qi.on { background: rgba(255,230,160,.16); box-shadow: 0 0 0 1px rgba(255,230,160,.5); }
.qi.done { opacity: .5; }
.qi .qh { font-weight: 900; font-size: 16px; }
.qi .qb { font-size: 14px; margin-top: 4px; opacity: .9; }
.tabs { display: flex; gap: 8px; justify-content: center; margin-bottom: 14px; }
.tabs button { padding: 8px 22px; border-radius: 20px; border: 1px solid rgba(255,255,255,.4); background: rgba(255,255,255,.06); color: #fff; font-size: 15px; cursor: pointer; }
.tabs button.on { background: #fff3cf; color: #2a2010; text-shadow: none; }
.pgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(420px, 100%), 1fr)); gap: 12px; }
.pcard { display: flex; gap: 12px; padding: 12px; border-radius: 12px; background: linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,255,255,.02)); border: 1px solid rgba(255,255,255,.18); font-size: 13px; line-height: 1.6; }
.pcard img { width: 96px; height: 96px; border-radius: 12px; background: radial-gradient(circle at 50% 30%, #fff6, transparent), var(--ec); flex-shrink: 0; }
.pnm { font-size: 18px; font-weight: 900; }
.pel { display: inline-flex; align-items: center; gap: 2px; font-size: 13px; color: var(--ec); }
.pel svg { width: 16px; height: 16px; }
.ptl { opacity: .7; font-size: 12px; }
.pkit { margin-top: 4px; opacity: .85; font-size: 12px; }
.mora { text-align: center; font-size: 16px; margin-bottom: 10px; color: #ffe39a; }
.items { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr)); gap: 10px; }
.item { padding: 12px; border-radius: 10px; background: rgba(255,255,255,.07); }
.inm { font-weight: 900; } .ids { font-size: 13px; opacity: .8; margin: 4px 0 8px; }
.item .use, .sets .danger { padding: 6px 18px; border-radius: 16px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; cursor: pointer; }
.item .use:disabled { opacity: .3; }
.sets { display: flex; flex-direction: column; gap: 14px; max-width: 480px; margin: 0 auto; font-size: 15px; }
.sets label { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.sets input[type=range] { width: 200px; }
.sets select { font-size: 15px; padding: 4px 8px; }
.sets .note { font-size: 11px; opacity: .6; }
.sets .danger { background: #ff9a8a; align-self: center; margin-top: 10px; }
.fade { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; transition: opacity .45s; z-index: 30; }
.fade.on { opacity: 1; }
.credits { position: absolute; inset: 0; z-index: 25; background: rgba(4,8,18,.82); overflow: hidden; pointer-events: auto; transition: opacity 1.2s; }
.credits.out { opacity: 0; }
.cin { position: absolute; left: 0; right: 0; top: 100%; text-align: center; animation: roll 30s linear forwards; }
@keyframes roll { to { transform: translateY(-190vh); } }
.cin .ct { font-family: 'Shippori Mincho B1', serif; font-size: 44px; letter-spacing: .2em; color: #fff3d0; text-shadow: 0 0 20px #ffd88a; }
.cin .cs { font-size: 18px; letter-spacing: .3em; margin-bottom: 60px; }
.cin p { margin: 40px 0 6px; font-size: 14px; opacity: .7; letter-spacing: .2em; }
.cin b { font-size: 22px; }
.cin .cend { margin-top: 90px; font-family: 'Shippori Mincho B1', serif; font-size: 22px; letter-spacing: .2em; color: #c8fff0; }
/* ---- \u30BF\u30A4\u30C8\u30EB ---- */
.title { position: absolute; inset: 0; z-index: 15; pointer-events: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(180deg, rgba(10,20,40,.0) 30%, rgba(10,16,30,.55)); }
.title .tl { font-family: 'Shippori Mincho B1', serif; font-size: clamp(36px, 8vw, 84px); font-weight: 800; letter-spacing: .18em; color: #fff; text-shadow: 0 0 30px rgba(160,240,255,.9), 0 4px 10px rgba(0,30,60,.8); }
.title .ts { font-size: clamp(14px, 2.4vw, 22px); letter-spacing: .4em; margin-top: 4px; text-shadow: 0 2px 6px #000; }
.title .tbtns2 { display: flex; flex-direction: column; gap: 12px; margin-top: 7vh; }
.title button { min-width: 240px; padding: 12px 28px; border-radius: 28px; border: 1px solid rgba(255,255,255,.7); background: rgba(255,255,255,.14); color: #fff; font-size: 18px; letter-spacing: .2em; cursor: pointer; backdrop-filter: blur(6px); font-family: inherit; }
.title button:hover { background: rgba(255,255,255,.3); }
.title .tnote { position: absolute; bottom: 14px; font-size: 12px; opacity: .8; text-align: center; padding: 0 10px; }
.title.out { animation: tout .8s forwards; }
@keyframes tout { to { opacity: 0; } }

.title .prep { font-size: 18px; letter-spacing: .2em; padding: 12px 28px; animation: nx 1.2s infinite; text-shadow: 0 2px 6px #000; }
#errbox { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: 50; width: min(520px, 90vw); padding: 18px 20px; border-radius: 12px; background: rgba(40,10,14,.92); border: 1px solid #ff9a8a; color: #fff; font-size: 14px; line-height: 1.6; pointer-events: auto; }
#errbox button { margin-top: 10px; padding: 6px 18px; border-radius: 14px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; }

.dialog .chint { font-size: 12px; opacity: .8; align-self: flex-end; }
.autosave { position: absolute; right: 16px; top: 82px; font-size: 12px; opacity: 0; padding: 3px 10px; border-radius: 10px; background: rgba(20,26,40,.5); }
.autosave.show { animation: asv 2.4s; }
@keyframes asv { 0% { opacity: 0; } 15% { opacity: .9; } 80% { opacity: .9; } 100% { opacity: 0; } }
.slots { display: flex; flex-direction: column; gap: 10px; max-width: 560px; margin: 0 auto; }
.slot { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,.07); }
.slot .si { flex: 1; font-size: 13px; line-height: 1.5; }
.slot .si b { font-size: 15px; }
.slot button { padding: 7px 16px; border-radius: 16px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; cursor: pointer; font-family: inherit; }
.slot button.ld { background: #a8e8ff; }
.slot button:disabled { opacity: .3; cursor: default; }
.title .loadlist { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.title .loadlist button { min-width: 300px; font-size: 14px; letter-spacing: .05em; text-align: left; }

.eschint { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 60px; font-size: 11px; opacity: .75; }
`;var wu=class{constructor(t,e){this.meta=e,this.n=e.n,this.size=e.size,this.half=e.size/2,this.cell=e.size/e.n;let i=(e.hmax-e.hmin)/65535;this.h=new Float32Array(this.n*this.n);for(let n=0;n<this.h.length;n++)this.h[n]=e.hmin+t[n]*i;this.colliders=[],this.waterLevel=0}at(t,e){let i=this.n;return t<0?t=0:t>=i&&(t=i-1),e<0?e=0:e>=i&&(e=i-1),this.h[e*i+t]}heightAt(t,e){let i=(t+this.half)/this.cell-.5,n=(e+this.half)/this.cell-.5,r=Math.floor(i),a=Math.floor(n),o=i-r,l=n-a,c=this.at(r,a),h=this.at(r+1,a),f=this.at(r,a+1),d=this.at(r+1,a+1);return(c*(1-o)+h*o)*(1-l)+(f*(1-o)+d*o)*l}normalAt(t,e,i={x:0,y:1,z:0}){let n=this.cell,r=this.heightAt(t+n,e)-this.heightAt(t-n,e),a=this.heightAt(t,e+n)-this.heightAt(t,e-n),o=-r,l=2*n,c=-a,h=Math.hypot(o,l,c);return i.x=o/h,i.y=l/h,i.z=c/h,i}slopeAt(t,e){let i=this.cell,n=(this.heightAt(t+i,e)-this.heightAt(t-i,e))/(2*i),r=(this.heightAt(t,e+i)-this.heightAt(t,e-i))/(2*i);return Math.hypot(n,r)}inBounds(t,e){return Math.hypot(t,e)<640}addCollider(t){this.colliders.push(t)}groundAt(t,e,i=1e9){let n=this.heightAt(t,e);for(let r of this.nearColliders(t,e,0))r.top!=null&&this.insideCollider(r,t,e,0)&&r.top<=i+.6&&r.top>n&&(n=r.top);return n}insideCollider(t,e,i,n){if(t.box){let r=e-t.x,a=i-t.z,o=Math.cos(-t.rot||0),l=Math.sin(-t.rot||0),c=r*o-a*l,h=r*l+a*o;return Math.abs(c)<t.hw+n&&Math.abs(h)<t.hd+n}return Math.hypot(e-t.x,i-t.z)<t.r+n}buildGrid(){this.grid=new Map;let t=16;this.gsz=t;for(let e of this.colliders){let i=e.box?Math.hypot(e.hw,e.hd):e.r,n=Math.floor((e.x-i)/t),r=Math.floor((e.x+i)/t),a=Math.floor((e.z-i)/t),o=Math.floor((e.z+i)/t);for(let l=n;l<=r;l++)for(let c=a;c<=o;c++){let h=l*4096+c;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(e)}}}nearColliders(t,e,i){if(!this.grid)return this.colliders;let n=this.gsz,r=[],a=Math.floor((t-i)/n),o=Math.floor((t+i)/n),l=Math.floor((e-i)/n),c=Math.floor((e+i)/n);for(let h=a;h<=o;h++)for(let f=l;f<=c;f++){let d=this.grid.get(h*4096+f);if(d)for(let u of d)r.includes(u)||r.push(u)}return r}pushOut(t,e,i,n=1.7){let r=null;for(let a of this.nearColliders(t.x,t.z,e+1))if(!(a.top!=null&&a.top<=i+.45)&&!(a.bottom!=null&&a.bottom>i+n))if(a.box){let o=t.x-a.x,l=t.z-a.z,c=a.rot||0,h=Math.cos(-c),f=Math.sin(-c),d=o*h-l*f,u=o*f+l*h,p=a.hw+e-Math.abs(d),x=a.hd+e-Math.abs(u);if(p>0&&x>0){p<x?d+=Math.sign(d||1)*p:u+=Math.sign(u||1)*x;let m=Math.cos(c),g=Math.sin(c);t.x=a.x+d*m-u*g,t.z=a.z+d*g+u*m,r=a}}else{let o=t.x-a.x,l=t.z-a.z,c=Math.hypot(o,l),h=a.r+e;c<h&&c>1e-6&&(t.x=a.x+o/c*h,t.z=a.z+l/c*h,r=a)}return r}};async function dp(s){let[t,e]=await Promise.all([fetch(s+"world/height.bin").then(i=>{if(!i.ok)throw new Error("height");return i.arrayBuffer()}),fetch(s+"world/world.json").then(i=>i.json())]);return new wu(new Uint16Array(t),e)}var Eu={srgb:["grass","dirt","cobble","rock","sand","darkrock","mossrock","plaster","brick","bark","wood","rooftile","slate","orerock","planks","snow","cloth_teal_trim","cloth_green_trim","cloth_gold_pattern","linen","leather","metal_gold","cloth_dark","leather_boot","cloth_teal","cloth_green"],linear:["rock_n","cobble_n","brick_n","bark_n","rooftile_n","planks_n","darkrock_n","mossrock_n","slate_n","dirt_n","cloth_detail","leather_detail"],png:["leaves_a","leaves_b","leaves_c","eye_sora","eye_akane","eye_mizuha","eye_raika","eye_npc","eye_popo","flowers","dot","spark","puff"]};async function fp(s,t,e){let i=new Sa,n={},r=[],a=Math.min(8,t.capabilities.getMaxAnisotropy()),o=(c,h,f,d)=>r.push(i.loadAsync(s+"tex/"+h).then(u=>{u.colorSpace=f?Fe:Ni,d&&(u.wrapS=u.wrapT=Ks,u.anisotropy=a),n[c]=u,e&&e(Object.keys(n).length/l)}));for(let c of Eu.srgb)o(c,c+".jpg",!0,!0);for(let c of Eu.linear)o(c,c+".jpg",!1,!0);for(let c of Eu.png)o(c,c+".png",!0,!1);r.push(i.loadAsync(s+"world/splat.png").then(c=>{c.colorSpace=Ni,n.splat=c})),r.push(i.loadAsync(s+"world/map.jpg").then(c=>{c.colorSpace=Fe,n.map=c}));let l=r.length;return await Promise.all(r),n}function pp(s){let t=new yn(s.h,s.n,s.n,vr,vi);return t.minFilter=t.magFilter=ke,t.needsUpdate=!0,t}var wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ti=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k_=new On(-1,1,1,-1,0,1),Tu=class extends Qt{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},B_=new Tu,Yn=class{constructor(t){this._mesh=new nt(B_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,k_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xs=class extends Ti{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Vi.clone(t.uniforms),this.material=new Me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Yn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ya=class extends Ti{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},xc=class extends Ti{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var vc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Q);this._width=i.width,this._height=i.height,e=new Pe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ve}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xs(wr),this.copyPass.material.blending=Di,this.timer=new Aa}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ya!==void 0&&(a instanceof Ya?i=!0:a instanceof xc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var yc=class extends Ti{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ct}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var mp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ct(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Er=class s extends Ti{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new ct(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Pe(r,a,{type:Ve,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Pe(r,a,{type:Ve,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Pe(r,a,{type:Ve,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=mp;this.highPassUniforms=Vi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Q(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vi.clone(wr.uniforms),this.blendMaterial=new Me({uniforms:this.copyUniforms,vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,premultipliedAlpha:!0,blending:ii,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ct,this._oldClearAlpha=1,this._basic=new se,this._fsQuad=new Yn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Q(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new Me({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Er.BlurDirectionX=new Q(1,0);Er.BlurDirectionY=new Q(0,1);var $a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var _c=class extends Ti{constructor(){super(),this.isOutputPass=!0,this.uniforms=Vi.clone($a.uniforms),this.material=new fr({name:$a.name,uniforms:this.uniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader}),this._fsQuad=new Yn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ca?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Da?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===La&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var nn=`
float lmHash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float lmNoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(lmHash(i),lmHash(i+vec2(1,0)),f.x), mix(lmHash(i+vec2(0,1)),lmHash(i+vec2(1,1)),f.x), f.y); }
float lmFbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*lmNoise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
float lmFbm3(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<3;i++){ s+=a*lmNoise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
`,bc=`
uniform sampler2D uHeight;
uniform vec4 uHInfo; // n, size, half, cell
float lmHeight(vec2 xz){
  vec2 f = (xz + uHInfo.z) / uHInfo.w - 0.5;
  vec2 i = floor(f); vec2 t = f - i;
  float n = uHInfo.x - 1.0;
  ivec2 a = ivec2(clamp(i, 0.0, n)), b = ivec2(clamp(i + vec2(1,0), 0.0, n));
  ivec2 c = ivec2(clamp(i + vec2(0,1), 0.0, n)), d = ivec2(clamp(i + vec2(1,1), 0.0, n));
  float ha = texelFetch(uHeight, a, 0).r, hb = texelFetch(uHeight, b, 0).r;
  float hc = texelFetch(uHeight, c, 0).r, hd = texelFetch(uHeight, d, 0).r;
  return mix(mix(ha, hb, t.x), mix(hc, hd, t.x), t.y);
}
`,Mc=`
float lmField(vec2 xz){
  vec2 d = xz - vec2(330.0, 330.0);
  float r = length(d);
  float a = atan(d.y, d.x);
  float ring = smoothstep(104.0, 110.0, r) * (1.0 - smoothstep(150.0, 158.0, r));
  // \u5357\u6771\u301C\u6771\u3068\u5357\u306E\u6247\u5F62\u3060\u3051\uFF08\u9053\u3092\u907F\u3051\u308B\uFF09
  float sec = smoothstep(0.15, 0.3, sin(a * 2.0 + 0.6)) ;
  return ring * sec;
}
`;var O_=[{t:0,zen:"#060c22",hor:"#1a2a4c",sun:"#8aa4ff",sunI:.18,amb:"#26355c",gnd:"#141a26",fog:"#1d2c4c",cloud:"#3a4a70"},{t:4.5,zen:"#0b1534",hor:"#2a3a62",sun:"#9ab0ff",sunI:.15,amb:"#2a3a62",gnd:"#161c28",fog:"#26365a",cloud:"#46557a"},{t:6,zen:"#3d5e9e",hor:"#ffb98a",sun:"#ffb070",sunI:1.4,amb:"#8a90b8",gnd:"#5a4a3a",fog:"#e9b9a0",cloud:"#ffd2b8"},{t:8,zen:"#3f86dc",hor:"#cfe6f2",sun:"#fff0d8",sunI:2.6,amb:"#b9d4f0",gnd:"#6f7a52",fog:"#c8dff0",cloud:"#ffffff"},{t:12,zen:"#2c78d8",hor:"#bfe1f5",sun:"#fff7ea",sunI:3,amb:"#bcd8f4",gnd:"#76844f",fog:"#bfdcf0",cloud:"#ffffff"},{t:16,zen:"#3a80d6",hor:"#d6e6ee",sun:"#fff0d0",sunI:2.6,amb:"#c0d6ee",gnd:"#78804e",fog:"#cfe0ec",cloud:"#fffaf0"},{t:18,zen:"#4a568f",hor:"#ff9a6a",sun:"#ff9a5a",sunI:1.6,amb:"#a08aa8",gnd:"#5a4636",fog:"#f0a888",cloud:"#ffc0a0"},{t:19.5,zen:"#1a2350",hor:"#6a4a7a",sun:"#b0a0ff",sunI:.3,amb:"#4a4a7a",gnd:"#1e1e2c",fog:"#4a4470",cloud:"#6a5a88"},{t:24,zen:"#060c22",hor:"#1a2a4c",sun:"#8aa4ff",sunI:.18,amb:"#26355c",gnd:"#141a26",fog:"#1d2c4c",cloud:"#3a4a70"}],vs=O_.map(s=>({...s,zen:new ct(s.zen),hor:new ct(s.hor),sun:new ct(s.sun),amb:new ct(s.amb),gnd:new ct(s.gnd),fog:new ct(s.fog),cloud:new ct(s.cloud)}));function gp(s,t){s=(s%24+24)%24;let e=vs[0],i=vs[1];for(let c=0;c<vs.length-1;c++)if(s>=vs[c].t&&s<=vs[c+1].t){e=vs[c],i=vs[c+1];break}let n=(s-e.t)/Math.max(1e-4,i.t-e.t);for(let c of["zen","hor","sun","amb","gnd","fog","cloud"])t[c].copy(e[c]).lerp(i[c],n);t.sunI=e.sunI+(i.sunI-e.sunI)*n;let r=(s-6)/12*Math.PI,a=s>5.6&&s<18.6;t.isDay=a;let o=Math.sin(r),l=Math.cos(r);return t.sunDir.set(l*.85,Math.max(o,-.3),-.38).normalize(),a?t.lightDir.copy(t.sunDir):t.lightDir.set(-l*.7,Math.max(.35,-o),.3).normalize(),t.lightDir.y<.12&&(t.lightDir.y=.12,t.lightDir.normalize()),t.night=Va.clamp(a?0:1,0,1),t}function xp(){return{zen:new ct,hor:new ct,sun:new ct,amb:new ct,gnd:new ct,fog:new ct,cloud:new ct,sunI:1,sunDir:new R,lightDir:new R,isDay:!0,night:0}}var Sc=class{constructor(t){this.uniforms={uZen:{value:new ct},uHor:{value:new ct},uSunCol:{value:new ct},uSunDir:{value:new R(0,1,0)},uCloudCol:{value:new ct},uFog:{value:new ct},uTime:{value:0},uNight:{value:0},uCamY:{value:0},uCloudCover:{value:.4}};let e=new Me({uniforms:this.uniforms,side:je,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,fragmentShader:`
        uniform vec3 uZen, uHor, uSunCol, uSunDir, uCloudCol, uFog; uniform float uTime, uNight, uCamY, uCloudCover;
        varying vec3 vDir;
        ${nn}
        float cloudDensity(vec2 p){
          float d = lmFbm(p * 0.7);
          float puff = 1.0 - abs(lmFbm(p * 2.2 + vec2(uTime*0.01, 0.0)) * 2.0 - 1.0);
          d = d * 0.7 + puff * 0.3;
          return smoothstep(uCloudCover + 0.08, uCloudCover + 0.3, d);
        }
        void main(){
          vec3 dir = normalize(vDir);
          float up = dir.y;
          float sd = max(dot(dir, uSunDir), 0.0);
          vec3 col = mix(uHor, uZen, pow(clamp(up,0.0,1.0), 0.5));
          // \u592A\u967D\u306E\u5468\u308A\u306E\u660E\u308B\u3055
          col += uSunCol * (pow(sd, 6.0)*0.25 + pow(sd, 60.0)*0.5) * (1.0-uNight*0.8);
          // \u592A\u967D\u3068\u6708\u306E\u5186\u76E4
          float disk = smoothstep(0.9993, 0.9997, sd);
          col = mix(col, uSunCol*(uNight>0.5?1.6:9.0), disk*step(0.0, up+0.02));
          // \u661F
          if(uNight > 0.0 && up > 0.0){
            vec2 sp = dir.xz/(up+0.25)*180.0;
            float h = lmHash(floor(sp));
            float star = step(0.985, h) * smoothstep(0.5, 0.0, length(fract(sp)-0.5)) * (0.6+0.4*sin(uTime*2.0+h*50.0));
            col += vec3(0.9,0.95,1.2)*star*uNight*smoothstep(0.0,0.3,up);
          }
          // \u5730\u5E73\u7DDA\u306E\u7A4D\u96F2\u306E\u5E2F\uFF08\u65B9\u4F4D\u3068\u9AD8\u3055\u3067\u63CF\u304F\u5927\u304D\u306A\u96F2\uFF09
          if(up > -0.02 && up < 0.42){
            float az = atan(dir.z, dir.x);
            vec2 q = vec2(az * 2.6, up * 9.0);
            float base = lmFbm(vec2(az * 1.3 + 3.1, 0.5)) ;
            float hgt = 0.06 + base * 0.22;                     // \u96F2\u306E\u5C71\u306E\u9AD8\u3055
            float bil = lmFbm(q * 1.7 + vec2(uTime*0.003, 0.0));
            float shape = smoothstep(hgt + 0.02, hgt - 0.04, up - (bil - 0.5) * 0.12);
            float bottom = smoothstep(-0.02, 0.03, up);
            float d = shape * bottom * smoothstep(0.32, 0.5, base + 0.15);
            float lit = clamp(0.45 + (up / max(hgt, 0.01)) * 0.55 + (bil - 0.5) * 0.6, 0.0, 1.0);
            vec3 cc = mix(uCloudCol * vec3(0.64, 0.7, 0.84), uCloudCol * 1.04, lit);
            cc += uSunCol * pow(max(dot(normalize(vec3(dir.x, 0.0, dir.z)), normalize(vec3(uSunDir.x, 0.0, uSunDir.z))), 0.0), 6.0) * 0.25 * (1.0 - uNight);
            cc = mix(cc, uHor, 0.25);
            col = mix(col, cc, d * 0.95);
          }
          // \u4E0A\u7A7A\u306E\u96F2\uFF08\u9AD8\u5EA6 900 \u306E\u5E73\u9762\uFF09
          if(up > 0.0){
            float t = (900.0 - uCamY) / max(up, 0.02);
            vec2 p = dir.xz * t * 0.0011 + vec2(uTime*0.004, uTime*0.0016);
            float d = cloudDensity(p);
            float d2 = cloudDensity(p + uSunDir.xz*0.08);
            float lit = clamp(0.55 + (d - d2)*1.6, 0.0, 1.0);
            vec3 cc = mix(uCloudCol*vec3(0.62,0.68,0.8), uCloudCol, lit);
            cc += uSunCol*pow(sd,8.0)*0.35*(1.0-d);   // \u592A\u967D\u5074\u306E\u7E01\u306E\u5149
            float fade = smoothstep(0.0, 0.18, up);
            col = mix(col, cc, d*fade*0.95);
          }
          // \u773C\u4E0B\u306E\u96F2\u6D77\uFF08\u9AD8\u5EA6 -90 \u306E\u5E73\u9762\uFF09
          if(up < 0.0){
            float t = (-90.0 - uCamY) / min(up, -0.01);
            vec2 p = dir.xz * t * 0.004 + vec2(uTime*0.006, 0.0);
            float d = smoothstep(0.32, 0.75, lmFbm(p));
            float d2 = smoothstep(0.32, 0.75, lmFbm(p + uSunDir.xz*0.05));
            float lit = clamp(0.6 + (d-d2)*1.8, 0.0, 1.0);
            vec3 sea = mix(uCloudCol*vec3(0.72,0.78,0.9), uCloudCol*1.05, lit*d + (1.0-d)*0.55);
            float fade = smoothstep(0.0, -0.25, up);
            col = mix(mix(uHor, uFog, 0.5), sea, fade);
          }
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`});this.mesh=new nt(new Jt(4e3,48,24),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,t.add(this.mesh)}update(t,e,i){let n=this.uniforms;n.uZen.value.copy(t.zen),n.uHor.value.copy(t.hor),n.uSunCol.value.copy(t.sun).multiplyScalar(t.isDay?1:.6),n.uSunDir.value.copy(t.isDay?t.sunDir:t.lightDir),n.uCloudCol.value.copy(t.cloud),n.uFog.value.copy(t.fog),n.uTime.value=i,n.uNight.value=t.night,n.uCamY.value=e.position.y,this.mesh.position.copy(e.position)}};var H_={uniforms:{tDiffuse:{value:null},uSun:{value:new Q(.5,.8)},uI:{value:0},uCol:{value:new ct(1,.95,.8)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uSun; uniform float uI; uniform vec3 uCol; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      if (uI <= 0.001) { gl_FragColor = c; return; }
      vec2 d = (uSun - vUv) / 28.0;
      vec2 p = vUv; float acc = 0.0, w = 1.0;
      for (int i = 0; i < 28; i++) {
        p += d;
        vec3 s = texture2D(tDiffuse, clamp(p, 0.0, 1.0)).rgb;
        float b = max(0.0, dot(s, vec3(0.33)) - 0.82) * 4.0;
        acc += b * w; w *= 0.96;
      }
      float fall = 1.0 - smoothstep(0.0, 0.9, length((vUv - uSun) * vec2(1.6, 1.0)));
      c.rgb += uCol * acc / 28.0 * uI * fall;
      gl_FragColor = c;
    }`},G_={uniforms:{tDiffuse:{value:null},uSat:{value:1.12},uVig:{value:.28},uLift:{value:new R(0,.004,.012)},uFlash:{value:0},uFlashCol:{value:new ct(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSat, uVig, uFlash; uniform vec3 uLift, uFlashCol; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) + uLift;
      vec2 d = vUv - 0.5; float v = 1.0 - dot(d,d)*uVig*2.2;
      c.rgb *= v;
      c.rgb = mix(c.rgb, uFlashCol, uFlash);
      gl_FragColor = c;
    }`},wc=class{constructor(t,e){this.quality=e;let i=this.renderer=new pc({antialias:!1,powerPreference:"high-performance",stencil:!1}),n={high:Math.min(window.devicePixelRatio,1.5),mid:Math.min(window.devicePixelRatio,1),low:.7}[e];i.setPixelRatio(n),i.setSize(window.innerWidth,window.innerHeight),i.toneMapping=fs,i.toneMappingExposure=1,i.outputColorSpace=Fe,i.shadowMap.enabled=e!=="low",i.shadowMap.type=bl,t.appendChild(i.domElement),this.canvas=i.domElement,this.scene=new ns,this.camera=new ti(55,window.innerWidth/window.innerHeight,.15,6e3),this.scene.fog=new Qr(12573936,120,1500),this.hemi=new hs(12376308,7767119,1.1),this.scene.add(this.hemi),this.sun=new us(16777215,3),this.sun.castShadow=e!=="low";let r=e==="high"?2048:1024;this.sun.shadow.mapSize.set(r,r);let a=e==="high"?70:55;Object.assign(this.sun.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:600}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,this.shadowSpan=a,this.scene.add(this.sun,this.sun.target);let o=new Pe(1,1,{type:Ve,samples:e==="high"?4:e==="mid"?2:0});this.composer=new vc(i,o),this.composer.addPass(new yc(this.scene,this.camera)),this.bloom=new Er(new Q(256,256),.3,.55,.93);let l=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(c,h)=>l(Math.max(64,Math.round(c/2)),Math.max(64,Math.round(h/2))),e!=="low"&&this.composer.addPass(this.bloom),this.rays=new xs(H_),e==="high"&&this.composer.addPass(this.rays),this.grade=new xs(G_),this.composer.addPass(this.grade),this.composer.addPass(new _c),this.atm=xp(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setTime(t,e){let i=gp(t,this.atm);this.sun.color.copy(i.sun),this.sun.intensity=i.sunI,this.hemi.color.copy(i.amb),this.hemi.groundColor.copy(i.gnd),this.hemi.intensity=.9+(i.isDay?.35:.2),this.scene.fog.color.copy(i.fog);let n=this.shadowSpan*2/this.sun.shadow.mapSize.x,r=Math.round(e.x/n)*n,a=Math.round(e.z/n)*n;this.sun.target.position.set(r,e.y,a),this.sun.position.set(r+i.lightDir.x*300,e.y+i.lightDir.y*300,a+i.lightDir.z*300);let o=new R().copy(i.sunDir).multiplyScalar(3e3).add(this.camera.position).project(this.camera),l=i.isDay&&o.z<1&&Math.abs(o.x)<1.4&&Math.abs(o.y)<1.4;return this.rays.uniforms.uSun.value.set(o.x*.5+.5,o.y*.5+.5),this.rays.uniforms.uI.value=this.raysOff?0:l?.9*Math.min(1,i.sunI/2)*(1-Math.min(1,Math.hypot(o.x,o.y)/1.6)):0,this.rays.uniforms.uCol.value.copy(i.sun),i}render(){this.composer.render()}};var V_=[64,32,16,8],Ec=class{constructor(t,e,i){this.world=e,this.scene=t,this.chunks=[],this.CN=16,this.CS=e.size/this.CN,this.uniforms={tGrass:{value:i.grass},tDirt:{value:i.dirt},tRock:{value:i.rock},tSand:{value:i.sand},tCobble:{value:i.cobble},tSplat:{value:i.splat},tRockN:{value:i.rock_n},uSize:{value:e.size},uTown:{value:new R(330,330,100)}},this.material=W_(this.uniforms);for(let n=0;n<this.CN;n++)for(let r=0;r<this.CN;r++){let a=-e.half+r*this.CS,o=-e.half+n*this.CS,l=a+this.CS/2,c=o+this.CS/2;Math.hypot(l,c)>e.half+40||this.chunks.push({x0:a,z0:o,cx:l,cz:c,lod:-1,meshes:[]})}}buildChunk(t,e){let i=this.world,n=V_[e],r=this.CS,a=r/n,o=(n+1)*(n+1),l=(n+1)*4,c=new Float32Array((o+l)*3),h=new Float32Array((o+l)*3),f={x:0,y:1,z:0},d=0;for(let b=0;b<=n;b++)for(let y=0;y<=n;y++){let M=t.x0+y*a,w=t.z0+b*a;c[d*3]=M,c[d*3+1]=i.heightAt(M,w),c[d*3+2]=w,i.normalAt(M,w,f),h[d*3]=f.x,h[d*3+1]=f.y,h[d*3+2]=f.z,d++}let u=[];for(let b=0;b<n;b++)for(let y=0;y<n;y++){let M=b*(n+1)+y,w=M+1,A=M+n+1,_=A+1;u.push(M,A,w,w,A,_)}let p=[];for(let b=0;b<=n;b++)p.push([b,0]);for(let b=0;b<=n;b++)p.push([n,b]);for(let b=n;b>=0;b--)p.push([b,n]);for(let b=n;b>=0;b--)p.push([0,b]);let x=d;for(let b=0;b<p.length&&d<o+l;b++){let[y,M]=p[b],w=M*(n+1)+y;c[d*3]=c[w*3],c[d*3+1]=c[w*3+1]-4,c[d*3+2]=c[w*3+2],h[d*3]=h[w*3],h[d*3+1]=h[w*3+1],h[d*3+2]=h[w*3+2],d++}let m=d-x;for(let b=0;b<m-1;b++){let[y,M]=p[b],[w,A]=p[b+1],_=M*(n+1)+y,T=A*(n+1)+w,P=x+b,I=x+b+1;u.push(_,P,T,T,P,I,_,T,P,T,I,P)}let g=new Qt;g.setAttribute("position",new fe(c.subarray(0,d*3),3)),g.setAttribute("normal",new fe(h.subarray(0,d*3),3)),g.setIndex(u),g.computeBoundingSphere();let v=new nt(g,this.material);return v.receiveShadow=!0,v.castShadow=e<=1,v.matrixAutoUpdate=!1,v}update(t){for(let e of this.chunks){let i=Math.max(0,Math.hypot(t.x-e.cx,t.z-e.cz)-this.CS*.5),n=i<70?0:i<200?1:i<420?2:3;n!==e.lod&&(e.lod>=0&&this.scene.remove(e.meshes[e.lod]),e.meshes[n]||(e.meshes[n]=this.buildChunk(e,n)),this.scene.add(e.meshes[n]),e.lod=n)}}};function W_(s){let t=new Mn({color:16777215,roughness:.94,metalness:0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLmPos; varying vec3 vLmNorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLmPos = position; vLmNorm = normal; // \u5730\u5F62\u306F\u539F\u70B9\u306B\u7F6E\u304F\u306E\u3067\u7269\u4F53\u5EA7\u6A19\uFF1D\u4E16\u754C\u5EA7\u6A19\uFF08\u93E1\u50CF\u306E\u63CF\u753B\u3067\u3082\u5143\u306E\u5024\uFF09`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vLmPos; varying vec3 vLmNorm;
        uniform sampler2D tGrass, tDirt, tRock, tSand, tCobble, tSplat, tRockN; uniform float uSize; uniform vec3 uTown;
        ${nn}
        ${Mc}
        vec3 lmTri(sampler2D t, vec3 p, vec3 bw, float s){
          return texture2D(t, p.zy/s).rgb*bw.x + texture2D(t, p.xz/s).rgb*bw.y + texture2D(t, p.xy/s).rgb*bw.z;
        }
        vec3 lmGrassColor(vec2 xz, float macro){
          return mix(vec3(0.10,0.25,0.045), vec3(0.34,0.44,0.09), macro);
        }`).replace("#include <map_fragment>",`
        vec3 wp = vLmPos; vec3 wn = normalize(vLmNorm);
        vec3 sp = texture2D(tSplat, wp.xz/uSize + 0.5).rgb;
        float macro = smoothstep(0.25, 0.75, lmFbm3(wp.xz*0.011));
        float m2 = lmNoise(wp.xz*0.07);
        vec3 gA = texture2D(tGrass, wp.xz/4.5).rgb, gB = texture2D(tGrass, mat2(0.8,-0.6,0.6,0.8)*wp.xz/11.0).rgb;
        vec3 grass = mix(gA, gB, smoothstep(0.3,0.7,m2));
        float gl = dot(grass, vec3(0.3,0.5,0.2));
        grass = mix(grass, lmGrassColor(wp.xz, macro) * (0.55 + gl*2.4), 0.5);
        float patchy = lmFbm3(wp.xz*0.045);
        grass *= mix(0.78, 1.12, smoothstep(0.3, 0.7, patchy));
        grass = mix(grass, grass*vec3(1.18,1.05,0.7), smoothstep(0.62, 0.8, lmNoise(wp.xz*0.02+3.0))*0.6);
        grass *= mix(1.0, 1.12, sp.b);  // \u82B1\u7551\u306F\u5C11\u3057\u660E\u308B\u304F
        vec3 dirt = texture2D(tDirt, wp.xz/3.5).rgb * vec3(1.05,0.98,0.9);
        vec3 sand = texture2D(tSand, wp.xz/4.0).rgb;
        vec3 cob = texture2D(tCobble, wp.xz/2.3).rgb;
        vec3 bw = pow(abs(wn), vec3(4.0)); bw /= (bw.x+bw.y+bw.z);
        vec3 rock = lmTri(tRock, wp, bw, 9.0);
        rock = mix(rock, rock*vec3(0.92,0.9,0.86), lmNoise(wp.xz*0.03));
        float slope = 1.0 - wn.y;
        float wRock = smoothstep(0.24, 0.40, slope + (m2-0.5)*0.14);
        float wSand = clamp(sp.g*1.4, 0.0, 1.0);
        wSand = max(wSand, smoothstep(1.2, -0.3, wp.y));
        float wPath = smoothstep(0.3, 0.7, sp.r + (lmNoise(wp.xz*0.35)-0.5)*0.45);
        float dt = length(wp.xz - uTown.xy);
        float town = 1.0 - smoothstep(uTown.z - 14.0, uTown.z, dt + (lmNoise(wp.xz*0.2)-0.5)*14.0);
        vec3 c = grass;
        c = mix(c, dirt, wPath);
        c = mix(c, cob, town * smoothstep(0.35, 0.6, lmNoise(wp.xz*0.12)*0.6 + 0.35 + wPath*0.5));
        float fld = lmField(wp.xz) * (1.0 - wPath);
        vec3 wheat = mix(vec3(0.55,0.42,0.12), vec3(0.85,0.68,0.25), lmNoise(wp.xz*0.3)) * (0.8 + 0.25*sin(wp.x*1.6));
        c = mix(c, wheat, fld * 0.9);
        c = mix(c, sand, wSand);
        // \u9AD8\u3044\u6240\u306F\u8349\u304C\u4E7E\u3044\u3066\u7070\u8272\u5BC4\u308A
        c = mix(c, c*vec3(1.0,0.95,0.85), smoothstep(70.0, 120.0, wp.y)*(1.0-wRock));
        c = mix(c, rock, wRock);
        // \u6C34\u306E\u4E2D\u306F\u6697\u304F\u9752\u304F
        c *= mix(vec3(1.0), vec3(0.55,0.7,0.75), smoothstep(0.0, -3.0, wp.y));
        diffuseColor.rgb *= c;
      `)},t}var Tc=class{constructor(t,e,i){this.uniforms=Vi.merge([yt.fog,{uHeight:{value:e},uHInfo:{value:new we(i.n,i.size,i.half,i.cell)},uTime:{value:0},uZen:{value:new ct},uHor:{value:new ct},uSunCol:{value:new ct},uSunDir:{value:new R(0,1,0)},uSunI:{value:1},tRefl:{value:null},uRes:{value:new Q(1,1)},uReflOn:{value:0}}]),this.uniforms.uHeight.value=e;let n=new Me({uniforms:this.uniforms,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`
        varying vec3 vW;
        #include <fog_pars_vertex>
        void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        varying vec3 vW;
        uniform float uTime, uSunI, uReflOn; uniform vec3 uZen, uHor, uSunCol, uSunDir; uniform sampler2D tRefl; uniform vec2 uRes;
        ${nn}
        ${bc}
        #include <fog_pars_fragment>
        vec2 waveGrad(vec2 p){
          float e = 0.15;
          float a = lmFbm3(p), b = lmFbm3(p+vec2(e,0.0)), c = lmFbm3(p+vec2(0.0,e));
          return vec2(b-a, c-a)/e;
        }
        void main(){
          float g = lmHeight(vW.xz);
          float depth = -g;
          if (depth < -0.05 || length(vW.xz) > 600.0) discard;
          vec2 p1 = vW.xz*0.12 + vec2(uTime*0.10, uTime*0.06);
          vec2 p2 = vW.xz*0.45 - vec2(uTime*0.16, -uTime*0.09);
          vec2 gr = waveGrad(p1)*0.16 + waveGrad(p2)*0.07;
          vec3 n = normalize(vec3(-gr.x, 1.0, -gr.y));
          vec3 V = normalize(cameraPosition - vW);
          float fres = 0.03 + 0.97*pow(1.0 - max(dot(n, V), 0.0), 5.0);
          vec3 R = reflect(-V, n);
          vec3 sky = mix(uHor, uZen, pow(clamp(R.y,0.0,1.0), 0.5));
          if (uReflOn > 0.5) {
            vec2 ruv = gl_FragCoord.xy / uRes + n.xz * 0.04;
            vec3 rf = texture2D(tRefl, clamp(ruv, 0.001, 0.999)).rgb;
            sky = rf;
          }
          float spec = pow(max(dot(R, uSunDir), 0.0), 320.0) * 6.0 * uSunI + pow(max(dot(R, uSunDir), 0.0), 24.0)*0.25*uSunI;
          float dd = max(depth, 0.0);
          vec3 shallow = vec3(0.16, 0.62, 0.55), deep = vec3(0.02, 0.20, 0.30);
          vec3 body = mix(shallow, deep, 1.0 - exp(-dd*0.28)) * (0.35 + 0.65*uSunI/3.0);
          vec3 col = mix(body, sky, uReflOn > 0.5 ? clamp(0.3 + fres*0.8, 0.0, 0.92) : fres*0.85) + uSunCol*spec;
          float alpha = mix(0.25, 0.92, 1.0 - exp(-dd*0.55));
          alpha = max(alpha, fres*0.9);
          // \u5CB8\u306E\u6CE1
          float shore = 1.0 - smoothstep(0.0, 0.7, dd);
          float fn = lmNoise(vW.xz*2.2 + vec2(uTime*0.4, 0.0)) * lmNoise(vW.xz*0.9 - uTime*0.2);
          float foam = smoothstep(0.12, 0.3, fn + shore*0.45 - 0.15) * shore;
          foam += smoothstep(0.9, 1.0, sin(dd*9.0 - uTime*2.2))*shore*0.5;
          col = mix(col, vec3(0.95,0.98,1.0)*(0.5+0.5*uSunI/3.0), clamp(foam,0.0,1.0)*0.85);
          alpha = max(alpha, clamp(foam,0.0,1.0)*0.9);
          alpha *= smoothstep(-0.05, 0.12, depth);
          gl_FragColor = vec4(col, alpha);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`}),r=new gi(1240,1240,1,1);r.rotateX(-Math.PI/2),this.mesh=new nt(r,n),this.mesh.position.y=0,this.mesh.renderOrder=2,t.add(this.mesh)}enableReflection(t,e,i){this.rt=new Pe(e,i,{type:Ve}),this.uniforms.tRefl.value=this.rt.texture,this.uniforms.uReflOn.value=1,this.clip=[new Mi(new R(0,-1,0),.05)]}resizeReflection(t,e){this.rt&&this.rt.setSize(t,e)}renderReflection(t,e,i,n,r){if(!this.rt||(this.rf=(this.rf||0)+1,this.rf%2===0&&this.uniforms.uReflOn.value>.5))return;if(i.position.y<.05){this.uniforms.uReflOn.value=0;return}this.uniforms.uReflOn.value=1;let a=n.map(h=>h.visible);n.forEach(h=>{h.visible=!1}),this.mesh.visible=!1;for(let h of r)h.position.y*=-1,h.target&&(h.target.position.y*=-1);e.scale.y=-1,e.updateMatrixWorld(!0);let o=t.getRenderTarget(),l=t.shadowMap.autoUpdate,c=t.clippingPlanes;t.shadowMap.autoUpdate=!1,t.clippingPlanes=this.clip,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),t.setRenderTarget(o),t.shadowMap.autoUpdate=l,t.clippingPlanes=c,e.scale.y=1,e.updateMatrixWorld(!0);for(let h of r)h.position.y*=-1,h.target&&(h.target.position.y*=-1);this.mesh.visible=!0,n.forEach((h,f)=>{h.visible=a[f]}),this.uniforms.uRes.value.set(t.domElement.width,t.domElement.height)}update(t,e){let i=this.uniforms;i.uTime.value=e,i.uZen.value.copy(t.zen),i.uHor.value.copy(t.hor),i.uSunCol.value.copy(t.sun),i.uSunDir.value.copy(t.isDay?t.sunDir:t.lightDir),i.uSunI.value=t.sunI}};var Ac=class{constructor(t,e,i,n,r,a){let o={high:7e4,mid:36e3,low:14e3},l={high:72,mid:56,low:40};this.count=o[r]||36e3,this.P=l[r]||56,this.uniforms={uHeight:{value:e},uHInfo:{value:new we(n.n,n.size,n.half,n.cell)},tSplat:{value:i},uSize:{value:n.size},uTime:{value:0},uCenter:{value:new R},uPlayer:{value:new R(0,-999,0)},uPatch:{value:this.P},uWind:{value:new Q(.8,.6).normalize()},uTown:{value:new R(330,330,98)}};let c=4,h=[],f=[];for(let M=0;M<=c;M++){let w=M/c;M<c?h.push(-.5,w,0,.5,w,0):h.push(0,1,0)}for(let M=0;M<c-1;M++){let w=M*2;f.push(w,w+1,w+2,w+1,w+3,w+2)}let d=(c-1)*2;f.push(d,d+1,c*2);let u=f.length;for(let M=0;M<u;M+=3)f.push(f[M],f[M+2],f[M+1]);let p=new Ta;p.setAttribute("position",new Lt(h,3)),p.setAttribute("normal",new Lt(new Array(h.length).fill(0).map((M,w)=>w%3===1?1:0),3)),p.setIndex(f);let x=this.count,m=new Float32Array(x*4),g=new Float32Array(x*4),v=12345,b=()=>(v=v*16807%2147483647)/2147483647;for(let M=0;M<x;M++)m[M*4]=b()*this.P,m[M*4+1]=b()*this.P,m[M*4+2]=b(),m[M*4+3]=b(),g[M*4]=.25+b()*.45,g[M*4+1]=.035+b()*.035,g[M*4+2]=b()*Math.PI*2,g[M*4+3]=b()*.5+.1;p.setAttribute("aRoot",new _n(m,4)),p.setAttribute("aBlade",new _n(g,4)),p.instanceCount=x,p.boundingSphere=new Li(new R,1e6);let y=new ba({color:16777215});y.onBeforeCompile=M=>{Object.assign(M.uniforms,this.uniforms),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
          attribute vec4 aRoot; attribute vec4 aBlade;
          uniform sampler2D tSplat; uniform float uSize, uTime, uPatch; uniform vec3 uCenter, uPlayer, uTown; uniform vec2 uWind;
          varying float vT; varying float vGust; varying vec3 vBase; varying float vFlower; varying float vField;
          ${nn}
          ${bc}
          ${Mc}`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0,1.0,0.0);").replace("#include <begin_vertex>",`
          vec2 wxz = aRoot.xy + floor((uCenter.xz - aRoot.xy)/uPatch + 0.5)*uPatch;
          wxz += (vec2(lmHash(wxz*1.3), lmHash(wxz*2.1)) - 0.5) * 0.0;
          vec3 sp = texture2D(tSplat, wxz/uSize + 0.5).rgb;
          float h = lmHeight(wxz);
          float hx = lmHeight(wxz+vec2(1.2,0.0)) - h, hz = lmHeight(wxz+vec2(0.0,1.2)) - h;
          float slope = length(vec2(hx,hz))/1.2;
          float dn = lmFbm3(wxz*0.06);
          float dens = (1.0 - smoothstep(0.15,0.5,sp.r)) * (1.0 - smoothstep(0.1,0.4,sp.g)) * smoothstep(0.6, 1.6, h) * (1.0 - smoothstep(0.45, 0.65, slope));
          dens *= smoothstep(0.18, 0.5, dn) * 1.15;
          float dt = length(wxz - uTown.xy);
          float fld = lmField(wxz) * (1.0 - smoothstep(0.15,0.5,sp.r));
          vField = fld;
          dens *= smoothstep(uTown.z - 25.0, uTown.z + 10.0, dt);
          dens = max(dens, fld * 1.2);
          float dist = length(wxz - uCenter.xz);
          float fade = 1.0 - smoothstep(uPatch*0.32, uPatch*0.5, dist);
          float alive = step(aRoot.z, dens) * fade;
          float isFlower = step(0.965, aRoot.w) * step(0.3, sp.b + 0.15);
          float H = aBlade.x * mix(0.55, 1.35, dn) * mix(0.25, 1.0, fade) * alive;
          H *= mix(1.0, 0.45, smoothstep(60.0, 110.0, h));
          H = mix(H, (0.9 + aBlade.x * 0.5) * mix(0.25, 1.0, fade) * alive, fld);
          float t = position.y;
          vT = t; vFlower = isFlower;
          float ang = aBlade.z;
          vec2 across = vec2(cos(ang), sin(ang)) * position.x * aBlade.y * (1.0 - t*0.85) * (1.0 + isFlower*0.4);
          // \u98A8\uFF1A\u7D30\u304B\u3044\u63FA\u308C\uFF0B\u5927\u304D\u306A\u98A8\u306E\u6CE2
          float gust = lmNoise(wxz*0.035 - uWind*uTime*0.55);
          gust = smoothstep(0.35, 0.9, gust);
          vGust = gust;
          float sway = sin(uTime*2.1 + dot(wxz, uWind)*0.35 + aRoot.w*6.28)*0.12 + gust*0.55 + aBlade.w*0.4;
          vec2 bend = uWind * sway + vec2(cos(ang+1.3), sin(ang+1.3))*aBlade.w*0.2;
          // \u8E0F\u307E\u308C\u308B\u3068\u5012\u308C\u308B
          vec2 dp = wxz - uPlayer.xz; float pd = length(dp);
          float push = (1.0 - smoothstep(0.2, 1.3, pd)) * step(abs(uPlayer.y - h), 1.5);
          bend += normalize(dp + 1e-4) * push * 1.4;
          float bl = length(bend); float down = clamp(bl*0.5, 0.0, 0.8);
          vec3 transformed = vec3(wxz.x + across.x + bend.x*t*t*H*0.9, h + t*H*(1.0 - down*0.55*t) - 0.03, wxz.y + across.y + bend.y*t*t*H*0.9);
          // \u6839\u5143\u306E\u8272\uFF08\u5730\u9762\u3068\u540C\u3058\u5F0F\uFF09
          float macro = smoothstep(0.25, 0.75, lmFbm3(wxz*0.011));
          vBase = mix(vec3(0.10,0.25,0.045), vec3(0.34,0.44,0.09), macro);
          vBase *= mix(0.85, 1.1, lmHash(wxz*7.7));
          `),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
          varying float vT; varying float vGust; varying vec3 vBase; varying float vFlower; varying float vField;`).replace("#include <color_fragment>",`
          vec3 tip = vBase * vec3(1.55, 1.45, 1.15) + vec3(0.05,0.05,0.0);
          vec3 gc = mix(vBase*0.62, tip, vT*vT);
          gc *= 1.0 + vGust*0.35*vT;
          gc = mix(gc, mix(vec3(0.45,0.33,0.08), vec3(1.0,0.82,0.36), vT) * (1.0 + vGust*0.3), vField);
          if (vFlower > 0.5 && vT > 0.75 && vField < 0.5) gc = mix(vec3(1.0,0.95,0.6), vec3(1.0,0.55,0.75), step(0.5, fract(vBase.r*91.0)));
          diffuseColor.rgb *= gc;`)},this.mesh=new nt(p,y),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,t.add(this.mesh)}update(t,e,i){this.uniforms.uTime.value=t,this.uniforms.uCenter.value.copy(e),i&&this.uniforms.uPlayer.value.copy(i)}};function $n(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new Qt,c=0;for(let h=0;h<s.length;++h){let f=s[h],d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!i.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(t){let u;if(e)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,u,h),c+=u}}if(e){let h=0,f=[];for(let d=0;d<s.length;++d){let u=s[d].index;for(let p=0;p<u.count;++p)f.push(u.getX(p)+h);h+=s[d].attributes.position.count}l.setIndex(f)}for(let h in r){let f=vp(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][d]);let p=vp(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function vp(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new fe(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let d=0,u=h.count;d<u;d++)for(let p=0;p<e;p++){let x=h.getComponent(d,p);o.setComponent(d+f,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}function yp(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=s.getIndex(),n=s.getAttribute("position"),r=i?i.count:n.count,a=0,o=Object.keys(s.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],d=["setX","setY","setZ","setW"];for(let v=0,b=o.length;v<b;v++){let y=o[v],M=s.attributes[y];l[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let w=s.morphAttributes[y];w&&(c[y]||(c[y]=[]),w.forEach((A,_)=>{let T=new A.array.constructor(A.count*A.itemSize);c[y][_]=new A.constructor(T,A.itemSize,A.normalized)}))}let u=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),m=u*x;for(let v=0;v<r;v++){let b=i?i.getX(v):v,y="";for(let M=0,w=o.length;M<w;M++){let A=o[M],_=s.getAttribute(A),T=_.itemSize;for(let P=0;P<T;P++)y+=`${Math.trunc(_[f[P]](b)*x+m)},`}if(y in e)h.push(e[y]);else{for(let M=0,w=o.length;M<w;M++){let A=o[M],_=s.getAttribute(A),T=s.morphAttributes[A],P=_.itemSize,I=l[A],N=c[A];for(let U=0;U<P;U++){let D=f[U],B=d[U];if(I[B](a,_[D](b)),T)for(let q=0,X=T.length;q<X;q++)N[q][B](a,T[q][D](b))}}e[y]=a,h.push(a),a++}}let g=s.clone();for(let v in s.attributes){let b=l[v];if(g.setAttribute(v,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),v in c)for(let y=0;y<c[v].length;y++){let M=c[v][y];g.morphAttributes[v][y]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return g.setIndex(h),g}function q_(s){let t=s.clone();return t.deleteAttribute("uv"),yp(t,1e-4)}function Tr(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Ru(s,t,e,i,n,r=6,a=7){let o=Tr(n),l=new Vt(e,t,s,a,r,!0);l.translate(0,s/2,0);let c=l.attributes.position,h=(o()-.5)*i,f=(o()-.5)*i;for(let d=0;d<c.count;d++){let u=c.getY(d)/s;c.setX(d,c.getX(d)+h*u*u+Math.sin(u*7+n)*.04),c.setZ(d,c.getZ(d)+f*u*u);let p=1+Math.max(0,.18-u)*3;c.setX(d,c.getX(d)*p),c.setZ(d,c.getZ(d)*p)}return l.computeVertexNormals(),{g:l,top:new R(h,s,f)}}function ys(s,t,e,i,n=.85,r=1){let a=Tr(i),o=[];for(let l=0;l<e;l++){let c=new gi(t*1.25,t*1.25),h=a()*2-1,f=a()*Math.PI*2,d=Math.sqrt(1-h*h),u=new R(d*Math.cos(f),h*n,d*Math.sin(f)),p=u.clone().multiplyScalar(t*(.25+a()*.45));c.lookAt(u),c.rotateZ!==void 0&&c.rotateZ(a()*Math.PI),c.translate(s.x+p.x,s.y+p.y,s.z+p.z);let x=c.attributes.position,m=c.attributes.normal;for(let v=0;v<x.count;v++){let b=new R(x.getX(v)-s.x,(x.getY(v)-s.y)/n,x.getZ(v)-s.z).normalize();b.y+=.35,b.normalize(),m.setXYZ(v,b.x,b.y,b.z)}let g=new Float32Array(x.count*3);for(let v=0;v<x.count;v++){let b=(x.getY(v)-s.y)/t,y=Math.hypot(x.getX(v)-s.x,x.getZ(v)-s.z)/t,M=Math.min(1.15,(.55+.3*(b*.5+.5)+.25*Math.min(1,y))*r);g[v*3]=M,g[v*3+1]=M,g[v*3+2]=M}c.setAttribute("color",new fe(g,3)),o.push(c)}return $n(o)}function Au(s){let t=Tr(s),e=4.2+t()*1.5,i=Ru(e,.28,.15,.9,s),n=[],r=8+Math.floor(t()*3);for(let o=0;o<r;o++){let l=o/r*Math.PI*2+t(),c=1.3+t()*.7,h=e-.5+t()*1.8,f=new R(i.top.x+Math.cos(l)*c*.85,h,i.top.z+Math.sin(l)*c*.85);n.push(ys(f,1.4+t()*.5,16,s*7+o,.85,.8+(h-e)*.12))}n.push(ys(new R(i.top.x,e+1.5,i.top.z),1.8,22,s*13,.85,1.1)),n.push(ys(new R(i.top.x,e+.4,i.top.z),1.6,12,s*17,.85,.7));let a=[];for(let o=0;o<3;o++){let l=new Vt(.05,.1,1.8,5,1,!0);l.translate(0,.9,0),l.rotateZ(.9),l.rotateY(o*2.1+t()),l.translate(i.top.x*.7,e*.72,i.top.z*.7),a.push(l)}return{trunk:$n([i.g,...a]),leaves:$n(n)}}function _p(s){let e=7+Tr(s)()*3,i=Ru(e,.25,.08,.3,s),n=[],r=6;for(let a=0;a<r;a++){let o=e*.28+a/r*e*.75,l=(1-a/r)*2.1+.4;for(let c=0;c<5;c++){let h=c/5*Math.PI*2+a;n.push(ys(new R(Math.cos(h)*l*.5,o,Math.sin(h)*l*.5),l*.62,6,s*11+a*7+c,.55))}}return n.push(ys(new R(0,e+.2,0),.6,6,s*3)),{trunk:i.g,leaves:$n(n)}}function X_(s){let t=Tr(s),e=9,i=Ru(e,.9,.45,1.5,s,8,10),n=[];for(let r=0;r<12;r++){let a=r/12*Math.PI*2,o=3+t()*1.5;n.push(ys(new R(i.top.x+Math.cos(a)*o,e+t()*2.5,i.top.z+Math.sin(a)*o),2.4+t(),20,s*5+r))}return n.push(ys(new R(i.top.x,e+3.5,i.top.z),3,26,s*9)),{trunk:i.g,leaves:$n(n)}}function Y_(s,t,e){return s.onBeforeCompile=i=>{i.uniforms.uTime=t.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
${nn}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 ip = instanceMatrix[3].xyz;
        #else
          vec3 ip = vec3(0.0);
        #endif
        float hy = max(position.y - 1.5, 0.0);
        float gust = lmNoise(ip.xz*0.035 - vec2(0.8,0.6)*uTime*0.55);
        float sw = (sin(uTime*1.6 + ip.x*0.3 + ip.z*0.2)*0.5 + gust) * ${e.toFixed(3)} * hy*hy*0.02;
        transformed.x += sw*0.8 + sin(uTime*3.0 + position.y*2.0 + ip.z)*0.012*hy;
        transformed.z += sw*0.6;`)},s}var Rc=class{constructor(t,e,i,n){this.uniforms={uTime:{value:0}};let r=new Mn({map:i.bark,normalMap:i.bark_n,roughness:.95,color:12100752}),a=[i.leaves_a,i.leaves_b,i.leaves_c].map((g,v)=>Y_(new Mn({map:g,alphaTest:.5,side:Ie,roughness:.85,color:v===2?16777215:15269840,vertexColors:!0}),this.uniforms,v===1?.5:1)),o=[[Au(1),Au(2),Au(3)],[_p(4),_p(5)],[X_(6)]],l=175,c=new Map,h=n==="low"?.55:n==="mid"?.8:1,f=0;for(let[g,v,b,y,M]of e.meta.trees){if(f++,f*.6180339%1>h)continue;let w=e.heightAt(g,v)-.15,A=f*7%o[b].length,_=`${Math.floor(g/l)},${Math.floor(v/l)},${b},${A}`;c.has(_)||c.set(_,{kind:b,v:A,list:[]}),c.get(_).list.push([g,w,v,y,M]),e.addCollider({x:g,z:v,r:(b===2?1.5:.55)*y,top:null})}let d=new he,u=new fi,p=new R,x=new R,m=new R(0,1,0);this.meshes=[];for(let{kind:g,v,list:b}of c.values()){let y=o[g][v],M=new ss(y.trunk,r,b.length),w=new ss(y.leaves,a[g],b.length);b.forEach(([A,_,T,P,I],N)=>{u.setFromAxisAngle(m,I);let U=P*(g===2?1.5:1.75);p.set(U,U*(.9+N%5*.05),U),x.set(A,_,T),d.compose(x,u,p),M.setMatrixAt(N,d),w.setMatrixAt(N,d)});for(let A of[M,w])A.castShadow=!0,A.receiveShadow=!0,A.computeBoundingSphere(),t.add(A),this.meshes.push(A)}this.buildRocks(t,e,i)}buildRocks(t,e,i){let n=new Mn({map:i.rock,normalMap:i.rock_n,roughness:.92,color:14209736});n.onBeforeCompile=f=>{f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLmW; varying vec3 vLmN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
          vLmW = (modelMatrix * instanceMatrix * vec4(position,1.0)).xyz; vLmN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
          #endif`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLmW; varying vec3 vLmN;`).replace("#include <map_fragment>",`
          vec3 bw = pow(abs(vLmN), vec3(4.0)); bw /= bw.x+bw.y+bw.z;
          vec3 rc = texture2D(map, vLmW.zy/4.0).rgb*bw.x + texture2D(map, vLmW.xz/4.0).rgb*bw.y + texture2D(map, vLmW.xy/4.0).rgb*bw.z;
          rc = mix(rc, rc*vec3(0.7,0.95,0.55), smoothstep(0.55, 0.9, vLmN.y)*0.8); // \u4E0A\u9762\u306B\u82D4
          diffuseColor.rgb *= rc;`)};let r=[];for(let f=0;f<4;f++){let d=new Qi(1,3),u=d.attributes.position,p=Tr(100+f),x=p()*10,m=p()*10,g=[];for(let y=0;y<9;y++){let M=p()*1.6-.6,w=p()*Math.PI*2,A=Math.sqrt(1-Math.min(1,M*M));g.push([A*Math.cos(w),M,A*Math.sin(w),.62+p()*.3])}let v=new R;for(let y=0;y<u.count;y++){v.set(u.getX(y),u.getY(y),u.getZ(y)),v.multiplyScalar(1+Math.sin(v.x*2.3+x)*Math.cos(v.z*2.1+m)*.1);for(let[M,w,A,_]of g){let T=v.x*M+v.y*w+v.z*A;T>_&&(v.x-=M*(T-_),v.y-=w*(T-_),v.z-=A*(T-_))}u.setXYZ(y,v.x*(1+f*.18),Math.max(v.y*.75,-.35),v.z)}d.deleteAttribute("normal");let b=q_(d);b.computeVertexNormals(),d.copy(b),r.push({g:d,list:[]})}e.meta.rocks.forEach(([f,d,u,p],x)=>{r[x%4].list.push([f,e.heightAt(f,d)-u*.15,d,u,p]),e.addCollider({x:f,z:d,r:u*.95,top:e.heightAt(f,d)+u*.55})});let a=new he,o=new fi,l=new R,c=new R,h=new mi;for(let f of r){let d=new ss(f.g,n,f.list.length);f.list.forEach(([u,p,x,m,g],v)=>{h.set(v%3*.15,g,v%5*.08),o.setFromEuler(h),l.set(m,m,m*(.8+v%4*.1)),c.set(u,p,x),d.setMatrixAt(v,a.compose(c,o,l))}),d.castShadow=!0,d.receiveShadow=!0,d.computeBoundingSphere(),t.add(d),this.meshes.push(d)}}update(t){this.uniforms.uTime.value=t}};var _s=null;function $_(){if(_s)return _s;let s=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255,255,255,255,255]);return _s=new yn(s,4,1,yi),_s.minFilter=_s.magFilter=ke,_s.needsUpdate=!0,_s}var Pu={uRimCol:{value:new ct(1,.97,.9)},uRimI:{value:.2},uLightDir:{value:new R(.3,.8,.2)},uHit:{value:0}};function ht(s={}){let t=new pi({color:s.color??16777215,map:s.map||null,gradientMap:$_()});s.emissive&&(t.emissive=new ct(s.emissive),t.emissiveIntensity=s.emissiveI??1);let e=new ct(s.shadowTint??(s.skin?16765128:12894440));return t.userData.uniforms={uShadowTint:{value:e},uDetail:{value:s.detail||null},uDetailScale:{value:s.detailScale??3},uHitFlash:{value:0}},t.onBeforeCompile=i=>{Object.assign(i.uniforms,Pu,t.userData.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTN; varying vec3 vTV; varying vec2 vTUv; varying vec3 vObjN; varying vec3 vTriW; varying vec3 vTriN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vObjN = normal; vTUv = uv;
vec4 lmTw = modelMatrix * vec4(transformed, 1.0); vTriW = lmTw.xyz; vTriN = normalize(mat3(modelMatrix) * objectNormal);`).replace("#include <fog_vertex>",`#include <fog_vertex>
vTN = normalize(normalMatrix * objectNormal); vTV = normalize(-mvPosition.xyz);`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vTN; varying vec3 vTV; varying vec2 vTUv; varying vec3 vObjN; varying vec3 vTriW; varying vec3 vTriN;
        uniform vec3 uRimCol, uShadowTint; uniform float uRimI, uHitFlash, uHit, uDetailScale; uniform sampler2D uDetail;`).replace("#include <map_fragment>",`${s.tri?`
        vec3 tbw = pow(abs(normalize(vTriN)), vec3(4.0)); tbw /= (tbw.x + tbw.y + tbw.z);
        float tsc = ${(1/s.tri).toFixed(4)};
        vec4 tcol = texture2D(map, vTriW.zy * tsc) * tbw.x + texture2D(map, vTriW.xz * tsc) * tbw.y + texture2D(map, vTriW.xy * tsc) * tbw.z;
        diffuseColor *= tcol;`:"#include <map_fragment>"}
        ${s.detail?"diffuseColor.rgb *= mix(vec3(1.0), texture2D(uDetail, vTUv*uDetailScale).rgb*1.28, 0.75);":""}`).replace("#include <opaque_fragment>",`
        // \u5F71\u306E\u90E8\u5206\u3092\u6696\u8272/\u5BD2\u8272\u306B\u5BC4\u305B\u308B\uFF08\u660E\u308B\u3055\u306F\u4FDD\u3064\uFF09
        float litL = dot(outgoingLight, vec3(0.333)) / max(dot(diffuseColor.rgb, vec3(0.333)), 0.001);
        vec3 sh = diffuseColor.rgb * uShadowTint * 0.62;
        outgoingLight = mix(sh * max(litL, 0.6) * 1.25, outgoingLight, smoothstep(0.75, 1.05, litL));
        float rim = pow(1.0 - max(dot(normalize(vTN), normalize(vTV)), 0.0), 3.0);
        outgoingLight += uRimCol * rim * uRimI * diffuseColor.rgb * (1.4 - dot(diffuseColor.rgb, vec3(0.33))*0.9);
        ${s.hair?`
        // \u9AEA\u306E\u5149\u306E\u8F2A\uFF08\u4E0A\u5411\u304D\u306E\u9762\u306E\u5E2F\uFF09
        float band = smoothstep(0.30, 0.42, vObjN.y) * smoothstep(0.75, 0.55, vObjN.y);
        float vfac = pow(max(dot(normalize(vTN), normalize(vTV)), 0.0), 1.5);
        outgoingLight += vec3(1.0, 0.98, 0.92) * band * vfac * 0.33 * (0.6 + 0.4*diffuseColor.r);`:""}
        outgoingLight = mix(outgoingLight, vec3(1.0, 0.92, 0.9), uHitFlash * 0.6);
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`toon${s.hair?"h":""}${s.detail?"d":""}${s.tri?"t"+s.tri:""}`,t}var Cu=new Map;function Z_(s,t=.006){let e=s+":"+t;if(Cu.has(e))return Cu.get(e);let i=new ct(s),n={};i.getHSL(n),i.setHSL(n.h,Math.min(1,n.s*.9+.1),n.l*.28);let r=new se({color:i,side:je});return r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 vp = modelViewMatrix * vec4(position, 1.0);
      float dist = clamp(-vp.z, 1.0, 12.0);
      transformed += normal * ${t.toFixed(4)} * (0.6 + dist * 0.12);`)},Cu.set(e,r),r}function Ae(s,t,e){let i=new nt(s.geometry,Z_(t,e));return i.castShadow=!1,i.receiveShadow=!1,i.userData.outline=!0,s.add(i),s}function bp(s=.105){let t=new Jt(1,40,30);return Mp(t,s),t.computeVertexNormals(),j_(t),t}function Mp(s,t,e=1){let i=s.attributes.position;for(let n=0;n<i.count;n++){let r=i.getX(n),a=i.getY(n),o=i.getZ(n);if(a<0){let l=Math.pow(-a,1.6);r*=1-.42*l,o*=1-.18*l,o+=.06*l*Math.max(0,o),a*=1.08}else a*=1.02,o*=.98;o<0&&(o*=1.06),i.setXYZ(n,r*t*.94*e,a*t*1.05*e,o*t*e)}}function j_(s){let t=s.attributes.normal,e=s.attributes.position;for(let i=0;i<t.count;i++){let n=e.getZ(i),r=e.getY(i),a=Va.smoothstep(n/.105,.1,.8)*(r<.06?1:.5),o=t.getX(i)*(1-a*.75),l=t.getY(i)*(1-a*.5)+a*.25,c=t.getZ(i)*(1-a)+a,h=Math.hypot(o,l,c);t.setXYZ(i,o/h,l/h,c/h)}}function Iu(s=.105,t=!0){let e=new Jt(1.004,32,24,Math.PI/2-1.15,2.3,Math.PI*.26,Math.PI*.56);return t?Mp(e,s):e.scale(s,s,s),e.computeVertexNormals(),e}function sn(s,t,e,i={}){let n=new ur(s.map(d=>new R(...d))),r=i.segs||12,a=i.radial||6,o=[],l=[],c=i.tip??.04,h=new R(...i.center||[0,0,0]);for(let d=0;d<=r;d++){let u=d/r,p=n.getPointAt(u),x=n.getTangentAt(u),m=p.clone().sub(h);m.lengthSq()<1e-8&&m.set(0,1,0),m.normalize();let g=new R().crossVectors(x,m);g.lengthSq()<1e-8&&g.set(1,0,0),g.normalize();let v=new R().crossVectors(g,x).normalize(),b=Math.pow(1-u,i.taperPow||.85)*(1-c)+c,y=t*b*(i.bulge?1+Math.sin(u*Math.PI)*i.bulge:1),M=e*b;for(let w=0;w<a;w++){let A=w/a*Math.PI*2,_=new R().addScaledVector(g,Math.cos(A)*y).addScaledVector(v,Math.sin(A)*M);o.push(p.x+_.x,p.y+_.y,p.z+_.z)}}for(let d=0;d<r;d++)for(let u=0;u<a;u++){let p=d*a+u,x=d*a+(u+1)%a,m=p+a,g=x+a;l.push(p,m,x,x,m,g)}let f=new Qt;return f.setAttribute("position",new Lt(o,3)),f.setIndex(l),f.computeVertexNormals(),f}function li(s,t=24,e=1,i=1,n=0,r=Math.PI*2){s[0][1]>s[s.length-1][1]&&(s=s.slice().reverse());let a=new va(s.map(([o,l])=>new Q(o,l)),t,n,r);return a.scale(e,1,i),a.computeVertexNormals(),a}function Ar(s,t,e,i=10){let n=[];for(let o=0;o<=8;o++){let l=o/8*Math.PI/2;n.push([Math.sin(l)*t,-t+Math.cos(l)*t*-1+t*2-t])}let a=[[1e-4,t*.6],[t*.75,t*.35],[t,0],[(t+e)/2*1.04,-s*.5],[e,-s],[e*.7,-s-e*.5],[1e-4,-s-e*.8]];return li(a,i)}function Sp(s=1){let t=new Jt(.032,10,8);t.scale(.9*s,1.35*s,.55*s),t.translate(0,-.04*s,0);let e=new as(.009*s,.03*s,4,6);e.rotateZ(.6),e.translate(.026*s,-.035*s,.012*s);let i=new Jt(.028,10,8);return i.scale(.85*s,.9*s,.5*s),i.translate(0,-.085*s,.004),Ep([t,e,i])}function wp(s=1){let t=new Jt(.06,14,10,0,Math.PI*2,0,Math.PI*.6);t.scale(.75*s,.9*s,1.55*s),t.translate(0,-.035,.045);let e=new Vt(.045*s,.045*s,.02,12);return e.scale(1,1,2),e.translate(0,-.035,.045),Ep([t,e])}function Ep(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index?c.index.count:c.attributes.position.count;let i=new Float32Array(t*3),n=new Float32Array(t*3),r=new Float32Array(t*2),a=[],o=0;for(let c of s){let h=c.attributes.position,f=c.attributes.normal,d=c.attributes.uv;if(i.set(h.array,o*3),f&&n.set(f.array,o*3),d&&r.set(d.array.subarray(0,h.count*2),o*2),c.index)for(let u=0;u<c.index.count;u++)a.push(c.index.getX(u)+o);else for(let u=0;u<h.count;u++)a.push(u+o);o+=h.count}let l=new Qt;return l.setAttribute("position",new fe(i,3)),l.setAttribute("normal",new fe(n,3)),l.setAttribute("uv",new fe(r,2)),l.setIndex(a),l}var ve=512,ci=512,Lu=new Map;function Du(s,t){let e=JSON.stringify(s)+"|"+(t&&t.src);if(Lu.has(e))return Lu.get(e);let i={};Lu.set(e,i);for(let n of["open","closed","happy","angry","hurt"]){let r=document.createElement("canvas");r.width=ve,r.height=ci,J_(r.getContext("2d"),s,t,n);let a=new rs(r);a.colorSpace=Fe,a.anisotropy=4,i[n]=a}return i}function J_(s,t,e,i){s.clearRect(0,0,ve,ci);let n=t.eyeSize??.26,r=t.eyeSpread??.11+n*.27,a=t.eyeY??.5,o=t.brow||"#3a2a2a",l=t.lash||"#2b1d26";for(let h of[-1,1]){let f=(.5+h*(r+.02))*ve,d=(a+.13)*ci,u=s.createRadialGradient(f,d,2,f,d,ve*.07);u.addColorStop(0,"rgba(255,120,130,0.30)"),u.addColorStop(1,"rgba(255,120,130,0)"),s.fillStyle=u,s.beginPath(),s.ellipse(f,d,ve*.08,ci*.04,0,0,Math.PI*2),s.fill()}for(let h of[-1,1]){let f=(.5+h*r)*ve,d=a*ci,u=n*ve,p=n*ve*1.35;s.save(),s.translate(f,d),h<0&&s.scale(-1,1),i==="open"||i==="angry"||i==="hurt"?(i==="angry"&&(s.beginPath(),s.rect(-u,-p*.22,u*2,p),s.clip()),s.drawImage(e,-u/2,-p/2,u,p)):i==="closed"?(s.strokeStyle=l,s.lineWidth=ve*.012,s.lineCap="round",s.beginPath(),s.moveTo(-u*.36,-p*.02),s.quadraticCurveTo(0,p*.12,u*.4,-p*.06),s.stroke()):i==="happy"&&(s.strokeStyle=l,s.lineWidth=ve*.013,s.lineCap="round",s.beginPath(),s.moveTo(-u*.34,p*.06),s.quadraticCurveTo(0,-p*.2,u*.36,p*.04),s.stroke()),s.restore()}s.strokeStyle=o,s.lineCap="round",s.lineWidth=ve*.014;for(let h of[-1,1]){let f=(.5+h*r)*ve,d=(a-n*.62-(i==="happy"?.01:0))*ci,u=i==="angry"?.05:i==="hurt"?-.035:t.browTilt??0;s.beginPath(),s.moveTo(f-h*ve*.05,d+u*ci),s.quadraticCurveTo(f+h*ve*.01,d-ci*.018,f+h*ve*.065,d-u*ci*.4+ci*.004),s.stroke()}s.fillStyle="rgba(200,120,110,0.35)",s.beginPath(),s.ellipse(ve*.505,(a+.155)*ci,ve*.008,ci*.006,0,0,Math.PI*2),s.fill();let c=(a+.265)*ci;s.lineCap="round",i==="happy"?(s.fillStyle="#8a3040",s.beginPath(),s.moveTo(ve*.465,c-2),s.quadraticCurveTo(ve*.5,c+ci*.035,ve*.535,c-2),s.closePath(),s.fill(),s.fillStyle="#ff9aa6",s.beginPath(),s.ellipse(ve*.5,c+ci*.014,ve*.016,ci*.007,0,0,Math.PI*2),s.fill()):i==="hurt"||i==="angry"?(s.strokeStyle="#7a3a3a",s.lineWidth=ve*.007,s.beginPath(),s.moveTo(ve*.475,c+3),s.quadraticCurveTo(ve*.5,c-4,ve*.525,c+3),s.stroke()):(s.strokeStyle="#9a4a4a",s.lineWidth=ve*.006,s.beginPath(),s.moveTo(ve*.482,c),s.quadraticCurveTo(ve*.5,c+3,ve*.518,c-1),s.stroke())}var Tp={wind:8384728,fire:16742970,water:5945599,thunder:12946175,ice:11070207};function Ai(s,t,e,i,n,r){let a=new nt(s,t);return i&&a.position.set(...i),n&&a.rotation.set(...n),a.castShadow=!0,r!==!1&&Ae(a,r??t.color.getHex(),.004),e.add(a),a}function Nu(s,t,e){let i=new bn;i.moveTo(-t/2,0),i.lineTo(-t/2,s*.86),i.lineTo(0,s),i.lineTo(t/2,s*.86),i.lineTo(t/2,0),i.lineTo(-t/2,0);let n=new xa(i,{depth:e,bevelEnabled:!0,bevelThickness:e*.4,bevelSize:t*.18,bevelSegments:1});return n.translate(0,0,-e/2),n}function Ap(s,t){let e=new pe,i=ht({color:14674162,shadowTint:10135760}),n=ht({color:15778906}),r=ht({color:3811878}),a=ht({color:Tp[t]||16777215,emissive:Tp[t]||16777215,emissiveI:.8}),o=null;if(e.position.set(0,-.07,.01),s==="sword")e.rotation.set(Math.PI/2,0,0),Ai(new Vt(.014,.016,.13,8),r,e,[0,0,0]),Ai(new ze(.16,.022,.03),n,e,[0,.07,0]),Ai(new Ze(.02),a,e,[0,.07,.02],null,2120272),Ai(Nu(.78,.05,.008),i,e,[0,.08,0],null,6978192),Ai(new Jt(.02,8,6),n,e,[0,-.075,0]);else if(s==="claymore")e.rotation.set(Math.PI/2,0,0),Ai(new Vt(.018,.02,.26,8),r,e,[0,0,0]),Ai(new ze(.3,.04,.05),ht({color:3811886}),e,[0,.14,0]),Ai(new Ze(.035),a,e,[0,.14,.03],null,6953482),Ai(Nu(1.15,.13,.016),ht({color:13617352,shadowTint:10522768}),e,[0,.16,0],null,5917258),Ai(Nu(.9,.03,.02),ht({color:16747082,emissive:16730640,emissiveI:.5}),e,[0,.2,0],null,!1);else if(s==="bow"){e.position.set(0,-.08,.02),e.rotation.set(0,0,0);let l=new os(new R(0,-.55,0),new R(0,0,.22),new R(0,.55,0));Ai(new _a(l,20,.014,6),ht({color:3811914}),e,[0,0,-.05]);for(let h of[-1,1])Ai(new Ge(.02,.12,6),n,e,[0,h*.6,-.05+0],[h>0?0:Math.PI,0,0]);Ai(new Ze(.03),a,e,[0,0,.17],null,3807850);let c=new nt(new Vt(.002,.002,1.1,4),new se({color:15790335}));c.position.set(0,0,-.05),e.add(c)}else if(s==="catalyst"){o=new pe;let l=new nt(new Jt(.09,20,16),new pi({color:9099519,emissive:2785535,emissiveIntensity:.6,transparent:!0,opacity:.85}));o.add(l);let c=new nt(new Ee(.13,.008,6,32),n);c.rotation.x=Math.PI/2,o.add(c);let h=new nt(new Ee(.15,.005,6,32),n);h.rotation.y=Math.PI/2,o.add(h),o.userData={orb:l,ring:c,ring2:h}}return{type:s,held:e,float:o}}var Cc=.118,Pc=.112,Be=(s,t,e=0,i=0,n=0)=>{let r=new He;return r.name=s,r.position.set(e,i,n),t.add(r),r},zu=class{constructor(t={}){let e=t.female?1:0,i=t.scale||1;this.root=new pe,this.body=Be("body",this.root),this.body.scale.setScalar(i);let n=this.j={};n.hips=Be("hips",this.body,0,.86,0),n.spine=Be("spine",n.hips,0,.09,0),n.chest=Be("chest",n.spine,0,.15,0),n.neck=Be("neck",n.chest,0,.175,0),n.head=Be("head",n.neck,0,.05,0);let r=e?.118:.13;n.shL=Be("shL",n.chest,r,.135,0),n.shR=Be("shR",n.chest,-r,.135,0),n.armL=Be("armL",n.shL),n.armR=Be("armR",n.shR),n.foreL=Be("foreL",n.armL,0,-.26,0),n.foreR=Be("foreR",n.armR,0,-.26,0),n.handL=Be("handL",n.foreL,0,-.235,0),n.handR=Be("handR",n.foreR,0,-.235,0);let a=e?.082:.075;n.thighL=Be("thighL",n.hips,a,-.03,0),n.thighR=Be("thighR",n.hips,-a,-.03,0),n.shinL=Be("shinL",n.thighL,0,-.4,0),n.shinR=Be("shinR",n.thighR,0,-.4,0),n.footL=Be("footL",n.shinL,0,-.39,0),n.footR=Be("footR",n.shinR,0,-.39,0),n.skirt=Be("skirt",n.hips,0,0,0),n.cape=Be("cape",n.chest,0,.16,-.1),this.female=!!t.female,this.mats=[],this.faceSets=null}add(t,e,i,n,r,a,o){let l=new nt(e,i);return r&&l.position.set(...r),a&&l.rotation.set(...a),o&&l.scale.set(...o),l.castShadow=!0,l.receiveShadow=!1,n!==!1&&Ae(l,n??i.color.getHex(),.0055),(typeof t=="string"?this.j[t]:t).add(l),this.mats.includes(i)||this.mats.push(i),l}},Fu=new Map;function K_(s){return Fu.has(s)||Fu.set(s,ht({color:s,hair:!0,shadowTint:12628200})),Fu.get(s)}function Q_(s,t,e){let i=ht({color:t.skin||16771550,skin:!0,emissive:t.skin||16771550,emissiveI:.07}),n=s.female;s.skinMat=i;let r=s.add("head",bp(Cc),i,14196880,[0,Pc,0]);s.headMesh=r,s.faceSets=Du(t.face||{},e[t.eye||"eye_npc"].image);let a=new se({map:s.faceSets.open,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});s.faceMat=a;let o=new nt(Iu(Cc),a);o.position.set(0,Pc,0),o.renderOrder=3,s.j.head.add(o);for(let x of[-1,1])s.add("head",new Jt(.024,8,6),i,14196880,[x*Cc*.9,Pc-.005,-.005],null,[.5,1,.8]);s.add("neck",Ar(.075,.036,.04),i,!1,[0,.075,0]);for(let x of["L","R"])s.add("hand"+x,Sp(n?.9:1),t.gloves?ht({color:t.gloves}):i,t.gloves?void 0:14196880,[0,.02,0]);let l=t.sleeve?ht({color:t.sleeve,detail:e.cloth_detail}):i,c=n?.88:1;for(let x of["L","R"])s.add("arm"+x,Ar(.25,.042*c,.034*c),l,t.sleeve?void 0:14196880),s.add("fore"+x,Ar(.225,.034*c,.026*c),t.foreSleeve?ht({color:t.foreSleeve,detail:e.cloth_detail}):t.gloves&&t.longGloves?ht({color:t.gloves}):i,13144192);let h=ht({color:t.legs||2764613,detail:e.cloth_detail,detailScale:2}),f=n?.93:1;for(let x of["L","R"]){s.add("thigh"+x,Ar(.39,.072*f,.05*f),h),s.add("shin"+x,Ar(.38,.05*f,.034*f),t.boots&&t.tallBoots?ht({color:t.boots,detail:e.leather_detail}):h);let m=ht({color:t.boots||5913128,detail:e.leather_detail});s.add("foot"+x,wp(n?.92:1),m),s.add("shin"+x,li([[.04*f,-.36],[.05*f,-.3],[.056*f,-.27]],14,1,1),m)}let d=t.topProfile||(n?[[.105,-.02],[.098,.05],[.115,.13],[.135,.2],[.135,.27],[.118,.305],[.075,.33],[.04,.335]]:[[.112,-.02],[.108,.05],[.122,.14],[.14,.22],[.142,.28],[.125,.315],[.08,.335],[.042,.34]]),u=ht({color:t.top||15921128,detail:e.cloth_detail,map:t.topMap?e[t.topMap]:null});if(s.add("spine",li(d,26,1,.74),u,void 0,[0,-.02,0]),n)for(let x of[-1,1])s.add("chest",new Jt(.055,12,10),u,void 0,[x*.052,.035,.055],null,[1,.85,.75]);let p=[[.07,-.13],[.11,-.1],[n?.128:.12,-.04],[.118,.02],[.11,.09]];s.add("hips",li(p,24,1,.78),ht({color:t.shorts||t.legs||2764613,detail:e.cloth_detail}))}function t1(s=1.1,t=.42,e=.62){let i=new Jt(1,36,24,0,Math.PI*2,0,Math.PI*e),n=i.attributes.position;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r),l=n.getZ(r),c=Math.acos(Math.max(-1,Math.min(1,o))),h=Math.max(0,l),f=Math.PI*(e-(e-t)*Math.pow(h,.7));if(c>f){let d=Math.sin(f),u=Math.hypot(a,l)||1;a=a/u*d,l=l/u*d,o=Math.cos(f)}n.setXYZ(r,a,o,l)}return i.scale(.104*s*.95,.104*s*1.06,.104*s*1.04),i.computeVertexNormals(),i}function e1(s,t,e){let i=K_(e),n=s.j.head,r=Pc,a=Cc/.104,o=h=>s.add(n,h,i,e,[0,r,0],null,[a,a,a]);o(t1(1.13,t.capFront??.38,t.capBack??.7));let l=(t.bangs??7)+2;for(let h=0;h<l;h++){let f=h/(l-1)*2-1,d=f*(t.bangSpread??.95),u=(t.bangLen??.1)*(1-Math.abs(f)*.25)*(.9+h*37%10/50),p=Math.sin(d),x=Math.cos(d),m=.112,g=.118,v=u*.72,b=[[p*m*.3,.11,x*m*.35],[p*g*.8,.075,x*g*.88],[p*g*1+f*.008,.045-v*.45,x*g*1.02],[p*g*.98+f*(t.bangCurl??.02),.045-v,x*g*.98]];o(sn(b,(t.bangW??.026)*1.45,.011,{segs:10,bulge:.25}))}for(let h of[-1,1])for(let f=0;f<(t.sideN??2);f++){let d=(t.sideLen??.17)*(1-f*.2),u=.05-f*.045,p=[[h*.095,.06,u],[h*.112,0,u+.01],[h*.112,-d*.6,u+.015],[h*(.1+(t.sideFlare??0)),-d,u+.02]];o(sn(p,(t.sideW??.024)*1.4,.013,{segs:12,bulge:.2}))}let c=(t.backN??9)+3;for(let h=0;h<c;h++){let f=h/(c-1)*2-1,d=Math.PI+f*1.25,u=(t.backLen??.2)*(1-Math.abs(f)*.25),p=Math.sin(d),x=Math.cos(d),m=t.backFlare??.03,g=[[p*.08,.08,x*.08],[p*.11,0,x*.115],[p*(.11+m*.5),-u*.5,x*(.115+m*.5)],[p*(.1+m),-u,x*(.1+m)+(t.backCurl??0)]];o(sn(g,(t.backW??.035)*1.35,.016,{segs:12,taperPow:t.backTaper??.9,bulge:.2}))}for(let h=0;h<(t.spikes??0);h++){let f=h*2.1+.4,d=[[Math.sin(f)*.05,.1,Math.cos(f)*.05-.02],[Math.sin(f)*.09,.13,Math.cos(f)*.08-.03],[Math.sin(f)*.13,.12,Math.cos(f)*.1-.06]];o(sn(d,.022,.01,{segs:8}))}if(t.ahoge&&o(sn([[0,.112,.02],[0,.15,.03],[.02,.17,0],[.035,.155,-.02]],.01,.004,{segs:10})),t.ponytail){let h=t.ponytail,f=[[0,.09,-.1],[0,.07,-.16],[0,-.05,-.19],[0,-.2,-.16],[0,-h.len,-.13]];o(sn(f,.05,.03,{segs:16,radial:8,bulge:.5,taperPow:1.1}));for(let d of[-1,1])o(sn(f.map(([u,p,x],m)=>[u+d*.012*m/4,p,x+.008]),.036,.022,{segs:14,bulge:.3}));s.add(n,new Ee(.028,.01,6,12),ht({color:h.tie||16765530}),void 0,[0,r+.085,-.13],[.6,0,0])}if(t.longBack)for(let h=0;h<8;h++){let f=h/7*2-1,d=Math.PI+f*1,u=Math.sin(d),p=Math.cos(d),x=t.longBack*(1-Math.abs(f)*.15),m=[[u*.09,.02,p*.1],[u*.12,-.08,p*.13],[u*.13,-x*.5,p*.14],[u*.12,-x,p*.12-.02]];o(sn(m,.045,.012,{segs:16,taperPow:.6}))}}var i1={sora:{name:"\u30BD\u30E9",element:"wind",weapon:"sword",eye:"eye_sora",skin:16772836,face:{brow:"#b89a6a",eyeSize:.3},hair:15984840,hairStyle:{bangs:7,bangLen:.105,sideN:2,sideLen:.16,backN:9,backLen:.16,backFlare:.05,spikes:3,ahoge:!0,capBack:.62},top:15986918,legs:2896208,boots:6965810,gloves:2896208,sleeve:15986918,foreSleeve:3116938},akane:{name:"\u30A2\u30AB\u30CD",element:"fire",weapon:"claymore",eye:"eye_akane",skin:16772064,female:!0,face:{brow:"#8a2a1a",eyeSize:.3,browTilt:.012},hair:14169642,hairStyle:{bangs:6,bangLen:.08,bangSpread:1,sideN:1,sideLen:.2,backN:5,backLen:.1,ponytail:{len:.55,tie:16760896},capBack:.6},top:10362658,legs:1972256,boots:2300446,tallBoots:!0,gloves:2759708,longGloves:!0,shorts:2759972},mizuha:{name:"\u30DF\u30BA\u30CF",element:"water",weapon:"catalyst",eye:"eye_mizuha",skin:16774124,female:!0,face:{brow:"#5a7aa8",eyeSize:.31},hair:10147570,hairStyle:{bangs:9,bangLen:.082,bangW:.022,sideN:2,sideLen:.36,sideW:.03,backN:7,backLen:.18,longBack:.62,capBack:.64},top:16185082,legs:15921910,boots:3104688,sleeve:16185082,foreSleeve:16185082},raika:{name:"\u30E9\u30A4\u30AB",element:"thunder",weapon:"bow",eye:"eye_raika",skin:16640992,face:{brow:"#2a2034",eyeSize:.29,browTilt:.01},hair:4076120,hairStyle:{bangs:6,bangLen:.085,bangCurl:.04,sideN:1,sideLen:.12,backN:7,backLen:.1,backFlare:.06,backCurl:-.03,spikes:5,capBack:.6},top:3944282,legs:2499118,boots:3811874,tallBoots:!0,gloves:3811874,sleeve:3944282,foreSleeve:3944282,shorts:3024440}};function Sn(s,t,e){let i={...i1[s]||{},...e||{}},n=new zu({female:i.female,scale:i.scale||(i.female?.965:1)});return n.spec=i,n.id=s,Q_(n,i,t),e1(n,i.hairStyle||{},i.hair||4861984),(Rp[s]||Rp.villager)(n,i,t),i.weapon&&(n.weapon=Ap(i.weapon,i.element),n.j.handR.add(n.weapon.held),n.weapon.held.visible=!1,i.weapon==="catalyst"&&n.root.add(n.weapon.float)),n.root.traverse(a=>{a.isMesh&&!a.userData.outline&&(a.castShadow=!0)}),n}var Rp={sora(s,t,e){let i=ht({color:3116938,detail:e.cloth_detail}),n=ht({color:15778906}),r=ht({color:2896208,detail:e.cloth_detail});s.add("spine",li([[.118,0],[.115,.06],[.128,.14],[.145,.22],[.137,.28],[.1,.32]],24,1,.76,-Math.PI*.82,Math.PI*1.64),i,void 0,[0,-.02,0],[0,Math.PI,0]);for(let[a,o]of[[Math.PI*.5,Math.PI*.46],[Math.PI*1.04,Math.PI*.46]])s.add("skirt",li([[.122,.08],[.136,0],[.18,-.2],[.23,-.42]],12,1,.85,a,o),i);s.add("hips",new ze(.06,.07,.04),ht({color:6965808,detail:e.leather_detail}),void 0,[-.1,.03,.06],[0,.5,0]),s.add("hips",new Ee(.122,.014,6,24),ht({color:5913126}),void 0,[0,.07,0],[Math.PI/2,0,0],[1,.78,1]),s.add("hips",new ze(.05,.04,.02),n,void 0,[0,.07,.1]),s.add("chest",new Ee(.075,.025,8,20),i,void 0,[0,.165,0],[Math.PI/2-.25,0,0],[1,.9,1]),s.add("shL",new Jt(.06,12,8,0,Math.PI*2,0,Math.PI/2),n,void 0,[.01,0,0],[0,0,-.3],[1,.7,1.1]),s.capeMesh=s.add("cape",Cp(.36,.72),ht({color:3842970,detail:e.cloth_detail}),void 0),s.capeMesh.material.side=Ie,s.add("chest",new Ze(.018),ht({color:10481888,emissive:3850400,emissiveI:.6}),1727056,[0,.12,.1]),s.add("chest",new ze(.05,.012,.01),n,void 0,[0,.12,.095])},akane(s,t,e){let i=ht({color:11543592,detail:e.cloth_detail}),n=ht({color:2365984,detail:e.leather_detail}),r=ht({color:15249994});s.add("spine",li([[.106,-.02],[.1,.06],[.112,.13]],22,1,.76),n),s.add("hips",li([[.12,.06],[.14,0],[.19,-.14],[.22,-.22]],22,1,.9,Math.PI*.12,Math.PI*1.76),i,void 0,null,[0,Math.PI,0]),s.add("hips",new Ee(.124,.012,6,24),r,void 0,[0,.055,0],[Math.PI/2,0,0],[1,.8,1]),s.add("shR",new Jt(.07,12,8,0,Math.PI*2,0,Math.PI/2),ht({color:3811886}),void 0,[-.01,0,0],[0,0,.35],[1,.75,1.15]),s.add("shR",new Ee(.06,.008,6,16),r,void 0,[-.02,.005,0],[Math.PI/2,.35,0]),s.add("chest",new Ee(.07,.02,8,18),n,void 0,[0,.16,0],[Math.PI/2-.2,0,0]),s.add("chest",new Ze(.017),ht({color:16756848,emissive:16732192,emissiveI:.7}),6953482,[0,.09,.105]),s.capeMesh=s.add("skirt",Cp(.22,.42,.05),n,void 0,[0,.05,-.11]),s.capeMesh.material.side=Ie},mizuha(s,t,e){let i=ht({color:16316668,detail:e.cloth_detail}),n=ht({color:3105464,detail:e.cloth_detail}),r=ht({color:15913594});s.add("hips",li([[.12,.08],[.14,0],[.2,-.3],[.27,-.62],[.29,-.78]],28,1,.92),n),s.add("hips",li([[.285,-.74],[.295,-.78],[.3,-.8]],28,1,.92),i),s.add("hips",new Ee(.126,.02,6,24),i,void 0,[0,.07,0],[Math.PI/2,0,0],[1,.82,1]);for(let a of["L","R"])s.add("arm"+a,li([[.05,.02],[.065,-.1],[.085,-.24],[.095,-.3]],18,1,.8),i,void 0,[0,0,0]);for(let a of["L","R"])s.add("arm"+a,new Ee(.094,.008,6,18),n,void 0,[0,-.3,0],[Math.PI/2,0,0],[1,.8,1]);s.add("chest",new Jt(.022,10,8),n,void 0,[0,.11,.1],null,[1.6,.7,.5]),s.add("chest",new Ee(.07,.016,8,18),n,void 0,[0,.165,0],[Math.PI/2-.25,0,0]),s.add("head",new Jt(.018,10,8),ht({color:16777215,emissive:8438015,emissiveI:.4}),4876954,[.09,.2,0]),s.add("head",new Ee(.03,.006,6,12),r,void 0,[.09,.2,0],[0,1.2,0])},raika(s,t,e){let i=ht({color:3944282,detail:e.cloth_detail}),n=ht({color:4863014,detail:e.leather_detail}),r=ht({color:12159728,emissive:8012e3,emissiveI:.6});s.add("spine",li([[.12,0],[.118,.06],[.13,.14],[.146,.22],[.14,.28],[.1,.32]],24,1,.78,-Math.PI*.8,Math.PI*1.6),i,void 0,[0,-.02,0],[0,Math.PI,0]),s.add("hips",li([[.12,.08],[.135,0],[.17,-.14],[.19,-.26]],20,1,.86,Math.PI*.3,Math.PI*1.4),i,void 0,null,[0,Math.PI,0]),s.add("chest",new Jt(.1,16,10,0,Math.PI*2,0,Math.PI*.55),i,void 0,[0,.18,-.08],[-1.9,0,0],[1,.7,1]),s.add("hips",new Ee(.124,.014,6,24),n,void 0,[0,.06,0],[Math.PI/2,0,0],[1,.8,1]),s.add("chest",new Vt(.04,.035,.42,10),n,void 0,[.06,.02,-.13],[.15,0,-.5]);for(let a=0;a<4;a++)s.add("chest",new Ge(.012,.05,4),ht({color:15261904}),void 0,[.13+a*.012,.23+a*.005,-.16],[.15,0,-.5]);s.add("chest",new Ze(.017),r,3807850,[0,.1,.105])},villager(s,t,e){let i=ht({color:t.apron||9071178,detail:e.cloth_detail});s.female?s.add("hips",li([[.12,.06],[.14,0],[.22,-.4],[.26,-.62]],22,1,.92),i):s.add("hips",li([[.12,.06],[.135,0],[.16,-.14]],20,1,.86),i)}};function Cp(s,t,e=.08){let i=new gi(s,t,6,10),n=i.attributes.position;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r)-t/2,l=-Math.abs(a)*.35*(1-a*a/(s*s));n.setXYZ(r,a*(1+-o/t*.35),o,l-e*Math.pow(-o/t,2))}return i.rotateY(Math.PI),i.computeVertexNormals(),i}function Ic(s){let t=new pe,e=ht({color:16775408,shadowTint:13156592}),i=ht({color:9097471,emissive:4227327,emissiveI:.4}),n=new nt(new Jt(.11,18,14),e);n.scale.set(1,.9,1.1),n.position.y=-.05,Ae(n,9079464),t.add(n);let r=new nt(new Jt(.13,22,16),e);r.position.y=.12,r.scale.set(1.1,1,1),Ae(r,9079464),t.add(r);let a=Du({brow:"#9a9ac8",eyeSize:.3,eyeSpread:.17,eyeY:.52},s.eye_popo.image),o=new nt(Iu(.1305,!1),new se({map:a.open,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));o.scale.set(1.1,1,1),o.position.set(0,.12,0),t.add(o);for(let h of[-1,1]){let f=new nt(new Ge(.05,.13,10),e);f.position.set(h*.08,.25,0),f.rotation.z=-h*.35,Ae(f,9079464),t.add(f);let d=new nt(new Ge(.028,.08,8),i);d.position.set(h*.08,.24,.02),d.rotation.z=-h*.35,t.add(d)}let l=new nt(sn([[0,-.05,-.1],[0,0,-.22],[0,.12,-.28],[0,.22,-.24]],.07,.06,{segs:12,radial:8,bulge:.6,tip:.2}),e);Ae(l,9079464),t.add(l);let c=new nt(new Ze(.035),i);return c.position.set(0,.3,0),t.add(c),t.userData={faceSets:a,face:o,tail:l,star:c},t}var Uu=["hips","spine","chest","neck","head","armL","armR","foreL","foreR","handL","handR","thighL","thighR","shinL","shinR","footL","footR","skirt","cape"],hi=(s,t,e)=>s+(t-s)*e,Za=s=>s<0?0:s>1?1:s*s*(3-2*s),Pp=[{a:{armR:[-1.2,.3,-1.4],foreR:[-.9,0,0],tw:.7},b:{armR:[-1.45,-.2,.7],foreR:[-.2,0,0],tw:-.6}},{a:{armR:[-1.6,0,.6],foreR:[-.4,0,0],tw:-.6},b:{armR:[-1.2,.2,-1.2],foreR:[-.3,0,0],tw:.7}},{a:{armR:[-2.7,0,-.3],foreR:[-1,0,0],tw:.2},b:{armR:[-.6,0,.2],foreR:[-.2,0,0],tw:-.1,lean:.35}},{a:{armR:[-1.3,.3,-1.5],foreR:[-.6,0,0],tw:1},b:{armR:[-1.4,0,1],foreR:[-.1,0,0],tw:-1.1}},{a:{armR:[-.6,0,-.9],foreR:[-.5,0,0],tw:.5,crouch:.15},b:{armR:[-2.6,0,.2],foreR:[-.1,0,0],tw:-.3,lean:-.2}}],n1=[{a:{armR:[-2.4,0,-.5],armL:[-2.2,0,.6],foreR:[-.8,0,0],tw:.5},b:{armR:[-.7,0,.3],armL:[-.9,0,.2],foreR:[-.2,0,0],tw:-.3,lean:.4}},{a:{armR:[-1.3,.3,-1.5],armL:[-1.2,0,-.2],foreR:[-.4,0,0],tw:1.1},b:{armR:[-1.3,0,.9],armL:[-1.3,0,.9],foreR:[-.1,0,0],tw:-1.2}},{a:{armR:[-1.4,0,.8],armL:[-1.4,0,.8],foreR:[-.3,0,0],tw:-1},b:{armR:[-1.3,.2,-1.3],armL:[-1.2,0,-.2],foreR:[-.3,0,0],tw:1.1}},{a:{armR:[-2.9,0,-.2],armL:[-2.8,0,.3],foreR:[-.6,0,0],tw:.1,crouch:-.05},b:{armR:[-.5,0,.2],armL:[-.6,0,.2],foreR:[-.1,0,0],tw:0,lean:.55,crouch:.2}}],s1=[{a:{armR:[-.8,0,-.6],foreR:[-.9,0,0],tw:.3},b:{armR:[-1.5,0,.1],foreR:[-.1,0,0],tw:-.2}},{a:{armL:[-.8,0,.6],foreL:[-.9,0,0],tw:-.3},b:{armL:[-1.5,0,-.1],foreL:[-.1,0,0],tw:.25}},{a:{armR:[-.4,0,-.5],armL:[-.4,0,.5],foreR:[-1.2,0,0],tw:0},b:{armR:[-1.6,0,-.1],armL:[-1.6,0,.1],foreR:[-.1,0,0],tw:0,lean:.1}}],r1=[{a:{armL:[-1.5,0,0],armR:[-1.4,0,-.3],foreR:[-2,0,0],tw:.9},b:{armL:[-1.55,0,0],armR:[-1.4,0,-.5],foreR:[-2.4,0,0],tw:.9}}],a1={sword:Pp,claymore:n1,catalyst:s1,bow:r1},rn=class{constructor(t){this.rig=t,this.cur={},this.tgt={};for(let e of Uu)this.cur[e]=[0,0,0],this.tgt[e]=[0,0,0];this.phase=0,this.t=0,this.hipsY=0,this.hipsYT=0,this.bodyPitch=0,this.bodyPitchT=0,this.bodyRoll=0,this.bodyRollT=0,this.blink=2+Math.random()*3,this.faceMode="open",this.faceHold=0,this.capeSwing=0}set(t,e,i,n){let r=this.tgt[t];r[0]=e,r[1]=i,r[2]=n}update(t,e){this.t+=t;let i=this.t,n=e.speed||0;for(let u of Uu)this.set(u,0,0,0);let r=12;this.hipsYT=0,this.bodyPitchT=0,this.bodyRollT=0;let a=this.rig.female?1:0,o=Math.sin(i*2.2)*.025;switch(this.set("armL",.05,0,.13+o*.5),this.set("armR",.05,0,-.13-o*.5),this.set("foreL",-.15,0,0),this.set("foreR",-.15,0,0),this.set("chest",o,0,0),this.set("head",-o*.5,0,0),a&&(this.set("thighL",0,0,-.03),this.set("thighR",.05,-.15,.04),this.set("shinR",.12,0,0)),e.mode){case"ground":{if(n>.2){let u=Math.min(1,Math.max(0,(n-2.2)/3.4)),p=Math.min(1,Math.max(0,(n-6.5)/2.5));this.phase+=t*n*hi(1.6,1.15,u)*1;let x=this.phase*Math.PI,m=hi(.45,.85,u)+p*.2,g=Math.sin(x),v=Math.cos(x);this.set("thighL",-g*m-u*.1,0,0),this.set("thighR",g*m-u*.1,0,0),this.set("shinL",Math.max(0,v)*hi(.5,1.4,u)+.1,0,0),this.set("shinR",Math.max(0,-v)*hi(.5,1.4,u)+.1,0,0),this.set("footL",g*.2,0,0),this.set("footR",-g*.2,0,0);let b=hi(.35,.9,u);this.set("armL",g*b-u*.1,0,.12+u*.05),this.set("armR",-g*b-u*.1,0,-.12-u*.05),this.set("foreL",-.3-u*.9,0,0),this.set("foreR",-.3-u*.9,0,0),p>.3&&this.rig.spec?.weapon!=="catalyst"&&(this.set("armL",.9*p+g*.2,0,.25),this.set("armR",.9*p-g*.2,0,-.25),this.set("foreL",-.3,0,0),this.set("foreR",-.3,0,0)),this.set("spine",.06+u*.12+p*.15,g*.12*u,0),this.set("chest",.02,-g*.18*(.4+u),0),this.set("head",-.06-u*.1,g*.06,0),this.hipsYT=Math.abs(v)*hi(.02,.06,u)-u*.04,this.bodyRollT=-(e.turn||0)*.25*u,r=14}else e.combat&&(this.set("spine",.06,.25,0),this.set("head",0,-.25,0),this.set("thighL",-.25,0,.08),this.set("thighR",.2,0,-.08),this.set("shinL",.3,0,0),this.set("shinR",.35,0,0),this.set("armR",-.4,0,-.25),this.set("foreR",-.7,0,0),this.hipsYT=-.04);break}case"air":{let u=(e.vy||0)>0;this.set("thighL",u?-.9:-.4,0,.05),this.set("shinL",u?1.4:.6,0,0),this.set("thighR",u?-.2:.2,0,-.05),this.set("shinR",u?.9:.4,0,0),this.set("armL",u?-.6:-.3,0,.6),this.set("armR",u?.3:-.2,0,-.6),this.set("foreL",-.5,0,0),this.set("foreR",-.5,0,0),this.set("spine",u?.15:-.05,0,0),r=10;break}case"glide":{this.bodyPitchT=1.05,this.set("armL",-3,0,.35),this.set("armR",-3,0,-.35),this.set("foreL",0,0,0),this.set("foreR",0,0,0),this.set("thighL",.15+Math.sin(i*3)*.08,0,.06),this.set("thighR",.15-Math.sin(i*3)*.08,0,-.06),this.set("shinL",.4,0,0),this.set("shinR",.5,0,0),this.set("head",-.8,0,0),this.bodyRollT=-(e.turn||0)*.4,r=8;break}case"climb":{let u=(e.climbPhase||0)*Math.PI,p=Math.sin(u),x=n>.1?1:.2;this.set("armL",-2.6-p*.4*x,0,.35),this.set("armR",-2.6+p*.4*x,0,-.35),this.set("foreL",-.6+p*.4*x,0,0),this.set("foreR",-.6-p*.4*x,0,0),this.set("thighL",-.9+p*.5*x,0,.2),this.set("thighR",-.9-p*.5*x,0,-.2),this.set("shinL",1.3-p*.4*x,0,0),this.set("shinR",1.3+p*.4*x,0,0),this.set("head",-.3,0,0),this.hipsYT=-.1,r=10;break}case"swim":{this.bodyPitchT=1.2;let u=i*(n>.5?4:1.5);this.set("armL",-2.2+Math.sin(u)*1.4,0,.4),this.set("armR",-2.2+Math.sin(u+Math.PI)*1.4,0,-.4),this.set("thighL",Math.sin(u*2)*.35,0,0),this.set("thighR",-Math.sin(u*2)*.35,0,0),this.set("head",-1,0,0),this.hipsYT=-.6,r=8;break}case"dash":{this.set("spine",.4,0,0),this.set("armL",1,0,.3),this.set("armR",1,0,-.3),this.set("thighL",-.8,0,0),this.set("shinL",.6,0,0),this.set("thighR",.6,0,0),this.set("shinR",.8,0,0),this.hipsYT=-.08,r=20;break}case"hit":{this.set("spine",-.35,0,0),this.set("head",-.3,0,0),this.set("armL",-.5,0,.6),this.set("armR",-.5,0,-.6),r=25;break}case"dead":{this.bodyPitchT=-1.45,this.hipsYT=-.75,this.set("armL",-2.6,0,.6),this.set("armR",-2.6,0,-.6),r=6;break}}if(e.attack){let u=a1[e.attack.type]||Pp,p=u[e.attack.idx%u.length],x=e.attack.p,m=x<.28?0:x<.5?Za((x-.28)/.22):1,g=x<.28?Za(x/.28):x>.8?1-Za((x-.8)/.2)*.6:1,v=w=>{let A=p.a[w],_=p.b[w];if(!A&&!_)return;let T=A||_,P=_||A,I=this.tgt[w];for(let N=0;N<3;N++)I[N]=hi(I[N],hi(T[N],P[N],m),g)};for(let w of["armR","foreR","armL","foreL"])v(w);let b=hi(p.a.tw||0,p.b.tw||0,m)*g,y=hi(p.a.lean||0,p.b.lean||0,m)*g,M=hi(p.a.crouch||0,p.b.crouch||0,m)*g;this.tgt.spine[1]=b*.55,this.tgt.chest[1]=b*.45,this.tgt.spine[0]+=y*.6,this.tgt.head[1]=-b*.6,this.hipsYT-=M,e.mode==="ground"&&n<.5&&(this.set("thighL",-.45,0,.1),this.set("thighR",.35,0,-.1),this.set("shinL",.4,0,0),this.set("shinR",.5,0,0),this.hipsYT-=.05),r=32}if(e.cast){let u=e.cast.p,p=e.cast.kind==="burst",x=u<.2?Za(u/.2):u>.85?1-Za((u-.85)/.15):1,m=p?-2.8:-1.5;this.tgt.armR[0]=hi(this.tgt.armR[0],m,x),this.tgt.armR[2]=hi(this.tgt.armR[2],-.3,x),this.tgt.foreR[0]=hi(this.tgt.foreR[0],-.2,x),p&&(this.tgt.armL[0]=hi(this.tgt.armL[0],-.8,x),this.tgt.armL[2]=hi(this.tgt.armL[2],1,x),this.hipsYT-=.08*x),this.tgt.spine[0]+=(p?-.2:.1)*x,r=24}let l=1-Math.exp(-r*t);for(let u of Uu){let p=this.cur[u],x=this.tgt[u];p[0]+=(x[0]-p[0])*l,p[1]+=(x[1]-p[1])*l,p[2]+=(x[2]-p[2])*l;let m=this.rig.j[u];m&&u!=="hips"&&m.rotation.set(p[0],p[1],p[2])}let c=1-Math.exp(-10*t);this.hipsY+=(this.hipsYT-this.hipsY)*c,this.bodyPitch+=(this.bodyPitchT-this.bodyPitch)*(1-Math.exp(-6*t)),this.bodyRoll+=(this.bodyRollT-this.bodyRoll)*c;let h=this.rig.j;h.hips.position.y=.86+this.hipsY,h.hips.rotation.set(this.cur.hips[0],this.cur.hips[1],this.cur.hips[2]),this.rig.body.rotation.set(this.bodyPitch,0,this.bodyRoll),this.bodyPitch>.5?this.rig.body.position.set(0,.55*Math.sin(this.bodyPitch)*.6,-.4*Math.sin(this.bodyPitch)):this.rig.body.position.set(0,0,0);let f=Math.min(1.3,n*.12+Math.max(0,-(e.vy||0))*.08+(e.mode==="glide"?.9:0));this.capeSwing+=(f-this.capeSwing)*(1-Math.exp(-5*t)),h.cape&&h.cape.rotation.set(-.12-this.capeSwing*.7+Math.sin(i*5.3)*.04*(.3+this.capeSwing),Math.sin(i*2.7)*.05,0),h.skirt&&h.skirt.rotation.set(-this.capeSwing*.25+Math.sin(i*4.1)*.02,0,0),this.faceHold-=t;let d=e.face||"open";this.blink-=t,this.blink<0&&(this.blink<-.12?this.blink=2.5+Math.random()*3.5:d==="open"&&(d="closed")),d!==this.faceMode&&this.rig.faceMat&&this.rig.faceSets&&(this.rig.faceMat.map=this.rig.faceSets[d],this.rig.faceMat.needsUpdate=!0,this.faceMode=d)}};function Ip(s,t,e,i){let n=(i.get("ids")||"sora,akane,mizuha,raika").split(","),r=Number(i.get("ang")||0),a=i.get("pose")||"idle",o=60,l=440,c=e.heightAt(o,l),h=[];n.forEach((g,v)=>{let b=Sn(g,t);b.root.position.set(o+(v-(n.length-1)/2)*.9,c,l),b.root.rotation.y=r,s.scene.add(b.root);let y=new rn(b);b.weapon&&a!=="idle"&&(b.weapon.held.visible=!0),h.push({r:b,a:y})});let f=Ic(t);f.position.set(o+2.2,c+1.5,l),f.rotation.y=r,s.scene.add(f);let d=Number(i.get("zoom")||1),u=s.camera,p=3.6/d,x=c+(d>2?1.45:.95);u.position.set(o+Number(i.get("ox")||0),x+.1,l+p),u.lookAt(o+Number(i.get("ox")||0),x,l);let m=0;return g=>{m+=g;for(let{r:v,a:b}of h){let y={mode:"ground",speed:0};a==="run"&&(y.speed=5.6),a==="sprint"&&(y.speed=9.5),a==="glide"&&(y.mode="glide"),a==="attack"&&(y.attack={type:v.spec.weapon,idx:Math.floor(m/.6)%5,p:m%.6/.6}),b.update(g,y),v.weapon&&v.weapon.float&&v.weapon.float.position.set(.35,1.15+Math.sin(m*2)*.05,.1)}return f.position.y=c+1.5+Math.sin(m*2)*.05,new R(o,c,l)}}var Lp=["attack","jump","dash","skill","burst","interact","map","menu","quest","p1","p2","p3","p4","walk"],Lc=class{constructor(t,e){this.canvas=t,this.keys=new Set,this.held={},this.pressed={},this.released={},this.heldTime={};for(let n of Lp)this.held[n]=!1,this.pressed[n]=!1,this.released[n]=!1,this.heldTime[n]=0;this.move={x:0,y:0},this.look={dx:0,dy:0},this.zoom=0,this.sens=1,this.touch=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,this.enabled=!0,this.virtual={},this.latch={},this.stick={x:0,y:0},this.stickId=null,this.lookId=null,this.mouseBtn={0:!1,2:!1},this.usingPad=!1,this.mouseLook={dx:0,dy:0},this.locked=!1,addEventListener("keydown",n=>{n.repeat||(this.keys.add(n.code),this.keyLatch=this.keyLatch||new Set,this.keyLatch.add(n.code),["Space","Tab","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>this.releaseAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()}),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("mousedown",n=>{this.touch&&n.sourceCapabilities?.firesTouchEvents||(!this.locked&&this.wantLock&&!this.touch&&!this.lockBlocked&&t.requestPointerLock?.(),this.mouseBtn[n.button]=!0,this.mouseLatch=this.mouseLatch||{},this.mouseLatch[n.button]=!0)}),addEventListener("mouseup",n=>{this.mouseBtn[n.button]=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),addEventListener("mousemove",n=>{this.locked&&(this.mouseLook.dx+=n.movementX,this.mouseLook.dy+=n.movementY)}),t.addEventListener("wheel",n=>{this.zoom+=Math.sign(n.deltaY),n.preventDefault()},{passive:!1}),t.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.lookId===null&&(this.lookId=n.pointerId,this.lookLast={x:n.clientX,y:n.clientY},t.setPointerCapture?.(n.pointerId))}),t.addEventListener("pointermove",n=>{n.pointerId===this.lookId&&(this.mouseLook.dx+=(n.clientX-this.lookLast.x)*1.6,this.mouseLook.dy+=(n.clientY-this.lookLast.y)*1.6,this.lookLast={x:n.clientX,y:n.clientY})});let i=n=>{n.pointerId===this.lookId&&(this.lookId=null)};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i),this.wantLock=!0}releaseAll(){this.keys.clear(),this.keyLatch&&this.keyLatch.clear(),this.mouseLatch={},this.latch={},this.mouseBtn[0]=this.mouseBtn[2]=!1;for(let t in this.virtual)this.virtual[t]=!1;this.stick.x=this.stick.y=0,this.stickId=null,this.lookId=null}setVirtual(t,e){this.virtual[t]=e,e&&(this.latch[t]=!0)}update(t){let e=new Set([...this.keys,...this.keyLatch||[]]);this.keyLatch&&this.keyLatch.clear();let i=0,n=0;if(this.enabled){if((e.has("KeyW")||e.has("ArrowUp"))&&(n+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(n-=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(i-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(i+=1),i||n){let p=Math.hypot(i,n);i/=p,n/=p}(this.stick.x||this.stick.y)&&(i=this.stick.x,n=this.stick.y)}let r=navigator.getGamepads?navigator.getGamepads():[],a=r&&[...r].find(p=>p&&p.connected),o={},l=0,c=0;if(a){let p=v=>Math.abs(v)<.15?0:v,x=p(a.axes[0]),m=p(a.axes[1]);(x||m)&&(i=x,n=-m,this.usingPad=!0),l=p(a.axes[2]||0),c=p(a.axes[3]||0);let g=v=>a.buttons[v]&&a.buttons[v].pressed;Object.assign(o,{jump:g(0),dash:g(1),attack:g(2),interact:g(3),skill:g(5),burst:g(7),map:g(8),menu:g(9),p1:g(14),p2:g(12),p3:g(15),p4:g(13)}),Object.values(o).some(Boolean)&&(this.usingPad=!0)}this.move.x=i,this.move.y=n;let h=this.sens;this.look.dx=this.mouseLook.dx*.0025*h+l*2.6*t,this.look.dy=this.mouseLook.dy*.0025*h+c*1.8*t,this.mouseLook.dx=this.mouseLook.dy=0;let f={attack:this.mouseBtn[0]||!!(this.mouseLatch&&this.mouseLatch[0]),jump:e.has("Space"),dash:this.mouseBtn[2]||!!(this.mouseLatch&&this.mouseLatch[2])||e.has("ShiftLeft")||e.has("ShiftRight"),skill:e.has("KeyE"),burst:e.has("KeyQ"),interact:e.has("KeyF"),map:e.has("KeyM"),menu:e.has("Escape"),quest:e.has("KeyJ"),p1:e.has("Digit1"),p2:e.has("Digit2"),p3:e.has("Digit3"),p4:e.has("Digit4"),walk:e.has("ControlLeft")},d=this.mouseLatch;this.mouseLatch={};for(let p of Lp){let x=this.enabled&&!!(f[p]||o[p]||this.virtual[p]||this.latch[p]&&!this.held[p]);this.latch[p]=!1,this.pressed[p]=x&&!this.held[p],this.released[p]=!x&&this.held[p],this.heldTime[p]=x?this.heldTime[p]+t:0,this.held[p]=x}let u=this.zoom;return this.zoom=0,u}};var bs={walk:2,run:5.6,sprint:8.2,dashSpeed:11.5,dashTime:.32,accel:34,decel:26,airAccel:14,jumpV:19.3,jump2V:13.4,jumpCut:.42,gravity:30,maxFall:46,climbSpeed:1.7,climbJump:2.3,glideSpeed:7.5,glideFall:1.7,swimSpeed:3.2,swimFast:5.4,climbSlope:1.15,slideSlope:.95,stamMax:240,stamDash:18,stamSprint:12,stamClimb:9,stamClimbJump:22,stamGlide:5,stamSwim:6,stamSwimFast:14,stamRegen:34,stamDelay:.6,fallSafe:22,radius:.32,waterLevel:0,swimDepth:1.25,voidY:-45},Nc=class{constructor(t,e,i){this.w=t,this.p={x:e,y:t.groundAt(e,i),z:i},this.v={x:0,y:0,z:0},this.face=0,this.mode="ground",this.stam=bs.stamMax,this.stamMax=bs.stamMax,this.stamIdle=0,this.dashT=0,this.sprinting=!1,this.iframe=0,this.climbPhase=0,this.wall=null,this.fallStartY=this.p.y,this.events=[],this.lastSafe={x:e,y:this.p.y,z:i},this.speed=0,this.turn=0,this.lockMove=0,this.jumpCount=0}emit(t){this.events.push(t)}useStam(t){this.stam=Math.max(0,this.stam-t),this.stamIdle=0}update(t,e){let i=bs,n=this.w,r=this.p,a=this.v;this.events.length=0,this.iframe=Math.max(0,this.iframe-t),this.lockMove=Math.max(0,this.lockMove-t);let o=Math.hypot(e.mx,e.my)>.05,l=o?e.mx/Math.hypot(e.mx,e.my):0,c=o?e.my/Math.hypot(e.mx,e.my):0,h=Math.min(1,Math.hypot(e.mx,e.my)),f=n.groundAt(r.x,r.z,r.y),d=i.waterLevel-n.heightAt(r.x,r.z),u=this.face;switch(this.stamIdle+=t,this.mode==="ground"&&!this.sprinting&&this.dashT<=0&&this.stamIdle>i.stamDelay&&(this.stam=Math.min(this.stamMax,this.stam+i.stamRegen*t)),this.mode){case"ground":case"dash":{e.dashP&&this.stam>=1&&this.lockMove<=.15&&(this.mode="dash",this.dashT=i.dashTime,this.iframe=.26,this.useStam(i.stamDash),o&&(this.face=Math.atan2(l,c)),this.emit("dash"));let x=0;if(this.mode==="dash"?(this.dashT-=t,x=i.dashSpeed,this.dashT<=0&&(this.mode="ground",this.sprinting=e.dashH&&this.stam>0)):o&&this.lockMove<=0?(this.sprinting&&(!e.dashH||this.stam<=0||!o)&&(this.sprinting=!1),x=this.sprinting?i.sprint:e.walk||h<.55?i.walk+(i.run-i.walk)*Math.max(0,(h-.2)/.35)*(e.walk?0:1):i.run,this.sprinting&&this.useStam(i.stamSprint*t)):this.sprinting=!1,o&&this.lockMove<=0&&this.mode!=="dash"){let I=Math.atan2(l,c);this.face=Dc(this.face,I,(this.sprinting?9:14)*t)}let m=Math.sin(this.face),g=Math.cos(this.face),v=Math.hypot(a.x,a.z),b=x>v?i.accel:i.decel,y=x>v?Math.min(x,v+b*t):Math.max(x,v-b*t);a.x=m*y,a.z=g*y,e.attackMove&&(a.x+=Math.sin(this.face)*e.attackMove,a.z+=Math.cos(this.face)*e.attackMove);let M=r.x+a.x*t,w=r.z+a.z*t;if((n.heightAt(M+m*.4,w+g*.4)-n.heightAt(r.x,r.z))/Math.max(.05,Math.hypot(M+m*.4-r.x,w+g*.4-r.z))>i.climbSlope&&y>.5&&o&&this.stam>5){this.startClimb();break}r.x=M,r.z=w;let _=n.pushOut(r,i.radius,r.y);if(_&&_.box&&_.climbable!==!1&&o&&this.stam>5&&_.top>r.y+1.2){let I=Math.atan2(l,c);this.wall=_,this.mode="climb",this.face=I,a.x=a.y=a.z=0,this.emit("climb");break}let T=n.groundAt(r.x,r.z,r.y);T<r.y-.6?(this.mode="air",this.fallStartY=r.y,a.y=0,this.airJumps=1,this.jumpHeld=!1):r.y=T;let P=n.slopeAt(r.x,r.z);if(P>i.slideSlope&&T===n.heightAt(r.x,r.z)){let I=n.cell,N=n.heightAt(r.x+I,r.z)-n.heightAt(r.x-I,r.z),U=n.heightAt(r.x,r.z+I)-n.heightAt(r.x,r.z-I),D=Math.hypot(N,U)||1;r.x-=N/D*4*t*(P-i.slideSlope)*3,r.z-=U/D*4*t*(P-i.slideSlope)*3,r.y=n.groundAt(r.x,r.z,r.y)}e.jumpP&&this.lockMove<=.2&&(a.y=i.jumpV,this.mode="air",this.fallStartY=r.y,this.emit("jump"),this.sprinting=!1,this.jumpHeld=!0,this.airJumps=1),d>i.swimDepth+.2&&r.y<i.waterLevel-i.swimDepth+.05&&this.enterSwim(),(this.mode==="ground"||this.mode==="dash")&&this.lastSafeUpdate();break}case"air":{if(o){let y=Math.atan2(l,c);this.face=Dc(this.face,y,6*t);let M=Math.max(i.run*.9,Math.hypot(a.x,a.z));a.x+=(l*M-a.x)*Math.min(1,i.airAccel*t*.25),a.z+=(c*M-a.z)*Math.min(1,i.airAccel*t*.25)}this.jumpHeld&&!e.jumpH&&(a.y>0&&(a.y*=i.jumpCut),this.jumpHeld=!1),a.y<=0&&(this.jumpHeld=!1),e.jumpP&&this.airJumps>0&&(this.airJumps--,a.y=i.jump2V,this.jumpHeld=!0,this.fallStartY=Math.max(this.fallStartY,r.y),this.emit("jump2"),e={...e,jumpP:!1}),a.y=Math.max(-i.maxFall,a.y-i.gravity*t),r.x+=a.x*t,r.z+=a.z*t,r.y+=a.y*t,n.pushOut(r,i.radius,r.y),a.y>0&&(this.fallStartY=Math.max(this.fallStartY,r.y));let x=n.groundAt(r.x,r.z,r.y+.3),m=r.y-n.heightAt(r.x,r.z);if(e.jumpP&&a.y<4&&m>2&&this.stam>1){this.mode="glide",this.emit("glide");break}let g=Math.sin(this.face),v=Math.cos(this.face),b=n.heightAt(r.x+g*.5,r.z+v*.5)-r.y;if(o&&b>.6&&n.slopeAt(r.x+g*.5,r.z+v*.5)>i.climbSlope&&this.stam>5){this.startClimb();break}r.y<=x&&(r.y=x,this.land()),d>i.swimDepth&&r.y<i.waterLevel-i.swimDepth+.3&&this.enterSwim(!0);break}case"glide":{this.useStam(i.stamGlide*t),o&&(this.face=Dc(this.face,Math.atan2(l,c),2.6*t)),this.turn=Ms(u,this.face)/Math.max(t,.001)*.15;let x=Math.sin(this.face),m=Math.cos(this.face),g=o?i.glideSpeed:i.glideSpeed*.75;a.x+=(x*g-a.x)*Math.min(1,3*t),a.z+=(m*g-a.z)*Math.min(1,3*t),a.y+=(-i.glideFall-a.y)*Math.min(1,4*t),e.upDraft&&(a.y=Math.min(12,a.y+e.upDraft*t*30)),r.x+=a.x*t,r.z+=a.z*t,r.y+=a.y*t,n.pushOut(r,i.radius,r.y),this.fallStartY=r.y;let v=n.groundAt(r.x,r.z,r.y+.3);r.y<=v?(r.y=v,this.mode="ground",this.emit("land")):(e.jumpP||this.stam<=0)&&(this.mode="air",this.emit("glideEnd")),d>i.swimDepth&&r.y<i.waterLevel-i.swimDepth+.3&&this.enterSwim(!0);break}case"climb":this.updateClimb(t,e,o,l,c);break;case"swim":{let x=e.dashH&&this.stam>0;this.useStam((x?i.stamSwimFast:o?i.stamSwim:i.stamSwim*.3)*t);let m=o?x?i.swimFast:i.swimSpeed:0;o&&(this.face=Dc(this.face,Math.atan2(l,c),5*t));let g=Math.sin(this.face),v=Math.cos(this.face);a.x+=(g*m-a.x)*Math.min(1,4*t),a.z+=(v*m-a.z)*Math.min(1,4*t),r.x+=a.x*t,r.z+=a.z*t,n.pushOut(r,i.radius,r.y);let b=n.heightAt(r.x,r.z);r.y+=(i.waterLevel-i.swimDepth-r.y)*Math.min(1,6*t),b>i.waterLevel-i.swimDepth-.05&&(r.y=Math.max(r.y,b),this.mode="ground",this.emit("exitWater")),this.stam<=0&&(this.emit("drown"),this.respawnSafe());break}}(r.y<i.voidY||Math.hypot(r.x,r.z)>660)&&(this.emit("void"),this.respawnSafe()),this.speed=Math.hypot(a.x,a.z),(this.mode==="ground"||this.mode==="dash")&&(this.turn=Ms(u,this.face)/Math.max(t,.001)*.08)}land(){let t=bs,e=this.fallStartY-this.p.y;this.airJumps=0,this.jumpHeld=!1,this.mode="ground",this.v.y=0,this.emit("land"),e>t.fallSafe&&this.emit({type:"fallDamage",frac:Math.min(.9,(e-t.fallSafe)*.04)})}startClimb(){this.mode="climb",this.wall=null,this.v.x=this.v.y=this.v.z=0,this.emit("climb")}enterSwim(t){this.mode="swim",this.v.y=0,this.sprinting=!1,t&&this.emit("splash"),this.emit("swim")}lastSafeUpdate(){let t=this.p;this.w.slopeAt(t.x,t.z)<.6&&this.w.heightAt(t.x,t.z)>.4&&Math.hypot(t.x,t.z)<600&&(this.lastSafe.x=t.x,this.lastSafe.y=t.y,this.lastSafe.z=t.z)}respawnSafe(){let t=this.lastSafe;this.p.x=t.x,this.p.y=this.w.groundAt(t.x,t.z)+.05,this.p.z=t.z,this.v.x=this.v.y=this.v.z=0,this.mode="ground",this.stam=Math.max(this.stam,this.stamMax*.3),this.emit("respawn")}updateClimb(t,e,i,n,r){let a=bs,o=this.w,l=this.p;if(this.wall){let v=this.wall,b=e.myRaw||0,y=e.mxRaw||0;(b||y)&&(this.useStam(a.stamClimb*t),this.climbPhase+=t*2.5),l.y+=b*a.climbSpeed*t;let M=-Math.cos(this.face),w=Math.sin(this.face);l.x+=M*y*a.climbSpeed*t,l.z+=w*y*a.climbSpeed*t,l.x+=Math.sin(this.face)*.5*t,l.z+=Math.cos(this.face)*.5*t,o.pushOut(l,a.radius,l.y),e.jumpP&&this.stam>a.stamClimbJump*.5&&(this.useStam(a.stamClimbJump),l.y+=a.climbJump,this.emit("climbJump")),l.y>=v.top-.2?(l.y=v.top,l.x+=Math.sin(this.face)*.8,l.z+=Math.cos(this.face)*.8,this.mode="ground",this.wall=null,this.emit("vault")):(this.stam<=0||e.dashP||!o.insideCollider(v,l.x+Math.sin(this.face)*.5,l.z+Math.cos(this.face)*.5,.1))&&(this.mode="air",this.wall=null,this.fallStartY=l.y,this.v.y=0,this.p.x-=Math.sin(this.face)*.3,this.p.z-=Math.cos(this.face)*.3,this.emit("climbEnd"));let A=o.heightAt(l.x,l.z);l.y<A&&(l.y=A,this.mode="ground",this.wall=null);return}let c=o.cell,h=(o.heightAt(l.x+c,l.z)-o.heightAt(l.x-c,l.z))/(2*c),f=(o.heightAt(l.x,l.z+c)-o.heightAt(l.x,l.z-c))/(2*c),d=Math.hypot(h,f);if(d<.75){this.mode="ground",this.v.y=0,this.emit("vault"),l.y=o.groundAt(l.x,l.z);return}let u=h/d,p=f/d;this.face=Math.atan2(u,p);let x=e.myRaw||0,m=e.mxRaw||0;(x||m)&&(this.useStam(a.stamClimb*t),this.climbPhase+=t*2.5);let g=a.climbSpeed*t/Math.sqrt(1+d*d);if(l.x+=u*x*g-p*m*a.climbSpeed*t,l.z+=p*x*g+u*m*a.climbSpeed*t,e.jumpP&&this.stam>4){this.useStam(a.stamClimbJump);let v=a.climbJump/Math.sqrt(1+d*d);l.x+=u*v,l.z+=p*v,this.emit("climbJump")}l.y=o.heightAt(l.x,l.z),o.pushOut(l,a.radius,l.y),(this.stam<=0||e.dashP)&&(this.mode="air",this.fallStartY=l.y,this.v.x=-u*1.5,this.v.z=-p*1.5,this.v.y=0,l.x-=u*.4,l.z-=p*.4,this.emit("climbEnd")),x<0&&d<1.1&&o.slopeAt(l.x-u*.3,l.z-p*.3)<a.slideSlope&&(this.mode="ground")}};function Ms(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Dc(s,t,e){let i=Ms(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}var Fc=class{constructor(t,e){this.cam=t,this.w=e,this.yaw=Math.PI,this.pitch=.22,this.dist=5.6,this.distT=5.6,this.curDist=5.6,this.target=new R,this.smoothTarget=new R,this.autoFollow=!1,this.shake=0,this.extraDist=0,this.override=null,this.inited=!1}input(t,e,i){this.yaw-=t,this.pitch=Math.max(-1.1,Math.min(1.25,this.pitch+e)),i&&(this.distT=Math.max(2.4,Math.min(10,this.distT+i*.7)))}clearDist(t,e,i,n,r,a,o){let l=o;for(let c=.4;c<=o;c+=.35){let h=t+n*c,f=e+r*c,d=i+a*c;if(f<this.w.heightAt(h,d)+.35){l=Math.max(.6,c-.4);break}}for(let c of this.w.nearColliders(t,i,o+2)){if(!c.box||c.top==null||c.noCam)continue;let h=o1(t,e,i,n,r,a,c);h!=null&&h<l&&(l=Math.max(.6,h-.3))}return l}update(t,e,i={}){this.target.set(e.x,e.y+(i.low?1:1.5),e.z),this.inited||(this.smoothTarget.copy(this.target),this.inited=!0);let n=1-Math.exp(-(i.fast?22:12)*t);if(this.smoothTarget.lerp(this.target,n),this.smoothTarget.y+=(this.target.y-this.smoothTarget.y)*(1-Math.exp(-8*t))*.3,this.autoFollow&&i.moving&&!i.combat){let p=e.face+Math.PI-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,t*.9)*Math.min(1,i.speed/5)}let r=this.distT+this.extraDist+(i.combat?.8:0)+(i.glide?1.2:0);this.dist+=(r-this.dist)*(1-Math.exp(-4*t));let a=Math.cos(this.pitch),o=Math.sin(this.pitch),l=Math.sin(this.yaw)*a,c=o,h=Math.cos(this.yaw)*a,f=this.smoothTarget,d=this.clearDist(f.x,f.y,f.z,l,c,h,this.dist);this.curDist+=(d-this.curDist)*(d<this.curDist?.6:1-Math.exp(-3*t)),this.cam.position.set(f.x+l*this.curDist,f.y+c*this.curDist,f.z+h*this.curDist);let u=this.w.heightAt(this.cam.position.x,this.cam.position.z)+.3;if(this.cam.position.y<u&&(this.cam.position.y=u),this.cam.lookAt(f),this.shake>0){this.shake=Math.max(0,this.shake-t*3);let p=this.shake*this.shake*.08;this.cam.position.x+=(Math.random()-.5)*p,this.cam.position.y+=(Math.random()-.5)*p}if(this.override){let p=this.override;p.t-=t,this.cam.position.lerp(p.pos,1-Math.exp(-10*t)),this.cam.lookAt(p.look),p.t<=0&&(this.override=null)}}toWorld(t,e){let i=-Math.sin(this.yaw),n=-Math.cos(this.yaw),r=-n,a=i;return{x:i*e+r*t,z:n*e+a*t}}};function o1(s,t,e,i,n,r,a){let o=a.rot||0,l=Math.cos(-o),c=Math.sin(-o),h=(s-a.x)*l-(e-a.z)*c,f=(s-a.x)*c+(e-a.z)*l,d=i*l-r*c,u=i*c+r*l,p=a.bottom??-1e3,x=0,m=1e9,g=[[h,d,-a.hw,a.hw],[t,n,p,a.top],[f,u,-a.hd,a.hd]];for(let[v,b,y,M]of g){if(Math.abs(b)<1e-6){if(v<y||v>M)return null;continue}let w=(y-v)/b,A=(M-v)/b;if(w>A&&([w,A]=[A,w]),x=Math.max(x,w),m=Math.min(m,A),x>m)return null}return x>.05?x:null}var Fp={wind:"\u98A8",fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37",phys:"\u7269\u7406"},an={wind:"#6ff0d0",fire:"#ff8a4a",water:"#5ab8ff",thunder:"#c690ff",ice:"#a8eeff",phys:"#ffffff"},zp={vaporize:"\u84B8\u767A",melt:"\u6EB6\u89E3",overload:"\u904E\u8CA0\u8377",electro:"\u611F\u96FB",superconduct:"\u8D85\u96FB\u5C0E",freeze:"\u51CD\u7D50",swirl:"\u62E1\u6563"};function Dp(s){return s>=2?12:9.5}function l1(s,t){if(!s||!t||t==="phys"||s===t)return null;let e=(i,n)=>s===i&&t===n||s===n&&t===i;return t==="wind"?s==="wind"?null:"swirl":s==="wind"?null:e("fire","water")?"vaporize":e("fire","ice")?"melt":e("fire","thunder")?"overload":e("water","thunder")?"electro":e("ice","thunder")?"superconduct":e("water","ice")?"freeze":null}function c1(s,t){return s==="vaporize"?t==="water"?2:1.5:s==="melt"?t==="fire"?2:1.5:1}var h1={overload:2,electro:1.2,superconduct:.5,swirl:.6};function Np(s,t){return(s*18+60)*(h1[t]||0)}function zc(s,t,e=0){let i=s+100,n=(t+100)*(1-e);return i/(i+n)}function u1(s){return s<0?1-s/2:s<.75?1-s:1/(4*s+1)}function ku(s,t){let e=t.el||"phys",i=1,n=null,r=null,a=s.aura&&s.aura.time>0?s.aura.el:null;e!=="phys"&&(n=l1(a,e),n==="vaporize"||n==="melt"?(i=c1(n,e),s.aura=null):n==="swirl"?(r={type:"swirl",el:a,dmg:Np(t.lv,"swirl")},s.aura.gauge-=.5,s.aura.gauge<=0&&(s.aura=null)):n?(r={type:n,el:e,dmg:Np(t.lv,n)},n==="freeze"?(s.frozen=2+(t.units||1)*1,s.aura={el:"ice",gauge:1,time:s.frozen+.5}):n==="electro"?(s.electro=3,s.aura=null):(n==="superconduct"&&(s.physShred=12),s.aura=null)):e!=="wind"&&(a===e?s.aura.time=Math.max(s.aura.time,Dp(t.units||1)):s.aura={el:e,gauge:t.units||1,time:Dp(t.units||1)}));let o=(s.res&&s.res[e])??.1,l=e==="phys"&&s.physShred>0?o-.4:o,h=(t.rng?t.rng():Math.random())<(t.crit??.05),f=t.atk*t.mult*(1+(t.bonus||0))*zc(t.lv,s.lv)*u1(l)*i;return h&&(f*=1+(t.critDmg??.5)),f=Math.max(1,Math.round(f)),{dmg:f,crit:h,reaction:n,transform:r}}function ja(s){return Math.round(120*Math.pow(s,1.55))}function Uc(s,t){return Math.round(s*(1+(t-10)*.065))}var Ja={sora:{name:"\u30BD\u30E9",el:"wind",weapon:"sword",hp:1600,atk:300,def:90,energy:60,skillCD:6,skillHoldCD:9,title:"\u98A8\u306E\u65C5\u4EBA"},akane:{name:"\u30A2\u30AB\u30CD",el:"fire",weapon:"claymore",hp:1800,atk:340,def:100,energy:70,skillCD:10,title:"\u7D05\u84EE\u306E\u885B\u5175\u968A\u9577"},mizuha:{name:"\u30DF\u30BA\u30CF",el:"water",weapon:"catalyst",hp:1450,atk:260,def:80,energy:80,skillCD:12,title:"\u6CC9\u306E\u5DEB\u5973"},raika:{name:"\u30E9\u30A4\u30AB",el:"thunder",weapon:"bow",hp:1350,atk:310,def:75,energy:60,skillCD:8,title:"\u68EE\u306E\u72E9\u4EBA"}},Up={sword:[{mult:.55,dur:.42,hit:.45,range:2.6,arc:.1,lunge:3.5},{mult:.55,dur:.42,hit:.45,range:2.6,arc:.1,lunge:3.5},{mult:.68,dur:.48,hit:.5,range:2.8,arc:.3,lunge:4},{mult:.74,dur:.5,hit:.45,range:2.8,arc:-.1,lunge:3},{mult:.95,dur:.62,hit:.5,range:3,arc:.2,lunge:5}],claymore:[{mult:.95,dur:.7,hit:.5,range:3.2,arc:.2,lunge:3},{mult:.9,dur:.66,hit:.5,range:3.2,arc:-.2,lunge:2.5},{mult:1.05,dur:.7,hit:.5,range:3.2,arc:-.2,lunge:2.5},{mult:1.45,dur:.85,hit:.55,range:3.6,arc:.3,lunge:4,shake:.6}],catalyst:[{mult:.62,dur:.48,hit:.45,proj:{speed:16,r:.6,el:"water"}},{mult:.58,dur:.48,hit:.45,proj:{speed:16,r:.6,el:"water"}},{mult:.82,dur:.6,hit:.5,proj:{speed:15,r:.8,el:"water",count:3}}],bow:[{mult:.42,dur:.32,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.42,dur:.32,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.5,dur:.36,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.5,dur:.36,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.66,dur:.45,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0,count:2}}]},Bu={sword:{mult:1.3,dur:.7,hit:.5,range:3,arc:-.5,stam:20},claymore:{mult:.8,dur:.5,hit:.5,range:3.4,arc:-1,stam:40,spin:!0},catalyst:{mult:1.6,dur:.8,hit:.6,aoe:3.2,el:"water",stam:50},bow:{mult:1.9,dur:.55,hit:.4,proj:{speed:44,r:.5,el:"thunder",arrow:!0},stam:0}},kc=class{constructor(t,e=10,i=0){this.id=t,this.def0=Ja[t],this.lv=e,this.exp=i,this.recalc(),this.hp=this.maxHp,this.energy=0,this.skillT=0,this.alive=!0,this.infuse=0}recalc(){let t=this.def0;this.maxHp=Uc(t.hp,this.lv)+(this.bonusHp||0),this.atk=Uc(t.atk,this.lv)+(this.bonusAtk||0),this.def=Uc(t.def,this.lv)}get el(){return this.def0.el}get name(){return this.def0.name}addExp(t){this.exp+=t;let e=!1;for(;this.lv<40&&this.exp>=ja(this.lv);){this.exp-=ja(this.lv),this.lv++,e=!0;let i=this.hp/this.maxHp;this.recalc(),this.hp=Math.round(this.maxHp*Math.max(i,.5))}return e}save(){return{lv:this.lv,exp:this.exp,hp:this.hp,energy:this.energy,bonusHp:this.bonusHp||0,bonusAtk:this.bonusAtk||0}}load(t){t&&(this.lv=t.lv,this.exp=t.exp,this.bonusHp=t.bonusHp||0,this.bonusAtk=t.bonusAtk||0,this.recalc(),this.hp=Math.min(this.maxHp,t.hp??this.maxHp),this.energy=t.energy||0,this.alive=this.hp>0)}};var kp={wind:7336144,fire:16742960,water:4894975,thunder:12615935,ice:10545919,phys:16774360,heal:10158e3,gold:16767082},wn=s=>new ct(kp[s]??kp.phys),Bc=class{constructor(t,e){this.scene=t;let i=this.N=4e3,n=new Qt;this.pos=new Float32Array(i*3),this.col=new Float32Array(i*3),this.size=new Float32Array(i),this.alpha=new Float32Array(i),this.vel=new Float32Array(i*3),this.life=new Float32Array(i),this.maxLife=new Float32Array(i),this.grav=new Float32Array(i),this.drag=new Float32Array(i),this.size0=new Float32Array(i),n.setAttribute("position",new fe(this.pos,3)),n.setAttribute("color",new fe(this.col,3)),n.setAttribute("size",new fe(this.size,1)),n.setAttribute("alpha",new fe(this.alpha,1));let r=new Me({uniforms:{map:{value:e.dot},uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC * a * 2.2, a); }`,transparent:!0,depthWrite:!1,blending:ii});this.points=new sa(n,r),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.rings=[],this.trails=[],this.bolts=[],this.orbs=[],this.decals=[],this.ringGeo=new cs(.85,1,48),this.ringGeo.rotateX(-Math.PI/2),this.spark=e.spark}emit(t){let e=typeof t.color=="number"?new ct(t.color):t.color instanceof ct?t.color:wn(t.color);for(let i=0;i<(t.n||10);i++){let n=this.next;this.next=(this.next+1)%this.N;let r=(t.speed??3)*(.4+Math.random()*.6),a=Math.random()*2-1,o=Math.random()*2-1,l=Math.random()*2-1,c=Math.hypot(a,o,l)||1;a/=c,o/=c,l/=c,t.dir&&(a=t.dir.x+a*(t.spread??.3),o=t.dir.y+o*(t.spread??.3),l=t.dir.z+l*(t.spread??.3));let h=t.radius||0;this.pos[n*3]=t.x+(Math.random()-.5)*h,this.pos[n*3+1]=t.y+(Math.random()-.5)*h*(t.flat?.1:1),this.pos[n*3+2]=t.z+(Math.random()-.5)*h,this.vel[n*3]=a*r,this.vel[n*3+1]=o*r+(t.up||0),this.vel[n*3+2]=l*r;let f=.8+Math.random()*.4;this.col[n*3]=e.r*f,this.col[n*3+1]=e.g*f,this.col[n*3+2]=e.b*f,this.maxLife[n]=this.life[n]=(t.life??.6)*(.6+Math.random()*.6),this.size0[n]=(t.size??.25)*(.6+Math.random()*.8),this.grav[n]=t.grav??0,this.drag[n]=t.drag??2}}ring(t,e,i,n,r=3,a=.45,o=.8){let l=new nt(this.ringGeo,new se({color:wn(n),transparent:!0,opacity:o,blending:ii,depthWrite:!1,side:Ie}));l.position.set(t,e+.08,i),l.scale.setScalar(.2),this.scene.add(l),this.rings.push({m:l,t:0,life:a,r1:r,op:o})}trail(t,e,i,n){let a=new Qt,o=new Float32Array(102),l=new Float32Array(34);a.setAttribute("position",new fe(o,3)),a.setAttribute("a",new fe(l,1));let c=[];for(let u=0;u<16;u++){let p=u*2;c.push(p,p+1,p+2,p+1,p+3,p+2)}a.setIndex(c);let h=new Me({uniforms:{uCol:{value:wn(i)},uFade:{value:1}},vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uCol; uniform float uFade; varying float vA; void main(){ float k = vA*uFade; gl_FragColor = vec4(mix(uCol, vec3(1.0), k*k*0.7) * k * 1.8, k); }",transparent:!0,depthWrite:!1,blending:ii,side:Ie}),f=new nt(a,h);f.frustumCulled=!1,f.renderOrder=6,this.scene.add(f);let d=[];this.trails.push({m:f,getBase:t,getTip:e,hist:d,t:0,dur:n,segs:16})}bolt(t,e,i="thunder",n=.18,r=3){let a=[];for(let h=0;h<=8;h++){let f=h/8,d=new R().lerpVectors(t,e,f);h>0&&h<8&&d.add(new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(t.distanceTo(e)*.12)),a.push(d)}let l=new Qt().setFromPoints(a),c=new na(l,new lr({color:wn(i),transparent:!0,blending:ii,linewidth:r}));c.renderOrder=6,this.scene.add(c),this.bolts.push({m:c,t:0,life:n})}orb(t,e,i,n,r,a){let o=new Fn(new vn({map:this.spark,color:wn(n),blending:ii,depthWrite:!1}));o.scale.setScalar(.6),o.position.set(t,e,i),this.scene.add(o),this.orbs.push({s:o,v:new R((Math.random()-.5)*4,4+Math.random()*2,(Math.random()-.5)*4),t:0,el:n,value:r,onPick:a})}shape(t,e,i,n,r={}){let o={uCol:{value:wn(i)},uTime:{value:0},uLife:{value:0}},l=ii,c,h;t==="tornado"?(c=new Vt(2.6,.5,7,32,8,!0),c.translate(0,3.5,0),h="float s = sin(vUv.x*40.0 + vUv.y*14.0 - uTime*14.0)*0.5+0.5; float s2 = sin(vUv.x*18.0 - vUv.y*9.0 - uTime*9.0)*0.5+0.5; float a = smoothstep(0.55,1.0,s*0.7+s2*0.5) * smoothstep(0.0,0.15,vUv.y) * smoothstep(1.0,0.75,vUv.y);"):t==="arc"?(c=new cs(1.2,r.r||6,48,4,-1.4,2.8),c.rotateX(-Math.PI/2),h="float R = "+(r.r||6).toFixed(2)+"; float r = length(vPos.xz) / R; float ang = atan(vPos.z, vPos.x); float a = (1.0 - abs(ang) / 1.4) * smoothstep(0.25, 0.7, r) * (1.0 - smoothstep(0.9, 1.0, r)) * (1.0 - uLife) * 1.6; a *= 0.7 + 0.3*sin(r*30.0 - uTime*20.0);",c.attributes.uv.array.forEach((p,x,m)=>{})):t==="dome"?(c=new Jt(r.r||8,40,20,0,Math.PI*2,0,Math.PI/2),h="float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.5); float w = sin(vUv.y*30.0 - uTime*3.0)*0.5+0.5; float a = (rim*0.9 + w*0.12 + 0.05) * smoothstep(0.0,0.08,uLife) * (1.0 - smoothstep(0.9,1.0,uLife));"):t==="cloud"?(c=new oa(r.r||7,40),c.rotateX(Math.PI/2),h="vec2 q = vUv - 0.5; float d = length(q); float n = sin(atan(q.y,q.x)*7.0 + uTime*1.5)*0.04; float a = smoothstep(0.5, 0.25 + n, d) * 0.75 * smoothstep(0.0,0.1,uLife) * (1.0 - smoothstep(0.85,1.0,uLife));"):t==="swirl"&&(c=new cs(.3,r.r||3.5,48,2),c.rotateX(-Math.PI/2),h="vec2 q = vPos.xz; float ang = atan(q.y, q.x); float rr = length(q); float a = smoothstep(0.6,1.0, sin(ang*3.0 + rr*1.6 - uTime*12.0)*0.5+0.5) * (1.0 - uLife) * smoothstep(0.3, 1.0, rr);");let f=new Me({uniforms:o,transparent:!0,depthWrite:!1,blending:t==="cloud"?Gn:l,side:Ie,vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vPos; void main(){ vUv = uv; vPos = position; vN = normalMatrix*normal; vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uCol; uniform float uTime, uLife; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vPos; void main(){ "+h+(t==="cloud"?" gl_FragColor = vec4(mix(vec3(0.15,0.12,0.25), uCol*0.6, 0.3), a); }":" gl_FragColor = vec4(mix(uCol, vec3(1.0), 0.25)*a*1.6, a); }")}),d=new nt(c,f);d.position.copy(e),d.renderOrder=7,d.frustumCulled=!1,r.rotY!=null&&(d.rotation.y=r.rotY),this.scene.add(d);let u={m:d,t:0,life:n,follow:r.follow,grow:r.grow};return(this.shapes||(this.shapes=[])).push(u),u}update(t,e){this.shapes=(this.shapes||[]).filter(n=>{n.t+=t;let r=n.t/n.life;return n.m.material.uniforms.uTime.value+=t,n.m.material.uniforms.uLife.value=Math.min(1,r),n.follow&&n.m.position.copy(n.follow()),n.grow&&n.m.scale.setScalar(n.grow(r)),r>=1?(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),!1):!0});for(let n=0;n<this.N;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let r=Math.exp(-this.drag[n]*t);this.vel[n*3]*=r,this.vel[n*3+1]=this.vel[n*3+1]*r-this.grav[n]*t,this.vel[n*3+2]*=r,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let a=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=Math.min(1,a*2.2)*(a<.98?1:.5),this.size[n]=this.size0[n]*(.4+a*.8)}let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0,i.attributes.alpha.needsUpdate=!0,this.rings=this.rings.filter(n=>{n.t+=t;let r=n.t/n.life;return n.m.scale.setScalar(.2+(n.r1-.2)*(1-(1-r)*(1-r))),n.m.material.opacity=n.op*(1-r),r>=1?(this.scene.remove(n.m),n.m.material.dispose(),!1):!0}),this.trails=this.trails.filter(n=>{n.t+=t,n.t<n.dur?(n.hist.unshift([n.getBase().clone(),n.getTip().clone()]),n.hist.length>n.segs+1&&n.hist.pop()):n.hist.pop();let r=n.m.geometry.attributes.position,a=n.m.geometry.attributes.a;for(let o=0;o<=n.segs;o++){let l=n.hist[Math.min(o,n.hist.length-1)];if(!l)continue;r.setXYZ(o*2,l[0].x,l[0].y,l[0].z),r.setXYZ(o*2+1,l[1].x,l[1].y,l[1].z);let c=o<n.hist.length?1-o/n.segs:0;a.setX(o*2,c*.15),a.setX(o*2+1,c)}return r.needsUpdate=!0,a.needsUpdate=!0,n.hist.length<=1&&n.t>=n.dur?(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),!1):!0}),this.bolts=this.bolts.filter(n=>(n.t+=t,n.m.material.opacity=1-n.t/n.life,n.t>=n.life?(this.scene.remove(n.m),n.m.geometry.dispose(),!1):!0)),this.orbs=this.orbs.filter(n=>{if(n.t+=t,n.t<.5)n.v.y-=12*t,n.s.position.addScaledVector(n.v,t);else{let r=new R(e.x-n.s.position.x,e.y+1-n.s.position.y,e.z-n.s.position.z),a=r.length();if(n.s.position.addScaledVector(r.normalize(),Math.min(a,(8+n.t*14)*t)),a<.5)return n.onPick&&n.onPick(n.el,n.value),this.emit({x:n.s.position.x,y:n.s.position.y,z:n.s.position.z,n:8,color:n.el,speed:2,life:.4,size:.2}),this.scene.remove(n.s),!1}return n.s.scale.setScalar(.5+Math.sin(n.t*12)*.08),!0})}};var oe=(s=0,t=0,e=0)=>new R(s,t,e),Oc=class{constructor(t){this.g=t,this.act=null,this.combo=0,this.comboT=0,this.holdT=0,this.projs=[],this.fields=[],this.slots=new Set,this.inCombatT=0,this.arrowGeo=new Vt(.015,.015,.7,4),this.arrowGeo.rotateX(Math.PI/2)}get busy(){return!!this.act}get combat(){return this.inCombatT>0}requestAttackSlot(t){return t.type==="boss"||t.type==="guardian"||this.slots.has(t)?!0:this.slots.size<2?(this.slots.add(t),!0):(t.cool=.5+Math.random(),!1)}releaseAttackSlot(t){this.slots.delete(t)}update(t){let e=this.g,i=e.input,n=e.mover,r=e.activeMember;this.inCombatT=Math.max(0,this.inCombatT-t),this.comboT-=t,this.comboT<=0&&(this.combo=0),r.infuse>0&&(r.infuse-=t);for(let l of e.party)l.skillT=Math.max(0,l.skillT-t);let a=n.mode==="ground"||n.mode==="dash";i.held.attack?this.holdT+=t:(this.holdT=0,this.chargedFired=!1);let o=e.activeRig.spec.weapon;if(e.canControl&&(i.pressed.attack&&(!this.act&&a?this.startNormal():this.act&&this.act.kind==="normal"&&(this.queued=!0)),i.held.attack&&this.holdT>.42&&!this.chargedFired&&a&&n.stam>=(Bu[o].stam||0)&&(!this.act||this.act.kind==="normal"&&this.act.t/this.act.dur>.35)&&(this.chargedFired=!0,this.act=null,this.queued=!1,this.startCharged()),!this.act&&a&&(i.pressed.burst&&r.energy>=r.def0.energy?this.startBurst():i.pressed.burst?e.notify("\u5143\u7D20\u30A8\u30CD\u30EB\u30AE\u30FC\u304C\u8DB3\u308A\u306A\u3044","phys"):i.pressed.skill&&r.skillT>0?e.notify(`\u5143\u7D20\u30B9\u30AD\u30EB\u306F\u6E96\u5099\u4E2D\uFF08${r.skillT.toFixed(1)}\u79D2\uFF09`,"phys"):i.pressed.skill?e.activeId==="sora"?this.skillPressT=0:this.startSkill(!1):this.skillPressT!=null&&i.held.skill?(this.skillPressT+=t,this.skillPressT>.4&&(this.skillPressT=null,this.startSkill(!0))):this.skillPressT!=null&&!i.held.skill&&(this.skillPressT=null,this.startSkill(!1)))),this.act){let l=this.act;l.t+=t;let c=l.t/l.dur;l.face!=null&&(n.face=l.face);for(let h of l.hits)!h.done&&c>=h.at&&(h.done=!0,h.fn());if(l.tick&&l.tick(t,c),c>=1||l.cancelable&&n.mode==="dash"){this.act=null;let h=e.activeRig;this.queued&&(this.queued=!1,n.mode==="ground"&&this.startNormal())}this.act&&i.pressed.dash&&this.act.kind!=="burst"&&(this.act=null,this.queued=!1)}this.projs=this.projs.filter(l=>this.updateProj(l,t)),this.fields=this.fields.filter(l=>this.updateField(l,t))}attackState(){let t=this.act;return t&&(t.kind==="normal"||t.kind==="charged")?{type:t.weapon,idx:t.anim??t.idx,p:Math.min(1,t.t/t.dur)}:null}castState(){let t=this.act;return t&&(t.kind==="skill"||t.kind==="burst")?{kind:t.kind,p:Math.min(1,t.t/t.dur)}:null}autoFace(t=7){let e=this.g,i=e.mover,n=null,r=1e9,a=e.camRig.toWorld(e.input.move.x,e.input.move.y),o=Math.hypot(a.x,a.z)>.2,l=o?Math.atan2(a.x,a.z):i.face;for(let c of e.enemies){if(c.dead)continue;let h=c.pos.x-i.p.x,f=c.pos.z-i.p.z,d=Math.hypot(h,f)-c.r;if(d>t)continue;let u=Math.abs(Bp(l,Math.atan2(h,f))),p=d+u*3;p<r&&(r=p,n=c)}return n?i.face=Math.atan2(n.pos.x-i.p.x,n.pos.z-i.p.z):o&&(i.face=l),n}startNormal(){let t=this.g,e=t.activeRig.spec.weapon,i=t.activeMember,n=Up[e],r=this.combo%n.length,a=n[r];this.combo++,this.comboT=a.dur+.75;let o=this.autoFace(a.proj?18:7),l=t.mover.face,c=this.act={kind:"normal",weapon:e,idx:r,t:0,dur:a.dur,hits:[],face:l,cancelable:!0};t.mover.lockMove=a.dur*.85,this.inCombatT=Math.max(this.inCombatT,4);let h=i.infuse>0?"fire":a.proj?a.proj.el:"phys";a.proj?c.hits.push({at:a.hit,fn:()=>{let f=a.proj.count||1;for(let d=0;d<f;d++)this.shoot({from:this.handPos(),target:o,face:l+(d-(f-1)/2)*.12,speed:a.proj.speed,r:a.proj.r,el:h,units:1,mult:a.mult,arrow:a.proj.arrow,orb:!a.proj.arrow,member:i});t.audio?.sfx(a.proj.arrow?"bow":"cast")}}):(c.hits.push({at:a.hit-.15,fn:()=>{this.trail(h,.16),t.audio?.sfx(e==="claymore"?"heavy":"swing")}}),c.hits.push({at:a.hit,fn:()=>{this.melee({range:a.range,arc:a.arc,mult:a.mult,el:h,units:1,member:i,knock:e==="claymore"?4:1.5,shake:a.shake}),(r===n.length-1||e==="claymore")&&t.fx.shape("arc",oe(t.mover.p.x,t.mover.p.y+1,t.mover.p.z),h==="phys"?"phys":h,.25,{r:a.range,rotY:t.mover.face-Math.PI/2,grow:f=>.8+f*.3})}}),c.tick=(f,d)=>{if(d>.15&&d<.5){let u=t.mover.face;t.mover.p.x+=Math.sin(u)*a.lunge*f*(o?Math.min(1,Math.max(0,Math.sqrt(Ri(t.mover.p,o.pos))-o.r-1)):.6),t.mover.p.z+=Math.cos(u)*a.lunge*f*(o?Math.min(1,Math.max(0,Math.sqrt(Ri(t.mover.p,o.pos))-o.r-1)):.6)}}),t.showWeapon()}startCharged(){let t=this.g,e=t.activeRig.spec.weapon,i=t.activeMember,n=Bu[e];t.mover.useStam(n.stam||0);let r=this.autoFace(n.proj?25:8),a=t.mover.face,o=this.act={kind:"charged",weapon:e,idx:0,anim:e==="sword"?3:e==="claymore"?1:2,t:0,dur:n.dur,hits:[],face:a,cancelable:!1};t.mover.lockMove=n.dur,this.combo=0,this.inCombatT=4;let l=i.infuse>0?"fire":n.el||(n.proj?n.proj.el:"phys");if(n.proj)o.hits.push({at:n.hit,fn:()=>{this.shoot({from:this.handPos(),target:r,face:a,speed:n.proj.speed,r:n.proj.r,el:l,units:1,mult:n.mult,arrow:!0,member:i,big:!0}),t.audio?.sfx("bowCharged")}});else if(n.aoe)o.hits.push({at:n.hit,fn:()=>{let c=r?r.pos:oe(t.mover.p.x+Math.sin(a)*5,t.mover.p.y,t.mover.p.z+Math.cos(a)*5);this.area(c,n.aoe,{mult:n.mult,el:l,units:1,member:i,knock:3}),t.fx.emit({x:c.x,y:c.y+.3,z:c.z,n:60,color:"water",speed:6,up:4,grav:10,life:.8,size:.3,radius:1.5}),t.fx.ring(c.x,c.y,c.z,"water",n.aoe,.5),t.audio?.sfx("splash")}});else if(n.spin){o.dur=1.1,o.anim=1;for(let c of[.3,.6,.9])o.hits.push({at:c,fn:()=>{this.trail(l,.25),this.melee({range:n.range,arc:-1,mult:n.mult,el:l,units:1,member:i,knock:2}),t.audio?.sfx("heavy")}})}else o.hits.push({at:n.hit-.12,fn:()=>this.trail(l,.3)}),o.hits.push({at:n.hit,fn:()=>{this.melee({range:n.range,arc:n.arc,mult:n.mult*.5,el:l,units:1,member:i})}}),o.hits.push({at:n.hit+.2,fn:()=>{this.trail(l,.2),this.melee({range:n.range,arc:n.arc,mult:n.mult*.5,el:l,units:1,member:i,knock:3}),t.audio?.sfx("swing")}});t.showWeapon()}startSkill(t){let e=this.g,i=e.activeId,n=e.activeMember,r=e.mover,a=n;if(a.skillT>0)return;let o=this.autoFace(10),l=r.face,c=Math.sin(l),h=Math.cos(l);this.inCombatT=5;let f=this.act={kind:"skill",t:0,dur:.7,hits:[],face:l,cancelable:!1};if(queueMicrotask(()=>{n.lastSkillCD=n.skillT||1}),r.lockMove=.6,e.audio?.sfx("skill_"+n.el),i==="sora"){a.skillT=t?n.def0.skillHoldCD:n.def0.skillCD;let d=t?5:3.5,u=t?3.2:2,p=oe(r.p.x+c*2.5,r.p.y,r.p.z+h*2.5);f.dur=t?.9:.6,f.hits.push({at:.15,fn:()=>{this.fields.push({kind:"vortex",pos:p.clone(),t:0,dur:t?1.4:.8,r:d,el:"wind",pull:t?9:6}),e.fx.shape("swirl",oe(p.x,p.y+.3,p.z),"wind",t?1.4:.9,{r:d}),e.fx.ring(p.x,p.y,p.z,"wind",d,.6)}}),f.hits.push({at:.6,fn:()=>{let x=this.area(p,d,{mult:u,el:"wind",units:t?2:1,member:n,knock:6,lift:t?6:3,particles:t?3:2});e.fx.emit({x:p.x,y:p.y+1,z:p.z,n:80,color:"wind",speed:9,life:.7,size:.35,radius:1}),e.fx.ring(p.x,p.y,p.z,"wind",d*1.2,.5),e.camRig.shake=.5}})}else i==="akane"?(a.skillT=n.def0.skillCD,f.dur=.8,f.hits.push({at:.2,fn:()=>this.trail("fire",.35)}),f.hits.push({at:.45,fn:()=>{let d=oe(r.p.x+c*1.8,r.p.y,r.p.z+h*1.8);this.area(d,3.4,{mult:2.4,el:"fire",units:2,member:n,knock:5,lift:5,particles:3}),e.fx.emit({x:d.x,y:d.y+.5,z:d.z,n:90,color:"fire",speed:7,up:6,grav:3,life:.8,size:.4,radius:1.5}),e.fx.ring(d.x,d.y,d.z,"fire",4,.5),e.fx.shape("arc",oe(r.p.x,r.p.y+.8,r.p.z),"fire",.4,{r:3.6,rotY:l-Math.PI/2,grow:u=>.7+u*.5}),n.infuse=7,e.camRig.shake=.6,e.notify("\u6B66\u5668\u306B\u708E\u304C\u5BBF\u3063\u305F\uFF087\u79D2\uFF09","fire")}})):i==="mizuha"?(a.skillT=n.def0.skillCD,f.dur=.65,f.hits.push({at:.4,fn:()=>{this.area(oe(r.p.x,r.p.y,r.p.z),5,{mult:1.2,el:"water",units:1,member:n,knock:2,particles:2}),e.fx.emit({x:r.p.x,y:r.p.y+1,z:r.p.z,n:70,color:"water",speed:5,life:.8,size:.3,radius:2}),e.fx.ring(r.p.x,r.p.y,r.p.z,"water",5,.6),this.fields.push({kind:"bubble",t:0,dur:10,every:2,acc:0,member:n})}})):i==="raika"&&(a.skillT=n.def0.skillCD,f.dur=.6,f.hits.push({at:.35,fn:()=>{let d=e.enemies.filter(p=>!p.dead&&Ri(p.pos,r.p)<16).sort((p,x)=>Ri(p.pos,r.p)-Ri(x.pos,r.p)).slice(0,3),u=oe(r.p.x,r.p.y+3,r.p.z);d.length||e.fx.emit({x:u.x,y:u.y,z:u.z,n:40,color:"thunder",speed:6,life:.6,size:.3}),d.forEach((p,x)=>setTimeout(()=>{if(p.dead)return;let m=oe(p.pos.x,p.pos.y+p.h*.6,p.pos.z);e.fx.bolt(u,m,"thunder",.25),e.fx.bolt(u,m,"thunder",.2),this.hitEnemy(p,{mult:1.6,el:"thunder",units:1,member:n,knock:2,particles:x===0?3:0}),e.fx.emit({x:m.x,y:m.y,z:m.z,n:30,color:"thunder",speed:6,life:.4,size:.3}),e.audio?.sfx("thunder")},x*150))}}))}startBurst(){let t=this.g,e=t.activeId,i=t.activeMember,n=t.mover;i.energy=0;let r=this.autoFace(12),a=n.face,o=Math.sin(a),l=Math.cos(a);this.inCombatT=6;let c=this.act={kind:"burst",t:0,dur:1.3,hits:[],face:a,cancelable:!1};n.lockMove=1.2,n.iframe=1.3,t.burstCinematic(i.el),t.audio?.sfx("burst"),e==="sora"?c.hits.push({at:.6,fn:()=>{let h={kind:"tornado",pos:oe(n.p.x+o*2,n.p.y,n.p.z+l*2),dir:oe(o,0,l),t:0,dur:6,every:.5,acc:0,el:"wind",absorbed:null,member:i,r:3.2};this.fields.push(h),h.shape=t.fx.shape("tornado",h.pos,"wind",6,{follow:()=>h.pos,grow:f=>Math.min(1,f*8)*(f>.92?(1-f)*12:1)})}}):e==="akane"?(c.hits.push({at:.3,fn:()=>this.trail("fire",.5)}),c.hits.push({at:.62,fn:()=>{let h=oe(n.p.x+o*3,n.p.y,n.p.z+l*3);this.area(h,6,{mult:5,el:"fire",units:2,member:i,knock:9,lift:6}),t.fx.shape("arc",oe(n.p.x,n.p.y+1,n.p.z),"fire",.6,{r:7,rotY:a-Math.PI/2,grow:f=>.6+f*.6}),t.fx.emit({x:h.x,y:h.y+.5,z:h.z,n:220,color:"fire",speed:12,up:5,grav:4,life:1,size:.5,radius:3}),t.fx.ring(h.x,h.y,h.z,"fire",7,.7),t.fx.ring(h.x,h.y,h.z,"gold",5,.5),t.camRig.shake=1.2,this.fields.push({kind:"burn",pos:h,t:0,dur:4,every:.5,acc:0,r:5,member:i})}})):e==="mizuha"?c.hits.push({at:.6,fn:()=>{let h=oe(n.p.x,n.p.y,n.p.z);this.area(h,8,{mult:1.5,el:"water",units:2,member:i,knock:3}),t.fx.ring(h.x,h.y,h.z,"water",8,.8),this.fields.push({kind:"sanctuary",pos:h,t:0,dur:12,every:1,acc:0,r:8,member:i}),t.fx.shape("dome",h,"water",12,{r:8})}}):e==="raika"&&c.hits.push({at:.55,fn:()=>{let h=r?r.pos.clone():oe(n.p.x+o*6,n.p.y,n.p.z+l*6);this.fields.push({kind:"storm",pos:h,t:0,dur:5,every:.33,acc:0,r:6,member:i}),t.fx.shape("cloud",oe(h.x,t.world.heightAt(h.x,h.z)+12,h.z),"thunder",5.2,{r:8})}})}handPos(){let t=this.g.activeRig,e=oe();return t.j.handR.getWorldPosition(e),e}trail(t,e){let i=this.g,n=i.activeRig,r=n.weapon&&n.weapon.held;if(!r||n.spec.weapon==="bow"||n.spec.weapon==="catalyst")return;let a=n.spec.weapon==="claymore"?1.3:.85,o=oe(),l=oe();i.fx.trail(()=>r.localToWorld(o.set(0,.15,0)),()=>r.localToWorld(l.set(0,a,0)),t==="phys"?"phys":t,e)}melee(t){let e=this.g,i=e.mover,n=Math.sin(i.face),r=Math.cos(i.face),a=0;for(let o of e.enemies){if(o.dead)continue;let l=o.pos.x-i.p.x,c=o.pos.z-i.p.z,h=Math.hypot(l,c);h-o.r>t.range||Math.abs(o.pos.y-i.p.y)>2.5+o.h*.5||h>.5&&(l*n+c*r)/h<t.arc||(this.hitEnemy(o,t),a++)}return a&&(e.hitStop(.045),e.camRig.shake=Math.max(e.camRig.shake,t.shake||.25)),a}area(t,e,i){let n=0;for(let r of this.g.enemies)r.dead||Math.hypot(r.pos.x-t.x,r.pos.z-t.z)-r.r>e||Math.abs(r.pos.y-t.y)>4+r.h*.5||(this.hitEnemy(r,{...i,from:t}),n++,i.particles&&(i={...i,particles:0}));return n}hitEnemy(t,e){let i=this.g,n=e.member||i.activeMember;if(t.dead)return;let r=e.mult;if(t.type==="shield"&&t.shieldHp>0){let h=Math.abs(Bp(t.face,Math.atan2(i.mover.p.x-t.pos.x,i.mover.p.z-t.pos.z)));e.el==="fire"&&(t.shieldHp--,t.shieldHp<=0&&(i.notify("\u76FE\u304C\u71C3\u3048\u843D\u3061\u305F\uFF01","fire"),t.parts.shield.visible=!1,i.fx.emit({x:t.pos.x,y:t.pos.y+1,z:t.pos.z,n:60,color:"fire",speed:5,up:3,life:1,size:.4}))),h<1.2&&t.shieldHp>0&&(r*=.15,i.fx.emit({x:t.pos.x+Math.sin(t.face),y:t.pos.y+1.2,z:t.pos.z+Math.cos(t.face),n:8,color:"gold",speed:4,life:.25,size:.15}))}t.type==="boss"&&!t.coreOpen&&t.phase===3&&(r*=.3);let a=ku(t,{atk:n.atk,mult:r,el:e.el,units:e.units||1,lv:n.lv,crit:.12,critDmg:.6});t.hp-=a.dmg;let o=oe(t.pos.x,t.pos.y+t.h*.75,t.pos.z);if(i.damageNumber(o,a.dmg,e.el,a.crit),a.reaction&&this.reactionFx(t,a,n,o),!(t.type==="boss"||t.type==="guardian")&&e.knock){let h=e.from||i.mover.p,f=t.pos.x-h.x,d=t.pos.z-h.z,u=Math.hypot(f,d)||1,p=t.type==="shield"?e.knock*.3:e.knock;t.vel.set(f/u*p,0,d/u*p),t.hitstun=Math.max(t.hitstun,t.type==="shield"?.12:.28),(t.state==="idle"||t.state==="wander")&&(t.state="chase"),t.attack&&t.type!=="shield"&&e.knock>3&&(t.attack=null,t.state="chase",this.releaseAttackSlot(t))}(t.state==="idle"||t.state==="wander"||t.state==="return")&&(t.state="chase"),t.flash=.12;let c=e.el&&e.el!=="phys"?e.el:"phys";if(i.fx.emit({x:o.x,y:o.y,z:o.z,n:a.crit?22:12,color:c,speed:6,life:.35,size:.22}),i.audio?.sfx(e.el==="phys"||!e.el?"hit":"hitEl",a.crit),e.particles)for(let h=0;h<e.particles;h++)i.fx.orb(o.x,o.y,o.z,n.el,1,f=>i.gainEnergy(f));return this.inCombatT=Math.max(this.inCombatT,4),t.hp<=0&&this.kill(t),a}reactionFx(t,e,i,n){let r=this.g;r.reactionText(n,zp[e.reaction],e.reaction);let a=e.transform;if(!a){r.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:e.reaction==="melt"?"fire":"water",speed:5,up:2,life:.6,size:.3});return}if(a.type==="overload"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,"fire",4,.5),r.fx.emit({x:n.x,y:n.y,z:n.z,n:90,color:16736416,speed:10,life:.6,size:.45}),r.camRig.shake=.6;for(let o of r.enemies)if(!o.dead&&Ri(o.pos,t.pos)<16&&(this.reactionDamage(o,a.dmg,"fire"),o.type!=="boss"&&o.type!=="guardian")){let l=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z,h=Math.hypot(l,c)||1;o.vel.set(l/h*7,0,c/h*7),o.hitstun=.5}r.audio?.sfx("explode")}else if(a.type==="superconduct"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,"ice",4,.5),r.fx.emit({x:n.x,y:n.y,z:n.z,n:60,color:11579647,speed:7,life:.6,size:.35});for(let o of r.enemies)!o.dead&&Ri(o.pos,t.pos)<16&&(this.reactionDamage(o,a.dmg,"ice"),o.physShred=12)}else if(a.type==="swirl"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,a.el,5,.6),r.fx.emit({x:n.x,y:n.y,z:n.z,n:70,color:a.el,speed:8,life:.7,size:.35});for(let o of r.enemies)!o.dead&&Ri(o.pos,t.pos)<25&&(this.reactionDamage(o,a.dmg,a.el),o!==t&&ku(o,{atk:0,mult:0,el:a.el,units:1,lv:i.lv}))}else a.type==="electro"?(r.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:"thunder",speed:5,life:.5,size:.3}),t.electroDmg=a.dmg):a.type==="freeze"&&(r.fx.emit({x:n.x,y:n.y,z:n.z,n:50,color:"ice",speed:4,life:.8,size:.35}),t.vel.set(0,0,0))}reactionDamage(t,e,i){let n=this.g,r=Math.round(e*(t.res[i]>=1?.1:1-(t.res[i]||.1)));t.hp-=r,n.damageNumber(oe(t.pos.x,t.pos.y+t.h*.9,t.pos.z),r,i,!1,!0),t.hp<=0&&!t.dead&&this.kill(t)}electroTick(t){let e=this.g,i=t.electroDmg||100;this.reactionDamage(t,i,"thunder");for(let n of e.enemies)n!==t&&!n.dead&&n.aura&&n.aura.el==="water"&&Ri(n.pos,t.pos)<9&&(e.fx.bolt(oe(t.pos.x,t.pos.y+.8,t.pos.z),oe(n.pos.x,n.pos.y+.8,n.pos.z)),this.reactionDamage(n,i*.6,"thunder"));e.fx.emit({x:t.pos.x,y:t.pos.y+.8,z:t.pos.z,n:14,color:"thunder",speed:5,life:.3,size:.2})}kill(t){let e=this.g;t.dead||(t.dead=!0,t.deathT=0,this.releaseAttackSlot(t),e.fx.emit({x:t.pos.x,y:t.pos.y+t.h*.5,z:t.pos.z,n:50,color:14209279,speed:4,up:2,life:1,size:.4,radius:t.r}),e.onEnemyKilled(t))}shoot(t){let e=this.g,i;if(t.target&&!t.target.dead){if(i=oe(t.target.pos.x,t.target.pos.y+t.target.h*.55,t.target.pos.z).sub(t.from).normalize(),t.face!==e.mover.face){let a=Math.atan2(i.x,i.z)+(t.face-e.mover.face),o=Math.hypot(i.x,i.z);i.x=Math.sin(a)*o,i.z=Math.cos(a)*o}}else i=oe(Math.sin(t.face),.02,Math.cos(t.face));let n;t.arrow?(n=new nt(this.arrowGeo,new se({color:t.el==="thunder"?14201087:16774360})),n.scale.setScalar(t.big?1.6:1)):n=new nt(new Jt(t.r*.45,12,10),new se({color:wn(t.el)})),n.position.copy(t.from),n.lookAt(t.from.clone().add(i)),e.scene.add(n),this.projs.push({...t,pos:t.from.clone(),vel:i.multiplyScalar(t.speed),life:1.6,mesh:n,friendly:!0})}updateProj(t,e){let i=this.g;if(t.life-=e,t.homing&&t.friendly===!1){let a=oe(i.mover.p.x,i.mover.p.y+1,i.mover.p.z).sub(t.pos).normalize().multiplyScalar(t.vel.length());t.vel.lerp(a,Math.min(1,t.homing*e))}t.pos.addScaledVector(t.vel,e),t.mesh.position.copy(t.pos),t.arrow&&t.mesh.lookAt(t.pos.clone().add(t.vel)),t.arrow?t.el==="thunder"&&i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:2,color:"thunder",speed:.3,life:.25,size:.18}):i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:2,color:t.el||"phys",speed:.5,life:.35,size:t.r*.5});let n=!1;if(t.friendly)for(let r of i.enemies){if(r.dead)continue;let a=r.pos.y+r.h*.5;if(Math.hypot(r.pos.x-t.pos.x,r.pos.z-t.pos.z)<r.r+t.r&&Math.abs(a-t.pos.y)<r.h*.6+t.r){this.hitEnemy(r,{mult:t.mult,el:t.el,units:t.units,member:t.member,knock:1}),n=!0;break}}else{let r=i.mover.p;Math.hypot(r.x-t.pos.x,r.z-t.pos.z)<.6+t.r&&Math.abs(r.y+.9-t.pos.y)<1.1&&(i.damagePlayer(t.src,t.mult,t.el),n=!0)}return t.pos.y<i.world.heightAt(t.pos.x,t.pos.z)&&(n=!0),n||t.life<=0?(i.scene.remove(t.mesh),t.mesh.geometry!==this.arrowGeo&&t.mesh.geometry.dispose(),t.mesh.material.dispose(),n&&!t.arrow&&i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:16,color:t.el||"phys",speed:4,life:.4,size:.25}),!1):!0}updateField(t,e){let i=this.g,n=i.mover;t.t+=e,t.every&&(t.acc+=e);let r=t.every&&t.acc>=t.every;if(r&&(t.acc-=t.every),t.kind==="vortex"){for(let a of i.enemies)if(!a.dead&&a.type!=="boss"&&a.type!=="guardian"&&Ri(a.pos,t.pos)<(t.r+2)**2){let o=t.pos.x-a.pos.x,l=t.pos.z-a.pos.z,c=Math.hypot(o,l)||1;a.pos.x+=o/c*Math.min(c,t.pull*e),a.pos.z+=l/c*Math.min(c,t.pull*e)}i.fx.emit({x:t.pos.x+Math.cos(t.t*14)*t.r*.6,y:t.pos.y+.5+t.t,z:t.pos.z+Math.sin(t.t*14)*t.r*.6,n:6,color:"wind",speed:1,life:.5,size:.3})}else if(t.kind==="tornado"){t.pos.addScaledVector(t.dir,1.6*e),t.pos.y=i.world.heightAt(t.pos.x,t.pos.z);let a=t.absorbed||"wind";for(let o=0;o<6;o++){let l=t.t*9+o*1.05,c=o/6*5;i.fx.emit({x:t.pos.x+Math.cos(l)*(.6+c*.35),y:t.pos.y+c,z:t.pos.z+Math.sin(l)*(.6+c*.35),n:1,color:o%2?a:"wind",speed:.5,life:.5,size:.45})}for(let o of i.enemies)if(!o.dead&&o.type!=="boss"&&o.type!=="guardian"&&Ri(o.pos,t.pos)<64){let l=t.pos.x-o.pos.x,c=t.pos.z-o.pos.z,h=Math.hypot(l,c)||1;o.pos.x+=l/h*Math.min(h,4*e),o.pos.z+=c/h*Math.min(h,4*e)}if(r&&(this.area(t.pos,t.r,{mult:.6,el:"wind",units:1,member:t.member}),t.absorbed&&this.area(t.pos,t.r,{mult:.25,el:t.absorbed,units:1,member:t.member}),!t.absorbed)){for(let o of i.enemies)if(!o.dead&&o.aura&&Ri(o.pos,t.pos)<t.r*t.r){t.absorbed=o.aura.el,i.notify(`\u7ADC\u5DFB\u304C${{fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37"}[t.absorbed]}\u3092\u5438\u3044\u8FBC\u3093\u3060`,t.absorbed);break}}}else if(t.kind==="burn")Math.random()<.8&&i.fx.emit({x:t.pos.x+(Math.random()-.5)*t.r*1.6,y:t.pos.y+.2,z:t.pos.z+(Math.random()-.5)*t.r*1.6,n:3,color:"fire",speed:1,up:3,life:.6,size:.35}),r&&this.area(t.pos,t.r,{mult:.6,el:"fire",units:1,member:t.member});else if(t.kind==="sanctuary"){let a=t.t*2;for(let o=0;o<3;o++)i.fx.emit({x:t.pos.x+Math.cos(a+o*2.1)*t.r,y:t.pos.y+.3,z:t.pos.z+Math.sin(a+o*2.1)*t.r,n:1,color:"water",speed:.3,up:1,life:.8,size:.35});r&&(Ri(n.p,t.pos)<t.r*t.r&&i.healActive(i.activeMember.maxHp*.04+60),this.area(t.pos,t.r,{mult:.6,el:"water",units:1,member:t.member}))}else if(t.kind==="storm"){if(r){let a=t.pos.x+(Math.random()-.5)*t.r*1.4,o=t.pos.z+(Math.random()-.5)*t.r*1.4,l=i.world.heightAt(a,o);i.fx.bolt(oe(a,l+12,o),oe(a,l,o),"thunder",.2),i.fx.bolt(oe(a+.3,l+12,o),oe(a,l,o),"thunder",.15),i.fx.emit({x:a,y:l+.3,z:o,n:20,color:"thunder",speed:5,life:.4,size:.3}),this.area(oe(a,l,o),2.6,{mult:.5,el:"thunder",units:1,member:t.member}),i.audio?.sfx("thunder")}}else t.kind==="bubble"&&(r&&(i.healActive(i.activeMember.maxHp*.08+200),i.fx.emit({x:n.p.x,y:n.p.y+1,z:n.p.z,n:24,color:"heal",speed:2,up:2,life:.8,size:.25,radius:.8}),this.area(oe(n.p.x,n.p.y,n.p.z),4,{mult:.4,el:"water",units:1,member:t.member})),Math.random()<.5&&i.fx.emit({x:n.p.x+Math.cos(t.t*4)*1,y:n.p.y+1.2,z:n.p.z+Math.sin(t.t*4)*1,n:1,color:"water",speed:.2,life:.6,size:.3}));return t.t<t.dur}enemyStrike(t,e){let i=this.g,n=i.mover.p;if(e.noStrike)return;if(e.proj){let f=oe(t.pos.x+Math.sin(t.face)*.5,t.pos.y+t.h*.7,t.pos.z+Math.cos(t.face)*.5),u=oe(n.x,n.y+1,n.z).sub(f).normalize(),p=e.proj.arrow?new nt(this.arrowGeo,new se({color:16765088})):new nt(new Jt(.25,10,8),new se({color:wn(e.proj.el||"phys")}));p.position.copy(f),i.scene.add(p),this.projs.push({pos:f,vel:u.multiplyScalar(e.proj.speed),r:.35,life:3,mesh:p,friendly:!1,mult:e.proj.mult,el:e.proj.el,src:t,arrow:e.proj.arrow,homing:e.proj.homing}),i.audio?.sfx(e.proj.arrow?"bow":"cast");return}if(e.laser){e.tick=f=>{if(e.t<e.hitAt)return;e.lt=(e.lt||0)+f;let d=oe(t.pos.x+Math.sin(t.face)*1.2,t.pos.y+2.5,t.pos.z+Math.cos(t.face)*1.2),u=oe(t.pos.x+Math.sin(t.face)*18,t.pos.y+.6,t.pos.z+Math.cos(t.face)*18);if(i.fx.bolt(d,u,"fire",.06,4),i.fx.emit({x:u.x,y:i.world.heightAt(u.x,u.z)+.2,z:u.z,n:3,color:"fire",speed:2,up:2,life:.4,size:.3}),e.lt>=e.tickEvery){e.lt=0;let p=u.x-d.x,x=u.z-d.z,m=Math.hypot(p,x),g=Math.max(0,Math.min(1,((n.x-d.x)*p+(n.z-d.z)*x)/(m*m)));Math.hypot(d.x+p*g-n.x,d.z+x*g-n.z)<1&&i.damagePlayer(t,e.mult,"fire")}};return}let r=n.x-t.pos.x,a=n.z-t.pos.z,o=Math.hypot(r,a);e.shake&&(i.camRig.shake=Math.max(i.camRig.shake,e.shake*Math.max(0,1-o/25))),e.ring?i.fx.ring(e.ring.x,e.ring.y,e.ring.z,e.el||"phys",e.range,.4):(e.kind==="stomp"||e.kind==="hop"||e.kind==="slam")&&i.fx.ring(t.pos.x,t.pos.y,t.pos.z,e.el||"phys",e.range,.4);let l=e.center?e.center.x:t.pos.x,c=e.center?e.center.z:t.pos.z;Math.hypot(n.x-l,n.z-c)>e.range+.4||Math.abs(n.y-t.pos.y)>(t.type==="boss"?8:2.5)||e.arc!=null&&e.arc>-1&&o>.6&&(r*Math.sin(t.face)+a*Math.cos(t.face))/o<e.arc||i.damagePlayer(t,e.mult,e.el)}bossChoose(t,e){let i=this.g;t.attackCool=t.phase===3?1.2:t.phase===2?1.6:2.2;let n=i.mover.p,r=Math.random();if(t.phase>=2&&r<.3)this.g.notify("\u9727\u304C\u6E26\u3092\u5DFB\u304F\u2026\u2026\uFF01","ice"),t.begin("icicles",3.2,1.2,{windup:1,noStrike:!0,tick:(a,o)=>{if(o.acc=(o.acc||0)+a,o.t>1&&o.acc>.28){o.acc=0;let l=n.x+(Math.random()-.5)*4,c=n.z+(Math.random()-.5)*4,h=i.world.heightAt(l,c);i.fx.ring(l,h,c,"ice",2.2,.5,.9),setTimeout(()=>{i.fx.emit({x:l,y:h+.5,z:c,n:30,color:"ice",speed:6,up:6,grav:12,life:.7,size:.3}),i.audio?.sfx("ice"),Math.hypot(i.mover.p.x-l,i.mover.p.z-c)<2&&i.damagePlayer(t,.8,"ice")},550)}}});else if(e<9||r<.55){let a=t.phase===3&&r<.3?0:r<.5?-1:1,o=oe(n.x,n.y,n.z);t.begin("slam",2,1.25,{side:a,windup:1,track:.8,range:a===0?6:4.2,mult:1.6,center:o,ring:o,shake:1.3,tick:(l,c)=>{c.t<1.1&&c.center.set(i.mover.p.x,i.mover.p.y,i.mover.p.z),c.t<1.2&&Math.random()<.4&&i.fx.emit({x:c.center.x,y:c.center.y+.1,z:c.center.z,n:2,color:16732240,speed:2,life:.3,size:.4,radius:c.range,flat:!0})}})}else t.begin("sweep",2.4,1.4,{windup:1.1,range:11,arc:-1,mult:1.2,shake:.8})}};function Ri(s,t){let e=s.x-t.x,i=s.z-t.z;return e*e+i*i}function Bp(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var Op={wind:8384728,fire:16747072,water:5945599,thunder:12946175,ice:12120319},d1={slime:{name:"\u30B9\u30E9\u30A4\u30E0",hp:380,atk:200,r:.65,h:1,speed:2.4,sight:14,exp:60,mora:40,lv:8},boko:{name:"\u30DC\u30B3",hp:640,atk:260,r:.45,h:1.5,speed:3.4,sight:16,exp:90,mora:60,lv:10},archer:{name:"\u30DC\u30B3\u5C04\u624B",hp:460,atk:230,r:.45,h:1.5,speed:3,sight:22,exp:90,mora:60,lv:10},shaman:{name:"\u30DC\u30B3\u546A\u8853\u5E2B",hp:540,atk:240,r:.45,h:1.5,speed:2.6,sight:20,exp:110,mora:70,lv:12},shield:{name:"\u76FE\u30DC\u30B3",hp:1900,atk:330,r:.7,h:2.1,speed:2.6,sight:16,exp:300,mora:200,lv:16},guardian:{name:"\u907A\u8DE1\u306E\u756A\u4EBA",hp:4200,atk:380,r:1.4,h:3.6,speed:2.2,sight:26,exp:700,mora:400,lv:20},boss:{name:"\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9",hp:26e3,atk:480,r:3.2,h:9,speed:1.6,sight:60,exp:3e3,mora:3e3,lv:25}},Ka=class{constructor(t,e,i,n,r={}){this.g=t,this.type=e,this.T=d1[e],this.el=r.el||null,this.lv=r.lv||this.T.lv,this.maxHp=Math.round(this.T.hp*(1+(this.lv-this.T.lv)*.08)*(r.hpMul||1)),this.hp=this.maxHp,this.atk=Math.round(this.T.atk*(1+(this.lv-this.T.lv)*.06)),this.pos=new R(i,t.world.groundAt(i,n),n),this.home=this.pos.clone(),this.vel=new R,this.face=Math.random()*Math.PI*2,this.state="idle",this.timer=Math.random()*2,this.cool=1+Math.random(),this.aura=null,this.frozen=0,this.electro=0,this.physShred=0,this.hitstun=0,this.dead=!1,this.deathT=0,this.res={phys:.1,wind:.1,fire:.1,water:.1,thunder:.1,ice:.1},this.el&&(this.res[this.el]=1),e==="boss"&&(this.res.phys=.3),this.r=this.T.r,this.h=this.T.h,this.group=r.group||null,this.quest=r.quest||null,this.shieldHp=e==="shield"?3:0,this.selfAuraT=0,this.attack=null,this.buildModel(),t.scene.add(this.model)}get name(){return(this.el&&this.type==="slime"?{wind:"\u98A8",fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37"}[this.el]:"")+this.T.name}buildModel(){let t=this.type,e=this.g,i=this.model=new pe;if(this.parts={},t==="slime"){let n=Op[this.el]||10150010,r=new nt(new Jt(.6,24,18),ht({color:n,emissive:n,emissiveI:.18}));r.material.transparent=!0,r.material.opacity=.88,r.position.y=.5,r.scale.set(1,.85,1),r.castShadow=!0,Ae(r,n,.012);let a=new nt(new Qi(.2,0),new se({color:new ct(n).multiplyScalar(1.4)}));a.position.y=.5,i.add(a,r);for(let o of[-1,1]){let l=new nt(new Jt(.075,10,8),new se({color:1710634}));l.position.set(o*.2,.62,.48),l.scale.set(1,1.3,.5);let c=new nt(new Jt(.025,6,4),new se({color:16777215}));c.position.set(o*.2-.02,.66,.52),r.parent.add(l,c)}this.el==="fire"&&(this.parts.flame=!0),this.parts.body=r}else if(t==="boko"||t==="archer"||t==="shaman"||t==="shield"){let n=Sn("boko",e.tex,{name:"\u30DC\u30B3",skin:t==="shield"?5917244:6967360,female:!1,scale:t==="shield"?1.25:.82,eye:"eye_npc",face:{mask:!0},hair:2760216,hairStyle:{bangs:3,bangLen:.06,sideN:1,sideLen:.12,backN:6,backLen:.18,backFlare:.06,spikes:4,capBack:.6},top:6967360,legs:6967360,boots:3811872,shorts:9071162,gloves:null,sleeve:null});this.rig=n,this.anim=new rn(n),i.add(n.root);let r=new nt(new Jt(.135,18,14,Math.PI/2-1,2,Math.PI*.2,Math.PI*.62),ht({color:15919832,map:f1(t)}));r.position.set(0,.11,.004),n.j.head.add(r),Ae(r,3811872,.004);for(let o of[-1,1]){let l=new nt(new Ge(.03,.14,6),ht({color:15260864}));l.position.set(o*.08,.24,.02),l.rotation.z=-o*.5,n.j.head.add(l),Ae(l,3811872,.004)}let a=new nt(new Vt(.14,.2,.22,10,1,!0),ht({color:10123850}));if(a.position.y=-.08,n.j.hips.add(a),Ae(a,3811866,.005),a.material.side=Ie,t==="boko"||t==="shield"){let o=new pe,l=new nt(new Vt(.035,.07,.75,8),ht({color:8018490}));l.position.y=.32,o.add(l),Ae(l,2759184,.004);for(let c=0;c<4;c++){let h=new nt(new Ge(.02,.08,4),ht({color:13682872}));h.position.set(Math.cos(c*1.57)*.07,.58,Math.sin(c*1.57)*.07),h.rotation.z=Math.PI/2,h.rotation.y=c*1.57,o.add(h)}o.rotation.x=Math.PI/2,o.position.set(0,-.06,.02),n.j.handR.add(o)}if(t==="archer"){let o=new nt(new Ee(.4,.015,4,16,Math.PI),ht({color:6965802}));o.rotation.z=Math.PI/2,o.position.set(0,-.08,.05),n.j.handL.add(o)}if(t==="shaman"){let o=new nt(new Vt(.02,.025,1.3,6),ht({color:5914672}));o.position.set(0,-.05,0),o.rotation.x=Math.PI/2,n.j.handR.add(o);let l=new nt(new Ze(.07),new se({color:Op[this.el]||16777215}));l.position.set(0,-.05,.65),n.j.handR.add(l),this.parts.gem=l;let c=new nt(new Jt(.16,12,10,0,Math.PI*2,0,Math.PI*.6),ht({color:this.el==="fire"?10502186:2775712}));c.position.set(0,.13,-.02),n.j.head.add(c),Ae(c,1710618,.005)}if(t==="shield"){let o=new nt(new Vt(.42,.42,.08,14),ht({color:9071162,map:e.tex.planks}));o.rotation.z=Math.PI/2,o.position.set(.05,-.1,.12),n.j.handL.add(o),Ae(o,2759184,.006),this.parts.shield=o}}else if(t==="guardian"){let n=ht({color:12103840,map:e.tex.brick,shadowTint:10131648}),r=ht({color:4868698}),a=new nt(new Vt(1,1.3,1.8,8),n);a.position.y=2,i.add(a),Ae(a,3815472,.01);let o=new nt(new Ge(.9,1,8),n);o.position.y=3.4,i.add(o),Ae(o,3815472,.01);let l=new nt(new Jt(.28,16,12),new se({color:16752704}));l.position.set(0,2.5,1),i.add(l),this.parts.eye=l;for(let h=0;h<4;h++){let f=h/4*Math.PI*2+Math.PI/4,d=new nt(new ze(.4,1.4,.4),r);d.position.set(Math.cos(f)*1.1,.7,Math.sin(f)*1.1),d.rotation.set(Math.sin(f)*.3,0,-Math.cos(f)*.3),i.add(d),Ae(d,1710626,.01)}for(let h of[-1,1]){let f=new nt(new ze(.4,1.6,.5),n);f.position.set(h*1.4,2,0),i.add(f),Ae(f,3815472,.01),this.parts["arm"+h]=f}let c=new nt(new Ee(1.02,.04,6,32),new se({color:16752704}));c.rotation.x=Math.PI/2,c.position.y=2.4,i.add(c),a.castShadow=o.castShadow=!0}else t==="boss"&&p1(this,i,e);i.position.copy(this.pos),i.traverse(n=>{n.isMesh&&!n.userData.outline&&(n.castShadow=!0)})}hpFrac(){return this.hp/this.maxHp}begin(t,e,i,n={}){this.attack={kind:t,t:0,dur:e,hitAt:i,done:!1,...n},this.state="attack"}update(t){let e=this.g,i=e.mover.p,n=this.T;if(this.dead)return this.deathT+=t,this.model.position.y=this.pos.y-this.deathT*.4,this.model.scale.setScalar(Math.max(.01,1-this.deathT*1.2)),this.deathT<.85;if(this.aura&&(this.aura.time-=t,this.aura.time<=0&&(this.aura=null)),this.el&&this.type==="slime"&&this.el!=="wind"&&(this.selfAuraT-=t,this.selfAuraT<=0&&(!this.aura||this.aura.el===this.el)&&(this.aura={el:this.el,gauge:1,time:9},this.selfAuraT=6)),this.physShred=Math.max(0,this.physShred-t),this.electro>0&&(this.electro-=t,this.electroTick=(this.electroTick||0)-t,this.electroTick<=0&&(this.electroTick=1,e.battle.electroTick(this))),this.frozen>0)return this.frozen-=t,this.model.position.copy(this.pos),!0;if(this.hitstun>0)return this.hitstun-=t,this.pos.addScaledVector(this.vel,t),this.vel.multiplyScalar(Math.exp(-6*t)),this.snap(),this.animate(t,0,"hit"),!0;let r=i.x-this.pos.x,a=i.z-this.pos.z,o=Math.hypot(r,a),l=i.y-this.pos.y,c=Math.atan2(r,a),h=o<n.sight&&Math.abs(l)<12&&!e.playerHidden,f=0;if(this.cool-=t,this.state==="idle"||this.state==="wander"){if(this.timer-=t,this.timer<=0&&(this.state=this.state==="idle"?"wander":"idle",this.timer=2+Math.random()*3,this.wanderDir=Math.random()*Math.PI*2),this.state==="wander"){let g=this.home.x-this.pos.x,v=this.home.z-this.pos.z;Math.hypot(g,v)>6&&(this.wanderDir=Math.atan2(g,v)),this.face=Hc(this.face,this.wanderDir,3*t),f=n.speed*.35}h&&(this.state="chase",e.onEnemyAlert(this))}else if(this.state==="chase"){this.face=Hc(this.face,c,5*t);let g=this.type==="archer"?11:this.type==="shaman"?9:this.type==="boss"?6:this.type==="guardian"?3.5:this.r+1.4;o>g+.5?f=n.speed:(this.type==="archer"||this.type==="shaman")&&o<g-3&&(f=-n.speed*.7),(o>n.sight*2.2||Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z)>45)&&(this.state="return"),this.cool<=0&&e.battle.requestAttackSlot(this)&&this.chooseAttack(o)}else if(this.state==="return"){let g=this.home.x-this.pos.x,v=this.home.z-this.pos.z;this.face=Hc(this.face,Math.atan2(g,v),4*t),f=n.speed*1.2,this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.2*t),Math.hypot(g,v)<2&&(this.state="idle")}else if(this.state==="attack"){let g=this.attack;g.t+=t,g.track&&(this.face=Hc(this.face,c,g.track*t)),g.move&&(f=g.move(g.t/g.dur)||0),!g.done&&g.t>=g.hitAt&&(g.done=!0,e.battle.enemyStrike(this,g)),g.tick&&g.tick(t,g),g.t>=g.dur&&(this.attack=null,this.state="chase",this.cool=this.attackCool||1.6+Math.random()*1.2,e.battle.releaseAttackSlot(this))}let d=Math.sin(this.face),u=Math.cos(this.face);this.vel.x+=(d*f-this.vel.x)*Math.min(1,8*t),this.vel.z+=(u*f-this.vel.z)*Math.min(1,8*t);let p=this.pos.x+this.vel.x*t,x=this.pos.z+this.vel.z*t,m=e.world.heightAt(p,x);return(m>.6||this.type==="boss"||m>=e.world.heightAt(this.pos.x,this.pos.z))&&Math.abs(m-e.world.heightAt(this.pos.x,this.pos.z))<1.2&&(this.pos.x=p,this.pos.z=x),e.world.pushOut(this.pos,this.r*.8,this.pos.y),this.snap(),this.animate(t,Math.abs(f),this.state),!0}snap(){let t=this.g.world.groundAt(this.pos.x,this.pos.z,this.pos.y);this.type==="slime"&&this.hopY?this.pos.y=t+this.hopY:this.pos.y=t,this.model.position.copy(this.pos),this.model.rotation.y=this.face}chooseAttack(t){let e=this.type,i=this.g;e==="slime"?t<6?this.begin("hop",1.3,1,{track:4,move:n=>n>.45&&n<.8?Math.min(9,t*2.2):0,range:1.6,mult:1,el:this.el&&this.el!=="wind"?this.el:null,windup:.6}):this.cool=.4:e==="boko"||e==="shield"?t<3?this.begin("swing",e==="shield"?1.5:1.25,e==="shield"?.95:.75,{track:3,move:n=>n>.5&&n<.65?3:0,range:e==="shield"?2.8:2.3,arc:.2,mult:1,windup:.6}):t<9&&Math.random()<.5?this.begin("rush",1.4,.9,{track:2,move:n=>n>.45&&n<.85?8:0,range:1.8,arc:.3,mult:.9,windup:.6,multiHit:!0}):this.cool=.3:e==="archer"?this.begin("shoot",1.6,1.05,{track:6,proj:{speed:20,mult:.85,el:null,arrow:!0},windup:.9}):e==="shaman"?this.begin("cast",2,1.25,{track:4,proj:{speed:12,mult:1,el:this.el,orb:!0,homing:1.2},windup:1.1}):e==="guardian"?(t<5?this.begin("stomp",2,1.25,{range:4.5,arc:-1,mult:1.4,windup:1.1,shake:.8}):this.begin("laser",3.4,1.4,{track:1.2,laser:!0,mult:.35,windup:1.3,tickEvery:.18}),this.attackCool=2.5):e==="boss"&&i.battle.bossChoose(this,t)}animate(t,e,i){let n=this.g.time;if(this.type==="slime"){let r=this.parts.body,a=.85+Math.sin(n*6+this.home.x)*.05,o=0;if(this.attack&&this.attack.kind==="hop"){let l=this.attack.t/this.attack.dur;l<.45?a=.85-l*.6:l<.8?(o=Math.sin((l-.45)/.35*Math.PI)*1.6,a=1):a=.7+(l-.8)*.75}else e>.2&&(o=Math.abs(Math.sin(n*7))*.25);this.hopY=o,r.scale.set(1+(.85-a)*.6,a,1+(.85-a)*.6),i==="hit"&&r.scale.set(1.15,.7,1.15);return}if(this.anim){let r={mode:"ground",speed:e,combat:this.state!=="idle"&&this.state!=="wander"};if(this.attack){let a=this.attack,o=a.t/a.dur;(a.kind==="swing"||a.kind==="rush")&&(r.attack={type:"claymore",idx:a.kind==="rush"?1:3,p:Math.min(1,o*1.2)}),a.kind==="shoot"&&(r.attack={type:"bow",idx:0,p:o}),a.kind==="cast"&&(r.cast={kind:"skill",p:o})}i==="hit"&&(r.mode="hit"),this.anim.update(t,r)}if(this.type==="guardian"){let r=this.parts.eye,a=this.attack&&this.attack.t<this.attack.windup;if(r.material.color.setHex(a?16724e3:16752704),r.scale.setScalar(a?1+Math.sin(n*30)*.15:1),this.model.position.y=this.pos.y+Math.abs(Math.sin(n*2))*.08,this.attack&&this.attack.kind==="stomp"){let o=this.attack.t/this.attack.dur;this.model.position.y+=o<.6?o*1.6:Math.max(0,.65-o)*18}}this.type==="boss"&&this.parts.update&&this.parts.update(t,this)}};function Hc(s,t,e){let i=Ms(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}var Ou={};function f1(s){if(Ou[s])return Ou[s];let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#f2ead8",e.fillRect(0,0,256,256),e.fillStyle=s==="shaman"?"#3a5aa0":"#b02a20",e.beginPath(),e.moveTo(40,120),e.quadraticCurveTo(90,70,128,110),e.quadraticCurveTo(166,70,216,120),e.lineTo(200,135),e.quadraticCurveTo(160,100,128,130),e.quadraticCurveTo(96,100,56,135),e.fill(),e.fillStyle="#1a1414";for(let n of[88,168])e.beginPath(),e.ellipse(n,140,20,14,0,0,Math.PI*2),e.fill();e.fillRect(118,175,20,50),e.strokeStyle="#1a1414",e.lineWidth=6,e.beginPath(),e.moveTo(70,200),e.lineTo(186,200),e.stroke();for(let n=0;n<5;n++)e.beginPath(),e.moveTo(80+n*24,192),e.lineTo(80+n*24,208),e.stroke();let i=new rs(t);return i.colorSpace=Fe,Ou[s]=i,i}function p1(s,t,e){let i=ht({color:11052728,map:e.tex.darkrock,shadowTint:9078976}),n=ht({color:9089146,map:e.tex.mossrock}),r=new se({color:13154559}),a=(u,p,x,m,g=1,v=1,b=1,y=i,M=t)=>{let w=new nt(new la(u,1),y);return w.position.set(p,x,m),w.scale.set(g,v,b),w.rotation.set(Math.random(),Math.random(),Math.random()),w.castShadow=!0,M.add(w),Ae(w,2762808,.012),w},o=new pe;o.position.y=5.5,t.add(o),a(2.2,0,0,0,1.2,1.1,.9,i,o),a(1.4,0,1.9,-.3,1.3,.8,1,n,o);let l=a(1,0,3.3,.4,1,.9,1,i,o),c=new nt(new Qi(.7,1),r);c.position.set(0,.2,1.9),o.add(c);let h=[];for(let u of[-1,1]){let p=new nt(new Jt(.2,10,8),r);p.position.set(u*.4,3.35,1.25),o.add(p),h.push(p)}let f=[];for(let u of[-1,1]){let p=new pe;p.position.set(u*2.9,1,0),o.add(p),a(.9,0,0,0,1,1,1,i,p);let x=new pe;x.position.set(0,-.6,0),p.add(x),a(.8,0,-1.2,0,.9,1.6,.9,i,x);let m=a(1.1,0,-3,.2,1.1,1,1.1,n,x);f.push({sh:p,up:x,fist:m})}for(let u of[-1,1])a(1,u*1.3,2.4,0,1,1.8,1),a(.9,u*1.4,.8,.2,1.1,1,1.2);let d=new nt(new Ee(3.2,.5,8,40),new se({color:14209279,transparent:!0,opacity:.25,depthWrite:!1,blending:ii}));d.rotation.x=Math.PI/2,d.position.y=4,t.add(d),s.parts={torso:o,core:c,eyes:h,arms:f,mist:d,head:l,update(u,p){let x=p.g.time;o.position.y=5.5+Math.sin(x*1.2)*.15,d.rotation.z+=u*.6,d.scale.setScalar(1+Math.sin(x*2)*.05),c.rotation.y+=u*1.5;let m=p.phase||1;c.material.color.setHex(m===3?16751320:m===2?10148095:13154559),c.scale.setScalar(p.coreOpen?1.6+Math.sin(x*8)*.1:1);let g=p.attack;for(let v=0;v<2;v++){let b=f[v],y=v?1:-1,M=Math.sin(x*1.3+v)*.1,w=y*.15;if(g&&g.kind==="slam"&&(g.side===y||g.side===0)){let A=g.t/g.dur;M=A<.5?-2.4*(A/.5):A<.62?-2.4+(A-.5)/.12*3.6:1.2-(A-.62)*1.5}if(g&&g.kind==="sweep"){let A=g.t/g.dur;w=y*(.15+Math.sin(A*Math.PI)*1.3),M=-1}b.sh.rotation.x+=(M-b.sh.rotation.x)*Math.min(1,u*10),b.sh.rotation.z+=(w-b.sh.rotation.z)*Math.min(1,u*8)}}}}var Hu=[{id:"mayor",name:"\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3",x:336,z:318,look:{hair:14211280,top:5913194,legs:3813440,apron:5913194,skin:16769740,hairStyle:{bangs:3,bangLen:.05,backN:6,backLen:.1,sideN:1,sideLen:.08}}},{id:"merchant",name:"\u5546\u4EBA\u30EB\u30AB",x:341.4,z:319.2,look:{hair:9067050,top:15259824,legs:5917242,apron:6982218,female:!0,hairStyle:{bangs:5,backN:6,backLen:.22,ponytail:{len:.35,tie:14700624}}}},{id:"child",name:"\u30DF\u30AB",x:318,z:345,scale:.7,look:{hair:15775840,top:15764106,legs:4872842,female:!0,hairStyle:{bangs:5,sideN:2,sideLen:.12,backN:5,backLen:.08}}},{id:"guard",name:"\u885B\u5175\u30AA\u30B9\u30AB\u30FC",x:252,z:336,look:{hair:4864554,top:3824266,legs:2763322,apron:3824266,hairStyle:{bangs:4,bangLen:.06,backN:6,backLen:.08}}},{id:"granny",name:"\u304A\u3070\u3042\u3055\u3093\u30A8\u30EB\u30B6",x:352,z:352,look:{hair:15263976,top:8018554,legs:5917274,apron:9071242,female:!0,hairStyle:{bangs:4,backN:6,backLen:.12,ponytail:{len:.15,tie:9071242}}}},{id:"baker",name:"\u30D1\u30F3\u5C4B\u306E\u30CF\u30F3\u30B9",x:312,z:314,look:{hair:6965802,top:16316664,legs:5917242,apron:15790320,hairStyle:{bangs:4,backN:6,backLen:.08,spikes:2}}},{id:"fisher",name:"\u91E3\u308A\u4EBA\u30CE\u30A2",x:62,z:150,look:{hair:3815994,top:5929562,legs:3820090,apron:6969914,hairStyle:{bangs:4,backN:6,backLen:.08}}},{id:"hunter",name:"\u8001\u72E9\u4EBA\u30B0\u30EC\u30F3",x:-412,z:172,look:{hair:12103840,top:5917242,legs:3813416,apron:5917242,hairStyle:{bangs:3,backN:6,backLen:.12,sideN:1}}}],Ye={intro:[["\u30DD\u30DD","\u3042\u3063\u3001\u8D77\u304D\u305F\uFF01\u3000\u306D\u3048\u306D\u3048\u3001\u5927\u4E08\u592B\uFF1F\u3000\u3053\u3093\u306A\u8349\u539F\u306E\u307E\u3093\u306A\u304B\u3067\u5BDD\u3066\u305F\u3089\u3001\u30B9\u30E9\u30A4\u30E0\u306B\u98DF\u3079\u3089\u308C\u3061\u3083\u3046\u3088\uFF01"],["\u30BD\u30E9","\u2026\u2026\u3053\u3053\u306F\u2026\u2026\uFF1F\u3000\u307C\u304F\u306F\u2026\u2026"],["\u30DD\u30DD","\u3053\u3053\u306F\u7A7A\u306B\u6D6E\u304B\u3076\u5927\u9678\u300C\u30EA\u30E5\u30DF\u30A8\u30E9\u300D\u3002\u30DD\u30DD\u306F\u30DD\u30DD\uFF01\u3000\u98A8\u306E\u7CBE\u970A\u306A\u3093\u3060\u3002\u304D\u307F\u3001\u540D\u524D\u306F\uFF1F"],["\u30BD\u30E9","\u30BD\u30E9\u2026\u2026\u3002\u305D\u308C\u3057\u304B\u601D\u3044\u51FA\u305B\u306A\u3044\u3002"],["\u30DD\u30DD","\u3075\u30FC\u3093\u2026\u2026\u3067\u3082\u3001\u304D\u307F\u306E\u307E\u308F\u308A\u3001\u98A8\u304C\u304F\u308B\u304F\u308B\u96C6\u307E\u3063\u3066\u308B\u3002\u304D\u3063\u3068\u98A8\u306E\u529B\u3092\u6301\u3063\u3066\u308B\u3093\u3060\u306D\uFF01"],["\u30DD\u30DD","\u3042\u3063\u3001\u898B\u3066\uFF01\u3000\u30B9\u30E9\u30A4\u30E0\u304C\u3053\u3063\u3061\u306B\u6765\u308B\uFF01\u3000\u5263\u3067\u8FFD\u3044\u6255\u3063\u3061\u3083\u304A\u3046\uFF01"]],slimesDone:[["\u30DD\u30DD","\u3059\u3054\u3044\u3059\u3054\u3044\uFF01\u3000\u30BD\u30E9\u3001\u3064\u3088\u30FC\u3044\uFF01"],["\u30DD\u30DD","\u6771\u306E\u307B\u3046\u306B\u300C\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3\u300D\u304C\u3042\u308B\u3088\u3002\u4EBA\u304C\u3044\u3063\u3071\u3044\u3044\u308B\u304B\u3089\u3001\u4F55\u304B\u601D\u3044\u51FA\u305B\u308B\u304B\u3082\uFF01"]],townArrive:[["\uFF1F\uFF1F\uFF1F","\u305D\u3053\u306E\u65C5\u4EBA\u3001\u4E0B\u304C\u3063\u3066\uFF01\u3000\u5E83\u5834\u306B\u9B54\u7269\u304C\u5165\u308A\u8FBC\u3093\u3060\uFF01"],["\u30A2\u30AB\u30CD","\u79C1\u306F\u30EA\u30FC\u30D5\u30A7\u30F3\u885B\u5175\u968A\u9577\u306E\u30A2\u30AB\u30CD\u3002\u2026\u2026\u3042\u3093\u305F\u3001\u5263\u304C\u4F7F\u3048\u308B\u306A\u3089\u624B\u3092\u8CB8\u3057\u3066\uFF01"],["\u30DD\u30DD","\u30BD\u30E9\u3001\u708E\u306E\u5263\u58EB\u3055\u3093\u3068\u4E00\u7DD2\u306B\u6226\u304A\u3046\uFF01\u3000\u4EF2\u9593\u306F\u300C1\u301C4\u300D\uFF08\u30B9\u30DE\u30DB\u306F\u53F3\u306E\u9854\uFF09\u3067\u5165\u308C\u66FF\u3048\u3089\u308C\u308B\u3088\uFF01"],["\u30DD\u30DD","\u6C34\u306E\u4ED8\u3044\u305F\u6575\u306B\u708E\u3092\u5F53\u3066\u308B\u3068\u300C\u84B8\u767A\u300D\uFF01\u3000\u5143\u7D20\u3092\u639B\u3051\u5408\u308F\u305B\u308B\u3068\u5927\u30C0\u30E1\u30FC\u30B8\u306A\u3093\u3060\uFF01"]],townDone:[["\u30A2\u30AB\u30CD","\u3075\u3046\u2026\u2026\u52A9\u304B\u3063\u305F\u3088\u3002\u6700\u8FD1\u3001\u9B54\u7269\u304C\u3069\u3093\u3069\u3093\u51F6\u66B4\u306B\u306A\u3063\u3066\u308B\u3002\u5317\u306E\u5C71\u304B\u3089\u6D41\u308C\u3066\u304F\u308B\u9727\u306E\u305B\u3044\u3060\u3063\u3066\u3001\u753A\u9577\u306F\u8A00\u3063\u3066\u305F\u3002"],["\u30A2\u30AB\u30CD","\u2026\u2026\u3042\u3093\u305F\u306E\u98A8\u3001\u898B\u305F\u3053\u3068\u306E\u306A\u3044\u529B\u3060\u3002\u753A\u9577\u306B\u4F1A\u3063\u3066\u307B\u3057\u3044\u3002\u79C1\u3082\u4E00\u7DD2\u306B\u884C\u304F\u3002"],["\u30DD\u30DD","\u30A2\u30AB\u30CD\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01"]],mayor:[["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u304A\u304A\u3001\u9B54\u7269\u3092\u9000\u3051\u3066\u304F\u308C\u305F\u306E\u306F\u541B\u304B\u3002\u793C\u3092\u8A00\u3046\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u767E\u5E74\u306E\u7720\u308A\u306B\u3064\u3044\u3066\u3044\u305F\u300C\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9\u300D\u304C\u76EE\u899A\u3081\u3001\u865A\u308D\u306E\u9727\u3067\u5927\u9678\u306E\u98A8\u3092\u6B62\u3081\u3088\u3046\u3068\u3057\u3066\u304A\u308B\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u5DE8\u50CF\u306E\u7D50\u754C\u3092\u89E3\u304F\u306B\u306F\u3001\u4E09\u3064\u306E\u300C\u98A8\u306E\u7960\u300D\u3092\u76EE\u899A\u3081\u3055\u305B\u306D\u3070\u306A\u3089\u3093\u3002\u6E56\u30FB\u8349\u539F\u306E\u4E18\u30FB\u5929\u98A8\u306E\u65AD\u5D16\u3058\u3083\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u307E\u305A\u306F\u93E1\u306E\u6E56\u306E\u300C\u6CC9\u306E\u795E\u6BBF\u300D\u3078\u3002\u5DEB\u5973\u30DF\u30BA\u30CF\u304C\u7960\u306E\u5B88\u308A\u624B\u3058\u3083\u3002\u2026\u2026\u3069\u3046\u304B\u3001\u3053\u306E\u753A\u3092\u983C\u3080\u3002"]],templeArrive:[["\u30DF\u30BA\u30CF","\u3060\u3001\u8AB0\u304B\u2026\u2026\uFF01\u3000\u795E\u6BBF\u304C\u9B54\u7269\u306B\u56F2\u307E\u308C\u3066\u2026\u2026\uFF01"],["\u30DD\u30DD","\u30BD\u30E9\u3001\u6025\u3044\u3067\uFF01\u3000\u5DEB\u5973\u3055\u3093\u3092\u52A9\u3051\u3088\u3046\uFF01"]],templeDone:[["\u30DF\u30BA\u30CF","\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u2026\u2026\u3002\u79C1\u306F\u6CC9\u306E\u5DEB\u5973\u30DF\u30BA\u30CF\u3002\u3042\u306A\u305F\u306E\u98A8\u2026\u2026\u3084\u3055\u3057\u3044\u8272\u3092\u3057\u3066\u3044\u307E\u3059\u306D\u3002"],["\u30DF\u30BA\u30CF","\u6E56\u306E\u5C0F\u5CF6\u306B\u7960\u304C\u3042\u308A\u307E\u3059\u3002\u79C1\u3082\u53C2\u308A\u307E\u3059\u3002\u50B7\u3064\u3044\u305F\u3089\u3001\u6C34\u306E\u529B\u3067\u7652\u3084\u3057\u307E\u3059\u304B\u3089\u3002"],["\u30DD\u30DD","\u30DF\u30BA\u30CF\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01\u3000\u5C0F\u5CF6\u307E\u3067\u306F\u6CF3\u3044\u3067\u3044\u3053\u3046\uFF01\uFF08\u6CF3\u3050\u3068\u30B9\u30BF\u30DF\u30CA\u304C\u6E1B\u308B\u304B\u3089\u6C17\u3092\u3064\u3051\u3066\uFF09"]],shrineLake:[["\u30DD\u30DD","\u7960\u304C\u76EE\u899A\u3081\u305F\uFF01\u3000\u98A8\u304C\u6D41\u308C\u59CB\u3081\u305F\u306E\u304C\u308F\u304B\u308B\u2026\u2026\uFF01\u3000\u30B9\u30BF\u30DF\u30CA\u306E\u6700\u5927\u5024\u304C\u4E0A\u304C\u3063\u305F\u3088\uFF01"],["\u30DF\u30BA\u30CF","\u6B21\u306F\u897F\u306E\u300C\u3055\u3055\u3084\u304D\u306E\u68EE\u300D\u3078\u3002\u68EE\u306E\u72E9\u4EBA\u306A\u3089\u91CE\u55B6\u5730\u306E\u9B54\u7269\u306E\u3053\u3068\u3082\u8A73\u3057\u3044\u306F\u305A\u3067\u3059\u3002"]],forest:[["\u30E9\u30A4\u30AB","\u2026\u2026\u8AB0\u3002\u3053\u306E\u68EE\u3067\u8DB3\u97F3\u3092\u7ACB\u3066\u306A\u3044\u3067\u3002\u7372\u7269\u304C\u9003\u3052\u308B\u3002"],["\u30E9\u30A4\u30AB","\u7960\uFF1F\u3000\u5DE8\u50CF\uFF1F\u3000\u2026\u2026\u3075\u3046\u3093\u3002\u306A\u3089\u5317\u897F\u306E\u300C\u7363\u306E\u91CE\u55B6\u5730\u300D\u3092\u3064\u3076\u3057\u3066\u304D\u3066\u3002\u3042\u3044\u3064\u3089\u3001\u68EE\u306E\u52D5\u7269\u3092\u72E9\u308A\u5C3D\u304F\u3057\u3066\u308B\u3002"],["\u30E9\u30A4\u30AB","\u2026\u2026\u624B\u4F1D\u3063\u3066\u3042\u3052\u3066\u3082\u3044\u3044\u3002\u5F13\u306A\u3089\u8CA0\u3051\u306A\u3044\u3002"]],campDone:[["\u30E9\u30A4\u30AB","\u2026\u2026\u3084\u308B\u3058\u3083\u3093\u3002\u3044\u3044\u3088\u3001\u3064\u3044\u3066\u3044\u304F\u3002\u5DE8\u50CF\u306E\u76EE\u3001\u79C1\u304C\u5C04\u629C\u3044\u3066\u3042\u3052\u308B\u3002"],["\u30DD\u30DD","\u30E9\u30A4\u30AB\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01\u3000\u3053\u308C\u30674\u4EBA\u305D\u308D\u3063\u305F\u306D\uFF01\u3000\u6B21\u306F\u8349\u539F\u306E\u4E18\u306E\u7960\u3060\u3088\uFF01"]],shrineMeadowStart:[["\u30DD\u30DD","\u7960\u306E\u8A66\u7DF4\u3060\uFF01\u3000\u307E\u308F\u308A\u306B\u6D6E\u304B\u3076\u300C\u98A8\u306E\u8F2A\u300D\u3092\u6642\u9593\u5185\u306B\u5168\u90E8\u304F\u3050\u308D\u3046\uFF01\u3000\u30B8\u30E3\u30F3\u30D7\u306F\u62BC\u3057\u7D9A\u3051\u308B\u3068\u9AD8\u304F\u8DF3\u3079\u3066\u3001\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u56DE\u8DF3\u3079\u308B\u3088\uFF01\uFF08\u4E8C\u6BB5\u30B8\u30E3\u30F3\u30D7\uFF09"]],shrineMeadow:[["\u30DD\u30DD","\u4E8C\u3064\u76EE\u306E\u7960\u3082\u76EE\u899A\u3081\u305F\uFF01\u3000\u6B8B\u308B\u306F\u6771\u306E\u300C\u5929\u98A8\u306E\u65AD\u5D16\u300D\u306E\u3066\u3063\u307A\u3093\uFF01\u3000\u5D16\u306F\u767B\u308C\u308B\u3088\uFF01"]],shrineCliffStart:[["\u30DD\u30DD","\u8A66\u7DF4\u306E\u9B54\u7269\u304C\u51FA\u3066\u304D\u305F\uFF01\u3000\u6C17\u3092\u3064\u3051\u3066\uFF01"]],shrineCliff:[["\u30DD\u30DD","\u4E09\u3064\u306E\u7960\u304C\u5168\u90E8\u76EE\u899A\u3081\u305F\uFF01\u3000\u5317\u306E\u9727\u304C\u6674\u308C\u3066\u3044\u304F\u2026\u2026\uFF01"],["\u30A2\u30AB\u30CD","\u5317\u306E\u300C\u9727\u306E\u907A\u8DE1\u300D\u3002\u5DE8\u50CF\u306F\u305D\u306E\u9802\u306B\u3044\u308B\u3002\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u884C\u3053\u3046\u3002"]],ruinsArrive:[["\u30DD\u30DD","\u907A\u8DE1\u306E\u756A\u4EBA\u3060\uFF01\u3000\u3042\u308C\u3092\u5012\u3055\u306A\u3044\u3068\u5148\u306B\u9032\u3081\u306A\u3044\u3088\uFF01"],["\u30E9\u30A4\u30AB","\u76EE\u304C\u5149\u3063\u305F\u3089\u6765\u308B\u3002\u907F\u3051\u3066\u3002"]],bossStart:[["\u9727\u306E\u5DE8\u50CF","\u2026\u2026\u98A8\u30F2\u2026\u2026\u6B62\u30E1\u30EB\u2026\u2026\u3002\u60B2\u30B7\u30DF\u30CF\u2026\u2026\u30E2\u30A6\u3001\u8981\u30E9\u30CC\u2026\u2026"],["\u30DD\u30DD","\u3057\u3083\u3079\u3063\u305F\u2026\u2026\uFF01\uFF1F\u3000\u30BD\u30E9\u3001\u6765\u308B\u3088\uFF01\u3000\u8155\u306E\u5F71\u304C\u8D64\u304F\u5149\u3063\u305F\u3089\u907F\u3051\u3066\uFF01"]],bossPhase2:[["\u30DD\u30DD","\u9727\u304C\u3082\u3063\u3068\u6FC3\u304F\u306A\u3063\u305F\uFF01\u3000\u8DB3\u5143\u306E\u6C37\u67F1\u306B\u6CE8\u610F\uFF01"]],bossPhase3:[["\u30DD\u30DD","\u80F8\u306E\u7D50\u6676\u304C\u5149\u3063\u3066\u308B\uFF01\u3000\u3042\u305D\u3053\u304C\u5F31\u70B9\u3060\uFF01\u3000\u5143\u7D20\u3092\u3076\u3064\u3051\u3066\uFF01"]],ending:[["\u9727\u306E\u5DE8\u50CF","\u2026\u2026\u30A2\u30A2\u2026\u2026\u98A8\u30AC\u2026\u2026\u30A2\u30BF\u30BF\u30AB\u30A4\u2026\u2026"],["\u30DF\u30BA\u30CF","\u9727\u304C\u2026\u2026\u307B\u3069\u3051\u3066\u3044\u304F\u3002\u3053\u306E\u5DE8\u50CF\u306F\u3001\u305A\u3063\u3068\u6614\u3001\u98A8\u306B\u7F6E\u3044\u3066\u3044\u304B\u308C\u305F\u60B2\u3057\u307F\u3060\u3063\u305F\u306E\u3067\u3059\u306D\u3002"],["\u30A2\u30AB\u30CD","\u2026\u2026\u7D42\u308F\u3063\u305F\u3001\u3093\u3060\u306A\u3002"],["\u30E9\u30A4\u30AB","\u7A7A\u3001\u9752\u3044\u3002"],["\u30DD\u30DD","\u30BD\u30E9\u2026\u2026\uFF01\u3000\u4E03\u8272\u306E\u98A8\u304C\u623B\u3063\u3066\u304D\u305F\u3088\uFF01\u3000\u307B\u3089\u3001\u5927\u9678\u3058\u3085\u3046\u306B\uFF01"],["\u30BD\u30E9","\u2026\u2026\u4ECA\u3001\u98A8\u306E\u4E2D\u3067\u3001\u8AB0\u304B\u306E\u58F0\u304C\u805E\u3053\u3048\u305F\u6C17\u304C\u3059\u308B\u3002\u300C\u7A7A\u306E\u5411\u3053\u3046\u3067\u5F85\u3063\u3066\u3044\u308B\u300D\u3063\u3066\u3002"],["\u30DD\u30DD","\u3058\u3083\u3042\u3001\u884C\u3053\u3046\u3088\uFF01\u3000\u3044\u3064\u304B\u7A7A\u306E\u5411\u3053\u3046\u307E\u3067\uFF01\u3000\u3067\u3082\u4ECA\u306F\u2026\u2026\u30EA\u30FC\u30D5\u30A7\u30F3\u3067\u304A\u795D\u3044\u3060\u306D\uFF01"]]};function Hp(s){let t=s.meta.places;return[{id:"prologue",title:"\u306F\u3058\u307E\u308A\u306E\u98A8",obj:"\u30DD\u30DD\u306E\u8A71\u3092\u805E\u3053\u3046",start:e=>e.dialog(Ye.intro,()=>e.quests.advance())},{id:"slimes",title:"\u306F\u3058\u307E\u308A\u306E\u98A8",obj:"\u30B9\u30E9\u30A4\u30E0\u3092\u5012\u305D\u3046",target:()=>({x:95,z:405}),start:e=>e.spawnGroup("tut",[["slime",92,402,"wind"],["slime",99,398,"water"],["slime",96,410,"wind"]]),check:e=>e.groupDead("tut"),done:e=>e.dialog(Ye.slimesDone)},{id:"to_town",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3\u3078\u5411\u304B\u304A\u3046",target:()=>({x:238,z:330}),check:e=>e.near(238,330,22)},{id:"town_fight",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u5E83\u5834\u306E\u9B54\u7269\u3092\u5012\u305D\u3046",target:()=>({x:330,z:330}),start:e=>{e.unlock("akane"),e.spawnGroup("plaza",[["slime",322,322,"water"],["slime",338,322,"water"],["slime",330,340,"fire"],["slime",318,338,"ice"],["slime",342,338,"water"]]),e.dialog(Ye.townArrive)},check:e=>e.groupDead("plaza"),done:e=>e.dialog(Ye.townDone)},{id:"mayor",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u753A\u9577\u306B\u8A71\u3092\u805E\u3053\u3046",target:()=>m1(s,"mayor"),check:e=>e.flags.talkedMayor},{id:"temple",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u93E1\u306E\u6E56\u30FB\u6CC9\u306E\u795E\u6BBF\u3078\u5411\u304B\u304A\u3046",target:()=>({x:-150,z:60}),check:e=>e.near(-150,60,30)},{id:"temple_fight",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u795E\u6BBF\u3092\u8972\u3046\u9B54\u7269\u3092\u5012\u305D\u3046",target:()=>({x:-150,z:60}),start:e=>{e.spawnGroup("temple",[["boko",-140,72],["boko",-160,76],["boko",-136,48],["archer",-165,40]]),e.dialog(Ye.templeArrive)},check:e=>e.groupDead("temple"),done:e=>{e.unlock("mizuha"),e.dialog(Ye.templeDone)}},{id:"lake_shrine",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u6E56\u306E\u5C0F\u5CF6\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:40,z:-30}),check:e=>e.flags.sh_lake,done:e=>e.dialog(Ye.shrineLake)},{id:"forest",title:"\u68EE\u306E\u72E9\u4EBA",obj:"\u3055\u3055\u3084\u304D\u306E\u68EE\u306E\u72E9\u4EBA\u3092\u63A2\u305D\u3046",target:()=>({x:-420,z:165}),check:e=>e.near(-418,166,10),done:e=>e.dialog(Ye.forest)},{id:"camp",title:"\u68EE\u306E\u72E9\u4EBA",obj:"\u7363\u306E\u91CE\u55B6\u5730\u306E\u9B54\u7269\u3092\u4E00\u6383\u3057\u3088\u3046",target:()=>({x:-380,z:-300}),start:e=>e.spawnGroup("camp",[["boko",-372,-292],["boko",-388,-296],["boko",-380,-310],["archer",-374,-306,null,"tower"],["archer",-392,-286],["shaman",-384,-304,"fire"],["shield",-378,-300]]),check:e=>e.groupDead("camp"),done:e=>{e.unlock("raika"),e.dialog(Ye.campDone)}},{id:"meadow_shrine",title:"\u4E09\u3064\u306E\u7960",obj:"\u8349\u539F\u306E\u4E18\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:-130,z:380}),check:e=>e.flags.sh_meadow,done:e=>e.dialog(Ye.shrineMeadow)},{id:"cliff_shrine",title:"\u4E09\u3064\u306E\u7960",obj:"\u5929\u98A8\u306E\u65AD\u5D16\u306E\u9802\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:480,z:-190}),check:e=>e.flags.sh_cliff,done:e=>e.dialog(Ye.shrineCliff)},{id:"ruins",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u9727\u306E\u907A\u8DE1\u3078\u5411\u304B\u304A\u3046",target:()=>({x:25,z:-385}),check:e=>e.near(25,-385,30),done:e=>{e.spawnGroup("ruins",[["guardian",10,-400],["guardian",40,-395]]),e.dialog(Ye.ruinsArrive)}},{id:"ruins_fight",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u907A\u8DE1\u306E\u756A\u4EBA\u3092\u5012\u305D\u3046",target:()=>({x:25,z:-398}),check:e=>e.groupDead("ruins")},{id:"boss",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u9802\u306E\u95D8\u6280\u5834\u3067\u9727\u306E\u5DE8\u50CF\u3092\u93AE\u3081\u3088\u3046",target:()=>({x:0,z:-500}),start:e=>e.prepareBoss(),check:e=>e.flags.bossDown},{id:"ending",title:"\u4E03\u5F69\u306E\u98A8",obj:"",start:e=>e.playEnding()}]}function m1(s,t){let e=Hu.find(i=>i.id===t);return{x:e.x,z:e.z}}var Ss={cat:{title:"\u8FF7\u5B50\u306E\u30CB\u30E3\u30C3\u30BF",giver:"child",reward:{mora:300,exp:400}},letter:{title:"\u753A\u9577\u306E\u624B\u7D19",giver:"mayor",reward:{mora:250,exp:300}},slime_hunt:{title:"\u65AD\u5D16\u306E\u30B9\u30E9\u30A4\u30E0\u9000\u6CBB",giver:"guard",reward:{mora:400,exp:600}},feathers:{title:"\u68EE\u306E\u9DF9\u306E\u7FBD\u6839",giver:"hunter",reward:{mora:300,exp:500}},boko_lake:{title:"\u6E56\u7554\u306E\u30DC\u30B3",giver:"fisher",reward:{mora:400,exp:600}}},Gp={merchant:["\u3044\u3089\u3063\u3057\u3083\u3044\uFF01\u3000\u65C5\u306E\u304A\u3068\u3082\u306B\u6599\u7406\u306F\u3044\u304B\u304C\uFF1F"],granny:["\u6614\u306F\u306D\u3048\u3001\u4E03\u8272\u306E\u98A8\u304C\u3053\u306E\u753A\u306E\u98A8\u8ECA\u3092\u56DE\u3057\u3066\u3044\u305F\u3093\u3060\u3088\u3002\u4ECA\u306E\u98A8\u306F\u2026\u2026\u5C11\u3057\u3055\u3073\u3057\u3044\u8272\u3060\u306D\u3048\u3002","\u5317\u306E\u5C71\u306B\u306F\u8FD1\u3065\u304F\u3093\u3058\u3083\u306A\u3044\u3088\u3002\u9727\u306E\u4E2D\u3067\u3001\u5927\u304D\u306A\u5F71\u304C\u6CE3\u3044\u3066\u3044\u308B\u3063\u3066\u8A71\u3055\u3002"],baker:["\u713C\u304D\u305F\u3066\u306E\u98A8\u8ECA\u30D1\u30A4\uFF01\u3000\u2026\u2026\u3068\u8A00\u3044\u305F\u3044\u3068\u3053\u308D\u3060\u304C\u3001\u5C0F\u9EA6\u304C\u5C4A\u304B\u306A\u304F\u3066\u306D\u3002\u9B54\u7269\u306E\u305B\u3044\u3055\u3002","\u98A8\u306E\u7960\u304C\u76EE\u899A\u3081\u305F\u3089\u3001\u307E\u305F\u5C0F\u9EA6\u7551\u306B\u98A8\u304C\u623B\u308B\u3093\u3060\u304C\u306A\u3042\u3002"]};var Gc=class{constructor(t){this.g=t,this.steps=Hp(t.world),this.step=0,this.started=!1,this.side={},this.track="main"}get cur(){return this.steps[this.step]}get mainDone(){return this.step>=this.steps.length-1&&this.started}current(){let t=this.g;if(this.track!=="main"&&this.side[this.track]&&this.side[this.track]!=="done")return this.sideInfo(this.track);let e=this.cur;if(e&&e.obj)return{title:e.title,obj:e.obj,target:e.target?e.target():null};let i=Object.keys(this.side).find(n=>this.side[n]!=="done");return i?this.sideInfo(i):null}sideInfo(t){let e=this.g,i=Ss[t],n=this.side[t],r={title:i.title,obj:"",target:null},a=e.npcPos(i.giver);return n==="ready"?(r.obj=`${e.npcName(i.giver)}\u306B\u5831\u544A\u3057\u3088\u3046`,r.target=a):t==="cat"?(r.obj="\u98A8\u8ECA\u306E\u305D\u3070\u3067\u8FF7\u5B50\u306E\u732B\u3092\u63A2\u305D\u3046",r.target={x:250,z:268}):t==="letter"?(r.obj="\u6E56\u7554\u306E\u91E3\u308A\u4EBA\u30CE\u30A2\u306B\u624B\u7D19\u3092\u5C4A\u3051\u3088\u3046",r.target=e.npcPos("fisher")):t==="slime_hunt"?(r.obj="\u65AD\u5D16\u306E\u3075\u3082\u3068\u306E\u30B9\u30E9\u30A4\u30E0\u3092\u5012\u305D\u3046",r.target={x:410,z:-60}):t==="feathers"?(r.obj=`\u68EE\u3067\u9DF9\u306E\u7FBD\u6839\u3092\u96C6\u3081\u3088\u3046\uFF08${e.flags.feathers||0}/3\uFF09`,r.target=e.nextFeather()):t==="boko_lake"&&(r.obj="\u6E56\u306E\u5317\u897F\u306E\u30DC\u30B3\u3092\u5012\u305D\u3046",r.target={x:-185,z:-60}),r}update(){let t=this.g,e=this.cur;if(!(!e||t.dialogOpen)){if(!this.started){this.started=!0,e.start&&e.start(t);return}e.check&&e.check(t)&&this.advance()}}advance(){let t=this.g,e=this.cur;e.done&&e.done(t),this.step=Math.min(this.steps.length-1,this.step+1),this.started=!1;let i=this.cur;i&&i.obj&&i.title!==e.title&&t.hud.showBanner(i.title,"\u65B0\u3057\u3044\u4F9D\u983C","quest"),t.audio?.sfx("quest"),t.save()}startSide(t){this.side[t]||(this.side[t]="active",this.track=t,this.g.hud.showBanner(Ss[t].title,"\u4F9D\u983C\u3092\u53D7\u3051\u305F","quest"),this.g.onSideStart&&this.g.onSideStart(t))}readySide(t){this.side[t]==="active"&&(this.side[t]="ready",this.g.notify(`\u300C${Ss[t].title}\u300D \u5831\u544A\u3057\u3088\u3046`,"wind"))}finishSide(t){let e=this.g,i=Ss[t];this.side[t]="done",this.track===t&&(this.track="main"),e.reward(i.reward.mora,i.reward.exp,`\u4F9D\u983C\u300C${i.title}\u300D\u9054\u6210`),e.save()}save(){return{step:this.step,side:this.side,track:this.track}}load(t){t&&(this.step=Math.min(t.step||0,this.steps.length-1),this.side=t.side||{},this.track=t.track||"main",this.started=!1)}};var Wu=null;function qu(s){let t=[];return s.traverse(e=>{e.isMesh&&!e.userData.outline&&t.push(e)}),t}function qp(s){Wu=s}function Gu(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function ye(s,t,e,i=2.5){let n=new ze(s,t,e),r=n.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/i,r.getY(c)*a[o][1]/i)}return n}function Vp(s,t,e,i,n,r,a,o){let l=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],c=[r[0]-e[0],r[1]-e[1],r[2]-e[2]],h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]],d=h[0]*o[0]+h[1]*o[1]+h[2]*o[2]<0?[[e,a[0]],[r,a[3]],[n,a[2]],[e,a[0]],[n,a[2]],[i,a[1]]]:[[e,a[0]],[i,a[1]],[n,a[2]],[e,a[0]],[n,a[2]],[r,a[3]]];for(let[u,p]of d)s.push(...u),t.push(...p)}function Vu(s,t,e,i=.35){let n=s/2+i,r=t/2+i,a=e*(r/(t/2)),o=a-e,l=[],c=[],h=Math.hypot(r,a)/1.6,f=2*n/1.6;Vp(l,c,[-n,-o,-r],[n,-o,-r],[n,e,0],[-n,e,0],[[0,0],[f,0],[f,h],[0,h]],[0,r,-a]),Vp(l,c,[-n,-o,r],[n,-o,r],[n,e,0],[-n,e,0],[[0,0],[f,0],[f,h],[0,h]],[0,r,a]);let d=new Qt;return d.setAttribute("position",new Lt(l,3)),d.setAttribute("uv",new Lt(c,2)),d.computeVertexNormals(),d}function Wp(s,t,e){let i=s/2,n=t/2,r=[-i,0,-n,-i,0,n,-i,e,0,i,0,n,i,0,-n,i,e,0],a=[0,0,t/2.5,0,n/2.5,e/2.5,0,0,t/2.5,0,n/2.5,e/2.5],o=new Qt;return o.setAttribute("position",new Lt(r,3)),o.setAttribute("uv",new Lt(a,2)),o.computeVertexNormals(),o}function zt(s,t,e,i,n=0,r=1,a=1,o=1){let l=new he().compose(new R(t,e,i),new fi().setFromEuler(new mi(0,n,0)),new R(r,a,o));return s.clone().applyMatrix4(l)}var Vc=class{constructor(t,e,i,n){this.scene=t,this.w=e,this.tex=i,this.g=n,this.buckets={},this.mats={plaster:ht({color:16774888,map:i.plaster,shadowTint:13156576,tri:2.6}),plaster2:ht({color:16773320,map:i.plaster,shadowTint:13156576,tri:2.6}),plaster3:ht({color:16777215,map:i.plaster,shadowTint:13156576,tri:2.6}),roof:ht({color:16777215,map:i.rooftile,shadowTint:12624064}),roof2:ht({color:13154559,map:i.rooftile,shadowTint:10526928}),slate:ht({color:16777215,map:i.slate,shadowTint:10528976}),wood:ht({color:11044968,map:i.wood,tri:1.4}),planks:ht({color:16777215,map:i.planks,tri:1.8}),brick:ht({color:16774376,map:i.brick,shadowTint:12103888,tri:2.2}),stone:ht({color:15789288,map:i.cobble,shadowTint:11579600,tri:2.4}),mossrock:ht({color:16777215,map:i.mossrock,tri:2.5}),dark:ht({color:3811876}),window:ht({color:2767450,emissive:0}),cloth:ht({color:14174778,detail:i.cloth_detail}),cloth2:ht({color:3836632,detail:i.cloth_detail}),cloth3:ht({color:15781968,detail:i.cloth_detail}),white:ht({color:16316671,map:i.plaster,tri:3}),blueRoof:ht({color:6988008,map:i.slate}),gold:ht({color:15778906}),fur:ht({color:10123850,map:i.leather_detail,tri:1.2}),leaf:ht({color:6989898})},this.interactables=[],this.animated=[],this.lamps=[],this.buildTown(330,330),this.buildTemple(-150,60),this.buildHut(-420,160),this.buildCamp(-380,-300),this.buildRuins(),this.buildBridges(),this.flush()}add(t,e){var i;((i=this.buckets)[t]||(i[t]=[])).push(e)}flush(){for(let[t,e]of Object.entries(this.buckets)){let i=e.map(a=>{let o=a.index?a.toNonIndexed():a;o.attributes.uv||o.setAttribute("uv",new Lt(new Float32Array(o.attributes.position.count*2),2));for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);return o.attributes.normal||o.computeVertexNormals(),o}),n=$n(i),r=new nt(n,this.mats[t]);r.castShadow=!0,r.receiveShadow=!0,["window","gold"].includes(t)||Ae(r,t==="plaster"||t==="white"?9075306:this.mats[t].color.getHex(),.012),this.scene.add(r)}this.buckets={}}ground(t,e){return this.w.heightAt(t,e)}house(t,e,i,n,r,a,o={}){let l=Math.min(this.ground(t-n/2,e-r/2),this.ground(t+n/2,e+r/2),this.ground(t,e))-.3,c=a+.3,h=o.rise||n*.42;this.add("stone",zt(ye(n+.2,.7,r+.2),t,l+.35,e,i));let f=o.wall||"plaster";this.add(f,zt(ye(n,c,r),t,l+c/2+.2,e,i));let d=[];for(let p of[-1,1])for(let x of[-1,1])d.push(zt(ye(.22,c,.22,1),p*(n/2),l+c/2+.2,x*(r/2)));d.push(zt(ye(n+.1,.2,.22,1),0,l+c*.55,r/2),zt(ye(n+.1,.2,.22,1),0,l+c*.55,-r/2)),d.push(zt(ye(.22,.2,r+.1,1),n/2,l+c*.55,0),zt(ye(.22,.2,r+.1,1),-n/2,l+c*.55,0));for(let p of d)this.add("wood",zt(p,t,0,e,i));let u=Vu(n,r,h,.45);this.add(o.slate?"slate":o.roof||"roof",zt(u,t,l+c+.2,e,i)),this.add(f,zt(Wp(n,r,h),t,l+c+.2,e,i)),this.add("wood",zt(ye(1.1,1.9,.12,1).translate(0,.95,r/2+.06),t,l+.2,e,i));for(let p of[-1,1])n>4&&this.add("window",zt(ye(.8,.9,.1,1).translate(p*n*.3,c*.45,r/2+.05),t,l+.2,e,i)),this.add("window",zt(ye(.1,.9,.8,1).translate(p*(n/2+.05),c*.45,0),t,l+.2,e,i)),n>4&&this.add("planks",zt(ye(.95,.12,.3,1).translate(p*n*.3,c*.45-.55,r/2+.15),t,l+.2,e,i));if(c>5)for(let p of[-1,1])this.add("window",zt(ye(.7,.8,.1,1).translate(p*n*.25,c*.8,r/2+.05),t,l+.2,e,i));return o.chimney!==!1&&this.add("brick",zt(ye(.7,h+1.2,.7).translate(n*.25,c+.2+h*.4,-r*.2),t,l,e,i)),this.w.addCollider({box:!0,x:t,z:e,hw:n/2+.05,hd:r/2+.05,rot:i,top:l+c+.2+h*.5,bottom:l-1}),l+c}windmill(t,e,i){let n=this.ground(t,e)-.3,r=new Vt(2.2,3.2,11,12,1,!0),a=r.attributes.uv;for(let f=0;f<a.count;f++)a.setXY(f,a.getX(f)*7,a.getY(f)*4.4);this.add("plaster",zt(r,t,n+5.5,e)),this.add("stone",zt(new Vt(3.4,3.5,1,12),t,n+.5,e));let o=new Ge(2.8,3.2,12);o.translate(0,1.6,0),this.add("roof",zt(o,t,n+11,e)),this.add("wood",zt(ye(1.2,2,.15,1).translate(0,1,3.15),t,n,e,i));let l=new pe;l.position.set(t+Math.sin(i)*2.6,n+11.5,e+Math.cos(i)*2.6),l.rotation.y=i;let c=new nt(new Vt(.35,.35,.6,10),this.mats.wood);c.rotation.x=Math.PI/2,l.add(c);let h=new pe;l.add(h);for(let f=0;f<4;f++){let d=new pe;d.rotation.z=f*Math.PI/2,h.add(d);let u=new nt(new ze(.22,7.5,.18),this.mats.wood);u.position.y=3.9,d.add(u);let p=new nt(new gi(1.8,6,2,6),this.mats.white);p.position.set(.95,4.3,.12),p.material.side=Ie,d.add(p);for(let x=0;x<5;x++){let m=new nt(new ze(1.9,.08,.08),this.mats.wood);m.position.set(.95,1.6+x*1.3,.16),d.add(m)}}qu(l).forEach(f=>{f.castShadow=!0,Ae(f,5914672,.01)}),this.scene.add(l),this.animated.push(f=>{h.rotation.z+=f*.6}),this.w.addCollider({x:t,z:e,r:3.1,top:n+11,bottom:n-1})}buildTown(t,e){let i=Gu(77),n=this.ground(t,e);this.add("stone",zt(new Vt(5,5.3,.8,24),t,n+.2,e)),this.add("brick",zt(new Vt(1.2,1.5,2.2,12),t,n+1.3,e));let r=new nt(new Vt(4.6,4.6,.1,24),new pi({color:7000296,emissive:1724528,transparent:!0,opacity:.85}));r.position.set(t,n+.62,e),this.scene.add(r);let a=new nt(new Ze(.9),new pi({color:10483944,emissive:3852456,emissiveIntensity:.9}));a.position.set(t,n+3.6,e),this.scene.add(a),this.animated.push((c,h)=>{a.rotation.y+=c,a.position.y=n+3.6+Math.sin(h*1.5)*.15}),this.w.addCollider({x:t,z:e,r:5.2,top:n+.6,bottom:n-1}),this.fountain={x:t,z:e,y:n};let o=[];for(let c=0;c<3;c++){let h=22+c*21,f=8+c*5;for(let d=0;d<f;d++){let u=d/f*Math.PI*2+c*.4+(i()-.5)*.12,p=(u%(Math.PI/2)+Math.PI/2)%(Math.PI/2);if(p<.22||p>Math.PI/2-.22)continue;let x=t+Math.cos(u)*h,m=e+Math.sin(u)*h;if(Math.hypot(x-t,m-e)>92)continue;let g=5+i()*3,v=4.5+i()*2.5,b=3.4+i()*3.2,y=-u+Math.PI/2+Math.PI,M=i();this.house(x,m,y,g,v,b,{slate:M<.22,roof:M>.85?"roof2":"roof",wall:["plaster","plaster2","plaster3"][Math.floor(i()*3)]}),o.push({x,z:m})}}this.townHouses=o;for(let[c,h]of[[0,2.4],[1,3.6],[2,5.2]])this.windmill(t+Math.cos(h)*98,e+Math.sin(h)*98,h+Math.PI/2+c);let l=(c,h,f,d)=>{let u=this.ground(c,h);for(let x of[-1,1])for(let m of[-1,1])this.add("wood",zt(ye(.15,2.4,.15,1),c+x*1.3,u+1.2,h+m*.9,0));let p=Vu(2.8,2.2,.6,.2);this.add(d,zt(p,c,u+2.4,h,f)),this.add("planks",zt(ye(2.6,.12,1.4,1),c,u+.95,h,f)),this.add("wood",zt(ye(.6,.5,.5,1),c+.8,u+1.25,h,f)),this.add("cloth3",zt(new Jt(.22,8,6),c-.6,u+1.2,h)),this.w.addCollider({box:!0,x:c,z:h,hw:1.4,hd:1,rot:f,top:u+1,bottom:u-1})};l(t+12,e-9,.3,"cloth"),l(t-12,e-9,-.3,"cloth2"),l(t+13,e+9,-.3,"cloth3"),l(t-12,e+10,.4,"cloth");for(let c=0;c<16;c++){let h=c/16*Math.PI*2,f=c%2?14:34,d=t+Math.cos(h)*f,u=e+Math.sin(h)*f,p=this.ground(d,u);this.add("dark",zt(new Vt(.08,.12,3.2,6),d,p+1.6,u));let x=new nt(new Jt(.28,10,8),new se({color:16767120}));x.position.set(d,p+3.3,u),this.scene.add(x),this.lamps.push(x)}for(let c of[Math.PI,Math.PI*1.5]){let h=t+Math.cos(c)*96,f=e+Math.sin(c)*96,d=this.ground(h,f)-.3,u=-c;for(let x of[-1,1]){let m=h+Math.cos(c+Math.PI/2)*x*4.5,g=f+Math.sin(c+Math.PI/2)*x*4.5;this.add("brick",zt(ye(1.6,7,1.6),m,d+3.5,g,u)),this.add("roof",zt(new Ge(1.4,1.6,4).rotateY(Math.PI/4),m,d+7.8,g,u)),this.w.addCollider({box:!0,x:m,z:g,hw:.85,hd:.85,rot:u,top:d+7,bottom:d-1})}this.add("wood",zt(ye(10.5,.8,.6,1),h,d+6.4,f,u+Math.PI/2));let p=new nt(new gi(1.4,2.6),this.mats.cloth2);p.position.set(h,d+4.7,f),p.rotation.y=u+Math.PI/2,p.material.side=Ie,this.scene.add(p)}for(let c=0;c<40;c++){let h=i()*Math.PI*2,f=8+i()*80,d=t+Math.cos(h)*f,u=e+Math.sin(h)*f,p=this.ground(d,u);this.w.nearColliders(d,u,1.5).some(x=>this.w.insideCollider(x,d,u,1.2))||(i()<.5?(this.add("wood",zt(new Vt(.45,.4,1,10),d,p+.5,u)),this.w.addCollider({x:d,z:u,r:.5,top:p+1})):(this.add("planks",zt(ye(.9,.9,.9,1),d,p+.45,u,i()*3)),this.w.addCollider({x:d,z:u,r:.6,top:p+.9})))}}buildTemple(t,e){let i=this.ground(t,e);this.add("white",zt(new Vt(9,9.5,1.2,24),t,i+.3,e));for(let r=0;r<8;r++){let a=r/8*Math.PI*2;this.add("white",zt(new Vt(.45,.5,6,10),t+Math.cos(a)*6.5,i+3.8,e+Math.sin(a)*6.5)),this.w.addCollider({x:t+Math.cos(a)*6.5,z:e+Math.sin(a)*6.5,r:.55,top:i+6.8})}this.add("white",zt(new Vt(7.4,7.4,.6,24),t,i+7.1,e)),this.add("blueRoof",zt(new Ge(8.2,4,24),t,i+9.4,e)),this.add("gold",zt(new Ze(.6),t,i+11.8,e));let n=new nt(new Vt(3,3,.1,24),new pi({color:8052976,emissive:2788016,emissiveIntensity:.5,transparent:!0,opacity:.9}));n.position.set(t,i+.95,e),this.scene.add(n),this.w.addCollider({x:t,z:e,r:9.3,top:i+.9,bottom:i-2}),this.temple={x:t,z:e,y:i+.9}}buildHut(t,e){let i=this.ground(t,e)-.2;this.add("planks",zt(ye(6,3.4,5),t,i+1.7,e,.4)),this.add("slate",zt(Vu(6,5,2.4,.5),t,i+3.4,e,.4)),this.add("planks",zt(Wp(6,5,2.4),t,i+3.4,e,.4)),this.add("wood",zt(ye(1,1.9,.12,1).translate(0,.95,2.56),t,i,e,.4)),this.w.addCollider({box:!0,x:t,z:e,hw:3.05,hd:2.55,rot:.4,top:i+4.6,bottom:i-1}),this.add("wood",zt(new Vt(.2,.2,2,6).rotateZ(Math.PI/2),t+4,i+.3,e+1));let n=new nt(new Vt(.6,.6,.15,16),this.mats.cloth);n.rotation.x=Math.PI/2,n.position.set(t-5,i+1.5,e+3),this.scene.add(n),this.hut={x:t,z:e,y:i}}buildCamp(t,e){let i=Gu(91);for(let a=0;a<4;a++){let o=a/4*Math.PI*2+.3,l=t+Math.cos(o)*12,c=e+Math.sin(o)*12,h=this.ground(l,c);this.add("fur",zt(new Ge(3,4,7,1,!0),l,h+2,c,o)),this.add("wood",zt(new Vt(.08,.08,5,5),l,h+2.5,c)),this.w.addCollider({x:l,z:c,r:2.6,top:h+2.5})}for(let a=0;a<46;a++){let o=a/46*Math.PI*2;if(Math.abs(Math.sin(o-.8))<.12)continue;let l=t+Math.cos(o)*24,c=e+Math.sin(o)*24,h=this.ground(l,c),f=new Vt(0,.22,3.4+i(),6);f.translate(0,1.6,0),this.add("wood",zt(f,l,h,c,0,1,1,1)),this.w.addCollider({x:l,z:c,r:.45,top:h+3.3})}let n=this.ground(t+6,e-6);for(let a of[-1,1])for(let o of[-1,1])this.add("wood",zt(ye(.25,6,.25,1),t+6+a,n+3,e-6+o));this.add("planks",zt(ye(2.8,.25,2.8,1),t+6,n+6,e-6)),this.w.addCollider({box:!0,x:t+6,z:e-6,hw:1.4,hd:1.4,top:n+6.1,bottom:n+5.6});let r=this.ground(t,e);for(let a=0;a<6;a++)this.add("wood",zt(new Vt(.1,.1,1.4,5).rotateZ(1.2).rotateY(a),t,r+.3,e));this.campfire={x:t,y:r+.4,z:e},this.camp={x:t,z:e,y:r}}buildRuins(){let t=Gu(55),e=(n,r,a,o)=>{let l=this.ground(n,r)-.4;this.add("mossrock",zt(ye(1.4,.6,1.4),n,l+.3,r)),this.add("brick",zt(new Vt(.55,.6,a,10),n,l+.6+a/2,r)),o||this.add("mossrock",zt(ye(1.5,.5,1.5),n,l+.85+a,r)),this.w.addCollider({x:n,z:r,r:.75,top:l+a+1})};for(let n=0;n<26;n++){let r=t()*Math.PI*2,a=30+t()*110,o=Math.cos(r)*a,l=-420+Math.sin(r)*a*.7;this.w.slopeAt(o,l)>.6||e(o,l,3+t()*6,t()<.5)}for(let[n,r]of[[30,-380],[10,-440]]){let a=this.ground(n,r);for(let o of[-1,1])e(n+o*4,r,7,!1);this.add("brick",zt(ye(10,1.2,1.6),n,a+8.3,r))}let i=this.ground(0,-500);this.add("stone",zt(new Vt(42,43,1.2,48),0,i-.3,-500));for(let n=0;n<14;n++){let r=n/14*Math.PI*2;e(Math.cos(r)*40,-500+Math.sin(r)*40,8+n%3*3,n%4===1)}this.w.addCollider({x:0,z:-500,r:43,top:i+.3,bottom:i-3}),this.arena={x:0,z:-500,y:i+.3}}buildBridges(){for(let t of this.w.meta.roads)for(let e=0;e<t.length-1;e++){let[i,n]=t[e],[r,a]=t[e+1],o=Math.hypot(r-i,a-n),l=-1,c=-1;for(let g=0;g<=o;g+=1){let v=g/o,b=i+(r-i)*v,y=n+(a-n)*v;this.w.heightAt(b,y)<.8&&(l<0&&(l=g),c=g)}if(l<0||c-l>40)continue;let h=Math.max(0,l-3),f=Math.min(o,c+3),d=i+(r-i)*(h+f)/2/o,u=n+(a-n)*(h+f)/2/o,p=f-h,x=Math.atan2(r-i,a-n),m=Math.max(this.w.heightAt(i+(r-i)*h/o,n+(a-n)*h/o),this.w.heightAt(i+(r-i)*f/o,n+(a-n)*f/o),1.2)+.3;this.add("planks",zt(ye(3.2,.3,p),d,m,u,x));for(let g of[-1,1]){this.add("wood",zt(ye(.15,.9,p,1).translate(g*1.55,.6,0),d,m,u,x));for(let v=0;v<=p;v+=3)this.add("wood",zt(ye(.25,2.4,.25,1).translate(g*1.55,-.6,-p/2+v),d,m,u,x))}this.w.addCollider({box:!0,x:d,z:u,hw:1.6,hd:p/2,rot:x,top:m+.15,bottom:m-.5,noCam:!0,climbable:!1})}}update(t,e,i){for(let n of this.animated)n(t,e);for(let n of this.lamps)n.material.color.setHex(i?16767120:10127984)}};function Xp(){let s=new pe,t=ht({color:15262960,shadowTint:11053264}),e=new nt(new Vt(1.4,1.7,.6,8),t);e.position.y=.3,s.add(e);let i=new nt(new Vt(.35,.5,3.2,8),t);i.position.y=2.1,s.add(i);let n=new nt(new Ee(.75,.08,6,24),ht({color:15778906}));n.position.y=4.4,s.add(n);let r=new nt(new Ze(.45),new se({color:9082536}));r.position.y=4.4,s.add(r);for(let a of[e,i,n])a.castShadow=!0,Ae(a,4868714,.01);return s.userData={gem:r,ring:n,set(a){r.material.color.setHex(a?8382719:9082536)}},s}function Yp(){let s=new pe,t=ht({color:14213328,shadowTint:10531016}),e=new nt(new Vt(4,4.4,.8,6),t);e.position.y=.4,s.add(e);for(let r=0;r<3;r++){let a=r/3*Math.PI*2,o=new nt(new ze(.7,4.2,.7),t);o.position.set(Math.cos(a)*3,2.9,Math.sin(a)*3),o.rotation.y=-a,s.add(o);let l=new nt(new Ge(.6,.9,4),ht({color:5949608}));l.position.set(Math.cos(a)*3,5.4,Math.sin(a)*3),s.add(l)}let i=new nt(new Qi(.9,1),new se({color:6978176}));i.position.y=3.2,s.add(i);let n=new nt(new Ee(1.5,.05,6,32),new se({color:10481888,transparent:!0,opacity:0}));return n.position.y=3.2,s.add(n),qu(s).forEach(r=>{r!==i&&r!==n&&(r.castShadow=!0,Ae(r,3820106,.01))}),s.userData={core:i,halo:n,set(r){i.material.color.setHex(r?9437168:6978176),n.material.opacity=r?.8:0}},s}function $p(s){let t=new pe,e=ht({color:s?9067066:10121288}),i=ht({color:s?16306288:13154464}),n=new nt(new ze(1.1,.6,.7),e);n.position.y=.3,t.add(n);let r=new pe;r.position.set(0,.6,-.35),t.add(r);let a=new nt(new Vt(.35,.35,1.1,12,1,!1,0,Math.PI),e);a.rotation.z=Math.PI/2,a.position.set(0,0,.35),r.add(a);for(let c of[-.4,.4]){let h=new nt(new ze(.1,.65,.74),i);h.position.set(c,.3,0),t.add(h)}let o=new nt(new ze(.18,.2,.06),i);o.position.set(0,.55,.37),t.add(o),qu(t).forEach(c=>{c.castShadow=!0,Ae(c,3810320,.008)});let l=new Fn(new vn({map:Wu,color:s?16767088:16773312,transparent:!0,opacity:.3,blending:ii,depthWrite:!1}));return l.scale.set(1.6,1.6,1),l.position.y=.6,t.add(l),t.userData={lidPivot:r,glow:l},t}function Xu(){let s=new pe,t=new nt(new Ze(.32),new se({color:10485744}));t.scale.set(.8,1.3,.8),s.add(t);let e=new Fn(new vn({map:Wu,color:7336144,transparent:!0,opacity:.55,blending:ii,depthWrite:!1}));return e.scale.set(1.6,1.6,1),s.add(e),s.userData={c:t},s}var ws={wind:'<svg viewBox="0 0 24 24"><path d="M3 9h11a3 3 0 1 0-3-3M3 13h15a3 3 0 1 1-3 3M5 17h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',fire:'<svg viewBox="0 0 24 24"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-4 0-6 1-9z" fill="currentColor"/></svg>',water:'<svg viewBox="0 0 24 24"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" fill="currentColor"/></svg>',thunder:'<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/></svg>',ice:'<svg viewBox="0 0 24 24"><path d="M12 2v20M3 7l18 10M21 7 3 17" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>',phys:'<svg viewBox="0 0 24 24"><path d="M5 19 19 5M14 5h5v5" stroke="currentColor" stroke-width="2.2" fill="none"/></svg>'},Es={attack:'<svg viewBox="0 0 24 24"><path d="M4 20 15 9M14 4l6 6-3 1-4-4zM6 14l4 4-3 2-3-3z" fill="currentColor"/></svg>',jump:'<svg viewBox="0 0 24 24"><path d="M12 4 5 12h4v8h6v-8h4z" fill="currentColor"/></svg>',dash:'<svg viewBox="0 0 24 24"><path d="M4 8h9M2 12h11M4 16h9M14 6l7 6-7 6z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/></svg>',map:'<svg viewBox="0 0 24 24"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" fill="none" stroke="currentColor" stroke-width="2"/></svg>',menu:'<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',quest:'<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z M9 9h6M9 13h6M9 17h4" fill="none" stroke="currentColor" stroke-width="2"/></svg>',hand:'<svg viewBox="0 0 24 24"><path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5.5a1.5 1.5 0 0 1 3 0V14c0 4-3 7-6 7s-5-2-6-4l-2-4a1.5 1.5 0 0 1 2.6-1.4L8 14" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',chest:'<svg viewBox="0 0 24 24"><path d="M3 10h18v10H3zM3 10a9 5 0 0 1 18 0M10 12h4v3h-4z" fill="currentColor"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" fill="currentColor"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8M18.5 5.5a9 9 0 0 1 0 13" stroke="currentColor" stroke-width="2" fill="none"/></svg>'};var le=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Ts=new R,Wc=class{constructor(t,e){this.root=t,this.g=e,t.innerHTML="",this.el=le("div","hud"),t.appendChild(this.el);let i=e.input.touch;this.el.classList.toggle("touch",i),this.mini=le("div","mini"),this.miniCv=document.createElement("canvas"),this.miniCv.width=this.miniCv.height=200,this.mini.appendChild(this.miniCv),this.mini.appendChild(le("div","mini-ring")),this.mini.appendChild(le("div","mini-n","N")),this.mini.appendChild(le("div","mini-me")),this.el.appendChild(this.mini),this.mini.addEventListener("click",()=>e.openMap()),this.quest=le("div","quest",'<div class="qt"></div><div class="qo"></div><div class="qd"></div>'),this.el.appendChild(this.quest),this.quest.addEventListener("click",()=>e.openQuestLog()),this.topbtn=le("div","topbtn");for(let[n,r,a]of[["map","\u5730\u56F3 (M)",()=>e.openMap()],["quest","\u4F9D\u983C (J)",()=>e.openQuestLog()],["menu","\u30E1\u30CB\u30E5\u30FC (Esc)",()=>e.openMenu()]]){let o=le("button","tb",Es[n]);o.title=r,o.addEventListener("click",a),this.topbtn.appendChild(o)}this.el.appendChild(this.topbtn),this.partyEl=le("div","party"),this.el.appendChild(this.partyEl),this.slots=[],this.hp=le("div","hpbox",'<div class="lv"></div><div class="bar"><i class="fill"></i><i class="heal"></i></div><div class="num"></div>'),this.el.appendChild(this.hp),this.skills=le("div","skills"),this.skillE=le("button","sk e",'<div class="ic"></div><svg class="cd" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18"/></svg><span class="t"></span><b>E</b>'),this.skillQ=le("button","sk q",'<div class="ic"></div><svg class="en" viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="18"/><circle class="fg" cx="20" cy="20" r="18"/></svg><b>Q</b>'),this.skills.append(this.skillQ,this.skillE),this.el.appendChild(this.skills),this.stam=le("div","stam",'<svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="15"/><circle class="fg" cx="20" cy="20" r="15"/></svg>'),this.el.appendChild(this.stam),this.ebars=[],this.ebarLayer=le("div","ebars"),this.el.appendChild(this.ebarLayer),this.nums=[],this.numLayer=le("div","nums"),this.el.appendChild(this.numLayer),this.toast=le("div","toasts"),this.el.appendChild(this.toast),this.banner=le("div","banner"),this.el.appendChild(this.banner),this.prompt=le("div","prompt"),this.el.appendChild(this.prompt),this.dialog=le("div","dialog",'<div class="dn"></div><div class="dt"></div><div class="dc"></div><div class="dnext">\u25BC</div>'),this.el.appendChild(this.dialog),this.dialog.addEventListener("click",()=>e.dialogNext()),this.boss=le("div","bossbar",'<div class="bn"></div><div class="bb"><i></i></div>'),this.el.appendChild(this.boss),this.hurt=le("div","hurt"),this.el.appendChild(this.hurt),this.burstFx=le("div","burstfx"),this.el.appendChild(this.burstFx),i?this.buildTouch():this.skillE.addEventListener("mousedown",n=>n.stopPropagation()),this.lockHint=le("div","lockhint","\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u64CD\u4F5C\uFF08Esc\u30AD\u30FC\u3067\u30AB\u30FC\u30BD\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\uFF09 \uFF0F WASD \u79FB\u52D5\u30FBShift \u30C0\u30C3\u30B7\u30E5\u30FBSpace \u30B8\u30E3\u30F3\u30D7\uFF08\u9577\u62BC\u3057\u3067\u9AD8\u304F\u30FB\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u5EA6\uFF09\u30FB\u5DE6\u30AF\u30EA\u30C3\u30AF \u653B\u6483\u30FBE \u30B9\u30AD\u30EB\u30FBQ \u7206\u767A\u30FB1\u301C4 \u4EA4\u4EE3\u30FBF \u8ABF\u3079\u308B"),i||this.el.appendChild(this.lockHint),i||this.el.appendChild(le("div","eschint","Esc\u30AD\u30FC\uFF1A\u30AB\u30FC\u30BD\u30EB\u8868\u793A\u30FB\u30E1\u30CB\u30E5\u30FC"))}buildTouch(){let t=this.g,e=t.input,i=le("div","tpad",'<div class="knob"></div>');this.el.appendChild(i);let n=i.querySelector(".knob"),r=null,a=0,o=0,l=52;i.addEventListener("pointerdown",u=>{if(r!==null)return;r=u.pointerId;let p=i.getBoundingClientRect();a=p.left+p.width/2,o=p.top+p.height/2,i.setPointerCapture(u.pointerId),c(u),u.preventDefault(),u.stopPropagation()});let c=u=>{if(u.pointerId!==r)return;let p=u.clientX-a,x=u.clientY-o,m=Math.hypot(p,x);m>l&&(p*=l/m,x*=l/m),n.style.transform=`translate(${p}px,${x}px)`,e.stick.x=p/l,e.stick.y=-x/l},h=u=>{u.pointerId===r&&(r=null,n.style.transform="",e.stick.x=e.stick.y=0)};i.addEventListener("pointermove",c),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),i.addEventListener("lostpointercapture",h);let f=le("div","tbtns"),d=(u,p,x)=>{let m=le("div","tbn "+p,x),g=null;m.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),g=b.pointerId,m.setPointerCapture(b.pointerId),e.setVirtual(u,!0),m.classList.add("on")});let v=b=>{b.pointerId===g&&(g=null,e.setVirtual(u,!1),m.classList.remove("on"))};return m.addEventListener("pointerup",v),m.addEventListener("pointercancel",v),m.addEventListener("lostpointercapture",v),f.appendChild(m),m};d("attack","atk",Es.attack),d("jump","jmp",Es.jump),d("dash","dsh",Es.dash),this.el.appendChild(f);for(let[u,p]of[[this.skillE,"skill"],[this.skillQ,"burst"]]){let x=null;u.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),x=g.pointerId,u.setPointerCapture(g.pointerId),e.setVirtual(p,!0)});let m=g=>{g.pointerId===x&&(x=null,e.setVirtual(p,!1))};u.addEventListener("pointerup",m),u.addEventListener("pointercancel",m),u.addEventListener("lostpointercapture",m)}this.interactBtn=le("div","tbn int",Es.hand),this.interactBtn.addEventListener("pointerdown",u=>{u.preventDefault(),u.stopPropagation(),e.setVirtual("interact",!0),setTimeout(()=>e.setVirtual("interact",!1),120)}),this.el.appendChild(this.interactBtn)}buildParty(t){this.partyEl.innerHTML="",this.slots=[],this.g.party.forEach((e,i)=>{let n=le("div","pm",`<div class="pn"><span class="nm">${e.name}</span><div class="pb"><i></i></div></div><div class="pf" style="--ec:${an[e.el]}"><img src="${t[e.id]||""}"><span class="pe">${ws[e.el]}</span></div><div class="pk">${i+1}</div>`);n.addEventListener("pointerdown",r=>{r.stopPropagation(),this.g.switchTo(i)}),this.partyEl.appendChild(n),this.slots.push(n)})}project(t){return Ts.copy(t).project(this.g.R.camera),Ts.z>1||Ts.z<-1?null:{x:(Ts.x*.5+.5)*innerWidth,y:(-Ts.y*.5+.5)*innerHeight}}damage(t,e,i,n,r){let a=this.project(t);if(!a)return;let o=le("div","dmg"+(n?" crit":"")+(r?" small":""),String(e));for(o.style.color=an[i||"phys"]||"#fff",o.style.left=a.x+(Math.random()-.5)*40+"px",o.style.top=a.y+(Math.random()-.5)*20+"px",this.numLayer.appendChild(o),setTimeout(()=>o.remove(),900);this.numLayer.children.length>40;)this.numLayer.firstChild.remove()}reaction(t,e,i){let n=this.project(t);if(!n)return;let r={vaporize:"#ffb070",melt:"#ffc070",overload:"#ff7ab0",electro:"#d0a0ff",superconduct:"#b8b8ff",freeze:"#a8eeff",swirl:"#80f0d8"}[i]||"#fff",a=le("div","react",e);a.style.color=r,a.style.left=n.x+"px",a.style.top=n.y-30+"px",this.numLayer.appendChild(a),setTimeout(()=>a.remove(),1100)}notify(t,e){let i=le("div","toast",t);for(e&&an[e]&&(i.style.borderColor=an[e]),this.toast.appendChild(i),setTimeout(()=>i.classList.add("out"),2600),setTimeout(()=>i.remove(),3100);this.toast.children.length>4;)this.toast.firstChild.remove()}showBanner(t,e,i=""){this.banner.className="banner show "+i,this.banner.innerHTML=`<div class="b1">${t}</div>${e?`<div class="b2">${e}</div>`:""}`,clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>this.banner.classList.remove("show"),3200)}update(t){let e=this.g,i=e.mover,n=e.activeMember;this.hp.querySelector(".lv").textContent="Lv."+n.lv,this.hp.querySelector(".fill").style.width=n.hp/n.maxHp*100+"%",this.hp.querySelector(".num").textContent=`${Math.ceil(n.hp)} / ${n.maxHp}`,this.hp.classList.toggle("low",n.hp/n.maxHp<.3);let r=an[n.el];this.skills.style.setProperty("--ec",r),this.skillE.querySelector(".ic").innerHTML=ws[n.el],this.skillQ.querySelector(".ic").innerHTML=ws[n.el];let a=n.lastSkillCD||n.def0.skillCD,o=n.skillT;this.skillE.classList.toggle("cool",o>0),this.skillE.querySelector(".t").textContent=o>0?o.toFixed(1):"",this.skillE.querySelector(".cd circle").style.strokeDashoffset=String(113*(1-o/a));let l=Math.min(1,n.energy/n.def0.energy);this.skillQ.querySelector(".fg").style.strokeDashoffset=String(113*(1-l)),this.skillQ.classList.toggle("ready",l>=1),e.party.forEach((m,g)=>{let v=this.slots[g];v&&(v.classList.toggle("active",m===n),v.classList.toggle("down",!m.alive),v.querySelector(".pb i").style.width=m.hp/m.maxHp*100+"%",v.style.display=e.unlocked.includes(m.id)?"":"none")});let c=i.stam/i.stamMax,h=c<.999||i.mode==="climb"||i.mode==="glide"||i.mode==="swim";if(this.stamAlpha=(this.stamAlpha||0)+((h?1:0)-(this.stamAlpha||0))*Math.min(1,t*(h?10:2)),this.stamAlpha>.01){let m=this.project(Ts.set(i.p.x,i.p.y+1.2,i.p.z));m&&(this.stam.style.transform=`translate(${m.x+46}px, ${m.y-30}px)`),this.stam.querySelector(".fg").style.strokeDashoffset=String(94.2*(1-c)),this.stam.classList.toggle("low",c<.25)}this.stam.style.opacity=this.stamAlpha;let f=0,d=e.R.camera.position;for(let m of e.enemies){if(m.dead||m.type==="boss")continue;let g=Math.hypot(m.pos.x-d.x,m.pos.z-d.z);if(g>32||m.state==="idle"&&m.hp>=m.maxHp&&g>18)continue;let v=this.project(Ts.set(m.pos.x,m.pos.y+m.h+.45,m.pos.z));if(!v)continue;let b=this.ebars[f];b||(b=le("div","ebar",'<div class="el"></div><div class="lvn"></div><div class="eb"><i></i></div>'),this.ebarLayer.appendChild(b),this.ebars.push(b)),b.style.display="",b.style.transform=`translate(${v.x}px, ${v.y}px)`,b.querySelector(".eb i").style.width=m.hp/m.maxHp*100+"%",b.querySelector(".lvn").textContent="Lv."+m.lv;let y=m.aura?m.aura.el:null,M=b.querySelector(".el");if(M.dataset.a!==String(y)&&(M.dataset.a=String(y),M.innerHTML=y?ws[y]:"",M.style.color=y?an[y]:""),b.classList.toggle("frozen",m.frozen>0),f++,f>=12)break}for(let m=f;m<this.ebars.length;m++)this.ebars[m].style.display="none";let u=e.enemies.find(m=>m.type==="boss"&&!m.dead&&m.state!=="idle");this.boss.classList.toggle("show",!!u),u&&(this.boss.querySelector(".bn").textContent=`${u.name}  Lv.${u.lv}`,this.boss.querySelector(".bb i").style.width=u.hp/u.maxHp*100+"%"),this.hurtA=Math.max(0,(this.hurtA||0)-t*2),this.hurt.style.opacity=this.hurtA+(n.hp/n.maxHp<.25?.25+Math.sin(e.time*5)*.1:0);let p=e.nearInteract;p?(this.prompt.innerHTML=`<span class="key">${e.input.touch?Es.hand:"F"}</span>${p.label}`,this.prompt.classList.add("show")):this.prompt.classList.remove("show"),this.interactBtn&&this.interactBtn.classList.toggle("show",!!p);let x=e.quests.current();if(this.quest.style.display=x?"":"none",x){this.quest.querySelector(".qt").textContent=x.title,this.quest.querySelector(".qo").textContent=x.obj;let m=x.target;this.quest.querySelector(".qd").textContent=m?`${Math.round(Math.hypot(m.x-i.p.x,m.z-i.p.z))} m`:""}this.drawMini(),this.lockHint.style&&(this.lockHint.style.display=e.input.locked||e.time>40||e.dialogOpen?"none":"")}drawMini(){let t=this.g,e=this.miniCv,i=e.getContext("2d"),n=t.mover,r=e.width,a=t.tex.map.image,o=t.world.size,l=a.width/o,c=1.25;i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#dfe8ee",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(t.camRig.yaw-Math.PI),i.scale(c,c),i.drawImage(a,-(n.p.x+o/2)*l,-(n.p.z+o/2)*l);for(let u of t.mapMarkers()){let p=(u.x-n.p.x)*l,x=(u.z-n.p.z)*l;if(Math.hypot(p,x)*c>r*.55&&!u.edge)continue;let m=p,g=x,v=(r/2-12)/c,b=Math.hypot(m,g);b>v&&(m*=v/b,g*=v/b),i.save(),i.translate(m,g),i.rotate(-(t.camRig.yaw-Math.PI)),i.scale(1/c,1/c),Yu(i,u.kind,u.done),i.restore()}i.restore();let h=this.mini.querySelector(".mini-n"),f=t.camRig.yaw-Math.PI,d=this.mini.clientWidth/2+3;h.style.transform=`translate(${Math.sin(-f)*-d}px, ${-Math.cos(-f)*d}px)`,this.mini.querySelector(".mini-me").style.transform=`rotate(${-(n.face-t.camRig.yaw+Math.PI)*180/Math.PI+180}deg)`}say(t,e,i){this.dialog.classList.add("show"),this.dialog.querySelector(".dn").textContent=t||"",this.dialog.querySelector(".dt").textContent=e;let n=this.dialog.querySelector(".dc");if(n.innerHTML="",i&&n.appendChild(le("div","chint",this.g.input.touch?"\u9078\u3093\u3067\u30BF\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044":"\u30AF\u30EA\u30C3\u30AF\u3067\u9078\u629E\uFF08\u6570\u5B57\u30AD\u30FC1\u301C4\u3067\u3082\u9078\u3079\u307E\u3059\uFF09")),i)for(let[r,a]of i.entries()){let o=le("button","ch",(this.g.input.touch?"":`${r+1}. `)+a.text);o.addEventListener("click",l=>{l.stopPropagation(),this.g.dialogChoose(r)}),n.appendChild(o)}this.dialog.classList.toggle("choosing",!!i)}closeDialog(){this.dialog.classList.remove("show")}autoSaved(){let t=this.autoTag||(this.autoTag=le("div","autosave","\u81EA\u52D5\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F"));t.parentNode||this.el.appendChild(t),t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}hurtFlash(){this.hurtA=.55}burstFlash(t){this.burstFx.style.setProperty("--ec",an[t]),this.burstFx.classList.remove("go"),this.burstFx.offsetWidth,this.burstFx.classList.add("go")}};function Yu(s,t,e){s.lineWidth=2,t==="quest"?(s.fillStyle="#ffd24a",s.strokeStyle="#4a3200",s.beginPath(),s.moveTo(0,-11),s.lineTo(7,0),s.lineTo(0,11),s.lineTo(-7,0),s.closePath(),s.fill(),s.stroke()):t==="waypoint"?(s.fillStyle=e?"#7fe3ff":"#9aa6b0",s.strokeStyle="#1a2a3a",s.beginPath(),s.moveTo(0,-9),s.lineTo(6,6),s.lineTo(-6,6),s.closePath(),s.fill(),s.stroke()):t==="shrine"?(s.fillStyle=e?"#9affe0":"#c0c8d0",s.strokeStyle="#1a3a3a",s.beginPath(),s.arc(0,0,7,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle="#1a3a3a",s.fillRect(-1.5,-4,3,8)):t==="chest"?(s.fillStyle="#ffcf6a",s.strokeStyle="#4a3010",s.fillRect(-5,-3,10,7),s.strokeRect(-5,-3,10,7)):t==="enemy"?(s.fillStyle="#ff5a4a",s.beginPath(),s.arc(0,0,3,0,Math.PI*2),s.fill()):t==="town"?(s.fillStyle="#ffe8c0",s.strokeStyle="#5a3a1a",s.beginPath(),s.moveTo(-6,5),s.lineTo(-6,-2),s.lineTo(0,-8),s.lineTo(6,-2),s.lineTo(6,5),s.closePath(),s.fill(),s.stroke()):t==="boss"&&(s.fillStyle="#c070ff",s.strokeStyle="#2a0a3a",s.beginPath(),s.arc(0,0,8,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle="#fff",s.fillRect(-1.5,-5,3,6),s.fillRect(-1.5,3,3,2))}var $u=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},qc=class{constructor(t){this.g=t,this.open=null,this.layer=$u("div","scr"),document.getElementById("ui").appendChild(this.layer),this.fadeEl=$u("div","fade"),document.getElementById("ui").appendChild(this.fadeEl),addEventListener("keydown",e=>{this.open&&(this.justOpened&&performance.now()-this.justOpened<300||(e.code==="Escape"||e.code==="KeyM"&&this.open==="map"||e.code==="KeyJ"&&this.open==="quest")&&(e.preventDefault(),this.close()))})}show(t,e){this.open=t,this.justOpened=performance.now(),this.g.input.releaseAll(),document.pointerLockElement&&(this.g.selfUnlock=!0,document.exitPointerLock()),this.layer.className="scr show "+t,this.layer.innerHTML=`<div class="sbox">${e}</div><button class="sclose">\u2715</button>`,this.layer.querySelector(".sclose").addEventListener("click",()=>this.close()),this.g.audio?.sfx("ui")}close(){this.open=null,this.layer.className="scr",this.layer.innerHTML="",this.g.audio?.sfx("ui"),this.g.save()}update(){this.open==="map"&&this.drawMap()}map(){this.show("map",'<div class="mtitle">\u30EA\u30E5\u30DF\u30A8\u30E9\u5168\u56F3</div><div class="mwrap"><canvas class="mcv" width="1024" height="1024"></canvas></div><div class="mhelp">\u5149\u308B\u30EF\u30FC\u30D7\u5730\u70B9\u3092\u62BC\u3059\u3068\u79FB\u52D5\u3067\u304D\u307E\u3059</div>');let t=this.layer.querySelector(".mcv");this.mapCv=t,t.addEventListener("click",e=>{let i=t.getBoundingClientRect(),n=this.g.world.size,r=(e.clientX-i.left)/i.width*n-n/2,a=(e.clientY-i.top)/i.height*n-n/2,o=null,l=40;for(let c of this.g.wpObjs){if(!this.g.waypointsOn.has(c.id))continue;let h=Math.hypot(c.x-r,c.z-a);h<l&&(l=h,o=c)}o&&(this.close(),this.g.teleport(o))}),this.drawMap()}drawMap(){let t=this.mapCv;if(!t)return;let e=t.getContext("2d"),i=this.g,n=i.world.size,r=1024/n;e.drawImage(i.tex.map.image,0,0,1024,1024);let a=(c,h)=>[(c+n/2)*r,(h+n/2)*r];e.font='bold 20px "Zen Maru Gothic", sans-serif',e.textAlign="center";for(let[c,h,f]of[["\u306F\u3058\u307E\u308A\u306E\u8349\u539F",60,470],["\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3",330,300],["\u93E1\u306E\u6E56",0,10],["\u3055\u3055\u3084\u304D\u306E\u68EE",-390,200],["\u7363\u306E\u91CE\u55B6\u5730",-380,-340],["\u5929\u98A8\u306E\u65AD\u5D16",450,-110],["\u9727\u306E\u907A\u8DE1",0,-430]]){let[d,u]=a(h,f);e.lineWidth=5,e.strokeStyle="rgba(40,30,20,.65)",e.strokeText(c,d,u),e.fillStyle="#fff6dc",e.fillText(c,d,u)}for(let c of i.mapMarkers()){let[h,f]=a(c.x,c.z);e.save(),e.translate(h,f),e.scale(1.7,1.7),Yu(e,c.kind,c.done),e.restore()}let[o,l]=a(i.mover.p.x,i.mover.p.z);e.save(),e.translate(o,l),e.rotate(Math.PI-i.mover.face),e.fillStyle="#ffe070",e.strokeStyle="#3a2a00",e.lineWidth=2,e.beginPath(),e.moveTo(0,-14),e.lineTo(9,10),e.lineTo(0,5),e.lineTo(-9,10),e.closePath(),e.fill(),e.stroke(),e.restore()}questLog(){let t=this.g,e=t.quests,i=e.current(),n='<div class="mtitle">\u4F9D\u983C</div><div class="ql">',r=e.cur;n+=`<div class="qi main ${e.track==="main"?"on":""}" data-t="main"><div class="qh">\u672C\u7DE8\u3000${r?.title||"\u5B8C\u7D50"}</div><div class="qb">${r?.obj||"\u4E03\u5F69\u306E\u98A8\u304C\u623B\u3063\u305F\u3002\u5927\u9678\u3092\u81EA\u7531\u306B\u65C5\u3057\u3088\u3046\u3002"}</div></div>`;for(let[a,o]of Object.entries(e.side)){let l=e.sideInfo(a);n+=`<div class="qi ${o==="done"?"done":""} ${e.track===a?"on":""}" data-t="${a}"><div class="qh">\u4F9D\u983C\u3000${Ss[a].title}${o==="done"?"\uFF08\u9054\u6210\uFF09":""}</div><div class="qb">${o==="done"?"":l.obj}</div></div>`}n+=`</div><div class="mhelp">\u62BC\u3059\u3068\u305D\u306E\u4F9D\u983C\u3092\u8FFD\u8DE1\u3057\u307E\u3059\u3000\uFF0F\u3000\u98A8\u306E\u7D50\u6676 ${t.gotCrystals.size}/40\u3000\u5B9D\u7BB1 ${t.opened.size}/${t.chestObjs.length}</div>`,this.show("quest",n),this.layer.querySelectorAll(".qi").forEach(a=>a.addEventListener("click",()=>{let o=a.dataset.t;(o==="main"||e.side[o]!=="done")&&(e.track=o,this.questLog())}))}menu(t="party"){let e=this.g,i="";if(t==="party")i='<div class="pgrid">'+e.party.filter(r=>e.unlocked.includes(r.id)).map(r=>`
        <div class="pcard" style="--ec:${an[r.el]}"><img src="${e.portraits[r.id]}"><div class="pinfo">
          <div class="pnm">${r.name} <span class="pel">${ws[r.el]}${Fp[r.el]}</span></div><div class="ptl">${Ja[r.id].title}</div>
          <div>Lv.${r.lv}\u3000\u7D4C\u9A13 ${r.exp}/${ja(r.lv)}</div><div>HP ${Math.ceil(r.hp)}/${r.maxHp}\u3000\u653B\u6483 ${r.atk}\u3000\u9632\u5FA1 ${r.def}</div>
          <div class="pkit">${g1(r.id)}</div></div></div>`).join("")+"</div>";else if(t==="items"){let r=Qa;i=`<div class="mora">\u6240\u6301\u91D1\u3000${e.mora} \u30EB\u30DF</div><div class="items">`+Object.entries(r).map(([a,o])=>`<div class="item"><div class="inm">${o.name} \xD7 ${e.items[a]||0}</div><div class="ids">${o.desc}</div><button class="use" data-k="${a}" ${e.items[a]?"":"disabled"}>\u4F7F\u3046</button></div>`).join("")+"</div>"}else if(t==="save"){let r=e.constructor;i='<div class="slots">'+[1,2,3].map(a=>{let o=r.slotData(a);return`<div class="slot"><div class="si">${o&&o.meta?`<b>\u30B9\u30ED\u30C3\u30C8${a}</b><br>${new Date(o.meta.at).toLocaleString("ja-JP")}\u3000${o.meta.place}<br>${o.meta.step}\u3000Lv.${o.meta.lv}\u3000\u98A8\u306E\u7D50\u6676 ${o.meta.crystals}/40`:`<b>\u30B9\u30ED\u30C3\u30C8${a}</b><br>\uFF08\u7A7A\u304D\uFF09`}</div><button class="sv" data-n="${a}">\u30BB\u30FC\u30D6</button><button class="ld" data-n="${a}" ${o?"":"disabled"}>\u30ED\u30FC\u30C9</button></div>`}).join("")+'</div><div class="mhelp">30\u79D2\u3054\u3068\u3068\u5927\u4E8B\u306A\u5834\u9762\u3067\u81EA\u52D5\u30BB\u30FC\u30D6\u3082\u3057\u3066\u3044\u307E\u3059\uFF08\u30BF\u30A4\u30C8\u30EB\u306E\u300C\u3064\u3065\u304D\u304B\u3089\u300D\uFF09\u3002</div>'}else if(t==="settings"){let r=e.settings;i=`<div class="sets">
        <label>\u753B\u8CEA <select data-s="quality"><option value="high">\u9AD8</option><option value="mid">\u4E2D</option><option value="low">\u4F4E</option></select><span class="note">\uFF08\u518D\u8AAD\u307F\u8FBC\u307F\u3067\u53CD\u6620\uFF09</span></label>
        <label>\u97F3\u697D <input type="range" min="0" max="1" step="0.05" data-s="music"></label>
        <label>\u52B9\u679C\u97F3 <input type="range" min="0" max="1" step="0.05" data-s="sfx"></label>
        <label>\u74B0\u5883\u97F3 <input type="range" min="0" max="1" step="0.05" data-s="amb"></label>
        <label>\u8996\u70B9\u306E\u901F\u3055 <input type="range" min="0.3" max="2.5" step="0.1" data-s="sens"></label>
        <label>\u30AB\u30E1\u30E9\u306E\u81EA\u52D5\u8FFD\u5F93 <input type="checkbox" data-s="autoCam"></label>
        <button class="danger" data-act="reset">\u306F\u3058\u3081\u304B\u3089\u3084\u308A\u76F4\u3059</button>
      </div>`}this.show("menu",`<div class="tabs"><button data-tab="party">\u4EF2\u9593</button><button data-tab="items">\u6301\u3061\u7269</button><button data-tab="save">\u30BB\u30FC\u30D6\uFF0F\u30ED\u30FC\u30C9</button><button data-tab="settings">\u8A2D\u5B9A</button></div><div class="mbody">${i}</div><div class="mhelp">\u30B2\u30FC\u30E0\u306F\u4E00\u6642\u505C\u6B62\u4E2D\uFF08Esc\u30AD\u30FC\uFF0F\u2715\u3067\u9589\u3058\u308B\uFF09</div>`),this.layer.querySelectorAll("[data-tab]").forEach(r=>{r.classList.toggle("on",r.dataset.tab===t),r.addEventListener("click",()=>this.menu(r.dataset.tab))}),this.layer.querySelectorAll(".use").forEach(r=>r.addEventListener("click",()=>{e.useFood(r.dataset.k)&&this.menu("items")})),this.layer.querySelectorAll("[data-s]").forEach(r=>{let a=r.dataset.s,o=e.settings;r.type==="checkbox"?r.checked=!!o[a]:r.value=o[a],r.addEventListener("input",()=>{o[a]=r.type==="checkbox"?r.checked:r.tagName==="SELECT"?r.value:Number(r.value),e.applySettings()})}),this.layer.querySelectorAll(".slot .sv").forEach(r=>r.addEventListener("click",()=>{let a=+r.dataset.n;e.constructor.slotData(a)&&!confirm(`\u30B9\u30ED\u30C3\u30C8${a}\u306B\u4E0A\u66F8\u304D\u3057\u3066\u30BB\u30FC\u30D6\u3057\u307E\u3059\u304B\uFF1F`)||e.saveSlot(a)&&this.menu("save")})),this.layer.querySelectorAll(".slot .ld").forEach(r=>r.addEventListener("click",()=>{let a=+r.dataset.n;confirm(`\u30B9\u30ED\u30C3\u30C8${a}\u3092\u30ED\u30FC\u30C9\u3057\u307E\u3059\u304B\uFF1F\uFF08\u4ECA\u306E\u9032\u307F\u5177\u5408\u306F\u30BB\u30FC\u30D6\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u5931\u308F\u308C\u307E\u3059\uFF09`)&&(e.noSave=!0,this.fade(()=>e.constructor.loadSlotAndRestart(a)))}));let n=this.layer.querySelector("[data-act=reset]");n&&n.addEventListener("click",()=>{confirm("\u4FDD\u5B58\u30C7\u30FC\u30BF\u3092\u6D88\u3057\u3066\u3001\u306F\u3058\u3081\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F")&&(e.noSave=!0,e.constructor.clearSave(),location.reload())})}fade(t){this.fadeEl.classList.add("on"),setTimeout(()=>{t&&t(),setTimeout(()=>this.fadeEl.classList.remove("on"),350)},450)}credits(t){let e=$u("div","credits",`<div class="cin">
      <div class="ct">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="cs">\u2015\u4E03\u5F69\u306E\u98A8\u3068\u9727\u306E\u5DE8\u50CF\u2015</div>
      <p>\u4F01\u753B\u30FB\u4ED5\u69D8\u30FB\u30D7\u30ED\u30B0\u30E9\u30E0\u30FB\u753B\u50CF\u30FB\u4F5C\u66F2</p><b>Claude Code</b>
      <p>\u4F9D\u983C\u30FB\u76E3\u4FEE</p><b>\u690D\u7530\u7ADC\u4E5F</b>
      <p>\u4F7F\u7528\u30E9\u30A4\u30D6\u30E9\u30EA</p><b>three.js\uFF08MIT License\uFF09</b>
      <p>\u74B0\u5883\u306E\u7D20\u6750\u306E\u4E00\u90E8</p><b>\u5929\u8108\u306E\u65C5\u4EBA\uFF08Codex \u5236\u4F5C\uFF09\u3088\u308A\u6D41\u7528</b>
      <p>\u904A\u3093\u3067\u304F\u308C\u305F\u3042\u306A\u305F\u3078</p><b>\u3042\u308A\u304C\u3068\u3046\uFF01</b>
      <div class="cend">\u2015 \u4E03\u5F69\u306E\u98A8\u306F\u3001\u3075\u305F\u305F\u3073\u5927\u9678\u3092\u3081\u3050\u308B \u2015</div></div>`);document.getElementById("ui").appendChild(e),this.g.audio?.music("ending");let i=!1,n=()=>{i||(i=!0,e.classList.add("out"),setTimeout(()=>e.remove(),1200),this.g.audio?.music(null),t&&t())};e.addEventListener("click",n),setTimeout(n,32e3)}};function g1(s){return{sora:"\u901A\u5E38\uFF1A5\u6BB5\u306E\u5263\u6483\u3002E\uFF1A\u98A8\u306E\u6E26\u3067\u6575\u3092\u5438\u3044\u5BC4\u305B\u308B\uFF08\u9577\u62BC\u3057\u3067\u5927\u6E26\uFF09\u3002Q\uFF1A\u7ADC\u5DFB\u304C\u524D\u9032\u3057\u3001\u89E6\u308C\u305F\u5143\u7D20\u3092\u5438\u3044\u8FBC\u3080\u3002",akane:"\u901A\u5E38\uFF1A\u91CD\u30444\u6BB5\u306E\u5927\u5263\u3002E\uFF1A\u708E\u306E\u65AC\u308A\u4E0A\u3052\u30017\u79D2\u9593\u653B\u6483\u304C\u708E\u306B\u306A\u308B\u3002Q\uFF1A\u5927\u7206\u708E\u306E\u4E00\u9583\u3068\u71C3\u3048\u308B\u5927\u5730\u3002",mizuha:"\u901A\u5E38\uFF1A\u6C34\u306E\u73E0\u3092\u653E\u3064\uFF08\u6C34\u304C\u4ED8\u304F\uFF09\u3002E\uFF1A\u6C34\u306E\u6CE1\u3067\u4EF2\u9593\u3092\u56DE\u5FA9\u3057\u7D9A\u3051\u308B\u3002Q\uFF1A12\u79D2\u9593\u306E\u6C34\u306E\u7D50\u754C\u3067\u56DE\u5FA9\u3068\u6C34\u653B\u6483\u3002",raika:"\u901A\u5E38\uFF1A\u9023\u5C04\u306E\u77E2\u3002\u9577\u62BC\u3057\uFF1A\u96F7\u306E\u72D9\u3044\u6483\u3061\u3002E\uFF1A\u96F7\u306E\u9DF9\u304C3\u4F53\u3092\u5C04\u629C\u304F\u3002Q\uFF1A\u96F7\u306E\u96E8\u3002"}[s]}var Rr="lumiera.save.v1",Zn=["sora","akane","mizuha","raika"],Qa={dango:{name:"\u307F\u305F\u3089\u3057\u56E3\u5B50",heal:.3,price:60,desc:"HP\u309230%\u56DE\u5FA9"},pie:{name:"\u98A8\u8ECA\u30D1\u30A4",heal:.6,price:150,desc:"HP\u309260%\u56DE\u5FA9"},milk:{name:"\u8702\u871C\u30DF\u30EB\u30AF",heal:.5,revive:!0,price:200,desc:"\u5012\u308C\u305F\u4EF2\u9593\u3092\u8D77\u3053\u3057\u3066HP50%\u56DE\u5FA9"}};var on=class s{constructor(t){Object.assign(this,t),this.scene=this.R.scene,this.time=0,this.hour=9.5,this.daySpeed=24/1440,this.camRig=new Fc(this.R.camera,this.world),this.camRig.autoFollow=this.input.touch,this.focus=new R,this.paused=!1,this.hooks=[],this.enemies=[],this.groups={},this.flags={},this.mora=0,this.items={dango:2},this.unlocked=["sora"],this.opened=new Set,this.gotCrystals=new Set,this.waypointsOn=new Set,this.dialogOpen=!1,this.dlg=null,this.hitStopT=0,this.timeScale=1,this.switchCD=0,qp(this.tex.dot)}start(t){let e=this.world;this.fx=new Bc(this.scene,this.tex),this.props=new Vc(this.scene,e,this.tex,this),e.buildGrid();let i=e.meta.places.start;this.mover=new Nc(e,i.x,i.z),this.mover.face=Math.PI*.85,this.party=Zn.map(n=>new kc(n)),this.members={};for(let n of Zn){let r=Sn(n,this.tex);r.root.visible=!1,this.scene.add(r.root),this.members[n]={rig:r,anim:new rn(r)}}this.activeId="sora",this.popo=Ic(this.tex),this.scene.add(this.popo),this.popo.scale.setScalar(.8),this.popoPos=new R(this.mover.p.x,this.mover.p.y+1.8,this.mover.p.z),this.glider=x1(),this.scene.add(this.glider),this.battle=new Oc(this),this.quests=new Gc(this),this.hud=new Wc(document.getElementById("ui"),this),this.screens=new qc(this),this.hud.buildParty(this.makePortraits()),this.buildWorldObjects(),this.buildNPCs(),this.spawnWild(),t&&this.load(t),this.setActive(this.activeId,!0),this.camRig.yaw=this.mover.face+Math.PI,this.saveT=0,document.addEventListener("pointerlockchange",()=>{if(!(document.pointerLockElement||this.input.touch)){if(this.screens.open||this.selfUnlock||this.dlg&&this.dlg.choices){this.selfUnlock=!1;return}this.dialogOpen||this.openMenu()}})}get active(){return this.members[this.activeId]}get activeRig(){return this.members[this.activeId].rig}get activeMember(){return this.party.find(t=>t.id===this.activeId)}get canControl(){return!this.dialogOpen&&!this.paused&&!this.screens.open&&this.activeMember.alive}update(t){let e=this.input,i=e.update(t);if(this.screens.open&&this.screens.update(t),this.paused)return;let n=t;this.hitStopT>0&&(this.hitStopT-=t,n=t*.08),n*=this.timeScale,this.time+=n,this.hour=(this.hour+n*this.daySpeed)%24;let r=this.canControl;this.screens.open||this.camRig.input(e.look.dx,e.look.dy,i),!this.dialogOpen&&!this.screens.open&&(e.pressed.map?this.openMap():e.pressed.quest?this.openQuestLog():e.pressed.menu&&this.openMenu());let a=this.dialogOpen&&this.dlg&&this.dlg.choices&&this.dlg.i===this.dlg.lines.length-1;if(e.lockBlocked=a||!!this.screens.open,a){for(let m=0;m<4;m++)if(e.pressed["p"+(m+1)]){this.dialogChoose(m);break}}else this.dialogOpen&&(e.pressed.interact||e.pressed.jump||e.pressed.attack)&&this.dialogNext();if(this.switchCD-=n,r)for(let m=0;m<4;m++)e.pressed["p"+(m+1)]&&this.switchTo(m);let o=this.camRig.toWorld(r?e.move.x:0,r?e.move.y:0),l=this.mover;l.update(n,{mx:o.x,my:o.z,myRaw:r?e.move.y:0,mxRaw:r?e.move.x:0,jumpP:r&&e.pressed.jump&&!this.battle.busy,jumpH:r&&e.held.jump,dashP:r&&e.pressed.dash,dashH:r&&e.held.dash,walk:e.held.walk,attackMove:0,upDraft:this.upDraftAt(l.p)});for(let m of l.events)this.onMoveEvent(m);this.battle.update(n),this.enemies=this.enemies.filter(m=>{let g=m.update(n);return g||this.scene.remove(m.model),g});let h=this.active,f=h.rig.root;f.position.set(l.p.x,l.p.y,l.p.z),l.mode==="swim"&&(f.position.y=bs.waterLevel-1),f.rotation.y=Xc(f.rotation.y,l.face,1-Math.exp(-(this.battle.busy?30:18)*n));let d=this.activeMember;h.anim.update(n,{mode:d.alive?this.hurtT>0?"hit":l.mode==="dash"?"dash":l.mode:"dead",speed:l.speed,vy:l.v.y,turn:l.turn,climbPhase:l.climbPhase,combat:this.battle.combat,attack:this.battle.attackState(),cast:this.battle.castState(),face:this.hurtT>0?"hurt":this.battle.act&&this.battle.act.kind==="burst"?"angry":this.faceOverride}),this.hurtT=Math.max(0,(this.hurtT||0)-n),this.weaponT=Math.max(0,(this.weaponT||0)-n);let u=h.rig;if(u.weapon&&(u.weapon.held.visible=this.weaponT>0&&(l.mode==="ground"||l.mode==="dash"),u.weapon.float)){let m=u.weapon.float;m.visible=l.mode!=="swim";let g=new R(l.p.x+Math.sin(l.face-1.2)*.55,l.p.y+1.25+Math.sin(this.time*2)*.06,l.p.z+Math.cos(l.face-1.2)*.55);l.mode==="glide"&&(g.y+=.6),m.position.lerp(g,1-Math.exp(-10*n)),m.userData.ring.rotation.z+=n*2,m.userData.ring2.rotation.x+=n*1.4}this.glider.visible=l.mode==="glide",this.glider.visible&&(this.glider.position.set(f.position.x,f.position.y+1.75,f.position.z),this.glider.rotation.set(0,f.rotation.y,h.anim.bodyRoll*.6));let p=new R(l.p.x-Math.sin(l.face+.9)*.95,l.p.y+1.85+Math.sin(this.time*2.2)*.08,l.p.z-Math.cos(l.face+.9)*.95);l.mode==="swim"&&(p.y=.9),this.popoPos.lerp(p,1-Math.exp(-3.5*n)),this.popo.position.copy(this.popoPos);let x=Math.atan2(this.R.camera.position.x-this.popoPos.x,this.R.camera.position.z-this.popoPos.z);if(this.popo.rotation.y=Xc(this.popo.rotation.y,this.dialogOpen?x:Xc(l.face,x,.4),1-Math.exp(-4*n)),this.popo.userData.tail.rotation.z=Math.sin(this.time*3)*.25,this.popo.userData.star.rotation.y+=n*2,this.updateWorldObjects(n),this.updateNPCs(n),this.quests.update(),this.checkInteract(),this.camRig.update(n,{x:f.position.x,y:f.position.y,z:f.position.z,face:l.face},{moving:l.speed>1,speed:l.speed,glide:l.mode==="glide",low:l.mode==="swim",combat:this.battle.combat}),this.focus.set(l.p.x,l.p.y,l.p.z),this.moteT=(this.moteT||0)-n,this.moteT<=0){this.moteT=.08;let m=this.hour<5.5||this.hour>19,g=Math.random()*Math.PI*2,v=4+Math.random()*18,b=l.p.x+Math.cos(g)*v,y=l.p.z+Math.sin(g)*v,M=this.world.heightAt(b,y);M>.5&&this.fx.emit({x:b,y:M+.4+Math.random()*3,z:y,n:1,color:m?13172592:Math.random()<.7?16776168:16771488,speed:.25,up:m?.1:.15,drag:.2,life:m?3.5:5,size:m?.16:.07})}this.fx.update(n,l.p),this.hud.update(t),this.props.update(n,this.time,this.hour<6||this.hour>18.5),this.audio?.update(n,this),this.saveT+=t,this.saveT>30&&(this.saveT=0,this.save(),this.hud.autoSaved&&this.hud.autoSaved());for(let m of this.hooks)m(n)}onMoveEvent(t){let e=this.mover,i=this.audio;if(typeof t=="object"){if(t.type==="fallDamage"){let n=this.activeMember,r=Math.round(n.maxHp*t.frac);this.applyDamage(n,r,null,!0),this.damageNumber(new R(e.p.x,e.p.y+1.8,e.p.z),r,"phys",!1,!0)}return}if(t==="jump")i?.sfx("jump");else if(t==="jump2")i?.sfx("jump"),this.fx.emit({x:e.p.x,y:e.p.y+.2,z:e.p.z,n:16,color:this.activeMember.el,speed:3,life:.4,size:.25,flat:!0,radius:.8}),this.fx.ring(e.p.x,e.p.y-.05,e.p.z,this.activeMember.el,1.4,.3);else if(t==="land")i?.sfx("land"),this.fx.emit({x:e.p.x,y:e.p.y+.1,z:e.p.z,n:8,color:14674120,speed:2,life:.4,size:.25,flat:!0,radius:.6});else if(t==="dash")i?.sfx("dash"),this.fx.emit({x:e.p.x,y:e.p.y+.9,z:e.p.z,n:18,color:this.activeMember.el,speed:3,life:.4,size:.3,radius:.6});else if(t==="glide")i?.sfx("glide");else if(t==="splash")i?.sfx("splash"),this.fx.emit({x:e.p.x,y:.2,z:e.p.z,n:40,color:13627135,speed:4,up:3,grav:9,life:.7,size:.3});else if(t==="climbJump")i?.sfx("jump");else if(t==="drown"){this.notify("\u6EBA\u308C\u3066\u3057\u307E\u3063\u305F\u2026\u2026","water");let n=this.activeMember;this.applyDamage(n,Math.round(n.maxHp*.15),null,!0)}else if(t==="void"){this.notify("\u843D\u3061\u3066\u3057\u307E\u3063\u305F\u2026\u2026","phys");let n=this.activeMember;this.applyDamage(n,Math.round(n.maxHp*.1),null,!0)}}upDraftAt(t){for(let e of this.shrineObjs||[])if(this.flags[e.id]&&Math.hypot(t.x-e.x,t.z-e.z)<5&&t.y<e.y+40)return 1;return 0}setActive(t,e){for(let r of Zn)this.members[r].rig.root.visible=r===t;let i=this.activeId;this.activeId=t;let n=this.members[t].rig.root;n.position.set(this.mover.p.x,this.mover.p.y,this.mover.p.z),n.rotation.y=this.mover.face;for(let r of Zn)this.members[r].rig.weapon?.float&&(this.members[r].rig.weapon.float.visible=r===t);if(!e){let r=this.activeMember.el;this.fx.emit({x:this.mover.p.x,y:this.mover.p.y+1,z:this.mover.p.z,n:50,color:r,speed:4,life:.6,size:.35,radius:1}),this.fx.ring(this.mover.p.x,this.mover.p.y,this.mover.p.z,r,2.2,.4),this.audio?.sfx("switch")}}switchTo(t){let e=Zn[t];if(!this.unlocked.includes(e)||e===this.activeId)return;let i=this.party[t];if(!i.alive){this.notify(`${i.name}\u306F\u5012\u308C\u3066\u3044\u308B`,"phys");return}this.switchCD>0||this.battle.act&&this.battle.act.kind==="burst"||(this.battle.act=null,this.switchCD=this.battle.combat?1:.25,this.mover.iframe=Math.max(this.mover.iframe,.3),this.setActive(e))}unlock(t){if(this.unlocked.includes(t))return;this.unlocked.push(t),this.unlocked.sort((n,r)=>Zn.indexOf(n)-Zn.indexOf(r));let e=this.party.find(n=>n.id===t),i=this.party[0];for(;e.lv<i.lv;)e.lv++;e.recalc(),e.hp=e.maxHp,this.hud.showBanner(`${e.name}\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F`,Ja[t].title,"join"),this.audio?.sfx("join")}gainEnergy(t){for(let e of this.party){if(!this.unlocked.includes(e.id)||!e.alive)continue;let i=e.el===t?3:1,n=e.id===this.activeId?1:.6;e.energy=Math.min(e.def0.energy,e.energy+i*n)}}healActive(t){let e=this.activeMember;if(!e.alive)return;let i=e.hp;e.hp=Math.min(e.maxHp,e.hp+t);let n=Math.round(e.hp-i);n>0&&this.damageNumber(new R(this.mover.p.x,this.mover.p.y+1.9,this.mover.p.z),"+"+n,"heal",!1,!0)}damagePlayer(t,e,i){let n=this.mover,r=this.activeMember;if(n.iframe>0||this.dialogOpen||!r.alive)return;let a=zc(t.lv,r.lv)*2,o=Math.max(1,Math.round(t.atk*e*a*.9*(.95+Math.random()*.1)));if(Number.isFinite(o)){if(this.applyDamage(r,o,i),this.damageNumber(new R(n.p.x,n.p.y+1.8,n.p.z),o,i||"phys",!1,!0),this.hud.hurtFlash(),this.audio?.sfx("hurt"),n.iframe=.5,o>r.maxHp*.08&&n.mode==="ground"){this.hurtT=.35,this.battle.act=null;let l=n.p.x-t.pos.x,c=n.p.z-t.pos.z,h=Math.hypot(l,c)||1;n.v.x=l/h*6,n.v.z=c/h*6,n.lockMove=.3}this.camRig.shake=Math.max(this.camRig.shake,.4)}}applyDamage(t,e,i,n){if(Number.isFinite(e)&&(t.hp=Math.max(0,t.hp-e),Number.isFinite(t.hp)||(t.hp=t.maxHp),t.hp<=0&&t.alive)){t.alive=!1,t.hp=0,this.notify(`${t.name}\u304C\u5012\u308C\u305F`,"phys");let r=this.party.findIndex(a=>a.alive&&this.unlocked.includes(a.id));r>=0?setTimeout(()=>this.setActive(this.party[r].id),700):this.wipe()}}wipe(){this.paused=!1,this.screens.fade(()=>{let t=this.nearestWaypoint(!0);for(let e of this.party)e.alive=!0,e.hp=e.maxHp;this.mover.p.x=t.x,this.mover.p.z=t.z+3,this.mover.p.y=this.world.groundAt(t.x,t.z+3),this.mover.mode="ground",this.setActive(this.unlocked[0],!0),this.activeId=this.unlocked[0],this.notify("\u6700\u5BC4\u308A\u306E\u30EF\u30FC\u30D7\u5730\u70B9\u3067\u76EE\u3092\u899A\u307E\u3057\u305F","wind")})}hitStop(t){this.hitStopT=Math.max(this.hitStopT,t)}showWeapon(){this.weaponT=3.5}burstCinematic(t){let e=this.mover,i=Math.sin(e.face),n=Math.cos(e.face);this.camRig.override={pos:new R(e.p.x+i*2.6-n*1,e.p.y+1.5,e.p.z+n*2.6+i*1),look:new R(e.p.x,e.p.y+1.2,e.p.z),t:.9},this.hud.burstFlash(t),this.fx.emit({x:e.p.x,y:e.p.y+1,z:e.p.z,n:80,color:t,speed:5,life:.9,size:.4,radius:1.5})}damageNumber(t,e,i,n,r){this.hud.damage(t,e,i,n,r)}reactionText(t,e,i){this.hud.reaction(t,e,i),this.audio?.sfx("reaction")}notify(t,e){this.hud.notify(t,e)}reward(t,e,i){this.mora+=t;let n=[];for(let r of this.party)this.unlocked.includes(r.id)&&r.addExp(e)&&n.push(r.name);this.notify(`${i?i+"\u3000":""}\u30EB\u30DF +${t}\u3000\u7D4C\u9A13\u5024 +${e}`,"gold"),n.length&&(this.hud.showBanner("\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\uFF01",n.join("\u30FB"),"lvup"),this.audio?.sfx("levelup"))}spawnGroup(t,e,i={}){if(this.groups[t])for(let r of this.groups[t])r.dead||(r.dead=!0,this.scene.remove(r.model));let n=this.groups[t]=[];for(let[r,a,o,l,c]of e){let h=new Ka(this,r,a,o,{el:l,group:t,lv:i.lv});c==="tower"&&(h.pos.y+=6),i.alert&&(h.state="chase"),this.enemies.push(h),n.push(h)}return n}groupDead(t){let e=this.groups[t];return!!e&&e.every(i=>i.dead)}spawnWild(){let t=(e,i,n)=>this.wild.push({name:e,list:i,lv:n,cx:i[0][1],cz:i[0][2],t:0});this.wild=[],t("w_meadow1",[["slime",-20,330,"water"],["slime",-26,336,"water"],["slime",-14,338,"wind"]],8),t("w_meadow2",[["slime",200,470,"fire"],["slime",206,476,"fire"]],9),t("w_road",[["boko",240,230],["boko",248,236],["archer",236,242]],10),t("w_lakeE",[["slime",150,60,"water"],["slime",156,66,"ice"],["slime",146,70,"water"]],10),t("w_forest1",[["boko",-330,60],["archer",-340,70],["shaman",-326,74,"water"]],12),t("w_forest2",[["slime",-450,260,"wind"],["slime",-444,268,"thunder"],["slime",-456,270,"wind"]],11),t("w_cliffbase",[["slime",400,-60,"thunder"],["slime",410,-70,"thunder"],["slime",418,-56,"ice"]],13),t("w_cliftop",[["slime",470,-240,"ice"],["slime",480,-232,"ice"],["boko",455,-215],["shaman",462,-228,"water"]],15),t("w_mountain",[["slime",-60,-340,"ice"],["slime",-52,-346,"thunder"],["boko",70,-330],["archer",78,-338]],16),t("w_lakeN",[["boko",-185,-60],["boko",-178,-54],["shaman",-190,-52,"fire"]],12),t("w_south",[["slime",-200,470,"water"],["slime",-206,476,"fire"],["boko",-190,480]],10)}updateWild(t){let e=this.mover.p;for(let i of this.wild){let n=Math.hypot(e.x-i.cx,e.z-i.cz),r=this.groups[i.name];if(!r&&n<120)this.spawnGroup(i.name,i.list,{lv:i.lv});else if(r&&r.every(a=>a.dead))i.t+=t,i.t>120&&n>150&&(i.t=0,delete this.groups[i.name]);else if(r&&n>200&&r.every(a=>a.state==="idle"||a.state==="wander"||a.dead)){for(let a of r)a.dead||(a.dead=!0,a.deathT=1,this.scene.remove(a.model));delete this.groups[i.name]}}}onEnemyAlert(t){this.battle.inCombatT=Math.max(this.battle.inCombatT,3)}onEnemyKilled(t){let e=1+(t.lv-8)*.08,i=Math.round(t.T.exp*e),n=Math.round(t.T.mora*e);this.mora+=n;let r=[];for(let a of this.party)this.unlocked.includes(a.id)&&a.addExp(i)&&r.push(a.name);r.length&&(this.hud.showBanner("\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\uFF01",r.join("\u30FB"),"lvup"),this.audio?.sfx("levelup")),this.audio?.sfx("kill"),t.group==="w_cliffbase"&&this.quests.side.slime_hunt==="active"&&this.groupDead("w_cliffbase")&&this.quests.readySide("slime_hunt"),t.group==="w_lakeN"&&this.quests.side.boko_lake==="active"&&this.groupDead("w_lakeN")&&this.quests.readySide("boko_lake"),t.type==="boss"&&this.bossDefeated(t),t.group&&t.group.startsWith("trial_")&&this.groupDead(t.group)&&this.trialWave(t.group)}buildWorldObjects(){let t=this.world;this.wpObjs=t.meta.waypoints.map(i=>{let n=Xp();return n.position.set(i.x,t.heightAt(i.x,i.z),i.z),this.scene.add(n),t.addCollider({x:i.x,z:i.z,r:1.3,top:n.position.y+.6}),{...i,o:n}}),this.shrineObjs=t.meta.shrines.map(i=>{let n=Yp(),r=t.heightAt(i.x,i.z)-.1;return n.position.set(i.x,r,i.z),this.scene.add(n),t.addCollider({x:i.x,z:i.z,r:4.2,top:r+.8}),{...i,y:r,o:n}}),this.chestObjs=t.meta.chests.map((i,n)=>{let r=$p(i.tier);return r.position.set(i.x,t.heightAt(i.x,i.z),i.z),r.rotation.y=n*2.3%6.28,this.scene.add(r),{...i,id:"c"+n,o:r,open:0}}),this.crystalObjs=t.meta.crystals.map((i,n)=>{let r=Xu();return r.position.set(i.x,t.heightAt(i.x,i.z)+1.4,i.z),this.scene.add(r),{...i,id:"k"+n,o:r}}),this.cat=this.makeCat(250,268),this.feathers=[[-360,120],[-470,210],[-400,40]].map(([i,n],r)=>{let a=Xu();return a.userData.c.material.color.setHex(16771248),a.position.set(i,t.heightAt(i,n)+1,n),a.visible=!1,this.scene.add(a),{id:"f"+r,x:i,z:n,o:a,got:!1}}),this.rings=[];let e=this.props.campfire;this.hooks.push(()=>{Math.random()<.6&&this.fx.emit({x:e.x,y:e.y,z:e.z,n:1,color:16747056,speed:.6,up:2.2,life:.8,size:.4,radius:.5})})}makeCat(t,e){let i=new pe,n=new pi({color:15771744}),r=new nt(new as(.12,.25,4,8),n);r.rotation.z=Math.PI/2,r.position.y=.18,i.add(r);let a=new nt(new Jt(.12,10,8),n);a.position.set(.22,.3,0),i.add(a);for(let l of[-1,1]){let c=new nt(new Ge(.04,.08,4),n);c.position.set(.24,.42,l*.06),i.add(c)}let o=new nt(new Vt(.02,.03,.3,5),n);return o.position.set(-.25,.3,0),o.rotation.z=.6,i.add(o),i.position.set(t,this.world.heightAt(t,e),e),i.visible=!1,this.scene.add(i),i}nextFeather(){let t=this.feathers.find(e=>!e.got);return t?{x:t.x,z:t.z}:null}updateWorldObjects(t){let e=this.mover.p,i=this.time;for(let n of this.wpObjs){n.o.userData.gem.rotation.y+=t,n.o.userData.ring.rotation.x=Math.sin(i)*.3;let r=this.waypointsOn.has(n.id);n.o.userData.set(r);let a=Math.hypot(e.x-n.x,e.z-n.z);if(!r&&a<5&&(this.waypointsOn.add(n.id),this.notify(`\u30EF\u30FC\u30D7\u5730\u70B9\u300C${n.name}\u300D\u3092\u89E3\u653E\u3057\u305F`,"wind"),this.audio?.sfx("unlock"),this.save()),r&&a<6&&!this.battle.combat)for(let o of this.party)o.alive||(o.alive=!0,o.hp=1),o.hp=Math.min(o.maxHp,o.hp+o.maxHp*.25*t)}for(let n of this.shrineObjs)n.o.userData.set(!!this.flags[n.id]),n.o.userData.core.rotation.y+=t*.8,n.o.userData.core.position.y=3.2+Math.sin(i*1.5)*.15,this.flags[n.id]&&Math.random()<.3&&this.fx.emit({x:n.x,y:n.y+1,z:n.z,n:1,color:"wind",speed:.5,up:6,life:1.5,size:.35,radius:3});for(let n of this.chestObjs){let r=this.opened.has(n.id);r&&n.open<1?(n.open=Math.min(1,n.open+t*2),n.o.userData.lidPivot.rotation.x=-n.open*1.9,n.o.userData.glow.material.opacity=.6*(1-n.open)):r&&n.open>=1?n.o.userData.glow.visible=!1:n.o.userData.glow.material.opacity=.18+Math.sin(i*3)*.08}for(let n of this.crystalObjs){if(this.gotCrystals.has(n.id)){n.o.visible=!1;continue}n.o.userData.c.rotation.y+=t*1.5,n.o.position.y=this.world.heightAt(n.x,n.z)+1.4+Math.sin(i*2+n.x)*.15,Math.hypot(e.x-n.x,e.z-n.z)<1.3&&Math.abs(e.y+1-n.o.position.y)<2&&this.pickCrystal(n)}for(let n of this.feathers)n.o.visible=this.quests.side.feathers==="active"&&!n.got,n.o.visible&&(n.o.userData.c.rotation.y+=t*2,Math.hypot(e.x-n.x,e.z-n.z)<1.5&&(n.got=!0,this.flags.feathers=(this.flags.feathers||0)+1,this.notify(`\u9DF9\u306E\u7FBD\u6839\u3092\u62FE\u3063\u305F\uFF08${this.flags.feathers}/3\uFF09`,"gold"),this.audio?.sfx("pickup"),this.flags.feathers>=3&&this.quests.readySide("feathers")));this.cat.visible=this.quests.side.cat==="active"&&!this.flags.catFound,this.cat.visible&&(this.cat.rotation.y=Math.sin(i*.5)*2);for(let n of this.rings)n.got||(n.m.rotation.y+=t,Math.hypot(e.x-n.x,e.z-n.z)<2.4&&Math.abs(e.y+1-n.y)<2.6&&(n.got=!0,n.m.visible=!1,this.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:"wind",speed:5,life:.6,size:.35}),this.audio?.sfx("ring"),this.trialRingCount++,this.notify(`\u98A8\u306E\u8F2A ${this.trialRingCount}/${this.rings.length}`,"wind")));this.trial&&this.trial.kind==="rings"&&(this.trial.t-=t,this.trialRingCount>=this.rings.length?this.trialDone(this.trial.id):this.trial.t<=0&&(this.notify("\u6642\u9593\u5207\u308C\u2026\u2026\u3082\u3046\u4E00\u5EA6\u7960\u3092\u8ABF\u3079\u3088\u3046","phys"),this.clearRings(),this.trial=null)),this.updateWild(t),this.boss&&!this.boss.dead&&this.boss.state==="idle"&&!this.boss.waking&&Math.hypot(e.x-this.boss.home.x,e.z-this.boss.home.z)<30&&this.wakeBoss(),this.boss&&!this.boss.dead&&this.updateBoss(t)}pickCrystal(t){this.gotCrystals.add(t.id),this.fx.emit({x:t.x,y:t.o.position.y,z:t.z,n:40,color:"wind",speed:4,life:.7,size:.3}),this.audio?.sfx("crystal");let e=this.gotCrystals.size;e%5===0?(this.mover.stamMax+=10,this.notify(`\u98A8\u306E\u7D50\u6676 ${e}/40\u3000\u30B9\u30BF\u30DF\u30CA\u4E0A\u9650 +10`,"wind")):this.notify(`\u98A8\u306E\u7D50\u6676 ${e}/40`,"wind"),this.save()}checkInteract(){let t=this.mover.p,e=null,i=1e9,n=(r,a)=>{r<i&&(i=r,e=a)};if(!this.dialogOpen){for(let r of this.npcs){let a=Math.hypot(t.x-r.pos.x,t.z-r.pos.z);a<3.3&&n(a,{label:`${r.name}\u3068\u8A71\u3059`,use:()=>this.talkTo(r)})}for(let r of this.chestObjs)if(!this.opened.has(r.id)){let a=Math.hypot(t.x-r.x,t.z-r.z);a<2.2&&n(a,{label:r.tier?"\u7CBE\u5DE7\u306A\u5B9D\u7BB1\u3092\u958B\u3051\u308B":"\u5B9D\u7BB1\u3092\u958B\u3051\u308B",use:()=>this.openChest(r)})}for(let r of this.shrineObjs){let a=Math.hypot(t.x-r.x,t.z-r.z);a<5.5&&!this.flags[r.id]&&!this.trial&&n(a,{label:"\u98A8\u306E\u7960\u3092\u8ABF\u3079\u308B",use:()=>this.useShrine(r)})}if(this.cat.visible){let r=Math.hypot(t.x-this.cat.position.x,t.z-this.cat.position.z);r<2.2&&n(r,{label:"\u732B\u3092\u62B1\u304D\u4E0A\u3052\u308B",use:()=>{this.flags.catFound=!0,this.quests.readySide("cat"),this.notify("\u8FF7\u5B50\u306E\u732B\u30CB\u30E3\u30C3\u30BF\u3092\u898B\u3064\u3051\u305F\uFF01","gold"),this.audio?.sfx("pickup")}})}for(let r of this.wpObjs)if(this.waypointsOn.has(r.id)){let a=Math.hypot(t.x-r.x,t.z-r.z);a<3&&n(a+1,{label:"\u5730\u56F3\u3092\u958B\u304F\uFF08\u30EF\u30FC\u30D7\uFF09",use:()=>this.openMap()})}}this.nearInteract=e,e&&this.input.pressed.interact&&this.canControl&&this.time-(this.dialogClosedAt??-9)>.35&&e.use()}openChest(t){this.opened.add(t.id);let e=t.tier?260+Math.round(Math.random()*80):80+Math.round(Math.random()*40),i=t.tier?500:200;this.fx.emit({x:t.x,y:t.o.position.y+.8,z:t.z,n:60,color:"gold",speed:4,up:3,life:1,size:.3}),this.audio?.sfx("chest");let n=t.tier?"pie":"dango";this.items[n]=(this.items[n]||0)+1,this.reward(e,i,`\u5B9D\u7BB1\uFF08${Qa[n].name}\xD71\uFF09`),this.save()}useShrine(t){if(t.id==="sh_lake"&&this.quests.cur.id!=="lake_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");if(t.id==="sh_meadow"&&this.quests.cur.id!=="meadow_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");if(t.id==="sh_cliff"&&this.quests.cur.id!=="cliff_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");this.audio?.sfx("unlock"),t.id==="sh_lake"?(this.trial={id:t.id,kind:"waves",wave:0},this.notify("\u7960\u306E\u8A66\u7DF4\uFF1A\u9B54\u7269\u306E\u7FA4\u308C\u3092\u9000\u3051\u3088\u3046","water"),this.spawnGroup("trial_1",[["slime",t.x+6,t.z,"water"],["slime",t.x-6,t.z+3,"ice"],["slime",t.x,t.z-7,"water"]],{alert:!0,lv:11})):t.id==="sh_meadow"?(this.dialog(Ye.shrineMeadowStart),this.trial={id:t.id,kind:"rings",t:100},this.spawnRings(t)):t.id==="sh_cliff"&&(this.dialog(Ye.shrineCliffStart),this.trial={id:t.id,kind:"waves",wave:1},this.spawnGroup("trial_2",[["guardian",t.x+10,t.z+4],["slime",t.x-7,t.z,"thunder"],["slime",t.x-4,t.z+8,"thunder"]],{alert:!0,lv:16}))}trialWave(t){let e=this.trial;if(e)if(e.id==="sh_lake"&&t==="trial_1"){let i=this.shrineObjs.find(n=>n.id==="sh_lake");this.notify("\u7B2C\u4E8C\u6CE2\uFF01","water"),this.spawnGroup("trial_1b",[["slime",i.x+5,i.z+5,"ice"],["slime",i.x-5,i.z-5,"ice"],["slime",i.x+6,i.z-4,"water"],["slime",i.x-6,i.z+5,"water"]],{alert:!0,lv:12})}else e.id==="sh_lake"&&t==="trial_1b"?this.trialDone("sh_lake"):e.id==="sh_cliff"&&t==="trial_2"&&this.trialDone("sh_cliff")}spawnRings(t){this.clearRings(),this.trialRingCount=0;let e=this.world,i=[[18,0,3.5],[10,16,5],[-12,14,4.5],[-20,-6,6],[-6,-20,5],[14,-16,7]];for(let[n,r,a]of i){let o=t.x+n,l=t.z+r,c=e.heightAt(o,l)+a,h=new nt(new Ee(1.8,.12,8,32),new se({color:9435360}));h.position.set(o,c,l),this.scene.add(h),this.rings.push({x:o,y:c,z:l,m:h,got:!1})}}clearRings(){for(let t of this.rings)this.scene.remove(t.m);this.rings=[]}trialDone(t){this.trial=null,this.clearRings(),this.flags[t]=!0,this.mover.stamMax+=40,this.mover.stam=this.mover.stamMax;let e=this.shrineObjs.find(i=>i.id===t);this.fx.emit({x:e.x,y:e.y+3,z:e.z,n:160,color:"wind",speed:9,life:1.2,size:.45}),this.fx.ring(e.x,e.y,e.z,"wind",12,1),this.hud.showBanner("\u98A8\u306E\u7960\u304C\u76EE\u899A\u3081\u305F","\u30B9\u30BF\u30DF\u30CA\u4E0A\u9650 +40","shrine"),this.audio?.sfx("shrine"),this.reward(500,800),this.save()}buildNPCs(){this.npcs=Hu.map(a=>{let o=Sn("villager",this.tex,{...a.look,name:a.name,eye:"eye_npc",face:{},scale:a.scale||(a.look.female?.95:1),boots:4863014}),l=this.world.groundAt(a.x,a.z);return o.root.position.set(a.x,l,a.z),this.scene.add(o.root),this.world.addCollider({x:a.x,z:a.z,r:.4,top:null}),{...a,rig:o,anim:new rn(o),pos:o.root.position,face:Math.random()*6}});let t=[3811866,9067050,14200944,2763306,10504746,15261904,5913194],e=[14183002,5933784,6989930,15253616,10514624,15790320,9071178],i=7,n=()=>(i=i*16807%2147483647)/2147483647,r=["\u4ECA\u65E5\u306F\u3044\u3044\u98A8\u3060\u306D\u3002","\u98A8\u8ECA\u306E\u30D1\u30A4\u3001\u98DF\u3079\u305F\u3053\u3068\u3042\u308B\uFF1F","\u5317\u306E\u9727\u3001\u5C11\u3057\u8584\u304F\u306A\u3063\u305F\u6C17\u304C\u3059\u308B\u3002","\u885B\u5175\u968A\u9577\u306E\u30A2\u30AB\u30CD\u3055\u3093\u3001\u304B\u3063\u3053\u3044\u3044\u3088\u306D\uFF01","\u6E56\u306E\u795E\u6BBF\u306E\u5DEB\u5973\u3055\u307E\u306F\u3001\u3068\u3063\u3066\u3082\u3084\u3055\u3057\u3044\u306E\u3088\u3002","\u6700\u8FD1\u30B9\u30E9\u30A4\u30E0\u304C\u5897\u3048\u3066\u56F0\u308B\u3088\u3002","\u5E02\u5834\u306E\u5546\u4EBA\u30EB\u30AB\u306F\u3001\u6599\u7406\u306E\u8155\u3082\u4E00\u6D41\u3055\u3002","\u65C5\u4EBA\u3055\u3093\u3001\u898B\u306A\u3044\u9854\u3060\u306D\u3002\u3088\u3046\u3053\u305D\u30EA\u30FC\u30D5\u30A7\u30F3\u3078\uFF01"];for(let a=0;a<12;a++){let o=n()<.5,l={hair:t[Math.floor(n()*t.length)],top:e[Math.floor(n()*e.length)],legs:4866104,apron:e[Math.floor(n()*e.length)],female:o,skin:[16771550,16309448,15782072][Math.floor(n()*3)],hairStyle:o?{bangs:5,backN:6,backLen:.15+n()*.2,ponytail:n()<.4?{len:.3,tie:13647936}:null}:{bangs:4,backN:6,backLen:.08,spikes:Math.floor(n()*3)}},c=n()*Math.PI*2,h=8+n()*60,f=330+Math.cos(c)*h,d=330+Math.sin(c)*h;if(this.world.nearColliders(f,d,1).some(p=>this.world.insideCollider(p,f,d,.6)))continue;let u=Sn("villager",this.tex,{...l,name:"\u753A\u306E\u4EBA",eye:"eye_npc",face:{},scale:o?.93:1,boots:4863014});u.root.position.set(f,this.world.groundAt(f,d),d),this.scene.add(u.root),this.npcs.push({id:"walker"+a,name:o?"\u753A\u306E\u5A18":"\u753A\u306E\u82E5\u8005",walker:!0,x:f,z:d,rig:u,anim:new rn(u),pos:u.root.position,face:n()*6,line:r[a%r.length],goal:null,wait:n()*3})}this.world.buildGrid()}npcPos(t){let e=this.npcs.find(i=>i.id===t);return e?{x:e.x,z:e.z}:null}npcName(t){return this.npcs.find(e=>e.id===t)?.name||""}updateNPCs(t){let e=this.mover.p;for(let i of this.npcs){let n=Math.hypot(e.x-i.pos.x,e.z-i.pos.z);if(n>60){i.rig.root.visible=!1;continue}i.rig.root.visible=!0;let r=0;if(i.walker&&n>3.5){if(i.wait-=t,!i.goal&&i.wait<=0){let o=Math.random()*Math.PI*2,l=10+Math.random()*60;i.goal={x:330+Math.cos(o)*l,z:330+Math.sin(o)*l},i.gt=0}if(i.goal){i.gt+=t;let o=i.goal.x-i.pos.x,l=i.goal.z-i.pos.z,c=Math.hypot(o,l);i.face=Math.atan2(o,l),r=1.4;let h={x:i.pos.x+o/c*r*t,z:i.pos.z+l/c*r*t};this.world.pushOut(h,.35,i.pos.y);let f=Math.hypot(h.x-i.pos.x,h.z-i.pos.z);i.pos.x=h.x,i.pos.z=h.z,i.pos.y=this.world.groundAt(h.x,h.z,i.pos.y),(c<1||i.gt>25||f<r*t*.3)&&(i.goal=null,i.wait=2+Math.random()*5)}}let a=n<5?Math.atan2(e.x-i.pos.x,e.z-i.pos.z):i.face;i.rig.root.rotation.y=Xc(i.rig.root.rotation.y,a,1-Math.exp(-(r?8:4)*t)),i.anim.update(t,{mode:"ground",speed:r,face:n<3?"happy":void 0})}}talkTo(t){let e=this.quests,i=e.cur.id,n=(a,o)=>this.dialog(a.map(l=>Array.isArray(l)?l:[t.name,l]),o);if(t.id==="mayor"){if(i==="mayor")return this.dialog(Ye.mayor,()=>{this.flags.talkedMayor=!0});if(e.mainDone||e.step>5){if(!e.side.letter)return n(["\u541B\u306B\u983C\u307F\u304C\u3042\u308B\u3002\u6E56\u7554\u306E\u91E3\u308A\u4EBA\u30CE\u30A2\u306B\u3053\u306E\u624B\u7D19\u3092\u5C4A\u3051\u3066\u304F\u308C\u3093\u304B\u3002\u606F\u5B50\u306A\u3093\u3058\u3083\u3002"],()=>e.startSide("letter"));if(e.side.letter==="ready")return n(["\u305D\u3046\u304B\u3001\u5143\u6C17\u306B\u3057\u3066\u304A\u3063\u305F\u304B\u2026\u2026\u3002\u3042\u308A\u304C\u3068\u3046\u3002\u5C11\u306A\u3044\u304C\u304A\u793C\u3058\u3083\u3002"],()=>e.finishSide("letter"))}return n(["\u98A8\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u304F\u308C\u3002\u5927\u9678\u306E\u672A\u6765\u306F\u541B\u306B\u304B\u304B\u3063\u3066\u304A\u308B\u3002"])}if(t.id==="child")return e.side.cat?e.side.cat==="ready"?n(["\u30CB\u30E3\u30C3\u30BF\uFF01\uFF01\u3000\u304A\u306B\u3044\u3061\u3083\u3093\u3001\u3042\u308A\u304C\u3068\u3046\uFF01\u3000\u3053\u308C\u3001\u308F\u305F\u3057\u306E\u305F\u304B\u3089\u3082\u306E\uFF01"],()=>e.finishSide("cat")):e.side.cat==="done"?n(["\u30CB\u30E3\u30C3\u30BF\u3001\u3082\u3046\u3069\u3053\u306B\u3082\u884C\u304B\u306A\u3044\u3067\u306D\u3002"]):n(["\u30CB\u30E3\u30C3\u30BF\u3001\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u732B\u306A\u306E\u3002\u98A8\u8ECA\u306E\u3042\u305F\u308A\u3060\u3068\u601D\u3046\u2026\u2026"]):n(["\u3046\u3048\u30FC\u3093\u2026\u2026\u30CB\u30E3\u30C3\u30BF\u304C\u3044\u306A\u3044\u306E\u2026\u2026\u3002\u897F\u306E\u98A8\u8ECA\u306E\u307B\u3046\u306B\u8D70\u3063\u3066\u3044\u3063\u3061\u3083\u3063\u305F\u306E\u2026\u2026"],()=>e.startSide("cat"));if(t.id==="guard")return e.step>=4&&!e.side.slime_hunt?n(["\u3088\u3046\u65C5\u4EBA\uFF01\u3000\u65AD\u5D16\u306E\u3075\u3082\u3068\u306B\u96F7\u306E\u30B9\u30E9\u30A4\u30E0\u304C\u5897\u3048\u3066\u3001\u884C\u5546\u4EBA\u304C\u901A\u308C\u306A\u304F\u3066\u56F0\u3063\u3066\u308B\u3093\u3060\u3002\u7247\u4ED8\u3051\u3066\u304F\u308C\u306A\u3044\u304B\uFF1F"],()=>e.startSide("slime_hunt")):e.side.slime_hunt==="ready"?n(["\u672C\u5F53\u306B\u3084\u3063\u305F\u306E\u304B\uFF01\u3000\u3055\u3059\u304C\u3060\u306A\u3002\u3053\u308C\u306F\u885B\u5175\u968A\u304B\u3089\u306E\u793C\u3060\u3002"],()=>e.finishSide("slime_hunt")):n(["\u30EA\u30FC\u30D5\u30A7\u30F3\u306E\u9580\u306F\u4FFA\u304C\u5B88\u308B\uFF01\u3000\u2026\u2026\u30A2\u30AB\u30CD\u968A\u9577\u307B\u3069\u5F37\u304F\u306F\u306A\u3044\u3051\u3069\u306A\u3002"]);if(t.id==="fisher")return e.side.letter==="active"?n(["\u89AA\u7236\u304B\u3089\u624B\u7D19\uFF1F\u3000\u2026\u2026\u300C\u3061\u3083\u3093\u3068\u98EF\u3092\u98DF\u3048\u300D\u304B\u3002\u306F\u306F\u3063\u3001\u5909\u308F\u3089\u306A\u3044\u306A\u3002\u5C4A\u3051\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"],()=>e.readySide("letter")):e.side.boko_lake?e.side.boko_lake==="ready"?n(["\u3053\u308C\u3067\u307E\u305F\u91E3\u308A\u304C\u3067\u304D\u308B\uFF01\u3000\u3042\u308A\u304C\u3068\u3046\u3001\u53D6\u3063\u3066\u304A\u3044\u3066\u304F\u308C\u3002"],()=>e.finishSide("boko_lake")):n(["\u93E1\u306E\u6E56\u306F\u3001\u6674\u308C\u305F\u65E5\u306B\u306F\u7A7A\u304C\u305D\u306E\u307E\u307E\u6620\u308B\u3093\u3060\u3002"]):n(["\u6E56\u306E\u5317\u897F\u306B\u30DC\u30B3\u305F\u3061\u304C\u5C45\u3064\u3044\u3066\u3001\u91E3\u308A\u5834\u306B\u8FD1\u3065\u3051\u306A\u3044\u3093\u3060\u3002\u8FFD\u3044\u6255\u3063\u3066\u304F\u308C\u305F\u3089\u793C\u3092\u3059\u308B\u3088\u3002"],()=>e.startSide("boko_lake"));if(t.id==="hunter")return!e.side.feathers&&e.step>=9?n(["\u30E9\u30A4\u30AB\u306E\u53CB\u3060\u3061\u304B\u3002\u68EE\u306E\u9DF9\u306E\u7FBD\u6839\u30923\u679A\u96C6\u3081\u3066\u304D\u3066\u304F\u308C\u3093\u304B\u3002\u77E2\u7FBD\u6839\u306B\u3059\u308B\u3093\u3058\u3083\u3002"],()=>e.startSide("feathers")):e.side.feathers==="ready"?n(["\u898B\u4E8B\u306A\u7FBD\u6839\u3058\u3083\u3002\u3053\u308C\u3067\u30E9\u30A4\u30AB\u306B\u3044\u3044\u77E2\u3092\u4F5C\u3063\u3066\u3084\u308C\u308B\u3002"],()=>e.finishSide("feathers")):n(["\u68EE\u3067\u306F\u8DB3\u97F3\u3092\u6BBA\u3059\u3053\u3068\u3058\u3083\u3002\u2026\u2026\u30E9\u30A4\u30AB\u306E\u53D7\u3051\u58F2\u308A\u3058\u3083\u304C\u306A\u3002"]);if(t.id==="merchant")return this.shop(t);if(t.walker)return n([t.line]);let r=Gp[t.id]||["\u3044\u3044\u5929\u6C17\u3060\u306D\u3048\u3002"];return n([r[Math.floor(Math.random()*r.length)]])}shop(t){let e=Object.entries(Qa);this.dialog([[t.name,`\u3044\u3089\u3063\u3057\u3083\u3044\uFF01\u3000\u4F55\u306B\u3059\u308B\uFF1F\u3000\uFF08\u6240\u6301\u91D1 ${this.mora} \u30EB\u30DF\uFF09`]],null,e.map(([i,n])=>({text:`${n.name}\uFF08${n.price}\u30EB\u30DF\uFF09\u2014 ${n.desc}`,fn:()=>{if(this.mora<n.price){this.notify("\u30EB\u30DF\u304C\u8DB3\u308A\u306A\u3044","phys");return}this.mora-=n.price,this.items[i]=(this.items[i]||0)+1,this.notify(`${n.name}\u3092\u8CB7\u3063\u305F\uFF08\u6240\u6301 ${this.items[i]}\uFF09`,"gold"),this.audio?.sfx("buy"),this.save()}})).concat([{text:"\u3084\u3081\u3066\u304A\u304F",fn:()=>{}}]))}useFood(t){let e=Qa[t];if(!e||!this.items[t])return!1;let i=this.activeMember;if(e.revive){let n=this.party.find(r=>!r.alive&&this.unlocked.includes(r.id));if(!n)return this.notify("\u5012\u308C\u3066\u3044\u308B\u4EF2\u9593\u306F\u3044\u306A\u3044","phys"),!1;n.alive=!0,n.hp=Math.round(n.maxHp*e.heal),this.notify(`${n.name}\u304C\u8D77\u304D\u4E0A\u304C\u3063\u305F`,"heal")}else{if(i.hp>=i.maxHp)return this.notify("HP\u306F\u6E80\u30BF\u30F3","phys"),!1;this.healActive(i.maxHp*e.heal)}return this.items[t]--,this.audio?.sfx("eat"),!0}dialog(t,e,i){this.dlg={lines:t.slice(),i:0,onEnd:e,choices:i},this.dialogOpen=!0,i&&document.pointerLockElement&&(this.selfUnlock=!0,document.exitPointerLock()),this.input.releaseAll(),this.showLine()}showLine(){let t=this.dlg;if(!t)return;let[e,i]=t.lines[t.i],n=t.i===t.lines.length-1;this.hud.say(e,i,n&&t.choices?t.choices:null),this.faceOverride="happy",this.audio?.sfx("talk")}dialogNext(){let t=this.dlg;t&&(t.i===t.lines.length-1&&t.choices||(t.i++,t.i>=t.lines.length?this.closeDialog():this.showLine()))}dialogChoose(t){let e=this.dlg;if(!e||!e.choices)return;let i=e.choices[t];this.closeDialog(),i&&i.fn&&i.fn()}closeDialog(){let t=this.dlg;this.dlg=null,this.dialogOpen=!1,this.faceOverride=void 0,this.dialogClosedAt=this.time,this.hud.closeDialog(),t&&t.onEnd&&t.onEnd()}near(t,e,i){return Math.hypot(this.mover.p.x-t,this.mover.p.z-e)<i}prepareBoss(){if(this.boss&&!this.boss.dead)return;let t=this.props.arena;this.boss=new Ka(this,"boss",t.x,t.z-8,{group:"boss"}),this.boss.face=0,this.boss.phase=1,this.boss.state="idle",this.boss.update=(e=>function(i){return this.state==="idle"?(this.snap(),this.animate(i,0,"idle"),!0):e.call(this,i)})(this.boss.update),this.enemies.push(this.boss)}wakeBoss(){let t=this.boss;t.waking=!0,this.dialog(Ye.bossStart,()=>{t.state="chase",this.audio?.music("boss")}),this.hud.showBanner("\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9","\u767E\u5E74\u306E\u7720\u308A\u3088\u308A\u76EE\u899A\u3081\u3057\u9727\u306E\u5B88\u308A\u624B","boss")}updateBoss(t){let e=this.boss;if(e.state==="idle")return;let i=e.hp/e.maxHp;if(e.phase===1&&i<.6&&(e.phase=2,this.dialog(Ye.bossPhase2),this.fx.ring(e.pos.x,e.pos.y,e.pos.z,"ice",20,1.2)),e.phase===2&&i<.28&&(e.phase=3,this.dialog(Ye.bossPhase3),e.coreT=0),e.phase===3){e.coreT=(e.coreT||0)+t;let r=e.coreT%12>7;r&&!e.coreOpen&&this.notify("\u7D50\u6676\u304C\u958B\u3044\u305F\uFF01\u3000\u4ECA\u3060\uFF01","wind"),e.coreOpen=r}Math.random()<.5&&this.fx.emit({x:e.pos.x+(Math.random()-.5)*8,y:e.pos.y+2+Math.random()*6,z:e.pos.z+(Math.random()-.5)*8,n:1,color:14209279,speed:.5,up:.5,life:2,size:1.2})}bossDefeated(t){this.flags.bossDown=!0,this.audio?.music(null),this.timeScale=.3,setTimeout(()=>{this.timeScale=1},1800),this.fx.emit({x:t.pos.x,y:t.pos.y+5,z:t.pos.z,n:300,color:16777215,speed:14,life:2,size:.6,radius:4});for(let e of["wind","fire","water","thunder","ice"])this.fx.ring(t.pos.x,t.pos.y,t.pos.z,e,30,2);this.reward(3e3,5e3,"\u9727\u306E\u5DE8\u50CF\u3092\u93AE\u3081\u305F")}playEnding(){this.hour=17.2,this.dialog(Ye.ending,()=>{this.screens.credits(()=>{this.quests.step=this.quests.steps.length-1,this.quests.started=!0,this.flags.cleared=!0,this.save(),this.notify("\u81EA\u7531\u306B\u5927\u9678\u3092\u65C5\u3057\u3088\u3046\uFF01\u3000\u4F9D\u983C\u3084\u5B9D\u7BB1\u3001\u98A8\u306E\u7D50\u6676\u304C\u6B8B\u3063\u3066\u3044\u308B\u3088","wind")})})}openMap(){this.screens.map()}openQuestLog(){this.screens.questLog()}openMenu(){this.screens.menu()}mapMarkers(){let t=[],e=this.quests.current();e&&e.target&&t.push({kind:"quest",x:e.target.x,z:e.target.z,edge:!0});for(let i of this.wpObjs)t.push({kind:"waypoint",x:i.x,z:i.z,done:this.waypointsOn.has(i.id)});for(let i of this.shrineObjs)t.push({kind:"shrine",x:i.x,z:i.z,done:!!this.flags[i.id]});t.push({kind:"town",x:330,z:330});for(let i of this.chestObjs)!this.opened.has(i.id)&&Math.hypot(i.x-this.mover.p.x,i.z-this.mover.p.z)<40&&t.push({kind:"chest",x:i.x,z:i.z});for(let i of this.enemies)!i.dead&&i.state!=="idle"&&i.state!=="wander"&&t.push({kind:"enemy",x:i.pos.x,z:i.pos.z});return this.quests.step>=14&&t.push({kind:"boss",x:0,z:-500}),t}nearestWaypoint(t){let e=this.world.meta.waypoints[0],i=1e9;for(let n of this.wpObjs){if(t&&!this.waypointsOn.has(n.id))continue;let r=Math.hypot(n.x-this.mover.p.x,n.z-this.mover.p.z);r<i&&(i=r,e=n)}return e}teleport(t){this.screens.fade(()=>{this.mover.p.x=t.x,this.mover.p.z=t.z+3,this.mover.p.y=this.world.groundAt(t.x,t.z+3),this.mover.mode="ground",this.mover.v.x=this.mover.v.z=this.mover.v.y=0,this.camRig.inited=!1,this.audio?.sfx("warp")})}makePortraits(){let t={},e=this.R.renderer,i=new ti(26,1,.05,10),n=new ns;n.add(new hs(16777215,9079456,2.2));let r=new us(16777215,2.2);r.position.set(1,2,3),n.add(r);let a=new Pe(128,128,{colorSpace:Fe}),o=new Uint8Array(16384*4),l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d");for(let h of Zn){let f=Sn(h,this.tex);n.add(f.root);let d=new R;f.root.updateMatrixWorld(!0),f.j.head.getWorldPosition(d),i.position.set(d.x+.12,d.y+.13,d.z+.75),i.lookAt(d.x,d.y+.1,d.z),e.setRenderTarget(a),e.setClearColor(0,0),e.clear(),e.render(n,i),e.readRenderTargetPixels(a,0,0,128,128,o);let u=c.createImageData(128,128);for(let p=0;p<128;p++)u.data.set(o.subarray((127-p)*512,(128-p)*512),p*512);c.clearRect(0,0,128,128),c.putImageData(u,0,0),t[h]=l.toDataURL(),n.remove(f.root)}return e.setRenderTarget(null),this.portraits=t,t}save(){if(this.noSave)return;let t=this.snapshot();try{localStorage.setItem(Rr,JSON.stringify(t))}catch{}}load(t){let e=this.mover;t.pos&&(e.p.x=t.pos.x,e.p.z=t.pos.z,e.p.y=this.world.groundAt(t.pos.x,t.pos.z),e.face=t.face||0),this.hour=t.hour??9.5,e.stamMax=t.stamMax||e.stamMax,e.stam=e.stamMax;for(let i of this.party)i.load(t.party?.[i.id]);this.unlocked=t.unlocked||["sora"],this.activeId=this.unlocked.includes(t.active)?t.active:"sora",this.quests.load(t.quests),this.flags=t.flags||{},this.mora=t.mora||0,this.items=t.items||{},this.opened=new Set(t.opened||[]),this.gotCrystals=new Set(t.crystals||[]),this.waypointsOn=new Set(t.wps||[]),(t.feathers||[]).forEach((i,n)=>{this.feathers[n]&&(this.feathers[n].got=i)});for(let i of this.chestObjs)this.opened.has(i.id)&&(i.open=.99);this.flags.bossDown&&(this.flags.bossDown=!0),this.flags.talkedMayor=this.flags.talkedMayor||this.quests.step>4,e.lastSafe={x:e.p.x,y:e.p.y,z:e.p.z}}snapshot(){let t=this.mover;return{v:1,pos:{x:t.p.x,z:t.p.z},face:t.face,hour:this.hour,stamMax:t.stamMax,party:Object.fromEntries(this.party.map(e=>[e.id,e.save()])),unlocked:this.unlocked,active:this.activeId,quests:this.quests.save(),flags:this.flags,mora:this.mora,items:this.items,opened:[...this.opened],crystals:[...this.gotCrystals],wps:[...this.waypointsOn],feathers:this.feathers.map(e=>e.got),meta:{at:Date.now(),place:this.placeName(),step:this.quests.cur?.title||"",lv:this.party[0].lv,crystals:this.gotCrystals.size}}}placeName(){let t=this.mover.p,e=[["\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3",330,330,150],["\u9727\u306E\u907A\u8DE1",0,-470,160],["\u93E1\u306E\u6E56",0,10,230],["\u7363\u306E\u91CE\u55B6\u5730",-380,-300,90],["\u3055\u3055\u3084\u304D\u306E\u68EE",-390,170,220],["\u5929\u98A8\u306E\u65AD\u5D16",450,-160,200],["\u306F\u3058\u307E\u308A\u306E\u8349\u539F",60,430,400]];for(let[i,n,r,a]of e)if(Math.hypot(t.x-n,t.z-r)<a)return i;return"\u30EA\u30E5\u30DF\u30A8\u30E9"}saveSlot(t){if(this.battle.combat)return this.notify("\u6226\u95D8\u4E2D\u306F\u30BB\u30FC\u30D6\u3067\u304D\u306A\u3044","phys"),!1;try{return localStorage.setItem(Rr+".slot"+t,JSON.stringify(this.snapshot())),this.save(),this.notify(`\u30B9\u30ED\u30C3\u30C8${t}\u306B\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F`,"wind"),this.audio?.sfx("unlock"),!0}catch{return this.notify("\u30BB\u30FC\u30D6\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u4FDD\u5B58\u304C\u4F7F\u3048\u307E\u305B\u3093\uFF09","phys"),!1}}static slotData(t){try{let e=localStorage.getItem(Rr+".slot"+t);return e?JSON.parse(e):null}catch{return null}}static loadSlotAndRestart(t){let e=s.slotData(t);if(!e)return!1;try{localStorage.setItem(Rr,JSON.stringify(e))}catch{return!1}return location.href=location.pathname+"?autostart=continue",!0}static loadSave(){try{let t=localStorage.getItem(Rr);return t?JSON.parse(t):null}catch{return null}}static clearSave(){try{localStorage.removeItem(Rr)}catch{}}debugInfo(){return{active:this.activeId,step:this.quests.cur?.id,enemies:this.enemies.filter(t=>!t.dead).length,hp:Math.round(this.activeMember.hp),act:this.battle.act?.kind}}};function Xc(s,t,e){return s+Ms(s,t)*e}function x1(){let s=new pe,t=new bn;t.moveTo(0,.1),t.quadraticCurveTo(.9,.05,1.25,-.25),t.lineTo(.9,-.15),t.lineTo(.6,-.3),t.lineTo(.3,-.18),t.lineTo(0,-.28),t.lineTo(-.3,-.18),t.lineTo(-.6,-.3),t.lineTo(-.9,-.15),t.lineTo(-1.25,-.25),t.quadraticCurveTo(-.9,.05,0,.1);let e=new ya(t,12);e.rotateX(-Math.PI/2+.25);let i=new nt(e,new pi({color:15788760,side:Ie}));i.castShadow=!0;let n=new nt(new Ee(1,.012,4,24,Math.PI),new pi({color:3116938}));return n.rotation.set(-Math.PI/2+.25,0,0),n.scale.set(1.25,.3,1),s.add(i,n),s.visible=!1,s}var As={n:5},Zp=new WeakMap;function jn(s,t,e){let i=Zp.get(t);if(i||(i={},Zp.set(t,i)),i[e])return i[e];let n=s.createGain(),r={in:n};if(e==="strings"||e==="choir"){let a=n;if(e==="strings"){let h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=3200,h.Q.value=.4,n.connect(h),a=h}else{let h=s.createGain();for(let[f,d,u]of[[800,6,1],[1150,7,.6],[2900,8,.2]]){let p=s.createBiquadFilter();p.type="bandpass",p.frequency.value=f,p.Q.value=d;let x=s.createGain();x.gain.value=u*2.2,n.connect(p),p.connect(x),x.connect(h)}a=h}let o=s.createGain();o.gain.value=.7,a.connect(o),o.connect(t);for(let[h,f,d]of[[.013,.37,-.6],[.019,.29,.6]]){let u=s.createDelay(.05);u.delayTime.value=h;let p=s.createOscillator();p.frequency.value=f;let x=s.createGain();x.gain.value=.003,p.connect(x),x.connect(u.delayTime),p.start();let m=s.createStereoPanner?s.createStereoPanner():s.createGain();m.pan&&(m.pan.value=d);let g=s.createGain();g.gain.value=.45,a.connect(u),u.connect(g),g.connect(m),m.connect(t)}let l=s.createOscillator();l.frequency.value=5.3;let c=s.createGain();c.gain.value=e==="choir"?9:11,l.connect(c),l.start(),r.vib=c}else{let a=s.createBiquadFilter();a.type="lowpass",a.type={hat:"highpass",snare:"bandpass",drumlow:"lowpass"}[e]||"lowpass",a.frequency.value={piano:5200,bass:650,pizz:1400,hat:7e3,snare:3e3,drumlow:400}[e]||4e3,a.Q.value=e==="snare"?.6:.5,n.connect(a),a.connect(t)}return i[e]=r,r}function Le(s){return 440*Math.pow(2,(s-69)/12)}function En(s,t,e){if(!e||Math.abs(e)<.2||!s.createStereoPanner)return t;let i=s.createStereoPanner();return i.pan.value=e,i.connect(t),i}function Pr(s,t,e,i,n,r,a,o,l){t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(n,e+i),t.gain.setTargetAtTime(n*a,e+i,r/3),t.gain.setValueAtTime(n*a,Math.max(e+i,l)),t.gain.setTargetAtTime(1e-4,Math.max(e+i,l),o/4)}var Cr=null;function ln(s){if(Cr&&Cr.sampleRate===s.sampleRate)return Cr;let t=s.sampleRate*2;Cr=s.createBuffer(1,t,s.sampleRate);let e=Cr.getChannelData(0);for(let i=0;i<t;i++)e[i]=Math.random()*2-1;return Cr}function Yc(s,t,e,i,n,r=.6,a=0){let o=En(s,jn(s,t,"piano").in,a),l=Math.max(.6,3.2-Math.log2(i/110)*.55),c=e+n;for(let[h,f,d]of[[1,.62,"sine"],[2,.26,"triangle"],[3,.09,"sine"]]){let u=s.createOscillator();u.type=d,u.frequency.value=i*h;let p=s.createGain();p.gain.setValueAtTime(1e-4,e),p.gain.linearRampToValueAtTime(f*r,e+.006),p.gain.setTargetAtTime(f*r*.25,e+.01,l/(h*.9)/2),p.gain.setTargetAtTime(1e-4,c,.12),u.connect(p),p.connect(o),u.start(e),u.stop(c+.7)}}function cn(s,t,e,i,n,r=.5,a=0,o={}){let l=jn(s,t,"strings"),c=En(s,l.in,a),h=s.createGain();h.connect(c);let f=o.attack??Math.min(.35,n*.3),d=o.bright??1;Pr(s,h,e,f,r*.16*(.8+d*.2),.3,.85,o.release??.4,e+n);let u=Math.min(o.voices??4,As.n);for(let p=0;p<u;p++){let x=s.createOscillator();x.type="sawtooth",x.frequency.value=i,x.detune.value=(p-(u-1)/2)*(o.spread??9)+(Math.random()-.5)*3,n>.3&&!As.noVib&&l.vib.connect(x.detune),x.connect(h),x.start(e),x.stop(e+n+(o.release??.4)+.3)}}function jp(s,t,e,i,n,r=.5,a=0){cn(s,t,e,i,n,r*1.15,a,{voices:3,spread:4,bright:1.6,attack:.07,release:.25})}function Jp(s,t,e,i,n,r=.5,a=0){let o=En(s,t,a),l=s.createGain();l.connect(o),Pr(s,l,e,.06,r*.22,.2,.8,.15,e+n);let c=s.createOscillator();c.type="sine",c.frequency.value=i;let h=s.createOscillator();h.type="triangle",h.frequency.value=i*2;let f=s.createGain();f.gain.value=.12;let d=s.createOscillator();d.frequency.value=5;let u=s.createGain();u.gain.setValueAtTime(0,e),u.gain.linearRampToValueAtTime(i*.006,e+Math.min(.4,n)),d.connect(u),u.connect(c.frequency),u.connect(h.frequency),c.connect(l),h.connect(f),f.connect(l);let p=s.createBufferSource();p.buffer=ln(s);let x=s.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=2;let m=s.createGain();m.gain.setValueAtTime(0,e),m.gain.linearRampToValueAtTime(r*.03,e+.03),m.gain.setTargetAtTime(r*.008,e+.05,.1),m.gain.setTargetAtTime(1e-4,e+n,.05),p.connect(x),x.connect(m),m.connect(o);for(let g of[c,h,d])g.start(e),g.stop(e+n+.5);p.start(e,Math.random()),p.stop(e+n+.3)}function Ci(s,t,e,i,n,r=.5,a=0){let o=En(s,t,a),l=Math.max(1.2,2.6-Math.log2(i/220)*.5);for(let[c,h,f]of[[1,.5,l],[2,.22,l*.4],[3,.1,l*.2],[5,.04,.15]]){let d=s.createOscillator();d.type=c===1?"triangle":"sine",d.frequency.value=i*c;let u=s.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(h*r*.5,e+.004),u.gain.exponentialRampToValueAtTime(1e-4,e+f),d.connect(u),u.connect(o),d.start(e),d.stop(e+f+.05)}}function Zu(s,t,e,i,n,r=.5,a=0){let o=En(s,jn(s,t,"pizz").in,a),l=s.createOscillator();l.type="sawtooth",l.frequency.value=i;let c=s.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(r*.3,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+.35),l.connect(c),c.connect(o),l.start(e),l.stop(e+.4)}function ju(s,t,e,i,n,r=.5,a=0){let o=s.createGain();o.connect(jn(s,t,"bass").in),Pr(s,o,e,.05,r*.34,.4,.75,.25,e+n);let l=s.createOscillator();l.type="sawtooth",l.frequency.value=i,l.connect(o),l.start(e),l.stop(e+n+.5);let c=s.createOscillator();c.type="sine",c.frequency.value=i;let h=s.createGain();h.gain.value=.7,c.connect(h),h.connect(o),c.start(e),c.stop(e+n+.5)}function to(s,t,e,i,n,r=.5,a=0){let o=En(s,t,a),l=s.createBiquadFilter();l.type="lowpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,e),l.frequency.linearRampToValueAtTime(900+i*1.2*r,e+.12),l.frequency.setTargetAtTime(700+i*.6,e+.2,.3),l.connect(o);let c=s.createGain();c.connect(l),Pr(s,c,e,.08,r*.26,.3,.8,.2,e+n);for(let h of[-5,5]){let f=s.createOscillator();f.type="sawtooth",f.frequency.value=i,f.detune.value=h,f.connect(c),f.start(e),f.stop(e+n+.6)}}function Ju(s,t,e,i,n,r=.5,a=0){let o=jn(s,t,"choir"),l=En(s,o.in,a),c=s.createGain();c.connect(l),Pr(s,c,e,.4,r*.32,.3,.85,.6,e+n);for(let h=0;h<2;h++){let f=s.createOscillator();f.type="sawtooth",f.frequency.value=i,f.detune.value=(h-.5)*12,o.vib.connect(f.detune),f.connect(c),f.start(e),f.stop(e+n+1)}}function Kp(s,t,e,i,n,r=.5,a=0){let o=En(s,t,a),l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,l.connect(o);let c=s.createGain();c.connect(l),Pr(s,c,e,.03,r*.13,.1,.9,.08,e+n);let h=s.createOscillator();h.frequency.value=6;let f=s.createGain();f.gain.value=r*.025,h.connect(f),f.connect(c.gain);for(let[d,u,p]of[["square",-8,.5],["sawtooth",8,.6],["square",1200,.15]]){let x=s.createOscillator();x.type=d,x.frequency.value=i,x.detune.value=u;let m=s.createGain();m.gain.value=p,x.connect(m),m.connect(c),x.start(e),x.stop(e+n+.3)}h.start(e),h.stop(e+n+.3)}function $e(s,t,e,i,n,r=.5,a=0){let o=En(s,t,a);for(let[l,c,h]of[[1,.5,1.6],[2.76,.25,.8],[5.4,.12,.4],[8.93,.05,.2]]){let f=s.createOscillator();f.type="sine",f.frequency.value=i*l;let d=s.createGain();d.gain.setValueAtTime(1e-4,e),d.gain.linearRampToValueAtTime(c*r*.3,e+.002),d.gain.exponentialRampToValueAtTime(1e-4,e+h),f.connect(d),d.connect(o),f.start(e),f.stop(e+h+.05)}}function Tn(s,t,e,i=70,n=.7){let r=s.createOscillator();r.type="sine",r.frequency.setValueAtTime(i*1.5,e),r.frequency.exponentialRampToValueAtTime(i,e+.08);let a=s.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(n*.7,e+.005),a.gain.exponentialRampToValueAtTime(1e-4,e+1.2),r.connect(a),a.connect(t),r.start(e),r.stop(e+1.3);let o=s.createBufferSource();o.buffer=ln(s);let l=s.createGain();l.gain.setValueAtTime(n*.35,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.25),o.connect(l),l.connect(jn(s,t,"drumlow").in),o.start(e,Math.random()),o.stop(e+.3)}function eo(s,t,e,i=.8){Tn(s,t,e,55,i)}function Ir(s,t,e,i=.5){let n=s.createBufferSource();n.buffer=ln(s);let r=s.createGain();r.gain.setValueAtTime(i*.4,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(r),r.connect(jn(s,t,"snare").in),n.start(e,Math.random()),n.stop(e+.2);let a=s.createOscillator();a.type="triangle",a.frequency.setValueAtTime(220,e),a.frequency.exponentialRampToValueAtTime(140,e+.05);let o=s.createGain();o.gain.setValueAtTime(i*.3,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.1),a.connect(o),o.connect(t),a.start(e),a.stop(e+.12)}function Rs(s,t,e,i=.4,n=2){let r=s.createBufferSource();r.buffer=ln(s);let a=s.createBiquadFilter();a.type="highpass",a.frequency.value=5e3;let o=s.createGain();o.gain.setValueAtTime(i*.25,e),o.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(a),a.connect(o),o.connect(t),r.start(e,Math.random()),r.stop(e+n)}function $c(s,t,e,i=.3){let n=s.createBufferSource();n.buffer=ln(s);let r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(i*.12,e+.015),r.gain.exponentialRampToValueAtTime(1e-4,e+.07),n.connect(r),r.connect(jn(s,t,"hat").in),n.start(e,Math.random()),n.stop(e+.08)}function Qp(s,t,e,i=.3){$c(s,t,e,i*1.4);for(let n of[6800,8200]){let r=s.createOscillator();r.type="square",r.frequency.value=n;let a=s.createGain();a.gain.setValueAtTime(i*.015,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.15),r.connect(a),a.connect(t),r.start(e),r.stop(e+.16)}}function io(s,t=2.8,e=3.2){let i=s.sampleRate,n=Math.floor(i*t),r=s.createBuffer(2,n,i);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<i*.01?l/(i*.01):1)}}return r}var s0={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function v1(s){let t=/^([A-G])([#b]?)(-?\d)$/.exec(s);if(!t)throw new Error("note "+s);return 12*(Number(t[3])+1)+s0[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)}function y1(s){return s.split(/\s+/).filter(t=>t&&t!=="|").map(t=>{let[e,i]=t.split(":");return[e==="r"?null:v1(e),Number(i)]})}var e0={"":[0,4,7],m:[0,3,7],7:[0,4,7,10],m7:[0,3,7,10],maj7:[0,4,7,11],m9:[0,3,7,10,14],sus4:[0,5,7],add9:[0,4,7,14],dim:[0,3,6],9:[0,4,7,10,14]};function _1(s){let[t,e]=s.split("/"),i=/^([A-G][#b]?)(.*)$/.exec(t),n=i0(i[1]),r=e0[i[2]]??e0[""];return{root:n,tones:r,bass:e?i0(e):n}}function i0(s){return(s0[s[0]]+(s[1]==="#"?1:s[1]==="b"?-1:0)+12)%12}function hn(s,t,e){let i=[];for(let n=t;n<=e;n++){let r=((n-s.root)%12+12)%12;s.tones.some(a=>a%12===r)&&i.push(n)}return i}var jc={title:{bpm:74,beats:4,key:0,chords:"D | A/C# | Bm | G | D/F# | G | Em7 | A | D | A/C# | Bm | F#m/A | G | D/F# | Em7 A | D",mel:"F#5:2 A5:1 D6:1 | C#6:3 E5:1 | F#5:1.5 E5:0.5 D5:1 F#5:1 | B4:3 r:1 | A4:1 D5:1 F#5:1 A5:1 | G5:2 B5:2 | A5:1 G5:1 F#5:1 E5:1 | E5:3 r:1 | F#5:2 A5:1 D6:1 | E6:2 C#6:2 | D6:1 C#6:0.5 B5:0.5 A5:1 F#5:1 | A5:3 r:1 | B5:1 A5:1 G5:1 B5:1 | A5:2 F#5:1 D5:1 | E5:1 G5:1 F#5:1 E5:1 | D5:4",lead:"flute",layers:["pianoArp","pad","bassLong"],drums:null,intro:2},field:{bpm:96,beats:4,chords:"G | D/F# | Em | C | G/B | C | Am7 | D | G | D/F# | Em | Bm | C | G/B | Am7 D | G | Em | C | G | D | Em | C | Am | D | C | D | Bm | Em | Am | D/F# | G D | G",mel:"D5:1 G5:1 A5:1 B5:1 | A5:1.5 G5:0.5 F#5:2 | G5:1 E5:1 B4:1 E5:1 | C5:3 r:1 | B4:1 D5:1 G5:1 B5:1 | C6:2 B5:1 A5:1 | G5:1 E5:1 A5:1.5 G5:0.5 | F#5:3 r:1 | D5:1 G5:1 A5:1 B5:1 | D6:1.5 C6:0.5 B5:1 A5:1 | B5:1 G5:1 E5:1 G5:1 | F#5:2 D5:2 | E5:1 G5:1 C6:1 B5:1 | A5:1 G5:1 D5:1 G5:1 | A5:1 C6:1 B5:1 A5:1 | G5:4 | B5:2 A5:1 G5:1 | E5:3 G5:1 | D5:1 G5:1 B5:1 D6:1 | A5:3 r:1 | B5:1.5 A5:0.5 G5:1 E5:1 | G5:2 E5:2 | C5:1 E5:1 A5:1 C6:1 | B5:2 A5:2 | G5:1 A5:1 B5:1 C6:1 | D6:2 A5:2 | B5:1 A5:1 F#5:1 D5:1 | E5:3 r:1 | E5:1 F#5:1 G5:1 A5:1 | F#5:1 E5:1 D5:1 F#5:1 | G5:1.5 A5:0.5 B5:1 A5:1 | G5:4",lead:"flute",lead2:{from:16,inst:"violin"},layers:["harpArp","padSoft","pizz"],drums:"light"},night:{bpm:64,beats:4,chords:"Em9 | Cmaj7 | G | D/F# | Em | Am7 | Bsus4 | B | Em | Cmaj7 | G/B | Am7 | Cmaj7 | D | Bsus4 B | Em",mel:"B4:2 G5:2 | E5:3 r:1 | D5:1 B4:1 D5:1 G5:1 | F#5:3 r:1 | G5:1 F#5:1 E5:1 B4:1 | C5:2 E5:2 | F#5:2 E5:1 D#5:1 | D#5:4 | B4:2 G5:2 | B5:2 A5:1 G5:1 | D5:3 G5:1 | A5:2 E5:2 | G5:1 F#5:1 E5:1 G5:1 | A5:2 F#5:2 | E5:1 F#5:1 D#5:2 | E5:4",lead:"piano",layers:["pianoArpSlow","padSoft","bassLong"],drums:null},town:{bpm:140,beats:3,chords:"F | F | C | C | Dm | Bb | C | C7 | F | F | C | Am | Bb | C | F | F | Bb | Bb | F | F | Gm | C | F | F | Bb | C | Am | Dm | Gm7 | C7 | F | F",mel:"C5:1 F5:1 A5:1 | C6:2 A5:1 | G5:1 E5:1 C5:1 | G5:3 | F5:1 A5:1 D6:1 | D6:2 C6:1 | Bb5:1 G5:1 E5:1 | C5:3 | C5:1 F5:1 A5:1 | C6:2 F6:1 | E6:1 D6:1 C6:1 | A5:3 | Bb5:1 D6:1 F6:1 | E6:1 D6:1 C6:1 | A5:1 G5:1 F5:1 | F5:3 | D6:2 C6:1 | Bb5:2 A5:1 | A5:1 G5:1 F5:1 | C5:3 | Bb5:2 A5:1 | G5:1 A5:1 Bb5:1 | A5:2 F5:1 | C5:3 | D5:1 F5:1 Bb5:1 | C6:2 E5:1 | A5:1 G5:1 F5:1 | D5:3 | G5:1 Bb5:1 D6:1 | C6:1 Bb5:1 E5:1 | F5:3 | r:3",lead:"accordion",lead2:{from:16,inst:"flute"},layers:["waltz","bassWaltz"],drums:"waltz"},lake:{bpm:82,beats:4,chords:"Am | F | C | G | Am | F | Dm7 | E | F | G | Em | Am | Dm | G | Esus4 E | Am",mel:"E5:2 A5:2 | C6:3 B5:1 | G5:2 E5:2 | D5:3 r:1 | E5:1 A5:1 B5:1 C6:1 | D6:2 C6:1 A5:1 | F5:2 A5:1 C6:1 | B5:3 r:1 | A5:1 C6:1 F6:1 E6:1 | D6:2 B5:2 | G5:1 B5:1 E6:1 D6:1 | C6:2 A5:2 | F5:1 A5:1 D6:1 C6:1 | B5:1 D6:1 G5:1 B5:1 | A5:1 B5:1 G#5:2 | A5:4",lead:"flute",layers:["harpArp","pad","bassLong","bells"],drums:null},battle:{bpm:152,beats:4,chords:"Dm | Dm | Bb | C | Dm | Dm | Gm | A | Dm | Bb | F | C | Gm | Bb | A | A7",mel:"D5:1.5 A4:0.5 D5:1 F5:1 | E5:1.5 C5:0.5 A4:2 | Bb4:1 D5:1 F5:1 Bb5:1 | A5:2 G5:2 | F5:1.5 E5:0.5 D5:1 A5:1 | D6:3 r:1 | Bb5:1 A5:1 G5:1 D5:1 | E5:2 C#5:2 | D5:1 F5:1 A5:1 D6:1 | C6:1.5 Bb5:0.5 A5:1 F5:1 | A5:1 G5:1 F5:1 C5:1 | E5:2 G5:2 | Bb5:1 A5:1 G5:1 Bb5:1 | D6:2 F6:2 | E6:1 D6:1 C#6:1 A5:1 | E6:4",lead:"horn",lead2:{from:0,inst:"violin",oct:12},layers:["ostinato","padStab","bassDrive"],drums:"battle",reps:2},ruins:{bpm:68,beats:4,chords:"C#m | A | F#m | G#sus4 G# | C#m | E | B | G# | A | E/G# | F#m | C#m | A | B | G#sus4 | G#",mel:"G#5:3 E5:1 | C#5:4 | F#5:2 A5:2 | G#5:4 | E5:1 G#5:1 C#6:2 | B5:3 r:1 | D#5:2 F#5:2 | C5:4 | C#6:2 B5:1 A5:1 | G#5:4 | F#5:1 E5:1 F#5:1 A5:1 | G#5:4 | A5:2 E5:2 | F#5:2 D#5:2 | E5:1 D#5:1 C#5:1 C5:1 | C#5:4",lead:"piano",layers:["choirPad","bassLong","bells"],drums:"ruins"},boss:{bpm:160,beats:4,chords:"Bm | Bm | G | A | Bm | F#m | G | F# | Em | G | Bm | F# | G | A | F# | F#7",mel:"B4:2 F#5:2 | D5:1 C#5:1 B4:2 | G5:2 F#5:1 E5:1 | C#5:4 | B4:1 D5:1 F#5:1 B5:1 | A5:2 C#5:2 | B5:1 A5:1 G5:1 D5:1 | F#5:4 | E5:2 G5:2 | B5:2 D6:2 | F#6:2 E6:1 D6:1 | C#6:4 | D6:1 C#6:1 B5:1 G5:1 | A5:1 B5:1 C#6:1 E6:1 | F#6:3 E6:1 | F#6:4",lead:"choir",lead2:{from:0,inst:"horn",oct:-12},layers:["ostinato","padStab","bassDrive","choirPad"],drums:"boss",reps:2},ending:{bpm:70,beats:4,chords:"D | A/C# | Bm | G | D/F# | G | Em7 | A | D | A/C# | Bm | F#m/A | G | D/F# | Em7 A | D",mel:"F#5:2 A5:1 D6:1 | C#6:3 E5:1 | F#5:1.5 E5:0.5 D5:1 F#5:1 | B4:3 r:1 | A4:1 D5:1 F#5:1 A5:1 | G5:2 B5:2 | A5:1 G5:1 F#5:1 E5:1 | E5:3 r:1 | F#5:2 A5:1 D6:1 | E6:2 C#6:2 | D6:1 C#6:0.5 B5:0.5 A5:1 F#5:1 | A5:3 r:1 | B5:1 A5:1 G5:1 B5:1 | A5:2 F#5:1 D5:1 | E5:1 G5:1 F#5:1 E5:1 | D5:4",lead:"violin",lead2:{from:0,inst:"flute",oct:12},layers:["harpArp","pad","bassLong","pianoArpSlow"],drums:"ending"}};var n0={flute:Jp,piano:Yc,violin:jp,horn:to,choir:Ju,accordion:Kp};function r0(s){let t=60/s.bpm,e=s.beats,i=s.chords.split("|").map(a=>a.trim().split(/\s+/).map(_1)),n=[],r=0;for(let[a,o]of y1(s.mel))a!=null&&n.push({beat:r,m:a,beats:o}),r+=o;return{song:s,spb:t,B:e,bars:i.length,chords:i,mel:n}}function a0(s,t,e,i,n,r){let{song:a,spb:o,B:l}=t,c=n0[a.lead];for(let f of t.mel){if(f.beat<i*l||f.beat>=(i+1)*l)continue;let d=n+(f.beat-i*l)*o,u=f.beats*o*.95,p=.55+(f.beat%l===0?.1:0)+Math.random()*.05;a.intro&&r===0&&i<a.intro&&a.lead!=="piano"||c(s,e,d,Le(f.m),u,p*(a.lead==="choir"?.8:1),-.05),a.lead2&&i>=a.lead2.from&&n0[a.lead2.inst](s,e,d,Le(f.m+(a.lead2.oct||0)),u,p*.55,.25)}let h=t.chords[i];for(let f=0;f<h.length;f++){let d=l/h.length,u=n+f*d*o;for(let p of a.layers)M1[p](s,e,u,h[f],d,o,i,a);a.drums&&S1[a.drums](s,e,u,d,o,i,f,t.bars)}}function b1(s,t,e,i=1e9){let n=r0(t),r=t.reps||1,a=.05,o=0;for(let l=0;l<r;l++)for(let c=0;c<n.bars&&o<i;c++,o++)a0(s,n,e,c,a,l),a+=n.B*n.spb;return a}var Zc=class{constructor(t,e){this.ctx=t,this.out=e,this.cur=null,this.cache={}}play(t){let e=this.ctx,i=e.currentTime;if(this.cur&&this.cur.name===t)return;if(this.cur){let a=this.cur.g;a.gain.cancelScheduledValues(i),a.gain.setValueAtTime(a.gain.value,i),a.gain.linearRampToValueAtTime(0,i+2);let o=a;setTimeout(()=>o.disconnect(),4500),this.cur=null}if(!t)return;let n=this.cache[t]||(this.cache[t]=r0(jc[t])),r=e.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(1,i+1.8),r.connect(this.out),this.cur={name:t,P:n,g:r,bar:0,rep:0,next:i+.15}}tick(){let t=this.ctx,e=this.cur;if(!e)return;let i=t.currentTime+1.2;for(e.next<t.currentTime-1&&(e.next=t.currentTime+.1);e.next<i;)a0(t,e.P,e.g,e.bar,e.next,e.rep),e.next+=e.P.B*e.P.spb,e.bar++,e.bar>=e.P.bars&&(e.bar=0,e.rep++)}},M1={pianoArp(s,t,e,i,n,r){let a=hn(i,50,76),o=[a[0],a[2],a[4]??a[3],a[3]??a[2],a[5]??a[4]??a[3],a[3],a[2],a[1]],l=Math.round(n*2);for(let c=0;c<l;c++)Yc(s,t,e+c*r/2,Le(o[c%o.length]),r*1.4,.34-c%2*.06,(c%4-1.5)*.15)},pianoArpSlow(s,t,e,i,n,r){let a=hn(i,45,72),o=Math.round(n);for(let l=0;l<o;l++)Yc(s,t,e+l*r,Le(a[[0,2,3,1][l%4]]??a[0]),r*2,.3,l%2?.2:-.2)},harpArp(s,t,e,i,n,r){let a=hn(i,55,84),o=Math.round(n*2);for(let l=0;l<o;l++)Ci(s,t,e+l*r/2,Le(a[l*1%Math.min(a.length,6)]),r,.42,.35)},pad(s,t,e,i,n,r){let a=hn(i,55,74).slice(0,4);for(let[o,l]of a.entries())cn(s,t,e,Le(l),n*r*1.02,.42,(o-1.5)*.3)},padSoft(s,t,e,i,n,r){let a=hn(i,52,71).slice(0,3);for(let[o,l]of a.entries())cn(s,t,e,Le(l),n*r*1.02,.28,(o-1)*.4,{attack:.5,bright:.8})},padStab(s,t,e,i,n,r,a){let o=hn(i,55,72).slice(0,4);for(let[l,c]of o.entries())cn(s,t,e,Le(c),r*.9,.5,(l-1.5)*.3,{attack:.02,release:.15,bright:1.4,voices:2}),n>=4&&cn(s,t,e+r*2.5,Le(c),r*1.4,.42,(l-1.5)*.3,{attack:.03,bright:1.3,voices:2})},choirPad(s,t,e,i,n,r){let a=hn(i,52,69).slice(0,3);for(let[o,l]of a.entries())Ju(s,t,e,Le(l),n*r,.35,(o-1)*.4)},bassLong(s,t,e,i,n,r){ju(s,t,e,Le(36+i.bass<40?36+i.bass+12:36+i.bass),n*r*.98,.5)},pizz(s,t,e,i,n,r){let a=40+(i.bass-4+12)%12,o=a+7;for(let l=0;l<n;l++)Zu(s,t,e+l*r,Le(l%2?o:a),r,.55,-.25)},bassDrive(s,t,e,i,n,r){let a=33+(i.bass+3)%12;for(let o=0;o<n*2;o++)ju(s,t,e+o*r/2,Le(a+(o%4===3?12:0)),r*.42,.55)},ostinato(s,t,e,i,n,r){let a=hn(i,50,66),o=[0,2,1,2,0,2,1,3];for(let l=0;l<n*4;l++)cn(s,t,e+l*r/4,Le(a[o[l%8]]??a[0]),r/4*.85,.5,l%2?.3:-.3,{attack:.01,release:.05,voices:1,bright:1.6})},waltz(s,t,e,i,n,r){let a=hn(i,57,72).slice(0,3);for(let o=1;o<3;o++)for(let l of a)Ci(s,t,e+o*r,Le(l),r*.6,.32,.2)},bassWaltz(s,t,e,i,n,r,a){Zu(s,t,e,Le(40+(i.bass-4+12)%12+(a%2?7:0)),r,.7,-.15)},bells(s,t,e,i,n,r,a){if(a%2)return;let o=hn(i,76,90);$e(s,t,e+r*.5,Le(o[0]),1,.35,.4),$e(s,t,e+r*1.5,Le(o[2]??o[1]),1,.3,-.4)}},S1={light(s,t,e,i,n,r){for(let a=0;a<i*2;a++)$c(s,t,e+a*n/2,a%2?.25:.4);r%4===0&&Tn(s,t,e,75,.25)},waltz(s,t,e,i,n,r){Tn(s,t,e,90,.2);for(let a=1;a<3;a++)Qp(s,t,e+a*n,.35)},battle(s,t,e,i,n,r,a,o){if(eo(s,t,e,.8),eo(s,t,e+n*1.5,.5),eo(s,t,e+n*2,.7),Ir(s,t,e+n,.45),Ir(s,t,e+n*3,.5),r%4===3)for(let l=0;l<8;l++)Ir(s,t,e+n*2+l*n/4,.15+l*.04);r%8===0&&Rs(s,t,e,.6,2.5);for(let l=0;l<4;l++)$c(s,t,e+l*n,.35)},boss(s,t,e,i,n,r){for(let a of[0,.75,1.5,2,2.75,3.5])eo(s,t,e+a*n,a===0||a===2?.95:.55);Ir(s,t,e+n,.5),Ir(s,t,e+n*3,.55),r%4===0&&Rs(s,t,e,.7,3),r%2===1&&Tn(s,t,e+n*3.5,62,.6)},ruins(s,t,e,i,n,r){r%2===0&&Tn(s,t,e,50,.35),r%4===3&&Rs(s,t,e+n*3,.15,3)},ending(s,t,e,i,n,r){r%4===0&&(Tn(s,t,e,70,.3),Rs(s,t,e,.2,3))}};async function o0(s,t=44100,e=1e9){let i=jc[s],n=60/i.bpm,a=.05+Math.min(e,i.chords.split("|").length*(i.reps||1))*i.beats*n,o=3,l=new OfflineAudioContext(2,Math.ceil((a+o)*t),t),c=l.createGain();c.gain.value=.75;let h=l.createDynamicsCompressor();h.threshold.value=-16,h.ratio.value=3,h.attack.value=.01,h.release.value=.25;let f=l.createGain();f.gain.value=.9;let d=l.createConvolver();d.buffer=io(l,s==="battle"||s==="boss"?1.8:2.8,3);let u=l.createGain();u.gain.value=s==="battle"||s==="boss"?.22:.38;let p=l.createGain();p.connect(c),c.connect(h),p.connect(d),d.connect(u),u.connect(h),h.connect(f),f.connect(l.destination),b1(l,i,p,e);let x=await l.startRendering(),m=Math.ceil(a*t),g=new AudioBuffer({numberOfChannels:2,length:m,sampleRate:t});for(let v=0;v<2;v++){let b=x.getChannelData(v),y=g.getChannelData(v);y.set(b.subarray(0,m));for(let M=m;M<b.length;M++)y[M-m]+=b[M]}return g}var Jc=class{constructor(t){this.settings=t,this.ctx=null,this.songs={},this.rendering={},this.cur=null,this.want=null,this.queue=[],this.last={},this.stepT=0,document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.ambBus=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-10,i.ratio.value=4,this.sfxBus.connect(i),i.connect(this.master),this.ambBus.connect(this.master),this.rev=e.createConvolver(),this.rev.buffer=io(e,1.6,3.5),this.revSend=e.createGain(),this.revSend.gain.value=.25,this.revSend.connect(this.rev),this.rev.connect(this.sfxBus);let n=e.createConvolver();n.buffer=io(e,2.6,3),this.musicIn=e.createGain();let r=e.createGain();r.gain.value=.75;let a=e.createGain();a.gain.value=.34;let o=e.createDynamicsCompressor();o.threshold.value=-16,o.ratio.value=3,this.musicIn.connect(r),this.musicIn.connect(n),n.connect(a),r.connect(o),a.connect(o),o.connect(this.musicBus),As.n=matchMedia("(pointer: coarse)").matches?2:3,As.noVib=matchMedia("(pointer: coarse)").matches,this.player=new Zc(e,this.musicIn),this.recorded={},this.loading={},this.failed={},this.apply(),this.startAmbience(),this.timer=setInterval(()=>{this.ctx.state==="running"&&this.player.tick()},200),this.want&&this.music(this.want);let l=0,c=["title","field","battle","town","lake","night","ruins","boss","ending"],h=()=>{l<c.length&&(this.load(c[l++]),setTimeout(h,1500))};h()}apply(){if(!this.ctx)return;let t=this.settings;this.musicBus.gain.value=.95*(t.music??.7),this.sfxBus.gain.value=.9*(t.sfx??.8),this.ambBus.gain.value=.5*(t.amb??.6)}load(t){this.recorded[t]||this.loading[t]||this.failed[t]||!this.ctx||(this.loading[t]=fetch("music/"+t+".ogg").then(e=>{if(!e.ok)throw new Error(e.status);return e.arrayBuffer()}).then(e=>new Promise((i,n)=>this.ctx.decodeAudioData(e,i,n))).then(e=>{this.recorded[t]=e,this.want===t&&(this.playing=null,this.music(t))}).catch(e=>{console.warn("music fallback",t,e&&e.message),this.failed[t]=!0,this.want===t&&(this.playing=null,this.music(t))}).finally(()=>{this.loading[t]=null}))}music(t){if(this.want=t,!this.ctx||this.playing===t)return;let e=this.ctx,i=e.currentTime;if(this.cur){let n=this.cur.g,r=this.cur.src;n.gain.cancelScheduledValues(i),n.gain.setValueAtTime(n.gain.value,i),n.gain.linearRampToValueAtTime(0,i+2),setTimeout(()=>{try{r.stop()}catch{}n.disconnect()},2300),this.cur=null}if(this.player.play(null),this.playing=t,!!t)if(this.recorded[t]){let n=e.createBufferSource();n.buffer=this.recorded[t],n.loop=!0;let r=e.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(1,i+2),n.connect(r),r.connect(this.musicBus),n.start(i+.05),this.cur={name:t,src:n,g:r}}else this.failed[t]?(this.player.play(t),this.player.tick()):(this.playing=null,this.load(t))}update(t,e){if(!this.ctx)return;if(this.chooseT=(this.chooseT||0)-t,this.chooseT<=0){this.chooseT=.5;let n=e.mover.p,r=e.hour,a;e.boss&&!e.boss.dead&&e.boss.state!=="idle"?a="boss":e.battle.inCombatT>.5&&e.enemies.some(o=>!o.dead&&(o.state==="chase"||o.state==="attack"))?a="battle":Math.hypot(n.x-330,n.z-330)<115?a="town":n.z<-330?a="ruins":r<5.3||r>19.2?a="night":Math.hypot(n.x,n.z)<230||n.x<-280?a="lake":a="field",this.forced&&(a=this.forced),a!==this.want&&this.music(a)}let i=e.mover;i.mode==="ground"&&i.speed>.8&&(this.stepT-=t*i.speed*.42,this.stepT<=0&&(this.stepT=1,this.step(e))),this.glideG&&this.glideG.gain.setTargetAtTime(i.mode==="glide"?.35:i.speed>8?.1:0,this.ctx.currentTime,.2),this.birdT==null&&(this.birdT=3),this.birdT-=t,this.birdT<=0&&(this.birdT=2+Math.random()*6,e.hour>5.5&&e.hour<18.5?this.bird():this.cricket())}sfx(t,e){if(!this.ctx)return;let i=this.ctx,n=i.currentTime,r=this.sfxBus,a=performance.now();if(this.last[t]&&a-this.last[t]<30)return;this.last[t]=a;let o=(h,f,d,u,p=1)=>{let x=i.createBufferSource();x.buffer=ln(i);let m=i.createBiquadFilter();m.type="bandpass",m.Q.value=p,m.frequency.setValueAtTime(h,n),m.frequency.exponentialRampToValueAtTime(f,n+d);let g=i.createGain();g.gain.setValueAtTime(1e-4,n),g.gain.linearRampToValueAtTime(u,n+d*.3),g.gain.exponentialRampToValueAtTime(1e-4,n+d),x.connect(m),m.connect(g),g.connect(r),x.start(n,Math.random()),x.stop(n+d+.05)},l=(h,f,d=.2)=>{let u=i.createOscillator();u.type="sine",u.frequency.setValueAtTime(h*2,n),u.frequency.exponentialRampToValueAtTime(h,n+.06);let p=i.createGain();p.gain.setValueAtTime(f,n),p.gain.exponentialRampToValueAtTime(1e-4,n+d),u.connect(p),p.connect(r),u.start(n),u.stop(n+d+.05)},c=(h,f,d=$e,u=.5)=>h.forEach((p,x)=>d(i,r,n+x*f,Le(p),.6,u));switch(t){case"swing":o(1800,600,.18,.5,.8);break;case"heavy":o(900,250,.32,.7,.7);break;case"hit":l(90,.6),o(3e3,1200,.08,e?.5:.3,1.2);break;case"hitEl":l(110,.45),o(5e3,2e3,.12,.3,2),e&&c([88],0,$e,.3);break;case"bow":o(2500,4e3,.12,.3,3);break;case"bowCharged":o(1500,5e3,.25,.45,2),$e(i,this.revSend,n,1600,.4,.4);break;case"cast":o(600,1800,.2,.3,4),$e(i,this.revSend,n,900,.4,.25);break;case"jump":o(400,900,.15,.2,1);break;case"land":l(70,.25,.12);break;case"dash":o(800,2400,.22,.35,.8);break;case"glide":o(500,1500,.4,.3,.6);break;case"splash":o(1200,400,.4,.5,.5);break;case"switch":c([79,84],.05,$e,.35),o(600,2e3,.2,.2,2);break;case"skill_wind":o(300,2600,.6,.6,1.5),c([74,81],.06,Ci,.4);break;case"skill_fire":o(200,900,.5,.6,.6),l(60,.6,.4);break;case"skill_water":c([79,83,86,91],.05,Ci,.45),o(1500,500,.5,.3,3);break;case"skill_thunder":o(4e3,800,.3,.5,2),l(80,.5);break;case"burst":o(200,4e3,1,.7,.8),c([62,69,74,78,81],.07,Ci,.5),Tn(i,r,n+.6,60,.9),Rs(i,r,n+.6,.5,2);break;case"thunder":o(6e3,300,.4,.5,.4),l(50,.5,.5);break;case"explode":l(45,.9,.6),o(2e3,100,.6,.6,.4);break;case"ice":o(7e3,3e3,.25,.35,3),$e(i,r,n,2200,.3,.25);break;case"reaction":c([84,91],.03,$e,.3);break;case"kill":o(800,200,.5,.25,.5);break;case"hurt":l(70,.6,.25),o(1200,400,.15,.3,1);break;case"pickup":c([84,88],.06,$e,.4);break;case"crystal":c([86,90,93,98],.06,$e,.4);break;case"chest":c([72,76,79,84,88],.08,Ci,.6),$e(i,this.revSend,n+.4,Le(96),.8,.4);break;case"unlock":c([74,78,81,86],.09,Ci,.5);break;case"shrine":c([62,69,74,78,81,86,90],.11,Ci,.6),cn(i,r,n+.3,Le(74),2.2,.5),cn(i,r,n+.3,Le(78),2.2,.4);break;case"levelup":c([72,76,79,84],.09,Ci,.6),to(i,r,n+.36,Le(72),.6,.5),to(i,r,n+.36,Le(79),.6,.4);break;case"quest":c([79,84,91],.12,$e,.45);break;case"join":c([67,71,74,79,83],.1,Ci,.55);break;case"warp":o(300,3e3,.7,.4,2),c([84,91,96],.1,$e,.3);break;case"ring":c([86,93],.05,$e,.45);break;case"ui":$e(i,r,n,1400,.1,.18);break;case"talk":$e(i,r,n,1100,.05,.08);break;case"buy":c([84,88,91],.05,$e,.35);break;case"eat":c([76,81],.08,Ci,.4);break}}step(t){let e=this.ctx,i=e.currentTime,n=t.mover.p,r=Math.hypot(n.x-330,n.z-330)<100,a=e.createBufferSource();a.buffer=ln(e);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=r?1800:2600+Math.random()*1200,o.Q.value=r?2:.8;let l=e.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(r?.14:.08,i+.01),l.gain.exponentialRampToValueAtTime(1e-4,i+(r?.06:.12)),a.connect(o),o.connect(l),l.connect(this.sfxBus),a.start(i,Math.random()),a.stop(i+.15)}bird(){let t=this.ctx,e=t.currentTime+.05,i=2+Math.floor(Math.random()*4),n=2600+Math.random()*1600,r=t.createStereoPanner();r.pan.value=Math.random()*2-1,r.connect(this.ambBus);for(let a=0;a<i;a++){let o=t.createOscillator();o.type="sine";let l=e+a*.13;o.frequency.setValueAtTime(n,l),o.frequency.exponentialRampToValueAtTime(n*(1.3+Math.random()*.3),l+.06),o.frequency.exponentialRampToValueAtTime(n*.9,l+.1);let c=t.createGain();c.gain.setValueAtTime(1e-4,l),c.gain.linearRampToValueAtTime(.05,l+.02),c.gain.exponentialRampToValueAtTime(1e-4,l+.11),o.connect(c),c.connect(r),o.start(l),o.stop(l+.12)}}cricket(){let t=this.ctx,e=t.currentTime+.05,i=t.createStereoPanner();i.pan.value=Math.random()*2-1,i.connect(this.ambBus);for(let n=0;n<12;n++){let r=t.createOscillator();r.type="sine",r.frequency.value=4400;let a=e+n*.045+Math.floor(n/4)*.12,o=t.createGain();o.gain.setValueAtTime(1e-4,a),o.gain.linearRampToValueAtTime(.025,a+.008),o.gain.exponentialRampToValueAtTime(1e-4,a+.03),r.connect(o),o.connect(i),r.start(a),r.stop(a+.04)}}startAmbience(){let t=this.ctx,e=t.createBufferSource();e.buffer=ln(t),e.loop=!0;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=500,i.Q.value=.6;let n=t.createOscillator();n.frequency.value=.08;let r=t.createGain();r.gain.value=250,n.connect(r),r.connect(i.frequency);let a=t.createGain();a.gain.value=.08;let o=t.createOscillator();o.frequency.value=.13;let l=t.createGain();l.gain.value=.05,o.connect(l),l.connect(a.gain),e.connect(i),i.connect(a),a.connect(this.ambBus),e.start(),n.start(),o.start();let c=t.createBufferSource();c.buffer=ln(t),c.loop=!0;let h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=1200,h.Q.value=.4,this.glideG=t.createGain(),this.glideG.gain.value=0,c.connect(h),h.connect(this.glideG),this.glideG.connect(this.sfxBus),c.start()}};var l0="./";function Kc(s){let t=document.getElementById("ui"),e=document.getElementById("errbox");e||(e=document.createElement("div"),e.id="errbox",t.appendChild(e)),e.innerHTML=`<b>\u554F\u984C\u304C\u8D77\u304D\u307E\u3057\u305F</b><br>${String(s).replace(/[<>&]/g,"")}<br><small>\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u304B\u3001\u30E1\u30CB\u30E5\u30FC\u306E\u8A2D\u5B9A\u3067\u753B\u8CEA\u3092\u300C\u4F4E\u300D\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u6587\u9762\u3092\u6559\u3048\u3066\u3044\u305F\u3060\u3051\u308C\u3070\u76F4\u3057\u307E\u3059\u3002</small><br><button onclick="location.reload()">\u518D\u8AAD\u307F\u8FBC\u307F</button>`}addEventListener("error",s=>Kc((s.message||s.error)+" @"+(s.filename||"").split("/").pop()+":"+(s.lineno||"")));addEventListener("unhandledrejection",s=>Kc(s.reason&&(s.reason.message||s.reason)));var c0=document.createElement("style");c0.textContent=hp+up;document.head.appendChild(c0);var h0="lumiera.settings";function w1(){let s={};try{s=JSON.parse(localStorage.getItem(h0)||"{}")}catch{}let t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,e=!1;try{let i=document.createElement("canvas").getContext("webgl2"),n=i&&i.getExtension("WEBGL_debug_renderer_info"),r=n?i.getParameter(n.UNMASKED_RENDERER_WEBGL):"";e=/Intel|UHD|Iris|Radeon\(TM\) Graphics|Vega \d+ Graphics|Microsoft Basic|SwiftShader|llvmpipe|Mali|Adreno|PowerVR/i.test(r),window.__lmGpu=r}catch{}return{quality:t||e?"mid":"high",music:.7,sfx:.8,amb:.6,sens:1,autoCam:t,...s}}async function E1(){let s=document.getElementById("ui");if(!document.createElement("canvas").getContext("webgl2")){s.innerHTML='<div class="loading"><div class="lt">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="lmsg">\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306F WebGL2 \u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u904A\u3079\u307E\u305B\u3093\u3002Chrome\u30FBEdge\u30FBSafari \u306E\u6700\u65B0\u7248\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002</div></div>';return}s.innerHTML='<div class="loading"><div class="lt">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="lbar"><i></i></div><div class="lmsg">\u4E16\u754C\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</div></div>';let e=s.querySelector(".lbar i"),i=new URLSearchParams(location.search),n=w1(),r=i.get("q")||n.quality,a=new wc(document.getElementById("app"),r),o=s.querySelector(".lmsg");o.textContent="\u5927\u5730\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026\uFF081/3\uFF09";let l=await dp(l0);e.style.width="20%",o.textContent="\u666F\u8272\u306E\u7D20\u6750\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026\uFF082/3\uFF09";let c=await fp(l0,a.renderer,G=>{e.style.width=20+G*60+"%"});o.textContent="\u4E16\u754C\u3092\u7D44\u307F\u7ACB\u3066\u3066\u3044\u307E\u3059\u2026\uFF083/3\uFF09",await new Promise(G=>setTimeout(G,30));let h=pp(l),f=new Sc(a.scene),d=new Ec(a.scene,l,c),u=new Tc(a.scene,h,l);r==="high"&&(u.enableReflection(a.renderer,Math.round(innerWidth*.4),Math.round(innerHeight*.4)),addEventListener("resize",()=>u.resizeReflection(Math.round(innerWidth*.4),Math.round(innerHeight*.4))));let p=new Ac(a.scene,h,c.splat,l,r,c.flowers),x=new Rc(a.scene,l,c,r);e.style.width="90%",await new Promise(G=>setTimeout(G,30)),window.__lm={R:a,world:l,get fps(){return window.__lmFps}};let m=i.get("view"),g=!!i.get("cam"),v=m==="chars"?Ip(a,c,l,i):null,b=new Lc(a.canvas,s);b.sens=n.sens;let y=new Jc(n);window.__lm.audio=y,window.__lm.renderSong=o0,window.__lm.LITE=As,window.__lm.SONGS=jc;let M=null,w={x:60,z:470,y:0,yaw:Math.PI,pitch:-.12,hour:10};if(g){let[G,Y,$,At,pt]=i.get("cam").split(",").map(Number);Object.assign(w,{x:G,y:Y,z:$,yaw:At,pitch:pt})}i.get("t")&&(w.hour=Number(i.get("t"))),window.__lm.st=w;let A=G=>{M=new on({R:a,world:l,tex:c,input:b,sky:f,terrain:d,water:u,grass:p,foliage:x,audio:y}),M.settings=n,M.applySettings=()=>{b.sens=n.sens,M.camRig.autoFollow=n.autoCam,y.apply();try{localStorage.setItem(h0,JSON.stringify(n))}catch{}},i.get("nosave")&&(M.noSave=!0),M.start(G),M.applySettings(),i.get("t")&&(M.hour=Number(i.get("t"))),window.__lm.game=M,window.__lm.input=b};if(s.innerHTML="",!(v||g))if(i.get("autostart"))A(i.get("autostart")==="continue"?on.loadSave():null);else{let G=on.loadSave(),Y=document.createElement("div");Y.className="title",Y.innerHTML=`<div class="tl">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="ts">\u2015\u4E03\u5F69\u306E\u98A8\u3068\u9727\u306E\u5DE8\u50CF\u2015</div>
      <div class="tbtns2">${G?'<button data-a="continue">\u3064\u3065\u304D\u304B\u3089</button>':""}<button data-a="new">\u306F\u3058\u3081\u304B\u3089</button>${[1,2,3].some($=>on.slotData($))?'<button data-a="load">\u30ED\u30FC\u30C9</button>':""}</div>
      <div class="tnote">${b.touch?"\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5\u30FB\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9\u30FB\u53F3\u4E0B\u306E\u30DC\u30BF\u30F3\u3067\u653B\u6483/\u30B8\u30E3\u30F3\u30D7/\u30C0\u30C3\u30B7\u30E5":"WASD \u79FB\u52D5 \uFF0F \u30DE\u30A6\u30B9 \u8996\u70B9 \uFF0F \u5DE6\u30AF\u30EA\u30C3\u30AF \u653B\u6483\uFF08\u9577\u62BC\u3057\u3067\u6E9C\u3081\uFF09 \uFF0F Shift\u30FB\u53F3\u30AF\u30EA\u30C3\u30AF \u30C0\u30C3\u30B7\u30E5 \uFF0F Space \u30B8\u30E3\u30F3\u30D7\u30FB\u6ED1\u7A7A \uFF0F E \u30B9\u30AD\u30EB \uFF0F Q \u7206\u767A \uFF0F 1\u301C4 \u4EA4\u4EE3 \uFF0F F \u8ABF\u3079\u308B \uFF0F M \u5730\u56F3"}<br>\u753B\u8CEA\uFF1A${{high:"\u9AD8",mid:"\u4E2D",low:"\u4F4E"}[r]}\uFF08\u30E1\u30CB\u30E5\u30FC\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\uFF09</div>`,s.appendChild(Y),Y.querySelectorAll("button").forEach($=>$.addEventListener("click",At=>{if(At.stopPropagation(),y.unlock(),$.dataset.a==="load"){let pt=Y.querySelector(".tbtns2");pt.innerHTML='<div class="loadlist">'+[1,2,3].map(Xt=>{let Bt=on.slotData(Xt);return Bt&&Bt.meta?`<button data-n="${Xt}">\u30B9\u30ED\u30C3\u30C8${Xt}\uFF1A${new Date(Bt.meta.at).toLocaleString("ja-JP")}\u3000${Bt.meta.place}\u3000Lv.${Bt.meta.lv}</button>`:""}).join("")+"</div>",pt.querySelectorAll("button").forEach(Xt=>Xt.addEventListener("click",Bt=>{Bt.stopPropagation(),pt.innerHTML='<div class="prep">\u30ED\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059\u2026</div>',on.loadSlotAndRestart(+Xt.dataset.n)}));return}$.dataset.a==="new"&&G&&!confirm("\u4FDD\u5B58\u30C7\u30FC\u30BF\u3092\u6D88\u3057\u3066\u3001\u306F\u3058\u3081\u304B\u3089\u904A\u3073\u307E\u3059\u304B\uFF1F")||($.dataset.a==="new"&&on.clearSave(),Y.querySelector(".tbtns2").innerHTML='<div class="prep">\u5192\u967A\u306E\u6E96\u5099\u3092\u3057\u3066\u3044\u307E\u3059\u2026</div>',setTimeout(()=>{try{A($.dataset.a==="continue"?G:null)}catch(pt){Kc(pt.message||pt);return}Y.classList.add("out"),setTimeout(()=>Y.remove(),800)},60))})),addEventListener("pointerdown",()=>{y.unlock(),M||y.music("title")},{once:!0})}addEventListener("pointerdown",()=>y.unlock()),addEventListener("keydown",()=>y.unlock());let _={level:0,t:0,frames:0,reflOff:!1,grace:10,lows:0},T=a.renderer.getPixelRatio();window.__lm.auto=_,window.__lm.water=u,window.__lm.grass=p;function P(G){if(!M||M.paused||M.screens.open||window.__noAuto)return;if(_.grace>0){_.grace-=G;return}if(_.t+=G,_.frames++,_.t<3)return;let Y=_.frames/_.t;if(_.t=0,_.frames=0,Y>=28||_.level>=4){_.lows=0;return}++_.lows<2||(_.lows=0,_.level++,_.level===1&&(_.reflOff=!0,u.uniforms.uReflOn.value=0,a.rays.uniforms.uI.value=0,a.raysOff=!0),_.level===2&&(a.renderer.setPixelRatio(Math.max(.6,T*.75)),a.resize()),_.level===3&&(a.bloom.enabled=!1,p.mesh.geometry.instanceCount=Math.floor(p.count*.5)),_.level===4&&(a.renderer.setPixelRatio(.55),a.resize()),M.notify(`\u52D5\u304D\u304C\u91CD\u3044\u305F\u3081\u753B\u8CEA\u3092\u81EA\u52D5\u3067\u4E0B\u3052\u307E\u3057\u305F\uFF08\u6BB5\u968E${_.level}\uFF09`,"phys"),window.__lm.autoLevel=_.level)}let I=new R,N=performance.now(),U=0,D=0,B=0,q=.4,X=new Set;g&&(addEventListener("keydown",G=>X.add(G.code)),addEventListener("keyup",G=>X.delete(G.code)));function st(G){let Y=Math.min(.066,(G-N)/1e3);N=G,U+=Y,D++,B+=Y,B>1&&(window.__lmFps=D/B,D=0,B=0);let $=a.camera,At=w.hour;if(M)M.update(Y),I.copy(M.focus),At=M.hour;else if(v)I.copy(v(Y));else if(g){let Xt=X.has("ShiftLeft")?60:12,Bt=-Math.sin(w.yaw),ce=-Math.cos(w.yaw);X.has("KeyW")&&(w.x+=Bt*Xt*Y,w.z+=ce*Xt*Y),X.has("KeyS")&&(w.x-=Bt*Xt*Y,w.z-=ce*Xt*Y),w.y=Math.max(w.y||0,l.heightAt(w.x,w.z)+.5),$.position.set(w.x,w.y,w.z),$.rotation.set(w.pitch,w.yaw,0,"YXZ"),I.set(w.x,l.heightAt(w.x,w.z),w.z)}else{q+=Y*.02;let Xt=60,Bt=440;$.position.set(Xt+Math.sin(q)*8,l.heightAt(Xt,Bt)+3.2,Bt+Math.cos(q)*8),$.lookAt(Xt-Math.sin(q)*60,l.heightAt(Xt,Bt)+8,Bt-Math.cos(q)*60),I.set($.position.x,l.heightAt($.position.x,$.position.z),$.position.z),At=9.5}let pt=a.setTime(At,I);Pu.uLightDir.value.copy(pt.lightDir),f.update(pt,$,U),u.update(pt,U),d.update($.position),p.update(U,I,M?M.focus:null),x.update(U),_.reflOff||u.renderReflection(a.renderer,a.scene,$,[p.mesh,M?.fx?.points].filter(Boolean),[]),P(Y),a.render(),requestAnimationFrame(st)}requestAnimationFrame(st)}E1().catch(s=>{console.error(s),Kc("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A"+String(s.message||s))});})();
