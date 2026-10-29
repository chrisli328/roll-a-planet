var Rm=0,Af=1,Cm=2;var ur=1,Am=2,_o=3,Vs=0,mi=1,vn=2,li=0,mo=1,Pf=2,If=3,Df=4,Mh=5;var xn=100,Pm=101,Im=102,Dm=103,Nm=104,dr=200,Lm=201,Fm=202,Um=203,Nf=204,Lf=205,Ka=206,Bm=207,Qa=208,Om=209,zm=210,km=211,Hm=212,Vm=213,Gm=214,Yc=0,jc=1,$c=2,ro=3,Jc=4,Zc=5,Kc=6,Qc=7,Eh=0,Wm=1,Xm=2,Nn=0,tl=1,el=2,il=3,nl=4,sl=5,rl=6,ol=7,vf="attached",qm="detached",Ff=300,Gs=301,fr=302,Th=303,Rh=304,al=306,Ei=1e3,Yn=1001,th=1002,ke=1003,Ym=1004;var ll=1005;var _i=1006,Ch=1007;var Ws=1008;var vi=1009,Uf=1010,Bf=1011,go=1012,Ah=1013,Ln=1014,un=1015,Fi=1016,Ph=1017,Ih=1018,Xs=1020,Of=35902,zf=35899,kf=1021,Hf=1022,qi=1023,jn=1026,es=1027,Dh=1028,Nh=1029,qs=1030,Lh=1031;var Fh=1033,cl=33776,hl=33777,ul=33778,dl=33779,Uh=35840,Bh=35841,Oh=35842,zh=35843,kh=36196,Hh=37492,Vh=37496,Gh=37488,Wh=37489,fl=37490,Xh=37491,qh=37808,Yh=37809,jh=37810,$h=37811,Jh=37812,Zh=37813,Kh=37814,Qh=37815,tu=37816,eu=37817,iu=37818,nu=37819,su=37820,ru=37821,ou=36492,au=36494,lu=36495,cu=36283,hu=36284,pl=36285,uu=36286;var La=2300,eh=2301,Xc=2302,xf=2303,Sf=2400,Mf=2401,Ef=2402;var jm=3200;var wo=0,$m=1,ws="",Ae="srgb",Fa="srgb-linear",Ua="linear",Re="srgb";var qc=7680;var Jm=519,Zm=512,Km=513,Qm=514,du=515,tg=516,eg=517,fu=518,ig=519,ng=35044;var Vf="300 es",An=2e3,oo=2001;function ab(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function lb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function sg(){let n=Ba("canvas");return n.style.display="block",n}var Q_={},ao=null;function Gf(...n){let t="THREE."+n.shift();ao?ao("log",t,...n):console.log(t,...n)}function rg(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=rg(n);let t="THREE."+n.shift();if(ao)ao("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function te(...n){n=rg(n);let t="THREE."+n.shift();if(ao)ao("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function or(...n){let t=n.join(" ");t in Q_||(Q_[t]=!0,Jt(...n))}function og(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var ag={[Yc]:jc,[$c]:Kc,[Jc]:Qc,[ro]:Zc,[jc]:Yc,[Kc]:$c,[Qc]:Jc,[Zc]:ro},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Di=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $d=Math.PI/180,ih=180/Math.PI;function bo(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Di[n&255]+Di[n>>8&255]+Di[n>>16&255]+Di[n>>24&255]+"-"+Di[t&255]+Di[t>>8&255]+"-"+Di[t>>16&15|64]+Di[t>>24&255]+"-"+Di[e&63|128]+Di[e>>8&255]+"-"+Di[e>>16&255]+Di[e>>24&255]+Di[i&255]+Di[i>>8&255]+Di[i>>16&255]+Di[i>>24&255]).toLowerCase()}function Se(n,t,e){return Math.max(t,Math.min(e,n))}function cb(n,t){return(n%t+t)%t}function Jd(n,t,e){return(1-e)*n+e*t}function Ta(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jf=class jf{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jf.prototype.isVector2=!0;var qt=jf,ti=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],d=i[s+3],f=r[o+0],p=r[o+1],_=r[o+2],b=r[o+3];if(d!==b||l!==f||h!==p||u!==_){let g=l*f+h*p+u*_+d*b;g<0&&(f=-f,p=-p,_=-_,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),C=Math.sin(x);m=Math.sin(m*x)/C,a=Math.sin(a*x)/C,l=l*m+f*a,h=h*m+p*a,u=u*m+_*a,d=d*m+b*a}else{l=l*m+f*a,h=h*m+p*a,u=u*m+_*a,d=d*m+b*a;let x=1/Math.sqrt(l*l+h*h+u*u+d*d);l*=x,h*=x,u*=x,d*=x}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*p-h*f,t[e+1]=l*_+u*f+h*d-a*p,t[e+2]=h*_+u*p+a*f-l*d,t[e+3]=u*_-a*d-l*f-h*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d+f*p*_;break;case"YZX":this._x=f*u*d+h*p*_,this._y=h*p*d+f*u*_,this._z=h*u*_-f*p*d,this._w=h*u*d-f*p*_;break;case"XZY":this._x=f*u*d-h*p*_,this._y=h*p*d-f*u*_,this._z=h*u*_+f*p*d,this._w=h*u*d+f*p*_;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-h)*p,this._z=(o-s)*p}else if(i>a&&i>d){let p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+h)/p}else if(a>d){let p=2*Math.sqrt(1+a-i-d);this._w=(r-h)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+h)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),u=Math.sin(h);l=Math.sin(l*h)/u,e=Math.sin(e*h)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},$f=class $f{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*h+o*d-a*u,this.y=i+l*u+a*h-r*d,this.z=s+l*d+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Zd.copy(this).projectOnVector(t),this.sub(Zd)}reflect(t){return this.sub(Zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Se(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$f.prototype.isVector3=!0;var F=$f,Zd=new F,tm=new ti,Jf=class Jf{constructor(t,e,i,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],b=s[0],g=s[3],m=s[6],x=s[1],C=s[4],y=s[7],T=s[2],S=s[5],R=s[8];return r[0]=o*b+a*x+l*T,r[3]=o*g+a*C+l*S,r[6]=o*m+a*y+l*R,r[1]=h*b+u*x+d*T,r[4]=h*g+u*C+d*S,r[7]=h*m+u*y+d*R,r[2]=f*b+p*x+_*T,r[5]=f*g+p*C+_*S,r[8]=f*m+p*y+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],d=u*o-a*h,f=a*l-u*r,p=h*r-o*l,_=e*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/_;return t[0]=d*b,t[1]=(s*h-u*i)*b,t[2]=(a*i-s*o)*b,t[3]=f*b,t[4]=(u*e-s*l)*b,t[5]=(s*r-a*e)*b,t[6]=p*b,t[7]=(i*l-h*e)*b,t[8]=(o*e-i*r)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kd.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kd.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jf.prototype.isMatrix3=!0;var le=Jf,Kd=new le,em=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),im=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hb(){let n={enabled:!0,workingColorSpace:Fa,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Re&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Re&&(s.r=so(s.r),s.g=so(s.g),s.b=so(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ws?Ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fa]:{primaries:t,whitePoint:i,transfer:Ua,toXYZ:em,fromXYZ:im,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:i,transfer:Re,toXYZ:em,fromXYZ:im,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),n}var be=hb();function ds(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function so(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Wr,nh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wr===void 0&&(Wr=Ba("canvas")),Wr.width=t.width,Wr.height=t.height;let s=Wr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Wr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ba("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ds(e[i]/255)*255):e[i]=ds(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ub=0,lo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qd(s[o].image)):r.push(Qd(s[o]))}else r=Qd(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Qd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var db=0,tf=new F,Wi=class n extends $n{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Yn,s=Yn,r=_i,o=Ws,a=qi,l=vi,h=n.DEFAULT_ANISOTROPY,u=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=bo(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tf).x}get height(){return this.source.getSize(tf).y}get depth(){return this.source.getSize(tf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ff)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ei:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case th:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ei:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case th:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wi.DEFAULT_IMAGE=null;Wi.DEFAULT_MAPPING=Ff;Wi.DEFAULT_ANISOTROPY=1;var Zf=class Zf{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-b)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+b)<.1&&Math.abs(_+g)<.1&&Math.abs(h+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(h+1)/2,y=(p+1)/2,T=(m+1)/2,S=(u+f)/4,R=(d+b)/4,w=(_+g)/4;return C>y&&C>T?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=S/i,r=R/i):y>T?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=S/s,r=w/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=R/r,s=w/r),this.set(i,s,r,e),this}let x=Math.sqrt((g-_)*(g-_)+(d-b)*(d-b)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-_)/x,this.y=(d-b)/x,this.z=(f-u)/x,this.w=Math.acos((h+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Se(this.x,t.x,e.x),this.y=Se(this.y,t.y,e.y),this.z=Se(this.z,t.z,e.z),this.w=Se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Se(this.x,t,e),this.y=Se(this.y,t,e),this.z=Se(this.z,t,e),this.w=Se(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Se(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zf.prototype.isVector4=!0;var Pe=Zf,sh=class extends $n{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new Wi(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new lo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends sh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Oa=class extends Wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends Wi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sh=class Sh{constructor(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g)}set(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=h,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=_,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sh().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Xr.setFromMatrixColumn(t,0).length(),r=1/Xr.setFromMatrixColumn(t,1).length(),o=1/Xr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*d,_=a*u,b=a*d;e[0]=l*u,e[4]=-l*d,e[8]=h,e[1]=p+_*h,e[5]=f-b*h,e[9]=-a*l,e[2]=b-f*h,e[6]=_+p*h,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,_=h*u,b=h*d;e[0]=f+b*a,e[4]=_*a-p,e[8]=o*h,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=b+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,_=h*u,b=h*d;e[0]=f-b*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=b-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*d,_=a*u,b=a*d;e[0]=l*u,e[4]=_*h-p,e[8]=f*h+b,e[1]=l*d,e[5]=b*h+f,e[9]=p*h-_,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*h,_=a*l,b=a*h;e[0]=l*u,e[4]=b-f*d,e[8]=_*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=p*d+_,e[10]=f-b*d}else if(t.order==="XZY"){let f=o*l,p=o*h,_=a*l,b=a*h;e[0]=l*u,e[4]=-d,e[8]=h*u,e[1]=f*d+b,e[5]=o*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*u,e[10]=b*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fb,t,pb)}lookAt(t,e,i){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),As.crossVectors(i,an),As.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),As.crossVectors(i,an)),As.normalize(),Mc.crossVectors(an,As),s[0]=As.x,s[4]=Mc.x,s[8]=an.x,s[1]=As.y,s[5]=Mc.y,s[9]=an.y,s[2]=As.z,s[6]=Mc.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],b=i[6],g=i[10],m=i[14],x=i[3],C=i[7],y=i[11],T=i[15],S=s[0],R=s[4],w=s[8],M=s[12],P=s[1],N=s[5],U=s[9],k=s[13],L=s[2],V=s[6],j=s[10],Z=s[14],lt=s[3],$=s[7],nt=s[11],at=s[15];return r[0]=o*S+a*P+l*L+h*lt,r[4]=o*R+a*N+l*V+h*$,r[8]=o*w+a*U+l*j+h*nt,r[12]=o*M+a*k+l*Z+h*at,r[1]=u*S+d*P+f*L+p*lt,r[5]=u*R+d*N+f*V+p*$,r[9]=u*w+d*U+f*j+p*nt,r[13]=u*M+d*k+f*Z+p*at,r[2]=_*S+b*P+g*L+m*lt,r[6]=_*R+b*N+g*V+m*$,r[10]=_*w+b*U+g*j+m*nt,r[14]=_*M+b*k+g*Z+m*at,r[3]=x*S+C*P+y*L+T*lt,r[7]=x*R+C*N+y*V+T*$,r[11]=x*w+C*U+y*j+T*nt,r[15]=x*M+C*k+y*Z+T*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],b=t[7],g=t[11],m=t[15],x=l*p-h*f,C=a*p-h*d,y=a*f-l*d,T=o*p-h*u,S=o*f-l*u,R=o*d-a*u;return e*(b*x-g*C+m*y)-i*(_*x-g*T+m*S)+s*(_*C-b*T+m*R)-r*(_*y-b*S+g*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],u=t[10];return e*(o*u-a*h)-i*(r*u-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],b=t[13],g=t[14],m=t[15],x=e*a-i*o,C=e*l-s*o,y=e*h-r*o,T=i*l-s*a,S=i*h-r*a,R=s*h-r*l,w=u*b-d*_,M=u*g-f*_,P=u*m-p*_,N=d*g-f*b,U=d*m-p*b,k=f*m-p*g,L=x*k-C*U+y*N+T*P-S*M+R*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/L;return t[0]=(a*k-l*U+h*N)*V,t[1]=(s*U-i*k-r*N)*V,t[2]=(b*R-g*S+m*T)*V,t[3]=(f*S-d*R-p*T)*V,t[4]=(l*P-o*k-h*M)*V,t[5]=(e*k-s*P+r*M)*V,t[6]=(g*y-_*R-m*C)*V,t[7]=(u*R-f*y+p*C)*V,t[8]=(o*U-a*P+h*w)*V,t[9]=(i*P-e*U-r*w)*V,t[10]=(_*S-b*y+m*x)*V,t[11]=(d*y-u*S-p*x)*V,t[12]=(a*M-o*N-l*w)*V,t[13]=(e*N-i*M+s*w)*V,t[14]=(b*C-_*T-g*x)*V,t[15]=(u*T-d*C+f*x)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,d=a+a,f=r*h,p=r*u,_=r*d,b=o*u,g=o*d,m=a*d,x=l*h,C=l*u,y=l*d,T=i.x,S=i.y,R=i.z;return s[0]=(1-(b+m))*T,s[1]=(p+y)*T,s[2]=(_-C)*T,s[3]=0,s[4]=(p-y)*S,s[5]=(1-(f+m))*S,s[6]=(g+x)*S,s[7]=0,s[8]=(_+C)*R,s[9]=(g-x)*R,s[10]=(1-(f+b))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Xr.set(s[0],s[1],s[2]).length(),a=Xr.set(s[4],s[5],s[6]).length(),l=Xr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),En.copy(this);let h=1/o,u=1/a,d=1/l;return En.elements[0]*=h,En.elements[1]*=h,En.elements[2]*=h,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=An,l=!1){let h=this.elements,u=2*r/(e-t),d=2*r/(i-s),f=(e+t)/(e-t),p=(i+s)/(i-s),_,b;if(l)_=r/(o-r),b=o*r/(o-r);else if(a===An)_=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===oo)_=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=f,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=_,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=An,l=!1){let h=this.elements,u=2/(e-t),d=2/(i-s),f=-(e+t)/(e-t),p=-(i+s)/(i-s),_,b;if(l)_=1/(o-r),b=o/(o-r);else if(a===An)_=-2/(o-r),b=-(o+r)/(o-r);else if(a===oo)_=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=u,h[4]=0,h[8]=0,h[12]=f,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=_,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sh.prototype.isMatrix4=!0;var Yt=Sh,Xr=new F,En=new Yt,fb=new F(0,0,0),pb=new F(1,1,1),As=new F,Mc=new F,an=new F,nm=new Yt,sm=new ti,Ti=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nm,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sm.setFromEuler(this),this.setFromQuaternion(sm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var za=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},_b=0,rm=new F,qr=new ti,as=new Yt,Ec=new F,Ra=new F,mb=new F,gb=new ti,om=new F(1,0,0),am=new F(0,1,0),lm=new F(0,0,1),cm={type:"added"},wb={type:"removed"},Yr={type:"childadded",child:null},ef={type:"childremoved",child:null},Ri=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new Ti,i=new ti,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new le}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new za,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.multiply(qr),this}rotateOnWorldAxis(t,e){return qr.setFromAxisAngle(t,e),this.quaternion.premultiply(qr),this}rotateX(t){return this.rotateOnAxis(om,t)}rotateY(t){return this.rotateOnAxis(am,t)}rotateZ(t){return this.rotateOnAxis(lm,t)}translateOnAxis(t,e){return rm.copy(t).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(om,t)}translateY(t){return this.translateOnAxis(am,t)}translateZ(t){return this.translateOnAxis(lm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ec.copy(t):Ec.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(Ra,Ec,this.up):as.lookAt(Ec,Ra,this.up),this.quaternion.setFromRotationMatrix(as),s&&(as.extractRotation(s.matrixWorld),qr.setFromRotationMatrix(as),this.quaternion.premultiply(qr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cm),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wb),ef.child=t,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),as.multiply(t.parent.matrixWorld)),t.applyMatrix4(as),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cm),Yr.child=t,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,mb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,gb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){let l=[];for(let h in a){let u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ri.DEFAULT_UP=new F(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},bb={type:"move"},co=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,i),m=this._getHandJoint(h,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;h.inputState.pinching&&f>p+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=p-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ye;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ps={h:0,s:0,l:0},Tc={h:0,s:0,l:0};function nf(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ht=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=be.workingColorSpace){return this.r=t,this.g=e,this.b=i,be.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=be.workingColorSpace){if(t=cb(t,1),e=Se(e,0,1),i=Se(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=nf(o,r,t+1/3),this.g=nf(o,r,t),this.b=nf(o,r,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let i=lg[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}copyLinearToSRGB(t){return this.r=so(t.r),this.g=so(t.g),this.b=so(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return be.workingToColorSpace(Ni.copy(this),t),Math.round(Se(Ni.r*255,0,255))*65536+Math.round(Se(Ni.g*255,0,255))*256+Math.round(Se(Ni.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=be.workingColorSpace){be.workingToColorSpace(Ni.copy(this),e);let i=Ni.r,s=Ni.g,r=Ni.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,u=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=be.workingColorSpace){return be.workingToColorSpace(Ni.copy(this),e),t.r=Ni.r,t.g=Ni.g,t.b=Ni.b,t}getStyle(t=Ae){be.workingToColorSpace(Ni.copy(this),t);let e=Ni.r,i=Ni.g,s=Ni.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ps),this.setHSL(Ps.h+t,Ps.s+e,Ps.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ps),t.getHSL(Tc);let i=Jd(Ps.h,Tc.h,e),s=Jd(Ps.s,Tc.s,e),r=Jd(Ps.l,Tc.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ni=new Ht;Ht.NAMES=lg;var ar=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fs=class extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Tn=new F,ls=new F,sf=new F,cs=new F,jr=new F,$r=new F,hm=new F,rf=new F,of=new F,af=new F,lf=new Pe,cf=new Pe,hf=new Pe,Ls=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),ls.subVectors(i,e),sf.subVectors(t,e);let o=Tn.dot(Tn),a=Tn.dot(ls),l=Tn.dot(sf),h=ls.dot(ls),u=ls.dot(sf),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(h*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(o,cs.y),l.addScaledVector(a,cs.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return lf.setScalar(0),cf.setScalar(0),hf.setScalar(0),lf.fromBufferAttribute(t,e),cf.fromBufferAttribute(t,i),hf.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lf,r.x),o.addScaledVector(cf,r.y),o.addScaledVector(hf,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),ls.subVectors(t,e),Tn.cross(ls).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Tn.cross(ls).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;jr.subVectors(s,i),$r.subVectors(r,i),rf.subVectors(t,i);let l=jr.dot(rf),h=$r.dot(rf);if(l<=0&&h<=0)return e.copy(i);of.subVectors(t,s);let u=jr.dot(of),d=$r.dot(of);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(jr,o);af.subVectors(t,r);let p=jr.dot(af),_=$r.dot(af);if(_>=0&&p<=_)return e.copy(r);let b=p*h-l*_;if(b<=0&&h>=0&&_<=0)return a=h/(h-_),e.copy(i).addScaledVector($r,a);let g=u*_-p*d;if(g<=0&&d-u>=0&&p-_>=0)return hm.subVectors(r,s),a=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(hm,a);let m=1/(g+b+f);return o=b*m,a=f*m,e.copy(i).addScaledVector(jr,o).addScaledVector($r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(t.matrixWorld),this.union(Rc)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ca),Cc.subVectors(this.max,Ca),Jr.subVectors(t.a,Ca),Zr.subVectors(t.b,Ca),Kr.subVectors(t.c,Ca),Is.subVectors(Zr,Jr),Ds.subVectors(Kr,Zr),ir.subVectors(Jr,Kr);let e=[0,-Is.z,Is.y,0,-Ds.z,Ds.y,0,-ir.z,ir.y,Is.z,0,-Is.x,Ds.z,0,-Ds.x,ir.z,0,-ir.x,-Is.y,Is.x,0,-Ds.y,Ds.x,0,-ir.y,ir.x,0];return!uf(e,Jr,Zr,Kr,Cc)||(e=[1,0,0,0,1,0,0,0,1],!uf(e,Jr,Zr,Kr,Cc))?!1:(Ac.crossVectors(Is,Ds),e=[Ac.x,Ac.y,Ac.z],uf(e,Jr,Zr,Kr,Cc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hs),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hs=[new F,new F,new F,new F,new F,new F,new F,new F],Rn=new F,Rc=new Pn,Jr=new F,Zr=new F,Kr=new F,Is=new F,Ds=new F,ir=new F,Ca=new F,Cc=new F,Ac=new F,nr=new F;function uf(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){nr.fromArray(n,r);let a=s.x*Math.abs(nr.x)+s.y*Math.abs(nr.y)+s.z*Math.abs(nr.z),l=t.dot(nr),h=e.dot(nr),u=i.dot(nr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}var hi=new F,Pc=new qt,yb=0,di=class extends $n{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ng,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Pc.fromBufferAttribute(this,e),Pc.applyMatrix3(t),this.setXY(e,Pc.x,Pc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix3(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyMatrix4(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.applyNormalMatrix(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)hi.fromBufferAttribute(this,e),hi.transformDirection(t),this.setXYZ(e,hi.x,hi.y,hi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qi(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ta(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ta(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ta(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ta(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qi(e,this.array),i=Qi(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qi(e,this.array),i=Qi(i,this.array),s=Qi(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qi(e,this.array),i=Qi(i,this.array),s=Qi(s,this.array),r=Qi(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Fs=class extends di{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends di{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var he=class extends di{constructor(t,e,i){super(new Float32Array(t),e,i)}},vb=new Pn,Aa=new F,df=new F,Jn=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):vb.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Aa.subVectors(t,this.center);let e=Aa.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Aa,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(df.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Aa.copy(t.center).add(df)),this.expandByPoint(Aa.copy(t.center).sub(df))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xb=0,yn=new Yt,ff=new Ri,Qr=new F,ln=new Pn,Pa=new Pn,yi=new F,je=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ab(t)?lr:Fs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new le().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,i){return yn.makeTranslation(t,e,i),this.applyMatrix4(yn),this}scale(t,e,i){return yn.makeScale(t,e,i),this.applyMatrix4(yn),this}lookAt(t){return ff.lookAt(t),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new he(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(yi.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(yi),yi.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(yi)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Pa.setFromBufferAttribute(a),this.morphTargetsRelative?(yi.addVectors(ln.min,Pa.min),ln.expandByPoint(yi),yi.addVectors(ln.max,Pa.max),ln.expandByPoint(yi)):(ln.expandByPoint(Pa.min),ln.expandByPoint(Pa.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)yi.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(yi));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)yi.fromBufferAttribute(a,h),l&&(Qr.fromBufferAttribute(t,h),yi.add(Qr)),s=Math.max(s,i.distanceToSquared(yi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let w=0;w<i.count;w++)a[w]=new F,l[w]=new F;let h=new F,u=new F,d=new F,f=new qt,p=new qt,_=new qt,b=new F,g=new F;function m(w,M,P){h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,P),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,P),u.sub(h),d.sub(h),p.sub(f),_.sub(f);let N=1/(p.x*_.y-_.x*p.y);isFinite(N)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(N),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(N),a[w].add(b),a[M].add(b),a[P].add(b),l[w].add(g),l[M].add(g),l[P].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let w=0,M=x.length;w<M;++w){let P=x[w],N=P.start,U=P.count;for(let k=N,L=N+U;k<L;k+=3)m(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let C=new F,y=new F,T=new F,S=new F;function R(w){T.fromBufferAttribute(s,w),S.copy(T);let M=a[w];C.copy(M),C.sub(T.multiplyScalar(T.dot(M))).normalize(),y.crossVectors(S,M);let N=y.dot(l[w])<0?-1:1;o.setXYZW(w,C.x,C.y,C.z,N)}for(let w=0,M=x.length;w<M;++w){let P=x[w],N=P.start,U=P.count;for(let k=N,L=N+U;k<L;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new di(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,h=new F,u=new F,d=new F;if(t)for(let f=0,p=t.count;f<p;f+=3){let _=t.getX(f+0),b=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,b),h.fromBufferAttribute(i,g),a.add(u),l.add(u),h.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)yi.fromBufferAttribute(t,e),yi.normalize(),t.setXYZ(e,yi.x,yi.y,yi.z)}toNonIndexed(){function t(a,l){let h=a.array,u=a.itemSize,d=a.normalized,f=new h.constructor(l.length*u),p=0,_=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*u;for(let m=0;m<u;m++)f[_++]=h[p++]}return new di(f,u,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let u=0,d=h.length;u<d;u++){let f=h[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,f=h.length;d<f;d++){let p=h[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let u=s[h];this.setAttribute(h,u.clone(e))}let r=t.morphAttributes;for(let h in r){let u=[],d=r[h];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,u=o.length;h<u;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pf=new F,Sb=new F,Mb=new le,Cn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=pf.subVectors(i,e).cross(Sb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(pf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Mb.getNormalMatrix(t),s=this.coplanarPoint(pf).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Eb=0,Zn=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=mo,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Lf,this.blendEquation=xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Cn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var us=new F,_f=new F,Ic=new F,Dc=new F,ka=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,us)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=us.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(us.copy(this.origin).addScaledVector(this.direction,e),us.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){_f.copy(t).add(e).multiplyScalar(.5),Ic.copy(e).sub(t).normalize(),Dc.copy(this.origin).sub(_f);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ic),a=Dc.dot(this.direction),l=-Dc.dot(Ic),h=Dc.lengthSq(),u=Math.abs(1-o*o),d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){let b=1/u;d*=b,f*=b,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+h}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+h;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+h;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+h):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+h):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+h);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(_f).addScaledVector(Ic,f),p}intersectSphere(t,e){if(t.radius<0)return null;us.subVectors(t.center,this.origin);let i=us.dot(this.direction),s=us.dot(us)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,us)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,u=a.z,d=t.x-o.x,f=t.y-o.y,p=t.z-o.z,_=e.x-o.x,b=e.y-o.y,g=e.z-o.z,m=i.x-o.x,x=i.y-o.y,C=i.z-o.z,y=Math.abs(l),T=Math.abs(h),S=Math.abs(u),R,w,M,P,N,U,k,L,V,j,Z,lt;if(y>=T&&y>=S?(M=l,U=d,V=_,lt=m,l>=0?(R=h,w=u,P=f,N=p,k=b,L=g,j=x,Z=C):(R=u,w=h,P=p,N=f,k=g,L=b,j=C,Z=x)):T>=S?(M=h,U=f,V=b,lt=x,h>=0?(R=u,w=l,P=p,N=d,k=g,L=_,j=C,Z=m):(R=l,w=u,P=d,N=p,k=_,L=g,j=m,Z=C)):(M=u,U=p,V=g,lt=C,u>=0?(R=l,w=h,P=d,N=f,k=_,L=b,j=m,Z=x):(R=h,w=l,P=f,N=d,k=b,L=_,j=x,Z=m)),M===0)return null;let $=R/M,nt=w/M,at=1/M,It=P-$*U,Dt=N-nt*U,Ee=k-$*V,de=L-nt*V,fe=j-$*lt,Q=Z-nt*lt,it=fe*de-Q*Ee,Mt=It*Q-Dt*fe,Vt=Ee*Dt-de*It;if(s){if(it<0||Mt<0||Vt<0)return null}else if((it<0||Mt<0||Vt<0)&&(it>0||Mt>0||Vt>0))return null;let Tt=it+Mt+Vt;if(Tt===0)return null;let ae=at*(it*U+Mt*V+Vt*lt);return(Tt>0?ae<0:ae>0)?null:this.at(ae/Tt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Li=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},um=new Yt,sr=new ka,Nc=new Jn,dm=new F,Lc=new F,Fc=new F,Uc=new F,mf=new F,Bc=new F,fm=new F,Oc=new F,ee=class extends Ri{constructor(t=new je,e=new Li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Bc.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let u=a[l],d=r[l];u!==0&&(mf.fromBufferAttribute(d,t),o?Bc.addScaledVector(mf,u):Bc.addScaledVector(mf.sub(e),u))}e.add(Bc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Nc.copy(i.boundingSphere),Nc.applyMatrix4(r),sr.copy(t.ray).recast(t.near),!(Nc.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Nc,dm)===null||sr.origin.distanceToSquared(dm)>(t.far-t.near)**2))&&(um.copy(r).invert(),sr.copy(t.ray).applyMatrix4(um),!(i.boundingBox!==null&&sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,sr)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let g=f[_],m=o[g.materialIndex],x=Math.max(g.start,p.start),C=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,T=C;y<T;y+=3){let S=a.getX(y),R=a.getX(y+1),w=a.getX(y+2);s=zc(this,m,t,i,h,u,d,S,R,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let g=_,m=b;g<m;g+=3){let x=a.getX(g),C=a.getX(g+1),y=a.getX(g+2);s=zc(this,o,t,i,h,u,d,x,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,b=f.length;_<b;_++){let g=f[_],m=o[g.materialIndex],x=Math.max(g.start,p.start),C=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=x,T=C;y<T;y+=3){let S=y,R=y+1,w=y+2;s=zc(this,m,t,i,h,u,d,S,R,w),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let g=_,m=b;g<m;g+=3){let x=g,C=g+1,y=g+2;s=zc(this,o,t,i,h,u,d,x,C,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Tb(n,t,e,i,s,r,o,a){let l;if(t.side===mi?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Vs,a),l===null)return null;Oc.copy(a),Oc.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Oc);return h<e.near||h>e.far?null:{distance:h,point:Oc.clone(),object:n}}function zc(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Lc),n.getVertexPosition(l,Fc),n.getVertexPosition(h,Uc);let u=Tb(n,t,e,i,Lc,Fc,Uc,fm);if(u){let d=new F;Ls.getBarycoord(fm,Lc,Fc,Uc,d),s&&(u.uv=Ls.getInterpolatedAttribute(s,a,l,h,d,new qt)),r&&(u.uv1=Ls.getInterpolatedAttribute(r,a,l,h,d,new qt)),o&&(u.normal=Ls.getInterpolatedAttribute(o,a,l,h,d,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c:h,normal:new F,materialIndex:0};Ls.getNormal(Lc,Fc,Uc,f.normal),u.face=f,u.barycoord=d}return u}var Ia=new Pe,pm=new Pe,_m=new Pe,Rb=new Pe,mm=new Yt,kc=new F,gf=new Jn,gm=new Yt,wf=new ka,ho=class extends ee{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=vf,this.bindMatrix=new Yt,this.bindMatrixInverse=new Yt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Pn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,kc),this.boundingBox.expandByPoint(kc)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let i=0;i<e.count;i++)this.getVertexPosition(i,kc),this.boundingSphere.expandByPoint(kc)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gf.copy(this.boundingSphere),gf.applyMatrix4(s),t.ray.intersectsSphere(gf)!==!1&&(gm.copy(s).invert(),wf.copy(t.ray).applyMatrix4(gm),!(this.boundingBox!==null&&wf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,wf)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new Pe,e=this.geometry.attributes.skinWeight;for(let i=0,s=e.count;i<s;i++){t.fromBufferAttribute(e,i);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===vf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qm?this.bindMatrixInverse.copy(this.bindMatrix).invert():Jt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let i=this.skeleton,s=this.geometry;pm.fromBufferAttribute(s.attributes.skinIndex,t),_m.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Ia.copy(e),e.set(0,0,0,0)):(Ia.set(...e,1),e.set(0,0,0)),Ia.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=_m.getComponent(r);if(o!==0){let a=pm.getComponent(r);mm.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),e.addScaledVector(Rb.copy(Ia).applyMatrix4(mm),o)}}return e.isVector4&&(e.w=Ia.w),e.applyMatrix4(this.bindMatrixInverse)}},uo=class extends Ri{constructor(){super(),this.isBone=!0,this.type="Bone"}},Kn=class extends Wi{constructor(t=null,e=1,i=1,s,r,o,a,l,h=ke,u=ke,d,f){super(null,o,a,l,h,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wm=new Yt,Cb=new Yt,Ha=class n{constructor(t=[],e=[]){this.uuid=bo(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Jt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Yt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let i=new Yt;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let t=this.bones,e=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=t.length;r<o;r++){let a=t[r]?t[r].matrixWorld:Cb;wm.multiplyMatrices(a,e[r]),wm.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let i=new Kn(e,t,t,qi,un);return i.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=i,this}getBoneByName(t){for(let e=0,i=this.bones.length;e<i;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let i=0,s=t.bones.length;i<s;i++){let r=t.bones[i],o=e[r];o===void 0&&(Jt("Skeleton: No bone found with UUID:",r),o=new uo),this.bones.push(o),this.boneInverses.push(new Yt().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,i=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let o=e[s];t.bones.push(o.uuid);let a=i[s];t.boneInverses.push(a.toArray())}return t}},Us=class extends di{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},to=new Yt,bm=new Yt,Hc=[],ym=new Pn,Ab=new Yt,Da=new ee,Na=new Jn,cr=class extends ee{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Ab)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,to),ym.copy(t.boundingBox).applyMatrix4(to),this.boundingBox.union(ym)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,to),Na.copy(t.boundingSphere).applyMatrix4(to),this.boundingSphere.union(Na)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Da.geometry=this.geometry,Da.material=this.material,Da.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Na.copy(this.boundingSphere),Na.applyMatrix4(i),t.ray.intersectsSphere(Na)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,to),bm.multiplyMatrices(i,to),Da.matrixWorld=bm,Da.raycast(t,Hc);for(let o=0,a=Hc.length;o<a;o++){let l=Hc[o];l.instanceId=r,l.object=this,e.push(l)}Hc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Kn(new Float32Array(s*this.count),s,this.count,Dh,un));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rr=new Jn,Pb=new qt(.5,.5),Vc=new F,fo=class{constructor(t=new Cn,e=new Cn,i=new Cn,s=new Cn,r=new Cn,o=new Cn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],u=r[4],d=r[5],f=r[6],p=r[7],_=r[8],b=r[9],g=r[10],m=r[11],x=r[12],C=r[13],y=r[14],T=r[15];if(s[0].setComponents(h-o,p-u,m-_,T-x).normalize(),s[1].setComponents(h+o,p+u,m+_,T+x).normalize(),s[2].setComponents(h+a,p+d,m+b,T+C).normalize(),s[3].setComponents(h-a,p-d,m-b,T-C).normalize(),i)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(h-l,p-f,m-g,T-y).normalize();else if(s[4].setComponents(h-l,p-f,m-g,T-y).normalize(),e===An)s[5].setComponents(h+l,p+f,m+g,T+y).normalize();else if(e===oo)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);let e=Pb.distanceTo(t.center);return rr.radius=.7071067811865476+e,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Vc.x=s.normal.x>0?t.max.x:t.min.x,Vc.y=s.normal.y>0?t.max.y:t.min.y,Vc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Va=class extends Wi{constructor(t=[],e=Gs,i,s,r,o,a,l,h,u){super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ci=class extends Wi{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qn=class extends Wi{constructor(t,e,i=Ln,s,r,o,a=ke,l=ke,h,u=jn,d=1){if(u!==jn&&u!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oh=class extends Qn{constructor(t,e=Ln,i=Gs,s,r,o=ke,a=ke,l,h=jn){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ga=class extends Wi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},In=class n extends je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],u=[],d=[],f=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2));function _(b,g,m,x,C,y,T,S,R,w,M){let P=y/R,N=T/w,U=y/2,k=T/2,L=S/2,V=R+1,j=w+1,Z=0,lt=0,$=new F;for(let nt=0;nt<j;nt++){let at=nt*N-k;for(let It=0;It<V;It++){let Dt=It*P-U;$[b]=Dt*x,$[g]=at*C,$[m]=L,h.push($.x,$.y,$.z),$[b]=0,$[g]=0,$[m]=S>0?1:-1,u.push($.x,$.y,$.z),d.push(It/R),d.push(1-nt/w),Z+=1}}for(let nt=0;nt<w;nt++)for(let at=0;at<R;at++){let It=f+at+V*nt,Dt=f+at+V*(nt+1),Ee=f+(at+1)+V*(nt+1),de=f+(at+1)+V*nt;l.push(It,Dt,de),l.push(Dt,Ee,de),lt+=6}a.addGroup(p,lt,M),p+=lt,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ps=class n extends je{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],h=[],u=e/2,d=Math.PI/2*t,f=e,p=2*d+f,_=i*2+r,b=s+1,g=new F,m=new F;for(let x=0;x<=_;x++){let C=0,y=0,T=0,S=0;if(x<=i){let M=x/i,P=M*Math.PI/2;y=-u-t*Math.cos(P),T=t*Math.sin(P),S=-t*Math.cos(P),C=M*d}else if(x<=i+r){let M=(x-i)/r;y=-u+M*e,T=t,S=0,C=d+M*f}else{let M=(x-i-r)/i,P=M*Math.PI/2;y=u+t*Math.sin(P),T=t*Math.cos(P),S=t*Math.sin(P),C=d+f+M*d}let R=Math.max(0,Math.min(1,C/p)),w=0;x===0?w=.5/s:x===_&&(w=-.5/s);for(let M=0;M<=s;M++){let P=M/s,N=P*Math.PI*2,U=Math.sin(N),k=Math.cos(N);m.x=-T*k,m.y=y,m.z=T*U,a.push(m.x,m.y,m.z),g.set(-T*k,S,T*U),g.normalize(),l.push(g.x,g.y,g.z),h.push(P+w,R)}if(x>0){let M=(x-1)*b;for(let P=0;P<s;P++){let N=M+P,U=M+P+1,k=x*b+P,L=x*b+P+1;o.push(N,U,k),o.push(U,L,k)}}}this.setIndex(o),this.setAttribute("position",new he(a,3)),this.setAttribute("normal",new he(l,3)),this.setAttribute("uv",new he(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_s=class n extends je{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new F,u=new qt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=i+d/e*s;h.x=t*Math.cos(p),h.y=t*Math.sin(p),o.push(h.x,h.y,h.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new he(o,3)),this.setAttribute("normal",new he(a,3)),this.setAttribute("uv",new he(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ms=class n extends je{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],_=0,b=[],g=i/2,m=0;x(),o===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new he(d,3)),this.setAttribute("normal",new he(f,3)),this.setAttribute("uv",new he(p,2));function x(){let y=new F,T=new F,S=0,R=(e-t)/i;for(let w=0;w<=r;w++){let M=[],P=w/r,N=P*(e-t)+t;for(let U=0;U<=s;U++){let k=U/s,L=k*l+a,V=Math.sin(L),j=Math.cos(L);T.x=N*V,T.y=-P*i+g,T.z=N*j,d.push(T.x,T.y,T.z),y.set(V,R,j).normalize(),f.push(y.x,y.y,y.z),p.push(k,1-P),M.push(_++)}b.push(M)}for(let w=0;w<s;w++)for(let M=0;M<r;M++){let P=b[M][w],N=b[M+1][w],U=b[M+1][w+1],k=b[M][w+1];(t>0||M!==0)&&(u.push(P,N,k),S+=3),(e>0||M!==r-1)&&(u.push(N,U,k),S+=3)}h.addGroup(m,S,0),m+=S}function C(y){let T=_,S=new qt,R=new F,w=0,M=y===!0?t:e,P=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,g*P,0),f.push(0,P,0),p.push(.5,.5),_++;let N=_;for(let U=0;U<=s;U++){let L=U/s*l+a,V=Math.cos(L),j=Math.sin(L);R.x=M*j,R.y=g*P,R.z=M*V,d.push(R.x,R.y,R.z),f.push(0,P,0),S.x=V*.5+.5,S.y=j*.5*P+.5,p.push(S.x,S.y),_++}for(let U=0;U<s;U++){let k=T+U,L=N+U;y===!0?u.push(L,L+1,k):u.push(L+1,L,k),w+=3}h.addGroup(m,w,y===!0?1:2),m+=w}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wa=class n extends ms{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ah=class n extends je{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),h(i),u(),this.setAttribute("position",new he(r,3)),this.setAttribute("normal",new he(r.slice(),3)),this.setAttribute("uv",new he(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let C=new F,y=new F,T=new F;for(let S=0;S<e.length;S+=3)p(e[S+0],C),p(e[S+1],y),p(e[S+2],T),l(C,y,T,x)}function l(x,C,y,T){let S=T+1,R=[];for(let w=0;w<=S;w++){R[w]=[];let M=x.clone().lerp(y,w/S),P=C.clone().lerp(y,w/S),N=S-w;for(let U=0;U<=N;U++)U===0&&w===S?R[w][U]=M:R[w][U]=M.clone().lerp(P,U/N)}for(let w=0;w<S;w++)for(let M=0;M<2*(S-w)-1;M++){let P=Math.floor(M/2);M%2===0?(f(R[w][P+1]),f(R[w+1][P]),f(R[w][P])):(f(R[w][P+1]),f(R[w+1][P+1]),f(R[w+1][P]))}}function h(x){let C=new F;for(let y=0;y<r.length;y+=3)C.x=r[y+0],C.y=r[y+1],C.z=r[y+2],C.normalize().multiplyScalar(x),r[y+0]=C.x,r[y+1]=C.y,r[y+2]=C.z}function u(){let x=new F;for(let C=0;C<r.length;C+=3){x.x=r[C+0],x.y=r[C+1],x.z=r[C+2];let y=g(x)/2/Math.PI+.5,T=m(x)/Math.PI+.5;o.push(y,1-T)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){let C=o[x+0],y=o[x+2],T=o[x+4],S=Math.max(C,y,T),R=Math.min(C,y,T);S>.9&&R<.1&&(C<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function f(x){r.push(x.x,x.y,x.z)}function p(x,C){let y=x*3;C.x=t[y+0],C.y=t[y+1],C.z=t[y+2]}function _(){let x=new F,C=new F,y=new F,T=new F,S=new qt,R=new qt,w=new qt;for(let M=0,P=0;M<r.length;M+=9,P+=6){x.set(r[M+0],r[M+1],r[M+2]),C.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),S.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),w.set(o[P+4],o[P+5]),T.copy(x).add(C).add(y).divideScalar(3);let N=g(T);b(S,P+0,x,N),b(R,P+2,C,N),b(w,P+4,y,N)}}function b(x,C,y,T){T<0&&x.x===1&&(o[C]=x.x-1),y.x===0&&y.z===0&&(o[C]=T/2/Math.PI+.5)}function g(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Xa=class n extends ah{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}};var Dn=class n extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,d=t/a,f=e/l,p=[],_=[],b=[],g=[];for(let m=0;m<u;m++){let x=m*f-o;for(let C=0;C<h;C++){let y=C*d-r;_.push(y,-x,0),b.push(0,0,1),g.push(C/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let C=x+h*m,y=x+h*(m+1),T=x+1+h*(m+1),S=x+1+h*m;p.push(C,y,S),p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},qa=class n extends je{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],h=[],u=[],d=t,f=(e-t)/s,p=new F,_=new qt;for(let b=0;b<=s;b++){for(let g=0;g<=i;g++){let m=r+g/i*o;p.x=d*Math.cos(m),p.y=d*Math.sin(m),l.push(p.x,p.y,p.z),h.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,u.push(_.x,_.y)}d+=f}for(let b=0;b<s;b++){let g=b*(i+1);for(let m=0;m<i;m++){let x=m+g,C=x,y=x+i+1,T=x+i+2,S=x+1;a.push(C,y,S),a.push(y,T,S)}}this.setIndex(a),this.setAttribute("position",new he(l,3)),this.setAttribute("normal",new he(h,3)),this.setAttribute("uv",new he(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var cn=class n extends je{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,u=[],d=new F,f=new F,p=[],_=[],b=[],g=[];for(let m=0;m<=i;m++){let x=[],C=m/i,y=o+C*a,T=t*Math.cos(y),S=Math.sqrt(t*t-T*T),R=0;m===0&&o===0?R=.5/e:m===i&&l===Math.PI&&(R=-.5/e);for(let w=0;w<=e;w++){let M=w/e,P=s+M*r;d.x=-S*Math.cos(P),d.y=T,d.z=S*Math.sin(P),_.push(d.x,d.y,d.z),f.copy(d).normalize(),b.push(f.x,f.y,f.z),g.push(M+R,1-C),x.push(h++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<e;x++){let C=u[m][x+1],y=u[m][x],T=u[m+1][x],S=u[m+1][x+1];(m!==0||o>0)&&p.push(C,y,S),(m!==i-1||l<Math.PI)&&p.push(y,T,S)}this.setIndex(p),this.setAttribute("position",new he(_,3)),this.setAttribute("normal",new he(b,3)),this.setAttribute("uv",new he(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bs=class n extends je{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],u=[],d=[],f=new F,p=new F,_=new F;for(let b=0;b<=i;b++){let g=o+b/i*a;for(let m=0;m<=s;m++){let x=m/s*r;p.x=(t+e*Math.cos(g))*Math.cos(x),p.y=(t+e*Math.cos(g))*Math.sin(x),p.z=e*Math.sin(g),h.push(p.x,p.y,p.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),_.subVectors(p,f).normalize(),u.push(_.x,_.y,_.z),d.push(m/s),d.push(b/i)}}for(let b=1;b<=i;b++)for(let g=1;g<=s;g++){let m=(s+1)*b+g-1,x=(s+1)*(b-1)+g-1,C=(s+1)*(b-1)+g,y=(s+1)*b+g;l.push(m,x,y),l.push(x,C,y)}this.setIndex(l),this.setAttribute("position",new he(h,3)),this.setAttribute("normal",new he(u,3)),this.setAttribute("uv",new he(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function pr(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(vm(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(vm(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ui(n){let t={};for(let e=0;e<n.length;e++){let i=pr(n[e]);for(let s in i)t[s]=i[s]}return t}function vm(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ib(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Wf(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}var tn={clone:pr,merge:Ui},Db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Be=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Db,this.fragmentShader=Nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=Ib(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[i].value=new qt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new le().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Yt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},po=class extends Be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Ya=class extends Zn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}},ts=class extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Eh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},lh=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ch=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Xi=class extends Zn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ht(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wo,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}};function eo(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function bf(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Os=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hh=class extends Os{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sf,endingEnd:Sf}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mf:r=t,a=2*e-i;break;case Ef:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mf:o=t,l=2*i-e;break;case Ef:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,u=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,_=(i-e)/(s-e),b=_*_,g=b*_,m=-f*g+2*f*b-f*_,x=(1+f)*g+(-1.5-2*f)*b+(-.5+f)*_+1,C=(-1-p)*g+(1.5+p)*b+.5*_,y=p*g-p*b;for(let T=0;T!==a;++T)r[T]=m*o[u+T]+x*o[h+T]+C*o[l+T]+y*o[d+T];return r}},uh=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=(i-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[h+f]*d+o[l+f]*u;return r}},dh=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fh=class extends Os{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,u=this.inTangents,d=this.outTangents;if(!u||!d){let _=(i-e)/(s-e),b=1-_;for(let g=0;g!==a;++g)r[g]=o[h+g]*b+o[l+g]*_;return r}let f=a*2,p=t-1;for(let _=0;_!==a;++_){let b=o[h+_],g=o[l+_],m=p*f+_*2,x=d[m],C=d[m+1],y=t*f+_*2,T=u[y],S=u[y+1],R=Fb(i,e,x,T,s);r[_]=cg(R,b,C,S,g)}return r}};function cg(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Lb(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Fb(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=cg(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Lb(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),bf(t.settings)&&(i.settings={inTangents:eo(t.settings.inTangents,Array),outTangents:eo(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new dh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case La:e=this.InterpolantFactoryMethodDiscrete;break;case eh:e=this.InterpolantFactoryMethodLinear;break;case Xc:e=this.InterpolantFactoryMethodSmooth;break;case xf:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Jt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return eh;case this.InterpolantFactoryMethodSmooth:return Xc;case this.InterpolantFactoryMethodBezier:return xf}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;bf(this.settings)&&(xm(this.settings.inTangents,t),xm(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){te("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){te("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&lb(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){te("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],u=t[a+1];if(h!==u&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,p=d+i;for(let _=0;_!==i;++_){let b=e[d+_];if(b!==e[f+_]||b!==e[p+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let p=0;p!==i;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,bf(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function xm(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=eh;var zs=class extends hn{constructor(t,e,i){super(t,e,i)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=La;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var ph=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};ph.prototype.ValueTypeName="color";var _h=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};_h.prototype.ValueTypeName="number";var mh=class extends Os{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let u=h+a;h!==u;h+=4)ti.slerpFlat(r,0,o,h-a,o,h,l);return r}},ja=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new mh(this.times,this.values,this.getValueSize(),t)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends hn{constructor(t,e,i){super(t,e,i)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=La;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};gh.prototype.ValueTypeName="vector";var wh=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return h.push(u,d),this},this.removeHandler=function(u){let d=h.indexOf(u);return d!==-1&&h.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=h.length;d<f;d+=2){let p=h[d],_=h[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hg=new wh,bh=class{constructor(t){this.manager=t!==void 0?t:hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var $a=class extends Ri{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},gs=class extends $a{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ri.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ht(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},yf=new Yt,Sm=new F,Mm=new F,yh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=vi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fo,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Sm.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sm),Mm.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mm),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){yf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(yf,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===oo||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(yf)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Gc=new F,Wc=new ti,qn=new F,Ja=class extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Gc,Wc,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Wc,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Gc,Wc,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gc,Wc,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ns=new F,Em=new qt,Tm=new qt,ui=class extends Ja{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ih*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($d*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ih*2*Math.atan(Math.tan($d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-t/Ns.z)}getViewSize(t,e){return this.getViewBounds(t,Em,Tm),e.subVectors(Tm,Em)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($d*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hs=class extends Ja{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Tf=class extends yh{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hr=class extends $a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ri.DEFAULT_UP),this.updateMatrix(),this.target=new Ri,this.shadow=new Tf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var io=-90,no=1,vh=class extends Ri{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ui(io,no,t,e);s.layers=this.layers,this.add(s);let r=new ui(io,no,t,e);r.layers=this.layers,this.add(r);let o=new ui(io,no,t,e);o.layers=this.layers,this.add(o);let a=new ui(io,no,t,e);a.layers=this.layers,this.add(a);let l=new ui(io,no,t,e);l.layers=this.layers,this.add(l);let h=new ui(io,no,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},xh=class extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Za=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Ub.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ub(){this._document.hidden===!1&&this.reset()}var Xf="\\[\\]\\.:\\/",Bb=new RegExp("["+Xf+"]","g"),qf="[^"+Xf+"]",Ob="[^"+Xf.replace("\\.","")+"]",zb=/((?:WC+[\/:])*)/.source.replace("WC",qf),kb=/(WCOD+)?/.source.replace("WCOD",Ob),Hb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qf),Vb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qf),Gb=new RegExp("^"+zb+kb+Hb+Vb+"$"),Wb=["material","materials","bones","map"],Rf=class{constructor(t,e,i){let s=i||qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(t){let e=Gb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===h){h=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;te("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};qe.Composite=Rf;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kE=new Float32Array(1);var Kf=class Kf{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Kf.prototype.isMatrix2=!0;var Cf=Kf;function Yf(n,t,e,i){let s=Xb(i);switch(e){case kf:return n*t;case Dh:return n*t/s.components*s.byteLength;case Nh:return n*t/s.components*s.byteLength;case qs:return n*t*2/s.components*s.byteLength;case Lh:return n*t*2/s.components*s.byteLength;case Hf:return n*t*3/s.components*s.byteLength;case qi:return n*t*4/s.components*s.byteLength;case Fh:return n*t*4/s.components*s.byteLength;case cl:case hl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ul:case dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bh:case zh:return Math.max(n,16)*Math.max(t,8)/4;case Uh:case Oh:return Math.max(n,8)*Math.max(t,8)/2;case kh:case Hh:case Gh:case Wh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vh:case fl:case Xh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case qh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case jh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Jh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tu:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case eu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case su:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ru:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ou:case au:case lu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cu:case hu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case pl:case uu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xb(n){switch(n){case vi:case Uf:return{byteLength:1,components:1};case go:case Bf:case Fi:return{byteLength:2,components:1};case Ph:case Ih:return{byteLength:2,components:4};case Ln:case Ah:case un:return{byteLength:4,components:1};case Of:case zf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Dg(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Kb(n){let t=new WeakMap;function e(a,l){let h=a.array,u=a.usage,d=h.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,h,u),a.onUploadCallback();let p;if(h instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=n.SHORT;else if(h instanceof Uint32Array)p=n.UNSIGNED_INT;else if(h instanceof Int32Array)p=n.INT;else if(h instanceof Int8Array)p=n.BYTE;else if(h instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:f,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){let u=l.array,d=l.updateRanges;if(n.bindBuffer(h,a),d.length===0)n.bufferSubData(h,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){let _=d[f],b=d[p];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,d[f]=b)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){let b=d[p];n.bufferSubData(h,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var Qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ty=`#ifdef USE_ALPHAHASH
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
#endif`,ey=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ay=`#ifdef USE_BATCHING
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
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dy=`#ifdef USE_IRIDESCENCE
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
#endif`,fy=`#ifdef USE_BUMPMAP
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,by=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,My=`vec3 transformedNormal = objectNormal;
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
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ay="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
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
#endif`,Uy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,By=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jy=`PhysicalMaterial material;
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
#endif`,Zy=`uniform sampler2D dfgLUT;
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
}`,Ky=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ev=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,iv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,hv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xv=`#ifdef USE_NORMALMAP
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
#endif`,Sv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ev=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Av=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kv=`#ifdef USE_SKINNING
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
#endif`,Hv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tx=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`#include <common>
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
}`,ox=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,lx=`#define DISTANCE
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ux=`uniform float scale;
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,px=`uniform vec3 diffuse;
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
}`,_x=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,bx=`#define NORMAL
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
}`,yx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,xx=`#define PHONG
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
}`,Sx=`#define STANDARD
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
}`,Mx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,Tx=`#define TOON
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
}`,Rx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Ax=`#include <common>
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
}`,Px=`uniform vec3 color;
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
}`,Ix=`uniform float rotation;
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
}`,Dx=`uniform vec3 diffuse;
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
}`,_e={alphahash_fragment:Qb,alphahash_pars_fragment:ty,alphamap_fragment:ey,alphamap_pars_fragment:iy,alphatest_fragment:ny,alphatest_pars_fragment:sy,aomap_fragment:ry,aomap_pars_fragment:oy,batching_pars_vertex:ay,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:hy,bsdfs:uy,iridescence_fragment:dy,bumpmap_pars_fragment:fy,clipping_planes_fragment:py,clipping_planes_pars_fragment:_y,clipping_planes_pars_vertex:my,clipping_planes_vertex:gy,color_fragment:wy,color_pars_fragment:by,color_pars_vertex:yy,color_vertex:vy,common:xy,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:My,displacementmap_pars_vertex:Ey,displacementmap_vertex:Ty,emissivemap_fragment:Ry,emissivemap_pars_fragment:Cy,colorspace_fragment:Ay,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Dy,envmap_pars_fragment:Ny,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Xy,envmap_vertex:Fy,fog_vertex:Uy,fog_pars_vertex:By,fog_fragment:Oy,fog_pars_fragment:zy,gradientmap_pars_fragment:ky,lightmap_pars_fragment:Hy,lights_lambert_fragment:Vy,lights_lambert_pars_fragment:Gy,lights_pars_begin:Wy,lights_toon_fragment:qy,lights_toon_pars_fragment:Yy,lights_phong_fragment:jy,lights_phong_pars_fragment:$y,lights_physical_fragment:Jy,lights_physical_pars_fragment:Zy,lights_fragment_begin:Ky,lights_fragment_maps:Qy,lights_fragment_end:tv,lightprobes_pars_fragment:ev,logdepthbuf_fragment:iv,logdepthbuf_pars_fragment:nv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:hv,metalnessmap_pars_fragment:uv,morphinstance_vertex:dv,morphcolor_vertex:fv,morphnormal_vertex:pv,morphtarget_pars_vertex:_v,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:wv,normal_pars_fragment:bv,normal_pars_vertex:yv,normal_vertex:vv,normalmap_pars_fragment:xv,clearcoat_normal_fragment_begin:Sv,clearcoat_normal_fragment_maps:Mv,clearcoat_pars_fragment:Ev,iridescence_pars_fragment:Tv,opaque_fragment:Rv,packing:Cv,premultiplied_alpha_fragment:Av,project_vertex:Pv,dithering_fragment:Iv,dithering_pars_fragment:Dv,roughnessmap_fragment:Nv,roughnessmap_pars_fragment:Lv,shadowmap_pars_fragment:Fv,shadowmap_pars_vertex:Uv,shadowmap_vertex:Bv,shadowmask_pars_fragment:Ov,skinbase_vertex:zv,skinning_pars_vertex:kv,skinning_vertex:Hv,skinnormal_vertex:Vv,specularmap_fragment:Gv,specularmap_pars_fragment:Wv,tonemapping_fragment:Xv,tonemapping_pars_fragment:qv,transmission_fragment:Yv,transmission_pars_fragment:jv,uv_pars_fragment:$v,uv_pars_vertex:Jv,uv_vertex:Zv,worldpos_vertex:Kv,background_vert:Qv,background_frag:tx,backgroundCube_vert:ex,backgroundCube_frag:ix,cube_vert:nx,cube_frag:sx,depth_vert:rx,depth_frag:ox,distance_vert:ax,distance_frag:lx,equirect_vert:cx,equirect_frag:hx,linedashed_vert:ux,linedashed_frag:dx,meshbasic_vert:fx,meshbasic_frag:px,meshlambert_vert:_x,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:wx,meshnormal_vert:bx,meshnormal_frag:yx,meshphong_vert:vx,meshphong_frag:xx,meshphysical_vert:Sx,meshphysical_frag:Mx,meshtoon_vert:Ex,meshtoon_frag:Tx,points_vert:Rx,points_frag:Cx,shadow_vert:Ax,shadow_frag:Px,sprite_vert:Ix,sprite_frag:Dx},xt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},ns={basic:{uniforms:Ui([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:Ui([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:Ui([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:Ui([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:Ui([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:Ui([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:Ui([xt.points,xt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:Ui([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:Ui([xt.common,xt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:Ui([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:Ui([xt.sprite,xt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distance:{uniforms:Ui([xt.common,xt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distance_vert,fragmentShader:_e.distance_frag},shadow:{uniforms:Ui([xt.lights,xt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};ns.physical={uniforms:Ui([ns.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};var pu={r:0,b:0,g:0},Nx=new Yt,Ng=new le;Ng.set(-1,0,0,0,1,0,0,0,1);function Lx(n,t,e,i,s,r){let o=new Ht(0),a=s===!0?0:1,l,h,u=null,d=0,f=null;function p(x){let C=x.isScene===!0?x.background:null;if(C&&C.isTexture){let y=x.backgroundBlurriness>0;C=t.get(C,y)}return C}function _(x){let C=!1,y=p(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),C=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function b(x,C){let y=p(C);y&&(y.isCubeTexture||y.mapping===al)?(h===void 0&&(h=new ee(new In(1,1,1),new Be({name:"BackgroundCubeMaterial",uniforms:pr(ns.backgroundCube.uniforms),vertexShader:ns.backgroundCube.vertexShader,fragmentShader:ns.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Ng),h.material.toneMapped=be.getTransfer(y.colorSpace)!==Re,(u!==y||d!==y.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ee(new Dn(2,2),new Be({name:"BackgroundMaterial",uniforms:pr(ns.background.uniforms),vertexShader:ns.background.vertexShader,fragmentShader:ns.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=be.getTransfer(y.colorSpace)!==Re,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,C){x.getRGB(pu,Wf(n)),e.buffers.color.setClear(pu.r,pu.g,pu.b,C,r)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,C=1){o.set(x),a=C,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:_,addToRenderList:b,dispose:m}}function Fx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(N,U,k,L,V){let j=!1,Z=d(N,L,k,U);r!==Z&&(r=Z,h(r.object)),j=p(N,L,k,V),j&&_(N,L,k,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(N,U,k,L),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function h(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function d(N,U,k,L){let V=L.wireframe===!0,j=i[U.id];j===void 0&&(j={},i[U.id]=j);let Z=N.isInstancedMesh===!0?N.id:0,lt=j[Z];lt===void 0&&(lt={},j[Z]=lt);let $=lt[k.id];$===void 0&&($={},lt[k.id]=$);let nt=$[V];return nt===void 0&&(nt=f(l()),$[V]=nt),nt}function f(N){let U=[],k=[],L=[];for(let V=0;V<e;V++)U[V]=0,k[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:k,attributeDivisors:L,object:N,attributes:{},index:null}}function p(N,U,k,L){let V=r.attributes,j=U.attributes,Z=0,lt=k.getAttributes();for(let $ in lt)if(lt[$].location>=0){let at=V[$],It=j[$];if(It===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(It=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(It=N.instanceColor)),at===void 0||at.attribute!==It||It&&at.data!==It.data)return!0;Z++}return r.attributesNum!==Z||r.index!==L}function _(N,U,k,L){let V={},j=U.attributes,Z=0,lt=k.getAttributes();for(let $ in lt)if(lt[$].location>=0){let at=j[$];at===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(at=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(at=N.instanceColor));let It={};It.attribute=at,at&&at.data&&(It.data=at.data),V[$]=It,Z++}r.attributes=V,r.attributesNum=Z,r.index=L}function b(){let N=r.newAttributes;for(let U=0,k=N.length;U<k;U++)N[U]=0}function g(N){m(N,0)}function m(N,U){let k=r.newAttributes,L=r.enabledAttributes,V=r.attributeDivisors;k[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),V[N]!==U&&(n.vertexAttribDivisor(N,U),V[N]=U)}function x(){let N=r.newAttributes,U=r.enabledAttributes;for(let k=0,L=U.length;k<L;k++)U[k]!==N[k]&&(n.disableVertexAttribArray(k),U[k]=0)}function C(N,U,k,L,V,j,Z){Z===!0?n.vertexAttribIPointer(N,U,k,V,j):n.vertexAttribPointer(N,U,k,L,V,j)}function y(N,U,k,L){b();let V=L.attributes,j=k.getAttributes(),Z=U.defaultAttributeValues;for(let lt in j){let $=j[lt];if($.location>=0){let nt=V[lt];if(nt===void 0&&(lt==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),lt==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor)),nt!==void 0){let at=nt.normalized,It=nt.itemSize,Dt=t.get(nt);if(Dt===void 0)continue;let Ee=Dt.buffer,de=Dt.type,fe=Dt.bytesPerElement,Q=de===n.INT||de===n.UNSIGNED_INT||nt.gpuType===Ah;if(nt.isInterleavedBufferAttribute){let it=nt.data,Mt=it.stride,Vt=nt.offset;if(it.isInstancedInterleavedBuffer){for(let Tt=0;Tt<$.locationSize;Tt++)m($.location+Tt,it.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Tt=0;Tt<$.locationSize;Tt++)g($.location+Tt);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let Tt=0;Tt<$.locationSize;Tt++)C($.location+Tt,It/$.locationSize,de,at,Mt*fe,(Vt+It/$.locationSize*Tt)*fe,Q)}else{if(nt.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)m($.location+it,nt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let it=0;it<$.locationSize;it++)g($.location+it);n.bindBuffer(n.ARRAY_BUFFER,Ee);for(let it=0;it<$.locationSize;it++)C($.location+it,It/$.locationSize,de,at,It*fe,It/$.locationSize*it*fe,Q)}}else if(Z!==void 0){let at=Z[lt];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv($.location,at);break;case 3:n.vertexAttrib3fv($.location,at);break;case 4:n.vertexAttrib4fv($.location,at);break;default:n.vertexAttrib1fv($.location,at)}}}}x()}function T(){M();for(let N in i){let U=i[N];for(let k in U){let L=U[k];for(let V in L){let j=L[V];for(let Z in j)u(j[Z].object),delete j[Z];delete L[V]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let U=i[N.id];for(let k in U){let L=U[k];for(let V in L){let j=L[V];for(let Z in j)u(j[Z].object),delete j[Z];delete L[V]}}delete i[N.id]}function R(N){for(let U in i){let k=i[U];for(let L in k){let V=k[L];if(V[N.id]===void 0)continue;let j=V[N.id];for(let Z in j)u(j[Z].object),delete j[Z];delete V[N.id]}}}function w(N){for(let U in i){let k=i[U],L=N.isInstancedMesh===!0?N.id:0,V=k[L];if(V!==void 0){for(let j in V){let Z=V[j];for(let lt in Z)u(Z[lt].object),delete Z[lt];delete V[j]}delete k[L],Object.keys(k).length===0&&delete i[U]}}}function M(){P(),o=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Ux(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),e.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let p=0;p<u;p++)f+=h[p];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Bx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let w=R===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vi&&R!==un&&!w&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",u=l(h);u!==h&&(Jt("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:C,maxFragmentUniforms:y,maxSamples:T,samples:S}}function Ox(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Cn,a=new le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let _=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,m=n.get(d);if(!s||_===null||_.length===0||r&&!g)r?u(null):h();else{let x=r?0:i,C=x*4,y=m.clippingState||null;l.value=y,y=u(_,f,C,p);for(let T=0;T!==C;++T)y[T]=e[T];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,_!==!0||g===null){let m=p+b*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let C=0,y=p;C!==b;++C,y+=4)o.copy(d[C]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var vo=4,zx=6,kx=20,Hx=256,_l=new Hs,ug=new Ht,Qf=null,tp=0,ep=0,ip=!1,Vx=new F,_r=new F,mu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Vx}=r;Qf=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Qf,tp,ep),this._renderer.xr.enabled=ip,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qf=this._renderer.getRenderTarget(),tp=this._renderer.getActiveCubeFace(),ep=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:Fi,format:qi,colorSpace:Fa,depthBuffer:!1},s=dg(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gx(r)),this._blurMaterial=Xx(r,t,e),this._ggxMaterial=Wx(r,t,e)}return s}_compileMaterial(t){let e=new ee(new je,t);this._renderer.compile(e,_l)}_sceneToCubeUV(t,e,i,s,r){let l=new ui(90,1,e,i),h=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(ug),d.toneMapping=Nn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ee(new In,new Li({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(ug),m=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(l.up.set(0,h[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[C],r.y,r.z)):y===1?(l.up.set(0,0,h[C]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[C],r.z)):(l.up.set(0,h[C],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[C]));let T=this._cubeSize;yo(s,y*T,C>2?T:0,T,T),d.setRenderTarget(s),m&&d.render(b,l),d.render(t,l)}d.toneMapping=p,d.autoClear=f,t.background=x}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Gs||t.mapping===fr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;yo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,_l)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,h=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-u*u),f=h*1.25,p=d*f,{_lodMax:_}=this,b=this._sizeLods[i],g=3*b*(i>_-vo?i-_+vo:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-e,yo(r,g,m,3*b,2*b),s.setRenderTarget(r),s.render(a,_l),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=_-i,yo(t,g,m,3*b,2*b),s.setRenderTarget(t),s.render(a,_l)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-vo?s-this._lodMax+vo:0),f=4*(this._cubeSize-u);yo(e,d,f,3*u,2*u),o.setRenderTarget(e),o.render(l,_l)}};function Gx(n){let t=[],e=[],i=n,s=n-vo+1+zx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,h=1+a,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,f=6,p=3,_=new Float32Array(p*f*d),b=new Float32Array(p*f*d);for(let m=0;m<d;m++){let x=m%3*2/3-1,C=m>2?0:-1,y=[x,C,0,x+2/3,C,0,x+2/3,C+1,0,x,C,0,x+2/3,C+1,0,x,C+1,0];_.set(y,p*f*m);for(let T=0;T<f;T++){let S=u[T*2]*2-1,R=u[T*2+1]*2-1;m===0?_r.set(1,R,S):m===1?_r.set(-S,1,-R):m===2?_r.set(-S,R,1):m===3?_r.set(-1,R,-S):m===4?_r.set(-S,-1,R):_r.set(S,R,-1),_r.toArray(b,(m*f+T)*p)}}let g=new je;g.setAttribute("position",new di(_,p)),g.setAttribute("outputDirection",new di(b,p)),e.push(new ee(g,null)),i>vo&&i--}return{lodMeshes:e,sizeLods:t}}function dg(n,t,e){let i=new ai(n,t,e);return i.texture.mapping=al,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Wx(n,t,e){return new Be({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function Xx(n,t,e){return new Be({name:"SphericalGaussianBlur",defines:{SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function fg(){return new Be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:li,depthTest:!1,depthWrite:!1})}function pg(){return new Be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:li,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gu=class extends ai{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Va(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new Be({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mi,blending:li});r.uniforms.tEquirect.value=e;let o=new ee(s,r),a=e.minFilter;return e.minFilter===Ws&&(e.minFilter=_i),new vh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function qx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,p=!1){return f==null?null:p?o(f):r(f)}function r(f){if(f&&f.isTexture){let p=f.mapping;if(p===Th||p===Rh)if(t.has(f)){let _=t.get(f).texture;return a(_,f.mapping)}else{let _=f.image;if(_&&_.height>0){let b=new gu(_.height);return b.fromEquirectangularTexture(n,f),t.set(f,b),f.addEventListener("dispose",h),a(b.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let p=f.mapping,_=p===Th||p===Rh,b=p===Gs||p===fr;if(_||b){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new mu(n)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let x=f.image;return _&&x&&x.height>0||b&&x&&l(x)?(i===null&&(i=new mu(n)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,p){return p===Th?f.mapping=Gs:p===Rh&&(f.mapping=fr),f}function l(f){let p=0,_=6;for(let b=0;b<_;b++)f[b]!==void 0&&p++;return p===_}function h(f){let p=f.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function u(f){let p=f.target;p.removeEventListener("dispose",u);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Yx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&or("WebGLRenderer: "+i+" extension not supported."),s}}}function jx(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let _ in f.attributes)t.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],n.ARRAY_BUFFER)}function h(d){let f=[],p=d.index,_=d.attributes.position,b=0;if(_===void 0)return;if(p!==null){let x=p.array;b=p.version;for(let C=0,y=x.length;C<y;C+=3){let T=x[C+0],S=x[C+1],R=x[C+2];f.push(T,S,S,R,R,T)}}else{let x=_.array;b=_.version;for(let C=0,y=x.length/3-1;C<y;C+=3){let T=C+0,S=C+1,R=C+2;f.push(T,S,S,R,R,T)}}let g=new(_.count>=65535?lr:Fs)(f,1);g.version=b;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function $x(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),e.update(f,i,1)}function h(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,r,d*o,p),e.update(f,i,p))}function u(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,p);let b=0;for(let g=0;g<p;g++)b+=f[g];e.update(b,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function Jx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Zx(n,t,e){let i=new WeakMap,s=new Pe;function r(o,a,l){let h=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let M=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],C=0;p===!0&&(C=1),_===!0&&(C=2),b===!0&&(C=3);let y=a.attributes.position.count*C,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let S=new Float32Array(y*T*4*d),R=new Oa(S,y,T,d);R.type=un,R.needsUpdate=!0;let w=C*4;for(let P=0;P<d;P++){let N=g[P],U=m[P],k=x[P],L=y*T*4*P;for(let V=0;V<N.count;V++){let j=V*w;p===!0&&(s.fromBufferAttribute(N,V),S[L+j+0]=s.x,S[L+j+1]=s.y,S[L+j+2]=s.z,S[L+j+3]=0),_===!0&&(s.fromBufferAttribute(U,V),S[L+j+4]=s.x,S[L+j+5]=s.y,S[L+j+6]=s.z,S[L+j+7]=0),b===!0&&(s.fromBufferAttribute(k,V),S[L+j+8]=s.x,S[L+j+9]=s.y,S[L+j+10]=s.z,S[L+j+11]=k.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new qt(y,T)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let p=0;for(let b=0;b<h.length;b++)p+=h[b];let _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Kx(n,t,e,i,s){let r=new WeakMap;function o(h){let u=s.render.frame,d=h.geometry,f=t.get(h,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==u&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var Qx={[tl]:"LINEAR_TONE_MAPPING",[el]:"REINHARD_TONE_MAPPING",[il]:"CINEON_TONE_MAPPING",[nl]:"ACES_FILMIC_TONE_MAPPING",[rl]:"AGX_TONE_MAPPING",[ol]:"NEUTRAL_TONE_MAPPING",[sl]:"CUSTOM_TONE_MAPPING"};function tS(n,t,e,i,s,r){let o=new ai(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=new je;h.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new he([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new ee(h,u),f=new Hs(-1,1,1,-1,0,1),p=null,_=null,b=!1,g,m=null,x=[],C=!1;this.setSize=function(y,T){o.setSize(y,T),a!==null&&a.setSize(y,T),l!==null&&l.setSize(y,T);for(let S=0;S<x.length;S++){let R=x[S];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){x=y,C=x.length>0&&x[0].isRenderPass===!0;let T=o.width,S=o.height;x.length>0&&a===null&&(a=new ai(T,S,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),l=new ai(T,S,{type:Fi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<x.length;R++){let w=x[R];w.setSize&&w.setSize(T,S)}},this.begin=function(y,T){if(b||y.toneMapping===Nn&&x.length===0)return!1;if(m=T,T!==null){let S=T.width,R=T.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return C===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Nn,!0},this.hasRenderPass=function(){return C},this.end=function(y,T){y.toneMapping=g,b=!0;let S=o,R=a;for(let w=0;w<x.length;w++){let M=x[w];M.enabled!==!1&&(M.render(y,R,S,T),M.needsSwap!==!1&&(S=R,R=R===a?l:a))}if(p!==y.outputColorSpace||_!==y.toneMapping){p=y.outputColorSpace,_=y.toneMapping,u.defines={},be.getTransfer(p)===Re&&(u.defines.SRGB_TRANSFER="");let w=Qx[_];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(m),y.render(d,f),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Lg=new Wi,rp=new Qn(1,1),Fg=new Oa,Ug=new rh,Bg=new Va,_g=[],mg=[],gg=new Float32Array(16),wg=new Float32Array(9),bg=new Float32Array(4);function Mo(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=_g[s];if(r===void 0&&(r=new Float32Array(s),_g[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function gi(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function wi(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bu(n,t){let e=mg[t];e===void 0&&(e=new Int32Array(t),mg[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function iS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gi(e,t))return;n.uniform2fv(this.addr,t),wi(e,t)}}function nS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(gi(e,t))return;n.uniform3fv(this.addr,t),wi(e,t)}}function sS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gi(e,t))return;n.uniform4fv(this.addr,t),wi(e,t)}}function rS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gi(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),wi(e,t)}else{if(gi(e,i))return;bg.set(i),n.uniformMatrix2fv(this.addr,!1,bg),wi(e,i)}}function oS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gi(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),wi(e,t)}else{if(gi(e,i))return;wg.set(i),n.uniformMatrix3fv(this.addr,!1,wg),wi(e,i)}}function aS(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(gi(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),wi(e,t)}else{if(gi(e,i))return;gg.set(i),n.uniformMatrix4fv(this.addr,!1,gg),wi(e,i)}}function lS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function cS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gi(e,t))return;n.uniform2iv(this.addr,t),wi(e,t)}}function hS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gi(e,t))return;n.uniform3iv(this.addr,t),wi(e,t)}}function uS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gi(e,t))return;n.uniform4iv(this.addr,t),wi(e,t)}}function dS(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(gi(e,t))return;n.uniform2uiv(this.addr,t),wi(e,t)}}function pS(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(gi(e,t))return;n.uniform3uiv(this.addr,t),wi(e,t)}}function _S(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(gi(e,t))return;n.uniform4uiv(this.addr,t),wi(e,t)}}function mS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rp.compareFunction=e.isReversedDepthBuffer()?fu:du,r=rp):r=Lg,e.setTexture2D(t||r,s)}function gS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ug,s)}function wS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Bg,s)}function bS(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Fg,s)}function yS(n){switch(n){case 5126:return eS;case 35664:return iS;case 35665:return nS;case 35666:return sS;case 35674:return rS;case 35675:return oS;case 35676:return aS;case 5124:case 35670:return lS;case 35667:case 35671:return cS;case 35668:case 35672:return hS;case 35669:case 35673:return uS;case 5125:return dS;case 36294:return fS;case 36295:return pS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return mS;case 35679:case 36299:case 36307:return gS;case 35680:case 36300:case 36308:case 36293:return wS;case 36289:case 36303:case 36311:case 36292:return bS}}function vS(n,t){n.uniform1fv(this.addr,t)}function xS(n,t){let e=Mo(t,this.size,2);n.uniform2fv(this.addr,e)}function SS(n,t){let e=Mo(t,this.size,3);n.uniform3fv(this.addr,e)}function MS(n,t){let e=Mo(t,this.size,4);n.uniform4fv(this.addr,e)}function ES(n,t){let e=Mo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TS(n,t){let e=Mo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function RS(n,t){let e=Mo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function CS(n,t){n.uniform1iv(this.addr,t)}function AS(n,t){n.uniform2iv(this.addr,t)}function PS(n,t){n.uniform3iv(this.addr,t)}function IS(n,t){n.uniform4iv(this.addr,t)}function DS(n,t){n.uniform1uiv(this.addr,t)}function NS(n,t){n.uniform2uiv(this.addr,t)}function LS(n,t){n.uniform3uiv(this.addr,t)}function FS(n,t){n.uniform4uiv(this.addr,t)}function US(n,t,e){let i=this.cache,s=t.length,r=bu(e,s);gi(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=rp:o=Lg;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function BS(n,t,e){let i=this.cache,s=t.length,r=bu(e,s);gi(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ug,r[o])}function OS(n,t,e){let i=this.cache,s=t.length,r=bu(e,s);gi(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bg,r[o])}function zS(n,t,e){let i=this.cache,s=t.length,r=bu(e,s);gi(i,r)||(n.uniform1iv(this.addr,r),wi(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fg,r[o])}function kS(n){switch(n){case 5126:return vS;case 35664:return xS;case 35665:return SS;case 35666:return MS;case 35674:return ES;case 35675:return TS;case 35676:return RS;case 5124:case 35670:return CS;case 35667:case 35671:return AS;case 35668:case 35672:return PS;case 35669:case 35673:return IS;case 5125:return DS;case 36294:return NS;case 36295:return LS;case 36296:return FS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return BS;case 35680:case 36300:case 36308:case 36293:return OS;case 36289:case 36303:case 36311:case 36292:return zS}}var op=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=yS(e.type)}},ap=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kS(e.type)}},lp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},np=/(\w+)(\])?(\[|\.)?/g;function yg(n,t){n.seq.push(t),n.map[t.id]=t}function HS(n,t,e){let i=n.name,s=i.length;for(np.lastIndex=0;;){let r=np.exec(i),o=np.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){yg(e,h===void 0?new op(a,n,t):new ap(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new lp(a),yg(e,d)),e=d}}}var xo=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);HS(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function vg(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var VS=37297,GS=0;function WS(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var xg=new le;function XS(n){be._getMatrix(xg,be.workingColorSpace,n);let t=`mat3( ${xg.elements.map(e=>e.toFixed(4))} )`;switch(be.getTransfer(n)){case Ua:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Sg(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+WS(n.getShaderSource(t),a)}else return r}function qS(n,t){let e=XS(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var YS={[tl]:"Linear",[el]:"Reinhard",[il]:"Cineon",[nl]:"ACESFilmic",[rl]:"AgX",[ol]:"Neutral",[sl]:"Custom"};function jS(n,t){let e=YS[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var _u=new F;function $S(){be.getLuminanceCoefficients(_u);let n=_u.x.toFixed(4),t=_u.y.toFixed(4),e=_u.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gl).join(`
`)}function ZS(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function KS(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function gl(n){return n!==""}function Mg(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eg(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var QS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cp(n){return n.replace(QS,eM)}var tM=new Map;function eM(n,t){let e=_e[t];if(e===void 0){let i=tM.get(t);if(i!==void 0)e=_e[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cp(e)}var iM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tg(n){return n.replace(iM,nM)}function nM(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rg(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var sM={[ur]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function rM(n){return sM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var oM={[Gs]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[al]:"ENVMAP_TYPE_CUBE_UV"};function aM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":oM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var lM={[fr]:"ENVMAP_MODE_REFRACTION"};function cM(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var hM={[Eh]:"ENVMAP_BLENDING_MULTIPLY",[Wm]:"ENVMAP_BLENDING_MIX",[Xm]:"ENVMAP_BLENDING_ADD"};function uM(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hM[n.combine]||"ENVMAP_BLENDING_NONE"}function dM(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function fM(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=rM(e),h=aM(e),u=cM(e),d=uM(e),f=dM(e),p=JS(e),_=ZS(r),b=s.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gl).join(`
`),m.length>0&&(m+=`
`)):(g=[Rg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gl).join(`
`),m=[Rg(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?_e.tonemapping_pars_fragment:"",e.toneMapping!==Nn?jS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,qS("linearToOutputTexel",e.outputColorSpace),$S(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gl).join(`
`)),o=cp(o),o=Mg(o,e),o=Eg(o,e),a=cp(a),a=Mg(a,e),a=Eg(a,e),o=Tg(o),a=Tg(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let C=x+g+o,y=x+m+a,T=vg(s,s.VERTEX_SHADER,C),S=vg(s,s.FRAGMENT_SHADER,y);s.attachShader(b,T),s.attachShader(b,S),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function R(N){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(b)||"",k=s.getShaderInfoLog(T)||"",L=s.getShaderInfoLog(S)||"",V=U.trim(),j=k.trim(),Z=L.trim(),lt=!0,$=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(lt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,b,T,S);else{let nt=Sg(s,T,"vertex"),at=Sg(s,S,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+nt+`
`+at)}else V!==""?Jt("WebGLProgram: Program Info Log:",V):(j===""||Z==="")&&($=!1);$&&(N.diagnostics={runnable:lt,programLog:V,vertexShader:{log:j,prefix:g},fragmentShader:{log:Z,prefix:m}})}s.deleteShader(T),s.deleteShader(S),w=new xo(s,b),M=KS(s,b)}let w;this.getUniforms=function(){return w===void 0&&R(this),w};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(b,VS)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=GS++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=S,this}var pM=0,hp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new up(t),e.set(t,i)),i}},up=class{constructor(t){this.id=pM++,this.code=t,this.usedTimes=0}};function _M(n){return n===qs||n===fl||n===pl}function mM(n,t,e,i,s,r){let o=new za,a=new hp,l=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function b(w,M,P,N,U,k){let L=N.fog,V=U.geometry,j=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?N.environment:null,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,lt=t.get(w.envMap||j,Z),$=lt&&lt.mapping===al?lt.image.height:null,nt=p[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&Jt("WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));let at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,It=at!==void 0?at.length:0,Dt=0;V.morphAttributes.position!==void 0&&(Dt=1),V.morphAttributes.normal!==void 0&&(Dt=2),V.morphAttributes.color!==void 0&&(Dt=3);let Ee,de,fe,Q;if(nt){let Ge=ns[nt];Ee=Ge.vertexShader,de=Ge.fragmentShader}else{Ee=w.vertexShader,de=w.fragmentShader;let Ge=a.getVertexShaderStage(w),De=a.getFragmentShaderStage(w);a.update(w,Ge,De),fe=Ge.id,Q=De.id}let it=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Vt=U.isInstancedMesh===!0,Tt=U.isBatchedMesh===!0,ae=!!w.map,Ue=!!w.matcap,$t=!!lt,ie=!!w.aoMap,ne=!!w.lightMap,Gt=!!w.bumpMap&&w.wireframe===!1,Ce=!!w.normalMap,At=!!w.displacementMap,se=!!w.emissiveMap,ce=!!w.metalnessMap,we=!!w.roughnessMap,B=w.anisotropy>0,Ve=w.clearcoat>0,ve=w.dispersion>0,I=w.retroreflectivity>0,v=w.iridescence>0,H=w.sheen>0,W=w.transmission>0,tt=B&&!!w.anisotropyMap,ft=Ve&&!!w.clearcoatMap,wt=Ve&&!!w.clearcoatNormalMap,et=Ve&&!!w.clearcoatRoughnessMap,rt=v&&!!w.iridescenceMap,bt=v&&!!w.iridescenceThicknessMap,zt=H&&!!w.sheenColorMap,gt=H&&!!w.sheenRoughnessMap,mt=!!w.specularMap,Lt=!!w.specularColorMap,Wt=!!w.specularIntensityMap,Qt=W&&!!w.transmissionMap,z=W&&!!w.thicknessMap,yt=!!w.gradientMap,st=!!w.alphaMap,vt=w.alphaTest>0,Ct=!!w.alphaHash,ct=!!w.extensions,Xt=Nn;w.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let Bt={shaderID:nt,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:de,defines:w.defines,customVertexShaderID:fe,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&U._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&U.instanceColor!==null,instancingMorph:Vt&&U.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:ae,matcap:Ue,envMap:$t,envMapMode:$t&&lt.mapping,envMapCubeUVHeight:$,aoMap:ie,lightMap:ne,bumpMap:Gt,normalMap:Ce,displacementMap:At,emissiveMap:se,normalMapObjectSpace:Ce&&w.normalMapType===$m,normalMapTangentSpace:Ce&&w.normalMapType===wo,packedNormalMap:Ce&&w.normalMapType===wo&&_M(w.normalMap.format),metalnessMap:ce,roughnessMap:we,anisotropy:B,anisotropyMap:tt,clearcoat:Ve,clearcoatMap:ft,clearcoatNormalMap:wt,clearcoatRoughnessMap:et,dispersion:ve,retroreflection:I,iridescence:v,iridescenceMap:rt,iridescenceThicknessMap:bt,sheen:H,sheenColorMap:zt,sheenRoughnessMap:gt,specularMap:mt,specularColorMap:Lt,specularIntensityMap:Wt,transmission:W,transmissionMap:Qt,thicknessMap:z,gradientMap:yt,opaque:w.transparent===!1&&w.blending===mo&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:vt,alphaHash:Ct,combine:w.combine,mapUv:ae&&_(w.map.channel),aoMapUv:ie&&_(w.aoMap.channel),lightMapUv:ne&&_(w.lightMap.channel),bumpMapUv:Gt&&_(w.bumpMap.channel),normalMapUv:Ce&&_(w.normalMap.channel),displacementMapUv:At&&_(w.displacementMap.channel),emissiveMapUv:se&&_(w.emissiveMap.channel),metalnessMapUv:ce&&_(w.metalnessMap.channel),roughnessMapUv:we&&_(w.roughnessMap.channel),anisotropyMapUv:tt&&_(w.anisotropyMap.channel),clearcoatMapUv:ft&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:wt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(w.sheenRoughnessMap.channel),specularMapUv:mt&&_(w.specularMap.channel),specularColorMapUv:Lt&&_(w.specularColorMap.channel),specularIntensityMapUv:Wt&&_(w.specularIntensityMap.channel),transmissionMapUv:Qt&&_(w.transmissionMap.channel),thicknessMapUv:z&&_(w.thicknessMap.channel),alphaMapUv:st&&_(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Ce||B),vertexNormals:!!V.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!V.attributes.uv&&(ae||st),fog:!!L,useFog:w.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||V.attributes.normal===void 0&&Ce===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Mt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:It,morphTextureStride:Dt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:ae&&w.map.isVideoTexture===!0&&be.getTransfer(w.map.colorSpace)===Re,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&be.getTransfer(w.emissiveMap.colorSpace)===Re,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===vn,flipSided:w.side===mi,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ct&&w.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&w.extensions.multiDraw===!0||Tt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=l.has(1),Bt.vertexUv2s=l.has(2),Bt.vertexUv3s=l.has(3),l.clear(),Bt}function g(w){let M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(let P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(m(M,w),x(M,w),M.push(n.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function m(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numSunLights),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numSunLightShadows),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),w.push(o.mask)}function C(w){let M=p[w.type],P;if(M){let N=ns[M];P=tn.clone(N.uniforms)}else P=w.uniforms;return P}function y(w,M){let P=u.get(M);return P!==void 0?++P.usedTimes:(P=new fM(n,M,w,s),h.push(P),u.set(M,P)),P}function T(w){if(--w.usedTimes===0){let M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),u.delete(w.cacheKey),w.destroy()}}function S(w){a.remove(w)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:C,acquireProgram:y,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:R}}function gM(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function wM(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Cg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ag(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,_,b,g,m){let x=n[t];return x===void 0?(x={id:f.id,object:f,geometry:p,material:_,materialVariant:o(f),groupOrder:b,renderOrder:f.renderOrder,z:g,group:m},n[t]=x):(x.id=f.id,x.object=f,x.geometry=p,x.material=_,x.materialVariant=o(f),x.groupOrder=b,x.renderOrder=f.renderOrder,x.z=g,x.group=m),t++,x}function l(f,p,_,b,g,m,x){x.reversedDepth===!0&&(g=-g);let C=a(f,p,_,b,g,m);_.transmission>0?i.push(C):_.transparent===!0?s.push(C):e.push(C)}function h(f,p,_,b,g,m){let x=a(f,p,_,b,g,m);_.transmission>0?i.unshift(x):_.transparent===!0?s.unshift(x):e.unshift(x)}function u(f,p){e.length>1&&e.sort(f||wM),i.length>1&&i.sort(p||Cg),s.length>1&&s.sort(p||Cg)}function d(){for(let f=t,p=n.length;f<p;f++){let _=n[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:u}}function bM(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Ag,n.set(i,[o])):s>=r.length?(o=new Ag,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function yM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Ht};break;case"SpotLight":e={position:new F,direction:new F,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function vM(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var xM=0;function SM(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function MM(n){let t=new yM,e=vM(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new F);let s=new F,r=new Yt,o=new Yt;function a(h){let u=0,d=0,f=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let p=0,_=0,b=0,g=0,m=0,x=0,C=0,y=0,T=0,S=0,R=0,w=0,M=0,P=0;h.sort(SM);for(let U=0,k=h.length;U<k;U++){let L=h[U],V=L.color,j=L.intensity,Z=L.distance,lt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===qs?lt=L.shadow.map.texture:lt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*j,d+=V.g*j,f+=V.b*j;else if(L.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(L.sh.coefficients[$],j);P++}else if(L.isSunLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,at=e.get(L);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[_]=at,i.sunShadowMap[_]=lt;let It=nt.getViewportCount();for(let Dt=0;Dt<It;Dt++)i.sunShadowMatrix[b+Dt]=nt.getMatrix(Dt),i.sunShadowCascade[b+Dt]=nt._cascadeData[Dt];b+=It,_++}i.sun[p]=$,p++}else if(L.isDirectionalLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let nt=L.shadow,at=e.get(L);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,i.directionalShadow[g]=at,i.directionalShadowMap[g]=lt,i.directionalShadowMatrix[g]=L.shadow.matrix,T++}i.directional[g]=$,g++}else if(L.isSpotLight){let $=t.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(V).multiplyScalar(j),$.distance=Z,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,i.spot[x]=$;let nt=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,nt.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[x]=nt.matrix,L.castShadow){let at=e.get(L);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,i.spotShadow[x]=at,i.spotShadowMap[x]=lt,R++}x++}else if(L.isRectAreaLight){let $=t.get(L);$.color.copy(V).multiplyScalar(j),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),i.rectArea[C]=$,C++}else if(L.isPointLight){let $=t.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){let nt=L.shadow,at=e.get(L);at.shadowIntensity=nt.intensity,at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,at.shadowCameraNear=nt.camera.near,at.shadowCameraFar=nt.camera.far,i.pointShadow[m]=at,i.pointShadowMap[m]=lt,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=$,m++}else if(L.isHemisphereLight){let $=t.get(L);$.skyColor.copy(L.color).multiplyScalar(j),$.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[y]=$,y++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let N=i.hash;(N.sunLength!==p||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==C||N.hemiLength!==y||N.numSunShadows!==_||N.numDirectionalShadows!==T||N.numPointShadows!==S||N.numSpotShadows!==R||N.numSpotMaps!==w||N.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=g,i.spot.length=x,i.rectArea.length=C,i.point.length=m,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=P,N.sunLength=p,N.directionalLength=g,N.pointLength=m,N.spotLength=x,N.rectAreaLength=C,N.hemiLength=y,N.numSunShadows=_,N.numDirectionalShadows=T,N.numPointShadows=S,N.numSpotShadows=R,N.numSpotMaps=w,N.numLightProbes=P,i.version=xM++)}function l(h,u){let d=0,f=0,p=0,_=0,b=0,g=0,m=u.matrixWorldInverse;for(let x=0,C=h.length;x<C;x++){let y=h[x];if(y.isSunLight){let T=i.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let T=i.directional[f];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),f++}else if(y.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let T=i.rectArea[b];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let T=i.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let T=i.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Pg(n){let t=new MM(n),e=[],i=[],s=[];function r(f){d.camera=f,e.length=0,i.length=0,s.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function h(){t.setup(e)}function u(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function EM(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Pg(n),t.set(s,[a])):r>=o.length?(a=new Pg(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var TM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RM=`uniform sampler2D shadow_pass;
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
}`,CM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],AM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Ig=new Yt,ml=new F,sp=new F;function PM(n,t,e){let i=new fo,s=new qt,r=new qt,o=new Pe,a=new lh,l=new ch,h={},u=e.maxTextureSize,d={[Vs]:mi,[mi]:Vs,[vn]:vn},f=new Be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:TM,fragmentShader:RM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let _=new je;_.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ee(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let m=this.type;this.render=function(S,R,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===Am&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let M=n.getRenderTarget(),P=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),U=n.state;U.setBlending(li),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=m!==this.type;k&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=S.length;L<V;L++){let j=S[L],Z=j.shadow;if(Z===void 0){Jt("WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let lt=Z.getFrameExtents();s.multiply(lt),r.copy(Z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,Z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,Z.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=$,Z.map===null||k===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===_o){if(j.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new ai(s.x,s.y,{format:qs,type:Fi,minFilter:_i,magFilter:_i,generateMipmaps:!1}),Z.map.texture.name=j.name+".shadowMap",Z.map.depthTexture=new Qn(s.x,s.y,un),Z.map.depthTexture.name=j.name+".shadowMapDepth",Z.map.depthTexture.format=jn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ke,Z.map.depthTexture.magFilter=ke}else j.isPointLight?(Z.map=new gu(s.x),Z.map.depthTexture=new oh(s.x,Ln)):(Z.map=new ai(s.x,s.y),Z.map.depthTexture=new Qn(s.x,s.y,Ln)),Z.map.depthTexture.name=j.name+".shadowMap",Z.map.depthTexture.format=jn,this.type===ur?(Z.map.depthTexture.compareFunction=$?fu:du,Z.map.depthTexture.minFilter=_i,Z.map.depthTexture.magFilter=_i):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=ke,Z.map.depthTexture.magFilter=ke);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let nt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();j.isPointLight!==!0&&Z.updateMatrices(j,w);for(let at=0;at<nt;at++){let It=Z.getCamera(at);if(j.isPointLight){let Dt=Z.camera,Ee=Z.matrix,de=j.distance||Dt.far;de!==Dt.far&&(Dt.far=de,Dt.updateProjectionMatrix()),ml.setFromMatrixPosition(j.matrixWorld),Dt.position.copy(ml),sp.copy(Dt.position),sp.add(CM[at]),Dt.up.copy(AM[at]),Dt.lookAt(sp),Dt.updateMatrixWorld(),Ee.makeTranslation(-ml.x,-ml.y,-ml.z),Ig.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Ig,Dt.coordinateSystem,Dt.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,at),n.clear();else{at===0&&(n.setRenderTarget(Z.map),n.clear());let Dt=Z.getViewport(at);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),U.viewport(o)}i=Z.getFrustum(at),y(R,w,It,j,this.type)}Z.isPointLightShadow!==!0&&this.type===_o&&x(Z,w),Z.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,P,N)};function x(S,R){let w=t.update(b);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null?S.mapPass=new ai(s.x,s.y,{format:qs,type:Fi}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(R,null,w,f,b,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(R,null,w,p,b,null)}function C(S,R,w,M){let P=null,N=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)P=N;else if(P=w.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=P.uuid,k=R.uuid,L=h[U];L===void 0&&(L={},h[U]=L);let V=L[k];V===void 0&&(V=P.clone(),L[k]=V,R.addEventListener("dispose",T)),P=V}if(P.visible=R.visible,P.wireframe=R.wireframe,M===_o?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=n.properties.get(P);U.light=w}return P}function y(S,R,w,M,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===_o)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);let k=t.update(S),L=S.material;if(Array.isArray(L)){let V=k.groups;for(let j=0,Z=V.length;j<Z;j++){let lt=V[j],$=L[lt.materialIndex];if($&&$.visible){let nt=C(S,$,M,P);S.onBeforeShadow(n,S,R,w,k,nt,lt),n.renderBufferDirect(w,null,k,nt,S,lt),S.onAfterShadow(n,S,R,w,k,nt,lt)}}}else if(L.visible){let V=C(S,L,M,P);S.onBeforeShadow(n,S,R,w,k,V,null),n.renderBufferDirect(w,null,k,V,S,null),S.onAfterShadow(n,S,R,w,k,V,null)}}let U=S.children;for(let k=0,L=U.length;k<L;k++)y(U[k],R,w,M,P)}function T(S){S.target.removeEventListener("dispose",T);for(let w in h){let M=h[w],P=S.target.uuid;P in M&&(M[P].dispose(),delete M[P])}}}function IM(n,t){function e(){let z=!1,yt=new Pe,st=null,vt=new Pe(0,0,0,0);return{setMask:function(Ct){st!==Ct&&!z&&(n.colorMask(Ct,Ct,Ct,Ct),st=Ct)},setLocked:function(Ct){z=Ct},setClear:function(Ct,ct,Xt,Bt,Ge){Ge===!0&&(Ct*=Bt,ct*=Bt,Xt*=Bt),yt.set(Ct,ct,Xt,Bt),vt.equals(yt)===!1&&(n.clearColor(Ct,ct,Xt,Bt),vt.copy(yt))},reset:function(){z=!1,st=null,vt.set(-1,0,0,0)}}}function i(){let z=!1,yt=!1,st=null,vt=null,Ct=null;return{setReversed:function(ct){if(yt!==ct){let Xt=t.get("EXT_clip_control");ct?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),yt=ct;let Bt=Ct;Ct=null,this.setClear(Bt)}},getReversed:function(){return yt},setTest:function(ct){ct?it(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(ct){st!==ct&&!z&&(n.depthMask(ct),st=ct)},setFunc:function(ct){if(yt&&(ct=ag[ct]),vt!==ct){switch(ct){case Yc:n.depthFunc(n.NEVER);break;case jc:n.depthFunc(n.ALWAYS);break;case $c:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case Jc:n.depthFunc(n.EQUAL);break;case Zc:n.depthFunc(n.GEQUAL);break;case Kc:n.depthFunc(n.GREATER);break;case Qc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=ct}},setLocked:function(ct){z=ct},setClear:function(ct){Ct!==ct&&(Ct=ct,yt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){z=!1,st=null,vt=null,Ct=null,yt=!1}}}function s(){let z=!1,yt=null,st=null,vt=null,Ct=null,ct=null,Xt=null,Bt=null,Ge=null;return{setTest:function(De){z||(De?it(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(De){yt!==De&&!z&&(n.stencilMask(De),yt=De)},setFunc:function(De,Mn,Wn){(st!==De||vt!==Mn||Ct!==Wn)&&(n.stencilFunc(De,Mn,Wn),st=De,vt=Mn,Ct=Wn)},setOp:function(De,Mn,Wn){(ct!==De||Xt!==Mn||Bt!==Wn)&&(n.stencilOp(De,Mn,Wn),ct=De,Xt=Mn,Bt=Wn)},setLocked:function(De){z=De},setClear:function(De){Ge!==De&&(n.clearStencil(De),Ge=De)},reset:function(){z=!1,yt=null,st=null,vt=null,Ct=null,ct=null,Xt=null,Bt=null,Ge=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,u={},d={},f={},p=new WeakMap,_=[],b=null,g=!1,m=null,x=null,C=null,y=null,T=null,S=null,R=null,w=new Ht(0,0,0),M=0,P=!1,N=null,U=null,k=null,L=null,V=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,lt=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(lt=parseFloat(/^WebGL (\d)/.exec($)[1]),Z=lt>=1):$.indexOf("OpenGL ES")!==-1&&(lt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Z=lt>=2);let nt=null,at={},It=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Ee=new Pe().fromArray(It),de=new Pe().fromArray(Dt);function fe(z,yt,st,vt){let Ct=new Uint8Array(4),ct=n.createTexture();n.bindTexture(z,ct),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<st;Xt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(yt,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Ct):n.texImage2D(yt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ct);return ct}let Q={};Q[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(n.DEPTH_TEST),o.setFunc(ro),Gt(!1),Ce(Af),it(n.CULL_FACE),ie(li);function it(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function Mt(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function Vt(z,yt){return f[z]!==yt?(n.bindFramebuffer(z,yt),f[z]=yt,z===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=yt),z===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=yt),!0):!1}function Tt(z,yt){let st=_,vt=!1;if(z){st=p.get(yt),st===void 0&&(st=[],p.set(yt,st));let Ct=z.textures;if(st.length!==Ct.length||st[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Xt=Ct.length;ct<Xt;ct++)st[ct]=n.COLOR_ATTACHMENT0+ct;st.length=Ct.length,vt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,vt=!0);vt&&n.drawBuffers(st)}function ae(z){return b!==z?(n.useProgram(z),b=z,!0):!1}let Ue={[xn]:n.FUNC_ADD,[Pm]:n.FUNC_SUBTRACT,[Im]:n.FUNC_REVERSE_SUBTRACT};Ue[Dm]=n.MIN,Ue[Nm]=n.MAX;let $t={[dr]:n.ZERO,[Lm]:n.ONE,[Fm]:n.SRC_COLOR,[Nf]:n.SRC_ALPHA,[zm]:n.SRC_ALPHA_SATURATE,[Qa]:n.DST_COLOR,[Ka]:n.DST_ALPHA,[Um]:n.ONE_MINUS_SRC_COLOR,[Lf]:n.ONE_MINUS_SRC_ALPHA,[Om]:n.ONE_MINUS_DST_COLOR,[Bm]:n.ONE_MINUS_DST_ALPHA,[km]:n.CONSTANT_COLOR,[Hm]:n.ONE_MINUS_CONSTANT_COLOR,[Vm]:n.CONSTANT_ALPHA,[Gm]:n.ONE_MINUS_CONSTANT_ALPHA};function ie(z,yt,st,vt,Ct,ct,Xt,Bt,Ge,De){if(z===li){g===!0&&(Mt(n.BLEND),g=!1);return}if(g===!1&&(it(n.BLEND),g=!0),z!==Mh){if(z!==m||De!==P){if((x!==xn||T!==xn)&&(n.blendEquation(n.FUNC_ADD),x=xn,T=xn),De)switch(z){case mo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFunc(n.ONE,n.ONE);break;case If:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Df:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:te("WebGLState: Invalid blending: ",z);break}else switch(z){case mo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case If:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Df:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",z);break}C=null,y=null,S=null,R=null,w.set(0,0,0),M=0,m=z,P=De}return}Ct=Ct||yt,ct=ct||st,Xt=Xt||vt,(yt!==x||Ct!==T)&&(n.blendEquationSeparate(Ue[yt],Ue[Ct]),x=yt,T=Ct),(st!==C||vt!==y||ct!==S||Xt!==R)&&(n.blendFuncSeparate($t[st],$t[vt],$t[ct],$t[Xt]),C=st,y=vt,S=ct,R=Xt),(Bt.equals(w)===!1||Ge!==M)&&(n.blendColor(Bt.r,Bt.g,Bt.b,Ge),w.copy(Bt),M=Ge),m=z,P=!1}function ne(z,yt){z.side===vn?Mt(n.CULL_FACE):it(n.CULL_FACE);let st=z.side===mi;yt&&(st=!st),Gt(st),z.blending===mo&&z.transparent===!1?ie(li):ie(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);let vt=z.stencilWrite;a.setTest(vt),vt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),se(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(z){N!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),N=z)}function Ce(z){z!==Rm?(it(n.CULL_FACE),z!==U&&(z===Af?n.cullFace(n.BACK):z===Cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),U=z}function At(z){z!==k&&(Z&&n.lineWidth(z),k=z)}function se(z,yt,st){z?(it(n.POLYGON_OFFSET_FILL),(L!==yt||V!==st)&&(L=yt,V=st,o.getReversed()&&(yt=-yt),n.polygonOffset(yt,st))):Mt(n.POLYGON_OFFSET_FILL)}function ce(z){z?it(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function we(z){z===void 0&&(z=n.TEXTURE0+j-1),nt!==z&&(n.activeTexture(z),nt=z)}function B(z,yt,st){st===void 0&&(nt===null?st=n.TEXTURE0+j-1:st=nt);let vt=at[st];vt===void 0&&(vt={type:void 0,texture:void 0},at[st]=vt),(vt.type!==z||vt.texture!==yt)&&(nt!==st&&(n.activeTexture(st),nt=st),n.bindTexture(z,yt||Q[z]),vt.type=z,vt.texture=yt)}function Ve(){let z=at[nt];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function ve(){try{n.compressedTexImage2D(...arguments)}catch(z){te("WebGLState:",z)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(z){te("WebGLState:",z)}}function v(){try{n.texSubImage2D(...arguments)}catch(z){te("WebGLState:",z)}}function H(){try{n.texSubImage3D(...arguments)}catch(z){te("WebGLState:",z)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(z){te("WebGLState:",z)}}function tt(){try{n.compressedTexSubImage3D(...arguments)}catch(z){te("WebGLState:",z)}}function ft(){try{n.texStorage2D(...arguments)}catch(z){te("WebGLState:",z)}}function wt(){try{n.texStorage3D(...arguments)}catch(z){te("WebGLState:",z)}}function et(){try{n.texImage2D(...arguments)}catch(z){te("WebGLState:",z)}}function rt(){try{n.texImage3D(...arguments)}catch(z){te("WebGLState:",z)}}function bt(z){return d[z]!==void 0?d[z]:n.getParameter(z)}function zt(z,yt){d[z]!==yt&&(n.pixelStorei(z,yt),d[z]=yt)}function gt(z){Ee.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Ee.copy(z))}function mt(z){de.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),de.copy(z))}function Lt(z,yt){let st=h.get(yt);st===void 0&&(st=new WeakMap,h.set(yt,st));let vt=st.get(z);vt===void 0&&(vt=n.getUniformBlockIndex(yt,z.name),st.set(z,vt))}function Wt(z,yt){let vt=h.get(yt).get(z);l.get(yt)!==vt&&(n.uniformBlockBinding(yt,vt,z.__bindingPointIndex),l.set(yt,vt))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},nt=null,at={},f={},p=new WeakMap,_=[],b=null,g=!1,m=null,x=null,C=null,y=null,T=null,S=null,R=null,w=new Ht(0,0,0),M=0,P=!1,N=null,U=null,k=null,L=null,V=null,Ee.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:Mt,bindFramebuffer:Vt,drawBuffers:Tt,useProgram:ae,setBlending:ie,setMaterial:ne,setFlipSided:Gt,setCullFace:Ce,setLineWidth:At,setPolygonOffset:se,setScissorTest:ce,activeTexture:we,bindTexture:B,unbindTexture:Ve,compressedTexImage2D:ve,compressedTexImage3D:I,texImage2D:et,texImage3D:rt,pixelStorei:zt,getParameter:bt,updateUBOMapping:Lt,uniformBlockBinding:Wt,texStorage2D:ft,texStorage3D:wt,texSubImage2D:v,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:tt,scissor:gt,viewport:mt,reset:Qt}}function DM(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new qt,u=new WeakMap,d=new Set,f,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,v){return _?new OffscreenCanvas(I,v):Ba("canvas")}function g(I,v,H){let W=1,tt=ve(I);if((tt.width>H||tt.height>H)&&(W=H/Math.max(tt.width,tt.height)),W<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ft=Math.floor(W*tt.width),wt=Math.floor(W*tt.height);f===void 0&&(f=b(ft,wt));let et=v?b(ft,wt):f;return et.width=ft,et.height=wt,et.getContext("2d").drawImage(I,0,0,ft,wt),Jt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ft+"x"+wt+")."),et}else return"data"in I&&Jt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),I;return I}function m(I){return I.generateMipmaps}function x(I){n.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(I,v,H,W,tt,ft=!1){if(I!==null){if(n[I]!==void 0)return n[I];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let wt;W&&(wt=t.get("EXT_texture_norm16"),wt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=v;if(v===n.RED&&(H===n.FLOAT&&(et=n.R32F),H===n.HALF_FLOAT&&(et=n.R16F),H===n.UNSIGNED_BYTE&&(et=n.R8),H===n.UNSIGNED_SHORT&&wt&&(et=wt.R16_EXT),H===n.SHORT&&wt&&(et=wt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(et=n.R8UI),H===n.UNSIGNED_SHORT&&(et=n.R16UI),H===n.UNSIGNED_INT&&(et=n.R32UI),H===n.BYTE&&(et=n.R8I),H===n.SHORT&&(et=n.R16I),H===n.INT&&(et=n.R32I)),v===n.RG&&(H===n.FLOAT&&(et=n.RG32F),H===n.HALF_FLOAT&&(et=n.RG16F),H===n.UNSIGNED_BYTE&&(et=n.RG8),H===n.UNSIGNED_SHORT&&wt&&(et=wt.RG16_EXT),H===n.SHORT&&wt&&(et=wt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(et=n.RG8UI),H===n.UNSIGNED_SHORT&&(et=n.RG16UI),H===n.UNSIGNED_INT&&(et=n.RG32UI),H===n.BYTE&&(et=n.RG8I),H===n.SHORT&&(et=n.RG16I),H===n.INT&&(et=n.RG32I)),v===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(et=n.RGB8UI),H===n.UNSIGNED_SHORT&&(et=n.RGB16UI),H===n.UNSIGNED_INT&&(et=n.RGB32UI),H===n.BYTE&&(et=n.RGB8I),H===n.SHORT&&(et=n.RGB16I),H===n.INT&&(et=n.RGB32I)),v===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(et=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(et=n.RGBA16UI),H===n.UNSIGNED_INT&&(et=n.RGBA32UI),H===n.BYTE&&(et=n.RGBA8I),H===n.SHORT&&(et=n.RGBA16I),H===n.INT&&(et=n.RGBA32I)),v===n.RGB&&(H===n.UNSIGNED_SHORT&&wt&&(et=wt.RGB16_EXT),H===n.SHORT&&wt&&(et=wt.RGB16_SNORM_EXT),H===n.UNSIGNED_INT_5_9_9_9_REV&&(et=n.RGB9_E5),H===n.UNSIGNED_INT_10F_11F_11F_REV&&(et=n.R11F_G11F_B10F)),v===n.RGBA){let rt=ft?Ua:be.getTransfer(tt);H===n.FLOAT&&(et=n.RGBA32F),H===n.HALF_FLOAT&&(et=n.RGBA16F),H===n.UNSIGNED_BYTE&&(et=rt===Re?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT&&wt&&(et=wt.RGBA16_EXT),H===n.SHORT&&wt&&(et=wt.RGBA16_SNORM_EXT),H===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function T(I,v){let H;return I?v===null||v===Ln||v===Xs?H=n.DEPTH24_STENCIL8:v===un?H=n.DEPTH32F_STENCIL8:v===go&&(H=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ln||v===Xs?H=n.DEPTH_COMPONENT24:v===un?H=n.DEPTH_COMPONENT32F:v===go&&(H=n.DEPTH_COMPONENT16),H}function S(I,v){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==ke&&I.minFilter!==_i?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function R(I){let v=I.target;v.removeEventListener("dispose",R),M(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function w(I){let v=I.target;v.removeEventListener("dispose",w),N(v)}function M(I){let v=i.get(I);if(v.__webglInit===void 0)return;let H=I.source,W=p.get(H);if(W){let tt=W[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&P(I),Object.keys(W).length===0&&p.delete(H)}i.remove(I)}function P(I){let v=i.get(I);n.deleteTexture(v.__webglTexture);let H=I.source,W=p.get(H);delete W[v.__cacheKey],o.memory.textures--}function N(I){let v=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let tt=0;tt<v.__webglFramebuffer[W].length;tt++)n.deleteFramebuffer(v.__webglFramebuffer[W][tt]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=I.textures;for(let W=0,tt=H.length;W<tt;W++){let ft=i.get(H[W]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(H[W])}i.remove(I)}let U=0;function k(){U=0}function L(){return U}function V(I){U=I}function j(){let I=U;return I>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,I}function Z(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function lt(I,v){let H=i.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){let W=I.image;if(W===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(H,I,v);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+v)}function $(I,v){let H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Mt(H,I,v);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+v)}function nt(I,v){let H=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){Mt(H,I,v);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+v)}function at(I,v){let H=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){Vt(H,I,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+v)}let It={[Ei]:n.REPEAT,[Yn]:n.CLAMP_TO_EDGE,[th]:n.MIRRORED_REPEAT},Dt={[ke]:n.NEAREST,[Ym]:n.NEAREST_MIPMAP_NEAREST,[ll]:n.NEAREST_MIPMAP_LINEAR,[_i]:n.LINEAR,[Ch]:n.LINEAR_MIPMAP_NEAREST,[Ws]:n.LINEAR_MIPMAP_LINEAR},Ee={[Zm]:n.NEVER,[ig]:n.ALWAYS,[Km]:n.LESS,[du]:n.LEQUAL,[Qm]:n.EQUAL,[fu]:n.GEQUAL,[tg]:n.GREATER,[eg]:n.NOTEQUAL};function de(I,v){if(v.type===un&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===_i||v.magFilter===Ch||v.magFilter===ll||v.magFilter===Ws||v.minFilter===_i||v.minFilter===Ch||v.minFilter===ll||v.minFilter===Ws)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,It[v.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,It[v.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,It[v.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Dt[v.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Dt[v.minFilter]),v.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ke||v.minFilter!==ll&&v.minFilter!==Ws||v.type===un&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");n.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function fe(I,v){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",R));let W=v.source,tt=p.get(W);tt===void 0&&(tt={},p.set(W,tt));let ft=Z(v);if(ft!==I.__cacheKey){tt[ft]===void 0&&(tt[ft]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[ft].usedTimes++;let wt=tt[I.__cacheKey];wt!==void 0&&(tt[I.__cacheKey].usedTimes--,wt.usedTimes===0&&P(v)),I.__cacheKey=ft,I.__webglTexture=tt[ft].texture}return H}function Q(I,v,H){return Math.floor(Math.floor(I/H)/v)}function it(I,v,H,W){let ft=I.updateRanges;if(ft.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,H,W,v.data);else{ft.sort((zt,gt)=>zt.start-gt.start);let wt=0;for(let zt=1;zt<ft.length;zt++){let gt=ft[wt],mt=ft[zt],Lt=gt.start+gt.count,Wt=Q(mt.start,v.width,4),Qt=Q(gt.start,v.width,4);mt.start<=Lt+1&&Wt===Qt&&Q(mt.start+mt.count-1,v.width,4)===Wt?gt.count=Math.max(gt.count,mt.start+mt.count-gt.start):(++wt,ft[wt]=mt)}ft.length=wt+1;let et=e.getParameter(n.UNPACK_ROW_LENGTH),rt=e.getParameter(n.UNPACK_SKIP_PIXELS),bt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let zt=0,gt=ft.length;zt<gt;zt++){let mt=ft[zt],Lt=Math.floor(mt.start/4),Wt=Math.ceil(mt.count/4),Qt=Lt%v.width,z=Math.floor(Lt/v.width),yt=Wt,st=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(n.UNPACK_SKIP_ROWS,z),e.texSubImage2D(n.TEXTURE_2D,0,Qt,z,yt,st,H,W,v.data)}I.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,et),e.pixelStorei(n.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,bt)}}function Mt(I,v,H){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let tt=fe(I,v),ft=v.source;e.bindTexture(W,I.__webglTexture,n.TEXTURE0+H);let wt=i.get(ft);if(ft.version!==wt.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+H),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let st=be.getPrimaries(be.workingColorSpace),vt=v.colorSpace===ws?null:be.getPrimaries(v.colorSpace),Ct=v.colorSpace===ws||st===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let rt=g(v.image,!1,s.maxTextureSize);rt=Ve(v,rt);let bt=r.convert(v.format,v.colorSpace),zt=r.convert(v.type),gt=y(v.internalFormat,bt,zt,v.normalized,v.colorSpace,v.isVideoTexture);de(W,v);let mt,Lt=v.mipmaps,Wt=v.isVideoTexture!==!0,Qt=wt.__version===void 0||tt===!0,z=ft.dataReady,yt=S(v,rt);if(v.isDepthTexture)gt=T(v.format===es,v.type),Qt&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,gt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,bt,zt,null));else if(v.isDataTexture)if(Lt.length>0){Wt&&Qt&&e.texStorage2D(n.TEXTURE_2D,yt,gt,Lt[0].width,Lt[0].height);for(let st=0,vt=Lt.length;st<vt;st++)mt=Lt[st],Wt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,mt.width,mt.height,bt,zt,mt.data):e.texImage2D(n.TEXTURE_2D,st,gt,mt.width,mt.height,0,bt,zt,mt.data);v.generateMipmaps=!1}else Wt?(Qt&&e.texStorage2D(n.TEXTURE_2D,yt,gt,rt.width,rt.height),z&&it(v,rt,bt,zt)):e.texImage2D(n.TEXTURE_2D,0,gt,rt.width,rt.height,0,bt,zt,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,gt,Lt[0].width,Lt[0].height,rt.depth);for(let st=0,vt=Lt.length;st<vt;st++)if(mt=Lt[st],v.format!==qi)if(bt!==null)if(Wt){if(z)if(v.layerUpdates.size>0){let Ct=Yf(mt.width,mt.height,v.format,v.type);for(let ct of v.layerUpdates){let Xt=mt.data.subarray(ct*Ct/mt.data.BYTES_PER_ELEMENT,(ct+1)*Ct/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,ct,mt.width,mt.height,1,bt,Xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,rt.depth,bt,mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,gt,mt.width,mt.height,rt.depth,0,mt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,rt.depth,bt,zt,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,gt,mt.width,mt.height,rt.depth,0,bt,zt,mt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Wt&&Qt&&e.texStorage2D(n.TEXTURE_2D,yt,gt,Lt[0].width,Lt[0].height);for(let st=0,vt=Lt.length;st<vt;st++)mt=Lt[st],v.format!==qi?bt!==null?Wt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,mt.width,mt.height,bt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,gt,mt.width,mt.height,0,mt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,mt.width,mt.height,bt,zt,mt.data):e.texImage2D(n.TEXTURE_2D,st,gt,mt.width,mt.height,0,bt,zt,mt.data)}else if(v.isDataArrayTexture)if(Wt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,yt,gt,rt.width,rt.height,rt.depth),z)if(v.layerUpdates.size>0){let st=Yf(rt.width,rt.height,v.format,v.type);for(let vt of v.layerUpdates){let Ct=rt.data.subarray(vt*st/rt.data.BYTES_PER_ELEMENT,(vt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,rt.width,rt.height,1,bt,zt,Ct)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,bt,zt,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,rt.width,rt.height,rt.depth,0,bt,zt,rt.data);else if(v.isData3DTexture)Wt?(Qt&&e.texStorage3D(n.TEXTURE_3D,yt,gt,rt.width,rt.height,rt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,bt,zt,rt.data)):e.texImage3D(n.TEXTURE_3D,0,gt,rt.width,rt.height,rt.depth,0,bt,zt,rt.data);else if(v.isFramebufferTexture){if(Qt)if(Wt)e.texStorage2D(n.TEXTURE_2D,yt,gt,rt.width,rt.height);else{let st=rt.width,vt=rt.height;for(let Ct=0;Ct<yt;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,gt,st,vt,0,bt,zt,null),st>>=1,vt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let st=n.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),d.add(v),st.onpaint=vt=>{let Ct=vt.changedElements;for(let ct of d)Ct.includes(ct.image)&&(ct.needsUpdate=!0)},st.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,rt);else{let Ct=n.RGBA,ct=n.RGBA,Xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ct,ct,Xt,rt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Wt&&Qt){let st=ve(Lt[0]);e.texStorage2D(n.TEXTURE_2D,yt,gt,st.width,st.height)}for(let st=0,vt=Lt.length;st<vt;st++)mt=Lt[st],Wt?z&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,bt,zt,mt):e.texImage2D(n.TEXTURE_2D,st,gt,bt,zt,mt);v.generateMipmaps=!1}else if(Wt){if(Qt){let st=ve(rt);e.texStorage2D(n.TEXTURE_2D,yt,gt,st.width,st.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,zt,rt)}else e.texImage2D(n.TEXTURE_2D,0,gt,bt,zt,rt);m(v)&&x(W),wt.__version=ft.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Vt(I,v,H){if(v.image.length!==6)return;let W=fe(I,v),tt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+H);let ft=i.get(tt);if(tt.version!==ft.__version||W===!0){e.activeTexture(n.TEXTURE0+H);let wt=be.getPrimaries(be.workingColorSpace),et=v.colorSpace===ws?null:be.getPrimaries(v.colorSpace),rt=v.colorSpace===ws||wt===et?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let bt=v.isCompressedTexture||v.image[0].isCompressedTexture,zt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let ct=0;ct<6;ct++)!bt&&!zt?gt[ct]=g(v.image[ct],!0,s.maxCubemapSize):gt[ct]=zt?v.image[ct].image:v.image[ct],gt[ct]=Ve(v,gt[ct]);let mt=gt[0],Lt=r.convert(v.format,v.colorSpace),Wt=r.convert(v.type),Qt=y(v.internalFormat,Lt,Wt,v.normalized,v.colorSpace),z=v.isVideoTexture!==!0,yt=ft.__version===void 0||W===!0,st=tt.dataReady,vt=S(v,mt);de(n.TEXTURE_CUBE_MAP,v);let Ct;if(bt){z&&yt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,mt.width,mt.height);for(let ct=0;ct<6;ct++){Ct=gt[ct].mipmaps;for(let Xt=0;Xt<Ct.length;Xt++){let Bt=Ct[Xt];v.format!==qi?Lt!==null?z?st&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,0,0,Bt.width,Bt.height,Lt,Bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,Qt,Bt.width,Bt.height,0,Bt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,0,0,Bt.width,Bt.height,Lt,Wt,Bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt,Qt,Bt.width,Bt.height,0,Lt,Wt,Bt.data)}}}else{if(Ct=v.mipmaps,z&&yt){Ct.length>0&&vt++;let ct=ve(gt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,Qt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(zt){z?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,gt[ct].width,gt[ct].height,Lt,Wt,gt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,gt[ct].width,gt[ct].height,0,Lt,Wt,gt[ct].data);for(let Xt=0;Xt<Ct.length;Xt++){let Ge=Ct[Xt].image[ct].image;z?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,0,0,Ge.width,Ge.height,Lt,Wt,Ge.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,Qt,Ge.width,Ge.height,0,Lt,Wt,Ge.data)}}else{z?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Lt,Wt,gt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Qt,Lt,Wt,gt[ct]);for(let Xt=0;Xt<Ct.length;Xt++){let Bt=Ct[Xt];z?st&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,0,0,Lt,Wt,Bt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Xt+1,Qt,Lt,Wt,Bt.image[ct])}}}m(v)&&x(n.TEXTURE_CUBE_MAP),ft.__version=tt.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Tt(I,v,H,W,tt,ft){let wt=r.convert(H.format,H.colorSpace),et=r.convert(H.type),rt=y(H.internalFormat,wt,et,H.normalized,H.colorSpace),bt=i.get(v),zt=i.get(H);if(zt.__renderTarget=v,!bt.__hasExternalTextures){let gt=Math.max(1,v.width>>ft),mt=Math.max(1,v.height>>ft);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ft,rt,gt,mt,v.depth,0,wt,et,null):e.texImage2D(tt,ft,rt,gt,mt,0,wt,et,null)}e.bindFramebuffer(n.FRAMEBUFFER,I),we(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,tt,zt.__webglTexture,0,ce(v)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,tt,zt.__webglTexture,ft),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(I,v,H){if(n.bindRenderbuffer(n.RENDERBUFFER,I),v.depthBuffer){let W=v.depthTexture,tt=W&&W.isDepthTexture?W.type:null,ft=T(v.stencilBuffer,tt),wt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;we(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(v),ft,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(v),ft,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ft,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,I)}else{let W=v.textures;for(let tt=0;tt<W.length;tt++){let ft=W[tt],wt=r.convert(ft.format,ft.colorSpace),et=r.convert(ft.type),rt=y(ft.internalFormat,wt,et,ft.normalized,ft.colorSpace);we(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce(v),rt,v.width,v.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce(v),rt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,rt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(I,v,H){let W=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(v.depthTexture);if(tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),tt.__webglTexture===void 0){tt.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),de(n.TEXTURE_CUBE_MAP,v.depthTexture);let bt=r.convert(v.depthTexture.format),zt=r.convert(v.depthTexture.type),gt;v.depthTexture.format===jn?gt=n.DEPTH_COMPONENT24:v.depthTexture.format===es&&(gt=n.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,gt,v.width,v.height,0,bt,zt,null)}}else lt(v.depthTexture,0);let ft=tt.__webglTexture,wt=ce(v),et=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+H:n.TEXTURE_2D,rt=v.depthTexture.format===es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===jn)we(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,et,ft,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,et,ft,0);else if(v.depthTexture.format===es)we(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,rt,et,ft,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,rt,et,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(I){let v=i.get(I),H=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let W=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),W){let tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,W.removeEventListener("dispose",tt)};W.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=W}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)Ue(v.__webglFramebuffer[W],I,W);else{let W=I.texture.mipmaps;W&&W.length>0?Ue(v.__webglFramebuffer[0],I,0):Ue(v.__webglFramebuffer,I,0)}else if(H){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]===void 0)v.__webglDepthbuffer[W]=n.createRenderbuffer(),ae(v.__webglDepthbuffer[W],I,!1);else{let tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=v.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ft)}}else{let W=I.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ae(v.__webglDepthbuffer,I,!1);else{let tt=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ft),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ft)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(I,v,H){let W=i.get(I);v!==void 0&&Tt(W.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&$t(I)}function ne(I){let v=I.texture,H=i.get(I),W=i.get(v);I.addEventListener("dispose",w);let tt=I.textures,ft=I.isWebGLCubeRenderTarget===!0,wt=tt.length>1;if(wt||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),ft){H.__webglFramebuffer=[];for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[et]=[];for(let rt=0;rt<v.mipmaps.length;rt++)H.__webglFramebuffer[et][rt]=n.createFramebuffer()}else H.__webglFramebuffer[et]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let et=0;et<v.mipmaps.length;et++)H.__webglFramebuffer[et]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(wt)for(let et=0,rt=tt.length;et<rt;et++){let bt=i.get(tt[et]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&we(I)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let rt=tt[et];H.__webglColorRenderbuffer[et]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[et]);let bt=r.convert(rt.format,rt.colorSpace),zt=r.convert(rt.type),gt=y(rt.internalFormat,bt,zt,rt.normalized,rt.colorSpace,I.isXRRenderTarget===!0),mt=ce(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,gt,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+et,n.RENDERBUFFER,H.__webglColorRenderbuffer[et])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ft){e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),de(n.TEXTURE_CUBE_MAP,v);for(let et=0;et<6;et++)if(v.mipmaps&&v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)Tt(H.__webglFramebuffer[et][rt],I,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,rt);else Tt(H.__webglFramebuffer[et],I,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(v)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let et=0,rt=tt.length;et<rt;et++){let bt=tt[et],zt=i.get(bt),gt=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(gt=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,zt.__webglTexture),de(gt,bt),Tt(H.__webglFramebuffer,I,bt,n.COLOR_ATTACHMENT0+et,gt,0),m(bt)&&x(gt)}e.unbindTexture()}else{let et=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(et=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(et,W.__webglTexture),de(et,v),v.mipmaps&&v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)Tt(H.__webglFramebuffer[rt],I,v,n.COLOR_ATTACHMENT0,et,rt);else Tt(H.__webglFramebuffer,I,v,n.COLOR_ATTACHMENT0,et,0);m(v)&&x(et),e.unbindTexture()}I.depthBuffer&&$t(I)}function Gt(I){let v=I.textures;for(let H=0,W=v.length;H<W;H++){let tt=v[H];if(m(tt)){let ft=C(I),wt=i.get(tt).__webglTexture;e.bindTexture(ft,wt),x(ft),e.unbindTexture()}}}let Ce=[],At=[];function se(I){if(I.samples>0){if(we(I)===!1){let v=I.textures,H=I.width,W=I.height,tt=n.COLOR_BUFFER_BIT,ft=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(I),et=v.length>1;if(et)for(let bt=0;bt<v.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);let rt=I.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let bt=0;bt<v.length;bt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),et){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);let zt=i.get(v[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,H,W,0,0,H,W,tt,n.NEAREST),l===!0&&(Ce.length=0,At.length=0,Ce.push(n.COLOR_ATTACHMENT0+bt),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ce.push(ft),At.push(ft),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,At)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ce))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),et)for(let bt=0;bt<v.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[bt]);let zt=i.get(v[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let v=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function ce(I){return Math.min(s.maxSamples,I.samples)}function we(I){let v=i.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function B(I){let v=o.render.frame;u.get(I)!==v&&(u.set(I,v),I.update())}function Ve(I,v){let H=I.colorSpace,W=I.format,tt=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Fa&&H!==ws&&(be.getTransfer(H)===Re?(W!==qi||tt!==vi)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",H)),v}function ve(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=V,this.setTexture2D=lt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=at,this.rebindTextures=ie,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=we,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function NM(n,t){function e(i,s=ws){let r,o=be.getTransfer(s);if(i===vi)return n.UNSIGNED_BYTE;if(i===Ph)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ih)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Of)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===zf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uf)return n.BYTE;if(i===Bf)return n.SHORT;if(i===go)return n.UNSIGNED_SHORT;if(i===Ah)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===kf)return n.ALPHA;if(i===Hf)return n.RGB;if(i===qi)return n.RGBA;if(i===jn)return n.DEPTH_COMPONENT;if(i===es)return n.DEPTH_STENCIL;if(i===Dh)return n.RED;if(i===Nh)return n.RED_INTEGER;if(i===qs)return n.RG;if(i===Lh)return n.RG_INTEGER;if(i===Fh)return n.RGBA_INTEGER;if(i===cl||i===hl||i===ul||i===dl)if(o===Re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===cl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===cl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uh||i===Bh||i===Oh||i===zh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kh||i===Hh||i===Vh||i===Gh||i===Wh||i===fl||i===Xh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kh||i===Hh)return o===Re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Vh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gh)return r.COMPRESSED_R11_EAC;if(i===Wh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===fl)return r.COMPRESSED_RG11_EAC;if(i===Xh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qh||i===Yh||i===jh||i===$h||i===Jh||i===Zh||i===Kh||i===Qh||i===tu||i===eu||i===iu||i===nu||i===su||i===ru)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===qh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$h)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tu)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eu)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===iu)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nu)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===su)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ru)return o===Re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ou||i===au||i===lu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ou)return o===Re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===au)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cu||i===hu||i===pl||i===uu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===cu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var LM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`,dp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ga(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Be({vertexShader:LM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Dn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fp=class extends $n{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,d=null,f=null,p=null,_=null,b=typeof XRWebGLBinding<"u",g=new dp,m={},x=e.getContextAttributes(),C=null,y=null,T=[],S=[],R=new qt,w=null,M=null,P=new ui;P.viewport=new Pe;let N=new ui;N.viewport=new Pe;let U=[P,N],k=new xh,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let it=T[Q];return it===void 0&&(it=new co,T[Q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Q){let it=T[Q];return it===void 0&&(it=new co,T[Q]=it),it.getGripSpace()},this.getHand=function(Q){let it=T[Q];return it===void 0&&(it=new co,T[Q]=it),it.getHandSpace()};function j(Q){let it=S.indexOf(Q.inputSource);if(it===-1)return;let Mt=T[it];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,h||o),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Z(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",lt);for(let Q=0;Q<T.length;Q++){let it=S[Q];it!==null&&(S[Q]=null,T[Q].disconnect(it))}L=null,V=null,g.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(C),p=null,f=null,d=null,s=null,y=null,fe.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),M!==null){let Q=M.camera;Q.fov=M.fov,Q.zoom=M.zoom,Q.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",lt),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Vt=null,Tt=null;x.depth&&(Tt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=x.stencil?es:jn,Vt=x.stencil?Xs:Ln);let ae={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ai(f.textureWidth,f.textureHeight,{format:qi,type:vi,depthTexture:new Qn(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Mt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new ai(p.framebufferWidth,p.framebufferHeight,{format:qi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function lt(Q){for(let it=0;it<Q.removed.length;it++){let Mt=Q.removed[it],Vt=S.indexOf(Mt);Vt>=0&&(S[Vt]=null,T[Vt].disconnect(Mt))}for(let it=0;it<Q.added.length;it++){let Mt=Q.added[it],Vt=S.indexOf(Mt);if(Vt===-1){for(let ae=0;ae<T.length;ae++)if(ae>=S.length){S.push(Mt),Vt=ae;break}else if(S[ae]===null){S[ae]=Mt,Vt=ae;break}if(Vt===-1)break}let Tt=T[Vt];Tt&&Tt.connect(Mt)}}let $=new F,nt=new F;function at(Q,it,Mt){$.setFromMatrixPosition(it.matrixWorld),nt.setFromMatrixPosition(Mt.matrixWorld);let Vt=$.distanceTo(nt),Tt=it.projectionMatrix.elements,ae=Mt.projectionMatrix.elements,Ue=Tt[14]/(Tt[10]-1),$t=Tt[14]/(Tt[10]+1),ie=(Tt[9]+1)/Tt[5],ne=(Tt[9]-1)/Tt[5],Gt=(Tt[8]-1)/Tt[0],Ce=(ae[8]+1)/ae[0],At=Ue*Gt,se=Ue*Ce,ce=Vt/(-Gt+Ce),we=ce*-Gt;if(it.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(we),Q.translateZ(ce),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Tt[10]===-1)Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let B=Ue+ce,Ve=$t+ce,ve=At-we,I=se+(Vt-we),v=ie*$t/Ve*B,H=ne*$t/Ve*B;Q.projectionMatrix.makePerspective(ve,I,v,H,B,Ve),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function It(Q,it){it===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(it.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let it=Q.near,Mt=Q.far;g.texture!==null&&(g.depthNear>0&&(it=g.depthNear),g.depthFar>0&&(Mt=g.depthFar)),k.near=N.near=P.near=it,k.far=N.far=P.far=Mt,(L!==k.near||V!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,V=k.far),k.layers.mask=Q.layers.mask|6,P.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Vt=Q.parent,Tt=k.cameras;It(k,Vt);for(let ae=0;ae<Tt.length;ae++)It(Tt[ae],Vt);Tt.length===2?at(k,P,N):k.projectionMatrix.copy(P.projectionMatrix),M===null&&Q.isPerspectiveCamera&&(M={camera:Q,fov:Q.fov,zoom:Q.zoom}),Dt(Q,k,Vt)};function Dt(Q,it,Mt){Mt===null?Q.matrix.copy(it.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(it.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(it.projectionMatrix),Q.projectionMatrixInverse.copy(it.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ih*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Q){return m[Q]};let Ee=null;function de(Q,it){if(u=it.getViewerPose(h||o),_=it,u!==null){let Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Vt=!1;Mt.length!==k.cameras.length&&(k.cameras.length=0,Vt=!0);for(let $t=0;$t<Mt.length;$t++){let ie=Mt[$t],ne=null;if(p!==null)ne=p.getViewport(ie);else{let Ce=d.getViewSubImage(f,ie);ne=Ce.viewport,$t===0&&(t.setRenderTargetTextures(y,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(y))}let Gt=U[$t];Gt===void 0&&(Gt=new ui,Gt.layers.enable($t),Gt.viewport=new Pe,U[$t]=Gt),Gt.matrix.fromArray(ie.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(ie.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(ne.x,ne.y,ne.width,ne.height),$t===0&&(k.matrix.copy(Gt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Vt===!0&&k.cameras.push(Gt)}let Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){d=i.getBinding();let $t=d.getDepthInformation(Mt[0]);$t&&$t.isValid&&$t.texture&&g.init($t,s.renderState)}if(Tt&&Tt.includes("camera-access")&&b){t.state.unbindTexture(),d=i.getBinding();for(let $t=0;$t<Mt.length;$t++){let ie=Mt[$t].camera;if(ie){let ne=m[ie];ne||(ne=new Ga,m[ie]=ne);let Gt=d.getCameraImage(ie);ne.sourceTexture=Gt}}}}for(let Mt=0;Mt<T.length;Mt++){let Vt=S[Mt],Tt=T[Mt];Vt!==null&&Tt!==void 0&&Tt.update(Vt,it,h||o)}Ee&&Ee(Q,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),_=null}let fe=new Dg;fe.setAnimationLoop(de),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}},UM=new Yt,Og=new le;Og.set(-1,0,0,0,1,0,0,0,1);function BM(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Wf(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,C,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),_(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),b(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,C):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===mi&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===mi&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),C=x.envMap,y=x.envMapRotation;C&&(g.envMap.value=C,g.envMapRotation.value.setFromMatrix4(UM.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Og),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,C){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=C*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===mi&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function OM(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){let S=T.program;i.uniformBlockBinding(y,S)}function h(y,T){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",x));let R=T.program;i.updateUBOMapping(y,R);let w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function u(y){let T=d();y.__bindingPointIndex=T;let S=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let T=s[y.id],S=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let w=0,M=S.length;w<M;w++){let P=S[w];if(Array.isArray(P))for(let N=0,U=P.length;N<U;N++)p(P[N],w,N,R);else p(P,w,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,T,S,R){if(b(y,T,S,R)===!0){let w=y.__offset,M=y.value;if(Array.isArray(M)){let P=0;for(let N=0;N<M.length;N++){let U=M[N],k=m(U);_(U,y.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(M,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,y.__data)}}function _(y,T,S){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,S)}function b(y,T,S,R){let w=y.value,M=T+"_"+S;if(R[M]===void 0)return typeof w=="number"||typeof w=="boolean"?R[M]=w:ArrayBuffer.isView(w)?R[M]=w.slice():R[M]=w.clone(),!0;{let P=R[M];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return R[M]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(P.equals(w)===!1)return P.copy(w),!0}}return!1}function g(y){let T=y.uniforms,S=0,R=16;for(let M=0,P=T.length;M<P;M++){let N=Array.isArray(T[M])?T[M]:[T[M]];for(let U=0,k=N.length;U<k;U++){let L=N[U],V=Array.isArray(L.value)?L.value:[L.value];for(let j=0,Z=V.length;j<Z;j++){let lt=V[j],$=m(lt),nt=S%R,at=nt%$.boundary,It=nt+at;S+=at,It!==0&&R-It<$.storage&&(S+=R-It),L.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=$.storage}}}let w=S%R;return w>0&&(S+=R-w),y.__size=S,y.__cache={},this}function m(y){let T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",y),T}function x(y){let T=y.target;T.removeEventListener("dispose",x);let S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function C(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:h,dispose:C}}var zM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),is=null;function kM(){return is===null&&(is=new Kn(zM,16,16,qs,Fi),is.name="DFG_LUT",is.minFilter=_i,is.magFilter=_i,is.wrapS=Yn,is.wrapT=Yn,is.generateMipmaps=!1,is.needsUpdate=!0),is}var So=class{constructor(t={}){let{canvas:e=sg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=vi}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;let b=p,g=new Set([Fh,Lh,Nh]),m=new Set([vi,Ln,go,Xs,Ph,Ih]),x=new Uint32Array(4),C=new Int32Array(4),y=new F,T=null,S=null,R=[],w=[],M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,N=!1,U=null,k=null,L=null,V=null;this._outputColorSpace=Ae;let j=0,Z=0,lt=null,$=-1,nt=null,at=new Pe,It=new Pe,Dt=null,Ee=new Ht(0),de=0,fe=e.width,Q=e.height,it=1,Mt=null,Vt=null,Tt=new Pe(0,0,fe,Q),ae=new Pe(0,0,fe,Q),Ue=!1,$t=new fo,ie=!1,ne=!1,Gt=new Yt,Ce=new F,At=new Pe,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function we(){return lt===null?it:1}let B=i;function Ve(E,O){return e.getContext(E,O)}let ve,I,v,H,W,tt,ft,wt,et,rt,bt,zt,gt,mt,Lt,Wt,Qt,z,yt,st,vt,Ct,ct;try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ge,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),B===null){let O="webgl2";if(B=Ve(O,E),B===null)throw Ve(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(E){throw e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),te("WebGLRenderer: "+E.message),E}function Xt(){ve=new Yx(B),ve.init(),vt=new NM(B,ve),I=new Bx(B,ve,t,vt),v=new IM(B,ve),I.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),k=B.createFramebuffer(),L=B.createFramebuffer(),V=B.createFramebuffer(),H=new Jx(B),W=new gM,tt=new DM(B,ve,v,W,I,vt,H),ft=new qx(P),wt=new Kb(B),Ct=new Fx(B,wt),et=new jx(B,wt,H,Ct),rt=new Kx(B,et,wt,Ct,H),z=new Zx(B,I,tt),Lt=new Ox(W),bt=new mM(P,ft,ve,I,Ct,Lt),zt=new BM(P,W),gt=new bM,mt=new EM(ve),Qt=new Lx(P,ft,v,rt,_,l),Wt=new PM(P,rt,I),ct=new OM(B,H,I,v),yt=new Ux(B,ve,H),st=new $x(B,ve,H),H.programs=bt.programs,P.capabilities=I,P.extensions=ve,P.properties=W,P.renderLists=gt,P.shadowMap=Wt,P.state=v,P.info=H}b!==vi&&(M=new tS(b,e.width,e.height,a,s,r));let Bt=new fp(P,B);this.xr=Bt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(E){E!==void 0&&(it=E,this.setSize(fe,Q,!1))},this.getSize=function(E){return E.set(fe,Q)},this.setSize=function(E,O,K=!0){if(Bt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=E,Q=O,e.width=Math.floor(E*it),e.height=Math.floor(O*it),K===!0&&(e.style.width=E+"px",e.style.height=O+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(fe*it,Q*it).floor()},this.setDrawingBufferSize=function(E,O,K){fe=E,Q=O,it=K,e.width=Math.floor(E*K),e.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(b===vi){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(at)},this.getViewport=function(E){return E.copy(Tt)},this.setViewport=function(E,O,K,X){E.isVector4?Tt.set(E.x,E.y,E.z,E.w):Tt.set(E,O,K,X),v.viewport(at.copy(Tt).multiplyScalar(it).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,O,K,X){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,O,K,X),v.scissor(It.copy(ae).multiplyScalar(it).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(E){v.setScissorTest(Ue=E)},this.setOpaqueSort=function(E){Mt=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,K=!0){let X=0;if(E){let q=!1;if(lt!==null){let Rt=lt.texture.format;q=g.has(Rt)}if(q){let Rt=lt.texture.type,Nt=m.has(Rt),Et=Qt.getClearColor(),Ft=Qt.getClearAlpha(),kt=Et.r,pe=Et.g,xe=Et.b;Nt?(x[0]=kt,x[1]=pe,x[2]=xe,x[3]=Ft,B.clearBufferuiv(B.COLOR,0,x)):(C[0]=kt,C[1]=pe,C[2]=xe,C[3]=Ft,B.clearBufferiv(B.COLOR,0,C))}else X|=B.COLOR_BUFFER_BIT}O&&(X|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),U=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Ge,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Qt.dispose(),gt.dispose(),mt.dispose(),W.dispose(),ft.dispose(),rt.dispose(),Ct.dispose(),ct.dispose(),bt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",W_),Bt.removeEventListener("sessionend",X_),er.stop()};function Ge(E){E.preventDefault(),Gf("WebGLRenderer: Context Lost."),N=!0}function De(){Gf("WebGLRenderer: Context Restored."),N=!1;let E=H.autoReset,O=Wt.enabled,K=Wt.autoUpdate,X=Wt.needsUpdate,q=Wt.type;Xt(),H.autoReset=E,Wt.enabled=O,Wt.autoUpdate=K,Wt.needsUpdate=X,Wt.type=q}function Mn(E){te("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wn(E){let O=E.target;O.removeEventListener("dispose",Wn),tb(O)}function tb(E){eb(E),W.remove(E)}function eb(E){let O=W.get(E).programs;O!==void 0&&(O.forEach(function(K){bt.releaseProgram(K)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,X,q,Rt){O===null&&(O=se);let Nt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Et=sb(E,O,K,X,q);v.setMaterial(X,Nt);let Ft=K.index,kt=1;if(X.wireframe===!0){if(Ft=et.getWireframeAttribute(K),Ft===void 0)return;kt=2}let pe=K.drawRange,xe=K.attributes.position,Ut=pe.start*kt,Ne=(pe.start+pe.count)*kt;Rt!==null&&(Ut=Math.max(Ut,Rt.start*kt),Ne=Math.min(Ne,(Rt.start+Rt.count)*kt)),Ft!==null?(Ut=Math.max(Ut,0),Ne=Math.min(Ne,Ft.count)):xe!=null&&(Ut=Math.max(Ut,0),Ne=Math.min(Ne,xe.count));let ci=Ne-Ut;if(ci<0||ci===1/0)return;Ct.setup(q,X,Et,K,Ft);let Xe,ze=yt;if(Ft!==null&&(Xe=wt.get(Ft),ze=st,ze.setIndex(Xe)),q.isMesh)X.wireframe===!0?(v.setLineWidth(X.wireframeLinewidth*we()),ze.setMode(B.LINES)):ze.setMode(B.TRIANGLES);else if(q.isLine){let Ii=X.linewidth;Ii===void 0&&(Ii=1),v.setLineWidth(Ii*we()),q.isLineSegments?ze.setMode(B.LINES):q.isLineLoop?ze.setMode(B.LINE_LOOP):ze.setMode(B.LINE_STRIP)}else q.isPoints?ze.setMode(B.POINTS):q.isSprite&&ze.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))ze.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ii=q._multiDrawStarts,Pt=q._multiDrawCounts,Gi=q._multiDrawCount,Te=Ft?wt.get(Ft).bytesPerElement:1,bn=W.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<Gi;Xn++)bn.setValue(B,"_gl_DrawID",Xn),ze.render(Ii[Xn]/Te,Pt[Xn])}else if(q.isInstancedMesh)ze.renderInstances(Ut,ci,q.count);else if(K.isInstancedBufferGeometry){let Ii=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pt=Math.min(K.instanceCount,Ii);ze.renderInstances(Ut,ci,Pt)}else ze.render(Ut,ci)};function G_(E,O,K,X){U!==null&&E.isNodeMaterial&&U.setObject(X,E),ie===!0&&Lt.setState(E,K,!1),E.transparent===!0&&E.side===vn&&E.forceSinglePass===!1?(E.side=mi,E.needsUpdate=!0,Sc(E,O,X),E.side=Vs,E.needsUpdate=!0,Sc(E,O,X),E.side=vn):Sc(E,O,X)}this.compile=function(E,O,K=null){K===null&&(K=E),U!==null&&U.renderStart(E,O,K),S=mt.get(K),S.init(O),w.push(S),K.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(O.layers)&&(S.pushLight(q),q.castShadow&&S.pushShadow(q))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),ne=this.localClippingEnabled,ie=Lt.init(this.clippingPlanes,ne),ie===!0&&Lt.setGlobalState(this.clippingPlanes,O),U!==null&&Wt.render(S.state.shadowsArray,K,O);let X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Rt=q.material;if(Rt)if(Array.isArray(Rt))for(let Nt=0;Nt<Rt.length;Nt++){let Et=Rt[Nt];G_(Et,K,O,q),X.add(Et)}else G_(Rt,K,O,q),X.add(Rt)}),S=w.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(E,O,K=null){let X=this.compile(E,O,K);return new Promise(q=>{function Rt(){if(X.forEach(function(Nt){let Ft=W.get(Nt).currentProgram;(Ft===void 0||Ft.isReady())&&X.delete(Nt)}),X.size===0){q(E);return}setTimeout(Rt,10)}ve.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Yd=null;function ib(E){Yd&&Yd(E)}function W_(){er.stop()}function X_(){er.start()}let er=new Dg;er.setAnimationLoop(ib),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(E){Yd=E,Bt.setAnimationLoop(E),E===null?er.stop():er.start()},Bt.addEventListener("sessionstart",W_),Bt.addEventListener("sessionend",X_),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;U!==null&&U.renderStart(E,O);let K=Bt.enabled===!0&&Bt.isPresenting===!0,X=M!==null&&(lt===null||K)&&M.begin(P,lt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(O),O=Bt.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,O,lt),S=mt.get(E,w.length),S.init(O),S.state.textureUnits=tt.getTextureUnits(),w.push(S),Gt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$t.setFromProjectionMatrix(Gt,An,O.reversedDepth),ne=this.localClippingEnabled,ie=Lt.init(this.clippingPlanes,ne),T=gt.get(E,R.length),T.init(),R.push(T),Bt.enabled===!0&&Bt.isPresenting===!0){let Nt=P.xr.getDepthSensingMesh();Nt!==null&&jd(Nt,O,-1/0,P.sortObjects)}jd(E,O,0,P.sortObjects),T.finish(),U!==null&&U.updateLights(S.state.lightsArray),P.sortObjects===!0&&T.sort(Mt,Vt),ce=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,ce&&Qt.addToRenderList(T,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Lt.beginShadows();let q=S.state.shadowsArray;if(Wt.render(q,E,O),ie===!0&&Lt.endShadows(),(X&&M.hasRenderPass())===!1){let Nt=T.opaque,Et=T.transmissive;if(S.setupLights(),O.isArrayCamera){let Ft=O.cameras;if(Et.length>0)for(let kt=0,pe=Ft.length;kt<pe;kt++){let xe=Ft[kt];Y_(Nt,Et,E,xe)}ce&&Qt.render(E);for(let kt=0,pe=Ft.length;kt<pe;kt++){let xe=Ft[kt];q_(T,E,xe,xe.viewport)}}else Et.length>0&&Y_(Nt,Et,E,O),ce&&Qt.render(E),q_(T,E,O)}lt!==null&&Z===0&&(tt.updateMultisampleRenderTarget(lt),tt.updateRenderTargetMipmap(lt)),X&&M.end(P),E.isScene===!0&&E.onAfterRender(P,E,O),Ct.resetDefaultState(),$=-1,nt=null,w.pop(),w.length>0?(S=w[w.length-1],tt.setTextureUnits(S.state.textureUnits),ie===!0&&Lt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function jd(E,O,K,X){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum($t)){X&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Gt);let Nt=rt.update(E),Et=E.material;Et.visible&&T.push(E,Nt,Et,K,At.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum($t))){let Nt=rt.update(E),Et=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),At.copy(Nt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(Gt)),Array.isArray(Et)){let Ft=Nt.groups;for(let kt=0,pe=Ft.length;kt<pe;kt++){let xe=Ft[kt],Ut=Et[xe.materialIndex];Ut&&Ut.visible&&T.push(E,Nt,Ut,K,At.z,xe,O)}}else Et.visible&&T.push(E,Nt,Et,K,At.z,null,O)}}let Rt=E.children;for(let Nt=0,Et=Rt.length;Nt<Et;Nt++)jd(Rt[Nt],O,K,X)}function q_(E,O,K,X){let{opaque:q,transmissive:Rt,transparent:Nt}=E;S.setupLightsView(K),ie===!0&&Lt.setGlobalState(P.clippingPlanes,K),X&&v.viewport(at.copy(X)),q.length>0&&xc(q,O,K),Rt.length>0&&xc(Rt,O,K),Nt.length>0&&xc(Nt,O,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Y_(E,O,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[X.id]===void 0){let Ut=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[X.id]=new ai(1,1,{generateMipmaps:!0,type:Ut?Fi:vi,minFilter:Ws,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:be.workingColorSpace})}let Rt=S.state.transmissionRenderTarget[X.id],Nt=X.viewport||at;Rt.setSize(Nt.z*P.transmissionResolutionScale,Nt.w*P.transmissionResolutionScale);let Et=P.getRenderTarget(),Ft=P.getActiveCubeFace(),kt=P.getActiveMipmapLevel();P.setRenderTarget(Rt),P.getClearColor(Ee),de=P.getClearAlpha(),de<1&&P.setClearColor(16777215,.5),P.clear(),ce&&Qt.render(K);let pe=P.toneMapping;P.toneMapping=Nn;let xe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),S.setupLightsView(X),ie===!0&&Lt.setGlobalState(P.clippingPlanes,X),xc(E,K,X),tt.updateMultisampleRenderTarget(Rt),tt.updateRenderTargetMipmap(Rt),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Ne=0,ci=O.length;Ne<ci;Ne++){let Xe=O[Ne],{object:ze,geometry:Ii,material:Pt,group:Gi}=Xe;if(Pt.side===vn&&ze.layers.test(X.layers)){let Te=Pt.side;Pt.side=mi,Pt.needsUpdate=!0,j_(ze,K,X,Ii,Pt,Gi),Pt.side=Te,Pt.needsUpdate=!0,Ut=!0}}Ut===!0&&(tt.updateMultisampleRenderTarget(Rt),tt.updateRenderTargetMipmap(Rt))}P.setRenderTarget(Et,Ft,kt),P.setClearColor(Ee,de),xe!==void 0&&(X.viewport=xe),P.toneMapping=pe}function xc(E,O,K){let X=O.isScene===!0?O.overrideMaterial:null;for(let q=0,Rt=E.length;q<Rt;q++){let Nt=E[q],{object:Et,geometry:Ft,group:kt}=Nt,pe=Nt.material;pe.allowOverride===!0&&X!==null&&(pe=X),Et.layers.test(K.layers)&&j_(Et,O,K,Ft,pe,kt)}}function j_(E,O,K,X,q,Rt){U!==null&&q.isNodeMaterial&&U.setObject(E,q),E.onBeforeRender(P,O,K,X,q,Rt),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(P,O,K,X,E,Rt),q.transparent===!0&&q.side===vn&&q.forceSinglePass===!1?(q.side=mi,q.needsUpdate=!0,P.renderBufferDirect(K,O,X,q,E,Rt),q.side=Vs,q.needsUpdate=!0,P.renderBufferDirect(K,O,X,q,E,Rt),q.side=vn):P.renderBufferDirect(K,O,X,q,E,Rt),E.onAfterRender(P,O,K,X,q,Rt)}function Sc(E,O,K){O.isScene!==!0&&(O=se);let X=W.get(E),q=S.state.lights,Rt=S.state.shadowsArray,Nt=q.state.version,Et=bt.getParameters(E,q.state,Rt,O,K,S.state.lightProbeGridArray),Ft=bt.getProgramCacheKey(Et),kt=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,X.fog=O.fog;let pe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=ft.get(E.envMap||X.environment,pe),X.envMapRotation=X.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,kt===void 0&&(E.addEventListener("dispose",Wn),kt=new Map,X.programs=kt);let xe=kt.get(Ft);if(xe!==void 0){if(X.currentProgram===xe&&X.lightsStateVersion===Nt)return J_(E,Et),xe}else Et.uniforms=bt.getUniforms(E),U!==null&&E.isNodeMaterial&&U.build(E,K,Et),E.onBeforeCompile(Et,P),xe=bt.acquireProgram(Et,Ft),kt.set(Ft,xe),X.uniforms=Et.uniforms;let Ut=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=Lt.uniform),J_(E,Et),X.needsLights=ob(E),X.lightsStateVersion=Nt,X.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.sunLights.value=q.state.sun,Ut.sunLightShadows.value=q.state.sunShadow,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.sunShadowMatrix.value=q.state.sunShadowMatrix,Ut.sunShadowCascade.value=q.state.sunShadowCascade,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=S.state.lightProbeGridArray.length>0,X.currentProgram=xe,X.uniformsList=null,xe}function $_(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=xo.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function J_(E,O){let K=W.get(E);K.outputColorSpace=O.outputColorSpace,K.batching=O.batching,K.batchingColor=O.batchingColor,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.instancingMorph=O.instancingMorph,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function nb(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let K=0,X=E.length;K<X;K++){let q=E[K];if(q.texture!==null&&q.boundingBox.containsPoint(y))return q}return null}function sb(E,O,K,X,q){O.isScene!==!0&&(O=se),tt.resetTextureUnits();let Rt=O.fog,Nt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?O.environment:null,Et=lt===null?P.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:be.workingColorSpace,Ft=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,kt=ft.get(X.envMap||Nt,Ft),pe=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,xe=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!K.morphAttributes.position,Ne=!!K.morphAttributes.normal,ci=!!K.morphAttributes.color,Xe=Nn;X.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Xe=P.toneMapping);let ze=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ii=ze!==void 0?ze.length:0,Pt=W.get(X),Gi=S.state.lights;if(ie===!0&&(ne===!0||E!==nt)){let We=E===nt&&X.id===$;Lt.setState(X,E,We)}let Te=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==Gi.state.version||Pt.outputColorSpace!==Et||q.isBatchedMesh&&Pt.batching===!1||!q.isBatchedMesh&&Pt.batching===!0||q.isBatchedMesh&&Pt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Pt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Pt.instancing===!1||!q.isInstancedMesh&&Pt.instancing===!0||q.isSkinnedMesh&&Pt.skinning===!1||!q.isSkinnedMesh&&Pt.skinning===!0||q.isInstancedMesh&&Pt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Pt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Pt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Pt.instancingMorph===!1&&q.morphTexture!==null||Pt.envMap!==kt||X.fog===!0&&Pt.fog!==Rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Lt.numPlanes||Pt.numIntersection!==Lt.numIntersection)||Pt.vertexAlphas!==pe||Pt.vertexTangents!==xe||Pt.morphTargets!==Ut||Pt.morphNormals!==Ne||Pt.morphColors!==ci||Pt.toneMapping!==Xe||Pt.morphTargetsCount!==Ii||!!Pt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Te=!0):(Te=!0,Pt.__version=X.version);let bn=Pt.currentProgram;Te===!0&&(bn=Sc(X,O,q),U&&X.isNodeMaterial&&U.onUpdateProgram(X,bn,Pt));let Xn=!1,Ts=!1,Vr=!1,Oe=bn.getUniforms(),oi=Pt.uniforms;if(v.useProgram(bn.program)&&(Xn=!0,Ts=!0,Vr=!0),X.id!==$&&($=X.id,Ts=!0),Pt.needsLights){let We=nb(S.state.lightProbeGridArray,q);Pt.lightProbeGrid!==We&&(Pt.lightProbeGrid=We,Ts=!0)}if(Xn||nt!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Oe.setValue(B,"projectionMatrix",E.projectionMatrix),Oe.setValue(B,"viewMatrix",E.matrixWorldInverse);let Cs=Oe.map.cameraPosition;Cs!==void 0&&Cs.setValue(B,Ce.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&Oe.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Oe.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),nt!==E&&(nt=E,Ts=!0,Vr=!0)}if(Pt.needsLights&&(Gi.state.sunShadowMap.length>0&&Oe.setValue(B,"sunShadowMap",Gi.state.sunShadowMap,tt),Gi.state.directionalShadowMap.length>0&&Oe.setValue(B,"directionalShadowMap",Gi.state.directionalShadowMap,tt),Gi.state.spotShadowMap.length>0&&Oe.setValue(B,"spotShadowMap",Gi.state.spotShadowMap,tt),Gi.state.pointShadowMap.length>0&&Oe.setValue(B,"pointShadowMap",Gi.state.pointShadowMap,tt)),q.isSkinnedMesh){Oe.setOptional(B,q,"bindMatrix"),Oe.setOptional(B,q,"bindMatrixInverse");let We=q.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Oe.setValue(B,"boneTexture",We.boneTexture,tt))}q.isBatchedMesh&&(Oe.setOptional(B,q,"batchingTexture"),Oe.setValue(B,"batchingTexture",q._matricesTexture,tt),Oe.setOptional(B,q,"batchingIdTexture"),Oe.setValue(B,"batchingIdTexture",q._indirectTexture,tt),Oe.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&Oe.setValue(B,"batchingColorTexture",q._colorsTexture,tt));let Rs=K.morphAttributes;if((Rs.position!==void 0||Rs.normal!==void 0||Rs.color!==void 0)&&z.update(q,K,bn),(Ts||Pt.receiveShadow!==q.receiveShadow)&&(Pt.receiveShadow=q.receiveShadow,Oe.setValue(B,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&O.environment!==null&&(oi.envMapIntensity.value=O.environmentIntensity),oi.dfgLUT!==void 0&&(oi.dfgLUT.value=kM()),Ts){if(Oe.setValue(B,"toneMappingExposure",P.toneMappingExposure),Pt.needsLights&&rb(oi,Vr),Rt&&X.fog===!0&&zt.refreshFogUniforms(oi,Rt),zt.refreshMaterialUniforms(oi,X,it,Q,S.state.transmissionRenderTarget[E.id]),Pt.needsLights&&Pt.lightProbeGrid){let We=Pt.lightProbeGrid;oi.probesSH.value=We.texture,oi.probesMin.value.copy(We.boundingBox.min),oi.probesMax.value.copy(We.boundingBox.max),oi.probesResolution.value.copy(We.resolution)}xo.upload(B,$_(Pt),oi,tt)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xo.upload(B,$_(Pt),oi,tt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Oe.setValue(B,"center",q.center),Oe.setValue(B,"modelViewMatrix",q.modelViewMatrix),Oe.setValue(B,"normalMatrix",q.normalMatrix),Oe.setValue(B,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let We=X.uniformsGroups;for(let Cs=0,Gr=We.length;Cs<Gr;Cs++){let K_=We[Cs];ct.update(K_,bn),ct.bind(K_,bn)}}return bn}function rb(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function ob(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return lt},this.setRenderTargetTextures=function(E,O,K){let X=W.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=O,W.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let K=W.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){lt=E,j=O,Z=K;let X=null,q=!1,Rt=!1;if(E){let Et=W.get(E);if(Et.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(B.FRAMEBUFFER,Et.__webglFramebuffer),at.copy(E.viewport),It.copy(E.scissor),Dt=E.scissorTest,v.viewport(at),v.scissor(It),v.setScissorTest(Dt),$=-1;return}else if(Et.__webglFramebuffer===void 0)tt.setupRenderTarget(E);else if(Et.__hasExternalTextures)tt.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let pe=E.depthTexture;if(Et.__boundDepthTexture!==pe){if(pe!==null&&W.has(pe)&&(E.width!==pe.image.width||E.height!==pe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(E)}}let Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(Rt=!0);let kt=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[O])?X=kt[O][K]:X=kt[O],q=!0):E.samples>0&&tt.useMultisampledRTT(E)===!1?X=W.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?X=kt[K]:X=kt,at.copy(E.viewport),It.copy(E.scissor),Dt=E.scissorTest}else at.copy(Tt).multiplyScalar(it).floor(),It.copy(ae).multiplyScalar(it).floor(),Dt=Ue;if(K!==0&&(X=k),v.bindFramebuffer(B.FRAMEBUFFER,X)&&v.drawBuffers(E,X),v.viewport(at),v.scissor(It),v.setScissorTest(Dt),q){let Et=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,K)}else if(Rt){let Et=O;for(let Ft=0;Ft<E.textures.length;Ft++){let kt=W.get(E.textures[Ft]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ft,kt.__webglTexture,K,Et)}}else if(E!==null&&K!==0){let Et=W.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Et.__webglTexture,K)}$=-1};function Z_(E){let O=W.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=I.textureFormatReadable(E.format),O.__typeReadable=I.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,K,X,q,Rt,Nt,Et=0){if(!(E&&E.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft){v.bindFramebuffer(B.FRAMEBUFFER,Ft);try{let kt=E.textures[Et],pe=kt.format,xe=kt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Et);let Ut=Z_(kt);if(Ut.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-X&&K>=0&&K<=E.height-q&&B.readPixels(O,K,X,q,vt.convert(pe),vt.convert(xe),Rt)}finally{let kt=lt!==null?W.get(lt).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(E,O,K,X,q,Rt,Nt,Et=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Ft=Ft[Nt]),Ft)if(O>=0&&O<=E.width-X&&K>=0&&K<=E.height-q){v.bindFramebuffer(B.FRAMEBUFFER,Ft);let kt=E.textures[Et],pe=kt.format,xe=kt.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Et);let Ut=Z_(kt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ne=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.bufferData(B.PIXEL_PACK_BUFFER,Rt.byteLength,B.STREAM_READ),B.readPixels(O,K,X,q,vt.convert(pe),vt.convert(xe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let ci=lt!==null?W.get(lt).__webglFramebuffer:null;v.bindFramebuffer(B.FRAMEBUFFER,ci);let Xe=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await og(B,Xe,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ne),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Rt),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Ne),B.deleteSync(Xe),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,K=0){let X=Math.pow(2,-K),q=Math.floor(E.image.width*X),Rt=Math.floor(E.image.height*X),Nt=O!==null?O.x:0,Et=O!==null?O.y:0;tt.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,Nt,Et,q,Rt),v.unbindTexture()},this.copyTextureToTexture=function(E,O,K=null,X=null,q=0,Rt=0){let Nt,Et,Ft,kt,pe,xe,Ut,Ne,ci,Xe=E.isCompressedTexture?E.mipmaps[Rt]:E.image;if(K!==null)Nt=K.max.x-K.min.x,Et=K.max.y-K.min.y,Ft=K.isBox3?K.max.z-K.min.z:1,kt=K.min.x,pe=K.min.y,xe=K.isBox3?K.min.z:0;else{let oi=Math.pow(2,-q);Nt=Math.floor(Xe.width*oi),Et=Math.floor(Xe.height*oi),E.isDataArrayTexture?Ft=Xe.depth:E.isData3DTexture?Ft=Math.floor(Xe.depth*oi):Ft=1,kt=0,pe=0,xe=0}X!==null?(Ut=X.x,Ne=X.y,ci=X.z):(Ut=0,Ne=0,ci=0);let ze=vt.convert(O.format),Ii=vt.convert(O.type),Pt;O.isData3DTexture?(tt.setTexture3D(O,0),Pt=B.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(tt.setTexture2DArray(O,0),Pt=B.TEXTURE_2D_ARRAY):(tt.setTexture2D(O,0),Pt=B.TEXTURE_2D),v.activeTexture(B.TEXTURE0),v.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,O.flipY),v.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),v.pixelStorei(B.UNPACK_ALIGNMENT,O.unpackAlignment);let Gi=v.getParameter(B.UNPACK_ROW_LENGTH),Te=v.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=v.getParameter(B.UNPACK_SKIP_PIXELS),Xn=v.getParameter(B.UNPACK_SKIP_ROWS),Ts=v.getParameter(B.UNPACK_SKIP_IMAGES);v.pixelStorei(B.UNPACK_ROW_LENGTH,Xe.width),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Xe.height),v.pixelStorei(B.UNPACK_SKIP_PIXELS,kt),v.pixelStorei(B.UNPACK_SKIP_ROWS,pe),v.pixelStorei(B.UNPACK_SKIP_IMAGES,xe);let Vr=E.isDataArrayTexture||E.isData3DTexture,Oe=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let oi=W.get(E),Rs=W.get(O),We=W.get(oi.__renderTarget),Cs=W.get(Rs.__renderTarget);v.bindFramebuffer(B.READ_FRAMEBUFFER,We.__webglFramebuffer),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cs.__webglFramebuffer);for(let Gr=0;Gr<Ft;Gr++)Vr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(E).__webglTexture,q,xe+Gr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(O).__webglTexture,Rt,ci+Gr)),B.blitFramebuffer(kt,pe,Nt,Et,Ut,Ne,Nt,Et,B.DEPTH_BUFFER_BIT,B.NEAREST);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||W.has(E)){let oi=W.get(E),Rs=W.get(O);v.bindFramebuffer(B.READ_FRAMEBUFFER,L),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let We=0;We<Ft;We++)Vr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,oi.__webglTexture,q,xe+We):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,oi.__webglTexture,q),Oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Rs.__webglTexture,Rt,ci+We):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Rs.__webglTexture,Rt),q!==0?B.blitFramebuffer(kt,pe,Nt,Et,Ut,Ne,Nt,Et,B.COLOR_BUFFER_BIT,B.NEAREST):Oe?B.copyTexSubImage3D(Pt,Rt,Ut,Ne,ci+We,kt,pe,Nt,Et):B.copyTexSubImage2D(Pt,Rt,Ut,Ne,kt,pe,Nt,Et);v.bindFramebuffer(B.READ_FRAMEBUFFER,null),v.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Oe?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Pt,Rt,Ut,Ne,ci,Nt,Et,Ft,ze,Ii,Xe.data):O.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,Rt,Ut,Ne,ci,Nt,Et,Ft,ze,Xe.data):B.texSubImage3D(Pt,Rt,Ut,Ne,ci,Nt,Et,Ft,ze,Ii,Xe):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Rt,Ut,Ne,Nt,Et,ze,Ii,Xe.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Rt,Ut,Ne,Xe.width,Xe.height,ze,Xe.data):B.texSubImage2D(B.TEXTURE_2D,Rt,Ut,Ne,Nt,Et,ze,Ii,Xe);v.pixelStorei(B.UNPACK_ROW_LENGTH,Gi),v.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Te),v.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),v.pixelStorei(B.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(B.UNPACK_SKIP_IMAGES,Ts),Rt===0&&O.generateMipmaps&&B.generateMipmap(Pt),v.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&tt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?tt.setTextureCube(E,0):E.isData3DTexture?tt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?tt.setTexture2DArray(E,0):tt.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){j=0,Z=0,lt=null,v.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),e.unpackColorSpace=be._getUnpackColorSpace()}};var kn=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,pp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,pp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawbroadphase_free(t,0)}castRayAndGetNormal(t,e,i,s,r,o,a,l,h,u,d,f){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,G);let p=c.rawbroadphase_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o,a,l,Ot(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Ot(u),Ot(u)?0:u,!Ot(d),Ot(d)?0:d,_t(f));return p===0?void 0:No.__wrap(p)}finally{ht[dt++]=void 0}}castRay(t,e,i,s,r,o,a,l,h,u,d,f){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,G);let p=c.rawbroadphase_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o,a,l,Ot(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Ot(u),Ot(u)?0:u,!Ot(d),Ot(d)?0:d,_t(f));return p===0?void 0:Ll.__wrap(p)}finally{ht[dt++]=void 0}}castShape(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,ue),A(o,G),A(a,ge);let g=c.rawbroadphase_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l,h,u,d,Ot(f)?Number.MAX_SAFE_INTEGER:f>>>0,!Ot(p),Ot(p)?0:p,!Ot(_),Ot(_)?0:_,_t(b));return g===0?void 0:Ao.__wrap(g)}finally{ht[dt++]=void 0}}collidersWithAabbIntersectingAabb(t,e,i,s,r,o){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,G),c.rawbroadphase_collidersWithAabbIntersectingAabb(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,_t(o))}finally{ht[dt++]=void 0}}intersectionWithShape(t,e,i,s,r,o,a,l,h,u,d){try{let _=c.__wbindgen_add_to_stack_pointer(-16);A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,ue),A(o,ge),c.rawbroadphase_intersectionWithShape(_,this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a,Ot(l)?Number.MAX_SAFE_INTEGER:l>>>0,!Ot(h),Ot(h)?0:h,!Ot(u),Ot(u)?0:u,_t(d));var f=pt().getInt32(_+0,!0),p=pt().getFloat64(_+8,!0);return f===0?void 0:p}finally{c.__wbindgen_add_to_stack_pointer(16),ht[dt++]=void 0}}intersectionsWithPoint(t,e,i,s,r,o,a,l,h,u){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),c.rawbroadphase_intersectionsWithPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,_t(r),o,Ot(a)?Number.MAX_SAFE_INTEGER:a>>>0,!Ot(l),Ot(l)?0:l,!Ot(h),Ot(h)?0:h,_t(u))}finally{ht[dt++]=void 0,ht[dt++]=void 0}}intersectionsWithRay(t,e,i,s,r,o,a,l,h,u,d,f,p){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,G),c.rawbroadphase_intersectionsWithRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o,a,_t(l),h,Ot(u)?Number.MAX_SAFE_INTEGER:u>>>0,!Ot(d),Ot(d)?0:d,!Ot(f),Ot(f)?0:f,_t(p))}finally{ht[dt++]=void 0,ht[dt++]=void 0}}intersectionsWithShape(t,e,i,s,r,o,a,l,h,u,d,f){try{A(t,si),A(e,ye),A(i,Ie),A(s,G),A(r,ue),A(o,ge),c.rawbroadphase_intersectionsWithShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,_t(a),l,Ot(h)?Number.MAX_SAFE_INTEGER:h>>>0,!Ot(u),Ot(u)?0:u,!Ot(d),Ot(d)?0:d,_t(f))}finally{ht[dt++]=void 0,ht[dt++]=void 0}}constructor(){let t=c.rawbroadphase_new();return this.__wbg_ptr=t,pp.register(this,this.__wbg_ptr,this),this}projectPointAndGetFeature(t,e,i,s,r,o,a,l,h){try{A(t,si),A(e,ye),A(i,Ie),A(s,G);let u=c.rawbroadphase_projectPointAndGetFeature(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,Ot(o)?Number.MAX_SAFE_INTEGER:o>>>0,!Ot(a),Ot(a)?0:a,!Ot(l),Ot(l)?0:l,_t(h));return u===0?void 0:Io.__wrap(u)}finally{ht[dt++]=void 0}}projectPoint(t,e,i,s,r,o,a,l,h,u){try{A(t,si),A(e,ye),A(i,Ie),A(s,G);let d=c.rawbroadphase_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,o,Ot(a)?Number.MAX_SAFE_INTEGER:a>>>0,!Ot(l),Ot(l)?0:l,!Ot(h),Ot(h)?0:h,_t(u));return d===0?void 0:Io.__wrap(d)}finally{ht[dt++]=void 0}}};Symbol.dispose&&(kn.prototype[Symbol.dispose]=kn.prototype.free);var yr=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,zg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawccdsolver_free(t,0)}constructor(){let t=c.rawccdsolver_new();return this.__wbg_ptr=t,zg.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(yr.prototype[Symbol.dispose]=yr.prototype.free);var Co=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,kg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcharactercollision_free(t,0)}handle(){return c.rawcharactercollision_handle(this.__wbg_ptr)}constructor(){let t=c.rawcharactercollision_new();return this.__wbg_ptr=t,kg.register(this,this.__wbg_ptr,this),this}toi(){return c.rawcharactercollision_toi(this.__wbg_ptr)}translationDeltaApplied(t){try{c.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}translationDeltaRemaining(t){try{c.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}worldNormal1(t){try{c.rawcharactercollision_worldNormal1(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}worldNormal2(t){try{c.rawcharactercollision_worldNormal2(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}worldWitness1(t){try{c.rawcharactercollision_worldWitness1(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}worldWitness2(t){try{c.rawcharactercollision_worldWitness2(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(Co.prototype[Symbol.dispose]=Co.prototype.free);var Ie=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,_p.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,_p.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcolliderset_free(t,0)}coActiveCollisionTypes(t){return c.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,t)}coActiveEvents(t){return c.rawcolliderset_coActiveEvents(this.__wbg_ptr,t)>>>0}coActiveHooks(t){return c.rawcolliderset_coActiveHooks(this.__wbg_ptr,t)>>>0}coCastCollider(t,e,i,s,r,o,a){A(e,G),A(s,G);let l=c.rawcolliderset_coCastCollider(this.__wbg_ptr,t,e.__wbg_ptr,i,s.__wbg_ptr,r,o,a);return l===0?void 0:Ao.__wrap(l)}coCastRayAndGetNormal(t,e,i,s,r){A(e,G),A(i,G);let o=c.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s,r);return o===0?void 0:Lo.__wrap(o)}coCastRay(t,e,i,s,r){return A(e,G),A(i,G),c.rawcolliderset_coCastRay(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s,r)}coCastShape(t,e,i,s,r,o,a,l,h){A(e,G),A(i,ge),A(s,G),A(r,ue),A(o,G);let u=c.rawcolliderset_coCastShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a,l,h);return u===0?void 0:Fo.__wrap(u)}coCollisionGroups(t){return c.rawcolliderset_coCollisionGroups(this.__wbg_ptr,t)>>>0}coCombineVoxelStates(t,e,i,s,r){c.rawcolliderset_coCombineVoxelStates(this.__wbg_ptr,t,e,i,s,r)}coCompoundFlags(t){let e=c.rawcolliderset_coCompoundFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coContactCollider(t,e,i){let s=c.rawcolliderset_coContactCollider(this.__wbg_ptr,t,e,i);return s===0?void 0:vr.__wrap(s)}coContactForceEventThreshold(t){return c.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,t)}coContactShape(t,e,i,s,r){A(e,ge),A(i,G),A(s,ue);let o=c.rawcolliderset_coContactShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r);return o===0?void 0:vr.__wrap(o)}coContactSkin(t){return c.rawcolliderset_coContactSkin(this.__wbg_ptr,t)}coContainsPoint(t,e){return A(e,G),c.rawcolliderset_coContainsPoint(this.__wbg_ptr,t,e.__wbg_ptr)!==0}coDensity(t){return c.rawcolliderset_coDensity(this.__wbg_ptr,t)}coFrictionCombineRule(t){return c.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,t)>>>0}coFriction(t){return c.rawcolliderset_coFriction(this.__wbg_ptr,t)}coHalfExtents(t,e){try{return c.rawcolliderset_coHalfExtents(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}coHalfHeight(t){let e=c.rawcolliderset_coHalfHeight(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHalfspaceNormal(t,e){try{return c.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}coHeightFieldFlags(t){let e=c.rawcolliderset_coHeightFieldFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldHeights(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coHeightfieldHeights(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getInt32(s+4,!0);let r;return e!==0&&(r=ss(e,i).slice(),c.__wbindgen_export2(e,4*i,4)),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(t){let e=c.rawcolliderset_coHeightfieldNCols(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldNRows(t){let e=c.rawcolliderset_coHeightfieldNRows(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coHeightfieldScale(t,e){try{return c.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}coIndices(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coIndices(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getInt32(s+4,!0);let r;return e!==0&&(r=fi(e,i).slice(),c.__wbindgen_export2(e,4*i,4)),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}coIntersectsRay(t,e,i,s){return A(e,G),A(i,G),c.rawcolliderset_coIntersectsRay(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s)!==0}coIntersectsShape(t,e,i,s){return A(e,ge),A(i,G),A(s,ue),c.rawcolliderset_coIntersectsShape(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr)!==0}coIsDeformable(t){return c.rawcolliderset_coIsDeformable(this.__wbg_ptr,t)!==0}coIsEnabled(t){return c.rawcolliderset_coIsEnabled(this.__wbg_ptr,t)!==0}coIsSensor(t){return c.rawcolliderset_coIsSensor(this.__wbg_ptr,t)!==0}coMass(t){return c.rawcolliderset_coMass(this.__wbg_ptr,t)}coParent(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coParent(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}coPolylineFlags(t){let e=c.rawcolliderset_coPolylineFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coProjectPoint(t,e,i){A(e,G);let s=c.rawcolliderset_coProjectPoint(this.__wbg_ptr,t,e.__wbg_ptr,i);return Do.__wrap(s)}coPropagateVoxelChange(t,e,i,s,r,o,a,l){c.rawcolliderset_coPropagateVoxelChange(this.__wbg_ptr,t,e,i,s,r,o,a,l)}coRadius(t){let e=c.rawcolliderset_coRadius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coRestitutionCombineRule(t){return c.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,t)>>>0}coRestitution(t){return c.rawcolliderset_coRestitution(this.__wbg_ptr,t)}coRotationWrtParent(t,e){try{return c.rawcolliderset_coRotationWrtParent(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}coRotation(t,e){try{c.rawcolliderset_coRotation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}coRoundRadius(t){let e=c.rawcolliderset_coRoundRadius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coSetActiveCollisionTypes(t,e){c.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,t,e)}coSetActiveEvents(t,e){c.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,t,e)}coSetActiveHooks(t,e){c.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,t,e)}coSetCollisionGroups(t,e){c.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,t,e)}coSetContactForceEventThreshold(t,e){c.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,t,e)}coSetContactSkin(t,e){c.rawcolliderset_coSetContactSkin(this.__wbg_ptr,t,e)}coSetDensity(t,e){c.rawcolliderset_coSetDensity(this.__wbg_ptr,t,e)}coSetEnabled(t,e){c.rawcolliderset_coSetEnabled(this.__wbg_ptr,t,e)}coSetFrictionCombineRule(t,e){c.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,t,e)}coSetFriction(t,e){c.rawcolliderset_coSetFriction(this.__wbg_ptr,t,e)}coSetHalfExtents(t,e){A(e,G),c.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,t,e.__wbg_ptr)}coSetHalfHeight(t,e){c.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,t,e)}coSetMassProperties(t,e,i,s,r){A(i,G),A(s,G),A(r,ue),c.rawcolliderset_coSetMassProperties(this.__wbg_ptr,t,e,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr)}coSetMass(t,e){c.rawcolliderset_coSetMass(this.__wbg_ptr,t,e)}coSetRadius(t,e){c.rawcolliderset_coSetRadius(this.__wbg_ptr,t,e)}coSetRestitutionCombineRule(t,e){c.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,t,e)}coSetRestitution(t,e){c.rawcolliderset_coSetRestitution(this.__wbg_ptr,t,e)}coSetRotationWrtParent(t,e,i,s,r){c.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,t,e,i,s,r)}coSetRotation(t,e,i,s,r){c.rawcolliderset_coSetRotation(this.__wbg_ptr,t,e,i,s,r)}coSetRoundRadius(t,e){c.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,t,e)}coSetSensor(t,e){c.rawcolliderset_coSetSensor(this.__wbg_ptr,t,e)}coSetShape(t,e){A(e,ge),c.rawcolliderset_coSetShape(this.__wbg_ptr,t,e.__wbg_ptr)}coSetSolverGroups(t,e){c.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,t,e)}coSetTranslationWrtParent(t,e,i,s){c.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,t,e,i,s)}coSetTranslation(t,e,i,s){c.rawcolliderset_coSetTranslation(this.__wbg_ptr,t,e,i,s)}coSetVoxel(t,e,i,s,r){c.rawcolliderset_coSetVoxel(this.__wbg_ptr,t,e,i,s,r)}coShapeType(t){return c.rawcolliderset_coShapeType(this.__wbg_ptr,t)}coShape(t){let e=c.rawcolliderset_coShape(this.__wbg_ptr,t);return ge.__wrap(e)}coSoftBody(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coSoftBody(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}coSolverGroups(t){return c.rawcolliderset_coSolverGroups(this.__wbg_ptr,t)>>>0}coTranslationWrtParent(t,e){try{return c.rawcolliderset_coTranslationWrtParent(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}coTranslation(t,e){try{c.rawcolliderset_coTranslation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}coTriMeshFlags(t){let e=c.rawcolliderset_coTriMeshFlags(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}coVertices(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coVertices(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getInt32(s+4,!0);let r;return e!==0&&(r=ss(e,i).slice(),c.__wbindgen_export2(e,4*i,4)),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}coVolume(t){return c.rawcolliderset_coVolume(this.__wbg_ptr,t)}coVoxelData(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawcolliderset_coVoxelData(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getInt32(s+4,!0);let r;return e!==0&&(r=_0(e,i).slice(),c.__wbindgen_export2(e,4*i,4)),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}coVoxelSize(t){let e=c.rawcolliderset_coVoxelSize(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}contains(t){return c.rawcolliderset_contains(this.__wbg_ptr,t)!==0}createCollider(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g,m,x,C,y,T,S,R,w,M){try{let U=c.__wbindgen_add_to_stack_pointer(-16);A(e,ge),A(i,G),A(s,ue),A(a,G),A(l,G),A(h,ue),A(M,ye),c.rawcolliderset_createCollider(U,this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,o,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u,d,f,p,_,b,g,m,x,C,y,T,S,R,w,M.__wbg_ptr);var P=pt().getInt32(U+0,!0),N=pt().getFloat64(U+8,!0);return P===0?void 0:N}finally{c.__wbindgen_add_to_stack_pointer(16)}}createDeformableCollider(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g,m,x,C,y,T,S,R,w,M,P,N,U,k){try{let j=c.__wbindgen_add_to_stack_pointer(-16);A(e,ge),A(i,G),A(s,ue),A(a,G),A(l,G),A(h,ue);let Z=$e(w,c.__wbindgen_export3),lt=Zt;A(U,ye),A(k,fn),c.rawcolliderset_createDeformableCollider(j,this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,o,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u,d,f,p,_,b,g,m,x,C,y,T,S,R,Z,lt,M,P,N,U.__wbg_ptr,k.__wbg_ptr);var L=pt().getInt32(j+0,!0),V=pt().getFloat64(j+8,!0);return L===0?void 0:V}finally{c.__wbindgen_add_to_stack_pointer(16)}}forEachColliderHandle(t){try{c.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}isHandleValid(t){return c.rawcolliderset_isHandleValid(this.__wbg_ptr,t)!==0}len(){return c.rawcolliderset_len(this.__wbg_ptr)>>>0}constructor(){let t=c.rawcolliderset_new();return this.__wbg_ptr=t,_p.register(this,this.__wbg_ptr,this),this}remove(t,e,i,s,r){A(e,ji),A(i,ye),A(s,fn),c.rawcolliderset_remove(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r)}};Symbol.dispose&&(Ie.prototype[Symbol.dispose]=Ie.prototype.free);var Ao=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Hg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Hg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcollidershapecasthit_free(t,0)}colliderHandle(){return c.rawcollidershapecasthit_colliderHandle(this.__wbg_ptr)}getComponents(t){try{c.rawcollidershapecasthit_getComponents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(Ao.prototype[Symbol.dispose]=Ao.prototype.free);var Ml=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Vg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Vg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcontactforceevent_free(t,0)}collider1(){return c.rawcontactforceevent_collider1(this.__wbg_ptr)}collider2(){return c.rawcontactforceevent_collider2(this.__wbg_ptr)}max_force_direction(t){try{c.rawcontactforceevent_max_force_direction(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}max_force_magnitude(){return c.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr)}total_force(t){try{c.rawcontactforceevent_total_force(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}total_force_magnitude(){return c.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}};Symbol.dispose&&(Ml.prototype[Symbol.dispose]=Ml.prototype.free);var El=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Gg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Gg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcontactmanifold_free(t,0)}contact_dist(t){return c.rawcontactmanifold_contact_dist(this.__wbg_ptr,t)}contact_fid1(t){return c.rawcontactmanifold_contact_fid1(this.__wbg_ptr,t)>>>0}contact_fid2(t){return c.rawcontactmanifold_contact_fid2(this.__wbg_ptr,t)>>>0}contact_impulse(t){return c.rawcontactmanifold_contact_impulse(this.__wbg_ptr,t)}contact_local_p1(t,e){try{return c.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}contact_local_p2(t,e){try{return c.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}contact_tangent_impulse_x(t){return c.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,t)}contact_tangent_impulse_y(t){return c.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,t)}friction(){return c.rawcontactmanifold_friction(this.__wbg_ptr)}local_n1(t){try{c.rawcontactmanifold_local_n1(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}local_n2(t){try{c.rawcontactmanifold_local_n2(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}normal(t){try{c.rawcontactmanifold_normal(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}num_contacts(){return c.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}num_solver_contacts(){return c.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}restitution(){return c.rawcontactmanifold_restitution(this.__wbg_ptr)}solver_contact_dist(t){return c.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,t)}solver_contact_point(t,e,i){try{return A(t,ye),c.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,t.__wbg_ptr,e,_t(i))!==0}finally{ht[dt++]=void 0}}solver_contact_tangent_velocity(t,e){try{c.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}subshape1(){return c.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return c.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}};Symbol.dispose&&(El.prototype[Symbol.dispose]=El.prototype.free);var Tl=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Wg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Wg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawcontactpair_free(t,0)}collider1(){return c.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return c.rawcontactpair_collider2(this.__wbg_ptr)}contactManifold(t){let e=c.rawcontactpair_contactManifold(this.__wbg_ptr,t);return e===0?void 0:El.__wrap(e)}numContactManifolds(){return c.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}};Symbol.dispose&&(Tl.prototype[Symbol.dispose]=Tl.prototype.free);var Rl=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Xg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Xg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawconvexmeshdata_free(t,0)}get indices(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.__wbg_get_rawconvexmeshdata_indices(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}get vertices(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.__wbg_get_rawconvexmeshdata_vertices(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=ss(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}set indices(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.__wbg_set_rawconvexmeshdata_indices(this.__wbg_ptr,e,i)}set vertices(t){let e=ii(t,c.__wbindgen_export3),i=Zt;c.__wbg_set_rawconvexmeshdata_vertices(this.__wbg_ptr,e,i)}};Symbol.dispose&&(Rl.prototype[Symbol.dispose]=Rl.prototype.free);var Cl=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,qg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawdebugrenderpipeline_free(t,0)}colors(){return xu(c.rawdebugrenderpipeline_colors(this.__wbg_ptr))}constructor(){let t=c.rawdebugrenderpipeline_new();return this.__wbg_ptr=t,qg.register(this,this.__wbg_ptr,this),this}render(t,e,i,s,r,o,a,l){try{A(t,ye),A(e,Ie),A(i,fn),A(s,Yi),A(r,$i),A(o,si),c.rawdebugrenderpipeline_render(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a,_t(l))}finally{ht[dt++]=void 0}}vertices(){return xu(c.rawdebugrenderpipeline_vertices(this.__wbg_ptr))}};Symbol.dispose&&(Cl.prototype[Symbol.dispose]=Cl.prototype.free);var Al=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Yg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Yg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawdeserializedworld_free(t,0)}takeBodies(){let t=c.rawdeserializedworld_takeBodies(this.__wbg_ptr);return t===0?void 0:ye.__wrap(t)}takeBroadPhase(){let t=c.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return t===0?void 0:kn.__wrap(t)}takeColliders(){let t=c.rawdeserializedworld_takeColliders(this.__wbg_ptr);return t===0?void 0:Ie.__wrap(t)}takeGravity(){let t=c.rawdeserializedworld_takeGravity(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}takeImpulseJoints(){let t=c.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return t===0?void 0:Yi.__wrap(t)}takeIntegrationParameters(){let t=c.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return t===0?void 0:bs.__wrap(t)}takeIslandManager(){let t=c.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return t===0?void 0:ji.__wrap(t)}takeMultibodyJoints(){let t=c.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return t===0?void 0:$i.__wrap(t)}takeNarrowPhase(){let t=c.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return t===0?void 0:si.__wrap(t)}takeSoftBodies(){let t=c.rawdeserializedworld_takeSoftBodies(this.__wbg_ptr);return t===0?void 0:fn.__wrap(t)}};Symbol.dispose&&(Al.prototype[Symbol.dispose]=Al.prototype.free);var Pl=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,jg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawdynamicraycastvehiclecontroller_free(t,0)}add_wheel(t,e,i,s,r){A(t,G),A(e,G),A(i,G),c.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s,r)}chassis(){return c.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}current_vehicle_speed(){return c.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}index_forward_axis(){return c.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}index_up_axis(){return c.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}constructor(t){let e=c.rawdynamicraycastvehiclecontroller_new(t);return this.__wbg_ptr=e,jg.register(this,this.__wbg_ptr,this),this}num_wheels(){return c.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}set_index_forward_axis(t){c.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,t)}set_index_up_axis(t){c.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,t)}set_wheel_axle_cs(t,e){A(e,G),c.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_brake(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,t,e)}set_wheel_chassis_connection_point_cs(t,e){A(e,G),c.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_direction_cs(t,e){A(e,G),c.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,t,e.__wbg_ptr)}set_wheel_engine_force(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,t,e)}set_wheel_friction_slip(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,t,e)}set_wheel_max_suspension_force(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,t,e)}set_wheel_max_suspension_travel(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,t,e)}set_wheel_radius(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,t,e)}set_wheel_side_friction_stiffness(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,t,e)}set_wheel_steering(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,t,e)}set_wheel_suspension_compression(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,t,e)}set_wheel_suspension_relaxation(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,t,e)}set_wheel_suspension_rest_length(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,t,e)}set_wheel_suspension_stiffness(t,e){c.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,t,e)}update_vehicle(t,e,i,s,r,o,a,l){try{A(e,kn),A(i,si),A(s,ye),A(r,Ie),c.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o,Ot(a)?Number.MAX_SAFE_INTEGER:a>>>0,_t(l))}finally{ht[dt++]=void 0}}wheel_axle_cs(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_brake(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_brake(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_chassis_connection_point_cs(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_contact_normal_ws(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_contact_point_ws(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_direction_cs(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_engine_force(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_engine_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_forward_impulse(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_friction_slip(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_friction_slip(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_ground_object(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawdynamicraycastvehiclecontroller_wheel_ground_object(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(t,e){try{return c.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,t,_t(e))!==0}finally{ht[dt++]=void 0}}wheel_is_in_contact(t){return c.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,t)!==0}wheel_max_suspension_force(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_max_suspension_travel(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_radius(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_radius(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_rotation(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_rotation(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_side_friction_stiffness(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_side_impulse(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_side_impulse(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_steering(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_steering(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_compression(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_force(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_force(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_length(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_length(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_relaxation(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_rest_length(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}wheel_suspension_stiffness(t){let e=c.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}};Symbol.dispose&&(Pl.prototype[Symbol.dispose]=Pl.prototype.free);var Po=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,$g.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_raweventqueue_free(t,0)}clear(){c.raweventqueue_clear(this.__wbg_ptr)}drainCollisionEvents(t){try{c.raweventqueue_drainCollisionEvents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}drainContactForceEvents(t){try{c.raweventqueue_drainContactForceEvents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}drainSoftBodyTearEvents(t){try{c.raweventqueue_drainSoftBodyTearEvents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}constructor(t){let e=c.raweventqueue_new(t);return this.__wbg_ptr=e,$g.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(Po.prototype[Symbol.dispose]=Po.prototype.free),Object.freeze({Vertex:0,0:"Vertex",Edge:1,1:"Edge",Face:2,2:"Face",Unknown:3,3:"Unknown"});var nn=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Jg.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Jg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawgenericjoint_free(t,0)}static fixed(t,e,i,s){A(t,G),A(e,ue),A(i,G),A(s,ue);let r=c.rawgenericjoint_fixed(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr);return n.__wrap(r)}static generic(t,e,i,s){A(t,G),A(e,G),A(i,G);let r=c.rawgenericjoint_generic(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s);return r===0?void 0:n.__wrap(r)}static prismatic(t,e,i,s,r,o){A(t,G),A(e,G),A(i,G);let a=c.rawgenericjoint_prismatic(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s,r,o);return a===0?void 0:n.__wrap(a)}static revoluteWithAxes(t,e,i,s){A(t,G),A(e,G),A(i,G),A(s,G);let r=c.rawgenericjoint_revoluteWithAxes(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr);return r===0?void 0:n.__wrap(r)}static revolute(t,e,i){A(t,G),A(e,G),A(i,G);let s=c.rawgenericjoint_revolute(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr);return s===0?void 0:n.__wrap(s)}static rope(t,e,i){A(e,G),A(i,G);let s=c.rawgenericjoint_rope(t,e.__wbg_ptr,i.__wbg_ptr);return n.__wrap(s)}static spherical(t,e){A(t,G),A(e,G);let i=c.rawgenericjoint_spherical(t.__wbg_ptr,e.__wbg_ptr);return n.__wrap(i)}static spring(t,e,i,s,r){A(s,G),A(r,G);let o=c.rawgenericjoint_spring(t,e,i,s.__wbg_ptr,r.__wbg_ptr);return n.__wrap(o)}};Symbol.dispose&&(nn.prototype[Symbol.dispose]=nn.prototype.free);var Yi=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,mp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,mp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawimpulsejointset_free(t,0)}contains(t){return c.rawimpulsejointset_contains(this.__wbg_ptr,t)!==0}createJoint(t,e,i,s){return A(t,nn),c.rawimpulsejointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,i,s)}forEachJointAttachedToRigidBody(t,e){try{c.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}forEachJointHandle(t){try{c.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}jointAnchor1(t,e){try{c.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}jointAnchor2(t,e){try{c.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}jointBodyHandle1(t){return c.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,t)}jointBodyHandle2(t){return c.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,t)}jointConfigureMotorModel(t,e,i){c.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,t,e,i)}jointConfigureMotorPosition(t,e,i,s,r){c.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,t,e,i,s,r)}jointConfigureMotorVelocity(t,e,i,s){c.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,t,e,i,s)}jointConfigureMotor(t,e,i,s,r,o){c.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,t,e,i,s,r,o)}jointContactsEnabled(t){return c.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointFrameX1(t,e){try{c.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}jointFrameX2(t,e){try{c.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}jointLimitsEnabled(t,e){return c.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMax(t,e){return c.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointLimitsMin(t,e){return c.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointSetAnchor1(t,e){A(e,G),c.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetAnchor2(t,e){A(e,G),c.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetContactsEnabled(t,e){c.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointSetFrameX1(t,e){A(e,ue),c.rawimpulsejointset_jointSetFrameX1(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetFrameX2(t,e){A(e,ue),c.rawimpulsejointset_jointSetFrameX2(this.__wbg_ptr,t,e.__wbg_ptr)}jointSetLimits(t,e,i,s){c.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,t,e,i,s)}jointSetLocalFrame1(t,e,i){A(e,G),A(i,ue),c.rawimpulsejointset_jointSetLocalFrame1(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr)}jointSetLocalFrame2(t,e,i){A(e,G),A(i,ue),c.rawimpulsejointset_jointSetLocalFrame2(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr)}jointSetMotorMaxForce(t,e,i){c.rawimpulsejointset_jointSetMotorMaxForce(this.__wbg_ptr,t,e,i)}jointType(t){return c.rawimpulsejointset_jointType(this.__wbg_ptr,t)}len(){return c.rawimpulsejointset_len(this.__wbg_ptr)>>>0}constructor(){let t=c.rawimpulsejointset_new();return this.__wbg_ptr=t,mp.register(this,this.__wbg_ptr,this),this}remove(t,e){c.rawimpulsejointset_remove(this.__wbg_ptr,t,e)}};Symbol.dispose&&(Yi.prototype[Symbol.dispose]=Yi.prototype.free);var bs=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,gp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,gp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawintegrationparameters_free(t,0)}get contact_erp(){return c.rawintegrationparameters_contact_erp(this.__wbg_ptr)}get dt(){return c.rawintegrationparameters_dt(this.__wbg_ptr)}get lengthUnit(){return c.rawintegrationparameters_lengthUnit(this.__wbg_ptr)}get maxCcdSubsteps(){return c.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr)>>>0}constructor(){let t=c.rawintegrationparameters_new();return this.__wbg_ptr=t,gp.register(this,this.__wbg_ptr,this),this}get normalizedAllowedLinearError(){return c.rawintegrationparameters_normalizedAllowedLinearError(this.__wbg_ptr)}get normalizedPredictionDistance(){return c.rawintegrationparameters_normalizedPredictionDistance(this.__wbg_ptr)}get numInternalPgsIterations(){return c.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr)>>>0}get numSolverIterations(){return c.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}set contact_natural_frequency(t){c.rawintegrationparameters_set_contact_natural_frequency(this.__wbg_ptr,t)}set dt(t){c.rawintegrationparameters_set_dt(this.__wbg_ptr,t)}set lengthUnit(t){c.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr,t)}set maxCcdSubsteps(t){c.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr,t)}set normalizedAllowedLinearError(t){c.rawintegrationparameters_set_normalizedAllowedLinearError(this.__wbg_ptr,t)}set normalizedPredictionDistance(t){c.rawintegrationparameters_set_normalizedPredictionDistance(this.__wbg_ptr,t)}set numInternalPgsIterations(t){c.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr,t)}set numSolverIterations(t){c.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,t)}set softBodiesContactStiffening(t){c.rawintegrationparameters_set_softBodiesContactStiffening(this.__wbg_ptr,t)}set softBodiesFemLinearTolerance(t){c.rawintegrationparameters_set_softBodiesFemLinearTolerance(this.__wbg_ptr,t)}set softBodiesFemMaxDenseDofs(t){c.rawintegrationparameters_set_softBodiesFemMaxDenseDofs(this.__wbg_ptr,t)}set softBodiesFemMaxLinearIterations(t){c.rawintegrationparameters_set_softBodiesFemMaxLinearIterations(this.__wbg_ptr,t)}set softBodiesMaxExtraSubsteps(t){c.rawintegrationparameters_set_softBodiesMaxExtraSubsteps(this.__wbg_ptr,t)}set softBodiesRecovery(t){A(t,Ys),c.rawintegrationparameters_set_softBodiesRecovery(this.__wbg_ptr,t.__wbg_ptr)}set softBodiesResweepStrain(t){c.rawintegrationparameters_set_softBodiesResweepStrain(this.__wbg_ptr,t)}get softBodiesContactStiffening(){return c.rawintegrationparameters_softBodiesContactStiffening(this.__wbg_ptr)}get softBodiesFemLinearTolerance(){return c.rawintegrationparameters_softBodiesFemLinearTolerance(this.__wbg_ptr)}get softBodiesFemMaxDenseDofs(){return c.rawintegrationparameters_softBodiesFemMaxDenseDofs(this.__wbg_ptr)>>>0}get softBodiesFemMaxLinearIterations(){return c.rawintegrationparameters_softBodiesFemMaxLinearIterations(this.__wbg_ptr)>>>0}get softBodiesMaxExtraSubsteps(){return c.rawintegrationparameters_softBodiesMaxExtraSubsteps(this.__wbg_ptr)>>>0}get softBodiesRecovery(){let t=c.rawintegrationparameters_softBodiesRecovery(this.__wbg_ptr);return Ys.__wrap(t)}get softBodiesResweepStrain(){return c.rawintegrationparameters_softBodiesResweepStrain(this.__wbg_ptr)}};Symbol.dispose&&(bs.prototype[Symbol.dispose]=bs.prototype.free);var ji=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,wp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,wp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawislandmanager_free(t,0)}forEachActiveRigidBodyHandle(t){try{c.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}constructor(){let t=c.rawislandmanager_new();return this.__wbg_ptr=t,wp.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(ji.prototype[Symbol.dispose]=ji.prototype.free);var hd=Object.freeze({LinX:0,0:"LinX",LinY:1,1:"LinY",LinZ:2,2:"LinZ",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"}),Bn=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Il=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Zg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawkinematiccharactercontroller_free(t,0)}autostepEnabled(){return c.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}autostepIncludesDynamicBodies(){let t=c.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return t===16777215?void 0:t!==0}autostepMaxHeight(){let t=c.rawkinematiccharactercontroller_autostepMaxHeight(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}autostepMinWidth(){let t=c.rawkinematiccharactercontroller_autostepMinWidth(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}computeColliderMovement(t,e,i,s,r,o,a,l,h,u,d,f){try{A(e,kn),A(i,si),A(s,ye),A(r,Ie),A(a,G),c.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o,a.__wbg_ptr,l,Ot(h)?Number.MAX_SAFE_INTEGER:Math.fround(h),u,Ot(d)?Number.MAX_SAFE_INTEGER:d>>>0,_t(f))}finally{ht[dt++]=void 0}}computedCollision(t,e){return A(e,Co),c.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,t,e.__wbg_ptr)!==0}computedGrounded(){return c.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}computedMovement(t){try{c.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}disableAutostep(){c.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}disableSnapToGround(){c.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}enableAutostep(t,e,i){c.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,t,e,i)}enableSnapToGround(t){c.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,t)}maxSlopeClimbAngle(){return c.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}minSlopeSlideAngle(){return c.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}constructor(t){let e=c.rawkinematiccharactercontroller_new(t);return this.__wbg_ptr=e,Zg.register(this,this.__wbg_ptr,this),this}normalNudgeFactor(){return c.rawkinematiccharactercontroller_normalNudgeFactor(this.__wbg_ptr)}numComputedCollisions(){return c.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}offset(){return c.rawkinematiccharactercontroller_offset(this.__wbg_ptr)}setMaxSlopeClimbAngle(t){c.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,t)}setMinSlopeSlideAngle(t){c.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,t)}setNormalNudgeFactor(t){c.rawkinematiccharactercontroller_setNormalNudgeFactor(this.__wbg_ptr,t)}setOffset(t){c.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,t)}setSlideEnabled(t){c.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,t)}setUp(t){A(t,G),c.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,t.__wbg_ptr)}slideEnabled(){return c.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}snapToGroundDistance(){let t=c.rawkinematiccharactercontroller_snapToGroundDistance(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}snapToGroundEnabled(){return c.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}up(){let t=c.rawkinematiccharactercontroller_up(this.__wbg_ptr);return G.__wrap(t)}};Symbol.dispose&&(Il.prototype[Symbol.dispose]=Il.prototype.free),Object.freeze({AccelerationBased:0,0:"AccelerationBased",ForceBased:1,1:"ForceBased"});var $i=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,bp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,bp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawmultibodyjointset_free(t,0)}contains(t){return c.rawmultibodyjointset_contains(this.__wbg_ptr,t)!==0}createJoint(t,e,i,s){return A(t,nn),c.rawmultibodyjointset_createJoint(this.__wbg_ptr,t.__wbg_ptr,e,i,s)}forEachJointAttachedToRigidBody(t,e){try{c.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}forEachJointHandle(t){try{c.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}jointAnchor1(t){let e=c.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,t);return G.__wrap(e)}jointAnchor2(t){let e=c.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,t);return G.__wrap(e)}jointContactsEnabled(t){return c.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,t)!==0}jointFrameX1(t){let e=c.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,t);return ue.__wrap(e)}jointFrameX2(t){let e=c.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,t);return ue.__wrap(e)}jointLimitsEnabled(t,e){return c.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,t,e)!==0}jointLimitsMax(t,e){return c.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,t,e)}jointLimitsMin(t,e){return c.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,t,e)}jointSetContactsEnabled(t,e){c.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,t,e)}jointType(t){return c.rawmultibodyjointset_jointType(this.__wbg_ptr,t)}constructor(){let t=c.rawmultibodyjointset_new();return this.__wbg_ptr=t,bp.register(this,this.__wbg_ptr,this),this}remove(t,e){c.rawmultibodyjointset_remove(this.__wbg_ptr,t,e)}};Symbol.dispose&&($i.prototype[Symbol.dispose]=$i.prototype.free);var si=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,yp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,yp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawnarrowphase_free(t,0)}contact_pair(t,e){let i=c.rawnarrowphase_contact_pair(this.__wbg_ptr,t,e);return i===0?void 0:Tl.__wrap(i)}contact_pairs_with(t,e){c.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,t,ei(e))}intersection_pair(t,e){return c.rawnarrowphase_intersection_pair(this.__wbg_ptr,t,e)!==0}intersection_pairs_with(t,e){c.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,t,ei(e))}constructor(){let t=c.rawnarrowphase_new();return this.__wbg_ptr=t,yp.register(this,this.__wbg_ptr,this),this}};Symbol.dispose&&(si.prototype[Symbol.dispose]=si.prototype.free);var Dl=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Kg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawphysicspipeline_free(t,0)}is_profiler_enabled(){return c.rawphysicspipeline_is_profiler_enabled(this.__wbg_ptr)!==0}constructor(){let t=c.rawphysicspipeline_new();return this.__wbg_ptr=t,Kg.register(this,this.__wbg_ptr,this),this}set_profiler_enabled(t){c.rawphysicspipeline_set_profiler_enabled(this.__wbg_ptr,t)}stepWithEvents(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b){A(t,G),A(e,bs),A(i,ji),A(s,kn),A(r,si),A(o,ye),A(a,Ie),A(l,fn),A(h,Yi),A(u,$i),A(d,yr),A(f,Po),c.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,d.__wbg_ptr,f.__wbg_ptr,ei(p),ei(_),ei(b))}step(t,e,i,s,r,o,a,l,h,u,d){A(t,G),A(e,bs),A(i,ji),A(s,kn),A(r,si),A(o,ye),A(a,Ie),A(l,fn),A(h,Yi),A(u,$i),A(d,yr),c.rawphysicspipeline_step(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,d.__wbg_ptr)}timing_broad_phase(){return c.rawphysicspipeline_timing_broad_phase(this.__wbg_ptr)}timing_ccd(){return c.rawphysicspipeline_timing_ccd(this.__wbg_ptr)}timing_ccd_broad_phase(){return c.rawphysicspipeline_timing_ccd_broad_phase(this.__wbg_ptr)}timing_ccd_narrow_phase(){return c.rawphysicspipeline_timing_ccd_narrow_phase(this.__wbg_ptr)}timing_ccd_solver(){return c.rawphysicspipeline_timing_ccd_solver(this.__wbg_ptr)}timing_ccd_toi_computation(){return c.rawphysicspipeline_timing_ccd_toi_computation(this.__wbg_ptr)}timing_collision_detection(){return c.rawphysicspipeline_timing_collision_detection(this.__wbg_ptr)}timing_island_construction(){return c.rawphysicspipeline_timing_island_construction(this.__wbg_ptr)}timing_narrow_phase(){return c.rawphysicspipeline_timing_narrow_phase(this.__wbg_ptr)}timing_solver(){return c.rawphysicspipeline_timing_solver(this.__wbg_ptr)}timing_step(){return c.rawphysicspipeline_timing_step(this.__wbg_ptr)}timing_user_changes(){return c.rawphysicspipeline_timing_user_changes(this.__wbg_ptr)}timing_velocity_assembly(){return c.rawphysicspipeline_timing_velocity_assembly(this.__wbg_ptr)}timing_velocity_resolution(){return c.rawphysicspipeline_timing_velocity_resolution(this.__wbg_ptr)}timing_velocity_update(){return c.rawphysicspipeline_timing_velocity_update(this.__wbg_ptr)}timing_velocity_writeback(){return c.rawphysicspipeline_timing_velocity_writeback(this.__wbg_ptr)}};Symbol.dispose&&(Dl.prototype[Symbol.dispose]=Dl.prototype.free);var Nl=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Qg.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawpidcontroller_free(t,0)}angular_correction(t,e,i,s,r,o){try{A(e,ye),A(s,ue),A(r,G),c.rawpidcontroller_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,i,s.__wbg_ptr,r.__wbg_ptr,_t(o))}finally{ht[dt++]=void 0}}apply_angular_correction(t,e,i,s,r){A(e,ye),A(s,ue),A(r,G),c.rawpidcontroller_apply_angular_correction(this.__wbg_ptr,t,e.__wbg_ptr,i,s.__wbg_ptr,r.__wbg_ptr)}apply_linear_correction(t,e,i,s,r){A(e,ye),A(s,G),A(r,G),c.rawpidcontroller_apply_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,i,s.__wbg_ptr,r.__wbg_ptr)}linear_correction(t,e,i,s,r,o){try{A(e,ye),A(s,G),A(r,G),c.rawpidcontroller_linear_correction(this.__wbg_ptr,t,e.__wbg_ptr,i,s.__wbg_ptr,r.__wbg_ptr,_t(o))}finally{ht[dt++]=void 0}}constructor(t,e,i,s){let r=c.rawpidcontroller_new(t,e,i,s);return this.__wbg_ptr=r,Qg.register(this,this.__wbg_ptr,this),this}reset_integrals(){c.rawpidcontroller_reset_integrals(this.__wbg_ptr)}set_axes_mask(t){c.rawpidcontroller_set_axes_mask(this.__wbg_ptr,t)}set_kd(t,e){c.rawpidcontroller_set_kd(this.__wbg_ptr,t,e)}set_ki(t,e){c.rawpidcontroller_set_ki(this.__wbg_ptr,t,e)}set_kp(t,e){c.rawpidcontroller_set_kp(this.__wbg_ptr,t,e)}};Symbol.dispose&&(Nl.prototype[Symbol.dispose]=Nl.prototype.free);var Io=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,t0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,t0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawpointcolliderprojection_free(t,0)}colliderHandle(){return c.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}featureId(){let t=c.rawpointcolliderprojection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return c.rawpointcolliderprojection_featureType(this.__wbg_ptr)}isInside(){return c.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}point(t){try{c.rawpointcolliderprojection_point(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(Io.prototype[Symbol.dispose]=Io.prototype.free);var Do=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,e0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,e0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawpointprojection_free(t,0)}isInside(){return c.rawpointprojection_isInside(this.__wbg_ptr)!==0}point(t){try{c.rawpointprojection_point(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(Do.prototype[Symbol.dispose]=Do.prototype.free);var Ll=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,i0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,i0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawraycolliderhit_free(t,0)}colliderHandle(){return c.rawraycolliderhit_colliderHandle(this.__wbg_ptr)}timeOfImpact(){return c.rawraycolliderhit_timeOfImpact(this.__wbg_ptr)}};Symbol.dispose&&(Ll.prototype[Symbol.dispose]=Ll.prototype.free);var No=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,n0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,n0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawraycolliderintersection_free(t,0)}colliderHandle(){return c.rawraycolliderintersection_colliderHandle(this.__wbg_ptr)}featureId(){let t=c.rawraycolliderintersection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return c.rawraycolliderintersection_featureType(this.__wbg_ptr)}normal(t){try{c.rawraycolliderintersection_normal(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}time_of_impact(){return c.rawraycolliderintersection_time_of_impact(this.__wbg_ptr)}};Symbol.dispose&&(No.prototype[Symbol.dispose]=No.prototype.free);var Lo=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,s0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,s0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawrayintersection_free(t,0)}featureId(){let t=c.rawrayintersection_featureId(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}featureType(){return c.rawrayintersection_featureType(this.__wbg_ptr)}normal(t){try{c.rawrayintersection_normal(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}time_of_impact(){return c.rawrayintersection_time_of_impact(this.__wbg_ptr)}};Symbol.dispose&&(Lo.prototype[Symbol.dispose]=Lo.prototype.free);var ye=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,vp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,vp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawrigidbodyset_free(t,0)}contains(t){return c.rawrigidbodyset_contains(this.__wbg_ptr,t)!==0}createRigidBody(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g,m,x,C,y,T,S,R,w,M,P,N){return A(e,G),A(i,ue),A(a,G),A(l,G),A(h,G),A(u,G),A(d,ue),c.rawrigidbodyset_createRigidBody(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s,r,o,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,d.__wbg_ptr,f,p,_,b,g,m,x,C,y,T,S,R,w,M,P,N)}forEachRigidBodyHandle(t){try{c.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}len(){return c.rawrigidbodyset_len(this.__wbg_ptr)>>>0}constructor(){let t=c.rawrigidbodyset_new();return this.__wbg_ptr=t,vp.register(this,this.__wbg_ptr,this),this}propagateModifiedBodyPositionsToColliders(t){A(t,Ie),c.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,t.__wbg_ptr)}rbAddForceAtPoint(t,e,i,s){A(e,G),A(i,G),c.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s)}rbAddForce(t,e,i){A(e,G),c.rawrigidbodyset_rbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbAddTorque(t,e,i){A(e,G),c.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbAdditionalPgsIterations(t){return c.rawrigidbodyset_rbAdditionalPgsIterations(this.__wbg_ptr,t)>>>0}rbAdditionalSolverIterations(t){return c.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,t)>>>0}rbAngularDamping(t){return c.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,t)}rbAngvel(t,e){try{c.rawrigidbodyset_rbAngvel(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbApplyImpulseAtPoint(t,e,i,s){A(e,G),A(i,G),c.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s)}rbApplyImpulse(t,e,i){A(e,G),c.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbApplyTorqueImpulse(t,e,i){A(e,G),c.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbBodyType(t){return c.rawrigidbodyset_rbBodyType(this.__wbg_ptr,t)}rbCollider(t,e){return c.rawrigidbodyset_rbCollider(this.__wbg_ptr,t,e)}rbDominanceGroup(t){return c.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,t)}rbEffectiveAngularInertia(t,e){try{c.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbEffectiveInvMass(t,e){try{c.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbEffectiveWorldInvInertia(t,e){try{c.rawrigidbodyset_rbEffectiveWorldInvInertia(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbEnableCcd(t,e){c.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,t,e)}rbGravityScale(t){return c.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,t)}rbInvMass(t){return c.rawrigidbodyset_rbInvMass(this.__wbg_ptr,t)}rbInvPrincipalInertia(t,e){try{c.rawrigidbodyset_rbInvPrincipalInertia(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbIsCcdEnabled(t){return c.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,t)!==0}rbIsDynamic(t){return c.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,t)!==0}rbIsEnabled(t){return c.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,t)!==0}rbIsFixed(t){return c.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,t)!==0}rbIsKinematic(t){return c.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,t)!==0}rbIsMoving(t){return c.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,t)!==0}rbIsSleeping(t){return c.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,t)!==0}rbIsSoftFrame(t){return c.rawrigidbodyset_rbIsSoftFrame(this.__wbg_ptr,t)!==0}rbLinearDamping(t){return c.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,t)}rbLinvel(t,e){try{c.rawrigidbodyset_rbLinvel(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbLocalCom(t,e){try{c.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbLockRotations(t,e,i){c.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,t,e,i)}rbLockTranslations(t,e,i){c.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,t,e,i)}rbMass(t){return c.rawrigidbodyset_rbMass(this.__wbg_ptr,t)}rbNextRotation(t,e){try{c.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbNextTranslation(t,e){try{c.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbNumColliders(t){return c.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,t)>>>0}rbPrincipalInertiaLocalFrame(t,e){try{c.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbPrincipalInertia(t,e){try{c.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbRecomputeMassPropertiesFromColliders(t,e){A(e,Ie),c.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,t,e.__wbg_ptr)}rbResetForces(t,e){c.rawrigidbodyset_rbResetForces(this.__wbg_ptr,t,e)}rbResetTorques(t,e){c.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,t,e)}rbRotation(t,e){try{c.rawrigidbodyset_rbRotation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbSetAdditionalMassProperties(t,e,i,s,r,o){A(i,G),A(s,G),A(r,ue),c.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,t,e,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o)}rbSetAdditionalMass(t,e,i){c.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,t,e,i)}rbSetAdditionalPgsIterations(t,e){c.rawrigidbodyset_rbSetAdditionalPgsIterations(this.__wbg_ptr,t,e)}rbSetAdditionalSolverIterations(t,e){c.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,t,e)}rbSetAngularDamping(t,e){c.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,t,e)}rbSetAngvel(t,e,i){A(e,G),c.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbSetBodyType(t,e,i){c.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,t,e,i)}rbSetDominanceGroup(t,e){c.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,t,e)}rbSetEnabledRotations(t,e,i,s,r){c.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,t,e,i,s,r)}rbSetEnabledTranslations(t,e,i,s,r){c.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,t,e,i,s,r)}rbSetEnabled(t,e){c.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,t,e)}rbSetGravityScale(t,e,i){c.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,t,e,i)}rbSetLinearDamping(t,e){c.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,t,e)}rbSetLinvel(t,e,i){A(e,G),c.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,t,e.__wbg_ptr,i)}rbSetNextKinematicRotation(t,e,i,s,r){c.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,t,e,i,s,r)}rbSetNextKinematicTranslation(t,e,i,s){c.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,t,e,i,s)}rbSetRotation(t,e,i,s,r,o){c.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,t,e,i,s,r,o)}rbSetSoftCcdPrediction(t,e){c.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr,t,e)}rbSetTranslation(t,e,i,s,r){c.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,t,e,i,s,r)}rbSetUserData(t,e){c.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,t,e)}rbSleep(t){c.rawrigidbodyset_rbSleep(this.__wbg_ptr,t)}rbSoftBody(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawrigidbodyset_rbSoftBody(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}rbSoftCcdPrediction(t){return c.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr,t)}rbSoftCluster(t){let e=c.rawrigidbodyset_rbSoftCluster(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}rbTranslation(t,e){try{c.rawrigidbodyset_rbTranslation(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbUserData(t){return c.rawrigidbodyset_rbUserData(this.__wbg_ptr,t)>>>0}rbUserForce(t,e){try{c.rawrigidbodyset_rbUserForce(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbUserTorque(t,e){try{c.rawrigidbodyset_rbUserTorque(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}rbVelocityAtPoint(t,e,i){try{A(e,G),c.rawrigidbodyset_rbVelocityAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,_t(i))}finally{ht[dt++]=void 0}}rbWakeUp(t){c.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,t)}rbWorldCom(t,e){try{c.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}remove(t,e,i,s,r,o){A(e,ji),A(i,Ie),A(s,fn),A(r,Yi),A(o,$i),c.rawrigidbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr)}};Symbol.dispose&&(ye.prototype[Symbol.dispose]=ye.prototype.free),Object.freeze({Dynamic:0,0:"Dynamic",Fixed:1,1:"Fixed",KinematicPositionBased:2,2:"KinematicPositionBased",KinematicVelocityBased:3,3:"KinematicVelocityBased",SoftFrame:4,4:"SoftFrame"});var ue=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,xp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,xp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawrotation_free(t,0)}static identity(){let t=c.rawrotation_identity();return n.__wrap(t)}constructor(t,e,i,s){let r=c.rawrotation_new(t,e,i,s);return this.__wbg_ptr=r,xp.register(this,this.__wbg_ptr,this),this}get w(){return c.rawrotation_w(this.__wbg_ptr)}get x(){return c.rawrotation_x(this.__wbg_ptr)}get y(){return c.rawrotation_y(this.__wbg_ptr)}get z(){return c.rawrotation_z(this.__wbg_ptr)}};Symbol.dispose&&(ue.prototype[Symbol.dispose]=ue.prototype.free);var Fl=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,r0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawserializationpipeline_free(t,0)}deserializeAll(t){let e=c.rawserializationpipeline_deserializeAll(this.__wbg_ptr,ei(t));return e===0?void 0:Al.__wrap(e)}constructor(){let t=c.rawserializationpipeline_new();return this.__wbg_ptr=t,r0.register(this,this.__wbg_ptr,this),this}serializeAll(t,e,i,s,r,o,a,l,h,u){return A(t,G),A(e,bs),A(i,ji),A(s,kn),A(r,si),A(o,ye),A(a,Ie),A(l,fn),A(h,Yi),A(u,$i),xu(c.rawserializationpipeline_serializeAll(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr))}};Symbol.dispose&&(Fl.prototype[Symbol.dispose]=Fl.prototype.free);var ge=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,o0.register(e,e.__wbg_ptr,e),e}static __unwrap(t){return t instanceof n?t.__destroy_into_raw():0}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,o0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawshape_free(t,0)}static ball(t){let e=c.rawshape_ball(t);return n.__wrap(e)}static capsule(t,e){let i=c.rawshape_capsule(t,e);return n.__wrap(i)}castRayAndGetNormal(t,e,i,s,r,o){A(t,G),A(e,ue),A(i,G),A(s,G);let a=c.rawshape_castRayAndGetNormal(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,o);return a===0?void 0:Lo.__wrap(a)}castRay(t,e,i,s,r,o){return A(t,G),A(e,ue),A(i,G),A(s,G),c.rawshape_castRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r,o)}castShape(t,e,i,s,r,o,a,l,h,u){A(t,G),A(e,ue),A(i,G),A(s,n),A(r,G),A(o,ue),A(a,G);let d=c.rawshape_castShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l,h,u);return d===0?void 0:Fo.__wrap(d)}compoundFlags(){let t=c.rawshape_compoundFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}compoundLen(){let t=c.rawshape_compoundLen(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}compoundRotation(t){let e=c.rawshape_compoundRotation(this.__wbg_ptr,t);return e===0?void 0:ue.__wrap(e)}compoundShape(t){let e=c.rawshape_compoundShape(this.__wbg_ptr,t);return e===0?void 0:n.__wrap(e)}compoundTranslation(t){let e=c.rawshape_compoundTranslation(this.__wbg_ptr,t);return e===0?void 0:G.__wrap(e)}static compound(t,e,i,s){let r=(function(f,p){let _=p(4*f.length,4)>>>0,b=pt();for(let g=0;g<f.length;g++)b.setUint32(_+4*g,ei(f[g]),!0);return Zt=f.length,_})(t,c.__wbindgen_export3),o=Zt,a=ii(e,c.__wbindgen_export3),l=Zt,h=ii(i,c.__wbindgen_export3),u=Zt,d=c.rawshape_compound(r,o,a,l,h,u,s);return n.__wrap(d)}static cone(t,e){let i=c.rawshape_cone(t,e);return n.__wrap(i)}contactShape(t,e,i,s,r,o){A(t,G),A(e,ue),A(i,n),A(s,G),A(r,ue);let a=c.rawshape_contactShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o);return a===0?void 0:vr.__wrap(a)}containsPoint(t,e,i){return A(t,G),A(e,ue),A(i,G),c.rawshape_containsPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr)!==0}static convexDecompositionWithParams(t,e,i,s){let r=ii(t,c.__wbindgen_export3),o=Zt,a=$e(e,c.__wbindgen_export3),l=Zt;A(i,Uo);let h=c.rawshape_convexDecompositionWithParams(r,o,a,l,i.__wbg_ptr,s);return h===0?void 0:n.__wrap(h)}static convexDecomposition(t,e,i){let s=ii(t,c.__wbindgen_export3),r=Zt,o=$e(e,c.__wbindgen_export3),a=Zt,l=c.rawshape_convexDecomposition(s,r,o,a,i);return l===0?void 0:n.__wrap(l)}static convexHull(t){let e=ii(t,c.__wbindgen_export3),i=Zt,s=c.rawshape_convexHull(e,i);return s===0?void 0:n.__wrap(s)}convexMeshData(){let t=c.rawshape_convexMeshData(this.__wbg_ptr);return t===0?void 0:Rl.__wrap(t)}static convexMesh(t,e){let i=ii(t,c.__wbindgen_export3),s=Zt,r=$e(e,c.__wbindgen_export3),o=Zt,a=c.rawshape_convexMesh(i,s,r,o);return a===0?void 0:n.__wrap(a)}static cuboid(t,e,i){let s=c.rawshape_cuboid(t,e,i);return n.__wrap(s)}static cylinder(t,e){let i=c.rawshape_cylinder(t,e);return n.__wrap(i)}halfExtents(){let t=c.rawshape_halfExtents(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}halfHeight(){let t=c.rawshape_halfHeight(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}halfspaceNormal(){let t=c.rawshape_halfspaceNormal(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}static halfspace(t){A(t,G);let e=c.rawshape_halfspace(t.__wbg_ptr);return n.__wrap(e)}heightFieldFlags(){let t=c.rawshape_heightFieldFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldHeights(){try{let i=c.__wbindgen_add_to_stack_pointer(-16);c.rawshape_heightfieldHeights(i,this.__wbg_ptr);var t=pt().getInt32(i+0,!0),e=pt().getInt32(i+4,!0);let s;return t!==0&&(s=ss(t,e).slice(),c.__wbindgen_export2(t,4*e,4)),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}heightfieldNCols(){let t=c.rawshape_heightfieldNCols(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldNRows(){let t=c.rawshape_heightfieldNRows(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}heightfieldScale(){let t=c.rawshape_heightfieldScale(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}static heightfield(t,e,i,s,r){let o=ii(i,c.__wbindgen_export3),a=Zt;A(s,G);let l=c.rawshape_heightfield(t,e,o,a,s.__wbg_ptr,r);return n.__wrap(l)}indices(){try{let i=c.__wbindgen_add_to_stack_pointer(-16);c.rawshape_indices(i,this.__wbg_ptr);var t=pt().getInt32(i+0,!0),e=pt().getInt32(i+4,!0);let s;return t!==0&&(s=fi(t,e).slice(),c.__wbindgen_export2(t,4*e,4)),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}intersectsRay(t,e,i,s,r){return A(t,G),A(e,ue),A(i,G),A(s,G),c.rawshape_intersectsRay(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r)!==0}intersectsShape(t,e,i,s,r){return A(t,G),A(e,ue),A(i,n),A(s,G),A(r,ue),c.rawshape_intersectsShape(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr)!==0}polylineFlags(){let t=c.rawshape_polylineFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static polyline(t,e,i){let s=ii(t,c.__wbindgen_export3),r=Zt,o=$e(e,c.__wbindgen_export3),a=Zt,l=c.rawshape_polyline(s,r,o,a,i);return n.__wrap(l)}projectPoint(t,e,i,s){A(t,G),A(e,ue),A(i,G);let r=c.rawshape_projectPoint(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s);return Do.__wrap(r)}radius(){let t=c.rawshape_radius(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static roundCone(t,e,i){let s=c.rawshape_roundCone(t,e,i);return n.__wrap(s)}static roundConvexHull(t,e){let i=ii(t,c.__wbindgen_export3),s=Zt,r=c.rawshape_roundConvexHull(i,s,e);return r===0?void 0:n.__wrap(r)}static roundConvexMesh(t,e,i){let s=ii(t,c.__wbindgen_export3),r=Zt,o=$e(e,c.__wbindgen_export3),a=Zt,l=c.rawshape_roundConvexMesh(s,r,o,a,i);return l===0?void 0:n.__wrap(l)}static roundCuboid(t,e,i,s){let r=c.rawshape_roundCuboid(t,e,i,s);return n.__wrap(r)}static roundCylinder(t,e,i){let s=c.rawshape_roundCylinder(t,e,i);return n.__wrap(s)}roundRadius(){let t=c.rawshape_roundRadius(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static roundTriangle(t,e,i,s){A(t,G),A(e,G),A(i,G);let r=c.rawshape_roundTriangle(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s);return n.__wrap(r)}static segment(t,e){A(t,G),A(e,G);let i=c.rawshape_segment(t.__wbg_ptr,e.__wbg_ptr);return n.__wrap(i)}shapeType(){return c.rawshape_shapeType(this.__wbg_ptr)}triMeshFlags(){let t=c.rawshape_triMeshFlags(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}static triangle(t,e,i){A(t,G),A(e,G),A(i,G);let s=c.rawshape_triangle(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr);return n.__wrap(s)}static trimesh(t,e,i){let s=ii(t,c.__wbindgen_export3),r=Zt,o=$e(e,c.__wbindgen_export3),a=Zt,l=c.rawshape_trimesh(s,r,o,a,i);return l===0?void 0:n.__wrap(l)}vertices(){try{let i=c.__wbindgen_add_to_stack_pointer(-16);c.rawshape_vertices(i,this.__wbg_ptr);var t=pt().getInt32(i+0,!0),e=pt().getInt32(i+4,!0);let s;return t!==0&&(s=ss(t,e).slice(),c.__wbindgen_export2(t,4*e,4)),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}voxelData(){try{let i=c.__wbindgen_add_to_stack_pointer(-16);c.rawshape_voxelData(i,this.__wbg_ptr);var t=pt().getInt32(i+0,!0),e=pt().getInt32(i+4,!0);let s;return t!==0&&(s=_0(t,e).slice(),c.__wbindgen_export2(t,4*e,4)),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}voxelSize(){let t=c.rawshape_voxelSize(this.__wbg_ptr);return t===0?void 0:G.__wrap(t)}static voxelsFromPoints(t,e){A(t,G);let i=ii(e,c.__wbindgen_export3),s=Zt,r=c.rawshape_voxelsFromPoints(t.__wbg_ptr,i,s);return n.__wrap(r)}static voxels(t,e){A(t,G);let i=$e(e,c.__wbindgen_export3),s=Zt,r=c.rawshape_voxels(t.__wbg_ptr,i,s);return n.__wrap(r)}};Symbol.dispose&&(ge.prototype[Symbol.dispose]=ge.prototype.free);var Fo=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,a0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,a0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawshapecasthit_free(t,0)}getComponents(t){try{c.rawshapecasthit_getComponents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(Fo.prototype[Symbol.dispose]=Fo.prototype.free);var vr=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,l0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,l0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawshapecontact_free(t,0)}getComponents(t){try{c.rawshapecontact_getComponents(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}};Symbol.dispose&&(vr.prototype[Symbol.dispose]=vr.prototype.free);var me=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace",Voxels:18,18:"Voxels"}),en=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Sp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Sp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawsoftbodybuilder_free(t,0)}addEdges(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_addEdges(this.__wbg_ptr,e,i)}append(t){A(t,n),c.rawsoftbodybuilder_append(this.__wbg_ptr,t.__wbg_ptr)}cellEdges(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodybuilder_cellEdges(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}static clothAnisotropic(t,e,i,s,r,o,a,l,h,u,d){A(t,G),A(e,G),A(i,G);let f=c.rawsoftbodybuilder_clothAnisotropic(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s,r,o,a,l,h,u,d);return n.__wrap(f)}static clothTube(t,e,i,s,r,o){A(t,G),A(e,G);let a=c.rawsoftbodybuilder_clothTube(t.__wbg_ptr,e.__wbg_ptr,i,s,r,o);return n.__wrap(a)}static cloth(t,e,i,s,r){A(t,G),A(e,G),A(i,G);let o=c.rawsoftbodybuilder_cloth(t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr,s,r);return n.__wrap(o)}static cuboid(t,e,i,s,r){A(t,G),A(e,G);let o=c.rawsoftbodybuilder_cuboid(t.__wbg_ptr,e.__wbg_ptr,i,s,r);return n.__wrap(o)}material(){let t=c.rawsoftbodybuilder_material(this.__wbg_ptr);return zn.__wrap(t)}constructor(t){let e=ii(t,c.__wbindgen_export3),i=Zt,s=c.rawsoftbodybuilder_new(e,i);return this.__wbg_ptr=s,Sp.register(this,this.__wbg_ptr,this),this}numParticles(){return c.rawsoftbodybuilder_numParticles(this.__wbg_ptr)>>>0}particlePositions(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodybuilder_particlePositions(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=ss(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}static rope(t,e,i){A(t,G),A(e,G);let s=c.rawsoftbodybuilder_rope(t.__wbg_ptr,e.__wbg_ptr,i);return n.__wrap(s)}setAdditionalPgsIterations(t){c.rawsoftbodybuilder_setAdditionalPgsIterations(this.__wbg_ptr,t)}setAdditionalSolverIterations(t){c.rawsoftbodybuilder_setAdditionalSolverIterations(this.__wbg_ptr,t)}setBendEdges(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setBendEdges(this.__wbg_ptr,e,i)}setCanSleep(t){c.rawsoftbodybuilder_setCanSleep(this.__wbg_ptr,t)}setCellModel(t){c.rawsoftbodybuilder_setCellModel(this.__wbg_ptr,t)}setCells(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setCells(this.__wbg_ptr,e,i)}setDihedrals(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setDihedrals(this.__wbg_ptr,e,i)}setDominanceGroup(t){c.rawsoftbodybuilder_setDominanceGroup(this.__wbg_ptr,t)}setEdgeSoftness(t,e,i){let s=$e(t,c.__wbindgen_export3),r=Zt,o=ii(e,c.__wbindgen_export3),a=Zt,l=ii(i,c.__wbindgen_export3),h=Zt;c.rawsoftbodybuilder_setEdgeSoftness(this.__wbg_ptr,s,r,o,a,l,h)}setEdgeTearResistance(t,e){let i=$e(t,c.__wbindgen_export3),s=Zt,r=ii(e,c.__wbindgen_export3),o=Zt;c.rawsoftbodybuilder_setEdgeTearResistance(this.__wbg_ptr,i,s,r,o)}setEdges(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setEdges(this.__wbg_ptr,e,i)}setGravityScale(t){c.rawsoftbodybuilder_setGravityScale(this.__wbg_ptr,t)}setLinearDamping(t){c.rawsoftbodybuilder_setLinearDamping(this.__wbg_ptr,t)}setMass(t){c.rawsoftbodybuilder_setMass(this.__wbg_ptr,t)}setMasses(t){let e=ii(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setMasses(this.__wbg_ptr,e,i)}setMaterial(t){A(t,zn),c.rawsoftbodybuilder_setMaterial(this.__wbg_ptr,t.__wbg_ptr)}setNoSurfaceCollider(){c.rawsoftbodybuilder_setNoSurfaceCollider(this.__wbg_ptr)}setOriented(t){c.rawsoftbodybuilder_setOriented(this.__wbg_ptr,t)}setParticleMass(t){c.rawsoftbodybuilder_setParticleMass(this.__wbg_ptr,t)}setParticleRadius(t){c.rawsoftbodybuilder_setParticleRadius(this.__wbg_ptr,t)}setPinnedParticles(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setPinnedParticles(this.__wbg_ptr,e,i)}setPositions(t){let e=ii(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setPositions(this.__wbg_ptr,e,i)}setSelfContacts(t){c.rawsoftbodybuilder_setSelfContacts(this.__wbg_ptr,t)}setShapeMatching(t){c.rawsoftbodybuilder_setShapeMatching(this.__wbg_ptr,t)}setSkinCollision(t){c.rawsoftbodybuilder_setSkinCollision(this.__wbg_ptr,t)}setSkin(t,e){let i=ii(t,c.__wbindgen_export3),s=Zt,r=$e(e,c.__wbindgen_export3),o=Zt;c.rawsoftbodybuilder_setSkin(this.__wbg_ptr,i,s,r,o)}setSoftness(t,e){c.rawsoftbodybuilder_setSoftness(this.__wbg_ptr,t,e)}setSolver(t){c.rawsoftbodybuilder_setSolver(this.__wbg_ptr,t)}setSurfaceCollider(t,e,i,s,r,o,a,l,h,u,d,f){c.rawsoftbodybuilder_setSurfaceCollider(this.__wbg_ptr,t,e,i,s,r,o,a,l,h,u,d,f)}setSurface(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setSurface(this.__wbg_ptr,e,i)}setTensionOnly(){c.rawsoftbodybuilder_setTensionOnly(this.__wbg_ptr)}setVolumeFactor(t){c.rawsoftbodybuilder_setVolumeFactor(this.__wbg_ptr,t)}setVolumePreservation(t){c.rawsoftbodybuilder_setVolumePreservation(this.__wbg_ptr,t)}setWire(t){let e=$e(t,c.__wbindgen_export3),i=Zt;c.rawsoftbodybuilder_setWire(this.__wbg_ptr,e,i)}static sphere(t,e,i){A(t,G);let s=c.rawsoftbodybuilder_sphere(t.__wbg_ptr,e,i);return n.__wrap(s)}surfaceDihedrals(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodybuilder_surfaceDihedrals(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}surfaceEdges(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodybuilder_surfaceEdges(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}translated(t){A(t,G),c.rawsoftbodybuilder_translated(this.__wbg_ptr,t.__wbg_ptr)}static trimesh(t,e){let i=ii(t,c.__wbindgen_export3),s=Zt,r=$e(e,c.__wbindgen_export3),o=Zt,a=c.rawsoftbodybuilder_trimesh(i,s,r,o);return a===0?void 0:n.__wrap(a)}static volumetric(t,e,i,s){let r=ii(t,c.__wbindgen_export3),o=Zt,a=$e(e,c.__wbindgen_export3),l=Zt,h=c.rawsoftbodybuilder_volumetric(r,o,a,l,i,s);return h===0?void 0:n.__wrap(h)}};Symbol.dispose&&(en.prototype[Symbol.dispose]=en.prototype.free),Object.freeze({Volume:0,0:"Volume",Corotational:1,1:"Corotational",NeoHookean:2,2:"NeoHookean"});var zn=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Mp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Mp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawsoftbodymaterial_free(t,0)}get bendDampingRatio(){return c.rawsoftbodymaterial_bendDampingRatio(this.__wbg_ptr)}get bendFrequency(){return c.rawsoftbodymaterial_bendFrequency(this.__wbg_ptr)}get deformationDamping(){return c.rawsoftbodymaterial_deformationDamping(this.__wbg_ptr)}get edgeDampingRatio(){return c.rawsoftbodymaterial_edgeDampingRatio(this.__wbg_ptr)}get edgeFrequency(){return c.rawsoftbodymaterial_edgeFrequency(this.__wbg_ptr)}get edgePlasticCreep(){return c.rawsoftbodymaterial_edgePlasticCreep(this.__wbg_ptr)}get edgePlasticFlow(){return c.rawsoftbodymaterial_edgePlasticFlow(this.__wbg_ptr)}get edgePlasticMax(){return c.rawsoftbodymaterial_edgePlasticMax(this.__wbg_ptr)}get edgePlasticYield(){return c.rawsoftbodymaterial_edgePlasticYield(this.__wbg_ptr)}get elasticDampingRatio(){return c.rawsoftbodymaterial_elasticDampingRatio(this.__wbg_ptr)}get interiorStrength(){return c.rawsoftbodymaterial_interiorStrength(this.__wbg_ptr)}get maxTearsPerStep(){return c.rawsoftbodymaterial_maxTearsPerStep(this.__wbg_ptr)>>>0}get minPiece(){let t=c.rawsoftbodymaterial_minPiece(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}constructor(){let t=c.rawsoftbodymaterial_new();return this.__wbg_ptr=t,Mp.register(this,this.__wbg_ptr,this),this}get plasticCreep(){return c.rawsoftbodymaterial_plasticCreep(this.__wbg_ptr)}get plasticMax(){return c.rawsoftbodymaterial_plasticMax(this.__wbg_ptr)}get plasticYield(){return c.rawsoftbodymaterial_plasticYield(this.__wbg_ptr)}get poissonRatio(){return c.rawsoftbodymaterial_poissonRatio(this.__wbg_ptr)}set bendDampingRatio(t){c.rawsoftbodymaterial_set_bendDampingRatio(this.__wbg_ptr,t)}set bendFrequency(t){c.rawsoftbodymaterial_set_bendFrequency(this.__wbg_ptr,t)}set deformationDamping(t){c.rawsoftbodymaterial_set_deformationDamping(this.__wbg_ptr,t)}set edgeDampingRatio(t){c.rawsoftbodymaterial_set_edgeDampingRatio(this.__wbg_ptr,t)}set edgeFrequency(t){c.rawsoftbodymaterial_set_edgeFrequency(this.__wbg_ptr,t)}set edgePlasticCreep(t){c.rawsoftbodymaterial_set_edgePlasticCreep(this.__wbg_ptr,t)}set edgePlasticFlow(t){c.rawsoftbodymaterial_set_edgePlasticFlow(this.__wbg_ptr,t)}set edgePlasticMax(t){c.rawsoftbodymaterial_set_edgePlasticMax(this.__wbg_ptr,t)}set edgePlasticYield(t){c.rawsoftbodymaterial_set_edgePlasticYield(this.__wbg_ptr,t)}set elasticDampingRatio(t){c.rawsoftbodymaterial_set_elasticDampingRatio(this.__wbg_ptr,t)}set interiorStrength(t){c.rawsoftbodymaterial_set_interiorStrength(this.__wbg_ptr,t)}set maxTearsPerStep(t){c.rawsoftbodymaterial_set_maxTearsPerStep(this.__wbg_ptr,t)}set minPiece(t){c.rawsoftbodymaterial_set_minPiece(this.__wbg_ptr,Ot(t)?Number.MAX_SAFE_INTEGER:t>>>0)}set plasticCreep(t){c.rawsoftbodymaterial_set_plasticCreep(this.__wbg_ptr,t)}set plasticMax(t){c.rawsoftbodymaterial_set_plasticMax(this.__wbg_ptr,t)}set plasticYield(t){c.rawsoftbodymaterial_set_plasticYield(this.__wbg_ptr,t)}set poissonRatio(t){c.rawsoftbodymaterial_set_poissonRatio(this.__wbg_ptr,t)}set shapeMatchingDampingRatio(t){c.rawsoftbodymaterial_set_shapeMatchingDampingRatio(this.__wbg_ptr,t)}set shapeMatchingFrequency(t){c.rawsoftbodymaterial_set_shapeMatchingFrequency(this.__wbg_ptr,t)}set tearForce(t){c.rawsoftbodymaterial_set_tearForce(this.__wbg_ptr,Ot(t)?Number.MAX_SAFE_INTEGER:Math.fround(t))}set tearSmoothing(t){c.rawsoftbodymaterial_set_tearSmoothing(this.__wbg_ptr,t)}set tearStrain(t){c.rawsoftbodymaterial_set_tearStrain(this.__wbg_ptr,Ot(t)?Number.MAX_SAFE_INTEGER:Math.fround(t))}set volumeDampingRatio(t){c.rawsoftbodymaterial_set_volumeDampingRatio(this.__wbg_ptr,t)}set volumeFrequency(t){c.rawsoftbodymaterial_set_volumeFrequency(this.__wbg_ptr,t)}set youngModulus(t){c.rawsoftbodymaterial_set_youngModulus(this.__wbg_ptr,t)}get shapeMatchingDampingRatio(){return c.rawsoftbodymaterial_shapeMatchingDampingRatio(this.__wbg_ptr)}get shapeMatchingFrequency(){return c.rawsoftbodymaterial_shapeMatchingFrequency(this.__wbg_ptr)}get tearForce(){let t=c.rawsoftbodymaterial_tearForce(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}get tearSmoothing(){return c.rawsoftbodymaterial_tearSmoothing(this.__wbg_ptr)}get tearStrain(){let t=c.rawsoftbodymaterial_tearStrain(this.__wbg_ptr);return t===Number.MAX_SAFE_INTEGER?void 0:t}tears(){return c.rawsoftbodymaterial_tears(this.__wbg_ptr)!==0}static uniform(t,e){let i=c.rawsoftbodymaterial_uniform(t,e);return n.__wrap(i)}get volumeDampingRatio(){return c.rawsoftbodymaterial_volumeDampingRatio(this.__wbg_ptr)}get volumeFrequency(){return c.rawsoftbodymaterial_volumeFrequency(this.__wbg_ptr)}get youngModulus(){return c.rawsoftbodymaterial_youngModulus(this.__wbg_ptr)}};Symbol.dispose&&(zn.prototype[Symbol.dispose]=zn.prototype.free);var fn=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Ep.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Ep.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawsoftbodyset_free(t,0)}addCluster(t,e,i,s){let r=$e(e,c.__wbindgen_export3),o=Zt;A(i,ye),A(s,Ie);let a=c.rawsoftbodyset_addCluster(this.__wbg_ptr,t,r,o,i.__wbg_ptr,s.__wbg_ptr);return a===Number.MAX_SAFE_INTEGER?void 0:a}contains(t){return c.rawsoftbodyset_contains(this.__wbg_ptr,t)!==0}cut(t,e,i,s,r,o,a){let l=ii(e,c.__wbindgen_export3),h=Zt;A(i,ji),A(s,ye),A(r,Ie),A(o,Yi),A(a,$i);let u=c.rawsoftbodyset_cut(this.__wbg_ptr,t,l,h,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr);return u===0?void 0:xr.__wrap(u)}forEachSoftBodyHandle(t){try{c.rawsoftbodyset_forEachSoftBodyHandle(this.__wbg_ptr,_t(t))}finally{ht[dt++]=void 0}}insert(t,e,i){return A(t,en),A(e,ye),A(i,Ie),c.rawsoftbodyset_insert(this.__wbg_ptr,t.__wbg_ptr,e.__wbg_ptr,i.__wbg_ptr)}len(){return c.rawsoftbodyset_len(this.__wbg_ptr)>>>0}constructor(){let t=c.rawsoftbodyset_new();return this.__wbg_ptr=t,Ep.register(this,this.__wbg_ptr,this),this}removeCluster(t,e,i,s,r,o,a){return A(i,ji),A(s,ye),A(r,Ie),A(o,Yi),A(a,$i),c.rawsoftbodyset_removeCluster(this.__wbg_ptr,t,e,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr)!==0}remove(t,e,i,s,r,o){A(e,ji),A(i,ye),A(s,Ie),A(r,Yi),A(o,$i),c.rawsoftbodyset_remove(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr)}sbAddForce(t,e,i){A(e,G),c.rawsoftbodyset_sbAddForce(this.__wbg_ptr,t,e.__wbg_ptr,i)}sbAddParticleForce(t,e,i,s){A(i,G),c.rawsoftbodyset_sbAddParticleForce(this.__wbg_ptr,t,e,i.__wbg_ptr,s)}sbApplyImpulseAtPoint(t,e,i,s,r){A(e,G),A(i,G),c.rawsoftbodyset_sbApplyImpulseAtPoint(this.__wbg_ptr,t,e.__wbg_ptr,i.__wbg_ptr,s,r)}sbApplyImpulse(t,e,i){A(e,G),c.rawsoftbodyset_sbApplyImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i)}sbApplyParticleImpulse(t,e,i,s){A(i,G),c.rawsoftbodyset_sbApplyParticleImpulse(this.__wbg_ptr,t,e,i.__wbg_ptr,s)}sbApplyRadialImpulse(t,e,i,s,r){A(e,G),c.rawsoftbodyset_sbApplyRadialImpulse(this.__wbg_ptr,t,e.__wbg_ptr,i,s,r)}sbAttachParticle(t,e,i,s){A(s,ye),c.rawsoftbodyset_sbAttachParticle(this.__wbg_ptr,t,e,i,s.__wbg_ptr)}sbAttachmentBody(t,e){return c.rawsoftbodyset_sbAttachmentBody(this.__wbg_ptr,t,e)}sbAttachmentParticle(t,e){return c.rawsoftbodyset_sbAttachmentParticle(this.__wbg_ptr,t,e)>>>0}sbBoundary(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbBoundary(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbCellModel(t){return c.rawsoftbodyset_sbCellModel(this.__wbg_ptr,t)}sbCellRestVolume(t,e){return c.rawsoftbodyset_sbCellRestVolume(this.__wbg_ptr,t,e)}sbCellStiffnessScale(t,e){return c.rawsoftbodyset_sbCellStiffnessScale(this.__wbg_ptr,t,e)}sbCellStress(t,e){return c.rawsoftbodyset_sbCellStress(this.__wbg_ptr,t,e)}sbCellTearResistance(t,e){return c.rawsoftbodyset_sbCellTearResistance(this.__wbg_ptr,t,e)}sbCells(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbCells(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbCenterOfMass(t,e){try{c.rawsoftbodyset_sbCenterOfMass(this.__wbg_ptr,t,_t(e))}finally{ht[dt++]=void 0}}sbClusterParticles(t,e){try{let o=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbClusterParticles(o,this.__wbg_ptr,t,e);var i=pt().getInt32(o+0,!0),s=pt().getInt32(o+4,!0),r=fi(i,s).slice();return c.__wbindgen_export2(i,4*s,4),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbClusterProxy(t,e){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbClusterProxy(r,this.__wbg_ptr,t,e);var i=pt().getInt32(r+0,!0),s=pt().getFloat64(r+8,!0);return i===0?void 0:s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbClusterShapeMatchingEnabled(t,e){return c.rawsoftbodyset_sbClusterShapeMatchingEnabled(this.__wbg_ptr,t,e)!==0}sbDetachParticle(t,e){return c.rawsoftbodyset_sbDetachParticle(this.__wbg_ptr,t,e)!==0}sbDihedralRestAngle(t,e){return c.rawsoftbodyset_sbDihedralRestAngle(this.__wbg_ptr,t,e)}sbDihedrals(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbDihedrals(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbEdgeImpulse(t,e){return c.rawsoftbodyset_sbEdgeImpulse(this.__wbg_ptr,t,e)}sbEdgeIsBend(t,e){return c.rawsoftbodyset_sbEdgeIsBend(this.__wbg_ptr,t,e)!==0}sbEdgePlasticStrain(t,e){return c.rawsoftbodyset_sbEdgePlasticStrain(this.__wbg_ptr,t,e)}sbEdgeRestLength(t,e){return c.rawsoftbodyset_sbEdgeRestLength(this.__wbg_ptr,t,e)}sbEdgeStress(t,e){return c.rawsoftbodyset_sbEdgeStress(this.__wbg_ptr,t,e)}sbEdgeTearResistance(t,e){return c.rawsoftbodyset_sbEdgeTearResistance(this.__wbg_ptr,t,e)}sbEdges(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbEdges(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbEnableClusterShapeMatching(t,e,i){c.rawsoftbodyset_sbEnableClusterShapeMatching(this.__wbg_ptr,t,e,i)}sbEnableVolumePreservation(t,e){c.rawsoftbodyset_sbEnableVolumePreservation(this.__wbg_ptr,t,e)}sbGravityScale(t){return c.rawsoftbodyset_sbGravityScale(this.__wbg_ptr,t)}sbHasPendingTears(t){return c.rawsoftbodyset_sbHasPendingTears(this.__wbg_ptr,t)!==0}sbIsClusterLive(t,e){return c.rawsoftbodyset_sbIsClusterLive(this.__wbg_ptr,t,e)!==0}sbIsEnabled(t){return c.rawsoftbodyset_sbIsEnabled(this.__wbg_ptr,t)!==0}sbIsParticleDamaged(t,e){return c.rawsoftbodyset_sbIsParticleDamaged(this.__wbg_ptr,t,e)!==0}sbIsParticleOnSurface(t,e){return c.rawsoftbodyset_sbIsParticleOnSurface(this.__wbg_ptr,t,e)!==0}sbIsParticlePinned(t,e){return c.rawsoftbodyset_sbIsParticlePinned(this.__wbg_ptr,t,e)!==0}sbIsSleeping(t){return c.rawsoftbodyset_sbIsSleeping(this.__wbg_ptr,t)!==0}sbLinearDamping(t){return c.rawsoftbodyset_sbLinearDamping(this.__wbg_ptr,t)}sbMass(t){return c.rawsoftbodyset_sbMass(this.__wbg_ptr,t)}sbMaterial(t){let e=c.rawsoftbodyset_sbMaterial(this.__wbg_ptr,t);return zn.__wrap(e)}sbMeshCluster(t,e){let i=c.rawsoftbodyset_sbMeshCluster(this.__wbg_ptr,t,e);return i===Number.MAX_SAFE_INTEGER?void 0:i}sbMeshCollider(t,e){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbMeshCollider(r,this.__wbg_ptr,t,e);var i=pt().getInt32(r+0,!0),s=pt().getFloat64(r+8,!0);return i===0?void 0:s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbMeshCollisionEnabled(t,e){return c.rawsoftbodyset_sbMeshCollisionEnabled(this.__wbg_ptr,t,e)!==0}sbMeshIndices(t,e){try{let o=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbMeshIndices(o,this.__wbg_ptr,t,e);var i=pt().getInt32(o+0,!0),s=pt().getInt32(o+4,!0),r=fi(i,s).slice();return c.__wbindgen_export2(i,4*s,4),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbMeshIsOriented(t,e){return c.rawsoftbodyset_sbMeshIsOriented(this.__wbg_ptr,t,e)!==0}sbMeshIsSkinned(t,e){return c.rawsoftbodyset_sbMeshIsSkinned(this.__wbg_ptr,t,e)!==0}sbMeshOfCollider(t,e){let i=c.rawsoftbodyset_sbMeshOfCollider(this.__wbg_ptr,t,e);return i===Number.MAX_SAFE_INTEGER?void 0:i}sbMeshVertices(t,e){try{let o=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbMeshVertices(o,this.__wbg_ptr,t,e);var i=pt().getInt32(o+0,!0),s=pt().getInt32(o+4,!0),r=ss(i,s).slice();return c.__wbindgen_export2(i,4*s,4),r}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbNumAttachments(t){return c.rawsoftbodyset_sbNumAttachments(this.__wbg_ptr,t)>>>0}sbNumCells(t){return c.rawsoftbodyset_sbNumCells(this.__wbg_ptr,t)>>>0}sbNumClusters(t){return c.rawsoftbodyset_sbNumClusters(this.__wbg_ptr,t)>>>0}sbNumDihedrals(t){return c.rawsoftbodyset_sbNumDihedrals(this.__wbg_ptr,t)>>>0}sbNumEdges(t){return c.rawsoftbodyset_sbNumEdges(this.__wbg_ptr,t)>>>0}sbNumMeshes(t){return c.rawsoftbodyset_sbNumMeshes(this.__wbg_ptr,t)>>>0}sbNumParticles(t){return c.rawsoftbodyset_sbNumParticles(this.__wbg_ptr,t)>>>0}sbOrigin(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbOrigin(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbParticleMass(t,e){return c.rawsoftbodyset_sbParticleMass(this.__wbg_ptr,t,e)}sbParticlePosition(t,e,i){try{c.rawsoftbodyset_sbParticlePosition(this.__wbg_ptr,t,e,_t(i))}finally{ht[dt++]=void 0}}sbParticlePositions(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbParticlePositions(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=ss(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbParticleRadius(t){return c.rawsoftbodyset_sbParticleRadius(this.__wbg_ptr,t)}sbParticleRestPosition(t,e,i){try{c.rawsoftbodyset_sbParticleRestPosition(this.__wbg_ptr,t,e,_t(i))}finally{ht[dt++]=void 0}}sbParticleVelocities(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbParticleVelocities(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=ss(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbParticleVelocity(t,e,i){try{c.rawsoftbodyset_sbParticleVelocity(this.__wbg_ptr,t,e,_t(i))}finally{ht[dt++]=void 0}}sbPieces(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodyset_sbPieces(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=(function(o,a){return o>>>=0,(function(){return bl!==null&&bl.byteLength!==0||(bl=new Float64Array(c.memory.buffer)),bl})().subarray(o/8,o/8+a)})(e,i).slice();return c.__wbindgen_export2(e,8*i,8),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}sbResetForces(t,e){c.rawsoftbodyset_sbResetForces(this.__wbg_ptr,t,e)}sbResetPlasticity(t){c.rawsoftbodyset_sbResetPlasticity(this.__wbg_ptr,t)}sbRestVolume(t){return c.rawsoftbodyset_sbRestVolume(this.__wbg_ptr,t)}sbRootBody(t){return c.rawsoftbodyset_sbRootBody(this.__wbg_ptr,t)}sbSetAdditionalPgsIterations(t,e){c.rawsoftbodyset_sbSetAdditionalPgsIterations(this.__wbg_ptr,t,e)}sbSetClusterEdgeSoftness(t,e,i,s){c.rawsoftbodyset_sbSetClusterEdgeSoftness(this.__wbg_ptr,t,e,Ot(i)?Number.MAX_SAFE_INTEGER:Math.fround(i),Ot(s)?Number.MAX_SAFE_INTEGER:Math.fround(s))}sbSetClusterKinematicTarget(t,e,i,s){A(i,G),A(s,ue),c.rawsoftbodyset_sbSetClusterKinematicTarget(this.__wbg_ptr,t,e,i.__wbg_ptr,s.__wbg_ptr)}sbSetClusterPinned(t,e,i){c.rawsoftbodyset_sbSetClusterPinned(this.__wbg_ptr,t,e,i)}sbSetClusterStiffnessScale(t,e,i){c.rawsoftbodyset_sbSetClusterStiffnessScale(this.__wbg_ptr,t,e,i)}sbSetClusterTearResistance(t,e,i){c.rawsoftbodyset_sbSetClusterTearResistance(this.__wbg_ptr,t,e,i)}sbSetEnabled(t,e){c.rawsoftbodyset_sbSetEnabled(this.__wbg_ptr,t,e)}sbSetMaterial(t,e){A(e,zn),c.rawsoftbodyset_sbSetMaterial(this.__wbg_ptr,t,e.__wbg_ptr)}sbSetParticleKinematicTarget(t,e,i){A(i,G),c.rawsoftbodyset_sbSetParticleKinematicTarget(this.__wbg_ptr,t,e,i.__wbg_ptr)}sbSetParticlePinned(t,e,i){c.rawsoftbodyset_sbSetParticlePinned(this.__wbg_ptr,t,e,i)}sbSetParticlePosition(t,e,i){A(i,G),c.rawsoftbodyset_sbSetParticlePosition(this.__wbg_ptr,t,e,i.__wbg_ptr)}sbSetParticleVelocity(t,e,i){A(i,G),c.rawsoftbodyset_sbSetParticleVelocity(this.__wbg_ptr,t,e,i.__wbg_ptr)}sbSetSolver(t,e){c.rawsoftbodyset_sbSetSolver(this.__wbg_ptr,t,e)}sbSetUserData(t,e){c.rawsoftbodyset_sbSetUserData(this.__wbg_ptr,t,e)}sbSetVolumeFactor(t,e){c.rawsoftbodyset_sbSetVolumeFactor(this.__wbg_ptr,t,e)}sbSolver(t){return c.rawsoftbodyset_sbSolver(this.__wbg_ptr,t)}sbTearCell(t,e){c.rawsoftbodyset_sbTearCell(this.__wbg_ptr,t,e)}sbTearEdge(t,e){c.rawsoftbodyset_sbTearEdge(this.__wbg_ptr,t,e)}sbTopologyVersion(t){return c.rawsoftbodyset_sbTopologyVersion(this.__wbg_ptr,t)>>>0}sbUserData(t){return c.rawsoftbodyset_sbUserData(this.__wbg_ptr,t)}sbVolumeFactor(t){return c.rawsoftbodyset_sbVolumeFactor(this.__wbg_ptr,t)}sbVolumePreservationEnabled(t){return c.rawsoftbodyset_sbVolumePreservationEnabled(this.__wbg_ptr,t)!==0}sbVolume(t){return c.rawsoftbodyset_sbVolume(this.__wbg_ptr,t)}sbWakeUp(t){c.rawsoftbodyset_sbWakeUp(this.__wbg_ptr,t)}tear(t,e,i,s,r,o,a,l){let h=$e(e,c.__wbindgen_export3),u=Zt,d=$e(i,c.__wbindgen_export3),f=Zt;A(s,ji),A(r,ye),A(o,Ie),A(a,Yi),A(l,$i);let p=c.rawsoftbodyset_tear(this.__wbg_ptr,t,h,u,d,f,s.__wbg_ptr,r.__wbg_ptr,o.__wbg_ptr,a.__wbg_ptr,l.__wbg_ptr);return p===0?void 0:xr.__wrap(p)}wakeUp(t,e,i){A(e,ye),c.rawsoftbodyset_wakeUp(this.__wbg_ptr,t,e.__wbg_ptr,i)}};Symbol.dispose&&(fn.prototype[Symbol.dispose]=fn.prototype.free),Object.freeze({Constraints:0,0:"Constraints",Fem:1,1:"Fem"});var xr=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,c0.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,c0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawsoftbodytearevent_free(t,0)}clusterSplitCluster(t){return c.rawsoftbodytearevent_clusterSplitCluster(this.__wbg_ptr,t)>>>0}clusterSplitKeepsProxy(t){return c.rawsoftbodytearevent_clusterSplitKeepsProxy(this.__wbg_ptr,t)!==0}clusterSplitProxy(t){return c.rawsoftbodytearevent_clusterSplitProxy(this.__wbg_ptr,t)}clusterSplitSoftBody(t){return c.rawsoftbodytearevent_clusterSplitSoftBody(this.__wbg_ptr,t)}clusterSplitSource(t){return c.rawsoftbodytearevent_clusterSplitSource(this.__wbg_ptr,t)>>>0}insertedParticles(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_insertedParticles(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}movedJointFrom(t){return c.rawsoftbodytearevent_movedJointFrom(this.__wbg_ptr,t)}movedJointTo(t){return c.rawsoftbodytearevent_movedJointTo(this.__wbg_ptr,t)}movedJoint(t){return c.rawsoftbodytearevent_movedJoint(this.__wbg_ptr,t)}numClusterSplits(){return c.rawsoftbodytearevent_numClusterSplits(this.__wbg_ptr)>>>0}numMovedJoints(){return c.rawsoftbodytearevent_numMovedJoints(this.__wbg_ptr)>>>0}numPieces(){return c.rawsoftbodytearevent_numPieces(this.__wbg_ptr)>>>0}particleDestinationBody(t){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_particleDestinationBody(s,this.__wbg_ptr,t);var e=pt().getInt32(s+0,!0),i=pt().getFloat64(s+8,!0);return e===0?void 0:i}finally{c.__wbindgen_add_to_stack_pointer(16)}}particleDestinationIndex(t){let e=c.rawsoftbodytearevent_particleDestinationIndex(this.__wbg_ptr,t);return e===Number.MAX_SAFE_INTEGER?void 0:e}pieceClusters(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_pieceClusters(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}pieceParticles(t){try{let r=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_pieceParticles(r,this.__wbg_ptr,t);var e=pt().getInt32(r+0,!0),i=pt().getInt32(r+4,!0),s=fi(e,i).slice();return c.__wbindgen_export2(e,4*i,4),s}finally{c.__wbindgen_add_to_stack_pointer(16)}}pieceSoftBody(t){return c.rawsoftbodytearevent_pieceSoftBody(this.__wbg_ptr,t)}removedEdges(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_removedEdges(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}seeds(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_seeds(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}softBody(){return c.rawsoftbodytearevent_softBody(this.__wbg_ptr)}splitParticles(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_splitParticles(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}tornCells(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_tornCells(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}tornEdges(){try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.rawsoftbodytearevent_tornEdges(s,this.__wbg_ptr);var t=pt().getInt32(s+0,!0),e=pt().getInt32(s+4,!0),i=fi(t,e).slice();return c.__wbindgen_export2(t,4*e,4),i}finally{c.__wbindgen_add_to_stack_pointer(16)}}};Symbol.dispose&&(xr.prototype[Symbol.dispose]=xr.prototype.free),Object.freeze({Both:0,0:"Both",Compression:1,1:"Compression",Tension:2,2:"Tension"}),Object.freeze({Direct:0,0:"Direct",DirectByPosition:1,1:"DirectByPosition",Skinned:2,2:"Skinned"}),Object.freeze({Keep:0,0:"Keep",StandDown:1,1:"StandDown",AlongNormal:2,2:"AlongNormal"});var Ys=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Tp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Tp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawsoftrecoverysettings_free(t,0)}get authoredVelocityMargin(){return c.rawsoftrecoverysettings_authoredVelocityMargin(this.__wbg_ptr)!==0}get crossBodyDetection(){return c.rawsoftrecoverysettings_crossBodyDetection(this.__wbg_ptr)!==0}get crossBodyExpelGate(){return c.rawsoftrecoverysettings_crossBodyExpelGate(this.__wbg_ptr)!==0}get crossingRepulsionGuide(){return c.rawsoftrecoverysettings_crossingRepulsionGuide(this.__wbg_ptr)!==0}get crossingRepulsionSelfGuide(){return c.rawsoftrecoverysettings_crossingRepulsionSelfGuide(this.__wbg_ptr)!==0}get crossingRepulsion(){return c.rawsoftrecoverysettings_crossingRepulsion(this.__wbg_ptr)!==0}get detectionMotionGating(){return c.rawsoftrecoverysettings_detectionMotionGating(this.__wbg_ptr)!==0}get edgeSpeculation(){return c.rawsoftrecoverysettings_edgeSpeculation(this.__wbg_ptr)!==0}get edgeStandDown(){return c.rawsoftrecoverysettings_edgeStandDown(this.__wbg_ptr)!==0}get invertedCellDetection(){return c.rawsoftrecoverysettings_invertedCellDetection(this.__wbg_ptr)!==0}constructor(){let t=c.rawsoftrecoverysettings_new();return this.__wbg_ptr=t,Tp.register(this,this.__wbg_ptr,this),this}get overlapConstraintPace(){return c.rawsoftrecoverysettings_overlapConstraintPace(this.__wbg_ptr)}get overlapConstraints(){return c.rawsoftrecoverysettings_overlapConstraints(this.__wbg_ptr)!==0}get overlapEdgeStandDown(){return c.rawsoftrecoverysettings_overlapEdgeStandDown(this.__wbg_ptr)!==0}get overlapKeptDepth(){return c.rawsoftrecoverysettings_overlapKeptDepth(this.__wbg_ptr)}get overlapMultiVolume(){return c.rawsoftrecoverysettings_overlapMultiVolume(this.__wbg_ptr)!==0}get overlapNormalPush(){return c.rawsoftrecoverysettings_overlapNormalPush(this.__wbg_ptr)!==0}get overlapPatchConstraints(){return c.rawsoftrecoverysettings_overlapPatchConstraints(this.__wbg_ptr)}get overlapPatience(){return c.rawsoftrecoverysettings_overlapPatience(this.__wbg_ptr)>>>0}get overlapProgressMargin(){return c.rawsoftrecoverysettings_overlapProgressMargin(this.__wbg_ptr)}get overlapRigid(){return c.rawsoftrecoverysettings_overlapRigid(this.__wbg_ptr)!==0}get overlapSelfRegions(){return c.rawsoftrecoverysettings_overlapSelfRegions(this.__wbg_ptr)!==0}get overlapSkinVolume(){return c.rawsoftrecoverysettings_overlapSkinVolume(this.__wbg_ptr)!==0}get overlapSkipSelfTangled(){return c.rawsoftrecoverysettings_overlapSkipSelfTangled(this.__wbg_ptr)!==0}get overlapSplit(){return c.rawsoftrecoverysettings_overlapSplit(this.__wbg_ptr)>>>0}get recoveryPace(){return c.rawsoftrecoverysettings_recoveryPace(this.__wbg_ptr)}get selfCrossingDetection(){return c.rawsoftrecoverysettings_selfCrossingDetection(this.__wbg_ptr)!==0}get selfStandDown(){return c.rawsoftrecoverysettings_selfStandDown(this.__wbg_ptr)!==0}set authoredVelocityMargin(t){c.rawsoftrecoverysettings_set_authoredVelocityMargin(this.__wbg_ptr,t)}set crossBodyDetection(t){c.rawsoftrecoverysettings_set_crossBodyDetection(this.__wbg_ptr,t)}set crossBodyExpelGate(t){c.rawsoftrecoverysettings_set_crossBodyExpelGate(this.__wbg_ptr,t)}set crossingRepulsionGuide(t){c.rawsoftrecoverysettings_set_crossingRepulsionGuide(this.__wbg_ptr,t)}set crossingRepulsionSelfGuide(t){c.rawsoftrecoverysettings_set_crossingRepulsionSelfGuide(this.__wbg_ptr,t)}set crossingRepulsion(t){c.rawsoftrecoverysettings_set_crossingRepulsion(this.__wbg_ptr,t)}set detectionMotionGating(t){c.rawsoftrecoverysettings_set_detectionMotionGating(this.__wbg_ptr,t)}set edgeSpeculation(t){c.rawsoftrecoverysettings_set_edgeSpeculation(this.__wbg_ptr,t)}set edgeStandDown(t){c.rawsoftrecoverysettings_set_edgeStandDown(this.__wbg_ptr,t)}set invertedCellDetection(t){c.rawsoftrecoverysettings_set_invertedCellDetection(this.__wbg_ptr,t)}set overlapConstraintPace(t){c.rawsoftrecoverysettings_set_overlapConstraintPace(this.__wbg_ptr,t)}set overlapConstraints(t){c.rawsoftrecoverysettings_set_overlapConstraints(this.__wbg_ptr,t)}set overlapEdgeStandDown(t){c.rawsoftrecoverysettings_set_overlapEdgeStandDown(this.__wbg_ptr,t)}set overlapKeptDepth(t){c.rawsoftrecoverysettings_set_overlapKeptDepth(this.__wbg_ptr,t)}set overlapMultiVolume(t){c.rawsoftrecoverysettings_set_overlapMultiVolume(this.__wbg_ptr,t)}set overlapNormalPush(t){c.rawsoftrecoverysettings_set_overlapNormalPush(this.__wbg_ptr,t)}set overlapPatchConstraints(t){c.rawsoftrecoverysettings_set_overlapPatchConstraints(this.__wbg_ptr,t)}set overlapPatience(t){c.rawsoftrecoverysettings_set_overlapPatience(this.__wbg_ptr,t)}set overlapProgressMargin(t){c.rawsoftrecoverysettings_set_overlapProgressMargin(this.__wbg_ptr,t)}set overlapRigid(t){c.rawsoftrecoverysettings_set_overlapRigid(this.__wbg_ptr,t)}set overlapSelfRegions(t){c.rawsoftrecoverysettings_set_overlapSelfRegions(this.__wbg_ptr,t)}set overlapSkinVolume(t){c.rawsoftrecoverysettings_set_overlapSkinVolume(this.__wbg_ptr,t)}set overlapSkipSelfTangled(t){c.rawsoftrecoverysettings_set_overlapSkipSelfTangled(this.__wbg_ptr,t)}set overlapSplit(t){c.rawsoftrecoverysettings_set_overlapSplit(this.__wbg_ptr,t)}set recoveryPace(t){c.rawsoftrecoverysettings_set_recoveryPace(this.__wbg_ptr,t)}set selfCrossingDetection(t){c.rawsoftrecoverysettings_set_selfCrossingDetection(this.__wbg_ptr,t)}set selfStandDown(t){c.rawsoftrecoverysettings_set_selfStandDown(this.__wbg_ptr,t)}};Symbol.dispose&&(Ys.prototype[Symbol.dispose]=Ys.prototype.free);var Uo=class{__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,h0.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawvhacdparameters_free(t,0)}get alpha(){return c.rawvhacdparameters_alpha(this.__wbg_ptr)}get beta(){return c.rawvhacdparameters_beta(this.__wbg_ptr)}get concavity(){return c.rawvhacdparameters_concavity(this.__wbg_ptr)}get convex_hull_approximation(){return c.rawvhacdparameters_convex_hull_approximation(this.__wbg_ptr)!==0}get convex_hull_downsampling(){return c.rawvhacdparameters_convex_hull_downsampling(this.__wbg_ptr)>>>0}get max_convex_hulls(){return c.rawvhacdparameters_max_convex_hulls(this.__wbg_ptr)>>>0}constructor(){let t=c.rawvhacdparameters_new();return this.__wbg_ptr=t,h0.register(this,this.__wbg_ptr,this),this}get plane_downsampling(){return c.rawvhacdparameters_plane_downsampling(this.__wbg_ptr)>>>0}get resolution(){return c.rawvhacdparameters_resolution(this.__wbg_ptr)>>>0}set alpha(t){c.rawvhacdparameters_set_alpha(this.__wbg_ptr,t)}set beta(t){c.rawvhacdparameters_set_beta(this.__wbg_ptr,t)}set concavity(t){c.rawvhacdparameters_set_concavity(this.__wbg_ptr,t)}set convex_hull_approximation(t){c.rawvhacdparameters_set_convex_hull_approximation(this.__wbg_ptr,t)}set convex_hull_downsampling(t){c.rawvhacdparameters_set_convex_hull_downsampling(this.__wbg_ptr,t)}set max_convex_hulls(t){c.rawvhacdparameters_set_max_convex_hulls(this.__wbg_ptr,t)}set plane_downsampling(t){c.rawvhacdparameters_set_plane_downsampling(this.__wbg_ptr,t)}set resolution(t){c.rawvhacdparameters_set_resolution(this.__wbg_ptr,t)}};Symbol.dispose&&(Uo.prototype[Symbol.dispose]=Uo.prototype.free);var G=class n{static __wrap(t){let e=Object.create(n.prototype);return e.__wbg_ptr=t,Rp.register(e,e.__wbg_ptr,e),e}__destroy_into_raw(){let t=this.__wbg_ptr;return this.__wbg_ptr=0,Rp.unregister(this),t}free(){let t=this.__destroy_into_raw();c.__wbg_rawvector_free(t,0)}constructor(t,e,i){let s=c.rawvector_new(t,e,i);return this.__wbg_ptr=s,Rp.register(this,this.__wbg_ptr,this),this}set x(t){c.rawvector_set_x(this.__wbg_ptr,t)}set y(t){c.rawvector_set_y(this.__wbg_ptr,t)}set z(t){c.rawvector_set_z(this.__wbg_ptr,t)}get x(){return c.rawvector_x(this.__wbg_ptr)}xyz(){let t=c.rawvector_xyz(this.__wbg_ptr);return n.__wrap(t)}xzy(){let t=c.rawvector_xzy(this.__wbg_ptr);return n.__wrap(t)}get y(){return c.rawvector_y(this.__wbg_ptr)}yxz(){let t=c.rawvector_yxz(this.__wbg_ptr);return n.__wrap(t)}yzx(){let t=c.rawvector_yzx(this.__wbg_ptr);return n.__wrap(t)}get z(){return c.rawvector_z(this.__wbg_ptr)}static zero(){let t=c.rawvector_zero();return n.__wrap(t)}zxy(){let t=c.rawvector_zxy(this.__wbg_ptr);return n.__wrap(t)}zyx(){let t=c.rawvector_zyx(this.__wbg_ptr);return n.__wrap(t)}};Symbol.dispose&&(G.prototype[Symbol.dispose]=G.prototype.free);var pp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawbroadphase_free(n,1))),zg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawccdsolver_free(n,1))),kg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcharactercollision_free(n,1))),_p=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcolliderset_free(n,1))),Hg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcollidershapecasthit_free(n,1))),Vg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcontactforceevent_free(n,1))),Gg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcontactmanifold_free(n,1))),Wg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawcontactpair_free(n,1))),Xg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawconvexmeshdata_free(n,1))),qg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawdebugrenderpipeline_free(n,1))),Yg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawdeserializedworld_free(n,1))),jg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawdynamicraycastvehiclecontroller_free(n,1))),$g=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_raweventqueue_free(n,1))),Jg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawgenericjoint_free(n,1))),mp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawimpulsejointset_free(n,1))),gp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawintegrationparameters_free(n,1))),wp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawislandmanager_free(n,1))),Zg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawkinematiccharactercontroller_free(n,1))),bp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawmultibodyjointset_free(n,1))),yp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawnarrowphase_free(n,1))),Kg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawphysicspipeline_free(n,1))),Qg=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawpidcontroller_free(n,1))),t0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawpointcolliderprojection_free(n,1))),e0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawpointprojection_free(n,1))),i0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawraycolliderhit_free(n,1))),n0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawraycolliderintersection_free(n,1))),s0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawrayintersection_free(n,1))),vp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawrigidbodyset_free(n,1))),xp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawrotation_free(n,1)));typeof FinalizationRegistry>"u"||new FinalizationRegistry((n=>c.__wbg_rawsdpmatrix3_free(n,1)));var r0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawserializationpipeline_free(n,1))),o0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawshape_free(n,1))),a0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawshapecasthit_free(n,1))),l0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawshapecontact_free(n,1))),Sp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawsoftbodybuilder_free(n,1))),Mp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawsoftbodymaterial_free(n,1))),Ep=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawsoftbodyset_free(n,1))),c0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawsoftbodytearevent_free(n,1))),Tp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawsoftrecoverysettings_free(n,1))),h0=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawvhacdparameters_free(n,1))),Rp=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry((n=>c.__wbg_rawvector_free(n,1)));function ei(n){Sl===ht.length&&ht.push(ht.length+1);let t=Sl;return Sl=ht[t],ht[t]=n,t}function A(n,t){if(!(n instanceof t))throw new Error(`expected instance of ${t.name}`)}function _t(n){if(dt==1)throw new Error("out of js stack");return ht[--dt]=n,dt}function ss(n,t){return n>>>=0,m0().subarray(n/4,n/4+t)}function _0(n,t){return n>>>=0,(function(){return yl!==null&&yl.byteLength!==0||(yl=new Int32Array(c.memory.buffer)),yl})().subarray(n/4,n/4+t)}function fi(n,t){return n>>>=0,w0().subarray(n/4,n/4+t)}function u0(n,t){return n>>>=0,b0().subarray(n/1,n/1+t)}var gr=null;function pt(){return(gr===null||gr.buffer.detached===!0||gr.buffer.detached===void 0&&gr.buffer!==c.memory.buffer)&&(gr=new DataView(c.memory.buffer)),gr}var wl=null;function m0(){return wl!==null&&wl.byteLength!==0||(wl=new Float32Array(c.memory.buffer)),wl}var bl=null,yl=null;function g0(n,t){return(function(e,i){return Ap+=i,Ap>=2146435072&&(vu=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),vu.decode(),Ap=i),vu.decode(b0().subarray(e,e+i))})(n>>>0,t)}var vl=null;function w0(){return vl!==null&&vl.byteLength!==0||(vl=new Uint32Array(c.memory.buffer)),vl}var xl=null;function b0(){return xl!==null&&xl.byteLength!==0||(xl=new Uint8Array(c.memory.buffer)),xl}function Le(n){return ht[n]}function Cp(n,t){try{return n.apply(this,t)}catch(e){c.__wbindgen_export(ei(e))}}var ht=new Array(1024).fill(void 0);ht.push(void 0,null,!0,!1);var Sl=ht.length;function Ot(n){return n==null}function $e(n,t){let e=t(4*n.length,4)>>>0;return w0().set(n,e/4),Zt=n.length,e}function ii(n,t){let e=t(4*n.length,4)>>>0;return m0().set(n,e/4),Zt=n.length,e}var dt=1024;function xu(n){let t=Le(n);return(function(e){e<1028||(ht[e]=Sl,Sl=e)})(n),t}var vu=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});vu.decode();var Ap=0,c,Zt=0;async function HM(n){if(c!==void 0)return c;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL("rapier_wasm3d_bg.wasm","<deleted>"));let t=(function(){return{__proto__:null,"./rapier_wasm3d_bg.js":{__proto__:null,__wbg___wbindgen_boolean_get_5b446f51afd21013:function(r){let o=Le(r),a=typeof o=="boolean"?o:void 0;return Ot(a)?16777215:a?1:0},__wbg___wbindgen_is_function_1f9d30630b8b1d3d:function(r){return typeof Le(r)=="function"},__wbg___wbindgen_is_undefined_8865fb403f8fe9d8:function(r){return Le(r)===void 0},__wbg___wbindgen_number_get_2e0e7dee9f701a71:function(r,o){let a=Le(o),l=typeof a=="number"?a:void 0;pt().setFloat64(r+8,Ot(l)?0:l,!0),pt().setInt32(r+0,!Ot(l),!0)},__wbg___wbindgen_throw_41e9ee4f547fc59a:function(r,o){throw new Error(g0(r,o))},__wbg_bind_e7f12e49a3040c89:function(r,o,a,l){return ei(Le(r).bind(Le(o),Le(a),Le(l)))},__wbg_call_1875a20c43a36133:function(){return Cp((function(r,o,a,l){return ei(Le(r).call(Le(o),Le(a),Le(l)))}),arguments)},__wbg_call_187d372bd5fdd4aa:function(){return Cp((function(r,o,a){return ei(Le(r).call(Le(o),Le(a)))}),arguments)},__wbg_call_939a2607c4484b0b:function(){return Cp((function(r,o,a,l,h){return ei(Le(r).call(Le(o),Le(a),Le(l),Le(h)))}),arguments)},__wbg_length_58572db4c38f3c3e:function(r){return Le(r).length},__wbg_length_7f3c00c40364105e:function(r){return Le(r).length},__wbg_new_from_slice_9a868026ffa4208a:function(r,o){return ei(new Uint8Array(u0(r,o)))},__wbg_new_with_length_cc0362bfe8499e5a:function(r){return ei(new Float32Array(r>>>0))},__wbg_now_e7c6795a7f81e10f:function(r){return Le(r).now()},__wbg_performance_3fcf6e32a7e1ed0a:function(r){return ei(Le(r).performance)},__wbg_prototypesetcall_bc27214492979395:function(r,o,a){Uint8Array.prototype.set.call(u0(r,o),Le(a))},__wbg_rawcontactforceevent_new:function(r){return ei(Ml.__wrap(r))},__wbg_rawraycolliderintersection_new:function(r){return ei(No.__wrap(r))},__wbg_rawshape_unwrap:function(r){return ge.__unwrap(Le(r))},__wbg_rawsoftbodytearevent_new:function(r){return ei(xr.__wrap(r))},__wbg_set_070bd465f1c195a4:function(r,o,a){Le(r).set(ss(o,a))},__wbg_set_index_3a9fd81ba7ece0c0:function(r,o,a){Le(r)[o>>>0]=a},__wbg_static_accessor_GLOBAL_266715b9d96ba635:function(){let r=typeof global>"u"?null:global;return Ot(r)?0:ei(r)},__wbg_static_accessor_GLOBAL_THIS_10fb7dc1ae063179:function(){let r=typeof globalThis>"u"?null:globalThis;return Ot(r)?0:ei(r)},__wbg_static_accessor_SELF_0b583911f537483a:function(){let r=typeof self>"u"?null:self;return Ot(r)?0:ei(r)},__wbg_static_accessor_WINDOW_d7f903d1508cbdc4:function(){let r=typeof window>"u"?null:window;return Ot(r)?0:ei(r)},__wbindgen_generic_0000000000000001:function(r){return ei(r)},__wbindgen_object_clone_ref:function(r){return ei(Le(r))},__wbindgen_object_drop_ref:function(r){xu(r)}}}})();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));let{instance:e,module:i}=await(async function(s,r){if(typeof Response=="function"&&s instanceof Response){if(!s.ok)throw new Error(`failed to fetch Wasm: ${s.status} ${s.statusText} fetching '${s.url}'`);if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(s,r)}catch(a){if(!(function(l){switch(l){case"basic":case"cors":case"default":return!0}return!1})(s.type)||s.headers.get("Content-Type")==="application/wasm")throw a;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a)}let o=await s.arrayBuffer();return await WebAssembly.instantiate(o,r)}{let o=await WebAssembly.instantiate(s,r);return o instanceof WebAssembly.Instance?{instance:o,module:s}:o}})(await n,t);return(function(s,r){return c=s.exports,gr=null,wl=null,bl=null,yl=null,vl=null,xl=null,c})(e)}var Y=new Float32Array(16),Su=class{constructor(t,e,i){this.x=t,this.y=e,this.z=i}},D=class n{static new(t,e,i){return new Su(t,e,i)}static intoRaw(t){return new G(t.x,t.y,t.z)}static zeros(){return n.new(0,0,0)}static fromBuffer(t,e){return t?(e!=null||(e=n.zeros()),e.x=t[0],e.y=t[1],e.z=t[2],e):null}static fromRaw(t){if(!t)return null;let e=n.new(t.x,t.y,t.z);return t.free(),e}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z}},Ul=class{constructor(t,e,i,s){this.x=t,this.y=e,this.z=i,this.w=s}},jt=class n{static identity(){return new Ul(0,0,0,1)}static fromBuffer(t,e){return t?(e!=null||(e=n.identity()),e.x=t[0],e.y=t[1],e.z=t[2],e.w=t[3],e):null}static fromRaw(t){if(!t)return null;let e=new Ul(t.x,t.y,t.z,t.w);return t.free(),e}static intoRaw(t){return new ue(t.x,t.y,t.z,t.w)}static copy(t,e){t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w}},Bl=class{constructor(t){this.elements=t}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}},Ol=class{static fromBuffer(t,e){return t?(e!=null||(e=new Bl(t)),e.elements[0]=t[0],e.elements[1]=t[1],e.elements[2]=t[2],e.elements[3]=t[3],e.elements[4]=t[4],e.elements[5]=t[5],e):null}static fromRaw(t){let e=new Bl(t.elements());return t.free(),e}},Un,Bo,ni,Pp,Ip,Dp,Np,Lp,Mu,Eu,Fp,Up,Tu,wr,Ru,Bp,Cu,Op,Eo,xi,zp,kp,Hp,zl;(function(n){n[n.Dynamic=0]="Dynamic",n[n.Fixed=1]="Fixed",n[n.KinematicPositionBased=2]="KinematicPositionBased",n[n.KinematicVelocityBased=3]="KinematicVelocityBased",n[n.SoftFrame=4]="SoftFrame"})(Un||(Un={}));var To=class{constructor(t,e,i){this.rawSet=t,this.colliderSet=e,this.handle=i}finalizeDeserialization(t){this.colliderSet=t}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(t,e){return this.rawSet.rbLockTranslations(this.handle,t,e)}lockRotations(t,e){return this.rawSet.rbLockRotations(this.handle,t,e)}setEnabledTranslations(t,e,i,s){return this.rawSet.rbSetEnabledTranslations(this.handle,t,e,i,s)}restrictTranslations(t,e,i,s){this.setEnabledTranslations(t,e,i,s)}setEnabledRotations(t,e,i,s){return this.rawSet.rbSetEnabledRotations(this.handle,t,e,i,s)}restrictRotations(t,e,i,s){this.setEnabledRotations(t,e,i,s)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(t){this.rawSet.rbSetDominanceGroup(this.handle,t)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}additionalPgsIterations(){return this.rawSet.rbAdditionalPgsIterations(this.handle)}setAdditionalPgsIterations(t){this.rawSet.rbSetAdditionalPgsIterations(this.handle,t)}isSoftFrame(){return this.rawSet.rbIsSoftFrame(this.handle)}softBody(){let t=this.rawSet.rbSoftBody(this.handle);return t===void 0?null:t}softCluster(){let t=this.rawSet.rbSoftCluster(this.handle);return t===void 0?null:t}setAdditionalSolverIterations(t){this.rawSet.rbSetAdditionalSolverIterations(this.handle,t)}enableCcd(t){this.rawSet.rbEnableCcd(this.handle,t)}setSoftCcdPrediction(t){this.rawSet.rbSetSoftCcdPrediction(this.handle,t)}softCcdPrediction(){return this.rawSet.rbSoftCcdPrediction(this.handle)}translation(t){return this.rawSet.rbTranslation(this.handle,Y),D.fromBuffer(Y,t)}rotation(t){return this.rawSet.rbRotation(this.handle,Y),jt.fromBuffer(Y,t)}nextTranslation(t){return this.rawSet.rbNextTranslation(this.handle,Y),D.fromBuffer(Y,t)}nextRotation(t){return this.rawSet.rbNextRotation(this.handle,Y),jt.fromBuffer(Y,t)}setTranslation(t,e){this.rawSet.rbSetTranslation(this.handle,t.x,t.y,t.z,e)}setLinvel(t,e){let i=D.intoRaw(t);this.rawSet.rbSetLinvel(this.handle,i,e),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(t,e){this.rawSet.rbSetGravityScale(this.handle,t,e)}setRotation(t,e){this.rawSet.rbSetRotation(this.handle,t.x,t.y,t.z,t.w,e)}setAngvel(t,e){let i=D.intoRaw(t);this.rawSet.rbSetAngvel(this.handle,i,e),i.free()}setNextKinematicTranslation(t){this.rawSet.rbSetNextKinematicTranslation(this.handle,t.x,t.y,t.z)}setNextKinematicRotation(t){this.rawSet.rbSetNextKinematicRotation(this.handle,t.x,t.y,t.z,t.w)}linvel(t){return this.rawSet.rbLinvel(this.handle,Y),D.fromBuffer(Y,t)}velocityAtPoint(t,e){let i=D.intoRaw(t);return this.rawSet.rbVelocityAtPoint(this.handle,i,Y),i.free(),D.fromBuffer(Y,e)}angvel(t){return this.rawSet.rbAngvel(this.handle,Y),D.fromBuffer(Y,t)}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(t){return this.rawSet.rbEffectiveInvMass(this.handle,Y),D.fromBuffer(Y,t)}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(t){return this.rawSet.rbLocalCom(this.handle,Y),D.fromBuffer(Y,t)}worldCom(t){return this.rawSet.rbWorldCom(this.handle,Y),D.fromBuffer(Y,t)}invPrincipalInertia(t){return this.rawSet.rbInvPrincipalInertia(this.handle,Y),D.fromBuffer(Y,t)}principalInertia(t){return this.rawSet.rbPrincipalInertia(this.handle,Y),D.fromBuffer(Y,t)}principalInertiaLocalFrame(t){return this.rawSet.rbPrincipalInertiaLocalFrame(this.handle,Y),jt.fromBuffer(Y,t)}effectiveWorldInvInertia(t){return this.rawSet.rbEffectiveWorldInvInertia(this.handle,Y),Ol.fromBuffer(Y,t)}effectiveAngularInertia(t){return this.rawSet.rbEffectiveAngularInertia(this.handle,Y),Ol.fromBuffer(Y,t)}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(t){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,t))}setEnabled(t){this.rawSet.rbSetEnabled(this.handle,t)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(t,e){return this.rawSet.rbSetBodyType(this.handle,t,e)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(t){this.rawSet.rbSetLinearDamping(this.handle,t)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(t,e){this.rawSet.rbSetAdditionalMass(this.handle,t,e)}setAdditionalMassProperties(t,e,i,s,r){let o=D.intoRaw(e),a=D.intoRaw(i),l=jt.intoRaw(s);this.rawSet.rbSetAdditionalMassProperties(this.handle,t,o,a,l,r),o.free(),a.free(),l.free()}setAngularDamping(t){this.rawSet.rbSetAngularDamping(this.handle,t)}resetForces(t){this.rawSet.rbResetForces(this.handle,t)}resetTorques(t){this.rawSet.rbResetTorques(this.handle,t)}addForce(t,e){let i=D.intoRaw(t);this.rawSet.rbAddForce(this.handle,i,e),i.free()}applyImpulse(t,e){let i=D.intoRaw(t);this.rawSet.rbApplyImpulse(this.handle,i,e),i.free()}addTorque(t,e){let i=D.intoRaw(t);this.rawSet.rbAddTorque(this.handle,i,e),i.free()}applyTorqueImpulse(t,e){let i=D.intoRaw(t);this.rawSet.rbApplyTorqueImpulse(this.handle,i,e),i.free()}addForceAtPoint(t,e,i){let s=D.intoRaw(t),r=D.intoRaw(e);this.rawSet.rbAddForceAtPoint(this.handle,s,r,i),s.free(),r.free()}applyImpulseAtPoint(t,e,i){let s=D.intoRaw(t),r=D.intoRaw(e);this.rawSet.rbApplyImpulseAtPoint(this.handle,s,r,i),s.free(),r.free()}userForce(t){return this.rawSet.rbUserForce(this.handle,Y),D.fromBuffer(Y,t)}userTorque(t){return this.rawSet.rbUserTorque(this.handle,Y),D.fromBuffer(Y,t)}},Vp=class n{constructor(t){this.enabled=!0,this.status=t,this.translation=D.zeros(),this.rotation=jt.identity(),this.gravityScale=1,this.linvel=D.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=D.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=D.zeros(),this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=jt.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.softCcdPrediction=0,this.dominanceGroup=0,this.additionalSolverIterations=0,this.additionalPgsIterations=0}static dynamic(){return new n(Un.Dynamic)}static kinematicPositionBased(){return new n(Un.KinematicPositionBased)}static kinematicVelocityBased(){return new n(Un.KinematicVelocityBased)}static fixed(){return new n(Un.Fixed)}static newDynamic(){return new n(Un.Dynamic)}static newKinematicPositionBased(){return new n(Un.KinematicPositionBased)}static newKinematicVelocityBased(){return new n(Un.KinematicVelocityBased)}static newStatic(){return new n(Un.Fixed)}setDominanceGroup(t){return this.dominanceGroup=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setAdditionalPgsIterations(t){return this.additionalPgsIterations=t,this}setEnabled(t){return this.enabled=t,this}setTranslation(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:i},this}setRotation(t){return jt.copy(this.rotation,t),this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalMass(t){return this.mass=t,this.massOnly=!0,this}setLinvel(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:t,y:e,z:i},this}setAngvel(t){return D.copy(this.angvel,t),this}setAdditionalMassProperties(t,e,i,s){return this.mass=t,D.copy(this.centerOfMass,e),D.copy(this.principalAngularInertia,i),jt.copy(this.angularInertiaLocalFrame,s),this.massOnly=!1,this}enabledTranslations(t,e,i){return this.translationsEnabledX=t,this.translationsEnabledY=e,this.translationsEnabledZ=i,this}restrictTranslations(t,e,i){return this.enabledTranslations(t,e,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(t,e,i){return this.rotationsEnabledX=t,this.rotationsEnabledY=e,this.rotationsEnabledZ=i,this}restrictRotations(t,e,i){return this.enabledRotations(t,e,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(t){return this.linearDamping=t,this}setAngularDamping(t){return this.angularDamping=t,this}setCanSleep(t){return this.canSleep=t,this}setSleeping(t){return this.sleeping=t,this}setCcdEnabled(t){return this.ccdEnabled=t,this}setSoftCcdPrediction(t){return this.softCcdPrediction=t,this}setUserData(t){return this.userData=t,this}},Sr=class{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(t,e){let i=this.index(t);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=e}len(){return this.size}delete(t){let e=this.index(t);e<this.data.length&&(this.data[e]!=null&&(this.size-=1),this.data[e]=null)}clear(){this.data=new Array}get(t){let e=this.index(t);return e<this.data.length?this.data[e]:null}forEach(t){for(let e of this.data)e!=null&&t(e)}getAll(){return this.data.filter((t=>t!=null))}index(t){return this.fconv[0]=t,this.uconv[0]}},Au=class{constructor(t){this.raw=t||new ye,this.map=new Sr,t&&t.forEachRigidBodyHandle((e=>{this.map.set(e,new To(t,null,e))}))}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach((e=>e.finalizeDeserialization(t)))}createRigidBody(t,e){let i=D.intoRaw(e.translation),s=jt.intoRaw(e.rotation),r=D.intoRaw(e.linvel),o=D.intoRaw(e.centerOfMass),a=D.intoRaw(e.angvel),l=D.intoRaw(e.principalAngularInertia),h=jt.intoRaw(e.angularInertiaLocalFrame),u=this.raw.createRigidBody(e.enabled,i,s,e.gravityScale,e.mass,e.massOnly,o,r,a,l,h,e.translationsEnabledX,e.translationsEnabledY,e.translationsEnabledZ,e.rotationsEnabledX,e.rotationsEnabledY,e.rotationsEnabledZ,e.linearDamping,e.angularDamping,e.status,e.canSleep,e.sleeping,e.softCcdPrediction,e.ccdEnabled,e.dominanceGroup,e.additionalSolverIterations,e.additionalPgsIterations);i.free(),s.free(),r.free(),o.free(),a.free(),l.free(),h.free();let d=new To(this.raw,t,u);return d.userData=e.userData,this.map.set(u,d),d}remove(t,e,i,s,r,o){for(let a=0;a<this.raw.rbNumColliders(t);a+=1)i.unmap(this.raw.rbCollider(t,a));r.forEachJointHandleAttachedToRigidBody(t,(a=>r.unmap(a))),o.forEachJointHandleAttachedToRigidBody(t,(a=>o.unmap(a))),this.raw.remove(t,e.raw,i.raw,s.raw,r.raw,o.raw),this.map.delete(t),i.unmapRemovedColliders()}mapNewBodies(t){this.raw.forEachRigidBodyHandle((e=>{this.map.get(e)||this.map.set(e,new To(this.raw,t,e))}))}unmapRemovedBodies(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachActiveRigidBody(t,e){t.forEachActiveRigidBodyHandle((i=>{e(this.get(i))}))}getAll(){return this.map.getAll()}};(function(n){n[n.Vertex=0]="Vertex",n[n.Edge=1]="Edge",n[n.Face=2]="Face",n[n.Unknown=3]="Unknown"})(Bo||(Bo={}));var Gp=class{constructor(t,e){this.origin=t,this.dir=e}pointAt(t){return{x:this.origin.x+this.dir.x*t,y:this.origin.y+this.dir.y*t,z:this.origin.z+this.dir.z*t}}},kl=class n{constructor(t,e,i,s){this.featureType=Bo.Unknown,this.featureId=void 0,this.timeOfImpact=t,this.normal=e,s!==void 0&&(this.featureId=s),i!==void 0&&(this.featureType=i)}static fromBuffer(t,e){return t?(t.normal(Y),e!=null||(e=new n(0,D.zeros())),e.timeOfImpact=t.time_of_impact(),e.normal=D.fromBuffer(Y,e.normal),e.featureType=t.featureType(),e.featureId=t.featureId(),t.free(),e):null}},Hl=class n{constructor(t,e,i,s,r){this.featureType=Bo.Unknown,this.featureId=void 0,this.collider=t,this.timeOfImpact=e,this.normal=i,r!==void 0&&(this.featureId=r),s!==void 0&&(this.featureType=s)}static fromBuffer(t,e,i){return e?(e.normal(Y),i!=null||(i=new n(null,0,D.zeros())),i.collider=t.get(e.colliderHandle()),i.timeOfImpact=e.time_of_impact(),i.normal=D.fromBuffer(Y,i.normal),i.featureType=e.featureType(),i.featureId=e.featureId(),e.free(),i):null}},Pu=class n{constructor(t,e){this.collider=t,this.timeOfImpact=e}static fromRaw(t,e){if(!e)return null;let i=new n(t.get(e.colliderHandle()),e.timeOfImpact());return e.free(),i}},Vl=class n{constructor(t,e){this.point=t,this.isInside=e}static fromBuffer(t,e){return t?(t.point(Y),e!=null||(e=new n(D.zeros(),!1)),e.point=D.fromBuffer(Y,e.point),e.isInside=t.isInside(),t.free(),e):null}},Gl=class n{constructor(t,e,i,s,r){this.featureType=Bo.Unknown,this.featureId=void 0,this.collider=t,this.point=e,this.isInside=i,r!==void 0&&(this.featureId=r),s!==void 0&&(this.featureType=s)}static fromBuffer(t,e,i){return e?(e.point(Y),i!=null||(i=new n(null,D.zeros(),!1)),i.collider=t.get(e.colliderHandle()),i.point=D.fromBuffer(Y,i.point),i.isInside=e.isInside(),i.featureType=e.featureType(),i.featureId=e.featureId(),e.free(),i):null}},Oo=class n{constructor(t,e,i,s,r){this.time_of_impact=t,this.witness1=e,this.witness2=i,this.normal1=s,this.normal2=r}static fromBuffer(t,e,i){return e?(i!=null||(i=new n(0,D.zeros(),D.zeros(),D.zeros(),D.zeros())),i.time_of_impact=e[0],i.witness1.x=e[1],i.witness1.y=e[2],i.witness1.z=e[3],i.witness2.x=e[4],i.witness2.y=e[5],i.witness2.z=e[6],i.normal1.x=e[7],i.normal1.y=e[8],i.normal1.z=e[9],i.normal2.x=e[10],i.normal2.y=e[11],i.normal2.z=e[12],i):null}},Wl=class n extends Oo{constructor(t,e,i,s,r,o){super(e,i,s,r,o),this.collider=t}static fromBuffer(t,e,i){return e?(i!=null||(i=new n(null,0,D.zeros(),D.zeros(),D.zeros(),D.zeros())),i.collider=t,i.time_of_impact=e[0],i.witness1.x=e[1],i.witness1.y=e[2],i.witness1.z=e[3],i.witness2.x=e[4],i.witness2.y=e[5],i.witness2.z=e[6],i.normal1.x=e[7],i.normal1.y=e[8],i.normal1.z=e[9],i.normal2.x=e[10],i.normal2.y=e[11],i.normal2.z=e[12],i):null}},Iu=class{constructor(t){this.raw=t||new kn}free(){this.raw&&this.raw.free(),this.raw=void 0}castRay(t,e,i,s,r,o,a,l,h,u,d){let f=D.intoRaw(s.origin),p=D.intoRaw(s.dir),_=Pu.fromRaw(i,this.raw.castRay(t.raw,e.raw,i.raw,f,p,r,o,a,l,h,u,d));return f.free(),p.free(),_}castRayAndGetNormal(t,e,i,s,r,o,a,l,h,u,d,f){let p=D.intoRaw(s.origin),_=D.intoRaw(s.dir),b=Hl.fromBuffer(i,this.raw.castRayAndGetNormal(t.raw,e.raw,i.raw,p,_,r,o,a,l,h,u,d),f);return p.free(),_.free(),b}intersectionsWithRay(t,e,i,s,r,o,a,l,h,u,d,f){let p=D.intoRaw(s.origin),_=D.intoRaw(s.dir);this.raw.intersectionsWithRay(t.raw,e.raw,i.raw,p,_,r,o,(b=>a(Hl.fromBuffer(i,b))),l,h,u,d,f),p.free(),_.free()}intersectionWithShape(t,e,i,s,r,o,a,l,h,u,d){let f=D.intoRaw(s),p=jt.intoRaw(r),_=o.intoRaw(),b=this.raw.intersectionWithShape(t.raw,e.raw,i.raw,f,p,_,a,l,h,u,d);return f.free(),p.free(),_.free(),b}projectPoint(t,e,i,s,r,o,a,l,h,u,d){let f=D.intoRaw(s),p=Gl.fromBuffer(i,this.raw.projectPoint(t.raw,e.raw,i.raw,f,r,o,a,l,h,u),d);return f.free(),p}projectPointAndGetFeature(t,e,i,s,r,o,a,l,h,u){let d=D.intoRaw(s),f=Gl.fromBuffer(i,this.raw.projectPointAndGetFeature(t.raw,e.raw,i.raw,d,r,o,a,l,h),u);return d.free(),f}intersectionsWithPoint(t,e,i,s,r,o,a,l,h,u){let d=D.intoRaw(s);this.raw.intersectionsWithPoint(t.raw,e.raw,i.raw,d,r,o,a,l,h,u),d.free()}castShape(t,e,i,s,r,o,a,l,h,u,d,f,p,_,b,g){let m=D.intoRaw(s),x=jt.intoRaw(r),C=D.intoRaw(o),y=a.intoRaw(),T=this.raw.castShape(t.raw,e.raw,i.raw,m,x,C,y,l,h,u,d,f,p,_,b),S=null;if(T){let R=T.colliderHandle();T.getComponents(Y),S=Wl.fromBuffer(i.get(R),Y,g),T.free()}return m.free(),x.free(),C.free(),y.free(),S}intersectionsWithShape(t,e,i,s,r,o,a,l,h,u,d,f){let p=D.intoRaw(s),_=jt.intoRaw(r),b=o.intoRaw();this.raw.intersectionsWithShape(t.raw,e.raw,i.raw,p,_,b,a,l,h,u,d,f),p.free(),_.free(),b.free()}collidersWithAabbIntersectingAabb(t,e,i,s,r,o){let a=D.intoRaw(s),l=D.intoRaw(r);this.raw.collidersWithAabbIntersectingAabb(t.raw,e.raw,i.raw,a,l,o),a.free(),l.free()}},Du=class{constructor(t){this.raw=t||new si,this.tempManifold=new Nu(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(t,e){this.raw.contact_pairs_with(t,e)}intersectionPairsWith(t,e){this.raw.intersection_pairs_with(t,e)}contactPair(t,e,i,s){let r=this.raw.contact_pair(t,e);if(r){let o=r.collider1()!=t,a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.bodies=i,this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&s(this.tempManifold,o),this.tempManifold.free();r.free()}}intersectionPair(t,e){return this.raw.intersection_pair(t,e)}},Nu=class{constructor(t,e){this.raw=t,this.bodies=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(t){return this.raw.normal(Y),D.fromBuffer(Y,t)}localNormal1(t){return this.raw.local_n1(Y),D.fromBuffer(Y,t)}localNormal2(t){return this.raw.local_n2(Y),D.fromBuffer(Y,t)}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(t,e){return this.raw.contact_local_p1(t,Y)?D.fromBuffer(Y,e):null}localContactPoint2(t,e){return this.raw.contact_local_p2(t,Y)?D.fromBuffer(Y,e):null}contactDist(t){return this.raw.contact_dist(t)}contactFid1(t){return this.raw.contact_fid1(t)}contactFid2(t){return this.raw.contact_fid2(t)}contactImpulse(t){return this.raw.contact_impulse(t)}contactTangentImpulseX(t){return this.raw.contact_tangent_impulse_x(t)}contactTangentImpulseY(t){return this.raw.contact_tangent_impulse_y(t)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(t,e){return this.raw.solver_contact_point(this.bodies.raw,t,Y)?D.fromBuffer(Y,e):null}solverContactDist(t){return this.raw.solver_contact_dist(t)}friction(){return this.raw.friction()}restitution(){return this.raw.restitution()}solverContactTangentVelocity(t,e){return this.raw.solver_contact_tangent_velocity(t,Y),D.fromBuffer(Y,e)}},zo=class n{constructor(t,e,i,s,r){this.distance=t,this.point1=e,this.point2=i,this.normal1=s,this.normal2=r}static fromBuffer(t,e){return t?(t.getComponents(Y),t.free(),e!=null||(e=new n(0,D.zeros(),D.zeros(),D.zeros(),D.zeros())),e.distance=Y[0],e.point1.x=Y[1],e.point1.y=Y[2],e.point1.z=Y[3],e.point2.x=Y[4],e.point2.y=Y[5],e.point2.z=Y[6],e.normal1.x=Y[7],e.normal1.y=Y[8],e.normal1.z=Y[9],e.normal2.x=Y[10],e.normal2.y=Y[11],e.normal2.z=Y[12],e):null}},Je=class{static fromRaw(t,e){let i=t.coShapeType(e);if(i===me.Compound)return $o.fromRawShape(t.coShape(e));let s,r,o,a,l,h;switch(i){case me.Ball:return new ko(t.coRadius(e));case me.Cuboid:return t.coHalfExtents(e,Y),new Ho(Y[0],Y[1],Y[2]);case me.RoundCuboid:return s=t.coRoundRadius(e),t.coHalfExtents(e,Y),new Vo(Y[0],Y[1],Y[2],s);case me.Capsule:return a=t.coHalfHeight(e),l=t.coRadius(e),new Go(a,l);case me.Segment:return r=t.coVertices(e),new Wo(D.new(r[0],r[1],r[2]),D.new(r[3],r[4],r[5]));case me.Polyline:return r=t.coVertices(e),o=t.coIndices(e),new Yo(r,o,t.coPolylineFlags(e));case me.Triangle:return r=t.coVertices(e),new Xo(D.new(r[0],r[1],r[2]),D.new(r[3],r[4],r[5]),D.new(r[6],r[7],r[8]));case me.RoundTriangle:return r=t.coVertices(e),s=t.coRoundRadius(e),new qo(D.new(r[0],r[1],r[2]),D.new(r[3],r[4],r[5]),D.new(r[6],r[7],r[8]),s);case me.HalfSpace:return t.coHalfspaceNormal(e,Y),h=D.fromBuffer(Y),new Xl(h);case me.Voxels:let u=t.coVoxelData(e),d=t.coVoxelSize(e);return new jo(u,d);case me.TriMesh:r=t.coVertices(e),o=t.coIndices(e);let f=t.coTriMeshFlags(e);return new Jo(r,o,f);case me.HeightField:let p=t.coHeightfieldHeights(e);t.coHeightfieldScale(e,Y);let _={x:Y[0],y:Y[1],z:Y[2]},b=t.coHeightfieldNRows(e),g=t.coHeightfieldNCols(e),m=t.coHeightFieldFlags(e);return new Zo(b,g,p,_,m);case me.ConvexPolyhedron:return r=t.coVertices(e),o=t.coIndices(e),new Mr(r,o);case me.RoundConvexPolyhedron:return r=t.coVertices(e),o=t.coIndices(e),s=t.coRoundRadius(e),new Er(r,o,s);case me.Cylinder:return a=t.coHalfHeight(e),l=t.coRadius(e),new Ko(a,l);case me.RoundCylinder:return a=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new Qo(a,l,s);case me.Cone:return a=t.coHalfHeight(e),l=t.coRadius(e),new ta(a,l);case me.RoundCone:return a=t.coHalfHeight(e),l=t.coRadius(e),s=t.coRoundRadius(e),new ea(a,l,s);default:throw new Error("unknown shape type: "+i)}}static fromRawShape(t){if(!t)return null;let e,i,s,r,o,a,l,h=t.shapeType();try{switch(h){case me.Ball:return new ko(t.radius());case me.Cuboid:return e=D.fromRaw(t.halfExtents()),new Ho(e.x,e.y,e.z);case me.RoundCuboid:return e=D.fromRaw(t.halfExtents()),i=t.roundRadius(),new Vo(e.x,e.y,e.z,i);case me.Capsule:return o=t.halfHeight(),a=t.radius(),new Go(o,a);case me.Segment:return s=t.vertices(),new Wo(D.new(s[0],s[1],s[2]),D.new(s[3],s[4],s[5]));case me.Polyline:return s=t.vertices(),r=t.indices(),new Yo(s,r,t.polylineFlags());case me.Triangle:return s=t.vertices(),new Xo(D.new(s[0],s[1],s[2]),D.new(s[3],s[4],s[5]),D.new(s[6],s[7],s[8]));case me.RoundTriangle:return s=t.vertices(),i=t.roundRadius(),new qo(D.new(s[0],s[1],s[2]),D.new(s[3],s[4],s[5]),D.new(s[6],s[7],s[8]),i);case me.HalfSpace:return l=D.fromRaw(t.halfspaceNormal()),new Xl(l);case me.Voxels:let u=t.voxelData(),d=D.fromRaw(t.voxelSize());return new jo(u,d);case me.TriMesh:s=t.vertices(),r=t.indices();let f=t.triMeshFlags();return new Jo(s,r,f);case me.HeightField:let p=D.fromRaw(t.heightfieldScale()),_=t.heightfieldHeights(),b=t.heightfieldNRows(),g=t.heightfieldNCols(),m=t.heightFieldFlags();return new Zo(b,g,_,p,m);case me.ConvexPolyhedron:{let x=t.convexMeshData();if(!x)throw new Error("Failed to compute the convex hull of a convex polyhedron shape.");return s=x.vertices,r=x.indices,x.free(),new Mr(s,r)}case me.RoundConvexPolyhedron:{let x=t.convexMeshData();if(!x)throw new Error("Failed to compute the convex hull of a convex polyhedron shape.");return s=x.vertices,r=x.indices,x.free(),i=t.roundRadius(),new Er(s,r,i)}case me.Cylinder:return o=t.halfHeight(),a=t.radius(),new Ko(o,a);case me.RoundCylinder:return o=t.halfHeight(),a=t.radius(),i=t.roundRadius(),new Qo(o,a,i);case me.Cone:return o=t.halfHeight(),a=t.radius(),new ta(o,a);case me.RoundCone:return o=t.halfHeight(),a=t.radius(),i=t.roundRadius(),new ea(o,a,i);case me.Compound:return $o.fromRawShape(t);default:throw new Error("unknown shape type: "+h)}}finally{h!==me.Compound&&t.free()}}castShape(t,e,i,s,r,o,a,l,h,u,d){let f=D.intoRaw(t),p=jt.intoRaw(e),_=D.intoRaw(i),b=D.intoRaw(r),g=jt.intoRaw(o),m=D.intoRaw(a),x=this.intoRaw(),C=s.intoRaw(),y=x.castShape(f,p,_,C,b,g,m,l,h,u),T=null;return y&&(y.getComponents(Y),T=Oo.fromBuffer(null,Y,d),y.free()),f.free(),p.free(),_.free(),b.free(),g.free(),m.free(),x.free(),C.free(),T}intersectsShape(t,e,i,s,r){let o=D.intoRaw(t),a=jt.intoRaw(e),l=D.intoRaw(s),h=jt.intoRaw(r),u=this.intoRaw(),d=i.intoRaw(),f=u.intersectsShape(o,a,d,l,h);return o.free(),a.free(),l.free(),h.free(),u.free(),d.free(),f}contactShape(t,e,i,s,r,o,a){let l=D.intoRaw(t),h=jt.intoRaw(e),u=D.intoRaw(s),d=jt.intoRaw(r),f=this.intoRaw(),p=i.intoRaw(),_=zo.fromBuffer(f.contactShape(l,h,p,u,d,o),a);return l.free(),h.free(),u.free(),d.free(),f.free(),p.free(),_}containsPoint(t,e,i){let s=D.intoRaw(t),r=jt.intoRaw(e),o=D.intoRaw(i),a=this.intoRaw(),l=a.containsPoint(s,r,o);return s.free(),r.free(),o.free(),a.free(),l}projectPoint(t,e,i,s,r){let o=D.intoRaw(t),a=jt.intoRaw(e),l=D.intoRaw(i),h=this.intoRaw(),u=Vl.fromBuffer(h.projectPoint(o,a,l,s),r);return o.free(),a.free(),l.free(),h.free(),u}intersectsRay(t,e,i,s){let r=D.intoRaw(e),o=jt.intoRaw(i),a=D.intoRaw(t.origin),l=D.intoRaw(t.dir),h=this.intoRaw(),u=h.intersectsRay(r,o,a,l,s);return r.free(),o.free(),a.free(),l.free(),h.free(),u}castRay(t,e,i,s,r){let o=D.intoRaw(e),a=jt.intoRaw(i),l=D.intoRaw(t.origin),h=D.intoRaw(t.dir),u=this.intoRaw(),d=u.castRay(o,a,l,h,s,r);return o.free(),a.free(),l.free(),h.free(),u.free(),d}castRayAndGetNormal(t,e,i,s,r,o){let a=D.intoRaw(e),l=jt.intoRaw(i),h=D.intoRaw(t.origin),u=D.intoRaw(t.dir),d=this.intoRaw(),f=kl.fromBuffer(d.castRayAndGetNormal(a,l,h,u,s,r),o);return a.free(),l.free(),h.free(),u.free(),d.free(),f}};(function(n){n[n.Ball=0]="Ball",n[n.Cuboid=1]="Cuboid",n[n.Capsule=2]="Capsule",n[n.Segment=3]="Segment",n[n.Polyline=4]="Polyline",n[n.Triangle=5]="Triangle",n[n.TriMesh=6]="TriMesh",n[n.HeightField=7]="HeightField",n[n.Compound=8]="Compound",n[n.ConvexPolyhedron=9]="ConvexPolyhedron",n[n.Cylinder=10]="Cylinder",n[n.Cone=11]="Cone",n[n.RoundCuboid=12]="RoundCuboid",n[n.RoundTriangle=13]="RoundTriangle",n[n.RoundCylinder=14]="RoundCylinder",n[n.RoundCone=15]="RoundCone",n[n.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",n[n.HalfSpace=17]="HalfSpace",n[n.Voxels=18]="Voxels"})(ni||(ni={})),(function(n){n[n.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(Pp||(Pp={})),(function(n){n[n.DEFORMABLE=2]="DEFORMABLE"})(Ip||(Ip={})),(function(n){n[n.FIX_INTERNAL_EDGES=1]="FIX_INTERNAL_EDGES"})(Dp||(Dp={})),(function(n){n[n.DELETE_BAD_TOPOLOGY_TRIANGLES=4]="DELETE_BAD_TOPOLOGY_TRIANGLES",n[n.ORIENTED=8]="ORIENTED",n[n.MERGE_DUPLICATE_VERTICES=16]="MERGE_DUPLICATE_VERTICES",n[n.DELETE_DEGENERATE_TRIANGLES=32]="DELETE_DEGENERATE_TRIANGLES",n[n.DELETE_DUPLICATE_TRIANGLES=64]="DELETE_DUPLICATE_TRIANGLES",n[n.FIX_INTERNAL_EDGES=144]="FIX_INTERNAL_EDGES",n[n.DEFORMABLE=256]="DEFORMABLE",n[n.FIX_INTERNAL_EDGES_TWO_SIDED=656]="FIX_INTERNAL_EDGES_TWO_SIDED"})(Np||(Np={}));var ko=class extends Je{constructor(t){super(),this.type=ni.Ball,this.radius=t}intoRaw(){return ge.ball(this.radius)}},Xl=class extends Je{constructor(t){super(),this.type=ni.HalfSpace,this.normal=t}intoRaw(){let t=D.intoRaw(this.normal),e=ge.halfspace(t);return t.free(),e}},Ho=class extends Je{constructor(t,e,i){super(),this.type=ni.Cuboid,this.halfExtents=D.new(t,e,i)}intoRaw(){return ge.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}},Vo=class extends Je{constructor(t,e,i,s){super(),this.type=ni.RoundCuboid,this.halfExtents=D.new(t,e,i),this.borderRadius=s}intoRaw(){return ge.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}},Go=class extends Je{constructor(t,e){super(),this.type=ni.Capsule,this.halfHeight=t,this.radius=e}intoRaw(){return ge.capsule(this.halfHeight,this.radius)}},Wo=class extends Je{constructor(t,e){super(),this.type=ni.Segment,this.a=t,this.b=e}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),i=ge.segment(t,e);return t.free(),e.free(),i}},Xo=class extends Je{constructor(t,e,i){super(),this.type=ni.Triangle,this.a=t,this.b=e,this.c=i}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),i=D.intoRaw(this.c),s=ge.triangle(t,e,i);return t.free(),e.free(),i.free(),s}},qo=class extends Je{constructor(t,e,i,s){super(),this.type=ni.RoundTriangle,this.a=t,this.b=e,this.c=i,this.borderRadius=s}intoRaw(){let t=D.intoRaw(this.a),e=D.intoRaw(this.b),i=D.intoRaw(this.c),s=ge.roundTriangle(t,e,i,this.borderRadius);return t.free(),e.free(),i.free(),s}},Yo=class extends Je{constructor(t,e,i){super(),this.type=ni.Polyline,this.vertices=t,this.indices=e??new Uint32Array(0),this.flags=i??0}intoRaw(){return ge.polyline(this.vertices,this.indices,this.flags)}},jo=class extends Je{constructor(t,e){super(),this.type=ni.Voxels,this.data=t,this.voxelSize=e}intoRaw(){let t,e=D.intoRaw(this.voxelSize);return t=this.data instanceof Int32Array?ge.voxels(e,this.data):ge.voxelsFromPoints(e,this.data),e.free(),t}},$o=class n extends Je{constructor(t,e,i,s){if(super(),this.type=ni.Compound,t.length!==e.length||t.length!==i.length)throw new Error("shapes, positions, and rotations arrays must have the same length");if(t.length===0)throw new Error("a compound shape must contain at least one shape");if(t.some((r=>r.type===ni.Compound)))throw new Error("nested compound shapes are not allowed");this.shapes=t,this.positions=e,this.rotations=i,this.flags=s??0}static fromRawShape(t){try{let e=t.compoundLen();if(e==null)throw new Error("Expected a raw compound shape.");let i=new Array(e),s=new Array(e),r=new Array(e);for(let o=0;o<e;o++)i[o]=Je.fromRawShape(t.compoundShape(o)),s[o]=D.fromRaw(t.compoundTranslation(o)),r[o]=jt.fromRaw(t.compoundRotation(o));return new n(i,s,r,t.compoundFlags())}finally{t.free()}}intoRaw(){let t=this.shapes.map((s=>s.intoRaw())),e=new Float32Array(3*this.positions.length);this.positions.forEach(((s,r)=>{e[3*r]=s.x,e[3*r+1]=s.y,e[3*r+2]=s.z}));let i=new Float32Array(4*this.rotations.length);return this.rotations.forEach(((s,r)=>{i[4*r]=s.x,i[4*r+1]=s.y,i[4*r+2]=s.z,i[4*r+3]=s.w})),ge.compound(t,e,i,this.flags)}},Jo=class extends Je{constructor(t,e,i){super(),this.type=ni.TriMesh,this.vertices=t,this.indices=e,this.flags=i}intoRaw(){return ge.trimesh(this.vertices,this.indices,this.flags)}},Mr=class extends Je{constructor(t,e){super(),this.type=ni.ConvexPolyhedron,this.vertices=t,this.indices=e}intoRaw(){return this.indices?ge.convexMesh(this.vertices,this.indices):ge.convexHull(this.vertices)}},Er=class extends Je{constructor(t,e,i){super(),this.type=ni.RoundConvexPolyhedron,this.vertices=t,this.indices=e,this.borderRadius=i}intoRaw(){return this.indices?ge.roundConvexMesh(this.vertices,this.indices,this.borderRadius):ge.roundConvexHull(this.vertices,this.borderRadius)}},Zo=class extends Je{constructor(t,e,i,s,r){super(),this.type=ni.HeightField,this.nrows=t,this.ncols=e,this.heights=i,this.scale=s,this.flags=r}intoRaw(){let t=D.intoRaw(this.scale),e=ge.heightfield(this.nrows,this.ncols,this.heights,t,this.flags);return t.free(),e}},Ko=class extends Je{constructor(t,e){super(),this.type=ni.Cylinder,this.halfHeight=t,this.radius=e}intoRaw(){return ge.cylinder(this.halfHeight,this.radius)}},Qo=class extends Je{constructor(t,e,i){super(),this.type=ni.RoundCylinder,this.borderRadius=i,this.halfHeight=t,this.radius=e}intoRaw(){return ge.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}},ta=class extends Je{constructor(t,e){super(),this.type=ni.Cone,this.halfHeight=t,this.radius=e}intoRaw(){return ge.cone(this.halfHeight,this.radius)}},ea=class extends Je{constructor(t,e,i){super(),this.type=ni.RoundCone,this.halfHeight=t,this.radius=e,this.borderRadius=i}intoRaw(){return ge.roundCone(this.halfHeight,this.radius,this.borderRadius)}},Lu=class{constructor(t){this.raw=t||new Dl}free(){this.raw&&this.raw.free(),this.raw=void 0}step(t,e,i,s,r,o,a,l,h,u,d,f,p){let _=D.intoRaw(t);f?this.raw.stepWithEvents(_,e.raw,i.raw,s.raw,r.raw,o.raw,a.raw,l.raw,h.raw,u.raw,d.raw,f.raw,p,p?p.filterContactPair:null,p?p.filterIntersectionPair:null):this.raw.step(_,e.raw,i.raw,s.raw,r.raw,o.raw,a.raw,l.raw,h.raw,u.raw,d.raw),_.free()}},ql=class{constructor(t){this.raw=t||new Fl}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(t,e,i,s,r,o,a,l,h,u){let d=D.intoRaw(t),f=this.raw.serializeAll(d,e.raw,i.raw,s.raw,r.raw,o.raw,a.raw,l.raw,h.raw,u.raw);return d.free(),f}deserializeAll(t){return Hu.fromRaw(this.raw.deserializeAll(t))}},Fu=class{constructor(t,e){this.vertices=t,this.colors=e}},Uu=class{constructor(t){this.raw=t||new Cl}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(t,e,i,s,r,o,a,l){this.raw.render(t.raw,e.raw,i.raw,s.raw,r.raw,o.raw,a,e.castClosure(l)),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}},Bu=class{},Ou=class{constructor(t,e,i,s,r,o){this.params=e,this.bodies=r,this.colliders=o,this.broadPhase=i,this.narrowPhase=s,this.raw=new Il(t),this.rawCharacterCollision=new Co,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(t){let e=D.intoRaw(t);return this.raw.setUp(e)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(t){this._applyImpulsesToDynamicBodies=t}characterMass(){return this._characterMass}setCharacterMass(t){this._characterMass=t}offset(){return this.raw.offset()}setOffset(t){this.raw.setOffset(t)}normalNudgeFactor(){return this.raw.normalNudgeFactor()}setNormalNudgeFactor(t){this.raw.setNormalNudgeFactor(t)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(t){this.raw.setSlideEnabled(t)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(t,e,i){this.raw.enableAutostep(t,e,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(t){this.raw.setMaxSlopeClimbAngle(t)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(t){this.raw.setMinSlopeSlideAngle(t)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(t){this.raw.enableSnapToGround(t)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(t,e,i,s,r){let o=D.intoRaw(e);this.raw.computeColliderMovement(this.params.dt,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,t.handle,o,this._applyImpulsesToDynamicBodies,this._characterMass,i,s,this.colliders.castClosure(r)),o.free()}computedMovement(t){return this.raw.computedMovement(Y),D.fromBuffer(Y,t)}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(t,e){if(this.raw.computedCollision(t,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return e=e??new Bu,i.translationDeltaApplied(Y),e.translationDeltaApplied=D.fromBuffer(Y,e.translationDeltaApplied),i.translationDeltaRemaining(Y),e.translationDeltaRemaining=D.fromBuffer(Y,e.translationDeltaRemaining),e.toi=i.toi(),i.worldWitness1(Y),e.witness1=D.fromBuffer(Y,e.witness1),i.worldWitness2(Y),e.witness2=D.fromBuffer(Y,e.witness2),i.worldNormal1(Y),e.normal1=D.fromBuffer(Y,e.normal1),i.worldNormal2(Y),e.normal2=D.fromBuffer(Y,e.normal2),e.collider=this.colliders.get(i.handle()),e}return null}};(function(n){n[n.None=0]="None",n[n.LinX=1]="LinX",n[n.LinY=2]="LinY",n[n.LinZ=4]="LinZ",n[n.AngX=8]="AngX",n[n.AngY=16]="AngY",n[n.AngZ=32]="AngZ",n[n.AllLin=7]="AllLin",n[n.AllAng=56]="AllAng",n[n.All=63]="All"})(Lp||(Lp={}));var zu=class{constructor(t,e,i,s,r,o){this.params=t,this.bodies=e,this.raw=new Nl(i,s,r,o)}free(){this.raw&&this.raw.free(),this.raw=void 0}setKp(t,e){this.raw.set_kp(t,e)}setKi(t,e){this.raw.set_kp(t,e)}setKd(t,e){this.raw.set_kp(t,e)}setAxes(t){this.raw.set_axes_mask(t)}resetIntegrals(){this.raw.reset_integrals()}applyLinearCorrection(t,e,i){let s=D.intoRaw(e),r=D.intoRaw(i);this.raw.apply_linear_correction(this.params.dt,this.bodies.raw,t.handle,s,r),s.free(),r.free()}applyAngularCorrection(t,e,i){let s=jt.intoRaw(e),r=D.intoRaw(i);this.raw.apply_angular_correction(this.params.dt,this.bodies.raw,t.handle,s,r),s.free(),r.free()}linearCorrection(t,e,i,s){let r=D.intoRaw(e),o=D.intoRaw(i);return this.raw.linear_correction(this.params.dt,this.bodies.raw,t.handle,r,o,Y),r.free(),o.free(),D.fromBuffer(Y,s)}angularCorrection(t,e,i,s){let r=jt.intoRaw(e),o=D.intoRaw(i);return this.raw.angular_correction(this.params.dt,this.bodies.raw,t.handle,r,o,Y),r.free(),o.free(),D.fromBuffer(Y,s)}},ku=class{constructor(t,e,i,s,r){this.raw=new Pl(t.handle),this.broadPhase=e,this.narrowPhase=i,this.bodies=s,this.colliders=r,this._chassis=t}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(t,e,i,s){this.raw.update_vehicle(t,this.broadPhase.raw,this.narrowPhase.raw,this.bodies.raw,this.colliders.raw,e,i,this.colliders.castClosure(s))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(t){this.raw.set_index_up_axis(t)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(t){this.raw.set_index_forward_axis(t)}addWheel(t,e,i,s,r){let o=D.intoRaw(t),a=D.intoRaw(e),l=D.intoRaw(i);this.raw.add_wheel(o,a,l,s,r),o.free(),a.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(t,e){return this.raw.wheel_chassis_connection_point_cs(t,Y)?D.fromBuffer(Y,e):null}setWheelChassisConnectionPointCs(t,e){let i=D.intoRaw(e);this.raw.set_wheel_chassis_connection_point_cs(t,i),i.free()}wheelSuspensionRestLength(t){return this.raw.wheel_suspension_rest_length(t)}setWheelSuspensionRestLength(t,e){this.raw.set_wheel_suspension_rest_length(t,e)}wheelMaxSuspensionTravel(t){return this.raw.wheel_max_suspension_travel(t)}setWheelMaxSuspensionTravel(t,e){this.raw.set_wheel_max_suspension_travel(t,e)}wheelRadius(t){return this.raw.wheel_radius(t)}setWheelRadius(t,e){this.raw.set_wheel_radius(t,e)}wheelSuspensionStiffness(t){return this.raw.wheel_suspension_stiffness(t)}setWheelSuspensionStiffness(t,e){this.raw.set_wheel_suspension_stiffness(t,e)}wheelSuspensionCompression(t){return this.raw.wheel_suspension_compression(t)}setWheelSuspensionCompression(t,e){this.raw.set_wheel_suspension_compression(t,e)}wheelSuspensionRelaxation(t){return this.raw.wheel_suspension_relaxation(t)}setWheelSuspensionRelaxation(t,e){this.raw.set_wheel_suspension_relaxation(t,e)}wheelMaxSuspensionForce(t){return this.raw.wheel_max_suspension_force(t)}setWheelMaxSuspensionForce(t,e){this.raw.set_wheel_max_suspension_force(t,e)}wheelBrake(t){return this.raw.wheel_brake(t)}setWheelBrake(t,e){this.raw.set_wheel_brake(t,e)}wheelSteering(t){return this.raw.wheel_steering(t)}setWheelSteering(t,e){this.raw.set_wheel_steering(t,e)}wheelEngineForce(t){return this.raw.wheel_engine_force(t)}setWheelEngineForce(t,e){this.raw.set_wheel_engine_force(t,e)}wheelDirectionCs(t,e){return this.raw.wheel_direction_cs(t,Y)?D.fromBuffer(Y,e):null}setWheelDirectionCs(t,e){let i=D.intoRaw(e);this.raw.set_wheel_direction_cs(t,i),i.free()}wheelAxleCs(t,e){return this.raw.wheel_axle_cs(t,Y)?D.fromBuffer(Y,e):null}setWheelAxleCs(t,e){let i=D.intoRaw(e);this.raw.set_wheel_axle_cs(t,i),i.free()}wheelFrictionSlip(t){return this.raw.wheel_friction_slip(t)}setWheelFrictionSlip(t,e){this.raw.set_wheel_friction_slip(t,e)}wheelSideFrictionStiffness(t){return this.raw.wheel_side_friction_stiffness(t)}setWheelSideFrictionStiffness(t,e){this.raw.set_wheel_side_friction_stiffness(t,e)}wheelRotation(t){return this.raw.wheel_rotation(t)}wheelForwardImpulse(t){return this.raw.wheel_forward_impulse(t)}wheelSideImpulse(t){return this.raw.wheel_side_impulse(t)}wheelSuspensionForce(t){return this.raw.wheel_suspension_force(t)}wheelContactNormal(t,e){return this.raw.wheel_contact_normal_ws(t,Y)?D.fromBuffer(Y,e):null}wheelContactPoint(t,e){return this.raw.wheel_contact_point_ws(t,Y)?D.fromBuffer(Y,e):null}wheelSuspensionLength(t){return this.raw.wheel_suspension_length(t)}wheelHardPoint(t,e){return this.raw.wheel_hard_point_ws(t,Y)?D.fromBuffer(Y,e):null}wheelIsInContact(t){return this.raw.wheel_is_in_contact(t)}wheelGroundObject(t){return this.colliders.get(this.raw.wheel_ground_object(t))}},Hu=class n{constructor(t,e,i,s,r,o,a,l,h,u,d,f,p,_){this.gravity=t,this.integrationParameters=new Yu(e),this.islands=new ld(i),this.broadPhase=new Iu(s),this.narrowPhase=new Du(r),this.bodies=new Au(o),this.colliders=new Wu(a),this.impulseJoints=new ed(h),this.multibodyJoints=new od(u),this.softBodies=new cd(l),this.ccdSolver=new ad(d),this.physicsPipeline=new Lu(f),this.serializationPipeline=new ql(p),this.debugRenderPipeline=new Uu(_),this.characterControllers=new Set,this.pidControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies),this.softBodies.finalizeDeserialization(this.bodies,this.colliders)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.softBodies.free(),this.ccdSolver.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach((t=>t.free())),this.pidControllers.forEach((t=>t.free())),this.vehicleControllers.forEach((t=>t.free())),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.softBodies=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.pidControllers=void 0,this.vehicleControllers=void 0}static fromRaw(t){return t?new n(D.fromRaw(t.takeGravity()),t.takeIntegrationParameters(),t.takeIslandManager(),t.takeBroadPhase(),t.takeNarrowPhase(),t.takeBodies(),t.takeColliders(),t.takeSoftBodies(),t.takeImpulseJoints(),t.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(t){return new ql().deserializeAll(t)}debugRender(t,e){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints,this.narrowPhase,t,e),new Fu(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(t,e){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints,this.ccdSolver,t,e),this.mapNewSoftBodies()}mapNewSoftBodies(){this.softBodies.mapNewSoftBodies(this.bodies,this.colliders),this.bodies.mapNewBodies(this.colliders),this.colliders.mapNewColliders(this.bodies),this.bodies.unmapRemovedBodies(),this.colliders.unmapRemovedColliders(),this.impulseJoints.unmapRemovedJoints(),this.multibodyJoints.unmapRemovedJoints()}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}get timestep(){return this.integrationParameters.dt}set timestep(t){this.integrationParameters.dt=t}get lengthUnit(){return this.integrationParameters.lengthUnit}set lengthUnit(t){this.integrationParameters.lengthUnit=t}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(t){this.integrationParameters.numSolverIterations=t}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(t){this.integrationParameters.numInternalPgsIterations=t}get maxCcdSubsteps(){return this.integrationParameters.maxCcdSubsteps}set maxCcdSubsteps(t){this.integrationParameters.maxCcdSubsteps=t}createRigidBody(t){return this.bodies.createRigidBody(this.colliders,t)}createCharacterController(t){let e=new Ou(t,this.integrationParameters,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.characterControllers.add(e),e}removeCharacterController(t){this.characterControllers.delete(t),t.free()}createPidController(t,e,i,s){let r=new zu(this.integrationParameters,this.bodies,t,e,i,s);return this.pidControllers.add(r),r}removePidController(t){this.pidControllers.delete(t),t.free()}createVehicleController(t){let e=new ku(t,this.broadPhase,this.narrowPhase,this.bodies,this.colliders);return this.vehicleControllers.add(e),e}removeVehicleController(t){this.vehicleControllers.delete(t),t.free()}createCollider(t,e){let i=e?e.handle:void 0;return this.colliders.createCollider(this.bodies,t,i)}createSoftBody(t){return this.softBodies.createSoftBody(this.bodies,this.colliders,t)}createDeformableCollider(t,e,i){return this.colliders.createDeformableCollider(this.bodies,this.softBodies,t,e,i.handle)}addSoftBodyCluster(t,e){return this.softBodies.addCluster(t.handle,e,this.bodies,this.colliders)}removeSoftBodyCluster(t,e){return this.softBodies.removeCluster(t.handle,e,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}tearSoftBody(t,e,i){return this.softBodies.tear(t.handle,e,i,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}cutSoftBody(t,e){return this.softBodies.cut(t.handle,e,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}wakeUpSoftBody(t,e){this.softBodies.wakeUp(t.handle,this.bodies,e)}createImpulseJoint(t,e,i,s){return this.impulseJoints.createJoint(this.bodies,t,e.handle,i.handle,s)}createMultibodyJoint(t,e,i,s){return this.multibodyJoints.createJoint(t,e.handle,i.handle,s)}getRigidBody(t){return this.bodies.get(t)}getCollider(t){return this.colliders.get(t)}getImpulseJoint(t){return this.impulseJoints.get(t)}getMultibodyJoint(t){return this.multibodyJoints.get(t)}getSoftBody(t){return this.softBodies.get(t)}removeRigidBody(t){this.bodies&&this.bodies.remove(t.handle,this.islands,this.colliders,this.softBodies,this.impulseJoints,this.multibodyJoints)}removeSoftBody(t){this.softBodies&&this.softBodies.remove(t.handle,this.islands,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(t,e){this.colliders&&this.colliders.remove(t.handle,this.islands,this.bodies,this.softBodies,e)}removeImpulseJoint(t,e){this.impulseJoints&&this.impulseJoints.remove(t.handle,e)}removeMultibodyJoint(t,e){this.impulseJoints&&this.multibodyJoints.remove(t.handle,e)}forEachCollider(t){this.colliders.forEach(t)}forEachRigidBody(t){this.bodies.forEach(t)}forEachActiveRigidBody(t){this.bodies.forEachActiveRigidBody(this.islands,t)}forEachSoftBody(t){this.softBodies.forEach(t)}castRay(t,e,i,s,r,o,a,l){return this.broadPhase.castRay(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r,o?o.handle:null,a?a.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(t,e,i,s,r,o,a,l){return this.broadPhase.castRayAndGetNormal(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r,o?o.handle:null,a?a.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(t,e,i,s,r,o,a,l,h){this.broadPhase.intersectionsWithRay(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r,o,a?a.handle:null,l?l.handle:null,this.colliders.castClosure(h))}intersectionWithShape(t,e,i,s,r,o,a,l){let h=this.broadPhase.intersectionWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r,o?o.handle:null,a?a.handle:null,this.colliders.castClosure(l));return h!=null?this.colliders.get(h):null}projectPoint(t,e,i,s,r,o,a){return this.broadPhase.projectPoint(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r?r.handle:null,o?o.handle:null,this.colliders.castClosure(a))}projectPointAndGetFeature(t,e,i,s,r,o){return this.broadPhase.projectPointAndGetFeature(this.narrowPhase,this.bodies,this.colliders,t,e,i,s?s.handle:null,r?r.handle:null,this.colliders.castClosure(o))}intersectionsWithPoint(t,e,i,s,r,o,a){this.broadPhase.intersectionsWithPoint(this.narrowPhase,this.bodies,this.colliders,t,this.colliders.castClosure(e),i,s,r?r.handle:null,o?o.handle:null,this.colliders.castClosure(a))}castShape(t,e,i,s,r,o,a,l,h,u,d,f){return this.broadPhase.castShape(this.narrowPhase,this.bodies,this.colliders,t,e,i,s,r,o,a,l,h,u?u.handle:null,d?d.handle:null,this.colliders.castClosure(f))}intersectionsWithShape(t,e,i,s,r,o,a,l,h){this.broadPhase.intersectionsWithShape(this.narrowPhase,this.bodies,this.colliders,t,e,i,this.colliders.castClosure(s),r,o,a?a.handle:null,l?l.handle:null,this.colliders.castClosure(h))}collidersWithAabbIntersectingAabb(t,e,i){this.broadPhase.collidersWithAabbIntersectingAabb(this.narrowPhase,this.bodies,this.colliders,t,e,this.colliders.castClosure(i))}contactPairsWith(t,e){this.narrowPhase.contactPairsWith(t.handle,this.colliders.castClosure(e))}intersectionPairsWith(t,e){this.narrowPhase.intersectionPairsWith(t.handle,this.colliders.castClosure(e))}contactPair(t,e,i){this.narrowPhase.contactPair(t.handle,e.handle,this.bodies,i)}intersectionPair(t,e){return this.narrowPhase.intersectionPair(t.handle,e.handle)}set profilerEnabled(t){this.physicsPipeline.raw.set_profiler_enabled(t)}get profilerEnabled(){return this.physicsPipeline.raw.is_profiler_enabled()}timingStep(){return this.physicsPipeline.raw.timing_step()}timingCollisionDetection(){return this.physicsPipeline.raw.timing_collision_detection()}timingBroadPhase(){return this.physicsPipeline.raw.timing_broad_phase()}timingNarrowPhase(){return this.physicsPipeline.raw.timing_narrow_phase()}timingSolver(){return this.physicsPipeline.raw.timing_solver()}timingVelocityAssembly(){return this.physicsPipeline.raw.timing_velocity_assembly()}timingVelocityResolution(){return this.physicsPipeline.raw.timing_velocity_resolution()}timingVelocityUpdate(){return this.physicsPipeline.raw.timing_velocity_update()}timingVelocityWriteback(){return this.physicsPipeline.raw.timing_velocity_writeback()}timingCcd(){return this.physicsPipeline.raw.timing_ccd()}timingCcdToiComputation(){return this.physicsPipeline.raw.timing_ccd_toi_computation()}timingCcdBroadPhase(){return this.physicsPipeline.raw.timing_ccd_broad_phase()}timingCcdNarrowPhase(){return this.physicsPipeline.raw.timing_ccd_narrow_phase()}timingCcdSolver(){return this.physicsPipeline.raw.timing_ccd_solver()}timingIslandConstruction(){return this.physicsPipeline.raw.timing_island_construction()}timingUserChanges(){return this.physicsPipeline.raw.timing_user_changes()}};(function(n){n[n.NONE=0]="NONE",n[n.COLLISION_EVENTS=1]="COLLISION_EVENTS",n[n.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(Mu||(Mu={}));var Vu=class{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(t){return this.raw.total_force(Y),D.fromBuffer(Y,t)}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(t){return this.raw.max_force_direction(Y),D.fromBuffer(Y,t)}maxForceMagnitude(){return this.raw.max_force_magnitude()}},Wp=class{constructor(t,e){this.raw=e||new Po(t)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(t){this.raw.drainCollisionEvents(t)}drainContactForceEvents(t){let e=new Vu;this.raw.drainContactForceEvents((i=>{e.raw=i,t(e),e.free()}))}drainSoftBodyTearEvents(t){let e=new Yl;this.raw.drainSoftBodyTearEvents((i=>{e.raw=i,t(e),e.free()}))}clear(){this.raw.clear()}};(function(n){n[n.NONE=0]="NONE",n[n.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",n[n.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(Eu||(Eu={})),(function(n){n[n.EMPTY=0]="EMPTY",n[n.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(Fp||(Fp={})),(function(n){n[n.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",n[n.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",n[n.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",n[n.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",n[n.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",n[n.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",n[n.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",n[n.ONLY_FIXED=6]="ONLY_FIXED"})(Up||(Up={})),(function(n){n[n.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",n[n.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",n[n.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",n[n.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",n[n.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",n[n.FIXED_FIXED=32]="FIXED_FIXED",n[n.DEFAULT=15]="DEFAULT",n[n.ALL=60943]="ALL"})(Tu||(Tu={}));var br=class{constructor(t,e,i,s){this.colliderSet=t,this.handle=e,this._parent=i,this._shape=s}finalizeDeserialization(t){this.handle!=null&&(this._parent=t.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=Je.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}clearShapeCache(){this._shape=null}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(t){return this.colliderSet.raw.coTranslation(this.handle,Y),D.fromBuffer(Y,t)}translationWrtParent(t){return this.colliderSet.raw.coTranslationWrtParent(this.handle,Y)?D.fromBuffer(Y,t):null}rotation(t){return this.colliderSet.raw.coRotation(this.handle,Y),jt.fromBuffer(Y,t)}rotationWrtParent(t){return this.colliderSet.raw.coRotationWrtParent(this.handle,Y)?jt.fromBuffer(Y,t):null}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(t){this.colliderSet.raw.coSetSensor(this.handle,t)}setShape(t){let e=t.intoRaw();this.colliderSet.raw.coSetShape(this.handle,e),e.free(),this._shape=t}setEnabled(t){this.colliderSet.raw.coSetEnabled(this.handle,t)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(t){this.colliderSet.raw.coSetRestitution(this.handle,t)}setFriction(t){this.colliderSet.raw.coSetFriction(this.handle,t)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(t){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,t)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(t){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,t)}setCollisionGroups(t){this.colliderSet.raw.coSetCollisionGroups(this.handle,t)}setSolverGroups(t){this.colliderSet.raw.coSetSolverGroups(this.handle,t)}contactSkin(){return this.colliderSet.raw.coContactSkin(this.handle)}setContactSkin(t){return this.colliderSet.raw.coSetContactSkin(this.handle,t)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(t){this.colliderSet.raw.coSetActiveHooks(this.handle,t)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(t){this.colliderSet.raw.coSetActiveEvents(this.handle,t)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(t){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,t)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(t){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,t)}setDensity(t){this.colliderSet.raw.coSetDensity(this.handle,t)}setMass(t){this.colliderSet.raw.coSetMass(this.handle,t)}setMassProperties(t,e,i,s){let r=D.intoRaw(e),o=D.intoRaw(i),a=jt.intoRaw(s);this.colliderSet.raw.coSetMassProperties(this.handle,t,r,o,a),r.free(),o.free(),a.free()}setTranslation(t){this.colliderSet.raw.coSetTranslation(this.handle,t.x,t.y,t.z)}setTranslationWrtParent(t){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,t.x,t.y,t.z)}setRotation(t){this.colliderSet.raw.coSetRotation(this.handle,t.x,t.y,t.z,t.w)}setRotationWrtParent(t){this.colliderSet.raw.coSetRotationWrtParent(this.handle,t.x,t.y,t.z,t.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(t){return this.colliderSet.raw.coHalfExtents(this.handle,Y)?D.fromBuffer(Y,t):null}setHalfExtents(t){let e=D.intoRaw(t);this.colliderSet.raw.coSetHalfExtents(this.handle,e)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(t){this.colliderSet.raw.coSetRadius(this.handle,t)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(t){this.colliderSet.raw.coSetRoundRadius(this.handle,t)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(t){this.colliderSet.raw.coSetHalfHeight(this.handle,t)}setVoxel(t,e,i,s){this.colliderSet.raw.coSetVoxel(this.handle,t,e,i,s),this._shape=null}propagateVoxelChange(t,e,i,s,r,o,a){this.colliderSet.raw.coPropagateVoxelChange(this.handle,t.handle,e,i,s,r,o,a),this._shape=null}combineVoxelStates(t,e,i,s){this.colliderSet.raw.coCombineVoxelStates(this.handle,t.handle,e,i,s),this._shape=null}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(t){return this.colliderSet.raw.coHeightfieldScale(this.handle,Y)?D.fromBuffer(Y,t):null}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}softBody(){let t=this.colliderSet.raw.coSoftBody(this.handle);return t===void 0?null:t}isDeformable(){return this.colliderSet.raw.coIsDeformable(this.handle)}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(t){let e=D.intoRaw(t),i=this.colliderSet.raw.coContainsPoint(this.handle,e);return e.free(),i}projectPoint(t,e,i){let s=D.intoRaw(t),r=Vl.fromBuffer(this.colliderSet.raw.coProjectPoint(this.handle,s,e),i);return s.free(),r}intersectsRay(t,e){let i=D.intoRaw(t.origin),s=D.intoRaw(t.dir),r=this.colliderSet.raw.coIntersectsRay(this.handle,i,s,e);return i.free(),s.free(),r}castShape(t,e,i,s,r,o,a,l,h){let u=D.intoRaw(t),d=D.intoRaw(i),f=jt.intoRaw(s),p=D.intoRaw(r),_=e.intoRaw(),b=this.colliderSet.raw.coCastShape(this.handle,u,_,d,f,p,o,a,l),g=null;return b&&(b.getComponents(Y),g=Oo.fromBuffer(null,Y,h),b.free()),u.free(),d.free(),f.free(),p.free(),_.free(),g}castCollider(t,e,i,s,r,o,a){let l=D.intoRaw(t),h=D.intoRaw(i),u=this.colliderSet.raw.coCastCollider(this.handle,l,e.handle,h,s,r,o),d=null;if(u){let f=u.colliderHandle();u.getComponents(Y),d=Wl.fromBuffer(this.colliderSet.get(f),Y,a),u.free()}return l.free(),h.free(),d}intersectsShape(t,e,i){let s=D.intoRaw(e),r=jt.intoRaw(i),o=t.intoRaw(),a=this.colliderSet.raw.coIntersectsShape(this.handle,o,s,r);return s.free(),r.free(),o.free(),a}contactShape(t,e,i,s,r){let o=D.intoRaw(e),a=jt.intoRaw(i),l=t.intoRaw(),h=zo.fromBuffer(this.colliderSet.raw.coContactShape(this.handle,l,o,a,s),r);return o.free(),a.free(),l.free(),h}contactCollider(t,e,i){return zo.fromBuffer(this.colliderSet.raw.coContactCollider(this.handle,t.handle,e),i)}castRay(t,e,i){let s=D.intoRaw(t.origin),r=D.intoRaw(t.dir),o=this.colliderSet.raw.coCastRay(this.handle,s,r,e,i);return s.free(),r.free(),o}castRayAndGetNormal(t,e,i,s){let r=D.intoRaw(t.origin),o=D.intoRaw(t.dir),a=kl.fromBuffer(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,o,e,i),s);return r.free(),o.free(),a}};(function(n){n[n.Density=0]="Density",n[n.Mass=1]="Mass",n[n.MassProps=2]="MassProps"})(wr||(wr={}));var Gu=class n{constructor(t){this.enabled=!0,this.shape=t,this.massPropsMode=wr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=jt.identity(),this.translation=D.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=zl.Average,this.restitutionCombineRule=zl.Average,this.activeCollisionTypes=Tu.DEFAULT,this.activeEvents=Mu.NONE,this.activeHooks=Eu.NONE,this.mass=0,this.centerOfMass=D.zeros(),this.contactForceEventThreshold=0,this.contactSkin=0,this.principalAngularInertia=D.zeros(),this.angularInertiaLocalFrame=jt.identity()}static ball(t){let e=new ko(t);return new n(e)}static capsule(t,e){let i=new Go(t,e);return new n(i)}static segment(t,e){let i=new Wo(t,e);return new n(i)}static triangle(t,e,i){let s=new Xo(t,e,i);return new n(s)}static roundTriangle(t,e,i,s){let r=new qo(t,e,i,s);return new n(r)}static polyline(t,e,i){let s=new Yo(t,e,i);return new n(s)}static voxels(t,e){let i=new jo(t,e);return new n(i)}static trimesh(t,e,i){let s=new Jo(t,e,i);return new n(s)}static cuboid(t,e,i){let s=new Ho(t,e,i);return new n(s)}static roundCuboid(t,e,i,s){let r=new Vo(t,e,i,s);return new n(r)}static heightfield(t,e,i,s,r){let o=new Zo(t,e,i,s,r);return new n(o)}static cylinder(t,e){let i=new Ko(t,e);return new n(i)}static roundCylinder(t,e,i){let s=new Qo(t,e,i);return new n(s)}static cone(t,e){let i=new ta(t,e);return new n(i)}static roundCone(t,e,i){let s=new ea(t,e,i);return new n(s)}static convexHull(t){let e=new Mr(t,null);return new n(e)}static convexMesh(t,e){let i=new Mr(t,e);return new n(i)}static roundConvexHull(t,e){let i=new Er(t,null,e);return new n(i)}static roundConvexMesh(t,e,i){let s=new Er(t,e,i);return new n(s)}static compound(t,e,i,s){let r=new $o(t,e,i,s);return new n(r)}static convexDecomposition(t,e,i,s){let r,o=s??0;if(i){let l=new Uo;i.alpha!==void 0&&(l.alpha=i.alpha),i.beta!==void 0&&(l.beta=i.beta),i.concavity!==void 0&&(l.concavity=i.concavity),i.planeDownsampling!==void 0&&(l.plane_downsampling=i.planeDownsampling),i.convexHullDownsampling!==void 0&&(l.convex_hull_downsampling=i.convexHullDownsampling),i.maxConvexHulls!==void 0&&(l.max_convex_hulls=i.maxConvexHulls),i.resolution!==void 0&&(l.resolution=i.resolution),i.convexHullApproximation!==void 0&&(l.convex_hull_approximation=i.convexHullApproximation),r=ge.convexDecompositionWithParams(t,e,l,o),l.free()}else r=ge.convexDecomposition(t,e,o);if(!r)return null;let a=Je.fromRawShape(r);return new n(a)}setTranslation(t,e,i){if(typeof t!="number"||typeof e!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:t,y:e,z:i},this}setRotation(t){return jt.copy(this.rotation,t),this}setSensor(t){return this.isSensor=t,this}setEnabled(t){return this.enabled=t,this}setContactSkin(t){return this.contactSkin=t,this}setDensity(t){return this.massPropsMode=wr.Density,this.density=t,this}setMass(t){return this.massPropsMode=wr.Mass,this.mass=t,this}setMassProperties(t,e,i,s){return this.massPropsMode=wr.MassProps,this.mass=t,D.copy(this.centerOfMass,e),D.copy(this.principalAngularInertia,i),jt.copy(this.angularInertiaLocalFrame,s),this}setRestitution(t){return this.restitution=t,this}setFriction(t){return this.friction=t,this}setFrictionCombineRule(t){return this.frictionCombineRule=t,this}setRestitutionCombineRule(t){return this.restitutionCombineRule=t,this}setCollisionGroups(t){return this.collisionGroups=t,this}setSolverGroups(t){return this.solverGroups=t,this}setActiveHooks(t){return this.activeHooks=t,this}setActiveEvents(t){return this.activeEvents=t,this}setActiveCollisionTypes(t){return this.activeCollisionTypes=t,this}setContactForceEventThreshold(t){return this.contactForceEventThreshold=t,this}},Wu=class{constructor(t){this.raw=t||new Ie,this.map=new Sr,t&&t.forEachColliderHandle((e=>{this.map.set(e,new br(this,e,null))}))}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(t){return e=>t?t(this.get(e)):void 0}finalizeDeserialization(t){this.map.forEach((e=>e.finalizeDeserialization(t)))}createCollider(t,e,i){let s=i!=null&&i!=null;if(s&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let r=e.shape.intoRaw(),o=D.intoRaw(e.translation),a=jt.intoRaw(e.rotation),l=D.intoRaw(e.centerOfMass),h=D.intoRaw(e.principalAngularInertia),u=jt.intoRaw(e.angularInertiaLocalFrame),d=this.raw.createCollider(e.enabled,r,o,a,e.massPropsMode,e.mass,l,h,u,e.density,e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin,s,s?i:0,t.raw);r.free(),o.free(),a.free(),l.free(),h.free(),u.free();let f=s?t.get(i):null,p=new br(this,d,f,e.shape);return this.map.set(d,p),p}createDeformableCollider(t,e,i,s,r){let o=i.shape.intoRaw(),a=D.intoRaw(i.translation),l=jt.intoRaw(i.rotation),h=D.intoRaw(i.centerOfMass),u=D.intoRaw(i.principalAngularInertia),d=jt.intoRaw(i.angularInertiaLocalFrame),f=this.raw.createDeformableCollider(i.enabled,o,a,l,i.massPropsMode,i.mass,h,u,d,i.density,i.friction,i.restitution,i.frictionCombineRule,i.restitutionCombineRule,i.isSensor,i.collisionGroups,i.solverGroups,i.activeCollisionTypes,i.activeHooks,i.activeEvents,i.contactForceEventThreshold,i.contactSkin,s.rawMode(),s.particles,s.eps,s.selfContacts,r,t.raw,e.raw);if(o.free(),a.free(),l.free(),h.free(),u.free(),d.free(),f===void 0)return null;let p=t.get(r),_=new br(this,f,p,i.shape);return this.map.set(f,_),_}mapNewColliders(t){this.raw.forEachColliderHandle((e=>{if(!this.map.get(e)){let i=this.raw.coParent(e),s=i===void 0?null:t.get(i);this.map.set(e,new br(this,e,s))}}))}unmapRemovedColliders(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}remove(t,e,i,s,r){this.raw.remove(t,e.raw,i.raw,s.raw,r),this.unmap(t)}unmap(t){this.map.delete(t)}get(t){return this.map.get(t)}len(){return this.map.len()}contains(t){return this.get(t)!=null}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}};(function(n){n[n.Volume=0]="Volume",n[n.Corotational=1]="Corotational",n[n.NeoHookean=2]="NeoHookean"})(Ru||(Ru={})),(function(n){n[n.Both=0]="Both",n[n.Compression=1]="Compression",n[n.Tension=2]="Tension"})(Bp||(Bp={})),(function(n){n[n.Constraints=0]="Constraints",n[n.Fem=1]="Fem"})(Cu||(Cu={})),(function(n){n[n.Keep=0]="Keep",n[n.StandDown=1]="StandDown",n[n.AlongNormal=2]="AlongNormal"})(Op||(Op={}));var Xu=class n{constructor(){n.copyFromRaw(this,new Ys,!0)}static fromRaw(t){let e=new n;return n.copyFromRaw(e,t,!0),e}static copyFromRaw(t,e,i){t.authoredVelocityMargin=e.authoredVelocityMargin,t.edgeSpeculation=e.edgeSpeculation,t.invertedCellDetection=e.invertedCellDetection,t.selfCrossingDetection=e.selfCrossingDetection,t.detectionMotionGating=e.detectionMotionGating,t.crossBodyDetection=e.crossBodyDetection,t.selfStandDown=e.selfStandDown,t.crossBodyExpelGate=e.crossBodyExpelGate,t.edgeStandDown=e.edgeStandDown,t.crossingRepulsion=e.crossingRepulsion,t.crossingRepulsionGuide=e.crossingRepulsionGuide,t.crossingRepulsionSelfGuide=e.crossingRepulsionSelfGuide,t.overlapConstraints=e.overlapConstraints,t.overlapRigid=e.overlapRigid,t.overlapSkipSelfTangled=e.overlapSkipSelfTangled,t.overlapEdgeStandDown=e.overlapEdgeStandDown,t.overlapSkinVolume=e.overlapSkinVolume,t.overlapSelfRegions=e.overlapSelfRegions,t.overlapNormalPush=e.overlapNormalPush,t.overlapMultiVolume=e.overlapMultiVolume,t.recoveryPace=e.recoveryPace,t.overlapConstraintPace=e.overlapConstraintPace,t.overlapKeptDepth=e.overlapKeptDepth,t.overlapProgressMargin=e.overlapProgressMargin,t.overlapSplit=e.overlapSplit,t.overlapPatience=e.overlapPatience,t.overlapPatchConstraints=e.overlapPatchConstraints,i&&e.free()}intoRaw(){let t=new Ys;return t.authoredVelocityMargin=this.authoredVelocityMargin,t.edgeSpeculation=this.edgeSpeculation,t.invertedCellDetection=this.invertedCellDetection,t.selfCrossingDetection=this.selfCrossingDetection,t.detectionMotionGating=this.detectionMotionGating,t.crossBodyDetection=this.crossBodyDetection,t.selfStandDown=this.selfStandDown,t.crossBodyExpelGate=this.crossBodyExpelGate,t.edgeStandDown=this.edgeStandDown,t.crossingRepulsion=this.crossingRepulsion,t.crossingRepulsionGuide=this.crossingRepulsionGuide,t.crossingRepulsionSelfGuide=this.crossingRepulsionSelfGuide,t.overlapConstraints=this.overlapConstraints,t.overlapRigid=this.overlapRigid,t.overlapSkipSelfTangled=this.overlapSkipSelfTangled,t.overlapEdgeStandDown=this.overlapEdgeStandDown,t.overlapSkinVolume=this.overlapSkinVolume,t.overlapSelfRegions=this.overlapSelfRegions,t.overlapNormalPush=this.overlapNormalPush,t.overlapMultiVolume=this.overlapMultiVolume,t.recoveryPace=this.recoveryPace,t.overlapConstraintPace=this.overlapConstraintPace,t.overlapKeptDepth=this.overlapKeptDepth,t.overlapProgressMargin=this.overlapProgressMargin,t.overlapSplit=this.overlapSplit,t.overlapPatience=this.overlapPatience,t.overlapPatchConstraints=this.overlapPatchConstraints,t}};(function(n){n[n.Direct=0]="Direct",n[n.DirectByPosition=1]="DirectByPosition",n[n.Skinned=2]="Skinned"})(Eo||(Eo={}));var Xp=class n{constructor(t){this.mode=t,this.particles=new Uint32Array(0),this.eps=0,this.selfContacts=!1}static direct(t){let e=new n(Eo.Direct);return e.particles=Uint32Array.from(t),e}static directByPosition(t){let e=new n(Eo.DirectByPosition);return e.eps=t,e}static skinned(){return new n(Eo.Skinned)}setSelfContacts(t){return this.selfContacts=t,this}rawMode(){return this.mode}},qu=class n{constructor(){n.copyFromRaw(this,new zn,!0)}static uniform(t,e){let i=new n,s=zn.uniform(t,e);return n.copyFromRaw(i,s,!0),i}static fromRaw(t){let e=new n;return n.copyFromRaw(e,t,!0),e}static copyFromRaw(t,e,i){var s,r,o;t.edgeSoftness={naturalFrequency:e.edgeFrequency,dampingRatio:e.edgeDampingRatio},t.bendSoftness={naturalFrequency:e.bendFrequency,dampingRatio:e.bendDampingRatio},t.volumeSoftness={naturalFrequency:e.volumeFrequency,dampingRatio:e.volumeDampingRatio},t.shapeMatchingSoftness={naturalFrequency:e.shapeMatchingFrequency,dampingRatio:e.shapeMatchingDampingRatio},t.youngModulus=e.youngModulus,t.poissonRatio=e.poissonRatio,t.elasticDampingRatio=e.elasticDampingRatio,t.plasticYield=e.plasticYield,t.plasticCreep=e.plasticCreep,t.plasticMax=e.plasticMax,t.deformationDamping=e.deformationDamping,t.edgePlasticYield=e.edgePlasticYield,t.edgePlasticCreep=e.edgePlasticCreep,t.edgePlasticMax=e.edgePlasticMax,t.edgePlasticFlow=e.edgePlasticFlow,t.tearStrain=(s=e.tearStrain)!==null&&s!==void 0?s:null,t.tearForce=(r=e.tearForce)!==null&&r!==void 0?r:null,t.tearSmoothing=e.tearSmoothing,t.interiorStrength=e.interiorStrength,t.maxTearsPerStep=e.maxTearsPerStep,t.minPiece=(o=e.minPiece)!==null&&o!==void 0?o:null,i&&e.free()}intoRaw(){var t,e,i;let s=new zn;return s.edgeFrequency=this.edgeSoftness.naturalFrequency,s.edgeDampingRatio=this.edgeSoftness.dampingRatio,s.bendFrequency=this.bendSoftness.naturalFrequency,s.bendDampingRatio=this.bendSoftness.dampingRatio,s.volumeFrequency=this.volumeSoftness.naturalFrequency,s.volumeDampingRatio=this.volumeSoftness.dampingRatio,s.shapeMatchingFrequency=this.shapeMatchingSoftness.naturalFrequency,s.shapeMatchingDampingRatio=this.shapeMatchingSoftness.dampingRatio,s.youngModulus=this.youngModulus,s.poissonRatio=this.poissonRatio,s.elasticDampingRatio=this.elasticDampingRatio,s.plasticYield=this.plasticYield,s.plasticCreep=this.plasticCreep,s.plasticMax=this.plasticMax,s.deformationDamping=this.deformationDamping,s.edgePlasticYield=this.edgePlasticYield,s.edgePlasticCreep=this.edgePlasticCreep,s.edgePlasticMax=this.edgePlasticMax,s.edgePlasticFlow=this.edgePlasticFlow,s.tearStrain=(t=this.tearStrain)!==null&&t!==void 0?t:void 0,s.tearForce=(e=this.tearForce)!==null&&e!==void 0?e:void 0,s.tearSmoothing=this.tearSmoothing,s.interiorStrength=this.interiorStrength,s.maxTearsPerStep=this.maxTearsPerStep,s.minPiece=(i=this.minPiece)!==null&&i!==void 0?i:void 0,s}},Ro=class{constructor(t,e,i,s){this.rawSet=t,this.bodies=e,this.colliders=i,this.handle=s}finalizeDeserialization(t,e){this.bodies=t,this.colliders=e}isValid(){return this.rawSet.contains(this.handle)}topologyVersion(){return this.rawSet.sbTopologyVersion(this.handle)}numParticles(){return this.rawSet.sbNumParticles(this.handle)}particlePosition(t,e){return this.rawSet.sbParticlePosition(this.handle,t,Y),D.fromBuffer(Y,e)}particlePositions(){return this.rawSet.sbParticlePositions(this.handle)}particleVelocity(t,e){return this.rawSet.sbParticleVelocity(this.handle,t,Y),D.fromBuffer(Y,e)}particleVelocities(){return this.rawSet.sbParticleVelocities(this.handle)}particleRestPosition(t,e){return this.rawSet.sbParticleRestPosition(this.handle,t,Y),D.fromBuffer(Y,e)}particleMass(t){return this.rawSet.sbParticleMass(this.handle,t)}isParticlePinned(t){return this.rawSet.sbIsParticlePinned(this.handle,t)}isParticleOnSurface(t){return this.rawSet.sbIsParticleOnSurface(this.handle,t)}isParticleDamaged(t){return this.rawSet.sbIsParticleDamaged(this.handle,t)}setParticlePosition(t,e){let i=D.intoRaw(e);this.rawSet.sbSetParticlePosition(this.handle,t,i),i.free()}setParticleVelocity(t,e){let i=D.intoRaw(e);this.rawSet.sbSetParticleVelocity(this.handle,t,i),i.free()}setParticleKinematicTarget(t,e){let i=D.intoRaw(e);this.rawSet.sbSetParticleKinematicTarget(this.handle,t,i),i.free()}setParticlePinned(t,e){this.rawSet.sbSetParticlePinned(this.handle,t,e)}attachParticle(t,e){this.rawSet.sbAttachParticle(this.handle,t,e.handle,this.bodies.raw)}detachParticle(t){return this.rawSet.sbDetachParticle(this.handle,t)}numAttachments(){return this.rawSet.sbNumAttachments(this.handle)}attachmentParticle(t){return this.rawSet.sbAttachmentParticle(this.handle,t)}attachmentBody(t){return this.bodies.get(this.rawSet.sbAttachmentBody(this.handle,t))}numEdges(){return this.rawSet.sbNumEdges(this.handle)}edges(){return this.rawSet.sbEdges(this.handle)}edgeRestLength(t){return this.rawSet.sbEdgeRestLength(this.handle,t)}isEdgeBend(t){return this.rawSet.sbEdgeIsBend(this.handle,t)}edgeImpulse(t){return this.rawSet.sbEdgeImpulse(this.handle,t)}edgeStress(t){return this.rawSet.sbEdgeStress(this.handle,t)}edgePlasticStrain(t){return this.rawSet.sbEdgePlasticStrain(this.handle,t)}edgeTearResistance(t){return this.rawSet.sbEdgeTearResistance(this.handle,t)}numCells(){return this.rawSet.sbNumCells(this.handle)}cells(){return this.rawSet.sbCells(this.handle)}cellRestVolume(t){return this.rawSet.sbCellRestVolume(this.handle,t)}cellStress(t){return this.rawSet.sbCellStress(this.handle,t)}cellStiffnessScale(t){return this.rawSet.sbCellStiffnessScale(this.handle,t)}cellTearResistance(t){return this.rawSet.sbCellTearResistance(this.handle,t)}numDihedrals(){return this.rawSet.sbNumDihedrals(this.handle)}dihedrals(){return this.rawSet.sbDihedrals(this.handle)}dihedralRestAngle(t){return this.rawSet.sbDihedralRestAngle(this.handle,t)}boundary(){return this.rawSet.sbBoundary(this.handle)}material(){return qu.fromRaw(this.rawSet.sbMaterial(this.handle))}setMaterial(t){let e=t.intoRaw();this.rawSet.sbSetMaterial(this.handle,e),e.free()}cellModel(){return this.rawSet.sbCellModel(this.handle)}solver(){return this.rawSet.sbSolver(this.handle)}setSolver(t){this.rawSet.sbSetSolver(this.handle,t)}volumePreservationEnabled(){return this.rawSet.sbVolumePreservationEnabled(this.handle)}enableVolumePreservation(t){this.rawSet.sbEnableVolumePreservation(this.handle,t)}restVolume(){return this.rawSet.sbRestVolume(this.handle)}volume(){return this.rawSet.sbVolume(this.handle)}volumeFactor(){return this.rawSet.sbVolumeFactor(this.handle)}setVolumeFactor(t){this.rawSet.sbSetVolumeFactor(this.handle,t)}particleRadius(){return this.rawSet.sbParticleRadius(this.handle)}resetPlasticity(){this.rawSet.sbResetPlasticity(this.handle)}rootBody(){return this.bodies.get(this.rawSet.sbRootBody(this.handle))}origin(){let t=this.rawSet.sbOrigin(this.handle);return t===void 0?null:t}pieces(){return Array.from(this.rawSet.sbPieces(this.handle))}centerOfMass(t){return this.rawSet.sbCenterOfMass(this.handle,Y),D.fromBuffer(Y,t)}mass(){return this.rawSet.sbMass(this.handle)}isSleeping(){return this.rawSet.sbIsSleeping(this.handle)}wakeUp(){this.rawSet.sbWakeUp(this.handle)}isEnabled(){return this.rawSet.sbIsEnabled(this.handle)}setEnabled(t){this.rawSet.sbSetEnabled(this.handle,t)}setAdditionalPgsIterations(t){this.rawSet.sbSetAdditionalPgsIterations(this.handle,t)}linearDamping(){return this.rawSet.sbLinearDamping(this.handle)}gravityScale(){return this.rawSet.sbGravityScale(this.handle)}addForce(t,e){let i=D.intoRaw(t);this.rawSet.sbAddForce(this.handle,i,e),i.free()}addParticleForce(t,e,i){let s=D.intoRaw(e);this.rawSet.sbAddParticleForce(this.handle,t,s,i),s.free()}resetForces(t){this.rawSet.sbResetForces(this.handle,t)}applyImpulse(t,e){let i=D.intoRaw(t);this.rawSet.sbApplyImpulse(this.handle,i,e),i.free()}applyParticleImpulse(t,e,i){let s=D.intoRaw(e);this.rawSet.sbApplyParticleImpulse(this.handle,t,s,i),s.free()}applyImpulseAtPoint(t,e,i,s){let r=D.intoRaw(t),o=D.intoRaw(e);this.rawSet.sbApplyImpulseAtPoint(this.handle,r,o,i,s),r.free(),o.free()}applyRadialImpulse(t,e,i,s){let r=D.intoRaw(t);this.rawSet.sbApplyRadialImpulse(this.handle,r,e,i,s),r.free()}tearEdge(t){this.rawSet.sbTearEdge(this.handle,t)}tearCell(t){this.rawSet.sbTearCell(this.handle,t)}hasPendingTears(){return this.rawSet.sbHasPendingTears(this.handle)}numClusters(){return this.rawSet.sbNumClusters(this.handle)}isClusterLive(t){return this.rawSet.sbIsClusterLive(this.handle,t)}clusterProxy(t){let e=this.rawSet.sbClusterProxy(this.handle,t);return e===void 0?null:this.bodies.get(e)}clusterParticles(t){return this.rawSet.sbClusterParticles(this.handle,t)}clusterShapeMatchingEnabled(t){return this.rawSet.sbClusterShapeMatchingEnabled(this.handle,t)}enableClusterShapeMatching(t,e){this.rawSet.sbEnableClusterShapeMatching(this.handle,t,e)}setClusterStiffnessScale(t,e){this.rawSet.sbSetClusterStiffnessScale(this.handle,t,e)}setClusterEdgeSoftness(t,e){this.rawSet.sbSetClusterEdgeSoftness(this.handle,t,e?e.naturalFrequency:void 0,e?e.dampingRatio:void 0)}setClusterTearResistance(t,e){this.rawSet.sbSetClusterTearResistance(this.handle,t,e)}setClusterPinned(t,e){this.rawSet.sbSetClusterPinned(this.handle,t,e)}setClusterKinematicTarget(t,e,i){let s=D.intoRaw(e),r=jt.intoRaw(i);this.rawSet.sbSetClusterKinematicTarget(this.handle,t,s,r),s.free(),r.free()}numMeshes(){return this.rawSet.sbNumMeshes(this.handle)}meshCluster(t){let e=this.rawSet.sbMeshCluster(this.handle,t);return e===void 0?null:e}meshCollider(t){let e=this.rawSet.sbMeshCollider(this.handle,t);return e===void 0?null:this.colliders.get(e)}isMeshSkinned(t){return this.rawSet.sbMeshIsSkinned(this.handle,t)}meshCollisionEnabled(t){return this.rawSet.sbMeshCollisionEnabled(this.handle,t)}isMeshOriented(t){return this.rawSet.sbMeshIsOriented(this.handle,t)}meshVertices(t){return this.rawSet.sbMeshVertices(this.handle,t)}meshIndices(t){return this.rawSet.sbMeshIndices(this.handle,t)}meshOfCollider(t){let e=this.rawSet.sbMeshOfCollider(this.handle,t.handle);return e===void 0?null:e}},qp=class n{constructor(t){let e=t?Float32Array.from(t):new Float32Array(0);this.generator=()=>new en(e),this.setters=[],this.material=null,this.softness=null,this.particleMass=1,this.mass=null,this.masses=null,this.pinnedParticles=new Uint32Array(0),this.cellModel=Ru.Volume,this.solver=Cu.Constraints,this.volumePreservation=null,this.volumeFactor=1,this.shapeMatching=null,this.selfContacts=!1,this.oriented=null,this.particleRadius=null,this.surfaceCollider=Gu.ball(.05),this.skinCollision=!1,this.translation=null,this.linearDamping=0,this.gravityScale=1,this.additionalSolverIterations=0,this.additionalPgsIterations=3,this.canSleep=!0,this.dominanceGroup=0}static withGenerator(t){let e=t();if(!e)return null;e.free();let i=new n;return i.generator=t,i}static rope(t,e,i){return n.withGenerator((()=>{let s=D.intoRaw(t),r=D.intoRaw(e),o=en.rope(s,r,i);return s.free(),r.free(),o}))}static volumetric(t,e,i,s=!1){return n.withGenerator((()=>en.volumetric(t,e,i,s)))}static trimesh(t,e){return n.withGenerator((()=>en.trimesh(t,e)))}static cloth(t,e,i,s,r){return n.withGenerator((()=>{let o=D.intoRaw(t),a=D.intoRaw(e),l=D.intoRaw(i),h=en.cloth(o,a,l,s,r);return o.free(),a.free(),l.free(),h}))}static clothTube(t,e,i,s,r,o){return n.withGenerator((()=>{let a=D.intoRaw(t),l=D.intoRaw(e),h=en.clothTube(a,l,i,s,r,o);return a.free(),l.free(),h}))}static clothAnisotropic(t,e,i,s,r,o,a,l){return n.withGenerator((()=>{let h=D.intoRaw(t),u=D.intoRaw(e),d=D.intoRaw(i),f=en.clothAnisotropic(h,u,d,s,r,o.naturalFrequency,o.dampingRatio,a.naturalFrequency,a.dampingRatio,l.naturalFrequency,l.dampingRatio);return h.free(),u.free(),d.free(),f}))}static cuboid(t,e,i,s,r){return n.withGenerator((()=>{let o=D.intoRaw(t),a=D.intoRaw(e),l=en.cuboid(o,a,i,s,r);return o.free(),a.free(),l}))}static sphere(t,e,i){return n.withGenerator((()=>{let s=D.intoRaw(t),r=en.sphere(s,e,i);return s.free(),r}))}setMaterial(t){return this.material=t,this}setSoftness(t,e){return this.softness={naturalFrequency:t,dampingRatio:e},this}setParticleMass(t){return this.particleMass=t,this.masses=null,this}setMass(t){return this.mass=t,this}setMasses(t){return this.masses=Float32Array.from(t),this}setPinnedParticles(t){return this.pinnedParticles=Uint32Array.from(t),this}setEdges(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setEdges(e))),this}addEdges(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.addEdges(e))),this}setBendEdges(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setBendEdges(e))),this}setTensionOnly(){return this.setters.push((t=>t.setTensionOnly())),this}setDihedrals(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setDihedrals(e))),this}setWire(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setWire(e))),this}setCells(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setCells(e))),this}setSurface(t){let e=Uint32Array.from(t);return this.setters.push((i=>i.setSurface(e))),this}setSkin(t,e){let i=Float32Array.from(t),s=Uint32Array.from(e);return this.setters.push((r=>r.setSkin(i,s))),this}setSkinCollision(t){return this.skinCollision=t,this}setEdgeSoftness(t,e){let i=Uint32Array.from(t),s=Float32Array.from(e.map((o=>o.naturalFrequency))),r=Float32Array.from(e.map((o=>o.dampingRatio)));return this.setters.push((o=>o.setEdgeSoftness(i,s,r))),this}setEdgeTearResistance(t,e){let i=Uint32Array.from(t),s=Float32Array.from(e);return this.setters.push((r=>r.setEdgeTearResistance(i,s))),this}setCellModel(t){return this.cellModel=t,this}setSolver(t){return this.solver=t,this}setVolumePreservation(t){return this.volumePreservation=t,this}setVolumeFactor(t){return this.volumeFactor=t,this.volumePreservation=!0,this}setShapeMatching(t){return this.shapeMatching=t,this}setSelfContacts(t){return this.selfContacts=t,this}setOriented(t){return this.oriented=t,this}setParticleRadius(t){return this.particleRadius=t,this}setSurfaceCollider(t){return this.surfaceCollider=t,this}setNoSurfaceCollider(){return this.surfaceCollider=null,this}setTranslation(t){return this.translation=t,this}setLinearDamping(t){return this.linearDamping=t,this}setGravityScale(t){return this.gravityScale=t,this}setAdditionalSolverIterations(t){return this.additionalSolverIterations=t,this}setAdditionalPgsIterations(t){return this.additionalPgsIterations=t,this}setCanSleep(t){return this.canSleep=t,this}setDominanceGroup(t){return this.dominanceGroup=t,this}setUserData(t){return this.userData=t,this}append(t){return this.setters.push((e=>{let i=t.intoRaw();e.append(i),i.free()})),this}intoRaw(){let t=this.generator();for(let e of this.setters)e(t);if(this.material){let e=this.material.intoRaw();t.setMaterial(e),e.free()}if(this.softness&&t.setSoftness(this.softness.naturalFrequency,this.softness.dampingRatio),this.masses?t.setMasses(this.masses):t.setParticleMass(this.particleMass),this.mass!==null&&t.setMass(this.mass),t.setPinnedParticles(this.pinnedParticles),t.setCellModel(this.cellModel),t.setSolver(this.solver),this.volumePreservation!==null&&t.setVolumePreservation(this.volumePreservation),t.setVolumeFactor(this.volumeFactor),this.shapeMatching!==null&&t.setShapeMatching(this.shapeMatching),t.setSelfContacts(this.selfContacts),this.oriented!==null&&t.setOriented(this.oriented),this.particleRadius!==null&&t.setParticleRadius(this.particleRadius),t.setSkinCollision(this.skinCollision),this.surfaceCollider){let e=this.surfaceCollider;t.setSurfaceCollider(e.friction,e.restitution,e.frictionCombineRule,e.restitutionCombineRule,e.isSensor,e.collisionGroups,e.solverGroups,e.activeCollisionTypes,e.activeHooks,e.activeEvents,e.contactForceEventThreshold,e.contactSkin)}else t.setNoSurfaceCollider();if(this.translation){let e=D.intoRaw(this.translation);t.translated(e),e.free()}return t.setLinearDamping(this.linearDamping),t.setGravityScale(this.gravityScale),t.setAdditionalSolverIterations(this.additionalSolverIterations),t.setAdditionalPgsIterations(this.additionalPgsIterations),t.setCanSleep(this.canSleep),t.setDominanceGroup(this.dominanceGroup),t}numParticles(){let t=this.intoRaw(),e=t.numParticles();return t.free(),e}particlePositions(){let t=this.intoRaw(),e=t.particlePositions();return t.free(),e}},Yl=class{constructor(t){this.raw=t}free(){this.raw&&this.raw.free(),this.raw=void 0}softBody(){return this.raw.softBody()}tornEdges(){return this.raw.tornEdges()}tornCells(){return this.raw.tornCells()}removedEdges(){return this.raw.removedEdges()}splitParticles(){return this.raw.splitParticles()}insertedParticles(){return this.raw.insertedParticles()}seeds(){return this.raw.seeds()}numPieces(){return this.raw.numPieces()}pieceSoftBody(t){return this.raw.pieceSoftBody(t)}pieceParticles(t){return this.raw.pieceParticles(t)}pieceClusters(t){return this.raw.pieceClusters(t)}numClusterSplits(){return this.raw.numClusterSplits()}clusterSplitSource(t){return this.raw.clusterSplitSource(t)}clusterSplitSoftBody(t){return this.raw.clusterSplitSoftBody(t)}clusterSplitCluster(t){return this.raw.clusterSplitCluster(t)}clusterSplitProxy(t){return this.raw.clusterSplitProxy(t)}clusterSplitKeepsProxy(t){return this.raw.clusterSplitKeepsProxy(t)}numMovedJoints(){return this.raw.numMovedJoints()}movedJoint(t){return this.raw.movedJoint(t)}movedJointFrom(t){return this.raw.movedJointFrom(t)}movedJointTo(t){return this.raw.movedJointTo(t)}particleDestination(t){let e=this.raw.particleDestinationBody(t),i=this.raw.particleDestinationIndex(t);return e===void 0||i===void 0?null:{softBody:e,particle:i}}},Yu=class{constructor(t){this.raw=t||new bs}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get contact_erp(){return this.raw.contact_erp}get lengthUnit(){return this.raw.lengthUnit}get normalizedAllowedLinearError(){return this.raw.normalizedAllowedLinearError}get normalizedPredictionDistance(){return this.raw.normalizedPredictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}get softBodiesResweepStrain(){return this.raw.softBodiesResweepStrain}get softBodiesMaxExtraSubsteps(){return this.raw.softBodiesMaxExtraSubsteps}get softBodiesContactStiffening(){return this.raw.softBodiesContactStiffening}get softBodiesRecovery(){return Xu.fromRaw(this.raw.softBodiesRecovery)}get softBodiesFemLinearTolerance(){return this.raw.softBodiesFemLinearTolerance}get softBodiesFemMaxLinearIterations(){return this.raw.softBodiesFemMaxLinearIterations}get softBodiesFemMaxDenseDofs(){return this.raw.softBodiesFemMaxDenseDofs}set dt(t){this.raw.dt=t}set softBodiesResweepStrain(t){this.raw.softBodiesResweepStrain=t}set softBodiesMaxExtraSubsteps(t){this.raw.softBodiesMaxExtraSubsteps=t}set softBodiesContactStiffening(t){this.raw.softBodiesContactStiffening=t}set softBodiesRecovery(t){let e=t.intoRaw();this.raw.softBodiesRecovery=e,e.free()}set softBodiesFemLinearTolerance(t){this.raw.softBodiesFemLinearTolerance=t}set softBodiesFemMaxLinearIterations(t){this.raw.softBodiesFemMaxLinearIterations=t}set softBodiesFemMaxDenseDofs(t){this.raw.softBodiesFemMaxDenseDofs=t}set contact_natural_frequency(t){this.raw.contact_natural_frequency=t}set lengthUnit(t){this.raw.lengthUnit=t}set normalizedAllowedLinearError(t){this.raw.normalizedAllowedLinearError=t}set normalizedPredictionDistance(t){this.raw.normalizedPredictionDistance=t}set numSolverIterations(t){this.raw.numSolverIterations=t}set numInternalPgsIterations(t){this.raw.numInternalPgsIterations=t}set maxCcdSubsteps(t){this.raw.maxCcdSubsteps=t}};(function(n){n[n.Revolute=0]="Revolute",n[n.Fixed=1]="Fixed",n[n.Prismatic=2]="Prismatic",n[n.Rope=3]="Rope",n[n.Spring=4]="Spring",n[n.Spherical=5]="Spherical",n[n.Generic=6]="Generic"})(xi||(xi={})),(function(n){n[n.AccelerationBased=0]="AccelerationBased",n[n.ForceBased=1]="ForceBased"})(zp||(zp={})),(function(n){n[n.LinX=0]="LinX",n[n.LinY=1]="LinY",n[n.LinZ=2]="LinZ",n[n.AngX=3]="AngX",n[n.AngY=4]="AngY",n[n.AngZ=5]="AngZ"})(kp||(kp={})),(function(n){n[n.LinX=1]="LinX",n[n.LinY=2]="LinY",n[n.LinZ=4]="LinZ",n[n.AngX=8]="AngX",n[n.AngY=16]="AngY",n[n.AngZ=32]="AngZ"})(Hp||(Hp={}));var Hn=class n{constructor(t,e,i){this.rawSet=t,this.bodySet=e,this.handle=i}static newTyped(t,e,i){switch(t.jointType(i)){case Bn.Revolute:return new Ku(t,e,i);case Bn.Prismatic:return new Zu(t,e,i);case Bn.Fixed:return new ju(t,e,i);case Bn.Spring:return new Ju(t,e,i);case Bn.Rope:return new $u(t,e,i);case Bn.Spherical:return new td(t,e,i);case Bn.Generic:return new Qu(t,e,i);default:return new n(t,e,i)}}finalizeDeserialization(t){this.bodySet=t}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(t){return this.rawSet.jointFrameX1(this.handle,Y),jt.fromBuffer(Y,t)}frameX2(t){return this.rawSet.jointFrameX2(this.handle,Y),jt.fromBuffer(Y,t)}anchor1(t){return this.rawSet.jointAnchor1(this.handle,Y),D.fromBuffer(Y,t)}anchor2(t){return this.rawSet.jointAnchor2(this.handle,Y),D.fromBuffer(Y,t)}setAnchor1(t){let e=D.intoRaw(t);this.rawSet.jointSetAnchor1(this.handle,e),e.free()}setAnchor2(t){let e=D.intoRaw(t);this.rawSet.jointSetAnchor2(this.handle,e),e.free()}setFrameX1(t){let e=jt.intoRaw(t);this.rawSet.jointSetFrameX1(this.handle,e),e.free()}setFrameX2(t){let e=jt.intoRaw(t);this.rawSet.jointSetFrameX2(this.handle,e),e.free()}setLocalFrame1(t,e){let i=D.intoRaw(t),s=jt.intoRaw(e);this.rawSet.jointSetLocalFrame1(this.handle,i,s),i.free(),s.free()}setLocalFrame2(t,e){let i=D.intoRaw(t),s=jt.intoRaw(e);this.rawSet.jointSetLocalFrame2(this.handle,i,s),i.free(),s.free()}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},jl=class extends Hn{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(t,e){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),t,e)}configureMotorModel(t){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),t)}setMotorMaxForce(t){this.rawSet.jointSetMotorMaxForce(this.handle,this.rawAxis(),t)}configureMotorVelocity(t,e){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),t,e)}configureMotorPosition(t,e,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),t,e,i)}configureMotor(t,e,i,s){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),t,e,i,s)}},ju=class extends Hn{},$u=class extends Hn{},Ju=class extends Hn{},Zu=class extends jl{rawAxis(){return hd.LinX}},Ku=class extends jl{rawAxis(){return hd.AngX}},Qu=class extends Hn{},td=class extends Hn{configureMotorModel(t,e){this.rawSet.jointConfigureMotorModel(this.handle,t,e)}setMotorMaxForce(t,e){this.rawSet.jointSetMotorMaxForce(this.handle,t,e)}configureMotorVelocity(t,e,i){this.rawSet.jointConfigureMotorVelocity(this.handle,t,e,i)}configureMotorPosition(t,e,i,s){this.rawSet.jointConfigureMotorPosition(this.handle,t,e,i,s)}configureMotor(t,e,i,s,r){this.rawSet.jointConfigureMotor(this.handle,t,e,i,s,r)}},Yp=class n{constructor(){}static fixed(t,e,i,s){let r=new n;return r.anchor1=t,r.anchor2=i,r.frame1=e,r.frame2=s,r.jointType=xi.Fixed,r}static spring(t,e,i,s,r){let o=new n;return o.anchor1=s,o.anchor2=r,o.length=t,o.stiffness=e,o.damping=i,o.jointType=xi.Spring,o}static rope(t,e,i){let s=new n;return s.anchor1=e,s.anchor2=i,s.length=t,s.jointType=xi.Rope,s}static generic(t,e,i,s){let r=new n;return r.anchor1=t,r.anchor2=e,r.axis=i,r.axesMask=s,r.jointType=xi.Generic,r}static spherical(t,e){let i=new n;return i.anchor1=t,i.anchor2=e,i.jointType=xi.Spherical,i}static prismatic(t,e,i){let s=new n;return s.anchor1=t,s.anchor2=e,s.axis=i,s.jointType=xi.Prismatic,s}static revolute(t,e,i){let s=new n;return s.anchor1=t,s.anchor2=e,s.axis=i,s.jointType=xi.Revolute,s}static revoluteWithAxes(t,e,i,s){let r=new n;return r.anchor1=t,r.anchor2=e,r.axis=i,r.axis1=i,r.axis2=s,r.jointType=xi.Revolute,r}intoRaw(){let t,e,i=D.intoRaw(this.anchor1),s=D.intoRaw(this.anchor2),r=!1,o=0,a=0;switch(this.jointType){case xi.Fixed:let l=jt.intoRaw(this.frame1),h=jt.intoRaw(this.frame2);e=nn.fixed(i,l,s,h),l.free(),h.free();break;case xi.Spring:e=nn.spring(this.length,this.stiffness,this.damping,i,s);break;case xi.Rope:e=nn.rope(this.length,i,s);break;case xi.Prismatic:t=D.intoRaw(this.axis),this.limitsEnabled&&(r=!0,o=this.limits[0],a=this.limits[1]),e=nn.prismatic(i,s,t,r,o,a),t.free();break;case xi.Generic:t=D.intoRaw(this.axis);let u=this.axesMask;e=nn.generic(i,s,t,u);break;case xi.Spherical:e=nn.spherical(i,s);break;case xi.Revolute:if(this.axis1&&this.axis2){let d=D.intoRaw(this.axis1),f=D.intoRaw(this.axis2);e=nn.revoluteWithAxes(i,s,d,f),d.free(),f.free()}else t=D.intoRaw(this.axis),e=nn.revolute(i,s,t),t.free()}return i.free(),s.free(),e}},ed=class{constructor(t){this.raw=t||new Yi,this.map=new Sr,t&&t.forEachJointHandle((e=>{this.map.set(e,Hn.newTyped(t,null,e))}))}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t){this.map.forEach((e=>e.finalizeDeserialization(t)))}createJoint(t,e,i,s,r){let o=e.intoRaw(),a=this.raw.createJoint(o,i,s,r);o.free();let l=Hn.newTyped(this.raw,t,a);return this.map.set(a,l),l}remove(t,e){this.raw.remove(t,e),this.unmap(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}unmap(t){this.map.delete(t)}unmapRemovedJoints(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}},js=class n{constructor(t,e){this.rawSet=t,this.handle=e}static newTyped(t,e){switch(t.jointType(e)){case Bn.Revolute:return new sd(t,e);case Bn.Prismatic:return new nd(t,e);case Bn.Fixed:return new id(t,e);case Bn.Spherical:return new rd(t,e);default:return new n(t,e)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(t){this.rawSet.jointSetContactsEnabled(this.handle,t)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}},$l=class extends js{},id=class extends js{},nd=class extends $l{rawAxis(){return hd.LinX}},sd=class extends $l{rawAxis(){return hd.AngX}},rd=class extends js{},od=class{constructor(t){this.raw=t||new $i,this.map=new Sr,t&&t.forEachJointHandle((e=>{this.map.set(e,js.newTyped(this.raw,e))}))}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(t,e,i,s){let r=t.intoRaw(),o=this.raw.createJoint(r,e,i,s);r.free();let a=js.newTyped(this.raw,o);return this.map.set(o,a),a}remove(t,e){this.raw.remove(t,e),this.map.delete(t)}unmap(t){this.map.delete(t)}unmapRemovedJoints(){for(let t of this.map.getAll())this.raw.contains(t.handle)||this.map.delete(t.handle)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}forEachJointHandleAttachedToRigidBody(t,e){this.raw.forEachJointAttachedToRigidBody(t,e)}getAll(){return this.map.getAll()}};(function(n){n[n.Average=0]="Average",n[n.Min=1]="Min",n[n.Multiply=2]="Multiply",n[n.Max=3]="Max"})(zl||(zl={}));var ad=class{constructor(t){this.raw=t||new yr}free(){this.raw&&this.raw.free(),this.raw=void 0}},ld=class{constructor(t){this.raw=t||new ji}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(t){this.raw.forEachActiveRigidBodyHandle(t)}},cd=class{constructor(t){this.raw=t||new fn,this.map=new Sr,t&&t.forEachSoftBodyHandle((e=>{this.map.set(e,new Ro(t,null,null,e))}))}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(t,e){this.map.forEach((i=>i.finalizeDeserialization(t,e)))}createSoftBody(t,e,i){let s=i.intoRaw(),r=this.raw.insert(s,t.raw,e.raw);s.free(),t.mapNewBodies(e),e.mapNewColliders(t);let o=new Ro(this.raw,t,e,r);return o.userData=i.userData,this.map.set(r,o),o}remove(t,e,i,s,r,o){this.raw.remove(t,e.raw,i.raw,s.raw,r.raw,o.raw),this.map.delete(t),i.unmapRemovedBodies(),s.unmapRemovedColliders(),r.unmapRemovedJoints(),o.unmapRemovedJoints()}addCluster(t,e,i,s){let r=this.raw.addCluster(t,Uint32Array.from(e),i.raw,s.raw);return i.mapNewBodies(s),r===void 0?null:r}removeCluster(t,e,i,s,r,o,a){let l=this.raw.removeCluster(t,e,i.raw,s.raw,r.raw,o.raw,a.raw);return s.unmapRemovedBodies(),r.unmapRemovedColliders(),o.unmapRemovedJoints(),a.unmapRemovedJoints(),l}tear(t,e,i,s,r,o,a,l){let h=this.raw.tear(t,Uint32Array.from(e),Uint32Array.from(i),s.raw,r.raw,o.raw,a.raw,l.raw);return this.finishTopologyChange(h,r,o,a,l)}cut(t,e,i,s,r,o,a){let l=[];for(let u of e)l.push(u.x,u.y),l.push(u.z);let h=this.raw.cut(t,Float32Array.from(l),i.raw,s.raw,r.raw,o.raw,a.raw);return this.finishTopologyChange(h,s,r,o,a)}finishTopologyChange(t,e,i,s,r){return t?(this.mapNewSoftBodies(e,i),e.mapNewBodies(i),i.mapNewColliders(e),e.unmapRemovedBodies(),i.unmapRemovedColliders(),s.unmapRemovedJoints(),r.unmapRemovedJoints(),new Yl(t)):null}mapNewSoftBodies(t,e){this.raw.forEachSoftBodyHandle((i=>{this.map.get(i)||this.map.set(i,new Ro(this.raw,t,e,i))}))}wakeUp(t,e,i){this.raw.wakeUp(t,e.raw,i)}len(){return this.map.len()}contains(t){return this.get(t)!=null}get(t){return this.map.get(t)}forEach(t){this.map.forEach(t)}getAll(){return this.map.getAll()}};function VM(n,t,e,i){return new(e||(e=Promise))((function(s,r){function o(h){try{l(i.next(h))}catch(u){r(u)}}function a(h){try{l(i.throw(h))}catch(u){r(u)}}function l(h){var u;h.done?s(h.value):(u=h.value,u instanceof e?u:new e((function(d){d(u)}))).then(o,a)}l((i=i.apply(n,t||[])).next())}))}for(GM={byteLength:function(n){var t=p0(n),e=t[0],i=t[1];return 3*(e+i)/4-i},toByteArray:function(n){var t,e,i=p0(n),s=i[0],r=i[1],o=new d0((function(h,u,d){return 3*(u+d)/4-d})(0,s,r)),a=0,l=r>0?s-4:s;for(e=0;e<l;e+=4)t=dn[n.charCodeAt(e)]<<18|dn[n.charCodeAt(e+1)]<<12|dn[n.charCodeAt(e+2)]<<6|dn[n.charCodeAt(e+3)],o[a++]=t>>16&255,o[a++]=t>>8&255,o[a++]=255&t;return r===2&&(t=dn[n.charCodeAt(e)]<<2|dn[n.charCodeAt(e+1)]>>4,o[a++]=255&t),r===1&&(t=dn[n.charCodeAt(e)]<<10|dn[n.charCodeAt(e+1)]<<4|dn[n.charCodeAt(e+2)]>>2,o[a++]=t>>8&255,o[a++]=255&t),o},fromByteArray:function(n){for(var t,e=n.length,i=e%3,s=[],r=16383,o=0,a=e-i;o<a;o+=r)s.push(WM(n,o,o+r>a?a:o+r));return i===1?(t=n[e-1],s.push(On[t>>2]+On[t<<4&63]+"==")):i===2&&(t=(n[e-2]<<8)+n[e-1],s.push(On[t>>10]+On[t>>4&63]+On[t<<2&63]+"=")),s.join("")}},On=[],dn=[],d0=typeof Uint8Array<"u"?Uint8Array:Array,yu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",mr=0,f0=yu.length;mr<f0;++mr)On[mr]=yu[mr],dn[yu.charCodeAt(mr)]=mr;var GM,On,dn,d0,yu,mr,f0;function p0(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");return e===-1&&(e=t),[e,e===t?0:4-e%4]}function WM(n,t,e){for(var i,s,r=[],o=t;o<e;o+=3)i=(n[o]<<16&16711680)+(n[o+1]<<8&65280)+(255&n[o+2]),r.push(On[(s=i)>>18&63]+On[s>>12&63]+On[s>>6&63]+On[63&s]);return r.join("")}function XM(){return VM(this,void 0,void 0,(function*(){yield HM({module_or_path:new URL("./rapier.b12026183f.wasm",import.meta.url)})}))}function qM(){return(function(){let n,t;try{let s=c.__wbindgen_add_to_stack_pointer(-16);c.version(s);var e=pt().getInt32(s+0,!0),i=pt().getInt32(s+4,!0);return n=e,t=i,g0(e,i)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_export2(n,t,1)}})()}function YM(n){var t;t=n,c.reserve_memory(t)}dn[45]=62,dn[95]=63;var Bi=Object.freeze({__proto__:null,version:qM,reserveMemory:YM,scratchBuffer:Y,Vector3:Su,VectorOps:D,Quaternion:Ul,RotationOps:jt,SdpMatrix3:Bl,SdpMatrix3Ops:Ol,get RigidBodyType(){return Un},RigidBody:To,RigidBodyDesc:Vp,RigidBodySet:Au,IntegrationParameters:Yu,get JointType(){return xi},get MotorModel(){return zp},get JointAxis(){return kp},get JointAxesMask(){return Hp},ImpulseJoint:Hn,UnitImpulseJoint:jl,FixedImpulseJoint:ju,RopeImpulseJoint:$u,SpringImpulseJoint:Ju,PrismaticImpulseJoint:Zu,RevoluteImpulseJoint:Ku,GenericImpulseJoint:Qu,SphericalImpulseJoint:td,JointData:Yp,ImpulseJointSet:ed,MultibodyJoint:js,UnitMultibodyJoint:$l,FixedMultibodyJoint:id,PrismaticMultibodyJoint:nd,RevoluteMultibodyJoint:sd,SphericalMultibodyJoint:rd,MultibodyJointSet:od,get CoefficientCombineRule(){return zl},CCDSolver:ad,IslandManager:ld,get SoftBodyCellModel(){return Ru},get SoftEdgePlasticFlow(){return Bp},get SoftBodySolver(){return Cu},get SoftPatchConstraints(){return Op},SoftRecoverySettings:Xu,get SoftMeshBindingMode(){return Eo},SoftMeshBinding:Xp,SoftBodyMaterial:qu,SoftBody:Ro,SoftBodyDesc:qp,SoftBodyTearEvent:Yl,SoftBodySet:cd,BroadPhase:Iu,NarrowPhase:Du,TempContactManifold:Nu,Shape:Je,get ShapeType(){return ni},get HeightFieldFlags(){return Pp},get PolylineFlags(){return Ip},get CompoundFlags(){return Dp},get TriMeshFlags(){return Np},Ball:ko,HalfSpace:Xl,Cuboid:Ho,RoundCuboid:Vo,Capsule:Go,Segment:Wo,Triangle:Xo,RoundTriangle:qo,Polyline:Yo,Voxels:jo,Compound:$o,TriMesh:Jo,ConvexPolyhedron:Mr,RoundConvexPolyhedron:Er,Heightfield:Zo,Cylinder:Ko,RoundCylinder:Qo,Cone:ta,RoundCone:ea,get ActiveCollisionTypes(){return Tu},Collider:br,get MassPropsMode(){return wr},ColliderDesc:Gu,ColliderSet:Wu,get FeatureType(){return Bo},Ray:Gp,RayIntersection:kl,RayColliderIntersection:Hl,RayColliderHit:Pu,PointProjection:Vl,PointColliderProjection:Gl,ShapeCastHit:Oo,ColliderShapeCastHit:Wl,ShapeContact:zo,World:Hu,PhysicsPipeline:Lu,SerializationPipeline:ql,get ActiveEvents(){return Mu},TempContactForceEvent:Vu,EventQueue:Wp,get ActiveHooks(){return Eu},get SolverFlags(){return Fp},DebugRenderBuffers:Fu,DebugRenderPipeline:Uu,get QueryFilterFlags(){return Up},init:XM,CharacterCollision:Bu,KinematicCharacterController:Ou,get PidAxesMask(){return Lp},PidController:zu,DynamicRayCastVehicleController:ku});function v0(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new je,h=0;for(let u=0;u<n.length;++u){let d=n[u],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,p,u),h+=p}}if(e){let u=0,d=[];for(let f=0;f<n.length;++f){let p=n[f].index;for(let _=0;_<p.count;++_)d.push(p.getX(_)+u);u+=n[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=y0(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in o){let d=o[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let p=[];for(let b=0;b<o[u].length;++b)p.push(o[u][b][f]);let _=y0(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}}return l}function y0(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let u=n[h];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new di(o,e,i),l=0;for(let h=0;h<n.length;++h){let u=n[h];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,p=u.count;f<p;f++)for(let _=0;_<e;_++){let b=u.getComponent(f,_);a.setComponent(f+d,_,b)}}else o.set(u.array,l);l+=u.count*e}return s!==void 0&&(a.gpuType=s),a}var ys=F,x0=new Yt,S0=new ti,M0=new Ti,jM=new ys(0,1,0),Tr=class{constructor(){this.parts=[]}addMatrix(t,e,i){let s=t.index?t.toNonIndexed():t;s.applyMatrix4(i);let r=new Ht(e),o=s.attributes.position.count,a=new Float32Array(o*3);for(let l=0;l<o;l++)a[l*3]=r.r,a[l*3+1]=r.g,a[l*3+2]=r.b;return s.setAttribute("color",new di(a,3)),s.attributes.uv&&s.deleteAttribute("uv"),this.parts.push(s),this}add(t,e,i=0,s=0,r=0,o=0,a=0,l=0,h=1,u=1,d=1){return M0.set(o,a,l),S0.setFromEuler(M0),x0.compose(new ys(i,s,r),S0,new ys(h,u,d)),this.addMatrix(t,e,x0)}box(t,e,i,s,r=0,o=0,a=0,l=0,h=0,u=0){return this.add(new In(t,e,i),s,r,o,a,l,h,u)}rbox(t,e,i,s,r,o=0,a=0,l=0,h=0,u=0,d=0){return this.add($M(t,e,i,s),r,o,a,l,h,u,d)}cyl(t,e,i,s,r=0,o=0,a=0,l=0,h=0,u=0,d=14){return this.add(new ms(t,e,i,d),s,r,o,a,l,h,u)}sph(t,e,i=0,s=0,r=0,o=1,a=1,l=1,h=12){return this.add(new cn(t,h,Math.max(6,Math.round(h*.7))),e,i,s,r,0,0,0,o,a,l)}cone(t,e,i,s=0,r=0,o=0,a=0,l=0,h=0,u=12){return this.add(new Wa(t,e,u),i,s,r,o,a,l,h)}torus(t,e,i,s=0,r=0,o=0,a=0,l=0,h=0,u=18,d=8){return this.add(new Bs(t,e,d,u),i,s,r,o,a,l,h)}bar(t,e,i,s,r,o,a,l,h=8){let u=new ys(t,e,i),d=new ys(s,r,o),f=d.clone().sub(u),p=f.length(),_=new ti().setFromUnitVectors(jM,f.normalize()),b=new Yt().compose(u.add(d).multiplyScalar(.5),_,new ys(1,1,1));return this.addMatrix(new ms(a,a,p,h),l,b)}build(t){let e=v0(this.parts,!1);return e.translate(0,-t,0),e.computeBoundingBox(),e.computeBoundingSphere(),e}},jp=new Map;function $M(n,t,e,i){let s=[n,t,e,i].join(",");if(jp.has(s))return jp.get(s).clone();let r=new In(n,t,e,3,3,3),o=r.attributes.position,a=r.attributes.normal,l=n/2-i,h=t/2-i,u=e/2-i,d=new ys,f=new ys,p=new ys;for(let _=0;_<o.count;_++)d.fromBufferAttribute(o,_),f.set(Math.max(-l,Math.min(l,d.x)),Math.max(-h,Math.min(h,d.y)),Math.max(-u,Math.min(u,d.z))),p.copy(d).sub(f),p.lengthSq()>1e-9&&(p.normalize(),d.copy(f).addScaledVector(p,i),o.setXYZ(_,d.x,d.y,d.z),a.setXYZ(_,p.x,p.y,p.z));return jp.set(s,r),r.clone()}var ot={white:"#fffaf2",cream:"#fff1d6",black:"#2b2238",brown:"#8a5a33",choc:"#6b3f22",dchoc:"#4a2a17",red:"#ff4d5e",orange:"#ff9a2e",yellow:"#ffd23f",green:"#4ccf62",mint:"#7ee8c8",blue:"#3fa2ff",sky:"#8fd3ff",pink:"#ff7eb6",lilac:"#b892ff",purple:"#8b5cf6",grey:"#a8b3c2",dgrey:"#5b6475",leaf:"#4cc35a",leaf2:"#38a84a",wood:"#c8874c",dwood:"#9a6233",tyre:"#2d2a33",glass:"#bfe9ff",skin:"#ffd2b0",gold:"#ffc83d"};var sn={apple:{name:"Apple",shape:"ball",dims:[.17],size:.34,xp:1,variants:[ot.red,"#ff6a4d"],build:(n,t)=>{n.sph(.17,t,0,.17,0,1,.94,1,14),n.cyl(.015,.015,.08,ot.brown,0,.35,0,0,0,.2,6),n.sph(.05,ot.leaf,.05,.36,0,1.4,.4,.8,8)}},cup:{name:"Cup",shape:"cyl",dims:[.14,.17],size:.34,xp:1,variants:[ot.red,ot.blue,ot.yellow,ot.mint],build:(n,t)=>{n.cyl(.14,.11,.34,t,0,.17,0,0,0,0,14),n.cyl(.142,.142,.05,ot.white,0,.3,0,0,0,0,14)}},block:{name:"Toy Block",shape:"box",dims:[.18,.18,.18],size:.36,xp:1,variants:[ot.red,ot.blue,ot.yellow,ot.green],build:(n,t)=>{n.rbox(.36,.36,.36,.04,t,0,.18,0),n.cyl(.07,.07,.02,ot.white,0,.36,0,0,0,0,10)}},sandwich:{name:"Sandwich",shape:"box",dims:[.2,.08,.2],size:.4,xp:1,variants:["#f3c98b"],build:(n,t)=>{n.rbox(.4,.05,.4,.02,t,0,.025,0),n.box(.42,.025,.42,ot.leaf,0,.06,0,0,.25,0),n.cyl(.13,.13,.02,ot.red,0,.08,0,0,0,0,12),n.rbox(.4,.06,.4,.025,t,0,.13,0)}},juice:{name:"Juice Box",shape:"box",dims:[.11,.17,.08],size:.34,xp:1,variants:[ot.orange,ot.pink,ot.green],build:(n,t)=>{n.rbox(.22,.34,.16,.02,t,0,.17,0),n.box(.2,.12,.165,ot.white,0,.18,0),n.cyl(.012,.012,.12,ot.white,.05,.38,0,0,0,.25,6)}},cone:{name:"Cone",shape:"cyl",dims:[.2,.3],size:.6,xp:2,variants:[ot.orange],build:(n,t)=>{n.rbox(.42,.06,.42,.02,t,0,.03,0),n.cyl(.03,.17,.56,t,0,.33,0,0,0,0,12),n.cyl(.075,.105,.1,ot.white,0,.38,0,0,0,0,12)}},ball:{name:"Ball",shape:"ball",dims:[.3],size:.6,xp:3,variants:[ot.white],build:(n,t)=>{n.sph(.3,t,0,.3,0,1,1,1,16);for(let[e,i,s]of[[0,.6,0],[.26,.42,.1],[-.2,.4,.2],[.05,.35,-.29],[-.18,.12,-.18],[.2,.1,.2]])n.sph(.085,ot.black,e*.97,i*.97+.009,s*.97,1,1,1,8)}},crate:{name:"Crate",shape:"box",dims:[.35,.35,.35],size:.7,xp:4,variants:[ot.wood],build:(n,t)=>{n.rbox(.7,.7,.7,.04,t,0,.35,0);for(let e of[-1,1])n.box(.72,.1,.1,ot.dwood,0,.35+e*.28,.32),n.box(.72,.1,.1,ot.dwood,0,.35+e*.28,-.32),n.box(.1,.1,.72,ot.dwood,.32,.35+e*.28,0),n.box(.1,.1,.72,ot.dwood,-.32,.35+e*.28,0)}},barrel:{name:"Barrel",shape:"cyl",dims:[.3,.38],size:.76,xp:4,variants:[ot.blue,ot.red],build:(n,t)=>{n.cyl(.3,.3,.76,t,0,.38,0,0,0,0,16),n.cyl(.31,.31,.06,ot.dgrey,0,.15,0,0,0,0,16),n.cyl(.31,.31,.06,ot.dgrey,0,.61,0,0,0,0,16)}},melon:{name:"Watermelon",shape:"ball",dims:[.36],size:.72,xp:4,variants:["#2f9e44"],build:(n,t)=>{n.sph(.36,t,0,.36,0,1,1,1,16);for(let e=0;e<4;e++)n.torus(.345,.03,"#8be08f",0,.36,0,0,e*Math.PI/4,0,22,6)}},basket:{name:"Basket",shape:"box",dims:[.4,.25,.3],size:.8,xp:5,variants:["#d79a5b"],build:(n,t)=>{n.rbox(.8,.42,.6,.05,t,0,.21,0),n.box(.84,.06,.64,"#b9773e",0,.43,0),n.box(.26,.08,.66,ot.red,.18,.47,0),n.torus(.22,.03,"#9a6233",0,.45,0,0,Math.PI/2,0,18,6)}},bench:{name:"Bench",shape:"box",dims:[1,.36,.34],size:1.8,xp:12,variants:[ot.red,ot.blue],build:(n,t)=>{n.rbox(2,.1,.5,.03,t,0,.42,.08),n.rbox(2,.3,.08,.03,t,0,.66,-.26);for(let e of[-.85,.85])n.box(.1,.42,.6,ot.dgrey,e,.21,0)}},table:{name:"Picnic Table",shape:"box",dims:[1.1,.4,.6],size:2,xp:15,variants:[ot.wood],build:(n,t)=>{n.rbox(2.2,.1,1.2,.03,t,0,.75,0);for(let e of[-.9,.9])for(let i of[-.45,.45])n.box(.12,.72,.12,ot.dwood,e,.36,i)}},tree:{name:"Tree",shape:"cyl",dims:[.32,1.1],size:2.2,xp:18,variants:[ot.leaf,"#7fd65b"],build:(n,t)=>{n.cyl(.14,.18,1,ot.brown,0,.5,0,0,0,0,10),n.sph(.62,t,0,1.45,0,1,.95,1,14),n.sph(.42,t,.32,1.2,.18,1,1,1,12),n.sph(.4,t,-.3,1.25,-.12,1,1,1,12)}},candy:{name:"Candy",shape:"ball",dims:[.14],size:.28,xp:1,variants:[ot.pink,ot.lilac,ot.mint,ot.yellow],build:(n,t)=>{n.sph(.14,t,0,.14,0,1,1,1,12),n.cone(.09,.12,ot.white,.19,.14,0,0,0,Math.PI/2,8),n.cone(.09,.12,ot.white,-.19,.14,0,0,0,-Math.PI/2,8)}},macaron:{name:"Macaron",shape:"cyl",dims:[.2,.1],size:.4,xp:1,variants:[ot.pink,ot.mint,ot.lilac,ot.yellow],build:(n,t)=>{n.cyl(.2,.2,.08,t,0,.04,0,0,0,0,16),n.cyl(.18,.18,.05,ot.cream,0,.1,0,0,0,0,16),n.cyl(.2,.2,.08,t,0,.16,0,0,0,0,16)}},cookie:{name:"Cookie",shape:"cyl",dims:[.32,.07],size:.64,xp:2,variants:["#e6a85f","#d18b45"],build:(n,t)=>{n.cyl(.32,.32,.14,t,0,.07,0,0,0,0,18);for(let[e,i]of[[.12,.06],[-.1,.15],[-.15,-.1],[.07,-.17],[0,0],[.2,-.08]])n.sph(.045,ot.dchoc,e,.14,i,1,.55,1,6)}},donut:{name:"Donut",shape:"cyl",dims:[.3,.1],size:.6,xp:2,variants:[ot.pink,"#7a4a2a",ot.white],build:(n,t)=>{n.torus(.19,.11,"#e8b06a",0,.1,0,Math.PI/2,0,0,18,10),n.torus(.19,.09,t,0,.14,0,Math.PI/2,0,0,18,8);for(let e=0;e<6;e++){let i=e*1.05;n.box(.06,.02,.02,[ot.yellow,ot.blue,ot.red][e%3],Math.cos(i)*.19,.225,Math.sin(i)*.19,0,i,0)}}},cupcake:{name:"Cupcake",shape:"cyl",dims:[.22,.24],size:.48,xp:2,variants:[ot.pink,ot.white,ot.lilac],build:(n,t)=>{n.cyl(.22,.16,.24,ot.sky,0,.12,0,0,0,0,14),n.sph(.22,t,0,.27,0,1,.75,1,14),n.sph(.1,t,0,.38,0,1,.9,1,10),n.sph(.06,ot.red,0,.47,0,1,1,1,8)}},cblock:{name:"Candy Block",shape:"box",dims:[.2,.2,.2],size:.4,xp:1,variants:[ot.pink,ot.mint,ot.yellow,ot.lilac],build:(n,t)=>{n.rbox(.4,.4,.4,.06,t,0,.2,0),n.box(.41,.08,.41,ot.white,0,.2,0)}},choco:{name:"Choco Bar",shape:"box",dims:[.4,.07,.14],size:.8,xp:2,variants:["#7a4a2a"],build:(n,t)=>{n.rbox(.8,.14,.28,.02,t,0,.07,0);for(let e of[-.3,-.1,.1,.3])n.rbox(.17,.04,.22,.015,"#8f5a36",e,.15,0)}},domino:{name:"Domino",shape:"box",dims:[.06,.3,.16],size:.6,xp:2,variants:[ot.white,ot.yellow,ot.pink],build:(n,t)=>{n.rbox(.12,.6,.32,.02,t,0,.3,0),n.box(.125,.02,.26,ot.black,0,.3,0);for(let[e,i]of[[.15,-.07],[.15,.07],[.45,0]])n.sph(.03,ot.black,.06,e,i,.4,1,1,6)}},lolly:{name:"Lollipop Tree",shape:"cyl",dims:[.32,.8],size:1.6,xp:10,variants:[ot.pink,ot.lilac,ot.mint],build:(n,t)=>{n.cyl(.05,.05,1,ot.white,0,.5,0,0,0,0,8),n.cyl(.42,.42,.16,t,0,1.25,0,Math.PI/2,0,0,20),n.torus(.25,.05,ot.white,0,1.25,0,0,0,0,20,6)}},cake:{name:"Cake Layer",shape:"cyl",dims:[1,.3],size:1.9,xp:20,variants:[ot.pink,ot.cream,"#a8e6ff"],build:(n,t)=>{n.cyl(1,1,.6,t,0,.3,0,0,0,0,24),n.cyl(1.03,1.03,.12,ot.white,0,.56,0,0,0,0,24);for(let e=0;e<12;e++){let i=e*Math.PI/6;n.sph(.1,ot.white,Math.cos(i)*1,.5,Math.sin(i)*1,1,1.3,1,8)}}},icecream:{name:"Ice Cream",shape:"cyl",dims:[.18,.32],size:.64,xp:3,variants:[ot.pink,ot.mint,ot.cream],build:(n,t)=>{n.cone(.15,.4,"#e2a25a",0,.2,0,Math.PI,0,0,12),n.sph(.18,t,0,.47,0,1,.9,1,12),n.sph(.05,ot.red,0,.62,0,1,1,1,8)}},gummy:{name:"Gummy Bear",shape:"box",dims:[.14,.2,.1],size:.4,xp:1,variants:[ot.red,ot.green,ot.yellow,ot.orange],build:(n,t)=>{n.sph(.13,t,0,.13,0,1,1,.75,10),n.sph(.1,t,0,.31,0,1,1,.8,10),n.sph(.04,t,.08,.39,0,1,1,1,6),n.sph(.04,t,-.08,.39,0,1,1,1,6)}},brick:{name:"Brick",shape:"box",dims:[.25,.15,.15],size:.5,xp:1,variants:[ot.red,ot.yellow,ot.blue,ot.white],build:(n,t)=>{n.rbox(.5,.3,.3,.03,t,0,.15,0);for(let e of[-.12,.12])n.cyl(.07,.07,.05,t,e,.32,0,0,0,0,10)}},roof:{name:"Roof",shape:"box",dims:[.62,.12,.62],size:1.25,xp:6,variants:[ot.red,ot.blue,ot.green],build:(n,t)=>{n.rbox(1.24,.24,1.24,.05,t,0,.12,0),n.cone(.62,.45,t,0,.45,0,0,Math.PI/4,0,4)}},hydrant:{name:"Hydrant",shape:"cyl",dims:[.15,.3],size:.6,xp:2,variants:[ot.red],build:(n,t)=>{n.cyl(.13,.15,.48,t,0,.24,0,0,0,0,12),n.sph(.13,t,0,.48,0,1,.8,1,10),n.cyl(.05,.05,.36,ot.yellow,0,.32,0,0,0,Math.PI/2,8)}},car:{name:"Toy Car",shape:"box",dims:[.55,.25,.3],size:1.1,xp:6,variants:[ot.red,ot.blue,ot.yellow,ot.green],build:(n,t)=>{n.rbox(1.1,.3,.58,.06,t,0,.27,0),n.rbox(.6,.26,.5,.06,t,-.05,.5,0),n.box(.5,.18,.52,ot.glass,-.05,.52,0);for(let e of[-.32,.32])for(let i of[-.3,.3])n.cyl(.13,.13,.09,ot.tyre,e,.13,i,Math.PI/2,0,0,12)}},bus:{name:"Bus",shape:"box",dims:[1.3,.55,.5],size:2.4,xp:25,variants:[ot.yellow,ot.orange],build:(n,t)=>{n.rbox(2.6,.95,1,.1,t,0,.62,0),n.box(2.3,.3,1.02,ot.glass,-.05,.82,0),n.box(2.62,.08,1.02,ot.white,0,.55,0);for(let e of[-.85,.85])for(let i of[-.5,.5])n.cyl(.2,.2,.12,ot.tyre,e,.2,i,Math.PI/2,0,0,12)}},lamp:{name:"Lamp Post",shape:"cyl",dims:[.12,1],size:2,xp:8,variants:[ot.dgrey],build:(n,t)=>{n.cyl(.18,.2,.12,t,0,.06,0,0,0,0,10),n.cyl(.05,.06,1.8,t,0,.95,0,0,0,0,8),n.sph(.16,ot.yellow,0,1.9,0,1,1,1,10)}},house:{name:"House",shape:"box",dims:[.9,.8,.9],size:2.8,xp:40,variants:[ot.cream,"#ffd6e8","#d6f0ff"],build:(n,t)=>{n.rbox(1.8,1.4,1.8,.06,t,0,.7,0),n.cone(1.45,.9,ot.red,0,1.85,0,0,Math.PI/4,0,4),n.box(.36,.6,.05,"#a0622d",0,.3,.91);for(let e of[-.5,.5])n.box(.32,.32,.05,ot.glass,e,.9,.91)}}};function E0(){let n={};for(let[t,e]of Object.entries(sn))n[t]=e.variants.map(i=>{let s=new Tr;return e.build(s,i),s.build(ia(e))});return n}function ia(n){return n.shape==="box"||n.shape==="cyl"?n.dims[1]:n.dims[0]}function Jl(n){return n.shape==="box"?Math.hypot(n.dims[0],n.dims[1],n.dims[2]):n.shape==="cyl"?Math.hypot(n.dims[0],n.dims[1]):n.dims[0]}function JM(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var ud=class{constructor(t=1){this.items=[],this.decals=[],this.r=JM(t),this.vcount={}}size(t){let e=sn[t];return e.shape==="box"?[e.dims[0]*2,e.dims[1]*2,e.dims[2]*2]:e.shape==="cyl"?[e.dims[0]*2,e.dims[1]*2,e.dims[0]*2]:[e.dims[0]*2,e.dims[0]*2,e.dims[0]*2]}variant(t,e){let i=sn[t].variants.length;return e!==void 0?(e%i+i)%i:(this.vcount[t]=(this.vcount[t]||0)+1,Math.floor(this.r()*i))}put(t,e,i,s,r=0,o,a=0,l=0){let h=sn[t];if(!h)throw new Error("unknown item "+t);return this.items.push({type:t,v:this.variant(t,o),x:e,y:i+ia(h),z:s,rx:a,ry:r,rz:l}),this}column(t,e,i,s,r=0,o=0,a){let l=this.size(t)[1];for(let h=0;h<s;h++)this.put(t,e,o+h*(l+.004),i,r,a==="alt"?h:a);return this}pyramid(t,e,i,s,r=0,o=.02,a=0,l){let[h,u]=this.size(t),d=h+o,f=Math.cos(r),p=Math.sin(r);for(let _=0;_<s;_++){let b=s-_;for(let g=0;g<b;g++){let m=(g-(b-1)/2)*d;this.put(t,e+m*f,a+_*(u+.004),i-m*p,r,l==="row"?_:l)}}return this}pyramid3(t,e,i,s,r=.02,o=0,a){let[l,h,u]=this.size(t);for(let d=0;d<s;d++){let f=s-d;for(let p=0;p<f;p++)for(let _=0;_<f;_++)this.put(t,e+(p-(f-1)/2)*(l+r),o+d*(h+.004),i+(_-(f-1)/2)*(u+r),0,a==="layer"?d:a)}return this}wall(t,e,i,s,r,o,a=.01,l=0,h){let[u,d]=this.size(t),f=s-e,p=r-i,_=Math.hypot(f,p),b=f/_,g=p/_,m=-Math.atan2(p,f),x=u+a,C=Math.max(1,Math.floor(_/x));for(let y=0;y<o;y++){let T=y%2?x/2:0,S=y%2?C-1:C;for(let R=0;R<S;R++){let w=(R+.5)*x+T+(_-C*x)/2;this.put(t,e+b*w,l+y*(d+.004),i+g*w,m,h==="layer"?y:h)}}return this}ring(t,e,i,s,r,o,a=0,l){let h=this.size(t)[1];for(let u=0;u<o;u++)for(let d=0;d<r;d++){let f=(d+u%2*.5)/r*Math.PI*2;this.put(t,e+Math.cos(f)*s,a+u*(h+.004),i+Math.sin(f)*s,-f+Math.PI/2,l==="layer"?u:l)}return this}grid(t,e,i,s,r,o,a,l=0,h=0,u){for(let d=0;d<s;d++)for(let f=0;f<r;f++){let p=(this.r()-.5)*l,_=(this.r()-.5)*l;this.put(t,e+(d-(s-1)/2)*o+p,h,i+(f-(r-1)/2)*a+_,this.r()*Math.PI*2,u)}return this}scatter(t,e,i,s,r,o,a=.5){let l=[],h=0;for(;l.length<o&&h++<o*40;){let u=e+(this.r()-.5)*s,d=i+(this.r()-.5)*r;l.some(([f,p])=>Math.hypot(f-u,p-d)<a)||(l.push([u,d]),this.put(t,u,0,d,this.r()*Math.PI*2))}return this}along(t,e,i,s){let r=i;for(let o=1;o<e.length;o++){let[a,l]=e[o-1],[h,u]=e[o],d=Math.hypot(h-a,u-l),f=0;for(;r+(d-f)>=i;){f+=i-r,r=0;let p=f/d,_=-Math.atan2(u-l,h-a);this.put(t,a+(h-a)*p,0,l+(u-l)*p,_,s==="seq"?this.items.length:s)}r+=d-f}return this}decal(t,e,i,s,r,o,a,l=0){return this.decals.push({kind:t,x:e,z:i,w:s,d:r,color:o,color2:a,ry:l}),this}};function T0(n,t,e,i,s,r=400){let o=[];for(let a=0;a<=r;a++){let l=a/r,h=l*s*Math.PI*2,u=e+(i-e)*l;o.push([n+Math.cos(h)*u,t+Math.sin(h)*u])}return o}function R0(n,t,e,i,s,r,o=200){let a=[],l=e-n,h=i-t,u=Math.hypot(l,h),d=-h/u,f=l/u;for(let p=0;p<=o;p++){let _=p/o,b=Math.sin(_*r*Math.PI*2)*s;a.push([n+l*_+d*b,t+h*_+f*b])}return a}var Zl=null;function Vn(){if(Zl)return Zl;let n=256,t=document.createElement("canvas");t.width=t.height=n;let e=t.getContext("2d");e.fillStyle="rgb(200,198,216)",e.fillRect(0,0,n,n);let i=e.createRadialGradient(n*.42,n*.4,n*.3,n*.42,n*.4,n*.56);return i.addColorStop(0,"rgb(255,255,255)"),i.addColorStop(.62,"rgb(255,255,255)"),i.addColorStop(.78,"rgb(200,198,216)"),i.addColorStop(1,"rgb(188,184,206)"),e.fillStyle=i,e.fillRect(0,0,n,n),Zl=new Ci(t),Zl.colorSpace=Ae,Zl}function Rr(n,t={}){return new Xi({color:n,matcap:Vn(),...t})}var $p=new Map;function ZM(n=.0026,t="#2b2238"){let e=n+t;if($p.has(e))return $p.get(e);let i=new Be({uniforms:{width:{value:n},color:{value:new Ht(t)}},vertexShader:`
      uniform float width;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        mv.xyz += n * width * max(1.0, -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 color;
      void main() { gl_FragColor = linearToOutputTexel(vec4(color, 1.0)); }`,side:mi});return $p.set(e,i),i}function fd(n,t){let e=new ee(n.geometry,ZM(t));return e.userData.outline=!0,e.raycast=()=>{},n.add(e),e}function C0(){return new Be({uniforms:{},vertexShader:`
      varying vec3 vN;
      void main() { vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
      varying vec3 vN;
      void main() {
        float d = dot(normalize(vN), normalize(vec3(-0.42, 0.55, 0.72)));
        float spot = smoothstep(0.915, 0.94, d) * 0.8;
        float glow = smoothstep(0.5, 1.0, d) * 0.14;
        gl_FragColor = vec4(1.0, 1.0, 1.0, max(spot, glow));
      }`,transparent:!0,depthWrite:!1})}var dd=null;function Jp(){if(dd)return dd;let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,6,64,64,62);return e.addColorStop(0,"rgba(30,20,60,0.5)"),e.addColorStop(.55,"rgba(30,20,60,0.32)"),e.addColorStop(1,"rgba(30,20,60,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),dd=new Ci(n),dd}function Zp(){let n=new ee(new _s(.5,32),new Li({map:Jp(),transparent:!0,depthWrite:!1}));return n.rotation.x=-Math.PI/2,n}var KM=.19,uA=new cn(KM,32,20),dA=new ps(1,1,10,24),A0=.056,QM=.36,fA=new ps(A0,QM-2*A0,6,14),P0=.05,t1=.31;var pA=new ps(P0,t1-2*P0,6,14);function Kp(n="smiley"){let i=document.createElement("canvas");i.width=1024,i.height=512;let s=i.getContext("2d"),r=1024*.25,o=512*.5;if(n==="melon"){s.fillStyle="#3fae49",s.fillRect(0,0,1024,512),s.fillStyle="#9be58f";for(let l=0;l<16;l++){let h=l*1024/16;s.beginPath();for(let u=0;u<=512;u+=8)s.lineTo(h+Math.sin(u*.05+l)*10,u);s.lineTo(h+26,512),s.lineTo(h+26,0),s.fill()}}else if(n==="soccer"){s.fillStyle="#ffffff",s.fillRect(0,0,1024,512),s.fillStyle="#2b2238";for(let l=0;l<10;l++)for(let h=0;h<4;h++){let u=(l+h%2*.5)*1024/10,d=(h+.5)*512/4;e1(s,u,d,34)}}else if(n==="planet"){s.fillStyle="#3fa2ff",s.fillRect(0,0,1024,512),s.fillStyle="#5bd36a";let l=h=>{let u=Math.sin(h)*1e4;return u-Math.floor(u)};for(let h=0;h<14;h++)s.beginPath(),s.ellipse(l(h)*1024,l(h+50)*512*.8+512*.1,40+l(h+9)*90,25+l(h+3)*50,0,0,Math.PI*2),s.fill();s.fillStyle="#ffffff",s.fillRect(0,0,1024,34),s.fillRect(0,478,1024,34)}else{s.fillStyle="#ffd21f",s.fillRect(0,0,1024,512),s.fillStyle="#ffe36a";for(let l=0;l<9;l++){let h=(l*.37+.6)%1*1024,u=512*(.2+.6*(l*.61%1));Math.abs(h-r)>170&&(s.beginPath(),s.arc(h,u,26,0,Math.PI*2),s.fill())}}n!=="soccer"&&(s.fillStyle="#2b2238",s.beginPath(),s.ellipse(r-46,o-40,18,32,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(r+46,o-40,18,32,0,0,Math.PI*2),s.fill(),s.fillStyle="#ffffff",s.beginPath(),s.arc(r-52,o-52,6,0,Math.PI*2),s.fill(),s.beginPath(),s.arc(r+40,o-52,6,0,Math.PI*2),s.fill(),s.lineWidth=18,s.lineCap="round",s.strokeStyle="#2b2238",s.beginPath(),s.arc(r,o-10,82,Math.PI*.2,Math.PI*.8),s.stroke(),s.fillStyle="rgba(255,110,130,0.6)",s.beginPath(),s.ellipse(r-96,o+16,24,14,0,0,Math.PI*2),s.fill(),s.beginPath(),s.ellipse(r+96,o+16,24,14,0,0,Math.PI*2),s.fill());let a=new Ci(i);return a.colorSpace=Ae,a.anisotropy=4,a}function e1(n,t,e,i){n.beginPath();for(let s=0;s<5;s++){let r=-Math.PI/2+s*Math.PI*2/5;n.lineTo(t+Math.cos(r)*i,e+Math.sin(r)*i*.9)}n.fill()}var I0=new cn(1,48,32);function D0(n){let t=new ee(I0,new Xi({map:Kp(n),matcap:Vn()}));t.castShadow=!0;let e=new ee(I0,C0());return e.scale.setScalar(1.004),e.renderOrder=2,e.userData.outline=!0,t.add(e),fd(t,.0032),t}function Qp(n){let i=[],s=[],r=[];i.push(0,1.006,0),s.push(.5,.5);for(let a=1;a<=4;a++){let l=n*a/4;for(let h=0;h<28;h++){let u=h/28*Math.PI*2,d=Math.sin(l)*Math.cos(u),f=Math.sin(l)*Math.sin(u),p=Math.cos(l);i.push(d*1.006,p*1.006,f*1.006),s.push(.5+.5*(a/4)*Math.cos(u),.5+.5*(a/4)*Math.sin(u))}}for(let a=0;a<28;a++)r.push(0,1+(a+1)%28,1+a);for(let a=1;a<4;a++)for(let l=0;l<28;l++){let h=1+(a-1)*28+l,u=1+(a-1)*28+(l+1)%28,d=h+28,f=u+28;r.push(h,u,d,u,f,d)}let o=new je;return o.setAttribute("position",new he(i,3)),o.setAttribute("uv",new he(s,2)),o.setIndex(r),o}function N0(){let n=new ee(Qp(.4),new Li({map:Jp(),transparent:!0,depthWrite:!1,side:vn}));return n.userData.angle=.4,n.renderOrder=1,n}var i1=.8,n1="#ff4f7a",s1=1,r1=53,pd=Math.PI*2,V0=14,G0=40*Math.PI/180,Ql=Math.cos(G0),tc=-Math.sin(G0),Pr=[.112,.535,0],L0=.125,F0=.1,aa=[Pr[0]+Ql*L0,Pr[1]+tc*L0,0],r_=[aa[0]+Ql*F0,aa[1]+tc*F0,0],o1=[r_[0]+Ql*.035,r_[1]+tc*.035,0],Ir=[.085,.3,0],la=[.085,.175,0],ec=[.085,.07,0],W0=Ir[1]-la[1],X0=la[1]-ec[1],a1=W0+X0,t_=ec[1],q0=.34,l1=.42,Y0=.49,c1=.605;function ra(n,t,e,i){let s=t[0]-n[0],r=t[1]-n[1],o=t[2]-n[2],a=s*s+r*r+o*o,l=e-i,h=a-l*l,u=1/a,d=Math.sign(l)*l*l;return(f,p,_)=>{let b=f-n[0],g=p-n[1],m=_-n[2],x=b*s+g*r+m*o,C=x-a,y=b*a-s*x,T=g*a-r*x,S=m*a-o*x,R=y*y+T*T+S*S,w=x*x*a,M=C*C*a,P=d*R;return Math.sign(C)*h*M>P?Math.sqrt(R+M)*u-i:Math.sign(x)*h*w<P?Math.sqrt(R+w)*u-e:(Math.sqrt(R*h*u)+x*l)*u-e}}function h1(n,t){return(e,i,s)=>{let r=(e-n[0])/t[0],o=(i-n[1])/t[1],a=(s-n[2])/t[2],l=Math.sqrt(r*r+o*o+a*a),h=r/t[0],u=o/t[1],d=a/t[2],f=Math.sqrt(h*h+u*u+d*d);return f>1e-9?l*(l-1)/f:-Math.min(t[0],t[1],t[2])}}function u1(n,t){return(e,i,s)=>{let r=e-n[0],o=i-n[1],a=s-n[2];return Math.sqrt(r*r+o*o+a*a)-t}}var vs=(n,t,e)=>{let i=Math.max(e-Math.abs(n-t),0)/e;return Math.min(n,t)-i*i*e*.25},d1=ra([0,.355,0],[0,.52,0],.14,.113),ri={head:h1([0,.803,0],[.207,.197,.19]),torso:(n,t,e)=>d1(n,t,e/.86)*.93,thigh:ra(Ir,la,.066,.06),shin:ra(la,ec,.06,.055),foot:ra([.085,.06,-.014],[.088,.054,.05],.06,.054),upper:ra(Pr,aa,.056,.05),fore:ra(aa,r_,.05,.046),mitt:u1(o1,.06)},f1=.07,p1=.05,_1=.035;function e_(n,t,e){let i=n<0?-n:n,s=vs(ri.head(n,t,e),ri.torso(n,t,e),f1),r=vs(vs(ri.thigh(i,t,e),ri.shin(i,t,e),.03),ri.foot(i,t,e),.035),o=vs(vs(ri.upper(i,t,e),ri.fore(i,t,e),.02),ri.mitt(i,t,e),.025);return vs(vs(s,r,p1),o,_1)}var Kl=n=>[-n[0],n[1],n[2]],oa=[["hips",-1,[0,q0,0]],["spine",0,[0,l1,0]],["chest",1,[0,Y0,0]],["head",2,[0,c1,0]],["upperL",2,Pr],["foreL",4,aa],["upperR",2,Kl(Pr)],["foreR",6,Kl(aa)],["thighL",0,Ir],["shinL",8,la],["footL",9,ec],["thighR",0,Kl(Ir)],["shinR",11,Kl(la)],["footR",12,Kl(ec)]],Ji=oa.length,Cr=[[ri.head,0,0,3],[ri.torso,0,0,-1],[ri.upper,1,1,4],[ri.fore,1,1,5],[ri.mitt,1,1,5],[ri.upper,-1,2,6],[ri.fore,-1,2,7],[ri.mitt,-1,2,7],[ri.thigh,1,3,8],[ri.shin,1,3,9],[ri.foot,1,3,10],[ri.thigh,-1,4,11],[ri.shin,-1,4,12],[ri.foot,-1,4,13]],m1=.02;function g1(n,t,e,i){let s=Math.ceil((e[0]-t[0])/i),r=Math.ceil((e[1]-t[1])/i),o=Math.ceil((e[2]-t[2])/i),a=s+1,l=r+1,h=o+1,u=new Float32Array(a*l*h),d=0;for(let S=0;S<h;S++){let R=t[2]+S*i;for(let w=0;w<l;w++){let M=t[1]+w*i;for(let P=0;P<a;P++)u[d++]=n(t[0]+P*i,M,R)}}let f=(S,R,w)=>S+a*(R+l*w),p=[0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1],_=[0,1,2,3,4,5,6,7,0,2,1,3,4,6,5,7,0,4,1,5,2,6,3,7],b=new Int32Array(s*r*o).fill(-1),g=[],m=new Float32Array(8);for(let S=0;S<o;S++)for(let R=0;R<r;R++)for(let w=0;w<s;w++){let M=0;for(let L=0;L<8;L++)m[L]=u[f(w+p[L*3],R+p[L*3+1],S+p[L*3+2])],m[L]<0&&M++;if(M===0||M===8)continue;let P=0,N=0,U=0,k=0;for(let L=0;L<12;L++){let V=_[L*2],j=_[L*2+1];if(m[V]<0==m[j]<0)continue;let Z=m[V]/(m[V]-m[j]);P+=p[V*3]+Z*(p[j*3]-p[V*3]),N+=p[V*3+1]+Z*(p[j*3+1]-p[V*3+1]),U+=p[V*3+2]+Z*(p[j*3+2]-p[V*3+2]),k++}b[w+s*(R+r*S)]=g.length/3,g.push(t[0]+(w+P/k)*i,t[1]+(R+N/k)*i,t[2]+(S+U/k)*i)}let x=(S,R,w)=>b[S+s*(R+r*w)],C=[],y=(S,R)=>g[S*3+R],T=(S,R,w,M,P,N)=>{if(S<0||R<0||w<0||M<0)return;let U=y(w,0)-y(S,0),k=y(w,1)-y(S,1),L=y(w,2)-y(S,2),V=y(M,0)-y(R,0),j=y(M,1)-y(R,1),Z=y(M,2)-y(R,2);if([k*Z-L*j,L*V-U*Z,U*j-k*V][P]*N<0){let $=R;R=M,M=$}U*U+k*k+L*L<=V*V+j*j+Z*Z?C.push(S,R,w,S,w,M):C.push(S,R,M,R,w,M)};for(let S=1;S<o;S++)for(let R=1;R<r;R++)for(let w=0;w<s;w++){let M=u[f(w,R,S)],P=u[f(w+1,R,S)];M<0!=P<0&&T(x(w,R-1,S-1),x(w,R,S-1),x(w,R,S),x(w,R-1,S),0,M<0?1:-1)}for(let S=1;S<o;S++)for(let R=0;R<r;R++)for(let w=1;w<s;w++){let M=u[f(w,R,S)],P=u[f(w,R+1,S)];M<0!=P<0&&T(x(w-1,R,S-1),x(w,R,S-1),x(w,R,S),x(w-1,R,S),1,M<0?1:-1)}for(let S=0;S<o;S++)for(let R=1;R<r;R++)for(let w=1;w<s;w++){let M=u[f(w,R,S)],P=u[f(w,R,S+1)];M<0!=P<0&&T(x(w-1,R-1,S),x(w,R-1,S),x(w,R,S),x(w-1,R,S),2,M<0?1:-1)}return{pos:new Float32Array(g),tris:C}}function w1(n,t){let e=Array.from({length:n},()=>new Set);for(let i=0;i<t.length;i+=3){let s=t[i],r=t[i+1],o=t[i+2];e[s].add(r),e[s].add(o),e[r].add(s),e[r].add(o),e[o].add(s),e[o].add(r)}return e.map(i=>[...i])}var Zi=.0012;function b1(n,t,e,i,s){return s[0]=(n(t+Zi,e,i)-n(t-Zi,e,i))/(2*Zi),s[1]=(n(t,e+Zi,i)-n(t,e-Zi,i))/(2*Zi),s[2]=(n(t,e,i+Zi)-n(t,e,i-Zi))/(2*Zi),s}function y1(n,t,e,i){let s=n.length/3,r=new Float32Array(n.length),o=[0,0,0];for(let a=0;a<i;a++){for(let l=0;l<s;l++){let h=t[l];if(!h.length){r[l*3]=n[l*3],r[l*3+1]=n[l*3+1],r[l*3+2]=n[l*3+2];continue}let u=0,d=0,f=0;for(let _ of h)u+=n[_*3],d+=n[_*3+1],f+=n[_*3+2];let p=h.length;r[l*3]=.4*n[l*3]+.6*u/p,r[l*3+1]=.4*n[l*3+1]+.6*d/p,r[l*3+2]=.4*n[l*3+2]+.6*f/p}for(let l=0;l<s;l++){let h=r[l*3],u=r[l*3+1],d=r[l*3+2];for(let f=0;f<2;f++){let p=e(h,u,d);o[0]=(e(h+Zi,u,d)-p)/Zi,o[1]=(e(h,u+Zi,d)-p)/Zi,o[2]=(e(h,u,d+Zi)-p)/Zi;let _=o[0]*o[0]+o[1]*o[1]+o[2]*o[2]||1;h-=p*o[0]/_,u-=p*o[1]/_,d-=p*o[2]/_}n[l*3]=h,n[l*3+1]=u,n[l*3+2]=d}}}function v1(n,t){let e=1-Ai(.36,.44,n),i=Ai(.44,.53,n);t[0]=e,t[2]=i,t[1]=Math.max(0,1-e-i)}function x1(n,t){let e=n.length/3,i=new Float32Array(e*Ji),s=new Float32Array(Cr.length),r=[0,0,0];for(let d=0;d<e;d++){let f=n[d*3],p=n[d*3+1],_=n[d*3+2],b=0;for(let C=0;C<Cr.length;C++){let[y,T]=Cr[C];s[C]=y(T<0?-f:f,p,_),s[C]<s[b]&&(b=C)}let g=Cr[b][2],m=s[b];for(let C=0;C<Cr.length;C++){let y=Cr[C][2];if(g!==0&&y!==0&&y!==g)continue;let T=Math.exp(-(s[C]-m)/m1),S=Cr[C][3];S>=0?i[d*Ji+S]+=T:(v1(p,r),i[d*Ji]+=T*r[0],i[d*Ji+1]+=T*r[1],i[d*Ji+2]+=T*r[2])}let x=0;for(let C=0;C<Ji;C++)x+=i[d*Ji+C];for(let C=0;C<Ji;C++)i[d*Ji+C]/=x}let o=new Float32Array(i.length);for(let d=0;d<2;d++){for(let f=0;f<e;f++){let p=t[f];for(let _=0;_<Ji;_++){let b=i[f*Ji+_]*2;for(let g of p)b+=i[g*Ji+_];o[f*Ji+_]=b/(2+p.length)}}i.set(o)}let a=new Uint16Array(e*4),l=new Float32Array(e*4),h=[0,0,0,0],u=[0,0,0,0];for(let d=0;d<e;d++){u.fill(-1);for(let p=0;p<Ji;p++){let _=i[d*Ji+p];if(_<=u[3])continue;let b=3;for(;b>0&&u[b-1]<_;)u[b]=u[b-1],h[b]=h[b-1],b--;u[b]=_,h[b]=p}let f=u[0]+u[1]+u[2]+u[3];for(let p=0;p<4;p++)a[d*4+p]=h[p],l[d*4+p]=u[p]/f}return{idx:a,wgt:l}}var i_=null;function S1(){if(i_)return i_;let n=performance.now(),{pos:t,tris:e}=g1(e_,[-.405,-.035,-.225],[.405,1.035,.225],1/r1),i=performance.now(),s=w1(t.length/3,e);y1(t,s,e_,3);let r=performance.now(),o=t.length/3,a=new Float32Array(t.length),l=[0,0,0];for(let p=0;p<o;p++){b1(e_,t[p*3],t[p*3+1],t[p*3+2],l);let _=Math.hypot(l[0],l[1],l[2])||1;a[p*3]=l[0]/_,a[p*3+1]=l[1]/_,a[p*3+2]=l[2]/_}let{idx:h,wgt:u}=x1(t,s),d=performance.now(),f=new je;return f.setAttribute("position",new di(t,3)),f.setAttribute("normal",new di(a,3)),f.setAttribute("skinIndex",new Fs(h,4)),f.setAttribute("skinWeight",new he(u,4)),f.setIndex(o>65535?new lr(e,1):new Fs(e,1)),f.computeBoundingSphere(),f.userData.shared=!0,f.userData.stats={triangles:e.length/3,vertices:o,buildMs:performance.now()-n,gridMs:i-n,relaxMs:r-i,skinMs:d-r},i_=f,f}var M1=`
  #include <common>
  #include <skinning_pars_vertex>
  #include <fog_pars_vertex>
  uniform vec2 uRes;        // size of the target being drawn, device px
  uniform float uWidthPx;   // line width, device px
  uniform float uRadius;    // half the hero's height, hero units
  void main() {
    #include <beginnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <begin_vertex>
    #include <skinning_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
    // hero height in world units: the body squash keeps volume, so the cube
    // root of the scale's determinant is the height set by setHeight
    float worldR = uRadius * pow(abs(determinant(mat3(modelMatrix))), 1.0 / 3.0);
    vec4 c0 = projectionMatrix * mvPosition;
    float diamPx = worldR * projectionMatrix[1][1] / max(c0.w, 1e-4) * uRes.y;
    float w = uWidthPx * pow(max(diamPx, 1.0) / (0.13 * min(uRes.x, uRes.y)), 0.2);
    w = clamp(w, min(1.0, uWidthPx), uWidthPx * 1.6) * smoothstep(12.0, 36.0, diamPx);
    // slide the hull back along the view ray by twice the line width: the line
    // on screen is unchanged, but it no longer pokes through creases
    float pxWorld = 2.0 * max(c0.w, 1e-4) / (projectionMatrix[1][1] * uRes.y);
    mvPosition.xyz += normalize(mvPosition.xyz) * (2.0 * w * pxWorld);
    vec4 clip = projectionMatrix * mvPosition;
    vec3 nRaw = normalMatrix * objectNormal;
    float nl = length(nRaw);
    vec3 nV = nl > 1e-6 ? nRaw / nl : vec3(0.0);
    vec4 dClip = projectionMatrix * vec4(nV, 0.0);
    vec2 dNdc = dClip.xy * clip.w - clip.xy * dClip.w;  // d(ndc)/dn, without the 1/w^2
    vec2 dir = dNdc * uRes;                             // in pixels, so aspect does not skew it
    float dl = length(dir);
    dir = dl > 1e-6 ? dir / dl : vec2(0.0);
    clip.xy += dir * (w * 2.0 / uRes) * clip.w;
    gl_Position = clip;
    #include <fog_vertex>
  }`,E1=`
  uniform vec3 uColor;
  #include <fog_pars_fragment>
  void main() {
    gl_FragColor = vec4(uColor, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`;function T1(n){let t=new Ht(n),e={};return t.getHSL(e,Ae),t.setHSL(e.h,Math.min(1,e.s+.1),.18,Ae)}var n_=new Pe,s_=new qt;function R1(n,t,e){let i=new Be({uniforms:tn.merge([xt.fog,{uRes:{value:new qt(1,1)},uWidthPx:{value:1},uRadius:{value:.5},uColor:{value:new Ht}}]),vertexShader:M1,fragmentShader:E1,side:mi,fog:!0});i.uniforms.uColor.value.copy(e);let s=new ho(n,i);return s.bind(t,new Yt),s.frustumCulled=!1,s.castShadow=s.receiveShadow=!1,s.renderOrder=1,s.userData.outline=!0,s.userData.widthCss=1,s.raycast=()=>{},s.onBeforeRender=r=>{r.getCurrentViewport(n_),i.uniforms.uRes.value.set(Math.max(1,n_.z),Math.max(1,n_.w));let o=r.getRenderTarget(),a=r.getPixelRatio();o&&(r.getSize(s_),s_.y>0&&(a=o.height/s_.y)),i.uniforms.uWidthPx.value=s.userData.widthCss*a},s}function gd(n=n1,t={}){let e=S1(),i=new Ye;i.name="hero";let s=new Ye;i.add(s);let r=oa.map(([b])=>{let g=new uo;return g.name=b,g});oa.forEach(([,b,g],m)=>{let x=b>=0?oa[b][2]:[0,0,0];r[m].position.set(g[0]-x[0],g[1]-x[1],g[2]-x[2]),(b>=0?r[b]:s).add(r[m])});for(let b of[0,1,2,3])r[b].rotation.order="YXZ";for(let b of[8,11])r[b].rotation.order="ZXY";let o=new Ha(r,oa.map(([,,b])=>new Yt().makeTranslation(-b[0],-b[1],-b[2]))),a=Rr(n),l=new ho(e,a);l.bind(o,new Yt),l.frustumCulled=!1,l.castShadow=l.receiveShadow=!1,s.add(l);let h={};oa.forEach(([b],g)=>{h[b]=r[g]});let u=C1(),d=i.userData={body:s,bones:h,mesh:l,mat:a,skeleton:o,anim:u,yaw:0,cheer:0,hopY:0,hopV:0,height:1},f=null,p=t.outlinePx??s1,_=t.outlineColor?new Ht(t.outlineColor):T1(n);return d.setOutline=(b=!0,g,m)=>{typeof b=="number"&&(g=b,b=b>0),typeof g=="number"&&g>=0&&(p=g,g===0&&(b=!1)),b&&!f&&(f=R1(e,o,_),s.add(f)),f&&(f.visible=!!b,f.userData.widthCss=p,m!==void 0&&f.material.uniforms.uColor.value.set(m)),d.outline=f},d.setOutline(t.outline!==!1),d.kick=(b=1)=>{d.hopY<=.001&&u.pre<=0&&(u.pre=.07,u.preV=2.2*b)},d.poke=()=>{u.pokeT=0,u.pokeSign=-u.pokeSign,d.hopY<=.001&&(u.pre=0,o_(d,u,2.9)),u.sq.v+=3,u.headP.v-=6},d.bump=(b=1)=>{let g=pn(b,.2,1.6);u.bumpT=0,u.bumpS=g,u.bumpSign=-u.bumpSign,u.lean.v-=7*g,u.roll.v+=4.5*g*u.bumpSign,u.headP.v-=9*g,u.sq.v-=2.5*g,d.hopY<=.001&&u.pre<=0&&o_(d,u,1.1*g)},ic(i,i1),i}function ic(n,t){n.userData.height=t,n.scale.setScalar(t)}var pn=(n,t,e)=>n<t?t:n>e?e:n;function Ai(n,t,e){let i=pn((e-n)/(t-n),0,1);return i*i*(3-2*i)}var _d=(n,t,e,i)=>n+(t-n)*(1-Math.exp(-e*i)),na=()=>({x:0,v:0});function sa(n,t,e,i,s){let r=Math.max(1,Math.ceil(s*240)),o=s/r;for(let a=0;a<r;a++)n.v+=(e*e*(t-n.x)-2*i*e*n.v)*o,n.x+=n.v*o}function o_(n,t,e){n.hopV=Math.max(n.hopV,e),t.airT=0,t.airDur=2*n.hopV/V0,t.sq.v+=1.6*e}function C1(){let n=()=>new F;return{phase:0,walk:0,run:0,flail:0,velF:0,lean:na(),roll:na(),sq:na(),headP:na(),headR:na(),armF:na(),pre:0,preV:0,airT:0,airDur:.4,spinOn:!1,spinNext:!1,hops:0,pokeT:9,pokeSign:1,bumpT:9,bumpS:0,bumpSign:1,D:n(),F:n(),D2:n(),F2:n(),D3:n(),F3:n(),T:[n(),n()],A:[n(),n()],foot:[0,0]}}function Ar(n,t,e,i,s,r){let o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s);n.set(e*a,-o*l,o*h);let u=Math.cos(r),d=Math.sin(r);t.set(n.x*u,n.y*u+h*d,n.z*u+l*d)}function U0(n,t,e,i,s,r){let o=Math.cos(s),a=Math.sin(s);n.set(e*i,-o,a).normalize(),t.set(n.x,n.y+r*a,n.z+r*o).normalize()}var B0=new F;function Oi(n,t,e){if(e<=0)return n;if(e>=1)return n.copy(t);let i=pn(n.dot(t),-1,1);if(i>.9995)return n.lerp(t,e).normalize();if(i<-.9995){B0.set(0,0,1).addScaledVector(n,-n.z).normalize();let l=Math.cos(Math.PI*e),h=Math.sin(Math.PI*e);return n.multiplyScalar(l).addScaledVector(B0,h)}let s=Math.acos(i),r=Math.sin(s),o=Math.sin((1-e)*s)/r,a=Math.sin(e*s)/r;return n.set(n.x*o+t.x*a,n.y*o+t.y*a,n.z*o+t.z*a)}var O0=[new F(Ql,tc,0),new F(-Ql,tc,0)],gA=new ti,md=new ti,Ki=new F,z0=new Yt;function k0(n,t,e,i,s){let r=Ai(-.5,.85,i.y),o=e?-1:1;n.position.set(o*(Pr[0]-.006*r),Pr[1]-Y0+.03*r,0),n.quaternion.setFromUnitVectors(O0[e],i),md.copy(n.quaternion).invert(),Ki.copy(s).applyQuaternion(md),t.quaternion.setFromUnitVectors(O0[e],Ki)}function j0(n,t,e){return e.set(t*Ir[0],Ir[1]-q0,0).applyQuaternion(n.quaternion).add(n.position)}function H0(n,t,e,i,s,r,o){j0(n,s,Ki),Ki.subVectors(r,Ki),md.copy(n.quaternion).invert(),Ki.applyQuaternion(md);let a=Ki.x,l=Math.min(Ki.y,-.02),h=Ki.z,u=pn(Math.atan2(a,-l),-.6,.6),d=Math.hypot(a,l),f=W0,p=X0,_=pn(Math.hypot(d,h),Math.abs(f-p)+.02,f+p-1e-4),b=Math.atan2(-h,d),g=Math.acos(pn((f*f+_*_-p*p)/(2*f*_),-1,1)),m=Math.acos(pn((f*f+p*p-_*_)/(2*f*p),-1,1)),x=b-g,C=Math.PI-m;t.rotation.set(x,0,u),e.rotation.set(C,0,0),i.rotation.set(pn(o-(n.rotation.x+x+C),-.5,.5),0,-u*.6)}function wd(n,t,e,i,s,r="play"){let o=n.userData,a=o.anim,l=o.bones;if(!a)return;t=t>0?Math.min(t,.1):0;let h=o.height||1,u=Math.max(0,i||0)/h,d=r==="lobby"||r==="idle",f=0;if(s&&i>.15*h){let At=Math.atan2(s.x,s.z)-o.yaw;At=Math.atan2(Math.sin(At),Math.cos(At)),o.yaw+=At*(1-Math.exp(-t*14)),f=At*14}a.walk=_d(a.walk,Ai(.12,.9,u),t,8),a.run=_d(a.run,Ai(.6,5.5,u),t,4),a.flail=_d(a.flail,Ai(5.5,11,u),t,3);let p=a.walk,_=a.run,b=a.flail;a.phase+=t*pd*(1.9+1*_),a.phase>pd*512&&(a.phase-=pd*512);let g=a.phase;a.velF=_d(a.velF,u,t,5);let m=(u-a.velF)*5;o.cheer=r==="cheer"?Math.min(1,o.cheer+t*4):Math.max(0,o.cheer-t*4);let x=o.cheer;x>.5&&o.hopY<=.001&&o.hopV<=0&&a.pre<=0&&(a.hops++,a.spinNext=a.hops%3===0,a.pre=.07,a.preV=2.5),a.pre>0&&(a.pre-=t,a.pre<=0&&(a.pre=0,o_(o,a,a.preV),a.spinOn=a.spinNext,a.spinNext=!1));let C=o.hopY>0;if(o.hopV-=V0*t,o.hopY+=o.hopV*t,o.hopY<=0){if(C&&o.hopV<-.8){let At=Math.min(4.5,-o.hopV);a.sq.v-=At*.75,a.headP.v+=At*.5,a.pokeT<1.2&&(a.roll.v+=3.2*a.pokeSign)}o.hopY=0,o.hopV=0,a.spinOn=!1}else a.airT+=t;let y=Ai(0,.035,o.hopY),T=a.spinOn?pd*Ai(0,1,a.airT/a.airDur):0;a.pokeT<9&&(a.pokeT+=t),a.bumpT<9&&(a.bumpT+=t);let S=Ai(0,.04,a.pokeT)*(1-Ai(.38,.58,a.pokeT)),R=.5+.3*Math.min(1,a.bumpS),w=Ai(0,.05,a.bumpT)*(1-Ai(R-.25,R,a.bumpT))*Math.min(1,.45+.55*a.bumpS),M=(e%8+8)%8,P=d?(1-p)*(1-x)*(1-S):0,N=r==="lobby"?P*Ai(.9,1.3,M)*(1-Ai(3.3,3.7,M)):0,U=r==="lobby"?P*Ai(4.9,5.3,M)*(1-Ai(6.7,7.1,M)):0,k=Math.sin(e*2.3)*(1-p);sa(a.lean,(.08+.34*_)*p+pn(-m*.03,-.15,.45)-.1*x-.12*y-.2*S,11,.3,t),sa(a.roll,pn(-f*.085,-.4,.4)*Ai(.2,1.5,u),9,.35,t),sa(a.sq,a.pre>0?-.15:o.hopV>0?.05*y:0,20,.28,t),sa(a.headP,0,12,.3,t),sa(a.headR,-.5*a.roll.x,10,.35,t),sa(a.armF,pn(-m*.06,-.3,1.2),10,.4,t);let L=a.lean.x,V=p*(.1+.08*_),j=Math.cos(g),Z=Math.sin(g);l.hips.rotation.set(.4*L,-V*j,.06*p*Z),l.spine.rotation.set(.3*L+.02*k,.8*V*j,-.03*p*Z),l.chest.rotation.set(.3*L+.025*k-.08*x,.8*V*j,-.02*p*Z);let lt=-p*(.04+.06*_)*Math.cos(2*g-.9),$=P*(1-N)*(.45*Math.sin(e*.53)+.15*Math.sin(e*1.37+1)),nt=P*.06*Math.sin(e*.71);l.head.rotation.set(-.75*L+a.headP.x+lt+nt-.15*x-.25*S,$-.6*V*j,a.headR.x+N*.12+x*.1*Math.sin(e*7));let at=p*(-(.014+.024*_)+(.018+.02*_)*Math.cos(2*g)),It=pn(1+a.sq.x+p*(.015+.04*_)*Math.cos(2*g)+.006*k,.7,1.35),Dt=1/Math.sqrt(It),Ee=-(.09-.05*_)*p*Math.sin(g),de=a.roll.x+Ee+U*.12*Math.sin(e*5.2)+x*(1-y)*.07*Math.sin(e*9)+N*.03*Math.sin(e*5),fe=o.groundR>0?o.groundR:1e6,Q=(At,se)=>-(fe-Math.sqrt(Math.max(0,fe*fe-At*At-se*se))),it=(.05+.095*_)*p,Mt=(.05+.12*_)*p,Vt=at+o.hopY,Tt=1e9;for(let At=0;At<2;At++){let se=At?-1:1,ce=g+(At?Math.PI:0),we=Math.cos(ce),B=Math.sin(ce),Ve=Math.max(0,.2-B)/1.2,ve=it*we,I=se*(Ir[0]+.003-.008*p);a.T[At].set(I,Q(I,ve)+t_+Mt*Ve*(1+.45*we),ve),a.foot[At]=Math.asin(pn(ve/fe,-1,1))+p*.6*Ve*-we,j0(l.hips,se,Ki);let v=a.T[At].x-Ki.x,H=a.T[At].z-Ki.z,W=Math.sqrt(Math.max(0,(.985*a1)**2-v*v-H*H));Tt=vs(Tt,a.T[At].y-It*(Ki.y-W),.03)}Vt=Vt*y+vs(Vt,Tt,.025)*(1-y);let ae=a.hops%2?1:-1;for(let At=0;At<2;At++){let se=At?-1:1,ce=a.A[At],we=.115+.035*x*se*ae;if(ce.set(se*.1,t_+we,.045+.03*x*se*ae),S>0){let B=a.pokeT*18+(At?Math.PI:0);Ki.set(se*.1,t_+.07+.05*Math.sin(B),.06*Math.cos(B)),ce.lerp(Ki,S)}}let Ue=o.body;Ue.position.set(0,Vt,0),Ue.rotation.set(0,0,de),Ue.scale.set(Dt,It,Dt),l.head.scale.set(Dt**-.6,It**-.6,Dt**-.6),Ue.updateMatrix(),z0.copy(Ue.matrix).invert();for(let At=0;At<2;At++){let se=a.T[At].applyMatrix4(z0).lerp(a.A[At],y),ce=At?-1:1,we=a.foot[At]*(1-y)+.5*y;At===0?H0(l.hips,l.thighL,l.shinL,l.footL,ce,se,we):H0(l.hips,l.thighR,l.shinR,l.footR,ce,se,we)}let $t=a.D,ie=a.F,ne=a.D2,Gt=a.F2,Ce=1.4*Math.abs(a.roll.x);for(let At=0;At<2;At++){let se=At?-1:1,ce=g+(At?Math.PI:0),we=a.armF.x;if(Ar($t,ie,se,.16+.03*k+Ce+.2*Math.max(0,we),.05+we,.3+.5*Math.max(0,we)),p>.001){let B=-Math.cos(ce);Ar(ne,Gt,se,.3+.25*_+Ce,.12+B*(.6+.7*_)+we,1.2-.45*Math.cos(ce-.9)),b>.001&&(Ar(a.D3,a.F3,se,.9+.25*Math.sin(2*ce+.6),-.95+.3*Math.sin(2*ce),.5+.3*Math.sin(2*ce-1)),Oi(ne,a.D3,.65*b),Oi(Gt,a.F3,.65*b)),Oi($t,ne,p),Oi(ie,Gt,p)}if(At===1&&N>0){Ar(ne,Gt,se,2,.25,0);let B=2.8+.38*Math.sin(e*10);Gt.set(se*Math.sin(B),-Math.cos(B),.2).normalize(),Oi($t,ne,N),Oi(ie,Gt,N)}if(U>0&&(Ar(ne,Gt,se,1.45+.25*Math.sin(e*5.2)*se,.1,.25),Oi($t,ne,U),Oi(ie,Gt,U)),y>0&&x<1&&(Ar(ne,Gt,se,2.45,-.3,.35),Oi($t,ne,y*(1-x)),Oi(ie,Gt,y*(1-x))),x>0){let B=e*11+At*1.7;Ar(ne,Gt,se,2.45+.2*Math.sin(B),-.4,0);let Ve=.2+.45*Math.sin(B+1.2);Gt.set(se*Math.sin(Ve),Math.cos(Ve),.12).normalize(),Oi($t,ne,x),Oi(ie,Gt,x)}S>0&&(U0(ne,Gt,se,.75,1.5+se*a.pokeT*17,.5),Oi($t,ne,S),Oi(ie,Gt,S)),w>0&&(U0(ne,Gt,se,.6,1-a.bumpT*15+(At?Math.PI:0),.45),Oi($t,ne,w),Oi(ie,Gt,w)),At===0?k0(l.upperL,l.foreL,0,$t,ie):k0(l.upperR,l.foreR,1,$t,ie)}n.rotation.y=o.yaw+T}var A1=new cn(1,64,40),P1=`
  uniform float time, jig, squash;
  uniform vec3 motion;           // world velocity, scaled so 1 = fast
  varying vec2 vUv;
  varying vec3 vN, vV;
  void main() {
    vUv = uv;
    vec3 c = (modelMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
    float r = length((modelMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz);
    vec3 d = (modelMatrix * vec4(position, 1.0)).xyz - c;
    vec3 n = d / r;
    // jelly wobble: two crossing waves over the surface
    float w = sin(time * 13.0 + n.x * 4.0 + n.y * 3.0) * sin(time * 9.0 + n.z * 4.0 - n.y * 2.0);
    d += n * r * jig * 0.07 * w;
    // lean into the roll: the leading side bulges a little
    float sp = length(motion);
    if (sp > 0.001) { vec3 md = motion / sp; d += md * max(0.0, dot(n, md)) * r * sp * 0.07; }
    // squash on landing and bumps, bottom stays on the floor
    d.y = d.y * (1.0 - squash) - r * squash;
    d.xz *= 1.0 + squash * 0.55;
    vec4 wp = vec4(c + d, 1.0);
    vec4 mv = viewMatrix * wp;
    vN = normalize(mat3(viewMatrix) * n);
    vV = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`,I1=`
  uniform sampler2D map;
  uniform float clarity;
  varying vec2 vUv;
  varying vec3 vN, vV;
  void main() {
    vec3 N = normalize(vN), V = normalize(vV);
    vec3 base = texture2D(map, vUv).rgb;
    float luma = dot(base, vec3(0.299, 0.587, 0.114));
    base = max(mix(vec3(luma), base, 1.2), 0.0);           // water deepens the colour
    float face = 1.0 - smoothstep(0.05, 0.2, luma);       // eyes and mouth stay solid
    vec3 L = normalize(vec3(-0.42, 0.55, 0.72));
    float ndl = dot(N, L);
    float nv = max(dot(N, V), 0.0);
    float fres = pow(1.0 - nv, 2.5);
    // body: soft two-tone, a touch deeper on the shaded side
    vec3 deep = base * vec3(0.78, 0.74, 0.86);
    vec3 col = mix(deep, base * 1.04, smoothstep(-0.35, 0.55, ndl));
    // light gathering on the far lower side, like sun through a water drop
    float glowK = smoothstep(0.25, 0.95, dot(N, normalize(vec3(0.38, -0.62, 0.55))));
    col += (base * 0.6 + 0.25) * glowK * 0.55 * (1.0 - face);
    // rim: lighter on the lit side, a deeper tint of the colour at the very edge
    col += mix(base, vec3(1.0), 0.4) * fres * 0.22 * smoothstep(-0.6, 0.4, ndl);
    col = mix(col, base * vec3(0.55, 0.45, 0.6), smoothstep(0.78, 0.98, 1.0 - nv) * 0.7);
    // highlights: a big soft window, a sharp spot and a small second spot
    float h1 = dot(N, normalize(vec3(-0.4, 0.58, 0.72)));
    float h2 = dot(N, normalize(vec3(0.5, -0.3, 0.8)));
    float spec = smoothstep(0.955, 0.975, h1) * 0.8 + smoothstep(0.8, 0.97, h1) * 0.06 + smoothstep(0.98, 0.988, h2) * 0.5;   // small spots: a big white patch reads as plastic
    col = mix(col, vec3(1.0), clamp(spec, 0.0, 1.0));
    // see-through middle, solid rim, face and highlights
    float a = mix(clarity, 1.0, max(max(face, fres * 1.1), spec));
    gl_FragColor = linearToOutputTexel(vec4(col, clamp(a, 0.0, 1.0)));
  }`;function ca(n="smiley"){let t=new Be({uniforms:{map:{value:Kp(n)},clarity:{value:.72},time:{value:0},jig:{value:0},squash:{value:0},motion:{value:new F}},vertexShader:P1,fragmentShader:I1,transparent:!0});Object.defineProperty(t,"map",{get(){return t.uniforms.map.value},set(r){t.uniforms.map.value=r}});let e=new ee(A1,t);e.castShadow=!0;let i=t.uniforms,s={jig:0,sq:0,sv:0,last:new F,t:0};return e.userData.wobble=(r,o,a)=>{s.t+=r,i.time.value=s.t;let l=0;if(o){let h=4*a+1;l=Math.min(1,o.length()/h),s.jig+=Math.min(.6,s.last.distanceTo(o)/h)*.9,s.last.copy(o),i.motion.value.copy(o).multiplyScalar(l/Math.max(1e-4,o.length()))}else i.motion.value.set(0,0,0);s.jig=Math.min(1,s.jig*Math.exp(-r*3.5)),s.sv+=(-630*s.sq-11.6*s.sv)*r,s.sq=Math.max(-.18,Math.min(.15,s.sq+s.sv*r)),i.jig.value=.1+s.jig+l*.3,i.squash.value=s.sq},e.userData.bump=(r=1)=>{s.sv+=2.6*r,s.jig=Math.min(1,s.jig+.5*Math.abs(r))},e.userData.plop=(r=1)=>{s.jig=Math.min(1,s.jig+.35*r),s.sv+=.6*r},e}var a_=260,xs=new Ht,$0=new Yt,D1=new F,N1=new F,L1=new ti,J0=new Ti,bd=class{constructor(t){this.mesh=new cr(new Xa(1,0),new Li({color:16777215}),a_),this.mesh.instanceColor=new Us(new Float32Array(a_*3),3),this.mesh.frustumCulled=!1,this.mesh.count=0,this.mesh.renderOrder=3,t.add(this.mesh),this.p=[],this.rings=[];let e=new qa(.82,1,56);for(let i=0;i<4;i++){let s=new ee(e,new Li({color:16777215,transparent:!0,depthWrite:!1,opacity:0}));s.rotation.x=-Math.PI/2,s.visible=!1,s.renderOrder=2,t.add(s),this.rings.push({m:s,t:1,life:1,r0:1,r1:2})}}clear(){this.p.length=0,this.mesh.count=0;for(let t of this.rings)t.m.visible=!1,t.t=t.life}add(t){this.p.length>=a_&&this.p.shift(),this.p.push(t)}burst(t,e,i,s=7){xs.set(e);let r=Math.max(.035,i*.16);for(let o=0;o<s;o++){let a=Math.random()*Math.PI*2,l=.5+Math.random()*.8,h=(1.6+Math.random()*1.6)*(.6+i*1.2),u=o<2;this.add({x:t.x,y:t.y,z:t.z,vx:Math.cos(a)*h,vy:l*h*1.1,vz:Math.sin(a)*h,g:14*(.6+i),life:.42+Math.random()*.18,t:0,size:r*(u?.7:1+Math.random()*.5),r:u?1:xs.r,gg:u?1:xs.g,b:u?1:xs.b,spin:Math.random()*10})}}dust(t,e,i="#ffffff"){xs.set(i);let s=Math.random()*Math.PI*2;this.add({x:t.x+Math.cos(s)*e*.12,y:t.y+e*.03,z:t.z+Math.sin(s)*e*.12,vx:Math.cos(s)*e*.4,vy:e*.9,vz:Math.sin(s)*e*.4,g:0,drag:3,life:.45,t:0,size:e*(.07+Math.random()*.05),grow:!0,r:xs.r,gg:xs.g,b:xs.b,spin:0})}ring(t,e,i,s=.55,r="#ffffff"){let o=this.rings.find(a=>a.t>=a.life)||this.rings[0];o.t=0,o.life=s,o.r0=e,o.r1=i,o.m.material.color.set(r),o.m.position.set(t.x,.03,t.z),o.m.visible=!0}update(t){let e=0;for(let i=this.p.length-1;i>=0;i--){let s=this.p[i];if(s.t+=t,s.t>=s.life){this.p.splice(i,1);continue}if(s.vy-=s.g*t,s.drag){let a=Math.max(0,1-s.drag*t);s.vx*=a,s.vy*=a,s.vz*=a}s.x+=s.vx*t,s.y+=s.vy*t,s.z+=s.vz*t,s.y<s.size*.5&&(s.y=s.size*.5,s.vy=Math.abs(s.vy)*.35,s.vx*=.7,s.vz*=.7);let r=s.t/s.life,o=s.grow?s.size*(.6+r*.9)*(1-r*r):s.size*(1-r*r*r);J0.set(s.spin*s.t,s.spin*s.t*.7,0),$0.compose(D1.set(s.x,s.y,s.z),L1.setFromEuler(J0),N1.set(o,o,o)),this.mesh.setMatrixAt(e,$0),this.mesh.setColorAt(e,xs.setRGB(s.r,s.gg,s.b)),e++}this.mesh.count=e,e&&(this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0);for(let i of this.rings){if(i.t>=i.life){i.m.visible=!1;continue}i.t+=t;let s=Math.min(1,i.t/i.life),r=1-Math.pow(1-s,3);i.m.scale.setScalar(i.r0+(i.r1-i.r0)*r),i.m.material.opacity=.85*(1-s)}}};var nw=.6,sw=1.3,Js=.6;function Z0(n,t,e,i,s){let r=2/i,o=r*s,a=1/(1+o+.48*o*o+.235*o*o*o),l=n-t,h=(e+r*l)*s;return[t+(l+h)*a,(e-r*h)*a]}var Lr=n=>Js*Math.pow(sw,n-1),l_=n=>1+Math.floor(Math.log(n/Js+1e-6)/Math.log(sw)),F1=n=>{let t=1;for(;Lr(t)*nw+1e-6<n&&t<40;)t++;return t},K0=null,c_=()=>K0||(K0=Bi.init()),_n=new F,$s=new F,Dr=new F,Sn=new ti,Q0=new ti,Nr=new Yt,tw=new F(1,1,1),ew=new F(0,0,0),PA=new F(0,1,0),ha=1/60,U1=600,B1=.15,O1=.2,Ss={dps:2.4,grow:.95,accel:24,decel:18,scale:1},yd=class{constructor({headless:t=!1}={}){this.headless=t,this.scene=new fs,this.camera=new ui(60,9/19.5,.05,600),this.geos=E0(),this.itemMat=new Xi({vertexColors:!0,matcap:Vn()}),this.handlers={},this.level=null,this.hemi=new gs(16777215,9086664,1.9),this.sun=new hr(16777215,2.3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.hemi,this.sun,this.sun.target),this.ballMesh=ca("smiley"),this.rollGroup=new Ye,this.rollGroup.add(this.ballMesh),this.ballGroup=new Ye,this.ballGroup.add(this.rollGroup),this.hero=gd(),this.hero.userData.outline&&(this.hero.userData.outline.userData.noAO=!0),this.capShadow=N0(),this.ballGroup.add(this.capShadow),this.scene.add(this.ballGroup,this.hero),this.levelGroup=new Ye,this.scene.add(this.levelGroup),this.juice=t?null:new bd(this.scene),this.scene.fog=new ar(16777215,20,60)}on(t,e){var i;((i=this.handlers)[t]||(i[t]=[])).push(e)}emit(t,e){for(let i of this.handlers[t]||[])i(e)}setSkin(t){this.ballMesh.material.map.dispose();let e=ca(t).material;this.ballMesh.material.map=e.map,this.ballMesh.material.needsUpdate=!0}unload(){this.world&&(this.world.free(),this.world=null);for(let t of[...this.levelGroup.children])this.levelGroup.remove(t),t.isInstancedMesh?t.dispose():t.traverse(e=>{e.geometry&&!e.userData.shared&&e.geometry.dispose(),e.material&&e.material.map&&e.material.map.dispose()});this.items=[],this.level=null,this.active=!1}async load(t,e={}){await c_(),this.unload(),this.level=t;let i=new ud(t.seed||1);t.build(i);let[s,r]=t.size;this.W=s,this.Dp=r,this.scene.background=new Ht(t.theme.bg),this.scene.fog.color.set(t.theme.bg);let o=new Bi.World({x:0,y:-30,z:0});o.timestep=ha,this.world=o,o.createCollider(Bi.ColliderDesc.cuboid(s/2+2,.5,r/2+2).setTranslation(0,-.5,0).setFriction(.9));let a=40;o.createCollider(Bi.ColliderDesc.cuboid(.5,a,r/2+1).setTranslation(-s/2-.5,a,0)),o.createCollider(Bi.ColliderDesc.cuboid(.5,a,r/2+1).setTranslation(s/2+.5,a,0)),o.createCollider(Bi.ColliderDesc.cuboid(s/2+1,a,.5).setTranslation(0,a,-r/2-.5)),o.createCollider(Bi.ColliderDesc.cuboid(s/2+1,a,.5).setTranslation(0,a,r/2+.5)),this.D=e.bigStart?Lr(2):Js,this.Dtarget=this.D,this.Dvis=this.D,this.vol=0,this.baseVol=this.D**3;let l=this.D/2,[h,u]=t.start;this.ball=o.createRigidBody(Bi.RigidBodyDesc.dynamic().setTranslation(h,l,u).lockRotations().setLinearDamping(0).setCanSleep(!1)),this.ballCol=o.createCollider(Bi.ColliderDesc.ball(l).setDensity(2.2).setFriction(0).setFrictionCombineRule(Bi.CoefficientCombineRule.Min).setRestitution(0),this.ball),this.items=[],this.byCol=new Map,this.byBody=new Map;let d=new Map;for(let p of i.items){let _=sn[p.type],b=p.type+":"+p.v;d.has(b)||d.set(b,[]);let g={type:p.type,v:p.v,def:_,br:Jl(_),state:0,idx:0,mesh:null,lastBlock:-9};d.get(b).push(g),Sn.setFromEuler(new Ti(p.rx,p.ry,p.rz));let m=_.size>=1.5,x=Bi.RigidBodyDesc.dynamic().setTranslation(p.x,p.y,p.z).setRotation({x:Sn.x,y:Sn.y,z:Sn.z,w:Sn.w}).setLinearDamping(.15).setAngularDamping(_.shape==="ball"?2.5:.5),C=o.createRigidBody(x),y;_.shape==="box"?y=Bi.ColliderDesc.cuboid(..._.dims):_.shape==="cyl"?y=Bi.ColliderDesc.cylinder(_.dims[1],_.dims[0]):y=Bi.ColliderDesc.ball(_.dims[0]),y.setFriction(.75).setRestitution(.05).setDensity(m?5:1);let T=o.createCollider(y,C);g.body=C,g.col=T,this.byCol.set(T.handle,g),this.byBody.set(C.handle,g),this.items.push(g)}for(let[p,_]of d){let[b,g]=p.split(":"),m=new cr(this.geos[b][+g],this.itemMat,_.length);m.castShadow=!0,m.frustumCulled=!1,_.forEach((x,C)=>{x.mesh=m,x.idx=C}),this.levelGroup.add(m)}this.buildFloor(t,i);let f=t.settle||80;for(let p=0;p<f;p++)o.step(),p%10===9&&(e.onProgress?.(.3+.7*p/f),await new Promise(_=>setTimeout(_,0)));for(let p of this.items)p.body.setLinvel({x:0,y:0,z:0},!1),p.body.setAngvel({x:0,y:0,z:0},!1),p.body.sleep();for(let p of this.items)this.syncFree(p);return this.markAll(),this.goals=t.goals.map(p=>({...p,left:p.count})),this.collected={},this.time=0,this.timeLeft=t.time||0,this.freeze=0,this.speedBoost=0,this.magnet=0,this.magTick=0,this.sizeLevel=l_(this.D),this.stuck=[],this.combo=0,this.comboT=0,this.won=!1,this.active=!1,this.lastPos=new F(h,l,u),this.prevPos=new F(h,l,u),this.rPos=new F(h,l,u),this.acc=0,this.alpha=0,this.visVel=new F,this.heroY=l,this.shellT=0,this.rollGroup.quaternion.identity(),this.rollGroup.scale.setScalar(1),this.ballGroup.position.set(h,l,u),this.ballMesh.scale.setScalar(l),this.hero.userData.yaw=Math.PI,this.hero.userData.cheer=0,this.punch=0,this.punchV=0,this.shake=0,this.hitstop=0,this.slowT=0,this.dustT=0,this.juice?.clear(),this.camFrameD=Lr(this.sizeLevel),this.camDist=this.camTargetDist(this.camFrameD),this.camPitch=this.camTargetPitch(this.camFrameD),this.camDistV=0,this.camPitchV=0,this.camPos=null,this.camLook=null,this.outro=0,this.updateCamera(1),this.stats={items:this.items.length,picked:0},this}buildFloor(t,e){let[i,s]=t.size,r=t.theme,o=document.createElement("canvas");o.width=128,o.height=128;let a=o.getContext("2d");a.fillStyle=r.floor[0],a.fillRect(0,0,128,128),a.fillStyle=r.floor[1],a.fillRect(0,0,64,64),a.fillRect(64,64,64,64);let l=new Ci(o);l.colorSpace=Ae,l.wrapS=l.wrapT=Ei,l.repeat.set(i/4,s/4),l.anisotropy=8,l.magFilter=ke;let h=new ee(new Dn(i,s),new ts({map:l}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,this.levelGroup.add(h);let u=new ee(new In(i+1.2,3,s+1.2),new ts({color:r.edge}));if(u.position.y=-1.52,u.receiveShadow=!0,this.levelGroup.add(u),r.outside){let p=document.createElement("canvas");p.width=p.height=2;let _=p.getContext("2d"),b=new Ht(r.outside).multiplyScalar(.92).getStyle();_.fillStyle=r.outside,_.fillRect(0,0,2,2),_.fillStyle=b,_.fillRect(0,0,1,1),_.fillRect(1,1,1,1);let g=new Ci(p);g.colorSpace=Ae,g.magFilter=ke,g.minFilter=_i,g.wrapS=g.wrapT=Ei,g.repeat.set(900/16,900/16);let m=new ee(new Dn(900,900),new Li({map:g}));m.rotation.x=-Math.PI/2,m.position.y=-.06,this.levelGroup.add(m)}let d=new ts({color:r.rim}),f=(p,_,b,g)=>{let m=new ee(new ps(.3,b,4,10),d);m.rotation.z=Math.PI/2,m.rotation.y=g,m.position.set(p,.18,_),m.castShadow=!0,m.receiveShadow=!0,this.levelGroup.add(m)};f(0,-s/2-.3,i+.6,0),f(0,s/2+.3,i+.6,0),f(-i/2-.3,0,s+.6,Math.PI/2),f(i/2+.3,0,s+.6,Math.PI/2);for(let p of e.decals){let _;if(p.kind==="check"){let m=document.createElement("canvas");m.width=m.height=64;let x=m.getContext("2d");x.fillStyle=p.color,x.fillRect(0,0,64,64),x.fillStyle=p.color2;for(let y=0;y<4;y++)for(let T=0;T<4;T++)(y+T)%2&&x.fillRect(y*16,T*16,16,16);let C=new Ci(m);C.colorSpace=Ae,C.magFilter=ke,C.wrapS=C.wrapT=Ei,C.repeat.set(p.w/2,p.d/2),_=new ts({map:C})}else if(p.kind==="road"){let m=document.createElement("canvas");m.width=64,m.height=64;let x=m.getContext("2d");x.fillStyle=p.color,x.fillRect(0,0,64,64),x.fillStyle=p.color2,x.fillRect(28,8,8,32);let C=new Ci(m);C.colorSpace=Ae,C.wrapS=C.wrapT=Ei,C.repeat.set(1,p.d/2.5),_=new ts({map:C})}else _=new ts({color:p.color});let b=p.kind==="disc"?new _s(p.w/2,40):new Dn(p.w,p.d),g=new ee(b,_);g.rotation.x=-Math.PI/2,g.rotation.z=p.ry,g.position.set(p.x,.006+this.levelGroup.children.length*4e-4,p.z),g.receiveShadow=!0,this.levelGroup.add(g)}}get R(){return this.D/2}ballPos(){let t=this.ball.translation();return $s.set(t.x,t.y,t.z)}canPick(t){return t.def.size<=nw*this.D+1e-6}camTargetDist(t){let e=Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect,i=.25*Math.pow(t/Js,-.08);return t/(2*i*e)}camTargetPitch(t){return .58+.3*Math.min(1,Math.max(0,Math.log(t/Js)/Math.log(10)))}heroHeight(t){return .62*Math.pow(t/Js,.3)}topSpeed(){return Ss.dps*Ss.scale*Js*Math.pow(this.D/Js,Ss.grow)*(this.speedBoost>0?1.5:1)}renderPos(){return this.rPos}syncFree(t){if(this.headless)return;let e=t.body.translation(),i=t.body.rotation();Nr.compose(_n.set(e.x,e.y,e.z),Sn.set(i.x,i.y,i.z,i.w),tw),t.mesh.setMatrixAt(t.idx,Nr),t.mesh.instanceMatrix.needsUpdate=!0}markAll(){for(let t of this.levelGroup.children)t.isInstancedMesh&&(t.instanceMatrix.needsUpdate=!0)}hide(t){this.headless||(Nr.compose(ew,Sn.identity(),ew),t.mesh.setMatrixAt(t.idx,Nr),t.mesh.instanceMatrix.needsUpdate=!0)}start(){this.active=!0}update(t,e){if(!this.world)return;if(t=Math.min(t,.05),this.hitstop>0){this.hitstop-=t,this.juice?.update(t*.3),this.updateCamera(t);return}if(this.slowT>0){let d=.4-this.slowT,f=d<.05?1-.75*(d/.05):d<.25?.25:.25+.75*((d-.25)/.15);this.slowT-=t,t*=Math.max(.25,Math.min(1,f))}this.time+=t;let i=this.active&&!this.won;i&&(this.timeLeft>0&&this.level.time&&(this.freeze>0?this.freeze-=t:this.timeLeft=Math.max(0,this.timeLeft-t),this.timeLeft<=0&&(this.active=!1,this.emit("timeup"))),this.speedBoost=Math.max(0,this.speedBoost-t));let s=this.topSpeed(),r=i?e.x:0,o=i?e.y:0,a=r*r+o*o>1e-4,l=1-Math.exp(-(a?Ss.accel:Ss.decel)*ha);this.acc+=t;let h=0;for(;this.acc>=ha&&h<4;){let d=this.ball.linvel();this.ball.setLinvel({x:d.x+(r*s-d.x)*l,y:d.y,z:d.z+(o*s-d.z)*l},!0);let f=this.ball.translation();this.prevPos.set(f.x,f.y,f.z),this.world.step(),this.acc-=ha,h++}this.acc>=ha&&(this.acc=0),this.alpha=Math.min(1,this.acc/ha);let u=this.ball.translation();this.rPos.set(u.x,u.y,u.z).sub(this.prevPos).multiplyScalar(this.alpha).add(this.prevPos),this.noInterp&&this.rPos.set(u.x,u.y,u.z),i&&this.pickups(t),this.grow(t),this.animate(t,e)}pickups(t){let e=this.ballPos().clone(),i=this.R,s=[];this.world.contactPairsWith(this.ballCol,r=>{let o=this.byCol.get(r.handle);o&&o.state===0&&s.push(o)});for(let r of s){let o=r.body.translation(),a=Math.hypot(o.x-e.x,o.y-e.y,o.z-e.z);this.canPick(r)?a<i+r.br+.02+this.D*.04&&this.absorb(r,.12):a<i+r.br+.1&&this.time-r.lastBlock>1.5&&(r.lastBlock=this.time,this.shake=Math.max(this.shake,.5),this.punchV-=1,this.ballMesh.userData.bump?.(1),this.hero.userData.bump?.(1),this.hitstop=.05,this.emit("blocked",{pos:new F(o.x,o.y+r.br,o.z),need:F1(r.def.size)}))}if(this.magnet>0&&(this.magnet-=t,this.magTick-=t,this.magTick<=0)){this.magTick=.05;let r=i*3+2.5,o=[];this.world.intersectionsWithShape({x:e.x,y:e.y,z:e.z},{x:0,y:0,z:0,w:1},new Bi.Ball(r),a=>{let l=this.byCol.get(a.handle);return l&&l.state===0&&this.canPick(l)&&o.push(l),!0}),o.sort((a,l)=>iw(a,e)-iw(l,e));for(let a of o.slice(0,2))this.absorb(a,.35)}}openSpot(t){let e=[];for(let r=this.stuck.length-1;r>=0&&e.length<80;r--){let o=this.stuck[r];o.state!==3&&o.ldir&&e.push(o.ldir)}if(!e.length)return t;let i=t,s=-1;for(let r=0;r<8;r++){let o=r===0?t.clone():t.clone().add($s.randomDirection().multiplyScalar(.9)).normalize(),a=2;for(let l of e){let h=1-o.dot(l);h<a&&(a=h)}a>s&&(s=a,i=o)}return i}absorb(t,e){let i=this.world;i.contactPairsWith(t.col,d=>{let f=d.parent();f&&f.handle!==this.ball.handle&&f.wakeUp()});let s=t.body.translation(),r=t.body.rotation();t.from=new F(s.x,s.y,s.z),t.fromQ=new ti(r.x,r.y,r.z,r.w),this.byCol.delete(t.col.handle),this.byBody.delete(t.body.handle),i.removeRigidBody(t.body),t.body=null,t.col=null,t.state=1,t.t=0,t.flight=e;let o=this.ballPos(),a=t.from.clone().sub(o);a.lengthSq()<1e-6&&a.set(0,1,0),a.normalize(),a.y>.8&&(a.y=.8,a.normalize()),t.pickR=this.R;let l=this.rollGroup.quaternion.clone().invert();t.ldir=this.openSpot(a.applyQuaternion(l)),t.localQ=l.multiply(t.fromQ),t.pickedD=this.D,this.stuck.push(t),this.vol+=t.def.size**3*(this.level.grow||1.4),this.Dtarget=Math.cbrt(this.baseVol+this.vol),this.stats.picked++,this.collected[t.type]=(this.collected[t.type]||0)+1;let h=null;for(let d of this.goals)d.type===t.type&&d.left>0&&(d.left--,h=d);this.combo=this.time-this.comboT<.7?this.combo+1:1,this.comboT=this.time;let u=t.def.size/this.D;this.punchV=Math.min(this.punchV+.35+u*.9,1.2),this.ballMesh.userData.plop?.(.4+u),this.juice?.burst(t.from,t.def.variants[t.v]||"#ffffff",t.br,u>.4?9:6),this.emit("pickup",{type:t.type,pos:t.from.clone(),goal:h,combo:this.combo,size:t.def.size/this.D}),h&&this.goals.every(d=>d.left<=0)&&!this.won&&(this.won=!0,this.active=!1,this.emit("win"))}grow(t){let e=this.D;if(this.D+=(this.Dtarget-this.D)*Math.min(1,t*5),Math.abs(this.D-e)>1e-4){let s=this.D/2;this.ballCol.setRadius(s);let r=this.ball.translation();r.y<s&&this.ball.setTranslation({x:r.x,y:s,z:r.z},!0)}let i=l_(this.Dtarget);if(i>this.sizeLevel){if(this.sizeLevel=i,this.active){this.slowT=.4,this.hero.userData.hopV=0,this.hero.userData.hopY=0,this.hero.userData.kick?.(1.3);let s=this.rPos;this.juice?.ring(s,this.R*1.1,this.R*4.5,.6),this.punchV=Math.min(this.punchV+2,2.4),this.ballMesh.userData.bump?.(-.7)}this.emit("sizeup",{level:i})}}sizeProgress(){let t=Lr(this.sizeLevel)**3,e=Lr(this.sizeLevel+1)**3;return Math.max(0,Math.min(1,(this.Dtarget**3-t)/(e-t)))}animate(t,e){this.headless||this.world.forEachActiveRigidBody(g=>{let m=this.byBody.get(g.handle);m&&this.syncFree(m)});let i=this.rPos.clone(),s=this.D/2,r=i.x-this.lastPos.x,o=i.z-this.lastPos.z,a=Math.hypot(r,o);a>1e-5&&(Sn.setFromAxisAngle(_n.set(o/a,0,-r/a),a/s),this.rollGroup.quaternion.premultiply(Sn)),this.lastPos.copy(i),this.ballGroup.position.copy(i),this.punchV+=(-260*this.punch-12*this.punchV)*t,this.punch=Math.max(-.1,Math.min(.15,this.punch+this.punchV*t));let l=1+this.punch;this.ballMesh.scale.setScalar(s*l);let h=this.ball.linvel();this.visVel.lerp(Dr.set(h.x,0,h.z),1-Math.exp(-t*14));let u=this.visVel.length();this.ballMesh.userData.wobble?.(t,this.visVel,this.D);let d=this.heroHeight(this.D);ic(this.hero,d),this.heroH=d;let f=Math.min(1,.26*d/s);if(Math.abs(f-this.capShadow.userData.angle)>.012&&(this.capShadow.geometry.dispose(),this.capShadow.geometry=Qp(f),this.capShadow.userData.angle=f),this.capShadow.scale.setScalar((s+this.shellT*.9)*l),this.juice&&(this.dustT-=t,u>1.5*this.D&&this.dustT<=0&&this.active&&(this.dustT=.06,this.juice.dust(_n.set(i.x-this.visVel.x/u*s*.7,0,i.z-this.visVel.z/u*s*.7),this.D)),this.juice.update(t)),!this.headless){let g=this.rollGroup.quaternion,m=s+this.shellT,x=0,C=0,y=0;for(let S=this.stuck.length-1;S>=0;S--){let R=this.stuck[S];if(R.state===3)continue;let w=R.br*B1-Math.max(0,s-R.pickR)*O1;if(w<-R.br*.95||x>=U1){R.state=3,this.hide(R);continue}x++,y<40&&(C+=Math.max(0,w+R.br*.5),y++),Dr.copy(R.ldir).applyQuaternion(g);let M=(s+w)*l;if(Dr.y<-.05&&(M=Math.min(M,Math.max(s-R.br,(s-R.br*.6)/-Dr.y))),Dr.y>.75&&(M=Math.min(M,Math.max(s-R.br,m-R.br*.55))),_n.copy(Dr).multiplyScalar(M).add(i),Sn.copy(g).multiply(R.localQ),R.state===1){R.t+=t/R.flight;let P=Math.min(1,R.t),N=1-Math.pow(1-P,3);$s.copy(R.from).lerp(_n,N),$s.y+=Math.sin(Math.PI*P)*(.15+s*.25),Q0.copy(R.fromQ).slerp(Sn,N),Nr.compose($s,Q0,tw),P>=1&&(R.state=2,R.landT=0)}else{let P=1;if(R.landT!==void 0&&R.landT<.18){R.landT+=t;let N=R.landT/.18;P=1+.22*Math.sin(Math.PI*N)*(1-N)}Nr.compose(_n,Sn,$s.set(P,P,P))}R.mesh.setMatrixAt(R.idx,Nr),R.mesh.instanceMatrix.needsUpdate=!0}this.stuckVisible=x;let T=y?Math.min(s*.22,C/y):0;this.shellT+=(T-this.shellT)*(1-Math.exp(-t*2)),this.stuck.length>900&&(this.stuck=this.stuck.filter(S=>S.state!==3))}let p=u>.05*this.D?{x:this.visVel.x/u,z:this.visVel.z/u}:null,_=this.won?"cheer":"play";this.hero.userData.groundR=(s+this.shellT)/d,wd(this.hero,t,this.time,this.active?u:0,p,_);let b=i.y+(s+this.shellT)*.98;this.heroY+=(b-this.heroY)*(1-Math.exp(-t*30)),Math.abs(b-this.heroY)>s*.3&&(this.heroY=b),this.hero.position.set(i.x,this.heroY,i.z),this.updateCamera(t)}updateCamera(t){let e=this.ball?$s.copy(this.rPos):$s.set(0,0,0);this.camFrameD=Lr(this.sizeLevel||1);let i=this.camTargetDist(this.camFrameD),s=this.camTargetPitch(this.camFrameD);t>=1?(this.camDist=i,this.camPitch=s,this.camDistV=this.camPitchV=0):([this.camDist,this.camDistV]=Z0(this.camDist,i,this.camDistV,.32,t),[this.camPitch,this.camPitchV]=Z0(this.camPitch,s,this.camPitchV,.32,t));let r=this.visVel||_n.set(0,0,0),o=Math.hypot(r.x,r.z),a=o>1e-4?Math.min(.07*this.camDist,.08*o)/o:0;(!this.camAhead||t>=1)&&(this.camAhead=new F),this.camAhead.lerp(_n.set(r.x*a,0,r.z*a),1-Math.exp(-t*4));let l=e.x+this.camAhead.x,h=e.z+this.camAhead.z,u=h;if(this.level?.size){let y=-this.level.size[1]/2,T=this.camDist;u=Math.max(h,Math.min(e.z+T*.3,y+T*.5))}(!this.camLook||t>=1)&&(this.camLook=new F(l,e.y,u)),this.camLook.set(l,e.y,u);let d=this.camDist,f=this.camPitch,p=.06,_=_n.copy(this.camLook);if(this.won){this.outro=Math.min(1,this.outro+t*.8);let y=this.outro*this.outro*(3-2*this.outro);d=d*(1-y)+(this.D*2.1+this.heroH*2.2)*1.36*y,f=f*(1-y)+.3*y,p*=1-y,_.z+=(e.z-_.z)*y,_.y+=(this.R+(this.heroH||.6)*.35)*y}let b=Dr.set(_.x,_.y+Math.sin(f)*d,_.z+Math.cos(f)*d);if(this.shake=Math.max(0,this.shake-t*3),this.shake>0){let y=this.shake*this.shake*this.D*.12;b.x+=(Math.random()-.5)*y,b.y+=(Math.random()-.5)*y}this.camera.position.copy(b),this.camera.lookAt(_),this.camera.rotateX(p),this.camPos=b,this.focusD=d,this.scene.fog.near=d*2.2,this.scene.fog.far=d*5.5+10;let g=Math.max(5,d*1.15),m=_.x,x=_.z-d*.45,C=this.sun.shadow.camera;C.left=-g,C.right=g,C.top=g,C.bottom=-g,C.near=1,C.far=g*6+60,C.updateProjectionMatrix(),this.sun.position.set(m-g*.9,g*2.8+12,x+g*1.2),this.sun.target.position.set(m,0,x)}resize(t,e){this.camera.aspect=t/e;let i=56*Math.PI/180,s=2*Math.atan(Math.tan(i/2)/this.camera.aspect)*180/Math.PI;this.camera.fov=Math.min(s,45),this.camera.updateProjectionMatrix()}project(t,e,i){return _n.copy(t).project(this.camera),{x:(_n.x*.5+.5)*e,y:(-_n.y*.5+.5)*i,behind:_n.z>1}}useMagnet(){this.magnet=10,this.emit("magnet")}useGrow(){let t=Lr(l_(this.Dtarget)+1)*1.002;this.vol=Math.max(this.vol,t**3-this.baseVol),this.Dtarget=Math.cbrt(this.baseVol+this.vol)}nearestGoal(){let t=this.ballPos(),e=null,i=1e9,s=null,r=1e9;for(let a of this.items){if(a.state!==0||!this.goals.some(u=>u.type===a.type&&u.left>0))continue;let l=a.body.translation(),h=(l.x-t.x)**2+(l.z-t.z)**2;this.canPick(a)?h<i&&(i=h,e=l):h<r&&(r=h,s=l)}let o=e||s;return o?{x:o.x,y:o.y,z:o.z,dist:Math.sqrt(e?i:r)}:null}useSpeed(){this.speedBoost=6}addTime(t){this.timeLeft+=t}resume(){this.won||(this.active=!0)}};function iw(n,t){let e=n.body.translation();return(e.x-t.x)**2+(e.z-t.z)**2}var h_=[{id:1,name:"Picnic Park",seed:11,size:[24,40],start:[0,16],time:0,grow:1.6,goals:[{type:"apple",count:18},{type:"cup",count:24}],theme:{floor:["#a8e67a","#9adb6b"],edge:"#7a5233",rim:"#ffffff",bg:"#62c6f5",outside:"#86cf5e"},build(n){n.decal("check",-4.5,11.5,5,4,"#ffffff","#ff5a6e"),n.grid("sandwich",-5.2,11,2,2,1.1,1.1,.1),n.grid("apple",-3.4,12.2,3,2,.5,.5,.05),n.grid("juice",-5.2,13,3,1,.5,.5,.05),n.decal("check",4.5,10,5,4,"#ffffff","#3fa2ff"),n.grid("apple",4.5,10.6,4,2,.5,.5,.05),n.pyramid("cup",4.5,9,3,0,.02),n.ring("apple",0,16,1.7,14,1),n.grid("cup",0,13.4,7,2,.42,.42,.02),n.pyramid3("block",-2.75,16,3,.02,0,"layer"),n.pyramid3("block",2.75,16,3,.02,0,"layer"),n.scatter("apple",0,18.6,10,1.4,5,.8),n.pyramid("cup",-4,4,5,0,.02),n.pyramid("cup",4.5,3,4,0,.02),n.pyramid3("block",0,-2,4,.02),n.column("block",-2.4,-2,5,0,0,"alt"),n.column("block",2.4,-2,5,0,0,"alt");for(let t=0;t<7;t++)n.put("cone",-6+t*2,0,-7+t%2*.8);n.scatter("ball",0,-10.5,14,3,5,2),n.pyramid("crate",-6.5,-12.5,3,0,.02),n.column("barrel",6,-12,2),n.column("barrel",6.8,-12.6,2),n.put("barrel",6.3,0,-11.3),n.grid("melon",0,-13.5,3,2,.9,.9,.1),n.scatter("basket",0,-6,18,3,3,3),n.put("bench",-10,0,1,Math.PI/2),n.put("bench",10,0,-4,Math.PI/2),n.put("bench",0,0,-18.5);for(let t of[-5,5])n.put("table",t,0,-17),n.grid("apple",t,-17,3,1,.55,.5,.05,.8);for(let t of[-15,-7,1,9])n.put("tree",-10.5,0,t),n.put("tree",10.5,0,t+3);n.put("tree",-9.5,0,-19),n.put("tree",9.5,0,-19)}},{id:2,name:"Candy Castle",seed:22,size:[28,48],start:[0,20],time:120,grow:.75,goals:[{type:"cookie",count:50},{type:"cake",count:2}],theme:{floor:["#a6e3ff","#97d8fb"],edge:"#3c74c8",rim:"#ff8fc8",bg:"#3567cf",outside:"#f7a8cf"},build(n){n.ring("candy",0,20,1.7,16,1),n.pyramid3("gummy",-2.7,20,3,.02,0,"layer"),n.pyramid3("gummy",2.7,20,3,.02,0,"layer"),n.scatter("gummy",0,16.5,14,3,8,.6),n.scatter("candy",0,14.5,16,3,12,.55),n.wall("cblock",-12.5,11,-2.5,11,2,.01,0,"layer"),n.wall("cblock",2.5,11,12.5,11,2,.01,0,"layer"),n.put("icecream",-2.2,0,11),n.put("icecream",2.2,0,11),n.grid("cupcake",-7,6,4,3,.75,.75,.05),n.grid("cupcake",7,6,4,3,.75,.75,.05),n.grid("macaron",0,6.5,3,2,.6,.6,.05);for(let t=0;t<3;t++)for(let e=0;e<2;e++)n.column("cookie",7.3+t*.7,-1+e*.7,8);for(let t=0;t<2;t++)for(let e=0;e<2;e++)n.column("cookie",-8+t*.7,-1+e*.7,7);for(let t of[-2.8,2.8])z1(n,"choco",t,-4,8);n.pyramid3("donut",-7.5,-9,3,.03);for(let[t,e]of[[6.4,-9],[7.1,-9],[6.75,-9.65]])n.column("donut",t,e,5);n.decal("disc",0,-16,7.6,7.6,"#ffd1ea"),n.ring("cblock",0,-16,2.6,18,2,0,"layer");for(let[t,e]of[[-3.4,-12.6],[3.4,-12.6],[-3.4,-19.4],[3.4,-19.4]])n.column("macaron",t,e,8,0,0,"alt");n.column("cake",0,-16,2,0,0,"alt"),n.put("cupcake",0,1.25,-16),n.ring("cookie",0,-16,1.5,8,1);for(let t of[-20,-10,0,9])n.put("lolly",-12.3,0,t),n.put("lolly",12.3,0,t+2);n.scatter("candy",0,-6.5,10,2,10,.6),n.scatter("gummy",0,-21.5,20,2,10,.7)}},{id:3,name:"Toy Town",seed:33,size:[30,52],start:[0,22],time:150,grow:1,goals:[{type:"domino",count:100},{type:"house",count:3}],theme:{floor:["#e9f2ff","#dbe8fb"],edge:"#6f86b3",rim:"#ffd23f",bg:"#56b3f0",outside:"#9bd46a"},build(n){n.ring("block",0,22,1.8,14,1),n.pyramid("brick",-2.6,22,4,Math.PI/2,.02,0,"row"),n.pyramid("brick",2.6,22,4,Math.PI/2,.02,0,"row"),n.scatter("block",0,18.5,14,2.5,8,.9),n.scatter("brick",0,16.5,14,2,8,.9),n.decal("disc",0,11,8.4,8.4,"#ffe9a8"),n.along("domino",T0(0,11,.9,3.7,2.4),.32,"seq"),n.decal("road",0,-9,4,30,"#7d8aa3","#ffffff"),n.decal("road",0,-6,30,3.4,"#7d8aa3","#7d8aa3"),n.along("domino",R0(-4.2,4,-4.2,-22,.6,3),.33,"seq");for(let t=0;t<6;t++)n.put("car",-2.7,0,-10-t*2.3,Math.PI/2),n.put("car",2.7,0,-11-t*2.3,-Math.PI/2);n.pyramid3("brick",-9,3,4,.02),n.pyramid3("brick",9,3,4,.02),n.wall("brick",5.5,-1,12.5,-1,3,.01,0,"layer"),n.wall("brick",-12.5,-12,-7,-12,3,.01,0,"layer"),n.pyramid3("block",9,-10,3,.02),n.column("block",6.5,-14,4,0,0,"alt"),n.put("roof",6.5,4*.364,-14);for(let t of[-2,-12,-20])n.put("lamp",-2.9+(t===-12?-.3:0),0,t+.9),n.put("lamp",2.9,0,t-.4);for(let[t,e]of[[-6,6],[6,7],[-11,-4],[11,-6],[-6,-16],[6,-20]])n.put("hydrant",t,0,e);n.put("bus",-9.5,0,-18,.15),n.put("bus",10,0,-23.5,-.1);for(let t of[-10,0,10])n.put("house",t,0,-24.3+(t===0?0:.6));for(let[t,e]of[[-13,-8],[13,-14],[-13,6],[13,12]])n.put("tree",t,0,e)}}];function z1(n,t,e,i,s){let[r,o,a]=n.size(t);for(let l=0;l<s;l++)for(let h=-1;h<=1;h++){let u=h*(a+.01);l%2?n.put(t,e+u,l*(o+.004),i,Math.PI/2):n.put(t,e,l*(o+.004),i+u,0)}}function ua(n){let t=h_[(n-1)%h_.length];return n<=h_.length?t:{...t,id:n,time:t.time?Math.max(90,t.time-20):120}}var rw="rollaplanet.v1";var u_=()=>({level:1,coins:200,hearts:5,heartT:0,chestStars:0,totalStars:0,eventStars:0,eventStart:Date.now(),eventClaimed:[],boosters:{grow:0,magnet:0,time:0,big:0,speed:0},unlocked:{},skins:{owned:["smiley"],current:"smiley"},collected:{},ballItems:[],daily:{idx:0,last:""},shopFree:0,gift:0,settings:{music:!0,sound:!0,vibe:!0,rollSpeed:1,home:"stage"},seen:{},levelsPlayed:0}),J=k1();function k1(){try{let n=JSON.parse(localStorage.getItem(rw)||"null");if(n&&n.level){let t=u_();return{...t,...n,boosters:{...t.boosters,...n.boosters},settings:{...t.settings,...n.settings},skins:{...t.skins,...n.skins},daily:{...t.daily,...n.daily}}}}catch{}return u_()}function Fe(){try{localStorage.setItem(rw,JSON.stringify(J))}catch{}}function vd(){let n=u_();for(let t of Object.keys(J))delete J[t];Object.assign(J,n),Fe()}function ow(n=Date.now()){if(J.hearts>=5){J.heartT=0;return}J.heartT||(J.heartT=n);let t=Math.floor((n-J.heartT)/12e5);t>0&&(J.hearts=Math.min(5,J.hearts+t),J.heartT=J.hearts>=5?0:J.heartT+t*12e5,Fe())}function nc(n=Date.now()){return J.hearts>=5?0:Math.max(0,J.heartT+12e5-n)}function d_(){J.hearts>=5&&(J.heartT=Date.now()),J.hearts=Math.max(0,J.hearts-1),Fe()}var f_=()=>{let n=new Date;return`${n.getFullYear()}-${n.getMonth()+1}-${n.getDate()}`};function Gn(n){let t=Math.max(0,Math.ceil(n/1e3)),e=Math.floor(t/3600),i=Math.floor(t%3600/60),s=t%60;return e>=24?`${Math.floor(e/24)}d ${e%24}h`:e>0?`${e}h ${String(i).padStart(2,"0")}m`:`${i}:${String(s).padStart(2,"0")}`}var Kt=null,sc=null,oc=null,Zs=null,xd=null,ac=!1,Ms=0,da=0,p_=0;function lc(){if(navigator.userActivation&&!navigator.userActivation.hasBeenActive)return;if(Kt){Kt.state==="suspended"&&Kt.resume();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Kt=new n,sc=Kt.createGain(),sc.gain.value=.8,sc.connect(Kt.destination),oc=Kt.createGain(),oc.connect(sc),Zs=Kt.createGain(),Zs.gain.value=.16,Zs.connect(sc),xd=Kt.createBuffer(1,Kt.sampleRate*.5,Kt.sampleRate);let t=xd.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1;__()}function uw(){return Kt?Kt.state:"none"}function __(){Kt&&(oc.gain.value=J.settings.sound?1:0,J.settings.music&&!ac&&G1(),!J.settings.music&&ac&&W1())}function Si(n,t,e,{type:i="sine",vol:s=.3,slide:r=0,attack:o=.005,bus:a=oc}={}){let l=Kt.createOscillator(),h=Kt.createGain();l.type=i,l.frequency.setValueAtTime(n,t),r&&l.frequency.exponentialRampToValueAtTime(Math.max(30,n*r),t+e),h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+o),h.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(h),h.connect(a),l.start(t),l.stop(t+e+.02)}function rc(n,t,{vol:e=.2,freq:i=1200,q:s=1,type:r="bandpass",to:o=0}={}){let a=Kt.createBufferSource();a.buffer=xd;let l=Kt.createBiquadFilter();l.type=r,l.frequency.setValueAtTime(i,n),l.Q.value=s,o&&l.frequency.exponentialRampToValueAtTime(o,n+t);let h=Kt.createGain();h.gain.setValueAtTime(e,n),h.gain.exponentialRampToValueAtTime(1e-4,n+t),a.connect(l),l.connect(h),h.connect(oc),a.start(n),a.stop(n+t+.02)}var aw=0,H1=[0,2,4,7,9],Ze={pop(n=1,t=!1){if(!Kt)return;let e=Kt.currentTime;if(e-aw<.03)return;aw=e;let i=Math.max(0,Math.min(n,15)-1),s=H1[i%5]+12*Math.floor(i/5),r=440*Math.pow(2,s/12)*(1+(Math.random()-.5)*.03);Si(r,e,.11,{type:"triangle",vol:.22,slide:1.6}),rc(e,.04,{vol:.12,freq:2400,q:2}),t&&Si(r/2,e,.2,{type:"sine",vol:.25,slide:.6})},goal(){if(!Kt)return;let n=Kt.currentTime;Si(1320,n,.12,{type:"sine",vol:.12}),Si(1760,n+.05,.14,{type:"sine",vol:.1})},sizeup(){if(!Kt)return;let n=Kt.currentTime;[523,659,784].forEach((t,e)=>Si(t,n+e*.07,.18,{type:"square",vol:.09})),[523,659,784,1047].forEach(t=>Si(t,n+.21,.5,{type:"triangle",vol:.1})),rc(n,.4,{vol:.1,freq:600,to:5e3,q:.8})},blocked(){if(!Kt)return;let n=Kt.currentTime;Si(160,n,.16,{type:"square",vol:.12,slide:.6})},click(){if(!Kt)return;let n=Kt.currentTime;Si(900,n,.05,{type:"triangle",vol:.18,slide:.7})},star(n=0){if(!Kt)return;let t=Kt.currentTime,e=[784,988,1175][n]||1175;Si(e,t,.5,{type:"sine",vol:.25}),Si(e*2,t,.3,{type:"sine",vol:.08})},coin(){if(!Kt)return;let n=Kt.currentTime;Si(1568,n,.07,{type:"square",vol:.07}),Si(2093,n+.06,.15,{type:"square",vol:.07})},win(){if(!Kt)return;let n=Kt.currentTime;[523,659,784,1047,784,1047].forEach((t,e)=>Si(t,n+e*.11,e===5?.6:.16,{type:"square",vol:.1}))},fail(){if(!Kt)return;let n=Kt.currentTime;[392,330,262].forEach((t,e)=>Si(t,n+e*.16,.3,{type:"triangle",vol:.2}))},whoosh(){Kt&&rc(Kt.currentTime,.35,{vol:.15,freq:400,to:3e3,q:.7})},chest(){if(!Kt)return;let n=Kt.currentTime;rc(n,.6,{vol:.2,freq:300,to:6e3,q:.6}),[784,988,1175,1568].forEach((t,e)=>Si(t,n+.3+e*.06,.4,{type:"sine",vol:.15}))},booster(){if(!Kt)return;let n=Kt.currentTime;Si(300,n,.35,{type:"sawtooth",vol:.08,slide:4}),rc(n,.3,{vol:.08,freq:800,to:4e3})}};function rs(n=12){if(!(!J.settings.vibe||!navigator.vibrate)&&!(navigator.userActivation&&!navigator.userActivation.hasBeenActive))try{navigator.vibrate(n)}catch{}}var V1=112,lw=[72,0,76,79,0,76,74,0,72,0,74,76,0,72,69,0,71,0,74,77,0,74,72,0,71,0,72,74,0,79,76,0],cw=[48,48,55,55,45,45,52,52,43,43,50,50,48,48,55,55],hw=n=>440*Math.pow(2,(n-69)/12);function G1(){ac=!0,Ms=Kt.currentTime+.1,da=0,clearInterval(p_),p_=setInterval(X1,60)}function W1(){ac=!1,clearInterval(p_)}function X1(){if(!Kt||!ac)return;let n=60/V1/2;for(;Ms<Kt.currentTime+.25;){let t=lw[da%lw.length];if(t&&Si(hw(t),Ms,n*.9,{type:"triangle",vol:.5,bus:Zs}),da%2===0&&Si(hw(cw[da/2%cw.length]),Ms,n*1.6,{type:"sine",vol:.7,bus:Zs}),da%4===2){let e=Kt.createBufferSource();e.buffer=xd;let i=Kt.createGain(),s=Kt.createBiquadFilter();s.type="highpass",s.frequency.value=6e3,i.gain.setValueAtTime(.25,Ms),i.gain.exponentialRampToValueAtTime(1e-4,Ms+.05),e.connect(s),s.connect(i),i.connect(Zs),e.start(Ms),e.stop(Ms+.06)}Ms+=n,da++}}function m_(n){Zs&&Zs.gain.setTargetAtTime(n?.05:.16,Kt.currentTime,.2)}var pa=new Map,fa=null,_a,cc,dw,g_;function fw(n){g_=n,fa=new So({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),fa.setPixelRatio(1),fa.setSize(160,160,!1),fa.outputColorSpace=Ae,_a=new fs,_a.add(new gs(16777215,10135760,2.1));let t=new hr(16777215,2.2);t.position.set(2,4,3),_a.add(t),cc=new ui(28,1,.01,100),dw=new Xi({vertexColors:!0,matcap:Vn()})}function pw(n,t,e){_a.add(n);let i=t/Math.sin(cc.fov/2*Math.PI/180)*1.02;cc.position.copy(e).normalize().multiplyScalar(i),cc.lookAt(0,0,0),fa.render(_a,cc);let s=fa.domElement.toDataURL("image/png");return _a.remove(n),s}function Es(n,t=0){let e=n+":"+t;if(pa.has(e))return pa.get(e);let i=g_[n][t]||g_[n][0];i.computeBoundingSphere();let s=new ee(i,dw);s.position.copy(i.boundingSphere.center).negate();let r=new Ye;r.add(s),r.rotation.y=-.5;let o=pw(r,i.boundingSphere.radius,new F(.25,.55,1));return pa.set(e,o),o}function _w(n){let t="skin:"+n;if(pa.has(t))return pa.get(t);let e=D0(n),i=pw(e,1,new F(0,.25,1));return e.material.map.dispose(),e.material.dispose(),e.geometry.dispose(),pa.set(t,i),i}var mw=70,Sd=16,gw=.35,w_="#b8e2ff",b_=Math.tan(27*Math.PI/360)/Math.tan(20*Math.PI/360),q1=[["house",0,6.2,205,.8],["tree",0,4.6,238,.75],["lolly",0,3.6,150,.7],["tree",1,5.4,125,.8],["house",2,7.4,160,.75],["lolly",2,4.2,262,.65],["bench",1,3.4,105,.7],["car",2,3.2,290,.75],["tree",0,7,260,.9],["lolly",1,6.4,100,.8],["house",1,8.6,230,.8],["tree",1,8.2,140,.9],["block",0,2.6,60,.8],["block",2,2.9,72,.75],["cupcake",0,2.8,318,.8],["cone",0,3.4,35,.75],["donut",0,3.8,335,.8],["melon",0,4.4,75,.7],["apple",0,2.3,20,.9],["candy",0,2.4,345,1],["crate",0,4.8,300,.7],["barrel",1,5.6,72,.7]],Y1=[["cone",0,-52,.8,.3],["car",1,-24,.76,.42],["apple",0,22,.72,.2],["block",2,44,.78,.26],["donut",0,74,.8,.32],["candy",1,102,.82,.2],["cupcake",0,132,.76,.28],["macaron",2,-160,.8,.2],["lolly",1,-128,.78,.5],["melon",0,-88,.8,.26]],j1={wall:"#fff3dc",wall2:"#ffe2ee",wall3:"#e3f2ff",roof:"#ff6f9f",roof2:"#ff8a5c",roof3:"#9b84ff",tower:"#ffd6e6",tower2:"#d4ecff",teal:"#5fd0d6",blue:"#7cc7ff",blue2:"#a5dcff",tree:"#5fd15c",tree2:"#43bb52",trunk:"#b0733e",fence:"#ffc94d",fence2:"#ffa94d",red:"#ff5c6c",yellow:"#ffd23f",pink:"#ff86bd",green:"#58d36a",door:"#c27a45",glass:"#a6e1ff",flag:"#ff4f7a"};function $1(){let n=new Tr,t=j1,e=(l,h,u,d,f)=>{n.rbox(1.6*u,1.3*u,1.5*u,.1*u,d,l,.65*u,h),n.cone(1.28*u,.95*u,f,l,1.3*u+.47*u,h,0,Math.PI/4,0,4),n.rbox(.38*u,.62*u,.08*u,.05*u,t.door,l,.31*u,h+.75*u);for(let p of[-.5,.5])n.rbox(.32*u,.32*u,.08*u,.05*u,t.glass,l+p*u,.86*u,h+.75*u)},i=(l,h,u,d,f)=>{n.cyl(.56*u,.62*u,2.8*u,d,l,1.4*u,h,0,0,0,22),n.cyl(.72*u,.72*u,.34*u,d,l,2.9*u,h,0,0,0,22),n.cone(.82*u,1.3*u,f,l,3.07*u+.65*u,h,0,0,0,22),n.cyl(.035*u,.035*u,.8*u,"#ffffff",l,4.37*u+.3*u,h,0,0,0,6),n.rbox(.5*u,.3*u,.05*u,.03*u,t.flag,l+.27*u,4.85*u,h),n.rbox(.26*u,.46*u,.1*u,.08*u,t.glass,l,1.9*u,h+.56*u),n.rbox(.36*u,.6*u,.1*u,.1*u,t.door,l,.3*u,h+.6*u)},s=(l,h,u,d)=>{n.cyl(.12*u,.17*u,.9*u,t.trunk,l,.45*u,h,0,0,0,8),n.sph(.72*u,d,l,1.4*u,h,1,.95,1,16),n.sph(.46*u,d,l+.48*u,1.08*u,h+.18*u,1,1,1,12),n.sph(.42*u,d,l-.46*u,1.12*u,h+.12*u,1,1,1,12)},r=(l,h,u,d)=>{for(let f=0;f<u;f++)n.rbox(.2,.74,.14,.07,d,l+f*.44,.37,h);for(let f of[.2,.5])n.rbox(u*.44,.12,.08,.04,d,l+(u-1)*.22,f,h+.05)},o=(l,h,u,d,f,p=0)=>n.rbox(d,d,d,d*.14,f,l,h+d/2,u,0,p,0),a=(l,h,u,d,f)=>n.rbox(u,d,u,u*.16,f,l,d/2,h);return a(.3,-28,2.4,6.4,t.teal),a(2.9,-26,1.7,4.6,t.blue),a(-2.5,-27,1.6,3.8,t.blue2),e(-6,-28,1.3,t.wall3,t.roof3),e(7,-29,1.3,t.wall,t.roof),s(-9,-26,1.5,t.tree2),s(10,-27,1.5,t.tree),i(-4.6,-20,1.3,t.tower,t.roof),i(5.2,-21,1.05,t.tower2,t.roof3),e(-1.4,-20,1,t.wall2,t.roof2),e(2.1,-21.5,.95,t.wall,t.roof),s(-6.9,-17.5,1.15,t.tree),s(7.2,-17,1.05,t.tree2),s(.4,-23,1.1,t.tree),e(-3.5,-13.5,.95,t.wall,t.roof),e(3.6,-14,1.05,t.wall2,t.roof),s(-1.4,-12.5,.8,t.tree2),s(1.3,-12,.75,t.tree),s(5.4,-11.5,.9,t.tree),s(-5.4,-11,.85,t.tree2),r(-4.6,-8.2,6,t.fence),r(2.2,-8.6,6,t.fence2),o(3.4,0,-6.4,.75,t.red,.3),o(4.1,0,-6.9,.62,t.yellow,-.2),o(3.7,.75,-6.5,.55,t.pink,.5),o(-3.6,0,-6.2,.7,t.pink,-.4),o(-4.4,0,-7.4,.55,t.yellow,.2),n.sph(.55,t.green,-4.6,.55,-5.2,1,1,1,18),n.build(0)}function J1(){let n=new Tr,t=["#4fc24a","#62d257","#3fb04a"];return[[0,0,0,.16],[.05,0,.02,-.35],[-.05,0,-.02,.4],[.02,0,-.05,.1]].forEach(([e,,i,s],r)=>{n.cone(.035,.2-r*.02,t[r%3],e,.1-r*.01,i,s*.6,0,s,6)}),n.build(0)}function ww(n,t){let s=document.createElement("canvas");s.width=256,s.height=512;let r=s.getContext("2d"),o=r.createLinearGradient(0,0,0,512);for(let[l,h]of n)o.addColorStop(l,h);if(r.fillStyle=o,r.fillRect(0,0,256,512),t){let l=r.createRadialGradient(128,512*t,0,128,512*t,192);l.addColorStop(0,"rgba(255,255,255,0.55)"),l.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=l,r.fillRect(0,0,256,512)}let a=new Ci(s);return a.colorSpace=Ae,a}function bw(n=1024,t=512,e=260){let i=document.createElement("canvas");i.width=n,i.height=t;let s=i.getContext("2d");s.fillStyle="#8fdc5f",s.fillRect(0,0,n,t);let r=l=>{let h=Math.sin(l*12.9898)*43758.5453;return h-Math.floor(h)};s.fillStyle="#a3e86f";for(let l=0;l<46;l++)s.beginPath(),s.ellipse(r(l)*n,r(l+99)*t,(30+r(l+7)*60)*n/1024,(16+r(l+3)*30)*n/1024,r(l+5)*3,0,Math.PI*2),s.fill();let o=["#ffffff","#ffe066","#ff8fc8"];for(let l=0;l<e;l++)s.fillStyle=o[l%3],s.beginPath(),s.arc(r(l+300)*n,r(l+700)*t,(2.5+r(l+11)*2)*n/1024,0,Math.PI*2),s.fill();let a=new Ci(i);return a.colorSpace=Ae,a.anisotropy=4,a}function Z1(){let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#4aa5fb",t.fillRect(0,0,64,64),t.fillStyle="#67b8ff",t.fillRect(0,0,32,32),t.fillRect(32,32,32,32);let e=new Ci(n);return e.colorSpace=Ae,e.wrapS=e.wrapT=Ei,e.magFilter=ke,e.anisotropy=8,e}function K1(n){let t=new Ye,e=Rr("#ffffff",{fog:!1}),i=new cn(1,20,14);return[[0,0,0,1],[1.1,-.2,.1,.75],[-1.05,-.25,0,.7],[.45,.45,-.2,.7],[-.5,.35,.1,.6]].forEach(([r,o,a,l],h)=>{if(h>2+n%3)return;let u=new ee(i,e);u.position.set(r,o,a),u.scale.set(l,l*.8,l),t.add(u)}),t}var Md=class{constructor(t,e="stage"){this.geos=t,this.scene=new fs,this.camera=new ui(30,.46,.1,300),this.scene.add(new gs(16777215,8958064,2)),this.mat=new Xi({vertexColors:!0,matcap:Vn()}),this.skies={planet:ww([[0,"#3f8cff"],[.45,"#7cc8ff"],[.75,"#c9ecff"],[1,"#ffe6f2"]],.46),stage:ww([[0,"#1f7ff0"],[.22,"#45a6ff"],[.42,"#8fd0ff"],[.52,w_],[1,w_]])},this.root=new Ye,this.scene.add(this.root),this.spin=new Ye,this.root.add(this.spin),this.ball=ca("smiley"),this.spin.add(this.ball),this.hero=gd(),ic(this.hero,1.15),this.root.add(this.hero),this.hero.userData.setOutline(1.5),this.hero.userData.outline&&(this.hero.userData.outline.userData.noAO=!0),this.hero.userData.yaw=.25,this.shadow=Zp(),this.shadow.position.y=.02,this.root.add(this.shadow),this.stuck=[],this.drops=[],this.t=0,this.D=1.6,this.turn=0,this.turnV=gw,this.diveT=-1,this.setStage(e)}setStage(t){this.world&&this.scene.remove(this.world),this.kind=t==="planet"?"planet":"stage",this.world=new Ye,this.scene.add(this.world),this.props=[],this.edge=[],this.clouds=[],this.kind==="planet"?this.buildPlanet():this.buildStage(),this.scene.background=this.skies[this.kind],this.scene.fog=this.kind==="stage"?new ar(w_,30,120):null,this.layout()}prop(t,e,i=this.mat,s=!1){let r=sn[t];if(!r)return null;let o=new ee(this.geos[t][e]||this.geos[t][0],i);return s&&fd(o,.0018),o.userData.def=r,o}buildPlanet(){this.planet=new Ye,this.planet.position.y=-Sd,this.world.add(this.planet);let t=new ee(new cn(Sd,96,64),new Xi({map:bw(),matcap:Vn()}));this.planet.add(t),q1.forEach(([i,s,r,o,a],l)=>{let h=this.prop(i,s);if(!h)return;let u=r/Sd,d=o*Math.PI/180,f=new F(Math.sin(u)*Math.sin(d),Math.cos(u),Math.sin(u)*Math.cos(d));h.scale.setScalar(a),h.position.copy(f).multiplyScalar(Sd+ia(h.userData.def)*a-.02),h.quaternion.setFromUnitVectors(new F(0,1,0),f),h.quaternion.multiply(new ti().setFromAxisAngle(new F(0,1,0),d+.5*Math.sin(l*2.3))),this.planet.add(h),this.props.push(h)});let e=[[-8,4.5,-14,1.3],[7.5,6.5,-18,1.7],[-2,8.5,-24,1.5],[10,2.5,-13,1.1],[-12,1.8,-17,1.3]];this.addClouds(e)}buildStage(){let t=Z1();t.repeat.set(40,40);let e=new ee(new Dn(240,240),new Li({map:t}));e.rotation.x=-Math.PI/2,this.floor=e,this.world.add(e),this.podium=new Ye;let i=Rr("#ffffff"),s=new ee(new ms(1,1,1,96),i);s.position.y=-.5;let r=new ee(new Bs(1,.05,16,96),i);r.rotation.x=Math.PI/2,r.position.y=-.02;let o=new ee(new Bs(1,.05,16,96),Rr("#e9eefc"));o.rotation.x=Math.PI/2;let a=bw(512,512,90),l=new ee(new _s(.955,96),new Xi({map:a,matcap:Vn()}));l.rotation.x=-Math.PI/2,l.position.y=.004,this.rim=s,this.lip=r,this.foot=o,this.top=l,this.podium.add(s,r,l),this.world.add(this.podium,o),this.podShadow=Zp(),this.podShadow.material.opacity=.55,this.world.add(this.podShadow);let h=J1();this.tufts=[],[12,58,95,148,175,205,238,300,332,-8].forEach((u,d)=>{let f=new ee(h,this.mat);f.userData.tuft={a:u*Math.PI/180,at:.6+d%3*.12,s:.9+d%2*.35},f.rotation.y=d*1.3,this.world.add(f),this.tufts.push(f)}),Y1.forEach(([u,d,f,p,_],b)=>{let g=this.prop(u,d);g&&(g.userData.edge={a:f*Math.PI/180,at:p,size:_,yaw:b*1.9},this.world.add(g),this.edge.push(g))}),this.backdrop=new Ye,this.world.add(this.backdrop),this.town=new ee($1(),this.mat),this.backdrop.add(this.town),this.addClouds([[-9,9,-45,2.6],[9,11,-50,3],[-1,14,-60,2.8],[17,7,-42,2.2],[-18,7.5,-46,2.6]],this.backdrop)}addClouds(t,e=this.world){t.forEach(([i,s,r,o],a)=>{let l=K1(a);l.position.set(i,s,r),l.scale.setScalar(o),l.userData.base=new F(i,s,r),e.add(l),this.clouds.push(l)})}setSkin(t){let e=ca(t).material;this.ball.material.map.dispose(),this.ball.material.map=e.map,this.ball.material.needsUpdate=!0}setup(t,e){this.D=t,this.diveT=-1;for(let i of this.stuck)this.spin.remove(i.mesh);this.stuck=[],this.drops=[],e.slice(-mw).forEach((i,s)=>this.stick(i,s,!1)),this.layout()}dirFor(t){for(let i=0;i<40;i++){let s=t*7+i*131+3,r=.72-s*.6180339%1*1.15,o=s*2.399963,a=Math.sqrt(Math.max(0,1-r*r)),l=new F(Math.cos(o)*a,r,Math.sin(o)*a);if(!(l.z>.3&&Math.abs(l.x)<.8&&l.y>-.6))return l}return new F(1,0,0)}stick(t,e,i){let s=sn[t.type];if(!s)return null;let r=this.geos[t.type][t.v]||this.geos[t.type][0],o=new ee(r,this.mat),a=this.dirFor(e),l={mesh:o,dir:a,br:Jl(s),rot:new Ti(e*1.3,e*2.1,e*.7)};return o.rotation.copy(l.rot),this.spin.add(o),this.stuck.push(l),i&&(l.drop={t:0,delay:i.delay||0},this.drops.push(l)),l}addItems(t,e){let i=this.stuck.length;for(t.slice(0,24).forEach((s,r)=>this.stick(s,i+r,{delay:.25+r*.07})),this.onLand=e;this.stuck.length>mw;){let s=this.stuck.shift();this.spin.remove(s.mesh)}this.layout()}podR(){return .15+1*this.D}viewD(){return(4.4*this.D+1.6)*b_}dof(){let t=this.camera.position.distanceTo(this._fv||(this._fv=new F(0,this.D/2,0)).set(0,this.D/2,0));return this.kind!=="stage"?{focus:t,range:this.D*1.2,ramp:t*2,maxBlur:.004}:{focus:t,range:this.podR()*1.1,ramp:t*.9,maxBlur:.0085}}layout(){let t=this.D/2;this.ball.scale.setScalar(t),this.spin.position.y=t;for(let e of this.stuck)e.k=Math.min(1,t*.42/e.br),e.dist=t+e.br*e.k*.1,e.drop||(e.mesh.position.copy(e.dir).multiplyScalar(e.dist),e.mesh.scale.setScalar(e.k));if(this.shadow.scale.setScalar(this.D*1.35),this.hero.position.set(0,this.D*1.02,0),this.kind==="stage"){let e=this.podR(),i=.16+.2*this.D;this.podium.scale.set(e,1,e),this.rim.scale.y=i,this.rim.position.y=-i/2,this.lip.scale.set(1,1,.28*i/.05),this.foot.scale.set(e,e,.2*i/.05),this.foot.position.y=-i+.04,this.floor.position.y=-i,this.podShadow.scale.setScalar(e*2.9),this.podShadow.position.y=-i+.012;for(let r of this.tufts){let o=r.userData.tuft;r.position.set(Math.sin(o.a)*o.at*e,.004,Math.cos(o.a)*o.at*e),r.scale.setScalar(o.s*this.D*.5)}for(let r of this.edge){let o=r.userData.edge,a=r.userData.def,l=1.15*o.size*this.D/Jl(a)/2;r.scale.setScalar(l),r.position.set(Math.sin(o.a)*o.at*e,ia(a)*l+.005,Math.cos(o.a)*o.at*e),r.rotation.set(0,o.yaw,0)}let s=this.viewD()/(8.64*b_);this.backdrop.scale.setScalar(s),this.backdrop.position.y=-i,this.floor.scale.setScalar(s)}this.frame()}drag(t,e){let i=t*.01;this.turn+=i,this.dragV=i/Math.max(e,1/120),this.dragging=!0}release(){this.dragging=!1,this.turnV=Math.max(-5,Math.min(5,this.dragV||0)),this.dragV=0,this.ball.userData.plop?.(Math.min(1,Math.abs(this.turnV)*.25))}poke(){this.hero.userData.poke(),this.ball.userData.bump?.(.6)}dive(){this.diveT=0,this.cheer=.8}headScreen(){let t=this._hv||(this._hv=new F);return t.copy(this.hero.position),t.y+=1.3,t.project(this.camera),{x:(t.x+1)/2,y:(1-t.y)/2}}resize(t,e){this.camera.aspect=t/e;let i=2*Math.atan(Math.tan(20*Math.PI/360)/this.camera.aspect)*180/Math.PI;this.camera.fov=Math.min(i,46),this.camera.updateProjectionMatrix(),this.frame()}frame(){let t=this.D,e,i,s;if(this.kind==="stage"){let o=t/2,a=this.viewD(),l=.24,h=.03,u=o+Math.sin(l)*a,d=Math.cos(l)*a;s=u-d*Math.tan(l-h),e=Math.hypot(u-s,d),i=Math.atan2(u-s,d)}else{let o=t+1.15;e=(o*3.1+3.5)*b_,i=.3,s=o*.38}let r=e;if(this.diveT>=0){let o=Math.min(1,this.diveT/.55),a=o*o*(3-2*o);e*=1-.5*a,i+=.2*a,s=s*(1-a)+t*.5*a}this.camera.position.set(0,s+Math.sin(i)*e,Math.cos(i)*e),this.camera.lookAt(0,s,0),this.scene.fog&&(this.scene.fog.near=r*2.4,this.scene.fog.far=r*9)}update(t){this.t+=t,this.dragging||(this.turnV+=(gw-this.turnV)*(1-Math.exp(-t*1.5)),this.turn+=this.turnV*t),this.planet&&this.kind==="planet"&&(this.planet.rotation.y=Math.sin(this.t*.12)*.05),this.spin.rotation.y=this.turn,this.diveT>=0&&(this.diveT+=t,this.frame());for(let e of this.clouds){let i=e.userData.base;e.position.x=i.x+Math.sin(this.t*.07+i.z)*1.2,e.position.y=i.y+Math.sin(this.t*.5+i.x)*.15}for(let e=this.drops.length-1;e>=0;e--){let i=this.drops[e];i.drop.t+=t;let s=Math.min(1,Math.max(0,(i.drop.t-i.drop.delay)/.45)),r=i.dir.clone().multiplyScalar(i.dist),o=new F(i.dir.x*1.5,7+this.D,i.dir.z*1.5),a=this.spin.worldToLocal(o.clone()),l=s*s;i.mesh.position.copy(a).lerp(r,l),i.mesh.visible=s>0,i.mesh.scale.setScalar((i.k||1)*(s>=1?1:.6+.4*s)),s>=1&&(this.drops.splice(e,1),i.drop=null,this.ball.userData.plop?.(.8),this.onLand?.())}this.ball.userData.wobble?.(t,null,this.D),wd(this.hero,t,this.t,0,null,this.cheer>0?"cheer":"lobby"),this.cheer>0&&(this.cheer-=t)}};var ma={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Q1=new Hs(-1,1,1,-1,0,1),y_=class extends je{constructor(){super(),this.setAttribute("position",new he([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new he([0,2,0,0,2,0],2))}},tE=new y_,Ks=class{constructor(t){this._mesh=new ee(tE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Fr=class extends mn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=tn.clone(t.uniforms),this.material=new Be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ks(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var hc=class extends mn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ed=class extends mn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Td=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new qt);this._width=i.width,this._height=i.height,e=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Fi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fr(ma),this.copyPass.material.blending=li,this.timer=new Za}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}hc!==void 0&&(o instanceof hc?i=!0:o instanceof Ed&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new qt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rd=class extends mn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ht}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var uc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new qt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Yt},cameraProjectionMatrixInverse:{value:new Yt},cameraWorldMatrix:{value:new Yt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},dc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Cd={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function yw(n=5){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=eE(t),i=e.length,s=new Uint8Array(i*4);for(let o=0;o<i;++o){let a=e[o],l=2*Math.PI*a/i,h=new F(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(h.x*.5+.5)*255,s[o*4+1]=(h.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Kn(s,t,t);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}function eE(n){let t=Math.floor(n)%2===0?Math.floor(n)+1:Math.floor(n),e=t*t,i=Array(e).fill(0),s=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(s===-1&&r===t?(r=t-2,s=0):(r===t&&(r=0),s<0&&(s=t-1)),i[s*t+r]!==0){r-=2,s++;continue}else i[s*t+r]=o++;r++,s--}return i}var fc={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:v_(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new qt},cameraProjectionMatrixInverse:{value:new Yt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function v_(n,t,e){let i=iE(n,t,e),s="vec3[SAMPLES](";for(let r=0;r<n;r++){let o=i[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<n-1?",":")"}`}return s}function iE(n,t,e){let i=[];for(let s=0;s<n;s++){let r=2*Math.PI*t*s/n,o=Math.pow(s/(n-1),e);i.push(new F(Math.cos(r),Math.sin(r),o))}return i}var Ad=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let i,s,r,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),h=Math.floor(e+a),u=(3-Math.sqrt(3))/6,d=(l+h)*u,f=l-d,p=h-d,_=t-f,b=e-p,g,m;_>b?(g=1,m=0):(g=0,m=1);let x=_-g+u,C=b-m+u,y=_-1+2*u,T=b-1+2*u,S=l&255,R=h&255,w=this.perm[S+this.perm[R]]%12,M=this.perm[S+g+this.perm[R+m]]%12,P=this.perm[S+1+this.perm[R+1]]%12,N=.5-_*_-b*b;N<0?i=0:(N*=N,i=N*N*this._dot(this.grad3[w],_,b));let U=.5-x*x-C*C;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[M],x,C));let k=.5-y*y-T*T;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[P],y,T)),70*(i+s+r)}noise3d(t,e,i){let s,r,o,a,h=(t+e+i)*.3333333333333333,u=Math.floor(t+h),d=Math.floor(e+h),f=Math.floor(i+h),p=1/6,_=(u+d+f)*p,b=u-_,g=d-_,m=f-_,x=t-b,C=e-g,y=i-m,T,S,R,w,M,P;x>=C?C>=y?(T=1,S=0,R=0,w=1,M=1,P=0):x>=y?(T=1,S=0,R=0,w=1,M=0,P=1):(T=0,S=0,R=1,w=1,M=0,P=1):C<y?(T=0,S=0,R=1,w=0,M=1,P=1):x<y?(T=0,S=1,R=0,w=0,M=1,P=1):(T=0,S=1,R=0,w=1,M=1,P=0);let N=x-T+p,U=C-S+p,k=y-R+p,L=x-w+2*p,V=C-M+2*p,j=y-P+2*p,Z=x-1+3*p,lt=C-1+3*p,$=y-1+3*p,nt=u&255,at=d&255,It=f&255,Dt=this.perm[nt+this.perm[at+this.perm[It]]]%12,Ee=this.perm[nt+T+this.perm[at+S+this.perm[It+R]]]%12,de=this.perm[nt+w+this.perm[at+M+this.perm[It+P]]]%12,fe=this.perm[nt+1+this.perm[at+1+this.perm[It+1]]]%12,Q=.6-x*x-C*C-y*y;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[Dt],x,C,y));let it=.6-N*N-U*U-k*k;it<0?r=0:(it*=it,r=it*it*this._dot3(this.grad3[Ee],N,U,k));let Mt=.6-L*L-V*V-j*j;Mt<0?o=0:(Mt*=Mt,o=Mt*Mt*this._dot3(this.grad3[de],L,V,j));let Vt=.6-Z*Z-lt*lt-$*$;return Vt<0?a=0:(Vt*=Vt,a=Vt*Vt*this._dot3(this.grad3[fe],Z,lt,$)),32*(s+r+o+a)}noise4d(t,e,i,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20,u,d,f,p,_,b=(t+e+i+s)*l,g=Math.floor(t+b),m=Math.floor(e+b),x=Math.floor(i+b),C=Math.floor(s+b),y=(g+m+x+C)*h,T=g-y,S=m-y,R=x-y,w=C-y,M=t-T,P=e-S,N=i-R,U=s-w,k=M>P?32:0,L=M>N?16:0,V=P>N?8:0,j=M>U?4:0,Z=P>U?2:0,lt=N>U?1:0,$=k+L+V+j+Z+lt,nt=o[$][0]>=3?1:0,at=o[$][1]>=3?1:0,It=o[$][2]>=3?1:0,Dt=o[$][3]>=3?1:0,Ee=o[$][0]>=2?1:0,de=o[$][1]>=2?1:0,fe=o[$][2]>=2?1:0,Q=o[$][3]>=2?1:0,it=o[$][0]>=1?1:0,Mt=o[$][1]>=1?1:0,Vt=o[$][2]>=1?1:0,Tt=o[$][3]>=1?1:0,ae=M-nt+h,Ue=P-at+h,$t=N-It+h,ie=U-Dt+h,ne=M-Ee+2*h,Gt=P-de+2*h,Ce=N-fe+2*h,At=U-Q+2*h,se=M-it+3*h,ce=P-Mt+3*h,we=N-Vt+3*h,B=U-Tt+3*h,Ve=M-1+4*h,ve=P-1+4*h,I=N-1+4*h,v=U-1+4*h,H=g&255,W=m&255,tt=x&255,ft=C&255,wt=a[H+a[W+a[tt+a[ft]]]]%32,et=a[H+nt+a[W+at+a[tt+It+a[ft+Dt]]]]%32,rt=a[H+Ee+a[W+de+a[tt+fe+a[ft+Q]]]]%32,bt=a[H+it+a[W+Mt+a[tt+Vt+a[ft+Tt]]]]%32,zt=a[H+1+a[W+1+a[tt+1+a[ft+1]]]]%32,gt=.6-M*M-P*P-N*N-U*U;gt<0?u=0:(gt*=gt,u=gt*gt*this._dot4(r[wt],M,P,N,U));let mt=.6-ae*ae-Ue*Ue-$t*$t-ie*ie;mt<0?d=0:(mt*=mt,d=mt*mt*this._dot4(r[et],ae,Ue,$t,ie));let Lt=.6-ne*ne-Gt*Gt-Ce*Ce-At*At;Lt<0?f=0:(Lt*=Lt,f=Lt*Lt*this._dot4(r[rt],ne,Gt,Ce,At));let Wt=.6-se*se-ce*ce-we*we-B*B;Wt<0?p=0:(Wt*=Wt,p=Wt*Wt*this._dot4(r[bt],se,ce,we,B));let Qt=.6-Ve*Ve-ve*ve-I*I-v*v;return Qt<0?_=0:(Qt*=Qt,_=Qt*Qt*this._dot4(r[zt],Ve,ve,I,v)),27*(u+d+f+p+_)}_dot(t,e,i){return t[0]*e+t[1]*i}_dot3(t,e,i,s){return t[0]*e+t[1]*i+t[2]*s}_dot4(t,e,i,s,r){return t[0]*e+t[1]*i+t[2]*s+t[3]*r}};var pc=class n extends mn{constructor(t,e,i=512,s=512,r,o,a){super(),this.width=i,this.height=s,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=yw(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ai(this.width,this.height,{type:Fi,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Be({defines:Object.assign({},uc.defines),uniforms:tn.clone(uc.uniforms),vertexShader:uc.vertexShader,fragmentShader:uc.fragmentShader,blending:li,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ya,this.normalMaterial.blending=li,this.pdMaterial=new Be({defines:Object.assign({},fc.defines),uniforms:tn.clone(fc.uniforms),vertexShader:fc.vertexShader,fragmentShader:fc.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Be({defines:Object.assign({},dc.defines),uniforms:tn.clone(dc.uniforms),vertexShader:dc.vertexShader,fragmentShader:dc.fragmentShader,blending:li}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Be({uniforms:tn.clone(ma.uniforms),vertexShader:ma.vertexShader,fragmentShader:ma.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Qa,blendDst:dr,blendEquation:xn,blendSrcAlpha:Ka,blendDstAlpha:dr,blendEquationAlpha:xn}),this.blendMaterial=new Be({uniforms:tn.clone(Cd.uniforms),vertexShader:Cd.vertexShader,fragmentShader:Cd.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Mh,blendSrc:Qa,blendDst:dr,blendEquation:xn,blendSrcAlpha:Ka,blendDstAlpha:dr,blendEquationAlpha:xn}),this._fsQuad=new Ks(null),this._originalClearColor=new Ht,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Qn,this.depthTexture.format=es,this.depthTexture.type=Xs,this.normalRenderTarget=new ai(this.width,this.height,{minFilter:ke,magFilter:ke,type:Fi,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=v_(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case n.OUTPUT.Off:break;case n.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=li,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=li,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=li,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=li,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case n.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=li,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,i,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,i,s,r){t.getClearColor(this._originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(i),t.autoClear=!1,s=e.clearColor||s,r=e.clearAlpha||r,s!=null&&(t.setClearColor(s),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(i){(i.isPoints||i.isLine||i.isLine2)&&i.visible&&(i.visible=!1,e.push(i))})}_restoreVisibility(){let t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){let e=new Ad,i=t*t*4,s=new Uint8Array(i);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,h=a;s[(o*t+a)*4]=(e.noise(l,h)*.5+.5)*255,s[(o*t+a)*4+1]=(e.noise(l+t,h)*.5+.5)*255,s[(o*t+a)*4+2]=(e.noise(l,h+t)*.5+.5)*255,s[(o*t+a)*4+3]=(e.noise(l+t,h+t)*.5+.5)*255}let r=new Kn(s,t,t,qi,vi);return r.wrapS=Ei,r.wrapT=Ei,r.needsUpdate=!0,r}};pc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var _c={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pd=class extends mn{constructor(){super(),this.isOutputPass=!0,this.uniforms=tn.clone(_c.uniforms),this.material=new po({name:_c.name,uniforms:this.uniforms,vertexShader:_c.vertexShader,fragmentShader:_c.fragmentShader}),this._fsQuad=new Ks(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},be.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===il?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ol?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===sl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var x_=class extends pc{_overrideVisibility(){let t=this._visibilityCache;this.scene.traverse(e=>{if(!e.visible)return;let i=e.material;(e.isPoints||e.isLine||e.isSprite||e.userData.noAO||i&&(i.transparent&&i.opacity<.98||i.depthWrite===!1))&&(e.visible=!1,t.push(e))})}},nE={uniforms:{tDiffuse:{value:null},tDepth:{value:null},near:{value:.1},far:{value:100},focus:{value:10},range:{value:2},ramp:{value:10},maxBlur:{value:.006},nearK:{value:.5},aspect:{value:.5},edge:{value:new qt(.005,.0025)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    #include <packing>
    varying vec2 vUv;
    uniform sampler2D tDiffuse, tDepth;
    uniform float near, far, focus, range, ramp, maxBlur, nearK, aspect;
    uniform vec2 edge;
    float blurAt(vec2 uv) {
      float z = -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, near, far);
      float d = z - focus;
      float b = d > 0.0 ? smoothstep(range, range + ramp, d) : nearK * smoothstep(range * 0.5, range * 0.5 + ramp * 0.5, -d);
      return b * maxBlur;
    }
    void main() {
      // outlines are drawn outside the depth buffer, so take the sharpest
      // of a few pixels around: a line hugging an in-focus thing stays crisp
      float r = blurAt(vUv);
      r = min(r, min(blurAt(vUv + vec2(edge.x, 0.0)), blurAt(vUv - vec2(edge.x, 0.0))));
      r = min(r, min(blurAt(vUv + vec2(0.0, edge.y)), blurAt(vUv - vec2(0.0, edge.y))));
      vec4 c = texture2D(tDiffuse, vUv);
      if (r < 0.0004) { gl_FragColor = c; return; }
      // golden-angle disc, 24 taps; a tap that is sharper than the centre
      // (an in-focus thing in front) is skipped so it does not smear out
      vec4 sum = c; float w = 1.0;
      for (int i = 1; i < 24; i++) {
        float fi = float(i);
        float a = fi * 2.39996;
        vec2 o = vec2(cos(a), sin(a) * aspect) * r * sqrt(fi / 24.0);
        vec2 uv = vUv + o;
        float rb = blurAt(uv);
        float k = smoothstep(0.0, r * 0.6, rb + 0.0001);
        sum += texture2D(tDiffuse, uv) * k; w += k;
      }
      gl_FragColor = sum / w;
    }`},sE={uniforms:{tDiffuse:{value:null},sat:{value:1.12},contrast:{value:1.06},bright:{value:.01},shadowTint:{value:new Ht(.035,0,.06)},highTint:{value:new Ht(.02,.012,-.01)},vignette:{value:.22}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float sat, contrast, bright, vignette;
    uniform vec3 shadowTint, highTint;
    void main() {
      vec3 c = texture2D(tDiffuse, vUv).rgb;
      float l = dot(c, vec3(0.299, 0.587, 0.114));
      c = mix(vec3(l), c, sat);
      c = (c - 0.5) * contrast + 0.5 + bright;
      c += shadowTint * (1.0 - smoothstep(0.0, 0.55, l)) + highTint * smoothstep(0.45, 1.0, l);
      vec2 d = (vUv - 0.5) * vec2(1.0, 0.85);
      c *= 1.0 - vignette * smoothstep(0.3, 0.75, length(d));
      gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
    }`},S_=class{constructor(t,e,i,s,r){this.camera=i,this.opts=s;let o=t.getDrawingBufferSize(new qt),a=new ai(o.x,o.y,{type:vi,samples:4});this.composer=new Td(t,a),this.composer.addPass(new Rd(e,i)),r&&(this.ao=new x_(e,i,o.x,o.y),this.ao.blendIntensity=s.ao,this.ao.updateGtaoMaterial({radius:s.aoRadius,distanceExponent:1.4,thickness:1,scale:1,samples:12}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao),this.dof=new Fr(nE),this.dof.uniforms.tDepth.value=this.ao.depthTexture,this.dof.uniforms.nearK.value=s.nearK,this.composer.addPass(this.dof)),this.composer.addPass(new Pd),this.grade=new Fr(sE),this.grade.uniforms.vignette.value=s.vignette,this.composer.addPass(this.grade)}lite(){this.ao&&(this.ao.enabled=!1,this.dof.enabled=!1)}setSize(t,e,i){this.composer.setPixelRatio(i),this.composer.setSize(t,e),this.dof&&this.dof.uniforms.edge.value.set(3.5/t,3.5/e)}render(t,e){if(this.dof&&this.dof.enabled){let i=this.dof.uniforms;i.near.value=this.camera.near,i.far.value=this.camera.far,i.aspect.value=this.camera.aspect,e&&(i.focus.value=e.focus,i.range.value=e.range,i.ramp.value=e.ramp,i.maxBlur.value=e.maxBlur,e.aoRadius&&this.ao.updateGtaoMaterial({radius:e.aoRadius}))}this.composer.render(t)}};function vw(){let n=t=>window.matchMedia&&window.matchMedia(t).matches;return n("(pointer: coarse)")&&!n("(any-pointer: fine)")}var Id=class{constructor(t,e){this.renderer=t,this.chains=new Map,this.level=e==="0"||e==="1"||e==="2"?+e:vw()?0:2;let i=t.extensions;this.level===2&&!(i.has("EXT_color_buffer_float")||i.has("EXT_color_buffer_half_float"))&&(this.level=1),this.slow=0,this.grace=0,this.auto=e==null,console.log("post: level "+this.level+(this.auto?vw()?" (phone)":" (desktop)":" (forced)"))}chain(t,e,i){let s=this.chains.get(t);return s||(s=new S_(this.renderer,t,e,i,this.level===2),this.size&&s.setSize(...this.size),this.chains.set(t,s)),s}setSize(t,e){this.size=[t,e,this.renderer.getPixelRatio()];for(let i of this.chains.values())i.setSize(...this.size)}watch(t,e){if(e!==this.scene&&(this.scene=e,this.grace=2,this.avg=0,this.slow=0),!(!this.auto||!(t>0&&t<.4)||this.level===0)){if(this.grace>0){this.grace-=t;return}if(this.avg=this.avg?this.avg*.9+t*.1:t,this.avg>1/20?this.slow+=t*3:this.avg>1/38?this.slow+=t:this.slow=Math.max(0,this.slow-t),!(this.slow<3)){if(this.slow=0,this.avg=1/60,this.level--,this.level===1)for(let i of this.chains.values())i.lite();console.log("post: level "+this.level+" (slow)")}}}render(t,e,i,s,r){let o=performance.now(),a=this.last?(o-this.last)/1e3:0;if(this.last=o,this.watch(a,t),this.level===0){this.renderer.render(t,e);return}let l=s==="lobby"?{ao:.9,aoRadius:.5,nearK:.35,vignette:.2}:{ao:.85,aoRadius:.4,nearK:0,vignette:.24};this.chain(t,e,l).render(i,r)}};var ut=n=>document.querySelector(n),Sw=()=>ut("#app"),Pi=n=>new Promise(t=>setTimeout(t,n)),re=n=>`img/icons/${n}.webp`;function He(n){let t=document.createElement("template");return t.innerHTML=n.trim(),t.content.firstElementChild}function Me(n,t,{sound:e=!0}={}){n&&n.addEventListener("click",i=>{i.stopPropagation(),e&&Ze.click(),t(i)})}var Dd=[];function zi({title:n,ribbon:t="",body:e="",buttons:i="",close:s=!0,cls:r="",onClose:o}={}){let a=ut("#modalHost"),l=He(`<div id="modal" class="${r}"><div class="panel">
      <div class="ribbon ${t} t">${n}</div>
      ${s?'<button class="btn btn-red round close" data-close></button>':""}
      ${e}
      ${i}
    </div></div>`);a.appendChild(l);let h={el:l,panel:l.querySelector(".panel"),close:()=>Mw(h),onClose:o};return Dd.push(h),l.querySelectorAll("[data-close]").forEach(u=>Me(u,()=>h.close())),h}function Mw(n){!n||!n.el.isConnected||(n.el.remove(),Dd=Dd.filter(t=>t!==n),n.onClose?.())}function Nd(){for(let n of[...Dd])n.onClose=null,Mw(n)}var xw=0;function bi(n,t=1800){ut("#toast")?.remove();let e=He(`<div id="toast" class="t t-thin">${n}</div>`);ut("#overlayHost").appendChild(e),clearTimeout(xw),xw=setTimeout(()=>e.remove(),t)}function gn(n){let t=Sw().getBoundingClientRect(),e=n.getBoundingClientRect();return{x:e.left-t.left+e.width/2,y:e.top-t.top+e.height/2,w:e.width,h:e.height}}function Mi(n){return Sw().clientWidth*n/100}function Ld(n,t,e,i,{onEach:s,size:r=10,spread:o=14}={}){let a=gn(e),l=ut("#fx");return new Promise(h=>{let u=0;for(let d=0;d<i;d++){let f=He(`<img class="flyer" src="${n}" alt="">`);f.style.width=Mi(r)+"px";let p=t.x+(Math.random()-.5)*Mi(o),_=t.y+(Math.random()-.5)*Mi(o);f.style.left=p-Mi(r)/2+"px",f.style.top=_-Mi(r)/2+"px",f.style.transform="scale(0)",l.appendChild(f),setTimeout(()=>{f.style.transition="transform .18s cubic-bezier(.3,1.8,.5,1)",f.style.transform="scale(1)",setTimeout(()=>{f.style.transition="",f.style.transition="transform .62s cubic-bezier(.55,-0.25,.6,1)",f.style.transform=`translate(${a.x-p}px, ${a.y-_}px) scale(.8)`,setTimeout(()=>{f.remove(),u++,s?.(u),u===i&&h()},640)},220+d*55)},d*25)}i===0&&h()})}function Ew(n=70){let t=ut("#fx"),e=["#ff4d5e","#ffd23f","#4ccf62","#3fa2ff","#ff7eb6","#b892ff","#ff9a2e"];for(let i=0;i<n;i++){let s=He('<i class="confetti"></i>');s.style.left=Math.random()*100+"%",s.style.background=e[i%e.length],s.style.setProperty("--dx",(Math.random()-.5)*40+"cqw"),s.style.setProperty("--r",Math.random()*1080-540+"deg"),s.style.animationDelay=Math.random()*.6+"s",s.style.animationDuration=2+Math.random()*1.4+"s",t.appendChild(s),setTimeout(()=>s.remove(),4200)}}function M_(n,t,e,i=600,s=r=>r){let r=performance.now();return new Promise(o=>{let a=()=>{let l=Math.min(1,(performance.now()-r)/i);n.textContent=s(Math.round(t+(e-t)*l)),l<1?requestAnimationFrame(a):o()};a()})}function Ur(n=3){return new Promise(t=>{m_(!0);let e=He(`<div id="ad"><div class="cd t t-thin">${n}</div><div class="box t t-thin">Ad plays here</div><div class="t t-thin" style="font-size:4.4cqw;opacity:.8">Demo build: no real ads</div></div>`);ut("#overlayHost").appendChild(e);let i=n,s=setInterval(()=>{i--,e.querySelector(".cd").textContent=Math.max(0,i),i<=0&&(clearInterval(s),e.remove(),m_(!1),t(!0))},1e3)})}async function E_(n){let t=ut("#curtain");Ze.whoosh(),t.classList.add("on"),await Pi(480),await n(),await Pi(120),t.classList.remove("on"),await Pi(450)}var Rw=[{id:"smiley",name:"Sunny",price:0},{id:"melon",name:"Melon",price:300},{id:"soccer",name:"Kick",price:500},{id:"planet",name:"Planet",price:800}],Cw=[{name:"Picnic Park",items:["apple","cup","juice","block","sandwich","cone","ball","melon","crate","barrel","basket","bench","table","tree"]},{name:"Candy Castle",items:["candy","gummy","macaron","cblock","cupcake","donut","cookie","icecream","choco","lolly","cake"]},{name:"Toy Town",items:["brick","domino","hydrant","car","roof","lamp","bus","house"]}],wn={grow:{name:"Grow",icon:"bolt",unlock:2,desc:"Get one size bigger right away!"},magnet:{name:"Magnet",icon:"magnet",unlock:3,desc:"Pull nearby things onto your ball for 10 seconds."},time:{name:"+15s",icon:"clock",unlock:4,desc:"Adds 15 seconds to the clock."}},Ud={big:{name:"Big Start",icon:"smiley",unlock:5,desc:"Start the level one size bigger."},speed:{name:"Speed",icon:"bolt",unlock:6,desc:"Roll faster for the first 20 seconds."}},Aw=[{coins:50},{coins:75},{booster:"grow",n:1},{coins:100},{booster:"magnet",n:1},{coins:150},{coins:300,big:!0}],Fd=[{stars:5,coins:100},{stars:12,booster:"magnet",n:2},{stars:20,coins:300},{stars:30,skin:"planet"}],rE=600*1e3,oE=24*3600*1e3,rn=null;function Pw(n){rn=n}var aE=()=>bi("Demo build: purchases are off");function T_(n,t=""){return`<img src="${re("coin")}" alt="" style="width:7cqw">${n}${t}`}function ga(n){return J.coins<n?(bi("Not enough coins"),!1):(J.coins-=n,Fe(),rn.refresh(),Ze.coin(),!0)}function Qs(n){Bd();let e={shop:lE,album:cE,skins:hE}[n]?.();e&&(ut("#sheetHost").appendChild(e),document.querySelectorAll(".nav .tab").forEach(i=>i.classList.toggle("on",i.dataset.tab===n)))}function Bd(){ut("#sheetHost").innerHTML="",document.querySelectorAll(".nav .tab").forEach(n=>n.classList.toggle("on",n.dataset.tab==="home"))}function lE(){let n=Date.now()>=J.shopFree,t=He(`<div class="sheet"><div class="head t">Shop</div><div class="body">
    <div class="card"><span class="tagline t-thin t">FREE</span><h3>Daily Gift</h3>
      <div class="row" style="justify-content:space-between">
        <div class="row" style="font-size:7cqw"><img src="${re("coin")}" style="width:13cqw" alt="">100</div>
        <button class="btn ${n?"btn-green":"btn-purple"} t t-thin" id="freeCoins" style="height:11cqw;padding:0 5cqw;font-size:5cqw;border-radius:3cqw">${n?"Claim":"Claimed"}</button>
      </div>
      ${n?"":`<div style="margin-top:1.6cqw;font-size:4cqw;opacity:.75" id="freeIn">New gift in ${Gn(J.shopFree-Date.now())}</div>`}
    </div>
    <div class="card"><h3>Coins</h3><div class="grid2">
      ${[[1e3,"$1.99"],[5e3,"$8.99","POPULAR"],[1e4,"$13.99"],[25e3,"$24.99","BEST VALUE"]].map(([e,i,s])=>`
        <div class="card pack" style="background:#fff">${s?`<span class="tagline t t-thin">${s}</span>`:""}
          <img src="${re(e>=1e4?"chest":"coin")}" alt=""><div class="amt">${e.toLocaleString("en-US")}</div>
          <button class="btn btn-green t t-thin" data-buy>${i}</button></div>`).join("")}
    </div></div>
    <div class="card"><span class="tagline t t-thin">-60%</span><h3>Starter Pack</h3>
      <div class="row" style="justify-content:space-around;margin-bottom:2cqw">
        <div class="row" style="font-size:6cqw"><img src="${re("coin")}" style="width:11cqw" alt="">2,000</div>
        ${["bolt","magnet","clock"].map(e=>`<div style="position:relative"><img src="${re(e)}" style="width:12cqw" alt=""><span class="t t-thin" style="position:absolute;right:-1cqw;bottom:-1cqw;font-size:4.4cqw">x3</span></div>`).join("")}
      </div>
      <button class="btn btn-green t" data-buy style="width:100%;height:12cqw;font-size:6cqw">$4.99</button>
    </div>
    <div class="card"><h3>Watch a video</h3>
      <div class="row" style="justify-content:space-between">
        <div class="row" style="font-size:7cqw"><img src="${re("coin")}" style="width:12cqw" alt="">50</div>
        <button class="btn btn-blue t t-thin" id="adCoins" style="height:11cqw;padding:0 4cqw;font-size:5cqw;border-radius:3cqw"><i class="vid"></i>Free</button>
      </div></div>
    <div class="card" style="text-align:center;font-size:4cqw;opacity:.8">Demo build: store prices are mock-ups.</div>
  </div></div>`);return t.querySelectorAll("[data-buy]").forEach(e=>Me(e,aE)),Me(t.querySelector("#freeCoins"),()=>{if(Date.now()<J.shopFree){bi("Come back later!");return}J.shopFree=Date.now()+oE,Fe(),rn.giveCoins(100,gn(t.querySelector("#freeCoins"))),Qs("shop")}),Me(t.querySelector("#adCoins"),async()=>{await Ur(),rn.giveCoins(50,gn(t.querySelector("#adCoins")))}),t}function cE(){let n=Cw.flatMap(i=>i.items),t=n.filter(i=>J.collected[i]).length;return He(`<div class="sheet"><div class="head t">Album<small class="t-thin">${t}/${n.length} found</small></div><div class="body">
    ${Cw.map(i=>`<div class="card"><h3>${i.name}</h3><div class="grid4">
      ${i.items.map(s=>{let r=J.collected[s]||0;return`<div class="alb ${r?"":"no"}"><img src="${Es(s)}" alt="${sn[s].name}">${r?`<span class="t t-thin">${r>999?"999+":r}</span>`:""}</div>`}).join("")}
    </div></div>`).join("")}
  </div></div>`)}function hE(){let n=He(`<div class="sheet"><div class="head t">Skins</div><div class="body"><div class="grid2">
    ${Rw.map(t=>{let e=J.skins.owned.includes(t.id),s=J.skins.current===t.id?'<button class="btn btn-purple t t-thin" disabled>In use</button>':e?`<button class="btn btn-blue t t-thin" data-use="${t.id}">Use</button>`:`<button class="btn btn-green t t-thin" data-buy="${t.id}">${T_(t.price)}</button>`;return`<div class="card skin"><h3 style="margin:0">${t.name}</h3><img src="${_w(t.id)}" style="width:30cqw" alt="">${s}</div>`}).join("")}
  </div></div></div>`);return n.querySelectorAll("[data-use]").forEach(t=>Me(t,()=>{J.skins.current=t.dataset.use,Fe(),rn.setSkin(t.dataset.use),Qs("skins")})),n.querySelectorAll("[data-buy]").forEach(t=>Me(t,()=>{let e=Rw.find(i=>i.id===t.dataset.buy);ga(e.price)&&(J.skins.owned.push(e.id),J.skins.current=e.id,Fe(),rn.setSkin(e.id),Ze.chest(),bi(`${e.name} unlocked!`),Qs("skins"))})),n}function Od(){return J.daily.last!==f_()}function R_(){let n=J.daily.idx%7,t=Od(),e=(s,r)=>{let o=r<n||r===n&&!t,a=s.booster?wn[s.booster].icon:s.big?"chest":"coin";return`<div class="day ${o?"got":""} ${r===n&&t?"today":""} ${s.big?"big":""}"><span class="t t-thin">Day ${r+1}</span><img src="${re(a)}" alt=""><span class="t t-thin">${s.booster?"x"+s.n:s.coins}</span></div>`},i=zi({title:"Daily Reward",body:`<div class="days">${Aw.map(e).join("")}</div>`,buttons:t?'<button class="btn btn-green t big-btn" id="dailyClaim">Claim</button>':`<div class="t t-thin" style="font-size:5cqw">Next reward in <span id="dailyIn">${Gn(uE())}</span></div>`});Me(i.el.querySelector("#dailyClaim"),()=>{let s=Aw[n];J.daily.last=f_(),J.daily.idx=n+1;let r=gn(i.el.querySelector(".day.today"));s.booster?(J.boosters[s.booster]+=s.n,Fe(),Ze.chest(),bi(`${wn[s.booster].name} x${s.n}`)):rn.giveCoins(s.coins,r),Fe(),i.close(),rn.refresh()})}function uE(){let n=new Date;return new Date(n.getFullYear(),n.getMonth(),n.getDate()+1)-n}function C_(){let n=J.eventStart+2592e5-Date.now();return n<=0&&(J.eventStart=Date.now(),J.eventStars=0,J.eventClaimed=[],Fe(),n=2592e5),n}function zd(){let n=C_(),t=Fd[Fd.length-1].stars,e=zi({title:"Star Rush",body:`<div class="inner"><div style="margin-bottom:2cqw">Win levels and earn stars to unlock prizes!</div>
      <div class="bar2"><i style="width:${Math.min(100,J.eventStars/t*100)}%"></i><span>${J.eventStars} / ${t}</span></div>
      <div class="tiers" style="margin-top:3cqw">${Fd.map((i,s)=>{let r=J.eventClaimed.includes(s),o=!r&&J.eventStars>=i.stars,a=i.skin?"smiley":i.booster?wn[i.booster].icon:"coin",l=i.skin?"Planet skin":i.booster?`${wn[i.booster].name} x${i.n}`:`${i.coins} coins`;return`<div class="tier ${r?"done":""}"><div class="n t t-thin">${i.stars}</div><img src="${re(a)}" alt=""><div class="txt">${l}</div>
          ${r?`<img src="${re("check")}" style="width:9cqw" alt="">`:o?`<button class="btn btn-green t t-thin" data-tier="${s}">Claim</button>`:`<img src="${re("lock")}" style="width:8cqw" alt="">`}</div>`}).join("")}</div></div>`,buttons:`<div class="t t-thin" style="font-size:5cqw">Ends in ${Gn(n)}</div>`});e.el.querySelectorAll("[data-tier]").forEach(i=>Me(i,()=>{let s=+i.dataset.tier,r=Fd[s];J.eventClaimed.push(s),r.coins&&rn.giveCoins(r.coins,gn(i)),r.booster&&(J.boosters[r.booster]+=r.n,bi(`${wn[r.booster].name} x${r.n}`)),r.skin&&!J.skins.owned.includes(r.skin)&&(J.skins.owned.push(r.skin),bi("New skin: Planet!")),Fe(),Ze.chest(),e.close(),zd(),rn.refresh()}))}function kd(){let n=J.hearts>=5,t=zi({title:n?"Full Lives":"Lives",body:`<div class="inner"><div style="position:relative;display:inline-block"><img src="${re("heart")}" class="icon-xl" alt=""><span class="t" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12cqw;padding-bottom:3cqw">${J.hearts}</span></div>
      <div>${n?"You have all your lives. Go play!":`Next life in <b class="red" id="heartIn">${Gn(nc())}</b>`}</div></div>`,buttons:n?'<button class="btn btn-green t big-btn" data-close>OK</button>':`<button class="btn btn-green t big-btn" id="refill">Refill ${T_(300)}</button><button class="btn btn-blue t mid-btn" id="adHeart"><i class="vid"></i>+1 Life</button>`});Me(t.el.querySelector("#refill"),()=>{ga(300)&&(J.hearts=5,J.heartT=0,Fe(),t.close(),rn.refresh(),bi("Lives refilled!"))}),Me(t.el.querySelector("#adHeart"),async()=>{t.close(),await Ur(),J.hearts=Math.min(5,J.hearts+1),Fe(),rn.refresh(),bi("+1 life")});let e=setInterval(()=>{let i=t.el.querySelector("#heartIn");if(!i||!i.isConnected)return clearInterval(e);i.textContent=Gn(nc())},1e3);return t}function Hd(){return Date.now()>=J.gift}async function Iw(n){if(!Hd()){bi(`Next free gift in ${Gn(J.gift-Date.now())}`);return}let t=zi({title:"Free Coins",body:`<div class="inner"><img src="${re("gift")}" class="icon-xl" alt=""><div>Watch a short video for <b class="red">50 coins</b>!</div></div>`,buttons:'<button class="btn btn-green t big-btn" id="giftGo"><i class="vid"></i>Watch</button>'});Me(t.el.querySelector("#giftGo"),async()=>{t.close(),await Ur(),J.gift=Date.now()+rE,Fe(),rn.giveCoins(50,gn(n))})}var dE={music:'<svg viewBox="0 0 24 24"><path fill="#fff" stroke="#2a1a5e" stroke-width="1.4" d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3" fill="#fff" stroke="#2a1a5e" stroke-width="1.4"/><circle cx="17" cy="16" r="3" fill="#fff" stroke="#2a1a5e" stroke-width="1.4"/></svg>',sound:'<svg viewBox="0 0 24 24"><path fill="#fff" stroke="#2a1a5e" stroke-width="1.4" d="M4 9h4l5-4v14l-5-4H4z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/></svg>',vibe:'<svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2" fill="#fff" stroke="#2a1a5e" stroke-width="1.4"/><path fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" d="M3 9v6M21 9v6"/></svg>'};function A_(){let n=(e,i)=>`<button class="btn toggle t t-thin ${J.settings[e]?"":"off"}" data-k="${e}"><span class="sq btn-blue">${dE[e]}</span>${i}</button>`,t=J.settings.rollSpeed||1;return`<div class="row" style="gap:6cqw">${n("music","Music")}${n("sound","Sound")}${n("vibe","Vibration")}</div>
    <div class="speedRow t t-thin"><div class="lbl">Roll speed <b id="spVal">${Dw(t)}</b></div>
      <input type="range" id="spRange" min="0.6" max="2.5" step="0.1" value="${t}">
      <div class="ends"><span>Slow</span><span>Demo build tuning</span><span>Fast</span></div></div>`}var Dw=n=>`${Math.round(n*100)}%`;function P_(n){n.querySelectorAll(".toggle").forEach(e=>Me(e,()=>{let i=e.dataset.k;J.settings[i]=!J.settings[i],Fe(),__(),e.classList.toggle("off",!J.settings[i])}));let t=n.querySelector("#spRange");t&&t.addEventListener("input",()=>{let e=+t.value;J.settings.rollSpeed=e,Ss.scale=e,Fe(),n.querySelector("#spVal").textContent=Dw(e)})}function fE(){let n=J.settings.home==="planet"?"planet":"stage",t=(e,i)=>`<button class="btn seg t t-thin ${n===e?"on":""}" data-home="${e}">${i}</button>`;return`<div class="homeRow t t-thin"><div class="lbl">Home scene</div><div class="segs">${t("stage","Stage")}${t("planet","Planet")}</div></div>`}function Vd(){let n=zi({title:"Settings",body:A_()+fE(),buttons:`<button class="btn btn-blue t mid-btn" id="support">Support</button>
      <button class="btn btn-blue t mid-btn" id="restore">Restore Purchases</button>
      <button class="btn btn-red t mid-btn" id="reset">Reset Progress</button>
      <div class="t t-thin" style="font-size:3.6cqw;opacity:.7">Roll A Planet demo v0.1</div>`});P_(n.el),n.el.querySelectorAll(".homeRow .seg").forEach(t=>Me(t,()=>{J.settings.home=t.dataset.home,Fe(),n.el.querySelectorAll(".homeRow .seg").forEach(e=>e.classList.toggle("on",e===t)),window.dispatchEvent(new CustomEvent("homescene",{detail:t.dataset.home}))})),Me(n.el.querySelector("#support"),()=>bi("Demo build: support is off")),Me(n.el.querySelector("#restore"),()=>bi("Demo build: nothing to restore")),Me(n.el.querySelector("#reset"),()=>I_("Reset?","All progress on this device will be deleted.","Reset",()=>{vd(),location.reload()}))}function I_(n,t,e,i,s="Cancel"){let r=zi({title:n,ribbon:"red",body:`<div class="inner">${t}</div>`,buttons:`<button class="btn btn-red t big-btn" id="cfYes">${e}</button><button class="btn link t t-thin" data-close>${s}</button>`});return Me(r.el.querySelector("#cfYes"),()=>{r.close(),i()}),r}function Nw(){zi({title:"Star Chest",body:`<div class="inner"><img src="${re("chest")}" class="icon-xl" alt=""><div>Win levels to earn stars.<br><b class="red">${6} stars</b> open the chest!</div>
      <div class="row" style="margin-top:3cqw"><img src="${re("coin")}" style="width:12cqw" alt=""><img src="${re("bolt")}" style="width:12cqw" alt=""><img src="${re("magnet")}" style="width:12cqw" alt=""><img src="${re("gem")}" style="width:12cqw" alt=""></div></div>`,buttons:'<button class="btn btn-green t big-btn" data-close>OK</button>'})}function Lw(n,t){let e=wn[n],i=zi({title:e.name,body:`<div class="inner"><div style="position:relative;display:inline-block"><img src="${re(e.icon)}" class="icon-xl" alt=""><span class="t cnt-tag" style="position:absolute;right:-3cqw;bottom:0">x3</span></div><div>${e.desc}</div></div>`,buttons:`<button class="btn btn-green t big-btn" id="buyB">${T_(150)}</button>`});return Me(i.el.querySelector("#buyB"),()=>{ga(150)&&(J.boosters[n]+=3,Fe(),i.close(),t?.())}),i}function D_(){return new Promise(n=>{let t=Object.keys(wn).filter(o=>J.unlocked[o]),e=t.length?t[Math.floor(Math.random()*t.length)]:null,i=e?100:150,s=He(`<div id="chestOpen"><div class="rays"></div><div class="title t">Star Chest!</div><img class="ch" src="${re("chest")}" alt=""><div class="loot"></div><div class="tap t t-thin">Tap to open</div></div>`);ut("#overlayHost").appendChild(s);let r=0;s.addEventListener("click",async()=>{if(r===0)r=1,Ze.chest(),s.classList.add("opened"),s.querySelector(".loot").innerHTML=`<div class="t"><img src="${re("coin")}" alt="">${i}</div>${e?`<div class="t"><img src="${re(wn[e].icon)}" alt="">x1</div>`:""}`,s.querySelector(".tap").textContent="Tap to claim",await Pi(500),r=2;else if(r===2){r=3,e&&(J.boosters[e]+=1),Fe();let o=gn(s.querySelector(".loot div"));s.remove(),await rn.giveCoins(i,o),n()}})})}var kr=new URLSearchParams(location.search);kr.has("reset")&&vd();if(kr.has("level")){J.level=Math.max(1,+kr.get("level")),J.seen.tut=!0;for(let[n,t]of Object.entries(wn))J.level>t.unlock&&!J.unlocked[n]&&(J.unlocked[n]=!0,J.boosters[n]=Math.max(J.boosters[n],2));if(!J.ballItems.length&&J.level>1){let n=[];for(let t=1;t<J.level;t++)for(let e of ua(t).goals)n.push(e.type);J.ballItems=Array.from({length:40},(t,e)=>({type:n[e%n.length],v:e%3}))}Fe()}var ba=kr.get("shot");Ss.scale=J.settings.rollSpeed||1;var ya=ut("#app");ba&&ya.classList.add("shotmode");var _E=ut("#game"),N_=new F,Or,St,Qe,xa,oe="loading",Hi=1,Vi=1,va=1,ki=null,U_=0,B_=!1,z_=!1,Gd=!1,zr=null,Fw=["Roll over small things to grow!","Big things need a bigger ball.","Knock towers down, then roll them up!","Your hero shows how big you have grown."];function Br(n){let t=Math.round(n*100);ut("#loadBar").style.width=t+"%",ut("#loadPct").textContent=t+"%"}async function mE(){ut("#loadTip").textContent=Fw[Math.floor(Math.random()*Fw.length)],Br(.05);let n=["logo","hero-stand","hero-big"].map(i=>`img/${i}.webp`).concat(["coin","heart","gear","daily","gift","star","smiley","chest","bag","album","home","crown","trophy","lock","clock","bolt","magnet","check","gem"].map(re)),t=0;await Promise.all([...n.map(i=>new Promise(s=>{let r=new Image;r.onload=r.onerror=()=>{t++,Br(.05+.3*t/n.length),s()},r.src=i})),Promise.race([document.fonts.load("20px Lilita"),Pi(2500)])]),await c_(),Br(.45),Or=new So({canvas:_E,antialias:!0,alpha:!0,powerPreference:"high-performance"}),Or.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Or.shadowMap.enabled=!0,Or.shadowMap.type=ur,Or.setClearColor(0,0),xa=new Id(Or,kr.get("post")),St=new yd,Qe=new Md(St.geos,kr.get("home")||J.settings.home),fw(St.geos),St.setSkin(J.skins.current),Qe.setSkin(J.skins.current),Pw({refresh:Ma,setSkin:i=>{St.setSkin(i),Qe.setSkin(i)},giveCoins:vE}),TE(),gE(),yE(),window.addEventListener("homescene",i=>{Qe.setStage(i.detail),Qe.setup(H_(),J.ballItems),Qe.resize(Hi,Vi)}),Bw(),window.addEventListener("resize",Bw);for(let i=1;i<=3;i++)for(let s of ua(i).goals)Es(s.type);Br(.55),requestAnimationFrame(Vw),J.level===1&&!J.seen.tut&&(!ba||ba==="tut")?(await jw(1,{},i=>Br(.55+.45*i)),Br(1),await Pi(250),await Uw(),$w(!0)):(Br(1),await Pi(250),qw(),await Uw(),ba&&zE(ba))}async function Uw(){let n=ut("#loading");n.style.opacity="0",await Pi(420),n.classList.add("hidden")}function Bw(){let n=ya.getBoundingClientRect();Hi=Math.max(1,n.width),Vi=Math.max(1,n.height),Or.setSize(Hi,Vi,!1),xa.setSize(Hi,Vi),St.resize(Hi,Vi),Qe.resize(Hi,Vi)}var Sa=performance.now();function Vw(n){let t=Math.min(.05,Math.max(0,(n-Sa)/1e3));if(Sa=n,St.level&&oe!=="lobby"){(oe==="play"||oe==="win"||oe==="intro"||oe==="fail")&&St.update(t,oe==="play"?Ww(t):Gw),(oe==="play"||oe==="paused"||oe==="fail")&&Zw(t);let e=St.focusD||5;xa.render(St.scene,St.camera,t,"level",{focus:e,range:e*.9,ramp:e*2.5,maxBlur:.0035,aoRadius:Math.max(.12,St.R*.9)})}else Qe.update(t),bE(t),xa.render(Qe.scene,Qe.camera,t,"lobby",Qe.dof());requestAnimationFrame(Vw)}var Gw={x:0,y:0},on={x:0,y:0},os=new Set,pi=null,k_=0;function gE(){let n=ut("#touch"),t=ut("#stick"),e=t.querySelector("i"),i=null;n.addEventListener("pointerdown",o=>{oe==="lobby"&&(i={id:o.pointerId,x:o.clientX,x0:o.clientX,y0:o.clientY,t:performance.now()},n.setPointerCapture(o.pointerId))}),n.addEventListener("pointermove",o=>{if(!i||o.pointerId!==i.id)return;let a=performance.now();Qe.drag(o.clientX-i.x,Math.max(.001,(a-i.t)/1e3)),i.x=o.clientX,i.t=a});let s=o=>{!i||o.pointerId!==i.id||(Math.hypot(o.clientX-i.x0,o.clientY-i.y0)<8&&(Qe.poke(),Xw(zw[wc++%zw.length],1.6)),Qe.release(),i=null)};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),n.addEventListener("pointerdown",o=>{if(lc(),oe!=="play")return;if(Hr){Qw();return}let a=ya.getBoundingClientRect();pi={id:o.pointerId,ox:o.clientX-a.left,oy:o.clientY-a.top},n.setPointerCapture(o.pointerId),t.style.left=pi.ox+"px",t.style.top=pi.oy+"px",e.style.transform="",t.classList.remove("hidden")}),n.addEventListener("pointermove",o=>{if(!pi||o.pointerId!==pi.id)return;let a=ya.getBoundingClientRect(),l=o.clientX-a.left,h=o.clientY-a.top,u=l-pi.ox,d=h-pi.oy,f=Mi(13),p=Math.hypot(u,d);p>f&&(pi.ox+=u*(1-f/p),pi.oy+=d*(1-f/p),u=l-pi.ox,d=h-pi.oy,t.style.left=pi.ox+"px",t.style.top=pi.oy+"px");let _=Math.hypot(u,d),b=f*.12,g=f*.65,m=Math.max(0,Math.min(1,(_-b)/(g-b)));on.x=_?u/_*m:0,on.y=_?d/_*m:0,e.style.transform=`translate(${u}px, ${d}px)`});let r=o=>{!pi||o.pointerId!==pi.id||(pi=null,on.x=on.y=0,t.classList.add("hidden"))};n.addEventListener("pointerup",r),n.addEventListener("pointercancel",r),ya.addEventListener("pointerdown",()=>lc(),{capture:!0}),ya.addEventListener("pointerup",()=>lc(),{capture:!0}),window.addEventListener("keydown",o=>{lc(),os.add(o.key.toLowerCase()),o.key==="Escape"&&oe==="play"&&Wd()}),window.addEventListener("keyup",o=>os.delete(o.key.toLowerCase())),document.addEventListener("visibilitychange",()=>{document.hidden&&oe==="play"&&Wd()})}function Ww(n){if(Gd)return wE(n);let t=on.x,e=on.y;(os.has("a")||os.has("arrowleft"))&&(t-=1),(os.has("d")||os.has("arrowright"))&&(t+=1),(os.has("w")||os.has("arrowup"))&&(e-=1),(os.has("s")||os.has("arrowdown"))&&(e+=1);let i=Math.hypot(t,e);return i>1&&(t/=i,e/=i),i>.2&&(k_+=n),{x:t,y:e}}var L_=0,wa=null;function wE(n){L_-=n;let t=St.ballPos().clone();if(L_<=0||!wa||wa.state!==0){L_=.3,wa=null;let o=1e9;for(let a of St.items){if(a.state!==0||!St.canPick(a))continue;let l=a.body.translation(),h=(l.x-t.x)**2+(l.z-t.z)**2;St.goals.some(u=>u.type===a.type&&u.left>0)&&(h*=.3),h<o&&(o=h,wa=a)}}if(!wa)return{x:0,y:-1};let e=wa.body.translation(),i=e.x-t.x,s=e.z-t.z,r=Math.hypot(i,s)||1;return{x:i/r,y:s/r}}var Ow=["Roll over small things to grow!","Bigger ball, bigger things!","Every level makes my ball bigger!","Fill the star bar for a chest!"],zw=["Hey!","Let's roll!","Wheee!","Hehe!"],F_=2.5,gc=0,wc=0;function Xw(n,t=3.5){let e=ut("#heroTip");e.textContent=n,e.classList.remove("hidden","pop"),e.offsetWidth,e.classList.add("pop"),gc=t}function bE(n){let t=ut("#heroTip");if(oe!=="lobby"){t.classList.add("hidden"),gc=0;return}if(F_-=ba==="tip"&&wc===0?99:n,F_<=0){F_=18;let i=Hd()?"Your free gift is ready!":Od()?"Daily reward waiting!":null;Xw(i&&wc%2===0?i:Ow[wc%Ow.length]),wc++}if(gc<=0)return;if(gc-=n,gc<=0){t.classList.add("hidden");return}let e=Qe.headScreen();t.style.left=e.x*100+"%",t.style.top=e.y*100+"%"}function H_(){return Math.min(3.2,1.5+.17*(J.level-1))}function yE(){let n=(t,e)=>Me(t,i=>{oe==="lobby"&&e(i)});n(ut("#playBtn"),Yw),n(ut("#coinPill"),()=>Qs("shop")),n(ut("#heartBtn"),()=>kd()),n(ut("#gearBtn"),()=>Vd()),n(ut("#dailyBtn"),()=>R_()),n(ut("#giftBtn"),()=>Iw(ut("#giftBtn"))),n(ut("#eventBtn"),()=>zd()),n(ut("#skinsBtn"),()=>Qs("skins")),n(ut("#chestBar"),()=>Nw()),document.querySelectorAll(".nav .tab").forEach(t=>n(t,()=>{let e=t.dataset.tab;e==="home"?Bd():e==="team"?bi("Teams unlock at Level 15"):e==="ranks"?bi("Ranks unlock at Level 10"):Qs(e)})),setInterval(()=>{oe==="lobby"&&Ma()},1e3),Me(ut("#pauseBtn"),()=>Wd())}function Ma(){ow();let n=zr??J.coins;ut("#coinTxt").textContent=n.toLocaleString("en-US"),ut("#heartTxt").textContent=J.hearts,ut("#heartSub").textContent=J.hearts>=5?"FULL":Gn(nc()),O_(J.chestStars),ut("#playBtn").textContent=`Level ${J.level}`,ut("#dailyDot").classList.toggle("hidden",!Od()),ut("#giftBadge").textContent=Hd()?"Free":Gn(J.gift-Date.now()),ut("#eventBadge").textContent=Gn(C_())}function O_(n){ut("#chestFill").style.width=Math.min(1,n/6)*100+"%",ut("#chestTxt").textContent=`${Math.min(n,6)}/${6}`,ut("#chestBar").classList.toggle("full",n>=6)}function qw(){oe="lobby",Gd=!1,ut("#hud").classList.add("hidden"),ut("#win").classList.add("hidden"),ut("#intro").classList.add("hidden"),ut("#lobby").classList.remove("hidden"),St.level&&St.unload(),Qe.setup(H_(),J.ballItems),Qe.resize(Hi,Vi),Ma()}async function vE(n,t){let e=ut("#coinPill"),i=J.coins;if(J.coins+=n,Fe(),!oe.startsWith("lobby")||!t){Ma(),Ze.coin();return}zr=i;let s=Math.min(10,Math.max(3,Math.round(n/20)));await Ld(re("coin"),t,e,s,{onEach:r=>{zr=Math.round(i+n*r/s),ut("#coinTxt").textContent=zr.toLocaleString("en-US"),Ze.coin()}}),zr=null,Ma()}function Yw(){if(J.hearts<=0){kd();return}J.level>=2?V_(J.level):Ea(J.level,{})}function V_(n){let t=ua(n),e=[];for(let[o,a]of Object.entries(Ud))n>=a.unlock&&!J.unlocked[o]&&(J.unlocked[o]=!0,J.boosters[o]+=2,e.push(o));Fe();let i=new Set,s=(o,a)=>{if(!J.unlocked[o])return`<div class="slot locked"><img class="ic" src="${re(a.icon)}" alt=""><img class="lk" src="${re("lock")}" alt=""><span class="lv t t-thin">Lvl ${a.unlock}</span><span class="nm t t-thin">${a.name}</span></div>`;let h=J.boosters[o];return`<button class="btn slot" data-k="${o}"><img class="ic" src="${re(a.icon)}" alt="">${o==="big"?'<span class="t" style="position:absolute;top:1cqw;right:2cqw;font-size:5cqw">+1</span>':""}<span class="cnt t t-thin" style="${h?"":"background:#36b51f"}">${h||"+"}</span><img class="chk" src="${re("check")}" alt="">${e.includes(o)?'<span class="free t t-thin">NEW</span>':""}<span class="nm t t-thin">${a.name}</span></button>`},r=zi({title:`Level ${n}`,body:`<div class="inner"><div style="margin-bottom:2cqw">Collect all of these!</div><div class="goalprev">${t.goals.map(o=>`<div class="gp"><img src="${Es(o.type)}" alt=""><span class="t t-thin">${o.count}</span></div>`).join("")}</div>
      ${t.time?`<div class="row" style="margin-top:2cqw"><img src="${re("clock")}" style="width:8cqw" alt=""><span>${vc(t.time)}</span></div>`:""}</div>
      <div class="t t-thin" style="font-size:5.4cqw;align-self:flex-start;margin-left:2cqw">Select Boosters:</div>
      <div class="pick" style="margin-bottom:6cqw">${Object.entries(Ud).map(([o,a])=>s(o,a)).join("")}</div>`,buttons:'<button class="btn btn-green t big-btn" id="goBtn">Play</button>'});return r.el.querySelectorAll(".slot[data-k]").forEach(o=>Me(o,()=>{let a=o.dataset.k;if(!J.boosters[a]){let l=Ud[a],h=zi({title:l.name,body:`<div class="inner"><img src="${re(l.icon)}" class="icon-xl" alt=""><div>${l.desc}</div></div>`,buttons:`<button class="btn btn-green t big-btn" id="buyPre"><img src="${re("coin")}" style="width:7cqw" alt="">120</button>`});Me(h.el.querySelector("#buyPre"),()=>{ga(120)&&(J.boosters[a]+=1,Fe(),h.close(),r.close(),V_(n))});return}i.has(a)?i.delete(a):i.add(a),o.classList.toggle("sel",i.has(a))})),Me(r.el.querySelector("#goBtn"),()=>{let o={};for(let a of i)J.boosters[a]--,o[a]=!0;Fe(),r.close(),Ea(n,o)}),r}async function jw(n,t,e){va=n;let i=ua(n);U_=0,B_=!1,z_=!1,await St.load(i,{bigStart:!!t.big,onProgress:e}),t.speed&&(St.speedBoost=20),St.resize(Hi,Vi),St.update(.016,Gw),ME(i,n),ut("#lobby").classList.add("hidden"),ut("#lobbyBg").classList.add("hidden"),ut("#win").classList.add("hidden"),ut("#hud").classList.remove("hidden")}async function Ea(n,t={},{holdIntro:e=!1}={}){oe==="starting"||oe==="leaving"||oe==="lobby-reward"||(oe==="lobby"&&!St.level&&Qe.dive(),oe="starting",Nd(),await E_(async()=>{Bd(),await jw(n,t),oe="intro"}),await xE(ua(n),n,e),!e&&$w(!1))}async function $w(n){oe="intro",await SE(va),St.start(),oe="play",Sa=performance.now(),n?CE():yc&&IE(yc)}function vc(n){return n=Math.ceil(n),`${Math.floor(n/60)}:${String(n%60).padStart(2,"0")}`}function xE(n,t,e){let i=ut("#intro");return i.innerHTML=`<div class="band"><div class="title t">Level ${t}</div><img class="mascot" src="img/hero-stand.webp" alt="">
    <div class="goalsrow">${n.goals.map(s=>`<div class="gi"><img src="${Es(s.type)}" alt=""><span class="t">x${s.count}</span></div>`).join("")}</div>
    ${n.time?`<div class="clock t"><img src="${re("clock")}" alt="">${vc(n.time)}</div>`:""}</div>`,i.style.transition="",i.style.opacity="1",i.classList.remove("hidden"),e?Promise.resolve():new Promise(s=>{let r=!1,o=async()=>{r||(r=!0,i.style.transition="opacity .35s",i.style.opacity="0",await Pi(360),i.classList.add("hidden"),s())};i.onclick=o,setTimeout(o,2400)})}var yc=null;async function SE(n){yc=null;for(let[t,e]of Object.entries(wn))e.unlock!==n||J.unlocked[t]||(J.unlocked[t]=!0,J.boosters[t]+=3,Fe(),bc(),Ze.chest(),await new Promise(i=>{let s=zi({title:"New Booster!",close:!1,body:`<div class="inner"><div style="position:relative;display:inline-block"><img src="${re(e.icon)}" class="icon-xl" alt=""><span class="t cnt-tag" style="position:absolute;right:-4cqw;bottom:0">x3</span></div>
          <div class="t" style="font-size:8cqw;margin:1cqw 0">${e.name}</div><div>${e.desc}</div></div>`,buttons:'<button class="btn btn-green t big-btn" id="collectB">Collect</button>',onClose:i});Me(s.el.querySelector("#collectB"),()=>s.close())}),yc=t)}var Ke=null;function ME(n,t){ut("#hudLevel").textContent=`LEVEL ${t}`;let e=ut("#goals");e.innerHTML="",Ke={cards:{},arrowT:0,goal:null,t:0,flyers:0,lastBlocked:null};for(let i of n.goals){let s=He(`<div class="goal"><img src="${Es(i.type)}" alt=""><span class="n t">${i.count}</span><img class="ok" src="${re("check")}" alt=""></div>`);e.appendChild(s),Ke.cards[i.type]=s}ut("#timer").classList.toggle("hidden",!n.time),ut("#timer").classList.remove("low"),ut("#timerTxt").textContent=vc(n.time||0),bc(),ut("#arrow").classList.add("hidden"),ut("#fx").innerHTML="",Hr=null,document.querySelectorAll(".tut").forEach(i=>i.remove()),Jw(!0)}function bc(){let n=ut("#boosters");n.innerHTML="";for(let[t,e]of Object.entries(wn)){let i=!J.unlocked[t],s=J.boosters[t],r=He(`<button class="btn boost ${i?"locked":""}" data-k="${t}"><i class="ring"></i><img src="${re(e.icon)}" alt="">
      ${i?`<img class="lk" src="${re("lock")}" alt=""><span class="cap t t-thin">Lvl ${e.unlock}</span>`:`<span class="cnt t t-thin ${s?"":"plus"}">${s||"+"}</span>`}</button>`);Me(r,()=>EE(t)),n.appendChild(r)}}function EE(n,t=!1){let e=wn[n];if(!J.unlocked[n]){bi(`Unlocks at Level ${e.unlock}`);return}if(Hr){if(n!==Hr||oe!=="play"){Qw();return}Kw(),t=!0}if(!(oe!=="play"&&!t)){if(n==="time"&&!St.level.time){bi("No clock in this level");return}if(n==="magnet"&&St.magnet>0){bi("Magnet is already on");return}if(!t&&!J.boosters[n]){oe="paused",Lw(n,bc).onClose=()=>{oe="play",Sa=performance.now(),bc()};return}if(t||(J.boosters[n]--,Fe()),Ze.booster(),rs(20),n==="grow"&&St.useGrow(),n==="magnet"&&St.useMagnet(),n==="time"){St.addTime(15);let i=gn(ut("#timer")),s=He(`<div class="float t" style="left:${i.x}px;top:${i.y+Mi(9)}px;color:#7dff6a">+15s</div>`);ut("#fx").appendChild(s),setTimeout(()=>s.remove(),900)}bc()}}function Jw(n){let t=St.sizeProgress();ut("#sizeRing").style.strokeDashoffset=251.3*(1-t),ut("#sizeTxt").textContent=`SIZE ${St.sizeLevel}`}function Zw(n){if(!Ke)return;Ke.t+=n,Ke.spot?.(),St.level.time&&(ut("#timerTxt").textContent=vc(St.timeLeft),ut("#timer").classList.toggle("low",St.timeLeft<=15&&oe==="play")),Jw();let e=St.renderPos().clone(),i=St.project(e,Hi,Vi),s=ut("#magnetFx");if(St.magnet>0&&oe==="play"){s||(s=He('<div id="magnetFx"></div>'),ut("#fx").appendChild(s)),s.style.left=i.x+"px",s.style.top=i.y+"px";let l=document.querySelector('.boost[data-k="magnet"] .ring');l&&l.style.setProperty("--p",St.magnet/10*100+"%"),document.querySelector('.boost[data-k="magnet"]')?.classList.add("active")}else if(s){s.remove();let l=document.querySelector('.boost[data-k="magnet"]');l?.classList.remove("active"),l?.querySelector(".ring")?.style.setProperty("--p","0%")}Ke.arrowT-=n,Ke.arrowT<=0&&(Ke.arrowT=.2,Ke.goal=St.nearestGoal());let r=Ke.goal,o=ut("#arrow"),a=r&&oe==="play"&&!(ki&&ki.step===0)&&r.dist>St.R*2.2+2.5;if(o.classList.toggle("hidden",!a),a){let l=St.project(N_.set(r.x,r.y,r.z),Hi,Vi),h=Math.atan2(l.y-i.y,l.x-i.x),u=St.R,d=St.project(N_.set(e.x+u,e.y,e.z),Hi,Vi),f=Math.abs(d.x-i.x),p=St.project(N_.set(e.x,e.y+u+(St.heroH||.6),e.z),Hi,Vi),_=Math.max(0,i.y-p.y-f),b=Math.max(0,-Math.sin(h)),g=f+Mi(6)+b*b*_+Math.sin(Ke.t*7)*Mi(1.4);o.style.left=i.x+Math.cos(h)*g+"px",o.style.top=i.y+Math.sin(h)*g+"px",o.style.transform=`rotate(${h}rad)`}ki&&AE(n)}var kw=[[10,"Nice!"],[20,"Great!"],[35,"Awesome!"],[50,"Amazing!"],[75,"Unstoppable!"]];function TE(){St.on("pickup",n=>{Ze.pop(n.combo,n.size>.35);let t=performance.now();t-(Ke?.lastBuzz||0)>80&&(rs(n.size>.35?10:6),Ke&&(Ke.lastBuzz=t)),n.goal&&RE(n);let e=kw.findIndex(([i])=>i===n.combo);if(e>=0){let i=He(`<div class="combo t c${e}">${kw[e][1]}</div>`);ut("#fx").appendChild(i),setTimeout(()=>i.remove(),1e3)}}),St.on("sizeup",()=>{Ze.sizeup(),rs([15,40,15,40,40]),Ke&&(Ke.lastBuzz=performance.now()+100);let n=ut("#sizeBadge");n.classList.remove("up"),n.offsetWidth,n.classList.add("up");let t=He('<div class="sizeup-banner t">SIZE UP!</div>');ut("#fx").appendChild(t),setTimeout(()=>t.remove(),1200)}),St.on("blocked",n=>{if(oe!=="play")return;Ke.lastBlocked?.remove();let t=St.project(n.pos,Hi,Vi),e=He(`<div class="blocked t t-thin" style="left:${t.x}px;top:${t.y}px"><img src="${re("lock")}" alt="">SIZE ${n.need}</div>`);ut("#fx").appendChild(e),Ke.lastBlocked=e,setTimeout(()=>e.remove(),1400),Ze.blocked(),rs(30),ki&&!ki.blockTold&&PE()}),St.on("win",NE),St.on("timeup",UE)}function RE(n){let t=Ke.cards[n.type];if(!t)return;let e=n.goal.left,i=St.project(n.pos,Hi,Vi),s=()=>{t.querySelector(".n").textContent=Math.max(0,e),t.classList.remove("bump"),t.offsetWidth,t.classList.add("bump"),e<=0&&!t.classList.contains("done")&&(t.classList.add("done"),Ze.star(1),rs(25),setTimeout(()=>t.classList.add("flip"),700),setTimeout(()=>t.classList.add("gone"),1150))};if(Ke.flyers<8&&!i.behind){Ke.flyers++;let r=gn(t),o=He(`<img class="flyer" src="${Es(n.type)}" alt="">`);o.style.width=Mi(9)+"px",o.style.left=i.x-Mi(4.5)+"px",o.style.top=i.y-Mi(4.5)+"px",o.style.transition="transform .5s cubic-bezier(.5,-0.2,.7,1)",ut("#fx").appendChild(o),requestAnimationFrame(()=>{o.style.transform=`translate(${r.x-i.x}px, ${r.y-i.y}px) scale(.7)`}),setTimeout(()=>{o.remove(),Ke.flyers--,s(),Ze.goal()},520)}else s()}function CE(){ki={step:0,t:0,blockTold:!1},k_=0;let n=ut("#hud");n.appendChild(He('<div id="tutDrag" class="tut t">Drag to roll your ball!</div>')),n.appendChild(He('<svg class="hand swipe tut" viewBox="0 0 64 64"><path d="M26 58c-5-6-12-14-14-19-2-4 2-7 5-4l6 6V12c0-3 2-5 4-5s4 2 4 5v16c0-3 2-4 4-4s4 2 4 4v2c0-3 2-4 4-4s4 2 4 4v3c0-2 2-3 3-3 3 0 4 2 4 5v10c0 7-3 13-6 17z" fill="#fff" stroke="#2a1a5e" stroke-width="3" stroke-linejoin="round"/></svg>'))}function AE(n){if(ki.t+=n,ki.step===0&&k_>1){document.querySelectorAll(".tut").forEach(e=>e.remove()),ki.step=1,ki.t=0;let t=gn(ut("#goals"));ut("#hud").appendChild(He(`<div class="bubble up tut" style="left:${Mi(3)}px;top:${t.y+t.h/2+Mi(4)}px">Roll up the items on the <b>goal bar</b> to win!</div>`))}ki.step===1&&ki.t>4.5&&(document.querySelectorAll(".tut").forEach(t=>t.remove()),ki.step=2)}function PE(){ki.blockTold=!0;let n=He(`<div class="bubble tut" style="left:${Mi(12)}px;right:${Mi(12)}px;top:${Mi(62)}px;text-align:center">Too big for now! <b>Grow bigger</b> to roll it up.</div>`);ut("#hud").appendChild(n),setTimeout(()=>n.remove(),3200)}var Hr=null;function IE(n){let t=()=>document.querySelector(`.boost[data-k="${n}"]`);if(!t())return;St.active=!1,Hr=n,on.x=on.y=0,pi=null,ut("#stick").classList.add("hidden");let e=He('<div id="spot" class="tut"></div>'),i=He('<div id="spotText" class="t tut">Tap to try your new booster!</div>'),s=He('<svg class="hand tap tut" viewBox="0 0 64 64"><path d="M26 58c-5-6-12-14-14-19-2-4 2-7 5-4l6 6V12c0-3 2-5 4-5s4 2 4 5v16c0-3 2-4 4-4s4 2 4 4v2c0-3 2-4 4-4s4 2 4 4v3c0-2 2-3 3-3 3 0 4 2 4 5v10c0 7-3 13-6 17z" fill="#fff" stroke="#2a1a5e" stroke-width="3" stroke-linejoin="round"/></svg>');ut("#fx").append(e,i,s);let r=()=>{let o=t();if(!o)return;o.style.zIndex=5,o.querySelector(".free")||o.appendChild(He('<span class="free t t-thin tut">Free</span>'));let a=gn(o);Object.assign(e.style,{left:a.x-a.w*.75+"px",top:a.y-a.h*.75+"px",width:a.w*1.5+"px",height:a.h*1.5+"px"}),i.style.top=a.y-a.h*2.4+"px",s.style.left=a.x+"px",s.style.top=a.y+"px"};r(),Ke.spot=r,yc=null}function Kw(n=!0){Hr&&(Hr=null,Ke&&(Ke.spot=null),document.querySelectorAll(".tut").forEach(t=>t.remove()),document.querySelectorAll(".boost").forEach(t=>{t.style.zIndex=""}),n&&St.resume())}function Qw(){let n=document.querySelector(".hand.tap");n&&(n.classList.remove("nudge"),n.getBoundingClientRect(),n.classList.add("nudge"));let t=ut("#spotText");t&&(t.classList.remove("nudge"),t.offsetWidth,t.classList.add("nudge")),rs(12)}function Wd(){if(oe!=="play")return;oe="paused",on.x=on.y=0,pi=null,ut("#stick").classList.add("hidden");let n=zi({title:"Paused",close:!1,body:A_(),buttons:'<button class="btn btn-green t big-btn" id="resumeBtn">Resume</button><button class="btn btn-red t mid-btn" id="quitBtn">Quit Level</button>'});P_(n.el),Me(n.el.querySelector("#resumeBtn"),()=>{n.close(),oe="play",Sa=performance.now()}),Me(n.el.querySelector("#quitBtn"),()=>I_("Quit level?",`You will lose a life <img src="${re("heart")}" style="width:6cqw;vertical-align:middle" alt="">`,"Quit",()=>{n.close(),d_(),qd(null)},"Keep playing"))}var Xd=null;function DE(){if(z_)return 1;let n=St.level;if(!n.time)return 3;let t=St.timeLeft/n.time;return t>=.4?3:t>=.15?2:1}async function NE(){oe="win",on.x=on.y=0,pi=null,ut("#stick").classList.add("hidden"),document.querySelectorAll(".tut").forEach(e=>e.remove()),ki=null,ut("#arrow").classList.add("hidden"),Ze.win(),rs(60);let n=DE(),t=20+n*5;Xd={stars:n,coins:t,timeLeft:St.timeLeft,items:LE()},await Pi(500),Ew(80),await Pi(1300),ut("#hud").classList.add("hidden"),FE()}function LE(){let n=Math.min(3.2,1.5+.17*J.level),t=new Set(St.level.goals.map(r=>r.type)),e=St.stuck.filter(r=>sn[r.type].size<=n*.55),i=e.filter(r=>t.has(r.type)).sort(()=>Math.random()-.5).slice(0,10),s=e.filter(r=>!t.has(r.type)).sort(()=>Math.random()-.5).slice(0,24-i.length);return[...i,...s].sort(()=>Math.random()-.5).map(r=>({type:r.type,v:r.v}))}function FE(){let n=ut("#win"),{stars:t,coins:e}=Xd;n.innerHTML=`<div class="rays"></div><div class="ribbon t">Level Complete!</div>
    <div class="stars">${[0,1,2].map(()=>`<img src="${re("star")}" alt="">`).join("")}</div>
    <div class="bottom">
      ${St.level.time?`<div class="timeleft t-thin"><img src="${re("clock")}" alt=""><span>Time left</span><b class="t" id="tlTxt">0:00</b></div>`:""}
      <div class="reward t"><img src="${re("coin")}" alt=""><span id="rwTxt">+0</span></div>
      <button class="btn btn-green t big-btn" id="claim3"><i class="vid"></i>Claim x3</button>
      <button class="btn link t t-thin" id="claim1" style="visibility:hidden">Claim</button>
    </div>`,n.classList.remove("hidden"),n.querySelectorAll(".stars img").forEach((r,o)=>setTimeout(()=>{o<t?(r.classList.add("on"),Ze.star(o),rs(15)):r.classList.add("off")},450+o*380)),setTimeout(()=>{let r=n.querySelector("#tlTxt");r&&M_(r,0,Math.ceil(Xd.timeLeft),700,vc),M_(n.querySelector("#rwTxt"),0,e,700,o=>"+"+o)},1500),setTimeout(()=>{n.querySelector("#claim1").style.visibility="visible"},2600);let s=!1;Me(n.querySelector("#claim3"),async()=>{s||(s=!0,await Ur(),Hw(3))}),Me(n.querySelector("#claim1"),()=>{s||(s=!0,Hw(1))})}function Hw(n){let{stars:t,coins:e,items:i}=Xd,s=J.chestStars,r=J.coins;for(let[o,a]of Object.entries(St.collected))J.collected[o]=(J.collected[o]||0)+a;J.level=va+1,J.seen.tut=!0,J.coins+=e*n,J.chestStars+=t,J.totalStars+=t,J.eventStars+=t,J.levelsPlayed++,J.ballItems=J.ballItems.concat(i).slice(-70),Fe(),qd({stars:t,coins:e*n,items:i,prevChest:s,prevCoins:r})}function UE(){oe="fail",on.x=on.y=0,pi=null,ut("#stick").classList.add("hidden"),Ze.fail(),rs(40);let n=St.goals.filter(l=>l.left>0),t=n.reduce((l,h)=>l+h.left,0),e=St.goals.reduce((l,h)=>l+h.count,0),i=t<=e*.4?`So close!<br>Only <b class="red">${t}</b> left!`:`Keep rolling!<br><b class="red">${t}</b> still to go`,s=U_?200:100,r=!1,o=zi({title:"Out of time!",ribbon:"red",body:`<div class="inner"><div class="row" style="gap:2cqw"><img src="img/hero-stand.webp" style="height:30cqw" alt=""><div style="font-size:5.4cqw">${i}</div></div>
      <div class="goalprev" style="margin-top:2cqw">${n.map(l=>`<div class="gp"><img src="${Es(l.type)}" alt=""><span class="t t-thin">${l.left}</span></div>`).join("")}</div></div>`,buttons:`<button class="btn btn-green t big-btn" id="playOn">+15s <img src="${re("coin")}" style="width:8cqw" alt="">${s}</button>
      ${B_?"":'<button class="btn btn-blue t mid-btn" id="playOnAd"><i class="vid"></i>+15s Free</button>'}`,onClose:()=>{r||BE()}}),a=()=>{St.addTime(15),St.resume(),oe="play",z_=!0,Sa=performance.now()};Me(o.el.querySelector("#playOn"),()=>{ga(s)&&(U_++,r=!0,o.close(),a())}),Me(o.el.querySelector("#playOnAd"),async()=>{r=!0,B_=!0,o.close(),await Ur(),a()})}function BE(){d_();let n=J.hearts>0,t=zi({title:"Level Failed",ribbon:"red",close:!1,body:`<div class="inner"><div style="position:relative;display:inline-block"><img src="${re("heart")}" class="icon-xl" alt=""><span class="t" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11cqw;padding-bottom:3cqw">-1</span></div>
      <div>You lost a life.${n?"":'<br><b class="red">No lives left!</b>'}</div></div>`,buttons:n?'<button class="btn btn-green t big-btn" id="retryBtn">Try Again</button><button class="btn link t t-thin" id="homeBtn">Home</button>':'<button class="btn btn-green t big-btn" id="homeBtn">Home</button>'});Me(t.el.querySelector("#retryBtn"),()=>{t.close(),va>=2?V_(va):Ea(va)}),Me(t.el.querySelector("#homeBtn"),()=>{t.close(),qd(null)})}async function qd(n){if(oe="leaving",Nd(),ki=null,Kw(!1),n&&(zr=n.prevCoins),await E_(async()=>{qw(),n&&(oe="lobby-reward",Qe.setup(H_(),J.ballItems.slice(0,J.ballItems.length-n.items.length)),Qe.resize(Hi,Vi),O_(n.prevChest),ut("#coinTxt").textContent=n.prevCoins.toLocaleString("en-US"),ut("#playBtn").textContent=`Level ${J.level}`)}),!n)return;oe="lobby-reward";let t=0;Qe.addItems(n.items,()=>{t++%2===0&&Ze.pop(t%12)}),await Pi(600+n.items.length*70),Qe.cheer=1.6;let e={x:Hi/2,y:Vi*.42},i=8;await Ld(re("coin"),e,ut("#coinPill"),i,{onEach:s=>{ut("#coinTxt").textContent=Math.round(n.prevCoins+n.coins*s/i).toLocaleString("en-US"),Ze.coin()}}),zr=null,await Ld(re("star"),e,ut("#chestBar"),n.stars,{size:12,onEach:s=>{O_(n.prevChest+s),Ze.star(s-1)}}),J.chestStars>=6&&(await Pi(500),J.chestStars-=6,Fe(),await D_()),oe="lobby",Ma()}async function OE(n){let t=.016666666666666666;for(let e=0;e<n*60;e++)oe==="play"&&(St.update(t,Ww(t)),Zw(t)),e%30===29&&await Pi(0)}async function zE(n){let t=J.level,e=+(kr.get("t")||6);switch(n){case"pre":Yw();break;case"shop":case"album":case"skins":Qs(n);break;case"daily":R_();break;case"event":zd();break;case"settings":Vd();break;case"dive":Qe.dive();for(let i=0;i<e*60;i++)Qe.update(1/60);break;case"homeswap":Vd(),document.querySelector(".homeRow .seg[data-home=planet]").click(),console.log("homeswap kind="+Qe.kind+" saved="+J.settings.home),Nd();break;case"hearts":kd();break;case"chest":D_();break;case"intro":await Ea(t,{},{holdIntro:!0});break;case"play":case"win":case"fail":case"pause":case"reward":{if(Gd=!0,await Ea(t,{}),document.querySelectorAll("#modal").forEach(i=>i.querySelector("#collectB")?.click()),await OE(e),console.log("shotstats R="+St.R.toFixed(2)+" visible="+St.stuckVisible+" list="+St.stuck.length+" won="+St.won),n==="win"||n==="reward"){for(let i of St.goals)i.left=0;St.won=!0,St.active=!1,St.emit("win")}n==="fail"&&(St.timeLeft=.05),n==="pause"&&(Wd(),Gd=!1),n==="reward"&&(await Pi(3500),ut("#claim1").click());break}default:break}document.title="READY"}window.__game={get mode(){return oe},get world(){return St},get post(){return xa&&xa.level},get sound(){return uw()},save:J,startLevel:Ea,goLobby:qd};mE().catch(n=>{console.error(n);let t=ut("#loading");t.classList.remove("hidden"),t.style.opacity="1",ut("#loadTip").textContent="Something went wrong. Please reload."});
