"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8140],{8140:(C,h,o)=>{o.r(h),o.d(h,{ProductWishlistPageModule:()=>L});var m=o(6895),P=o(433),s=o(8408),p=o(2570),u=o(7582),d=o(529),g=o(3099),v=o(2340),t=o(8274),f=o(5730),Z=o(4302),A=o(7942);function W(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-thumbnail",1),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"ion-label"),t._uU(4),t.qZA(),t.TgZ(5,"div",8)(6,"ion-button",9),t.NdJ("click",function(){const n=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.removeFromWishlist(n.productInfo.productId))}),t._UZ(7,"ion-icon",10),t._uU(8," \xa0Remove "),t.qZA(),t.TgZ(9,"ion-button",11),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.wishList())}),t._UZ(10,"ion-icon",12),t._uU(11," \xa0Add To Cart "),t.qZA()()()}if(2&i){const e=a.$implicit;t.xp6(2),t.s9C("src",e.productInfo.images[0].src,t.LSH),t.xp6(2),t.Oqu(e.productInfo.productName)}}const S=[{path:"",component:(()=>{class i{constructor(e,r,c,n,l){this.navController=e,this.alertService=r,this.http=c,this.authenticationService=n,this.ionLoaderService=l}ngOnInit(){this.authenticationService.isLoggedIn()?this.loadWishlist():(this.navController.navigateBack("back"),this.alertService.presentAlert("Error","Please Register To View Your Wishlist."))}loadWishlist(){return(0,u.mG)(this,void 0,void 0,function*(){const e=yield this.ionLoaderService.showLoader();let r=new d.LE;r=r.append("userId",this.authenticationService.getUserId());const c=this.http.get(`${v.N.apiBaseUrlV1}/product/wishlist`,{params:r}).pipe((0,g.B)());return c.subscribe({next:n=>(0,u.mG)(this,void 0,void 0,function*(){e.dismiss(),"success"==n.result?this.wishList=n.data:this.alertService.presentAlert("Error",n.comment)}),error:n=>{e.dismiss(),this.alertService.presentAlert("Error",n.error.comment)}}),c})}removeFromWishlist(e){return(0,u.mG)(this,void 0,void 0,function*(){const r=yield this.ionLoaderService.showLoader();let c=new d.LE;c=c.append("userId",this.authenticationService.getUserId()).append("productId",e);const n=this.http.delete(`${v.N.apiBaseUrlV1}/product/wishlist`,{params:c}).pipe((0,g.B)());return n.subscribe({next:l=>(0,u.mG)(this,void 0,void 0,function*(){r.dismiss(),"success"==l.result?(this.alertService.presentAlert("Success",l.comment),this.wishList=this.wishList.filter(T=>T.productId!==e)):this.alertService.presentAlert("Error",l.comment)}),error:l=>{r.dismiss(),this.alertService.presentAlert("Error",l.error.comment)}}),n})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(s.SH),t.Y36(f.c),t.Y36(d.eN),t.Y36(Z.$),t.Y36(A.C))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-product-wishlist"]],decls:21,vars:3,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],["name","heart"],[4,"ngFor","ngForOf"],["alt","",3,"src"],["color","light",1,"buttons",2,"margin","auto"],["color","warning",3,"click"],["name","trash"],["color","success",3,"click"],["name","cart-sharp"]],template:function(e,r){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t._UZ(4,"ion-title"),t.qZA()(),t.TgZ(5,"ion-content",2)(6,"ion-header",3)(7,"ion-toolbar")(8,"ion-title",4),t._uU(9,"product-wishlist"),t.qZA()()(),t.TgZ(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),t._uU(13,"Wish List "),t.qZA(),t.TgZ(14,"ion-card-subtitle")(15,"b"),t._uU(16,"My Choice Is Unique & Better "),t.qZA(),t._UZ(17,"ion-icon",5),t.qZA()(),t.TgZ(18,"ion-card-content")(19,"ion-list"),t.YNc(20,W,12,2,"ion-item",6),t.qZA()()()()),2&e&&(t.Q6J("translucent",!0),t.xp6(5),t.Q6J("fullscreen",!0),t.xp6(15),t.Q6J("ngForOf",r.wishList))},dependencies:[m.sg,s.YG,s.Sm,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.W2,s.Gu,s.gu,s.Ie,s.Q$,s.q_,s.fG,s.Bs,s.wd,s.sr]}),i})()}];let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(S),p.Bz]}),i})(),L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,P.u5,s.Pc,U]}),i})()}}]);