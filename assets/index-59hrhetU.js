(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ml="169",xp=0,vh=1,yp=2,vd=1,Sp=2,$n=3,oi=0,zt=1,nn=2,wi=0,Qi=1,dc=2,xh=3,yh=4,Mp=5,Yi=100,Ep=101,Tp=102,Ap=103,wp=104,Rp=200,Cp=201,Pp=202,Lp=203,fc=204,pc=205,Ip=206,Dp=207,Up=208,Np=209,Fp=210,Op=211,Bp=212,kp=213,zp=214,mc=0,gc=1,_c=2,Ns=3,bc=4,vc=5,xc=6,yc=7,xd=0,Gp=1,Hp=2,Ri=0,Vp=1,Wp=2,Xp=3,yd=4,jp=5,qp=6,Yp=7,Sh="attached",Kp="detached",Sd=300,Fs=301,Os=302,Sc=303,Mc=304,ro=306,Bs=1e3,yi=1001,ka=1002,xt=1003,Md=1004,_r=1005,sn=1006,wa=1007,ii=1008,In=1009,Ed=1010,Td=1011,Cr=1012,El=1013,ns=1014,Rn=1015,Wr=1016,Tl=1017,Al=1018,ks=1020,Ad=35902,wd=1021,Rd=1022,gn=1023,Cd=1024,Pd=1025,Cs=1026,zs=1027,Pr=1028,wl=1029,Ld=1030,Rl=1031,Cl=1033,Ra=33776,Ca=33777,Pa=33778,La=33779,Ec=35840,Tc=35841,Ac=35842,wc=35843,Rc=36196,Cc=37492,Pc=37496,Lc=37808,Ic=37809,Dc=37810,Uc=37811,Nc=37812,Fc=37813,Oc=37814,Bc=37815,kc=37816,zc=37817,Gc=37818,Hc=37819,Vc=37820,Wc=37821,Ia=36492,Xc=36494,jc=36495,Id=36283,qc=36284,Yc=36285,Kc=36286,Jp=2200,Qp=2201,Zp=2202,Lr=2300,Ir=2301,xo=2302,Es=2400,Ts=2401,za=2402,Pl=2500,$p=2501,em=0,Dd=1,Jc=2,tm=3200,nm=3201,Ud=0,im=1,xi="",Lt="srgb",yt="srgb-linear",Ll="display-p3",ao="display-p3-linear",Ga="linear",ot="srgb",Ha="rec709",Va="p3",os=7680,Mh=519,sm=512,rm=513,am=514,Nd=515,om=516,cm=517,lm=518,hm=519,Qc=35044,Zc="300 es",si=2e3,Wa=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eh=1234567;const yr=Math.PI/180,Gs=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function It(r,e,t){return Math.max(e,Math.min(t,r))}function Il(r,e){return(r%e+e)%e}function um(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function dm(r,e,t){return r!==e?(t-r)/(e-r):0}function Sr(r,e,t){return(1-t)*r+t*e}function fm(r,e,t,n){return Sr(r,e,1-Math.exp(-t*n))}function pm(r,e=1){return e-Math.abs(Il(r,e*2)-e)}function mm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function gm(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function _m(r,e){return r+Math.floor(Math.random()*(e-r+1))}function bm(r,e){return r+Math.random()*(e-r)}function vm(r){return r*(.5-Math.random())}function xm(r){r!==void 0&&(Eh=r);let e=Eh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ym(r){return r*yr}function Sm(r){return r*Gs}function Mm(r){return(r&r-1)===0&&r!==0}function Em(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Tm(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Am(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function An(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Fd={DEG2RAD:yr,RAD2DEG:Gs,generateUUID:Pn,clamp:It,euclideanModulo:Il,mapLinear:um,inverseLerp:dm,lerp:Sr,damp:fm,pingpong:pm,smoothstep:mm,smootherstep:gm,randInt:_m,randFloat:bm,randFloatSpread:vm,seededRandom:xm,degToRad:ym,radToDeg:Sm,isPowerOfTwo:Mm,ceilPowerOfTwo:Em,floorPowerOfTwo:Tm,setQuaternionFromProperEuler:Am,normalize:Ze,denormalize:An};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ie{constructor(e,t,n,i,s,a,o,c,l){Ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],x=i[1],v=i[4],b=i[7],A=i[2],w=i[5],M=i[8];return s[0]=a*_+o*x+c*A,s[3]=a*p+o*v+c*w,s[6]=a*m+o*b+c*M,s[1]=l*_+h*x+u*A,s[4]=l*p+h*v+u*w,s[7]=l*m+h*b+u*M,s[2]=d*_+f*x+g*A,s[5]=d*p+f*v+g*w,s[8]=d*m+f*b+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*l-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(h*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yo.makeScale(e,t)),this}rotate(e){return this.premultiply(yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yo=new Ie;function Od(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Dr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wm(){const r=Dr("canvas");return r.style.display="block",r}const Th={};function Da(r){r in Th||(Th[r]=!0,console.warn(r))}function Rm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Cm(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Pm(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ah=new Ie().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wh=new Ie().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rr={[yt]:{transfer:Ga,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[Lt]:{transfer:ot,primaries:Ha,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ao]:{transfer:Ga,primaries:Va,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(wh),fromReference:r=>r.applyMatrix3(Ah)},[Ll]:{transfer:ot,primaries:Va,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(wh),fromReference:r=>r.applyMatrix3(Ah).convertLinearToSRGB()}},Lm=new Set([yt,ao]),Xe={enabled:!0,_workingColorSpace:yt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Lm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=rr[e].toReference,i=rr[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return rr[r].primaries},getTransfer:function(r){return r===xi?Ga:rr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(rr[e].luminanceCoefficients)}};function Ps(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function So(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let cs;class Im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{cs===void 0&&(cs=Dr("canvas")),cs.width=e.width,cs.height=e.height;const n=cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ps(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ps(t[n]/255)*255):t[n]=Ps(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dm=0;class Bd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dm++}),this.uuid=Pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Mo(i[a].image)):s.push(Mo(i[a]))}else s=Mo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Mo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Im.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;class Tt extends ss{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=yi,i=yi,s=sn,a=ii,o=gn,c=In,l=Tt.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=Pn(),this.name="",this.source=new Bd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Sd;Tt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,n=0,i=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,b=(f+1)/2,A=(m+1)/2,w=(h+d)/4,M=(u+_)/4,C=(g+p)/4;return v>b&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=M/n):b>A?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=M/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nm extends ss{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Tt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends Nm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class kd extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fm extends Tt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xt,this.minFilter=xt,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let p=1-o;const m=c*d+l*f+h*g+u*_,x=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,m*x);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const b=o*x;if(c=c*p+d*b,l=l*p+f*b,h=h*p+g*b,u=u*p+_*b,p===1-o){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Eo.copy(this).projectOnVector(e),this.sub(Eo)}reflect(e){return this.sub(Eo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(It(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new L,Rh=new Ln;class xn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(s,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Zr.subVectors(this.max,ar),ls.subVectors(e.a,ar),hs.subVectors(e.b,ar),us.subVectors(e.c,ar),ui.subVectors(hs,ls),di.subVectors(us,hs),Fi.subVectors(ls,us);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Fi.z,Fi.y,ui.z,0,-ui.x,di.z,0,-di.x,Fi.z,0,-Fi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Fi.y,Fi.x,0];return!To(t,ls,hs,us,Zr)||(t=[1,0,0,0,1,0,0,0,1],!To(t,ls,hs,us,Zr))?!1:($r.crossVectors(ui,di),t=[$r.x,$r.y,$r.z],To(t,ls,hs,us,Zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new L,new L,new L,new L,new L,new L,new L,new L],Mn=new L,Qr=new xn,ls=new L,hs=new L,us=new L,ui=new L,di=new L,Fi=new L,ar=new L,Zr=new L,$r=new L,Oi=new L;function To(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Oi.fromArray(r,s);const o=i.x*Math.abs(Oi.x)+i.y*Math.abs(Oi.y)+i.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),h=n.dot(Oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Om=new xn,or=new L,Ao=new L;class Vn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Om.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ao.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ao)),this.expandByPoint(or.copy(e.center).sub(Ao))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new L,wo=new L,ea=new L,fi=new L,Ro=new L,ta=new L,Co=new L;class Xr{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){wo.copy(e).add(t).multiplyScalar(.5),ea.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(wo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ea),o=fi.dot(this.direction),c=-fi.dot(ea),l=fi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=s*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(wo).addScaledVector(ea,d),f}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,s){Ro.subVectors(t,e),ta.subVectors(n,e),Co.crossVectors(Ro,ta);let a=this.direction.dot(Co),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(ta.crossVectors(fi,ta));if(c<0)return null;const l=o*this.direction.dot(Ro.cross(fi));if(l<0||c+l>a)return null;const h=-o*fi.dot(Co);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,p){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,p)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=o*h,_=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*u,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bm,e,km)}lookAt(e,t,n){const i=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),pi.crossVectors(n,$t),pi.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),pi.crossVectors(n,$t)),pi.normalize(),na.crossVectors($t,pi),i[0]=pi.x,i[4]=na.x,i[8]=$t.x,i[1]=pi.y,i[5]=na.y,i[9]=$t.y,i[2]=pi.z,i[6]=na.z,i[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],x=n[3],v=n[7],b=n[11],A=n[15],w=i[0],M=i[4],C=i[8],D=i[12],y=i[1],E=i[5],B=i[9],F=i[13],V=i[2],j=i[6],O=i[10],W=i[14],H=i[3],ie=i[7],se=i[11],le=i[15];return s[0]=a*w+o*y+c*V+l*H,s[4]=a*M+o*E+c*j+l*ie,s[8]=a*C+o*B+c*O+l*se,s[12]=a*D+o*F+c*W+l*le,s[1]=h*w+u*y+d*V+f*H,s[5]=h*M+u*E+d*j+f*ie,s[9]=h*C+u*B+d*O+f*se,s[13]=h*D+u*F+d*W+f*le,s[2]=g*w+_*y+p*V+m*H,s[6]=g*M+_*E+p*j+m*ie,s[10]=g*C+_*B+p*O+m*se,s[14]=g*D+_*F+p*W+m*le,s[3]=x*w+v*y+b*V+A*H,s[7]=x*M+v*E+b*j+A*ie,s[11]=x*C+v*B+b*O+A*se,s[15]=x*D+v*F+b*W+A*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*h-s*c*h)+p*(+t*l*u-t*o*f-s*a*u+n*a*f+s*o*h-n*l*h)+m*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],x=u*p*l-_*d*l+_*c*f-o*p*f-u*c*m+o*d*m,v=g*d*l-h*p*l-g*c*f+a*p*f+h*c*m-a*d*m,b=h*_*l-g*u*l+g*o*f-a*_*f-h*o*m+a*u*m,A=g*u*c-h*_*c-g*o*d+a*_*d+h*o*p-a*u*p,w=t*x+n*v+i*b+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=x*M,e[1]=(_*d*s-u*p*s-_*i*f+n*p*f+u*i*m-n*d*m)*M,e[2]=(o*p*s-_*c*s+_*i*l-n*p*l-o*i*m+n*c*m)*M,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*f-n*c*f)*M,e[4]=v*M,e[5]=(h*p*s-g*d*s+g*i*f-t*p*f-h*i*m+t*d*m)*M,e[6]=(g*c*s-a*p*s-g*i*l+t*p*l+a*i*m-t*c*m)*M,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*f+t*c*f)*M,e[8]=b*M,e[9]=(g*u*s-h*_*s-g*n*f+t*_*f+h*n*m-t*u*m)*M,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*m+t*o*m)*M,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*f-t*o*f)*M,e[12]=A*M,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*p+t*u*p)*M,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*p-t*o*p)*M,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*M,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,g=s*u,_=a*h,p=a*u,m=o*u,x=c*l,v=c*h,b=c*u,A=n.x,w=n.y,M=n.z;return i[0]=(1-(_+m))*A,i[1]=(f+b)*A,i[2]=(g-v)*A,i[3]=0,i[4]=(f-b)*w,i[5]=(1-(d+m))*w,i[6]=(p+x)*w,i[7]=0,i[8]=(g+v)*M,i[9]=(p-x)*M,i[10]=(1-(d+_))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ds.set(i[0],i[1],i[2]).length();const a=ds.set(i[4],i[5],i[6]).length(),o=ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],En.copy(this);const l=1/s,h=1/a,u=1/o;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=si){const c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===si)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Wa)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=si){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,f=(n+i)*h;let g,_;if(o===si)g=(a+s)*u,_=-2*u;else if(o===Wa)g=s*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new L,En=new Pe,Bm=new L(0,0,0),km=new L(1,1,1),pi=new L,na=new L,$t=new L,Ch=new Pe,Ph=new Ln;class Gn{constructor(e=0,t=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(It(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-It(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-It(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ch.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ch,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class Dl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zm=0;const Lh=new L,fs=new Ln,Kn=new Pe,ia=new L,cr=new L,Gm=new L,Hm=new Ln,Ih=new L(1,0,0),Dh=new L(0,1,0),Uh=new L(0,0,1),Nh={type:"added"},Vm={type:"removed"},ps={type:"childadded",child:null},Po={type:"childremoved",child:null};class dt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new L,t=new Gn,n=new Ln,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ie}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Ih,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ih,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ia.copy(e):ia.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),cr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(cr,ia,this.up):Kn.lookAt(ia,cr,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),fs.setFromRotationMatrix(Kn),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),ps.child=e,this.dispatchEvent(ps),ps.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vm),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,e,Gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cr,Hm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new L(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new L,Jn=new L,Lo=new L,Qn=new L,ms=new L,gs=new L,Fh=new L,Io=new L,Do=new L,Uo=new L,No=new qe,Fo=new qe,Oo=new qe;class wn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Tn.subVectors(e,t),i.cross(Tn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Tn.subVectors(i,t),Jn.subVectors(n,t),Lo.subVectors(e,t);const a=Tn.dot(Tn),o=Tn.dot(Jn),c=Tn.dot(Lo),l=Jn.dot(Jn),h=Jn.dot(Lo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return No.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),No.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,n),Oo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(No,s.x),a.addScaledVector(Fo,s.y),a.addScaledVector(Oo,s.z),a}static isFrontFacing(e,t,n,i){return Tn.subVectors(n,t),Jn.subVectors(e,t),Tn.cross(Jn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),gs.subVectors(s,n),Io.subVectors(e,n);const c=ms.dot(Io),l=gs.dot(Io);if(c<=0&&l<=0)return t.copy(n);Do.subVectors(e,i);const h=ms.dot(Do),u=gs.dot(Do);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ms,a);Uo.subVectors(e,s);const f=ms.dot(Uo),g=gs.dot(Uo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(gs,o);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return Fh.subVectors(s,i),o=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Fh,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Bo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ae{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Il(e,1),t=It(t,0,1),n=It(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bo(a,s,e+1/3),this.g=Bo(a,s,e),this.b=Bo(a,s,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const n=zd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}copyLinearToSRGB(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Xe.fromWorkingColorSpace(Pt.copy(this),e),Math.round(It(Pt.r*255,0,255))*65536+Math.round(It(Pt.g*255,0,255))*256+Math.round(It(Pt.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=Lt){Xe.fromWorkingColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(sa);const n=Sr(mi.h,sa.h,t),i=Sr(mi.s,sa.s,t),s=Sr(mi.l,sa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Ae;Ae.NAMES=zd;let Wm=0;class kn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Qi,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=pc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fc&&(n.blendSrc=this.blendSrc),this.blendDst!==pc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Si extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new L,ra=new Ne;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Qc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qc&&(e.usage=this.usage),e}}class Gd extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hd extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ri extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Xm=0;const fn=new Pe,ko=new dt,_s=new L,en=new xn,lr=new xn,Et=new L;class Wn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Od(e)?Hd:Gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_s).negate(),this.translate(_s.x,_s.y,_s.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ri(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(en.min,lr.min),en.expandByPoint(Et),Et.addVectors(en.max,lr.max),en.expandByPoint(Et)):(en.expandByPoint(lr.min),en.expandByPoint(lr.max))}en.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(_s.fromBufferAttribute(e,l),Et.add(_s)),i=Math.max(i,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,h=new L,u=new L,d=new Ne,f=new Ne,g=new Ne,_=new L,p=new L;function m(C,D,y){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,D),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,D),g.fromBufferAttribute(s,y),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const E=1/(f.x*g.y-g.x*f.y);isFinite(E)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(E),p.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(E),o[C].add(_),o[D].add(_),o[y].add(_),c[C].add(p),c[D].add(p),c[y].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,D=x.length;C<D;++C){const y=x[C],E=y.start,B=y.count;for(let F=E,V=E+B;F<V;F+=3)m(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const v=new L,b=new L,A=new L,w=new L;function M(C){A.fromBufferAttribute(i,C),w.copy(A);const D=o[C];v.copy(D),v.sub(A.multiplyScalar(A.dot(D))).normalize(),b.crossVectors(w,D);const E=b.dot(c[C])<0?-1:1;a.setXYZW(C,v.x,v.y,v.z,E)}for(let C=0,D=x.length;C<D;++C){const y=x[C],E=y.start,B=y.count;for(let F=E,V=E+B;F<V;F+=3)M(e.getX(F+0)),M(e.getX(F+1)),M(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*h;for(let m=0;m<h;m++)d[g++]=l[f++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Pe,Bi=new Xr,aa=new Vn,Bh=new L,oa=new L,ca=new L,la=new L,zo=new L,ha=new L,kh=new L,ua=new L;class $e extends dt{constructor(e=new Wn,t=new Si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ha.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],u=s[c];h!==0&&(zo.fromBufferAttribute(u,e),a?ha.addScaledVector(zo,h):ha.addScaledVector(zo.sub(t),h))}t.add(ha)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),Bi.copy(e.ray).recast(e.near),!(aa.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(aa,Bh)===null||Bi.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Oh.copy(s).invert(),Bi.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,A=v;b<A;b+=3){const w=o.getX(b),M=o.getX(b+1),C=o.getX(b+2);i=da(this,m,e,n,l,h,u,w,M,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=o.getX(p),v=o.getX(p+1),b=o.getX(p+2);i=da(this,a,e,n,l,h,u,x,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let b=x,A=v;b<A;b+=3){const w=b,M=b+1,C=b+2;i=da(this,m,e,n,l,h,u,w,M,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const x=p,v=p+1,b=p+2;i=da(this,a,e,n,l,h,u,x,v,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function jm(r,e,t,n,i,s,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===oi,o),c===null)return null;ua.copy(o),ua.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ua);return l<t.near||l>t.far?null:{distance:l,point:ua.clone(),object:r}}function da(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,oa),r.getVertexPosition(c,ca),r.getVertexPosition(l,la);const h=jm(r,e,t,n,oa,ca,la,kh);if(h){const u=new L;wn.getBarycoord(kh,oa,ca,la,u),i&&(h.uv=wn.getInterpolatedAttribute(i,o,c,l,u,new Ne)),s&&(h.uv1=wn.getInterpolatedAttribute(s,o,c,l,u,new Ne)),a&&(h.normal=wn.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};wn.getNormal(oa,ca,la,d.normal),h.face=d,h.barycoord=u}return h}class $s extends Wn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ri(l,3)),this.setAttribute("normal",new ri(h,3)),this.setAttribute("uv",new ri(u,2));function g(_,p,m,x,v,b,A,w,M,C,D){const y=b/M,E=A/C,B=b/2,F=A/2,V=w/2,j=M+1,O=C+1;let W=0,H=0;const ie=new L;for(let se=0;se<O;se++){const le=se*E-F;for(let De=0;De<j;De++){const He=De*y-B;ie[_]=He*x,ie[p]=le*v,ie[m]=V,l.push(ie.x,ie.y,ie.z),ie[_]=0,ie[p]=0,ie[m]=w>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(De/M),u.push(1-se/C),W+=1}}for(let se=0;se<C;se++)for(let le=0;le<M;le++){const De=d+le+j*se,He=d+le+j*(se+1),q=d+(le+1)+j*(se+1),Q=d+(le+1)+j*se;c.push(De,He,Q),c.push(He,q,Q),H+=6}o.addGroup(f,H,D),f+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(r){const e={};for(let t=0;t<r.length;t++){const n=Hs(r[t]);for(const i in n)e[i]=n[i]}return e}function qm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vd(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ym={clone:Hs,merge:Ot};var Km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Km,this.fragmentShader=Jm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new L,zh=new Ne,Gh=new Ne;class kt extends Wd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,zh,Gh),t.subVectors(Gh,zh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,vs=1;class Qm extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kt(bs,vs,e,t);i.layers=this.layers,this.add(i);const s=new kt(bs,vs,e,t);s.layers=this.layers,this.add(s);const a=new kt(bs,vs,e,t);a.layers=this.layers,this.add(a);const o=new kt(bs,vs,e,t);o.layers=this.layers,this.add(o);const c=new kt(bs,vs,e,t);c.layers=this.layers,this.add(c);const l=new kt(bs,vs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xd extends Tt{constructor(e,t,n,i,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Fs,super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zm extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $s(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:wi});s.uniforms.tEquirect.value=t;const a=new $e(i,s),o=t.minFilter;return t.minFilter===ii&&(t.minFilter=sn),new Qm(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Go=new L,$m=new L,eg=new Ie;class Xi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Go.subVectors(n,t).cross($m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Go),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||eg.getNormalMatrix(e),i=this.coplanarPoint(Go).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Vn,fa=new L;class Ul{constructor(e=new Xi,t=new Xi,n=new Xi,i=new Xi,s=new Xi,a=new Xi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],x=i[13],v=i[14],b=i[15];if(n[0].setComponents(c-s,d-l,p-f,b-m).normalize(),n[1].setComponents(c+s,d+l,p+f,b+m).normalize(),n[2].setComponents(c+a,d+h,p+g,b+x).normalize(),n[3].setComponents(c-a,d-h,p-g,b-x).normalize(),n[4].setComponents(c-o,d-u,p-_,b-v).normalize(),t===si)n[5].setComponents(c+o,d+u,p+_,b+v).normalize();else if(t===Wa)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function tg(r){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];r.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}class jr extends Wn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const x=m*d-a;for(let v=0;v<l;v++){const b=v*u-s;g.push(b,-x,0),_.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const v=x+l*m,b=x+l*(m+1),A=x+1+l*(m+1),w=x+1+l*m;f.push(v,b,w),f.push(b,A,w)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
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
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cg=`#ifdef USE_AOMAP
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
#endif`,lg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,gg=`#ifdef USE_BUMPMAP
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
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Sg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Tg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Ag=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fg=`#ifdef USE_ENVMAP
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
#endif`,Og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vg=`#ifdef USE_GRADIENTMAP
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
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Yg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,e_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t_=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,s_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u_=`#if defined( USE_POINTS_UV )
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
#endif`,d_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
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
#endif`,b_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,x_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
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
#endif`,T_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,L_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,k_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,G_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H_=`#ifdef USE_SKINNING
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
#endif`,V_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W_=`#ifdef USE_SKINNING
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
#endif`,X_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J_=`#ifdef USE_TRANSMISSION
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
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n0=`uniform sampler2D t2D;
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
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`#include <common>
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
}`,c0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,l0=`#define DISTANCE
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
}`,h0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f0=`uniform float scale;
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
}`,p0=`uniform vec3 diffuse;
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
}`,m0=`#include <common>
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
}`,g0=`uniform vec3 diffuse;
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
}`,_0=`#define LAMBERT
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
}`,b0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,v0=`#define MATCAP
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
}`,x0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,S0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,M0=`#define PHONG
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
}`,E0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,T0=`#define STANDARD
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
}`,A0=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,w0=`#define TOON
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
}`,R0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,C0=`uniform float size;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,D0=`uniform float rotation;
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
}`,U0=`uniform vec3 diffuse;
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
}`,Le={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:sg,alphamap_pars_fragment:rg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:cg,aomap_pars_fragment:lg,batching_pars_vertex:hg,batching_vertex:ug,begin_vertex:dg,beginnormal_vertex:fg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:_g,clipping_planes_pars_fragment:bg,clipping_planes_pars_vertex:vg,clipping_planes_vertex:xg,color_fragment:yg,color_pars_fragment:Sg,color_pars_vertex:Mg,color_vertex:Eg,common:Tg,cube_uv_reflection_fragment:Ag,defaultnormal_vertex:wg,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Pg,emissivemap_pars_fragment:Lg,colorspace_fragment:Ig,colorspace_pars_fragment:Dg,envmap_fragment:Ug,envmap_common_pars_fragment:Ng,envmap_pars_fragment:Fg,envmap_pars_vertex:Og,envmap_physical_pars_fragment:Yg,envmap_vertex:Bg,fog_vertex:kg,fog_pars_vertex:zg,fog_fragment:Gg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Vg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:jg,lights_pars_begin:qg,lights_toon_fragment:Kg,lights_toon_pars_fragment:Jg,lights_phong_fragment:Qg,lights_phong_pars_fragment:Zg,lights_physical_fragment:$g,lights_physical_pars_fragment:e_,lights_fragment_begin:t_,lights_fragment_maps:n_,lights_fragment_end:i_,logdepthbuf_fragment:s_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:a_,logdepthbuf_vertex:o_,map_fragment:c_,map_pars_fragment:l_,map_particle_fragment:h_,map_particle_pars_fragment:u_,metalnessmap_fragment:d_,metalnessmap_pars_fragment:f_,morphinstance_vertex:p_,morphcolor_vertex:m_,morphnormal_vertex:g_,morphtarget_pars_vertex:__,morphtarget_vertex:b_,normal_fragment_begin:v_,normal_fragment_maps:x_,normal_pars_fragment:y_,normal_pars_vertex:S_,normal_vertex:M_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:T_,clearcoat_normal_fragment_maps:A_,clearcoat_pars_fragment:w_,iridescence_pars_fragment:R_,opaque_fragment:C_,packing:P_,premultiplied_alpha_fragment:L_,project_vertex:I_,dithering_fragment:D_,dithering_pars_fragment:U_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:F_,shadowmap_pars_fragment:O_,shadowmap_pars_vertex:B_,shadowmap_vertex:k_,shadowmask_pars_fragment:z_,skinbase_vertex:G_,skinning_pars_vertex:H_,skinning_vertex:V_,skinnormal_vertex:W_,specularmap_fragment:X_,specularmap_pars_fragment:j_,tonemapping_fragment:q_,tonemapping_pars_fragment:Y_,transmission_fragment:K_,transmission_pars_fragment:J_,uv_pars_fragment:Q_,uv_pars_vertex:Z_,uv_vertex:$_,worldpos_vertex:e0,background_vert:t0,background_frag:n0,backgroundCube_vert:i0,backgroundCube_frag:s0,cube_vert:r0,cube_frag:a0,depth_vert:o0,depth_frag:c0,distanceRGBA_vert:l0,distanceRGBA_frag:h0,equirect_vert:u0,equirect_frag:d0,linedashed_vert:f0,linedashed_frag:p0,meshbasic_vert:m0,meshbasic_frag:g0,meshlambert_vert:_0,meshlambert_frag:b0,meshmatcap_vert:v0,meshmatcap_frag:x0,meshnormal_vert:y0,meshnormal_frag:S0,meshphong_vert:M0,meshphong_frag:E0,meshphysical_vert:T0,meshphysical_frag:A0,meshtoon_vert:w0,meshtoon_frag:R0,points_vert:C0,points_frag:P0,shadow_vert:L0,shadow_frag:I0,sprite_vert:D0,sprite_frag:U0},te={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},Fn={basic:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Ot([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Ot([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Ot([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new Ae(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Ot([te.points,te.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Ot([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Ot([te.common,te.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Ot([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Ot([te.sprite,te.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Ot([te.common,te.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Ot([te.lights,te.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};Fn.physical={uniforms:Ot([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const pa={r:0,b:0,g:0},zi=new Gn,N0=new Pe;function F0(r,e,t,n,i,s,a){const o=new Ae(0);let c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const b=g(x);b===null?m(o,c):b&&b.isColor&&(m(b,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(x,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===ro)?(h===void 0&&(h=new $e(new $s(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Hs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),zi.copy(v.backgroundRotation),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(N0.makeRotationFromEuler(zi)),h.material.toneMapped=Xe.getTransfer(b.colorSpace)!==ot,(u!==b||d!==b.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new $e(new jr(2,2),new _n({name:"BackgroundMaterial",uniforms:Hs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(b.colorSpace)!==ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,v){x.getRGB(pa,Vd(r)),n.buffers.color.setClear(pa.r,pa.g,pa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),c=v,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,m(o,c)},render:_,addToRenderList:p}}function O0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,E,B,F,V){let j=!1;const O=u(F,B,E);s!==O&&(s=O,l(s.object)),j=f(y,F,B,V),j&&g(y,F,B,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,b(y,E,B,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,E,B){const F=B.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let j=V[E.id];j===void 0&&(j={},V[E.id]=j);let O=j[F];return O===void 0&&(O=d(c()),j[F]=O),O}function d(y){const E=[],B=[],F=[];for(let V=0;V<t;V++)E[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,E,B,F){const V=s.attributes,j=E.attributes;let O=0;const W=B.getAttributes();for(const H in W)if(W[H].location>=0){const se=V[H];let le=j[H];if(le===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),se===void 0||se.attribute!==le||le&&se.data!==le.data)return!0;O++}return s.attributesNum!==O||s.index!==F}function g(y,E,B,F){const V={},j=E.attributes;let O=0;const W=B.getAttributes();for(const H in W)if(W[H].location>=0){let se=j[H];se===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));const le={};le.attribute=se,se&&se.data&&(le.data=se.data),V[H]=le,O++}s.attributes=V,s.attributesNum=O,s.index=F}function _(){const y=s.newAttributes;for(let E=0,B=y.length;E<B;E++)y[E]=0}function p(y){m(y,0)}function m(y,E){const B=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;B[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),V[y]!==E&&(r.vertexAttribDivisor(y,E),V[y]=E)}function x(){const y=s.newAttributes,E=s.enabledAttributes;for(let B=0,F=E.length;B<F;B++)E[B]!==y[B]&&(r.disableVertexAttribArray(B),E[B]=0)}function v(y,E,B,F,V,j,O){O===!0?r.vertexAttribIPointer(y,E,B,V,j):r.vertexAttribPointer(y,E,B,F,V,j)}function b(y,E,B,F){_();const V=F.attributes,j=B.getAttributes(),O=E.defaultAttributeValues;for(const W in j){const H=j[W];if(H.location>=0){let ie=V[W];if(ie===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const se=ie.normalized,le=ie.itemSize,De=e.get(ie);if(De===void 0)continue;const He=De.buffer,q=De.type,Q=De.bytesPerElement,me=q===r.INT||q===r.UNSIGNED_INT||ie.gpuType===El;if(ie.isInterleavedBufferAttribute){const he=ie.data,Re=he.stride,ye=ie.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<H.locationSize;ke++)m(H.location+ke,he.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<H.locationSize;ke++)p(H.location+ke);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ke=0;ke<H.locationSize;ke++)v(H.location+ke,le/H.locationSize,q,se,Re*Q,(ye+le/H.locationSize*ke)*Q,me)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<H.locationSize;he++)m(H.location+he,ie.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<H.locationSize;he++)p(H.location+he);r.bindBuffer(r.ARRAY_BUFFER,He);for(let he=0;he<H.locationSize;he++)v(H.location+he,le/H.locationSize,q,se,le*Q,le/H.locationSize*he*Q,me)}}else if(O!==void 0){const se=O[W];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(H.location,se);break;case 3:r.vertexAttrib3fv(H.location,se);break;case 4:r.vertexAttrib4fv(H.location,se);break;default:r.vertexAttrib1fv(H.location,se)}}}}x()}function A(){C();for(const y in n){const E=n[y];for(const B in E){const F=E[B];for(const V in F)h(F[V].object),delete F[V];delete E[B]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const B in E){const F=E[B];for(const V in F)h(F[V].object),delete F[V];delete E[B]}delete n[y.id]}function M(y){for(const E in n){const B=n[E];if(B[y.id]===void 0)continue;const F=B[y.id];for(const V in F)h(F[V].object),delete F[V];delete B[y.id]}}function C(){D(),a=!0,s!==i&&(s=i,l(s.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:D,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function B0(r,e,t){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function k0(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==gn&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const C=M===Wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==In&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Rn&&!C)}function c(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:A,maxSamples:w}}function z0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Xi,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):l();else{const x=s?0:n,v=x*4;let b=m.clippingState||null;c.value=b,b=h(g,d,v,f);for(let A=0;A!==v;++A)b[A]=t[A];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,b=f;v!==_;++v,b+=4)a.copy(u[v]).applyMatrix4(x,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function G0(r){let e=new WeakMap;function t(a,o){return o===Sc?a.mapping=Fs:o===Mc&&(a.mapping=Os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Sc||o===Mc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zm(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Nl extends Wd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const As=4,Hh=[.125,.215,.35,.446,.526,.582],Ki=20,Ho=new Nl,Vh=new Ae;let Vo=null,Wo=0,Xo=0,jo=!1;const ji=(1+Math.sqrt(5))/2,xs=1/ji,Wh=[new L(-ji,xs,0),new L(ji,xs,0),new L(-xs,0,ji),new L(xs,0,ji),new L(0,ji,-xs),new L(0,ji,xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class $c{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vo,Wo,Xo),this._renderer.xr.enabled=jo,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fs||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vo=this._renderer.getRenderTarget(),Wo=this._renderer.getActiveCubeFace(),Xo=this._renderer.getActiveMipmapLevel(),jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Wr,format:gn,colorSpace:yt,depthBuffer:!1},i=Xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=H0(s)),this._blurMaterial=V0(s,e,t)}return i}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,n,i){const o=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Vh),h.toneMapping=Ri,h.autoClear=!1;const f=new Si({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new $e(new $s,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Vh),_=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):x===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;ma(i,x*v,m>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fs||e.mapping===Os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ho)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Wh[(i-s-1)%Wh.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new $e(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ki-1),_=s/g,p=isFinite(s)?1+Math.floor(h*_):Ki;p>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ki}`);const m=[];let x=0;for(let M=0;M<Ki;++M){const C=M/_,D=Math.exp(-C*C/2);m.push(D),M===0?x+=D:M<p&&(x+=2*D)}for(let M=0;M<m.length;M++)m[M]=m[M]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[i],A=3*b*(i>v-As?i-v+As:0),w=4*(this._cubeSize-b);ma(t,A,w,3*b,2*b),c.setRenderTarget(t),c.render(u,Ho)}}function H0(r){const e=[],t=[],n=[];let i=r;const s=r-As+1+Hh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-As?c=Hh[a-r+As-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,p=2,m=1,x=new Float32Array(_*g*f),v=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let w=0;w<f;w++){const M=w%3*2/3-1,C=w>2?0:-1,D=[M,C,0,M+2/3,C,0,M+2/3,C+1,0,M,C,0,M+2/3,C+1,0,M,C+1,0];x.set(D,_*g*w),v.set(d,p*g*w);const y=[w,w,w,w,w,w];b.set(y,m*g*w)}const A=new Wn;A.setAttribute("position",new Ut(x,_)),A.setAttribute("uv",new Ut(v,p)),A.setAttribute("faceIndex",new Ut(b,m)),e.push(A),i>As&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Xh(r,e,t){const n=new is(r,e,t);return n.texture.mapping=ro,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function V0(r,e,t){const n=new Float32Array(Ki),i=new L(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function jh(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function qh(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function W0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Sc||c===Mc,h=c===Fs||c===Os;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $c(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return l&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new $c(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function X0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function j0(r,e,t,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,b=x.length;v<b;v+=3){const A=x[v+0],w=x[v+1],M=x[v+2];d.push(A,w,w,M,M,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,b=x.length/3-1;v<b;v+=3){const A=v+0,w=v+1,M=v+2;d.push(A,w,w,M,M,A)}}else return;const p=new(Od(d)?Hd:Gd)(d,1);p.version=_;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function q0(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,n,1)}function u(d,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)l(d[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];for(let x=0;x<_.length;x++)t.update(m,n,_[x])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Y0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K0(r,e,t){const n=new WeakMap,i=new qe;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let A=o.attributes.position.count*b,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*w*4*u),C=new kd(M,A,w,u);C.type=Rn,C.needsUpdate=!0;const D=b*4;for(let E=0;E<u;E++){const B=m[E],F=x[E],V=v[E],j=A*w*4*E;for(let O=0;O<B.count;O++){const W=O*D;g===!0&&(i.fromBufferAttribute(B,O),M[j+W+0]=i.x,M[j+W+1]=i.y,M[j+W+2]=i.z,M[j+W+3]=0),_===!0&&(i.fromBufferAttribute(F,O),M[j+W+4]=i.x,M[j+W+5]=i.y,M[j+W+6]=i.z,M[j+W+7]=0),p===!0&&(i.fromBufferAttribute(V,O),M[j+W+8]=i.x,M[j+W+9]=i.y,M[j+W+10]=i.z,M[j+W+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Ne(A,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function J0(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class qd extends Tt{constructor(e,t,n,i,s,a,o,c,l,h=Cs){if(h!==Cs&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=ns),n===void 0&&h===zs&&(n=ks),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xt,this.minFilter=c!==void 0?c:xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yd=new Tt,Yh=new qd(1,1),Kd=new kd,Jd=new Fm,Qd=new Xd,Kh=[],Jh=[],Qh=new Float32Array(16),Zh=new Float32Array(9),$h=new Float32Array(4);function er(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Kh[i];if(s===void 0&&(s=new Float32Array(i),Kh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function oo(r,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Q0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function tb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),Mt(t,n)}}function nb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Zh.set(n),r.uniformMatrix3fv(this.addr,!1,Zh),Mt(t,n)}}function ib(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,n))return;Qh.set(n),r.uniformMatrix4fv(this.addr,!1,Qh),Mt(t,n)}}function sb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),Mt(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),Mt(t,e)}}function ob(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),Mt(t,e)}}function cb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function lb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),Mt(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),Mt(t,e)}}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),Mt(t,e)}}function db(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Yh.compareFunction=Nd,s=Yh):s=Yd,t.setTexture2D(e||s,i)}function fb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Jd,i)}function pb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Qd,i)}function mb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kd,i)}function gb(r){switch(r){case 5126:return Q0;case 35664:return Z0;case 35665:return $0;case 35666:return eb;case 35674:return tb;case 35675:return nb;case 35676:return ib;case 5124:case 35670:return sb;case 35667:case 35671:return rb;case 35668:case 35672:return ab;case 35669:case 35673:return ob;case 5125:return cb;case 36294:return lb;case 36295:return hb;case 36296:return ub;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return fb;case 35680:case 36300:case 36308:case 36293:return pb;case 36289:case 36303:case 36311:case 36292:return mb}}function _b(r,e){r.uniform1fv(this.addr,e)}function bb(r,e){const t=er(e,this.size,2);r.uniform2fv(this.addr,t)}function vb(r,e){const t=er(e,this.size,3);r.uniform3fv(this.addr,t)}function xb(r,e){const t=er(e,this.size,4);r.uniform4fv(this.addr,t)}function yb(r,e){const t=er(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sb(r,e){const t=er(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Mb(r,e){const t=er(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Eb(r,e){r.uniform1iv(this.addr,e)}function Tb(r,e){r.uniform2iv(this.addr,e)}function Ab(r,e){r.uniform3iv(this.addr,e)}function wb(r,e){r.uniform4iv(this.addr,e)}function Rb(r,e){r.uniform1uiv(this.addr,e)}function Cb(r,e){r.uniform2uiv(this.addr,e)}function Pb(r,e){r.uniform3uiv(this.addr,e)}function Lb(r,e){r.uniform4uiv(this.addr,e)}function Ib(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Yd,s[a])}function Db(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Jd,s[a])}function Ub(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Qd,s[a])}function Nb(r,e,t){const n=this.cache,i=e.length,s=oo(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Kd,s[a])}function Fb(r){switch(r){case 5126:return _b;case 35664:return bb;case 35665:return vb;case 35666:return xb;case 35674:return yb;case 35675:return Sb;case 35676:return Mb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return wb;case 5125:return Rb;case 36294:return Cb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ib;case 35679:case 36299:case 36307:return Db;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Nb}}class Ob{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=gb(t.type)}}class Bb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fb(t.type)}}class kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function eu(r,e){r.seq.push(e),r.map[e.id]=e}function zb(r,e,t){const n=r.name,i=n.length;for(qo.lastIndex=0;;){const s=qo.exec(n),a=qo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){eu(t,l===void 0?new Ob(o,r,e):new Bb(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new kb(o),eu(t,u)),t=u}}}class Ua{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);zb(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function tu(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Gb=37297;let Hb=0;function Vb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Wb(r){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(r);let n;switch(e===t?n="":e===Va&&t===Ha?n="LinearDisplayP3ToLinearSRGB":e===Ha&&t===Va&&(n="LinearSRGBToLinearDisplayP3"),r){case yt:case ao:return[n,"LinearTransferOETF"];case Lt:case Ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function nu(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Vb(r.getShaderSource(e),a)}else return i}function Xb(r,e){const t=Wb(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function jb(r,e){let t;switch(e){case Vp:t="Linear";break;case Wp:t="Reinhard";break;case Xp:t="Cineon";break;case yd:t="ACESFilmic";break;case qp:t="AgX";break;case Yp:t="Neutral";break;case jp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new L;function qb(){Xe.getLuminanceCoefficients(ga);const r=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function Kb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jb(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function br(r){return r!==""}function iu(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function su(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qb=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(r){return r.replace(Qb,$b)}const Zb=new Map;function $b(r,e){let t=Le[e];if(t===void 0){const n=Zb.get(e);if(n!==void 0)t=Le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ru(r){return r.replace(ev,tv)}function tv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function au(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===vd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sp?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function iv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fs:case Os:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Hp:e="ENVMAP_BLENDING_ADD";break}return e}function av(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function ov(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=nv(t),l=iv(t),h=sv(t),u=rv(t),d=av(t),f=Yb(t),g=Kb(s),_=i.createProgram();let p,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`)):(p=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[au(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Le.tonemapping_pars_fragment:"",t.toneMapping!==Ri?jb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.colorspace_pars_fragment,Xb("linearToOutputTexel",t.outputColorSpace),qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=el(a),a=iu(a,t),a=su(a,t),o=el(o),o=iu(o,t),o=su(o,t),a=ru(a),o=ru(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=x+p+a,b=x+m+o,A=tu(i,i.VERTEX_SHADER,v),w=tu(i,i.FRAGMENT_SHADER,b);i.attachShader(_,A),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function M(E){if(r.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let j=!0,O=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,A,w);else{const W=nu(i,A,"vertex"),H=nu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+W+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(O=!1);O&&(E.diagnostics={runnable:j,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new Ua(i,_),D=Jb(i,_)}let C;this.getUniforms=function(){return C===void 0&&M(this),C};let D;this.getAttributes=function(){return D===void 0&&M(this),D};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(_,Gb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let cv=0;class lv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new hv(e),t.set(e,n)),n}}class hv{constructor(e){this.id=cv++,this.code=e,this.usedTimes=0}}function uv(r,e,t,n,i,s,a){const o=new Dl,c=new lv,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,B,F,V){const j=F.fog,O=V.geometry,W=y.isMeshStandardMaterial?F.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),ie=H&&H.mapping===ro?H.image.height:null,se=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const le=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,De=le!==void 0?le.length:0;let He=0;O.morphAttributes.position!==void 0&&(He=1),O.morphAttributes.normal!==void 0&&(He=2),O.morphAttributes.color!==void 0&&(He=3);let q,Q,me,he;if(se){const Ht=Fn[se];q=Ht.vertexShader,Q=Ht.fragmentShader}else q=y.vertexShader,Q=y.fragmentShader,c.update(y),me=c.getVertexShaderID(y),he=c.getFragmentShaderID(y);const Re=r.getRenderTarget(),ye=V.isInstancedMesh===!0,ke=V.isBatchedMesh===!0,tt=!!y.map,ze=!!y.matcap,P=!!H,Jt=!!y.aoMap,Oe=!!y.lightMap,Ve=!!y.bumpMap,Me=!!y.normalMap,rt=!!y.displacementMap,we=!!y.emissiveMap,R=!!y.metalnessMap,S=!!y.roughnessMap,k=y.anisotropy>0,K=y.clearcoat>0,Z=y.dispersion>0,Y=y.iridescence>0,_e=y.sheen>0,ne=y.transmission>0,ue=k&&!!y.anisotropyMap,We=K&&!!y.clearcoatMap,$=K&&!!y.clearcoatNormalMap,de=K&&!!y.clearcoatRoughnessMap,Ee=Y&&!!y.iridescenceMap,Te=Y&&!!y.iridescenceThicknessMap,fe=_e&&!!y.sheenColorMap,Be=_e&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,st=!!y.specularColorMap,I=!!y.specularIntensityMap,oe=ne&&!!y.transmissionMap,X=ne&&!!y.thicknessMap,J=!!y.gradientMap,re=!!y.alphaMap,ce=y.alphaTest>0,Ge=!!y.alphaHash,_t=!!y.extensions;let Gt=Ri;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Gt=r.toneMapping);const je={shaderID:se,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:Q,defines:y.defines,customVertexShaderID:me,customFragmentShaderID:he,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:ke,batchingColor:ke&&V._colorsTexture!==null,instancing:ye,instancingColor:ye&&V.instanceColor!==null,instancingMorph:ye&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Re===null?r.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:yt,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:ze,envMap:P,envMapMode:P&&H.mapping,envMapCubeUVHeight:ie,aoMap:Jt,lightMap:Oe,bumpMap:Ve,normalMap:Me,displacementMap:f&&rt,emissiveMap:we,normalMapObjectSpace:Me&&y.normalMapType===im,normalMapTangentSpace:Me&&y.normalMapType===Ud,metalnessMap:R,roughnessMap:S,anisotropy:k,anisotropyMap:ue,clearcoat:K,clearcoatMap:We,clearcoatNormalMap:$,clearcoatRoughnessMap:de,dispersion:Z,iridescence:Y,iridescenceMap:Ee,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:fe,sheenRoughnessMap:Be,specularMap:Ce,specularColorMap:st,specularIntensityMap:I,transmission:ne,transmissionMap:oe,thicknessMap:X,gradientMap:J,opaque:y.transparent===!1&&y.blending===Qi&&y.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:Ge,combine:y.combine,mapUv:tt&&p(y.map.channel),aoMapUv:Jt&&p(y.aoMap.channel),lightMapUv:Oe&&p(y.lightMap.channel),bumpMapUv:Ve&&p(y.bumpMap.channel),normalMapUv:Me&&p(y.normalMap.channel),displacementMapUv:rt&&p(y.displacementMap.channel),emissiveMapUv:we&&p(y.emissiveMap.channel),metalnessMapUv:R&&p(y.metalnessMap.channel),roughnessMapUv:S&&p(y.roughnessMap.channel),anisotropyMapUv:ue&&p(y.anisotropyMap.channel),clearcoatMapUv:We&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:$&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&p(y.sheenRoughnessMap.channel),specularMapUv:Ce&&p(y.specularMap.channel),specularColorMapUv:st&&p(y.specularColorMap.channel),specularIntensityMapUv:I&&p(y.specularIntensityMap.channel),transmissionMapUv:oe&&p(y.transmissionMap.channel),thicknessMapUv:X&&p(y.thicknessMap.channel),alphaMapUv:re&&p(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!O.attributes.uv&&(tt||re),fog:!!j,useFog:y.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:He,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Gt,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Xe.getTransfer(y.map.colorSpace)===ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===zt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function x(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const B in y.defines)E.push(B),E.push(y.defines[B]);return y.isRawShaderMaterial===!1&&(v(E,y),b(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function v(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),y.push(o.mask)}function A(y){const E=_[y.type];let B;if(E){const F=Fn[E];B=Ym.clone(F.uniforms)}else B=y.uniforms;return B}function w(y,E){let B;for(let F=0,V=h.length;F<V;F++){const j=h[F];if(j.cacheKey===E){B=j,++B.usedTimes;break}}return B===void 0&&(B=new ov(r,E,y,s),h.push(B)),B}function M(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function C(y){c.remove(y)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:A,acquireProgram:w,releaseProgram:M,releaseShaderCache:C,programs:h,dispose:D}}function dv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function fv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ou(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cu(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,f,g,_,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=p),e++,m}function o(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(u,d,f,g,_,p){const m=a(u,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,d){t.length>1&&t.sort(u||fv),n.length>1&&n.sort(d||ou),i.length>1&&i.sort(d||ou)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:h,sort:l}}function pv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new cu,r.set(n,[a])):i>=s.length?(a=new cu,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function mv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ae};break;case"SpotLight":t={position:new L,direction:new L,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":t={color:new Ae,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function gv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let _v=0;function bv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function vv(r){const e=new mv,t=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new Pe,a=new Pe;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,x=0,v=0,b=0,A=0,w=0,M=0;l.sort(bv);for(let D=0,y=l.length;D<y;D++){const E=l[D],B=E.color,F=E.intensity,V=E.distance,j=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(E.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(E.sh.coefficients[O],F);M++}else if(E.isDirectionalLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const W=E.shadow,H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=E.shadow.matrix,x++}n.directional[f]=O,f++}else if(E.isSpotLight){const O=e.get(E);O.position.setFromMatrixPosition(E.matrixWorld),O.color.copy(B).multiplyScalar(F),O.distance=V,O.coneCos=Math.cos(E.angle),O.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),O.decay=E.decay,n.spot[_]=O;const W=E.shadow;if(E.map&&(n.spotLightMap[A]=E.map,A++,W.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=W.matrix,E.castShadow){const H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,b++}_++}else if(E.isRectAreaLight){const O=e.get(E);O.color.copy(B).multiplyScalar(F),O.halfWidth.set(E.width*.5,0,0),O.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=O,p++}else if(E.isPointLight){const O=e.get(E);if(O.color.copy(E.color).multiplyScalar(E.intensity),O.distance=E.distance,O.decay=E.decay,E.castShadow){const W=E.shadow,H=t.get(E);H.shadowIntensity=W.intensity,H.shadowBias=W.bias,H.shadowNormalBias=W.normalBias,H.shadowRadius=W.radius,H.shadowMapSize=W.mapSize,H.shadowCameraNear=W.camera.near,H.shadowCameraFar=W.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=E.shadow.matrix,v++}n.point[g]=O,g++}else if(E.isHemisphereLight){const O=e.get(E);O.skyColor.copy(E.color).multiplyScalar(F),O.groundColor.copy(E.groundColor).multiplyScalar(F),n.hemi[m]=O,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==v||C.numSpotShadows!==b||C.numSpotMaps!==A||C.numLightProbes!==M)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=b+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=M,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=v,C.numSpotShadows=b,C.numSpotMaps=A,C.numLightProbes=M,n.version=_v++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,x=l.length;m<x;m++){const v=l[m];if(v.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),u++}else if(v.isSpotLight){const b=n.spot[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function lu(r){const e=new vv(r),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function xv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new lu(r),e.set(i,[o])):s>=a.length?(o=new lu(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class yv extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sv extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Mv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ev=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tv(r,e,t){let n=new Ul;const i=new Ne,s=new Ne,a=new qe,o=new yv({depthPacking:nm}),c=new Sv,l={},h=t.maxTextureSize,u={[oi]:zt,[zt]:oi,[nn]:nn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Mv,fragmentShader:Ev}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Wn;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new $e(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vd;let m=this.type;this.render=function(w,M,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const D=r.getRenderTarget(),y=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),B=r.state;B.setBlending(wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==$n&&this.type===$n,V=m===$n&&this.type!==$n;for(let j=0,O=w.length;j<O;j++){const W=w[j],H=W.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const ie=H.getFrameExtents();if(i.multiply(ie),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ie.x),i.x=s.x*ie.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ie.y),i.y=s.y*ie.y,H.mapSize.y=s.y)),H.map===null||F===!0||V===!0){const le=this.type!==$n?{minFilter:xt,magFilter:xt}:{};H.map!==null&&H.map.dispose(),H.map=new is(i.x,i.y,le),H.map.texture.name=W.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const se=H.getViewportCount();for(let le=0;le<se;le++){const De=H.getViewport(le);a.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),B.viewport(a),H.updateMatrices(W,le),n=H.getFrustum(),b(M,C,H.camera,W,this.type)}H.isPointLightShadow!==!0&&this.type===$n&&x(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(D,y,E)};function x(w,M){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new is(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(M,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(M,null,C,f,_,null)}function v(w,M,C,D){let y=null;const E=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)y=E;else if(y=C.isPointLight===!0?c:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const B=y.uuid,F=M.uuid;let V=l[B];V===void 0&&(V={},l[B]=V);let j=V[F];j===void 0&&(j=y.clone(),V[F]=j,M.addEventListener("dispose",A)),y=j}if(y.visible=M.visible,y.wireframe=M.wireframe,D===$n?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:u[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=r.properties.get(y);B.light=C}return y}function b(w,M,C,D,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===$n)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=e.update(w),V=w.material;if(Array.isArray(V)){const j=F.groups;for(let O=0,W=j.length;O<W;O++){const H=j[O],ie=V[H.materialIndex];if(ie&&ie.visible){const se=v(w,ie,D,y);w.onBeforeShadow(r,w,M,C,F,se,H),r.renderBufferDirect(C,null,F,se,w,H),w.onAfterShadow(r,w,M,C,F,se,H)}}}else if(V.visible){const j=v(w,V,D,y);w.onBeforeShadow(r,w,M,C,F,j,null),r.renderBufferDirect(C,null,F,j,w,null),w.onAfterShadow(r,w,M,C,F,j,null)}}const B=w.children;for(let F=0,V=B.length;F<V;F++)b(B[F],M,C,D,y)}function A(w){w.target.removeEventListener("dispose",A);for(const C in l){const D=l[C],y=w.target.uuid;y in D&&(D[y].dispose(),delete D[y])}}}const Av={[mc]:gc,[_c]:xc,[bc]:yc,[Ns]:vc,[gc]:mc,[xc]:_c,[yc]:bc,[vc]:Ns};function wv(r){function e(){let I=!1;const oe=new qe;let X=null;const J=new qe(0,0,0,0);return{setMask:function(re){X!==re&&!I&&(r.colorMask(re,re,re,re),X=re)},setLocked:function(re){I=re},setClear:function(re,ce,Ge,_t,Gt){Gt===!0&&(re*=_t,ce*=_t,Ge*=_t),oe.set(re,ce,Ge,_t),J.equals(oe)===!1&&(r.clearColor(re,ce,Ge,_t),J.copy(oe))},reset:function(){I=!1,X=null,J.set(-1,0,0,0)}}}function t(){let I=!1,oe=!1,X=null,J=null,re=null;return{setReversed:function(ce){oe=ce},setTest:function(ce){ce?me(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ce){X!==ce&&!I&&(r.depthMask(ce),X=ce)},setFunc:function(ce){if(oe&&(ce=Av[ce]),J!==ce){switch(ce){case mc:r.depthFunc(r.NEVER);break;case gc:r.depthFunc(r.ALWAYS);break;case _c:r.depthFunc(r.LESS);break;case Ns:r.depthFunc(r.LEQUAL);break;case bc:r.depthFunc(r.EQUAL);break;case vc:r.depthFunc(r.GEQUAL);break;case xc:r.depthFunc(r.GREATER);break;case yc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ce}},setLocked:function(ce){I=ce},setClear:function(ce){re!==ce&&(r.clearDepth(ce),re=ce)},reset:function(){I=!1,X=null,J=null,re=null}}}function n(){let I=!1,oe=null,X=null,J=null,re=null,ce=null,Ge=null,_t=null,Gt=null;return{setTest:function(je){I||(je?me(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(je){oe!==je&&!I&&(r.stencilMask(je),oe=je)},setFunc:function(je,Ht,jn){(X!==je||J!==Ht||re!==jn)&&(r.stencilFunc(je,Ht,jn),X=je,J=Ht,re=jn)},setOp:function(je,Ht,jn){(ce!==je||Ge!==Ht||_t!==jn)&&(r.stencilOp(je,Ht,jn),ce=je,Ge=Ht,_t=jn)},setLocked:function(je){I=je},setClear:function(je){Gt!==je&&(r.clearStencil(je),Gt=je)},reset:function(){I=!1,oe=null,X=null,J=null,re=null,ce=null,Ge=null,_t=null,Gt=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,b=null,A=null,w=new Ae(0,0,0),M=0,C=!1,D=null,y=null,E=null,B=null,F=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,O=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),j=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),j=O>=2);let H=null,ie={};const se=r.getParameter(r.SCISSOR_BOX),le=r.getParameter(r.VIEWPORT),De=new qe().fromArray(se),He=new qe().fromArray(le);function q(I,oe,X,J){const re=new Uint8Array(4),ce=r.createTexture();r.bindTexture(I,ce),r.texParameteri(I,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(I,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ge=0;Ge<X;Ge++)I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY?r.texImage3D(oe,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(oe+Ge,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return ce}const Q={};Q[r.TEXTURE_2D]=q(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=q(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=q(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=q(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),me(r.DEPTH_TEST),s.setFunc(Ns),Oe(!1),Ve(vh),me(r.CULL_FACE),P(wi);function me(I){l[I]!==!0&&(r.enable(I),l[I]=!0)}function he(I){l[I]!==!1&&(r.disable(I),l[I]=!1)}function Re(I,oe){return h[I]!==oe?(r.bindFramebuffer(I,oe),h[I]=oe,I===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=oe),I===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=oe),!0):!1}function ye(I,oe){let X=d,J=!1;if(I){X=u.get(oe),X===void 0&&(X=[],u.set(oe,X));const re=I.textures;if(X.length!==re.length||X[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Ge=re.length;ce<Ge;ce++)X[ce]=r.COLOR_ATTACHMENT0+ce;X.length=re.length,J=!0}}else X[0]!==r.BACK&&(X[0]=r.BACK,J=!0);J&&r.drawBuffers(X)}function ke(I){return f!==I?(r.useProgram(I),f=I,!0):!1}const tt={[Yi]:r.FUNC_ADD,[Ep]:r.FUNC_SUBTRACT,[Tp]:r.FUNC_REVERSE_SUBTRACT};tt[Ap]=r.MIN,tt[wp]=r.MAX;const ze={[Rp]:r.ZERO,[Cp]:r.ONE,[Pp]:r.SRC_COLOR,[fc]:r.SRC_ALPHA,[Fp]:r.SRC_ALPHA_SATURATE,[Up]:r.DST_COLOR,[Ip]:r.DST_ALPHA,[Lp]:r.ONE_MINUS_SRC_COLOR,[pc]:r.ONE_MINUS_SRC_ALPHA,[Np]:r.ONE_MINUS_DST_COLOR,[Dp]:r.ONE_MINUS_DST_ALPHA,[Op]:r.CONSTANT_COLOR,[Bp]:r.ONE_MINUS_CONSTANT_COLOR,[kp]:r.CONSTANT_ALPHA,[zp]:r.ONE_MINUS_CONSTANT_ALPHA};function P(I,oe,X,J,re,ce,Ge,_t,Gt,je){if(I===wi){g===!0&&(he(r.BLEND),g=!1);return}if(g===!1&&(me(r.BLEND),g=!0),I!==Mp){if(I!==_||je!==C){if((p!==Yi||v!==Yi)&&(r.blendEquation(r.FUNC_ADD),p=Yi,v=Yi),je)switch(I){case Qi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dc:r.blendFunc(r.ONE,r.ONE);break;case xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case dc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,x=null,b=null,A=null,w.set(0,0,0),M=0,_=I,C=je}return}re=re||oe,ce=ce||X,Ge=Ge||J,(oe!==p||re!==v)&&(r.blendEquationSeparate(tt[oe],tt[re]),p=oe,v=re),(X!==m||J!==x||ce!==b||Ge!==A)&&(r.blendFuncSeparate(ze[X],ze[J],ze[ce],ze[Ge]),m=X,x=J,b=ce,A=Ge),(_t.equals(w)===!1||Gt!==M)&&(r.blendColor(_t.r,_t.g,_t.b,Gt),w.copy(_t),M=Gt),_=I,C=!1}function Jt(I,oe){I.side===nn?he(r.CULL_FACE):me(r.CULL_FACE);let X=I.side===zt;oe&&(X=!X),Oe(X),I.blending===Qi&&I.transparent===!1?P(wi):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),i.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?me(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(I){D!==I&&(I?r.frontFace(r.CW):r.frontFace(r.CCW),D=I)}function Ve(I){I!==xp?(me(r.CULL_FACE),I!==y&&(I===vh?r.cullFace(r.BACK):I===yp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),y=I}function Me(I){I!==E&&(j&&r.lineWidth(I),E=I)}function rt(I,oe,X){I?(me(r.POLYGON_OFFSET_FILL),(B!==oe||F!==X)&&(r.polygonOffset(oe,X),B=oe,F=X)):he(r.POLYGON_OFFSET_FILL)}function we(I){I?me(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function R(I){I===void 0&&(I=r.TEXTURE0+V-1),H!==I&&(r.activeTexture(I),H=I)}function S(I,oe,X){X===void 0&&(H===null?X=r.TEXTURE0+V-1:X=H);let J=ie[X];J===void 0&&(J={type:void 0,texture:void 0},ie[X]=J),(J.type!==I||J.texture!==oe)&&(H!==X&&(r.activeTexture(X),H=X),r.bindTexture(I,oe||Q[I]),J.type=I,J.texture=oe)}function k(){const I=ie[H];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(I){De.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),De.copy(I))}function fe(I){He.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function Be(I,oe){let X=c.get(oe);X===void 0&&(X=new WeakMap,c.set(oe,X));let J=X.get(I);J===void 0&&(J=r.getUniformBlockIndex(oe,I.name),X.set(I,J))}function Ce(I,oe){const J=c.get(oe).get(I);o.get(oe)!==J&&(r.uniformBlockBinding(oe,J,I.__bindingPointIndex),o.set(oe,J))}function st(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},H=null,ie={},h={},u=new WeakMap,d=[],f=null,g=!1,_=null,p=null,m=null,x=null,v=null,b=null,A=null,w=new Ae(0,0,0),M=0,C=!1,D=null,y=null,E=null,B=null,F=null,De.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:me,disable:he,bindFramebuffer:Re,drawBuffers:ye,useProgram:ke,setBlending:P,setMaterial:Jt,setFlipSided:Oe,setCullFace:Ve,setLineWidth:Me,setPolygonOffset:rt,setScissorTest:we,activeTexture:R,bindTexture:S,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:Z,texImage2D:de,texImage3D:Ee,updateUBOMapping:Be,uniformBlockBinding:Ce,texStorage2D:We,texStorage3D:$,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ne,compressedTexSubImage3D:ue,scissor:Te,viewport:fe,reset:st}}function hu(r,e,t,n){const i=Rv(n);switch(t){case wd:return r*e;case Cd:return r*e;case Pd:return r*e*2;case Pr:return r*e/i.components*i.byteLength;case wl:return r*e/i.components*i.byteLength;case Ld:return r*e*2/i.components*i.byteLength;case Rl:return r*e*2/i.components*i.byteLength;case Rd:return r*e*3/i.components*i.byteLength;case gn:return r*e*4/i.components*i.byteLength;case Cl:return r*e*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:case wc:return Math.max(r,16)*Math.max(e,8)/4;case Ec:case Ac:return Math.max(r,8)*Math.max(e,8)/2;case Rc:case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Pc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ic:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Uc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Bc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Wc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Xc:case jc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Id:case qc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Yc:case Kc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rv(r){switch(r){case In:case Ed:return{byteLength:1,components:1};case Cr:case Td:case Wr:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case ns:case El:case Rn:return{byteLength:4,components:1};case Ad:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Cv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return f?new OffscreenCanvas(R,S):Dr("canvas")}function _(R,S,k){let K=1;const Z=we(R);if((Z.width>k||Z.height>k)&&(K=k/Math.max(Z.width,Z.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(K*Z.width),_e=Math.floor(K*Z.height);u===void 0&&(u=g(Y,_e));const ne=S?g(Y,_e):u;return ne.width=Y,ne.height=_e,ne.getContext("2d").drawImage(R,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_e+")."),ne}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==xt&&R.minFilter!==sn}function m(R){r.generateMipmap(R)}function x(R,S,k,K,Z=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===r.RED&&(k===r.FLOAT&&(Y=r.R32F),k===r.HALF_FLOAT&&(Y=r.R16F),k===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.R8UI),k===r.UNSIGNED_SHORT&&(Y=r.R16UI),k===r.UNSIGNED_INT&&(Y=r.R32UI),k===r.BYTE&&(Y=r.R8I),k===r.SHORT&&(Y=r.R16I),k===r.INT&&(Y=r.R32I)),S===r.RG&&(k===r.FLOAT&&(Y=r.RG32F),k===r.HALF_FLOAT&&(Y=r.RG16F),k===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RG8UI),k===r.UNSIGNED_SHORT&&(Y=r.RG16UI),k===r.UNSIGNED_INT&&(Y=r.RG32UI),k===r.BYTE&&(Y=r.RG8I),k===r.SHORT&&(Y=r.RG16I),k===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),k===r.UNSIGNED_INT&&(Y=r.RGB32UI),k===r.BYTE&&(Y=r.RGB8I),k===r.SHORT&&(Y=r.RGB16I),k===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),k===r.UNSIGNED_INT&&(Y=r.RGBA32UI),k===r.BYTE&&(Y=r.RGBA8I),k===r.SHORT&&(Y=r.RGBA16I),k===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),S===r.RGBA){const _e=Z?Ga:Xe.getTransfer(K);k===r.FLOAT&&(Y=r.RGBA32F),k===r.HALF_FLOAT&&(Y=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Y=_e===ot?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(R,S){let k;return R?S===null||S===ns||S===ks?k=r.DEPTH24_STENCIL8:S===Rn?k=r.DEPTH32F_STENCIL8:S===Cr&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ns||S===ks?k=r.DEPTH_COMPONENT24:S===Rn?k=r.DEPTH_COMPONENT32F:S===Cr&&(k=r.DEPTH_COMPONENT16),k}function b(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==xt&&R.minFilter!==sn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),M(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),D(S)}function M(R){const S=n.get(R);if(S.__webglInit===void 0)return;const k=R.source,K=d.get(k);if(K){const Z=K[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(R),Object.keys(K).length===0&&d.delete(k)}n.remove(R)}function C(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const k=R.source,K=d.get(k);delete K[S.__cacheKey],a.memory.textures--}function D(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let Z=0;Z<S.__webglFramebuffer[K].length;Z++)r.deleteFramebuffer(S.__webglFramebuffer[K][Z]);else r.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)r.deleteFramebuffer(S.__webglFramebuffer[K]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=R.textures;for(let K=0,Z=k.length;K<Z;K++){const Y=n.get(k[K]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[K])}n.remove(R)}let y=0;function E(){y=0}function B(){const R=y;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),y+=1,R}function F(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function V(R,S){const k=n.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(k,R,S);return}}t.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+S)}function j(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){He(k,R,S);return}t.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+S)}function O(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){He(k,R,S);return}t.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+S)}function W(R,S){const k=n.get(R);if(R.version>0&&k.__version!==R.version){q(k,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+S)}const H={[Bs]:r.REPEAT,[yi]:r.CLAMP_TO_EDGE,[ka]:r.MIRRORED_REPEAT},ie={[xt]:r.NEAREST,[Md]:r.NEAREST_MIPMAP_NEAREST,[_r]:r.NEAREST_MIPMAP_LINEAR,[sn]:r.LINEAR,[wa]:r.LINEAR_MIPMAP_NEAREST,[ii]:r.LINEAR_MIPMAP_LINEAR},se={[sm]:r.NEVER,[hm]:r.ALWAYS,[rm]:r.LESS,[Nd]:r.LEQUAL,[am]:r.EQUAL,[lm]:r.GEQUAL,[om]:r.GREATER,[cm]:r.NOTEQUAL};function le(R,S){if(S.type===Rn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===sn||S.magFilter===wa||S.magFilter===_r||S.magFilter===ii||S.minFilter===sn||S.minFilter===wa||S.minFilter===_r||S.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,H[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,H[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,H[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ie[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ie[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,se[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xt||S.minFilter!==_r&&S.minFilter!==ii||S.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function De(R,S){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const K=S.source;let Z=d.get(K);Z===void 0&&(Z={},d.set(K,Z));const Y=F(S);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[Y].usedTimes++;const _e=Z[R.__cacheKey];_e!==void 0&&(Z[R.__cacheKey].usedTimes--,_e.usedTimes===0&&C(S)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return k}function He(R,S,k){let K=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=r.TEXTURE_3D);const Z=De(R,S),Y=S.source;t.bindTexture(K,R.__webglTexture,r.TEXTURE0+k);const _e=n.get(Y);if(Y.version!==_e.__version||Z===!0){t.activeTexture(r.TEXTURE0+k);const ne=Xe.getPrimaries(Xe.workingColorSpace),ue=S.colorSpace===xi?null:Xe.getPrimaries(S.colorSpace),We=S.colorSpace===xi||ne===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let $=_(S.image,!1,i.maxTextureSize);$=rt(S,$);const de=s.convert(S.format,S.colorSpace),Ee=s.convert(S.type);let Te=x(S.internalFormat,de,Ee,S.colorSpace,S.isVideoTexture);le(K,S);let fe;const Be=S.mipmaps,Ce=S.isVideoTexture!==!0,st=_e.__version===void 0||Z===!0,I=Y.dataReady,oe=b(S,$);if(S.isDepthTexture)Te=v(S.format===zs,S.type),st&&(Ce?t.texStorage2D(r.TEXTURE_2D,1,Te,$.width,$.height):t.texImage2D(r.TEXTURE_2D,0,Te,$.width,$.height,0,de,Ee,null));else if(S.isDataTexture)if(Be.length>0){Ce&&st&&t.texStorage2D(r.TEXTURE_2D,oe,Te,Be[0].width,Be[0].height);for(let X=0,J=Be.length;X<J;X++)fe=Be[X],Ce?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,X,Te,fe.width,fe.height,0,de,Ee,fe.data);S.generateMipmaps=!1}else Ce?(st&&t.texStorage2D(r.TEXTURE_2D,oe,Te,$.width,$.height),I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$.width,$.height,de,Ee,$.data)):t.texImage2D(r.TEXTURE_2D,0,Te,$.width,$.height,0,de,Ee,$.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ce&&st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Te,Be[0].width,Be[0].height,$.depth);for(let X=0,J=Be.length;X<J;X++)if(fe=Be[X],S.format!==gn)if(de!==null)if(Ce){if(I)if(S.layerUpdates.size>0){const re=hu(fe.width,fe.height,S.format,S.type);for(const ce of S.layerUpdates){const Ge=fe.data.subarray(ce*re/fe.data.BYTES_PER_ELEMENT,(ce+1)*re/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,ce,fe.width,fe.height,1,de,Ge,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,$.depth,de,fe.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,X,Te,fe.width,fe.height,$.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?I&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,X,0,0,0,fe.width,fe.height,$.depth,de,Ee,fe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,X,Te,fe.width,fe.height,$.depth,0,de,Ee,fe.data)}else{Ce&&st&&t.texStorage2D(r.TEXTURE_2D,oe,Te,Be[0].width,Be[0].height);for(let X=0,J=Be.length;X<J;X++)fe=Be[X],S.format!==gn?de!==null?Ce?I&&t.compressedTexSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(r.TEXTURE_2D,X,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,fe.width,fe.height,de,Ee,fe.data):t.texImage2D(r.TEXTURE_2D,X,Te,fe.width,fe.height,0,de,Ee,fe.data)}else if(S.isDataArrayTexture)if(Ce){if(st&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,Te,$.width,$.height,$.depth),I)if(S.layerUpdates.size>0){const X=hu($.width,$.height,S.format,S.type);for(const J of S.layerUpdates){const re=$.data.subarray(J*X/$.data.BYTES_PER_ELEMENT,(J+1)*X/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,$.width,$.height,1,de,Ee,re)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ee,$.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Te,$.width,$.height,$.depth,0,de,Ee,$.data);else if(S.isData3DTexture)Ce?(st&&t.texStorage3D(r.TEXTURE_3D,oe,Te,$.width,$.height,$.depth),I&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ee,$.data)):t.texImage3D(r.TEXTURE_3D,0,Te,$.width,$.height,$.depth,0,de,Ee,$.data);else if(S.isFramebufferTexture){if(st)if(Ce)t.texStorage2D(r.TEXTURE_2D,oe,Te,$.width,$.height);else{let X=$.width,J=$.height;for(let re=0;re<oe;re++)t.texImage2D(r.TEXTURE_2D,re,Te,X,J,0,de,Ee,null),X>>=1,J>>=1}}else if(Be.length>0){if(Ce&&st){const X=we(Be[0]);t.texStorage2D(r.TEXTURE_2D,oe,Te,X.width,X.height)}for(let X=0,J=Be.length;X<J;X++)fe=Be[X],Ce?I&&t.texSubImage2D(r.TEXTURE_2D,X,0,0,de,Ee,fe):t.texImage2D(r.TEXTURE_2D,X,Te,de,Ee,fe);S.generateMipmaps=!1}else if(Ce){if(st){const X=we($);t.texStorage2D(r.TEXTURE_2D,oe,Te,X.width,X.height)}I&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ee,$)}else t.texImage2D(r.TEXTURE_2D,0,Te,de,Ee,$);p(S)&&m(K),_e.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function q(R,S,k){if(S.image.length!==6)return;const K=De(R,S),Z=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);const Y=n.get(Z);if(Z.version!==Y.__version||K===!0){t.activeTexture(r.TEXTURE0+k);const _e=Xe.getPrimaries(Xe.workingColorSpace),ne=S.colorSpace===xi?null:Xe.getPrimaries(S.colorSpace),ue=S.colorSpace===xi||_e===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,$=S.image[0]&&S.image[0].isDataTexture,de=[];for(let J=0;J<6;J++)!We&&!$?de[J]=_(S.image[J],!0,i.maxCubemapSize):de[J]=$?S.image[J].image:S.image[J],de[J]=rt(S,de[J]);const Ee=de[0],Te=s.convert(S.format,S.colorSpace),fe=s.convert(S.type),Be=x(S.internalFormat,Te,fe,S.colorSpace),Ce=S.isVideoTexture!==!0,st=Y.__version===void 0||K===!0,I=Z.dataReady;let oe=b(S,Ee);le(r.TEXTURE_CUBE_MAP,S);let X;if(We){Ce&&st&&t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Be,Ee.width,Ee.height);for(let J=0;J<6;J++){X=de[J].mipmaps;for(let re=0;re<X.length;re++){const ce=X[re];S.format!==gn?Te!==null?Ce?I&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,ce.width,ce.height,Te,ce.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,Be,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,0,0,ce.width,ce.height,Te,fe,ce.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re,Be,ce.width,ce.height,0,Te,fe,ce.data)}}}else{if(X=S.mipmaps,Ce&&st){X.length>0&&oe++;const J=we(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,oe,Be,J.width,J.height)}for(let J=0;J<6;J++)if($){Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,de[J].width,de[J].height,Te,fe,de[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,de[J].width,de[J].height,0,Te,fe,de[J].data);for(let re=0;re<X.length;re++){const Ge=X[re].image[J].image;Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,Ge.width,Ge.height,Te,fe,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,Be,Ge.width,Ge.height,0,Te,fe,Ge.data)}}else{Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,fe,de[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Be,Te,fe,de[J]);for(let re=0;re<X.length;re++){const ce=X[re];Ce?I&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,0,0,Te,fe,ce.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,re+1,Be,Te,fe,ce.image[J])}}}p(S)&&m(r.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,k,K,Z,Y){const _e=s.convert(k.format,k.colorSpace),ne=s.convert(k.type),ue=x(k.internalFormat,_e,ne,k.colorSpace);if(!n.get(S).__hasExternalTextures){const $=Math.max(1,S.width>>Y),de=Math.max(1,S.height>>Y);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,ue,$,de,S.depth,0,_e,ne,null):t.texImage2D(Z,Y,ue,$,de,0,_e,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ve(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,Z,n.get(k).__webglTexture,0,Oe(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,Z,n.get(k).__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(R,S,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const K=S.depthTexture,Z=K&&K.isDepthTexture?K.type:null,Y=v(S.stencilBuffer,Z),_e=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=Oe(S);Ve(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,Y,S.width,S.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,_e,r.RENDERBUFFER,R)}else{const K=S.textures;for(let Z=0;Z<K.length;Z++){const Y=K[Z],_e=s.convert(Y.format,Y.colorSpace),ne=s.convert(Y.type),ue=x(Y.internalFormat,_e,ne,Y.colorSpace),We=Oe(S);k&&Ve(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,We,ue,S.width,S.height):Ve(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,We,ue,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ue,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function he(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V(S.depthTexture,0);const K=n.get(S.depthTexture).__webglTexture,Z=Oe(S);if(S.depthTexture.format===Cs)Ve(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,K,0);else if(S.depthTexture.format===zs)Ve(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Re(R){const S=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const K=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",Z)};K.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=K}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");he(S.__webglFramebuffer,R)}else if(k){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=r.createRenderbuffer(),me(S.__webglDepthbuffer[K],R,!1);else{const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),me(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ye(R,S,k){const K=n.get(R);S!==void 0&&Q(K.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Re(R)}function ke(R){const S=R.texture,k=n.get(R),K=n.get(S);R.addEventListener("dispose",w);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,_e=Z.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=S.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let ue=0;ue<S.mipmaps.length;ue++)k.__webglFramebuffer[ne][ue]=r.createFramebuffer()}else k.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)k.__webglFramebuffer[ne]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(_e)for(let ne=0,ue=Z.length;ne<ue;ne++){const We=n.get(Z[ne]);We.__webglTexture===void 0&&(We.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ve(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<Z.length;ne++){const ue=Z[ne];k.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);const We=s.convert(ue.format,ue.colorSpace),$=s.convert(ue.type),de=x(ue.internalFormat,We,$,ue.colorSpace,R.isXRRenderTarget===!0),Ee=Oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ee,de,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),me(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),le(r.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Q(k.__webglFramebuffer[ne][ue],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ue);else Q(k.__webglFramebuffer[ne],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);p(S)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,ue=Z.length;ne<ue;ne++){const We=Z[ne],$=n.get(We);t.bindTexture(r.TEXTURE_2D,$.__webglTexture),le(r.TEXTURE_2D,We),Q(k.__webglFramebuffer,R,We,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,0),p(We)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),le(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let ue=0;ue<S.mipmaps.length;ue++)Q(k.__webglFramebuffer[ue],R,S,r.COLOR_ATTACHMENT0,ne,ue);else Q(k.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ne,0);p(S)&&m(ne),t.unbindTexture()}R.depthBuffer&&Re(R)}function tt(R){const S=R.textures;for(let k=0,K=S.length;k<K;k++){const Z=S[k];if(p(Z)){const Y=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(Y,_e),m(Y),t.unbindTexture()}}}const ze=[],P=[];function Jt(R){if(R.samples>0){if(Ve(R)===!1){const S=R.textures,k=R.width,K=R.height;let Z=r.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_e=n.get(R),ne=S.length>1;if(ne)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const We=n.get(S[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,We,0)}r.blitFramebuffer(0,0,k,K,0,0,k,K,Z,r.NEAREST),c===!0&&(ze.length=0,P.length=0,ze.push(r.COLOR_ATTACHMENT0+ue),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ze.push(Y),P.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,P)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,_e.__webglColorRenderbuffer[ue]);const We=n.get(S[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,_e.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,We,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Oe(R){return Math.min(i.maxSamples,R.samples)}function Ve(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function rt(R,S){const k=R.colorSpace,K=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==yt&&k!==xi&&(Xe.getTransfer(k)===ot?(K!==gn||Z!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=W,this.rebindTextures=ye,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ve}function Pv(r,e){function t(n,i=xi){let s;const a=Xe.getTransfer(i);if(n===In)return r.UNSIGNED_BYTE;if(n===Tl)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ad)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ed)return r.BYTE;if(n===Td)return r.SHORT;if(n===Cr)return r.UNSIGNED_SHORT;if(n===El)return r.INT;if(n===ns)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===Wr)return r.HALF_FLOAT;if(n===wd)return r.ALPHA;if(n===Rd)return r.RGB;if(n===gn)return r.RGBA;if(n===Cd)return r.LUMINANCE;if(n===Pd)return r.LUMINANCE_ALPHA;if(n===Cs)return r.DEPTH_COMPONENT;if(n===zs)return r.DEPTH_STENCIL;if(n===Pr)return r.RED;if(n===wl)return r.RED_INTEGER;if(n===Ld)return r.RG;if(n===Rl)return r.RG_INTEGER;if(n===Cl)return r.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===La)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===La)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===Ac||n===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rc||n===Cc)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Lc||n===Ic||n===Dc||n===Uc||n===Nc||n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Gc||n===Hc||n===Vc||n===Wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Lc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ic)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Dc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Oc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wc)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Xc||n===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Id||n===qc||n===Yc||n===Kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ia)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class Lv extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cn extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iv={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Uv=`
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

}`;class Nv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Tt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:Dv,fragmentShader:Uv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fv extends ss{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new Nv,p=t.getContextAttributes();let m=null,x=null;const v=[],b=[],A=new Ne;let w=null;const M=new kt;M.layers.enable(1),M.viewport=new qe;const C=new kt;C.layers.enable(2),C.viewport=new qe;const D=[M,C],y=new Lv;y.layers.enable(1),y.layers.enable(2);let E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=v[q];return Q===void 0&&(Q=new Yo,v[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=v[q];return Q===void 0&&(Q=new Yo,v[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=v[q];return Q===void 0&&(Q=new Yo,v[q]=Q),Q.getHandSpace()};function F(q){const Q=b.indexOf(q.inputSource);if(Q===-1)return;const me=v[Q];me!==void 0&&(me.update(q.inputSource,q.frame,l||a),me.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",j);for(let q=0;q<v.length;q++){const Q=b[q];Q!==null&&(b[q]=null,v[q].disconnect(Q))}E=null,B=null,_.reset(),e.setRenderTarget(m),f=null,d=null,u=null,i=null,x=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",j),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new is(f.framebufferWidth,f.framebufferHeight,{format:gn,type:In,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,me=null,he=null;p.depth&&(he=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?zs:Cs,me=p.stencil?ks:ns);const Re={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new is(d.textureWidth,d.textureHeight,{format:gn,type:In,depthTexture:new qd(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let Q=0;Q<q.removed.length;Q++){const me=q.removed[Q],he=b.indexOf(me);he>=0&&(b[he]=null,v[he].disconnect(me))}for(let Q=0;Q<q.added.length;Q++){const me=q.added[Q];let he=b.indexOf(me);if(he===-1){for(let ye=0;ye<v.length;ye++)if(ye>=b.length){b.push(me),he=ye;break}else if(b[ye]===null){b[ye]=me,he=ye;break}if(he===-1)break}const Re=v[he];Re&&Re.connect(me)}}const O=new L,W=new L;function H(q,Q,me){O.setFromMatrixPosition(Q.matrixWorld),W.setFromMatrixPosition(me.matrixWorld);const he=O.distanceTo(W),Re=Q.projectionMatrix.elements,ye=me.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),tt=Re[14]/(Re[10]+1),ze=(Re[9]+1)/Re[5],P=(Re[9]-1)/Re[5],Jt=(Re[8]-1)/Re[0],Oe=(ye[8]+1)/ye[0],Ve=ke*Jt,Me=ke*Oe,rt=he/(-Jt+Oe),we=rt*-Jt;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(we),q.translateZ(rt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=ke+rt,S=tt+rt,k=Ve-we,K=Me+(he-we),Z=ze*tt/S*R,Y=P*tt/S*R;q.projectionMatrix.makePerspective(k,K,Z,Y,R,S),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,me=q.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(me=_.depthFar)),y.near=C.near=M.near=Q,y.far=C.far=M.far=me,(E!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,B=y.far);const he=q.parent,Re=y.cameras;ie(y,he);for(let ye=0;ye<Re.length;ye++)ie(Re[ye],he);Re.length===2?H(y,M,C):y.projectionMatrix.copy(M.projectionMatrix),se(q,y,he)};function se(q,Q,me){me===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(me.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Gs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let le=null;function De(q,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const me=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let he=!1;me.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let ye=0;ye<me.length;ye++){const ke=me[ye];let tt=null;if(f!==null)tt=f.getViewport(ke);else{const P=u.getViewSubImage(d,ke);tt=P.viewport,ye===0&&(e.setRenderTargetTextures(x,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(x))}let ze=D[ye];ze===void 0&&(ze=new kt,ze.layers.enable(ye),ze.viewport=new qe,D[ye]=ze),ze.matrix.fromArray(ke.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(ke.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(tt.x,tt.y,tt.width,tt.height),ye===0&&(y.matrix.copy(ze.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(ze)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const ye=u.getDepthInformation(me[0]);ye&&ye.isValid&&ye.texture&&_.init(e,ye,i.renderState)}}for(let me=0;me<v.length;me++){const he=b[me],Re=v[me];he!==null&&Re!==void 0&&Re.update(he,Q,l||a)}le&&le(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const He=new jd;He.setAnimationLoop(De),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}const Gi=new Gn,Ov=new Pe;function Bv(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vd(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,x,v,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===zt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===zt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),v=x.envMap,b=x.envMapRotation;v&&(p.envMap.value=v,Gi.copy(b),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(Gi)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,x){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===zt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,v){const b=v.program;n.uniformBlockBinding(x,b)}function l(x,v){let b=i[x.id];b===void 0&&(g(x),b=h(x),i[x.id]=b,x.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(x,A);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function h(x){const v=u();x.__bindingPointIndex=v;const b=r.createBuffer(),A=x.__size,w=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,b),b}function u(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],b=x.uniforms,A=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,M=b.length;w<M;w++){const C=Array.isArray(b[w])?b[w]:[b[w]];for(let D=0,y=C.length;D<y;D++){const E=C[D];if(f(E,w,D,A)===!0){const B=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let V=0;for(let j=0;j<F.length;j++){const O=F[j],W=_(O);typeof O=="number"||typeof O=="boolean"?(E.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,B+V,E.__data)):O.isMatrix3?(E.__data[0]=O.elements[0],E.__data[1]=O.elements[1],E.__data[2]=O.elements[2],E.__data[3]=0,E.__data[4]=O.elements[3],E.__data[5]=O.elements[4],E.__data[6]=O.elements[5],E.__data[7]=0,E.__data[8]=O.elements[6],E.__data[9]=O.elements[7],E.__data[10]=O.elements[8],E.__data[11]=0):(O.toArray(E.__data,V),V+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,E.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,b,A){const w=x.value,M=v+"_"+b;if(A[M]===void 0)return typeof w=="number"||typeof w=="boolean"?A[M]=w:A[M]=w.clone(),!0;{const C=A[M];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[M]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const v=x.uniforms;let b=0;const A=16;for(let M=0,C=v.length;M<C;M++){const D=Array.isArray(v[M])?v[M]:[v[M]];for(let y=0,E=D.length;y<E;y++){const B=D[y],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,j=F.length;V<j;V++){const O=F[V],W=_(O),H=b%A,ie=H%W.boundary,se=H+ie;b+=ie,se!==0&&A-se<W.storage&&(b+=A-se),B.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=W.storage}}}const w=b%A;return w>0&&(b+=A-w),x.__size=b,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:c,update:l,dispose:m}}class zv{constructor(e={}){const{canvas:t=wm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Lt,this.toneMapping=Ri,this.toneMappingExposure=1;const v=this;let b=!1,A=0,w=0,M=null,C=-1,D=null;const y=new qe,E=new qe;let B=null;const F=new Ae(0);let V=0,j=t.width,O=t.height,W=1,H=null,ie=null;const se=new qe(0,0,j,O),le=new qe(0,0,j,O);let De=!1;const He=new Ul;let q=!1,Q=!1;const me=new Pe,he=new Pe,Re=new L,ye=new qe,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ze(){return M===null?W:1}let P=n;function Jt(T,U){return t.getContext(T,U)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ml}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",ce,!1),P===null){const U="webgl2";if(P=Jt(U,T),P===null)throw Jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Oe,Ve,Me,rt,we,R,S,k,K,Z,Y,_e,ne,ue,We,$,de,Ee,Te,fe,Be,Ce,st,I;function oe(){Oe=new X0(P),Oe.init(),Ce=new Pv(P,Oe),Ve=new k0(P,Oe,e,Ce),Me=new wv(P),Ve.reverseDepthBuffer&&Me.buffers.depth.setReversed(!0),rt=new Y0(P),we=new dv,R=new Cv(P,Oe,Me,we,Ve,Ce,rt),S=new G0(v),k=new W0(v),K=new tg(P),st=new O0(P,K),Z=new j0(P,K,rt,st),Y=new J0(P,Z,K,rt),Te=new K0(P,Ve,R),$=new z0(we),_e=new uv(v,S,k,Oe,Ve,st,$),ne=new Bv(v,we),ue=new pv,We=new xv(Oe),Ee=new F0(v,S,k,Me,Y,d,c),de=new Tv(v,Y,Ve),I=new kv(P,rt,Ve,Me),fe=new B0(P,Oe,rt),Be=new q0(P,Oe,rt),rt.programs=_e.programs,v.capabilities=Ve,v.extensions=Oe,v.properties=we,v.renderLists=ue,v.shadowMap=de,v.state=Me,v.info=rt}oe();const X=new Fv(v,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=Oe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Oe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(j,O,!1))},this.getSize=function(T){return T.set(j,O)},this.setSize=function(T,U,z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,O=U,t.width=Math.floor(T*W),t.height=Math.floor(U*W),z===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(j*W,O*W).floor()},this.setDrawingBufferSize=function(T,U,z){j=T,O=U,W=z,t.width=Math.floor(T*z),t.height=Math.floor(U*z),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,U,z,G){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,U,z,G),Me.viewport(y.copy(se).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,U,z,G){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,U,z,G),Me.scissor(E.copy(le).multiplyScalar(W).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){Me.setScissorTest(De=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,U=!0,z=!0){let G=0;if(T){let N=!1;if(M!==null){const ee=M.texture.format;N=ee===Cl||ee===Rl||ee===wl}if(N){const ee=M.texture.type,ae=ee===In||ee===ns||ee===Cr||ee===ks||ee===Tl||ee===Al,pe=Ee.getClearColor(),ge=Ee.getClearAlpha(),xe=pe.r,Se=pe.g,be=pe.b;ae?(f[0]=xe,f[1]=Se,f[2]=be,f[3]=ge,P.clearBufferuiv(P.COLOR,0,f)):(g[0]=xe,g[1]=Se,g[2]=be,g[3]=ge,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}U&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),z&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),We.dispose(),we.dispose(),S.dispose(),k.dispose(),Y.dispose(),st.dispose(),I.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",uh),X.removeEventListener("sessionend",dh),Ni.stop()};function J(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=rt.autoReset,U=de.enabled,z=de.autoUpdate,G=de.needsUpdate,N=de.type;oe(),rt.autoReset=T,de.enabled=U,de.autoUpdate=z,de.needsUpdate=G,de.type=N}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const U=T.target;U.removeEventListener("dispose",Ge),_t(U)}function _t(T){Gt(T),we.remove(T)}function Gt(T){const U=we.get(T).programs;U!==void 0&&(U.forEach(function(z){_e.releaseProgram(z)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,z,G,N,ee){U===null&&(U=ke);const ae=N.isMesh&&N.matrixWorld.determinant()<0,pe=gp(T,U,z,G,N);Me.setMaterial(G,ae);let ge=z.index,xe=1;if(G.wireframe===!0){if(ge=Z.getWireframeAttribute(z),ge===void 0)return;xe=2}const Se=z.drawRange,be=z.attributes.position;let Qe=Se.start*xe,at=(Se.start+Se.count)*xe;ee!==null&&(Qe=Math.max(Qe,ee.start*xe),at=Math.min(at,(ee.start+ee.count)*xe)),ge!==null?(Qe=Math.max(Qe,0),at=Math.min(at,ge.count)):be!=null&&(Qe=Math.max(Qe,0),at=Math.min(at,be.count));const ft=at-Qe;if(ft<0||ft===1/0)return;st.setup(N,G,pe,z,ge);let Qt,Ye=fe;if(ge!==null&&(Qt=K.get(ge),Ye=Be,Ye.setIndex(Qt)),N.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*ze()),Ye.setMode(P.LINES)):Ye.setMode(P.TRIANGLES);else if(N.isLine){let ve=G.linewidth;ve===void 0&&(ve=1),Me.setLineWidth(ve*ze()),N.isLineSegments?Ye.setMode(P.LINES):N.isLineLoop?Ye.setMode(P.LINE_LOOP):Ye.setMode(P.LINE_STRIP)}else N.isPoints?Ye.setMode(P.POINTS):N.isSprite&&Ye.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ve=N._multiDrawStarts,wt=N._multiDrawCounts,Ke=N._multiDrawCount,Sn=ge?K.get(ge).bytesPerElement:1,as=we.get(G).currentProgram.getUniforms();for(let Zt=0;Zt<Ke;Zt++)as.setValue(P,"_gl_DrawID",Zt),Ye.render(ve[Zt]/Sn,wt[Zt])}else if(N.isInstancedMesh)Ye.renderInstances(Qe,ft,N.count);else if(z.isInstancedBufferGeometry){const ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wt=Math.min(z.instanceCount,ve);Ye.renderInstances(Qe,ft,wt)}else Ye.render(Qe,ft)};function je(T,U,z){T.transparent===!0&&T.side===nn&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,Jr(T,U,z),T.side=oi,T.needsUpdate=!0,Jr(T,U,z),T.side=nn):Jr(T,U,z)}this.compile=function(T,U,z=null){z===null&&(z=T),p=We.get(z),p.init(U),x.push(p),z.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),T!==z&&T.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return T.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ee=N.material;if(ee)if(Array.isArray(ee))for(let ae=0;ae<ee.length;ae++){const pe=ee[ae];je(pe,z,N),G.add(pe)}else je(ee,z,N),G.add(ee)}),x.pop(),p=null,G},this.compileAsync=function(T,U,z=null){const G=this.compile(T,U,z);return new Promise(N=>{function ee(){if(G.forEach(function(ae){we.get(ae).currentProgram.isReady()&&G.delete(ae)}),G.size===0){N(T);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ht=null;function jn(T){Ht&&Ht(T)}function uh(){Ni.stop()}function dh(){Ni.start()}const Ni=new jd;Ni.setAnimationLoop(jn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(T){Ht=T,X.setAnimationLoop(T),T===null?Ni.stop():Ni.start()},X.addEventListener("sessionstart",uh),X.addEventListener("sessionend",dh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,U,M),p=We.get(T,x.length),p.init(U),x.push(p),he.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(he),Q=this.localClippingEnabled,q=$.init(this.clippingPlanes,Q),_=ue.get(T,m.length),_.init(),m.push(_),X.enabled===!0&&X.isPresenting===!0){const ee=v.xr.getDepthSensingMesh();ee!==null&&go(ee,U,-1/0,v.sortObjects)}go(T,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,ie),tt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,tt&&Ee.addToRenderList(_,T),this.info.render.frame++,q===!0&&$.beginShadows();const z=p.state.shadowsArray;de.render(z,T,U),q===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=_.opaque,N=_.transmissive;if(p.setupLights(),U.isArrayCamera){const ee=U.cameras;if(N.length>0)for(let ae=0,pe=ee.length;ae<pe;ae++){const ge=ee[ae];ph(G,N,T,ge)}tt&&Ee.render(T);for(let ae=0,pe=ee.length;ae<pe;ae++){const ge=ee[ae];fh(_,T,ge,ge.viewport)}}else N.length>0&&ph(G,N,T,U),tt&&Ee.render(T),fh(_,T,U);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(v,T,U),st.resetDefaultState(),C=-1,D=null,x.pop(),x.length>0?(p=x[x.length-1],q===!0&&$.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function go(T,U,z,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){G&&ye.setFromMatrixPosition(T.matrixWorld).applyMatrix4(he);const ae=Y.update(T),pe=T.material;pe.visible&&_.push(T,ae,pe,z,ye.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const ae=Y.update(T),pe=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ye.copy(T.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),ye.copy(ae.boundingSphere.center)),ye.applyMatrix4(T.matrixWorld).applyMatrix4(he)),Array.isArray(pe)){const ge=ae.groups;for(let xe=0,Se=ge.length;xe<Se;xe++){const be=ge[xe],Qe=pe[be.materialIndex];Qe&&Qe.visible&&_.push(T,ae,Qe,z,ye.z,be)}}else pe.visible&&_.push(T,ae,pe,z,ye.z,null)}}const ee=T.children;for(let ae=0,pe=ee.length;ae<pe;ae++)go(ee[ae],U,z,G)}function fh(T,U,z,G){const N=T.opaque,ee=T.transmissive,ae=T.transparent;p.setupLightsView(z),q===!0&&$.setGlobalState(v.clippingPlanes,z),G&&Me.viewport(y.copy(G)),N.length>0&&Kr(N,U,z),ee.length>0&&Kr(ee,U,z),ae.length>0&&Kr(ae,U,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function ph(T,U,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new is(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Wr:In,minFilter:ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ee=p.state.transmissionRenderTarget[G.id],ae=G.viewport||y;ee.setSize(ae.z,ae.w);const pe=v.getRenderTarget();v.setRenderTarget(ee),v.getClearColor(F),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),tt&&Ee.render(z);const ge=v.toneMapping;v.toneMapping=Ri;const xe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),q===!0&&$.setGlobalState(v.clippingPlanes,G),Kr(T,z,G),R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let be=0,Qe=U.length;be<Qe;be++){const at=U[be],ft=at.object,Qt=at.geometry,Ye=at.material,ve=at.group;if(Ye.side===nn&&ft.layers.test(G.layers)){const wt=Ye.side;Ye.side=zt,Ye.needsUpdate=!0,mh(ft,z,G,Qt,Ye,ve),Ye.side=wt,Ye.needsUpdate=!0,Se=!0}}Se===!0&&(R.updateMultisampleRenderTarget(ee),R.updateRenderTargetMipmap(ee))}v.setRenderTarget(pe),v.setClearColor(F,V),xe!==void 0&&(G.viewport=xe),v.toneMapping=ge}function Kr(T,U,z){const G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ee=T.length;N<ee;N++){const ae=T[N],pe=ae.object,ge=ae.geometry,xe=G===null?ae.material:G,Se=ae.group;pe.layers.test(z.layers)&&mh(pe,U,z,ge,xe,Se)}}function mh(T,U,z,G,N,ee){T.onBeforeRender(v,U,z,G,N,ee),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),N.onBeforeRender(v,U,z,G,T,ee),N.transparent===!0&&N.side===nn&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,v.renderBufferDirect(z,U,G,N,T,ee),N.side=oi,N.needsUpdate=!0,v.renderBufferDirect(z,U,G,N,T,ee),N.side=nn):v.renderBufferDirect(z,U,G,N,T,ee),T.onAfterRender(v,U,z,G,N,ee)}function Jr(T,U,z){U.isScene!==!0&&(U=ke);const G=we.get(T),N=p.state.lights,ee=p.state.shadowsArray,ae=N.state.version,pe=_e.getParameters(T,N.state,ee,U,z),ge=_e.getProgramCacheKey(pe);let xe=G.programs;G.environment=T.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(T.isMeshStandardMaterial?k:S).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,xe===void 0&&(T.addEventListener("dispose",Ge),xe=new Map,G.programs=xe);let Se=xe.get(ge);if(Se!==void 0){if(G.currentProgram===Se&&G.lightsStateVersion===ae)return _h(T,pe),Se}else pe.uniforms=_e.getUniforms(T),T.onBeforeCompile(pe,v),Se=_e.acquireProgram(pe,ge),xe.set(ge,Se),G.uniforms=pe.uniforms;const be=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=$.uniform),_h(T,pe),G.needsLights=bp(T),G.lightsStateVersion=ae,G.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Se,G.uniformsList=null,Se}function gh(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Ua.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function _h(T,U){const z=we.get(T);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function gp(T,U,z,G,N){U.isScene!==!0&&(U=ke),R.resetTextureUnits();const ee=U.fog,ae=G.isMeshStandardMaterial?U.environment:null,pe=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:yt,ge=(G.isMeshStandardMaterial?k:S).get(G.envMap||ae),xe=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Se=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!z.morphAttributes.position,Qe=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let ft=Ri;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(ft=v.toneMapping);const Qt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ye=Qt!==void 0?Qt.length:0,ve=we.get(G),wt=p.state.lights;if(q===!0&&(Q===!0||T!==D)){const dn=T===D&&G.id===C;$.setState(G,T,dn)}let Ke=!1;G.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==wt.state.version||ve.outputColorSpace!==pe||N.isBatchedMesh&&ve.batching===!1||!N.isBatchedMesh&&ve.batching===!0||N.isBatchedMesh&&ve.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ve.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ve.instancing===!1||!N.isInstancedMesh&&ve.instancing===!0||N.isSkinnedMesh&&ve.skinning===!1||!N.isSkinnedMesh&&ve.skinning===!0||N.isInstancedMesh&&ve.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ve.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ve.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ve.instancingMorph===!1&&N.morphTexture!==null||ve.envMap!==ge||G.fog===!0&&ve.fog!==ee||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==$.numPlanes||ve.numIntersection!==$.numIntersection)||ve.vertexAlphas!==xe||ve.vertexTangents!==Se||ve.morphTargets!==be||ve.morphNormals!==Qe||ve.morphColors!==at||ve.toneMapping!==ft||ve.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,ve.__version=G.version);let Sn=ve.currentProgram;Ke===!0&&(Sn=Jr(G,U,N));let as=!1,Zt=!1,_o=!1;const mt=Sn.getUniforms(),hi=ve.uniforms;if(Me.useProgram(Sn.program)&&(as=!0,Zt=!0,_o=!0),G.id!==C&&(C=G.id,Zt=!0),as||D!==T){Ve.reverseDepthBuffer?(me.copy(T.projectionMatrix),Cm(me),Pm(me),mt.setValue(P,"projectionMatrix",me)):mt.setValue(P,"projectionMatrix",T.projectionMatrix),mt.setValue(P,"viewMatrix",T.matrixWorldInverse);const dn=mt.map.cameraPosition;dn!==void 0&&dn.setValue(P,Re.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&mt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&mt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),D!==T&&(D=T,Zt=!0,_o=!0)}if(N.isSkinnedMesh){mt.setOptional(P,N,"bindMatrix"),mt.setOptional(P,N,"bindMatrixInverse");const dn=N.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),mt.setValue(P,"boneTexture",dn.boneTexture,R))}N.isBatchedMesh&&(mt.setOptional(P,N,"batchingTexture"),mt.setValue(P,"batchingTexture",N._matricesTexture,R),mt.setOptional(P,N,"batchingIdTexture"),mt.setValue(P,"batchingIdTexture",N._indirectTexture,R),mt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&mt.setValue(P,"batchingColorTexture",N._colorsTexture,R));const bo=z.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0)&&Te.update(N,z,Sn),(Zt||ve.receiveShadow!==N.receiveShadow)&&(ve.receiveShadow=N.receiveShadow,mt.setValue(P,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(hi.envMap.value=ge,hi.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(hi.envMapIntensity.value=U.environmentIntensity),Zt&&(mt.setValue(P,"toneMappingExposure",v.toneMappingExposure),ve.needsLights&&_p(hi,_o),ee&&G.fog===!0&&ne.refreshFogUniforms(hi,ee),ne.refreshMaterialUniforms(hi,G,W,O,p.state.transmissionRenderTarget[T.id]),Ua.upload(P,gh(ve),hi,R)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ua.upload(P,gh(ve),hi,R),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&mt.setValue(P,"center",N.center),mt.setValue(P,"modelViewMatrix",N.modelViewMatrix),mt.setValue(P,"normalMatrix",N.normalMatrix),mt.setValue(P,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const dn=G.uniformsGroups;for(let vo=0,vp=dn.length;vo<vp;vo++){const bh=dn[vo];I.update(bh,Sn),I.bind(bh,Sn)}}return Sn}function _p(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function bp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,U,z){we.get(T.texture).__webglTexture=U,we.get(T.depthTexture).__webglTexture=z;const G=we.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const z=we.get(T);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,z=0){M=T,A=U,w=z;let G=!0,N=null,ee=!1,ae=!1;if(T){const ge=we.get(T);if(ge.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(ge.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ge.__hasExternalTextures)R.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(ge.__boundDepthTexture!==be){if(be!==null&&we.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const xe=T.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);const Se=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Se[U])?N=Se[U][z]:N=Se[U],ee=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?N=we.get(T).__webglMultisampledFramebuffer:Array.isArray(Se)?N=Se[z]:N=Se,y.copy(T.viewport),E.copy(T.scissor),B=T.scissorTest}else y.copy(se).multiplyScalar(W).floor(),E.copy(le).multiplyScalar(W).floor(),B=De;if(Me.bindFramebuffer(P.FRAMEBUFFER,N)&&G&&Me.drawBuffers(T,N),Me.viewport(y),Me.scissor(E),Me.setScissorTest(B),ee){const ge=we.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,z)}else if(ae){const ge=we.get(T.texture),xe=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,ge.__webglTexture,z||0,xe)}C=-1},this.readRenderTargetPixels=function(T,U,z,G,N,ee,ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){Me.bindFramebuffer(P.FRAMEBUFFER,pe);try{const ge=T.texture,xe=ge.format,Se=ge.type;if(!Ve.textureFormatReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&z>=0&&z<=T.height-N&&P.readPixels(U,z,G,N,Ce.convert(xe),Ce.convert(Se),ee)}finally{const ge=M!==null?we.get(M).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(T,U,z,G,N,ee,ae){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ae!==void 0&&(pe=pe[ae]),pe){const ge=T.texture,xe=ge.format,Se=ge.type;if(!Ve.textureFormatReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-G&&z>=0&&z<=T.height-N){Me.bindFramebuffer(P.FRAMEBUFFER,pe);const be=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.bufferData(P.PIXEL_PACK_BUFFER,ee.byteLength,P.STREAM_READ),P.readPixels(U,z,G,N,Ce.convert(xe),Ce.convert(Se),0);const Qe=M!==null?we.get(M).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,Qe);const at=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rm(P,at,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,be),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ee),P.deleteBuffer(be),P.deleteSync(at),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,z=0){T.isTexture!==!0&&(Da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-z),N=Math.floor(T.image.width*G),ee=Math.floor(T.image.height*G),ae=U!==null?U.x:0,pe=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ae,pe,N,ee),Me.unbindTexture()},this.copyTextureToTexture=function(T,U,z=null,G=null,N=0){T.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],U=arguments[2],N=arguments[3]||0,z=null);let ee,ae,pe,ge,xe,Se;z!==null?(ee=z.max.x-z.min.x,ae=z.max.y-z.min.y,pe=z.min.x,ge=z.min.y):(ee=T.image.width,ae=T.image.height,pe=0,ge=0),G!==null?(xe=G.x,Se=G.y):(xe=0,Se=0);const be=Ce.convert(U.format),Qe=Ce.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const at=P.getParameter(P.UNPACK_ROW_LENGTH),ft=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Qt=P.getParameter(P.UNPACK_SKIP_PIXELS),Ye=P.getParameter(P.UNPACK_SKIP_ROWS),ve=P.getParameter(P.UNPACK_SKIP_IMAGES),wt=T.isCompressedTexture?T.mipmaps[N]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pe),P.pixelStorei(P.UNPACK_SKIP_ROWS,ge),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,N,xe,Se,ee,ae,be,Qe,wt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,N,xe,Se,wt.width,wt.height,be,wt.data):P.texSubImage2D(P.TEXTURE_2D,N,xe,Se,ee,ae,be,Qe,wt),P.pixelStorei(P.UNPACK_ROW_LENGTH,at),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ve),N===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,U,z=null,G=null,N=0){T.isTexture!==!0&&(Da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,G=arguments[1]||null,T=arguments[2],U=arguments[3],N=arguments[4]||0);let ee,ae,pe,ge,xe,Se,be,Qe,at;const ft=T.isCompressedTexture?T.mipmaps[N]:T.image;z!==null?(ee=z.max.x-z.min.x,ae=z.max.y-z.min.y,pe=z.max.z-z.min.z,ge=z.min.x,xe=z.min.y,Se=z.min.z):(ee=ft.width,ae=ft.height,pe=ft.depth,ge=0,xe=0,Se=0),G!==null?(be=G.x,Qe=G.y,at=G.z):(be=0,Qe=0,at=0);const Qt=Ce.convert(U.format),Ye=Ce.convert(U.type);let ve;if(U.isData3DTexture)R.setTexture3D(U,0),ve=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),ve=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const wt=P.getParameter(P.UNPACK_ROW_LENGTH),Ke=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(P.UNPACK_SKIP_PIXELS),as=P.getParameter(P.UNPACK_SKIP_ROWS),Zt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ft.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Se),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(ve,N,be,Qe,at,ee,ae,pe,Qt,Ye,ft.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(ve,N,be,Qe,at,ee,ae,pe,Qt,ft.data):P.texSubImage3D(ve,N,be,Qe,at,ee,ae,pe,Qt,Ye,ft),P.pixelStorei(P.UNPACK_ROW_LENGTH,wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ke),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,as),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt),N===0&&U.generateMipmaps&&P.generateMipmap(ve),Me.unbindTexture()},this.initRenderTarget=function(T){we.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){A=0,w=0,M=null,Me.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ll?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===ao?"display-p3":"srgb"}}class Zd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Qc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new L;class Ol{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=An(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=An(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=An(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=An(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=An(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ol(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const uu=new L,du=new qe,fu=new qe,Hv=new L,pu=new Pe,_a=new L,Ko=new Vn,mu=new Pe,Jo=new Xr;class Vv extends $e{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Sh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ko.copy(this.boundingSphere),Ko.applyMatrix4(i),e.ray.intersectsSphere(Ko)!==!1&&(mu.copy(i).invert(),Jo.copy(e.ray).applyMatrix4(mu),!(this.boundingBox!==null&&Jo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Jo)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Sh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;du.fromBufferAttribute(i.attributes.skinIndex,e),fu.fromBufferAttribute(i.attributes.skinWeight,e),uu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=fu.getComponent(s);if(a!==0){const o=du.getComponent(s);pu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Hv.copy(uu).applyMatrix4(pu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $d extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xa extends Tt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=xt,h=xt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gu=new Pe,Wv=new Pe;class Bl{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Wv;gu.multiplyMatrices(o,t[s]),gu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Bl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xa(t,e,e,gn,Rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new $d),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class tl extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ys=new Pe,_u=new Pe,ba=[],bu=new xn,Xv=new Pe,hr=new $e,ur=new Vn;class jv extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),bu.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(bu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),ur.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ys),_u.multiplyMatrices(n,ys),hr.matrixWorld=_u,hr.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){const c=ba[a];c.instanceId=s,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xa(new Float32Array(i*this.count),i,this.count,Pr,Rn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ef extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ae(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ja=new L,qa=new L,vu=new Pe,dr=new Xr,va=new Vn,Qo=new L,xu=new L;class kl extends dt{constructor(e=new Wn,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ja.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(qa);e.setAttribute("lineDistance",new ri(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(i),va.radius+=s,e.ray.intersectsSphere(va)===!1)return;vu.copy(i).invert(),dr.copy(e.ray).applyMatrix4(vu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=h.getX(_),x=h.getX(_+1),v=xa(this,e,dr,c,m,x);v&&t.push(v)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=xa(this,e,dr,c,_,p);m&&t.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=l){const m=xa(this,e,dr,c,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=xa(this,e,dr,c,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function xa(r,e,t,n,i,s){const a=r.geometry.attributes.position;if(ja.fromBufferAttribute(a,i),qa.fromBufferAttribute(a,s),t.distanceSqToSegment(ja,qa,Qo,xu)>n)return;Qo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Qo);if(!(c<e.near||c>e.far))return{distance:c,point:xu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const yu=new L,Su=new L;class qv extends kl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)yu.fromBufferAttribute(t,i),Su.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+yu.distanceTo(Su);e.setAttribute("lineDistance",new ri(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yv extends kl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class tf extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mu=new Pe,nl=new Xr,ya=new Vn,Sa=new L;class Kv extends dt{constructor(e=new Wn,t=new tf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;Mu.copy(i).invert(),nl.copy(e.ray).applyMatrix4(Mu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);Sa.fromBufferAttribute(u,p),Eu(Sa,p,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Sa.fromBufferAttribute(u,g),Eu(Sa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Eu(r,e,t,n,i,s,a){const o=nl.distanceSqToPoint(r);if(o<t){const c=new L;nl.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ur extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ud,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dn extends Ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return It(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ae(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ae(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ae(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ma(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Jv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qv(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function nf(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class qr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zv extends qr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Es,endingEnd:Es}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ts:s=e,o=2*t-n;break;case za:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ts:a=e,c=2*n-t;break;case za:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,b=f*p-f*_;for(let A=0;A!==o;++A)s[A]=m*a[h+A]+x*a[l+A]+v*a[c+A]+b*a[u+A];return s}}class sf extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}}class $v extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new $v(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case xo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return xo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Jv(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ir;class tr extends Xn{constructor(e,t,n){super(e,t,n)}}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Lr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class rf extends Xn{}rf.prototype.ValueTypeName="color";class Vs extends Xn{}Vs.prototype.ValueTypeName="number";class ex extends qr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Ws extends Xn{InterpolantFactoryMethodLinear(e){return new ex(this.times,this.values,this.getValueSize(),e)}}Ws.prototype.ValueTypeName="quaternion";Ws.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Xn{constructor(e,t,n){super(e,t,n)}}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Lr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Xn{}Xs.prototype.ValueTypeName="vector";class il{constructor(e="",t=-1,n=[],i=Pl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(nx(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const h=Qv(c);c=Tu(c,1,h),l=Tu(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Vs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const p=[],m=[];nf(f,p,m,g),p.length!==0&&_.push(new u(d,p,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let x=0;x!==d[g].morphTargets.length;++x){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Vs(".morphTargetInfluence["+_+"]",p,m))}c=f.length*a}else{const f=".bones["+t[u].name+"]";n(Xs,f+".position",d,"pos",i),n(Ws,f+".quaternion",d,"rot",i),n(Xs,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tx(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return rf;case"quaternion":return Ws;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function nx(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tx(r.type);if(r.times===void 0){const t=[],n=[];nf(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Mi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ix{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const sx=new ix;class ir{constructor(e){this.manager=e!==void 0?e:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zn={};class rx extends Error{constructor(e,t){super(e),this.response=t}}class af extends ir{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Zn[e]!==void 0){Zn[e].push({onLoad:t,onProgress:n,onError:i});return}Zn[e]=[],Zn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Zn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){x();function x(){u.read().then(({done:v,value:b})=>{if(v)m.close();else{_+=b.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let w=0,M=h.length;w<M;w++){const C=h[w];C.onProgress&&C.onProgress(A)}m.enqueue(b),x()}},v=>{m.error(v)})}}});return new Response(p)}else throw new rx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Mi.add(e,l);const h=Zn[e];delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{const h=Zn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Zn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ax extends ir{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Dr("img");function c(){h(),Mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class of extends ir{constructor(e){super(e)}load(e,t,n,i){const s=new Tt,a=new ax(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class co extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zo=new Pe,Au=new L,wu=new L;class zl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ul,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Au.setFromMatrixPosition(e.matrixWorld),t.position.copy(Au),wu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wu),t.updateMatrixWorld(),Zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends zl{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Gs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class cx extends co{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ox}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ru=new Pe,fr=new L,$o=new L;class lx extends zl{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),n.position.copy(fr),$o.copy(n.position),$o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($o),n.updateMatrixWorld(),i.makeTranslation(-fr.x,-fr.y,-fr.z),Ru.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ru)}}class cf extends co{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new lx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hx extends zl{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Na extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new hx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ux extends co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dx extends ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),s.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Mi.add(e,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(e,c),s.manager.itemStart(e)}}class fx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Cu(){return performance.now()}class px{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Ln.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;Ln.multiplyQuaternionsFlat(e,a,e,t,e,n),Ln.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Gl="\\[\\]\\.:\\/",mx=new RegExp("["+Gl+"]","g"),Hl="[^"+Gl+"]",gx="[^"+Gl.replace("\\.","")+"]",_x=/((?:WC+[\/:])*)/.source.replace("WC",Hl),bx=/(WCOD+)?/.source.replace("WCOD",gx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),xx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),yx=new RegExp("^"+_x+bx+vx+xx+"$"),Sx=["material","materials","bones","map"];class Mx{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mx,"")}static parseTrackName(e){const t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Sx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=Mx;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ex{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Es,endingEnd:Es};for(let l=0;l!==a;++l){const h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case $p:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Pl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Zp;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Jp){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ts,i.endingEnd=Ts):(e?i.endingStart=this.zeroSlopeAtStart?Ts:Es:i.endingStart=za,t?i.endingEnd=this.zeroSlopeAtEnd?Ts:Es:i.endingEnd=za)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const Tx=new Float32Array(1);class Ax extends ss{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new px(Je.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new sf(new Float32Array(2),new Float32Array(2),1,Tx),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?il.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Pl),c!==void 0){const u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const h=new Ex(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?il.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const Pu=new Pe;class wx{constructor(e,t,n=0,i=1/0){this.ray=new Xr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Dl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Pu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pu),this}intersectObject(e,t=!0,n=[]){return sl(e,this,n,t),n.sort(Lu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)sl(e[i],this,n,t);return n.sort(Lu),n}}function Lu(r,e){return r.distance-e.distance}function sl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)sl(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);var Iu="1.3.23";function lf(r,e,t){return Math.max(r,Math.min(e,t))}function Rx(r,e,t){return(1-t)*r+t*e}function Cx(r,e,t,n){return Rx(r,e,1-Math.exp(-t*n))}function Px(r,e){return(r%e+e)%e}var Lx=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=lf(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Cx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function Ix(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Dx=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ix(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},hf=class{events={};emit(r,...e){const t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}};const Ux=100/6,_i={passive:!1};function Du(r,e){return r===1?Ux:r===2?e:1}var Nx=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new hf;constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_i),this.element.addEventListener("touchstart",this.onTouchStart,_i),this.element.addEventListener("touchmove",this.onTouchMove,_i),this.element.addEventListener("touchend",this.onTouchEnd,_i)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_i),this.element.removeEventListener("touchstart",this.onTouchStart,_i),this.element.removeEventListener("touchmove",this.onTouchMove,_i),this.element.removeEventListener("touchend",this.onTouchEnd,_i)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Du(n,this.window.width),s=Du(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const Uu=r=>Math.min(1,1.001-2**(-10*r));var Fx=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new Lx;emitter=new hf;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:c,lerp:l=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:x=!0,autoRaf:v=!1,anchors:b=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:C=M,stopInertiaOnNavigate:D=!1}={}){window.lenisVersion=Iu,window.lenis||(window.lenis={}),window.lenis.version=Iu,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof c!="function"?c=Uu:typeof c=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:c,lerp:l,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:x,autoRaf:v,anchors:b,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:D},this.dimensions=new Dx(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Nx(t,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.hash.split("#")[1]}`;this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const l=this.options.prevent,h=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(g=>g instanceof HTMLElement&&(typeof l=="function"&&l?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=t;this.options.gestureOrientation==="both"?u=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(u=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const d=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:c,onComplete:l,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let d=r,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&d?.nodeType&&(g=d),g){if(this.options.wrapper!==window){const b=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?b.left:b.top}const _=g.getBoundingClientRect(),p=getComputedStyle(g),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),x=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(v)?0:v)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=lf(0,d,this.limit);if(d===this.targetScroll){c?.(this),l?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=Uu:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",c?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,c,l,h,u,d,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),a=["auto","overlay","scroll"].includes(w.overflowY),l=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;u=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,o=u>f,c=d>g,i.isScrollableX=o,i.isScrollableY=c,i.scrollWidth=u,i.scrollHeight=d,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=l,i.hasOverscrollBehaviorY=h}else o=i.isScrollableX,c=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,u=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,l=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&o||a&&c))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let p,m,x,v,b,A;if(_==="horizontal")p=Math.round(r.scrollLeft),m=u-f,x=e,v=s,b=o,A=l;else if(_==="vertical")p=Math.round(r.scrollTop),m=d-g,x=t,v=a,b=c,A=h;else return!1;return!A&&(p>=m||p<=0)?!0:(x>0?p<m:p>0)&&v&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Px(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function uf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ln={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Nr={duration:.5,overwrite:!1,delay:0},Vl,Rt,ct,bn=1e8,it=1/bn,rl=Math.PI*2,Ox=rl/4,Bx=0,df=Math.sqrt,kx=Math.cos,zx=Math.sin,At=function(e){return typeof e=="string"},pt=function(e){return typeof e=="function"},ci=function(e){return typeof e=="number"},Wl=function(e){return typeof e>"u"},Hn=function(e){return typeof e=="object"},Wt=function(e){return e!==!1},Xl=function(){return typeof window<"u"},Ea=function(e){return pt(e)||At(e)},ff=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nt=Array.isArray,Gx=/random\([^)]+\)/g,Hx=/,\s*/g,Nu=/(?:-?\.?\d|\.)+/gi,pf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ws=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ec=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mf=/[+-]=-?[.\d]+/,Vx=/[^,'"\[\]\s]+/gi,Wx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,Un,al,jl,hn={},Ya={},gf,_f=function(e){return(Ya=js(e,hn))&&Kt},ql=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fr=function(e,t){return!t&&console.warn(e)},bf=function(e,t){return e&&(hn[e]=t)&&Ya&&(Ya[e]=t)||hn},Or=function(){return 0},Xx={suppressEvents:!0,isStart:!0,kill:!1},Fa={suppressEvents:!0,kill:!1},jx={suppressEvents:!0},Yl={},Ci=[],ol={},vf,tn={},tc={},Fu=30,Oa=[],Kl="",Jl=function(e){var t=e[0],n,i;if(Hn(t)||pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Oa.length;i--&&!Oa[i].targetTest(t););n=Oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gf(e[i],n)))||e.splice(i,1);return e},Zi=function(e){return e._gsap||Jl(vn(e))[0]._gsap},xf=function(e,t,n){return(n=e[t])&&pt(n)?e[t]():Wl(n)&&e.getAttribute&&e.getAttribute(t)||n},Xt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},lt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},qx=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ka=function(){var e=Ci.length,t=Ci.slice(0),n,i;for(ol={},Ci.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ql=function(e){return!!(e._initted||e._startAt||e.add)},yf=function(e,t,n,i){Ci.length&&!Rt&&Ka(),e.render(t,n,!!(Rt&&t<0&&Ql(e))),Ci.length&&!Rt&&Ka()},Sf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Vx).length<2?t:At(e)?e.trim():e},Mf=function(e){return e},un=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},js=function(e,t){for(var n in t)e[n]=t[n];return e},Ou=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Hn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ja=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Er=function(e){var t=e.parent||ht,n=e.keyframes?Yx(Nt(e.keyframes)):un;if(Wt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Kx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ef=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},lo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Li=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$i=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Jx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},cl=function(e,t,n,i){return e._startAt&&(Rt?e._startAt.revert(Fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Qx=function r(e){return!e||e._ts&&r(e.parent)},Bu=function(e){return e._repeat?qs(e._tTime,e=e.duration()+e._rDelay)*e:0},qs=function(e,t){var n=Math.floor(e=lt(e/t));return e&&n===e?n-1:n},Qa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ho=function(e){return e._end=lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},uo=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ho(e),n._dirty||$i(n,e)),e},Tf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Qa(e.rawTime(),t),(!t._dur||Yr(0,t.totalDuration(),n)-t._tTime>it)&&t.render(n,!0)),$i(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-it}},On=function(e,t,n,i){return t.parent&&Li(t),t._start=lt((ci(n)?n:n||e!==ht?pn(e,n,t):e._time)+t._delay),t._end=lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ef(e,t,"_first","_last",e._sort?"_start":0),ll(t)||(e._recent=t),i||Tf(e,t),e._ts<0&&uo(e,e._tTime),e},Af=function(e,t){return(hn.ScrollTrigger||ql("scrollTrigger",t))&&hn.ScrollTrigger.create(t,e)},wf=function(e,t,n,i,s){if($l(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Rt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vf!==rn.frame)return Ci.push(e),e._lazy=[s,i],1},Zx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ll=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},$x=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Zx(e)&&!(!e._initted&&ll(e))||(e._ts<0||e._dp._ts<0)&&!ll(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=Yr(0,e._tDur,t),h=qs(c,o),e._yoyo&&h&1&&(a=1-a),h!==qs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Rt||i||e._zTime===it||!t&&e._zTime){if(!e._initted&&wf(e,t,i,n,c))return;for(u=e._zTime,e._zTime=t||(n?it:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&cl(e,t,n,!0),e._onUpdate&&!n&&an(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&an(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Li(e,1),!n&&!Rt&&(an(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ey=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ys=function(e,t,n,i){var s=e._repeat,a=lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&uo(e,e._tTime=e._tDur*o),e.parent&&ho(e),n||$i(e.parent,e),e},ku=function(e){return e instanceof Vt?$i(e):Ys(e,e._dur)},ty={_start:0,endTime:Or,totalDuration:Or},pn=function r(e,t,n){var i=e.labels,s=e._recent||ty,a=e.duration()>=bn?s.endTime(!1):e._dur,o,c,l;return At(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Nt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Tr=function(e,t,n){var i=ci(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Wt(c.vars.inherit)&&c.parent;a.immediateRender=Wt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new vt(t[0],a,t[s+1])},Ui=function(e,t){return e||e===0?t(e):t},Yr=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!At(e)||!(t=Wx.exec(e))?"":t[1]},ny=function(e,t,n){return Ui(n,function(i){return Yr(e,t,i)})},hl=[].slice,Rf=function(e,t){return e&&Hn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Hn(e[0]))&&!e.nodeType&&e!==Un},iy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return At(i)&&!t||Rf(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(e,t,n){return ct&&!t&&ct.selector?ct.selector(e):At(e)&&!n&&(al||!Ks())?hl.call((t||jl).querySelectorAll(e),0):Nt(e)?iy(e,n):Rf(e)?hl.call(e,0):e?[e]:[]},ul=function(e){return e=vn(e)[0]||Fr("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vn(t,n.querySelectorAll?n:n===e?Fr("Invalid scope")||jl.createElement("div"):e)}},Cf=function(e){return e.sort(function(){return .5-Math.random()})},Pf=function(e){if(pt(e))return e;var t=Hn(e)?e:{each:e},n=es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,h=i,u=i;return At(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||t).length,p=a[_],m,x,v,b,A,w,M,C,D;if(!p){if(D=t.grid==="auto"?0:(t.grid||[1,bn])[1],!D){for(M=-bn;M<(M=g[D++].getBoundingClientRect().left)&&D<_;);D<_&&D--}for(p=a[_]=[],m=c?Math.min(D,_)*h-.5:i%D,x=D===bn?0:c?_*u/D-.5:i/D|0,M=0,C=bn,w=0;w<_;w++)v=w%D-m,b=x-(w/D|0),p[w]=A=l?Math.abs(l==="y"?b:v):df(v*v+b*b),A>M&&(M=A),A<C&&(C=A);i==="random"&&Cf(p),p.max=M-C,p.min=C,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(D>_?_-1:l?l==="y"?_/D:D:Math.max(D,_/D))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Dt(t.amount||t.each)||0,n=n&&_<0?gy(n):n}return _=(p[d]-p.min)/p.max||0,lt(p.b+(n?n(_):_)*p.v)+p.u}},dl=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ci(n)?0:Dt(n))}},Lf=function(e,t){var n=Nt(e),i,s;return!n&&Hn(e)&&(i=n=e.radius||bn,e.values?(e=vn(e.values),(s=!ci(e[0]))&&(i*=i)):e=dl(e.increment)),Ui(t,n?pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=bn,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-c,d=d*d+f*f):d=Math.abs(e[u]-o),d<l&&(l=d,h=u);return h=!i||l<=i?e[h]:a,s||h===a||ci(a)?h:h+Dt(a)}:dl(e))},If=function(e,t,n,i){return Ui(Nt(e)?!t:n===!0?!!(n=0):!i,function(){return Nt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},sy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},ry=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},ay=function(e,t,n){return Uf(e,t,0,1,n)},Df=function(e,t,n){return Ui(n,function(i){return e[~~t(i)]})},oy=function r(e,t,n){var i=t-e;return Nt(e)?Df(e,r(0,e.length),t):Ui(n,function(s){return(i+(s-e)%i)%i+e})},cy=function r(e,t,n){var i=t-e,s=i*2;return Nt(e)?Df(e,r(0,e.length-1),t):Ui(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Br=function(e){return e.replace(Gx,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Hx);return If(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Uf=function(e,t,n,i,s){var a=t-e,o=i-n;return Ui(s,function(c){return n+((c-e)/a*o||0)})},ly=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=At(e),o={},c,l,h,u,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Nt(e)&&!Nt(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(r(e[l-1],e[l]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=t}else i||(e=js(Nt(e)?[]:{},e));if(!h){for(c in t)Zl.call(o,e,c,"get",t[c]);s=function(g){return nh(g,o)||(a?e.p:e)}}}return Ui(n,s)},zu=function(e,t,n){var i=e.labels,s=bn,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},an=function(e,t,n){var i=e.vars,s=i[t],a=ct,o=e._ctx,c,l,h;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&Ci.length&&Ka(),o&&(ct=o),h=c?s.apply(l,c):s.call(l),ct=a,h},vr=function(e){return Li(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Rt),e.progress()<1&&an(e,"onInterrupt"),e},Rs,Nf=[],Ff=function(e){if(e)if(e=!e.name&&e.default||e,Xl()||e.headless){var t=e.name,n=pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Or,render:nh,add:Zl,kill:Ay,modifier:Ty,rawVars:0},a={targetTest:0,get:0,getSetter:th,aliases:{},register:0};if(Ks(),e!==i){if(tn[t])return;un(i,un(Ja(e,s),a)),js(i.prototype,js(s,Ja(e,a))),tn[i.prop=t]=i,e.targetTest&&(Oa.push(i),Yl[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bf(t,i),e.register&&e.register(Kt,i,jt)}else Nf.push(e)},nt=255,xr={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},nc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*nt+.5|0},Of=function(e,t,n){var i=e?ci(e)?[e>>16,e>>8&nt,e&nt]:0:xr.black,s,a,o,c,l,h,u,d,f,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xr[e])i=xr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&nt,i&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Nu),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=nc(c+1/3,s,a),i[1]=nc(c,s,a),i[2]=nc(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(pf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nu)||xr.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/nt,a=i[1]/nt,o=i[2]/nt,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Bf=function(e){var t=[],n=[],i=-1;return e.split(Pi).forEach(function(s){var a=s.match(ws)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Gu=function(e,t,n){var i="",s=(e+i).match(Pi),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Of(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Bf(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(Pi,"1").split(ws),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!l)for(l=e.split(Pi),u=l.length-1;o<u;o++)i+=l[o]+s[o];return i+l[u]},Pi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),hy=/hsl[a]?\(/,kf=function(e){var t=e.join(" "),n;if(Pi.lastIndex=0,Pi.test(t))return n=hy.test(t),e[1]=Gu(e[1],n),e[0]=Gu(e[0],n,Bf(e[1])),!0},kr,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,h,u,d,f,g=function _(p){var m=r()-i,x=p===!0,v,b,A,w;if((m>e||m<0)&&(n+=m-t),i+=m,A=i-n,v=A-a,(v>0||x)&&(w=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=v+(v>=s?4:s-v),b=1),x||(c=l(_)),b)for(f=0;f<o.length;f++)o[f](A,d,w,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){gf&&(!al&&Xl()&&(Un=al=window,jl=Un.document||{},hn.gsap=Kt,(Un.gsapVersions||(Un.gsapVersions=[])).push(Kt.version),_f(Ya||Un.GreenSockGlobals||!Un.gsap&&Un||{}),Nf.forEach(Ff)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},kr=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),kr=0,l=Or},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=u.time*1e3+s},add:function(p,m,x){var v=m?function(b,A,w,M){p(b,A,w,M),u.remove(v)}:p;return u.remove(p),o[x?"unshift":"push"](v),Ks(),v},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},u}(),Ks=function(){return!kr&&rn.wake()},Fe={},uy=/^[\d.\-M][\d.\-,\s]/,dy=/["']/g,fy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(dy,"").trim():+l,i=c.substr(o+1).trim();return t},py=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},my=function(e){var t=(e+"").split("("),n=Fe[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[fy(t[1])]:py(e).split(",").map(Sf)):Fe._CE&&uy.test(e)?Fe._CE("",e):n},gy=function(e){return function(t){return 1-e(1-t)}},es=function(e,t){return e&&(pt(e)?e:Fe[e]||my(e))||t},rs=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Xt(e,function(o){Fe[o]=hn[o]=s,Fe[a=o.toLowerCase()]=n;for(var c in s)Fe[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Fe[o+"."+c]=s[c]}),s},zf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ic=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/rl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*zx((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:zf(o);return s=rl/s,c.config=function(l,h){return r(e,l,h)},c},sc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:zf(n);return i.config=function(s){return r(e,s)},i};Xt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;rs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Fe.Linear.easeNone=Fe.none=Fe.Linear.easeIn;rs("Elastic",ic("in"),ic("out"),ic());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};rs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);rs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});rs("Circ",function(r){return-(df(1-r*r)-1)});rs("Sine",function(r){return r===1?1:-kx(r*Ox)+1});rs("Back",sc("in"),sc("out"),sc());Fe.SteppedEase=Fe.steps=hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-it;return function(o){return((i*Yr(0,a,o)|0)+s)*n}}};Nr.ease=Fe["quad.out"];Xt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Kl+=r+","+r+"Params,"});var Gf=function(e,t){this.id=Bx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:xf,this.set=t?t.getSetter:th},zr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ys(this,+t.duration,1,1),this.data=t.data,ct&&(this._ctx=ct,ct.data.push(this)),kr||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ys(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ks(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(uo(this,n),!s._dp||s.parent||Tf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&On(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===it||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?qs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-it?0:this._rts,this.totalTime(Yr(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ho(this),Jx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ks(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&On(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Wt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Qa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=jx);var i=Rt;return Rt=n,Ql(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Rt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ku(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ku(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pn(this,n),Wt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wt(i)),this._dur||(this._zTime=-it),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-it)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=pt(n)?n:Mf,c=function(){var h=i.then;i.then=null,s&&s(),pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){vr(this)},r}();un(zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Vt=function(r){uf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wt(n.sortChildren),ht&&On(n.parent||ht,ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Af(ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Tr(0,arguments,this),this},t.from=function(i,s,a){return Tr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Tr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Er(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new vt(i,s,pn(this,a),1),this},t.call=function(i,s,a){return On(this,vt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new vt(i,a,pn(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,h){return a.runBackwards=1,Er(a).immediateRender=Wt(a.immediateRender),this.staggerTo(i,s,a,o,c,l,h)},t.staggerFromTo=function(i,s,a,o,c,l,h,u){return o.startAt=a,Er(o).immediateRender=Wt(o.immediateRender),this.staggerTo(i,s,o,c,l,h,u)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:lt(i),u=this._zTime<0!=i<0&&(this._initted||!l),d,f,g,_,p,m,x,v,b,A,w,M;if(this!==ht&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),d=h,b=this._start,v=this._ts,m=!v,u&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=lt(h%p),h===c?(_=this._repeat,d=l):(A=lt(h/p),_=~~A,_&&_===A&&(d=l,_--),d>l&&(d=l)),A=qs(this._tTime,p),!o&&this._tTime&&A!==_&&this._tTime-A*p-this._dur<=0&&(A=_),w&&_&1&&(d=l-d,M=1),_!==A&&!this._lock){var C=w&&A&1,D=C===(w&&_&1);if(_<A&&(C=!C),o=C?0:h%l?l:h,this._lock=1,this.render(o||(M?0:lt(_*p)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&an(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,A=_),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,D&&(this._lock=2,o=C?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=ey(this,lt(o),lt(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!s&&!A&&(an(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=-it);break}}f=g}else{f=this._last;for(var y=i<0?i:d;f;){if(g=f._prev,(f._act||y<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,a||Rt&&Ql(f)),d!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=y?-it:it);break}}f=g}}if(x&&!s&&(this.pause(),x.render(d>=o?0:-it)._zTime=d>=o?1:-1,this._ts))return this._start=b,ho(this),this.render(i,s,a);this._onUpdate&&!s&&an(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Li(this,1),!s&&!(i<0&&!o)&&(h||o||!c)&&(an(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ci(s)||(s=pn(this,s,i)),!(i instanceof zr)){if(Nt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(At(i))return this.addLabel(i,s);if(pt(i))i=vt.delayedCall(0,i);else return this}return this!==i?On(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bn);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof vt?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return At(i)?this.removeLabel(i):pt(i)?this.killTweensOf(i):(i.parent===this&&lo(this,i),i===this._recent&&(this._recent=this._last),$i(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=lt(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=vt.delayedCall(0,s||Or,a);return o.data="isPause",this._hasPause=1,On(this,o,pn(this,i))},t.removePause=function(i){var s=this._first;for(i=pn(this,i);s;)s._start===i&&s.data==="isPause"&&Li(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Ei!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=vn(i),c=this._first,l=ci(s),h;c;)c instanceof vt?qx(c._targets,o)&&(l?(!Ei||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=pn(a,i),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,g=vt.to(a,un({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Ys(g,p,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,un({startAt:{time:pn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),zu(this,pn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),zu(this,pn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return $i(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$i(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=bn,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,On(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=lt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Ys(a,a===ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(ht._ts&&(yf(ht,Qa(i,ht)),vf=rn.frame),rn.frame>=Fu){Fu+=ln.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&ln.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(zr);un(Vt.prototype,{_lock:0,_hasPause:0,_forcing:0});var _y=function(e,t,n,i,s,a,o){var c=new jt(this._pt,e,t,0,1,qf,null,s),l=0,h=0,u,d,f,g,_,p,m,x;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Br(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),d=n.match(ec)||[];u=ec.exec(i);)g=u[0],_=i.substring(l,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(p=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Ls(p,g)-p:parseFloat(g)-p,m:f&&f<4?Math.round:0},l=ec.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(mf.test(i)||m)&&(c.e=0),this._pt=c,c},Zl=function(e,t,n,i,s,a,o,c,l,h){pt(i)&&(i=i(s||0,e,a));var u=e[t],d=n!=="get"?n:pt(u)?l?e[t.indexOf("set")||!pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,f=pt(u)?l?Sy:Xf:eh,g;if(At(i)&&(~i.indexOf("random(")&&(i=Br(i)),i.charAt(1)==="="&&(g=Ls(d,i)+(Dt(d)||0),(g||g===0)&&(i=g))),!h||d!==i||fl)return!isNaN(d*i)&&i!==""?(g=new jt(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?Ey:jf,0,f),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!u&&!(t in e)&&ql(t,i),_y.call(this,e,t,d,i,f,c||ln.stringFilter,l))},by=function(e,t,n,i,s){if(pt(e)&&(e=Ar(e,s,t,n,i)),!Hn(e)||e.style&&e.nodeType||Nt(e)||ff(e))return At(e)?Ar(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ar(e[o],s,t,n,i);return a},Hf=function(e,t,n,i,s,a){var o,c,l,h;if(tn[e]&&(o=new tn[e]).init(s,o.rawVars?t[e]:by(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new jt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Rs))for(l=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Ei,fl,$l=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!Vl,b=e.timeline,A=i.easeReverse||u,w,M,C,D,y,E,B,F,V,j,O,W,H;if(b&&(!d||!s)&&(s="none"),e._ease=es(s,Nr.ease),e._rEase=A&&(es(A)||e._ease),e._from=!b&&!!i.runBackwards,e._from&&(e.ratio=1),!b||d&&!i.stagger){if(F=p[0]?Zi(p[0]).harness:0,W=F&&i[F.prop],w=Ja(i,Yl),_&&(_._zTime<0&&_.progress(1),t<0&&h&&o&&!f?_.render(-1,!0):_.revert(h&&g?Fa:Xx),_._lazy=0),a){if(Li(e._startAt=vt.set(p,un({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Wt(c),startAt:null,delay:0,onUpdate:l&&function(){return an(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt||!o&&!f)&&e._startAt.revert(Fa),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!_){if(t&&(o=!1),C=un({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Wt(c),immediateRender:o,stagger:0,parent:m},w),W&&(C[F.prop]=W),Li(e._startAt=vt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Rt?e._startAt.revert(Fa):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,it,it);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&Wt(c)||c&&!g,M=0;M<p.length;M++){if(y=p[M],B=y._gsap||Jl(p)[M]._gsap,e._ptLookup[M]=j={},ol[B.id]&&Ci.length&&Ka(),O=x===p?M:x.indexOf(y),F&&(V=new F).init(y,W||w,e,O,x)!==!1&&(e._pt=D=new jt(e._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ie){j[ie]=D}),V.priority&&(E=1)),!F||W)for(C in w)tn[C]&&(V=Hf(C,w,e,O,y,x))?V.priority&&(E=1):j[C]=D=Zl.call(e,y,C,"get",w[C],O,x,0,i.stringFilter);e._op&&e._op[M]&&e.kill(y,e._op[M]),v&&e._pt&&(Ei=e,ht.killTweensOf(y,j,e.globalTime(t)),H=!e.parent,Ei=0),e._pt&&c&&(ol[B.id]=1)}E&&Yf(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!H,d&&t<=0&&b.render(bn,!0,!0)},vy=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return fl=1,e.vars[t]="+=0",$l(e,o),fl=0,c?Fr(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=gt(n)+Dt(u.e)),u.b&&(u.b=h.s+Dt(u.b))},xy=function(e,t){var n=e[0]?Zi(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=js({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},yy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Nt(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ar=function(e,t,n,i,s){return pt(e)?e.call(t,n,i,s):At(e)&&~e.indexOf("random(")?Br(e):e},Vf=Kl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Wf={};Xt(Vf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Wf[r]=1});var vt=function(r){uf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Er(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,p=c.scrollTrigger,m=i.parent||ht,x=(Nt(n)||ff(n)?ci(n[0]):"length"in i)?[n]:vn(n),v,b,A,w,M,C,D,y;if(o._targets=x.length?Jl(x):Fr("GSAP target "+n+" not found. https://gsap.com",!ln.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||d||Ea(l)||Ea(h)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(v=o.timeline=new Vt({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:x}),v.kill(),v.parent=v._dp=ei(o),v._start=0,d||Ea(l)||Ea(h)){if(w=x.length,D=d&&Pf(d),Hn(d))for(M in d)~Vf.indexOf(M)&&(y||(y={}),y[M]=d[M]);for(b=0;b<w;b++)A=Ja(i,Wf),A.stagger=0,E&&(A.easeReverse=E),y&&js(A,y),C=x[b],A.duration=+Ar(l,ei(o),b,C,x),A.delay=(+Ar(h,ei(o),b,C,x)||0)-o._delay,!d&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),v.to(C,A,D?D(b,C,x):0),v._ease=Fe.none;v.duration()?l=h=0:o.timeline=0}else if(g){Er(un(v.vars.defaults,{ease:"none"})),v._ease=es(g.ease||i.ease||"none");var B=0,F,V,j;if(Nt(g))g.forEach(function(O){return v.to(x,O,">")}),v.duration();else{A={};for(M in g)M==="ease"||M==="easeEach"||yy(M,g[M],A,g.easeEach);for(M in A)for(F=A[M].sort(function(O,W){return O.t-W.t}),B=0,b=0;b<F.length;b++)V=F[b],j={ease:V.e,duration:(V.t-(b?F[b-1].t:0))/100*l},j[M]=V.v,v.to(x,j,B),B+=j.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||o.duration(l=v.duration())}else o.timeline=0;return f===!0&&!Vl&&(Ei=ei(o),ht.killTweensOf(x),Ei=0),On(m,ei(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!g&&o._start===lt(m._time)&&Wt(u)&&Qx(ei(o))&&m.data!=="nested")&&(o._tTime=-it,o.render(Math.max(0,-h)||0)),p&&Af(ei(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-it&&!h?c:i<it?0:i,d,f,g,_,p,m,x,v;if(!l)$x(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,a);if(d=lt(u%_),u===c?(g=this._repeat,d=l):(p=lt(u/_),g=~~p,g&&g===p?(d=l,g--):d>l&&(d=l)),m=this._yoyo&&g&1,m&&(d=l-d),p=qs(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=u,this;g!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(lt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(wf(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var b=d<o;if(b!==this._inv){var A=b?o:l-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(b?-1:1)/A:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(d/l);if(this._from&&(this.ratio=x=1-x),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!p&&(an(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&cl(this,i,s,a),an(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&an(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&cl(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!s&&!(h&&!o)&&(u||o||m)&&(an(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){kr||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$l(this,l),h=this._ease(l/this._dur),vy(this,i,s,a,o,h,l,c)?this.resetTo(i,s,a,o,1):(uo(this,0),this.parent||Ef(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?vr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Rt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ei&&Ei.vars.overwrite!==!0)._first||vr(this),this.parent&&a!==this.timeline.totalDuration()&&Ys(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?vn(i):o,l=this._ptLookup,h=this._pt,u,d,f,g,_,p,m;if((!s||s==="all")&&Kx(o,c))return s==="all"&&(this._pt=0),vr(this);for(u=this._op=this._op||[],s!=="all"&&(At(s)&&(_={},Xt(s,function(x){return _[x]=1}),s=_),s=xy(o,s)),m=o.length;m--;)if(~c.indexOf(o[m])){d=l[m],s==="all"?(u[m]=s,g=d,f={}):(f=u[m]=u[m]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&lo(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&vr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Tr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Tr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return ht.killTweensOf(i,s,a)},e}(zr);un(vt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xt("staggerTo,staggerFrom,staggerFromTo",function(r){vt[r]=function(){var e=new Vt,t=hl.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var eh=function(e,t,n){return e[t]=n},Xf=function(e,t,n){return e[t](n)},Sy=function(e,t,n,i){return e[t](i.fp,n)},My=function(e,t,n){return e.setAttribute(t,n)},th=function(e,t){return pt(e[t])?Xf:Wl(e[t])&&e.setAttribute?My:eh},jf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ey=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qf=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ty=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Ay=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?lo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},wy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yf=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},jt=function(){function r(t,n,i,s,a,o,c,l,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||jf,this.d=c||this,this.set=l||eh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=wy,this.m=n,this.mt=s,this.tween=i},r}();Xt(Kl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Yl[r]=1});hn.TweenMax=hn.TweenLite=vt;hn.TimelineLite=hn.TimelineMax=Vt;ht=new Vt({sortChildren:!1,defaults:Nr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ln.stringFilter=kf;var ts=[],Ba={},Ry=[],Hu=0,Cy=0,rc=function(e){return(Ba[e]||Ry).map(function(t){return t()})},pl=function(){var e=Date.now(),t=[];e-Hu>2&&(rc("matchMediaInit"),ts.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Un.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),rc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Hu=e,rc("matchMedia"))},Kf=function(){function r(t,n){this.selector=n&&ul(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Cy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){pt(n)&&(s=i,i=n,n=pt);var a=this,o=function(){var l=ct,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=ul(s)),ct=a,u=i.apply(a,arguments),pt(u)&&a._r.push(u),ct=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===pt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=ct;ct=null,n(this),ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof vt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Vt?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof vt)&&l.revert&&l.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ts.length;a--;)ts[a].id===this.id&&ts.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Py=function(){function r(t){this.contexts=[],this.scope=t,ct&&ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Hn(n)||(n={matches:n});var a=new Kf(0,s||this.scope),o=a.conditions={},c,l,h;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=Un.matchMedia(n[l]),c&&(ts.indexOf(a)<0&&ts.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(pl):c.addEventListener("change",pl)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Za={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Ff(i)})},timeline:function(e){return new Vt(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,n,i){At(e)&&(e=vn(e)[0]);var s=Zi(e||{}).get,a=n?Mf:Sf;return n==="native"&&(n=""),e&&(t?a((tn[t]&&tn[t].get||s)(e,t,n,i)):function(o,c,l){return a((tn[o]&&tn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=vn(e),e.length>1){var i=e.map(function(h){return Kt.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var a=tn[t],o=Zi(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;Rs._pt=0,u.init(e,n?h+n:h,Rs,0,[e]),u.render(1,u),Rs._pt&&nh(1,Rs)}:o.set(e,c);return a?l:function(h){return l(e,c,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,s=Kt.to(e,un((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,Nr.ease)),Ou(Nr,e||{})},config:function(e){return Ou(ln,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!hn[o]&&Fr(t+" effect requires "+o+" plugin.")}),tc[t]=function(o,c,l){return n(vn(o),un(c||{},s),l)},a&&(Vt.prototype[t]=function(o,c,l){return this.add(tc[t](o,Hn(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Fe[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):Fe},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Vt(e),i,s;for(n.smoothChildTiming=Wt(e.smoothChildTiming),ht.remove(n),n._dp=0,n._time=n._tTime=ht._time,i=ht._first;i;)s=i._next,(t||!(!i._dur&&i instanceof vt&&i.vars.onComplete===i._targets[0]))&&On(n,i,i._start-i._delay),i=s;return On(ht,n,0),n},context:function(e,t){return e?new Kf(e,t):ct},matchMedia:function(e){return new Py(e)},matchMediaRefresh:function(){return ts.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||pl()},addEventListener:function(e,t){var n=Ba[e]||(Ba[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ba[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:oy,wrapYoyo:cy,distribute:Pf,random:If,snap:Lf,normalize:ay,getUnit:Dt,clamp:ny,splitColor:Of,toArray:vn,selector:ul,mapRange:Uf,pipe:sy,unitize:ry,interpolate:ly,shuffle:Cf},install:_f,effects:tc,ticker:rn,updateRoot:Vt.updateRoot,plugins:tn,globalTimeline:ht,core:{PropTween:jt,globals:bf,Tween:vt,Timeline:Vt,Animation:zr,getCache:Zi,_removeLinkedListItem:lo,reverting:function(){return Rt},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return Vl=e}}};Xt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Za[r]=vt[r]});rn.add(Vt.updateRoot);Rs=Za.to({},{duration:0});var Ly=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Iy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ly(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},ac=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(At(s)&&(c={},Xt(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Iy(o,s)}}}},Kt=Za.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Rt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ac("roundProps",dl),ac("modifiers"),ac("snap",Lf))||Za;vt.version=Vt.version=Kt.version="3.15.0";gf=1;Xl()&&Ks();Fe.Power0;Fe.Power1;Fe.Power2;Fe.Power3;Fe.Power4;Fe.Linear;Fe.Quad;Fe.Cubic;Fe.Quart;Fe.Quint;Fe.Strong;Fe.Elastic;Fe.Back;Fe.SteppedEase;Fe.Bounce;Fe.Sine;Fe.Expo;Fe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Vu,Ti,Is,ih,Ji,Wu,sh,Dy=function(){return typeof window<"u"},li={},qi=180/Math.PI,Ds=Math.PI/180,Ss=Math.atan2,Xu=1e8,rh=/([A-Z])/g,Uy=/(left|right|width|margin|padding|x)/i,Ny=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ml=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Fy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Oy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},By=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ky=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qf=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},zy=function(e,t,n){return e.style[t]=n},Gy=function(e,t,n){return e.style.setProperty(t,n)},Hy=function(e,t,n){return e._gsap[t]=n},Vy=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Wy=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Xy=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},ut="transform",qt=ut+"Origin",jy=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in li&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Bn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ni(i,o)}):this.tfm[e]=a.x?a[e]:ni(i,e),e===qt&&(this.tfm.zOrigin=a.zOrigin);else return Bn.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(ut)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qt,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},Zf=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sh(),(!s||!s.isStart)&&!n[ut]&&(Zf(n),i.zOrigin&&n[qt]&&(n[qt]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$f=function(e,t){var n={target:e,props:[],revert:qy,save:jy};return e._gsap||Kt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ep,gl=function(e,t){var n=Ti.createElementNS?Ti.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ti.createElement(e);return n&&n.style?n:Ti.createElement(e)},on=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Js(t)||t,1)||""},ju="O,Moz,ms,Ms,Webkit".split(","),Js=function(e,t,n){var i=t||Ji,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(ju[a]+e in s););return a<0?null:(a===3?"ms":a>=0?ju[a]:"")+e},_l=function(){Dy()&&window.document&&(Vu=window,Ti=Vu.document,Is=Ti.documentElement,Ji=gl("div")||{style:{}},gl("div"),ut=Js(ut),qt=ut+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ep=!!Js("perspective"),sh=Kt.core.reverting,ih=1)},qu=function(e){var t=e.ownerSVGElement,n=gl("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},Yu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tp=function(e){var t,n;try{t=e.getBBox()}catch{t=qu(e),n=1}return t&&(t.width||t.height)||n||(t=qu(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yu(e,["x","cx","x1"])||0,y:+Yu(e,["y","cy","y1"])||0,width:0,height:0}:t},np=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tp(e))},Ii=function(e,t){if(t){var n=e.style,i;t in li&&t!==qt&&(t=ut),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rh,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,i,s,a){var o=new jt(e._pt,t,n,0,1,a?Qf:Jf);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ku={deg:1,rad:1,turn:1},Yy={grid:1,flex:1},Di=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ji.style,c=Uy.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,p,m;if(i===a||!s||Ku[i]||Ku[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),m=e.getCTM&&np(e),(f||a==="%")&&(li[t]||~t.indexOf("adius")))return g=m?e.getBBox()[c?"width":"height"]:e[h],gt(f?s/g*u:s/100*g);if(o[c?"width":"height"]=u+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Ti||!_.appendChild)&&(_=Ti.body),p=_._gsap,p&&f&&p.width&&c&&p.time===rn.time&&!p.uncache)return gt(s/p.width*u);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,g=e[h],x?e.style[t]=x:Ii(e,t)}else(f||a==="%")&&!Yy[on(_,"display")]&&(o.position=on(e,"position")),_===e&&(o.position="static"),_.appendChild(Ji),g=Ji[h],_.removeChild(Ji),o.position="absolute";return c&&f&&(p=Zi(_),p.time=rn.time,p.width=_[h]),gt(d?g*s/u:g&&s?u/g*s:0)},ni=function(e,t,n,i){var s;return ih||_l(),t in Bn&&t!=="transform"&&(t=Bn[t],~t.indexOf(",")&&(t=t.split(",")[0])),li[t]&&t!=="transform"?(s=Hr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:eo(on(e,qt))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=$a[t]&&$a[t](e,t,n)||on(e,t)||xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Di(e,t,s,n)+n:s},Ky=function(e,t,n,i){if(!n||n==="none"){var s=Js(t,e,1),a=s&&on(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=on(e,"borderTopColor"))}var o=new jt(this._pt,e.style,t,0,1,qf),c=0,l=0,h,u,d,f,g,_,p,m,x,v,b,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=on(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=on(e,t)||i,_?e.style[t]=_:Ii(e,t)),h=[n,i],kf(h),n=h[0],i=h[1],d=n.match(ws)||[],A=i.match(ws)||[],A.length){for(;u=ws.exec(i);)p=u[0],x=i.substring(c,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(_=d[l++]||"")&&(f=parseFloat(_)||0,b=_.substr((f+"").length),p.charAt(1)==="="&&(p=Ls(f,p)+b),m=parseFloat(p),v=p.substr((m+"").length),c=ws.lastIndex-v.length,v||(v=v||ln.units[t]||b,c===i.length&&(i+=v,o.e+=v)),b!==v&&(f=Di(e,t,_,v)||0),o._pt={_next:o._pt,p:x||l===1?x:",",s:f,c:m-f,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Qf:Jf;return mf.test(i)&&(o.e=0),this._pt=o,o},Ju={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Jy=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ju[n]||n,t[1]=Ju[i]||i,t.join(" ")},Qy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],li[o]&&(c=1,o=o==="transformOrigin"?qt:ut),Ii(n,o);c&&(Ii(n,ut),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Hr(n,1),a.uncache=1,Zf(i)))}},$a={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new jt(e._pt,t,n,0,0,Qy);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Gr=[1,0,0,1,0,0],ip={},sp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qu=function(e){var t=on(e,ut);return sp(t)?Gr:t.substr(7).match(pf).map(gt)},ah=function(e,t){var n=e._gsap||Zi(e),i=e.style,s=Qu(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Gr:s):(s===Gr&&!e.offsetParent&&e!==Is&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Is.appendChild(e)),s=Qu(e),c?i.display=c:Ii(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},bl=function(e,t,n,i,s,a){var o=e._gsap,c=s||ah(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=c[0],g=c[1],_=c[2],p=c[3],m=c[4],x=c[5],v=t.split(" "),b=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,M,C,D;n?c!==Gr&&(M=f*p-g*_)&&(C=b*(p/M)+A*(-_/M)+(_*x-p*m)/M,D=b*(-g/M)+A*(f/M)-(f*x-g*m)/M,b=C,A=D):(w=tp(e),b=w.x+(~v[0].indexOf("%")?b/100*w.width:b),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=b-l,x=A-h,o.xOffset=u+(m*f+x*_)-m,o.yOffset=d+(m*g+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=A,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[qt]="0px 0px",a&&(Ai(a,o,"xOrigin",l,b),Ai(a,o,"yOrigin",h,A),Ai(a,o,"xOffset",u,o.xOffset),Ai(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+A)},Hr=function(e,t){var n=e._gsap||new Gf(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=on(e,qt)||"0",h,u,d,f,g,_,p,m,x,v,b,A,w,M,C,D,y,E,B,F,V,j,O,W,H,ie,se,le,De,He,q,Q;return h=u=d=_=p=m=x=v=b=0,f=g=1,n.svg=!!(e.getCTM&&np(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[ut]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[ut]!=="none"?c[ut]:"")),i.scale=i.rotate=i.translate="none"),M=ah(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),l=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),bl(e,W||l,!!W||n.originIsAbsolute,n.smooth!==!1,M)),A=n.xOrigin||0,w=n.yOrigin||0,M!==Gr&&(E=M[0],B=M[1],F=M[2],V=M[3],h=j=M[4],u=O=M[5],M.length===6?(f=Math.sqrt(E*E+B*B),g=Math.sqrt(V*V+F*F),_=E||B?Ss(B,E)*qi:0,x=F||V?Ss(F,V)*qi+_:0,x&&(g*=Math.abs(Math.cos(x*Ds))),n.svg&&(h-=A-(A*E+w*F),u-=w-(A*B+w*V))):(Q=M[6],He=M[7],se=M[8],le=M[9],De=M[10],q=M[11],h=M[12],u=M[13],d=M[14],C=Ss(Q,De),p=C*qi,C&&(D=Math.cos(-C),y=Math.sin(-C),W=j*D+se*y,H=O*D+le*y,ie=Q*D+De*y,se=j*-y+se*D,le=O*-y+le*D,De=Q*-y+De*D,q=He*-y+q*D,j=W,O=H,Q=ie),C=Ss(-F,De),m=C*qi,C&&(D=Math.cos(-C),y=Math.sin(-C),W=E*D-se*y,H=B*D-le*y,ie=F*D-De*y,q=V*y+q*D,E=W,B=H,F=ie),C=Ss(B,E),_=C*qi,C&&(D=Math.cos(C),y=Math.sin(C),W=E*D+B*y,H=j*D+O*y,B=B*D-E*y,O=O*D-j*y,E=W,j=H),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),f=gt(Math.sqrt(E*E+B*B+F*F)),g=gt(Math.sqrt(O*O+Q*Q)),C=Ss(j,O),x=Math.abs(C)>2e-4?C*qi:0,b=q?1/(q<0?-q:q):0),n.svg&&(W=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sp(on(e,ut)),W&&e.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=gt(f),n.scaleY=gt(g),n.rotation=gt(_)+o,n.rotationX=gt(p)+o,n.rotationY=gt(m)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[qt]=eo(l)),n.xOffset=n.yOffset=0,n.force3D=ln.force3D,n.renderTransform=n.svg?$y:ep?rp:Zy,n.uncache=0,n},eo=function(e){return(e=e.split(" "))[0]+" "+e[1]},oc=function(e,t,n){var i=Dt(t);return gt(parseFloat(t)+parseFloat(Di(e,"x",n+"px",i)))+i},Zy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,rp(e,t)},Hi="0deg",pr="0px",Vi=") ",rp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,x=n.target,v=n.zOrigin,b="",A=m==="auto"&&e&&e!==1||m===!0;if(v&&(u!==Hi||h!==Hi)){var w=parseFloat(h)*Ds,M=Math.sin(w),C=Math.cos(w),D;w=parseFloat(u)*Ds,D=Math.cos(w),a=oc(x,a,M*D*-v),o=oc(x,o,-Math.sin(w)*-v),c=oc(x,c,C*D*-v+v)}p!==pr&&(b+="perspective("+p+Vi),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(A||a!==pr||o!==pr||c!==pr)&&(b+=c!==pr||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+Vi),l!==Hi&&(b+="rotate("+l+Vi),h!==Hi&&(b+="rotateY("+h+Vi),u!==Hi&&(b+="rotateX("+u+Vi),(d!==Hi||f!==Hi)&&(b+="skew("+d+", "+f+Vi),(g!==1||_!==1)&&(b+="scale("+g+", "+_+Vi),x.style[ut]=b||"translate(0, 0)"},$y=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,x=n.forceCSS,v=parseFloat(a),b=parseFloat(o),A,w,M,C,D;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=Ds,l*=Ds,A=Math.cos(c)*u,w=Math.sin(c)*u,M=Math.sin(c-l)*-d,C=Math.cos(c-l)*d,l&&(h*=Ds,D=Math.tan(l-h),D=Math.sqrt(1+D*D),M*=D,C*=D,h&&(D=Math.tan(h),D=Math.sqrt(1+D*D),A*=D,w*=D)),A=gt(A),w=gt(w),M=gt(M),C=gt(C)):(A=u,C=d,w=M=0),(v&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(v=Di(f,"x",a,"px"),b=Di(f,"y",o,"px")),(g||_||p||m)&&(v=gt(v+g-(g*A+_*M)+p),b=gt(b+_-(g*w+_*C)+m)),(i||s)&&(D=f.getBBox(),v=gt(v+i/100*D.width),b=gt(b+s/100*D.height)),D="matrix("+A+","+w+","+M+","+C+","+v+","+b+")",f.setAttribute("transform",D),x&&(f.style[ut]=D)},eS=function(e,t,n,i,s){var a=360,o=At(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?qi:1),l=c-i,h=i+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Xu)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Xu)%a-~~(l/a)*a)),e._pt=d=new jt(e._pt,t,n,i,l,Fy),d.e=h,d.u="deg",e._props.push(n),d},Zu=function(e,t){for(var n in t)e[n]=t[n];return e},tS=function(e,t,n){var i=Zu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,d,f,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[ut]=t,o=Hr(n,1),Ii(n,ut),n.setAttribute("transform",l)):(l=getComputedStyle(n)[ut],a[ut]=t,o=Hr(n,1),a[ut]=l);for(c in li)l=i[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=Dt(l),g=Dt(h),u=f!==g?Di(n,c,l,g):parseFloat(l),d=parseFloat(h),e._pt=new jt(e._pt,o,c,u,d-u,ml),e._pt.u=g||0,e._props.push(c));Zu(o,i)};Xt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});$a[e>1?"border"+r:r]=function(o,c,l,h,u){var d,f;if(arguments.length<4)return d=a.map(function(g){return ni(o,g,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(c,f,u)}});var ap={name:"css",register:_l,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,h,u,d,f,g,_,p,m,x,v,b,A,w,M,C,D;ih||_l(),this.styles=this.styles||$f(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(h=t[_],!(tn[_]&&Hf(_,t,n,i,e,s)))){if(f=typeof h,g=$a[_],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Br(h)),g)g(this,e,_,h,n)&&(M=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),h+="",Pi.lastIndex=0,Pi.test(l)||(p=Dt(l),m=Dt(h),m?p!==m&&(l=Di(e,_,l,m)+m):p&&(h+=p)),this.add(o,"setProperty",l,h,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(f!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],At(l)&&~l.indexOf("random(")&&(l=Br(l)),Dt(l+"")||l==="auto"||(l+=ln.units[_]||Dt(ni(e,_))||""),(l+"").charAt(1)==="="&&(l=ni(e,_))):l=ni(e,_),d=parseFloat(l),x=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in Bn&&(_==="autoAlpha"&&(d===1&&ni(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),Ai(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Bn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in li,v){if(this.styles.save(_),D=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=on(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=h,h=on(e,"perspective"),y?e.style.perspective=y:Ii(e,"perspective")}u=parseFloat(h)}if(b||(A=e._gsap,A.renderTransform&&!t.parseTransform||Hr(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,b=this._pt=new jt(this._pt,o,ut,0,1,A.renderTransform,A,0,-1),b.dep=1),_==="scale")this._pt=new jt(this._pt,A,"scaleY",A.scaleY,(x?Ls(A.scaleY,x+u):u)-A.scaleY||0,ml),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(qt,0,o[qt]),h=Jy(h),A.svg?bl(e,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==A.zOrigin&&Ai(this,A,"zOrigin",A.zOrigin,m),Ai(this,o,_,eo(l),eo(h)));continue}else if(_==="svgOrigin"){bl(e,h,1,w,0,this);continue}else if(_ in ip){eS(this,A,_,d,x?Ls(d,x+h):h);continue}else if(_==="smoothOrigin"){Ai(this,A,"smooth",A.smooth,h);continue}else if(_==="force3D"){A[_]=h;continue}else if(_==="transform"){tS(this,h,e);continue}}else _ in o||(_=Js(_)||_);if(v||(u||u===0)&&(d||d===0)&&!Ny.test(h)&&_ in o)p=(l+"").substr((d+"").length),u||(u=0),m=Dt(h)||(_ in ln.units?ln.units[_]:p),p!==m&&(d=Di(e,_,l,m)),this._pt=new jt(this._pt,v?A:o,_,d,(x?Ls(d,x+u):u)-d,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ky:ml),this._pt.u=m||0,v&&D!==h?(this._pt.b=l,this._pt.e=D,this._pt.r=By):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Oy);else if(_ in o)Ky.call(this,e,_,l,x?x+h:h);else if(_ in e)this.add(e,_,l||e[_],x?x+h:h,i,s);else if(_!=="parseTransform"){ql(_,h);continue}v||(_ in o?C.push(_,0,o[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,l||e[_])),a.push(_)}}M&&Yf(this)},render:function(e,t){if(t.tween._time||!sh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ni,aliases:Bn,getSetter:function(e,t,n){var i=Bn[t];return i&&i.indexOf(",")<0&&(t=i),t in li&&t!==qt&&(e._gsap.x||ni(e,"x"))?n&&Wu===n?t==="scale"?Vy:Hy:(Wu=n||{})&&(t==="scale"?Wy:Xy):e.style&&!Wl(e.style[t])?zy:~t.indexOf("-")?Gy:th(e,t)},core:{_removeProperty:Ii,_getMatrix:ah}};Kt.utils.checkPrefix=Js;Kt.core.getStyleSaver=$f;(function(r,e,t,n){var i=Xt(r+","+e+","+t,function(s){li[s]=1});Xt(e,function(s){ln.units[s]="deg",ip[s]=1}),Bn[i[13]]=r+","+e,Xt(n,function(s){var a=s.split(":");Bn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ln.units[r]="px"});Kt.registerPlugin(ap);var yn=Kt.registerPlugin(ap)||Kt;yn.core.Tween;function $u(r,e){if(e===em)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Jc||e===Dd){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Jc)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class nS extends ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new oS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new bS(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new aS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new yS(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Mr.extractUrlBase(e);a=Mr.resolveURL(l,this.path)}else a=Mr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new af(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===op){try{a[Ue.KHR_BINARY_GLTF]=new SS(e)}catch(u){i&&i(u);return}s=JSON.parse(a[Ue.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new NS(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ue.KHR_MATERIALS_UNLIT:a[u]=new rS;break;case Ue.KHR_DRACO_MESH_COMPRESSION:a[u]=new MS(s,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:a[u]=new ES;break;case Ue.KHR_MESH_QUANTIZATION:a[u]=new TS;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function iS(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const h=new Ae(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],yt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Na(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new cf(h),l.distance=u;break;case"spot":l=new cx(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ti(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class rS{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return Si}extendParams(e,t,n){const i=[];e.color=new Ae(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],yt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Lt))}return Promise.all(i)}}class aS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class oS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(o,o)}return Promise.all(s)}}class cS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class hS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ae(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class uS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class dS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ae().setRGB(o[0],o[1],o[2],yt),Promise.all(s)}}class fS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class pS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ae().setRGB(o[0],o[1],o[2],yt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(s)}}class mS{constructor(e){this.parser=e,this.name=Ue.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class gS{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Dn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class _S{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class bS{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xS{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class yS{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==mn.TRIANGLES&&l.mode!==mn.TRIANGLE_STRIP&&l.mode!==mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(const g of u){const _=new Pe,p=new L,m=new Ln,x=new L(1,1,1),v=new jv(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&x.fromBufferAttribute(c.SCALE,b),v.setMatrixAt(b,_.compose(p,m,x));for(const b in c)if(b==="_COLOR_0"){const A=c[b];v.instanceColor=new tl(A.array,A.itemSize,A.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);dt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const op="glTF",mr=12,ed={JSON:1313821514,BIN:5130562};class SS{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,mr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==op)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-mr,s=new DataView(e,mr);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===ed.JSON){const l=new Uint8Array(e,mr+a,o);this.content=n.decode(l)}else if(c===ed.BIN){const l=mr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class MS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=vl[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=vl[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],f=Us[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}u(f)},o,l,yt,d)})})}}class ES{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TS{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class cp extends qr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,x=1-p,v=m-d+u;for(let b=0;b!==o;b++){const A=a[_+b+o],w=a[_+b+c]*h,M=a[g+b+o],C=a[g+b]*h;s[b]=x*A+v*w+p*M+m*C}return s}}const AS=new Ln;class wS extends cp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return AS.fromArray(s).normalize().toArray(s),s}}const mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Us={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},td={9728:xt,9729:sn,9984:Md,9985:wa,9986:_r,9987:ii},nd={33071:yi,33648:ka,10497:Bs},cc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RS={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Lr},lc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function CS(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ur({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oi})),r.DefaultMaterial}function Wi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ti(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PS(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function LS(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IS(r){let e;const t=r.extensions&&r.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hc(t.attributes):e=r.indices+":"+hc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+hc(r.targets[n]);return e}function hc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function xl(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function DS(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const US=new Pe;class NS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new of(this.options.manager):this.textureLoader=new dx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new af(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Wi(s,o,i),ti(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Mr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=cc[i.type],o=Us[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ut(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=cc[i.type],l=Us[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==u){const m=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(x);v||(_=new l(o,m*f,i.count*f/h),v=new Gv(_,f/h),t.cache.add(x,v)),p=new Ol(v,c,d%f/h,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),p=new Ut(_,c,g);if(i.sparse!==void 0){const m=cc.SCALAR,x=Us[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,A=new x(a[1],v,i.sparse.count*m),w=new l(a[2],b,i.sparse.count*c);o!==null&&(p=new Ut(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let M=0,C=A.length;M<C;M++){const D=A[M];if(p.setX(D,w[M*c]),c>=2&&p.setY(D,w[M*c+1]),c>=3&&p.setZ(D,w[M*c+2]),c>=4&&p.setW(D,w[M*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=td[d.magFilter]||sn,h.minFilter=td[d.minFilter]||ii,h.wrapS=nd[d.wrapS]||Bs,h.wrapT=nd[d.wrapT]||Bs,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new Tt(_);p.needsUpdate=!0,d(p)}),t.load(Mr.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ti(u,a),u.userData.mimeType=a.mimeType||DS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new tf,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ef,kn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ur}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ue.KHR_MATERIALS_UNLIT]){const u=i[Ue.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Ae(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],yt),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=nn);const h=s.alphaMode||lc.OPAQUE;if(h===lc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Si&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Si){const u=s.emissiveFactor;o.emissive=new Ae().setRGB(u[0],u[1],u[2],yt)}return s.emissiveTexture!==void 0&&a!==Si&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Lt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),ti(u,s),t.associations.set(u,{materials:e}),s.extensions&&Wi(i,u,s),u})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return id(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=IS(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=id(new Wn,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?CS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const _=h[f],p=a[f];let m;const x=l[f];if(p.mode===mn.TRIANGLES||p.mode===mn.TRIANGLE_STRIP||p.mode===mn.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Vv(_,x):new $e(_,x),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===mn.TRIANGLE_STRIP?m.geometry=$u(m.geometry,Dd):p.mode===mn.TRIANGLE_FAN&&(m.geometry=$u(m.geometry,Jc));else if(p.mode===mn.LINES)m=new qv(_,x);else if(p.mode===mn.LINE_STRIP)m=new kl(_,x);else if(p.mode===mn.LINE_LOOP)m=new Yv(_,x);else if(p.mode===mn.POINTS)m=new Kv(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&LS(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),ti(m,s),p.extensions&&Wi(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Wi(i,u[0],s),u[0];const d=new Cn;s.extensions&&Wi(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Fd.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Nl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ti(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const d=new Pe;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bl(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,x=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",x)),l.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],g=u[2],_=u[3],p=u[4],m=[];for(let x=0,v=d.length;x<v;x++){const b=d[x],A=f[x],w=g[x],M=_[x],C=p[x];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const D=n._createAnimationTracks(b,A,w,M,C);if(D)for(let y=0;y<D.length;y++)m.push(D[y])}return new il(s,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,US)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new $d:l.length>1?h=new Cn:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),ti(h,s),s.extensions&&Wi(n,h,s),s.matrix!==void 0){const u=new Pe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Cn;n.name&&(s.name=i.createUniqueName(n.name)),ti(s,n),n.extensions&&Wi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);const l=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof kn||d instanceof Tt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];bi[s.path]===bi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(bi[s.path]){case bi.weights:l=Vs;break;case bi.rotation:l=Ws;break;case bi.position:case bi.scale:l=Xs;break;default:switch(n.itemSize){case 1:l=Vs;break;case 2:case 3:default:l=Xs;break}break}const h=i.interpolation!==void 0?RS[i.interpolation]:Ir,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+bi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=xl(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ws?wS:cp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function FS(r,e,t){const n=e.attributes,i=new xn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const h=xl(Us[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=xl(Us[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Vn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function id(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=vl[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Xe.workingColorSpace!==yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Xe.workingColorSpace}" not supported.`),ti(r,e),FS(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?PS(r,e.targets,t):r})}var OS=function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:r,s,a=WebAssembly.instantiate(o(i),{}).then(function(m){s=m.instance,s.exports.__wasm_call_ctors()});function o(m){for(var x=new Uint8Array(m.length),v=0;v<m.length;++v){var b=m.charCodeAt(v);x[v]=b>96?b-97:b>64?b-39:b+4}for(var A=0,v=0;v<m.length;++v)x[A++]=x[v]<60?n[x[v]]:(x[v]-60)*64+x[++v];return x.buffer.slice(0,A)}function c(m,x,v,b,A,w){var M=s.exports.sbrk,C=v+3&-4,D=M(C*b),y=M(A.length),E=new Uint8Array(s.exports.memory.buffer);E.set(A,y);var B=m(D,v,b,y,A.length);if(B==0&&w&&w(D,C,b),x.set(E.subarray(D,D+v*b)),M(D-M(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(m){var x={object:new Worker(m),pending:0,requests:{}};return x.object.onmessage=function(v){var b=v.data;x.pending-=b.count,x.requests[b.id][b.action](b.value),delete x.requests[b.id]},x}function g(m){for(var x="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),v=new Blob([x],{type:"text/javascript"}),b=URL.createObjectURL(v),A=0;A<m;++A)u[A]=f(b);URL.revokeObjectURL(b)}function _(m,x,v,b,A){for(var w=u[0],M=1;M<u.length;++M)u[M].pending<w.pending&&(w=u[M]);return new Promise(function(C,D){var y=new Uint8Array(v),E=d++;w.pending+=m,w.requests[E]={resolve:C,reject:D},w.object.postMessage({id:E,count:m,size:x,source:y,mode:b,filter:A},[y.buffer])})}function p(m){a.then(function(){var x=m.data;try{var v=new Uint8Array(x.count*x.size);c(s.exports[x.mode],v,x.count,x.size,x.source,s.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(b){self.postMessage({id:x.id,count:x.count,action:"reject",value:b})}})}return{ready:a,supported:!0,useWorkers:function(m){g(m)},decodeVertexBuffer:function(m,x,v,b,A){c(s.exports.meshopt_decodeVertexBuffer,m,x,v,b,s.exports[l[A]])},decodeIndexBuffer:function(m,x,v,b){c(s.exports.meshopt_decodeIndexBuffer,m,x,v,b)},decodeIndexSequence:function(m,x,v,b){c(s.exports.meshopt_decodeIndexSequence,m,x,v,b)},decodeGltfBuffer:function(m,x,v,b,A,w){c(s.exports[h[A]],m,x,v,b,s.exports[l[w]])},decodeGltfBufferAsync:function(m,x,v,b,A){return u.length>0?_(m,x,v,h[b],l[A]):a.then(function(){var w=new Uint8Array(m*x);return c(s.exports[h[b]],w,m,x,v,s.exports[l[A]]),w})}}}();class BS extends Zd{constructor(){super();const e=new $s;e.deleteAttribute("uv");const t=new Ur({side:zt}),n=new Ur,i=new cf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new $e(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new $e(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new $e(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new $e(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new $e(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new $e(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new $e(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new $e(e,Ms(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const f=new $e(e,Ms(50));f.position.set(-16.109,18.021,-8.207),f.scale.set(.1,2.425,2.751),this.add(f);const g=new $e(e,Ms(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new $e(e,Ms(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const p=new $e(e,Ms(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new $e(e,Ms(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ms(r){const e=new Si;return e.color.setScalar(r),e}const Yt=(r,e,t)=>Math.min(t,Math.max(e,r)),kS=(r,e,t)=>r+(e-r)*t;function ai(r,e,t){const n=Yt((t-r)/(e-r),0,1);return n*n*(3-2*n)}function Ta(r,e){if(e<=r[0].at)return r[0].v;if(e>=r[r.length-1].at)return r[r.length-1].v;for(let t=0;t<r.length-1;t++){const n=r[t],i=r[t+1];if(e>=n.at&&e<=i.at){const s=ai(n.at,i.at,e);return kS(n.v,i.v,s)}}return r[r.length-1].v}const sd=new L,rd=new L;function ad(r,e,t,n){if(e<=r[0].at)return n.fromArray(r[0][t]);if(e>=r[r.length-1].at)return n.fromArray(r[r.length-1][t]);for(let i=0;i<r.length-1;i++){const s=r[i],a=r[i+1];if(e>=s.at&&e<=a.at){const o=ai(s.at,a.at,e);return sd.fromArray(s[t]),rd.fromArray(a[t]),n.copy(sd).lerp(rd,o)}}return n.fromArray(r[r.length-1][t])}const yl="https://cdn.jsdelivr.net/gh/MilovanovicMatija/prime@main",zS=yl+"/models/scene.glb",od=.36,uc=.15,GS=-.24,cd=.05,HS=-.15,VS=[{at:0,pos:[0,1.12,4.4],tgt:[0,1,0]},{at:.14,pos:[0,1.12,4.4],tgt:[0,1,0]},{at:.26,pos:[0,1.12,4.3],tgt:[0,1.02,0]},{at:.36,pos:[0,1.14,4.75],tgt:[0,1.08,0]},{at:.58,pos:[0,1.14,4.75],tgt:[0,1.08,0]},{at:.66,pos:[0,1.2,4.5],tgt:[0,1.12,0]},{at:1,pos:[0,1.2,4.5],tgt:[0,1.12,0]}],WS=[{at:0,pos:[1.3,1.78,5],tgt:[1.3,1.72,0]},{at:.2,pos:[1.3,1.78,5],tgt:[1.3,1.72,0]},{at:.38,pos:[-1.3,1.78,5],tgt:[-1.3,1.72,0]},{at:.48,pos:[-1.3,1.78,5],tgt:[-1.3,1.72,0]},{at:.58,pos:[1.3,1.72,4.8],tgt:[1.3,1.66,0]},{at:.82,pos:[1.3,1.72,4.8],tgt:[1.3,1.66,0]},{at:.95,pos:[0,1.42,4.5],tgt:[0,1.35,0]},{at:1,pos:[0,1.42,4.5],tgt:[0,1.35,0]}],XS=[{at:0,v:od},{at:.14,v:od},{at:.24,v:0},{at:.32,v:0},{at:.4,v:uc},{at:.6,v:uc},{at:1,v:uc}],jS=[{at:0,v:0},{at:.14,v:0},{at:.24,v:1},{at:1,v:1}],qS=[{at:0,v:0},{at:.32,v:0},{at:.42,v:1},{at:1,v:1}],YS=[{at:0,v:0},{at:.52,v:0},{at:.64,v:1},{at:1,v:1}],Sl=28,KS=`
  attribute vec3 aBary;
  uniform vec3 uPointer;   // current cursor hit point (world) — drives the bulge head
  uniform float uRadius;   // reveal radius (world)
  uniform float uAmp;      // base lift so the grid sits just in front of the surface
  uniform float uBulge;    // extra pop-out near the cursor, tapers to 0 at the radius
  uniform float uActive;   // hover fade (= strongest trail strength)
  varying vec3 vBary;
  varying vec3 vWpos;
  flat varying float vFaceId; // faceId = vertexId/3 (overlay is non-indexed; a face's 3 verts share it)
  void main() {
    vBary = aBary;
    vec3 wpos = (modelMatrix * vec4(position, 1.0)).xyz;
    vWpos = wpos;
    vFaceId = float(gl_VertexID / 3);
    float d = distance(wpos, uPointer);
    float prox = 1.0 - smoothstep(0.0, uRadius, d);     // clean round dome from the true distance
    float lift = uAmp + uBulge * prox * prox * uActive; // closest triangles jump out most (head of the trail)
    vec3 p = position + normal * lift;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`,JS=`
  precision highp float;
  #define TRAIL_N ${Sl}
  uniform float uRadius;
  uniform float uYellow;
  uniform float uWobble;            // ragged-edge strength (warps the cutoff)
  uniform vec3 uTrail[TRAIL_N];     // recent cursor points (world)
  uniform float uTrailStr[TRAIL_N]; // their decaying strengths (1 = fresh, 0 = gone)
  uniform float uDissFront;         // finale dissolve front (world Y); reveal is cut below it
  uniform float uRipMix;            // ripple white-flash strength
  uniform float uRipStrength;       // wider-ripple power (the hovered disc stays full strength)
  uniform float uRipGlow;           // ripple look: 0 = wireframe grid, 1 = soft filled glow (no lines)
  uniform sampler2D uRipTex;        // per-face ripple brightness (R8), faceId-indexed
  uniform vec2 uRipDim;             // ripple texture size (W, H)
  varying vec3 vBary;
  varying vec3 vWpos;
  flat varying float vFaceId;
  layout(location = 0) out highp vec4 outColor; // GLSL3: no gl_FragColor, declare our own output
  void main() {
    if (vWpos.y < uDissFront) discard; // already-dissolved geometry can't be hovered
    // organic edge: low-freq noise anchored to the surface warps the cutoff distance in/out
    float w = sin(vWpos.x * 9.0 + vWpos.y * 4.0)
            + sin(vWpos.y * 7.0 - vWpos.z * 5.0) * 0.7
            + sin(vWpos.z * 13.0 + vWpos.x * 3.0) * 0.5
            + sin(vWpos.x * 23.0 - vWpos.y * 17.0) * 0.3;
    float warp = (w * 0.40) * uWobble;
    float aa = length(fwidth(vWpos)) * 1.5; // AA band in world units (uniform control flow — computed once)
    // union of the recent cursor trail -> the reveal lingers and smears into traces
    float reveal = 0.0;
    for (int i = 0; i < TRAIL_N; i++) {
      float s = uTrailStr[i];
      if (s <= 0.001) continue;
      float dd = distance(vWpos, uTrail[i]) + warp;
      float ins = (1.0 - smoothstep(uRadius - aa, uRadius, dd)) * s;
      reveal = max(reveal, ins);
    }
    // ripple: a face briefly flashes white as it ignites, then settles into the SAME dark-fill +
    // grid-line reveal as the cursor disc, and fades out — same look, so the two effects unify.
    // The ripple runs at uRipStrength (~50%); the full-strength disc masks its inner part, so the
    // ripple visually EMERGES from the disc edge and spreads outward (no single-polygon focus).
    int rW = int(uRipDim.x);
    int fid = int(vFaceId + 0.5);
    ivec2 rpx = clamp(ivec2(fid % rW, fid / rW), ivec2(0), ivec2(rW - 1, int(uRipDim.y) - 1));
    float ph = texelFetch(uRipTex, rpx, 0).r;          // 0 = dormant, else 1..255 -> life 0..1
    float ripVis = 0.0, flash = 0.0;
    if (ph > 0.0) {
      float prog = (ph * 255.0 - 1.0) / 254.0;         // 0 at ignition -> 1 at end of life
      ripVis = 1.0 - smoothstep(0.20, 1.0, prog);      // bright at the wavefront, fades over the tail
      flash  = 1.0 - smoothstep(0.0, 0.30, prog);      // white leading edge of the ring
    }
    float vis = max(reveal, ripVis * uRipStrength);    // disc at full power, wider ripple at uRipStrength
    if (vis <= 0.01) discard;
    vec3 wb = fwidth(vBary);
    vec3 a = smoothstep(vec3(0.0), wb * 0.75, vBary);    // grid lines half as thick
    float line = 1.0 - min(min(a.x, a.y), a.z);
    float yStep = step(0.5, uYellow);  // flip instantly at the midpoint of the yellow transition (not gradual)
    vec3 fillCol = mix(vec3(0.102), vec3(0.976, 0.996, 0.176), yStep);  // dark fill (#1a1a1a) -> yellow
    vec3 gridCol = mix(vec3(0.7, 0.7, 0.7), vec3(0.0), yStep);  // grid: #949494 (dark bg) -> #000 (yellow bg)
    vec3 gridLook = mix(fillCol, gridCol, line);         // wireframe-grid look (the disc always uses this)
    float gridA = mix(0.95, 1.0, line);
    float ripStr = ripVis * uRipStrength;
    // the ripple is drawn as grid lines (uRipGlow=0) or as soft filled glowing faces (uRipGlow=1)
    vec3 ripCol = mix(gridLook, vec3(1.0), uRipGlow);
    float ripA = mix(gridA, 0.85, uRipGlow) * ripStr;
    float discA = gridA * reveal;                        // the hovered disc stays wireframe
    vec3 col = mix(ripCol, gridLook, step(ripA, discA)); // show whichever layer is stronger
    col = mix(col, vec3(1.0), flash * uRipMix);          // white flash rides the wavefront
    float alpha = max(discA, ripA);
    outColor = vec4(col, alpha);
  }
`,QS=`
  uniform float uDissFront;
  uniform float uDissBand;
  uniform float uDissAmp;
  varying float vBand;
  varying float vWY;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWY = wp.y;
    float d = wp.y - uDissFront;
    float band = max(0.0, 1.0 - abs(d) / uDissBand);   // 1 at the front, 0 a band away
    vBand = band;
    vec3 displaced = position + normal * (uDissAmp * band * band); // pop out at the front
    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`,ZS=`
  precision highp float;
  uniform float uDissFront;
  uniform float uDissBand;
  varying float vBand;
  varying float vWY;
  void main() {
    float d = vWY - uDissFront;
    if (d < -uDissBand) discard;   // already dissolved (below the front)
    if (d > uDissBand) discard;    // not reached yet (the real bust still shows here)
    gl_FragColor = vec4(vec3(1.0), clamp(vBand, 0.0, 1.0)); // white flash, brightest at the front
  }
`,$S=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,eM=`
  precision highp float;
  uniform sampler2D uTex;
  uniform float uAppear;   // reveal front (0 = hidden, 1 = fully shown), climbs bottom->top
  uniform float uErode;    // erode front (0 = intact, 1 = fully gone), climbs bottom->top
  uniform float uBand;     // flash band + ragged-edge size (in uv.y)
  uniform float uFlash;    // white-flash strength on the moving front (0 at rest)
  varying vec2 vUv;
  float hashD(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    vec4 tex = texture2D(uTex, vUv);
    if (tex.a < 0.02) discard;                               // transparent margins never show or flash
    float edge = (hashD(floor(vUv * vec2(64.0, 96.0))) - 0.5) * uBand * 1.4; // ragged front
    float yy = vUv.y + edge;
    if (uAppear < 0.999 && yy > uAppear) discard;            // above the reveal front -> not shown yet
    if (uErode > 0.001 && yy < uErode) discard;              // below the erode front -> already gone
    // (guards keep the ragged edge from nibbling the image when a front is parked at 0 or 1)
    float front = uErode > 0.0001 ? uErode : uAppear;        // flash rides whichever front is moving
    float fl = (1.0 - smoothstep(0.0, uBand, abs(vUv.y - front))) * clamp(uFlash, 0.0, 1.0);
    vec3 col = mix(tex.rgb, vec3(1.0), fl);
    gl_FragColor = vec4(col, tex.a);
  }
`,tM=`
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`,nM=`
  precision highp float;
  uniform sampler2D uTex;
  uniform float uReveal;    // circle radius (corrected-uv units), grows from the torch outward
  uniform float uOpacity;   // fades the whole thing out as the image dissolves
  uniform vec2 uOrigin;     // torch origin in uv
  uniform float uAspect;    // plane w/h, so the reveal circle stays round on screen
  varying vec2 vUv;
  void main() {
    vec4 t = texture2D(uTex, vUv);
    vec2 d = (vUv - uOrigin) * vec2(uAspect, 1.0);
    float m = 1.0 - smoothstep(uReveal, uReveal + 0.05, length(d));
    float a = t.a * m * uOpacity;
    if (a < 0.003) discard;
    gl_FragColor = vec4(t.rgb, a);
  }
`,iM=[{dx:-.05,dy:-.1,s:1},{dx:-.05,dy:-.1,s:1},{dx:-.05,dy:-.1,s:1},{dx:-.05,dy:-.1,s:1},{dx:-.05,dy:-.1,s:1}];class sM{constructor(e,t={}){this.canvas=e,this.ready=!1,this.reduceMotion=!!t.reduceMotion,this.progress=0,this.tabP=0,this._fpsAcc=0,this._fpsCount=0,this._w=window.innerWidth,this._h=window.innerHeight,this.tmpV=new L,this.camPos=new L,this.camTgt=new L,this.renderer=new zv({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=yd,this.renderer.toneMappingExposure=.65,this.renderer.outputColorSpace=Lt,this.scene=new Zd,this.camera=new kt(38,1,.1,100),this.camera.position.set(.7,1.15,4.4),this._initEnv(),this._initLights(),this._initTabs(),this._load(),this.mtx=0,this.mty=0,this.mx=0,this.my=0,this.hoverEnabled=window.matchMedia("(hover: hover)").matches&&!this.reduceMotion,this._raycaster=new wx,this._needRay=!1,this._hoverHit=!1,this._hitPoint=new L,this.hoverTargets=[],this.wireOverlays=[],this._trail=Array.from({length:Sl},()=>new L(1e3,1e3,1e3)),this._trailStr=new Float32Array(Sl),this._trailHead=0,this._trailDecay=.91,this._elapsed=0,this._bfsGen=0,this._hoverObj=null,this._hoverFace=-1,this._lastSeedPoint=new L(1e9,1e9,1e9),this._lastSeedTime=-1e9,this._ripBusy=!1,this._ripStep=.038,this._ripFlash=.17,this._ripRings=24,this._ripGap=14,this._ripCooldown=1.2,this._ripSpacing=1.6,this._ripPlaceholder=new Xa(new Uint8Array(1),1,1,Pr,In),this._ripPlaceholder.magFilter=xt,this._ripPlaceholder.minFilter=xt,this._ripPlaceholder.generateMipmaps=!1,this._ripPlaceholder.needsUpdate=!0,this.uDissFront={value:-9999},this.uDissBand={value:.2},this.uDissAmp={value:.13},this.uWire={uPointer:{value:new L(1e3,1e3,1e3)},uRadius:{value:.37},uActive:{value:0},uYellow:{value:0},uAmp:{value:.003},uBulge:{value:.025},uWobble:{value:.2},uTrail:{value:this._trail},uTrailStr:{value:this._trailStr},uDissFront:this.uDissFront,uRipMix:{value:.4},uRipStrength:{value:.17},uRipGlow:{value:.48}},window.addEventListener("pointermove",n=>{const i=this.canvas.getBoundingClientRect();this.mtx=(n.clientX-i.left)/(i.width||1)*2-1,this.mty=(n.clientY-i.top)/(i.height||1)*2-1,this._needRay=!0}),window.addEventListener("resize",()=>this.resize()),window.ResizeObserver&&(this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(e)),this.resize()}_initEnv(){const e=new $c(this.renderer);this.scene.environment=e.fromScene(new BS,.04).texture,this.scene.environmentIntensity=.8}_initLights(){const e=new Na(16758110,1.2);e.position.set(2.5,4,3),this.scene.add(e);const t=new Na(14674175,.4);t.position.set(-3,2,-2),this.scene.add(t);const n=new Na(16763016,.3);n.position.set(-1,-1,2),this.scene.add(n),this.scene.add(new ux(16766624,.2)),window.__tuneLight=(i={})=>{if(i.exposure!==void 0&&(this.renderer.toneMappingExposure=i.exposure),i.env!==void 0&&(this.scene.environmentIntensity=i.env),i.key!==void 0&&(e.intensity=i.key),i.rim!==void 0&&(t.intensity=i.rim),i.fill!==void 0&&(n.intensity=i.fill),i.warm!==void 0){const s=new Ae(1,1,1).lerp(new Ae(1,.66,.32),i.warm);e.color.copy(s),n.color.copy(s)}return{exposure:this.renderer.toneMappingExposure,env:this.scene.environmentIntensity,key:e.intensity,rim:t.intensity,fill:n.intensity}}}_initTabs(){this.scene.add(this.camera),this.tabGroup=new Cn,this.tabGroup.visible=!1,this.camera.add(this.tabGroup),this._tabDist=4,this._lightOrigin=new Ne(.451,.561);const e=["/tabs/01-tab.png","/tabs/02-tab.png","/tabs/03-tab.png","/tabs/04-tab.png","/tabs/05-tab.png"].map(s=>yl+s),t=new of,n=new jr(1,1);this.tabPlanes=e.map((s,a)=>{const o=new _n({uniforms:{uTex:{value:null},uAppear:{value:0},uErode:{value:0},uBand:{value:.13},uFlash:{value:0}},vertexShader:$S,fragmentShader:eM,transparent:!0,depthTest:!1,depthWrite:!1,side:nn}),c=new $e(n,o);return c.frustumCulled=!1,c.renderOrder=20+a,c.visible=!1,c._aspect=.62,this.tabGroup.add(c),t.load(s,l=>{l.colorSpace=yt,l.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),o.uniforms.uTex.value=l,l.image&&l.image.height&&(c._aspect=l.image.width/l.image.height),this._layoutTabs()}),c});const i=new _n({uniforms:{uTex:{value:null},uReveal:{value:0},uOpacity:{value:0},uOrigin:{value:this._lightOrigin},uAspect:{value:1}},vertexShader:tM,fragmentShader:nM,transparent:!0,depthTest:!1,depthWrite:!1,side:nn});this.tabLightPlane=new $e(n,i),this.tabLightPlane.frustumCulled=!1,this.tabLightPlane.renderOrder=15,this.tabLightPlane.visible=!1,this._lightAspect=3719/1587,this.tabGroup.add(this.tabLightPlane),t.load(yl+"/tabs/03-tab-light.svg",s=>{s.colorSpace=yt,i.uniforms.uTex.value=s,s.image&&s.image.height&&(this._lightAspect=s.image.width/s.image.height),this._layoutTabs()}),this._layoutTabs()}_layoutTabs(){if(!this.tabPlanes)return;const e=this._tabDist,t=Fd.degToRad(this.camera.fov),n=2*e*Math.tan(t/2),i=n*(this._w/this._h),s=.4,a=.96,o=1.6;this.tabPlanes.forEach((h,u)=>{const d=iM[u]||{dx:0,dy:-.05,s:1};let f=i*s*d.s,g=f/h._aspect;if(g>n*a){const m=n*a/g;g*=m,f*=m}const _=Math.min(n*o*s*d.s/h._aspect,n*a),p=n*d.dy-_/2;h.scale.set(f,g,1),h.position.set(i*d.dx,p+g/2,-e)});const c=this.tabLightPlane,l=this.tabPlanes[2];if(c&&l){const h=l.position.x+-.21999999999999997*l.scale.x,u=l.position.y+(.86-.5)*l.scale.y,d=i*2.6,f=d/this._lightAspect,g=this._lightOrigin.x,_=this._lightOrigin.y;c.scale.set(d,f,1),c.position.set(h-(g-.5)*d,u-(_-.5)*f,-e),c.material.uniforms.uAspect.value=d/f}}setLight(e,t){const n=this.tabLightPlane;n&&(n.material.uniforms.uReveal.value=e*1.6,n.material.uniforms.uOpacity.value=t,n.visible=t>.001&&e>.001)}setActProgress(e,t){this.progress=e,this.tabP=t}setTabState(e,t,n,i){const s=this.tabPlanes&&this.tabPlanes[e];s&&(s.material.uniforms.uAppear.value=t,s.material.uniforms.uErode.value=n,s.material.uniforms.uFlash.value=i,s.visible=t>.001&&n<.999)}_load(){const e=new nS;e.setMeshoptDecoder(OS),e.load(zS,t=>this._onLoaded(t),t=>{this.onProgress&&t.total&&this.onProgress(t.loaded/t.total)},t=>console.error("GLB load error",t))}_onLoaded(e){const t=e.scene;this.modelRoot=new Cn,this.spinGroup=new Cn,this.fitGroup=new Cn,this.spinGroup.add(this.fitGroup),this.modelRoot.add(this.spinGroup),this.scene.add(this.modelRoot);const n=[];let i=null,s=null,a=null,o=null,c=null;const l={};t.traverse(b=>{if(!b.isMesh)return;const A=b.material&&b.material.name||"",w=b.name,M=b.parent&&b.parent.name||"";A.startsWith("GlassSimple")?n.push(b):A.startsWith("Glasses")?c=b:A.startsWith("Fake")?/upper/i.test(w)?l.upperArm=b:/head/i.test(w)?l.head=b:/body/i.test(w)?l.body=b:/arm/i.test(w)&&(l.arm=b):/upper/i.test(M)?o=b:/head/i.test(M)?s=b:/body/i.test(M)?i=b:/arm/i.test(M)&&(a=b)});const h=[i,s,a,o].filter(Boolean),u=Object.values(l),d=[i,s].filter(Boolean),f=[...h,...u,c,...n].filter(Boolean),g=i||s;this.head=s,this.body=i;const _=this.renderer.capabilities.getMaxAnisotropy();t.updateWorldMatrix(!0,!0);for(const b of f)for(const A of["map","normalMap","roughnessMap","metalnessMap"])b.material&&b.material[A]&&(b.material[A].anisotropy=_);const p=new Dn({color:15395562,metalness:0,roughness:.12,transparent:!0,opacity:.16,depthWrite:!1,side:nn,envMapIntensity:1.6});n.forEach(b=>{b.material=p,b.renderOrder=3}),this.lens=n[0]||null,window.__tuneGlass=(b={})=>{for(const A of["opacity","roughness","metalness","envMapIntensity"])b[A]!==void 0&&(p[A]=b[A]);return b.color!==void 0&&p.color.set(b.color),p.needsUpdate=!0,{opacity:p.opacity,roughness:p.roughness,envMapIntensity:p.envMapIntensity}};const m=i?i.parent:null;m?this.fitGroup.attach(m):f.forEach(b=>this.fitGroup.attach(b)),this.modelRoot.updateWorldMatrix(!0,!0);const x=new xn;for(const b of d)b.geometry.computeBoundingBox(),x.union(b.geometry.boundingBox.clone().applyMatrix4(b.matrixWorld));x.isEmpty()&&x.setFromObject(g),this._bsize=new L,this._bctr=new L,x.getSize(this._bsize),x.getCenter(this._bctr),this._fitH=2.4,this._modelY=.85,this._applyFit(),window.__tuneFit=(b,A)=>(b!==void 0&&(this._fitH=b),A!==void 0&&(this._modelY=A),this._applyFit(),{h:this._fitH,y:this._modelY}),this._spinBase=.003,window.__tuneSpin=b=>(b!==void 0&&(this._spinBase=b),this._spinBase),this._parallax=.15,window.__tuneParallax=b=>(b!==void 0&&(this._parallax=b),this._parallax),this._mixer=new Ax(this.modelRoot),this._actions=[],this._upperArmScale=.5,this._clipEnd=0,this._clipStart=1/0;for(const b of e.animations||[]){const A=this._mixer.clipAction(b);A.play();const w=/upper[-_ ]?arm/i.test(b.name);this._actions.push({a:A,upper:w}),this._clipEnd=Math.max(this._clipEnd,b.duration);for(const M of b.tracks)M.times.length&&(this._clipStart=Math.min(this._clipStart,M.times[0]))}window.__tuneUpperArm=b=>(b!==void 0&&(this._upperArmScale=b),this._upperArmScale),this._upperArmNode=o?o.parent:null,this._uaOffset=new L(0,0,0),window.__tuneUaOffset=(b,A,w)=>(b!==void 0&&this._uaOffset.set(b,A,w),this._uaOffset.toArray()),isFinite(this._clipStart)||(this._clipStart=0),this._setDrink(0),this.fakeParts=u,this._renderParts=h;const v=new _n({vertexShader:QS,fragmentShader:ZS,uniforms:{uDissFront:this.uDissFront,uDissBand:this.uDissBand,uDissAmp:this.uDissAmp},transparent:!0,depthWrite:!1,blending:dc});for(const b of u)b.material=v,b.visible=!0,b.frustumCulled=!1;for(const b of[...h,c,...n].filter(Boolean))this._patchErosion(b.material);window.__camFreeze=b=>{this._camFreeze=b||null},this.hoverTargets=[...h,c,...n].filter(Boolean),this.hoverTargets.forEach(b=>this._addWireOverlay(b)),window.__hover=(b,A)=>this._debugHover(b,A),window.__tuneHover=(b={})=>(b.radius!==void 0&&(this.uWire.uRadius.value=b.radius),b.bulge!==void 0&&(this.uWire.uBulge.value=b.bulge),b.amp!==void 0&&(this.uWire.uAmp.value=b.amp),b.wobble!==void 0&&(this.uWire.uWobble.value=b.wobble),b.linger!==void 0&&(this._trailDecay=b.linger),b.rippleMix!==void 0&&(this.uWire.uRipMix.value=b.rippleMix),b.rippleStrength!==void 0&&(this.uWire.uRipStrength.value=b.rippleStrength),b.rippleGlow!==void 0&&(this.uWire.uRipGlow.value=b.rippleGlow),b.rippleStep!==void 0&&(this._ripStep=b.rippleStep),b.rippleFlash!==void 0&&(this._ripFlash=b.rippleFlash),b.rippleRings!==void 0&&(this._ripRings=b.rippleRings|0),b.rippleGap!==void 0&&(this._ripGap=b.rippleGap|0),b.rippleCooldown!==void 0&&(this._ripCooldown=b.rippleCooldown),b.rippleSpacing!==void 0&&(this._ripSpacing=b.rippleSpacing),{radius:this.uWire.uRadius.value,bulge:this.uWire.uBulge.value,amp:this.uWire.uAmp.value,wobble:this.uWire.uWobble.value,linger:this._trailDecay,rippleMix:this.uWire.uRipMix.value,rippleStrength:this.uWire.uRipStrength.value,rippleGlow:this.uWire.uRipGlow.value,rippleStep:this._ripStep,rippleFlash:this._ripFlash,rippleRings:this._ripRings,rippleGap:this._ripGap,rippleCooldown:this._ripCooldown,rippleSpacing:this._ripSpacing}),this.ready=!0,this.onReady&&this.onReady()}_addWireOverlay(e){const t=e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone(),n=t.attributes.position.count,i=new Float32Array(n*3);for(let c=0;c<n;c++)i[c*3+c%3]=1;t.setAttribute("aBary",new Ut(i,3));const s=Object.assign({},this.uWire,{uRipTex:{value:this._ripPlaceholder},uRipDim:{value:new Ne(1,1)}}),a=new _n({uniforms:s,transparent:!0,depthWrite:!1,blending:Qi,glslVersion:Zc,vertexShader:KS,fragmentShader:JS}),o=new $e(t,a);o.frustumCulled=!1,o.visible=!1,o.renderOrder=4,o._srcMesh=e,o._faceCount=n/3|0,o._rip=null,e.userData.wireOverlay=o,e.add(o),this.wireOverlays.push(o)}isBusy(){return this._ripBusy}_buildAdjacency(e,t){const n=e.index?e.index.array:null;let i,s;if(n)i=(f,g)=>n[3*f+g],s=e.attributes.position.count;else{const f=e.attributes.position,g=f.count,_=new Map,p=new Int32Array(g),m=1e4;for(let x=0;x<g;x++){const v=Math.round(f.getX(x)*m)+","+Math.round(f.getY(x)*m)+","+Math.round(f.getZ(x)*m);let b=_.get(v);b===void 0&&(b=_.size,_.set(v,b)),p[x]=b}i=(x,v)=>p[3*x+v],s=_.size}const a=new Map,o=new Uint32Array(t),c=[],l=[];for(let f=0;f<t;f++){const g=i(f,0),_=i(f,1),p=i(f,2),m=[g<_?g*s+_:_*s+g,_<p?_*s+p:p*s+_,p<g?p*s+g:g*s+p];for(let x=0;x<3;x++){const v=a.get(m[x]);v===void 0?a.set(m[x],f):(c.push(f),l.push(v),o[f]++,o[v]++,a.delete(m[x]))}}const h=new Uint32Array(t+1);for(let f=0;f<t;f++)h[f+1]=h[f]+o[f];const u=new Int32Array(h[t]),d=h.slice(0,t);for(let f=0;f<c.length;f++){const g=c[f],_=l[f];u[d[g]++]=_,u[d[_]++]=g}return{offsets:h,neighbors:u}}_buildRipple(e){const t=e._faceCount,n=e._srcMesh.geometry,{offsets:i,neighbors:s}=this._buildAdjacency(n,t),a=n.attributes.position,o=n.index?n.index.array:null,c=new Float32Array(t*3);for(let g=0;g<t;g++){const _=o?o[3*g]:3*g,p=o?o[3*g+1]:3*g+1,m=o?o[3*g+2]:3*g+2;c[3*g]=(a.getX(_)+a.getX(p)+a.getX(m))/3,c[3*g+1]=(a.getY(_)+a.getY(p)+a.getY(m))/3,c[3*g+2]=(a.getZ(_)+a.getZ(p)+a.getZ(m))/3}const l=Math.min(2048,Math.max(1,t)),h=Math.ceil(t/l),u=new Uint8Array(l*h),d=new Xa(u,l,h,Pr,In);d.magFilter=xt,d.minFilter=xt,d.generateMipmaps=!1,d.needsUpdate=!0;const f=new Float32Array(t);f.fill(-1e9),e._rip={tex:d,data:u,W:l,H:h,faceCount:t,offsets:i,neighbors:s,ignite:f,centroids:c,ring:new Uint16Array(t),seen:new Int32Array(t),active:[],inActive:new Uint8Array(t),frontA:new Int32Array(t),frontB:new Int32Array(t)},e.material.uniforms.uRipTex.value=d,e.material.uniforms.uRipDim.value.set(l,h)}_seedRipple(e,t,n,i){const s=e.userData&&e.userData.wireOverlay;if(!s)return;s._rip||this._buildRipple(s);const a=s._rip,{offsets:o,neighbors:c,seen:l,ignite:h,ring:u,active:d,inActive:f,centroids:g,faceCount:_}=a,p=this._ripStep,m=this._ripGap,x=1+m,v=m+this._ripRings,b=++this._bfsGen;let A=a.frontA,w=a.frontB,M=0;const C=e.worldToLocal(n.clone()),D=e.getWorldScale(this.tmpV).x||1,y=this.uWire.uRadius.value/D,E=y*y;for(let F=0;F<_;F++){const V=g[3*F]-C.x,j=g[3*F+1]-C.y,O=g[3*F+2]-C.z;V*V+j*j+O*O<=E&&(l[F]=b,A[M++]=F)}if(M===0){if(t==null||t<0||t>=_)return;l[t]=b,A[M++]=t}let B=0;for(;M>0&&B<=v;){if(B>=x){const j=i+(B-x)*p;for(let O=0;O<M;O++){const W=A[O];f[W]?j<h[W]&&(h[W]=j,u[W]=B):(h[W]=j,u[W]=B,f[W]=1,d.push(W))}}let F=0;for(let j=0;j<M;j++){const O=A[j];for(let W=o[O];W<o[O+1];W++){const H=c[W];l[H]!==b&&(l[H]=b,w[F++]=H)}}const V=A;A=w,w=V,M=F,B++}}_updateRipples(e){const t=this._ripFlash;let n=!1;for(const i of this.wireOverlays){const s=i._rip;if(!s||s.active.length===0)continue;n=!0;const{active:a,ignite:o,data:c}=s;let l=!1;for(let h=0;h<a.length;){const u=a[h],d=e-o[u];if(d>t){s.inActive[u]=0,a[h]=a[a.length-1],a.pop(),c[u]!==0&&(c[u]=0,l=!0);continue}const f=d>=0?1+Math.min(254,d/t*254+.5|0):0;c[u]!==f&&(c[u]=f,l=!0),h++}l&&(s.tex.needsUpdate=!0)}return this._ripBusy=n,n}_debugHover(e,t){this._raycaster.setFromCamera({x:e,y:t},this.camera);const n=this._raycaster.intersectObjects(this.hoverTargets,!1);if(!n.length)return;this._hoverHit=!0,this._hitPoint.copy(n[0].point),this.uWire.uPointer.value.copy(this._hitPoint),this.uWire.uActive.value=1,this._trailStr.fill(0),this._trail[0].copy(this._hitPoint),this._trailStr[0]=1;const i=this._elapsed||0;this._seedRipple(n[0].object,n[0].faceIndex,this._hitPoint,i),this._updateRipples(i+.3);for(const s of this.wireOverlays)s.visible=!0}setProgress(e){this.progress=e}_applyFit(){const e=this._fitH/this._bsize.y;this._baseScale=e,this.fitGroup.scale.setScalar(e),this.fitGroup.position.set(-this._bctr.x*e,-this._bctr.y*e,-this._bctr.z*e),this.spinGroup.position.set(0,this._modelY,0),this._baseY=this._modelY}_setDrink(e){if(!this._mixer||!this._actions||!this._actions.length)return;const t=this._clipEnd-this._clipStart,n=Math.min(Math.max(e,0),1);for(const{a:i,upper:s}of this._actions){const a=s?n*this._upperArmScale:n;i.paused=!1,i.enabled=!0,i.time=this._clipStart+a*t}this._mixer.update(0),this._upperArmNode&&this._uaOffset&&this._upperArmNode.position.addScaledVector(this._uaOffset,n)}_patchErosion(e){if(!e||e.userData._erosionPatched)return;e.userData._erosionPatched=!0;const t=this.uDissFront,n=this.uDissBand;e.onBeforeCompile=i=>{i.uniforms.uDissFront=t,i.uniforms.uDissBand=n,i.vertexShader=`varying vec3 vDissPos;
`+i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
  vDissPos = (modelMatrix * vec4(transformed, 1.0)).xyz;`),i.fragmentShader=i.fragmentShader.replace("void main() {",`uniform float uDissFront; uniform float uDissBand; varying vec3 vDissPos;
         float _hashD(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453); }
         void main() {
           float _edge = (_hashD(floor(vDissPos * 16.0)) - 0.5) * uDissBand * 1.6;
           if (vDissPos.y + _edge < uDissFront) discard;`)},e.needsUpdate=!0}_computeDissBounds(){const e=new xn,t=new xn;for(const n of this._renderParts||[])n.updateWorldMatrix(!0,!1),n.geometry.boundingBox||n.geometry.computeBoundingBox(),t.copy(n.geometry.boundingBox).applyMatrix4(n.matrixWorld),e.union(t);return{min:e.min.y,max:e.max.y}}resize(){const e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;this._w=e,this._h=t;const n=e/t,i=window.innerWidth<1024;this._fit=n<1?Math.min(1/n*.6,1.65):i?1.2:1,this.renderer.setSize(e,t,!1),this.camera.aspect=n,this.camera.updateProjectionMatrix(),this._layoutTabs()}update(e,t){const n=this.progress;this._elapsed=e;const i=this.tabP>.001;if(this.tabGroup&&(this.tabGroup.visible=i),this.modelRoot&&(this.modelRoot.visible=!i),this._camFreeze){const s=this._camFreeze;this.camera.position.set(s[0],s[1],s[2]),this.camera.lookAt(s[3],s[4],s[5])}else{const s=this._fit>1?WS:VS;ad(s,n,"pos",this.camPos),ad(s,n,"tgt",this.camTgt),this._fit>1&&(this.camPos.x*=.42,this.camTgt.x*=.42,this.camPos.sub(this.camTgt).multiplyScalar(this._fit).add(this.camTgt)),this.camera.position.lerp(this.camPos,1-Math.pow(.001,t)),this.camera.lookAt(this.camTgt)}if(this.ready){const s=this.reduceMotion?0:1;if(this.mx+=(this.mtx-this.mx)*.03,this.my+=(this.mty-this.my)*.03,i&&this.tabGroup&&this.tabGroup.position.set(this.mx*.1*s,this.my*-.06*s,0),this.spinGroup.rotation.y=(this._spinBase||0)+Ta(XS,n)+this.mx*(this._parallax??.15)*s,this.spinGroup.rotation.x=this.my*.05*s,this._fit>1){const d=ai(.22,.32,n)*(1-ai(.48,.56,n));this.spinGroup.rotation.y+=d*-.68}const a=this.reduceMotion?0:Math.sin(e*.8)*.012,o=this._baseY??(this._baseY=this.spinGroup.position.y),c=Ta(jS,n),l=1-c;this._baseScale&&this.fitGroup.scale.setScalar(this._baseScale*(1+cd*l));const h=this._fitH*.5*cd;this.spinGroup.position.y=o+a+GS*c-h*l+HS*l,this._setDrink(Ta(qS,n));const u=Ta(YS,n);if(u>0){this._dissBounds||(this._dissBounds=this._computeDissBounds());const d=this._dissBounds,f=this.uDissBand.value*1.5,g=d.min-f,_=d.max+f;this.uDissFront.value=g+u*(_-g)}else this.uDissFront.value=-9999,this._dissBounds=null;if(this.uWire.uYellow.value=0,this.hoverEnabled&&!i){if(this._needRay){this._needRay=!1,this._raycaster.setFromCamera({x:this.mtx,y:-this.mty},this.camera);const _=this._raycaster.intersectObjects(this.hoverTargets,!1);this._hoverHit=_.length>0,this._hoverHit&&(this._hitPoint.copy(_[0].point),this._hoverObj=_[0].object,this._hoverFace=_[0].faceIndex)}this._hoverHit&&this._hoverObj&&(this._hitPoint.distanceTo(this._lastSeedPoint)>this.uWire.uRadius.value*this._ripSpacing||e-this._lastSeedTime>this._ripCooldown)&&(this._lastSeedTime=e,this._lastSeedPoint.copy(this._hitPoint),this._seedRipple(this._hoverObj,this._hoverFace,this._hitPoint,e)),this._hoverHit&&this.uWire.uPointer.value.lerp(this._hitPoint,.4);const d=this._trailStr;for(let _=0;_<d.length;_++)d[_]*=this._trailDecay;this._hoverHit&&(this._trailHead=(this._trailHead+1)%d.length,this._trail[this._trailHead].copy(this.uWire.uPointer.value),d[this._trailHead]=1);let f=0;for(let _=0;_<d.length;_++)d[_]<.004?d[_]=0:d[_]>f&&(f=d[_]);this.uWire.uActive.value=f,this._updateRipples(e);const g=f>.004;for(const _ of this.wireOverlays)_.visible=g||_._rip&&_._rip.active.length>0}}if(this._fpsAcc+=t,this._fpsCount++,this._fpsAcc>=.5){const s=this._fpsCount/this._fpsAcc,a=Math.min(window.devicePixelRatio,2),o=this.renderer.getPixelRatio();let c=o;s<45&&o>1?c=Math.max(1,o-.25):s>57&&o<a&&(c=Math.min(a,o+.25)),c!==o&&(this.renderer.setPixelRatio(c),this.renderer.setSize(this._w,this._h,!1)),this._fpsAcc=0,this._fpsCount=0}this.renderer.render(this.scene,this.camera)}}(function(){function r(e){if(window.__tuneHover)return e();const t=setInterval(()=>{window.__tuneHover&&(clearInterval(t),e())},150)}r(()=>{const e=window.__tuneHover(),t=Object.assign({},e),n=[["#","Hover disc"],["radius",.1,1.2,.01],["bulge",0,.3,.005],["amp",0,.04,.001],["wobble",0,1.5,.01],["linger",.8,.99,.005],["#","Ripple"],["rippleGlow",0,1,.01],["rippleStrength",0,1,.01],["rippleMix",0,2.5,.05],["rippleFlash",.03,.8,.005],["rippleStep",.004,.05,.001],["rippleGap",0,50,1],["rippleRings",5,160,1],["rippleCooldown",0,3,.05],["rippleSpacing",.1,2,.05]],i=document.createElement("div");Object.assign(i.style,{position:"fixed",top:"12px",right:"12px",zIndex:99999,width:"248px",maxHeight:"92vh",overflowY:"auto",background:"rgba(14,14,16,0.94)",color:"#e8e8e8",font:"11px/1.45 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",padding:"10px 12px",borderRadius:"10px",border:"1px solid #333",boxShadow:"0 8px 30px rgba(0,0,0,.55)"});const s=document.createElement("div");s.textContent="HOVER TUNER",Object.assign(s.style,{fontWeight:"700",letterSpacing:".04em",marginBottom:"8px"}),i.appendChild(s);const a={};for(const u of n){if(u[0]==="#"){const w=document.createElement("div");w.textContent=u[1].toUpperCase(),Object.assign(w.style,{margin:"12px 0 4px",color:"#7fb0ff",fontWeight:"700",fontSize:"10px",letterSpacing:".06em"}),i.appendChild(w);continue}const[d,f,g,_]=u,p=document.createElement("div");p.style.margin="7px 0";const m=document.createElement("div");Object.assign(m.style,{display:"flex",justifyContent:"space-between"});const x=document.createElement("span");x.textContent=d;const v=document.createElement("span");v.style.color="#9fe0a0",m.appendChild(x),m.appendChild(v);const b=document.createElement("input");b.type="range",b.min=f,b.max=g,b.step=_,b.value=e[d]!=null?e[d]:f,b.style.width="100%";const A=w=>{v.textContent=(+w).toFixed(_<.01?4:_<1?3:0)};A(b.value),b.addEventListener("input",()=>{const w=parseFloat(b.value);A(w),window.__tuneHover({[d]:w})}),p.appendChild(m),p.appendChild(b),i.appendChild(p),a[d]={s:b,show:A}}const o=(u,d)=>{const f=document.createElement("button");return f.textContent=u,Object.assign(f.style,{flex:"1",padding:"6px",background:"#262630",color:"#e8e8e8",border:"1px solid #444",borderRadius:"6px",cursor:"pointer",font:"inherit"}),f.addEventListener("click",d),f},c=document.createElement("div");Object.assign(c.style,{display:"flex",gap:"6px",marginTop:"12px"}),c.appendChild(o("Copy settings",()=>{const u=window.__tuneHover(),d=JSON.stringify(u,(g,_)=>typeof _=="number"?+_.toFixed(4):_,2);navigator.clipboard&&navigator.clipboard.writeText(d).catch(()=>{}),console.log(`HOVER SETTINGS
`+d);const f=s.textContent;s.textContent="COPIED ✓ (+ console)",setTimeout(()=>{s.textContent=f},1400)})),c.appendChild(o("Reset",()=>{window.__tuneHover(t);for(const u in a)t[u]!=null&&(a[u].s.value=t[u],a[u].show(t[u]))})),i.appendChild(c);const l=document.createElement("button");l.textContent="⚙ tuner",Object.assign(l.style,{position:"fixed",top:"12px",right:"12px",zIndex:99998,padding:"6px 10px",background:"rgba(14,14,16,0.94)",color:"#e8e8e8",border:"1px solid #333",borderRadius:"8px",cursor:"pointer",font:"11px ui-monospace,monospace",display:"none"});const h=document.createElement("div");h.style.marginTop="6px",h.appendChild(o("Hide panel",()=>{i.style.display="none",l.style.display="block"})),i.appendChild(h),l.addEventListener("click",()=>{i.style.display="",l.style.display="none"}),document.body.appendChild(i),document.body.appendChild(l),i.style.display="none",l.style.display="block"})})();const fo=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ld=document.querySelector(".line--left"),hd=document.querySelector(".line--right"),ud=document.getElementById("heroCopy"),rM=document.getElementById("webgl"),wr=document.querySelector(".grid-bg"),aM=Array.from(document.querySelectorAll(".stage__item")),oM=1024;let et=null;const dd=document.getElementById("preloader"),cM=document.getElementById("plNum"),lM=document.getElementById("plBar"),to={v:0};let fd=!1;function lp(){cM.textContent=Math.round(to.v),lM.style.transform=`scaleX(${(to.v/100).toFixed(3)})`}function hM(r){yn.to(to,{v:r,duration:.5,ease:"power1.out",onUpdate:lp})}function pd(){fd||(fd=!0,yn.to(to,{v:100,duration:.4,ease:"power2.out",onUpdate:lp,onComplete:()=>{dd.classList.add("is-done"),cn.start(),setTimeout(()=>dd.remove(),950)}}))}let md="hero";function uM(r){return r<.3?"hero":r<.52?"stats":r<.64?"dissolve":"endtext"}function dM(r){r!==md&&(md=r,aM.forEach(e=>e.classList.toggle("is-active",e.dataset.stage===r)),r==="stats"&&fM())}function fM(){document.querySelectorAll('[data-stage="stats"] .num').forEach(r=>{const e=parseFloat(r.dataset.to),t=r.dataset.suffix||"",n={v:0};yn.killTweensOf(n),r.textContent="0"+t,yn.to(n,{v:e,duration:.98,ease:"power3.out",onUpdate:()=>{r.textContent=Math.round(n.v)+t}})})}const gd=Array.from(document.querySelectorAll(".endtext__inner")),pM=Array.from(document.querySelectorAll(".endtext__fill")),_d=document.querySelector(".endtext__tile"),Bt=(r,e,t)=>{const n=Yt((t-r)/(e-r),0,1);return n*n*n*(n*(n*6-15)+10)},gr=[{inS:.6,inE:.68,fillS:.7,fillE:.745,leaveS:.76,leaveE:.805,rmS:.95,rmE:.975},{inS:.62,inE:.7,fillS:.76,fillE:.805,leaveS:.82,leaveE:.865,rmS:.96,rmE:.985},{inS:.64,inE:.72,fillS:.82,fillE:.865,leaveS:null,leaveE:null,rmS:.97,rmE:1}];function mM(r){for(let e=0;e<gd.length;e++){const t=gr[e]||gr[gr.length-1],n=(1-ai(t.inS,t.inE,r))*120,i=ai(t.rmS,t.rmE,r)*-120;gd[e].style.transform=`translateY(${(n+i).toFixed(2)}%)`;const s=Bt(t.fillS,t.fillE,r),a=t.leaveS!=null?Bt(t.leaveS,t.leaveE,r):0;pM[e].style.clipPath=`inset(0 ${((1-s)*100).toFixed(2)}% 0 ${(a*100).toFixed(2)}%)`}if(_d){const t=gr[gr.length-1].fillE+.02,n=Bt(t,t+.04,r);_d.style.clipPath=`inset(0 ${((1-n)*100).toFixed(2)}% 0 0)`}}function gM(r){const e=ai(0,.18,r),t=window.innerWidth<oM?115:52;ld&&(ld.style.transform=`translateX(${e*t}vw)`),hd&&(hd.style.transform=`translateX(${-e*t}vw)`),ud&&(ud.style.opacity=String(1-ai(0,.12,r))),document.body.classList.toggle("show-marquee",r>.4&&r<.56);const n=ai(.52,.64,r);if(wr){const i=n*118,s=Math.min(100,i+12);wr.style.maskImage=wr.style.webkitMaskImage=n>0?`linear-gradient(to top, transparent ${i.toFixed(1)}%, #000 ${s.toFixed(1)}%)`:""}mM(r),dM(uM(r))}const hp=window.innerWidth>=992,Vr=hp?.43:1,up=r=>Yt(r/Vr,0,1),no=r=>hp?Yt((r-Vr)/(1-Vr),0,1):0,Qs=5,io=1/Qs,vi={appearS:-.03,appearE:.03,inS:0,inE:.06,outS:.15,outE:.195,erodeS:.165,erodeE:.225};function bd(r){const e=r*io,t=r===0,n=r===Qs-1;return{s0:e,first:t,last:n,appearS:t?e:e+vi.appearS,appearE:t?e+.08:e+vi.appearE,inS:e+vi.inS,inE:e+vi.inE,outS:e+vi.outS,outE:e+vi.outE,erodeS:e+vi.erodeS,erodeE:e+vi.erodeE}}const _M=Array.from(document.querySelectorAll(".tab-content")),po=_M.map(r=>({titleInners:Array.from(r.querySelectorAll(".tab-title__inner")),copy:r.querySelector(".tab-copy")})),Zs=Array.from(document.querySelectorAll(".tab-nav__item")),so=Zs.map(r=>r.querySelector(".tab-nav__fill"));function bM(r){for(let e=0;e<Qs;e++){const t=bd(e),n=Bt(t.appearS,t.appearE,r),i=t.last?0:Bt(t.erodeS,t.erodeE,r),s=Math.max(Math.sin(Math.PI*Yt(n,0,1)),Math.sin(Math.PI*Yt(i,0,1)));et&&et.setTabState&&et.setTabState(e,n,i,s);const a=po[e];if(a){for(let h=0;h<a.titleInners.length;h++){const u=Bt(t.inS+h*.02,t.inE+h*.02,r),d=t.last?0:Bt(t.outS+h*.012,t.outE+h*.012,r);a.titleInners[h].style.transform=`translateY(${((1-u)*130+d*-130).toFixed(2)}%)`}if(a.copy){const h=Bt(t.inS+.02,t.inE+.03,r),u=t.last?0:Bt(t.outS,t.outE,r);a.copy.style.opacity=(h*(1-u)).toFixed(3),a.copy.style.transform=`translateY(${((1-h)*26+u*-26).toFixed(1)}px)`}}const o=(r-t.s0)/io,c=e===Qs-1?1.0001:1,l=o>=0&&o<c;so[e]&&(so[e].style.transform=`scaleX(${(l?Yt(o,0,1):0).toFixed(3)})`),Zs[e]&&Zs[e].classList.toggle("is-active",l)}if(et&&et.setLight){const e=bd(2),t=Bt(e.inS+.02,e.inE+.06,r),n=Bt(e.erodeS,e.erodeE,r);et.setLight(t,1-n)}document.body.classList.toggle("act2",r>1e-4)}let Nn=null;function vM(r,e){const t=po[r];if(!t)return;const n=t.titleInners.length||1,i=1-.14*(n-1);for(let s=0;s<n;s++){const a=Bt(s*.14,s*.14+i,e);t.titleInners[s].style.transform=`translateY(${((1-a)*130).toFixed(2)}%)`}t.copy&&(t.copy.style.opacity=e.toFixed(3),t.copy.style.transform=`translateY(${((1-e)*26).toFixed(1)}px)`)}function xM(r,e){const t=po[r];if(!t)return;const n=t.titleInners.length||1,i=1-.1*(n-1);for(let s=0;s<n;s++){const a=Bt(s*.1,s*.1+i,e);t.titleInners[s].style.transform=`translateY(${(a*-130).toFixed(2)}%)`}t.copy&&(t.copy.style.opacity=(1-e).toFixed(3),t.copy.style.transform=`translateY(${(e*-26).toFixed(1)}px)`)}function yM(r){const e=po[r];if(e){for(const t of e.titleInners)t.style.transform="translateY(130%)";e.copy&&(e.copy.style.opacity="0",e.copy.style.transform="translateY(26px)")}}function SM(r,e,t){const n=Bt(0,.55,t),i=Bt(.42,1,t);for(let s=0;s<Qs;s++)s===r?(et&&et.setTabState(s,1,n,Math.sin(Math.PI*Yt(n,0,1))),xM(s,n)):s===e?(et&&et.setTabState(s,i,0,Math.sin(Math.PI*Yt(i,0,1))),vM(s,i)):(et&&et.setTabState(s,0,0,0),yM(s)),Zs[s]&&Zs[s].classList.toggle("is-active",s===e),so[s]&&(so[s].style.transform=`scaleX(${(s===e?i*.42:0).toFixed(3)})`);et&&et.setLight&&(e===2?et.setLight(i,1):r===2?et.setLight(1,1-n):et.setLight(0,0))}function dp(){if(!Nn)return;const r=Yt((performance.now()-Nn.start)/Nn.dur,0,1);if(SM(Nn.from,Nn.to,r),sr(),r<1){requestAnimationFrame(dp);return}const e=Nn.pg;Nn=null,cn.scrollTo(hh(e),{immediate:!0}),zn=e,mo(e)}function mo(r){gM(up(r)),Nn||bM(no(r))}const cn=new Fx({lerp:.09,smoothWheel:!0});let zn=0,fp=performance.now();const MM=1500,sr=()=>{fp=performance.now()},Rr=document.querySelector(".stage-scroll");let oh=0,ch=1;function lh(){if(!Rr)return;oh=Rr.getBoundingClientRect().top+(window.scrollY||0),ch=Math.max(1,Rr.offsetHeight-window.innerHeight)}const EM=()=>Yt(Rr?(cn.scroll-oh)/ch:cn.limit>0?cn.scroll/cn.limit:0,0,1),hh=r=>Rr?oh+r*ch:r*cn.limit;lh();cn.on("scroll",()=>{zn=EM(),mo(zn),sr()});window.addEventListener("pointermove",sr,{passive:!0});window.addEventListener("resize",()=>{lh(),sr()});window.addEventListener("load",lh);yn.ticker.add(r=>cn.raf(r*1e3));yn.ticker.lagSmoothing(0);cn.stop();mo(0);Zs.forEach((r,e)=>{r.addEventListener("click",()=>{if(Nn||no(zn)<=.001)return;const t=Yt(Math.floor(no(zn)/io),0,Qs-1);if(e===t)return;const n=Vr+(e*io+.12)*(1-Vr);document.body.classList.add("act2"),Nn={from:t,to:e,start:performance.now(),dur:1e3,pg:n},cn.scrollTo(hh(n),{immediate:!0}),requestAnimationFrame(dp)})});const Aa=new fx;let pp=document.hidden;document.addEventListener("visibilitychange",()=>{pp=document.hidden});function mp(){if(requestAnimationFrame(mp),pp||!et||!et.ready){et&&Aa.getDelta();return}if(performance.now()-fp>MM&&!(et.isBusy&&et.isBusy())){Aa.getDelta();return}const r=Math.min(Aa.getDelta(),.05);et.setActProgress(up(zn),no(zn)),et.update(Aa.getElapsedTime(),r),wr&&!fo&&(wr.style.transform=`scale(1.06) translateX(${(-et.mx*2).toFixed(2)}%)`)}function TM(){et=new sM(rM,{reduceMotion:fo}),et.onProgress=r=>hM(Math.min(r*100,92)),et.onReady=()=>{sr(),pd()},window.__world=et,mp(),setTimeout(pd,12e3)}requestAnimationFrame(()=>requestAnimationFrame(TM));window.addEventListener("load",()=>{fo||(yn.from(".line--left",{x:-90,opacity:0,duration:1.1,ease:"power3.out"}),yn.from(".line--right",{x:90,opacity:0,duration:1.1,ease:"power3.out",delay:.08}),yn.from(".hero-copy",{y:26,opacity:0,duration:1,ease:"power3.out",delay:.35})),wM()});const AM=["SMARTBEAR","Bumble","snap finance","ThoughtSpot","XM","ELASTIC","NEXUS","PRIME"];function wM(){const r=document.getElementById("logoTrack");let e="";for(let n=0;n<3;n++)for(const i of AM)e+=`<span class="logo">${i}</span>`;if(r.innerHTML=e,fo)return;const t=r.scrollWidth/3;yn.to(r,{x:-t,duration:26,ease:"none",repeat:-1,modifiers:{x:yn.utils.unitize(n=>parseFloat(n)%t)}})}window.__lenis=cn;window.__setProgress=r=>{zn=Yt(r,0,1),mo(zn),cn.scrollTo(hh(zn),{immediate:!0}),sr()};
