(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2cf84ce9"],{4601:function(t,e,i){(e=i("24fb")(!1)).push([t.i,".tip[data-v-73aa69b2]{color:#a6a6a6}.svgIcon[data-v-73aa69b2]{display:block}.flex[data-v-73aa69b2]{display:-webkit-box;display:-webkit-flex;display:flex}.flexc[data-v-73aa69b2]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexb[data-v-73aa69b2],.flexc[data-v-73aa69b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexb[data-v-73aa69b2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flexa[data-v-73aa69b2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header_link[data-v-73aa69b2]{cursor:pointer;text-align:center;line-height:.66667rem;position:absolute;right:0;top:.22667rem;width:2.66667rem;height:.66667rem;background:#101529;border-radius:.13333rem;font-size:.24rem;font-family:Fredoka One;font-weight:400;color:#fff}.header_link[data-v-73aa69b2]:hover{background:#451a1a}",""]),t.exports=e},"4d00":function(t,e,i){"use strict";i("b926")},7156:function(t,e,i){var o=i("1626"),n=i("861d"),a=i("d2bb");t.exports=function(t,e,i){var r,s;return a&&o(r=e.constructor)&&r!==i&&n(s=r.prototype)&&s!==i.prototype&&a(t,s),t}},a9e3:function(t,e,i){"use strict";var o=i("83ab"),n=i("da84"),a=i("e330"),r=i("94ca"),s=i("6eeb"),c=i("1a2d"),l=i("7156"),p=i("3a9b"),d=i("d9b5"),u=i("c04e"),h=i("d039"),f=i("241c").f,m=i("06cf").f,g=i("9bf2").f,x=i("408a"),w=i("58a8").trim,v=(i="Number",n[i]),b=v.prototype,k=n.TypeError,y=a("".slice),F=a("".charCodeAt),S=function(t){var e,i,o,n,a,r,s,c=u(t,"number");if(d(c))throw k("Cannot convert a Symbol value to a number");if("string"==typeof c&&2<c.length)if(c=w(c),43===(e=F(c,0))||45===e){if(88===(t=F(c,2))||120===t)return NaN}else if(48===e){switch(F(c,1)){case 66:case 98:i=2,o=49;break;case 79:case 111:i=8,o=55;break;default:return+c}for(a=(n=y(c,2)).length,r=0;r<a;r++)if((s=F(n,r))<48||o<s)return NaN;return parseInt(n,i)}return+c};if(r(i,!v(" 0o1")||!v("0b1")||v("+0x1"))){for(var _,O=function(t){t=arguments.length<1?0:v(function(t){return t=u(t,"number"),"bigint"==typeof t?t:S(t)}(t));var e=this;return p(b,e)&&h((function(){x(e)}))?l(Object(t),e,O):t},D=o?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;D.length>C;C++)c(v,_=D[C])&&!c(O,_)&&g(O,_,m(v,_));s(n,i,(O.prototype=b).constructor=O)}},b926:function(t,e,i){var o=i("4601");(o="string"==typeof(o=o.__esModule?o.default:o)?[[t.i,o,""]]:o).locals&&(t.exports=o.locals),(0,i("499e").default)("70aed5e8",o,!0,{sourceMap:!1,shadowMode:!1})},dc0fd:function(t,e,i){"use strict";i.r(e);var o=i("c964"),n=i("f3f3"),a=(i("b680"),i("a9e3"),i("96cf"),i("5880")),r=i("99e5"),s=i("3a48"),c=i("901e"),l=i.n(c),p=i("1576");a={name:"Index",components:{},data:function(){return{icon_bg1:s.n,icon_bg2:s.o,icon_logo:s.p,discord:s.f,gitbook:s.h,github:s.j,medium:s.t,reddit:s.v,telegram:s.y,twitter:s.z,icon_331:s.l,icon_332:s.m,address:"",isDeposit:!0,unStakeAmount:"",showMask:!1,showUnStakeDialog:!1,showStakeDialog:!1,loadedFailDialog:!1,stakeAmount:"",pid:0,lpBalance:0,stakedWantTokenOld:0,stakedWantToken:0,isOpenCroEth:!1,allowanceLpCroEth:0,chainId:0}},computed:Object(n.a)(Object(n.a)({},Object(a.mapState)({isMobile:function(t){return t.sys.isMobile}})),{},{inviteLink:function(){return"https://"+window.location.host+"?ref="+this.myAddress},myAddress:function(){return Object(p.j)()}}),mounted:function(){this.address=Object(p.j)(),this.getChainId()},methods:{getChainId:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.o)();case 2:t.chainId=e.sent;case 3:case"end":return e.stop()}}),e)})))()},onTabClick:function(t){1==(this.tab=t)?this.$router.push("/dashboard"):2==t?this.$router.push("/staking"):3==t?this.$router.push("/three"):4==t?this.$router.push("/bond"):5==t&&this.$router.push("/presales")},goLink:function(t){window.open(t)},depositClick:function(t){this.isDeposit=t},open:function(t){t.isOpen=!t.isOpen},maxValue:function(){this.showStakeDialog&&(this.stakeAmount=this.fromWei(this.currentStakeInfo.stakeInfo.available)),this.showUnStakeDialog&&(this.unStakeAmount=this.fromWei(this.currentStakeInfo.stakeInfo.staked))},closeIVDoIv:function(){this.showInvite=!1},onCopy:function(){this.$message.success("Done！")},onError:function(){this.$message.error("Copy failed!")},showInvCodeDialog:function(){this.userInfo&&void 0!==this.userInfo.userTotalInvest&&0<this.userInfo.userTotalInvest?this.showInvite=!0:this.$message.warning(this.$t("sys.txt20"))},showInvestDialog:function(){this.$emit("showInvest",{})},showType:function(t){this.$emit("showType",t)},openClickCorEth:function(){this.isOpenCroEth=!this.isOpenCroEth},initCollect:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.r)();case 2:return e.next=4,Object(p.o)();case 4:if(t.chainId=e.sent,25!=t.chainId)return t.$message.error("Chain error "),e.abrupt("return");e.next=8;break;case 8:i=t,setTimeout((function(){i.address=Object(p.j)()}),3e3);case 10:case"end":return e.stop()}}),e)})))()},approveLp:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},stakeLP:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showMask=!0,e.prev=1,t.stakeAmount=1e-6,e.next=5,Object(p.farmDeposit)(t.pid,Object(p.y)(t.stakeAmount));case 5:(i=e.sent).status?alert("ok"):t.$message.error(i.error.message);case 7:return e.prev=7,t.showMask=!1,t.showStakeDialog=!1,e.finish(7);case 11:case"end":return e.stop()}}),e,null,[[1,,7,11]])})))()},getAllowanceLp:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getAllowanceLp)();case 2:(i=e.sent).status&&(t.allowanceLpCroEth=Number(Object(p.i)(i.data)).toFixed(18));case 4:case"end":return e.stop()}}),e)})))()},getBalance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getBalanceOfLp)();case 2:(i=e.sent).status&&(t.lpBalance=Number(Object(p.i)(i.data)).toFixed(18));case 4:case"end":return e.stop()}}),e)})))()},getStakedWantTokens:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getStakedWantTokens)(t.pid);case 2:(i=e.sent).status&&(t.stakedWantToken=Number(Object(p.i)(i.data)).toFixed(18));case 4:case"end":return e.stop()}}),e)})))()},getUserInfo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.getUserInfo)(t.pid);case 2:(i=e.sent).status&&(t.stakedWantTokenOld=Number(Object(p.i)(i.data)).toFixed(2));case 4:case"end":return e.stop()}}),e)})))()},unStakeLP:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.showMask=!0,e.prev=1,t.unStakeAmount=1e-6,e.next=5,Object(p.farmWithdraw)(t.pid,Object(p.y)(t.unStakeAmount));case 5:(i=e.sent).status?alert("ok"):t.$message.error(i.error.message);case 7:return e.prev=7,t.showMask=!1,t.showUnStakeDialog=!1,e.finish(7);case 11:case"end":return e.stop()}}),e,null,[[1,,7,11]])})))()},fromWei:function(t){return r.utils.fromWei(new l.a(t).toFixed())},fromWeiForShow:function(t){return Number(r.utils.fromWei(new l.a(t).toFixed())).toFixed(4)}}},i("4d00"),i=i("2877"),a=Object(i.a)(a,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{staticStyle:{width:"100%"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isMobile,expression:"!isMobile"}],staticStyle:{"padding-bottom":"1rem",width:"100%","min-height":"1680px",background:"#FFEFDD"}},[e("div",{staticStyle:{width:"100%",height:"84px",display:"flex",background:"#F94F01"}},[e("div",{staticStyle:{width:"1680px",position:"relative",height:"84px",display:"flex",background:"#F94F01",margin:"0px auto"}},[e("div",{staticStyle:{position:"absolute","font-size":"18px","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF",left:"0px",top:"36px"},on:{click:function(e){return t.onTabClick(1)}}},[t._v(t._s("Dashboard"))]),e("div",{staticStyle:{position:"absolute","font-size":"18px","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF",left:"134px",top:"36px"},on:{click:function(e){return t.onTabClick(2)}}},[t._v(t._s("Stake"))]),e("div",{staticStyle:{position:"absolute","font-size":"18px","font-family":"Fredoka One","font-weight":"400","text-decoration":"underline",color:"#FFFFFF",left:"219px",top:"36px"},on:{click:function(e){return t.onTabClick(3)}}},[t._v(t._s("3,3"))]),e("div",{staticStyle:{position:"absolute","font-size":"18px","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF",left:"280px",top:"36px"},on:{click:function(e){return t.onTabClick(4)}}},[t._v(t._s("Bond"))]),e("div",{staticStyle:{position:"absolute","font-size":"18px","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF",left:"359px",top:"36px"},on:{click:function(e){return t.onTabClick(5)}}},[t._v(t._s("PreSales"))]),e("img",{staticStyle:{width:"94px",height:"84px",position:"absolute",left:"720px"},attrs:{src:t.icon_logo,alt:""}}),e("div",{directives:[{name:"show",rawName:"v-show",value:null==this.address||this.address.length<8||"0x0000000000000000000000000000000000000000"==this.address||25!=t.chainId,expression:"this.address == null || this.address.length < 8 ||  this.address =='0x0000000000000000000000000000000000000000'||chainId!=25"}],staticClass:"header_link",on:{click:t.initCollect}},[t._v(t._s("Connect Wallet"))]),e("div",{directives:[{name:"show",rawName:"v-show",value:null!=this.address&&8<this.address.length&&"0x0000000000000000000000000000000000000000"!=this.address&&25==t.chainId,expression:"this.address != null && this.address.length >8 && this.address !='0x0000000000000000000000000000000000000000'&&chainId==25"}],staticStyle:{"text-align":"center","line-height":"50px",position:"absolute",right:"0px",top:"17px",width:"200px",height:"50px",background:"#101529","border-radius":"10px","font-size":"18px","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF"}},[t._v(" "+t._s(null!=this.address&&8<this.address.length?this.address.substr(0,4)+"****"+this.address.substr(this.address.length-4,this.address.length-1):0)+" ")]),e("div",{staticStyle:{position:"absolute",right:"250px",top:"26px","line-height":"0.2"}},[e("img",{staticStyle:{width:"26px",height:"22px"},attrs:{src:t.twitter,alt:""},on:{click:function(e){return t.goLink("https://twitter.com/verysimpledao")}}}),e("img",{staticStyle:{width:"26px",height:"18px","margin-left":"30px"},attrs:{src:t.gitbook,alt:""},on:{click:function(e){return t.goLink("https://verysimpledao.gitbook.io/vsdao-finance/")}}}),e("img",{staticStyle:{width:"26px",height:"25px","margin-left":"30px"},attrs:{src:t.github,alt:""},on:{click:function(e){return t.goLink("https://github.com/VSDAO/VerySimpleDao")}}}),e("img",{staticStyle:{width:"24px",height:"26px","margin-left":"30px"},attrs:{src:t.discord,alt:""},on:{click:function(e){return t.goLink("https://discord.gg/F7DZbAfC4K")}}})])])]),e("div",{staticStyle:{width:"100%","min-height":"1594px",position:"relative"}},[e("img",{staticStyle:{width:"325px",height:"292px",position:"absolute",right:"5px",top:"-50px"},attrs:{src:t.icon_bg1,alt:""}}),e("img",{staticStyle:{width:"397px",height:"328px",position:"absolute",right:"137px",top:"92px"},attrs:{src:t.icon_bg2,alt:""}}),e("div",{staticStyle:{width:"830px",margin:"0px auto 0px auto","padding-top":"50px"}},[e("div",{staticStyle:{width:"830px",height:"250px",background:"#FFFFFF","border-radius":"10px","padding-top":"28px",position:"relative"}},[e("div",{staticStyle:{width:"830px",height:"20px",background:"#F94F01"}}),e("img",{staticStyle:{width:"405px",height:"97px",position:"absolute",left:"57px",top:"63px"},attrs:{src:t.icon_331,alt:""}}),e("img",{staticStyle:{width:"71px",height:"110px",position:"absolute",right:"61px",top:"44px"},attrs:{src:t.icon_332,alt:""}})]),e("div",{staticStyle:{"font-size":"16px","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"24px",width:"830px",position:"absolute",top:"220px",padding:"22px 22px"}},[t._v("3, 3 is the staking reward pool in the VSDDAO ecosystem, similar to the Syrup Pool of PancakeSwap. By staking your sVSD with VSDDAO, you will taken rewards from the partners.")])]),e("div",{staticStyle:{width:"830px",margin:"0px auto 0px auto","padding-top":"20px"}},[e("div",{staticStyle:{width:"830px","padding-bottom":"30px",background:"#FFFFFF","border-radius":"10px"}},[e("div",{staticStyle:{"font-size":"24px","font-family":"Fredoka One","font-weight":"400",color:"#101529","padding-left":"23px","padding-top":"25px"}},[t._v("3, 3")]),e("div",{staticStyle:{width:"720px",margin:"23px auto 0px auto"}},[e("div",{staticStyle:{"text-align":"center"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isDeposit,expression:"isDeposit"}],staticStyle:{left:"270px","font-size":"20px","font-family":"Lato","font-weight":"bold","text-decoration":"underline",color:"#101529"},on:{click:function(e){return t.depositClick(!0)}}},[t._v("Deposit")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDeposit,expression:"!isDeposit"}],staticStyle:{right:"270px","font-size":"20px","font-family":"Lato","font-weight":"bold",color:"#C3C6CF"},on:{click:function(e){return t.depositClick(!0)}}},[t._v("Deposit")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isDeposit,expression:"isDeposit"}],staticStyle:{right:"270px","font-size":"20px","font-family":"Lato","font-weight":"bold",color:"#C3C6CF","margin-left":"17px"},on:{click:function(e){return t.depositClick(!1)}}},[t._v("Withdraw")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDeposit,expression:"!isDeposit"}],staticStyle:{left:"270px","font-size":"20px","font-family":"Lato","font-weight":"bold","text-decoration":"underline",color:"#101529","margin-left":"17px"},on:{click:function(e){return t.depositClick(!1)}}},[t._v("Withdraw")])]),e("div",{staticStyle:{"margin-top":"25px"}},[e("div",{staticStyle:{width:"720px",position:"relative"}},[e("div",{staticStyle:{width:"521px",height:"56px",background:"#FFFFFF",border:"1px solid #F65166",position:"absolute",top:"0"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeAmount,expression:"stakeAmount"}],staticStyle:{height:"40px",width:"400px","line-height":"50px","padding-left":"10px",position:"absolute",top:"10px","font-size":"20px"},attrs:{type:"text"},domProps:{value:t.stakeAmount},on:{input:function(e){e.target.composing||(t.stakeAmount=e.target.value)}}}),e("div",{staticStyle:{"font-size":"20px","font-family":"Fredoka One","font-weight":"400",color:"#F94F01",position:"absolute",right:"30px",top:"18px",cursor:"pointer"}},[t._v("MAX")])]),e("div",{staticStyle:{"text-align":"center","line-height":"56px",position:"absolute",right:"0px",width:"180px",height:"56px",background:"#C3C6CF","border-radius":"12px",cursor:"pointer","font-size":"20px","font-family":"Lato","font-weight":"bold",color:"#101529"},on:{click:function(e){return t.approveLp()}}},[t._v(" Coming Soon ")])])])]),t._m(0)])])])]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isMobile,expression:"isMobile"}],staticStyle:{width:"10rem","min-height":"30rem",background:"#FFEFDD","padding-top":"0.27rem"}},[e("div",{staticStyle:{width:"9.33rem","padding-bottom":"0.77rem",background:"#FFFFFF","border-radius":"0.13rem",margin:"0px auto 0px auto"}},[e("div",{staticStyle:{width:"9.33rem",height:"3.73rem",background:"#FFFFFF","border-radius":"0.13rem","padding-top":"0.37rem",position:"relative"}},[e("div",{staticStyle:{width:"9.33rem",height:"0.27rem",background:"#F94F01"}}),e("img",{staticStyle:{width:"5.4rem",height:"1.29rem",position:"absolute",left:"0.2rem",top:"0.84rem"},attrs:{src:t.icon_331,alt:""}}),e("img",{staticStyle:{width:"0.96rem",height:"1.4rem",position:"absolute",right:"1rem",top:"0.62rem"},attrs:{src:t.icon_332,alt:""}})]),e("div",{staticStyle:{"font-size":"0.21rem","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"1.5",width:"8.6rem",position:"absolute",top:"4.5rem",left:"0.54rem"}},[t._v("3, 3 is the staking reward pool in the VSDDAO ecosystem, similar to the Syrup Pool of PancakeSwap. By staking your sVSD with VSDDAO, you will taken rewards from the partners.")])]),e("div",{staticStyle:{width:"9.33rem",margin:"0px auto 0px auto","padding-top":"0.5rem"}},[e("div",{staticStyle:{width:"9.33rem","padding-bottom":"0.5rem",background:"#FFFFFF","border-radius":"0.13rem"}},[e("div",{staticStyle:{"font-size":"0.64rem","font-family":"Fredoka One","font-weight":"400",color:"#101529","padding-left":"0.44rem","padding-top":"0.45rem"}},[t._v("3, 3")]),e("div",{staticStyle:{width:"9.33rem",margin:"0.5rem auto 0px auto"}},[e("div",{staticStyle:{"text-align":"center",width:"5rem",margin:"0rem auto 0px auto"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.isDeposit,expression:"isDeposit"}],staticStyle:{"font-size":"0.4rem","font-family":"Lato","font-weight":"bold","text-decoration":"underline",color:"#101529"},on:{click:function(e){return t.depositClick(!0)}}},[t._v("Deposit")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDeposit,expression:"!isDeposit"}],staticStyle:{"font-size":"0.4rem","font-family":"Lato","font-weight":"bold",color:"#C3C6CF"},on:{click:function(e){return t.depositClick(!0)}}},[t._v("Deposit")]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.isDeposit,expression:"isDeposit"}],staticStyle:{"font-size":"0.4rem","font-family":"Lato","font-weight":"bold",color:"#C3C6CF","margin-left":"0.5rem"},on:{click:function(e){return t.depositClick(!1)}}},[t._v("Withdraw")]),e("span",{directives:[{name:"show",rawName:"v-show",value:!t.isDeposit,expression:"!isDeposit"}],staticStyle:{"font-size":"0.4rem","font-family":"Lato","font-weight":"bold","text-decoration":"underline",color:"#101529","margin-left":"0.5rem"},on:{click:function(e){return t.depositClick(!1)}}},[t._v("Withdraw")])]),e("div",{staticStyle:{width:"8.53rem",margin:"0.3rem auto 0rem auto"}},[e("div",{staticStyle:{width:"8.53rem",height:"1.07rem",background:"#FFFFFF",border:"0.01rem solid #F65166",position:"relative"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.stakeAmount,expression:"stakeAmount"}],staticStyle:{height:"0.8rem",width:"7.5rem","line-height":"0.8rem","padding-left":"0.1rem",position:"absolute",top:"0.1rem","font-size":"0.32rem"},attrs:{type:"text"},domProps:{value:t.stakeAmount},on:{input:function(e){e.target.composing||(t.stakeAmount=e.target.value)}}}),e("div",{staticStyle:{"font-size":"0.4rem","font-family":"Fredoka One","font-weight":"400",color:"#F94F01",position:"absolute",right:"0.5rem",top:"0.3rem",cursor:"pointer"}},[t._v("MAX")])]),e("div",{staticStyle:{"text-align":"center","line-height":"1.33rem",width:"8.53rem",height:"1.33rem",background:"#101529","border-radius":"0.13rem",cursor:"pointer","font-size":"0.4rem","margin-top":"0.3rem","font-family":"Lato","font-weight":"bold",color:"#FFFFFF"},on:{click:function(e){return t.approveLp()}}},[t._v(" Coming Soon ")])])]),t._m(1)])])])])}),[function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticStyle:{width:"720px",margin:"100px auto 0px auto"}},[t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{"font-size":"16px","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"24px",flex:"1"}},[this._v("Your Staked Balance (depositable)")]),t("div",{staticStyle:{"font-size":"16px","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"24px",flex:"1","text-align":"right"}},[this._v("0 sVSD")])])])},function(){var t=this.$createElement;t=this._self._c||t;return t("div",{staticStyle:{width:"8.53rem",margin:"0.5rem auto 0px auto"}},[t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{"font-size":"0.24rem","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"0.48rem",flex:"3"}},[this._v("Your Staked Balance (depositable)")]),t("div",{staticStyle:{"font-size":"0.24rem","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"0.48rem",flex:"2","text-align":"right"}},[this._v("0 sVSD")])])])}],!1,null,"73aa69b2",null);e.default=a.exports}}]);