"use strict";(self.webpackChunkrecipe_book=self.webpackChunkrecipe_book||[]).push([[665],{665:(dn,ct,h)=>{h.d(ct,{Fj:()=>O,on:()=>se,Oe:()=>$e,CE:()=>U,NI:()=>M,u:()=>re,cw:()=>T,sg:()=>I,x0:()=>R,u5:()=>sn,wO:()=>ae,JJ:()=>Re,JL:()=>Ue,F:()=>P,On:()=>ee,wV:()=>te,c5:()=>le,UX:()=>an,Q7:()=>j,kI:()=>Ct,_Y:()=>Qe});var o=h(639),de=h(8583),ht=h(7574),ce=h(9796),he=h(8002),ft=h(1555),fe=h(4402);function E(n,t){return new ht.y(e=>{const r=n.length;if(0===r)return void e.complete();const i=new Array(r);let s=0,a=0;for(let c=0;c<r;c++){const b=(0,fe.D)(n[c]);let ue=!1;e.add(b.subscribe({next:v=>{ue||(ue=!0,a++),i[c]=v},error:v=>e.error(v),complete:()=>{s++,(s===r||!ue)&&(a===r&&e.next(t?t.reduce((v,ln,un)=>(v[ln]=i[un],v),{}):i),e.complete())}}))}})}let pe=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends pe{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const d=new o.OlP("NgValueAccessor"),mt={provide:d,useExisting:(0,o.Gpc)(()=>O),multi:!0},yt=new o.OlP("CompositionEventMode");let O=(()=>{class n extends pe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const n=(0,de.q)()?(0,de.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",null==e?"":e)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(yt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([mt]),o.qOj]}),n})();function f(n){return null==n||0===n.length}function me(n){return null!=n&&"number"==typeof n.length}const l=new o.OlP("NgValidators"),p=new o.OlP("NgAsyncValidators"),vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Ct{static min(t){return n=t,t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null};var n}static max(t){return n=t,t=>{if(f(t.value)||f(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null};var n}static required(t){return ve(t)}static requiredTrue(t){return!0===t.value?null:{required:!0}}static email(t){return Ve(t)}static minLength(t){return Ae(t)}static maxLength(t){return n=t,t=>me(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null;var n}static pattern(t){return De(t)}static nullValidator(t){return null}static compose(t){return Ne(t)}static composeAsync(t){return Se(t)}}function ve(n){return f(n.value)?{required:!0}:null}function Ve(n){return f(n.value)||vt.test(n.value)?null:{email:!0}}function Ae(n){return t=>f(t.value)||!me(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}function De(n){if(!n)return g;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(f(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}function g(n){return null}function be(n){return null!=n}function Ee(n){const t=(0,o.QGY)(n)?(0,fe.D)(n):n;return(0,o.CqO)(t),t}function Oe(n){let t={};return n.forEach(e=>{t=null!=e?Object.assign(Object.assign({},t),e):t}),0===Object.keys(t).length?null:t}function Fe(n,t){return t.map(e=>e(n))}function we(n){return n.map(t=>function(n){return!n.validate}(t)?t:e=>t.validate(e))}function Ne(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return Oe(Fe(e,t))}}function H(n){return null!=n?Ne(we(n)):null}function Se(n){if(!n)return null;const t=n.filter(be);return 0==t.length?null:function(e){return function(...n){if(1===n.length){const t=n[0];if((0,ce.k)(t))return E(t,null);if((0,ft.K)(t)&&Object.getPrototypeOf(t)===Object.prototype){const e=Object.keys(t);return E(e.map(r=>t[r]),e)}}if("function"==typeof n[n.length-1]){const t=n.pop();return E(n=1===n.length&&(0,ce.k)(n[0])?n[0]:n,null).pipe((0,he.U)(e=>t(...e)))}return E(n,null)}(Fe(e,t).map(Ee)).pipe((0,he.U)(Oe))}}function q(n){return null!=n?Se(we(n)):null}function Ge(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function xe(n){return n._rawValidators}function ke(n){return n._rawAsyncValidators}function L(n){return n?Array.isArray(n)?n:[n]:[]}function F(n,t){return Array.isArray(n)?n.includes(t):n===t}function Be(n,t){const e=L(t);return L(n).forEach(i=>{F(e,i)||e.push(i)}),e}function Te(n,t){return L(t).filter(e=>!F(n,e))}let Pe=(()=>{class n{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=H(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=q(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e){this.control&&this.control.reset(e)}hasError(e,r){return!!this.control&&this.control.hasError(e,r)}getError(e,r){return this.control?this.control.getError(e,r):null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n}),n})(),u=(()=>{class n extends Pe{get formDirective(){return null}get path(){return null}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();class m extends Pe{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Ie{constructor(t){this._cd=t}is(t){var e,r,i;return"submitted"===t?!!(null===(e=this._cd)||void 0===e?void 0:e.submitted):!!(null===(i=null===(r=this._cd)||void 0===r?void 0:r.control)||void 0===i?void 0:i[t])}}let Re=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))},features:[o.qOj]}),n})(),Ue=(()=>{class n extends Ie{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.is("untouched"))("ng-touched",r.is("touched"))("ng-pristine",r.is("pristine"))("ng-dirty",r.is("dirty"))("ng-valid",r.is("valid"))("ng-invalid",r.is("invalid"))("ng-pending",r.is("pending"))("ng-submitted",r.is("submitted"))},features:[o.qOj]}),n})();function N(n,t){return[...t.path,n]}function C(n,t){W(n,t),t.valueAccessor.writeValue(n.value),function(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&je(n,t)})}(n,t),function(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&je(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function S(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),x(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function G(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function W(n,t){const e=xe(n);null!==t.validator?n.setValidators(Ge(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=ke(n);null!==t.asyncValidator?n.setAsyncValidators(Ge(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();G(t._rawValidators,i),G(t._rawAsyncValidators,i)}function x(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=xe(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=ke(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(a=>a!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return G(t._rawValidators,r),G(t._rawAsyncValidators,r),e}function je(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function He(n,t){W(n,t)}function z(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}function qe(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}function J(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===O?e=s:function(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}function k(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}const V="VALID",B="INVALID",y="PENDING",A="DISABLED";function Q(n){return(X(n)?n.validators:n)||null}function Le(n){return Array.isArray(n)?H(n):n||null}function Z(n,t){return(X(t)?t.asyncValidators:n)||null}function Ye(n){return Array.isArray(n)?q(n):n||null}function X(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class K{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=Le(this._rawValidators),this._composedAsyncValidatorFn=Ye(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===B}get pending(){return this.status==y}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=Le(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=Ye(t)}addValidators(t){this.setValidators(Be(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Be(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Te(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Te(t,this._rawAsyncValidators))}hasValidator(t){return F(this._rawValidators,t)}hasAsyncValidator(t){return F(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=y,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=V,this._forEachChild(r=>{r.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===y)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=y,this._hasOwnPendingAsyncValidator=!0;const e=Ee(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(n,t,e){if(null==t||(Array.isArray(t)||(t=t.split(".")),Array.isArray(t)&&0===t.length))return null;let r=n;return t.forEach(i=>{r=r instanceof T?r.controls.hasOwnProperty(i)?r.controls[i]:null:r instanceof $e&&r.at(i)||null}),r}(this,t)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(y)?y:this._anyControlsHaveStatus(B)?B:V}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){X(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class M extends K{constructor(t=null,e,r){super(Q(e),Z(r,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){k(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){k(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class T extends K{constructor(t,e,r){super(Q(e),Z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(r=>{this._throwIfControlMissing(r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{this.controls[r]&&this.controls[r].patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e instanceof M?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const r=this.controls[e];if(this.contains(e)&&t(r))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control with name: '${r}'.`)})}}class $e extends K{constructor(t,e,r){super(Q(e),Z(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[t]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,r={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:r.emitEvent})}removeAt(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((r,i)=>{this._throwIfControlMissing(i),this.at(i).setValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((r,i)=>{this.at(i)&&this.at(i).patchValue(r,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof M?t.value:t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_syncPendingControls(){let t=this.controls.reduce((e,r)=>!!r._syncPendingControls()||e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,r)=>{t(e,r)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,r)=>{if(void 0===t[r])throw new Error(`Must supply a value for form control at index: ${r}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}const xt={provide:u,useExisting:(0,o.Gpc)(()=>P)},D=(()=>Promise.resolve(null))();let P=(()=>{class n extends u{constructor(e,r){super(),this.submitted=!1,this._directives=[],this.ngSubmit=new o.vpe,this.form=new T({},H(e),q(r))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){D.then(()=>{const r=this._findContainer(e.path);e.control=r.registerControl(e.name,e.control),C(e.control,e),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.push(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){D.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name),k(this._directives,e)})}addFormGroup(e){D.then(()=>{const r=this._findContainer(e.path),i=new T({});He(i,e),r.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){D.then(()=>{const r=this._findContainer(e.path);r&&r.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,r){D.then(()=>{this.form.get(e.path).setValue(r)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,qe(this.form,this._directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:["ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([xt]),o.qOj]}),n})(),We=(()=>{class n extends u{ngOnInit(){this._checkParentType(),this.formDirective.addFormGroup(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormGroup(this)}get control(){return this.formDirective.getFormGroup(this)}get path(){return N(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const Bt={provide:m,useExisting:(0,o.Gpc)(()=>ee)},Je=(()=>Promise.resolve(null))();let ee=(()=>{class n extends m{constructor(e,r,i,s){super(),this.control=new M,this._registered=!1,this.update=new o.vpe,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=J(0,s)}ngOnChanges(e){this._checkForErrors(),this._registered||this._setUpControl(),"isDisabled"in e&&this._updateDisabled(e),z(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._parent?N(this.name,this._parent):[this.name]}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){C(this.control,this),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(e){Je.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1})})}_updateDisabled(e){const r=e.isDisabled.currentValue,i=""===r||r&&"false"!==r;Je.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable()})}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,9),o.Y36(l,10),o.Y36(p,10),o.Y36(d,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[o._Bn([Bt]),o.qOj,o.TTD]}),n})(),Qe=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const Tt={provide:d,useExisting:(0,o.Gpc)(()=>te),multi:!0};let te=(()=>{class n extends _{writeValue(e){this.setProperty("value",null==e?"":e)}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([Tt]),o.qOj]}),n})(),Ze=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const ne=new o.OlP("NgModelWithFormControlWarning"),jt={provide:u,useExisting:(0,o.Gpc)(()=>I)};let I=(()=>{class n extends u{constructor(e,r){super(),this.validators=e,this.asyncValidators=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(x(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return C(r,e),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){S(e.control||null,e,!1),k(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,qe(this.form,this.directives),this.ngSubmit.emit(e),!1}onReset(){this.resetForm()}resetForm(e){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(S(r||null,e),i instanceof M&&(C(i,e),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);He(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function(n,t){return x(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){W(this.form,this),this._oldForm&&x(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([jt]),o.qOj,o.TTD]}),n})();const Ht={provide:u,useExisting:(0,o.Gpc)(()=>R)};let R=(()=>{class n extends We{constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}_checkParentType(){tt(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""]],inputs:{name:["formGroupName","name"]},features:[o._Bn([Ht]),o.qOj]}),n})();const qt={provide:u,useExisting:(0,o.Gpc)(()=>U)};let U=(()=>{class n extends u{constructor(e,r,i){super(),this._parent=e,this._setValidators(r),this._setAsyncValidators(i)}ngOnInit(){this._checkParentType(),this.formDirective.addFormArray(this)}ngOnDestroy(){this.formDirective&&this.formDirective.removeFormArray(this)}get control(){return this.formDirective.getFormArray(this)}get formDirective(){return this._parent?this._parent.formDirective:null}get path(){return N(null==this.name?this.name:this.name.toString(),this._parent)}_checkParentType(){tt(this._parent)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formArrayName",""]],inputs:{name:["formArrayName","name"]},features:[o._Bn([qt]),o.qOj]}),n})();function tt(n){return!(n instanceof R||n instanceof I||n instanceof U)}const Lt={provide:m,useExisting:(0,o.Gpc)(()=>re)};let re=(()=>{class n extends m{constructor(e,r,i,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=J(0,s)}set isDisabled(e){}ngOnChanges(e){this._added||this._setUpControl(),z(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return N(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,13),o.Y36(l,10),o.Y36(p,10),o.Y36(d,10),o.Y36(ne,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([Lt]),o.qOj,o.TTD]}),n._ngModelWarningSentOnce=!1,n})();const Kt={provide:l,useExisting:(0,o.Gpc)(()=>j),multi:!0};let j=(()=>{class n{constructor(){this._required=!1}get required(){return this._required}set required(e){this._required=null!=e&&!1!==e&&"false"!=`${e}`,this._onChange&&this._onChange()}validate(e){return this.required?ve(e):null}registerOnValidatorChange(e){this._onChange=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("required",r.required?"":null)},inputs:{required:"required"},features:[o._Bn([Kt])]}),n})();const tn={provide:l,useExisting:(0,o.Gpc)(()=>se),multi:!0};let se=(()=>{class n{constructor(){this._enabled=!1}set email(e){this._enabled=""===e||!0===e||"true"===e,this._onChange&&this._onChange()}validate(e){return this._enabled?Ve(e):null}registerOnValidatorChange(e){this._onChange=e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["","email","","formControlName",""],["","email","","formControl",""],["","email","","ngModel",""]],inputs:{email:"email"},features:[o._Bn([tn])]}),n})();const nn={provide:l,useExisting:(0,o.Gpc)(()=>ae),multi:!0};let ae=(()=>{class n{constructor(){this._validator=g}ngOnChanges(e){"minlength"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this.enabled()?this._validator(e):null}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=this.enabled()?Ae(function(n){return"number"==typeof n?n:parseInt(n,10)}(this.minlength)):g}enabled(){return null!=this.minlength}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["","minlength","","formControlName",""],["","minlength","","formControl",""],["","minlength","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("minlength",r.enabled()?r.minlength:null)},inputs:{minlength:"minlength"},features:[o._Bn([nn]),o.TTD]}),n})();const on={provide:l,useExisting:(0,o.Gpc)(()=>le),multi:!0};let le=(()=>{class n{constructor(){this._validator=g}ngOnChanges(e){"pattern"in e&&(this._createValidator(),this._onChange&&this._onChange())}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}_createValidator(){this._validator=De(this.pattern)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["","pattern","","formControlName",""],["","pattern","","formControl",""],["","pattern","","ngModel",""]],hostVars:1,hostBindings:function(e,r){2&e&&o.uIk("pattern",r.pattern?r.pattern:null)},inputs:{pattern:"pattern"},features:[o._Bn([on]),o.TTD]}),n})(),dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[Ze]]}),n})(),sn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[dt]}),n})(),an=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:ne,useValue:e.warnOnNgModelWithFormControl}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[dt]}),n})()}}]);