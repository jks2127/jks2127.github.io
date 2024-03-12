"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3562],{3562:(O,f,c)=>{c.r(f),c.d(f,{ContactUsPageModule:()=>S});var g=c(6895),v=c(433),r=c(8408),u=c(7551),d=c(7582),p=c(3099),m=c(2340),t=c(8274),x=c(529),U=c(5730),C=c(51),_=c(2110);function M(e,l){1&e&&(t.TgZ(0,"div",16),t._uU(1,"Website"),t.qZA())}function Z(e,l){1&e&&(t.TgZ(0,"div",16),t._uU(1,"Support Email"),t.qZA())}function A(e,l){1&e&&t._UZ(0,"div",17)}function P(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"div",8)(1,"div",9),t.NdJ("click",function(){const s=t.CHM(n).$implicit,a=t.oxw(2);return t.KtG(a.openContactUsMessage(s))}),t.TgZ(2,"div",10),t._uU(3),t.TgZ(4,"div",11),t.YNc(5,M,2,0,"div",12),t.YNc(6,Z,2,0,"div",12),t.YNc(7,A,1,0,"div",13),t.qZA()(),t.TgZ(8,"div",10)(9,"div",14),t._uU(10),t.qZA(),t.TgZ(11,"div",15),t._uU(12),t.ALo(13,"date"),t.qZA()()()()}if(2&e){const n=l.$implicit;t.xp6(3),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("ngIf",0==n.source),t.xp6(1),t.Q6J("ngIf",1==n.source),t.xp6(1),t.Q6J("ngIf",0==n.seen),t.xp6(3),t.Oqu(n.subject),t.xp6(2),t.Oqu(t.xi3(13,6,n.insDttm,"MMM d, yyyy h:mm a"))}}function I(e,l){if(1&e&&(t.TgZ(0,"div",6),t.YNc(1,P,14,9,"div",7),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.contactUsList)}}function b(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"ion-card",18)(1,"ion-card-header")(2,"ion-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-card-subtitle"),t._uU(5),t.qZA(),t.TgZ(6,"ion-card-subtitle"),t._uU(7),t.qZA(),t.TgZ(8,"ion-card-subtitle"),t._uU(9),t.ALo(10,"date"),t.qZA(),t.TgZ(11,"ion-card-subtitle"),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"ion-card-content",19)(15,"div",20)(16,"div",21)(17,"span",22),t._uU(18,"Message: "),t.qZA(),t._UZ(19,"ion-textarea",23),t.qZA()(),t.TgZ(20,"div",20)(21,"div",21)(22,"span",22),t._uU(23,"Remark: "),t.qZA(),t._UZ(24,"ion-textarea",24,25),t.qZA()()(),t.TgZ(26,"div",26)(27,"ion-button",27),t.NdJ("click",function(){t.CHM(n);const o=t.oxw();return t.KtG(o.toggleView())}),t._uU(28,"Cancel"),t.qZA(),t.TgZ(29,"ion-button",28),t.NdJ("click",function(){t.CHM(n);const o=t.MAs(25),s=t.oxw();return t.KtG(s.updateRemark(s.contactUsInfo.id,o.value))}),t._uU(30,"Save"),t.qZA()()()}if(2&e){const n=t.oxw();t.xp6(3),t.hij("Name: ",n.contactUsInfo.name," "),t.xp6(2),t.hij("Email: ",n.contactUsInfo.email," "),t.xp6(2),t.hij("Subject: ",n.contactUsInfo.subject," "),t.xp6(2),t.hij("Received On: ",t.xi3(10,9,n.contactUsInfo.insDttm,"MMM d, yyyy h:mm a")," "),t.xp6(3),t.hij("Last Updated On: ",t.xi3(13,12,n.contactUsInfo.updDttm,"MMM d, yyyy h:mm a")," "),t.xp6(7),t.s9C("value",n.contactUsInfo.message),t.Q6J("autoGrow",!0),t.xp6(5),t.s9C("value",n.contactUsInfo.remark),t.Q6J("autoGrow",!0)}}const T=[{path:"",component:(()=>{class e{constructor(n,i,o,s,a){this.http=n,this.alertService=i,this.cookieService=o,this.router=s,this.weavyService=a,this.contactUsList=[],this.contactInfoListShow=!0}ngOnInit(){this.getContactUsMessageList()}getContactUsMessageList(){return(0,d.mG)(this,void 0,void 0,function*(){const i=this.http.get(`${m.N.apiBaseUrlV1}/superadmin/getcontactusinfo`).pipe((0,p.B)());return i.subscribe({next:o=>(0,d.mG)(this,void 0,void 0,function*(){if(null!=o)for(let s=0;s<o.data.length;s++){const a=o.data[s];this.contactUsList.push({id:a.id,name:a.name,email:a.email,subject:a.subject,message:a.message,seen:a.seen,remark:a.remark,insDttm:a.insDttm,updDttm:a.updDttm,source:a.source})}else this.alertService.presentAlert("Error",o)}),error:o=>{this.alertService.presentAlert("Error: Something went wrong! ",o)}}),i})}updateContactUsInfoAsSeen(n){return(0,d.mG)(this,void 0,void 0,function*(){const o=this.http.put(`${m.N.apiBaseUrlV1}/superadmin/updatecontactusinfoasseen/`+n,{}).pipe((0,p.B)());return o.subscribe({next:s=>(0,d.mG)(this,void 0,void 0,function*(){null!=s||this.alertService.presentAlert("Error",s)}),error:s=>{this.alertService.presentAlert("Error: Something went wrong! ","")}}),o})}openContactUsMessage(n){this.contactUsInfo=n,this.updateContactUsInfoAsSeen(n.id),this.toggleView(),this.contactUsList.map((i,o)=>{i.id==n.id&&(i.seen=1)})}updateRemark(n,i){return(0,d.mG)(this,void 0,void 0,function*(){const s=this.http.put(`${m.N.apiBaseUrlV1}/superadmin/updateRemark/`+n,{remark:i}).pipe((0,p.B)());return s.subscribe({next:a=>(0,d.mG)(this,void 0,void 0,function*(){null!=a?(this.alertService.presentAlert("Success","Updated!!"),this.contactUsList.map(h=>{n==h.id&&(h.remark=i)})):this.alertService.presentAlert("Error",a)}),error:a=>{this.alertService.presentAlert("Error: Something went wrong! ","")}}),s})}toggleView(){this.contactInfoListShow=!this.contactInfoListShow}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.eN),t.Y36(U.c),t.Y36(C.R),t.Y36(u.F0),t.Y36(_.H))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-contact-us"]],decls:10,vars:4,consts:[[3,"translucent"],["slot","start"],[3,"scrollEvents"],["content",""],["class","room","id","contactInfoList",4,"ngIf"],["color","light","id","contactInfoCard",4,"ngIf"],["id","contactInfoList",1,"room"],["class","room-line-outer-span",4,"ngFor","ngForOf"],[1,"room-line-outer-span"],[1,"room-line",3,"click"],[1,"additionalInfoDiv"],[1,"alignAtEndWrapper"],["class","mailSource",4,"ngIf"],["class","unreadMsgDot alignAtEnd","color","success",4,"ngIf"],[1,"mostRecentMsg"],[1,"alignAtEnd"],[1,"mailSource"],["color","success",1,"unreadMsgDot","alignAtEnd"],["color","light","id","contactInfoCard"],["color","light"],["color","light",1,"mostImpContent"],[1,"labelWrapper"],[1,"label"],["disabled","true",3,"autoGrow","value"],["placeholder","Type here ... ",3,"autoGrow","value"],["remarkTextArea",""],[1,"buttons"],["expand","full","color","danger",3,"click"],["expand","full","color","success",3,"click"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Contact Us & Incoming Support Emails"),t.qZA()()(),t.TgZ(6,"ion-content",2,3),t.YNc(8,I,2,1,"div",4),t.YNc(9,b,31,15,"ion-card",5),t.qZA()),2&n&&(t.Q6J("translucent",!0),t.xp6(6),t.Q6J("scrollEvents",!0),t.xp6(2),t.Q6J("ngIf",i.contactInfoListShow),t.xp6(1),t.Q6J("ngIf",!i.contactInfoListShow))},dependencies:[g.sg,g.O5,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.W2,r.Gu,r.fG,r.g2,r.wd,r.sr,r.j9,g.uU],styles:[".room[_ngcontent-%COMP%]{height:100%;width:100%}.room-line-outer-span[_ngcontent-%COMP%]{width:100%;height:auto;color:#fff;font-size:large;margin-top:10px;padding-right:15px;padding-left:15px}.room-line[_ngcontent-%COMP%]{width:100%;background-color:rgba(0,0,0,.157);border-radius:20px;padding:15px 25px}.additionalInfoDiv[_ngcontent-%COMP%]{display:flex;flex-direction:row}.alignAtEnd[_ngcontent-%COMP%]{margin-left:auto;margin-top:auto;text-align:right;font-size:x-small}.alignAtEndWrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-left:auto;margin-top:auto;text-align:end;font-size:x-small}.mailSource[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;text-align:end;font-size:x-small}.mostRecentMsg[_ngcontent-%COMP%]{padding-top:5px;text-align:left;font-size:small}.unreadMsgDot[_ngcontent-%COMP%]{height:10px;width:10px;border-radius:10px;background-color:#0ff}ion-list[_ngcontent-%COMP%]{background-color:transparent}ion-card[_ngcontent-%COMP%]{box-shadow:0 0 15px #000,inset 0 0 5px #3b3b3b}ion-card-title[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:700}ion-card-subtitle[_ngcontent-%COMP%]{font-size:1rem;font-weight:700}.userProfileImage[_ngcontent-%COMP%]{height:200px;width:200px;margin:auto}.mostImpContent[_ngcontent-%COMP%]{font-size:1rem;border-left:8px lawngreen solid;padding-left:10px;margin-top:20px;margin-bottom:20px}.label[_ngcontent-%COMP%]{font-size:1.2rem;font-weight:600}.labelWrapper[_ngcontent-%COMP%]{font-size:1.2rem;margin-top:2px}.buttons[_ngcontent-%COMP%]{display:grid;grid-auto-flow:column;grid-gap:0px;flex:none}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(T),u.Bz]}),e})(),S=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.ez,v.u5,r.Pc,w]}),e})()}}]);