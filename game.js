/*! 蒼天のリュミエラ v1.4.0 — uses three.js (MIT License, Copyright © 2010-2026 three.js authors). See THIRD_PARTY_LICENSES.txt */
(()=>{var gf=0,tu=1,xf=2;var za=1,Cl=2,Mr=3,Xn=0,Qe=1,fe=2,zi=0,Yn=1,Ge=2,eu=3,iu=4,vf=5;var xs=100,yf=101,bf=102,_f=103,Mf=104,wf=200,Sf=201,Ef=202,Tf=203,nu=204,su=205,Af=206,Rf=207,Cf=208,Pf=209,If=210,Lf=211,Df=212,zf=213,Nf=214,Xo=0,Yo=1,$o=2,nr=3,jo=4,Zo=5,Jo=6,Ko=7,Pl=0,kf=1,Ff=2,Vi=0,Na=1,ka=2,Fa=3,vs=4,Ua=5,Ba=6,Oa=7;var ru=300,$n=301,ys=302,Il=303,Ll=304,Ha=306,sr=1e3,ji=1001,Qo=1002,He=1003,Uf=1004;var Ga=1005;var si=1006,Dl=1007;var jn=1008;var vi=1009,au=1010,ou=1011,wr=1012,zl=1013,Wi=1014,yi=1015,Ye=1016,Nl=1017,kl=1018,Sr=1020,lu=35902,cu=35899,hu=1021,uu=1022,bi=1023,Ki=1026,Zn=1027,Er=1028,Fl=1029,Jn=1030,Ul=1031;var Bl=1033,Va=33776,Wa=33777,qa=33778,Xa=33779,Ol=35840,Hl=35841,Gl=35842,Vl=35843,Wl=36196,ql=37492,Xl=37496,Yl=37488,$l=37489,Ya=37490,jl=37491,Zl=37808,Jl=37809,Kl=37810,Ql=37811,tc=37812,ec=37813,ic=37814,nc=37815,sc=37816,rc=37817,ac=37818,oc=37819,lc=37820,cc=37821,hc=36492,uc=36494,dc=36495,fc=36283,pc=36284,$a=36285,mc=36286;var ea=2300,tl=2301,Vo=2302,Vh=2303,Wh=2400,qh=2401,Xh=2402;var Bf=3200;var Tr=0,Of=1,Ni="",Ue="srgb",ia="srgb-linear",na="linear",me="srgb";var Wo=7680;var Hf=519,Gf=512,Vf=513,Wf=514,gc=515,qf=516,Xf=517,xc=518,Yf=519,du=35044;var fu="300 es",Gi=2e3,rr=2001;function j0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Z0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ar(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $f(){let s=ar("canvas");return s.style.display="block",s}var Pd={},or=null;function sa(...s){let t="THREE."+s.shift();or?or("log",t,...s):console.log(t,...s)}function jf(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Gt(...s){s=jf(s);let t="THREE."+s.shift();if(or)or("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function qt(...s){s=jf(s);let t="THREE."+s.shift();if(or)or("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function as(...s){let t=s.join(" ");t in Pd||(Pd[t]=!0,Gt(...s))}function Zf(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Jf={[Xo]:Yo,[$o]:Jo,[jo]:Ko,[nr]:Zo,[Yo]:Xo,[Jo]:$o,[Ko]:jo,[Zo]:nr},Qi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,t);t.target=null}}},oi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Id=1234567,Jr=Math.PI/180,lr=180/Math.PI;function Ji(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(oi[s&255]+oi[s>>8&255]+oi[s>>16&255]+oi[s>>24&255]+"-"+oi[t&255]+oi[t>>8&255]+"-"+oi[t>>16&15|64]+oi[t>>24&255]+"-"+oi[e&63|128]+oi[e>>8&255]+"-"+oi[e>>16&255]+oi[e>>24&255]+oi[i&255]+oi[i>>8&255]+oi[i>>16&255]+oi[i>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function pu(s,t){return(s%t+t)%t}function J0(s,t,e,i,n){return i+(s-t)*(n-i)/(e-t)}function K0(s,t,e){return s!==t?(e-s)/(t-s):0}function Kr(s,t,e){return(1-e)*s+e*t}function Q0(s,t,e,i){return Kr(s,t,1-Math.exp(-e*i))}function tm(s,t=1){return t-Math.abs(pu(s,t*2)-t)}function em(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function im(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function nm(s,t){return s+Math.floor(Math.random()*(t-s+1))}function sm(s,t){return s+Math.random()*(t-s)}function rm(s){return s*(.5-Math.random())}function am(s){s!==void 0&&(Id=s);let t=Id+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function om(s){return s*Jr}function lm(s){return s*lr}function cm(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function hm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function um(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function dm(s,t,e,i,n){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),p=a((i-t)/2);switch(n){case"XYX":s.set(o*h,l*d,l*u,o*c);break;case"YZY":s.set(l*u,o*h,l*d,o*c);break;case"ZXZ":s.set(l*d,l*u,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*f,o*h,o*c);break;default:Gt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Hi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function we(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ja={DEG2RAD:Jr,RAD2DEG:lr,generateUUID:Ji,clamp:re,euclideanModulo:pu,mapLinear:J0,inverseLerp:K0,lerp:Kr,damp:Q0,pingpong:tm,smoothstep:em,smootherstep:im,randInt:nm,randFloat:sm,randFloatSpread:rm,seededRandom:am,degToRad:om,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:we,denormalize:Hi},bu=class bu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*n+t.x,this.y=r*n+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bu.prototype.isVector2=!0;var tt=bu,gi=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*x;m<0&&(u=-u,f=-f,p=-p,x=-x,m=-m);let g=1-o;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,o=Math.sin(o*v)/b,l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o}else{l=l*g+u*o,c=c*g+f*o,h=h*g+p*o,d=d*g+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,a){let o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_u=class _u{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ld.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ld.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*n-o*i),h=2*(o*e-r*n),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=n+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_u.prototype.isVector3=!0;var R=_u,xh=new R,Ld=new gi,Mu=class Mu{constructor(t,e,i,n,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c)}set(t,e,i,n,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],x=n[0],m=n[3],g=n[6],v=n[1],b=n[4],y=n[7],M=n[2],S=n[5],A=n[8];return r[0]=a*x+o*v+l*M,r[3]=a*m+o*b+l*S,r[6]=a*g+o*y+l*A,r[1]=c*x+h*v+d*M,r[4]=c*m+h*b+d*S,r[7]=c*g+h*y+d*A,r[2]=u*x+f*v+p*M,r[5]=u*m+f*b+p*S,r[8]=u*g+f*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+i*u+n*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(o*i-n*a)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-o*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-n*c,n*l,-n*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vh.makeScale(t,e)),this}rotate(t){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vh.makeRotation(-t)),this}translate(t,e){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;var Jt=Mu,vh=new Jt,Dd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fm(){let s={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(n.r=_n(n.r),n.g=_n(n.g),n.b=_n(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(n.r=ir(n.r),n.g=ir(n.g),n.b=ir(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?na:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return as("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return as("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[ia]:{primaries:t,whitePoint:i,transfer:na,toXYZ:Dd,fromXYZ:zd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:i,transfer:me,toXYZ:Dd,fromXYZ:zd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),s}var ae=fm();function _n(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ir(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Fs,el=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Fs===void 0&&(Fs=ar("canvas")),Fs.width=t.width,Fs.height=t.height;let n=Fs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Fs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ar("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=_n(r[a]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_n(e[i]/255)*255):e[i]=_n(e[i]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pm=0,cr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(yh(n[a].image)):r.push(yh(n[a]))}else r=yh(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?el.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var mm=0,bh=new R,ci=class s extends Qi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=ji,n=ji,r=si,a=jn,o=bi,l=vi,c=s.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ji(),this.name="",this.source=new cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ru)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ci.DEFAULT_IMAGE=null;ci.DEFAULT_MAPPING=ru;ci.DEFAULT_ANISOTROPY=1;var wu=class wu{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*n+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(f+1)/2,M=(g+1)/2,S=(h+u)/4,A=(d+x)/4,_=(p+m)/4;return b>y&&b>M?b<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(b),n=S/i,r=A/i):y>M?y<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(y),i=S/n,r=_/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=A/r,n=_/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};wu.prototype.isVector4=!0;var Te=wu,il=class extends Qi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new ci(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new cr(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends il{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ra=class extends ci{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var nl=class extends ci{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=He,this.minFilter=He,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Rl=class Rl{constructor(t,e,i,n,r,a,o,l,c,h,d,u,f,p,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,a,o,l,c,h,d,u,f,p,x,m)}set(t,e,i,n,r,a,o,l,c,h,d,u,f,p,x,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Rl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Us.setFromMatrixColumn(t,0).length(),r=1/Us.setFromMatrixColumn(t,1).length(),a=1/Us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,xm)}lookAt(t,e,i){let n=this.elements;return _i.subVectors(t,e),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),Nn.crossVectors(i,_i),Nn.lengthSq()===0&&(Math.abs(i.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),Nn.crossVectors(i,_i)),Nn.normalize(),po.crossVectors(_i,Nn),n[0]=Nn.x,n[4]=po.x,n[8]=_i.x,n[1]=Nn.y,n[5]=po.y,n[9]=_i.y,n[2]=Nn.z,n[6]=po.z,n[10]=_i.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],x=i[6],m=i[10],g=i[14],v=i[3],b=i[7],y=i[11],M=i[15],S=n[0],A=n[4],_=n[8],T=n[12],P=n[1],I=n[5],z=n[9],F=n[13],L=n[2],B=n[6],Y=n[10],X=n[14],st=n[3],Z=n[7],j=n[11],$=n[15];return r[0]=a*S+o*P+l*L+c*st,r[4]=a*A+o*I+l*B+c*Z,r[8]=a*_+o*z+l*Y+c*j,r[12]=a*T+o*F+l*X+c*$,r[1]=h*S+d*P+u*L+f*st,r[5]=h*A+d*I+u*B+f*Z,r[9]=h*_+d*z+u*Y+f*j,r[13]=h*T+d*F+u*X+f*$,r[2]=p*S+x*P+m*L+g*st,r[6]=p*A+x*I+m*B+g*Z,r[10]=p*_+x*z+m*Y+g*j,r[14]=p*T+x*F+m*X+g*$,r[3]=v*S+b*P+y*L+M*st,r[7]=v*A+b*I+y*B+M*Z,r[11]=v*_+b*z+y*Y+M*j,r[15]=v*T+b*F+y*X+M*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],m=t[11],g=t[15],v=l*f-c*u,b=o*f-c*d,y=o*u-l*d,M=a*f-c*h,S=a*u-l*h,A=a*d-o*h;return e*(x*v-m*b+g*y)-i*(p*v-m*M+g*S)+n*(p*b-x*M+g*A)-r*(p*y-x*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+n*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],m=t[14],g=t[15],v=e*o-i*a,b=e*l-n*a,y=e*c-r*a,M=i*l-n*o,S=i*c-r*o,A=n*c-r*l,_=h*x-d*p,T=h*m-u*p,P=h*g-f*p,I=d*m-u*x,z=d*g-f*x,F=u*g-f*m,L=v*F-b*z+y*I+M*P-S*T+A*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*F-l*z+c*I)*B,t[1]=(n*z-i*F-r*I)*B,t[2]=(x*A-m*S+g*M)*B,t[3]=(u*S-d*A-f*M)*B,t[4]=(l*P-a*F-c*T)*B,t[5]=(e*F-n*P+r*T)*B,t[6]=(m*y-p*A-g*b)*B,t[7]=(h*A-u*y+f*b)*B,t[8]=(a*z-o*P+c*_)*B,t[9]=(i*P-e*z-r*_)*B,t[10]=(p*S-x*y+g*v)*B,t[11]=(d*y-h*S-f*v)*B,t[12]=(o*T-a*I-l*_)*B,t[13]=(e*I-i*T+n*_)*B,t[14]=(x*b-p*M-m*v)*B,t[15]=(h*M-d*b+u*v)*B,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,a){return this.set(1,i,r,0,t,1,a,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,m=a*d,g=o*d,v=l*c,b=l*h,y=l*d,M=i.x,S=i.y,A=i.z;return n[0]=(1-(x+g))*M,n[1]=(f+y)*M,n[2]=(p-b)*M,n[3]=0,n[4]=(f-y)*S,n[5]=(1-(u+g))*S,n[6]=(m+v)*S,n[7]=0,n[8]=(p+b)*A,n[9]=(m-v)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Us.set(n[0],n[1],n[2]).length(),o=Us.set(n[4],n[5],n[6]).length(),l=Us.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Ui.copy(this);let c=1/a,h=1/o,d=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=d,Ui.elements[9]*=d,Ui.elements[10]*=d,e.setFromRotationMatrix(Ui),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,n,r,a,o=Gi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Gi)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===rr)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,a,o=Gi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Gi)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===rr)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Rl.prototype.isMatrix4=!0;var de=Rl,Us=new R,Ui=new de,gm=new R(0,0,0),xm=new R(1,1,1),Nn=new R,po=new R,_i=new R,Nd=new de,kd=new gi,xi=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kd.setFromEuler(this),this.setFromQuaternion(kd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var aa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vm=0,Fd=new R,Bs=new gi,mn=new de,mo=new R,Or=new R,ym=new R,bm=new gi,Ud=new R(1,0,0),Bd=new R(0,1,0),Od=new R(0,0,1),Hd={type:"added"},_m={type:"removed"},Os={type:"childadded",child:null},_h={type:"childremoved",child:null},qe=class s extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new R,e=new xi,i=new gi,n=new R(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new de},normalMatrix:{value:new Jt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Bd,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Fd.copy(t).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Bd,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mo.copy(t):mo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Or,mo,this.up):mn.lookAt(mo,Or,this.up),this.quaternion.setFromRotationMatrix(mn),n&&(mn.extractRotation(n.matrixWorld),Bs.setFromRotationMatrix(mn),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hd),Os.child=t,this.dispatchEvent(Os),Os.child=null):qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_m),_h.child=t,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hd),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,ym),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,bm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));n.material=o}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new R(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var jt=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mm={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),g=this._getHandJoint(c,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mm)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new jt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},go={h:0,s:0,l:0};function Mh(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=ae.workingColorSpace){if(t=pu(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Mh(a,r,t+1/3),this.g=Mh(a,r,t),this.b=Mh(a,r,t-1/3)}return ae.colorSpaceToWorking(this,n),this}setStyle(t,e=Ue){function i(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let i=Kf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_n(t.r),this.g=_n(t.g),this.b=_n(t.b),this}copyLinearToSRGB(t){return this.r=ir(t.r),this.g=ir(t.g),this.b=ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ae.workingToColorSpace(li.copy(this),t),Math.round(re(li.r*255,0,255))*65536+Math.round(re(li.g*255,0,255))*256+Math.round(re(li.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(li.copy(this),e);let i=li.r,n=li.g,r=li.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(li.copy(this),e),t.r=li.r,t.g=li.g,t.b=li.b,t}getStyle(t=Ue){ae.workingToColorSpace(li.copy(this),t);let e=li.r,i=li.g,n=li.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(go);let i=Kr(kn.h,go.h,e),n=Kr(kn.s,go.s,e),r=Kr(kn.l,go.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},li=new ot;ot.NAMES=Kf;var oa=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ot(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},os=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bi=new R,gn=new R,wh=new R,xn=new R,Hs=new R,Gs=new R,Gd=new R,Sh=new R,Eh=new R,Th=new R,Ah=new Te,Rh=new Te,Ch=new Te,bn=class s{constructor(t=new R,e=new R,i=new R){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Bi.subVectors(t,e),n.cross(Bi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Bi.subVectors(n,e),gn.subVectors(i,e),wh.subVectors(t,e);let a=Bi.dot(Bi),o=Bi.dot(gn),l=Bi.dot(wh),c=gn.dot(gn),h=gn.dot(wh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,n,r,a,o,l){return this.getBarycoord(t,e,i,n,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(o,xn.z),l)}static getInterpolatedAttribute(t,e,i,n,r,a){return Ah.setScalar(0),Rh.setScalar(0),Ch.setScalar(0),Ah.fromBufferAttribute(t,e),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,n),a.setScalar(0),a.addScaledVector(Ah,r.x),a.addScaledVector(Rh,r.y),a.addScaledVector(Ch,r.z),a}static isFrontFacing(t,e,i,n){return Bi.subVectors(i,e),gn.subVectors(t,e),Bi.cross(gn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Bi.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,a,o;Hs.subVectors(n,i),Gs.subVectors(r,i),Sh.subVectors(t,i);let l=Hs.dot(Sh),c=Gs.dot(Sh);if(l<=0&&c<=0)return e.copy(i);Eh.subVectors(t,n);let h=Hs.dot(Eh),d=Gs.dot(Eh);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Hs,a);Th.subVectors(t,r);let f=Hs.dot(Th),p=Gs.dot(Th);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Gs,o);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Gd.subVectors(r,n),o=(d-h)/(d-h+(f-p)),e.copy(n).addScaledVector(Gd,o);let g=1/(m+x+u);return a=x*g,o=u*g,e.copy(i).addScaledVector(Hs,a).addScaledVector(Gs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tn=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Oi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Oi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Oi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oi):Oi.fromBufferAttribute(r,a),Oi.applyMatrix4(t.matrixWorld),this.expandByPoint(Oi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let n=t.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oi),Oi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),vo.subVectors(this.max,Hr),Vs.subVectors(t.a,Hr),Ws.subVectors(t.b,Hr),qs.subVectors(t.c,Hr),Fn.subVectors(Ws,Vs),Un.subVectors(qs,Ws),is.subVectors(Vs,qs);let e=[0,-Fn.z,Fn.y,0,-Un.z,Un.y,0,-is.z,is.y,Fn.z,0,-Fn.x,Un.z,0,-Un.x,is.z,0,-is.x,-Fn.y,Fn.x,0,-Un.y,Un.x,0,-is.y,is.x,0];return!Ph(e,Vs,Ws,qs,vo)||(e=[1,0,0,0,1,0,0,0,1],!Ph(e,Vs,Ws,qs,vo))?!1:(yo.crossVectors(Fn,Un),e=[yo.x,yo.y,yo.z],Ph(e,Vs,Ws,qs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vn=[new R,new R,new R,new R,new R,new R,new R,new R],Oi=new R,xo=new tn,Vs=new R,Ws=new R,qs=new R,Fn=new R,Un=new R,is=new R,Hr=new R,vo=new R,yo=new R,ns=new R;function Ph(s,t,e,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ns.fromArray(s,r);let o=n.x*Math.abs(ns.x)+n.y*Math.abs(ns.y)+n.z*Math.abs(ns.z),l=t.dot(ns),c=e.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var je=new R,bo=new tt,wm=0,he=class extends Qi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=du,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array),r=we(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var la=class extends he{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ca=class extends he{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Lt=class extends he{constructor(t,e,i){super(new Float32Array(t),e,i)}},Sm=new tn,Gr=new R,Ih=new R,Di=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Sm.setFromPoints(t).getCenter(i);let n=0;for(let r=0,a=t.length;r<a;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);let e=Gr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Gr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ih.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(Ih)),this.expandByPoint(Gr.copy(t.center).sub(Ih))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Em=0,Li=new de,Lh=new qe,Xs=new R,Mi=new tn,Vr=new tn,ii=new R,te=class s extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(j0(t)?ca:la)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Li.makeRotationFromQuaternion(t),this.applyMatrix4(Li),this}rotateX(t){return Li.makeRotationX(t),this.applyMatrix4(Li),this}rotateY(t){return Li.makeRotationY(t),this.applyMatrix4(Li),this}rotateZ(t){return Li.makeRotationZ(t),this.applyMatrix4(Li),this}translate(t,e,i){return Li.makeTranslation(t,e,i),this.applyMatrix4(Li),this}scale(t,e,i){return Li.makeScale(t,e,i),this.applyMatrix4(Li),this}lookAt(t){return Lh.lookAt(t),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let a=t[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];Mi.setFromBufferAttribute(r),this.morphTargetsRelative?(ii.addVectors(this.boundingBox.min,Mi.min),this.boundingBox.expandByPoint(ii),ii.addVectors(this.boundingBox.max,Mi.max),this.boundingBox.expandByPoint(ii)):(this.boundingBox.expandByPoint(Mi.min),this.boundingBox.expandByPoint(Mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let i=this.boundingSphere.center;if(Mi.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(ii.addVectors(Mi.min,Vr.min),Mi.expandByPoint(ii),ii.addVectors(Mi.max,Vr.max),Mi.expandByPoint(ii)):(Mi.expandByPoint(Vr.min),Mi.expandByPoint(Vr.max))}Mi.getCenter(i);let n=0;for(let r=0,a=t.count;r<a;r++)ii.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(ii));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ii.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(t,c),ii.add(Xs)),n=Math.max(n,i.distanceToSquared(ii))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new he(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new tt,f=new tt,p=new tt,x=new R,m=new R;function g(_,T,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let I=1/(f.x*p.y-p.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(I),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(I),o[_].add(x),o[T].add(x),o[P].add(x),l[_].add(m),l[T].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,z=P.count;for(let F=I,L=I+z;F<L;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let b=new R,y=new R,M=new R,S=new R;function A(_){M.fromBufferAttribute(n,_),S.copy(M);let T=o[_];b.copy(T),b.sub(M.multiplyScalar(M.dot(T))).normalize(),y.crossVectors(S,T);let I=y.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,I)}for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,z=P.count;for(let F=I,L=I+z;F<L;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ii.fromBufferAttribute(t,e),ii.normalize(),t.setXYZ(e,ii.x,ii.y,ii.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new he(u,h,d)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=du,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ji()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},mi=new R,ur=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Hi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Hi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Hi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Hi(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),n=we(n,this.array),r=we(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Dh=new R,Tm=new R,Am=new Jt,wi=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Dh.subVectors(i,e).cross(Tm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Dh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Am.getNormalMatrix(t),n=this.coplanarPoint(Dh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rm=0,Si=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Yn,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nu,this.blendDst=su,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=n(t.textures),a=n(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new wi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new tt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new tt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Mn=class extends Si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ys,Wr=new R,$s=new R,js=new R,Zs=new tt,qr=new tt,Qf=new de,_o=new R,Xr=new R,Mo=new R,Vd=new tt,zh=new tt,Wd=new tt,On=class extends qe{constructor(t=new Mn){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new te;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ha(e,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new ur(i,3,0,!1)),Ys.setAttribute("uv",new ur(i,2,3,!1))}this.geometry=Ys,this.material=t,this.center=new tt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&qt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Qf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-js.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;wo(_o.set(-.5,-.5,0),js,a,$s,n,r),wo(Xr.set(.5,-.5,0),js,a,$s,n,r),wo(Mo.set(.5,.5,0),js,a,$s,n,r),Vd.set(0,0),zh.set(1,0),Wd.set(1,1);let o=t.ray.intersectTriangle(_o,Xr,Mo,!1,Wr);if(o===null&&(wo(Xr.set(-.5,.5,0),js,a,$s,n,r),zh.set(0,1),o=t.ray.intersectTriangle(_o,Mo,Xr,!1,Wr),o===null))return;let l=t.ray.origin.distanceTo(Wr);l<t.near||l>t.far||e.push({distance:l,point:Wr.clone(),uv:bn.getInterpolation(Wr,_o,Xr,Mo,Vd,zh,Wd,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function wo(s,t,e,i,n,r){Zs.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(qr.x=r*Zs.x-n*Zs.y,qr.y=n*Zs.x+r*Zs.y):qr.copy(Zs),s.copy(t),s.x+=qr.x,s.y+=qr.y,s.applyMatrix4(Qf)}var yn=new R,Nh=new R,So=new R,Eo=new R,dr=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Nh.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),Eo.copy(this.origin).sub(Nh);let r=t.distanceTo(e)*.5,a=-this.direction.dot(So),o=Eo.dot(this.direction),l=-Eo.dot(So),c=Eo.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Nh).addScaledVector(So,u),f}intersectSphere(t,e){if(t.radius<0)return null;yn.subVectors(t.center,this.origin);let i=yn.dot(this.direction),n=yn.dot(yn)-i*i,r=t.radius*t.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,n,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,m=e.z-a.z,g=i.x-a.x,v=i.y-a.y,b=i.z-a.z,y=Math.abs(l),M=Math.abs(c),S=Math.abs(h),A,_,T,P,I,z,F,L,B,Y,X,st;if(y>=M&&y>=S?(T=l,z=d,B=p,st=g,l>=0?(A=c,_=h,P=u,I=f,F=x,L=m,Y=v,X=b):(A=h,_=c,P=f,I=u,F=m,L=x,Y=b,X=v)):M>=S?(T=c,z=u,B=x,st=v,c>=0?(A=h,_=l,P=f,I=d,F=m,L=p,Y=b,X=g):(A=l,_=h,P=d,I=f,F=p,L=m,Y=g,X=b)):(T=h,z=f,B=m,st=b,h>=0?(A=l,_=c,P=d,I=u,F=p,L=x,Y=g,X=v):(A=c,_=l,P=u,I=d,F=x,L=p,Y=v,X=g)),T===0)return null;let Z=A/T,j=_/T,$=1/T,dt=P-Z*z,St=I-j*z,ie=F-Z*B,Zt=L-j*B,Bt=Y-Z*st,W=X-j*st,Q=Bt*Zt-W*ie,_t=dt*W-St*Bt,Xt=ie*St-Zt*dt;if(n){if(Q<0||_t<0||Xt<0)return null}else if((Q<0||_t<0||Xt<0)&&(Q>0||_t>0||Xt>0))return null;let Tt=Q+_t+Xt;if(Tt===0)return null;let Yt=$*(Q*z+_t*B+Xt*st);return(Tt>0?Yt<0:Yt>0)?null:this.at(Yt/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends Si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Pl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qd=new de,ss=new dr,To=new Di,Xd=new R,Ao=new R,Ro=new R,Co=new R,kh=new R,Po=new R,Yd=new R,Io=new R,V=class extends qe{constructor(t=new te,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let o=this.morphTargetInfluences;if(r&&o){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(kh.fromBufferAttribute(d,t),a?Po.addScaledVector(kh,h):Po.addScaledVector(kh.sub(e),h))}e.add(Po)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),ss.copy(t.ray).recast(t.near),!(To.containsPoint(ss.origin)===!1&&(ss.intersectSphere(To,Xd)===null||ss.origin.distanceToSquared(Xd)>(t.far-t.near)**2))&&(qd.copy(r).invert(),ss.copy(t.ray).applyMatrix4(qd),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ss)))}_computeIntersections(t,e,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=b;y<M;y+=3){let S=o.getX(y),A=o.getX(y+1),_=o.getX(y+2);n=Lo(this,g,t,i,c,h,d,S,A,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=o.getX(m),b=o.getX(m+1),y=o.getX(m+2);n=Lo(this,a,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let m=u[p],g=a[m.materialIndex],v=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,M=b;y<M;y+=3){let S=y,A=y+1,_=y+2;n=Lo(this,g,t,i,c,h,d,S,A,_),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=p,g=x;m<g;m+=3){let v=m,b=m+1,y=m+2;n=Lo(this,a,t,i,c,h,d,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Cm(s,t,e,i,n,r,a,o){let l;if(t.side===Qe?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,t.side===Xn,o),l===null)return null;Io.copy(o),Io.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:s}}function Lo(s,t,e,i,n,r,a,o,l,c){s.getVertexPosition(o,Ao),s.getVertexPosition(l,Ro),s.getVertexPosition(c,Co);let h=Cm(s,t,e,i,Ao,Ro,Co,Yd);if(h){let d=new R;bn.getBarycoord(Yd,Ao,Ro,Co,d),n&&(h.uv=bn.getInterpolatedAttribute(n,o,l,c,d,new tt)),r&&(h.uv1=bn.getInterpolatedAttribute(r,o,l,c,d,new tt)),a&&(h.normal=bn.getInterpolatedAttribute(a,o,l,c,d,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};bn.getNormal(Ao,Ro,Co,u.normal),h.face=u,h.barycoord=d}return h}var wn=class extends ci{constructor(t=null,e=1,i=1,n,r,a,o,l,c=He,h=He,d,u){super(null,a,o,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class extends he{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Js=new de,$d=new de,Do=[],jd=new tn,Pm=new de,Yr=new V,$r=new Di,ls=class extends V{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sn(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Pm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Js),jd.copy(t.boundingBox).applyMatrix4(Js),this.boundingBox.union(jd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Js),$r.copy(t.boundingSphere).applyMatrix4(Js),this.boundingSphere.union($r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(i),t.ray.intersectsSphere($r)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Js),$d.multiplyMatrices(i,Js),Yr.matrixWorld=$d,Yr.raycast(t,Do);for(let a=0,o=Do.length;a<o;a++){let l=Do[a];l.instanceId=r,l.object=this,e.push(l)}Do.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new wn(new Float32Array(n*this.count),n,this.count,Er,yi));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=n*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new Di,Im=new tt(.5,.5),zo=new R,fr=class{constructor(t=new wi,e=new wi,i=new wi,n=new wi,r=new wi,a=new wi){this.planes=[t,e,i,n,r,a]}set(t,e,i,n,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Gi,i=!1){let n=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],m=r[10],g=r[11],v=r[12],b=r[13],y=r[14],M=r[15];if(n[0].setComponents(c-a,f-h,g-p,M-v).normalize(),n[1].setComponents(c+a,f+h,g+p,M+v).normalize(),n[2].setComponents(c+o,f+d,g+x,M+b).normalize(),n[3].setComponents(c-o,f-d,g-x,M-b).normalize(),i)n[4].setComponents(l,u,m,y).normalize(),n[5].setComponents(c-l,f-u,g-m,M-y).normalize();else if(n[4].setComponents(c-l,f-u,g-m,M-y).normalize(),e===Gi)n[5].setComponents(c+l,f+u,g+m,M+y).normalize();else if(e===rr)n[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){rs.center.set(0,0,0);let e=Im.distanceTo(t.center);return rs.radius=.7071067811865476+e,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(zo.x=n.normal.x>0?t.max.x:t.min.x,zo.y=n.normal.y>0?t.max.y:t.min.y,zo.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(zo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends Si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ot(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},sl=new R,rl=new R,Zd=new de,jr=new dr,No=new Di,Fh=new R,Jd=new R,mr=class extends qe{constructor(t=new te,e=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)sl.fromBufferAttribute(e,n-1),rl.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=sl.distanceTo(rl);t.setAttribute("lineDistance",new Lt(i,1))}else Gt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(n),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Zd.copy(n).invert(),jr.copy(t.ray).applyMatrix4(Zd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=h.getX(x),v=h.getX(x+1),b=ko(this,t,jr,l,g,v,x);b&&e.push(b)}if(this.isLineLoop){let x=h.getX(p-1),m=h.getX(f),g=ko(this,t,jr,l,x,m,p-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=f,m=p-1;x<m;x+=c){let g=ko(this,t,jr,l,x,x+1,x);g&&e.push(g)}if(this.isLineLoop){let x=ko(this,t,jr,l,p-1,f,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ko(s,t,e,i,n,r,a){let o=s.geometry.attributes.position;if(sl.fromBufferAttribute(o,n),rl.fromBufferAttribute(o,r),e.distanceSqToSegment(sl,rl,Fh,Jd)>i)return;Fh.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Fh);if(!(c<t.near||c>t.far))return{distance:c,point:Jd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Kd=new R,Qd=new R,ua=class extends mr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)Kd.fromBufferAttribute(e,n),Qd.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Kd.distanceTo(Qd);t.setAttribute("lineDistance",new Lt(i,1))}else Gt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var al=class extends Si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ot(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tf=new de,Yh=new dr,Fo=new Di,Uo=new R,da=class extends qe{constructor(t=new te,e=new al){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(n),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;tf.copy(n).invert(),Yh.copy(t.ray).applyMatrix4(tf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let m=c.getX(p);Uo.fromBufferAttribute(d,m),ef(Uo,m,l,n,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)Uo.fromBufferAttribute(d,p),ef(Uo,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(s,t,e,i,n,r,a){let o=Yh.distanceSqToPoint(s);if(o<e){let l=new R;Yh.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var fa=class extends ci{constructor(t=[],e=$n,i,n,r,a,o,l,c,h){super(t,e,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cs=class extends ci{constructor(t,e,i,n,r,a,o,l,c){super(t,e,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hn=class extends ci{constructor(t,e,i=Wi,n,r,a,o=He,l=He,c,h=Ki,d=1){if(h!==Ki&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ol=class extends Hn{constructor(t,e=Wi,i=$n,n,r,a=He,o=He,l,c=Ki){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},pa=class extends ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},De=class s extends te{constructor(t=1,e=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,n,a,2),p("x","z","y",1,-1,t,i,-e,n,a,3),p("x","y","z",1,-1,t,e,i,n,r,4),p("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function p(x,m,g,v,b,y,M,S,A,_,T){let P=y/A,I=M/_,z=y/2,F=M/2,L=S/2,B=A+1,Y=_+1,X=0,st=0,Z=new R;for(let j=0;j<Y;j++){let $=j*I-F;for(let dt=0;dt<B;dt++){let St=dt*P-z;Z[x]=St*v,Z[m]=$*b,Z[g]=L,c.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[g]=S>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(dt/A),d.push(1-j/_),X+=1}}for(let j=0;j<_;j++)for(let $=0;$<A;$++){let dt=u+$+B*j,St=u+$+B*(j+1),ie=u+($+1)+B*(j+1),Zt=u+($+1)+B*j;l.push(dt,St,Zt),l.push(St,ie,Zt),st+=6}o.addGroup(f,st,T),f+=st,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},hs=class s extends te{constructor(t=1,e=1,i=4,n=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:n,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),n=Math.max(3,Math.floor(n)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=i*2+r,x=n+1,m=new R,g=new R;for(let v=0;v<=p;v++){let b=0,y=0,M=0,S=0;if(v<=i){let T=v/i,P=T*Math.PI/2;y=-h-t*Math.cos(P),M=t*Math.sin(P),S=-t*Math.cos(P),b=T*d}else if(v<=i+r){let T=(v-i)/r;y=-h+T*e,M=t,S=0,b=d+T*u}else{let T=(v-i-r)/i,P=T*Math.PI/2;y=h+t*Math.sin(P),M=t*Math.cos(P),S=t*Math.sin(P),b=d+u+T*d}let A=Math.max(0,Math.min(1,b/f)),_=0;v===0?_=.5/n:v===p&&(_=-.5/n);for(let T=0;T<=n;T++){let P=T/n,I=P*Math.PI*2,z=Math.sin(I),F=Math.cos(I);g.x=-M*F,g.y=y,g.z=M*z,o.push(g.x,g.y,g.z),m.set(-M*F,S,M*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(P+_,A)}if(v>0){let T=(v-1)*x;for(let P=0;P<n;P++){let I=T+P,z=T+P+1,F=v*x+P,L=v*x+P+1;a.push(I,z,F),a.push(z,L,F)}}}this.setIndex(a),this.setAttribute("position",new Lt(o,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},us=class s extends te{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new R,h=new tt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ct=class s extends te{constructor(t=1,e=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],m=i/2,g=0;v(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function v(){let y=new R,M=new R,S=0,A=(e-t)/i;for(let _=0;_<=r;_++){let T=[],P=_/r,I=P*(e-t)+t;for(let z=0;z<=n;z++){let F=z/n,L=F*l+o,B=Math.sin(L),Y=Math.cos(L);M.x=I*B,M.y=-P*i+m,M.z=I*Y,d.push(M.x,M.y,M.z),y.set(B,A,Y).normalize(),u.push(y.x,y.y,y.z),f.push(F,1-P),T.push(p++)}x.push(T)}for(let _=0;_<n;_++)for(let T=0;T<r;T++){let P=x[T][_],I=x[T+1][_],z=x[T+1][_+1],F=x[T][_+1];(t>0||T!==0)&&(h.push(P,I,F),S+=3),(e>0||T!==r-1)&&(h.push(I,z,F),S+=3)}c.addGroup(g,S,0),g+=S}function b(y){let M=p,S=new tt,A=new R,_=0,T=y===!0?t:e,P=y===!0?1:-1;for(let z=1;z<=n;z++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),p++;let I=p;for(let z=0;z<=n;z++){let L=z/n*l+o,B=Math.cos(L),Y=Math.sin(L);A.x=T*Y,A.y=m*P,A.z=T*B,d.push(A.x,A.y,A.z),u.push(0,P,0),S.x=B*.5+.5,S.y=Y*.5*P+.5,f.push(S.x,S.y),p++}for(let z=0;z<n;z++){let F=M+z,L=I+z;y===!0?h.push(L,L+1,F):h.push(L+1,L,F),_+=3}c.addGroup(g,_,y===!0?1:2),g+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Se=class s extends Ct{constructor(t=1,e=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},gr=class s extends te{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Lt(r,3)),this.setAttribute("normal",new Lt(r.slice(),3)),this.setAttribute("uv",new Lt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let b=new R,y=new R,M=new R;for(let S=0;S<e.length;S+=3)f(e[S+0],b),f(e[S+1],y),f(e[S+2],M),l(b,y,M,v)}function l(v,b,y,M){let S=M+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let T=v.clone().lerp(y,_/S),P=b.clone().lerp(y,_/S),I=S-_;for(let z=0;z<=I;z++)z===0&&_===S?A[_][z]=T:A[_][z]=T.clone().lerp(P,z/I)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let P=Math.floor(T/2);T%2===0?(u(A[_][P+1]),u(A[_+1][P]),u(A[_][P])):(u(A[_][P+1]),u(A[_+1][P+1]),u(A[_+1][P]))}}function c(v){let b=new R;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(v),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function h(){let v=new R;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];let y=m(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;a.push(y,1-M)}p(),d()}function d(){for(let v=0;v<a.length;v+=6){let b=a[v+0],y=a[v+2],M=a[v+4],S=Math.max(b,y,M),A=Math.min(b,y,M);S>.9&&A<.1&&(b<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new R,b=new R,y=new R,M=new R,S=new tt,A=new tt,_=new tt;for(let T=0,P=0;T<r.length;T+=9,P+=6){v.set(r[T+0],r[T+1],r[T+2]),b.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),S.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),M.copy(v).add(b).add(y).divideScalar(3);let I=m(M);x(S,P+0,v,I),x(A,P+2,b,I),x(_,P+4,y,I)}}function x(v,b,y,M){M<0&&v.x===1&&(a[b]=v.x-1),y.x===0&&y.z===0&&(a[b]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}},ds=class s extends gr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var Ei=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(n),e.push(r),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);let h=i[n],u=i[n+1]-h,f=(a-h)/u;return(n+f)/(r-1)}getTangent(t,e){let n=t-1e-4,r=t+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=e||(a.isVector2?new tt:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new R,n=[],r=[],a=[],o=new R,l=new de;for(let f=0;f<=t;f++){let p=f/t;n[f]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(re(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(n[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,n[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],f*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},xr=class extends Ei{constructor(t=0,e=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new tt){let i=e,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ll=class extends xr{constructor(t,e,i,n,r,a){super(t,e,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let s=0,t=0,e=0,i=0;function n(r,a,o,l){s=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,n(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+i*o}}}var nf=new R,sf=new R,Uh=new mu,Bh=new mu,Oh=new mu,vr=class extends Ei{constructor(t=[],e=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=n}getPoint(t,e=new R){let i=e,n=this.points,r=n.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(sf.subVectors(n[0],n[1]).add(n[0]),c=sf);let d=n[o%r],u=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(nf.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=nf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),m<1e-4&&(m=x),Uh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,m),Bh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,m),Oh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,m)}else this.curveType==="catmullrom"&&(Uh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Bh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Oh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Uh.calc(l),Bh.calc(l),Oh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new R().fromArray(n))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rf(s,t,e,i,n){let r=(i-t)*.5,a=(n-e)*.5,o=s*s,l=s*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*s+e}function Lm(s,t){let e=1-s;return e*e*t}function Dm(s,t){return 2*(1-s)*s*t}function zm(s,t){return s*s*t}function Qr(s,t,e,i){return Lm(s,t)+Dm(s,e)+zm(s,i)}function Nm(s,t){let e=1-s;return e*e*e*t}function km(s,t){let e=1-s;return 3*e*e*s*t}function Fm(s,t){return 3*(1-s)*s*s*t}function Um(s,t){return s*s*s*t}function ta(s,t,e,i,n){return Nm(s,t)+km(s,e)+Fm(s,i)+Um(s,n)}var ma=class extends Ei{constructor(t=new tt,e=new tt,i=new tt,n=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ta(t,n.x,r.x,a.x,o.x),ta(t,n.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cl=class extends Ei{constructor(t=new R,e=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=n}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ta(t,n.x,r.x,a.x,o.x),ta(t,n.y,r.y,a.y,o.y),ta(t,n.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends Ei{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hl=class extends Ei{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends Ei{constructor(t=new tt,e=new tt,i=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new tt){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Qr(t,n.x,r.x,a.x),Qr(t,n.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fs=class extends Ei{constructor(t=new R,e=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new R){let i=e,n=this.v0,r=this.v1,a=this.v2;return i.set(Qr(t,n.x,r.x,a.x),Qr(t,n.y,r.y,a.y),Qr(t,n.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends Ei{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let i=e,n=this.points,r=(n.length-1)*t,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(rf(o,l.x,c.x,h.x,d.x),rf(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let n=this.points[e];t.points.push(n.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let n=t.points[e];this.points.push(new tt().fromArray(n))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:ll,CatmullRomCurve3:vr,CubicBezierCurve:ma,CubicBezierCurve3:cl,EllipseCurve:xr,LineCurve:ga,LineCurve3:hl,QuadraticBezierCurve:xa,QuadraticBezierCurve3:fs,SplineCurve:va}),dl=class extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,n=this.curves.length;i<n;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(n.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let n=this.curves[e];t.curves.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let n=t.curves[e];this.curves.push(new ul[n.type]().fromJSON(n))}return this}},ya=class extends dl{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ga(this.currentPoint.clone(),new tt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,n){let r=new xa(this.currentPoint.clone(),new tt(t,e),new tt(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(t,e,i,n,r,a){let o=new ma(this.currentPoint.clone(),new tt(t,e),new tt(i,n),new tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new va(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,n,r,a),this}absarc(t,e,i,n,r,a){return this.absellipse(t,e,i,i,n,r,a),this}ellipse(t,e,i,n,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,n,r,a,o,l),this}absellipse(t,e,i,n,r,a,o,l){let c=new xr(t,e,i,n,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},En=class extends ya{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,n=this.holes.length;i<n;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(n.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let n=this.holes[e];t.holes.push(n.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let n=t.holes[e];this.holes.push(new ya().fromJSON(n))}return this}};function Bm(s,t,e=2){let i=t&&t.length,n=i?t[0]*e:s.length,r=tp(s,0,n,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Wm(s,t,r,e)),s.length>80*e){o=s[0],l=s[1];let h=o,d=l;for(let u=e;u<n;u+=e){let f=s[u],p=s[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return ba(r,a,e,o,l,c,0),a}function tp(s,t,e,i,n){let r;if(n===eg(s,t,e,i)>0)for(let a=t;a<e;a+=i)r=af(a/i|0,s[a],s[a+1],r);else for(let a=e-i;a>=t;a-=i)r=af(a/i|0,s[a],s[a+1],r);return r&&yr(r,r.next)&&(Ma(r),r=r.next),r}function ps(s,t){if(!s)return s;t||(t=s);let e=s,i;do if(i=!1,!e.steiner&&(yr(e,e.next)||Be(e.prev,e,e.next)===0)){if(Ma(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ba(s,t,e,i,n,r,a){if(!s)return;!a&&r&&jm(s,i,n,r);let o=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?Hm(s,i,n,r):Om(s)){t.push(l.i,s.i,c.i),Ma(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Gm(ps(s),t),ba(s,t,e,i,n,r,2)):a===2&&Vm(s,t,e,i,n,r):ba(ps(s),t,e,i,n,r,1);break}}}function Om(s){let t=s.prev,e=s,i=s.next;if(Be(t,e,i)>=0)return!1;let n=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(n,r,a),d=Math.min(o,l,c),u=Math.max(n,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Zr(n,o,r,l,a,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Hm(s,t,e,i){let n=s.prev,r=s,a=s.next;if(Be(n,r,a)>=0)return!1;let o=n.x,l=r.x,c=a.x,h=n.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),g=$h(f,p,t,e,i),v=$h(x,m,t,e,i),b=s.prevZ,y=s.nextZ;for(;b&&b.z>=g&&y&&y.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&Zr(o,h,l,d,c,u,b.x,b.y)&&Be(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Zr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=g;){if(b.x>=f&&b.x<=x&&b.y>=p&&b.y<=m&&b!==n&&b!==a&&Zr(o,h,l,d,c,u,b.x,b.y)&&Be(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=p&&y.y<=m&&y!==n&&y!==a&&Zr(o,h,l,d,c,u,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Gm(s,t){let e=s;do{let i=e.prev,n=e.next.next;!yr(i,n)&&ip(i,e,e.next,n)&&_a(i,n)&&_a(n,i)&&(t.push(i.i,e.i,n.i),Ma(e),Ma(e.next),e=s=n),e=e.next}while(e!==s);return ps(e)}function Vm(s,t,e,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Km(a,o)){let l=np(a,o);a=ps(a,a.next),l=ps(l,l.next),ba(a,t,e,i,n,r,0),ba(l,t,e,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function Wm(s,t,e,i){let n=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:s.length,c=tp(s,o,l,i,!1);c===c.next&&(c.steiner=!0),n.push(Jm(c))}n.sort(qm);for(let r=0;r<n.length;r++)e=Xm(n[r],e);return e}function qm(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(t.next.y-t.y)/(t.next.x-t.x);e=i-n}return e}function Xm(s,t){let e=Ym(s,t);if(!e)return t;let i=np(e,s);return ps(i,i.next),ps(e,e.next)}function Ym(s,t){let e=t,i=s.x,n=s.y,r=-1/0,a;if(yr(s,e))return e;do{if(yr(s,e.next))return e.next;if(n<=e.y&&n>=e.next.y&&e.next.y!==e.y){let d=e.x+(n-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&ep(n<c?i:r,n,l,c,n<c?r:i,n,e.x,e.y)){let d=Math.abs(n-e.y)/(i-e.x);_a(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&$m(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function $m(s,t){return Be(s.prev,s,t.prev)<0&&Be(t.next,s,s.next)<0}function jm(s,t,e,i){let n=s;do n.z===0&&(n.z=$h(n.x,n.y,t,e,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,Zm(n)}function Zm(s){let t,e=1;do{let i=s,n;s=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,e*=2}while(t>1);return s}function $h(s,t,e,i,n){return s=(s-e)*n|0,t=(t-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Jm(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ep(s,t,e,i,n,r,a,o){return(n-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(n-a)*(i-o)}function Zr(s,t,e,i,n,r,a,o){return!(s===a&&t===o)&&ep(s,t,e,i,n,r,a,o)}function Km(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Qm(s,t)&&(_a(s,t)&&_a(t,s)&&tg(s,t)&&(Be(s.prev,s,t.prev)||Be(s,t.prev,t))||yr(s,t)&&Be(s.prev,s,s.next)>0&&Be(t.prev,t,t.next)>0)}function Be(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function yr(s,t){return s.x===t.x&&s.y===t.y}function ip(s,t,e,i){let n=Oo(Be(s,t,e)),r=Oo(Be(s,t,i)),a=Oo(Be(e,i,s)),o=Oo(Be(e,i,t));return!!(n!==r&&a!==o||n===0&&Bo(s,e,t)||r===0&&Bo(s,i,t)||a===0&&Bo(e,s,i)||o===0&&Bo(e,t,i))}function Bo(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Oo(s){return s>0?1:s<0?-1:0}function Qm(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&ip(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function _a(s,t){return Be(s.prev,s,s.next)<0?Be(s,t,s.next)>=0&&Be(s,s.prev,t)>=0:Be(s,t,s.prev)<0||Be(s,s.next,t)<0}function tg(s,t){let e=s,i=!1,n=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&n<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==s);return i}function np(s,t){let e=jh(s.i,s.x,s.y),i=jh(t.i,t.x,t.y),n=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=n,n.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function af(s,t,e,i){let n=jh(s,t,e);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function jh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(s,t,e,i){let n=0;for(let r=t,a=e-i;r<e;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var Zh=class{static triangulate(t,e,i=2){return Bm(t,e,i)}},Zi=class s{static area(t){let e=t.length,i=0;for(let n=e-1,r=0;r<e;n=r++)i+=t[n].x*t[r].y-t[r].x*t[n].y;return i*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let i=[],n=[],r=[];of(t),lf(i,t);let a=t.length;e.forEach(of);for(let l=0;l<e.length;l++)n.push(a),a+=e[l].length,lf(i,e[l]);let o=Zh.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function of(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function lf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var wa=class s extends te{constructor(t=new En([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,n=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Lt(n,3)),this.setAttribute("uv",new Lt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:ig,b,y=!1,M,S,A,_;if(g){b=g.getSpacedPoints(h),y=!0,u=!1;let nt=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(h,nt),S=new R,A=new R,_=new R}u||(m=0,f=0,p=0,x=0);let T=o.extractPoints(c),P=T.shape,I=T.holes;if(!Zi.isClockWise(P)){P=P.reverse();for(let nt=0,at=I.length;nt<at;nt++){let lt=I[nt];Zi.isClockWise(lt)&&(I[nt]=lt.reverse())}}function F(nt){let lt=10000000000000001e-36,ct=nt[0];for(let pt=1;pt<=nt.length;pt++){let Vt=pt%nt.length,Ot=nt[Vt],$t=Ot.x-ct.x,Kt=Ot.y-ct.y,D=$t*$t+Kt*Kt,xe=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ct.x),Math.abs(ct.y)),le=lt*xe*xe;if(D<=le){nt.splice(Vt,1),pt--;continue}ct=Ot}}F(P),I.forEach(F);let L=I.length,B=P;for(let nt=0;nt<L;nt++){let at=I[nt];P=P.concat(at)}function Y(nt,at,lt){return at||qt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(at,lt)}let X=P.length;function st(nt,at,lt){let ct,pt,Vt,Ot=nt.x-at.x,$t=nt.y-at.y,Kt=lt.x-nt.x,D=lt.y-nt.y,xe=Ot*Ot+$t*$t,le=Ot*D-$t*Kt;if(Math.abs(le)>Number.EPSILON){let C=Math.sqrt(xe),w=Math.sqrt(Kt*Kt+D*D),U=at.x-$t/C,G=at.y+Ot/C,J=lt.x-D/w,ut=lt.y+Kt/w,ft=((J-U)*D-(ut-G)*Kt)/(Ot*D-$t*Kt);ct=U+Ot*ft-nt.x,pt=G+$t*ft-nt.y;let K=ct*ct+pt*pt;if(K<=2)return new tt(ct,pt);Vt=Math.sqrt(K/2)}else{let C=!1;Ot>Number.EPSILON?Kt>Number.EPSILON&&(C=!0):Ot<-Number.EPSILON?Kt<-Number.EPSILON&&(C=!0):Math.sign($t)===Math.sign(D)&&(C=!0),C?(ct=-$t,pt=Ot,Vt=Math.sqrt(xe)):(ct=Ot,pt=$t,Vt=Math.sqrt(xe/2))}return new tt(ct/Vt,pt/Vt)}let Z=[];for(let nt=0,at=B.length,lt=at-1,ct=nt+1;nt<at;nt++,lt++,ct++)lt===at&&(lt=0),ct===at&&(ct=0),Z[nt]=st(B[nt],B[lt],B[ct]);let j=[],$,dt=Z.concat();for(let nt=0,at=L;nt<at;nt++){let lt=I[nt];$=[];for(let ct=0,pt=lt.length,Vt=pt-1,Ot=ct+1;ct<pt;ct++,Vt++,Ot++)Vt===pt&&(Vt=0),Ot===pt&&(Ot=0),$[ct]=st(lt[ct],lt[Vt],lt[Ot]);j.push($),dt=dt.concat($)}let St;if(m===0)St=Zi.triangulateShape(B,I);else{let nt=[],at=[];for(let lt=0;lt<m;lt++){let ct=lt/m,pt=f*Math.cos(ct*Math.PI/2),Vt=p*Math.sin(ct*Math.PI/2)+x;for(let Ot=0,$t=B.length;Ot<$t;Ot++){let Kt=Y(B[Ot],Z[Ot],Vt);_t(Kt.x,Kt.y,-pt),ct===0&&nt.push(Kt)}for(let Ot=0,$t=L;Ot<$t;Ot++){let Kt=I[Ot];$=j[Ot];let D=[];for(let xe=0,le=Kt.length;xe<le;xe++){let C=Y(Kt[xe],$[xe],Vt);_t(C.x,C.y,-pt),ct===0&&D.push(C)}ct===0&&at.push(D)}}St=Zi.triangulateShape(nt,at)}let ie=St.length,Zt=p+x;for(let nt=0;nt<X;nt++){let at=u?Y(P[nt],dt[nt],Zt):P[nt];y?(A.copy(M.normals[0]).multiplyScalar(at.x),S.copy(M.binormals[0]).multiplyScalar(at.y),_.copy(b[0]).add(A).add(S),_t(_.x,_.y,_.z)):_t(at.x,at.y,0)}for(let nt=1;nt<=h;nt++)for(let at=0;at<X;at++){let lt=u?Y(P[at],dt[at],Zt):P[at];y?(A.copy(M.normals[nt]).multiplyScalar(lt.x),S.copy(M.binormals[nt]).multiplyScalar(lt.y),_.copy(b[nt]).add(A).add(S),_t(_.x,_.y,_.z)):_t(lt.x,lt.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){let at=nt/m,lt=f*Math.cos(at*Math.PI/2),ct=p*Math.sin(at*Math.PI/2)+x;for(let pt=0,Vt=B.length;pt<Vt;pt++){let Ot=Y(B[pt],Z[pt],ct);_t(Ot.x,Ot.y,d+lt)}for(let pt=0,Vt=I.length;pt<Vt;pt++){let Ot=I[pt];$=j[pt];for(let $t=0,Kt=Ot.length;$t<Kt;$t++){let D=Y(Ot[$t],$[$t],ct);y?_t(D.x,D.y+b[h-1].y,b[h-1].x+lt):_t(D.x,D.y,d+lt)}}}Bt(),W();function Bt(){let nt=n.length/3;if(u){let at=0,lt=X*at;for(let ct=0;ct<ie;ct++){let pt=St[ct];Xt(pt[2]+lt,pt[1]+lt,pt[0]+lt)}at=h+m*2,lt=X*at;for(let ct=0;ct<ie;ct++){let pt=St[ct];Xt(pt[0]+lt,pt[1]+lt,pt[2]+lt)}}else{for(let at=0;at<ie;at++){let lt=St[at];Xt(lt[2],lt[1],lt[0])}for(let at=0;at<ie;at++){let lt=St[at];Xt(lt[0]+X*h,lt[1]+X*h,lt[2]+X*h)}}i.addGroup(nt,n.length/3-nt,0)}function W(){let nt=n.length/3,at=0;Q(B,at),at+=B.length;for(let lt=0,ct=I.length;lt<ct;lt++){let pt=I[lt];Q(pt,at),at+=pt.length}i.addGroup(nt,n.length/3-nt,1)}function Q(nt,at){let lt=nt.length;for(;--lt>=0;){let ct=lt,pt=lt-1;pt<0&&(pt=nt.length-1);for(let Vt=0,Ot=h+m*2;Vt<Ot;Vt++){let $t=X*Vt,Kt=X*(Vt+1),D=at+ct+$t,xe=at+pt+$t,le=at+pt+Kt,C=at+ct+Kt;Tt(D,xe,le,C)}}}function _t(nt,at,lt){l.push(nt),l.push(at),l.push(lt)}function Xt(nt,at,lt){Yt(nt),Yt(at),Yt(lt);let ct=n.length/3,pt=v.generateTopUV(i,n,ct-3,ct-2,ct-1);Me(pt[0]),Me(pt[1]),Me(pt[2])}function Tt(nt,at,lt,ct){Yt(nt),Yt(at),Yt(ct),Yt(at),Yt(lt),Yt(ct);let pt=n.length/3,Vt=v.generateSideWallUV(i,n,pt-6,pt-3,pt-2,pt-1);Me(Vt[0]),Me(Vt[1]),Me(Vt[3]),Me(Vt[1]),Me(Vt[2]),Me(Vt[3])}function Yt(nt){n.push(l[nt*3+0]),n.push(l[nt*3+1]),n.push(l[nt*3+2])}function Me(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return ng(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let n=t.options.extrudePath;return n!==void 0&&(t.options.extrudePath=new ul[n.type]().fromJSON(n)),new s(i,t.options)}},ig={generateTopUV:function(s,t,e,i,n){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[n*3],h=t[n*3+1];return[new tt(r,a),new tt(o,l),new tt(c,h)]},generateSideWallUV:function(s,t,e,i,n,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[n*3],f=t[n*3+1],p=t[n*3+2],x=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new tt(a,1-l),new tt(c,1-d),new tt(u,1-p),new tt(x,1-g)]:[new tt(o,1-l),new tt(h,1-d),new tt(f,1-p),new tt(m,1-g)]}};function ng(s,t,e){if(e.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var en=class s extends gr{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Sa=class s extends te{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:n},e=Math.floor(e),n=re(n,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new R,u=new tt,f=new R,p=new R,x=new R,m=0,g=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[v+1].x-t[v].x,g=t[v+1].y-t[v].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){let b=i+v*h*n,y=Math.sin(b),M=Math.cos(b);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*y,d.y=t[S].y,d.z=t[S].x*M,a.push(d.x,d.y,d.z),u.x=v/e,u.y=S/(t.length-1),o.push(u.x,u.y);let A=l[3*S+0]*y,_=l[3*S+1],T=l[3*S+0]*M;c.push(A,_,T)}}for(let v=0;v<e;v++)for(let b=0;b<t.length-1;b++){let y=b+v*t.length,M=y,S=y+t.length,A=y+t.length+1,_=y+1;r.push(M,S,_),r.push(A,_,S)}this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("uv",new Lt(o,2)),this.setAttribute("normal",new Lt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}},Xe=class s extends gr{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},ri=class s extends te{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],m=[];for(let g=0;g<h;g++){let v=g*u-a;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-v,0),x.push(0,0,1),m.push(b/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<o;v++){let b=v+c*g,y=v+c*(g+1),M=v+1+c*(g+1),S=v+1+c*g;f.push(b,y,S),f.push(y,M,S)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Tn=class s extends te{constructor(t=.5,e=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new R,p=new tt;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let g=r+m/i*a;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let x=0;x<n;x++){let m=x*(i+1);for(let g=0;g<i;g++){let v=g+m,b=v,y=v+i+1,M=v+i+2,S=v+1;o.push(b,y,S),o.push(y,M,S)}}this.setIndex(o),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(c,3)),this.setAttribute("uv",new Lt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ea=class s extends te{constructor(t=new En([new tt(0,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Lt(n,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function c(h){let d=n.length/3,u=h.extractPoints(e),f=u.shape,p=u.holes;Zi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){let v=p[m];Zi.isClockWise(v)===!0&&(p[m]=v.reverse())}let x=Zi.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){let v=p[m];f=f.concat(v)}for(let m=0,g=f.length;m<g;m++){let v=f[m];n.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,g=x.length;m<g;m++){let v=x[m],b=v[0]+d,y=v[1]+d,M=v[2]+d;i.push(b,y,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return sg(e,t)}static fromJSON(t,e){let i=[];for(let n=0,r=t.shapes.length;n<r;n++){let a=e[t.shapes[n]];i.push(a)}return new s(i,t.curveSegments)}};function sg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,i=s.length;e<i;e++){let n=s[e];t.shapes.push(n.uuid)}else t.shapes.push(s.uuid);return t}var Ht=class s extends te{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new R,u=new R,f=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,y=a+b*o,M=t*Math.cos(y),S=Math.sqrt(t*t-M*M),A=0;g===0&&a===0?A=.5/e:g===i&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,P=n+T*r;d.x=-S*Math.cos(P),d.y=M,d.z=S*Math.sin(P),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(T+A,1-b),v.push(c++)}h.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let b=h[g][v+1],y=h[g][v],M=h[g+1][v],S=h[g+1][v+1];(g!==0||a>0)&&f.push(b,y,S),(g!==i-1||l<Math.PI)&&f.push(y,M,S)}this.setIndex(f),this.setAttribute("position",new Lt(p,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ae=class s extends te{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new R,f=new R,p=new R;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let g=0;g<=n;g++){let v=g/n*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let g=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,b=(n+1)*(x-1)+m,y=(n+1)*x+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ta=class s extends te{constructor(t=new fs(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),e=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:n,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new tt,h=new R,d=[],u=[],f=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function x(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),v(),g()}function m(b){h=t.getPointAt(b/e,h);let y=a.normals[b],M=a.binormals[b];for(let S=0;S<=n;S++){let A=S/n*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*y.x+_*M.x,l.y=T*y.y+_*M.y,l.z=T*y.z+_*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let b=1;b<=e;b++)for(let y=1;y<=n;y++){let M=(n+1)*(b-1)+(y-1),S=(n+1)*b+(y-1),A=(n+1)*b+y,_=(n+1)*(b-1)+y;p.push(M,S,_),p.push(S,A,_)}}function v(){for(let b=0;b<=e;b++)for(let y=0;y<=n;y++)c.x=b/e,c.y=y/n,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new ul[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function bs(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(cf(n))n.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(cf(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function hi(s){let t={};for(let e=0;e<s.length;e++){let i=bs(s[e]);for(let n in i)t[n]=i[n]}return t}function cf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function rg(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function gu(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var qi={clone:bs,merge:hi},ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ge=class extends Si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ag,this.fragmentShader=og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=rg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?e.uniforms[n]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[n]={type:"m4",value:a.toArray()}:e.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new ot().setHex(n.value);break;case"v2":this.uniforms[i].value=new tt().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Jt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new de().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},br=class extends ge{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},An=class extends Si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ke=class extends Si{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ot(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Aa=class extends Si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tr,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Pl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fl=class extends Si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},pl=class extends Si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ks(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Hh(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Gn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<n)){for(let o=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=e[++i],t<n)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let a=0;a!==n;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ml=class extends Gn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,a=t+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case qh:r=t,o=2*e-i;break;case Xh:r=n.length-2,o=e+n[r]-n[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qh:a=t,l=2*i-e;break;case Xh:a=1,l=i+n[1]-n[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-e)/(n-e),x=p*p,m=x*p,g=-u*m+2*u*x-u*p,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*p+1,b=(-1-f)*m+(1.5+f)*x+.5*p,y=f*m-f*x;for(let M=0;M!==o;++M)r[M]=g*a[h+M]+v*a[c+M]+b*a[l+M]+y*a[d+M];return r}},gl=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},xl=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},vl=class extends Gn{interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-e)/(n-e),x=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*x+a[l+m]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],m=a[l+p],g=f*u+p*2,v=d[g],b=d[g+1],y=t*u+p*2,M=h[y],S=h[y+1],A=cg(i,e,v,M,n);r[p]=sp(A,x,b,S,m)}return r}};function sp(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function lg(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function cg(s,t,e,i,n){let r=(s-t)/(n-t);for(let a=0;a<8;a++){let o=sp(r,t,e,i,n)-s;if(Math.abs(o)<1e-10)break;let l=lg(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ti=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ks(e,this.TimeBufferType),this.values=Ks(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ks(t.times,Array),values:Ks(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Hh(t.settings)&&(i.settings={inTangents:Ks(t.settings.inTangents,Array),outTangents:Ks(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ea:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case Vo:e=this.InterpolantFactoryMethodSmooth;break;case Vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Gt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ea;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Vo;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Hh(this.settings)&&(hf(this.settings.inTangents,t),hf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(qt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){qt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){qt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(n!==void 0&&Z0(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){qt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Vo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(n)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Hh(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function hf(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}Ti.prototype.ValueTypeName="";Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=tl;var Vn=class extends Ti{constructor(t,e,i){super(t,e,i)}};Vn.prototype.ValueTypeName="bool";Vn.prototype.ValueBufferType=Array;Vn.prototype.DefaultInterpolation=ea;Vn.prototype.InterpolantFactoryMethodLinear=void 0;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;var yl=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};yl.prototype.ValueTypeName="color";var bl=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};bl.prototype.ValueTypeName="number";var _l=class extends Gn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(n-e),c=t*o;for(let h=c+o;c!==h;c+=4)gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ra=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Wn=class extends Ti{constructor(t,e,i){super(t,e,i)}};Wn.prototype.ValueTypeName="string";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=ea;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends Ti{constructor(t,e,i,n){super(t,e,i,n)}};Ml.prototype.ValueTypeName="vector";var qo={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(uf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!uf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function uf(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var wl=class{constructor(t,e,i){let n=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},rp=new wl,_r=class{constructor(t){this.manager=t!==void 0?t:rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=new WeakMap,Sl=class extends _r{constructor(t){super(t)}load(t,e,i,n){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=qo.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let d=Qs.get(a);d===void 0&&(d=[],Qs.set(a,d)),d.push({onLoad:e,onError:n})}return a}let o=ar("img");function l(){h(),e&&e(this);let d=Qs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Qs.delete(this),r.manager.itemEnd(t)}function c(d){h(),n&&n(d),qo.remove(`image:${t}`);let u=Qs.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Qs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),qo.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Ca=class extends _r{constructor(t){super(t)}load(t,e,i,n){let r=new ci,a=new Sl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},i,n),r}},Pa=class extends qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},ms=class extends Pa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Gh=new de,df=new R,ff=new R,El=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;df.setFromMatrixPosition(t.matrixWorld),e.position.copy(df),ff.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ff),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Gh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===rr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Gh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ho=new R,Go=new gi,$i=new R,Ia=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ho,Go,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,$i.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ho,Go,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ho,Go,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bn=new R,pf=new tt,mf=new tt,ni=class extends Ia{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,i,n,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,e-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qn=class extends Ia{constructor(t=-1,e=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,a=i+t,o=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Jh=class extends El{constructor(){super(new qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gs=class extends Pa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new Jh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var La=class extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var tr=-90,er=1,Tl=class extends qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new ni(tr,er,t,e);n.layers=this.layers,this.add(n);let r=new ni(tr,er,t,e);r.layers=this.layers,this.add(r);let a=new ni(tr,er,t,e);a.layers=this.layers,this.add(a);let o=new ni(tr,er,t,e);o.layers=this.layers,this.add(o);let l=new ni(tr,er,t,e);l.layers=this.layers,this.add(l);let c=new ni(tr,er,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Al=class extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Da=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=hg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function hg(){this._document.hidden===!1&&this.reset()}var xu="\\[\\]\\.:\\/",ug=new RegExp("["+xu+"]","g"),vu="[^"+xu+"]",dg="[^"+xu.replace("\\.","")+"]",fg=/((?:WC+[\/:])*)/.source.replace("WC",vu),pg=/(WCOD+)?/.source.replace("WCOD",dg),mg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vu),gg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vu),xg=new RegExp("^"+fg+pg+mg+gg+"$"),vg=["material","materials","bones","map"],Kh=class{constructor(t,e,i){let n=i||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Fe=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ug,"")}static parseTrackName(t){let e=xg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);vg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[n];if(a===void 0){let c=e.nodeName;qt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Kh;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var Su=class Su{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};Su.prototype.isMatrix2=!0;var Qh=Su;function yu(s,t,e,i){let n=yg(i);switch(e){case hu:return s*t;case Er:return s*t/n.components*n.byteLength;case Fl:return s*t/n.components*n.byteLength;case Jn:return s*t*2/n.components*n.byteLength;case Ul:return s*t*2/n.components*n.byteLength;case uu:return s*t*3/n.components*n.byteLength;case bi:return s*t*4/n.components*n.byteLength;case Bl:return s*t*4/n.components*n.byteLength;case Va:case Wa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case qa:case Xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Vl:return Math.max(s,16)*Math.max(t,8)/4;case Ol:case Gl:return Math.max(s,8)*Math.max(t,8)/2;case Wl:case ql:case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xl:case Ya:case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case tc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ic:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ac:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hc:case uc:case dc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fc:case pc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case $a:case mc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yg(s){switch(s){case vi:case au:return{byteLength:1,components:1};case wr:case ou:case Ye:return{byteLength:2,components:1};case Nl:case kl:return{byteLength:2,components:4};case Wi:case zl:case yi:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ap(){let s=null,t=!1,e=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Sg(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var Eg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Tg=`#ifdef USE_ALPHAHASH
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
#endif`,Ag=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dg=`#ifdef USE_BATCHING
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
#endif`,zg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ug=`#ifdef USE_IRIDESCENCE
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
#endif`,Bg=`#ifdef USE_BUMPMAP
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
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$g=`#define PI 3.141592653589793
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
} // validated`,jg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zg=`vec3 transformedNormal = objectNormal;
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
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rx=`#ifdef USE_ENVMAP
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
#endif`,ax=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ox=`#ifdef USE_ENVMAP
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
#endif`,lx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dx=`#ifdef USE_GRADIENTMAP
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
}`,fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,px=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xx=`#ifdef USE_ENVMAP
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
#endif`,vx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mx=`PhysicalMaterial material;
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
#endif`,wx=`uniform sampler2D dfgLUT;
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
}`,Sx=`
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
#endif`,Ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,Tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ax=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ux=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ox=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$x=`#ifdef USE_NORMALMAP
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
#endif`,jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,av=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ov=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hv=`float getShadowMask() {
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
}`,uv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dv=`#ifdef USE_SKINNING
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
#endif`,fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yv=`#ifdef USE_TRANSMISSION
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
#endif`,bv=`#ifdef USE_TRANSMISSION
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
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tv=`uniform sampler2D t2D;
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
}`,Av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
}`,Dv=`#define DISTANCE
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
}`,zv=`#define DISTANCE
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`uniform float scale;
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Bv=`#include <common>
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Hv=`#define LAMBERT
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
}`,Gv=`#define LAMBERT
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
}`,Vv=`#define MATCAP
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
}`,Wv=`#define MATCAP
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
}`,qv=`#define NORMAL
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
}`,Xv=`#define NORMAL
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
}`,Yv=`#define PHONG
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
}`,$v=`#define PHONG
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
}`,jv=`#define STANDARD
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
}`,Zv=`#define STANDARD
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
}`,Jv=`#define TOON
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
}`,Kv=`#define TOON
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
}`,Qv=`uniform float size;
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
}`,ty=`uniform vec3 diffuse;
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
}`,ey=`#include <common>
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
}`,iy=`uniform vec3 color;
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
}`,ny=`uniform float rotation;
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
}`,sy=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Eg,alphahash_pars_fragment:Tg,alphamap_fragment:Ag,alphamap_pars_fragment:Rg,alphatest_fragment:Cg,alphatest_pars_fragment:Pg,aomap_fragment:Ig,aomap_pars_fragment:Lg,batching_pars_vertex:Dg,batching_vertex:zg,begin_vertex:Ng,beginnormal_vertex:kg,bsdfs:Fg,iridescence_fragment:Ug,bumpmap_pars_fragment:Bg,clipping_planes_fragment:Og,clipping_planes_pars_fragment:Hg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Vg,color_fragment:Wg,color_pars_fragment:qg,color_pars_vertex:Xg,color_vertex:Yg,common:$g,cube_uv_reflection_fragment:jg,defaultnormal_vertex:Zg,displacementmap_pars_vertex:Jg,displacementmap_vertex:Kg,emissivemap_fragment:Qg,emissivemap_pars_fragment:tx,colorspace_fragment:ex,colorspace_pars_fragment:ix,envmap_fragment:nx,envmap_common_pars_fragment:sx,envmap_pars_fragment:rx,envmap_pars_vertex:ax,envmap_physical_pars_fragment:xx,envmap_vertex:ox,fog_vertex:lx,fog_pars_vertex:cx,fog_fragment:hx,fog_pars_fragment:ux,gradientmap_pars_fragment:dx,lightmap_pars_fragment:fx,lights_lambert_fragment:px,lights_lambert_pars_fragment:mx,lights_pars_begin:gx,lights_toon_fragment:vx,lights_toon_pars_fragment:yx,lights_phong_fragment:bx,lights_phong_pars_fragment:_x,lights_physical_fragment:Mx,lights_physical_pars_fragment:wx,lights_fragment_begin:Sx,lights_fragment_maps:Ex,lights_fragment_end:Tx,lightprobes_pars_fragment:Ax,logdepthbuf_fragment:Rx,logdepthbuf_pars_fragment:Cx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Ix,map_fragment:Lx,map_pars_fragment:Dx,map_particle_fragment:zx,map_particle_pars_fragment:Nx,metalnessmap_fragment:kx,metalnessmap_pars_fragment:Fx,morphinstance_vertex:Ux,morphcolor_vertex:Bx,morphnormal_vertex:Ox,morphtarget_pars_vertex:Hx,morphtarget_vertex:Gx,normal_fragment_begin:Vx,normal_fragment_maps:Wx,normal_pars_fragment:qx,normal_pars_vertex:Xx,normal_vertex:Yx,normalmap_pars_fragment:$x,clearcoat_normal_fragment_begin:jx,clearcoat_normal_fragment_maps:Zx,clearcoat_pars_fragment:Jx,iridescence_pars_fragment:Kx,opaque_fragment:Qx,packing:tv,premultiplied_alpha_fragment:ev,project_vertex:iv,dithering_fragment:nv,dithering_pars_fragment:sv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:av,shadowmap_pars_fragment:ov,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:hv,skinbase_vertex:uv,skinning_pars_vertex:dv,skinning_vertex:fv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:gv,tonemapping_fragment:xv,tonemapping_pars_fragment:vv,transmission_fragment:yv,transmission_pars_fragment:bv,uv_pars_fragment:_v,uv_pars_vertex:Mv,uv_vertex:wv,worldpos_vertex:Sv,background_vert:Ev,background_frag:Tv,backgroundCube_vert:Av,backgroundCube_frag:Rv,cube_vert:Cv,cube_frag:Pv,depth_vert:Iv,depth_frag:Lv,distance_vert:Dv,distance_frag:zv,equirect_vert:Nv,equirect_frag:kv,linedashed_vert:Fv,linedashed_frag:Uv,meshbasic_vert:Bv,meshbasic_frag:Ov,meshlambert_vert:Hv,meshlambert_frag:Gv,meshmatcap_vert:Vv,meshmatcap_frag:Wv,meshnormal_vert:qv,meshnormal_frag:Xv,meshphong_vert:Yv,meshphong_frag:$v,meshphysical_vert:jv,meshphysical_frag:Zv,meshtoon_vert:Jv,meshtoon_frag:Kv,points_vert:Qv,points_frag:ty,shadow_vert:ey,shadow_frag:iy,sprite_vert:ny,sprite_frag:sy},yt={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},sn={basic:{uniforms:hi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:hi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:hi([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:hi([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:hi([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new ot(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:hi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:hi([yt.points,yt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:hi([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:hi([yt.common,yt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:hi([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:hi([yt.sprite,yt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:hi([yt.common,yt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:hi([yt.lights,yt.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};sn.physical={uniforms:hi([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var vc={r:0,b:0,g:0},ry=new de,Rp=new Jt;Rp.set(-1,0,0,0,1,0,0,0,1);function ay(s,t,e,i,n,r){let a=new ot(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=f(v);y===null?m(a,o):y&&y.isColor&&(m(y,1),b=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,b){let y=f(b);y&&(y.isCubeTexture||y.mapping===Ha)?(c===void 0&&(c=new V(new De(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:bs(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ry.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rp),c.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new V(new ri(2,2),new ge({name:"BackgroundMaterial",uniforms:bs(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ae.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(vc,gu(s)),e.buffers.color.setClear(vc.r,vc.g,vc.b,b,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:p,addToRenderList:x,dispose:g}}function oy(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,a=!1;function o(I,z,F,L,B){let Y=!1,X=d(I,L,F,z);r!==X&&(r=X,c(r.object)),Y=f(I,L,F,B),Y&&p(I,L,F,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(I,z,F,L),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function d(I,z,F,L){let B=L.wireframe===!0,Y=i[z.id];Y===void 0&&(Y={},i[z.id]=Y);let X=I.isInstancedMesh===!0?I.id:0,st=Y[X];st===void 0&&(st={},Y[X]=st);let Z=st[F.id];Z===void 0&&(Z={},st[F.id]=Z);let j=Z[B];return j===void 0&&(j=u(l()),Z[B]=j),j}function u(I){let z=[],F=[],L=[];for(let B=0;B<e;B++)z[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:F,attributeDivisors:L,object:I,attributes:{},index:null}}function f(I,z,F,L){let B=r.attributes,Y=z.attributes,X=0,st=F.getAttributes();for(let Z in st)if(st[Z].location>=0){let $=B[Z],dt=Y[Z];if(dt===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(dt=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(dt=I.instanceColor)),$===void 0||$.attribute!==dt||dt&&$.data!==dt.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function p(I,z,F,L){let B={},Y=z.attributes,X=0,st=F.getAttributes();for(let Z in st)if(st[Z].location>=0){let $=Y[Z];$===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&($=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&($=I.instanceColor));let dt={};dt.attribute=$,$&&$.data&&(dt.data=$.data),B[Z]=dt,X++}r.attributes=B,r.attributesNum=X,r.index=L}function x(){let I=r.newAttributes;for(let z=0,F=I.length;z<F;z++)I[z]=0}function m(I){g(I,0)}function g(I,z){let F=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;F[I]=1,L[I]===0&&(s.enableVertexAttribArray(I),L[I]=1),B[I]!==z&&(s.vertexAttribDivisor(I,z),B[I]=z)}function v(){let I=r.newAttributes,z=r.enabledAttributes;for(let F=0,L=z.length;F<L;F++)z[F]!==I[F]&&(s.disableVertexAttribArray(F),z[F]=0)}function b(I,z,F,L,B,Y,X){X===!0?s.vertexAttribIPointer(I,z,F,B,Y):s.vertexAttribPointer(I,z,F,L,B,Y)}function y(I,z,F,L){x();let B=L.attributes,Y=F.getAttributes(),X=z.defaultAttributeValues;for(let st in Y){let Z=Y[st];if(Z.location>=0){let j=B[st];if(j===void 0&&(st==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),st==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let $=j.normalized,dt=j.itemSize,St=t.get(j);if(St===void 0)continue;let ie=St.buffer,Zt=St.type,Bt=St.bytesPerElement,W=Zt===s.INT||Zt===s.UNSIGNED_INT||j.gpuType===zl;if(j.isInterleavedBufferAttribute){let Q=j.data,_t=Q.stride,Xt=j.offset;if(Q.isInstancedInterleavedBuffer){for(let Tt=0;Tt<Z.locationSize;Tt++)g(Z.location+Tt,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Tt=0;Tt<Z.locationSize;Tt++)m(Z.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Tt=0;Tt<Z.locationSize;Tt++)b(Z.location+Tt,dt/Z.locationSize,Zt,$,_t*Bt,(Xt+dt/Z.locationSize*Tt)*Bt,W)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<Z.locationSize;Q++)g(Z.location+Q,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<Z.locationSize;Q++)m(Z.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Q=0;Q<Z.locationSize;Q++)b(Z.location+Q,dt/Z.locationSize,Zt,$,dt*Bt,dt/Z.locationSize*Q*Bt,W)}}else if(X!==void 0){let $=X[st];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(Z.location,$);break;case 3:s.vertexAttrib3fv(Z.location,$);break;case 4:s.vertexAttrib4fv(Z.location,$);break;default:s.vertexAttrib1fv(Z.location,$)}}}}v()}function M(){T();for(let I in i){let z=i[I];for(let F in z){let L=z[F];for(let B in L){let Y=L[B];for(let X in Y)h(Y[X].object),delete Y[X];delete L[B]}}delete i[I]}}function S(I){if(i[I.id]===void 0)return;let z=i[I.id];for(let F in z){let L=z[F];for(let B in L){let Y=L[B];for(let X in Y)h(Y[X].object),delete Y[X];delete L[B]}}delete i[I.id]}function A(I){for(let z in i){let F=i[z];for(let L in F){let B=F[L];if(B[I.id]===void 0)continue;let Y=B[I.id];for(let X in Y)h(Y[X].object),delete Y[X];delete B[I.id]}}}function _(I){for(let z in i){let F=i[z],L=I.isInstancedMesh===!0?I.id:0,B=F[L];if(B!==void 0){for(let Y in B){let X=B[Y];for(let st in X)h(X[st].object),delete X[st];delete B[Y]}delete F[L],Object.keys(F).length===0&&delete i[z]}}}function T(){P(),a=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function ly(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function cy(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==bi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Ye&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==vi&&A!==yi&&!_&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:S}}function hy(s){let t=this,e=null,i=0,n=!1,r=!1,a=new wi,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,b=v*4,y=g.clippingState||null;l.value=y,y=h(p,u,b,f);for(let M=0;M!==b;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,p!==!0||m===null){let g=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=f;b!==x;++b,y+=4)a.copy(d[b]).applyMatrix4(v,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Rr=4,uy=6,dy=20,fy=256,Za=new qn,ap=new ot,Eu=null,Tu=0,Au=0,Ru=!1,py=new R,_s=new R,bc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:a=256,position:o=py}=r;Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Eu,Tu,Au),this._renderer.xr.enabled=Ru,t.scissorTest=!1,Ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$n||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:si,minFilter:si,generateMipmaps:!1,type:Ye,format:bi,colorSpace:ia,depthBuffer:!1},n=op(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=my(r)),this._blurMaterial=xy(r,t,e),this._ggxMaterial=gy(r,t,e)}return n}_compileMaterial(t){let e=new V(new te,t);this._renderer.compile(e,Za)}_sceneToCubeUV(t,e,i,n,r){let l=new ni(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(ap),d.toneMapping=Vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new V(new De,new Qt({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(ap),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let M=this._cubeSize;Ar(n,y*M,b>2?M:0,M,M),d.setRenderTarget(n),g&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===$n||t.mapping===ys;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ar(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Za)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,x=this._sizeLods[i],m=3*x*(i>p-Rr?i-p+Rr:0),g=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Ar(r,m,g,3*x,2*x),n.setRenderTarget(r),n.render(o,Za),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,Ar(t,m,g,3*x,2*x),n.setRenderTarget(t),n.render(o,Za)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,n,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-Rr?n-this._lodMax+Rr:0),u=4*(this._cubeSize-h);Ar(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Za)}};function my(s){let t=[],e=[],i=s,n=s-Rr+1+uy;for(let r=0;r<n;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let g=0;g<d;g++){let v=g%3*2/3-1,b=g>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];p.set(y,f*u*g);for(let M=0;M<u;M++){let S=h[M*2]*2-1,A=h[M*2+1]*2-1;g===0?_s.set(1,A,S):g===1?_s.set(-S,1,-A):g===2?_s.set(-S,A,1):g===3?_s.set(-1,A,-S):g===4?_s.set(-S,-1,A):_s.set(S,A,-1),_s.toArray(x,(g*u+M)*f)}}let m=new te;m.setAttribute("position",new he(p,f)),m.setAttribute("outputDirection",new he(x,f)),e.push(new V(m,null)),i>Rr&&i--}return{lodMeshes:e,sizeLods:t}}function op(s,t,e){let i=new Le(s,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function gy(s,t,e){return new ge({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function xy(s,t,e){return new ge({name:"SphericalGaussianBlur",defines:{SAMPLES:dy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function lp(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function cp(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var _c=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new fa(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new De(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:zi});r.uniforms.tEquirect.value=e;let a=new V(n,r),o=e.minFilter;return e.minFilter===jn&&(e.minFilter=si),new Tl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,n);t.setRenderTarget(r)}};function vy(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Il||f===Ll)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new _c(p.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,p=f===Il||f===Ll,x=f===$n||f===ys;if(p||x){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new bc(s)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new bc(s)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Il?u.mapping=$n:f===Ll&&(u.mapping=ys),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function yy(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&as("WebGLRenderer: "+i+" extension not supported."),n}}}function by(s,t,e,i){let n={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",a),delete n[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,x=0;if(p===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let b=0,y=v.length;b<y;b+=3){let M=v[b+0],S=v[b+1],A=v[b+2];u.push(M,S,S,A,A,M)}}else{let v=p.array;x=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let M=b+0,S=b+1,A=b+2;u.push(M,S,S,A,A,M)}}let m=new(p.count>=65535?ca:la)(u,1);m.version=x;let g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function _y(s,t,e){let i;function n(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function My(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:qt("WebGLInfo: Unknown draw mode:",a);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function wy(s,t,e){let i=new WeakMap,n=new Te;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],b=0;f===!0&&(b=1),p===!0&&(b=2),x===!0&&(b=3);let y=o.attributes.position.count*b,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*M*4*d),A=new ra(S,y,M,d);A.type=yi,A.needsUpdate=!0;let _=b*4;for(let P=0;P<d;P++){let I=m[P],z=g[P],F=v[P],L=y*M*4*P;for(let B=0;B<I.count;B++){let Y=B*_;f===!0&&(n.fromBufferAttribute(I,B),S[L+Y+0]=n.x,S[L+Y+1]=n.y,S[L+Y+2]=n.z,S[L+Y+3]=0),p===!0&&(n.fromBufferAttribute(z,B),S[L+Y+4]=n.x,S[L+Y+5]=n.y,S[L+Y+6]=n.z,S[L+Y+7]=0),x===!0&&(n.fromBufferAttribute(F,B),S[L+Y+8]=n.x,S[L+Y+9]=n.y,S[L+Y+10]=n.z,S[L+Y+11]=F.itemSize===4?n.w:1)}}u={count:d,texture:A,size:new tt(y,M)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Sy(s,t,e,i,n){let r=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Ey={[Na]:"LINEAR_TONE_MAPPING",[ka]:"REINHARD_TONE_MAPPING",[Fa]:"CINEON_TONE_MAPPING",[vs]:"ACES_FILMIC_TONE_MAPPING",[Ba]:"AGX_TONE_MAPPING",[Oa]:"NEUTRAL_TONE_MAPPING",[Ua]:"CUSTOM_TONE_MAPPING"};function Ty(s,t,e,i,n,r){let a=new Le(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new te;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new br({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new V(c,h),u=new qn(-1,1,1,-1,0,1),f=null,p=null,x=!1,m,g=null,v=[],b=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),l!==null&&l.setSize(y,M);for(let S=0;S<v.length;S++){let A=v[S];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let M=a.width,S=a.height;v.length>0&&o===null&&(o=new Le(M,S,{type:Ye,depthBuffer:!1,stencilBuffer:!1}),l=new Le(M,S,{type:Ye,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(M,S)}},this.begin=function(y,M){if(x||y.toneMapping===Vi&&v.length===0)return!1;if(g=M,M!==null){let S=M.width,A=M.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return b===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=Vi,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=m,x=!0;let S=a,A=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(y,A,S,M),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,h.defines={},ae.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let _=Ey[p];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(d,u),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Cp=new ci,Iu=new Hn(1,1),Pp=new ra,Ip=new nl,Lp=new fa,hp=[],up=[],dp=new Float32Array(16),fp=new Float32Array(9),pp=new Float32Array(4);function Pr(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=hp[n];if(r===void 0&&(r=new Float32Array(n),hp[n]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ti(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ei(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Sc(s,t){let e=up[t];e===void 0&&(e=new Int32Array(t),up[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Ay(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ry(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2fv(this.addr,t),ei(e,t)}}function Cy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ti(e,t))return;s.uniform3fv(this.addr,t),ei(e,t)}}function Py(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4fv(this.addr,t),ei(e,t)}}function Iy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;pp.set(i),s.uniformMatrix2fv(this.addr,!1,pp),ei(e,i)}}function Ly(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;fp.set(i),s.uniformMatrix3fv(this.addr,!1,fp),ei(e,i)}}function Dy(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(ti(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ei(e,t)}else{if(ti(e,i))return;dp.set(i),s.uniformMatrix4fv(this.addr,!1,dp),ei(e,i)}}function zy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ny(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2iv(this.addr,t),ei(e,t)}}function ky(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3iv(this.addr,t),ei(e,t)}}function Fy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4iv(this.addr,t),ei(e,t)}}function Uy(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function By(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ti(e,t))return;s.uniform2uiv(this.addr,t),ei(e,t)}}function Oy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ti(e,t))return;s.uniform3uiv(this.addr,t),ei(e,t)}}function Hy(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ti(e,t))return;s.uniform4uiv(this.addr,t),ei(e,t)}}function Gy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Iu.compareFunction=e.isReversedDepthBuffer()?xc:gc,r=Iu):r=Cp,e.setTexture2D(t||r,n)}function Vy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Ip,n)}function Wy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Lp,n)}function qy(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Pp,n)}function Xy(s){switch(s){case 5126:return Ay;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Iy;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return zy;case 35667:case 35671:return Ny;case 35668:case 35672:return ky;case 35669:case 35673:return Fy;case 5125:return Uy;case 36294:return By;case 36295:return Oy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return qy}}function Yy(s,t){s.uniform1fv(this.addr,t)}function $y(s,t){let e=Pr(t,this.size,2);s.uniform2fv(this.addr,e)}function jy(s,t){let e=Pr(t,this.size,3);s.uniform3fv(this.addr,e)}function Zy(s,t){let e=Pr(t,this.size,4);s.uniform4fv(this.addr,e)}function Jy(s,t){let e=Pr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ky(s,t){let e=Pr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qy(s,t){let e=Pr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function t1(s,t){s.uniform1iv(this.addr,t)}function e1(s,t){s.uniform2iv(this.addr,t)}function i1(s,t){s.uniform3iv(this.addr,t)}function n1(s,t){s.uniform4iv(this.addr,t)}function s1(s,t){s.uniform1uiv(this.addr,t)}function r1(s,t){s.uniform2uiv(this.addr,t)}function a1(s,t){s.uniform3uiv(this.addr,t)}function o1(s,t){s.uniform4uiv(this.addr,t)}function l1(s,t,e){let i=this.cache,n=t.length,r=Sc(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Iu:a=Cp;for(let o=0;o!==n;++o)e.setTexture2D(t[o]||a,r[o])}function c1(s,t,e){let i=this.cache,n=t.length,r=Sc(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));for(let a=0;a!==n;++a)e.setTexture3D(t[a]||Ip,r[a])}function h1(s,t,e){let i=this.cache,n=t.length,r=Sc(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));for(let a=0;a!==n;++a)e.setTextureCube(t[a]||Lp,r[a])}function u1(s,t,e){let i=this.cache,n=t.length,r=Sc(e,n);ti(i,r)||(s.uniform1iv(this.addr,r),ei(i,r));for(let a=0;a!==n;++a)e.setTexture2DArray(t[a]||Pp,r[a])}function d1(s){switch(s){case 5126:return Yy;case 35664:return $y;case 35665:return jy;case 35666:return Zy;case 35674:return Jy;case 35675:return Ky;case 35676:return Qy;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return i1;case 35669:case 35673:return n1;case 5125:return s1;case 36294:return r1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return u1}}var Lu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Xy(e.type)}},Du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d1(e.type)}},zu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(t,e[o.id],i)}}},Cu=/(\w+)(\])?(\[|\.)?/g;function mp(s,t){s.seq.push(t),s.map[t.id]=t}function f1(s,t,e){let i=s.name,n=i.length;for(Cu.lastIndex=0;;){let r=Cu.exec(i),a=Cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){mp(e,c===void 0?new Lu(o,s,t):new Du(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new zu(o),mp(e,d)),e=d}}}var Cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);f1(o,l,this)}let n=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let a=t[n];a.id in e&&i.push(a)}return i}};function gp(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var p1=37297,m1=0;function g1(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var xp=new Jt;function x1(s){ae._getMatrix(xp,ae.workingColorSpace,s);let t=`mat3( ${xp.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(s)){case na:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vp(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+g1(s.getShaderSource(t),o)}else return r}function v1(s,t){let e=x1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var y1={[Na]:"Linear",[ka]:"Reinhard",[Fa]:"Cineon",[vs]:"ACESFilmic",[Ba]:"AgX",[Oa]:"Neutral",[Ua]:"Custom"};function b1(s,t){let e=y1[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yc=new R;function _1(){ae.getLuminanceCoefficients(yc);let s=yc.x.toFixed(4),t=yc.y.toFixed(4),e=yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function w1(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function S1(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ka(s){return s!==""}function yp(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bp(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nu(s){return s.replace(E1,A1)}var T1=new Map;function A1(s,t){let e=se[t];if(e===void 0){let i=T1.get(t);if(i!==void 0)e=se[i],Gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Nu(e)}var R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(s){return s.replace(R1,C1)}function C1(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function Mp(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}var P1={[za]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function I1(s){return P1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var L1={[$n]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};function D1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":L1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var z1={[ys]:"ENVMAP_MODE_REFRACTION"};function N1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var k1={[Pl]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[Ff]:"ENVMAP_BLENDING_ADD"};function F1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":k1[s.combine]||"ENVMAP_BLENDING_NONE"}function U1(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function B1(s,t,e,i){let n=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=I1(e),c=D1(e),h=N1(e),d=F1(e),u=U1(e),f=M1(e),p=w1(r),x=n.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ka).join(`
`),g.length>0&&(g+=`
`)):(m=[Mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),g=[Mp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Vi?"#define TONE_MAPPING":"",e.toneMapping!==Vi?se.tonemapping_pars_fragment:"",e.toneMapping!==Vi?b1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),_1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ka).join(`
`)),a=Nu(a),a=yp(a,e),a=bp(a,e),o=Nu(o),o=yp(o,e),o=bp(o,e),a=_p(a),o=_p(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+m+a,y=v+g+o,M=gp(n,n.VERTEX_SHADER,b),S=gp(n,n.FRAGMENT_SHADER,y);n.attachShader(x,M),n.attachShader(x,S),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let z=n.getProgramInfoLog(x)||"",F=n.getShaderInfoLog(M)||"",L=n.getShaderInfoLog(S)||"",B=z.trim(),Y=F.trim(),X=L.trim(),st=!0,Z=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(st=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,M,S);else{let j=vp(n,M,"vertex"),$=vp(n,S,"fragment");qt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+$)}else B!==""?Gt("WebGLProgram: Program Info Log:",B):(Y===""||X==="")&&(Z=!1);Z&&(I.diagnostics={runnable:st,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:X,prefix:g}})}n.deleteShader(M),n.deleteShader(S),_=new Cr(n,x),T=S1(n,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,p1)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var O1=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fu(t),e.set(t,i)),i}},Fu=class{constructor(t){this.id=O1++,this.code=t,this.usedTimes=0}};function H1(s){return s===Jn||s===Ya||s===$a}function G1(s,t,e,i,n,r){let a=new aa,o=new ku,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,I,z,F){let L=I.fog,B=z.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||Y,X),Z=st&&st.mapping===Ha?st.image.height:null,j=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=$!==void 0?$.length:0,St=0;B.morphAttributes.position!==void 0&&(St=1),B.morphAttributes.normal!==void 0&&(St=2),B.morphAttributes.color!==void 0&&(St=3);let ie,Zt,Bt,W;if(j){let Pe=sn[j];ie=Pe.vertexShader,Zt=Pe.fragmentShader}else{ie=_.vertexShader,Zt=_.fragmentShader;let Pe=o.getVertexShaderStage(_),ve=o.getFragmentShaderStage(_);o.update(_,Pe,ve),Bt=Pe.id,W=ve.id}let Q=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),Xt=z.isInstancedMesh===!0,Tt=z.isBatchedMesh===!0,Yt=!!_.map,Me=!!_.matcap,nt=!!st,at=!!_.aoMap,lt=!!_.lightMap,ct=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Vt=!!_.displacementMap,Ot=!!_.emissiveMap,$t=!!_.metalnessMap,Kt=!!_.roughnessMap,D=_.anisotropy>0,xe=_.clearcoat>0,le=_.dispersion>0,C=_.retroreflectivity>0,w=_.iridescence>0,U=_.sheen>0,G=_.transmission>0,J=D&&!!_.anisotropyMap,ut=xe&&!!_.clearcoatMap,ft=xe&&!!_.clearcoatNormalMap,K=xe&&!!_.clearcoatRoughnessMap,it=w&&!!_.iridescenceMap,mt=w&&!!_.iridescenceThicknessMap,Nt=U&&!!_.sheenColorMap,bt=U&&!!_.sheenRoughnessMap,gt=!!_.specularMap,kt=!!_.specularColorMap,Wt=!!_.specularIntensityMap,ee=G&&!!_.transmissionMap,k=G&&!!_.thicknessMap,xt=!!_.gradientMap,et=!!_.alphaMap,vt=_.alphaTest>0,Et=!!_.alphaHash,rt=!!_.extensions,Ut=Vi;_.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ut=s.toneMapping);let Dt={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:ie,fragmentShader:Zt,defines:_.defines,customVertexShaderID:Bt,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Tt,batchingColor:Tt&&z._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&z.instanceColor!==null,instancingMorph:Xt&&z.morphTexture!==null,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:Me,envMap:nt,envMapMode:nt&&st.mapping,envMapCubeUVHeight:Z,aoMap:at,lightMap:lt,bumpMap:ct,normalMap:pt,displacementMap:Vt,emissiveMap:Ot,normalMapObjectSpace:pt&&_.normalMapType===Of,normalMapTangentSpace:pt&&_.normalMapType===Tr,packedNormalMap:pt&&_.normalMapType===Tr&&H1(_.normalMap.format),metalnessMap:$t,roughnessMap:Kt,anisotropy:D,anisotropyMap:J,clearcoat:xe,clearcoatMap:ut,clearcoatNormalMap:ft,clearcoatRoughnessMap:K,dispersion:le,retroreflection:C,iridescence:w,iridescenceMap:it,iridescenceThicknessMap:mt,sheen:U,sheenColorMap:Nt,sheenRoughnessMap:bt,specularMap:gt,specularColorMap:kt,specularIntensityMap:Wt,transmission:G,transmissionMap:ee,thicknessMap:k,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Yn&&_.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:Et,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:at&&p(_.aoMap.channel),lightMapUv:lt&&p(_.lightMap.channel),bumpMapUv:ct&&p(_.bumpMap.channel),normalMapUv:pt&&p(_.normalMap.channel),displacementMapUv:Vt&&p(_.displacementMap.channel),emissiveMapUv:Ot&&p(_.emissiveMap.channel),metalnessMapUv:$t&&p(_.metalnessMap.channel),roughnessMapUv:Kt&&p(_.roughnessMap.channel),anisotropyMapUv:J&&p(_.anisotropyMap.channel),clearcoatMapUv:ut&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(_.sheenRoughnessMap.channel),specularMapUv:gt&&p(_.specularMap.channel),specularColorMapUv:kt&&p(_.specularColorMap.channel),specularIntensityMapUv:Wt&&p(_.specularIntensityMap.channel),transmissionMapUv:ee&&p(_.transmissionMap.channel),thicknessMapUv:k&&p(_.thicknessMap.channel),alphaMapUv:et&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(pt||D),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!B.attributes.uv&&(Yt||et),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:_t,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:St,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===me,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===me,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fe,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&_.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(g(T,_),v(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function g(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let T=f[_.type],P;if(T){let I=sn[T];P=qi.clone(I.uniforms)}else P=_.uniforms;return P}function y(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new B1(s,T,_,n),c.push(P),h.set(T,P)),P}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function V1(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function W1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function wp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Sp(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,m,g){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:g},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=g),t++,v}function l(u,f,p,x,m,g,v){v.reversedDepth===!0&&(m=-m);let b=o(u,f,p,x,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(u,f,p,x,m,g){let v=o(u,f,p,x,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||W1),i.length>1&&i.sort(f||wp),n.length>1&&n.sort(f||wp)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function q1(){let s=new WeakMap;function t(i,n){let r=s.get(i),a;return r===void 0?(a=new Sp,s.set(i,[a])):n>=r.length?(a=new Sp,r.push(a)):a=r[n],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function X1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new R,color:new ot};break;case"SpotLight":e={position:new R,direction:new R,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":e={color:new ot,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Y1(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var $1=0;function j1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Z1(s){let t=new X1,e=Y1(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new R);let n=new R,r=new de,a=new de;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,x=0,m=0,g=0,v=0,b=0,y=0,M=0,S=0,A=0,_=0,T=0,P=0;c.sort(j1);for(let z=0,F=c.length;z<F;z++){let L=c[z],B=L.color,Y=L.intensity,X=L.distance,st=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Jn?st=L.shadow.map.texture:st=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=B.r*Y,d+=B.g*Y,u+=B.b*Y;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],Y);P++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,$=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[p]=$,i.sunShadowMap[p]=st;let dt=j.getViewportCount();for(let St=0;St<dt;St++)i.sunShadowMatrix[x+St]=j.getMatrix(St),i.sunShadowCascade[x+St]=j._cascadeData[St];x+=dt,p++}i.sun[f]=Z,f++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,$=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=L.shadow.matrix,M++}i.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(B).multiplyScalar(Y),Z.distance=X,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[v]=Z;let j=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,j.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=j.matrix,L.castShadow){let $=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=st,A++}v++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(B).multiplyScalar(Y),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[b]=Z,b++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let j=L.shadow,$=e.get(L);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=st,i.pointShadowMatrix[g]=L.shadow.matrix,S++}i.point[g]=Z,g++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(Y),Z.groundColor.copy(L.groundColor).multiplyScalar(Y),i.hemi[y]=Z,y++}}b>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=g,I.spotLength=v,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=P,i.version=$1++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,m=0,g=h.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let M=i.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),u++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Ep(s){let t=new Z1(s),e=[],i=[],n=[];function r(u){d.camera=u,e.length=0,i.length=0,n.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){n.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function J1(s){let t=new WeakMap;function e(n,r=0){let a=t.get(n),o;return a===void 0?(o=new Ep(s),t.set(n,[o])):r>=a.length?(o=new Ep(s),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Q1=`uniform sampler2D shadow_pass;
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
}`,tb=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],eb=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Tp=new de,Ja=new R,Pu=new R;function ib(s,t,e){let i=new fr,n=new tt,r=new tt,a=new Te,o=new fl,l=new pl,c={},h=e.maxTextureSize,d={[Xn]:Qe,[Qe]:Xn,[fe]:fe},u=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:K1,fragmentShader:Q1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new te;p.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new V(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let g=this.type;this.render=function(S,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Cl&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),z=s.state;z.setBlending(zi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let F=g!==this.type;F&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=S.length;L<B;L++){let Y=S[L],X=Y.shadow;if(X===void 0){Gt("WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let st=X.getFrameExtents();n.multiply(st),r.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/st.x),n.x=r.x*st.x,X.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/st.y),n.y=r.y*st.y,X.mapSize.y=r.y));let Z=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Z,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if(Y.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Le(n.x,n.y,{format:Jn,type:Ye,minFilter:si,magFilter:si,generateMipmaps:!1}),X.map.texture.name=Y.name+".shadowMap",X.map.depthTexture=new Hn(n.x,n.y,yi),X.map.depthTexture.name=Y.name+".shadowMapDepth",X.map.depthTexture.format=Ki,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He}else Y.isPointLight?(X.map=new _c(n.x),X.map.depthTexture=new ol(n.x,Wi)):(X.map=new Le(n.x,n.y),X.map.depthTexture=new Hn(n.x,n.y,Wi)),X.map.depthTexture.name=Y.name+".shadowMap",X.map.depthTexture.format=Ki,this.type===za?(X.map.depthTexture.compareFunction=Z?xc:gc,X.map.depthTexture.minFilter=si,X.map.depthTexture.magFilter=si):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=He,X.map.depthTexture.magFilter=He);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==n.x||X.map.height!==n.y)&&X.map.setSize(n.x,n.y);let j=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();Y.isPointLight!==!0&&X.updateMatrices(Y,_);for(let $=0;$<j;$++){let dt=X.getCamera($);if(Y.isPointLight){let St=X.camera,ie=X.matrix,Zt=Y.distance||St.far;Zt!==St.far&&(St.far=Zt,St.updateProjectionMatrix()),Ja.setFromMatrixPosition(Y.matrixWorld),St.position.copy(Ja),Pu.copy(St.position),Pu.add(tb[$]),St.up.copy(eb[$]),St.lookAt(Pu),St.updateMatrixWorld(),ie.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Tp.multiplyMatrices(St.projectionMatrix,St.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Tp,St.coordinateSystem,St.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,$),s.clear();else{$===0&&(s.setRenderTarget(X.map),s.clear());let St=X.getViewport($);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),z.viewport(a)}i=X.getFrustum($),y(A,_,dt,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&v(X,_),X.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,I)};function v(S,A){let _=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Le(n.x,n.y,{format:Jn,type:Ye}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(A,null,_,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(A,null,_,f,x,null)}function b(S,A,_,T){let P=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let z=P.uuid,F=A.uuid,L=c[z];L===void 0&&(L={},c[z]=L);let B=L[F];B===void 0&&(B=P.clone(),L[F]=B,A.addEventListener("dispose",M)),P=B}if(P.visible=A.visible,P.wireframe=A.wireframe,T===Mr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:d[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=s.properties.get(P);z.light=_}return P}function y(S,A,_,T,P){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Mr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let F=t.update(S),L=S.material;if(Array.isArray(L)){let B=F.groups;for(let Y=0,X=B.length;Y<X;Y++){let st=B[Y],Z=L[st.materialIndex];if(Z&&Z.visible){let j=b(S,Z,T,P);S.onBeforeShadow(s,S,A,_,F,j,st),s.renderBufferDirect(_,null,F,j,S,st),S.onAfterShadow(s,S,A,_,F,j,st)}}}else if(L.visible){let B=b(S,L,T,P);S.onBeforeShadow(s,S,A,_,F,B,null),s.renderBufferDirect(_,null,F,B,S,null),S.onAfterShadow(s,S,A,_,F,B,null)}}let z=S.children;for(let F=0,L=z.length;F<L;F++)y(z[F],A,_,T,P)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],P=S.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function nb(s,t){function e(){let k=!1,xt=new Te,et=null,vt=new Te(0,0,0,0);return{setMask:function(Et){et!==Et&&!k&&(s.colorMask(Et,Et,Et,Et),et=Et)},setLocked:function(Et){k=Et},setClear:function(Et,rt,Ut,Dt,Pe){Pe===!0&&(Et*=Dt,rt*=Dt,Ut*=Dt),xt.set(Et,rt,Ut,Dt),vt.equals(xt)===!1&&(s.clearColor(Et,rt,Ut,Dt),vt.copy(xt))},reset:function(){k=!1,et=null,vt.set(-1,0,0,0)}}}function i(){let k=!1,xt=!1,et=null,vt=null,Et=null;return{setReversed:function(rt){if(xt!==rt){let Ut=t.get("EXT_clip_control");rt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let Dt=Et;Et=null,this.setClear(Dt)}},getReversed:function(){return xt},setTest:function(rt){rt?Q(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(rt){et!==rt&&!k&&(s.depthMask(rt),et=rt)},setFunc:function(rt){if(xt&&(rt=Jf[rt]),vt!==rt){switch(rt){case Xo:s.depthFunc(s.NEVER);break;case Yo:s.depthFunc(s.ALWAYS);break;case $o:s.depthFunc(s.LESS);break;case nr:s.depthFunc(s.LEQUAL);break;case jo:s.depthFunc(s.EQUAL);break;case Zo:s.depthFunc(s.GEQUAL);break;case Jo:s.depthFunc(s.GREATER);break;case Ko:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=rt}},setLocked:function(rt){k=rt},setClear:function(rt){Et!==rt&&(Et=rt,xt&&(rt=1-rt),s.clearDepth(rt))},reset:function(){k=!1,et=null,vt=null,Et=null,xt=!1}}}function n(){let k=!1,xt=null,et=null,vt=null,Et=null,rt=null,Ut=null,Dt=null,Pe=null;return{setTest:function(ve){k||(ve?Q(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ve){xt!==ve&&!k&&(s.stencilMask(ve),xt=ve)},setFunc:function(ve,Fi,Xi){(et!==ve||vt!==Fi||Et!==Xi)&&(s.stencilFunc(ve,Fi,Xi),et=ve,vt=Fi,Et=Xi)},setOp:function(ve,Fi,Xi){(rt!==ve||Ut!==Fi||Dt!==Xi)&&(s.stencilOp(ve,Fi,Xi),rt=ve,Ut=Fi,Dt=Xi)},setLocked:function(ve){k=ve},setClear:function(ve){Pe!==ve&&(s.clearStencil(ve),Pe=ve)},reset:function(){k=!1,xt=null,et=null,vt=null,Et=null,rt=null,Ut=null,Dt=null,Pe=null}}}let r=new e,a=new i,o=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,M=null,S=null,A=null,_=new ot(0,0,0),T=0,P=!1,I=null,z=null,F=null,L=null,B=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,st=0,Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Z)[1]),X=st>=1):Z.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),X=st>=2);let j=null,$={},dt=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),ie=new Te().fromArray(dt),Zt=new Te().fromArray(St);function Bt(k,xt,et,vt){let Et=new Uint8Array(4),rt=s.createTexture();s.bindTexture(k,rt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<et;Ut++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(xt,0,s.RGBA,1,1,vt,0,s.RGBA,s.UNSIGNED_BYTE,Et):s.texImage2D(xt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Et);return rt}let W={};W[s.TEXTURE_2D]=Bt(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=Bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=Bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=Bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(nr),ct(!1),pt(tu),Q(s.CULL_FACE),at(zi);function Q(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function _t(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function Xt(k,xt){return u[k]!==xt?(s.bindFramebuffer(k,xt),u[k]=xt,k===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=xt),k===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=xt),!0):!1}function Tt(k,xt){let et=p,vt=!1;if(k){et=f.get(xt),et===void 0&&(et=[],f.set(xt,et));let Et=k.textures;if(et.length!==Et.length||et[0]!==s.COLOR_ATTACHMENT0){for(let rt=0,Ut=Et.length;rt<Ut;rt++)et[rt]=s.COLOR_ATTACHMENT0+rt;et.length=Et.length,vt=!0}}else et[0]!==s.BACK&&(et[0]=s.BACK,vt=!0);vt&&s.drawBuffers(et)}function Yt(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let Me={[xs]:s.FUNC_ADD,[yf]:s.FUNC_SUBTRACT,[bf]:s.FUNC_REVERSE_SUBTRACT};Me[_f]=s.MIN,Me[Mf]=s.MAX;let nt={[wf]:s.ZERO,[Sf]:s.ONE,[Ef]:s.SRC_COLOR,[nu]:s.SRC_ALPHA,[If]:s.SRC_ALPHA_SATURATE,[Cf]:s.DST_COLOR,[Af]:s.DST_ALPHA,[Tf]:s.ONE_MINUS_SRC_COLOR,[su]:s.ONE_MINUS_SRC_ALPHA,[Pf]:s.ONE_MINUS_DST_COLOR,[Rf]:s.ONE_MINUS_DST_ALPHA,[Lf]:s.CONSTANT_COLOR,[Df]:s.ONE_MINUS_CONSTANT_COLOR,[zf]:s.CONSTANT_ALPHA,[Nf]:s.ONE_MINUS_CONSTANT_ALPHA};function at(k,xt,et,vt,Et,rt,Ut,Dt,Pe,ve){if(k===zi){m===!0&&(_t(s.BLEND),m=!1);return}if(m===!1&&(Q(s.BLEND),m=!0),k!==vf){if(k!==g||ve!==P){if((v!==xs||M!==xs)&&(s.blendEquation(s.FUNC_ADD),v=xs,M=xs),ve)switch(k){case Yn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFunc(s.ONE,s.ONE);break;case eu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case iu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:qt("WebGLState: Invalid blending: ",k);break}else switch(k){case Yn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case eu:qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iu:qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qt("WebGLState: Invalid blending: ",k);break}b=null,y=null,S=null,A=null,_.set(0,0,0),T=0,g=k,P=ve}return}Et=Et||xt,rt=rt||et,Ut=Ut||vt,(xt!==v||Et!==M)&&(s.blendEquationSeparate(Me[xt],Me[Et]),v=xt,M=Et),(et!==b||vt!==y||rt!==S||Ut!==A)&&(s.blendFuncSeparate(nt[et],nt[vt],nt[rt],nt[Ut]),b=et,y=vt,S=rt,A=Ut),(Dt.equals(_)===!1||Pe!==T)&&(s.blendColor(Dt.r,Dt.g,Dt.b,Pe),_.copy(Dt),T=Pe),g=k,P=!1}function lt(k,xt){k.side===fe?_t(s.CULL_FACE):Q(s.CULL_FACE);let et=k.side===Qe;xt&&(et=!et),ct(et),k.blending===Yn&&k.transparent===!1?at(zi):at(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let vt=k.stencilWrite;o.setTest(vt),vt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ot(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(k){I!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),I=k)}function pt(k){k!==gf?(Q(s.CULL_FACE),k!==z&&(k===tu?s.cullFace(s.BACK):k===xf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),z=k}function Vt(k){k!==F&&(X&&s.lineWidth(k),F=k)}function Ot(k,xt,et){k?(Q(s.POLYGON_OFFSET_FILL),(L!==xt||B!==et)&&(L=xt,B=et,a.getReversed()&&(xt=-xt),s.polygonOffset(xt,et))):_t(s.POLYGON_OFFSET_FILL)}function $t(k){k?Q(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function Kt(k){k===void 0&&(k=s.TEXTURE0+Y-1),j!==k&&(s.activeTexture(k),j=k)}function D(k,xt,et){et===void 0&&(j===null?et=s.TEXTURE0+Y-1:et=j);let vt=$[et];vt===void 0&&(vt={type:void 0,texture:void 0},$[et]=vt),(vt.type!==k||vt.texture!==xt)&&(j!==et&&(s.activeTexture(et),j=et),s.bindTexture(k,xt||W[k]),vt.type=k,vt.texture=xt)}function xe(){let k=$[j];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function le(){try{s.compressedTexImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function w(){try{s.texSubImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function U(){try{s.texSubImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function J(){try{s.compressedTexSubImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function ut(){try{s.texStorage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function ft(){try{s.texStorage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function K(){try{s.texImage2D(...arguments)}catch(k){qt("WebGLState:",k)}}function it(){try{s.texImage3D(...arguments)}catch(k){qt("WebGLState:",k)}}function mt(k){return d[k]!==void 0?d[k]:s.getParameter(k)}function Nt(k,xt){d[k]!==xt&&(s.pixelStorei(k,xt),d[k]=xt)}function bt(k){ie.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function gt(k){Zt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Zt.copy(k))}function kt(k,xt){let et=c.get(xt);et===void 0&&(et=new WeakMap,c.set(xt,et));let vt=et.get(k);vt===void 0&&(vt=s.getUniformBlockIndex(xt,k.name),et.set(k,vt))}function Wt(k,xt){let vt=c.get(xt).get(k);l.get(xt)!==vt&&(s.uniformBlockBinding(xt,vt,k.__bindingPointIndex),l.set(xt,vt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,$={},u={},f=new WeakMap,p=[],x=null,m=!1,g=null,v=null,b=null,y=null,M=null,S=null,A=null,_=new ot(0,0,0),T=0,P=!1,I=null,z=null,F=null,L=null,B=null,ie.set(0,0,s.canvas.width,s.canvas.height),Zt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:_t,bindFramebuffer:Xt,drawBuffers:Tt,useProgram:Yt,setBlending:at,setMaterial:lt,setFlipSided:ct,setCullFace:pt,setLineWidth:Vt,setPolygonOffset:Ot,setScissorTest:$t,activeTexture:Kt,bindTexture:D,unbindTexture:xe,compressedTexImage2D:le,compressedTexImage3D:C,texImage2D:K,texImage3D:it,pixelStorei:Nt,getParameter:mt,updateUBOMapping:kt,uniformBlockBinding:Wt,texStorage2D:ut,texStorage3D:ft,texSubImage2D:w,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:J,scissor:bt,viewport:gt,reset:ee}}function sb(s,t,e,i,n,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,w){return p?new OffscreenCanvas(C,w):ar("canvas")}function m(C,w,U){let G=1,J=le(C);if((J.width>U||J.height>U)&&(G=U/Math.max(J.width,J.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ut=Math.floor(G*J.width),ft=Math.floor(G*J.height);u===void 0&&(u=x(ut,ft));let K=w?x(ut,ft):u;return K.width=ut,K.height=ft,K.getContext("2d").drawImage(C,0,0,ut,ft),Gt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ut+"x"+ft+")."),K}else return"data"in C&&Gt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function g(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(C,w,U,G,J,ut=!1){if(C!==null){if(s[C]!==void 0)return s[C];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;G&&(ft=t.get("EXT_texture_norm16"),ft||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=w;if(w===s.RED&&(U===s.FLOAT&&(K=s.R32F),U===s.HALF_FLOAT&&(K=s.R16F),U===s.UNSIGNED_BYTE&&(K=s.R8),U===s.UNSIGNED_SHORT&&ft&&(K=ft.R16_EXT),U===s.SHORT&&ft&&(K=ft.R16_SNORM_EXT)),w===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.R8UI),U===s.UNSIGNED_SHORT&&(K=s.R16UI),U===s.UNSIGNED_INT&&(K=s.R32UI),U===s.BYTE&&(K=s.R8I),U===s.SHORT&&(K=s.R16I),U===s.INT&&(K=s.R32I)),w===s.RG&&(U===s.FLOAT&&(K=s.RG32F),U===s.HALF_FLOAT&&(K=s.RG16F),U===s.UNSIGNED_BYTE&&(K=s.RG8),U===s.UNSIGNED_SHORT&&ft&&(K=ft.RG16_EXT),U===s.SHORT&&ft&&(K=ft.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RG8UI),U===s.UNSIGNED_SHORT&&(K=s.RG16UI),U===s.UNSIGNED_INT&&(K=s.RG32UI),U===s.BYTE&&(K=s.RG8I),U===s.SHORT&&(K=s.RG16I),U===s.INT&&(K=s.RG32I)),w===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGB8UI),U===s.UNSIGNED_SHORT&&(K=s.RGB16UI),U===s.UNSIGNED_INT&&(K=s.RGB32UI),U===s.BYTE&&(K=s.RGB8I),U===s.SHORT&&(K=s.RGB16I),U===s.INT&&(K=s.RGB32I)),w===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),U===s.UNSIGNED_INT&&(K=s.RGBA32UI),U===s.BYTE&&(K=s.RGBA8I),U===s.SHORT&&(K=s.RGBA16I),U===s.INT&&(K=s.RGBA32I)),w===s.RGB&&(U===s.UNSIGNED_SHORT&&ft&&(K=ft.RGB16_EXT),U===s.SHORT&&ft&&(K=ft.RGB16_SNORM_EXT),U===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),w===s.RGBA){let it=ut?na:ae.getTransfer(J);U===s.FLOAT&&(K=s.RGBA32F),U===s.HALF_FLOAT&&(K=s.RGBA16F),U===s.UNSIGNED_BYTE&&(K=it===me?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT&&ft&&(K=ft.RGBA16_EXT),U===s.SHORT&&ft&&(K=ft.RGBA16_SNORM_EXT),U===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(C,w){let U;return C?w===null||w===Wi||w===Sr?U=s.DEPTH24_STENCIL8:w===yi?U=s.DEPTH32F_STENCIL8:w===wr&&(U=s.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Wi||w===Sr?U=s.DEPTH_COMPONENT24:w===yi?U=s.DEPTH_COMPONENT32F:w===wr&&(U=s.DEPTH_COMPONENT16),U}function S(C,w){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==He&&C.minFilter!==si?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function A(C){let w=C.target;w.removeEventListener("dispose",A),T(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function _(C){let w=C.target;w.removeEventListener("dispose",_),I(w)}function T(C){let w=i.get(C);if(w.__webglInit===void 0)return;let U=C.source,G=f.get(U);if(G){let J=G[w.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(C),Object.keys(G).length===0&&f.delete(U)}i.remove(C)}function P(C){let w=i.get(C);s.deleteTexture(w.__webglTexture);let U=C.source,G=f.get(U);delete G[w.__cacheKey],a.memory.textures--}function I(C){let w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(w.__webglFramebuffer[G]))for(let J=0;J<w.__webglFramebuffer[G].length;J++)s.deleteFramebuffer(w.__webglFramebuffer[G][J]);else s.deleteFramebuffer(w.__webglFramebuffer[G]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[G])}else{if(Array.isArray(w.__webglFramebuffer))for(let G=0;G<w.__webglFramebuffer.length;G++)s.deleteFramebuffer(w.__webglFramebuffer[G]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let G=0;G<w.__webglColorRenderbuffer.length;G++)w.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[G]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let U=C.textures;for(let G=0,J=U.length;G<J;G++){let ut=i.get(U[G]);ut.__webglTexture&&(s.deleteTexture(ut.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(C)}let z=0;function F(){z=0}function L(){return z}function B(C){z=C}function Y(){let C=z;return C>=n.maxTextures&&Gt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),z+=1,C}function X(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function st(C,w){let U=i.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){let G=C.image;if(G===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(U,C,w);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+w)}function Z(C,w){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){_t(U,C,w);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+w)}function j(C,w){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){_t(U,C,w);return}e.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+w)}function $(C,w){let U=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){Xt(U,C,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+w)}let dt={[sr]:s.REPEAT,[ji]:s.CLAMP_TO_EDGE,[Qo]:s.MIRRORED_REPEAT},St={[He]:s.NEAREST,[Uf]:s.NEAREST_MIPMAP_NEAREST,[Ga]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[Dl]:s.LINEAR_MIPMAP_NEAREST,[jn]:s.LINEAR_MIPMAP_LINEAR},ie={[Gf]:s.NEVER,[Yf]:s.ALWAYS,[Vf]:s.LESS,[gc]:s.LEQUAL,[Wf]:s.EQUAL,[xc]:s.GEQUAL,[qf]:s.GREATER,[Xf]:s.NOTEQUAL};function Zt(C,w){if(w.type===yi&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===si||w.magFilter===Dl||w.magFilter===Ga||w.magFilter===jn||w.minFilter===si||w.minFilter===Dl||w.minFilter===Ga||w.minFilter===jn)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,dt[w.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,dt[w.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,dt[w.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,St[w.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ie[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===He||w.minFilter!==Ga&&w.minFilter!==jn||w.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Bt(C,w){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",A));let G=w.source,J=f.get(G);J===void 0&&(J={},f.set(G,J));let ut=X(w);if(ut!==C.__cacheKey){J[ut]===void 0&&(J[ut]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[ut].usedTimes++;let ft=J[C.__cacheKey];ft!==void 0&&(J[C.__cacheKey].usedTimes--,ft.usedTimes===0&&P(w)),C.__cacheKey=ut,C.__webglTexture=J[ut].texture}return U}function W(C,w,U){return Math.floor(Math.floor(C/U)/w)}function Q(C,w,U,G){let ut=C.updateRanges;if(ut.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,U,G,w.data);else{ut.sort((Nt,bt)=>Nt.start-bt.start);let ft=0;for(let Nt=1;Nt<ut.length;Nt++){let bt=ut[ft],gt=ut[Nt],kt=bt.start+bt.count,Wt=W(gt.start,w.width,4),ee=W(bt.start,w.width,4);gt.start<=kt+1&&Wt===ee&&W(gt.start+gt.count-1,w.width,4)===Wt?bt.count=Math.max(bt.count,gt.start+gt.count-bt.start):(++ft,ut[ft]=gt)}ut.length=ft+1;let K=e.getParameter(s.UNPACK_ROW_LENGTH),it=e.getParameter(s.UNPACK_SKIP_PIXELS),mt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Nt=0,bt=ut.length;Nt<bt;Nt++){let gt=ut[Nt],kt=Math.floor(gt.start/4),Wt=Math.ceil(gt.count/4),ee=kt%w.width,k=Math.floor(kt/w.width),xt=Wt,et=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,ee),e.pixelStorei(s.UNPACK_SKIP_ROWS,k),e.texSubImage2D(s.TEXTURE_2D,0,ee,k,xt,et,U,G,w.data)}C.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,K),e.pixelStorei(s.UNPACK_SKIP_PIXELS,it),e.pixelStorei(s.UNPACK_SKIP_ROWS,mt)}}function _t(C,w,U){let G=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(G=s.TEXTURE_3D);let J=Bt(C,w),ut=w.source;e.bindTexture(G,C.__webglTexture,s.TEXTURE0+U);let ft=i.get(ut);if(ut.version!==ft.__version||J===!0){if(e.activeTexture(s.TEXTURE0+U),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let et=ae.getPrimaries(ae.workingColorSpace),vt=w.colorSpace===Ni?null:ae.getPrimaries(w.colorSpace),Et=w.colorSpace===Ni||et===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let it=m(w.image,!1,n.maxTextureSize);it=xe(w,it);let mt=r.convert(w.format,w.colorSpace),Nt=r.convert(w.type),bt=y(w.internalFormat,mt,Nt,w.normalized,w.colorSpace,w.isVideoTexture);Zt(G,w);let gt,kt=w.mipmaps,Wt=w.isVideoTexture!==!0,ee=ft.__version===void 0||J===!0,k=ut.dataReady,xt=S(w,it);if(w.isDepthTexture)bt=M(w.format===Zn,w.type),ee&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,bt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,bt,it.width,it.height,0,mt,Nt,null));else if(w.isDataTexture)if(kt.length>0){Wt&&ee&&e.texStorage2D(s.TEXTURE_2D,xt,bt,kt[0].width,kt[0].height);for(let et=0,vt=kt.length;et<vt;et++)gt=kt[et],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(s.TEXTURE_2D,et,bt,gt.width,gt.height,0,mt,Nt,gt.data);w.generateMipmaps=!1}else Wt?(ee&&e.texStorage2D(s.TEXTURE_2D,xt,bt,it.width,it.height),k&&Q(w,it,mt,Nt)):e.texImage2D(s.TEXTURE_2D,0,bt,it.width,it.height,0,mt,Nt,it.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Wt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,bt,kt[0].width,kt[0].height,it.depth);for(let et=0,vt=kt.length;et<vt;et++)if(gt=kt[et],w.format!==bi)if(mt!==null)if(Wt){if(k)if(w.layerUpdates.size>0){let Et=yu(gt.width,gt.height,w.format,w.type);for(let rt of w.layerUpdates){let Ut=gt.data.subarray(rt*Et/gt.data.BYTES_PER_ELEMENT,(rt+1)*Et/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,rt,gt.width,gt.height,1,mt,Ut)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,et,bt,gt.width,gt.height,it.depth,0,gt.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?k&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,et,0,0,0,gt.width,gt.height,it.depth,mt,Nt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,et,bt,gt.width,gt.height,it.depth,0,mt,Nt,gt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Wt&&ee&&e.texStorage2D(s.TEXTURE_2D,xt,bt,kt[0].width,kt[0].height);for(let et=0,vt=kt.length;et<vt;et++)gt=kt[et],w.format!==bi?mt!==null?Wt?k&&e.compressedTexSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,et,bt,gt.width,gt.height,0,gt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,gt.width,gt.height,mt,Nt,gt.data):e.texImage2D(s.TEXTURE_2D,et,bt,gt.width,gt.height,0,mt,Nt,gt.data)}else if(w.isDataArrayTexture)if(Wt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,bt,it.width,it.height,it.depth),k)if(w.layerUpdates.size>0){let et=yu(it.width,it.height,w.format,w.type);for(let vt of w.layerUpdates){let Et=it.data.subarray(vt*et/it.data.BYTES_PER_ELEMENT,(vt+1)*et/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,vt,it.width,it.height,1,mt,Nt,Et)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Nt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,it.width,it.height,it.depth,0,mt,Nt,it.data);else if(w.isData3DTexture)Wt?(ee&&e.texStorage3D(s.TEXTURE_3D,xt,bt,it.width,it.height,it.depth),k&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Nt,it.data)):e.texImage3D(s.TEXTURE_3D,0,bt,it.width,it.height,it.depth,0,mt,Nt,it.data);else if(w.isFramebufferTexture){if(ee)if(Wt)e.texStorage2D(s.TEXTURE_2D,xt,bt,it.width,it.height);else{let et=it.width,vt=it.height;for(let Et=0;Et<xt;Et++)e.texImage2D(s.TEXTURE_2D,Et,bt,et,vt,0,mt,Nt,null),et>>=1,vt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){let et=s.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),it.parentNode!==et){et.appendChild(it),d.add(w),et.onpaint=vt=>{let Et=vt.changedElements;for(let rt of d)Et.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,it);else{let Et=s.RGBA,rt=s.RGBA,Ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Et,rt,Ut,it)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(kt.length>0){if(Wt&&ee){let et=le(kt[0]);e.texStorage2D(s.TEXTURE_2D,xt,bt,et.width,et.height)}for(let et=0,vt=kt.length;et<vt;et++)gt=kt[et],Wt?k&&e.texSubImage2D(s.TEXTURE_2D,et,0,0,mt,Nt,gt):e.texImage2D(s.TEXTURE_2D,et,bt,mt,Nt,gt);w.generateMipmaps=!1}else if(Wt){if(ee){let et=le(it);e.texStorage2D(s.TEXTURE_2D,xt,bt,et.width,et.height)}k&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Nt,it)}else e.texImage2D(s.TEXTURE_2D,0,bt,mt,Nt,it);g(w)&&v(G),ft.__version=ut.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Xt(C,w,U){if(w.image.length!==6)return;let G=Bt(C,w),J=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+U);let ut=i.get(J);if(J.version!==ut.__version||G===!0){e.activeTexture(s.TEXTURE0+U);let ft=ae.getPrimaries(ae.workingColorSpace),K=w.colorSpace===Ni?null:ae.getPrimaries(w.colorSpace),it=w.colorSpace===Ni||ft===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let mt=w.isCompressedTexture||w.image[0].isCompressedTexture,Nt=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let rt=0;rt<6;rt++)!mt&&!Nt?bt[rt]=m(w.image[rt],!0,n.maxCubemapSize):bt[rt]=Nt?w.image[rt].image:w.image[rt],bt[rt]=xe(w,bt[rt]);let gt=bt[0],kt=r.convert(w.format,w.colorSpace),Wt=r.convert(w.type),ee=y(w.internalFormat,kt,Wt,w.normalized,w.colorSpace),k=w.isVideoTexture!==!0,xt=ut.__version===void 0||G===!0,et=J.dataReady,vt=S(w,gt);Zt(s.TEXTURE_CUBE_MAP,w);let Et;if(mt){k&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ee,gt.width,gt.height);for(let rt=0;rt<6;rt++){Et=bt[rt].mipmaps;for(let Ut=0;Ut<Et.length;Ut++){let Dt=Et[Ut];w.format!==bi?kt!==null?k?et&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Dt.width,Dt.height,kt,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,ee,Dt.width,Dt.height,0,Dt.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,0,0,Dt.width,Dt.height,kt,Wt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut,ee,Dt.width,Dt.height,0,kt,Wt,Dt.data)}}}else{if(Et=w.mipmaps,k&&xt){Et.length>0&&vt++;let rt=le(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,vt,ee,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Nt){k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt[rt].width,bt[rt].height,kt,Wt,bt[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ee,bt[rt].width,bt[rt].height,0,kt,Wt,bt[rt].data);for(let Ut=0;Ut<Et.length;Ut++){let Pe=Et[Ut].image[rt].image;k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,Pe.width,Pe.height,kt,Wt,Pe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,ee,Pe.width,Pe.height,0,kt,Wt,Pe.data)}}else{k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,kt,Wt,bt[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ee,kt,Wt,bt[rt]);for(let Ut=0;Ut<Et.length;Ut++){let Dt=Et[Ut];k?et&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,0,0,kt,Wt,Dt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ut+1,ee,kt,Wt,Dt.image[rt])}}}g(w)&&v(s.TEXTURE_CUBE_MAP),ut.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function Tt(C,w,U,G,J,ut){let ft=r.convert(U.format,U.colorSpace),K=r.convert(U.type),it=y(U.internalFormat,ft,K,U.normalized,U.colorSpace),mt=i.get(w),Nt=i.get(U);if(Nt.__renderTarget=w,!mt.__hasExternalTextures){let bt=Math.max(1,w.width>>ut),gt=Math.max(1,w.height>>ut);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,it,bt,gt,w.depth,0,ft,K,null):e.texImage2D(J,ut,it,bt,gt,0,ft,K,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Kt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,J,Nt.__webglTexture,0,$t(w)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,J,Nt.__webglTexture,ut),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(C,w,U){if(s.bindRenderbuffer(s.RENDERBUFFER,C),w.depthBuffer){let G=w.depthTexture,J=G&&G.isDepthTexture?G.type:null,ut=M(w.stencilBuffer,J),ft=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Kt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),ut,w.width,w.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),ut,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ut,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ft,s.RENDERBUFFER,C)}else{let G=w.textures;for(let J=0;J<G.length;J++){let ut=G[J],ft=r.convert(ut.format,ut.colorSpace),K=r.convert(ut.type),it=y(ut.internalFormat,ft,K,ut.normalized,ut.colorSpace);Kt(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t(w),it,w.width,w.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t(w),it,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,it,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(C,w,U){let G=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(w.depthTexture);if(J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G){if(J.__webglInit===void 0&&(J.__webglInit=!0,w.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,w.depthTexture);let mt=r.convert(w.depthTexture.format),Nt=r.convert(w.depthTexture.type),bt;w.depthTexture.format===Ki?bt=s.DEPTH_COMPONENT24:w.depthTexture.format===Zn&&(bt=s.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,bt,w.width,w.height,0,mt,Nt,null)}}else st(w.depthTexture,0);let ut=J.__webglTexture,ft=$t(w),K=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,it=w.depthTexture.format===Zn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ki)Kt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,K,ut,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,it,K,ut,0);else if(w.depthTexture.format===Zn)Kt(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,it,K,ut,0,ft):s.framebufferTexture2D(s.FRAMEBUFFER,it,K,ut,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){let w=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),G){let J=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,G.removeEventListener("dispose",J)};G.addEventListener("dispose",J),w.__depthDisposeCallback=J}w.__boundDepthTexture=G}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)Me(w.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?Me(w.__webglFramebuffer[0],C,0):Me(w.__webglFramebuffer,C,0)}else if(U){w.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[G]),w.__webglDepthbuffer[G]===void 0)w.__webglDepthbuffer[G]=s.createRenderbuffer(),Yt(w.__webglDepthbuffer[G],C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Yt(w.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ut=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ut),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,ut)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(C,w,U){let G=i.get(C);w!==void 0&&Tt(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&nt(C)}function lt(C){let w=C.texture,U=i.get(C),G=i.get(w);C.addEventListener("dispose",_);let J=C.textures,ut=C.isWebGLCubeRenderTarget===!0,ft=J.length>1;if(ft||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=w.version,a.memory.textures++),ut){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let it=0;it<w.mipmaps.length;it++)U.__webglFramebuffer[K][it]=s.createFramebuffer()}else U.__webglFramebuffer[K]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<w.mipmaps.length;K++)U.__webglFramebuffer[K]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(ft)for(let K=0,it=J.length;K<it;K++){let mt=i.get(J[K]);mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Kt(C)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<J.length;K++){let it=J[K];U.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let mt=r.convert(it.format,it.colorSpace),Nt=r.convert(it.type),bt=y(it.internalFormat,mt,Nt,it.normalized,it.colorSpace,C.isXRRenderTarget===!0),gt=$t(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,bt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,U.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Yt(U.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ut){e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),Zt(s.TEXTURE_CUBE_MAP,w);for(let K=0;K<6;K++)if(w.mipmaps&&w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)Tt(U.__webglFramebuffer[K][it],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,it);else Tt(U.__webglFramebuffer[K],C,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);g(w)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let K=0,it=J.length;K<it;K++){let mt=J[K],Nt=i.get(mt),bt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,Nt.__webglTexture),Zt(bt,mt),Tt(U.__webglFramebuffer,C,mt,s.COLOR_ATTACHMENT0+K,bt,0),g(mt)&&v(bt)}e.unbindTexture()}else{let K=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(K,G.__webglTexture),Zt(K,w),w.mipmaps&&w.mipmaps.length>0)for(let it=0;it<w.mipmaps.length;it++)Tt(U.__webglFramebuffer[it],C,w,s.COLOR_ATTACHMENT0,K,it);else Tt(U.__webglFramebuffer,C,w,s.COLOR_ATTACHMENT0,K,0);g(w)&&v(K),e.unbindTexture()}C.depthBuffer&&nt(C)}function ct(C){let w=C.textures;for(let U=0,G=w.length;U<G;U++){let J=w[U];if(g(J)){let ut=b(C),ft=i.get(J).__webglTexture;e.bindTexture(ut,ft),v(ut),e.unbindTexture()}}}let pt=[],Vt=[];function Ot(C){if(C.samples>0){if(Kt(C)===!1){let w=C.textures,U=C.width,G=C.height,J=s.COLOR_BUFFER_BIT,ut=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=i.get(C),K=w.length>1;if(K)for(let mt=0;mt<w.length;mt++)e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let it=C.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let mt=0;mt<w.length;mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Nt=i.get(w[mt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Nt,0)}s.blitFramebuffer(0,0,U,G,0,0,U,G,J,s.NEAREST),l===!0&&(pt.length=0,Vt.length=0,pt.push(s.COLOR_ATTACHMENT0+mt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(pt.push(ut),Vt.push(ut),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let mt=0;mt<w.length;mt++){e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,ft.__webglColorRenderbuffer[mt]);let Nt=i.get(w[mt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let w=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function $t(C){return Math.min(n.maxSamples,C.samples)}function Kt(C){let w=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function D(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function xe(C,w){let U=C.colorSpace,G=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==ia&&U!==Ni&&(ae.getTransfer(U)===me?(G!==bi||J!==vi)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qt("WebGLTextures: Unsupported texture color space:",U)),w}function le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=Z,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=at,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function rb(s,t){function e(i,n=Ni){let r,a=ae.getTransfer(n);if(i===vi)return s.UNSIGNED_BYTE;if(i===Nl)return s.UNSIGNED_SHORT_4_4_4_4;if(i===kl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===au)return s.BYTE;if(i===ou)return s.SHORT;if(i===wr)return s.UNSIGNED_SHORT;if(i===zl)return s.INT;if(i===Wi)return s.UNSIGNED_INT;if(i===yi)return s.FLOAT;if(i===Ye)return s.HALF_FLOAT;if(i===hu)return s.ALPHA;if(i===uu)return s.RGB;if(i===bi)return s.RGBA;if(i===Ki)return s.DEPTH_COMPONENT;if(i===Zn)return s.DEPTH_STENCIL;if(i===Er)return s.RED;if(i===Fl)return s.RED_INTEGER;if(i===Jn)return s.RG;if(i===Ul)return s.RG_INTEGER;if(i===Bl)return s.RGBA_INTEGER;if(i===Va||i===Wa||i===qa||i===Xa)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ol||i===Hl||i===Gl||i===Vl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wl||i===ql||i===Xl||i===Yl||i===$l||i===Ya||i===jl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wl||i===ql)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yl)return r.COMPRESSED_R11_EAC;if(i===$l)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return r.COMPRESSED_RG11_EAC;if(i===jl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zl||i===Jl||i===Kl||i===Ql||i===tc||i===ec||i===ic||i===nc||i===sc||i===rc||i===ac||i===oc||i===lc||i===cc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Zl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ql)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ic)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ac)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hc||i===uc||i===dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hc)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fc||i===pc||i===$a||i===mc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ob=`
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

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new pa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ge({vertexShader:ab,fragmentShader:ob,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new V(new ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bu=class extends Qi{constructor(t,e){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",m=new Uu,g={},v=e.getContextAttributes(),b=null,y=null,M=[],S=[],A=new tt,_=null,T=null,P=new ni;P.viewport=new Te;let I=new ni;I.viewport=new Te;let z=[P,I],F=new Al,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=M[W];return Q===void 0&&(Q=new hr,M[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=M[W];return Q===void 0&&(Q=new hr,M[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=M[W];return Q===void 0&&(Q=new hr,M[W]=Q),Q.getHandSpace()};function Y(W){let Q=S.indexOf(W.inputSource);if(Q===-1)return;let _t=M[Q];_t!==void 0&&(_t.update(W.inputSource,W.frame,c||a),_t.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){n.removeEventListener("select",Y),n.removeEventListener("selectstart",Y),n.removeEventListener("selectend",Y),n.removeEventListener("squeeze",Y),n.removeEventListener("squeezestart",Y),n.removeEventListener("squeezeend",Y),n.removeEventListener("end",X),n.removeEventListener("inputsourceschange",st);for(let W=0;W<M.length;W++){let Q=S[W];Q!==null&&(S[W]=null,M[W].disconnect(Q))}L=null,B=null,m.reset();for(let W in g)delete g[W];if(t.setRenderTarget(b),f=null,u=null,d=null,n=null,y=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let W=T.camera;W.fov=T.fov,W.zoom=T.zoom,W.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",Y),n.addEventListener("selectstart",Y),n.addEventListener("selectend",Y),n.addEventListener("squeeze",Y),n.addEventListener("squeezestart",Y),n.addEventListener("squeezeend",Y),n.addEventListener("end",X),n.addEventListener("inputsourceschange",st),v.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Xt=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=v.stencil?Zn:Ki,Xt=v.stencil?Sr:Wi);let Yt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Le(u.textureWidth,u.textureHeight,{format:bi,type:vi,depthTexture:new Hn(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,_t),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Le(f.framebufferWidth,f.framebufferHeight,{format:bi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),Bt.setContext(n),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(W){for(let Q=0;Q<W.removed.length;Q++){let _t=W.removed[Q],Xt=S.indexOf(_t);Xt>=0&&(S[Xt]=null,M[Xt].disconnect(_t))}for(let Q=0;Q<W.added.length;Q++){let _t=W.added[Q],Xt=S.indexOf(_t);if(Xt===-1){for(let Yt=0;Yt<M.length;Yt++)if(Yt>=S.length){S.push(_t),Xt=Yt;break}else if(S[Yt]===null){S[Yt]=_t,Xt=Yt;break}if(Xt===-1)break}let Tt=M[Xt];Tt&&Tt.connect(_t)}}let Z=new R,j=new R;function $(W,Q,_t){Z.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Xt=Z.distanceTo(j),Tt=Q.projectionMatrix.elements,Yt=_t.projectionMatrix.elements,Me=Tt[14]/(Tt[10]-1),nt=Tt[14]/(Tt[10]+1),at=(Tt[9]+1)/Tt[5],lt=(Tt[9]-1)/Tt[5],ct=(Tt[8]-1)/Tt[0],pt=(Yt[8]+1)/Yt[0],Vt=Me*ct,Ot=Me*pt,$t=Xt/(-ct+pt),Kt=$t*-ct;if(Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Kt),W.translateZ($t),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Tt[10]===-1)W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let D=Me+$t,xe=nt+$t,le=Vt-Kt,C=Ot+(Xt-Kt),w=at*nt/xe*D,U=lt*nt/xe*D;W.projectionMatrix.makePerspective(le,C,w,U,D,xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function dt(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let Q=W.near,_t=W.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(_t=m.depthFar)),F.near=I.near=P.near=Q,F.far=I.far=P.far=_t,(L!==F.near||B!==F.far)&&(n.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,B=F.far),F.layers.mask=W.layers.mask|6,P.layers.mask=F.layers.mask&-5,I.layers.mask=F.layers.mask&-3;let Xt=W.parent,Tt=F.cameras;dt(F,Xt);for(let Yt=0;Yt<Tt.length;Yt++)dt(Tt[Yt],Xt);Tt.length===2?$(F,P,I):F.projectionMatrix.copy(P.projectionMatrix),T===null&&W.isPerspectiveCamera&&(T={camera:W,fov:W.fov,zoom:W.zoom}),St(W,F,Xt)};function St(W,Q,_t){_t===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(_t.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=lr*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(W){return g[W]};let ie=null;function Zt(W,Q){if(h=Q.getViewerPose(c||a),p=Q,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Xt=!1;_t.length!==F.cameras.length&&(F.cameras.length=0,Xt=!0);for(let nt=0;nt<_t.length;nt++){let at=_t[nt],lt=null;if(f!==null)lt=f.getViewport(at);else{let pt=d.getViewSubImage(u,at);lt=pt.viewport,nt===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let ct=z[nt];ct===void 0&&(ct=new ni,ct.layers.enable(nt),ct.viewport=new Te,z[nt]=ct),ct.matrix.fromArray(at.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(at.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(lt.x,lt.y,lt.width,lt.height),nt===0&&(F.matrix.copy(ct.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Xt===!0&&F.cameras.push(ct)}let Tt=n.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let nt=d.getDepthInformation(_t[0]);nt&&nt.isValid&&nt.texture&&m.init(nt,n.renderState)}if(Tt&&Tt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let nt=0;nt<_t.length;nt++){let at=_t[nt].camera;if(at){let lt=g[at];lt||(lt=new pa,g[at]=lt);let ct=d.getCameraImage(at);lt.sourceTexture=ct}}}}for(let _t=0;_t<M.length;_t++){let Xt=S[_t],Tt=M[_t];Xt!==null&&Tt!==void 0&&Tt.update(Xt,Q,c||a)}ie&&ie(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),p=null}let Bt=new Ap;Bt.setAnimationLoop(Zt),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}},lb=new de,Dp=new Jt;Dp.set(-1,0,0,0,1,0,0,0,1);function cb(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,gu(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),x(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Qe&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Qe&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(lb.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function hb(s,t,e,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let S=M.program;i.uniformBlockBinding(y,S)}function c(y,M){let S=n[y.id];S===void 0&&(m(y),S=h(y),n[y.id]=S,y.addEventListener("dispose",v));let A=M.program;i.updateUBOMapping(y,A);let _=t.render.frame;r[y.id]!==_&&(u(y),r[y.id]=_)}function h(y){let M=d();y.__bindingPointIndex=M;let S=s.createBuffer(),A=y.__size,_=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=n[y.id],S=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,T=S.length;_<T;_++){let P=S[_];if(Array.isArray(P))for(let I=0,z=P.length;I<z;I++)f(P[I],_,I,A);else f(P,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,M,S,A){if(x(y,M,S,A)===!0){let _=y.__offset,T=y.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let z=T[I],F=g(z);p(z,y.__data,P),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(P+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,y.__data)}}function p(y,M,S){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,S)}function x(y,M,S,A){let _=y.value,T=M+"_"+S;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let P=A[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){let M=y.uniforms,S=0,A=16;for(let T=0,P=M.length;T<P;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let z=0,F=I.length;z<F;z++){let L=I[z],B=Array.isArray(L.value)?L.value:[L.value];for(let Y=0,X=B.length;Y<X;Y++){let st=B[Y],Z=g(st),j=S%A,$=j%Z.boundary,dt=j+$;S+=$,dt!==0&&A-dt<Z.storage&&(S+=A-dt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=Z.storage}}}let _=S%A;return _>0&&(S+=A-_),y.__size=S,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function b(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:b}}var ub=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nn=null;function db(){return nn===null&&(nn=new wn(ub,16,16,Jn,Ye),nn.name="DFG_LUT",nn.minFilter=si,nn.magFilter=si,nn.wrapS=ji,nn.wrapT=ji,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}var Mc=class{constructor(t={}){let{canvas:e=$f(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vi}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let x=f,m=new Set([Bl,Ul,Fl]),g=new Set([vi,Wi,wr,Sr,Nl,kl]),v=new Uint32Array(4),b=new Int32Array(4),y=new R,M=null,S=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,z=null,F=null,L=null,B=null;this._outputColorSpace=Ue;let Y=0,X=0,st=null,Z=-1,j=null,$=new Te,dt=new Te,St=null,ie=new ot(0),Zt=0,Bt=e.width,W=e.height,Q=1,_t=null,Xt=null,Tt=new Te(0,0,Bt,W),Yt=new Te(0,0,Bt,W),Me=!1,nt=new fr,at=!1,lt=!1,ct=new de,pt=new R,Vt=new Te,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$t=!1;function Kt(){return st===null?Q:1}let D=i;function xe(E,N){return e.getContext(E,N)}let le,C,w,U,G,J,ut,ft,K,it,mt,Nt,bt,gt,kt,Wt,ee,k,xt,et,vt,Et,rt;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Pe,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fi,!1),D===null){let N="webgl2";if(D=xe(N,E),D===null)throw xe(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ut()}catch(E){throw e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fi,!1),qt("WebGLRenderer: "+E.message),E}function Ut(){le=new yy(D),le.init(),vt=new rb(D,le),C=new cy(D,le,t,vt),w=new nb(D,le),C.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),F=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),U=new My(D),G=new V1,J=new sb(D,le,w,G,C,vt,U),ut=new vy(P),ft=new Sg(D),Et=new oy(D,ft),K=new by(D,ft,U,Et),it=new Sy(D,K,ft,Et,U),k=new wy(D,C,J),kt=new hy(G),mt=new G1(P,ut,le,C,Et,kt),Nt=new cb(P,G),bt=new q1,gt=new J1(le),ee=new ay(P,ut,w,it,p,l),Wt=new ib(P,it,C),rt=new hb(D,U,C,w),xt=new ly(D,le,U),et=new _y(D,le,U),U.programs=mt.programs,P.capabilities=C,P.extensions=le,P.properties=G,P.renderLists=bt,P.shadowMap=Wt,P.state=w,P.info=U}x!==vi&&(T=new Ty(x,e.width,e.height,o,n,r));let Dt=new Bu(P,D);this.xr=Dt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(Bt,W,!1))},this.getSize=function(E){return E.set(Bt,W)},this.setSize=function(E,N,q=!0){if(Dt.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=E,W=N,e.width=Math.floor(E*Q),e.height=Math.floor(N*Q),q===!0&&(e.style.width=E+"px",e.style.height=N+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Bt*Q,W*Q).floor()},this.setDrawingBufferSize=function(E,N,q){Bt=E,W=N,Q=q,e.width=Math.floor(E*q),e.height=Math.floor(N*q),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(x===vi){qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy($)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,N,q,O){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,N,q,O),w.viewport($.copy(Tt).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(Yt)},this.setScissor=function(E,N,q,O){E.isVector4?Yt.set(E.x,E.y,E.z,E.w):Yt.set(E,N,q,O),w.scissor(dt.copy(Yt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(E){w.setScissorTest(Me=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){Xt=E},this.getClearColor=function(E){return E.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,q=!0){let O=0;if(E){let H=!1;if(st!==null){let wt=st.texture.format;H=m.has(wt)}if(H){let wt=st.texture.type,Rt=g.has(wt),Mt=ee.getClearColor(),Pt=ee.getClearAlpha(),zt=Mt.r,ne=Mt.g,ce=Mt.b;Rt?(v[0]=zt,v[1]=ne,v[2]=ce,v[3]=Pt,D.clearBufferuiv(D.COLOR,0,v)):(b[0]=zt,b[1]=ne,b[2]=ce,b[3]=Pt,D.clearBufferiv(D.COLOR,0,b))}else O|=D.COLOR_BUFFER_BIT}N&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Pe,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fi,!1),ee.dispose(),bt.dispose(),gt.dispose(),G.dispose(),ut.dispose(),it.dispose(),Et.dispose(),rt.dispose(),mt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",_d),Dt.removeEventListener("sessionend",Md),es.stop()};function Pe(E){E.preventDefault(),sa("WebGLRenderer: Context Lost."),I=!0}function ve(){sa("WebGLRenderer: Context Restored."),I=!1;let E=U.autoReset,N=Wt.enabled,q=Wt.autoUpdate,O=Wt.needsUpdate,H=Wt.type;Ut(),U.autoReset=E,Wt.enabled=N,Wt.autoUpdate=q,Wt.needsUpdate=O,Wt.type=H}function Fi(E){qt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xi(E){let N=E.target;N.removeEventListener("dispose",Xi),G0(N)}function G0(E){V0(E),G.remove(E)}function V0(E){let N=G.get(E).programs;N!==void 0&&(N.forEach(function(q){mt.releaseProgram(q)}),E.isShaderMaterial&&mt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,q,O,H,wt){N===null&&(N=Ot);let Rt=H.isMesh&&H.matrixWorld.determinantAffine()<0,Mt=X0(E,N,q,O,H);w.setMaterial(O,Rt);let Pt=q.index,zt=1;if(O.wireframe===!0){if(Pt=K.getWireframeAttribute(q),Pt===void 0)return;zt=2}let ne=q.drawRange,ce=q.attributes.position,It=ne.start*zt,ye=(ne.start+ne.count)*zt;wt!==null&&(It=Math.max(It,wt.start*zt),ye=Math.min(ye,(wt.start+wt.count)*zt)),Pt!==null?(It=Math.max(It,0),ye=Math.min(ye,Pt.count)):ce!=null&&(It=Math.max(It,0),ye=Math.min(ye,ce.count));let $e=ye-It;if($e<0||$e===1/0)return;Et.setup(H,O,Mt,q,Pt);let ke,Re=xt;if(Pt!==null&&(ke=ft.get(Pt),Re=et,Re.setIndex(ke)),H.isMesh)O.wireframe===!0?(w.setLineWidth(O.wireframeLinewidth*Kt()),Re.setMode(D.LINES)):Re.setMode(D.TRIANGLES);else if(H.isLine){let ai=O.linewidth;ai===void 0&&(ai=1),w.setLineWidth(ai*Kt()),H.isLineSegments?Re.setMode(D.LINES):H.isLineLoop?Re.setMode(D.LINE_LOOP):Re.setMode(D.LINE_STRIP)}else H.isPoints?Re.setMode(D.POINTS):H.isSprite&&Re.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Re.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ai=H._multiDrawStarts,At=H._multiDrawCounts,pi=H._multiDrawCount,pe=Pt?ft.get(Pt).bytesPerElement:1,Ii=G.get(O).currentProgram.getUniforms();for(let Yi=0;Yi<pi;Yi++)Ii.setValue(D,"_gl_DrawID",Yi),Re.render(ai[Yi]/pe,At[Yi])}else if(H.isInstancedMesh)Re.renderInstances(It,$e,H.count);else if(q.isInstancedBufferGeometry){let ai=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,At=Math.min(q.instanceCount,ai);Re.renderInstances(It,$e,At)}else Re.render(It,$e)};function bd(E,N,q,O){z!==null&&E.isNodeMaterial&&z.setObject(O,E),at===!0&&kt.setState(E,q,!1),E.transparent===!0&&E.side===fe&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,fo(E,N,O),E.side=Xn,E.needsUpdate=!0,fo(E,N,O),E.side=fe):fo(E,N,O)}this.compile=function(E,N,q=null){q===null&&(q=E),z!==null&&z.renderStart(E,N,q),S=gt.get(q),S.init(N),_.push(S),q.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),E!==q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(N.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights(),z!==null&&z.updateLights(S.state.lightsArray),lt=this.localClippingEnabled,at=kt.init(this.clippingPlanes,lt),at===!0&&kt.setGlobalState(this.clippingPlanes,N),z!==null&&Wt.render(S.state.shadowsArray,q,N);let O=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let wt=H.material;if(wt)if(Array.isArray(wt))for(let Rt=0;Rt<wt.length;Rt++){let Mt=wt[Rt];bd(Mt,q,N,H),O.add(Mt)}else bd(wt,q,N,H),O.add(wt)}),S=_.pop(),z!==null&&z.renderEnd(),O},this.compileAsync=function(E,N,q=null){let O=this.compile(E,N,q);return new Promise(H=>{function wt(){if(O.forEach(function(Rt){let Pt=G.get(Rt).currentProgram;(Pt===void 0||Pt.isReady())&&O.delete(Rt)}),O.size===0){H(E);return}setTimeout(wt,10)}le.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let mh=null;function W0(E){mh&&mh(E)}function _d(){es.stop()}function Md(){es.start()}let es=new Ap;es.setAnimationLoop(W0),typeof self<"u"&&es.setContext(self),this.setAnimationLoop=function(E){mh=E,Dt.setAnimationLoop(E),E===null?es.stop():es.start()},Dt.addEventListener("sessionstart",_d),Dt.addEventListener("sessionend",Md),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(E,N);let q=Dt.enabled===!0&&Dt.isPresenting===!0,O=T!==null&&(st===null||q)&&T.begin(P,st);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(N),N=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,N,st),S=gt.get(E,_.length),S.init(N),S.state.textureUnits=J.getTextureUnits(),_.push(S),ct.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),nt.setFromProjectionMatrix(ct,Gi,N.reversedDepth),lt=this.localClippingEnabled,at=kt.init(this.clippingPlanes,lt),M=bt.get(E,A.length),M.init(),A.push(M),Dt.enabled===!0&&Dt.isPresenting===!0){let Rt=P.xr.getDepthSensingMesh();Rt!==null&&gh(Rt,N,-1/0,P.sortObjects)}gh(E,N,0,P.sortObjects),M.finish(),z!==null&&z.updateLights(S.state.lightsArray),P.sortObjects===!0&&M.sort(_t,Xt),$t=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,$t&&ee.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&kt.beginShadows();let H=S.state.shadowsArray;if(Wt.render(H,E,N),at===!0&&kt.endShadows(),(O&&T.hasRenderPass())===!1){let Rt=M.opaque,Mt=M.transmissive;if(S.setupLights(),N.isArrayCamera){let Pt=N.cameras;if(Mt.length>0)for(let zt=0,ne=Pt.length;zt<ne;zt++){let ce=Pt[zt];Sd(Rt,Mt,E,ce)}$t&&ee.render(E);for(let zt=0,ne=Pt.length;zt<ne;zt++){let ce=Pt[zt];wd(M,E,ce,ce.viewport)}}else Mt.length>0&&Sd(Rt,Mt,E,N),$t&&ee.render(E),wd(M,E,N)}st!==null&&X===0&&(J.updateMultisampleRenderTarget(st),J.updateRenderTargetMipmap(st)),O&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,N),Et.resetDefaultState(),Z=-1,j=null,_.pop(),_.length>0?(S=_[_.length-1],J.setTextureUnits(S.state.textureUnits),at===!0&&kt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,z!==null&&z.renderEnd()};function gh(E,N,q,O){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(nt)){O&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);let Rt=it.update(E),Mt=E.material;Mt.visible&&M.push(E,Rt,Mt,q,Vt.z,null,N)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(nt))){let Rt=it.update(E),Mt=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Vt.copy(Rt.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(Mt)){let Pt=Rt.groups;for(let zt=0,ne=Pt.length;zt<ne;zt++){let ce=Pt[zt],It=Mt[ce.materialIndex];It&&It.visible&&M.push(E,Rt,It,q,Vt.z,ce,N)}}else Mt.visible&&M.push(E,Rt,Mt,q,Vt.z,null,N)}}let wt=E.children;for(let Rt=0,Mt=wt.length;Rt<Mt;Rt++)gh(wt[Rt],N,q,O)}function wd(E,N,q,O){let{opaque:H,transmissive:wt,transparent:Rt}=E;S.setupLightsView(q),at===!0&&kt.setGlobalState(P.clippingPlanes,q),O&&w.viewport($.copy(O)),H.length>0&&uo(H,N,q),wt.length>0&&uo(wt,N,q),Rt.length>0&&uo(Rt,N,q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Sd(E,N,q,O){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[O.id]===void 0){let It=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[O.id]=new Le(1,1,{generateMipmaps:!0,type:It?Ye:vi,minFilter:jn,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let wt=S.state.transmissionRenderTarget[O.id],Rt=O.viewport||$;wt.setSize(Rt.z*P.transmissionResolutionScale,Rt.w*P.transmissionResolutionScale);let Mt=P.getRenderTarget(),Pt=P.getActiveCubeFace(),zt=P.getActiveMipmapLevel();P.setRenderTarget(wt),P.getClearColor(ie),Zt=P.getClearAlpha(),Zt<1&&P.setClearColor(16777215,.5),P.clear(),$t&&ee.render(q);let ne=P.toneMapping;P.toneMapping=Vi;let ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),S.setupLightsView(O),at===!0&&kt.setGlobalState(P.clippingPlanes,O),uo(E,q,O),J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt),le.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ye=0,$e=N.length;ye<$e;ye++){let ke=N[ye],{object:Re,geometry:ai,material:At,group:pi}=ke;if(At.side===fe&&Re.layers.test(O.layers)){let pe=At.side;At.side=Qe,At.needsUpdate=!0,Ed(Re,q,O,ai,At,pi),At.side=pe,At.needsUpdate=!0,It=!0}}It===!0&&(J.updateMultisampleRenderTarget(wt),J.updateRenderTargetMipmap(wt))}P.setRenderTarget(Mt,Pt,zt),P.setClearColor(ie,Zt),ce!==void 0&&(O.viewport=ce),P.toneMapping=ne}function uo(E,N,q){let O=N.isScene===!0?N.overrideMaterial:null;for(let H=0,wt=E.length;H<wt;H++){let Rt=E[H],{object:Mt,geometry:Pt,group:zt}=Rt,ne=Rt.material;ne.allowOverride===!0&&O!==null&&(ne=O),Mt.layers.test(q.layers)&&Ed(Mt,N,q,Pt,ne,zt)}}function Ed(E,N,q,O,H,wt){z!==null&&H.isNodeMaterial&&z.setObject(E,H),E.onBeforeRender(P,N,q,O,H,wt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,N,q,O,E,wt),H.transparent===!0&&H.side===fe&&H.forceSinglePass===!1?(H.side=Qe,H.needsUpdate=!0,P.renderBufferDirect(q,N,O,H,E,wt),H.side=Xn,H.needsUpdate=!0,P.renderBufferDirect(q,N,O,H,E,wt),H.side=fe):P.renderBufferDirect(q,N,O,H,E,wt),E.onAfterRender(P,N,q,O,H,wt)}function fo(E,N,q){N.isScene!==!0&&(N=Ot);let O=G.get(E),H=S.state.lights,wt=S.state.shadowsArray,Rt=H.state.version,Mt=mt.getParameters(E,H.state,wt,N,q,S.state.lightProbeGridArray),Pt=mt.getProgramCacheKey(Mt),zt=O.programs;O.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,O.fog=N.fog;let ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;O.envMap=ut.get(E.envMap||O.environment,ne),O.envMapRotation=O.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",Xi),zt=new Map,O.programs=zt);let ce=zt.get(Pt);if(ce!==void 0){if(O.currentProgram===ce&&O.lightsStateVersion===Rt)return Ad(E,Mt),ce}else Mt.uniforms=mt.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,q,Mt),E.onBeforeCompile(Mt,P),ce=mt.acquireProgram(Mt,Pt),zt.set(Pt,ce),O.uniforms=Mt.uniforms;let It=O.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=kt.uniform),Ad(E,Mt),O.needsLights=$0(E),O.lightsStateVersion=Rt,O.needsLights&&(It.ambientLightColor.value=H.state.ambient,It.lightProbe.value=H.state.probe,It.sunLights.value=H.state.sun,It.sunLightShadows.value=H.state.sunShadow,It.directionalLights.value=H.state.directional,It.directionalLightShadows.value=H.state.directionalShadow,It.spotLights.value=H.state.spot,It.spotLightShadows.value=H.state.spotShadow,It.rectAreaLights.value=H.state.rectArea,It.ltc_1.value=H.state.rectAreaLTC1,It.ltc_2.value=H.state.rectAreaLTC2,It.pointLights.value=H.state.point,It.pointLightShadows.value=H.state.pointShadow,It.hemisphereLights.value=H.state.hemi,It.sunShadowMatrix.value=H.state.sunShadowMatrix,It.sunShadowCascade.value=H.state.sunShadowCascade,It.directionalShadowMatrix.value=H.state.directionalShadowMatrix,It.spotLightMatrix.value=H.state.spotLightMatrix,It.spotLightMap.value=H.state.spotLightMap,It.pointShadowMatrix.value=H.state.pointShadowMatrix),O.lightProbeGrid=S.state.lightProbeGridArray.length>0,O.currentProgram=ce,O.uniformsList=null,ce}function Td(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Cr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ad(E,N){let q=G.get(E);q.outputColorSpace=N.outputColorSpace,q.batching=N.batching,q.batchingColor=N.batchingColor,q.instancing=N.instancing,q.instancingColor=N.instancingColor,q.instancingMorph=N.instancingMorph,q.skinning=N.skinning,q.morphTargets=N.morphTargets,q.morphNormals=N.morphNormals,q.morphColors=N.morphColors,q.morphTargetsCount=N.morphTargetsCount,q.numClippingPlanes=N.numClippingPlanes,q.numIntersection=N.numClipIntersection,q.vertexAlphas=N.vertexAlphas,q.vertexTangents=N.vertexTangents,q.toneMapping=N.toneMapping}function q0(E,N){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let q=0,O=E.length;q<O;q++){let H=E[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function X0(E,N,q,O,H){N.isScene!==!0&&(N=Ot),J.resetTextureUnits();let wt=N.fog,Rt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?N.environment:null,Mt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ae.workingColorSpace,Pt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,zt=ut.get(O.envMap||Rt,Pt),ne=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ce=!!q.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),It=!!q.morphAttributes.position,ye=!!q.morphAttributes.normal,$e=!!q.morphAttributes.color,ke=Vi;O.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ke=P.toneMapping);let Re=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ai=Re!==void 0?Re.length:0,At=G.get(O),pi=S.state.lights;if(at===!0&&(lt===!0||E!==j)){let Ie=E===j&&O.id===Z;kt.setState(O,E,Ie)}let pe=!1;O.version===At.__version?(At.needsLights&&At.lightsStateVersion!==pi.state.version||At.outputColorSpace!==Mt||H.isBatchedMesh&&At.batching===!1||!H.isBatchedMesh&&At.batching===!0||H.isBatchedMesh&&At.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&At.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&At.instancing===!1||!H.isInstancedMesh&&At.instancing===!0||H.isSkinnedMesh&&At.skinning===!1||!H.isSkinnedMesh&&At.skinning===!0||H.isInstancedMesh&&At.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&At.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&At.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&At.instancingMorph===!1&&H.morphTexture!==null||At.envMap!==zt||O.fog===!0&&At.fog!==wt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==kt.numPlanes||At.numIntersection!==kt.numIntersection)||At.vertexAlphas!==ne||At.vertexTangents!==ce||At.morphTargets!==It||At.morphNormals!==ye||At.morphColors!==$e||At.toneMapping!==ke||At.morphTargetsCount!==ai||!!At.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,At.__version=O.version);let Ii=At.currentProgram;pe===!0&&(Ii=fo(O,N,H),z&&O.isNodeMaterial&&z.onUpdateProgram(O,Ii,At));let Yi=!1,Ln=!1,Ns=!1,Ee=Ii.getUniforms(),We=At.uniforms;if(w.useProgram(Ii.program)&&(Yi=!0,Ln=!0,Ns=!0),O.id!==Z&&(Z=O.id,Ln=!0),At.needsLights){let Ie=q0(S.state.lightProbeGridArray,H);At.lightProbeGrid!==Ie&&(At.lightProbeGrid=Ie,Ln=!0)}if(Yi||j!==E){w.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ee.setValue(D,"projectionMatrix",E.projectionMatrix),Ee.setValue(D,"viewMatrix",E.matrixWorldInverse);let zn=Ee.map.cameraPosition;zn!==void 0&&zn.setValue(D,pt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&Ee.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ee.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,Ln=!0,Ns=!0)}if(At.needsLights&&(pi.state.sunShadowMap.length>0&&Ee.setValue(D,"sunShadowMap",pi.state.sunShadowMap,J),pi.state.directionalShadowMap.length>0&&Ee.setValue(D,"directionalShadowMap",pi.state.directionalShadowMap,J),pi.state.spotShadowMap.length>0&&Ee.setValue(D,"spotShadowMap",pi.state.spotShadowMap,J),pi.state.pointShadowMap.length>0&&Ee.setValue(D,"pointShadowMap",pi.state.pointShadowMap,J)),H.isSkinnedMesh){Ee.setOptional(D,H,"bindMatrix"),Ee.setOptional(D,H,"bindMatrixInverse");let Ie=H.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),Ee.setValue(D,"boneTexture",Ie.boneTexture,J))}H.isBatchedMesh&&(Ee.setOptional(D,H,"batchingTexture"),Ee.setValue(D,"batchingTexture",H._matricesTexture,J),Ee.setOptional(D,H,"batchingIdTexture"),Ee.setValue(D,"batchingIdTexture",H._indirectTexture,J),Ee.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Ee.setValue(D,"batchingColorTexture",H._colorsTexture,J));let Dn=q.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&k.update(H,q,Ii),(Ln||At.receiveShadow!==H.receiveShadow)&&(At.receiveShadow=H.receiveShadow,Ee.setValue(D,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&N.environment!==null&&(We.envMapIntensity.value=N.environmentIntensity),We.dfgLUT!==void 0&&(We.dfgLUT.value=db()),Ln){if(Ee.setValue(D,"toneMappingExposure",P.toneMappingExposure),At.needsLights&&Y0(We,Ns),wt&&O.fog===!0&&Nt.refreshFogUniforms(We,wt),Nt.refreshMaterialUniforms(We,O,Q,W,S.state.transmissionRenderTarget[E.id]),At.needsLights&&At.lightProbeGrid){let Ie=At.lightProbeGrid;We.probesSH.value=Ie.texture,We.probesMin.value.copy(Ie.boundingBox.min),We.probesMax.value.copy(Ie.boundingBox.max),We.probesResolution.value.copy(Ie.resolution)}Cr.upload(D,Td(At),We,J)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Cr.upload(D,Td(At),We,J),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ee.setValue(D,"center",H.center),Ee.setValue(D,"modelViewMatrix",H.modelViewMatrix),Ee.setValue(D,"normalMatrix",H.normalMatrix),Ee.setValue(D,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){let Ie=O.uniformsGroups;for(let zn=0,ks=Ie.length;zn<ks;zn++){let Cd=Ie[zn];rt.update(Cd,Ii),rt.bind(Cd,Ii)}}return Ii}function Y0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function $0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(E,N,q){let O=G.get(E);O.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=N,G.get(E.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:q,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let q=G.get(E);q.__webglFramebuffer=N,q.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,q=0){st=E,Y=N,X=q;let O=null,H=!1,wt=!1;if(E){let Mt=G.get(E);if(Mt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(D.FRAMEBUFFER,Mt.__webglFramebuffer),$.copy(E.viewport),dt.copy(E.scissor),St=E.scissorTest,w.viewport($),w.scissor(dt),w.setScissorTest(St),Z=-1;return}else if(Mt.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Mt.__hasExternalTextures)J.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ne=E.depthTexture;if(Mt.__boundDepthTexture!==ne){if(ne!==null&&G.has(ne)&&(E.width!==ne.image.width||E.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}let Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(wt=!0);let zt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[N])?O=zt[N][q]:O=zt[N],H=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?O=G.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?O=zt[q]:O=zt,$.copy(E.viewport),dt.copy(E.scissor),St=E.scissorTest}else $.copy(Tt).multiplyScalar(Q).floor(),dt.copy(Yt).multiplyScalar(Q).floor(),St=Me;if(q!==0&&(O=F),w.bindFramebuffer(D.FRAMEBUFFER,O)&&w.drawBuffers(E,O),w.viewport($),w.scissor(dt),w.setScissorTest(St),H){let Mt=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,Mt.__webglTexture,q)}else if(wt){let Mt=N;for(let Pt=0;Pt<E.textures.length;Pt++){let zt=G.get(E.textures[Pt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pt,zt.__webglTexture,q,Mt)}}else if(E!==null&&q!==0){let Mt=G.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mt.__webglTexture,q)}Z=-1};function Rd(E){let N=G.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=C.textureFormatReadable(E.format),N.__typeReadable=C.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,q,O,H,wt,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){w.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let zt=E.textures[Mt],ne=zt.format,ce=zt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let It=Rd(zt);if(It.__formatReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-O&&q>=0&&q<=E.height-H&&D.readPixels(N,q,O,H,vt.convert(ne),vt.convert(ce),wt)}finally{let zt=st!==null?G.get(st).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,N,q,O,H,wt,Rt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt)if(N>=0&&N<=E.width-O&&q>=0&&q<=E.height-H){w.bindFramebuffer(D.FRAMEBUFFER,Pt);let zt=E.textures[Mt],ne=zt.format,ce=zt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Mt);let It=Rd(zt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.bufferData(D.PIXEL_PACK_BUFFER,wt.byteLength,D.STREAM_READ),D.readPixels(N,q,O,H,vt.convert(ne),vt.convert(ce),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let $e=st!==null?G.get(st).__webglFramebuffer:null;w.bindFramebuffer(D.FRAMEBUFFER,$e);let ke=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zf(D,ke,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,wt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ye),D.deleteSync(ke),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,q=0){let O=Math.pow(2,-q),H=Math.floor(E.image.width*O),wt=Math.floor(E.image.height*O),Rt=N!==null?N.x:0,Mt=N!==null?N.y:0;J.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Rt,Mt,H,wt),w.unbindTexture()},this.copyTextureToTexture=function(E,N,q=null,O=null,H=0,wt=0){let Rt,Mt,Pt,zt,ne,ce,It,ye,$e,ke=E.isCompressedTexture?E.mipmaps[wt]:E.image;if(q!==null)Rt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,ne=q.min.y,ce=q.isBox3?q.min.z:0;else{let We=Math.pow(2,-H);Rt=Math.floor(ke.width*We),Mt=Math.floor(ke.height*We),E.isDataArrayTexture?Pt=ke.depth:E.isData3DTexture?Pt=Math.floor(ke.depth*We):Pt=1,zt=0,ne=0,ce=0}O!==null?(It=O.x,ye=O.y,$e=O.z):(It=0,ye=0,$e=0);let Re=vt.convert(N.format),ai=vt.convert(N.type),At;N.isData3DTexture?(J.setTexture3D(N,0),At=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),At=D.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),At=D.TEXTURE_2D),w.activeTexture(D.TEXTURE0),w.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),w.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),w.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let pi=w.getParameter(D.UNPACK_ROW_LENGTH),pe=w.getParameter(D.UNPACK_IMAGE_HEIGHT),Ii=w.getParameter(D.UNPACK_SKIP_PIXELS),Yi=w.getParameter(D.UNPACK_SKIP_ROWS),Ln=w.getParameter(D.UNPACK_SKIP_IMAGES);w.pixelStorei(D.UNPACK_ROW_LENGTH,ke.width),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ke.height),w.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),w.pixelStorei(D.UNPACK_SKIP_ROWS,ne),w.pixelStorei(D.UNPACK_SKIP_IMAGES,ce);let Ns=E.isDataArrayTexture||E.isData3DTexture,Ee=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let We=G.get(E),Dn=G.get(N),Ie=G.get(We.__renderTarget),zn=G.get(Dn.__renderTarget);w.bindFramebuffer(D.READ_FRAMEBUFFER,Ie.__webglFramebuffer),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let ks=0;ks<Pt;ks++)Ns&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(E).__webglTexture,H,ce+ks),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,G.get(N).__webglTexture,wt,$e+ks)),D.blitFramebuffer(zt,ne,Rt,Mt,It,ye,Rt,Mt,D.DEPTH_BUFFER_BIT,D.NEAREST);w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||G.has(E)){let We=G.get(E),Dn=G.get(N);w.bindFramebuffer(D.READ_FRAMEBUFFER,L),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Ie=0;Ie<Pt;Ie++)Ns?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,H,ce+Ie):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,H),Ee?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dn.__webglTexture,wt,$e+Ie):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dn.__webglTexture,wt),H!==0?D.blitFramebuffer(zt,ne,Rt,Mt,It,ye,Rt,Mt,D.COLOR_BUFFER_BIT,D.NEAREST):Ee?D.copyTexSubImage3D(At,wt,It,ye,$e+Ie,zt,ne,Rt,Mt):D.copyTexSubImage2D(At,wt,It,ye,zt,ne,Rt,Mt);w.bindFramebuffer(D.READ_FRAMEBUFFER,null),w.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ee?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(At,wt,It,ye,$e,Rt,Mt,Pt,Re,ai,ke.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(At,wt,It,ye,$e,Rt,Mt,Pt,Re,ke.data):D.texSubImage3D(At,wt,It,ye,$e,Rt,Mt,Pt,Re,ai,ke):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,wt,It,ye,Rt,Mt,Re,ai,ke.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,wt,It,ye,ke.width,ke.height,Re,ke.data):D.texSubImage2D(D.TEXTURE_2D,wt,It,ye,Rt,Mt,Re,ai,ke);w.pixelStorei(D.UNPACK_ROW_LENGTH,pi),w.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe),w.pixelStorei(D.UNPACK_SKIP_PIXELS,Ii),w.pixelStorei(D.UNPACK_SKIP_ROWS,Yi),w.pixelStorei(D.UNPACK_SKIP_IMAGES,Ln),wt===0&&N.generateMipmaps&&D.generateMipmap(At),w.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),w.unbindTexture()},this.resetState=function(){Y=0,X=0,st=null,w.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var zp=`html, body { margin: 0; height: 100%; overflow: hidden; background: #0d1426; touch-action: none; -webkit-user-select: none; user-select: none; }\r
#app { position: fixed; inset: 0; }\r
#app canvas { display: block; width: 100%; height: 100%; }\r
#ui { position: absolute; inset: 0; pointer-events: none; font-family: 'Zen Maru Gothic', 'Hiragino Maru Gothic ProN', 'Yu Gothic', sans-serif; color: #fff; }\r
#ui * { box-sizing: border-box; }\r
.loading { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; padding-bottom: 12vh; gap: 18px; background: linear-gradient(180deg, rgba(8,14,30,.15), rgba(8,14,30,.75)), url(kv.jpg) center / cover, #16233f; pointer-events: auto; }\r
.lt { font-family: 'Shippori Mincho B1', serif; font-size: clamp(28px, 6vw, 56px); letter-spacing: .2em; text-shadow: 0 0 24px #9fe6ff; }\r
.lbar { width: min(60vw, 420px); height: 4px; background: rgba(255,255,255,.18); border-radius: 2px; overflow: hidden; }\r
.lbar i { display: block; height: 100%; width: 0; background: linear-gradient(90deg, #9fe6ff, #fff6c8); transition: width .3s; }\r
.lmsg { font-size: 14px; opacity: .8; }\r
`;var Np=`/* ---- HUD ---- */\r
.hud { position: absolute; inset: 0; pointer-events: none; text-shadow: 0 1px 2px rgba(0,0,0,.55); }\r
.hud button { font-family: inherit; }\r
.mini { position: absolute; left: max(14px, env(safe-area-inset-left)); top: 14px; width: 150px; height: 150px; pointer-events: auto; cursor: pointer; }\r
.mini canvas { width: 100%; height: 100%; border-radius: 50%; display: block; }\r
.mini-ring { position: absolute; inset: -4px; border-radius: 50%; border: 3px solid rgba(255,250,235,.85); box-shadow: 0 0 0 1px rgba(60,50,30,.5), inset 0 0 18px rgba(0,0,0,.25); }\r
.mini-n { position: absolute; left: 50%; top: 50%; width: 18px; height: 18px; margin: -9px; font-size: 11px; font-weight: 900; color: #ffe9a8; text-align: center; line-height: 18px; background: rgba(40,34,24,.75); border-radius: 50%; }\r
.mini-me { position: absolute; left: 50%; top: 50%; width: 0; height: 0; margin-left: -8px; margin-top: -10px; border-left: 8px solid transparent; border-right: 8px solid transparent; border-bottom: 20px solid #ffe78a; filter: drop-shadow(0 0 2px #000); transform-origin: 8px 12px; }\r
.quest { position: absolute; left: max(14px, env(safe-area-inset-left)); top: 176px; max-width: 260px; pointer-events: auto; cursor: pointer; padding: 6px 10px 6px 12px; border-left: 3px solid #ffd24a; background: linear-gradient(90deg, rgba(20,24,36,.55), rgba(20,24,36,0)); }\r
.quest .qt { font-weight: 900; font-size: 15px; color: #ffe39a; }\r
.quest .qo { font-size: 13px; margin-top: 2px; }\r
.quest .qd { font-size: 12px; opacity: .8; margin-top: 2px; }\r
.topbtn { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 12px; display: flex; gap: 8px; pointer-events: auto; }\r
.tb { width: 42px; height: 42px; border-radius: 50%; border: 2px solid rgba(255,255,255,.6); background: rgba(20,26,40,.45); color: #fff; padding: 9px; cursor: pointer; }\r
.tb svg { width: 100%; height: 100%; }\r
.party { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 50%; transform: translateY(-58%); display: flex; flex-direction: column; gap: 10px; pointer-events: auto; }\r
.pm { display: flex; align-items: center; gap: 8px; cursor: pointer; opacity: .92; transition: transform .2s; }\r
.pm .pn { text-align: right; }\r
.pm .nm { font-size: 14px; font-weight: 700; }\r
.pm .pb { width: 76px; height: 4px; background: rgba(0,0,0,.4); border-radius: 2px; overflow: hidden; margin-top: 3px; margin-left: auto; }\r
.pm .pb i { display: block; height: 100%; background: #8be38a; }\r
.pm .pf { position: relative; width: 52px; height: 52px; border-radius: 50%; background: radial-gradient(circle at 50% 35%, #fff8, #0004), var(--ec); border: 2px solid rgba(255,255,255,.85); }\r
.pm .pf img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; }\r
.pm .pe { position: absolute; left: -6px; top: -6px; width: 20px; height: 20px; color: var(--ec); filter: drop-shadow(0 0 2px #000); }\r
.pm .pe svg { width: 100%; height: 100%; }\r
.pm .pk { width: 22px; height: 22px; border-radius: 4px; background: rgba(255,255,255,.18); border: 1px solid rgba(255,255,255,.5); font-size: 12px; font-weight: 900; text-align: center; line-height: 20px; }\r
.pm.active { transform: translateX(-10px); opacity: 1; }\r
.pm.active .pf { box-shadow: 0 0 0 3px #fff5c8, 0 0 16px #fff8; }\r
.pm.active .nm { color: #ffe9a8; }\r
.pm.down { filter: grayscale(1) brightness(.6); }\r
.touch .pm .pk { display: none; }\r
.hpbox { position: absolute; left: 50%; bottom: max(26px, env(safe-area-inset-bottom)); transform: translateX(-50%); width: min(340px, 44vw); text-align: center; }\r
.hpbox .lv { position: absolute; left: 0; top: -18px; font-size: 13px; font-weight: 700; }\r
.hpbox .bar { height: 9px; border-radius: 5px; background: rgba(0,0,0,.45); border: 1px solid rgba(255,255,255,.35); overflow: hidden; position: relative; }\r
.hpbox .fill { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(#a8f08a, #5fc45a); transition: width .15s; }\r
.hpbox.low .fill { background: linear-gradient(#ff9a7a, #e24a3a); }\r
.hpbox .num { font-size: 12px; margin-top: 2px; opacity: .9; }\r
.skills { position: absolute; right: max(28px, env(safe-area-inset-right)); bottom: max(26px, env(safe-area-inset-bottom)); display: flex; align-items: flex-end; gap: 14px; pointer-events: auto; }\r
.sk { position: relative; width: 62px; height: 62px; border-radius: 50%; border: none; background: radial-gradient(circle at 50% 40%, rgba(255,255,255,.22), rgba(10,14,26,.7)); color: var(--ec); padding: 0; cursor: pointer; touch-action: none; }\r
.sk .ic { position: absolute; inset: 15px; filter: drop-shadow(0 0 6px var(--ec)); }\r
.sk .ic svg { width: 100%; height: 100%; }\r
.sk b { position: absolute; right: -4px; bottom: -4px; width: 22px; height: 22px; border-radius: 50%; background: rgba(0,0,0,.6); color: #fff; font-size: 12px; line-height: 22px; text-align: center; }\r
.touch .sk b { display: none; }\r
.sk svg.cd, .sk svg.en { position: absolute; inset: 0; transform: rotate(-90deg); }\r
.sk svg.cd circle { fill: none; stroke: rgba(255,255,255,.85); stroke-width: 3; stroke-dasharray: 113; }\r
.sk.cool .ic { opacity: .35; }\r
.sk .t { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 900; color: #fff; }\r
.sk.q { width: 78px; height: 78px; }\r
.sk.q .ic { inset: 19px; }\r
.sk svg.en .bg { fill: none; stroke: rgba(255,255,255,.18); stroke-width: 3.5; }\r
.sk svg.en .fg { fill: none; stroke: var(--ec); stroke-width: 3.5; stroke-dasharray: 113; stroke-linecap: round; }\r
.sk.q.ready { animation: qready 1.2s infinite; }\r
@keyframes qready { 50% { box-shadow: 0 0 24px var(--ec), inset 0 0 18px var(--ec); } }\r
.stam { position: absolute; left: 0; top: 0; width: 34px; height: 34px; margin: -17px; opacity: 0; }\r
.stam svg { width: 100%; height: 100%; transform: rotate(-90deg); }\r
.stam .bg { fill: none; stroke: rgba(0,0,0,.35); stroke-width: 5; }\r
.stam .fg { fill: none; stroke: #ffd84a; stroke-width: 5; stroke-dasharray: 94.2; stroke-linecap: round; }\r
.stam.low .fg { stroke: #ff6a4a; }\r
.ebars { position: absolute; inset: 0; }\r
.ebar { position: absolute; left: 0; top: 0; width: 84px; margin-left: -42px; }\r
.ebar .eb { height: 6px; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.3); border-radius: 3px; overflow: hidden; }\r
.ebar .eb i { display: block; height: 100%; background: linear-gradient(#ff8a7a, #d8423a); }\r
.ebar .lvn { font-size: 10px; text-align: left; opacity: .9; }\r
.ebar .el { position: absolute; left: 50%; top: -24px; width: 20px; height: 20px; margin-left: -10px; filter: drop-shadow(0 0 3px #000); }\r
.ebar .el svg { width: 100%; height: 100%; }\r
.ebar.frozen .eb { border-color: #a8eeff; box-shadow: 0 0 6px #a8eeff; }\r
.nums { position: absolute; inset: 0; overflow: hidden; }\r
.dmg { position: absolute; transform: translate(-50%,-50%); font-weight: 900; font-size: 20px; -webkit-text-stroke: 1px rgba(0,0,0,.6); animation: dmg .9s ease-out forwards; }\r
.dmg.crit { font-size: 30px; }\r
.dmg.small { font-size: 16px; }\r
@keyframes dmg { 0% { transform: translate(-50%,-20%) scale(.6); opacity: 0; } 15% { transform: translate(-50%,-60%) scale(1.15); opacity: 1; } 70% { opacity: 1; } 100% { transform: translate(-50%,-140%) scale(.9); opacity: 0; } }\r
.react { position: absolute; transform: translate(-50%,-50%); font-weight: 900; font-size: 22px; -webkit-text-stroke: 1px rgba(0,0,0,.5); animation: react 1.1s ease-out forwards; }\r
@keyframes react { 0% { transform: translate(-50%,-50%) scale(1.6); opacity: 0; } 20% { transform: translate(-50%,-50%) scale(1); opacity: 1; } 80% { opacity: 1; } 100% { transform: translate(-50%,-110%); opacity: 0; } }\r
.toasts { position: absolute; left: 50%; top: 22%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; }\r
.toast { padding: 6px 18px; background: linear-gradient(90deg, transparent, rgba(16,20,34,.72) 15%, rgba(16,20,34,.72) 85%, transparent); border-top: 1px solid rgba(255,230,160,.5); border-bottom: 1px solid rgba(255,230,160,.5); font-size: 14px; white-space: nowrap; animation: tin .3s; transition: opacity .5s; }\r
.toast.out { opacity: 0; }\r
@keyframes tin { from { opacity: 0; transform: translateY(8px); } }\r
.banner { position: absolute; left: 0; right: 0; top: 30%; text-align: center; opacity: 0; transition: opacity .8s; }\r
.banner.show { opacity: 1; }\r
.banner .b1 { font-family: 'Shippori Mincho B1', serif; font-size: clamp(26px, 5vw, 44px); font-weight: 800; letter-spacing: .15em; color: #fff7e0; text-shadow: 0 0 18px rgba(255,220,140,.8), 0 2px 4px #000; }\r
.banner .b2 { font-size: 15px; margin-top: 8px; letter-spacing: .3em; opacity: .9; }\r
.banner::before, .banner::after { content: ""; display: block; height: 1px; width: min(520px, 70vw); margin: 10px auto; background: linear-gradient(90deg, transparent, #ffe2a0, transparent); }\r
.prompt { position: absolute; left: 58%; top: 52%; display: flex; align-items: center; gap: 10px; padding: 6px 16px 6px 6px; background: linear-gradient(90deg, rgba(20,24,36,.8), rgba(20,24,36,.3)); border-radius: 22px; font-size: 15px; opacity: 0; transform: translateX(10px); transition: all .2s; }\r
.prompt.show { opacity: 1; transform: none; }\r
.prompt .key { width: 30px; height: 30px; border-radius: 50%; background: #fff; color: #222; font-weight: 900; display: flex; align-items: center; justify-content: center; text-shadow: none; padding: 5px; }\r
.prompt .key svg { width: 100%; height: 100%; }\r
.dialog { position: absolute; left: 50%; bottom: 11%; transform: translateX(-50%); width: min(820px, 92vw); padding: 14px 24px 26px; background: linear-gradient(transparent, rgba(10,14,24,.78) 25%); opacity: 0; pointer-events: none; transition: opacity .25s; text-align: center; }\r
.dialog.show { opacity: 1; pointer-events: auto; cursor: pointer; }\r
.dialog .dn { font-size: 15px; font-weight: 900; color: #ffd98a; margin-bottom: 6px; }\r
.dialog .dt { font-size: clamp(15px, 2.2vw, 18px); line-height: 1.7; white-space: pre-wrap; }\r
.dialog .dnext { position: absolute; left: 50%; bottom: 4px; font-size: 12px; animation: nx 1s infinite; }\r
.dialog.choosing .dnext { display: none; }\r
@keyframes nx { 50% { transform: translateY(3px); } }\r
.dialog .dc { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; margin-top: 10px; }\r
.dialog .ch { pointer-events: auto; min-width: 240px; padding: 9px 18px; border-radius: 22px; border: 1px solid rgba(255,230,170,.6); background: rgba(30,36,56,.85); color: #fff; font-size: 15px; text-align: left; cursor: pointer; }\r
.dialog .ch:hover { background: rgba(80,90,130,.9); }\r
.bossbar { position: absolute; left: 50%; top: 18px; transform: translateX(-50%); width: min(560px, 60vw); opacity: 0; transition: opacity .5s; text-align: center; }\r
.bossbar.show { opacity: 1; }\r
.bossbar .bn { font-size: 15px; font-weight: 900; letter-spacing: .1em; margin-bottom: 4px; }\r
.bossbar .bb { height: 10px; background: rgba(0,0,0,.5); border: 1px solid rgba(255,255,255,.4); border-radius: 5px; overflow: hidden; }\r
.bossbar .bb i { display: block; height: 100%; background: linear-gradient(#ff9a8a, #c8302a); transition: width .2s; }\r
.hurt { position: absolute; inset: 0; box-shadow: inset 0 0 120px 30px rgba(200,20,20,.9); opacity: 0; }\r
.burstfx { position: absolute; inset: 0; opacity: 0; background: radial-gradient(ellipse at center, transparent 40%, var(--ec) 140%); }\r
.burstfx.go { animation: bfx 1s ease-out; }\r
@keyframes bfx { 0% { opacity: 0; } 20% { opacity: .9; } 100% { opacity: 0; } }\r
.lockhint { position: absolute; left: 50%; bottom: 96px; transform: translateX(-50%); font-size: 12px; opacity: .75; white-space: nowrap; }\r
/* \u30BF\u30C3\u30C1 */\r
.tpad { position: absolute; left: max(36px, env(safe-area-inset-left)); bottom: max(40px, env(safe-area-inset-bottom)); width: 140px; height: 140px; border-radius: 50%; background: rgba(255,255,255,.08); border: 2px solid rgba(255,255,255,.25); pointer-events: auto; touch-action: none; }\r
.tpad .knob { position: absolute; left: 50%; top: 50%; width: 56px; height: 56px; margin: -28px; border-radius: 50%; background: rgba(255,255,255,.4); border: 2px solid rgba(255,255,255,.7); }\r
.tbtns { position: absolute; right: max(120px, calc(env(safe-area-inset-right) + 110px)); bottom: max(34px, env(safe-area-inset-bottom)); width: 190px; height: 190px; pointer-events: none; }\r
.tbn { position: absolute; width: 58px; height: 58px; border-radius: 50%; background: rgba(20,26,40,.45); border: 2px solid rgba(255,255,255,.55); color: #fff; padding: 14px; pointer-events: auto; touch-action: none; }\r
.tbn svg { width: 100%; height: 100%; }\r
.tbn.on { background: rgba(255,255,255,.35); }\r
.tbn.atk { width: 84px; height: 84px; right: -100px; bottom: 96px; padding: 20px; }\r
.tbn.jmp { right: -88px; bottom: 6px; }\r
.tbn.dsh { right: 2px; bottom: 60px; }\r
.tbn.int { right: 46%; bottom: 46%; display: none; }\r
.tbn.int.show { display: block; }\r
.touch .skills { right: max(196px, calc(env(safe-area-inset-right) + 186px)); bottom: max(150px, env(safe-area-inset-bottom)); flex-direction: column-reverse; align-items: center; gap: 10px; }\r
.touch .sk { width: 54px; height: 54px; }\r
.touch .sk.q { width: 64px; height: 64px; }\r
.touch .hpbox { bottom: max(14px, env(safe-area-inset-bottom)); width: min(260px, 40vw); }\r
.touch .party { top: auto; bottom: max(250px, env(safe-area-inset-bottom)); transform: none; gap: 6px; }\r
.touch .pm .pf { width: 44px; height: 44px; }\r
.touch .pm .nm { font-size: 12px; }\r
.touch .pm .pb { width: 56px; }\r
@media (max-width: 600px) {\r
  .mini { width: 108px; height: 108px; }\r
  .quest { top: 128px; max-width: 200px; }\r
  .quest .qt { font-size: 13px; } .quest .qo { font-size: 12px; }\r
  .touch .party { bottom: 400px; }\r
  .tb { width: 36px; height: 36px; padding: 7px; }\r
  .touch .skills { right: 14px; bottom: 236px; flex-direction: column-reverse; gap: 8px; }\r
}\r
@media (max-height: 460px) {\r
  .mini { width: 96px; height: 96px; top: 8px; }\r
  .quest { top: 112px; max-width: 220px; padding: 3px 8px; }\r
  .quest .qt { font-size: 12px; } .quest .qo { font-size: 11px; } .quest .qd { display: none; }\r
  .touch .party { top: 56px; bottom: auto; right: max(10px, env(safe-area-inset-right)); flex-direction: row; }\r
  .touch .pm .pn { display: none; }\r
  .touch .pm .pf { width: 38px; height: 38px; }\r
  .tpad { width: 116px; height: 116px; bottom: 18px; left: max(24px, env(safe-area-inset-left)); }\r
  .tbtns { bottom: 10px; transform: scale(.85); transform-origin: right bottom; }\r
  .touch .skills { bottom: 112px; right: max(170px, calc(env(safe-area-inset-right) + 160px)); flex-direction: row; }\r
  .touch .hpbox { bottom: 6px; }\r
  .banner { top: 20%; }\r
}\r
\r
/* ---- \u5168\u753B\u9762 ---- */\r
.scr { position: absolute; inset: 0; display: none; pointer-events: auto; background: radial-gradient(ellipse at 50% 30%, rgba(30,44,74,.92), rgba(8,12,24,.96)); z-index: 20; }\r
.scr.show { display: flex; align-items: center; justify-content: center; animation: tin .25s; }\r
.sbox { width: min(980px, 94vw); max-height: 92vh; overflow: auto; padding: 18px; }\r
.sclose { position: absolute; right: 16px; top: 12px; width: 44px; height: 44px; border-radius: 50%; border: 2px solid rgba(255,255,255,.6); background: rgba(255,255,255,.08); color: #fff; font-size: 20px; cursor: pointer; }\r
.mtitle { font-family: 'Shippori Mincho B1', serif; font-size: 26px; letter-spacing: .2em; text-align: center; margin-bottom: 12px; color: #ffefc4; }\r
.mhelp { text-align: center; font-size: 13px; opacity: .75; margin-top: 10px; }\r
.mwrap { display: flex; justify-content: center; }\r
.mcv { width: min(80vh, 88vw); height: min(80vh, 88vw); border-radius: 14px; box-shadow: 0 0 0 2px rgba(255,240,200,.5), 0 10px 40px #000; cursor: pointer; }\r
.scr.map .mtitle { margin-bottom: 6px; } .scr.map .sbox { padding: 6px; }\r
.ql { display: flex; flex-direction: column; gap: 10px; }\r
.qi { padding: 12px 16px; border-radius: 10px; background: rgba(255,255,255,.07); border-left: 4px solid #8a9ab0; cursor: pointer; }\r
.qi.main { border-left-color: #ffd24a; }\r
.qi.on { background: rgba(255,230,160,.16); box-shadow: 0 0 0 1px rgba(255,230,160,.5); }\r
.qi.done { opacity: .5; }\r
.qi .qh { font-weight: 900; font-size: 16px; }\r
.qi .qb { font-size: 14px; margin-top: 4px; opacity: .9; }\r
.tabs { display: flex; gap: 8px; justify-content: center; margin-bottom: 14px; }\r
.tabs button { padding: 8px 22px; border-radius: 20px; border: 1px solid rgba(255,255,255,.4); background: rgba(255,255,255,.06); color: #fff; font-size: 15px; cursor: pointer; }\r
.tabs button.on { background: #fff3cf; color: #2a2010; text-shadow: none; }\r
.pgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(420px, 100%), 1fr)); gap: 12px; }\r
.pcard { display: flex; gap: 12px; padding: 12px; border-radius: 12px; background: linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,255,255,.02)); border: 1px solid rgba(255,255,255,.18); font-size: 13px; line-height: 1.6; }\r
.pcard img { width: 96px; height: 96px; border-radius: 12px; background: radial-gradient(circle at 50% 30%, #fff6, transparent), var(--ec); flex-shrink: 0; }\r
.pnm { font-size: 18px; font-weight: 900; }\r
.pel { display: inline-flex; align-items: center; gap: 2px; font-size: 13px; color: var(--ec); }\r
.pel svg { width: 16px; height: 16px; }\r
.ptl { opacity: .7; font-size: 12px; }\r
.pkit { margin-top: 4px; opacity: .85; font-size: 12px; }\r
.mora { text-align: center; font-size: 16px; margin-bottom: 10px; color: #ffe39a; }\r
.items { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr)); gap: 10px; }\r
.item { padding: 12px; border-radius: 10px; background: rgba(255,255,255,.07); }\r
.inm { font-weight: 900; } .ids { font-size: 13px; opacity: .8; margin: 4px 0 8px; }\r
.item .use, .sets .danger { padding: 6px 18px; border-radius: 16px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; cursor: pointer; }\r
.item .use:disabled { opacity: .3; }\r
.sets { display: flex; flex-direction: column; gap: 14px; max-width: 480px; margin: 0 auto; font-size: 15px; }\r
.sets label { display: flex; align-items: center; justify-content: space-between; gap: 12px; }\r
.sets input[type=range] { width: 200px; }\r
.sets select { font-size: 15px; padding: 4px 8px; }\r
.sets .note { font-size: 11px; opacity: .6; }\r
.sets .danger { background: #ff9a8a; align-self: center; margin-top: 10px; }\r
.fade { position: absolute; inset: 0; background: #000; opacity: 0; pointer-events: none; transition: opacity .45s; z-index: 30; }\r
.fade.on { opacity: 1; }\r
.credits { position: absolute; inset: 0; z-index: 25; background: rgba(4,8,18,.82); overflow: hidden; pointer-events: auto; transition: opacity 1.2s; }\r
.credits.out { opacity: 0; }\r
.cin { position: absolute; left: 0; right: 0; top: 100%; text-align: center; animation: roll 30s linear forwards; }\r
@keyframes roll { to { transform: translateY(-190vh); } }\r
.cin .ct { font-family: 'Shippori Mincho B1', serif; font-size: 44px; letter-spacing: .2em; color: #fff3d0; text-shadow: 0 0 20px #ffd88a; }\r
.cin .cs { font-size: 18px; letter-spacing: .3em; margin-bottom: 60px; }\r
.cin p { margin: 40px 0 6px; font-size: 14px; opacity: .7; letter-spacing: .2em; }\r
.cin b { font-size: 22px; }\r
.cin .cend { margin-top: 90px; font-family: 'Shippori Mincho B1', serif; font-size: 22px; letter-spacing: .2em; color: #c8fff0; }\r
/* ---- \u30BF\u30A4\u30C8\u30EB ---- */\r
.title { position: absolute; inset: 0; z-index: 15; pointer-events: auto; display: flex; flex-direction: column; align-items: center; justify-content: center; background: linear-gradient(180deg, rgba(10,20,40,.0) 30%, rgba(10,16,30,.55)); }\r
.title .tl { font-family: 'Shippori Mincho B1', serif; font-size: clamp(36px, 8vw, 84px); font-weight: 800; letter-spacing: .18em; color: #fff; text-shadow: 0 0 30px rgba(160,240,255,.9), 0 4px 10px rgba(0,30,60,.8); }\r
.title .ts { font-size: clamp(14px, 2.4vw, 22px); letter-spacing: .4em; margin-top: 4px; text-shadow: 0 2px 6px #000; }\r
.title .tbtns2 { display: flex; flex-direction: column; gap: 12px; margin-top: 7vh; }\r
.title button { min-width: 240px; padding: 12px 28px; border-radius: 28px; border: 1px solid rgba(255,255,255,.7); background: rgba(255,255,255,.14); color: #fff; font-size: 18px; letter-spacing: .2em; cursor: pointer; backdrop-filter: blur(6px); font-family: inherit; }\r
.title button:hover { background: rgba(255,255,255,.3); }\r
.title .tnote { position: absolute; bottom: 14px; font-size: 12px; opacity: .8; text-align: center; padding: 0 10px; }\r
.title.out { animation: tout .8s forwards; }\r
@keyframes tout { to { opacity: 0; } }\r
\r
.title .prep { font-size: 18px; letter-spacing: .2em; padding: 12px 28px; animation: nx 1.2s infinite; text-shadow: 0 2px 6px #000; }\r
#errbox { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: 50; width: min(520px, 90vw); padding: 18px 20px; border-radius: 12px; background: rgba(40,10,14,.92); border: 1px solid #ff9a8a; color: #fff; font-size: 14px; line-height: 1.6; pointer-events: auto; }\r
#errbox button { margin-top: 10px; padding: 6px 18px; border-radius: 14px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; }\r
\r
.dialog .chint { font-size: 12px; opacity: .8; align-self: flex-end; }\r
.autosave { position: absolute; right: 16px; top: 82px; font-size: 12px; opacity: 0; padding: 3px 10px; border-radius: 10px; background: rgba(20,26,40,.5); }\r
.autosave.show { animation: asv 2.4s; }\r
@keyframes asv { 0% { opacity: 0; } 15% { opacity: .9; } 80% { opacity: .9; } 100% { opacity: 0; } }\r
.slots { display: flex; flex-direction: column; gap: 10px; max-width: 560px; margin: 0 auto; }\r
.slot { display: flex; align-items: center; gap: 12px; padding: 12px 14px; border-radius: 10px; background: rgba(255,255,255,.07); }\r
.slot .si { flex: 1; font-size: 13px; line-height: 1.5; }\r
.slot .si b { font-size: 15px; }\r
.slot button { padding: 7px 16px; border-radius: 16px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; cursor: pointer; font-family: inherit; }\r
.slot button.ld { background: #a8e8ff; }\r
.slot button:disabled { opacity: .3; cursor: default; }\r
.title .loadlist { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }\r
.title .loadlist button { min-width: 300px; font-size: 14px; letter-spacing: .05em; text-align: left; }\r
\r
.eschint { position: absolute; right: max(14px, env(safe-area-inset-right)); top: 60px; font-size: 11px; opacity: .75; }\r
\r
/* ---- v1.4 \u5929\u6C17\u30FB\u6599\u7406\u306E\u52B9\u679C ---- */\r
.lmstatus { position: absolute; top: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px; flex-wrap: wrap; justify-content: center; max-width: 60vw; pointer-events: none; z-index: 6; }\r
.lmstatus span { padding: 3px 10px; border-radius: 12px; background: rgba(20,30,50,.55); color: #fff; font-size: 12px; text-shadow: 0 1px 2px #0008; white-space: nowrap; }\r
.lmstatus .wet { background: rgba(40,90,150,.6); }\r
.lmstatus .bf { background: rgba(140,90,20,.6); }\r
.item .usedish { padding: 6px 18px; border-radius: 16px; border: none; background: #ffe7a8; color: #2a2010; font-weight: 700; cursor: pointer; }\r
.item .usedish:disabled { opacity: .3; cursor: default; }\r
.mtitle2 { font-family: 'Shippori Mincho B1', serif; font-size: 18px; letter-spacing: .12em; color: #ffefc4; margin: 16px 0 8px; }\r
.ingr { display: flex; flex-wrap: wrap; gap: 8px; } .ingr span { padding: 4px 12px; border-radius: 12px; background: rgba(255,255,255,.08); }\r
.sets button[data-act=photo] { padding: 8px 18px; border-radius: 16px; border: none; background: #bfe9ff; color: #10283a; font-weight: 700; cursor: pointer; }\r
.rec .regions { display: grid; gap: 6px; }\r
.rec .rg { display: grid; grid-template-columns: minmax(110px, 160px) 1fr 44px; gap: 10px; align-items: center; font-size: 14px; }\r
.rec .bar { height: 8px; border-radius: 4px; background: rgba(255,255,255,.12); overflow: hidden; } .rec .bar i { display: block; height: 100%; background: linear-gradient(90deg, #7ff0d0, #ffe08a); }\r
.rec .stats { display: flex; flex-wrap: wrap; gap: 6px 16px; font-size: 14px; }\r
.rec .achs { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(240px, 100%), 1fr)); gap: 6px; }\r
.rec .ach { padding: 8px 10px; border-radius: 8px; background: rgba(255,255,255,.05); opacity: .55; font-size: 13px; display: flex; flex-direction: column; gap: 2px; }\r
.rec .ach.on { opacity: 1; background: rgba(255,224,140,.14); } .rec .ach.on b { color: #ffe08a; }\r
/* \u96E3\u3057\u3055\u306E\u9078\u629E\uFF08\u30BF\u30A4\u30C8\u30EB\uFF09 */\r
.diffpick { display: flex; flex-direction: column; gap: 8px; align-items: stretch; min-width: min(360px, 86vw); }\r
.diffpick .dq { font-size: 14px; color: #fff; text-shadow: 0 1px 3px #000a; text-align: center; }\r
.diffpick button { display: flex; flex-direction: column; gap: 2px; align-items: center; }\r
.diffpick button span { font-size: 12px; opacity: .85; font-weight: 400; }\r
/* ---- \u5199\u771F\u30E2\u30FC\u30C9 ---- */\r
#ui.photo-on > *:not(.photoui):not(.fade) { display: none !important; }\r
.photoui { position: absolute; inset: 0; z-index: 30; pointer-events: auto; }\r
.photoui .phcam { position: absolute; inset: 0; touch-action: none; cursor: grab; }\r
.photoui .phbar { position: absolute; left: 50%; bottom: 10px; transform: translateX(-50%); width: min(980px, calc(100vw - 24px)); padding: 10px 14px; border-radius: 14px; background: rgba(12,18,32,.72); color: #fff; font-size: 13px; display: flex; flex-direction: column; gap: 6px; }\r
.photoui .phrow { display: flex; flex-wrap: wrap; gap: 6px 16px; align-items: center; }\r
.photoui label { display: flex; align-items: center; gap: 6px; white-space: nowrap; }\r
.photoui input[type=range] { width: 110px; }\r
.photoui select { font-size: 13px; }\r
.photoui .phbtns { justify-content: center; }\r
.photoui .phbtns button, .photoui .phpbtn a, .photoui .phpbtn button { padding: 8px 22px; border-radius: 18px; border: none; font-weight: 700; cursor: pointer; font-size: 14px; text-decoration: none; }\r
.photoui .phshot, .photoui .phsave { background: #ffe7a8; color: #2a2010; }\r
.photoui .phexit, .photoui .phclose { background: rgba(255,255,255,.18); color: #fff; }\r
.photoui .phhelp { text-align: center; opacity: .75; font-size: 12px; }\r
.photoui .phframe { position: absolute; inset: 24px; border: 10px solid rgba(255,248,225,.9); outline: 2px solid rgba(255,248,225,.9); outline-offset: -26px; pointer-events: none; display: none; }\r
.photoui .phframe.on { display: block; }\r
.photoui .phprev { position: absolute; inset: 0; background: rgba(5,8,16,.95); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; z-index: 2; }\r
.photoui .phprev img { max-width: 90vw; max-height: 70vh; border-radius: 8px; box-shadow: 0 8px 30px #000a; }\r
.photoui .phpbtn { display: flex; gap: 12px; }\r
@media (max-width: 700px) { .photoui .phbar { font-size: 12px; padding: 8px; } .photoui input[type=range] { width: 80px; } .lmstatus { top: 4px; max-width: 54vw; } .lmstatus span { font-size: 10px; } }\r
\r
.photoui .phmin { background: rgba(255,255,255,.12); color: #fff; }\r
.photoui .phbar.min .phrow:not(.phbtns), .photoui .phbar.min .phhelp { display: none; }\r
.tabs { flex-wrap: wrap; } .tabs button { white-space: nowrap; }\r
@media (max-width: 600px) { .tabs { gap: 5px; } .tabs button { padding: 6px 11px; font-size: 13px; } }\r
`;var Ou=class{constructor(t,e){this.meta=e,this.n=e.n,this.size=e.size,this.half=e.size/2,this.cell=e.size/e.n;let i=(e.hmax-e.hmin)/65535;this.h=new Float32Array(this.n*this.n);for(let n=0;n<this.h.length;n++)this.h[n]=e.hmin+t[n]*i;this.colliders=[],this.waterLevel=0}at(t,e){let i=this.n;return t<0?t=0:t>=i&&(t=i-1),e<0?e=0:e>=i&&(e=i-1),this.h[e*i+t]}heightAt(t,e){let i=(t+this.half)/this.cell-.5,n=(e+this.half)/this.cell-.5,r=Math.floor(i),a=Math.floor(n),o=i-r,l=n-a,c=this.at(r,a),h=this.at(r+1,a),d=this.at(r,a+1),u=this.at(r+1,a+1);return(c*(1-o)+h*o)*(1-l)+(d*(1-o)+u*o)*l}normalAt(t,e,i={x:0,y:1,z:0}){let n=this.cell,r=this.heightAt(t+n,e)-this.heightAt(t-n,e),a=this.heightAt(t,e+n)-this.heightAt(t,e-n),o=-r,l=2*n,c=-a,h=Math.hypot(o,l,c);return i.x=o/h,i.y=l/h,i.z=c/h,i}slopeAt(t,e){let i=this.cell,n=(this.heightAt(t+i,e)-this.heightAt(t-i,e))/(2*i),r=(this.heightAt(t,e+i)-this.heightAt(t,e-i))/(2*i);return Math.hypot(n,r)}inBounds(t,e){return Math.hypot(t,e)<640}addCollider(t){return this.colliders.push(t),this.grid&&this.gridAdd(t),t}removeCollider(t){let e=this.colliders.indexOf(t);if(e>=0&&this.colliders.splice(e,1),this.grid)for(let i of this.grid.values()){let n=i.indexOf(t);n>=0&&i.splice(n,1)}}gridAdd(t){let e=this.gsz,i=t.box?Math.hypot(t.hw,t.hd):t.r,n=Math.floor((t.x-i)/e),r=Math.floor((t.x+i)/e),a=Math.floor((t.z-i)/e),o=Math.floor((t.z+i)/e);for(let l=n;l<=r;l++)for(let c=a;c<=o;c++){let h=l*4096+c;this.grid.has(h)||this.grid.set(h,[]),this.grid.get(h).push(t)}}groundAt(t,e,i=1e9){let n=this.heightAt(t,e);for(let r of this.nearColliders(t,e,0))r.top!=null&&this.insideCollider(r,t,e,0)&&r.top<=i+.6&&r.top>n&&(n=r.top);return n}insideCollider(t,e,i,n){if(t.box){let r=e-t.x,a=i-t.z,o=Math.cos(-t.rot||0),l=Math.sin(-t.rot||0),c=r*o-a*l,h=r*l+a*o;return Math.abs(c)<t.hw+n&&Math.abs(h)<t.hd+n}return Math.hypot(e-t.x,i-t.z)<t.r+n}buildGrid(){this.grid=new Map,this.gsz=16;for(let t of this.colliders)this.gridAdd(t)}nearColliders(t,e,i){if(!this.grid)return this.colliders;let n=this.gsz,r=[],a=Math.floor((t-i)/n),o=Math.floor((t+i)/n),l=Math.floor((e-i)/n),c=Math.floor((e+i)/n);for(let h=a;h<=o;h++)for(let d=l;d<=c;d++){let u=this.grid.get(h*4096+d);if(u)for(let f of u)r.includes(f)||r.push(f)}return r}pushOut(t,e,i,n=1.7){let r=null;for(let a of this.nearColliders(t.x,t.z,e+1))if(!(a.top!=null&&a.top<=i+.45)&&!(a.bottom!=null&&a.bottom>i+n))if(a.box){let o=t.x-a.x,l=t.z-a.z,c=a.rot||0,h=Math.cos(-c),d=Math.sin(-c),u=o*h-l*d,f=o*d+l*h,p=a.hw+e-Math.abs(u),x=a.hd+e-Math.abs(f);if(p>0&&x>0){p<x?u+=Math.sign(u||1)*p:f+=Math.sign(f||1)*x;let m=Math.cos(c),g=Math.sin(c);t.x=a.x+u*m-f*g,t.z=a.z+u*g+f*m,r=a}}else{let o=t.x-a.x,l=t.z-a.z,c=Math.hypot(o,l),h=a.r+e;c<h&&c>1e-6&&(t.x=a.x+o/c*h,t.z=a.z+l/c*h,r=a)}return r}};async function kp(s){let[t,e]=await Promise.all([fetch(s+"world/height.bin").then(i=>{if(!i.ok)throw new Error("height");return i.arrayBuffer()}),fetch(s+"world/world.json").then(i=>i.json())]);return new Ou(new Uint16Array(t),e)}var Hu={srgb:["grass","dirt","cobble","rock","sand","darkrock","mossrock","plaster","brick","bark","wood","rooftile","slate","orerock","planks","snow","cloth_teal_trim","cloth_green_trim","cloth_gold_pattern","linen","leather","metal_gold","cloth_dark","leather_boot","cloth_teal","cloth_green"],linear:["rock_n","cobble_n","brick_n","bark_n","rooftile_n","planks_n","darkrock_n","mossrock_n","slate_n","dirt_n","cloth_detail","leather_detail"],png:["leaves_a","leaves_b","leaves_c","eye_sora","eye_akane","eye_mizuha","eye_raika","eye_npc","eye_popo","flowers","dot","spark","puff"]};async function Fp(s,t,e){let i=new Ca,n={},r=[],a=Math.min(8,t.capabilities.getMaxAnisotropy()),o=(c,h,d,u)=>r.push(i.loadAsync(s+"tex/"+h).then(f=>{f.colorSpace=d?Ue:Ni,u&&(f.wrapS=f.wrapT=sr,f.anisotropy=a),n[c]=f,e&&e(Object.keys(n).length/l)}));for(let c of Hu.srgb)o(c,c+".jpg",!0,!0);for(let c of Hu.linear)o(c,c+".jpg",!1,!0);for(let c of Hu.png)o(c,c+".png",!0,!1);r.push(i.loadAsync(s+"world/splat.png").then(c=>{c.colorSpace=Ni,n.splat=c})),r.push(i.loadAsync(s+"world/map.jpg").then(c=>{c.colorSpace=Ue,n.map=c}));let l=r.length;return await Promise.all(r),n}function Up(s){let t=new wn(s.h,s.n,s.n,Er,yi);return t.minFilter=t.magFilter=He,t.needsUpdate=!0,t}var Ir={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ai=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},mb=new qn(-1,1,1,-1,0,1),Gu=class extends te{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},gb=new Gu,Kn=class{constructor(t){this._mesh=new V(gb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,mb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ms=class extends Ai{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qi.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Kn(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qa=class extends Ai{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Ec=class extends Ai{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Tc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new tt);this._width=i.width,this._height=i.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ye}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ms(Ir),this.copyPass.material.blending=zi,this.timer=new Da}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qa!==void 0&&(a instanceof Qa?i=!0:a instanceof Ec&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ac=class extends Ai{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ot}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=n}};var Bp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ot(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Lr=class s extends Ai{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new ot(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,a,{type:Ye,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Le(r,a,{type:Ye,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Le(r,a,{type:Ye,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Bp;this.highPassUniforms=qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new tt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qi.clone(Ir.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader,premultipliedAlpha:!0,blending:Ge,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ot,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new Kn(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new tt(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let n=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),r.push(c)}return new ge({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Lr.BlurDirectionX=new tt(1,0);Lr.BlurDirectionY=new tt(0,1);var to={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Rc=class extends Ai{constructor(){super(),this.isOutputPass=!0,this.uniforms=qi.clone(to.uniforms),this.material=new br({name:to.name,uniforms:this.uniforms,vertexShader:to.vertexShader,fragmentShader:to.fragmentShader}),this._fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Na?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ua&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var rn=`
float lmHash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float lmNoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
  return mix(mix(lmHash(i),lmHash(i+vec2(1,0)),f.x), mix(lmHash(i+vec2(0,1)),lmHash(i+vec2(1,1)),f.x), f.y); }
float lmFbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*lmNoise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
float lmFbm3(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<3;i++){ s+=a*lmNoise(p); p=p*2.03+vec2(1.7,9.2); a*=0.5; } return s; }
`,Cc=`
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
`,Pc=`
float lmField(vec2 xz){
  vec2 d = xz - vec2(330.0, 330.0);
  float r = length(d);
  float a = atan(d.y, d.x);
  float ring = smoothstep(104.0, 110.0, r) * (1.0 - smoothstep(150.0, 158.0, r));
  // \u5357\u6771\u301C\u6771\u3068\u5357\u306E\u6247\u5F62\u3060\u3051\uFF08\u9053\u3092\u907F\u3051\u308B\uFF09
  float sec = smoothstep(0.15, 0.3, sin(a * 2.0 + 0.6)) ;
  return ring * sec;
}
`;var xb=[{t:0,zen:"#060c22",hor:"#1a2a4c",sun:"#8aa4ff",sunI:.18,amb:"#26355c",gnd:"#141a26",fog:"#1d2c4c",cloud:"#3a4a70"},{t:4.5,zen:"#0b1534",hor:"#2a3a62",sun:"#9ab0ff",sunI:.15,amb:"#2a3a62",gnd:"#161c28",fog:"#26365a",cloud:"#46557a"},{t:6,zen:"#3d5e9e",hor:"#ffb98a",sun:"#ffb070",sunI:1.4,amb:"#8a90b8",gnd:"#5a4a3a",fog:"#e9b9a0",cloud:"#ffd2b8"},{t:8,zen:"#3f86dc",hor:"#cfe6f2",sun:"#fff0d8",sunI:2.6,amb:"#b9d4f0",gnd:"#6f7a52",fog:"#c8dff0",cloud:"#ffffff"},{t:12,zen:"#2c78d8",hor:"#bfe1f5",sun:"#fff7ea",sunI:3,amb:"#bcd8f4",gnd:"#76844f",fog:"#bfdcf0",cloud:"#ffffff"},{t:16,zen:"#3a80d6",hor:"#d6e6ee",sun:"#fff0d0",sunI:2.6,amb:"#c0d6ee",gnd:"#78804e",fog:"#cfe0ec",cloud:"#fffaf0"},{t:18,zen:"#4a568f",hor:"#ff9a6a",sun:"#ff9a5a",sunI:1.6,amb:"#a08aa8",gnd:"#5a4636",fog:"#f0a888",cloud:"#ffc0a0"},{t:19.5,zen:"#1a2350",hor:"#6a4a7a",sun:"#b0a0ff",sunI:.3,amb:"#4a4a7a",gnd:"#1e1e2c",fog:"#4a4470",cloud:"#6a5a88"},{t:24,zen:"#060c22",hor:"#1a2a4c",sun:"#8aa4ff",sunI:.18,amb:"#26355c",gnd:"#141a26",fog:"#1d2c4c",cloud:"#3a4a70"}],ws=xb.map(s=>({...s,zen:new ot(s.zen),hor:new ot(s.hor),sun:new ot(s.sun),amb:new ot(s.amb),gnd:new ot(s.gnd),fog:new ot(s.fog),cloud:new ot(s.cloud)}));function Op(s,t){s=(s%24+24)%24;let e=ws[0],i=ws[1];for(let c=0;c<ws.length-1;c++)if(s>=ws[c].t&&s<=ws[c+1].t){e=ws[c],i=ws[c+1];break}let n=(s-e.t)/Math.max(1e-4,i.t-e.t);for(let c of["zen","hor","sun","amb","gnd","fog","cloud"])t[c].copy(e[c]).lerp(i[c],n);t.sunI=e.sunI+(i.sunI-e.sunI)*n;let r=(s-6)/12*Math.PI,a=s>5.6&&s<18.6;t.isDay=a;let o=Math.sin(r),l=Math.cos(r);return t.sunDir.set(l*.85,Math.max(o,-.3),-.38).normalize(),a?t.lightDir.copy(t.sunDir):t.lightDir.set(-l*.7,Math.max(.35,-o),.3).normalize(),t.lightDir.y<.12&&(t.lightDir.y=.12,t.lightDir.normalize()),t.night=ja.clamp(a?0:1,0,1),t}function Hp(){return{zen:new ot,hor:new ot,sun:new ot,amb:new ot,gnd:new ot,fog:new ot,cloud:new ot,sunI:1,sunDir:new R,lightDir:new R,isDay:!0,night:0}}var Ic=class{constructor(t){this.uniforms={uZen:{value:new ot},uHor:{value:new ot},uSunCol:{value:new ot},uSunDir:{value:new R(0,1,0)},uCloudCol:{value:new ot},uFog:{value:new ot},uTime:{value:0},uNight:{value:0},uCamY:{value:0},uCloudCover:{value:.4}};let e=new ge({uniforms:this.uniforms,side:Qe,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main(){ vDir = position; vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }`,fragmentShader:`
        uniform vec3 uZen, uHor, uSunCol, uSunDir, uCloudCol, uFog; uniform float uTime, uNight, uCamY, uCloudCover;
        varying vec3 vDir;
        ${rn}
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
        }`});this.mesh=new V(new Ht(4e3,48,24),e),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-10,t.add(this.mesh)}update(t,e,i,n){let r=this.uniforms;r.uZen.value.copy(t.zen),r.uHor.value.copy(t.hor),r.uSunCol.value.copy(t.sun).multiplyScalar(t.isDay?1:.6),r.uSunDir.value.copy(t.isDay?t.sunDir:t.lightDir),r.uCloudCol.value.copy(t.cloud),r.uFog.value.copy(t.fog),r.uTime.value=i,r.uNight.value=t.night,r.uCamY.value=e.position.y,r.uCloudCover.value=.4-(n?n.cloud:0)*.42,this.mesh.position.copy(e.position)}};var Dr=new ot;function eo(s,t,e){let i=(s.r+s.g+s.b)/3*t;Dr.setRGB(i,i,i),s.lerp(Dr,e)}function Gp(s,t){if(!t)return s;let e=t.cloud,i=t.rain;if(e>.001){eo(s.zen,.75,e*.8),eo(s.hor,.9,e*.6),eo(s.cloud,.62-i*.12,e*.85);let n=t.storm||0;eo(s.fog,.85-i*.22-n*.15,e*.6+i*.25),eo(s.amb,.95-i*.15,e*.45),s.sunI*=1-e*.62-i*.1,s.zen.multiplyScalar(1-i*.3-n*.25),s.hor.multiplyScalar(1-i*.22-n*.2),s.cloud.multiplyScalar(1-n*.25)}if(t.flash>0){let n=t.flash;s.zen.lerp(Dr.setRGB(.85,.88,1),n*.6),s.hor.lerp(Dr.setRGB(.9,.92,1),n*.5),s.cloud.lerp(Dr.setRGB(1,1,1),n*.7),s.amb.lerp(Dr.setRGB(.9,.92,1.1),n*.7)}return s}var Lc=class{constructor(t,e="high"){this.scene=t;let i=e==="high"?4200:e==="mid"?2400:1100;this.box=new R(46,26,46);let n=new Float32Array(i*2*3),r=new Float32Array(i*2);for(let l=0;l<i;l++){let c=Math.random(),h=Math.random(),d=Math.random();for(let u=0;u<2;u++)n.set([c,h,d],(l*2+u)*3),r[l*2+u]=u}let a=new te;a.setAttribute("position",new he(n,3)),a.setAttribute("aEnd",new he(r,1)),this.rainU={uTime:{value:0},uCam:{value:new R},uBox:{value:this.box},uAmt:{value:0},uWind:{value:new tt(2.2,1)},uCol:{value:new ot(13162216)}},this.rain=new ua(a,new ge({uniforms:this.rainU,transparent:!0,depthWrite:!1,fog:!1,vertexShader:`
        uniform float uTime, uAmt; uniform vec3 uCam, uBox; uniform vec2 uWind;
        attribute float aEnd; varying float vA;
        void main(){
          float sp = 22.0 + fract(position.x * 91.7) * 8.0;
          vec3 vel = vec3(uWind.x, -sp, uWind.y);
          vec3 p = position * uBox + vel * uTime;
          p = mod(p - (uCam - uBox * 0.5), uBox) + uCam - uBox * 0.5;
          p += normalize(vel) * aEnd * 0.75;
          // \u96E8\u306E\u91CF\u3067\u898B\u3048\u308B\u672C\u6570\u3092\u9593\u5F15\u304F
          float keep = step(fract(position.z * 57.3 + position.y * 13.1), uAmt);
          vA = (0.18 + aEnd * 0.3) * keep;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
        }`,fragmentShader:`
        uniform vec3 uCol; varying float vA;
        void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(uCol, vA); }`})),this.rain.frustumCulled=!1,this.rain.renderOrder=5,this.rain.visible=!1,t.add(this.rain);let o=new Tn(520,600,96,1,0,Math.PI);this.bowU={uA:{value:0}},this.bow=new V(o,new ge({uniforms:this.bowU,transparent:!0,depthWrite:!1,fog:!1,side:fe,blending:Ge,vertexShader:"varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        uniform float uA; varying vec2 vP;
        vec3 hue(float h){ return clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0, 0.0, 1.0); }
        void main(){
          float t = (length(vP) - 520.0) / 80.0;             // 0=\u5185\u5074\uFF08\u7D2B\uFF091=\u5916\u5074\uFF08\u8D64\uFF09
          vec3 c = hue((1.0 - t) * 0.78);
          float edge = smoothstep(0.0, 0.18, t) * smoothstep(1.0, 0.82, t);
          float foot = smoothstep(0.0, 120.0, vP.y);         // \u8DB3\u5143\u306F\u8584\u304F
          gl_FragColor = vec4(c * edge * foot * uA * 0.38, 1.0);
        }`})),this.bow.frustumCulled=!1,this.bow.renderOrder=-9,this.bow.visible=!1,t.add(this.bow)}update(t,e,i,n,r){let a=n?n.rain:0;if(this.rain.visible=a>.02,this.rain.visible){let l=this.rainU;l.uTime.value=i,l.uCam.value.copy(e.position),l.uAmt.value=Math.min(1,a*1.1),l.uWind.value.set(2.2+(n.storm||0)*4,1+(n.storm||0)*2),l.uCol.value.setRGB(.62,.68,.76).lerp(r.fog,.4)}let o=n?n.rainbow:0;if(this.bow.visible=o>.01&&r.isDay,this.bow.visible){this.bowU.uA.value=o;let l=new R(-r.sunDir.x,0,-r.sunDir.z).normalize();this.bow.position.set(e.position.x+l.x*900,e.position.y-180,e.position.z+l.z*900),this.bow.lookAt(e.position.x,this.bow.position.y,e.position.z)}}};var vb={uniforms:{tDiffuse:{value:null},uSun:{value:new tt(.5,.8)},uI:{value:0},uCol:{value:new ot(1,.95,.8)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
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
    }`},yb={uniforms:{tDiffuse:{value:null},uSat:{value:1.12},uVig:{value:.28},uLift:{value:new R(0,.004,.012)},uFlash:{value:0},uFlashCol:{value:new ot(1,1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uSat, uVig, uFlash; uniform vec3 uLift, uFlashCol; varying vec2 vUv;
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(vec3(l), c.rgb, uSat) + uLift;
      vec2 d = vUv - 0.5; float v = 1.0 - dot(d,d)*uVig*2.2;
      c.rgb *= v;
      c.rgb = mix(c.rgb, uFlashCol, uFlash);
      gl_FragColor = c;
    }`},Dc=class{constructor(t,e){this.quality=e;let i=this.renderer=new Mc({antialias:!1,powerPreference:"high-performance",stencil:!1}),n={high:Math.min(window.devicePixelRatio,1.5),mid:Math.min(window.devicePixelRatio,1),low:.7}[e];i.setPixelRatio(n),i.setSize(window.innerWidth,window.innerHeight),i.toneMapping=vs,i.toneMappingExposure=1,i.outputColorSpace=Ue,i.shadowMap.enabled=e!=="low",i.shadowMap.type=Cl,t.appendChild(i.domElement),this.canvas=i.domElement,this.scene=new os,this.camera=new ni(55,window.innerWidth/window.innerHeight,.15,6e3),this.scene.fog=new oa(12573936,120,1500),this.hemi=new ms(12376308,7767119,1.1),this.scene.add(this.hemi),this.sun=new gs(16777215,3),this.sun.castShadow=e!=="low";let r=e==="high"?2048:1024;this.sun.shadow.mapSize.set(r,r);let a=e==="high"?70:55;Object.assign(this.sun.shadow.camera,{left:-a,right:a,top:a,bottom:-a,near:1,far:600}),this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.04,this.shadowSpan=a,this.scene.add(this.sun,this.sun.target);let o=new Le(1,1,{type:Ye,samples:e==="high"?4:e==="mid"?2:0});this.composer=new Tc(i,o),this.composer.addPass(new Ac(this.scene,this.camera)),this.bloom=new Lr(new tt(256,256),.3,.55,.93);let l=this.bloom.setSize.bind(this.bloom);this.bloom.setSize=(c,h)=>l(Math.max(64,Math.round(c/2)),Math.max(64,Math.round(h/2))),e!=="low"&&this.composer.addPass(this.bloom),this.rays=new Ms(vb),e==="high"&&this.composer.addPass(this.rays),this.grade=new Ms(yb),this.composer.addPass(this.grade),this.composer.addPass(new Rc),this.atm=Hp(),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=window.innerWidth,e=window.innerHeight;this.renderer.setSize(t,e),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}setTime(t,e,i){let n=Gp(Op(t,this.atm),i),r=i?i.cloud:0,a=i?i.rain:0,o=i?i.flash:0;this.scene.fog.near=120-a*80,this.scene.fog.far=1500-a*950,this.sun.color.copy(n.sun),this.sun.intensity=n.sunI,this.hemi.color.copy(n.amb),this.hemi.groundColor.copy(n.gnd),this.hemi.intensity=(.9+(n.isDay?.35:.2))*(1-r*.12-a*.12-(i?i.storm:0)*.1)+o*2.2,this.scene.fog.color.copy(n.fog);let l=this.shadowSpan*2/this.sun.shadow.mapSize.x,c=Math.round(e.x/l)*l,h=Math.round(e.z/l)*l;this.sun.target.position.set(c,e.y,h),this.sun.position.set(c+n.lightDir.x*300,e.y+n.lightDir.y*300,h+n.lightDir.z*300);let d=new R().copy(n.sunDir).multiplyScalar(3e3).add(this.camera.position).project(this.camera),u=n.isDay&&d.z<1&&Math.abs(d.x)<1.4&&Math.abs(d.y)<1.4;return this.rays.uniforms.uSun.value.set(d.x*.5+.5,d.y*.5+.5),this.rays.uniforms.uI.value=this.raysOff?0:u?(1-r)*.9*Math.min(1,n.sunI/2)*(1-Math.min(1,Math.hypot(d.x,d.y)/1.6)):0,this.rays.uniforms.uCol.value.copy(n.sun),n}render(){this.composer.render()}};var bb=[64,32,16,8],zc=class{constructor(t,e,i){this.world=e,this.scene=t,this.chunks=[],this.CN=16,this.CS=e.size/this.CN,this.uniforms={tGrass:{value:i.grass},tDirt:{value:i.dirt},tRock:{value:i.rock},tSand:{value:i.sand},tCobble:{value:i.cobble},tSplat:{value:i.splat},tRockN:{value:i.rock_n},uSize:{value:e.size},uTown:{value:new R(330,330,100)}},this.material=_b(this.uniforms);for(let n=0;n<this.CN;n++)for(let r=0;r<this.CN;r++){let a=-e.half+r*this.CS,o=-e.half+n*this.CS,l=a+this.CS/2,c=o+this.CS/2;Math.hypot(l,c)>e.half+40||this.chunks.push({x0:a,z0:o,cx:l,cz:c,lod:-1,meshes:[]})}}buildChunk(t,e){let i=this.world,n=bb[e],r=this.CS,a=r/n,o=(n+1)*(n+1),l=(n+1)*4,c=new Float32Array((o+l)*3),h=new Float32Array((o+l)*3),d={x:0,y:1,z:0},u=0;for(let b=0;b<=n;b++)for(let y=0;y<=n;y++){let M=t.x0+y*a,S=t.z0+b*a;c[u*3]=M,c[u*3+1]=i.heightAt(M,S),c[u*3+2]=S,i.normalAt(M,S,d),h[u*3]=d.x,h[u*3+1]=d.y,h[u*3+2]=d.z,u++}let f=[];for(let b=0;b<n;b++)for(let y=0;y<n;y++){let M=b*(n+1)+y,S=M+1,A=M+n+1,_=A+1;f.push(M,A,S,S,A,_)}let p=[];for(let b=0;b<=n;b++)p.push([b,0]);for(let b=0;b<=n;b++)p.push([n,b]);for(let b=n;b>=0;b--)p.push([b,n]);for(let b=n;b>=0;b--)p.push([0,b]);let x=u;for(let b=0;b<p.length&&u<o+l;b++){let[y,M]=p[b],S=M*(n+1)+y;c[u*3]=c[S*3],c[u*3+1]=c[S*3+1]-4,c[u*3+2]=c[S*3+2],h[u*3]=h[S*3],h[u*3+1]=h[S*3+1],h[u*3+2]=h[S*3+2],u++}let m=u-x;for(let b=0;b<m-1;b++){let[y,M]=p[b],[S,A]=p[b+1],_=M*(n+1)+y,T=A*(n+1)+S,P=x+b,I=x+b+1;f.push(_,P,T,T,P,I,_,T,P,T,I,P)}let g=new te;g.setAttribute("position",new he(c.subarray(0,u*3),3)),g.setAttribute("normal",new he(h.subarray(0,u*3),3)),g.setIndex(f),g.computeBoundingSphere();let v=new V(g,this.material);return v.receiveShadow=!0,v.castShadow=e<=1,v.matrixAutoUpdate=!1,v}update(t){for(let e of this.chunks){let i=Math.max(0,Math.hypot(t.x-e.cx,t.z-e.cz)-this.CS*.5),n=i<70?0:i<200?1:i<420?2:3;n!==e.lod&&(e.lod>=0&&this.scene.remove(e.meshes[e.lod]),e.meshes[n]||(e.meshes[n]=this.buildChunk(e,n)),this.scene.add(e.meshes[n]),e.lod=n)}}};function _b(s){let t=new An({color:16777215,roughness:.94,metalness:0});return t.onBeforeCompile=e=>{Object.assign(e.uniforms,s),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLmPos; varying vec3 vLmNorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLmPos = position; vLmNorm = normal; // \u5730\u5F62\u306F\u539F\u70B9\u306B\u7F6E\u304F\u306E\u3067\u7269\u4F53\u5EA7\u6A19\uFF1D\u4E16\u754C\u5EA7\u6A19\uFF08\u93E1\u50CF\u306E\u63CF\u753B\u3067\u3082\u5143\u306E\u5024\uFF09`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vLmPos; varying vec3 vLmNorm;
        uniform sampler2D tGrass, tDirt, tRock, tSand, tCobble, tSplat, tRockN; uniform float uSize; uniform vec3 uTown;
        ${rn}
        ${Pc}
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
      `)},t}var Nc=class{constructor(t,e,i){this.uniforms=qi.merge([yt.fog,{uHeight:{value:e},uHInfo:{value:new Te(i.n,i.size,i.half,i.cell)},uTime:{value:0},uZen:{value:new ot},uHor:{value:new ot},uSunCol:{value:new ot},uSunDir:{value:new R(0,1,0)},uSunI:{value:1},tRefl:{value:null},uRes:{value:new tt(1,1)},uReflOn:{value:0}}]),this.uniforms.uHeight.value=e;let n=new ge({uniforms:this.uniforms,transparent:!0,fog:!0,depthWrite:!1,vertexShader:`
        varying vec3 vW;
        #include <fog_pars_vertex>
        void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        varying vec3 vW;
        uniform float uTime, uSunI, uReflOn; uniform vec3 uZen, uHor, uSunCol, uSunDir; uniform sampler2D tRefl; uniform vec2 uRes;
        ${rn}
        ${Cc}
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
        }`}),r=new ri(1240,1240,1,1);r.rotateX(-Math.PI/2),this.mesh=new V(r,n),this.mesh.position.y=0,this.mesh.renderOrder=2,t.add(this.mesh)}enableReflection(t,e,i){this.rt=new Le(e,i,{type:Ye}),this.uniforms.tRefl.value=this.rt.texture,this.uniforms.uReflOn.value=1,this.clip=[new wi(new R(0,-1,0),.05)]}resizeReflection(t,e){this.rt&&this.rt.setSize(t,e)}renderReflection(t,e,i,n,r){if(!this.rt||(this.rf=(this.rf||0)+1,this.rf%2===0&&this.uniforms.uReflOn.value>.5))return;if(i.position.y<.05){this.uniforms.uReflOn.value=0;return}this.uniforms.uReflOn.value=1;let a=n.map(h=>h.visible);n.forEach(h=>{h.visible=!1}),this.mesh.visible=!1;for(let h of r)h.position.y*=-1,h.target&&(h.target.position.y*=-1);e.scale.y=-1,e.updateMatrixWorld(!0);let o=t.getRenderTarget(),l=t.shadowMap.autoUpdate,c=t.clippingPlanes;t.shadowMap.autoUpdate=!1,t.clippingPlanes=this.clip,t.setRenderTarget(this.rt),t.clear(),t.render(e,i),t.setRenderTarget(o),t.shadowMap.autoUpdate=l,t.clippingPlanes=c,e.scale.y=1,e.updateMatrixWorld(!0);for(let h of r)h.position.y*=-1,h.target&&(h.target.position.y*=-1);this.mesh.visible=!0,n.forEach((h,d)=>{h.visible=a[d]}),this.uniforms.uRes.value.set(t.domElement.width,t.domElement.height)}update(t,e){let i=this.uniforms;i.uTime.value=e,i.uZen.value.copy(t.zen),i.uHor.value.copy(t.hor),i.uSunCol.value.copy(t.sun),i.uSunDir.value.copy(t.isDay?t.sunDir:t.lightDir),i.uSunI.value=t.sunI}};var kc=class{constructor(t,e,i,n,r,a){let o={high:7e4,mid:36e3,low:14e3},l={high:72,mid:56,low:40};this.count=o[r]||36e3,this.P=l[r]||56,this.uniforms={uHeight:{value:e},uHInfo:{value:new Te(n.n,n.size,n.half,n.cell)},tSplat:{value:i},uSize:{value:n.size},uTime:{value:0},uCenter:{value:new R},uPlayer:{value:new R(0,-999,0)},uPatch:{value:this.P},uWind:{value:new tt(.8,.6).normalize()},uTown:{value:new R(330,330,98)}};let c=4,h=[],d=[];for(let M=0;M<=c;M++){let S=M/c;M<c?h.push(-.5,S,0,.5,S,0):h.push(0,1,0)}for(let M=0;M<c-1;M++){let S=M*2;d.push(S,S+1,S+2,S+1,S+3,S+2)}let u=(c-1)*2;d.push(u,u+1,c*2);let f=d.length;for(let M=0;M<f;M+=3)d.push(d[M],d[M+2],d[M+1]);let p=new La;p.setAttribute("position",new Lt(h,3)),p.setAttribute("normal",new Lt(new Array(h.length).fill(0).map((M,S)=>S%3===1?1:0),3)),p.setIndex(d);let x=this.count,m=new Float32Array(x*4),g=new Float32Array(x*4),v=12345,b=()=>(v=v*16807%2147483647)/2147483647;for(let M=0;M<x;M++)m[M*4]=b()*this.P,m[M*4+1]=b()*this.P,m[M*4+2]=b(),m[M*4+3]=b(),g[M*4]=.25+b()*.45,g[M*4+1]=.035+b()*.035,g[M*4+2]=b()*Math.PI*2,g[M*4+3]=b()*.5+.1;p.setAttribute("aRoot",new Sn(m,4)),p.setAttribute("aBlade",new Sn(g,4)),p.instanceCount=x,p.boundingSphere=new Di(new R,1e6);let y=new Aa({color:16777215});y.onBeforeCompile=M=>{Object.assign(M.uniforms,this.uniforms),M.vertexShader=M.vertexShader.replace("#include <common>",`#include <common>
          attribute vec4 aRoot; attribute vec4 aBlade;
          uniform sampler2D tSplat; uniform float uSize, uTime, uPatch; uniform vec3 uCenter, uPlayer, uTown; uniform vec2 uWind;
          varying float vT; varying float vGust; varying vec3 vBase; varying float vFlower; varying float vField;
          ${rn}
          ${Cc}
          ${Pc}`).replace("#include <beginnormal_vertex>","vec3 objectNormal = vec3(0.0,1.0,0.0);").replace("#include <begin_vertex>",`
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
          diffuseColor.rgb *= gc;`)},this.mesh=new V(p,y),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0,t.add(this.mesh)}update(t,e,i){this.uniforms.uTime.value=t,this.uniforms.uCenter.value.copy(e),i&&this.uniforms.uPlayer.value.copy(i)}};function an(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,l=new te,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Vp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Vp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Vp(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new he(a,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return n!==void 0&&(o.gpuType=n),o}function Wp(s,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},i=s.getIndex(),n=s.getAttribute("position"),r=i?i.count:n.count,a=0,o=Object.keys(s.attributes),l={},c={},h=[],d=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let v=0,b=o.length;v<b;v++){let y=o[v],M=s.attributes[y];l[y]=new M.constructor(new M.array.constructor(M.count*M.itemSize),M.itemSize,M.normalized);let S=s.morphAttributes[y];S&&(c[y]||(c[y]=[]),S.forEach((A,_)=>{let T=new A.array.constructor(A.count*A.itemSize);c[y][_]=new A.constructor(T,A.itemSize,A.normalized)}))}let f=t*.5,p=Math.log10(1/t),x=Math.pow(10,p),m=f*x;for(let v=0;v<r;v++){let b=i?i.getX(v):v,y="";for(let M=0,S=o.length;M<S;M++){let A=o[M],_=s.getAttribute(A),T=_.itemSize;for(let P=0;P<T;P++)y+=`${Math.trunc(_[d[P]](b)*x+m)},`}if(y in e)h.push(e[y]);else{for(let M=0,S=o.length;M<S;M++){let A=o[M],_=s.getAttribute(A),T=s.morphAttributes[A],P=_.itemSize,I=l[A],z=c[A];for(let F=0;F<P;F++){let L=d[F],B=u[F];if(I[B](a,_[L](b)),T)for(let Y=0,X=T.length;Y<X;Y++)z[Y][B](a,T[Y][L](b))}}e[y]=a,h.push(a),a++}}let g=s.clone();for(let v in s.attributes){let b=l[v];if(g.setAttribute(v,new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)),v in c)for(let y=0;y<c[v].length;y++){let M=c[v][y];g.morphAttributes[v][y]=new M.constructor(M.array.slice(0,a*M.itemSize),M.itemSize,M.normalized)}}return g.setIndex(h),g}function Mb(s){let t=s.clone();return t.deleteAttribute("uv"),Wp(t,1e-4)}function zr(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function Wu(s,t,e,i,n,r=6,a=7){let o=zr(n),l=new Ct(e,t,s,a,r,!0);l.translate(0,s/2,0);let c=l.attributes.position,h=(o()-.5)*i,d=(o()-.5)*i;for(let u=0;u<c.count;u++){let f=c.getY(u)/s;c.setX(u,c.getX(u)+h*f*f+Math.sin(f*7+n)*.04),c.setZ(u,c.getZ(u)+d*f*f);let p=1+Math.max(0,.18-f)*3;c.setX(u,c.getX(u)*p),c.setZ(u,c.getZ(u)*p)}return l.computeVertexNormals(),{g:l,top:new R(h,s,d)}}function Ss(s,t,e,i,n=.85,r=1){let a=zr(i),o=[];for(let l=0;l<e;l++){let c=new ri(t*1.25,t*1.25),h=a()*2-1,d=a()*Math.PI*2,u=Math.sqrt(1-h*h),f=new R(u*Math.cos(d),h*n,u*Math.sin(d)),p=f.clone().multiplyScalar(t*(.25+a()*.45));c.lookAt(f),c.rotateZ!==void 0&&c.rotateZ(a()*Math.PI),c.translate(s.x+p.x,s.y+p.y,s.z+p.z);let x=c.attributes.position,m=c.attributes.normal;for(let v=0;v<x.count;v++){let b=new R(x.getX(v)-s.x,(x.getY(v)-s.y)/n,x.getZ(v)-s.z).normalize();b.y+=.35,b.normalize(),m.setXYZ(v,b.x,b.y,b.z)}let g=new Float32Array(x.count*3);for(let v=0;v<x.count;v++){let b=(x.getY(v)-s.y)/t,y=Math.hypot(x.getX(v)-s.x,x.getZ(v)-s.z)/t,M=Math.min(1.15,(.55+.3*(b*.5+.5)+.25*Math.min(1,y))*r);g[v*3]=M,g[v*3+1]=M,g[v*3+2]=M}c.setAttribute("color",new he(g,3)),o.push(c)}return an(o)}function Vu(s){let t=zr(s),e=4.2+t()*1.5,i=Wu(e,.28,.15,.9,s),n=[],r=8+Math.floor(t()*3);for(let o=0;o<r;o++){let l=o/r*Math.PI*2+t(),c=1.3+t()*.7,h=e-.5+t()*1.8,d=new R(i.top.x+Math.cos(l)*c*.85,h,i.top.z+Math.sin(l)*c*.85);n.push(Ss(d,1.4+t()*.5,16,s*7+o,.85,.8+(h-e)*.12))}n.push(Ss(new R(i.top.x,e+1.5,i.top.z),1.8,22,s*13,.85,1.1)),n.push(Ss(new R(i.top.x,e+.4,i.top.z),1.6,12,s*17,.85,.7));let a=[];for(let o=0;o<3;o++){let l=new Ct(.05,.1,1.8,5,1,!0);l.translate(0,.9,0),l.rotateZ(.9),l.rotateY(o*2.1+t()),l.translate(i.top.x*.7,e*.72,i.top.z*.7),a.push(l)}return{trunk:an([i.g,...a]),leaves:an(n)}}function qp(s){let e=7+zr(s)()*3,i=Wu(e,.25,.08,.3,s),n=[],r=6;for(let a=0;a<r;a++){let o=e*.28+a/r*e*.75,l=(1-a/r)*2.1+.4;for(let c=0;c<5;c++){let h=c/5*Math.PI*2+a;n.push(Ss(new R(Math.cos(h)*l*.5,o,Math.sin(h)*l*.5),l*.62,6,s*11+a*7+c,.55))}}return n.push(Ss(new R(0,e+.2,0),.6,6,s*3)),{trunk:i.g,leaves:an(n)}}function wb(s){let t=zr(s),e=9,i=Wu(e,.9,.45,1.5,s,8,10),n=[];for(let r=0;r<12;r++){let a=r/12*Math.PI*2,o=3+t()*1.5;n.push(Ss(new R(i.top.x+Math.cos(a)*o,e+t()*2.5,i.top.z+Math.sin(a)*o),2.4+t(),20,s*5+r))}return n.push(Ss(new R(i.top.x,e+3.5,i.top.z),3,26,s*9)),{trunk:i.g,leaves:an(n)}}function Sb(s,t,e){return s.onBeforeCompile=i=>{i.uniforms.uTime=t.uTime,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
${rn}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 ip = instanceMatrix[3].xyz;
        #else
          vec3 ip = vec3(0.0);
        #endif
        float hy = max(position.y - 1.5, 0.0);
        float gust = lmNoise(ip.xz*0.035 - vec2(0.8,0.6)*uTime*0.55);
        float sw = (sin(uTime*1.6 + ip.x*0.3 + ip.z*0.2)*0.5 + gust) * ${e.toFixed(3)} * hy*hy*0.02;
        transformed.x += sw*0.8 + sin(uTime*3.0 + position.y*2.0 + ip.z)*0.012*hy;
        transformed.z += sw*0.6;`)},s}var Fc=class{constructor(t,e,i,n){this.uniforms={uTime:{value:0}};let r=new An({map:i.bark,normalMap:i.bark_n,roughness:.95,color:12100752}),a=[i.leaves_a,i.leaves_b,i.leaves_c].map((g,v)=>Sb(new An({map:g,alphaTest:.5,side:fe,roughness:.85,color:v===2?16777215:15269840,vertexColors:!0}),this.uniforms,v===1?.5:1)),o=[[Vu(1),Vu(2),Vu(3)],[qp(4),qp(5)],[wb(6)]],l=175,c=new Map,h=n==="low"?.55:n==="mid"?.8:1,d=0;for(let[g,v,b,y,M]of e.meta.trees){if(d++,d*.6180339%1>h)continue;let S=e.heightAt(g,v)-.15,A=d*7%o[b].length,_=`${Math.floor(g/l)},${Math.floor(v/l)},${b},${A}`;c.has(_)||c.set(_,{kind:b,v:A,list:[]}),c.get(_).list.push([g,S,v,y,M]),e.addCollider({x:g,z:v,r:(b===2?1.5:.55)*y,top:null})}let u=new de,f=new gi,p=new R,x=new R,m=new R(0,1,0);this.meshes=[];for(let{kind:g,v,list:b}of c.values()){let y=o[g][v],M=new ls(y.trunk,r,b.length),S=new ls(y.leaves,a[g],b.length);b.forEach(([A,_,T,P,I],z)=>{f.setFromAxisAngle(m,I);let F=P*(g===2?1.5:1.75);p.set(F,F*(.9+z%5*.05),F),x.set(A,_,T),u.compose(x,f,p),M.setMatrixAt(z,u),S.setMatrixAt(z,u)});for(let A of[M,S])A.castShadow=!0,A.receiveShadow=!0,A.computeBoundingSphere(),t.add(A),this.meshes.push(A)}this.buildRocks(t,e,i)}buildRocks(t,e,i){let n=new An({map:i.rock,normalMap:i.rock_n,roughness:.92,color:14209736});n.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLmW; varying vec3 vLmN;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          #ifdef USE_INSTANCING
          vLmW = (modelMatrix * instanceMatrix * vec4(position,1.0)).xyz; vLmN = normalize(mat3(modelMatrix * instanceMatrix) * normal);
          #endif`),d.fragmentShader=d.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLmW; varying vec3 vLmN;`).replace("#include <map_fragment>",`
          vec3 bw = pow(abs(vLmN), vec3(4.0)); bw /= bw.x+bw.y+bw.z;
          vec3 rc = texture2D(map, vLmW.zy/4.0).rgb*bw.x + texture2D(map, vLmW.xz/4.0).rgb*bw.y + texture2D(map, vLmW.xy/4.0).rgb*bw.z;
          rc = mix(rc, rc*vec3(0.7,0.95,0.55), smoothstep(0.55, 0.9, vLmN.y)*0.8); // \u4E0A\u9762\u306B\u82D4
          diffuseColor.rgb *= rc;`)};let r=[];for(let d=0;d<4;d++){let u=new en(1,3),f=u.attributes.position,p=zr(100+d),x=p()*10,m=p()*10,g=[];for(let y=0;y<9;y++){let M=p()*1.6-.6,S=p()*Math.PI*2,A=Math.sqrt(1-Math.min(1,M*M));g.push([A*Math.cos(S),M,A*Math.sin(S),.62+p()*.3])}let v=new R;for(let y=0;y<f.count;y++){v.set(f.getX(y),f.getY(y),f.getZ(y)),v.multiplyScalar(1+Math.sin(v.x*2.3+x)*Math.cos(v.z*2.1+m)*.1);for(let[M,S,A,_]of g){let T=v.x*M+v.y*S+v.z*A;T>_&&(v.x-=M*(T-_),v.y-=S*(T-_),v.z-=A*(T-_))}f.setXYZ(y,v.x*(1+d*.18),Math.max(v.y*.75,-.35),v.z)}u.deleteAttribute("normal");let b=Mb(u);b.computeVertexNormals(),u.copy(b),r.push({g:u,list:[]})}e.meta.rocks.forEach(([d,u,f,p],x)=>{r[x%4].list.push([d,e.heightAt(d,u)-f*.15,u,f,p]),e.addCollider({x:d,z:u,r:f*.95,top:e.heightAt(d,u)+f*.55})});let a=new de,o=new gi,l=new R,c=new R,h=new xi;for(let d of r){let u=new ls(d.g,n,d.list.length);d.list.forEach(([f,p,x,m,g],v)=>{h.set(v%3*.15,g,v%5*.08),o.setFromEuler(h),l.set(m,m,m*(.8+v%4*.1)),c.set(f,p,x),u.setMatrixAt(v,a.compose(c,o,l))}),u.castShadow=!0,u.receiveShadow=!0,u.computeBoundingSphere(),t.add(u),this.meshes.push(u)}}update(t){this.uniforms.uTime.value=t}};var Es=null;function Eb(){if(Es)return Es;let s=new Uint8Array([150,150,150,255,205,205,205,255,255,255,255,255,255,255,255,255]);return Es=new wn(s,4,1,bi),Es.minFilter=Es.magFilter=He,Es.needsUpdate=!0,Es}var Xu={uRimCol:{value:new ot(1,.97,.9)},uRimI:{value:.2},uLightDir:{value:new R(.3,.8,.2)},uHit:{value:0}};function ht(s={}){let t=new Ke({color:s.color??16777215,map:s.map||null,gradientMap:Eb()});s.emissive&&(t.emissive=new ot(s.emissive),t.emissiveIntensity=s.emissiveI??1);let e=new ot(s.shadowTint??(s.skin?16765128:12894440));return t.userData.uniforms={uShadowTint:{value:e},uDetail:{value:s.detail||null},uDetailScale:{value:s.detailScale??3},uHitFlash:{value:0}},t.onBeforeCompile=i=>{Object.assign(i.uniforms,Xu,t.userData.uniforms),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},t.customProgramCacheKey=()=>`toon${s.hair?"h":""}${s.detail?"d":""}${s.tri?"t"+s.tri:""}`,t}var qu=new Map;function Tb(s,t=.006){let e=s+":"+t;if(qu.has(e))return qu.get(e);let i=new ot(s),n={};i.getHSL(n),i.setHSL(n.h,Math.min(1,n.s*.9+.1),n.l*.28);let r=new Qt({color:i,side:Qe});return r.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      vec4 vp = modelViewMatrix * vec4(position, 1.0);
      float dist = clamp(-vp.z, 1.0, 12.0);
      transformed += normal * ${t.toFixed(4)} * (0.6 + dist * 0.12);`)},qu.set(e,r),r}function Ce(s,t,e){let i=new V(s.geometry,Tb(t,e));return i.castShadow=!1,i.receiveShadow=!1,i.userData.outline=!0,s.add(i),s}function Xp(s=.105){let t=new Ht(1,40,30);return Yp(t,s),t.computeVertexNormals(),Ab(t),t}function Yp(s,t,e=1){let i=s.attributes.position;for(let n=0;n<i.count;n++){let r=i.getX(n),a=i.getY(n),o=i.getZ(n);if(a<0){let l=Math.pow(-a,1.6);r*=1-.42*l,o*=1-.18*l,o+=.06*l*Math.max(0,o),a*=1.08}else a*=1.02,o*=.98;o<0&&(o*=1.06),i.setXYZ(n,r*t*.94*e,a*t*1.05*e,o*t*e)}}function Ab(s){let t=s.attributes.normal,e=s.attributes.position;for(let i=0;i<t.count;i++){let n=e.getZ(i),r=e.getY(i),a=ja.smoothstep(n/.105,.1,.8)*(r<.06?1:.5),o=t.getX(i)*(1-a*.75),l=t.getY(i)*(1-a*.5)+a*.25,c=t.getZ(i)*(1-a)+a,h=Math.hypot(o,l,c);t.setXYZ(i,o/h,l/h,c/h)}}function Yu(s=.105,t=!0){let e=new Ht(1.004,32,24,Math.PI/2-1.15,2.3,Math.PI*.26,Math.PI*.56);return t?Yp(e,s):e.scale(s,s,s),e.computeVertexNormals(),e}function on(s,t,e,i={}){let n=new vr(s.map(u=>new R(...u))),r=i.segs||12,a=i.radial||6,o=[],l=[],c=i.tip??.04,h=new R(...i.center||[0,0,0]);for(let u=0;u<=r;u++){let f=u/r,p=n.getPointAt(f),x=n.getTangentAt(f),m=p.clone().sub(h);m.lengthSq()<1e-8&&m.set(0,1,0),m.normalize();let g=new R().crossVectors(x,m);g.lengthSq()<1e-8&&g.set(1,0,0),g.normalize();let v=new R().crossVectors(g,x).normalize(),b=Math.pow(1-f,i.taperPow||.85)*(1-c)+c,y=t*b*(i.bulge?1+Math.sin(f*Math.PI)*i.bulge:1),M=e*b;for(let S=0;S<a;S++){let A=S/a*Math.PI*2,_=new R().addScaledVector(g,Math.cos(A)*y).addScaledVector(v,Math.sin(A)*M);o.push(p.x+_.x,p.y+_.y,p.z+_.z)}}for(let u=0;u<r;u++)for(let f=0;f<a;f++){let p=u*a+f,x=u*a+(f+1)%a,m=p+a,g=x+a;l.push(p,m,x,x,m,g)}let d=new te;return d.setAttribute("position",new Lt(o,3)),d.setIndex(l),d.computeVertexNormals(),d}function ui(s,t=24,e=1,i=1,n=0,r=Math.PI*2){s[0][1]>s[s.length-1][1]&&(s=s.slice().reverse());let a=new Sa(s.map(([o,l])=>new tt(o,l)),t,n,r);return a.scale(e,1,i),a.computeVertexNormals(),a}function Nr(s,t,e,i=10){let n=[];for(let o=0;o<=8;o++){let l=o/8*Math.PI/2;n.push([Math.sin(l)*t,-t+Math.cos(l)*t*-1+t*2-t])}let a=[[1e-4,t*.6],[t*.75,t*.35],[t,0],[(t+e)/2*1.04,-s*.5],[e,-s],[e*.7,-s-e*.5],[1e-4,-s-e*.8]];return ui(a,i)}function $p(s=1){let t=new Ht(.032,10,8);t.scale(.9*s,1.35*s,.55*s),t.translate(0,-.04*s,0);let e=new hs(.009*s,.03*s,4,6);e.rotateZ(.6),e.translate(.026*s,-.035*s,.012*s);let i=new Ht(.028,10,8);return i.scale(.85*s,.9*s,.5*s),i.translate(0,-.085*s,.004),Zp([t,e,i])}function jp(s=1){let t=new Ht(.06,14,10,0,Math.PI*2,0,Math.PI*.6);t.scale(.75*s,.9*s,1.55*s),t.translate(0,-.035,.045);let e=new Ct(.045*s,.045*s,.02,12);return e.scale(1,1,2),e.translate(0,-.035,.045),Zp([t,e])}function Zp(s){let t=0,e=0;for(let c of s)t+=c.attributes.position.count,e+=c.index?c.index.count:c.attributes.position.count;let i=new Float32Array(t*3),n=new Float32Array(t*3),r=new Float32Array(t*2),a=[],o=0;for(let c of s){let h=c.attributes.position,d=c.attributes.normal,u=c.attributes.uv;if(i.set(h.array,o*3),d&&n.set(d.array,o*3),u&&r.set(u.array.subarray(0,h.count*2),o*2),c.index)for(let f=0;f<c.index.count;f++)a.push(c.index.getX(f)+o);else for(let f=0;f<h.count;f++)a.push(f+o);o+=h.count}let l=new te;return l.setAttribute("position",new he(i,3)),l.setAttribute("normal",new he(n,3)),l.setAttribute("uv",new he(r,2)),l.setIndex(a),l}var be=512,di=512,$u=new Map;function ju(s,t){let e=JSON.stringify(s)+"|"+(t&&t.src);if($u.has(e))return $u.get(e);let i={};$u.set(e,i);for(let n of["open","closed","happy","angry","hurt"]){let r=document.createElement("canvas");r.width=be,r.height=di,Rb(r.getContext("2d"),s,t,n);let a=new cs(r);a.colorSpace=Ue,a.anisotropy=4,i[n]=a}return i}function Rb(s,t,e,i){s.clearRect(0,0,be,di);let n=t.eyeSize??.26,r=t.eyeSpread??.11+n*.27,a=t.eyeY??.5,o=t.brow||"#3a2a2a",l=t.lash||"#2b1d26";for(let h of[-1,1]){let d=(.5+h*(r+.02))*be,u=(a+.13)*di,f=s.createRadialGradient(d,u,2,d,u,be*.07);f.addColorStop(0,"rgba(255,120,130,0.30)"),f.addColorStop(1,"rgba(255,120,130,0)"),s.fillStyle=f,s.beginPath(),s.ellipse(d,u,be*.08,di*.04,0,0,Math.PI*2),s.fill()}for(let h of[-1,1]){let d=(.5+h*r)*be,u=a*di,f=n*be,p=n*be*1.35;s.save(),s.translate(d,u),h<0&&s.scale(-1,1),i==="open"||i==="angry"||i==="hurt"?(i==="angry"&&(s.beginPath(),s.rect(-f,-p*.22,f*2,p),s.clip()),s.drawImage(e,-f/2,-p/2,f,p)):i==="closed"?(s.strokeStyle=l,s.lineWidth=be*.012,s.lineCap="round",s.beginPath(),s.moveTo(-f*.36,-p*.02),s.quadraticCurveTo(0,p*.12,f*.4,-p*.06),s.stroke()):i==="happy"&&(s.strokeStyle=l,s.lineWidth=be*.013,s.lineCap="round",s.beginPath(),s.moveTo(-f*.34,p*.06),s.quadraticCurveTo(0,-p*.2,f*.36,p*.04),s.stroke()),s.restore()}s.strokeStyle=o,s.lineCap="round",s.lineWidth=be*.014;for(let h of[-1,1]){let d=(.5+h*r)*be,u=(a-n*.62-(i==="happy"?.01:0))*di,f=i==="angry"?.05:i==="hurt"?-.035:t.browTilt??0;s.beginPath(),s.moveTo(d-h*be*.05,u+f*di),s.quadraticCurveTo(d+h*be*.01,u-di*.018,d+h*be*.065,u-f*di*.4+di*.004),s.stroke()}s.fillStyle="rgba(200,120,110,0.35)",s.beginPath(),s.ellipse(be*.505,(a+.155)*di,be*.008,di*.006,0,0,Math.PI*2),s.fill();let c=(a+.265)*di;s.lineCap="round",i==="happy"?(s.fillStyle="#8a3040",s.beginPath(),s.moveTo(be*.465,c-2),s.quadraticCurveTo(be*.5,c+di*.035,be*.535,c-2),s.closePath(),s.fill(),s.fillStyle="#ff9aa6",s.beginPath(),s.ellipse(be*.5,c+di*.014,be*.016,di*.007,0,0,Math.PI*2),s.fill()):i==="hurt"||i==="angry"?(s.strokeStyle="#7a3a3a",s.lineWidth=be*.007,s.beginPath(),s.moveTo(be*.475,c+3),s.quadraticCurveTo(be*.5,c-4,be*.525,c+3),s.stroke()):(s.strokeStyle="#9a4a4a",s.lineWidth=be*.006,s.beginPath(),s.moveTo(be*.482,c),s.quadraticCurveTo(be*.5,c+3,be*.518,c-1),s.stroke())}var Jp={wind:8384728,fire:16742970,water:5945599,thunder:12946175,ice:11070207};function Ri(s,t,e,i,n,r){let a=new V(s,t);return i&&a.position.set(...i),n&&a.rotation.set(...n),a.castShadow=!0,r!==!1&&Ce(a,r??t.color.getHex(),.004),e.add(a),a}function Zu(s,t,e){let i=new En;i.moveTo(-t/2,0),i.lineTo(-t/2,s*.86),i.lineTo(0,s),i.lineTo(t/2,s*.86),i.lineTo(t/2,0),i.lineTo(-t/2,0);let n=new wa(i,{depth:e,bevelEnabled:!0,bevelThickness:e*.4,bevelSize:t*.18,bevelSegments:1});return n.translate(0,0,-e/2),n}function Kp(s,t){let e=new jt,i=ht({color:14674162,shadowTint:10135760}),n=ht({color:15778906}),r=ht({color:3811878}),a=ht({color:Jp[t]||16777215,emissive:Jp[t]||16777215,emissiveI:.8}),o=null;if(e.position.set(0,-.07,.01),s==="sword")e.rotation.set(Math.PI/2,0,0),Ri(new Ct(.014,.016,.13,8),r,e,[0,0,0]),Ri(new De(.16,.022,.03),n,e,[0,.07,0]),Ri(new Xe(.02),a,e,[0,.07,.02],null,2120272),Ri(Zu(.78,.05,.008),i,e,[0,.08,0],null,6978192),Ri(new Ht(.02,8,6),n,e,[0,-.075,0]);else if(s==="claymore")e.rotation.set(Math.PI/2,0,0),Ri(new Ct(.018,.02,.26,8),r,e,[0,0,0]),Ri(new De(.3,.04,.05),ht({color:3811886}),e,[0,.14,0]),Ri(new Xe(.035),a,e,[0,.14,.03],null,6953482),Ri(Zu(1.15,.13,.016),ht({color:13617352,shadowTint:10522768}),e,[0,.16,0],null,5917258),Ri(Zu(.9,.03,.02),ht({color:16747082,emissive:16730640,emissiveI:.5}),e,[0,.2,0],null,!1);else if(s==="bow"){e.position.set(0,-.08,.02),e.rotation.set(0,0,0);let l=new fs(new R(0,-.55,0),new R(0,0,.22),new R(0,.55,0));Ri(new Ta(l,20,.014,6),ht({color:3811914}),e,[0,0,-.05]);for(let h of[-1,1])Ri(new Se(.02,.12,6),n,e,[0,h*.6,-.05+0],[h>0?0:Math.PI,0,0]);Ri(new Xe(.03),a,e,[0,0,.17],null,3807850);let c=new V(new Ct(.002,.002,1.1,4),new Qt({color:15790335}));c.position.set(0,0,-.05),e.add(c)}else if(s==="catalyst"){o=new jt;let l=new V(new Ht(.09,20,16),new Ke({color:9099519,emissive:2785535,emissiveIntensity:.6,transparent:!0,opacity:.85}));o.add(l);let c=new V(new Ae(.13,.008,6,32),n);c.rotation.x=Math.PI/2,o.add(c);let h=new V(new Ae(.15,.005,6,32),n);h.rotation.y=Math.PI/2,o.add(h),o.userData={orb:l,ring:c,ring2:h}}return{type:s,held:e,float:o}}var Uc=.118,Bc=.112,Ve=(s,t,e=0,i=0,n=0)=>{let r=new qe;return r.name=s,r.position.set(e,i,n),t.add(r),r},Ku=class{constructor(t={}){let e=t.female?1:0,i=t.scale||1;this.root=new jt,this.body=Ve("body",this.root),this.body.scale.setScalar(i);let n=this.j={};n.hips=Ve("hips",this.body,0,.86,0),n.spine=Ve("spine",n.hips,0,.09,0),n.chest=Ve("chest",n.spine,0,.15,0),n.neck=Ve("neck",n.chest,0,.175,0),n.head=Ve("head",n.neck,0,.05,0);let r=e?.118:.13;n.shL=Ve("shL",n.chest,r,.135,0),n.shR=Ve("shR",n.chest,-r,.135,0),n.armL=Ve("armL",n.shL),n.armR=Ve("armR",n.shR),n.foreL=Ve("foreL",n.armL,0,-.26,0),n.foreR=Ve("foreR",n.armR,0,-.26,0),n.handL=Ve("handL",n.foreL,0,-.235,0),n.handR=Ve("handR",n.foreR,0,-.235,0);let a=e?.082:.075;n.thighL=Ve("thighL",n.hips,a,-.03,0),n.thighR=Ve("thighR",n.hips,-a,-.03,0),n.shinL=Ve("shinL",n.thighL,0,-.4,0),n.shinR=Ve("shinR",n.thighR,0,-.4,0),n.footL=Ve("footL",n.shinL,0,-.39,0),n.footR=Ve("footR",n.shinR,0,-.39,0),n.skirt=Ve("skirt",n.hips,0,0,0),n.cape=Ve("cape",n.chest,0,.16,-.1),this.female=!!t.female,this.mats=[],this.faceSets=null}add(t,e,i,n,r,a,o){let l=new V(e,i);return r&&l.position.set(...r),a&&l.rotation.set(...a),o&&l.scale.set(...o),l.castShadow=!0,l.receiveShadow=!1,n!==!1&&Ce(l,n??i.color.getHex(),.0055),(typeof t=="string"?this.j[t]:t).add(l),this.mats.includes(i)||this.mats.push(i),l}},Ju=new Map;function Cb(s){return Ju.has(s)||Ju.set(s,ht({color:s,hair:!0,shadowTint:12628200})),Ju.get(s)}function Pb(s,t,e){let i=ht({color:t.skin||16771550,skin:!0,emissive:t.skin||16771550,emissiveI:.07}),n=s.female;s.skinMat=i;let r=s.add("head",Xp(Uc),i,14196880,[0,Bc,0]);s.headMesh=r,s.faceSets=ju(t.face||{},e[t.eye||"eye_npc"].image);let a=new Qt({map:s.faceSets.open,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});s.faceMat=a;let o=new V(Yu(Uc),a);o.position.set(0,Bc,0),o.renderOrder=3,s.j.head.add(o);for(let x of[-1,1])s.add("head",new Ht(.024,8,6),i,14196880,[x*Uc*.9,Bc-.005,-.005],null,[.5,1,.8]);s.add("neck",Nr(.075,.036,.04),i,!1,[0,.075,0]);for(let x of["L","R"])s.add("hand"+x,$p(n?.9:1),t.gloves?ht({color:t.gloves}):i,t.gloves?void 0:14196880,[0,.02,0]);let l=t.sleeve?ht({color:t.sleeve,detail:e.cloth_detail}):i,c=n?.88:1;for(let x of["L","R"])s.add("arm"+x,Nr(.25,.042*c,.034*c),l,t.sleeve?void 0:14196880),s.add("fore"+x,Nr(.225,.034*c,.026*c),t.foreSleeve?ht({color:t.foreSleeve,detail:e.cloth_detail}):t.gloves&&t.longGloves?ht({color:t.gloves}):i,13144192);let h=ht({color:t.legs||2764613,detail:e.cloth_detail,detailScale:2}),d=n?.93:1;for(let x of["L","R"]){s.add("thigh"+x,Nr(.39,.072*d,.05*d),h),s.add("shin"+x,Nr(.38,.05*d,.034*d),t.boots&&t.tallBoots?ht({color:t.boots,detail:e.leather_detail}):h);let m=ht({color:t.boots||5913128,detail:e.leather_detail});s.add("foot"+x,jp(n?.92:1),m),s.add("shin"+x,ui([[.04*d,-.36],[.05*d,-.3],[.056*d,-.27]],14,1,1),m)}let u=t.topProfile||(n?[[.105,-.02],[.098,.05],[.115,.13],[.135,.2],[.135,.27],[.118,.305],[.075,.33],[.04,.335]]:[[.112,-.02],[.108,.05],[.122,.14],[.14,.22],[.142,.28],[.125,.315],[.08,.335],[.042,.34]]),f=ht({color:t.top||15921128,detail:e.cloth_detail,map:t.topMap?e[t.topMap]:null});if(s.add("spine",ui(u,26,1,.74),f,void 0,[0,-.02,0]),n)for(let x of[-1,1])s.add("chest",new Ht(.055,12,10),f,void 0,[x*.052,.035,.055],null,[1,.85,.75]);let p=[[.07,-.13],[.11,-.1],[n?.128:.12,-.04],[.118,.02],[.11,.09]];s.add("hips",ui(p,24,1,.78),ht({color:t.shorts||t.legs||2764613,detail:e.cloth_detail}))}function Ib(s=1.1,t=.42,e=.62){let i=new Ht(1,36,24,0,Math.PI*2,0,Math.PI*e),n=i.attributes.position;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r),l=n.getZ(r),c=Math.acos(Math.max(-1,Math.min(1,o))),h=Math.max(0,l),d=Math.PI*(e-(e-t)*Math.pow(h,.7));if(c>d){let u=Math.sin(d),f=Math.hypot(a,l)||1;a=a/f*u,l=l/f*u,o=Math.cos(d)}n.setXYZ(r,a,o,l)}return i.scale(.104*s*.95,.104*s*1.06,.104*s*1.04),i.computeVertexNormals(),i}function Lb(s,t,e){let i=Cb(e),n=s.j.head,r=Bc,a=Uc/.104,o=h=>s.add(n,h,i,e,[0,r,0],null,[a,a,a]);o(Ib(1.13,t.capFront??.38,t.capBack??.7));let l=(t.bangs??7)+2;for(let h=0;h<l;h++){let d=h/(l-1)*2-1,u=d*(t.bangSpread??.95),f=(t.bangLen??.1)*(1-Math.abs(d)*.25)*(.9+h*37%10/50),p=Math.sin(u),x=Math.cos(u),m=.112,g=.118,v=f*.72,b=[[p*m*.3,.11,x*m*.35],[p*g*.8,.075,x*g*.88],[p*g*1+d*.008,.045-v*.45,x*g*1.02],[p*g*.98+d*(t.bangCurl??.02),.045-v,x*g*.98]];o(on(b,(t.bangW??.026)*1.45,.011,{segs:10,bulge:.25}))}for(let h of[-1,1])for(let d=0;d<(t.sideN??2);d++){let u=(t.sideLen??.17)*(1-d*.2),f=.05-d*.045,p=[[h*.095,.06,f],[h*.112,0,f+.01],[h*.112,-u*.6,f+.015],[h*(.1+(t.sideFlare??0)),-u,f+.02]];o(on(p,(t.sideW??.024)*1.4,.013,{segs:12,bulge:.2}))}let c=(t.backN??9)+3;for(let h=0;h<c;h++){let d=h/(c-1)*2-1,u=Math.PI+d*1.25,f=(t.backLen??.2)*(1-Math.abs(d)*.25),p=Math.sin(u),x=Math.cos(u),m=t.backFlare??.03,g=[[p*.08,.08,x*.08],[p*.11,0,x*.115],[p*(.11+m*.5),-f*.5,x*(.115+m*.5)],[p*(.1+m),-f,x*(.1+m)+(t.backCurl??0)]];o(on(g,(t.backW??.035)*1.35,.016,{segs:12,taperPow:t.backTaper??.9,bulge:.2}))}for(let h=0;h<(t.spikes??0);h++){let d=h*2.1+.4,u=[[Math.sin(d)*.05,.1,Math.cos(d)*.05-.02],[Math.sin(d)*.09,.13,Math.cos(d)*.08-.03],[Math.sin(d)*.13,.12,Math.cos(d)*.1-.06]];o(on(u,.022,.01,{segs:8}))}if(t.ahoge&&o(on([[0,.112,.02],[0,.15,.03],[.02,.17,0],[.035,.155,-.02]],.01,.004,{segs:10})),t.ponytail){let h=t.ponytail,d=[[0,.09,-.1],[0,.07,-.16],[0,-.05,-.19],[0,-.2,-.16],[0,-h.len,-.13]];o(on(d,.05,.03,{segs:16,radial:8,bulge:.5,taperPow:1.1}));for(let u of[-1,1])o(on(d.map(([f,p,x],m)=>[f+u*.012*m/4,p,x+.008]),.036,.022,{segs:14,bulge:.3}));s.add(n,new Ae(.028,.01,6,12),ht({color:h.tie||16765530}),void 0,[0,r+.085,-.13],[.6,0,0])}if(t.longBack)for(let h=0;h<8;h++){let d=h/7*2-1,u=Math.PI+d*1,f=Math.sin(u),p=Math.cos(u),x=t.longBack*(1-Math.abs(d)*.15),m=[[f*.09,.02,p*.1],[f*.12,-.08,p*.13],[f*.13,-x*.5,p*.14],[f*.12,-x,p*.12-.02]];o(on(m,.045,.012,{segs:16,taperPow:.6}))}}var Db={sora:{name:"\u30BD\u30E9",element:"wind",weapon:"sword",eye:"eye_sora",skin:16772836,face:{brow:"#b89a6a",eyeSize:.3},hair:15984840,hairStyle:{bangs:7,bangLen:.105,sideN:2,sideLen:.16,backN:9,backLen:.16,backFlare:.05,spikes:3,ahoge:!0,capBack:.62},top:15986918,legs:2896208,boots:6965810,gloves:2896208,sleeve:15986918,foreSleeve:3116938},akane:{name:"\u30A2\u30AB\u30CD",element:"fire",weapon:"claymore",eye:"eye_akane",skin:16772064,female:!0,face:{brow:"#8a2a1a",eyeSize:.3,browTilt:.012},hair:14169642,hairStyle:{bangs:6,bangLen:.08,bangSpread:1,sideN:1,sideLen:.2,backN:5,backLen:.1,ponytail:{len:.55,tie:16760896},capBack:.6},top:10362658,legs:1972256,boots:2300446,tallBoots:!0,gloves:2759708,longGloves:!0,shorts:2759972},mizuha:{name:"\u30DF\u30BA\u30CF",element:"water",weapon:"catalyst",eye:"eye_mizuha",skin:16774124,female:!0,face:{brow:"#5a7aa8",eyeSize:.31},hair:10147570,hairStyle:{bangs:9,bangLen:.082,bangW:.022,sideN:2,sideLen:.36,sideW:.03,backN:7,backLen:.18,longBack:.62,capBack:.64},top:16185082,legs:15921910,boots:3104688,sleeve:16185082,foreSleeve:16185082},raika:{name:"\u30E9\u30A4\u30AB",element:"thunder",weapon:"bow",eye:"eye_raika",skin:16640992,face:{brow:"#2a2034",eyeSize:.29,browTilt:.01},hair:4076120,hairStyle:{bangs:6,bangLen:.085,bangCurl:.04,sideN:1,sideLen:.12,backN:7,backLen:.1,backFlare:.06,backCurl:-.03,spikes:5,capBack:.6},top:3944282,legs:2499118,boots:3811874,tallBoots:!0,gloves:3811874,sleeve:3944282,foreSleeve:3944282,shorts:3024440}};function Rn(s,t,e){let i={...Db[s]||{},...e||{}},n=new Ku({female:i.female,scale:i.scale||(i.female?.965:1)});return n.spec=i,n.id=s,Pb(n,i,t),Lb(n,i.hairStyle||{},i.hair||4861984),(Qp[s]||Qp.villager)(n,i,t),i.weapon&&(n.weapon=Kp(i.weapon,i.element),n.j.handR.add(n.weapon.held),n.weapon.held.visible=!1,i.weapon==="catalyst"&&n.root.add(n.weapon.float)),n.root.traverse(a=>{a.isMesh&&!a.userData.outline&&(a.castShadow=!0)}),n}var Qp={sora(s,t,e){let i=ht({color:3116938,detail:e.cloth_detail}),n=ht({color:15778906}),r=ht({color:2896208,detail:e.cloth_detail});s.add("spine",ui([[.118,0],[.115,.06],[.128,.14],[.145,.22],[.137,.28],[.1,.32]],24,1,.76,-Math.PI*.82,Math.PI*1.64),i,void 0,[0,-.02,0],[0,Math.PI,0]);for(let[a,o]of[[Math.PI*.5,Math.PI*.46],[Math.PI*1.04,Math.PI*.46]])s.add("skirt",ui([[.122,.08],[.136,0],[.18,-.2],[.23,-.42]],12,1,.85,a,o),i);s.add("hips",new De(.06,.07,.04),ht({color:6965808,detail:e.leather_detail}),void 0,[-.1,.03,.06],[0,.5,0]),s.add("hips",new Ae(.122,.014,6,24),ht({color:5913126}),void 0,[0,.07,0],[Math.PI/2,0,0],[1,.78,1]),s.add("hips",new De(.05,.04,.02),n,void 0,[0,.07,.1]),s.add("chest",new Ae(.075,.025,8,20),i,void 0,[0,.165,0],[Math.PI/2-.25,0,0],[1,.9,1]),s.add("shL",new Ht(.06,12,8,0,Math.PI*2,0,Math.PI/2),n,void 0,[.01,0,0],[0,0,-.3],[1,.7,1.1]),s.capeMesh=s.add("cape",t0(.36,.72),ht({color:3842970,detail:e.cloth_detail}),void 0),s.capeMesh.material.side=fe,s.add("chest",new Xe(.018),ht({color:10481888,emissive:3850400,emissiveI:.6}),1727056,[0,.12,.1]),s.add("chest",new De(.05,.012,.01),n,void 0,[0,.12,.095])},akane(s,t,e){let i=ht({color:11543592,detail:e.cloth_detail}),n=ht({color:2365984,detail:e.leather_detail}),r=ht({color:15249994});s.add("spine",ui([[.106,-.02],[.1,.06],[.112,.13]],22,1,.76),n),s.add("hips",ui([[.12,.06],[.14,0],[.19,-.14],[.22,-.22]],22,1,.9,Math.PI*.12,Math.PI*1.76),i,void 0,null,[0,Math.PI,0]),s.add("hips",new Ae(.124,.012,6,24),r,void 0,[0,.055,0],[Math.PI/2,0,0],[1,.8,1]),s.add("shR",new Ht(.07,12,8,0,Math.PI*2,0,Math.PI/2),ht({color:3811886}),void 0,[-.01,0,0],[0,0,.35],[1,.75,1.15]),s.add("shR",new Ae(.06,.008,6,16),r,void 0,[-.02,.005,0],[Math.PI/2,.35,0]),s.add("chest",new Ae(.07,.02,8,18),n,void 0,[0,.16,0],[Math.PI/2-.2,0,0]),s.add("chest",new Xe(.017),ht({color:16756848,emissive:16732192,emissiveI:.7}),6953482,[0,.09,.105]),s.capeMesh=s.add("skirt",t0(.22,.42,.05),n,void 0,[0,.05,-.11]),s.capeMesh.material.side=fe},mizuha(s,t,e){let i=ht({color:16316668,detail:e.cloth_detail}),n=ht({color:3105464,detail:e.cloth_detail}),r=ht({color:15913594});s.add("hips",ui([[.12,.08],[.14,0],[.2,-.3],[.27,-.62],[.29,-.78]],28,1,.92),n),s.add("hips",ui([[.285,-.74],[.295,-.78],[.3,-.8]],28,1,.92),i),s.add("hips",new Ae(.126,.02,6,24),i,void 0,[0,.07,0],[Math.PI/2,0,0],[1,.82,1]);for(let a of["L","R"])s.add("arm"+a,ui([[.05,.02],[.065,-.1],[.085,-.24],[.095,-.3]],18,1,.8),i,void 0,[0,0,0]);for(let a of["L","R"])s.add("arm"+a,new Ae(.094,.008,6,18),n,void 0,[0,-.3,0],[Math.PI/2,0,0],[1,.8,1]);s.add("chest",new Ht(.022,10,8),n,void 0,[0,.11,.1],null,[1.6,.7,.5]),s.add("chest",new Ae(.07,.016,8,18),n,void 0,[0,.165,0],[Math.PI/2-.25,0,0]),s.add("head",new Ht(.018,10,8),ht({color:16777215,emissive:8438015,emissiveI:.4}),4876954,[.09,.2,0]),s.add("head",new Ae(.03,.006,6,12),r,void 0,[.09,.2,0],[0,1.2,0])},raika(s,t,e){let i=ht({color:3944282,detail:e.cloth_detail}),n=ht({color:4863014,detail:e.leather_detail}),r=ht({color:12159728,emissive:8012e3,emissiveI:.6});s.add("spine",ui([[.12,0],[.118,.06],[.13,.14],[.146,.22],[.14,.28],[.1,.32]],24,1,.78,-Math.PI*.8,Math.PI*1.6),i,void 0,[0,-.02,0],[0,Math.PI,0]),s.add("hips",ui([[.12,.08],[.135,0],[.17,-.14],[.19,-.26]],20,1,.86,Math.PI*.3,Math.PI*1.4),i,void 0,null,[0,Math.PI,0]),s.add("chest",new Ht(.1,16,10,0,Math.PI*2,0,Math.PI*.55),i,void 0,[0,.18,-.08],[-1.9,0,0],[1,.7,1]),s.add("hips",new Ae(.124,.014,6,24),n,void 0,[0,.06,0],[Math.PI/2,0,0],[1,.8,1]),s.add("chest",new Ct(.04,.035,.42,10),n,void 0,[.06,.02,-.13],[.15,0,-.5]);for(let a=0;a<4;a++)s.add("chest",new Se(.012,.05,4),ht({color:15261904}),void 0,[.13+a*.012,.23+a*.005,-.16],[.15,0,-.5]);s.add("chest",new Xe(.017),r,3807850,[0,.1,.105])},villager(s,t,e){let i=ht({color:t.apron||9071178,detail:e.cloth_detail});s.female?s.add("hips",ui([[.12,.06],[.14,0],[.22,-.4],[.26,-.62]],22,1,.92),i):s.add("hips",ui([[.12,.06],[.135,0],[.16,-.14]],20,1,.86),i)}};function t0(s,t,e=.08){let i=new ri(s,t,6,10),n=i.attributes.position;for(let r=0;r<n.count;r++){let a=n.getX(r),o=n.getY(r)-t/2,l=-Math.abs(a)*.35*(1-a*a/(s*s));n.setXYZ(r,a*(1+-o/t*.35),o,l-e*Math.pow(-o/t,2))}return i.rotateY(Math.PI),i.computeVertexNormals(),i}function Oc(s){let t=new jt,e=ht({color:16775408,shadowTint:13156592}),i=ht({color:9097471,emissive:4227327,emissiveI:.4}),n=new V(new Ht(.11,18,14),e);n.scale.set(1,.9,1.1),n.position.y=-.05,Ce(n,9079464),t.add(n);let r=new V(new Ht(.13,22,16),e);r.position.y=.12,r.scale.set(1.1,1,1),Ce(r,9079464),t.add(r);let a=ju({brow:"#9a9ac8",eyeSize:.3,eyeSpread:.17,eyeY:.52},s.eye_popo.image),o=new V(Yu(.1305,!1),new Qt({map:a.open,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));o.scale.set(1.1,1,1),o.position.set(0,.12,0),t.add(o);for(let h of[-1,1]){let d=new V(new Se(.05,.13,10),e);d.position.set(h*.08,.25,0),d.rotation.z=-h*.35,Ce(d,9079464),t.add(d);let u=new V(new Se(.028,.08,8),i);u.position.set(h*.08,.24,.02),u.rotation.z=-h*.35,t.add(u)}let l=new V(on([[0,-.05,-.1],[0,0,-.22],[0,.12,-.28],[0,.22,-.24]],.07,.06,{segs:12,radial:8,bulge:.6,tip:.2}),e);Ce(l,9079464),t.add(l);let c=new V(new Xe(.035),i);return c.position.set(0,.3,0),t.add(c),t.userData={faceSets:a,face:o,tail:l,star:c},t}var Qu=["hips","spine","chest","neck","head","armL","armR","foreL","foreR","handL","handR","thighL","thighR","shinL","shinR","footL","footR","skirt","cape"],fi=(s,t,e)=>s+(t-s)*e,io=s=>s<0?0:s>1?1:s*s*(3-2*s),e0=[{a:{armR:[-1.2,.3,-1.4],foreR:[-.9,0,0],tw:.7},b:{armR:[-1.45,-.2,.7],foreR:[-.2,0,0],tw:-.6}},{a:{armR:[-1.6,0,.6],foreR:[-.4,0,0],tw:-.6},b:{armR:[-1.2,.2,-1.2],foreR:[-.3,0,0],tw:.7}},{a:{armR:[-2.7,0,-.3],foreR:[-1,0,0],tw:.2},b:{armR:[-.6,0,.2],foreR:[-.2,0,0],tw:-.1,lean:.35}},{a:{armR:[-1.3,.3,-1.5],foreR:[-.6,0,0],tw:1},b:{armR:[-1.4,0,1],foreR:[-.1,0,0],tw:-1.1}},{a:{armR:[-.6,0,-.9],foreR:[-.5,0,0],tw:.5,crouch:.15},b:{armR:[-2.6,0,.2],foreR:[-.1,0,0],tw:-.3,lean:-.2}}],zb=[{a:{armR:[-2.4,0,-.5],armL:[-2.2,0,.6],foreR:[-.8,0,0],tw:.5},b:{armR:[-.7,0,.3],armL:[-.9,0,.2],foreR:[-.2,0,0],tw:-.3,lean:.4}},{a:{armR:[-1.3,.3,-1.5],armL:[-1.2,0,-.2],foreR:[-.4,0,0],tw:1.1},b:{armR:[-1.3,0,.9],armL:[-1.3,0,.9],foreR:[-.1,0,0],tw:-1.2}},{a:{armR:[-1.4,0,.8],armL:[-1.4,0,.8],foreR:[-.3,0,0],tw:-1},b:{armR:[-1.3,.2,-1.3],armL:[-1.2,0,-.2],foreR:[-.3,0,0],tw:1.1}},{a:{armR:[-2.9,0,-.2],armL:[-2.8,0,.3],foreR:[-.6,0,0],tw:.1,crouch:-.05},b:{armR:[-.5,0,.2],armL:[-.6,0,.2],foreR:[-.1,0,0],tw:0,lean:.55,crouch:.2}}],Nb=[{a:{armR:[-.8,0,-.6],foreR:[-.9,0,0],tw:.3},b:{armR:[-1.5,0,.1],foreR:[-.1,0,0],tw:-.2}},{a:{armL:[-.8,0,.6],foreL:[-.9,0,0],tw:-.3},b:{armL:[-1.5,0,-.1],foreL:[-.1,0,0],tw:.25}},{a:{armR:[-.4,0,-.5],armL:[-.4,0,.5],foreR:[-1.2,0,0],tw:0},b:{armR:[-1.6,0,-.1],armL:[-1.6,0,.1],foreR:[-.1,0,0],tw:0,lean:.1}}],kb=[{a:{armL:[-1.5,0,0],armR:[-1.4,0,-.3],foreR:[-2,0,0],tw:.9},b:{armL:[-1.55,0,0],armR:[-1.4,0,-.5],foreR:[-2.4,0,0],tw:.9}}],Fb={sword:e0,claymore:zb,catalyst:Nb,bow:kb},ln=class{constructor(t){this.rig=t,this.cur={},this.tgt={};for(let e of Qu)this.cur[e]=[0,0,0],this.tgt[e]=[0,0,0];this.phase=0,this.t=0,this.hipsY=0,this.hipsYT=0,this.bodyPitch=0,this.bodyPitchT=0,this.bodyRoll=0,this.bodyRollT=0,this.blink=2+Math.random()*3,this.faceMode="open",this.faceHold=0,this.capeSwing=0}set(t,e,i,n){let r=this.tgt[t];r[0]=e,r[1]=i,r[2]=n}update(t,e){this.t+=t;let i=this.t,n=e.speed||0;for(let f of Qu)this.set(f,0,0,0);let r=12;this.hipsYT=0,this.bodyPitchT=0,this.bodyRollT=0;let a=this.rig.female?1:0,o=Math.sin(i*2.2)*.025;switch(this.set("armL",.05,0,.13+o*.5),this.set("armR",.05,0,-.13-o*.5),this.set("foreL",-.15,0,0),this.set("foreR",-.15,0,0),this.set("chest",o,0,0),this.set("head",-o*.5,0,0),a&&(this.set("thighL",0,0,-.03),this.set("thighR",.05,-.15,.04),this.set("shinR",.12,0,0)),e.mode){case"ground":{if(n>.2){let f=Math.min(1,Math.max(0,(n-2.2)/3.4)),p=Math.min(1,Math.max(0,(n-6.5)/2.5));this.phase+=t*n*fi(1.6,1.15,f)*1;let x=this.phase*Math.PI,m=fi(.45,.85,f)+p*.2,g=Math.sin(x),v=Math.cos(x);this.set("thighL",-g*m-f*.1,0,0),this.set("thighR",g*m-f*.1,0,0),this.set("shinL",Math.max(0,v)*fi(.5,1.4,f)+.1,0,0),this.set("shinR",Math.max(0,-v)*fi(.5,1.4,f)+.1,0,0),this.set("footL",g*.2,0,0),this.set("footR",-g*.2,0,0);let b=fi(.35,.9,f);this.set("armL",g*b-f*.1,0,.12+f*.05),this.set("armR",-g*b-f*.1,0,-.12-f*.05),this.set("foreL",-.3-f*.9,0,0),this.set("foreR",-.3-f*.9,0,0),p>.3&&this.rig.spec?.weapon!=="catalyst"&&(this.set("armL",.9*p+g*.2,0,.25),this.set("armR",.9*p-g*.2,0,-.25),this.set("foreL",-.3,0,0),this.set("foreR",-.3,0,0)),this.set("spine",.06+f*.12+p*.15,g*.12*f,0),this.set("chest",.02,-g*.18*(.4+f),0),this.set("head",-.06-f*.1,g*.06,0),this.hipsYT=Math.abs(v)*fi(.02,.06,f)-f*.04,this.bodyRollT=-(e.turn||0)*.25*f,r=14}else e.combat&&(this.set("spine",.06,.25,0),this.set("head",0,-.25,0),this.set("thighL",-.25,0,.08),this.set("thighR",.2,0,-.08),this.set("shinL",.3,0,0),this.set("shinR",.35,0,0),this.set("armR",-.4,0,-.25),this.set("foreR",-.7,0,0),this.hipsYT=-.04);break}case"air":{let f=(e.vy||0)>0;this.set("thighL",f?-.9:-.4,0,.05),this.set("shinL",f?1.4:.6,0,0),this.set("thighR",f?-.2:.2,0,-.05),this.set("shinR",f?.9:.4,0,0),this.set("armL",f?-.6:-.3,0,.6),this.set("armR",f?.3:-.2,0,-.6),this.set("foreL",-.5,0,0),this.set("foreR",-.5,0,0),this.set("spine",f?.15:-.05,0,0),r=10;break}case"glide":{this.bodyPitchT=1.05,this.set("armL",-3,0,.35),this.set("armR",-3,0,-.35),this.set("foreL",0,0,0),this.set("foreR",0,0,0),this.set("thighL",.15+Math.sin(i*3)*.08,0,.06),this.set("thighR",.15-Math.sin(i*3)*.08,0,-.06),this.set("shinL",.4,0,0),this.set("shinR",.5,0,0),this.set("head",-.8,0,0),this.bodyRollT=-(e.turn||0)*.4,r=8;break}case"climb":{let f=(e.climbPhase||0)*Math.PI,p=Math.sin(f),x=n>.1?1:.2;this.set("armL",-2.6-p*.4*x,0,.35),this.set("armR",-2.6+p*.4*x,0,-.35),this.set("foreL",-.6+p*.4*x,0,0),this.set("foreR",-.6-p*.4*x,0,0),this.set("thighL",-.9+p*.5*x,0,.2),this.set("thighR",-.9-p*.5*x,0,-.2),this.set("shinL",1.3-p*.4*x,0,0),this.set("shinR",1.3+p*.4*x,0,0),this.set("head",-.3,0,0),this.hipsYT=-.1,r=10;break}case"swim":{this.bodyPitchT=1.2;let f=i*(n>.5?4:1.5);this.set("armL",-2.2+Math.sin(f)*1.4,0,.4),this.set("armR",-2.2+Math.sin(f+Math.PI)*1.4,0,-.4),this.set("thighL",Math.sin(f*2)*.35,0,0),this.set("thighR",-Math.sin(f*2)*.35,0,0),this.set("head",-1,0,0),this.hipsYT=-.6,r=8;break}case"dash":{this.set("spine",.4,0,0),this.set("armL",1,0,.3),this.set("armR",1,0,-.3),this.set("thighL",-.8,0,0),this.set("shinL",.6,0,0),this.set("thighR",.6,0,0),this.set("shinR",.8,0,0),this.hipsYT=-.08,r=20;break}case"hit":{this.set("spine",-.35,0,0),this.set("head",-.3,0,0),this.set("armL",-.5,0,.6),this.set("armR",-.5,0,-.6),r=25;break}case"dead":{this.bodyPitchT=-1.45,this.hipsYT=-.75,this.set("armL",-2.6,0,.6),this.set("armR",-2.6,0,-.6),r=6;break}}if(e.attack){let f=Fb[e.attack.type]||e0,p=f[e.attack.idx%f.length],x=e.attack.p,m=x<.28?0:x<.5?io((x-.28)/.22):1,g=x<.28?io(x/.28):x>.8?1-io((x-.8)/.2)*.6:1,v=S=>{let A=p.a[S],_=p.b[S];if(!A&&!_)return;let T=A||_,P=_||A,I=this.tgt[S];for(let z=0;z<3;z++)I[z]=fi(I[z],fi(T[z],P[z],m),g)};for(let S of["armR","foreR","armL","foreL"])v(S);let b=fi(p.a.tw||0,p.b.tw||0,m)*g,y=fi(p.a.lean||0,p.b.lean||0,m)*g,M=fi(p.a.crouch||0,p.b.crouch||0,m)*g;this.tgt.spine[1]=b*.55,this.tgt.chest[1]=b*.45,this.tgt.spine[0]+=y*.6,this.tgt.head[1]=-b*.6,this.hipsYT-=M,e.mode==="ground"&&n<.5&&(this.set("thighL",-.45,0,.1),this.set("thighR",.35,0,-.1),this.set("shinL",.4,0,0),this.set("shinR",.5,0,0),this.hipsYT-=.05),r=32}if(e.cast){let f=e.cast.p,p=e.cast.kind==="burst",x=f<.2?io(f/.2):f>.85?1-io((f-.85)/.15):1,m=p?-2.8:-1.5;this.tgt.armR[0]=fi(this.tgt.armR[0],m,x),this.tgt.armR[2]=fi(this.tgt.armR[2],-.3,x),this.tgt.foreR[0]=fi(this.tgt.foreR[0],-.2,x),p&&(this.tgt.armL[0]=fi(this.tgt.armL[0],-.8,x),this.tgt.armL[2]=fi(this.tgt.armL[2],1,x),this.hipsYT-=.08*x),this.tgt.spine[0]+=(p?-.2:.1)*x,r=24}let l=1-Math.exp(-r*t);for(let f of Qu){let p=this.cur[f],x=this.tgt[f];p[0]+=(x[0]-p[0])*l,p[1]+=(x[1]-p[1])*l,p[2]+=(x[2]-p[2])*l;let m=this.rig.j[f];m&&f!=="hips"&&m.rotation.set(p[0],p[1],p[2])}let c=1-Math.exp(-10*t);this.hipsY+=(this.hipsYT-this.hipsY)*c,this.bodyPitch+=(this.bodyPitchT-this.bodyPitch)*(1-Math.exp(-6*t)),this.bodyRoll+=(this.bodyRollT-this.bodyRoll)*c;let h=this.rig.j;h.hips.position.y=.86+this.hipsY,h.hips.rotation.set(this.cur.hips[0],this.cur.hips[1],this.cur.hips[2]),this.rig.body.rotation.set(this.bodyPitch,0,this.bodyRoll),this.bodyPitch>.5?this.rig.body.position.set(0,.55*Math.sin(this.bodyPitch)*.6,-.4*Math.sin(this.bodyPitch)):this.rig.body.position.set(0,0,0);let d=Math.min(1.3,n*.12+Math.max(0,-(e.vy||0))*.08+(e.mode==="glide"?.9:0));this.capeSwing+=(d-this.capeSwing)*(1-Math.exp(-5*t)),h.cape&&h.cape.rotation.set(-.12-this.capeSwing*.7+Math.sin(i*5.3)*.04*(.3+this.capeSwing),Math.sin(i*2.7)*.05,0),h.skirt&&h.skirt.rotation.set(-this.capeSwing*.25+Math.sin(i*4.1)*.02,0,0),this.faceHold-=t;let u=e.face||"open";this.blink-=t,this.blink<0&&(this.blink<-.12?this.blink=2.5+Math.random()*3.5:u==="open"&&(u="closed")),u!==this.faceMode&&this.rig.faceMat&&this.rig.faceSets&&(this.rig.faceMat.map=this.rig.faceSets[u],this.rig.faceMat.needsUpdate=!0,this.faceMode=u)}};function i0(s,t,e,i){let n=(i.get("ids")||"sora,akane,mizuha,raika").split(","),r=Number(i.get("ang")||0),a=i.get("pose")||"idle",o=60,l=440,c=e.heightAt(o,l),h=[];n.forEach((g,v)=>{let b=Rn(g,t);b.root.position.set(o+(v-(n.length-1)/2)*.9,c,l),b.root.rotation.y=r,s.scene.add(b.root);let y=new ln(b);b.weapon&&a!=="idle"&&(b.weapon.held.visible=!0),h.push({r:b,a:y})});let d=Oc(t);d.position.set(o+2.2,c+1.5,l),d.rotation.y=r,s.scene.add(d);let u=Number(i.get("zoom")||1),f=s.camera,p=3.6/u,x=c+(u>2?1.45:.95);f.position.set(o+Number(i.get("ox")||0),x+.1,l+p),f.lookAt(o+Number(i.get("ox")||0),x,l);let m=0;return g=>{m+=g;for(let{r:v,a:b}of h){let y={mode:"ground",speed:0};a==="run"&&(y.speed=5.6),a==="sprint"&&(y.speed=9.5),a==="glide"&&(y.mode="glide"),a==="attack"&&(y.attack={type:v.spec.weapon,idx:Math.floor(m/.6)%5,p:m%.6/.6}),b.update(g,y),v.weapon&&v.weapon.float&&v.weapon.float.position.set(.35,1.15+Math.sin(m*2)*.05,.1)}return d.position.y=c+1.5+Math.sin(m*2)*.05,new R(o,c,l)}}var n0=["attack","jump","dash","skill","burst","interact","map","menu","quest","photo","p1","p2","p3","p4","p5","p6","walk"],Hc=class{constructor(t,e){this.canvas=t,this.keys=new Set,this.held={},this.pressed={},this.released={},this.heldTime={};for(let n of n0)this.held[n]=!1,this.pressed[n]=!1,this.released[n]=!1,this.heldTime[n]=0;this.move={x:0,y:0},this.look={dx:0,dy:0},this.zoom=0,this.sens=1,this.touch=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,this.enabled=!0,this.virtual={},this.latch={},this.stick={x:0,y:0},this.stickId=null,this.lookId=null,this.mouseBtn={0:!1,2:!1},this.usingPad=!1,this.mouseLook={dx:0,dy:0},this.locked=!1,addEventListener("keydown",n=>{n.repeat||(this.keys.add(n.code),this.keyLatch=this.keyLatch||new Set,this.keyLatch.add(n.code),["Space","Tab","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault())}),addEventListener("keyup",n=>this.keys.delete(n.code)),addEventListener("blur",()=>this.releaseAll()),document.addEventListener("visibilitychange",()=>{document.hidden&&this.releaseAll()}),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("mousedown",n=>{this.touch&&n.sourceCapabilities?.firesTouchEvents||(!this.locked&&this.wantLock&&!this.touch&&!this.lockBlocked&&t.requestPointerLock?.(),this.mouseBtn[n.button]=!0,this.mouseLatch=this.mouseLatch||{},this.mouseLatch[n.button]=!0)}),addEventListener("mouseup",n=>{this.mouseBtn[n.button]=!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),addEventListener("mousemove",n=>{this.locked&&(this.mouseLook.dx+=n.movementX,this.mouseLook.dy+=n.movementY)}),t.addEventListener("wheel",n=>{this.zoom+=Math.sign(n.deltaY),n.preventDefault()},{passive:!1}),t.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&this.lookId===null&&(this.lookId=n.pointerId,this.lookLast={x:n.clientX,y:n.clientY},t.setPointerCapture?.(n.pointerId))}),t.addEventListener("pointermove",n=>{n.pointerId===this.lookId&&(this.mouseLook.dx+=(n.clientX-this.lookLast.x)*1.6,this.mouseLook.dy+=(n.clientY-this.lookLast.y)*1.6,this.lookLast={x:n.clientX,y:n.clientY})});let i=n=>{n.pointerId===this.lookId&&(this.lookId=null)};t.addEventListener("pointerup",i),t.addEventListener("pointercancel",i),t.addEventListener("lostpointercapture",i),this.wantLock=!0}releaseAll(){this.keys.clear(),this.keyLatch&&this.keyLatch.clear(),this.mouseLatch={},this.latch={},this.mouseBtn[0]=this.mouseBtn[2]=!1;for(let t in this.virtual)this.virtual[t]=!1;this.stick.x=this.stick.y=0,this.stickId=null,this.lookId=null}setVirtual(t,e){this.virtual[t]=e,e&&(this.latch[t]=!0)}update(t){let e=new Set([...this.keys,...this.keyLatch||[]]);this.keyLatch&&this.keyLatch.clear();let i=0,n=0;if(this.enabled){if((e.has("KeyW")||e.has("ArrowUp"))&&(n+=1),(e.has("KeyS")||e.has("ArrowDown"))&&(n-=1),(e.has("KeyA")||e.has("ArrowLeft"))&&(i-=1),(e.has("KeyD")||e.has("ArrowRight"))&&(i+=1),i||n){let p=Math.hypot(i,n);i/=p,n/=p}(this.stick.x||this.stick.y)&&(i=this.stick.x,n=this.stick.y)}let r=navigator.getGamepads?navigator.getGamepads():[],a=r&&[...r].find(p=>p&&p.connected),o={},l=0,c=0;if(a){let p=v=>Math.abs(v)<.15?0:v,x=p(a.axes[0]),m=p(a.axes[1]);(x||m)&&(i=x,n=-m,this.usingPad=!0),l=p(a.axes[2]||0),c=p(a.axes[3]||0);let g=v=>a.buttons[v]&&a.buttons[v].pressed;Object.assign(o,{jump:g(0),dash:g(1),attack:g(2),interact:g(3),skill:g(5),burst:g(7),map:g(8),menu:g(9),p1:g(14),p2:g(12),p3:g(15),p4:g(13)}),Object.values(o).some(Boolean)&&(this.usingPad=!0)}this.move.x=i,this.move.y=n;let h=this.sens;this.look.dx=this.mouseLook.dx*.0025*h+l*2.6*t,this.look.dy=this.mouseLook.dy*.0025*h+c*1.8*t,this.mouseLook.dx=this.mouseLook.dy=0;let d={attack:this.mouseBtn[0]||!!(this.mouseLatch&&this.mouseLatch[0]),jump:e.has("Space"),dash:this.mouseBtn[2]||!!(this.mouseLatch&&this.mouseLatch[2])||e.has("ShiftLeft")||e.has("ShiftRight"),skill:e.has("KeyE"),burst:e.has("KeyQ"),interact:e.has("KeyF"),map:e.has("KeyM"),menu:e.has("Escape"),quest:e.has("KeyJ"),photo:e.has("KeyP"),p1:e.has("Digit1"),p2:e.has("Digit2"),p3:e.has("Digit3"),p4:e.has("Digit4"),p5:e.has("Digit5"),p6:e.has("Digit6"),walk:e.has("ControlLeft")},u=this.mouseLatch;this.mouseLatch={};for(let p of n0){let x=this.enabled&&!!(d[p]||o[p]||this.virtual[p]||this.latch[p]&&!this.held[p]);this.latch[p]=!1,this.pressed[p]=x&&!this.held[p],this.released[p]=!x&&this.held[p],this.heldTime[p]=x?this.heldTime[p]+t:0,this.held[p]=x}let f=this.zoom;return this.zoom=0,f}};var Ts={walk:2,run:5.6,sprint:8.2,dashSpeed:11.5,dashTime:.32,accel:34,decel:26,airAccel:14,jumpV:19.3,jump2V:13.4,jumpCut:.42,gravity:30,maxFall:46,climbSpeed:1.7,climbJump:2.3,glideSpeed:7.5,glideFall:1.7,swimSpeed:3.2,swimFast:5.4,climbSlope:1.15,slideSlope:.95,stamMax:240,stamDash:18,stamSprint:12,stamClimb:9,stamClimbJump:22,stamGlide:5,stamSwim:6,stamSwimFast:14,stamRegen:34,stamDelay:.6,fallSafe:22,radius:.32,waterLevel:0,swimDepth:1.25,voidY:-45},Vc=class{constructor(t,e,i){this.w=t,this.p={x:e,y:t.groundAt(e,i),z:i},this.v={x:0,y:0,z:0},this.face=0,this.mode="ground",this.stam=Ts.stamMax,this.stamMax=Ts.stamMax,this.stamIdle=0,this.dashT=0,this.sprinting=!1,this.iframe=0,this.climbPhase=0,this.wall=null,this.fallStartY=this.p.y,this.events=[],this.lastSafe={x:e,y:this.p.y,z:i},this.speed=0,this.turn=0,this.lockMove=0,this.jumpCount=0}emit(t){this.events.push(t)}useStam(t){this.stam=Math.max(0,this.stam-t*(this.stamMul??1)),this.stamIdle=0}update(t,e){let i=Ts,n=this.w,r=this.p,a=this.v;this.events.length=0,this.iframe=Math.max(0,this.iframe-t),this.lockMove=Math.max(0,this.lockMove-t);let o=Math.hypot(e.mx,e.my)>.05,l=o?e.mx/Math.hypot(e.mx,e.my):0,c=o?e.my/Math.hypot(e.mx,e.my):0,h=Math.min(1,Math.hypot(e.mx,e.my)),d=n.groundAt(r.x,r.z,r.y),u=i.waterLevel-n.heightAt(r.x,r.z),f=this.face;switch(this.stamIdle+=t,this.mode==="ground"&&!this.sprinting&&this.dashT<=0&&this.stamIdle>i.stamDelay&&(this.stam=Math.min(this.stamMax,this.stam+i.stamRegen*t)),this.mode){case"ground":case"dash":{e.dashP&&this.stam>=1&&this.lockMove<=.15&&(this.mode="dash",this.dashT=i.dashTime,this.iframe=.26,this.useStam(i.stamDash),o&&(this.face=Math.atan2(l,c)),this.emit("dash"));let x=0;if(this.mode==="dash"?(this.dashT-=t,x=i.dashSpeed,this.dashT<=0&&(this.mode="ground",this.sprinting=e.dashH&&this.stam>0)):o&&this.lockMove<=0?(this.sprinting&&(!e.dashH||this.stam<=0||!o)&&(this.sprinting=!1),x=this.sprinting?i.sprint:e.walk||h<.55?i.walk+(i.run-i.walk)*Math.max(0,(h-.2)/.35)*(e.walk?0:1):i.run,this.sprinting&&this.useStam(i.stamSprint*t)):this.sprinting=!1,o&&this.lockMove<=0&&this.mode!=="dash"){let I=Math.atan2(l,c);this.face=Gc(this.face,I,(this.sprinting?9:14)*t)}let m=Math.sin(this.face),g=Math.cos(this.face),v=Math.hypot(a.x,a.z),b=x>v?i.accel:i.decel,y=x>v?Math.min(x,v+b*t):Math.max(x,v-b*t);a.x=m*y,a.z=g*y,e.attackMove&&(a.x+=Math.sin(this.face)*e.attackMove,a.z+=Math.cos(this.face)*e.attackMove);let M=r.x+a.x*t,S=r.z+a.z*t;if((n.heightAt(M+m*.4,S+g*.4)-n.heightAt(r.x,r.z))/Math.max(.05,Math.hypot(M+m*.4-r.x,S+g*.4-r.z))>i.climbSlope&&y>.5&&o&&this.stam>5){this.startClimb();break}r.x=M,r.z=S;let _=n.pushOut(r,i.radius,r.y);if(_&&_.box&&_.climbable!==!1&&o&&this.stam>5&&_.top>r.y+1.2){let I=Math.atan2(l,c);this.wall=_,this.mode="climb",this.face=I,a.x=a.y=a.z=0,this.emit("climb");break}let T=n.groundAt(r.x,r.z,r.y);T<r.y-.6?(this.mode="air",this.fallStartY=r.y,a.y=0,this.airJumps=1,this.jumpHeld=!1):r.y=T;let P=n.slopeAt(r.x,r.z);if(P>i.slideSlope&&T===n.heightAt(r.x,r.z)){let I=n.cell,z=n.heightAt(r.x+I,r.z)-n.heightAt(r.x-I,r.z),F=n.heightAt(r.x,r.z+I)-n.heightAt(r.x,r.z-I),L=Math.hypot(z,F)||1;r.x-=z/L*4*t*(P-i.slideSlope)*3,r.z-=F/L*4*t*(P-i.slideSlope)*3,r.y=n.groundAt(r.x,r.z,r.y)}e.jumpP&&this.lockMove<=.2&&(a.y=i.jumpV,this.mode="air",this.fallStartY=r.y,this.emit("jump"),this.sprinting=!1,this.jumpHeld=!0,this.airJumps=1),u>i.swimDepth+.2&&r.y<i.waterLevel-i.swimDepth+.05&&this.enterSwim(),(this.mode==="ground"||this.mode==="dash")&&this.lastSafeUpdate();break}case"air":{if(o){let y=Math.atan2(l,c);this.face=Gc(this.face,y,6*t);let M=Math.max(i.run*.9,Math.hypot(a.x,a.z));a.x+=(l*M-a.x)*Math.min(1,i.airAccel*t*.25),a.z+=(c*M-a.z)*Math.min(1,i.airAccel*t*.25)}this.jumpHeld&&!e.jumpH&&(a.y>0&&(a.y*=i.jumpCut),this.jumpHeld=!1),a.y<=0&&(this.jumpHeld=!1),e.jumpP&&this.airJumps>0&&(this.airJumps--,a.y=i.jump2V,this.jumpHeld=!0,this.fallStartY=Math.max(this.fallStartY,r.y),this.emit("jump2"),e={...e,jumpP:!1}),a.y=Math.max(-i.maxFall,a.y-i.gravity*t),r.x+=a.x*t,r.z+=a.z*t,r.y+=a.y*t,n.pushOut(r,i.radius,r.y),a.y>0&&(this.fallStartY=Math.max(this.fallStartY,r.y));let x=n.groundAt(r.x,r.z,r.y+.3),m=r.y-n.heightAt(r.x,r.z);if(e.jumpP&&a.y<4&&m>2&&this.stam>1){this.mode="glide",this.emit("glide");break}let g=Math.sin(this.face),v=Math.cos(this.face),b=n.heightAt(r.x+g*.5,r.z+v*.5)-r.y;if(o&&b>.6&&n.slopeAt(r.x+g*.5,r.z+v*.5)>i.climbSlope&&this.stam>5){this.startClimb();break}r.y<=x&&(r.y=x,this.land()),u>i.swimDepth&&r.y<i.waterLevel-i.swimDepth+.3&&this.enterSwim(!0);break}case"glide":{this.useStam(i.stamGlide*t),o&&(this.face=Gc(this.face,Math.atan2(l,c),2.6*t)),this.turn=As(f,this.face)/Math.max(t,.001)*.15;let x=Math.sin(this.face),m=Math.cos(this.face),g=(o?i.glideSpeed:i.glideSpeed*.75)*(e.upDraft?.35:1);a.x+=(x*g-a.x)*Math.min(1,3*t),a.z+=(m*g-a.z)*Math.min(1,3*t),a.y+=(-i.glideFall-a.y)*Math.min(1,4*t),e.upDraft&&(a.y=Math.min(12,a.y+e.upDraft*t*30)),r.x+=a.x*t,r.z+=a.z*t,r.y+=a.y*t,n.pushOut(r,i.radius,r.y),this.fallStartY=r.y;let v=n.groundAt(r.x,r.z,r.y+.3);r.y<=v?(r.y=v,this.mode="ground",this.emit("land")):(e.jumpP||this.stam<=0)&&(this.mode="air",this.emit("glideEnd")),u>i.swimDepth&&r.y<i.waterLevel-i.swimDepth+.3&&this.enterSwim(!0);break}case"climb":this.updateClimb(t,e,o,l,c);break;case"swim":{let x=e.dashH&&this.stam>0;this.useStam((x?i.stamSwimFast:o?i.stamSwim:i.stamSwim*.3)*t);let m=o?x?i.swimFast:i.swimSpeed:0;o&&(this.face=Gc(this.face,Math.atan2(l,c),5*t));let g=Math.sin(this.face),v=Math.cos(this.face);a.x+=(g*m-a.x)*Math.min(1,4*t),a.z+=(v*m-a.z)*Math.min(1,4*t),r.x+=a.x*t,r.z+=a.z*t,n.pushOut(r,i.radius,r.y);let b=n.heightAt(r.x,r.z);r.y+=(i.waterLevel-i.swimDepth-r.y)*Math.min(1,6*t),b>i.waterLevel-i.swimDepth-.05&&(r.y=Math.max(r.y,b),this.mode="ground",this.emit("exitWater")),this.stam<=0&&(this.emit("drown"),this.respawnSafe());break}}(r.y<i.voidY||Math.hypot(r.x,r.z)>660)&&(this.emit("void"),this.respawnSafe()),this.speed=Math.hypot(a.x,a.z),(this.mode==="ground"||this.mode==="dash")&&(this.turn=As(f,this.face)/Math.max(t,.001)*.08)}land(){let t=Ts,e=this.fallStartY-this.p.y;this.airJumps=0,this.jumpHeld=!1,this.mode="ground",this.v.y=0,this.emit("land"),e>t.fallSafe&&this.emit({type:"fallDamage",frac:Math.min(.9,(e-t.fallSafe)*.04)})}startClimb(){this.mode="climb",this.wall=null,this.v.x=this.v.y=this.v.z=0,this.emit("climb")}enterSwim(t){this.mode="swim",this.v.y=0,this.sprinting=!1,t&&this.emit("splash"),this.emit("swim")}lastSafeUpdate(){let t=this.p;this.w.slopeAt(t.x,t.z)<.6&&this.w.heightAt(t.x,t.z)>.4&&Math.hypot(t.x,t.z)<600&&(this.lastSafe.x=t.x,this.lastSafe.y=t.y,this.lastSafe.z=t.z)}respawnSafe(){let t=this.lastSafe;this.p.x=t.x,this.p.y=this.w.groundAt(t.x,t.z)+.05,this.p.z=t.z,this.v.x=this.v.y=this.v.z=0,this.mode="ground",this.stam=Math.max(this.stam,this.stamMax*.3),this.emit("respawn")}updateClimb(t,e,i,n,r){let a=Ts,o=this.w,l=this.p;if(this.wall){let v=this.wall,b=e.myRaw||0,y=e.mxRaw||0;(b||y)&&(this.useStam(a.stamClimb*t),this.climbPhase+=t*2.5),l.y+=b*a.climbSpeed*t;let M=-Math.cos(this.face),S=Math.sin(this.face);l.x+=M*y*a.climbSpeed*t,l.z+=S*y*a.climbSpeed*t,l.x+=Math.sin(this.face)*.5*t,l.z+=Math.cos(this.face)*.5*t,o.pushOut(l,a.radius,l.y),e.jumpP&&this.stam>a.stamClimbJump*.5&&(this.useStam(a.stamClimbJump),l.y+=a.climbJump,this.emit("climbJump")),l.y>=v.top-.2?(l.y=v.top,l.x+=Math.sin(this.face)*.8,l.z+=Math.cos(this.face)*.8,this.mode="ground",this.wall=null,this.emit("vault")):(this.stam<=0||e.dashP||!o.insideCollider(v,l.x+Math.sin(this.face)*.5,l.z+Math.cos(this.face)*.5,.1))&&(this.mode="air",this.wall=null,this.fallStartY=l.y,this.v.y=0,this.p.x-=Math.sin(this.face)*.3,this.p.z-=Math.cos(this.face)*.3,this.emit("climbEnd"));let A=o.heightAt(l.x,l.z);l.y<A&&(l.y=A,this.mode="ground",this.wall=null);return}let c=o.cell,h=(o.heightAt(l.x+c,l.z)-o.heightAt(l.x-c,l.z))/(2*c),d=(o.heightAt(l.x,l.z+c)-o.heightAt(l.x,l.z-c))/(2*c),u=Math.hypot(h,d);if(u<.75){this.mode="ground",this.v.y=0,this.emit("vault"),l.y=o.groundAt(l.x,l.z);return}let f=h/u,p=d/u;this.face=Math.atan2(f,p);let x=e.myRaw||0,m=e.mxRaw||0;(x||m)&&(this.useStam(a.stamClimb*t),this.climbPhase+=t*2.5);let g=a.climbSpeed*t/Math.sqrt(1+u*u);if(l.x+=f*x*g-p*m*a.climbSpeed*t,l.z+=p*x*g+f*m*a.climbSpeed*t,e.jumpP&&this.stam>4){this.useStam(a.stamClimbJump);let v=a.climbJump/Math.sqrt(1+u*u);l.x+=f*v,l.z+=p*v,this.emit("climbJump")}l.y=o.heightAt(l.x,l.z),o.pushOut(l,a.radius,l.y),(this.stam<=0||e.dashP)&&(this.mode="air",this.fallStartY=l.y,this.v.x=-f*1.5,this.v.z=-p*1.5,this.v.y=0,l.x-=f*.4,l.z-=p*.4,this.emit("climbEnd")),x<0&&u<1.1&&o.slopeAt(l.x-f*.3,l.z-p*.3)<a.slideSlope&&(this.mode="ground")}};function As(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}function Gc(s,t,e){let i=As(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}var Wc=class{constructor(t,e){this.cam=t,this.w=e,this.yaw=Math.PI,this.pitch=.22,this.dist=5.6,this.distT=5.6,this.curDist=5.6,this.target=new R,this.smoothTarget=new R,this.autoFollow=!1,this.shake=0,this.extraDist=0,this.override=null,this.inited=!1}input(t,e,i){this.yaw-=t,this.pitch=Math.max(-1.1,Math.min(1.25,this.pitch+e)),i&&(this.distT=Math.max(2.4,Math.min(10,this.distT+i*.7)))}clearDist(t,e,i,n,r,a,o){let l=o;for(let c=.4;c<=o;c+=.35){let h=t+n*c,d=e+r*c,u=i+a*c;if(d<this.w.heightAt(h,u)+.35){l=Math.max(.6,c-.4);break}}for(let c of this.w.nearColliders(t,i,o+2)){if(!c.box||c.top==null||c.noCam)continue;let h=Ub(t,e,i,n,r,a,c);h!=null&&h<l&&(l=Math.max(.6,h-.3))}return l}update(t,e,i={}){this.target.set(e.x,e.y+(i.low?1:1.5),e.z),this.inited||(this.smoothTarget.copy(this.target),this.inited=!0);let n=1-Math.exp(-(i.fast?22:12)*t);if(this.smoothTarget.lerp(this.target,n),this.smoothTarget.y+=(this.target.y-this.smoothTarget.y)*(1-Math.exp(-8*t))*.3,this.autoFollow&&i.moving&&!i.combat){let p=e.face+Math.PI-this.yaw;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;this.yaw+=p*Math.min(1,t*.9)*Math.min(1,i.speed/5)}let r=this.distT+this.extraDist+(i.combat?.8:0)+(i.glide?1.2:0);this.dist+=(r-this.dist)*(1-Math.exp(-4*t));let a=Math.cos(this.pitch),o=Math.sin(this.pitch),l=Math.sin(this.yaw)*a,c=o,h=Math.cos(this.yaw)*a,d=this.smoothTarget,u=this.clearDist(d.x,d.y,d.z,l,c,h,this.dist);this.curDist+=(u-this.curDist)*(u<this.curDist?.6:1-Math.exp(-3*t)),this.cam.position.set(d.x+l*this.curDist,d.y+c*this.curDist,d.z+h*this.curDist);let f=this.w.heightAt(this.cam.position.x,this.cam.position.z)+.3;if(this.cam.position.y<f&&(this.cam.position.y=f),this.cam.lookAt(d),this.shake>0){this.shake=Math.max(0,this.shake-t*3);let p=this.shake*this.shake*.08;this.cam.position.x+=(Math.random()-.5)*p,this.cam.position.y+=(Math.random()-.5)*p}if(this.override){let p=this.override;p.t-=t,this.cam.position.lerp(p.pos,1-Math.exp(-10*t)),this.cam.lookAt(p.look),p.t<=0&&(this.override=null)}}toWorld(t,e){let i=-Math.sin(this.yaw),n=-Math.cos(this.yaw),r=-n,a=i;return{x:i*e+r*t,z:n*e+a*t}}};function Ub(s,t,e,i,n,r,a){let o=a.rot||0,l=Math.cos(-o),c=Math.sin(-o),h=(s-a.x)*l-(e-a.z)*c,d=(s-a.x)*c+(e-a.z)*l,u=i*l-r*c,f=i*c+r*l,p=a.bottom??-1e3,x=0,m=1e9,g=[[h,u,-a.hw,a.hw],[t,n,p,a.top],[d,f,-a.hd,a.hd]];for(let[v,b,y,M]of g){if(Math.abs(b)<1e-6){if(v<y||v>M)return null;continue}let S=(y-v)/b,A=(M-v)/b;if(S>A&&([S,A]=[A,S]),x=Math.max(x,S),m=Math.min(m,A),x>m)return null}return x>.05?x:null}var a0={wind:"\u98A8",fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37",phys:"\u7269\u7406"},cn={wind:"#6ff0d0",fire:"#ff8a4a",water:"#5ab8ff",thunder:"#c690ff",ice:"#a8eeff",phys:"#ffffff"},o0={vaporize:"\u84B8\u767A",melt:"\u6EB6\u89E3",overload:"\u904E\u8CA0\u8377",electro:"\u611F\u96FB",superconduct:"\u8D85\u96FB\u5C0E",freeze:"\u51CD\u7D50",swirl:"\u62E1\u6563"};function s0(s){return s>=2?12:9.5}function Bb(s,t){if(!s||!t||t==="phys"||s===t)return null;let e=(i,n)=>s===i&&t===n||s===n&&t===i;return t==="wind"?s==="wind"?null:"swirl":s==="wind"?null:e("fire","water")?"vaporize":e("fire","ice")?"melt":e("fire","thunder")?"overload":e("water","thunder")?"electro":e("ice","thunder")?"superconduct":e("water","ice")?"freeze":null}function Ob(s,t){return s==="vaporize"?t==="water"?2:1.5:s==="melt"?t==="fire"?2:1.5:1}var Hb={overload:2,electro:1.2,superconduct:.5,swirl:.6};function r0(s,t){return(s*18+60)*(Hb[t]||0)}function qc(s,t,e=0){let i=s+100,n=(t+100)*(1-e);return i/(i+n)}function Gb(s){return s<0?1-s/2:s<.75?1-s:1/(4*s+1)}function td(s,t){let e=t.el||"phys",i=1,n=null,r=null,a=s.aura&&s.aura.time>0?s.aura.el:null;e!=="phys"&&(n=Bb(a,e),n==="vaporize"||n==="melt"?(i=Ob(n,e),s.aura=null):n==="swirl"?(r={type:"swirl",el:a,dmg:r0(t.lv,"swirl")},s.aura.gauge-=.5,s.aura.gauge<=0&&(s.aura=null)):n?(r={type:n,el:e,dmg:r0(t.lv,n)},n==="freeze"?(s.frozen=2+(t.units||1)*1,s.aura={el:"ice",gauge:1,time:s.frozen+.5}):n==="electro"?(s.electro=3,s.aura=null):(n==="superconduct"&&(s.physShred=12),s.aura=null)):e!=="wind"&&(a===e?s.aura.time=Math.max(s.aura.time,s0(t.units||1)):s.aura={el:e,gauge:t.units||1,time:s0(t.units||1)}));let o=(s.res&&s.res[e])??.1,l=e==="phys"&&s.physShred>0?o-.4:o,h=(t.rng?t.rng():Math.random())<(t.crit??.05),d=t.atk*t.mult*(1+(t.bonus||0))*qc(t.lv,s.lv)*Gb(l)*i;return h&&(d*=1+(t.critDmg??.5)),d=Math.max(1,Math.round(d)),{dmg:d,crit:h,reaction:n,transform:r}}function no(s){return Math.round(120*Math.pow(s,1.55))}function Xc(s,t){return Math.round(s*(1+(t-10)*.065))}var so={sora:{name:"\u30BD\u30E9",el:"wind",weapon:"sword",hp:1600,atk:300,def:90,energy:60,skillCD:6,skillHoldCD:9,title:"\u98A8\u306E\u65C5\u4EBA"},akane:{name:"\u30A2\u30AB\u30CD",el:"fire",weapon:"claymore",hp:1800,atk:340,def:100,energy:70,skillCD:10,title:"\u7D05\u84EE\u306E\u885B\u5175\u968A\u9577"},mizuha:{name:"\u30DF\u30BA\u30CF",el:"water",weapon:"catalyst",hp:1450,atk:260,def:80,energy:80,skillCD:12,title:"\u6CC9\u306E\u5DEB\u5973"},raika:{name:"\u30E9\u30A4\u30AB",el:"thunder",weapon:"bow",hp:1350,atk:310,def:75,energy:60,skillCD:8,title:"\u68EE\u306E\u72E9\u4EBA"}},l0={sword:[{mult:.55,dur:.42,hit:.45,range:2.6,arc:.1,lunge:3.5},{mult:.55,dur:.42,hit:.45,range:2.6,arc:.1,lunge:3.5},{mult:.68,dur:.48,hit:.5,range:2.8,arc:.3,lunge:4},{mult:.74,dur:.5,hit:.45,range:2.8,arc:-.1,lunge:3},{mult:.95,dur:.62,hit:.5,range:3,arc:.2,lunge:5}],claymore:[{mult:.95,dur:.7,hit:.5,range:3.2,arc:.2,lunge:3},{mult:.9,dur:.66,hit:.5,range:3.2,arc:-.2,lunge:2.5},{mult:1.05,dur:.7,hit:.5,range:3.2,arc:-.2,lunge:2.5},{mult:1.45,dur:.85,hit:.55,range:3.6,arc:.3,lunge:4,shake:.6}],catalyst:[{mult:.62,dur:.48,hit:.45,proj:{speed:16,r:.6,el:"water"}},{mult:.58,dur:.48,hit:.45,proj:{speed:16,r:.6,el:"water"}},{mult:.82,dur:.6,hit:.5,proj:{speed:15,r:.8,el:"water",count:3}}],bow:[{mult:.42,dur:.32,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.42,dur:.32,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.5,dur:.36,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.5,dur:.36,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0}},{mult:.66,dur:.45,hit:.5,proj:{speed:34,r:.35,el:"phys",arrow:!0,count:2}}]},ed={sword:{mult:1.3,dur:.7,hit:.5,range:3,arc:-.5,stam:20},claymore:{mult:.8,dur:.5,hit:.5,range:3.4,arc:-1,stam:40,spin:!0},catalyst:{mult:1.6,dur:.8,hit:.6,aoe:3.2,el:"water",stam:50},bow:{mult:1.9,dur:.55,hit:.4,proj:{speed:44,r:.5,el:"thunder",arrow:!0},stam:0}},Yc=class{constructor(t,e=10,i=0){this.id=t,this.def0=so[t],this.lv=e,this.exp=i,this.recalc(),this.hp=this.maxHp,this.energy=0,this.skillT=0,this.alive=!0,this.infuse=0}recalc(){let t=this.def0;this.maxHp=Xc(t.hp,this.lv)+(this.bonusHp||0),this.atk=Xc(t.atk,this.lv)+(this.bonusAtk||0),this.def=Xc(t.def,this.lv)}get el(){return this.def0.el}get name(){return this.def0.name}addExp(t){this.exp+=t;let e=!1;for(;this.lv<40&&this.exp>=no(this.lv);){this.exp-=no(this.lv),this.lv++,e=!0;let i=this.hp/this.maxHp;this.recalc(),this.hp=Math.round(this.maxHp*Math.max(i,.5))}return e}save(){return{lv:this.lv,exp:this.exp,hp:this.hp,energy:this.energy,bonusHp:this.bonusHp||0,bonusAtk:this.bonusAtk||0}}load(t){t&&(this.lv=t.lv,this.exp=t.exp,this.bonusHp=t.bonusHp||0,this.bonusAtk=t.bonusAtk||0,this.recalc(),this.hp=Math.min(this.maxHp,t.hp??this.maxHp),this.energy=t.energy||0,this.alive=this.hp>0)}};var c0={wind:7336144,fire:16742960,water:4894975,thunder:12615935,ice:10545919,phys:16774360,heal:10158e3,gold:16767082},Cn=s=>new ot(c0[s]??c0.phys),$c=class{constructor(t,e){this.scene=t;let i=this.N=4e3,n=new te;this.pos=new Float32Array(i*3),this.col=new Float32Array(i*3),this.size=new Float32Array(i),this.alpha=new Float32Array(i),this.vel=new Float32Array(i*3),this.life=new Float32Array(i),this.maxLife=new Float32Array(i),this.grav=new Float32Array(i),this.drag=new Float32Array(i),this.size0=new Float32Array(i),n.setAttribute("position",new he(this.pos,3)),n.setAttribute("color",new he(this.col,3)),n.setAttribute("size",new he(this.size,1)),n.setAttribute("alpha",new he(this.alpha,1));let r=new ge({uniforms:{map:{value:e.dot},uScale:{value:400}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float uScale;
        void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; varying vec3 vC; varying float vA;
        void main(){ float a = texture2D(map, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC * a * 2.2, a); }`,transparent:!0,depthWrite:!1,blending:Ge});this.points=new da(n,r),this.points.frustumCulled=!1,this.points.renderOrder=5,t.add(this.points),this.next=0,this.rings=[],this.trails=[],this.bolts=[],this.orbs=[],this.decals=[],this.ringGeo=new Tn(.85,1,48),this.ringGeo.rotateX(-Math.PI/2),this.spark=e.spark}emit(t){let e=typeof t.color=="number"?new ot(t.color):t.color instanceof ot?t.color:Cn(t.color);for(let i=0;i<(t.n||10);i++){let n=this.next;this.next=(this.next+1)%this.N;let r=(t.speed??3)*(.4+Math.random()*.6),a=Math.random()*2-1,o=Math.random()*2-1,l=Math.random()*2-1,c=Math.hypot(a,o,l)||1;a/=c,o/=c,l/=c,t.dir&&(a=t.dir.x+a*(t.spread??.3),o=t.dir.y+o*(t.spread??.3),l=t.dir.z+l*(t.spread??.3));let h=t.radius||0;this.pos[n*3]=t.x+(Math.random()-.5)*h,this.pos[n*3+1]=t.y+(Math.random()-.5)*h*(t.flat?.1:1),this.pos[n*3+2]=t.z+(Math.random()-.5)*h,this.vel[n*3]=a*r,this.vel[n*3+1]=o*r+(t.up||0),this.vel[n*3+2]=l*r;let d=.8+Math.random()*.4;this.col[n*3]=e.r*d,this.col[n*3+1]=e.g*d,this.col[n*3+2]=e.b*d,this.maxLife[n]=this.life[n]=(t.life??.6)*(.6+Math.random()*.6),this.size0[n]=(t.size??.25)*(.6+Math.random()*.8),this.grav[n]=t.grav??0,this.drag[n]=t.drag??2}}ring(t,e,i,n,r=3,a=.45,o=.8){let l=new V(this.ringGeo,new Qt({color:Cn(n),transparent:!0,opacity:o,blending:Ge,depthWrite:!1,side:fe}));l.position.set(t,e+.08,i),l.scale.setScalar(.2),this.scene.add(l),this.rings.push({m:l,t:0,life:a,r1:r,op:o})}trail(t,e,i,n){let a=new te,o=new Float32Array(102),l=new Float32Array(34);a.setAttribute("position",new he(o,3)),a.setAttribute("a",new he(l,1));let c=[];for(let f=0;f<16;f++){let p=f*2;c.push(p,p+1,p+2,p+1,p+3,p+2)}a.setIndex(c);let h=new ge({uniforms:{uCol:{value:Cn(i)},uFade:{value:1}},vertexShader:"attribute float a; varying float vA; void main(){ vA = a; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uCol; uniform float uFade; varying float vA; void main(){ float k = vA*uFade; gl_FragColor = vec4(mix(uCol, vec3(1.0), k*k*0.7) * k * 1.8, k); }",transparent:!0,depthWrite:!1,blending:Ge,side:fe}),d=new V(a,h);d.frustumCulled=!1,d.renderOrder=6,this.scene.add(d);let u=[];this.trails.push({m:d,getBase:t,getTip:e,hist:u,t:0,dur:n,segs:16})}bolt(t,e,i="thunder",n=.18,r=3){let a=[];for(let h=0;h<=8;h++){let d=h/8,u=new R().lerpVectors(t,e,d);h>0&&h<8&&u.add(new R(Math.random()-.5,Math.random()-.5,Math.random()-.5).multiplyScalar(t.distanceTo(e)*.12)),a.push(u)}let l=new te().setFromPoints(a),c=new mr(l,new pr({color:Cn(i),transparent:!0,blending:Ge,linewidth:r}));c.renderOrder=6,this.scene.add(c),this.bolts.push({m:c,t:0,life:n})}orb(t,e,i,n,r,a){let o=new On(new Mn({map:this.spark,color:Cn(n),blending:Ge,depthWrite:!1}));o.scale.setScalar(.6),o.position.set(t,e,i),this.scene.add(o),this.orbs.push({s:o,v:new R((Math.random()-.5)*4,4+Math.random()*2,(Math.random()-.5)*4),t:0,el:n,value:r,onPick:a})}shape(t,e,i,n,r={}){let o={uCol:{value:Cn(i)},uTime:{value:0},uLife:{value:0}},l=Ge,c,h;t==="tornado"?(c=new Ct(2.6,.5,7,32,8,!0),c.translate(0,3.5,0),h="float s = sin(vUv.x*40.0 + vUv.y*14.0 - uTime*14.0)*0.5+0.5; float s2 = sin(vUv.x*18.0 - vUv.y*9.0 - uTime*9.0)*0.5+0.5; float a = smoothstep(0.55,1.0,s*0.7+s2*0.5) * smoothstep(0.0,0.15,vUv.y) * smoothstep(1.0,0.75,vUv.y);"):t==="arc"?(c=new Tn(1.2,r.r||6,48,4,-1.4,2.8),c.rotateX(-Math.PI/2),h="float R = "+(r.r||6).toFixed(2)+"; float r = length(vPos.xz) / R; float ang = atan(vPos.z, vPos.x); float a = (1.0 - abs(ang) / 1.4) * smoothstep(0.25, 0.7, r) * (1.0 - smoothstep(0.9, 1.0, r)) * (1.0 - uLife) * 1.6; a *= 0.7 + 0.3*sin(r*30.0 - uTime*20.0);",c.attributes.uv.array.forEach((p,x,m)=>{})):t==="dome"?(c=new Ht(r.r||8,40,20,0,Math.PI*2,0,Math.PI/2),h="float rim = pow(1.0 - abs(dot(normalize(vN), normalize(vV))), 2.5); float w = sin(vUv.y*30.0 - uTime*3.0)*0.5+0.5; float a = (rim*0.9 + w*0.12 + 0.05) * smoothstep(0.0,0.08,uLife) * (1.0 - smoothstep(0.9,1.0,uLife));"):t==="cloud"?(c=new us(r.r||7,40),c.rotateX(Math.PI/2),h="vec2 q = vUv - 0.5; float d = length(q); float n = sin(atan(q.y,q.x)*7.0 + uTime*1.5)*0.04; float a = smoothstep(0.5, 0.25 + n, d) * 0.75 * smoothstep(0.0,0.1,uLife) * (1.0 - smoothstep(0.85,1.0,uLife));"):t==="swirl"&&(c=new Tn(.3,r.r||3.5,48,2),c.rotateX(-Math.PI/2),h="vec2 q = vPos.xz; float ang = atan(q.y, q.x); float rr = length(q); float a = smoothstep(0.6,1.0, sin(ang*3.0 + rr*1.6 - uTime*12.0)*0.5+0.5) * (1.0 - uLife) * smoothstep(0.3, 1.0, rr);");let d=new ge({uniforms:o,transparent:!0,depthWrite:!1,blending:t==="cloud"?Yn:l,side:fe,vertexShader:"varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vPos; void main(){ vUv = uv; vPos = position; vN = normalMatrix*normal; vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform vec3 uCol; uniform float uTime, uLife; varying vec2 vUv; varying vec3 vN; varying vec3 vV; varying vec3 vPos; void main(){ "+h+(t==="cloud"?" gl_FragColor = vec4(mix(vec3(0.15,0.12,0.25), uCol*0.6, 0.3), a); }":" gl_FragColor = vec4(mix(uCol, vec3(1.0), 0.25)*a*1.6, a); }")}),u=new V(c,d);u.position.copy(e),u.renderOrder=7,u.frustumCulled=!1,r.rotY!=null&&(u.rotation.y=r.rotY),this.scene.add(u);let f={m:u,t:0,life:n,follow:r.follow,grow:r.grow};return(this.shapes||(this.shapes=[])).push(f),f}update(t,e){this.shapes=(this.shapes||[]).filter(n=>{n.t+=t;let r=n.t/n.life;return n.m.material.uniforms.uTime.value+=t,n.m.material.uniforms.uLife.value=Math.min(1,r),n.follow&&n.m.position.copy(n.follow()),n.grow&&n.m.scale.setScalar(n.grow(r)),r>=1?(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),!1):!0});for(let n=0;n<this.N;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=t;let r=Math.exp(-this.drag[n]*t);this.vel[n*3]*=r,this.vel[n*3+1]=this.vel[n*3+1]*r-this.grav[n]*t,this.vel[n*3+2]*=r,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t;let a=Math.max(0,this.life[n]/this.maxLife[n]);this.alpha[n]=Math.min(1,a*2.2)*(a<.98?1:.5),this.size[n]=this.size0[n]*(.4+a*.8)}let i=this.points.geometry;i.attributes.position.needsUpdate=!0,i.attributes.color.needsUpdate=!0,i.attributes.size.needsUpdate=!0,i.attributes.alpha.needsUpdate=!0,this.rings=this.rings.filter(n=>{n.t+=t;let r=n.t/n.life;return n.m.scale.setScalar(.2+(n.r1-.2)*(1-(1-r)*(1-r))),n.m.material.opacity=n.op*(1-r),r>=1?(this.scene.remove(n.m),n.m.material.dispose(),!1):!0}),this.trails=this.trails.filter(n=>{n.t+=t,n.t<n.dur?(n.hist.unshift([n.getBase().clone(),n.getTip().clone()]),n.hist.length>n.segs+1&&n.hist.pop()):n.hist.pop();let r=n.m.geometry.attributes.position,a=n.m.geometry.attributes.a;for(let o=0;o<=n.segs;o++){let l=n.hist[Math.min(o,n.hist.length-1)];if(!l)continue;r.setXYZ(o*2,l[0].x,l[0].y,l[0].z),r.setXYZ(o*2+1,l[1].x,l[1].y,l[1].z);let c=o<n.hist.length?1-o/n.segs:0;a.setX(o*2,c*.15),a.setX(o*2+1,c)}return r.needsUpdate=!0,a.needsUpdate=!0,n.hist.length<=1&&n.t>=n.dur?(this.scene.remove(n.m),n.m.geometry.dispose(),n.m.material.dispose(),!1):!0}),this.bolts=this.bolts.filter(n=>(n.t+=t,n.m.material.opacity=1-n.t/n.life,n.t>=n.life?(this.scene.remove(n.m),n.m.geometry.dispose(),!1):!0)),this.orbs=this.orbs.filter(n=>{if(n.t+=t,n.t<.5)n.v.y-=12*t,n.s.position.addScaledVector(n.v,t);else{let r=new R(e.x-n.s.position.x,e.y+1-n.s.position.y,e.z-n.s.position.z),a=r.length();if(n.s.position.addScaledVector(r.normalize(),Math.min(a,(8+n.t*14)*t)),a<.5)return n.onPick&&n.onPick(n.el,n.value),this.emit({x:n.s.position.x,y:n.s.position.y,z:n.s.position.z,n:8,color:n.el,speed:2,life:.4,size:.2}),this.scene.remove(n.s),!1}return n.s.scale.setScalar(.5+Math.sin(n.t*12)*.08),!0})}};var oe=(s=0,t=0,e=0)=>new R(s,t,e),jc=class{constructor(t){this.g=t,this.act=null,this.combo=0,this.comboT=0,this.holdT=0,this.projs=[],this.fields=[],this.slots=new Set,this.inCombatT=0,this.arrowGeo=new Ct(.015,.015,.7,4),this.arrowGeo.rotateX(Math.PI/2)}get busy(){return!!this.act}get combat(){return this.inCombatT>0}requestAttackSlot(t){return t.type==="boss"||t.type==="guardian"||this.slots.has(t)?!0:this.slots.size<2?(this.slots.add(t),!0):(t.cool=.5+Math.random(),!1)}releaseAttackSlot(t){this.slots.delete(t)}update(t){let e=this.g,i=e.input,n=e.mover,r=e.activeMember;this.inCombatT=Math.max(0,this.inCombatT-t),this.comboT-=t,this.comboT<=0&&(this.combo=0),r.infuse>0&&(r.infuse-=t);for(let l of e.party)l.skillT=Math.max(0,l.skillT-t);let a=n.mode==="ground"||n.mode==="dash";i.held.attack?this.holdT+=t:(this.holdT=0,this.chargedFired=!1);let o=e.activeRig.spec.weapon;if(e.canControl&&(i.pressed.attack&&(!this.act&&a?this.startNormal():this.act&&this.act.kind==="normal"&&(this.queued=!0)),i.held.attack&&this.holdT>.42&&!this.chargedFired&&a&&n.stam>=(ed[o].stam||0)&&(!this.act||this.act.kind==="normal"&&this.act.t/this.act.dur>.35)&&(this.chargedFired=!0,this.act=null,this.queued=!1,this.startCharged()),!this.act&&a&&(i.pressed.burst&&r.energy>=r.def0.energy?this.startBurst():i.pressed.burst?e.notify("\u5143\u7D20\u30A8\u30CD\u30EB\u30AE\u30FC\u304C\u8DB3\u308A\u306A\u3044","phys"):i.pressed.skill&&r.skillT>0?e.notify(`\u5143\u7D20\u30B9\u30AD\u30EB\u306F\u6E96\u5099\u4E2D\uFF08${r.skillT.toFixed(1)}\u79D2\uFF09`,"phys"):i.pressed.skill?e.activeId==="sora"?this.skillPressT=0:this.startSkill(!1):this.skillPressT!=null&&i.held.skill?(this.skillPressT+=t,this.skillPressT>.4&&(this.skillPressT=null,this.startSkill(!0))):this.skillPressT!=null&&!i.held.skill&&(this.skillPressT=null,this.startSkill(!1)))),this.act){let l=this.act;l.t+=t;let c=l.t/l.dur;l.face!=null&&(n.face=l.face);for(let h of l.hits)!h.done&&c>=h.at&&(h.done=!0,h.fn());if(l.tick&&l.tick(t,c),c>=1||l.cancelable&&n.mode==="dash"){this.act=null;let h=e.activeRig;this.queued&&(this.queued=!1,n.mode==="ground"&&this.startNormal())}this.act&&i.pressed.dash&&this.act.kind!=="burst"&&(this.act=null,this.queued=!1)}this.projs=this.projs.filter(l=>this.updateProj(l,t)),this.fields=this.fields.filter(l=>this.updateField(l,t))}attackState(){let t=this.act;return t&&(t.kind==="normal"||t.kind==="charged")?{type:t.weapon,idx:t.anim??t.idx,p:Math.min(1,t.t/t.dur)}:null}castState(){let t=this.act;return t&&(t.kind==="skill"||t.kind==="burst")?{kind:t.kind,p:Math.min(1,t.t/t.dur)}:null}autoFace(t=7){let e=this.g,i=e.mover,n=null,r=1e9,a=e.camRig.toWorld(e.input.move.x,e.input.move.y),o=Math.hypot(a.x,a.z)>.2,l=o?Math.atan2(a.x,a.z):i.face;for(let c of e.enemies){if(c.dead)continue;let h=c.pos.x-i.p.x,d=c.pos.z-i.p.z,u=Math.hypot(h,d)-c.r;if(u>t)continue;let f=Math.abs(h0(l,Math.atan2(h,d))),p=u+f*3;p<r&&(r=p,n=c)}return n?i.face=Math.atan2(n.pos.x-i.p.x,n.pos.z-i.p.z):o&&(i.face=l),n}startNormal(){let t=this.g,e=t.activeRig.spec.weapon,i=t.activeMember,n=l0[e],r=this.combo%n.length,a=n[r];this.combo++,this.comboT=a.dur+.75;let o=this.autoFace(a.proj?18:7),l=t.mover.face,c=this.act={kind:"normal",weapon:e,idx:r,t:0,dur:a.dur,hits:[],face:l,cancelable:!0};t.mover.lockMove=a.dur*.85,this.inCombatT=Math.max(this.inCombatT,4);let h=i.infuse>0?"fire":a.proj?a.proj.el:"phys";a.proj?c.hits.push({at:a.hit,fn:()=>{let d=a.proj.count||1;for(let u=0;u<d;u++)this.shoot({from:this.handPos(),target:o,face:l+(u-(d-1)/2)*.12,speed:a.proj.speed,r:a.proj.r,el:h,units:1,mult:a.mult,arrow:a.proj.arrow,orb:!a.proj.arrow,member:i});t.audio?.sfx(a.proj.arrow?"bow":"cast")}}):(c.hits.push({at:a.hit-.15,fn:()=>{this.trail(h,.16),t.audio?.sfx(e==="claymore"?"heavy":"swing")}}),c.hits.push({at:a.hit,fn:()=>{this.melee({range:a.range,arc:a.arc,mult:a.mult,el:h,units:1,member:i,knock:e==="claymore"?4:1.5,shake:a.shake}),(r===n.length-1||e==="claymore")&&t.fx.shape("arc",oe(t.mover.p.x,t.mover.p.y+1,t.mover.p.z),h==="phys"?"phys":h,.25,{r:a.range,rotY:t.mover.face-Math.PI/2,grow:d=>.8+d*.3})}}),c.tick=(d,u)=>{if(u>.15&&u<.5){let f=t.mover.face;t.mover.p.x+=Math.sin(f)*a.lunge*d*(o?Math.min(1,Math.max(0,Math.sqrt(Ci(t.mover.p,o.pos))-o.r-1)):.6),t.mover.p.z+=Math.cos(f)*a.lunge*d*(o?Math.min(1,Math.max(0,Math.sqrt(Ci(t.mover.p,o.pos))-o.r-1)):.6)}}),t.showWeapon()}startCharged(){let t=this.g,e=t.activeRig.spec.weapon,i=t.activeMember,n=ed[e];t.mover.useStam(n.stam||0);let r=this.autoFace(n.proj?25:8),a=t.mover.face,o=this.act={kind:"charged",weapon:e,idx:0,anim:e==="sword"?3:e==="claymore"?1:2,t:0,dur:n.dur,hits:[],face:a,cancelable:!1};t.mover.lockMove=n.dur,this.combo=0,this.inCombatT=4;let l=i.infuse>0?"fire":n.el||(n.proj?n.proj.el:"phys");if(n.proj)o.hits.push({at:n.hit,fn:()=>{this.shoot({from:this.handPos(),target:r,face:a,speed:n.proj.speed,r:n.proj.r,el:l,units:1,mult:n.mult,arrow:!0,member:i,big:!0}),t.audio?.sfx("bowCharged")}});else if(n.aoe)o.hits.push({at:n.hit,fn:()=>{let c=r?r.pos:oe(t.mover.p.x+Math.sin(a)*5,t.mover.p.y,t.mover.p.z+Math.cos(a)*5);this.area(c,n.aoe,{mult:n.mult,el:l,units:1,member:i,knock:3}),t.fx.emit({x:c.x,y:c.y+.3,z:c.z,n:60,color:"water",speed:6,up:4,grav:10,life:.8,size:.3,radius:1.5}),t.fx.ring(c.x,c.y,c.z,"water",n.aoe,.5),t.audio?.sfx("splash")}});else if(n.spin){o.dur=1.1,o.anim=1;for(let c of[.3,.6,.9])o.hits.push({at:c,fn:()=>{this.trail(l,.25),this.melee({range:n.range,arc:-1,mult:n.mult,el:l,units:1,member:i,knock:2}),t.audio?.sfx("heavy")}})}else o.hits.push({at:n.hit-.12,fn:()=>this.trail(l,.3)}),o.hits.push({at:n.hit,fn:()=>{this.melee({range:n.range,arc:n.arc,mult:n.mult*.5,el:l,units:1,member:i})}}),o.hits.push({at:n.hit+.2,fn:()=>{this.trail(l,.2),this.melee({range:n.range,arc:n.arc,mult:n.mult*.5,el:l,units:1,member:i,knock:3}),t.audio?.sfx("swing")}});t.showWeapon()}startSkill(t){let e=this.g,i=e.activeId,n=e.activeMember,r=e.mover,a=n;if(a.skillT>0)return;let o=this.autoFace(10),l=r.face,c=Math.sin(l),h=Math.cos(l);this.inCombatT=5;let d=this.act={kind:"skill",t:0,dur:.7,hits:[],face:l,cancelable:!1};if(queueMicrotask(()=>{n.lastSkillCD=n.skillT||1}),r.lockMove=.6,e.audio?.sfx("skill_"+n.el),i==="sora"){a.skillT=t?n.def0.skillHoldCD:n.def0.skillCD;let u=t?5:3.5,f=t?3.2:2,p=oe(r.p.x+c*2.5,r.p.y,r.p.z+h*2.5);d.dur=t?.9:.6,d.hits.push({at:.15,fn:()=>{this.fields.push({kind:"vortex",pos:p.clone(),t:0,dur:t?1.4:.8,r:u,el:"wind",pull:t?9:6}),e.fx.shape("swirl",oe(p.x,p.y+.3,p.z),"wind",t?1.4:.9,{r:u}),e.fx.ring(p.x,p.y,p.z,"wind",u,.6)}}),d.hits.push({at:.6,fn:()=>{let x=this.area(p,u,{mult:f,el:"wind",units:t?2:1,member:n,knock:6,lift:t?6:3,particles:t?3:2});e.fx.emit({x:p.x,y:p.y+1,z:p.z,n:80,color:"wind",speed:9,life:.7,size:.35,radius:1}),e.fx.ring(p.x,p.y,p.z,"wind",u*1.2,.5),e.camRig.shake=.5}})}else i==="akane"?(a.skillT=n.def0.skillCD,d.dur=.8,d.hits.push({at:.2,fn:()=>this.trail("fire",.35)}),d.hits.push({at:.45,fn:()=>{let u=oe(r.p.x+c*1.8,r.p.y,r.p.z+h*1.8);this.area(u,3.4,{mult:2.4,el:"fire",units:2,member:n,knock:5,lift:5,particles:3}),e.fx.emit({x:u.x,y:u.y+.5,z:u.z,n:90,color:"fire",speed:7,up:6,grav:3,life:.8,size:.4,radius:1.5}),e.fx.ring(u.x,u.y,u.z,"fire",4,.5),e.fx.shape("arc",oe(r.p.x,r.p.y+.8,r.p.z),"fire",.4,{r:3.6,rotY:l-Math.PI/2,grow:f=>.7+f*.5}),n.infuse=7,e.camRig.shake=.6,e.notify("\u6B66\u5668\u306B\u708E\u304C\u5BBF\u3063\u305F\uFF087\u79D2\uFF09","fire")}})):i==="mizuha"?(a.skillT=n.def0.skillCD,d.dur=.65,d.hits.push({at:.4,fn:()=>{this.area(oe(r.p.x,r.p.y,r.p.z),5,{mult:1.2,el:"water",units:1,member:n,knock:2,particles:2}),e.fx.emit({x:r.p.x,y:r.p.y+1,z:r.p.z,n:70,color:"water",speed:5,life:.8,size:.3,radius:2}),e.fx.ring(r.p.x,r.p.y,r.p.z,"water",5,.6),this.fields.push({kind:"bubble",t:0,dur:10,every:2,acc:0,member:n})}})):i==="raika"&&(a.skillT=n.def0.skillCD,d.dur=.6,d.hits.push({at:.35,fn:()=>{let u=e.enemies.filter(x=>!x.dead&&Ci(x.pos,r.p)<16).sort((x,m)=>Ci(x.pos,r.p)-Ci(m.pos,r.p)).slice(0,3),f=oe(r.p.x,r.p.y+3,r.p.z);u.length||e.fx.emit({x:f.x,y:f.y,z:f.z,n:40,color:"thunder",speed:6,life:.6,size:.3});let p=e.life?.nearestProp(r.p,16,"thunder");p&&(e.fx.bolt(f,oe(p.x,p.y+1,p.z),"thunder",.25),e.life.hitProps(p.x,p.y+1,p.z,1,"thunder"),e.audio?.sfx("thunder")),u.forEach((x,m)=>setTimeout(()=>{if(x.dead)return;let g=oe(x.pos.x,x.pos.y+x.h*.6,x.pos.z);e.fx.bolt(f,g,"thunder",.25),e.fx.bolt(f,g,"thunder",.2),this.hitEnemy(x,{mult:1.6,el:"thunder",units:1,member:n,knock:2,particles:m===0?3:0}),e.fx.emit({x:g.x,y:g.y,z:g.z,n:30,color:"thunder",speed:6,life:.4,size:.3}),e.audio?.sfx("thunder")},m*150))}}))}startBurst(){let t=this.g,e=t.activeId,i=t.activeMember,n=t.mover;i.energy=0;let r=this.autoFace(12),a=n.face,o=Math.sin(a),l=Math.cos(a);this.inCombatT=6;let c=this.act={kind:"burst",t:0,dur:1.3,hits:[],face:a,cancelable:!1};n.lockMove=1.2,n.iframe=1.3,t.burstCinematic(i.el),t.audio?.sfx("burst"),e==="sora"?c.hits.push({at:.6,fn:()=>{let h={kind:"tornado",pos:oe(n.p.x+o*2,n.p.y,n.p.z+l*2),dir:oe(o,0,l),t:0,dur:6,every:.5,acc:0,el:"wind",absorbed:null,member:i,r:3.2};this.fields.push(h),h.shape=t.fx.shape("tornado",h.pos,"wind",6,{follow:()=>h.pos,grow:d=>Math.min(1,d*8)*(d>.92?(1-d)*12:1)})}}):e==="akane"?(c.hits.push({at:.3,fn:()=>this.trail("fire",.5)}),c.hits.push({at:.62,fn:()=>{let h=oe(n.p.x+o*3,n.p.y,n.p.z+l*3);this.area(h,6,{mult:5,el:"fire",units:2,member:i,knock:9,lift:6}),t.fx.shape("arc",oe(n.p.x,n.p.y+1,n.p.z),"fire",.6,{r:7,rotY:a-Math.PI/2,grow:d=>.6+d*.6}),t.fx.emit({x:h.x,y:h.y+.5,z:h.z,n:220,color:"fire",speed:12,up:5,grav:4,life:1,size:.5,radius:3}),t.fx.ring(h.x,h.y,h.z,"fire",7,.7),t.fx.ring(h.x,h.y,h.z,"gold",5,.5),t.camRig.shake=1.2,this.fields.push({kind:"burn",pos:h,t:0,dur:4,every:.5,acc:0,r:5,member:i})}})):e==="mizuha"?c.hits.push({at:.6,fn:()=>{let h=oe(n.p.x,n.p.y,n.p.z);this.area(h,8,{mult:1.5,el:"water",units:2,member:i,knock:3}),t.fx.ring(h.x,h.y,h.z,"water",8,.8),this.fields.push({kind:"sanctuary",pos:h,t:0,dur:12,every:1,acc:0,r:8,member:i}),t.fx.shape("dome",h,"water",12,{r:8})}}):e==="raika"&&c.hits.push({at:.55,fn:()=>{let h=r?r.pos.clone():oe(n.p.x+o*6,n.p.y,n.p.z+l*6);this.fields.push({kind:"storm",pos:h,t:0,dur:5,every:.33,acc:0,r:6,member:i}),t.fx.shape("cloud",oe(h.x,t.world.heightAt(h.x,h.z)+12,h.z),"thunder",5.2,{r:8})}})}handPos(){let t=this.g.activeRig,e=oe();return t.j.handR.getWorldPosition(e),e}trail(t,e){let i=this.g,n=i.activeRig,r=n.weapon&&n.weapon.held;if(!r||n.spec.weapon==="bow"||n.spec.weapon==="catalyst")return;let a=n.spec.weapon==="claymore"?1.3:.85,o=oe(),l=oe();i.fx.trail(()=>r.localToWorld(o.set(0,.15,0)),()=>r.localToWorld(l.set(0,a,0)),t==="phys"?"phys":t,e)}melee(t){let e=this.g,i=e.mover,n=Math.sin(i.face),r=Math.cos(i.face),a=0;for(let o of e.enemies){if(o.dead)continue;let l=o.pos.x-i.p.x,c=o.pos.z-i.p.z,h=Math.hypot(l,c);h-o.r>t.range||Math.abs(o.pos.y-i.p.y)>2.5+o.h*.5||h>.5&&(l*n+c*r)/h<t.arc||(this.hitEnemy(o,t),a++)}return e.life?.hitProps(i.p.x,i.p.y+1,i.p.z,t.range,t.el,n,r,t.arc),a&&(e.hitStop(.045),e.camRig.shake=Math.max(e.camRig.shake,t.shake||.25)),a}area(t,e,i){let n=0;for(let r of this.g.enemies)r.dead||Math.hypot(r.pos.x-t.x,r.pos.z-t.z)-r.r>e||Math.abs(r.pos.y-t.y)>4+r.h*.5||(this.hitEnemy(r,{...i,from:t}),n++,i.particles&&(i={...i,particles:0}));return this.g.life?.hitProps(t.x,t.y,t.z,e,i.el),n}hitEnemy(t,e){let i=this.g,n=e.member||i.activeMember;if(t.dead)return;let r=e.mult;if(t.type==="shield"&&t.shieldHp>0){let d=Math.abs(h0(t.face,Math.atan2(i.mover.p.x-t.pos.x,i.mover.p.z-t.pos.z)));e.el==="fire"&&(t.shieldHp--,t.shieldHp<=0&&(i.notify("\u76FE\u304C\u71C3\u3048\u843D\u3061\u305F\uFF01","fire"),t.parts.shield.visible=!1,i.fx.emit({x:t.pos.x,y:t.pos.y+1,z:t.pos.z,n:60,color:"fire",speed:5,up:3,life:1,size:.4}))),d<1.2&&t.shieldHp>0&&(r*=.15,i.fx.emit({x:t.pos.x+Math.sin(t.face),y:t.pos.y+1.2,z:t.pos.z+Math.cos(t.face),n:8,color:"gold",speed:4,life:.25,size:.15}))}t.type==="boss"&&!t.coreOpen&&t.phase===3&&(r*=.3);let a=i.life?i.life.buffs:null,o=td(t,{atk:n.atk*(1+(a?a.val("atk"):0)),mult:r,el:e.el,units:e.units||1,lv:n.lv,crit:.12+(a?a.val("crit"):0),critDmg:.6});t.hp-=o.dmg;let l=oe(t.pos.x,t.pos.y+t.h*.75,t.pos.z);if(i.damageNumber(l,o.dmg,e.el,o.crit),o.reaction&&(this.reactionFx(t,o,n,l),i.life?.onReaction(o.reaction)),!(t.type==="boss"||t.type==="guardian")&&e.knock){let d=e.from||i.mover.p,u=t.pos.x-d.x,f=t.pos.z-d.z,p=Math.hypot(u,f)||1,x=t.type==="shield"?e.knock*.3:e.knock;t.vel.set(u/p*x,0,f/p*x),t.hitstun=Math.max(t.hitstun,t.type==="shield"?.12:.28),(t.state==="idle"||t.state==="wander")&&(t.state="chase"),t.attack&&t.type!=="shield"&&e.knock>3&&(t.attack=null,t.state="chase",this.releaseAttackSlot(t))}(t.state==="idle"||t.state==="wander"||t.state==="return")&&(t.state="chase"),t.flash=.12;let h=e.el&&e.el!=="phys"?e.el:"phys";if(i.fx.emit({x:l.x,y:l.y,z:l.z,n:o.crit?22:12,color:h,speed:6,life:.35,size:.22}),i.audio?.sfx(e.el==="phys"||!e.el?"hit":"hitEl",o.crit),e.particles)for(let d=0;d<e.particles;d++)i.fx.orb(l.x,l.y,l.z,n.el,1,u=>i.gainEnergy(u));return this.inCombatT=Math.max(this.inCombatT,4),t.hp<=0&&this.kill(t),o}reactionFx(t,e,i,n){let r=this.g;r.reactionText(n,o0[e.reaction],e.reaction);let a=e.transform;if(!a){r.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:e.reaction==="melt"?"fire":"water",speed:5,up:2,life:.6,size:.3});return}if(a.type==="overload"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,"fire",4,.5),r.fx.emit({x:n.x,y:n.y,z:n.z,n:90,color:16736416,speed:10,life:.6,size:.45}),r.camRig.shake=.6;for(let o of r.enemies)if(!o.dead&&Ci(o.pos,t.pos)<16&&(this.reactionDamage(o,a.dmg,"fire"),o.type!=="boss"&&o.type!=="guardian")){let l=o.pos.x-t.pos.x,c=o.pos.z-t.pos.z,h=Math.hypot(l,c)||1;o.vel.set(l/h*7,0,c/h*7),o.hitstun=.5}r.audio?.sfx("explode")}else if(a.type==="superconduct"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,"ice",4,.5),r.fx.emit({x:n.x,y:n.y,z:n.z,n:60,color:11579647,speed:7,life:.6,size:.35});for(let o of r.enemies)!o.dead&&Ci(o.pos,t.pos)<16&&(this.reactionDamage(o,a.dmg,"ice"),o.physShred=12)}else if(a.type==="swirl"){r.fx.ring(t.pos.x,t.pos.y,t.pos.z,a.el,5,.6),r.fx.emit({x:n.x,y:n.y,z:n.z,n:70,color:a.el,speed:8,life:.7,size:.35});for(let o of r.enemies)!o.dead&&Ci(o.pos,t.pos)<25&&(this.reactionDamage(o,a.dmg,a.el),o!==t&&td(o,{atk:0,mult:0,el:a.el,units:1,lv:i.lv}))}else a.type==="electro"?(r.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:"thunder",speed:5,life:.5,size:.3}),t.electroDmg=a.dmg):a.type==="freeze"&&(r.fx.emit({x:n.x,y:n.y,z:n.z,n:50,color:"ice",speed:4,life:.8,size:.35}),t.vel.set(0,0,0))}reactionDamage(t,e,i){let n=this.g,r=Math.round(e*(t.res[i]>=1?.1:1-(t.res[i]||.1)));t.hp-=r,n.damageNumber(oe(t.pos.x,t.pos.y+t.h*.9,t.pos.z),r,i,!1,!0),t.hp<=0&&!t.dead&&this.kill(t)}electroTick(t){let e=this.g,i=t.electroDmg||100;this.reactionDamage(t,i,"thunder");for(let n of e.enemies)n!==t&&!n.dead&&n.aura&&n.aura.el==="water"&&Ci(n.pos,t.pos)<9&&(e.fx.bolt(oe(t.pos.x,t.pos.y+.8,t.pos.z),oe(n.pos.x,n.pos.y+.8,n.pos.z)),this.reactionDamage(n,i*.6,"thunder"));e.fx.emit({x:t.pos.x,y:t.pos.y+.8,z:t.pos.z,n:14,color:"thunder",speed:5,life:.3,size:.2})}kill(t){let e=this.g;t.dead||(t.dead=!0,t.deathT=0,this.releaseAttackSlot(t),e.fx.emit({x:t.pos.x,y:t.pos.y+t.h*.5,z:t.pos.z,n:50,color:14209279,speed:4,up:2,life:1,size:.4,radius:t.r}),e.onEnemyKilled(t))}shoot(t){let e=this.g,i;if(t.target&&!t.target.dead){if(i=oe(t.target.pos.x,t.target.pos.y+t.target.h*.55,t.target.pos.z).sub(t.from).normalize(),t.face!==e.mover.face){let a=Math.atan2(i.x,i.z)+(t.face-e.mover.face),o=Math.hypot(i.x,i.z);i.x=Math.sin(a)*o,i.z=Math.cos(a)*o}}else i=oe(Math.sin(t.face),.02,Math.cos(t.face));let n;t.arrow?(n=new V(this.arrowGeo,new Qt({color:t.el==="thunder"?14201087:16774360})),n.scale.setScalar(t.big?1.6:1)):n=new V(new Ht(t.r*.45,12,10),new Qt({color:Cn(t.el)})),n.position.copy(t.from),n.lookAt(t.from.clone().add(i)),e.scene.add(n),this.projs.push({...t,pos:t.from.clone(),vel:i.multiplyScalar(t.speed),life:1.6,mesh:n,friendly:!0})}updateProj(t,e){let i=this.g;if(t.life-=e,t.homing&&t.friendly===!1){let a=oe(i.mover.p.x,i.mover.p.y+1,i.mover.p.z).sub(t.pos).normalize().multiplyScalar(t.vel.length());t.vel.lerp(a,Math.min(1,t.homing*e))}t.pos.addScaledVector(t.vel,e),t.mesh.position.copy(t.pos),t.arrow&&t.mesh.lookAt(t.pos.clone().add(t.vel)),t.arrow?t.el==="thunder"&&i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:2,color:"thunder",speed:.3,life:.25,size:.18}):i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:2,color:t.el||"phys",speed:.5,life:.35,size:t.r*.5});let n=!1;if(t.friendly)for(let r of i.enemies){if(r.dead)continue;let a=r.pos.y+r.h*.5;if(Math.hypot(r.pos.x-t.pos.x,r.pos.z-t.pos.z)<r.r+t.r&&Math.abs(a-t.pos.y)<r.h*.6+t.r){this.hitEnemy(r,{mult:t.mult,el:t.el,units:t.units,member:t.member,knock:1}),n=!0;break}}else{let r=i.mover.p;Math.hypot(r.x-t.pos.x,r.z-t.pos.z)<.6+t.r&&Math.abs(r.y+.9-t.pos.y)<1.1&&(i.damagePlayer(t.src,t.mult,t.el),n=!0)}return!n&&t.friendly&&i.life&&i.life.hitProps(t.pos.x,t.pos.y,t.pos.z,t.r+.3,t.el)&&(n=!0),t.pos.y<i.world.heightAt(t.pos.x,t.pos.z)&&(n=!0),n||t.life<=0?(i.scene.remove(t.mesh),t.mesh.geometry!==this.arrowGeo&&t.mesh.geometry.dispose(),t.mesh.material.dispose(),n&&!t.arrow&&i.fx.emit({x:t.pos.x,y:t.pos.y,z:t.pos.z,n:16,color:t.el||"phys",speed:4,life:.4,size:.25}),!1):!0}updateField(t,e){let i=this.g,n=i.mover;t.t+=e,t.every&&(t.acc+=e);let r=t.every&&t.acc>=t.every;if(r&&(t.acc-=t.every),t.kind==="vortex"){for(let a of i.enemies)if(!a.dead&&a.type!=="boss"&&a.type!=="guardian"&&Ci(a.pos,t.pos)<(t.r+2)**2){let o=t.pos.x-a.pos.x,l=t.pos.z-a.pos.z,c=Math.hypot(o,l)||1;a.pos.x+=o/c*Math.min(c,t.pull*e),a.pos.z+=l/c*Math.min(c,t.pull*e)}i.fx.emit({x:t.pos.x+Math.cos(t.t*14)*t.r*.6,y:t.pos.y+.5+t.t,z:t.pos.z+Math.sin(t.t*14)*t.r*.6,n:6,color:"wind",speed:1,life:.5,size:.3})}else if(t.kind==="tornado"){t.pos.addScaledVector(t.dir,1.6*e),t.pos.y=i.world.heightAt(t.pos.x,t.pos.z);let a=t.absorbed||"wind";for(let o=0;o<6;o++){let l=t.t*9+o*1.05,c=o/6*5;i.fx.emit({x:t.pos.x+Math.cos(l)*(.6+c*.35),y:t.pos.y+c,z:t.pos.z+Math.sin(l)*(.6+c*.35),n:1,color:o%2?a:"wind",speed:.5,life:.5,size:.45})}for(let o of i.enemies)if(!o.dead&&o.type!=="boss"&&o.type!=="guardian"&&Ci(o.pos,t.pos)<64){let l=t.pos.x-o.pos.x,c=t.pos.z-o.pos.z,h=Math.hypot(l,c)||1;o.pos.x+=l/h*Math.min(h,4*e),o.pos.z+=c/h*Math.min(h,4*e)}if(r&&(this.area(t.pos,t.r,{mult:.6,el:"wind",units:1,member:t.member}),t.absorbed&&this.area(t.pos,t.r,{mult:.25,el:t.absorbed,units:1,member:t.member}),!t.absorbed)){for(let o of i.enemies)if(!o.dead&&o.aura&&Ci(o.pos,t.pos)<t.r*t.r){t.absorbed=o.aura.el,i.notify(`\u7ADC\u5DFB\u304C${{fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37"}[t.absorbed]}\u3092\u5438\u3044\u8FBC\u3093\u3060`,t.absorbed);break}}}else if(t.kind==="burn")Math.random()<.8&&i.fx.emit({x:t.pos.x+(Math.random()-.5)*t.r*1.6,y:t.pos.y+.2,z:t.pos.z+(Math.random()-.5)*t.r*1.6,n:3,color:"fire",speed:1,up:3,life:.6,size:.35}),r&&this.area(t.pos,t.r,{mult:.6,el:"fire",units:1,member:t.member});else if(t.kind==="sanctuary"){let a=t.t*2;for(let o=0;o<3;o++)i.fx.emit({x:t.pos.x+Math.cos(a+o*2.1)*t.r,y:t.pos.y+.3,z:t.pos.z+Math.sin(a+o*2.1)*t.r,n:1,color:"water",speed:.3,up:1,life:.8,size:.35});r&&(Ci(n.p,t.pos)<t.r*t.r&&i.healActive(i.activeMember.maxHp*.04+60),this.area(t.pos,t.r,{mult:.6,el:"water",units:1,member:t.member}))}else if(t.kind==="storm"){if(r){let a=t.pos.x+(Math.random()-.5)*t.r*1.4,o=t.pos.z+(Math.random()-.5)*t.r*1.4,l=i.world.heightAt(a,o);i.fx.bolt(oe(a,l+12,o),oe(a,l,o),"thunder",.2),i.fx.bolt(oe(a+.3,l+12,o),oe(a,l,o),"thunder",.15),i.fx.emit({x:a,y:l+.3,z:o,n:20,color:"thunder",speed:5,life:.4,size:.3}),this.area(oe(a,l,o),2.6,{mult:.5,el:"thunder",units:1,member:t.member}),i.audio?.sfx("thunder")}}else t.kind==="bubble"&&(r&&(i.healActive(i.activeMember.maxHp*.08+200),i.fx.emit({x:n.p.x,y:n.p.y+1,z:n.p.z,n:24,color:"heal",speed:2,up:2,life:.8,size:.25,radius:.8}),this.area(oe(n.p.x,n.p.y,n.p.z),4,{mult:.4,el:"water",units:1,member:t.member})),Math.random()<.5&&i.fx.emit({x:n.p.x+Math.cos(t.t*4)*1,y:n.p.y+1.2,z:n.p.z+Math.sin(t.t*4)*1,n:1,color:"water",speed:.2,life:.6,size:.3}));return t.t<t.dur}enemyStrike(t,e){let i=this.g,n=i.mover.p;if(e.noStrike)return;if(e.proj){let d=oe(t.pos.x+Math.sin(t.face)*.5,t.pos.y+t.h*.7,t.pos.z+Math.cos(t.face)*.5),f=oe(n.x,n.y+1,n.z).sub(d).normalize(),p=e.proj.arrow?new V(this.arrowGeo,new Qt({color:16765088})):new V(new Ht(.25,10,8),new Qt({color:Cn(e.proj.el||"phys")}));p.position.copy(d),i.scene.add(p),this.projs.push({pos:d,vel:f.multiplyScalar(e.proj.speed),r:.35,life:3,mesh:p,friendly:!1,mult:e.proj.mult,el:e.proj.el,src:t,arrow:e.proj.arrow,homing:e.proj.homing}),i.audio?.sfx(e.proj.arrow?"bow":"cast");return}if(e.laser){e.tick=d=>{if(e.t<e.hitAt)return;e.lt=(e.lt||0)+d;let u=oe(t.pos.x+Math.sin(t.face)*1.2,t.pos.y+2.5,t.pos.z+Math.cos(t.face)*1.2),f=oe(t.pos.x+Math.sin(t.face)*18,t.pos.y+.6,t.pos.z+Math.cos(t.face)*18);if(i.fx.bolt(u,f,"fire",.06,4),i.fx.emit({x:f.x,y:i.world.heightAt(f.x,f.z)+.2,z:f.z,n:3,color:"fire",speed:2,up:2,life:.4,size:.3}),e.lt>=e.tickEvery){e.lt=0;let p=f.x-u.x,x=f.z-u.z,m=Math.hypot(p,x),g=Math.max(0,Math.min(1,((n.x-u.x)*p+(n.z-u.z)*x)/(m*m)));Math.hypot(u.x+p*g-n.x,u.z+x*g-n.z)<1&&i.damagePlayer(t,e.mult,"fire")}};return}let r=n.x-t.pos.x,a=n.z-t.pos.z,o=Math.hypot(r,a);e.shake&&(i.camRig.shake=Math.max(i.camRig.shake,e.shake*Math.max(0,1-o/25))),e.ring?i.fx.ring(e.ring.x,e.ring.y,e.ring.z,e.el||"phys",e.range,.4):(e.kind==="stomp"||e.kind==="hop"||e.kind==="slam")&&i.fx.ring(t.pos.x,t.pos.y,t.pos.z,e.el||"phys",e.range,.4);let l=e.center?e.center.x:t.pos.x,c=e.center?e.center.z:t.pos.z;Math.hypot(n.x-l,n.z-c)>e.range+.4||Math.abs(n.y-t.pos.y)>(t.type==="boss"?8:2.5)||e.arc!=null&&e.arc>-1&&o>.6&&(r*Math.sin(t.face)+a*Math.cos(t.face))/o<e.arc||i.damagePlayer(t,e.mult,e.el)}bossChoose(t,e){let i=this.g;t.attackCool=t.phase===3?1.2:t.phase===2?1.6:2.2;let n=i.mover.p,r=Math.random();if(t.phase>=2&&r<.3)this.g.notify("\u9727\u304C\u6E26\u3092\u5DFB\u304F\u2026\u2026\uFF01","ice"),t.begin("icicles",3.2,1.2,{windup:1,noStrike:!0,tick:(a,o)=>{if(o.acc=(o.acc||0)+a,o.t>1&&o.acc>.28){o.acc=0;let l=n.x+(Math.random()-.5)*4,c=n.z+(Math.random()-.5)*4,h=i.world.heightAt(l,c);i.fx.ring(l,h,c,"ice",2.2,.5,.9),setTimeout(()=>{i.fx.emit({x:l,y:h+.5,z:c,n:30,color:"ice",speed:6,up:6,grav:12,life:.7,size:.3}),i.audio?.sfx("ice"),Math.hypot(i.mover.p.x-l,i.mover.p.z-c)<2&&i.damagePlayer(t,.8,"ice")},550)}}});else if(e<9||r<.55){let a=t.phase===3&&r<.3?0:r<.5?-1:1,o=oe(n.x,n.y,n.z);t.begin("slam",2,1.25,{side:a,windup:1,track:.8,range:a===0?6:4.2,mult:1.6,center:o,ring:o,shake:1.3,tick:(l,c)=>{c.t<1.1&&c.center.set(i.mover.p.x,i.mover.p.y,i.mover.p.z),c.t<1.2&&Math.random()<.4&&i.fx.emit({x:c.center.x,y:c.center.y+.1,z:c.center.z,n:2,color:16732240,speed:2,life:.3,size:.4,radius:c.range,flat:!0})}})}else t.begin("sweep",2.4,1.4,{windup:1.1,range:11,arc:-1,mult:1.2,shake:.8})}};function Ci(s,t){let e=s.x-t.x,i=s.z-t.z;return e*e+i*i}function h0(s,t){let e=t-s;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e}var u0={wind:8384728,fire:16747072,water:5945599,thunder:12946175,ice:12120319},Vb={slime:{name:"\u30B9\u30E9\u30A4\u30E0",hp:380,atk:200,r:.65,h:1,speed:2.4,sight:14,exp:60,mora:40,lv:8},boko:{name:"\u30DC\u30B3",hp:640,atk:260,r:.45,h:1.5,speed:3.4,sight:16,exp:90,mora:60,lv:10},archer:{name:"\u30DC\u30B3\u5C04\u624B",hp:460,atk:230,r:.45,h:1.5,speed:3,sight:22,exp:90,mora:60,lv:10},shaman:{name:"\u30DC\u30B3\u546A\u8853\u5E2B",hp:540,atk:240,r:.45,h:1.5,speed:2.6,sight:20,exp:110,mora:70,lv:12},shield:{name:"\u76FE\u30DC\u30B3",hp:1900,atk:330,r:.7,h:2.1,speed:2.6,sight:16,exp:300,mora:200,lv:16},guardian:{name:"\u907A\u8DE1\u306E\u756A\u4EBA",hp:4200,atk:380,r:1.4,h:3.6,speed:2.2,sight:26,exp:700,mora:400,lv:20},boss:{name:"\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9",hp:26e3,atk:480,r:3.2,h:9,speed:1.6,sight:60,exp:3e3,mora:3e3,lv:25}},ro=class{constructor(t,e,i,n,r={}){this.g=t,this.type=e,this.T=Vb[e],this.el=r.el||null,this.lv=r.lv||this.T.lv,this.maxHp=Math.round(this.T.hp*(1+(this.lv-this.T.lv)*.08)*(r.hpMul||1)*(t.life?t.life.enemyHpMul():1)),this.hp=this.maxHp,this.atk=Math.round(this.T.atk*(1+(this.lv-this.T.lv)*.06)),this.pos=new R(i,t.world.groundAt(i,n),n),this.home=this.pos.clone(),this.vel=new R,this.face=Math.random()*Math.PI*2,this.state="idle",this.timer=Math.random()*2,this.cool=1+Math.random(),this.aura=null,this.frozen=0,this.electro=0,this.physShred=0,this.hitstun=0,this.dead=!1,this.deathT=0,this.res={phys:.1,wind:.1,fire:.1,water:.1,thunder:.1,ice:.1},this.el&&(this.res[this.el]=1),e==="boss"&&(this.res.phys=.3),this.r=this.T.r,this.h=this.T.h,this.group=r.group||null,this.quest=r.quest||null,this.shieldHp=e==="shield"?3:0,this.selfAuraT=0,this.attack=null,this.buildModel(),t.scene.add(this.model)}get name(){return(this.el&&this.type==="slime"?{wind:"\u98A8",fire:"\u708E",water:"\u6C34",thunder:"\u96F7",ice:"\u6C37"}[this.el]:"")+this.T.name}buildModel(){let t=this.type,e=this.g,i=this.model=new jt;if(this.parts={},t==="slime"){let n=u0[this.el]||10150010,r=new V(new Ht(.6,24,18),ht({color:n,emissive:n,emissiveI:.18}));r.material.transparent=!0,r.material.opacity=.88,r.position.y=.5,r.scale.set(1,.85,1),r.castShadow=!0,Ce(r,n,.012);let a=new V(new en(.2,0),new Qt({color:new ot(n).multiplyScalar(1.4)}));a.position.y=.5,i.add(a,r);for(let o of[-1,1]){let l=new V(new Ht(.075,10,8),new Qt({color:1710634}));l.position.set(o*.2,.62,.48),l.scale.set(1,1.3,.5);let c=new V(new Ht(.025,6,4),new Qt({color:16777215}));c.position.set(o*.2-.02,.66,.52),r.parent.add(l,c)}this.el==="fire"&&(this.parts.flame=!0),this.parts.body=r}else if(t==="boko"||t==="archer"||t==="shaman"||t==="shield"){let n=Rn("boko",e.tex,{name:"\u30DC\u30B3",skin:t==="shield"?5917244:6967360,female:!1,scale:t==="shield"?1.25:.82,eye:"eye_npc",face:{mask:!0},hair:2760216,hairStyle:{bangs:3,bangLen:.06,sideN:1,sideLen:.12,backN:6,backLen:.18,backFlare:.06,spikes:4,capBack:.6},top:6967360,legs:6967360,boots:3811872,shorts:9071162,gloves:null,sleeve:null});this.rig=n,this.anim=new ln(n),i.add(n.root);let r=new V(new Ht(.135,18,14,Math.PI/2-1,2,Math.PI*.2,Math.PI*.62),ht({color:15919832,map:Wb(t)}));r.position.set(0,.11,.004),n.j.head.add(r),Ce(r,3811872,.004);for(let o of[-1,1]){let l=new V(new Se(.03,.14,6),ht({color:15260864}));l.position.set(o*.08,.24,.02),l.rotation.z=-o*.5,n.j.head.add(l),Ce(l,3811872,.004)}let a=new V(new Ct(.14,.2,.22,10,1,!0),ht({color:10123850}));if(a.position.y=-.08,n.j.hips.add(a),Ce(a,3811866,.005),a.material.side=fe,t==="boko"||t==="shield"){let o=new jt,l=new V(new Ct(.035,.07,.75,8),ht({color:8018490}));l.position.y=.32,o.add(l),Ce(l,2759184,.004);for(let c=0;c<4;c++){let h=new V(new Se(.02,.08,4),ht({color:13682872}));h.position.set(Math.cos(c*1.57)*.07,.58,Math.sin(c*1.57)*.07),h.rotation.z=Math.PI/2,h.rotation.y=c*1.57,o.add(h)}o.rotation.x=Math.PI/2,o.position.set(0,-.06,.02),n.j.handR.add(o)}if(t==="archer"){let o=new V(new Ae(.4,.015,4,16,Math.PI),ht({color:6965802}));o.rotation.z=Math.PI/2,o.position.set(0,-.08,.05),n.j.handL.add(o)}if(t==="shaman"){let o=new V(new Ct(.02,.025,1.3,6),ht({color:5914672}));o.position.set(0,-.05,0),o.rotation.x=Math.PI/2,n.j.handR.add(o);let l=new V(new Xe(.07),new Qt({color:u0[this.el]||16777215}));l.position.set(0,-.05,.65),n.j.handR.add(l),this.parts.gem=l;let c=new V(new Ht(.16,12,10,0,Math.PI*2,0,Math.PI*.6),ht({color:this.el==="fire"?10502186:2775712}));c.position.set(0,.13,-.02),n.j.head.add(c),Ce(c,1710618,.005)}if(t==="shield"){let o=new V(new Ct(.42,.42,.08,14),ht({color:9071162,map:e.tex.planks}));o.rotation.z=Math.PI/2,o.position.set(.05,-.1,.12),n.j.handL.add(o),Ce(o,2759184,.006),this.parts.shield=o}}else if(t==="guardian"){let n=ht({color:12103840,map:e.tex.brick,shadowTint:10131648}),r=ht({color:4868698}),a=new V(new Ct(1,1.3,1.8,8),n);a.position.y=2,i.add(a),Ce(a,3815472,.01);let o=new V(new Se(.9,1,8),n);o.position.y=3.4,i.add(o),Ce(o,3815472,.01);let l=new V(new Ht(.28,16,12),new Qt({color:16752704}));l.position.set(0,2.5,1),i.add(l),this.parts.eye=l;for(let h=0;h<4;h++){let d=h/4*Math.PI*2+Math.PI/4,u=new V(new De(.4,1.4,.4),r);u.position.set(Math.cos(d)*1.1,.7,Math.sin(d)*1.1),u.rotation.set(Math.sin(d)*.3,0,-Math.cos(d)*.3),i.add(u),Ce(u,1710626,.01)}for(let h of[-1,1]){let d=new V(new De(.4,1.6,.5),n);d.position.set(h*1.4,2,0),i.add(d),Ce(d,3815472,.01),this.parts["arm"+h]=d}let c=new V(new Ae(1.02,.04,6,32),new Qt({color:16752704}));c.rotation.x=Math.PI/2,c.position.y=2.4,i.add(c),a.castShadow=o.castShadow=!0}else t==="boss"&&qb(this,i,e);i.position.copy(this.pos),i.traverse(n=>{n.isMesh&&!n.userData.outline&&(n.castShadow=!0)})}hpFrac(){return this.hp/this.maxHp}begin(t,e,i,n={}){this.attack={kind:t,t:0,dur:e,hitAt:i,done:!1,...n},this.state="attack"}update(t){let e=this.g,i=e.mover.p,n=this.T;if(this.dead)return this.deathT+=t,this.model.position.y=this.pos.y-this.deathT*.4,this.model.scale.setScalar(Math.max(.01,1-this.deathT*1.2)),this.deathT<.85;if(this.aura&&(this.aura.time-=t,this.aura.time<=0&&(this.aura=null)),this.el&&this.type==="slime"&&this.el!=="wind"&&(this.selfAuraT-=t,this.selfAuraT<=0&&(!this.aura||this.aura.el===this.el)&&(this.aura={el:this.el,gauge:1,time:9},this.selfAuraT=6)),this.physShred=Math.max(0,this.physShred-t),this.electro>0&&(this.electro-=t,this.electroTick=(this.electroTick||0)-t,this.electroTick<=0&&(this.electroTick=1,e.battle.electroTick(this))),this.frozen>0)return this.frozen-=t,this.model.position.copy(this.pos),!0;if(this.hitstun>0)return this.hitstun-=t,this.pos.addScaledVector(this.vel,t),this.vel.multiplyScalar(Math.exp(-6*t)),this.snap(),this.animate(t,0,"hit"),!0;let r=i.x-this.pos.x,a=i.z-this.pos.z,o=Math.hypot(r,a),l=i.y-this.pos.y,c=Math.atan2(r,a),h=o<n.sight&&Math.abs(l)<12&&!e.playerHidden,d=0;if(this.cool-=t,this.state==="idle"||this.state==="wander"){if(this.timer-=t,this.timer<=0&&(this.state=this.state==="idle"?"wander":"idle",this.timer=2+Math.random()*3,this.wanderDir=Math.random()*Math.PI*2),this.state==="wander"){let g=this.home.x-this.pos.x,v=this.home.z-this.pos.z;Math.hypot(g,v)>6&&(this.wanderDir=Math.atan2(g,v)),this.face=Zc(this.face,this.wanderDir,3*t),d=n.speed*.35}h&&(this.state="chase",e.onEnemyAlert(this))}else if(this.state==="chase"){this.face=Zc(this.face,c,5*t);let g=this.type==="archer"?11:this.type==="shaman"?9:this.type==="boss"?6:this.type==="guardian"?3.5:this.r+1.4;o>g+.5?d=n.speed:(this.type==="archer"||this.type==="shaman")&&o<g-3&&(d=-n.speed*.7),(o>n.sight*2.2||Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z)>45)&&(this.state="return"),this.cool<=0&&e.battle.requestAttackSlot(this)&&this.chooseAttack(o)}else if(this.state==="return"){let g=this.home.x-this.pos.x,v=this.home.z-this.pos.z;this.face=Zc(this.face,Math.atan2(g,v),4*t),d=n.speed*1.2,this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.2*t),Math.hypot(g,v)<2&&(this.state="idle")}else if(this.state==="attack"){let g=this.attack;g.t+=t,g.track&&(this.face=Zc(this.face,c,g.track*t)),g.move&&(d=g.move(g.t/g.dur)||0),!g.done&&g.t>=g.hitAt&&(g.done=!0,e.battle.enemyStrike(this,g)),g.tick&&g.tick(t,g),g.t>=g.dur&&(this.attack=null,this.state="chase",this.cool=this.attackCool||1.6+Math.random()*1.2,e.battle.releaseAttackSlot(this))}let u=Math.sin(this.face),f=Math.cos(this.face);this.vel.x+=(u*d-this.vel.x)*Math.min(1,8*t),this.vel.z+=(f*d-this.vel.z)*Math.min(1,8*t);let p=this.pos.x+this.vel.x*t,x=this.pos.z+this.vel.z*t,m=e.world.heightAt(p,x);return(m>.6||this.type==="boss"||m>=e.world.heightAt(this.pos.x,this.pos.z))&&Math.abs(m-e.world.heightAt(this.pos.x,this.pos.z))<1.2&&(this.pos.x=p,this.pos.z=x),e.world.pushOut(this.pos,this.r*.8,this.pos.y),this.snap(),this.animate(t,Math.abs(d),this.state),!0}snap(){let t=this.g.world.groundAt(this.pos.x,this.pos.z,this.pos.y);this.type==="slime"&&this.hopY?this.pos.y=t+this.hopY:this.pos.y=t,this.model.position.copy(this.pos),this.model.rotation.y=this.face}chooseAttack(t){let e=this.type,i=this.g;e==="slime"?t<6?this.begin("hop",1.3,1,{track:4,move:n=>n>.45&&n<.8?Math.min(9,t*2.2):0,range:1.6,mult:1,el:this.el&&this.el!=="wind"?this.el:null,windup:.6}):this.cool=.4:e==="boko"||e==="shield"?t<3?this.begin("swing",e==="shield"?1.5:1.25,e==="shield"?.95:.75,{track:3,move:n=>n>.5&&n<.65?3:0,range:e==="shield"?2.8:2.3,arc:.2,mult:1,windup:.6}):t<9&&Math.random()<.5?this.begin("rush",1.4,.9,{track:2,move:n=>n>.45&&n<.85?8:0,range:1.8,arc:.3,mult:.9,windup:.6,multiHit:!0}):this.cool=.3:e==="archer"?this.begin("shoot",1.6,1.05,{track:6,proj:{speed:20,mult:.85,el:null,arrow:!0},windup:.9}):e==="shaman"?this.begin("cast",2,1.25,{track:4,proj:{speed:12,mult:1,el:this.el,orb:!0,homing:1.2},windup:1.1}):e==="guardian"?(t<5?this.begin("stomp",2,1.25,{range:4.5,arc:-1,mult:1.4,windup:1.1,shake:.8}):this.begin("laser",3.4,1.4,{track:1.2,laser:!0,mult:.35,windup:1.3,tickEvery:.18}),this.attackCool=2.5):e==="boss"&&i.battle.bossChoose(this,t)}animate(t,e,i){let n=this.g.time;if(this.type==="slime"){let r=this.parts.body,a=.85+Math.sin(n*6+this.home.x)*.05,o=0;if(this.attack&&this.attack.kind==="hop"){let l=this.attack.t/this.attack.dur;l<.45?a=.85-l*.6:l<.8?(o=Math.sin((l-.45)/.35*Math.PI)*1.6,a=1):a=.7+(l-.8)*.75}else e>.2&&(o=Math.abs(Math.sin(n*7))*.25);this.hopY=o,r.scale.set(1+(.85-a)*.6,a,1+(.85-a)*.6),i==="hit"&&r.scale.set(1.15,.7,1.15);return}if(this.anim){let r={mode:"ground",speed:e,combat:this.state!=="idle"&&this.state!=="wander"};if(this.attack){let a=this.attack,o=a.t/a.dur;(a.kind==="swing"||a.kind==="rush")&&(r.attack={type:"claymore",idx:a.kind==="rush"?1:3,p:Math.min(1,o*1.2)}),a.kind==="shoot"&&(r.attack={type:"bow",idx:0,p:o}),a.kind==="cast"&&(r.cast={kind:"skill",p:o})}i==="hit"&&(r.mode="hit"),this.anim.update(t,r)}if(this.type==="guardian"){let r=this.parts.eye,a=this.attack&&this.attack.t<this.attack.windup;if(r.material.color.setHex(a?16724e3:16752704),r.scale.setScalar(a?1+Math.sin(n*30)*.15:1),this.model.position.y=this.pos.y+Math.abs(Math.sin(n*2))*.08,this.attack&&this.attack.kind==="stomp"){let o=this.attack.t/this.attack.dur;this.model.position.y+=o<.6?o*1.6:Math.max(0,.65-o)*18}}this.type==="boss"&&this.parts.update&&this.parts.update(t,this)}};function Zc(s,t,e){let i=As(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}var id={};function Wb(s){if(id[s])return id[s];let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d");e.fillStyle="#f2ead8",e.fillRect(0,0,256,256),e.fillStyle=s==="shaman"?"#3a5aa0":"#b02a20",e.beginPath(),e.moveTo(40,120),e.quadraticCurveTo(90,70,128,110),e.quadraticCurveTo(166,70,216,120),e.lineTo(200,135),e.quadraticCurveTo(160,100,128,130),e.quadraticCurveTo(96,100,56,135),e.fill(),e.fillStyle="#1a1414";for(let n of[88,168])e.beginPath(),e.ellipse(n,140,20,14,0,0,Math.PI*2),e.fill();e.fillRect(118,175,20,50),e.strokeStyle="#1a1414",e.lineWidth=6,e.beginPath(),e.moveTo(70,200),e.lineTo(186,200),e.stroke();for(let n=0;n<5;n++)e.beginPath(),e.moveTo(80+n*24,192),e.lineTo(80+n*24,208),e.stroke();let i=new cs(t);return i.colorSpace=Ue,id[s]=i,i}function qb(s,t,e){let i=ht({color:11052728,map:e.tex.darkrock,shadowTint:9078976}),n=ht({color:9089146,map:e.tex.mossrock}),r=new Qt({color:13154559}),a=(f,p,x,m,g=1,v=1,b=1,y=i,M=t)=>{let S=new V(new ds(f,1),y);return S.position.set(p,x,m),S.scale.set(g,v,b),S.rotation.set(Math.random(),Math.random(),Math.random()),S.castShadow=!0,M.add(S),Ce(S,2762808,.012),S},o=new jt;o.position.y=5.5,t.add(o),a(2.2,0,0,0,1.2,1.1,.9,i,o),a(1.4,0,1.9,-.3,1.3,.8,1,n,o);let l=a(1,0,3.3,.4,1,.9,1,i,o),c=new V(new en(.7,1),r);c.position.set(0,.2,1.9),o.add(c);let h=[];for(let f of[-1,1]){let p=new V(new Ht(.2,10,8),r);p.position.set(f*.4,3.35,1.25),o.add(p),h.push(p)}let d=[];for(let f of[-1,1]){let p=new jt;p.position.set(f*2.9,1,0),o.add(p),a(.9,0,0,0,1,1,1,i,p);let x=new jt;x.position.set(0,-.6,0),p.add(x),a(.8,0,-1.2,0,.9,1.6,.9,i,x);let m=a(1.1,0,-3,.2,1.1,1,1.1,n,x);d.push({sh:p,up:x,fist:m})}for(let f of[-1,1])a(1,f*1.3,2.4,0,1,1.8,1),a(.9,f*1.4,.8,.2,1.1,1,1.2);let u=new V(new Ae(3.2,.5,8,40),new Qt({color:14209279,transparent:!0,opacity:.25,depthWrite:!1,blending:Ge}));u.rotation.x=Math.PI/2,u.position.y=4,t.add(u),s.parts={torso:o,core:c,eyes:h,arms:d,mist:u,head:l,update(f,p){let x=p.g.time;o.position.y=5.5+Math.sin(x*1.2)*.15,u.rotation.z+=f*.6,u.scale.setScalar(1+Math.sin(x*2)*.05),c.rotation.y+=f*1.5;let m=p.phase||1;c.material.color.setHex(m===3?16751320:m===2?10148095:13154559),c.scale.setScalar(p.coreOpen?1.6+Math.sin(x*8)*.1:1);let g=p.attack;for(let v=0;v<2;v++){let b=d[v],y=v?1:-1,M=Math.sin(x*1.3+v)*.1,S=y*.15;if(g&&g.kind==="slam"&&(g.side===y||g.side===0)){let A=g.t/g.dur;M=A<.5?-2.4*(A/.5):A<.62?-2.4+(A-.5)/.12*3.6:1.2-(A-.62)*1.5}if(g&&g.kind==="sweep"){let A=g.t/g.dur;S=y*(.15+Math.sin(A*Math.PI)*1.3),M=-1}b.sh.rotation.x+=(M-b.sh.rotation.x)*Math.min(1,f*10),b.sh.rotation.z+=(S-b.sh.rotation.z)*Math.min(1,f*8)}}}}var nd=[{id:"mayor",name:"\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3",x:336,z:318,look:{hair:14211280,top:5913194,legs:3813440,apron:5913194,skin:16769740,hairStyle:{bangs:3,bangLen:.05,backN:6,backLen:.1,sideN:1,sideLen:.08}}},{id:"merchant",name:"\u5546\u4EBA\u30EB\u30AB",x:341.4,z:319.2,look:{hair:9067050,top:15259824,legs:5917242,apron:6982218,female:!0,hairStyle:{bangs:5,backN:6,backLen:.22,ponytail:{len:.35,tie:14700624}}}},{id:"child",name:"\u30DF\u30AB",x:318,z:345,scale:.7,look:{hair:15775840,top:15764106,legs:4872842,female:!0,hairStyle:{bangs:5,sideN:2,sideLen:.12,backN:5,backLen:.08}}},{id:"guard",name:"\u885B\u5175\u30AA\u30B9\u30AB\u30FC",x:252,z:336,look:{hair:4864554,top:3824266,legs:2763322,apron:3824266,hairStyle:{bangs:4,bangLen:.06,backN:6,backLen:.08}}},{id:"granny",name:"\u304A\u3070\u3042\u3055\u3093\u30A8\u30EB\u30B6",x:352,z:352,look:{hair:15263976,top:8018554,legs:5917274,apron:9071242,female:!0,hairStyle:{bangs:4,backN:6,backLen:.12,ponytail:{len:.15,tie:9071242}}}},{id:"baker",name:"\u30D1\u30F3\u5C4B\u306E\u30CF\u30F3\u30B9",x:312,z:314,look:{hair:6965802,top:16316664,legs:5917242,apron:15790320,hairStyle:{bangs:4,backN:6,backLen:.08,spikes:2}}},{id:"fisher",name:"\u91E3\u308A\u4EBA\u30CE\u30A2",x:62,z:150,look:{hair:3815994,top:5929562,legs:3820090,apron:6969914,hairStyle:{bangs:4,backN:6,backLen:.08}}},{id:"hunter",name:"\u8001\u72E9\u4EBA\u30B0\u30EC\u30F3",x:-412,z:172,look:{hair:12103840,top:5917242,legs:3813416,apron:5917242,hairStyle:{bangs:3,backN:6,backLen:.12,sideN:1}}}],Ze={intro:[["\u30DD\u30DD","\u3042\u3063\u3001\u8D77\u304D\u305F\uFF01\u3000\u306D\u3048\u306D\u3048\u3001\u5927\u4E08\u592B\uFF1F\u3000\u3053\u3093\u306A\u8349\u539F\u306E\u307E\u3093\u306A\u304B\u3067\u5BDD\u3066\u305F\u3089\u3001\u30B9\u30E9\u30A4\u30E0\u306B\u98DF\u3079\u3089\u308C\u3061\u3083\u3046\u3088\uFF01"],["\u30BD\u30E9","\u2026\u2026\u3053\u3053\u306F\u2026\u2026\uFF1F\u3000\u307C\u304F\u306F\u2026\u2026"],["\u30DD\u30DD","\u3053\u3053\u306F\u7A7A\u306B\u6D6E\u304B\u3076\u5927\u9678\u300C\u30EA\u30E5\u30DF\u30A8\u30E9\u300D\u3002\u30DD\u30DD\u306F\u30DD\u30DD\uFF01\u3000\u98A8\u306E\u7CBE\u970A\u306A\u3093\u3060\u3002\u304D\u307F\u3001\u540D\u524D\u306F\uFF1F"],["\u30BD\u30E9","\u30BD\u30E9\u2026\u2026\u3002\u305D\u308C\u3057\u304B\u601D\u3044\u51FA\u305B\u306A\u3044\u3002"],["\u30DD\u30DD","\u3075\u30FC\u3093\u2026\u2026\u3067\u3082\u3001\u304D\u307F\u306E\u307E\u308F\u308A\u3001\u98A8\u304C\u304F\u308B\u304F\u308B\u96C6\u307E\u3063\u3066\u308B\u3002\u304D\u3063\u3068\u98A8\u306E\u529B\u3092\u6301\u3063\u3066\u308B\u3093\u3060\u306D\uFF01"],["\u30DD\u30DD","\u3042\u3063\u3001\u898B\u3066\uFF01\u3000\u30B9\u30E9\u30A4\u30E0\u304C\u3053\u3063\u3061\u306B\u6765\u308B\uFF01\u3000\u5263\u3067\u8FFD\u3044\u6255\u3063\u3061\u3083\u304A\u3046\uFF01"]],slimesDone:[["\u30DD\u30DD","\u3059\u3054\u3044\u3059\u3054\u3044\uFF01\u3000\u30BD\u30E9\u3001\u3064\u3088\u30FC\u3044\uFF01"],["\u30DD\u30DD","\u6771\u306E\u307B\u3046\u306B\u300C\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3\u300D\u304C\u3042\u308B\u3088\u3002\u4EBA\u304C\u3044\u3063\u3071\u3044\u3044\u308B\u304B\u3089\u3001\u4F55\u304B\u601D\u3044\u51FA\u305B\u308B\u304B\u3082\uFF01"]],townArrive:[["\uFF1F\uFF1F\uFF1F","\u305D\u3053\u306E\u65C5\u4EBA\u3001\u4E0B\u304C\u3063\u3066\uFF01\u3000\u5E83\u5834\u306B\u9B54\u7269\u304C\u5165\u308A\u8FBC\u3093\u3060\uFF01"],["\u30A2\u30AB\u30CD","\u79C1\u306F\u30EA\u30FC\u30D5\u30A7\u30F3\u885B\u5175\u968A\u9577\u306E\u30A2\u30AB\u30CD\u3002\u2026\u2026\u3042\u3093\u305F\u3001\u5263\u304C\u4F7F\u3048\u308B\u306A\u3089\u624B\u3092\u8CB8\u3057\u3066\uFF01"],["\u30DD\u30DD","\u30BD\u30E9\u3001\u708E\u306E\u5263\u58EB\u3055\u3093\u3068\u4E00\u7DD2\u306B\u6226\u304A\u3046\uFF01\u3000\u4EF2\u9593\u306F\u300C1\u301C4\u300D\uFF08\u30B9\u30DE\u30DB\u306F\u53F3\u306E\u9854\uFF09\u3067\u5165\u308C\u66FF\u3048\u3089\u308C\u308B\u3088\uFF01"],["\u30DD\u30DD","\u6C34\u306E\u4ED8\u3044\u305F\u6575\u306B\u708E\u3092\u5F53\u3066\u308B\u3068\u300C\u84B8\u767A\u300D\uFF01\u3000\u5143\u7D20\u3092\u639B\u3051\u5408\u308F\u305B\u308B\u3068\u5927\u30C0\u30E1\u30FC\u30B8\u306A\u3093\u3060\uFF01"]],townDone:[["\u30A2\u30AB\u30CD","\u3075\u3046\u2026\u2026\u52A9\u304B\u3063\u305F\u3088\u3002\u6700\u8FD1\u3001\u9B54\u7269\u304C\u3069\u3093\u3069\u3093\u51F6\u66B4\u306B\u306A\u3063\u3066\u308B\u3002\u5317\u306E\u5C71\u304B\u3089\u6D41\u308C\u3066\u304F\u308B\u9727\u306E\u305B\u3044\u3060\u3063\u3066\u3001\u753A\u9577\u306F\u8A00\u3063\u3066\u305F\u3002"],["\u30A2\u30AB\u30CD","\u2026\u2026\u3042\u3093\u305F\u306E\u98A8\u3001\u898B\u305F\u3053\u3068\u306E\u306A\u3044\u529B\u3060\u3002\u753A\u9577\u306B\u4F1A\u3063\u3066\u307B\u3057\u3044\u3002\u79C1\u3082\u4E00\u7DD2\u306B\u884C\u304F\u3002"],["\u30DD\u30DD","\u30A2\u30AB\u30CD\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01"]],mayor:[["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u304A\u304A\u3001\u9B54\u7269\u3092\u9000\u3051\u3066\u304F\u308C\u305F\u306E\u306F\u541B\u304B\u3002\u793C\u3092\u8A00\u3046\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u767E\u5E74\u306E\u7720\u308A\u306B\u3064\u3044\u3066\u3044\u305F\u300C\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9\u300D\u304C\u76EE\u899A\u3081\u3001\u865A\u308D\u306E\u9727\u3067\u5927\u9678\u306E\u98A8\u3092\u6B62\u3081\u3088\u3046\u3068\u3057\u3066\u304A\u308B\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u5DE8\u50CF\u306E\u7D50\u754C\u3092\u89E3\u304F\u306B\u306F\u3001\u4E09\u3064\u306E\u300C\u98A8\u306E\u7960\u300D\u3092\u76EE\u899A\u3081\u3055\u305B\u306D\u3070\u306A\u3089\u3093\u3002\u6E56\u30FB\u8349\u539F\u306E\u4E18\u30FB\u5929\u98A8\u306E\u65AD\u5D16\u3058\u3083\u3002"],["\u753A\u9577\u30D9\u30EB\u30C8\u30E9\u30F3","\u307E\u305A\u306F\u93E1\u306E\u6E56\u306E\u300C\u6CC9\u306E\u795E\u6BBF\u300D\u3078\u3002\u5DEB\u5973\u30DF\u30BA\u30CF\u304C\u7960\u306E\u5B88\u308A\u624B\u3058\u3083\u3002\u2026\u2026\u3069\u3046\u304B\u3001\u3053\u306E\u753A\u3092\u983C\u3080\u3002"]],templeArrive:[["\u30DF\u30BA\u30CF","\u3060\u3001\u8AB0\u304B\u2026\u2026\uFF01\u3000\u795E\u6BBF\u304C\u9B54\u7269\u306B\u56F2\u307E\u308C\u3066\u2026\u2026\uFF01"],["\u30DD\u30DD","\u30BD\u30E9\u3001\u6025\u3044\u3067\uFF01\u3000\u5DEB\u5973\u3055\u3093\u3092\u52A9\u3051\u3088\u3046\uFF01"]],templeDone:[["\u30DF\u30BA\u30CF","\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\u2026\u2026\u3002\u79C1\u306F\u6CC9\u306E\u5DEB\u5973\u30DF\u30BA\u30CF\u3002\u3042\u306A\u305F\u306E\u98A8\u2026\u2026\u3084\u3055\u3057\u3044\u8272\u3092\u3057\u3066\u3044\u307E\u3059\u306D\u3002"],["\u30DF\u30BA\u30CF","\u6E56\u306E\u5C0F\u5CF6\u306B\u7960\u304C\u3042\u308A\u307E\u3059\u3002\u79C1\u3082\u53C2\u308A\u307E\u3059\u3002\u50B7\u3064\u3044\u305F\u3089\u3001\u6C34\u306E\u529B\u3067\u7652\u3084\u3057\u307E\u3059\u304B\u3089\u3002"],["\u30DD\u30DD","\u30DF\u30BA\u30CF\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01\u3000\u5C0F\u5CF6\u307E\u3067\u306F\u6CF3\u3044\u3067\u3044\u3053\u3046\uFF01\uFF08\u6CF3\u3050\u3068\u30B9\u30BF\u30DF\u30CA\u304C\u6E1B\u308B\u304B\u3089\u6C17\u3092\u3064\u3051\u3066\uFF09"]],shrineLake:[["\u30DD\u30DD","\u7960\u304C\u76EE\u899A\u3081\u305F\uFF01\u3000\u98A8\u304C\u6D41\u308C\u59CB\u3081\u305F\u306E\u304C\u308F\u304B\u308B\u2026\u2026\uFF01\u3000\u30B9\u30BF\u30DF\u30CA\u306E\u6700\u5927\u5024\u304C\u4E0A\u304C\u3063\u305F\u3088\uFF01"],["\u30DF\u30BA\u30CF","\u6B21\u306F\u897F\u306E\u300C\u3055\u3055\u3084\u304D\u306E\u68EE\u300D\u3078\u3002\u68EE\u306E\u72E9\u4EBA\u306A\u3089\u91CE\u55B6\u5730\u306E\u9B54\u7269\u306E\u3053\u3068\u3082\u8A73\u3057\u3044\u306F\u305A\u3067\u3059\u3002"]],forest:[["\u30E9\u30A4\u30AB","\u2026\u2026\u8AB0\u3002\u3053\u306E\u68EE\u3067\u8DB3\u97F3\u3092\u7ACB\u3066\u306A\u3044\u3067\u3002\u7372\u7269\u304C\u9003\u3052\u308B\u3002"],["\u30E9\u30A4\u30AB","\u7960\uFF1F\u3000\u5DE8\u50CF\uFF1F\u3000\u2026\u2026\u3075\u3046\u3093\u3002\u306A\u3089\u5317\u897F\u306E\u300C\u7363\u306E\u91CE\u55B6\u5730\u300D\u3092\u3064\u3076\u3057\u3066\u304D\u3066\u3002\u3042\u3044\u3064\u3089\u3001\u68EE\u306E\u52D5\u7269\u3092\u72E9\u308A\u5C3D\u304F\u3057\u3066\u308B\u3002"],["\u30E9\u30A4\u30AB","\u2026\u2026\u624B\u4F1D\u3063\u3066\u3042\u3052\u3066\u3082\u3044\u3044\u3002\u5F13\u306A\u3089\u8CA0\u3051\u306A\u3044\u3002"]],campDone:[["\u30E9\u30A4\u30AB","\u2026\u2026\u3084\u308B\u3058\u3083\u3093\u3002\u3044\u3044\u3088\u3001\u3064\u3044\u3066\u3044\u304F\u3002\u5DE8\u50CF\u306E\u76EE\u3001\u79C1\u304C\u5C04\u629C\u3044\u3066\u3042\u3052\u308B\u3002"],["\u30DD\u30DD","\u30E9\u30A4\u30AB\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F\uFF01\u3000\u3053\u308C\u30674\u4EBA\u305D\u308D\u3063\u305F\u306D\uFF01\u3000\u6B21\u306F\u8349\u539F\u306E\u4E18\u306E\u7960\u3060\u3088\uFF01"]],shrineMeadowStart:[["\u30DD\u30DD","\u7960\u306E\u8A66\u7DF4\u3060\uFF01\u3000\u307E\u308F\u308A\u306B\u6D6E\u304B\u3076\u300C\u98A8\u306E\u8F2A\u300D\u3092\u6642\u9593\u5185\u306B\u5168\u90E8\u304F\u3050\u308D\u3046\uFF01\u3000\u30B8\u30E3\u30F3\u30D7\u306F\u62BC\u3057\u7D9A\u3051\u308B\u3068\u9AD8\u304F\u8DF3\u3079\u3066\u3001\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u56DE\u8DF3\u3079\u308B\u3088\uFF01\uFF08\u4E8C\u6BB5\u30B8\u30E3\u30F3\u30D7\uFF09"]],shrineMeadow:[["\u30DD\u30DD","\u4E8C\u3064\u76EE\u306E\u7960\u3082\u76EE\u899A\u3081\u305F\uFF01\u3000\u6B8B\u308B\u306F\u6771\u306E\u300C\u5929\u98A8\u306E\u65AD\u5D16\u300D\u306E\u3066\u3063\u307A\u3093\uFF01\u3000\u5D16\u306F\u767B\u308C\u308B\u3088\uFF01"]],shrineCliffStart:[["\u30DD\u30DD","\u8A66\u7DF4\u306E\u9B54\u7269\u304C\u51FA\u3066\u304D\u305F\uFF01\u3000\u6C17\u3092\u3064\u3051\u3066\uFF01"]],shrineCliff:[["\u30DD\u30DD","\u4E09\u3064\u306E\u7960\u304C\u5168\u90E8\u76EE\u899A\u3081\u305F\uFF01\u3000\u5317\u306E\u9727\u304C\u6674\u308C\u3066\u3044\u304F\u2026\u2026\uFF01"],["\u30A2\u30AB\u30CD","\u5317\u306E\u300C\u9727\u306E\u907A\u8DE1\u300D\u3002\u5DE8\u50CF\u306F\u305D\u306E\u9802\u306B\u3044\u308B\u3002\u6E96\u5099\u304C\u3067\u304D\u305F\u3089\u884C\u3053\u3046\u3002"]],ruinsArrive:[["\u30DD\u30DD","\u907A\u8DE1\u306E\u756A\u4EBA\u3060\uFF01\u3000\u3042\u308C\u3092\u5012\u3055\u306A\u3044\u3068\u5148\u306B\u9032\u3081\u306A\u3044\u3088\uFF01"],["\u30E9\u30A4\u30AB","\u76EE\u304C\u5149\u3063\u305F\u3089\u6765\u308B\u3002\u907F\u3051\u3066\u3002"]],bossStart:[["\u9727\u306E\u5DE8\u50CF","\u2026\u2026\u98A8\u30F2\u2026\u2026\u6B62\u30E1\u30EB\u2026\u2026\u3002\u60B2\u30B7\u30DF\u30CF\u2026\u2026\u30E2\u30A6\u3001\u8981\u30E9\u30CC\u2026\u2026"],["\u30DD\u30DD","\u3057\u3083\u3079\u3063\u305F\u2026\u2026\uFF01\uFF1F\u3000\u30BD\u30E9\u3001\u6765\u308B\u3088\uFF01\u3000\u8155\u306E\u5F71\u304C\u8D64\u304F\u5149\u3063\u305F\u3089\u907F\u3051\u3066\uFF01"]],bossPhase2:[["\u30DD\u30DD","\u9727\u304C\u3082\u3063\u3068\u6FC3\u304F\u306A\u3063\u305F\uFF01\u3000\u8DB3\u5143\u306E\u6C37\u67F1\u306B\u6CE8\u610F\uFF01"]],bossPhase3:[["\u30DD\u30DD","\u80F8\u306E\u7D50\u6676\u304C\u5149\u3063\u3066\u308B\uFF01\u3000\u3042\u305D\u3053\u304C\u5F31\u70B9\u3060\uFF01\u3000\u5143\u7D20\u3092\u3076\u3064\u3051\u3066\uFF01"]],ending:[["\u9727\u306E\u5DE8\u50CF","\u2026\u2026\u30A2\u30A2\u2026\u2026\u98A8\u30AC\u2026\u2026\u30A2\u30BF\u30BF\u30AB\u30A4\u2026\u2026"],["\u30DF\u30BA\u30CF","\u9727\u304C\u2026\u2026\u307B\u3069\u3051\u3066\u3044\u304F\u3002\u3053\u306E\u5DE8\u50CF\u306F\u3001\u305A\u3063\u3068\u6614\u3001\u98A8\u306B\u7F6E\u3044\u3066\u3044\u304B\u308C\u305F\u60B2\u3057\u307F\u3060\u3063\u305F\u306E\u3067\u3059\u306D\u3002"],["\u30A2\u30AB\u30CD","\u2026\u2026\u7D42\u308F\u3063\u305F\u3001\u3093\u3060\u306A\u3002"],["\u30E9\u30A4\u30AB","\u7A7A\u3001\u9752\u3044\u3002"],["\u30DD\u30DD","\u30BD\u30E9\u2026\u2026\uFF01\u3000\u4E03\u8272\u306E\u98A8\u304C\u623B\u3063\u3066\u304D\u305F\u3088\uFF01\u3000\u307B\u3089\u3001\u5927\u9678\u3058\u3085\u3046\u306B\uFF01"],["\u30BD\u30E9","\u2026\u2026\u4ECA\u3001\u98A8\u306E\u4E2D\u3067\u3001\u8AB0\u304B\u306E\u58F0\u304C\u805E\u3053\u3048\u305F\u6C17\u304C\u3059\u308B\u3002\u300C\u7A7A\u306E\u5411\u3053\u3046\u3067\u5F85\u3063\u3066\u3044\u308B\u300D\u3063\u3066\u3002"],["\u30DD\u30DD","\u3058\u3083\u3042\u3001\u884C\u3053\u3046\u3088\uFF01\u3000\u3044\u3064\u304B\u7A7A\u306E\u5411\u3053\u3046\u307E\u3067\uFF01\u3000\u3067\u3082\u4ECA\u306F\u2026\u2026\u30EA\u30FC\u30D5\u30A7\u30F3\u3067\u304A\u795D\u3044\u3060\u306D\uFF01"]]};function d0(s){let t=s.meta.places;return[{id:"prologue",title:"\u306F\u3058\u307E\u308A\u306E\u98A8",obj:"\u30DD\u30DD\u306E\u8A71\u3092\u805E\u3053\u3046",start:e=>e.dialog(Ze.intro,()=>e.quests.advance())},{id:"slimes",title:"\u306F\u3058\u307E\u308A\u306E\u98A8",obj:"\u30B9\u30E9\u30A4\u30E0\u3092\u5012\u305D\u3046",target:()=>({x:95,z:405}),start:e=>e.spawnGroup("tut",[["slime",92,402,"wind"],["slime",99,398,"water"],["slime",96,410,"wind"]]),check:e=>e.groupDead("tut"),done:e=>e.dialog(Ze.slimesDone)},{id:"to_town",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3\u3078\u5411\u304B\u304A\u3046",target:()=>({x:238,z:330}),check:e=>e.near(238,330,22)},{id:"town_fight",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u5E83\u5834\u306E\u9B54\u7269\u3092\u5012\u305D\u3046",target:()=>({x:330,z:330}),start:e=>{e.unlock("akane"),e.spawnGroup("plaza",[["slime",322,322,"water"],["slime",338,322,"water"],["slime",330,340,"fire"],["slime",318,338,"ice"],["slime",342,338,"water"]]),e.dialog(Ze.townArrive)},check:e=>e.groupDead("plaza"),done:e=>e.dialog(Ze.townDone)},{id:"mayor",title:"\u98A8\u8ECA\u306E\u753A",obj:"\u753A\u9577\u306B\u8A71\u3092\u805E\u3053\u3046",target:()=>Xb(s,"mayor"),check:e=>e.flags.talkedMayor},{id:"temple",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u93E1\u306E\u6E56\u30FB\u6CC9\u306E\u795E\u6BBF\u3078\u5411\u304B\u304A\u3046",target:()=>({x:-150,z:60}),check:e=>e.near(-150,60,30)},{id:"temple_fight",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u795E\u6BBF\u3092\u8972\u3046\u9B54\u7269\u3092\u5012\u305D\u3046",target:()=>({x:-150,z:60}),start:e=>{e.spawnGroup("temple",[["boko",-140,72],["boko",-160,76],["boko",-136,48],["archer",-165,40]]),e.dialog(Ze.templeArrive)},check:e=>e.groupDead("temple"),done:e=>{e.unlock("mizuha"),e.dialog(Ze.templeDone)}},{id:"lake_shrine",title:"\u6CC9\u306E\u5DEB\u5973",obj:"\u6E56\u306E\u5C0F\u5CF6\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:40,z:-30}),check:e=>e.flags.sh_lake,done:e=>e.dialog(Ze.shrineLake)},{id:"forest",title:"\u68EE\u306E\u72E9\u4EBA",obj:"\u3055\u3055\u3084\u304D\u306E\u68EE\u306E\u72E9\u4EBA\u3092\u63A2\u305D\u3046",target:()=>({x:-420,z:165}),check:e=>e.near(-418,166,10),done:e=>e.dialog(Ze.forest)},{id:"camp",title:"\u68EE\u306E\u72E9\u4EBA",obj:"\u7363\u306E\u91CE\u55B6\u5730\u306E\u9B54\u7269\u3092\u4E00\u6383\u3057\u3088\u3046",target:()=>({x:-380,z:-300}),start:e=>e.spawnGroup("camp",[["boko",-372,-292],["boko",-388,-296],["boko",-380,-310],["archer",-374,-306,null,"tower"],["archer",-392,-286],["shaman",-384,-304,"fire"],["shield",-378,-300]]),check:e=>e.groupDead("camp"),done:e=>{e.unlock("raika"),e.dialog(Ze.campDone)}},{id:"meadow_shrine",title:"\u4E09\u3064\u306E\u7960",obj:"\u8349\u539F\u306E\u4E18\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:-130,z:380}),check:e=>e.flags.sh_meadow,done:e=>e.dialog(Ze.shrineMeadow)},{id:"cliff_shrine",title:"\u4E09\u3064\u306E\u7960",obj:"\u5929\u98A8\u306E\u65AD\u5D16\u306E\u9802\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3088\u3046",target:()=>({x:480,z:-190}),check:e=>e.flags.sh_cliff,done:e=>e.dialog(Ze.shrineCliff)},{id:"ruins",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u9727\u306E\u907A\u8DE1\u3078\u5411\u304B\u304A\u3046",target:()=>({x:25,z:-385}),check:e=>e.near(25,-385,30),done:e=>{e.spawnGroup("ruins",[["guardian",10,-400],["guardian",40,-395]]),e.dialog(Ze.ruinsArrive)}},{id:"ruins_fight",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u907A\u8DE1\u306E\u756A\u4EBA\u3092\u5012\u305D\u3046",target:()=>({x:25,z:-398}),check:e=>e.groupDead("ruins")},{id:"boss",title:"\u9727\u306E\u5DE8\u50CF",obj:"\u9802\u306E\u95D8\u6280\u5834\u3067\u9727\u306E\u5DE8\u50CF\u3092\u93AE\u3081\u3088\u3046",target:()=>({x:0,z:-500}),start:e=>e.prepareBoss(),check:e=>e.flags.bossDown},{id:"ending",title:"\u4E03\u5F69\u306E\u98A8",obj:"",start:e=>e.playEnding()}]}function Xb(s,t){let e=nd.find(i=>i.id===t);return{x:e.x,z:e.z}}var Rs={cat:{title:"\u8FF7\u5B50\u306E\u30CB\u30E3\u30C3\u30BF",giver:"child",reward:{mora:300,exp:400}},letter:{title:"\u753A\u9577\u306E\u624B\u7D19",giver:"mayor",reward:{mora:250,exp:300}},slime_hunt:{title:"\u65AD\u5D16\u306E\u30B9\u30E9\u30A4\u30E0\u9000\u6CBB",giver:"guard",reward:{mora:400,exp:600}},feathers:{title:"\u68EE\u306E\u9DF9\u306E\u7FBD\u6839",giver:"hunter",reward:{mora:300,exp:500}},boko_lake:{title:"\u6E56\u7554\u306E\u30DC\u30B3",giver:"fisher",reward:{mora:400,exp:600}}},f0={merchant:["\u3044\u3089\u3063\u3057\u3083\u3044\uFF01\u3000\u65C5\u306E\u304A\u3068\u3082\u306B\u6599\u7406\u306F\u3044\u304B\u304C\uFF1F"],granny:["\u6614\u306F\u306D\u3048\u3001\u4E03\u8272\u306E\u98A8\u304C\u3053\u306E\u753A\u306E\u98A8\u8ECA\u3092\u56DE\u3057\u3066\u3044\u305F\u3093\u3060\u3088\u3002\u4ECA\u306E\u98A8\u306F\u2026\u2026\u5C11\u3057\u3055\u3073\u3057\u3044\u8272\u3060\u306D\u3048\u3002","\u5317\u306E\u5C71\u306B\u306F\u8FD1\u3065\u304F\u3093\u3058\u3083\u306A\u3044\u3088\u3002\u9727\u306E\u4E2D\u3067\u3001\u5927\u304D\u306A\u5F71\u304C\u6CE3\u3044\u3066\u3044\u308B\u3063\u3066\u8A71\u3055\u3002"],baker:["\u713C\u304D\u305F\u3066\u306E\u98A8\u8ECA\u30D1\u30A4\uFF01\u3000\u2026\u2026\u3068\u8A00\u3044\u305F\u3044\u3068\u3053\u308D\u3060\u304C\u3001\u5C0F\u9EA6\u304C\u5C4A\u304B\u306A\u304F\u3066\u306D\u3002\u9B54\u7269\u306E\u305B\u3044\u3055\u3002","\u98A8\u306E\u7960\u304C\u76EE\u899A\u3081\u305F\u3089\u3001\u307E\u305F\u5C0F\u9EA6\u7551\u306B\u98A8\u304C\u623B\u308B\u3093\u3060\u304C\u306A\u3042\u3002"]};var Jc=class{constructor(t){this.g=t,this.steps=d0(t.world),this.step=0,this.started=!1,this.side={},this.track="main"}get cur(){return this.steps[this.step]}get mainDone(){return this.step>=this.steps.length-1&&this.started}current(){let t=this.g;if(this.track!=="main"&&this.side[this.track]&&this.side[this.track]!=="done")return this.sideInfo(this.track);let e=this.cur;if(e&&e.obj)return{title:e.title,obj:e.obj,target:e.target?e.target():null};let i=Object.keys(this.side).find(n=>this.side[n]!=="done");return i?this.sideInfo(i):null}sideInfo(t){let e=this.g,i=Rs[t],n=this.side[t],r={title:i.title,obj:"",target:null},a=e.npcPos(i.giver);return n==="ready"?(r.obj=`${e.npcName(i.giver)}\u306B\u5831\u544A\u3057\u3088\u3046`,r.target=a):t==="cat"?(r.obj="\u98A8\u8ECA\u306E\u305D\u3070\u3067\u8FF7\u5B50\u306E\u732B\u3092\u63A2\u305D\u3046",r.target={x:250,z:268}):t==="letter"?(r.obj="\u6E56\u7554\u306E\u91E3\u308A\u4EBA\u30CE\u30A2\u306B\u624B\u7D19\u3092\u5C4A\u3051\u3088\u3046",r.target=e.npcPos("fisher")):t==="slime_hunt"?(r.obj="\u65AD\u5D16\u306E\u3075\u3082\u3068\u306E\u30B9\u30E9\u30A4\u30E0\u3092\u5012\u305D\u3046",r.target={x:410,z:-60}):t==="feathers"?(r.obj=`\u68EE\u3067\u9DF9\u306E\u7FBD\u6839\u3092\u96C6\u3081\u3088\u3046\uFF08${e.flags.feathers||0}/3\uFF09`,r.target=e.nextFeather()):t==="boko_lake"&&(r.obj="\u6E56\u306E\u5317\u897F\u306E\u30DC\u30B3\u3092\u5012\u305D\u3046",r.target={x:-185,z:-60}),r}update(){let t=this.g,e=this.cur;if(!(!e||t.dialogOpen)){if(!this.started){this.started=!0,e.start&&e.start(t);return}e.check&&e.check(t)&&this.advance()}}advance(){let t=this.g,e=this.cur;e.done&&e.done(t),this.step=Math.min(this.steps.length-1,this.step+1),this.started=!1;let i=this.cur;i&&i.obj&&i.title!==e.title&&t.hud.showBanner(i.title,"\u65B0\u3057\u3044\u4F9D\u983C","quest"),t.audio?.sfx("quest"),t.save()}startSide(t){this.side[t]||(this.side[t]="active",this.track=t,this.g.hud.showBanner(Rs[t].title,"\u4F9D\u983C\u3092\u53D7\u3051\u305F","quest"),this.g.onSideStart&&this.g.onSideStart(t))}readySide(t){this.side[t]==="active"&&(this.side[t]="ready",this.g.notify(`\u300C${Rs[t].title}\u300D \u5831\u544A\u3057\u3088\u3046`,"wind"))}finishSide(t){let e=this.g,i=Rs[t];this.side[t]="done",this.track===t&&(this.track="main"),e.reward(i.reward.mora,i.reward.exp,`\u4F9D\u983C\u300C${i.title}\u300D\u9054\u6210`),e.save()}save(){return{step:this.step,side:this.side,track:this.track}}load(t){t&&(this.step=Math.min(t.step||0,this.steps.length-1),this.side=t.side||{},this.track=t.track||"main",this.started=!1)}};var ad=null;function od(s){let t=[];return s.traverse(e=>{e.isMesh&&!e.userData.outline&&t.push(e)}),t}function g0(s){ad=s}function sd(s){let t=s>>>0||1;return()=>(t=t*1664525+1013904223>>>0)/4294967296}function _e(s,t,e,i=2.5){let n=new De(s,t,e),r=n.attributes.uv,a=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let o=0;o<6;o++)for(let l=0;l<4;l++){let c=o*4+l;r.setXY(c,r.getX(c)*a[o][0]/i,r.getY(c)*a[o][1]/i)}return n}function p0(s,t,e,i,n,r,a,o){let l=[i[0]-e[0],i[1]-e[1],i[2]-e[2]],c=[r[0]-e[0],r[1]-e[1],r[2]-e[2]],h=[l[1]*c[2]-l[2]*c[1],l[2]*c[0]-l[0]*c[2],l[0]*c[1]-l[1]*c[0]],u=h[0]*o[0]+h[1]*o[1]+h[2]*o[2]<0?[[e,a[0]],[r,a[3]],[n,a[2]],[e,a[0]],[n,a[2]],[i,a[1]]]:[[e,a[0]],[i,a[1]],[n,a[2]],[e,a[0]],[n,a[2]],[r,a[3]]];for(let[f,p]of u)s.push(...f),t.push(...p)}function rd(s,t,e,i=.35){let n=s/2+i,r=t/2+i,a=e*(r/(t/2)),o=a-e,l=[],c=[],h=Math.hypot(r,a)/1.6,d=2*n/1.6;p0(l,c,[-n,-o,-r],[n,-o,-r],[n,e,0],[-n,e,0],[[0,0],[d,0],[d,h],[0,h]],[0,r,-a]),p0(l,c,[-n,-o,r],[n,-o,r],[n,e,0],[-n,e,0],[[0,0],[d,0],[d,h],[0,h]],[0,r,a]);let u=new te;return u.setAttribute("position",new Lt(l,3)),u.setAttribute("uv",new Lt(c,2)),u.computeVertexNormals(),u}function m0(s,t,e){let i=s/2,n=t/2,r=[-i,0,-n,-i,0,n,-i,e,0,i,0,n,i,0,-n,i,e,0],a=[0,0,t/2.5,0,n/2.5,e/2.5,0,0,t/2.5,0,n/2.5,e/2.5],o=new te;return o.setAttribute("position",new Lt(r,3)),o.setAttribute("uv",new Lt(a,2)),o.computeVertexNormals(),o}function Ft(s,t,e,i,n=0,r=1,a=1,o=1){let l=new de().compose(new R(t,e,i),new gi().setFromEuler(new xi(0,n,0)),new R(r,a,o));return s.clone().applyMatrix4(l)}var Kc=class{constructor(t,e,i,n){this.scene=t,this.w=e,this.tex=i,this.g=n,this.buckets={},this.mats={plaster:ht({color:16774888,map:i.plaster,shadowTint:13156576,tri:2.6}),plaster2:ht({color:16773320,map:i.plaster,shadowTint:13156576,tri:2.6}),plaster3:ht({color:16777215,map:i.plaster,shadowTint:13156576,tri:2.6}),roof:ht({color:16777215,map:i.rooftile,shadowTint:12624064}),roof2:ht({color:13154559,map:i.rooftile,shadowTint:10526928}),slate:ht({color:16777215,map:i.slate,shadowTint:10528976}),wood:ht({color:11044968,map:i.wood,tri:1.4}),planks:ht({color:16777215,map:i.planks,tri:1.8}),brick:ht({color:16774376,map:i.brick,shadowTint:12103888,tri:2.2}),stone:ht({color:15789288,map:i.cobble,shadowTint:11579600,tri:2.4}),mossrock:ht({color:16777215,map:i.mossrock,tri:2.5}),dark:ht({color:3811876}),window:ht({color:2767450,emissive:0}),cloth:ht({color:14174778,detail:i.cloth_detail}),cloth2:ht({color:3836632,detail:i.cloth_detail}),cloth3:ht({color:15781968,detail:i.cloth_detail}),white:ht({color:16316671,map:i.plaster,tri:3}),blueRoof:ht({color:6988008,map:i.slate}),gold:ht({color:15778906}),fur:ht({color:10123850,map:i.leather_detail,tri:1.2}),leaf:ht({color:6989898})},this.interactables=[],this.animated=[],this.lamps=[],this.buildTown(330,330),this.buildTemple(-150,60),this.buildHut(-420,160),this.buildCamp(-380,-300),this.buildRuins(),this.buildBridges(),this.flush()}add(t,e){var i;((i=this.buckets)[t]||(i[t]=[])).push(e)}flush(){for(let[t,e]of Object.entries(this.buckets)){let i=e.map(a=>{let o=a.index?a.toNonIndexed():a;o.attributes.uv||o.setAttribute("uv",new Lt(new Float32Array(o.attributes.position.count*2),2));for(let l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);return o.attributes.normal||o.computeVertexNormals(),o}),n=an(i),r=new V(n,this.mats[t]);r.castShadow=!0,r.receiveShadow=!0,["window","gold"].includes(t)||Ce(r,t==="plaster"||t==="white"?9075306:this.mats[t].color.getHex(),.012),this.scene.add(r)}this.buckets={}}ground(t,e){return this.w.heightAt(t,e)}house(t,e,i,n,r,a,o={}){let l=Math.min(this.ground(t-n/2,e-r/2),this.ground(t+n/2,e+r/2),this.ground(t,e))-.3,c=a+.3,h=o.rise||n*.42;this.add("stone",Ft(_e(n+.2,.7,r+.2),t,l+.35,e,i));let d=o.wall||"plaster";this.add(d,Ft(_e(n,c,r),t,l+c/2+.2,e,i));let u=[];for(let p of[-1,1])for(let x of[-1,1])u.push(Ft(_e(.22,c,.22,1),p*(n/2),l+c/2+.2,x*(r/2)));u.push(Ft(_e(n+.1,.2,.22,1),0,l+c*.55,r/2),Ft(_e(n+.1,.2,.22,1),0,l+c*.55,-r/2)),u.push(Ft(_e(.22,.2,r+.1,1),n/2,l+c*.55,0),Ft(_e(.22,.2,r+.1,1),-n/2,l+c*.55,0));for(let p of u)this.add("wood",Ft(p,t,0,e,i));let f=rd(n,r,h,.45);this.add(o.slate?"slate":o.roof||"roof",Ft(f,t,l+c+.2,e,i)),this.add(d,Ft(m0(n,r,h),t,l+c+.2,e,i)),this.add("wood",Ft(_e(1.1,1.9,.12,1).translate(0,.95,r/2+.06),t,l+.2,e,i));for(let p of[-1,1])n>4&&this.add("window",Ft(_e(.8,.9,.1,1).translate(p*n*.3,c*.45,r/2+.05),t,l+.2,e,i)),this.add("window",Ft(_e(.1,.9,.8,1).translate(p*(n/2+.05),c*.45,0),t,l+.2,e,i)),n>4&&this.add("planks",Ft(_e(.95,.12,.3,1).translate(p*n*.3,c*.45-.55,r/2+.15),t,l+.2,e,i));if(c>5)for(let p of[-1,1])this.add("window",Ft(_e(.7,.8,.1,1).translate(p*n*.25,c*.8,r/2+.05),t,l+.2,e,i));return o.chimney!==!1&&this.add("brick",Ft(_e(.7,h+1.2,.7).translate(n*.25,c+.2+h*.4,-r*.2),t,l,e,i)),this.w.addCollider({box:!0,x:t,z:e,hw:n/2+.05,hd:r/2+.05,rot:i,top:l+c+.2+h*.5,bottom:l-1}),l+c}windmill(t,e,i){let n=this.ground(t,e)-.3,r=new Ct(2.2,3.2,11,12,1,!0),a=r.attributes.uv;for(let d=0;d<a.count;d++)a.setXY(d,a.getX(d)*7,a.getY(d)*4.4);this.add("plaster",Ft(r,t,n+5.5,e)),this.add("stone",Ft(new Ct(3.4,3.5,1,12),t,n+.5,e));let o=new Se(2.8,3.2,12);o.translate(0,1.6,0),this.add("roof",Ft(o,t,n+11,e)),this.add("wood",Ft(_e(1.2,2,.15,1).translate(0,1,3.15),t,n,e,i));let l=new jt;l.position.set(t+Math.sin(i)*2.6,n+11.5,e+Math.cos(i)*2.6),l.rotation.y=i;let c=new V(new Ct(.35,.35,.6,10),this.mats.wood);c.rotation.x=Math.PI/2,l.add(c);let h=new jt;l.add(h);for(let d=0;d<4;d++){let u=new jt;u.rotation.z=d*Math.PI/2,h.add(u);let f=new V(new De(.22,7.5,.18),this.mats.wood);f.position.y=3.9,u.add(f);let p=new V(new ri(1.8,6,2,6),this.mats.white);p.position.set(.95,4.3,.12),p.material.side=fe,u.add(p);for(let x=0;x<5;x++){let m=new V(new De(1.9,.08,.08),this.mats.wood);m.position.set(.95,1.6+x*1.3,.16),u.add(m)}}od(l).forEach(d=>{d.castShadow=!0,Ce(d,5914672,.01)}),this.scene.add(l),this.animated.push(d=>{h.rotation.z+=d*.6}),this.w.addCollider({x:t,z:e,r:3.1,top:n+11,bottom:n-1})}buildTown(t,e){let i=sd(77),n=this.ground(t,e);this.add("stone",Ft(new Ct(5,5.3,.8,24),t,n+.2,e)),this.add("brick",Ft(new Ct(1.2,1.5,2.2,12),t,n+1.3,e));let r=new V(new Ct(4.6,4.6,.1,24),new Ke({color:7000296,emissive:1724528,transparent:!0,opacity:.85}));r.position.set(t,n+.62,e),this.scene.add(r);let a=new V(new Xe(.9),new Ke({color:10483944,emissive:3852456,emissiveIntensity:.9}));a.position.set(t,n+3.6,e),this.scene.add(a),this.animated.push((c,h)=>{a.rotation.y+=c,a.position.y=n+3.6+Math.sin(h*1.5)*.15}),this.w.addCollider({x:t,z:e,r:5.2,top:n+.6,bottom:n-1}),this.fountain={x:t,z:e,y:n};let o=[];for(let c=0;c<3;c++){let h=22+c*21,d=8+c*5;for(let u=0;u<d;u++){let f=u/d*Math.PI*2+c*.4+(i()-.5)*.12,p=(f%(Math.PI/2)+Math.PI/2)%(Math.PI/2);if(p<.22||p>Math.PI/2-.22)continue;let x=t+Math.cos(f)*h,m=e+Math.sin(f)*h;if(Math.hypot(x-t,m-e)>92)continue;let g=5+i()*3,v=4.5+i()*2.5,b=3.4+i()*3.2,y=-f+Math.PI/2+Math.PI,M=i();this.house(x,m,y,g,v,b,{slate:M<.22,roof:M>.85?"roof2":"roof",wall:["plaster","plaster2","plaster3"][Math.floor(i()*3)]}),o.push({x,z:m})}}this.townHouses=o;for(let[c,h]of[[0,2.4],[1,3.6],[2,5.2]])this.windmill(t+Math.cos(h)*98,e+Math.sin(h)*98,h+Math.PI/2+c);let l=(c,h,d,u)=>{let f=this.ground(c,h);for(let x of[-1,1])for(let m of[-1,1])this.add("wood",Ft(_e(.15,2.4,.15,1),c+x*1.3,f+1.2,h+m*.9,0));let p=rd(2.8,2.2,.6,.2);this.add(u,Ft(p,c,f+2.4,h,d)),this.add("planks",Ft(_e(2.6,.12,1.4,1),c,f+.95,h,d)),this.add("wood",Ft(_e(.6,.5,.5,1),c+.8,f+1.25,h,d)),this.add("cloth3",Ft(new Ht(.22,8,6),c-.6,f+1.2,h)),this.w.addCollider({box:!0,x:c,z:h,hw:1.4,hd:1,rot:d,top:f+1,bottom:f-1})};l(t+12,e-9,.3,"cloth"),l(t-12,e-9,-.3,"cloth2"),l(t+13,e+9,-.3,"cloth3"),l(t-12,e+10,.4,"cloth");for(let c=0;c<16;c++){let h=c/16*Math.PI*2,d=c%2?14:34,u=t+Math.cos(h)*d,f=e+Math.sin(h)*d,p=this.ground(u,f);this.add("dark",Ft(new Ct(.08,.12,3.2,6),u,p+1.6,f));let x=new V(new Ht(.28,10,8),new Qt({color:16767120}));x.position.set(u,p+3.3,f),this.scene.add(x),this.lamps.push(x)}for(let c of[Math.PI,Math.PI*1.5]){let h=t+Math.cos(c)*96,d=e+Math.sin(c)*96,u=this.ground(h,d)-.3,f=-c;for(let x of[-1,1]){let m=h+Math.cos(c+Math.PI/2)*x*4.5,g=d+Math.sin(c+Math.PI/2)*x*4.5;this.add("brick",Ft(_e(1.6,7,1.6),m,u+3.5,g,f)),this.add("roof",Ft(new Se(1.4,1.6,4).rotateY(Math.PI/4),m,u+7.8,g,f)),this.w.addCollider({box:!0,x:m,z:g,hw:.85,hd:.85,rot:f,top:u+7,bottom:u-1})}this.add("wood",Ft(_e(10.5,.8,.6,1),h,u+6.4,d,f+Math.PI/2));let p=new V(new ri(1.4,2.6),this.mats.cloth2);p.position.set(h,u+4.7,d),p.rotation.y=f+Math.PI/2,p.material.side=fe,this.scene.add(p)}for(let c=0;c<40;c++){let h=i()*Math.PI*2,d=8+i()*80,u=t+Math.cos(h)*d,f=e+Math.sin(h)*d,p=this.ground(u,f);this.w.nearColliders(u,f,1.5).some(x=>this.w.insideCollider(x,u,f,1.2))||(i()<.5?(this.add("wood",Ft(new Ct(.45,.4,1,10),u,p+.5,f)),this.w.addCollider({x:u,z:f,r:.5,top:p+1})):(this.add("planks",Ft(_e(.9,.9,.9,1),u,p+.45,f,i()*3)),this.w.addCollider({x:u,z:f,r:.6,top:p+.9})))}}buildTemple(t,e){let i=this.ground(t,e);this.add("white",Ft(new Ct(9,9.5,1.2,24),t,i+.3,e));for(let r=0;r<8;r++){let a=r/8*Math.PI*2;this.add("white",Ft(new Ct(.45,.5,6,10),t+Math.cos(a)*6.5,i+3.8,e+Math.sin(a)*6.5)),this.w.addCollider({x:t+Math.cos(a)*6.5,z:e+Math.sin(a)*6.5,r:.55,top:i+6.8})}this.add("white",Ft(new Ct(7.4,7.4,.6,24),t,i+7.1,e)),this.add("blueRoof",Ft(new Se(8.2,4,24),t,i+9.4,e)),this.add("gold",Ft(new Xe(.6),t,i+11.8,e));let n=new V(new Ct(3,3,.1,24),new Ke({color:8052976,emissive:2788016,emissiveIntensity:.5,transparent:!0,opacity:.9}));n.position.set(t,i+.95,e),this.scene.add(n),this.w.addCollider({x:t,z:e,r:9.3,top:i+.9,bottom:i-2}),this.temple={x:t,z:e,y:i+.9}}buildHut(t,e){let i=this.ground(t,e)-.2;this.add("planks",Ft(_e(6,3.4,5),t,i+1.7,e,.4)),this.add("slate",Ft(rd(6,5,2.4,.5),t,i+3.4,e,.4)),this.add("planks",Ft(m0(6,5,2.4),t,i+3.4,e,.4)),this.add("wood",Ft(_e(1,1.9,.12,1).translate(0,.95,2.56),t,i,e,.4)),this.w.addCollider({box:!0,x:t,z:e,hw:3.05,hd:2.55,rot:.4,top:i+4.6,bottom:i-1}),this.add("wood",Ft(new Ct(.2,.2,2,6).rotateZ(Math.PI/2),t+4,i+.3,e+1));let n=new V(new Ct(.6,.6,.15,16),this.mats.cloth);n.rotation.x=Math.PI/2,n.position.set(t-5,i+1.5,e+3),this.scene.add(n),this.hut={x:t,z:e,y:i}}buildCamp(t,e){let i=sd(91);for(let a=0;a<4;a++){let o=a/4*Math.PI*2+.3,l=t+Math.cos(o)*12,c=e+Math.sin(o)*12,h=this.ground(l,c);this.add("fur",Ft(new Se(3,4,7,1,!0),l,h+2,c,o)),this.add("wood",Ft(new Ct(.08,.08,5,5),l,h+2.5,c)),this.w.addCollider({x:l,z:c,r:2.6,top:h+2.5})}for(let a=0;a<46;a++){let o=a/46*Math.PI*2;if(Math.abs(Math.sin(o-.8))<.12)continue;let l=t+Math.cos(o)*24,c=e+Math.sin(o)*24,h=this.ground(l,c),d=new Ct(0,.22,3.4+i(),6);d.translate(0,1.6,0),this.add("wood",Ft(d,l,h,c,0,1,1,1)),this.w.addCollider({x:l,z:c,r:.45,top:h+3.3})}let n=this.ground(t+6,e-6);for(let a of[-1,1])for(let o of[-1,1])this.add("wood",Ft(_e(.25,6,.25,1),t+6+a,n+3,e-6+o));this.add("planks",Ft(_e(2.8,.25,2.8,1),t+6,n+6,e-6)),this.w.addCollider({box:!0,x:t+6,z:e-6,hw:1.4,hd:1.4,top:n+6.1,bottom:n+5.6});let r=this.ground(t,e);for(let a=0;a<6;a++)this.add("wood",Ft(new Ct(.1,.1,1.4,5).rotateZ(1.2).rotateY(a),t,r+.3,e));this.campfire={x:t,y:r+.4,z:e},this.camp={x:t,z:e,y:r}}buildRuins(){let t=sd(55),e=(n,r,a,o)=>{let l=this.ground(n,r)-.4;this.add("mossrock",Ft(_e(1.4,.6,1.4),n,l+.3,r)),this.add("brick",Ft(new Ct(.55,.6,a,10),n,l+.6+a/2,r)),o||this.add("mossrock",Ft(_e(1.5,.5,1.5),n,l+.85+a,r)),this.w.addCollider({x:n,z:r,r:.75,top:l+a+1})};for(let n=0;n<26;n++){let r=t()*Math.PI*2,a=30+t()*110,o=Math.cos(r)*a,l=-420+Math.sin(r)*a*.7;this.w.slopeAt(o,l)>.6||e(o,l,3+t()*6,t()<.5)}for(let[n,r]of[[30,-380],[10,-440]]){let a=this.ground(n,r);for(let o of[-1,1])e(n+o*4,r,7,!1);this.add("brick",Ft(_e(10,1.2,1.6),n,a+8.3,r))}let i=this.ground(0,-500);this.add("stone",Ft(new Ct(42,43,1.2,48),0,i-.3,-500));for(let n=0;n<14;n++){let r=n/14*Math.PI*2;e(Math.cos(r)*40,-500+Math.sin(r)*40,8+n%3*3,n%4===1)}this.w.addCollider({x:0,z:-500,r:43,top:i+.3,bottom:i-3}),this.arena={x:0,z:-500,y:i+.3}}buildBridges(){for(let t of this.w.meta.roads)for(let e=0;e<t.length-1;e++){let[i,n]=t[e],[r,a]=t[e+1],o=Math.hypot(r-i,a-n),l=-1,c=-1;for(let g=0;g<=o;g+=1){let v=g/o,b=i+(r-i)*v,y=n+(a-n)*v;this.w.heightAt(b,y)<.8&&(l<0&&(l=g),c=g)}if(l<0||c-l>40)continue;let h=Math.max(0,l-3),d=Math.min(o,c+3),u=i+(r-i)*(h+d)/2/o,f=n+(a-n)*(h+d)/2/o,p=d-h,x=Math.atan2(r-i,a-n),m=Math.max(this.w.heightAt(i+(r-i)*h/o,n+(a-n)*h/o),this.w.heightAt(i+(r-i)*d/o,n+(a-n)*d/o),1.2)+.3;this.add("planks",Ft(_e(3.2,.3,p),u,m,f,x));for(let g of[-1,1]){this.add("wood",Ft(_e(.15,.9,p,1).translate(g*1.55,.6,0),u,m,f,x));for(let v=0;v<=p;v+=3)this.add("wood",Ft(_e(.25,2.4,.25,1).translate(g*1.55,-.6,-p/2+v),u,m,f,x))}this.w.addCollider({box:!0,x:u,z:f,hw:1.6,hd:p/2,rot:x,top:m+.15,bottom:m-.5,noCam:!0,climbable:!1})}}update(t,e,i){for(let n of this.animated)n(t,e);for(let n of this.lamps)n.material.color.setHex(i?16767120:10127984)}};function x0(){let s=new jt,t=ht({color:15262960,shadowTint:11053264}),e=new V(new Ct(1.4,1.7,.6,8),t);e.position.y=.3,s.add(e);let i=new V(new Ct(.35,.5,3.2,8),t);i.position.y=2.1,s.add(i);let n=new V(new Ae(.75,.08,6,24),ht({color:15778906}));n.position.y=4.4,s.add(n);let r=new V(new Xe(.45),new Qt({color:9082536}));r.position.y=4.4,s.add(r);for(let a of[e,i,n])a.castShadow=!0,Ce(a,4868714,.01);return s.userData={gem:r,ring:n,set(a){r.material.color.setHex(a?8382719:9082536)}},s}function v0(){let s=new jt,t=ht({color:14213328,shadowTint:10531016}),e=new V(new Ct(4,4.4,.8,6),t);e.position.y=.4,s.add(e);for(let r=0;r<3;r++){let a=r/3*Math.PI*2,o=new V(new De(.7,4.2,.7),t);o.position.set(Math.cos(a)*3,2.9,Math.sin(a)*3),o.rotation.y=-a,s.add(o);let l=new V(new Se(.6,.9,4),ht({color:5949608}));l.position.set(Math.cos(a)*3,5.4,Math.sin(a)*3),s.add(l)}let i=new V(new en(.9,1),new Qt({color:6978176}));i.position.y=3.2,s.add(i);let n=new V(new Ae(1.5,.05,6,32),new Qt({color:10481888,transparent:!0,opacity:0}));return n.position.y=3.2,s.add(n),od(s).forEach(r=>{r!==i&&r!==n&&(r.castShadow=!0,Ce(r,3820106,.01))}),s.userData={core:i,halo:n,set(r){i.material.color.setHex(r?9437168:6978176),n.material.opacity=r?.8:0}},s}function Qc(s){let t=new jt,e=ht({color:s?9067066:10121288}),i=ht({color:s?16306288:13154464}),n=new V(new De(1.1,.6,.7),e);n.position.y=.3,t.add(n);let r=new jt;r.position.set(0,.6,-.35),t.add(r);let a=new V(new Ct(.35,.35,1.1,12,1,!1,0,Math.PI),e);a.rotation.z=Math.PI/2,a.position.set(0,0,.35),r.add(a);for(let c of[-.4,.4]){let h=new V(new De(.1,.65,.74),i);h.position.set(c,.3,0),t.add(h)}let o=new V(new De(.18,.2,.06),i);o.position.set(0,.55,.37),t.add(o),od(t).forEach(c=>{c.castShadow=!0,Ce(c,3810320,.008)});let l=new On(new Mn({map:ad,color:s?16767088:16773312,transparent:!0,opacity:.3,blending:Ge,depthWrite:!1}));return l.scale.set(1.6,1.6,1),l.position.y=.6,t.add(l),t.userData={lidPivot:r,glow:l},t}function ld(){let s=new jt,t=new V(new Xe(.32),new Qt({color:10485744}));t.scale.set(.8,1.3,.8),s.add(t);let e=new On(new Mn({map:ad,color:7336144,transparent:!0,opacity:.55,blending:Ge,depthWrite:!1}));return e.scale.set(1.6,1.6,1),s.add(e),s.userData={c:t},s}var Cs={wind:'<svg viewBox="0 0 24 24"><path d="M3 9h11a3 3 0 1 0-3-3M3 13h15a3 3 0 1 1-3 3M5 17h6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',fire:'<svg viewBox="0 0 24 24"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-6 0 2 1 3 2 3 0-4 0-6 1-9z" fill="currentColor"/></svg>',water:'<svg viewBox="0 0 24 24"><path d="M12 2s7 8 7 13a7 7 0 0 1-14 0c0-5 7-13 7-13z" fill="currentColor"/></svg>',thunder:'<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor"/></svg>',ice:'<svg viewBox="0 0 24 24"><path d="M12 2v20M3 7l18 10M21 7 3 17" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/></svg>',phys:'<svg viewBox="0 0 24 24"><path d="M5 19 19 5M14 5h5v5" stroke="currentColor" stroke-width="2.2" fill="none"/></svg>'},Ps={attack:'<svg viewBox="0 0 24 24"><path d="M4 20 15 9M14 4l6 6-3 1-4-4zM6 14l4 4-3 2-3-3z" fill="currentColor"/></svg>',jump:'<svg viewBox="0 0 24 24"><path d="M12 4 5 12h4v8h6v-8h4z" fill="currentColor"/></svg>',dash:'<svg viewBox="0 0 24 24"><path d="M4 8h9M2 12h11M4 16h9M14 6l7 6-7 6z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/></svg>',map:'<svg viewBox="0 0 24 24"><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2zM9 4v14M15 6v14" fill="none" stroke="currentColor" stroke-width="2"/></svg>',menu:'<svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/></svg>',quest:'<svg viewBox="0 0 24 24"><path d="M6 3h9l3 3v15H6z M9 9h6M9 13h6M9 17h4" fill="none" stroke="currentColor" stroke-width="2"/></svg>',hand:'<svg viewBox="0 0 24 24"><path d="M8 13V5a1.5 1.5 0 0 1 3 0v6M11 11V4a1.5 1.5 0 0 1 3 0v7M14 11V5.5a1.5 1.5 0 0 1 3 0V14c0 4-3 7-6 7s-5-2-6-4l-2-4a1.5 1.5 0 0 1 2.6-1.4L8 14" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',chest:'<svg viewBox="0 0 24 24"><path d="M3 10h18v10H3zM3 10a9 5 0 0 1 18 0M10 12h4v3h-4z" fill="currentColor"/></svg>',star:'<svg viewBox="0 0 24 24"><path d="M12 2 14.6 9.4 22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z" fill="currentColor"/></svg>',sound:'<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 8a5 5 0 0 1 0 8M18.5 5.5a9 9 0 0 1 0 13" stroke="currentColor" stroke-width="2" fill="none"/></svg>'};var ue=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},Is=new R,th=class{constructor(t,e){this.root=t,this.g=e,t.innerHTML="",this.el=ue("div","hud"),t.appendChild(this.el);let i=e.input.touch;this.el.classList.toggle("touch",i),this.mini=ue("div","mini"),this.miniCv=document.createElement("canvas"),this.miniCv.width=this.miniCv.height=200,this.mini.appendChild(this.miniCv),this.mini.appendChild(ue("div","mini-ring")),this.mini.appendChild(ue("div","mini-n","N")),this.mini.appendChild(ue("div","mini-me")),this.el.appendChild(this.mini),this.mini.addEventListener("click",()=>e.openMap()),this.quest=ue("div","quest",'<div class="qt"></div><div class="qo"></div><div class="qd"></div>'),this.el.appendChild(this.quest),this.quest.addEventListener("click",()=>e.openQuestLog()),this.topbtn=ue("div","topbtn");for(let[n,r,a]of[["map","\u5730\u56F3 (M)",()=>e.openMap()],["quest","\u4F9D\u983C (J)",()=>e.openQuestLog()],["menu","\u30E1\u30CB\u30E5\u30FC (Esc)",()=>e.openMenu()]]){let o=ue("button","tb",Ps[n]);o.title=r,o.addEventListener("click",a),this.topbtn.appendChild(o)}this.el.appendChild(this.topbtn),this.partyEl=ue("div","party"),this.el.appendChild(this.partyEl),this.slots=[],this.hp=ue("div","hpbox",'<div class="lv"></div><div class="bar"><i class="fill"></i><i class="heal"></i></div><div class="num"></div>'),this.el.appendChild(this.hp),this.skills=ue("div","skills"),this.skillE=ue("button","sk e",'<div class="ic"></div><svg class="cd" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18"/></svg><span class="t"></span><b>E</b>'),this.skillQ=ue("button","sk q",'<div class="ic"></div><svg class="en" viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="18"/><circle class="fg" cx="20" cy="20" r="18"/></svg><b>Q</b>'),this.skills.append(this.skillQ,this.skillE),this.el.appendChild(this.skills),this.stam=ue("div","stam",'<svg viewBox="0 0 40 40"><circle class="bg" cx="20" cy="20" r="15"/><circle class="fg" cx="20" cy="20" r="15"/></svg>'),this.el.appendChild(this.stam),this.ebars=[],this.ebarLayer=ue("div","ebars"),this.el.appendChild(this.ebarLayer),this.nums=[],this.numLayer=ue("div","nums"),this.el.appendChild(this.numLayer),this.toast=ue("div","toasts"),this.el.appendChild(this.toast),this.banner=ue("div","banner"),this.el.appendChild(this.banner),this.prompt=ue("div","prompt"),this.el.appendChild(this.prompt),this.dialog=ue("div","dialog",'<div class="dn"></div><div class="dt"></div><div class="dc"></div><div class="dnext">\u25BC</div>'),this.el.appendChild(this.dialog),this.dialog.addEventListener("click",()=>e.dialogNext()),this.boss=ue("div","bossbar",'<div class="bn"></div><div class="bb"><i></i></div>'),this.el.appendChild(this.boss),this.hurt=ue("div","hurt"),this.el.appendChild(this.hurt),this.burstFx=ue("div","burstfx"),this.el.appendChild(this.burstFx),i?this.buildTouch():this.skillE.addEventListener("mousedown",n=>n.stopPropagation()),this.lockHint=ue("div","lockhint","\u30AF\u30EA\u30C3\u30AF\u3067\u8996\u70B9\u64CD\u4F5C\uFF08Esc\u30AD\u30FC\u3067\u30AB\u30FC\u30BD\u30EB\u304C\u8868\u793A\u3055\u308C\u307E\u3059\uFF09 \uFF0F WASD \u79FB\u52D5\u30FBShift \u30C0\u30C3\u30B7\u30E5\u30FBSpace \u30B8\u30E3\u30F3\u30D7\uFF08\u9577\u62BC\u3057\u3067\u9AD8\u304F\u30FB\u7A7A\u4E2D\u3067\u3082\u3046\u4E00\u5EA6\uFF09\u30FB\u5DE6\u30AF\u30EA\u30C3\u30AF \u653B\u6483\u30FBE \u30B9\u30AD\u30EB\u30FBQ \u7206\u767A\u30FB1\u301C4 \u4EA4\u4EE3\u30FBF \u8ABF\u3079\u308B"),i||this.el.appendChild(this.lockHint),i||this.el.appendChild(ue("div","eschint","Esc\u30AD\u30FC\uFF1A\u30AB\u30FC\u30BD\u30EB\u8868\u793A\u30FB\u30E1\u30CB\u30E5\u30FC"))}buildTouch(){let t=this.g,e=t.input,i=ue("div","tpad",'<div class="knob"></div>');this.el.appendChild(i);let n=i.querySelector(".knob"),r=null,a=0,o=0,l=52;i.addEventListener("pointerdown",f=>{if(r!==null)return;r=f.pointerId;let p=i.getBoundingClientRect();a=p.left+p.width/2,o=p.top+p.height/2,i.setPointerCapture(f.pointerId),c(f),f.preventDefault(),f.stopPropagation()});let c=f=>{if(f.pointerId!==r)return;let p=f.clientX-a,x=f.clientY-o,m=Math.hypot(p,x);m>l&&(p*=l/m,x*=l/m),n.style.transform=`translate(${p}px,${x}px)`,e.stick.x=p/l,e.stick.y=-x/l},h=f=>{f.pointerId===r&&(r=null,n.style.transform="",e.stick.x=e.stick.y=0)};i.addEventListener("pointermove",c),i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),i.addEventListener("lostpointercapture",h);let d=ue("div","tbtns"),u=(f,p,x)=>{let m=ue("div","tbn "+p,x),g=null;m.addEventListener("pointerdown",b=>{b.preventDefault(),b.stopPropagation(),g=b.pointerId,m.setPointerCapture(b.pointerId),e.setVirtual(f,!0),m.classList.add("on")});let v=b=>{b.pointerId===g&&(g=null,e.setVirtual(f,!1),m.classList.remove("on"))};return m.addEventListener("pointerup",v),m.addEventListener("pointercancel",v),m.addEventListener("lostpointercapture",v),d.appendChild(m),m};u("attack","atk",Ps.attack),u("jump","jmp",Ps.jump),u("dash","dsh",Ps.dash),this.el.appendChild(d);for(let[f,p]of[[this.skillE,"skill"],[this.skillQ,"burst"]]){let x=null;f.addEventListener("pointerdown",g=>{g.preventDefault(),g.stopPropagation(),x=g.pointerId,f.setPointerCapture(g.pointerId),e.setVirtual(p,!0)});let m=g=>{g.pointerId===x&&(x=null,e.setVirtual(p,!1))};f.addEventListener("pointerup",m),f.addEventListener("pointercancel",m),f.addEventListener("lostpointercapture",m)}this.interactBtn=ue("div","tbn int",Ps.hand),this.interactBtn.addEventListener("pointerdown",f=>{f.preventDefault(),f.stopPropagation(),e.setVirtual("interact",!0),setTimeout(()=>e.setVirtual("interact",!1),120)}),this.el.appendChild(this.interactBtn)}buildParty(t){this.partyEl.innerHTML="",this.slots=[],this.g.party.forEach((e,i)=>{let n=ue("div","pm",`<div class="pn"><span class="nm">${e.name}</span><div class="pb"><i></i></div></div><div class="pf" style="--ec:${cn[e.el]}"><img src="${t[e.id]||""}"><span class="pe">${Cs[e.el]}</span></div><div class="pk">${i+1}</div>`);n.addEventListener("pointerdown",r=>{r.stopPropagation(),this.g.switchTo(i)}),this.partyEl.appendChild(n),this.slots.push(n)})}project(t){return Is.copy(t).project(this.g.R.camera),Is.z>1||Is.z<-1?null:{x:(Is.x*.5+.5)*innerWidth,y:(-Is.y*.5+.5)*innerHeight}}damage(t,e,i,n,r){let a=this.project(t);if(!a)return;let o=ue("div","dmg"+(n?" crit":"")+(r?" small":""),String(e));for(o.style.color=cn[i||"phys"]||"#fff",o.style.left=a.x+(Math.random()-.5)*40+"px",o.style.top=a.y+(Math.random()-.5)*20+"px",this.numLayer.appendChild(o),setTimeout(()=>o.remove(),900);this.numLayer.children.length>40;)this.numLayer.firstChild.remove()}reaction(t,e,i){let n=this.project(t);if(!n)return;let r={vaporize:"#ffb070",melt:"#ffc070",overload:"#ff7ab0",electro:"#d0a0ff",superconduct:"#b8b8ff",freeze:"#a8eeff",swirl:"#80f0d8"}[i]||"#fff",a=ue("div","react",e);a.style.color=r,a.style.left=n.x+"px",a.style.top=n.y-30+"px",this.numLayer.appendChild(a),setTimeout(()=>a.remove(),1100)}notify(t,e){let i=ue("div","toast",t);for(e&&cn[e]&&(i.style.borderColor=cn[e]),this.toast.appendChild(i),setTimeout(()=>i.classList.add("out"),2600),setTimeout(()=>i.remove(),3100);this.toast.children.length>4;)this.toast.firstChild.remove()}showBanner(t,e,i=""){this.banner.className="banner show "+i,this.banner.innerHTML=`<div class="b1">${t}</div>${e?`<div class="b2">${e}</div>`:""}`,clearTimeout(this.bannerT),this.bannerT=setTimeout(()=>this.banner.classList.remove("show"),3200)}update(t){let e=this.g,i=e.mover,n=e.activeMember;this.hp.querySelector(".lv").textContent="Lv."+n.lv,this.hp.querySelector(".fill").style.width=n.hp/n.maxHp*100+"%",this.hp.querySelector(".num").textContent=`${Math.ceil(n.hp)} / ${n.maxHp}`,this.hp.classList.toggle("low",n.hp/n.maxHp<.3);let r=cn[n.el];this.skills.style.setProperty("--ec",r),this.skillE.querySelector(".ic").innerHTML=Cs[n.el],this.skillQ.querySelector(".ic").innerHTML=Cs[n.el];let a=n.lastSkillCD||n.def0.skillCD,o=n.skillT;this.skillE.classList.toggle("cool",o>0),this.skillE.querySelector(".t").textContent=o>0?o.toFixed(1):"",this.skillE.querySelector(".cd circle").style.strokeDashoffset=String(113*(1-o/a));let l=Math.min(1,n.energy/n.def0.energy);this.skillQ.querySelector(".fg").style.strokeDashoffset=String(113*(1-l)),this.skillQ.classList.toggle("ready",l>=1),e.party.forEach((m,g)=>{let v=this.slots[g];v&&(v.classList.toggle("active",m===n),v.classList.toggle("down",!m.alive),v.querySelector(".pb i").style.width=m.hp/m.maxHp*100+"%",v.style.display=e.unlocked.includes(m.id)?"":"none")});let c=i.stam/i.stamMax,h=c<.999||i.mode==="climb"||i.mode==="glide"||i.mode==="swim";if(this.stamAlpha=(this.stamAlpha||0)+((h?1:0)-(this.stamAlpha||0))*Math.min(1,t*(h?10:2)),this.stamAlpha>.01){let m=this.project(Is.set(i.p.x,i.p.y+1.2,i.p.z));m&&(this.stam.style.transform=`translate(${m.x+46}px, ${m.y-30}px)`),this.stam.querySelector(".fg").style.strokeDashoffset=String(94.2*(1-c)),this.stam.classList.toggle("low",c<.25)}this.stam.style.opacity=this.stamAlpha;let d=0,u=e.R.camera.position;for(let m of e.enemies){if(m.dead||m.type==="boss")continue;let g=Math.hypot(m.pos.x-u.x,m.pos.z-u.z);if(g>32||m.state==="idle"&&m.hp>=m.maxHp&&g>18)continue;let v=this.project(Is.set(m.pos.x,m.pos.y+m.h+.45,m.pos.z));if(!v)continue;let b=this.ebars[d];b||(b=ue("div","ebar",'<div class="el"></div><div class="lvn"></div><div class="eb"><i></i></div>'),this.ebarLayer.appendChild(b),this.ebars.push(b)),b.style.display="",b.style.transform=`translate(${v.x}px, ${v.y}px)`,b.querySelector(".eb i").style.width=m.hp/m.maxHp*100+"%",b.querySelector(".lvn").textContent="Lv."+m.lv;let y=m.aura?m.aura.el:null,M=b.querySelector(".el");if(M.dataset.a!==String(y)&&(M.dataset.a=String(y),M.innerHTML=y?Cs[y]:"",M.style.color=y?cn[y]:""),b.classList.toggle("frozen",m.frozen>0),d++,d>=12)break}for(let m=d;m<this.ebars.length;m++)this.ebars[m].style.display="none";let f=e.enemies.find(m=>m.type==="boss"&&!m.dead&&m.state!=="idle");this.boss.classList.toggle("show",!!f),f&&(this.boss.querySelector(".bn").textContent=`${f.name}  Lv.${f.lv}`,this.boss.querySelector(".bb i").style.width=f.hp/f.maxHp*100+"%"),this.hurtA=Math.max(0,(this.hurtA||0)-t*2),this.hurt.style.opacity=this.hurtA+(n.hp/n.maxHp<.25?.25+Math.sin(e.time*5)*.1:0);let p=e.nearInteract;p?(this.prompt.innerHTML=`<span class="key">${e.input.touch?Ps.hand:"F"}</span>${p.label}`,this.prompt.classList.add("show")):this.prompt.classList.remove("show"),this.interactBtn&&this.interactBtn.classList.toggle("show",!!p);let x=e.quests.current();if(this.quest.style.display=x?"":"none",x){this.quest.querySelector(".qt").textContent=x.title,this.quest.querySelector(".qo").textContent=x.obj;let m=x.target;this.quest.querySelector(".qd").textContent=m?`${Math.round(Math.hypot(m.x-i.p.x,m.z-i.p.z))} m`:""}this.drawMini(),this.lockHint.style&&(this.lockHint.style.display=e.input.locked||e.time>40||e.dialogOpen?"none":"")}drawMini(){let t=this.g,e=this.miniCv,i=e.getContext("2d"),n=t.mover,r=e.width,a=t.tex.map.image,o=t.world.size,l=a.width/o,c=1.25;i.save(),i.clearRect(0,0,r,r),i.beginPath(),i.arc(r/2,r/2,r/2-2,0,Math.PI*2),i.clip(),i.fillStyle="#dfe8ee",i.fillRect(0,0,r,r),i.translate(r/2,r/2),i.rotate(t.camRig.yaw-Math.PI),i.scale(c,c),i.drawImage(a,-(n.p.x+o/2)*l,-(n.p.z+o/2)*l);for(let f of t.mapMarkers()){let p=(f.x-n.p.x)*l,x=(f.z-n.p.z)*l;if(Math.hypot(p,x)*c>r*.55&&!f.edge)continue;let m=p,g=x,v=(r/2-12)/c,b=Math.hypot(m,g);b>v&&(m*=v/b,g*=v/b),i.save(),i.translate(m,g),i.rotate(-(t.camRig.yaw-Math.PI)),i.scale(1/c,1/c),cd(i,f.kind,f.done),i.restore()}i.restore();let h=this.mini.querySelector(".mini-n"),d=t.camRig.yaw-Math.PI,u=this.mini.clientWidth/2+3;h.style.transform=`translate(${Math.sin(-d)*-u}px, ${-Math.cos(-d)*u}px)`,this.mini.querySelector(".mini-me").style.transform=`rotate(${-(n.face-t.camRig.yaw+Math.PI)*180/Math.PI+180}deg)`}say(t,e,i){this.dialog.classList.add("show"),this.dialog.querySelector(".dn").textContent=t||"",this.dialog.querySelector(".dt").textContent=e;let n=this.dialog.querySelector(".dc");if(n.innerHTML="",i&&n.appendChild(ue("div","chint",this.g.input.touch?"\u9078\u3093\u3067\u30BF\u30C3\u30D7\u3057\u3066\u304F\u3060\u3055\u3044":"\u30AF\u30EA\u30C3\u30AF\u3067\u9078\u629E\uFF08\u6570\u5B57\u30AD\u30FC\u3067\u3082\u9078\u3079\u307E\u3059\uFF09")),i)for(let[r,a]of i.entries()){let o=ue("button","ch",(this.g.input.touch?"":`${r+1}. `)+a.text);o.addEventListener("click",l=>{l.stopPropagation(),this.g.dialogChoose(r)}),n.appendChild(o)}this.dialog.classList.toggle("choosing",!!i)}closeDialog(){this.dialog.classList.remove("show")}autoSaved(){let t=this.autoTag||(this.autoTag=ue("div","autosave","\u81EA\u52D5\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F"));t.parentNode||this.el.appendChild(t),t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}hurtFlash(){this.hurtA=.55}burstFlash(t){this.burstFx.style.setProperty("--ec",cn[t]),this.burstFx.classList.remove("go"),this.burstFx.offsetWidth,this.burstFx.classList.add("go")}};function cd(s,t,e){s.lineWidth=2,t==="quest"?(s.fillStyle="#ffd24a",s.strokeStyle="#4a3200",s.beginPath(),s.moveTo(0,-11),s.lineTo(7,0),s.lineTo(0,11),s.lineTo(-7,0),s.closePath(),s.fill(),s.stroke()):t==="waypoint"?(s.fillStyle=e?"#7fe3ff":"#9aa6b0",s.strokeStyle="#1a2a3a",s.beginPath(),s.moveTo(0,-9),s.lineTo(6,6),s.lineTo(-6,6),s.closePath(),s.fill(),s.stroke()):t==="shrine"?(s.fillStyle=e?"#9affe0":"#c0c8d0",s.strokeStyle="#1a3a3a",s.beginPath(),s.arc(0,0,7,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle="#1a3a3a",s.fillRect(-1.5,-4,3,8)):t==="chest"?(s.fillStyle="#ffcf6a",s.strokeStyle="#4a3010",s.fillRect(-5,-3,10,7),s.strokeRect(-5,-3,10,7)):t==="enemy"?(s.fillStyle="#ff5a4a",s.beginPath(),s.arc(0,0,3,0,Math.PI*2),s.fill()):t==="town"?(s.fillStyle="#ffe8c0",s.strokeStyle="#5a3a1a",s.beginPath(),s.moveTo(-6,5),s.lineTo(-6,-2),s.lineTo(0,-8),s.lineTo(6,-2),s.lineTo(6,5),s.closePath(),s.fill(),s.stroke()):t==="boss"&&(s.fillStyle="#c070ff",s.strokeStyle="#2a0a3a",s.beginPath(),s.arc(0,0,8,0,Math.PI*2),s.fill(),s.stroke(),s.fillStyle="#fff",s.fillRect(-1.5,-5,3,6),s.fillRect(-1.5,3,3,2))}var Ls={easy:{name:"\u3084\u3055\u3057\u3044",taken:.5,enemyHp:.75,desc:"\u53D7\u3051\u308B\u30C0\u30E1\u30FC\u30B8\u534A\u5206\u30FB\u6575\u306EHP 3/4\u3002\u5012\u308C\u305F\u4EF2\u9593\u3082\u4F11\u3081\u3070\u3059\u3050\u8D77\u304D\u308B"},normal:{name:"\u3075\u3064\u3046",taken:1,enemyHp:1,desc:"\u3044\u3064\u3082\u306E\u624B\u5FDC\u3048"},hard:{name:"\u3080\u305A\u304B\u3057\u3044",taken:1.4,enemyHp:1.3,desc:"\u53D7\u3051\u308B\u30C0\u30E1\u30FC\u30B81.4\u500D\u30FB\u6575\u306EHP 1.3\u500D"}},nh={clear:"\u6674\u308C",cloudy:"\u304F\u3082\u308A",rain:"\u96E8",storm:"\u96F7\u96E8"},hd={clear:{cloud:0,rain:0,storm:0},cloudy:{cloud:.75,rain:0,storm:0},rain:{cloud:1,rain:1,storm:0},storm:{cloud:1,rain:1,storm:1}},eh=class{constructor(t=Math.random){this.rng=t,this.cur="clear",this.t=0,this.dur=240,this.cloud=0,this.rain=0,this.storm=0,this.rainbowT=0,this.locked=!1,this.forced=null}nextOf(t){let e=this.rng();return t==="clear"?"cloudy":t==="cloudy"?e<.35?"clear":e<.8?"rain":"storm":t==="rain"?e<.25?"storm":"clear":"rain"}durOf(t){let e=this.rng();return t==="clear"?300+e*240:t==="cloudy"?100+e*80:t==="rain"?150+e*110:90+e*70}set(t){this.cur=t,this.t=0,this.dur=this.durOf(t)}update(t){let e=null;if(!this.locked&&!this.forced&&(this.t+=t,this.t>=this.dur)){let r=this.cur;this.set(this.nextOf(this.cur)),e=this.cur,(r==="rain"||r==="storm")&&this.cur==="clear"&&(this.rainbowT=110)}let i=hd[this.locked?"clear":this.forced||this.cur],n=1-Math.exp(-t/(this.locked?2:12));return this.cloud+=(i.cloud-this.cloud)*n,this.rain+=(i.rain-this.rain)*n,this.storm+=(i.storm-this.storm)*n,this.rainbowT=Math.max(0,this.rainbowT-t),e}get raining(){return this.rain>.5}get rainbow(){return this.rainbowT>0?Math.min(1,this.rainbowT/15,(110-this.rainbowT)/10)*(1-this.cloud):0}save(){return{cur:this.cur,t:this.t,dur:this.dur}}load(t){if(!t||!hd[t.cur])return;this.cur=t.cur,this.t=t.t||0,this.dur=t.dur||this.durOf(t.cur);let e=hd[t.cur];this.cloud=e.cloud,this.rain=e.rain,this.storm=e.storm}},hn={apple:{name:"\u30EA\u30F3\u30B4",color:15221818},mushroom:{name:"\u30AD\u30CE\u30B3",color:15786696},mint:{name:"\u30DF\u30F3\u30C8",color:8052874},honey:{name:"\u8702\u306E\u5DE3",color:16761402},fish:{name:"\u5C0F\u9B5A",color:10146047}},un={bakedApple:{name:"\u713C\u304D\u30EA\u30F3\u30B4",need:{apple:2},heal:.25,desc:"HP\u309225%\u56DE\u5FA9"},mushSkewer:{name:"\u304D\u306E\u3053\u306E\u4E32\u713C\u304D",need:{mushroom:2},buff:"def",val:.3,time:300,desc:"\u53D7\u3051\u308B\u30C0\u30E1\u30FC\u30B8\u221223%\uFF08\u9632\u5FA1+30%\uFF095\u5206"},mintJelly:{name:"\u30DF\u30F3\u30C8\u30BC\u30EA\u30FC",need:{mint:2,apple:1},buff:"stam",val:.25,time:300,desc:"\u30B9\u30BF\u30DF\u30CA\u6D88\u8CBB\u221225% 5\u5206"},herbFish:{name:"\u9B5A\u306E\u9999\u8349\u713C\u304D",need:{fish:1,mint:1},buff:"atk",val:.2,time:300,desc:"\u653B\u6483+20% 5\u5206"},pancake:{name:"\u8702\u871C\u30D1\u30F3\u30B1\u30FC\u30AD",need:{honey:1,apple:1},buff:"crit",val:.15,time:300,desc:"\u4F1A\u5FC3\u7387+15% 5\u5206"}},ud={atk:"\u653B\u6483",def:"\u9632\u5FA1",stam:"\u30B9\u30BF\u30DF\u30CA",crit:"\u4F1A\u5FC3"};function dd(s,t){let e=un[t];return e?Object.entries(e.need).every(([i,n])=>(s[i]||0)>=n):!1}function y0(s,t){if(!dd(s,t))return!1;for(let[e,i]of Object.entries(un[t].need))s[e]-=i;return s[t]=(s[t]||0)+1,!0}function fd(s){return Object.entries(un[s].need).map(([t,e])=>`${hn[t].name}\xD7${e}`).join("\u30FB")}var ih=class{constructor(){this.list={}}add(t,e,i){this.list[t]={val:e,t:i,max:i}}val(t){let e=this.list[t];return e&&e.t>0?e.val:0}update(t){for(let e in this.list)this.list[e].t-=t,this.list[e].t<=0&&delete this.list[e]}save(){return this.list}load(t){if(this.list={},t)for(let e in t)ud[e]&&t[e].t>0&&(this.list[e]=t[e])}};function pd(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function b0(s){let t=pd(20261007),e=[],i=(a,o,l=1.2,c=60)=>{let h=s.heightAt(a,o);return h>l&&h<c&&s.slopeAt(a,o)<.45&&Math.hypot(a,o)<600},n=(a,o,l)=>e.some(c=>Math.hypot(c.x-a,c.z-o)<l),r=s.meta.trees;for(let a=0;a<r.length&&e.filter(o=>o.kind==="apple").length<18;a+=7){let[o,l,c]=r[a];if(c!==0||o<-250||l<-250)continue;let h=t()*6.28,d=o+Math.cos(h)*1.6,u=l+Math.sin(h)*1.6;i(d,u)&&!n(d,u,25)&&e.push({kind:"apple",x:d,z:u})}for(let a=3;a<r.length&&e.filter(o=>o.kind==="mushroom").length<14;a+=5){let[o,l]=r[a];if(!(o<-250&&l>-150&&l<450))continue;let c=t()*6.28,h=o+Math.cos(c)*1.3,d=l+Math.sin(c)*1.3;i(h,d)&&!n(h,d,22)&&e.push({kind:"mushroom",x:h,z:d})}for(let a=0;a<400&&e.filter(o=>o.kind==="mint").length<16;a++){let o=-120+t()*380,l=300+t()*220;i(o,l,2)&&!n(o,l,22)&&e.push({kind:"mint",x:o,z:l})}for(let a=1;a<r.length&&e.filter(o=>o.kind==="honey").length<8;a+=11){let[o,l,c]=r[a];if(!(o<-200&&o>-330)||c===1)continue;let h=t()*6.28,d=o+Math.cos(h)*1.2,u=l+Math.sin(h)*1.2;i(d,u)&&!n(d,u,30)&&e.push({kind:"honey",x:d,z:u,high:!0})}for(let a=0;a<2e4&&e.filter(o=>o.kind==="fish").length<12;a++){let o=-320+t()*640,l=-260+t()*560,c=s.heightAt(o,l);if(!(c>.2&&c<2.2)||s.slopeAt(o,l)>.6||n(o,l,30))continue;let h=!1;for(let d=0;d<6.28&&!h;d+=.785)s.heightAt(o+Math.cos(d)*4,l+Math.sin(d)*4)<-.3&&(h=!0);h&&e.push({kind:"fish",x:o,z:l})}return e.forEach((a,o)=>{a.id="g"+o}),e}var ao=[{id:"cook1",name:"\u306F\u3058\u3081\u3066\u306E\u6599\u7406",desc:"\u6599\u7406\u30921\u56DE\u4F5C\u308B",mora:100,exp:200},{id:"cook10",name:"\u53F0\u6240\u306E\u4E3B",desc:"\u6599\u7406\u309210\u56DE\u4F5C\u308B",mora:300,exp:600},{id:"recipes",name:"\u30EC\u30B7\u30D4\u5168\u96C6",desc:"5\u7A2E\u985E\u306E\u6599\u7406\u3092\u3059\u3079\u3066\u4F5C\u308B",mora:500,exp:1e3},{id:"gather30",name:"\u63A1\u96C6\u4E0A\u624B",desc:"\u7D20\u6750\u309230\u500B\u62FE\u3046",mora:200,exp:400},{id:"rainElectro",name:"\u96E8\u306B\u6253\u305F\u308C\u3066",desc:"\u96E8\u306E\u4E2D\u3067\u611F\u96FB\u306E\u53CD\u5FDC\u3092\u8D77\u3053\u3059",mora:200,exp:400},{id:"rainFreeze",name:"\u51B7\u305F\u3044\u96E8",desc:"\u96E8\u306E\u4E2D\u3067\u51CD\u7D50\u306E\u53CD\u5FDC\u3092\u8D77\u3053\u3059",mora:200,exp:400},{id:"reactions",name:"\u5143\u7D20\u306E\u63A2\u7A76\u8005",desc:"7\u7A2E\u985E\u306E\u53CD\u5FDC\u3092\u3059\u3079\u3066\u8D77\u3053\u3059",mora:500,exp:1e3},{id:"rainbow",name:"\u96E8\u4E0A\u304C\u308A\u306E\u8D08\u308A\u7269",desc:"\u8679\u3092\u898B\u308B",mora:150,exp:300},{id:"birds",name:"\u304A\u3069\u304B\u3057\u3066\u3054\u3081\u3093",desc:"\u5C0F\u9CE5\u306E\u7FA4\u308C\u3092\u98DB\u3073\u7ACB\u305F\u305B\u308B",mora:50,exp:100},{id:"birds10",name:"\u5C0F\u9CE5\u3068\u8FFD\u3044\u304B\u3051\u3063\u3053",desc:"\u5C0F\u9CE5\u306E\u7FA4\u308C\u309210\u56DE\u98DB\u3073\u7ACB\u305F\u305B\u308B",mora:200,exp:300},{id:"photo1",name:"\u306F\u3058\u3081\u3066\u306E\u4E00\u679A",desc:"\u5199\u771F\u30E2\u30FC\u30C9\u3067\u64AE\u5F71\u3059\u308B",mora:100,exp:200},{id:"photo10",name:"\u65C5\u306E\u5199\u771F\u5BB6",desc:"\u5199\u771F\u309210\u679A\u64AE\u308B",mora:300,exp:500},{id:"puzzle1",name:"\u4ED5\u639B\u3051\u3092\u89E3\u304F\u8005",desc:"\u5143\u7D20\u306E\u4ED5\u639B\u3051\u30921\u3064\u89E3\u304F",mora:200,exp:400},{id:"puzzleAll",name:"\u5927\u9678\u306E\u8B0E\u89E3\u304D\u540D\u4EBA",desc:"\u5143\u7D20\u306E\u4ED5\u639B\u3051\u30926\u3064\u3059\u3079\u3066\u89E3\u304F",mora:800,exp:1500},{id:"crystals",name:"\u98A8\u3092\u96C6\u3081\u308B\u8005",desc:"\u98A8\u306E\u7D50\u6676\u309240\u500B\u3059\u3079\u3066\u96C6\u3081\u308B",mora:1e3,exp:2e3},{id:"chests",name:"\u5B9D\u63A2\u3057\u306E\u9054\u4EBA",desc:"\u5B9D\u7BB1\u309225\u500B\u3059\u3079\u3066\u958B\u3051\u308B",mora:1e3,exp:2e3},{id:"kill50",name:"\u5927\u9678\u306E\u5B88\u308A\u624B",desc:"\u9B54\u7269\u309250\u4F53\u5012\u3059",mora:300,exp:600},{id:"kill200",name:"\u6B74\u6226\u306E\u65C5\u4EBA",desc:"\u9B54\u7269\u3092200\u4F53\u5012\u3059",mora:800,exp:1500},{id:"midnight",name:"\u771F\u591C\u4E2D\u306E\u6563\u6B69",desc:"\u591C0\u6642\u3092\u5916\u3067\u8FCE\u3048\u308B",mora:100,exp:200},{id:"glide",name:"\u98A8\u306B\u4E57\u3063\u3066",desc:"\u4E00\u5EA6\u306E\u6ED1\u7A7A\u3067150m\u9032\u3080",mora:200,exp:400},{id:"region100",name:"\u5730\u56F3\u3092\u57CB\u3081\u308B",desc:"\u3069\u3053\u304B\u306E\u5730\u57DF\u306E\u63A2\u7D22\u5EA6\u3092100%\u306B\u3059\u308B",mora:500,exp:1e3},{id:"boss",name:"\u9727\u3092\u6674\u3089\u3059\u8005",desc:"\u9727\u306E\u5DE8\u50CF\u3092\u93AE\u3081\u308B",mora:500,exp:1e3}],_0=[{id:"town",name:"\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3",x:330,z:330,r:150},{id:"ruins",name:"\u9727\u306E\u907A\u8DE1",x:0,z:-470,r:160},{id:"lake",name:"\u93E1\u306E\u6E56",x:0,z:10,r:230},{id:"camp",name:"\u7363\u306E\u91CE\u55B6\u5730",x:-380,z:-300,r:90},{id:"forest",name:"\u3055\u3055\u3084\u304D\u306E\u68EE",x:-390,z:170,r:220},{id:"cliff",name:"\u5929\u98A8\u306E\u65AD\u5D16",x:450,z:-160,r:200},{id:"meadow",name:"\u306F\u3058\u307E\u308A\u306E\u8349\u539F",x:60,z:430,r:400}];function Yb(s,t){for(let e of _0)if(Math.hypot(s-e.x,t-e.z)<e.r)return e.id;return"meadow"}function M0(s){let t={};for(let e of _0)t[e.id]={name:e.name,done:0,total:0,pct:0};for(let e of s){let i=t[Yb(e.x,e.z)];i.total++,e.done&&i.done++}for(let e in t)t[e].pct=t[e].total?Math.floor(t[e].done/t[e].total*100):100;return t}var md=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},sh=class{constructor(t){this.g=t,this.open=null,this.layer=md("div","scr"),document.getElementById("ui").appendChild(this.layer),this.fadeEl=md("div","fade"),document.getElementById("ui").appendChild(this.fadeEl),addEventListener("keydown",e=>{this.open&&(this.justOpened&&performance.now()-this.justOpened<300||(e.code==="Escape"||e.code==="KeyM"&&this.open==="map"||e.code==="KeyJ"&&this.open==="quest")&&(e.preventDefault(),this.close()))})}show(t,e){this.open=t,this.justOpened=performance.now(),this.g.input.releaseAll(),document.pointerLockElement&&(this.g.selfUnlock=!0,document.exitPointerLock()),this.layer.className="scr show "+t,this.layer.innerHTML=`<div class="sbox">${e}</div><button class="sclose">\u2715</button>`,this.layer.querySelector(".sclose").addEventListener("click",()=>this.close()),this.g.audio?.sfx("ui")}close(){this.open=null,this.layer.className="scr",this.layer.innerHTML="",this.g.audio?.sfx("ui"),this.g.save()}update(){this.open==="map"&&this.drawMap()}map(){this.show("map",'<div class="mtitle">\u30EA\u30E5\u30DF\u30A8\u30E9\u5168\u56F3</div><div class="mwrap"><canvas class="mcv" width="1024" height="1024"></canvas></div><div class="mhelp">\u5149\u308B\u30EF\u30FC\u30D7\u5730\u70B9\u3092\u62BC\u3059\u3068\u79FB\u52D5\u3067\u304D\u307E\u3059</div>');let t=this.layer.querySelector(".mcv");this.mapCv=t,t.addEventListener("click",e=>{let i=t.getBoundingClientRect(),n=this.g.world.size,r=(e.clientX-i.left)/i.width*n-n/2,a=(e.clientY-i.top)/i.height*n-n/2,o=null,l=40;for(let c of this.g.wpObjs){if(!this.g.waypointsOn.has(c.id))continue;let h=Math.hypot(c.x-r,c.z-a);h<l&&(l=h,o=c)}o&&(this.close(),this.g.teleport(o))}),this.drawMap()}drawMap(){let t=this.mapCv;if(!t)return;let e=t.getContext("2d"),i=this.g,n=i.world.size,r=1024/n;e.drawImage(i.tex.map.image,0,0,1024,1024);let a=(c,h)=>[(c+n/2)*r,(h+n/2)*r];e.font='bold 20px "Zen Maru Gothic", sans-serif',e.textAlign="center";for(let[c,h,d]of[["\u306F\u3058\u307E\u308A\u306E\u8349\u539F",60,470],["\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3",330,300],["\u93E1\u306E\u6E56",0,10],["\u3055\u3055\u3084\u304D\u306E\u68EE",-390,200],["\u7363\u306E\u91CE\u55B6\u5730",-380,-340],["\u5929\u98A8\u306E\u65AD\u5D16",450,-110],["\u9727\u306E\u907A\u8DE1",0,-430]]){let[u,f]=a(h,d);e.lineWidth=5,e.strokeStyle="rgba(40,30,20,.65)",e.strokeText(c,u,f),e.fillStyle="#fff6dc",e.fillText(c,u,f)}for(let c of i.mapMarkers()){let[h,d]=a(c.x,c.z);e.save(),e.translate(h,d),e.scale(1.7,1.7),cd(e,c.kind,c.done),e.restore()}let[o,l]=a(i.mover.p.x,i.mover.p.z);e.save(),e.translate(o,l),e.rotate(Math.PI-i.mover.face),e.fillStyle="#ffe070",e.strokeStyle="#3a2a00",e.lineWidth=2,e.beginPath(),e.moveTo(0,-14),e.lineTo(9,10),e.lineTo(0,5),e.lineTo(-9,10),e.closePath(),e.fill(),e.stroke(),e.restore()}questLog(){let t=this.g,e=t.quests,i=e.current(),n='<div class="mtitle">\u4F9D\u983C</div><div class="ql">',r=e.cur;n+=`<div class="qi main ${e.track==="main"?"on":""}" data-t="main"><div class="qh">\u672C\u7DE8\u3000${r?.title||"\u5B8C\u7D50"}</div><div class="qb">${r?.obj||"\u4E03\u5F69\u306E\u98A8\u304C\u623B\u3063\u305F\u3002\u5927\u9678\u3092\u81EA\u7531\u306B\u65C5\u3057\u3088\u3046\u3002"}</div></div>`;for(let[a,o]of Object.entries(e.side)){let l=e.sideInfo(a);n+=`<div class="qi ${o==="done"?"done":""} ${e.track===a?"on":""}" data-t="${a}"><div class="qh">\u4F9D\u983C\u3000${Rs[a].title}${o==="done"?"\uFF08\u9054\u6210\uFF09":""}</div><div class="qb">${o==="done"?"":l.obj}</div></div>`}n+=`</div><div class="mhelp">\u62BC\u3059\u3068\u305D\u306E\u4F9D\u983C\u3092\u8FFD\u8DE1\u3057\u307E\u3059\u3000\uFF0F\u3000\u98A8\u306E\u7D50\u6676 ${t.gotCrystals.size}/40\u3000\u5B9D\u7BB1 ${t.opened.size}/${t.chestObjs.length}</div>`,this.show("quest",n),this.layer.querySelectorAll(".qi").forEach(a=>a.addEventListener("click",()=>{let o=a.dataset.t;(o==="main"||e.side[o]!=="done")&&(e.track=o,this.questLog())}))}menu(t="party"){let e=this.g,i="";if(t==="party")i='<div class="pgrid">'+e.party.filter(a=>e.unlocked.includes(a.id)).map(a=>`
        <div class="pcard" style="--ec:${cn[a.el]}"><img src="${e.portraits[a.id]}"><div class="pinfo">
          <div class="pnm">${a.name} <span class="pel">${Cs[a.el]}${a0[a.el]}</span></div><div class="ptl">${so[a.id].title}</div>
          <div>Lv.${a.lv}\u3000\u7D4C\u9A13 ${a.exp}/${no(a.lv)}</div><div>HP ${Math.ceil(a.hp)}/${a.maxHp}\u3000\u653B\u6483 ${a.atk}\u3000\u9632\u5FA1 ${a.def}</div>
          <div class="pkit">${$b(a.id)}</div></div></div>`).join("")+"</div>";else if(t==="items"){let a=oo;i=`<div class="mora">\u6240\u6301\u91D1\u3000${e.mora} \u30EB\u30DF</div><div class="items">`+Object.entries(a).map(([l,c])=>`<div class="item"><div class="inm">${c.name} \xD7 ${e.items[l]||0}</div><div class="ids">${c.desc}</div><button class="use" data-k="${l}" ${e.items[l]?"":"disabled"}>\u4F7F\u3046</button></div>`).join("")+"</div>";let o=e.life;i+='<div class="mtitle2">\u6599\u7406\uFF08\u711A\u304D\u706B\u3084\u753A\u306E\u5927\u934B\u3067\u4F5C\u308C\u307E\u3059\uFF09</div><div class="items">'+Object.entries(un).map(([l,c])=>`<div class="item"><div class="inm">${c.name} \xD7 ${e.items[l]||0}</div><div class="ids">${c.desc}</div><button class="usedish" data-k="${l}" ${e.items[l]?"":"disabled"}>\u98DF\u3079\u308B</button></div>`).join("")+"</div>",i+='<div class="mtitle2">\u7D20\u6750</div><div class="ingr">'+Object.entries(hn).map(([l,c])=>`<span>${c.name} \xD7 ${e.items[l]||0}</span>`).join("")+"</div>"}else if(t==="save"){let a=e.constructor;i='<div class="slots">'+[1,2,3].map(o=>{let l=a.slotData(o);return`<div class="slot"><div class="si">${l&&l.meta?`<b>\u30B9\u30ED\u30C3\u30C8${o}</b><br>${new Date(l.meta.at).toLocaleString("ja-JP")}\u3000${l.meta.place}<br>${l.meta.step}\u3000Lv.${l.meta.lv}\u3000\u98A8\u306E\u7D50\u6676 ${l.meta.crystals}/40`:`<b>\u30B9\u30ED\u30C3\u30C8${o}</b><br>\uFF08\u7A7A\u304D\uFF09`}</div><button class="sv" data-n="${o}">\u30BB\u30FC\u30D6</button><button class="ld" data-n="${o}" ${l?"":"disabled"}>\u30ED\u30FC\u30C9</button></div>`}).join("")+'</div><div class="mhelp">30\u79D2\u3054\u3068\u3068\u5927\u4E8B\u306A\u5834\u9762\u3067\u81EA\u52D5\u30BB\u30FC\u30D6\u3082\u3057\u3066\u3044\u307E\u3059\uFF08\u30BF\u30A4\u30C8\u30EB\u306E\u300C\u3064\u3065\u304D\u304B\u3089\u300D\uFF09\u3002</div>'}else if(t==="record"){let a=e.life,o=a.stats,l=a.exploration(),c=Math.floor(o.playTime/60);i='<div class="rec"><div class="mtitle2">\u63A2\u7D22\u5EA6</div><div class="regions">'+Object.values(l).map(h=>`<div class="rg"><span>${h.name}</span><div class="bar"><i style="width:${h.pct}%"></i></div><b>${h.pct}%</b></div>`).join("")+"</div>",i+=`<div class="mtitle2">\u65C5\u306E\u8A18\u9332</div><div class="stats"><span>\u904A\u3093\u3060\u6642\u9593 ${Math.floor(c/60)}\u6642\u9593${c%60}\u5206</span><span>\u5012\u3057\u305F\u9B54\u7269 ${o.kills}</span><span>\u6599\u7406 ${o.cooks}\u56DE</span><span>\u62FE\u3063\u305F\u7D20\u6750 ${o.gathered}</span><span>\u5199\u771F ${o.photos}\u679A</span><span>\u89E3\u3044\u305F\u4ED5\u639B\u3051 ${a.solved.size}/6</span><span>\u8D77\u3053\u3057\u305F\u53CD\u5FDC ${o.reactions.length}/7</span><span>\u6700\u9577\u306E\u6ED1\u7A7A ${Math.round(o.glideBest)}m</span><span>\u5929\u6C17 ${nh[a.weather.cur]}</span></div>`,i+=`<div class="mtitle2">\u5B9F\u7E3E ${a.ach.size}/${ao.length}</div><div class="achs">`+ao.map(h=>`<div class="ach ${a.ach.has(h.id)?"on":""}"><b>${a.ach.has(h.id)?"\u2605":"\u2606"} ${h.name}</b><span>${h.desc}</span></div>`).join("")+"</div></div>"}else if(t==="settings"){let a=e.settings;i=`<div class="sets">
        <label>\u753B\u8CEA <select data-s="quality"><option value="high">\u9AD8</option><option value="mid">\u4E2D</option><option value="low">\u4F4E</option></select><span class="note">\uFF08\u518D\u8AAD\u307F\u8FBC\u307F\u3067\u53CD\u6620\uFF09</span></label>
        <label>\u97F3\u697D <input type="range" min="0" max="1" step="0.05" data-s="music"></label>
        <label>\u52B9\u679C\u97F3 <input type="range" min="0" max="1" step="0.05" data-s="sfx"></label>
        <label>\u74B0\u5883\u97F3 <input type="range" min="0" max="1" step="0.05" data-s="amb"></label>
        <label>\u8996\u70B9\u306E\u901F\u3055 <input type="range" min="0.3" max="2.5" step="0.1" data-s="sens"></label>
        <label>\u30AB\u30E1\u30E9\u306E\u81EA\u52D5\u8FFD\u5F93 <input type="checkbox" data-s="autoCam"></label>
        <label>\u96E3\u3057\u3055 <select data-s="diff">${Object.entries(Ls).map(([o,l])=>`<option value="${o}">${l.name}</option>`).join("")}</select><span class="note">${Ls[a.diff||"normal"].desc}</span></label>
        <button data-act="photo">\u{1F4F7} \u5199\u771F\u30E2\u30FC\u30C9\uFF08P\uFF09</button>
        <button class="danger" data-act="reset">\u306F\u3058\u3081\u304B\u3089\u3084\u308A\u76F4\u3059</button>
      </div>`}this.show("menu",`<div class="tabs"><button data-tab="party">\u4EF2\u9593</button><button data-tab="items">\u6301\u3061\u7269</button><button data-tab="record">\u8A18\u9332</button><button data-tab="save">\u30BB\u30FC\u30D6\uFF0F\u30ED\u30FC\u30C9</button><button data-tab="settings">\u8A2D\u5B9A</button></div><div class="mbody">${i}</div><div class="mhelp">\u30B2\u30FC\u30E0\u306F\u4E00\u6642\u505C\u6B62\u4E2D\uFF08Esc\u30AD\u30FC\uFF0F\u2715\u3067\u9589\u3058\u308B\uFF09</div>`),this.layer.querySelectorAll("[data-tab]").forEach(a=>{a.classList.toggle("on",a.dataset.tab===t),a.addEventListener("click",()=>this.menu(a.dataset.tab))}),this.layer.querySelectorAll(".use").forEach(a=>a.addEventListener("click",()=>{e.useFood(a.dataset.k)&&this.menu("items")})),this.layer.querySelectorAll(".usedish").forEach(a=>a.addEventListener("click",()=>{e.life.useDish(a.dataset.k)&&this.menu("items")}));let n=this.layer.querySelector("[data-act=photo]");n&&n.addEventListener("click",()=>{this.close(),setTimeout(()=>e.photo.start(),50)}),this.layer.querySelectorAll("[data-s]").forEach(a=>{let o=a.dataset.s,l=e.settings;a.type==="checkbox"?a.checked=!!l[o]:a.value=l[o],a.addEventListener("input",()=>{l[o]=a.type==="checkbox"?a.checked:a.tagName==="SELECT"?a.value:Number(a.value),e.applySettings(),o==="diff"&&this.menu("settings")})}),this.layer.querySelectorAll(".slot .sv").forEach(a=>a.addEventListener("click",()=>{let o=+a.dataset.n;e.constructor.slotData(o)&&!confirm(`\u30B9\u30ED\u30C3\u30C8${o}\u306B\u4E0A\u66F8\u304D\u3057\u3066\u30BB\u30FC\u30D6\u3057\u307E\u3059\u304B\uFF1F`)||e.saveSlot(o)&&this.menu("save")})),this.layer.querySelectorAll(".slot .ld").forEach(a=>a.addEventListener("click",()=>{let o=+a.dataset.n;confirm(`\u30B9\u30ED\u30C3\u30C8${o}\u3092\u30ED\u30FC\u30C9\u3057\u307E\u3059\u304B\uFF1F\uFF08\u4ECA\u306E\u9032\u307F\u5177\u5408\u306F\u30BB\u30FC\u30D6\u3057\u3066\u3044\u306A\u3051\u308C\u3070\u5931\u308F\u308C\u307E\u3059\uFF09`)&&(e.noSave=!0,this.fade(()=>e.constructor.loadSlotAndRestart(o)))}));let r=this.layer.querySelector("[data-act=reset]");r&&r.addEventListener("click",()=>{confirm("\u4FDD\u5B58\u30C7\u30FC\u30BF\u3092\u6D88\u3057\u3066\u3001\u306F\u3058\u3081\u304B\u3089\u3084\u308A\u76F4\u3057\u307E\u3059\u304B\uFF1F")&&(e.noSave=!0,e.constructor.clearSave(),location.reload())})}fade(t){this.fadeEl.classList.add("on"),setTimeout(()=>{t&&t(),setTimeout(()=>this.fadeEl.classList.remove("on"),350)},450)}credits(t){let e=md("div","credits",`<div class="cin">
      <div class="ct">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="cs">\u2015\u4E03\u5F69\u306E\u98A8\u3068\u9727\u306E\u5DE8\u50CF\u2015</div>
      <p>\u4F01\u753B\u30FB\u4ED5\u69D8\u30FB\u30D7\u30ED\u30B0\u30E9\u30E0\u30FB\u753B\u50CF\u30FB\u4F5C\u66F2</p><b>Claude Code</b>
      <p>\u4F9D\u983C\u30FB\u76E3\u4FEE</p><b>\u690D\u7530\u7ADC\u4E5F</b>
      <p>\u4F7F\u7528\u30E9\u30A4\u30D6\u30E9\u30EA</p><b>three.js\uFF08MIT License\uFF09</b>
      <p>\u74B0\u5883\u306E\u7D20\u6750\u306E\u4E00\u90E8</p><b>\u5929\u8108\u306E\u65C5\u4EBA\uFF08Codex \u5236\u4F5C\uFF09\u3088\u308A\u6D41\u7528</b>
      <p>\u904A\u3093\u3067\u304F\u308C\u305F\u3042\u306A\u305F\u3078</p><b>\u3042\u308A\u304C\u3068\u3046\uFF01</b>
      <div class="cend">\u2015 \u4E03\u5F69\u306E\u98A8\u306F\u3001\u3075\u305F\u305F\u3073\u5927\u9678\u3092\u3081\u3050\u308B \u2015</div></div>`);document.getElementById("ui").appendChild(e),this.g.audio?.music("ending");let i=!1,n=()=>{i||(i=!0,e.classList.add("out"),setTimeout(()=>e.remove(),1200),this.g.audio?.music(null),t&&t())};e.addEventListener("click",n),setTimeout(n,32e3)}};function $b(s){return{sora:"\u901A\u5E38\uFF1A5\u6BB5\u306E\u5263\u6483\u3002E\uFF1A\u98A8\u306E\u6E26\u3067\u6575\u3092\u5438\u3044\u5BC4\u305B\u308B\uFF08\u9577\u62BC\u3057\u3067\u5927\u6E26\uFF09\u3002Q\uFF1A\u7ADC\u5DFB\u304C\u524D\u9032\u3057\u3001\u89E6\u308C\u305F\u5143\u7D20\u3092\u5438\u3044\u8FBC\u3080\u3002",akane:"\u901A\u5E38\uFF1A\u91CD\u30444\u6BB5\u306E\u5927\u5263\u3002E\uFF1A\u708E\u306E\u65AC\u308A\u4E0A\u3052\u30017\u79D2\u9593\u653B\u6483\u304C\u708E\u306B\u306A\u308B\u3002Q\uFF1A\u5927\u7206\u708E\u306E\u4E00\u9583\u3068\u71C3\u3048\u308B\u5927\u5730\u3002",mizuha:"\u901A\u5E38\uFF1A\u6C34\u306E\u73E0\u3092\u653E\u3064\uFF08\u6C34\u304C\u4ED8\u304F\uFF09\u3002E\uFF1A\u6C34\u306E\u6CE1\u3067\u4EF2\u9593\u3092\u56DE\u5FA9\u3057\u7D9A\u3051\u308B\u3002Q\uFF1A12\u79D2\u9593\u306E\u6C34\u306E\u7D50\u754C\u3067\u56DE\u5FA9\u3068\u6C34\u653B\u6483\u3002",raika:"\u901A\u5E38\uFF1A\u9023\u5C04\u306E\u77E2\u3002\u9577\u62BC\u3057\uFF1A\u96F7\u306E\u72D9\u3044\u6483\u3061\u3002E\uFF1A\u96F7\u306E\u9DF9\u304C3\u4F53\u3092\u5C04\u629C\u304F\u3002Q\uFF1A\u96F7\u306E\u96E8\u3002"}[s]}var ze=(s,t={})=>new Ke({color:s,...t}),w0=[{id:"pz_t1",kind:"torch",x:150,z:476,name:"\u8349\u539F\u306E\u71ED\u53F0",hint:"\u3042\u306E\u71ED\u53F0\u3001\u305C\u3093\u3076\u306B\u706B\u3092\u706F\u3057\u305F\u3089\u4F55\u304B\u8D77\u304D\u305D\u3046\uFF01\uFF08\u708E\u306E\u653B\u6483\uFF09"},{id:"pz_t2",kind:"torch",x:-108,z:170,name:"\u6E56\u7554\u306E\u71ED\u53F0",hint:"\u71ED\u53F0\u304C4\u3064\u2026\u2026\u708E\u3067\u706F\u3057\u3066\u307F\u3088\u3046\u3088\uFF01"},{id:"pz_t3",kind:"torch",x:-450,z:102,name:"\u68EE\u306E\u71ED\u53F0",hint:"\u68EE\u306E\u5965\u306E\u71ED\u53F0\u3060\u3002\u30A2\u30AB\u30CD\u306E\u708E\u306A\u3089\u3044\u3051\u308B\u304B\u3082\uFF01"},{id:"pz_p1",kind:"pillar",x:414,z:-20,name:"\u65AD\u5D16\u306E\u96F7\u67F1",hint:"\u7D2B\u306E\u7D50\u6676\u304C\u5149\u3063\u3066\u308B\u2026\u2026\u96F7\u306E\u529B\u306B\u53CD\u5FDC\u3057\u305D\u3046\uFF01\uFF08\u30E9\u30A4\u30AB\u306E\u6E9C\u3081\u6483\u3061\u304B\u30B9\u30AD\u30EB\uFF09"},{id:"pz_p2",kind:"pillar",x:24,z:-308,name:"\u5C71\u9053\u306E\u96F7\u67F1",hint:"\u3053\u306E\u5C01\u5370\u3001\u96F7\u3067\u89E3\u3051\u305D\u3046\u306A\u6C17\u304C\u3059\u308B\uFF01"},{id:"pz_w1",kind:"windmill",x:-22,z:362,name:"\u4E18\u306E\u5C0F\u3055\u306A\u98A8\u8ECA",hint:"\u98A8\u8ECA\u304C\u6B62\u307E\u3063\u3066\u308B\u3002\u98A8\u3092\u5F53\u3066\u305F\u3089\u56DE\u308B\u304B\u306A\uFF1F\uFF08\u30BD\u30E9\u306E\u30B9\u30AD\u30EB\uFF09"}],jb=[[40,420],[118,402],[345,316],[314,350],[-60,330],[200,440],[-140,250]],ah=class{constructor(t){this.g=t,this.weather=new eh,this.buffs=new ih,this.stats={kills:0,cooks:0,gathered:0,photos:0,birds:0,playTime:0,glideBest:0,reactions:[],dishes:[],rainbow:!1},this.ach=new Set,this.picked={},this.explored=new Set,this.day=0,this.lastHour=null,this.solved=new Set,this.pzOpened=new Set,this.hinted=new Set,this.flash=0,this.boltT=8,this.wetT=0,this.checkT=0,this.cullT=0,this.glideD=0,this.downT={}}get diff(){return Ls[this.g.settings?.diff]?this.g.settings.diff:"normal"}takenMul(){return Ls[this.diff].taken/(1+this.buffs.val("def"))}enemyHpMul(){return Ls[this.diff].enemyHp}build(){let t=this.g,e=t.world,i=t.scene;this.root=new jt,i.add(this.root),this.gathers=b0(e).map(a=>{let o=Zb(a.kind),l=e.heightAt(a.x,a.z)+(a.high?2.3:0);return o.position.set(a.x,l,a.z),o.rotation.y=a.x*7.1%6.28,o.visible=!1,this.root.add(o),{...a,y:l,m:o}});let n=t.props.campfire;this.fires=[{x:n.x,z:n.z,y:n.y,name:"\u91CE\u55B6\u5730\u306E\u711A\u304D\u706B"}];let r=t.props.fountain;if(r){let a=r.x+8,o=r.z+1,l=e.groundAt(a,o),c=Kb();c.position.set(a,l,o),this.root.add(c),e.addCollider({x:a,z:o,r:.8,top:l+.9}),this.fires.push({x:a,z:o,y:l+.9,name:"\u753A\u306E\u5927\u934B"})}for(let a of t.wpObjs){let o=a.x*.37%6.28,l=a.x+Math.cos(o)*4.2,c=a.z+Math.sin(o)*4.2;if(e.heightAt(l,c)<1)continue;let h=e.groundAt(l,c),d=Jb();d.position.set(l,h,c),this.root.add(d),this.fires.push({x:l,z:c,y:h+.35,name:"\u65C5\u306E\u711A\u304D\u706B"})}this.puzzles=w0.map(a=>this.buildPuzzle(a)),this.buildButterflies(),this.buildBirds(),this.buildFish(),this.statusEl=document.createElement("div"),this.statusEl.className="lmstatus",document.getElementById("ui").appendChild(this.statusEl)}buildPuzzle(t){let e=this.g,i=e.world,n=i.heightAt(t.x,t.z),r={...t,y:n,targets:[],chest:null},a=new jt;if(a.position.set(t.x,n,t.z),this.root.add(a),t.kind==="torch"){r.lit=[0,0,0,0];for(let d=0;d<4;d++){let u=d/4*Math.PI*2+Math.PI/4,f=t.x+Math.cos(u)*5.5,p=t.z+Math.sin(u)*5.5,x=i.heightAt(f,p),m=Qb();m.position.set(f,x,p),this.root.add(m),i.addCollider({x:f,z:p,r:.4,top:x+1.4}),r.targets.push({i:d,x:f,y:x+1.4,z:p,m,el:["fire","water"]})}}else if(t.kind==="pillar"){let d=t_();d.position.set(t.x+3.2,i.heightAt(t.x+3.2,t.z),t.z),this.root.add(d),i.addCollider({x:t.x+3.2,z:t.z,r:.7,top:d.position.y+3.6}),r.targets.push({x:t.x+3.2,y:d.position.y+3.2,z:t.z,m:d,el:["thunder"]});let u=new V(new Ht(1.4,24,16),new Qt({color:12615935,transparent:!0,opacity:.28,depthWrite:!1,blending:Ge}));u.position.set(t.x-1.5,n+.7,t.z),this.root.add(u),r.seal=u}else if(t.kind==="windmill"){let d=e_();d.position.set(t.x,n-.2,t.z),this.root.add(d),i.addCollider({x:t.x,z:t.z,r:1.6,top:n+6.5}),r.blades=d.userData.blades,r.targets.push({x:t.x,y:n+1.5,z:t.z,m:d,el:["wind"],r:3.5}),r.up={x:t.x+6,z:t.z,top:n+32},r.plat={x:t.x+6,z:t.z+11,y:n+21};let u=new V(new Ct(4.6,1.6,2.8,11),ze(10130568));u.position.set(r.plat.x,r.plat.y-1.4,r.plat.z),u.castShadow=!0,this.root.add(u);let f=new V(new Ct(4.65,4.65,.2,11),ze(8174682));f.position.set(r.plat.x,r.plat.y-.05,r.plat.z),this.root.add(f),i.addCollider({x:r.plat.x,z:r.plat.z,r:4.5,top:r.plat.y,bottom:r.plat.y-2.8}),r.column=new V(new Ct(2.4,2.4,32,16,1,!0),new Qt({color:9434588,transparent:!0,opacity:0,depthWrite:!1,side:fe,blending:Ge})),r.column.position.set(r.up.x,n+16,r.up.z),this.root.add(r.column)}let o=t.kind==="windmill"?r.plat.x:t.kind==="pillar"?t.x-1.5:t.x,l=t.kind==="windmill"?r.plat.z:t.z,c=t.kind==="windmill"?r.plat.y:i.heightAt(o,l),h=Qc(1);return h.position.set(o,c,l),h.rotation.y=.6,h.visible=t.kind!=="torch",this.root.add(h),r.chest={x:o,y:c,z:l,o:h,open:0},r}buildButterflies(){let t=new ri(.16,.12);t.translate(.08,0,0);let e=[16773792,16777215,10475775,16756952,16760944];this.flies=[];let i=this.g.R.quality==="low"?5:10;for(let n=0;n<i;n++){let r=new Qt({color:e[n%e.length],side:fe}),a=new jt,o=new V(t,r),l=new V(t,r);l.scale.x=-1,a.add(o,l),a.visible=!1,this.root.add(a),this.flies.push({b:a,l:o,r:l,a:new R,ph:Math.random()*9,seed:Math.random()*100})}}buildBirds(){let t=new Ht(.11,8,6);t.scale(1,.8,1.5);let e=new Ht(.07,8,6),i=new ri(.22,.1);i.translate(.11,0,0),i.rotateX(-Math.PI/2);let n=[9071178,5929640,10125408];this.flocks=jb.map(([r,a],o)=>{let l=[];for(let c=0;c<5;c++){let h=ze(n[(o+c)%3]),d=new jt,u=new jt;u.add(new V(t,h));let f=new V(e,h);f.position.set(0,.07,.14),u.add(f);let p=new V(new Se(.02,.06,4),ze(15245360));p.rotation.x=Math.PI/2,p.position.set(0,.06,.22),u.add(p),d.add(E0(u,"bird"+(o+c)%3));let x=new V(i,h),m=new V(i,h);m.scale.x=-1,x.position.y=m.position.y=.04,d.add(x,m),d.visible=!1,this.root.add(d);let g=(Math.random()-.5)*3,v=(Math.random()-.5)*3;d.position.set(r+g,this.g.world.heightAt(r+g,a+v),a+v),l.push({b:d,l:x,r:m,off:new R(g,0,v),v:new R,hop:Math.random()*3})}return{x:r,z:a,hx:r,hz:a,state:"ground",t:0,birds:l}})}buildFish(){let t=new Ht(.16,8,6);t.scale(.5,.7,1.6);let e=new Se(.1,.18,4);e.rotateX(-Math.PI/2),e.translate(0,0,-.3),this.fish=[];for(let i=0;i<6;i++){let n=ze(i%2?9093344:13672560),r=new jt;r.add(new V(t,n)),r.add(new V(e,n)),r.visible=!1,this.root.add(r),this.fish.push({f:r,c:new R,a:Math.random()*6,r:1+Math.random()*2,jumpT:-1,next:2+Math.random()*8,on:!1})}}update(t){let e=this.g,i=e.mover,n=i.p,r=e.time;this.lastHour!=null&&e.hour<this.lastHour-12&&this.day++,this.lastHour=e.hour,this.stats.playTime+=t,this.buffs.update(t),i.stamMul=1-this.buffs.val("stam");let a=this.weather;a.locked=e.quests.step<2||!!(e.boss&&!e.boss.dead&&e.boss.state!=="idle")||!!e.endingNow;let o=a.update(t);if(o&&(e.notify(`\u5929\u6C17\uFF1A${nh[o]}`,o==="clear"?"gold":"water"),(o==="rain"||o==="storm")&&!e.flags.rainTip&&(e.flags.rainTip=!0,setTimeout(()=>e.notify("\u30DD\u30DD\u300C\u96E8\u3060\uFF01\u3000\u6575\u304C\u3073\u3057\u3087\u6FE1\u308C\u2026\u2026\u96F7\u3084\u6C37\u306E\u6280\u304C\u3088\u304F\u52B9\u304F\u3088\uFF01\u300D","water"),2500))),a.rainbow>.3&&!this.stats.rainbow&&(this.stats.rainbow=!0,e.notify("\u30DD\u30DD\u300C\u898B\u3066\uFF01\u3000\u8679\u304C\u51FA\u3066\u308B\uFF01\u300D","gold")),a.raining){if(this.wetT-=t,this.wetT<=0){this.wetT=2.5;for(let l of e.enemies)l.dead||l.el&&l.el!=="water"||l.pos.distanceToSquared(n)>6400||(!l.aura||l.aura.el==="water")&&(l.aura={el:"water",gauge:1,time:6})}if(Math.random()<.5){let l=Math.random()*6.28,c=Math.random()*7,h=n.x+Math.cos(l)*c,d=n.z+Math.sin(l)*c,u=e.world.heightAt(h,d);e.fx.emit({x:h,y:Math.max(u,0)+.05,z:d,n:2,color:14215423,speed:1.2,up:1.2,grav:8,life:.25,size:.08})}}if(a.storm>.6&&(this.boltT-=t,this.boltT<=0)){this.boltT=5+Math.random()*9;let l=Math.random()*6.28,c=70+Math.random()*120,h=n.x+Math.cos(l)*c,d=n.z+Math.sin(l)*c,u=Math.max(0,e.world.heightAt(h,d));e.fx.bolt(new R(h,u+160,d),new R(h,u,d),"thunder",.3,4),this.flash=1,this.flash2=.12,e.audio?.thunderClap?.(Math.min(1,c/200))}this.flash2>0&&(this.flash2-=t,this.flash2<=0&&(this.flash=Math.max(this.flash,.7))),this.flash=Math.max(0,this.flash-t*4);for(let l of this.puzzles)if(l.kind==="windmill"&&this.solved.has(l.id)&&i.mode==="glide"&&n.y<l.up.top){let c=l.up.x-n.x,h=l.up.z-n.z,d=Math.hypot(c,h);if(d<4.5&&d>.3){let u=Math.min(d,t*4);n.x+=c/d*u,n.z+=h/d*u}}if(i.mode==="glide"?(this.glidePrev&&(this.glideD+=Math.hypot(n.x-this.glidePrev.x,n.z-this.glidePrev.z)),this.glidePrev={x:n.x,z:n.z},this.stats.glideBest=Math.max(this.stats.glideBest,this.glideD)):(this.glideD=0,this.glidePrev=null),this.diff==="easy"&&!e.battle.combat)for(let l of e.party){if(l.alive||!e.unlocked.includes(l.id)){this.downT[l.id]=0;continue}this.downT[l.id]=(this.downT[l.id]||0)+t,this.downT[l.id]>15&&(l.alive=!0,l.hp=Math.round(l.maxHp*.3),this.downT[l.id]=0,e.notify(`${l.name}\u304C\u8D77\u304D\u4E0A\u304C\u3063\u305F`,"heal"))}if(this.cullT-=t,this.cullT<=0){this.cullT=.5;for(let l of this.gathers)l.m.visible=this.available(l)&&Math.hypot(l.x-n.x,l.z-n.z)<75}for(let l of this.gathers)l.m.visible&&(l.m.rotation.y+=t*.6,l.kind==="fish"&&(l.m.children[0].rotation.z=Math.sin(r*9+l.x)*.5),Math.random()<t*1.2&&Math.hypot(l.x-n.x,l.z-n.z)<30&&e.fx.emit({x:l.x,y:l.y+.5,z:l.z,n:1,color:16773296,speed:.3,up:.6,life:.9,size:.18,radius:.5}));for(let l of this.fires)Math.hypot(l.x-n.x,l.z-n.z)<45&&Math.random()<.5&&e.fx.emit({x:l.x,y:l.y,z:l.z,n:1,color:16747056,speed:.5,up:1.8,life:.7,size:.32,radius:.35});for(let l of this.puzzles)this.updatePuzzle(l,t,n,r);this.updateButterflies(t,n,r),this.updateBirds(t,n,r),this.updateFish(t,n,r),this.checkT-=t,this.checkT<=0&&(this.checkT=1,this.checkAchievements(),this.drawStatus())}weatherState(){let t=this.weather;return{cloud:t.cloud,rain:t.rain,storm:t.storm,flash:this.flash}}available(t){return this.picked[t.id]==null||this.picked[t.id]<this.day}pick(t){let e=this.g;this.picked[t.id]=this.day,this.explored.add(t.id),t.m.visible=!1,e.items[t.kind]=(e.items[t.kind]||0)+1,this.stats.gathered++,e.fx.emit({x:t.x,y:t.y+.4,z:t.z,n:18,color:16773296,speed:2.5,up:1.5,life:.6,size:.22}),e.audio?.sfx("pickup"),e.notify(`${hn[t.kind].name}\u3092\u624B\u306B\u5165\u308C\u305F\uFF08\u6240\u6301 ${e.items[t.kind]}\uFF09`,"gold")}cookMenu(t){let e=this.g,i=Object.keys(hn).map(r=>`${hn[r].name}${e.items[r]||0}`).join("\u30FB"),n=Object.entries(un).map(([r,a])=>({text:`${dd(e.items,r)?"":"\uFF08\u6750\u6599\u4E0D\u8DB3\uFF09"}${a.name}\uFF3B${fd(r)}\uFF3D\u2014 ${a.desc}`,fn:()=>this.doCook(r,t)}));n.push({text:"\u3084\u3081\u308B",fn:()=>{}}),e.dialog([[t.name,`\u4F55\u3092\u4F5C\u308B\uFF1F\u3000\u624B\u6301\u3061\uFF1A${i}`]],null,n)}doCook(t,e){let i=this.g,n=un[t];if(!y0(i.items,t)){i.notify(`\u6750\u6599\u304C\u8DB3\u308A\u306A\u3044\uFF08${fd(t)}\uFF09`,"phys");return}this.stats.cooks++,this.stats.dishes.includes(t)||this.stats.dishes.push(t),i.fx.emit({x:e.x,y:e.y+.8,z:e.z,n:40,color:"gold",speed:3,up:2,life:.8,size:.28}),i.audio?.sfx("unlock"),i.notify(`${n.name}\u3092\u4F5C\u3063\u305F\uFF01\uFF08\u6240\u6301 ${i.items[t]}\uFF09\u3000\u30E1\u30CB\u30E5\u30FC\u306E\u300C\u6301\u3061\u7269\u300D\u3067\u98DF\u3079\u3089\u308C\u307E\u3059`,"gold"),i.save()}useDish(t){let e=this.g,i=un[t];if(!i||!e.items[t])return!1;if(i.heal){let n=e.activeMember;if(n.hp>=n.maxHp)return e.notify("HP\u306F\u6E80\u30BF\u30F3","phys"),!1;e.healActive(n.maxHp*i.heal)}else this.buffs.add(i.buff,i.val,i.time),e.notify(`${i.name}\u3092\u98DF\u3079\u305F\uFF1A${i.desc}`,"gold");return e.items[t]--,e.audio?.sfx("eat"),this.drawStatus(),!0}updatePuzzle(t,e,i,n){let r=this.g,a=this.solved.has(t.id),o=Math.hypot(t.x-i.x,t.z-i.z);if(!a&&o<16&&!this.hinted.has(t.id)&&(this.hinted.add(t.id),r.notify(`\u30DD\u30DD\u300C${t.hint}\u300D`,"wind")),t.kind==="torch")for(let c of t.targets){!a&&t.lit[c.i]>0&&(t.lit[c.i]=Math.max(0,t.lit[c.i]-e));let h=a||t.lit[c.i]>0;c.m.userData.flame.visible=h,h&&o<60&&(c.m.userData.flame.scale.setScalar(1+Math.sin(n*13+c.i)*.12),Math.random()<.4&&r.fx.emit({x:c.x,y:c.y+.35,z:c.z,n:1,color:16747056,speed:.3,up:1.4,life:.5,size:.25,radius:.15}))}else t.kind==="pillar"?(t.seal.visible=!a,a||(t.seal.material.opacity=.22+Math.sin(n*2.5)*.06,t.targets[0].m.userData.gem.rotation.y+=e)):t.kind==="windmill"&&a&&(t.blades.rotation.z+=e*2.2,t.column.material.opacity=.06+Math.sin(n*3)*.02,o<60&&Math.random()<.5&&r.fx.emit({x:t.up.x+(Math.random()-.5)*3,y:t.y+1+Math.random()*20,z:t.up.z+(Math.random()-.5)*3,n:1,color:"wind",speed:.3,up:8,life:1.2,size:.3}));let l=t.chest;l.o.visible=t.kind!=="torch"||a,this.pzOpened.has(t.id)&&l.open<1?(l.open=Math.min(1,l.open+e*2),l.o.userData.lidPivot.rotation.x=-l.open*1.9,l.o.userData.glow.material.opacity=.6*(1-l.open),l.open>=1&&(l.o.userData.glow.visible=!1)):this.pzOpened.has(t.id)||(l.o.userData.glow.material.opacity=.18+Math.sin(n*3)*.08)}updraftAt(t){for(let e of this.puzzles)if(e.kind==="windmill"&&this.solved.has(e.id)&&Math.hypot(t.x-e.up.x,t.z-e.up.z)<4&&t.y<e.up.top)return 1;return 0}hitProps(t,e,i,n,r,a,o,l){if(!r||r==="phys"||!this.puzzles)return!1;let c=!1;for(let h of this.puzzles)if(!(Math.hypot(h.x-t,h.z-i)>n+12))for(let d of h.targets){if(!d.el.includes(r))continue;let u=d.x-t,f=d.z-i,p=Math.hypot(u,f);p>n+(d.r||.8)||Math.abs(d.y-e)>(d.r?8:3)||a!=null&&p>.5&&(u*a+f*o)/p<l||(c=!0,this.propHit(h,d,r))}return c}nearestProp(t,e,i){let n=null,r=e;for(let a of this.puzzles||[])if(!this.solved.has(a.id)){for(let o of a.targets)if(o.el.includes(i)){let l=Math.hypot(o.x-t.x,o.z-t.z);l<r&&(r=l,n=o)}}return n}propHit(t,e,i){let n=this.g;if(!this.solved.has(t.id))if(t.kind==="torch"){if(i==="water"){t.lit[e.i]>0&&(t.lit[e.i]=0,n.fx.emit({x:e.x,y:e.y+.3,z:e.z,n:14,color:13621472,speed:1,up:1.5,life:.7,size:.3}));return}let r=t.lit[e.i]>0;t.lit[e.i]=this.weather.raining?15:30,r||(n.audio?.sfx("skill_fire"),n.fx.emit({x:e.x,y:e.y+.3,z:e.z,n:24,color:"fire",speed:2.5,up:2,life:.6,size:.3}));let a=t.lit.filter(o=>o>0).length;a===4?this.solve(t):r||n.notify(`\u71ED\u53F0\u306B\u706B\u304C\u706F\u3063\u305F\uFF08${a}/4\uFF09${this.weather.raining?"\u3000\u96E8\u3067\u65E9\u304F\u6D88\u3048\u305D\u3046\uFF01":""}`,"fire")}else t.kind==="pillar"&&i==="thunder"?(n.fx.emit({x:e.x,y:e.y,z:e.z,n:60,color:"thunder",speed:6,life:.6,size:.35}),n.fx.ring(t.seal.position.x,t.seal.position.y,t.seal.position.z,"thunder",3,.6),this.solve(t)):t.kind==="windmill"&&i==="wind"&&(this.solve(t),n.notify("\u98A8\u8ECA\u304C\u56DE\u308A\u51FA\u3057\u3001\u4E0A\u6607\u6C17\u6D41\u304C\u751F\u307E\u308C\u305F\uFF01\u3000\u6ED1\u7A7A\u3057\u3066\u4E57\u3063\u3066\u307F\u3088\u3046","wind"))}solve(t){let e=this.g;this.solved.add(t.id),e.audio?.sfx("shrine"),e.hud.showBanner("\u4ED5\u639B\u3051\u3092\u89E3\u3044\u305F\uFF01",t.name,"lvup"),t.kind!=="windmill"&&e.fx.emit({x:t.chest.x,y:t.chest.y+1,z:t.chest.z,n:80,color:"gold",speed:5,up:3,life:1,size:.32}),e.save()}openPuzzleChest(t){let e=this.g;this.pzOpened.add(t.id),this.explored.add(t.id);let i=pd(t.x*31+t.z),n=Object.keys(hn),r=[];for(let a=0;a<3;a++){let o=n[Math.floor(i()*n.length)];e.items[o]=(e.items[o]||0)+1,r.push(hn[o].name)}e.fx.emit({x:t.chest.x,y:t.chest.y+.8,z:t.chest.z,n:60,color:"gold",speed:4,up:3,life:1,size:.3}),e.audio?.sfx("chest"),e.reward(400,800,`\u4ED5\u639B\u3051\u306E\u5B9D\u7BB1\uFF08${r.join("\u30FB")}\uFF09`),e.save()}interactables(t,e){for(let i of this.gathers)if(i.m.visible){let n=Math.hypot(t.x-i.x,t.z-i.z);n<2.2&&Math.abs(t.y+1-i.y)<3&&e(n,{label:`${hn[i.kind].name}\u3092\u62FE\u3046`,use:()=>this.pick(i)})}for(let i of this.fires){let n=Math.hypot(t.x-i.x,t.z-i.z);n<3&&e(n+.3,{label:`${i.name}\u3067\u6599\u7406\u3059\u308B`,use:()=>this.cookMenu(i)})}for(let i of this.puzzles){let n=i.chest;if(!this.solved.has(i.id)||this.pzOpened.has(i.id))continue;let r=Math.hypot(t.x-n.x,t.z-n.z);r<2.2&&Math.abs(t.y-n.y)<2&&e(r,{label:"\u4ED5\u639B\u3051\u306E\u5B9D\u7BB1\u3092\u958B\u3051\u308B",use:()=>this.openPuzzleChest(i)})}}updateButterflies(t,e,i){let n=this.g,r=n.hour>6.2&&n.hour<18&&this.weather.rain<.3;for(let a of this.flies){if(!r){a.b.visible=!1;continue}if(!a.b.visible||a.a.distanceToSquared(e)>2025){let p=!1;for(let x=0;x<6&&!p;x++){let m=Math.random()*6.28,g=10+Math.random()*25,v=e.x+Math.cos(m)*g,b=e.z+Math.sin(m)*g,y=n.world.heightAt(v,b);y>1.5&&n.world.slopeAt(v,b)<.4&&(a.a.set(v,y,b),p=!0)}if(a.b.visible=p,!p)continue}a.ph+=t;let o=a.seed,l=a.a.x+Math.sin(a.ph*.5+o)*2.5+Math.sin(a.ph*1.3+o*2)*.8,c=a.a.z+Math.cos(a.ph*.4+o)*2.5+Math.sin(a.ph*1.1+o*3)*.8,h=n.world.heightAt(l,c)+.7+Math.sin(a.ph*.9+o)*.45,d=l-a.b.position.x,u=c-a.b.position.z;a.b.position.set(l,h,c),Math.abs(d)+Math.abs(u)>1e-4&&(a.b.rotation.y=Math.atan2(d,u)-Math.PI/2);let f=Math.sin(a.ph*22+o)*1.1;a.l.rotation.y=f,a.r.rotation.y=-f}}updateBirds(t,e,i){let n=this.g,r=n.world;for(let a of this.flocks){let o=Math.hypot(a.x-e.x,a.z-e.z),l=o<120;if(a.t+=t,a.state==="ground"){if(o<7&&n.mover.mode!=="swim"){a.state="fly",a.t=0;for(let c of a.birds){let h=c.b.position.x-e.x,d=c.b.position.z-e.z,u=Math.hypot(h,d)||1;c.v.set(h/u*(6+Math.random()*3),5+Math.random()*3,d/u*(6+Math.random()*3))}n.audio?.sfx("glide"),this.stats.birds++}}else if(a.state==="fly"&&a.t>5){for(let c=0;c<10;c++){let h=Math.random()*6.28,d=30+Math.random()*30,u=a.hx+Math.cos(h)*d*.6,f=a.hz+Math.sin(h)*d*.6;if(r.heightAt(u,f)>1.5&&r.slopeAt(u,f)<.35&&Math.hypot(u-e.x,f-e.z)>20){a.x=u,a.z=f;break}}a.state="land",a.t=0}else a.state==="land"&&a.t>4&&(a.state="ground",a.t=0);for(let c of a.birds){if(c.b.visible=l,!l){a.state!=="ground"&&(a.state="ground"),c.b.position.set(a.x+c.off.x,r.heightAt(a.x+c.off.x,a.z+c.off.z),a.z+c.off.z);continue}let h=a.x+c.off.x,d=a.z+c.off.z,u=r.heightAt(h,d);if(a.state==="ground")c.hop-=t,(c.b.position.y>u+.02||c.hop<.15)&&(c.b.position.x+=(h-c.b.position.x)*Math.min(1,t*2),c.b.position.z+=(d-c.b.position.z)*Math.min(1,t*2),c.b.position.y=u+(c.hop<.15&&c.hop>0?Math.sin(c.hop/.15*Math.PI)*.12:0)),c.hop<0&&(c.hop=1+Math.random()*3,c.b.rotation.y=Math.random()*6.28),c.b.rotation.x=Math.max(0,Math.sin(i*3+c.off.x*5))*.5,c.l.rotation.z=c.r.rotation.z=0;else if(a.state==="fly"){c.v.y-=t*1.5,c.b.position.addScaledVector(c.v,t),c.b.rotation.set(-.3,Math.atan2(c.v.x,c.v.z),0);let f=Math.sin(i*28+c.off.z*9)*.9;c.l.rotation.z=f,c.r.rotation.z=-f}else{let f=Math.min(1,a.t/4),p=h,x=d,m=u+(1-f)*6;c.b.position.x+=(p-c.b.position.x)*Math.min(1,t*1.6),c.b.position.z+=(x-c.b.position.z)*Math.min(1,t*1.6),c.b.position.y+=(m-c.b.position.y)*Math.min(1,t*2.5),c.b.rotation.set(0,Math.atan2(p-c.b.position.x,x-c.b.position.z),0);let g=Math.sin(i*24+c.off.z*9)*.8;c.l.rotation.z=g,c.r.rotation.z=-g}}}}updateFish(t,e,i){let n=this.g,r=n.world;for(let a of this.fish){if(!a.on||a.c.distanceToSquared(e)>2500){a.on=!1,a.f.visible=!1;for(let o=0;o<4;o++){let l=Math.random()*6.28,c=8+Math.random()*25,h=e.x+Math.cos(l)*c,d=e.z+Math.sin(l)*c;if(r.heightAt(h,d)<-1.5){a.c.set(h,0,d),a.on=!0;break}}if(!a.on)continue}if(a.f.visible=!0,a.jumpT>=0){a.jumpT+=t;let o=a.jumpT/.9,l=a.c.x+Math.cos(a.a)*a.r,c=a.c.z+Math.sin(a.a)*a.r;a.f.position.set(l+Math.cos(a.a+1.57)*o*1.5,-.2+Math.sin(o*Math.PI)*1.3,c+Math.sin(a.a+1.57)*o*1.5),a.f.rotation.set(-Math.cos(o*Math.PI)*.9,-a.a,0),o>=1&&(a.jumpT=-1,a.next=4+Math.random()*10,n.fx.emit({x:a.f.position.x,y:.1,z:a.f.position.z,n:10,color:14217471,speed:2,up:2,grav:9,life:.5,size:.18}),a.a+=1.5)}else a.a+=t*.6,a.f.position.set(a.c.x+Math.cos(a.a)*a.r,-.32,a.c.z+Math.sin(a.a)*a.r),a.f.rotation.set(0,-a.a,Math.sin(i*8)*.1),a.next-=t,a.next<=0&&a.c.distanceToSquared(e)<1225&&(a.jumpT=0,n.fx.emit({x:a.f.position.x,y:.1,z:a.f.position.z,n:8,color:14217471,speed:2,up:2,grav:9,life:.4,size:.15}))}}onReaction(t){this.stats.reactions.includes(t)||this.stats.reactions.push(t),this.weather.raining&&t==="electro"&&this.unlock("rainElectro"),this.weather.raining&&t==="freeze"&&this.unlock("rainFreeze")}onKill(){this.stats.kills++}onPhoto(){this.stats.photos++,this.checkAchievements()}unlock(t){if(this.ach.has(t))return;let e=ao.find(n=>n.id===t);if(!e)return;this.ach.add(t);let i=this.g;i.hud.showBanner("\u5B9F\u7E3E\u9054\u6210\uFF01",`${e.name}\u3000\u2015\u3000${e.desc}`,"lvup"),i.audio?.sfx("quest"),i.reward(e.mora,e.exp,`\u5B9F\u7E3E\u300C${e.name}\u300D`)}checkAchievements(){let t=this.g,e=this.stats,i=(n,r)=>{n&&this.unlock(r)};if(i(e.cooks>=1,"cook1"),i(e.cooks>=10,"cook10"),i(e.dishes.length>=Object.keys(un).length,"recipes"),i(e.gathered>=30,"gather30"),i(e.reactions.length>=7,"reactions"),i(e.rainbow,"rainbow"),i(e.birds>=1,"birds"),i(e.birds>=10,"birds10"),i(e.photos>=1,"photo1"),i(e.photos>=10,"photo10"),i(this.solved.size>=1,"puzzle1"),i(this.solved.size>=w0.length,"puzzleAll"),i(t.gotCrystals.size>=40,"crystals"),i(t.opened.size>=t.chestObjs.length,"chests"),i(e.kills>=50,"kill50"),i(e.kills>=200,"kill200"),i(t.hour<.4&&e.playTime>60,"midnight"),i(e.glideBest>=150,"glide"),i(!!t.flags.bossDown,"boss"),!this.ach.has("region100")){let n=this.exploration();Object.values(n).some(r=>r.total>=3&&r.pct>=100)&&this.unlock("region100")}}exploration(){let t=this.g,e=[];for(let i of t.chestObjs)e.push({x:i.x,z:i.z,done:t.opened.has(i.id)});for(let i of t.crystalObjs)e.push({x:i.x,z:i.z,done:t.gotCrystals.has(i.id)});for(let i of t.wpObjs)e.push({x:i.x,z:i.z,done:t.waypointsOn.has(i.id)});for(let i of this.puzzles)e.push({x:i.x,z:i.z,done:this.pzOpened.has(i.id)});for(let i of this.gathers)e.push({x:i.x,z:i.z,done:this.explored.has(i.id)});return M0(e)}drawStatus(){let t=this.statusEl;if(!t)return;let e=[],i=this.weather;i.cloud>.4&&e.push(`<span class="wx">${i.storm>.5?"\u26C8 \u96F7\u96E8":i.rain>.5?"\u{1F327} \u96E8":"\u2601 \u304F\u3082\u308A"}</span>`),i.raining&&e.push('<span class="wet">\u{1F4A7} \u6FE1\u308C\uFF08\u6575\u306B\u96F7\u30FB\u6C37\u304C\u52B9\u304F\uFF09</span>');for(let[r,a]of Object.entries(this.buffs.list))e.push(`<span class="bf">\u{1F373} ${ud[r]}+${Math.round(a.val*100)}%\u3000${Math.ceil(a.t/60)}\u5206</span>`);let n=e.join("");n!==this.lastStatus&&(this.lastStatus=n,t.innerHTML=n)}save(){return{weather:this.weather.save(),buffs:this.buffs.save(),stats:this.stats,ach:[...this.ach],picked:this.picked,explored:[...this.explored],day:this.day,solved:[...this.solved],pzOpened:[...this.pzOpened]}}load(t){if(t){this.weather.load(t.weather),this.buffs.load(t.buffs),this.stats={...this.stats,...t.stats||{}},this.ach=new Set(t.ach||[]),this.picked=t.picked||{},this.explored=new Set(t.explored||[]),this.day=t.day||0,this.solved=new Set(t.solved||[]),this.pzOpened=new Set(t.pzOpened||[]);for(let e of this.puzzles||[])this.pzOpened.has(e.id)&&(e.chest.open=.99)}}},rh=new Map;function E0(s,t){if(t&&rh.has(t))return new V(rh.get(t).geo,rh.get(t).mat);s.updateMatrixWorld(!0);let e=[];s.traverse(r=>{if(!r.isMesh)return;let a=(r.geometry.index,r.geometry.clone());a.applyMatrix4(r.matrixWorld);let o=a.attributes.position.count,l=r.material.color,c=new Float32Array(o*3);for(let h=0;h<o;h++)c[h*3]=l.r,c[h*3+1]=l.g,c[h*3+2]=l.b;a.setAttribute("color",new he(c,3));for(let h of Object.keys(a.attributes))["position","normal","color"].includes(h)||a.deleteAttribute(h);e.push(a.index?a.toNonIndexed():a)});let i=an(e),n=new Ke({vertexColors:!0,side:fe});return t&&rh.set(t,{geo:i,mat:n}),new V(i,n)}function Zb(s){if(s==="fish")return S0(s);let t=new jt;return t.add(E0(S0(s),"g_"+s)),t}function S0(s){let t=new jt;if(s==="apple")for(let e=0;e<3;e++){let i=new V(new Ht(.11,10,8),ze(14696494));i.position.set(Math.cos(e*2.1)*.14,.1,Math.sin(e*2.1)*.14),t.add(i);let n=new V(new Se(.04,.09,4),ze(5939264));n.position.set(i.position.x,.23,i.position.z),n.rotation.z=.6,t.add(n)}else if(s==="mushroom")for(let e=0;e<3;e++){let i=.7+e*.25,n=new V(new Ct(.04*i,.05*i,.18*i,8),ze(16182488));n.position.set(Math.cos(e*2.3)*.13,.09*i,Math.sin(e*2.3)*.13),t.add(n);let r=new V(new Ht(.11*i,10,6,0,6.29,0,1.6),ze(e===1?13650490:13144154));r.position.set(n.position.x,.17*i,n.position.z),t.add(r)}else if(s==="mint")for(let e=0;e<7;e++){let i=new V(new Ht(.07,6,4),ze(7002234));i.scale.set(1,.35,1.8);let n=e/7*6.28;i.position.set(Math.cos(n)*.1,.12+e%3*.06,Math.sin(n)*.1),i.rotation.set(.5,-n,0),t.add(i)}else if(s==="honey"){let e=new V(new Ht(.22,6,5),ze(15906864));e.scale.set(1,1.3,1),t.add(e);let i=new V(new Ct(.01,.01,.4,4),ze(5914672));i.position.y=.45,t.add(i)}else if(s==="fish"){let e=new jt,i=new V(new Ht(.12,8,6),ze(10146032));i.scale.set(.6,.8,1.6),e.add(i);let n=new V(new Se(.08,.14,4),ze(10146032));n.rotation.x=-Math.PI/2,n.position.z=-.24,e.add(n),e.position.y=.1,e.rotation.z=Math.PI/2,t.add(e);let r=new V(new Ct(.25,.2,.12,10,1,!0),ze(11569232,{side:fe}));r.position.y=.06,t.add(r)}return t}function Jb(){let s=new jt;for(let e=0;e<5;e++){let i=new V(new Ct(.06,.06,.8,5),ze(6965808));i.rotation.set(0,e*1.25,1.2),i.position.y=.15,s.add(i)}for(let e=0;e<8;e++){let i=new V(new ds(.11),ze(9079440));i.position.set(Math.cos(e*.785)*.5,.05,Math.sin(e*.785)*.5),s.add(i)}let t=new V(new Se(.18,.5,8),new Qt({color:16752704}));return t.position.y=.4,s.add(t),s}function Kb(){let s=new jt,t=new V(new Ht(.55,14,10,0,6.29,.5,2.3),ze(3816004,{side:fe}));t.position.y=.55,s.add(t);let e=new V(new us(.46,16),ze(15245392,{emissive:4202496}));e.rotation.x=-Math.PI/2,e.position.y=.88,s.add(e);for(let i=0;i<3;i++){let n=new V(new Ct(.04,.04,1.4,5),ze(4864554)),r=i*2.09;n.position.set(Math.cos(r)*.7,.6,Math.sin(r)*.7),n.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),s.add(n)}return s.traverse(i=>{i.isMesh&&(i.castShadow=!0)}),s}function Qb(){let s=new jt,t=new V(new Ct(.2,.28,1.2,8),ze(11051152));t.position.y=.6,s.add(t);let e=new V(new Ct(.34,.2,.22,10),ze(6969928));e.position.y=1.3,s.add(e);let i=new V(new Se(.2,.55,8),new Qt({color:16752704}));return i.position.y=1.65,i.visible=!1,s.add(i),s.userData.flame=i,s.traverse(n=>{n.isMesh&&n!==i&&(n.castShadow=!0)}),s}function t_(){let s=new jt,t=new V(new Ct(.55,.7,3,6),ze(9077880));t.position.y=1.5,t.castShadow=!0,s.add(t);let e=new V(new Xe(.45),new Ke({color:13146879,emissive:6959296,emissiveIntensity:.9}));return e.position.y=3.4,s.add(e),s.userData.gem=e,s}function e_(){let s=new jt,t=new V(new Ct(1.1,1.5,5.5,10),ze(15787730));t.position.y=2.75,t.castShadow=!0,s.add(t);let e=new V(new Se(1.4,1.6,10),ze(12605498));e.position.y=6.3,e.castShadow=!0,s.add(e);let i=new jt;i.position.set(0,5.4,1.3);for(let n=0;n<4;n++){let r=new jt;r.rotation.z=n*Math.PI/2;let a=new V(new De(.7,3,.05),ze(16447210));a.position.set(.3,1.6,0),a.castShadow=!0,r.add(a),i.add(r)}return s.add(i),s.userData.blades=i,s}var T0=(s,t,e)=>{let i=document.createElement(s);return t&&(i.className=t),e!=null&&(i.innerHTML=e),i},i_={clear:[0,0,0],cloudy:[.75,0,0],rain:[1,1,0],storm:[1,1,1]},oh=class{constructor(t){this.g=t,this.on=!1,this.want=!1}start(){let t=this.g;if(this.on||t.battle.combat){t.battle.combat&&t.notify("\u6226\u95D8\u4E2D\u306F\u5199\u771F\u30E2\u30FC\u30C9\u3092\u4F7F\u3048\u306A\u3044","phys");return}this.on=!0,this.t=0,t.input.releaseAll(),document.pointerLockElement&&(t.selfUnlock=!0,document.exitPointerLock());let e=t.life.weather;this.saved={hour:t.hour,cloud:e.cloud,rain:e.rain,storm:e.storm,rainbowT:e.rainbowT,vig:t.R.grade.uniforms.uVig.value,sat:t.R.grade.uniforms.uSat.value,popo:t.popo.visible};let i=t.mover,n=t.R.camera;this.yaw=i.face+.35,this.pitch=.06,this.dist=3.8,this.lift=0,this.pose="stand",this.face="open";let r=document.getElementById("ui");r.classList.add("photo-on");let a=this.el=T0("div","photoui",`
      <div class="phcam"></div>
      <div class="phbar">
        <div class="phrow">
          <label>\u6642\u523B <input type="range" min="0" max="23.9" step="0.1" data-k="hour"></label>
          <label>\u5929\u6C17 <select data-k="wx"><option value="">\u4ECA\u306E\u307E\u307E</option><option value="clear">\u6674\u308C</option><option value="cloudy">\u304F\u3082\u308A</option><option value="rain">\u96E8</option><option value="storm">\u96F7\u96E8</option></select></label>
          <label>\u8679 <input type="checkbox" data-k="bow"></label>
          <label>\u30DD\u30FC\u30BA <select data-k="pose"><option value="stand">\u7ACB\u3061</option><option value="wave">\u624B\u3092\u632F\u308B</option><option value="cool">\u6C7A\u3081\u30DD\u30FC\u30BA</option><option value="look">\u9060\u304F\u3092\u898B\u308B</option></select></label>
          <label>\u8868\u60C5 <select data-k="face"><option value="open">\u3075\u3064\u3046</option><option value="happy">\u7B11\u9854</option><option value="angry">\u771F\u5263</option><option value="closed">\u76EE\u3092\u9589\u3058\u308B</option></select></label>
        </div>
        <div class="phrow">
          <label>\u9AD8\u3055 <input type="range" min="-1" max="3" step="0.05" data-k="lift"></label>
          <label>\u5468\u8FBA\u306E\u6697\u3055 <input type="range" min="0" max="1" step="0.02" data-k="vig"></label>
          <label>\u8272\u306E\u6FC3\u3055 <input type="range" min="0" max="1.6" step="0.02" data-k="sat"></label>
          <label>\u30DD\u30DD <input type="checkbox" data-k="popo" checked></label>
          <label>\u30AD\u30E3\u30E9 <input type="checkbox" data-k="chara" checked></label>
          <label>\u67A0 <input type="checkbox" data-k="frame"></label>
        </div>
        <div class="phrow phbtns"><button class="phshot">\u{1F4F7} \u64AE\u5F71</button><button class="phmin">\u25BC \u8A2D\u5B9A\u3092\u305F\u305F\u3080</button><button class="phexit">\u3082\u3069\u308B\uFF08Esc\uFF09</button></div>
        <div class="phhelp">${t.input.touch?"\u753B\u9762\u3092\u306A\u305E\u3063\u3066\u30AB\u30E1\u30E9\u3092\u56DE\u3059\u30FB2\u672C\u6307\u3067\u8FD1\u3065\u304F":"\u30C9\u30E9\u30C3\u30B0\u3067\u30AB\u30E1\u30E9\u3092\u56DE\u3059\u30FB\u30DB\u30A4\u30FC\u30EB\u3067\u8FD1\u3065\u304F"}</div>
      </div>
      <div class="phframe"></div>`);r.appendChild(a),innerHeight<520&&(a.querySelector(".phbar").classList.add("min"),a.querySelector(".phmin").textContent="\u25B2 \u8A2D\u5B9A\u3092\u958B\u304F");let o=u=>a.querySelector(`[data-k=${u}]`);o("hour").value=t.hour,o("vig").value=this.saved.vig,o("sat").value=this.saved.sat,o("lift").value=0,o("hour").addEventListener("input",u=>{t.hour=Number(u.target.value)}),o("wx").addEventListener("change",u=>{let f=u.target.value,p=f?i_[f]:[this.saved.cloud,this.saved.rain,this.saved.storm];Object.assign(e,{cloud:p[0],rain:p[1],storm:p[2]})}),o("bow").addEventListener("change",u=>{e.rainbowT=u.target.checked?60:this.saved.rainbowT}),o("pose").addEventListener("change",u=>{this.pose=u.target.value}),o("face").addEventListener("change",u=>{this.face=u.target.value}),o("lift").addEventListener("input",u=>{this.lift=Number(u.target.value)}),o("vig").addEventListener("input",u=>{t.R.grade.uniforms.uVig.value=Number(u.target.value)}),o("sat").addEventListener("input",u=>{t.R.grade.uniforms.uSat.value=Number(u.target.value)}),o("popo").addEventListener("change",u=>{t.popo.visible=u.target.checked}),o("chara").addEventListener("change",u=>{t.activeRig.root.visible=u.target.checked,t.activeRig.weapon?.float&&(t.activeRig.weapon.float.visible=u.target.checked)}),o("frame").addEventListener("change",u=>{this.frame=u.target.checked,a.querySelector(".phframe").classList.toggle("on",this.frame)}),a.querySelector(".phshot").addEventListener("click",()=>{this.want=!0}),a.querySelector(".phexit").addEventListener("click",()=>this.stop()),a.querySelector(".phmin").addEventListener("click",u=>{let f=a.querySelector(".phbar");f.classList.toggle("min"),u.target.textContent=f.classList.contains("min")?"\u25B2 \u8A2D\u5B9A\u3092\u958B\u304F":"\u25BC \u8A2D\u5B9A\u3092\u305F\u305F\u3080"});let l=a.querySelector(".phcam"),c=new Map,h=0;l.addEventListener("pointerdown",u=>{l.setPointerCapture(u.pointerId),c.set(u.pointerId,{x:u.clientX,y:u.clientY})}),l.addEventListener("pointermove",u=>{let f=c.get(u.pointerId);if(f&&(c.size===1&&(this.yaw-=(u.clientX-f.x)*.006,this.pitch=Math.max(-.6,Math.min(1.3,this.pitch+(u.clientY-f.y)*.005))),f.x=u.clientX,f.y=u.clientY,c.size===2)){let[p,x]=[...c.values()],m=Math.hypot(p.x-x.x,p.y-x.y);h&&(this.dist=Math.max(1.2,Math.min(14,this.dist*h/m))),h=m}});let d=u=>{c.delete(u.pointerId),h=0};l.addEventListener("pointerup",d),l.addEventListener("pointercancel",d),l.addEventListener("wheel",u=>{u.preventDefault(),this.dist=Math.max(1.2,Math.min(14,this.dist*(1+Math.sign(u.deltaY)*.1)))},{passive:!1}),this.onKey=u=>{u.code==="Escape"&&!this.preview?(u.preventDefault(),this.stop()):u.code==="Escape"&&this.preview&&this.closePreview()},addEventListener("keydown",this.onKey),t.audio?.sfx("ui")}stop(){let t=this.g,e=this.saved,i=t.life.weather;this.on&&(this.on=!1,this.closePreview(),t.hour=e.hour,Object.assign(i,{cloud:e.cloud,rain:e.rain,storm:e.storm,rainbowT:e.rainbowT}),t.R.grade.uniforms.uVig.value=e.vig,t.R.grade.uniforms.uSat.value=e.sat,t.popo.visible=e.popo,t.activeRig.root.visible=!0,t.activeRig.weapon?.float&&(t.activeRig.weapon.float.visible=!0),removeEventListener("keydown",this.onKey),this.el.remove(),document.getElementById("ui").classList.remove("photo-on"),t.camRig.inited=!1,t.input.releaseAll(),t.audio?.sfx("ui"))}update(t){let e=this.g,i=e.mover,n=e.R.camera,r=e.activeRig,a=e.active.anim;this.t+=t,a.update(t,{mode:"ground",speed:0,vy:0,turn:0,face:this.face});let o=r.j,l=this.t;this.pose==="wave"?(o.armR.rotation.set(0,0,-2.6),o.foreR.rotation.set(0,0,-.3+Math.sin(l*7)*.45),o.head.rotation.set(0,0,-.1)):this.pose==="cool"?(o.armL.rotation.set(.25,0,.75),o.foreL.rotation.set(-1.7,0,0),o.armR.rotation.set(-2.3,0,-.25),o.foreR.rotation.set(-.2,0,0),o.head.rotation.set(.05,0,.14),o.chest.rotation.set(0,.15,0)):this.pose==="look"&&(o.armR.rotation.set(-2,0,.35),o.foreR.rotation.set(-1.9,0,0),o.head.rotation.set(-.12,.25,0));let c=i.p.x,h=i.p.y+1.15+this.lift,d=i.p.z,u=Math.cos(this.pitch),f=c+Math.sin(this.yaw)*u*this.dist,p=h+Math.sin(this.pitch)*this.dist,x=d+Math.cos(this.yaw)*u*this.dist;p=Math.max(p,e.world.heightAt(f,x)+.3),n.position.set(f,p,x),n.lookAt(c,h,d),e.focus.set(i.p.x,i.p.y,i.p.z),e.fx.update(t*.3,i.p)}capture(t){this.want=!1;let e=this.g,i=document.createElement("canvas");i.width=t.width,i.height=t.height;let n=i.getContext("2d");n.drawImage(t,0,0);let r=i.width,a=i.height,o=a/720;this.frame&&(n.strokeStyle="rgba(255,248,225,.92)",n.lineWidth=14*o,n.strokeRect(24*o,24*o,r-48*o,a-48*o),n.lineWidth=2*o,n.strokeRect(40*o,40*o,r-80*o,a-80*o)),n.font=`bold ${Math.round(20*o)}px "Zen Maru Gothic", sans-serif`,n.textAlign="right",n.lineWidth=4*o,n.strokeStyle="rgba(30,40,60,.55)",n.fillStyle="#fff8e8";let l=`\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9\u3000${e.placeName()}`;n.strokeText(l,r-56*o,a-56*o),n.fillText(l,r-56*o,a-56*o);let c=i.toDataURL("image/png");e.life.onPhoto(),e.audio?.sfx("ring"),this.showPreview(c)}showPreview(t){this.closePreview();let e=new Date,i=a=>String(a).padStart(2,"0"),n=`lumiera_${e.getFullYear()}${i(e.getMonth()+1)}${i(e.getDate())}_${i(e.getHours())}${i(e.getMinutes())}${i(e.getSeconds())}.png`,r=this.preview=T0("div","phprev",`<img src="${t}" alt="\u64AE\u3063\u305F\u5199\u771F"><div class="phpbtn"><a class="phsave" href="${t}" download="${n}">\u{1F4BE} \u753B\u50CF\u3092\u4FDD\u5B58</a><button class="phclose">\u7D9A\u3051\u3066\u64AE\u308B</button></div><div class="phhelp">\u30B9\u30DE\u30DB\u306F\u753B\u50CF\u3092\u9577\u62BC\u3057\u3067\u3082\u4FDD\u5B58\u3067\u304D\u307E\u3059</div>`);this.el.appendChild(r),r.querySelector(".phclose").addEventListener("click",()=>this.closePreview())}closePreview(){this.preview&&(this.preview.remove(),this.preview=null)}};var kr="lumiera.save.v1",Qn=["sora","akane","mizuha","raika"],oo={dango:{name:"\u307F\u305F\u3089\u3057\u56E3\u5B50",heal:.3,price:60,desc:"HP\u309230%\u56DE\u5FA9"},pie:{name:"\u98A8\u8ECA\u30D1\u30A4",heal:.6,price:150,desc:"HP\u309260%\u56DE\u5FA9"},milk:{name:"\u8702\u871C\u30DF\u30EB\u30AF",heal:.5,revive:!0,price:200,desc:"\u5012\u308C\u305F\u4EF2\u9593\u3092\u8D77\u3053\u3057\u3066HP50%\u56DE\u5FA9"}};var dn=class s{constructor(t){Object.assign(this,t),this.scene=this.R.scene,this.time=0,this.hour=9.5,this.daySpeed=24/1440,this.camRig=new Wc(this.R.camera,this.world),this.camRig.autoFollow=this.input.touch,this.focus=new R,this.paused=!1,this.hooks=[],this.enemies=[],this.groups={},this.flags={},this.mora=0,this.items={dango:2},this.unlocked=["sora"],this.opened=new Set,this.gotCrystals=new Set,this.waypointsOn=new Set,this.dialogOpen=!1,this.dlg=null,this.hitStopT=0,this.timeScale=1,this.switchCD=0,g0(this.tex.dot)}start(t){let e=this.world;this.fx=new $c(this.scene,this.tex),this.props=new Kc(this.scene,e,this.tex,this),e.buildGrid();let i=e.meta.places.start;this.mover=new Vc(e,i.x,i.z),this.mover.face=Math.PI*.85,this.party=Qn.map(n=>new Yc(n)),this.members={};for(let n of Qn){let r=Rn(n,this.tex);r.root.visible=!1,this.scene.add(r.root),this.members[n]={rig:r,anim:new ln(r)}}this.activeId="sora",this.popo=Oc(this.tex),this.scene.add(this.popo),this.popo.scale.setScalar(.8),this.popoPos=new R(this.mover.p.x,this.mover.p.y+1.8,this.mover.p.z),this.glider=n_(),this.scene.add(this.glider),this.battle=new jc(this),this.quests=new Jc(this),this.hud=new th(document.getElementById("ui"),this),this.screens=new sh(this),this.hud.buildParty(this.makePortraits()),this.buildWorldObjects(),this.buildNPCs(),this.spawnWild(),this.life=new ah(this),this.life.build(),this.photo=new oh(this),t&&this.load(t),this.setActive(this.activeId,!0),this.camRig.yaw=this.mover.face+Math.PI,this.saveT=0,document.addEventListener("pointerlockchange",()=>{if(!(document.pointerLockElement||this.input.touch)){if(this.screens.open||this.selfUnlock||this.dlg&&this.dlg.choices){this.selfUnlock=!1;return}this.dialogOpen||this.openMenu()}})}get active(){return this.members[this.activeId]}get activeRig(){return this.members[this.activeId].rig}get activeMember(){return this.party.find(t=>t.id===this.activeId)}get weather(){return this.life?this.life.weather:null}weatherState(){return this.life?this.life.weatherState():null}get canControl(){return!this.dialogOpen&&!this.paused&&!this.screens.open&&this.activeMember.alive}update(t){let e=this.input,i=e.update(t);if(this.screens.open&&this.screens.update(t),this.photo.on){this.photo.update(t);return}if(this.paused)return;let n=t;this.hitStopT>0&&(this.hitStopT-=t,n=t*.08),n*=this.timeScale,this.time+=n,this.hour=(this.hour+n*this.daySpeed)%24;let r=this.canControl;this.screens.open||this.camRig.input(e.look.dx,e.look.dy,i),!this.dialogOpen&&!this.screens.open&&(e.pressed.map?this.openMap():e.pressed.quest?this.openQuestLog():e.pressed.menu?this.openMenu():e.pressed.photo&&this.canControl&&this.photo.start());let a=this.dialogOpen&&this.dlg&&this.dlg.choices&&this.dlg.i===this.dlg.lines.length-1;if(e.lockBlocked=a||!!this.screens.open,a){for(let m=0;m<6;m++)if(e.pressed["p"+(m+1)]){this.dialogChoose(m);break}}else this.dialogOpen&&(e.pressed.interact||e.pressed.jump||e.pressed.attack)&&this.dialogNext();if(this.switchCD-=n,r)for(let m=0;m<4;m++)e.pressed["p"+(m+1)]&&this.switchTo(m);let o=this.camRig.toWorld(r?e.move.x:0,r?e.move.y:0),l=this.mover;l.update(n,{mx:o.x,my:o.z,myRaw:r?e.move.y:0,mxRaw:r?e.move.x:0,jumpP:r&&e.pressed.jump&&!this.battle.busy,jumpH:r&&e.held.jump,dashP:r&&e.pressed.dash,dashH:r&&e.held.dash,walk:e.held.walk,attackMove:0,upDraft:this.upDraftAt(l.p)});for(let m of l.events)this.onMoveEvent(m);this.battle.update(n),this.enemies=this.enemies.filter(m=>{let g=m.update(n);return g||this.scene.remove(m.model),g});let h=this.active,d=h.rig.root;d.position.set(l.p.x,l.p.y,l.p.z),l.mode==="swim"&&(d.position.y=Ts.waterLevel-1),d.rotation.y=lh(d.rotation.y,l.face,1-Math.exp(-(this.battle.busy?30:18)*n));let u=this.activeMember;h.anim.update(n,{mode:u.alive?this.hurtT>0?"hit":l.mode==="dash"?"dash":l.mode:"dead",speed:l.speed,vy:l.v.y,turn:l.turn,climbPhase:l.climbPhase,combat:this.battle.combat,attack:this.battle.attackState(),cast:this.battle.castState(),face:this.hurtT>0?"hurt":this.battle.act&&this.battle.act.kind==="burst"?"angry":this.faceOverride}),this.hurtT=Math.max(0,(this.hurtT||0)-n),this.weaponT=Math.max(0,(this.weaponT||0)-n);let f=h.rig;if(f.weapon&&(f.weapon.held.visible=this.weaponT>0&&(l.mode==="ground"||l.mode==="dash"),f.weapon.float)){let m=f.weapon.float;m.visible=l.mode!=="swim";let g=new R(l.p.x+Math.sin(l.face-1.2)*.55,l.p.y+1.25+Math.sin(this.time*2)*.06,l.p.z+Math.cos(l.face-1.2)*.55);l.mode==="glide"&&(g.y+=.6),m.position.lerp(g,1-Math.exp(-10*n)),m.userData.ring.rotation.z+=n*2,m.userData.ring2.rotation.x+=n*1.4}this.glider.visible=l.mode==="glide",this.glider.visible&&(this.glider.position.set(d.position.x,d.position.y+1.75,d.position.z),this.glider.rotation.set(0,d.rotation.y,h.anim.bodyRoll*.6));let p=new R(l.p.x-Math.sin(l.face+.9)*.95,l.p.y+1.85+Math.sin(this.time*2.2)*.08,l.p.z-Math.cos(l.face+.9)*.95);l.mode==="swim"&&(p.y=.9),this.popoPos.lerp(p,1-Math.exp(-3.5*n)),this.popo.position.copy(this.popoPos);let x=Math.atan2(this.R.camera.position.x-this.popoPos.x,this.R.camera.position.z-this.popoPos.z);if(this.popo.rotation.y=lh(this.popo.rotation.y,this.dialogOpen?x:lh(l.face,x,.4),1-Math.exp(-4*n)),this.popo.userData.tail.rotation.z=Math.sin(this.time*3)*.25,this.popo.userData.star.rotation.y+=n*2,this.updateWorldObjects(n),this.life.update(n),this.updateNPCs(n),this.quests.update(),this.checkInteract(),this.camRig.update(n,{x:d.position.x,y:d.position.y,z:d.position.z,face:l.face},{moving:l.speed>1,speed:l.speed,glide:l.mode==="glide",low:l.mode==="swim",combat:this.battle.combat}),this.focus.set(l.p.x,l.p.y,l.p.z),this.moteT=(this.moteT||0)-n,this.moteT<=0){this.moteT=.08;let m=this.hour<5.5||this.hour>19,g=Math.random()*Math.PI*2,v=4+Math.random()*18,b=l.p.x+Math.cos(g)*v,y=l.p.z+Math.sin(g)*v,M=this.world.heightAt(b,y);M>.5&&this.fx.emit({x:b,y:M+.4+Math.random()*3,z:y,n:1,color:m?13172592:Math.random()<.7?16776168:16771488,speed:.25,up:m?.1:.15,drag:.2,life:m?3.5:5,size:m?.16:.07})}this.fx.update(n,l.p),this.hud.update(t),this.props.update(n,this.time,this.hour<6||this.hour>18.5),this.audio?.update(n,this),this.saveT+=t,this.saveT>30&&(this.saveT=0,this.save(),this.hud.autoSaved&&this.hud.autoSaved());for(let m of this.hooks)m(n)}onMoveEvent(t){let e=this.mover,i=this.audio;if(typeof t=="object"){if(t.type==="fallDamage"){let n=this.activeMember,r=Math.round(n.maxHp*t.frac);this.applyDamage(n,r,null,!0),this.damageNumber(new R(e.p.x,e.p.y+1.8,e.p.z),r,"phys",!1,!0)}return}if(t==="jump")i?.sfx("jump");else if(t==="jump2")i?.sfx("jump"),this.fx.emit({x:e.p.x,y:e.p.y+.2,z:e.p.z,n:16,color:this.activeMember.el,speed:3,life:.4,size:.25,flat:!0,radius:.8}),this.fx.ring(e.p.x,e.p.y-.05,e.p.z,this.activeMember.el,1.4,.3);else if(t==="land")i?.sfx("land"),this.fx.emit({x:e.p.x,y:e.p.y+.1,z:e.p.z,n:8,color:14674120,speed:2,life:.4,size:.25,flat:!0,radius:.6});else if(t==="dash")i?.sfx("dash"),this.fx.emit({x:e.p.x,y:e.p.y+.9,z:e.p.z,n:18,color:this.activeMember.el,speed:3,life:.4,size:.3,radius:.6});else if(t==="glide")i?.sfx("glide");else if(t==="splash")i?.sfx("splash"),this.fx.emit({x:e.p.x,y:.2,z:e.p.z,n:40,color:13627135,speed:4,up:3,grav:9,life:.7,size:.3});else if(t==="climbJump")i?.sfx("jump");else if(t==="drown"){this.notify("\u6EBA\u308C\u3066\u3057\u307E\u3063\u305F\u2026\u2026","water");let n=this.activeMember;this.applyDamage(n,Math.round(n.maxHp*.15),null,!0)}else if(t==="void"){this.notify("\u843D\u3061\u3066\u3057\u307E\u3063\u305F\u2026\u2026","phys");let n=this.activeMember;this.applyDamage(n,Math.round(n.maxHp*.1),null,!0)}}upDraftAt(t){for(let e of this.shrineObjs||[])if(this.flags[e.id]&&Math.hypot(t.x-e.x,t.z-e.z)<5&&t.y<e.y+40)return 1;return this.life?this.life.updraftAt(t):0}setActive(t,e){for(let r of Qn)this.members[r].rig.root.visible=r===t;let i=this.activeId;this.activeId=t;let n=this.members[t].rig.root;n.position.set(this.mover.p.x,this.mover.p.y,this.mover.p.z),n.rotation.y=this.mover.face;for(let r of Qn)this.members[r].rig.weapon?.float&&(this.members[r].rig.weapon.float.visible=r===t);if(!e){let r=this.activeMember.el;this.fx.emit({x:this.mover.p.x,y:this.mover.p.y+1,z:this.mover.p.z,n:50,color:r,speed:4,life:.6,size:.35,radius:1}),this.fx.ring(this.mover.p.x,this.mover.p.y,this.mover.p.z,r,2.2,.4),this.audio?.sfx("switch")}}switchTo(t){let e=Qn[t];if(!this.unlocked.includes(e)||e===this.activeId)return;let i=this.party[t];if(!i.alive){this.notify(`${i.name}\u306F\u5012\u308C\u3066\u3044\u308B`,"phys");return}this.switchCD>0||this.battle.act&&this.battle.act.kind==="burst"||(this.battle.act=null,this.switchCD=this.battle.combat?1:.25,this.mover.iframe=Math.max(this.mover.iframe,.3),this.setActive(e))}unlock(t){if(this.unlocked.includes(t))return;this.unlocked.push(t),this.unlocked.sort((n,r)=>Qn.indexOf(n)-Qn.indexOf(r));let e=this.party.find(n=>n.id===t),i=this.party[0];for(;e.lv<i.lv;)e.lv++;e.recalc(),e.hp=e.maxHp,this.hud.showBanner(`${e.name}\u304C\u4EF2\u9593\u306B\u306A\u3063\u305F`,so[t].title,"join"),this.audio?.sfx("join")}gainEnergy(t){for(let e of this.party){if(!this.unlocked.includes(e.id)||!e.alive)continue;let i=e.el===t?3:1,n=e.id===this.activeId?1:.6;e.energy=Math.min(e.def0.energy,e.energy+i*n)}}healActive(t){let e=this.activeMember;if(!e.alive)return;let i=e.hp;e.hp=Math.min(e.maxHp,e.hp+t);let n=Math.round(e.hp-i);n>0&&this.damageNumber(new R(this.mover.p.x,this.mover.p.y+1.9,this.mover.p.z),"+"+n,"heal",!1,!0)}damagePlayer(t,e,i){let n=this.mover,r=this.activeMember;if(n.iframe>0||this.dialogOpen||!r.alive)return;let a=qc(t.lv,r.lv)*2,o=Math.max(1,Math.round(t.atk*e*a*.9*(.95+Math.random()*.1)*(this.life?this.life.takenMul():1)));if(Number.isFinite(o)){if(this.applyDamage(r,o,i),this.damageNumber(new R(n.p.x,n.p.y+1.8,n.p.z),o,i||"phys",!1,!0),this.hud.hurtFlash(),this.audio?.sfx("hurt"),n.iframe=.5,o>r.maxHp*.08&&n.mode==="ground"){this.hurtT=.35,this.battle.act=null;let l=n.p.x-t.pos.x,c=n.p.z-t.pos.z,h=Math.hypot(l,c)||1;n.v.x=l/h*6,n.v.z=c/h*6,n.lockMove=.3}this.camRig.shake=Math.max(this.camRig.shake,.4)}}applyDamage(t,e,i,n){if(Number.isFinite(e)&&(t.hp=Math.max(0,t.hp-e),Number.isFinite(t.hp)||(t.hp=t.maxHp),t.hp<=0&&t.alive)){t.alive=!1,t.hp=0,this.notify(`${t.name}\u304C\u5012\u308C\u305F`,"phys");let r=this.party.findIndex(a=>a.alive&&this.unlocked.includes(a.id));r>=0?setTimeout(()=>this.setActive(this.party[r].id),700):this.wipe()}}wipe(){this.paused=!1,this.screens.fade(()=>{let t=this.nearestWaypoint(!0);for(let e of this.party)e.alive=!0,e.hp=e.maxHp;this.mover.p.x=t.x,this.mover.p.z=t.z+3,this.mover.p.y=this.world.groundAt(t.x,t.z+3),this.mover.mode="ground",this.setActive(this.unlocked[0],!0),this.activeId=this.unlocked[0],this.notify("\u6700\u5BC4\u308A\u306E\u30EF\u30FC\u30D7\u5730\u70B9\u3067\u76EE\u3092\u899A\u307E\u3057\u305F","wind")})}hitStop(t){this.hitStopT=Math.max(this.hitStopT,t)}showWeapon(){this.weaponT=3.5}burstCinematic(t){let e=this.mover,i=Math.sin(e.face),n=Math.cos(e.face);this.camRig.override={pos:new R(e.p.x+i*2.6-n*1,e.p.y+1.5,e.p.z+n*2.6+i*1),look:new R(e.p.x,e.p.y+1.2,e.p.z),t:.9},this.hud.burstFlash(t),this.fx.emit({x:e.p.x,y:e.p.y+1,z:e.p.z,n:80,color:t,speed:5,life:.9,size:.4,radius:1.5})}damageNumber(t,e,i,n,r){this.hud.damage(t,e,i,n,r)}reactionText(t,e,i){this.hud.reaction(t,e,i),this.audio?.sfx("reaction")}notify(t,e){this.hud.notify(t,e)}reward(t,e,i){this.mora+=t;let n=[];for(let r of this.party)this.unlocked.includes(r.id)&&r.addExp(e)&&n.push(r.name);this.notify(`${i?i+"\u3000":""}\u30EB\u30DF +${t}\u3000\u7D4C\u9A13\u5024 +${e}`,"gold"),n.length&&(this.hud.showBanner("\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\uFF01",n.join("\u30FB"),"lvup"),this.audio?.sfx("levelup"))}spawnGroup(t,e,i={}){if(this.groups[t])for(let r of this.groups[t])r.dead||(r.dead=!0,this.scene.remove(r.model));let n=this.groups[t]=[];for(let[r,a,o,l,c]of e){let h=new ro(this,r,a,o,{el:l,group:t,lv:i.lv});c==="tower"&&(h.pos.y+=6),i.alert&&(h.state="chase"),this.enemies.push(h),n.push(h)}return n}groupDead(t){let e=this.groups[t];return!!e&&e.every(i=>i.dead)}spawnWild(){let t=(e,i,n)=>this.wild.push({name:e,list:i,lv:n,cx:i[0][1],cz:i[0][2],t:0});this.wild=[],t("w_meadow1",[["slime",-20,330,"water"],["slime",-26,336,"water"],["slime",-14,338,"wind"]],8),t("w_meadow2",[["slime",200,470,"fire"],["slime",206,476,"fire"]],9),t("w_road",[["boko",240,230],["boko",248,236],["archer",236,242]],10),t("w_lakeE",[["slime",150,60,"water"],["slime",156,66,"ice"],["slime",146,70,"water"]],10),t("w_forest1",[["boko",-330,60],["archer",-340,70],["shaman",-326,74,"water"]],12),t("w_forest2",[["slime",-450,260,"wind"],["slime",-444,268,"thunder"],["slime",-456,270,"wind"]],11),t("w_cliffbase",[["slime",400,-60,"thunder"],["slime",410,-70,"thunder"],["slime",418,-56,"ice"]],13),t("w_cliftop",[["slime",470,-240,"ice"],["slime",480,-232,"ice"],["boko",455,-215],["shaman",462,-228,"water"]],15),t("w_mountain",[["slime",-60,-340,"ice"],["slime",-52,-346,"thunder"],["boko",70,-330],["archer",78,-338]],16),t("w_lakeN",[["boko",-185,-60],["boko",-178,-54],["shaman",-190,-52,"fire"]],12),t("w_south",[["slime",-200,470,"water"],["slime",-206,476,"fire"],["boko",-190,480]],10)}updateWild(t){let e=this.mover.p;for(let i of this.wild){let n=Math.hypot(e.x-i.cx,e.z-i.cz),r=this.groups[i.name];if(!r&&n<120)this.spawnGroup(i.name,i.list,{lv:i.lv});else if(r&&r.every(a=>a.dead))i.t+=t,i.t>120&&n>150&&(i.t=0,delete this.groups[i.name]);else if(r&&n>200&&r.every(a=>a.state==="idle"||a.state==="wander"||a.dead)){for(let a of r)a.dead||(a.dead=!0,a.deathT=1,this.scene.remove(a.model));delete this.groups[i.name]}}}onEnemyAlert(t){this.battle.inCombatT=Math.max(this.battle.inCombatT,3)}onEnemyKilled(t){let e=1+(t.lv-8)*.08,i=Math.round(t.T.exp*e),n=Math.round(t.T.mora*e);this.mora+=n;let r=[];for(let a of this.party)this.unlocked.includes(a.id)&&a.addExp(i)&&r.push(a.name);r.length&&(this.hud.showBanner("\u30EC\u30D9\u30EB\u30A2\u30C3\u30D7\uFF01",r.join("\u30FB"),"lvup"),this.audio?.sfx("levelup")),this.audio?.sfx("kill"),this.life?.onKill(t),t.group==="w_cliffbase"&&this.quests.side.slime_hunt==="active"&&this.groupDead("w_cliffbase")&&this.quests.readySide("slime_hunt"),t.group==="w_lakeN"&&this.quests.side.boko_lake==="active"&&this.groupDead("w_lakeN")&&this.quests.readySide("boko_lake"),t.type==="boss"&&this.bossDefeated(t),t.group&&t.group.startsWith("trial_")&&this.groupDead(t.group)&&this.trialWave(t.group)}buildWorldObjects(){let t=this.world;this.wpObjs=t.meta.waypoints.map(i=>{let n=x0();return n.position.set(i.x,t.heightAt(i.x,i.z),i.z),this.scene.add(n),t.addCollider({x:i.x,z:i.z,r:1.3,top:n.position.y+.6}),{...i,o:n}}),this.shrineObjs=t.meta.shrines.map(i=>{let n=v0(),r=t.heightAt(i.x,i.z)-.1;return n.position.set(i.x,r,i.z),this.scene.add(n),t.addCollider({x:i.x,z:i.z,r:4.2,top:r+.8}),{...i,y:r,o:n}}),this.chestObjs=t.meta.chests.map((i,n)=>{let r=Qc(i.tier);return r.position.set(i.x,t.heightAt(i.x,i.z),i.z),r.rotation.y=n*2.3%6.28,this.scene.add(r),{...i,id:"c"+n,o:r,open:0}}),this.crystalObjs=t.meta.crystals.map((i,n)=>{let r=ld();return r.position.set(i.x,t.heightAt(i.x,i.z)+1.4,i.z),this.scene.add(r),{...i,id:"k"+n,o:r}}),this.cat=this.makeCat(250,268),this.feathers=[[-360,120],[-470,210],[-400,40]].map(([i,n],r)=>{let a=ld();return a.userData.c.material.color.setHex(16771248),a.position.set(i,t.heightAt(i,n)+1,n),a.visible=!1,this.scene.add(a),{id:"f"+r,x:i,z:n,o:a,got:!1}}),this.rings=[];let e=this.props.campfire;this.hooks.push(()=>{Math.random()<.6&&this.fx.emit({x:e.x,y:e.y,z:e.z,n:1,color:16747056,speed:.6,up:2.2,life:.8,size:.4,radius:.5})})}makeCat(t,e){let i=new jt,n=new Ke({color:15771744}),r=new V(new hs(.12,.25,4,8),n);r.rotation.z=Math.PI/2,r.position.y=.18,i.add(r);let a=new V(new Ht(.12,10,8),n);a.position.set(.22,.3,0),i.add(a);for(let l of[-1,1]){let c=new V(new Se(.04,.08,4),n);c.position.set(.24,.42,l*.06),i.add(c)}let o=new V(new Ct(.02,.03,.3,5),n);return o.position.set(-.25,.3,0),o.rotation.z=.6,i.add(o),i.position.set(t,this.world.heightAt(t,e),e),i.visible=!1,this.scene.add(i),i}nextFeather(){let t=this.feathers.find(e=>!e.got);return t?{x:t.x,z:t.z}:null}updateWorldObjects(t){let e=this.mover.p,i=this.time;for(let n of this.wpObjs){n.o.userData.gem.rotation.y+=t,n.o.userData.ring.rotation.x=Math.sin(i)*.3;let r=this.waypointsOn.has(n.id);n.o.userData.set(r);let a=Math.hypot(e.x-n.x,e.z-n.z);if(!r&&a<5&&(this.waypointsOn.add(n.id),this.notify(`\u30EF\u30FC\u30D7\u5730\u70B9\u300C${n.name}\u300D\u3092\u89E3\u653E\u3057\u305F`,"wind"),this.audio?.sfx("unlock"),this.save()),r&&a<6&&!this.battle.combat)for(let o of this.party)o.alive||(o.alive=!0,o.hp=1),o.hp=Math.min(o.maxHp,o.hp+o.maxHp*.25*t)}for(let n of this.shrineObjs)n.o.userData.set(!!this.flags[n.id]),n.o.userData.core.rotation.y+=t*.8,n.o.userData.core.position.y=3.2+Math.sin(i*1.5)*.15,this.flags[n.id]&&Math.random()<.3&&this.fx.emit({x:n.x,y:n.y+1,z:n.z,n:1,color:"wind",speed:.5,up:6,life:1.5,size:.35,radius:3});for(let n of this.chestObjs){let r=this.opened.has(n.id);r&&n.open<1?(n.open=Math.min(1,n.open+t*2),n.o.userData.lidPivot.rotation.x=-n.open*1.9,n.o.userData.glow.material.opacity=.6*(1-n.open)):r&&n.open>=1?n.o.userData.glow.visible=!1:n.o.userData.glow.material.opacity=.18+Math.sin(i*3)*.08}for(let n of this.crystalObjs){if(this.gotCrystals.has(n.id)){n.o.visible=!1;continue}n.o.userData.c.rotation.y+=t*1.5,n.o.position.y=this.world.heightAt(n.x,n.z)+1.4+Math.sin(i*2+n.x)*.15,Math.hypot(e.x-n.x,e.z-n.z)<1.3&&Math.abs(e.y+1-n.o.position.y)<2&&this.pickCrystal(n)}for(let n of this.feathers)n.o.visible=this.quests.side.feathers==="active"&&!n.got,n.o.visible&&(n.o.userData.c.rotation.y+=t*2,Math.hypot(e.x-n.x,e.z-n.z)<1.5&&(n.got=!0,this.flags.feathers=(this.flags.feathers||0)+1,this.notify(`\u9DF9\u306E\u7FBD\u6839\u3092\u62FE\u3063\u305F\uFF08${this.flags.feathers}/3\uFF09`,"gold"),this.audio?.sfx("pickup"),this.flags.feathers>=3&&this.quests.readySide("feathers")));this.cat.visible=this.quests.side.cat==="active"&&!this.flags.catFound,this.cat.visible&&(this.cat.rotation.y=Math.sin(i*.5)*2);for(let n of this.rings)n.got||(n.m.rotation.y+=t,Math.hypot(e.x-n.x,e.z-n.z)<2.4&&Math.abs(e.y+1-n.y)<2.6&&(n.got=!0,n.m.visible=!1,this.fx.emit({x:n.x,y:n.y,z:n.z,n:40,color:"wind",speed:5,life:.6,size:.35}),this.audio?.sfx("ring"),this.trialRingCount++,this.notify(`\u98A8\u306E\u8F2A ${this.trialRingCount}/${this.rings.length}`,"wind")));this.trial&&this.trial.kind==="rings"&&(this.trial.t-=t,this.trialRingCount>=this.rings.length?this.trialDone(this.trial.id):this.trial.t<=0&&(this.notify("\u6642\u9593\u5207\u308C\u2026\u2026\u3082\u3046\u4E00\u5EA6\u7960\u3092\u8ABF\u3079\u3088\u3046","phys"),this.clearRings(),this.trial=null)),this.updateWild(t),this.boss&&!this.boss.dead&&this.boss.state==="idle"&&!this.boss.waking&&Math.hypot(e.x-this.boss.home.x,e.z-this.boss.home.z)<30&&this.wakeBoss(),this.boss&&!this.boss.dead&&this.updateBoss(t)}pickCrystal(t){this.gotCrystals.add(t.id),this.fx.emit({x:t.x,y:t.o.position.y,z:t.z,n:40,color:"wind",speed:4,life:.7,size:.3}),this.audio?.sfx("crystal");let e=this.gotCrystals.size;e%5===0?(this.mover.stamMax+=10,this.notify(`\u98A8\u306E\u7D50\u6676 ${e}/40\u3000\u30B9\u30BF\u30DF\u30CA\u4E0A\u9650 +10`,"wind")):this.notify(`\u98A8\u306E\u7D50\u6676 ${e}/40`,"wind"),this.save()}checkInteract(){let t=this.mover.p,e=null,i=1e9,n=(r,a)=>{r<i&&(i=r,e=a)};if(!this.dialogOpen){for(let r of this.npcs){let a=Math.hypot(t.x-r.pos.x,t.z-r.pos.z);a<3.3&&n(a,{label:`${r.name}\u3068\u8A71\u3059`,use:()=>this.talkTo(r)})}for(let r of this.chestObjs)if(!this.opened.has(r.id)){let a=Math.hypot(t.x-r.x,t.z-r.z);a<2.2&&n(a,{label:r.tier?"\u7CBE\u5DE7\u306A\u5B9D\u7BB1\u3092\u958B\u3051\u308B":"\u5B9D\u7BB1\u3092\u958B\u3051\u308B",use:()=>this.openChest(r)})}for(let r of this.shrineObjs){let a=Math.hypot(t.x-r.x,t.z-r.z);a<5.5&&!this.flags[r.id]&&!this.trial&&n(a,{label:"\u98A8\u306E\u7960\u3092\u8ABF\u3079\u308B",use:()=>this.useShrine(r)})}if(this.cat.visible){let r=Math.hypot(t.x-this.cat.position.x,t.z-this.cat.position.z);r<2.2&&n(r,{label:"\u732B\u3092\u62B1\u304D\u4E0A\u3052\u308B",use:()=>{this.flags.catFound=!0,this.quests.readySide("cat"),this.notify("\u8FF7\u5B50\u306E\u732B\u30CB\u30E3\u30C3\u30BF\u3092\u898B\u3064\u3051\u305F\uFF01","gold"),this.audio?.sfx("pickup")}})}this.life.interactables(t,n);for(let r of this.wpObjs)if(this.waypointsOn.has(r.id)){let a=Math.hypot(t.x-r.x,t.z-r.z);a<3&&n(a+1,{label:"\u5730\u56F3\u3092\u958B\u304F\uFF08\u30EF\u30FC\u30D7\uFF09",use:()=>this.openMap()})}}this.nearInteract=e,e&&this.input.pressed.interact&&this.canControl&&this.time-(this.dialogClosedAt??-9)>.35&&e.use()}openChest(t){this.opened.add(t.id);let e=t.tier?260+Math.round(Math.random()*80):80+Math.round(Math.random()*40),i=t.tier?500:200;this.fx.emit({x:t.x,y:t.o.position.y+.8,z:t.z,n:60,color:"gold",speed:4,up:3,life:1,size:.3}),this.audio?.sfx("chest");let n=t.tier?"pie":"dango";this.items[n]=(this.items[n]||0)+1,this.reward(e,i,`\u5B9D\u7BB1\uFF08${oo[n].name}\xD71\uFF09`),this.save()}useShrine(t){if(t.id==="sh_lake"&&this.quests.cur.id!=="lake_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");if(t.id==="sh_meadow"&&this.quests.cur.id!=="meadow_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");if(t.id==="sh_cliff"&&this.quests.cur.id!=="cliff_shrine")return this.notify("\u307E\u3060\u7960\u306F\u5FDC\u3048\u306A\u3044\u2026\u2026\uFF08\u672C\u7DE8\u3092\u9032\u3081\u3088\u3046\uFF09","phys");this.audio?.sfx("unlock"),t.id==="sh_lake"?(this.trial={id:t.id,kind:"waves",wave:0},this.notify("\u7960\u306E\u8A66\u7DF4\uFF1A\u9B54\u7269\u306E\u7FA4\u308C\u3092\u9000\u3051\u3088\u3046","water"),this.spawnGroup("trial_1",[["slime",t.x+6,t.z,"water"],["slime",t.x-6,t.z+3,"ice"],["slime",t.x,t.z-7,"water"]],{alert:!0,lv:11})):t.id==="sh_meadow"?(this.dialog(Ze.shrineMeadowStart),this.trial={id:t.id,kind:"rings",t:100},this.spawnRings(t)):t.id==="sh_cliff"&&(this.dialog(Ze.shrineCliffStart),this.trial={id:t.id,kind:"waves",wave:1},this.spawnGroup("trial_2",[["guardian",t.x+10,t.z+4],["slime",t.x-7,t.z,"thunder"],["slime",t.x-4,t.z+8,"thunder"]],{alert:!0,lv:16}))}trialWave(t){let e=this.trial;if(e)if(e.id==="sh_lake"&&t==="trial_1"){let i=this.shrineObjs.find(n=>n.id==="sh_lake");this.notify("\u7B2C\u4E8C\u6CE2\uFF01","water"),this.spawnGroup("trial_1b",[["slime",i.x+5,i.z+5,"ice"],["slime",i.x-5,i.z-5,"ice"],["slime",i.x+6,i.z-4,"water"],["slime",i.x-6,i.z+5,"water"]],{alert:!0,lv:12})}else e.id==="sh_lake"&&t==="trial_1b"?this.trialDone("sh_lake"):e.id==="sh_cliff"&&t==="trial_2"&&this.trialDone("sh_cliff")}spawnRings(t){this.clearRings(),this.trialRingCount=0;let e=this.world,i=[[18,0,3.5],[10,16,5],[-12,14,4.5],[-20,-6,6],[-6,-20,5],[14,-16,7]];for(let[n,r,a]of i){let o=t.x+n,l=t.z+r,c=e.heightAt(o,l)+a,h=new V(new Ae(1.8,.12,8,32),new Qt({color:9435360}));h.position.set(o,c,l),this.scene.add(h),this.rings.push({x:o,y:c,z:l,m:h,got:!1})}}clearRings(){for(let t of this.rings)this.scene.remove(t.m);this.rings=[]}trialDone(t){this.trial=null,this.clearRings(),this.flags[t]=!0,this.mover.stamMax+=40,this.mover.stam=this.mover.stamMax;let e=this.shrineObjs.find(i=>i.id===t);this.fx.emit({x:e.x,y:e.y+3,z:e.z,n:160,color:"wind",speed:9,life:1.2,size:.45}),this.fx.ring(e.x,e.y,e.z,"wind",12,1),this.hud.showBanner("\u98A8\u306E\u7960\u304C\u76EE\u899A\u3081\u305F","\u30B9\u30BF\u30DF\u30CA\u4E0A\u9650 +40","shrine"),this.audio?.sfx("shrine"),this.reward(500,800),this.save()}buildNPCs(){this.npcs=nd.map(a=>{let o=Rn("villager",this.tex,{...a.look,name:a.name,eye:"eye_npc",face:{},scale:a.scale||(a.look.female?.95:1),boots:4863014}),l=this.world.groundAt(a.x,a.z);return o.root.position.set(a.x,l,a.z),this.scene.add(o.root),this.world.addCollider({x:a.x,z:a.z,r:.4,top:null}),{...a,rig:o,anim:new ln(o),pos:o.root.position,face:Math.random()*6}});let t=[3811866,9067050,14200944,2763306,10504746,15261904,5913194],e=[14183002,5933784,6989930,15253616,10514624,15790320,9071178],i=7,n=()=>(i=i*16807%2147483647)/2147483647,r=["\u4ECA\u65E5\u306F\u3044\u3044\u98A8\u3060\u306D\u3002","\u98A8\u8ECA\u306E\u30D1\u30A4\u3001\u98DF\u3079\u305F\u3053\u3068\u3042\u308B\uFF1F","\u5317\u306E\u9727\u3001\u5C11\u3057\u8584\u304F\u306A\u3063\u305F\u6C17\u304C\u3059\u308B\u3002","\u885B\u5175\u968A\u9577\u306E\u30A2\u30AB\u30CD\u3055\u3093\u3001\u304B\u3063\u3053\u3044\u3044\u3088\u306D\uFF01","\u6E56\u306E\u795E\u6BBF\u306E\u5DEB\u5973\u3055\u307E\u306F\u3001\u3068\u3063\u3066\u3082\u3084\u3055\u3057\u3044\u306E\u3088\u3002","\u6700\u8FD1\u30B9\u30E9\u30A4\u30E0\u304C\u5897\u3048\u3066\u56F0\u308B\u3088\u3002","\u5E02\u5834\u306E\u5546\u4EBA\u30EB\u30AB\u306F\u3001\u6599\u7406\u306E\u8155\u3082\u4E00\u6D41\u3055\u3002","\u65C5\u4EBA\u3055\u3093\u3001\u898B\u306A\u3044\u9854\u3060\u306D\u3002\u3088\u3046\u3053\u305D\u30EA\u30FC\u30D5\u30A7\u30F3\u3078\uFF01"];for(let a=0;a<12;a++){let o=n()<.5,l={hair:t[Math.floor(n()*t.length)],top:e[Math.floor(n()*e.length)],legs:4866104,apron:e[Math.floor(n()*e.length)],female:o,skin:[16771550,16309448,15782072][Math.floor(n()*3)],hairStyle:o?{bangs:5,backN:6,backLen:.15+n()*.2,ponytail:n()<.4?{len:.3,tie:13647936}:null}:{bangs:4,backN:6,backLen:.08,spikes:Math.floor(n()*3)}},c=n()*Math.PI*2,h=8+n()*60,d=330+Math.cos(c)*h,u=330+Math.sin(c)*h;if(this.world.nearColliders(d,u,1).some(p=>this.world.insideCollider(p,d,u,.6)))continue;let f=Rn("villager",this.tex,{...l,name:"\u753A\u306E\u4EBA",eye:"eye_npc",face:{},scale:o?.93:1,boots:4863014});f.root.position.set(d,this.world.groundAt(d,u),u),this.scene.add(f.root),this.npcs.push({id:"walker"+a,name:o?"\u753A\u306E\u5A18":"\u753A\u306E\u82E5\u8005",walker:!0,x:d,z:u,rig:f,anim:new ln(f),pos:f.root.position,face:n()*6,line:r[a%r.length],goal:null,wait:n()*3})}this.world.buildGrid()}npcPos(t){let e=this.npcs.find(i=>i.id===t);return e?{x:e.x,z:e.z}:null}npcName(t){return this.npcs.find(e=>e.id===t)?.name||""}updateNPCs(t){let e=this.mover.p;for(let i of this.npcs){let n=Math.hypot(e.x-i.pos.x,e.z-i.pos.z);if(n>60){i.rig.root.visible=!1;continue}i.rig.root.visible=!0;let r=0;if(i.walker&&n>3.5){if(i.wait-=t,!i.goal&&i.wait<=0){let o=Math.random()*Math.PI*2,l=10+Math.random()*60;i.goal={x:330+Math.cos(o)*l,z:330+Math.sin(o)*l},i.gt=0}if(i.goal){i.gt+=t;let o=i.goal.x-i.pos.x,l=i.goal.z-i.pos.z,c=Math.hypot(o,l);i.face=Math.atan2(o,l),r=1.4;let h={x:i.pos.x+o/c*r*t,z:i.pos.z+l/c*r*t};this.world.pushOut(h,.35,i.pos.y);let d=Math.hypot(h.x-i.pos.x,h.z-i.pos.z);i.pos.x=h.x,i.pos.z=h.z,i.pos.y=this.world.groundAt(h.x,h.z,i.pos.y),(c<1||i.gt>25||d<r*t*.3)&&(i.goal=null,i.wait=2+Math.random()*5)}}let a=n<5?Math.atan2(e.x-i.pos.x,e.z-i.pos.z):i.face;i.rig.root.rotation.y=lh(i.rig.root.rotation.y,a,1-Math.exp(-(r?8:4)*t)),i.anim.update(t,{mode:"ground",speed:r,face:n<3?"happy":void 0})}}talkTo(t){let e=this.quests,i=e.cur.id,n=(a,o)=>this.dialog(a.map(l=>Array.isArray(l)?l:[t.name,l]),o);if(t.id==="mayor"){if(i==="mayor")return this.dialog(Ze.mayor,()=>{this.flags.talkedMayor=!0});if(e.mainDone||e.step>5){if(!e.side.letter)return n(["\u541B\u306B\u983C\u307F\u304C\u3042\u308B\u3002\u6E56\u7554\u306E\u91E3\u308A\u4EBA\u30CE\u30A2\u306B\u3053\u306E\u624B\u7D19\u3092\u5C4A\u3051\u3066\u304F\u308C\u3093\u304B\u3002\u606F\u5B50\u306A\u3093\u3058\u3083\u3002"],()=>e.startSide("letter"));if(e.side.letter==="ready")return n(["\u305D\u3046\u304B\u3001\u5143\u6C17\u306B\u3057\u3066\u304A\u3063\u305F\u304B\u2026\u2026\u3002\u3042\u308A\u304C\u3068\u3046\u3002\u5C11\u306A\u3044\u304C\u304A\u793C\u3058\u3083\u3002"],()=>e.finishSide("letter"))}return n(["\u98A8\u306E\u7960\u3092\u76EE\u899A\u3081\u3055\u305B\u3066\u304F\u308C\u3002\u5927\u9678\u306E\u672A\u6765\u306F\u541B\u306B\u304B\u304B\u3063\u3066\u304A\u308B\u3002"])}if(t.id==="child")return e.side.cat?e.side.cat==="ready"?n(["\u30CB\u30E3\u30C3\u30BF\uFF01\uFF01\u3000\u304A\u306B\u3044\u3061\u3083\u3093\u3001\u3042\u308A\u304C\u3068\u3046\uFF01\u3000\u3053\u308C\u3001\u308F\u305F\u3057\u306E\u305F\u304B\u3089\u3082\u306E\uFF01"],()=>e.finishSide("cat")):e.side.cat==="done"?n(["\u30CB\u30E3\u30C3\u30BF\u3001\u3082\u3046\u3069\u3053\u306B\u3082\u884C\u304B\u306A\u3044\u3067\u306D\u3002"]):n(["\u30CB\u30E3\u30C3\u30BF\u3001\u30AA\u30EC\u30F3\u30B8\u8272\u306E\u732B\u306A\u306E\u3002\u98A8\u8ECA\u306E\u3042\u305F\u308A\u3060\u3068\u601D\u3046\u2026\u2026"]):n(["\u3046\u3048\u30FC\u3093\u2026\u2026\u30CB\u30E3\u30C3\u30BF\u304C\u3044\u306A\u3044\u306E\u2026\u2026\u3002\u897F\u306E\u98A8\u8ECA\u306E\u307B\u3046\u306B\u8D70\u3063\u3066\u3044\u3063\u3061\u3083\u3063\u305F\u306E\u2026\u2026"],()=>e.startSide("cat"));if(t.id==="guard")return e.step>=4&&!e.side.slime_hunt?n(["\u3088\u3046\u65C5\u4EBA\uFF01\u3000\u65AD\u5D16\u306E\u3075\u3082\u3068\u306B\u96F7\u306E\u30B9\u30E9\u30A4\u30E0\u304C\u5897\u3048\u3066\u3001\u884C\u5546\u4EBA\u304C\u901A\u308C\u306A\u304F\u3066\u56F0\u3063\u3066\u308B\u3093\u3060\u3002\u7247\u4ED8\u3051\u3066\u304F\u308C\u306A\u3044\u304B\uFF1F"],()=>e.startSide("slime_hunt")):e.side.slime_hunt==="ready"?n(["\u672C\u5F53\u306B\u3084\u3063\u305F\u306E\u304B\uFF01\u3000\u3055\u3059\u304C\u3060\u306A\u3002\u3053\u308C\u306F\u885B\u5175\u968A\u304B\u3089\u306E\u793C\u3060\u3002"],()=>e.finishSide("slime_hunt")):n(["\u30EA\u30FC\u30D5\u30A7\u30F3\u306E\u9580\u306F\u4FFA\u304C\u5B88\u308B\uFF01\u3000\u2026\u2026\u30A2\u30AB\u30CD\u968A\u9577\u307B\u3069\u5F37\u304F\u306F\u306A\u3044\u3051\u3069\u306A\u3002"]);if(t.id==="fisher")return e.side.letter==="active"?n(["\u89AA\u7236\u304B\u3089\u624B\u7D19\uFF1F\u3000\u2026\u2026\u300C\u3061\u3083\u3093\u3068\u98EF\u3092\u98DF\u3048\u300D\u304B\u3002\u306F\u306F\u3063\u3001\u5909\u308F\u3089\u306A\u3044\u306A\u3002\u5C4A\u3051\u3066\u304F\u308C\u3066\u3042\u308A\u304C\u3068\u3046\u3002"],()=>e.readySide("letter")):e.side.boko_lake?e.side.boko_lake==="ready"?n(["\u3053\u308C\u3067\u307E\u305F\u91E3\u308A\u304C\u3067\u304D\u308B\uFF01\u3000\u3042\u308A\u304C\u3068\u3046\u3001\u53D6\u3063\u3066\u304A\u3044\u3066\u304F\u308C\u3002"],()=>e.finishSide("boko_lake")):n(["\u93E1\u306E\u6E56\u306F\u3001\u6674\u308C\u305F\u65E5\u306B\u306F\u7A7A\u304C\u305D\u306E\u307E\u307E\u6620\u308B\u3093\u3060\u3002"]):n(["\u6E56\u306E\u5317\u897F\u306B\u30DC\u30B3\u305F\u3061\u304C\u5C45\u3064\u3044\u3066\u3001\u91E3\u308A\u5834\u306B\u8FD1\u3065\u3051\u306A\u3044\u3093\u3060\u3002\u8FFD\u3044\u6255\u3063\u3066\u304F\u308C\u305F\u3089\u793C\u3092\u3059\u308B\u3088\u3002"],()=>e.startSide("boko_lake"));if(t.id==="hunter")return!e.side.feathers&&e.step>=9?n(["\u30E9\u30A4\u30AB\u306E\u53CB\u3060\u3061\u304B\u3002\u68EE\u306E\u9DF9\u306E\u7FBD\u6839\u30923\u679A\u96C6\u3081\u3066\u304D\u3066\u304F\u308C\u3093\u304B\u3002\u77E2\u7FBD\u6839\u306B\u3059\u308B\u3093\u3058\u3083\u3002"],()=>e.startSide("feathers")):e.side.feathers==="ready"?n(["\u898B\u4E8B\u306A\u7FBD\u6839\u3058\u3083\u3002\u3053\u308C\u3067\u30E9\u30A4\u30AB\u306B\u3044\u3044\u77E2\u3092\u4F5C\u3063\u3066\u3084\u308C\u308B\u3002"],()=>e.finishSide("feathers")):n(["\u68EE\u3067\u306F\u8DB3\u97F3\u3092\u6BBA\u3059\u3053\u3068\u3058\u3083\u3002\u2026\u2026\u30E9\u30A4\u30AB\u306E\u53D7\u3051\u58F2\u308A\u3058\u3083\u304C\u306A\u3002"]);if(t.id==="merchant")return this.shop(t);if(t.walker)return n([t.line]);let r=f0[t.id]||["\u3044\u3044\u5929\u6C17\u3060\u306D\u3048\u3002"];return n([r[Math.floor(Math.random()*r.length)]])}shop(t){let e=Object.entries(oo);this.dialog([[t.name,`\u3044\u3089\u3063\u3057\u3083\u3044\uFF01\u3000\u4F55\u306B\u3059\u308B\uFF1F\u3000\uFF08\u6240\u6301\u91D1 ${this.mora} \u30EB\u30DF\uFF09`]],null,e.map(([i,n])=>({text:`${n.name}\uFF08${n.price}\u30EB\u30DF\uFF09\u2014 ${n.desc}`,fn:()=>{if(this.mora<n.price){this.notify("\u30EB\u30DF\u304C\u8DB3\u308A\u306A\u3044","phys");return}this.mora-=n.price,this.items[i]=(this.items[i]||0)+1,this.notify(`${n.name}\u3092\u8CB7\u3063\u305F\uFF08\u6240\u6301 ${this.items[i]}\uFF09`,"gold"),this.audio?.sfx("buy"),this.save()}})).concat([{text:"\u3084\u3081\u3066\u304A\u304F",fn:()=>{}}]))}useFood(t){let e=oo[t];if(!e||!this.items[t])return!1;let i=this.activeMember;if(e.revive){let n=this.party.find(r=>!r.alive&&this.unlocked.includes(r.id));if(!n)return this.notify("\u5012\u308C\u3066\u3044\u308B\u4EF2\u9593\u306F\u3044\u306A\u3044","phys"),!1;n.alive=!0,n.hp=Math.round(n.maxHp*e.heal),this.notify(`${n.name}\u304C\u8D77\u304D\u4E0A\u304C\u3063\u305F`,"heal")}else{if(i.hp>=i.maxHp)return this.notify("HP\u306F\u6E80\u30BF\u30F3","phys"),!1;this.healActive(i.maxHp*e.heal)}return this.items[t]--,this.audio?.sfx("eat"),!0}dialog(t,e,i){this.dlg={lines:t.slice(),i:0,onEnd:e,choices:i},this.dialogOpen=!0,i&&document.pointerLockElement&&(this.selfUnlock=!0,document.exitPointerLock()),this.input.releaseAll(),this.showLine()}showLine(){let t=this.dlg;if(!t)return;let[e,i]=t.lines[t.i],n=t.i===t.lines.length-1;this.hud.say(e,i,n&&t.choices?t.choices:null),this.faceOverride="happy",this.audio?.sfx("talk")}dialogNext(){let t=this.dlg;t&&(t.i===t.lines.length-1&&t.choices||(t.i++,t.i>=t.lines.length?this.closeDialog():this.showLine()))}dialogChoose(t){let e=this.dlg;if(!e||!e.choices)return;let i=e.choices[t];this.closeDialog(),i&&i.fn&&i.fn()}closeDialog(){let t=this.dlg;this.dlg=null,this.dialogOpen=!1,this.faceOverride=void 0,this.dialogClosedAt=this.time,this.hud.closeDialog(),t&&t.onEnd&&t.onEnd()}near(t,e,i){return Math.hypot(this.mover.p.x-t,this.mover.p.z-e)<i}prepareBoss(){if(this.boss&&!this.boss.dead)return;let t=this.props.arena;this.boss=new ro(this,"boss",t.x,t.z-8,{group:"boss"}),this.boss.face=0,this.boss.phase=1,this.boss.state="idle",this.boss.update=(e=>function(i){return this.state==="idle"?(this.snap(),this.animate(i,0,"idle"),!0):e.call(this,i)})(this.boss.update),this.enemies.push(this.boss)}wakeBoss(){let t=this.boss;t.waking=!0,this.dialog(Ze.bossStart,()=>{t.state="chase",this.audio?.music("boss")}),this.hud.showBanner("\u9727\u306E\u5DE8\u50CF\u30CD\u30D3\u30E5\u30ED\u30B9","\u767E\u5E74\u306E\u7720\u308A\u3088\u308A\u76EE\u899A\u3081\u3057\u9727\u306E\u5B88\u308A\u624B","boss")}updateBoss(t){let e=this.boss;if(e.state==="idle")return;let i=e.hp/e.maxHp;if(e.phase===1&&i<.6&&(e.phase=2,this.dialog(Ze.bossPhase2),this.fx.ring(e.pos.x,e.pos.y,e.pos.z,"ice",20,1.2)),e.phase===2&&i<.28&&(e.phase=3,this.dialog(Ze.bossPhase3),e.coreT=0),e.phase===3){e.coreT=(e.coreT||0)+t;let r=e.coreT%12>7;r&&!e.coreOpen&&this.notify("\u7D50\u6676\u304C\u958B\u3044\u305F\uFF01\u3000\u4ECA\u3060\uFF01","wind"),e.coreOpen=r}Math.random()<.5&&this.fx.emit({x:e.pos.x+(Math.random()-.5)*8,y:e.pos.y+2+Math.random()*6,z:e.pos.z+(Math.random()-.5)*8,n:1,color:14209279,speed:.5,up:.5,life:2,size:1.2})}bossDefeated(t){this.flags.bossDown=!0,this.audio?.music(null),this.timeScale=.3,setTimeout(()=>{this.timeScale=1},1800),this.fx.emit({x:t.pos.x,y:t.pos.y+5,z:t.pos.z,n:300,color:16777215,speed:14,life:2,size:.6,radius:4});for(let e of["wind","fire","water","thunder","ice"])this.fx.ring(t.pos.x,t.pos.y,t.pos.z,e,30,2);this.reward(3e3,5e3,"\u9727\u306E\u5DE8\u50CF\u3092\u93AE\u3081\u305F")}playEnding(){this.hour=17.2,this.endingNow=!0,this.dialog(Ze.ending,()=>{this.screens.credits(()=>{this.endingNow=!1,this.quests.step=this.quests.steps.length-1,this.quests.started=!0,this.flags.cleared=!0,this.save(),this.notify("\u81EA\u7531\u306B\u5927\u9678\u3092\u65C5\u3057\u3088\u3046\uFF01\u3000\u4F9D\u983C\u3084\u5B9D\u7BB1\u3001\u98A8\u306E\u7D50\u6676\u304C\u6B8B\u3063\u3066\u3044\u308B\u3088","wind")})})}openMap(){this.screens.map()}openQuestLog(){this.screens.questLog()}openMenu(){this.screens.menu()}mapMarkers(){let t=[],e=this.quests.current();e&&e.target&&t.push({kind:"quest",x:e.target.x,z:e.target.z,edge:!0});for(let i of this.wpObjs)t.push({kind:"waypoint",x:i.x,z:i.z,done:this.waypointsOn.has(i.id)});for(let i of this.shrineObjs)t.push({kind:"shrine",x:i.x,z:i.z,done:!!this.flags[i.id]});t.push({kind:"town",x:330,z:330});for(let i of this.chestObjs)!this.opened.has(i.id)&&Math.hypot(i.x-this.mover.p.x,i.z-this.mover.p.z)<40&&t.push({kind:"chest",x:i.x,z:i.z});for(let i of this.enemies)!i.dead&&i.state!=="idle"&&i.state!=="wander"&&t.push({kind:"enemy",x:i.pos.x,z:i.pos.z});return this.quests.step>=14&&t.push({kind:"boss",x:0,z:-500}),t}nearestWaypoint(t){let e=this.world.meta.waypoints[0],i=1e9;for(let n of this.wpObjs){if(t&&!this.waypointsOn.has(n.id))continue;let r=Math.hypot(n.x-this.mover.p.x,n.z-this.mover.p.z);r<i&&(i=r,e=n)}return e}teleport(t){this.screens.fade(()=>{this.mover.p.x=t.x,this.mover.p.z=t.z+3,this.mover.p.y=this.world.groundAt(t.x,t.z+3),this.mover.mode="ground",this.mover.v.x=this.mover.v.z=this.mover.v.y=0,this.camRig.inited=!1,this.audio?.sfx("warp")})}makePortraits(){let t={},e=this.R.renderer,i=new ni(26,1,.05,10),n=new os;n.add(new ms(16777215,9079456,2.2));let r=new gs(16777215,2.2);r.position.set(1,2,3),n.add(r);let a=new Le(128,128,{colorSpace:Ue}),o=new Uint8Array(16384*4),l=document.createElement("canvas");l.width=l.height=128;let c=l.getContext("2d");for(let h of Qn){let d=Rn(h,this.tex);n.add(d.root);let u=new R;d.root.updateMatrixWorld(!0),d.j.head.getWorldPosition(u),i.position.set(u.x+.12,u.y+.13,u.z+.75),i.lookAt(u.x,u.y+.1,u.z),e.setRenderTarget(a),e.setClearColor(0,0),e.clear(),e.render(n,i),e.readRenderTargetPixels(a,0,0,128,128,o);let f=c.createImageData(128,128);for(let p=0;p<128;p++)f.data.set(o.subarray((127-p)*512,(128-p)*512),p*512);c.clearRect(0,0,128,128),c.putImageData(f,0,0),t[h]=l.toDataURL(),n.remove(d.root)}return e.setRenderTarget(null),this.portraits=t,t}save(){if(this.noSave)return;let t=this.snapshot();try{localStorage.setItem(kr,JSON.stringify(t))}catch{}}load(t){let e=this.mover;t.pos&&(e.p.x=t.pos.x,e.p.z=t.pos.z,e.p.y=this.world.groundAt(t.pos.x,t.pos.z),e.face=t.face||0),this.hour=t.hour??9.5,e.stamMax=t.stamMax||e.stamMax,e.stam=e.stamMax;for(let i of this.party)i.load(t.party?.[i.id]);this.unlocked=t.unlocked||["sora"],this.activeId=this.unlocked.includes(t.active)?t.active:"sora",this.quests.load(t.quests),this.flags=t.flags||{},this.mora=t.mora||0,this.items=t.items||{},this.opened=new Set(t.opened||[]),this.gotCrystals=new Set(t.crystals||[]),this.waypointsOn=new Set(t.wps||[]),(t.feathers||[]).forEach((i,n)=>{this.feathers[n]&&(this.feathers[n].got=i)});for(let i of this.chestObjs)this.opened.has(i.id)&&(i.open=.99);this.life.load(t.life),this.flags.bossDown&&(this.flags.bossDown=!0),this.flags.talkedMayor=this.flags.talkedMayor||this.quests.step>4,e.lastSafe={x:e.p.x,y:e.p.y,z:e.p.z}}snapshot(){let t=this.mover;return{v:1,pos:{x:t.p.x,z:t.p.z},face:t.face,hour:this.hour,stamMax:t.stamMax,party:Object.fromEntries(this.party.map(e=>[e.id,e.save()])),unlocked:this.unlocked,active:this.activeId,quests:this.quests.save(),flags:this.flags,mora:this.mora,items:this.items,opened:[...this.opened],crystals:[...this.gotCrystals],wps:[...this.waypointsOn],feathers:this.feathers.map(e=>e.got),life:this.life.save(),meta:{at:Date.now(),place:this.placeName(),step:this.quests.cur?.title||"",lv:this.party[0].lv,crystals:this.gotCrystals.size}}}placeName(){let t=this.mover.p,e=[["\u98A8\u8ECA\u306E\u753A\u30EA\u30FC\u30D5\u30A7\u30F3",330,330,150],["\u9727\u306E\u907A\u8DE1",0,-470,160],["\u93E1\u306E\u6E56",0,10,230],["\u7363\u306E\u91CE\u55B6\u5730",-380,-300,90],["\u3055\u3055\u3084\u304D\u306E\u68EE",-390,170,220],["\u5929\u98A8\u306E\u65AD\u5D16",450,-160,200],["\u306F\u3058\u307E\u308A\u306E\u8349\u539F",60,430,400]];for(let[i,n,r,a]of e)if(Math.hypot(t.x-n,t.z-r)<a)return i;return"\u30EA\u30E5\u30DF\u30A8\u30E9"}saveSlot(t){if(this.battle.combat)return this.notify("\u6226\u95D8\u4E2D\u306F\u30BB\u30FC\u30D6\u3067\u304D\u306A\u3044","phys"),!1;try{return localStorage.setItem(kr+".slot"+t,JSON.stringify(this.snapshot())),this.save(),this.notify(`\u30B9\u30ED\u30C3\u30C8${t}\u306B\u30BB\u30FC\u30D6\u3057\u307E\u3057\u305F`,"wind"),this.audio?.sfx("unlock"),!0}catch{return this.notify("\u30BB\u30FC\u30D6\u3067\u304D\u307E\u305B\u3093\u3067\u3057\u305F\uFF08\u30D6\u30E9\u30A6\u30B6\u30FC\u306E\u4FDD\u5B58\u304C\u4F7F\u3048\u307E\u305B\u3093\uFF09","phys"),!1}}static slotData(t){try{let e=localStorage.getItem(kr+".slot"+t);return e?JSON.parse(e):null}catch{return null}}static loadSlotAndRestart(t){let e=s.slotData(t);if(!e)return!1;try{localStorage.setItem(kr,JSON.stringify(e))}catch{return!1}return location.href=location.pathname+"?autostart=continue",!0}static loadSave(){try{let t=localStorage.getItem(kr);return t?JSON.parse(t):null}catch{return null}}static clearSave(){try{localStorage.removeItem(kr)}catch{}}debugInfo(){return{active:this.activeId,step:this.quests.cur?.id,enemies:this.enemies.filter(t=>!t.dead).length,hp:Math.round(this.activeMember.hp),act:this.battle.act?.kind}}};function lh(s,t,e){return s+As(s,t)*e}function n_(){let s=new jt,t=new En;t.moveTo(0,.1),t.quadraticCurveTo(.9,.05,1.25,-.25),t.lineTo(.9,-.15),t.lineTo(.6,-.3),t.lineTo(.3,-.18),t.lineTo(0,-.28),t.lineTo(-.3,-.18),t.lineTo(-.6,-.3),t.lineTo(-.9,-.15),t.lineTo(-1.25,-.25),t.quadraticCurveTo(-.9,.05,0,.1);let e=new Ea(t,12);e.rotateX(-Math.PI/2+.25);let i=new V(e,new Ke({color:15788760,side:fe}));i.castShadow=!0;let n=new V(new Ae(1,.012,4,24,Math.PI),new Ke({color:3116938}));return n.rotation.set(-Math.PI/2+.25,0,0),n.scale.set(1.25,.3,1),s.add(i,n),s.visible=!1,s}var Ds={n:5},A0=new WeakMap;function ts(s,t,e){let i=A0.get(t);if(i||(i={},A0.set(t,i)),i[e])return i[e];let n=s.createGain(),r={in:n};if(e==="strings"||e==="choir"){let a=n;if(e==="strings"){let h=s.createBiquadFilter();h.type="lowpass",h.frequency.value=3200,h.Q.value=.4,n.connect(h),a=h}else{let h=s.createGain();for(let[d,u,f]of[[800,6,1],[1150,7,.6],[2900,8,.2]]){let p=s.createBiquadFilter();p.type="bandpass",p.frequency.value=d,p.Q.value=u;let x=s.createGain();x.gain.value=f*2.2,n.connect(p),p.connect(x),x.connect(h)}a=h}let o=s.createGain();o.gain.value=.7,a.connect(o),o.connect(t);for(let[h,d,u]of[[.013,.37,-.6],[.019,.29,.6]]){let f=s.createDelay(.05);f.delayTime.value=h;let p=s.createOscillator();p.frequency.value=d;let x=s.createGain();x.gain.value=.003,p.connect(x),x.connect(f.delayTime),p.start();let m=s.createStereoPanner?s.createStereoPanner():s.createGain();m.pan&&(m.pan.value=u);let g=s.createGain();g.gain.value=.45,a.connect(f),f.connect(g),g.connect(m),m.connect(t)}let l=s.createOscillator();l.frequency.value=5.3;let c=s.createGain();c.gain.value=e==="choir"?9:11,l.connect(c),l.start(),r.vib=c}else{let a=s.createBiquadFilter();a.type="lowpass",a.type={hat:"highpass",snare:"bandpass",drumlow:"lowpass"}[e]||"lowpass",a.frequency.value={piano:5200,bass:650,pizz:1400,hat:7e3,snare:3e3,drumlow:400}[e]||4e3,a.Q.value=e==="snare"?.6:.5,n.connect(a),a.connect(t)}return i[e]=r,r}function Ne(s){return 440*Math.pow(2,(s-69)/12)}function Pn(s,t,e){if(!e||Math.abs(e)<.2||!s.createStereoPanner)return t;let i=s.createStereoPanner();return i.pan.value=e,i.connect(t),i}function Ur(s,t,e,i,n,r,a,o,l){t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(n,e+i),t.gain.setTargetAtTime(n*a,e+i,r/3),t.gain.setValueAtTime(n*a,Math.max(e+i,l)),t.gain.setTargetAtTime(1e-4,Math.max(e+i,l),o/4)}var Fr=null;function ki(s){if(Fr&&Fr.sampleRate===s.sampleRate)return Fr;let t=s.sampleRate*2;Fr=s.createBuffer(1,t,s.sampleRate);let e=Fr.getChannelData(0);for(let i=0;i<t;i++)e[i]=Math.random()*2-1;return Fr}function ch(s,t,e,i,n,r=.6,a=0){let o=Pn(s,ts(s,t,"piano").in,a),l=Math.max(.6,3.2-Math.log2(i/110)*.55),c=e+n;for(let[h,d,u]of[[1,.62,"sine"],[2,.26,"triangle"],[3,.09,"sine"]]){let f=s.createOscillator();f.type=u,f.frequency.value=i*h;let p=s.createGain();p.gain.setValueAtTime(1e-4,e),p.gain.linearRampToValueAtTime(d*r,e+.006),p.gain.setTargetAtTime(d*r*.25,e+.01,l/(h*.9)/2),p.gain.setTargetAtTime(1e-4,c,.12),f.connect(p),p.connect(o),f.start(e),f.stop(c+.7)}}function fn(s,t,e,i,n,r=.5,a=0,o={}){let l=ts(s,t,"strings"),c=Pn(s,l.in,a),h=s.createGain();h.connect(c);let d=o.attack??Math.min(.35,n*.3),u=o.bright??1;Ur(s,h,e,d,r*.16*(.8+u*.2),.3,.85,o.release??.4,e+n);let f=Math.min(o.voices??4,Ds.n);for(let p=0;p<f;p++){let x=s.createOscillator();x.type="sawtooth",x.frequency.value=i,x.detune.value=(p-(f-1)/2)*(o.spread??9)+(Math.random()-.5)*3,n>.3&&!Ds.noVib&&l.vib.connect(x.detune),x.connect(h),x.start(e),x.stop(e+n+(o.release??.4)+.3)}}function R0(s,t,e,i,n,r=.5,a=0){fn(s,t,e,i,n,r*1.15,a,{voices:3,spread:4,bright:1.6,attack:.07,release:.25})}function C0(s,t,e,i,n,r=.5,a=0){let o=Pn(s,t,a),l=s.createGain();l.connect(o),Ur(s,l,e,.06,r*.22,.2,.8,.15,e+n);let c=s.createOscillator();c.type="sine",c.frequency.value=i;let h=s.createOscillator();h.type="triangle",h.frequency.value=i*2;let d=s.createGain();d.gain.value=.12;let u=s.createOscillator();u.frequency.value=5;let f=s.createGain();f.gain.setValueAtTime(0,e),f.gain.linearRampToValueAtTime(i*.006,e+Math.min(.4,n)),u.connect(f),f.connect(c.frequency),f.connect(h.frequency),c.connect(l),h.connect(d),d.connect(l);let p=s.createBufferSource();p.buffer=ki(s);let x=s.createBiquadFilter();x.type="bandpass",x.frequency.value=i*2,x.Q.value=2;let m=s.createGain();m.gain.setValueAtTime(0,e),m.gain.linearRampToValueAtTime(r*.03,e+.03),m.gain.setTargetAtTime(r*.008,e+.05,.1),m.gain.setTargetAtTime(1e-4,e+n,.05),p.connect(x),x.connect(m),m.connect(o);for(let g of[c,h,u])g.start(e),g.stop(e+n+.5);p.start(e,Math.random()),p.stop(e+n+.3)}function Pi(s,t,e,i,n,r=.5,a=0){let o=Pn(s,t,a),l=Math.max(1.2,2.6-Math.log2(i/220)*.5);for(let[c,h,d]of[[1,.5,l],[2,.22,l*.4],[3,.1,l*.2],[5,.04,.15]]){let u=s.createOscillator();u.type=c===1?"triangle":"sine",u.frequency.value=i*c;let f=s.createGain();f.gain.setValueAtTime(1e-4,e),f.gain.linearRampToValueAtTime(h*r*.5,e+.004),f.gain.exponentialRampToValueAtTime(1e-4,e+d),u.connect(f),f.connect(o),u.start(e),u.stop(e+d+.05)}}function gd(s,t,e,i,n,r=.5,a=0){let o=Pn(s,ts(s,t,"pizz").in,a),l=s.createOscillator();l.type="sawtooth",l.frequency.value=i;let c=s.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(r*.3,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+.35),l.connect(c),c.connect(o),l.start(e),l.stop(e+.4)}function xd(s,t,e,i,n,r=.5,a=0){let o=s.createGain();o.connect(ts(s,t,"bass").in),Ur(s,o,e,.05,r*.34,.4,.75,.25,e+n);let l=s.createOscillator();l.type="sawtooth",l.frequency.value=i,l.connect(o),l.start(e),l.stop(e+n+.5);let c=s.createOscillator();c.type="sine",c.frequency.value=i;let h=s.createGain();h.gain.value=.7,c.connect(h),h.connect(o),c.start(e),c.stop(e+n+.5)}function lo(s,t,e,i,n,r=.5,a=0){let o=Pn(s,t,a),l=s.createBiquadFilter();l.type="lowpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,e),l.frequency.linearRampToValueAtTime(900+i*1.2*r,e+.12),l.frequency.setTargetAtTime(700+i*.6,e+.2,.3),l.connect(o);let c=s.createGain();c.connect(l),Ur(s,c,e,.08,r*.26,.3,.8,.2,e+n);for(let h of[-5,5]){let d=s.createOscillator();d.type="sawtooth",d.frequency.value=i,d.detune.value=h,d.connect(c),d.start(e),d.stop(e+n+.6)}}function vd(s,t,e,i,n,r=.5,a=0){let o=ts(s,t,"choir"),l=Pn(s,o.in,a),c=s.createGain();c.connect(l),Ur(s,c,e,.4,r*.32,.3,.85,.6,e+n);for(let h=0;h<2;h++){let d=s.createOscillator();d.type="sawtooth",d.frequency.value=i,d.detune.value=(h-.5)*12,o.vib.connect(d.detune),d.connect(c),d.start(e),d.stop(e+n+1)}}function P0(s,t,e,i,n,r=.5,a=0){let o=Pn(s,t,a),l=s.createBiquadFilter();l.type="lowpass",l.frequency.value=2400,l.connect(o);let c=s.createGain();c.connect(l),Ur(s,c,e,.03,r*.13,.1,.9,.08,e+n);let h=s.createOscillator();h.frequency.value=6;let d=s.createGain();d.gain.value=r*.025,h.connect(d),d.connect(c.gain);for(let[u,f,p]of[["square",-8,.5],["sawtooth",8,.6],["square",1200,.15]]){let x=s.createOscillator();x.type=u,x.frequency.value=i,x.detune.value=f;let m=s.createGain();m.gain.value=p,x.connect(m),m.connect(c),x.start(e),x.stop(e+n+.3)}h.start(e),h.stop(e+n+.3)}function Je(s,t,e,i,n,r=.5,a=0){let o=Pn(s,t,a);for(let[l,c,h]of[[1,.5,1.6],[2.76,.25,.8],[5.4,.12,.4],[8.93,.05,.2]]){let d=s.createOscillator();d.type="sine",d.frequency.value=i*l;let u=s.createGain();u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(c*r*.3,e+.002),u.gain.exponentialRampToValueAtTime(1e-4,e+h),d.connect(u),u.connect(o),d.start(e),d.stop(e+h+.05)}}function In(s,t,e,i=70,n=.7){let r=s.createOscillator();r.type="sine",r.frequency.setValueAtTime(i*1.5,e),r.frequency.exponentialRampToValueAtTime(i,e+.08);let a=s.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(n*.7,e+.005),a.gain.exponentialRampToValueAtTime(1e-4,e+1.2),r.connect(a),a.connect(t),r.start(e),r.stop(e+1.3);let o=s.createBufferSource();o.buffer=ki(s);let l=s.createGain();l.gain.setValueAtTime(n*.35,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.25),o.connect(l),l.connect(ts(s,t,"drumlow").in),o.start(e,Math.random()),o.stop(e+.3)}function co(s,t,e,i=.8){In(s,t,e,55,i)}function Br(s,t,e,i=.5){let n=s.createBufferSource();n.buffer=ki(s);let r=s.createGain();r.gain.setValueAtTime(i*.4,e),r.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(r),r.connect(ts(s,t,"snare").in),n.start(e,Math.random()),n.stop(e+.2);let a=s.createOscillator();a.type="triangle",a.frequency.setValueAtTime(220,e),a.frequency.exponentialRampToValueAtTime(140,e+.05);let o=s.createGain();o.gain.setValueAtTime(i*.3,e),o.gain.exponentialRampToValueAtTime(1e-4,e+.1),a.connect(o),o.connect(t),a.start(e),a.stop(e+.12)}function zs(s,t,e,i=.4,n=2){let r=s.createBufferSource();r.buffer=ki(s);let a=s.createBiquadFilter();a.type="highpass",a.frequency.value=5e3;let o=s.createGain();o.gain.setValueAtTime(i*.25,e),o.gain.exponentialRampToValueAtTime(1e-4,e+n),r.connect(a),a.connect(o),o.connect(t),r.start(e,Math.random()),r.stop(e+n)}function hh(s,t,e,i=.3){let n=s.createBufferSource();n.buffer=ki(s);let r=s.createGain();r.gain.setValueAtTime(1e-4,e),r.gain.linearRampToValueAtTime(i*.12,e+.015),r.gain.exponentialRampToValueAtTime(1e-4,e+.07),n.connect(r),r.connect(ts(s,t,"hat").in),n.start(e,Math.random()),n.stop(e+.08)}function I0(s,t,e,i=.3){hh(s,t,e,i*1.4);for(let n of[6800,8200]){let r=s.createOscillator();r.type="square",r.frequency.value=n;let a=s.createGain();a.gain.setValueAtTime(i*.015,e),a.gain.exponentialRampToValueAtTime(1e-4,e+.15),r.connect(a),a.connect(t),r.start(e),r.stop(e+.16)}}function ho(s,t=2.8,e=3.2){let i=s.sampleRate,n=Math.floor(i*t),r=s.createBuffer(2,n,i);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<n;l++){let c=l/n;o[l]=(Math.random()*2-1)*Math.pow(1-c,e)*(l<i*.01?l/(i*.01):1)}}return r}var k0={C:0,D:2,E:4,F:5,G:7,A:9,B:11};function s_(s){let t=/^([A-G])([#b]?)(-?\d)$/.exec(s);if(!t)throw new Error("note "+s);return 12*(Number(t[3])+1)+k0[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)}function r_(s){return s.split(/\s+/).filter(t=>t&&t!=="|").map(t=>{let[e,i]=t.split(":");return[e==="r"?null:s_(e),Number(i)]})}var D0={"":[0,4,7],m:[0,3,7],7:[0,4,7,10],m7:[0,3,7,10],maj7:[0,4,7,11],m9:[0,3,7,10,14],sus4:[0,5,7],add9:[0,4,7,14],dim:[0,3,6],9:[0,4,7,10,14]};function a_(s){let[t,e]=s.split("/"),i=/^([A-G][#b]?)(.*)$/.exec(t),n=z0(i[1]),r=D0[i[2]]??D0[""];return{root:n,tones:r,bass:e?z0(e):n}}function z0(s){return(k0[s[0]]+(s[1]==="#"?1:s[1]==="b"?-1:0)+12)%12}function pn(s,t,e){let i=[];for(let n=t;n<=e;n++){let r=((n-s.root)%12+12)%12;s.tones.some(a=>a%12===r)&&i.push(n)}return i}var dh={title:{bpm:74,beats:4,key:0,chords:"D | A/C# | Bm | G | D/F# | G | Em7 | A | D | A/C# | Bm | F#m/A | G | D/F# | Em7 A | D",mel:"F#5:2 A5:1 D6:1 | C#6:3 E5:1 | F#5:1.5 E5:0.5 D5:1 F#5:1 | B4:3 r:1 | A4:1 D5:1 F#5:1 A5:1 | G5:2 B5:2 | A5:1 G5:1 F#5:1 E5:1 | E5:3 r:1 | F#5:2 A5:1 D6:1 | E6:2 C#6:2 | D6:1 C#6:0.5 B5:0.5 A5:1 F#5:1 | A5:3 r:1 | B5:1 A5:1 G5:1 B5:1 | A5:2 F#5:1 D5:1 | E5:1 G5:1 F#5:1 E5:1 | D5:4",lead:"flute",layers:["pianoArp","pad","bassLong"],drums:null,intro:2},field:{bpm:96,beats:4,chords:"G | D/F# | Em | C | G/B | C | Am7 | D | G | D/F# | Em | Bm | C | G/B | Am7 D | G | Em | C | G | D | Em | C | Am | D | C | D | Bm | Em | Am | D/F# | G D | G",mel:"D5:1 G5:1 A5:1 B5:1 | A5:1.5 G5:0.5 F#5:2 | G5:1 E5:1 B4:1 E5:1 | C5:3 r:1 | B4:1 D5:1 G5:1 B5:1 | C6:2 B5:1 A5:1 | G5:1 E5:1 A5:1.5 G5:0.5 | F#5:3 r:1 | D5:1 G5:1 A5:1 B5:1 | D6:1.5 C6:0.5 B5:1 A5:1 | B5:1 G5:1 E5:1 G5:1 | F#5:2 D5:2 | E5:1 G5:1 C6:1 B5:1 | A5:1 G5:1 D5:1 G5:1 | A5:1 C6:1 B5:1 A5:1 | G5:4 | B5:2 A5:1 G5:1 | E5:3 G5:1 | D5:1 G5:1 B5:1 D6:1 | A5:3 r:1 | B5:1.5 A5:0.5 G5:1 E5:1 | G5:2 E5:2 | C5:1 E5:1 A5:1 C6:1 | B5:2 A5:2 | G5:1 A5:1 B5:1 C6:1 | D6:2 A5:2 | B5:1 A5:1 F#5:1 D5:1 | E5:3 r:1 | E5:1 F#5:1 G5:1 A5:1 | F#5:1 E5:1 D5:1 F#5:1 | G5:1.5 A5:0.5 B5:1 A5:1 | G5:4",lead:"flute",lead2:{from:16,inst:"violin"},layers:["harpArp","padSoft","pizz"],drums:"light"},night:{bpm:64,beats:4,chords:"Em9 | Cmaj7 | G | D/F# | Em | Am7 | Bsus4 | B | Em | Cmaj7 | G/B | Am7 | Cmaj7 | D | Bsus4 B | Em",mel:"B4:2 G5:2 | E5:3 r:1 | D5:1 B4:1 D5:1 G5:1 | F#5:3 r:1 | G5:1 F#5:1 E5:1 B4:1 | C5:2 E5:2 | F#5:2 E5:1 D#5:1 | D#5:4 | B4:2 G5:2 | B5:2 A5:1 G5:1 | D5:3 G5:1 | A5:2 E5:2 | G5:1 F#5:1 E5:1 G5:1 | A5:2 F#5:2 | E5:1 F#5:1 D#5:2 | E5:4",lead:"piano",layers:["pianoArpSlow","padSoft","bassLong"],drums:null},town:{bpm:140,beats:3,chords:"F | F | C | C | Dm | Bb | C | C7 | F | F | C | Am | Bb | C | F | F | Bb | Bb | F | F | Gm | C | F | F | Bb | C | Am | Dm | Gm7 | C7 | F | F",mel:"C5:1 F5:1 A5:1 | C6:2 A5:1 | G5:1 E5:1 C5:1 | G5:3 | F5:1 A5:1 D6:1 | D6:2 C6:1 | Bb5:1 G5:1 E5:1 | C5:3 | C5:1 F5:1 A5:1 | C6:2 F6:1 | E6:1 D6:1 C6:1 | A5:3 | Bb5:1 D6:1 F6:1 | E6:1 D6:1 C6:1 | A5:1 G5:1 F5:1 | F5:3 | D6:2 C6:1 | Bb5:2 A5:1 | A5:1 G5:1 F5:1 | C5:3 | Bb5:2 A5:1 | G5:1 A5:1 Bb5:1 | A5:2 F5:1 | C5:3 | D5:1 F5:1 Bb5:1 | C6:2 E5:1 | A5:1 G5:1 F5:1 | D5:3 | G5:1 Bb5:1 D6:1 | C6:1 Bb5:1 E5:1 | F5:3 | r:3",lead:"accordion",lead2:{from:16,inst:"flute"},layers:["waltz","bassWaltz"],drums:"waltz"},lake:{bpm:82,beats:4,chords:"Am | F | C | G | Am | F | Dm7 | E | F | G | Em | Am | Dm | G | Esus4 E | Am",mel:"E5:2 A5:2 | C6:3 B5:1 | G5:2 E5:2 | D5:3 r:1 | E5:1 A5:1 B5:1 C6:1 | D6:2 C6:1 A5:1 | F5:2 A5:1 C6:1 | B5:3 r:1 | A5:1 C6:1 F6:1 E6:1 | D6:2 B5:2 | G5:1 B5:1 E6:1 D6:1 | C6:2 A5:2 | F5:1 A5:1 D6:1 C6:1 | B5:1 D6:1 G5:1 B5:1 | A5:1 B5:1 G#5:2 | A5:4",lead:"flute",layers:["harpArp","pad","bassLong","bells"],drums:null},battle:{bpm:152,beats:4,chords:"Dm | Dm | Bb | C | Dm | Dm | Gm | A | Dm | Bb | F | C | Gm | Bb | A | A7",mel:"D5:1.5 A4:0.5 D5:1 F5:1 | E5:1.5 C5:0.5 A4:2 | Bb4:1 D5:1 F5:1 Bb5:1 | A5:2 G5:2 | F5:1.5 E5:0.5 D5:1 A5:1 | D6:3 r:1 | Bb5:1 A5:1 G5:1 D5:1 | E5:2 C#5:2 | D5:1 F5:1 A5:1 D6:1 | C6:1.5 Bb5:0.5 A5:1 F5:1 | A5:1 G5:1 F5:1 C5:1 | E5:2 G5:2 | Bb5:1 A5:1 G5:1 Bb5:1 | D6:2 F6:2 | E6:1 D6:1 C#6:1 A5:1 | E6:4",lead:"horn",lead2:{from:0,inst:"violin",oct:12},layers:["ostinato","padStab","bassDrive"],drums:"battle",reps:2},ruins:{bpm:68,beats:4,chords:"C#m | A | F#m | G#sus4 G# | C#m | E | B | G# | A | E/G# | F#m | C#m | A | B | G#sus4 | G#",mel:"G#5:3 E5:1 | C#5:4 | F#5:2 A5:2 | G#5:4 | E5:1 G#5:1 C#6:2 | B5:3 r:1 | D#5:2 F#5:2 | C5:4 | C#6:2 B5:1 A5:1 | G#5:4 | F#5:1 E5:1 F#5:1 A5:1 | G#5:4 | A5:2 E5:2 | F#5:2 D#5:2 | E5:1 D#5:1 C#5:1 C5:1 | C#5:4",lead:"piano",layers:["choirPad","bassLong","bells"],drums:"ruins"},boss:{bpm:160,beats:4,chords:"Bm | Bm | G | A | Bm | F#m | G | F# | Em | G | Bm | F# | G | A | F# | F#7",mel:"B4:2 F#5:2 | D5:1 C#5:1 B4:2 | G5:2 F#5:1 E5:1 | C#5:4 | B4:1 D5:1 F#5:1 B5:1 | A5:2 C#5:2 | B5:1 A5:1 G5:1 D5:1 | F#5:4 | E5:2 G5:2 | B5:2 D6:2 | F#6:2 E6:1 D6:1 | C#6:4 | D6:1 C#6:1 B5:1 G5:1 | A5:1 B5:1 C#6:1 E6:1 | F#6:3 E6:1 | F#6:4",lead:"choir",lead2:{from:0,inst:"horn",oct:-12},layers:["ostinato","padStab","bassDrive","choirPad"],drums:"boss",reps:2},ending:{bpm:70,beats:4,chords:"D | A/C# | Bm | G | D/F# | G | Em7 | A | D | A/C# | Bm | F#m/A | G | D/F# | Em7 A | D",mel:"F#5:2 A5:1 D6:1 | C#6:3 E5:1 | F#5:1.5 E5:0.5 D5:1 F#5:1 | B4:3 r:1 | A4:1 D5:1 F#5:1 A5:1 | G5:2 B5:2 | A5:1 G5:1 F#5:1 E5:1 | E5:3 r:1 | F#5:2 A5:1 D6:1 | E6:2 C#6:2 | D6:1 C#6:0.5 B5:0.5 A5:1 F#5:1 | A5:3 r:1 | B5:1 A5:1 G5:1 B5:1 | A5:2 F#5:1 D5:1 | E5:1 G5:1 F#5:1 E5:1 | D5:4",lead:"violin",lead2:{from:0,inst:"flute",oct:12},layers:["harpArp","pad","bassLong","pianoArpSlow"],drums:"ending"}};var N0={flute:C0,piano:ch,violin:R0,horn:lo,choir:vd,accordion:P0};function F0(s){let t=60/s.bpm,e=s.beats,i=s.chords.split("|").map(a=>a.trim().split(/\s+/).map(a_)),n=[],r=0;for(let[a,o]of r_(s.mel))a!=null&&n.push({beat:r,m:a,beats:o}),r+=o;return{song:s,spb:t,B:e,bars:i.length,chords:i,mel:n}}function U0(s,t,e,i,n,r){let{song:a,spb:o,B:l}=t,c=N0[a.lead];for(let d of t.mel){if(d.beat<i*l||d.beat>=(i+1)*l)continue;let u=n+(d.beat-i*l)*o,f=d.beats*o*.95,p=.55+(d.beat%l===0?.1:0)+Math.random()*.05;a.intro&&r===0&&i<a.intro&&a.lead!=="piano"||c(s,e,u,Ne(d.m),f,p*(a.lead==="choir"?.8:1),-.05),a.lead2&&i>=a.lead2.from&&N0[a.lead2.inst](s,e,u,Ne(d.m+(a.lead2.oct||0)),f,p*.55,.25)}let h=t.chords[i];for(let d=0;d<h.length;d++){let u=l/h.length,f=n+d*u*o;for(let p of a.layers)l_[p](s,e,f,h[d],u,o,i,a);a.drums&&c_[a.drums](s,e,f,u,o,i,d,t.bars)}}function o_(s,t,e,i=1e9){let n=F0(t),r=t.reps||1,a=.05,o=0;for(let l=0;l<r;l++)for(let c=0;c<n.bars&&o<i;c++,o++)U0(s,n,e,c,a,l),a+=n.B*n.spb;return a}var uh=class{constructor(t,e){this.ctx=t,this.out=e,this.cur=null,this.cache={}}play(t){let e=this.ctx,i=e.currentTime;if(this.cur&&this.cur.name===t)return;if(this.cur){let a=this.cur.g;a.gain.cancelScheduledValues(i),a.gain.setValueAtTime(a.gain.value,i),a.gain.linearRampToValueAtTime(0,i+2);let o=a;setTimeout(()=>o.disconnect(),4500),this.cur=null}if(!t)return;let n=this.cache[t]||(this.cache[t]=F0(dh[t])),r=e.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(1,i+1.8),r.connect(this.out),this.cur={name:t,P:n,g:r,bar:0,rep:0,next:i+.15}}tick(){let t=this.ctx,e=this.cur;if(!e)return;let i=t.currentTime+1.2;for(e.next<t.currentTime-1&&(e.next=t.currentTime+.1);e.next<i;)U0(t,e.P,e.g,e.bar,e.next,e.rep),e.next+=e.P.B*e.P.spb,e.bar++,e.bar>=e.P.bars&&(e.bar=0,e.rep++)}},l_={pianoArp(s,t,e,i,n,r){let a=pn(i,50,76),o=[a[0],a[2],a[4]??a[3],a[3]??a[2],a[5]??a[4]??a[3],a[3],a[2],a[1]],l=Math.round(n*2);for(let c=0;c<l;c++)ch(s,t,e+c*r/2,Ne(o[c%o.length]),r*1.4,.34-c%2*.06,(c%4-1.5)*.15)},pianoArpSlow(s,t,e,i,n,r){let a=pn(i,45,72),o=Math.round(n);for(let l=0;l<o;l++)ch(s,t,e+l*r,Ne(a[[0,2,3,1][l%4]]??a[0]),r*2,.3,l%2?.2:-.2)},harpArp(s,t,e,i,n,r){let a=pn(i,55,84),o=Math.round(n*2);for(let l=0;l<o;l++)Pi(s,t,e+l*r/2,Ne(a[l*1%Math.min(a.length,6)]),r,.42,.35)},pad(s,t,e,i,n,r){let a=pn(i,55,74).slice(0,4);for(let[o,l]of a.entries())fn(s,t,e,Ne(l),n*r*1.02,.42,(o-1.5)*.3)},padSoft(s,t,e,i,n,r){let a=pn(i,52,71).slice(0,3);for(let[o,l]of a.entries())fn(s,t,e,Ne(l),n*r*1.02,.28,(o-1)*.4,{attack:.5,bright:.8})},padStab(s,t,e,i,n,r,a){let o=pn(i,55,72).slice(0,4);for(let[l,c]of o.entries())fn(s,t,e,Ne(c),r*.9,.5,(l-1.5)*.3,{attack:.02,release:.15,bright:1.4,voices:2}),n>=4&&fn(s,t,e+r*2.5,Ne(c),r*1.4,.42,(l-1.5)*.3,{attack:.03,bright:1.3,voices:2})},choirPad(s,t,e,i,n,r){let a=pn(i,52,69).slice(0,3);for(let[o,l]of a.entries())vd(s,t,e,Ne(l),n*r,.35,(o-1)*.4)},bassLong(s,t,e,i,n,r){xd(s,t,e,Ne(36+i.bass<40?36+i.bass+12:36+i.bass),n*r*.98,.5)},pizz(s,t,e,i,n,r){let a=40+(i.bass-4+12)%12,o=a+7;for(let l=0;l<n;l++)gd(s,t,e+l*r,Ne(l%2?o:a),r,.55,-.25)},bassDrive(s,t,e,i,n,r){let a=33+(i.bass+3)%12;for(let o=0;o<n*2;o++)xd(s,t,e+o*r/2,Ne(a+(o%4===3?12:0)),r*.42,.55)},ostinato(s,t,e,i,n,r){let a=pn(i,50,66),o=[0,2,1,2,0,2,1,3];for(let l=0;l<n*4;l++)fn(s,t,e+l*r/4,Ne(a[o[l%8]]??a[0]),r/4*.85,.5,l%2?.3:-.3,{attack:.01,release:.05,voices:1,bright:1.6})},waltz(s,t,e,i,n,r){let a=pn(i,57,72).slice(0,3);for(let o=1;o<3;o++)for(let l of a)Pi(s,t,e+o*r,Ne(l),r*.6,.32,.2)},bassWaltz(s,t,e,i,n,r,a){gd(s,t,e,Ne(40+(i.bass-4+12)%12+(a%2?7:0)),r,.7,-.15)},bells(s,t,e,i,n,r,a){if(a%2)return;let o=pn(i,76,90);Je(s,t,e+r*.5,Ne(o[0]),1,.35,.4),Je(s,t,e+r*1.5,Ne(o[2]??o[1]),1,.3,-.4)}},c_={light(s,t,e,i,n,r){for(let a=0;a<i*2;a++)hh(s,t,e+a*n/2,a%2?.25:.4);r%4===0&&In(s,t,e,75,.25)},waltz(s,t,e,i,n,r){In(s,t,e,90,.2);for(let a=1;a<3;a++)I0(s,t,e+a*n,.35)},battle(s,t,e,i,n,r,a,o){if(co(s,t,e,.8),co(s,t,e+n*1.5,.5),co(s,t,e+n*2,.7),Br(s,t,e+n,.45),Br(s,t,e+n*3,.5),r%4===3)for(let l=0;l<8;l++)Br(s,t,e+n*2+l*n/4,.15+l*.04);r%8===0&&zs(s,t,e,.6,2.5);for(let l=0;l<4;l++)hh(s,t,e+l*n,.35)},boss(s,t,e,i,n,r){for(let a of[0,.75,1.5,2,2.75,3.5])co(s,t,e+a*n,a===0||a===2?.95:.55);Br(s,t,e+n,.5),Br(s,t,e+n*3,.55),r%4===0&&zs(s,t,e,.7,3),r%2===1&&In(s,t,e+n*3.5,62,.6)},ruins(s,t,e,i,n,r){r%2===0&&In(s,t,e,50,.35),r%4===3&&zs(s,t,e+n*3,.15,3)},ending(s,t,e,i,n,r){r%4===0&&(In(s,t,e,70,.3),zs(s,t,e,.2,3))}};async function B0(s,t=44100,e=1e9){let i=dh[s],n=60/i.bpm,a=.05+Math.min(e,i.chords.split("|").length*(i.reps||1))*i.beats*n,o=3,l=new OfflineAudioContext(2,Math.ceil((a+o)*t),t),c=l.createGain();c.gain.value=.75;let h=l.createDynamicsCompressor();h.threshold.value=-16,h.ratio.value=3,h.attack.value=.01,h.release.value=.25;let d=l.createGain();d.gain.value=.9;let u=l.createConvolver();u.buffer=ho(l,s==="battle"||s==="boss"?1.8:2.8,3);let f=l.createGain();f.gain.value=s==="battle"||s==="boss"?.22:.38;let p=l.createGain();p.connect(c),c.connect(h),p.connect(u),u.connect(f),f.connect(h),h.connect(d),d.connect(l.destination),o_(l,i,p,e);let x=await l.startRendering(),m=Math.ceil(a*t),g=new AudioBuffer({numberOfChannels:2,length:m,sampleRate:t});for(let v=0;v<2;v++){let b=x.getChannelData(v),y=g.getChannelData(v);y.set(b.subarray(0,m));for(let M=m;M<b.length;M++)y[M-m]+=b[M]}return g}var fh=class{constructor(t){this.settings=t,this.ctx=null,this.songs={},this.rendering={},this.cur=null,this.want=null,this.queue=[],this.last={},this.stepT=0,document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}unlock(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t({latencyHint:"interactive"});let e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.sfxBus=e.createGain(),this.ambBus=e.createGain();let i=e.createDynamicsCompressor();i.threshold.value=-10,i.ratio.value=4,this.sfxBus.connect(i),i.connect(this.master),this.ambBus.connect(this.master),this.rev=e.createConvolver(),this.rev.buffer=ho(e,1.6,3.5),this.revSend=e.createGain(),this.revSend.gain.value=.25,this.revSend.connect(this.rev),this.rev.connect(this.sfxBus);let n=e.createConvolver();n.buffer=ho(e,2.6,3),this.musicIn=e.createGain();let r=e.createGain();r.gain.value=.75;let a=e.createGain();a.gain.value=.34;let o=e.createDynamicsCompressor();o.threshold.value=-16,o.ratio.value=3,this.musicIn.connect(r),this.musicIn.connect(n),n.connect(a),r.connect(o),a.connect(o),o.connect(this.musicBus),Ds.n=matchMedia("(pointer: coarse)").matches?2:3,Ds.noVib=matchMedia("(pointer: coarse)").matches,this.player=new uh(e,this.musicIn),this.recorded={},this.loading={},this.failed={},this.apply(),this.startAmbience(),this.timer=setInterval(()=>{this.ctx.state==="running"&&this.player.tick()},200),this.want&&this.music(this.want);let l=0,c=["title","field","battle","town","lake","night","ruins","boss","ending"],h=()=>{l<c.length&&(this.load(c[l++]),setTimeout(h,1500))};h()}apply(){if(!this.ctx)return;let t=this.settings;this.musicBus.gain.value=.95*(t.music??.7),this.sfxBus.gain.value=.9*(t.sfx??.8),this.ambBus.gain.value=.5*(t.amb??.6)}load(t){this.recorded[t]||this.loading[t]||this.failed[t]||!this.ctx||(this.loading[t]=fetch("music/"+t+".ogg").then(e=>{if(!e.ok)throw new Error(e.status);return e.arrayBuffer()}).then(e=>new Promise((i,n)=>this.ctx.decodeAudioData(e,i,n))).then(e=>{this.recorded[t]=e,this.want===t&&(this.playing=null,this.music(t))}).catch(e=>{console.warn("music fallback",t,e&&e.message),this.failed[t]=!0,this.want===t&&(this.playing=null,this.music(t))}).finally(()=>{this.loading[t]=null}))}music(t){if(this.want=t,!this.ctx||this.playing===t)return;let e=this.ctx,i=e.currentTime;if(this.cur){let n=this.cur.g,r=this.cur.src;n.gain.cancelScheduledValues(i),n.gain.setValueAtTime(n.gain.value,i),n.gain.linearRampToValueAtTime(0,i+2),setTimeout(()=>{try{r.stop()}catch{}n.disconnect()},2300),this.cur=null}if(this.player.play(null),this.playing=t,!!t)if(this.recorded[t]){let n=e.createBufferSource();n.buffer=this.recorded[t],n.loop=!0;let r=e.createGain();r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(1,i+2),n.connect(r),r.connect(this.musicBus),n.start(i+.05),this.cur={name:t,src:n,g:r}}else this.failed[t]?(this.player.play(t),this.player.tick()):(this.playing=null,this.load(t))}update(t,e){if(!this.ctx)return;if(this.chooseT=(this.chooseT||0)-t,this.chooseT<=0){this.chooseT=.5;let n=e.mover.p,r=e.hour,a;e.boss&&!e.boss.dead&&e.boss.state!=="idle"?a="boss":e.battle.inCombatT>.5&&e.enemies.some(o=>!o.dead&&(o.state==="chase"||o.state==="attack"))?a="battle":Math.hypot(n.x-330,n.z-330)<115?a="town":n.z<-330?a="ruins":r<5.3||r>19.2?a="night":Math.hypot(n.x,n.z)<230||n.x<-280?a="lake":a="field",this.forced&&(a=this.forced),a!==this.want&&this.music(a)}let i=e.mover;i.mode==="ground"&&i.speed>.8&&(this.stepT-=t*i.speed*.42,this.stepT<=0&&(this.stepT=1,this.step(e))),this.glideG&&this.glideG.gain.setTargetAtTime(i.mode==="glide"?.35:i.speed>8?.1:0,this.ctx.currentTime,.2),this.rainG&&this.rainG.gain.setTargetAtTime((e.weather?e.weather.rain:0)*.32,this.ctx.currentTime,.8),this.birdT==null&&(this.birdT=3),this.birdT-=t,this.birdT<=0&&(this.birdT=2+Math.random()*6,e.weather&&e.weather.rain>.5||(e.hour>5.5&&e.hour<18.5?this.bird():this.cricket()))}sfx(t,e){if(!this.ctx)return;let i=this.ctx,n=i.currentTime,r=this.sfxBus,a=performance.now();if(this.last[t]&&a-this.last[t]<30)return;this.last[t]=a;let o=(h,d,u,f,p=1)=>{let x=i.createBufferSource();x.buffer=ki(i);let m=i.createBiquadFilter();m.type="bandpass",m.Q.value=p,m.frequency.setValueAtTime(h,n),m.frequency.exponentialRampToValueAtTime(d,n+u);let g=i.createGain();g.gain.setValueAtTime(1e-4,n),g.gain.linearRampToValueAtTime(f,n+u*.3),g.gain.exponentialRampToValueAtTime(1e-4,n+u),x.connect(m),m.connect(g),g.connect(r),x.start(n,Math.random()),x.stop(n+u+.05)},l=(h,d,u=.2)=>{let f=i.createOscillator();f.type="sine",f.frequency.setValueAtTime(h*2,n),f.frequency.exponentialRampToValueAtTime(h,n+.06);let p=i.createGain();p.gain.setValueAtTime(d,n),p.gain.exponentialRampToValueAtTime(1e-4,n+u),f.connect(p),p.connect(r),f.start(n),f.stop(n+u+.05)},c=(h,d,u=Je,f=.5)=>h.forEach((p,x)=>u(i,r,n+x*d,Ne(p),.6,f));switch(t){case"swing":o(1800,600,.18,.5,.8);break;case"heavy":o(900,250,.32,.7,.7);break;case"hit":l(90,.6),o(3e3,1200,.08,e?.5:.3,1.2);break;case"hitEl":l(110,.45),o(5e3,2e3,.12,.3,2),e&&c([88],0,Je,.3);break;case"bow":o(2500,4e3,.12,.3,3);break;case"bowCharged":o(1500,5e3,.25,.45,2),Je(i,this.revSend,n,1600,.4,.4);break;case"cast":o(600,1800,.2,.3,4),Je(i,this.revSend,n,900,.4,.25);break;case"jump":o(400,900,.15,.2,1);break;case"land":l(70,.25,.12);break;case"dash":o(800,2400,.22,.35,.8);break;case"glide":o(500,1500,.4,.3,.6);break;case"splash":o(1200,400,.4,.5,.5);break;case"switch":c([79,84],.05,Je,.35),o(600,2e3,.2,.2,2);break;case"skill_wind":o(300,2600,.6,.6,1.5),c([74,81],.06,Pi,.4);break;case"skill_fire":o(200,900,.5,.6,.6),l(60,.6,.4);break;case"skill_water":c([79,83,86,91],.05,Pi,.45),o(1500,500,.5,.3,3);break;case"skill_thunder":o(4e3,800,.3,.5,2),l(80,.5);break;case"burst":o(200,4e3,1,.7,.8),c([62,69,74,78,81],.07,Pi,.5),In(i,r,n+.6,60,.9),zs(i,r,n+.6,.5,2);break;case"thunder":o(6e3,300,.4,.5,.4),l(50,.5,.5);break;case"explode":l(45,.9,.6),o(2e3,100,.6,.6,.4);break;case"ice":o(7e3,3e3,.25,.35,3),Je(i,r,n,2200,.3,.25);break;case"reaction":c([84,91],.03,Je,.3);break;case"kill":o(800,200,.5,.25,.5);break;case"hurt":l(70,.6,.25),o(1200,400,.15,.3,1);break;case"pickup":c([84,88],.06,Je,.4);break;case"crystal":c([86,90,93,98],.06,Je,.4);break;case"chest":c([72,76,79,84,88],.08,Pi,.6),Je(i,this.revSend,n+.4,Ne(96),.8,.4);break;case"unlock":c([74,78,81,86],.09,Pi,.5);break;case"shrine":c([62,69,74,78,81,86,90],.11,Pi,.6),fn(i,r,n+.3,Ne(74),2.2,.5),fn(i,r,n+.3,Ne(78),2.2,.4);break;case"levelup":c([72,76,79,84],.09,Pi,.6),lo(i,r,n+.36,Ne(72),.6,.5),lo(i,r,n+.36,Ne(79),.6,.4);break;case"quest":c([79,84,91],.12,Je,.45);break;case"join":c([67,71,74,79,83],.1,Pi,.55);break;case"warp":o(300,3e3,.7,.4,2),c([84,91,96],.1,Je,.3);break;case"ring":c([86,93],.05,Je,.45);break;case"ui":Je(i,r,n,1400,.1,.18);break;case"talk":Je(i,r,n,1100,.05,.08);break;case"buy":c([84,88,91],.05,Je,.35);break;case"eat":c([76,81],.08,Pi,.4);break}}step(t){let e=this.ctx,i=e.currentTime,n=t.mover.p,r=Math.hypot(n.x-330,n.z-330)<100,a=e.createBufferSource();a.buffer=ki(e);let o=e.createBiquadFilter();o.type="bandpass",o.frequency.value=r?1800:2600+Math.random()*1200,o.Q.value=r?2:.8;let l=e.createGain();l.gain.setValueAtTime(1e-4,i),l.gain.linearRampToValueAtTime(r?.14:.08,i+.01),l.gain.exponentialRampToValueAtTime(1e-4,i+(r?.06:.12)),a.connect(o),o.connect(l),l.connect(this.sfxBus),a.start(i,Math.random()),a.stop(i+.15)}bird(){let t=this.ctx,e=t.currentTime+.05,i=2+Math.floor(Math.random()*4),n=2600+Math.random()*1600,r=t.createStereoPanner();r.pan.value=Math.random()*2-1,r.connect(this.ambBus);for(let a=0;a<i;a++){let o=t.createOscillator();o.type="sine";let l=e+a*.13;o.frequency.setValueAtTime(n,l),o.frequency.exponentialRampToValueAtTime(n*(1.3+Math.random()*.3),l+.06),o.frequency.exponentialRampToValueAtTime(n*.9,l+.1);let c=t.createGain();c.gain.setValueAtTime(1e-4,l),c.gain.linearRampToValueAtTime(.05,l+.02),c.gain.exponentialRampToValueAtTime(1e-4,l+.11),o.connect(c),c.connect(r),o.start(l),o.stop(l+.12)}}cricket(){let t=this.ctx,e=t.currentTime+.05,i=t.createStereoPanner();i.pan.value=Math.random()*2-1,i.connect(this.ambBus);for(let n=0;n<12;n++){let r=t.createOscillator();r.type="sine",r.frequency.value=4400;let a=e+n*.045+Math.floor(n/4)*.12,o=t.createGain();o.gain.setValueAtTime(1e-4,a),o.gain.linearRampToValueAtTime(.025,a+.008),o.gain.exponentialRampToValueAtTime(1e-4,a+.03),r.connect(o),o.connect(i),r.start(a),r.stop(a+.04)}}startAmbience(){let t=this.ctx,e=t.createBufferSource();e.buffer=ki(t),e.loop=!0;let i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=500,i.Q.value=.6;let n=t.createOscillator();n.frequency.value=.08;let r=t.createGain();r.gain.value=250,n.connect(r),r.connect(i.frequency);let a=t.createGain();a.gain.value=.08;let o=t.createOscillator();o.frequency.value=.13;let l=t.createGain();l.gain.value=.05,o.connect(l),l.connect(a.gain),e.connect(i),i.connect(a),a.connect(this.ambBus),e.start(),n.start(),o.start();let c=t.createBufferSource();c.buffer=ki(t),c.loop=!0;let h=t.createBiquadFilter();h.type="bandpass",h.frequency.value=1200,h.Q.value=.4,this.glideG=t.createGain(),this.glideG.gain.value=0,c.connect(h),h.connect(this.glideG),this.glideG.connect(this.sfxBus),c.start();let d=t.createBufferSource();d.buffer=ki(t),d.loop=!0;let u=t.createBiquadFilter();u.type="highpass",u.frequency.value=1500;let f=t.createBiquadFilter();f.type="lowpass",f.frequency.value=7e3,this.rainG=t.createGain(),this.rainG.gain.value=0,d.connect(u),u.connect(f),f.connect(this.rainG),this.rainG.connect(this.ambBus),d.start(0,.7)}thunderClap(t=.5){let e=this.ctx;if(!e)return;let i=e.currentTime+.3+t*2.2,n=e.createBufferSource();n.buffer=ki(e);let r=e.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(1800-t*1200,i),r.frequency.exponentialRampToValueAtTime(90,i+3.2);let a=e.createGain();a.gain.setValueAtTime(1e-4,i),a.gain.linearRampToValueAtTime(.9-t*.4,i+.06),a.gain.setValueAtTime(.5-t*.2,i+.5),a.gain.linearRampToValueAtTime(.65-t*.3,i+.9),a.gain.exponentialRampToValueAtTime(1e-4,i+3.6),n.connect(r),r.connect(a),a.connect(this.ambBus),n.start(i,Math.random()),n.stop(i+3.7)}};var O0="./";function ph(s){let t=document.getElementById("ui"),e=document.getElementById("errbox");e||(e=document.createElement("div"),e.id="errbox",t.appendChild(e)),e.innerHTML=`<b>\u554F\u984C\u304C\u8D77\u304D\u307E\u3057\u305F</b><br>${String(s).replace(/[<>&]/g,"")}<br><small>\u30DA\u30FC\u30B8\u3092\u518D\u8AAD\u307F\u8FBC\u307F\u3059\u308B\u304B\u3001\u30E1\u30CB\u30E5\u30FC\u306E\u8A2D\u5B9A\u3067\u753B\u8CEA\u3092\u300C\u4F4E\u300D\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002\u3053\u306E\u6587\u9762\u3092\u6559\u3048\u3066\u3044\u305F\u3060\u3051\u308C\u3070\u76F4\u3057\u307E\u3059\u3002</small><br><button onclick="location.reload()">\u518D\u8AAD\u307F\u8FBC\u307F</button>`}addEventListener("error",s=>ph((s.message||s.error)+" @"+(s.filename||"").split("/").pop()+":"+(s.lineno||"")));addEventListener("unhandledrejection",s=>ph(s.reason&&(s.reason.message||s.reason)));var H0=document.createElement("style");H0.textContent=zp+Np;document.head.appendChild(H0);var yd="lumiera.settings";function h_(){let s={};try{s=JSON.parse(localStorage.getItem(yd)||"{}")}catch{}let t=matchMedia("(pointer: coarse)").matches||navigator.maxTouchPoints>1,e=!1;try{let i=document.createElement("canvas").getContext("webgl2"),n=i&&i.getExtension("WEBGL_debug_renderer_info"),r=n?i.getParameter(n.UNMASKED_RENDERER_WEBGL):"";e=/Intel|UHD|Iris|Radeon\(TM\) Graphics|Vega \d+ Graphics|Microsoft Basic|SwiftShader|llvmpipe|Mali|Adreno|PowerVR/i.test(r),window.__lmGpu=r}catch{}return{quality:t||e?"mid":"high",music:.7,sfx:.8,amb:.6,sens:1,autoCam:t,diff:"normal",...s}}async function u_(){let s=document.getElementById("ui");if(!document.createElement("canvas").getContext("webgl2")){s.innerHTML='<div class="loading"><div class="lt">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="lmsg">\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u30FC\u306F WebGL2 \u306B\u5BFE\u5FDC\u3057\u3066\u3044\u306A\u3044\u305F\u3081\u904A\u3079\u307E\u305B\u3093\u3002Chrome\u30FBEdge\u30FBSafari \u306E\u6700\u65B0\u7248\u3067\u304A\u8A66\u3057\u304F\u3060\u3055\u3044\u3002</div></div>';return}s.innerHTML='<div class="loading"><div class="lt">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="lbar"><i></i></div><div class="lmsg">\u4E16\u754C\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026</div></div>';let e=s.querySelector(".lbar i"),i=new URLSearchParams(location.search),n=h_(),r=i.get("q")||n.quality,a=new Dc(document.getElementById("app"),r),o=s.querySelector(".lmsg");o.textContent="\u5927\u5730\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026\uFF081/3\uFF09";let l=await kp(O0);e.style.width="20%",o.textContent="\u666F\u8272\u306E\u7D20\u6750\u3092\u8AAD\u307F\u8FBC\u3093\u3067\u3044\u307E\u3059\u2026\uFF082/3\uFF09";let c=await Fp(O0,a.renderer,j=>{e.style.width=20+j*60+"%"});o.textContent="\u4E16\u754C\u3092\u7D44\u307F\u7ACB\u3066\u3066\u3044\u307E\u3059\u2026\uFF083/3\uFF09",await new Promise(j=>setTimeout(j,30));let h=Up(l),d=new Ic(a.scene),u=new zc(a.scene,l,c),f=new Nc(a.scene,h,l);r==="high"&&(f.enableReflection(a.renderer,Math.round(innerWidth*.4),Math.round(innerHeight*.4)),addEventListener("resize",()=>f.resizeReflection(Math.round(innerWidth*.4),Math.round(innerHeight*.4))));let p=new kc(a.scene,h,c.splat,l,r,c.flowers),x=new Fc(a.scene,l,c,r),m=new Lc(a.scene,r);e.style.width="90%",await new Promise(j=>setTimeout(j,30)),window.__lm={R:a,world:l,get fps(){return window.__lmFps}};let g=i.get("view"),v=!!i.get("cam"),b=g==="chars"?i0(a,c,l,i):null,y=new Hc(a.canvas,s);y.sens=n.sens;let M=new fh(n);window.__lm.audio=M,window.__lm.renderSong=B0,window.__lm.LITE=Ds,window.__lm.SONGS=dh;let S=null,A={x:60,z:470,y:0,yaw:Math.PI,pitch:-.12,hour:10};if(v){let[j,$,dt,St,ie]=i.get("cam").split(",").map(Number);Object.assign(A,{x:j,y:$,z:dt,yaw:St,pitch:ie})}i.get("t")&&(A.hour=Number(i.get("t"))),window.__lm.st=A;let _=j=>{S=new dn({R:a,world:l,tex:c,input:y,sky:d,terrain:u,water:f,grass:p,foliage:x,audio:M}),S.settings=n,S.applySettings=()=>{y.sens=n.sens,S.camRig.autoFollow=n.autoCam,M.apply();try{localStorage.setItem(yd,JSON.stringify(n))}catch{}},i.get("nosave")&&(S.noSave=!0),S.start(j),S.applySettings(),i.get("t")&&(S.hour=Number(i.get("t"))),window.__lm.game=S,window.__lm.input=y};if(s.innerHTML="",!(b||v))if(i.get("autostart"))_(i.get("autostart")==="continue"?dn.loadSave():null);else{let j=dn.loadSave(),$=document.createElement("div");$.className="title",$.innerHTML=`<div class="tl">\u84BC\u5929\u306E\u30EA\u30E5\u30DF\u30A8\u30E9</div><div class="ts">\u2015\u4E03\u5F69\u306E\u98A8\u3068\u9727\u306E\u5DE8\u50CF\u2015</div>
      <div class="tbtns2">${j?'<button data-a="continue">\u3064\u3065\u304D\u304B\u3089</button>':""}<button data-a="new">\u306F\u3058\u3081\u304B\u3089</button>${[1,2,3].some(dt=>dn.slotData(dt))?'<button data-a="load">\u30ED\u30FC\u30C9</button>':""}</div>
      <div class="tnote">${y.touch?"\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF\u3067\u79FB\u52D5\u30FB\u53F3\u5074\u3092\u306A\u305E\u3063\u3066\u8996\u70B9\u30FB\u53F3\u4E0B\u306E\u30DC\u30BF\u30F3\u3067\u653B\u6483/\u30B8\u30E3\u30F3\u30D7/\u30C0\u30C3\u30B7\u30E5":"WASD \u79FB\u52D5 \uFF0F \u30DE\u30A6\u30B9 \u8996\u70B9 \uFF0F \u5DE6\u30AF\u30EA\u30C3\u30AF \u653B\u6483\uFF08\u9577\u62BC\u3057\u3067\u6E9C\u3081\uFF09 \uFF0F Shift\u30FB\u53F3\u30AF\u30EA\u30C3\u30AF \u30C0\u30C3\u30B7\u30E5 \uFF0F Space \u30B8\u30E3\u30F3\u30D7\u30FB\u6ED1\u7A7A \uFF0F E \u30B9\u30AD\u30EB \uFF0F Q \u7206\u767A \uFF0F 1\u301C4 \u4EA4\u4EE3 \uFF0F F \u8ABF\u3079\u308B \uFF0F M \u5730\u56F3 \uFF0F P \u5199\u771F"}<br>\u753B\u8CEA\uFF1A${{high:"\u9AD8",mid:"\u4E2D",low:"\u4F4E"}[r]}\uFF08\u30E1\u30CB\u30E5\u30FC\u306E\u8A2D\u5B9A\u3067\u5909\u66F4\u3067\u304D\u307E\u3059\uFF09</div>`,s.appendChild($),$.querySelectorAll("button").forEach(dt=>dt.addEventListener("click",St=>{if(St.stopPropagation(),M.unlock(),dt.dataset.a==="load"){let Bt=$.querySelector(".tbtns2");Bt.innerHTML='<div class="loadlist">'+[1,2,3].map(W=>{let Q=dn.slotData(W);return Q&&Q.meta?`<button data-n="${W}">\u30B9\u30ED\u30C3\u30C8${W}\uFF1A${new Date(Q.meta.at).toLocaleString("ja-JP")}\u3000${Q.meta.place}\u3000Lv.${Q.meta.lv}</button>`:""}).join("")+"</div>",Bt.querySelectorAll("button").forEach(W=>W.addEventListener("click",Q=>{Q.stopPropagation(),Bt.innerHTML='<div class="prep">\u30ED\u30FC\u30C9\u3057\u3066\u3044\u307E\u3059\u2026</div>',dn.loadSlotAndRestart(+W.dataset.n)}));return}if(dt.dataset.a==="new"&&j&&!confirm("\u4FDD\u5B58\u30C7\u30FC\u30BF\u3092\u6D88\u3057\u3066\u3001\u306F\u3058\u3081\u304B\u3089\u904A\u3073\u307E\u3059\u304B\uFF1F"))return;let ie=()=>{dt.dataset.a==="new"&&dn.clearSave(),$.querySelector(".tbtns2").innerHTML='<div class="prep">\u5192\u967A\u306E\u6E96\u5099\u3092\u3057\u3066\u3044\u307E\u3059\u2026</div>',setTimeout(()=>{try{_(dt.dataset.a==="continue"?j:null)}catch(Bt){ph(Bt.message||Bt);return}$.classList.add("out"),setTimeout(()=>$.remove(),800)},60)};if(dt.dataset.a!=="new")return ie();let Zt=$.querySelector(".tbtns2");Zt.innerHTML='<div class="diffpick"><div class="dq">\u96E3\u3057\u3055\u3092\u9078\u3093\u3067\u304F\u3060\u3055\u3044\uFF08\u3042\u3068\u304B\u3089\u8A2D\u5B9A\u3067\u5909\u3048\u3089\u308C\u307E\u3059\uFF09</div>'+[["easy","\u3084\u3055\u3057\u3044","\u53D7\u3051\u308B\u30C0\u30E1\u30FC\u30B8\u534A\u5206\u30FB\u6575\u306EHP 3/4"],["normal","\u3075\u3064\u3046","\u3044\u3064\u3082\u306E\u624B\u5FDC\u3048"],["hard","\u3080\u305A\u304B\u3057\u3044","\u53D7\u3051\u308B\u30C0\u30E1\u30FC\u30B81.4\u500D\u30FB\u6575\u306EHP 1.3\u500D"]].map(([Bt,W,Q])=>`<button data-d="${Bt}"><b>${W}</b><span>${Q}</span></button>`).join("")+"</div>",Zt.querySelectorAll("[data-d]").forEach(Bt=>Bt.addEventListener("click",W=>{W.stopPropagation(),n.diff=Bt.dataset.d;try{localStorage.setItem(yd,JSON.stringify(n))}catch{}ie()}))})),addEventListener("pointerdown",()=>{M.unlock(),S||M.music("title")},{once:!0})}addEventListener("pointerdown",()=>M.unlock()),addEventListener("keydown",()=>M.unlock());let T={level:0,t:0,frames:0,reflOff:!1,grace:10,lows:0},P=a.renderer.getPixelRatio();window.__lm.auto=T,window.__lm.water=f,window.__lm.grass=p;function I(j){if(!S||S.paused||S.screens.open||S.photo?.on||window.__noAuto)return;if(T.grace>0){T.grace-=j;return}if(T.t+=j,T.frames++,T.t<3)return;let $=T.frames/T.t;if(T.t=0,T.frames=0,$>=28||T.level>=4){T.lows=0;return}++T.lows<2||(T.lows=0,T.level++,T.level===1&&(T.reflOff=!0,f.uniforms.uReflOn.value=0,a.rays.uniforms.uI.value=0,a.raysOff=!0),T.level===2&&(a.renderer.setPixelRatio(Math.max(.6,P*.75)),a.resize()),T.level===3&&(a.bloom.enabled=!1,p.mesh.geometry.instanceCount=Math.floor(p.count*.5)),T.level===4&&(a.renderer.setPixelRatio(.55),a.resize()),S.notify(`\u52D5\u304D\u304C\u91CD\u3044\u305F\u3081\u753B\u8CEA\u3092\u81EA\u52D5\u3067\u4E0B\u3052\u307E\u3057\u305F\uFF08\u6BB5\u968E${T.level}\uFF09`,"phys"),window.__lm.autoLevel=T.level)}let z=new R,F=performance.now(),L=0,B=0,Y=0,X=.4,st=new Set;v&&(addEventListener("keydown",j=>st.add(j.code)),addEventListener("keyup",j=>st.delete(j.code)));function Z(j){let $=Math.min(.066,(j-F)/1e3);F=j,L+=$,B++,Y+=$,Y>1&&(window.__lmFps=B/Y,B=0,Y=0);let dt=a.camera,St=A.hour;if(S)S.update($),z.copy(S.focus),St=S.hour;else if(b)z.copy(b($));else if(v){let Bt=st.has("ShiftLeft")?60:12,W=-Math.sin(A.yaw),Q=-Math.cos(A.yaw);st.has("KeyW")&&(A.x+=W*Bt*$,A.z+=Q*Bt*$),st.has("KeyS")&&(A.x-=W*Bt*$,A.z-=Q*Bt*$),A.y=Math.max(A.y||0,l.heightAt(A.x,A.z)+.5),dt.position.set(A.x,A.y,A.z),dt.rotation.set(A.pitch,A.yaw,0,"YXZ"),z.set(A.x,l.heightAt(A.x,A.z),A.z)}else{X+=$*.02;let Bt=60,W=440;dt.position.set(Bt+Math.sin(X)*8,l.heightAt(Bt,W)+3.2,W+Math.cos(X)*8),dt.lookAt(Bt-Math.sin(X)*60,l.heightAt(Bt,W)+8,W-Math.cos(X)*60),z.set(dt.position.x,l.heightAt(dt.position.x,dt.position.z),dt.position.z),St=9.5}let ie=S?S.weatherState():null,Zt=a.setTime(St,z,ie);Xu.uLightDir.value.copy(Zt.lightDir),d.update(Zt,dt,L,ie),m.update($,dt,L,S?.weather,Zt),f.update(Zt,L),u.update(dt.position),p.update(L,z,S?S.focus:null),x.update(L),T.reflOff||f.renderReflection(a.renderer,a.scene,dt,[p.mesh,S?.fx?.points,m.rain].filter(Boolean),[]),I($),a.grade.uniforms.uFlash.value=ie?ie.flash*.22:0,a.render(),S&&S.photo&&S.photo.want&&S.photo.capture(a.renderer.domElement),requestAnimationFrame(Z)}requestAnimationFrame(Z)}u_().catch(s=>{console.error(s),ph("\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F\uFF1A"+String(s.message||s))});})();
