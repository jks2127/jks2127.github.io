"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4092],{4092:(J,w,n)=>{n.r(w),n.d(w,{ChatPageModule:()=>R});var v=n(6895),l=n(433),r=n(8408),f=n(7551),d=n(7582),x=n(7423);const m=(0,x.fo)("Keyboard");var C=n(7825),u=n(3099),c=n(2340),t=n(8274),M=n(7942),T=n(529),I=n(2110),P=n(5730),U=n(51);const S=["chatMessage"],k=["msgInput"];function A(s,a){if(1&s&&(t.TgZ(0,"div",20),t._uU(1),t._UZ(2,"br"),t.TgZ(3,"div",21),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&s){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.hij(" ",o.msg[e].message," "),t.xp6(3),t.Oqu(t.xi3(5,2,o.msg[e].msgTime,"MMM d, yyyy h:mm a"))}}function B(s,a){if(1&s&&(t.TgZ(0,"div",22),t._uU(1),t._UZ(2,"br"),t.TgZ(3,"div",21),t._uU(4),t.ALo(5,"date"),t.qZA()()),2&s){const e=t.oxw().index,o=t.oxw();t.xp6(1),t.hij(" ",o.msg[e].message," "),t.xp6(3),t.Oqu(t.xi3(5,2,o.msg[e].msgTime,"MMM d, yyyy h:mm a"))}}function O(s,a){if(1&s&&(t.TgZ(0,"div",17),t.YNc(1,A,6,5,"div",18),t.YNc(2,B,6,5,"div",19),t._UZ(3,"br"),t.qZA()),2&s){const e=a.index,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.whoseMessage(o.msg[e].sender,o.msg[e].message)),t.xp6(1),t.Q6J("ngIf",!o.whoseMessage(o.msg[e].sender,o.msg[e].message))}}const Z=[{path:"",component:(()=>{class s{constructor(e,o,i,h,g,G,F,E){var b,y;this.router=e,this.ionLoaderService=o,this.http=i,this.weavyService=h,this.alertService=g,this.elementRef=G,this.cookieService=F,this.navController=E,this.weavyUserId=-1,this.weavyUid="",this.msgForm=new l.cw({msgInput:new l.NI("")}),this.msg=[],this.roomId=-1,this.displayName="",this.loggedinUserId=-1,this.typing=!1,this.top=100,this.skip=0,this.refMsgCountFromPrevAPICall=0,this.scrollToBottomFlag=!1,this.weavyUserId=null===(b=this.router.getCurrentNavigation())||void 0===b?void 0:b.extras.state.weavyUserId,this.weavyUid=null===(y=this.router.getCurrentNavigation())||void 0===y?void 0:y.extras.state.weavyUid,this.intervalSubscription=(0,C.F)(1e3).subscribe(p=>{this.getMsgListOfRoom()}),"web"!==x.dV.getPlatform()&&(m.addListener("keyboardWillShow",p=>{console.log("keyboard will show with height:",p.keyboardHeight)}),m.addListener("keyboardDidShow",p=>{console.log("keyboard did show with height:",p.keyboardHeight),this.scrollToBottom()}),m.addListener("keyboardWillHide",()=>{console.log("keyboard will hide")}),m.addListener("keyboardDidHide",()=>{console.log("keyboard did hide")}))}ngOnInit(){null!=this.cookieService.getWeavyAccessToken&&null!=this.cookieService.getWeavyAccessToken&&this.cookieService.getWeavyAccessToken.length>0?this.startWeavyConversation():this.weavyService.getWeavyAccessToken(),this.msg=[],this.loggedinUserId=Number(this.cookieService.getUserId)}goToChatPage(){this.navController.navigateForward("/chat-page",c.N.navOptions)}ngOnDestroy(){this.intervalSubscription.unsubscribe()}onSend(){this.sendMsgToRoom(this.roomId,this.msgForm.value.msgInput),"web"!=x.dV.getPlatform()&&m.show()}whoseMessage(e,o){return Number(e)===this.loggedinUserId}startWeavyConversation(){return(0,d.mG)(this,void 0,void 0,function*(){const e=yield this.ionLoaderService.showLoader(),o=this.http.post(`${c.N.chatServerBaseUrlV1}/api/conversations`,{members:[this.weavyUserId]}).pipe((0,u.B)());return o.subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){e.dismiss(),null!=i.created_at?(this.displayName=i.display_name,this.roomId=i.id,this.getMsgListOfRoom()):this.alertService.presentAlert("Error",i)}),error:i=>{e.dismiss(),this.alertService.presentAlert("Error: Something went wrong! ",i)}}),o})}getMsgListOfRoom(){return(0,d.mG)(this,void 0,void 0,function*(){const o=this.http.get(`${c.N.chatServerBaseUrlV1}/api/apps/`+this.roomId+"/messages",{params:{top:this.top,skip:this.skip}}).pipe((0,u.B)());return o.subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){if(null!=i)if(null==i.end||i.end==i.count){if(this.refMsgCountFromPrevAPICall==i.count)return void(this.scrollToBottomFlag=!1);this.scrollToBottomFlag=!0,this.refMsgCountFromPrevAPICall=i.count,this.msg=[];for(let h=0;h<i.data.length;h++){const g=i.data[h];this.msg.push({sender:Number(g.created_by.uid.split("RK-")[1]),message:g.text,msgTime:g.created_at})}this.markAsRead()}else this.skip=i.count>=100?i.count-100:i.count-i.count/2;else this.alertService.presentAlert("Error",i)}),error:i=>{}}),o})}ngAfterViewChecked(){this.scrollToBottomFlag&&this.scrollToBottom()}scrollToBottom(){try{this.chatMessageDiv.nativeElement.scrollTop=this.chatMessageDiv.nativeElement.scrollHeight}catch(e){console.log("error while scrolling to bottom ",e)}}sendMsgToRoom(e,o){return(0,d.mG)(this,void 0,void 0,function*(){if(null==o||null==o)return!1;const h=this.http.post(`${c.N.chatServerBaseUrlV1}/api/apps/`+e+"/messages",{text:o}).pipe((0,u.B)());return h.subscribe({next:g=>(0,d.mG)(this,void 0,void 0,function*(){null!=g?(this.msg.push({sender:this.cookieService.getUserId,message:o,msgTime:Date.now()}),this.msgForm.value.msgInput="",this.msgInputRef.nativeElement.value=""):this.alertService.presentAlert("Error",g)}),error:g=>{}}),h})}markAsRead(){return(0,d.mG)(this,void 0,void 0,function*(){const o=this.http.put(`${c.N.chatServerBaseUrlV1}/api/conversations/`+this.roomId+"/mark",{}).pipe((0,u.B)());return o.subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){null!=i||this.alertService.presentAlert("Error",i)}),error:i=>{this.alertService.presentAlert("Error: Something went wrong! ",i)}}),o})}setAsDelivered(){return(0,d.mG)(this,void 0,void 0,function*(){const o=this.http.put(`${c.N.chatServerBaseUrlV1}/api/conversations/`+this.roomId+"/delivered",{}).pipe((0,u.B)());return o.subscribe({next:i=>(0,d.mG)(this,void 0,void 0,function*(){null!=i||this.alertService.presentAlert("Error",i)}),error:i=>{this.alertService.presentAlert("Error: Something went wrong! ",i)}}),o})}msgInputOnChange(e){console.log(e),!1===this.typing&&e.length>0?this.typing=!0:0==e.length&&(this.typing=!1)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(f.F0),t.Y36(M.C),t.Y36(T.eN),t.Y36(I.H),t.Y36(P.c),t.Y36(t.SBq),t.Y36(U.R),t.Y36(r.SH))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-chat"]],viewQuery:function(e,o){if(1&e&&(t.Gf(S,5),t.Gf(k,5)),2&e){let i;t.iGM(i=t.CRH())&&(o.chatMessageDiv=i.first),t.iGM(i=t.CRH())&&(o.msgInputRef=i.first)}},inputs:{weavyUserId:"weavyUserId",weavyUid:"weavyUid"},decls:23,vars:3,consts:[["slot","start"],[3,"scrollEvents"],["content",""],[1,"chatMessage"],["chatMessage",""],["class","message-line-outer-span",4,"ngFor","ngForOf"],[1,"goToBottomBtn",2,"display","none",3,"click"],["name","arrow-down-circle-outline"],[2,"margin-bottom","10px","margin-top","10px","box-shadow","none"],[3,"formGroup"],[1,"input-container"],[1,"input-chat"],["formControlName","msgInput",2,"height","43px","width","100%","padding-left","20px","background-color","transparent","border","2px solid rgb(185, 185, 185)","border-radius","30px",3,"ngModelChange"],["msgInput",""],[1,"send-button"],[3,"click"],["name","send"],[1,"message-line-outer-span"],["class","sent-message-line",4,"ngIf"],["class","received-message-line",4,"ngIf"],[1,"sent-message-line"],[1,"msgTime"],[1,"received-message-line"]],template:function(e,o){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Chat"),t.qZA()()(),t.TgZ(6,"ion-content",1,2)(8,"div",3,4),t.YNc(10,O,4,2,"div",5),t.qZA()(),t.TgZ(11,"ion-button",6),t.NdJ("click",function(){return o.scrollToBottom()}),t._UZ(12,"ion-icon",7),t._uU(13," GO TO BOTTOM\n"),t.qZA(),t.TgZ(14,"ion-footer",8)(15,"form",9)(16,"div",10)(17,"div",11)(18,"input",12,13),t.NdJ("ngModelChange",function(h){return o.msgInputOnChange(h)}),t.qZA()(),t.TgZ(20,"div",14)(21,"ion-fab-button",15),t.NdJ("click",function(){return o.onSend()}),t._UZ(22,"ion-icon",16),t.qZA()()()()()),2&e&&(t.xp6(6),t.Q6J("scrollEvents",!0),t.xp6(4),t.Q6J("ngForOf",o.msg),t.xp6(5),t.Q6J("formGroup",o.msgForm))},dependencies:[v.sg,v.O5,l._Y,l.Fj,l.JJ,l.JL,r.YG,r.Sm,r.W2,r.W4,r.fr,r.Gu,r.gu,r.fG,r.wd,r.sr,l.sg,l.u,v.uU],styles:[".input-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:row}.input-chat[_ngcontent-%COMP%]{border:2px solid rgb(185,185,185);border-radius:30px;height:46px;flex-grow:1;margin-left:15px;margin-right:5px}.send-button[_ngcontent-%COMP%]{flex-basis:60px;width:30px}.chatMessage[_ngcontent-%COMP%]{overflow-y:scroll;scroll-behavior:smooth;height:100%}table[_ngcontent-%COMP%]{width:100%;height:50px}ion-fab-button[_ngcontent-%COMP%]{width:47px;height:47px}.message-line-outer-span[_ngcontent-%COMP%]{width:100%;height:auto;color:#fff;font-size:large;margin-top:5px;padding-right:15px;padding-left:15px}.received-message-line[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:80%;background-color:#008383;border-radius:20px;box-shadow:0 0 10px #0a0a0a;padding:8px 15px}.sent-message-line[_ngcontent-%COMP%]{display:block;margin-left:auto;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:80%;background-color:#9e29ad;box-shadow:0 0 10px #0a0a0a;border-radius:20px;padding:8px 15px}.msgTime[_ngcontent-%COMP%]{width:100%;padding-top:5px;text-align:right;font-size:x-small}.goToBottomBtn[_ngcontent-%COMP%]{--background: rgba(0, 0, 0, .219);font-size:x-small;height:20px;width:300px;--border-radius: 50px;position:fixed;z-index:10;bottom:0;width:40%;margin-left:30%;margin-right:30%;margin-bottom:75px}"]}),s})()}];let N=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.Bz.forChild(Z),f.Bz]}),s})(),R=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[v.ez,l.u5,r.Pc,N,l.UX]}),s})()}}]);