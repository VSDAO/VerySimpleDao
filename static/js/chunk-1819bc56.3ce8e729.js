(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1819bc56"],{"11a7":function(e,t,a){var i=a("b536");(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,a("499e").default)("09817036",i,!0,{sourceMap:!1,shadowMode:!1})},1974:function(e,t,a){"use strict";a.r(t);var i=a("f3f3"),n=a("c964"),r=(a("96cf"),a("5880")),o=a("3a48"),s=a("a78e"),d=a.n(s),c={name:"Header",components:{},data:function(){return{menu2:o.u,loops:"",firstRun:!0,loading:"",showIdailog:!1,showHd4:!1,showHD5:!1,tab:1,isZh:!0,isShowMenu:!1,defAddress:""}},computed:Object(i.a)({},Object(r.mapState)({isMobile:function(e){return e.sys.isMobile}})),mounted:function(){},methods:{onShowMenu:function(){this.$bus.$emit("formBus",!0)},changeLang:function(){var e=d.a.get("lang");e=this.isZh?"en":"zh-CN";switch(this.isZh=!this.isZh,e){case"zh":e="zh-CN";break;case"en":e="en"}d.a.set("lang",e,{expires:31}),localStorage.setItem("language",e),this.$store.dispatch("setLanguage",e),this.$i18n.locale=e},onClickAddress:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,init();case 2:case"end":return e.stop()}}),e)})))()},onClickShowMenu:function(){this.isShowMenu=!this.isShowMenu},goPageMark:function(e){this.tab=1,this.$route.path!==e&&this.$router.push(e)},onTabClick:function(e){1==(this.tab=e)?this.$router.push("/dashboard"):2==e?this.$router.push("/staking"):3==e||5==e&&this.$router.push("/mine")}}},l=(a("d8f6"),a("2877")),f=(s=Object(l.a)(c,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticStyle:{width:"10rem",height:"1.73rem",background:"#F94F01",position:"relative"}},[t("div",{staticStyle:{"font-size":"0.4rem","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF",top:"0.7rem",left:"0.5rem",position:"absolute"}},[e._v("Very Simple DAO")]),t("img",{staticStyle:{width:"0.51rem",height:"0.49rem",position:"absolute",right:"0.5rem",top:"0.7rem"},attrs:{src:e.menu2},on:{click:e.onShowMenu}})])}),[],!1,null,"0ca55b54",null).exports,a("99af"),a("b680"),a("1576")),b=a("7f6c");c={name:"rightMenu",data:function(){return{gitbookh5:o.i,discordh5:o.g,githubh5:o.k,logo_phone:o.q,logo_phone_33_n:o.r,logo_phone_33_p:o.s,twitterh5:o.A,isShowMenu:!1,tab:0,address:"",item11:"--",item12:"--",item21:"--",item22:"--",item23:"--",item31:"--",item32:"--",item33:"--",OHMBalanceOf:0,OHMTotalSupply:0,DAIBalanceOf:0,OHMDAILPBalanceOf:0,OHMDAILPTotalSupply:0,OHMLpBalanceOf:0,DAILpBalanceOf:0,OHMDAOBalanceOf:0,daiPrice:0,DVSDAILPPrice:0,daiROI:0,DVSDAILPROI:0,TreasuryCDaiBalanceOf:0,TreasuryCDVSDAILPBalanceOf:0,PurchasedCDVSDAILP:0,PurchasedDAI:0,recipientAddress:0,slippage:.5,showBoundPosation:0,isApprovaledDai:!1,isApprovaledDVSDAILP:!1,allowanceDai:0,allowanceDVSDaiLp:0,DebtRatioDai:"--",DebtRatioDVSDAILP:"--",PenddingRewardsDai:"--",PenddingRewardsDVSDAILP:"--",ClaimableRewardsDai:"--",ClaimableRewardsDVSDAILP:"--",blockNumber:0,daiBondInfo2:0,DVSDAILPBondInfo2:0,daiBondInfo3:0,DVSDAILPBondInfo3:0,daiBondPrice:0,DVSDAILPBondPrice:0,TimeuntilfullyvestedDai:"--",TimeuntilfullyvestedDVSDAILP:"--",daiBondPriceDisCounts:0,DVSDAILPBondPriceDisCounts:0,chainId:0}},computed:Object(i.a)({},Object(r.mapState)({})),mounted:function(){var e=this;this.$bus.$on("formBus",(function(t,a){e.isShowMenu=!e.isShowMenu})),this.initTab(),this.address=Object(f.j)(),this.initCollect(),this.getInfo(),this.getChainId()},methods:{getChainId:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.o)();case 2:e.chainId=t.sent;case 3:case"end":return t.stop()}}),t)})))()},initTab:function(){var e=this.$route.path;-1!=e.indexOf("dashboard")?this.tab=1:-1!=e.indexOf("staking")?this.tab=2:-1!=e.indexOf("three")?this.tab=3:-1!=e.indexOf("bond")?this.tab=4:-1!=e.indexOf("presales")?this.tab=5:this.tab=1},closeView:function(){this.isShowMenu=!1},onClickMenu:function(e){this.isShowMenu=!1,1==e?this.$router.push("/dashboard"):2==e?this.$router.push("/staking"):3==e?this.$router.push("/three"):4==e?this.$router.push("/bond"):5==e&&this.$router.push("/presales")},initCollect:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.r)();case 2:return t.next=4,Object(f.o)();case 4:if(e.chainId=t.sent,25!=e.chainId)return e.$message.error("Chain error "),t.abrupt("return");t.next=8;break;case 8:a=e,setTimeout((function(){a.address=Object(f.j)()}),3e3);case 10:case"end":return t.stop()}}),t)})))()},goLink:function(e){window.open(e)},getInfo:function(){var e=this,t=Object(b.a)([{target:"0xcd7d16fB918511BF7269eC4f48d61D79Fb26f918",call:["getAmountsOut(uint256,address[])(uint256[])",1e9,["0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03","0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23","0xc21223249CA28397B4B6541dfFaEcC539BfF0c59"]],returns:[["getAmountsOut"]]},{target:"0x0163bf1aa8E3c1a4bf82BE8577dEa471Fb1DEA74",call:["balanceOf(address)(uint256)","0x55aA897b59fbE2ffCB1864b27A753295c53071dc"],returns:[["OHMBalanceOf"]]},{target:"0x0163bf1aa8E3c1a4bf82BE8577dEa471Fb1DEA74",call:["totalSupply()(uint256)"],returns:[["OHMTotalSupply"]]},{target:"0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",call:["balanceOf(address)(uint256)","0x8dc2167cB42735A5E9B70E115A501be0250874bE"],returns:[["DAIBalanceOf"]]},{target:"0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52",call:["balanceOf(address)(uint256)","0x8dc2167cB42735A5E9B70E115A501be0250874bE"],returns:[["OHMDAILPBalanceOf"]]},{target:"0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52",call:["totalSupply()(uint256)"],returns:[["OHMDAILPTotalSupply"]]},{target:"0x0163bf1aa8E3c1a4bf82BE8577dEa471Fb1DEA74",call:["balanceOf(address)(uint256)","0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52"],returns:[["OHMLpBalanceOf"]]},{target:"0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",call:["balanceOf(address)(uint256)","0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52"],returns:[["DAILpBalanceOf"]]},{target:"0x139E963027eeE19D7B1836b4234e604A5f351426",call:["bondPriceInUSD()(uint256)"],returns:[["DAIBondPriceInUSD"]]},{target:"0xC47840ec62F79265F30E096743bbEbA818CA5608",call:["bondPriceInUSD()(uint256)"],returns:[["DVSDAILPBondPriceInUSD"]]},{target:"0x2D03bECE6747ADC00E1a131BBA1469C15fD11e03",call:["balanceOf(address)(uint256)","0x8dc2167cB42735A5E9B70E115A501be0250874bE"],returns:[["TreasuryCDaiBalanceOf"]]},{target:"0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52",call:["balanceOf(address)(uint256)","0x8dc2167cB42735A5E9B70E115A501be0250874bE"],returns:[["TreasuryCDVSDAILPBalanceOf"]]},{target:"0x0163bf1aa8E3c1a4bf82BE8577dEa471Fb1DEA74",call:["balanceOf(address)(uint256)","0x3c28a675DDd62f1bF001C22fE6C0b62B0B41EE52"],returns:[["OHMPurchasedBalanceOf"]]},{target:"0x139E963027eeE19D7B1836b4234e604A5f351426",call:["standardizedDebtRatio()(uint256)"],returns:[["daiStandardizedDebtRatio"]]},{target:"0x2F5C50C9b140dB460bD2eaFe4FEF500Bae4D0f05",call:["standardizedDebtRatio()(uint256)"],returns:[["DVSDAILPStandardizedDebtRatio"]]},{target:"0x139E963027eeE19D7B1836b4234e604A5f351426",call:["bondInfo(address)(uint256, uint256, uint256, uint256)",this.address],returns:[["daiBondInfo1"],["daiBondInfo2"],["daiBondInfo3"],["daiBondInfo4"]]},{target:"0x2F5C50C9b140dB460bD2eaFe4FEF500Bae4D0f05",call:["bondInfo(address)(uint256, uint256, uint256, uint256)",this.address],returns:[["DVSDAILPBondInfo1"],["DVSDAILPBondInfo2"],["DVSDAILPBondInfo3"],["DVSDAILPBondInfo4"]]},{target:"0x139E963027eeE19D7B1836b4234e604A5f351426",call:["pendingPayoutFor(address)(uint256)",this.address],returns:[["daiPendingPayoutFor"]]},{target:"0x2F5C50C9b140dB460bD2eaFe4FEF500Bae4D0f05",call:["pendingPayoutFor(address)(uint256)",this.address],returns:[["DVSDAILPPendingPayoutFor"]]},{target:"0x139E963027eeE19D7B1836b4234e604A5f351426",call:["bondPrice()(uint256)"],returns:[["daiBondPrice"]]},{target:"0x2F5C50C9b140dB460bD2eaFe4FEF500Bae4D0f05",call:["bondPrice()(uint256)"],returns:[["DVSDAILPBondPrice"]]}],{rpcUrl:"https://rpc.vvs.finance/",multicallAddress:"0xF5e9acf58cE6aeaf6d4d37784fF18Da90374a19D"});t.subscribe((function(t){var a,i,n,r,o;"getAmountsOut"==t.type?0!=(a=t.value[t.value.length-1])&&(e.item11=a/1e18):"OHMTotalSupply"==t.type?e.OHMTotalSupply=t.value:"OHMBalanceOf"==t.type?e.OHMBalanceOf=t.value:"DAIBalanceOf"==t.type?e.DAIBalanceOf=t.value:"OHMDAILPBalanceOf"==t.type?e.OHMDAILPBalanceOf=t.value:"OHMDAILPTotalSupply"==t.type?e.OHMDAILPTotalSupply=t.value:"OHMLpBalanceOf"==t.type?e.OHMLpBalanceOf=t.value:"DAILpBalanceOf"==t.type?(e.DAILpBalanceOf=t.value,i=(e.OHMLpBalanceOf*e.DAIBalanceOf/e.DAILpBalanceOf+e.OHMDAILPBalanceOf*e.OHMLpBalanceOf*2/e.OHMDAILPTotalSupply)*e.item11,e.item21=(i/1e9).toFixed(2)):"DAIBondPriceInUSD"==t.type?(i=e.OHMLpBalanceOf*t.value/e.DAILpBalanceOf/1e9*e.item11,e.daiPrice=parseFloat(i).toFixed(2),e.daiROI=(100*(e.item11-i)/i).toFixed(2)):"DVSDAILPBondPriceInUSD"==t.type?(n=e.OHMLpBalanceOf*t.value/e.DAILpBalanceOf/1e9*e.item11,e.DVSDAILPPrice=parseFloat(n).toFixed(2),e.DVSDAILPROI=(100*(e.item11-n)/n).toFixed(2)):"TreasuryCDVSDAILPBalanceOf"==t.type?e.TreasuryCDVSDAILPBalanceOf=t.value:"TreasuryCDaiBalanceOf"==t.type?(e.TreasuryCDaiBalanceOf=t.value,e.PurchasedDAI=(e.OHMLpBalanceOf*t.value*e.item11/e.DAILpBalanceOf/1e9).toFixed(2)):"OHMPurchasedBalanceOf"==t.type?e.PurchasedCDVSDAILP=(e.TreasuryCDVSDAILPBalanceOf*t.value*2*e.item11/e.OHMDAILPTotalSupply/1e9).toFixed(2):"daiStandardizedDebtRatio"==t.type?e.DebtRatioDai=(100*t.value/1e9).toFixed(2):"DVSDAILPStandardizedDebtRatio"==t.type||"daiBondInfo"==t.type||"DVSDAILPBondInfo"==t.type?e.DebtRatioDVSDAILP=(100*t.value/1e18).toFixed(2):"daiBondInfo1"==t.type?e.PenddingRewardsDai=(t.value/1e9).toFixed(2):"DVSDAILPBondInfo1"==t.type?e.PenddingRewardsDVSDAILP=(t.value/1e9).toFixed(2):"daiPendingPayoutFor"==t.type?e.ClaimableRewardsDai=(t.value/1e9).toFixed(2):"DVSDAILPPendingPayoutFor"==t.type?e.ClaimableRewardsDVSDAILP=(t.value/1e9).toFixed(2):"daiBondInfo2"==t.type?e.daiBondInfo2=t.value:"DVSDAILPBondInfo2"==t.type?e.DVSDAILPBondInfo2=t.value:"daiBondInfo3"==t.type?(e.daiBondInfo3=t.value,n=parseInt(e.daiBondInfo2)+parseInt(e.daiBondInfo3),r=0<(r=7*(e.blockNumber-n))?r:-r,n>e.blockNumber?(n=Date.parse(new Date)/1e3+r,e.TimeuntilfullyvestedDai=e.format(n)):(o=Date.parse(new Date)/1e3-r,e.TimeuntilfullyvestedDai=e.format(o))):"DVSDAILPBondInfo3"==t.type?(e.DVSDAILPBondInfo3=t.value,r=e.DVSDAILPBondInfo2+e.DVSDAILPBondInfo3,o=7*Math.abs(e.blockNumber-r),r>e.blockNumber?(r=Date.parse(new Date)/1e3+o,e.TimeuntilfullyvestedDVSDAILP=e.format(r)):(o=Date.parse(new Date)/1e3-o,e.TimeuntilfullyvestedDVSDAILP=e.format(o))):"daiBondPrice"==t.type?(e.daiBondPrice=t.value,e.daiBondPriceDisCounts=(100*e.daiBondPrice/e.item11).toFixed(2)):"DVSDAILPBondPrice"==t.type&&(e.DVSDAILPBondPrice=t.value,e.DVSDAILPBondPriceDisCounts=(100*e.DVSDAILPBondPrice/e.item11).toFixed(2))})),t.onNewBlock((function(t){e.blockNumber=t})),t.start()}}},a("e16e"),r={name:"layout",components:{Header:s,RightMenu:Object(l.a)(c,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowMenu,expression:"isShowMenu"}],staticStyle:{position:"fixed",top:"1.73rem",left:"0rem",width:"100%",height:"100%",display:"flex"}},[t("div",{staticStyle:{width:"3.88rem",height:"100%","background-color":"rgba(253,172,128,0.5)"},on:{click:function(t){return e.closeView()}}}),t("div",{staticStyle:{width:"6.12rem",height:"100%",background:"#FFEFDD"}},[t("div",{staticStyle:{display:"flex"}},[t("img",{staticStyle:{width:"0.92rem",height:"0.89rem","margin-top":"1.36rem","margin-left":"0.81rem"},attrs:{src:e.logo_phone}}),t("div",{staticStyle:{"font-size":"0.4rem","font-family":"Fredoka One","font-weight":"400",color:"#101529","margin-left":"0.4rem","padding-top":"1.65rem"}},[e._v("VSD")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:1==e.tab,expression:"tab==1"}],staticClass:"tab_p",staticStyle:{"margin-top":"1.4rem"},on:{click:function(t){return e.onClickMenu(1)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_p}}),t("div",{staticClass:"tab_text_p"},[e._v(" Dashboard")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:1!==e.tab,expression:"tab!==1"}],staticClass:"tab_n",staticStyle:{"margin-top":"1.4rem"},on:{click:function(t){return e.onClickMenu(1)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_n}}),t("div",{staticClass:"tab_text_n"},[e._v(" Dashboard")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:2==e.tab,expression:"tab==2"}],staticClass:"tab_p",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(2)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_p}}),t("div",{staticClass:"tab_text_p"},[e._v(" Stake")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:2!==e.tab,expression:"tab!==2"}],staticClass:"tab_n",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(2)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_n}}),t("div",{staticClass:"tab_text_n"},[e._v(" Stake")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:3==e.tab,expression:"tab==3"}],staticClass:"tab_p",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(3)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_p}}),t("div",{staticClass:"tab_text_p"},[e._v(" 3,3")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:3!==e.tab,expression:"tab!==3"}],staticClass:"tab_n",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(3)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_n}}),t("div",{staticClass:"tab_text_n"},[e._v(" 3,3")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:4==e.tab,expression:"tab==4"}],staticClass:"tab_p",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(4)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_p}}),t("div",{staticClass:"tab_text_p"},[e._v(" Bond")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:4!==e.tab,expression:"tab!==4"}],staticClass:"tab_n",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(4)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_n}}),t("div",{staticClass:"tab_text_n"},[e._v(" Bond")])]),t("div",{staticStyle:{"padding-left":"0.9rem","padding-top":"0.45rem","font-size":"0.27rem","font-family":"Lato","font-weight":"300",color:"#CF114E"}},[e._v("Bond discouts")]),t("div",{staticStyle:{width:"4rem","margin-left":"0.9rem","font-size":"0.27rem","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"2",display:"flex"}},[t("div",{staticStyle:{width:"2.5rem"}},[e._v("VVS-VSD LP")]),t("div",{staticStyle:{width:"1.5rem","text-align":"right"}},[e._v(e._s(e.DVSDAILPBondPriceDisCounts+" %"))])]),t("div",{staticStyle:{width:"4rem","margin-left":"0.9rem","font-size":"0.27rem","font-family":"Lato","font-weight":"400",color:"#101529","line-height":"0.53rem",display:"flex"}},[t("div",{staticStyle:{width:"2.5rem"}},[e._v("VSD")]),t("div",{staticStyle:{width:"1.5rem","text-align":"right"}},[e._v(e._s(e.daiBondPriceDisCounts+" %"))])]),t("div",{directives:[{name:"show",rawName:"v-show",value:5==e.tab,expression:"tab==5"}],staticClass:"tab_p",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(5)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_p}}),t("div",{staticClass:"tab_text_p"},[e._v(" PreSales")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:5!==e.tab,expression:"tab!==5"}],staticClass:"tab_n",staticStyle:{"margin-top":"0.24rem"},on:{click:function(t){return e.onClickMenu(5)}}},[t("img",{staticClass:"tab_img",attrs:{src:e.logo_phone_33_n}}),t("div",{staticClass:"tab_text_n"},[e._v(" PreSales")])]),t("div",{directives:[{name:"show",rawName:"v-show",value:""==this.address||null==this.address||this.address.length<8||25!=e.chainId,expression:"this.address == '' ||this.address == null || this.address.length < 8 ||chainId!=25"}],staticStyle:{position:"fixed",bottom:"2.4rem","margin-left":"0.79rem","margin-top":"3.4rem","text-align":"center","line-height":"0.88rem",width:"4rem",height:"0.88rem",background:"#101529","font-size":"0.32rem","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF"},on:{click:function(t){return e.initCollect()}}},[e._v(" Connect Wallet ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.address&&8<this.address.length&&25==e.chainId,expression:"this.address != '' && this.address.length >8&& chainId==25"}],staticStyle:{position:"fixed",bottom:"2.4rem","margin-left":"0.79rem","margin-top":"3.4rem","text-align":"center","line-height":"0.88rem",width:"4rem",height:"0.88rem",background:"#101529","font-size":"0.32rem","font-family":"Fredoka One","font-weight":"400",color:"#FFFFFF"}},[e._v(" "+e._s(null!=this.address&&8<this.address.length?this.address.substr(0,4)+"****"+this.address.substr(this.address.length-4,this.address.length-1):0)+" ")]),t("div",{staticStyle:{"margin-left":"0.8rem","margin-top":"0.8rem",display:"flex",position:"fixed",bottom:"0.77rem"}},[t("img",{staticStyle:{width:"0.55rem",height:"0.45rem"},attrs:{src:e.twitterh5,alt:""},on:{click:function(t){return e.goLink("https://twitter.com/verysimpledao")}}}),t("img",{staticStyle:{width:"0.51rem",height:"0.55rem","margin-left":"0.6rem"},attrs:{src:e.gitbookh5,alt:""},on:{click:function(t){return e.goLink("https://verysimpledao.gitbook.io/vsdao-finance/")}}}),t("img",{staticStyle:{width:"0.51rem",height:"0.55rem","margin-left":"0.6rem"},attrs:{src:e.discordh5,alt:""},on:{click:function(t){return e.goLink("https://discord.gg/F7DZbAfC4K")}}}),t("img",{staticStyle:{width:"0.55rem",height:"0.52rem","margin-left":"0.6rem"},attrs:{src:e.githubh5,alt:""},on:{click:function(t){return e.goLink("https://github.com/VSDAO/VerySimpleDao")}}})])])])}),[],!1,null,"3d785ece",null).exports},data:function(){return{}},computed:Object(i.a)({},Object(r.mapState)({isMobile:function(e){return e.sys.isMobile}})),methods:{}},a("a8f1"),r=Object(l.a)(r,(function(){var e=this,t=e.$createElement;t=e._self._c||t;return t("div",{staticClass:"layout"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isMobile,expression:"isMobile"}],staticClass:"header"},[t("Header",{ref:"headerEle"})],1),t("router-view",{ref:"mainPage",staticClass:"content_body"}),t("right-menu")],1)}),[],!1,null,"79b2a10a",null);t.default=r.exports},"609c":function(e,t,a){var i=a("a8ce");(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,a("499e").default)("e201c40c",i,!0,{sourceMap:!1,shadowMode:!1})},6272:function(e,t,a){var i=a("c96a");(i="string"==typeof(i=i.__esModule?i.default:i)?[[e.i,i,""]]:i).locals&&(e.exports=i.locals),(0,a("499e").default)("ad195f8c",i,!0,{sourceMap:!1,shadowMode:!1})},a8ce:function(e,t,a){(t=a("24fb")(!1)).push([e.i,".tip[data-v-0ca55b54]{color:#a6a6a6}.svgIcon[data-v-0ca55b54]{display:block}.flex[data-v-0ca55b54]{display:-webkit-box;display:-webkit-flex;display:flex}.flexc[data-v-0ca55b54]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexb[data-v-0ca55b54],.flexc[data-v-0ca55b54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexb[data-v-0ca55b54]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flexa[data-v-0ca55b54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.home_header[data-v-0ca55b54]{height:.9rem;padding:0 .7rem;position:relative}.home_header .home_header1[data-v-0ca55b54]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.home_header .home_header_w[data-v-0ca55b54]{width:100%;padding-left:6.2rem;margin-top:.05rem}.home_header .home_header_w .span[data-v-0ca55b54]{width:0;height:0;border:.13333rem solid #c20645;border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent}.home_header .home_header2[data-v-0ca55b54]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start;border-top:1px solid #c20645;border-bottom:1px solid #c20645;background:#fff}.home_header .home_header2 .div_item[data-v-0ca55b54]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;background:#fff;color:#c20645;font-size:.27rem;line-height:2.8}.home_header .home_header2 .div_line[data-v-0ca55b54]{width:1px;background:#c20645;height:.24rem;margin-top:.24rem}.home_header .hh_logo[data-v-0ca55b54]{width:.39rem}.home_header .hh_logo[data-v-0ca55b54],.home_header .hh_logo1[data-v-0ca55b54]{display:inline-block;height:.31rem;background-size:cover}.home_header .hh_logo1[data-v-0ca55b54]{width:.89rem;margin-left:.96rem}.home_header .hh_text[data-v-0ca55b54]{color:#c20645;font-size:.11rem}.home_header .hh_text_select[data-v-0ca55b54]{color:#ff276f;font-size:.15rem}.home_header .hh_span_text[data-v-0ca55b54]{font-size:.09rem;color:#ff276f;margin-top:.18rem}.home_header .hh_span_text_a[data-v-0ca55b54]{width:.31rem;height:.16rem;background:#fff;border-radius:.16rem;margin-top:.15rem;margin-left:.02rem;margin-right:.02rem;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.home_header .hh_span_text_a .hh_span_text_a_span_left[data-v-0ca55b54]{width:.14rem;height:.14rem;background:#ff276f;font-size:.001rem;color:#ff276f;border-radius:.14rem;margin-left:.01rem;margin-top:.01rem}.home_header .hh_span_text_a .hh_span_text_a_span_left1[data-v-0ca55b54]{width:.14rem;height:.14rem;background:#fff;font-size:.001rem;color:#fff;border-radius:.14rem;margin-left:.01rem;margin-top:.01rem}.home_header .hh_span_text_a .hh_span_text_a_span_right[data-v-0ca55b54]{width:.14rem;height:.14rem;background:#ff276f;font-size:.001rem;color:#ff276f;border-radius:.14rem;margin-right:.01rem;margin-top:.01rem}.home_header .hh_span_text_div_menu[data-v-0ca55b54]{width:1.47rem;height:.64rem;background:#e75779;border-radius:.32rem;color:#fff;font-size:.32rem;text-align:center;line-height:.64rem;font-weight:700}.home_header .hh_span_text_div_address[data-v-0ca55b54]{width:1.87rem;height:.53rem;background:#e75779;border-radius:.53rem;margin-top:.3rem;margin-right:.02rem;margin-left:.39rem;color:#fff;font-size:.27rem;text-align:center;line-height:1.7;padding-left:.3rem;padding-right:.3rem;position:absolute;right:.5rem;top:-.12rem}",""]),e.exports=t},a8f1:function(e,t,a){"use strict";a("6272")},b536:function(e,t,a){(t=a("24fb")(!1)).push([e.i,".tip[data-v-3d785ece]{color:#a6a6a6}.svgIcon[data-v-3d785ece]{display:block}.flex[data-v-3d785ece]{display:-webkit-box;display:-webkit-flex;display:flex}.flexc[data-v-3d785ece]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexb[data-v-3d785ece],.flexc[data-v-3d785ece]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexb[data-v-3d785ece]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flexa[data-v-3d785ece]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@media screen and (max-width:750px){.tab_n[data-v-3d785ece]{background:#fff}.tab_n[data-v-3d785ece],.tab_p[data-v-3d785ece]{width:4rem;height:.88rem;border-radius:0;margin-left:.79rem;display:-webkit-box;display:-webkit-flex;display:flex;margin-top:.24rem}.tab_p[data-v-3d785ece]{background:#f94f01}.tab_img[data-v-3d785ece]{width:.27rem;height:.52rem;margin-left:.33rem;margin-top:.24rem}.tab_text_p[data-v-3d785ece]{color:#101529}.tab_text_n[data-v-3d785ece],.tab_text_p[data-v-3d785ece]{font-size:.4rem;font-family:Fredoka One;font-weight:400;margin-left:.36rem;line-height:.88rem}.tab_text_n[data-v-3d785ece]{color:#fdac80}}",""]),e.exports=t},c96a:function(e,t,a){(t=a("24fb")(!1)).push([e.i,".tip[data-v-79b2a10a]{color:#a6a6a6}.svgIcon[data-v-79b2a10a]{display:block}.flex[data-v-79b2a10a]{display:-webkit-box;display:-webkit-flex;display:flex}.flexc[data-v-79b2a10a]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.flexb[data-v-79b2a10a],.flexc[data-v-79b2a10a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.flexb[data-v-79b2a10a]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.flexa[data-v-79b2a10a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.layout[data-v-79b2a10a]{width:100%;background:#fff}.header[data-v-79b2a10a]{width:100%;margin:0 auto;z-index:100}",""]),e.exports=t},d8f6:function(e,t,a){"use strict";a("609c")},e16e:function(e,t,a){"use strict";a("11a7")}}]);