"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1225],{1225:(m,o,u)=>{u.r(o),u.d(o,{stripe_payment_request_button:()=>d});var r=u(5861),i=u(787),l=u(3986);const d=class{constructor(t){(0,i.r)(this,t),this.stripeLoaded=(0,i.c)(this,"stripeLoaded",7),this.loadStripeStatus="",this.applicationName="stripe-pwa-elements",void 0!==this.publishableKey&&void 0!==this.paymentRequestOption?this.initStripe(this.publishableKey,{stripeAccount:this.stripeAccount}):this.loadStripeStatus="failure"}isAvailable(t){var e=this;return(0,r.Z)(function*(){if(void 0===e.publishableKey)throw"You should run this method run, after set publishableKey.";const s=yield(yield(0,l.l)(e.publishableKey,{stripeAccount:e.stripeAccount})).paymentRequest({country:"US",currency:"usd",total:{label:"Demo total",amount:1099},disableWallets:["applePay","googlePay","browserCard"].filter(p=>p!==t)}).canMakePayment();if(!s||"applePay"===t&&!s[t]||"googlePay"===t&&!s[t])throw"This device can not use."})()}setPaymentMethodEventHandler(t){var e=this;return(0,r.Z)(function*(){e.paymentMethodEventHandler=t})()}setPaymentRequestShippingOptionEventHandler(t){var e=this;return(0,r.Z)(function*(){e.shippingOptionEventHandler=t})()}setPaymentRequestShippingAddressEventHandler(t){var e=this;return(0,r.Z)(function*(){e.shippingAddressEventHandler=t})()}stripeLoadedEventHandler(){const t={stripe:this.stripe};this.stripeDidLoaded&&this.stripeDidLoaded(t),this.stripeLoaded.emit(t)}setPaymentRequestOption(t){var e=this;return(0,r.Z)(function*(){return e.paymentRequestOption=t,e})()}initStripe(t,e){var n=this;return(0,r.Z)(function*(){n.loadStripeStatus="loading",(0,l.l)(t,{stripeAccount:null==e?void 0:e.stripeAccount}).then(a=>{n.loadStripeStatus="success",a.registerAppInfo({name:n.applicationName}),n.stripe=a}).catch(a=>{console.log(a),n.loadStripeStatus="failure"}).then(()=>{if(n.stripe)return n.initElement(!(null==e||!e.showButton))}).then(()=>{n.stripe&&n.stripeLoadedEventHandler()})})()}initElement(t=!0){var e=this;return(0,r.Z)(function*(){const n=e.stripe.paymentRequest(e.paymentRequestOption);if(!(yield n.canMakePayment()))throw"paymentRequest is not support.";if(e.paymentMethodEventHandler&&n.on("paymentmethod",s=>{e.paymentMethodEventHandler(s,e.stripe)}),e.shippingOptionEventHandler&&n.on("shippingoptionchange",s=>{e.shippingOptionEventHandler(s,e.stripe)}),e.shippingAddressEventHandler&&n.on("shippingaddresschange",s=>{e.shippingAddressEventHandler(s,e.stripe)}),t){const p=e.stripe.elements().create("paymentRequestButton",{paymentRequest:n}),c=e.el.querySelector("#payment-request-button");p.mount(c),e.el.querySelector("#payment-request").classList.add("visible")}else n.show()})()}render(){return(0,i.h)(i.H,null,(0,i.h)("div",{id:"payment-request"},(0,i.h)("div",{id:"payment-request-button"})),(0,i.h)("slot",null))}get el(){return(0,i.g)(this)}};d.style=":host{display:block}"}}]);