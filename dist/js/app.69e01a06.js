(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"18c2b458","chunk-100f89f6":"aedaf0ce","chunk-2d0d763c":"0fe994cd","chunk-2d0e5e97":"07dbeb4d","chunk-42a7158f":"fa0cf194","chunk-ed2334d0":"f990b338"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-100f89f6":1,"chunk-42a7158f":1,"chunk-ed2334d0":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-100f89f6":"0bae72ac","chunk-2d0d763c":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-42a7158f":"aaf5dbf9","chunk-ed2334d0":"9ac3a301"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/client/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0439":function(e,t){},"0b38":function(e,t,n){"use strict";n("be80")},"0c01":function(e,t,n){"use strict";n("81b3")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},"1ac6":function(e,t,n){"use strict";n("2042")},"1bdd":function(e,t,n){},2:function(e,t){},2042:function(e,t,n){},3:function(e,t){},3793:function(e,t,n){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("5502"),o=n("0439"),a=n.n(o),c=n("63e0"),i=n.n(c),s=n("94d5"),u=n.n(s),l={autoLog:function(e,t){e.isLogged=t},validator:function(e,t){var n={length:t.length,hasNum:t.hasNum,hasUpper:t.hasUpper,hasLow:t.hasLow,hasSpecial:t.hasSpecial};e.isValid=n},userValidity:function(e,t){e.userIsValid=t},changeGoogleValidity:function(e,t){e.googleAccountIsValid=t},facebookLoginMutation:function(e,t){if(t)return e.facebookAccountLoggedIn=!0,void console.log("logged in with face");e.facebookAccountLoggedIn=!1}},d=n("1da1"),f=(n("96cf"),n("b0c0"),n("bc3a")),b=n.n(f),g=n("14b7"),p=n.n(g),m="https://vue-serve-test.herokuapp.com/users",h={registerUser:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("regularRegister"!==t.type){n.next=4;break}return r={userName:t.name,userAge:t.age,email:t.email,password:t.password,type:t.type},O(r,"register"),n.abrupt("return");case 4:if("googleRegister"!==t.type){n.next=8;break}return o={everything:t.everything,name:t.name,surname:t.surname,email:t.email,googleId:t.gId,idToken:t.idToken,type:t.type},O(o,"register"),n.abrupt("return");case 8:"facebookRegister"===t.type&&(a={name:t.name,surname:t.surname,email:t.email,facebookId:t.facebookId,type:t.type,idToken:t.accessToken},e.commit("facebookLoginMutation",!0),O(a,"register"));case 9:case"end":return n.stop()}}),n)})))()},isLogged:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b()({url:m+"/checkauth",method:"POST",withCredentials:!0}).then((function(t){"error"!==t.data?e.commit("autoLog",!0):e.commit("autoLog",!1)}));case 2:case"end":return t.stop()}}),t)})))()},logOut:function(){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:$.getters["isFacebookLoggedIn"]&&$.dispatch("logOutFromFacebook"),b()({url:m+"/logOut",method:"POST",withCredentials:!0}).then((function(e){"error"!==e&&$.dispatch("isLogged")}));case 2:case"end":return e.stop()}}),e)})))()},login:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O(t,"login");case 2:case"end":return e.stop()}}),e)})))()},passworValidation:function(e,t){e.commit("validator",t)},doesUserExists:function(e,t){b()({url:m+"/doesUserExists",method:"POST",data:{userName:t},withCredentials:!0}).then((function(t){e.commit("userValidity",t.data)})).catch((function(e){console.log(e)}))},logOutFromFacebook:function(e){FB.logout(),e.commit("facebookLoginMutation")},facebookUserLoggedIn:function(e,t){e.commit("facebookLoginMutation",t)}};function O(e,t){return j.apply(this,arguments)}function j(){return j=Object(d["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:p.a.sign({user:t},"CAE4B1F102AAD3669F1F0D670ECDD4E33C3489D784B8C45A6EE4FADBCDA68734E88B4B0703BCC5CB65C22BDE80F46188C336A33CE5EBA43C07E902864AAE78F9",function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return console.log(t),e.abrupt("return");case 3:if("register"!==n){e.next=7;break}return e.next=6,v(r);case 6:return e.abrupt("return");case 7:if("login"!==n){e.next=10;break}return e.next=10,y(r);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return k=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b()({url:m+"/register",method:"POST",data:{token:t},withCredentials:!0});case 2:return n=e.sent,e.next=5,JSON.stringify(n.data);case 5:if(r=e.sent,$.dispatch("isLogged"),"error"!==n.data){e.next=11;break}throw o=new Error(r||"something is wrong"),console.log(o),o;case 11:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return w=Object(d["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b()({url:m+"/login",method:"POST",data:{token:t},withCredentials:!0}).then(function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$.dispatch("isLogged");case 2:if("error"!==t.data){e.next=6;break}throw n=new Error(JSON.stringify(t.data)||"something is wrong"),console.log(n),n;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}var x={getAuth:function(e){return e.isLogged},isValid:function(e){return e.isValid},validUser:function(e){return e.userIsValid},isAccountValid:function(e){return e.googleAccountIsValid},isFacebookLoggedIn:function(e){return e.facebookAccountLoggedIn}},C={state:function(){return{isLogged:!1,isValid:{},googleAccountIsValid:!1,facebookAccountLoggedIn:!1}},mutations:l,actions:h,getters:x},P=(n("159b"),{post:function(e,t){var n=[],r=[];t.forEach((function(e){var t={author:{name:e.user.userName},body:{title:e.body.title,message:e.body.message},_id:e._id,date:e.createdAt},o={author:{name:e.user.userName},body:{titleMethod:function(){var t=e.body.title;return t.length>100?t.substr(0,99)+"...":t},messageMethod:function(){var t=e.body.message;return t.length>400?t.substr(0,350)+"...":t}},_id:e._id,date:e.createdAt};n.push(t),r.push(o)})),e.posts=n,e.previewPosts=r},currentPost:function(e,t){var n=[{author:{name:t.user.userName},body:{title:t.body.title,message:t.body.message},_id:t._id}];e.currentPost=n},updateHomePage:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r={author:{name:t.author.name},body:{title:t.body.title,message:t.body.message},_id:t._id,date:t.createdAt},o={author:{name:t.author.userName},body:{titleMethod:function(){var e=t.body.title;return e.length>100?e.substr(0,99)+"...":e},messageMethod:function(){var e=t.body.message;return e.length>400?e.substr(0,350)+"...":e}},_id:t._id,date:t.createdAt},n.next=4,e.posts.unshift(r);case 4:return n.next=6,e.previewPosts.unshift(o);case 6:case"end":return n.stop()}}),n)})))()},clearCache:function(e){e.currentPost=[]}}),_="https://vue-serve-test.herokuapp.com/post",I={getPosts:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b()({url:_+"/getposts",method:"GET",withCredentials:!0}).then((function(t){e.commit("post",t.data)})).catch((function(e){console.log(e)}));case 2:case"end":return t.stop()}}),t)})))()},getpost:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=6;break}return localStorage.setItem("postId",t),n.next=4,b()({url:_+"/getpost",method:"POST",data:{postId:t},withCredentials:!0}).then((function(t){e.commit("currentPost",t.data)})).catch((function(e){console.log(e)}));case 4:n.next=9;break;case 6:if(!localStorage.getItem("postId")){n.next=9;break}return n.next=9,b()({url:_+"/getpost",method:"POST",data:{postId:localStorage.getItem("postId")}}).then((function(t){e.commit("currentPost",t.data)})).catch((function(e){console.log(e)}));case 9:case"end":return n.stop()}}),n)})))()},clearPost:function(e){e.commit("clearCache")},addPost:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:b()({url:_+"/",method:"POST",data:{title:t.title,message:t.message,testStatus:!1},withCredentials:!0}).then((function(){}));case 1:case"end":return e.stop()}}),e)})))()},homePageUpdate:function(e,t){"regular update"!==t?e.commit("updateHomePage",t):$.dispatch("getPosts")}},L={getThis:function(e){return e.posts},getPost:function(e){return e.currentPost},getPreview:function(e){return e.previewPosts}},S={state:function(){return{previewPosts:[],posts:[],currentPost:[]}},mutations:P,actions:I,getters:L},R=n("b85c"),B={getComments:function(e,t){var n,r=localStorage.getItem("postId"),o=[],a=Object(R["a"])(t);try{for(a.s();!(n=a.n()).done;){var c=n.value,i={body:{username:c.userName,comment:c.comment,commentId:c._id},postId:r};o.push(i)}}catch(s){a.e(s)}finally{a.f()}e.comments=o},updateComment:function(e,t){var n={body:{username:t.body.username,comment:t.body.message,commentId:t.body._id},postId:t.postId};e.comments.push(n)},setPost:function(e,t){e.currentPostId=t}},A=n("a18c"),F="https://vue-serve-test.herokuapp.com/comment",E={clearCrumbs:function(e){return Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("clearCache");case 1:case"end":return t.stop()}}),t)})))()},getComments:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t){n.next=6;break}return localStorage.setItem("postId",t),n.next=4,b()({url:F+"/getcomments",method:"POST",data:{postId:t}}).then((function(t){if("body_error"===t.data&&"error"===t.data){var n=new Error(t.data||"something went wrong");throw console.log(n),n}e.commit("getComments",t.data)})).catch((function(e){console.log(e)}));case 4:n.next=13;break;case 6:if(!localStorage.getItem("postId")){n.next=12;break}return r=localStorage.getItem("postId"),n.next=10,b()({url:F+"/getcomments",method:"POST",data:{postId:r}}).then((function(t){if("body_error"===t.data){console.log("error handling");var n=new Error(t||"something went wrong");throw n}e.commit("getComments",t.data)})).catch((function(e){console.log(JSON.stringify(e))}));case 10:n.next=13;break;case 12:A["a"].push("/");case 13:case"end":return n.stop()}}),n)})))()},saveComment:function(e,t){return Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,b()({url:F+"/",method:"POST",data:{Comment:t,postId:localStorage.getItem("postId")},withCredentials:!0});case 2:case"end":return e.stop()}}),e)})))()},commentUpdate:function(e,t){e.commit("updateComment",t)},setPost:function(e,t){e.commit("setPost",t)}},T={getComments:function(e){return e.comments},getCurrentPostId:function(e){return e.currentPostId}},N={state:function(){return{comments:[],currentPostId:null}},mutations:B,actions:E,getters:T},M=Object(r["a"])({state:{},mutations:a.a,actions:i.a,getters:u.a,modules:{testMode:C,postMode:S,commentMode:N}}),$=t["a"]=M},"4fc8":function(e,t,n){"use strict";n("b0c0"),n("c7cd");var r=n("7a23"),o=Object(r["O"])("data-v-ddcd774a");Object(r["w"])("data-v-ddcd774a");var a={key:0,open:""},c=Object(r["k"])("h2",null,"LOGIN",-1),i={key:0,class:"message"},s={class:"contain-input"},u={key:0},l=Object(r["k"])("label",{for:"username"},"Username:",-1),d=Object(r["k"])("label",{for:"password"},"Password:",-1),f={class:"contain"},b=Object(r["j"])("Login"),g={class:"socialLogin"},p={key:0},m=Object(r["j"])("Close");Object(r["u"])();var h=o((function(e,t,n,h,O,j){var v=Object(r["C"])("base-button");return Object(r["t"])(),Object(r["h"])(r["c"],{to:"body"},[n.show?(Object(r["t"])(),Object(r["h"])("div",{key:0,onClick:t[1]||(t[1]=function(){return j.tryClose&&j.tryClose.apply(j,arguments)}),class:"backdrop"})):Object(r["i"])("",!0),Object(r["k"])(r["d"],{name:"dialogTransitation"},{default:o((function(){return[n.show?(Object(r["t"])(),Object(r["h"])("dialog",a,[Object(r["k"])("header",null,[c,Object(r["B"])(e.$slots,"header",{},(function(){return[Object(r["k"])("h2",null,Object(r["F"])(n.title),1)]}),{},!0)]),Object(r["k"])("section",null,[Object(r["B"])(e.$slots,"default",{},(function(){return[""!==O.finalLogMessage?(Object(r["t"])(),Object(r["h"])("p",i,Object(r["F"])(O.finalLogMessage),1)):Object(r["i"])("",!0),Object(r["k"])("form",{onSubmit:t[6]||(t[6]=Object(r["N"])((function(){}),["prevent"]))},[Object(r["k"])("div",s,[Object(r["k"])("div",null,[h.errorHandle?(Object(r["t"])(),Object(r["h"])("p",u," username and password cannot be empty ")):Object(r["i"])("",!0),l,Object(r["L"])(Object(r["k"])("input",{type:"text",name:"userName",placeholder:"username",autocomplete:"username","onUpdate:modelValue":t[2]||(t[2]=function(e){return h.user.name=e}),class:"inputText"},null,512),[[r["H"],h.user.name,void 0,{trim:!0}]])]),Object(r["k"])("div",null,[d,Object(r["L"])(Object(r["k"])("input",{type:"password",autocomplete:"current-password",name:"password",placeholder:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return h.user.password=e}),class:"inputText"},null,512),[[r["H"],h.user.password,void 0,{trim:!0}]])])]),Object(r["k"])("div",f,[Object(r["k"])(v,{onClick:h.login,class:"log-Button"},{default:o((function(){return[b]})),_:1},8,["onClick"]),Object(r["k"])("div",g,[Object(r["k"])("img",{class:"googleLogin",src:"https://icon-library.com/images/google-login-icon/google-login-icon-24.jpg",onClick:t[4]||(t[4]=function(){return j.saveUserWithGoogle&&j.saveUserWithGoogle.apply(j,arguments)}),alt:""}),Object(r["k"])("img",{class:"googleLogin",src:"https://img1.pnghut.com/18/25/22/10QabnQ6pe/text-rectangle-sign-facebook-like-button-inc.jpg",onClick:t[5]||(t[5]=function(){return j.loginWithFacebook&&j.loginWithFacebook.apply(j,arguments)}),alt:""})])])],32)]}),{},!0)]),n.fixed?Object(r["i"])("",!0):(Object(r["t"])(),Object(r["h"])("menu",p,[Object(r["B"])(e.$slots,"actions",{},(function(){return[Object(r["k"])(v,{onClick:j.tryClose},{default:o((function(){return[m]})),_:1},8,["onClick"])]}),{},!0)]))])):Object(r["i"])("",!0)]})),_:3})])})),O=n("1da1"),j=(n("96cf"),n("5502")),v=n("4360"),k={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1},message:{required:!1,default:null}},setup:function(e,t){var n=t.emit,o=Object(j["b"])(),a=Object(r["z"])({name:"",password:""}),c=Object(r["z"])(!1),i=function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""===a.value.name||""===a.value.password){e.next=6;break}return c.value=!1,e.next=4,o.dispatch("login",{userName:a.value.name,password:a.value.password}).then((function(){n("close")})).catch((function(){}));case 4:e.next=8;break;case 6:return c.value=!0,e.abrupt("return");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{user:a,login:i,errorHandle:c}},data:function(){return{finalLogMessage:""}},emits:["close"],methods:{getLogMessage:function(e){this.finalLogMessage=e},tryClose:function(){this.fixed||(this.finalLogMessage="",this.$emit("close"))},saveUserWithGoogle:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$gAuth.signIn();case 3:if(n=t.sent,n){t.next=6;break}return t.abrupt("return",null);case 6:r={everything:n.getBasicProfile(),name:n.getBasicProfile().getGivenName(),surname:n.getBasicProfile().getFamilyName(),gId:n.getBasicProfile().getId(),email:n.getBasicProfile().getEmail(),idToken:n.getAuthResponse().id_token,type:"googleRegister"},v["a"].dispatch("registerUser",r).then((function(){e.$emit("close")})),t.next=14;break;case 10:return t.prev=10,t.t0=t["catch"](0),console.error(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},loginWithFacebook:function(){var e=this;FB.login((function(t){if(t.authResponse)return console.log("this is response : ".concat(JSON.stringify(t))),void FB.api("/me",{fields:"first_name, last_name, email"},(function(n){console.log("this is user ".concat(JSON.stringify(n)));var r={name:n.first_name,surname:n.last_name,email:n.email,facebookId:n.id,accessToken:t.authResponse.accessToken,type:"facebookRegister"};v["a"].dispatch("registerUser",r).then((function(){e.$emit("close")}))}));console.log("login error")}),{scope:"public_profile,email",enable_profile_selecto:!0})}},watch:{message:{deep:!0,handler:function(e){this.getLogMessage(e)}}}};n("bb92");k.render=h,k.__scopeId="data-v-ddcd774a";t["a"]=k},5:function(e,t){},"533b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("faa1"),o=n.n(r),a=n("4360"),c=new o.a;window.fbAsyncInit=function(){FB.init({appId:"189630599820055",cookies:!0,autoLogAppEvents:!0,xfbml:!0,version:"v11.0"}),c.emit("fbLoad")},c.on("fbLoad",(function(){FB.getLoginStatus((function(e){"connected"===e.status&&FB.api("/me",(function(e){a["a"].dispatch("facebookUserLoggedIn",e)}))}))}));var i=n("7a23");function s(e,t,n,r,o,a){var c=Object(i["C"])("the-header"),s=Object(i["C"])("router-view");return Object(i["t"])(),Object(i["h"])(i["a"],null,[Object(i["k"])(c),Object(i["k"])(s,null,{default:Object(i["K"])((function(e){var t=e.Component;return[(Object(i["t"])(),Object(i["h"])(i["b"],null,[(Object(i["t"])(),Object(i["h"])(Object(i["D"])(t)))],1024))]})),_:1})],64)}var u=Object(i["O"])("data-v-6ea67527");Object(i["w"])("data-v-6ea67527");var l={class:"navi"},d=Object(i["j"])("Home Page"),f={key:0},b=Object(i["j"])("About"),g=Object(i["j"])("Register"),p={class:"nav-mobile"},m=Object(i["j"])("+ add post"),h=Object(i["j"])("+ add post "),O=Object(i["j"])("Login"),j={key:0,id:"hoverProfile"},v={key:0,class:"navLoc"},k={class:"sidenav"},y=Object(i["j"])("Register"),w=Object(i["j"])("About");Object(i["u"])();var x=u((function(e,t,n,r,o,a){var c=Object(i["C"])("base-login"),s=Object(i["C"])("base-button");return Object(i["t"])(),Object(i["h"])("section",null,[Object(i["k"])(c,{message:o.finalLogMessage,show:o.status,onClose:a.login},null,8,["message","show","onClose"]),Object(i["k"])("header",null,[Object(i["k"])("nav",l,[Object(i["k"])("h1",null,[Object(i["k"])(s,{link:"",to:"/"},{default:u((function(){return[d]})),_:1})]),o.hamburgerStatus?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])("ul",f,[Object(i["k"])("li",null,[Object(i["k"])(s,{link:"",to:"/about"},{default:u((function(){return[b]})),_:1})]),Object(i["k"])("li",null,[a.isLogged?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])(s,{key:0,link:"",to:"/register"},{default:u((function(){return[g]})),_:1}))])])),Object(i["k"])("div",p,[a.isLogged?(Object(i["t"])(),Object(i["h"])(s,{key:0,link:"",to:"/posting"},{default:u((function(){return[m]})),_:1})):Object(i["i"])("",!0),a.isLogged?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])(s,{key:1,onClick:t[1]||(t[1]=function(t){return a.login(e.logMessage="please login to post")})},{default:u((function(){return[h]})),_:1})),Object(i["k"])("div",{class:["profile",{image:a.isLogged}]},[a.isLogged?(Object(i["t"])(),Object(i["h"])("img",{key:1,onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)}),onMouseover:t[3]||(t[3]=function(){return a.profileHover&&a.profileHover.apply(a,arguments)}),onMouseout:t[4]||(t[4]=function(){return a.profileUnHover&&a.profileUnHover.apply(a,arguments)}),src:"https://i.pinimg.com/474x/5f/3b/48/5f3b486198cb4e1db5729207a666c750.jpg",alt:""},null,32)):(Object(i["t"])(),Object(i["h"])(s,{key:0,navBar:"",onClick:a.login},{default:u((function(){return[O]})),_:1},8,["onClick"])),Object(i["k"])(i["d"],{name:"profile"},{default:u((function(){return[o.hoveringProfile?(Object(i["t"])(),Object(i["h"])("div",j)):Object(i["i"])("",!0)]})),_:1})],2),Object(i["k"])("div",{class:"navOpener",onClick:t[5]||(t[5]=function(){return a.changeNav&&a.changeNav.apply(a,arguments)})},[Object(i["k"])("div",{class:["bar1",{openNav:o.hamburgerStatus}]},null,2),Object(i["k"])("div",{class:["bar2",{openNav:o.hamburgerStatus}]},null,2),Object(i["k"])("div",{class:["bar3",{openNav:o.hamburgerStatus}]},null,2)])])]),Object(i["k"])(i["d"],{name:"stir",onBeforeEnter:a.beforeEnter},{default:u((function(){return[o.hamburgerStatus?(Object(i["t"])(),Object(i["h"])("div",v,[Object(i["k"])("ul",k,[Object(i["k"])("li",null,[a.isLogged?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])(s,{key:0,link:"",to:"/register"},{default:u((function(){return[y]})),_:1}))]),Object(i["k"])("li",null,[Object(i["k"])(s,{link:"",to:"/about"},{default:u((function(){return[w]})),_:1})])])])):Object(i["i"])("",!0)]})),_:1},8,["onBeforeEnter"])])])})),C={data:function(){return{status:!1,hamburgerStatus:!1,postingStat:!1,finalLogMessage:null,hoveringProfile:!0}},computed:{isLogged:function(){return this.$store.getters.getAuth}},methods:{beforeEnter:function(){},login:function(e){"please login to post"!=e&&"unidentified error contact support"!=e||(this.finalLogMessage=e),this.status=!this.status},posting:function(){this.postingStat=!this.postingStat},logout:function(){this.$store.dispatch("logOut")},changeNav:function(){this.hamburgerStatus=!this.hamburgerStatus},profileHover:function(){this.hoveringProfile=!0},profileUnHover:function(){}}};n("0c01");C.render=x,C.__scopeId="data-v-6ea67527";var P=C,_={components:{TheHeader:P},setup:function(){},created:function(){this.checkAuth()},methods:{checkAuth:function(){this.$store.dispatch("isLogged"),this.$store.dispatch("getPosts")}}};n("bc125");_.render=s;var I=_,L=n("a18c"),S=(n("9911"),Object(i["O"])("data-v-10976d69"));Object(i["w"])("data-v-10976d69");var R={key:0,class:"navigate"};Object(i["u"])();var B=S((function(e,t,n,r,o,a){var c=Object(i["C"])("router-link");return n.navBar?(Object(i["t"])(),Object(i["h"])("button",R,[Object(i["B"])(e.$slots,"default",{},void 0,!0)])):n.link?n.navBar?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])(c,{key:2,to:n.to,class:n.mode},{default:S((function(){return[Object(i["B"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to","class"])):(Object(i["t"])(),Object(i["h"])("button",{key:1,class:n.mode},[Object(i["B"])(e.$slots,"default",{},void 0,!0)],2))})),A={props:{mode:{type:String,required:!1,default:null},link:{type:Boolean,required:!1,default:!1},to:{type:String,required:!1,default:"/"},navBar:{type:Boolean,required:!1,default:!1}}};n("8b31");A.render=B,A.__scopeId="data-v-10976d69";var F=A,E=Object(i["O"])("data-v-035e72bb"),T=E((function(e,t,n,r,o,a){return Object(i["t"])(),Object(i["h"])("div",{class:["card",n.form]},[Object(i["B"])(e.$slots,"default",{},void 0,!0)],2)})),N={props:{form:{type:String,reqired:!1,default:null}}};n("1ac6");N.render=T,N.__scopeId="data-v-035e72bb";var M=N,$=n("4fc8"),U=Object(i["O"])("data-v-d317d7c2"),H=U((function(e,t,n,r,o,a){var c=Object(i["C"])("router-link");return Object(i["t"])(),Object(i["h"])(c,{to:n.to,class:"link"},{default:U((function(){return[Object(i["B"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["to"])})),q={props:{to:{type:String,required:!1,default:"/"}}};n("0b38");q.render=H,q.__scopeId="data-v-d317d7c2";var V=q,D=(n("b0c0"),Object(i["O"])("data-v-31897795"));Object(i["w"])("data-v-31897795");var J={key:0,class:"container"},G={class:"user"},W={class:"title"},z={class:"message"};Object(i["u"])();var K=D((function(e,t,n,r,o,a){return o.isLoading?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])("section",J,[(Object(i["t"])(!0),Object(i["h"])(i["a"],null,Object(i["A"])(a.post,(function(e){return Object(i["t"])(),Object(i["h"])("div",{class:"posts",key:e},[Object(i["k"])("div",G,"--"+Object(i["F"])(e.author.name),1),Object(i["k"])("div",W,[Object(i["k"])("h3",null,Object(i["F"])(e.body.title),1)]),Object(i["k"])("div",z,[Object(i["k"])("p",null,Object(i["F"])(e.body.message),1)])])})),128))]))})),Q=n("1da1"),X=(n("96cf"),{emits:["doneLoading"],data:function(){return{isLoading:!0}},computed:{post:function(){return this.$store.getters["getPost"]},postId:function(){var e=this.$store.getters["getCurrentPostId"];return e}},methods:{getPost:function(){var e=this;return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("getpost",e.postId).then((function(){e.isLoading=!1,e.$emit("doneLoading")}));case 2:case"end":return t.stop()}}),t)})))()}},activated:function(){var e=this;return Object(Q["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPost();case 2:case"end":return t.stop()}}),t)})))()}});n("d8ff");X.render=K,X.__scopeId="data-v-31897795";var Y=X,Z={class:"lds-hourglass"};function ee(e,t){return Object(i["t"])(),Object(i["h"])("div",Z)}n("e7d2");const te={};te.render=ee;var ne=te,re=(n("c7cd"),Object(i["O"])("data-v-25fa3d06"));Object(i["w"])("data-v-25fa3d06");var oe={key:0,open:""},ae={key:0},ce=Object(i["j"])("Close");Object(i["u"])();var ie=re((function(e,t,n,r,o,a){var c=Object(i["C"])("base-button");return Object(i["t"])(),Object(i["h"])(i["c"],{to:"body"},[n.show?(Object(i["t"])(),Object(i["h"])("div",{key:0,onClick:t[1]||(t[1]=function(){return a.tryClose&&a.tryClose.apply(a,arguments)}),class:"backdrop"})):Object(i["i"])("",!0),Object(i["k"])(i["d"],{name:"dialog",class:{spin:n.spinner}},{default:re((function(){return[n.show?(Object(i["t"])(),Object(i["h"])("dialog",oe,[Object(i["k"])("header",null,[Object(i["B"])(e.$slots,"header",{},(function(){return[Object(i["k"])("h2",null,Object(i["F"])(n.title),1)]}),{},!0)]),Object(i["k"])("section",null,[Object(i["B"])(e.$slots,"default",{},void 0,!0)]),n.fixed?Object(i["i"])("",!0):(Object(i["t"])(),Object(i["h"])("menu",ae,[Object(i["B"])(e.$slots,"actions",{},(function(){return[Object(i["k"])(c,{onClick:a.tryClose},{default:re((function(){return[ce]})),_:1},8,["onClick"])]}),{},!0)]))])):Object(i["i"])("",!0)]})),_:3},8,["class"])])})),se={props:{show:{type:Boolean,required:!0},title:{type:String,required:!1},fixed:{type:Boolean,required:!1,default:!1},spinner:{type:Boolean,required:!1,default:!1}},emits:["close"],methods:{tryClose:function(){this.fixed||this.$emit("close")}}};n("a94b");se.render=ie,se.__scopeId="data-v-25fa3d06";var ue=se,le=n("7c91"),de=Object(i["g"])(I),fe={clientId:"317778007455-f8rdf2fusbfn4fcjef0ungb09k7a7bav.apps.googleusercontent.com",scope:"profile",prompt:"select_account",fetch_basic_profile:!0};de.component("base-button",F),de.component("base-card",M),de.component("base-login",$["a"]),de.component("base-link",V),de.component("base-post",Y),de.component("base-spinner",ne),de.component("base-dialog",ue),de.use(a["a"]),de.use(le["a"],fe),de.use(L["a"]),de.mount("#app")},6:function(e,t){},"63e0":function(e,t){},"6c23":function(e,t,n){"use strict";var r=n("8e27"),o=n("4360"),a="https://vue-serve-test.herokuapp.com",c=Object(r["io"])(a,{transports:["websocket","polling","flashsocket"]});c.on("updateHome",(function(){o["a"].dispatch("getPosts")})),c.on("updatePost",(function(e){e.postId===localStorage.getItem("postId")&&o["a"].dispatch("commentUpdate",e)})),c.on("facebookLogOut",(function(){o["a"].dispatch("logOutFromFacebook")})),c.on("updateHome",(function(e){o["a"].dispatch("homePageUpdate",e)}))},7:function(e,t){},8:function(e,t){},"81b3":function(e,t,n){},"84a9":function(e,t,n){},8522:function(e,t,n){},"8b31":function(e,t,n){"use strict";n("533b")},9:function(e,t){},"94d5":function(e,t){},a18c:function(e,t,n){"use strict";var r=n("1da1"),o=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),a=(n("b0c0"),n("7a23")),c=Object(a["O"])("data-v-30e768af");Object(a["w"])("data-v-30e768af");var i={key:0,class:"container"},s={class:"user"},u={class:"title"},l={class:"text"},d={class:"message"};Object(a["u"])();var f=c((function(e,t,n,r,o,f){var b=Object(a["C"])("router-link"),g=Object(a["C"])("base-card");return Object(a["t"])(),Object(a["h"])(g,{form:"homeForm"},{default:c((function(){return[null!==f.getThis?(Object(a["t"])(),Object(a["h"])("section",i,[Object(a["k"])(a["e"],{tag:"postMagick",name:"posts"},{default:c((function(){return[(Object(a["t"])(!0),Object(a["h"])(a["a"],null,Object(a["A"])(f.getPreview,(function(e){return Object(a["t"])(),Object(a["h"])("div",{class:"posts",key:e._id},[Object(a["k"])("div",s,"--"+Object(a["F"])(e.author.name),1),Object(a["k"])("div",u,[Object(a["k"])(b,{to:{name:"comment",params:{postId:e._id}}},{default:c((function(){return[Object(a["j"])(Object(a["F"])(e.body.titleMethod()),1)]})),_:2},1032,["to"])]),Object(a["k"])("div",l,[Object(a["k"])("div",d,Object(a["F"])(e.body.messageMethod()),1)])])})),128))]})),_:1})])):Object(a["i"])("",!0)]})),_:1})})),b=(n("6c23"),{computed:{getThis:function(){var e=this.$store.getters["getThis"];return e},getPreview:function(){return this.$store.getters["getPreview"]},listing:function(){if(void 0!=this.getPreview){var e=JSON.parse(JSON.stringify(this.getPreview));return e.sort()}return 2}}});n("ebd3"),n("b8fa");b.render=f,b.__scopeId="data-v-30e768af";var g=b,p=n("4360"),m=[{path:"/",name:"Home",component:g},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/register",name:"regUser",component:function(){return n.e("chunk-100f89f6").then(n.bind(null,"1e7f"))}},{path:"/secret",name:"secret",component:function(){return n.e("chunk-2d0d763c").then(n.bind(null,"7739"))},beforeEnter:function(e,t,n){p["a"].dispatch("isLogged").then((function(){p["a"].getters.getAuth?n():n({path:"/"})}))}},{path:"/commenttest",name:"comment",component:function(){return n.e("chunk-ed2334d0").then(n.bind(null,"7c1c"))},props:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.params.postId,e.next=3,p["a"].dispatch("setPost",n);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},{path:"/posting",name:"AddPost",component:function(){return n.e("chunk-42a7158f").then(n.bind(null,"ef2e"))}},{path:"/:pathMatch(.*)*",name:"notFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],h=Object(o["a"])({history:Object(o["b"])("/client/"),routes:m});t["a"]=h},a20c:function(e,t,n){},a94b:function(e,t,n){"use strict";n("d405")},b8fa:function(e,t,n){"use strict";n("3793")},bb92:function(e,t,n){"use strict";n("84a9")},bc125:function(e,t,n){"use strict";n("1bdd")},be80:function(e,t,n){},d405:function(e,t,n){},d8ff:function(e,t,n){"use strict";n("a20c")},e1a9:function(e,t,n){},e7d2:function(e,t,n){"use strict";n("8522")},ebd3:function(e,t,n){"use strict";n("e1a9")}});
//# sourceMappingURL=app.69e01a06.js.map